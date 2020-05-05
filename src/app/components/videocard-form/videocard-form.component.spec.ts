import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardFormComponent } from './videocard-form.component';

describe('VideoCardFormComponent', () => {
  let component: VideoCardFormComponent;
  let fixture: ComponentFixture<VideoCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
