import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Character } from '../shared/models/character.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private afs: AngularFirestore ) { }

  //************************************************//
  //**************ADD NEW CHARACTER****************//
  //***********************************************//

  async addCharacter( data: Character, id?: string) : Promise<string>{
    const uid = id?id:this.afs.createId();
    data.id = uid;
    await this.afs.collection("characters").doc(uid).set(data);
    return uid;
  }



  //************************************************//
  //**************GET ALL CHARACTERS****************//
  //***********************************************//

  getAllCharacter(): Observable<Character[]> {
    return this.afs.collection("characters").valueChanges() as Observable<Character[]>;
  }



  //*******************************************//
  //**************GET CHARACTER****************//
  //*******************************************//

  getCharacter(id: string) : Observable<Character> {
    return this.afs.collection("characters").doc(id).valueChanges() as Observable<Character>;
  }



  //***********************************************//
  //**************UPDATE CHARACTER****************//
  //**********************************************//

  updateCharacter( id: string, data: Character){    
    return this.afs.collection("characters").doc(id).update(data);
  }



  //***********************************************//
  //**************DELETE CHARACTER****************//
  //**********************************************//

  deleteCharacter( id: string){
    return this.afs.collection("characters").doc(id).delete();
  }
}
