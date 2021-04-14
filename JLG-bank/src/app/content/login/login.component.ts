import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "admin@email.com";
  senha = "Admin@123*";
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  pageAdm() {
    this.router.navigate(['/admin']);
  }
  pageRgstr() {
    this.router.navigate(['/register']);
  }
}
