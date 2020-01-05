import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    if (localStorage.getItem('userToken')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogin(email, password){
    this.usersService.loginUser(email, password).subscribe((data)=> {
      console.log(data);
      localStorage.setItem('userToken', data.authorization);
      this.isLogged = true;
    },
    (err)=> {
      console.log(err);
    })
  }

  onLogout() {
    localStorage.removeItem('userToken');
    this.isLogged = false;
  }
}
