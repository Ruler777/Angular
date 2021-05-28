import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatButtonModule,MatDialogModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
