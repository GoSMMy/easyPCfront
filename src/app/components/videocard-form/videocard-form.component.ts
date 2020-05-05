import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoCardService } from '../VideoCard/videocard-service.service';
import { VideoCard } from '../VideoCard/videocard';

@Component({
  selector: 'app-videocard-form',
  templateUrl: './videocard-form.component.html',
  styleUrls: ['./videocard-form.component.sass']
})
export class VideoCardFormComponent {

  videoCard: VideoCard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoCardService: VideoCardService) {
    this.videoCard = new VideoCard();
  }

  onSubmit() {
    this.videoCardService.save(this.videoCard).subscribe(result => this.gotoVideoCardList());
  }

  gotoVideoCardList() {
    this.router.navigate(['/videocards']);
  }

}
