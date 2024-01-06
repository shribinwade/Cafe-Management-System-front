import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/global-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  hide=true;
  loginFrom:any=FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    public dialogRef:MatDialogRef<LoginComponent>,
    private ngxService:NgxUiLoaderService,
    private router:Router,
    private snackbarService:SnackbarService){}

  ngOnInit(): void {
    this.loginFrom=this.formBuilder.group(
      {
        email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
        password:[null,[Validators.required]],
      }
    )
  }

  handleSubmit(){
    this.ngxService.start();
    
  }


}
