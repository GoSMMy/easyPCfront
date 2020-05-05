import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCardListComponent } from './components/videocard-list/videocard-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoCardService } from './components/VideoCard/videocard-service.service';
import { VideoCardFormComponent } from './components/videocard-form/videocard-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoCardListComponent,
    VideoCardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VideoCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
