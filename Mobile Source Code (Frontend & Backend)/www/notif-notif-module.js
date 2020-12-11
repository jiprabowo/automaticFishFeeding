(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notif-notif-module"],{

/***/ "./src/app/notif/notif.module.ts":
/*!***************************************!*\
  !*** ./src/app/notif/notif.module.ts ***!
  \***************************************/
/*! exports provided: NotifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPageModule", function() { return NotifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notif.page */ "./src/app/notif/notif.page.ts");







var routes = [
    {
        path: '',
        component: _notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]
    }
];
var NotifPageModule = /** @class */ (function () {
    function NotifPageModule() {
    }
    NotifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]]
        })
    ], NotifPageModule);
    return NotifPageModule;
}());



/***/ }),

/***/ "./src/app/notif/notif.page.html":
/*!***************************************!*\
  !*** ./src/app/notif/notif.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notif</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notif/notif.page.scss":
/*!***************************************!*\
  !*** ./src/app/notif/notif.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmL25vdGlmLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notif/notif.page.ts":
/*!*************************************!*\
  !*** ./src/app/notif/notif.page.ts ***!
  \*************************************/
/*! exports provided: NotifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPage", function() { return NotifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifPage = /** @class */ (function () {
    function NotifPage() {
    }
    NotifPage.prototype.ngOnInit = function () {
    };
    NotifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notif',
            template: __webpack_require__(/*! ./notif.page.html */ "./src/app/notif/notif.page.html"),
            styles: [__webpack_require__(/*! ./notif.page.scss */ "./src/app/notif/notif.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifPage);
    return NotifPage;
}());



/***/ })

}]);
//# sourceMappingURL=notif-notif-module.js.map