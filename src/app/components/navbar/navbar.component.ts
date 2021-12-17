import { Component, OnInit } from '@angular/core';
import { OpinionesService } from 'src/app/services/opiniones.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userLogged=this.authService.getUserLogged();

  constructor(private authService: OpinionesService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logOut();
  }
}
