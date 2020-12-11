(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/edit/edit.page.ts");







var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.page.html":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Feeding Schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-input type=\"text\" hidden [(ngModel)]=\"dataJadwal.nama\"></ion-input>\n  <form [formGroup]=\"jadwalForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Nama</ion-label>\n      <ion-input type=\"text\" formControlName=\"nama\" [(ngModel)]=\"dataJadwal.nama\" placeholder=\"Nama Jadwal\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jadwal</ion-label>\n      <ion-datetime display-format=\"HH:mm\" picker-format=\"HH:mm\" formControlName=\"jadwal_jam\"></ion-datetime>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Info Description</ion-label>\n      <ion-input type=\"text\" formControlName=\"info_description\"></ion-input>\n    </ion-item> -->\n    <ion-button shape=\"round\" color=\"primary\" expand=\"block\" [disabled]=\"!jadwalForm.valid\" (click)=\"updatejadwal()\">\n      Update\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/edit/edit.page.scss":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/edit/edit.page.ts":
/*!***********************************!*\
  !*** ./src/app/edit/edit.page.ts ***!
  \***********************************/
/*! exports provided: EditPage, snapshotToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToObject", function() { return snapshotToObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/dist/index.cjs.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditPage = /** @class */ (function () {
    function EditPage(router, formBuilder, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('jadwals/');
        this.dataJadwal = {
            nama: '',
            jadwal_jam: ''
        };
        this.jadwalForm = this.formBuilder.group({
            'nama': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'jadwal_jam': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.getjadwal(this.route.snapshot.paramMap.get('nama'));
        this.dataJadwal.nama = this.jadwalForm.value.nama;
    }
    EditPage.prototype.ngOnInit = function () {
    };
    EditPage.prototype.getjadwal = function (key) {
        var _this = this;
        Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('jadwals/' + key).on('value', function (resp) {
            var jadwal = snapshotToObject(resp);
            _this.jadwalForm.controls['nama'].setValue(jadwal.nama);
            _this.jadwalForm.controls['jadwal_jam'].setValue(jadwal.jadwal_jam);
        });
    };
    EditPage.prototype.updatejadwal = function () {
        var newjadwal = Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('jadwals/' + this.dataJadwal.nama + '/').update(this.jadwalForm.value);
        this.router.navigate(['/home']);
    };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditPage);
    return EditPage;
}());

var snapshotToObject = function (snapshot) {
    var item = snapshot.val();
    item.key = snapshot.key;
    return item;
};


/***/ })

}]);
//# sourceMappingURL=edit-edit-module.js.map