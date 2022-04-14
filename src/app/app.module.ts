import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ROUTES } from './app.routes';

//importando el SDK de AUTH0
import {AuthModule} from '@auth0/auth0-angular'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidoComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    AuthModule.forRoot({
      domain: 'dev--3e37ljk.us.auth0.com',
      clientId: '34eLTF4nIGXsJxA1gvlTHCWhFPyxscKg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
