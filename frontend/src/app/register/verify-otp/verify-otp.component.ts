import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {

  otpVerificationForm : FormGroup;
  response: any;

  constructor(private service : ServiceService, 
    private router: Router) {
    this.otpVerificationForm = new FormGroup({
      otp :  new FormControl(null)
    })
   }

  ngOnInit(): void {
  }

  submit() {
    let body = this.otpVerificationForm.value;
    this.service.verifyOtp(body)
      .subscribe(
        data => {
          this.response = data;
          if (this.response.isSuccess) {
            // this.toastr.success(this.response.message)
            this.router.navigate(['']);
          } else {
          }

        }
      )

  }

}
