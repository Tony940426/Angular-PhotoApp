import { Component } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  photolink = ''
  constructor(private fetchphotoservice: FetchPhotoService ){
    this.fetchPhoto();
  }
  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.fetchphotoservice.getPhoto().subscribe((response) => {
      this.photolink = response.urls.regular
    });
  }
}
