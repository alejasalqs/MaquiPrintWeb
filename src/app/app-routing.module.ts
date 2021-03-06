import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ItemsComponent } from './pages/items/items.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'catalogo', component: ItemsComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
