webpackJsonp([3],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes__ = __webpack_require__(826);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotesPageModule = /** @class */ (function () {
    function NotesPageModule() {
    }
    NotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notes__["a" /* NotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notes__["a" /* NotesPage */]),
            ],
        })
    ], NotesPageModule);
    return NotesPageModule;
}());

//# sourceMappingURL=notes.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
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


/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesPage');
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Users/michelamifsud/Documents/Assignments/GitHub/App-Assignment/src/pages/notes/notes.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button margin-horizontal ion-button (click)="close()">\n          <ion-icon name=\'arrow-back\'></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Note Title</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <ion-item>\n        <p>Lorem ipsum dolor sit amet, et posuere porttitor suspendisse enim nisl nec, nulla leo nunc duis, enim aliquam a condimentum sociis amet nam, nulla mauris curae ut, accumsan metus tincidunt. Ultrices magna nascetur. Sem consectetuer id nullam, aut molestie at ac sollicitudin. Etiam neque vestibulum, egestas arcu ultrices voluptates interdum, lacus arcu quam nunc nulla, a voluptas lectus integer interdum amet, aliquam faucibus lectus nonummy nibh rutrum lobortis. Nonummy quisque sociis, pede suspendisse ac in platea in, volutpat nibh nulla et massa, nunc ultrices. Cras id turpis scelerisque est pellentesque, nunc nisl leo sociosqu, mi sit, est metus integer. Pulvinar vivamus duis tincidunt magna dolor, mi massa sit in accumsan a non, mollis egestas tristique lorem, sem id sed faucibus in suscipit rhoncus. Ullamcorper eleifend eu, mus morbi sit augue sed, per in id turpis at, in purus in ipsum adipiscing, a purus montes nec. Magnis est ante amet, ac egestas tempus, sed pharetra aliquam et consectetuer, facilisi vitae aliquet ut vestibulum ut, sit sagittis ullamco sapien.</p>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/michelamifsud/Documents/Assignments/GitHub/App-Assignment/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ })

});
//# sourceMappingURL=3.js.map