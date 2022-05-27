import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { LoginComponent } from './admin/login/login.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { DetailProductComponent } from './detailProduct/detail-product/detail-product.component';
import { AuthService } from './service/AuthService';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path: 'detail-product/:id', component:DetailProductComponent},
  {path: 'list-product', component: ListProductComponent, canLoad: [AuthService]},
  {path:'cart', component: CartComponent},
  {path:'admin', component:LoginComponent},
  {path:'list-product/create-product', component:CreateProductComponent},
  {path: 'list-product/update-product/:id', component: UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
