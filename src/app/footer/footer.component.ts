import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/user';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(   private authenticationService: AuthenticationService,  private router: Router) { }

  ngOnInit(): void {
  }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
