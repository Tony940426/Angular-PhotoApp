import { Component } from '@angular/core';
import { FetchPhotoService } from './fetch-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = ''
  constructor(private fetchPhoto: FetchPhotoService){
  }
}
