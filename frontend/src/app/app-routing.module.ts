import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './register/login/login.component';
import { SignupComponent } from './register/signup/signup.component';
import { VerifyOtpComponent } from './register/verify-otp/verify-otp.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {path:"signup", component:SignupComponent},
  {path:"verify-otp", component:VerifyOtpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
