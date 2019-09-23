import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//-------*--Ngrx--*---------------//
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './simple.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({mymessage:simpleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
