import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventDeleteComponent } from './event/event-delete/event-delete.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { LoginComponent } from './login/login.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'students',component:StudentListComponent},
  {path:'speakers',component:SpeakerListComponent},
  {path:'events',component:EventListComponent},
  {path:'events/add',component:EventAddComponent},
  {path:'events/delete/:_id',component:EventDeleteComponent},
  {path:'events/details/:_id',component:EventDetailsComponent},
  {path:'events/edit',component:EventEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
