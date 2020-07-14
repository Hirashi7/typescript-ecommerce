import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: 'test@test.pl',
    password: 'test1234'
  };

  constructor(
    private service: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.service.login(this.user)
    .then((r) => {
      this.router.navigate(['/']);
    })
  }

}
