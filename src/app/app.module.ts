import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ModalModule, BsDropdownModule} from 'ngx-foundation';
import { FileSizeModule } from 'ngx-filesize';
import { ApiModule} from 'ng-tapis';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent} from './components/map/map.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { AuthService } from './services/authentication.service';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthInterceptor} from './app.interceptors';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ModalFileBrowserComponent } from './components/modal-file-browser/modal-file-browser.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent, MapComponent, NotFoundComponent, MainComponent,
    CallbackComponent,
    ModalFileBrowserComponent,
  ],
  imports: [
    // this is for the ng-tapis library
    ApiModule.forRoot({rootUrl: 'https://agave.designsafe-ci.org/'}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    FileSizeModule,
    BsDropdownModule.forRoot(),

  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    },
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseHref
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalFileBrowserComponent]
})
export class AppModule { }

