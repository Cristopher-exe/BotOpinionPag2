import { Component, OnInit } from '@angular/core';
import { OpinionesService } from '../services/opiniones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario={
    email: '',
    password: ''
  }

  constructor(private authService: OpinionesService){

  }

  Ingresar() {
    console.log(this.usuario);
    const {email,password}=this.usuario;
    this.authService.login(email,password).then(res =>{
      console.log("se registro: ",res)  
    });
  }

  IngresarConGoogle() {
    console.log(this.usuario);
    const {email,password}=this.usuario;
    this.authService.loginWithGoogle(email,password).then(res =>{
      console.log("se registro: ",res)  
    });
  }

  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email)
    });
  }
  logout(){
    this.authService.logOut();
  }
  ngOnInit(): void {
  }

}
