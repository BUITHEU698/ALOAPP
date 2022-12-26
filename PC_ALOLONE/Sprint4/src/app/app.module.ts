import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame3143Component } from './frame3143/frame3143.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { ApprovalMemberComponent } from './approval-member/approval-member.component';
import { NewCalendarGroupComponent } from './new-calendar-group/new-calendar-group.component';

@NgModule({
  declarations: [
    AppComponent,
    Frame3143Component,
    NewChatComponent,
    ApprovalMemberComponent,
    NewCalendarGroupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
