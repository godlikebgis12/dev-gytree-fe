exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 80623:
/*!******************************************************************!*\
  !*** ./src/app/modules/home/components/learn/learn.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LearnComponent: () => (/* binding */ LearnComponent)
/* harmony export */ });
/* harmony import */ var _learn_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learn.constant */ 31065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _shared_directive_youtube_directive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directive/youtube-directive.directive */ 28464);
/* harmony import */ var _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/safe-pipe/safe.pipe */ 66654);






const _c0 = function (a0, a1) {
  return {
    "text-theme-light-pink relative font-semibold": a0,
    "text-theme-light-grey": a1
  };
};
function LearnComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LearnComponent_li_5_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const tab_r3 = restoredCtx.$implicit;
      const index_r4 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.tabClick(tab_r3, index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ctx_r0.activeTab === (tab_r3 == null ? null : tab_r3.value), ctx_r0.activeTab !== (tab_r3 == null ? null : tab_r3.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tab_r3 == null ? null : tab_r3.title, " ");
  }
}
function LearnComponent_ng_container_8_splide_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "splide-slide", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const videoSlide_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", videoSlide_r8.vd_url)("video", videoSlide_r8.vd_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", videoSlide_r8 == null ? null : videoSlide_r8.vd_title)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 4, videoSlide_r8 == null ? null : videoSlide_r8.vd_title, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function LearnComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "splide", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LearnComponent_ng_container_8_splide_slide_2_Template, 8, 7, "splide-slide", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.learnSliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.videoData);
  }
}
function LearnComponent_ng_container_9_splide_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "splide-slide", 11)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LearnComponent_ng_container_9_splide_slide_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const article_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.articleClickHandler(article_r10.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21)(4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const article_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", article_r10 == null ? null : article_r10.media == null ? null : article_r10.media.thumbnail == null ? null : article_r10.media.thumbnail.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", article_r10 == null ? null : article_r10.title, " ");
  }
}
function LearnComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "splide", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LearnComponent_ng_container_9_splide_slide_2_Template, 6, 2, "splide-slide", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r2.learnSliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.articlesData);
  }
}
const _c1 = function (a0) {
  return {
    "left": a0
  };
};
let LearnComponent = /*#__PURE__*/(() => {
  var _class;
  class LearnComponent {
    constructor() {
      this.activeTab = 'video';
      this.activeTabIndex = 0;
      this.tabs = _learn_constant__WEBPACK_IMPORTED_MODULE_0__.LEARN_TABS;
      this.learnSliderConfig = _learn_constant__WEBPACK_IMPORTED_MODULE_0__.LEARN_SLIDER_CONFIG;
      this.videoData = [];
      this.articlesData = [];
    }
    /**
     * tab logic
     */
    tabClick(tab, index) {
      this.activeTabIndex = index;
      this.activeTab = tab?.value;
    }
    /**
    * Click Handler for opening selected Article in new Tab
    * @param url article url
    */
    articleClickHandler(url) {
      window.open(url, "_blank");
    }
  }
  _class = LearnComponent;
  _class.ɵfac = function LearnComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-learn"]],
    inputs: {
      videoData: "videoData",
      articlesData: "articlesData"
    },
    decls: 10,
    vars: 6,
    consts: [[1, "container", "pt-5", "pb-4", "mx-auto", "lg:py-12"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "pb-8", "mt-0"], [1, "text-theme-brown", "font-lora", "text-2xl", "sm:text-[30px]", "font-extrabold", "pb-4", "sm:pb-8"], [1, "relative", "inline-flex", "gap-5", "mx-auto"], ["class", "cursor-pointer min-w-[80px] text-center text-xl sm:text-[25px] font-roboto py-1.5 px-3 select-none", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "absolute", "transition-all", "left-0", "bottom-0", "w-[80px]", "border-b-2", "border-theme-light-pink", 3, "ngStyle"], [1, "my-3"], [4, "ngIf"], [1, "cursor-pointer", "min-w-[80px]", "text-center", "text-xl", "sm:text-[25px]", "font-roboto", "py-1.5", "px-3", "select-none", 3, "ngClass", "click"], [1, "arrow-change", "learn-slider", 3, "options"], ["class", "flex flex-col w-full px-8", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "w-full", "px-8"], ["appYoutubeDirective", "", 1, "h-[165px]", "sm:h-[180px]", "lg:h-[250px]", "bg-no-repeat", "bg-cover", "bg-center", "rounded-xl", "sm:rounded-[20px]", "lg:rounded-[41px]", "relative", "overflow-hidden", "video__item", "js-video-item", "flex", "items-center", "justify-center", 3, "id", "video"], [1, "overflow-hidden", "rounded-full", "video__play", "js-video-play"], [1, "absolute", "p-4", "z-[2]", "bottom-0", "right-0", "text-white", "font-roboto"], [1, "bg-black", "blur-[27px]", "absolute", "top-0", "left-0", "w-28", "h-16", "z-[1]"], [1, "mt-3"], [1, "text-black", "md:text-xl", "lg:text-[25px]", "font-bold", "font-roboto", "leading-tight", "truncate", 3, "title", "innerHTML"], ["class", "flex flex-col w-full px-8 ", 4, "ngFor", "ngForOf"], [1, "h-[165px]", "sm:h-[180px]", "lg:h-[250px]", "rounded-xl", "sm:rounded-[20px]", "lg:rounded-[30px]", "relative", "overflow-hidden", "cursor-pointer", 3, "click"], ["alt", "gallery", 1, "block", "object-cover", "object-right-bottom", "w-full", "h-full", 3, "src"], [1, "mt-6"], [1, "text-black", "md:text-xl", "lg:text-[25px]", "font-bold", "font-roboto", "leading-tight", "truncate"]],
    template: function LearnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LearnComponent_li_5_Template, 2, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LearnComponent_ng_container_8_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LearnComponent_ng_container_9_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, 88 * ctx.activeTabIndex + 20 * ctx.activeTabIndex + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "video" && (ctx.videoData == null ? null : ctx.videoData.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "read");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideSlideComponent, _shared_directive_youtube_directive_directive__WEBPACK_IMPORTED_MODULE_1__.YoutubeDirectiveDirective, _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe],
    encapsulation: 2
  });
  return LearnComponent;
})();


/***/ }),

/***/ 31065:
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/components/learn/learn.constant.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LEARN_SLIDER_CONFIG: () => (/* binding */ LEARN_SLIDER_CONFIG),
/* harmony export */   LEARN_TABS: () => (/* binding */ LEARN_TABS)
/* harmony export */ });
const LEARN_TABS = [{
  title: "Video",
  value: "video"
}, {
  title: "Read",
  value: "read"
}];
const LEARN_SLIDER_CONFIG = {
  perPage: 3,
  gap: 50,
  padding: 100,
  pagination: false,
  breakpoints: {
    1280: {
      perPage: 2,
      padding: 50
    },
    600: {
      gap: 10,
      padding: 60,
      perPage: 1
    }
  }
};
/*
export const VIDEO_SLIDES: any = [
    {
        image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/learn/images/good-diet.png",
        title: "Is milk good for health?",
        mins: "10mins",
        tags: ["Diet", "Healthy Eating"],
        gtv_url: "https://www.youtube.com/embed/yrjFg2RScjY"
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/learn/images/ncne.png",
        title: "Reason Behind ACNE",
        mins: "18mins",
        tags: ["Skin and Hair"],
        gtv_url: "https://www.youtube.com/watch?v=bb19VcFHiyw&list=PLyYLsO6yPkR-7KHdJ3zFzAneW1B9VsgYt&index=8"
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/learn/images/pregnancy-ncne .png",
        title: "Is Pregnancy acne & pigmentation",
        mins: "22mins",
        tags: ["Skin and Hair"],
        gtv_url: "https://www.youtube.com/embed/L89zi3z-Wvs"
    },
]

export const IMAGE_SLIDES: any = [
    {
        image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/learn/images/read-img-1.webp",
        title: "Reason Behind ACNE",
        tags: ["Skin and Hair"]
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/learn/images/read-img-2.webp",
        title: "Is milk good for health?",
        tags: ["Diet", "Healthy Eating"]
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/learn/images/read-img-3.webp",
        title: "Is Pregnancy acne & pigmentation",
        tags: ["Skin and Hair"]
    },
] */

/***/ }),

/***/ 11688:
/*!***************************************************************!*\
  !*** ./src/app/modules/home/components/learn/learn.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeLearnModule: () => (/* binding */ HomeLearnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _learn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learn.component */ 80623);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 50295);
/* harmony import */ var src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/safe-pipe/safe-pipe.module */ 53547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 78371);







let HomeLearnModule = /*#__PURE__*/(() => {
  var _class;
  class HomeLearnModule {}
  _class = HomeLearnModule;
  _class.ɵfac = function HomeLearnModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_6__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.SafePipeModule]
  });
  return HomeLearnModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeLearnModule, {
    declarations: [_learn_component__WEBPACK_IMPORTED_MODULE_1__.LearnComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_6__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.SafePipeModule],
    exports: [_learn_component__WEBPACK_IMPORTED_MODULE_1__.LearnComponent]
  });
})();

/***/ }),

/***/ 6267:
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/products/home-products.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeProductModule: () => (/* binding */ HomeProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 42663);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);




let HomeProductModule = /*#__PURE__*/(() => {
  var _class;
  class HomeProductModule {}
  _class = HomeProductModule;
  _class.ɵfac = function HomeProductModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideModule]
  });
  return HomeProductModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeProductModule, {
    declarations: [_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideModule],
    exports: [_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent]
  });
})();

/***/ }),

/***/ 42663:
/*!************************************************************************!*\
  !*** ./src/app/modules/home/components/products/products.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _products_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.constant */ 46425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);





function ProductsComponent_splide_slide_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const productsData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", productsData_r1 == null ? null : productsData_r1.prdct_variant, ") ");
  }
}
function ProductsComponent_splide_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide")(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_splide_slide_9_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const productsData_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r5.redirectNext(productsData_r1 == null ? null : productsData_r1.prdct_redirect_url);
      ctx_r5.trackingWebEnagege("shop clicks", productsData_r1 == null ? null : productsData_r1.prdct_name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.eventTracking("shop clicks", productsData_r1 == null ? null : productsData_r1.prdct_name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 10)(5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12)(7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductsComponent_splide_slide_9_div_9_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Buy Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const productsData_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", productsData_r1 == null ? null : productsData_r1.prdct_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", productsData_r1 == null ? null : productsData_r1.prdct_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", productsData_r1 == null ? null : productsData_r1.prdct_variant);
  }
}
let ProductsComponent = /*#__PURE__*/(() => {
  var _class;
  class ProductsComponent {
    constructor(eventTrackingService) {
      this.eventTrackingService = eventTrackingService;
      this.splideConfig = _products_constant__WEBPACK_IMPORTED_MODULE_0__.GYTREE_PRODUCTS_SLIDES_CONFIG;
    }
    redirectNext(url) {
      window.open(url, '_blank');
    }
    trackingWebEnagege(event, value) {
      this.eventTrackingService.trackWebEnagegeEvent(event, value);
    }
    eventTracking(event, value) {
      this.eventTrackingService.trackEvent(event, value);
    }
  }
  _class = ProductsComponent;
  _class.ɵfac = function ProductsComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_1__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-products"]],
    inputs: {
      productList: "productList",
      textColorClass: "textColorClass"
    },
    decls: 10,
    vars: 3,
    consts: [[1, "pt-5", "mx-auto", "md:container", "lg:pt-12"], [1, "flex", "flex-wrap", "lg:w-[65%]", "w-full", "mx-auto", "justify-center"], [1, "flex", "items-center", "justify-between", "w-full", "px-5", "md:px-0"], [1, "font-lora", "md:text-[30px]", "sm:text-[20px]", "font-extrabold", "text-[23px]", 3, "ngClass"], ["href", "https://shop.gytree.com/", "target", "_blank", 1, "lg:text-[23px]", "sm:text-[20px]", "text-[16px]", "text-theme-light-pink", "hover:underline", "hover:duration-75", "cursor-pointer", 3, "click"], [1, "arrow-change", "testimonial-slider", 3, "options"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "w-full", "gap-3", "py-10", "md:gap-2", "md:px-0"], [1, "flex", "flex-col", "flex-wrap", "cursor-pointer", "p-2", 3, "click"], [1, "relative", "w-full"], [1, "mt-[100%]"], ["alt", "gallery", 1, "block", "object-cover", "object-center", "w-full", "h-full", "rounded-lg", "lg:rounded-[40px]", "absolute", "inset-0", 3, "src"], [1, "pt-5", "lg:text-[23px]", "sm:text-[20px]", "text-[13px]", "leading-tight", "font-lora", "text-black", "font-roboto", "font-normal"], [1, ""], ["class", "", 4, "ngIf"], [1, "w-40", "px-4", "py-3", "mt-2", "font-bold", "text-white", "bg-theme-brown", "rounded-3xl", "text-center", "font-roboto"]],
    template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Gytree Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_6_listener() {
          ctx.trackingWebEnagege("shop clicks", "view all");
          return ctx.eventTracking("shop clicks", "view all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "splide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductsComponent_splide_slide_9_Template, 12, 3, "splide-slide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.textColorClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.splideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideSlideComponent],
    encapsulation: 2
  });
  return ProductsComponent;
})();


/***/ }),

/***/ 46425:
/*!***********************************************************************!*\
  !*** ./src/app/modules/home/components/products/products.constant.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GYTREE_PRODUCTS_SLIDES_CONFIG: () => (/* binding */ GYTREE_PRODUCTS_SLIDES_CONFIG)
/* harmony export */ });
const GYTREE_PRODUCTS_SLIDES_CONFIG = {
  perPage: 3,
  padding: 4,
  pagination: false,
  center: true,
  autoplay: false,
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
      gap: 1,
      perPage: 2,
      padding: 8,
      arrows: false
    }
  }
};

/***/ }),

/***/ 57274:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-testimonial/components/package-testimonial-box/package-testimonial-box.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageTestimonialBoxComponent: () => (/* binding */ PackageTestimonialBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/image-lazy-load/lazy-load.directive */ 74717);
/* harmony import */ var _shared_image_lazy_load_img_preloader_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/image-lazy-load/img-preloader.directive */ 92295);





function PackageTestimonialBoxComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function PackageTestimonialBoxComponent_div_10_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function PackageTestimonialBoxComponent_div_10_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 13)(3, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 15)(5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function PackageTestimonialBoxComponent_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PackageTestimonialBoxComponent_div_10_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PackageTestimonialBoxComponent_div_10_ng_container_2_ng_container_2_Template, 6, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r1 - 0.5 > ctx_r3.testimonial.tstm_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r1 - 0.5 <= ctx_r3.testimonial.tstm_rating);
  }
}
function PackageTestimonialBoxComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PackageTestimonialBoxComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PackageTestimonialBoxComponent_div_10_ng_container_2_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r1 <= ctx_r0.testimonial.tstm_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r1 > ctx_r0.testimonial.tstm_rating);
  }
}
let PackageTestimonialBoxComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageTestimonialBoxComponent {
    constructor() {
      this.class = "block pb-4 lg:pb-7 last:pb-0";
      /**
       * rating data
       */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
  }
  _class = PackageTestimonialBoxComponent;
  _class.ɵfac = function PackageTestimonialBoxComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-testimonial-box"]],
    hostVars: 2,
    hostBindings: function PackageTestimonialBoxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
      }
    },
    inputs: {
      testimonial: "testimonial"
    },
    decls: 11,
    vars: 4,
    consts: [[1, "relative", "px-3", "py-3", "font-roboto", "bg-white", "lg:py-4", "lg:px-6", "rounded-2xl", "lg:rounded-[26px]", "text-sm", "md:text-sm", "lg:text-base"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/others/chatbox-bottom-arrow.png", "alt", "", 1, "absolute", "top-[calc(100%-1px)]", "left-5"], [1, "flex", "items-center", "pt-3", "lg:pt-4"], [1, "w-8", "h-8", "lg:h-12", "lg:w-12", "me-3"], ["alt", "", 1, "w-full", "rounded-full", "h-full", "object-cover", "object-top", 3, "img-preloader"], [1, "text-[12px]", "font-medium", "lg:text-xl", "sm:text-normal", "font-roboto"], [1, "flex", "items-center"], ["class", "block w-4 h-4 lg:w-6 lg:h-6 text-theme-yellow", 4, "ngFor", "ngForOf"], [1, "block", "w-4", "h-4", "lg:w-6", "lg:h-6", "text-theme-yellow"], [4, "ngIf"], [1, "block", "w-5", "h-5", "text-theme-yellow", "[&>svg]:h-full", "[&>svg]:w-full", 3, "inlineSVG"], [1, "block", "w-5", "h-5", "text-[#7D7D7D]", "[&>svg]:h-full", "[&>svg]:w-full", 3, "inlineSVG"], [1, "block", "w-5", "h-5", "[&>svg]:h-full", "[&>svg]:w-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["clip-path", "url(#clip0_3650_1917)"], ["d", "M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z", 1, "fill-theme-yellow"], ["d", "M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                    0V10.1538L11.3078 13.2918L9.65674 8.2149Z", 1, "fill-gray-500"]],
    template: function PackageTestimonialBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PackageTestimonialBoxComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.testimonial == null ? null : ctx.testimonial.tstm_desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("img-preloader", ctx.testimonial == null ? null : ctx.testimonial.tstm_image);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.testimonial == null ? null : ctx.testimonial.tstm_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.feedBackStar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective, _shared_image_lazy_load_img_preloader_directive__WEBPACK_IMPORTED_MODULE_2__.ImagePreloader],
    encapsulation: 2
  });
  return PackageTestimonialBoxComponent;
})();


/***/ }),

/***/ 11175:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-testimonial/package-testimonial.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageTestimonialComponent: () => (/* binding */ PackageTestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _components_package_testimonial_box_package_testimonial_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/package-testimonial-box/package-testimonial-box.component */ 57274);



function PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r12);
  }
}
function PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r13);
  }
}
function PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r14);
  }
}
function PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r15);
  }
}
function PackageTestimonialComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_3_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_5_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27)(7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_8_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PackageTestimonialComponent_div_0_div_9_app_package_testimonial_box_10_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.testimonialData == null ? null : ctx_r1.testimonialData.testimonialFirstCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.testimonialData == null ? null : ctx_r1.testimonialData.testimonialFirstCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.testimonialData == null ? null : ctx_r1.testimonialData.testimonialSecondCol.concat(ctx_r1.testimonialData == null ? null : ctx_r1.testimonialData.testimonialthirdCol));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.testimonialData == null ? null : ctx_r1.testimonialData.testimonialSecondCol.concat(ctx_r1.testimonialData == null ? null : ctx_r1.testimonialData.testimonialthirdCol));
  }
}
function PackageTestimonialComponent_div_0_app_package_testimonial_box_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r16);
  }
}
function PackageTestimonialComponent_div_0_app_package_testimonial_box_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r17);
  }
}
function PackageTestimonialComponent_div_0_app_package_testimonial_box_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r18);
  }
}
function PackageTestimonialComponent_div_0_app_package_testimonial_box_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r19);
  }
}
function PackageTestimonialComponent_div_0_app_package_testimonial_box_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r20);
  }
}
function PackageTestimonialComponent_div_0_app_package_testimonial_box_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-package-testimonial-box", 30);
  }
  if (rf & 2) {
    const testimonial_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("testimonial", testimonial_r21);
  }
}
function PackageTestimonialComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PackageTestimonialComponent_div_0_div_9_Template, 11, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PackageTestimonialComponent_div_0_app_package_testimonial_box_16_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PackageTestimonialComponent_div_0_app_package_testimonial_box_18_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17)(20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PackageTestimonialComponent_div_0_app_package_testimonial_box_21_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PackageTestimonialComponent_div_0_app_package_testimonial_box_23_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20)(25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PackageTestimonialComponent_div_0_app_package_testimonial_box_26_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PackageTestimonialComponent_div_0_app_package_testimonial_box_28_Template, 1, 1, "app-package-testimonial-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.testimonialConfig == null ? null : ctx_r0.testimonialConfig.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.testimonialConfig == null ? null : ctx_r0.testimonialConfig.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.gredientClassesTop);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.testimonialData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.gredientClassesBottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.gredientClassesTop);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.testimonialData == null ? null : ctx_r0.testimonialData.testimonialFirstCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.testimonialData == null ? null : ctx_r0.testimonialData.testimonialFirstCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.testimonialData == null ? null : ctx_r0.testimonialData.testimonialSecondCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.testimonialData == null ? null : ctx_r0.testimonialData.testimonialSecondCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.testimonialData == null ? null : ctx_r0.testimonialData.testimonialthirdCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.testimonialData == null ? null : ctx_r0.testimonialData.testimonialthirdCol);
  }
}
let PackageTestimonialComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageTestimonialComponent {
    set testimonialData(value) {
      if (value) {
        this._test = value;
        this.cdr.detectChanges();
      }
    }
    get testimonialData() {
      return this._test;
    }
    constructor(cdr) {
      this.cdr = cdr;
      // Update this container height if making any changes to design
      // This is used for making infinite testimonial scrolling animation
      this.containerHeight = 500;
      this.gredientClassesTop = "from-theme-bg-light-green-shade-2 to-theme-bg-light-green-shade-2/0";
      this.gredientClassesBottom = "from-theme-bg-light-green-shade-2 to-theme-bg-light-green-shade-2/0";
    }
    ngOnChanges(changes) {
      if (changes['testimonialData']?.currentValue?.list?.length) {
        this.adjustTestimonialColumnHeights(changes['testimonialData']?.currentValue);
        this.adjustTestimonialColumnHeightsMobile(changes['testimonialData']?.currentValue);
        this.setAnimationSpeed();
        this.setAnimationSpeedMobile();
      }
    }
    adjustTestimonialColumnHeights(value) {
      if (document.getElementById('first-upper')?.clientHeight && document.getElementById('first-upper')?.clientHeight < this.containerHeight) {
        this.testimonialData?.testimonialFirstCol?.push(...value?.testimonialFirstCol);
      }
      if (document.getElementById('second-upper')?.clientHeight && document.getElementById('second-upper')?.clientHeight < this.containerHeight) {
        this.testimonialData?.testimonialSecondCol?.push(...value?.testimonialSecondCol);
      }
      if (document.getElementById('third-upper')?.clientHeight && document.getElementById('third-upper')?.clientHeight < this.containerHeight) {
        this.testimonialData?.testimonialthirdCol?.push(...value?.testimonialthirdCol, ...value?.testimonialthirdCol);
      }
      this.cdr.detectChanges();
    }
    adjustTestimonialColumnHeightsMobile(value) {
      if (document.getElementById('first-upper-mob')?.clientHeight && document.getElementById('first-upper-mob')?.clientHeight < this.containerHeight) {
        this.testimonialData?.testimonialFirstCol?.push(...value?.testimonialFirstCol);
      }
      if (document.getElementById('second-upper-mob')?.clientHeight && document.getElementById('second-upper-mob')?.clientHeight < this.containerHeight) {
        this.testimonialData?.testimonialSecondCol?.push(...value?.testimonialSecondCol, ...value?.testimonialthirdCol);
      }
      this.cdr.detectChanges();
    }
    setAnimationSpeed() {
      const first = document.getElementById('first-upper')?.clientHeight;
      const sec = document.getElementById('second-upper')?.clientHeight;
      const third = document.getElementById('third-upper')?.clientHeight;
      document.getElementById('first-upper') && (document.getElementById('first-upper').style.animationDuration = `${first / 50}s`);
      document.getElementById('first-bottom') && (document.getElementById('first-bottom').style.animationDuration = `${first / 50}s`);
      document.getElementById('first-bottom') && (document.getElementById('first-bottom').style.animationDelay = `${first / 100}s`);
      document.getElementById('second-upper') && (document.getElementById('second-upper').style.animationDuration = `${sec / 50}s`);
      document.getElementById('second-bottom') && (document.getElementById('second-bottom').style.animationDuration = `${sec / 50}s`);
      document.getElementById('second-bottom') && (document.getElementById('second-bottom').style.animationDelay = `${sec / 100}s`);
      document.getElementById('third-upper') && (document.getElementById('third-upper').style.animationDuration = `${third / 50}s`);
      document.getElementById('third-bottom') && (document.getElementById('third-bottom').style.animationDuration = `${third / 50}s`);
      document.getElementById('third-bottom') && (document.getElementById('third-bottom').style.animationDelay = `${third / 100}s`);
    }
    setAnimationSpeedMobile() {
      const first = document.getElementById('first-upper-mob')?.clientHeight;
      const sec = document.getElementById('second-upper-mob')?.clientHeight;
      document.getElementById('first-upper-mob') && (document.getElementById('first-upper-mob').style.animationDuration = `${first / 50}s`);
      document.getElementById('first-bottom-mob') && (document.getElementById('first-bottom-mob').style.animationDuration = `${first / 50}s`);
      document.getElementById('first-bottom-mob') && (document.getElementById('first-bottom-mob').style.animationDelay = `${first / 100}s`);
      document.getElementById('second-upper-mob') && (document.getElementById('second-upper-mob').style.animationDuration = `${sec / 50}s`);
      document.getElementById('second-bottom-mob') && (document.getElementById('second-bottom-mob').style.animationDuration = `${sec / 50}s`);
      document.getElementById('second-bottom-mob') && (document.getElementById('second-bottom-mob').style.animationDelay = `${sec / 100}s`);
    }
  }
  _class = PackageTestimonialComponent;
  _class.ɵfac = function PackageTestimonialComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-testimonial"]],
    inputs: {
      testimonialConfig: "testimonialConfig",
      testimonialData: "testimonialData",
      gredientClassesTop: "gredientClassesTop",
      gredientClassesBottom: "gredientClassesBottom"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "xl:container pt-10 xl:pt-0 px-4 xl:px-[15px]", 4, "ngIf"], [1, "xl:container", "pt-10", "xl:pt-0", "px-4", "xl:px-[15px]"], [1, "flex", "flex-col", "gap-3", "sm:gap-10", "md:gap-16", "xl:flex-row"], [1, "flex", "flex-col", "justify-center", "w-full"], [1, "text-theme-dark-green", "font-lora", "text-center", "xl:text-left", "text-2xl", "md:text-[30px]", "font-extrabold"], [1, "py-5", "px-2", "font-normal", "text-center", "xl:text-left", "text-xl", "md:text-[23px]", "font-roboto", "leading-tight"], [1, "relative", "block", "flex-auto", "md:hidden", "h-[500px]", "overflow-hidden"], [1, "absolute", "font-roboto", "text-sm", "inset-x-0", "top-0", "h-[105px]", "pointer-events-none", "bg-gradient-to-b", "z-[5]", 3, "ngClass"], ["class", "grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:gap-10", 4, "ngIf"], [1, "absolute", "inset-x-0", "bottom-0", "h-[105px]", "pointer-events-none", "bg-gradient-to-t", "z-[5]", 3, "ngClass"], [1, "relative", "hidden", "md:block", "flex-auto", "h-[500px]", "overflow-hidden"], [1, "absolute", "inset-x-0", "top-0", "h-[150px]", "pointer-events-none", "bg-gradient-to-b", "z-[5]", 3, "ngClass"], [1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-3", "md:gap-10", "overflow-hidden", "h-full"], ["id", "firstColumn"], ["id", "first-upper", 1, "pb-7"], [3, "testimonial", 4, "ngFor", "ngForOf"], ["id", "first-bottom", 1, "pb-7"], ["id", "secondColumn"], ["id", "second-upper", 1, "pb-7"], ["id", "second-bottom", 1, "pb-7"], ["id", "thirdColumn"], ["id", "third-upper", 1, "pb-7"], ["id", "third-bottom", 1, "pb-7"], [1, "grid", "grid-cols-2", "gap-4", "px-4", "md:grid-cols-3", "lg:gap-10"], ["id", "firstColumnMob"], ["id", "first-upper-mob", 1, "pb-4", "lg:pb-7"], ["id", "first-bottom-mob", 1, "pb-4", "lg:pb-7"], ["id", "secondColumnMob"], ["id", "second-upper-mob", 1, "pb-4", "lg:pb-7"], ["id", "second-bottom-mob", 1, "pb-4", "lg:pb-7"], [3, "testimonial"]],
    template: function PackageTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PackageTestimonialComponent_div_0_Template, 29, 12, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.testimonialData == null ? null : ctx.testimonialData.testimonialFirstCol == null ? null : ctx.testimonialData.testimonialFirstCol.length) && (ctx.testimonialData.testimonialSecondCol == null ? null : ctx.testimonialData.testimonialSecondCol.length) && (ctx.testimonialData.testimonialthirdCol == null ? null : ctx.testimonialData.testimonialthirdCol.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _components_package_testimonial_box_package_testimonial_box_component__WEBPACK_IMPORTED_MODULE_0__.PackageTestimonialBoxComponent],
    styles: ["#firstColumn[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n#firstColumn[_ngcontent-%COMP%]:hover   #first-upper[_ngcontent-%COMP%], #firstColumn[_ngcontent-%COMP%]:hover   #first-bottom[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n#firstColumnMob[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n#firstColumnMob[_ngcontent-%COMP%]:hover   #first-upper-mob[_ngcontent-%COMP%], #firstColumnMob[_ngcontent-%COMP%]:hover   #first-bottom-mob[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n#secondColumn[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n#secondColumn[_ngcontent-%COMP%]:hover   #second-upper[_ngcontent-%COMP%], #secondColumn[_ngcontent-%COMP%]:hover   #second-bottom[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n#secondColumnMob[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n#secondColumnMob[_ngcontent-%COMP%]:hover   #second-upper-mob[_ngcontent-%COMP%], #secondColumnMob[_ngcontent-%COMP%]:hover   #second-bottom-mob[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n#thirdColumn[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n#thirdColumn[_ngcontent-%COMP%]:hover   #third-upper[_ngcontent-%COMP%], #thirdColumn[_ngcontent-%COMP%]:hover   #third-bottom[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n#first-upper[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: wrap;\n  animation: _ngcontent-%COMP%_marquee 10s linear infinite;\n}\n\n#first-bottom[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_marquee2 10s linear infinite;\n  animation-delay: 5s;\n}\n\n#first-upper-mob[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: wrap;\n  animation: _ngcontent-%COMP%_marquee 10s linear infinite;\n}\n\n#first-bottom-mob[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_marquee2 10s linear infinite;\n  animation-delay: 5s;\n}\n\n#second-upper[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: wrap;\n  animation: _ngcontent-%COMP%_marquee 10s linear infinite;\n}\n\n#second-bottom[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_marquee2 10s linear infinite;\n  animation-delay: 5s;\n}\n\n#second-upper-mob[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: wrap;\n  animation: _ngcontent-%COMP%_marquee 10s linear infinite;\n}\n\n#second-bottom-mob[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_marquee2 10s linear infinite;\n  animation-delay: 5s;\n}\n\n#third-upper[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: wrap;\n  animation: _ngcontent-%COMP%_marquee 10s linear infinite;\n}\n\n#third-bottom[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_marquee2 10s linear infinite;\n  animation-delay: 5s;\n}\n\n@keyframes _ngcontent-%COMP%_marquee {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n@keyframes _ngcontent-%COMP%_marquee2 {\n  from {\n    transform: translateY(0%);\n  }\n  to {\n    transform: translateY(-200%);\n  }\n}"]
  });
  return PackageTestimonialComponent;
})();


/***/ }),

/***/ 3216:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-testimonial/package-testimonial.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageTestimonialModule: () => (/* binding */ PackageTestimonialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 50295);
/* harmony import */ var src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/safe-pipe/safe-pipe.module */ 53547);
/* harmony import */ var _package_testimonial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package-testimonial.component */ 11175);
/* harmony import */ var _components_package_testimonial_box_package_testimonial_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/package-testimonial-box/package-testimonial-box.component */ 57274);
/* harmony import */ var src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/image-lazy-load/image-lazy-load.module */ 1914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 78371);









let PackageTestimonialModule = /*#__PURE__*/(() => {
  var _class;
  class PackageTestimonialModule {}
  _class = PackageTestimonialModule;
  _class.ɵfac = function PackageTestimonialModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_8__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.SafePipeModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_5__.ImageLazyLoadModule]
  });
  return PackageTestimonialModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PackageTestimonialModule, {
    declarations: [_package_testimonial_component__WEBPACK_IMPORTED_MODULE_3__.PackageTestimonialComponent, _components_package_testimonial_box_package_testimonial_box_component__WEBPACK_IMPORTED_MODULE_4__.PackageTestimonialBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ngx_splide__WEBPACK_IMPORTED_MODULE_8__.NgxSplideModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.SafePipeModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_5__.ImageLazyLoadModule],
    exports: [_package_testimonial_component__WEBPACK_IMPORTED_MODULE_3__.PackageTestimonialComponent]
  });
})();

/***/ }),

/***/ 98498:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-expert/service-expert.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceExpertComponent: () => (/* binding */ ServiceExpertComponent)
/* harmony export */ });
/* harmony import */ var _service_expert_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-expert.constant */ 97195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);
// constants






function ServiceExpertComponent_div_0_splide_slide_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServiceExpertComponent_div_0_splide_slide_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const slide_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.redirectToExpertDetails(slide_r2 == null ? null : slide_r2.dr_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r2 == null ? null : slide_r2.dr_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r2 == null ? null : slide_r2.dr_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (slide_r2 == null ? null : slide_r2.dr_experience) + " Years", " ");
  }
}
function ServiceExpertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "splide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ServiceExpertComponent_div_0_splide_slide_4_Template, 9, 3, "splide-slide", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Experts for ", (ctx_r0.banners == null ? null : ctx_r0.banners.srv_setting == null ? null : ctx_r0.banners.srv_setting.desc) || "PCOS Help", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.expertsForPcosConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.doctorData == null ? null : ctx_r0.doctorData.srv_doctors);
  }
}
let ServiceExpertComponent = /*#__PURE__*/(() => {
  var _class;
  class ServiceExpertComponent {
    constructor(router) {
      this.router = router;
      this.expertsForPcosConfig = _service_expert_constant__WEBPACK_IMPORTED_MODULE_0__.EXPERTS_FOR_PCOS_CONFIG;
      /*   doctorsSlides: any = DOCTORS; */
      this.doctorData = [];
    }
    redirectToExpertDetails(id) {
      this.router.navigate(['/book-now', id]);
    }
  }
  _class = ServiceExpertComponent;
  _class.ɵfac = function ServiceExpertComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-service-expert"]],
    inputs: {
      doctorData: "doctorData",
      banners: "banners"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "why-gytree", "text-center", "mt-5", "md:pt-6", "font-bold", "lg:text-[30px]", "text-theme-dark-green", "font-lora", "text-[30px]"], [1, "xl:w-[65%]", "block", "my-10", "w-full", "mx-auto", "expert-pcos-slider", 3, "options"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "relative", "overflow-hidden", "rounded-full", "h-[110px]", "w-[110px]", "sm:w-[170px]", "sm:h-[170px]", "m-auto", "cursor-pointer", 3, "click"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/image/service-expert-images/bg-img.png", "alt", "", 1, "w-full", "h-full", "mx-auto", "sm:w-auto"], [1, "absolute", "left-0", "right-0", "top-0", "sm:bottom-0", "h-full", "mx-auto", "sm:h-[173px]"], ["alt", "", 1, "h-full", "mx-auto", 3, "src"], [1, "text-center", "font-roboto", "text-[18px]", "w-36", "mx-auto", "sm:text-[22px]", "font-bold", "pt-4"], [1, "pt-1", "text-sm", "text-center", "sm:text-base", "sm:pt-2", "font-roboto"]],
    template: function ServiceExpertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ServiceExpertComponent_div_0_Template, 5, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.doctorData && (ctx.doctorData == null ? null : ctx.doctorData.srv_doctors) && (ctx.doctorData == null ? null : ctx.doctorData.srv_doctors == null ? null : ctx.doctorData.srv_doctors.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideSlideComponent, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective],
    encapsulation: 2
  });
  return ServiceExpertComponent;
})();


/***/ }),

/***/ 97195:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-expert/service-expert.constant.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPERTS_FOR_PCOS_CONFIG: () => (/* binding */ EXPERTS_FOR_PCOS_CONFIG)
/* harmony export */ });
const EXPERTS_FOR_PCOS_CONFIG = {
  gap: 60,
  perPage: 4,
  arrows: false,
  pagination: false,
  breakpoints: {
    1280: {
      gap: 40,
      perPage: 3
    },
    768: {
      gap: 20,
      perPage: 2
    },
    640: {
      destroy: true
    }
  }
};

/***/ }),

/***/ 36175:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-gytree-pass/service-gytree-pass.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceGytreePassComponent: () => (/* binding */ ServiceGytreePassComponent)
/* harmony export */ });
/* harmony import */ var src_app_modules_shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);







function ServiceGytreePassComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const includesData_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", includesData_r1 == null ? null : includesData_r1.title, " ");
  }
}
let ServiceGytreePassComponent = /*#__PURE__*/(() => {
  var _class;
  class ServiceGytreePassComponent {
    constructor(router, eventTrackingService) {
      this.router = router;
      this.eventTrackingService = eventTrackingService;
    }
    ngOnInit() {
      const handler = () => {
        setInterval(() => {
          this.clock = src_app_modules_shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.getTimerCount();
        }, 1000);
      };
      if (document.readyState === 'complete') {
        handler();
      } else {
        window.addEventListener('load', () => {
          setInterval(() => {
            this.clock = src_app_modules_shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.getTimerCount();
          }, 1000);
        });
      }
    }
    redirectToMembership() {
      this.router.navigate(['/membership']);
    }
    trackingWebEnagege(event, value) {
      this.eventTrackingService.trackWebEnagegeEvent(event, value);
    }
    eventTracking(event, value) {
      this.eventTrackingService.trackEvent(event, value);
    }
  }
  _class = ServiceGytreePassComponent;
  _class.ɵfac = function ServiceGytreePassComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_1__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-service-gytree-pass"]],
    inputs: {
      membership: "membership"
    },
    decls: 45,
    vars: 7,
    consts: [[1, ""], [1, "md:container"], [1, "relative", "px-5", "main-div", "md:px-0"], [1, "assesment", "relative", "mb-8", "justify-center", "md:rounded-[40px]", "rounded-[18px]", "flex", "md:flex-row", "flex-col-reverse", "xl:w-[65%]", "2xl:w-1/2", "w-full", "mx-auto", "bg-theme-light-maroon", "text-white", "font-lora"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/svg/gytree-pass-top.svg", 1, "absolute", "-top-14", "md:right-[20%]", "right-5"], [1, "md:w-[55%]", "w-full", "md:px-10", "pl-4", "pr-2", "py-6", "relative", "md:"], [1, "absolute", "z-10", "right-10", "sm:right-72", "bottom-64", "md:z-0"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/member-ship/flower.png", "alt", ""], [1, "hidden", "md:block"], [1, "heading", "md:text-[30px]", "text-[20px]", "font-extrabold", "pt-0"], [1, "mb-4", "text-center", "md:text-left", "md:text-lg", "text-[15px]", "font-normal", "font-roboto", "md:pt-3", "pt-1"], [1, "mx-auto", "w-fit", "md:w-auto"], ["class", "flex gap-2 font-normal font-roboto md:text-base text-[13px] before:mt-1 before:content-[''] before:inline-flex before:bg-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/membership-card/marker.svg')] before:h-5 before:w-5 mb-2", 4, "ngFor", "ngForOf"], [1, "block", "md:hidden"], [1, "mx-auto", "group", "flex", "gap-3", "py-1", "font-roboto", "rounded-3xl", "justify-center", "mt-3", "text-theme-blue-base", "bg-white", "font-normal", "text-[20px]", "border", "px-5", 3, "click"], [1, "mt-2", "transition-transform", "fill-black", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], ["width", "14", "height", "12", "viewBox", "0 0 14 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.3406 1.86147L8.27351 0.81877C7.70215 0.700939 7.26509 1.33155 7.58053 1.81729L9.10599 4.16629L0.579379 9.70353C0.192888 9.95452 0.0838135 10.4705 0.33435 10.8563C0.584887 11.2421 1.10063 11.3523 1.48712 11.1013L10.0137 5.56409L11.5392 7.91309C11.8546 8.39882 12.6085 8.25604 12.7332 7.68615L13.8416 2.63305C13.9192 2.27964 13.695 1.93439 13.3406 1.86147Z", "fill", "#F46969"], [1, "pb-5", "md:w-[45%]", "w-full", "px-10", "bg-theme-light-tomato-red", "rounded-[30px]", "relative", "font-medium"], [1, "absolute", "top-0", "hidden", "sm:inline-block", "left-1", "sm:left-0", "md:top-1/2", "md:-left-2"], [1, "mt-[.2px]", "absolute", "top-0", "left-0", "right-0", "leading-snug", "font-normal", "bg-white", "w-[80%]", "mx-auto", "px-2", "py-1.5", "text-theme-light-tomato-red", "font-roboto", "md:rounded-b-2xl", "rounded-b-2xl", "shadow-lg", "text-sm", "text-center", "md:leading-none"], [1, "pt-3", "pb-0", "text-center", "md:pt-5", "md:pb-5", "months"], [1, "block", "pt-10", "md:hidden"], [1, "md:text-[30px]", "text-[24px]", "font-extrabold", "text-center"], [1, "text-sm", "text-center", "line-through", "md:mb-2", "sm:text-lg", "amount-all-months", "font-roboto", "font-extralight", "md:font-light", "md:pt-3"], [1, "font-roboto", "md:text-[23px]", "text-lg", "text-white", "w-[50%]", "sm:w-full", "mx-auto"], [1, "font-roboto"], [1, "text-sm", "md:text-base"], [1, "font-light", "font-roboto"], [1, "font-light", "font-roboto", "lowercase"], [1, "mx-auto", "group", "flex", "gap-3", "font-roboto", "rounded-3xl", "w-full", "font-medium", "py-2", "justify-center", "mt-3", "text-theme-blue-base", "bg-white", "border-black", "text-[20px]", "border", "px-5", 3, "click"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/did-you-know/up-right.svg", 1, "mt-2", "transition-transform", "fill-black", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], [1, "flex", "gap-2", "font-normal", "font-roboto", "md:text-base", "text-[13px]", "before:mt-1", "before:content-['']", "before:inline-flex", "before:bg-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/membership-card/marker.svg')]", "before:h-5", "before:w-5", "mb-2"]],
    template: function ServiceGytreePassComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ServiceGytreePassComponent_li_14_Template, 2, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13)(16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ServiceGytreePassComponent_Template_button_click_16_listener() {
          ctx.redirectToMembership();
          ctx.trackingWebEnagege("Become a Member", "Become a Member");
          return ctx.eventTracking("Become a Member", "Become a Member");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Become a Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 18)(22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 21)(27, "div", 22)(28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Gytree Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21)(31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 25)(34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 27)(37, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 8)(42, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ServiceGytreePassComponent_Template_button_click_42_listener() {
          ctx.redirectToMembership();
          ctx.trackingWebEnagege("Become a Member", "Become a Member");
          return ctx.eventTracking("Become a Member", "Become a Member");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Become a Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.membership == null ? null : ctx.membership.mbp_offer == null ? null : ctx.membership.mbp_offer.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.membership == null ? null : ctx.membership.mbp_offer == null ? null : ctx.membership.mbp_offer.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.membership == null ? null : ctx.membership.mbp_offer == null ? null : ctx.membership.mbp_offer.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Offer Ends in ", (ctx.clock == null ? null : ctx.clock.hours) + "h " + (ctx.clock == null ? null : ctx.clock.minutes) + "m " + (ctx.clock == null ? null : ctx.clock.seconds) + "s", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u20B9", ctx.membership == null ? null : ctx.membership.mbp_standard_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9", ctx.membership == null ? null : ctx.membership.mbp_sell_price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.membership == null ? null : ctx.membership.mbp_period) == "years" ? "Annually" : (ctx.membership == null ? null : ctx.membership.mbp_period) == "months" ? "Monthaly" : (ctx.membership == null ? null : ctx.membership.mbp_period) == "weeks" ? "Weekly" : ctx.membership == null ? null : ctx.membership.mbp_period);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__.LazyImgDirective],
    encapsulation: 2
  });
  return ServiceGytreePassComponent;
})();


/***/ }),

/***/ 50197:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-gytree-users/components/testimonial-chat-box/testimonial-chat-box.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialChatBoxComponent: () => (/* binding */ TestimonialChatBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/image-lazy-load/lazy-load.directive */ 74717);




function TestimonialChatBoxComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function TestimonialChatBoxComponent_div_10_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 12)(3, "g", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 14)(5, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function TestimonialChatBoxComponent_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TestimonialChatBoxComponent_div_10_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r1 - 0.5 <= ctx_r3.testimonial.gttml_star);
  }
}
function TestimonialChatBoxComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TestimonialChatBoxComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TestimonialChatBoxComponent_div_10_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r1 <= ctx_r0.testimonial.gttml_star);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r1 > ctx_r0.testimonial.gttml_star);
  }
}
let TestimonialChatBoxComponent = /*#__PURE__*/(() => {
  var _class;
  class TestimonialChatBoxComponent {
    constructor() {
      this.class = "block lg:pb-7 last:pb-0";
      this.arrayFromNum = n => Array(n);
      /**
       * rating data
       */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
  }
  _class = TestimonialChatBoxComponent;
  _class.ɵfac = function TestimonialChatBoxComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-testimonial-chat-box"]],
    hostVars: 2,
    hostBindings: function TestimonialChatBoxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.class);
      }
    },
    inputs: {
      testimonial: "testimonial"
    },
    decls: 11,
    vars: 4,
    consts: [[1, "relative", "px-3", "py-3", "font-roboto", "bg-white", "lg:py-4", "lg:px-6", "rounded-2xl", "lg:rounded-[26px]", "text-sm", "md:text-sm", "lg:text-base"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/others/chatbox-bottom-arrow.png", "alt", "", 1, "absolute", "top-[calc(100%-1px)]", "left-5"], [1, "flex", "items-center", "pt-3", "lg:pt-4"], [1, "w-8", "h-2", "lg:h-12", "lg:w-12", "me-3"], ["alt", "", 1, "w-3/4", "rounded-full", "h-3/4", 3, "src"], [1, "text-[12px]", "font-medium", "lg:text-xl", "sm:text-normal", "font-roboto"], [1, "flex", "items-center"], ["class", "block w-4 h-4 lg:w-6 lg:h-6 text-theme-yellow", 4, "ngFor", "ngForOf"], [1, "block", "w-4", "h-4", "lg:w-6", "lg:h-6", "text-theme-yellow"], [4, "ngIf"], [1, "block", "w-5", "h-5", "text-theme-yellow", "[&>svg]:h-full", "[&>svg]:w-full", 3, "inlineSVG"], [1, "block", "w-5", "h-5", "[&>svg]:h-full", "[&>svg]:w-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["clip-path", "url(#clip0_3650_1917)"], ["d", "M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z", 1, "fill-theme-yellow"], ["d", "M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                    0V10.1538L11.3078 13.2918L9.65674 8.2149Z", 1, "fill-gray-500"]],
    template: function TestimonialChatBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TestimonialChatBoxComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testimonial == null ? null : ctx.testimonial.gttml_desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.testimonial == null ? null : ctx.testimonial.gttml_user_media, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.testimonial == null ? null : ctx.testimonial.gttml_user_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.feedBackStar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective],
    encapsulation: 2
  });
  return TestimonialChatBoxComponent;
})();


/***/ }),

/***/ 5440:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-hero-section/service-hero-section.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceHeroSectionComponent: () => (/* binding */ ServiceHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);
/* harmony import */ var _shared_image_lazy_load_img_preloader_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/img-preloader.directive */ 92295);





function ServiceHeroSectionComponent_ng_container_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.serviceBanner == null ? null : ctx_r1.serviceBanner.srv_banner == null ? null : ctx_r1.serviceBanner.srv_banner.right_section == null ? null : ctx_r1.serviceBanner.srv_banner.right_section.desc, " ");
  }
}
function ServiceHeroSectionComponent_ng_container_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.serviceBanner == null ? null : ctx_r2.serviceBanner.srv_banner == null ? null : ctx_r2.serviceBanner.srv_banner.left_section == null ? null : ctx_r2.serviceBanner.srv_banner.left_section.desc, " ");
  }
}
function ServiceHeroSectionComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11)(12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ServiceHeroSectionComponent_ng_container_3_div_15_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ServiceHeroSectionComponent_ng_container_3_div_16_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.serviceBanner == null ? null : ctx_r0.serviceBanner.srv_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.serviceBanner == null ? null : ctx_r0.serviceBanner.srv_desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (ctx_r0.serviceBanner == null ? null : ctx_r0.serviceBanner.srv_banner == null ? null : ctx_r0.serviceBanner.srv_banner.image) || "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/image/hero-bg-img.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.serviceBanner == null ? null : ctx_r0.serviceBanner.srv_banner == null ? null : ctx_r0.serviceBanner.srv_banner.right_section == null ? null : ctx_r0.serviceBanner.srv_banner.right_section.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.serviceBanner == null ? null : ctx_r0.serviceBanner.srv_banner == null ? null : ctx_r0.serviceBanner.srv_banner.left_section == null ? null : ctx_r0.serviceBanner.srv_banner.left_section.desc);
  }
}
let ServiceHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class ServiceHeroSectionComponent {}
  _class = ServiceHeroSectionComponent;
  _class.ɵfac = function ServiceHeroSectionComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-service-hero-section"]],
    inputs: {
      serviceBanner: "serviceBanner"
    },
    decls: 4,
    vars: 1,
    consts: [[1, "hero-sec-wrapper", "bg-theme-bg-light-green-shade-1"], [1, "container"], [1, "grid", "md:grid-cols-2"], [4, "ngIf"], [1, "flex", "justify-center", "md:justify-start", "items-center", "pt-14", "sm:pt-16", "pb-6", "sm:pb-16", "hero-sec-text", "lg:py-2"], [1, "w-full", "sm:w-[70%]", "relative", "sm:px-0", "px-6"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "right-0", "-top-10"], ["img-preloader", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/image/flower.png", "alt", "", 1, "w-1/2", "md:w-full"], [1, "py-8", "text-4xl", "font-bold", "text-center", "text-theme-dark-green", "lg:mb-5", "lg:text-5xl", "md:text-left", "xl:text-6xl", "font-lora"], [1, "font-roboto", "text-lg", "lg:text-2xl", "xl:text-3xl", "md:text-[20px]", "font-roboto", "leading-tight", "font-normal", "md:text-left", "text-center", "md:px-0", "px-4", "md:pb-0", "pb-5"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "md:-bottom-32", "-bottom-20"], [1, "w-full", "pt-4", "pb-4", "sm:pb-8", "pl-12", "pr-12", "sm:pr-0", "sm:pt-16", "sm:pl-24", "md:pl-20", "hero-image"], [1, "relative", "mx-auto", "w-fit"], ["alt", "", 1, "max-h-[580px]", "w-auto", 3, "src"], [1, "absolute", "inset-0", "w-full", "h-full"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", "class", "white-box xl:w-[170px] w-[110px] sm:w-[120px] md:right-4 text-center font-bold leading-tight text-base md:-top-8 xl:-right-12 lg:right-4 xl:text-[22px] -right-6 -top-5 sm:top-2 lg:top-8 xl:-top-4 absolute bg-white py-3 px-1.5 lg:py-3 lg:px-4 xl:p-4 shadow-2xl font-lora rounded-t-lg rounded-br-lg lg:rounded-t-xl lg:rounded-br-xl text-theme-dark-green", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", "class", "white-box lg:w-[170px] xl:w-[200px] w-[140px] text-center font-bold leading-tight text-base xl:-left-10 xl:text-2xl md:right-20 sm:text-lg bottom-20 -left-8 absolute xl:bottom-40 lg:bottom-40 bg-white py-3 px-4 xl:py-4 xl:px-5 shadow-2xl rounded-b-xl font-lora rounded-tl-xl text-theme-dark-green", 4, "ngIf"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "xl:w-[170px]", "w-[110px]", "sm:w-[120px]", "md:right-4", "text-center", "font-bold", "leading-tight", "text-base", "md:-top-8", "xl:-right-12", "lg:right-4", "xl:text-[22px]", "-right-6", "-top-5", "sm:top-2", "lg:top-8", "xl:-top-4", "absolute", "bg-white", "py-3", "px-1.5", "lg:py-3", "lg:px-4", "xl:p-4", "shadow-2xl", "font-lora", "rounded-t-lg", "rounded-br-lg", "lg:rounded-t-xl", "lg:rounded-br-xl", "text-theme-dark-green"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/svg/hero-section-women.svg", 1, "absolute", "w-5", "h-7", "lg:h-10", "lg:w-7", "left-3", "bottom-full"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/svg/hero-section.svg", 1, "absolute", "md:left-10", "right-auto", "left-9", "sm:left-auto", "sm:right-0", "top-[70%]", "xl:top-[65%]", "z-10", "xl:h-28", "md:h-25", "xl:w-28", "md:w-25", "sm:h-20", "sm:w-20", "h-14", "w-14"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "lg:w-[170px]", "xl:w-[200px]", "w-[140px]", "text-center", "font-bold", "leading-tight", "text-base", "xl:-left-10", "xl:text-2xl", "md:right-20", "sm:text-lg", "bottom-20", "-left-8", "absolute", "xl:bottom-40", "lg:bottom-40", "bg-white", "py-3", "px-4", "xl:py-4", "xl:px-5", "shadow-2xl", "rounded-b-xl", "font-lora", "rounded-tl-xl", "text-theme-dark-green"]],
    template: function ServiceHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ServiceHeroSectionComponent_ng_container_3_Template, 17, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.serviceBanner);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective, _shared_image_lazy_load_img_preloader_directive__WEBPACK_IMPORTED_MODULE_2__.ImagePreloader],
    encapsulation: 2
  });
  return ServiceHeroSectionComponent;
})();


/***/ }),

/***/ 24027:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-pcos-help/service-pcos-help.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicePcosHelpComponent: () => (/* binding */ ServicePcosHelpComponent)
/* harmony export */ });
/* harmony import */ var _service_pcos_help_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-pcos-help.constant */ 33458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-splide */ 10080);







function ServicePcosHelpComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceDataIncludes_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.serviceHelpData == null ? null : ctx_r0.serviceHelpData.check_icon_class)("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/svg/right.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", serviceDataIncludes_r2 == null ? null : serviceDataIncludes_r2.include, " ");
  }
}
function ServicePcosHelpComponent_li_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const servicePackageDataIncludes_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.serviceHelppackageData == null ? null : ctx_r1.serviceHelppackageData.check_icon_class)("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/service-page/svg/right.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", servicePackageDataIncludes_r3 == null ? null : servicePackageDataIncludes_r3.include, " ");
  }
}
let ServicePcosHelpComponent = /*#__PURE__*/(() => {
  var _class;
  class ServicePcosHelpComponent {
    constructor(router, eventTrackingService) {
      this.router = router;
      this.eventTrackingService = eventTrackingService;
      this.splideConfig = _service_pcos_help_constant__WEBPACK_IMPORTED_MODULE_0__.GYTREE_TESTIMONIAL_SLIDES_CONFIG;
    }
    redirectToConsulatation(selectedVal, type, bannerData, cns_slug) {
      this.router.navigate(['/consultation', cns_slug]);
      // return
      localStorage.setItem('selectedValue', JSON.stringify(selectedVal));
      localStorage.setItem('doctorType', JSON.stringify(type));
      const value = {
        Name: bannerData?.gtd_fullname,
        cost: bannerData?.gtd_consultation_price,
        type: bannerData?.gtd_type,
        time: bannerData?.gtd_consultation_time
      };
      this.eventTrackingService.trackWebEnagegeEvent('Consultation Clicks', value);
      this.eventTrackingService.trackEvent('Consultation Clicks', value);
    }
    packageDetails(id, selectedVal, packageData) {
      localStorage.setItem('selectedValue', JSON.stringify(selectedVal));
      this.router.navigate(['/program', id]);
      const value = {
        Name: packageData?.gtp_name,
        cost: packageData?.gtp_price,
        week: packageData?.gtp_duration
      };
      this.eventTrackingService.trackWebEnagegeEvent('Program Clicks', value);
      this.eventTrackingService.trackEvent('Program Clicks', value);
    }
  }
  _class = ServicePcosHelpComponent;
  _class.ɵfac = function ServicePcosHelpComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_1__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-service-pcos-help"]],
    inputs: {
      serviceHelpData: "serviceHelpData",
      serviceHelppackageData: "serviceHelppackageData",
      serviceBanner: "serviceBanner",
      helpWithId: "helpWithId",
      banners: "banners"
    },
    decls: 55,
    vars: 26,
    consts: [[1, "container"], [1, "pb-5"], [1, "why-gytree", "text-center", "mt-5", "md:pt-6", "pt-0", "font-bold", "lg:text-[30px]", "font-lora", "text-[25px]", "text-theme-dark-green"], [1, "text-center", "md:pt-3", "pt-2", "mb-10", "font-normal", "lg:text-[25px]", "md:text-[20px]", "text-[18px]", "font-roboto"], [1, "xl:w-[60%]", "2xl:w-[50%]", "mx-auto", "w-full"], [1, "arrow-change", "pcos-help-slider", 3, "options"], [1, "flex", "flex-col", "h-full", "border-2", "rounded-2xl", "xl:rounded-[40px]", "cursor-pointer", 3, "ngClass", "click"], [1, "flex-auto", "px-4", "py-5", "md:px-6", "md:pt-7", "md:pb-4"], [1, "mb-3", "text-xl", "font-bold", "md:text-2xl", "font-lora"], [1, "flex", "items-center", "px-3", "py-1", "mb-4", "text-xs", "capitalize", "rounded-full", "md:text-sm", "text-theme-text-darker-blue", "font-roboto", 3, "ngClass"], [1, "w-3", "h-3", "md:w-4", "md:h-4", "me-2", 3, "inlineSVG"], ["class", "flex mb-2 text-sm md:mb-3 md:text-lg font-roboto", 4, "ngFor", "ngForOf"], [1, "py-2", "months", "rounded-b-2xl", "xl:rounded-b-[40px]", 3, "ngClass"], [1, "text-center", "line-through", "amount-all-months", "font-roboto", "md:pt-3", 3, "ngClass"], [1, "font-roboto", "md:text-[23px]", "text-[17px]", "text-black", "text-center", 3, "ngClass"], [1, "font-semibold", "text-theme-text-dark-blue"], [1, "text-sm", "font-normal", "md:text-lg"], [1, "flex", "justify-center", "w-full", "gap-3", "px-5", "py-2", "mx-auto", "mt-0", "text-xl", "font-bold", "md:mt-3", "md:text-2xl", "group", "font-roboto", "rounded-2xl", "xl:rounded-[40px]", "text-theme-light-pink", 3, "click"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/did-you-know/up-right.svg", 1, "mt-2", "transition-transform", "fill-theme-light-pink", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], [1, "flex", "items-center", "px-3", "py-1", "mb-4", "text-xs", "rounded-full", "md:text-sm", "text-theme-lighter-green", "font-roboto", 3, "ngClass"], [1, "font-semibold", "text-theme-green"], [1, "flex", "items-center", "justify-center", "pt-8", "md:pt-9"], [1, "flex", "items-center", "w-10", "md:w-20", "border-spacing-[1px]", "border-theme-light-pink"], [1, "mx-3", "font-medium", "font-roboto"], [1, "flex", "w-10", "md:w-20", "border-spacing-1", "border-theme-light-pink", "item-center"], [1, "flex", "mb-2", "text-sm", "md:mb-3", "md:text-lg", "font-roboto"], [1, "w-4", "h-4", "me-3", "md:w-7", "md:h-7", "shrink-0", 3, "ngClass", "inlineSVG"]],
    template: function ServicePcosHelpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "splide", 5)(8, "splide-slide")(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicePcosHelpComponent_Template_div_click_9_listener() {
          return ctx.redirectToConsulatation("consultation", ctx.serviceBanner == null ? null : ctx.serviceBanner.doctor == null ? null : ctx.serviceBanner.doctor.gtd_type, ctx.serviceBanner == null ? null : ctx.serviceBanner.doctor, ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_slug);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ServicePcosHelpComponent_li_17_Template, 3, 3, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14)(22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Per Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicePcosHelpComponent_Template_button_click_26_listener() {
          return ctx.redirectToConsulatation("consultation", ctx.serviceBanner == null ? null : ctx.serviceBanner.doctor == null ? null : ctx.serviceBanner.doctor.gtd_type, ctx.serviceBanner == null ? null : ctx.serviceBanner.doctor, ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_slug);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Get Consultation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "splide-slide")(30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicePcosHelpComponent_Template_div_click_30_listener() {
          return ctx.packageDetails(ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_slug, "package", ctx.serviceHelppackageData);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7)(32, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ServicePcosHelpComponent_li_38_Template, 3, 3, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 12)(40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 14)(43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicePcosHelpComponent_Template_button_click_47_listener() {
          return ctx.packageDetails(ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_slug, "package", ctx.serviceHelppackageData);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Get Program ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx.serviceBanner == null ? null : ctx.serviceBanner.srv_display_text) || "PCOS Help", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx.banners == null ? null : ctx.banners.srvp_setting == null ? null : ctx.banners.srvp_setting.desc) || "Explore what works best for you", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.splideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.border_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_display_text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.bg_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/watch-icon.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_duration, " mins Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_include);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.bg_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.light_text_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_standard_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.dark_text_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", ctx.serviceHelpData == null ? null : ctx.serviceHelpData.cns_sell_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.border_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.bg_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/watch-icon.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_duration, " week Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_include);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.bg_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.light_text_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_standard_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.dark_text_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_sell_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" For ", ctx.serviceHelppackageData == null ? null : ctx.serviceHelppackageData.pkg_duration, " week");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__.InlineSVGDirective, ngx_splide__WEBPACK_IMPORTED_MODULE_6__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_6__.NgxSplideSlideComponent],
    encapsulation: 2
  });
  return ServicePcosHelpComponent;
})();


/***/ }),

/***/ 33458:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/service-page/components/service-pcos-help/service-pcos-help.constant.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GYTREE_TESTIMONIAL_SLIDES_CONFIG: () => (/* binding */ GYTREE_TESTIMONIAL_SLIDES_CONFIG)
/* harmony export */ });
const GYTREE_TESTIMONIAL_SLIDES_CONFIG = {
  destroy: true,
  breakpoints: {
    640: {
      destroy: false,
      gap: 20,
      perPage: 1,
      padding: 80,
      arrows: false,
      pagination: false
    }
  }
};

/***/ }),

/***/ 51164:
/*!****************************************************************!*\
  !*** ./src/app/modules/service-page/service-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicePageComponent: () => (/* binding */ ServicePageComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 79457);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var rss_to_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rss-to-json */ 28110);
/* harmony import */ var rss_to_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rss_to_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_videos_list_videos_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/videos-list/videos-list.service */ 95297);
/* harmony import */ var _shared_services_service_banner_list_service_banner_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/service-banner-list/service-banner-list.service */ 61231);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/products-list/products-list.service */ 52630);
/* harmony import */ var _shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/testimonial-list/testimonial-list.service */ 32939);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _home_components_learn_learn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/components/learn/learn.component */ 80623);
/* harmony import */ var _home_components_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/components/products/products.component */ 42663);
/* harmony import */ var _package_components_package_testimonial_package_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../package/components/package-testimonial/package-testimonial.component */ 11175);
/* harmony import */ var _components_service_hero_section_service_hero_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/service-hero-section/service-hero-section.component */ 5440);
/* harmony import */ var _components_service_gytree_pass_service_gytree_pass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/service-gytree-pass/service-gytree-pass.component */ 36175);
/* harmony import */ var _components_service_expert_service_expert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/service-expert/service-expert.component */ 98498);
/* harmony import */ var _components_service_pcos_help_service_pcos_help_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/service-pcos-help/service-pcos-help.component */ 24027);




















let ServicePageComponent = /*#__PURE__*/(() => {
  var _class;
  class ServicePageComponent {
    constructor(videosListService, serviceBannerList, route, GetData, DoctorslistService, pageListService, productListService, testimonialService, titleService, metaService) {
      this.videosListService = videosListService;
      this.serviceBannerList = serviceBannerList;
      this.route = route;
      this.GetData = GetData;
      this.DoctorslistService = DoctorslistService;
      this.pageListService = pageListService;
      this.productListService = productListService;
      this.testimonialService = testimonialService;
      this.titleService = titleService;
      this.metaService = metaService;
      this.subscriptions = [];
      this.videoList = [];
      this.articles = [];
      this.membershipData = [];
      this.productList = [];
      this.doctorsData = [];
      this.helpYouWith = [];
      this.testimonialList = [];
      this.isDataVisible = {
        gytreeVideos: false,
        gytreeMembership: false,
        gytreeDoctors: false,
        gytreeProducts: false,
        gytreeTestimonial: false
      };
      this.GetData.Product.subscribe(res => {
        this.productList = res;
      });
      this.route.paramMap.subscribe(params => {
        this.helpWithId = params['params'].slug;
        this.getServiceBannerdata(this.helpWithId);
        // this.getProductListData();
      });
    }
    /**
     * Method to scroll data
     */
    onScroll(e) {
      this.allScrollEvents();
    }
    ngOnInit() {
      this.getBannerdata();
      this.getVideos();
      this.getArticlesList();
      aos__WEBPACK_IMPORTED_MODULE_0___default().init({});
    }
    /**
     * Method to scroll all data
     */
    allScrollEvents() {
      /*     this.getTestimonialScrollEvent(); */
      // this.getProductScrollEvent();
      // this.getGytreeLearnScrollEvent();
    }
    getBannerdata() {
      this.pageListService.getBannerList('service').subscribe(resp => {
        this.banners = resp?.data?.data;
      });
    }
    getMembershipdata(id) {
      this.pageListService.getMasterUserSlugByIdList('membership', 'mbp_slug', id).subscribe(resp => {
        this.membershipBanner = resp?.data?.data;
      });
    }
    getConsultationdata(id) {
      this.pageListService.getMasterConsultIdList('consultation', id).subscribe(resp => {
        if (resp?.success) {
          this.serviceHelpData = resp?.data?.data || {};
          this.serviceHelpData.bg_class = 'bg-theme-lightest-purple-shade-1';
          this.serviceHelpData.border_class = 'border-theme-purple-lighter';
          this.serviceHelpData.check_icon_class = 'text-theme-purple-lighter';
          this.serviceHelpData.light_text_color = 'text-theme-purple-text';
          this.serviceHelpData.dark_text_color = 'text-theme-text-dark-blue';
          this.serviceHelppackageData = resp?.data?.data?.package;
          this.serviceHelppackageData.bg_class = 'bg-theme-bg-light-green-shade-3';
          this.serviceHelppackageData.border_class = 'border-theme-lightest-green';
          this.serviceHelppackageData.check_icon_class = 'text-theme-lightest-green';
          this.serviceHelppackageData.light_text_color = 'text-theme-lighter-green';
          this.serviceHelppackageData.dark_text_color = 'text-theme-darker-green';
        }
      });
    }
    /**
     * Method to service banner data
     */
    getServiceBannerdata(helpWithId) {
      this.pageListService.getMasterUserTypeBySlug('service', helpWithId).subscribe(resp => {
        if (resp.success) {
          this.serviceBanner = resp?.data?.data;
          this.getMembershipdata(this.serviceBanner?.srv_membership?.mbp_slug);
          this.serviceHelpData = resp?.data?.data?.srv_cns || {};
          this.setMetaTagAndTitle();
          this.serviceHelpData.bg_class = 'bg-theme-lightest-purple-shade-1';
          this.serviceHelpData.border_class = 'border-theme-purple-lighter';
          this.serviceHelpData.check_icon_class = 'text-theme-purple-lighter';
          this.serviceHelpData.light_text_color = 'text-theme-purple-text';
          this.serviceHelpData.dark_text_color = 'text-theme-text-dark-blue';
          this.serviceHelppackageData = resp?.data?.data?.srv_package;
          this.serviceHelppackageData.bg_class = 'bg-theme-bg-light-green-shade-3';
          this.serviceHelppackageData.border_class = 'border-theme-lightest-green';
          this.serviceHelppackageData.check_icon_class = 'text-theme-lightest-green';
          this.serviceHelppackageData.light_text_color = 'text-theme-lighter-green';
          this.serviceHelppackageData.dark_text_color = 'text-theme-darker-green';
          // this.getConsultationdata(this.serviceBanner?.srv_cns?.cns_slug)
          this.getTestimonialList(this.serviceBanner?.srv_id);
        }
      });
    }
    getGytreeLearnScrollEvent() {
      var offsets = document.getElementById('gytree-learn-service-block').getBoundingClientRect();
      var top = offsets.top;
      if (top < 1200 && !this.isDataVisible.gytreeVideos) {
        this.GetData.storedHomeData.subscribe(res => {
          if (!res?.gytreeVideos || res?.gytreeVideos === null) {
            this.getVideos();
            this.getArticlesList();
          } else {
            this.articles = res?.gytreeVideos;
          }
        });
        this.isDataVisible.gytreeVideos = true;
      }
    }
    /**
     * Method to service Videos data
     */
    getVideos() {
      this.videosListService.getVideosList().subscribe(res => {
        if (res?.success) {
          this.videoList = res?.data?.data;
        }
      });
    }
    /**
     * Method to service Articles data
     */
    getArticlesList() {
      (0,rss_to_json__WEBPACK_IMPORTED_MODULE_2__.parse)('https://blog.gytree.com/rss').then(rss => {
        this.articles = rss?.items;
      });
      return;
      // this.videosListService.getArticlesList().subscribe((res) => {
      //     console.log(res, '------------------');
      //     return
      //     if (res?.success) {
      //         this.articles = res.data;
      //     }
      // });
    }
    // getTestimonialScrollEvent() {
    //     var offsets = document
    //         .getElementById('gytree-testimonial-block')
    //         .getBoundingClientRect();
    //     var top = offsets.top;
    //     if (top < 1000 && !this.isDataVisible.gytreeTestimonial) {
    //         this.GetData.storedHomeData.subscribe((res) => {
    //             if (
    //                 !res?.gytreeTestimonial ||
    //                 res?.gytreeTestimonial === null
    //             ) {
    //                 this.getTestimonialList();
    //             } else {
    //                 this.productList = res?.gytreeTestimonial;
    //             }
    //         });
    //         this.isDataVisible.gytreeTestimonial = true;
    //     }
    // }
    getTestimonialList(id) {
      this.pageListService.getTestimonialListById('testimonial', 'service', id).subscribe(res => {
        this.testimonialList = res.data.data;
        let cols = 3;
        let testimonialtempList = [];
        testimonialtempList = [...Array(cols).keys()].map(c => this.testimonialList.filter((_, i) => i % cols === c));
        this.testimonialList = {
          ...this.testimonialList,
          testimonialFirstCol: testimonialtempList[0],
          testimonialSecondCol: testimonialtempList[1],
          testimonialthirdCol: testimonialtempList[2],
          srvp_testimonial: this.banners.srvp_testimonial
        };
      });
    }
    // getProductScrollEvent() {
    //     var offsets = document
    //         .getElementById('gytree-products-service-block')
    //         .getBoundingClientRect();
    //     var top = offsets.top;
    //     if (top < 1000 && !this.isDataVisible.gytreeProducts) {
    //         this.GetData.storedHomeData.subscribe((res) => {
    //             if (!res?.gytreeProducts || res?.gytreeProducts === null) {
    //                 this.getProductListData();
    //             } else {
    //                 this.productList = res?.gytreeProducts;
    //             }
    //         });
    //         this.isDataVisible.gytreeProducts = true;
    //     }
    // }
    getProductListData() {
      this.pageListService.getMasterUserList('product').subscribe(res => {
        if (res?.success) {
          this.productList = res?.data?.data;
        }
      });
    }
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Service',
        metaTitle: this.serviceBanner?.srv_meta?.meta_title || this.serviceBanner?.srv_name,
        metaDescription: this.serviceBanner?.srv_meta?.meta_desc || this.serviceBanner?.srv_desc,
        metaKeyword: this.serviceBanner?.srv_meta?.meta_keywords || '',
        metaImage: this.serviceBanner?.srv_meta?.meta_image || this.serviceBanner?.srv_banner?.image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_1__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
    }
    /**
     * Clear subscriptions when component complete the process
     */
    ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }
  _class = ServicePageComponent;
  _class.ɵfac = function ServicePageComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_videos_list_videos_list_service__WEBPACK_IMPORTED_MODULE_3__.VideosListService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_service_banner_list_service_banner_list_service__WEBPACK_IMPORTED_MODULE_4__.ServiceBannerListService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_5__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_6__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_7__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_8__.ProductsListService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_9__.TestimonialListService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.Meta));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-service-page"]],
    hostBindings: function ServicePageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("scroll", function ServicePageComponent_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
      }
    },
    decls: 7,
    vars: 15,
    consts: [[1, "block", "lg:pt-[85px]", "bg-theme-bg-light-green-shade-1", 3, "serviceBanner"], [1, "block", 3, "serviceHelpData", "helpWithId", "banners", "serviceBanner", "serviceHelppackageData"], ["id", "gytree-membership-service-block", 1, "block", 3, "membership"], ["id", "gytree-experts-service-block", 1, "block", 3, "doctorData", "banners"], ["id", "gytree-testimonial-block", 1, "block", "bg-theme-bg-light-green-shade-1", 3, "testimonialData", "testimonialConfig"], ["textColorClass", "text-theme-dark-green", "id", "gytree-products-service-block", 1, "block", 3, "productList"], ["id", "gytree-learn-service-block", 1, "block", 3, "videoData", "articlesData"]],
    template: function ServicePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-service-hero-section", 0)(1, "app-service-pcos-help", 1)(2, "app-service-gytree-pass", 2)(3, "app-service-expert", 3)(4, "app-package-testimonial", 4)(5, "app-products", 5)(6, "app-learn", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("serviceBanner", ctx.serviceBanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("serviceHelpData", ctx.serviceHelpData)("helpWithId", ctx.helpWithId)("banners", ctx.banners)("serviceBanner", ctx.serviceBanner)("serviceHelppackageData", ctx.serviceHelppackageData)("helpWithId", ctx.helpWithId);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("membership", ctx.membershipBanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("doctorData", ctx.serviceBanner)("banners", ctx.banners);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("testimonialData", ctx.testimonialList)("testimonialConfig", ctx.banners == null ? null : ctx.banners.srvp_testimonial);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("productList", ctx.productList);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("videoData", ctx.videoList)("articlesData", ctx.articles);
      }
    },
    dependencies: [_home_components_learn_learn_component__WEBPACK_IMPORTED_MODULE_10__.LearnComponent, _home_components_products_products_component__WEBPACK_IMPORTED_MODULE_11__.ProductsComponent, _package_components_package_testimonial_package_testimonial_component__WEBPACK_IMPORTED_MODULE_12__.PackageTestimonialComponent, _components_service_hero_section_service_hero_section_component__WEBPACK_IMPORTED_MODULE_13__.ServiceHeroSectionComponent, _components_service_gytree_pass_service_gytree_pass_component__WEBPACK_IMPORTED_MODULE_14__.ServiceGytreePassComponent, _components_service_expert_service_expert_component__WEBPACK_IMPORTED_MODULE_15__.ServiceExpertComponent, _components_service_pcos_help_service_pcos_help_component__WEBPACK_IMPORTED_MODULE_16__.ServicePcosHelpComponent],
    encapsulation: 2
  });
  return ServicePageComponent;
})();


/***/ }),

/***/ 18650:
/*!*************************************************************!*\
  !*** ./src/app/modules/service-page/service-page.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicePageModule: () => (/* binding */ ServicePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _service_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-page.component */ 51164);
/* harmony import */ var _components_service_hero_section_service_hero_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/service-hero-section/service-hero-section.component */ 5440);
/* harmony import */ var _components_service_gytree_pass_service_gytree_pass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/service-gytree-pass/service-gytree-pass.component */ 36175);
/* harmony import */ var _components_service_expert_service_expert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/service-expert/service-expert.component */ 98498);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _components_service_pcos_help_service_pcos_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/service-pcos-help/service-pcos-help.component */ 24027);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 50295);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _components_service_gytree_users_components_testimonial_chat_box_testimonial_chat_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/service-gytree-users/components/testimonial-chat-box/testimonial-chat-box.component */ 50197);
/* harmony import */ var src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/safe-pipe/safe-pipe.module */ 53547);
/* harmony import */ var src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/image-lazy-load/image-lazy-load.module */ 1914);
/* harmony import */ var _home_components_learn_learn_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/components/learn/learn.module */ 11688);
/* harmony import */ var _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/components/products/home-products.module */ 6267);
/* harmony import */ var _package_components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../package/components/package-testimonial/package-testimonial.module */ 3216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 78371);


// Components
















const routes = [{
  path: '',
  component: _service_page_component__WEBPACK_IMPORTED_MODULE_0__.ServicePageComponent
}];
let ServicePageModule = /*#__PURE__*/(() => {
  var _class;
  class ServicePageModule {}
  _class = ServicePageModule;
  _class.ɵfac = function ServicePageModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, ngx_splide__WEBPACK_IMPORTED_MODULE_16__.NgxSplideModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__.SafePipeModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_9__.ImageLazyLoadModule, _home_components_learn_learn_module__WEBPACK_IMPORTED_MODULE_10__.HomeLearnModule, _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_11__.HomeProductModule, _package_components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_12__.PackageTestimonialModule]
  });
  return ServicePageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ServicePageModule, {
    declarations: [_service_page_component__WEBPACK_IMPORTED_MODULE_0__.ServicePageComponent, _components_service_hero_section_service_hero_section_component__WEBPACK_IMPORTED_MODULE_1__.ServiceHeroSectionComponent, _components_service_gytree_pass_service_gytree_pass_component__WEBPACK_IMPORTED_MODULE_2__.ServiceGytreePassComponent, _components_service_expert_service_expert_component__WEBPACK_IMPORTED_MODULE_3__.ServiceExpertComponent, _components_service_pcos_help_service_pcos_help_component__WEBPACK_IMPORTED_MODULE_5__.ServicePcosHelpComponent, _components_service_gytree_users_components_testimonial_chat_box_testimonial_chat_box_component__WEBPACK_IMPORTED_MODULE_7__.TestimonialChatBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, ngx_splide__WEBPACK_IMPORTED_MODULE_16__.NgxSplideModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__.SafePipeModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_9__.ImageLazyLoadModule, _home_components_learn_learn_module__WEBPACK_IMPORTED_MODULE_10__.HomeLearnModule, _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_11__.HomeProductModule, _package_components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_12__.PackageTestimonialModule]
  });
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

/***/ 61231:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/services/service-banner-list/service-banner-list.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceBannerListService: () => (/* binding */ ServiceBannerListService)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);




let ServiceBannerListService = /*#__PURE__*/(() => {
  var _class;
  class ServiceBannerListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
  }
  _class = ServiceBannerListService;
  _class.ɵfac = function ServiceBannerListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return ServiceBannerListService;
})();


/***/ }),

/***/ 32939:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/services/testimonial-list/testimonial-list.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ }),

/***/ 5884:
/*!****************************************!*\
  !*** ./node_modules/asynckit/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  parallel: __webpack_require__(/*! ./parallel.js */ 7047),
  serial: __webpack_require__(/*! ./serial.js */ 70080),
  serialOrdered: __webpack_require__(/*! ./serialOrdered.js */ 48875)
};

/***/ }),

/***/ 27391:
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/abort.js ***!
  \********************************************/
/***/ ((module) => {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state) {
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key) {
  if (typeof this.jobs[key] == 'function') {
    this.jobs[key]();
  }
}

/***/ }),

/***/ 9816:
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/async.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defer = __webpack_require__(/*! ./defer.js */ 6293);

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback) {
  var isAsync = false;

  // check if async happened
  defer(function () {
    isAsync = true;
  });
  return function async_callback(err, result) {
    if (isAsync) {
      callback(err, result);
    } else {
      defer(function nextTick_callback() {
        callback(err, result);
      });
    }
  };
}

/***/ }),

/***/ 6293:
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/defer.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn) {
  var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
  if (nextTick) {
    nextTick(fn);
  } else {
    setTimeout(fn, 0);
  }
}

/***/ }),

/***/ 26026:
/*!**********************************************!*\
  !*** ./node_modules/asynckit/lib/iterate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var async = __webpack_require__(/*! ./async.js */ 9816),
  abort = __webpack_require__(/*! ./abort.js */ 27391);

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback) {
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
  state.jobs[key] = runJob(iterator, key, list[key], function (error, output) {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs)) {
      return;
    }

    // clean up jobs
    delete state.jobs[key];
    if (error) {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    } else {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback) {
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2) {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else {
    aborter = iterator(item, key, async(callback));
  }
  return aborter;
}

/***/ }),

/***/ 5541:
/*!********************************************!*\
  !*** ./node_modules/asynckit/lib/state.js ***!
  \********************************************/
/***/ ((module) => {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod) {
  var isNamedList = !Array.isArray(list),
    initState = {
      index: 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs: {},
      results: isNamedList ? {} : [],
      size: isNamedList ? Object.keys(list).length : list.length
    };
  if (sortMethod) {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function (a, b) {
      return sortMethod(list[a], list[b]);
    });
  }
  return initState;
}

/***/ }),

/***/ 99051:
/*!*************************************************!*\
  !*** ./node_modules/asynckit/lib/terminator.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var abort = __webpack_require__(/*! ./abort.js */ 27391),
  async = __webpack_require__(/*! ./async.js */ 9816);

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback) {
  if (!Object.keys(this.jobs).length) {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}

/***/ }),

/***/ 7047:
/*!*******************************************!*\
  !*** ./node_modules/asynckit/parallel.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate = __webpack_require__(/*! ./lib/iterate.js */ 26026),
  initState = __webpack_require__(/*! ./lib/state.js */ 5541),
  terminator = __webpack_require__(/*! ./lib/terminator.js */ 99051);

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback) {
  var state = initState(list);
  while (state.index < (state['keyedList'] || list).length) {
    iterate(list, iterator, state, function (error, result) {
      if (error) {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0) {
        callback(null, state.results);
        return;
      }
    });
    state.index++;
  }
  return terminator.bind(state, callback);
}

/***/ }),

/***/ 70080:
/*!*****************************************!*\
  !*** ./node_modules/asynckit/serial.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var serialOrdered = __webpack_require__(/*! ./serialOrdered.js */ 48875);

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback) {
  return serialOrdered(list, iterator, null, callback);
}

/***/ }),

/***/ 48875:
/*!************************************************!*\
  !*** ./node_modules/asynckit/serialOrdered.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate = __webpack_require__(/*! ./lib/iterate.js */ 26026),
  initState = __webpack_require__(/*! ./lib/state.js */ 5541),
  terminator = __webpack_require__(/*! ./lib/terminator.js */ 99051);

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback) {
  var state = initState(list, sortMethod);
  iterate(list, iterator, state, function iteratorHandler(error, result) {
    if (error) {
      callback(error, result);
      return;
    }
    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length) {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });
  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b) {
  return -1 * ascending(a, b);
}

/***/ }),

/***/ 52744:
/*!*************************************************************!*\
  !*** ./node_modules/combined-stream/lib/combined_stream.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(/*! util */ 73837);
var Stream = (__webpack_require__(/*! stream */ 12781).Stream);
var DelayedStream = __webpack_require__(/*! delayed-stream */ 81065);
module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;
  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function (options) {
  var combinedStream = new this();
  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }
  return combinedStream;
};
CombinedStream.isStreamLike = function (stream) {
  return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function (stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }
    this._handleErrors(stream);
    if (this.pauseStreams) {
      stream.pause();
    }
  }
  this._streams.push(stream);
  return this;
};
CombinedStream.prototype.pipe = function (dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};
CombinedStream.prototype._getNext = function () {
  this._currentStream = null;
  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};
CombinedStream.prototype._realGetNext = function () {
  var stream = this._streams.shift();
  if (typeof stream == 'undefined') {
    this.end();
    return;
  }
  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }
  var getStream = stream;
  getStream(function (stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }
    this._pipeNext(stream);
  }.bind(this));
};
CombinedStream.prototype._pipeNext = function (stream) {
  this._currentStream = stream;
  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {
      end: false
    });
    return;
  }
  var value = stream;
  this.write(value);
  this._getNext();
};
CombinedStream.prototype._handleErrors = function (stream) {
  var self = this;
  stream.on('error', function (err) {
    self._emitError(err);
  });
};
CombinedStream.prototype.write = function (data) {
  this.emit('data', data);
};
CombinedStream.prototype.pause = function () {
  if (!this.pauseStreams) {
    return;
  }
  if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
  this.emit('pause');
};
CombinedStream.prototype.resume = function () {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }
  if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
  this.emit('resume');
};
CombinedStream.prototype.end = function () {
  this._reset();
  this.emit('end');
};
CombinedStream.prototype.destroy = function () {
  this._reset();
  this.emit('close');
};
CombinedStream.prototype._reset = function () {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function () {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }
  var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function () {
  this.dataSize = 0;
  var self = this;
  this._streams.forEach(function (stream) {
    if (!stream.dataSize) {
      return;
    }
    self.dataSize += stream.dataSize;
  });
  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};
CombinedStream.prototype._emitError = function (err) {
  this._reset();
  this.emit('error', err);
};

/***/ }),

/***/ 17593:
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
  let warned = false;
  return () => {
    if (!warned) {
      warned = true;
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
  };
})();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
  if (!this.useColors) {
    return;
  }
  const c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }
    index++;
    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
  let r;
  try {
    r = exports.storage.getItem('debug');
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }
  return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
module.exports = __webpack_require__(/*! ./common */ 2570)(exports);
const {
  formatters
} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};

/***/ }),

/***/ 2570:
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ 13602);
  createDebug.destroy = destroy;
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });

  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];

  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */
  createDebug.formatters = {};

  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */
  function selectColor(namespace) {
    let hash = 0;
    for (let i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }
  createDebug.selectColor = selectColor;

  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */
  function createDebug(namespace) {
    let prevTime;
    let enableOverride = null;
    let namespacesCache;
    let enabledCache;
    function debug(...args) {
      // Disabled?
      if (!debug.enabled) {
        return;
      }
      const self = debug;

      // Set `diff` timestamp
      const curr = Number(new Date());
      const ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);
      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      }

      // Apply any `formatters` transformations
      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }
        index++;
        const formatter = createDebug.formatters[format];
        if (typeof formatter === 'function') {
          const val = args[index];
          match = formatter.call(self, val);

          // Now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      // Apply env-specific formatting (colors, etc.)
      createDebug.formatArgs.call(self, args);
      const logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: () => {
        if (enableOverride !== null) {
          return enableOverride;
        }
        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }
        return enabledCache;
      },
      set: v => {
        enableOverride = v;
      }
    });

    // Env-specific initialization logic for debug instances
    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }
    return debug;
  }
  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }

  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */
  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    let i;
    const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    const len = split.length;
    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */
  function disable() {
    const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)].join(',');
    createDebug.enable('');
    return namespaces;
  }

  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */
  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }
    let i;
    let len;
    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */
  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }

  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */
  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }
    return val;
  }

  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */
  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }
  createDebug.enable(createDebug.load());
  return createDebug;
}
module.exports = setup;

/***/ }),

/***/ 56581:
/*!*****************************************!*\
  !*** ./node_modules/debug/src/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
  module.exports = __webpack_require__(/*! ./browser.js */ 17593);
} else {
  module.exports = __webpack_require__(/*! ./node.js */ 18924);
}

/***/ }),

/***/ 18924:
/*!****************************************!*\
  !*** ./node_modules/debug/src/node.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ 76224);
const util = __webpack_require__(/*! util */ 73837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(() => {}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];
try {
  // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
  // eslint-disable-next-line import/no-extraneous-dependencies
  const supportsColor = __webpack_require__(/*! supports-color */ 89467);
  if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  }
} catch (error) {
  // Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
  return /^debug_/i.test(key);
}).reduce((obj, key) => {
  // Camel-case
  const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
    return k.toUpperCase();
  });

  // Coerce string value into JS value
  let val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) {
    val = true;
  } else if (/^(no|off|false|disabled)$/i.test(val)) {
    val = false;
  } else if (val === 'null') {
    val = null;
  } else {
    val = Number(val);
  }
  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  const {
    namespace: name,
    useColors
  } = this;
  if (useColors) {
    const c = this.color;
    const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
    const prefix = `  ${colorCode};1m${name} \u001B[0m`;
    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}
function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  }
  return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
  return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
  if (namespaces) {
    process.env.DEBUG = namespaces;
  } else {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};
  const keys = Object.keys(exports.inspectOpts);
  for (let i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}
module.exports = __webpack_require__(/*! ./common */ 2570)(exports);
const {
  formatters
} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(str => str.trim()).join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/***/ }),

/***/ 81065:
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stream = (__webpack_require__(/*! stream */ 12781).Stream);
var util = __webpack_require__(/*! util */ 73837);
module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;
  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function (source, options) {
  var delayedStream = new this();
  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }
  delayedStream.source = source;
  var realEmit = source.emit;
  source.emit = function () {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };
  source.on('error', function () {});
  if (delayedStream.pauseStream) {
    source.pause();
  }
  return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function () {
    return this.source.readable;
  }
});
DelayedStream.prototype.setEncoding = function () {
  return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function () {
  if (!this._released) {
    this.release();
  }
  this.source.resume();
};
DelayedStream.prototype.pause = function () {
  this.source.pause();
};
DelayedStream.prototype.release = function () {
  this._released = true;
  this._bufferedEvents.forEach(function (args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function () {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};
DelayedStream.prototype._handleEmit = function (args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }
  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }
  this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function () {
  if (this._maxDataSizeExceeded) {
    return;
  }
  if (this.dataSize <= this.maxDataSize) {
    return;
  }
  this._maxDataSizeExceeded = true;
  var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this.emit('error', new Error(message));
};

/***/ }),

/***/ 8205:
/*!*************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/fxp.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const validator = __webpack_require__(/*! ./validator */ 5988);
const XMLParser = __webpack_require__(/*! ./xmlparser/XMLParser */ 65326);
const XMLBuilder = __webpack_require__(/*! ./xmlbuilder/json2xml */ 51433);
module.exports = {
  XMLParser: XMLParser,
  XMLValidator: validator,
  XMLBuilder: XMLBuilder
};

/***/ }),

/***/ 24359:
/*!**************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/util.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
const regexName = new RegExp('^' + nameRegexp + '$');
const getAllMatches = function (string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};
const isName = function (string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};
exports.isExist = function (v) {
  return typeof v !== 'undefined';
};
exports.isEmptyObject = function (obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function (target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [a[keys[i]]];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function (v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;

/***/ }),

/***/ 5988:
/*!*******************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/validator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const util = __webpack_require__(/*! ./util */ 24359);
const defaultOptions = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = Object.assign({}, defaultOptions, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;
  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === '<' && xmlData[i + 1] === '?') {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err) return i;
    } else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }
        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag', "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
            //don't push into stack
          } else {
            tags.push({
              tagName,
              tagStartPos
            });
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1) return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }
  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  } else if (tags.length == 1) {
    return getErrorObject('InvalidTag', "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject('InvalidXml', "Invalid '" + JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '') + "' found.", {
      line: 1,
      col: 1
    });
  }
  return true;
};
function isWhiteSpace(char) {
  return char === ' ' || char === '\t' || char === '\n' || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }
  return i;
}
const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';') return i;
    if (!xmlData[i].match(re)) break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';') return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20) continue;
    if (xmlData[i] === ';') break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

/***/ }),

/***/ 51433:
/*!*****************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


//parse Empty Node as self closing node
const buildFromOrderedJs = __webpack_require__(/*! ./orderedJs2Xml */ 26701);
const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function (key, a) {
    return a;
  },
  attributeValueProcessor: function (attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [{
    regex: new RegExp("&", "g"),
    val: "&amp;"
  },
  //it must be on top
  {
    regex: new RegExp(">", "g"),
    val: "&gt;"
  }, {
    regex: new RegExp("<", "g"),
    val: "&lt;"
  }, {
    regex: new RegExp("\'", "g"),
    val: "&apos;"
  }, {
    regex: new RegExp("\"", "g"),
    val: "&quot;"
  }],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false
};
function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function /*a*/
    () {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }
  this.processTextOrObjNode = processTextOrObjNode;
  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function () {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}
Builder.prototype.build = function (jObj) {
  if (this.options.preserveOrder) {
    return buildFromOrderedJs(jObj, this.options);
  } else {
    if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
      jObj = {
        [this.options.arrayNodeName]: jObj
      };
    }
    return this.j2x(jObj, 0).val;
  }
};
Builder.prototype.j2x = function (jObj, level) {
  let attrStr = '';
  let val = '';
  for (let key in jObj) {
    if (!jObj.hasOwnProperty(key)) continue;
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node only if it is not an attribute
      if (this.isAttribute(key)) {
        val += '';
      }
    } else if (jObj[key] === null) {
      // null attribute should be ignored by the attribute list, but should not cause the tag closing
      if (this.isAttribute(key)) {
        val += '';
      } else if (key[0] === '?') {
        val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      } else {
        val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      }
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      } else {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') {
          // supress undefined node
        } else if (item === null) {
          if (key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if (this.options.oneListGroup) {
            listTagVal += this.j2x(item, level + 1).val;
          } else {
            listTagVal += this.processTextOrObjNode(item, key, level);
          }
        } else {
          listTagVal += this.buildTextValNode(item, key, '', level);
        }
      }
      if (this.options.oneListGroup) {
        listTagVal = this.buildObjectNode(listTagVal, key, '', level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level);
      }
    }
  }
  return {
    attrStr: attrStr,
    val: val
  };
};
Builder.prototype.buildAttrPairStr = function (attrName, val) {
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
};
function processTextOrObjNode(object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}
Builder.prototype.buildObjectNode = function (val, key, attrStr, level) {
  if (val === "") {
    if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  } else {
    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    if (key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }

    // attrStr is an empty string in case the attribute came as undefined or null
    if ((attrStr || attrStr === '') && val.indexOf('<') === -1) {
      return this.indentate(level) + '<' + key + attrStr + piClosingChar + '>' + val + tagEndExp;
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    } else {
      return this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
    }
  }
};
Builder.prototype.closeTag = function (key) {
  let closeTag = "";
  if (this.options.unpairedTags.indexOf(key) !== -1) {
    //unpaired
    if (!this.options.suppressUnpairedNode) closeTag = "/";
  } else if (this.options.suppressEmptyNode) {
    //empty
    closeTag = "/";
  } else {
    closeTag = `></${key}`;
  }
  return closeTag;
};
function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;else {
      return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
      // return this.buildTagStr(level,key, attrStr);
    }
  }
}

Builder.prototype.buildTextValNode = function (val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` + this.newLine;
  } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` + this.newLine;
  } else if (key[0] === "?") {
    //PI tag
    return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
  } else {
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
    if (textValue === '') {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    } else {
      return this.indentate(level) + '<' + key + attrStr + '>' + textValue + '</' + key + this.tagEndChar;
    }
  }
};
Builder.prototype.replaceEntitiesValue = function (textValue) {
  if (textValue && textValue.length > 0 && this.options.processEntities) {
    for (let i = 0; i < this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
};
function indentate(level) {
  return this.options.indentBy.repeat(level);
}
function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}
module.exports = Builder;

/***/ }),

/***/ 26701:
/*!**********************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js ***!
  \**********************************************************************/
/***/ ((module) => {

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
  let indentation = "";
  if (options.format && options.indentBy.length > 0) {
    indentation = EOL;
  }
  return arrToStr(jArray, options, "", indentation);
}
function arrToStr(arr, options, jPath, indentation) {
  let xmlStr = "";
  let isPreviousElementTag = false;
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const tagName = propName(tagObj);
    if (tagName === undefined) continue;
    let newJPath = "";
    if (jPath.length === 0) newJPath = tagName;else newJPath = `${jPath}.${tagName}`;
    if (tagName === options.textNodeName) {
      let tagText = tagObj[tagName];
      if (!isStopNode(newJPath, options)) {
        tagText = options.tagValueProcessor(tagName, tagText);
        tagText = replaceEntitiesValue(tagText, options);
      }
      if (isPreviousElementTag) {
        xmlStr += indentation;
      }
      xmlStr += tagText;
      isPreviousElementTag = false;
      continue;
    } else if (tagName === options.cdataPropName) {
      if (isPreviousElementTag) {
        xmlStr += indentation;
      }
      xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
      isPreviousElementTag = false;
      continue;
    } else if (tagName === options.commentPropName) {
      xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
      isPreviousElementTag = true;
      continue;
    } else if (tagName[0] === "?") {
      const attStr = attr_to_str(tagObj[":@"], options);
      const tempInd = tagName === "?xml" ? "" : indentation;
      let piTextNodeName = tagObj[tagName][0][options.textNodeName];
      piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
      xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
      isPreviousElementTag = true;
      continue;
    }
    let newIdentation = indentation;
    if (newIdentation !== "") {
      newIdentation += options.indentBy;
    }
    const attStr = attr_to_str(tagObj[":@"], options);
    const tagStart = indentation + `<${tagName}${attStr}`;
    const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
    if (options.unpairedTags.indexOf(tagName) !== -1) {
      if (options.suppressUnpairedNode) xmlStr += tagStart + ">";else xmlStr += tagStart + "/>";
    } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
      xmlStr += tagStart + "/>";
    } else if (tagValue && tagValue.endsWith(">")) {
      xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
    } else {
      xmlStr += tagStart + ">";
      if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
        xmlStr += indentation + options.indentBy + tagValue + indentation;
      } else {
        xmlStr += tagValue;
      }
      xmlStr += `</${tagName}>`;
    }
    isPreviousElementTag = true;
  }
  return xmlStr;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!obj.hasOwnProperty(key)) continue;
    if (key !== ":@") return key;
  }
}
function attr_to_str(attrMap, options) {
  let attrStr = "";
  if (attrMap && !options.ignoreAttributes) {
    for (let attr in attrMap) {
      if (!attrMap.hasOwnProperty(attr)) continue;
      let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
      attrVal = replaceEntitiesValue(attrVal, options);
      if (attrVal === true && options.suppressBooleanAttributes) {
        attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
      } else {
        attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
      }
    }
  }
  return attrStr;
}
function isStopNode(jPath, options) {
  jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
  let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
  for (let index in options.stopNodes) {
    if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
  }
  return false;
}
function replaceEntitiesValue(textValue, options) {
  if (textValue && textValue.length > 0 && options.processEntities) {
    for (let i = 0; i < options.entities.length; i++) {
      const entity = options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}
module.exports = toXml;

/***/ }),

/***/ 14861:
/*!*********************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ../util */ 24359);

//TODO: handle comments
function readDocType(xmlData, i) {
  const entities = {};
  if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
    i = i + 9;
    let angleBracketsCount = 1;
    let hasBody = false,
      comment = false;
    let exp = "";
    for (; i < xmlData.length; i++) {
      if (xmlData[i] === '<' && !comment) {
        //Determine the tag type
        if (hasBody && isEntity(xmlData, i)) {
          i += 7;
          [entityName, val, i] = readEntityExp(xmlData, i + 1);
          if (val.indexOf("&") === -1)
            //Parameter entities are not supported
            entities[validateEntityName(entityName)] = {
              regx: RegExp(`&${entityName};`, "g"),
              val: val
            };
        } else if (hasBody && isElement(xmlData, i)) i += 8; //Not supported
        else if (hasBody && isAttlist(xmlData, i)) i += 8; //Not supported
        else if (hasBody && isNotation(xmlData, i)) i += 9; //Not supported
        else if (isComment) comment = true;else throw new Error("Invalid DOCTYPE");
        angleBracketsCount++;
        exp = "";
      } else if (xmlData[i] === '>') {
        //Read tag content
        if (comment) {
          if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
            comment = false;
            angleBracketsCount--;
          }
        } else {
          angleBracketsCount--;
        }
        if (angleBracketsCount === 0) {
          break;
        }
      } else if (xmlData[i] === '[') {
        hasBody = true;
      } else {
        exp += xmlData[i];
      }
    }
    if (angleBracketsCount !== 0) {
      throw new Error(`Unclosed DOCTYPE`);
    }
  } else {
    throw new Error(`Invalid Tag instead of DOCTYPE`);
  }
  return {
    entities,
    i
  };
}
function readEntityExp(xmlData, i) {
  //External entities are not supported
  //    <!ENTITY ext SYSTEM "http://normal-website.com" >

  //Parameter entities are not supported
  //    <!ENTITY entityname "&anotherElement;">

  //Internal entities are supported
  //    <!ENTITY entityname "replacement text">

  //read EntityName
  let entityName = "";
  for (; i < xmlData.length && xmlData[i] !== "'" && xmlData[i] !== '"'; i++) {
    // if(xmlData[i] === " ") continue;
    // else 
    entityName += xmlData[i];
  }
  entityName = entityName.trim();
  if (entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");

  //read Entity Value
  const startChar = xmlData[i++];
  let val = "";
  for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
    val += xmlData[i];
  }
  return [entityName, val, i];
}
function isComment(xmlData, i) {
  if (xmlData[i + 1] === '!' && xmlData[i + 2] === '-' && xmlData[i + 3] === '-') return true;
  return false;
}
function isEntity(xmlData, i) {
  if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'E' && xmlData[i + 3] === 'N' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'I' && xmlData[i + 6] === 'T' && xmlData[i + 7] === 'Y') return true;
  return false;
}
function isElement(xmlData, i) {
  if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'E' && xmlData[i + 3] === 'L' && xmlData[i + 4] === 'E' && xmlData[i + 5] === 'M' && xmlData[i + 6] === 'E' && xmlData[i + 7] === 'N' && xmlData[i + 8] === 'T') return true;
  return false;
}
function isAttlist(xmlData, i) {
  if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'A' && xmlData[i + 3] === 'T' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'L' && xmlData[i + 6] === 'I' && xmlData[i + 7] === 'S' && xmlData[i + 8] === 'T') return true;
  return false;
}
function isNotation(xmlData, i) {
  if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'N' && xmlData[i + 3] === 'O' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'A' && xmlData[i + 6] === 'T' && xmlData[i + 7] === 'I' && xmlData[i + 8] === 'O' && xmlData[i + 9] === 'N') return true;
  return false;
}
function validateEntityName(name) {
  if (util.isName(name)) return name;else throw new Error(`Invalid entity name ${name}`);
}
module.exports = readDocType;

/***/ }),

/***/ 72848:
/*!**********************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

const defaultOptions = {
  preserveOrder: false,
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  removeNSPrefix: false,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true,
    eNotation: true
  },
  tagValueProcessor: function (tagName, val) {
    return val;
  },
  attributeValueProcessor: function (attrName, val) {
    return val;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: false,
  isArray: () => false,
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false,
  transformAttributeName: false,
  updateTag: function (tagName, jPath, attrs) {
    return tagName;
  }
  // skipEmptyListItem: false
};

const buildOptions = function (options) {
  return Object.assign({}, defaultOptions, options);
};
exports.buildOptions = buildOptions;
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ 26697:
/*!************************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


///@ts-check
const util = __webpack_require__(/*! ../util */ 24359);
const xmlNode = __webpack_require__(/*! ./xmlNode */ 29910);
const readDocType = __webpack_require__(/*! ./DocTypeReader */ 14861);
const toNumber = __webpack_require__(/*! strnum */ 59765);
const regx = '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'.replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser {
  constructor(options) {
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos": {
        regex: /&(apos|#39|#x27);/g,
        val: "'"
      },
      "gt": {
        regex: /&(gt|#62|#x3E);/g,
        val: ">"
      },
      "lt": {
        regex: /&(lt|#60|#x3C);/g,
        val: "<"
      },
      "quot": {
        regex: /&(quot|#34|#x22);/g,
        val: "\""
      }
    };
    this.ampEntity = {
      regex: /&(amp|#38|#x26);/g,
      val: "&"
    };
    this.htmlEntities = {
      "space": {
        regex: /&(nbsp|#160);/g,
        val: " "
      },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent": {
        regex: /&(cent|#162);/g,
        val: "¢"
      },
      "pound": {
        regex: /&(pound|#163);/g,
        val: "£"
      },
      "yen": {
        regex: /&(yen|#165);/g,
        val: "¥"
      },
      "euro": {
        regex: /&(euro|#8364);/g,
        val: "€"
      },
      "copyright": {
        regex: /&(copy|#169);/g,
        val: "©"
      },
      "reg": {
        regex: /&(reg|#174);/g,
        val: "®"
      },
      "inr": {
        regex: /&(inr|#8377);/g,
        val: "₹"
      }
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
  }
}
function addExternalEntities(externalEntities) {
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
      regex: new RegExp("&" + ent + ";", "g"),
      val: externalEntities[ent]
    };
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val);
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if (newval === null || newval === undefined) {
        //don't parse
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        //overwrite
        return newval;
      } else if (this.options.trimValues) {
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');
function buildAttributesMap(attrStr, jPath, tagName) {
  if (!this.options.ignoreAttributes && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if (aName === "__proto__") aName = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if (newVal === null || newVal === undefined) {
            //don't parse
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            //overwrite
            attrs[aName] = newVal;
          } else {
            //parse
            attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
const parseXml = function (xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for (let i = 0; i < xmlData.length; i++) {
    //for each char in XML data
    const ch = xmlData[i];
    if (ch === '<') {
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if (xmlData[i + 1] === '/') {
        //Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i + 2, closeIndex).trim();
        if (this.options.removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
          }
        }
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        //check if last tag of nested tag was unpaired tag
        const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
        if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0;
        if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
          propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.') - 1);
          this.tagsNodeStack.pop();
        } else {
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);
        currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if (xmlData[i + 1] === '?') {
        let tagData = readTagExp(xmlData, i, false, "?>");
        if (!tagData) throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {} else {
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath);
        }
        i = tagData.closeIndex + 1;
      } else if (xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const comment = xmlData.substring(i + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
          currentNode.add(this.options.commentPropName, [{
            [this.options.textNodeName]: comment
          }]);
        }
        i = endIndex;
      } else if (xmlData.substr(i + 1, 2) === '!D') {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      } else if (xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9, closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        //cdata should be set even if it is 0 length string
        if (this.options.cdataPropName) {
          // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
          // if(!val) val = "";
          currentNode.add(this.options.cdataPropName, [{
            [this.options.textNodeName]: tagExp
          }]);
        } else {
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if (val == undefined) val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        i = closeIndex + 2;
      } else {
        //Opening tag
        let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
        let tagName = result.tagName;
        const rawTagName = result.rawTagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        //save text as child node
        if (currentNode && textData) {
          if (currentNode.tagname !== '!xml') {
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if (tagName !== xmlObj.tagname) {
          jPath += jPath ? "." + tagName : tagName;
        }
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
          let tagContent = "";
          //self-closing tag
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            i = result.closeIndex;
          }
          //unpaired tag
          else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
            i = result.closeIndex;
          }
          //normal tag
          else {
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
            if (!result) throw new Error(`Unexpected end of ${rawTagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }
          const childNode = new xmlNode(tagName);
          if (tagName !== tagExp && attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if (tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          this.addChild(currentNode, childNode, jPath);
        } else {
          //selfClosing tag
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            if (tagName[tagName.length - 1] === "/") {
              //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            } else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            const childNode = new xmlNode(tagName);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath);
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          }
          //opening tag
          else {
            const childNode = new xmlNode(tagName);
            this.tagsNodeStack.push(currentNode);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    } else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};
function addChild(currentNode, childNode, jPath) {
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
  if (result === false) {} else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode);
  } else {
    currentNode.addChild(childNode);
  }
}
const replaceEntitiesValue = function (val) {
  if (this.options.processEntities) {
    for (let entityName in this.docTypeEntities) {
      const entity = this.docTypeEntities[entityName];
      val = val.replace(entity.regx, entity.val);
    }
    for (let entityName in this.lastEntities) {
      const entity = this.lastEntities[entityName];
      val = val.replace(entity.regex, entity.val);
    }
    if (this.options.htmlEntities) {
      for (let entityName in this.htmlEntities) {
        const entity = this.htmlEntities[entityName];
        val = val.replace(entity.regex, entity.val);
      }
    }
    val = val.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
};
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) {
    //store previously collected data as textNode
    if (isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0;
    textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
    if (textData !== undefined && textData !== "") currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */
function isItStopNode(stopNodes, jPath, currentTagName) {
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
  }
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
      if (ch === attrBoundary) attrBoundary = ""; //reset
    } else if (ch === '"' || ch === "'") {
      attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if (closingChar[1]) {
        if (xmlData[index + 1] === closingChar[1]) {
          return {
            data: tagExp,
            index: index
          };
        }
      } else {
        return {
          data: tagExp,
          index: index
        };
      }
    } else if (ch === '\t') {
      ch = " ";
    }
    tagExp += ch;
  }
}
function findClosingIndex(xmlData, str, i, errMsg) {
  const closingIndex = xmlData.indexOf(str, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    //separate tag name and attributes expression
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
    tagExp = tagExp.substr(separatorIndex + 1);
  }
  const rawTagName = tagName;
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
    rawTagName: rawTagName
  };
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i) {
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === "<") {
      if (xmlData[i + 1] === "/") {
        //close tag
        const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex
            };
          }
        }
        i = closeIndex;
      } else if (xmlData[i + 1] === '?') {
        const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 3) === '!--') {
        const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i, '>');
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  } //end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if (newval === 'true') return true;else if (newval === 'false') return false;else return toNumber(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}
module.exports = OrderedObjParser;

/***/ }),

/***/ 65326:
/*!*****************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  buildOptions
} = __webpack_require__(/*! ./OptionsBuilder */ 72848);
const OrderedObjParser = __webpack_require__(/*! ./OrderedObjParser */ 26697);
const {
  prettify
} = __webpack_require__(/*! ./node2json */ 53599);
const validator = __webpack_require__(/*! ../validator */ 5988);
class XMLParser {
  constructor(options) {
    this.externalEntities = {};
    this.options = buildOptions(options);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(xmlData, validationOption) {
    if (typeof xmlData === "string") {} else if (xmlData.toString) {
      xmlData = xmlData.toString();
    } else {
      throw new Error("XML data is accepted in String or Bytes[] form.");
    }
    if (validationOption) {
      if (validationOption === true) validationOption = {}; //validate with default options

      const result = validator.validate(xmlData, validationOption);
      if (result !== true) {
        throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
      }
    }
    const orderedObjParser = new OrderedObjParser(this.options);
    orderedObjParser.addExternalEntities(this.externalEntities);
    const orderedResult = orderedObjParser.parseXml(xmlData);
    if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;else return prettify(orderedResult, this.options);
  }

  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(key, value) {
    if (value.indexOf("&") !== -1) {
      throw new Error("Entity value can't have '&'");
    } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    } else if (value === "&") {
      throw new Error("An entity with value '&' is not permitted");
    } else {
      this.externalEntities[key] = value;
    }
  }
}
module.exports = XMLParser;

/***/ }),

/***/ 53599:
/*!*****************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/node2json.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify(node, options) {
  return compress(node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath) {
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if (jPath === undefined) newJpath = property;else newJpath = jPath + "." + property;
    if (property === options.textNodeName) {
      if (text === undefined) text = tagObj[property];else text += "" + tagObj[property];
    } else if (property === undefined) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], newJpath, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";else val = "";
      }
      if (compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
    }
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, jpath, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const {
    textNodeName
  } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}
exports.prettify = prettify;

/***/ }),

/***/ 29910:
/*!***************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


class XmlNode {
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }

  add(key, val) {
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if (key === "__proto__") key = "#__proto__";
    this.child.push({
      [key]: val
    });
  }
  addChild(node) {
    if (node.tagname === "__proto__") node.tagname = "#__proto__";
    if (node[":@"] && Object.keys(node[":@"]).length > 0) {
      this.child.push({
        [node.tagname]: node.child,
        [":@"]: node[":@"]
      });
    } else {
      this.child.push({
        [node.tagname]: node.child
      });
    }
  }
}
;
module.exports = XmlNode;

/***/ }),

/***/ 38297:
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/debug.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debug;
module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __webpack_require__(/*! debug */ 56581)("follow-redirects");
    } catch (error) {/* */}
    if (typeof debug !== "function") {
      debug = function () {/* */};
    }
  }
  debug.apply(null, arguments);
};

/***/ }),

/***/ 45624:
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var url = __webpack_require__(/*! url */ 57310);
var URL = url.URL;
var http = __webpack_require__(/*! http */ 13685);
var https = __webpack_require__(/*! https */ 95687);
var Writable = (__webpack_require__(/*! stream */ 12781).Writable);
var assert = __webpack_require__(/*! assert */ 39491);
var debug = __webpack_require__(/*! ./debug */ 38297);

// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
  assert(new URL());
} catch (error) {
  useNativeURL = error.code === "ERR_INVALID_URL";
}

// URL fields to preserve in copy operations
var preservedUrlFields = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"];

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");

// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    try {
      self._processResponse(response);
    } catch (cause) {
      self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
        cause: cause
      }));
    }
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function () {
  destroyRequest(this._currentRequest);
  this._currentRequest.abort();
  this.emit("abort");
};
RedirectableRequest.prototype.destroy = function (error) {
  destroyRequest(this._currentRequest, error);
  destroy.call(this, error);
  return this;
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({
      data: data,
      encoding: encoding
    });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  } else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  } else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    self.removeListener("close", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  } else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  this.on("close", clearTimer);
  return this;
};

// Proxy all other public ClientRequest methods
["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () {
      return this._currentRequest[property];
    }
  });
});
RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    } else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    throw new TypeError("Unsupported protocol " + protocol);
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) :
  // When making a request to a proxy, […]
  // a client MUST send the target URI in absolute-form […].
  this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    })();
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  destroyRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    throw new TooManyRedirectsError();
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host")
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
  // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = parseUrl(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
    host: currentHost
  }));

  // Create the redirected request
  var redirectUrl = resolveUrl(location, currentUrl);
  debug("redirecting to", redirectUrl.href);
  this._isRedirect = true;
  spreadUrlObject(redirectUrl, this._options);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
    removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders
    };
    beforeRedirect(this._options, responseDetails, requestDetails);
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  this._performRequest();
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters, ensuring that input is an object
      if (isURL(input)) {
        input = spreadUrlObject(input);
      } else if (isString(input)) {
        input = spreadUrlObject(parseUrl(input));
      } else {
        callback = options;
        options = validateUrl(input);
        input = {
          protocol: protocol
        };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: {
        value: request,
        configurable: true,
        enumerable: true,
        writable: true
      },
      get: {
        value: get,
        configurable: true,
        enumerable: true,
        writable: true
      }
    });
  });
  return exports;
}
function noop() {/* empty */}
function parseUrl(input) {
  var parsed;
  /* istanbul ignore else */
  if (useNativeURL) {
    parsed = new URL(input);
  } else {
    // Ensure the URL is valid and absolute
    parsed = validateUrl(url.parse(input));
    if (!isString(parsed.protocol)) {
      throw new InvalidUrlError({
        input
      });
    }
  }
  return parsed;
}
function resolveUrl(relative, base) {
  /* istanbul ignore next */
  return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
  if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
    throw new InvalidUrlError({
      input: input.href || input
    });
  }
  if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
    throw new InvalidUrlError({
      input: input.href || input
    });
  }
  return input;
}
function spreadUrlObject(urlObject, target) {
  var spread = target || {};
  for (var key of preservedUrlFields) {
    spread[key] = urlObject[key];
  }

  // Fix IPv6 hostname
  if (spread.hostname.startsWith("[")) {
    spread.hostname = spread.hostname.slice(1, -1);
  }
  // Ensure port is a number
  if (spread.port !== "") {
    spread.port = Number(spread.port);
  }
  // Concatenate path
  spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
  return spread;
}
function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  Object.defineProperties(CustomError.prototype, {
    constructor: {
      value: CustomError,
      enumerable: false
    },
    name: {
      value: "Error [" + code + "]",
      enumerable: false
    }
  });
  return CustomError;
}
function destroyRequest(request, error) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.destroy(error);
}
function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
  return typeof value === "function";
}
function isBuffer(value) {
  return typeof value === "object" && "length" in value;
}
function isURL(value) {
  return URL && value instanceof URL;
}

// Exports
module.exports = wrap({
  http: http,
  https: https
});
module.exports.wrap = wrap;

/***/ }),

/***/ 97571:
/*!*************************************************!*\
  !*** ./node_modules/form-data/lib/form_data.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var CombinedStream = __webpack_require__(/*! combined-stream */ 52744);
var util = __webpack_require__(/*! util */ 73837);
var path = __webpack_require__(/*! path */ 71017);
var http = __webpack_require__(/*! http */ 13685);
var https = __webpack_require__(/*! https */ 95687);
var parseUrl = (__webpack_require__(/*! url */ 57310).parse);
var fs = __webpack_require__(/*! fs */ 57147);
var Stream = (__webpack_require__(/*! stream */ 12781).Stream);
var mime = __webpack_require__(/*! mime-types */ 39119);
var asynckit = __webpack_require__(/*! asynckit */ 5884);
var populate = __webpack_require__(/*! ./populate.js */ 16033);

// Public API
module.exports = FormData;

// make it a Stream
util.inherits(FormData, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData(options);
  }
  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];
  CombinedStream.call(this);
  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function (field, value, options) {
  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {
      filename: options
    };
  }
  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }
  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();
  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function (header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }
  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream)) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};
FormData.prototype._lengthRetriever = function (value, callback) {
  if (value.hasOwnProperty('fd')) {
    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {
      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

      // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function (err, stat) {
        var fileSize;
        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

    // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

    // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function (response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

    // something else
  } else {
    callback('Unknown stream');
  }
};
FormData.prototype._multiPartHeader = function (field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }
  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);
  var contents = '';
  var headers = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }
  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
    }
  }
  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function (value, options) {
  var filename, contentDisposition;
  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }
  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }
  return contentDisposition;
};
FormData.prototype._getContentType = function (value, options) {
  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }
  return contentType;
};
FormData.prototype._multiPartFooter = function () {
  return function (next) {
    var footer = FormData.LINE_BREAK;
    var lastPart = this._streams.length === 0;
    if (lastPart) {
      footer += this._lastBoundary();
    }
    next(footer);
  }.bind(this);
};
FormData.prototype._lastBoundary = function () {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function (userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };
  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }
  return formHeaders;
};
FormData.prototype.setBoundary = function (boundary) {
  this._boundary = boundary;
};
FormData.prototype.getBoundary = function () {
  if (!this._boundary) {
    this._generateBoundary();
  }
  return this._boundary;
};
FormData.prototype.getBuffer = function () {
  var dataBuffer = new Buffer.alloc(0);
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {
      // Add content to the buffer.
      if (Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
      } else {
        dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
        dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData.LINE_BREAK)]);
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
};
FormData.prototype._generateBoundary = function () {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }
  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function () {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }
  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function () {
  var hasKnownLength = true;
  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }
  return hasKnownLength;
};
FormData.prototype.getLength = function (cb) {
  var knownLength = this._overheadLength + this._valueLength;
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }
  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }
  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function (err, values) {
    if (err) {
      cb(err);
      return;
    }
    values.forEach(function (length) {
      knownLength += length;
    });
    cb(null, knownLength);
  });
};
FormData.prototype.submit = function (params, cb) {
  var request,
    options,
    defaults = {
      method: 'post'
    };

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {
    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

    // use custom params
  } else {
    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function (err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }
    this.pipe(request);
    if (cb) {
      var onResponse;
      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);
        return cb.call(this, error, responce);
      };
      onResponse = callback.bind(this, null);
      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));
  return request;
};
FormData.prototype._error = function (err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};
FormData.prototype.toString = function () {
  return '[object FormData]';
};

/***/ }),

/***/ 16033:
/*!************************************************!*\
  !*** ./node_modules/form-data/lib/populate.js ***!
  \************************************************/
/***/ ((module) => {

// populates missing values
module.exports = function (dst, src) {
  Object.keys(src).forEach(function (prop) {
    dst[prop] = dst[prop] || src[prop];
  });
  return dst;
};

/***/ }),

/***/ 99278:
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


module.exports = (flag, argv) => {
  argv = argv || process.argv;
  const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
  const pos = argv.indexOf(prefix + flag);
  const terminatorPos = argv.indexOf('--');
  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

/***/ }),

/***/ 13602:
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ 64595:
/*!**********************************************!*\
  !*** ./node_modules/proxy-from-env/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var parseUrl = (__webpack_require__(/*! url */ 57310).parse);
var DEFAULT_PORTS = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
var stringEndsWith = String.prototype.endsWith || function (s) {
  return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};

/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */
function getProxyForUrl(url) {
  var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return ''; // Don't proxy URLs without a valid scheme or host.
  }

  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return ''; // Don't proxy URLs that match NO_PROXY.
  }

  var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
  if (proxy && proxy.indexOf('://') === -1) {
    // Missing scheme in proxy, default to the requested URL's scheme.
    proxy = proto + '://' + proxy;
  }
  return proxy;
}

/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */
function shouldProxy(hostname, port) {
  var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
  if (!NO_PROXY) {
    return true; // Always proxy if NO_PROXY is not set.
  }

  if (NO_PROXY === '*') {
    return false; // Never proxy if wildcard is set.
  }

  return NO_PROXY.split(/[,\s]/).every(function (proxy) {
    if (!proxy) {
      return true; // Skip zero-length hosts.
    }

    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true; // Skip if ports don't match.
    }

    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }
    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    // Stop proxying if the hostname ends with the no_proxy host.
    return !stringEndsWith.call(hostname, parsedProxyHostname);
  });
}

/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;

/***/ }),

/***/ 28110:
/*!************************************************!*\
  !*** ./node_modules/rss-to-json/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 17156)["default"]);
(() => {
  "use strict";

  var e = {
      306: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        const a = r(861),
          i = r(167);
        t.default = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(function* (e, t) {
            var r, n;
            if (!/(^http(s?):\/\/[^\s$.?#].[^\s]*)/i.test(e)) return null;
            const {
                data: s
              } = yield (0, i.default)(e, t),
              u = new a.XMLParser({
                attributeNamePrefix: "",
                textNodeName: "$text",
                ignoreAttributes: !1
              }).parse(s);
            let o = u.rss && u.rss.channel ? u.rss.channel : u.feed;
            Array.isArray(o) && (o = o[0]);
            const d = {
              title: null !== (r = o.title) && void 0 !== r ? r : "",
              description: null !== (n = o.description) && void 0 !== n ? n : "",
              link: o.link && o.link.href ? o.link.href : o.link,
              image: o.image ? o.image.url : o["itunes:image"] ? o["itunes:image"].href : "",
              category: o.category || [],
              items: []
            };
            let l = o.item || o.entry || [];
            l && !Array.isArray(l) && (l = [l]);
            for (let e = 0; e < l.length; e++) {
              const t = l[e],
                r = {},
                a = {
                  id: t.guid && t.guid.$text ? t.guid.$text : t.id,
                  title: t.title && t.title.$text ? t.title.$text : t.title,
                  description: t.summary && t.summary.$text ? t.summary.$text : t.description,
                  link: t.link && t.link.href ? t.link.href : t.link,
                  author: t.author && t.author.name ? t.author.name : t["dc:creator"],
                  published: t.created ? Date.parse(t.created) : t.pubDate ? Date.parse(t.pubDate) : Date.now(),
                  created: t.updated ? Date.parse(t.updated) : t.pubDate ? Date.parse(t.pubDate) : t.created ? Date.parse(t.created) : Date.now(),
                  category: t.category || [],
                  content: t.content && t.content.$text ? t.content.$text : t["content:encoded"],
                  enclosures: t.enclosure ? Array.isArray(t.enclosure) ? t.enclosure : [t.enclosure] : []
                };
              ["content:encoded", "podcast:transcript", "itunes:summary", "itunes:author", "itunes:explicit", "itunes:duration", "itunes:season", "itunes:episode", "itunes:episodeType", "itunes:image"].forEach(e => {
                t[e] && (a[e.replace(":", "_")] = t[e]);
              }), t["media:thumbnail"] && (Object.assign(r, {
                thumbnail: t["media:thumbnail"]
              }), a.enclosures.push(t["media:thumbnail"])), t["media:content"] && (Object.assign(r, {
                thumbnail: t["media:content"]
              }), a.enclosures.push(t["media:content"])), t["media:group"] && (t["media:group"]["media:title"] && (a.title = t["media:group"]["media:title"]), t["media:group"]["media:description"] && (a.description = t["media:group"]["media:description"]), t["media:group"]["media:thumbnail"] && a.enclosures.push(t["media:group"]["media:thumbnail"].url)), Object.assign(a, {
                media: r
              }), d.items.push(a);
            }
            return d;
          });
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();
      },
      167: e => {
        e.exports = __webpack_require__(/*! axios */ 3645);
      },
      861: e => {
        e.exports = __webpack_require__(/*! fast-xml-parser */ 8205);
      }
    },
    t = {};
  function r(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var n = t[a] = {
      exports: {}
    };
    return e[a](n, n.exports, r), n.exports;
  }
  var a = {};
  (() => {
    var e = a;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Parse = e.parse = void 0;
    const t = r(306);
    e.parse = t.default;
    const i = t.default;
    e.Parse = i, e.default = t.default;
  })();
  var i = exports;
  for (var n in a) i[n] = a[n];
  a.__esModule && Object.defineProperty(i, "__esModule", {
    value: !0
  });
})();

/***/ }),

/***/ 59765:
/*!***************************************!*\
  !*** ./node_modules/strnum/strnum.js ***!
  \***************************************/
/***/ ((module) => {

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;

//polyfill
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}
const consider = {
  hex: true,
  leadingZeros: true,
  decimalPoint: "\.",
  eNotation: true
  //skipLike: /regex/
};

function toNumber(str, options = {}) {
  // const options = Object.assign({}, consider);
  // if(opt.leadingZeros === false){
  //     options.leadingZeros = false;
  // }else if(opt.hex === false){
  //     options.hex = false;
  // }

  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string") return str;
  let trimmedStr = str.trim();
  // if(trimmedStr === "0.0") return 0;
  // else if(trimmedStr === "+0.0") return 0;
  // else if(trimmedStr === "-0.0") return -0;

  if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;else if (options.hex && hexRegex.test(trimmedStr)) {
    return Number.parseInt(trimmedStr, 16);
    // } else if (options.parseOct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
  } else {
    //separate negative sign, leading zeros, and rest number
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1];
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
      //trim ending zeros for floating number

      const eNotation = match[4] || match[6];
      if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
      else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
      else {
        //no leading zeros or leading zeros are allowed
        const num = Number(trimmedStr);
        const numStr = "" + num;
        if (numStr.search(/[eE]/) !== -1) {
          //given number is long and parsed to eNotation
          if (options.eNotation) return num;else return str;
        } else if (eNotation) {
          //given number has enotation
          if (options.eNotation) return num;else return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          //floating number
          // const decimalPart = match[5].substr(1);
          // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));

          // const p = numStr.indexOf(".");
          // const givenIntPart = numStr.substr(0,p);
          // const givenDecPart = numStr.substr(p+1);
          if (numStr === "0" && numTrimmedByZeros === "") return num; //0.0
          else if (numStr === numTrimmedByZeros) return num; //0.456. 0.79000
          else if (sign && numStr === "-" + numTrimmedByZeros) return num;else return str;
        }
        if (leadingZeros) {
          // if(numTrimmedByZeros === numStr){
          //     if(options.leadingZeros) return num;
          //     else return str;
          // }else return str;
          if (numTrimmedByZeros === numStr) return num;else if (sign + numTrimmedByZeros === numStr) return num;else return str;
        }
        if (trimmedStr === numStr) return num;else if (trimmedStr === sign + numStr) return num;
        // else{
        //     //number with +/- sign
        //     trimmedStr.test(/[-+][0-9]);

        // }
        return str;
      }
      // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
    } else {
      //non-numeric string
      return str;
    }
  }
}

/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    //float
    numStr = numStr.replace(/0+$/, ""); //remove ending zeros
    if (numStr === ".") numStr = "0";else if (numStr[0] === ".") numStr = "0" + numStr;else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
module.exports = toNumber;

/***/ }),

/***/ 89467:
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const os = __webpack_require__(/*! os */ 22037);
const hasFlag = __webpack_require__(/*! has-flag */ 99278);
const env = process.env;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }
  if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
    return 3;
  }
  if (hasFlag('color=256')) {
    return 2;
  }
  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }
  const min = forceColor ? 1 : 0;
  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
    // release that supports 256 colors. Windows 10 build 14931 is the first release
    // that supports 16m/TrueColor.
    const osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
      return 1;
    }
    return min;
  }
  if ('TEAMCITY_VERSION' in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === 'truecolor') {
    return 3;
  }
  if ('TERM_PROGRAM' in env) {
    const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ('COLORTERM' in env) {
    return 1;
  }
  if (env.TERM === 'dumb') {
    return min;
  }
  return min;
}
function getSupportLevel(stream) {
  const level = supportsColor(stream);
  return translateLevel(level);
}
module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr)
};

/***/ }),

/***/ 3645:
/*!*************************************************************************!*\
  !*** ./node_modules/rss-to-json/node_modules/axios/dist/node/axios.cjs ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Axios v1.6.8 Copyright (c) 2024 Matt Zabriskie and contributors


var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 17156)["default"]);
var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 18186)["default"]);
var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 16737)["default"]);
var _asyncGeneratorDelegate = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncGeneratorDelegate.js */ 28131)["default"]);
var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 18237)["default"]);
const FormData$1 = __webpack_require__(/*! form-data */ 97571);
const url = __webpack_require__(/*! url */ 57310);
const proxyFromEnv = __webpack_require__(/*! proxy-from-env */ 64595);
const http = __webpack_require__(/*! http */ 13685);
const https = __webpack_require__(/*! https */ 95687);
const util = __webpack_require__(/*! util */ 73837);
const followRedirects = __webpack_require__(/*! follow-redirects */ 45624);
const zlib = __webpack_require__(/*! zlib */ 59796);
const stream = __webpack_require__(/*! stream */ 12781);
const events = __webpack_require__(/*! events */ 82361);
function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}
const FormData__default = /*#__PURE__*/_interopDefaultLegacy(FormData$1);
const url__default = /*#__PURE__*/_interopDefaultLegacy(url);
const http__default = /*#__PURE__*/_interopDefaultLegacy(http);
const https__default = /*#__PURE__*/_interopDefaultLegacy(https);
const util__default = /*#__PURE__*/_interopDefaultLegacy(util);
const followRedirects__default = /*#__PURE__*/_interopDefaultLegacy(followRedirects);
const zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
const stream__default = /*#__PURE__*/_interopDefaultLegacy(stream);
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;
const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};
const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {
  isArray
} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = thing => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = val => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = val => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = thing => {
  let kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = context => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  const {
    caseless
  } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = content => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
const toJSONObject = obj => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData__default["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
const InterceptorManager$1 = InterceptorManager;
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams = url__default["default"].URLSearchParams;
const platform$1 = {
  isNode: true,
  classes: {
    URLSearchParams,
    FormData: FormData__default["default"],
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  protocols: ['http', 'https', 'file', 'data']
};
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (product => {
  return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0;
})(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv
});
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function (value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = utils$1.isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
  defaults.headers[method] = {};
});
const defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
const parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = utils$1.findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({
  value
}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const VERSION = "1.6.8";
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}
const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform.classes.Blob;
  const protocol = parseProtocol(uri);
  if (asBlob === undefined && _Blob) {
    asBlob = true;
  }
  if (protocol === 'data') {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    const match = DATA_URL_PATTERN.exec(uri);
    if (!match) {
      throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
    }
    const mime = match[1];
    const isBase64 = match[2];
    const body = match[3];
    const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');
    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
      }
      return new _Blob([buffer], {
        type: mime
      });
    }
    return buffer;
  }
  throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  const threshold = 1000 / freq;
  let timer = null;
  return function throttled(force, args) {
    const now = Date.now();
    if (force || now - timestamp > threshold) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timestamp = now;
      return fn.apply(null, args);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        timestamp = Date.now();
        return fn.apply(null, args);
      }, threshold - (now - timestamp));
    }
  };
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
const kInternals = Symbol('internals');
class AxiosTransformStream extends stream__default["default"].Transform {
  constructor(options) {
    options = utils$1.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils$1.isUndefined(source[prop]);
    });
    super({
      readableHighWaterMark: options.chunkSize
    });
    const self = this;
    const internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    const _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on('newListener', event => {
      if (event === 'progress') {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle(function throttledHandler() {
      const totalBytes = internals.length;
      const bytesTransferred = internals.bytesSeen;
      const progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self.destroyed) return;
      const rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred;
      process.nextTick(() => {
        self.emit('progress', {
          'loaded': bytesTransferred,
          'total': totalBytes,
          'progress': totalBytes ? bytesTransferred / totalBytes : undefined,
          'bytes': progressBytes,
          'rate': rate ? rate : undefined,
          'estimated': rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : undefined
        });
      });
    }, internals.ticksRate);
    const onFinish = () => {
      internals.updateProgress(true);
    };
    this.once('end', onFinish);
    this.once('error', onFinish);
  }
  _read(size) {
    const internals = this[kInternals];
    if (internals.onReadCallback) {
      internals.onReadCallback();
    }
    return super._read(size);
  }
  _transform(chunk, encoding, callback) {
    const self = this;
    const internals = this[kInternals];
    const maxRate = internals.maxRate;
    const readableHighWaterMark = this.readableHighWaterMark;
    const timeWindow = internals.timeWindow;
    const divider = 1000 / timeWindow;
    const bytesThreshold = maxRate / divider;
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;
      if (internals.isCaptured) {
        internals.updateProgress();
      }
      if (self.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    }
    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;
      if (maxRate) {
        const now = Date.now();
        if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }
        bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0) {
          // next time window
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }
        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }
      if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }
      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }
      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }
  setLength(length) {
    this[kInternals].length = +length;
    return this;
  }
}
const AxiosTransformStream$1 = AxiosTransformStream;
const {
  asyncIterator
} = Symbol;
const readBlob = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator(function* (blob) {
    if (blob.stream) {
      yield* _asyncGeneratorDelegate(_asyncIterator(blob.stream()), _awaitAsyncGenerator);
    } else if (blob.arrayBuffer) {
      yield yield _awaitAsyncGenerator(blob.arrayBuffer());
    } else if (blob[asyncIterator]) {
      yield* _asyncGeneratorDelegate(_asyncIterator(blob[asyncIterator]()), _awaitAsyncGenerator);
    } else {
      yield blob;
    }
  });
  return function readBlob(_x) {
    return _ref.apply(this, arguments);
  };
}();
const readBlob$1 = readBlob;
const BOUNDARY_ALPHABET = utils$1.ALPHABET.ALPHA_DIGIT + '-_';
const textEncoder = new util.TextEncoder();
const CRLF = '\r\n';
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;
class FormDataPart {
  constructor(name, value) {
    const {
      escapeName
    } = this.constructor;
    const isStringValue = utils$1.isString(value);
    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''}${CRLF}`;
    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
    }
    this.headers = textEncoder.encode(headers + CRLF);
    this.contentLength = isStringValue ? value.byteLength : value.size;
    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
    this.name = name;
    this.value = value;
  }
  encode() {
    var _this = this;
    return _wrapAsyncGenerator(function* () {
      yield _this.headers;
      const {
        value
      } = _this;
      if (utils$1.isTypedArray(value)) {
        yield value;
      } else {
        yield* _asyncGeneratorDelegate(_asyncIterator(readBlob$1(value)), _awaitAsyncGenerator);
      }
      yield CRLF_BYTES;
    })();
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, match => ({
      '\r': '%0D',
      '\n': '%0A',
      '"': '%22'
    })[match]);
  }
}
const formDataToStream = (form, headersHandler, options) => {
  const {
    tag = 'form-data-boundary',
    size = 25,
    boundary = tag + '-' + utils$1.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils$1.isFormData(form)) {
    throw TypeError('FormData instance required');
  }
  if (boundary.length < 1 || boundary.length > 70) {
    throw Error('boundary must be 10-70 characters long');
  }
  const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
  const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF + CRLF);
  let contentLength = footerBytes.byteLength;
  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });
  contentLength += boundaryBytes.byteLength * parts.length;
  contentLength = utils$1.toFiniteNumber(contentLength);
  const computedHeaders = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  };
  if (Number.isFinite(contentLength)) {
    computedHeaders['Content-Length'] = contentLength;
  }
  headersHandler && headersHandler(computedHeaders);
  return stream.Readable.from(_wrapAsyncGenerator(function* () {
    for (const part of parts) {
      yield boundaryBytes;
      yield* _asyncGeneratorDelegate(_asyncIterator(part.encode()), _awaitAsyncGenerator);
    }
    yield footerBytes;
  })());
};
const formDataToStream$1 = formDataToStream;
class ZlibHeaderTransformStream extends stream__default["default"].Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;

      // Add Default Compression headers if no zlib headers are present
      if (chunk[0] !== 120) {
        // Hex: 78
        const header = Buffer.alloc(2);
        header[0] = 120; // Hex: 78
        header[1] = 156; // Hex: 9C 
        this.push(header, encoding);
      }
    }
    this.__transform(chunk, encoding, callback);
  }
}
const ZlibHeaderTransformStream$1 = ZlibHeaderTransformStream;
const callbackify = (fn, reducer) => {
  return utils$1.isAsyncFn(fn) ? function (...args) {
    const cb = args.pop();
    fn.apply(this, args).then(value => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};
const callbackify$1 = callbackify;
const zlibOptions = {
  flush: zlib__default["default"].constants.Z_SYNC_FLUSH,
  finishFlush: zlib__default["default"].constants.Z_SYNC_FLUSH
};
const brotliOptions = {
  flush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH,
  finishFlush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH
};
const isBrotliSupported = utils$1.isFunction(zlib__default["default"].createBrotliDecompress);
const {
  http: httpFollow,
  https: httpsFollow
} = followRedirects__default["default"];
const isHttps = /https:?/;
const supportedProtocols = platform.protocols.map(protocol => {
  return protocol + ':';
});

/**
 * If the proxy or config beforeRedirects functions are defined, call them with the options
 * object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */
function dispatchBeforeRedirect(options, responseDetails) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options, responseDetails);
  }
}

/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = proxyFromEnv.getProxyForUrl(location);
    if (proxyUrl) {
      proxy = new URL(proxyUrl);
    }
  }
  if (proxy) {
    // Basic proxy authorization
    if (proxy.username) {
      proxy.auth = (proxy.username || '') + ':' + (proxy.password || '');
    }
    if (proxy.auth) {
      // Support proxy auth object form
      if (proxy.auth.username || proxy.auth.password) {
        proxy.auth = (proxy.auth.username || '') + ':' + (proxy.auth.password || '');
      }
      const base64 = Buffer.from(proxy.auth, 'utf8').toString('base64');
      options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }
    options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
    const proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost;
    // Replace 'host' since options is not a URL object
    options.host = proxyHost;
    options.port = proxy.port;
    options.path = location;
    if (proxy.protocol) {
      options.protocol = proxy.protocol.includes(':') ? proxy.protocol : `${proxy.protocol}:`;
    }
  }
  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    // Configure proxy for redirected request, passing the original config proxy to apply
    // the exact same logic as if the redirected request was performed by axios directly.
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
const isHttpAdapterSupported = typeof process !== 'undefined' && utils$1.kindOf(process) === 'process';

// temporary hotfix

const wrapAsync = asyncExecutor => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;
    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };
    const _resolve = value => {
      done(value);
      resolve(value);
    };
    const _reject = reason => {
      done(reason, true);
      reject(reason);
    };
    asyncExecutor(_resolve, _reject, onDoneHandler => onDone = onDoneHandler).catch(_reject);
  });
};
const resolveFamily = ({
  address,
  family
}) => {
  if (!utils$1.isString(address)) {
    throw TypeError('address must be a string');
  }
  return {
    address,
    family: family || (address.indexOf('.') < 0 ? 6 : 4)
  };
};
const buildAddressEntry = (address, family) => resolveFamily(utils$1.isObject(address) ? address : {
  address,
  family
});

/*eslint consistent-return:0*/
const httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync( /*#__PURE__*/function () {
    var _dispatchHttpRequest = _asyncToGenerator(function* (resolve, reject, onDone) {
      let {
        data,
        lookup,
        family
      } = config;
      const {
        responseType,
        responseEncoding
      } = config;
      const method = config.method.toUpperCase();
      let isDone;
      let rejected = false;
      let req;
      if (lookup) {
        const _lookup = callbackify$1(lookup, value => utils$1.isArray(value) ? value : [value]);
        // hotfix to support opt.all option which is required for node 20.x
        lookup = (hostname, opt, cb) => {
          _lookup(hostname, opt, (err, arg0, arg1) => {
            if (err) {
              return cb(err);
            }
            const addresses = utils$1.isArray(arg0) ? arg0.map(addr => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
            opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
          });
        };
      }

      // temporary internal emitter until the AxiosRequest class will be implemented
      const emitter = new events.EventEmitter();
      const onFinished = () => {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(abort);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', abort);
        }
        emitter.removeAllListeners();
      };
      onDone((value, isRejected) => {
        isDone = true;
        if (isRejected) {
          rejected = true;
          onFinished();
        }
      });
      function abort(reason) {
        emitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
      }
      emitter.once('abort', reject);
      if (config.cancelToken || config.signal) {
        config.cancelToken && config.cancelToken.subscribe(abort);
        if (config.signal) {
          config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
        }
      }

      // Parse url
      const fullPath = buildFullPath(config.baseURL, config.url);
      const parsed = new URL(fullPath, 'http://localhost');
      const protocol = parsed.protocol || supportedProtocols[0];
      if (protocol === 'data:') {
        let convertedData;
        if (method !== 'GET') {
          return settle(resolve, reject, {
            status: 405,
            statusText: 'method not allowed',
            headers: {},
            config
          });
        }
        try {
          convertedData = fromDataURI(config.url, responseType === 'blob', {
            Blob: config.env && config.env.Blob
          });
        } catch (err) {
          throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
        }
        if (responseType === 'text') {
          convertedData = convertedData.toString(responseEncoding);
          if (!responseEncoding || responseEncoding === 'utf8') {
            convertedData = utils$1.stripBOM(convertedData);
          }
        } else if (responseType === 'stream') {
          convertedData = stream__default["default"].Readable.from(convertedData);
        }
        return settle(resolve, reject, {
          data: convertedData,
          status: 200,
          statusText: 'OK',
          headers: new AxiosHeaders$1(),
          config
        });
      }
      if (supportedProtocols.indexOf(protocol) === -1) {
        return reject(new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_BAD_REQUEST, config));
      }
      const headers = AxiosHeaders$1.from(config.headers).normalize();

      // Set User-Agent (required by some servers)
      // See https://github.com/axios/axios/issues/69
      // User-Agent is specified; handle case where no UA header is desired
      // Only set header if it hasn't been set in config
      headers.set('User-Agent', 'axios/' + VERSION, false);
      const onDownloadProgress = config.onDownloadProgress;
      const onUploadProgress = config.onUploadProgress;
      const maxRate = config.maxRate;
      let maxUploadRate = undefined;
      let maxDownloadRate = undefined;

      // support for spec compliant FormData objects
      if (utils$1.isSpecCompliantForm(data)) {
        const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
        data = formDataToStream$1(data, formHeaders => {
          headers.set(formHeaders);
        }, {
          tag: `axios-${VERSION}-boundary`,
          boundary: userBoundary && userBoundary[1] || undefined
        });
        // support for https://www.npmjs.com/package/form-data api
      } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders)) {
        headers.set(data.getHeaders());
        if (!headers.hasContentLength()) {
          try {
            const knownLength = yield util__default["default"].promisify(data.getLength).call(data);
            Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
            /*eslint no-empty:0*/
          } catch (e) {}
        }
      } else if (utils$1.isBlob(data)) {
        data.size && headers.setContentType(data.type || 'application/octet-stream');
        headers.setContentLength(data.size || 0);
        data = stream__default["default"].Readable.from(readBlob$1(data));
      } else if (data && !utils$1.isStream(data)) {
        if (Buffer.isBuffer(data)) ;else if (utils$1.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils$1.isString(data)) {
          data = Buffer.from(data, 'utf-8');
        } else {
          return reject(new AxiosError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', AxiosError.ERR_BAD_REQUEST, config));
        }

        // Add Content-Length header if data exists
        headers.setContentLength(data.length, false);
        if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
          return reject(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config));
        }
      }
      const contentLength = utils$1.toFiniteNumber(headers.getContentLength());
      if (utils$1.isArray(maxRate)) {
        maxUploadRate = maxRate[0];
        maxDownloadRate = maxRate[1];
      } else {
        maxUploadRate = maxDownloadRate = maxRate;
      }
      if (data && (onUploadProgress || maxUploadRate)) {
        if (!utils$1.isStream(data)) {
          data = stream__default["default"].Readable.from(data, {
            objectMode: false
          });
        }
        data = stream__default["default"].pipeline([data, new AxiosTransformStream$1({
          length: contentLength,
          maxRate: utils$1.toFiniteNumber(maxUploadRate)
        })], utils$1.noop);
        onUploadProgress && data.on('progress', progress => {
          onUploadProgress(Object.assign(progress, {
            upload: true
          }));
        });
      }

      // HTTP basic authentication
      let auth = undefined;
      if (config.auth) {
        const username = config.auth.username || '';
        const password = config.auth.password || '';
        auth = username + ':' + password;
      }
      if (!auth && parsed.username) {
        const urlUsername = parsed.username;
        const urlPassword = parsed.password;
        auth = urlUsername + ':' + urlPassword;
      }
      auth && headers.delete('authorization');
      let path;
      try {
        path = buildURL(parsed.pathname + parsed.search, config.params, config.paramsSerializer).replace(/^\?/, '');
      } catch (err) {
        const customErr = new Error(err.message);
        customErr.config = config;
        customErr.url = config.url;
        customErr.exists = true;
        return reject(customErr);
      }
      headers.set('Accept-Encoding', 'gzip, compress, deflate' + (isBrotliSupported ? ', br' : ''), false);
      const options = {
        path,
        method: method,
        headers: headers.toJSON(),
        agents: {
          http: config.httpAgent,
          https: config.httpsAgent
        },
        auth,
        protocol,
        family,
        beforeRedirect: dispatchBeforeRedirect,
        beforeRedirects: {}
      };

      // cacheable-lookup integration hotfix
      !utils$1.isUndefined(lookup) && (options.lookup = lookup);
      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname;
        options.port = parsed.port;
        setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
      }
      let transport;
      const isHttpsRequest = isHttps.test(options.protocol);
      options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsRequest ? https__default["default"] : http__default["default"];
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        if (config.beforeRedirect) {
          options.beforeRedirects.config = config.beforeRedirect;
        }
        transport = isHttpsRequest ? httpsFollow : httpFollow;
      }
      if (config.maxBodyLength > -1) {
        options.maxBodyLength = config.maxBodyLength;
      } else {
        // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
        options.maxBodyLength = Infinity;
      }
      if (config.insecureHTTPParser) {
        options.insecureHTTPParser = config.insecureHTTPParser;
      }

      // Create the request
      req = transport.request(options, function handleResponse(res) {
        if (req.destroyed) return;
        const streams = [res];
        const responseLength = +res.headers['content-length'];
        if (onDownloadProgress) {
          const transformStream = new AxiosTransformStream$1({
            length: utils$1.toFiniteNumber(responseLength),
            maxRate: utils$1.toFiniteNumber(maxDownloadRate)
          });
          onDownloadProgress && transformStream.on('progress', progress => {
            onDownloadProgress(Object.assign(progress, {
              download: true
            }));
          });
          streams.push(transformStream);
        }

        // decompress the response body transparently if required
        let responseStream = res;

        // return the last request in case of redirects
        const lastRequest = res.req || req;

        // if decompress disabled we should not decompress
        if (config.decompress !== false && res.headers['content-encoding']) {
          // if no content, but headers still say that it is encoded,
          // remove the header not confuse downstream operations
          if (method === 'HEAD' || res.statusCode === 204) {
            delete res.headers['content-encoding'];
          }
          switch ((res.headers['content-encoding'] || '').toLowerCase()) {
            /*eslint default-case:0*/
            case 'gzip':
            case 'x-gzip':
            case 'compress':
            case 'x-compress':
              // add the unzipper to the body stream processing pipeline
              streams.push(zlib__default["default"].createUnzip(zlibOptions));

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            case 'deflate':
              streams.push(new ZlibHeaderTransformStream$1());

              // add the unzipper to the body stream processing pipeline
              streams.push(zlib__default["default"].createUnzip(zlibOptions));

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            case 'br':
              if (isBrotliSupported) {
                streams.push(zlib__default["default"].createBrotliDecompress(brotliOptions));
                delete res.headers['content-encoding'];
              }
          }
        }
        responseStream = streams.length > 1 ? stream__default["default"].pipeline(streams, utils$1.noop) : streams[0];
        const offListeners = stream__default["default"].finished(responseStream, () => {
          offListeners();
          onFinished();
        });
        const response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: new AxiosHeaders$1(res.headers),
          config,
          request: lastRequest
        };
        if (responseType === 'stream') {
          response.data = responseStream;
          settle(resolve, reject, response);
        } else {
          const responseBuffer = [];
          let totalResponseBytes = 0;
          responseStream.on('data', function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            totalResponseBytes += chunk.length;

            // make sure the content length is not over the maxContentLength if specified
            if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
              // stream.destroy() emit aborted event before calling reject() on Node.js v16
              rejected = true;
              responseStream.destroy();
              reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
            }
          });
          responseStream.on('aborted', function handlerStreamAborted() {
            if (rejected) {
              return;
            }
            const err = new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
            responseStream.destroy(err);
            reject(err);
          });
          responseStream.on('error', function handleStreamError(err) {
            if (req.destroyed) return;
            reject(AxiosError.from(err, null, config, lastRequest));
          });
          responseStream.on('end', function handleStreamEnd() {
            try {
              let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
              if (responseType !== 'arraybuffer') {
                responseData = responseData.toString(responseEncoding);
                if (!responseEncoding || responseEncoding === 'utf8') {
                  responseData = utils$1.stripBOM(responseData);
                }
              }
              response.data = responseData;
            } catch (err) {
              return reject(AxiosError.from(err, null, config, response.request, response));
            }
            settle(resolve, reject, response);
          });
        }
        emitter.once('abort', err => {
          if (!responseStream.destroyed) {
            responseStream.emit('error', err);
            responseStream.destroy();
          }
        });
      });
      emitter.once('abort', err => {
        reject(err);
        req.destroy(err);
      });

      // Handle errors
      req.on('error', function handleRequestError(err) {
        // @todo remove
        // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
        reject(AxiosError.from(err, null, config, req));
      });

      // set tcp keep alive to prevent drop connection by peer
      req.on('socket', function handleRequestSocket(socket) {
        // default interval of sending ack packet is 1 minute
        socket.setKeepAlive(true, 1000 * 60);
      });

      // Handle request timeout
      if (config.timeout) {
        // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
        const timeout = parseInt(config.timeout, 10);
        if (Number.isNaN(timeout)) {
          reject(new AxiosError('error trying to parse `config.timeout` to int', AxiosError.ERR_BAD_OPTION_VALUE, config, req));
          return;
        }

        // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
        // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
        // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
        // And then these socket which be hang up will devouring CPU little by little.
        // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
        req.setTimeout(timeout, function handleRequestTimeout() {
          if (isDone) return;
          let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
          const transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req));
          abort();
        });
      }

      // Send the request
      if (utils$1.isStream(data)) {
        let ended = false;
        let errored = false;
        data.on('end', () => {
          ended = true;
        });
        data.once('error', err => {
          errored = true;
          req.destroy(err);
        });
        data.on('close', () => {
          if (!ended && !errored) {
            abort(new CanceledError('Request stream has been aborted', config, req));
          }
        });
        data.pipe(req);
      } else {
        req.end(data);
      }
    });
    function dispatchHttpRequest(_x2, _x3, _x4) {
      return _dispatchHttpRequest.apply(this, arguments);
    }
    return dispatchHttpRequest;
  }());
};
const cookies = platform.hasStandardBrowserEnv ?
// Standard browser envs support document.cookie
{
  write(name, value, expires, path, domain, secure) {
    const cookie = [name + '=' + encodeURIComponent(value)];
    utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
    utils$1.isString(path) && cookie.push('path=' + path);
    utils$1.isString(domain) && cookie.push('domain=' + domain);
    secure === true && cookie.push('secure');
    document.cookie = cookie.join('; ');
  },
  read(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  },
  remove(name) {
    this.write(name, '', Date.now() - 86400000);
  }
} :
// Non-standard browser env (web workers, react-native) lack needed support.
{
  write() {},
  read() {
    return null;
  },
  remove() {}
};
const isURLSameOrigin = platform.hasStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement('a');
  let originURL;

  /**
  * Parse a URL to discover its components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    let href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
const xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    let {
      responseType,
      withXSRFToken
    } = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    let contentType;
    if (utils$1.isFormData(requestData)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }
    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(fullPath)) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value
    });
  }
});
const renderReason = reason => `- ${reason}`;
const isResolvedHandle = adapter => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: adapters => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];
    const {
      length
    } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
      let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
      throw new AxiosError(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(config, config.transformResponse, response);
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const headersToObject = thing => thing instanceof AxiosHeaders$1 ? {
  ...thing
} : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({
        caseless
      }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      try {
        return yield _this2._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy;
          Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();

          // slice off the Error: ... line
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        }
        throw err;
      }
    })();
  }
  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
    headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
      delete headers[method];
    });
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
const Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
const CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  utils$1.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
module.exports = axios;
//# sourceMappingURL=axios.cjs.map

/***/ }),

/***/ 54642:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ 83801);
function AsyncGenerator(gen) {
  var front, back;
  function resume(key, arg) {
    try {
      var result = gen[key](arg),
        value = result.value,
        overloaded = value instanceof OverloadYield;
      Promise.resolve(overloaded ? value.v : value).then(function (arg) {
        if (overloaded) {
          var nextKey = "return" === key ? "return" : "next";
          if (!value.k || arg.done) return resume(nextKey, arg);
          arg = gen[nextKey](arg).value;
        }
        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }
  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: !0
        });
        break;
      case "throw":
        front.reject(value);
        break;
      default:
        front.resolve({
          value: value,
          done: !1
        });
    }
    (front = front.next) ? resume(front.key, front.arg) : back = null;
  }
  this._invoke = function (key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };
      back ? back = back.next = request : (front = back = request, resume(key, arg));
    });
  }, "function" != typeof gen["return"] && (this["return"] = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
}, AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
}, AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};
module.exports = AsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 83801:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
/***/ ((module) => {

function _OverloadYield(value, kind) {
  this.v = value, this.k = kind;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 28131:
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncGeneratorDelegate.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ 83801);
function _asyncGeneratorDelegate(inner) {
  var iter = {},
    waiting = !1;
  function pump(key, value) {
    return waiting = !0, value = new Promise(function (resolve) {
      resolve(inner[key](value));
    }), {
      done: !1,
      value: new OverloadYield(value, 1)
    };
  }
  return iter["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
    return this;
  }, iter.next = function (value) {
    return waiting ? (waiting = !1, value) : pump("next", value);
  }, "function" == typeof inner["throw"] && (iter["throw"] = function (value) {
    if (waiting) throw waiting = !1, value;
    return pump("throw", value);
  }), "function" == typeof inner["return"] && (iter["return"] = function (value) {
    return waiting ? (waiting = !1, value) : pump("return", value);
  }), iter;
}
module.exports = _asyncGeneratorDelegate, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18237:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \**************************************************************/
/***/ ((module) => {

function _asyncIterator(iterable) {
  var method,
    async,
    sync,
    retry = 2;
  for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) {
    if (async && null != (method = iterable[async])) return method.call(iterable);
    if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
    async = "@@asyncIterator", sync = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var done = r.done;
    return Promise.resolve(r.value).then(function (value) {
      return {
        value: value,
        done: done
      };
    });
  }
  return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) {
    this.s = s, this.n = s.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function next() {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    "return": function _return(value) {
      var ret = this.s["return"];
      return void 0 === ret ? Promise.resolve({
        value: value,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
    },
    "throw": function _throw(value) {
      var thr = this.s["return"];
      return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(s);
}
module.exports = _asyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16737:
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ 83801);
function _awaitAsyncGenerator(value) {
  return new OverloadYield(value, 0);
}
module.exports = _awaitAsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18186:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var AsyncGenerator = __webpack_require__(/*! ./AsyncGenerator.js */ 54642);
function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}
module.exports = _wrapAsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;