import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
 
  constructor(private apiService : ApiService,private _router:Router) { }

  ngOnInit() {
    this.user = new User;
  }

    submitForm(){
      
      this.apiService.userLogin(this.user).subscribe(data =>{

       console.log(data);
       this._router.navigate(['/dashboard']);
      
    })
  }}
      
