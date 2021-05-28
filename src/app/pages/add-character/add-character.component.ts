import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../shared/models/character.model'
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
    species: new FormControl('', [Validators.required]),
    birth: new FormControl('', [Validators.required]),
    alignment: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  constructor(private service: CharacterService,public dialogRef: MatDialogRef<AddCharacterComponent>,) { }

  ngOnInit(): void {
  }

  add(): void{
    console.log("add");
    if( this.form.valid){
      var newChar : Character  ={
        id: '',
        creatorId: '',
        name: this.form.value.name,
        nickname: this.form.value.nickname,
        species: this.form.value.species,
        birth: this.form.value.birth,
        gender: this.form.value.gender,
        alignment: this.form.value.alignment,
      };
      this.service.addCharacter(newChar);
      this.dialogRef.close();
    }
  }
}
