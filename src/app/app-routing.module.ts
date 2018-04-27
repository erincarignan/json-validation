import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

const routes: Routes = [
  { path: '', redirectTo: '/templateValidation', pathMatch: 'full' },
  { path: 'templateValidation', component: FormValidationComponent },
  { path: 'reactiveValidation', component: ReactiveFormValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
