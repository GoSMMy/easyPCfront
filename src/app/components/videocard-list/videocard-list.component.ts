import { Component, OnInit } from '@angular/core';
import { VideoCard } from '../VideoCard/videocard';
import { VideoCardService } from '../VideoCard/videocard-service.service';

@Component({
  selector: 'app-videocard-list',
  templateUrl: './videocard-list.component.html',
  styleUrls: ['./videocard-list.component.sass']
})
export class VideoCardListComponent implements OnInit {

  videoCards: VideoCard[];

  constructor(private videoCardService: VideoCardService) {
  }

  ngOnInit() {
    this.videoCardService.findAll().subscribe(data => {
      this.videoCards = data;
    });
  }
}
