import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Injectable()
export class UserService {

  private usersUrl='http://localhost:8080';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
                    return this.http.get(this.usersUrl+'/getAll')
                               .toPromise()
                               .then(response => response.json() as User[])
                              //    .then(this.extractData)
                               .catch(this.handleError);


    }
    private extractData(res: Response) {
      console.log(res.type);
        console.log(res.url);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.toString());
        console.log(res.json());
      let body = res.json();
      let  u = body as User[];
      console.log(u[0].firstName);
      return body as User[] || { };
    }

    search(term: string): Observable<User[]> {
      return this.http
                 .get(`${this.usersUrl}/getUserByString?name=${term}`)
                 .map(response => response.json() as User[]);
    }

    private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
       return Promise.reject(error.message || error);
    }

    getUsersSlowly(): Promise<User[]> {
      return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getUsers()), 2000);
    });
    }

    getUser(id: number): Promise<User> {
      return this.getUsers()
                 .then(users => users.find(user => user.id === id));
    }

    update(user: User):Promise<User> {
      const url = `${this.usersUrl}/updateUser/${user.id}`;
      return this.http
        .put(url, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then(() => user)
        .catch(this.handleError);
    }

    create(user: User): Promise<User> {
    return this.http
      .post(this.usersUrl+'/addUser', JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/users/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


}
