import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/interfaces/login.interface';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router){ }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      numberDni: ['', Validators.required],
      password:['', Validators.required]
    })
  }
  

  login(){
    this.http.get<any>("http://localhost:3000/usuarios")
    .subscribe(res=>{
      const user = res.find((a:LoginInterface) =>{
        return a.numberDni === this.loginForm.value.numberDni && a.password === this.loginForm.value.password
      });
      if (user){
        alert("Login Success!");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else{
        alert("user or password incorrect!");
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }
}
