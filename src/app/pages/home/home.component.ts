import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../shared/models/character.model'
import { AddCharacterComponent } from '../add-character/add-character.component';
import { DeleteCharacterComponent } from '../delete-character/delete-character.component';
import { ModCharacterComponent } from '../mod-character/mod-character.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Observable<Character[]> | undefined;    
  constructor(private service: CharacterService, public dialog: MatDialog) { }
    
    ngOnInit(): void {      
      this.characters = this.service.getAllCharacter();
    }

    deleteCharacter(id: string): void{            
      const dialogRef = this.dialog.open(DeleteCharacterComponent, {
        data:{characterId: id}
      });
    }

    modifyCharacter( id: string ): void{
      const dialogRef = this.dialog.open(ModCharacterComponent, {
        data:{characterId: id}
      });
    }

    addCharacter(){
      const dialogRef = this.dialog.open(AddCharacterComponent, {});

    }
}

