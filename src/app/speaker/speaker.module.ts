import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { RouterModule } from '@angular/router';
import { SpeakerDeleteComponent } from './speaker-delete/speaker-delete.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpeakerListComponent,
    SpeakerDeleteComponent,
    SpeakerDetailsComponent,
    SpeakerEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule
  ]
})
export class SpeakerModule { }
