import { Component } from '@angular/core';
import { BG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  logoImage = LOGO_URL;
  backgroundImage = BG_URL;
  showDialogue = false;

  temp: any[] = [
    { id: 'amber', pass: 'aaaa' },
    { id: 'prabha', pass: 'pppp' },
    { id: 'ram', pass: 'rrrr' },
  ];

  constructor(private router: Router) {}

  signIn(val: any) {
    console.log(val);
    let loggedIn = false;

    this.temp.forEach((obj) => {
      if (obj.id === val.id && obj.pass == val.password) {
        loggedIn = true;
        alert('Login Successful');
        this.router.navigate(['/Home']);
      }
    });

    if (!loggedIn) alert('Login Failed');
  }
  openDialogue() {
    this.showDialogue = true;
  }
}
