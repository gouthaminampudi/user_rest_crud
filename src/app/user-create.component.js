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
var user_1 = require('./user');
var user_service_1 = require('./user.service');
var users_component_1 = require('./users.component');
var UserFormComponent = (function () {
    function UserFormComponent(userService, usersComponent) {
        this.userService = userService;
        this.usersComponent = usersComponent;
        this.model = new user_1.User(18, 'Gout', 'Tester');
        this.submitted = false;
    }
    UserFormComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.submitted = true;
        console.log(user.firstName);
        if (!user) {
            return;
        }
        this.userService.create(user)
            .then(function (user) {
            _this.usersComponent.getUsers();
        });
    };
    UserFormComponent.prototype.newUser = function () {
        this.model = new user_1.User(42, '', '');
    };
    UserFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-form',
            templateUrl: './user-create.component.html',
            styleUrls: ['./forms.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, users_component_1.UsersComponent])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-create.component.js.map