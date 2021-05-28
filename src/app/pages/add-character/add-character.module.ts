import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCharacterComponent } from './add-character.component';


import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AddCharacterComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatCardModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatChipsModule,MatRadioModule,MatSelectModule
  ],
  exports: [AddCharacterComponent]
})
export class AddCharacterModule { }
