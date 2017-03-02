import { Component } from '@angular/core';
import { User }    from './user';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';

@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: './user-create.component.html',
  styleUrls: [ './forms.css' ]
})

export class UserFormComponent {
  model = new User(18, 'Gout', 'Tester');
  submitted = false;
  constructor(
    private userService: UserService,
    private usersComponent: UsersComponent) { }

  onSubmit(user:User) {
     this.submitted = true;
     console.log(user.firstName);
     if (!user) { return; }
     this.userService.create(user)
       .then(user => {
         this.usersComponent.getUsers();
       });
    }
  newUser() {
    this.model = new User(42, '', '');
  }
}
