webpackJsonp([4],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.category = 'gear';
        this.cards = new Array(10);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/michelamifsud/Documents/GitHub/App-Assignment/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-card>\n          <ion-item>\n              <ion-input type="number" placeholder="Create New Post"></ion-input>\n            </ion-item>\n  </ion-card>\n\n  <ion-buttons end>\n      <button ion-button round color="lg">Post</button>\n  </ion-buttons> \n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/marty-avatar.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n  \n    <img src="assets/img/advance-card-bttf.png">\n  \n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          12 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          4 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  \n  \n  <ion-card>\n  \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/sarah-avatar.png.jpeg">\n      </ion-avatar>\n      <h2>Sarah Connor</h2>\n      <p>May 12, 1984</p>\n    </ion-item>\n  \n    <img src="assets/img/advance-card-tmntr.jpg">\n  \n    <ion-card-content>\n      <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          30 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          64 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          30yr ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  \n  \n  <ion-card>\n  \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/ian-avatar.png">\n      </ion-avatar>\n      <h2>Dr. Ian Malcolm</h2>\n      <p>June 28, 1990</p>\n    </ion-item>\n  \n    <img src="assets/img/advance-card-jp.jpg">\n  \n    <ion-card-content>\n      <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          46 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          66 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/michelamifsud/Documents/GitHub/App-Assignment/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map