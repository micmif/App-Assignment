webpackJsonp([2],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
            ],
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register_service__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(alertCtrl, formBuilder, loadCtrl, navCtrl, navParams, viewCtrl, registerService) {
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadCtrl = loadCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.registerService = registerService;
        // The submit attempt for the user will start off as false,
        // and we'll switch it on button press.
        this.submitAttempt = false;
        // this command will set up the form validation.
        this.registerGroup = this.formBuilder.group({
            // the email is required
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // the password is required
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // name is required
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // surname is required
            surname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegistrationPage.prototype.registerUser = function () {
        var _this = this;
        // first,  make a submit attempt.
        this.submitAttempt = true;
        // if the form doesn't validate, stop the function
        if (!this.registerGroup.valid) {
            return;
        }
        // Create and show a leading interface
        var loader = this.loadCtrl.create({
            content: 'Registering User...'
        });
        loader.present();
        this.registerService.registerUser(this.registerGroup.value).subscribe(
        // We are successful
        function (data) {
            loader.dismiss();
            _this.navCtrl.setRoot('login', {}, { animate: true });
        }, 
        // We have an error, handle it.
        function (error) {
            loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Cannot Register',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    RegistrationPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/michelamifsud/Documents/GitHub/App-Assignment/src/pages/registration/registration.html"*/'<ion-header>\n\n    <ion-navbar color="header">\n      <ion-buttons left>\n        <button margin-horizontal ion-button (click)="cancel()">\n          <ion-icon name=\'arrow-back\'></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Sign Up</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <form [formGroup]="registerGroup">\n        <ion-list>\n          <ion-item>\n            <ion-label floating> Email </ion-label>\n            <ion-input type="email" formControlName="email"></ion-input>\n          </ion-item>\n\n          <!-- if email is  left out, this error will pop up-->\n          <ion-item class="error"\n            *ngIf="!registerGroup.get(\'email\').valid &&\n            (registerGroup.get(\'email\').dirty || submitAttempt)">\n            <small>Please enter a valid email.</small>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating> Password </ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n\n          <!-- if password is left out, this error will pop up-->\n          <ion-item class="error"\n          *ngIf="!registerGroup.get(\'password\').valid &&\n            (registerGroup.get(\'password\').dirty || submitAttempt)">\n            <small>Please enter a valid password.</small>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating> First Name </ion-label>\n            <ion-input type="name" formControlName="name"></ion-input>\n           </ion-item>\n            <!-- if name is entered incorrectly or left out, this error will pop up-->\n          <ion-item class="error"\n            *ngIf="!registerGroup.get(\'name\').valid &&\n            (registerGroup.get(\'name\').dirty || submitAttempt)">\n            <small>Please enter a valid Name.</small>\n          </ion-item>\n\n            <ion-item>\n              <ion-label floating> Surname </ion-label>\n              <ion-input type="surname" formControlName="surname"></ion-input>\n            </ion-item>\n\n            <!-- if surname is entered incorrectly or left out, this error will pop up-->\n          <ion-item class="error"\n            *ngIf="!registerGroup.get(\'surname\').valid &&\n            (registerGroup.get(\'surname\').dirty || submitAttempt)">\n            <small>Please enter a valid Surname.</small>\n          </ion-item>\n        </ion-list>\n\n      </form>\n  \n      <div padding>\n          <button ion-button block color="lg" (click)="registerUser()"> Register </button>\n        </div>\n  </ion-content>'/*ion-inline-end:"/Users/michelamifsud/Documents/GitHub/App-Assignment/src/pages/registration/registration.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_register_register_service__["a" /* RegisterServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register_service__["a" /* RegisterServiceProvider */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=2.js.map