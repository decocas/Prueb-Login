import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalidaComponent } from './salida/salida.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login/login.component';
import { LoginGuard } from './guard/login.guard';
 
 
import { NavbarComponent } from './login/navbar/navbar.component';
 
 
const routes: Routes = [   
                        {path: 'entrada', component: EntradaComponent,canActivate:[LoginGuard]  },
                        {path: 'salida', component: SalidaComponent,canActivate:[LoginGuard]},
                        {path: 'consulta', component: ConsultaComponent,canActivate:[LoginGuard]},
                        {path: 'info', component: InfoComponent,canActivate:[LoginGuard]},
                        {path: 'login', component: LoginComponent },
                        {path: 'navbar', component: NavbarComponent }
                                 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
