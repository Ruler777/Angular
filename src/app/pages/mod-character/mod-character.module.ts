import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModCharacterComponent } from './mod-character.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ModCharacterComponent],
  imports: [
    CommonModule,        
    MatButtonModule,    
    MatCardModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule,FormsModule,
    MatRadioModule,  MatSelectModule
  ],
  exports: [
    ModCharacterComponent
  ]
})
export class ModCharacterModule { }
