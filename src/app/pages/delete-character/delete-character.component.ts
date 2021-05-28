import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CharacterService} from '../../services/character.service';



@Component({
  selector: 'app-delete-character',
  templateUrl: './delete-character.component.html',
  styleUrls: ['./delete-character.component.css']
})
export class DeleteCharacterComponent implements OnInit {

  //constructor(public dialogRef: MatDialogRef<DeleteCharacterComponent>) {}
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {characterId: string},
    public dialogRef: MatDialogRef<DeleteCharacterComponent>,
    private service: CharacterService
    ) { }

  ngOnInit(): void {}

  delete(){
    this.service.deleteCharacter(this.data.characterId);
    this.dialogRef.close();
  }
}
