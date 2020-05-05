import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCardListComponent } from './components/videocard-list/videocard-list.component';
import { VideoCardFormComponent } from './components/videocard-form/videocard-form.component';


const routes: Routes = [
  { path: 'videocards', component: VideoCardListComponent },
  { path: 'addvideocard', component: VideoCardFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
