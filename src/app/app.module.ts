import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule  } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { AddCharacterModule } from './pages/add-character/add-character.module';
import { ModCharacterModule } from './pages/mod-character/mod-character.module';
import { DeleteCharacterModule } from './pages/delete-character/delete-character.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  
    AngularFirestoreModule,
    AngularFireAuthModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    AddCharacterModule,
    ModCharacterModule,
    DeleteCharacterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
