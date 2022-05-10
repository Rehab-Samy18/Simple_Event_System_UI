import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventDeleteComponent } from './event/event-delete/event-delete.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SpeakerEditFormComponent } from './speaker-edit-form/speaker-edit-form.component';
import { SpeakerRegisterComponent } from './speaker-register/speaker-register.component';
import { SpeakerDeleteComponent } from './speaker/speaker-delete/speaker-delete.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerhomeComponent } from './speakerhome/speakerhome.component';
import { StudentEditFormComponent } from './student-edit-form/student-edit-form.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'adminpage',component:AdminhomeComponent},
  {path:'studentpage',component:StudenthomeComponent},
  {path:'speakerpage',component:SpeakerhomeComponent},
  {path:'studentregister',component:StudentRegisterComponent},
  {path:'speakerregister',component:SpeakerRegisterComponent},
  {path:'events',component:EventListComponent},
  {path:'events/add',component:EventAddComponent},
  {path:'events/delete/:_id',component:EventDeleteComponent},
  {path:'events/details/:_id',component:EventDetailsComponent},
  {path:'events/edit/:_id',component:EventEditComponent},
  {path:'students',component:StudentListComponent},
  {path:'students/delete/:_id',component:StudentDeleteComponent},
  {path:'students/edit/:_id',component:StudentEditComponent},
  {path:'student/edit/:_id',component:StudentEditFormComponent},
  {path:'speaker/edit/:_id',component:SpeakerEditFormComponent},
  {path:'students/details/:_id',component:StudentDetailsComponent},
  {path:'speakers',component:SpeakerListComponent},
  {path:'speakers/delete/:_id',component:SpeakerDeleteComponent},
  {path:'speakers/edit/:_id',component:SpeakerEditComponent},
  {path:'speakers/details/:_id',component:SpeakerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
