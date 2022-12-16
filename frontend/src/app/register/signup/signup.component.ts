import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform : FormGroup ;
  response: any = [];
  responseData: any = [];

  constructor(private service:ServiceService) { 
    this.myform = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      middlename: new FormControl(null),
      lastname: new FormControl(null, [Validators.required]),
      fullname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      confirmpassword : new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      city :new FormControl(null, [Validators.required]),
      state :new FormControl(null, [Validators.required]),
      country :new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
      
  }

  submit() {
    let body = this.myform.value;
    this.service.signup(body)
      .subscribe(
        data => {
          this.response = data;
          if (this.response.isSuccess) {
            alert("signup")
          } else {
          }

        }
      )

  }


}
