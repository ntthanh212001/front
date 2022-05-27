import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage = 'Thông tin Sai';
  successMessage: string = "";
  invalidLogin:boolean = false;
  loginSuccess:boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // redirect to main page
        this.router.navigate(['/list-product']);



    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
