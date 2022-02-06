import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public signinupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ,public service : UserService) { }

  ngOnInit(): void {
    // this.signinupForm = this.formBuilder.group({
    //   libelle:[''],
    //   login:[''],
    //   password:[''],
    //   mobile:[''],
    //   email:[''],

    // })
  }

  onSubmit(){
    // this.http.post<any>("http://localhost:5274/api/Utilisateurs", this.signinupForm.value)
    this.service.addUtilisateurs(this.service.form.value)
    // .subscribe(x=>{
    //   alert("signUp successfuly");
    //   this.signinupForm.reset();
     this.router.navigate(['login']);
    // },err=>{
    //   alert('error 404');
    // })

  }

}
