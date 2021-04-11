import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpdateproductComponent} from './updateproduct/updateproduct.component';
import {ListproductComponent} from './listproduct/listproduct.component';
import {CreateproductComponent} from './createproduct/createproduct.component';
const routes: Routes = [
  {
    path: '',
    component: ListproductComponent
  },
  {
    path: 'create',
    component: CreateproductComponent
  },
  {
    path: 'update/:id',
    component: UpdateproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
