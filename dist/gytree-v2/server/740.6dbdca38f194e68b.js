"use strict";
exports.id = 740;
exports.ids = [740];
exports.modules = {

/***/ 31411:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/employers/components/benefits/benefits.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BenefitsComponent: () => (/* binding */ BenefitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function BenefitsComponent_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const employerFirstData_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employerFirstData_r4 == null ? null : employerFirstData_r4.title, " ");
  }
}
function BenefitsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BenefitsComponent_div_8_ng_container_1_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.benefits == null ? null : ctx_r0.benefits.first_provides[0]);
  }
}
function BenefitsComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12)(2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const employerSecondData_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employerSecondData_r5 == null ? null : employerSecondData_r5.title, " ");
  }
}
function BenefitsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const employerThirdData_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employerThirdData_r6 == null ? null : employerThirdData_r6.title, " ");
  }
}
let BenefitsComponent = /*#__PURE__*/(() => {
  var _class;
  class BenefitsComponent {}
  _class = BenefitsComponent;
  _class.ɵfac = function BenefitsComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-benefits"]],
    inputs: {
      employerData: "employerData",
      benefits: "benefits"
    },
    decls: 13,
    vars: 5,
    consts: [[1, "container"], [1, "py-1", "wrapper"], [1, "why-gytree", "text-center", "mt-5", "md:pt-6", "pt-0", "font-bold", "lg:text-[30px]", "text-theme-brown", "font-lora", "text-[25px]"], [1, "text-center", "md:pt-4", "pt-2", "font-normal", "lg:text-[22px]", "md:text-[20px]", "text-[18px]", "font-roboto"], [1, "mx-auto", "pb-10", "max-w-[810px]"], [1, "grid", "flex-wrap", "gap-5", "pt-6", "mx-auto", "md:gap-12", "md:grid-cols-3", "md:pt-0"], ["class", "flex gap-5 leading-tight md:gap-12 md:flex-col md:pt-20 md:pb-2", 4, "ngIf"], [1, "flex", "gap-5", "leading-tight", "md:gap-12", "md:flex-col", "md:py-10"], [4, "ngFor", "ngForOf"], [1, "flex", "gap-5", "leading-tight", "md:gap-12", "md:flex-col", "md:pt-20", "md:pb-10"], [1, "flex", "gap-5", "leading-tight", "md:gap-12", "md:flex-col", "md:pt-20", "md:pb-2"], [1, "w-1/2", "md:w-full", "px-2", "sm:px-10", "py-3", "sm:py-7", "text-center", "bg-white", "shadow-[0px_0px_60px_0px_rgba(0,0,0,0.09)]", "font-roboto", "leading-tight", "md:text-[17px]", "text-[16px]", "rounded-2xl", "sm:rounded-[32px]"], [1, "w-1/2", "md:w-full", "px-6", "py-1", "sm:px-10", "sm:py-7", "text-center", "bg-white", "shadow-[0px_0px_60px_0px_rgba(0,0,0,0.09)]", "font-roboto", "text-[18px]", "sm:text-[18px]", "rounded-2xl", "sm:rounded-[32px]"], [1, "sm:text-[17px]", "text-[16px]", "pt-2"], [1, "w-1/2", "md:w-full", "px-4", "py-4", "sm:py-7", "sm:px-10", "leading-tight", "text-center", "bg-white", "shadow-[0px_0px_60px_0px_rgba(0,0,0,0.09)]", "font-roboto", "text-[16px]", "sm:text-[19px]", "rounded-2xl", "sm:rounded-[32px]"]],
    template: function BenefitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BenefitsComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BenefitsComponent_ng_container_10_Template, 4, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BenefitsComponent_ng_container_12_Template, 3, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employerData == null ? null : ctx.employerData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employerData == null ? null : ctx.employerData.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benefits == null ? null : ctx.benefits.first_provides[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benefits == null ? null : ctx.benefits.first_provides[2]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return BenefitsComponent;
})();


/***/ }),

/***/ 68787:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/employers/components/condition-we-treat/condition-we-treat.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConditionWeTreatComponent: () => (/* binding */ ConditionWeTreatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);



const _c0 = function (a0) {
  return {
    "border-white bg-white text-theme-blue": a0
  };
};
function ConditionWeTreatComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConditionWeTreatComponent_ng_container_15_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.tabClick($event, index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const index_r3 = ctx_r8.index;
    const item_r2 = ctx_r8.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r4.selectedItem == index_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2 == null ? null : item_r2.srv_employer_page == null ? null : item_r2.srv_employer_page.title, " ");
  }
}
function ConditionWeTreatComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConditionWeTreatComponent_ng_container_15_div_1_Template, 2, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2 == null ? null : item_r2.srv_employer_page == null ? null : item_r2.srv_employer_page.visible);
  }
}
function ConditionWeTreatComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19)(3, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.employeeWeTreatData == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem] == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem].srv_employer_page == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem].srv_employer_page.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employeeWeTreatData == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem] == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem].srv_employer_page == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem].srv_employer_page.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employeeWeTreatData == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem] == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem].srv_employer_page == null ? null : ctx_r1.employeeWeTreatData[ctx_r1.selectedItem].srv_employer_page.desc, " ");
  }
}
let ConditionWeTreatComponent = /*#__PURE__*/(() => {
  var _class;
  class ConditionWeTreatComponent {
    constructor() {
      this.selectedItem = 0;
      this.pillsCategories = [{
        name: 'PCOS & Hormones',
        active: true
      }, {
        name: 'Emotional Health',
        active: false
      }, {
        name: 'Gut, Weight & Hormones',
        active: false
      }, {
        name: 'Healthy Living',
        active: false
      }, {
        name: 'Skin & Hair',
        active: false
      }, {
        name: 'Therapist',
        active: false
      }];
    }
    tabClick(event, emploeeData) {
      this.selectedItem = emploeeData;
    }
  }
  _class = ConditionWeTreatComponent;
  _class.ɵfac = function ConditionWeTreatComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-condition-we-treat"]],
    inputs: {
      employeeWeTreatData: "employeeWeTreatData",
      bannerData: "bannerData"
    },
    decls: 17,
    vars: 4,
    consts: [[1, "container"], [1, "pl-80"], [1, "assesment", "gap-5", "md:rounded-[40px]", "pb-0", "rounded-[18px]", "md:pt-2.5", "md:pb-5", "md:px-10", "bg-theme-purple-lighter", "text-white", "font-roboto"], [1, "relative", "mx-auto", "lg:w-fit"], [1, "absolute", "-top-4", "md:-top-8", "sm:-top-10", "md:-left-[7%]", "lg:left-[10%]", "xl:left-[23%]", "sm:h-[120px]", "sm:w-[98px]", "h-[65px]", "w-[45px]"], ["width", "100%", "height", "100%", "viewBox", "0 0 98 135", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M70.9697 78.1891C71.4752 78.362 71.7448 78.912 71.5719 79.4175C69.9031 84.2954 65.2302 91.2697 59.7512 97.1848C57.0007 100.154 54.0163 102.891 51.0597 104.986C48.1188 107.07 45.0448 108.27 42.2929 108.672C41.2668 108.823 40.1379 108.776 39.2788 108.672C37.9566 111.002 36.2069 113.362 34.0618 115.808C26.4563 124.479 13.707 133.019 0.496657 134.016C-0.0360971 134.056 0.000492807 133.953 0.000393742 133.795C-9.86098e-05 133.636 0.298454 133.423 0.496652 133.408C13.0181 132.463 25.7698 123.58 33.1867 115.123C35.1319 112.906 36.585 110.398 37.7918 108.356C37.1808 108.115 36.4493 107.865 35.9597 107.488C34.4311 106.313 33.6882 104.712 33.412 103.039C33.1382 101.38 33.4107 99.7953 34.1835 98.4997C34.9818 97.1615 36.2494 96.2553 38.0588 96.5801C39.8172 96.8957 40.9109 97.7034 41.5214 99.1456C42.1024 100.518 41.9926 102.056 41.5214 103.828C41.2548 104.831 40.5076 106.118 39.9785 107.237C40.4615 107.247 41.5305 107.145 42.0973 107.062C44.4112 106.724 47.1055 105.416 49.941 103.407C52.7608 101.409 55.6456 98.7701 58.3318 95.8701C63.7264 90.0461 68.1973 83.3043 69.7413 78.7912C69.9142 78.2857 70.4642 78.0161 70.9697 78.1891ZM38.5333 106.837C39.1376 105.632 39.5825 104.502 39.8546 103.478C40.2744 101.899 40.2484 100.703 39.9065 99.8955C39.5942 99.1577 38.9555 98.5952 37.7229 98.374C36.8595 98.219 36.1949 98.5865 35.7234 99.377C35.2264 100.21 35.0024 101.464 35.2162 102.759C35.4277 104.041 36.0514 105.264 37.1223 106.087C37.5149 106.389 37.982 106.648 38.5333 106.837Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M78.2169 58.9024C78.2169 58.8833 78.2169 58.8644 78.2169 58.8456L78.2172 29.7387C78.2087 29.6124 78.2253 29.4857 78.2661 29.3659C78.307 29.2461 78.3712 29.1356 78.455 29.0408C78.5389 28.9461 78.6408 28.8689 78.7547 28.8138C78.8687 28.7587 78.9924 28.7268 79.1188 28.7199H89.9376C90.0619 28.7137 90.1862 28.7322 90.3033 28.7743C90.4205 28.8164 90.5281 28.8812 90.62 28.9651C90.7126 29.0485 90.7876 29.1495 90.8407 29.2622C90.8938 29.3749 90.9239 29.497 90.9293 29.6215L90.9295 49.6439C90.2112 50.2327 89.4814 50.8169 88.74 51.3969L88.7372 51.1293L88.9975 30.6222H80.0835V57.6607C79.4677 58.0757 78.8455 58.4895 78.2169 58.9024ZM70.7434 63.5986L70.897 57.9863L70.6336 40.2164C70.6283 40.0919 70.5981 39.9698 70.5451 39.8571C70.492 39.7444 70.4169 39.6434 70.3244 39.56C70.2324 39.4761 70.1248 39.4113 70.0077 39.3692C69.8905 39.3271 69.7662 39.3086 69.6419 39.3148H58.8231C58.6967 39.3217 58.573 39.3536 58.4591 39.4087C58.3451 39.4638 58.2432 39.541 58.1594 39.6357C58.0755 39.7305 58.0113 39.841 57.9705 39.9608C57.9296 40.0806 57.913 40.2073 57.9216 40.3336V70.9643C58.5481 70.6186 59.1701 70.2737 59.7878 69.9296V56.0553V41.2171H68.6859L68.2941 54.108L68.485 64.9478C69.2456 64.498 69.9983 64.0483 70.7434 63.5986ZM50.7606 74.8582L50.88 65.7027L50.6166 58.2212C50.6112 58.0967 50.5811 57.9746 50.528 57.8619C50.4749 57.7492 50.3999 57.6482 50.3073 57.5648C50.2154 57.4809 50.1078 57.4161 49.9906 57.374C49.8735 57.3319 49.7492 57.3134 49.6249 57.3196H38.8061C38.6797 57.3265 38.556 57.3584 38.442 57.4135C38.3281 57.4686 38.2262 57.5458 38.1423 57.6405C38.0585 57.7353 37.9943 57.8458 37.9534 57.9656C37.9126 58.0854 37.896 58.2121 37.9045 58.3384L37.9507 81.6514C38.5937 81.3128 39.2332 80.9761 39.8691 80.6409L39.7708 63.7716V59.2219H48.5884L48.2771 61.8243L48.8339 75.8902C49.4803 75.5448 50.1225 75.2009 50.7606 74.8582Z", "fill", "white"], ["d", "M34.2235 84.567C46.6785 78.5239 57.9471 72.7713 69.6185 65.2761C78.8052 59.1403 89.0499 53.3757 97.5767 46.348C98.4275 45.669 97.5774 44.2169 96.6601 44.8959C88.1521 51.6196 78.2862 57.5669 69.1672 63.4379C57.4559 71.0263 46.1474 77.0053 33.772 83.5013C33.1206 83.8474 33.519 84.8998 34.1969 84.5803L34.2235 84.567Z", "fill", "white"], ["d", "M84.9722 7.58697C84.6152 7.30544 84.3123 7.04016 83.984 6.8112C82.1015 5.49794 81.1884 3.60951 80.764 1.42641C80.7429 1.31884 80.7187 1.21128 80.7076 1.10268C80.6274 0.324477 81.1483 -0.14521 81.9109 0.0405206C82.7238 0.27731 83.4802 0.676405 84.1345 1.2137C85.6718 2.35506 86.6735 3.92391 87.6377 5.52596C87.7415 5.70097 87.8404 5.87978 87.9414 6.05721L88.0269 6.04579C88.0635 5.80784 88.1078 5.57092 88.1361 5.33193C88.329 3.98959 88.8882 2.72641 89.7524 1.68131C89.8629 1.54538 89.9908 1.42456 90.1328 1.32195C90.7077 0.882704 91.3109 0.98854 91.5927 1.65329C91.7928 2.183 91.9388 2.73156 92.0285 3.29062C92.2907 4.61252 91.8753 5.8023 91.25 6.93951C90.9487 7.48702 90.6295 8.02449 90.3217 8.5682C90.2314 8.72729 90.1515 8.89193 90.0488 9.08907C90.2816 9.15063 90.478 9.19871 90.6713 9.25439C92.4353 9.76074 93.7551 10.882 94.8584 12.2952C95.0536 12.5456 95.2234 12.8149 95.3651 13.099C95.5055 13.4121 95.5199 13.7672 95.4052 14.0905C95.2904 14.4138 95.0554 14.6805 94.7491 14.8349C94.4745 14.988 94.1676 15.074 93.8535 15.086C93.5393 15.0981 93.2268 15.0357 92.9413 14.9041C92.1838 14.5582 91.443 14.1778 90.7063 13.7904C90.2705 13.5611 89.8582 13.2872 89.4325 13.0378C89.3577 13.001 89.2801 12.9702 89.2004 12.9458C89.0274 13.622 88.8849 14.284 88.6885 14.9297C88.1445 16.6975 87.1993 18.3156 85.9268 19.6577C85.4438 20.1168 84.8082 20.3812 84.1421 20.3999C83.5541 20.4632 82.962 20.4781 82.3782 20.5559C81.4533 20.6787 80.9366 20.125 80.496 19.4554C80.0024 18.7062 80.0771 17.8789 80.1895 17.0385C80.4126 15.3665 81.2887 14.0547 82.4442 12.905C83.0108 12.3416 83.6399 11.8415 84.2427 11.314C84.3042 11.2705 84.3702 11.2336 84.4395 11.204L84.3828 11.0833C84.2164 11.0833 84.0501 11.0754 83.8844 11.0833C82.8468 11.1418 81.8092 11.2563 80.7716 11.2514C79.597 11.2359 78.4339 11.0174 77.3337 10.6057C76.5223 10.3107 76.2767 9.73515 76.6074 8.92686C76.7964 8.44241 77.1249 8.02492 77.5512 7.72719C77.9775 7.42945 78.4826 7.26487 79.0025 7.25425C79.8748 7.17954 80.7512 7.13562 81.6263 7.1249C82.6345 7.14873 83.6351 7.30584 84.6021 7.59216C84.6761 7.61084 84.7508 7.62675 84.8259 7.63747C84.8445 7.64058 84.866 7.62467 84.9722 7.58697Z", "fill", "#FF2EAE"], [1, "font-bold", "text-center", "px-8", "md:px-4", "md:text-[30px]", "text-[20px]", "text-black", "font-lora", "pt-5"], [1, "md:text-[23px]", "text-[16px]", "mx-4", "text-center", "text-black", "font-roboto", "py-6"], [1, "flex", "gap-5", "p-5", "mt-0", "overflow-auto", "sm:mt-4", "whitespace-nowrap", "pcos", "styled-scrollbar", "hover-scroll-visible"], [4, "ngFor", "ngForOf"], ["class", "flex flex-col-reverse items-start justify-center w-3/4 gap-5 pt-0 mx-auto sm:pt-4 lg:gap-10 lg:pt-10 lg:pb-10 lg:flex-row image", 4, "ngIf"], ["class", "leading-none transition cursor-pointer py-2 px-4 text-black border-[1.5px] border-black rounded-full font-roboto text-[14px] sm:text-[19px] hover:border-white hover:bg-white hover:text-theme-blue", 3, "ngClass", "click", 4, "ngIf"], [1, "leading-none", "transition", "cursor-pointer", "py-2", "px-4", "text-black", "border-[1.5px]", "border-black", "rounded-full", "font-roboto", "text-[14px]", "sm:text-[19px]", "hover:border-white", "hover:bg-white", "hover:text-theme-blue", 3, "ngClass", "click"], [1, "flex", "flex-col-reverse", "items-start", "justify-center", "w-3/4", "gap-5", "pt-0", "mx-auto", "sm:pt-4", "lg:gap-10", "lg:pt-10", "lg:pb-10", "lg:flex-row", "image"], ["alt", "", 1, "mx-auto", "lg:mx-0", "w-[236px]", "h-[250px]", 3, "src"], [1, "text-center", "para", "lg:text-left"], [1, "font-bold", "text-black", "text-[25px]", "lg:text-[24px]", "pt-5", "lg:pt-14", "font-lora"], [1, "text-black", "text", "lg:text-[21px]", "sm:pt-2", "font-roboto", "pt-2"]],
    template: function ConditionWeTreatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ConditionWeTreatComponent_ng_container_15_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ConditionWeTreatComponent_div_16_Template, 7, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.bannerData == null ? null : ctx.bannerData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bannerData == null ? null : ctx.bannerData.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.employeeWeTreatData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.employeeWeTreatData == null ? null : ctx.employeeWeTreatData[ctx.selectedItem] == null ? null : ctx.employeeWeTreatData[ctx.selectedItem].srv_employer_page == null ? null : ctx.employeeWeTreatData[ctx.selectedItem].srv_employer_page.visible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective],
    encapsulation: 2
  });
  return ConditionWeTreatComponent;
})();


/***/ }),

/***/ 16090:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/employers/components/contact-form/contact-form.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactFormComponent: () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/form-validatin.constant */ 49143);
/* harmony import */ var src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/intl-phn-input/public_api */ 65856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_modules_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/employer-list/employer-list.service */ 98034);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 27867);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _shared_intl_phn_input_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/intl-phn-input/lib/ngx-intl-tel-input.component */ 92392);
/* harmony import */ var _shared_intl_phn_input_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/intl-phn-input/lib/directives/native-element-injector.directive */ 74953);
/* harmony import */ var _shared_form_validation_template_pages_form_validation_template_form_validation_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/form-validation-template/pages/form-validation-template/form-validation-template.component */ 2359);












function ContactFormComponent_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Mobile Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mobile Number is Invaild ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ContactFormComponent_div_14_span_1_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ContactFormComponent_div_14_span_2_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.value == null ? null : ctx_r0.healthInsuranceForm.value.phone) && (ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.controls == null ? null : ctx_r0.healthInsuranceForm.controls.phone == null ? null : ctx_r0.healthInsuranceForm.controls.phone.errors == null ? null : ctx_r0.healthInsuranceForm.controls.phone.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.value == null ? null : ctx_r0.healthInsuranceForm.value.phone) && (ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.controls["phone"] == null ? null : ctx_r0.healthInsuranceForm.controls["phone"].invalid));
  }
}
function ContactFormComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", option_r4 === ctx_r1.selectedVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
let ContactFormComponent = /*#__PURE__*/(() => {
  var _class;
  class ContactFormComponent {
    constructor(employerService, cdr, toastr, eventTrackingService) {
      this.employerService = employerService;
      this.cdr = cdr;
      this.toastr = toastr;
      this.eventTrackingService = eventTrackingService;
      this.healthInsuranceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__.FORM_VALIDATION.ONLY_SPACE_RESTRICT)]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__.FORM_VALIDATION.EMAIL_PATTERN)])),
        organistaionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__.FORM_VALIDATION.ONLY_SPACE_RESTRICT)]),
        employeeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        SearchCountryField: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField),
        CountryISO: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_1__.CountryISO)
      });
      this.subscriptions = [];
      this.selectedVal = '0 - 20';
      this.message = '';
      this.options = ['0 - 20', '20 - 30', '30 - 40', '40 - 50'];
    }
    onCountryChange(event) {}
    submitHealthForm() {
      const formVal = this.healthInsuranceForm.getRawValue();
      if (this.healthInsuranceForm.invalid) {
        this.healthInsuranceForm.markAllAsTouched();
        return;
      }
      const payload = {
        "cmp_inq_name": formVal?.name.trim(),
        "cmp_inq_email": formVal?.email,
        "cmp_inq_mo_no": formVal?.phone?.number.replaceAll(/[-\s]/g, ''),
        "cmp_inq_org_name": formVal?.organistaionName.trim(),
        "cmp_inq_org_no_emp": formVal?.employeeNumber,
        "cmp_inq_page": "employers"
      };
      if (this.healthInsuranceForm.valid) {
        this.subscriptions.push(this.employerService.postEmployerList(payload).subscribe(data => {
          if (data?.success) {
            const value = {
              MobileNumber: formVal?.phone.number.replaceAll(/[-\s]/g, ''),
              name: formVal?.name.trim(),
              email: formVal?.email || '',
              organisationName: formVal?.organistaionName.trim(),
              employeeStrength: formVal?.employeeNumber
            };
            this.eventTrackingService.trackWebEnagegeEvent('employee request', value);
            this.eventTrackingService.trackEvent('employee request', value);
            this.toastr.success('Your request has been submitted. Our team will reach out to you shortly.', undefined, {
              positionClass: 'toast-bottom-center',
              closeButton: true
            });
            this.healthInsuranceForm.reset();
            this.resetForm();
            this.message = data?.data?.data;
          }
          this.cdr.detectChanges();
        }, err => {
          this.toastr.error(err?.error?.message, undefined, {
            positionClass: 'toast-bottom-center',
            closeButton: true,
            //disableTimeOut: true,
            tapToDismiss: false
          });
        }));
      }
    }
    resetForm() {
      this.healthInsuranceForm.reset({
        employeeNumber: '0 - 20'
      });
    }
    /**
     * Clear subscriptions when component complete the process
     */
    ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }
  _class = ContactFormComponent;
  _class.ɵfac = function ContactFormComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_2__.EmployerListService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_3__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-contact-form"]],
    decls: 30,
    vars: 24,
    consts: [[1, "container", "pb-14", "md:pb-20"], [1, "h-full", "p-12", "xl:w-[55%]", "mx-auto", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "px-5", "sm:px-10", "md:px-20", "py-5", "sm:pt-8", "sm:pb-6", "bg-white", "rounded-2xl", "sm:rounded-[40px]"], [1, "text-center", "font-bold", "lg:text-2xl", "text-theme-brown", "font-lora", "text-lg", "sm:text-[25px]", "mb-3", "sm:mb-5"], [1, "font-roboto", 3, "formGroup"], [1, "grid", "gap-3", "mb-8", "md:gap-8", "sm:grid-cols-2"], [1, ""], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "w-full", "py-1.5", "text-black", "border", "rounded-full", "outline-none", "px-5", "sm:py-2", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], [3, "form", "field", "label"], ["type", "email", "placeholder", "Email ID", "formControlName", "email", 1, "w-full", "py-1.5", "text-black", "border", "rounded-full", "outline-none", "px-5", "sm:py-2", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], ["numberonly", "", "cssClass", "w-full py-1.5 text-black border rounded-full outline-none px-5 sm:py-2 placeholder:text-theme-lightest-grey border-theme-lightest-pink", "name", "phone", "formControlName", "phone", 1, "flex-grow", "flex-shrink", "block", 3, "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "maxLength", "selectedCountryISO", "phoneValidation", "separateDialCode", "countryChange"], ["class", "text-xs text-theme-error-red", 4, "ngIf"], ["type", "text", "placeholder", "Name of Organisation", "formControlName", "organistaionName", 1, "w-full", "py-1.5", "text-black", "border", "rounded-full", "outline-none", "px-5", "sm:py-2", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], [1, "flex", "items-center", "text-[26px]", "md:text-base", "justify-between", "gap-0", "md:gap-1", "text-xs", "sm:text-sm", "xl:text-base", "text-theme-lightest-grey"], ["formControlName", "employeeNumber", 1, "py-2", "text-black", "border", "rounded-full", "outline-none", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], [3, "selected", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "px-5", "py-1.5", "sm:py-2", "text-lg", "font-light", "text-white", "rounded-full", "sm:font-normal", "sm:text-2xl", "bg-theme-light-maroon", "sm:px-7", 3, "click"], [1, "pt-3", "text-sm", "sm:text-base"], ["href", "https://mail.google.com/mail/?view=cm&fs=1&to=betterbusiness@gytree.com", "target", "_blank"], [1, "text-xs", "text-theme-error-red"], [4, "ngIf"], [3, "selected"]],
    template: function ContactFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Fill the Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 6)(8, "app-form-validation-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 8)(11, "app-form-validation-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 5)(13, "ngx-intl-tel-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("countryChange", function ContactFormComponent_Template_ngx_intl_tel_input_countryChange_13_listener($event) {
          return ctx.onCountryChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ContactFormComponent_div_14_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 11)(17, "app-form-validation-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " No.of Women Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ContactFormComponent_option_21_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 15)(23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContactFormComponent_Template_button_click_23_listener() {
          return ctx.submitHealthForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Talk to us");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Have any queries? Write to us at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "b")(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " betterbusiness@gytree.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.healthInsuranceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.healthInsuranceForm)("field", "name")("label", "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.healthInsuranceForm)("field", "email")("label", "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("enableAutoCountrySelect", true)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](21, _c0, ctx.healthInsuranceForm == null ? null : ctx.healthInsuranceForm.value == null ? null : ctx.healthInsuranceForm.value.SearchCountryField == null ? null : ctx.healthInsuranceForm.value.SearchCountryField.Iso2, ctx.healthInsuranceForm == null ? null : ctx.healthInsuranceForm.value == null ? null : ctx.healthInsuranceForm.value.SearchCountryField == null ? null : ctx.healthInsuranceForm.value.SearchCountryField.Name))("selectFirstCountry", false)("maxLength", 15)("selectedCountryISO", ctx.healthInsuranceForm == null ? null : ctx.healthInsuranceForm.value == null ? null : ctx.healthInsuranceForm.value.CountryISO == null ? null : ctx.healthInsuranceForm.value.CountryISO.India)("phoneValidation", true)("separateDialCode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.healthInsuranceForm.controls["phone"] == null ? null : ctx.healthInsuranceForm.controls["phone"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.healthInsuranceForm)("field", "organistaionName")("label", "Name of Organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_intl_phn_input_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_4__.NgxIntlTelInputComponent, _shared_intl_phn_input_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_5__.NativeElementInjectorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_form_validation_template_pages_form_validation_template_form_validation_template_component__WEBPACK_IMPORTED_MODULE_6__.FormValidationTemplateComponent],
    encapsulation: 2
  });
  return ContactFormComponent;
})();


/***/ }),

/***/ 12056:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/employers/components/employers-about/employers-about.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployersAboutComponent: () => (/* binding */ EmployersAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);


let EmployersAboutComponent = /*#__PURE__*/(() => {
  var _class;
  class EmployersAboutComponent {}
  _class = EmployersAboutComponent;
  _class.ɵfac = function EmployersAboutComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-employers-about"]],
    inputs: {
      employeeAboutData: "employeeAboutData"
    },
    decls: 22,
    vars: 7,
    consts: [[1, "container"], [1, "why-gytree", "text-center", "font-bold", "lg:text-[30px]", "text-theme-brown", "font-lora", "text-[25px]"], [1, "text-center", "md:pt-4", "pt-2", "font-normal", "md:text-xl", "text-base", "sm:w-[80%]", "lg:w-[60%]", "mx-auto", "font-roboto"], [1, "lg:h-[300px]", "max-w-full", "w-[450px]", "mx-auto", "relative"], [1, "rounded-full", "mx-auto", "h-full", "max-w-full", "mt-3", "md:mt-7", "overflow-hidden"], ["alt", "", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "bg-white", "mt-4", "lg:mt-0", "lg:absolute", "-left-1/2", "xl:-left-[60%]", "top-4", "rounded-lg", "max-w-full", "lg:max-w-[300px]", "xl:max-w-[450px]", "flex", "p-3", "gap-3", "items-center"], ["src", "https://image.gytree.com/assets/media/avatars/female-avatar.png", "alt", "", 1, "h-10"], [1, ""], [1, "text-sm", "text-theme-brown", "font-semibold", "mb-0.5"], [1, "text-xs"], [1, "bg-white", "mt-4", "lg:mt-0", "lg:absolute", "-right-1/2", "xl:-right-[40%]", "bottom-4", "rounded-lg", "max-w-full", "lg:max-w-[300px]", "xl:max-w-[450px]", "flex", "p-3", "gap-3", "items-center"]],
    template: function EmployersAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.left_section == null ? null : ctx.employeeAboutData.left_section.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.left_section == null ? null : ctx.employeeAboutData.left_section.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.right_section == null ? null : ctx.employeeAboutData.right_section.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.employeeAboutData == null ? null : ctx.employeeAboutData.right_section == null ? null : ctx.employeeAboutData.right_section.text, " ");
      }
    },
    dependencies: [_shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective],
    encapsulation: 2
  });
  return EmployersAboutComponent;
})();


/***/ }),

/***/ 20461:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/employers/components/employers-hero-section/employers-hero-section.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployersHeroSectionComponent: () => (/* binding */ EmployersHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/form-validatin.constant */ 49143);
/* harmony import */ var src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/intl-phn-input/public_api */ 65856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_modules_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/employer-list/employer-list.service */ 98034);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 27867);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);
/* harmony import */ var _shared_intl_phn_input_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/intl-phn-input/lib/ngx-intl-tel-input.component */ 92392);
/* harmony import */ var _shared_intl_phn_input_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/intl-phn-input/lib/directives/native-element-injector.directive */ 74953);
/* harmony import */ var _shared_form_validation_template_pages_form_validation_template_form_validation_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/form-validation-template/pages/form-validation-template/form-validation-template.component */ 2359);













function EmployersHeroSectionComponent_div_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Mobile Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function EmployersHeroSectionComponent_div_37_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Invaild Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function EmployersHeroSectionComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmployersHeroSectionComponent_div_37_span_1_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EmployersHeroSectionComponent_div_37_span_2_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.value == null ? null : ctx_r0.healthInsuranceForm.value.phone) && (ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.controls == null ? null : ctx_r0.healthInsuranceForm.controls.phone == null ? null : ctx_r0.healthInsuranceForm.controls.phone.errors == null ? null : ctx_r0.healthInsuranceForm.controls.phone.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.value == null ? null : ctx_r0.healthInsuranceForm.value.phone) && (ctx_r0.healthInsuranceForm == null ? null : ctx_r0.healthInsuranceForm.controls["phone"] == null ? null : ctx_r0.healthInsuranceForm.controls["phone"].invalid));
  }
}
function EmployersHeroSectionComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", option_r4 === ctx_r1.selectedVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
let EmployersHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class EmployersHeroSectionComponent {
    constructor(employerService, cdr, toastr, eventTrackingService) {
      this.employerService = employerService;
      this.cdr = cdr;
      this.toastr = toastr;
      this.eventTrackingService = eventTrackingService;
      this.healthInsuranceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
        // Validators.minLength(3),
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__.FORM_VALIDATION.ONLY_SPACE_RESTRICT)]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__.FORM_VALIDATION.EMAIL_PATTERN)])),
        organistaionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_0__.FORM_VALIDATION.ONLY_SPACE_RESTRICT)]),
        employeeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
        SearchCountryField: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_1__.SearchCountryField),
        CountryISO: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_1__.CountryISO)
      });
      this.subscriptions = [];
      this.message = '';
      this.selectedVal = '0 - 20';
      this.options = ['0 - 20', '20 - 30', '30 - 40', '40 - 50'];
    }
    onCountryChange(event) {}
    submitHealthForm() {
      if (this.healthInsuranceForm.invalid) {
        this.healthInsuranceForm.markAllAsTouched();
        return;
      }
      const formVal = this.healthInsuranceForm.getRawValue();
      const payload = {
        "cmp_inq_name": formVal?.name.trim(),
        "cmp_inq_email": formVal?.email,
        "cmp_inq_mo_no": formVal?.phone?.number.replaceAll(/[-\s]/g, ''),
        "cmp_inq_org_name": formVal?.organistaionName.trim(),
        "cmp_inq_org_no_emp": formVal?.employeeNumber,
        "cmp_inq_page": "employers"
      };
      if (this.healthInsuranceForm.valid) {
        this.subscriptions.push(this.employerService.postEmployerList(payload).subscribe(data => {
          if (data?.success) {
            const value = {
              MobileNumber: formVal?.phone?.number.replaceAll(/[-\s]/g, ''),
              name: formVal?.name.trim(),
              email: formVal?.email || '',
              organisationName: formVal?.organistaionName.trim(),
              employeeStrength: formVal?.employeeNumber
            };
            this.eventTrackingService.trackWebEnagegeEvent('employee request', value);
            this.eventTrackingService.trackEvent('employee request', value);
            this.toastr.success('Your request has been submitted. Our team will reach out to you shortly.', undefined, {
              positionClass: 'toast-bottom-center',
              closeButton: true
            });
            this.healthInsuranceForm.reset();
            this.resetForm();
            this.message = data?.data?.data;
          }
          this.cdr.detectChanges();
        }, err => {
          this.toastr.error(err?.error?.message, undefined, {
            positionClass: 'toast-bottom-center',
            closeButton: true,
            //disableTimeOut: true,
            tapToDismiss: false
          });
        }));
      }
    }
    resetForm() {
      this.healthInsuranceForm.reset({
        employeeNumber: '0 - 20'
      });
    }
  }
  _class = EmployersHeroSectionComponent;
  _class.ɵfac = function EmployersHeroSectionComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_2__.EmployerListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_3__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-employers-hero-section"]],
    inputs: {
      bannerData: "bannerData"
    },
    decls: 48,
    vars: 26,
    consts: [[1, "py-2", "sm:py-12", "lg:py-28", "xl:py-20"], [1, "container", "px-5", "xl:px-3"], [1, "grid", "gap-6", "sm:gap-10", "lg:gap-4", "lg:grid-cols-2"], [1, "flex", "items-center", "justify-center", "lg:justify-start", "pt-[35px]"], [1, "flex", "relative", "flex-col", "h-fit", "my-auto", "justify-center", "mx-auto", "md:mx-0", "md:w-[90%]", "lg:w-[80%]", "xl:w-[70%]"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/employer-page/hero-section/flower.png", "alt", "", 1, "absolute", "w-6", "h-6", "-right-5", "sm:right-0", "lg:right-6", "-top-8", "sm:-top-16", "lg:w-10", "lg:h-10"], [1, "text-center", "lg:text-left", "text-theme-brown", "font-lora", "text-2xl", "lg:text-2xl", "xl:text-[30px]", "font-extrabold"], [1, "text-center", "lg:text-left", "py-4", "font-normal", "text-lg", "md:text-xl", "lg:text-[24px]", "font-roboto", "leading-tight"], [1, "relative", "mx-auto", "w-fit", "lg:w-auto"], [1, "px-4", "md:px-16", "lg:px-0"], [1, "relative", "border", "border-theme-brown", "rounded-full", "-z-[0]", "md:-mr-2"], [1, "absolute", "w-[40px]", "md:w-[90px]", "md:h-[95px]", "top-0", "right-2", "md:top-0", "md:right-4", "xl:top-5", "xl:right-10", "z-10"], ["width", "100%", "height", "100%", "viewBox", "0 0 89 95", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.9357 82.353C7.60705 76.1338 16.2119 75.9818 23.8851 77.9478C24.8337 78.1973 25.7739 78.4773 26.7044 78.7873C26.8646 82.1849 27.9032 85.48 29.7186 88.3582C31.3028 90.7106 37.0799 95.9769 40.3159 93.2854C43.4143 90.7123 38.819 84.5914 36.9737 82.8741C34.3291 80.5897 31.2934 78.8009 28.0123 77.5934C27.9411 75.2977 27.9904 72.9997 28.1598 70.709C28.5882 63.7603 29.8444 56.887 31.9018 50.2344C35.7395 37.7547 42.217 26.243 50.8958 16.4788C59.6101 6.72503 75.7089 -5.73896 87.9794 6.02438C88.1295 6.173 88.3477 5.94044 88.1934 5.77343C77.7718 -4.60133 63.0886 3.18018 54.3049 11.5713C43.8888 21.6331 36.052 34.0521 31.458 47.7769C29.2369 54.2784 27.7684 61.0122 27.0813 67.8467C26.7277 70.9358 26.5713 74.0442 26.6129 77.153C17.5797 74.1117 6.69122 74.4571 1.12105 81.6729C1.03025 81.7802 0.985629 81.9191 0.996921 82.0591C1.00563 82.1642 1.04549 82.2643 1.11142 82.3467C1.17734 82.4291 1.26634 82.49 1.36707 82.5216C1.46781 82.5532 1.57571 82.5542 1.67702 82.5243C1.77833 82.4944 1.86825 82.4342 1.9357 82.353ZM32.7772 81.5214C34.6845 82.5843 36.3724 83.9992 37.7512 85.6909C38.7776 87.0918 41.5754 91.7476 37.3378 92.3863C33.1002 93.0251 29.4476 85.8894 28.6415 82.8198C28.3432 81.6462 28.1387 80.4507 28.0301 79.2445C29.6859 79.8587 31.2838 80.6185 32.8048 81.5151L32.7772 81.5214Z", "fill", "#FF8686"], [1, "absolute", "w-[70px]", "md:w-[130px]", "md:h-[50px]", "-left-1", "bottom-1", "md:bottom-[90px]", "z-10"], ["width", "100%", "height", "100%", "viewBox", "0 0 132 49", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.29138 29.4563C5.06815 18.5816 11.1371 8.62582 19.096 0.248976C19.2074 0.135452 19.3495 0.0562159 19.5053 0.0208093C19.6611 -0.0145974 19.824 -0.00466473 19.9742 0.0494112C20.1244 0.103487 20.2557 0.1994 20.3521 0.3256C20.4485 0.4518 20.5061 0.602904 20.5177 0.760717C20.5383 0.972275 20.4774 1.18371 20.3472 1.35276C14.2305 8.5299 9.15132 16.5138 5.25545 25.0752C3.79521 28.3131 1.40273 33.1692 2.0421 36.8398C4.04545 48.5337 12.8632 39.8531 16.8287 36.8398C30.957 26.2904 44.476 14.9644 57.3219 2.9152C58.1276 2.1612 59.3239 3.2922 58.5594 4.10064C53.5105 9.54606 49.6839 16.0136 47.334 23.0664C45.4696 28.4111 39.3358 52.3717 54.8029 43.9988C60.5902 40.8725 65.932 34.5234 70.4942 29.8333C77.0657 22.9972 83.1101 15.6831 88.5766 7.95231L88.7169 7.7713C89.3288 6.99008 90.6639 8.0367 90.107 8.8465C89.2641 10.0374 88.4103 11.2147 87.5481 12.377C83.9502 17.7445 81.1838 23.6146 79.3409 29.7925C78.465 32.667 73.1645 48.1281 82.8058 46.5384C86.1292 45.994 90.4136 41.6388 93.0838 39.5605C106.897 29.0807 119.125 16.9119 130.85 4.17142C131.435 3.52902 132.381 4.40823 131.838 5.07785C123.421 15.4884 114.017 25.0774 103.754 33.7136C99.4321 37.3611 94.9676 40.8317 90.3572 44.124C87.7145 46.0212 84.5287 48.8127 81.0514 48.8957C69.9236 49.1475 75.7934 32.0667 81.886 19.7019C76.9347 25.8683 71.5581 31.6878 65.7945 37.1188C61.8291 40.8303 51.8839 52.8032 45.6236 47.7933C40.6585 43.845 42.5505 34.2294 43.7742 29.0793C45.2673 22.6716 47.7994 16.5457 51.272 10.9397C44.0744 17.4603 36.6933 23.7797 29.1375 29.8905C23.8658 34.077 18.5515 38.5425 12.9045 42.2961C10.622 43.8164 7.77166 45.7558 4.8512 45.0168C-1.72948 43.37 -0.185364 34.0198 1.28999 29.4577L1.29138 29.4563Z", "fill", "#93CFCF"], [1, "absolute", "w-[35px]", "bottom-4", "right-0", "md:w-[60px]", "md:h-[50px]", "md:bottom-0", "xl:bottom-8", "md:right-4", "xl:right-10", "z-10"], ["width", "100%", "height", "100%", "viewBox", "0 0 58 51", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.4788 13.1453C19.4788 11.626 20.4575 9.54763 22.058 7.67226C23.64 5.81862 25.7878 4.67337 28.7077 4.72795C34.7302 4.84052 38.5804 8.53251 38.7441 13.1715C38.8864 17.2041 39.062 23.7649 39.0023 26.5466C38.9935 26.9569 39.2477 27.0785 39.4767 27.0785C39.7057 27.0785 39.9177 26.9569 39.9265 26.5466C39.9438 25.7385 39.9888 24.6115 40.0403 23.3192L40.0403 23.3191V23.3191V23.3191V23.319C40.1662 20.1602 40.3315 16.0133 40.2293 13.1191C40.0353 7.61923 35.4459 2.92854 28.7077 2.8026C25.2474 2.73792 22.559 4.41002 20.7569 6.52159C18.9735 8.61142 17.9927 11.2066 17.9927 13.1453L18.2203 26.5625C18.2203 26.9729 18.4654 27.1059 18.7363 27.1059C19.0071 27.1059 19.2522 26.9729 19.2522 26.5625L19.4788 13.1453ZM30.9418 12.3514C30.8833 12.1011 30.8196 11.8286 30.6083 11.8098C30.4142 11.7925 30.3423 12.0222 30.2711 12.2495C30.237 12.3582 30.2032 12.4662 30.1563 12.5466L30.1261 12.5983C29.6964 13.3349 29.1848 13.6823 28.4205 13.9643C27.7964 14.1945 26.9701 14.1458 26.1181 14.0956C25.8881 14.0821 25.6562 14.0684 25.4259 14.0601C24.8953 14.0409 24.3874 14.0008 23.9369 13.9643L23.8614 13.9582L23.8614 13.9582C23.4551 13.9252 23.0699 13.8939 22.7906 13.8939C22.4283 13.8939 22.1188 14.1551 22.058 14.5122C21.8084 15.9787 21.63 19.0063 22.5107 21.6405C22.9047 22.819 23.5241 23.9581 24.4807 24.8338L24.4806 24.839L24.5777 29.8103C24.5777 29.8542 24.5705 29.8984 24.5634 29.942C24.5497 30.0259 24.5364 30.1076 24.5755 30.1802C24.5771 30.1802 24.5787 30.1802 24.5803 30.1802C24.6189 30.2833 24.8849 30.5763 25.6278 30.9982L25.6237 30.9794C25.7447 31.0561 25.8708 31.1295 26.0008 31.1994C26.0671 31.2336 26.1369 31.2695 26.2097 31.307C27.4747 31.9311 29.0494 32.2322 30.0806 32.0399C30.7974 31.9062 32.0448 31.3176 32.6056 30.9794L32.6055 30.9798C32.9181 30.7933 33.5752 30.3782 33.7235 30.1976C33.7263 30.1941 33.7294 30.1907 33.7326 30.1874C33.732 30.1863 33.7314 30.1852 33.7307 30.1842C33.7729 30.1101 33.7589 30.0216 33.7449 29.9325C33.7378 29.8877 33.7307 29.8428 33.7307 29.7995L33.8278 24.839C33.8278 24.821 33.8272 24.8032 33.8259 24.7856C33.9505 24.6744 34.0696 24.5585 34.1832 24.4382C35.2036 23.3581 35.7296 21.9851 35.9696 20.641C36.2099 19.2957 36.1721 17.9346 36.0272 16.8184C35.8852 15.7248 35.629 14.7813 35.3757 14.2941C35.2343 14.0222 34.9405 13.865 34.6358 13.8982C32.3957 14.1426 31.2054 13.1356 31.0088 12.5983C30.9828 12.5272 30.9626 12.4407 30.9418 12.3514ZM38.2741 30.5496C38.2627 30.5436 38.2517 30.5386 38.2411 30.5347C37.5142 30.2645 36.4744 30.1638 36.0453 30.1472L36.0315 30.1591C35.9113 30.1506 35.7947 30.1447 35.6824 30.1411C35.2722 30.1281 35.1014 29.8283 35.1091 29.5845C35.1168 29.3408 35.3317 29.171 35.7419 29.184L35.9351 29.19C37.6863 29.2436 40.1931 29.3203 42.3346 30.7723C44.5908 32.3019 46.4138 34.8097 46.4589 38.6659C46.5428 45.8351 46.4942 49.3917 46.4584 50.2865C46.4424 50.685 46.1147 50.9999 45.7159 50.9999H12.4892C12.0788 50.9999 11.7461 50.6672 11.7461 50.2568V38.6746C11.7461 37.2651 12.1852 34.9421 13.69 32.8724C15.2172 30.7718 17.8288 29.3816 21.9952 29.0505C22.4043 29.018 22.6718 29.2132 22.6976 29.5381C22.7234 29.863 22.496 30.1066 22.0869 30.1391C22.0699 30.1405 22.0529 30.1419 22.036 30.1433C22.0291 30.143 22.0223 30.1427 22.0155 30.1424C21.1509 30.1057 19.9787 30.4312 19.5007 30.5986L19.4992 30.6015C17.279 31.2546 15.8314 32.4542 14.892 33.7463C13.6058 35.5154 13.2322 37.5161 13.2322 38.6746V49.5125H17.3293L17.3293 49.5119H18.6442L18.6443 49.5138H28.2022L28.2024 49.5119H29.6883L29.6884 49.5138H39.6961L39.6962 49.5119H40.9727L40.9728 49.5138H44.9922C45.0208 48.0071 45.0418 44.5781 44.9729 38.6833C44.9341 35.3701 43.4031 33.2922 41.5006 32.0023C40.478 31.309 39.3441 30.8426 38.2741 30.5496ZM32.388 25.7319C31.6122 26.0967 30.7013 26.3332 29.6417 26.4095C28.179 26.5148 26.9496 26.2896 25.9309 25.8083L25.7866 29.7086C27.2326 31.1418 28.7494 31.1786 29.8172 30.9794C30.8789 30.7814 32.0473 30.5333 32.6056 29.9339L32.388 25.7319ZM25.8262 24.404C26.7485 24.9498 28.1821 25.3977 29.6417 25.2926C31.3425 25.1701 32.6212 24.3384 33.3694 23.5464C34.1305 22.7408 34.4286 21.6425 34.6358 20.4822C34.6631 20.3295 34.6908 20.1793 34.7182 20.0312L34.7183 20.0309C34.8988 19.0546 35.0621 18.1709 34.9485 17.2957C34.861 16.6218 34.6222 15.3531 34.5067 14.9809C32.7154 15.4438 31.2539 14.7209 30.5435 13.9282C30.1766 14.4014 29.6726 14.86 28.895 15.1469C27.8131 15.546 26.4856 15.5854 25.3723 15.5452C24.8047 15.5248 24.2668 15.482 23.8169 15.4456L23.7953 15.4438L23.7948 15.4438C23.6641 15.4332 23.5435 15.4234 23.433 15.4149C23.2718 16.8753 23.0544 19.2124 23.718 21.1971C24.1012 22.3433 24.5282 23.4439 25.3991 24.1168C25.5736 24.159 25.7241 24.2628 25.8262 24.404Z", "fill", "#1D5E3F"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M42.5946 9.49542C42.6193 9.59133 42.6422 9.6878 42.6634 9.78482C42.7143 10.0189 42.7625 10.2731 42.8081 10.5452C43.0014 10.5009 43.1896 10.4464 43.3697 10.38C44.0156 10.1417 44.4342 9.7608 44.739 9.36774C45.329 10.0262 46.543 10.6266 48.0309 10.2421C48.1269 10.5513 48.3252 11.6051 48.3979 12.1648C48.4923 12.8918 48.3566 13.6259 48.2066 14.4368L48.2066 14.4372C48.1838 14.5602 48.1608 14.6849 48.1382 14.8116C47.966 15.7754 47.7184 16.6877 47.0862 17.3569C46.4648 18.0147 45.4026 18.7056 43.9899 18.8073C43.8076 18.8204 43.6258 18.8231 43.4459 18.8168C43.4559 19.1297 43.465 19.4431 43.4732 19.7559C43.6414 19.7546 43.8136 19.7477 43.9899 19.735C44.8708 19.6716 45.628 19.4748 46.2727 19.1714L46.4536 22.6624C45.9898 23.1603 45.0193 23.3664 44.1375 23.5309C43.9516 23.5655 43.7493 23.5916 43.5347 23.6002C43.5365 23.8891 43.5378 24.1735 43.5385 24.4522C43.8364 24.4693 44.1143 24.4569 44.3562 24.4117C44.9487 24.3012 45.9776 23.8166 46.4467 23.535L46.4519 23.5313C46.7107 23.377 47.2591 23.0307 47.3825 22.8803C47.3847 22.8776 47.387 22.8751 47.3894 22.8726L47.3881 22.8703C47.4231 22.8088 47.4115 22.7353 47.3999 22.6613C47.394 22.6241 47.3881 22.5868 47.3881 22.5508L47.4688 18.4305C47.4688 18.4151 47.4682 18.3998 47.4671 18.3847C47.57 18.2927 47.6683 18.197 47.7622 18.0976C48.6097 17.2004 49.0467 16.06 49.2461 14.9436C49.4456 13.8261 49.4143 12.6955 49.2939 11.7684C49.176 10.86 48.9631 10.0763 48.7527 9.67166C48.6352 9.44582 48.3912 9.31524 48.1382 9.34284C46.2774 9.54583 45.2888 8.70936 45.1255 8.26308C45.1039 8.20403 45.0871 8.13221 45.0698 8.05804L45.0698 8.05802L45.0698 8.05801L45.0698 8.05799C45.0212 7.8501 44.9683 7.62374 44.7928 7.6081C44.6316 7.59374 44.5718 7.78452 44.5127 7.97338C44.4844 8.0636 44.4563 8.15338 44.4173 8.22015L44.3923 8.26308C44.0354 8.8749 43.6104 9.16348 42.9755 9.3977C42.8568 9.44151 42.7292 9.47316 42.5946 9.49542ZM49.6466 40.1604H57.3433C57.6746 40.1604 57.9468 39.8989 57.96 39.5679C57.9898 38.8246 58.0301 35.8704 57.9605 29.9155C57.923 26.7124 56.4087 24.6294 54.5347 23.3588C52.7559 22.1528 50.6737 22.089 49.2191 22.0445L49.0586 22.0395C48.7179 22.0287 48.5395 22.1698 48.533 22.3723C48.5266 22.5747 48.6685 22.8237 49.0092 22.8345C49.1023 22.8375 49.1988 22.8424 49.2984 22.8494L49.3111 22.8384C49.6675 22.8522 50.5312 22.9359 51.135 23.1603C51.1454 23.1641 51.1562 23.1692 51.1674 23.1753C52.0546 23.4188 52.9943 23.8058 53.842 24.3805C55.4222 25.4519 56.694 27.1779 56.7261 29.9299C56.7834 34.8263 56.766 37.6745 56.7422 38.926H53.4036L53.4035 38.9233H52.3432L52.3431 38.926H49.5771C49.6022 39.3316 49.6253 39.7441 49.6466 40.1604ZM37.2617 2.52259C37.6292 2.78679 38.0192 3.08961 38.4153 3.4276C39.6408 2.33253 41.2081 1.68826 43.2141 1.72576C48.2166 1.81926 51.4146 4.88592 51.5506 8.73917C51.6688 12.0888 51.8146 17.5383 51.7651 19.8489C51.7578 20.1897 51.9689 20.2907 52.1591 20.2907C52.3493 20.2907 52.5254 20.1897 52.5327 19.8489C52.5471 19.1777 52.5844 18.2417 52.6272 17.1683L52.6272 17.1681V17.168C52.7318 14.5442 52.8691 11.0997 52.7843 8.69564C52.6231 4.12733 48.811 0.231123 43.2141 0.126508C40.731 0.0800939 38.7264 1.1104 37.2617 2.52259Z", "fill", "#1D5E3F"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M15.4034 9.4954C15.3787 9.59132 15.3557 9.6878 15.3346 9.78482C15.2836 10.0189 15.2355 10.2731 15.1899 10.5451C14.9966 10.5008 14.8084 10.4464 14.6284 10.38C13.9825 10.1417 13.5639 9.7608 13.2591 9.36774C12.6691 10.0262 11.4551 10.6266 9.96722 10.2421C9.87123 10.5513 9.67287 11.6051 9.6002 12.1648C9.50582 12.8918 9.64153 13.6259 9.79145 14.4368C9.81421 14.5599 9.83729 14.6847 9.85994 14.8116C10.032 15.7754 10.2797 16.6877 10.9119 17.3569C11.5333 18.0147 12.5955 18.7056 14.0082 18.8073C14.1904 18.8204 14.3722 18.8231 14.5521 18.8168C14.542 19.1297 14.533 19.4431 14.5248 19.7559C14.3566 19.7546 14.1845 19.7477 14.0082 19.735C13.1273 19.6716 12.3702 19.4748 11.7255 19.1714L11.5446 22.6624C12.0084 23.1603 12.9789 23.3664 13.8607 23.5309C14.0465 23.5655 14.2487 23.5916 14.4633 23.6002C14.4615 23.8891 14.4602 24.1735 14.4595 24.4522C14.1616 24.4693 13.8838 24.4568 13.642 24.4117C13.0495 24.3012 12.0208 23.8166 11.5516 23.5351L11.5463 23.5313C11.2875 23.377 10.7391 23.0307 10.6157 22.8803C10.6135 22.8776 10.6112 22.8751 10.6088 22.8725L10.6101 22.8703C10.5751 22.8088 10.5867 22.7353 10.5983 22.6613C10.6042 22.6241 10.6101 22.5868 10.6101 22.5508L10.5294 18.4305C10.5294 18.4151 10.53 18.3999 10.5311 18.3848C10.4282 18.2928 10.3298 18.197 10.2359 18.0976C9.38836 17.2004 8.95139 16.06 8.75203 14.9436C8.55247 13.8261 8.58384 12.6955 8.70421 11.7684C8.82214 10.86 9.03499 10.0763 9.24541 9.67166C9.36285 9.44582 9.60689 9.31524 9.85994 9.34284C11.7206 9.54583 12.7093 8.70936 12.8726 8.26308C12.8942 8.20403 12.911 8.13221 12.9283 8.05804L12.9283 8.05802L12.9283 8.05801L12.9283 8.05799C12.9769 7.8501 13.0298 7.62374 13.2053 7.6081C13.3665 7.59374 13.4263 7.78452 13.4854 7.97338C13.5137 8.0636 13.5418 8.15338 13.5808 8.22015L13.6058 8.26308C13.9627 8.8749 14.3877 9.16348 15.0226 9.3977C15.1413 9.4415 15.2688 9.47314 15.4034 9.4954ZM8.35139 40.1604H0.654884C0.323606 40.1604 0.0514088 39.8989 0.038166 39.5679C0.00844002 38.8246 -0.0319309 35.8704 0.0377178 29.9155C0.0751781 26.7124 1.58945 24.6294 3.46346 23.3588C5.24227 22.1528 7.32446 22.089 8.77911 22.0445L8.93957 22.0395C9.28028 22.0287 9.45874 22.1698 9.46517 22.3723C9.47159 22.5747 9.32969 22.8237 8.98899 22.8345C8.89594 22.8375 8.79943 22.8424 8.69985 22.8494L8.68708 22.8384C8.33071 22.8522 7.46701 22.9359 6.86317 23.1603C6.85285 23.1641 6.84207 23.1692 6.83083 23.1753C5.94365 23.4188 5.00391 23.8058 4.1562 24.3805C2.57598 25.4519 1.30424 27.1779 1.27205 29.9299C1.21478 34.8263 1.23224 37.6745 1.25599 38.926H4.5946L4.59474 38.9233H5.65499L5.65506 38.926H8.42089C8.39582 39.3316 8.37269 39.7441 8.35139 40.1604ZM20.7363 2.52254C20.3688 2.78675 19.9789 3.08956 19.5827 3.42756C18.3572 2.33251 16.79 1.68826 14.784 1.72576C9.78152 1.81926 6.58344 4.88592 6.44747 8.73917C6.32927 12.0888 6.18348 17.5383 6.23299 19.8489C6.2403 20.1897 6.02919 20.2907 5.83898 20.2907C5.64876 20.2907 5.47265 20.1897 5.46534 19.8489C5.45096 19.1776 5.41365 18.2415 5.37086 17.168C5.26628 14.5442 5.12898 11.0997 5.21382 8.69564C5.37502 4.12733 9.18707 0.231123 14.784 0.126508C17.2671 0.0800943 19.2716 1.11037 20.7363 2.52254Z", "fill", "#1D5E3F"], ["alt", "", 1, "relative", "-z-[0]", "rounded-full", "first-letter:hidden", "sm:block", "-ml-2", "sm:-ml-4", "mt-1", "sm:mt-2", "lg:-ml-2", 3, "src"], [1, "z-[1]", "relative", "lg:absolute", "lg:top-8", "xl:top-24", "lg:-left-2", "sm:mx-auto", "lg:mx-0", "w-full", "sm:w-[330px]", "xl:w-[350px]", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "px-4", "pt-2.5", "pb-3.5", "sm:p-5", "bg-white", "rounded-2xl", "sm:rounded-[40px]", "-mt-5", "sm:-mt-10", "w-100", "lg:mt-0"], [1, "text-center", "font-bold", "mt-4", "lg:text-2xl", "text-theme-brown", "font-lora", "text-lg", "sm:text-[25px]", "mb-3", "sm:mb-4"], [1, "flex", "flex-col", "gap-3", "text-sm", "font-roboto", "sm:text-base", 3, "formGroup"], [1, ""], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "w-full", "py-1.5", "text-black", "border", "rounded-full", "outline-none", "px-5", "sm:py-2", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], [3, "form", "field", "label"], ["type", "email", "placeholder", "Email ID", "formControlName", "email", 1, "w-full", "py-1.5", "text-black", "border", "rounded-full", "outline-none", "px-5", "sm:py-2", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], ["numberonly", "", "cssClass", "w-full py-1.5 text-black border rounded-full outline-none px-5 sm:py-2 placeholder:text-theme-lightest-grey border-theme-lightest-pink", "name", "phone", "formControlName", "phone", 1, "flex-grow", "flex-shrink", "block", 3, "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "phoneValidation", "separateDialCode", "countryChange"], ["class", "text-xs text-theme-error-red", 4, "ngIf"], ["type", "text", "placeholder", "Name of Organisation", "formControlName", "organistaionName", 1, "w-full", "py-1.5", "text-black", "border", "rounded-full", "outline-none", "px-5", "sm:py-2", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], [1, "flex", "items-center", "justify-between", "gap-2", "text-sm", "sm:text-sm", "xl:text-base", "text-theme-lightest-grey"], ["formControlName", "employeeNumber", 1, "py-2", "text-black", "border", "rounded-full", "outline-none", "placeholder:text-theme-lightest-grey", "border-theme-lightest-pink"], [3, "selected", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "px-5", "py-1.5", "sm:py-2", "text-lg", "font-light", "text-white", "rounded-full", "sm:font-normal", "sm:text-2xl", "bg-theme-light-maroon", "sm:px-7", 3, "click"], [1, "text-xs", "text-theme-error-red"], [4, "ngIf"], [3, "selected"]],
    template: function EmployersHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "path", 19)(22, "path", 20)(23, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 23)(26, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " Get Gytree for your business");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "form", 25)(29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "input", 27)(31, "app-form-validation-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 29)(34, "app-form-validation-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 26)(36, "ngx-intl-tel-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("countryChange", function EmployersHeroSectionComponent_Template_ngx_intl_tel_input_countryChange_36_listener($event) {
          return ctx.onCountryChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, EmployersHeroSectionComponent_div_37_Template, 3, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "input", 32)(40, "app-form-validation-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " No.of Women Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, EmployersHeroSectionComponent_option_44_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 36)(46, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmployersHeroSectionComponent_Template_button_click_46_listener() {
          return ctx.submitHealthForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " Talk to us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.bannerData == null ? null : ctx.bannerData.emplr_title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.bannerData == null ? null : ctx.bannerData.emplr_desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.bannerData == null ? null : ctx.bannerData.emplr_banner == null ? null : ctx.bannerData.emplr_banner.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.healthInsuranceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("form", ctx.healthInsuranceForm)("field", "name")("label", "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("form", ctx.healthInsuranceForm)("field", "email")("label", "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("enableAutoCountrySelect", true)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](23, _c0, ctx.healthInsuranceForm == null ? null : ctx.healthInsuranceForm.value == null ? null : ctx.healthInsuranceForm.value.SearchCountryField == null ? null : ctx.healthInsuranceForm.value.SearchCountryField.Iso2, ctx.healthInsuranceForm == null ? null : ctx.healthInsuranceForm.value == null ? null : ctx.healthInsuranceForm.value.SearchCountryField == null ? null : ctx.healthInsuranceForm.value.SearchCountryField.Name))("selectFirstCountry", false)("selectedCountryISO", ctx.healthInsuranceForm == null ? null : ctx.healthInsuranceForm.value == null ? null : ctx.healthInsuranceForm.value.CountryISO == null ? null : ctx.healthInsuranceForm.value.CountryISO.India)("phoneValidation", true)("separateDialCode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.healthInsuranceForm.controls["phone"] == null ? null : ctx.healthInsuranceForm.controls["phone"].touched) && (ctx.healthInsuranceForm.controls["phone"] == null ? null : ctx.healthInsuranceForm.controls["phone"].invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("form", ctx.healthInsuranceForm)("field", "organistaionName")("label", "Name of Organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_4__.LazyImgDirective, _shared_intl_phn_input_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_5__.NgxIntlTelInputComponent, _shared_intl_phn_input_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_6__.NativeElementInjectorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_form_validation_template_pages_form_validation_template_form_validation_template_component__WEBPACK_IMPORTED_MODULE_7__.FormValidationTemplateComponent],
    encapsulation: 2
  });
  return EmployersHeroSectionComponent;
})();


/***/ }),

/***/ 53713:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/employers/components/employers-stastics/employers-stastics.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployersStasticsComponent: () => (/* binding */ EmployersStasticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-circle-progress */ 33932);



function EmployersStasticsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle-progress", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statistics_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", statistics_r1 == null ? null : statistics_r1.title)("radius", 60)("backgroundPadding", 7)("title", "+" + (statistics_r1 == null ? null : statistics_r1.title) + "%")("showSubtitle", false)("innerStrokeWidth", 3)("space", -2)("outerStrokeWidth", 3)("outerStrokeColor", "#78C000")("innerStrokeColor", "#d3d3d3")("animateTitle", false)("animation", true)("showUnits", false)("animationDuration", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statistics_r1 == null ? null : statistics_r1.desc, " ");
  }
}
let EmployersStasticsComponent = /*#__PURE__*/(() => {
  var _class;
  class EmployersStasticsComponent {}
  _class = EmployersStasticsComponent;
  _class.ɵfac = function EmployersStasticsComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-employers-stastics"]],
    inputs: {
      statistics: "statistics"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "container", "py-3", "mb-4"], [1, "why-gytree", "text-center", "mt-5", "md:pt-6", "pt-0", "font-bold", "lg:text-[30px]", "text-theme-brown", "font-lora", "text-[25px]"], [1, "text-center", "md:pt-4", "pt-2", "font-normal", "lg:text-[21px]", "md:text-xl", "text-base", "sm:w-[80%]", "lg:w-[60%]", "mx-auto", "font-roboto"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-4", "gap-4", "mt-2", "md:mt-5", "font-roboto", "text-sm", "lg:text-base"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "block", "mb-4", "[&>svg]:mx-auto", 3, "percent", "radius", "backgroundPadding", "title", "showSubtitle", "innerStrokeWidth", "space", "outerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animateTitle", "animation", "showUnits", "animationDuration"], [1, "text-center"]],
    template: function EmployersStasticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmployersStasticsComponent_div_6_Template, 4, 15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statistics == null ? null : ctx.statistics.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statistics == null ? null : ctx.statistics.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statistics == null ? null : ctx.statistics.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_circle_progress__WEBPACK_IMPORTED_MODULE_2__.CircleProgressComponent],
    encapsulation: 2
  });
  return EmployersStasticsComponent;
})();


/***/ }),

/***/ 38243:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/employers/components/employers-testimonials/employers-testimonials.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployersTestimonialsComponent: () => (/* binding */ EmployersTestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _employers_testimonials_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers-testimonials.constant */ 9523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);






function EmployersTestimonialsComponent_splide_slide_9_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function EmployersTestimonialsComponent_splide_slide_9_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function EmployersTestimonialsComponent_splide_slide_9_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EmployersTestimonialsComponent_splide_slide_9_ng_container_10_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 - 0.5 <= slide_r1.tstm_rating);
  }
}
function EmployersTestimonialsComponent_splide_slide_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EmployersTestimonialsComponent_splide_slide_9_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EmployersTestimonialsComponent_splide_slide_9_ng_container_10_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 <= slide_r1.tstm_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 > slide_r1.tstm_rating);
  }
}
function EmployersTestimonialsComponent_splide_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "splide-slide")(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EmployersTestimonialsComponent_splide_slide_9_ng_container_10_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (slide_r1 == null ? null : slide_r1.tstm_image) || "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/placeholder/image/placeholder.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", slide_r1 == null ? null : slide_r1.tstm_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", slide_r1 == null ? null : slide_r1.gttml_org_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.feedBackStar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", slide_r1 == null ? null : slide_r1.tstm_brand_image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", slide_r1 == null ? null : slide_r1.tstm_desc, " ");
  }
}
let EmployersTestimonialsComponent = /*#__PURE__*/(() => {
  var _class;
  class EmployersTestimonialsComponent {
    constructor() {
      this.foundersSlideConfig = _employers_testimonials_constant__WEBPACK_IMPORTED_MODULE_0__.FOUNDERS_SLIDE_CONFIG;
      /**
       * rating data
       */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
  }
  _class = EmployersTestimonialsComponent;
  _class.ɵfac = function EmployersTestimonialsComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-employers-testimonials"]],
    inputs: {
      testimonialData: "testimonialData",
      testimonialConfig: "testimonialConfig"
    },
    decls: 10,
    vars: 4,
    consts: [[1, "sm:container"], [1, "pt-10"], [1, "relative", "flex", "flex-col", "items-center"], [1, "text-theme-brown", "font-lora", "text-2xl", "md:text-[30px]", "font-extrabold", "mb-3"], [1, "pb-8"], [1, "text-center", "text-base", "md:text-[23px]", "font-roboto", "leading-tight"], [1, "arrow-change", 3, "options"], [4, "ngFor", "ngForOf"], [1, "py-4", "text-center", "sm:py-10"], [1, "border", "border-theme-brown", "shrink-0", "w-fit", "relative", "inline-block", "rounded-[130px]", "my-2", "pt-2"], ["alt", "", 1, "-mt-2", "h-[310px]", "object-cover", "shrink-0", "w-[235px]", "sm:-mt-4", "-ml-1", "sm:-ml-2", "rounded-[130px]", 3, "src"], [1, "text-xl", "font-bold", "font-lora", "mb-0.5"], [1, "text-xl", "font-bold", "font-lora"], [1, "text-lg", "font-roboto", "mb-0.5"], [1, "flex", "items-center", "justify-center"], [1, "flex", "items-center", "justify-center", "mb-2", "text-lg", "font-roboto"], [1, "my-2.5", "w-auto", "h-[70px]", 3, "src"], [1, "text-sm", "sm:text-base", "font-roboto"], [4, "ngIf"], [1, "block", "w-5", "h-5", "text-theme-brown", 3, "inlineSVG"], ["src", "https://image.gytree.com/assets/media/gaytree/feedback-img/star-half.svg", "alt", "", 1, "rating5"]],
    template: function EmployersTestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "splide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EmployersTestimonialsComponent_splide_slide_9_Template, 15, 6, "splide-slide", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.testimonialConfig == null ? null : ctx.testimonialConfig.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.testimonialConfig == null ? null : ctx.testimonialConfig.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.foundersSlideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.testimonialData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideSlideComponent, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__.LazyImgDirective],
    encapsulation: 2
  });
  return EmployersTestimonialsComponent;
})();


/***/ }),

/***/ 9523:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/employers/components/employers-testimonials/employers-testimonials.constant.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOUNDERS_SLIDE_CONFIG: () => (/* binding */ FOUNDERS_SLIDE_CONFIG)
/* harmony export */ });
const FOUNDERS_SLIDE_CONFIG = {
  gap: 60,
  perPage: 3,
  arrows: true,
  pagination: false,
  breakpoints: {
    1279: {
      perPage: 2
    },
    1023: {
      perPage: 1
    },
    640: {
      destroy: true
    }
  }
};

/***/ }),

/***/ 86291:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/employers/components/gytree-impact/gytree-impact.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GytreeImpactComponent: () => (/* binding */ GytreeImpactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);




function GytreeImpactComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 8)(9, "img", 9)(10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16)(23, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/gytree-impact/svg/left.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.left_section == null ? null : ctx_r0.gytreeImpactData.left_section.desc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.left_section == null ? null : ctx_r0.gytreeImpactData.left_section.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.top_section == null ? null : ctx_r0.gytreeImpactData.top_section.desc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.top_section == null ? null : ctx_r0.gytreeImpactData.top_section.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.bottom_section == null ? null : ctx_r0.gytreeImpactData.bottom_section.desc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.bottom_section == null ? null : ctx_r0.gytreeImpactData.bottom_section.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.right_section == null ? null : ctx_r0.gytreeImpactData.right_section.desc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.gytreeImpactData == null ? null : ctx_r0.gytreeImpactData.right_section == null ? null : ctx_r0.gytreeImpactData.right_section.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/gytree-impact/svg/bg-bottom.svg");
  }
}
let GytreeImpactComponent = /*#__PURE__*/(() => {
  var _class;
  class GytreeImpactComponent {
    constructor() {
      this.gytreeImpactData = [];
    }
  }
  _class = GytreeImpactComponent;
  _class.ɵfac = function GytreeImpactComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-gytree-impact"]],
    inputs: {
      gytreeImpactData: "gytreeImpactData"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "py-10", "impact-section"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "grid", "2xl:w-[70%]", "mx-auto", "md:grid-cols-2", "px-3"], [1, "flex", "flex-col", "h-full", "justify-center", "md:w-[80%]"], [1, "text-theme-brown", "font-lora", "text-center", "md:text-left", "text-2xl", "md:text-[30px]", "font-extrabold"], [1, "py-4", "font-normal", "text-center", "md:text-left", "text-xl", "md:text-[24px]", "font-roboto", "leading-tight"], [1, "relative"], [1, "absolute", "left-4", "md:left-[40px]", "top-[50%]", 3, "inlineSVG"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/gytree-impact/svg/bg-top.svg", 1, "absolute", "w-12", "top-3", "right-8"], ["alt", "", 1, "w-3/4", "mx-auto", "md:w-auto", 3, "src"], [1, "absolute", "inset-0", "w-full", "h-full", "text-center"], [1, "absolute", "animate-[shake-y]", "animate-infinite", "animate-duration-[3000ms]", "animate-ease-linear", "p-3", "md:p-4", "w-[140px]", "md:w-[190px]", "lg:w-[210px]", "top-24", "shadow-2xl", "md:top-[100px]", "left-0", "md:-left-[4.5rem]", "lg:left-0", "bg-white", "rounded-2xl"], [1, "mb-1", "text-2xl", "font-bold", "text-theme-brown", "font-lora", "md:text-3xl"], [1, "text-xs", "leading-tight", "capitalize", "md:text-base", "lg:text-lg", "text-theme-light-grey", "font-roboto"], [1, "absolute", "animate-[shake-y]", "animate-infinite", "animate-duration-[3000ms]", "animate-ease-linear", "p-3", "md:p-4", "w-[140px]", "md:w-[175px]", "lg:w-[185px]", "top-20", "md:top-[120px]", "-right-3", "md:-right-5", "lg:right-[1rem]", "bg-white", "shadow-2xl", "rounded-2xl"], [1, "absolute", "animate-[shake-y-reverse]", "animate-infinite", "animate-duration-[3000ms]", "animate-ease-linear", "p-2.5", "md:p-4", "w-[140px]", "md:w-[180px]", "lg:w-[220px]", "bottom-11", "md:bottom-[60px]", "left-0", "md:-left-[60px]", "lg:left-[9px]", "bg-white", "shadow-2xl", "rounded-2xl"], [1, "absolute", "animate-[shake-y-reverse]", "animate-infinite", "animate-duration-[3000ms]", "animate-ease-linear", "p-3", "md:p-4", "w-[140px]", "md:w-[180px]", "lg:w-[200px]", "bottom-16", "md:bottom-[45px]", "right-0", "md:-right-1", "lg:right-2", "bg-white", "shadow-2xl", "rounded-2xl"], [1, "absolute", "z-0", "right-[89px]", "bottom-[23px]", 3, "inlineSVG"]],
    template: function GytreeImpactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GytreeImpactComponent_div_1_Template, 33, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gytreeImpactData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective],
    encapsulation: 2
  });
  return GytreeImpactComponent;
})();


/***/ }),

/***/ 3986:
/*!**********************************************************!*\
  !*** ./src/app/modules/employers/employers.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployersComponent: () => (/* binding */ EmployersComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _shared_services_gytree_impact_list_gytree_impact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/gytree-impact-list/gytree-impact-list.service */ 2907);
/* harmony import */ var _shared_services_faq_list_faq_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/faq-list/faq-list.service */ 44447);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/products-list/products-list.service */ 52630);
/* harmony import */ var _shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/employer-list/employer-list.service */ 98034);
/* harmony import */ var _shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/testimonial-list/testimonial-list.service */ 32939);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/meta-tags/meta-tags.service */ 79412);
/* harmony import */ var _home_components_gytree_clients_gytree_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/components/gytree-clients/gytree-clients.component */ 54154);
/* harmony import */ var _home_components_gytree_faq_gytree_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/components/gytree-faq/gytree-faq.component */ 6757);
/* harmony import */ var _components_benefits_benefits_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/benefits/benefits.component */ 31411);
/* harmony import */ var _components_condition_we_treat_condition_we_treat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/condition-we-treat/condition-we-treat.component */ 68787);
/* harmony import */ var _components_gytree_impact_gytree_impact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gytree-impact/gytree-impact.component */ 86291);
/* harmony import */ var _components_employers_hero_section_employers_hero_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employers-hero-section/employers-hero-section.component */ 20461);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 16090);
/* harmony import */ var _components_employers_testimonials_employers_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/employers-testimonials/employers-testimonials.component */ 38243);
/* harmony import */ var _components_employers_stastics_employers_stastics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/employers-stastics/employers-stastics.component */ 53713);
/* harmony import */ var _components_employers_about_employers_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/employers-about/employers-about.component */ 12056);





















let EmployersComponent = /*#__PURE__*/(() => {
  var _class;
  class EmployersComponent {
    constructor(GetData, impactListService, faqListService, pageListService, productsDataService, employerListService, testimonialService, titleService, metaService, metaTagsService) {
      this.GetData = GetData;
      this.impactListService = impactListService;
      this.faqListService = faqListService;
      this.pageListService = pageListService;
      this.productsDataService = productsDataService;
      this.employerListService = employerListService;
      this.testimonialService = testimonialService;
      this.titleService = titleService;
      this.metaService = metaService;
      this.metaTagsService = metaTagsService;
      this.subscriptions = [];
      this.gytreeImpactList = [];
      this.ProductData = [];
      this.statistics = [];
      this.employerData = [];
      this.servicesData = [];
      this.testimonialList = [];
      this.faqsData = [];
      this.isDataVisible = {
        gytreeImpact: false,
        gytreeFaq: false,
        gytreeClient: false,
        gytreeTestimonial: false
      };
      this.GetData.FeatureIn.subscribe(res => {
        this.ProductData = res;
      });
    }
    /**
     * Method to scroll data
     */
    onScroll(e) {
      this.allScrollEvents();
    }
    ngOnInit() {
      this.getemployeeData();
      this.getTestimonialList();
      // this.getProductsData();
      this.getFaq();
      this.getUserServices();
    }
    /**
     * Method to all scroll data
     */
    allScrollEvents() {
      // this.getGytreeProductScrollEvent();
      // this.getFaqScrollEvent();
      // this.getTestimonialScrollEvent();
    }
    /**
     * Method to get employee data
     */
    getemployeeData() {
      this.pageListService.getBannerList('employer').subscribe(resp => {
        this.employerData = resp?.data?.data;
        this.bannerData = this.employerData;
        this.statistics = this.employerData?.emplr_outcome;
        this.employeeBenifitData = this.employerData?.emplr_benefit;
        this.benefits = this.employerData?.emplr_benefit?.data;
        this.employeeAboutData = this.employerData.emplr_info;
        this.employeeWeTreatData = this.employerData.gtmp_value?.we_treat;
        this.testimonialData = this.employerData?.emplr_testimonial;
        var newArr = [];
        for (var i = 0; i < this.benefits?.length; i += 2) {
          newArr.push(this.benefits?.slice(i, i + 2));
        }
        this.benefits = {
          ...this.benefits,
          first_provides: newArr
        };
        this.gytreeImpactList = this.employerData?.emplr_trust_gytree;
        // this.gytreeImpactList?.data?.findIndex((element, index) => {
        //     if (index == 0) {
        //         element.addittionalClass =
        //             'absolute animate-[shake-y] animate-infinite animate-duration-[3000ms] animate-ease-linear p-3 md:p-4 w-[140px] md:w-[190px] lg:w-[210px] top-24 shadow-2xl md:top-[100px] left-0 md:-left-[4.5rem] lg:left-0 bg-white rounded-2xl';
        //     } else if (index == 1) {
        //         element.addittionalClass =
        //             'absolute animate-[shake-y] animate-infinite animate-duration-[3000ms] animate-ease-linear p-3 md:p-4 w-[140px] md:w-[175px] lg:w-[185px] top-20 md:top-[120px] -right-3 md:-right-5 lg:right-[1rem] bg-white shadow-2xl rounded-2xl';
        //     } else if (index == 2) {
        //         element.addittionalClass =
        //             'absolute animate-[shake-y-reverse] animate-infinite animate-duration-[3000ms] animate-ease-linear p-2.5 md:p-4 w-[140px] md:w-[180px] lg:w-[220px] bottom-11 md:bottom-[60px] left-0 md:-left-[60px] lg:left-[9px] bg-white shadow-2xl rounded-2xl';
        //     } else if (index == 3) {
        //         element.addittionalClass =
        //             'absolute animate-[shake-y-reverse] animate-infinite animate-duration-[3000ms] animate-ease-linear p-3 md:p-4 w-[140px] md:w-[180px] lg:w-[200px] bottom-16 md:bottom-[45px] right-0 md:-right-1 lg:right-2 bg-white shadow-2xl rounded-2xl';
        //     }
        // });
        this.setMetaTagAndTitle();
      });
    }
    getGytreeProductScrollEvent() {
      var offsets = document.getElementById('gytree-client-employer-block').getBoundingClientRect();
      var top = offsets.top;
      if (top < 1300 && !this.isDataVisible.gytreeClient) {
        this.GetData.storedHomeData.subscribe(res => {
          if (!res?.gytreeClient || res?.gytreeClient === null) {
            this.getProductsData();
          } else {
            this.gytreeClient = res?.gytreeClient;
          }
        });
        this.isDataVisible.gytreeClient = true;
      }
    }
    /**
     * Method to get products data
     */
    getTestimonialScrollEvent() {
      var offsets = document.getElementById('gytree-testimonial-block').getBoundingClientRect();
      var top = offsets.top;
      if (top < 1200 && !this.isDataVisible.gytreeTestimonial) {
        this.GetData.storedHomeData.subscribe(res => {
          if (!res?.gytreeTestimonial || res?.gytreeTestimonial === null) {
            this.getTestimonialList();
          } else {
            this.testimonialList = res?.gytreeMembership;
          }
        });
        this.isDataVisible.gytreeTestimonial = true;
      }
    }
    /**
     * Method to get Testimonial Data
     */
    getTestimonialList() {
      let payload = {};
      this.pageListService.getTestimonialEmployerList('employer').subscribe(res => {
        this.testimonialList = res?.data?.data;
      });
    }
    /**
     * Method to get products data
     */
    getProductsData() {
      this.pageListService.getBannerList('feature-in').subscribe(resp => {
        this.ProductData = resp?.data?.data;
      });
    }
    getFaqScrollEvent() {
      var offsets = document.getElementById('gytree-faq-employer-block').getBoundingClientRect();
      var top = offsets.top;
      if (top < 1500 && !this.isDataVisible.gytreeFaq) {
        this.GetData.storedHomeData.subscribe(res => {
          if (!res?.gytreeFaq || res?.gytreeFaq === null) {
            this.getFaq();
          } else {
            this.faqsData = res?.gytreeFaq;
          }
        });
        this.isDataVisible.gytreeFaq = true;
      }
    }
    /**
     * Method to get FAQS data
     */
    getFaq() {
      this.pageListService.getFaqList('Employers').subscribe(res => {
        if (res?.success) {
          this.faqsData = res?.data?.data;
          this.faqsData.forEach(element => {
            element.open = false;
            element.height = 0;
          });
        }
      });
    }
    getUserServices() {
      this.pageListService.getMasterUserList('service').subscribe(resp => {
        this.employeeWeTreatData = resp?.data?.data;
      });
    }
    /**
    * Meta tag and title
    */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Employers',
        metaTitle: this.employerData?.emplr_meta?.meta_title,
        metaDescription: this.employerData?.emplr_meta?.meta_desc,
        metaKeyword: this.employerData?.emplr_meta?.meta_keywords,
        metaImage: this.employerData?.emplr_meta?.meta_image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
    }
    /**
     * Clear subscriptions when component complete the process
     */
    ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }
  _class = EmployersComponent;
  _class.ɵfac = function EmployersComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_gytree_impact_list_gytree_impact_list_service__WEBPACK_IMPORTED_MODULE_2__.GytreeImpactListService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_faq_list_faq_list_service__WEBPACK_IMPORTED_MODULE_3__.FaqListService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_5__.ProductsListService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_6__.EmployerListService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_7__.TestimonialListService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_8__.MetaTagsService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-employers"]],
    hostBindings: function EmployersComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("scroll", function EmployersComponent_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresolveWindow"]);
      }
    },
    decls: 10,
    vars: 12,
    consts: [[1, "block", "lg:pt-[85px]", 3, "bannerData"], [1, "block", 3, "statistics"], [1, "block", "bg-theme-bg-light-green-shade-1", "py-8", "mt-2", "md:mt-6", 3, "employeeAboutData"], [1, "block", 3, "employerData", "benefits"], [1, "block", 3, "employeeWeTreatData", "bannerData"], ["id", "gytree-impact-employer-block", 1, "block", 3, "gytreeImpactData"], ["id", "gytree-testimonial-block", 1, "block", 3, "testimonialData", "testimonialConfig"], ["id", "gytree-client-employer-block", 1, "block", 3, "ProductListData"], ["id", "gytree-faq-employer-block", 1, "block", 3, "faqs"], [1, "block"]],
    template: function EmployersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-employers-hero-section", 0)(1, "app-employers-stastics", 1)(2, "app-employers-about", 2)(3, "app-benefits", 3)(4, "app-condition-we-treat", 4)(5, "app-gytree-impact", 5)(6, "app-employers-testimonials", 6)(7, "app-gytree-clients", 7)(8, "app-gytree-faq", 8)(9, "app-contact-form", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bannerData", ctx.bannerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("statistics", ctx.statistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("employeeAboutData", ctx.employeeAboutData);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("employerData", ctx.employeeBenifitData)("benefits", ctx.benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("employeeWeTreatData", ctx.employeeWeTreatData)("bannerData", ctx.bannerData == null ? null : ctx.bannerData.emplr_service);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("gytreeImpactData", ctx.gytreeImpactList);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("testimonialData", ctx.testimonialList)("testimonialConfig", ctx.testimonialData);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ProductListData", ctx.ProductData);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("faqs", ctx.faqsData);
      }
    },
    dependencies: [_home_components_gytree_clients_gytree_clients_component__WEBPACK_IMPORTED_MODULE_9__.GytreeClientsComponent, _home_components_gytree_faq_gytree_faq_component__WEBPACK_IMPORTED_MODULE_10__.GytreeFaqComponent, _components_benefits_benefits_component__WEBPACK_IMPORTED_MODULE_11__.BenefitsComponent, _components_condition_we_treat_condition_we_treat_component__WEBPACK_IMPORTED_MODULE_12__.ConditionWeTreatComponent, _components_gytree_impact_gytree_impact_component__WEBPACK_IMPORTED_MODULE_13__.GytreeImpactComponent, _components_employers_hero_section_employers_hero_section_component__WEBPACK_IMPORTED_MODULE_14__.EmployersHeroSectionComponent, _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__.ContactFormComponent, _components_employers_testimonials_employers_testimonials_component__WEBPACK_IMPORTED_MODULE_16__.EmployersTestimonialsComponent, _components_employers_stastics_employers_stastics_component__WEBPACK_IMPORTED_MODULE_17__.EmployersStasticsComponent, _components_employers_about_employers_about_component__WEBPACK_IMPORTED_MODULE_18__.EmployersAboutComponent],
    encapsulation: 2
  });
  return EmployersComponent;
})();


/***/ }),

/***/ 11740:
/*!*******************************************************!*\
  !*** ./src/app/modules/employers/employers.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployersModule: () => (/* binding */ EmployersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _employers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//employers.component */ 3986);
/* harmony import */ var _components_benefits_benefits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/benefits/benefits.component */ 31411);
/* harmony import */ var _components_condition_we_treat_condition_we_treat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/condition-we-treat/condition-we-treat.component */ 68787);
/* harmony import */ var _components_gytree_impact_gytree_impact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gytree-impact/gytree-impact.component */ 86291);
/* harmony import */ var _components_employers_hero_section_employers_hero_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employers-hero-section/employers-hero-section.component */ 20461);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 16090);
/* harmony import */ var src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/image-lazy-load/image-lazy-load.module */ 1914);
/* harmony import */ var src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/intl-phn-input/public_api */ 65856);
/* harmony import */ var src_app_shared_form_validation_template_form_validation_template_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/form-validation-template/form-validation-template.module */ 64769);
/* harmony import */ var _home_components_gytree_clients_gytree_clients_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/components/gytree-clients/gytree-clients.module */ 16920);
/* harmony import */ var _home_components_gytree_faq_gytree_home_faq_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/components/gytree-faq/gytree-home-faq.module */ 74946);
/* harmony import */ var _components_employers_testimonials_employers_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/employers-testimonials/employers-testimonials.component */ 38243);
/* harmony import */ var _home_components_gytree_testimonial_gytree_testimonial_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home/components/gytree-testimonial/gytree-testimonial.module */ 95252);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-circle-progress */ 33932);
/* harmony import */ var _components_employers_stastics_employers_stastics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employers-stastics/employers-stastics.component */ 53713);
/* harmony import */ var _components_employers_about_employers_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/employers-about/employers-about.component */ 12056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 78371);



// External modules


// components



















const routes = [{
  path: '',
  component: _employers_component__WEBPACK_IMPORTED_MODULE_1__.EmployersComponent
}];
let EmployersModule = /*#__PURE__*/(() => {
  var _class;
  class EmployersModule {}
  _class = EmployersModule;
  _class.ɵfac = function EmployersModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), ngx_splide__WEBPACK_IMPORTED_MODULE_19__.NgxSplideModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_7__.ImageLazyLoadModule, src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_8__.NgxIntlTelInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, src_app_shared_form_validation_template_form_validation_template_module__WEBPACK_IMPORTED_MODULE_9__.FormValidationTemplateModule, _home_components_gytree_clients_gytree_clients_module__WEBPACK_IMPORTED_MODULE_10__.HomeGytreeClientsModule, _home_components_gytree_faq_gytree_home_faq_module__WEBPACK_IMPORTED_MODULE_11__.HomeGytreeFaqModule, _home_components_gytree_testimonial_gytree_testimonial_module__WEBPACK_IMPORTED_MODULE_13__.gytreeTestimonialModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__.NgCircleProgressModule.forRoot({})]
  });
  return EmployersModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](EmployersModule, {
    declarations: [_employers_component__WEBPACK_IMPORTED_MODULE_1__.EmployersComponent, _components_benefits_benefits_component__WEBPACK_IMPORTED_MODULE_2__.BenefitsComponent, _components_condition_we_treat_condition_we_treat_component__WEBPACK_IMPORTED_MODULE_3__.ConditionWeTreatComponent, _components_gytree_impact_gytree_impact_component__WEBPACK_IMPORTED_MODULE_4__.GytreeImpactComponent, _components_employers_hero_section_employers_hero_section_component__WEBPACK_IMPORTED_MODULE_5__.EmployersHeroSectionComponent, _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__.ContactFormComponent, _components_employers_testimonials_employers_testimonials_component__WEBPACK_IMPORTED_MODULE_12__.EmployersTestimonialsComponent, _components_employers_stastics_employers_stastics_component__WEBPACK_IMPORTED_MODULE_14__.EmployersStasticsComponent, _components_employers_about_employers_about_component__WEBPACK_IMPORTED_MODULE_15__.EmployersAboutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, ngx_splide__WEBPACK_IMPORTED_MODULE_19__.NgxSplideModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_7__.ImageLazyLoadModule, src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_8__.NgxIntlTelInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, src_app_shared_form_validation_template_form_validation_template_module__WEBPACK_IMPORTED_MODULE_9__.FormValidationTemplateModule, _home_components_gytree_clients_gytree_clients_module__WEBPACK_IMPORTED_MODULE_10__.HomeGytreeClientsModule, _home_components_gytree_faq_gytree_home_faq_module__WEBPACK_IMPORTED_MODULE_11__.HomeGytreeFaqModule, _home_components_gytree_testimonial_gytree_testimonial_module__WEBPACK_IMPORTED_MODULE_13__.gytreeTestimonialModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 54154:
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-clients/gytree-clients.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GytreeClientsComponent: () => (/* binding */ GytreeClientsComponent)
/* harmony export */ });
/* harmony import */ var _gytree_clients_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gytree-clients.constant */ 33396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);





function GytreeClientsComponent_splide_slide_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const textSlide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](textSlide_r2 == null ? null : textSlide_r2.fip_desc);
  }
}
function GytreeClientsComponent_splide_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 10)(2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const logoSlide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", logoSlide_r3 == null ? null : logoSlide_r3.fip_inactive_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", logoSlide_r3 == null ? null : logoSlide_r3.fip_active_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    "border-b-2 border-theme-ligher-pink": a0
  };
};
let GytreeClientsComponent = /*#__PURE__*/(() => {
  var _class;
  class GytreeClientsComponent {
    constructor(cdr) {
      this.cdr = cdr;
      this.clientSliderLogos = _gytree_clients_constant__WEBPACK_IMPORTED_MODULE_0__.CLIENT_SLIDER_LOGOS_CONFIG;
      this.clientSliderText = _gytree_clients_constant__WEBPACK_IMPORTED_MODULE_0__.CLIENT_SLIDER_TEXT_CONFIG;
    }
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }
    onMove(event) {
      this.selectedSlideIndex = event[0];
      this.cdr.detectChanges();
    }
  }
  _class = GytreeClientsComponent;
  _class.ɵfac = function GytreeClientsComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-gytree-clients"]],
    inputs: {
      ProductListData: "ProductListData",
      saparator: "saparator"
    },
    decls: 10,
    vars: 9,
    consts: [[1, "pt-5", "pb-10", "sm:py-16", 3, "ngClass"], [1, "container"], [1, "flex", "flex-col-reverse"], [1, "relative", "w-[65%]", "lg:w-1/2", "pt-10", "pb-5", "sm:py-16", "mx-auto", "text-center", "img", "font-roboto"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/clients/quote.svg", 1, "absolute", "-left-10", "md:-left-12", "top-6", "md:top-12", "w-7", "h-7", "md:w-[41px]", "md:h-[36px]"], [1, "client-text-slider", "pink-colored-pagination", 3, "selectedSlideIndex", "options", "onMove"], [4, "ngFor", "ngForOf"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/clients/glitter.svg", 1, "absolute", "top-24", "md:top-25", "-right-16", "lg:-right-40", "w-7", "h-7", "md:w-[50px]", "md:h-[47px]"], [1, "client-logo-slider", 3, "selectedSlideIndex", "options", "onMove"], [1, "text-sm", "sm:text-lg", "lg:text-2xl"], [1, "flex", "justify-center", "h-auto", "md:h-[150px]", "px-3", "max-w-full", "logo-slide-default", 3, "src"], [1, "flex", "justify-center", "h-auto", "md:h-[150px]", "px-3", "max-w-full", "logo-slide-active", 3, "src"]],
    template: function GytreeClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "splide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onMove", function GytreeClientsComponent_Template_splide_onMove_5_listener($event) {
          return ctx.onMove($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, GytreeClientsComponent_splide_slide_6_Template, 3, 1, "splide-slide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "splide", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onMove", function GytreeClientsComponent_Template_splide_onMove_8_listener($event) {
          return ctx.onMove($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, GytreeClientsComponent_splide_slide_9_Template, 3, 2, "splide-slide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.saparator));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedSlideIndex", ctx.selectedSlideIndex)("options", ctx.clientSliderText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ProductListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedSlideIndex", ctx.selectedSlideIndex)("options", ctx.clientSliderLogos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ProductListData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideSlideComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective],
    encapsulation: 2
  });
  return GytreeClientsComponent;
})();


/***/ }),

/***/ 33396:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-clients/gytree-clients.constant.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_SLIDER_LOGOS_CONFIG: () => (/* binding */ CLIENT_SLIDER_LOGOS_CONFIG),
/* harmony export */   CLIENT_SLIDER_TEXT_CONFIG: () => (/* binding */ CLIENT_SLIDER_TEXT_CONFIG)
/* harmony export */ });
const CLIENT_SLIDER_LOGOS_CONFIG = {
  //rewind: true,
  type: "loop",
  arrows: false,
  pagination: false,
  center: true,
  focus: 'center',
  perPage: 5,
  cover: true,
  isNavigation: true,
  drag: false,
  breakpoints: {
    1280: {
      perPage: 4
    },
    1024: {
      perPage: 3
    },
    768: {
      perPage: 2
    },
    640: {
      padding: 70,
      autoplay: true,
      interval: 3000,
      perPage: 1
    }
  }
};
const CLIENT_SLIDER_TEXT_CONFIG = {
  type: 'fade',
  drag: false,
  arrows: false,
  cover: true
};

/***/ }),

/***/ 16920:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-clients/gytree-clients.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeGytreeClientsModule: () => (/* binding */ HomeGytreeClientsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _gytree_clients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gytree-clients.component */ 54154);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);





let HomeGytreeClientsModule = /*#__PURE__*/(() => {
  var _class;
  class HomeGytreeClientsModule {}
  _class = HomeGytreeClientsModule;
  _class.ɵfac = function HomeGytreeClientsModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule]
  });
  return HomeGytreeClientsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeGytreeClientsModule, {
    declarations: [_gytree_clients_component__WEBPACK_IMPORTED_MODULE_0__.GytreeClientsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule],
    exports: [_gytree_clients_component__WEBPACK_IMPORTED_MODULE_0__.GytreeClientsComponent]
  });
})();

/***/ }),

/***/ 6757:
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-faq/gytree-faq.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GytreeFaqComponent: () => (/* binding */ GytreeFaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);




function GytreeFaqComponent_ng_container_8_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function GytreeFaqComponent_ng_container_8_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 18)(2, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "height": a0,
    "opacity": a1
  };
};
function GytreeFaqComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GytreeFaqComponent_ng_container_8_div_1_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const index_r2 = ctx_r7.index;
      const faq_r1 = ctx_r7.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r6.accordionClick(index_r2);
      ctx_r6.trackingWebEnagege("FAQs clicks", faq_r1 == null ? null : faq_r1.gtf_que);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.eventTracking("FAQs clicks", faq_r1 == null ? null : faq_r1.gtf_que));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GytreeFaqComponent_ng_container_8_div_1__svg_svg_4_Template, 2, 0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GytreeFaqComponent_ng_container_8_div_1__svg_svg_5_Template, 3, 0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13)(7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const faq_r1 = ctx_r9.$implicit;
    const index_r2 = ctx_r9.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", faq_r1 == null ? null : faq_r1.faqc_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", faq_r1 == null ? null : faq_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(faq_r1 == null ? null : faq_r1.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, (faq_r1 == null ? null : faq_r1.height) + "px", (faq_r1 == null ? null : faq_r1.open) ? "1" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "para-", index_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", faq_r1 == null ? null : faq_r1.faqc_desc, " ");
  }
}
function GytreeFaqComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GytreeFaqComponent_ng_container_8_div_1_Template, 9, 9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r2 < 3);
  }
}
let GytreeFaqComponent = /*#__PURE__*/(() => {
  var _class;
  class GytreeFaqComponent {
    constructor(router, eventTrackingService) {
      this.router = router;
      this.eventTrackingService = eventTrackingService;
      // faqs: any = FAQS;
      this.faqs = [];
    }
    /**
     * accordian click event
     */
    accordionClick(index) {
      if (this.faqs[index]?.open === true) {
        this.faqs[index].open = false;
        this.faqs[index].height = 0;
        return;
      }
      this.faqs?.forEach(faq => {
        faq.open = false;
        faq.height = 0;
      });
      this.faqs[index].open = true;
      this.faqs[index].height = document.getElementById(`para-${index}`).clientHeight;
    }
    viewAllFaq() {
      this.router.navigate(['/faqs']);
    }
    trackingWebEnagege(event, value) {
      this.eventTrackingService.trackWebEnagegeEvent(event, value);
    }
    eventTracking(event, value) {
      this.eventTrackingService.trackEvent(event, value);
    }
  }
  _class = GytreeFaqComponent;
  _class.ɵfac = function GytreeFaqComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_0__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-gytree-faq"]],
    inputs: {
      faqs: "faqs"
    },
    decls: 9,
    vars: 1,
    consts: [[1, "pb-10", "faq-section", "md:pb-20"], [1, "mx-auto", "md:container", "lg:pt-4"], [1, "faq-details", "font-roboto", "text-lg", "md:text-2xl", "md:w-[60%]", "mx-auto", "text-theme-brown", "px-5", "md:px-0", "pt-5", "md:pt-0"], [1, "flex", "items-center", "justify-between", "w-full"], [1, "py-3", "md:py-8", "text-theme-brown", "font-lora", "md:text-[30px]", "font-extrabold", "faq", "text-center"], [1, "lg:text-[23px]", "sm:text-[20px]", "text-[16px]", "hover:underline", "hover:duration-75", "cursor-pointer", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "border-b-[2px] border-theme-ligher-pink last:border-b-0", 4, "ngIf"], [1, "border-b-[2px]", "border-theme-ligher-pink", "last:border-b-0"], [1, "px-2", "py-3", "md:px-4", "md:py-6"], [1, "flex", "items-center", "justify-between", "leading-tight", "cursor-pointer", 3, "click"], ["class", "cursor-pointer flex-shrink-0 w-3 h-1.5 sm:w-5 sm:h-2.5", "viewBox", "0 0 24 4", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "flex-shrink-0 w-3 h-3 cursor-pointer sm:w-6 sm:h-6", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "overflow-hidden", "text-base", "text-black", "transition-all", "duration-700", "md:text-2xl", "paragraph", "font-roboto", 3, "ngStyle"], [1, "px-4", "py-1.5", "md:px-6", "md:py-3", 3, "id"], ["viewBox", "0 0 24 4", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "cursor-pointer", "flex-shrink-0", "w-3", "h-1.5", "sm:w-5", "sm:h-2.5"], ["d", "M2 2L22 2", "stroke", "#581E1E", "stroke-width", "3", "stroke-linecap", "round"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "flex-shrink-0", "w-3", "h-3", "cursor-pointer", "sm:w-6", "sm:h-6"], ["d", "M12 2L12 22", "stroke", "#581E1E", "stroke-width", "3", "stroke-linecap", "round"], ["d", "M2 12L22 12", "stroke", "#581E1E", "stroke-width", "3", "stroke-linecap", "round"]],
    template: function GytreeFaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "FAQs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GytreeFaqComponent_Template_a_click_6_listener() {
          ctx.viewAllFaq();
          ctx.trackingWebEnagege("FAQs clicks", "view all");
          return ctx.eventTracking("FAQs clicks", "view all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GytreeFaqComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faqs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
    encapsulation: 2
  });
  return GytreeFaqComponent;
})();


/***/ }),

/***/ 74946:
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-faq/gytree-home-faq.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeGytreeFaqModule: () => (/* binding */ HomeGytreeFaqModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _gytree_faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gytree-faq.component */ 6757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);





let HomeGytreeFaqModule = /*#__PURE__*/(() => {
  var _class;
  class HomeGytreeFaqModule {}
  _class = HomeGytreeFaqModule;
  _class.ɵfac = function HomeGytreeFaqModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule]
  });
  return HomeGytreeFaqModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeGytreeFaqModule, {
    declarations: [_gytree_faq_component__WEBPACK_IMPORTED_MODULE_1__.GytreeFaqComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule],
    exports: [_gytree_faq_component__WEBPACK_IMPORTED_MODULE_1__.GytreeFaqComponent]
  });
})();

/***/ }),

/***/ 28395:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-testimonial/gytree-testimonial.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GytreeTestimonialComponent: () => (/* binding */ GytreeTestimonialComponent)
/* harmony export */ });
/* harmony import */ var _gytree_testimonial_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gytree-testimonial.constant */ 52370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);





function GytreeTestimonialComponent_splide_slide_9_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r1 == null ? null : slide_r1.gif, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function GytreeTestimonialComponent_splide_slide_9_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function GytreeTestimonialComponent_splide_slide_9_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function GytreeTestimonialComponent_splide_slide_9_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GytreeTestimonialComponent_splide_slide_9_ng_container_10_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r5 - 0.5 <= slide_r1.tstm_rating);
  }
}
function GytreeTestimonialComponent_splide_slide_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GytreeTestimonialComponent_splide_slide_9_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GytreeTestimonialComponent_splide_slide_9_ng_container_10_ng_container_2_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r5 <= slide_r1.tstm_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r5 > slide_r1.tstm_rating);
  }
}
function GytreeTestimonialComponent_splide_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, GytreeTestimonialComponent_splide_slide_9_img_4_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13)(6, "div", 14)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, GytreeTestimonialComponent_splide_slide_9_ng_container_10_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (slide_r1 == null ? null : slide_r1.tstm_image) || "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/placeholder/image/placeholder.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", slide_r1 == null ? null : slide_r1.gif);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/testimonial/svg/custom.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.feedBackStar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r1 == null ? null : slide_r1.tstm_desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", slide_r1 == null ? null : slide_r1.tstm_name, "");
  }
}
let GytreeTestimonialComponent = /*#__PURE__*/(() => {
  var _class;
  class GytreeTestimonialComponent {
    constructor() {
      this.splideConfig = _gytree_testimonial_constant__WEBPACK_IMPORTED_MODULE_0__.GYTREE_TESTIMONIAL_SLIDES_CONFIG;
      /**
       * rating data
       */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
  }
  _class = GytreeTestimonialComponent;
  _class.ɵfac = function GytreeTestimonialComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-gytree-testimonial"]],
    inputs: {
      testimonialData: "testimonialData",
      testimonialConfig: "testimonialConfig"
    },
    decls: 10,
    vars: 4,
    consts: [[1, "sm:container"], [1, "pt-6", "pb-12"], [1, "relative", "flex", "flex-col", "items-center"], [1, "text-theme-brown", "font-lora", "text-xl", "md:text-[30px]", "font-extrabold", "mb-3"], [1, "pb-8"], [1, "text-center", "text-base", "md:text-[23px]", "font-roboto", "leading-tight"], [1, "arrow-change", "testimonial-slider", 3, "options"], ["class", "grid grid-cols-1 p-10 md:grid-cols-4", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "p-10", "md:grid-cols-4"], [1, "slide-container", "transition-all", "rounded-2xl", "px-2", "2xl:px-6", "h-[450px]", "xl:h-[465px]"], [1, "group", "flex", "flex-wrap", "relative", "rounded-2xl", "h-full"], ["alt", "gallery", 1, "slide-img", "object-cover", "object-center", "w-full", "rounded-2xl", "h-full", "xl:h-[465px]", 3, "src"], ["alt", "gallery", "class", "slide-gif hidden object-cover object-center w-full rounded-2xl h-[450px] xl:h-[500px]", 3, "src", 4, "ngIf"], [1, "absolute", "top-0", "left-0", "w-full", "h-full", "rounded-2xl", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.8) 100%)"], [1, "flex", "flex-col", "justify-end", "h-full", "px-5", "py-4"], [1, "text-white", 3, "inlineSVG"], [1, "flex", "items-center", "py-4"], [4, "ngFor", "ngForOf"], [1, "text-[15px]", "text-white", "font-light"], [1, "text-[11px]", "text-white", "font-light", "py-2"], ["alt", "gallery", 1, "slide-gif", "hidden", "object-cover", "object-center", "w-full", "rounded-2xl", "h-[450px]", "xl:h-[500px]", 3, "src"], [4, "ngIf"], [1, "block", "w-5", "h-5", "text-[goldenrod]", 3, "inlineSVG"], ["src", "https://image.gytree.com/assets/media/gaytree/feedback-img/star-half.svg", "alt", "", 1, "rating5"]],
    template: function GytreeTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "splide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, GytreeTestimonialComponent_splide_slide_9_Template, 16, 6, "splide-slide", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testimonialConfig == null ? null : ctx.testimonialConfig.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.testimonialConfig == null ? null : ctx.testimonialConfig.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.splideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.testimonialData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideSlideComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective],
    encapsulation: 2
  });
  return GytreeTestimonialComponent;
})();


/***/ }),

/***/ 52370:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-testimonial/gytree-testimonial.constant.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GYTREE_TESTIMONIAL_SLIDES_CONFIG: () => (/* binding */ GYTREE_TESTIMONIAL_SLIDES_CONFIG)
/* harmony export */ });
const GYTREE_TESTIMONIAL_SLIDES_CONFIG = {
  perPage: 4,
  padding: 50,
  pagination: false,
  center: true,
  autoplay: true,
  interval: 3000,
  breakpoints: {
    1280: {
      perPage: 3
    },
    860: {
      perPage: 2,
      padding: 30
    },
    576: {
      type: 'loop',
      gap: 5,
      perPage: 1,
      padding: 35,
      arrows: false
    }
  }
};

/***/ }),

/***/ 95252:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-testimonial/gytree-testimonial.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gytreeTestimonialModule: () => (/* binding */ gytreeTestimonialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _gytree_testimonial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gytree-testimonial.component */ 28395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);





let gytreeTestimonialModule = /*#__PURE__*/(() => {
  var _class;
  class gytreeTestimonialModule {}
  _class = gytreeTestimonialModule;
  _class.ɵfac = function gytreeTestimonialModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule]
  });
  return gytreeTestimonialModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](gytreeTestimonialModule, {
    declarations: [_gytree_testimonial_component__WEBPACK_IMPORTED_MODULE_1__.GytreeTestimonialComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule],
    exports: [_gytree_testimonial_component__WEBPACK_IMPORTED_MODULE_1__.GytreeTestimonialComponent]
  });
})();

/***/ }),

/***/ 98034:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/services/employer-list/employer-list.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployerListService: () => (/* binding */ EmployerListService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let EmployerListService = /*#__PURE__*/(() => {
  var _class;
  class EmployerListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    // getMasterList(data) {
    //   const url = `${environment.apiUrls.baseUrlFe }master/${data}`;
    //   return this.get(url)
    // }
    postEmployerList(data) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlFe}inquiry/company-inquiry`;
      return this.post(url, data);
    }
  }
  _class = EmployerListService;
  _class.ɵfac = function EmployerListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return EmployerListService;
})();


/***/ }),

/***/ 44447:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/services/faq-list/faq-list.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqListService: () => (/* binding */ FaqListService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let FaqListService = /*#__PURE__*/(() => {
  var _class;
  class FaqListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    getAllFaq(type) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlFe}page/faq`;
      return this.get(url);
    }
    getAllFaqList() {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlFe}page/faq-content`;
      return this.get(url);
    }
  }
  _class = FaqListService;
  _class.ɵfac = function FaqListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return FaqListService;
})();


/***/ }),

/***/ 2907:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/shared/services/gytree-impact-list/gytree-impact-list.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GytreeImpactListService: () => (/* binding */ GytreeImpactListService)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);




let GytreeImpactListService = /*#__PURE__*/(() => {
  var _class;
  class GytreeImpactListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
  }
  _class = GytreeImpactListService;
  _class.ɵfac = function GytreeImpactListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return GytreeImpactListService;
})();


/***/ }),

/***/ 52630:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/services/products-list/products-list.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsListService: () => (/* binding */ ProductsListService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let ProductsListService = /*#__PURE__*/(() => {
  var _class;
  class ProductsListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    getShopProductList() {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlFe}master/product`;
      return this.get(url);
    }
  }
  _class = ProductsListService;
  _class.ɵfac = function ProductsListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return ProductsListService;
})();


/***/ }),

/***/ 32939:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/services/testimonial-list/testimonial-list.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialListService: () => (/* binding */ TestimonialListService)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);




let TestimonialListService = /*#__PURE__*/(() => {
  var _class;
  class TestimonialListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
  }
  _class = TestimonialListService;
  _class.ɵfac = function TestimonialListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return TestimonialListService;
})();


/***/ }),

/***/ 1914:
/*!******************************************************************!*\
  !*** ./src/app/shared/image-lazy-load/image-lazy-load.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageLazyLoadModule: () => (/* binding */ ImageLazyLoadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-load.directive */ 74717);
/* harmony import */ var _img_preloader_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-preloader.directive */ 92295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);




let ImageLazyLoadModule = /*#__PURE__*/(() => {
  var _class;
  class ImageLazyLoadModule {}
  _class = ImageLazyLoadModule;
  _class.ɵfac = function ImageLazyLoadModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
  return ImageLazyLoadModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ImageLazyLoadModule, {
    declarations: [_lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective, _img_preloader_directive__WEBPACK_IMPORTED_MODULE_1__.ImagePreloader],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_lazy_load_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective, _img_preloader_directive__WEBPACK_IMPORTED_MODULE_1__.ImagePreloader]
  });
})();

/***/ }),

/***/ 92295:
/*!*******************************************************************!*\
  !*** ./src/app/shared/image-lazy-load/img-preloader.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreloader: () => (/* binding */ ImagePreloader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);

let ImagePreloader = /*#__PURE__*/(() => {
  var _class;
  class ImagePreloader {
    onError() {
      this.onErrorImage();
    }
    constructor(_elemRef, cdr) {
      this._elemRef = _elemRef;
      this.cdr = cdr;
      // Set an input so the directive can set a default image.
      this.defaultImage = 'https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/logo/gytreeicon1.png';
    }
    ngOnInit() {
      this.finalImage = this.targetSource;
      this.finalImage = this.defaultImage;
      this.setHeightInSrc();
      // const isLocalImage = (this.targetSource.indexOf('./assets/') > -1);
      this.downloadingImage = document.createElement('img');
      this.downloadingImage.onload = () => {
        this.finalImage = this.targetSource;
        // if (isLocalImage) {
        //     this.finalImage = environment.bucketImageUrl + this.finalImage.replace('./assets', '');
        // }
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 100);
      };
      this.downloadingImage.onerror = () => {
        this.onErrorImage();
      };
      this.downloadingImage.src = this.targetSource;
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 100);
    }
    onErrorImage() {
      // const isLocalImage = (this.targetSource.indexOf('./assets/') > -1);
      // if (isLocalImage) {
      //     this.finalImage = this.targetSource || '';
      // } else {
      this.finalImage = this.defaultImage;
      // }
      this.setHeightInSrc();
    }
    setHeightInSrc(isRemove = false) {
      const el = this._elemRef.nativeElement;
      if (el) {
        if (isRemove) {
          el.setAttribute('style', 'height: auto');
        }
      }
      this.cdr.detectChanges();
    }
  }
  _class = ImagePreloader;
  _class.ɵfac = function ImagePreloader_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  _class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: _class,
    selectors: [["", "img-preloader", ""]],
    hostVars: 1,
    hostBindings: function ImagePreloader_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImagePreloader_error_HostBindingHandler() {
          return ctx.onError();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.finalImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrlOrResourceUrl"]);
      }
    },
    inputs: {
      targetSource: ["img-preloader", "targetSource"],
      errorImgSource: ["onErrorImage", "errorImgSource"],
      error: "error",
      defaultImage: "defaultImage"
    }
  });
  return ImagePreloader;
})();


/***/ }),

/***/ 33932:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-circle-progress/fesm2020/ng-circle-progress.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleProgressComponent: () => (/* binding */ CircleProgressComponent),
/* harmony export */   CircleProgressOptions: () => (/* binding */ CircleProgressOptions),
/* harmony export */   NgCircleProgressModule: () => (/* binding */ NgCircleProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2859);





function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "linearGradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5)(2, "stop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.svg.outerLinearGradient.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
  }
}
function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5)(2, "stop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.svg.radialGradient.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate2"]("fill", "url(", ctx_r9.window.location.href, "#", ctx_r9.svg.radialGradient.id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 8, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.options.backgroundGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.options.backgroundGradient);
  }
}
function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate2"]("stroke", "url(", ctx_r11.window.location.href, "#", ctx_r11.svg.outerLinearGradient.id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 6, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.options.outerStrokeGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.outerStrokeGradient);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tspan_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r16.span);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.svg.title.tspans);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.svg.units.text);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tspan_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r18.span);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.svg.subtitle.tspans);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showSubtitle);
  }
}
function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 9);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
  }
}
function CircleProgressComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleProgressComponent__svg_svg_0_Template__svg_svg_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.emitClickEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0.svg.viewBox)("height", ctx_r0.svg.height)("width", ctx_r0.svg.width)("class", ctx_r0.options.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.outerStrokeGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.backgroundGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showInnerStroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r0.options.percent !== 0 || ctx_r0.options.showZeroOuterStroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options.showImage && (ctx_r0.options.showTitle || ctx_r0.options.showUnits || ctx_r0.options.showSubtitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showImage);
  }
}
class CircleProgressOptions {
  constructor() {
    this.class = '';
    this.backgroundGradient = false;
    this.backgroundColor = 'transparent';
    this.backgroundGradientStopColor = 'transparent';
    this.backgroundOpacity = 1;
    this.backgroundStroke = 'transparent';
    this.backgroundStrokeWidth = 0;
    this.backgroundPadding = 5;
    this.percent = 0;
    this.radius = 90;
    this.space = 4;
    this.toFixed = 0;
    this.maxPercent = 1000;
    this.renderOnClick = true;
    this.units = '%';
    this.unitsFontSize = '10';
    this.unitsFontWeight = 'normal';
    this.unitsColor = '#444444';
    this.outerStrokeGradient = false;
    this.outerStrokeWidth = 8;
    this.outerStrokeColor = '#78C000';
    this.outerStrokeGradientStopColor = 'transparent';
    this.outerStrokeLinecap = 'round';
    this.innerStrokeColor = '#C7E596';
    this.innerStrokeWidth = 4;
    this.titleFormat = undefined;
    this.title = 'auto';
    this.titleColor = '#444444';
    this.titleFontSize = '20';
    this.titleFontWeight = 'normal';
    this.subtitleFormat = undefined;
    this.subtitle = 'progress';
    this.subtitleColor = '#A9A9A9';
    this.subtitleFontSize = '10';
    this.subtitleFontWeight = 'normal';
    this.imageSrc = undefined;
    this.imageHeight = 0;
    this.imageWidth = 0;
    this.animation = true;
    this.animateTitle = true;
    this.animateSubtitle = false;
    this.animationDuration = 500;
    this.showTitle = true;
    this.showSubtitle = true;
    this.showUnits = true;
    this.showImage = false;
    this.showBackground = true;
    this.showInnerStroke = true;
    this.clockwise = true;
    this.responsive = false;
    this.startFromZero = true;
    this.showZeroOuterStroke = true;
    this.lazy = false;
  }
}
let CircleProgressComponent = /*#__PURE__*/(() => {
  class CircleProgressComponent {
    constructor(defaultOptions, ngZone, elRef, injector) {
      this.ngZone = ngZone;
      this.elRef = elRef;
      this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      // <svg> of component
      this.svgElement = null;
      // whether <svg> is in viewport
      this.isInViewport = false;
      // event for notifying viewport change caused by scrolling or resizing
      this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._viewportChangedSubscriber = null;
      this.options = new CircleProgressOptions();
      this.defaultOptions = new CircleProgressOptions();
      this._lastPercent = 0;
      this._gradientUUID = null;
      this.render = () => {
        this.applyOptions();
        if (this.options.lazy) {
          // Draw svg if it doesn't exist
          this.svgElement === null && this.draw(this._lastPercent);
          // Draw it only when it's in the viewport
          if (this.isInViewport) {
            // Draw it at the latest position when I am in.
            if (this.options.animation && this.options.animationDuration > 0) {
              this.animate(this._lastPercent, this.options.percent);
            } else {
              this.draw(this.options.percent);
            }
            this._lastPercent = this.options.percent;
          }
        } else {
          if (this.options.animation && this.options.animationDuration > 0) {
            this.animate(this._lastPercent, this.options.percent);
          } else {
            this.draw(this.options.percent);
          }
          this._lastPercent = this.options.percent;
        }
      };
      this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        let angleInRadius = angleInDegrees * Math.PI / 180;
        let x = centerX + Math.sin(angleInRadius) * radius;
        let y = centerY - Math.cos(angleInRadius) * radius;
        return {
          x: x,
          y: y
        };
      };
      this.draw = percent => {
        // make percent reasonable
        percent = percent === undefined ? this.options.percent : Math.abs(percent);
        // circle percent shouldn't be greater than 100%.
        let circlePercent = percent > 100 ? 100 : percent;
        // determine box size
        let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
        if (this.options.showBackground) {
          boxSize += this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2);
        }
        // the centre of the circle
        let centre = {
          x: boxSize / 2,
          y: boxSize / 2
        };
        // the start point of the arc
        let startPoint = {
          x: centre.x,
          y: centre.y - this.options.radius
        };
        // get the end point of the arc
        let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ? circlePercent : 100 - circlePercent) / 100); // ####################
        // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
        if (circlePercent === 100) {
          endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
        }
        // largeArcFlag and sweepFlag
        let largeArcFlag, sweepFlag;
        if (circlePercent > 50) {
          [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
        } else {
          [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
        }
        // percent may not equal the actual percent
        let titlePercent = this.options.animateTitle ? percent : this.options.percent;
        let titleTextPercent = titlePercent > this.options.maxPercent ? `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
        let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
        // get title object
        let title = {
          x: centre.x,
          y: centre.y,
          textAnchor: 'middle',
          color: this.options.titleColor,
          fontSize: this.options.titleFontSize,
          fontWeight: this.options.titleFontWeight,
          texts: [],
          tspans: []
        };
        // from v0.9.9, both title and titleFormat(...) may be an array of string.
        if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
          let formatted = this.options.titleFormat(titlePercent);
          if (formatted instanceof Array) {
            title.texts = [...formatted];
          } else {
            title.texts.push(formatted.toString());
          }
        } else {
          if (this.options.title === 'auto') {
            title.texts.push(titleTextPercent);
          } else {
            if (this.options.title instanceof Array) {
              title.texts = [...this.options.title];
            } else {
              title.texts.push(this.options.title.toString());
            }
          }
        }
        // get subtitle object
        let subtitle = {
          x: centre.x,
          y: centre.y,
          textAnchor: 'middle',
          color: this.options.subtitleColor,
          fontSize: this.options.subtitleFontSize,
          fontWeight: this.options.subtitleFontWeight,
          texts: [],
          tspans: []
        };
        // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
        if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
          let formatted = this.options.subtitleFormat(subtitlePercent);
          if (formatted instanceof Array) {
            subtitle.texts = [...formatted];
          } else {
            subtitle.texts.push(formatted.toString());
          }
        } else {
          if (this.options.subtitle instanceof Array) {
            subtitle.texts = [...this.options.subtitle];
          } else {
            subtitle.texts.push(this.options.subtitle.toString());
          }
        }
        // get units object
        let units = {
          text: `${this.options.units}`,
          fontSize: this.options.unitsFontSize,
          fontWeight: this.options.unitsFontWeight,
          color: this.options.unitsColor
        };
        // get total count of text lines to be shown
        let rowCount = 0,
          rowNum = 1;
        this.options.showTitle && (rowCount += title.texts.length);
        this.options.showSubtitle && (rowCount += subtitle.texts.length);
        // calc dy for each tspan for title
        if (this.options.showTitle) {
          for (let span of title.texts) {
            title.tspans.push({
              span: span,
              dy: this.getRelativeY(rowNum, rowCount)
            });
            rowNum++;
          }
        }
        // calc dy for each tspan for subtitle
        if (this.options.showSubtitle) {
          for (let span of subtitle.texts) {
            subtitle.tspans.push({
              span: span,
              dy: this.getRelativeY(rowNum, rowCount)
            });
            rowNum++;
          }
        }
        // create ID for gradient element
        if (null === this._gradientUUID) {
          this._gradientUUID = this.uuid();
        }
        // Bring it all together
        this.svg = {
          viewBox: `0 0 ${boxSize} ${boxSize}`,
          // Set both width and height to '100%' if it's responsive
          width: this.options.responsive ? '100%' : boxSize,
          height: this.options.responsive ? '100%' : boxSize,
          backgroundCircle: {
            cx: centre.x,
            cy: centre.y,
            r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
            fill: this.options.backgroundColor,
            fillOpacity: this.options.backgroundOpacity,
            stroke: this.options.backgroundStroke,
            strokeWidth: this.options.backgroundStrokeWidth
          },
          path: {
            // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
            d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
            stroke: this.options.outerStrokeColor,
            strokeWidth: this.options.outerStrokeWidth,
            strokeLinecap: this.options.outerStrokeLinecap,
            fill: 'none'
          },
          circle: {
            cx: centre.x,
            cy: centre.y,
            r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
            fill: 'none',
            stroke: this.options.innerStrokeColor,
            strokeWidth: this.options.innerStrokeWidth
          },
          title: title,
          units: units,
          subtitle: subtitle,
          image: {
            x: centre.x - this.options.imageWidth / 2,
            y: centre.y - this.options.imageHeight / 2,
            src: this.options.imageSrc,
            width: this.options.imageWidth,
            height: this.options.imageHeight
          },
          outerLinearGradient: {
            id: 'outer-linear-' + this._gradientUUID,
            colorStop1: this.options.outerStrokeColor,
            colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor
          },
          radialGradient: {
            id: 'radial-' + this._gradientUUID,
            colorStop1: this.options.backgroundColor,
            colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor
          }
        };
      };
      this.getAnimationParameters = (previousPercent, currentPercent) => {
        const MIN_INTERVAL = 10;
        let times, step, interval;
        let fromPercent = this.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
        let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
        let delta = Math.abs(Math.round(toPercent - fromPercent));
        if (delta >= 100) {
          // we will finish animation in 100 times
          times = 100;
          if (!this.options.animateTitle && !this.options.animateSubtitle) {
            step = 1;
          } else {
            // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
            step = Math.round(delta / times);
          }
        } else {
          // we will finish in as many times as the number of percent.
          times = delta;
          step = 1;
        }
        // Get the interval of timer
        interval = Math.round(this.options.animationDuration / times);
        // Readjust all values if the interval of timer is extremely small.
        if (interval < MIN_INTERVAL) {
          interval = MIN_INTERVAL;
          times = this.options.animationDuration / interval;
          if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
            step = Math.round(100 / times);
          } else {
            step = Math.round(delta / times);
          }
        }
        // step must be greater than 0.
        if (step < 1) {
          step = 1;
        }
        return {
          times: times,
          step: step,
          interval: interval
        };
      };
      this.animate = (previousPercent, currentPercent) => {
        if (this._timerSubscription && !this._timerSubscription.closed) {
          this._timerSubscription.unsubscribe();
        }
        let fromPercent = this.options.startFromZero ? 0 : previousPercent;
        let toPercent = currentPercent;
        let {
          step: step,
          interval: interval
        } = this.getAnimationParameters(fromPercent, toPercent);
        let count = fromPercent;
        if (fromPercent < toPercent) {
          this._timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, interval).subscribe(() => {
            count += step;
            if (count <= toPercent) {
              if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                this.draw(toPercent);
                this._timerSubscription.unsubscribe();
              } else {
                this.draw(count);
              }
            } else {
              this.draw(toPercent);
              this._timerSubscription.unsubscribe();
            }
          });
        } else {
          this._timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, interval).subscribe(() => {
            count -= step;
            if (count >= toPercent) {
              if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                this.draw(toPercent);
                this._timerSubscription.unsubscribe();
              } else {
                this.draw(count);
              }
            } else {
              this.draw(toPercent);
              this._timerSubscription.unsubscribe();
            }
          });
        }
      };
      this.applyOptions = () => {
        // the options of <circle-progress> may change already
        for (let name of Object.keys(this.options)) {
          if (this.hasOwnProperty(name) && this[name] !== undefined) {
            this.options[name] = this[name];
          } else if (this.templateOptions && this.templateOptions[name] !== undefined) {
            this.options[name] = this.templateOptions[name];
          }
        }
        // make sure key options valid
        this.options.radius = Math.abs(+this.options.radius);
        this.options.space = +this.options.space;
        this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
        this.options.maxPercent = Math.abs(+this.options.maxPercent);
        this.options.animationDuration = Math.abs(this.options.animationDuration);
        this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
        this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
        this.options.backgroundPadding = +this.options.backgroundPadding;
      };
      this.getRelativeY = (rowNum, rowCount) => {
        // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
        let initialOffset = -0.18,
          offset = 1;
        return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
      };
      this.min = (a, b) => {
        return a < b ? a : b;
      };
      this.max = (a, b) => {
        return a > b ? a : b;
      };
      this.uuid = () => {
        // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
      };
      this.checkViewport = () => {
        this.findSvgElement();
        let previousValue = this.isInViewport;
        this.isInViewport = this.isElementInViewport(this.svgElement);
        if (previousValue !== this.isInViewport && this.onViewportChanged.observers.length > 0) {
          this.ngZone.run(() => {
            this.onViewportChanged.emit({
              oldValue: previousValue,
              newValue: this.isInViewport
            });
          });
        }
      };
      this.onScroll = event => {
        this.checkViewport();
      };
      this.loadEventsForLazyMode = () => {
        if (this.options.lazy) {
          this.ngZone.runOutsideAngular(() => {
            this.document.addEventListener('scroll', this.onScroll, true);
            this.window.addEventListener('resize', this.onScroll, true);
          });
          if (this._viewportChangedSubscriber === null) {
            this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({
              oldValue,
              newValue
            }) => {
              newValue ? this.render() : null;
            });
          }
          // svgElement must be created in DOM before being checked.
          // Is there a better way to check the existence of svgElemnt?
          let _timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, 50).subscribe(() => {
            this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
          });
        }
      };
      this.unloadEventsForLazyMode = () => {
        // Remove event listeners
        this.document.removeEventListener('scroll', this.onScroll, true);
        this.window.removeEventListener('resize', this.onScroll, true);
        // Unsubscribe onViewportChanged
        if (this._viewportChangedSubscriber !== null) {
          this._viewportChangedSubscriber.unsubscribe();
          this._viewportChangedSubscriber = null;
        }
      };
      this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
      this.window = this.document.defaultView;
      Object.assign(this.options, defaultOptions);
      Object.assign(this.defaultOptions, defaultOptions);
    }
    emitClickEvent(event) {
      if (this.options.renderOnClick) {
        this.animate(0, this.options.percent);
      }
      if (this.onClick.observers.length > 0) {
        this.onClick.emit(event);
      }
    }
    isDrawing() {
      return this._timerSubscription && !this._timerSubscription.closed;
    }
    findSvgElement() {
      if (this.svgElement === null) {
        let tags = this.elRef.nativeElement.getElementsByTagName('svg');
        if (tags.length > 0) {
          this.svgElement = tags[0];
        }
      }
    }
    isElementInViewport(el) {
      // Return false if el has not been created in page.
      if (el === null || el === undefined) return false;
      // Check if the element is out of view due to a container scrolling
      let rect = el.getBoundingClientRect(),
        parent = el.parentNode,
        parentRect;
      do {
        parentRect = parent.getBoundingClientRect();
        if (rect.top >= parentRect.bottom) return false;
        if (rect.bottom <= parentRect.top) return false;
        if (rect.left >= parentRect.right) return false;
        if (rect.right <= parentRect.left) return false;
        parent = parent.parentNode;
      } while (parent != this.document.body);
      // Check its within the document viewport
      if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
      if (rect.bottom <= 0) return false;
      if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
      if (rect.right <= 0) return false;
      return true;
    }
    ngOnInit() {
      this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
      this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
      this.render();
      if ('lazy' in changes) {
        changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
      }
    }
  }
  CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(t) {
    return new (t || CircleProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CircleProgressOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  CircleProgressComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CircleProgressComponent,
    selectors: [["circle-progress"]],
    inputs: {
      name: "name",
      class: "class",
      backgroundGradient: "backgroundGradient",
      backgroundColor: "backgroundColor",
      backgroundGradientStopColor: "backgroundGradientStopColor",
      backgroundOpacity: "backgroundOpacity",
      backgroundStroke: "backgroundStroke",
      backgroundStrokeWidth: "backgroundStrokeWidth",
      backgroundPadding: "backgroundPadding",
      radius: "radius",
      space: "space",
      percent: "percent",
      toFixed: "toFixed",
      maxPercent: "maxPercent",
      renderOnClick: "renderOnClick",
      units: "units",
      unitsFontSize: "unitsFontSize",
      unitsFontWeight: "unitsFontWeight",
      unitsColor: "unitsColor",
      outerStrokeGradient: "outerStrokeGradient",
      outerStrokeWidth: "outerStrokeWidth",
      outerStrokeColor: "outerStrokeColor",
      outerStrokeGradientStopColor: "outerStrokeGradientStopColor",
      outerStrokeLinecap: "outerStrokeLinecap",
      innerStrokeColor: "innerStrokeColor",
      innerStrokeWidth: "innerStrokeWidth",
      titleFormat: "titleFormat",
      title: "title",
      titleColor: "titleColor",
      titleFontSize: "titleFontSize",
      titleFontWeight: "titleFontWeight",
      subtitleFormat: "subtitleFormat",
      subtitle: "subtitle",
      subtitleColor: "subtitleColor",
      subtitleFontSize: "subtitleFontSize",
      subtitleFontWeight: "subtitleFontWeight",
      imageSrc: "imageSrc",
      imageHeight: "imageHeight",
      imageWidth: "imageWidth",
      animation: "animation",
      animateTitle: "animateTitle",
      animateSubtitle: "animateSubtitle",
      animationDuration: "animationDuration",
      showTitle: "showTitle",
      showSubtitle: "showSubtitle",
      showUnits: "showUnits",
      showImage: "showImage",
      showBackground: "showBackground",
      showInnerStroke: "showInnerStroke",
      clockwise: "clockwise",
      responsive: "responsive",
      startFromZero: "startFromZero",
      showZeroOuterStroke: "showZeroOuterStroke",
      lazy: "lazy",
      templateOptions: ["options", "templateOptions"]
    },
    outputs: {
      onClick: "onClick"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]],
    template: function CircleProgressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    encapsulation: 2
  });
  return CircleProgressComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgCircleProgressModule = /*#__PURE__*/(() => {
  class NgCircleProgressModule {
    static forRoot(options = {}) {
      return {
        ngModule: NgCircleProgressModule,
        providers: [{
          provide: CircleProgressOptions,
          useValue: options
        }]
      };
    }
  }
  NgCircleProgressModule.ɵfac = function NgCircleProgressModule_Factory(t) {
    return new (t || NgCircleProgressModule)();
  };
  NgCircleProgressModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgCircleProgressModule
  });
  NgCircleProgressModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
  return NgCircleProgressModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ng-circle-progress
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-circle-progress.mjs.map

/***/ })

};
;