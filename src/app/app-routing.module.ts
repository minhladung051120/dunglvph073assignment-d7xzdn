import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";




const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductListComponent },
  { path: "product/manager", component: ProductManagerComponent },
  // { path: "product/add", component: AddProductComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  // { path: "product/edit/:id", component: ProductEditComponent},
  // { path: "about", component: AboutComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
