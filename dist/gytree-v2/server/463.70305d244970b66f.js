exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 54154:
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/gytree-clients/gytree-clients.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 68204:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-clients/our-story-clients.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurStoryClientsComponent: () => (/* binding */ OurStoryClientsComponent)
/* harmony export */ });
/* harmony import */ var _our_story_clients_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-story-clients.constant */ 43857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);





const _c0 = ["mainSplide"];
const _c1 = ["mainSplide2"];
function OurStoryClientsComponent_splide_slide_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const textSlide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](textSlide_r2 == null ? null : textSlide_r2.gtpf_desc);
  }
}
let OurStoryClientsComponent = /*#__PURE__*/(() => {
  var _class;
  class OurStoryClientsComponent {
    constructor(cdr) {
      this.cdr = cdr;
      this.clientSliderLogos = _our_story_clients_constant__WEBPACK_IMPORTED_MODULE_0__.CLIENT_SLIDER_LOGOS_CONFIG;
      this.clientSliderText = _our_story_clients_constant__WEBPACK_IMPORTED_MODULE_0__.CLIENT_SLIDER_TEXT_CONFIG;
    }
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }
    // default selected slide on slider init
    onSplideInit(event) {
      this.selectedSlideIndex = 1;
    }
  }
  _class = OurStoryClientsComponent;
  _class.ɵfac = function OurStoryClientsComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-our-story-clients"]],
    viewQuery: function OurStoryClientsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mainSplide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mainSplide2 = _t.first);
      }
    },
    inputs: {
      ProductListData: "ProductListData"
    },
    decls: 10,
    vars: 3,
    consts: [[1, "gytree-clients-section", "border-b-[2px]", "border-theme-ligher-pink", "pt-5", "pb-10", "sm:py-16"], [1, "container"], [1, "flex", "flex-col-reverse"], [1, "relative", "w-[65%]", "lg:w-1/2", "pt-10", "pb-5", "sm:py-16", "mx-auto", "text-center", "img", "font-roboto"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/clients/quote.svg", 1, "absolute", "-left-10", "md:-left-8", "top-6", "md:top-12", "w-7", "h-7", "md:w-[41px]", "md:h-[36px]", 2, "transform", "rotateY(180deg)"], [1, "client-text-slider", "pink-colored-pagination", 3, "selectedSlideIndex", "options"], ["mainSplide", ""], [4, "ngFor", "ngForOf"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/clients/glitter.svg", 1, "absolute", "top-24", "md:top-25", "-right-16", "lg:-right-40", "w-7", "h-7", "md:w-[50px]", "md:h-[47px]"], [1, "text-sm", "sm:text-lg", "lg:text-2xl"]],
    template: function OurStoryClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "splide", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OurStoryClientsComponent_splide_slide_7_Template, 3, 1, "splide-slide", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " commented due to global error handler issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedSlideIndex", ctx.selectedSlideIndex)("options", ctx.clientSliderText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ProductListData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideSlideComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective],
    encapsulation: 2
  });
  return OurStoryClientsComponent;
})();


/***/ }),

/***/ 43857:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-clients/our-story-clients.constant.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_SLIDER_LOGOS_CONFIG: () => (/* binding */ CLIENT_SLIDER_LOGOS_CONFIG),
/* harmony export */   CLIENT_SLIDER_TEXT_CONFIG: () => (/* binding */ CLIENT_SLIDER_TEXT_CONFIG)
/* harmony export */ });
const CLIENT_SLIDER_LOGOS_CONFIG = {
  // rewind: true,
  type: "loop",
  arrows: false,
  pagination: false,
  center: true,
  focus: 'center',
  perPage: 5,
  cover: true,
  isNavigation: true,
  drag: false,
  // dragMinThreshold: {
  //     mouse: 4,
  //     touch: 10,
  // },
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

/***/ 99990:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-focus/our-story-focus.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurStoryFocusComponent: () => (/* binding */ OurStoryFocusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


const _c0 = function (a0) {
  return {
    "border-white bg-white text-theme-blue": a0
  };
};
function OurStoryFocusComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OurStoryFocusComponent_ng_container_8_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.tabClick($event, index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const index_r3 = ctx_r8.index;
    const item_r2 = ctx_r8.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.selectedItem == index_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2 == null ? null : item_r2.srv_our_story_page == null ? null : item_r2.srv_our_story_page.title, " ");
  }
}
function OurStoryFocusComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OurStoryFocusComponent_ng_container_8_div_1_Template, 2, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2 == null ? null : item_r2.srv_our_story_page == null ? null : item_r2.srv_our_story_page.visible);
  }
}
function OurStoryFocusComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13)(3, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.servicesData == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem] == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem].srv_our_story_page == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem].srv_our_story_page.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.servicesData == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem] == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem].srv_our_story_page == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem].srv_our_story_page.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.servicesData == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem] == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem].srv_our_story_page == null ? null : ctx_r1.servicesData[ctx_r1.selectedItem].srv_our_story_page.desc, " ");
  }
}
let OurStoryFocusComponent = /*#__PURE__*/(() => {
  var _class;
  class OurStoryFocusComponent {
    constructor() {
      this.selectedItem = 0;
    }
    tabClick(event, focusData) {
      this.selectedItem = focusData;
    }
  }
  _class = OurStoryFocusComponent;
  _class.ɵfac = function OurStoryFocusComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-our-story-focus"]],
    inputs: {
      ourStoryData: "ourStoryData",
      servicesData: "servicesData"
    },
    decls: 10,
    vars: 3,
    consts: [[1, "container"], [1, "pl-80"], [1, "assesment", "gap-5", "md:rounded-[40px]", "pb-0", "rounded-[18px]", "md:pt-2.5", "md:pb-5", "md:px-10", "bg-theme-purple-lighter", "text-white", "font-roboto"], [1, "relative", "mx-auto", "lg:w-fit"], [1, "font-bold", "text-center", "md:text-[30px]", "text-[20px]", "text-black", "font-lora", "pt-5"], [1, "md:text-[23px]", "text-[16px]", "text-center", "text-black", "font-roboto", "pt-3"], [1, "flex", "gap-5", "p-5", "mt-0", "overflow-auto", "sm:mt-4", "whitespace-nowrap", "pcos", "styled-scrollbar", "hover-scroll-visible"], [4, "ngFor", "ngForOf"], ["class", "flex flex-col-reverse items-start justify-center w-3/4 gap-5 pt-0 mx-auto sm:pt-4 lg:gap-10 lg:pt-10 lg:pb-10 lg:flex-row", 4, "ngIf"], ["class", "leading-none transition cursor-pointer py-2 px-4 text-black border-[1.5px] border-black rounded-full font-roboto text-[14px] sm:text-[19px] hover:border-white hover:bg-white hover:text-theme-blue", 3, "ngClass", "click", 4, "ngIf"], [1, "leading-none", "transition", "cursor-pointer", "py-2", "px-4", "text-black", "border-[1.5px]", "border-black", "rounded-full", "font-roboto", "text-[14px]", "sm:text-[19px]", "hover:border-white", "hover:bg-white", "hover:text-theme-blue", 3, "ngClass", "click"], [1, "flex", "flex-col-reverse", "items-start", "justify-center", "w-3/4", "gap-5", "pt-0", "mx-auto", "sm:pt-4", "lg:gap-10", "lg:pt-10", "lg:pb-10", "lg:flex-row"], ["alt", "", 1, "mx-auto", "lg:mx-0", "w-[236px]", "h-[250px]", 3, "src"], [1, "text-center", "para", "lg:text-left"], [1, "font-bold", "capitalize", "text-black", "text-[25px]", "lg:text-[24px]", "pt-5", "lg:pt-14", "font-lora"], [1, "text-black", "text", "lg:text-[21px]", "sm:pt-2", "font-roboto", "pt-2"]],
    template: function OurStoryFocusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurStoryFocusComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OurStoryFocusComponent_div_9_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ourStoryData == null ? null : ctx.ourStoryData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.servicesData == null ? null : ctx.servicesData[ctx.selectedItem] == null ? null : ctx.servicesData[ctx.selectedItem].srv_our_story_page == null ? null : ctx.servicesData[ctx.selectedItem].srv_our_story_page.visible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return OurStoryFocusComponent;
})();


/***/ }),

/***/ 82663:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-founders/our-story-founders.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurStoryFoundersComponent: () => (/* binding */ OurStoryFoundersComponent)
/* harmony export */ });
/* harmony import */ var _our_story_founders_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-story-founders.constant */ 48708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-splide */ 10080);




function OurStoryFoundersComponent_splide_slide_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "splide-slide")(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const founderSlide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", founderSlide_r1 == null ? null : founderSlide_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", founderSlide_r1 == null ? null : founderSlide_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", founderSlide_r1 == null ? null : founderSlide_r1.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", founderSlide_r1 == null ? null : founderSlide_r1.desc2, " ");
  }
}
let OurStoryFoundersComponent = /*#__PURE__*/(() => {
  var _class;
  class OurStoryFoundersComponent {
    constructor() {
      this.foundersSlideConfig = _our_story_founders_constant__WEBPACK_IMPORTED_MODULE_0__.FOUNDERS_SLIDE_CONFIG;
    }
    ngOnInit() {
      //  console.log(this.ourStoryData);
    }
  }
  _class = OurStoryFoundersComponent;
  _class.ɵfac = function OurStoryFoundersComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-our-story-founders"]],
    inputs: {
      ourStoryData: "ourStoryData",
      type: "type"
    },
    decls: 5,
    vars: 3,
    consts: [[1, "container"], [1, "py-10", "text-xl", "md:text-2xl", "lg:text-3xl", "font-bold", "text-center", "text-theme-brown", "font-lora"], [1, "arrow-change", 3, "options"], [4, "ngFor", "ngForOf"], [1, "pb-4", "text-center", "sm:pb-10"], [1, "border", "border-theme-brown", "shrink-0", "w-fit", "relative", "inline-block", "rounded-[130px]", "my-2", "pt-2"], ["alt", "", 1, "-mt-2", "h-[310px]", "object-cover", "shrink-0", "w-[235px]", "sm:-mt-4", "-ml-1", "sm:-ml-2", "rounded-[130px]", 3, "src"], [1, "text-xl", "font-bold", "font-lora", "mb-0.5"], [1, "mb-2", "text-lg", "font-roboto"], [1, "text-sm", "sm:text-base", "font-roboto"]],
    template: function OurStoryFoundersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "splide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OurStoryFoundersComponent_splide_slide_4_Template, 10, 4, "splide-slide", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ourStoryData == null ? null : ctx.ourStoryData[ctx.type] == null ? null : ctx.ourStoryData[ctx.type].title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.foundersSlideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ourStoryData == null ? null : ctx.ourStoryData[ctx.type] == null ? null : ctx.ourStoryData[ctx.type].data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideSlideComponent],
    encapsulation: 2
  });
  return OurStoryFoundersComponent;
})();


/***/ }),

/***/ 48708:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-founders/our-story-founders.constant.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 50088:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-hero-sec/our-story-hero-sec.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurStoryHeroSecComponent: () => (/* binding */ OurStoryHeroSecComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 79457);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);


let OurStoryHeroSecComponent = /*#__PURE__*/(() => {
  var _class;
  class OurStoryHeroSecComponent {
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_0___default().init({});
    }
  }
  _class = OurStoryHeroSecComponent;
  _class.ɵfac = function OurStoryHeroSecComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-our-story-hero-sec"]],
    inputs: {
      bannerData: "bannerData"
    },
    decls: 21,
    vars: 6,
    consts: [[1, "py-2", "sm:py-12", "lg:py-28", "xl:py-20"], [1, "container"], [1, "grid", "gap-6", "sm:gap-10", "lg:gap-4", "lg:grid-cols-2"], [1, "items-center", "justify-center", "pt-6", "sm:pt-[50px]", "md:pt-[100px]", "lg:pr-9", "xl:pr-0"], [1, "relative", "text-3xl", "font-bold", "leading-tight", "text-center", "sm:text-5xl", "lg:text-left", "xl:text-6xl", "text-theme-brown", "font-lora"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/employer-page/hero-section/flower.png", "alt", "", 1, "absolute", "w-6", "h-6", "-left-5", "sm:left-0", "lg:-left-4", "-top-5", "sm:-top-14", "lg:w-10", "lg:h-10"], [1, "pt-5", "text-lg", "sm:text-xl", "md:text-2xl", "font-roboto", 3, "innerHTML"], [1, "relative", "z-20", "pr-2", "mx-auto", "mb-5", "border", "rounded-full", "border-theme-brown", "w-fit", "h-fit", "lg:w-auto", "sm:px-0", "sm:mb-0"], ["alt", "", 1, "relative", "lg:-ml-3", "shrink-0", "lg:mb-0", "lg:mt-2", "rounded-full", "-z-[0]", "hidden", "sm:block", "sm:-ml-6", "max-w-[560px]", 3, "src"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "sm:w-40", "md:w-32", "w-28", "text-center", "font-bold", "md:rounded-t-xl", "rounded-t-lg", "lg:rounded-s-xl", "rounded-s-lg", "text-theme-brown", "leading-tight", "md:text-lg", "lg:text-xl", "z-20", "xl:top-48", "2xl:-left-12", "lg:top-40", "md:top-44", "xl:-left-12", "absolute", "bg-white", "px-1", "lg:px-5", "py-4", "shadow-2xl", "font-lora", "sm:top-36", "text-lg", "sm:text-xl", "lg:w-40", "top-24", "lg:-left-8-", "md:-left-14", "left-[-0.3rem]"], [1, "absolute", "right-0", "bottom-40", "sm:top-0", "sm:right-12", "w-[60px]", "md:w-[90px]", "md:h-[95px]"], ["width", "100%", "height", "100%", "viewBox", "0 0 89 95", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.9357 82.353C7.60705 76.1338 16.2119 75.9818 23.8851 77.9478C24.8337 78.1973 25.7739 78.4773 26.7044 78.7873C26.8646 82.1849 27.9032 85.48 29.7186 88.3582C31.3028 90.7106 37.0799 95.9769 40.3159 93.2854C43.4143 90.7123 38.819 84.5914 36.9737 82.8741C34.3291 80.5897 31.2934 78.8009 28.0123 77.5934C27.9411 75.2977 27.9904 72.9997 28.1598 70.709C28.5882 63.7603 29.8444 56.887 31.9018 50.2344C35.7395 37.7547 42.217 26.243 50.8958 16.4788C59.6101 6.72503 75.7089 -5.73896 87.9794 6.02438C88.1295 6.173 88.3477 5.94044 88.1934 5.77343C77.7718 -4.60133 63.0886 3.18018 54.3049 11.5713C43.8888 21.6331 36.052 34.0521 31.458 47.7769C29.2369 54.2784 27.7684 61.0122 27.0813 67.8467C26.7277 70.9358 26.5713 74.0442 26.6129 77.153C17.5797 74.1117 6.69122 74.4571 1.12105 81.6729C1.03025 81.7802 0.985629 81.9191 0.996921 82.0591C1.00563 82.1642 1.04549 82.2643 1.11142 82.3467C1.17734 82.4291 1.26634 82.49 1.36707 82.5216C1.46781 82.5532 1.57571 82.5542 1.67702 82.5243C1.77833 82.4944 1.86825 82.4342 1.9357 82.353ZM32.7772 81.5214C34.6845 82.5843 36.3724 83.9992 37.7512 85.6909C38.7776 87.0918 41.5754 91.7476 37.3378 92.3863C33.1002 93.0251 29.4476 85.8894 28.6415 82.8198C28.3432 81.6462 28.1387 80.4507 28.0301 79.2445C29.6859 79.8587 31.2838 80.6185 32.8048 81.5151L32.7772 81.5214Z", "fill", "#FF8686"], [1, "absolute", "sm:-left-16", "bottom-4", "left-0", "sm:bottom-20", "w-[60px]", "h-auto", "md:w-[132px]", "md:h-[49px]"], ["width", "100%", "height", "100%", "viewBox", "0 0 132 49", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.29138 29.4563C5.06815 18.5816 11.1371 8.62582 19.096 0.248976C19.2074 0.135452 19.3495 0.0562159 19.5053 0.0208093C19.6611 -0.0145974 19.824 -0.00466473 19.9742 0.0494112C20.1244 0.103487 20.2557 0.1994 20.3521 0.3256C20.4485 0.4518 20.5061 0.602904 20.5177 0.760717C20.5383 0.972275 20.4774 1.18371 20.3472 1.35276C14.2305 8.5299 9.15132 16.5138 5.25545 25.0752C3.79521 28.3131 1.40273 33.1692 2.0421 36.8398C4.04545 48.5337 12.8632 39.8531 16.8287 36.8398C30.957 26.2904 44.476 14.9644 57.3219 2.9152C58.1276 2.1612 59.3239 3.2922 58.5594 4.10064C53.5105 9.54606 49.6839 16.0136 47.334 23.0664C45.4696 28.4111 39.3358 52.3717 54.8029 43.9988C60.5902 40.8725 65.932 34.5234 70.4942 29.8333C77.0657 22.9972 83.1101 15.6831 88.5766 7.95231L88.7169 7.7713C89.3288 6.99008 90.6639 8.0367 90.107 8.8465C89.2641 10.0374 88.4103 11.2147 87.5481 12.377C83.9502 17.7445 81.1838 23.6146 79.3409 29.7925C78.465 32.667 73.1645 48.1281 82.8058 46.5384C86.1292 45.994 90.4136 41.6388 93.0838 39.5605C106.897 29.0807 119.125 16.9119 130.85 4.17142C131.435 3.52902 132.381 4.40823 131.838 5.07785C123.421 15.4884 114.017 25.0774 103.754 33.7136C99.4321 37.3611 94.9676 40.8317 90.3572 44.124C87.7145 46.0212 84.5287 48.8127 81.0514 48.8957C69.9236 49.1475 75.7934 32.0667 81.886 19.7019C76.9347 25.8683 71.5581 31.6878 65.7945 37.1188C61.8291 40.8303 51.8839 52.8032 45.6236 47.7933C40.6585 43.845 42.5505 34.2294 43.7742 29.0793C45.2673 22.6716 47.7994 16.5457 51.272 10.9397C44.0744 17.4603 36.6933 23.7797 29.1375 29.8905C23.8658 34.077 18.5515 38.5425 12.9045 42.2961C10.622 43.8164 7.77166 45.7558 4.8512 45.0168C-1.72948 43.37 -0.185364 34.0198 1.28999 29.4577L1.29138 29.4563Z", "fill", "#93CFCF"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "px-3", "py-5", "text-lg", "font-bold", "leading-tight", "text-center", "bg-white", "rounded-bl-lg", "shadow-2xl", "rounded-e-lg", "w-36", "text-theme-brown", "lg:rounded-bl-xl", "lg:rounded-e-xl", "font-lora", "lg:px-5", "lg:text-xl", "lg:w-25", "md:text-lg", "md:w-36", "2xl:-right-16", "xl:-right-4-", "md:top-80", "md:-right-6", "lg:right-0", "xl:top-56", "lg:top-96", "white-box", "sm:top-42", "sm:w-44", "sm:right-[22px]", "sm:text-xl", "lg:w-44", "sm:top-[22rem]", "top-56", "-right-2"], ["alt", "", 1, "relative", "rounded-full", "-z-[1]", "sm:hidden", "w-full", 3, "src"]],
    template: function OurStoryHeroSecComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bannerData == null ? null : ctx.bannerData.ostr_title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.bannerData == null ? null : ctx.bannerData.ostr_desc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bannerData == null ? null : ctx.bannerData.ostr_banner == null ? null : ctx.bannerData.ostr_banner.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bannerData == null ? null : ctx.bannerData.ostr_banner == null ? null : ctx.bannerData.ostr_banner.left_section == null ? null : ctx.bannerData.ostr_banner.left_section.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bannerData == null ? null : ctx.bannerData.ostr_banner == null ? null : ctx.bannerData.ostr_banner.right_section == null ? null : ctx.bannerData.ostr_banner.right_section.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bannerData == null ? null : ctx.bannerData.ostr_banner == null ? null : ctx.bannerData.ostr_banner.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    encapsulation: 2
  });
  return OurStoryHeroSecComponent;
})();


/***/ }),

/***/ 84399:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/out-story-page/components/our-story-purpose/our-story-purpose.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurStoryPurposeComponent: () => (/* binding */ OurStoryPurposeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/safe-pipe/safe.pipe */ 66654);



function OurStoryPurposeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.ourStoryData == null ? null : ctx_r0.ourStoryData.ostr_how_gytree_help == null ? null : ctx_r0.ourStoryData.ostr_how_gytree_help.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx_r0.ourStoryData == null ? null : ctx_r0.ourStoryData.ostr_how_gytree_help == null ? null : ctx_r0.ourStoryData.ostr_how_gytree_help.desc), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
let OurStoryPurposeComponent = /*#__PURE__*/(() => {
  var _class;
  class OurStoryPurposeComponent {}
  _class = OurStoryPurposeComponent;
  _class.ɵfac = function OurStoryPurposeComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-our-story-purpose"]],
    inputs: {
      ourStoryData: "ourStoryData"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "container", "text-center"], ["class", "py-16 mx-auto px-3 sm:max-w-[60%]", 4, "ngIf"], [1, "py-16", "mx-auto", "px-3", "sm:max-w-[60%]"], [1, "text-xl", "md:text-2xl", "lg:text-3xl", "font-bold", "font-lora", "text-theme-brown"], [1, "pt-3", "text-base", "list-none", "font-roboto"], [1, "pt-4", "ql-editor", "px-0", "text-center", 3, "innerHTML"]],
    template: function OurStoryPurposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OurStoryPurposeComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ourStoryData == null ? null : ctx.ourStoryData.ostr_how_gytree_help);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe],
    encapsulation: 2
  });
  return OurStoryPurposeComponent;
})();


/***/ }),

/***/ 7272:
/*!********************************************************************!*\
  !*** ./src/app/modules/out-story-page/out-story-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutStoryPageComponent: () => (/* binding */ OutStoryPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/products-list/products-list.service */ 52630);
/* harmony import */ var _shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/employer-list/employer-list.service */ 98034);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _shared_services_banner_list_banner_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/banner-list/banner-list.service */ 33292);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _home_components_gytree_clients_gytree_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/components/gytree-clients/gytree-clients.component */ 54154);
/* harmony import */ var _components_our_story_hero_sec_our_story_hero_sec_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/our-story-hero-sec/our-story-hero-sec.component */ 50088);
/* harmony import */ var _components_our_story_purpose_our_story_purpose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/our-story-purpose/our-story-purpose.component */ 84399);
/* harmony import */ var _components_our_story_founders_our_story_founders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/our-story-founders/our-story-founders.component */ 82663);
/* harmony import */ var _components_our_story_focus_our_story_focus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/our-story-focus/our-story-focus.component */ 99990);













let OutStoryPageComponent = /*#__PURE__*/(() => {
  var _class;
  class OutStoryPageComponent {
    constructor(productsDataService, employerListService, pageListService, GetData, bannerListService, titleService, metaService) {
      this.productsDataService = productsDataService;
      this.employerListService = employerListService;
      this.pageListService = pageListService;
      this.GetData = GetData;
      this.bannerListService = bannerListService;
      this.titleService = titleService;
      this.metaService = metaService;
      this.employerData = [];
      this.ProductData = [];
      this.servicesData = [];
      this.gytreeClient = [];
      this.ourStoryData = [];
      this.isDataVisible = {
        banner: false,
        whyGytree: false,
        didYouKnow: false,
        gytreeImpact: false,
        gytreeMembership: false,
        gytreeTestimonial: false,
        gytreeFaq: false,
        gytreeVideos: false,
        gytreeDoctor: false,
        gytreeHowItWorks: false,
        gytreeHelpwith: false,
        gytreeClient: false
      };
      this.GetData.FeatureIn.subscribe(res => {
        this.ProductData = res;
      });
    }
    ngOnInit() {
      this.getBannerDataOfStory();
      // this.getProductsData();
      this.getUserServices();
    }
    getBannerDataOfStory() {
      this.pageListService.getBannerList('our-story').subscribe(resp => {
        this.bannerData = resp?.data?.data;
        this.employeeWeTreatData = this.bannerData?.ostr_service;
        this.setMetaTagAndTitle();
      });
    }
    /**
     * Method to get product featured Data
     */
    getProductsData() {
      this.pageListService.getBannerList('feature-in').subscribe(resp => {
        this.ProductData = resp?.data?.data;
      });
    }
    getUserServices() {
      this.pageListService.getMasterUserList('service').subscribe(resp => {
        this.servicesData = resp?.data?.data;
      });
    }
    /**
     * Meta tag and title
     */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Our Story',
        metaTitle: this.bannerData?.ostr_meta?.meta_title,
        metaDescription: this.bannerData?.ostr_meta?.meta_desc,
        metaKeyword: this.bannerData?.ostr_meta?.meta_keywords,
        metaImage: this.bannerData?.ostr_meta?.meta_image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
    }
  }
  _class = OutStoryPageComponent;
  _class.ɵfac = function OutStoryPageComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_1__.ProductsListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_2__.EmployerListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_3__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_4__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_banner_list_banner_list_service__WEBPACK_IMPORTED_MODULE_5__.BannerListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Meta));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-out-story-page"]],
    decls: 6,
    vars: 9,
    consts: [[1, "block", "lg:pt-[85px]", 3, "bannerData"], [1, "block", "bg-theme-light-cream", 3, "ourStoryData"], [1, "block", "mb-5", 3, "ourStoryData", "type"], [1, "block", 3, "ourStoryData", "servicesData"], ["id", "gytree-client-employer-block", 1, "block", 3, "ProductListData"]],
    template: function OutStoryPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-our-story-hero-sec", 0)(1, "app-our-story-purpose", 1)(2, "app-our-story-founders", 2)(3, "app-our-story-founders", 2)(4, "app-our-story-focus", 3)(5, "app-gytree-clients", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bannerData", ctx.bannerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ourStoryData", ctx.bannerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ourStoryData", ctx.bannerData)("type", "ostr_founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ourStoryData", ctx.bannerData)("type", "ostr_investor");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ourStoryData", ctx.employeeWeTreatData)("servicesData", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ProductListData", ctx.ProductData);
      }
    },
    dependencies: [_home_components_gytree_clients_gytree_clients_component__WEBPACK_IMPORTED_MODULE_6__.GytreeClientsComponent, _components_our_story_hero_sec_our_story_hero_sec_component__WEBPACK_IMPORTED_MODULE_7__.OurStoryHeroSecComponent, _components_our_story_purpose_our_story_purpose_component__WEBPACK_IMPORTED_MODULE_8__.OurStoryPurposeComponent, _components_our_story_founders_our_story_founders_component__WEBPACK_IMPORTED_MODULE_9__.OurStoryFoundersComponent, _components_our_story_focus_our_story_focus_component__WEBPACK_IMPORTED_MODULE_10__.OurStoryFocusComponent],
    encapsulation: 2
  });
  return OutStoryPageComponent;
})();


/***/ }),

/***/ 81463:
/*!*****************************************************************!*\
  !*** ./src/app/modules/out-story-page/out-story-page.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutStoryPageModule: () => (/* binding */ OutStoryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _out_story_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./out-story-page.component */ 7272);
/* harmony import */ var _components_our_story_hero_sec_our_story_hero_sec_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/our-story-hero-sec/our-story-hero-sec.component */ 50088);
/* harmony import */ var _components_our_story_purpose_our_story_purpose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-story-purpose/our-story-purpose.component */ 84399);
/* harmony import */ var _components_our_story_founders_our_story_founders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/our-story-founders/our-story-founders.component */ 82663);
/* harmony import */ var _components_our_story_focus_our_story_focus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/our-story-focus/our-story-focus.component */ 99990);
/* harmony import */ var _components_our_story_clients_our_story_clients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/our-story-clients/our-story-clients.component */ 68204);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _home_components_gytree_clients_gytree_clients_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/components/gytree-clients/gytree-clients.module */ 16920);
/* harmony import */ var src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/safe-pipe/safe-pipe.module */ 53547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 78371);


// Components






// External modules






const routes = [{
  path: '',
  component: _out_story_page_component__WEBPACK_IMPORTED_MODULE_0__.OutStoryPageComponent
}];
let OutStoryPageModule = /*#__PURE__*/(() => {
  var _class;
  class OutStoryPageModule {}
  _class = OutStoryPageModule;
  _class.ɵfac = function OutStoryPageModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), ngx_splide__WEBPACK_IMPORTED_MODULE_12__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGModule, _home_components_gytree_clients_gytree_clients_module__WEBPACK_IMPORTED_MODULE_7__.HomeGytreeClientsModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__.SafePipeModule]
  });
  return OutStoryPageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](OutStoryPageModule, {
    declarations: [_out_story_page_component__WEBPACK_IMPORTED_MODULE_0__.OutStoryPageComponent, _components_our_story_hero_sec_our_story_hero_sec_component__WEBPACK_IMPORTED_MODULE_1__.OurStoryHeroSecComponent, _components_our_story_purpose_our_story_purpose_component__WEBPACK_IMPORTED_MODULE_2__.OurStoryPurposeComponent, _components_our_story_founders_our_story_founders_component__WEBPACK_IMPORTED_MODULE_3__.OurStoryFoundersComponent, _components_our_story_focus_our_story_focus_component__WEBPACK_IMPORTED_MODULE_4__.OurStoryFocusComponent, _components_our_story_clients_our_story_clients_component__WEBPACK_IMPORTED_MODULE_5__.OurStoryClientsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, ngx_splide__WEBPACK_IMPORTED_MODULE_12__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGModule, _home_components_gytree_clients_gytree_clients_module__WEBPACK_IMPORTED_MODULE_7__.HomeGytreeClientsModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__.SafePipeModule]
  });
})();

/***/ }),

/***/ 98034:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/services/employer-list/employer-list.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 52630:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/services/products-list/products-list.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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