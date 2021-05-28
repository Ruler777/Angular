import { Component, Inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/shared/models/character.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mod-character',
  templateUrl: './mod-character.component.html',
  styleUrls: ['./mod-character.component.css']
})
export class ModCharacterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
    species: new FormControl('', [Validators.required]),
    birth: new FormControl('', [Validators.required]),
    alignment: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });


  id: string = this.data.characterId;
  authorId: string ="";

  constructor(    
    private service: CharacterService,
     public dialogRef: MatDialogRef<ModCharacterComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {characterId: string},
     ) { }

  ngOnInit(): void {    
    

    this.service.getCharacter(this.id).subscribe( char => {
      
      this.authorId = char.creatorId;
      
      this.form.setValue({
        name: char.name,
        nickname: char.nickname,
        species: char.species,
        birth: char.birth,
        gender: char.gender,
        alignment: char.alignment,        
      })        
    });
    
  }
  mod(){    
    if(this.form.valid){
    var modChar: Character = {
      id: this.id,
      creatorId: '',
      name: this.form.value.name,
      nickname: this.form.value.nickname,
      species: this.form.value.species,
      birth: this.form.value.birth,
      gender: this.form.value.gender,
      alignment: this.form.value.alignment,  
    }
    this.service.updateCharacter(this.id ,modChar);
    this.dialogRef.close();
    }
  }
}
