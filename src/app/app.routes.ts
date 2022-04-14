
// Librerias Angular
import {​​​​​ RouterModule, Routes }​​​​​ from'@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';



const APP_ROUTES:Routes=
 [
    {​​​​​ path:'home', component: HomeComponent }​​​​​,
    {​​​​​ path:'precios', component: PreciosComponent }​​​​​,
    {​​​​​ path:'protegido', component: ProtegidoComponent }​​​​​,
// ruta con parametro
    {​​​​​ path:'**', pathMatch:'full', redirectTo:'home' }​​​​​,
];
export const ROUTES= RouterModule.forRoot(APP_ROUTES);
