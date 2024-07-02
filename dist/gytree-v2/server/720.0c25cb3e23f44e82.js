"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 59775:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/reschedule-success/reschedule-success.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RescheduleSuccessComponent: () => (/* binding */ RescheduleSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 16055);


let RescheduleSuccessComponent = /*#__PURE__*/(() => {
  var _class;
  class RescheduleSuccessComponent {
    constructor(router) {
      this.router = router;
      this.class = 'flex justify-center items-center lg:pt-[85px] flex-auto';
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
        this.router.navigate(['/appointment']);
      }, 5000);
    }
  }
  _class = RescheduleSuccessComponent;
  _class.ɵfac = function RescheduleSuccessComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-reschedule-success"]],
    hostVars: 2,
    hostBindings: function RescheduleSuccessComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
      }
    },
    decls: 3,
    vars: 0,
    consts: [[1, "flex-col", "items-center", "justify-center", "text-xl", "font-bold", "font-lora", "py-80", "text-center"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-page/svg/confirmation.gif", 1, "mx-auto", "w-[100px]", "h-[100px]", "md:h-[150px]", "md:w-[150px]"]],
    template: function RescheduleSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your appointment has been rescheduled. For any other queries, please write to appointments@gytree.com\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
  return RescheduleSuccessComponent;
})();


/***/ }),

/***/ 50266:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/reschedule-success/reschedule-success.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RescheduleSuccessModule: () => (/* binding */ RescheduleSuccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _reschedule_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reschedule-success.component */ 59775);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);





const routes = [{
  path: '',
  component: _reschedule_success_component__WEBPACK_IMPORTED_MODULE_0__.RescheduleSuccessComponent
}];
let RescheduleSuccessModule = /*#__PURE__*/(() => {
  var _class;
  class RescheduleSuccessModule {}
  _class = RescheduleSuccessModule;
  _class.ɵfac = function RescheduleSuccessModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [/*** Angular Modules***/
    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
  });
  return RescheduleSuccessModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RescheduleSuccessModule, {
    declarations: [_reschedule_success_component__WEBPACK_IMPORTED_MODULE_0__.RescheduleSuccessComponent],
    imports: [/*** Angular Modules***/
    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

};
;