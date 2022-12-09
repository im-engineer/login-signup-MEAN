import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform : FormGroup | undefined;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

}
