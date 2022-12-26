import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame3143Component } from './frame3143/frame3143.component';
import { NewChatComponent } from './new-chat/new-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    Frame3143Component,
    NewChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
