import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  response:any; 

  constructor(private service: ServiceService,
    private router: Router) { 
    this.loginForm = new FormGroup ({
      email: new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submit() {
    let body = this.loginForm.value;
    console.log("🚀 ~ file: login.component.ts:29 ~ LoginComponent ~ submit ~ body", body);
    this.service.login(body)
      .subscribe(
        data => {
          this.response = data;
          console.log("🚀 ~ file: login.component.ts:34 ~ LoginComponent ~ submit ~ data", data);
          if (this.response.isSuccess) {
            // this.toastr.success(this.response.message)
            this.router.navigate(['signup']);
          } else {
          }

        }
      )

  }
 
  

}
