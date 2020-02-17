import { DogsItemComponent } from './dogs/dogs-item/dogs-item.component';
import { DogsComponent } from './dogs/dogs.component';
import { WildCardComponent } from '@mdv-twenty-one/ui-lib';
import { LoginComponent } from '@mdv-twenty-one/ui-lib';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dogs', children: [
    { path: '', component: DogsComponent },
    { path: ':id', component: DogsItemComponent }
  ] },
  { path: '404', component: WildCardComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
