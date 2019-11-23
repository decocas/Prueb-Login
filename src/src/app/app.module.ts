import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AngularFireModule } from '@angular/fire';
//import { environment } from '../environments/environment';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { OperacionesService } from '../app/servicios/operaciones.service';
 
@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    SalidaComponent,
    ConsultaComponent,
    InfoComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 //   AngularFireAuthModule,
   // AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }
