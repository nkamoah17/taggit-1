

export class via_demo {
  e: any;
  p: any;
  scale_factor: any;
  offset_x: any;
  offset_y: any;
  attributes: any;
  dview: any;
  dimg: any;
  regions: any[];
  file_attributes: {};
  shape_attributes: {};
  region_attributes: {};
  svg_attributes: any;
  recompute_svg: boolean;
  descending_order: boolean;
  result: any;
  _via_current_image_filename: any;
  _via_current_image: any;
  _via_current_image_width: any;
  _via_current_image_height: any;
  _via_reg_ctx: any; //initialized in via_init()
  field_separator: any;
  _via_canvas_width: any;
  _via_canvas_height: any;
  _via_file_attributes: any;
  _via_region_click_x: any;
  _via_region_click_y: any;
  _via_paste_to_multiple_images_input: any;
  // img_buffer_now: HTMLElement;
  _via_message_clear_timer: any; //message
  msg: any;
  px: number;
  py: number;

  _via_user_input_ok_handler: any;
  _via_user_input_cancel_handler: any;
  data: any;
  line: any;
  rr: number;
  sel_shape_name: any;
  image_index: number;
  x; i: any;
  y: any;
  canvas_attr: any;
  move_x: any;
  move_y: any;
  vertex_id: number;
  cx; cy; rx; ry; w; h; r; s; t; m: any;
  rindex: any;
  all_points_x; all_points_y; shape: any;
  d: any;
  corner_id; preserve_aspect_ratio: any;
  region_shape; value: any;
  zoom_level_index: any;
  type: any;
  default_id: any;
  next_offset: any;
  show: any;
  is_selected: any;
  is_error: any;
  classname: any;
  regex: any;
  title: any;
  attr_id; option_id; option_desc; option_default; attribute_type: any;
  attr_type; attr_val; attr_value; move: any;

  is_inside; is_on_edge; resize; initialize; dist_to_nearest_edge: any;
  attribute_id: any;
  is_delete; new_option_id; image_id: any;
  cancel_handler; config: any;
  ok_handler; input: any;
  html_position: {
    top: any,
    left: any,
  };

  top; left: any;
  row_id; html_id; img_index_list: any
  update_count; rid: any;
  project_file_data; url: any;
  file_id; size: any;
  filename; base64: any;
  button: any;
  _via_region_attributes: any;
  region_id: any;
  is_valid: boolean;
  is_disabled: any;
  group: any;
  current_level: any;
  target_level: any;
  value_index: any;

  id; data_img_space; view_scale_factor; view_offset_x; view_offset_y: any;

  buffer_index; preload_index; not_in_preload_list: any;
  img_id: any;

  file_index; array_list: any;
  aid: any;

  img_index; stat; sa; pts: any;

  // "use strict";
  //************* REMEMBER TO INITIALIZE THIS SHIT IN VIA_COMPONENT */

  VIA_VERSION: string;
  VIA_NAME: string;
  VIA_SHORT_NAME: string;
  VIA_REGION_SHAPE: {
    RECT: string;
    CIRCLE: string;
    ELLIPSE: string;
    POLYGON: string;
    POINT: string;
    POLYLINE: string;
  };

  VIA_ATTRIBUTE_TYPE: {
    TEXT: string;
    CHECKBOX: string;
    RADIO: string;
    IMAGE: string;
    DROPDOWN: string;
  };

  VIA_DISPLAY_AREA_CONTENT_NAME: {
    IMAGE: string;
    IMAGE_GRID: string;
    SETTINGS: string;
    PAGE_404: string;
    PAGE_GETTING_STARTED: string;
    PAGE_ABOUT: string;
    PAGE_START_INFO: string;
    PAGE_LICENSE: string;
  };

  VIA_ANNOTATION_EDITOR_MODE: {
    SINGLE_REGION: string;
    ALL_REGIONS: string;
  };

  VIA_ANNOTATION_EDITOR_PLACEMENT: {
    NEAR_REGION: string;
    IMAGE_BOTTOM: string;
    DISABLE: string;
  };

  VIA_REGION_EDGE_TOL: number;  // pixel
  VIA_REGION_CONTROL_POINT_SIZE: number;
  VIA_POLYGON_VERTEX_MATCH_TOL: number;
  VIA_REGION_MIN_DIM: number;
  VIA_MOUSE_CLICK_TOL: number;
  VIA_ELLIPSE_EDGE_TOL: number;// euclidean distance
  VIA_THETA_TOL: number; // 10 degrees
  VIA_POLYGON_RESIZE_VERTEX_OFFSET: number;
  VIA_CANVAS_DEFAULT_ZOOM_LEVEL_INDEX: number;
  VIA_CANVAS_ZOOM_LEVELS: number[];
  VIA_REGION_COLOR_LIST: string[];
  VIA_REGION_POINT_RADIUS: number;
  VIA_REGION_POINT_RADIUS_DEFAULT: number;

  VIA_THEME_REGION_BOUNDARY_WIDTH: number;
  VIA_THEME_BOUNDARY_LINE_COLOR: string;
  VIA_THEME_BOUNDARY_FILL_COLOR: string;
  VIA_THEME_SEL_REGION_FILL_COLOR: string;
  VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR: string;
  VIA_THEME_SEL_REGION_OPACITY: number;
  VIA_THEME_MESSAGE_TIMEOUT_MS: number;
  VIA_THEME_CONTROL_POINT_COLOR: string;

  VIA_CSV_SEP: string;
  VIA_CSV_QUOTE_CHAR: string;
  VIA_CSV_KEYVAL_SEP: string;

  _via_img_metadata: {};  // data structure to store loaded images metadata
  _via_img_src: {};   // image content {abs. path, url, base64 data, etc}
  _via_img_fileref: {}; // reference to local images selected by using browser file selector
  _via_img_count: number;  // count of the loaded images
  _via_canvas_regions: any[];// image regions spec. in canvas space
  _via_canvas_scale: number;// current scale of canvas image

  _via_image_id: string; // id={filename+length} of current image
  _via_image_index: number;// index


  // a record of image statistics (e.g. width, height)

  _via_img_stat: {};
  _via_is_all_img_stat_read_ongoing: boolean;
  _via_img_stat_current_img_index: boolean;

  // image canvas
  _via_display_area: HTMLElement;
  _via_img_panel: HTMLElement;
  _via_reg_canvas: HTMLCanvasElement;


  // canvas zoom
  _via_canvas_zoom_level_index: number; // 1.0
  _via_canvas_scale_without_zoom: number;

  // state of the application
  _via_is_user_drawing_region: boolean;
  _via_current_image_loaded: boolean;
  _via_is_window_resized: boolean;
  _via_is_user_resizing_region: boolean;
  _via_is_user_moving_region: boolean;
  _via_is_user_drawing_polygon: boolean;
  _via_is_region_selected: boolean;
  _via_is_all_region_selected: boolean;
  _via_is_loaded_img_list_visible: boolean;
  _via_is_attributes_panel_visible: boolean;
  _via_is_reg_attr_panel_visible: boolean;
  _via_is_file_attr_panel_visible: boolean;
  _via_is_canvas_zoomed: boolean;
  _via_is_loading_current_image: boolean;
  _via_is_region_id_visible: boolean;
  _via_is_region_boundary_visible: boolean;
  _via_is_region_info_visible: boolean;
  _via_is_ctrl_pressed: boolean;
  _via_is_debug_mode: boolean;

  // region
  _via_current_shape: string;
  _via_current_polygon_region_id: number;
  _via_user_sel_region_id: number;
  _via_click_x0: number;
  _via_click_y0: number;
  _via_click_x1: number;
  _via_click_y1: number;

  _via_region_edge: number[];
  _via_current_x: number;
  _via_current_y: number;

  // region copy/paste
  _via_region_selected_flag: any;
  _via_copied_image_regions: any;

  // attributes
  _via_attribute_being_updated: string;
  _via_attributes: {};
  _via_current_attribute_id: string;

  // region group color
  _via_canvas_regions_group_color: {}; // color of each region

  // invoke a method after receiving user input
  _via_user_input_data:
    { confirm: any, top: any };

  // annotation editor
  _via_annotation_editor_panel: HTMLElement;
  _via_metadata_being_updated: string;// {region, file}
  _via_annotation_editor_mode: string;

  // persistence to local storage
  _via_is_local_storage_available: boolean; 
  _via_is_save_ongoing: boolean;

  // all the image_id and image_filename of images added by the user is
  // stored in _via_image_id_list and _via_image_filename_list
  //
  // Image filename list (img_fn_list) contains a filtered list of images
  // currently accessible by the user. The img_fn_list is visible in the
  // left side toolbar. image_grid, next/prev, etc operations depend on
  // the contents of _via_img_fn_list_img_index_list.
  _via_image_id_list: any[];// array of all image id (in order they were added by user)
  _via_image_filename_list: any[];// array of all image filename
  _via_image_load_error: any[]; // {true, false}
  _via_image_filepath_resolved: any[]; // {true, false}
  _via_image_filepath_id_list: any[];// path for each file

  _via_reload_img_fn_list_table: boolean;
  _via_img_fn_list_img_index_list: any[];// image index list of images show in img_fn_list
  _via_img_fn_list_html: any[];// html representation of image filename list

  // image grid
  image_grid_panel: HTMLElement;
  _via_display_area_content_name: string; // describes what is currently shown in display area
  _via_display_area_content_name_prev: string;;
  _via_image_grid_requires_update: boolean;
  _via_image_grid_content_overflow: boolean;
  _via_image_grid_load_ongoing: boolean;
  _via_image_grid_page_first_index: number; // array index in _via_img_fn_list_img_index_list[]
  _via_image_grid_page_last_index: number;
  _via_image_grid_selected_img_index_list: any[];
  _via_image_grid_page_img_index_list: any[]; // list of all image index in current page of image grid
  _via_image_grid_visible_img_index_list: any[]; // list of images currently visible in grid
  _via_image_grid_mousedown_img_index: number;
  _via_image_grid_mouseup_img_index: number;
  _via_image_grid_img_index_list: any[]; // list of all image index in the image grid
  _via_image_grid_region_index_list: any[]; // list of all image index in the image grid
  _via_image_grid_group: {}; // {'value':[image_index_list]}
  _via_image_grid_group_var: any[];// {type, name, value}
  _via_image_grid_group_show_all: boolean;
  _via_image_grid_stack_prev_page: any[]; // stack of first img index of every page navigated so far

  // image buffer
  VIA_IMG_PRELOAD_INDICES: number[]; // for any image, preload previous 2 and next 4 images
  VIA_IMG_PRELOAD_COUNT: number;
  _via_buffer_preload_img_index: number;
  _via_buffer_img_index_list: any[];
  _via_buffer_img_shown_timestamp: any[];
  _via_preload_img_promise_list: any[];


  _via_settings: {project: any};
  _via_settings_ui: {};
  _via_settings_ui_annotation_editor_height: number;// in percent of the height of browser window
  _via_settings_ui_annotation_editor_fontsize: number;// in rem
  _via_settings_ui_leftsidebar_width: number; // in rem

  _via_settings_ui_image_grid: {};
  _via_settings_ui_image_grid_img_height: number;// in pixel
  _via_settings_ui_image_grid_rshape_fill: string;
  _via_settings_ui_image_grid_rshape_fill_opacity: number;
  _via_settings_ui_image_grid_rshape_stroke: string;
  _via_settings_ui_image_grid_rshape_stroke_width: number;
  _via_settings_ui_image_grid_show_region_shape: boolean;
  _via_settings_ui_image_grid_show_image_policy: string;

  _via_settings_ui_image: {};
  _via_settings_ui_image_region_label: string;// default: region_id
  _via_settings_ui_image_region_color: string; // default color: yellow
  _via_settings_ui_image_region_label_font: string;
  _via_settings_ui_image_on_image_annotation_editor_placement: string;

  _via_settings_core: {};
  _via_settings_core_buffer_size: number;
  _via_settings_core_filepath: {};
  _via_settings_core_default_filepath: string;
  _via_settings_project_name: any;



  // UI html elements
  invisible_file_input: any;
  display_area: HTMLElement;
  ui_top_panel: HTMLElement;
  image_panel: HTMLElement;
  img_buffer_now: HTMLElement;

  annotation_list_snippet: HTMLElement;
  annotation_textarea: HTMLElement;

  img_fn_list_panel: HTMLElement;
  img_fn_list: HTMLElement;
  attributes_panel: HTMLElement;
  leftsidebar: HTMLElement;

  BBOX_LINE_WIDTH: number;
  BBOX_SELECTED_OPACITY: number;
  BBOX_BOUNDARY_FILL_COLOR_ANNOTATED: string;
  BBOX_BOUNDARY_FILL_COLOR_NEW: string;
  BBOX_BOUNDARY_LINE_COLOR: string;
  BBOX_SELECTED_FILL_COLOR: string;

  VIA_ANNOTATION_EDITOR_HEIGHT_CHANGE: number;   // in percent
  VIA_ANNOTATION_EDITOR_FONTSIZE_CHANGE: number; // in rem
  VIA_IMAGE_GRID_IMG_HEIGHT_CHANGE: number;// in percent
  VIA_LEFTSIDEBAR_WIDTH_CHANGE: number;  // in rem
  VIA_POLYGON_SEGMENT_SUBTENDED_ANGLE: number;  // in degree (used to approximate shapes using polygon)
  VIA_FLOAT_PRECISION: number;// number of decimal places to include in float values

  //
  // Data structure to store metadata about file and regions
  //

  //**********************PART 2 ends here ************************************************************************************************************/


  //  interface f_metadata{
  //     filename: string,
  //     size: any,
  //     regions: [],
  //     file_attributes: { },

  // }


  // class file_metadata implements f_metadata {
  //   filename: string;
  //   size: any;
  //   regions: [];
  //   file_attributes: {};
  //   constructor(filename: string, size: any, regions: [], file_attributes: {}) {
  //     this.filename = filename;
  //     this.size = size;         // file size in bytes
  //     this.regions = [];           // array of file_region()
  //     this.file_attributes = {};
  //   };
  // }

  // image attributes

  // declare interface f_region {
  //   shape_attributes: {};
  //   region_attributes: {};
  //   file_region();
  // }
  // function file_region(): void; {
  //   shape_attributes: { };
  //   region_attributes: { };

  // };

  // class file2_region implements f_region {
  //   shape_attributes: {};
  //   region_attributes: {};
  //   constructor(shape_attributes: {}, region_attributes{ }) {
  //     this.shape_attributes = shape_attributes;
  //     this.region_attributes = region_attributes;
  //   }
  //   file_region(): void {
  //     this.shape_attributes = {};
  //     this.region_attributes = {};
  //   }

  


  file_metadata(filename: any, size: any): void {
    this.filename = filename;
    this.size     = size;         // file size in bytes
    this.regions  = [];           // array of file_region()
    this.file_attributes = {};    // image attributes
  }
  
  file_region(): void {
    this.shape_attributes  = {}; // region shape attributes
    this.region_attributes = {}; // region attributes
  }



  _via_move_selected_regions(move_x: any, move_y: any): void {
    var i, n;
    n = this._via_region_selected_flag.length;
    for (i = 0; i < n; ++i) {
      if (this._via_region_selected_flag[i]) {
        this._via_move_region(i, this.move_x, this.move_y);
      }
    }
  };

  _via_validate_move_region(x: any, y: any, canvas_attr: any): boolean {
    switch (canvas_attr['name']) {
      case this.VIA_REGION_SHAPE.RECT:
        // left and top boundary check
        if (x < 0 || y < 0) {
          this.show_message('Region moved beyond image boundary. Resetting.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
          return false;
        }
        // right and bottom boundary check
        if ((y + canvas_attr['height']) > this._via_current_image_height ||
          (x + this.canvas_attr['width']) > this._via_current_image_width) {
            this.show_message('Region moved beyond image boundary. Resetting.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
          return false;
        }

      // same validation for all
      case this.VIA_REGION_SHAPE.CIRCLE:
      case this.VIA_REGION_SHAPE.ELLIPSE:
      case this.VIA_REGION_SHAPE.POINT:
      case this.VIA_REGION_SHAPE.POLYLINE:
      case this.VIA_REGION_SHAPE.POLYGON:
        if (x < 0 || y < 0 ||
          x > this._via_current_image_width || y >this._via_current_image_height) {
            this.show_message('Region moved beyond image boundary. Resetting.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
          return false;
        }
    }
    return true;
  }

  _via_move_region(region_id: any, move_x: any, move_y: any): void {
    var image_attr = this._via_img_metadata[this._via_image_id].regions[region_id].shape_attributes;
    var canvas_attr = this._via_canvas_regions[region_id].shape_attributes;

    switch (canvas_attr['name']) {
      case this.VIA_REGION_SHAPE.RECT:
        var xnew = image_attr['x'] + Math.round(this.move_x * this._via_canvas_scale);
        var ynew = image_attr['y'] + Math.round(this.move_y * this._via_canvas_scale);

        var is_valid = this._via_validate_move_region(xnew, ynew, image_attr);
        if (!is_valid) { break; }

        image_attr['x'] = xnew;
        image_attr['y'] = ynew;

        canvas_attr['x'] = Math.round(image_attr['x'] / this._via_canvas_scale);
        canvas_attr['y'] = Math.round(image_attr['y'] / this._via_canvas_scale);
        break;

      case this.VIA_REGION_SHAPE.CIRCLE: // Fall-through
      case this.VIA_REGION_SHAPE.ELLIPSE: // Fall-through
      case this.VIA_REGION_SHAPE.POINT:
        var cxnew = image_attr['cx'] + Math.round(this.move_x * this._via_canvas_scale);
        var cynew = image_attr['cy'] + Math.round(this.move_y *this._via_canvas_scale);

        var is_valid = this._via_validate_move_region(cxnew, cynew, image_attr);
        if (!is_valid) { break; }

        image_attr['cx'] = cxnew;
        image_attr['cy'] = cynew;

        canvas_attr['cx'] = Math.round(image_attr['cx'] / this._via_canvas_scale);
        canvas_attr['cy'] = Math.round(image_attr['cy'] / this._via_canvas_scale);
        break;

      case this.VIA_REGION_SHAPE.POLYLINE: // handled by polygon
      case this.VIA_REGION_SHAPE.POLYGON:
        var img_px = image_attr['all_points_x'];
        var img_py = image_attr['all_points_y'];
        var canvas_px = canvas_attr['all_points_x'];
        var canvas_py = canvas_attr['all_points_y'];
        // clone for reverting if valiation fails
        var img_px_old = Object.assign({}, img_px);
        var img_py_old = Object.assign({}, img_py);

        // validate move
        for (var i = 0; i < img_px.length; ++i) {
          var pxnew = img_px[i] + Math.round(this.move_x * this._via_canvas_scale);
          var pynew = img_py[i] + Math.round(this.move_y * this._via_canvas_scale);
          if (!this._via_validate_move_region(pxnew, pynew, image_attr)) {
            img_px = img_px_old;
            img_py = img_py_old;
            break;
          }
        }
        // move points
        for (i = 0; i < img_px.length; ++i) {
          img_px[i] = img_px[i] + Math.round(this.move_x * this._via_canvas_scale);
          img_py[i] = img_py[i] + Math.round(this.move_y * this._via_canvas_scale);
        }

        for (i = 0; i < canvas_px.length; ++i) {
          canvas_px[i] = Math.round(img_px[i] / this._via_canvas_scale);
          canvas_py[i] = Math.round(img_py[i] / this._via_canvas_scale);
        }
        break;
    }
  }

  _via_polygon_del_vertex(region_id: any, vertex_id: any): boolean {
    var rs = this._via_canvas_regions[region_id].shape_attributes;
    var npts = rs['all_points_x'].length;
    var shape = rs['name'];
    if (this.shape !== this.VIA_REGION_SHAPE.POLYGON && this.shape !== this.VIA_REGION_SHAPE.POLYLINE) {
      this.show_message('Vertices can only be deleted from polygon/polyline.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return false;
    }
    if (npts <= 3 && this.shape === this.VIA_REGION_SHAPE.POLYGON) {
      this.show_message('Failed to delete vertex because a polygon must have at least 3 vertices.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return false;
    }
    if (npts <= 2 && this.shape === this.VIA_REGION_SHAPE.POLYLINE) {
      this.show_message('Failed to delete vertex because a polyline must have at least 2 vertices.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return false;
    }
    // delete vertex from canvas
    this._via_canvas_regions[region_id].shape_attributes['all_points_x'].splice(vertex_id, 1);
    this._via_canvas_regions[region_id].shape_attributes['all_points_y'].splice(vertex_id, 1);

    // delete vertex from image metadata
    this._via_img_metadata[this._via_image_id].regions[region_id].shape_attributes['all_points_x'].splice(vertex_id, 1);
    this._via_img_metadata[this._via_image_id].regions[region_id].shape_attributes['all_points_y'].splice(vertex_id, 1);
    return true;
  }

  //
  // Canvas update routines
  //
  _via_redraw_reg_canvas(): void {
    if (this._via_current_image_loaded) {
      this._via_reg_ctx.clearRect(0, 0, this._via_reg_canvas.width, this._via_reg_canvas.height);
      if (this._via_canvas_regions.length > 0) {
        if (this._via_is_region_boundary_visible) {
          this.draw_all_regions();
        }
        if (this._via_is_region_id_visible) {
          this.draw_all_region_id();
        }
      }
    }
  }

  _via_clear_reg_canvas(): void {
    this._via_reg_ctx.clearRect(0, 0, this._via_reg_canvas.width, this._via_reg_canvas.height);
  }

  draw_all_regions(): void {
    aid = this._via_settings_ui_image_region_color;
    var attr, is_selected, aid, avalue;
    for (var i = 0; i < this._via_canvas_regions.length; ++i) {
      attr = this._via_canvas_regions[i].shape_attributes;
      is_selected = this._via_region_selected_flag[i];

      // region stroke style may depend on attribute value
      this._via_reg_ctx.strokeStyle = this.VIA_THEME_BOUNDARY_FILL_COLOR;
      if (!this._via_is_user_drawing_polygon &&
        aid !== '__via_default_region_color__') {
        avalue = this._via_img_metadata[this._via_image_id].regions[i].region_attributes[aid];
        if (this._via_canvas_regions_group_color.hasOwnProperty(avalue)) {
          this._via_reg_ctx.strokeStyle = this._via_canvas_regions_group_color[avalue];
        }
      }

      switch (attr['name']) {
        case this.VIA_REGION_SHAPE.RECT:
          this._via_draw_rect_region(attr['x'],
            attr['y'],
            attr['width'],
            attr['height'],
            is_selected);
          break;

        case this.VIA_REGION_SHAPE.CIRCLE:
          this._via_draw_circle_region(attr['cx'],
            attr['cy'],
            attr['r'],
            is_selected);
          break;

        case this.VIA_REGION_SHAPE.ELLIPSE:
          if (typeof (attr['theta']) === 'undefined') { attr['theta'] = 0; }
          this._via_draw_ellipse_region(attr['cx'],
            attr['cy'],
            attr['rx'],
            attr['ry'],
            attr['theta'],
            is_selected);
          break;

        case this.VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case this.VIA_REGION_SHAPE.POLYGON:
          this._via_draw_polygon_region(attr['all_points_x'],
            attr['all_points_y'],
            is_selected,
            attr['name']);
          break;

        case this.VIA_REGION_SHAPE.POINT:
          this._via_draw_point_region(attr['cx'],
            attr['cy'],
            is_selected);
          break;
      }
    }
  }

  // control point for resize of region boundaries
  _via_draw_control_point(cx: any, cy: any): void {
    this._via_reg_ctx.beginPath();
    this._via_reg_ctx.arc(cx, cy, this.VIA_REGION_POINT_RADIUS, 0, 2 * Math.PI, false);
    this._via_reg_ctx.closePath();

    this._via_reg_ctx.fillStyle = this.VIA_THEME_CONTROL_POINT_COLOR;
    this._via_reg_ctx.globalAlpha = 1.0;
    this._via_reg_ctx.fill();
  }

  _via_draw_rect_region(x: any, y: any, w: any, h: any, is_selected: any): void {
    if (this.is_selected) {
      this._via_draw_rect(x, y, w, h);

      this._via_reg_ctx.strokeStyle = this.VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR;
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_reg_ctx.stroke();

      this._via_reg_ctx.fillStyle = this.VIA_THEME_SEL_REGION_FILL_COLOR;
      this._via_reg_ctx.globalAlpha = this.VIA_THEME_SEL_REGION_OPACITY;
      this._via_reg_ctx.fill();
      this._via_reg_ctx.globalAlpha = 1.0;

      this._via_draw_control_point(x, y);
      this._via_draw_control_point(x + w, y + h);
      this._via_draw_control_point(x, y + h);
      this._via_draw_control_point(x + w, y);
      this._via_draw_control_point(x + w / 2, y);
      this._via_draw_control_point(x + w / 2, y + h);
      this._via_draw_control_point(x, y + h / 2);
      this._via_draw_control_point(x + w, y + h / 2);
    } else {
      // draw a fill line
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_draw_rect(x, y, w, h);
      this._via_reg_ctx.stroke();

      if (w > this.VIA_THEME_REGION_BOUNDARY_WIDTH &&
        h > this.VIA_THEME_REGION_BOUNDARY_WIDTH) {
        // draw a boundary line on both sides of the fill line
        this._via_reg_ctx.strokeStyle = this.VIA_THEME_BOUNDARY_LINE_COLOR;
        this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 4;
        this._via_draw_rect(x - VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          y - this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          w + this.VIA_THEME_REGION_BOUNDARY_WIDTH,
          h + this.VIA_THEME_REGION_BOUNDARY_WIDTH);
          this._via_reg_ctx.stroke();

          this._via_draw_rect(x + this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          y + this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          w - this.VIA_THEME_REGION_BOUNDARY_WIDTH,
          h - this.VIA_THEME_REGION_BOUNDARY_WIDTH);
          this._via_reg_ctx.stroke();
      }
    }
  }

  _via_draw_rect(x: any, y: any, w: any, h: any): void {
    this._via_reg_ctx.beginPath();
    this._via_reg_ctx.moveTo(x, y);
    this._via_reg_ctx.lineTo(x + w, y);
    this._via_reg_ctx.lineTo(x + w, y + h);
    this._via_reg_ctx.lineTo(x, y + h);
    this._via_reg_ctx.closePath();
  }

  _via_draw_circle_region(cx: any, cy: any, r: any, is_selected: any): void {
    if (this.is_selected) {
      this._via_draw_circle(cx, cy, r);

      this._via_reg_ctx.strokeStyle = this.VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR;
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_reg_ctx.stroke();

      this._via_reg_ctx.fillStyle = this.VIA_THEME_SEL_REGION_FILL_COLOR;
      this._via_reg_ctx.globalAlpha = this.VIA_THEME_SEL_REGION_OPACITY;
      this._via_reg_ctx.fill();
      this._via_reg_ctx.globalAlpha = 1.0;

      this._via_draw_control_point(cx + r, cy);
    } else {
      // draw a fill line
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_draw_circle(cx, cy, r);
      this._via_reg_ctx.stroke();

      if (r > this.VIA_THEME_REGION_BOUNDARY_WIDTH) {
        // draw a boundary line on both sides of the fill line
        this._via_reg_ctx.strokeStyle = this.VIA_THEME_BOUNDARY_LINE_COLOR;
        this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 4;
        this._via_draw_circle(cx, cy,
          r - this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2);
          this._via_reg_ctx.stroke();
          this._via_draw_circle(cx, cy,
          r + this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2);
          this._via_reg_ctx.stroke();
      }
    }
  }

  _via_draw_circle(cx: any, cy: any, r: any): void {
    this._via_reg_ctx.beginPath();
    this._via_reg_ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
    this._via_reg_ctx.closePath();
  }

  _via_draw_ellipse_region(cx: any, cy: any, rx: any, ry: any, rr: any, is_selected: any): void { //Try drawing an ellopse and check if is_selected is needed...
    if (this.is_selected) {
      this._via_draw_ellipse(cx, cy, rx, ry, rr);

      this._via_reg_ctx.strokeStyle = this.VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR;
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_reg_ctx.stroke();

      this._via_reg_ctx.fillStyle = this.VIA_THEME_SEL_REGION_FILL_COLOR;
      this._via_reg_ctx.globalAlpha = this.VIA_THEME_SEL_REGION_OPACITY;
      this._via_reg_ctx.fill();
      this._via_reg_ctx.globalAlpha = 1.0;

      this._via_draw_control_point(cx + rx * Math.cos(rr), cy + rx * Math.sin(rr));
      this._via_draw_control_point(cx - rx * Math.cos(rr), cy - rx * Math.sin(rr));
      this._via_draw_control_point(cx + ry * Math.sin(rr), cy - ry * Math.cos(rr));
      this._via_draw_control_point(cx - ry * Math.sin(rr), cy + ry * Math.cos(rr));

    } else {
      // draw a fill line
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_draw_ellipse(cx, cy, rx, ry, rr);
      this._via_reg_ctx.stroke();

      if (rx > this.VIA_THEME_REGION_BOUNDARY_WIDTH &&
        ry > this.VIA_THEME_REGION_BOUNDARY_WIDTH) {
        // draw a boundary line on both sides of the fill line
        this._via_reg_ctx.strokeStyle = this.VIA_THEME_BOUNDARY_LINE_COLOR;
        this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 4;
        this._via_draw_ellipse(cx, cy,
          rx + this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          ry + this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          rr);
          this._via_reg_ctx.stroke();
          this._via_draw_ellipse(cx, cy,
          rx - this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          ry - this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2,
          rr);
          this._via_reg_ctx.stroke();
      }
    }
  }

  _via_draw_ellipse(cx: any, cy: any, rx: any, ry: any, rr: any): void {
    this._via_reg_ctx.save();

    this._via_reg_ctx.beginPath();
    this._via_reg_ctx.ellipse(cx, cy, rx, ry, rr, 0, 2 * Math.PI);

    this._via_reg_ctx.restore(); // restore to original state
    this._via_reg_ctx.closePath();
  }

  _via_draw_polygon_region(all_points_x: any, all_points_y: any, is_selected: any, shape: any): void {
    if (this.is_selected) {
      this._via_reg_ctx.strokeStyle = this.VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR;
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_reg_ctx.beginPath();
      this._via_reg_ctx.moveTo(this.all_points_x[0], this.all_points_y[0]);
      for (var i = 1; i < this.all_points_x.length; ++i) {
        this._via_reg_ctx.lineTo(this.all_points_x[i], this.all_points_y[i]);
      }
      if (this.shape === this.VIA_REGION_SHAPE.POLYGON) {
        this._via_reg_ctx.lineTo(this.all_points_x[0], this.all_points_y[0]); // close loop
      }
      this._via_reg_ctx.stroke();

      this._via_reg_ctx.fillStyle = this.VIA_THEME_SEL_REGION_FILL_COLOR;
      this._via_reg_ctx.globalAlpha = this.VIA_THEME_SEL_REGION_OPACITY;
      this._via_reg_ctx.fill();
      this._via_reg_ctx.globalAlpha = 1.0;
      for (i = 0; i < this.all_points_x.length; ++i) {
        this._via_draw_control_point(this.all_points_x[i], this.all_points_y[i]);
      }
    } else {
      // draw a fill line
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_reg_ctx.beginPath();
      this._via_reg_ctx.moveTo(this.all_points_x[0], this.all_points_y[0]);
      for (var i = 0; i < this.all_points_x.length; ++i) {
        this._via_reg_ctx.lineTo(this.all_points_x[i], this.all_points_y[i]);
      }
      if (this.shape === this.VIA_REGION_SHAPE.POLYGON) {
        this._via_reg_ctx.lineTo(this.all_points_x[0], this.all_points_y[0]); // close loop
      }
      this._via_reg_ctx.stroke();
    }
  }

  _via_draw_point_region(cx: any, cy: any, is_selected: any): void {
    if (this.is_selected) {
      this._via_draw_point(cx, cy, this.VIA_REGION_POINT_RADIUS);

      this._via_reg_ctx.strokeStyle = this.VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR;
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_reg_ctx.stroke();

      this._via_reg_ctx.fillStyle = this.VIA_THEME_SEL_REGION_FILL_COLOR;
      this._via_reg_ctx.globalAlpha = this.VIA_THEME_SEL_REGION_OPACITY;
      this._via_reg_ctx.fill();
      this._via_reg_ctx.globalAlpha = 1.0;
    } else {
      // draw a fill line
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2;
      this._via_draw_point(cx, cy, this.VIA_REGION_POINT_RADIUS);
      this._via_reg_ctx.stroke();

      // draw a boundary line on both sides of the fill line
      this._via_reg_ctx.strokeStyle = this.VIA_THEME_BOUNDARY_LINE_COLOR;
      this._via_reg_ctx.lineWidth = this.VIA_THEME_REGION_BOUNDARY_WIDTH / 4;
      this._via_draw_point(cx, cy,
        this.VIA_REGION_POINT_RADIUS - this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2);
        this._via_reg_ctx.stroke();
        this._via_draw_point(cx, cy,
          this.VIA_REGION_POINT_RADIUS + this.VIA_THEME_REGION_BOUNDARY_WIDTH / 2);
          this._via_reg_ctx.stroke();
    }
  }

  _via_draw_point(cx: any, cy: any, r: any): void {
    this._via_reg_ctx.beginPath();
    this._via_reg_ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
    this._via_reg_ctx.closePath();
  }

  draw_all_region_id(): void {
    this._via_reg_ctx.shadowColor = "transparent";
    this._via_reg_ctx.font = this._via_settings_ui_image_region_label_font;
    for (var i = 0; i < this._via_img_metadata[this._via_image_id].regions.length; ++i) {
      var canvas_reg = this._via_canvas_regions[i];

      var bbox = this.get_region_bounding_box(canvas_reg);
      var x = bbox[0];
      var y = bbox[1];
      var w = Math.abs(bbox[2] - bbox[0]);

      var char_width = this._via_reg_ctx.measureText('M').width;
      var char_height = 1.8 * char_width;

      var annotation_str = (i + 1).toString();
      var rattr = this._via_img_metadata[this._via_image_id].regions[i].region_attributes[this._via_settings_ui_image_region_label];
      var rshape = this._via_img_metadata[this._via_image_id].regions[i].shape_attributes['name'];
      if (this._via_settings_ui_image_region_label !== '__via_region_id__') {
        if (typeof (rattr) !== 'undefined') {
          switch (typeof (rattr)) {
            default:
            case 'string':
              annotation_str = rattr;
              break;
            case 'object':
              annotation_str = Object.keys(rattr).join(',');
              break;
          }
        } else {
          annotation_str = 'undefined';
        }
      }

      var bgnd_rect_width;
      var strw = this._via_reg_ctx.measureText(annotation_str).width;
      if (strw > w) {
        if (this._via_settings_ui_image_region_label === '__via_region_id__') {
          // region-id is always visible in full
          bgnd_rect_width = strw + char_width;
        } else {

          // if text overflows, crop it
          var str_max = Math.floor((w * annotation_str.length) / strw);
          if (str_max > 1) {
            annotation_str = annotation_str.substr(0, str_max - 1) + '.';
            bgnd_rect_width = w;
          } else {
            annotation_str = annotation_str.substr(0, 1) + '.';
            bgnd_rect_width = 2 * char_width;
          }
        }
      } else {
        bgnd_rect_width = strw + char_width;
      }

      if (canvas_reg.shape_attributes['name'] === this.VIA_REGION_SHAPE.POLYGON ||
        canvas_reg.shape_attributes['name'] === this.VIA_REGION_SHAPE.POLYLINE) {
        // put label near the first vertex
        x = canvas_reg.shape_attributes['all_points_x'][0];
        y = canvas_reg.shape_attributes['all_points_y'][0];
      } else {
        // center the label
        x = x - (bgnd_rect_width / 2 - w / 2);
      }

      // ensure that the text is within the image boundaries
      if (y < char_height) {
        y = char_height;
      }

      // first, draw a background rectangle first
      this._via_reg_ctx.fillStyle = 'black';
      this._via_reg_ctx.globalAlpha = 0.8;
      this._via_reg_ctx.fillRect(Math.floor(x),
        Math.floor(y - 1.1 * char_height),
        Math.floor(bgnd_rect_width),
        Math.floor(char_height));

      // then, draw text over this background rectangle
      this._via_reg_ctx.globalAlpha = 1.0;
      this._via_reg_ctx.fillStyle = 'yellow';
      this._via_reg_ctx.fillText(annotation_str,
        Math.floor(x + 0.4 * char_width),
        Math.floor(y - 0.35 * char_height));

    }
  }

  get_region_bounding_box(region: any): any[] {
    var region = this._via_img_metadata[this.img_id].regions[this.rindex];
    var d = region.shape_attributes;
    var bbox = new Array(4);

    switch (d['name']) {
      case 'rect':
        bbox[0] = d['x'];
        bbox[1] = d['y'];
        bbox[2] = d['x'] + d['width'];
        bbox[3] = d['y'] + d['height'];
        break;

      case 'circle':
        bbox[0] = d['cx'] - d['r'];
        bbox[1] = d['cy'] - d['r'];
        bbox[2] = d['cx'] + d['r'];
        bbox[3] = d['cy'] + d['r'];
        break;

      case 'ellipse':
        let radians = d['theta'];
        let radians90 = radians + Math.PI / 2;
        let ux = d['rx'] * Math.cos(radians);
        let uy = d['rx'] * Math.sin(radians);
        let vx = d['ry'] * Math.cos(radians90);
        let vy = d['ry'] * Math.sin(radians90);

        let width = Math.sqrt(ux * ux + vx * vx) * 2;
        let height = Math.sqrt(uy * uy + vy * vy) * 2;

        bbox[0] = d['cx'] - (width / 2);
        bbox[1] = d['cy'] - (height / 2);
        bbox[2] = d['cx'] + (width / 2);
        bbox[3] = d['cy'] + (height / 2);
        break;

      case 'polyline': // handled by polygon
      case 'polygon':
        var all_points_x = d['all_points_x'];
        var all_points_y = d['all_points_y'];

        var minx = Number.MAX_SAFE_INTEGER;
        var miny = Number.MAX_SAFE_INTEGER;
        var maxx = 0;
        var maxy = 0;
        for (var i = 0; i < all_points_x.length; ++i) {
          if (all_points_x[i] < minx) {
            minx = all_points_x[i];
          }
          if (all_points_x[i] > maxx) {
            maxx = all_points_x[i];
          }
          if (all_points_y[i] < miny) {
            miny = all_points_y[i];
          }
          if (all_points_y[i] > maxy) {
            maxy = all_points_y[i];
          }
        }
        bbox[0] = minx;
        bbox[1] = miny;
        bbox[2] = maxx;
        bbox[3] = maxy;
        break;

      case 'point':
        bbox[0] = d['cx'] - VIA_REGION_POINT_RADIUS;
        bbox[1] = d['cy'] - VIA_REGION_POINT_RADIUS;
        bbox[2] = d['cx'] + VIA_REGION_POINT_RADIUS;
        bbox[3] = d['cy'] + VIA_REGION_POINT_RADIUS;
        break;
    }
    return bbox;
  }

  //
  // Region collision routines
  //
  is_inside_region(px: any, py: any, descending_order: boolean): any {
    var N = this._via_canvas_regions.length;
    if (N === 0) {
      return -1;
    }
    var start, end, del;
    // traverse the canvas regions in alternating ascending
    // and descending order to solve the issue of nested regions
    if (descending_order) {
      start = N - 1;
      end = -1;
      del = -1;
    } else {
      start = 0;
      end = N;
      del = 1;
    }

    var i = start;
    while (i !== end) {
      var yes = this.is_inside_this_region(px, py, i);
      if (yes) {
        return i;
      }
      i = i + del;
    }
    return -1;
  }

  is_inside_this_region(px: number, py: number, region_id: any): number | boolean {
    var attr = this._via_canvas_regions[region_id].shape_attributes;
    switch (attr['name']) {
      case this.VIA_REGION_SHAPE.RECT:
        this.result = this.is_inside_rect(attr['x'],
          attr['y'],
          attr['width'],
          attr['height'],
          px, py);
        break;

      case this.VIA_REGION_SHAPE.CIRCLE:
        this.result = this.is_inside_circle(attr['cx'],
          attr['cy'],
          attr['r'],
          px, py);
        break;

      case this.VIA_REGION_SHAPE.ELLIPSE:
        this.result = this.is_inside_ellipse(attr['cx'],
          attr['cy'],
          attr['rx'],
          attr['ry'],
          attr['theta'],
          px, py);
        break;

      case this.VIA_REGION_SHAPE.POLYLINE: // handled by POLYGON
      case this.VIA_REGION_SHAPE.POLYGON:
        this.result = this.is_inside_polygon(attr['all_points_x'],
          attr['all_points_y'],
          px, py);
        break;

      case this.VIA_REGION_SHAPE.POINT:
        this.result = this.is_inside_point(attr['cx'],
          attr['cy'],
          px, py);
        break;
    }
    return this.result;
  }

  is_inside_circle(cx: any, cy: any, r: any, px: any, py: any): boolean {
    var dx = px - cx;
    var dy = py - cy;
    return (dx * dx + dy * dy) < r * r;
  }

  is_inside_rect(x: any, y: any, w: any, h: any, px: any, py: any): boolean {
    return px > x &&
      px < (x + w) &&
      py > y &&
      py < (y + h);
  }

  is_inside_ellipse(cx: any, cy: any, rx: any, ry: any, rr: any, px: any, py: any): boolean {
    // Inverse rotation of pixel coordinates
    var dx = Math.cos(-rr) * (cx - px) - Math.sin(-rr) * (cy - py)
    var dy = Math.sin(-rr) * (cx - px) + Math.cos(-rr) * (cy - py)

    return ((dx * dx) / (rx * rx)) + ((dy * dy) / (ry * ry)) < 1;
  }

  // returns 0 when (px,py) is outside the polygon
  // source: http://geomalgorithms.com/a03-_inclusion.html
  is_inside_polygon(all_points_x: any, all_points_y: any, px: any, py: any): 1 | 0 {
    if (all_points_x.length === 0 || all_points_y.length === 0) {
      return 0;
    }

    var wn = 0;    // the  winding number counter
    var n = all_points_x.length;
    var i;
    // loop through all edges of the polygon
    for (i = 0; i < n - 1; ++i) {   // edge from V[i] to  V[i+1]
      var is_left_value = this.is_left(all_points_x[i], all_points_y[i],
        all_points_x[i + 1], all_points_y[i + 1],
        px, py);

      if (all_points_y[i] <= py) {
        if (all_points_y[i + 1] > py && is_left_value > 0) {
          ++wn;
        }
      }
      else {
        if (all_points_y[i + 1] <= py && is_left_value < 0) {
          --wn;
        }
      }
    }

    // also take into account the loop closing edge that connects last point with first point
    var is_left_value = is_left(all_points_x[n - 1], all_points_y[n - 1],
      all_points_x[0], all_points_y[0],
      px, py);

    if (all_points_y[n - 1] <= py) {
      if (all_points_y[0] > py && is_left_value > 0) {
        ++wn;
      }
    }
    else {
      if (all_points_y[0] <= py && is_left_value < 0) {
        --wn;
      }
    }

    if (wn === 0) {
      return 0;
    }
    else {
      return 1;
    }
  }

  is_inside_point(cx: any, cy: any, px: any, py: any): boolean {
    var dx = px - cx;
    var dy = py - cy;
    var r2 = this.VIA_POLYGON_VERTEX_MATCH_TOL * this.VIA_POLYGON_VERTEX_MATCH_TOL;
    return (dx * dx + dy * dy) < r2;
  }

  // returns
  // >0 if (x2,y2) lies on the left side of line joining (x0,y0) and (x1,y1)
  // =0 if (x2,y2) lies on the line joining (x0,y0) and (x1,y1)
  // >0 if (x2,y2) lies on the right side of line joining (x0,y0) and (x1,y1)
  // source: http://geomalgorithms.com/a03-_inclusion.html
  is_left(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any): number {
    return (((x1 - x0) * (y2 - y0)) - ((x2 - x0) * (y1 - y0)));
  }

  is_on_region_corner(px: any, py: any): number[] {
    var _via_region_edge = [-1, -1]; // region_id, corner_id [top-left=1,top-right=2,bottom-right=3,bottom-left=4]

    for (var i = 0; i < this._via_canvas_regions.length; ++i) {
      var attr = this._via_canvas_regions[i].shape_attributes;
      _via_region_edge[0] = i;

      switch (attr['name']) {
        case this.VIA_REGION_SHAPE.RECT:
          this.result = this.is_on_rect_edge(attr['x'],
            attr['y'],
            attr['width'],
            attr['height'],
            px, py);
          break;

        case this.VIA_REGION_SHAPE.CIRCLE:
          this.result = this.is_on_circle_edge(attr['cx'],
            attr['cy'],
            attr['r'],
            px, py);
          break;

        case this.VIA_REGION_SHAPE.ELLIPSE:
          this.result = this.is_on_ellipse_edge(attr['cx'],
            attr['cy'],
            attr['rx'],
            attr['ry'],
            attr['theta'],
            px, py);
          break;

        case this.VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case this.VIA_REGION_SHAPE.POLYGON:
          this.result = this.is_on_polygon_vertex(attr['all_points_x'],
            attr['all_points_y'],
            px, py);
          if (this.result === 0) {
            this.result = this.is_on_polygon_edge(attr['all_points_x'],
              attr['all_points_y'],
              px, py);
          }
          break;

        case this.VIA_REGION_SHAPE.POINT:
          // since there are no edges of a point
          this.result = 0;
          break;
      }

      if (this.result > 0) {
        this._via_region_edge[1] = this.result;
        return this._via_region_edge;
      }
    }
    this._via_region_edge[0] = -1;
    return this._via_region_edge;
  }

  is_on_rect_edge(x: any, y: any, w: any, h: any, px: any, py: any): 1 | 5 | 2 | 3 | 4 | 6 | 7 | 8 | 0 {
    var dx0 = Math.abs(x - px);
    var dy0 = Math.abs(y - py);
    var dx1 = Math.abs(x + w - px);
    var dy1 = Math.abs(y + h - py);
    //[top-left=1,top-right=2,bottom-right=3,bottom-left=4]
    if (dx0 < this.VIA_REGION_EDGE_TOL &&
      dy0 < this.VIA_REGION_EDGE_TOL) {
      return 1;
    }
    if (dx1 < this.VIA_REGION_EDGE_TOL &&
      dy0 < this.VIA_REGION_EDGE_TOL) {
      return 2;
    }
    if (dx1 < this.VIA_REGION_EDGE_TOL &&
      dy1 < this.VIA_REGION_EDGE_TOL) {
      return 3;
    }

    if (dx0 < this.VIA_REGION_EDGE_TOL &&
      dy1 < this.VIA_REGION_EDGE_TOL) {
      return 4;
    }

    var mx0 = Math.abs(x + w / 2 - px);
    var my0 = Math.abs(y + h / 2 - py);
    //[top-middle=5,right-middle=6,bottom-middle=7,left-middle=8]
    if (mx0 < this.VIA_REGION_EDGE_TOL &&
      dy0 < this.VIA_REGION_EDGE_TOL) {
      return 5;
    }
    if (dx1 < this.VIA_REGION_EDGE_TOL &&
      my0 < this.VIA_REGION_EDGE_TOL) {
      return 6;
    }
    if (mx0 < this.VIA_REGION_EDGE_TOL &&
      dy1 < this.VIA_REGION_EDGE_TOL) {
      return 7;
    }
    if (dx0 < this.VIA_REGION_EDGE_TOL &&
      my0 < this.VIA_REGION_EDGE_TOL) {
      return 8;
    }

    return 0;
  }

  is_on_circle_edge(cx: any, cy: any, r: any, px: any, py: any): 1 | 5 | 2 | 3 | 4 | 6 | 0 {
    var dx = cx - px;
    var dy = cy - py;
    if (Math.abs(Math.sqrt(dx * dx + dy * dy) - r) < this.VIA_REGION_EDGE_TOL) {
      var theta = Math.atan2(py - cy, px - cx);
      if (Math.abs(theta - (Math.PI / 2)) < this.VIA_THETA_TOL ||
        Math.abs(theta + (Math.PI / 2)) < this.VIA_THETA_TOL) {
        return 5;
      }
      if (Math.abs(theta) < this.VIA_THETA_TOL ||
        Math.abs(Math.abs(theta) - Math.PI) < this.VIA_THETA_TOL) {
        return 6;
      }

      if (theta > 0 && theta < (Math.PI / 2)) {
        return 1;
      }
      if (theta > (Math.PI / 2) && theta < (Math.PI)) {
        return 4;
      }
      if (theta < 0 && theta > -(Math.PI / 2)) {
        return 2;
      }
      if (theta < -(Math.PI / 2) && theta > -Math.PI) {
        return 3;
      }
    } else {
      return 0;
    }
  }

  is_on_ellipse_edge(cx: any, cy: any, rx: any, ry: any, rr: any, px: any, py: any): 5 | 6 | 0 {
    // Inverse rotation of pixel coordinates
    px = px - cx;
    py = py - cy;
    var px_ = Math.cos(-rr) * px - Math.sin(-rr) * py;
    var py_ = Math.sin(-rr) * px + Math.cos(-rr) * py;
    px = px_ + cx;
    py = py_ + cy;

    var dx = (cx - px) / rx;
    var dy = (cy - py) / ry;

    if (Math.abs(Math.sqrt(dx * dx + dy * dy) - 1) < this.VIA_ELLIPSE_EDGE_TOL) {
      var theta = Math.atan2(py - cy, px - cx);
      if (Math.abs(theta - (Math.PI / 2)) < this.VIA_THETA_TOL ||
        Math.abs(theta + (Math.PI / 2)) < this.VIA_THETA_TOL) {
        return 5;
      }
      if (Math.abs(theta) < this.VIA_THETA_TOL ||
        Math.abs(Math.abs(theta) - Math.PI) < this.VIA_THETA_TOL) {
        return 6;
      }
    } else {
      return 0;
    }
  }

  is_on_polygon_vertex(all_points_x: any, all_points_y: any, px: any, py: any): any {
    var i, n;
    n = all_points_x.length;

    for (i = 0; i < n; ++i) {
      if (Math.abs(all_points_x[i] - px) < this.VIA_POLYGON_VERTEX_MATCH_TOL &&
        Math.abs(all_points_y[i] - py) < this.VIA_POLYGON_VERTEX_MATCH_TOL) {
        return (this.VIA_POLYGON_RESIZE_VERTEX_OFFSET + i);
      }
    }
    return 0;
  }

  is_on_polygon_edge(all_points_x: any, all_points_y: any, px: any, py: any): number {
    var i, n, di, d;
    n = all_points_x.length;
    d = [];
    for (i = 0; i < n - 1; ++i) {
      di = this.dist_to_line(px, py, all_points_x[i], all_points_y[i], all_points_x[i + 1], all_points_y[i + 1]);
      d.push(di);
    }
    // closing edge
    di = this.dist_to_line(px, py, all_points_x[n - 1], all_points_y[n - 1], all_points_x[0], all_points_y[0]);
    d.push(di);

    var smallest_value = d[0];
    var smallest_index = 0;
    n = d.length;
    for (i = 1; i < n; ++i) {
      if (d[i] < smallest_value) {
        smallest_value = d[i];
        smallest_index = i;
      }
    }
    if (smallest_value < this.VIA_POLYGON_VERTEX_MATCH_TOL) {
      return (this.VIA_POLYGON_RESIZE_VERTEX_OFFSET + smallest_index);
    } else {
      return 0;
    }
  }

  is_point_inside_bounding_box(x: any, y: any, x1: any, y1: any, x2: any, y2: any): boolean {
    // ensure that (x1,y1) is top left and (x2,y2) is bottom right corner of rectangle
    var x1, x2, y1, y2;
    var rect = {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2
    };
    if (x1 < x2) {
      rect.x1 = x1;
      rect.x2 = x2;
    } else {
      rect.x1 = x2;
      rect.x2 = x1;
    }
    if (y1 < y2) {
      rect.y1 = y1;
      rect.y2 = y2;
    } else {
      rect.y1 = y2;
      rect.y2 = y1;
    }

    if (x >= rect.x1 && x <= rect.x2 && y >= rect.y1 && y <= rect.y2) {
      return true;
    } else {
      return false;
    }
  }

  dist_to_line(x: any, y: any, x1: any, y1: any, x2: any, y2: any): number {
    var x1, x2, y1, y2;
    if (this.is_point_inside_bounding_box(x, y, x1, y1, x2, y2)) {
      var dy = y2 - y1;
      var dx = x2 - x1;
      var nr = Math.abs(dy * x - dx * y + x2 * y1 - y2 * x1);
      var dr = Math.sqrt(dx * dx + dy * dy);
      var dist = nr / dr;
      return Math.round(dist);
    } else {
      return Number.MAX_SAFE_INTEGER;
    }
  }

  rect_standardize_coordinates(d: any): void {
    // d[x0,y0,x1,y1]
    // ensures that (d[0],d[1]) is top-left corner while
    // (d[2],d[3]) is bottom-right corner
    if (d[0] > d[2]) {
      // swap
      var t = d[0];
      d[0] = d[2];
      d[2] = t;
    }

    if (d[1] > d[3]) {
      // swap
      var t = d[1];
      d[1] = d[3];
      d[3] = t;
    }
  }

  rect_update_corner(corner_id: any, d: any, x: any, y: any, preserve_aspect_ratio: any): void {
    // pre-condition : d[x0,y0,x1,y1] is standardized
    // post-condition : corner is moved ( d may not stay standardized )
    if (this.preserve_aspect_ratio) {
      switch (this.corner_id) {
        case 1: // Fall-through // top-left
        case 3: // bottom-right
          var dx = d[2] - d[0];
          var dy = d[3] - d[1];
          var norm = Math.sqrt(dx * dx + dy * dy);
          var nx = dx / norm; // x component of unit vector along the diagonal of rect
          var ny = dy / norm; // y component
          var proj = (x - d[0]) * nx + (y - d[1]) * ny;
          var proj_x = nx * proj;
          var proj_y = ny * proj;
          // constrain (mx,my) to lie on a line connecting (x0,y0) and (x1,y1)
          x = Math.round(d[0] + proj_x);
          y = Math.round(d[1] + proj_y);
          break;

        case 2: // Fall-through // top-right
        case 4: // bottom-left
          var dx = d[2] - d[0];
          var dy = d[1] - d[3];
          var norm = Math.sqrt(dx * dx + dy * dy);
          var nx = dx / norm; // x component of unit vector along the diagonal of rect
          var ny = dy / norm; // y component
          var proj = (x - d[0]) * nx + (y - d[3]) * ny;
          var proj_x = nx * proj;
          var proj_y = ny * proj;
          // constrain (mx,my) to lie on a line connecting (x0,y0) and (x1,y1)
          x = Math.round(d[0] + proj_x);
          y = Math.round(d[3] + proj_y);
          break;
      }
    }

    switch (this.corner_id) {
      case 1: // top-left
        d[0] = x;
        d[1] = y;
        break;

      case 3: // bottom-right
        d[2] = x;
        d[3] = y;
        break;

      case 2: // top-right
        d[2] = x;
        d[1] = y;
        break;

      case 4: // bottom-left
        d[0] = x;
        d[3] = y;
        break;

      case 5: // top-middle
        d[1] = y;
        break;

      case 6: // right-middle
        d[2] = x;
        break;

      case 7: // bottom-middle
        d[3] = y;
        break;

      case 8: // left-middle
        d[0] = x;
        break;
    }
  }



  //
  // Shortcut key handlers
  //
  _via_window_keydown_handler(e: Event): void {
    if (e.target === document.body) {
      // process the keyboard event
      this._via_handle_global_keydown_event(e);
    }
  };

  _via_handle_global_keydown_event(e: Event): void {
    // zoom
    if (this._via_current_image_loaded) {
      if ((e as KeyboardEvent).key === "+") {
        this.zoom_in();
        return;
      }

      if ((e as KeyboardEvent).key === "=") {
        this.reset_zoom_level();
        return;
      }

      if ((e as KeyboardEvent).key === "-") {
        this.zoom_out();
        return;
      }
    }

    if ((e as KeyboardEvent).key === 'ArrowRight' || (e as KeyboardEvent).key === 'n') {
      this.move_to_next_image();
      e.preventDefault();
      return;
    }
    if ((e as KeyboardEvent).key === 'ArrowLeft' || (e as KeyboardEvent).key === 'p') {
      this.move_to_prev_image();
      e.preventDefault();
      return;
    }

    if ((e as KeyboardEvent).key === 'ArrowUp') {
      this.region_visualisation_update('region_label', '__via_region_id__', 1);
      e.preventDefault();
      return;
    }

    if ((e as KeyboardEvent).key === 'ArrowDown') {
      this.region_visualisation_update('region_color', '__via_default_region_color__', -1);
      e.preventDefault();
      return;
    }


    if ((e as KeyboardEvent).key === 'Home') {
      this.show_first_image();
      e.preventDefault();
      return;
    }
    if ((e as KeyboardEvent).key === 'End') {
      this.show_last_image();
      e.preventDefault();
      return;
    }
    if ((e as KeyboardEvent).key === 'PageDown') {
      this.jump_to_next_image_block();
      e.preventDefault();
      return;
    }
    if ((e as KeyboardEvent).key === 'PageUp') {
      this.jump_to_prev_image_block();
      e.preventDefault();
      return;
    }

    if ((e as KeyboardEvent).key === 'a') {
      if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
        // select all in image grid
        this.image_grid_group_toggle_select_all();
      }
    }

    if ((e as KeyboardEvent).key === 'Escape') {
      e.preventDefault();
      if (this._via_is_loading_current_image) {
        this._via_cancel_current_image_loading();
      }

      if (this._via_is_user_resizing_region) {
        // cancel region resizing action
        this._via_is_user_resizing_region = false;
      }

      if (this._via_is_region_selected) {
        // clear all region selections
        this._via_is_region_selected = false;
        this._via_user_sel_region_id = -1;
        this.toggle_all_regions_selection(false);
      }

      if (this._via_is_user_drawing_polygon) {
        this._via_is_user_drawing_polygon = false;
        this._via_canvas_regions.splice(_via_current_polygon_region_id, 1);
      }

      if (this._via_is_user_drawing_region) {
        this._via_is_user_drawing_region = false;
      }

      if (this._via_is_user_resizing_region) {
        this._via_is_user_resizing_region = false
      }

      if (this._via_is_user_moving_region) {
        this._via_is_user_moving_region = false
      }

      this._via_redraw_reg_canvas()
      return;
    }

    if ((e as KeyboardEvent).key === ' ') { // Space key
      if ((e as KeyboardEvent).ctrlKey) {
        this.annotation_editor_toggle_on_image_editor();
      } else {
        this.annotation_editor_toggle_all_regions_editor();
      }
      e.preventDefault();
      return;
    }

    if ((e as KeyboardEvent).key === 'F1') { // F1 for help
      this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_GETTING_STARTED);
      e.preventDefault();
      return;
    }
    if ((e as KeyboardEvent).key === 'F2') { // F2 for about
      this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_ABOUT);
      e.preventDefault();
      return;
    }
  };

  _via_reg_canvas_keyup_handler(e: KeyboardEvent): void {
    if ((e as KeyboardEvent).ctrlKey) {
      this._via_is_ctrl_pressed = false;
    }
  }
  _via_reg_canvas_keydown_handler(e: any): void {
    if ((e as KeyboardEvent).ctrlKey) {
      this._via_is_ctrl_pressed = true;
    }

    if (this._via_current_image_loaded) {
      if ((e as KeyboardEvent).key === 'Enter') {
        if (this._via_current_shape === this.VIA_REGION_SHAPE.POLYLINE ||
          this._via_current_shape === this.VIA_REGION_SHAPE.POLYGON) {
            this._via_polyshape_finish_drawing();
        }
      }
      if ((e as KeyboardEvent).key === 'Backspace') {
        if (this._via_current_shape === this.VIA_REGION_SHAPE.POLYLINE ||
          this._via_current_shape === this.VIA_REGION_SHAPE.POLYGON) {
            this._via_polyshape_delete_last_vertex();
        }
      }

      if ((e as KeyboardEvent).key === 'a') {
        this.sel_all_regions();
        e.preventDefault();
        return;
      }

      if ((e as KeyboardEvent).key === 'c') {
        if (this._via_is_region_selected ||
          this._via_is_all_region_selected) {
            this.copy_sel_regions();
        }
        e.preventDefault();
        return;
      }

      if ((e as KeyboardEvent).key === 'v') {
        this.paste_sel_regions_in_current_image();
        e.preventDefault();
        return;
      }

      if ((e as KeyboardEvent).key === 'b') {
        this.toggle_region_boundary_visibility();
        e.preventDefault();
        return;
      }

      if ((e as KeyboardEvent).key === 'l') {
        this.toggle_region_id_visibility();
        e.preventDefault();
        return;
      }

      if ((e as KeyboardEvent).key === 'd') {
        if (this._via_is_region_selected ||
          this._via_is_all_region_selected) {
            this.del_sel_regions();
        }
        e.preventDefault();
        return;
      }

      if (this._via_is_region_selected) {
        if ((e as KeyboardEvent).key === 'ArrowRight' ||
          (e as KeyboardEvent).key === 'ArrowLeft' ||
          (e as KeyboardEvent).key === 'ArrowDown' ||
          (e as KeyboardEvent).key === 'ArrowUp') {
           var del = 1;
          if ((e as KeyboardEvent).shiftKey) {
            del = 10;
          }
          this.move_x = 0;
          this.move_y = 0;
          switch ((e as KeyboardEvent).key) {
            case 'ArrowLeft':
              this.move_x = -del;
              break;
            case 'ArrowUp':
              this.move_y = -del;
              break;
            case 'ArrowRight':
              this.move_x = del;
              break;
            case 'ArrowDown':
              this.move_y = del;
              break;
          }
          this._via_move_selected_regions(this.move_x, this.move_y);
          this._via_redraw_reg_canvas();
          e.preventDefault();
          return;
        }
      }
    }
    this._via_handle_global_keydown_event(e);
  }

  _via_polyshape_finish_drawing(): void {
    if (this._via_is_user_drawing_polygon) {
      // double click is used to indicate completion of
      // polygon or polyline drawing action
      var new_region_id = this._via_current_polygon_region_id;
      var new_region_shape = this._via_current_shape;

      var npts = this._via_canvas_regions[new_region_id].shape_attributes['all_points_x'].length;
      if (npts <= 2 && new_region_shape === this.VIA_REGION_SHAPE.POLYGON) {
        this.show_message('For a polygon, you must define at least 3 points. ' +
          'Press [Esc] to cancel drawing operation.!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        return;
      }
      if (npts <= 1 && new_region_shape === this.VIA_REGION_SHAPE.POLYLINE) {
        this.show_message('A polyline must have at least 2 points. ' +
          'Press [Esc] to cancel drawing operation.!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        return;
      }

      this.img_id = this._via_image_id;
      this._via_current_polygon_region_id = -1;
      this._via_is_user_drawing_polygon = false;
      this._via_is_user_drawing_region = false;

      this._via_img_metadata[this.img_id].regions[new_region_id] = {}; // create placeholder
      this._via_polyshape_add_new_polyshape(this.img_id, new_region_shape, new_region_id);
      this.select_only_region(new_region_id); // select new region
      this.set_region_annotations_to_default_value(new_region_id);
      this.annotation_editor_add_row(new_region_id);
      this.annotation_editor_scroll_to_row(new_region_id);

      this._via_redraw_reg_canvas();
      this._via_reg_canvas.focus();
    }
    return;
  }

  _via_polyshape_delete_last_vertex(): void {
    if (this._via_is_user_drawing_polygon) {
      var npts = this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_x'].length;
      if (npts > 0) {
        this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_x'].splice(npts - 1, 1);
        this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_y'].splice(npts - 1, 1);

        this._via_redraw_reg_canvas();
        this._via_reg_canvas.focus();
      }
    }
  }

  _via_polyshape_add_new_polyshape(img_id: any, region_shape: any, region_id: any): void {
    // add all polygon points stored in _via_canvas_regions[]
    var all_points_x = this._via_canvas_regions[region_id].shape_attributes['all_points_x'].slice(0);
    var all_points_y = this._via_canvas_regions[region_id].shape_attributes['all_points_y'].slice(0);

    var canvas_all_points_x = [];
    var canvas_all_points_y = [];
    var n = all_points_x.length;
    var i;
    for (i = 0; i < n; ++i) {
      all_points_x[i] = Math.round(all_points_x[i] * this._via_canvas_scale);
      all_points_y[i] = Math.round(all_points_y[i] * this._via_canvas_scale);

      canvas_all_points_x[i] = Math.round(all_points_x[i] / this._via_canvas_scale);
      canvas_all_points_y[i] = Math.round(all_points_y[i] / this._via_canvas_scale);
    }

    var polygon_region = new file_region();
    polygon_region.shape_attributes['name'] = region_shape;
    polygon_region.shape_attributes['all_points_x'] = all_points_x;
    polygon_region.shape_attributes['all_points_y'] = all_points_y;
    this._via_img_metadata[img_id].regions[region_id] = polygon_region;

    // update canvas
    if (img_id === this._via_image_id) {
      this._via_canvas_regions[region_id].shape_attributes['name'] = region_shape;
      this._via_canvas_regions[region_id].shape_attributes['all_points_x'] = canvas_all_points_x;
      this._via_canvas_regions[region_id].shape_attributes['all_points_y'] = canvas_all_points_y;
    }
  }

  del_sel_regions(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    var del_region_count = 0;
    if (this._via_is_all_region_selected) {
      del_region_count = this._via_canvas_regions.length;
      this._via_canvas_regions.splice(0);
      this._via_img_metadata[this._via_image_id].regions.splice(0);
    } else {
      var sorted_sel_reg_id = [];
      for (i = 0; i < this._via_canvas_regions.length; ++i) {
        if (this._via_region_selected_flag[i]) {
          sorted_sel_reg_id.push(i);
          this._via_region_selected_flag[i] = false;
        }
      }
      sorted_sel_reg_id.sort(function (a, b) {
        return (b - a);
      });
      for (var i = 0; i < sorted_sel_reg_id.length; ++i) {
        this._via_canvas_regions.splice(sorted_sel_reg_id[i], 1);
        this._via_img_metadata[this._via_image_id].regions.splice(sorted_sel_reg_id[i], 1);
        del_region_count += 1;
      }

      if (sorted_sel_reg_id.length) {
        this._via_reg_canvas.style.cursor = "default";
      }
    }

    this._via_is_all_region_selected = false;
    this._via_is_region_selected = false;
    this._via_user_sel_region_id = -1;

    if (this._via_canvas_regions.length === 0) {
      // all regions were deleted, hence clear region canvas
      this._via_clear_reg_canvas();
    } else {
      this._via_redraw_reg_canvas();
    }
    this._via_reg_canvas.focus();
    this.annotation_editor_show();

    this.show_message('Deleted ' + del_region_count + ' selected regions', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
  }

  sel_all_regions(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      this.image_grid_group_toggle_select_all();
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    this.toggle_all_regions_selection(true);
    this._via_is_all_region_selected = true;
    this._via_redraw_reg_canvas();
  }

  copy_sel_regions(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (this._via_is_region_selected ||
      this._via_is_all_region_selected) {
        this._via_copied_image_regions.splice(0);
      for (var i = 0; i < this._via_img_metadata[this._via_image_id].regions.length; ++i) {
        var img_region = this._via_img_metadata[this._via_image_id].regions[i];
        var canvas_region = this._via_canvas_regions[i];
        if (this._via_region_selected_flag[i]) {
          this._via_copied_image_regions.push(clone_image_region(img_region));
        }
      }
      this.show_message('Copied ' + this._via_copied_image_regions.length +
        ' selected regions. Press Ctrl + v to paste', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      this.show_message('Select a region first!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  paste_sel_regions_in_current_image(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (this._via_copied_image_regions.length) {
      var pasted_reg_count = 0;
      for (var i = 0; i < this._via_copied_image_regions.length; ++i) {
        // ensure copied the regions are within this image's boundaries
        var bbox = this.get_region_bounding_box(this._via_copied_image_regions[i]);
        if (bbox[2] < this._via_current_image_width &&
          bbox[3] < this._via_current_image_height) {
          var r = this.clone_image_region(this._via_copied_image_regions[i]);
          this._via_img_metadata[this._via_image_id].regions.push(r);

          pasted_reg_count += 1;
        }
      }
      this._via_load_canvas_regions();
      var discarded_reg_count = this._via_copied_image_regions.length - pasted_reg_count;
      this.show_message('Pasted ' + pasted_reg_count + ' regions. ' +
        'Discarded ' + discarded_reg_count + ' regions exceeding image boundary.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        this._via_redraw_reg_canvas();
        this._via_reg_canvas.focus();
    } else {
      this.show_message('To paste a region, you first need to select a region and copy it!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  paste_to_multiple_images_with_confirm(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    if (this._via_copied_image_regions.length === 0) {
      this.show_message('First copy some regions!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    this.config = { 'title': 'Paste Regions to Multiple Images' };
    this.input = {
      'region_count': { type: 'text', name: 'Number of copied regions', value: _via_copied_image_regions.length, disabled: true },
      'prev_next_count': { type: 'text', name: 'Copy to (count format)<br><span style="font-size:0.8rem">For example: to paste copied regions to the <i>previous 2 images</i> and <i>next 3 images</i>, type <strong>2,3</strong> in the textbox and to paste only in <i>next 5 images</i>, type <strong>0,5</strong></span>', placeholder: '2,3', disabled: false, size: 30 },
      'img_index_list': { type: 'text', name: 'Copy to (image index list)<br><span style="font-size:0.8rem">For example: <strong>2-5,7,9</strong> pastes the copied regions to the images with the following id <i>2,3,4,5,7,9</i> and <strong>3,8,141</strong> pastes to the images with id <i>3,8 and 141</i></span>', placeholder: '2-5,7,9', disabled: false, size: 30 },
      'regex': { type: 'text', name: 'Copy to filenames matching a regular expression<br><span style="font-size:0.8rem">For example: <strong>_large</strong> pastes the copied regions to all images whose filename contain the keyword <i>_large</i></span>', placeholder: 'regular expression', disabled: false, size: 30 },
      'include_region_attributes': { type: 'checkbox', name: 'Paste also the region annotations', checked: true },
    };

    this.invoke_with_user_inputs(paste_to_multiple_images_confirmed, this.input, this.config, this.cancel_handler);
  }

  paste_to_multiple_images_confirmed(input: any): void {
    // keep a copy of user inputs for the undo operation
    this._via_paste_to_multiple_images_input = input;
    var intersect = this.generate_img_index_list(input);
    var i;
    var total_pasted_region_count = 0;
    for (i = 0; i < intersect.length; i++) {
      total_pasted_region_count += paste_regions(intersect[i]);
    }

    this.show_message('Pasted [' + total_pasted_region_count + '] regions ' +
      'in ' + intersect.length + ' images', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);

    if (intersect.includes(this._via_image_index)) {
      this._via_load_canvas_regions();
      this._via_redraw_reg_canvas();
      this._via_reg_canvas.focus();
    }
    this.user_input_default_cancel_handler();
  }

  paste_regions(img_index: any): number {
    var pasted_reg_count = 0;
    if (this._via_copied_image_regions.length) {
      var img_id = this._via_image_id_list[img_index];
      var i;
      for (i = 0; i < this._via_copied_image_regions.length; ++i) {
        var r = this.clone_image_region(this._via_copied_image_regions[i]);
        this._via_img_metadata[img_id].regions.push(r);

        pasted_reg_count += 1;
      }
    }
    return pasted_reg_count;
  }


  del_sel_regions_with_confirm(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    if (this._via_copied_image_regions.length === 0) {
      this.show_message('First copy some regions!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    var prev_next_count, img_index_list, regex;
    if (this._via_paste_to_multiple_images_input) {
      prev_next_count = this._via_paste_to_multiple_images_input.prev_next_count.value;
      img_index_list = this._via_paste_to_multiple_images_input.img_index_list.value;
      regex = this._via_paste_to_multiple_images_input.regex.value;
    }

    this.config = { 'title': 'Undo Regions Pasted to Multiple Images' };
    this.input = {
      'region_count': { type: 'text', name: 'Number of regions selected', value: _via_copied_image_regions.length, disabled: true },
      'prev_next_count': { type: 'text', name: 'Delete from (count format)<br><span style="font-size:0.8rem">For example: to delete copied regions from the <i>previous 2 images</i> and <i>next 3 images</i>, type <strong>2,3</strong> in the textbox and to delete regions only in <i>next 5 images</i>, type <strong>0,5</strong></span>', placeholder: '2,3', disabled: false, size: 30, value: prev_next_count },
      'img_index_list': { type: 'text', name: 'Delete from (image index list)<br><span style="font-size:0.8rem">For example: <strong>2-5,7,9</strong> deletes the copied regions to the images with the following id <i>2,3,4,5,7,9</i> and <strong>3,8,141</strong> deletes regions from the images with id <i>3,8 and 141</i></span>', placeholder: '2-5,7,9', disabled: false, size: 30, value: img_index_list },
      'regex': { type: 'text', name: 'Delete from filenames matching a regular expression<br><span style="font-size:0.8rem">For example: <strong>_large</strong> deletes the copied regions from all images whose filename contain the keyword <i>_large</i></span>', placeholder: 'regular expression', disabled: false, size: 30, value: regex },
    };

    this.invoke_with_user_inputs(del_sel_regions_confirmed, this.input, this.config, this.cancel_handler);
  }

  del_sel_regions_confirmed(input: any): void {
    this.user_input_default_cancel_handler();
    var intersect = this.generate_img_index_list(input);
    var i;
    var total_deleted_region_count = 0;
    for (i = 0; i < intersect.length; i++) {
      total_deleted_region_count += this.delete_regions(intersect[i]);
    }

    this.show_message('Deleted [' + total_deleted_region_count + '] regions ' +
      'in ' + intersect.length + ' images', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);

    if (intersect.includes(this._via_image_index)) {
      this._via_load_canvas_regions();
      this._via_redraw_reg_canvas();
      this._via_reg_canvas.focus();
    }
  }

  delete_regions(img_index: any): number {
    var del_region_count = 0;
    if (this._via_copied_image_regions.length) {
      var img_id = this._via_image_id_list[img_index];
      var i;
      for (i = 0; i < this._via_copied_image_regions.length; ++i) {
        var copied_region_shape_str = JSON.stringify(this._via_copied_image_regions[i].shape_attributes);
        var j;
        // start from last region in order to delete the last pasted region
        for (j = this._via_img_metadata[img_id].regions.length - 1; j >= 0; --j) {
          if (JSON.stringify(this._via_img_metadata[img_id].regions[j].shape_attributes) === copied_region_shape_str) {
            this._via_img_metadata[img_id].regions.splice(j, 1);
            del_region_count += 1;
            break; // delete only one matching region
          }
        }
      }
    }
    return del_region_count;
  }

  show_first_image(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (this._via_image_grid_group_var.length) {
        this.image_grid_group_prev({ 'value': 0 }); // simulate button click
      } else {
        this.show_message('First, create groups by selecting items from "Group by" dropdown list', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      }
      return;
    }

    if (this._via_img_count > 0) {
      this._via_show_img(this._via_img_fn_list_img_index_list[0]);
    }
  }

  show_last_image(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (this._via_image_grid_group_var.length) {
        this.image_grid_group_prev({ 'value': this._via_image_grid_group_var.length - 1 }); // simulate button click
      } else {
        this.show_message('First, create groups by selecting items from "Group by" dropdown list', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      }
      return;
    }

    if (this._via_img_count > 0) {
      var last_img_index = this._via_img_fn_list_img_index_list.length - 1;
      this._via_show_img(this._via_img_fn_list_img_index_list[last_img_index]);
    }
  }

  jump_image_block_get_count(): number {
    var n = this._via_img_fn_list_img_index_list.length;
    if (n < 20) {
      return 2;
    }
    if (n < 100) {
      return 10;
    }
    if (n < 1000) {
      return 25;
    }
    if (n < 5000) {
      return 50;
    }
    if (n < 10000) {
      return 100;
    }
    if (n < 50000) {
      return 500;
    }

    return Math.round(n / 50);
  }

  jump_to_next_image_block(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    var jump_count = this.jump_image_block_get_count();
    if (jump_count > 1) {
      var current_img_index = this._via_image_index;
      if (this._via_img_fn_list_img_index_list.includes(current_img_index)) {
        var list_index = this._via_img_fn_list_img_index_list.indexOf(current_img_index);
        var next_list_index = list_index + jump_count;
        if ((next_list_index + 1) > this._via_img_fn_list_img_index_list.length) {
          next_list_index = 0;
        }
        var next_img_index = this._via_img_fn_list_img_index_list[next_list_index];
        this._via_show_img(next_img_index);
      }
    } else {
      this.move_to_next_image();
    }
  }

  jump_to_prev_image_block(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      return;
    }

    var jump_count = this.jump_image_block_get_count();
    if (jump_count > 1) {
      var current_img_index = this._via_image_index;
      if (this._via_img_fn_list_img_index_list.includes(current_img_index)) {
        var list_index = this._via_img_fn_list_img_index_list.indexOf(current_img_index);
        var prev_list_index = list_index - jump_count;
        if (prev_list_index < 0) {
          prev_list_index = this._via_img_fn_list_img_index_list.length - 1;
        }
        var prev_img_index = this._via_img_fn_list_img_index_list[prev_list_index];
        this._via_show_img(prev_img_index);
      }
    } else {
      this.move_to_prev_image();
    }
  }

  move_to_prev_image(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (this._via_image_grid_group_var.length) {
        var last_group_index = this._via_image_grid_group_var.length - 1;
        this.image_grid_group_prev({ 'value': last_group_index }); // simulate button click
      } else {
        this.show_message('First, create groups by selecting items from "Group by" dropdown list', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      }
      return;
    }

    if (this._via_img_count > 0) {
      var current_img_index = this._via_image_index;
      if (this._via_img_fn_list_img_index_list.includes(current_img_index)) {
        var list_index = this._via_img_fn_list_img_index_list.indexOf(current_img_index);
        var next_list_index = list_index - 1;
        if (next_list_index === -1) {
          next_list_index = this._via_img_fn_list_img_index_list.length - 1;
        }
        var next_img_index = this._via_img_fn_list_img_index_list[next_list_index];
        this._via_show_img(next_img_index);
      } else {
        if (this._via_img_fn_list_img_index_list.length === 0) {
          this.show_message('Filtered file list does not any files!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        } else {
          this._via_show_img(this._via_img_fn_list_img_index_list[0]);
        }
      }

      // if (typeof _via_hook_prev_image === 'function') {
      //   _via_hook_prev_image(current_img_index);
      // }
    }
  }

  move_to_next_image(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (this._via_image_grid_group_var.length) {
        var last_group_index = this._via_image_grid_group_var.length - 1;
        this.image_grid_group_next({ 'value': last_group_index }); // simulate button click
      } else {
        this.show_message('First, create groups by selecting items from "Group by" dropdown list', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      }
      return;
    }

    if (this._via_img_count > 0) {
      var current_img_index = this._via_image_index;
      if (this._via_img_fn_list_img_index_list.includes(current_img_index)) {
        var list_index = this._via_img_fn_list_img_index_list.indexOf(current_img_index);
        var next_list_index = list_index + 1;
        if (next_list_index === this._via_img_fn_list_img_index_list.length) {
          next_list_index = 0;
        }
        var next_img_index = this._via_img_fn_list_img_index_list[next_list_index];
        this._via_show_img(next_img_index);
      } else {
        if (this._via_img_fn_list_img_index_list.length === 0) {
          this.show_message('Filtered file list does not contain any files!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        } else {
          this._via_show_img(this._via_img_fn_list_img_index_list[0]);
        }
      }

      // if (typeof _via_hook_next_image === 'function') {
      //   _via_hook_next_image(current_img_index);
      // }
    }
  }

  set_zoom(zoom_level_index: any): void {
    if (this.zoom_level_index === this.VIA_CANVAS_DEFAULT_ZOOM_LEVEL_INDEX) {
      this._via_is_canvas_zoomed = false;
      this._via_canvas_zoom_level_index = this.VIA_CANVAS_DEFAULT_ZOOM_LEVEL_INDEX;
    } else {
      this._via_is_canvas_zoomed = true;
      this._via_canvas_zoom_level_index = zoom_level_index;
    }

    var zoom_scale = this.VIA_CANVAS_ZOOM_LEVELS[_via_canvas_zoom_level_index];
    this.set_all_canvas_scale(zoom_scale);
    var canvas_w = (this._via_current_image.naturalWidth * zoom_scale) / this._via_canvas_scale_without_zoom;
    var canvas_h = (this._via_current_image.naturalHeight * zoom_scale) / this._via_canvas_scale_without_zoom;
    set_all_canvas_size(canvas_w, canvas_h);
    this._via_canvas_scale = this._via_canvas_scale_without_zoom / zoom_scale;
    this._via_canvas_scale = this._via_canvas_scale_without_zoom / zoom_scale;

    if (zoom_scale === 1) {
      this.VIA_REGION_POINT_RADIUS = this.VIA_REGION_POINT_RADIUS_DEFAULT;
    } else {
      if (zoom_scale > 1) {
        this.VIA_REGION_POINT_RADIUS = this.VIA_REGION_POINT_RADIUS_DEFAULT * zoom_scale;
      }
    }

    this._via_load_canvas_regions(); // image to canvas space transform
    this._via_redraw_reg_canvas();
    this._via_reg_canvas.focus();
    this.update_vertical_space();
  }

  reset_zoom_level(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      this.image_grid_image_size_reset();
      this.show_message('Zoom reset', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (this._via_is_canvas_zoomed) {
      this.set_zoom(this.VIA_CANVAS_DEFAULT_ZOOM_LEVEL_INDEX);
      this.show_message('Zoom reset', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      this.show_message('Cannot reset zoom because image zoom has not been applied!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
    this.update_vertical_space();
  }

  zoom_in(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      this.image_grid_image_size_increase();
      this.show_message('Increased size of images shown in image grid', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (this._via_is_user_drawing_polygon || this._via_is_user_drawing_region) {
      return;
    }

    if (this._via_canvas_zoom_level_index === (this.VIA_CANVAS_ZOOM_LEVELS.length - 1)) {
      this.show_message('Further zoom-in not possible', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      var new_zoom_level_index = _via_canvas_zoom_level_index + 1;
      this.set_zoom(new_zoom_level_index);
      this.show_message('Zoomed in to level ' + this.VIA_CANVAS_ZOOM_LEVELS[this._via_canvas_zoom_level_index] + 'X', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  zoom_out(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      this.image_grid_image_size_decrease();
      this.show_message('Reduced size of images shown in image grid', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (!this._via_current_image_loaded) {
      this.show_message('First load some images!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (this._via_is_user_drawing_polygon || this._via_is_user_drawing_region) {
      return;
    }

    if (this._via_canvas_zoom_level_index === 0) {
      this.show_message('Further zoom-out not possible', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      var new_zoom_level_index = this._via_canvas_zoom_level_index - 1;
      this.set_zoom(new_zoom_level_index);
      this.show_message('Zoomed out to level ' + this.VIA_CANVAS_ZOOM_LEVELS[_via_canvas_zoom_level_index] + 'X', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  toggle_region_boundary_visibility(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE) {
      this._via_is_region_boundary_visible = !this._via_is_region_boundary_visible;
      this._via_redraw_reg_canvas();
      this._via_reg_canvas.focus();
    }

    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (this._via_settings_ui_image_grid_show_region_shape) {
        this._via_settings_ui_image_grid_show_region_shape = false;
        document.getElementById('image_grid_content_rshape').innerHTML = '';
      } else {
        this._via_settings_ui_image_grid_show_region_shape = true;
        this.image_grid_page_show_all_regions();
      }
    }
  }

  toggle_region_id_visibility(): void {
    this._via_is_region_id_visible = !this._via_is_region_id_visible;
    this._via_redraw_reg_canvas();
    this._via_reg_canvas.focus();
  }

  toggle_region_info_visibility(): void {
    var elem = document.getElementById('region_info');
    // toggle between displaying and not displaying
    if (elem.classList.contains('display_none')) {
      elem.classList.remove('display_none');
      this._via_is_region_info_visible = true;
    } else {
      elem.classList.add('display_none');
      this._via_is_region_info_visible = false;
    }
  }

  //
  // Mouse wheel event listener
  //
  _via_reg_canvas_mouse_wheel_listener(e: any): void {
    if (!this._via_current_image_loaded) {
      return;
    }

    if ((e as KeyboardEvent).ctrlKey) {
      // perform zoom
      if ((e as WheelEvent).deltaY < 0) {
        this.zoom_in();
      } else {
        this.zoom_out();
      }
      e.preventDefault();
    }
  }

  region_visualisation_update(type: any, default_id: any, next_offset: any): void {
    var attr_list = [default_id];
    attr_list = attr_list.concat(Object.keys(this._via_attributes['region']));
    var n = attr_list.length;
    var current_index = attr_list.indexOf(this._via_settings_ui_image[type]);
    var new_index;
    if (current_index !== -1) {
      new_index = current_index + next_offset;

      if (new_index < 0) {
        new_index = n + new_index;
      }
      if (new_index >= n) {
        new_index = new_index - n;
      }
      switch (type) {
        case 'region_label':
          this._via_settings_ui_image_region_label = attr_list[new_index];
          this._via_redraw_reg_canvas();
          break;
        case 'region_color':
          this._via_settings_ui_image_region_color = attr_list[new_index];
          this._via_regions_group_color_init();
          this._via_redraw_reg_canvas();
      }

      var type_str = type.replace('_', ' ');
      if (this._via_settings_ui_image[type].startsWith('__via')) {
        this.show_message(type_str + ' cleared', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      } else {
        this.show_message(type_str + ' set to region attribute [' + this._via_settings_ui_image[type] + ']', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      }
    }
  }

  //
  // left sidebar toolbox maintainer
  //
  leftsidebar_toggle(): void {
    var leftsidebar = document.getElementById('leftsidebar');
    if (leftsidebar.style.display === 'none') {
      leftsidebar.style.display = 'table-cell';
      document.getElementById('leftsidebar_collapse_panel').style.display = 'none';
    } else {
      leftsidebar.style.display = 'none';
      document.getElementById('leftsidebar_collapse_panel').style.display = 'table-cell';
    }
    this._via_update_ui_components();
  }

  leftsidebar_increase_width(): void {
    var leftsidebar = document.getElementById('leftsidebar');
    var new_width = this._via_settings_ui_leftsidebar_width + VIA_LEFTSIDEBAR_WIDTH_CHANGE;
    leftsidebar.style.width = new_width + 'rem';
    this._via_settings_ui_leftsidebar_width = new_width;
    if (this._via_current_image_loaded) {
      this._via_show_img(this._via_image_index);
    }
  }

  leftsidebar_decrease_width(): void {
    var leftsidebar = document.getElementById('leftsidebar');
    var new_width = this._via_settings_ui_leftsidebar_width - VIA_LEFTSIDEBAR_WIDTH_CHANGE;
    if (new_width >= 5) {
      leftsidebar.style.width = new_width + 'rem';
      this._via_settings_ui_leftsidebar_width = new_width;
      if (this._via_current_image_loaded) {
        this._via_show_img(this._via_image_index);
      }
    }
  }

  leftsidebar_show(): void {
    var leftsidebar = document.getElementById('leftsidebar');
    leftsidebar.style.display = 'table-cell';
    document.getElementById('leftsidebar_collapse_panel').style.display = 'none';
  }

  // source: https://www.w3schools.com/howto/howto_js_accordion.asp
  init_leftsidebar_accordion(): void {
    var leftsidebar = document.getElementById('leftsidebar');
    leftsidebar.style.width = this._via_settings_ui_leftsidebar_width + 'rem';

    var acc = document.getElementsByClassName('leftsidebar_accordion');
    var i;
    for (i = 0; i < acc.length; ++i) {
      acc[i].addEventListener('click', function () {
        this.update_vertical_space();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');

        switch (this.innerHTML) {
          case 'Attributes':
            this.update_attributes_update_panel();
            break;
          case 'Project':
            this.update_img_fn_list();
            break;
        }
      });
    }
  }

  //
  // image filename list shown in leftsidebar panel
  //
  is_img_fn_list_visible(): boolean {
    return this.img_fn_list_panel.classList.contains('show');
  }

  img_loading_spinbar(image_index: any, show: any): void {
    var panel = document.getElementById('project_panel_title');
    if (show) {
      panel.innerHTML = 'Project <span style="margin-left:1rem;" class="loading_spinbox"></span>';
    } else {
      panel.innerHTML = 'Project';
    }
  }

  update_img_fn_list(): void {
    var regex1: HTMLInputElement = document.getElementById('img_fn_list_regex') as HTMLInputElement;
    var regex = regex1.value;
    this.p = document.getElementById('filelist_preset_filters_list') as HTMLSelectElement;
    if (regex === '' || regex === null) {
      if (this.p.selectedIndex === 0) {
        // show all files
        this._via_img_fn_list_html = [];
        this._via_img_fn_list_img_index_list = [];
        this._via_img_fn_list_html.push('<ul>');
        for (var i = 0; i < this._via_image_filename_list.length; ++i) {
          this._via_img_fn_list_html.push(this.img_fn_list_ith_entry_html(i));
          this._via_img_fn_list_img_index_list.push(i);
        }
        this._via_img_fn_list_html.push('</ul>');
        this.img_fn_list.innerHTML = this._via_img_fn_list_html.join('');
        this.img_fn_list_scroll_to_current_file();
      } else {
        // filter according to preset filters
        this.img_fn_list_onpresetfilter_select();
      }
    } else {
      this.img_fn_list_generate_html(regex);
      this.img_fn_list.innerHTML = this._via_img_fn_list_html.join('');
      this.img_fn_list_scroll_to_current_file();
    }
  }

  img_fn_list_onregex(): void {
    var regex1: HTMLInputElement = document.getElementById('img_fn_list_regex') as HTMLInputElement;
    var regex = regex1.value;
    this.img_fn_list_generate_html(regex);
    this.img_fn_list.innerHTML = this._via_img_fn_list_html.join('');
    this.img_fn_list_scroll_to_current_file();

    // select 'regex' in the predefined filter list
    this.p = document.getElementById('filelist_preset_filters_list') as HTMLSelectElement;
    if (regex === '') {
      this.p.selectedIndex = 0;
    } else {
      var i;
      for (i = 0; i < this.p.options.length; ++i) {
        if (this.p.options[i].value === 'regex') {
          this.p.selectedIndex = i;
          break;
        }
      }
    }
  }

  img_fn_list_onpresetfilter_select(): void {
    var regex1: HTMLInputElement = document.getElementById('img_fn_list_regex') as HTMLInputElement;
    var regex = regex1.value;
    this.p = document.getElementById('filelist_preset_filters_list') as HTMLSelectElement;
    var filter = this.p.options[this.p.selectedIndex].value;
    switch (filter) {
      case 'all':
        regex = '';
        this.img_fn_list_generate_html(regex);
        this.img_fn_list.innerHTML = this._via_img_fn_list_html.join('');
        this.img_fn_list_scroll_to_current_file();
        break;
      case 'regex':
        document.getElementById('img_fn_list_regex').focus();
        break;
      default:
        this._via_img_fn_list_html = [];
        this._via_img_fn_list_img_index_list = [];
        this._via_img_fn_list_html.push('<ul>');
        var i;
        for (i = 0; i < this._via_image_filename_list.length; ++i) {
          var img_id = this._via_image_id_list[i];
          var add_to_list = false;
          switch (filter) {
            case 'files_without_region':
              if (this._via_img_metadata[img_id].regions.length === 0) {
                add_to_list = true;
              }
              break;
            case 'files_missing_region_annotations':
              if (this.is_region_annotation_missing(img_id)) {
                add_to_list = true;
              }
              break;
            case 'files_missing_file_annotations':
              if (is_file_annotation_missing(img_id)) {
                add_to_list = true;
              }
              break;
            case 'files_error_loading':
              if (this._via_image_load_error[i] === true) {
                add_to_list = true;
              }
          }
          if (add_to_list) {
            this._via_img_fn_list_html.push(this.img_fn_list_ith_entry_html(i));
            this._via_img_fn_list_img_index_list.push(i);
          }
        }
        this._via_img_fn_list_html.push('</ul>');
        this.img_fn_list.innerHTML = this._via_img_fn_list_html.join('');
        this.img_fn_list_scroll_to_current_file();
        break;
    }
  }

  is_region_annotation_missing(img_id: any): boolean {
    var region_attribute;
    var i;
    for (i = 0; i < this._via_img_metadata[img_id].regions.length; ++i) {
      for (region_attribute in this._via_attributes['region']) {
        if (this._via_img_metadata[img_id].regions[i].region_attributes.hasOwnProperty(region_attribute)) {
          if (this._via_img_metadata[img_id].regions[i].region_attributes[region_attribute] === '') {
            return true;
          }
        } else {
          return true;
        }
      }
    }
    return false;
  }

  is_file_annotation_missing(img_id: any): boolean {
    var file_attribute;
    for (file_attribute in this._via_attributes['file']) {
      if (this._via_img_metadata[img_id].file_attributes.hasOwnProperty(file_attribute)) {
        if (this._via_img_metadata[img_id].file_attributes[file_attribute] === '') {
          return true;
        }
      } else {
        return true;
      }
    }
    return false;
  }

  img_fn_list_ith_entry_selected(img_index: any, is_selected: any): void {
    if (is_selected) {
      this.img_fn_list_ith_entry_add_css_class(img_index, 'sel');
    } else {
      this.img_fn_list_ith_entry_remove_css_class(img_index, 'sel');
    }
  }

  img_fn_list_ith_entry_error(img_index: any, is_error: any): void {
    if (is_error) {
      this.img_fn_list_ith_entry_add_css_class(img_index, 'error');
    } else {
      this.img_fn_list_ith_entry_remove_css_class(img_index, 'error');
    }
  }

  img_fn_list_ith_entry_add_css_class(img_index: any, classname: any): void {
    var li = document.getElementById('fl' + img_index);
    if (li && !li.classList.contains(classname)) {
      li.classList.add(classname);
    }
  }

  img_fn_list_ith_entry_remove_css_class(img_index: any, classname: any): void {
    var li = document.getElementById('fl' + img_index);
    if (li && li.classList.contains(classname)) {
      li.classList.remove(classname);
    }
  }

  //  img_fn_list_clear_all_style(): void {
  //   var cn2 = document.getElementById('img_fn_list');
  //   var cn =  cn2.childNodes[0].childNodes ;
  //   var i, j;
  //   n = cn.length;
  //   var nclass;
  //   for (i = 0; i < n; ++i) {
  //     //cn[i].classList = []; // throws error in Edge browser
  //     nclass = cn[i].classList.length;
  //     if (nclass) {
  //       for (j = 0; j < nclass; ++j) {
  //         cn[i].classList.remove(cn[i].classList.item(j));
  //       }
  //     }
  //   }
  // }

  //   img_fn_list_clear_css_classname(classname: any): void {
  //   let  cn2 = document.getElementById('img_fn_list');
  //   let cn = cn2.childNodes[0].childNodes;
  //   var i;
  //   n = cn.length;
  //   for (i = 0; i < n; ++i) {
  //     if (cn[i].classList.contains(classname)) {
  //       cn[i].classList.remove(classname);
  //     }
  //   }
  // }

  img_fn_list_ith_entry_html(i: any): string {
    var htmli = '';
    var filename = this._via_image_filename_list[i];
    if (this.is_url(filename)) {
      filename = filename.substr(0, 4) + '...' + get_filename_from_url(filename);
    }

    htmli += '<li id="fl' + i + '"';
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (this._via_image_grid_page_img_index_list.includes(i)) {
        // highlight images being shown in image grid
        htmli += ' class="sel"';
      }

    } else {
      if (i === this._via_image_index) {
        // highlight the current entry
        htmli += ' class="sel"';
      }
    }
    htmli += ' onclick="jump_to_image(' + (i) + ')" title="' + this._via_image_filename_list[i] + '">[' + (i + 1) + '] ' + filename + '</li>';
    return htmli;
  }

  img_fn_list_generate_html(regex: any): void {
    this._via_img_fn_list_html = [];
    this._via_img_fn_list_img_index_list = [];
    this._via_img_fn_list_html.push('<ul>');
    for (var i = 0; i < this._via_image_filename_list.length; ++i) {
      var filename = this._via_image_filename_list[i];
      if (filename.match(regex) !== null) {
        this._via_img_fn_list_html.push(img_fn_list_ith_entry_html(i));
        this._via_img_fn_list_img_index_list.push(i);
      }
    }
    this._via_img_fn_list_html.push('</ul>');
  }

  img_fn_list_scroll_to_current_file(): void {
    this.img_fn_list_scroll_to_file(this._via_image_index); 
  }

  img_fn_list_scroll_to_file(file_index: any): void {
    if (this._via_img_fn_list_img_index_list.includes(file_index)) {
      var sel_file = document.getElementById('fl' + file_index);
      var panel_height = this.img_fn_list.clientHeight - 20;
      var window_top = this.img_fn_list.scrollTop;
      var window_bottom = this.img_fn_list.scrollTop + panel_height
      if (sel_file.offsetTop > window_top) {
        if (sel_file.offsetTop > window_bottom) {
          this.img_fn_list.scrollTop = sel_file.offsetTop;
        }
      } else {
        this.img_fn_list.scrollTop = sel_file.offsetTop - panel_height;
      }
    }
  }

  toggle_img_fn_list_visibility(): void {
    this.leftsidebar_show();
    document.getElementById('img_fn_list_panel').classList.toggle('show');
    document.getElementById('project_panel_title').classList.toggle('active');
  }

  toggle_attributes_editor(): void {
    this.leftsidebar_show();
    document.getElementById('attributes_editor_panel').classList.toggle('show');
    document.getElementById('attributes_editor_panel_title').classList.toggle('active');
  }

  // this vertical spacer is needed to allow scrollbar to show
  // items like Keyboard Shortcut hidden under the attributes panel
  update_vertical_space(): void {
    var panel = document.getElementById('vertical_space');
    var aepanel = document.getElementById('annotation_editor_panel');
    panel.style.height = (aepanel.offsetHeight + 40) + 'px';
  }

  //
  // region and file attributes update panel
  //
  attribute_update_panel_set_active_button(): void {
    var attribute_type;
    for (attribute_type in this._via_attributes) {
      var bid = 'button_show_' + attribute_type + '_attributes';
      document.getElementById(bid).classList.remove('active');
    }
    var bid = 'button_show_' + this._via_attribute_being_updated + '_attributes';
    document.getElementById(bid).classList.add('active');
  }

  show_region_attributes_update_panel(): void {
    this._via_attribute_being_updated = 'region';
    var rattr_list = Object.keys(this._via_attributes['region']);
    if (rattr_list.length) {
      this._via_current_attribute_id = rattr_list[0];
    } else {
      this._via_current_attribute_id = '';
    }
    this.update_attributes_update_panel();
    this.attribute_update_panel_set_active_button();

  }

  show_file_attributes_update_panel(): void {
    this._via_attribute_being_updated = 'file';
    var fattr_list = Object.keys(this._via_attributes['file']);
    if (fattr_list.length) {
      this._via_current_attribute_id = fattr_list[0];
    } else {
      this._via_current_attribute_id = '';
    }
    this.update_attributes_update_panel();
    this.attribute_update_panel_set_active_button();
  }

  update_attributes_name_list(): void {
    this.p = document.getElementById('attributes_name_list');
    this.p.innerHTML = '';

    var attr;
    for (attr in this._via_attributes[this._via_attribute_being_updated]) {
      var option = document.createElement('option');
      option.setAttribute('value', attr)
      option.innerHTML = attr;
      if (attr === this._via_current_attribute_id) {
        option.setAttribute('selected', 'selected');
      }
      this.p.appendChild(option);
    }
  }

  update_attributes_update_panel(): void {
    if (document.getElementById('attributes_editor_panel').classList.contains('show')) {
      this.update_attributes_name_list();
      this.show_attribute_properties();
      this.show_attribute_options();
    }
  }

  update_attribute_properties_panel(): void {
    if (document.getElementById('attributes_editor_panel').classList.contains('show')) {
      this.show_attribute_properties();
      this.show_attribute_options();
    }
  }

  show_attribute_properties(): void {
    let attr_list = document.getElementById('attributes_name_list') as HTMLSelectElement;
    document.getElementById('attribute_properties').innerHTML = '';

    if (attr_list.options.length === 0) {
      return;
    }

    if (typeof (this._via_current_attribute_id) === 'undefined' || this._via_current_attribute_id === '') {
      this._via_current_attribute_id = attr_list.options[0].value;
    }

    this.attr_id = this._via_current_attribute_id;
    this.attr_type = this._via_attribute_being_updated;
    var attr_input_type = this._via_attributes[this.attr_type][this.attr_id].type;
    var attr_desc = this._via_attributes[this.attr_type][this.attr_id].description;

    this.attribute_property_add_input_property('Name of attribute (appears in exported annotations)',
      'Name',
      this.attr_id,
      'attribute_name');
      this.attribute_property_add_input_property('Description of attribute (shown to user during annotation session)',
      'Desc.',
      attr_desc,
      'attribute_description');

    if (attr_input_type === 'text') {
      var attr_default_value = this._via_attributes[this.attr_type][this.attr_id].default_value;
      this.attribute_property_add_input_property('Default value of this attribute',
        'Def.',
        attr_default_value,
        'attribute_default_value');
    }

    // add dropdown for type of attribute
     this.p = document.createElement('div');
     this.p.setAttribute('class', 'property');
    var c0 = document.createElement('span');
    c0.setAttribute('title', 'Attribute type (e.g. text, checkbox, radio, etc)');
    c0.innerHTML = 'Type';
    var c1 = document.createElement('span');
    var c1b = document.createElement('select');
    c1b.setAttribute('onchange', 'attribute_property_on_update(this)');
    c1b.setAttribute('id', 'attribute_type');
    var type_id;
    for (type_id in this.VIA_ATTRIBUTE_TYPE) {
      var type = this.VIA_ATTRIBUTE_TYPE[type_id];
      var option = document.createElement('option');
      option.setAttribute('value', type);
      option.innerHTML = type;
      if (attr_input_type == type) {
        option.setAttribute('selected', 'selected');
      }
      c1b.appendChild(option);
    }
    c1.appendChild(c1b);
    this.p.appendChild(c0);
    this.p.appendChild(c1);
    document.getElementById('attribute_properties').appendChild(this.p);
  }

  show_attribute_options(): void {
    let attr_list = document.getElementById('attributes_name_list') as HTMLSelectElement;
    document.getElementById('attribute_options').innerHTML = '';
    if (attr_list.options.length === 0) {
      return;
    }

    var attr_id = attr_list.value;
    var attr_type = this._via_attributes[this._via_attribute_being_updated][attr_id].type;

    // populate additional options based on attribute type
    switch (attr_type) {
      case this.VIA_ATTRIBUTE_TYPE.TEXT:
        // text does not have any additional propertiesx`
        break;
      case this.VIA_ATTRIBUTE_TYPE.IMAGE:
        this.p = document.createElement('div');
        this.p.setAttribute('class', 'property');
        this.p.setAttribute('style', 'text-align:center');
        var c0 = document.createElement('span');
        c0.setAttribute('style', 'width:25%');
        c0.setAttribute('title', 'When selected, this is the value that appears in exported annotations');
        c0.innerHTML = 'id';
        var c1 = document.createElement('span');
        c1.setAttribute('style', 'width:60%');
        c1.setAttribute('title', 'URL or base64 (see https://www.base64-image.de/) encoded image data that corresponds to the image shown as an option to the annotator');
        c1.innerHTML = 'image url or b64';
        var c2 = document.createElement('span');
        c2.setAttribute('title', 'The default value of this attribute');
        c2.innerHTML = 'def.';
        this.p.appendChild(c0);
        this.p.appendChild(c1);
        this.p.appendChild(c2);
        document.getElementById('attribute_options').appendChild(this.p);

        var options = this._via_attributes[this._via_attribute_being_updated][attr_id].options;
        var option_id;
        for (option_id in options) {
          var option_desc = options[option_id];

          var option_default = this._via_attributes[this._via_attribute_being_updated][attr_id].default_options[option_id];
          this.attribute_property_add_option(attr_id, option_id, option_desc, option_default, attr_type);
        }
        this.attribute_property_add_new_entry_option(attr_id, attr_type);
        break;
      case this.VIA_ATTRIBUTE_TYPE.CHECKBOX: // handled by next case
      case this.VIA_ATTRIBUTE_TYPE.DROPDOWN: // handled by next case
      case this.VIA_ATTRIBUTE_TYPE.RADIO:
        //COMMENTED THE P BELOW' Could Affect Performance, be on the lookout
        // var p = document.createElement('div');
        this.p = document.createElement('div');
        this.p.setAttribute('class', 'property');
        this.p.setAttribute('style', 'text-align:center');
        var c0 = document.createElement('span');
        c0.setAttribute('style', 'width:25%');
        c0.setAttribute('title', 'When selected, this is the value that appears in exported annotations');
        c0.innerHTML = 'id';
        var c1 = document.createElement('span');
        c1.setAttribute('style', 'width:60%');
        c1.setAttribute('title', 'This is the text shown as an option to the annotator');
        c1.innerHTML = 'description';
        var c2 = document.createElement('span');
        c2.setAttribute('title', 'The default value of this attribute');
        c2.innerHTML = 'def.';
        this.p.appendChild(c0);
        this.p.appendChild(c1);
        this.p.appendChild(c2);
        document.getElementById('attribute_options').appendChild(this.p);

        var options = this._via_attributes[this._via_attribute_being_updated][attr_id].options;
        var option_id;
        for (option_id in options) {
          var option_desc = options[option_id];

          var option_default = this._via_attributes[this._via_attribute_being_updated][attr_id].default_options[option_id];
          this.attribute_property_add_option(attr_id, option_id, option_desc, option_default, attr_type);
        }
        this.attribute_property_add_new_entry_option(attr_id, attr_type);
        break;
      default:
        console.log('Attribute type ' + attr_type + ' is unavailable');
    }
  }

  attribute_property_add_input_property(title: any, name: any, value: any, id: any): void {
    let p = document.createElement('div');
    p.setAttribute('class', 'property');
    var c0 = document.createElement('span');
    c0.setAttribute('title', title);
    c0.innerHTML = name;
    var c1 = document.createElement('span');
    let c1b = document.createElement('input');
    c1b.setAttribute('onchange', 'attribute_property_on_update(this)');
    if (typeof (value) !== 'undefined') {
      c1b.setAttribute('value', value);
    }
    c1b.setAttribute('id', id);
    c1.appendChild(c1b);
    p.appendChild(c0);
    p.appendChild(c1);

    document.getElementById('attribute_properties').appendChild(p);
  }

  attribute_property_add_option(attr_id: any, option_id: any, option_desc: any, option_default: any, attribute_type: any): void {
    let p = document.createElement('div');
    p.setAttribute('class', 'property');
    let c0 = document.createElement('span');
    let c0b = document.createElement('input');
    c0b.setAttribute('type', 'text');
    c0b.setAttribute('value', option_id);
    c0b.setAttribute('title', option_id);
    c0b.setAttribute('onchange', 'attribute_property_on_option_update(this)');
    c0b.setAttribute('id', '_via_attribute_option_id_' + option_id);

    var c1 = document.createElement('span');
    let c1b = document.createElement('input');
    c1b.setAttribute('type', 'text');

    if (attribute_type === this.VIA_ATTRIBUTE_TYPE.IMAGE) {
      var option_desc_info = option_desc.length + ' bytes of base64 image data';
      c1b.setAttribute('value', option_desc_info);
      c1b.setAttribute('title', 'To update, copy and paste base64 image data in this text box');
    } else {
      c1b.setAttribute('value', option_desc);
      c1b.setAttribute('title', option_desc);
    }
    c1b.setAttribute('onchange', 'attribute_property_on_option_update(this)');
    c1b.setAttribute('id', '_via_attribute_option_description_' + option_id);

    var c2 = document.createElement('span');
    var c2b = document.createElement('input');
    c2b.setAttribute('type', attribute_type);
    if (typeof option_default !== 'undefined') {
      c2b.checked = option_default;
    }
    if (attribute_type === 'radio' || attribute_type === 'image' || attribute_type === 'dropdown') {
      // ensured that user can activate only one radio button
      c2b.setAttribute('type', 'radio');
      c2b.setAttribute('name', attr_id);
    }

    c2b.setAttribute('onchange', 'attribute_property_on_option_update(this)');
    c2b.setAttribute('id', '_via_attribute_option_default_' + option_id);

    c0.appendChild(c0b);
    c1.appendChild(c1b);
    c2.appendChild(c2b);
    p.appendChild(c0);
    p.appendChild(c1);
    p.appendChild(c2);

    document.getElementById('attribute_options').appendChild(p);
  }

  attribute_property_add_new_entry_option(attr_id: any, attribute_type: any): void {
    let p = document.createElement('div');
    p.setAttribute('class', 'new_option_id_entry');
    var c0b = document.createElement('input');
    c0b.setAttribute('type', 'text');
    c0b.setAttribute('onchange', 'attribute_property_on_option_add(this)');
    c0b.setAttribute('id', '_via_attribute_new_option_id');
    c0b.setAttribute('placeholder', 'Add new option id');
    p.appendChild(c0b);
    document.getElementById('attribute_options').appendChild(p);
  }

  attribute_property_on_update(p: any): void {
    var attr_id = this.get_current_attribute_id();
    this.attr_type = this._via_attribute_being_updated;
    var attr_value = p.value;

    switch (p.id) {
      case 'attribute_name':
        if (attr_value !== attr_id) {
          Object.defineProperty(this._via_attributes[this.attr_type],
            attr_value,
            Object.getOwnPropertyDescriptor(this._via_attributes[this.attr_type], attr_id));

          delete this._via_attributes[this.attr_type][attr_id];
          this.update_attributes_update_panel();
          this.annotation_editor_update_content();
        }
        break;
      case 'attribute_description':
        this._via_attributes[this.attr_type][attr_id].description = attr_value;
        this.update_attributes_update_panel();
        this.annotation_editor_update_content();
        break;
      case 'attribute_default_value':
        this._via_attributes[this.attr_type][attr_id].default_value = attr_value;
        this.update_attributes_update_panel();
        this.annotation_editor_update_content();
        break;
      case 'attribute_type':
        this._via_attributes[this.attr_type][attr_id].type = attr_value;
        if (attr_value === this.VIA_ATTRIBUTE_TYPE.TEXT) {
          this._via_attributes[this.attr_type][attr_id].default_value = '';
          delete this._via_attributes[this.attr_type][attr_id].options;
          delete this._via_attributes[this.attr_type][attr_id].default_options;
        } else {
          // preserve existing options
          if (!this._via_attributes[this.attr_type][attr_id].hasOwnProperty('options')) {
            this._via_attributes[this.attr_type][attr_id].options = {};
            this._via_attributes[this.attr_type][attr_id].default_options = {};
          }

          if (this._via_attributes[this.attr_type][attr_id].hasOwnProperty('default_value')) {
            delete this._via_attributes[this.attr_type][attr_id].default_value;
          }

          // collect existing attribute values and add them as options
          var attr_values = this.attribute_get_unique_values(this.attr_type, attr_id);
          var i;
          for (i = 0; i < attr_values.length; ++i) {
            var attr_val = attr_values[i];
            if (attr_val !== '') {
              this._via_attributes[this.attr_type][attr_id].options[attr_val] = attr_val;
            }
          }
        }
        this.show_attribute_properties();
        this.show_attribute_options();
        this.annotation_editor_update_content();
        break;
    }
  }

  attribute_get_unique_values(attr_type: any, attr_id: any): any[] {
    var values = [];
    switch (attr_type) {
      case 'file':
        // var img_id, attr_val;
        for (this.img_id in this._via_img_metadata) {
          if (this._via_img_metadata[this.img_id].file_attributes.hasOwnProperty(attr_id)) {
            this.attr_val = this._via_img_metadata[this.img_id].file_attributes[attr_id];
            if (!values.includes(this.attr_val)) {
              values.push(this.attr_val);
            }
          }
        }
        break;
      case 'region':
        // var img_id, attr_val, i;
        for (this.img_id in this._via_img_metadata) {
          for (var i = 0; i < this._via_img_metadata[this.img_id].regions.length; ++i) {
            if (this._via_img_metadata[this.img_id].regions[i].region_attributes.hasOwnProperty(attr_id)) {
              this.attr_val = this._via_img_metadata[this.img_id].regions[i].region_attributes[attr_id];
              if (!values.includes(this.attr_val)) {
                values.push(this.attr_val);
              }
            }
          }
        }
        break;
      default:
        break;
    }
    return values;
  }

  attribute_property_on_option_update(p: any): void {
    var attr_id = this.get_current_attribute_id();
    if (p.id.startsWith('_via_attribute_option_id_')) {
      var old_key = p.id.substr('_via_attribute_option_id_'.length);
      var new_key = p.value;
      if (old_key !== new_key) {
        var option_id_test = this.attribute_property_option_id_is_valid(attr_id, new_key);
        if (option_id_test.is_valid) {
          this.update_attribute_option_id_with_confirm(this._via_attribute_being_updated,
            attr_id,
            old_key,
            new_key);
        } else {
          p.value = old_key; // restore old value
          this.show_message(option_id_test.message, 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
          this.show_attribute_properties();
        }
        return;
      }
    }

    if (p.id.startsWith('_via_attribute_option_description_')) {
      var key = p.id.substr('_via_attribute_option_description_'.length);
      var old_value = this._via_attributes[this._via_attribute_being_updated][attr_id].options[key];
      var new_value = p.value;
      if (new_value !== old_value) {
        this._via_attributes[this._via_attribute_being_updated][attr_id].options[key] = new_value;
        this.show_attribute_properties();
        this.annotation_editor_update_content();
      }
    }

    if (p.id.startsWith('_via_attribute_option_default_')) {
      var new_default_option_id = p.id.substr('_via_attribute_option_default_'.length);
      var old_default_option_id_list = Object.keys(this._via_attributes[this._via_attribute_being_updated][attr_id].default_options);

      if (old_default_option_id_list.length === 0) {
        // default set for the first time
        this._via_attributes[this._via_attribute_being_updated][attr_id].default_options[new_default_option_id] = p.checked;
      } else {
        switch (this._via_attributes[this._via_attribute_being_updated][attr_id].type) {
          case 'image':    // fallback
          case 'dropdown': // fallback
          case 'radio':    // fallback
            // to ensure that only one radio button is selected at a time
            this._via_attributes[this._via_attribute_being_updated][attr_id].default_options = {};
            this._via_attributes[this._via_attribute_being_updated][attr_id].default_options[new_default_option_id] = p.checked;
            break;
          case 'checkbox':
            this._via_attributes[this._via_attribute_being_updated][attr_id].default_options[new_default_option_id] = p.checked;
            break;
        }
      }
      // default option updated
      attribute_property_on_option_default_update(this._via_attribute_being_updated,
        attr_id,
        new_default_option_id).then(function () {
          this.show_attribute_properties();
          this.annotation_editor_update_content();
        });
    }
  }

  attribute_property_on_option_default_update(attribute_being_updated: any, attr_id: any, new_default_option_id: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      // set all metadata to new_value if:
      // - metadata[attr_id] is missing
      // - metadata[attr_id] is set to option_old_value
      var img_id, attr_value, n, i;
      var attr_type = this._via_attributes[attribute_being_updated][attr_id].type;
      switch (attribute_being_updated) {
        case 'file':
          for (img_id in this._via_img_metadata) {
            if (!this._via_img_metadata[img_id].file_attributes.hasOwnProperty(attr_id)) {
              this._via_img_metadata[img_id].file_attributes[attr_id] = new_default_option_id;
            }
          }
          break;
        case 'region':
          for (img_id in this._via_img_metadata) {
            n = this._via_img_metadata[img_id].regions.length;
            for (i = 0; i < n; ++i) {
              if (!this._via_img_metadata[img_id].regions[i].region_attributes.hasOwnProperty(attr_id)) {
                this._via_img_metadata[img_id].regions[i].region_attributes[attr_id] = new_default_option_id;
              }
            }
          }
          break;
      }
      ok_callback();
    });
  }

  attribute_property_on_option_add(p: any): void {
    if (p.value === '' || p.value === null) {
      return;
    }

    if (p.id === '_via_attribute_new_option_id') {
      var attr_id = this.get_current_attribute_id();
      var option_id = p.value;
      var option_id_test = attribute_property_option_id_is_valid(attr_id, option_id);
      if (option_id_test.is_valid) {
        this._via_attributes[this._via_attribute_being_updated][attr_id].options[option_id] = '';
        this.show_attribute_options();
        this.annotation_editor_update_content();
      } else {
        this.show_message(option_id_test.message, 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        this.attribute_property_reset_new_entry_inputs();
      }
    }
  }

  attribute_property_reset_new_entry_inputs(): void {
    var container = document.getElementById('attribute_options');
    let p = container.lastChild;
    console.log(p.childNodes)
    if (p.childNodes[0]) {
      //Changed it from p.childNodes[0].value to whatever is below
      p.childNodes[0].nodeValue = '';
    }
    if (p.childNodes[1]) {
      p.childNodes[1].nodeValue = '';
    }
  }

  attribute_property_show_new_entry_inputs(attr_id: any, attribute_type: any): void {
    var n0 = document.createElement('div');
    n0.classList.add('property');
    var n1a = document.createElement('span');
    var n1b = document.createElement('input');
    n1b.setAttribute('onchange', 'attribute_property_on_option_add(this)');
    n1b.setAttribute('placeholder', 'Add new id');
    n1b.setAttribute('value', '');
    n1b.setAttribute('id', '_via_attribute_new_option_id');
    n1a.appendChild(n1b);

    var n2a = document.createElement('span');
    var n2b = document.createElement('input');
    n2b.setAttribute('onchange', 'attribute_property_on_option_add(this)');
    n2b.setAttribute('placeholder', 'Optional description');
    n2b.setAttribute('value', '');
    n2b.setAttribute('id', '_via_attribute_new_option_description');
    n2a.appendChild(n2b);

    var n3a = document.createElement('span');
    var n3b = document.createElement('input');
    n3b.setAttribute('type', attribute_type);
    if (attribute_type === 'radio') {
      n3b.setAttribute('name', attr_id);
    }
    n3b.setAttribute('onchange', 'attribute_property_on_option_add(this)');
    n3b.setAttribute('id', '_via_attribute_new_option_default');
    n3a.appendChild(n3b);

    n0.appendChild(n1a);
    n0.appendChild(n2a);
    n0.appendChild(n3a);

    var container = document.getElementById('attribute_options');
    container.appendChild(n0);
  }




  attribute_property_option_id_is_valid(attr_id: any, new_option_id: any) {
    var option_id;
    for (option_id in this._via_attributes[this._via_attribute_being_updated][attr_id].options) {
      if (option_id === new_option_id) {
        return { 'is_valid': false, 'message': 'Option id [' + attr_id + '] already exists' };
      }
    }

    if (new_option_id.includes('__')) { // reserved separator for attribute-id, row-id, option-id
      return { 'is_valid': false, 'message': 'Option id cannot contain two consecutive underscores' };
    }

    return { 'is_valid': true };
  }

  attribute_property_id_exists(name: any): boolean {
    var attr_name;
    for (attr_name in this._via_attributes[this._via_attribute_being_updated]) {
      if (attr_name === name) {
        return true;
      }
    }
    return false;
  }

  delete_existing_attribute_with_confirm(): void {
    var attr_id2 = document.getElementById('user_input_attribute_id') as HTMLInputElement;
    this.attr_id = attr_id2.value;
    if (this.attr_id === '') {
      this.show_message('Enter the name of attribute that you wish to delete', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }
    if (attribute_property_id_exists(this.attr_id)) {
      this.config = { 'title': 'Delete ' + this._via_attribute_being_updated + ' attribute [' + this.attr_id + ']' };
      this.input = {
        'attr_type': { 'type': 'text', 'name': 'Attribute Type', 'value': this._via_attribute_being_updated, 'disabled': true },
        'attr_id': { 'type': 'text', 'name': 'Attribute Id', 'value': this.attr_id, 'disabled': true }
      };
      this.invoke_with_user_inputs(delete_existing_attribute_confirmed, this.input, this.config, this.cancel_handler);
    } else {
      this.show_message('Attribute [' + this.attr_id + '] does not exist!', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }
  }



  delete_existing_attribute(attribute_type: any, attr_id: any): void {
    if (this._via_attributes[attribute_type].hasOwnProperty(this.attribute_id)) {
      var attr_id_list = Object.keys(this._via_attributes[attribute_type]);
      if (attr_id_list.length === 1) {
        this._via_current_attribute_id = '';
      } else {
        var current_index = attr_id_list.indexOf(this.attribute_id);
        var next_index = current_index + 1;
        if (next_index === attr_id_list.length) {
          next_index = current_index - 1;
        }
        this._via_current_attribute_id = attr_id_list[next_index];
      }
      delete this._via_attributes[attribute_type][this.attribute_id];
      this.update_attributes_update_panel();
      this.annotation_editor_update_content();
    }
  }
  delete_existing_attribute_confirmed(input: any): void {
    // var input = {
    //   'attr_type': { type: 'text', name: 'Attribute Type', value : this._via_attribute_being_updated, disabled: true },
    //   'attr_id': { type: 'text', name: 'Attribute Id', value: attr_id, disabled: true }
    var attr_type = input.attr_type.value;
    var attr_id = input.attr_id.value;
    delete_existing_attribute(attr_type, attr_id);
    document.getElementById('user_input_attribute_id').nodeValue = '';
    this.show_message('Deleted ' + attr_type + ' attribute [' + attr_id + ']', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
    this.user_input_default_cancel_handler();
  }

  add_new_attribute_from_user_input(): void {
    var attr_id2 = document.getElementById('user_input_attribute_id') as HTMLInputElement;
    this.attr_id = attr_id2.value;
    if (this.attr_id === '') {
      this.show_message('Enter the name of attribute that you wish to delete', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    }

    if (attribute_property_id_exists(this.attr_id)) {
      this.show_message('The ' + this._via_attribute_being_updated + ' attribute [' + this.attr_id + '] already exists.', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      this._via_current_attribute_id = this.attr_id;
      add_new_attribute(this.attr_id);
      this.update_attributes_update_panel();
      this.annotation_editor_update_content();
      this.show_message('Added ' + this._via_attribute_being_updated + ' attribute [' + this.attr_id + '].', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  add_new_attribute(attribute_id: any): void {
    this._via_attributes[this._via_attribute_being_updated][attribute_id] = {};
    this._via_attributes[this._via_attribute_being_updated][attribute_id].type = 'text';
    this._via_attributes[this._via_attribute_being_updated][attribute_id].description = '';
    this._via_attributes[this._via_attribute_being_updated][attribute_id].default_value = '';
  }

  update_current_attribute_id(p: any): void {
    this._via_current_attribute_id = p.options[p.selectedIndex].value;
    this.update_attribute_properties_panel();
  }

  get_current_attribute_id(): any {
    return document.getElementById('attributes_name_list').nodeValue;
  }

  update_attribute_option_id_with_confirm(attr_type: any, attr_id: any, option_id: any, new_option_id: any): void {
    this.is_delete = false;
    var config;
    if (new_option_id === '' || typeof (new_option_id) === 'undefined') {
      // an empty new_option_id indicates deletion of option_id
      config = { 'title': 'Delete an option for ' + attr_type + ' attribute' };
      this.is_delete = true;
    } else {
      config = { 'title': 'Rename an option for ' + attr_type + ' attribute' };
    }

    this.input = {
      'attr_type': { 'type': 'text', 'name': 'Attribute Type', 'value': attr_type, 'disabled': true },
      'attr_id': { 'type': 'text', 'name': 'Attribute Id', 'value': attr_id, 'disabled': true }
    };

    if (this.is_delete) {
      this.input['option_id'] = { 'type': 'text', 'name': 'Attribute Option', 'value': option_id, 'disabled': true };
    } else {
      this.input['option_id'] = { 'type': 'text', 'name': 'Attribute Option (old)', 'value': option_id, 'disabled': true },
      this.input['new_option_id'] = { 'type': 'text', 'name': 'Attribute Option (new)', 'value': new_option_id, 'disabled': true };
    }

    this.invoke_with_user_inputs(update_attribute_option_id_confirmed, this.input, config, update_attribute_option_id_cancel);
  }

  update_attribute_option_id_cancel(input: any): void {
    this.update_attribute_properties_panel();
  }

  update_attribute_option_id_confirmed(input: any): void {
    var attr_type = input.attr_type.value;
    var attr_id = input.attr_id.value;
    var option_id = input.option_id.value;
    var is_delete;
    var new_option_id;
    if (typeof (input.new_option_id) === 'undefined' || input.new_option_id === '') {
      is_delete = true;
      new_option_id = '';
    } else {
      is_delete = false;
      new_option_id = input.new_option_id.value;
    }

    this.update_attribute_option(is_delete, attr_type, attr_id, option_id, new_option_id);

    if (is_delete) {
      this.show_message('Deleted option [' + option_id + '] for ' + attr_type + ' attribute [' + attr_id + '].', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      this.show_message('Renamed option [' + option_id + '] to [' + new_option_id + '] for ' + attr_type + ' attribute [' + attr_id + '].', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
    this.update_attribute_properties_panel();
    this.annotation_editor_update_content();
    this.user_input_default_cancel_handler();
  }

  update_attribute_option(is_delete: any, attr_type: any, attr_id: any, option_id: any, new_option_id: any): void {
    switch (attr_type) {
      case 'region':
        this.update_region_attribute_option_in_all_metadata(is_delete, attr_id, option_id, new_option_id);
        if (!is_delete) {
          Object.defineProperty(this._via_attributes[attr_type][attr_id].options,
            new_option_id,
            Object.getOwnPropertyDescriptor(this._via_attributes[this._via_attribute_being_updated][attr_id].options, option_id));
        }
        delete this._via_attributes['region'][attr_id].options[option_id];

        break;
      case 'file':
        this.update_file_attribute_option_in_all_metadata(is_delete, attr_id, option_id, new_option_id);
        if (!is_delete) {
          Object.defineProperty(this._via_attributes[attr_type][attr_id].options,
            new_option_id,
            Object.getOwnPropertyDescriptor(this._via_attributes[this._via_attribute_being_updated][attr_id].options, option_id));
        }

        delete this._via_attributes['file'][attr_id].options[option_id];
        break;
    }
  }

  update_file_attribute_option_in_all_metadata(is_delete: any, attr_id: any, option_id: any, new_option_id: any): void {
    var image_id;
    for (image_id in this._via_img_metadata) {
      if (this._via_img_metadata[image_id].file_attributes.hasOwnProperty(attr_id)) {
        if (this._via_img_metadata[image_id].file_attributes[attr_id].hasOwnProperty(option_id)) {
          Object.defineProperty(this._via_img_metadata[image_id].file_attributes[attr_id],
            new_option_id,
            Object.getOwnPropertyDescriptor(this._via_img_metadata[image_id].file_attributes[attr_id], option_id));
          delete this._via_img_metadata[image_id].file_attributes[attr_id][option_id];
        }
      }
    }
  }

  update_region_attribute_option_in_all_metadata(is_delete: any, attr_id: any, option_id: any, new_option_id: any): void {
    var image_id;
    for (image_id in this._via_img_metadata) {
      this.update_region_attribute_option_from_metadata(image_id, is_delete, attr_id, option_id, new_option_id);
    }
  }

  update_region_attribute_option_from_metadata(image_id, is_delete, attr_id, option_id, new_option_id) {
    var i;
    for (i = 0; i < this._via_img_metadata[image_id].regions.length; ++i) {
      if (this._via_img_metadata[image_id].regions[i].region_attributes.hasOwnProperty(attr_id)) {
        if (this._via_img_metadata[image_id].regions[i].region_attributes[attr_id].hasOwnProperty(option_id)) {
          Object.defineProperty(this._via_img_metadata[image_id].regions[i].region_attributes[attr_id],
            new_option_id,
            Object.getOwnPropertyDescriptor(this._via_img_metadata[image_id].regions[i].region_attributes[attr_id], option_id));
          delete this._via_img_metadata[image_id].regions[i].region_attributes[attr_id][option_id];
        }
      }
    }
  }

  delete_file_attribute_option_from_all_metadata(attr_id: any, option_id: any): void {
    var image_id;
    for (image_id in this._via_img_metadata) {
      if (this._via_img_metadata.hasOwnProperty(image_id)) {
        this.delete_file_attribute_option_from_metadata(image_id, attr_id, option_id);
      }
    }
  }

  delete_file_attribute_option_from_metadata(image_id: any, attr_id: any, option_id: any): void {
    var i;
    if (this._via_img_metadata[image_id].file_attributes.hasOwnProperty(attr_id)) {
      if (this._via_img_metadata[image_id].file_attributes[attr_id].hasOwnProperty(option_id)) {
        delete this._via_img_metadata[image_id].file_attributes[attr_id][option_id];
      }
    }
  }

  delete_file_attribute_from_all_metadata(image_id: any, attr_id: any): void {
    var image_id;
    for (image_id in this._via_img_metadata) {
      if (this._via_img_metadata.hasOwnProperty(image_id)) {
        if (this._via_img_metadata[image_id].file_attributes.hasOwnProperty(attr_id)) {
          delete this._via_img_metadata[image_id].file_attributes[attr_id];
        }
      }
    }
  }

  //
  // invoke a method after receiving inputs from user
  //
  invoke_with_user_inputs(ok_handler: any, input: any, config: any, cancel_handler: any): void {
    this.setup_user_input_panel(ok_handler, input, config, cancel_handler);
    this.show_user_input_panel();
  }

  setup_user_input_panel(ok_handler: any, input: any, config: any, cancel_handler: any): void {
    // create html page with OK and CANCEL button
    // when OK is clicked
    //  - setup input with all the user entered values
    //  - invoke handler with input
    // when CANCEL is clicked
    //  - invoke user_input_cancel()
    this._via_user_input_ok_handler = ok_handler;
    this._via_user_input_cancel_handler = cancel_handler;
    this._via_user_input_data = input;

    let p = document.getElementById('user_input_panel');
    var c = document.createElement('div');
    c.setAttribute('class', 'content');
    var html = [];
    html.push('<p class="title">' + config.title + '</p>');

    html.push('<div class="user_inputs">');
    var key;
    for (key in this._via_user_input_data) {
      html.push('<div class="row">');
      html.push('<span class="cell">' + this._via_user_input_data[key].name + '</span>');
      var disabled_html = '';
      if (this._via_user_input_data[key].disabled) {
        disabled_html = 'disabled="disabled"';
      }
      var value_html = '';
      if (this._via_user_input_data[key].value) {
        value_html = 'value="' + this._via_user_input_data[key].value + '"';
      }

      switch (this._via_user_input_data[key].type) {
        case 'checkbox':
          if (this._via_user_input_data[key].checked) {
            value_html = 'checked="checked"';
          } else {
            value_html = '';
          }
          html.push('<span class="cell">' +
            '<input class="_via_user_input_variable" ' +
            value_html + ' ' +
            disabled_html + ' ' +
            'type="checkbox" id="' + key + '"></span>');
          break;
        case 'text':
          this.size = '50';
          if (this._via_user_input_data[key].size) {
            this.size = this._via_user_input_data[key].size;
          }
          var placeholder = '';
          if (this._via_user_input_data[key].placeholder) {
            placeholder = this._via_user_input_data[key].placeholder;
          }
          html.push('<span class="cell">' +
            '<input class="_via_user_input_variable" ' +
            value_html + ' ' +
            disabled_html + ' ' +
            'size="' + this.size + '" ' +
            'placeholder="' + placeholder + '" ' +
            'type="text" id="' + key + '"></span>');

          break;
        case 'textarea':
          var rows = '5';
          var cols = '50'
          if (this._via_user_input_data[key].rows) {
            rows = this._via_user_input_data[key].rows;
          }
          if (this._via_user_input_data[key].cols) {
            cols = this._via_user_input_data[key].cols;
          }
          var placeholder = '';
          if (this._via_user_input_data[key].placeholder) {
            placeholder = this._via_user_input_data[key].placeholder;
          }
          html.push('<span class="cell">' +
            '<textarea class="_via_user_input_variable" ' +
            disabled_html + ' ' +
            'rows="' + rows + '" ' +
            'cols="' + cols + '" ' +
            'placeholder="' + placeholder + '" ' +
            'id="' + key + '">' + value_html + '</textarea></span>');

          break;

      }
      html.push('</div>'); // end of row
    }
    html.push('</div>'); // end of user_input div
    html.push('<div class="user_confirm">' +
      '<span class="ok">' +
      '<button id="user_input_ok_button" onclick="user_input_parse_and_invoke_handler()">&nbsp;OK&nbsp;</button></span>' +
      '<span class="cancel">' +
      '<button id="user_input_cancel_button" onclick="user_input_cancel_handler()">CANCEL</button></span></div>');
    c.innerHTML = html.join('');
    p.innerHTML = '';
    p.appendChild(c);

  }

  user_input_default_cancel_handler(): void {
    hide_user_input_panel();
    let _via_user_input_data = {}
    this._via_user_input_ok_handler = null;
    this._via_user_input_cancel_handler = null;
  }

  user_input_cancel_handler(): void {
    if (this._via_user_input_cancel_handler) {
      this._via_user_input_cancel_handler();
    }
    this.user_input_default_cancel_handler();
  }

  user_input_parse_and_invoke_handler(): void {
    let elist = document.getElementsByClassName('_via_user_input_variable');
    var i;
    for (i = 0; i < elist.length; ++i) {
      var eid = elist[i].id;
      if (this._via_user_input_data.hasOwnProperty(eid)) {
        switch (this._via_user_input_data[eid].type) {
          case 'checkbox':
            ///NOTE YOU ARE SETTING THE CHECKBOX TO ALWAYS TRUE BY UNCOMMENT BELOW */
            // this._via_user_input_data[eid].value = elist[i].checked;
            break;
          default:
            this._via_user_input_data[eid].value = elist[i].nodeValue;
            break;
        }
      }
    }
    if (typeof (this._via_user_input_data.confirm) !== 'undefined') {
      if (this._via_user_input_data.confirm.value) {
        this._via_user_input_ok_handler(this._via_user_input_data);
      } else {
        if (this._via_user_input_cancel_handler) {
          this._via_user_input_cancel_handler();
        }
      }
    } else {
      this._via_user_input_ok_handler(this._via_user_input_data);
    }
    this.user_input_default_cancel_handler();
  }

  show_user_input_panel(): void {
    document.getElementById('user_input_panel').style.display = 'block';
  }

  hide_user_input_panel(): void {
    document.getElementById('user_input_panel').style.display = 'none';
  }

  //
  // annotations editor panel
  //
  annotation_editor_show(): void {
    // remove existing annotation editor (if any)
    this.annotation_editor_remove();

    // create new container of annotation editor
    var ae = document.createElement('div');
    ae.setAttribute('id', 'annotation_editor');

    if (this._via_annotation_editor_mode === this.VIA_ANNOTATION_EDITOR_MODE.SINGLE_REGION) {
      if (this._via_settings_ui_image_on_image_annotation_editor_placement === this.VIA_ANNOTATION_EDITOR_PLACEMENT.DISABLE) {
        return;
      }

      // only display on-image annotation editor if
      // - region attribute are defined
      // - region is selected
      if (this._via_is_region_selected &&
        Object.keys(this._via_attributes['region']).length &&
        this._via_attributes['region'].constructor === Object) {
        ae.classList.add('force_small_font');
        ae.classList.add('display_area_content'); // to enable automatic hiding of this content
        // add annotation editor to image_panel
        if (this._via_settings_ui_image_on_image_annotation_editor_placement === this.VIA_ANNOTATION_EDITOR_PLACEMENT.NEAR_REGION) {
          let html_position = this.annotation_editor_get_placement(this._via_user_sel_region_id);
          // ae.style.top = html_position.top;
          // ae.style.left = html_position.left;
        }
        this._via_display_area.appendChild(ae);
        this.annotation_editor_update_content();
        this.update_vertical_space();
      }
    } else {
      // show annotation editor in a separate panel at the bottom
      this._via_annotation_editor_panel.appendChild(ae);
      this.annotation_editor_update_content();
      update_vertical_space();

      if (_via_is_region_selected) {
        // highlight entry for region_id in annotation editor panel
        this.annotation_editor_scroll_to_row(this._via_user_sel_region_id);
        this.annotation_editor_highlight_row(this._via_user_sel_region_id);
      }
    }
  }

  annotation_editor_hide(): void {
    if (this._via_annotation_editor_mode === this.VIA_ANNOTATION_EDITOR_MODE.SINGLE_REGION) {
      // remove existing annotation editor (if any)
      this.annotation_editor_remove();
      // } else {
      //   annotation_editor_clear_row_highlight();
      // }
    }
  };

  annotation_editor_toggle_on_image_editor(): void {
    if (this._via_settings_ui_image_on_image_annotation_editor_placement === this.VIA_ANNOTATION_EDITOR_PLACEMENT.DISABLE) {
      this._via_annotation_editor_mode = this.VIA_ANNOTATION_EDITOR_MODE.SINGLE_REGION;
      this._via_settings_ui_image_on_image_annotation_editor_placement = this.VIA_ANNOTATION_EDITOR_PLACEMENT.NEAR_REGION;
      this.annotation_editor_show();
      this.show_message('Enabled on image annotation editor', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } else {
      this._via_settings_ui_image_on_image_annotation_editor_placement = this.VIA_ANNOTATION_EDITOR_PLACEMENT.DISABLE;
      this._via_annotation_editor_mode === this.VIA_ANNOTATION_EDITOR_MODE.ALL_REGIONS;
      this.annotation_editor_hide();
      this.show_message('Disabled on image annotation editor', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  annotation_editor_update_content(): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var ae = document.getElementById('annotation_editor');
      if (ae) {
        ae.innerHTML = '';
        this.annotation_editor_update_header_html();
        this.annotation_editor_update_metadata_html();
      }
      ok_callback();
    });
  }
  annotation_editor_get_placement(region_id: any): {} {
    var r = this._via_canvas_regions[region_id]['shape_attributes'];
    var shape = r['name'];
    switch (shape) {
      case 'rect':
        this.html_position.top = r['y'] + r['height'];
        this.html_position.left = r['x'] + r['width'];
        break;
      case 'circle':
        this.html_position.top = r['cy'] + r['r'];
        this.html_position.left = r['cx'];
        break;
      case 'ellipse':
        this.html_position.top = r['cy'] + r['ry'] * Math.cos(r['theta']);
        this.html_position.left = r['cx'] - r['ry'] * Math.sin(r['theta']);
        break;
      case 'polygon':
      case 'polyline':
        var most_left =
          Object.keys(r['all_points_x']).reduce(function (a, b) {
            return r['all_points_x'][a] > r['all_points_x'][b] ? a : b
          });
          this.html_position.top = Math.max(r['all_points_y'][most_left]);
          this.html_position.left = Math.max(r['all_points_x'][most_left]);
        break;
      case 'point':
        this.html_position.top = r['cy'];
        this.html_position.left = r['cx'];
        break;
    }
    this.html_position.top = this.html_position.top + _via_img_panel.offsetTop + this.VIA_REGION_EDGE_TOL + 'px';
    this.html_position.left = this.html_position.left + _via_img_panel.offsetLeft + this.VIA_REGION_EDGE_TOL + 'px';
    return this.html_position;
  }

  annotation_editor_remove(): void {
    let p = document.getElementById('annotation_editor');
    if (p) {
      p.remove();
    }
  }

  is_annotation_editor_visible(): boolean {
    return document.getElementById('annotation_editor_panel').classList.contains('display_block');
  }

  annotation_editor_toggle_all_regions_editor(): void {
    let p = document.getElementById('annotation_editor_panel');
    if (p.classList.contains('display_block')) {
      p.classList.remove('display_block');
      this._via_annotation_editor_mode = this.VIA_ANNOTATION_EDITOR_MODE.SINGLE_REGION;
    } else {
      this._via_annotation_editor_mode = this.VIA_ANNOTATION_EDITOR_MODE.ALL_REGIONS;
      p.classList.add('display_block');
      p.style.height = this._via_settings_ui_annotation_editor_height + '%';
      p.style.fontSize = this._via_settings_ui_annotation_editor_fontsize + 'rem';
      this.annotation_editor_show();
    }
  }

  annotation_editor_set_active_button(): void {
    var attribute_type;
    for (attribute_type in this._via_attributes) {
      var bid = 'button_edit_' + attribute_type + '_metadata';
      document.getElementById(bid).classList.remove('active');
    }
    var bid = 'button_edit_' + this._via_metadata_being_updated + '_metadata';
    document.getElementById(bid).classList.add('active');
  }

  edit_region_metadata_in_annotation_editor(): void {
    this._via_metadata_being_updated = 'region';
    this.annotation_editor_set_active_button();
    this.annotation_editor_update_content();
  }
  edit_file_metadata_in_annotation_editor(): void {
    this._via_metadata_being_updated = 'file';
    this.annotation_editor_set_active_button();
    this.annotation_editor_update_content();
  }

  // declare function annotation_editor_update_header_html(): void; {
  //   var head = document.createElement('div');
  //   head.setAttribute('class', 'row');
  //   head.setAttribute('id', 'annotation_editor_header');

  //   if (this._via_metadata_being_updated === 'region') {
  //     var rid_col = document.createElement('span');
  //     rid_col.setAttribute('class', 'col');
  //     rid_col.innerHTML = '';
  //     head.appendChild(rid_col);
  //   }

  //   if (this._via_metadata_being_updated === 'file') {
  //     var rid_col = document.createElement('span');
  //     rid_col.setAttribute('class', 'col header');
  //     if (this._via_display_area_content_name === VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
  //       rid_col.innerHTML = 'group';
  //     } else {
  //       rid_col.innerHTML = 'filename';
  //     }
  //     head.appendChild(rid_col);
  //   }

  //   var attr_id;
  //   for (attr_id in this._via_attributes[this._via_metadata_being_updated]) {
  //     var col = document.createElement('span');
  //     col.setAttribute('class', 'col header');
  //     col.innerHTML = attr_id;
  //     head.appendChild(col);
  //   }

  //   let ae = document.getElementById('annotation_editor');
  //   if (ae.childNodes.length === 0) {
  //     ae.appendChild(head);
  //   } else {
  //     if (ae.firstChild.id === 'annotation_editor_header') {
  //       ae.replaceChild(head, ae.firstChild);
  //     } else {
  //       // header node is absent
  //       ae.insertBefore(head, ae.firstChild);
  //     }
  //   }
  // }

  annotation_editor_update_metadata_html(): void {
    if (!this._via_img_count) {
      return;
    }

    let ae = document.getElementById('annotation_editor');
    switch (this._via_metadata_being_updated) {
      case 'region':
        var rindex;
        if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
          ae.appendChild(this.annotation_editor_get_metadata_row_html(0));
        } else {
          if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE) {
            if (this._via_annotation_editor_mode === this.VIA_ANNOTATION_EDITOR_MODE.SINGLE_REGION) {
              ae.appendChild(this.annotation_editor_get_metadata_row_html(this._via_user_sel_region_id));
            } else {
              for (rindex = 0; rindex < this._via_img_metadata[this._via_image_id].regions.length; ++rindex) {
                ae.appendChild(this.annotation_editor_get_metadata_row_html(rindex));
              }
            }
          }
        }
        break;

      case 'file':
        ae.appendChild(this.annotation_editor_get_metadata_row_html(0));
        break;
    }
  }

  annotation_editor_update_row(row_id: any): void {
    let ae = document.getElementById('annotation_editor');

    var new_row = this.annotation_editor_get_metadata_row_html(row_id);
    var old_row = document.getElementById(new_row.getAttribute('id'));
    ae.replaceChild(new_row, old_row);
  }

  annotation_editor_add_row(row_id: any): void {
    if (this.is_annotation_editor_visible()) {
      let ae = document.getElementById('annotation_editor');
      var new_row = this.annotation_editor_get_metadata_row_html(row_id);
      var penultimate_row_id = parseInt(row_id) - 1;
      if (penultimate_row_id >= 0) {
        var penultimate_row_html_id = 'ae_' + this._via_metadata_being_updated + '_' + penultimate_row_id;
        var penultimate_row = document.getElementById(penultimate_row_html_id);
        ae.insertBefore(new_row, penultimate_row.nextSibling);
      } else {
        ae.appendChild(new_row);
      }
    }
  }

  annotation_editor_get_metadata_row_html(row_id: any): HTMLDivElement {
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.setAttribute('id', 'ae_' + this._via_metadata_being_updated + '_' + row_id);

    if (this._via_metadata_being_updated === 'region') {
      let rid = document.createElement('span');

      switch (this._via_display_area_content_name) {
        case this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID:
          rid.setAttribute('class', 'col');
          rid.innerHTML = 'Grouped regions in ' + this._via_image_grid_selected_img_index_list.length + ' files';
          break;
        case this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE:
          rid.setAttribute('class', 'col id');
          rid.innerHTML = (row_id + 1);
          break;
      }
      row.appendChild(rid);
    }

    if (this._via_metadata_being_updated === 'file') {
      let rid = document.createElement('span');
      rid.setAttribute('class', 'col');
      switch (this._via_display_area_content_name) {
        case this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID:
          rid.innerHTML = 'Group of ' + this._via_image_grid_selected_img_index_list.length + ' files';
          break;
        case this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE:
          rid.innerHTML = this._via_image_filename_list[this._via_image_index];
          break;
      }

      row.appendChild(rid);
    }

    var attr_id;
    for (attr_id in this._via_attributes[this._via_metadata_being_updated]) {
      var col = document.createElement('span');
      col.setAttribute('class', 'col');

      var attr_type = this._via_attributes[this._via_metadata_being_updated][attr_id].type;
      var attr_desc = this._via_attributes[this._via_metadata_being_updated][attr_id].desc;
      if (typeof (attr_desc) === 'undefined') {
        attr_desc = '';
      }
      var attr_html_id = attr_id + '__' + row_id;

      this.attr_value = '';
      var attr_placeholder = '';
      if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE) {
        switch (this._via_metadata_being_updated) {
          case 'region':
            if (this._via_img_metadata[this._via_image_id].regions[row_id].region_attributes.hasOwnProperty(attr_id)) {
              this.attr_value = this._via_img_metadata[this._via_image_id].regions[row_id].region_attributes[attr_id];
            } else {
              attr_placeholder = 'not defined yet!';
            }
          case 'file':
            if (this._via_img_metadata[this._via_image_id].file_attributes.hasOwnProperty(attr_id)) {
              this.attr_value = this._via_img_metadata[this._via_image_id].file_attributes[attr_id];
            } else {
              attr_placeholder = 'not defined yet!';
            }
        }
      }

      if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
        var attr_metadata_stat;
        switch (this._via_metadata_being_updated) {
          case 'region':
            attr_metadata_stat = this._via_get_region_metadata_stat(this._via_image_grid_selected_img_index_list, attr_id);
            break;
          case 'file':
            attr_metadata_stat = this._via_get_file_metadata_stat(this._via_image_grid_selected_img_index_list, attr_id);
            break;
        }

        switch (attr_type) {
          case 'text':
            if (attr_metadata_stat.hasOwnProperty(attr_id)) {
              var attr_value_set = Object.keys(attr_metadata_stat[attr_id]);
              if (attr_value_set.includes('undefined')) {
                this.attr_value = '';
                attr_placeholder = 'includes ' + attr_metadata_stat[attr_id]['undefined'] + ' undefined values';
              } else {
                switch (attr_value_set.length) {
                  case 0:
                    this.attr_value = '';
                    attr_placeholder = 'not applicable';
                    break;
                  case 1:
                    this.attr_value = attr_value_set[0];
                    attr_placeholder = '';
                    break;
                  default:
                    this.attr_value = '';
                    attr_placeholder = attr_value_set.length + ' different values: ' + JSON.stringify(attr_value_set).replace(/"/g, '\'');
                    console.log(JSON.stringify(attr_value_set))
                }
              }
            } else {
              this.attr_value = '';
              attr_placeholder = 'not defined yet!';
            }
            break;

          case 'radio':    // fallback
          case 'dropdown': // fallback
          case 'image':    // fallback
            if (attr_metadata_stat.hasOwnProperty(attr_id)) {
              var attr_value_set = Object.keys(attr_metadata_stat[attr_id]);
              if (attr_value_set.length === 1) {
                this.attr_value = attr_value_set[0];
              } else {
                this.attr_value = '';
              }
            } else {
              this.attr_value = '';
            }
            break;

          case 'checkbox':
            //Changed attr_value from {} to '' **** Note the change
            this.attr_value = {};
            if (attr_metadata_stat.hasOwnProperty(attr_id)) {
              var attr_value_set = Object.keys(attr_metadata_stat[attr_id]);
              let same_count = true;
              let i, n;
              var attr_value_curr, attr_value_next;
              n = attr_value_set.length;
              for (i = 0; i < n - 1; ++i) {
                attr_value_curr = attr_value_set[i];
                attr_value_next = attr_value_set[i + 1];

                if (attr_metadata_stat[attr_id][attr_value_curr] !== attr_metadata_stat[attr_id][attr_value_next]) {
                  same_count = false;
                  break;
                }
              }
              if (same_count) {
                var attr_value_i;
                for (attr_value_i in attr_metadata_stat[attr_id]) {
                  this.attr_value[attr_value_i] = true;
                }
              }
            }
            break;
        }
      }

      switch (attr_type) {
        case 'text':
          col.innerHTML = '<textarea ' +
            'onchange="annotation_editor_on_metadata_update(this)" ' +
            'onfocus="annotation_editor_on_metadata_focus(this)" ' +
            'title="' + attr_desc + '" ' +
            'placeholder="' + attr_placeholder + '" ' +
            'id="' + attr_html_id + '">' + this.attr_value + '</textarea>';
          break;
        case 'checkbox':
          var options = this._via_attributes[this._via_metadata_being_updated][attr_id].options;
          var option_id;
          for (option_id in options) {
            var option_html_id = attr_html_id + '__' + option_id;
            let option = document.createElement('input');
            option.setAttribute('type', 'checkbox');
            option.setAttribute('value', option_id);
            option.setAttribute('id', option_html_id);
            option.setAttribute('onfocus', 'annotation_editor_on_metadata_focus(this)');
            option.setAttribute('onchange', 'annotation_editor_on_metadata_update(this)');

            var option_desc = this._via_attributes[this._via_metadata_being_updated][attr_id].options[option_id];
            if (option_desc === '' || typeof (option_desc) === 'undefined') {
              // option description is optional, use option_id when description is not present
              option_desc = option_id;
            }

            // set the value of options based on the user annotations
            if (typeof this.attr_value !== 'undefined') {
              if (this.attr_value.hasOwnProperty(option_id)) {
                option.checked = this.attr_value[option_id];
              }
            }

            var label = document.createElement('label');
            label.setAttribute('for', option_html_id);
            label.innerHTML = option_desc;

            var container = document.createElement('span');
            container.appendChild(option);
            container.appendChild(label);
            col.appendChild(container);
          }
          break;
        case 'radio':
          var option_id;
          for (option_id in this._via_attributes[this._via_metadata_being_updated][attr_id].options) {
            var option_html_id = attr_html_id + '__' + option_id;
            let option = document.createElement('input');
            option.setAttribute('type', 'radio');
            option.setAttribute('name', attr_html_id);
            option.setAttribute('value', option_id);
            option.setAttribute('id', option_html_id);
            option.setAttribute('onfocus', 'annotation_editor_on_metadata_focus(this)');
            option.setAttribute('onchange', 'annotation_editor_on_metadata_update(this)');

            var option_desc = this._via_attributes[this._via_metadata_being_updated][attr_id].options[option_id];
            if (option_desc === '' || typeof (option_desc) === 'undefined') {
              // option description is optional, use option_id when description is not present
              option_desc = option_id;
            }

            if (this.attr_value === option_id) {
              option.checked = true;
            }

            var label = document.createElement('label');
            label.setAttribute('for', option_html_id);
            label.innerHTML = option_desc;

            var container = document.createElement('span');
            container.appendChild(option);
            container.appendChild(label);
            col.appendChild(container);
          }
          break;
        case 'image':
          var option_id;
          var option_count = 0;
          for (option_id in this._via_attributes[this._via_metadata_being_updated][attr_id].options) {
            option_count = option_count + 1;
          }
          var img_options = document.createElement('div');
          img_options.setAttribute('class', 'img_options');
          col.appendChild(img_options);

          var option_index = 0;
          for (option_id in this._via_attributes[this._via_metadata_being_updated][attr_id].options) {
            var option_html_id = attr_html_id + '__' + option_id;
            let option = document.createElement('input');
            option.setAttribute('type', 'radio');
            option.setAttribute('name', attr_html_id);
            option.setAttribute('value', option_id);
            option.setAttribute('id', option_html_id);
            option.setAttribute('onfocus', 'annotation_editor_on_metadata_focus(this)');
            option.setAttribute('onchange', 'annotation_editor_on_metadata_update(this)');

            var option_desc = this._via_attributes[this._via_metadata_being_updated][attr_id].options[option_id];
            if (option_desc === '' || typeof (option_desc) === 'undefined') {
              // option description is optional, use option_id when description is not present
              option_desc = option_id;
            }

            if (this.attr_value === option_id) {
              option.checked = true;
            }

            var label = document.createElement('label');
            label.setAttribute('for', option_html_id);
            label.innerHTML = '<img src="' + option_desc + '"><p>' + option_id + '</p>';

            var container = document.createElement('span');
            container.appendChild(option);
            container.appendChild(label);
            img_options.appendChild(container);
          }
          break;

        case 'dropdown':
          var sel = document.createElement('select');
          sel.setAttribute('id', attr_html_id);
          sel.setAttribute('onfocus', 'annotation_editor_on_metadata_focus(this)');
          sel.setAttribute('onchange', 'annotation_editor_on_metadata_update(this)');
          var option_id;
          var option_selected = false;
          for (option_id in this._via_attributes[this._via_metadata_being_updated][attr_id].options) {
            var option_html_id = attr_html_id + '__' + option_id;
            var option = document.createElement('option');
            option.setAttribute('value', option_id);

            var option_desc = this._via_attributes[this._via_metadata_being_updated][attr_id].options[option_id];
            if (option_desc === '' || typeof (option_desc) === 'undefined') {
              // option description is optional, use option_id when description is not present
              option_desc = option_id;
            }

            if (option_id === this.attr_value) {
              option.setAttribute('selected', 'selected');
              option_selected = true;
            }
            option.innerHTML = option_desc;
            sel.appendChild(option);
          }

          if (!option_selected) {
            sel.selectedIndex = -1;
          }
          col.appendChild(sel);
          break;
      }

      row.appendChild(col);
    }
    return row;
  }

  annotation_editor_scroll_to_row(row_id: any): void {
    if (this.is_annotation_editor_visible()) {
      var row_html_id = 'ae_' + this._via_metadata_being_updated + '_' + row_id;
      let row = document.getElementById(row_html_id);
      row.scrollIntoView(false);
    }
  }

  annotation_editor_highlight_row(row_id: any): void {
    if (this.is_annotation_editor_visible()) {
      var row_html_id = 'ae_' + this._via_metadata_being_updated + '_' + row_id;
      let row = document.getElementById(row_html_id);
      row.classList.add('highlight');
    }
  }

  // declare function annotation_editor_clear_row_highlight(): void; {
  //   if (this.is_annotation_editor_visible()) {
  //     let ae = document.getElementById('annotation_editor');
  //     var i;
  //     for (i = 0; i < ae.childNodes.length; ++i) {
  //       [... ae.childNodes[i])].classList.remove('highlight');
  //     }
  //   }
  // }

  annotation_editor_extract_html_id_components(html_id: any): {} {
    // html_id : attribute_name__row-id__option_id
    var parts = html_id.split('__');
    var parsed_id = {
      attr_id: 0,
      row_id: 0,
      option_id: 0,
    };
    switch (parts.length) {
      case 3:
        // html_id : attribute-id__row-id__option_id
        parsed_id.attr_id = parts[0];
        parsed_id.row_id = parts[1];
        parsed_id.option_id = parts[2];
        break;
      case 2:
        // html_id : attribute-id__row-id
        parsed_id.attr_id = parts[0];
        parsed_id.row_id = parts[1];
        break;
      default:
    }
    return parsed_id;
  };

  _via_get_file_metadata_stat(img_index_list: any, attr_id: any): {} {
    var stat = {};
    stat[attr_id] = {};
    var i, n, img_id, img_index, value;
    n = img_index_list.length;
    for (i = 0; i < n; ++i) {
      img_index = img_index_list[i];
      img_id = this._via_image_id_list[img_index];
      if (this._via_img_metadata[img_id].file_attributes.hasOwnProperty(attr_id)) {
        value = this._via_img_metadata[img_id].file_attributes[attr_id];
        if (typeof (value) === 'object') {
          // checkbox has multiple values and hence is object
          var key;
          for (key in value) {
            if (stat[attr_id].hasOwnProperty(key)) {
              stat[attr_id][key] += 1;
            } else {
              stat[attr_id][key] = 1;
            }
          }
        } else {
          if (stat[attr_id].hasOwnProperty(value)) {
            stat[attr_id][value] += 1;
          } else {
            stat[attr_id][value] = 1;
          }
        }
      }

    }
    return stat;
  }

  _via_get_region_metadata_stat(img_index_list: any, attr_id: any): {} {
    let stat = {};
    stat[attr_id] = {};
    var i, n, img_id, img_index, value;
    var j, m;
    n = img_index_list.length;
    for (i = 0; i < n; ++i) {
      img_index = img_index_list[i];
      img_id = this._via_image_id_list[img_index];
      m = this._via_img_metadata[img_id].regions.length;
      for (j = 0; j < m; ++j) {
        if (!this.image_grid_is_region_in_current_group(this._via_img_metadata[img_id].regions[j].region_attributes)) {
          // skip region not in current group
          continue;
        }

        value = this._via_img_metadata[img_id].regions[j].region_attributes[attr_id];
        if (typeof (value) === 'object') {
          // checkbox has multiple values and hence is object
          var key;
          for (key in value) {
            if (stat[attr_id].hasOwnProperty(key)) {
              stat[attr_id][key] += 1;
            } else {
              stat[attr_id][key] = 1;
            }
          }
        } else {
          if (stat[attr_id].hasOwnProperty(value)) {
            stat[attr_id][value] += 1;
          } else {
            stat[attr_id][value] = 1;
          }
        }
      }
    }
    return stat;
  }

  // invoked when the input entry in annotation editor receives focus
  annotation_editor_on_metadata_focus(p: any): void {
    if (this._via_annotation_editor_mode === this.VIA_ANNOTATION_EDITOR_MODE.ALL_REGIONS) {
      var pid = this.annotation_editor_extract_html_id_components(p.id);
      var region_id = p.row_id;
      // clear existing highlights (if any)
      this.toggle_all_regions_selection(false);
      // annotation_editor_clear_row_highlight();
      // set new selection highlights
      this.set_region_select_state(region_id, true);
      this.annotation_editor_scroll_to_row(region_id);
      this.annotation_editor_highlight_row(region_id);

      this._via_redraw_reg_canvas();
    }
  }

  // invoked when the user updates annotations using the annotation editor
  annotation_editor_on_metadata_update(p: any): void {
    var pid = this.annotation_editor_extract_html_id_components(p.id);
    let img_id = this._via_image_id;

    let img_index_list = [this._via_image_index];
    var region_id = p.row_id;
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      img_index_list = this._via_image_grid_selected_img_index_list.slice(0);
      region_id = -1; // this flag denotes that we want to update all regions
    }

    if (this._via_metadata_being_updated === 'file') {
      this.annotation_editor_update_file_metadata(img_index_list, p.attr_id, p.value, p.checked).then(function (update_count) {
        this.annotation_editor_on_metadata_update_done('file', p.attr_id, update_count);
      }, function (err) {
        console.log(err)
        this.show_message('Failed to update file attributes! ' + err, 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      });
      return;
    }

    if (this._via_metadata_being_updated === 'region') {
      this.annotation_editor_update_region_metadata(img_index_list, region_id, p.attr_id, p.value, p.checked).then(function (update_count) {
        this.annotation_editor_on_metadata_update_done('region', p.attr_id, update_count);
      }, function (err) {
        this.show_message('Failed to update region attributes! ', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      });
      return;
    }
  }

  annotation_editor_on_metadata_update_done(type: any, attr_id: any, update_count: any): void {
    this.show_message('Updated ' + type + ' attributes of ' + update_count + ' ' + type + 's', 2* VIA_THEME_MESSAGE_TIMEOUT_MS);
    // check if the updated attribute is one of the group variables
    var i, n, type, attr_id;
    n = this._via_image_grid_group_var.length;
    var clear_all_group = false;
    for (i = 0; i < n; ++i) {
      if (this._via_image_grid_group_var[i].type === type &&
        this._via_image_grid_group_var[i].name === attr_id) {
        clear_all_group = true;
        break;
      }
    }
    this._via_regions_group_color_init();
    this._via_redraw_reg_canvas();

    // @todo: it is wasteful to cancel the full set of groups.
    // we should only cancel the groups that are affected by this update.
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      if (clear_all_group) {
        this.image_grid_show_all_project_images();
      }
    }
  }

  annotation_editor_update_file_metadata(img_index_list: any, attr_id: any, new_value: any, new_checked: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var i, n, img_id, img_index;
      n = img_index_list.length;
      var update_count = 0;
      for (i = 0; i < n; ++i) {
        img_index = img_index_list[i];
        img_id = this._via_image_id_list[img_index];

        switch (this._via_attributes['file'][attr_id].type) {
          case 'text':  // fallback
          case 'radio': // fallback
          case 'dropdown': // fallback
          case 'image':
            this._via_img_metadata[img_id].file_attributes[attr_id] = new_value;
            update_count += 1;
            break;

          case 'checkbox':
            var option_id = new_value;
            console.log('option_id=' + option_id)
            console.log('attr_id=' + attr_id)
            console.log('img_id=' + img_id)
            console.log(this._via_img_metadata[img_id].file_attributes)
            console.log(this._via_attributes['file'][attr_id])
            if (this._via_img_metadata[img_id].file_attributes.hasOwnProperty(attr_id)) {
              if (typeof (this._via_img_metadata[img_id].file_attributes[attr_id]) !== 'object') {
                var old_value = this._via_img_metadata[img_id].file_attributes[attr_id];
                this._via_img_metadata[img_id].file_attributes[attr_id] = {};
                if (Object.keys(this._via_attributes['file'][attr_id]['options']).includes(old_value)) {
                  // transform existing value as checkbox option
                  this._via_img_metadata[img_id].file_attributes[attr_id] = {};
                  this._via_img_metadata[img_id].file_attributes[attr_id][old_value] = true;
                }
              }
            } else {
              this._via_img_metadata[img_id].file_attributes[attr_id] = {};
            }

            console.log(this._via_img_metadata[img_id].file_attributes[attr_id])
            console.log(new_checked)
            console.log(new_value)
            if (new_checked) {
              this._via_img_metadata[img_id].file_attributes[attr_id][option_id] = true;
            } else {
              // false option values are not stored
              delete this._via_img_metadata[img_id].file_attributes[attr_id][option_id];
            }
            update_count += 1;
            break;
        }
      }
      ok_callback(update_count);
    });
  }

  annotation_editor_update_region_metadata(img_index_list: any, region_id: any, attr_id: any, new_value: any, new_checked: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var i, n, img_id, img_index;
      n = img_index_list.length;
      var update_count = 0;
      var region_list = [];
      var j, m;

      if (region_id === -1) {
        // update all regions on a file (for image grid view)
        for (i = 0; i < n; ++i) {
          img_index = img_index_list[i];
          img_id = this._via_image_id_list[img_index];

          m = this._via_img_metadata[img_id].regions.length;
          for (j = 0; j < m; ++j) {
            if (!this.image_grid_is_region_in_current_group(this._via_img_metadata[img_id].regions[j].region_attributes)) {
              continue;
            }

            switch (this._via_attributes['region'][attr_id].type) {
              case 'text':  // fallback
              case 'dropdown': // fallback
              case 'radio': // fallback
              case 'image':
                this._via_img_metadata[img_id].regions[j].region_attributes[attr_id] = new_value;
                update_count += 1;
                break;
              case 'checkbox':
                var option_id = new_value;
                if (this._via_img_metadata[img_id].regions[j].region_attributes.hasOwnProperty(attr_id)) {
                  if (typeof (this._via_img_metadata[img_id].regions[j].region_attributes[attr_id]) !== 'object') {
                    var old_value = this._via_img_metadata[img_id].regions[j].region_attributes[attr_id];
                    this._via_img_metadata[img_id].regions[j].region_attributes[attr_id] = {}
                    if (Object.keys(this._via_attributes['region'][attr_id]['options']).includes(old_value)) {
                      // transform existing value as checkbox option
                      this._via_img_metadata[img_id].regions[j].region_attributes[attr_id][old_value] = true;
                    }
                  }
                } else {
                  this._via_img_metadata[img_id].regions[j].region_attributes[attr_id] = {};
                }

                if (new_checked) {
                  this._via_img_metadata[img_id].regions[j].region_attributes[attr_id][option_id] = true;
                } else {
                  // false option values are not stored
                  delete this._via_img_metadata[img_id].regions[j].region_attributes[attr_id][option_id];
                }
                update_count += 1;
                break;
            }
          }
        }
      } else {
        // update a single region in a file (for single image view)
        // update all regions on a file (for image grid view)
        for (i = 0; i < n; ++i) {
          img_index = img_index_list[i];
          img_id = this._via_image_id_list[img_index];

          switch (this._via_attributes['region'][attr_id].type) {
            case 'text':  // fallback
            case 'dropdown': // fallback
            case 'radio': // fallback
            case 'image':
              this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id] = new_value;
              update_count += 1;
              break;
            case 'checkbox':
              var option_id = new_value;

              if (this._via_img_metadata[img_id].regions[region_id].region_attributes.hasOwnProperty(attr_id)) {
                if (typeof (this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id]) !== 'object') {
                  var old_value = this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id];
                  this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id] = {};
                  if (Object.keys(this._via_attributes['region'][attr_id]['options']).includes(old_value)) {
                    // transform existing value as checkbox option
                    this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id][old_value] = true;
                  }
                }
              } else {
                this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id] = {};
              }

              if (new_checked) {
                this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id][option_id] = true;
              } else {
                // false option values are not stored
                delete this._via_img_metadata[img_id].regions[region_id].region_attributes[attr_id][option_id];
              }
              update_count += 1;
              break;
          }
        }
      }
      ok_callback(update_count);
    });
  }

  set_region_annotations_to_default_value(rid: any): void {
    var attr_id;
    for (attr_id in this._via_attributes['region']) {
      var attr_type = this._via_attributes['region'][attr_id].type;
      switch (attr_type) {
        case 'text':
          var default_value = this._via_attributes['region'][attr_id].default_value;
          if (typeof (default_value) !== 'undefined') {
            this._via_img_metadata[this._via_image_id].regions[rid].region_attributes[attr_id] = default_value;
          }
          break;
        case 'image':    // fallback
        case 'dropdown': // fallback
        case 'radio':
          this._via_img_metadata[this._via_image_id].regions[rid].region_attributes[attr_id] = '';
          var default_options = this._via_attributes['region'][attr_id].default_options;
          if (typeof (default_options) !== 'undefined') {
            this._via_img_metadata[this._via_image_id].regions[rid].region_attributes[attr_id] = Object.keys(default_options)[0];
          }
          break;

        case 'checkbox':
          this._via_img_metadata[this._via_image_id].regions[rid].region_attributes[attr_id] = {};
          var default_options = this._via_attributes['region'][attr_id].default_options;
          if (typeof (default_options) !== 'undefined') {
            var option_id;
            for (option_id in default_options) {
              var default_value = default_options[option_id];
              if (typeof (default_value) !== 'undefined') {
                this._via_img_metadata[this._via_image_id].regions[rid].region_attributes[attr_id][option_id] = default_value;
              }
            }
          }
          break;
      }
    }
  }

  set_file_annotations_to_default_value(image_id: any): void {
    var attr_id;
    for (attr_id in this._via_attributes['file']) {
      var attr_type = this._via_attributes['file'][attr_id].type;
      switch (attr_type) {
        case 'text':
          var default_value = this._via_attributes['file'][attr_id].default_value;
          this._via_img_metadata[image_id].file_attributes[attr_id] = default_value;
          break;
        case 'image':    // fallback
        case 'dropdown': // fallback
        case 'radio':
          this._via_img_metadata[image_id].file_attributes[attr_id] = '';
          var default_options = this._via_attributes['file'][attr_id].default_options;
          this._via_img_metadata[image_id].file_attributes[attr_id] = Object.keys(default_options)[0];
          break;
        case 'checkbox':
          this._via_img_metadata[image_id].file_attributes[attr_id] = {};
          var default_options = this._via_attributes['file'][attr_id].default_options;
          var option_id;
          for (option_id in default_options) {
            var default_value = default_options[option_id];
            this._via_img_metadata[image_id].file_attributes[attr_id][option_id] = default_value;
          }
          break;
      }
    }
  }

  annotation_editor_increase_panel_height(): void {
    let p = document.getElementById('annotation_editor_panel');
    if (this._via_settings_ui_annotation_editor_height < 95) {
      this._via_settings_ui_annotation_editor_height += this.VIA_ANNOTATION_EDITOR_HEIGHT_CHANGE;
      p.style.height = this._via_settings_ui_annotation_editor_height + '%';
    }
  }

  annotation_editor_decrease_panel_height(): void {
    let p = document.getElementById('annotation_editor_panel');
    if (this._via_settings_ui_annotation_editor_height > 10) {
      this._via_settings_ui_annotation_editor_height -= this.VIA_ANNOTATION_EDITOR_HEIGHT_CHANGE;
      p.style.height = this._via_settings_ui_annotation_editor_height + '%';
    }
  }

  annotation_editor_increase_content_size(): void {
    let p = document.getElementById('annotation_editor_panel');
    if (this._via_settings_ui_annotation_editor_fontsize < 1.6) {
      this._via_settings_ui_annotation_editor_fontsize += this.VIA_ANNOTATION_EDITOR_FONTSIZE_CHANGE;
      p.style.fontSize = this._via_settings_ui_annotation_editor_fontsize + 'rem';
    }
  }

  annotation_editor_decrease_content_size(): void {
    let p = document.getElementById('annotation_editor_panel');
    if (this._via_settings_ui_annotation_editor_fontsize > 0.4) {
      this._via_settings_ui_annotation_editor_fontsize -= this.VIA_ANNOTATION_EDITOR_FONTSIZE_CHANGE;
      p.style.fontSize = this._via_settings_ui_annotation_editor_fontsize + 'rem';
    }
  }

  //
  // via project
  //
  project_set_name(name: any): void {
    let _via_settings_project_name = name;

    let p = document.getElementById('project_name') as HTMLInputElement;
    p.value = _via_settings_project_name;
  }

  project_init_default_project(): void {
    if (this._via_settings.hasOwnProperty('project') === false) {
      this._via_settings.project = {};
    }

    this.project_set_name(this.project_get_default_project_name());
  }

  project_on_name_update(p: any): void {
    this.project_set_name(p.value);
  }

  project_get_default_project_name(): string {
    const now = new Date();
    var MONTH_SHORT_NAME = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var ts = now.getDate() + MONTH_SHORT_NAME[now.getMonth()] + now.getFullYear() +
      '_' + now.getHours() + 'h' + now.getMinutes() + 'm';

    var project_name = 'via_project_' + ts;
    return project_name;
  }

  project_save_with_confirm(): void {
     this.config = { 'title': 'Save Project' };
     this.input = {
      'project_name': { type: 'text', name: 'Project Name', value: this._via_settings.project.name, disabled: false, size: 30 },
      'save_annotations': { type: 'checkbox', name: 'Save region and file annotations (i.e. manual annotations)', checked: true, disabled: false },
      'save_attributes': { type: 'checkbox', name: 'Save region and file attributes.', checked: true },
      'save_via_settings': { type: 'checkbox', name: 'Save VIA application settings', checked: true },
      //                'save_base64_data':{ type:'checkbox', name:'Save base64 data of images (if present)', checked:false},
      //                'save_images':{type:'checkbox', 'name':'Save images <span class="warning">(WARNING: only recommended for projects containing small number of images)</span>', value:false},
    };

    this.invoke_with_user_inputs(project_save_confirmed, this.input, this.config, this.cancel_handler);
  }

  project_save_confirmed(input: any): void {
    if (input.project_name.value !== this._via_settings.project.name) {
      this.project_set_name(input.project_name.value);
    }

    // via project
    var _via_project = {
      'this._via_settings': this._via_settings,
      'this._via_img_metadata': this._via_img_metadata,
      'this._via_attributes': this._via_attributes
    };

    let filename = input.project_name.value + '.json';
    var data_blob = new Blob([JSON.stringify(_via_project)],
      { type: 'text/json;charset=utf-8' });

    this.save_data_to_local_file(data_blob, filename);

    this.user_input_default_cancel_handler();
  }

  project_open_select_project_file(): void {
    if (this.invisible_file_input) {
      this.invisible_file_input.accept = '.json';
      this.invisible_file_input.onchange = project_open;
      this.invisible_file_input.removeAttribute('multiple');
      this.invisible_file_input.click();
    }
  }

  project_open(event: any): void {
    var selected_file = (<HTMLInputElement>event.target).files[0];
    this.load_text_file(selected_file, project_open_parse_json_file);
  }

  project_open_parse_json_file(project_file_data: any): void {
    var d = JSON.parse(project_file_data);
    if (d['this._via_settings'] && d['this._via_img_metadata'] && d['this._via_attributes']) {
      // import settings
      this.project_import_settings(d['this._via_settings']);

      // clear existing data (if any)
      this._via_image_id_list = [];
      this._via_image_filename_list = [];
      this._via_img_count = 0;
      this._via_img_metadata = {};
      this._via_img_fileref = {};
      this._via_img_src = {};
      this._via_attributes = { 'region': {}, 'file': {} };
      this._via_buffer_remove_all();

      // import image metadata
      this._via_img_metadata = d['this._via_img_metadata'];
      var img_id;
      for (img_id in this._via_img_metadata) {
        this._via_image_id_list.push(img_id);
        this._via_image_filename_list.push(this._via_img_metadata[img_id].filename);
        this.set_file_annotations_to_default_value(img_id);
        this._via_img_count += 1;
      }

      // import attributes
      this._via_attributes = d['this._via_attributes'];
      this.project_parse_via_attributes_from_img_metadata();
      var fattr_id_list = Object.keys(this._via_attributes['file']);
      var rattr_id_list = Object.keys(this._via_attributes['region']);
      if (rattr_id_list.length) {
        this._via_attribute_being_updated = 'region';
        this._via_current_attribute_id = rattr_id_list[0];
      } else {
        if (fattr_id_list.length) {
          this._via_attribute_being_updated = 'file';
          this._via_current_attribute_id = fattr_id_list[0];
        }
      }

      if (this._via_settings_core_default_filepath !== '') {
        this._via_file_resolve_all_to_default_filepath();
      }

      this.show_message('Imported project [' + this._via_settings['project'].name + '] with ' + this._via_img_count + ' files.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);

      if (this._via_img_count > 0) {
        this._via_show_img(0);
        this.update_img_fn_list();
        this._via_reload_img_fn_list_table = true;
      }
    } else {
      this.show_message('Cannot import project from a corrupt file!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  project_parse_via_attributes_from_img_metadata(): void {
    // parse this._via_img_metadata to populate this._via_attributes
    var img_id, fa, ra;

    if (!this._via_attributes.hasOwnProperty('file')) {
      this._via_attributes['file'] = {};
    }
    if (!this._via_attributes.hasOwnProperty('region')) {
      this._via_attributes['region'] = {};
    }

    for (img_id in this._via_img_metadata) {
      // file attributes
      for (fa in this._via_img_metadata[img_id].file_attributes) {
        if (!this._via_attributes['file'].hasOwnProperty(fa)) {
          this._via_attributes['file'][fa] = {};
          this._via_attributes['file'][fa]['type'] = 'text';
        }
      }
      // region attributes
      var ri;
      for (ri = 0; ri < this._via_img_metadata[img_id].regions.length; ++ri) {
        for (ra in this._via_img_metadata[img_id].regions[ri].region_attributes) {
          if (!this._via_attributes['region'].hasOwnProperty(ra)) {
            this._via_attributes['region'][ra] = {};
            this._via_attributes['region'][ra]['type'] = 'text';
          }
        }
      }
    }
  }

  project_import_settings(s: any): void {
    // @todo find a generic way to import into _via_settings
    // only the components present in s (and not overwrite everything)
    var k1;
    for (k1 in s) {
      if (typeof (s[k1]) === 'object') {
        var k2;
        for (k2 in s[k1]) {
          if (typeof (s[k1][k2]) === 'object') {
            var k3;
            for (k3 in s[k1][k2]) {
              this._via_settings[k1][k2][k3] = s[k1][k2][k3];
            }
          } else {
            this._via_settings[k1][k2] = s[k1][k2];
          }
        }
      } else {
        this._via_settings[k1] = s[k1];
      }
    }
  }

  project_file_remove_with_confirm(): void {
    var img_id = this._via_image_id_list[this._via_image_index];
    var filename = this._via_img_metadata[img_id].filename;
    var region_count = this._via_img_metadata[img_id].regions.length;

    let config = { 'title': 'Remove File from Project' };
    let input = {
      'img_index': { type: 'text', name: 'File Id', value: (this._via_image_index + 1), disabled: true, size: 8 },
      'filename': { type: 'text', name: 'Filename', value: filename, disabled: true, size: 30 },
      'region_count': { type: 'text', name: 'Number of regions', disabled: true, value: region_count, size: 8 }
    };

    this.invoke_with_user_inputs(project_file_remove_confirmed, input, config, this.cancel_handler);
  }

  project_file_remove_confirmed(input: any): void {
    let img_index = input.img_index.value - 1;
    this.project_remove_file(img_index);

    if (img_index === this._via_img_count) {
      if (this._via_img_count === 0) {
        this._via_current_image_loaded = false;
        this.show_home_panel();
      } else {
        this._via_show_img(img_index - 1);
      }
    } else {
      this._via_show_img(img_index);
    }
    this._via_reload_img_fn_list_table = true;
    this.update_img_fn_list();
    this.show_message('Removed file [' + input.filename.value + '] from project', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    this.user_input_default_cancel_handler();
  }

  project_remove_file(img_index: any): void {
    if (img_index < 0 || img_index >= this._via_img_count) {
      console.log('project_remove_file(): invalid img_index ' + img_index);
      return;
    }
    var img_id = this._via_image_id_list[img_index];

    // remove img_index from all array
    // this invalidates all image_index > img_index
    this._via_image_id_list.splice(img_index, 1);
    this._via_image_filename_list.splice(img_index, 1);

    var img_fn_list_index = this._via_img_fn_list_img_index_list.indexOf(img_index);
    if (img_fn_list_index !== -1) {
      this._via_img_fn_list_img_index_list.splice(img_fn_list_index, 1);
    }

    // clear all buffer
    // @todo: it is wasteful to clear all the buffer instead of removing a single image
    this._via_buffer_remove_all();
    // img_fn_list_clear_css_classname('buffered');

    this._via_clear_reg_canvas();
    delete this._via_img_metadata[img_id];
    delete this._via_img_src[img_id];
    delete this._via_img_fileref[img_id];

    this._via_img_count -= 1;
  }

  project_add_new_file(filename: any, size: any, file_id: any): any {
    var img_id = file_id;
    if (typeof (img_id) === 'undefined') {
      if (typeof (size) === 'undefined') {
        size = -1;
      }
      img_id =  this._via_get_image_id(filename, size); //asset.id
    }

    if (!this._via_img_metadata.hasOwnProperty(img_id)) {
      this._via_img_metadata[img_id] =this.file_metadata(filename, size);
      this._via_image_id_list.push(img_id);
      this._via_image_filename_list.push(filename);
      this._via_img_count += 1;
    }
    return img_id;
  }

  project_file_add_local(event: any): void {
    var user_selected_images = (<HTMLInputElement>event.target).files;
    var original_image_count = this._via_img_count;

    var new_img_index_list = [];
    var discarded_file_count = 0;
    for (var i = 0; i < user_selected_images.length; ++i) {
      var filetype = user_selected_images[i].type.substr(0, 5);
      if (filetype === 'image') {
        let filename = user_selected_images[i].name;
        let size = user_selected_images[i].size;
        var img_id1 = this._via_get_image_id(filename, size); //asset.id
        var img_id2 = this._via_get_image_id(filename, -1); //asset.id
        var img_id = img_id1; //asset.id

        if (this._via_img_metadata.hasOwnProperty(img_id1) || this._via_img_metadata.hasOwnProperty(img_id2)) {
          if (this._via_img_metadata.hasOwnProperty(img_id2)) {
            img_id = img_id2;
          }

          this._via_img_fileref[img_id] = user_selected_images[i];
          if (this._via_img_metadata[img_id].size === -1) {
            this._via_img_metadata[img_id].size = size;
          }
        } else {
          img_id = this.project_add_new_file(filename, size, this.file_id);
          this._via_img_fileref[img_id] = user_selected_images[i];
          this.set_file_annotations_to_default_value(img_id);
        }
        new_img_index_list.push(this._via_image_id_list.indexOf(img_id));
      } else {
        discarded_file_count += 1;
      }
    }

    if (this._via_img_metadata) {
      var status_msg = 'Loaded ' + new_img_index_list.length + ' images.';
      if (discarded_file_count) {
        status_msg += ' ( Discarded ' + discarded_file_count + ' non-image files! )';
      }
      this.show_message(status_msg, 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);

      if (new_img_index_list.length) {
        // show first of newly added image
        this._via_show_img(new_img_index_list[0]);
      } else {
        // show original image
        this._via_show_img(this._via_image_index);
      }
      this.update_img_fn_list();
    } else {
      this.show_message("Please upload some image files!", 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  project_file_add_abs_path_with_input(): void {
    let config = { 'title': 'Add File using Absolute Path' };
    let input = {
      'absolute_path': { type: 'text', name: 'add one absolute path', placeholder: '/home/abhishek/image1.jpg', disabled: false, size: 50 },
      'absolute_path_list': { type: 'textarea', name: 'or, add multiple paths (one path per line)', placeholder: '/home/abhishek/image1.jpg\n/home/abhishek/image2.jpg\n/home/abhishek/image3.png', disabled: false, rows: 5, cols: 80 }
    };

    this.invoke_with_user_inputs(project_file_add_abs_path_input_done, input, config, this.cancel_handler);
  }

  project_file_add_abs_path_input_done(input: any): void {
    if (input.absolute_path.value !== '') {
      var abs_path = input.absolute_path.value.trim();
      var img_id = this.project_file_add_url(abs_path);
      let img_index = this._via_image_id_list.indexOf(img_id);
      this._via_show_img(img_index);
      this.show_message('Added file at absolute path [' + abs_path + ']', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      this.update_img_fn_list();
      this.user_input_default_cancel_handler();
    } else {
      if (input.absolute_path_list.value !== '') {
        var absolute_path_list_str = input.absolute_path_list.value;
        this.import_files_url_from_csv(absolute_path_list_str);
      }
    }
  }

  project_file_add_url_with_input(): void {
    let config = { 'title': 'Add File using URL' };
    let input = {
      'url': { type: 'text', name: 'add one URL', placeholder: 'http://www.robots.ox.ac.uk/~vgg/software/via/images/swan.jpg', disabled: false, size: 50 },
      'url_list': { type: 'textarea', name: 'or, add multiple URL (one url per line)', placeholder: 'http://www.example.com/image1.jpg\nhttp://www.example.com/image2.jpg\nhttp://www.example.com/image3.png', disabled: false, rows: 5, cols: 80 }
    };

    this.invoke_with_user_inputs(project_file_add_url_input_done, input, config, this.cancel_handler);
  }

  project_file_add_url_input_done(input: any): void {
    if (input.url.value !== '') {
      var url = input.url.value.trim();
      var img_id = this.project_file_add_url(url);
      let img_index = this._via_image_id_list.indexOf(img_id);
      this.show_message('Added file at url [' + url + ']', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
      this.update_img_fn_list();
      this._via_show_img(img_index);
      this.user_input_default_cancel_handler();
    } else {
      if (input.url_list.value !== '') {
        var url_list_str = input.url_list.value;
        this.import_files_url_from_csv(url_list_str);
      }
    }
  }

  project_file_add_url(url: any): any {
    if (url !== '') {
      let size = -1; // convention: files added using url have size = -1
      var img_id = this._via_get_image_id(url, size); //asset.id

      if (!this._via_img_metadata.hasOwnProperty(this.img_id)) {
        img_id = 'will' //asset.id // can just make a placeholde and in the app you call it and delete the one here. 
        this._via_img_src[img_id] = this._via_img_metadata[img_id].filename;
        this.set_file_annotations_to_default_value(img_id);
        return img_id;
      }
    }
  }

  project_file_add_base64(filename: any, base64: any): void {
    let size = -1; // convention: files added using url have size = -1
    var img_id = this._via_get_image_id(filename, size); //asset.id

    if (!this._via_img_metadata.hasOwnProperty(img_id)) {
      img_id = this.project_add_new_file(filename, size, this.file_id);
      this._via_img_src[img_id] = base64;
      this.set_file_annotations_to_default_value(img_id);
    }
  }

  project_file_load_on_fail(img_index: any): void {
    var img_id = this._via_image_id_list[img_index];
    this._via_img_src[img_id] = '';
    this._via_image_load_error[img_index] = true;
    this.img_fn_list_ith_entry_error(img_index, true);
  }

  project_file_load_on_success(img_index: any): void {
    this._via_image_load_error[img_index] = false;
    this.img_fn_list_ith_entry_error(img_index, false);
  }

  project_settings_toggle(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.SETTINGS) {
      this.show_single_image_view();
    } else {
      this.project_settings_show();
    }
  }

  project_settings_show(): void {
    this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.SETTINGS);
  }

  project_filepath_add_from_input(p: any, button: any): void {
    var new_path = document.getElementById(p).nodeValue.trim();
    let img_index = parseInt(button.getAttribute('value'));
    this.project_filepath_add(new_path);
    this._via_show_img(img_index);
  }

  project_filepath_add(new_path: any): void {
    console.log('adding path: ' + new_path);
    if (path === '') {
      return;
    }
    /// Look at how the _via_settings affect it here, you did not add the different properties at the beginning, might have to use the spread operator.

    if (_via_settings.core.filepath.hasOwnProperty(new_path)) {
      return;
    } else {
      var largest_order = 0;
      var path;
      for (path in _via_settings.core.filepath) {
        if (_via_settings.core.filepath[path] > largest_order) {
          largest_order = _via_settings.core.filepath[path];
        }
      }
      _via_settings.core.filepath[new_path] = largest_order + 1;

    }
  }

  project_filepath_del(path: any): void {
    if (_via_settings.core.filepath.hasOwnProperty(path)) {
      delete _via_settings.core.filepath[path];
    }
  }

  project_save_attributes(): void {
    var blob_attr = { type: 'application/json;charset=utf-8' };
    var all_region_data_blob = new Blob([JSON.stringify(this._via_attributes)], blob_attr);

    this.save_data_to_local_file(all_region_data_blob, _via_settings.project.name + '_attributes.json');
  }

  project_import_attributes_from_file(event: any): void {
    var selected_files = (<HTMLInputElement>event.target).files;
    for (var i = 0; i < selected_files.length; ++i) {
      var file = selected_files[i];
      this.load_text_file(file, project_import_attributes_from_json);
    }
  }

  project_import_attributes_from_json(data: any): void {
    try {
      var d = JSON.parse(data);
      var attr;
      var fattr_count = 0;
      var rattr_count = 0;
      // process file attributes
      for (attr in d['file']) {
        this._via_attributes['file'][attr] = JSON.parse(JSON.stringify(d['file'][attr]));
        fattr_count += 1;
      }

      // process region attributes
      for (attr in d['region']) {
        this._via_attributes['region'][attr] = JSON.parse(JSON.stringify(d['region'][attr]));
        rattr_count += 1;
      }

      if (fattr_count > 0 || rattr_count > 0) {
        var fattr_id_list = Object.keys(this._via_attributes['file']);
        var rattr_id_list = Object.keys(this._via_attributes['region']);
        if (rattr_id_list.length) {
          this._via_attribute_being_updated = 'region';
          this._via_current_attribute_id = rattr_id_list[0];
        } else {
          if (fattr_id_list.length) {
            this._via_attribute_being_updated = 'file';
            this._via_current_attribute_id = fattr_id_list[0];
          }
        }
        this.attribute_update_panel_set_active_button();
        this.update_attributes_update_panel();
        this.annotation_editor_update_content();
      }
      this.show_message('Imported ' + fattr_count + ' file attributes and '
        + rattr_count + ' region attributes', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    } catch (error) {
      this.show_message('Failed to import attributes: [' + error + ']', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }
  }

  //
  // image grid
  //
  image_grid_init(): void {
    this.p = document.getElementById('image_grid_content');
    this.p.focus();
    this.p.addEventListener('mousedown', this.image_grid_mousedown_handler, false);
    this.p.addEventListener('mouseup', this.image_grid_mouseup_handler, false);
    this.p.addEventListener('dblclick', this.image_grid_dblclick_handler, false);

    this.image_grid_set_content_panel_height_fixed();

    // select policy as defined in settings
    this.p = document.getElementById('image_grid_show_image_policy') as HTMLSelectElement;
    var n = this.p.options.length;
    for (var i = 0; i < n; ++i) {
      if (this.p.options[i].value === this._via_settings_ui_image_grid_show_image_policy) {
        this.p.selectedIndex = i;
        break;
      }
    }
  }

  image_grid_update(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      this.image_grid_set_content(this._via_image_grid_img_index_list);
    }
  }

  image_grid_toggle(): void {
    let p = document.getElementById('toolbar_image_grid_toggle');
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID) {
      this.image_grid_clear_all_groups();
      this.show_single_image_view();
    } else {
      this.show_image_grid_view();
    }
  }

  image_grid_show_all_project_images(): void {
    var all_img_index_list = [];
    var i, n;
    //n = this._via_image_id_list.length;
    n = this._via_img_fn_list_img_index_list.length;
    for (i = 0; i < n; ++i) {
      all_img_index_list.push(this._via_img_fn_list_img_index_list[i]);
    }
    this.image_grid_clear_all_groups();

    this.p = document.getElementById('image_grid_toolbar_group_by_select') as HTMLSelectElement;
    this.p.selectedIndex = 0;

    this.image_grid_set_content(all_img_index_list);
  }

  image_grid_clear_all_groups(): void {
    var i, n;
    n = this._via_image_grid_group_var.length;
    for (i = 0; i < n; ++i) {
      this.image_grid_remove_html_group_panel(this._via_image_grid_group_var[i]);
      this.image_grid_group_by_select_set_disabled(this._via_image_grid_group_var[i].type,
        this._via_image_grid_group_var[i].name,
        false);
    }
    this._via_image_grid_group = {};
    this._via_image_grid_group_var = [];

  }

  image_grid_set_content(img_index_list: any): void {
    if (img_index_list.length === 0) {
      return;
    }
    if (this._via_image_grid_load_ongoing) {
      return;
    }

    this._via_image_grid_img_index_list = img_index_list.slice(0);
    this._via_image_grid_selected_img_index_list = img_index_list.slice(0);

    document.getElementById('image_grid_group_by_img_count').innerHTML = this._via_image_grid_img_index_list.length.toString();

    this._via_image_grid_page_first_index = 0;
    this._via_image_grid_page_last_index = null;
    this._via_image_grid_stack_prev_page = [];
    this._via_image_grid_page_img_index_list = [];

    this.image_grid_clear_content();
    this.image_grid_set_content_panel_height_fixed();
    this._via_image_grid_load_ongoing = true;

    let n = this._via_image_grid_img_index_list.length;
    switch (this._via_settings_ui_image_grid_show_image_policy) {
      case 'all':
        this._via_image_grid_page_img_index_list = this._via_image_grid_img_index_list.slice(0);
        break;
      case 'first_mid_last':
        if (n < 3) {
          for (var i = 0; i < n; ++i) {
            this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[i]);
          }
        } else {
          this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[0]);
          this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[Math.floor(n / 2)]);
          this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[n - 1]);
        }
        break;
      case 'even_indexed':
        for (var i = 0; i < n; ++i) {
          if (i % 2 !== 0) { // since the user views (i+1) based indexing
            this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[i]);
          }
        }
        break;
      case 'odd_indexed':
        for (var i = 0; i < n; ++i) {
          if (i % 2 === 0) { // since the user views (i+1) based indexing
            this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[i]);
          }
        }
        break;
      case 'gap5':  // fallback
      case 'gap25': // fallback
      case 'gap50': // fallback
        var del = parseInt(this._via_settings_ui_image_grid_show_image_policy.substr('gap'.length));
        for (var i = 0; i < n; i = i + del) {
          this._via_image_grid_page_img_index_list.push(this._via_image_grid_img_index_list[i]);
        }
        break;
    }

    this._via_image_grid_visible_img_index_list = [];

    this.image_grid_update_sel_count_html();
    this.annotation_editor_update_content();

    this.image_grid_content_append_img(this._via_image_grid_page_first_index);

    this.show_message('[Click] toggles selection, ' +
      '[Shift + Click] selects everything a image, ' +
      '[Click] or [Ctrl + Click] removes selection of all subsequent or preceeding images.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
  }

  image_grid_clear_content(): void {
    var img_container = document.getElementById('image_grid_content_img');
    var img_rshape = document.getElementById('image_grid_content_rshape');
    img_container.innerHTML = '';
    img_rshape.innerHTML = '';
    this._via_image_grid_visible_img_index_list = [];
  }

  image_grid_set_content_panel_height_fixed(): void {
    var pc = document.getElementById('image_grid_content');
    var de = document.documentElement;
    pc.style.height = (de.clientHeight - 5.5 * this.ui_top_panel.offsetHeight) + 'px';
  }

  // We do not know how many images will fit in the display area.
  // Therefore, we add images one-by-one until overflow of parent

  image_grid_content_append_img(img_grid_index: any): void {
    var img_index = this._via_image_grid_page_img_index_list[img_grid_index];
    var html_img_id = this.image_grid_get_html_img_id(img_index);
    var img_id = this._via_image_id_list[img_index];
    let e = document.createElement('img');
    if (this._via_img_fileref[img_id] instanceof File) {
      var img_reader = new FileReader();
      img_reader.addEventListener("error", function () {
        //@todo
      }, false);
      img_reader.addEventListener("load", function () {
        e.src = img_reader.result.toString();
      }, false);
      img_reader.readAsDataURL(this._via_img_fileref[img_id]);
    } else {
      e.src = this._via_img_src[img_id];
    }
    e.setAttribute('id', html_img_id);
    e.setAttribute('height', this._via_settings_ui_image_grid_img_height + 'px');
    e.setAttribute('title', '[' + (img_index + 1) + '] ' + this._via_img_metadata[img_id].filename);

    e.addEventListener('load', image_grid_on_img_load, false);
    e.addEventListener('error', image_grid_on_img_error, false);
    document.getElementById('image_grid_content_img').appendChild(e);
  }

  image_grid_on_img_load(e: any): void {
    var img = e.target;
    let img_index = this.image_grid_parse_html_img_id(img.id);
    this.project_file_load_on_success(img_index);

    this.image_grid_add_img_if_possible(img);
  }

  image_grid_on_img_error(e: any): void {
    var img = e.target;
    let img_index = this.image_grid_parse_html_img_id(img.id);
    this.project_file_load_on_fail(img_index);
    this.image_grid_add_img_if_possible(img);
  }

  image_grid_add_img_if_possible(img: any): void {
    let img_index = this.image_grid_parse_html_img_id(img.id);

    let p = document.getElementById('image_grid_content_img');
    var img_bottom_right_corner = parseInt(img.offsetTop) + parseInt(img.height);
    if (p.clientHeight < img_bottom_right_corner) {
      // stop as addition of this image caused overflow of parent container
      var img_container = document.getElementById('image_grid_content_img');
      img_container.removeChild(img);

      if (this._via_settings_ui_image_grid_show_region_shape) {
        this.image_grid_page_show_all_regions();
      }
      this._via_image_grid_load_ongoing = false;

      var index = this._via_image_grid_page_img_index_list.indexOf(img_index);
      this._via_image_grid_page_last_index = index;

      // setup prev, next navigation
      var info = document.getElementById('image_grid_nav');
      var html = [];
      var first_index = this._via_image_grid_page_first_index;
      var last_index = this._via_image_grid_page_last_index - 1;
      html.push('<span>Showing&nbsp;' + (first_index + 1) +
        ' to ' + (last_index + 1) + '&nbsp;:</span>');
      if (this._via_image_grid_stack_prev_page.length) {
        html.push('<span class="text_button" onclick="image_grid_page_prev()">Prev</span>');
      } else {
        html.push('<span>Prev</span>');
      }
      html.push('<span class="text_button" onclick="image_grid_page_next()">Next</span');
      info.innerHTML = html.join('');
    } else {
      // process this image and trigger addition of next image in sequence
      var img_fn_list_index = this._via_image_grid_page_img_index_list.indexOf(img_index);
      var next_img_fn_list_index = img_fn_list_index + 1;

      this._via_image_grid_visible_img_index_list.push(img_index);
      let is_selected = (this._via_image_grid_selected_img_index_list.indexOf(img_index) !== -1);
      if (!is_selected) {
        this.image_grid_update_img_select(img_index, 'unselect');
      }

      if (next_img_fn_list_index !== this._via_image_grid_page_img_index_list.length) {
        if (this._via_image_grid_load_ongoing) {
          this.image_grid_content_append_img(img_fn_list_index + 1);
        } else {
          // image grid load operation was cancelled
          this._via_image_grid_page_last_index = this._via_image_grid_page_first_index; // load this page again

          var info = document.getElementById('image_grid_nav');
          var html = [];
          html.push('<span>Cancelled&nbsp;:</span>');
          if (this._via_image_grid_stack_prev_page.length) {
            html.push('<span class="text_button" onclick="image_grid_page_prev()">Prev</span>');
          } else {
            html.push('<span>Prev</span>');
          }
          html.push('<span class="text_button" onclick="image_grid_page_next()">Next</span');
          info.innerHTML = html.join('');
        }
      } else {
        // last page
        var index = this._via_image_grid_page_img_index_list.indexOf(img_index);
        this._via_image_grid_page_last_index = index;

        if (this._via_settings_ui_image_grid_show_region_shape) {
          this.image_grid_page_show_all_regions();
        }
        this._via_image_grid_load_ongoing = false;

        // setup prev, next navigation
        var info = document.getElementById('image_grid_nav');
        var html = [];
        var first_index = this._via_image_grid_page_first_index;
        var last_index = this._via_image_grid_page_last_index;
        html.push('<span>Showing&nbsp;' + (first_index + 1) +
          ' to ' + (last_index + 1) + ' (end)&nbsp;</span>');
        if (this._via_image_grid_stack_prev_page.length) {
          html.push('<span class="text_button" onclick="image_grid_page_prev()">Prev</span>');
        } else {
          html.push('<span>Prev</span>');
        }
        html.push('<span>Next</span');

        info.innerHTML = html.join('');
      }
    }
  }

  image_grid_onchange_show_image_policy(p: any): void {
    this._via_settings_ui_image_grid_show_image_policy = p.options[p.selectedIndex].value;
    this.image_grid_set_content(this._via_image_grid_img_index_list);
  }

  image_grid_page_show_all_regions(): void {
    var all_promises = [];
    if (this._via_settings_ui_image_grid_show_region_shape) {
      this.p = document.getElementById('image_grid_content_img');
      var n = this.p.childNodes.length;
      var i;
      for (i = 0; i < n; ++i) {
        // draw region shape into global canvas for image grid
        this.img_index = this.image_grid_parse_html_img_id(this.p.childNodes[i].id);
        var img_param = []; // [width, height, originalWidth, originalHeight, x, y]
        img_param.push(parseInt(this.p.childNodes[i].width));
        img_param.push(parseInt(this.p.childNodes[i].height));
        img_param.push(parseInt(this.p.childNodes[i].naturalWidth));
        img_param.push(parseInt(this.p.childNodes[i].naturalHeight));
        img_param.push(parseInt(this.p.childNodes[i].offsetLeft) + parseInt(this.p.childNodes[i].clientLeft));
        img_param.push(parseInt(this.p.childNodes[i].offsetTop) + parseInt(this.p.childNodes[i].clientTop));
        var promise = this.image_grid_show_region_shape(this.img_index, img_param);
        all_promises.push(promise);
      }
      // @todo: ensure that all promises are fulfilled
    }
  }

  image_grid_is_region_in_current_group(r: any): boolean {
    var i, n;
    n = this._via_image_grid_group_var.length;
    if (n === 0) {
      return true;
    }

    for (i = 0; i < n; ++i) {
      if (this._via_image_grid_group_var[i].type === 'region') {
        var group_value = this._via_image_grid_group_var[i].values[this._via_image_grid_group_var[i].current_value_index];
        if (r[this._via_image_grid_group_var[i].name] != group_value) {
          return false;
        }
      }
    }
    return true;
  }

  image_grid_show_region_shape(img_index: any, img_param: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var i;
      var img_id = this._via_image_id_list[img_index];
      var html_img_id = this.image_grid_get_html_img_id(img_index);
      var n = this._via_img_metadata[img_id].regions.length;
      var is_in_group = false;
      for (i = 0; i < n; ++i) {
        if (!this.image_grid_is_region_in_current_group(this._via_img_metadata[img_id].regions[i].region_attributes)) {
          // skip drawing this region which is not in current group
          continue;
        }

        var r = this._via_img_metadata[img_id].regions[i].shape_attributes;
        var dimg; // region coordinates in original image space
        switch (r.name) {
          case this.VIA_REGION_SHAPE.RECT:
            dimg = [r['x'], r['y'], r['x'] + r['width'], r['y'] + r['height']];
            break;
          case this.VIA_REGION_SHAPE.CIRCLE:
            dimg = [r['cx'], r['cy'], r['cx'] + r['r'], r['cy'] + r['r']];
            break;
          case this.VIA_REGION_SHAPE.ELLIPSE:
            dimg = [r['cx'], r['cy'], r['cx'] + r['rx'], r['cy'] + r['ry']];
            break;
          case this.VIA_REGION_SHAPE.POLYLINE: // handled by POLYGON
          case this.VIA_REGION_SHAPE.POLYGON:
            var j;
            dimg = [];
            for (j = 0; j < r['all_points_x'].length; ++j) {
              dimg.push(r['all_points_x'][j]);
              dimg.push(r['all_points_y'][j]);
            }
            break;
          case this.VIA_REGION_SHAPE.POINT:
            dimg = [r['cx'], r['cy']];
            break;
        }
        var scale_factor = img_param[1] / img_param[3]; // new_height / original height
        var offset_x = img_param[4];
        var offset_y = img_param[5];
        var r2 = new _via_region(r.name, i, dimg, scale_factor, offset_x, offset_y);
        var r2_svg = r2.get_svg_element();
        r2_svg.setAttribute('id', this.image_grid_get_html_region_id(img_index, i));
        r2_svg.setAttribute('class', html_img_id);
        r2_svg.setAttribute('fill', this._via_settings_ui_image_grid_rshape_fill);
        //r2_svg.setAttribute('fill-opacity', _via_settings_ui_image_grid_rshape_fill_opacity);
        r2_svg.setAttribute('stroke', this._via_settings_ui_image_grid_rshape_stroke);
        r2_svg.setAttribute('stroke-width', this._via_settings_ui_image_grid_rshape_stroke_width.toString());

        document.getElementById('image_grid_content_rshape').appendChild(r2_svg);
      }
    });
  }

  image_grid_image_size_increase(): void {
    var new_img_height = this._via_settings_ui_image_grid_img_height + this.VIA_IMAGE_GRID_IMG_HEIGHT_CHANGE;
    this._via_settings_ui_image_grid_img_height = new_img_height;

    this._via_image_grid_page_last_index = null;
    this.image_grid_update();
  }

  image_grid_image_size_decrease(): void {
    var new_img_height = this._via_settings_ui_image_grid_img_height - this.VIA_IMAGE_GRID_IMG_HEIGHT_CHANGE;
    if (new_img_height > 1) {
      this._via_settings_ui_image_grid_img_height = new_img_height;
      this._via_image_grid_page_last_index = null;
      this.image_grid_update();
    }
  }

  image_grid_image_size_reset(): void {
    var new_img_height = this._via_settings_ui_image_grid_img_height;
    if (new_img_height > 1) {
      this. _via_settings_ui_image_grid_img_height = new_img_height;
      this._via_image_grid_page_last_index = null;
      this.image_grid_update();
    }
  }

  image_grid_mousedown_handler(e: any): void {
    e.preventDefault();
    this._via_image_grid_mousedown_img_index = this.image_grid_parse_html_img_id(e.target.id);
  }

  image_grid_mouseup_handler(e: any): void {
    e.preventDefault();
    var last_mouseup_img_index = this._via_image_grid_mouseup_img_index;
    this._via_image_grid_mouseup_img_index = this.image_grid_parse_html_img_id(e.target.id);
    if (isNaN(this._via_image_grid_mousedown_img_index) ||
      isNaN(this._via_image_grid_mouseup_img_index)) {
      last_mouseup_img_index = this._via_image_grid_img_index_list[0];
      this.image_grid_group_select_none();
      return;
    }

    var mousedown_img_arr_index = this._via_image_grid_img_index_list.indexOf(this._via_image_grid_mousedown_img_index);
    var mouseup_img_arr_index = this._via_image_grid_img_index_list.indexOf(this._via_image_grid_mouseup_img_index);

    let start = -1;
    let end = -1;
    var operation = 'select'; // {'select', 'unselect', 'toggle'}
    if (mousedown_img_arr_index === mouseup_img_arr_index) {
      if (e.shiftKey) {
        // select all elements until this element
        start = this._via_image_grid_img_index_list.indexOf(last_mouseup_img_index) + 1;
        end = mouseup_img_arr_index + 1;
      } else {
        // toggle selection of single image
        start = mousedown_img_arr_index;
        end = start + 1;
        operation = 'toggle';
      }
    } else {
      if (mousedown_img_arr_index < mouseup_img_arr_index) {
        start = mousedown_img_arr_index;
        end = mouseup_img_arr_index + 1;
      } else {
        start = mouseup_img_arr_index + 1;
        end = mousedown_img_arr_index;
      }
      operation = 'toggle';
    }

    if (start > end) {
      return;
    }

    var i, img_index;
    for (i = start; i < end; ++i) {
      img_index = this._via_image_grid_img_index_list[i];
      this.image_grid_update_img_select(img_index, operation);
    }
    this.image_grid_update_sel_count_html();
    this.annotation_editor_update_content();
  }

  image_grid_update_sel_count_html(): void {
    document.getElementById('image_grid_group_by_sel_img_count').innerHTML = this._via_image_grid_selected_img_index_list.length.toString();
  }

  // state \in {'select', 'unselect', 'toggle'}
  image_grid_update_img_select(img_index: any, state: any): void {
    var html_img_id = this.image_grid_get_html_img_id(img_index);
    let is_selected = (this._via_image_grid_selected_img_index_list.indexOf(img_index) !== -1);
    if (state === 'toggle') {
      if (is_selected) {
        state = 'unselect';
      } else {
        state = 'select';
      }
    }

    switch (state) {
      case 'select':
        if (!is_selected) {
          this._via_image_grid_selected_img_index_list.push(img_index);
        }
        if (this._via_image_grid_visible_img_index_list.indexOf(img_index) !== -1) {
          document.getElementById(html_img_id).classList.remove('not_sel');
        }
        break;
      case 'unselect':
        if (is_selected) {
          var arr_index = this._via_image_grid_selected_img_index_list.indexOf(img_index);
          this._via_image_grid_selected_img_index_list.splice(arr_index, 1);
        }
        if (this._via_image_grid_visible_img_index_list.indexOf(img_index) !== -1) {
          document.getElementById(html_img_id).classList.add('not_sel');
        }
        break;
    }
  }

  image_grid_group_select_all(): void {
    this.image_grid_group_set_all_selection_state('select');
    this.image_grid_update_sel_count_html();
    this.annotation_editor_update_content();
    this.show_message('Selected all images in the current group', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
  }

  image_grid_group_select_none(): void {
    this.image_grid_group_set_all_selection_state('unselect');
    this.image_grid_update_sel_count_html();
    this.annotation_editor_update_content();
    this.show_message('Removed selection of all images in the current group', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
  }

  image_grid_group_set_all_selection_state(state: any): void {
    var i, img_index;
    for (i = 0; i < this._via_image_grid_img_index_list.length; ++i) {
      img_index = this._via_image_grid_img_index_list[i];
      this.image_grid_update_img_select(img_index, state);
    }
  }

  image_grid_group_toggle_select_all(): void {
    if (this._via_image_grid_selected_img_index_list.length === this._via_image_grid_img_index_list.length) {
      this.image_grid_group_select_none();
    } else {
      this.image_grid_group_select_all();
    }
  }

  image_grid_parse_html_img_id(html_img_id: any): number {
    let img_index = html_img_id.substr(2);
    return parseInt(img_index);
  }

  image_grid_get_html_img_id(img_index: any): string {
    return 'im' + img_index;
  }

  image_grid_parse_html_region_id(html_region_id) {
    var chunks = html_region_id.split('_');
    if (chunks.length === 2) {
      var img_index = parseInt(chunks[0].substr(2));
      var region_id = parseInt(chunks[1].substr(2));
      return { 'img_index': img_index, 'region_id': region_id };
    } else {
      console.log('image_grid_parse_html_region_id(): invalid html_region_id');
      return {};
    }
  }

  image_grid_get_html_region_id(img_index: any, region_id: any): string {
    return this.image_grid_get_html_img_id(img_index) + '_rs' + region_id;
  }

  image_grid_dblclick_handler(e: Event): void {
    this._via_image_index = this.image_grid_parse_html_img_id((e.target as HTMLElement).id);
    this.show_single_image_view();
  }

  image_grid_toolbar_update_group_by_select(): void {
    let p = document.getElementById('image_grid_toolbar_group_by_select');
    p.innerHTML = '';

    var o = document.createElement('option');
    o.setAttribute('value', '');
    o.setAttribute('selected', 'selected');
    o.innerHTML = 'All Images';
    p.appendChild(o);

    // add file attributes
    var fattr;
    for (fattr in this._via_attributes['file']) {
      var o = document.createElement('option');
      o.setAttribute('value', this.image_grid_toolbar_group_by_select_get_html_id('file', fattr));
      o.innerHTML = '[file] ' + fattr;
      p.appendChild(o);
    }

    // add region attributes
    var rattr;
    for (rattr in this._via_attributes['region']) {
      var o = document.createElement('option');
      o.setAttribute('value', this.image_grid_toolbar_group_by_select_get_html_id('region', rattr));
      o.innerHTML = '[region] ' + rattr;
      p.appendChild(o);
    }
  }

  image_grid_toolbar_group_by_select_get_html_id(type: any, name: any): string {
    if (type === 'file') {
      return 'f_' + name;
    }
    if (type === 'region') {
      return 'r_' + name;
    }
  }

  image_grid_toolbar_group_by_select_parse_html_id(id) {
    if (id.startsWith('f_')) {
      return { 'attr_type': 'file', 'attr_name': id.substr(2) };
    }
    if (id.startsWith('r_')) {
      return { 'attr_type': 'region', 'attr_name': id.substr(2) };
    }
  }

  image_grid_toolbar_onchange_group_by_select(p: any): void {
    if (p.options[p.selectedIndex].value === '') {
      this.image_grid_show_all_project_images();
      return;
    }

    var v = this.image_grid_toolbar_group_by_select_parse_html_id(p.options[p.selectedIndex].value);
    let attr_type = v.attr_type;
    var attr_name = v.attr_name;
    this.image_grid_group_by(attr_type, attr_name);

    this.image_grid_group_by_select_set_disabled(attr_type, attr_name, true);
    p.blur(); // to avoid adding new groups using keyboard keys as dropdown is still in focus
  }

  image_grid_remove_html_group_panel(d: any): void {
    let p = document.getElementById('group_toolbar_' + d.group_index);
    document.getElementById('image_grid_group_panel').removeChild(p);
  }

  image_grid_add_html_group_panel(d: any): void {
    let p = document.createElement('div');
    p.classList.add('image_grid_group_toolbar');
    p.setAttribute('id', 'group_toolbar_' + d.group_index);

    let del = document.createElement('span');
    del.classList.add('text_button');
    del.setAttribute('onclick', 'image_grid_remove_group_by(this)');
    del.innerHTML = '&times;';
    p.appendChild(del);

    var prev = document.createElement('button');
    prev.innerHTML = '<';
    prev.setAttribute('value', d.group_index);
    prev.setAttribute('onclick', 'image_grid_group_prev(this)');
    p.appendChild(prev);

    var sel = document.createElement('select');
    sel.setAttribute('id', this.image_grid_group_select_get_html_id(d.group_index));
    sel.setAttribute('onchange', 'image_grid_group_value_onchange(this)');
    var i, value;
    var n = d.values.length;
    var current_value = d.values[d.current_value_index];
    for (i = 0; i < n; ++i) {
      value = d.values[i];
      var o = document.createElement('option');
      o.setAttribute('value', value);
      o.innerHTML = (i + 1) + '/' + n + ': ' + d.name + ' = ' + value;
      if (value === current_value) {
        o.setAttribute('selected', 'selected');
      }

      sel.appendChild(o);
    }
    p.appendChild(sel);

    var next = document.createElement('button');
    next.innerHTML = '>';
    next.setAttribute('value', d.group_index);
    next.setAttribute('onclick', 'image_grid_group_next(this)');
    p.appendChild(next);

    document.getElementById('image_grid_group_panel').appendChild(p);
  }

  image_grid_group_panel_set_selected_value(group_index: any): void {
    var sel = document.getElementById(image_grid_group_select_get_html_id(group_index)) as HTMLSelectElement;
    sel.selectedIndex = this._via_image_grid_group_var[group_index].current_value_index;
  }

  image_grid_group_panel_set_options(group_index: any): void {
    let sel = document.getElementById(image_grid_group_select_get_html_id(group_index));
    sel.innerHTML = '';

    var i, value;
    var n = this._via_image_grid_group_var[group_index].values.length;
    var name = this._via_image_grid_group_var[group_index].name;
    var current_value = this._via_image_grid_group_var[group_index].values[this._via_image_grid_group_var[group_index].current_value_index]
    for (i = 0; i < n; ++i) {
      value = this._via_image_grid_group_var[group_index].values[i];
      var o = document.createElement('option');
      o.setAttribute('value', value);
      o.innerHTML = (i + 1) + '/' + n + ': ' + name + ' = ' + value;
      if (value === current_value) {
        o.setAttribute('selected', 'selected');
      }
      sel.appendChild(o);
    }
  }



  image_grid_group_select_get_html_id(group_index: any): string {
    return 'gi_' + group_index;
  }

  image_grid_group_select_parse_html_id(id): number {
    return parseInt(id.substr(3));
  }

  image_grid_group_by_select_set_disabled(type: any, name: any, is_disabled: any): void {
    this.p = document.getElementById('image_grid_toolbar_group_by_select');
    var sel_option_value = this.image_grid_toolbar_group_by_select_get_html_id(type, name);

    var n = this.p.options.length;
    var option_value;
    var i;
    for (i = 0; i < n; ++i) {
      if (sel_option_value === this.p.options[i].value) {
        if (is_disabled) {
          this.p.options[i].setAttribute('disabled', 'disabled');
        } else {
          this.p.options[i].removeAttribute('disabled');
        }
        break;
      }
    }
  }

  image_grid_remove_group_by(p: any): void {
    var prefix = 'group_toolbar_';
    var group_index = parseInt(p.parentNode.id.substr(prefix.length));

    if (group_index === 0) {
      this.image_grid_show_all_project_images();
    } else {
      // merge all groups that are child of group_index
      this.image_grid_group_by_merge(this._via_image_grid_group, 0, group_index);

      let n = this._via_image_grid_group_var.length;
      p = document.getElementById('image_grid_group_panel');
      var group_panel_id;
      var i;
      for (i = group_index; i < n; ++i) {
        this.image_grid_remove_html_group_panel(this._via_image_grid_group_var[i]);
        this.image_grid_group_by_select_set_disabled(this._via_image_grid_group_var[i].type,
          this._via_image_grid_group_var[i].name,
          false);
      }
      this._via_image_grid_group_var.splice(group_index);

      this.image_grid_set_content_to_current_group();
    }
  }

  image_grid_group_by(type: any, name: any): void {
    if (Object.keys(this._via_image_grid_group).length === 0) {
      // first group
      var img_index_array = [];
      n = this._via_img_fn_list_img_index_list.length;
      var i;
      for (i = 0; i < n; ++i) {
        img_index_array.push(this._via_img_fn_list_img_index_list[i]);
      }

      this._via_image_grid_group = this.image_grid_split_array_to_group(img_index_array, type, name);
      var new_group_values = Object.keys(this._via_image_grid_group);
      this._via_image_grid_group_var = [];
      this._via_image_grid_group_var.push({ 'type': type, 'name': name, 'current_value_index': 0, 'values': new_group_values, 'group_index': 0 });

      this.image_grid_add_html_group_panel(this._via_image_grid_group_var[0]);
    } else {
      this.image_grid_group_split_all_arrays(this._via_image_grid_group, type, name);

      var i, n, value;
      var current_group_value = this._via_image_grid_group;
      n = this._via_image_grid_group_var.length;

      for (i = 0; i < n; ++i) {
        value = this._via_image_grid_group_var[i].values[this._via_image_grid_group_var[i].current_value_index];
        current_group_value = current_group_value[value];
      }
      var new_group_values = Object.keys(current_group_value);
      var group_var_index = this._via_image_grid_group_var.length;
      this._via_image_grid_group_var.push({ 'type': type, 'name': name, 'current_value_index': 0, 'values': new_group_values, 'group_index': group_var_index });
      this.image_grid_add_html_group_panel(this._via_image_grid_group_var[group_var_index]);
    }

    this.image_grid_set_content_to_current_group();
  }

  image_grid_group_by_merge(group: any, current_level: any, target_level: any): any[] {
    var child_value;
    var group_data = [];
    if (current_level === target_level) {
      return this.image_grid_group_by_collapse(group);
    } else {
      for (child_value in group) {
        group[child_value] = this.image_grid_group_by_merge(group[child_value], current_level + 1, target_level);
      }
    }
  }

  image_grid_group_by_collapse(group: any): any[] {
    var child_value;
    var child_collapsed_value;
    var group_data = [];
    for (child_value in group) {
      if (Array.isArray(group[child_value])) {
        group_data = group_data.concat(group[child_value]);
      } else {
        group_data = group_data.concat(image_grid_group_by_collapse(group[child_value]));
      }
    }
    return group_data;
  }

  // recursively collapse all arrays to list
  image_grid_group_split_all_arrays(group: any, type: any, name: any): {} {
    if (Array.isArray(group)) {
      return this.image_grid_split_array_to_group(group, type, name);
    } else {
      var group_value;
      for (group_value in group) {
        if (Array.isArray(group[group_value])) {
          group[group_value] = this.image_grid_split_array_to_group(group[group_value], type, name);
        } else {
          this.image_grid_group_split_all_arrays(group[group_value], type, name);
        }
      }
    }
  }

  image_grid_split_array_to_group(img_index_array: any, attr_type: any, attr_name: any): {} {
    var grp = {};
    var img_index, img_id, i;
    let n = img_index_array.length;
    var attr_value;

    switch (attr_type) {
      case 'file':
        for (i = 0; i < n; ++i) {
          img_index = img_index_array[i];
          img_id = this._via_image_id_list[img_index];
          if (this._via_img_metadata[img_id].file_attributes.hasOwnProperty(attr_name)) {
            attr_value = this._via_img_metadata[img_id].file_attributes[attr_name];

            if (!grp.hasOwnProperty(attr_value)) {
              grp[attr_value] = [];
            }
            grp[attr_value].push(img_index);
          }
        }
        break;
      case 'region':
        var j;
        var region_count;
        for (i = 0; i < n; ++i) {
          img_index = img_index_array[i];
          img_id = this._via_image_id_list[img_index];
          region_count = this._via_img_metadata[img_id].regions.length;
          for (j = 0; j < region_count; ++j) {
            if (this._via_img_metadata[img_id].regions[j].region_attributes.hasOwnProperty(attr_name)) {
              attr_value = this._via_img_metadata[img_id].regions[j].region_attributes[attr_name];

              if (!grp.hasOwnProperty(attr_value)) {
                grp[attr_value] = [];
              }
              if (grp[attr_value].includes(img_index)) {
                continue;
              } else {
                grp[attr_value].push(img_index);
              }
            }
          }
        }
        break;
    }
    return grp;
  }

  image_grid_group_next(p: any): void {
    var group_index = parseInt(p.value);
    var group_value_list = this._via_image_grid_group_var[group_index].values;
    var n = group_value_list.length;
    let current_index = this._via_image_grid_group_var[group_index].current_value_index;
    var next_index = current_index + 1;
    if (next_index >= n) {
      if (group_index === 0) {
        next_index = next_index - n;
        this.image_grid_jump_to_group(group_index, next_index);
      } else {
        // next of parent group
        var parent_group_index = group_index - 1;
        var parent_current_val_index = this._via_image_grid_group_var[parent_group_index].current_value_index;
        var parent_next_val_index = parent_current_val_index + 1;
        while (parent_group_index !== 0) {
          if (parent_next_val_index >= this._via_image_grid_group_var[parent_group_index].values.length) {
            parent_group_index = group_index - 1;
            parent_current_val_index = this._via_image_grid_group_var[parent_group_index].current_value_index;
            parent_next_val_index = parent_current_val_index + 1;
          } else {
            break;
          }
        }

        if (parent_next_val_index >= this._via_image_grid_group_var[parent_group_index].values.length) {
          parent_next_val_index = 0;
        }
        this.image_grid_jump_to_group(parent_group_index, parent_next_val_index);
      }
    } else {
      this.image_grid_jump_to_group(group_index, next_index);
    }
    this.image_grid_set_content_to_current_group();
  }

  image_grid_group_prev(p: any): void {
    var group_index = parseInt(p.value);
    var group_value_list = this._via_image_grid_group_var[group_index].values;
    var n = group_value_list.length;
    let current_index = this._via_image_grid_group_var[group_index].current_value_index;
    var prev_index = current_index - 1;
    if (prev_index < 0) {
      if (group_index === 0) {
        prev_index = n + prev_index;
        this.image_grid_jump_to_group(group_index, prev_index);
      } else {
        // prev of parent group
        var parent_group_index = group_index - 1;
        var parent_current_val_index = this._via_image_grid_group_var[parent_group_index].current_value_index;
        var parent_prev_val_index = parent_current_val_index - 1;
        while (parent_group_index !== 0) {
          if (parent_prev_val_index < 0) {
            parent_group_index = group_index - 1;
            parent_current_val_index = this._via_image_grid_group_var[parent_group_index].current_value_index;
            parent_prev_val_index = parent_current_val_index - 1;
          } else {
            break;
          }
        }

        if (parent_prev_val_index < 0) {
          parent_prev_val_index = this._via_image_grid_group_var[parent_group_index].values.length - 1;
        }
        this.image_grid_jump_to_group(parent_group_index, parent_prev_val_index);
      }
    } else {
      this.image_grid_jump_to_group(group_index, prev_index);
    }
    this.image_grid_set_content_to_current_group();
  }


  image_grid_group_value_onchange(p: any): void {
    var group_index = this.image_grid_group_select_parse_html_id(p.id);
    this.image_grid_jump_to_group(group_index, p.selectedIndex);
    this.image_grid_set_content_to_current_group();
  }

  image_grid_jump_to_group(group_index: any, value_index: any): void {
    var n = this._via_image_grid_group_var[group_index].values.length;
    if (value_index >= n || value_index < 0) {
      return;
    }

    this._via_image_grid_group_var[group_index].current_value_index = value_index;
    this.image_grid_group_panel_set_selected_value(group_index);

    // reset the value of lower groups
    var i, value;
    if (group_index + 1 < this._via_image_grid_group_var.length) {
      let e = _via_image_grid_group;
      for (i = 0; i <= group_index; ++i) {
        value = this._via_image_grid_group_var[i].values[this._via_image_grid_group_var[i].current_value_index];
        e = e[value];
      }

      for (i = group_index + 1; i < this._via_image_grid_group_var.length; ++i) {
        this._via_image_grid_group_var[i].values = Object.keys(e);
        if (this._via_image_grid_group_var[i].values.length === 0) {
          this._via_image_grid_group_var[i].current_value_index = -1;
          this._via_image_grid_group_var.splice(i);
          this.image_grid_group_panel_set_options(i);
          break;
        } else {
          this._via_image_grid_group_var[i].current_value_index = 0;
          value = this._via_image_grid_group_var[i].values[0]
          e = e[value];
          this.image_grid_group_panel_set_options(i);
        }
      }
    }
  }

  image_grid_set_content_to_current_group(): void {
    n = this._via_image_grid_group_var.length;

    if (n === 0) {
      this.image_grid_show_all_project_images();
    } else {
      var group_img_index_list = [];
      let img_index_list = _via_image_grid_group;
      var i, n, value, current_value_index;
      for (i = 0; i < n; ++i) {
        value = this._via_image_grid_group_var[i].values[this._via_image_grid_group_var[i].current_value_index];
        img_index_list = img_index_list[value];
      }

      if (Array.isArray(img_index_list)) {
        this.image_grid_set_content(img_index_list);
      } else {
        console.log('Error: image_grid_set_content_to_current_group(): expected array while got ' + typeof (img_index_list));
      }
    }
  }

  image_grid_page_next(): void {
    this._via_image_grid_stack_prev_page.push(this._via_image_grid_page_first_index);
    this._via_image_grid_page_first_index = this._via_image_grid_page_last_index;

    this.image_grid_clear_content();
    this._via_image_grid_load_ongoing = true;
    this.image_grid_page_nav_show_cancel();
    this.image_grid_content_append_img(this._via_image_grid_page_first_index);
  }

  image_grid_page_prev(): void {
    this._via_image_grid_page_first_index = this._via_image_grid_stack_prev_page.pop();
    this._via_image_grid_page_last_index = -1;

    this.image_grid_clear_content();
    this._via_image_grid_load_ongoing = true;
    this.image_grid_page_nav_show_cancel();
    this.image_grid_content_append_img(this._via_image_grid_page_first_index);
  }

  image_grid_page_nav_show_cancel(): void {
    var info = document.getElementById('image_grid_nav');
    var html = [];
    html.push('<span>Loading images ... </span>');
    html.push('<span class="text_button" onclick="image_grid_cancel_load_ongoing()">Cancel</span>');
    info.innerHTML = html.join('');
  }

  image_grid_cancel_load_ongoing(): void {
    this._via_image_grid_load_ongoing = false;
  }


  // everything to do with image zooming
  image_zoom_init(): void {

  };

  //
  // hooks for sub-modules
  // implemented by sub-modules
  //
  //function _via_hook_next_image() {}
  //function _via_hook_prev_image() {}


  ////////////////////////////////////////////////////////////////////////////////
  //
  // Code borrowed from via2 branch
  // - in future, the <canvas> based reigon shape drawing will be replaced by <svg>
  //   because svg allows independent manipulation of individual regions without
  //   requiring to clear the canvas every time some region is updated.
  //
  ////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////
  //
  // @file        _via_region.js
  // @description Implementation of region shapes like rectangle, circle, etc.
  // @author      Abhishek Dutta <adutta@robots.ox.ac.uk>
  // @date        17 June 2017
  //
  ////////////////////////////////////////////////////////////////////////////////

  //  interface via_region {
  //   shape: any;
  //   id: any;
  //   data_img_space: any;
  //   scale_factor: any;
  //   offset_x: any;
  //   offset_y: any;
  //   recompute_svg: false;
  //   attributes: {};
  //   is_inside: any;
  //   is_on_edge: any;
  //   move: any;
  //   resize: any;
  //   initialize: any;
  //   dist_to_nearest_edge: any;
  //   //  _via_region(shape: any, id: any, data_img_space: any, view_scale_factor: any, view_offset_x: any, view_offset_y: any);


  // };

  //   class _via_REGION implements via_region {
  //     shape: any;
  //     id: any;
  //     data_img_space: any;
  //     scale_factor: any;
  //     offset_x: any;
  //     offset_y: any;
  //     recompute_svg: false;
  //     attributes: {};
  //     constructor(equiva = via_region ) {
  //     this.shape = shape;
  //     this.id = id;
  //     this.scale_factor = view_scale_factor;
  //     this.offset_x = view_offset_x;
  //     this.offset_y = view_offset_y;
  //     this.recompute_svg = false;
  //     this.attributes = {}
  // };
  //   };


  static _via_region = class {
    shape: any;
    id: any;
    scale_factor: any;
    data_img_space: any;
    offset_x: any;
    offset_y: any;
    view_offset_x: any;
    view_offset_y: any;
    recompute_svg: boolean;
    attributes: {};
    dview: any;
    dimg: any[];
    svg_attributes: any[];
    constructor(shape: any, id: any, scale_factor: any, data_img_space: any, offset_x: any, offset_y: any) {
      this.shape = shape;
      this.id = id;
      this.scale_factor = this.scale_factor;
      this.offset_x = this.view_offset_x;
      this.offset_y = this.view_offset_y;
      this.recompute_svg = false;
      this.attributes = {};
    }
    _via_region(shape, id, data_img_space, view_scale_factor, view_offset_x, view_offset_y) {
      this.shape = shape;
      this.id = id;
      this.scale_factor = view_scale_factor;
      this.offset_x = view_offset_x;
      this.offset_y = view_offset_y;
      this.recompute_svg = false;
      this.attributes = {};
      let n = data_img_space.length;
      var i;
      this.dview = new Array(n);
      this.dimg = new Array(n);

      if (n !== 0) {
        // IMPORTANT:
        // to avoid any rounding issues (caused by floating scale factor), we stick to
        // the principal that image space coordinates are the ground truth for every region.
        // Hence, we proceed as:
        //   * user drawn regions in view space is first converted to image space
        //   * this region in image space is now used to initialize region in view space
        for (i = 0; i < n; i++) {
          this.dimg[i] = data_img_space[i];

          var offset = this.offset_x;
          if (i % 2 !== 0) {
            // y coordinate
            offset = this.offset_y;
          }
          this.dview[i] = Math.round(this.dimg[i] * this.scale_factor) + offset;
        }
      }
    

      // set svg attributes for each shape
      switch (this.shape) {
        case "rect":
          _via_region_rect.call(this);
          this.svg_attributes = ['x', 'y', 'width', 'height'];
          break;
        case "circle":
          _via_region_circle.call(this);
          this.svg_attributes = ['cx', 'cy', 'r'];
          break;
        case "ellipse":
          _via_region_ellipse.call(this);
          this.svg_attributes = ['cx', 'cy', 'rx', 'ry', 'transform'];
          break;
        case "line":
          _via_region_line.call(this);
          this.svg_attributes = ['x1', 'y1', 'x2', 'y2'];
          break;
        case "polyline":
          _via_region_polyline.call(this);
          this.svg_attributes = ['points'];
          break;
        case "polygon":
          _via_region_polygon.call(this);
          this.svg_attributes = ['points'];
          break;
        case "point":
          _via_region_point.call(this);
          // point is a special circle with minimal radius required for visualization
          this.shape = 'circle';
          this.svg_attributes = ['cx', 'cy', 'r'];
          break;
      }

      // this.initialize();
    };
  };
          
  // _via_region.prototype.prepare_svg_element = function () {
  //   var _VIA_SVG_NS = "http://www.w3.org/2000/svg";
  //   this.svg_element = document.createElementNS(_VIA_SVG_NS, this.shape);
  //   this.svg_string = '<' + this.shape;
  //   this.svg_element.setAttributeNS(null, 'id', this.id);

  //   var n = this.svg_attributes.length;
  //   for (var i = 0; i < n; i++) {
  //     this.svg_element.setAttributeNS(null, this.svg_attributes[i], this[this.svg_attributes[i]]);
  //     this.svg_string += ' ' + this.svg_attributes[i] + '="' + this[this.svg_attributes[i]] + '"';
  //   }
  //   this.svg_string += '/>';
  // }

  // _via_region.prototype.get_svg_element = function () {
  //   if (this.recompute_svg) {
  //     this.prepare_svg_element();
  //     this.recompute_svg = false;
  //   }
  //   return this.svg_element;
  // }

  // _via_region.prototype.get_svg_string = function () {
  //   if (this.recompute_svg) {
  //     this.prepare_svg_element();
  //     this.recompute_svg = false;
  //   }
  //   return this.svg_string;
  // }





  // ///
  // /// Region shape : rectangle
  // ///
  // _via_region_rect(): void
  // {
  //   this.is_inside = _via_region_rect.prototype.is_inside;
  //   this.is_on_edge = _via_region_rect.prototype.is_on_edge;
  //   this.move = _via_region_rect.prototype.move;
  //   this.resize = _via_region_rect.prototype.resize;
  //   this.initialize = _via_region_rect.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_rect.prototype.dist_to_nearest_edge;
  // }

  // _via_region_rect.prototype.initialize = function () {
  //   // ensure that this.(x,y) corresponds to top-left corner of rectangle
  //   // Note: this.(x2,y2) is defined for convenience in calculations
  //   if (this.dview[0] < this.dview[2]) {
  //     this.x = this.dview[0];
  //     this.x2 = this.dview[2];
  //   } else {
  //     this.x = this.dview[2];
  //     this.x2 = this.dview[0];
  //   }
  //   if (this.dview[1] < this.dview[3]) {
  //     this.y = this.dview[1];
  //     this.y2 = this.dview[3];
  //   } else {
  //     this.y = this.dview[3];
  //     this.y2 = this.dview[1];
  //   }
  //   this.width = this.x2 - this.x;
  //   this.height = this.y2 - this.y;
  //   this.recompute_svg = true;
  // }

  // ///
  // /// Region shape : circle
  // ///
  //  _via_region_circle(): void
  // {
  //   this.is_inside = _via_region_circle.prototype.is_inside;
  //   this.is_on_edge = _via_region_circle.prototype.is_on_edge;
  //   this.move = _via_region_circle.prototype.move;
  //   this.resize = _via_region_circle.prototype.resize;
  //   this.initialize = _via_region_circle.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_circle.prototype.dist_to_nearest_edge;
  // }

  // _via_region_circle.prototype.initialize = function () {
  //   this.cx = this.dview[0];
  //   this.cy = this.dview[1];
  //   var dx = this.dview[2] - this.dview[0];
  //   var dy = this.dview[3] - this.dview[1];
  //   this.r = Math.round(Math.sqrt(dx * dx + dy * dy));
  //   this.r2 = this.r * this.r;
  //   this.recompute_svg = true;
  // }


  // ///
  // /// Region shape : ellipse
  // ///
  //   _via_region_ellipse(): void
  // {
  //   this.is_inside = _via_region_ellipse.prototype.is_inside;
  //   this.is_on_edge = _via_region_ellipse.prototype.is_on_edge;
  //   this.move = _via_region_ellipse.prototype.move;
  //   this.resize = _via_region_ellipse.prototype.resize;
  //   this.initialize = _via_region_ellipse.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_ellipse.prototype.dist_to_nearest_edge;
  // }

  // _via_region_ellipse.prototype.initialize = function () {
  //   this.cx = this.dview[0];
  //   this.cy = this.dview[1];
  //   this.rx = Math.abs(this.dview[2] - this.dview[0]);
  //   this.ry = Math.abs(this.dview[3] - this.dview[1]);

  //   this.inv_rx2 = 1 / (this.rx * this.rx);
  //   this.inv_ry2 = 1 / (this.ry * this.ry);

  //   this.recompute_svg = true;
  // }



  // ///
  // /// Region shape : line
  // ///
  //  _via_region_line(): void
  // {
  //   this.is_inside = _via_region_line.prototype.is_inside;
  //   this.is_on_edge = _via_region_line.prototype.is_on_edge;
  //   this.move = _via_region_line.prototype.move;
  //   this.resize = _via_region_line.prototype.resize;
  //   this.initialize = _via_region_line.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_line.prototype.dist_to_nearest_edge;
  // }

  // _via_region_line.prototype.initialize = function () {
  //   this.x1 = this.dview[0];
  //   this.y1 = this.dview[1];
  //   this.x2 = this.dview[2];
  //   this.y2 = this.dview[3];
  //   this.dx = this.x1 - this.x2;
  //   this.dy = this.y1 - this.y2;
  //   this.mconst = (this.x1 * this.y2) - (this.x2 * this.y1);

  //   this.recompute_svg = true;
  // }


  // ///
  // /// Region shape : polyline
  // ///
  //   _via_region_polyline(): void
  // {
  //   this.is_inside = _via_region_polyline.prototype.is_inside;
  //   this.is_on_edge = _via_region_polyline.prototype.is_on_edge;
  //   this.move = _via_region_polyline.prototype.move;
  //   this.resize = _via_region_polyline.prototype.resize;
  //   this.initialize = _via_region_polyline.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_polyline.prototype.dist_to_nearest_edge;
  // }

  // _via_region_polyline.prototype.initialize = function () {
  //   var n = this.dview.length;
  //   var points = new Array(n / 2);
  //   var points_index = 0;
  //   for (var i = 0; i < n; i += 2) {
  //     points[points_index] = (this.dview[i] + ' ' + this.dview[i + 1]);
  //     points_index++;
  //   }
  //   this.points = points.join(',');
  //   this.recompute_svg = true;
  // }


  // ///
  // /// Region shape : polygon
  // ///
  //  _via_region_polygon(): void
  // {
  //   this.is_inside = _via_region_polygon.prototype.is_inside;
  //   this.is_on_edge = _via_region_polygon.prototype.is_on_edge;
  //   this.move = _via_region_polygon.prototype.move;
  //   this.resize = _via_region_polygon.prototype.resize;
  //   this.initialize = _via_region_polygon.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_polygon.prototype.dist_to_nearest_edge;
  // }

  // _via_region_polygon.prototype.initialize = function () {
  //   var n = this.dview.length;
  //   var points = new Array(n / 2);
  //   var points_index = 0;
  //   for (var i = 0; i < n; i += 2) {
  //     points[points_index] = (this.dview[i] + ' ' + this.dview[i + 1]);
  //     points_index++;
  //   }
  //   this.points = points.join(',');
  //   this.recompute_svg = true;
  // }


  // ///
  // /// Region shape : point
  // ///
  //  _via_region_point(): void
  // {
  //   this.is_inside = _via_region_point.prototype.is_inside;
  //   this.is_on_edge = _via_region_point.prototype.is_on_edge;
  //   this.move = _via_region_point.prototype.move;
  //   this.resize = _via_region_point.prototype.resize
  //   this.initialize = _via_region_point.prototype.initialize;
  //   this.dist_to_nearest_edge = _via_region_point.prototype.dist_to_nearest_edge;
  // }

  // _via_region_point.prototype.initialize = function () {
  //   this.cx = this.dview[0];
  //   this.cy = this.dview[1];
  //   this.r = 2;
  //   this.r2 = this.r * this.r;
  //   this.recompute_svg = true;
  // }

  //
  // image buffering
  //

  _via_cancel_current_image_loading(): void {
    var panel = document.getElementById('project_panel_title');
    panel.innerHTML = 'Project';
    this._via_is_loading_current_image = false;
  }

  _via_show_img(img_index: any): void {
    if (this._via_is_loading_current_image) {
      return;
    }

    var img_id = this._via_image_id_list[img_index];

    if (!this._via_img_metadata.hasOwnProperty(img_id)) {
      console.log('_via_show_img(): [' + img_index + '] ' + img_id + ' does not exist!')
      this.show_message('The requested image does not exist!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS)
      return;
    }

    // file_resolve() is not necessary for files selected using browser's file selector
    if (typeof (this._via_img_fileref[img_id]) === 'undefined' || this._via_img_fileref[img_id]! instanceof File) {
      // try preload from local file or url
      if (typeof (this._via_img_src[img_id]) === 'undefined' || this._via_img_src[img_id] === '') {
        if (is_url(this._via_img_metadata[img_id].filename)) {
          this._via_img_src[img_id] = this._via_img_metadata[img_id].filename;
          this._via_show_img(img_index);
          return;
        } else {
          var search_path_list = _via_file_get_search_path_list();
          if (search_path_list.length === 0) {
            search_path_list.push(''); // search using just the filename
          }

          this._via_file_resolve(img_index, search_path_list).then(function (ok_file_index) {
            this._via_show_img(img_index);
          }, function (err_file_index) {
            this.show_page_404(img_index);
          });
          return;
        }
      }
    }

    if (this._via_buffer_img_index_list.includes(img_index)) {
      this._via_current_image_loaded = false;
      this._via_show_img_from_buffer(img_index).then(function (ok_img_index) {
        // trigger preload of images in buffer corresponding to img_index
        // but, wait until all previous promises get cancelled
        Promise.all(this._via_preload_img_promise_list).then(function (values) {
          this._via_preload_img_promise_list = [];
          var preload_promise = this._via_img_buffer_start_preload(img_index, 0)
          _via_preload_img_promise_list.push(preload_promise);
        });
      }, function (err_img_index) {
        console.log('_via_show_img_from_buffer() failed for file: ' + this._via_image_filename_list[err_img_index]);
        this._via_current_image_loaded = false;
      });
    } else {
      // image not in buffer, so first add this image to buffer
      this._via_is_loading_current_image = true;
      this.img_loading_spinbar(img_index, true);
      this._via_img_buffer_add_image(img_index).then(function (ok_img_index) {
        this._via_is_loading_current_image = false;
        this.img_loading_spinbar(img_index, false);
        this._via_show_img(img_index);
      }, function (err_img_index) {
        this._via_is_loading_current_image = false;
        this.img_loading_spinbar(img_index, false);
        this.show_page_404(img_index);
        console.log('_via_img_buffer_add_image() failed for file: ' + this._via_image_filename_list[err_img_index]);
      });
    }

    // add zooming
    this._via_add_zoom_for_image(img_index)

  }

  _via_add_zoom_for_image(img_index) {
    // var img = document.getElementById('bim' + img_index);
    // img.style.backgroundRepeat = 'no-repeat';
    // img.style.backgroundImage = 'url("'+img.src+'")';
    // tramsparent_img = 'data:image/svg+xml;base64,'+window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="'+img.naturalWidth+'" height="'+img.naturalHeight+'"></svg>');
    // img.src = transparentSpaceFiller;
    // _via_img_panel.style.backgroundSize
  }

  _via_buffer_hide_current_image(): void {
    this.img_fn_list_ith_entry_selected(this._via_image_index, false);
    this._via_clear_reg_canvas(); // clear old region shapes
    if (this._via_current_image) {
      this._via_current_image.classList.remove('visible');
    }
  }

  _via_show_img_from_buffer(img_index: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      this._via_buffer_hide_current_image();

      var cimg_html_id = this._via_img_buffer_get_html_id(img_index);
      this._via_current_image = document.getElementById(cimg_html_id);
      if (!this._via_current_image) {
        // the said image is not present in buffer, which could be because
        // the image got removed from the buffer
        err_callback(img_index);
        return;
      }
      this._via_current_image.classList.add('visible'); // now show the new image

      this._via_image_index = img_index;
      this._via_image_id = this._via_image_id_list[this._via_image_index];
      this._via_current_image_filename = this._via_img_metadata[this._via_image_id].filename;
      this._via_current_image_loaded = true;

      var arr_index = this._via_buffer_img_index_list.indexOf(img_index);
      this._via_buffer_img_shown_timestamp[arr_index] = Date.now(); // update shown timestamp

      // update the current state of application
      this._via_click_x0 = 0; this._via_click_y0 = 0;
      this._via_click_x1 = 0; this._via_click_y1 = 0;
      this._via_is_user_drawing_region = false;
      this._via_is_window_resized = false;
      this._via_is_user_resizing_region = false;
      this._via_is_user_moving_region = false;
      this._via_is_user_drawing_polygon = false;
      this._via_is_region_selected = false;
      this._via_user_sel_region_id = -1;
      this._via_current_image_width = this._via_current_image.naturalWidth;
      this._via_current_image_height = this._via_current_image.naturalHeight;

      if (this._via_current_image_width === 0 || this._via_current_image_height === 0) {
        // for error image icon
        this._via_current_image_width = 640;
        this._via_current_image_height = 480;
      }

      // set the size of canvas
      // based on the current dimension of browser window
      var de = document.documentElement;
      var image_panel_width = de.clientWidth - this.leftsidebar.clientWidth - 20;
      if (this.leftsidebar.style.display === 'none') {
        image_panel_width = de.clientWidth;
      }
      var image_panel_height = de.clientHeight - 2 * this.ui_top_panel.offsetHeight;

      this._via_canvas_width = this._via_current_image_width;
      this._via_canvas_height = this._via_current_image_height;

      if (this._via_canvas_width > image_panel_width) {
        // resize image to match the panel width
        var scale_width = image_panel_width / this._via_current_image.naturalWidth;
        this._via_canvas_width = image_panel_width;
        this._via_canvas_height = this._via_current_image.naturalHeight * scale_width;
      }
      if (this._via_canvas_height > this.image_panel_height) {
        // resize further image if its height is larger than the image panel
        var scale_height = image_panel_height / this._via_canvas_height;
        this._via_canvas_height = image_panel_height;
        this._via_canvas_width = this._via_canvas_width * scale_height;
      }
      this._via_canvas_width = Math.round(_via_canvas_width);
      this._via_canvas_height = Math.round(_via_canvas_height);
      this._via_canvas_scale = this._via_current_image.naturalWidth / this._via_canvas_width;
      this._via_canvas_scale_without_zoom = this._via_canvas_scale;
      this.set_all_canvas_size(this._via_canvas_width, this._via_canvas_height);
      //set_all_canvas_scale(_via_canvas_scale_without_zoom);

      // reset all regions to "not selected" state
      this.toggle_all_regions_selection(false);

      // ensure that all the canvas are visible
      this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE);

      // update img_fn_list
      this.img_fn_list_ith_entry_selected(this._via_image_index, true);
      this.img_fn_list_scroll_to_current_file();

      // refresh the annotations panel
      this.annotation_editor_update_content();

      this._via_load_canvas_regions(); // image to canvas space transform
      this._via_redraw_reg_canvas();
      _via_reg_canvas.focus();

      // Preserve zoom level
      if (this._via_is_canvas_zoomed) {
        this.set_zoom(this._via_canvas_zoom_level_index);
      }
      ok_callback(img_index);
    });
  }

  _via_img_buffer_add_image(img_index: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      if (this._via_buffer_img_index_list.includes(img_index)) {
        //console.log('_via_img_buffer_add_image(): image ' + img_index + ' already exists in buffer!')
        ok_callback(img_index);
        return;
      }

      var img_id = this._via_image_id_list[img_index];
      var img_filename = this._via_img_metadata[img_id].filename;
      if (!this._via_img_metadata.hasOwnProperty(img_id)) {
        err_callback(img_index);
        return;
      }

      // check if user has given access to local file using
      // browser's file selector
      if (this._via_img_fileref[img_id] instanceof File) {
        var tmp_file_object_url = URL.createObjectURL(this._via_img_fileref[img_id]);
        var img_id = this._via_image_id_list[img_index];
        var bimg = document.createElement('img');
        bimg.setAttribute('id', _via_img_buffer_get_html_id(img_index));
        bimg.setAttribute('src', tmp_file_object_url);
        bimg.setAttribute('alt', 'Image loaded from base64 data of a local file selected by user.');
        bimg.addEventListener('error', function () {
          URL.revokeObjectURL(tmp_file_object_url);
          project_file_load_on_fail(img_index);
          err_callback(img_index);
        });
        bimg.addEventListener('load', function () {
          URL.revokeObjectURL(tmp_file_object_url);
          img_stat_set(img_index, [bimg.naturalWidth, bimg.naturalHeight]);
          _via_img_panel.insertBefore(bimg, _via_reg_canvas);
          project_file_load_on_success(img_index);
          img_fn_list_ith_entry_add_css_class(img_index, 'buffered')
          // add timestamp so that we can apply Least Recently Used (LRU)
          // scheme to remove elements when buffer is full
          var arr_index = _via_buffer_img_index_list.length;
          _via_buffer_img_index_list.push(img_index);
          _via_buffer_img_shown_timestamp[arr_index] = Date.now(); // though, not seen yet
          ok_callback(img_index);
        });
        return;
      }

      if (typeof (this._via_img_src[img_id]) === 'undefined' || this._via_img_src[img_id] === '') {
        err_callback(img_index);
      } else {
        var img_id = this._via_image_id_list[img_index];

        var bimg = document.createElement('img');
        bimg.setAttribute('id', _via_img_buffer_get_html_id(img_index));
        this._via_img_src[img_id] = this._via_img_src[img_id].replace('#', '%23');
        bimg.setAttribute('src', this._via_img_src[img_id]);
        if (this._via_img_src[img_id].startsWith('data:image')) {
          bimg.setAttribute('alt', 'Source: image data in base64 format');
        } else {
          bimg.setAttribute('alt', 'Source: ' + this._via_img_src[img_id]);
        }

        bimg.addEventListener('abort', function () {
          project_file_load_on_fail(img_index);
          err_callback(img_index);
        });
        bimg.addEventListener('error', function () {
          project_file_load_on_fail(img_index);
          err_callback(img_index);
        });

        // Note: _via_current_image.{naturalWidth,naturalHeight} is only accessible after
        // the "load" event. Therefore, all processing must happen inside this event handler.
        bimg.addEventListener('load', function () {
          img_stat_set(img_index, [bimg.naturalWidth, bimg.naturalHeight]);
          _via_img_panel.insertBefore(bimg, _via_reg_canvas);

          project_file_load_on_success(img_index);
          img_fn_list_ith_entry_add_css_class(img_index, 'buffered')
          // add timestamp so that we can apply Least Recently Used (LRU)
          // scheme to remove elements when buffer is full
          var arr_index = _via_buffer_img_index_list.length;
          _via_buffer_img_index_list.push(img_index);
          _via_buffer_img_shown_timestamp[arr_index] = Date.now(); // though, not seen yet
          ok_callback(img_index);
        }, false);
      }
    }); //REMOVED FALSE HERE TOO false)
  }

  _via_img_buffer_get_html_id(img_index: any): string {
    return 'bim' + img_index;
  }

  _via_img_buffer_parse_html_id(html_id: any): number {
    return parseInt(html_id.substr(3));
  }

  _via_img_buffer_start_preload(img_index: any, preload_index: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      this._via_buffer_preload_img_index = img_index;
      this._via_img_buffer_preload_img(this._via_buffer_preload_img_index, 0).then(function (ok_img_index_list) {
        ok_callback(ok_img_index_list);
      });
    });
  }

  _via_img_buffer_preload_img(img_index: any, preload_index: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var preload_img_index = this._via_img_buffer_get_preload_img_index(img_index, preload_index);

      if (this._via_buffer_preload_img_index !== this._via_image_index) {
        ok_callback([]);
        return;
      }

      // ensure that there is sufficient buffer space left for preloading image
      if (this._via_buffer_img_index_list.length > this._via_settings_core_buffer_size) {
        while (this._via_buffer_img_index_list.length > this._via_settings_core_buffer_size) {
          this._via_img_buffer_remove_least_useful_img();
          if (this._via_image_index !== this._via_buffer_preload_img_index) {
            // current image has changed therefore, we need to cancel this preload operation
            ok_callback([]);
            return;
          }
        }
      }

      this._via_img_buffer_add_image(preload_img_index).then(function (ok_img_index) {
        if (this._via_image_index !== this._via_buffer_preload_img_index) {
          ok_callback([ok_img_index]);
          return;
        }

        var next_preload_index = preload_index + 1;
        if (next_preload_index !== this.VIA_IMG_PRELOAD_COUNT) {
          this._via_img_buffer_preload_img(img_index, next_preload_index).then(function (ok_img_index_list) {
            ok_img_index_list.push(ok_img_index)
            ok_callback(ok_img_index_list);
          });
        } else {
          ok_callback([ok_img_index]);
        }
      }, function (err_img_index) {
        // continue with preload of other images in sequence
        var next_preload_index = preload_index + 1;
        if (next_preload_index !== this.VIA_IMG_PRELOAD_COUNT) {
          this._via_img_buffer_preload_img(img_index, next_preload_index).then(function (ok_img_index_list) {
            ok_callback(ok_img_index_list);
          });
        } else {
          ok_callback([]);
        }
      });
    });
  }

  _via_img_buffer_get_preload_img_index(img_index: any, preload_index: any): any {
    var preload_img_index = img_index + this.VIA_IMG_PRELOAD_INDICES[preload_index];
    if ((preload_img_index < 0) || (preload_img_index >= this._via_img_count)) {
      if (preload_img_index < 0) {
        preload_img_index = this._via_img_count + preload_img_index;
      } else {
        preload_img_index = preload_img_index - this._via_img_count;
      }
    }
    return preload_img_index;
  }

  // the least useful image is, one with the following properties:
  // - preload list for current image will always get loaded, so there is no point in removing them from buffer
  // - all the other images in buffer were seen more recently by the image
  // - all the other images are closer (in terms of their image index) to the image currently being shown
  _via_img_buffer_remove_least_useful_img(): void {
    let not_in_preload_list = this._via_buffer_img_not_in_preload_list();
    var oldest_buffer_index = this._via_buffer_get_oldest_in_list(not_in_preload_list);

    if (this._via_buffer_img_index_list[oldest_buffer_index] !== this._via_image_index) {
      //console.log('removing oldest_buffer index: ' + oldest_buffer_index);
      this._via_buffer_remove(oldest_buffer_index);
    } else {
      var furthest_buffer_index = this._via_buffer_get_buffer_furthest_from_current_img();
      this._via_buffer_remove(furthest_buffer_index);
    }
  }

  _via_buffer_remove(buffer_index: any): void {
    var img_index = _via_buffer_img_index_list[buffer_index];
    var bimg_html_id = this._via_img_buffer_get_html_id(img_index);
    var bimg = document.getElementById(bimg_html_id);
    if (bimg) {
      _via_buffer_img_index_list.splice(buffer_index, 1);
      _via_buffer_img_shown_timestamp.splice(buffer_index, 1);
      _via_img_panel.removeChild(bimg);

      this.img_fn_list_ith_entry_remove_css_class(img_index, 'buffered')
    }
  }

  _via_buffer_remove_all(): void {
    var i, n;
    n = _via_buffer_img_index_list.length;
    for (i = 0; i < n; ++i) {
      var img_index = _via_buffer_img_index_list[i];
      var bimg_html_id = this._via_img_buffer_get_html_id(img_index);
      var bimg = document.getElementById(bimg_html_id);
      if (bimg) {
        this._via_img_panel.removeChild(bimg);
      }
    }
    this._via_buffer_img_index_list = [];
    this._via_buffer_img_shown_timestamp = [];
  }

  _via_buffer_get_oldest_in_list(not_in_preload_list: any): number {
    var i;
    var n = not_in_preload_list.length;
    var oldest_buffer_index = -1;
    var oldest_buffer_timestamp = Date.now();

    for (i = 0; i < n; ++i) {
      var _via_buffer_index = not_in_preload_list[i];
      if (this._via_buffer_img_shown_timestamp[_via_buffer_index] < oldest_buffer_timestamp) {
        oldest_buffer_timestamp = this._via_buffer_img_shown_timestamp[i];
        oldest_buffer_index = i;
      }
    }
    return oldest_buffer_index;
  }

  _via_buffer_get_buffer_furthest_from_current_img(): number {
    var now_img_index = this._via_image_index;
    let i, dist1, dist2, dist;
    let n = _via_buffer_img_index_list.length;
    var furthest_buffer_index = 0;
    dist1 = Math.abs(_via_buffer_img_index_list[0] - now_img_index);
    dist2 = this._via_img_count - dist1; // assuming the list is circular
    var furthest_buffer_dist = Math.min(dist1, dist2);

    for (i = 1; i < n; ++i) {
      dist1 = Math.abs(_via_buffer_img_index_list[i] - now_img_index);
      dist2 = this._via_img_count - dist1; // assuming the list is circular
      dist = Math.min(dist1, dist2);
      // image has been seen by user at least once
      if (dist > furthest_buffer_dist) {
        furthest_buffer_dist = dist;
        furthest_buffer_index = i;
      }
    }
    return furthest_buffer_index;
  }

  _via_buffer_img_not_in_preload_list(): any[] {
    var preload_list = _via_buffer_get_current_preload_list();
    var i;
    let not_in_preload_list = [];
    for (i = 0; i < this._via_buffer_img_index_list.length; ++i) {
      if (!preload_list.includes(this._via_buffer_img_index_list[i])) {
        not_in_preload_list.push(i);
      }
    }
    return not_in_preload_list;
  }

  _via_buffer_get_current_preload_list(): number[] {
    var i;
    var preload_list = [this._via_image_index];
    let img_index = this._via_image_index;
    for (i = 0; i < this.VIA_IMG_PRELOAD_COUNT; ++i) {
      var preload_index = img_index + this.VIA_IMG_PRELOAD_INDICES[i];
      if (preload_index < 0) {
        preload_index = this._via_img_count + preload_index;
      }
      if (preload_index >= this._via_img_count) {
        preload_index = preload_index - this._via_img_count;
      }
      preload_list.push(preload_index);
    }
    return preload_list;
  }

  //
  // settings
  //
  settings_panel_toggle(): void {
    if (this._via_display_area_content_name === this.VIA_DISPLAY_AREA_CONTENT_NAME.SETTINGS) {
      if (this._via_display_area_content_name_prev !== '') {
        this.set_display_area_content(this._via_display_area_content_name_prev);
      } else {
        this.show_single_image_view();
        this._via_redraw_reg_canvas();
      }
    }
    else {
      this.settings_init();
      this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.SETTINGS);
    }
  }

  settings_init(): void {
    this.settings_region_visualisation_update_options();
    this.settings_filepath_update_html();
    this.settings_show_current_value();
  }

  settings_save(): void {
    // check if default path was updated
    var default_path_updated = false;
    if (document.getElementById('_via_settings_core_default_filepath').nodeValue !== this._via_settings_core_default_filepath) {
      default_path_updated = true;
    }

    p = document.getElementById('settings_panel');
    var vl = p.getElementsByClassName('value');
    var n = vl.length;
    var i;
    for (i = 0; i < n; ++i) {
      var s = vl[i].childNodes[1];
      var sid_parts = s.id.split('.');
      if (sid_parts[0] === '_via_settings') {
        var el = this._via_settings;
        var found = true;
        var j;
        for (j = 1; j < sid_parts.length - 1; ++j) {
          if (el.hasOwnProperty(sid_parts[j])) {
            el = el[sid_parts[j]];
          } else {
            // unrecognized setting
            found = false;
            break;
          }
        }
        if (found) {
          var param = sid_parts[sid_parts.length - 1];
          if (s.nodeValue !== '' || typeof (s.nodeValue) !== 'undefined') {
            el[param] = s.nodeValue;
          }
        }
      }
    }

    // non-standard settings
    var p;
    p = document.getElementById('settings_input_new_filepath');
    if (p.nodeValue !== '') {
      this.project_filepath_add(p.nodeValue.trim());
    }
    p = document.getElementById('project_name');
    if (p.nodeValue !== _via_settings.project.name) {
      p.nodeValue = _via_settings.project.name;
    }

    if (default_path_updated) {
      this._via_file_resolve_all_to_default_filepath();
      this._via_show_img(this._via_image_index);
    }

    this.show_message('Settings saved.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    this.settings_panel_toggle();
  }

  settings_show_current_value(): void {
    let p = document.getElementById('settings_panel');
    var vl = p.getElementsByClassName('value');
    var n = vl.length;
    var i;
    for (i = 0; i < n; ++i) {
      var s = vl[i].childNodes[1];
      var sid_parts = this.s.id.split('.');
      if (sid_parts[0] === '_via_settings') {
        var el = _via_settings;
        var found = true;
        var j;
        for (j = 1; j < sid_parts.length; ++j) {
          if (el.hasOwnProperty(sid_parts[j])) {
            el = el[sid_parts[j]];
          } else {
            // unrecognized setting
            found = false;
            break;
          }
        }

        if (found) {
          this.s.nodeValue = el;
        }
      }
    }
  }

  settings_region_visualisation_update_options(): void {
    var region_setting_list = {
      'region_label': {
        'default_option': '__via_region_id__',
        'default_label': 'Region id (1, 2, ...)',
        'label_prefix': 'Show value of region attribute: ',
      }, 'region_color': {
        'default_option': '__via_default_region_color__',
        'default_label': 'Default Region Colour',
        'label_prefix': 'Based on value of region attribute: ',
      }
    };

    for (var setting in region_setting_list) {
      var select = document.getElementById('_via_settings.ui.image.' + setting);
      select.innerHTML = '';
      var default_option = document.createElement('option');
      default_option.setAttribute('value', region_setting_list[setting]['default_option']);
      if (_via_settings.ui.image[setting] === region_setting_list[setting]['default_option']) {
        default_option.setAttribute('selected', 'selected');
      }
      default_option.innerHTML = region_setting_list[setting]['default_label'];
      select.appendChild(default_option);

      // options: add region attributes
      var rattr;
      for (rattr in this._via_attributes['region']) {
        var o = document.createElement('option');
        o.setAttribute('value', rattr);
        o.innerHTML = region_setting_list[setting]['label_prefix'] + rattr;
        if (this._via_settings_ui_image_region_label === rattr) {
          o.setAttribute('selected', 'selected');
        }
        select.appendChild(o);
      }
    }
  }

  settings_filepath_update_html(): void {
    let p = document.getElementById('_via_settings.core.filepath');
    p.innerHTML = '';
    var i, path, order;
    for (path in _via_settings.core.filepath) {
      order = _via_settings.core.filepath[path]
      if (order !== 0) {
        let li = document.createElement('li');
        li.innerHTML = path + '<span class="text_button" title="Delete image path" onclick="project_filepath_del(\"' + path + '\"); settings_filepath_update_html();">&times;</span>';
        p.appendChild(li);
      }
    }
  }

  //
  // find location of file
  //

  _via_file_resolve_all_to_default_filepath(): void {
    var img_id;
    for (img_id in this._via_img_metadata) {
      if (this._via_img_metadata.hasOwnProperty(img_id)) {
        this._via_file_resolve_file_to_default_filepath(img_id);
      }
    }
  }

  _via_file_resolve_file_to_default_filepath(img_id: any): void {
    if (this._via_img_metadata.hasOwnProperty(img_id)) {
      if (typeof (this._via_img_fileref[img_id]) === 'undefined' || this._via_img_fileref[img_id]! instanceof File) {
        if (this.is_url(this._via_img_metadata[img_id].filename)) {
          this._via_img_src[img_id] = this._via_img_metadata[img_id].filename;
        } else {
          this._via_img_src[img_id] = this._via_settings_core_default_filepath + this._via_img_metadata[img_id].filename;
        }
      }
    }
  }

  _via_file_resolve_all(): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var all_promises = [];

      var search_path_list = this._via_file_get_search_path_list();
      var i, img_id;
      for (i = 0; i < this._via_img_count; ++i) {
        img_id = this._via_image_id_list[i];
        if (typeof (this._via_img_src[img_id]) === 'undefined' || this._via_img_src[img_id] === '') {
          var p = this._via_file_resolve(i, search_path_list);
          all_promises.push(p);
        }
      }

      Promise.all(all_promises).then(function (ok_file_index_list) {
        console.log(ok_file_index_list);
        ok_callback();
        //this.project_file_load_on_success(ok_file_index);
      }, function (err_file_index_list) {
        console.log(err_file_index_list);
        err_callback();
        //this.project_file_load_on_fail(err_file_index);
      });

    });
  }

  _via_file_get_search_path_list(): any[] {
    var search_path_list = [];
    var path;
    for (path in this._via_settings_core_filepath) {
      if (this._via_settings_core_filepath[path] !== 0) {
        search_path_list.push(path);
      }
    }
    return search_path_list;
  }

  _via_file_resolve(file_index: any, search_path_list: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var path_index = 0;
      var p = this._via_file_resolve_check_path(file_index, path_index, search_path_list).then(function (ok) {
        ok_callback(ok);
      }, function (err) {
        err_callback(err);
      });
    }); //NOTE YOU GOT RID OF FALSE HERE , false)
  }

  _via_file_resolve_check_path(file_index: any, path_index: any, search_path_list: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var img_id = this._via_image_id_list[file_index];
      var img = new Image(0, 0);

      var img_path = search_path_list[path_index] + this._via_img_metadata[img_id].filename;
      if (this.is_url(this._via_img_metadata[img_id].filename)) {
        if (search_path_list[path_index] !== '') {
          // we search for the the image filename pointed by URL in local search paths
          img_path = search_path_list[path_index] + get_filename_from_url(this._via_img_metadata[img_id].filename);
        }
      }

      img.setAttribute('src', img_path);

      img.addEventListener('load', function () {
        _via_img_src[img_id] = img_path;
        ok_callback(file_index);
      }, false);
      img.addEventListener('abort', function () {
        err_callback(file_index);
      });
      img.addEventListener('error', function () {
        var new_path_index = path_index + 1;
        if (new_path_index < search_path_list.length) {
          _via_file_resolve_check_path(file_index, new_path_index, search_path_list).then(function (ok) {
            ok_callback(file_index);
          }, function (err) {
            err_callback(file_index);
          });
        } else {
          err_callback(file_index);
        }
      }, false);
    }); //NOTE YOU GOT RID OF FALSE HERE , false)
  }

  //
  // page 404 (file not found)
  //
  show_page_404(img_index: any): void {
    this._via_buffer_hide_current_image();

    this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_404);

    this._via_image_index = img_index;
    this._via_image_id = this._via_image_id_list[this._via_image_index];
    this._via_current_image_loaded = false;
    this.img_fn_list_ith_entry_selected(this._via_image_index, true);

    document.getElementById('page_404_filename').innerHTML = '[' + (this._via_image_index + 1) + ']' + this._via_img_metadata[this._via_image_id].filename;
  }


  //
  // utils
  //

  is_url(s: any): boolean {
    // @todo: ensure that this is sufficient to capture all image url
    if (s.startsWith('http://') || s.startsWith('https://') || s.startsWith('www.')) {
      return true;
    } else {
      return false;
    }
  }

  get_filename_from_url(url: any): any {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  // start with the array having smallest number of elements
  // check the remaining arrays if they all contain the elements of this shortest array
  array_intersect(array_list: any): any {
    if (array_list.length === 0) {
      return [];
    }
    if (array_list.length === 1) {
      return array_list[0];
    }

    var shortest_array = array_list[0];
    var shortest_array_index = 0;
    var i;
    for (i = 1; i < array_list.length; ++i) {
      if (array_list[i].length < shortest_array.length) {
        shortest_array = array_list[i];
        shortest_array_index = i;
      }
    }

    let intersect = [];
    var element_count = {};

    var array_index_i;
    for (i = 0; i < array_list.length; ++i) {
      if (i === 0) {
        // in the first iteration, process the shortest element array
        array_index_i = shortest_array_index;
      } else {
        array_index_i = i;
      }

      var j;
      for (j = 0; j < array_list[array_index_i].length; ++j) {
        if (element_count[array_list[array_index_i][j]] === (i - 1)) {
          if (i === array_list.length - 1) {
            intersect.push(array_list[array_index_i][j]);
            element_count[array_list[array_index_i][j]] = 0;
          } else {
            element_count[array_list[array_index_i][j]] = i;
          }
        } else {
          element_count[array_list[array_index_i][j]] = 0;
        }
      }
    }
    return intersect;
  }

  generate_img_index_list(input: any): any {
    var all_img_index_list = [];

    // condition: count format a,b
    var count_format_img_index_list = [];
    if (input.prev_next_count.value !== '') {
      var prev_next_split = input.prev_next_count.value.split(',');
      if (prev_next_split.length === 2) {
        let prev = parseInt(prev_next_split[0]);
        let next = parseInt(prev_next_split[1]);
        var i;
        for (i = (this._via_image_index - prev); i <= (this._via_image_index + next); i++) {
          count_format_img_index_list.push(i);
        }
      }
    }
    if (count_format_img_index_list.length !== 0) {
      all_img_index_list.push(count_format_img_index_list);
    }

    //condition: image index list expression
    var expr_img_index_list = [];
    if (input.img_index_list.value !== '') {
      var img_index_expr = input.img_index_list.value.split(',');
      if (img_index_expr.length !== 0) {
        var i;
        for (i = 0; i < img_index_expr.length; ++i) {
          if (img_index_expr[i].includes('-')) {
            var ab = img_index_expr[i].split('-');
            var a = parseInt(ab[0]) - 1; // 0 based indexing
            var b = parseInt(ab[1]) - 1;
            var j;
            for (j = a; j <= b; ++j) {
              expr_img_index_list.push(j);
            }
          } else {
            expr_img_index_list.push(parseInt(img_index_expr[i]) - 1);
          }
        }
      }
    }
    if (expr_img_index_list.length !== 0) {
      all_img_index_list.push(expr_img_index_list);
    }


    // condition: regular expression
    var regex_img_index_list = [];
    if (input.regex.value !== '') {
      var regex = input.regex.value;
      for (i = 0; i < this._via_image_filename_list.length; ++i) {
        var filename = this._via_image_filename_list[i];
        if (filename.match(regex) !== null) {
          regex_img_index_list.push(i);
        }
      }
    }
    if (regex_img_index_list.length !== 0) {
      all_img_index_list.push(regex_img_index_list);
    }

    var intersect = this.array_intersect(all_img_index_list);
    return intersect;
  }

  if(_via_is_debug_mode) { //Should be != or !via_is_debug_mode
    // warn user of possible loss of data
    window.onbeforeunload = function (e) {
      e = e || window.event;

      // For IE and Firefox prior to version 4
      if (e) {
        e.returnValue = 'Did you save your data?';
      }

      // For Safari
      return 'Did you save your data?';
    };
  }

  //
  // keep a record of image statistics (e.g. width, height, ...)
  //
  img_stat_set(img_index: any, stat: any): void {
    if (stat.length) {
      this._via_img_stat[img_index] = stat;
    } else {
      delete this._via_img_stat[img_index];
    }
  }


  img_stat_set_all(): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var promise_list = [];
      var img_id;
      for (var img_index in this._via_image_id_list) {
        if (!this._via_img_stat.hasOwnProperty(img_index)) {
          img_id = this._via_image_id_list[img_index];
          if (this._via_img_metadata[img_id].file_attributes.hasOwnProperty('width') &&
            this._via_img_metadata[img_id].file_attributes.hasOwnProperty('height')
          ) {
            this._via_img_stat[img_index] = [this._via_img_metadata[img_id].file_attributes['width'],
            this._via_img_metadata[img_id].file_attributes['height'],
            ];
          } else {
            promise_list.push(img_stat_get(img_index));
          }
        }
      }
      if (promise_list.length) {
        Promise.all(promise_list).then(function (ok) {
          ok_callback();
        }.bind(this), function (err) {
          console.warn('Failed to read statistics of all images!');
          err_callback();
        });
      } else {
        ok_callback();
      }
    }.bind(this));
  }

  img_stat_get(img_index: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      var img_id = this._via_image_id_list[img_index];
      var tmp_img = document.createElement('img');
      var tmp_file_object_url = null;
      tmp_img.addEventListener('load', function () {
        _via_img_stat[img_index] = [tmp_img.naturalWidth, tmp_img.naturalHeight];
        if (tmp_file_object_url !== null) {
          URL.revokeObjectURL(tmp_file_object_url);
        }
        ok_callback();
      }.bind(this));
      tmp_img.addEventListener('error', function () {
        _via_img_stat[img_index] = [-1, -1];
        if (tmp_file_object_url !== null) {
          URL.revokeObjectURL(tmp_file_object_url);
        }
        ok_callback();
      }.bind(this));

      if (this._via_img_fileref[img_id] instanceof File) {
        tmp_file_object_url = URL.createObjectURL(this._via_img_fileref[img_id]);
        tmp_img.src = tmp_file_object_url;
      } else {
        tmp_img.src = this._via_img_src[img_id];
      }
    }.bind(this));
  }

  //
  // util
  //
  fixfloat(x: any): number {
    return parseFloat(x.toFixed(this.VIA_FLOAT_PRECISION));
  }

  shape_attribute_fixfloat(sa: any): void {
    for (var attr in sa) {
      switch (attr) {
        case 'x':
        case 'y':
        case 'width':
        case 'height':
        case 'r':
        case 'rx':
        case 'ry':
          sa[attr] = fixfloat(sa[attr]);
          break;
        case 'all_points_x':
        case 'all_points_y':
          for (var i in sa[attr]) {
            sa[attr][i] = fixfloat(sa[attr][i]);
          }
      }
    }
  }

  // pts = [x0,y0,x1,y1,....]
  polygon_to_bbox(pts: any): number[] {
    var xmin = +Infinity;
    var xmax = -Infinity;
    var ymin = +Infinity;
    var ymax = -Infinity;
    for (var i = 0; i < pts.length; i = i + 2) {
      if (pts[i] > xmax) {
        xmax = pts[i];
      }
      if (pts[i] < xmin) {
        xmin = pts[i];
      }
      if (pts[i + 1] > ymax) {
        ymax = pts[i + 1];
      }
      if (pts[i + 1] < ymin) {
        ymin = pts[i + 1];
      }
    }
    return [xmin, ymin, xmax - xmin, ymax - ymin];
  };


  _via_reg_canvas_mouseover_handler(e: MouseEvent): void {
    // change the mouse cursor icon
    this._via_redraw_reg_canvas();
    this._via_reg_canvas.focus();
  }

  _via_reg_canvas_mousemove_handler(e: Event): void {
    if (!this._via_current_image_loaded) {
      return;
    }

    _via_current_x = (e as MouseEvent).offsetX; _via_current_y = (e as MouseEvent).offsetY;

    // display the cursor coordinates
    var rf = document.getElementById('region_info');
    if (rf != null && _via_is_region_info_visible) {
      var img_x = Math.round(_via_current_x * _via_canvas_scale);
      var img_y = Math.round(_via_current_y * _via_canvas_scale);
      rf.innerHTML = 'X:' + img_x + ',' + ' Y:' + img_y;
    }

    if (_via_is_region_selected) {
      // display the region's info if a region is selected
      if (rf != null && _via_is_region_info_visible && this._via_user_sel_region_id !== -1) {
        var canvas_attr = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;
        switch (canvas_attr['name']) {
          case VIA_REGION_SHAPE.RECT:
            break;

          case VIA_REGION_SHAPE.CIRCLE:
            var rf = document.getElementById('region_info');
            var attr = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;
            rf.innerHTML += ',' + ' Radius:' + attr['r'];
            break;

          case VIA_REGION_SHAPE.ELLIPSE:
            var rf = document.getElementById('region_info');
            var attr = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;
            rf.innerHTML += ',' + ' X-radius:' + attr['rx'] + ',' + ' Y-radius:' + attr['ry'];
            break;

          case VIA_REGION_SHAPE.POLYLINE:
          case VIA_REGION_SHAPE.POLYGON:
            break;
        }
      }

      if (!_via_is_user_resizing_region) {
        // check if user moved mouse cursor to region boundary
        // which indicates an intention to resize the region
        _via_region_edge = this.is_on_region_corner(_via_current_x, _via_current_y);

        if (_via_region_edge[0] === this._via_user_sel_region_id) {
          switch (_via_region_edge[1]) {
            // rect
            case 1: // Fall-through // top-left corner of rect
            case 3: // bottom-right corner of rect
              _via_reg_canvas.style.cursor = "nwse-resize";
              break;
            case 2: // Fall-through // top-right corner of rect
            case 4: // bottom-left corner of rect
              _via_reg_canvas.style.cursor = "nesw-resize";
              break;

            case 5: // Fall-through // top-middle point of rect
            case 7: // bottom-middle point of rect
              _via_reg_canvas.style.cursor = "ns-resize";
              break;
            case 6: // Fall-through // top-middle point of rect
            case 8: // bottom-middle point of rect
              _via_reg_canvas.style.cursor = "ew-resize";
              break;

            // circle and ellipse
            case 5:
              _via_reg_canvas.style.cursor = "n-resize";
              break;
            case 6:
              _via_reg_canvas.style.cursor = "e-resize";
              break;

            default:
              _via_reg_canvas.style.cursor = "default";
              break;
          }

          if (_via_region_edge[1] >= VIA_POLYGON_RESIZE_VERTEX_OFFSET) {
            // indicates mouse over polygon vertex
            _via_reg_canvas.style.cursor = "crosshair";
            this.show_message('To move vertex, simply drag the vertex. To add vertex, press [Ctrl] key and click on the edge. To delete vertex, press [Ctrl] key and click on vertex.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
          }
        } else {
          var yes = this.is_inside_this_region(_via_current_x,
            _via_current_y,
            this._via_user_sel_region_id);
          if (yes) {
            this._via_reg_canvas.style.cursor = "move";
          } else {
            this. _via_reg_canvas.style.cursor = "default";
          }

        }
      } else {
        this.annotation_editor_hide(); // resizing
      }
    }

    if (this._via_is_user_drawing_region) {
      // draw region as the user drags the mouse cursor
      if (this._via_canvas_regions.length) {
        this._via_redraw_reg_canvas(); // clear old intermediate rectangle
      } else {
        // first region being drawn, just clear the full region canvas
        this._via_reg_ctx.clearRect(0, 0, this._via_reg_canvas.width, this._via_reg_canvas.height);
      }

      var region_x0 = _via_click_x0;
      var region_y0 = _via_click_y0;

      var dx = Math.round(Math.abs(this._via_current_x - this._via_click_x0));
      var dy = Math.round(Math.abs(this._via_current_y - this._via_click_y0));
      this._via_reg_ctx.strokeStyle = this.VIA_THEME_BOUNDARY_FILL_COLOR;

      switch (this._via_current_shape) {
        case this.VIA_REGION_SHAPE.RECT:
          if (this._via_click_x0 < this._via_current_x) {
            if (this._via_click_y0 < this._via_current_y) {
              region_x0 = _via_click_x0;
              region_y0 = _via_click_y0;
            } else {
              region_x0 = _via_click_x0;
              region_y0 = _via_current_y;
            }
          } else {
            if (_via_click_y0 < _via_current_y) {
              region_x0 = _via_current_x;
              region_y0 = _via_click_y0;
            } else {
              region_x0 = _via_current_x;
              region_y0 = _via_current_y;
            }
          }

          this._via_draw_rect_region(region_x0, region_y0, dx, dy, false);

          // display the current region info
          if (rf != null && _via_is_region_info_visible) {
            rf.innerHTML += ',' + ' W:' + dx + ',' + ' H:' + dy;
          }
          break;

        case VIA_REGION_SHAPE.CIRCLE:
          var circle_radius = Math.round(Math.sqrt(dx * dx + dy * dy));
          this. _via_draw_circle_region(region_x0, region_y0, circle_radius, false);

          // display the current region info
          if (rf != null && _via_is_region_info_visible) {
            rf.innerHTML += ',' + ' Radius:' + circle_radius;
          }
          break;

        case VIA_REGION_SHAPE.ELLIPSE:
          _via_draw_ellipse_region(region_x0, region_y0, dx, dy, 0, false);

          // display the current region info
          if (rf != null && _via_is_region_info_visible) {
            rf.innerHTML += ',' + ' X-radius:' + fixfloat(dx) + ',' + ' Y-radius:' + fixfloat(dy);
          }
          break;

        case VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case VIA_REGION_SHAPE.POLYGON:
          // this is handled by the if ( _via_is_user_drawing_polygon ) { ... }
          // see below
          break;
      }
      _via_reg_canvas.focus();
    }

    if (_via_is_user_resizing_region) {
      // user has clicked mouse on bounding box edge and is now moving it
      // draw region as the user drags the mouse coursor
      if (this._via_canvas_regions.length) {
        this._via_redraw_reg_canvas(); // clear old intermediate rectangle
      } else {
        // first region being drawn, just clear the full region canvas
        this._via_reg_ctx.clearRect(0, 0, this._via_reg_canvas.width, this._via_reg_canvas.height);
      }

      let region_id = _via_region_edge[0];
      var attr = this._via_canvas_regions[region_id].shape_attributes;
      switch (attr['name']) {
        case VIA_REGION_SHAPE.RECT:
          // original rectangle
          let d = [attr['x'], attr['y'], 0, 0];
          d[2] = d[0] + attr['width'];
          d[3] = d[1] + attr['height'];

          var mx = _via_current_x;
          var my = _via_current_y;
          let preserve_aspect_ratio = false;
          // constrain (mx,my) to lie on a line connecting a diagonal of rectangle
          if (_via_is_ctrl_pressed) {
            preserve_aspect_ratio = true;
          }

          this.rect_update_corner(_via_region_edge[1], d, mx, my, preserve_aspect_ratio);
          this.rect_standardize_coordinates(d);

          let w = Math.abs(d[2] - d[0]);
          let h = Math.abs(d[3] - d[1]);
          this._via_draw_rect_region(d[0], d[1], w, h, true);

          if (rf != null && _via_is_region_info_visible) {
            rf.innerHTML += ',' + ' W:' + w + ',' + ' H:' + h;
          }
          break;

        case VIA_REGION_SHAPE.CIRCLE:
          var dx = Math.abs(attr['cx'] - _via_current_x);
          var dy = Math.abs(attr['cy'] - _via_current_y);
          var new_r = Math.sqrt(dx * dx + dy * dy);
          this._via_draw_circle_region(attr['cx'],
            attr['cy'],
            new_r,
            true);
          if (rf != null && _via_is_region_info_visible) {
            var curr_texts = rf.innerHTML.split(",");
            rf.innerHTML = "";
            rf.innerHTML += curr_texts[0] + ',' + curr_texts[1] + ',' + ' Radius:' + Math.round(new_r);
          }
          break;

        case VIA_REGION_SHAPE.ELLIPSE:
          var new_rx = attr['rx'];
          var new_ry = attr['ry'];
          var new_theta = attr['theta'];
          var dx = Math.abs(attr['cx'] - _via_current_x);
          var dy = Math.abs(attr['cy'] - _via_current_y);
          switch (_via_region_edge[1]) {
            case 5:
              new_ry = Math.sqrt(dx * dx + dy * dy);
              new_theta = Math.atan2(- (_via_current_x - attr['cx']), (_via_current_y - attr['cy']));
              break;

            case 6:
              new_rx = Math.sqrt(dx * dx + dy * dy);
              new_theta = Math.atan2((_via_current_y - attr['cy']), (_via_current_x - attr['cx']));
              break;

            default:
              new_rx = dx;
              new_ry = dy;
              new_theta = 0;
              break;
          }

          this._via_draw_ellipse_region(attr['cx'],
            attr['cy'],
            new_rx,
            new_ry,
            new_theta,
            true);
          if (rf != null && this._via_is_region_info_visible) {
            var curr_texts = rf.innerHTML.split(",");
            rf.innerHTML = "";
            rf.innerHTML = curr_texts[0] + ',' + curr_texts[1] + ',' + ' X-radius:' + fixfloat(new_rx) + ',' + ' Y-radius:' + fixfloat(new_ry);
          }
          break;

        case VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case VIA_REGION_SHAPE.POLYGON:
          var moved_all_points_x = attr['all_points_x'].slice(0);
          var moved_all_points_y = attr['all_points_y'].slice(0);
          var moved_vertex_id = _via_region_edge[1] - this.VIA_POLYGON_RESIZE_VERTEX_OFFSET;

          moved_all_points_x[moved_vertex_id] = _via_current_x;
          moved_all_points_y[moved_vertex_id] = _via_current_y;

          this._via_draw_polygon_region(moved_all_points_x,
            moved_all_points_y,
            true,
            attr['name']);
          if (rf != null && _via_is_region_info_visible) {
            rf.innerHTML += ',' + ' Vertices:' + attr['all_points_x'].length;
          }
          break;
      }
      this._via_reg_canvas.focus();
    }

    if (this._via_is_user_moving_region) {
      // draw region as the user drags the mouse coursor
      if (this._via_canvas_regions.length) {
        this._via_redraw_reg_canvas(); // clear old intermediate rectangle
      } else {
        // first region being drawn, just clear the full region canvas
        this._via_reg_ctx.clearRect(0, 0, this._via_reg_canvas.width, this._via_reg_canvas.height);
      }

      let move_x = (this._via_current_x - this._via_region_click_x);
      let move_y = (this._via_current_y - this._via_region_click_y);
      var attr = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;

      switch (attr['name']) {
        case VIA_REGION_SHAPE.RECT:
          this._via_draw_rect_region(attr['x'] + move_x,
            attr['y'] + move_y,
            attr['width'],
            attr['height'],
            true);
          // display the current region info
          if (rf != null && this._via_is_region_info_visible) {
            rf.innerHTML += ',' + ' W:' + attr['width'] + ',' + ' H:' + attr['height'];
          }
          break;

        case VIA_REGION_SHAPE.CIRCLE:
          this._via_draw_circle_region(attr['cx'] + move_x,
            attr['cy'] + move_y,
            attr['r'],
            true);
          break;

        case VIA_REGION_SHAPE.ELLIPSE:
          if (typeof (attr['theta']) === 'undefined') { attr['theta'] = 0; }
          this._via_draw_ellipse_region(attr['cx'] + move_x,
            attr['cy'] + move_y,
            attr['rx'],
            attr['ry'],
            attr['theta'],
            true);
          break;

        case VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case VIA_REGION_SHAPE.POLYGON:
          var moved_all_points_x = attr['all_points_x'].slice(0);
          var moved_all_points_y = attr['all_points_y'].slice(0);
          for (var i = 0; i < moved_all_points_x.length; ++i) {
            moved_all_points_x[i] += move_x;
            moved_all_points_y[i] += move_y;
          }
          this._via_draw_polygon_region(moved_all_points_x,
            moved_all_points_y,
            true,
            attr['name']);
          if (rf != null && _via_is_region_info_visible) {
            rf.innerHTML += ',' + ' Vertices:' + attr['all_points_x'].length;
          }
          break;

        case VIA_REGION_SHAPE.POINT:
          this._via_draw_point_region(attr['cx'] + move_x,
            attr['cy'] + move_y,
            true);
          break;
      }
      this._via_reg_canvas.focus();
      this.annotation_editor_hide() // moving
      return;
    }

    if (this._via_is_user_drawing_polygon) {
      this._via_redraw_reg_canvas();
      var attr = this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes;
      var all_points_x = attr['all_points_x'];
      var all_points_y = attr['all_points_y'];
      var npts = all_points_x.length;

      if (npts > 0) {
        var line_x = [all_points_x.slice(npts - 1), _via_current_x];
        var line_y = [all_points_y.slice(npts - 1), _via_current_y];
        this._via_draw_polygon_region(line_x, line_y, false, attr['name']);
      }

      if (rf != null && this._via_is_region_info_visible) {
        rf.innerHTML += ',' + ' Vertices:' + npts;
      }
    }
  }
  _via_load_submodules() {
    this._via_basic_demo_load_img();
    //_via_basic_demo_draw_default_regions();
    this._via_basic_demo_define_attributes();
    this._via_basic_demo_define_annotations();

    this.toggle_attributes_editor();
    this.update_attributes_update_panel();

    this.annotation_editor_show();
  }

  _via_basic_demo_load_img() {
    // add files
    var i, n;
    var file_count = 0;
    n = this._via_basic_demo_img.length;
    for (i = 0; i < n; ++i) {
      this.project_file_add_base64(this._via_basic_demo_img_filename[i], this._via_basic_demo_img[i]);
      file_count += 1;
    }

    this._via_show_img(0);
    this.update_img_fn_list();
  }

  _via_init() {
    console.log(this.VIA_NAME);
    this.show_message(this.VIA_NAME + ' (' + this.VIA_SHORT_NAME + ') version ' + this.VIA_VERSION +
      '. Ready !', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);

    if (this._via_is_debug_mode) {
      document.getElementById('ui_top_panel').innerHTML += '<span>DEBUG MODE</span>';
    }

    document.getElementById('img_fn_list').style.display = 'block';
    document.getElementById('leftsidebar').style.display = 'table-cell';

    // initialize default project
    this.project_init_default_project();

    // initialize region canvas 2D context
    this._via_init_reg_canvas_context();

    // initialize user input handlers (for both window and via_reg_canvas)
    // handles drawing of regions by user over the image
    this._via_init_keyboard_handlers();
    this._via_init_mouse_handlers();

    // initialize image grid
    this.image_grid_init();

    this.show_single_image_view();
    this.init_leftsidebar_accordion();
    this.attribute_update_panel_set_active_button();
    this.annotation_editor_set_active_button();
    this.init_message_panel();

    //run attached sub-modules (if any)
   // e.g. demo modules
    if (typeof this._via_load_submodules === 'function') {
      console.log('Loading VIA submodule');
      this._via_load_submodules();
    }

  }

  _via_init_reg_canvas_context() {
    this._via_reg_ctx = this._via_reg_canvas.getContext('2d');
  }

  _via_init_keyboard_handlers() {
    window.addEventListener('keydown', this._via_window_keydown_handler, false);
    this._via_reg_canvas.addEventListener('keydown', this._via_reg_canvas_keydown_handler, false);
    this._via_reg_canvas.addEventListener('keyup', this._via_reg_canvas_keyup_handler, false);
  }

  // handles drawing of regions over image by the user
  _via_init_mouse_handlers() {
    this._via_reg_canvas.addEventListener('dblclick', this._via_reg_canvas_dblclick_handler, false);
    this._via_reg_canvas.addEventListener('mousedown', this._via_reg_canvas_mousedown_handler, false);
    this._via_reg_canvas.addEventListener('mouseup', this._via_reg_canvas_mouseup_handler, false);
    this._via_reg_canvas.addEventListener('mouseover', this._via_reg_canvas_mouseover_handler, false);
    this._via_reg_canvas.addEventListener('mousemove', this._via_reg_canvas_mousemove_handler, false);
    this._via_reg_canvas.addEventListener('wheel', this._via_reg_canvas_mouse_wheel_listener, false);
    // touch screen event handlers
    // @todo: adapt for mobile users
    this._via_reg_canvas.addEventListener('touchstart', this._via_reg_canvas_mousedown_handler, false);
    this._via_reg_canvas.addEventListener('touchend', this._via_reg_canvas_mouseup_handler, false);
    this._via_reg_canvas.addEventListener('touchmove', this._via_reg_canvas_mousemove_handler, false);
  }

  //
  // Download image with annotations
  //

  download_as_image() {
    if (this._via_display_area_content_name !== VIA_DISPLAY_AREA_CONTENT_NAME['IMAGE']) {
      this.show_message('This functionality is only available in single image view mode', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      return;
    } else {
      var c = document.createElement('canvas');

      // ensures that downloaded image is scaled at current zoom level
      c.width = this._via_reg_canvas.width;
      c.height = this._via_reg_canvas.height;

      var ct = c.getContext('2d');
      // draw current image
      ct.drawImage(_via_current_image, 0, 0, this._via_reg_canvas.width, this._via_reg_canvas.height);
      // draw current regions
      ct.drawImage(this._via_reg_canvas, 0, 0);

      var cur_img_mime = 'image/jpeg';
      if (_via_current_image.src.startsWith('data:')) {
        var c1 = _via_current_image.src.indexOf(':', 0);
        var c2 = _via_current_image.src.indexOf(';', c1);
        cur_img_mime = _via_current_image.src.substring(c1 + 1, c2);
      }

      // extract image data from canvas
      var saved_img = c.toDataURL(cur_img_mime);
      saved_img.replace(cur_img_mime, "image/octet-stream");

      // simulate user click to trigger download of image
      var a = document.createElement('a');
      a.href = saved_img;
      a.target = '_blank';
      a.download = _via_current_image_filename;

      // simulate a mouse click event
      var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

      a.dispatchEvent(event);
    }
  }

  //
  // Display area content
  //
  clear_display_area() {
    var panels = document.getElementsByClassName('display_area_content');
    var i;
    for (i = 0; i < panels.length; ++i) {
      panels[i].classList.add('display_none');
    }
  }

  is_content_name_valid(content_name) {
    var e;
    for (e in this.VIA_DISPLAY_AREA_CONTENT_NAME) {
      if (this.VIA_DISPLAY_AREA_CONTENT_NAME[e] === content_name) {
        return true;
      }
    }
    return false;
  }

  show_home_panel() {
    this.show_single_image_view();
  }

  set_display_area_content(content_name) {
    if (this.is_content_name_valid(content_name)) {
      this._via_display_area_content_name_prev = this._via_display_area_content_name;
      this.clear_display_area();
      let p = document.getElementById(content_name);
      p.classList.remove('display_none');
      this._via_display_area_content_name = content_name;
    }
  }

  show_single_image_view() {
    if (this._via_current_image_loaded) {
      // img_fn_list_clear_all_style();
      this._via_show_img(this._via_image_index);
      this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE);
      this.annotation_editor_update_content();


      let p = document.getElementById('toolbar_image_grid_toggle');
      this.p.firstChild.setAttribute('xlink:href', '#icon_gridon');
      this.p.childNodes[1].innerHTML = 'Switch to Image Grid View';
    } else {
      this.set_display_area_content(this.VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_START_INFO);
    }
  }

  show_image_grid_view() {
    if (_via_current_image_loaded) {
      // img_fn_list_clear_all_style();
      this.set_display_area_content(VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID);
      image_grid_toolbar_update_group_by_select();

      if (this._via_image_grid_group_var.length === 0) {
        this.image_grid_show_all_project_images();
      }
      this.annotation_editor_update_content();

      let p = document.getElementById('toolbar_image_grid_toggle');
      this.p.firstChild.setAttribute('xlink:href', '#icon_gridoff');
      this.p.childNodes[1].innerHTML = 'Switch to Single Image View';

      //edit_file_metadata_in_annotation_editor();
    } else {
      this.set_display_area_content(VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_START_INFO);
    }
  }

  //
  // Handlers for top navigation bar
  //
  sel_local_images() {
    // source: https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
    if (this.invisible_file_input) {
      this.invisible_file_input.setAttribute('multiple', 'multiple')
      this.invisible_file_input.accept = '.jpg,.jpeg,.png,.bmp';
      this.invisible_file_input.onchange = project_file_add_local;
      this.invisible_file_input.click();
    }
  }

  download_all_region_data(type: any, file_extension: any): void {
    if (typeof (file_extension) === 'undefined') {
      file_extension = type;
    }

    // Javascript strings (DOMString) is automatically converted to utf-8
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
    pack_via_metadata(type).then(function (data) {
      var blob_attr = { type: 'text/' + file_extension + ';charset=utf-8' };
      var all_region_data_blob = new Blob(data, blob_attr);

      var filename = 'via_export';
      if (file_extension !== 'csv' || file_extension !== 'json') {
        filename += '_' + type + '.' + file_extension;
      }
      this.save_data_to_local_file(all_region_data_blob, filename);
    }.bind(this), function (err) {
      this.show_message('Failed to download data: [' + err + ']', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
    }.bind(this));
  }

  sel_local_data_file(type: any): void {
    if (this.invisible_file_input) {
      switch (type) {
        case 'annotations':
          this.invisible_file_input.accept = '.csv,.json';
          this.invisible_file_input.onchange = import_annotations_from_file;
          break;

        case 'annotations_coco':
          this.invisible_file_input.accept = '.json';
          this.invisible_file_input.onchange = import_annotations_from_file;
          break;

        case 'files_url':
          this.invisible_file_input.accept = '';
          this.invisible_file_input.onchange = import_files_url_from_file;
          break;

        case 'attributes':
          this.invisible_file_input.accept = 'json';
          this.invisible_file_input.onchange = project_import_attributes_from_file;
          break;

        default:
          console.log('sel_local_data_file() : unknown type ' + type);
          return;
      }
      this.invisible_file_input.removeAttribute('multiple');
      this.invisible_file_input.click();
    }
  }

  //
  // Data Importer
  //
  import_files_url_from_file(event: any): void {
    var selected_files = event.target.files;
    var i, file;
    for (i = 0; i < selected_files.length; ++i) {
      file = selected_files[i];
      this.load_text_file(file, this.import_files_url_from_csv);
    }
  }

  import_annotations_from_file(event: any): void {
    var selected_files = event.target.files;
    var i, file;
    for (i = 0; i < selected_files.length; ++i) {
      file = selected_files[i];
      switch (file.type) {
        case '': // Fall-through // Windows 10: Firefox and Chrome do not report filetype
          this.show_message('File type for ' + file.name + ' cannot be determined! Assuming text/plain.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        case 'text/plain': // Fall-through
        case 'application/vnd.ms-excel': // Fall-through // @todo: filetype of VIA csv annotations in Windows 10 , fix this (reported by @Eli Walker)
        case 'text/csv':
          this.load_text_file(file, import_annotations_from_csv);
          break;

        case 'text/json': // Fall-through
        case 'application/json':
          this.load_text_file(file, import_annotations_from_json);
          break;

        default:
          this.show_message('Annotations cannot be imported from file of type ' + file.type, 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
          break;
      }
    }
  }

  import_annotations_from_csv(data: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      if (data === '' || typeof (data) === 'undefined') {
        err_callback();
      }

      var region_import_count = 0;
      var malformed_csv_lines_count = 0;
      var file_added_count = 0;

      var line_split_regex = new RegExp('\n|\r|\r\n', 'g');
      var csvdata = data.split(line_split_regex);

      var parsed_header = this.parse_csv_header_line(csvdata[0]);
      console.log(parsed_header)
      if (!parsed_header.is_header) {
        this.show_message('Header line missing in the CSV file', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
        err_callback();
        return;
      }

      var percent_completed = 0;
      var n = csvdata.length;
      var i;
      var first_img_id = '';
      for (i = 1; i < n; ++i) {
        // ignore blank lines
        if (csvdata[i].charAt(0) === '\n' || csvdata[i].charAt(0) === '') {
          continue;
        }

        var d = this.parse_csv_line(csvdata[i], undefined);

        // check if csv line was malformed
        if (d.length !== parsed_header.csv_column_count) {
          malformed_csv_lines_count += 1;
          continue;
        }

        var filename = d[parsed_header.filename_index];
        var size = d[parsed_header.size_index];
        var img_id = this._via_get_image_id(filename, size); //asset.id

        // check if file is already present in this project
        if (!this._via_img_metadata.hasOwnProperty(img_id)) {
          img_id = this.project_add_new_file(filename, size, this.file_id);
          if (this._via_settings_core_default_filepath === '') {
            this._via_img_src[img_id] = filename;
          } else {
            this._via_file_resolve_file_to_default_filepath(img_id);
          }
          file_added_count += 1;

          if (first_img_id === '') {
            first_img_id = img_id;
          }
        }

        // copy file attributes
        if (d[parsed_header.file_attr_index] !== '"{}"') {
          var fattr = d[parsed_header.file_attr_index];
          fattr = this.remove_prefix_suffix_quotes(fattr);
          fattr = this.unescape_from_csv(fattr);

          var m = this.json_str_to_map(fattr);
          for (var key in m) {
            this._via_img_metadata[img_id].file_attributes[key] = m[key];

            // add this file attribute to this._via_attributes
            if (!this._via_attributes['file'].hasOwnProperty(key)) {
              this._via_attributes['file'][key] = { 'type': 'text' };
            }
          }
        }

        var region_i = new file_region();
        // copy regions shape attributes
        if (d[parsed_header.region_shape_attr_index] !== '"{}"') {
          var sattr = d[parsed_header.region_shape_attr_index];
          sattr = this.remove_prefix_suffix_quotes(sattr);
          sattr = this.unescape_from_csv(sattr);

          var m = this.json_str_to_map(sattr);
          for (var key in m) {
            region_i.shape_attributes[key] = m[key];
          }
        }

        // copy region attributes
        if (d[parsed_header.region_attr_index] !== '"{}"') {
          var rattr = d[parsed_header.region_attr_index];
          rattr = this.remove_prefix_suffix_quotes(rattr);
          rattr = this.unescape_from_csv(rattr);

          var m = this.json_str_to_map(rattr);
          for (var key in m) {
            region_i.region_attributes[key] = m[key];

            // add this region attribute to this._via_attributes
            if (!this._via_attributes['region'].hasOwnProperty(key)) {
              this._via_attributes['region'][key] = { 'type': 'text' };
            }
          }
        }

        // add regions only if they are present
        if (Object.keys(region_i.shape_attributes).length > 0 ||
          Object.keys(region_i.region_attributes).length > 0) {
          this._via_img_metadata[img_id].regions.push(region_i);
          region_import_count += 1;
        }
      }
      this.show_message('Import Summary : [' + file_added_count + '] new files, ' +
        '[' + region_import_count + '] regions, ' +
        '[' + malformed_csv_lines_count + '] malformed csv lines.', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);

      if (file_added_count) {
        this.update_img_fn_list();
      }

      if (this._via_current_image_loaded) {
        if (region_import_count) {
          this.update_attributes_update_panel();
          this.annotation_editor_update_content();
          this._via_load_canvas_regions(); // image to canvas space transform
          this._via_redraw_reg_canvas();
          this._via_reg_canvas.focus();
        }
      } else {
        if (file_added_count) {
          var first_img_index = this._via_image_id_list.indexOf(first_img_id);
          this._via_show_img(first_img_index);
        }
      }
      ok_callback([file_added_count, region_import_count, malformed_csv_lines_count]);
    });
  }

  parse_csv_header_line(line: any) {
    var header_via_10x = '#filename,file_size,file_attributes,region_count,region_id,region_shape_attributes,region_attributes'; // VIA versions 1.0.x
    var header_via_11x = 'filename,file_size,file_attributes,region_count,region_id,region_shape_attributes,region_attributes'; // VIA version 1.1.x

    if (line === header_via_10x || line === header_via_11x) {
      return {
        'is_header': true,
        'filename_index': 0,
        'size_index': 1,
        'file_attr_index': 2,
        'region_shape_attr_index': 5,
        'region_attr_index': 6,
        'csv_column_count': 7
      }
    } else {
      return { 'is_header': false };
    }
  }

  import_annotations_from_json(data_str: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      if (data_str === '' || typeof (data_str) === 'undefined') {
        return;
      }

      var data = JSON.parse(data_str);
      var d;

      if (data.hasOwnProperty('info') && data.hasOwnProperty('categories') &&
        data.hasOwnProperty('images') && data.hasOwnProperty('annotations')
      ) {
        // import annotations in COCO format
        d = this.coco_to_via(data);
      } else {
        d = data;
      }

      var region_import_count = 0;
      var file_added_count = 0;
      var malformed_entries_count = 0;
      for (var img_id in d) {
        if (!this._via_img_metadata.hasOwnProperty(img_id)) {
          this.project_add_new_file(d[img_id].filename, d[img_id].size, img_id);
          if (this._via_settings_core_default_filepath === '') {
            this._via_img_src[img_id] = d[img_id].filename;
          } else {
            this._via_file_resolve_file_to_default_filepath(img_id);
          }
          file_added_count += 1;
        }

        // copy file attributes
        var key;
        for (key in d[img_id].file_attributes) {
          if (key === '') {
            continue;
          }

          this._via_img_metadata[img_id].file_attributes[key] = d[img_id].file_attributes[key];

          // add this file attribute to this._via_attributes
          if (!this._via_attributes['file'].hasOwnProperty(key)) {
            this._via_attributes['file'][key] = { 'type': 'text' };
          }
        }

        // copy regions
        var regions = d[img_id].regions;
        var key, i;
        for (i in regions) {
          var region_i = new file_region();
          for (key in regions[i].shape_attributes) {
            region_i.shape_attributes[key] = regions[i].shape_attributes[key];
          }
          for (key in regions[i].region_attributes) {
            if (key === '') {
              continue;
            }

            region_i.region_attributes[key] = regions[i].region_attributes[key];

            // add this region attribute to this._via_attributes
            if (!this._via_attributes['region'].hasOwnProperty(key)) {
              this._via_attributes['region'][key] = { 'type': 'text' };
            }
          }

          // add regions only if they are present
          if (Object.keys(region_i.shape_attributes).length > 0 ||
            Object.keys(region_i.region_attributes).length > 0) {
            this._via_img_metadata[img_id].regions.push(region_i);
            region_import_count += 1;
          }
        }
      }
      this.show_message('Import Summary : [' + file_added_count + '] new files, ' +
        '[' + region_import_count + '] regions, ' +
        '[' + malformed_entries_count + '] malformed entries.', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);

      if (file_added_count) {
        this.update_img_fn_list();
      }

      if (this._via_current_image_loaded) {
        if (region_import_count) {
          this.update_attributes_update_panel();
          this.annotation_editor_update_content();
          this._via_load_canvas_regions(); // image to canvas space transform
          this._via_redraw_reg_canvas();
          this._via_reg_canvas.focus();
        }
      } else {
        if (file_added_count) {
          this._via_show_img(0);
        }
      }

      ok_callback([file_added_count, region_import_count, malformed_entries_count]);
    });
  }

  // convert from coco JSON format to VIA JSON format
  // see http://cocodataset.org/#format-data
  coco_to_via(coco) {
    var d = {};

    // create an index of all categories
    var category_list = {}
    for (var cat_index in coco.categories) {
      var catid = coco.categories[cat_index]['id']; ``
      category_list[catid] = coco.categories[cat_index]['name'];
    }

    // create an index of all annotations
    var annotation_list = {}
    for (var annotation_index in coco.annotations) {
      var coco_image_id = coco.annotations[annotation_index]['image_id'];
      if (!annotation_list.hasOwnProperty(coco_image_id)) {
        annotation_list[coco_image_id] = [];
      }
      annotation_list[coco_image_id].push(annotation_index);
    }

    // add all files and annotations
    for (var coco_img_index in coco.images) {
      var filename = coco.images[coco_img_index]['file_name'];
      if (coco.images[coco_img_index].hasOwnProperty('coco_url')) {
        filename = coco.images[coco_img_index]['coco_url'];
      }
      var size = -1;
      var via_img_id = this._via_get_image_id(filename, size); //asset.id
      var coco_img_id = coco.images[coco_img_index]['id'];
      var width = coco.images[coco_img_index]['width'];
      var height = coco.images[coco_img_index]['height'];

      d[via_img_id] = {
        'filename': filename,
        'size': size,
        'regions': [],
        'file_attributes': { 'width': width, 'height': height },
      };

      // add all annotations associated with this file
      if (annotation_list.hasOwnProperty(coco_img_id)) {
        for (var i in annotation_list[coco_img_id]) {
          var annotation = coco.annotations[annotation_list[coco_img_id][i]];

          var category_id = -1;
          if (annotation.category_id !== "undefined") {
            category_id = annotation.category_id - 1;
          }

          var bbox_from_polygon = polygon_to_bbox(annotation['segmentation']);

          // fix for variations in segmentation:
          // annotation['segmentation'] = [x0,y0,x1,y1,...]
          // annotation['segmentation'] = [[x0,y0,x1,y1,...]]
          var seg = annotation['segmentation'];
          if (seg.length === 1 && seg[0].length !== 0) {
            seg = annotation['segmentation'][0];
          }

          // check if imported region is polygon or rectangle
          var is_rectangle = true;
          var anno_bbox = annotation['bbox'];
          for (let i = 0; i < anno_bbox.length; ++i) {
            if (anno_bbox[i] !== bbox_from_polygon[i]) {
              is_rectangle = false;
              break;
            }
          }

          if (seg.length === 8 && is_rectangle) {
            // a rectangle
            var r = {
              'shape_attributes': { 'name': 'rect', 'x': [], 'y': [], 'width': [], 'height': [] },
              'region_attributes': {},
            };
            r['shape_attributes']['x'].push(anno_bbox[0]);
            r['shape_attributes']['y'].push(anno_bbox[1]);
            r['shape_attributes']['width'].push(anno_bbox[2]);
            r['shape_attributes']['height'].push(anno_bbox[3]);

            if (category_id !== -1 && !isNaN(category_id)) {
              var sup_category = coco.categories[category_id]['supercategory'];
              r['region_attributes'][sup_category] = coco.categories[category_id]['name'];
            }
          } else {
            // other shapes
            let r = {
              'shape_attributes': { 'name': 'polygon', 'all_points_x': [], 'all_points_y': [] },
              'region_attributes': {},
            };
            for (var j = 0; j < seg.length; j = j + 2) {
              r['shape_attributes']['all_points_x'].push(seg[j]);
              r['shape_attributes']['all_points_y'].push(seg[j + 1]);
            }
          }
          d[via_img_id].regions.push(r);
        }
      }
    }
    return d;
  }

  // assumes that csv line follows the RFC 4180 standard
  // see: https://en.wikipedia.org/wiki/Comma-separated_values
  parse_csv_line(s: any, field_separator: any): any[] {
    if (typeof (s) === 'undefined' || s.length === 0) {
      return [];
    }

    if (typeof (field_separator) === 'undefined') {
      field_separator = ',';
    }
    var double_quote_seen = false;
    let start = 0;
    let d = [];

    let i = 0;
    while (i < s.length) {
      if (s.charAt(i) === field_separator) {
        if (double_quote_seen) {
          // field separator inside double quote is ignored
          i = i + 1;
        } else {
          //var part = s.substr(start, i - start);
          d.push(s.substr(start, i - start));
          start = i + 1;
          i = i + 1;
        }
      } else {
        if (s.charAt(i) === '"') {
          if (double_quote_seen) {
            if (s.charAt(i + 1) === '"') {
              // ignore escaped double quotes
              i = i + 2;
            } else {
              // closing of double quote
              double_quote_seen = false;
              i = i + 1;
            }
          } else {
            double_quote_seen = true;
            start = i;
            i = i + 1;
          }
        } else {
          i = i + 1;
        }
      }

    }
    // extract the last field (csv rows have no trailing comma)
    d.push(s.substr(start));
    return d;
  }

  // s = '{"name":"rect","x":188,"y":90,"width":243,"height":233}'
  json_str_to_map(s: any): any {
    if (typeof (s) === 'undefined' || s.length === 0) {
      return {};
    }

    return JSON.parse(s);
  }

  // ensure the exported json string conforms to RFC 4180
  // see: https://en.wikipedia.org/wiki/Comma-separated_values
  map_to_json(m: any): string {
    let s = [];
    for (var key in m) {
      let v = m[key];
      var si = JSON.stringify(key);
      si += VIA_CSV_KEYVAL_SEP;
      si += JSON.stringify(v);
      s.push(si);
    }
    return '{' + s.join(VIA_CSV_SEP) + '}';
  }

  escape_for_csv(s: any): any {
    return s.replace(/["]/g, '""');
  }

  unescape_from_csv(s: any): any {
    return s.replace(/""/g, '"');
  }

  remove_prefix_suffix_quotes(s) {
    if (s.charAt(0) === '"' && s.charAt(s.length - 1) === '"') {
      return s.substr(1, s.length - 2);
    } else {
      return s;
    }
  }

  clone_image_region(r0) {
    var r1 = new file_region();

    // copy shape attributes
    for (var key in r0.shape_attributes) {
      r1.shape_attributes[key] = clone_value(r0.shape_attributes[key]);
    }

    // copy region attributes
    for (var key in r0.region_attributes) {
      r1.region_attributes[key] = clone_value(r0.region_attributes[key]);
    }
    return r1;
  }

  clone_value(value) {
    if (typeof (value) === 'object') {
      if (Array.isArray(value)) {
        return value.slice(0);
      } else {
        var copy = {};
        for (var p in value) {
          if (value.hasOwnProperty(p)) {
            copy[p] = this.clone_value(value[p]);
          }
        }
        return copy;
      }
    }
    return value;
  }

  _via_get_image_id(filename, size) { /// Destroy this man's whole career. Replaced with asset.id
    if (typeof (size) === 'undefined') {
      return this.filename;
    } else {
      return this.filename + this.size;
    }
  }

  load_text_file(text_file, callback_function) {
    if (text_file) {
      var text_reader = new FileReader();
      text_reader.addEventListener('progress', function (e) {
        show_message('Loading data from file : ' + text_file.name + ' ... ', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      }, false);

      text_reader.addEventListener('error', function () {
        show_message('Error loading data text file :  ' + text_file.name + ' !', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
        callback_function('');
      }, false);

      text_reader.addEventListener('load', function () {
        callback_function(text_reader.result);
      }, false);
      text_reader.readAsText(text_file, 'utf-8');
    }
  }

  import_files_url_from_csv(data: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      if (data === '' || typeof (data) === 'undefined') {
        err_callback();
      }

      var malformed_url_count = 0;
      var url_added_count = 0;

      var line_split_regex = new RegExp('\n|\r|\r\n', 'g');
      var csvdata = data.split(line_split_regex);

      var percent_completed = 0;
      var n = csvdata.length;
      var i;
      var img_id;
      var first_img_id = '';
      for (i = 0; i < n; ++i) {
        // ignore blank lines
        if (csvdata[i].charAt(0) === '\n' || csvdata[i].charAt(0) === '') {
          malformed_url_count += 1;
          continue;
          img_id = this.project_file_add_url(csvdata[i]);
          if (first_img_id === '') {
            first_img_id = img_id;
          }
          url_added_count += 1;
        }
      }
      this.show_message('Added ' + url_added_count + ' files to project', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      if (url_added_count) {
        var first_img_index = this._via_image_id_list.indexOf(first_img_id);
        this._via_show_img(first_img_index);
        this.update_img_fn_list();
      }
    });
  }


  _via_update_ui_components(): void {
    if (!this._via_current_image_loaded) {
      return;
    }

    this.show_message('Updating user interface components.', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
    switch (this._via_display_area_content_name) {
      case this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID:
        this.image_grid_set_content_panel_height_fixed();
        this.image_grid_set_content_to_current_group();
        break;
      case VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE:
        if (!_via_is_window_resized && _via_current_image_loaded) {
          _via_is_window_resized = true;
          this._via_show_img(_via_image_index);

          if (_via_is_canvas_zoomed) {
            this.reset_zoom_level();
          }
        }
        break;
    }
  }

  //
  // Data Exporter
  //
  pack_via_metadata(return_type: any): Promise<unknown> {
    return new Promise(function (ok_callback, err_callback) {
      if (return_type === 'csv') {
        var csvdata = [];
        var csvheader = 'filename,file_size,file_attributes,region_count,region_id,region_shape_attributes,region_attributes';
        csvdata.push(csvheader);

        for (var image_id in this._via_img_metadata) {
          var fattr = this.map_to_json(this._via_img_metadata[image_id].file_attributes);
          fattr = this.escape_for_csv(fattr);

          var prefix = '\n' + this._via_img_metadata[image_id].filename;
          prefix += ',' + this._via_img_metadata[image_id].size;
          prefix += ',"' + fattr + '"';

          var r = this._via_img_metadata[image_id].regions;

          if (r.length !== 0) {
            for (var i = 0; i < r.length; ++i) {
              var csvline = [];
              csvline.push(prefix);
              csvline.push(r.length);
              csvline.push(i);

              var sattr = map_to_json(r[i].shape_attributes);
              sattr = '"' + escape_for_csv(sattr) + '"';
              csvline.push(sattr);

              var rattr = map_to_json(r[i].region_attributes);
              rattr = '"' + escape_for_csv(rattr) + '"';
              csvline.push(rattr);
              csvdata.push(csvline.join(VIA_CSV_SEP));
            }
          } else {
            // @todo: reconsider this practice of adding an empty entry
            csvdata.push(prefix + ',0,0,"{}","{}"');
          }
        }
        ok_callback(csvdata);
      }

      // see http://cocodataset.org/#format-data
      if (return_type === 'coco') {
        img_stat_set_all().then(function (ok) {
          var d = { 'info': {}, 'images': [], 'annotations': [], 'licenses': [], 'categories': [] };
          d.info = {
            'year': new Date().getFullYear(),
            'version': '1',
            'description': 'Exported using VGG Image Annotator (http://www.robots.ox.ac.uk/~vgg/software/via/)',
            'contributor': '',
            'url': 'http://www.robots.ox.ac.uk/~vgg/software/via/',
            'date_created': new Date().toString(),
          };
          d.licenses = [{ 'id': 1, 'name': 'Unknown', 'url': '' }];

          // add files
          var img_id, file_src;
          var annotation_id = 0;
          for (var img_index in this._via_image_id_list) {
            img_id = this._via_image_id_list[img_index];

            // add file
            if (this._via_img_fileref[img_id] instanceof File) {
              file_src = this._via_img_fileref[img_id].filename;
            } else {
              //file_src = this._via_img_src[img_id];
              file_src = this._via_img_metadata[img_id].filename;
            }
            d.images.push({
              'id': parseInt(img_index),
              'width': _via_img_stat[img_index][0],
              'height': _via_img_stat[img_index][1],
              'file_name': this._via_img_metadata[img_id].filename,
              'license': 1,
              'flickr_url': file_src,
              'coco_url': file_src,
              'date_captured': '',
            });

            // initialize categories
            var attrval_to_catid = {};
            var cat_id = 1;
            for (var rid in this._via_attributes['region']) {
              if (this._via_attributes['region'][rid].type === VIA_ATTRIBUTE_TYPE.CHECKBOX ||
                this._via_attributes['region'][rid].type === VIA_ATTRIBUTE_TYPE.DROPDOWN ||
                this._via_attributes['region'][rid].type === VIA_ATTRIBUTE_TYPE.RADIO) {
                for (var oid in this._via_attributes['region'][rid]['options']) {
                  d.categories.push({ 'id': cat_id, 'name': oid, 'supercategory': rid });
                  attrval_to_catid[oid] = cat_id;
                  cat_id = cat_id + 1;
                }
              }
            }

            var shape_name, region;
            for (var rindex in this._via_img_metadata[img_id].regions) {
              var region = this._via_img_metadata[img_id].regions[rindex];
              if (region.shape_attributes['name'] === 'rect' ||
                region.shape_attributes['name'] === 'circle' ||
                region.shape_attributes['name'] === 'ellipse' ||
                region.shape_attributes['name'] === 'polygon' ||
                region.shape_attributes['name'] === 'point') {
                var annotation = this.via_region_shape_to_coco_annotation(region.shape_attributes);
                var attr_val;
                for (var k in region.region_attributes) {
                  if (region.region_attributes[k] !== "undefined" &&
                    Object.entries(region.region_attributes[k]).length > 0) {
                    attr_val = region.region_attributes[k];
                  }
                }
                // assume there is only one value (radio button)
                cat_id = attrval_to_catid[attr_val];

                d.annotations.push(Object.assign({
                  'id': annotation_id,
                  'image_id': img_index,
                  'category_id': cat_id,
                }, annotation));
                annotation_id = annotation_id + 1;
              }
            }
          }
          ok_callback([JSON.stringify(d)]);
        }.bind(this), function (err) {
          err_callback(err);
        }.bind(this));
      } else {
        // default format is JSON
        ok_callback([JSON.stringify(this._via_img_metadata)]);
      }
    }.bind(this));
  }

  via_region_shape_to_coco_annotation(shape_attributes) {
    var annotation = { 'segmentation': [], 'area': 12, 'bbox': [], 'iscrowd': 0 };

    switch (shape_attributes['name']) {
      case 'rect':
        var x0 = shape_attributes['x'];
        var y0 = shape_attributes['y'];
        var w = parseInt(shape_attributes['width']);
        var h = parseInt(shape_attributes['height']);
        var x1 = x0 + w;
        var y1 = y0 + h;
        annotation['segmentation'] = [x0, y0, x1, y0, x1, y1, x0, y1];
        annotation['area'] = w * h;

        annotation['bbox'] = [x0, y0, w, h];
        break;

      case 'point':
        var cx = shape_attributes['cx'];
        var cy = shape_attributes['cy'];
        // 2 is for visibility - currently set to always inside segmentation.
        // see Keypoint Detection: http://cocodataset.org/#format-data
        annotation['keypoints'] = [cx, cy, 2];
        annotation['num_keypoints'] = 1;
        break;

      case 'circle':
        var a, b;
        a = shape_attributes['r'];
        b = shape_attributes['r'];
        var theta_to_radian = Math.PI / 180;

        for (var theta = 0; theta < 360; theta = theta + VIA_POLYGON_SEGMENT_SUBTENDED_ANGLE) {
          var theta_radian = theta * theta_to_radian;
          var x = shape_attributes['cx'] + a * Math.cos(theta_radian);
          var y = shape_attributes['cy'] + b * Math.sin(theta_radian);
          annotation['segmentation'].push(fixfloat(x), fixfloat(y));
        }
        annotation['bbox'] = this.polygon_to_bbox(annotation['segmentation']);
        annotation['area'] = annotation['bbox'][2] * annotation['bbox'][3];
        break;

      case 'ellipse':
        var a, b;
        a = shape_attributes['rx'];
        b = shape_attributes['ry'];
        var rotation = shape_attributes['theta'];
        var theta_to_radian = Math.PI / 180;

        for (var theta = 0; theta < 360; theta = theta + VIA_POLYGON_SEGMENT_SUBTENDED_ANGLE) {
          var theta_radian = theta * theta_to_radian;
          x = shape_attributes['cx'] +
            (a * Math.cos(theta_radian) * Math.cos(rotation)) -
            (b * Math.sin(theta_radian) * Math.sin(rotation));
          var y = shape_attributes['cy'] +
            (a * Math.cos(theta_radian) * Math.sin(rotation)) +
            (b * Math.sin(theta_radian) * Math.cos(rotation));
          annotation['segmentation'].push(fixfloat(x), fixfloat(y));
        }
        annotation['bbox'] = this.polygon_to_bbox(annotation['segmentation']);
        annotation['area'] = annotation['bbox'][2] * annotation['bbox'][3];
        break;

      case 'polygon':
        annotation['segmentation'] = [];
        x0 = +Infinity;
        y0 = +Infinity;
        x1 = -Infinity;
        y1 = -Infinity;
        for (var i in shape_attributes['all_points_x']) {
          annotation['segmentation'].push(shape_attributes['all_points_x'][i]);
          annotation['segmentation'].push(shape_attributes['all_points_y'][i]);
          if (shape_attributes['all_points_x'][i] < x0) {
            x0 = shape_attributes['all_points_x'][i];
          }
          if (shape_attributes['all_points_y'][i] < y0) {
            y0 = shape_attributes['all_points_y'][i];
          }
          if (shape_attributes['all_points_x'][i] > x1) {
            x1 = shape_attributes['all_points_x'][i];
          }
          if (shape_attributes['all_points_y'][i] > y1) {
            y1 = shape_attributes['all_points_y'][i];
          }
        }
        var w = x1 - x0;
        var h = y1 - y0;
        annotation['bbox'] = [x0, y0, w, h];
        annotation['area'] = w * h; // approximate area
    }
    return annotation;
  }

  save_data_to_local_file(data: any, filename: any): void {
    let a = document.createElement('a');
    a.href = URL.createObjectURL(data);
    a.download = filename;

    // simulate a mouse click event
    var event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    a.dispatchEvent(event);

    // @todo: replace a.dispatchEvent() with a.click()
    // a.click() based trigger is supported in Chrome 70 and Safari 11/12 but **not** in Firefox 63
    //a.click();
  }

  //
  // Maintainers of user interface
  //

  init_message_panel(): void {
    let p = document.getElementById('message_panel');
    p.addEventListener('mousedown', function () {
      this.style.display = 'none';
    }, false);
    p.addEventListener('mouseover', ((event: CustomEvent) => {
      clearTimeout(this._via_message_clear_timer) // stop any previous timeouts
    }),  false);
  }
  
  show_message(msg: any, t: any): void {
    if (this._via_message_clear_timer) {
      clearTimeout(this._via_message_clear_timer); // stop any previous timeouts
    }
    var timeout = t;
    if (typeof t === 'undefined') {
      timeout = VIA_THEME_MESSAGE_TIMEOUT_MS;
    }
    document.getElementById('message_panel_content').innerHTML = msg;
    document.getElementById('message_panel').style.display = 'block';

    this._via_message_clear_timer = setTimeout(function () {
      document.getElementById('message_panel').style.display = 'none';
    }, timeout);
  }

  _via_regions_group_color_init(): void {
    this._via_canvas_regions_group_color = {};
    let aid = this._via_settings_ui_image_region_color;
    if (aid !== '__via_default_region_color__') {
      var avalue;
      for (var i = 0; i < this._via_img_metadata[this._via_image_id].regions.length; ++i) {
        avalue = this._via_img_metadata[this._via_image_id].regions[i].region_attributes[aid];
        this._via_canvas_regions_group_color[avalue] = 1;
      }
      var color_index = 0;
      for (avalue in this._via_canvas_regions_group_color) {
        this._via_canvas_regions_group_color[avalue] = VIA_REGION_COLOR_LIST[color_index % VIA_REGION_COLOR_LIST.length];
        color_index = color_index + 1;
      }
    }
  }

  // transform regions in image space to canvas space
  _via_load_canvas_regions(): void {
    this._via_regions_group_color_init();

    // load all existing annotations into this._via_canvas_regions
    var regions = this._via_img_metadata[this._via_image_id].regions;
    this._via_canvas_regions = [];
    for (var i = 0; i < regions.length; ++i) {
      var region_i = new file_region();
      for (var key in regions[i].shape_attributes) {
        region_i.shape_attributes[key] = regions[i].shape_attributes[key];
      }
      this._via_canvas_regions.push(region_i);

      switch (this._via_canvas_regions[i].shape_attributes['name']) {
        case VIA_REGION_SHAPE.RECT:
          let x = regions[i].shape_attributes['x'] / _via_canvas_scale;
          let y = regions[i].shape_attributes['y'] / _via_canvas_scale;
          var width = regions[i].shape_attributes['width'] / _via_canvas_scale;
          var height = regions[i].shape_attributes['height'] / _via_canvas_scale;

          this._via_canvas_regions[i].shape_attributes['x'] = Math.round(x);
          this._via_canvas_regions[i].shape_attributes['y'] = Math.round(y);
          this._via_canvas_regions[i].shape_attributes['width'] = Math.round(width);
          this._via_canvas_regions[i].shape_attributes['height'] = Math.round(height);
          break;

        case VIA_REGION_SHAPE.CIRCLE:
          let cx = regions[i].shape_attributes['cx'] / _via_canvas_scale;
          let cy = regions[i].shape_attributes['cy'] / _via_canvas_scale;
          let r = regions[i].shape_attributes['r'] / _via_canvas_scale;
          this._via_canvas_regions[i].shape_attributes['cx'] = Math.round(cx);
          this._via_canvas_regions[i].shape_attributes['cy'] = Math.round(cy);
          this._via_canvas_regions[i].shape_attributes['r'] = Math.round(r);
          break;

        case VIA_REGION_SHAPE.ELLIPSE:
          cx = regions[i].shape_attributes['cx'] / _via_canvas_scale;
          cy = regions[i].shape_attributes['cy'] / _via_canvas_scale;
          let rx = regions[i].shape_attributes['rx'] / _via_canvas_scale;
          let ry = regions[i].shape_attributes['ry'] / _via_canvas_scale;
          // rotation in radians
          var theta = regions[i].shape_attributes['theta'];
          this._via_canvas_regions[i].shape_attributes['cx'] = Math.round(cx);
          this._via_canvas_regions[i].shape_attributes['cy'] = Math.round(cy);
          this._via_canvas_regions[i].shape_attributes['rx'] = Math.round(rx);
          this._via_canvas_regions[i].shape_attributes['ry'] = Math.round(ry);
          this._via_canvas_regions[i].shape_attributes['theta'] = theta;
          break;

        case VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case VIA_REGION_SHAPE.POLYGON:
          var all_points_x = regions[i].shape_attributes['all_points_x'].slice(0);
          var all_points_y = regions[i].shape_attributes['all_points_y'].slice(0);
          for (var j = 0; j < all_points_x.length; ++j) {
            all_points_x[j] = Math.round(all_points_x[j] / _via_canvas_scale);
            all_points_y[j] = Math.round(all_points_y[j] / _via_canvas_scale);
          }
          this._via_canvas_regions[i].shape_attributes['all_points_x'] = all_points_x;
          this._via_canvas_regions[i].shape_attributes['all_points_y'] = all_points_y;
          break;

        case VIA_REGION_SHAPE.POINT:
          cx = regions[i].shape_attributes['cx'] / _via_canvas_scale;
          cy = regions[i].shape_attributes['cy'] / _via_canvas_scale;

          this._via_canvas_regions[i].shape_attributes['cx'] = Math.round(cx);
          this._via_canvas_regions[i].shape_attributes['cy'] = Math.round(cy);
          break;
      }
    }
  }

  // updates currently selected region shape
  select_region_shape(sel_shape_name: any): void {
    for (var shape_name in VIA_REGION_SHAPE) {
      var ui_element = document.getElementById('region_shape_' + VIA_REGION_SHAPE[shape_name]);
      ui_element.classList.remove('selected');
    }

    _via_current_shape = sel_shape_name;
    var ui_element = document.getElementById('region_shape_' + _via_current_shape);
    ui_element.classList.add('selected');

    switch (_via_current_shape) {
      case VIA_REGION_SHAPE.RECT: // Fall-through
      case VIA_REGION_SHAPE.CIRCLE: // Fall-through
      case VIA_REGION_SHAPE.ELLIPSE:
        this.show_message('Press single click and drag mouse to draw ' +
          _via_current_shape + ' region', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
        break;

      case VIA_REGION_SHAPE.POLYLINE:
      case VIA_REGION_SHAPE.POLYGON:
        _via_is_user_drawing_polygon = false;
        _via_current_polygon_region_id = -1;

        this.show_message('[Single Click] to define polygon/polyline vertices, ' +
          '[Backspace] to delete last vertex, [Enter] to finish, [Esc] to cancel drawing.', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
        break;

      case VIA_REGION_SHAPE.POINT:
        this.show_message('Press single click to define points (or landmarks)', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
        break;

      default:
        this.show_message('Unknown shape selected!', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
        break;
    }
  }

  set_all_canvas_size(w: any, h: any): void {
    this._via_reg_canvas.height = h;
    this._via_reg_canvas.width = w;

    this.image_panel.style.height = h + 'px';
    this.image_panel.style.width = w + 'px';
  }

  set_all_canvas_scale(s: any): void {
    this._via_reg_ctx.scale(s, s);
  }

  show_all_canvas(): void {
    this.image_panel.style.display = 'inline-block';
  }

  hide_all_canvas(): void {
    this.image_panel.style.display = 'none';
  }

  jump_to_image(image_index: any): void {
    if (this._via_img_count <= 0) {
      return;
    }

    switch (this._via_display_area_content_name) {
      case this.VIA_DISPLAY_AREA_CONTENT_NAME.IMAGE_GRID:
        if (image_index >= 0 && image_index < this._via_img_count) {
          // @todo: jump to image grid page view with the given first image index
          this.show_single_image_view();
          this._via_show_img(image_index);
        }
        break;
      default:
        if (image_index >= 0 && image_index < this._via_img_count) {
          this._via_show_img(image_index);
        }
        break;
    }
  }

  count_missing_region_attr(img_id: any): number {
    var miss_region_attr_count = 0;
    var attr_count = Object.keys( this._via_region_attributes).length;
    for (var i = 0; i < this._via_img_metadata[img_id].regions.length; ++i) {
      var set_attr_count = Object.keys(this._via_img_metadata[img_id].regions[i].region_attributes).length;
      miss_region_attr_count += (attr_count - set_attr_count);
    }
    return miss_region_attr_count;
  }

  count_missing_file_attr(img_id: any): number {
    return Object.keys(this._via_file_attributes).length - Object.keys(this._via_img_metadata[img_id].file_attributes).length;
  }

  toggle_all_regions_selection(is_selected: any): void {
    var n = this._via_img_metadata[this._via_image_id].regions.length;
    var i;
    _via_region_selected_flag = [];
    for (i = 0; i < n; ++i) {
      _via_region_selected_flag[i] = is_selected;
    }
    _via_is_all_region_selected = is_selected;
    this.annotation_editor_hide();
    // if ( this._via_annotation_editor_mode === VIA_ANNOTATION_EDITOR_MODE.ALL_REGIONS ) {
    //   annotation_editor_clear_row_highlight();
    // }
  }

  select_only_region(region_id: any): void {
    this.toggle_all_regions_selection(false);
    this.set_region_select_state(region_id, true);
    this._via_is_region_selected = true;
    this._via_is_all_region_selected = false;
    this._via_user_sel_region_id = region_id;
  }

  set_region_select_state(region_id: number, is_selected: any): void {
    this._via_region_selected_flag[region_id] = is_selected;
  }

  show_annotation_data(): void {
    pack_via_metadata('csv').then(function (data) {
      var hstr = '<pre>' + data.join('') + '</pre>';
      var window_features = 'toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no';
      window_features += ',width=800,height=600';
      var annotation_data_window = window.open('', 'Annotations (preview) ', window_features);
      annotation_data_window.document.body.innerHTML = hstr;
    }.bind(this), function (err) {
      this.show_message('Failed to collect annotation data!', 2 * this.VIA_THEME_MESSAGE_TIMEOUT_MS);
    }.bind(this));
  }

  //
  // Image click handlers
  //

  // enter annotation mode on double click
  _via_reg_canvas_dblclick_handler(e: Event): void {
    e.stopPropagation();
    // @todo: use double click in future
  }

  // user clicks on the canvas
  _via_reg_canvas_mousedown_handler(e: Event): void {
    e.stopPropagation();
    this._via_click_x0 = (e as MouseEvent).offsetX; this._via_click_y0 = (e as MouseEvent).offsetY;
    this._via_region_edge = this.is_on_region_corner(_via_click_x0, _via_click_y0);
    var region_id = this.is_inside_region(this._via_click_x0, this._via_click_y0, true);

    if (_via_is_region_selected) {
      // check if user clicked on the region boundary
      if (_via_region_edge[1] > 0) {
        if (!_via_is_user_resizing_region) {
          if (_via_region_edge[0] !== this._via_user_sel_region_id) {
            this._via_user_sel_region_id = _via_region_edge[0];
          }
          // resize region
          _via_is_user_resizing_region = true;
        }
      } else {
        var yes = is_inside_this_region(_via_click_x0,
          _via_click_y0,
          this._via_user_sel_region_id);
        if (yes) {
          if (!_via_is_user_moving_region) {
            _via_is_user_moving_region = true;
            _via_region_click_x = _via_click_x0;
            _via_region_click_y = _via_click_y0;
          }
        }
        if (region_id === -1) {
          // mousedown on outside any region
          _via_is_user_drawing_region = true;
          // unselect all regions
          _via_is_region_selected = false;
          this._via_user_sel_region_id = -1;
          this.toggle_all_regions_selection(false);
        }
      }
    } else {
      if (region_id === -1) {
        // mousedown outside a region
        if (_via_current_shape !== VIA_REGION_SHAPE.POLYGON &&
          _via_current_shape !== VIA_REGION_SHAPE.POLYLINE &&
          _via_current_shape !== VIA_REGION_SHAPE.POINT) {
          // this is a bounding box drawing event
          _via_is_user_drawing_region = true;
        }
      } else {
        // mousedown inside a region
        // this could lead to (1) region selection or (2) region drawing
        _via_is_user_drawing_region = true;
      }
    }
  };

  // implements the following functionalities:
  //  - new region drawing (including polygon)
  _via_reg_canvas_mouseup_handler(e: Event): void {
    e.stopPropagation();
    _via_click_x1 = (e as MouseEvent).offsetX; _via_click_y1 = (e as MouseEvent).offsetY;

    var click_dx = Math.abs(_via_click_x1 - _via_click_x0);
    var click_dy = Math.abs(_via_click_y1 - _via_click_y0);

    // indicates that user has finished moving a region
    if (_via_is_user_moving_region) {
      _via_is_user_moving_region = false;
      _via_reg_canvas.style.cursor = "default";

      let move_x = Math.round(_via_click_x1 - _via_region_click_x);
      let move_y = Math.round(_via_click_y1 - _via_region_click_y);

      if (Math.abs(move_x) > VIA_MOUSE_CLICK_TOL ||
        Math.abs(move_y) > VIA_MOUSE_CLICK_TOL) {
        // move all selected regions
        _via_move_selected_regions(move_x, move_y);
      } else {
        // indicates a user click on an already selected region
        // this could indicate the user's intention to select another
        // nested region within this region
        // OR
        // draw a nested region (i.e. region inside a region)

        // traverse the canvas regions in alternating ascending
        // and descending order to solve the issue of nested regions
        var nested_region_id = is_inside_region(_via_click_x0, _via_click_y0, true);
        if (nested_region_id >= 0 &&
          nested_region_id !== this._via_user_sel_region_id) {
          this._via_user_sel_region_id = nested_region_id;
          _via_is_region_selected = true;
          _via_is_user_moving_region = false;

          // de-select all other regions if the user has not pressed Shift
          if (!(e as KeyboardEvent).shiftKey) {
            this.toggle_all_regions_selection(false);
          }
          this.set_region_select_state(nested_region_id, true);
          this.annotation_editor_show();
        } else {
          // user clicking inside an already selected region
          // indicates that the user intends to draw a nested region
          this.toggle_all_regions_selection(false);
          _via_is_region_selected = false;

          switch (_via_current_shape) {
            case VIA_REGION_SHAPE.POLYLINE: // handled by case for POLYGON
            case VIA_REGION_SHAPE.POLYGON:
              // user has clicked on the first point in a new polygon
              // see also event 'mouseup' for _via_is_user_drawing_polygon=true
              _via_is_user_drawing_polygon = true;

              var canvas_polygon_region = new file_region();
              canvas_polygon_region.shape_attributes['name'] = _via_current_shape;
              canvas_polygon_region.shape_attributes['all_points_x'] = [Math.round(_via_click_x0)];
              canvas_polygon_region.shape_attributes['all_points_y'] = [Math.round(_via_click_y0)];
              var new_length = this._via_canvas_regions.push(canvas_polygon_region);
              _via_current_polygon_region_id = new_length - 1;
              break;

            case VIA_REGION_SHAPE.POINT:
              // user has marked a landmark point
              var point_region = new file_region();
              point_region.shape_attributes['name'] = VIA_REGION_SHAPE.POINT;
              point_region.shape_attributes['cx'] = Math.round(_via_click_x0 * _via_canvas_scale);
              point_region.shape_attributes['cy'] = Math.round(_via_click_y0 * _via_canvas_scale);
              this._via_img_metadata[this._via_image_id].regions.push(point_region);

              var canvas_point_region = new file_region();
              canvas_point_region.shape_attributes['name'] = VIA_REGION_SHAPE.POINT;
              canvas_point_region.shape_attributes['cx'] = Math.round(_via_click_x0);
              canvas_point_region.shape_attributes['cy'] = Math.round(_via_click_y0);
              this._via_canvas_regions.push(canvas_point_region);
              break;
          }
          this.annotation_editor_update_content();
        }
      }
      this._via_redraw_reg_canvas();
      _via_reg_canvas.focus();
      return;
    }

    // indicates that user has finished resizing a region
    if (_via_is_user_resizing_region) {
      // _via_click(x0,y0) to _via_click(x1,y1)
      _via_is_user_resizing_region = false;
      _via_reg_canvas.style.cursor = "default";

      // update the region
      region_id = _via_region_edge[0];
      let image_attr = this._via_img_metadata[this._via_image_id].regions[region_id].shape_attributes;
      var canvas_attr = this._via_canvas_regions[region_id].shape_attributes;

      switch (canvas_attr['name']) {
        case VIA_REGION_SHAPE.RECT:
          let d = [canvas_attr['x'], canvas_attr['y'], 0, 0];
          d[2] = d[0] + canvas_attr['width'];
          d[3] = d[1] + canvas_attr['height'];

          var mx = _via_current_x;
          var my = _via_current_y;
          let preserve_aspect_ratio = false;

          // constrain (mx,my) to lie on a line connecting a diagonal of rectangle
          if (_via_is_ctrl_pressed) {
            preserve_aspect_ratio = true;
          }

          rect_update_corner(_via_region_edge[1], d, mx, my, preserve_aspect_ratio);
          rect_standardize_coordinates(d);

          let w = Math.abs(d[2] - d[0]);
          let h = Math.abs(d[3] - d[1]);

          image_attr['x'] = Math.round(d[0] * _via_canvas_scale);
          image_attr['y'] = Math.round(d[1] * _via_canvas_scale);
          image_attr['width'] = Math.round(w * _via_canvas_scale);
          image_attr['height'] = Math.round(h * _via_canvas_scale);

          canvas_attr['x'] = Math.round(image_attr['x'] / _via_canvas_scale);
          canvas_attr['y'] = Math.round(image_attr['y'] / _via_canvas_scale);
          canvas_attr['width'] = Math.round(image_attr['width'] / _via_canvas_scale);
          canvas_attr['height'] = Math.round(image_attr['height'] / _via_canvas_scale);
          break;

        case VIA_REGION_SHAPE.CIRCLE:
          var dx = Math.abs(canvas_attr['cx'] - _via_current_x);
          var dy = Math.abs(canvas_attr['cy'] - _via_current_y);
          var new_r = Math.sqrt(dx * dx + dy * dy);

          image_attr['r'] = fixfloat(new_r * _via_canvas_scale);
          canvas_attr['r'] = Math.round(image_attr['r'] / _via_canvas_scale);
          break;

        case VIA_REGION_SHAPE.ELLIPSE:
          var new_rx = canvas_attr['rx'];
          var new_ry = canvas_attr['ry'];
          var new_theta = canvas_attr['theta'];
          var dx = Math.abs(canvas_attr['cx'] - _via_current_x);
          var dy = Math.abs(canvas_attr['cy'] - _via_current_y);

          switch (_via_region_edge[1]) {
            case 5:
              new_ry = Math.sqrt(dx * dx + dy * dy);
              new_theta = Math.atan2(- (_via_current_x - canvas_attr['cx']), (_via_current_y - canvas_attr['cy']));
              break;

            case 6:
              new_rx = Math.sqrt(dx * dx + dy * dy);
              new_theta = Math.atan2((_via_current_y - canvas_attr['cy']), (_via_current_x - canvas_attr['cx']));
              break;

            default:
              new_rx = dx;
              new_ry = dy;
              new_theta = 0;
              break;
          }

          image_attr['rx'] = fixfloat(new_rx * _via_canvas_scale);
          image_attr['ry'] = fixfloat(new_ry * _via_canvas_scale);
          image_attr['theta'] = fixfloat(new_theta);

          canvas_attr['rx'] = Math.round(image_attr['rx'] / _via_canvas_scale);
          canvas_attr['ry'] = Math.round(image_attr['ry'] / _via_canvas_scale);
          canvas_attr['theta'] = fixfloat(new_theta);
          break;

        case VIA_REGION_SHAPE.POLYLINE: // handled by polygon
        case VIA_REGION_SHAPE.POLYGON:
          var moved_vertex_id = _via_region_edge[1] - VIA_POLYGON_RESIZE_VERTEX_OFFSET;

          if ((e as KeyboardEvent).ctrlKey) {
            // if on vertex, delete it
            // if on edge, add a new vertex
            var r = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;
            var shape = r.name;
            var is_on_vertex = is_on_polygon_vertex(r['all_points_x'], r['all_points_y'], _via_current_x, _via_current_y);

            if (is_on_vertex === _via_region_edge[1]) {
              // click on vertex, hence delete vertex
              if (_via_polygon_del_vertex(region_id, moved_vertex_id)) {
                this.show_message('Deleted vertex ' + moved_vertex_id + ' from region', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
              }
            } else {
              let is_on_edge = is_on_polygon_edge(r['all_points_x'], r['all_points_y'], _via_current_x, _via_current_y);
              if (is_on_edge === _via_region_edge[1]) {
                // click on edge, hence add new vertex
                var vertex_index = is_on_edge - VIA_POLYGON_RESIZE_VERTEX_OFFSET;
                var canvas_x0 = Math.round(_via_click_x1);
                var canvas_y0 = Math.round(_via_click_y1);
                var img_x0 = Math.round(canvas_x0 * _via_canvas_scale);
                var img_y0 = Math.round(canvas_y0 * _via_canvas_scale);
                canvas_x0 = Math.round(img_x0 / _via_canvas_scale);
                canvas_y0 = Math.round(img_y0 / _via_canvas_scale);

                this._via_canvas_regions[region_id].shape_attributes['all_points_x'].splice(vertex_index + 1, 0, canvas_x0);
                this._via_canvas_regions[region_id].shape_attributes['all_points_y'].splice(vertex_index + 1, 0, canvas_y0);
                this._via_img_metadata[this._via_image_id].regions[region_id].shape_attributes['all_points_x'].splice(vertex_index + 1, 0, img_x0);
                this._via_img_metadata[this._via_image_id].regions[region_id].shape_attributes['all_points_y'].splice(vertex_index + 1, 0, img_y0);

                this.show_message('Added 1 new vertex to ' + shape + ' region', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
              }
            }
          } else {
            // update coordinate of vertex
            var imx = Math.round(_via_current_x * _via_canvas_scale);
            var imy = Math.round(_via_current_y * _via_canvas_scale);
            image_attr['all_points_x'][moved_vertex_id] = imx;
            image_attr['all_points_y'][moved_vertex_id] = imy;
            canvas_attr['all_points_x'][moved_vertex_id] = Math.round(imx / _via_canvas_scale);
            canvas_attr['all_points_y'][moved_vertex_id] = Math.round(imy / _via_canvas_scale);
          }
          break;
      } // end of switch()
      this._via_redraw_reg_canvas();
      _via_reg_canvas.focus();
      return;
    }

    // denotes a single click (= mouse down + mouse up)
    if (click_dx < VIA_MOUSE_CLICK_TOL ||
      click_dy < VIA_MOUSE_CLICK_TOL) {
      // if user is already drawing polygon, then each click adds a new point
      if (_via_is_user_drawing_polygon) {
        var canvas_x0 = Math.round(_via_click_x1);
        var canvas_y0 = Math.round(_via_click_y1);
        var n = this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_x'].length;
        var last_x0 = this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_x'][n - 1];
        var last_y0 = this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_y'][n - 1];
        // discard if the click was on the last vertex
        if (canvas_x0 !== last_x0 || canvas_y0 !== last_y0) {
          // user clicked on a new polygon point
          this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_x'].push(canvas_x0);
          this._via_canvas_regions[_via_current_polygon_region_id].shape_attributes['all_points_y'].push(canvas_y0);
        }
      } else {
        var region_id = is_inside_region(_via_click_x0, _via_click_y0, true);
        if (region_id >= 0) {
          // first click selects region
          this._via_user_sel_region_id = region_id;
          _via_is_region_selected = true;
          _via_is_user_moving_region = false;
          _via_is_user_drawing_region = false;

          // de-select all other regions if the user has not pressed Shift
          if (!(e as KeyboardEvent).shiftKey) {
            // annotation_editor_clear_row_highlight();
            this.toggle_all_regions_selection(false);
          }
          this.set_region_select_state(region_id, true);

          // show annotation editor only when a single region is selected
          if (!(e as KeyboardEvent).shiftKey) {
            this.annotation_editor_show();
          } else {
            this.annotation_editor_hide();
          }

          // show the region info
          if (_via_is_region_info_visible) {
            var canvas_attr = this._via_canvas_regions[region_id].shape_attributes;

            switch (canvas_attr['name']) {
              case VIA_REGION_SHAPE.RECT:
                break;

              case VIA_REGION_SHAPE.CIRCLE:
                var rf = document.getElementById('region_info');
                var attr = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;
                rf.innerHTML += ',' + ' Radius:' + attr['r'];
                break;

              case VIA_REGION_SHAPE.ELLIPSE:
                var rf = document.getElementById('region_info');
                var attr = this._via_canvas_regions[this._via_user_sel_region_id].shape_attributes;
                rf.innerHTML += ',' + ' X-radius:' + attr['rx'] + ',' + ' Y-radius:' + attr['ry'];
                break;

              case VIA_REGION_SHAPE.POLYLINE:
              case VIA_REGION_SHAPE.POLYGON:
                break;
            }
          }

          this.show_message('Region selected. If you intended to draw a region, click again inside the selected region to start drawing a region.', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS)
        } else {
          if (_via_is_user_drawing_region) {
            // clear all region selection
            _via_is_user_drawing_region = false;
            _via_is_region_selected = false;
            this.toggle_all_regions_selection(false);
            this.annotation_editor_hide();
          } else {
            switch (_via_current_shape) {
              case VIA_REGION_SHAPE.POLYLINE: // handled by case for POLYGON
              case VIA_REGION_SHAPE.POLYGON:
                // user has clicked on the first point in a new polygon
                // see also event 'mouseup' for _via_is_user_moving_region=true
                _via_is_user_drawing_polygon = true;

                var canvas_polygon_region = new file_region();
                canvas_polygon_region.shape_attributes['name'] = _via_current_shape;
                canvas_polygon_region.shape_attributes['all_points_x'] = [Math.round(_via_click_x0)];
                canvas_polygon_region.shape_attributes['all_points_y'] = [Math.round(_via_click_y0)];

                var new_length = this._via_canvas_regions.push(canvas_polygon_region);
                _via_current_polygon_region_id = new_length - 1;
                break;

              case VIA_REGION_SHAPE.POINT:
                // user has marked a landmark point
                var point_region = new file_region();
                point_region.shape_attributes['name'] = VIA_REGION_SHAPE.POINT;
                point_region.shape_attributes['cx'] = Math.round(_via_click_x0 * _via_canvas_scale);
                point_region.shape_attributes['cy'] = Math.round(_via_click_y0 * _via_canvas_scale);
                this._via_img_metadata[this._via_image_id].regions.push(point_region);

                var canvas_point_region = new file_region();
                canvas_point_region.shape_attributes['name'] = VIA_REGION_SHAPE.POINT;
                canvas_point_region.shape_attributes['cx'] = Math.round(_via_click_x0);
                canvas_point_region.shape_attributes['cy'] = Math.round(_via_click_y0);
                this._via_canvas_regions.push(canvas_point_region);

                this.annotation_editor_update_content();
                break;
            }
          }
        }
      }
      this._via_redraw_reg_canvas();
      _via_reg_canvas.focus();
      return;
    }

    // indicates that user has finished drawing a new region
    if (_via_is_user_drawing_region) {
      _via_is_user_drawing_region = false;
      var region_x0 = _via_click_x0;
      var region_y0 = _via_click_y0;
      var region_x1 = _via_click_x1;
      var region_y1 = _via_click_y1;

      var original_img_region = new file_region();
      var canvas_img_region = new file_region();
      var region_dx = Math.abs(region_x1 - region_x0);
      var region_dy = Math.abs(region_y1 - region_y0);
      var new_region_added = false;

      if (region_dx > VIA_REGION_MIN_DIM && region_dy > VIA_REGION_MIN_DIM) { // avoid regions with 0 dim
        switch (_via_current_shape) {
          case VIA_REGION_SHAPE.RECT:
            // ensure that (x0,y0) is top-left and (x1,y1) is bottom-right
            if (_via_click_x0 < _via_click_x1) {
              region_x0 = _via_click_x0;
              region_x1 = _via_click_x1;
            } else {
              region_x0 = _via_click_x1;
              region_x1 = _via_click_x0;
            }

            if (_via_click_y0 < _via_click_y1) {
              region_y0 = _via_click_y0;
              region_y1 = _via_click_y1;
            } else {
              region_y0 = _via_click_y1;
              region_y1 = _via_click_y0;
            }

            let x = Math.round(region_x0 * _via_canvas_scale);
            let y = Math.round(region_y0 * _via_canvas_scale);
            var width = Math.round(region_dx * _via_canvas_scale);
            var height = Math.round(region_dy * _via_canvas_scale);
            original_img_region.shape_attributes['name'] = 'rect';
            original_img_region.shape_attributes['x'] = x;
            original_img_region.shape_attributes['y'] = y;
            original_img_region.shape_attributes['width'] = width;
            original_img_region.shape_attributes['height'] = height;

            canvas_img_region.shape_attributes['name'] = 'rect';
            canvas_img_region.shape_attributes['x'] = Math.round(x / _via_canvas_scale);
            canvas_img_region.shape_attributes['y'] = Math.round(y / _via_canvas_scale);
            canvas_img_region.shape_attributes['width'] = Math.round(width / _via_canvas_scale);
            canvas_img_region.shape_attributes['height'] = Math.round(height / _via_canvas_scale);

            new_region_added = true;
            break;

          case VIA_REGION_SHAPE.CIRCLE:
            let cx = Math.round(region_x0 * _via_canvas_scale);
            let cy = Math.round(region_y0 * _via_canvas_scale);
            r = Math.round(Math.sqrt(region_dx * region_dx + region_dy * region_dy) * _via_canvas_scale);

            original_img_region.shape_attributes['name'] = 'circle';
            original_img_region.shape_attributes['cx'] = cx;
            original_img_region.shape_attributes['cy'] = cy;
            original_img_region.shape_attributes['r'] = r;

            canvas_img_region.shape_attributes['name'] = 'circle';
            canvas_img_region.shape_attributes['cx'] = Math.round(cx / _via_canvas_scale);
            canvas_img_region.shape_attributes['cy'] = Math.round(cy / _via_canvas_scale);
            canvas_img_region.shape_attributes['r'] = Math.round(r / _via_canvas_scale);

            new_region_added = true;
            break;

          case VIA_REGION_SHAPE.ELLIPSE:
            cx = Math.round(region_x0 * _via_canvas_scale);
            cy = Math.round(region_y0 * _via_canvas_scale);
            let rx = Math.round(region_dx * _via_canvas_scale);
            let ry = Math.round(region_dy * _via_canvas_scale);
            var theta = 0;

            original_img_region.shape_attributes['name'] = 'ellipse';
            original_img_region.shape_attributes['cx'] = cx;
            original_img_region.shape_attributes['cy'] = cy;
            original_img_region.shape_attributes['rx'] = rx;
            original_img_region.shape_attributes['ry'] = ry;
            original_img_region.shape_attributes['theta'] = theta;

            canvas_img_region.shape_attributes['name'] = 'ellipse';
            canvas_img_region.shape_attributes['cx'] = Math.round(cx / _via_canvas_scale);
            canvas_img_region.shape_attributes['cy'] = Math.round(cy / _via_canvas_scale);
            canvas_img_region.shape_attributes['rx'] = Math.round(rx / _via_canvas_scale);
            canvas_img_region.shape_attributes['ry'] = Math.round(ry / _via_canvas_scale);
            canvas_img_region.shape_attributes['theta'] = theta;

            new_region_added = true;
            break;

          case VIA_REGION_SHAPE.POINT:    // handled by case VIA_REGION_SHAPE.POLYGON
          case VIA_REGION_SHAPE.POLYLINE: // handled by case VIA_REGION_SHAPE.POLYGON
          case VIA_REGION_SHAPE.POLYGON:
            // handled by _via_is_user_drawing_polygon
            break;
        } // end of switch

        if (new_region_added) {
          var n1 = this._via_img_metadata[this._via_image_id].regions.push(original_img_region);
          var n2 = this._via_canvas_regions.push(canvas_img_region);

          if (n1 !== n2) {
            console.log('this._via_img_metadata.regions[' + n1 + '] and _via_canvas_regions[' + n2 + '] count mismatch');
          }
          var new_region_id = n1 - 1;

          set_region_annotations_to_default_value(new_region_id);
          select_only_region(new_region_id);
          if (this._via_annotation_editor_mode === VIA_ANNOTATION_EDITOR_MODE.ALL_REGIONS &&
            this._via_metadata_being_updated === 'region') {
            annotation_editor_add_row(new_region_id);
            this.annotation_editor_scroll_to_row(new_region_id);
            // annotation_editor_clear_row_highlight();
            this.annotation_editor_highlight_row(new_region_id);
          }
          this.annotation_editor_show();
        }
        this._via_redraw_reg_canvas();
        _via_reg_canvas.focus();
      } else {
        this.show_message('Prevented accidental addition of a very small region.', 2 * VIA_THEME_MESSAGE_TIMEOUT_MS);
      }
      return;
    }
  }

  _via_basic_demo_draw_default_regions(): any {
    var csv_annotations = 'filename,file_size,file_attributes,region_count,region_id,region_shape_attributes,region_attributes\nadutta_swan.jpg,-1,"{}",1,0,"{""name"":""polygon"",""all_points_x"":[116,94,176,343,383,385,369,406,398,364,310,297,304,244,158],""all_points_y"":[157,195,264,273,261,234,222,216,155,124,135,170,188,170,175]}","{}"\nwikimedia_death_of_socrates.jpg,-1,"{}",3,0,"{""name"":""rect"",""x"":174,""y"":139,""width"":108,""height"":227}","{}"\nwikimedia_death_of_socrates.jpg,-1,"{}",3,1,"{""name"":""rect"",""x"":347,""y"":114,""width"":91,""height"":209}","{}"\nwikimedia_death_of_socrates.jpg,-1,"{}",3,2,"{""name"":""ellipse"",""cx"":316,""cy"":180,""rx"":17,""ry"":12}","{}"';

    this.import_annotations_from_csv(csv_annotations);
  }

  _via_basic_demo_define_attributes(): any {
    var attributes_json = '{"region":{"name":{"type":"text","description":"Name of the object","default_value":"Insert_tag"},"type":{"type":"dropdown","description":"Category of object","options":{"bird":"D1","human":"D2","cup":"D3","unknown":"D4"},"default_options":{"unknown":true}},"image_quality":{"type":"checkbox","description":"Quality of image region","options":{"blur":"Blurred region","good_illumination":"Good Illumination","frontal":"Object in Frontal View"},"default_options":{"good":true,"frontal":true,"good_illumination":true}}},"file":{"caption":{"type":"text","description":"","default_value":""},"public_domain":{"type":"radio","description":"","options":{"yes":"Yes","no":"No"},"default_options":{"no":true}},"image_url":{"type":"text","description":"","default_value":""}}}';

    this.project_import_attributes_from_json(attributes_json);
  }

  _via_basic_demo_define_annotations() {
    var annotations_json = '{"current_img.jpg-1":{"filename":"adutta_swan.jpg","size":-1,"regions":[{"shape_attributes":{"name":"polygon","all_points_x":[116,94,176,343,383,385,369,406,398,364,310,297,304,244,158],"all_points_y":[157,195,264,273,261,234,222,216,155,124,135,170,188,170,175]},"region_attributes":{"name":"Swan","type":"bird","image_quality":{"good_illumination":true}}}],"file_attributes":{"caption":"Swan in lake Geneve","public_domain":"no","image_url":"http://www.robots.ox.ac.uk/~vgg/software/via/images/swan.jpg"}},"wikimedia_death_of_socrates.jpg-1":{"filename":"wikimedia_death_of_socrates.jpg","size":-1,"regions":[{"shape_attributes":{"name":"rect","x":174,"y":139,"width":108,"height":227},"region_attributes":{"name":"Plato","type":"human","image_quality":{"good_illumination":true}}},{"shape_attributes":{"name":"rect","x":347,"y":114,"width":91,"height":209},"region_attributes":{"name":"Socrates","type":"human","image_quality":{"frontal":true,"good_illumination":true}}},{"shape_attributes":{"name":"ellipse","cx":316,"cy":180,"rx":17,"ry":12},"region_attributes":{"name":"Hemlock","type":"cup"}}],"file_attributes":{"caption":"The Death of Socrates by David","public_domain":"yes","image_url":"https://en.wikipedia.org/wiki/The_Death_of_Socrates#/media/File:David_-_The_Death_of_Socrates.jpg"}}}';

    this.import_annotations_from_json(annotations_json);
  }

  _via_basic_demo_img: any[] = ['data:image/png;base64,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AAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUAAAAAAAAABRBrAQAAAAAAAAog1gIAAAAAAAAUQKwFAAAAAAAAKIBYCwAAAAAAAFAAsRYAAAAAAACgAGItAAAAAAAAQAHEWgAAAAAAAIACiLUA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WWed1RRqR48ene233z5//etf8/LLL+eHP/xh9txzz+yzzz7dciwbWrx4cVNUPe6449qd6bvXXntl8ODB6z226667Ztttt80999yTvfbay8VnADZpzWfOthRqWxqfrD/DtiNhFwAAOkOsBQCgRaUE1a7uv6WoW9Q931atWpUHHnggSXLQQQc1zWJ97rnncuCBB6axsTE333xzU6x9/PHHc+utt2bJkiUZPnx4jjvuuNTU1LS6/8bGxtxzLlhHUAAAIABJREFUzz3585//nPr6+uyxxx456qij0rdv36Yx8+fPz80335yXXnoptbW1GTt2bHbaaaf88pe/zJ133tk07oorrshDDz2Ur3/9662+3rhx4zJmzJiNHr/uuusyZsyYdmfQtvf+nnnmmdx888158cUXs8MOO+Twww/Pe97znjb3CQBFa36+0TzCJhsvg9yZfbcVgoVeAABaItYCANBhbc2cbe2xjmxraTZupfXu3Tt9+/bNypUrs2jRoixfvjwDBw7MjjvumK985StZsWJF02zW8ePH56KLLlrvuK677rpMmjQpw4cP32jfb775Zr7+9a/n97//fdNjU6ZMyeTJkzNx4sT069cvt9xyS775zW+moaGhacwvfvGLXHHFFXnwwQfz4IMPNj0+Y8aMNDY2thlrWzN79uzcfffdGTx4cC6++OIWx7T3/iZPnpxzzjlnvWO94oorctFFF+W4447r8DEBQCW0dD7R2v1rNxxT6jYzbwEA6KpeRR8AAACbluYXRtfde7a9ceu+bmmJ5Lb2UU69evXKUUcdlWTtrNKPfexjOeecczJr1qx8+9vfzgUXXJATTjghjz76aC6++OI0NjZmxx13zOGHH56+fftmyZIlueCCC1rc94QJE5pC7R577JH9998/STJnzpyMHz8+L730Us4666w0NDRk2223zRFHHJGampqsXLkyZ511Vg477LAceeSRTfs7+uijc+yxx7b5fubMmZM//vGPTX/uu+++kr4P7b2/VatW5cILL0xDQ0N23nnn/Pu//3uGDh2aN998M5dccklWr15d0usAQHfY8DyitfONtn4xrPk+iloBBACATZeZtQAAdJvuCq+dde6552b58uW5/fbbs3z58kycODETJ07MBz/4wVxyySXZbbfdMmnSpKxZsyZbbrllfvvb32bw4MH52c9+lp/85Ce57777snz58o32O3HixCTJ7rvvnilTpqSqqiqf/exnM3369EydOjX9+vXLG2+8kSS5+uqrs+eee+bee+/NF77whSxZsiQ777xzBgwYkJtuuilJcsQRR+QjH/lIm+/liiuuWO/roUOHlhRs23t/L7zwQl5//fUkyX777ZfTTz89H/jAB3LNNdckSZYuXZohQ4a0+zoA0FOtu78tAAB0B7EWAICKKHWGSvOvW5r90p2qq6tz+eWXZ9asWZk0aVLuuOOOvPbaa3n00Udz3HHH5dZbb83jjz+eZO197U4//fQMGDAg//znP5uO9+9///t6+1y5cmWeeeaZJMmLL76YU045JQMGDMjixYuTJM8++2zT9n79+mXPPfdMknz4wx/O+PHjkyQ77LBDXnrppcp/A5J239+rr76aPffcMw899FBuuOGGTJkyJfvss09OPPHEHHnkkS5uA9DjbLg88Zo1a7LFFltsFGXbirSWOAYAoFLEWgAAOhRFO3s/2o5qvkRhd0TbZ599Ng8//HCSZP/9988Pf/jDXHjhhbnmmmvy4x//OK+//nquu+66rFixIklSX1+fBx54YKP9rNu+zrpZqEny0ksvbRRdV6xY0XTv1759+zY9vuWWW+aAAw7o9Pv55S9/mTFjxnT4eaW8v6uvvjqXXHJJbr311qxcuTL33Xdf7rvvvkybNi0///nPO33MAFBOze9RW87Y2tl73nZlLAAAmy6xFgCAbtFaeG0vyLZ0X7lKePLJJ3PGGWckSX784x/nqKOOypZbbpmvfvWrufrqq/Pqq69m4cKF2W677TJv3rwMHjw4F110UdPzFy1alHe9610ZMWLEevvdZpttsuWWW+aNN95IXV1dTjnllKZtzz//fIYNG5YnnngiSfLqq69m6dKlqampyQsvvNB0D9yvfe1rlX77Tdp7fytXrszll1+erbfeOnfddVfmzZuXa665Jvfff3/+8Ic/ZMGCBRk+fHi3HS8AtKatSNs85Dbf3trjAABQKdYoAwCgx+nu5Y+TZO+9906/fv2SJJdeemmuv/763HnnnTn//PPz6quvJkmGDRuWf/u3f0uSLFmyJHfddVeqq6uzaNGi/PSnP82tt96aAQMGrLffLbbYIh//+MeTJLNmzcozzzyTrbbaKn/961/z/e9/P88999x6M2i/853v5M9//nO+973v5c4778y0adPyjne8I/37928a85e//CXTpk2ryPehvffXq1evjB8/PuPHj8/111+foUOHZrfddmt6/qpVqypyXADQVUWcXwAAQHvMrAUAoNNauujZmZmw3bW0cltqampy9tln57zzzsvixYtz3nnnrbd90KBB+eIXv5jtttsuN998c+bMmZMpU6ZkypQpTWOWLl3a4r3uzjrrrMycOTMvv/xyLr300vW2vfLKKxk9enTGjh2bW265JdOmTVsvxB599NEZNmxY+vfvn379+mXlypW56qqr8sEPfrAprJbT8ccf3+b723fffbPXXntl1qxZueqqq3LVVVc1bR89enRGjhxZ9mMCgM4q15LF68Yn2eg5ZuECANAVZtYCALCRtpYkLvU5zb9eF3BbGtNTlkFOkhNPPDGTJk3KJz/5yQwePDj9+vXL8OHDc9JJJ2Xq1Kmpra1N3759c/311+crX/lKhg4dmj59+mTo0KE59dRTM378+PTuvfHvQ+6444753e9+l7Fjx2bbbbdNv3798r73vS/f//73c+aZZyZJfvSjH+X000/PsGHD0rdv37z73e/Ot771rVx88cVJ1sbkiy++OO9617vSr1+/vPvd767I96C999enT59ce+21+dKXvpShQ4emX79+2XHHHfPlL3851113nYvVAPQYbZ1DND//aO38ZMNzmZae39a+S30cAIDNW9WNN97oTBEAYDNX6gXIDcNqSxcxW7vA2VKYbf74hmPWrFnT9KexsbFb79sKALz9XX755amqqkqvXr2a/iRrZ8a29Gfdtg3HrNPa2A2ft+G25jZ83C85AQBgZi0AAN2qIzNTAAAqyXkJAABFE2sBAChEa/e73fC/XTQFADqrrdVAWhoHAADdTawFAKAkpV7EbG2GiougAMDbRWvnL509HwIAgNaItQAAdEipM1TK+VoAAJ3VHecpfjkNAIDOEmsBAChMaxc0XegEAMrNeQcAAD2RWAsAsJnrKRcou2OmLgCw+eqJ5xo95TgAACiOWAsAQLcr5cJkT7ygCgC8fXT0XML5BgAARRBrAQAoXE+7OLp8+fK89tprGz2+bNmyrFq1qtuPZ+HChXnqqac69NovvPBCLrzwwg69zpo1azJ58uR89atfzemnn55Zs2Y1bbvwwguzaNGiDu3v7eCGG27IX/7yl255rVWrVuXcc8/N8uXLCz+Wjli0aFHOP//8jBs3rt2fwbbewx//+MfceOONlTjEjTQ0NOQf//hH/vGPf+Sf//xnWfd9xx135KabbmpxW2f+3bXl/vvvz/XXX58kqa+vz8svv9zuc6688srMnTu3bMdQLuX6OZo/f35+9KMfVeIQC1Hq32ulvPDCCxXd/5o1a/I///M/FX2Nruhp5x8AAGyexFoAAMpmU7kX3AknnJCTTz55vcfeeOON7LffflmwYEG7z58/f37uvffeLh/H7Nmzc+ihh+Yzn/lMjj/++HzsYx8rOcLce++9eeyxxzr0ehdffHFuvPHGHHzwwRk9enQGDBiQJHnmmWcyceLEDB48uMPvoae7/PLLs8UWW3T6+a+88kp++9vfljR2zpw5ueOOOzJw4MCKHEtn3XTTTVmyZEmL25YvX57jjjsugwYNyuc+97n07du3zX219R6uv/76Fn8JohLuueee7L///jniiCOy//77Z++9987EiRPLsu8JEybk9ddfb3FbZ/7dtWXy5MlZunRpkuQ73/lOrr322jbHr1q1Kj/96U+z1VZble0YyqGcP0d//OMf88wzz3T5mNr6ue9Opfy9tqcj/x9qbsGCBTnooIPy6quvtjv2gQceyOOPP97h15g0aVJOO+20Lh1nkTaV8xoAAHo2sRYAgEK0tjRh0RdAly9fnieffDIPP/xwnnjiiabHZ8+enQEDBmTkyJHt7mP8+PFdniH50EMPZdy4cfnWt76VmTNn5qGHHsoee+yR733veyU9f+bMmfnwhz9c8uv94x//yMSJE3PFFVdk7Nix+dznPpddd901STJjxoyMGjUq/fr169R76ameeeaZvPLKK9ljjz06vY8//elPmTBhQkljZ8yYkbq6uoodS2e89NJL+eY3v9lqPLv55puz00475etf/3q7P09tvYdVq1Zl9uzZHfqZ7IqZM2fm8MMPzwMPPJBHHnkkF110Uc4///w8/PDDXdrvqlWrMmfOnFb/Hjv67649M2fOzL777psk+cEPfpAzzzyzzfFz5szJ1ltvnfe+971lO4ZyKNfPUbL239G670lntfdz351K+XttT0f+P9Tc8OHDM3v27Gy99dbtjj333HM7NQv32GOPza9//esuHWe59dTzDwAANl9iLQAAFdPehc+eeGF05syZ2X777fOhD30ov/nNb5oenzFjRvbZZ59UVVUlSf7whz/khBNOyCc/+cl897vfzapVq/LPf/4zxx57bG677bbcddddueGGG5KsXT75u9/9bg466KCcdNJJmTdvXpLk6aefzkknnZSGhob1jmHVqlX51re+lXPOOScHHnhgkqRXr175zGc+k/nz5ydJHn744Zxxxhn51a9+laOOOipjx47NQw89tN772HfffXPFFVfk5z//edPjf/rTn3Laaaet972/6aabctJJJ6WxsTH/8R//0bSU6x133NG0r+aB5Y477sjxxx+fQw45JD/5yU+a9vXSSy/lO9/5Tg466KAcffTRmTFjRovf4+eeey6nnXZaxowZk+OPPz5/+9vfkiQrV67M8ccfn2uvvTZjx47No48+moaGhlx99dU57LDDcuT/z96dh9k5HvwD/062N4ssREkiJUXQKqGJoEUEWSwhdmmj9CX6WktJaOz7kjYVUUVoa0nxEiVaaxDLjySE4EWCVFpiKbEkIfvM7490TmcmM5PQ6IN8PteVK+d5zrPc97PNuc733Pfdv3/uvvvuWrf5/PPPZ9CgQdl5550zaNCgaqHCyy+/nKOOOio777xzTjjhhFIrspohdF31qjxGBxxwQHr16pULLrggS5YsyQknnJBLLrkkb7/9dn7xi18kST755JNcdNFF6d27d/bYY4/ceeed1c5J69atM2jQoPTp0yfDhg0rvfdZylJT5XG79957c/DBB6dPnz6lcCRJZs2aVbr+DjzwwDzxxBNJklGjRuWQQw5Jw4YNM2jQoMybN6/adk899dRcfvnlmT59eo488sh6t1VbHUaPHp299947e++9d66++uo0a9as9GOHus7J6NGjc+GFF+ZnP/tZKcAaO3ZsDjjggOyyyy6le215qgZ6ZWVl6dOnT7p06VK6JhctWpSrrroq/fr1S79+/aoFSE899VROOOGE0vQ777yTAQMGlILaFi1a5N57702/fv1y4IEHZtq0aaVlq4ardd33Nb3zzjs5+eSTs8suu+TAAw/M888/n6R6aDljxowcfvjhKS8vT7I0lD388MOz88475+ijjy61vq1a71mzZuWoo47K/fffv8w+66v/6NGjM3LkyJx33nnZddddc8ghh5S2X9MTTzyRgQMHZqeddsrRRx9da3e+tV1H9e2/5nU0ceLEHHzwwdl1111zzTXXZPLkyaXnUV3HeMqUKTn66KMzbNiw7LHHHtWesbVd9/WVp6rlPXfrOh6DBw/OY489Vlru1ltvzfDhw5c5r2+88UaOPfbY9O7dO6effnouvPDCPPDAA0nqfrbU9hxa0efmsGHDcu+995bO0//+7//muOOOS69evTJ06NBSnQ444IC8/vrrueyyy/LMM88kqf1vYG0OP/zwzJgxo9Zyfpl8FT+vAADw9SGsBQDgM/uiv7QssqVLZdgyYMCA3Hnnnfn000+rzU9SCkCHDBmSK664Ik8++WQuu+yyNG/ePL/4xS8yd+7cXHnllenfv3/ef//97Lffftlwww1z/fXXp1OnTqUxLRs1apQ99tgjjRo1qlaGcePGZdGiRenXr1+1+fPnz0/r1q2TLO1uddy4cWndunUuu+yyrL766qVwuWrIM3fu3Dz77LNJln6Bf+6556ZPnz6l0DlJdtxxx6y//vo54IADMnz48Ky11lq57bbb0qFDh2XqfvXVV+fqq6/OGWeckWHDhuX3v/99Jk+enEWLFmXAgAHZdNNNM3r06Hzve9/LmWeeuczxfeWVV3LAAQekf//+ufXWW9OhQ4eMGDEiydLWy5MmTcrMmTMzePDgdO7cOf/zP/+Tv/71r7nqqqsycODADB48eJlQYPr06TniiCPyk5/8JDfeeGPmzJmTK6+8MsnS4O2II47IAQcckOuuuy6vv/56rr/++lK9KkOfuuqVLA00brrpppx11lkZOXJk7rzzzowbNy6DBw9OWVlZTj755Jx00klZsGBB9t5776yxxhq56aabctBBB+X0009P8q8WmbNnz87JJ5+cU045Jddcc01pXOAVLUttKo/bSy+9lPPPPz99+vQp1f8f//hH9tlnn3zzm9/Mddddl1122SWDBg3KnDlzss8++6Rz587Zd9998+tf/zrNmjWrtt2jjz46n376ac4777ycc8459W6rZh1+9atf5dZbb80ZZ5yR0047Lddff33pxw71nZO77rorDzzwQHbaaaccddRRGTNmTK655pqcf/75+c1vfpO7774748aNq/NYJEu7Wp06deoyLTjLysrSpEmTLFmyJEcccUSmTp2akSNH5uSTT87FF19cag3/0EMPVWtxOWHChMybNy9NmjTJhAkTUlFRkW9961sZOXJkVl999Zx33nlJqt939d33Vc2cOTP77bdfNt9889xwww3p2rVrTjnllNJ+K0PL//f//l+WLFmSBg0a5OGHH85xxx2Xgw8+ODfccEM+/vjjXH755dXOwbRp03LAAQekZ8+e6d27d7V9Lq/+d911V+6888706dMnI0aMyNSpU/Pwww8vU/bbbrst5513XoYOHZobb7wxr732Wm6//fZllqt5HS1v/1Wvo8cee6xU10svvTQPPfRQmjdvno022qjeYzx+/Pg88sgjWXPNNXPOOedUe8bWvO6bNGlSb3mqqu+5W9/xeP/990tdN3/00UcZNmxY9tprr2rn9Z133sm+++6bzTffPFdeeWX+67/+K6NGjUrHjh3rfbbUfA6Vl5ev0HMzWRoat2vXLgsWLMjtt9+ecePG5eijj84vfvGL3HzzzXnjjTey2WabZdddd80mm2ySK664IptttlmdfwNreu211zJhwoSst956y5TzP+k/+ZlCqAsAwOfRaPmLAADAqmPChAn58Y9/nD322CPnnXde7rrrruy111557rnncs455+SVV17JqFGjcv/992ettdZKkuy222558cUX06RJk7z55pvZZJNNsvHGGydJzjrrrPTp06c0Bu5OO+1UalHZqVOndOrUaZkyjBs3Lr169aoWqCbJtGnTsummm5bKOXjw4Oy1115Jkg4dOpS6spwwYUK22GKL/Nd//VfatWuXSZMmJUluuummtG/fPrvttlu17bZp0yYvvfRSzjzzzHTs2DHPP/98ysrKsummm1YLoF5//fVcccUVefDBB9O2bdskS7vRnDVrVqZOnZq///3v2WabbbLWWmvlmGOOSf/+/Zep2zrrrJO77747rVq1yscff5xvfOMbpS+3J06cmL59+5ZCiNtuuy0ffvhhRo0albKysuy+++4ZMmRIKTir9NBDD2X11VfPd77znbRp0ybDhw/P4sWLs3jx4gwePDjnnntudtxxxyTJNttsU2olOHHixAwYMKDeek2bNi2jR4/Oww8/nNVXXz3J0pZsa621Vho3bpy33347vXr1Sps2bbJo0aJcf/31WXvttfPhhx/mG9/4Rmns0MruaYcPH54GDRpkww03TMeOHfPuu++ucFnqMnHixOy66675+c9/niTZYIMNssYaayRJzjvvvPTu3TuDBg1KkvzkJz/JxRdfnBkzZmSzzTbLSy+9lCFDhpSC+aoqWwX26NEjjRo1ynHHHVfvtirrMGPGjPzhD3/Igw8+WLpHNtpoo2yzzTb1npMFCxbkueeeyx133FG6fy688MJssskmWW+99dKkSZOMHj063/jGN+o8FkkyadKktG/fPh07dizNKy8vz1//+tdsvPHGufnmm/Phhx/mmmuuScOGDdOpU6dsttlmmTp1arbbbrtMnDgxAwcOLK1btbXqxIkTc/zxx2fXXXdNsvTerwxKq953p556ap33fVUXXHBB+vfvnx/96EdJkoEDB1ZrUVrZ3XJlGRYtWpShQ4dm2LBh2W677ZIsDUPffffd0g8Cdtlllxx++OEZNmxYrV0O11f/rbbaKs8991zuvPPOUivoFi1alK6nqnbeeef07ds3jRo1yty5c9OqVatax8qteR2NHj16ucd/wIABKS8vz9ChQ3P++ednl112SZJsu+22adOmTcrKynLRRRfVeYwnTJiQIUOGLDP2eJK0bdu22nW/vPJUVd9zt77j0b59+3zwwQdJkksvvTT7779/Nthgg1x66aXVurnefffdS/fX7rvvnjFjxmSTTTbJ4sWL63y21HwOrehz87XXXsucOXOy5ZZbZvLkyWnVqlWuuOKKNGrUKK1bt05ZWVnatGmTli1bZvr06dl2223TsWPHev8G1jRx4sRsueWWadKkyTLlBAAA/kVYCwDAv+Wztlj5PK1O/lMtVSpb5G299dZp2rRp9tlnn9x0003p2LFjabzaSy65JD179ix9SZ0s7W70m9/8ZpLqrcLmzp2bv/zlL2nYsGFuuOGG0vI777xzveWYOnVqDj744GXm33PPPTn22GNLoVbV8WuffvrpUmulCRMmlMrQrl27zJo1K3PmzMkVV1xRrRyV3n777cycOTPdunUrrd+tW7c0aNAgTz75ZCmAGjNmTObPn58ePXpUW79Tp07ZcMMN86Mf/Sj77LNPOnTokIEDB1YLvCpNmzYtF198cRYsWJDWrVtn8uTJpe42J0yYUK018S233JKXX345m222WWleu3btSq2LK+21116l8WC32GKLHHvssfn+97+fxx9/PDNnzswxxxxTbflTTjkl06dPz8cff5wtt9wyI0eOrLNeY8eOzc4771wKapPkoIMOSrK0BeLGG29cCh4++uijnHvuuXn99dfTtm3bvP766+nevXupbltvvXUaNFjaudHixYvz3nvvpVOnTitclrpMmDAhe+65Z2n66aefTteuXTNnzpzcd999pe6sk6XBWUVFRdZZZ5289957mTFjRqmMNU2cODHdunVLo0aNlrutqnW48sors9NOO5Xukcrxak8//fRMmDChznPyzDPPpFWrVqWgNkmOPPLInHnmmenWrVt69OiRwYMH1xoc1jweNUPKyi5ot9566/zyl7/MgAED0rBhw9L7lffwJ598kv/7v/+rtv6kSZNy+umnl8LQc845p/TeW2+9VTo3lftd0ft+7ty5GTduXKmb22Rp+Pezn/2stL0BAwaUzsXAgQPz5JNPplGjRtVCxKqB7oIFCzJs2LB069atzrFhb7vttjrrX3kOKoPa999/P3//+99rHT/2wQcfzO9///usttpqadSoUSZPnpyLL754meWqXkfL23/V62jSpElZtGhRdtppp2rnolevXvUe48rn4/nnn19r/Wte9/WVp6rlPXfrOx7t27fPP/7xj7z22mt59NFH85e//KV0bAYOHJj58+fnvvvuyx133FHtuFW2Rl/es6Xqc2hFn5tVg9TKv1uV5+jpp5/OxhtvXO0HQEOGDEmS/OlPf6r3b2BVVX/oULOc/ykVFRXL/PBpZaxTdZnPsw8AAKhKWAsAwEpXM1z9qnQLWDle7XrrrZckGTBgQP7whz/k2muvLX1pXtmKsNL8+fNz//33V2tdV/ml9iuvvJKysrLSmKwrat68edWCg2TpGKYLFixI3759S62g1l9//SRLA5XXX3+9Wuu/H/7wh0n+1aLrt7/9bfbaa69suOGGy+xvwoQJ2XTTTUtfzFdt0Vc1fH7hhRdywgkn5Kc//Wm19cvLy/PRRx/lrLPOyqmnnpqHHnooRx11VLp27Zpvf/vbpeVmzZqVww47LH/84x/z7W9/OwsWLMgWW2yRbbbZptaA5YUXXsgtt9ySLl261HmsFi5cmGbNmuXaa68tdX981FFHZcqUKXnhhRey/fbb53e/+90y640ePboUQtdVr2Rp17Zdu3YtTc+bNy9z5szJWmuttcxYvoMGDcr++++f3/zmN0mWXj9Vg4o99tijtOwjjzyStm3blrqNXpGy1Ka2AKmy9d/MmTNTVlZWLei96667ss0222SNNdZYJmyuqWrQsrxt3XPPPaU6vPrqq9lkk01Kyz3//POlrmsfeuihOs9J1VaGydIxOr/zne/kz3/+c956660MHTo0F1xwQamL57pMmDAhP/nJT6odo+HDh+foo49Oo0aNMmPGjGr3wYsvvpj33nsv2223XZ599tmsvfbapZbG7777bt54441069YtzzzzTFq2bFlt3XvuuSeHHnpokn/ddyt637/55ptp0qRJ1l133dK8d999N61bt87MmTMze/bsbLnlltVaQP7xj3+sFmaXl5fnrbfeyjrrrJOJEydmiy22yJlnnpn99tsvkydPrnbtVqqv/qNGjap2TdcVsD300EO56qqrctttt6V169aZMGFCpk+fXnom1TwfVc9rffu/4447StfRa6+9ls6dO5d+4LBo0aI888wzOe200+o9xk8++WRatWqVDTbYoNbjXrNO9ZWnqsogu7bn7vKOR/v27fPyyy/n/PPPz9ChQ9OsWbNq5/Vvf/tbFi5cWK0cEydOzA477JCk/mdLzedxW941AAAgAElEQVTQijw3a56Xmj/4qPo3oGa4vby/gVVVbaVes5xfFTWDWMEsAABfBGPWAgDwH/NlD22rjs2aJJ07d85WW22V8ePHl75kXnPNNTN58uRUVFRk4cKFGTp0aLbddtt07949s2fPzl//+tdSQNm6devMnz8/U6ZMSbK0BWvl+KyzZs3KjBkzai1Hly5dcuutt2bOnDkpLy/PAw88kDPOOCO//OUvq7WCqvTkk0+Wwofp06eXQp5kaUgwd+7c3H333Tn22GNr3V/VL+2XLFmSp59+uloQUPm6TZs2eeqpp1JeXp6KiorccsstmTJlSv72t7+lW7dumTlzZho3bpwOHTpktdVWq9YNbZI8/vjjadq0aTbYYIPMmzcvZ555Zlq2bJn111+/FIRUDVhat26dJ598MsnSQODSSy/NRx99VG2bY8aMSf/+/bNo0aK0bNkya6yxRikobN26dV5++eXSOk8//XRuvfXWUr0qj2Fd9UqSli1bZtq0aUmSTz/9NMccc0zGjBmTZGnXxpXn+p133snzzz+fbt26pby8PKNHj87TTz+drbbaKgsXLsyUKVNKXRm/8cYbOffcc0st8lakLHPmzKnW6q5SzQDpvffeK7W6W2ONNbJo0aI899xzpfJeeeWVpZbMU6ZMqRamV1VeXp6nnnqqVK7lbatqHVq0aJHnn38+ydLWxiNGjCj92KG+c1Iz1Dv11FNL4x6vvfbaadq0aenczpgxo9auoT/++ONMmzat9AOAp59+OgcffHA23HDDHHLIIUmW3sOVYwW/++67GTJkSIYMGZIWLVpk5syZadq0acrLy/Ppp5/moosuKv2QYeLEiamoqMgHH3yQioqKjBw5MkuWLMnuu+9e7b6r776vqmXLlpk3b17eeOONJEtb/+67775ZsGBBtS6Vq7aAbNmyZWbMmJEFCxaUynDqqaemrKwsEyZMyH777ZcuXbpkzz33rHUM0eXVv+Y5qK2VcpI88MAD6dy5c1q3bp233norF198callflU1r6Pl7b/qddS8efNMnz49c+bMyaJFizJ8+PA0a9YsG220Ub3HuOZzvKaa13195amqvufu8o5Hhw4d8sQTT6RRo0alLp2rntdmzZqlvLy81JXwfffdlwkTJqR79+71PluS6s+hZMWem8nSVspVfyhTs26Vx/DZZ59N+/btS+F2fX8Dq6oaRtdWzhdeeKHWcXS/LL7sn1cAAPh6EdYCALBc/6kvLYv+crS2YKKyG9LKL66POOKIvPnmm9l2222zww47ZI011iiNk9iwYcO0adMm++yzT95///1ssMEGOe644zJw4MDsuOOOGThwYKm105lnnplbbrml1nKccsopWbRoUb73ve9l8803z1VXXZWrr7669GV4zTCiaohQNeRJln6x3rhx45x44om1jieZ/OtL+yR56aWXSuPV1gx+TzjhhNK4tNtss00mT56czp07p1OnTtlzzz2z6667ZpdddsmQIUMyatSoUkvdSltttVUaNmyY7t27Z6+99sp7771XasE4adKkZQKWCy+8MFdffXV22GGH7LjjjmnWrNkyLfx69+6dpk2b5gc/+EF22GGHPProo7n00kuTJHvvvXe++93vpkePHtluu+0yfPjwUoBS9RjWVa/K8z1p0qRsv/326dOnT3r06JEjjzyydGzPPffc0tiN3//+99O/f//06NEjzzzzTJYsWZKOHTvmmWeeSbt27fLMM89km222yV577ZVBgwZl9913X+GyPPLII7nuuuvqPXeV578yQFprrbVy/PHHZ+DAgenRo0dOP/30XHHFFaVxj9dcc838+c9/ziWXXLLMdqdOnZrFixfnu9/9bpIsd1tV6/DjH/84kydPzve+970ceuihef/990tlrOuc1BYYDRw4MA8//HB69OiRHXbYIWuttVaOOuqoJMlhhx2Wxx9/fJlyT5w4MeXl5enZs2e6d++eYcOGZeDAgfnVr35VaqF52mmn5aqrrkqPHj2y33775eCDDy6NGbvVVlvl/fffT/fu3dOvX7/89a9/rdb6sGfPnunTp0+6du2aCRMmZNSoUWnSpEm1+66++76qddZZJ//93/+d3XffPT179szVV1+dm2++Oa1bt652T1c9tn379k379u1L1/usWbPy29/+tvSDgMp1jj322Dz55JN59tlnl9lvXfWv7RzUDG8r9e7dO+PHj0/37t1z4oknZsGCBcv8OKO262h5x79qXXv16pW2bdtm2223Te/evfPSSy+VQv/6jvHywtqa13195amqvufu8o5H+/bts3DhwtKPD2pur2PHjtlnn32y7777Ztttt83//u//pmnTpvn2t79d77Olsj6Vz6FkxZ6bVZ/tzz777DI/+KjaknaNNdbI22+/nQMPPDBJ/X8Dax6vyjC6ZjnffvvtDBgwIO+8806d5+mLtqp8rgEA4KuhbMyYMT45AgCswmr7IrG+bowrKirqHKe2vLy82rzK/6vOr/pe1X9Vl6tsVVheXl56fdxxx/17FV3JPvzww7Ro0aL0RXSl+fPnZ+HChWnVqlVp3sKFCzNnzpy0bdu2NK+8vLwUHtXlo48+SqNGjbLaaqt97nI+9NBDueaaa/LHP/7xc2+jpg8++CAtWrQoBcKVZs+enfLy8nrHJKzsMnl5445WqqioyKxZs7L66qsv0zV0Ve+//36aN2+e5s2bL/Pe3LlzU1FRsUx4XFNd9UqWtoRu3bp1aUzHZGkr5Mq6VHaL+cEHH6RNmzZ1ntuPP/44LVu2XO65r1qW8vLyHHjggTn00ENLAe9nsXDhwnzyySfVxt2tr16fd1tVlZeXZ+7cudXug6pW9JwsWbKkdP4bN25cbfvLO4b1qWwhu/rqqy+zncWLF2fOnDl11nHx4sWZN2/ecste231fmwULFmT+/PnLjClanzlz5qRRo0Zp1qzZCq9TVX31X1ELFy7MggULlnsc/t39f/jhh3WeixU9xjXVvO6LPh7z5s1Ls2bNMmfOnDRr1iznnHNOGjRokLPOOqu0TF3PltqeQyv63FxRs2fPTpMmTdK0adPSvLr+BtalZjn/3Xt4RV122WUpKytLgwYN0qBBg9LrJKX/y8rKqv2rOq/mclX/r1r+ql0jV1235nu1Tdc1DwCAVYewFgBgFfdFh7W1BbQ13/sqhrVfdm+++WYefPDBXHfddfn9739fGoeXr55XX301jz/+eLVxWIGvj//+7//O2muvnR49emTixIl54okncvPNNy/3RxEs38oIa2t7r+r6VefVXLfme7VN1zUPAIBVh26QAQDga+jJJ5/M888/n6uvvlpQ+xXXuXNnQS18jZ133nlZY401Mn78+Ky//vq58847BbUAALAKWbG+rgAAYCUyhtsXb//998/+++9fdDEAWI4OHTpk8ODBRReDLP18opUrAAD/aVrWAgDwpSLIBQC+KD5nAADwZSOsBQBgpfDlJwCwqvC5BwCAlUVYCwDAF8KXmADA14XPNQAAfFGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAF9qxogDAD4vnyMAAPiyE9YCAAAAAAAAFKBR0QUAAIAvg1GjRhVdBABYZXTq1Cm9evUquhgAAFA4YS0AACRZd911071796KLAQAAAMAqRFgLAABJ+vTpU3QRAAAAAFjFGLMWAAAAAAAAoADCWgAAAAAAAIACCGsBAAAAAAAACiCsBQAAAAAAACiAsBYAAAAAAACgAMJaAAAAAAAAgAIIawEAAAAAAAAK0KjoAgAAwJfF3XffnREjRmTq1KmZPXt20cVhFdOqVatssskm+fnPf54+ffoUXRwAAADgP0DLWgAASHLfffflRz/6USZNmiSopRCzZ8/OpEmTctBBB+X+++8vujgAAADAf4CWtQAAkGT48OFJkj333DO/+MUvsskmmxRcIlY1U6dOzYUXXpixY8fmV7/6VXr37l10kQAAAIAvmJa1AACQ5MUXX0ySDB06VFBLITbZZJMMHTo0SfLqq68WXBoAAADgP0FYCwAAST755JMkycYbb1xwSViVVV5/H374YcElAQAAAP4ThLUAAFCP/fbbL2VlZaV/jRs3zkYbbZQTTzzxM41tO3Xq1JSVleXPf/5zncvMnz8/ZWVlufzyy5MsDZDXW2+9XHfddSttH5/X8ccfn06dOtX5ftXj1KhRo3Tq1CnHHHNM3nrrrZVeFgAAAICvC2EtAAAsx7rrrps//elP+dOf/pSbb745AwcOzDXXXJMddtghixYt+sL227Rp0/Tu3TudO3f+wvaxMq277rq56667cvvtt+fEE0/M+PHj061bt0ydOvUzbee1115LWVlZ7rjjji+opAAAAABfDo2KLgAAAHzZtWzZMv379y9N77vvvunSpUv69++fsWPHZt999/1C9tuwYcOMGjXqC9n2F6Fly5bZY489StOHHXZYttlmmxxyyCGZOHFigSUDAAAA+HLSshYAAD6HnXfeOUkybdq0JEmbNm1y2mmnVVumb9++6du3b7V5U6dOzY477pimTZumU6dOueaaa+rcR81ukZPk3nvvzVZbbZUWLVqkU6dOOeuss7J48eJq673xxhvp169fmjdvnvXWWy9XXnlltfeXLFmSs88+Ox07dkzz5s3Tu3fvvPrqq6X3y8vLc+qpp+Yb3/hGVltttQwYMOBzjaHavHnznHXWWZk0aVImT55cmn/fffflBz/4QZo3b5527drl0EMPzQcffJBkaXfKlS2J995773Ts2HGF1vuyO/vss/PRRx8tM/+jjz7K2WefXUCJAAAAgC8DYS0AAHwOf/vb35Ika6655mda7+yzz07fvn1z/fXXZ/PNN8+gQYPy8MMPr9C6//d//5e99torm2++ee64444cddRROf/883PWWWdVW+7EE09M165dc+ONN6ZLly456qij8uKLL5beP/LIIzNs2LCcfPLJuemmm/LBBx+kV69e+fTTT5Mkw4cPzwUXXJCDDjoo119/fdq2bZsbbrjhM9Wz0g477JAkefzxx5MkEydOzG677Zbvfve7+ctf/pKRI0fmsccey09/+tMkya9//evcfffdSZIRI0bkwQcfXKH1vszOOuusnHXWWenZs2e1wPajjz5Kz549S+8DAAAAqx7dIAMAwHKUl5dn7ty5SZLFixdn6tSpOe6449KiRYv069fvM23roosuytFHH51kaSvSTTfdNMOHD0/Pnj2Xu+748eOzcOHCXH755WnWrFl69eqVRYsW5e9//3u15U455ZScccYZSZa2AG7Tpk0effTRbLrpppk2bVpGjRqVK664IkceeWSSZIsttsj666+f2267LT/84Q9zySWX5OCDD87IkSOTJPvss0/ef//9TJgw4TPVNVkaZjdv3jzvvPNOkqRdu3a5++6706tXrzRosPS3ozNnzsypp56a8vLyfPOb38yCBQuSLB0Dd+ONN16h9SrnfRkdf/zxueOOOzJlypT07NmzFM737NkzU6ZMSZcuXXL88ccXXEoAAACgCMJaAABYjpdffjktW7asNu+73/1u7rnnnrRv3/4zbWu99dYrvW7QoEH69euXm2++eYXW7d69exo2bJhDDjkkP/3pT7Pddtvl1FNPXWa5733ve6XXrVu3TosWLfKPf/wjSUotVffcc8/Mnz8/SbL22mvnW9/6Vp566qlst912ee+995YZh7ddu3afqZ5VVVRUpKysLMnS+n/88cf54Q9/mGeffTb/+Mc/smDBgsybNy8LFy5M06ZNa93G513vy6BNmzYZP358dtxxx1Jgm6QU1I4fPz5t2rQpuJQAAABAEb68Pz8HAIAviW9961t57LHH8thjj2XChAl566238sILL2T77bf/t7fdtm3bvPvuuyu0bPfu3TNu3Lh8/PHH2X333dO2bdscccQRmTVr1nLXraioSJJSaNuxY8c0a9as9G/69On54IMPSmX5d8LZqt59993MmzevtL1XXnklP/jBD9KwYcNce+21mTx5cq2Bc02fd70vi8rAtkuXLpkyZYqgFgAAAEiiZS0AACxX8+bNs91229W7TFlZWSkQ/Szee++9rLXWWiu8/I477pgdd9wx8+bNy7333pujjz46f/vb33Lfffet0PqrrbZaGjVqlPHjx6dhw4bV3ltzzTVL86qOrfrvGD9+fJLk+9//fpLkhhtuSKtWrXLjjTeWWtu2bdt2udv5vOt9mVRtYZtEUAsAAAAIawEAYGVo165d3nzzzWrz3nnnnWVaqL7++uul1xUVFfnLX/6SLbfccoX2ccwxx+Ttt9/OmDFj0qxZs+y999558skn87vf/W6Fy7n99ttn8eLF+fjjj7PbbruV5r/77rtZe+21s2TJkqy99toZN25c+vTpU3p/9uzZK7yPSnPmzMkZZ5yRrl27plu3bkmSDz/8sBRsV4aukyZNqrZe5fizVcPvFVnvq6AysK18DQAAAKzahLUAALAS9OrVK9dcc026du2aDh06ZPTo0XnuueeWCWtPPfXUzJ07NxtuuGFGjx6dqVOn5qqrrlqhffTs2TP77bdfTjjhhOy5556ZOXNmbrjhhuy8884rXM6tt946/fv3z8CBA3PmmWemS5cuee6553Laaafl1ltvTd++fTNkyJAMHTo066+/fnr06JFx48blxhtvTIcOHerd9ieffJJx48ZlyZIlefXVVzNy5Mh89NFHuf3220vL7LrrrvnNb36TQw89NH379s2f//zn0pi9c+fOTdOmTdOuXbs0btw4N910U5o0aZLdd999hdb7qhDSAgAAAJWMWQsAACvB2WefnX79+uWMM87IEUcckbXWWqtay9VKl19+ee69994cfPDBefbZZ/O73/0uO+ywwwrtY999983111+fcePGlULV/v375+qrr/5MZb355ptz+OGH55JLLkmfPn1y9dVXZ8SIEenbt2+S5IQTTshJJ52U008/PTvssEMeffTRHH744cvd7owZM9KrV6/sscce+eUvf5mdd945kydPzqabblpaZvfdd8+IESPyyCOP5PDDD8/cuXNz/fXXZ9NNN82MGTOSLO12+oILLsj999+fwYMHr/B6AAAAAF81ZWPGjPnsA2sBAPC1Uds4qzXnVZ2uqKhYZrrm/OW9rmu6vLy82rzy8vIsWbIkSXLcccetlPrWZfXVV0+ytLtdKJJrEWDluOyyy5IkDRs2TIMGDVJWVlb6V9nlftV59U0v73WlqvNrvlfbdF3zAABYdWhZCwAAAAAAAFAAYS0AAORfrRmnTZtWcElYlVVef5XXIwAAAPD1JqwFAIAknTt3TpJccMEFeeWVVwouDauiqVOn5oILLkjyr+sRAAAA+HprVHQBAADgy+DnP/95DjrooIwdOzZjx44tujis4k466aSiiwAAAAD8B2hZCwAASfr06ZObbropW221VVq2bFl0cVgFtW7dOltvvXVuueWW9OrVq+jiAAAAAP8BWtYCAMA/9e3bN3379i26GADwlTF79uzPvW6rVq1WYkkAAOCrSctaAAAAAAAAgAIIawEAAAAAAAAKoBtkAAD4p2HDhuXaa6/NwoULq83v2LFjbrrppqyzzjoFlQwAAACAryMtawEA4J+uueaaZYLaJHnzzTczYMCAzJw5s4BSAQAAAPB1pWUtAAD806JFi+p8780338z2229f63tNmjTJYYcdlsGDB39RRQMAAADga0jLWgAA+DctXLgw1157bdHFAIAvlbFjxxZdBAAA+NIT1gIAwEpQW/fJALCqqgxqBbYAAFA/YS0AAAAAK03NgFZgCwAAdRPWAgAAALBS1BXMCmwBAKB2jYouAAAAAABfD3vuuWfRRQAAgK8ULWsBAAAAAAAACiCsBQAAAAAAACiAsBYAAP6pcePGn3vdJk2a1Dr/17/+dS666KI6pwEAAABYdQlrAQDgnw4//PDPFdg2btw4hx12WK3vTZ8+Pa+99lqd0wAAAACsusrGjBlTUXQhAAAoTkXFsh8Ha86rOl1RUbHMdM35y3td13R5eXm1eeXl5VmyZEmS5Ljjjlsp9QUAVp7Zs2d/7nVbtWq1EkuyrMsuuyxJ0rBhwzRo0CBlZWWlfw0aLG2/UHVefdPLe12p6vya79U2Xdc8AABWHVrWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAdaioqMg+++yT9ddfP5988kmdy3Xt2jVnnnlmtXkLFy7M/vvvn6233jpvv/12kuSoo47K+uuvX/rXpUuX7Lnnnrn99tu/0HoAAAAA8OXUqOgCAADAl9VNN92UKVOmfK51Tz755Lz44ou5+eab0759+9L8ddZZJ2effXaSZO7cubnvvvty0kknpVmzZtl1111XSrkBAAAA+GoQ1gIAQC1mzZqVYcOGpWvXrpk8efJnWnfEiBEZO3ZsRo4cmc0337zaey1atMhOO+1Umu7Xr1923HHH3HPPPcJaAAAAgFWMbpABAKAWF110UTp37pz+/ft/pvXGjh2bESNG5IQTTshuu+223OXLysrSrFmzfPrpp5+3qAAAAAB8RWlZCwAANTz11FO58847M3bs2M/Uqvbpp5/OySefnP79++eYY46pdZmKioosWLAgydJukP/4xz/mtddey5AhQ1ZK2QEAAAD46hDWAgBAFYsWLcrpp5+eH//4x9lkk01WOKx988038z//8z9ZsGBBBg0aVOdyr776ar797W9Xm3fkkUdW6xoZAAAAgFWDsBYAAKr43e9+lw8//DA/+9nPPtN6Dz/8cDbaaKM0btw4Q4YMyZgxY9KkSZNlllt33XXz61//OkmyYMGCTJw4MZdffnk6duyYAQMGrJQ6AAAAAPDVIKwFAIB/euuttzJy5Micc845adasWRYvXpyKiookSXl5ecrLy9OgQYNa111nnXVy3XXXZfr06fnxj3+cSy65JKeddtoyyzVt2jRbbrllaXqbbbbJ3//+91x66aXCWgAAAIBVTO3fNAEAwCrouuuuy6effpqTTjopG220UTbaaKOcccYZSZIuXbrk5JNPrnPdnXbaKWuvvXa+//3v54gjjsjvf//7PProoyu03w022CDvvfdeFi5cuFLqAQAAAMBXg5a1AADwT4ccckj22GOPavPuvffe/Pa3v80tt9yS9u3br9B2TjjhhDzxxBM56aSTcs8996Rt27b1Lv/cc89lnXXWqbXbZAAAAAC+voS1AADwTx06dEiHDh2qzXv++eeTJN/5znfSokWLFdpO48aNM2LEiPTr1y+DBw/Otddem7KysiTJJ598kkceeSRJMn/+/IwfPz4PPPBATj/99JVYEwAAAAC+CoS1AADwBVhvvfVy9tln58QTT8wf/vCH/OQnP0mSzJw5s/S6adOm6dSpUy644IIceOCBRRYXAAAAgAKUjRkzpqLoQgAAUJyKimU/DtacV3W6oqJimema85f3uq7p8vLyavPKy8uzZMmSJMlxxx23UuoLAKw8s2fP/tzrtmrVaiWWZFmXXXZZkqRhw4Zp0KBBysrKSv8aNGiQJNXm1Te9vNeVqs6v+V5t03XNAwBg1dGg6AIAAAAAAAAArIqEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAABX3kQAACAASURBVAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAAAAAAFEBYCwAAAAAAAFAAYS0AAAAAAABAAYS1AAAAAAAAAAUQ1gIAAAAAAAAUQFgLAAAAAAAAUABhLQAAAAAAAEABhLUAAAAAAAAABRDWAgAAAAAAABRAWAsAAAAAAABQAGEtAAAAAAAAQAGEtQAAAAAAAAAFENYCAAAA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WAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQgFgLAAAAAAAAkIBYCwAAAAAAAJCAWAsAAAAAAACQwP8HvK1Hw/Z9ixIAAAAASUVORK5CYII=']
  _via_basic_demo_img_filename = ['adutta_swan.jpg'];
};