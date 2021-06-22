import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router, 
    
  ) { }

  ngOnInit() {
    LoginComponent.emitirClienteCriado.subscribe(
      cliente => console.log(cliente)
    );
  }

}
