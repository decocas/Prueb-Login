import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalidaComponent } from './salida/salida.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [{path: 'entrada', component: EntradaComponent },
                        {path: 'salida', component: SalidaComponent },
                        {path: 'consulta', component: ConsultaComponent },
                        {path: 'info', component: InfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
