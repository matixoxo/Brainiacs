import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuModule } from './menu/menu.module';
import { PeopleListModule } from './people-list/people-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MenuModule,
    PeopleListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
