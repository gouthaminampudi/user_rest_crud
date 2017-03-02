"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:8080';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl + '/getAll')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        console.log(res.type);
        console.log(res.url);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.toString());
        console.log(res.json());
        var body = res.json();
        var u = body;
        console.log(u[0].firstName);
        return body || {};
    };
    UserService.prototype.search = function (term) {
        return this.http
            .get(this.usersUrl + "/getUserByString?name=" + term)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserService.prototype.getUsersSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getUsers()); }, 2000);
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.getUsers()
            .then(function (users) { return users.find(function (user) { return user.id === id; }); });
    };
    UserService.prototype.update = function (user) {
        var url = this.usersUrl + "/updateUser/" + user.id;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function () { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.create = function (user) {
        return this.http
            .post(this.usersUrl + '/addUser', JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (id) {
        var url = this.usersUrl + "/users/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map