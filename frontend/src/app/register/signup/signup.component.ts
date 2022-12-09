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
      firstName: new FormControl(null, [Validators.required]),
      middleName: new FormControl(null),
      lastName: new FormControl(null, [Validators.required]),
      fullname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      city :new FormControl(null, [Validators.required]),
      state :new FormControl(null, [Validators.required]),
      country :new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    // this.myform.signup()
    //   .subscribe(data => {
    //     // console.log(data);
    //     this.responce = data;
    //     this.responceData = this.responce.data;
    //     this.userTypeId = this.responceData[0]._id;
    //   })
  }

  submit() {
    console.log("my form", this.myform.value);
    let body = this.myform.value;
    this.service.signup()
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
