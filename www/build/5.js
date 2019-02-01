webpackJsonp([5],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(824);
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

/***/ 824:
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/michelamifsud/Documents/Assignments/GitHub/App-Assignment/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-card>\n          <ion-item>\n              <ion-input type="number" placeholder="Create New Post"></ion-input>\n            </ion-item>\n  </ion-card>\n\n  <ion-buttons end>\n      <button ion-button round color="lg">Post</button>\n  </ion-buttons> \n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="/assets/imgs/icon.png">\n      </ion-avatar>\n      <h2>Michela Mifsud</h2>\n    </ion-item>\n  \n    <ion-card-content>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor\n          sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          Like\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="lg" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          Comment\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          10 minutes ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  \n  \n  <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="/assets/imgs/icon.png">\n        </ion-avatar>\n        <h2>Andrew Tanti</h2>\n      </ion-item>\n    \n      <ion-card-content>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor\n            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.</p>\n      </ion-card-content>\n    \n      <ion-row>\n        <ion-col>\n          <button ion-button color="lg" clear small icon-start>\n            <ion-icon name=\'thumbs-up\'></ion-icon>\n            Like\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="lg" clear small icon-start>\n            <ion-icon name=\'text\'></ion-icon>\n            Comment\n          </button>\n        </ion-col>\n        <ion-col align-self-center text-center>\n          <ion-note>\n            15 minutes ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    \n    </ion-card>\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/michelamifsud/Documents/Assignments/GitHub/App-Assignment/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map