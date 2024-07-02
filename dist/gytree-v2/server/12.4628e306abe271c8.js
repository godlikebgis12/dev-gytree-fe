exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 83720:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/price-box/price-box.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceBoxComponent: () => (/* binding */ PriceBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_modules_shared_services_navigation_service_list_navigate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation-service-list/navigate.service */ 97853);
/* harmony import */ var src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 14565);






function PriceBoxComponent_div_0_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function PriceBoxComponent_div_0_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 25)(3, "g", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 27)(5, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function PriceBoxComponent_div_0_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PriceBoxComponent_div_0_ng_container_10_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 - 0.5 <= (ctx_r5.doctorsDetailsData == null ? null : ctx_r5.doctorsDetailsData.dr_rating));
  }
}
function PriceBoxComponent_div_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PriceBoxComponent_div_0_ng_container_10_ng_container_1_Template, 2, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PriceBoxComponent_div_0_ng_container_10_ng_container_2_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 <= (ctx_r2.doctorsDetailsData == null ? null : ctx_r2.doctorsDetailsData.dr_rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 > (ctx_r2.doctorsDetailsData == null ? null : ctx_r2.doctorsDetailsData.dr_rating));
  }
}
function PriceBoxComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 4)(3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PriceBoxComponent_div_0_ng_container_10_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Per Consult");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20)(28, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PriceBoxComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.redirectToConsult(ctx_r8.doctorsDetailsData == null ? null : ctx_r8.doctorsDetailsData.dr_prof_details == null ? null : ctx_r8.doctorsDetailsData.dr_prof_details.dr_dgn == null ? null : ctx_r8.doctorsDetailsData.dr_prof_details.dr_dgn.dgn_name, ctx_r8.doctorsDetailsData == null ? null : ctx_r8.doctorsDetailsData.dr_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Book Consultation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details.dr_dgn == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details.dr_dgn.dgn_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.feedBackStar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_experience, " Experience ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details.dr_cnsltn_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details.dr_std_price, " ");
  }
}
function PriceBoxComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u20B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Per Consult ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 35)(11, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PriceBoxComponent_div_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.redirectToConsult(ctx_r10.doctorsDetailsData == null ? null : ctx_r10.doctorsDetailsData.dr_prof_details == null ? null : ctx_r10.doctorsDetailsData.dr_prof_details.dr_dgn == null ? null : ctx_r10.doctorsDetailsData.dr_prof_details.dr_dgn.dgn_name, ctx_r10.doctorsDetailsData == null ? null : ctx_r10.doctorsDetailsData.dr_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Book Consultation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.doctorsDetailsData == null ? null : ctx_r1.doctorsDetailsData.dr_prof_details == null ? null : ctx_r1.doctorsDetailsData.dr_prof_details.dr_cnsltn_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9", ctx_r1.doctorsDetailsData == null ? null : ctx_r1.doctorsDetailsData.dr_prof_details == null ? null : ctx_r1.doctorsDetailsData.dr_prof_details.dr_std_price, " ");
  }
}
let PriceBoxComponent = /*#__PURE__*/(() => {
  var _class;
  class PriceBoxComponent {
    constructor(navigateService, doctorsListService, cdr, activatedRoute, eventTrackingService) {
      this.navigateService = navigateService;
      this.doctorsListService = doctorsListService;
      this.cdr = cdr;
      this.activatedRoute = activatedRoute;
      this.eventTrackingService = eventTrackingService;
      this.scrolled = false;
      /**
       * rating data
       */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
    // Box visible
    onScroll() {
      this.manageExpertBox();
    }
    manageExpertBox() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrolled = window.scrollY >= 550;
      if (window.scrollY >= scrollableHeight) this.scrolled = false;
    }
    redirectToConsult(type, slug) {
      localStorage.setItem('doctorType', JSON.stringify(type));
      localStorage.setItem('service', JSON.stringify(false));
      let data = JSON.parse(localStorage.getItem('doctorData'));
      if (data?.gtd_is_questions) {
        this.navigateService.navigation(['payment/select-issues', slug], {
          // queryParams: { type: type },
        });
      } else if (!data?.gtd_is_questions) {
        this.navigateService.navigation(['payment/select-dates', slug], {
          // queryParams: { type: type },
        });
        const value = {
          Name: data?.gtd_fullname,
          cost: data?.gtd_consultation_price,
          'Sub Category': type
        };
        this.eventTrackingService.trackWebEnagegeEvent('Expert Book consultation Clicked', value);
        this.eventTrackingService.trackEvent('Expert Book consultation Clicked', value);
      }
      const eventVal = {
        'Expert Name': this.doctorsDetailsData?.gtd_fullname,
        Amount: this.doctorsDetailsData?.gtd_consultation_price,
        Category: type
      };
      this.eventTrackingService.trackWebEnagegeEvent('Book now - Expert', eventVal);
    }
  }
  _class = PriceBoxComponent;
  _class.ɵfac = function PriceBoxComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service_list_navigate_service__WEBPACK_IMPORTED_MODULE_0__.NavigateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_1__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_2__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-price-box"]],
    hostBindings: function PriceBoxComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function PriceBoxComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 2,
    vars: 2,
    consts: [["class", "fixed hidden lg:block transition-opacity z-30 px-2 py-8 ml-8 bg-white shadow-[0px_30px_75px_0px_rgba(5,22,39,0.10)] bottom-1/2 translate-y-1/2 right-10 w-96 rounded-3xl", 4, "ngIf"], ["class", "fixed bottom-0 z-30 flex w-full gap-5 px-4 py-5 bg-white shadow-sm lg:hidden", 4, "ngIf"], [1, "fixed", "hidden", "lg:block", "transition-opacity", "z-30", "px-2", "py-8", "ml-8", "bg-white", "shadow-[0px_30px_75px_0px_rgba(5,22,39,0.10)]", "bottom-1/2", "translate-y-1/2", "right-10", "w-96", "rounded-3xl"], [1, "relative", "w-20", "h-20", "mx-auto"], [1, "border", "border-1", "border-theme-brown", "rounded-full", "absolute", "-top-1", "w-full", "h-full", "-right-1", "z-[1]"], ["alt", "", 1, "h-full", "relative", "z-[2]", "w-full", "rounded-full", "bg-theme-lightest-green", "object-cover", 3, "src"], [1, "text-theme-brown", "text-center", "text-[23px]", "pt-3", "pb-3", "font-lora", "font-bold"], [1, "text-center", "join-button"], [1, "outline-none", "text-center", "border", "border-1", "px-3", "border-theme-skin", "rounded-full", "font-normal", "text-[16px]", "hover:bg-white", "hover:shadow-lg", "transition-all", "duration-300", "mb-5", "font-roboto"], [1, "flex", "items-center", "justify-center", "gap-2"], [4, "ngFor", "ngForOf"], [1, "sm:text-[25px]", "text-[21px]", "text-theme-brown", "font-bold", "font-lora"], [1, "text-[12px]"], [1, "sm:text-[21px]", "text-[18px]", "text-center", "font-roboto", "py-2"], [1, "flex", "justify-center", "gap-2", "py-3", "item-center"], [1, "inline-flex"], [1, "flex", "items-end", "text-theme-brown", "font-roboto", "text-bas", "leading-none", "pb-[1px]"], [1, "flex", "items-center", "text-theme-brown", "font-bold", "text-[23px]", "leading-none", "font-roboto"], [1, "flex", "items-center", "text-lg", "leading-none", "text-center", "line-through", "text-theme-light-grey", "font-roboto"], [1, "flex", "items-center", "sm:text-[21px]", "text-[15px]", "leading-none", "font-roboto"], [1, "flex", "justify-center", "pt-2"], [1, "relative", "flex", "gap-4", "px-8", "py-2", "text-xl", "text-center", "text-white", "transition-all", "duration-300", "border", "border-transparent", "rounded-full", "outline-none", "border-1", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", "font-roboto", 3, "click"], [4, "ngIf"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/expert-details/icons.svg", "alt", ""], [1, "block", "w-5", "h-5", "[&>svg]:h-full", "[&>svg]:w-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["clip-path", "url(#clip0_3650_1917)"], ["d", "M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z", 1, "fill-theme-yellow"], ["d", "M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                0V10.1538L11.3078 13.2918L9.65674 8.2149Z", 1, "fill-gray-500"], [1, "fixed", "bottom-0", "z-30", "flex", "w-full", "gap-5", "px-4", "py-5", "bg-white", "shadow-sm", "lg:hidden"], [1, "font-roboto"], [1, "text-theme-brown", "pt-2", "text-[15px]"], [1, "font-bold", "text-[22px]", "text-theme-brown"], [1, "pt-2", "mx-2", "line-through"], [1, "font-roboto", "px-3", "flex-wrap", "text-[15px]", "whitespace-nowrap"], [1, "w-full", "text-end"], [1, "justify-center", "px-4", "py-1.5", "text-lg", "text-white", "border", "border-transparent", "rounded-full", "group", "border-1", "font-roboto", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", 3, "click"]],
    template: function PriceBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PriceBoxComponent_div_0_Template, 30, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PriceBoxComponent_div_1_Template, 13, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrolled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrolled);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    encapsulation: 2
  });
  return PriceBoxComponent;
})();


/***/ }),

/***/ 11978:
/*!********************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/price-box/price-box.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceBoxModule: () => (/* binding */ PriceBoxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _price_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price-box.component */ 83720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);



// const routes: Routes = [
//   {
//     path: '',
//     component:PriceBoxComponent ,
//   },
// ]
let PriceBoxModule = /*#__PURE__*/(() => {
  var _class;
  class PriceBoxModule {}
  _class = PriceBoxModule;
  _class.ɵfac = function PriceBoxModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
  return PriceBoxModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PriceBoxModule, {
    declarations: [_price_box_component__WEBPACK_IMPORTED_MODULE_0__.PriceBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_price_box_component__WEBPACK_IMPORTED_MODULE_0__.PriceBoxComponent]
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

/***/ 17493:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-about/package-about.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageAboutComponent: () => (/* binding */ PackageAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/safe-pipe/safe.pipe */ 66654);




function PackageAboutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " About");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/about-top-bg.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_about), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
let PackageAboutComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageAboutComponent {}
  _class = PackageAboutComponent;
  _class.ɵfac = function PackageAboutComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-about"]],
    inputs: {
      packageData: "packageData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container relative mb-14", 4, "ngIf"], [1, "container", "relative", "mb-14"], [1, "absolute", "lg:-top-50", "right-20", "sm:right-auto", "sm:left-1/4", "md:-top-16", "sm:-top-7", "text-theme-lightest-green", "md:h-[100px]", "md:w-auto", "xl:w-[80px]", "xl:h-[120px]", "w-16", "h-16", "z-[1]", 3, "inlineSVG"], [1, "relative"], [1, "sm:text-center", "font-lora", "text-2xl", "sm:text-[30px]", "font-extrabold", "pb-4", "text-theme-dark-green", "sm:pb-8", "pt-10"], [1, "sm:text-center", "text-start", "text-base", "sm:text-lg", "md:text-[21px]", "sm:w-1/2", "font-roboto", "mx-auto", "ql-editor", 3, "innerHTML"]],
    template: function PackageAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PackageAboutComponent_div_0_Template, 7, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.packageData == null ? null : ctx.packageData.pkg_about);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective, _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe],
    encapsulation: 2
  });
  return PackageAboutComponent;
})();


/***/ }),

/***/ 66489:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-benifit/package-benifit.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageBenifitComponent: () => (/* binding */ PackageBenifitComponent)
/* harmony export */ });
/* harmony import */ var _package_benifit_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-benifit.constant */ 16293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);






function PackageBenifitComponent_div_0_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15)(2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const packageBenefitData_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", packageBenefitData_r6 == null ? null : packageBenefitData_r6.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", packageBenefitData_r6 == null ? null : packageBenefitData_r6.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", packageBenefitData_r6 == null ? null : packageBenefitData_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PackageBenifitComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PackageBenifitComponent_div_0_div_9_ng_container_1_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.packageData == null ? null : ctx_r1.packageData.first_gtp_benefits);
  }
}
function PackageBenifitComponent_div_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.packageData == null ? null : ctx_r2.packageData.middle_gtp_benefits == null ? null : ctx_r2.packageData.middle_gtp_benefits.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.packageData == null ? null : ctx_r2.packageData.middle_gtp_benefits == null ? null : ctx_r2.packageData.middle_gtp_benefits.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.packageData == null ? null : ctx_r2.packageData.middle_gtp_benefits == null ? null : ctx_r2.packageData.middle_gtp_benefits.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PackageBenifitComponent_div_0_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20)(2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const packageBenefitSecondData_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", packageBenefitSecondData_r8 == null ? null : packageBenefitSecondData_r8.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", packageBenefitSecondData_r8 == null ? null : packageBenefitSecondData_r8.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", packageBenefitSecondData_r8 == null ? null : packageBenefitSecondData_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PackageBenifitComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PackageBenifitComponent_div_0_div_11_ng_container_1_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.packageData == null ? null : ctx_r3.packageData.second_gtp_benefits);
  }
}
function PackageBenifitComponent_div_0_ng_container_15_splide_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "splide-slide", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const packageDataBenifits_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", packageDataBenifits_r10 == null ? null : packageDataBenifits_r10.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", packageDataBenifits_r10 == null ? null : packageDataBenifits_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PackageBenifitComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PackageBenifitComponent_div_0_ng_container_15_splide_slide_1_Template, 7, 2, "splide-slide", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.packageData == null ? null : ctx_r4.packageData.pkg_benefits == null ? null : ctx_r4.packageData.pkg_benefits.data);
  }
}
const _c0 = function (a0, a1) {
  return {
    "xl:w-[50%]": a0,
    "xl:w-[60%]": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "md:grid-cols-2": a0,
    "md:grid-cols-3": a1
  };
};
function PackageBenifitComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PackageBenifitComponent_div_0_div_9_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PackageBenifitComponent_div_0_ng_container_10_Template, 5, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PackageBenifitComponent_div_0_div_11_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "splide", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PackageBenifitComponent_div_0_ng_container_15_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_benefits == null ? null : ctx_r0.packageData.pkg_benefits.data == null ? null : ctx_r0.packageData.pkg_benefits.data.length) === 4, (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_benefits == null ? null : ctx_r0.packageData.pkg_benefits.data == null ? null : ctx_r0.packageData.pkg_benefits.data.length) === 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c1, (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_benefits == null ? null : ctx_r0.packageData.pkg_benefits.data == null ? null : ctx_r0.packageData.pkg_benefits.data.length) === 4, (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_benefits == null ? null : ctx_r0.packageData.pkg_benefits.data == null ? null : ctx_r0.packageData.pkg_benefits.data.length) === 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.packageData && (ctx_r0.packageData == null ? null : ctx_r0.packageData.first_gtp_benefits));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.packageData && (ctx_r0.packageData == null ? null : ctx_r0.packageData.middle_gtp_benefits));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.packageData && (ctx_r0.packageData == null ? null : ctx_r0.packageData.second_gtp_benefits));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.expertBenifitSliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.packageData && (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_benefits == null ? null : ctx_r0.packageData.pkg_benefits.data));
  }
}
let PackageBenifitComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageBenifitComponent {
    constructor() {
      this.expertBenifitSliderConfig = _package_benifit_constant__WEBPACK_IMPORTED_MODULE_0__.EXPERT_BENIFIT_SLIDER_CONFIG;
    }
    configureImageClass(arrowImage) {
      return arrowImage === 'up' ? 'border-t' : 'border-b mt-5';
    }
    configureSlidePosClass(arrowImage) {
      return arrowImage === 'up' ? 'flex-col-reverse pt-6' : 'flex-col pb-6';
    }
  }
  _class = PackageBenifitComponent;
  _class.ɵfac = function PackageBenifitComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-benifit"]],
    inputs: {
      packageData: "packageData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "mx-auto"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/image/flower-img.png", "alt", "", 1, "absolute"], [1, "md:text-center", "md:py-16", "relative", "font-bold", "lg:text-[30px]", "font-lora", "text-[25px]", "py-12", "text-theme-dark-green"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/benefits-top.svg", 1, "absolute", "text-[#93CFCF]", "w-12", "h-12", "md:h-20", "md:w-20", "md:top-0", "lg:top-3", "top-10", "lg:left-[32%]", "xl:left-[36%]", "md:left-[30%]", "left-[38%]"], [1, "hidden", "mx-auto", "lg:w-full", "md:block", 3, "ngClass"], [1, "grid", "gap-8", "pb-16", 3, "ngClass"], ["class", "flex flex-col gap-8", 4, "ngIf"], [4, "ngIf"], [1, "block", "sm:container", "md:hidden"], [1, "pb-12", "wrraper"], [1, "benefit-slider", 3, "options"], [1, "flex", "flex-col", "gap-8"], [4, "ngFor", "ngForOf"], [1, "inset-x-0", "bg-gradient-to-t", "from-theme-sky-blue", "object-fit", "pointer-events-none", "to-theme-base-blue", "md:rounded-[40px]", "rounded-2xl", "w-full", "flex-auto", "flex", "flex-col", "justify-between", "items-center", 3, "ngClass"], [1, "px-2", "pt-4", "text-xl", "xl:text-2xl", "font-bold", "text-center", "font-roboto"], ["alt", "", 1, "h-[100px]", "lg:h-[150px]", "mx-auto", "w-fit", "flex-shrink", "flex-grow-0", "object-contain", 3, "src"], [1, "inset-x-0", "object-contain", "bg-gradient-to-t", "from-theme-sky-blue", "pointer-events-none", "to-theme-base-blue", "rounded-[40px]", "flex-auto", "justify-center", "items-center", "flex", "flex-col", "overflow-hidden", 3, "ngClass"], ["alt", "", 1, "object-cover", "object-bottom", "h-[320px]", "xl:h-[410px]", "flex-grow-0", "lg:flex-grow", "lg:h-full", "mx-auto", "w-fit", "lg:flex-auto", 3, "src"], [1, "inset-x-0", "px-8", "object-contain", "bg-gradient-to-t", "from-theme-sky-blue", "pointer-events-none", "to-theme-base-blue", "md:rounded-[40px]", "rounded-2xl", "w-full", "flex-auto", "justify-between", "items-center", "flex", "flex-col", 3, "ngClass"], ["class", "grid grid-cols-1 p-10 md:grid-cols-4", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "p-10", "md:grid-cols-4"], [1, "slide-container", "inset-x-0", "bg-gradient-to-b", "from-theme-sky-blue", "pointer-events-none", "to-theme-base-blue", "font-bold", "rounded-[20px]", "w-auto", "flex", "justify-center", "transition-all", "px-5", "h-full", "overflow-hidden"], [1, "group", "flex", "flex-col", "rounded-[20px]", "md:px-6"], [1, "sm:h-[135px]", "py-5", "mx-auto", "sm:font-semibold", "font-bold", "text-center", "sm:text-2xl", "text-[14px]", "leading-tight"], [1, "flex-auto", "h-[120px]"], ["alt", "gallery", 1, "object-cover", "object-center", "w-auto", "h-full", "slide-img", 3, "src"]],
    template: function PackageBenifitComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PackageBenifitComponent_div_0_Template, 16, 13, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.packageData && (ctx.packageData == null ? null : ctx.packageData.first_gtp_benefits) && (ctx.packageData == null ? null : ctx.packageData.second_gtp_benefits));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_5__.NgxSplideSlideComponent, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__.LazyImgDirective],
    encapsulation: 2
  });
  return PackageBenifitComponent;
})();


/***/ }),

/***/ 16293:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-benifit/package-benifit.constant.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPERT_BENIFIT_SLIDER_CONFIG: () => (/* binding */ EXPERT_BENIFIT_SLIDER_CONFIG)
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
      gap: 30,
      perPage: 2,
      padding: 35,
      arrows: false
    },
    640: {
      gap: 30,
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

/***/ }),

/***/ 43931:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-checkout/package-checkout.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageCheckoutComponent: () => (/* binding */ PackageCheckoutComponent)
/* harmony export */ });
/* harmony import */ var D_Projects_gytree_gytree_v3_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/local-storage/local-storage.service */ 59849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var src_app_modules_shared_services_order_insertion_order_insertion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/order-insertion/order-insertion.service */ 24927);
/* harmony import */ var src_app_modules_shared_services_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/coupon/coupon.service */ 31166);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var src_app_modules_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/services/auth/auth.service */ 88477);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 27867);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var _package_payment_stepper_package_payment_stepper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../package-payment-stepper/package-payment-stepper.component */ 11957);
/* harmony import */ var _package_consent_model_package_consent_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../package-consent-model/package-consent-model.component */ 25924);

















function PackageCheckoutComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tags_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tags_r3, " ");
  }
}
function PackageCheckoutComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Program Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 9)(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 12)(9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, PackageCheckoutComponent_div_3_div_12_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 12)(14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " Schedule On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 17)(17, "div", 18)(18, "div", 19)(19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 25)(28, "div", 19)(29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 29)(37, "div", 19)(38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_image) || (ctx_r0.packageData == null ? null : ctx_r0.packageData.gto_pack_image), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_name) || (ctx_r0.packageData == null ? null : ctx_r0.packageData.gto_package_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", (ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_tags) || (ctx_r0.packageData == null ? null : ctx_r0.packageData.order_ref_tags));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](26, 6, ctx_r0.orderData == null ? null : ctx_r0.orderData.ordr_date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedSlots || (ctx_r0.orderData == null ? null : ctx_r0.orderData.ordr_slot_time), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (ctx_r0.packageData == null ? null : ctx_r0.packageData.gto_interval) || (ctx_r0.orderData == null ? null : ctx_r0.orderData.ordr_slot_duration), " mins ");
  }
}
function PackageCheckoutComponent_div_4_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PackageCheckoutComponent_div_4_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.validateCouponClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", !ctx_r4.coupon ? "opacity-60" : "");
  }
}
function PackageCheckoutComponent_div_4_button_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 69);
  }
}
function PackageCheckoutComponent_div_4_button_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 70);
  }
}
function PackageCheckoutComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PackageCheckoutComponent_div_4_button_8_div_1_Template, 1, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, PackageCheckoutComponent_div_4_button_8_div_2_Template, 1, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r5.couponSuccessMessage ? "bg-theme-olive-green" : "bg-theme-error-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.couponSuccessMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.couponErrorMessage);
  }
}
function PackageCheckoutComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 71)(1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r6.couponErrorMessage, " ");
  }
}
function PackageCheckoutComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 71)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r7.couponSuccessMessage, " ");
  }
}
function PackageCheckoutComponent_div_4_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PackageCheckoutComponent_div_4_div_11_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.redeem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", !ctx_r20.isRedeemed ? "text-theme-light-pink" : "text-theme-lighter-grey");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", !ctx_r20.isRedeemed ? "Redeem" : "Redeemed", " ");
  }
}
function PackageCheckoutComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 74)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PackageCheckoutComponent_div_4_div_11_div_3_Template, 2, 2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" You have ", ctx_r8.userData == null ? null : ctx_r8.userData.user_setting == null ? null : ctx_r8.userData.user_setting.user_reward_point, " Gytree-pts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r8.userData == null ? null : ctx_r8.userData.user_setting == null ? null : ctx_r8.userData.user_setting.user_reward_point) > 0);
  }
}
function PackageCheckoutComponent_div_4_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 51)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r9.discountAmount > 0 ? "border-b-2" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 2, ctx_r9.discountAmount, "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, (ctx_r10.packageData == null ? null : ctx_r10.packageData.pkg_sell_price) - ctx_r10.discountAmount || (ctx_r10.packageData == null ? null : ctx_r10.packageData.app_refrence_price) - ctx_r10.discountAmount, "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, (ctx_r11.packageData == null ? null : ctx_r11.packageData.pkg_sell_price) - ctx_r11.discountAmount || (ctx_r11.packageData == null ? null : ctx_r11.packageData.app_refrence_price) - ctx_r11.discountAmount, "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, (ctx_r12.packageData == null ? null : ctx_r12.packageData.pkg_sell_price) || (ctx_r12.packageData == null ? null : ctx_r12.packageData.app_refrence_price), "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, (ctx_r13.packageData == null ? null : ctx_r13.packageData.pkg_sell_price) - ctx_r13.discountAmount || (ctx_r13.packageData == null ? null : ctx_r13.packageData.app_refrence_price) - ctx_r13.discountAmount, "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, (ctx_r14.packageData == null ? null : ctx_r14.packageData.pkg_sell_price) - ctx_r14.discountAmount || (ctx_r14.packageData == null ? null : ctx_r14.packageData.app_refrence_price) - ctx_r14.discountAmount, "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, (ctx_r15.packageData == null ? null : ctx_r15.packageData.pkg_sell_price) || (ctx_r15.packageData == null ? null : ctx_r15.packageData.app_refrence_price), "INR"), " ");
  }
}
function PackageCheckoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Promo Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 37)(4, "div", 38)(5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function PackageCheckoutComponent_div_4_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r23.coupon = $event);
    })("keyup", function PackageCheckoutComponent_div_4_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.promoCodechange($event));
    })("keyup.enter", function PackageCheckoutComponent_div_4_Template_input_keyup_enter_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.validateCouponClick());
    })("change", function PackageCheckoutComponent_div_4_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.promoCodechange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, PackageCheckoutComponent_div_4_button_7_Template, 2, 1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, PackageCheckoutComponent_div_4_button_8_Template, 3, 3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, PackageCheckoutComponent_div_4_div_9_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, PackageCheckoutComponent_div_4_div_10_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, PackageCheckoutComponent_div_4_div_11_Template, 4, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Payment Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 45)(15, "div", 46)(16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, " Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, " Package ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 49)(21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, " GST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, " 18% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 51)(26, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, " Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, PackageCheckoutComponent_div_4_div_31_Template, 6, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 53)(33, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, PackageCheckoutComponent_div_4_div_35_Template, 3, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, PackageCheckoutComponent_div_4_div_36_Template, 3, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, PackageCheckoutComponent_div_4_div_37_Template, 3, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " Pay securely by Credit / Debit card,Internet Banking, and UPI through Razorpay. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 57)(41, "div", 58)(42, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, PackageCheckoutComponent_div_4_span_45_Template, 3, 4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, PackageCheckoutComponent_div_4_span_46_Template, 3, 4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, PackageCheckoutComponent_div_4_span_47_Template, 3, 4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 62)(49, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PackageCheckoutComponent_div_4_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.checkoutValidate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, " Pay Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, " Pay Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.coupon)("ngClass", ctx_r1.promocodeVal ? "text-transform: uppercase" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.couponSuccessMessage && !ctx_r1.couponErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.couponSuccessMessage || ctx_r1.couponErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.couponErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.couponSuccessMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r1.userData == null ? null : ctx_r1.userData.user_setting == null ? null : ctx_r1.userData.user_setting.user_reward_point) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r1.discountAmount == 0 ? "border-b-2" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](30, 20, (ctx_r1.packageData == null ? null : ctx_r1.packageData.pkg_sell_price) || (ctx_r1.packageData == null ? null : ctx_r1.packageData.app_refrence_price), "INR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.discountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isRedeemed && !ctx_r1.promocodeVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.promocodeVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.promocodeVal && !ctx_r1.isRedeemed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isRedeemed && !ctx_r1.promocodeVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.promocodeVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.promocodeVal && !ctx_r1.isRedeemed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", !ctx_r1.couponErrorMessage ? "" : "opacity-60")("disabled", ctx_r1.couponErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", !ctx_r1.couponErrorMessage ? "" : "opacity-60")("disabled", ctx_r1.couponErrorMessage);
  }
}
let PackageCheckoutComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageCheckoutComponent {
    constructor(localStorageService, activatedRoute, pageListService, orderInsertionService, couponService, cdr, GetData, location, authService, eventTrackingService, toast) {
      this.localStorageService = localStorageService;
      this.activatedRoute = activatedRoute;
      this.pageListService = pageListService;
      this.orderInsertionService = orderInsertionService;
      this.couponService = couponService;
      this.cdr = cdr;
      this.GetData = GetData;
      this.location = location;
      this.authService = authService;
      this.eventTrackingService = eventTrackingService;
      this.toast = toast;
      this.coupon = '';
      this.couponCode = null;
      this.payOrderId = null;
      this.subscriptions = [];
      this.discountAmount = 0;
      this.isRedeemed = false;
      this.TWElementsInit = () => {
        (0,D_Projects_gytree_gytree_v3_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const {
            initTE,
            Modal
          } = yield __webpack_require__.e(/*! import() */ 230).then(__webpack_require__.bind(__webpack_require__, /*! tw-elements */ 77230));
          initTE({
            Modal
          });
        })();
        return null;
      };
    }
    ngOnInit() {
      this.TWElementsInit();
      this.GetData.packageSlotData.subscribe(res => {
        this.selectedSlots = res?.slots;
        this.selectedDate = res?.date;
      });
      this.GetData.PackageDetails.subscribe(res => {
        this.packageData = res;
      });
      this.GetData.bookingSummrySelected.next({
        bookingSummrySelected: true
      });
      if (!this.packageData && !this.selectedSlots) {
        this.activatedRoute.parent.params.subscribe(params => {
          this.parentSlug = params['slug'];
          if (this.parentSlug) {
            this.getMembershipDataData(this.parentSlug);
          }
        });
        // this.GetData.paymentCompleted = true;
        // this.location.back();
      }

      this.getUserData();
      this.activatedRoute.paramMap.subscribe(params => {
        this.slug = params['params'].slug;
        if (this.slug) {
          this.getOrderData();
        }
      });
    }
    getMembershipDataData(slug) {
      this.pageListService.getMasterUserTypeBySlug('package', slug).subscribe(resp => {
        if (resp?.success) {
          this.packageData = resp?.data?.data;
          this.GetData.PackageDetails.next(resp?.data?.data);
        }
      });
    }
    /**
     * Method to validate the entered promocode
     */
    validateCouponClick() {
      if (!this.coupon.toUpperCase()) {
        return;
      }
      const payload = {
        type: 'package',
        cpn_code: this.coupon.toUpperCase(),
        id: this.activatedRoute.snapshot.paramMap.get('slug')
      };
      this.subscriptions.push(this.couponService.couponValidate(payload).subscribe(data => {
        if (data?.success) {
          this.couponCode = data?.data?.data?.coupon?.cpn_id;
          this.couponSuccessMessage = 'Promo Code applied';
          this.couponErrorMessage = '';
          this.isRedeemed = false;
          if (data?.data?.data?.coupon?.cpn_discount_type === 'percentage') {
            this.discountAmount = Number(this.packageData?.pkg_sell_price || this.packageData?.app_refrence_price) * data?.data?.data?.coupon?.cpn_discount_value / 100;
            this.discountAmount = Number(this.discountAmount.toFixed(2));
          } else {
            this.discountAmount = data?.data?.data?.coupon?.cpn_discount_value;
          }
        } else {
          this.couponErrorMessage = data?.data?.error?.message;
          this.isRedeemed = false;
          this.couponSuccessMessage = '';
          this.discountAmount = 0;
          this.redeemData = {
            redeemAmount: 0,
            isRedeem: this.isRedeemed
          };
        }
        const value = {
          coupon: this.coupon.toUpperCase(),
          status: data?.success ? 'Success' : 'Failed'
        };
        this.eventTrackingService.trackWebEnagegeEvent('apply coupon', value);
        this.eventTrackingService.trackEvent('apply coupon', value);
        this.cdr.detectChanges();
      }));
    }
    checkoutValidate() {
      let payload = {
        "ordr_id": this.slug,
        "ordr_redeem_point": !this.isRedeemed ? 0 : (this.discountAmount * 10)?.toFixed(2),
        "ordr_txn_amount": (this.packageData?.pkg_sell_price - this.discountAmount)?.toFixed(2),
        "ordr_cpn_id": !this.isRedeemed ? this.couponCode : undefined
      };
      this.orderInsertionService.onCheckOutValidation(payload).subscribe(resp => {
        if (resp?.success) {
          this.payOrderId = resp?.data?.data?.id;
          const button = document.querySelector('[data-te-target="#patientConsentForm"]');
          if (button) {
            button.click();
          }
        } else {
          this.toast.error(resp?.data?.error?.message, undefined, {
            positionClass: 'toast-bottom-center',
            closeButton: true,
            disableTimeOut: true,
            tapToDismiss: false
          });
        }
      });
    }
    /**
     * Method to get user data from
     */
    getUserData() {
      this.subscriptions.push(this.authService.getUser().subscribe(data => {
        if (data?.success) {
          this.userData = data?.data?.data;
        }
      }));
    }
    getOrderData() {
      this.subscriptions.push(this.pageListService.getOrderById(this.slug).subscribe(data => {
        if (data?.success) {
          this.orderData = data?.data?.data;
        }
      }));
    }
    redeem() {
      this.discountAmount = this.userData?.user_setting?.user_reward_point / 10;
      this.coupon = '';
      this.couponSuccessMessage = '';
      this.couponErrorMessage = '';
      this.isRedeemed = true;
      this.redeemData = {
        redeemAmount: this.userData?.user_setting?.user_reward_point,
        isRedeem: this.isRedeemed
      };
    }
    promoCodechange(event) {
      this.promocodeVal = event?.target?.value;
      this.discountAmount = 0;
      this.couponSuccessMessage = '';
      this.couponErrorMessage = '';
      this.couponCode = '';
    }
  }
  _class = PackageCheckoutComponent;
  _class.ɵfac = function PackageCheckoutComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_2__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_order_insertion_order_insertion_service__WEBPACK_IMPORTED_MODULE_3__.OrderInsertionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_4__.CouponService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_5__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_7__.EventTrackingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-checkout"]],
    decls: 6,
    vars: 8,
    consts: [[1, "container"], [1, "block", "py-2", "md:py-5", "lg:py-10"], [1, "grid", "grid-cols-12", "lg:max-w-[80%]", "mx-auto", "py-3", "md:py-6", "lg:py-10"], ["class", "col-span-12 md:col-span-6 md:pr-4", 4, "ngIf"], ["class", "col-span-12 pt-3 md:pl-6 lg:pl-16 md:border-l-2 md:col-span-6 md:pt-0", 4, "ngIf"], ["data-te-modal-init", "", "id", "patientConsentForm", 1, "fixed", "left-0", "top-0", "z-[1055]", "hidden", "h-full", "w-full", "overflow-y-auto", "overflow-x-hidden", "outline-none", 3, "innerScroll", "redeemData", "payOrderId", "couponCode", "promocodeVal", "discountAmount"], [1, "col-span-12", "md:col-span-6", "md:pr-4"], [1, "text-xl", "font-bold", "font-lora", "text-theme-brown"], [1, "pt-3", "pb-2", "text-lg", "lg:py-3", "font-roboto", "text-theme-lighter-grey"], [1, "inline-flex", "gap-5", "pb-3", "lg:py-3"], [1, "px-2", "py-1", "bg-theme-light-cream", "rounded-2xl", "h-fit", "shrink-0"], ["alt", "", 1, "h-[63px]", "w-[63px]", "object-contain", "object-bottom", 3, "src"], [1, ""], [1, "pb-2", "text-base", "font-semibold", "font-roboto"], [1, "flex", "gap-2"], ["class", "gap-2 px-2 md:py-0.5 text-base text-center border font-roboto border-theme-purple-lighter rounded-2xl", 4, "ngFor", "ngForOf"], [1, "py-2", "text-lg", "lg:py-5", "font-roboto", "text-theme-lighter-grey"], [1, "flex", "gap-3", "md:gap-5"], [1, "w-32", "h-16", "bg-theme-light-maroon", "bg-opacity-20", "rounded-xl"], [1, "flex", "items-center", "justify-center", "gap-2", "pt-3"], [1, "opacity-60"], ["width", "13", "height", "13", "viewBox", "0 0 13 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.33333 6.5H3.25C2.65254 6.5 2.16667 6.98588 2.16667 7.58333V8.66667C2.16667 9.26413 2.65254 9.75 3.25 9.75H4.33333C4.93079 9.75 5.41667 9.26413 5.41667 8.66667V7.58333C5.41667 6.98588 4.93079 6.5 4.33333 6.5ZM3.25 8.66667V7.58333H4.33333V8.66667H3.25ZM10.2917 1.08333H9.75V0.541667C9.75 0.242667 9.50788 0 9.20833 0C8.90879 0 8.66667 0.242667 8.66667 0.541667V1.08333H4.33333V0.541667C4.33333 0.242667 4.09121 0 3.79167 0C3.49213 0 3.25 0.242667 3.25 0.541667V1.08333H2.70833C1.21496 1.08333 0 2.29829 0 3.79167V10.2917C0 11.785 1.21496 13 2.70833 13H10.2917C11.785 13 13 11.785 13 10.2917V3.79167C13 2.29829 11.785 1.08333 10.2917 1.08333ZM2.70833 2.16667H10.2917C11.1876 2.16667 11.9167 2.89575 11.9167 3.79167V4.33333H1.08333V3.79167C1.08333 2.89575 1.81242 2.16667 2.70833 2.16667ZM10.2917 11.9167H2.70833C1.81242 11.9167 1.08333 11.1876 1.08333 10.2917V5.41667H11.9167V10.2917C11.9167 11.1876 11.1876 11.9167 10.2917 11.9167Z", "fill", "#581E1E"], [1, "text-sm", "text-center", "opacity-60", "font-roboto"], [1, "py-2", "pt-0", "text-base", "font-bold", "text-center", "font-roboto", "text-theme-brown"], [1, "w-32", "h-16", "bg-theme-dark-skyblue", "bg-opacity-20", "rounded-xl"], ["d", "M6.5 13C2.91579 13 0 10.0842 0 6.5C0 2.91579 2.91579 0 6.5 0C10.0842 0 13 2.91579 13 6.5C13 10.0842 10.0842 13 6.5 13ZM6.5 1.08333C3.51325 1.08333 1.08333 3.51325 1.08333 6.5C1.08333 9.48675 3.51325 11.9167 6.5 11.9167C9.48675 11.9167 11.9167 9.48675 11.9167 6.5C11.9167 3.51325 9.48675 1.08333 6.5 1.08333ZM7.85417 8.84542C8.11363 8.69592 8.20246 8.36442 8.05242 8.1055L7.04167 6.35483V3.25C7.04167 2.951 6.79954 2.70833 6.5 2.70833C6.20046 2.70833 5.95833 2.951 5.95833 3.25V6.5C5.95833 6.59533 5.98325 6.6885 6.03092 6.77083L7.11425 8.64717C7.215 8.82104 7.39646 8.918 7.58388 8.918C7.67596 8.918 7.76913 8.89471 7.85417 8.84542Z", "fill", "#215083"], [1, "text-sm", "opacity-60", "text-theme-dark-skyblue", "font-roboto"], [1, "py-2", "pt-0", "text-base", "font-bold", "text-center", "font-roboto", "text-theme-dark-skyblue"], [1, "w-32", "h-16", "bg-theme-greish-blue", "bg-opacity-20", "rounded-xl"], ["width", "10", "height", "13", "viewBox", "0 0 10 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.33988 6.5C8.70608 5.27736 9.50835 3.92199 9.72612 2.46479C9.81767 1.85211 9.63674 1.22914 9.22937 0.75623C8.81496 0.275731 8.2142 0 7.58094 0H2.1687C1.53544 0 0.93414 0.276273 0.520272 0.756771C0.112363 1.23077 -0.0685684 1.85428 0.0235226 2.4675C0.242916 3.92958 1.04411 5.28332 2.4076 6.5C1.04411 7.71668 0.242916 9.07096 0.0235226 10.5325C-0.0685684 11.1457 0.112905 11.7698 0.520272 12.2432C0.934682 12.7243 1.53544 13 2.1687 13H7.5804C8.21366 13 8.81442 12.7243 9.22883 12.2438C9.63674 11.7703 9.81767 11.1479 9.72612 10.5347C9.50835 9.07747 8.70608 7.72319 7.33988 6.5ZM8.40814 11.5368C8.20012 11.7784 7.89839 11.9171 7.5804 11.9171H2.1687C1.85072 11.9171 1.54898 11.7784 1.34097 11.5363C1.1362 11.2985 1.04844 10.9989 1.09395 10.6934C1.29709 9.33965 2.13566 8.07205 3.58528 6.9247C3.71529 6.82232 3.79059 6.66522 3.79059 6.5C3.79059 6.33478 3.71475 6.17768 3.58528 6.0753C2.13566 4.92795 1.29709 3.66035 1.09395 2.30661C1.04844 2.00108 1.13566 1.70152 1.34097 1.46371C1.54898 1.2221 1.85072 1.08342 2.1687 1.08342H7.5804C7.89839 1.08342 8.20012 1.22156 8.40814 1.46371C8.61236 1.70098 8.70012 2 8.65462 2.30498C8.45256 3.65276 7.61453 4.92199 6.1622 6.07638C6.03327 6.17931 5.95798 6.33532 5.95798 6.50054C5.95798 6.66576 6.03327 6.82178 6.1622 6.9247C7.61453 8.07963 8.4531 9.34832 8.65462 10.6961C8.70012 11.0011 8.61236 11.3001 8.4076 11.5374L8.40814 11.5368ZM7.37022 2.9117C7.43793 2.74431 7.41789 2.55471 7.31713 2.4052C7.21637 2.25623 7.0479 2.16631 6.86805 2.16631H2.87943C2.69904 2.16631 2.53111 2.25623 2.43035 2.40574C2.32959 2.55471 2.30955 2.74431 2.37726 2.91116C2.78246 3.91495 3.6232 4.72373 4.25754 5.22535L4.53869 5.448C4.63728 5.52654 4.75592 5.56501 4.87509 5.56501C4.99427 5.56501 5.11399 5.52546 5.21258 5.44691L5.48777 5.22752C6.1232 4.7221 6.96556 3.91062 7.37022 2.9117ZM4.87401 4.33153C4.53219 4.0558 4.13132 3.68527 3.809 3.25027H5.93685C5.61561 3.68256 5.21583 4.05417 4.87401 4.33153Z", "fill", "#1D5E3F"], [1, "text-sm", "opacity-60", "font-roboto", "text-theme-dark-green"], [1, "py-2", "pt-0", "text-base", "font-bold", "text-center", "font-roboto", "text-theme-dark-green"], [1, "gap-2", "px-2", "md:py-0.5", "text-base", "text-center", "border", "font-roboto", "border-theme-purple-lighter", "rounded-2xl"], [1, "col-span-12", "pt-3", "md:pl-6", "lg:pl-16", "md:border-l-2", "md:col-span-6", "md:pt-0"], [1, "text-lg", "text-theme-lighter-grey", "font-roboto"], [1, "flex", "gap-4", "my-4"], [1, "flex-grow", "flex-shrink"], ["type", "text", "placeholder", "Enter Promocode", 1, "rounded-[40px]", "py-2", "px-5", "w-full", "h-10", "leading-none", "placeholder:text-theme-lightest-grey", "font-roboto", "border", "outline-none", "border-theme-lightest-pink", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keyup.enter", "change"], ["class", "outline-none h-10 text-lg text-white  rounded-3xl flex bg-theme-light-maroon justify-center items-center w-[100px] font-roboto ", 3, "ngClass", "click", 4, "ngIf"], ["class", "outline-none h-10 text-lg text-white  rounded-3xl flex justify-center items-center w-[100px] font-roboto ", 3, "ngClass", 4, "ngIf"], ["class", "flex justify-between", 4, "ngIf"], ["class", "flex justify-between mt-2 font-roboto", 4, "ngIf"], [1, "py-3", "text-lg", "text-theme-lighter-grey", "font-roboto"], [1, "w-full", "px-6", "bg-theme-purple-lighter", "rounded-3xl"], [1, "flex", "justify-between", "gap-3", "py-4"], [1, "text-base", "font-roboto", "text-theme-light-purple"], [1, "text-base", "text-right", "font-roboto"], [1, "flex", "justify-between", "py-0"], [1, "text-lg", "text-right", "font-roboto"], [1, "flex", "justify-between", "py-3", 3, "ngClass"], ["class", "flex justify-between py-3", 3, "ngClass", 4, "ngIf"], [1, "flex", "justify-between", "py-3"], [1, "text-base", "font-roboto"], ["class", "text-xl font-semibold font-roboto", 4, "ngIf"], [1, "py-2", "text-sm", "font-roboto", "text-theme-lighter-grey"], [1, "flex", "gap-5", "py-8", "bg-white"], [1, "font-roboto"], [1, "text-base", "leading-none"], [1, "text-theme-dark-green", "pt-2", "text-[15px]"], ["class", "font-bold text-[22px]", 4, "ngIf"], [1, "w-full", "text-end"], [1, "justify-center", "px-10", "py-1.5", "text-lg", "text-white", "border", "border-transparent", "rounded-full", "group", "border-1", "font-roboto", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", 3, "ngClass", "disabled", "click"], ["data-te-toggle", "modal", "data-te-target", "#patientConsentForm", 1, "justify-center", "px-10", "py-1.5", "text-lg", "text-white", "border", "border-transparent", "rounded-full", "group", "border-1", "font-roboto", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", "d-none", 3, "ngClass", "disabled"], [1, "outline-none", "h-10", "text-lg", "text-white", "rounded-3xl", "flex", "bg-theme-light-maroon", "justify-center", "items-center", "w-[100px]", "font-roboto", 3, "ngClass", "click"], [1, "outline-none", "h-10", "text-lg", "text-white", "rounded-3xl", "flex", "justify-center", "items-center", "w-[100px]", "font-roboto", 3, "ngClass"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/global/svg/correct.svg", "class", "flex justify-center", 4, "ngIf"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/global/svg/wrong.svg", "class", "flex justify-center", 4, "ngIf"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/global/svg/correct.svg", 1, "flex", "justify-center"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/global/svg/wrong.svg", 1, "flex", "justify-center"], [1, "flex", "justify-between"], [1, "text-red-600"], [1, "text-theme-olive-green"], [1, "flex", "justify-between", "mt-2", "font-roboto"], ["class", "cursor-pointer", 3, "ngClass", "click", 4, "ngIf"], [1, "cursor-pointer", 3, "ngClass", "click"], [1, "text-xl", "font-semibold", "font-roboto"], [1, "font-bold", "text-[22px]"]],
    template: function PackageCheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-package-payment-stepper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PackageCheckoutComponent_div_3_Template, 45, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, PackageCheckoutComponent_div_4_Template, 53, 23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "app-package-consent-model", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerScroll", true)("redeemData", ctx.redeemData)("payOrderId", ctx.payOrderId)("couponCode", ctx.couponCode)("promocodeVal", ctx.promocodeVal)("discountAmount", ctx.discountAmount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_9__.LazyImgDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _package_payment_stepper_package_payment_stepper_component__WEBPACK_IMPORTED_MODULE_10__.PackagePaymentStepperComponent, _package_consent_model_package_consent_model_component__WEBPACK_IMPORTED_MODULE_11__.PackageConsentModelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    encapsulation: 2
  });
  return PackageCheckoutComponent;
})();


/***/ }),

/***/ 25924:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-consent-model/package-consent-model.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageConsentModelComponent: () => (/* binding */ PackageConsentModelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/local-storage/local-storage.service */ 59849);
/* harmony import */ var src_app_modules_shared_services_navigation_service_list_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/navigation-service-list/navigate.service */ 97853);
/* harmony import */ var src_app_modules_shared_services_order_insertion_order_insertion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/order-insertion/order-insertion.service */ 24927);
/* harmony import */ var src_app_modules_shared_services_razorpay_window_ref_razorpay_window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/razorpay-window-ref/razorpay-window-ref.service */ 32910);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var src_app_modules_shared_services_transaction_order_transaction_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/services/transaction-order/transaction-order.service */ 53434);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 27867);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);















const _c0 = function (a0) {
  return {
    "h-full": a0
  };
};
const _c1 = function (a0) {
  return {
    "h-full flex flex-col ": a0
  };
};
const _c2 = function (a0) {
  return {
    "pb-2": a0
  };
};
const _c3 = function (a0) {
  return {
    "overflow-y-auto overflow-x-hidden styled-scrollbar": a0
  };
};
let PackageConsentModelComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageConsentModelComponent {
    constructor(localStorageService, navigateService, orderInsertionService, windowRef, cdr, GetData, transactionOrderService, zone, toastr, eventTrackingService, activatedRoute) {
      this.localStorageService = localStorageService;
      this.navigateService = navigateService;
      this.orderInsertionService = orderInsertionService;
      this.windowRef = windowRef;
      this.cdr = cdr;
      this.GetData = GetData;
      this.transactionOrderService = transactionOrderService;
      this.zone = zone;
      this.toastr = toastr;
      this.eventTrackingService = eventTrackingService;
      this.activatedRoute = activatedRoute;
      this.submitted = false;
      this.consentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
        consent: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
      });
      this.subscriptions = [];
      this.userDetails = this.localStorageService.getItem('userSlug');
      this.GetData.PackageDetails.subscribe(res => {
        this.packageData = res;
      });
      this.GetData.packageSlotData.subscribe(res => {
        this.packageSlotData = res;
      });
      this.activatedRoute.paramMap.subscribe(params => {
        this.slug = params['params'].slug;
      });
    }
    ngOnInit() {
      this.addRazorpayScriptTag();
      this.GetData.packageSlotData.subscribe(res => {
        this.selectedDate = res?.date;
      });
    }
    /**
     * Method to add razorpay script lazy loaded
     */
    addRazorpayScriptTag() {
      if (!document.getElementById('razorpay')) {
        var script = document.createElement('script');
        script.id = 'razorpay';
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        document.body.appendChild(script);
      }
    }
    onConsentChange(event) {
      this.isConsentChecked = event.target['checked'];
    }
    onTermsChange(event) {
      this.isTermsChecked = event.target['checked'];
    }
    orderInsertion(submit) {
      if (!this.consentForm.controls['consent'].value || !this.consentForm.controls['terms'].value) {
        return;
      }
      const btnsGroup = document.getElementById('modalActionBtnsGroup');
      const modalCloseBtn = document.createElement('div');
      modalCloseBtn.id = 'modalCloseBtn';
      modalCloseBtn.setAttribute('data-te-modal-dismiss', '');
      btnsGroup.appendChild(modalCloseBtn);
      document.getElementById('modalCloseBtn').click();
      let amount;
      amount = (Number(this.packageData?.pkg_sell_price || this.packageData?.app_refrence_price) - Number(this.discountAmount)).toFixed(2).toString() || '0';
      let payload = {
        "status": 200,
        "data": this.payOrderId
      };
      if (this.packageData?.gtp_doctor || this.packageData?.gto_doc_id) {
        payload.gto_doc_id = this.packageData?.gtp_doctor || this.packageData?.gto_doc_id;
      }
      if (this.localStorageService?.getItem('userSlug')) {
        this.razorPay(payload);
        // this.orderInsertionService
        //     .ontransaction(payload)
        //     .subscribe((data) => {
        //         if (data?.data?.data && data?.success) {
        //             this.razorPay(data?.data?.data);
        //         } else {
        //             this.toastr.error(
        //                 data?.data?.error?.data?.message,
        //                 undefined,
        //                 {
        //                     positionClass: 'toast-bottom-center',
        //                     closeButton: true,
        //                     //disableTimeOut: true,
        //                     tapToDismiss: false,
        //                 }
        //             );
        //         }
        //     });
      } else {
        this.navigateService.navigation(['/auth/login']);
      }
    }
    razorPay(order_id) {
      const options = {
        key: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.razorPayUrl,
        amount: (Number((this.packageData?.pkg_sell_price - this.discountAmount).toFixed(2)) * 100)?.toFixed(2).toString(),
        name: (this.packageData?.pkg_name?.replaceAll('-', ' ') || '').slice(0, 1).toUpperCase() + (this.packageData?.pkg_name?.replaceAll('-', ' ') || '').slice(1).toLowerCase(),
        currency: 'INR',
        order_id: order_id,
        modal: {
          escape: false
        },
        prefill: {
          name: this.localStorageService?.getItem('userSlug')?.user_name,
          email: this.localStorageService?.getItem('userSlug')?.user_email,
          contact: this.localStorageService?.getItem('userSlug')?.user_mo_no
        }
      };
      options.handler = response => {
        options.response = response;
        const trackVal = {
          name: this.localStorageService?.getItem('userSlug')?.user_name,
          email: this.localStorageService?.getItem('userSlug')?.user_email,
          contact: this.localStorageService?.getItem('userSlug')?.user_mobile_number
        };
        this.eventTrackingService.trackWebEnagegeEvent('Payment Success', trackVal);
        this.transactionUpdate(options.response);
      };
      options.modal.ondismiss = () => {
        const trackVal = {
          name: this.localStorageService?.getItem('userSlug')?.user_name,
          email: this.localStorageService?.getItem('userSlug')?.user_email,
          contact: this.localStorageService?.getItem('userSlug')?.user_mobile_number
        };
        this.eventTrackingService.trackWebEnagegeEvent('Payment Cancelled', trackVal);
      };
      this.rzp1 = new this.windowRef.nativeWindow.Razorpay(options);
      this.rzp1.open();
      this.rzp1.on('payment.failed', response => {
        const trackVal = {
          name: this.localStorageService?.getItem('userSlug')?.user_name,
          email: this.localStorageService?.getItem('userSlug')?.user_email,
          contact: this.localStorageService?.getItem('userSlug')?.user_mobile_number
        };
        this.eventTrackingService.trackWebEnagegeEvent('Payment Failed', trackVal);
      });
    }
    transactionUpdate(payload) {
      this.subscriptions.push(this.transactionOrderService.transactionSuccess({
        "ordr_id": this.slug,
        "ordr_pay_id": payload?.razorpay_payment_id,
        "ordr_txn_id": this.payOrderId
      }, 'package').subscribe(data => {
        if (data?.data) {
          this.zone.run(() => {
            this.GetData.paymentCompleted = true;
            this.navigateService.navigation(['program/' + `${this.packageData?.pkg_slug}` + '/success']);
            this.toastr.success('Program Purchased Successfully', undefined, {
              positionClass: 'toast-bottom-center',
              closeButton: true
            });
          });
          this.cdr.detectChanges();
        }
      }));
    }
    /**
     * Clear subscriptions when component complete the process
     */
    ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }
  _class = PackageConsentModelComponent;
  _class.ɵfac = function PackageConsentModelComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service_list_navigate_service__WEBPACK_IMPORTED_MODULE_2__.NavigateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_order_insertion_order_insertion_service__WEBPACK_IMPORTED_MODULE_3__.OrderInsertionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_razorpay_window_ref_razorpay_window_ref_service__WEBPACK_IMPORTED_MODULE_4__.RazorpayWindowRefService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_5__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_transaction_order_transaction_order_service__WEBPACK_IMPORTED_MODULE_6__.TransactionOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_7__.EventTrackingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-consent-model"]],
    inputs: {
      couponCode: "couponCode",
      innerScroll: "innerScroll",
      discountAmount: "discountAmount",
      redeemData: "redeemData",
      payOrderId: "payOrderId",
      promocodeVal: "promocodeVal"
    },
    decls: 44,
    vars: 23,
    consts: [["data-te-modal-dialog-ref", "", 1, "duration-300", "ease-in-out", "flex", "items-center", "justify-center", "min-[576px]:max-w-[760px]", "min-[576px]:mx-auto", "min-h-full", "opacity-100", "pointer-events-none", "py-6", "px-4", "md:px-0", "relative", "transform-none", "transition-all", "w-full", "sm:w-fit", 3, "ngClass"], [1, "max-w-[560px]", "pointer-events-auto", "px-4", "py-6", "bg-white", "shadow-xl", "rounded-3xl", "w-full", 3, "ngClass"], ["type", "button", "data-te-modal-dismiss", "", "aria-label", "Close", "inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-page/svg/close-icon.svg", 1, "absolute", "z-50", "top-[15px]", "right-1", "sm:right-0", "md:-right-2", "bg-white", "shadow-[0px_10px_15px_0px_rgba(33,5,22,0.08)]", "h-[30px]", "w-[30px]", "flex", "justify-center", "items-center", "rounded-[50%]", "text-theme-grey-base"], [1, "text-xl", "font-bold", "font-lora", "text-theme-brown", "px-4", 3, "ngClass"], [1, "", 3, "ngClass"], [1, "py-3", "px-4", "text-lg", "font-roboto"], [1, "fs-4"], ["novalidate", "novalidate", 1, "form", "w-100", "px-4", 3, "formGroup"], [1, "form-check", "mt-5", "fs-4"], ["type", "checkbox", "id", "consent", "name", "consent", "formControlName", "consent", 1, "form-check-input", "mr-3", "bg-gray-300", "accent-theme-medium-maroon", 3, "change"], ["for", "consent", 1, "form-check-label"], [1, ""], ["type", "checkbox", "id", "terms", "name", "terms", "required", "", "formControlName", "terms", 1, "form-check-input", "mr-3", "bg-gray-300", "accent-theme-medium-maroon", 3, "change"], ["for", "terms", 1, "form-check-label"], ["id", "modalActionBtnsGroup", 1, "flex", "justify-center", "gap-3", "mt-9"], ["data-te-modal-dismiss", "", 1, "inline-flex", "items-center", "gap-3", "px-8", "py-2", "text-2xl", "border", "border-black", "font-roboto", "rounded-3xl", 3, "click"], [1, "inline-flex", "items-center", "gap-4", "px-8", "py-2", "text-2xl", "text-white", "rounded-full", "font-roboto", "sm:text-xl", "bg-theme-light-maroon", 3, "ngClass", "disabled", "click"]],
    template: function PackageConsentModelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Patient Consent Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "I state that I am the patient who is availing services via Online Consultation/Telemedicine. I state that I have read the following information/consent/undertakings and agree to the same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ol", 6)(10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "I understand and state that I have willingly given my sensitive personal data and medical data (Personal Information) to Digitalist Tech Media Pvt Limited (\u201CGytree\u201D) in order to receive Online Consultation and bookings for Diagnostic Services. I state that I understand that this Personal Information shall be treated as mentioned in the Privacy Policy and I assent to the same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "I understand that Gytree is a booking service, and I am receiving the actual medical advice from a Doctor, the dietary and nutrition advice from a nutritionist/dietician and the mental health advice from a counsellor/doctor. Gytree is not responsible for the advice given.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "I understand the diagnostic services are provided by third party diagnostic services and Gytree is not responsible for the same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "I understand that my Personal Information is being shared with the Health Professional/Diagnostic Service Provider providing me with the services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "I understand that the medical advice given to me is predicated upon the information provided by me. The Doctor/Health Professional/Diagnostic Service Provider shall not be responsible for any consequences arising out of incorrect information provided by me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "I state that I have read through the Terms of Use and Privacy Policy and I have assented to the same and have entered into a binding agreement with Gytree based upon the said Terms of Use and Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "I consent to be treated by the Doctor/Health Professional booked for me through Gytree via online consultation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "I understand and agree that reasonable efforts have been made to ensure to eliminate and mitigate the confidentiality risks associated with this consultation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "I state that I am old enough (above 18 years) to provide this consent. [In case of minor the same has been assented to by a parent/legal guardian]");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "form", 7)(29, "div", 8)(30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PackageConsentModelComponent_Template_input_change_30_listener($event) {
          return ctx.onConsentChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 10)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "I have understood, read and accept the Patient Consent Form and agree to be treated by Online Consultation. I have been advised of the potential risks, consequences and benefits of online consultations/telemedicine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 11)(35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PackageConsentModelComponent_Template_input_change_35_listener($event) {
          return ctx.onTermsChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "label", 13)(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "I have understood, read and accept the Terms of Use and Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 14)(40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PackageConsentModelComponent_Template_button_click_40_listener() {
          return ctx.consentForm.reset();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PackageConsentModelComponent_Template_button_click_42_listener() {
          return ctx.orderInsertion(ctx.submitted = true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " Accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c0, ctx.innerScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](17, _c1, ctx.innerScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c2, ctx.innerScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c3, ctx.innerScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.consentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("border-color", !ctx.isConsentChecked && ctx.submitted ? "#F25769" : "#F4F4F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", !ctx.isConsentChecked && ctx.submitted ? "#F25769" : "black");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("border-color", !ctx.isTermsChecked && ctx.submitted ? "#F25769" : "#F4F4F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", !ctx.isTermsChecked && ctx.submitted ? "#F25769" : "black");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isTermsChecked && ctx.isConsentChecked ? "" : "opacity-60")("disabled", !ctx.isTermsChecked && !ctx.isConsentChecked);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName],
    encapsulation: 2
  });
  return PackageConsentModelComponent;
})();


/***/ }),

/***/ 83884:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-hero-section/package-hero-section.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageHeroSectionComponent: () => (/* binding */ PackageHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 79457);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);








function PackageHeroSectionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/celender.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_duration, " week Program");
  }
}
function PackageHeroSectionComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackageHeroSectionComponent_div_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.redirectToPaymentPage(ctx_r4.packageData, ctx_r4.packageData == null ? null : ctx_r4.packageData.pkg_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Buy Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PackageHeroSectionComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackageHeroSectionComponent_div_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.redirectToPaymentPage(ctx_r6.packageData, ctx_r6.packageData == null ? null : ctx_r6.packageData.pkg_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Consult Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PackageHeroSectionComponent_div_41_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r8.packageData == null ? null : ctx_r8.packageData.pkg_duration, " week Program ");
  }
}
function PackageHeroSectionComponent_div_41_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackageHeroSectionComponent_div_41_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.redirectToPaymentPage(ctx_r11.packageData, ctx_r11.packageData == null ? null : ctx_r11.packageData.pkg_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Buy Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PackageHeroSectionComponent_div_41_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackageHeroSectionComponent_div_41_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.redirectToPaymentPage(ctx_r13.packageData, ctx_r13.packageData == null ? null : ctx_r13.packageData.pkg_slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Consult Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PackageHeroSectionComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PackageHeroSectionComponent_div_41_div_8_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PackageHeroSectionComponent_div_41_div_9_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PackageHeroSectionComponent_div_41_div_10_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.packageData == null ? null : ctx_r3.packageData.pkg_sell_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.packageData == null ? null : ctx_r3.packageData.pkg_standard_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.packageData == null ? null : ctx_r3.packageData.pkg_consultation_count) != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.packageData == null ? null : ctx_r3.packageData.pkg_consultation_count) != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.packageData == null ? null : ctx_r3.packageData.pkg_consultation_count) == 1);
  }
}
let PackageHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageHeroSectionComponent {
    // Box visible
    onScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollY >= 200 ? this.scrolled = true : this.scrolled = false;
      if (window.scrollY >= scrollableHeight) this.scrolled = false;
    }
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_0___default().init({});
    }
    constructor(router, GetData, eventTrackingService) {
      this.router = router;
      this.GetData = GetData;
      this.eventTrackingService = eventTrackingService;
    }
    redirectToPaymentPage(packageDetails, slug) {
      this.GetData.PackageDetails.next(packageDetails);
      const value = {
        Name: packageDetails?.pkg_name,
        cost: packageDetails?.pkg_sell_price,
        week: packageDetails?.pkg_duration
      };
      this.eventTrackingService.trackWebEnagegeEvent('Buy Program', value);
      this.eventTrackingService.trackEvent('Buy Program', value);
      this.router.navigate(['program/' + `${slug}` + '/package-select-dates']);
    }
  }
  _class = PackageHeroSectionComponent;
  _class.ɵfac = function PackageHeroSectionComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_2__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-hero-section"]],
    hostBindings: function PackageHeroSectionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function PackageHeroSectionComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      packageData: "packageData"
    },
    decls: 42,
    vars: 11,
    consts: [[1, "container", "px-6", "py-16"], [1, "grid", "md:grid-cols-2"], [1, "relative", "flex", "items-center", "justify-center", "hero-sec-text"], [1, "absolute", "right-auto", "-left-6", "sm:left-auto", "sm:right-0"], ["width", "51", "height", "51", "viewBox", "0 0 51 51", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-[30px]", "h-[30px]", "sm:w-[50px]", "sm:h-[50px]"], ["id", "mask0_2176_85437", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "51", "height", "51", 2, "mask-type", "luminance"], ["d", "M0 0H51V51H0V0Z", "fill", "white"], ["mask", "url(#mask0_2176_85437)"], ["d", "M50.1815 32.8091C50.3808 31.2018 49.2157 30.0606 47.7877 29.4343C48.2309 29.162 48.6383 28.8354 49.0006 28.4621C50.9792 26.4524 49.9903 24.065 47.7877 22.7876C43.6703 20.3762 36.3773 22.9079 34.9572 16.8644C34.311 14.1072 34.9572 11.0695 34.295 8.24062C33.7444 5.90976 32.5634 2.86331 30.1457 1.89112C27.1455 0.709352 25.684 3.24979 25.3095 5.99024C24.9349 8.7307 25.7406 10.9245 24.7357 13.6171C23.7273 16.3779 21.9966 18.8175 19.7242 20.6814C17.426 22.4585 14.0504 23.6713 12.1116 25.8659C10.3957 25.9204 8.67807 25.8879 6.96541 25.7687C5.1302 25.5679 3.31891 25.1981 1.50681 25.0619C1.41999 25.0816 1.34165 25.1284 1.28297 25.1953C1.22429 25.2623 1.18829 25.3461 1.18009 25.4348C1.17158 25.5233 1.19077 25.6122 1.23503 25.6893C1.27929 25.7664 1.34642 25.8278 1.42713 25.8651C4.47597 26.4604 8.12247 27.4732 11.3379 27.007C10.8159 27.9735 10.5835 29.0699 10.6685 30.165C10.6685 30.7276 11.553 30.7762 11.561 30.165C11.6327 24.6355 18.5113 23.5589 21.7514 20.2718C23.859 18.1293 25.4024 15.4976 26.2434 12.6123C26.3231 12.3158 26.3868 12.0154 26.4347 11.7118C26.8745 12.1092 27.4491 12.3246 28.0418 12.3142C28.6346 12.3039 29.2012 12.0686 29.6269 11.656C31.1506 10.2336 31.5418 7.26763 31.5179 5.00212C33.4886 7.51706 33.4248 11.7604 33.5045 14.8069C33.4006 16.5652 33.8741 18.3094 34.8528 19.7738C35.3596 20.5419 36.0315 21.1871 36.8195 21.6624C37.6068 22.1357 38.4882 22.4274 39.4014 22.5142C36.5287 22.9724 33.0902 23.9526 32.2678 26.0508C31.71 27.4732 32.5706 28.4613 33.7683 29.1283C31.9889 30.2615 28.9807 32.6569 30.2732 34.9718C30.831 35.9759 32.0686 36.5791 33.5364 36.956C31.9411 37.5592 30.4087 38.5641 30.7362 40.4846C30.9992 42.0042 32.22 42.9445 33.6798 43.5151C32.2997 44.0291 31.039 45.018 31.0868 46.6651C31.0919 47.3055 31.35 47.9179 31.8048 48.3689C29.0046 49.0119 26.6905 47.8628 24.0807 46.7616C21.5387 45.7851 18.8216 45.3474 16.1016 45.4762C10.5155 45.4762 5.11267 45.8133 0.221453 48.6342C0.122932 48.7024 0.0513318 48.8029 0.0190297 48.9183C-0.0132723 49.0337 -0.00424648 49.1567 0.0445472 49.2661C0.0926705 49.3752 0.177335 49.4641 0.283956 49.5175C0.390576 49.5709 0.512477 49.5854 0.628657 49.5586C7.09131 47.3807 12.6782 46.199 19.6126 46.8014C24.193 47.1959 27.8316 50.3865 32.4431 48.8757C33.7854 49.514 35.2373 49.8902 36.7207 49.9841C40.1672 50.4591 45.825 50.4591 47.7718 46.85C48.1338 46.2175 48.2827 45.4854 48.1966 44.7617C48.1105 44.038 47.794 43.3613 47.2937 42.8314C48.0389 42.39 48.6465 41.7499 49.0484 40.9826C49.4946 40.114 49.5942 39.106 49.3257 38.1657C49.0585 37.2275 48.4427 36.4269 47.6044 35.928C48.2658 35.6762 48.8504 35.2569 49.301 34.7112C49.7531 34.1637 50.0564 33.508 50.1815 32.8091ZM29.8899 8.27329C29.8338 8.73049 29.7378 9.18191 29.603 9.6224L29.1321 10.6273C28.4778 11.6393 27.6156 11.4313 26.563 10.0487V9.01996C26.563 7.78242 26.4673 5.25074 27.2323 4.19807C27.3616 3.95938 27.5411 3.75157 27.7585 3.58896C27.9759 3.42635 28.2259 3.31281 28.4914 3.25616C28.7562 3.20033 29.0301 3.20313 29.2937 3.26439C29.5573 3.32566 29.8043 3.44388 30.0174 3.61077C30.0164 3.63228 30.0164 3.65382 30.0174 3.67532C30.113 5.20851 30.0708 6.74727 29.8899 8.27329ZM35.723 24.4427C37.5173 23.5935 39.4351 23.0348 41.4048 22.7876C42.761 22.9645 44.5484 22.7876 45.6816 23.5024C47.5 24.7001 47.2371 27.5935 45.6019 28.855C45.4741 28.8482 45.3471 28.8788 45.2364 28.943C45.1257 29.0073 45.0362 29.1024 44.9787 29.2168L44.8831 29.2646C42.9045 30.0208 40.2389 29.8598 38.1886 29.6192C37.3431 29.5228 35.978 29.5228 35.2282 29.0566C33.2655 27.8429 33.8878 25.4714 35.7222 24.4506L35.723 24.4427ZM42.6009 48.6183C40.9159 49.0934 39.1559 49.2435 37.4148 49.0605C36.3325 49.0318 35.2589 48.8587 34.2225 48.5458C31.8287 47.5258 32.9619 44.6889 34.9333 43.9239C35.9661 44.1757 37.0227 44.3183 38.085 44.351C40.623 44.5041 43.1687 44.2321 45.617 43.5462C48.4659 46.3113 44.0536 48.168 42.6009 48.6183ZM46.0322 39.5124C46.4147 40.7101 46.3191 41.5213 45.7692 41.9636C45.6729 41.9662 45.5785 41.9916 45.4939 42.0378C45.4093 42.0839 45.3368 42.1494 45.2823 42.2289C45.1499 42.2726 45.0139 42.3046 44.8759 42.3246C44.0775 42.7836 41.38 43.1294 40.8294 43.1772C39.7281 43.3854 38.6055 43.4582 37.4865 43.394L33.4966 42.366C31.6988 39.3379 32.3028 37.6533 35.3079 37.3098H35.3557C37.2642 37.517 39.1886 37.5409 41.1011 37.3823C42.6949 37.2684 44.2743 36.999 45.817 36.5791C46.8378 37.117 46.9343 38.0581 46.0322 39.5124ZM45.4744 35.3407C43.8223 35.9426 42.0957 36.3158 40.3425 36.45C38.7783 36.5695 37.2044 36.5153 35.6513 36.2898C33.5763 35.9918 33.4488 36.0723 32.6112 33.7741C31.4669 32.5628 31.486 31.6337 32.667 30.985C33.1653 30.43 33.7601 29.97 34.4225 29.6271C34.4593 29.6035 34.4917 29.5735 34.5182 29.5387C35.2935 29.8551 36.0944 30.1045 36.912 30.2862C39.7887 31.0177 42.7969 31.0512 45.6888 30.3818C46.2089 30.5153 46.7027 30.7357 47.1494 31.0336C49.9823 33.6936 46.8147 34.8427 45.4736 35.3328L45.4744 35.3407Z", "fill", "#93CFCF"], ["d", "M40.0519 15.6988C42.1078 12.073 44.5701 8.60657 46.4269 4.86922C46.459 4.81013 46.4681 4.74118 46.4522 4.6758C46.4363 4.61041 46.3967 4.55327 46.341 4.51549C46.2854 4.47772 46.2176 4.462 46.151 4.47141C46.0844 4.48083 46.0236 4.51469 45.9806 4.56641C43.2792 7.75391 41.3109 11.6506 39.4303 15.3322C39.3991 15.414 39.3982 15.5042 39.4278 15.5865C39.4573 15.6689 39.5153 15.738 39.5914 15.7813C39.6674 15.8246 39.7564 15.8393 39.8423 15.8227C39.9283 15.8061 40.0054 15.7593 40.0598 15.6908L40.0519 15.6988ZM43.08 16.3841C45.3306 14.1079 47.4283 11.6854 49.3594 9.13251C49.5506 8.86954 49.1522 8.57469 48.9211 8.78188C46.6419 11.0055 44.5122 13.3774 42.5461 15.882C42.5129 15.9191 42.4873 15.9623 42.4709 16.0093C42.4545 16.0562 42.4476 16.106 42.4506 16.1556C42.4535 16.2053 42.4663 16.2539 42.4882 16.2986C42.5101 16.3432 42.5406 16.3831 42.578 16.4159C42.6151 16.449 42.6583 16.4743 42.7053 16.4906C42.7522 16.5069 42.8019 16.5137 42.8515 16.5108C42.9011 16.5078 42.9496 16.4951 42.9943 16.4734C43.039 16.4516 43.0789 16.4213 43.1119 16.3841H43.08Z", "fill", "#93CFCF"], [1, "w-full", "sm:w-[70%]"], [1, "mb-4", "text-3xl", "font-bold", "text-center", "lg:mb-6", "md:mb-5", "lg:text-3xl", "md:text-left", "xl:text-6xl", "text-theme-dark-green", "font-lora"], ["class", "flex items-center justify-center mb-4 lg:mb-6 md:mb-5 md:justify-start", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "mb-4", "lg:mb-9", "md:mb-5", "md:justify-start", "md:flex-row"], [1, "flex", "items-center"], [1, "font-roboto", "text-[22px]", "text-theme-dark-green"], [1, "text-3xl", "font-bold", "font-roboto", "text-theme-dark-green", "me-3"], [1, "text-xl", "me-3", "font-roboto", "text-[#54856E]"], [1, "font-roboto", "md:text-[21px]", "me-3", "text-lg", "whitespace-nowrap"], ["class", "flex justify-center w-full mb-10 text-center md:mb-0 thrive-button md:text-left md:justify-start", 4, "ngIf"], [1, "relative", "flex", "justify-center", "px-8", "hero-image"], [1, "inline-block", "px-5"], ["alt", "", 1, "relative", "md:max-h-[500px]", "w-auto", 3, "src"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "absolute", "px-2", "py-2", "text-lg", "font-bold", "leading-tight", "text-center", "bg-white", "rounded-t-lg", "shadow-2xl", "w-28", "text-theme-dark-green", "md:rounded-t-xl", "lg:rounded-e-xl", "rounded-e-lg", "font-lora", "lg:px-5", "lg:text-xl", "lg:w-25", "md:text-sm", "md:w-24", "xl:right-24", "md:-right-2", "lg:right-10", "md:bottom-[6.5rem]", "white-box", "sm:w-32", "sm:right-20", "sm:text-xl", "lg:w-32", "sm:bottom-20", "bottom-16", "-right-2"], [1, "absolute", "md:left-16", "-top-[4.5rem]", "left-12", "sm:left-20"], ["width", "35", "height", "85", "viewBox", "0 0 42 91", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M32.9454 0.295632C24.1554 2.82473 22.0065 12.758 25.5564 20.5411C26.9171 23.5046 37.1456 36.2467 41.1086 29.535C45.0717 22.8233 31.0462 25.8547 28.5542 27.2262C21.0288 31.3634 11.8551 41.0537 9.30992 49.4467C6.31165 59.3275 12.8981 67.941 21.7507 71.8778C25.1208 73.3565 39.9577 78.5523 39.9999 70.5432C40.1209 59.1369 -5.57818 67.4205 1.67606 90.102C2.12621 90.9 3.76326 90.3041 3.47146 89.2779C0.312592 76.074 18.8793 66.5102 28.5424 67.8622C35.4277 66.9813 39.6445 72.4055 32.3824 72.474C29.8642 72.1264 27.3816 71.5573 24.9634 70.7734C20.9137 69.5518 17.2887 67.217 14.5015 64.0351C5.20699 52.754 13.4257 41.5949 21.7631 34.0947C23.6837 32.2438 26.2952 29.6853 30.7715 27.2143C38.3685 28.2866 37.8456 29.3775 31.6376 26.4151C23.7979 20.4505 19.9682 4.56795 32.9454 0.295632C33.4225 0.13638 33.4316 0.156134 32.9454 0.295632Z", "fill", "#93CFCF"], [1, "", 2, "background-image", "url(https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/images/triangle.png)"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "sm:w-32", "md:w-24", "w-28", "text-center", "font-bold", "md:rounded-t-xl", "rounded-t-lg", "lg:rounded-s-xl", "rounded-s-lg", "text-theme-dark-green", "leading-tight", "text-lg", "md:text-sm", "lg:text-xl", "z-20", "xl:top", "2xl:left-40", "lg:top-24", "md:top-14", "xl:left-16", "absolute", "bg-white", "px-2", "lg:px-5", "py-2", "shadow-2xl", "font-lora", "sm:top-36", "sm:text-xl", "lg:w-32", "top-14", "lg:left-8", "md:left-10", "left-[0.3rem]"], [1, "absolute", "-top-5", "left-6", "sm:left-10"], ["width", "30", "height", "28", "viewBox", "0 0 35 33", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M21.0877 9.00972C16.4045 8.91284 12.8039 4.88219 12.1851 0.452775C12.1674 0.337961 12.1125 0.232129 12.0289 0.151523C11.966 0.0909085 11.8893 0.0464176 11.8055 0.0218495C11.7217 -0.00271867 11.6332 -0.00663402 11.5475 0.0104378C11.4618 0.0275096 11.3816 0.0650613 11.3136 0.119886C11.2456 0.174711 11.1918 0.245179 11.157 0.325274C9.28759 5.33032 5.03255 9.0641 0.452516 11.6785C-0.349366 12.1379 0.0175124 13.3423 0.752519 13.3241C4.04067 16.5923 8.62133 19.6179 9.72322 24.423C9.75009 24.5842 9.83384 24.7311 9.96072 24.8367C10.0873 24.9428 10.2472 25.0009 10.4123 25.0009C10.5774 25.0009 10.7373 24.9428 10.8639 24.8367C10.9899 24.7316 11.0741 24.5848 11.1014 24.423C12.4664 18.4135 15.6326 13.0335 21.5108 10.456C22.2208 10.0985 21.7914 9.02785 21.0877 9.00972ZM10.3301 21.9898C9.48134 20.2995 8.44186 18.7118 7.23195 17.2579C6.00694 15.7392 4.39067 13.5423 2.48003 12.4166C6.50944 9.99598 10.1095 6.91595 11.6651 2.52842C12.8464 6.04407 15.192 8.99097 18.7252 10.0804C14.3039 12.6829 11.812 17.1367 10.3301 21.9898Z", "fill", "#93CFCF"], ["d", "M34.6037 21.0631C30.963 20.9031 28.5811 17.9831 27.9886 14.6068C27.9455 14.3662 27.5693 14.2681 27.4824 14.5331C26.1686 18.3894 23.5517 21.6425 19.6336 23.0288C19.1461 23.2013 19.4173 23.8788 19.8742 23.8232C21.4988 24.6846 22.9252 25.8764 24.0617 27.3219C25.1975 28.7667 26.0181 30.4333 26.4705 32.2145C26.4852 32.2955 26.5278 32.3687 26.591 32.4215C26.6541 32.4742 26.7338 32.5031 26.8161 32.5031C26.8984 32.5031 26.9781 32.4742 27.0413 32.4215C27.1044 32.3687 27.1471 32.2955 27.1618 32.2145C28.223 27.7107 30.4324 23.7682 34.8074 21.7963C35.1837 21.6175 34.9493 21.0756 34.6037 21.0631Z", "fill", "#FF2EAE"], ["class", "fixed bottom-0 left-0 right-0 z-30 flex w-full gap-10 px-4 py-5 bg-white shadow-sm opacity-100 lg:hidden", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "mb-4", "lg:mb-6", "md:mb-5", "md:justify-start"], [1, "flex", "items-center", "w-5", "h-5", "me-3", "text-theme-dark-green", 3, "inlineSVG"], [1, "md:text-2xl", "font-roboto", "text-[18px]"], [1, "flex", "justify-center", "w-full", "mb-10", "text-center", "md:mb-0", "thrive-button", "md:text-left", "md:justify-start"], [1, "group", "border", "border-1", "border-transparent", "rounded-full", "md:py-1.5", "px-5", "md:px-8", "text-base", "md:text-xl", "lg:text-[22px]", "flex", "gap-3", "font-roboto", "py-2", "justify-center", "text-white", "mt-3", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", "transition-all", "duration-300", 3, "click"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/did-you-know/up-right.svg", 1, "mt-1", "transition-transform", "md:mt-2", "fill-white", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], [1, "fixed", "bottom-0", "left-0", "right-0", "z-30", "flex", "w-full", "gap-10", "px-4", "py-5", "bg-white", "shadow-sm", "opacity-100", "lg:hidden"], [1, "font-roboto"], [1, "text-theme-dark-green", "pt-2", "text-[15px]"], [1, "font-bold", "text-[22px]", "mr-1", "text-theme-dark-green"], [1, "pt-2", "mx-2", "line-through", "text-theme-dark-green"], ["class", "font-roboto px-3 flex-wrap text-[15px] whitespace-nowrap", 4, "ngIf"], ["class", "w-full text-end", 4, "ngIf"], [1, "font-roboto", "px-3", "flex-wrap", "text-[15px]", "whitespace-nowrap"], [1, "w-full", "text-end"], [1, "justify-center", "px-4", "py-1.5", "text-lg", "text-white", "border", "border-transparent", "rounded-full", "group", "border-1", "font-roboto", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", 3, "click"]],
    template: function PackageHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 4)(5, "mask", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "path", 8)(9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10)(11, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PackageHeroSectionComponent_div_13_Template, 4, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, PackageHeroSectionComponent_div_24_Template, 4, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PackageHeroSectionComponent_div_25_Template, 4, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 20)(27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 27)(35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "path", 31)(40, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, PackageHeroSectionComponent_div_41_Template, 11, 5, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.packageData == null ? null : ctx.packageData.pkg_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.packageData == null ? null : ctx.packageData.pkg_consultation_count) != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.packageData == null ? null : ctx.packageData.pkg_sell_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u20B9", ctx.packageData == null ? null : ctx.packageData.pkg_standard_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.packageData == null ? null : ctx.packageData.pkg_consultation_count) == 1 ? "Per Consult" : "Per Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.packageData == null ? null : ctx.packageData.pkg_consultation_count) != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.packageData == null ? null : ctx.packageData.pkg_consultation_count) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (ctx.packageData == null ? null : ctx.packageData.pkg_banner_setting == null ? null : ctx.packageData.pkg_banner_setting.image) || "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.packageData == null ? null : ctx.packageData.pkg_banner_setting == null ? null : ctx.packageData.pkg_banner_setting.left_section == null ? null : ctx.packageData.pkg_banner_setting.left_section.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.packageData == null ? null : ctx.packageData.pkg_banner_setting == null ? null : ctx.packageData.pkg_banner_setting.right_section == null ? null : ctx.packageData.pkg_banner_setting.right_section.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.scrolled);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_4__.LazyImgDirective],
    encapsulation: 2
  });
  return PackageHeroSectionComponent;
})();


/***/ }),

/***/ 98727:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-how-it-works/package-how-it-works.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageHowItWorksComponent: () => (/* binding */ PackageHowItWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/image-lazy-load/lazy-load.directive */ 74717);




function PackageHowItWorksComponent_div_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const packageHowItWorks_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", packageHowItWorks_r3 == null ? null : packageHowItWorks_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", packageHowItWorks_r3 == null ? null : packageHowItWorks_r3.desc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function PackageHowItWorksComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PackageHowItWorksComponent_div_0_div_6_ng_container_1_Template, 4, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.packageData == null ? null : ctx_r1.packageData.pkg_how_it_works == null ? null : ctx_r1.packageData.pkg_how_it_works.data);
  }
}
function PackageHowItWorksComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " How it Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PackageHowItWorksComponent_div_0_div_6_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/how-it-works/svg/top-icon.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.packageData);
  }
}
let PackageHowItWorksComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageHowItWorksComponent {}
  _class = PackageHowItWorksComponent;
  _class.ɵfac = function PackageHowItWorksComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-how-it-works"]],
    inputs: {
      packageData: "packageData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "lg:w-[60%]", "md:w-[80%]", "mx-auto"], [1, "relative", "pb-12"], [1, "sm:text-center", "px-6", "py-8", "md:py-12", "font-lora", "text-2xl", "sm:text-[30px]", "font-extrabold", "pb-4", "text-theme-dark-green"], [1, "absolute", "right-0", "top-5", "text-theme-lightest-green", 3, "inlineSVG"], ["class", "flex-col flex-wrap justify-center md:flex md:flex-row", 4, "ngIf"], [1, "flex-col", "flex-wrap", "justify-center", "md:flex", "md:flex-row"], [4, "ngFor", "ngForOf"], [1, "flex", "w-full", "gap-3", "mb-5", "md:w-1/2", "md:mb-14"], [1, "flex-shrink-0", "w-10", "h-10", "text-theme-dark-green", 3, "src"], [1, "font-roboto", "text-[16px]", "sm:text-[21px]", 3, "innerHTML"]],
    template: function PackageHowItWorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PackageHowItWorksComponent_div_0_Template, 7, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.packageData == null ? null : ctx.packageData.pkg_how_it_works);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective, _shared_image_lazy_load_lazy_load_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective],
    encapsulation: 2
  });
  return PackageHowItWorksComponent;
})();


/***/ }),

/***/ 64911:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-milestone-of-week/package-milestone-of-week.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageMilestoneOfWeekComponent: () => (/* binding */ PackageMilestoneOfWeekComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function PackageMilestoneOfWeekComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.packageData == null ? null : ctx_r0.packageData.pkg_milestone["step1"] == null ? null : ctx_r0.packageData.pkg_milestone["step1"].desc);
  }
}
function PackageMilestoneOfWeekComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "02");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.packageData == null ? null : ctx_r1.packageData.pkg_milestone["step2"] == null ? null : ctx_r1.packageData.pkg_milestone["step2"].desc, " ");
  }
}
function PackageMilestoneOfWeekComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "03");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.packageData == null ? null : ctx_r2.packageData.pkg_milestone["step3"] == null ? null : ctx_r2.packageData.pkg_milestone["step3"].desc, "");
  }
}
function PackageMilestoneOfWeekComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "06");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.packageData == null ? null : ctx_r3.packageData.pkg_milestone["step6"] == null ? null : ctx_r3.packageData.pkg_milestone["step6"].desc);
  }
}
const _c0 = function (a0) {
  return {
    "before:hidden": a0
  };
};
function PackageMilestoneOfWeekComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !(ctx_r4.packageData == null ? null : ctx_r4.packageData.pkg_milestone["step5"])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.packageData == null ? null : ctx_r4.packageData.pkg_milestone["step5"] == null ? null : ctx_r4.packageData.pkg_milestone["step5"].desc, " ");
  }
}
function PackageMilestoneOfWeekComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "04");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.packageData == null ? null : ctx_r5.packageData.pkg_milestone["step4"] == null ? null : ctx_r5.packageData.pkg_milestone["step4"].desc, "");
  }
}
let PackageMilestoneOfWeekComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageMilestoneOfWeekComponent {}
  _class = PackageMilestoneOfWeekComponent;
  _class.ɵfac = function PackageMilestoneOfWeekComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-milestone-of-week"]],
    inputs: {
      packageData: "packageData"
    },
    decls: 17,
    vars: 7,
    consts: [[1, "px-5", "did-you-know", "md:px-0"], [1, "md:container"], [1, "assesment", "relative", "justify-center", "gap-5", "md:rounded-[40px]", "rounded-[18px]", "w-full", "2xl:w-[60%]", "lg:w-[80%]", "mx-auto", "md:pt-2.5", "pt-1", "md:pb-8", "pb-2", "md:px-10", "px-1", "bg-theme-purple-lighter", "text-white", "font-roboto"], [1, "text-black", "text-center", "pt-6", "font-bold", "lg:text-[30px]", "font-lora", "md:text-[25px]", "text-[24px]"], [1, "flex", "flex-wrap"], ["class", "relative order-1 w-full p-5 md:p-8 md:w-1/3 md:order-none", 4, "ngIf"], [1, "relative", "order-2", "w-full", "p-5", "md:p-8", "md:w-1/3", "md:order-none"], ["class", "bg-theme-lightest-purple after:text-theme-purple after:fill-theme-purple md:min-h-[120px] lg:min-h-[130px] flex flex-row md:flex-col items-center py-2 px-2 sm:text-center md:rounded-3xl rounded-xl after:absolute md:after:top-1/2 after:-top-3 md:after:-translate-y-1/2 after:left-10 md:after:left-auto after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')] md:after:w-16 after:w-12 md:after:-right-8 h-full after:rotate-90 md:after:rotate-0 before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')] before:-bottom-2 before:left-14 before:absolute before:w-1 before:h-7 before:block md:before:hidden after:hidden md:after:block", 4, "ngIf"], [1, "relative", "order-3", "w-full", "p-5", "md:p-8", "md:w-1/3", "md:order-none"], ["class", "bg-theme-lightest-purple after:text-theme-purple after:fill-theme-purple h-full md:min-h-[120px] lg:min-h-[130px] flex flex-row md:flex-col items-center py-2 px-2 sm:text-center md:rounded-3xl rounded-xl after:absolute after:left-16  md:after:left-1/2 after:-translate-x-1/2 after:-top-3 md:after:top-auto after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')] md:after:w-16 after:w-12 md:after:-bottom-3 after:right-1/2 after:rotate-90 before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')] before:-bottom-2 before:left-14 before:absolute before:w-1 before:h-7 before:block md:before:hidden after:hidden md:after:block", 4, "ngIf"], [1, "relative", "order-6", "w-full", "p-5", "md:p-8", "md:w-1/3", "md:order-none"], ["class", "bg-theme-lightest-purple after:text-theme-purple after:fill-theme-purple md:min-h-[120px] lg:min-h-[130px] flex flex-row md:flex-col items-center py-2 px-2 sm:text-center md:rounded-3xl rounded-xl after:absolute md:after:top-1/2 after:-top-3 md:after:-translate-y-1/2 after:left-10 after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')] md:after:w-16 md:after:-right-8 h-full after:rotate-90 md:after:rotate-180 md:after:left-auto after:w-12 before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')] before:-bottom-2 before:left-14 before:absolute before:w-1 before:h-7 before:hidden after:hidden md:after:block", 4, "ngIf"], [1, "relative", "order-5", "w-full", "p-5", "md:p-8", "md:w-1/3", "md:order-none"], ["class", "bg-theme-lightest-purple after:text-theme-purple after:fill-theme-purple h-full md:min-h-[120px] lg:min-h-[130px] flex flex-row md:flex-col items-center py-2 px-2 sm:text-center md:rounded-3xl rounded-xl after:absolute md:after:top-1/2 after:-top-3 md:after:-translate-y-1/2 after:left-10 after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')] md:after:w-16 md:after:-right-8 after:rotate-90 md:after:rotate-180 md:after:left-auto after:w-12 before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')] before:-bottom-2 before:left-14 before:absolute before:w-1 before:h-7 before:block md:before:hidden after:hidden md:after:block", 3, "ngClass", 4, "ngIf"], [1, "relative", "order-4", "w-full", "p-5", "md:p-8", "md:w-1/3", "md:order-none"], ["class", "bg-theme-lightest-purple after:text-theme-purple after:fill-theme-purple h-full md:min-h-[120px] lg:min-h-[130px] flex flex-row md:flex-col items-center py-2 px-2 sm:text-center md:rounded-3xl rounded-xl after:absolute md:after:top-1/2 after:-top-3 md:after:-translate-y-1/2 after:left-10 after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')] md:after:w-16 md:after:-right-8 after:rotate-90 md:after:rotate-180 md:after:left-auto after:w-12 before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')] before:-bottom-2 before:left-14 before:absolute before:w-1 before:h-7 before:block md:before:hidden after:hidden ", 4, "ngIf"], [1, "relative", "order-1", "w-full", "p-5", "md:p-8", "md:w-1/3", "md:order-none"], [1, "bg-theme-lightest-purple", "after:text-theme-purple", "md:min-h-[120px]", "lg:min-h-[130px]", "flex", "flex-row", "md:flex-col", "items-center", "py-2", "px-2", "sm:text-center", "md:rounded-3xl", "rounded-xl", "after:absolute", "md:after:top-1/2", "after:top-0", "md:after:-translate-y-1/2", "after:left-0", "md:after:left-auto", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')]", "md:after:w-16", "after:w-12", "md:after:-right-16", "after:-right-auto", "h-full", "md:rotate-0", "after:hidden", "md:after:block", "before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')]", "before:-bottom-2", "before:left-14", "before:absolute", "before:w-1", "before:h-7", "before:block", "md:before:hidden"], [1, "flex", "flex-col-reverse", "justify-center", "w-auto", "gap-1", "px-2", "py-0", "border-b-0", "border-r", "md:flex-row", "md:border-b", "border-r-theme-purple-lighter", "md:border-r-0", "md:border-b-theme-purple-lighter", "md:w-full", "md:py-1", "md:px-0"], [1, "text-lg", "text-black"], [1, "hidden", "text-xl", "text-center", "text-black", "md:block"], [1, "block", "text-xl", "text-center", "text-black", "md:hidden"], [1, "border"], [1, "flex", "items-center", "h-full", "text-lg", "text-black", "min-h-[70px]", "md:text-sm", "xl:text-lg", "font-roboto", "md:items-start", "py-1", "md:px-1", "px-3", "leading-tight"], [1, "bg-theme-lightest-purple", "after:text-theme-purple", "after:fill-theme-purple", "md:min-h-[120px]", "lg:min-h-[130px]", "flex", "flex-row", "md:flex-col", "items-center", "py-2", "px-2", "sm:text-center", "md:rounded-3xl", "rounded-xl", "after:absolute", "md:after:top-1/2", "after:-top-3", "md:after:-translate-y-1/2", "after:left-10", "md:after:left-auto", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')]", "md:after:w-16", "after:w-12", "md:after:-right-8", "h-full", "after:rotate-90", "md:after:rotate-0", "before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')]", "before:-bottom-2", "before:left-14", "before:absolute", "before:w-1", "before:h-7", "before:block", "md:before:hidden", "after:hidden", "md:after:block"], [1, "border-2"], [1, "bg-theme-lightest-purple", "after:text-theme-purple", "after:fill-theme-purple", "h-full", "md:min-h-[120px]", "lg:min-h-[130px]", "flex", "flex-row", "md:flex-col", "items-center", "py-2", "px-2", "sm:text-center", "md:rounded-3xl", "rounded-xl", "after:absolute", "after:left-16", "md:after:left-1/2", "after:-translate-x-1/2", "after:-top-3", "md:after:top-auto", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')]", "md:after:w-16", "after:w-12", "md:after:-bottom-3", "after:right-1/2", "after:rotate-90", "before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')]", "before:-bottom-2", "before:left-14", "before:absolute", "before:w-1", "before:h-7", "before:block", "md:before:hidden", "after:hidden", "md:after:block"], [1, "bg-theme-lightest-purple", "after:text-theme-purple", "after:fill-theme-purple", "md:min-h-[120px]", "lg:min-h-[130px]", "flex", "flex-row", "md:flex-col", "items-center", "py-2", "px-2", "sm:text-center", "md:rounded-3xl", "rounded-xl", "after:absolute", "md:after:top-1/2", "after:-top-3", "md:after:-translate-y-1/2", "after:left-10", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')]", "md:after:w-16", "md:after:-right-8", "h-full", "after:rotate-90", "md:after:rotate-180", "md:after:left-auto", "after:w-12", "before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')]", "before:-bottom-2", "before:left-14", "before:absolute", "before:w-1", "before:h-7", "before:hidden", "after:hidden", "md:after:block"], [1, "flex", "flex-col-reverse", "justify-center", "w-auto", "gap-1", "px-2", "py-0", "border-b-0", "border-r", "md:flex-row", "md:border-b", "border-r-theme-purple-lighter", "md:border-r-0", "md:border-b-theme-purple-lighter", "md:w-full", "md:py-1"], [1, "bg-theme-lightest-purple", "after:text-theme-purple", "after:fill-theme-purple", "h-full", "md:min-h-[120px]", "lg:min-h-[130px]", "flex", "flex-row", "md:flex-col", "items-center", "py-2", "px-2", "sm:text-center", "md:rounded-3xl", "rounded-xl", "after:absolute", "md:after:top-1/2", "after:-top-3", "md:after:-translate-y-1/2", "after:left-10", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')]", "md:after:w-16", "md:after:-right-8", "after:rotate-90", "md:after:rotate-180", "md:after:left-auto", "after:w-12", "before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')]", "before:-bottom-2", "before:left-14", "before:absolute", "before:w-1", "before:h-7", "before:block", "md:before:hidden", "after:hidden", "md:after:block", 3, "ngClass"], [1, "bg-theme-lightest-purple", "after:text-theme-purple", "after:fill-theme-purple", "h-full", "md:min-h-[120px]", "lg:min-h-[130px]", "flex", "flex-row", "md:flex-col", "items-center", "py-2", "px-2", "sm:text-center", "md:rounded-3xl", "rounded-xl", "after:absolute", "md:after:top-1/2", "after:-top-3", "md:after:-translate-y-1/2", "after:left-10", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/arrow.svg')]", "md:after:w-16", "md:after:-right-8", "after:rotate-90", "md:after:rotate-180", "md:after:left-auto", "after:w-12", "before:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/packages/svg/verticle-line.svg')]", "before:-bottom-2", "before:left-14", "before:absolute", "before:w-1", "before:h-7", "before:block", "md:before:hidden", "after:hidden"]],
    template: function PackageMilestoneOfWeekComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PackageMilestoneOfWeekComponent_div_6_Template, 12, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PackageMilestoneOfWeekComponent_div_8_Template, 11, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PackageMilestoneOfWeekComponent_div_10_Template, 10, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PackageMilestoneOfWeekComponent_div_12_Template, 10, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PackageMilestoneOfWeekComponent_div_14_Template, 10, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PackageMilestoneOfWeekComponent_div_16_Template, 10, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Milestone of ", ctx.packageData == null ? null : ctx.packageData.pkg_milestone.length, " Steps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step2"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step3"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step6"]) && (ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step6"] == null ? null : ctx.packageData.pkg_milestone["step6"].desc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step5"]) && (ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step5"] == null ? null : ctx.packageData.pkg_milestone["step5"].desc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step4"]) && (ctx.packageData == null ? null : ctx.packageData.pkg_milestone["step4"] == null ? null : ctx.packageData.pkg_milestone["step4"].desc));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return PackageMilestoneOfWeekComponent;
})();


/***/ }),

/***/ 27615:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/package/components/package-payment-success/package-payment-success.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackagePaymentSuccessComponent: () => (/* binding */ PackagePaymentSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 16055);


let PackagePaymentSuccessComponent = /*#__PURE__*/(() => {
  var _class;
  class PackagePaymentSuccessComponent {
    constructor(router) {
      this.router = router;
      this.class = 'flex justify-center items-center lg:pt-[85px] flex-auto';
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
        const currentUrl = this.router.url;
        localStorage.setItem('currentUrl', currentUrl);
        this.router.navigate(['/appointment']);
      }, 5000);
    }
  }
  _class = PackagePaymentSuccessComponent;
  _class.ɵfac = function PackagePaymentSuccessComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package-payment-success"]],
    hostVars: 2,
    hostBindings: function PackagePaymentSuccessComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
      }
    },
    decls: 3,
    vars: 0,
    consts: [[1, "flex-col", "items-center", "justify-center", "text-xl", "font-bold", "font-lora", "py-80"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-page/svg/confirmation.gif", 1, "mx-auto", "w-[100px]", "h-[100px]", "md:h-[150px]", "md:w-[150px]"]],
    template: function PackagePaymentSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Booking has been confirmed\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
  return PackagePaymentSuccessComponent;
})();


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

/***/ 99913:
/*!******************************************************!*\
  !*** ./src/app/modules/package/package.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageComponent: () => (/* binding */ PackageComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_package_list_package_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/package-list/package-list.service */ 84891);
/* harmony import */ var _shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/testimonial-list/testimonial-list.service */ 32939);
/* harmony import */ var _shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/products-list/products-list.service */ 52630);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/meta-tags/meta-tags.service */ 79412);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _home_components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/components/products/products.component */ 42663);
/* harmony import */ var _components_package_testimonial_package_testimonial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/package-testimonial/package-testimonial.component */ 11175);
/* harmony import */ var _components_package_hero_section_package_hero_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/package-hero-section/package-hero-section.component */ 83884);
/* harmony import */ var _components_package_about_package_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/package-about/package-about.component */ 17493);
/* harmony import */ var _components_package_how_it_works_package_how_it_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/package-how-it-works/package-how-it-works.component */ 98727);
/* harmony import */ var _components_package_milestone_of_week_package_milestone_of_week_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/package-milestone-of-week/package-milestone-of-week.component */ 64911);
/* harmony import */ var _components_package_benifit_package_benifit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/package-benifit/package-benifit.component */ 66489);

















let PackageComponent = /*#__PURE__*/(() => {
  var _class;
  class PackageComponent {
    constructor(packageList, testimonialService, productsDataService, pageListService, activatedRoute, metaTagsService, metaService, titleService, router, GetData) {
      this.packageList = packageList;
      this.testimonialService = testimonialService;
      this.productsDataService = productsDataService;
      this.pageListService = pageListService;
      this.activatedRoute = activatedRoute;
      this.metaTagsService = metaTagsService;
      this.metaService = metaService;
      this.titleService = titleService;
      this.router = router;
      this.GetData = GetData;
      this.testimonialList = [];
      this.productList = [];
      this.GetData.Product.subscribe(res => {
        this.productList = res;
      });
    }
    ngOnInit() {
      this.packageSlug = this.activatedRoute.snapshot.paramMap.get('slug');
      this.getPackageData();
      this.getBannerdata();
    }
    /**
     * Method to service banner data
     */
    getBannerdata() {
      this.pageListService.getBannerList('package').subscribe(resp => {
        this.banners = resp?.data?.data;
      });
    }
    getPackageData() {
      this.pageListService.getMasterUserTypeBySlug('package', this.packageSlug).subscribe(resp => {
        if (resp?.success) {
          this.packageData = resp?.data?.data;
          this.getTestimonialList(resp?.data?.data?.pkg_id);
          // this.packageData?.pkg_milestone.forEach(
          //     (element, index) => {
          //         let weekArray = element.field.split(' ');
          //         element.weekTitle = weekArray[1];
          //         element.weekLabel = weekArray[0];
          //         element.index = index + 1;
          //     }
          // );
          const middleIndex = Math.abs(this.packageData?.pkg_benefits?.data?.length / 2);
          var middleGtpBenefitsData = [...this.packageData?.pkg_benefits?.data].reverse().reduce((c, v, i) => {
            if (v === this.packageData?.pkg_benefits?.data[i]) c = v;
            return c;
          }, null);
          this.packageData = {
            ...this.packageData,
            middle_gtp_benefits: middleGtpBenefitsData
          };
          this.packageData = {
            ...this.packageData,
            first_gtp_benefits: (this.packageData.pkg_benefits?.data || []).slice(0, middleIndex)
          };
          this.packageData = {
            ...this.packageData,
            second_gtp_benefits: (this.packageData.pkg_benefits?.data || []).slice(-middleIndex)
          };
          this.packageData.pkg_benefits?.data.forEach((element, index) => {
            if (index == 0) {
              element.cssClass = 'w-60 object-fit';
            } else {
              element.cssClass = 'w-full object-contain';
            }
          });
        } /*  else if (resp?.success === false) {
            this.router.navigate([PageNotFoundComponent]);
          } */
        this.setMetaTagAndTitle();
      });
    }
    getTestimonialList(id) {
      // let payload = {};
      // payload = {
      //     tmlType: APISEnum.PROGRAM,
      //     type_guid: this.packageSlug,
      // };
      this.pageListService.getTestimonialListById('testimonial', 'package', id).subscribe(res => {
        this.testimonialList = res.data.data;
        let cols = 3;
        let testimonialtempList = [];
        testimonialtempList = [...Array(cols).keys()].map(c => this.testimonialList?.filter((_, i) => i % cols === c));
        this.testimonialList = {
          ...this.testimonialList,
          testimonialFirstCol: testimonialtempList[0],
          testimonialSecondCol: testimonialtempList[1],
          testimonialthirdCol: testimonialtempList[2]
        };
      });
    }
    /**
     * Meta tag and title
     */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Program details',
        metaTitle: this.packageData?.pkg_meta?.meta_title || this.packageData?.pkg_name,
        metaDescription: this.packageData?.pkg_meta?.meta_desc,
        metaKeyword: this.packageData?.pkg_meta?.meta_keywords,
        metaImage: this.packageData?.pkg_meta?.meta_image || this.packageData?.pkg_banner_setting?.image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
    }
  }
  _class = PackageComponent;
  _class.ɵfac = function PackageComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_package_list_package_list_service__WEBPACK_IMPORTED_MODULE_1__.PackageListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_2__.TestimonialListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_3__.ProductsListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_5__.MetaTagsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_6__.GetDataService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-package"]],
    decls: 7,
    vars: 8,
    consts: [[1, "block", "lg:pt-[85px]", "bg-theme-bg-light-green-shade-1", "relative", "lg:z-10", 3, "packageData"], [1, "block", 3, "packageData"], [1, "block", "pb-64", "bg-theme-light-cream", "md:pb-48", "lg:pb-40", 3, "packageData"], [1, "block", "md:-mt-[260px]", "lg:-mt-[220px]", "sm:-mt-[280px]", "-mt-[290px]", 3, "packageData"], [3, "packageData"], [1, "block", "bg-theme-bg-light-green-shade-1", 3, "testimonialData", "testimonialConfig"], ["textColorClass", "text-theme-dark-green", "id", "gytree-product-block", 1, "block", 3, "productList"]],
    template: function PackageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-package-hero-section", 0)(1, "app-package-about", 1)(2, "app-package-how-it-works", 2)(3, "app-package-milestone-of-week", 3)(4, "app-package-benifit", 4)(5, "app-package-testimonial", 5)(6, "app-products", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("packageData", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("packageData", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("packageData", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("packageData", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("packageData", ctx.packageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("testimonialData", ctx.testimonialList)("testimonialConfig", ctx.banners == null ? null : ctx.banners.pkgp_testimonial);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("productList", ctx.productList);
      }
    },
    dependencies: [_home_components_products_products_component__WEBPACK_IMPORTED_MODULE_7__.ProductsComponent, _components_package_testimonial_package_testimonial_component__WEBPACK_IMPORTED_MODULE_8__.PackageTestimonialComponent, _components_package_hero_section_package_hero_section_component__WEBPACK_IMPORTED_MODULE_9__.PackageHeroSectionComponent, _components_package_about_package_about_component__WEBPACK_IMPORTED_MODULE_10__.PackageAboutComponent, _components_package_how_it_works_package_how_it_works_component__WEBPACK_IMPORTED_MODULE_11__.PackageHowItWorksComponent, _components_package_milestone_of_week_package_milestone_of_week_component__WEBPACK_IMPORTED_MODULE_12__.PackageMilestoneOfWeekComponent, _components_package_benifit_package_benifit_component__WEBPACK_IMPORTED_MODULE_13__.PackageBenifitComponent],
    encapsulation: 2
  });
  return PackageComponent;
})();


/***/ }),

/***/ 7012:
/*!***************************************************!*\
  !*** ./src/app/modules/package/package.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageModule: () => (/* binding */ PackageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _package_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.component */ 99913);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _components_package_hero_section_package_hero_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/package-hero-section/package-hero-section.component */ 83884);
/* harmony import */ var _components_package_about_package_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/package-about/package-about.component */ 17493);
/* harmony import */ var _components_package_how_it_works_package_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/package-how-it-works/package-how-it-works.component */ 98727);
/* harmony import */ var _components_package_milestone_of_week_package_milestone_of_week_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/package-milestone-of-week/package-milestone-of-week.component */ 64911);
/* harmony import */ var _components_package_benifit_package_benifit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/package-benifit/package-benifit.component */ 66489);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _book_now_page_components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../book-now-page/components/price-box/price-box.module */ 11978);
/* harmony import */ var _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/components/products/home-products.module */ 6267);
/* harmony import */ var _components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/package-testimonial/package-testimonial.module */ 3216);
/* harmony import */ var src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/image-lazy-load/image-lazy-load.module */ 1914);
/* harmony import */ var src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/safe-pipe/safe-pipe.module */ 53547);
/* harmony import */ var _components_package_checkout_package_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/package-checkout/package-checkout.component */ 43931);
/* harmony import */ var _components_package_payment_stepper_package_payment_stepper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/package-payment-stepper/package-payment-stepper.component */ 11957);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var _components_package_select_dates_package_select_dates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/package-select-dates/package-select-dates.component */ 94130);
/* harmony import */ var _components_package_consent_model_package_consent_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/package-consent-model/package-consent-model.component */ 25924);
/* harmony import */ var _components_package_payment_success_package_payment_success_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/package-payment-success/package-payment-success.component */ 27615);
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/services/auth/auth.guard */ 47800);
/* harmony import */ var src_app_shared_services_pending_changes_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/pending-changes.guard */ 17166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 78371);

























const routes = [{
  path: '',
  component: _package_component__WEBPACK_IMPORTED_MODULE_0__.PackageComponent
}, {
  path: ':slug/package-checkout',
  canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard],
  canDeactivate: [src_app_shared_services_pending_changes_guard__WEBPACK_IMPORTED_MODULE_18__.PendingChangesGuard],
  component: _components_package_checkout_package_checkout_component__WEBPACK_IMPORTED_MODULE_12__.PackageCheckoutComponent
}, {
  path: 'success',
  canDeactivate: [src_app_shared_services_pending_changes_guard__WEBPACK_IMPORTED_MODULE_18__.PendingChangesGuard],
  canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__.AuthGuard],
  component: _components_package_payment_success_package_payment_success_component__WEBPACK_IMPORTED_MODULE_16__.PackagePaymentSuccessComponent
}];
let PackageModule = /*#__PURE__*/(() => {
  var _class;
  class PackageModule {}
  _class = PackageModule;
  _class.ɵfac = function PackageModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(routes), ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGModule, ngx_splide__WEBPACK_IMPORTED_MODULE_22__.NgxSplideModule, _book_now_page_components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_7__.PriceBoxModule, _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_8__.HomeProductModule, _components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_9__.PackageTestimonialModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_10__.ImageLazyLoadModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_11__.SafePipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule]
  });
  return PackageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](PackageModule, {
    declarations: [_package_component__WEBPACK_IMPORTED_MODULE_0__.PackageComponent, _components_package_hero_section_package_hero_section_component__WEBPACK_IMPORTED_MODULE_1__.PackageHeroSectionComponent, _components_package_about_package_about_component__WEBPACK_IMPORTED_MODULE_2__.PackageAboutComponent, _components_package_how_it_works_package_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__.PackageHowItWorksComponent, _components_package_milestone_of_week_package_milestone_of_week_component__WEBPACK_IMPORTED_MODULE_4__.PackageMilestoneOfWeekComponent, _components_package_benifit_package_benifit_component__WEBPACK_IMPORTED_MODULE_5__.PackageBenifitComponent, _components_package_checkout_package_checkout_component__WEBPACK_IMPORTED_MODULE_12__.PackageCheckoutComponent, _components_package_payment_stepper_package_payment_stepper_component__WEBPACK_IMPORTED_MODULE_13__.PackagePaymentStepperComponent, _components_package_select_dates_package_select_dates_component__WEBPACK_IMPORTED_MODULE_14__.PackageSelectDatesComponent, _components_package_consent_model_package_consent_model_component__WEBPACK_IMPORTED_MODULE_15__.PackageConsentModelComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGModule, ngx_splide__WEBPACK_IMPORTED_MODULE_22__.NgxSplideModule, _book_now_page_components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_7__.PriceBoxModule, _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_8__.HomeProductModule, _components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_9__.PackageTestimonialModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_10__.ImageLazyLoadModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_11__.SafePipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 31166:
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/services/coupon/coupon.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CouponService: () => (/* binding */ CouponService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let CouponService = /*#__PURE__*/(() => {
  var _class;
  class CouponService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    couponValidate(data) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlUser}master/coupon/validate`;
      return this.post(url, data);
    }
  }
  _class = CouponService;
  _class.ɵfac = function CouponService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return CouponService;
})();


/***/ }),

/***/ 24927:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/services/order-insertion/order-insertion.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderInsertionService: () => (/* binding */ OrderInsertionService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let OrderInsertionService = /*#__PURE__*/(() => {
  var _class;
  class OrderInsertionService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    onGifttransaction(payload) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlUser}order/membership/gift`;
      return this.post(url, payload);
    }
    onCheckOutValidation(payload) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlUser}order/checkout`;
      return this.post(url, payload);
    }
    onCheckOutThyrocareValidation(payload) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlUser}order/labtest/thyrocare/validate`;
      return this.post(url, payload);
    }
  }
  _class = OrderInsertionService;
  _class.ɵfac = function OrderInsertionService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return OrderInsertionService;
})();


/***/ }),

/***/ 84891:
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/services/package-list/package-list.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackageListService: () => (/* binding */ PackageListService)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);




let PackageListService = /*#__PURE__*/(() => {
  var _class;
  class PackageListService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
  }
  _class = PackageListService;
  _class.ɵfac = function PackageListService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return PackageListService;
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

/***/ 32910:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/services/razorpay-window-ref/razorpay-window-ref.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RazorpayWindowRefService: () => (/* binding */ RazorpayWindowRefService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);

function _window() {
  return window;
}
let RazorpayWindowRefService = /*#__PURE__*/(() => {
  var _class;
  class RazorpayWindowRefService {
    constructor() {}
    get nativeWindow() {
      return _window();
    }
  }
  _class = RazorpayWindowRefService;
  _class.ɵfac = function RazorpayWindowRefService_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return RazorpayWindowRefService;
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

/***/ 53434:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/services/transaction-order/transaction-order.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionOrderService: () => (/* binding */ TransactionOrderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let TransactionOrderService = /*#__PURE__*/(() => {
  var _class;
  class TransactionOrderService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    transactionSuccess(body, type) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlUser}order/${type}/success`;
      return this.post(url, body);
    }
    transactionThyrocareSuccess(body) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlUser}order/labtest/thyrocare/success`;
      return this.post(url, body);
    }
  }
  _class = TransactionOrderService;
  _class.ɵfac = function TransactionOrderService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return TransactionOrderService;
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

/***/ 17166:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/pending-changes.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingChangesGuard: () => (/* binding */ PendingChangesGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2859);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data.service */ 87595);



let PendingChangesGuard = /*#__PURE__*/(() => {
  var _class;
  class PendingChangesGuard {
    constructor(GetData) {
      this.GetData = GetData;
    }
    canDeactivate(component) {
      if (this.GetData.paymentCompleted) {
        return true;
      } else {
        /*  history.pushState(null, null, location.href);
         window.onpopstate = function () {
           history.go(1);
         }; */
        const result = confirm('ALERT: Changes that you made may not be saved.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(result);
      }
    }
  }
  _class = PendingChangesGuard;
  _class.ɵfac = function PendingChangesGuard_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_get_data_service__WEBPACK_IMPORTED_MODULE_0__.GetDataService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return PendingChangesGuard;
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