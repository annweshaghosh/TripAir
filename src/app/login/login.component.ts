import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { AuthUser } from 'src/models/auth.User';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  OnLoginClick(loginForm: NgForm) {
    let data: AuthUser = {
      username: loginForm.value.txtUserName,
      password: loginForm.value.txtPassword,
      grant_type: 'password'
    }
    this._auth.login(data).subscribe(res => {
      this.GetUserDetails(loginForm.value.txtUserName);
    },
      (err) => {
        //alert("Username & Password Mismatch!");
        let msg = "Username & Password Mismatch!";
        let action = "incorrect";
        this.openSnackBar(msg,action);
      });
  }

  GetUserDetails(username: string) {
    this._auth.getUserDetails().subscribe(res => {
      sessionStorage.setItem('userDetail', res);
      let test = this._auth.isLoggedIn();
      
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
