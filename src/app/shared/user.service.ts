import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly usersAPIUrl = "http://localhost:5274/api";

  constructor(private http: HttpClient, private router:Router) { }

  // formaData:User;

  form : FormGroup = new FormGroup({
    $key : new  FormControl(null),
    libelle : new  FormControl('',Validators.required),
    login : new  FormControl('',Validators.required),
    password : new  FormControl('',Validators.required),
    mobile : new  FormControl('',Validators.required),
    email : new  FormControl('',Validators.required),



  
  });



  //Get All
  getUtilisateursList():Observable<User[]> {
    return this.http.get<User[]>(this.usersAPIUrl + '/Utilisateurs');
  }

  getuser(){
    this.http.get<any>(this.usersAPIUrl + '/Utilisateurs')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.form.value.email && a.password === this.form.value.password
      });
      if(user){
        alert("login success");
        this.form.reset();
        this.router.navigate(['dashbord'])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Somthing went wrong!!")
    })
  }

  //Post
  async addUtilisateurs(data:User) {
    await this.http.post(this.usersAPIUrl + '/Utilisateurs', data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe({
      complete: () => {
        //this._refresh$.next();
        console.log(Response.toString());
      }, // completeHandler
      error: () => { console.log(Error) },    // errorHandler
      
    });
  }
 
}
