import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string
  constructor(private apiService: DataService, public router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log("call");
    sessionStorage.setItem('token', this.token);
    this.router.navigate(["/admitStudent"]); 
  }

}
