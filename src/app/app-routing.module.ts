import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { GridComponent } from './bootstrap/grid/grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'user-info', component: UserInfoComponent},
  { path: 'bootstrap/grid', component: GridComponent},
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListComponent, GridComponent, UserInfoComponent, ProductDetailComponent];
