exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 41185:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/experts/components/experts-benefits/expert-benifit.constant.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPERT_BENIFIT_SLIDER_CONFIG: () => (/* binding */ EXPERT_BENIFIT_SLIDER_CONFIG),
/* harmony export */   EXPERT_BENIFIT_SLIDS: () => (/* binding */ EXPERT_BENIFIT_SLIDS)
/* harmony export */ });
const EXPERT_BENIFIT_SLIDER_CONFIG = {
  padding: 120,
  perPage: 2,
  arrows: false,
  pagination: false,
  breakpoints: {
    1400: {
      perPage: 2
    },
    1024: {
      // padding: 60
      gap: 20
    },
    640: {
      gap: 20,
      perPage: 2,
      padding: 35,
      arrows: false
    },
    576: {
      gap: 20,
      perPage: 2,
      padding: 35,
      arrows: false
    }
  }
};
const EXPERT_BENIFIT_SLIDS = [{
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/medication.png",
  title: "Medication",
  arrowImage: "down",
  arrowPath: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/how-it-works/down-arrow.svg"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/health.png",
  title: "Health Test",
  arrowImage: "up",
  arrowPath: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/how-it-works/up-arrow.svg"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/mental-health.png",
  title: "Mental Health",
  arrowImage: "down",
  arrowPath: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/how-it-works/down-arrow.svg"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/lab-test-mobile-screen.png",
  title: "Lab Test",
  arrowImage: "down",
  arrowPath: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/how-it-works/down-arrow.svg"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/online-consultation.png",
  title: "Online Consultation",
  arrowImage: "down",
  arrowPath: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/how-it-works/down-arrow.svg"
}];

/***/ }),

/***/ 97842:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/experts/components/experts-benefits/experts-benefits.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertsBenefitsComponent: () => (/* binding */ ExpertsBenefitsComponent)
/* harmony export */ });
/* harmony import */ var _expert_benifit_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expert-benifit.constant */ 41185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);





function ExpertsBenefitsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16)(2, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const gytreeBenefitsData_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gytreeBenefitsData_r4 == null ? null : gytreeBenefitsData_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", gytreeBenefitsData_r4 == null ? null : gytreeBenefitsData_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ExpertsBenefitsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.gytreeBenefits == null ? null : ctx_r1.gytreeBenefits.middle_benefits == null ? null : ctx_r1.gytreeBenefits.middle_benefits.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.gytreeBenefits == null ? null : ctx_r1.gytreeBenefits.middle_benefits == null ? null : ctx_r1.gytreeBenefits.middle_benefits.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ExpertsBenefitsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16)(2, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const gytreeBenefitsData_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gytreeBenefitsData_r5 == null ? null : gytreeBenefitsData_r5.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", gytreeBenefitsData_r5 == null ? null : gytreeBenefitsData_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ExpertsBenefitsComponent_splide_slide_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r6 == null ? null : slide_r6.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r6 == null ? null : slide_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
let ExpertsBenefitsComponent = /*#__PURE__*/(() => {
  var _class;
  class ExpertsBenefitsComponent {
    constructor() {
      this.expertBenifitSliderConfig = _expert_benifit_constant__WEBPACK_IMPORTED_MODULE_0__.EXPERT_BENIFIT_SLIDER_CONFIG;
      this.slides = _expert_benifit_constant__WEBPACK_IMPORTED_MODULE_0__.EXPERT_BENIFIT_SLIDS;
    }
    configureImageClass(arrowImage) {
      return arrowImage === 'up' ? 'border-t' : 'border-b mt-5';
    }
    configureSlidePosClass(arrowImage) {
      return arrowImage === 'up' ? 'flex-col-reverse pt-6' : 'flex-col pb-6';
    }
  }
  _class = ExpertsBenefitsComponent;
  _class.ɵfac = function ExpertsBenefitsComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-experts-benefits"]],
    inputs: {
      gytreeBenefits: "gytreeBenefits"
    },
    decls: 20,
    vars: 9,
    consts: [[1, "container"], [1, "mx-auto"], [1, ""], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/image/flower-img.png", "alt", "", 1, "absolute"], [1, "absolute", "z-0", "right-10", "md:right-52", "xl:right-96", "-top-6", "w-[37px]", "h-[22px]", "md:h-[40px]"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-benefit-img/flower.png", "alt", "", 1, "object-cover", "object-top", "w-full", "h-full", "md:object-none"], [1, "md:text-center", "bg-white", "md:py-16", "relative", "font-bold", "lg:text-[30px]", "py-12", "text-theme-brown", "font-lora", "text-[25px]"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/benefits-top.svg", 1, "absolute", "w-12", "h-12", "md:h-20", "md:w-20", "md:top-0", "lg:top-3", "top-10", "lg:left-[32%]", "xl:left-[36%]", "md:left-[30%]", "left-[38%]", "text-theme-purple-lighter"], [1, "xl:w-[70%]", "lg:w-full", "mx-auto", "md:block", "hidden"], [1, "flex", "flex-col", "gap-8"], [4, "ngFor", "ngForOf"], ["class", "inset-x-0 bg-gradient-to-b from-theme-base-light-purple pointer-events-none to-theme-extra-light-purple md:rounded-[40px] rounded-[30px] w-full flex-auto justify-center items-center flex flex-col", 4, "ngIf"], [1, "block", "sm:container", "md:hidden"], [1, "pb-12", "wrraper"], [1, "benefit-slider", 3, "options"], ["class", "grid grid-cols-1 p-10 md:grid-cols-4", 4, "ngFor", "ngForOf"], [1, "inset-x-0", "bg-gradient-to-b", "from-theme-base-light-purple", "pointer-events-none", "to-theme-extra-light-purple", "md:rounded-[40px]", "rounded-[30px]", "w-full", "flex", "flex-col", "justify-center", "items-center"], [1, "py-3", "text-base", "font-bold", "text-center", "break-words", "w-", "font-roboto", "lg:text-xl"], ["alt", "", 1, "w-auto", "max-h-[135px]", "mx-auto", 3, "src"], [1, "inset-x-0", "bg-gradient-to-b", "from-theme-base-light-purple", "pointer-events-none", "to-theme-extra-light-purple", "md:rounded-[40px]", "rounded-[30px]", "w-full", "flex-auto", "justify-center", "items-center", "flex", "flex-col"], [1, "py-3", "text-base", "h-[135px]", "font-bold", "text-center", "font-roboto", "lg:text-xl"], ["alt", "", 1, "object-contain", "object-bottom", "h-[135px]", "md:flex-auto", 3, "src"], [1, "py-3", "text-base", "font-bold", "text-center", "font-roboto", "lg:text-xl"], ["alt", "", 1, "w-auto", "h-[135px]", "mx-auto", 3, "src"], [1, "grid", "grid-cols-1", "p-10", "md:grid-cols-4"], [1, "slide-container", "inset-x-0", "bg-gradient-to-b", "from-theme-base-light-purple", "pointer-events-none", "to-theme-extra-light-purple", "font-bold", "rounded-[20px]", "w-auto", "flex", "justify-center", "transition-all", "px-5", "h-full", "overflow-hidden"], [1, "group", "flex", "flex-col", "rounded-[20px]", "md:px-6"], [1, "sm:h-[135px]", "py-5", "mx-auto", "sm:font-semibold", "font-bold", "text-center", "sm:text-2xl", "text-[12px]", "leading-tight"], [1, "flex-auto", "h-[120px]", "shrink-0"], ["alt", "gallery", 1, "object-cover", "object-center", "w-auto", "h-full", "slide-img", 3, "src"]],
    template: function ExpertsBenefitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div")(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ExpertsBenefitsComponent_ng_container_12_Template, 5, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ExpertsBenefitsComponent_div_13_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ExpertsBenefitsComponent_ng_container_15_Template, 5, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "splide", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ExpertsBenefitsComponent_splide_slide_19_Template, 7, 2, "splide-slide", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.exp_benefit == null ? null : ctx.gytreeBenefits.exp_benefit.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("grid gap-8 md:grid-cols-", "3", " mb-14");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.first_benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.middle_benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.second_benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.expertBenifitSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.exp_benefit == null ? null : ctx.gytreeBenefits.exp_benefit.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideSlideComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective],
    encapsulation: 2
  });
  return ExpertsBenefitsComponent;
})();


/***/ }),

/***/ 73495:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/experts/components/experts-hero-section/experts-hero-section.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertsHeroSectionComponent: () => (/* binding */ ExpertsHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);

let ExpertsHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class ExpertsHeroSectionComponent {
    constructor(cdr) {
      this.cdr = cdr;
      this.banners = [];
    }
    ngOnInit() {
      this.getScreenSize();
    }
    getScreenSize() {
      if (window.innerWidth <= 575) {
        this.mobileScreen = true;
        this.cdr.detectChanges();
      } else {
        this.mobileScreen = false;
        this.cdr.detectChanges();
      }
      if (window.innerWidth >= 1200) {
        this.largeScreen = true;
      } else {
        this.largeScreen = false;
      }
    }
  }
  _class = ExpertsHeroSectionComponent;
  _class.ɵfac = function ExpertsHeroSectionComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-experts-hero-section"]],
    inputs: {
      banners: "banners"
    },
    decls: 50,
    vars: 18,
    consts: [[1, "container", "xl:px-10"], [1, "flex", "flex-col-reverse", "flex-wrap", "items-center", "justify-between", "py-16", "pt-6", "lg:flex-row", "lg:flex-nowrap"], [1, "px-5", "pt-5", "lg:pt-20", "sm:px-0", "shrink-0"], [1, "relative"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "top-16", "lg:top-40", "xl:-left-6", "lg:-left-15", "lg:-left-4", "-left-8", "bg-white", "text-center", "sm:w-[140px]", "w-[120px]", "md:w-[140px]", "lg:w-[180px]", "lg:w-180px", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1"], [1, "pb-2", "text-2xl", "font-bold", "leading-none", "text-theme-brown", "md:text-2xl", "font-lora"], [1, "text-sm", "capitalize", "font-roboto", "md:text-normal", "lg:text-sm", "xl:text-lg"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "lg:hidden", "block", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "top-8", "sm:-right-7", "-right-4", "bg-white", "text-center", "sm:w-[150px]", "w-[120px]", "md:w-[150px]", "lg:w-180px", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "lg:hidden", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "sm:bottom-[90px]", "bottom-[25px]", "-right-8", "bg-white", "text-center", "sm:w-[150px]", "w-[120px]", "md:w-[150px]", "xl:w-[180px]", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "lg:hidden", "block", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "-bottom-5", "sm:bottom-[60px]", "sm:-left-8", "-left-5", "bg-white", "text-center", "sm:w-[150px]", "w-[120px]", "md:w-[150px]", "lg:w-180px", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "sm:bottom-[10px]", "bottom-[25px]", "-right-8", "bg-white", "text-center", "sm:w-[150px]", "w-[120px]", "md:w-[150px]", "xl:w-[180px]", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1", "hidden", "lg:block"], [1, "shrink-0"], ["alt", "", 1, "", 3, "src"], [1, "relative", "flex-auto", "h-full", "text-center", "lg:pt-0"], [1, "px-5", "mb-5", "text-4xl", "font-bold", "text-theme-brown", "md:text-3xl", "lg:text-4xl", "xl:text-6xl", "font-lora", "lg:mb-10", "md:px-8"], [1, "px-5", "text-base", "text-center", "md:px-8", "font-roboto", "md:text-lg", "lg:text-xl", "xl:text-2xl"], [1, "hidden", "pb-28", "shrink-0", "lg:block"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "top-[90px]", "-left-8", "bg-white", "text-center", "sm:w-[150px]", "w-[120px]", "md:w-[165px]", "lg:w-180px", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "rounded-xl", "shadow-[0px_24px_54px_0px_rgba(0,0,0,0.11)]", "-bottom-6", "-right-4", "bg-white", "text-center", "sm:w-[150px]", "w-[120px]", "md:w-[180px]", "lg:w-180px", "py-2", "md:py-2", "lg:py-3", "px-2", "md:px-2", "lg:px-1"], ["alt", "", 3, "src"]],
    template: function ExpertsHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16)(37, "div", 3)(38, "div", 17)(39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18)(44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section == null ? null : ctx.banners.exp_banner.left_section.left_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.right_section == null ? null : ctx.banners.exp_banner.left_section.right_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.right_section == null ? null : ctx.banners.exp_banner.left_section.right_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.right_section == null ? null : ctx.banners.exp_banner.left_section.right_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.right_section == null ? null : ctx.banners.exp_banner.left_section.right_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.left_section == null ? null : ctx.banners.exp_banner.left_section.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.right_section == null ? null : ctx.banners.exp_banner.right_section.left_section == null ? null : ctx.banners.exp_banner.right_section.left_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.right_section == null ? null : ctx.banners.exp_banner.right_section.left_section == null ? null : ctx.banners.exp_banner.right_section.left_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.right_section == null ? null : ctx.banners.exp_banner.right_section.right_section == null ? null : ctx.banners.exp_banner.right_section.right_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.right_section == null ? null : ctx.banners.exp_banner.right_section.right_section == null ? null : ctx.banners.exp_banner.right_section.right_section.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.banners == null ? null : ctx.banners.exp_banner == null ? null : ctx.banners.exp_banner.right_section == null ? null : ctx.banners.exp_banner.right_section.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    encapsulation: 2
  });
  return ExpertsHeroSectionComponent;
})();


/***/ }),

/***/ 50113:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/experts/components/experts-wellness/experts-wellness.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertsWellnessComponent: () => (/* binding */ ExpertsWellnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);




const _c0 = function (a0, a1) {
  return {
    "border-white bg-theme-light-cream text-theme-brown": a0,
    "text-theme-light-grey border-theme-skin": a1
  };
};
function ExpertsWellnessComponent_ng_container_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExpertsWellnessComponent_ng_container_10_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const doctorCategory_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.scrollExpert(doctorCategory_r2 == null ? null : doctorCategory_r2.dgn_name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doctorCategory_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r3.activeExpertId === (doctorCategory_r2 == null ? null : doctorCategory_r2.dgn_name), ctx_r3.activeExpertId !== (doctorCategory_r2 == null ? null : doctorCategory_r2.dgn_name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doctorCategory_r2 == null ? null : doctorCategory_r2.dgn_name, " ");
  }
}
function ExpertsWellnessComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExpertsWellnessComponent_ng_container_10_button_1_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctorCategory_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.doctorsList[doctorCategory_r2 == null ? null : doctorCategory_r2.dgn_name] == null ? null : ctx_r0.doctorsList[doctorCategory_r2 == null ? null : doctorCategory_r2.dgn_name].length) > 0);
  }
}
function ExpertsWellnessComponent_ng_container_11_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExpertsWellnessComponent_ng_container_11_div_1_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const doctor_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.bookNow(doctor_r12, doctor_r12 == null ? null : doctor_r12.dr_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22)(8, "div", 23)(9, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 26)(14, "div", 27)(15, "div", 28)(16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const doctor_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", doctor_r12 == null ? null : doctor_r12.dr_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", doctor_r12 == null ? null : doctor_r12.dr_experience, " ", (doctor_r12 == null ? null : doctor_r12.dr_experience) > 1 ? "Years" : "Year", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doctor_r12 == null ? null : doctor_r12.dr_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doctor_r12 == null ? null : doctor_r12.dr_prof_details == null ? null : doctor_r12.dr_prof_details.dr_display_text, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doctor_r12 == null ? null : doctor_r12.dr_prof_details == null ? null : doctor_r12.dr_prof_details.dr_cnsltn_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(doctor_r12 == null ? null : doctor_r12.dr_prof_details == null ? null : doctor_r12.dr_prof_details.dr_std_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", doctor_r12 == null ? null : doctor_r12.dr_prof_details == null ? null : doctor_r12.dr_prof_details.dr_std_price, "");
  }
}
function ExpertsWellnessComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExpertsWellnessComponent_ng_container_11_div_1_div_4_Template, 24, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doctorCategory_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r10.convertInId(doctorCategory_r8 == null ? null : doctorCategory_r8.dgn_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doctorCategory_r8 == null ? null : doctorCategory_r8.dgn_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.doctorsList[doctorCategory_r8 == null ? null : doctorCategory_r8.dgn_name]);
  }
}
function ExpertsWellnessComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExpertsWellnessComponent_ng_container_11_div_1_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctorCategory_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.doctorsList[doctorCategory_r8 == null ? null : doctorCategory_r8.dgn_name] == null ? null : ctx_r1.doctorsList[doctorCategory_r8 == null ? null : doctorCategory_r8.dgn_name].length) > 0);
  }
}
let ExpertsWellnessComponent = /*#__PURE__*/(() => {
  var _class;
  class ExpertsWellnessComponent {
    constructor(activatedRoute, router, eventTrackingService) {
      this.activatedRoute = activatedRoute;
      this.router = router;
      this.eventTrackingService = eventTrackingService;
      this.doctorsList = [];
      this.scrolled = false;
      this.doctorType = Object.keys(this.doctorsList || {});
    }
    convertInId(value) {
      return value?.replace(' ', '_')?.toLowerCase();
    }
    scrollExpert(id) {
      this.activeExpertId = id;
      const element = document.getElementById(this.convertInId(id));
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    ngOnInit() {}
    bookNow(doctorData, id) {
      localStorage.setItem('doctorData', JSON.stringify(doctorData));
      const value = {
        Name: doctorData?.dr_name,
        cost: doctorData?.dr_prof_details?.dr_cnsltn_price,
        'Sub Category': doctorData?.dr_prof_details?.dr_dgn?.dgn_name
      };
      this.eventTrackingService.trackWebEnagegeEvent('Expert Book Now Clicked', value);
      this.eventTrackingService.trackEvent('Expert Book Now Clicked', value);
      this.router.navigate(['/book-now', id]);
    }
  }
  _class = ExpertsWellnessComponent;
  _class.ɵfac = function ExpertsWellnessComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_0__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-experts-wellness"]],
    inputs: {
      doctorsList: "doctorsList",
      doctorType: "doctorType",
      designationsList: "designationsList",
      designationConfig: "designationConfig"
    },
    decls: 12,
    vars: 4,
    consts: [[1, "border-b-2", "border-theme-hot-pink", "border-opacity-20"], [1, "container", "pt-14", "md:pb-10", "pb-14"], [1, "relative", "pb-3", "mx-auto", "w-fit"], [1, "absolute", "right-0", "sm:-right-8"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/images/flower-icon.png", "alt", ""], [1, "text-center", "text-theme-brown", "text-[23px]", "pt-3", "font-lora", "sm:text-2xl", "xl:text-3xl", "font-extrabold"], [1, "font-roboto", "text-center", "text-[20px]", "pt-4"], [1, "flex", "gap-2", "pt-3", "mt-0", "overflow-auto", "sm:gap-5", "lg:pt-5", "sm:mt-4", "whitespace-nowrap", "styled-scrollbar", "hover-scroll-visible"], [4, "ngFor", "ngForOf"], ["class", "leading-none select-none mt-4 mb-2 cursor-pointer flex items-center py-2 sm:py-2 px-4 border-[1.5px] rounded-full font-roboto text-[14px] sm:text-[19px] hover:border-white hover:bg-theme-light-cream hover:text-theme-brown", 3, "ngClass", "click", 4, "ngIf"], [1, "leading-none", "select-none", "mt-4", "mb-2", "cursor-pointer", "flex", "items-center", "py-2", "sm:py-2", "px-4", "border-[1.5px]", "rounded-full", "font-roboto", "text-[14px]", "sm:text-[19px]", "hover:border-white", "hover:bg-theme-light-cream", "hover:text-theme-brown", 3, "ngClass", "click"], ["class", "pt-6 sm:pt-9", 3, "id", 4, "ngIf"], [1, "pt-6", "sm:pt-9", 3, "id"], [1, "text-theme-brown", "text-[23px]", "sm:px-3", "lg:px-6", "pb-2", "sm:pb-3", "lg:pb-6", "font-bold", "font-lora"], [1, "grid", "gap-5", "sm:px-3", "lg:gap-10", "lg:px-6", "md:grid-cols-2"], ["class", "flex items-center group cursor-pointer gap-3 sm:gap-5 p-3.5 sm:py-3 sm:px-4 lg:gap-4 lg:py-5 lg:px-7 bg-white shadow-[0px_1px_4px_1px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_14px_4px_rgba(0,0,0,0.04)] transition-shadow rounded-xl md:rounded-2xl xl:rounded-3xl", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "group", "cursor-pointer", "gap-3", "sm:gap-5", "p-3.5", "sm:py-3", "sm:px-4", "lg:gap-4", "lg:py-5", "lg:px-7", "bg-white", "shadow-[0px_1px_4px_1px_rgba(0,0,0,0.06)]", "hover:shadow-[0px_2px_14px_4px_rgba(0,0,0,0.04)]", "transition-shadow", "rounded-xl", "md:rounded-2xl", "xl:rounded-3xl", 3, "click"], [1, "relative", "h-fit", "shrink-0"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/bg-circle.png", "alt", "", 1, "h-[90px]", "w-[90px]", "sm:w-[100px]", "sm:h-[100px]", "md:w-[120px]", "md:h-[120px]", "xl:w-[150px]", "xl:h-[150px]"], [1, "absolute", "inset-0", "h-[90px]", "w-[90px]", "sm:w-[100px]", "sm:h-[100px]", "md:w-[120px]", "md:h-[120px]", "xl:w-[150px]", "xl:h-[150px]", "border", "border-theme-brown", "rounded-full"], ["alt", "", 1, "flex", "items-center", "rounded-[50%]", "object-cover", "object-top", "h-full", "w-full", "group-hover:-translate-x-2", "group-hover:-translate-y-2", "transition-transform", "bg-theme-light-cream", 3, "src"], [1, "lg:text-sm", "whitespace-nowrap", "text-[10px]", "sm:text-xs", "sm:mt-0", "px-2", "sm:px-4", "py-0.5", "shadow-[0px_1px_4px_1px_rgba(0,0,0,0.06)]", "font-roboto", "text-center", "mx-auto", "text-theme-light-grey", "bg-white", "absolute", "bottom-0", "left-1/2", "-translate-x-1/2", "rounded-2xl", "w-fit"], [1, "flex", "flex-col", "justify-between", "flex-auto", "h-full", "gap-2"], [1, ""], [1, "text-base", "font-bold", "text-theme-brown", "sm:text-lg", "lg:text-xl", "font-roboto"], [1, "lg:text-[15px]", "text-xs", "sm:text-sm", "pt-1", "lg:pt-2", "line-clamp-3", "lg:line-clamp-none"], [1, "flex", "flex-col", "items-start", "justify-between", "gap-2", "lg:flex-row", "lg:items-center"], [1, "flex", "items-end", "gap-3", "font-bold", "text-theme-brown", "font-roboto"], [1, "flex", "items-end", "gap-1"], [1, "text-[15px]"], [1, "text-base", "sm:text-[20px]"], [1, "line-through", "text-[14px]", "text-theme-light-grey", "font-light", 3, "hidden"], [1, "leading-none", "whitespace-nowrap", "group-hover:bg-theme-light-maroon", "group-hover:text-white", "group-hover:border-transparent", "transition-colors", "inline-flex", "items-center", "justify-center", "cursor-pointer", "lg:px-4", "py-1", "px-3", "flex-col", "border-[1.5px]", "border-theme-brown", "text-center", "rounded-full", "font-roboto", "text-base", "sm:text-lg", "lg:text-[19px]"]],
    template: function ExpertsWellnessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExpertsWellnessComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ExpertsWellnessComponent_ng_container_11_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.designationConfig == null ? null : ctx.designationConfig.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.designationConfig == null ? null : ctx.designationConfig.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.designationsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.designationsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    encapsulation: 2
  });
  return ExpertsWellnessComponent;
})();


/***/ }),

/***/ 81360:
/*!******************************************************!*\
  !*** ./src/app/modules/experts/experts.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertsComponent: () => (/* binding */ ExpertsComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 79457);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _shared_services_banner_list_banner_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/banner-list/banner-list.service */ 33292);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/meta-tags/meta-tags.service */ 79412);
/* harmony import */ var _components_experts_wellness_experts_wellness_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/experts-wellness/experts-wellness.component */ 50113);
/* harmony import */ var _components_experts_benefits_experts_benefits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/experts-benefits/experts-benefits.component */ 97842);
/* harmony import */ var _components_experts_hero_section_experts_hero_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/experts-hero-section/experts-hero-section.component */ 73495);












let ExpertsComponent = /*#__PURE__*/(() => {
  var _class;
  class ExpertsComponent {
    constructor(doctorList, GetData, pageListService, bannerListService, titleService, metaService, metaTagsService) {
      this.doctorList = doctorList;
      this.GetData = GetData;
      this.pageListService = pageListService;
      this.bannerListService = bannerListService;
      this.titleService = titleService;
      this.metaService = metaService;
      this.metaTagsService = metaTagsService;
      this.doctorsList = [];
      this.designationsList = [];
      this.gytreeBenefits = [];
      this.banners = [];
      this.gytreeBenefitsKeys = [];
      this.doctorType = [];
      this.degree = [];
      this.isDataVisible = {
        gytreeExpert: false,
        gytreeBenefits: false
      };
    }
    ngOnInit() {
      this.getBannerdata();
      this.getDoctorList();
      this.getDesignationsiList();
      aos__WEBPACK_IMPORTED_MODULE_0___default().init({});
    }
    getBannerdata() {
      this.pageListService.getBannerList('expert').subscribe(resp => {
        this.banners = resp?.data?.data;
        this.gytreeBenefits = this.banners;
        this.designationConfig = this.banners?.exp_designation;
        const middleIndex = Math.abs(this.gytreeBenefits?.exp_benefit?.data?.length / 2);
        var middleGtpBenefitsData = [...this.gytreeBenefits?.exp_benefit?.data].reverse().reduce((c, v, i) => {
          if (v === this.gytreeBenefits?.exp_benefit?.data[i]) c = v;
          return c;
        }, null);
        this.gytreeBenefits = {
          ...this.gytreeBenefits,
          middle_benefits: middleGtpBenefitsData
        };
        this.gytreeBenefits = {
          ...this.gytreeBenefits,
          first_benefits: (this.gytreeBenefits?.exp_benefit?.data || []).slice(0, middleIndex)
        };
        this.gytreeBenefits = {
          ...this.gytreeBenefits,
          second_benefits: (this.gytreeBenefits?.exp_benefit?.data || []).slice(-middleIndex)
        };
        this.setMetaTagAndTitle();
      });
    }
    /**
     * Method to get scroll event data
     */
    /**
     * Method to get doctorList data
     */
    getDoctorList() {
      this.pageListService.getDoctorList().subscribe(res => {
        let result = res?.data?.data?.reduce((r, a) => {
          r[a.dr_prof_details?.dr_dgn?.dgn_name] = r[a.dr_prof_details?.dr_dgn?.dgn_name] || [];
          r[a.dr_prof_details?.dr_dgn?.dgn_name].push(a);
          return r;
        }, {});
        this.doctorsList = result;
        // this.doctorType = Object.keys(this.doctorsList).sort(
        //     (a: any, b: any) => a.localeCompare(b)
        // );
      });
    }

    getDesignationsiList() {
      this.pageListService.getMasterUserList('designation').subscribe(res => {
        this.designationsList = res?.data?.data;
      });
    }
    /**
     * Meta tag and title
     */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Experts',
        metaTitle: this.banners?.exp_meta?.meta_title,
        metaDescription: this.banners?.exp_meta?.meta_desc,
        metaKeyword: this.banners?.exp_meta?.meta_keywords,
        metaImage: this.banners?.exp_meta?.meta_image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_1__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
    }
  }
  _class = ExpertsComponent;
  _class.ɵfac = function ExpertsComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_2__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_3__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_banner_list_banner_list_service__WEBPACK_IMPORTED_MODULE_5__.BannerListService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_6__.MetaTagsService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-experts"]],
    decls: 3,
    vars: 6,
    consts: [[1, "block", "bg-theme-light-cream", "lg:pt-[85px]", 3, "banners"], ["id", "gytree-doctor", 1, "block", 3, "doctorsList", "doctorType", "designationsList", "designationConfig"], ["id", "gytree-benefits-block", 1, "block", "relative", "z-10", "bg-white", 3, "gytreeBenefits"]],
    template: function ExpertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-experts-hero-section", 0)(1, "app-experts-wellness", 1)(2, "app-experts-benefits", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("banners", ctx.banners);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("doctorsList", ctx.doctorsList)("doctorType", ctx.doctorType)("designationsList", ctx.designationsList)("designationConfig", ctx.designationConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("gytreeBenefits", ctx.gytreeBenefits);
      }
    },
    dependencies: [_components_experts_wellness_experts_wellness_component__WEBPACK_IMPORTED_MODULE_7__.ExpertsWellnessComponent, _components_experts_benefits_experts_benefits_component__WEBPACK_IMPORTED_MODULE_8__.ExpertsBenefitsComponent, _components_experts_hero_section_experts_hero_section_component__WEBPACK_IMPORTED_MODULE_9__.ExpertsHeroSectionComponent],
    encapsulation: 2
  });
  return ExpertsComponent;
})();


/***/ }),

/***/ 60524:
/*!***************************************************!*\
  !*** ./src/app/modules/experts/experts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertsModule: () => (/* binding */ ExpertsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _experts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experts.component */ 81360);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _components_experts_wellness_experts_wellness_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/experts-wellness/experts-wellness.component */ 50113);
/* harmony import */ var _components_experts_benefits_experts_benefits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experts-benefits/experts-benefits.component */ 97842);
/* harmony import */ var _components_experts_hero_section_experts_hero_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/experts-hero-section/experts-hero-section.component */ 73495);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 78371);










const routes = [{
  path: '',
  component: _experts_component__WEBPACK_IMPORTED_MODULE_0__.ExpertsComponent
}];
let ExpertsModule = /*#__PURE__*/(() => {
  var _class;
  class ExpertsModule {}
  _class = ExpertsModule;
  _class.ɵfac = function ExpertsModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_7__.NgxSplideModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule]
  });
  return ExpertsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExpertsModule, {
    declarations: [_experts_component__WEBPACK_IMPORTED_MODULE_0__.ExpertsComponent, _components_experts_wellness_experts_wellness_component__WEBPACK_IMPORTED_MODULE_1__.ExpertsWellnessComponent, _components_experts_benefits_experts_benefits_component__WEBPACK_IMPORTED_MODULE_2__.ExpertsBenefitsComponent, _components_experts_hero_section_experts_hero_section_component__WEBPACK_IMPORTED_MODULE_3__.ExpertsHeroSectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_7__.NgxSplideModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule]
  });
})();

/***/ }),

/***/ 79457:
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
      r = n(1),
      a = (o(r), n(6)),
      u = o(a),
      c = n(7),
      s = o(c),
      f = n(8),
      d = o(f),
      l = n(9),
      p = o(l),
      m = n(10),
      b = o(m),
      v = n(11),
      y = o(v),
      g = n(14),
      h = o(g),
      w = [],
      k = !1,
      x = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        startEvent: "DOMContentLoaded",
        throttleDelay: 99,
        debounceDelay: 50,
        disableMutationObserver: !1
      },
      j = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
      },
      O = function () {
        w = (0, h.default)(), j();
      },
      M = function () {
        w.forEach(function (e, t) {
          e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
        });
      },
      S = function (e) {
        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
      },
      _ = function (e) {
        x = i(x, e), w = (0, h.default)();
        var t = document.all && !window.atob;
        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
          j(!0);
        }) : document.addEventListener(x.startEvent, function () {
          j(!0);
        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
          (0, b.default)(w, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
      };
    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
            o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }
        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }
        function a(e) {
          var n = e - w,
            o = e - k,
            i = t - n;
          return S ? j(i, y - o) : i;
        }
        function c(e) {
          var n = e - w,
            o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }
        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }
        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }
        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }
        function p() {
          return void 0 === h ? g : d(O());
        }
        function m() {
          var e = O(),
            n = c(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }
          return void 0 === h && (h = setTimeout(f, t)), g;
        }
        var b,
          v,
          y,
          g,
          h,
          w,
          k = 0,
          M = !1,
          S = !1,
          _ = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }
      function o(e, t, o) {
        var r = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }
      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }
      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }
      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }
      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }
      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        },
        s = "Expected a function",
        f = NaN,
        d = "[object Symbol]",
        l = /^\s+|\s+$/g,
        p = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        b = /^0o[0-7]+$/i,
        v = parseInt,
        y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
        g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
        h = y || g || Function("return this")(),
        w = Object.prototype,
        k = w.toString,
        x = Math.max,
        j = Math.min,
        O = function () {
          return h.Date.now();
        };
      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
            o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }
        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }
        function u(e) {
          var n = e - w,
            o = e - O,
            i = t - n;
          return S ? x(i, y - o) : i;
        }
        function s(e) {
          var n = e - w,
            o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }
        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }
        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }
        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }
        function p() {
          return void 0 === h ? g : d(j());
        }
        function m() {
          var e = j(),
            n = s(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }
          return void 0 === h && (h = setTimeout(f, t)), g;
        }
        var b,
          v,
          y,
          g,
          h,
          w,
          O = 0,
          M = !1,
          S = !1,
          _ = !0;
        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }
      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }
      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }
      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }
      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }
      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        },
        c = "Expected a function",
        s = NaN,
        f = "[object Symbol]",
        d = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        b = parseInt,
        v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
        y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
        g = v || y || Function("return this")(),
        h = Object.prototype,
        w = h.toString,
        k = Math.max,
        x = Math.min,
        j = function () {
          return g.Date.now();
        };
      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
        o = void 0,
        i = void 0;
      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }
      return !1;
    }
    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    function i() {
      return !!o();
    }
    function r(e, t) {
      var n = window.document,
        i = o(),
        r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }
    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          o = Array.prototype.slice.call(e.removedNodes),
          i = t.concat(o);
        if (n(i)) return u();
      });
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function () {};
    t.default = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      }(),
      r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      s = function () {
        function e() {
          n(this, e);
        }
        return i(e, [{
          key: "phone",
          value: function () {
            var e = o();
            return !(!r.test(e) && !a.test(e.substr(0, 4)));
          }
        }, {
          key: "mobile",
          value: function () {
            var e = o();
            return !(!u.test(e) && !c.test(e.substr(0, 4)));
          }
        }, {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          }
        }]), e;
      }();
    t.default = new s();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e, t, n) {
        var o = e.node.getAttribute("data-aos-once");
        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
      },
      o = function (e, t) {
        var o = window.pageYOffset,
          i = window.innerHeight;
        e.forEach(function (e, r) {
          n(e, i + o, t);
        });
      };
    t.default = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(12),
      r = o(i),
      a = function (e, t) {
        return e.forEach(function (e, n) {
          e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
        }), e;
      };
    t.default = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(13),
      r = o(i),
      a = function (e, t) {
        var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
            offset: e.getAttribute("data-aos-offset"),
            anchor: e.getAttribute("data-aos-anchor"),
            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
          };
        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n += e.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n += e.offsetHeight;
            break;
          case "top-center":
            n += i / 2;
            break;
          case "bottom-center":
            n += i / 2 + e.offsetHeight;
            break;
          case "center-center":
            n += i / 2 + e.offsetHeight / 2;
            break;
          case "top-top":
            n += i;
            break;
          case "bottom-top":
            n += e.offsetHeight + i;
            break;
          case "center-top":
            n += e.offsetHeight / 2 + i;
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
      };
    t.default = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      return {
        top: n,
        left: t
      };
    };
    t.default = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };
    t.default = n;
  }]);
});

/***/ })

};
;