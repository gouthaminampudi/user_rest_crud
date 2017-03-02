import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';



import { AppComponent }        from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { UserService }         from './user.service';
import { UsersComponent }     from './users.component';
import { UserSearchComponent }  from './user-search.component';
import { UserFormComponent }  from './user-create.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
	  AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UsersComponent,
    UserSearchComponent,
    UserFormComponent
  ],
  providers: [UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
