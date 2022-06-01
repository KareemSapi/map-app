import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [

{
  path: '',
  component: GoogleMapComponent,
    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutedComponents = [
  GoogleMapComponent
]
