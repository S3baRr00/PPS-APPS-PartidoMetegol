import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePage } from './home/home.page';
import { AltaPartidoComponent } from './alta-partido/alta-partido.component';
import { SeccionGanadoresComponent } from './seccion-ganadores/seccion-ganadores.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'

const noLogueado = () => redirectUnauthorizedTo(['Login']);
const logueado = () => redirectLoggedInTo(['Home']);

const routes: Routes = [
	{ path: '', redirectTo: 'Login', pathMatch: 'full' },
	{ path: 'Login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: logueado } },
	{ path: 'Home', component: HomePage, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: noLogueado } },
	{ path: 'alta-partido', component: AltaPartidoComponent },
	{ path: 'seccion-ganadores', component: SeccionGanadoresComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
