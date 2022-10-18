import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  private readonly QTT_PHOTOS: number = 16;
  photos: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < this.QTT_PHOTOS; i++) {
      this.photos.push(i);
    }
  }

}
