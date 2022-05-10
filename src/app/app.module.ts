import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { StudentModule } from './student/student.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SpeakerModule } from './speaker/speaker.module';
import { EventModule } from './event/event.module';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { SpeakerRegisterComponent } from './speaker-register/speaker-register.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { SpeakerhomeComponent } from './speakerhome/speakerhome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentEditFormComponent } from './student-edit-form/student-edit-form.component';
import { SpeakerEditFormComponent } from './speaker-edit-form/speaker-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentRegisterComponent,
    SpeakerRegisterComponent,
    HomeComponent,
    AdminhomeComponent,
    StudenthomeComponent,
    SpeakerhomeComponent,
    HeaderComponent,
    FooterComponent,
    StudentEditFormComponent,
    SpeakerEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModule,
    SpeakerModule,
    EventModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,

    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
