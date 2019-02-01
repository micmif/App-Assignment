webpackJsonp([4],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, formBuilder, loadCtrl, navCtrl, modalCtrl, navParams, userService) {
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadCtrl = loadCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.userService = userService;
        // The submit attempt for the user will start off as false
        // and we'll switch it on button press.
        this.submitAttempt = false;
        // this command will set up the form validation.
        this.loginGroup = this.formBuilder.group({
            // the email field is required.
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // the password field is required.
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    // processes and sends the login request.
    LoginPage.prototype.login = function () {
        var _this = this;
        // first, make a submit attempt
        this.submitAttempt = true;
        // if the form doesn't validate, stop the function
        if (!this.loginGroup.valid) {
            return;
        }
        // Create and show a loading interface.
        var loader = this.loadCtrl.create({
            content: 'Logging in...'
        });
        loader.present();
        // Observable functions will only start their code
        // if we write subscribe().
        this.userService.login(this.loginGroup.value).subscribe(
        // we are successful, do the rest.
        function (data) {
            loader.dismiss();
            _this.userService.storeUser(data.userdata);
            _this.navCtrl.setRoot('home', {}, { animate: true });
        }, 
        // we have an error, handle it.
        function (error) {
            loader.dismiss();
            // if the website didn't log us in, show an alert.
            var alert = _this.alertCtrl.create({
                title: 'Login Error',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.registration = function () {
        var modal = this.modalCtrl.create('registration');
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/michelamifsud/Documents/Assignments/GitHub/App-Assignment/src/pages/login/login.html"*/'<ion-content padding>\n  <h1>Login to Bud</h1>\n\n  <form [formGroup]="loginGroup">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item class="error"\n        *ngIf="!loginGroup.get(\'email\').valid &&\n          (loginGroup.get(\'email\').dirty || submitAttempt)">\n        <small>Please enter a valid email.</small>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item class="error"\n        *ngIf="!loginGroup.get(\'password\').valid &&\n          (loginGroup.get(\'password\').dirty || submitAttempt)">\n        <small>Please enter your password.</small>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <div padding>\n    <button ion-button block color="lg" (click)="login()">Login</button>\n  </div>\n\n  <div padding>\n      <button ion-button block color="lg" (click)="registration()"> Register </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/michelamifsud/Documents/Assignments/GitHub/App-Assignment/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map