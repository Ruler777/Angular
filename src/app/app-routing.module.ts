import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from './pages/add-character/add-character.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ModCharacterComponent } from './pages/mod-character/mod-character.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },  
];

@NgModule({  
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
