import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoCard } from './videocard';
import { Observable } from 'rxjs';

@Injectable()
export class VideoCardService {

  private readonly videoCardUrl: string;

  constructor(private http: HttpClient) {
    this.videoCardUrl = 'http://localhost:8080/api/video-card';
  }

  public findAll(): Observable<VideoCard[]> {
    return this.http.get<VideoCard[]>(this.videoCardUrl);
  }

  public save(videoCard: VideoCard) {
    return this.http.post<VideoCard>(this.videoCardUrl, videoCard);
  }
}
