import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteCharacterComponent } from './delete-character.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DeleteCharacterComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    MatInputModule,    
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports:[
    DeleteCharacterComponent
  ]
})
export class DeleteCharacterModule { }
