import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CrearOpinionComponent } from './components/crear-opinion/crear-opinion.component';
import { ListarOpinionesComponent } from './components/listar-opiniones/listar-opiniones.component';
import { environment } from 'src/environments/environment';
import {PrincipalComponent} from './pages/principal/principal.component';
import { PantallaComponent } from './pages/pantalla/pantalla.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CrearOpinionComponent,
    ListarOpinionesComponent,
    PrincipalComponent,
    PantallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
