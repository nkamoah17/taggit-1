import {CollectionViewer, SelectionChange, DataSource, SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, merge, Observable, Subject, combineLatest, Subscription, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit, Injectable, ViewChild, ElementRef, OnDestroy, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import {AgaveSystemsService} from '../../services/agave-systems.service';
import {AuthenticatedUser, AuthService} from '../../services/authentication.service';
import { RemoteFile} from 'ng-tapis/models/remote-file'; //RemoteFile is an interface that has properties such as type, length and other callable stuff
import { ApiConfiguration, ApiService, System, SystemSummary} from 'ng-tapis'; // System summary is an interface that has the status and types of the system
import { TapisFilesService } from '../../services/tapis-files.service';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTreeModule,  MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material'
import { objectContaining } from 'ts-mockito';
import { flatMap } from 'tslint/lib/utils';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


let final = [];
let curr_val :any
let cur_track = [];
let cur_track2 = [];

// export class DynamicNode {
//   children: DynamicNode[];
//   constructor(public item: string) { }s
// }

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  children: DynamicFlatNode[];
  constructor(public item: string, public level = 1, public expandable = false,
              public isLoading = false) {}
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable({providedIn: 'root'})
export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ["My Data", ["ep34"]],
    ["ep34", ["IMG_8499.jpg", "sample photos", "wetumpka"]],
    ["wetumpka", ["1"]],
    ["1", ["1388a1a3-1057-4d0e-8390-86eeae433687.jpg"]],
    [
      "sample photos",
      [
        "Beauregard_2.jpg",
        "Beauregard_3.jpg",
        "Troy_1.jpg",
        "Wetumpka_1.jpg",
        "Wetumpka_2.jpg",
        "Wetumpka_3.jpg"
      ]
    ],
    ["Community Data", ["Education Resources", "Recon Portal", "Jupyter Notebooks", "Machine Learning Bootcamp", "Sim Center", "Trash", "app-examples"]],
    ["Education Resources", []],
    ["Recon Portal", []],
    ["Jupyter Notebooks", []],
    [ "Machine Learning Bootcamp", []],
    ["Sim Center", []],
    ["Trash", []],
    ["app-examples", []],
    ["Published Data", ["Unknown", "Error"]],
    ["Shared With Me", ["a"]]
  ]);


  rootLevelNodes: string[] = ['My Data', 'Community Data', 'Published Data', 'Shared With Me'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }
  

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }


  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
  
  buildFileTree(obj: object, level: number): DynamicFlatNode[] {
    return Object.keys(obj).reduce<DynamicFlatNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new DynamicFlatNode('name', 0, true);
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
          console.log('Level+1')
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, [] );
  }

  buildMap(obj: Object): any {
  
  }


}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export class DynamicDataSource implements DataSource<DynamicFlatNode> {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
              private _database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void { }


  /** Handle expand/collapse frs */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }
  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    console.log('Toggling', node)
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no operation
      //put an async await for treeC here and reconstruct filepath
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 3000);
  }
}

  
function AutoUnsub() {
  return function(constructor) {
      const orig = constructor.prototype.ngOnDestroy
      constructor.prototype.ngOnDestroy = function() {
          for(const prop in this) {
              const property = this[prop]
              if(typeof property.subscribe === "function") {
                  property.unsubscribe()
              }
          }
          orig.apply()
      }
  }
}


@Component({
  selector: 'app-modal-file-browser',
  templateUrl: './modal-file-browser.component.html',
  styleUrls: ['./modal-file-browser.component.scss'],
  providers: [DynamicDatabase]
})
  

export class ModalFileBrowserComponent implements OnInit, OnDestroy {
  
  private currentUser: AuthenticatedUser;
  public filesList: Array<RemoteFile>;
  public inProgress: boolean;
  public selectedFiles: Map<string, RemoteFile> = new Map(); //Current map always being passed to current file/selection
  public onClose: Subject<Array<RemoteFile>> = new Subject<Array<RemoteFile>>();
  public projects: Array<SystemSummary>;
  private selectedSystem: SystemSummary;
  public myDataSystem: SystemSummary;
  public communityDataSystem: SystemSummary;
  public publishedDataSystem: SystemSummary;
   dews: Subscription
   hews: Subscription
  // mews: Subscription


	
  /** A selected parent node to be inserted */
  selectedParent: DynamicFlatNode | null = null;
  newItemName = '';
  treeControl: FlatTreeControl<DynamicFlatNode>;
  checklistSelection = new SelectionModel<DynamicFlatNode>(true /* multiple */);

  constructor(
    private database: DynamicDatabase,
    private tapisFilesService: TapisFilesService,
//     private modalRef: BsModalRef,
    public dialogRef: MatDialogRef<ModalFileBrowserComponent>,
    private dialog: MatDialog,
    private authService: AuthService,
    private agaveSystemsService: AgaveSystemsService,
    private tapis: ApiService,

  ) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  ///treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: DynamicFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  // transformer = (node: DynamicNode, level: number) => {
  //   const existingNode = this.nestedNodeMap.get(node);
  //   const flatNode = existingNode && existingNode.item === node.item
  //     ? existingNode
  //     : new DynamicFlatNode(node.item, level, true, true);
  //   flatNode.item = node.item;
  //   flatNode.level = level;
  //   flatNode.expandable = !!node.children;
  //   this.flatNodeMap.set(flatNode, node);
  //   this.nestedNodeMap.set(node, flatNode);
  //   return flatNode;
  // }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: DynamicFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: DynamicFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: DynamicFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }


  ngOnInit() {
    this.agaveSystemsService.list()
    // TODO: change those hard coded systemIds to environment vars or some sort of config
    // wait on the currentUser and systems to resolve
    combineLatest([this.authService.currentUser, this.agaveSystemsService.systems, this.agaveSystemsService.projects])
      .subscribe(([user, systems, projects]) => {
        this.myDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.default');
        this.communityDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.community');
        this.publishedDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.published');
        this.selectedSystem = this.myDataSystem;
        this.projects = projects;
        this.currentUser = user; //Create a way to pass all upper data(combineLatest) to a class as root nodes or new functions?
        const init = <RemoteFile>{
          system: this.myDataSystem.id,
          type: 'dir',
          path: this.currentUser.username
        };

        this.browse(init);
        //this.rumour(init);
        //this.createTree(init)
        
        //const data = this.database.buildFileTree(this.filesList, 1)
        // console.log(data)
        // this.database.dataChange.next(data);
       


      });
    
  }


  ngOnDestroy() {

    this.dews.unsubscribe()
    this.hews.unsubscribe()

  }

  selectSystem(system: SystemSummary): void {
    let pth;
    system.id === this.myDataSystem.id ? pth = this.currentUser.username : pth = '/';
    const init = <RemoteFile>{
      system: system.id,
      type: 'dir',
      path: ""
    };
    this.browse(init);

  }


  

  browse(file: RemoteFile) {
    if (file.type !== 'dir') { return; }
    this.inProgress = true;
    this.selectedFiles.clear();

    this.tapisFilesService.listFiles(file.system, file.path);

    //console.log(await this.tapisFilesService._listing.get
    // this.tapisFilesService.listing.subscribe(listing => {
    //   this.inProgress = false;
    //   this.filesList = listing;
    // });
  

  }





  createTree(file: RemoteFile) {
    const init = <RemoteFile>{
      system: this.myDataSystem.id,
      type: 'dir',
      path: this.currentUser.username
    }

    let gonelevelDeep: boolean = false
    let dirDir: Array<RemoteFile> = [];
    let allPaths: Array<RemoteFile> = [];
  


    async function treeC() {
      try {
        console.log("Try1")
        let response = await listero(init)
        //console.log((response))
        console.log('Try2')
        let list_1 = await getRemoteList(response)
        gonelevelDeep = false
        console.log('Try3')
        if (allPaths.length != 0) {
          let list_2 = await LoopDirectories(list_1)
          console.log('Try4')
          
        }
        return allPaths
      }
      catch (err) {
        console.log(err)
      }
    };
      


    async function listero(now: RemoteFile): Promise<RemoteFile[]> {
      try {
        let cur_t: Array<RemoteFile> = [];
        this.tapisFilesService.listFiles(now.system, now.path);
        cur_t = this.tapisFilesService.listing

        return cur_t

      }
      catch (err) {
        console.log(err)
      }

    }

    async function getRemoteList (rem: Array<RemoteFile> ) {
      if (rem.length != 0) {
        console.log("returning early")
        return
      }
      rem.forEach(function (value, index) {
        if (value.type == 'dir' && value.name != ".." && gonelevelDeep == false) {
          console.log('Found Directory at', value.path)
          dirDir.push(value.path.concat('/'))
          allPaths.push(value.path.concat('/'))
        }
        if (value.type == 'dir' && value.name != ".." && gonelevelDeep == true) {
          console.log('This directory is one level deep', value.path)
          allPaths.push(value.path.concat('/'))
        }
        if (value.type == 'file' && !(allPaths.includes(value.path.concat('/'))) && (value.path.indexOf('jpg') !== -1)) {
          console.log('File found at', value.path)
          allPaths.push(value.path.concat('/'))
        }

      }
      )

      return dirDir;
    }


    async function LoopDirectories(directory: Array<RemoteFile>) {

      for (let [key] of directory.entries()) {
        async function test(key) {
          await listero(key)
          await getRemoteList
        }
      }
    }

      // this.tapisFilesService.listFiles(file.system, file.path);
      // this.dews = this.tapisFilesService.listing.subscribe(init_list => {
      //   this.filesList = init_list;
      //   let lister: RemoteFile[] = Object.create(init_list)
        

    // const loop = (lister:Array<RemoteFile>) => {
    //     lister.forEach(function (value, index) {
    //       if (value.type == 'dir' && value.name != "..") {  
    //         console.log('Found directory')
    //         value.path = value.path.concat('/')
    //         console.log(value.path)
    //         //final.push(value.path)
    //         DirectoryWalker(value)

    //       }
    //       if (value.type == 'file' && !(final.includes(value.path)) && (value.path.indexOf('jpg') !== -1)) {
    //         console.log('Found file')
    //         console.log(value.path)
    //         final.push(value.path)
    //       }
  
  
        
    //       resolve(true)
    //       return;
    //     })
    //     reject('Something wrong')
    //   }



            
    const treebuild = (turree: string[]) => {
      return this.Treeify(turree)
    }


    async function TreeCreation(): Promise<void> {
      console.log('TreeCreation began')
      await listero
      console.log('Listeroo Done')
      let fjson = treebuild(final)
      console.log('Second_One Done')
      console.log(fjson)
      let fjson2 = JSON.stringify(fjson)
      //console.log(fjson2)
      let new_by = fjson2.charAt(1)
      let fjson_2 = fjson2.replace(new_by, ' "Root' )
      console.log(fjson_2)
      let cur = JSON.parse(fjson_2)



    };

    let promise = treeC();
    promise.then(result => console.log(result))

    //Use async and await with then
    


  

  };

    
  Treeify(files:string[]) {
    let fileTree = {};
    console.log('Treeify has started')
    
    if (files instanceof Array === false) {
      throw new Error('Expected an Array of file paths but received' + files);
    }


  function mergePathsIntoFileTree(prevDir, currDir, i, filePath) {
    if (i === filePath.length - 1) {
      prevDir[currDir] = null;


    }

    if (!prevDir.hasOwnProperty(currDir)) {
      prevDir[currDir] = {};


    }
    return prevDir[currDir];

  }

  function parseFilePath(filePath:string) {
    let file_loc = filePath.split('/');

    if (file_loc.length === 1) {

      return (fileTree[file_loc[0]] = null);

    }
    file_loc.reduce(mergePathsIntoFileTree, fileTree);
    
  }
    
    
  for (let file of files) {

    parseFilePath(file)
    // let final_map = new Map<string, string[]>([
    // file, []
    //Ok, so this is the way, instead of mapping them, read Joel Griffith's post again and know how reduce breaks them down
    //Using map, creaate a big map at the top and use map.set and map.get  whenever a neew filepath is passed. 
    // Keep using set and append to add to dataMAP
    // ])
    }

  return fileTree;

  
    
  }


BuildDataMap() {
    let count:number = 0
    let array2: string[] = [];
    let array3: Array<string>[]= [];
    let newone: string[] = []
  
  
  for (const [yek, value] of Object.entries(curr_val['Root'])) {
      if (typeof value == 'object') {
      array2.push(yek)
      keepIter(value)
  
        
          }
        }
  
  function keepIter(obj:Object | any): void {
        for (let [key, valued] of Object.entries(obj)){
        if (valued == null) {
          newone.push(String(key))
          }
        if (valued != null) {
          array3.push(newone)
            }
        if (valued != null) {
          array2.push(key)
          count += 1
          newone = [];
          keepIter(obj[key])
              
            }           
          }
         
  
        }
  
  console.log(array2)
  console.log(array3)
  let cons = array3.slice(1,)
  
//this.database.dataMap.set(array2[0], cons)
  
  for (let i = 0; i < array2.length; i += 1) {
      this.database.dataMap.set(array2[i], array3[i])
  }
  }

  BuildTree() {
    console.log('Completed')

    let final2: string = JSON.stringify(final)
  
    let final3: string[] = final
    
    const treebuild = (turree: string[]) => {
      return this.Treeify(turree)
    }

    const finalBuild = (tree: object) => {
      const final_tree = this.database.buildFileTree(tree, 1)
      this.dataSource.dataChange.subscribe(final_tree => {
        this.dataSource.data = final_tree;
      });
      this.dataSource.dataChange.next(final_tree)
      return final_tree

    
    }
    
    async function BTreeData() {
       console.log('Treeify finna be called')
       let fjson = await treebuild(final3);
      console.log('Treeify complete')
      //const flattened = fjson => [].concat(...fjson
      // const count = (str: string, reg: RegExp) => {
      //   //const ke = /[[]/g
      //   return ((str || '').match(reg) || []).length
      // }
      
      
      // let re = /:null(?=,)/g
      // let de = /:null(?=})/g
      // let ne= /:{(?=")/g
      // let ro = /[}]/g
       
      // const new_str = fjson2.replace(re, '')
      // const newer_str = new_str.replace(de,'')
      // const newest_str = newer_str.replace(ne, '[')
      // const word = newest_str.replace(ro, ']')

      // console.log(word)
      


      // if (count(word, /[[]/g) - count(word, /[]]/g)) {
        
      // 

      //let fjson3: Object = JSON.parse(fjson_2)
      //console.log(fjson3)
      //let final_p = await finalBuild(fjson3)
      //console.log(final_p)
      
    }

 
    let promise = BTreeData();
    promise.then(result => console.log(result))
    //this.database.dataMap.set(fjson)

    // console.log(final_tree)
    // this.dataSource.dataChange.next(data);
    // console.log('done')
    
  }


  //[Ken**] In my new functions, for each new or when isSelected, populate the tree with Browse, right above

  // TODO: Ian: Error message on incorrect file type?
  select(file: RemoteFile) {
    if (this.tapisFilesService.checkIfSelectable(file)) {
      this.addSelectedFile(file);
    }
    // here?
    // else {
    //   Signal Error!
    // }
  }

  addSelectedFile(file: RemoteFile) {
    if (this.selectedFiles.has(file.path)) {
      this.selectedFiles.delete(file.path);
    } else {
      this.selectedFiles.set(file.path, file);
    }
  }

  chooseFiles() {
    const tmp = Array.from(this.selectedFiles.values());
    // this.onClose.next(tmp);
    // this.modalRef.hide();
    this.dialogRef.close(tmp)
  }


  cancel() {
    // this.modalRef.hide();
    this.dialogRef.close()
  }
}




/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */