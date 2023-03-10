import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { ApprovalMemberComponent } from './approval-member/approval-member.component';
import { NewCalendarGroupComponent } from './new-calendar-group/new-calendar-group.component';
import { ListChatComponent } from './list-chat/list-chat.component';
import { SettingGroupComponent } from './setting-group/setting-group.component';
import { ListMessPinnedComponent } from './list-mess-pinned/list-mess-pinned.component';
import { ExploreAroundYouComponent } from './explore-around-you/explore-around-you.component';
import { SetTimeLimitComponent } from './set-time-limit/set-time-limit.component';
import { MenuSettingMessComponent } from './menu-setting-mess/menu-setting-mess.component';
import { ListChooseGimComponent } from './list-choose-gim/list-choose-gim.component';
import { ExploreAroundYou_1Component } from './function_explore_around_you/explore-around-you/explore-around-you-1.component';
import { FormLoginAloline1Component } from './form-login-aloline1/form-login-aloline1.component';
import { ScrollComponent } from './scroll/scroll.component';
import { scrollShowHide } from './scroll-show-hide.directive';
import { PopupChangeAvatarComponent } from './popup-change-avatar/popup-change-avatar.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PopupCropAvatarComponent } from './popup-crop-avatar/popup-crop-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewChatComponent,
    ApprovalMemberComponent,
    NewCalendarGroupComponent,
    ListChatComponent,
    SettingGroupComponent,
    ListMessPinnedComponent,
    ExploreAroundYouComponent,
    SetTimeLimitComponent,
    MenuSettingMessComponent,
    ListChooseGimComponent,
    ExploreAroundYou_1Component,

    FormLoginAloline1Component,
    ScrollComponent,
    PopupChangeAvatarComponent,
    PopupCropAvatarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, scrollShowHide, ImageCropperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
