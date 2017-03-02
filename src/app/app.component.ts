import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  moduleId: module.id,
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
	  <nav>
		<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/users" routerLinkActive="active">Users</a>
	  </nav>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Users';
}
