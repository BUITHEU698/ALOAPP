import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-popup-change-avatar',
  templateUrl: './popup-change-avatar.component.html',
  styleUrls: ['./popup-change-avatar.component.scss']
})
export class PopupChangeAvatarComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    console.log('hahah');
    
    // show cropper
  }
  cropperReady() {
    // cropper ready
    console.log('hahah');
  }
  loadImageFailed() {
    // show message
    console.log('hahah');
  }

}
