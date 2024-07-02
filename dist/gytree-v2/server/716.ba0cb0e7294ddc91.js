exports.id = 716;
exports.ids = [716];
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

/***/ 55017:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-about/consultation-about.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationAboutComponent: () => (/* binding */ ConsultationAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);


let ConsultationAboutComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationAboutComponent {}
  _class = ConsultationAboutComponent;
  _class.ɵfac = function ConsultationAboutComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation-about"]],
    inputs: {
      consultationDetails: "consultationDetails"
    },
    decls: 7,
    vars: 2,
    consts: [[1, "container", "relative", "mb-14"], [1, "absolute", "w-16", "h-16", "right-20", "md:right-auto", "md:left-1/4", "lg:-top-12", "md:-top-7", "text-theme-purple-lighter", "md:w-[80px]", "md:h-[100px]", "z-[1]", 3, "inlineSVG"], [1, "relative"], [1, "sm:text-center", "font-lora", "text-2xl", "sm:text-[30px]", "font-extrabold", "pb-4", "text-theme-purple", "sm:pb-8", "pt-10"], [1, "sm:text-center", "text-[21px]", "sm:w-1/2", "font-roboto", "sm:mx-auto"]],
    template: function ConsultationAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/about-top-bg.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_about, "");
      }
    },
    dependencies: [ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective],
    encapsulation: 2
  });
  return ConsultationAboutComponent;
})();


/***/ }),

/***/ 32593:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-benefits/consultation-benefits.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationBenefitsComponent: () => (/* binding */ ConsultationBenefitsComponent)
/* harmony export */ });
/* harmony import */ var _consultation_benifit_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultation-benifit.constant */ 59781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-splide */ 10080);





function ConsultationBenefitsComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14)(2, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 16);
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
function ConsultationBenefitsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 19);
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
function ConsultationBenefitsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14)(2, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 16);
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
function ConsultationBenefitsComponent_splide_slide_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "splide-slide", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r6 == null ? null : slide_r6.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r6 == null ? null : slide_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
let ConsultationBenefitsComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationBenefitsComponent {
    constructor() {
      this.expertBenifitSliderConfig = _consultation_benifit_constant__WEBPACK_IMPORTED_MODULE_0__.EXPERT_BENIFIT_SLIDER_CONFIG;
    }
    configureImageClass(arrowImage) {
      return arrowImage === 'up' ? 'border-t' : 'border-b mt-5';
    }
    configureSlidePosClass(arrowImage) {
      return arrowImage === 'up' ? 'flex-col-reverse pt-6' : 'flex-col pb-6';
    }
  }
  _class = ConsultationBenefitsComponent;
  _class.ɵfac = function ConsultationBenefitsComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation-benefits"]],
    inputs: {
      gytreeBenefits: "gytreeBenefits"
    },
    decls: 18,
    vars: 8,
    consts: [[1, "container"], [1, "mx-auto"], [1, ""], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/image/flower-img.png", "alt", "", 1, "absolute"], [1, "md:text-center", "md:py-16", "relative", "font-bold", "lg:text-[30px]", "font-lora", "text-[25px]", "py-12", "text-theme-purple"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/experts-page/images/benefits-top.svg", 1, "absolute", "w-12", "h-12", "md:h-20", "md:w-20", "md:top-0", "lg:top-3", "top-10", "lg:left-[32%]", "xl:left-[36%]", "md:left-[30%]", "left-[38%]", "text-theme-purple-thum-icon"], [1, "xl:w-[70%]", "lg:w-full", "mx-auto", "md:block", "hidden"], [1, "flex", "flex-col", "gap-8"], [4, "ngFor", "ngForOf"], ["class", "inset-x-0 bg-gradient-to-b from-theme-base-light-purple pointer-events-none to-theme-extra-light-purple md:rounded-[40px] rounded-[30px] w-full flex-auto justify-center items-center flex flex-col", 4, "ngIf"], [1, "block", "sm:container", "md:hidden"], [1, "pb-12", "wrraper"], [1, "benefit-slider", 3, "options"], ["class", "grid grid-cols-1 p-10 md:grid-cols-4", 4, "ngFor", "ngForOf"], [1, "inset-x-0", "bg-gradient-to-b", "h-1/2", "from-theme-base-light-purple", "pointer-events-none", "to-theme-extra-light-purple", "md:rounded-[40px]", "rounded-[30px]", "w-full", "flex", "flex-col", "justify-between", "items-center"], [1, "py-3", "px-2", "text-xl", "font-bold", "text-center", "font-roboto", "lg:text-2xl"], ["alt", "", 1, "w-auto", "h-[135px]", "mx-auto", 3, "src"], [1, "inset-x-0", "bg-gradient-to-b", "from-theme-base-light-purple", "pointer-events-none", "to-theme-extra-light-purple", "md:rounded-[40px]", "rounded-[30px]", "w-full", "flex-auto", "justify-center", "items-center", "flex", "flex-col"], [1, "py-3", "text-xl", "h-[135px]", "font-bold", "text-center", "font-roboto", "lg:text-2xl"], ["alt", "", 1, "object-contain", "object-bottom", "h-[135px]", "md:flex-auto", 3, "src"], [1, "grid", "grid-cols-1", "p-10", "md:grid-cols-4"], [1, "slide-container", "inset-x-0", "bg-gradient-to-b", "from-theme-base-light-purple", "pointer-events-none", "to-theme-extra-light-purple", "font-bold", "rounded-[20px]", "w-auto", "flex", "justify-center", "transition-all", "px-5", "h-full", "overflow-hidden"], [1, "group", "flex", "flex-col", "rounded-[20px]", "md:px-6"], [1, "h-full", "py-5", "mx-auto", "sm:font-semibold", "font-bold", "text-center", "sm:text-2xl", "text-[12px]", "leading-tight"], [1, "flex-auto", "h-[120px]", "shrink-0"], ["alt", "gallery", 1, "object-cover", "object-center", "w-auto", "h-full", "slide-img", 3, "src"]],
    template: function ConsultationBenefitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Benefits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div")(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ConsultationBenefitsComponent_ng_container_10_Template, 5, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ConsultationBenefitsComponent_div_11_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ConsultationBenefitsComponent_ng_container_13_Template, 5, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "splide", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ConsultationBenefitsComponent_splide_slide_17_Template, 7, 2, "splide-slide", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("grid gap-8 md:grid-cols-", "3", " mb-14");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.first_gtp_benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.middle_benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.second_gtp_benefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.expertBenifitSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.consultationDetail == null ? null : ctx.gytreeBenefits.consultationDetail.gt_consult_benefits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_4__.NgxSplideSlideComponent],
    encapsulation: 2
  });
  return ConsultationBenefitsComponent;
})();


/***/ }),

/***/ 59781:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-benefits/consultation-benifit.constant.ts ***!
  \********************************************************************************************************/
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
      padding: 60,
      gap: 30
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

/***/ }),

/***/ 82170:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-hero-section/consultation-hero-section.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationHeroSectionComponent: () => (/* binding */ ConsultationHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 79457);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);









function ConsultationHeroSectionComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Per Consult");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 44)(11, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConsultationHeroSectionComponent_div_47_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.redirectToNextPage(ctx_r1.consultationDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Book Consultation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.consultationDetails == null ? null : ctx_r0.consultationDetails.cns_sell_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", ctx_r0.consultationDetails == null ? null : ctx_r0.consultationDetails.cns_standard_price, "");
  }
}
let ConsultationHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationHeroSectionComponent {
    // Box visible
    onScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollY >= 200 ? this.scrolled = true : this.scrolled = false;
      if (window.scrollY >= scrollableHeight) this.scrolled = false;
    }
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_0___default().init({});
      this.GetData.bookingQuestionData.next({});
    }
    constructor(router, GetData, doctorsListService, pageListService, eventTrackingService) {
      this.router = router;
      this.GetData = GetData;
      this.doctorsListService = doctorsListService;
      this.pageListService = pageListService;
      this.eventTrackingService = eventTrackingService;
      this.subscriptions = [];
      //  this.getDoctorsList();
    }
    // getDoctorsList() {
    //     this.subscriptions.push(
    //         this.doctorsListService.getDoctorsList().subscribe((data) => {
    //             if (data?.success) {
    //                 this.doctorsList =
    //                     data?.data?.data[this.doctorData?.doctor?.gtd_type];
    //                 if (this.doctorsList)
    //                     this.selectedDoctorDetails = this.doctorsList.find(
    //                         (element: any) =>
    //                             element.gtd_slug ===
    //                             this.doctorData?.doctor?.gtd_slug
    //                     );
    //             }
    //         })
    //     );
    // }
    getQuestionList(id, consultationDetails) {
      this.subscriptions.push(this.pageListService.getQuestionsList(id).subscribe(data => {
        if (data.data.status == 401) {
          localStorage.setItem('URL', JSON.stringify('consultation/' + this.doctorData?.cns_slug));
          return;
        }
        if (data?.success) {
          this.questionsList = data?.data?.data?.qg_question_list;
          if (this.questionsList?.length > 0 || this.doctorData?.cns_doctor?.gtd_is_questions) {
            this.router.navigate(['payment/select-issues', this.doctorData?.cns_slug], {
              queryParams: {
                // type: this.doctorData?.cns_doctor?.gtd_type,
                // service:true
              }
            });
          } else if (this.questionsList?.length <= 0 || !this.doctorData?.cns_doctor?.gtd_is_questions) {
            this.router.navigate(['payment/select-dates', this.doctorData?.cns_slug], {
              queryParams: {
                //  type: this.doctorData?.cns_doctor?.gtd_type,
                // service:true
              }
            });
          }
          const value = {
            Name: this.doctorData?.doctor?.gtd_fullname,
            cost: this.doctorData?.doctor?.gtd_consultation_price,
            type: this.doctorData?.doctor?.gtd_type,
            time: this.doctorData?.doctor?.gtd_consultation_time
          };
          this.eventTrackingService.trackWebEnagegeEvent('Buy Consultation', value);
          this.eventTrackingService.trackEvent('Buy Consultation', value);
        } else {
          this.router.navigate(['payment/select-dates', this.doctorData?.cns_slug], {
            queryParams: {
              //  type: this.doctorData?.cns_doctor?.gtd_type,
              // service:true
            }
          });
          const value = {
            Name: this.doctorData?.doctor?.gtd_fullname,
            cost: this.doctorData?.doctor?.gtd_consultation_price,
            type: this.doctorData?.doctor?.gtd_type,
            time: this.doctorData?.doctor?.gtd_consultation_time
          };
          this.eventTrackingService.trackWebEnagegeEvent('Buy Consultation', value);
          this.eventTrackingService.trackEvent('Buy Consultation', value);
        }
      }));
    }
    redirectToNextPage(consultationDetails) {
      localStorage.setItem('consultationDetails', JSON.stringify(consultationDetails));
      // localStorage.setItem('doctorType', JSON.stringify(this.doctorData?.cns_doctor?.gtd_type));
      localStorage.setItem('service', JSON.stringify(true));
      this.getQuestionList(consultationDetails?.cns_doctor?.dr_prof_details?.dr_fk_dgn_id, consultationDetails);
    }
  }
  _class = ConsultationHeroSectionComponent;
  _class.ɵfac = function ConsultationHeroSectionComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_2__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_3__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_4__.EventTrackingService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation-hero-section"]],
    hostBindings: function ConsultationHeroSectionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function ConsultationHeroSectionComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      consultationDetails: "consultationDetails",
      doctorData: "doctorData"
    },
    decls: 48,
    vars: 9,
    consts: [[1, "container", "py-16", "sm:py-16"], [1, "grid", "md:grid-cols-2"], [1, "relative", "flex", "items-center", "justify-center", "hero-sec-text"], [1, "w-full", "sm:w-[70%]"], [1, "mb-4", "text-[32px]", "font-bold", "text-center", "lg:mb-6", "md:mb-5", "lg:text-3xl", "md:text-left", "xl:text-6xl", "text-theme-purple", "font-lora", "!leading-tight"], [1, "flex", "items-center", "justify-center", "mb-4", "lg:mb-6", "md:mb-5", "md:justify-start"], [1, "flex", "items-center", "w-3", "h-6", "sm:w-6", "font-roboto", "me-3", 3, "inlineSVG"], [1, "md:text-2xl", "font-roboto", "text-[16px]", "sm:text-[23px]"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-2", "mb-4", "md:flex-row", "lg:mb-9", "md:mb-5", "md:justify-start"], [1, "inline-flex", "items-center", "gap-2"], [1, "font-roboto", "text-theme-purple", "text-[18px]", "pt-1.5", "sm:text-[22px]"], [1, "text-[27px]", "sm:text-3xl", "font-bold", "font-roboto", "text-theme-purple", "me-3"], [1, "sm:text-xl", "text-[16px]", "me-3", "text-theme-light-blue-grey", "font-roboto"], [1, "me-3", "font-roboto", "text-[15px]", "sm:text-[15px]", "text-large", "block", "sm:inline"], [1, "flex", "justify-center", "w-full", "mb-10", "text-center", "md:mb-0", "thrive-button", "md:text-left", "md:justify-start"], [1, "group", "border", "border-1", "border-transparent", "rounded-full", "md:py-1.5", "px-5", "text-[18px]", "md:px-8", "text-base", "md:text-xl", "lg:text-[22px]", "flex", "gap-3", "font-roboto", "py-2", "justify-center", "text-white", "mt-3", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", "transition-all", "duration-300", 3, "click"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/did-you-know/up-right.svg", 1, "mt-2", "transition-transform", "fill-white", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], [1, "absolute", "sm:h-[51px]", "sm:w-[51px]", "sm:left-0", "sm:right-auto", "lg:right-20", "top-[40%]", "-left-[16px]", "lg:left-auto", "text-theme-purple-thum-icon", "md:h-15", "md:w-15", "h-10", "w-10"], ["width", "51", "height", "51", "viewBox", "0 0 51 51", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "mask0_2176_85208", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "51", "height", "51", 2, "mask-type", "luminance"], ["d", "M0 0H51V51H0V0Z", "fill", "white"], ["mask", "url(#mask0_2176_85208)"], ["d", "M50.1815 32.8091C50.3808 31.2018 49.2157 30.0606 47.7877 29.4343C48.2309 29.162 48.6383 28.8354 49.0006 28.4621C50.9792 26.4524 49.9903 24.065 47.7877 22.7876C43.6703 20.3762 36.3773 22.9079 34.9572 16.8644C34.311 14.1072 34.9572 11.0695 34.295 8.24062C33.7444 5.90976 32.5634 2.86331 30.1457 1.89112C27.1455 0.709352 25.684 3.24979 25.3095 5.99024C24.9349 8.7307 25.7406 10.9245 24.7357 13.6171C23.7273 16.3779 21.9966 18.8175 19.7242 20.6814C17.426 22.4585 14.0504 23.6713 12.1116 25.8659C10.3957 25.9204 8.67807 25.8879 6.96541 25.7687C5.1302 25.5679 3.31891 25.1981 1.50681 25.0619C1.41999 25.0816 1.34165 25.1284 1.28297 25.1953C1.22429 25.2623 1.18829 25.3461 1.18009 25.4348C1.17158 25.5233 1.19077 25.6122 1.23503 25.6893C1.27929 25.7664 1.34642 25.8278 1.42713 25.8651C4.47597 26.4604 8.12247 27.4732 11.3379 27.007C10.8159 27.9735 10.5835 29.0699 10.6685 30.165C10.6685 30.7276 11.553 30.7762 11.561 30.165C11.6327 24.6355 18.5113 23.5589 21.7514 20.2718C23.859 18.1293 25.4024 15.4976 26.2434 12.6123C26.3231 12.3158 26.3868 12.0154 26.4347 11.7118C26.8745 12.1092 27.4491 12.3246 28.0418 12.3142C28.6346 12.3039 29.2012 12.0686 29.6269 11.656C31.1506 10.2336 31.5418 7.26763 31.5179 5.00212C33.4886 7.51706 33.4248 11.7604 33.5045 14.8069C33.4006 16.5652 33.8741 18.3094 34.8528 19.7738C35.3596 20.5419 36.0315 21.1871 36.8195 21.6624C37.6068 22.1357 38.4882 22.4274 39.4014 22.5142C36.5287 22.9724 33.0902 23.9526 32.2678 26.0508C31.71 27.4732 32.5706 28.4613 33.7683 29.1283C31.9889 30.2615 28.9807 32.6569 30.2732 34.9718C30.831 35.9759 32.0686 36.5791 33.5364 36.956C31.9411 37.5592 30.4087 38.5641 30.7362 40.4846C30.9992 42.0042 32.22 42.9445 33.6798 43.5151C32.2997 44.0291 31.039 45.018 31.0868 46.6651C31.0919 47.3055 31.35 47.9179 31.8048 48.3689C29.0046 49.0119 26.6905 47.8628 24.0807 46.7616C21.5387 45.7851 18.8216 45.3474 16.1016 45.4762C10.5155 45.4762 5.11267 45.8133 0.221453 48.6342C0.122932 48.7024 0.0513318 48.8029 0.0190297 48.9183C-0.0132723 49.0337 -0.00424648 49.1567 0.0445472 49.2661C0.0926705 49.3752 0.177335 49.4641 0.283956 49.5175C0.390576 49.5709 0.512477 49.5854 0.628657 49.5586C7.09131 47.3807 12.6782 46.199 19.6126 46.8014C24.193 47.1959 27.8316 50.3865 32.4431 48.8757C33.7854 49.514 35.2373 49.8902 36.7207 49.9841C40.1672 50.4591 45.825 50.4591 47.7718 46.85C48.1338 46.2175 48.2827 45.4854 48.1966 44.7617C48.1105 44.038 47.794 43.3613 47.2937 42.8314C48.0389 42.39 48.6465 41.7499 49.0484 40.9826C49.4946 40.114 49.5942 39.106 49.3257 38.1657C49.0585 37.2275 48.4427 36.4269 47.6044 35.928C48.2658 35.6762 48.8504 35.2569 49.301 34.7112C49.7531 34.1637 50.0564 33.508 50.1815 32.8091ZM29.8899 8.27329C29.8338 8.73049 29.7378 9.18191 29.603 9.6224L29.1321 10.6273C28.4778 11.6393 27.6156 11.4313 26.563 10.0487V9.01996C26.563 7.78242 26.4673 5.25074 27.2323 4.19807C27.3616 3.95938 27.5411 3.75157 27.7585 3.58896C27.9759 3.42635 28.2259 3.31281 28.4914 3.25616C28.7562 3.20033 29.0301 3.20313 29.2937 3.26439C29.5573 3.32566 29.8043 3.44388 30.0174 3.61077C30.0164 3.63228 30.0164 3.65382 30.0174 3.67532C30.113 5.20851 30.0708 6.74727 29.8899 8.27329ZM35.723 24.4427C37.5173 23.5935 39.4351 23.0348 41.4048 22.7876C42.761 22.9645 44.5484 22.7876 45.6816 23.5024C47.5 24.7001 47.2371 27.5935 45.6019 28.855C45.4741 28.8482 45.3471 28.8788 45.2364 28.943C45.1257 29.0073 45.0362 29.1024 44.9787 29.2168L44.8831 29.2646C42.9045 30.0208 40.2389 29.8598 38.1886 29.6192C37.3431 29.5228 35.978 29.5228 35.2282 29.0566C33.2655 27.8429 33.8878 25.4714 35.7222 24.4506L35.723 24.4427ZM42.6009 48.6183C40.9159 49.0934 39.1559 49.2435 37.4148 49.0605C36.3325 49.0318 35.2589 48.8587 34.2225 48.5458C31.8287 47.5258 32.9619 44.6889 34.9333 43.9239C35.9661 44.1757 37.0227 44.3183 38.085 44.351C40.623 44.5041 43.1687 44.2321 45.617 43.5462C48.4659 46.3113 44.0536 48.168 42.6009 48.6183ZM46.0322 39.5124C46.4147 40.7101 46.3191 41.5213 45.7692 41.9636C45.6729 41.9662 45.5785 41.9916 45.4939 42.0378C45.4093 42.0839 45.3368 42.1494 45.2823 42.2289C45.1499 42.2726 45.0139 42.3046 44.8759 42.3246C44.0775 42.7836 41.38 43.1294 40.8294 43.1772C39.7281 43.3854 38.6055 43.4582 37.4865 43.394L33.4966 42.366C31.6988 39.3379 32.3028 37.6533 35.3079 37.3098H35.3557C37.2642 37.517 39.1886 37.5409 41.1011 37.3823C42.6949 37.2684 44.2743 36.999 45.817 36.5791C46.8378 37.117 46.9343 38.0581 46.0322 39.5124ZM45.4744 35.3407C43.8223 35.9426 42.0957 36.3158 40.3425 36.45C38.7783 36.5695 37.2044 36.5153 35.6513 36.2898C33.5763 35.9918 33.4488 36.0723 32.6112 33.7741C31.4669 32.5628 31.486 31.6337 32.667 30.985C33.1653 30.43 33.7601 29.97 34.4225 29.6271C34.4593 29.6035 34.4917 29.5735 34.5182 29.5387C35.2935 29.8551 36.0944 30.1045 36.912 30.2862C39.7887 31.0177 42.7969 31.0512 45.6888 30.3818C46.2089 30.5153 46.7027 30.7357 47.1494 31.0336C49.9823 33.6936 46.8147 34.8427 45.4736 35.3328L45.4744 35.3407Z", "fill", "#A9A9FB"], ["d", "M40.0519 15.6988C42.1078 12.073 44.5701 8.60657 46.4269 4.86922C46.459 4.81013 46.4681 4.74118 46.4522 4.6758C46.4363 4.61041 46.3967 4.55327 46.341 4.51549C46.2854 4.47772 46.2176 4.462 46.151 4.47141C46.0844 4.48083 46.0236 4.51469 45.9806 4.56641C43.2792 7.75391 41.3109 11.6506 39.4303 15.3322C39.3991 15.414 39.3982 15.5042 39.4278 15.5865C39.4573 15.6689 39.5153 15.738 39.5914 15.7813C39.6674 15.8246 39.7564 15.8393 39.8423 15.8227C39.9283 15.8061 40.0054 15.7593 40.0598 15.6908L40.0519 15.6988ZM43.08 16.3841C45.3306 14.1079 47.4283 11.6854 49.3594 9.13251C49.5506 8.86954 49.1522 8.57469 48.9211 8.78188C46.6419 11.0055 44.5122 13.3774 42.5461 15.882C42.5129 15.9191 42.4873 15.9623 42.4709 16.0093C42.4545 16.0562 42.4476 16.106 42.4506 16.1556C42.4535 16.2053 42.4663 16.2539 42.4882 16.2986C42.5101 16.3432 42.5406 16.3831 42.578 16.4159C42.6151 16.449 42.6583 16.4743 42.7053 16.4906C42.7522 16.5069 42.8019 16.5137 42.8515 16.5108C42.9011 16.5078 42.9496 16.4951 42.9943 16.4734C43.039 16.4516 43.0789 16.4213 43.1119 16.3841H43.08Z", "fill", "#A9A9FB"], [1, "mx-auto", "w-fit"], [1, "relative", "inset-0", "w-full", "h-full", "px-2"], ["alt", "", 1, "object-contain", "h-full", "px-5", "md:object-left", "sm:px-16", "md:px-0", "lg:px-0", "max-h-[700px]", "w-auto", 3, "src"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "after:absolute", "sm:px-5", "sm:py-4", "px-3", "py-3", "text-theme-purple", "md:after:top-[calc(100%-10px)]", "after:top-[calc(100%-5px)]", "after:right-0", "after:left-1/2", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/triangle.svg')]", "after:w-6", "after:h-6", "after:inline-block", "md:w-40", "w-[7.5rem]", "lg:w-40", "text-center", "font-bold", "leading-tight", "text-base", "lg:text-xl", "md:text-xl", "right-0", "sm:right-28", "md:right-2", "top-4", "md:top-0", "sm:top-4", "absolute", "bg-white", "lg:px-5", "lg:py-5", "shadow-2xl", "font-lora", "rounded-xl"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/hero-sec-glitter.svg", 1, "absolute", "z-20", "w-8", "h-8", "right-2", "-top-5"], [1, "absolute", "-bottom-10", "lg:-bottom-16", "-right-2", "lg:-right-8"], ["width", "61", "height", "61", "viewBox", "0 0 61 61", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-[34px]", "h-[34px]", "lg:w-[60px]", "lg:h-[60px]"], ["id", "mask0_2176_85229", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "61", "height", "61", 2, "mask-type", "luminance"], ["d", "M0 0H61V61H0V0Z", "fill", "white"], ["mask", "url(#mask0_2176_85229)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M47.4352 45.9706C54.9363 45.9897 62.0657 51.3367 60.8648 59.2667C62.1957 47.4774 48.4215 44.6567 40.7523 48.5513C39.9879 52.8042 37.6498 59.4973 34.5776 55.073C32.3015 51.7952 36.0916 49.242 40.2093 47.6847C39.8853 43.3094 38.8411 40.3264 38.0728 38.1318C38.056 38.0837 38.0393 38.0359 38.0227 37.9885C35.0966 28.6003 29.2115 17.9678 16.8208 21.2466C15.3687 21.6782 13.9779 22.2729 12.6734 23.015C11.5747 32.6056 6.80654 41.3096 2.30476 39.1844C-4.06212 36.2202 5.50726 26.2981 7.91866 24.1536C8.94681 23.2484 10.0503 22.4346 11.2065 21.7315C11.639 13.8592 8.72731 4.80307 0.741413 3.22055C-0.183118 3.07758 -0.0589952 1.555 0.74163 1.48828C10.3709 2.65822 13.3431 11.7972 12.8584 20.8209C18.5426 18.001 25.1719 17.8632 30.3457 22.4475C36.1026 27.5467 40.4679 38.4028 41.0112 45.9134C41.0361 46.2557 41.0061 46.7835 40.9258 47.4246C43.6348 46.4807 46.3419 45.9706 47.4352 45.9706ZM10.9704 24.1023C9.74928 24.9727 8.6253 25.9832 7.62319 27.1178C6.11373 28.758 4.75184 30.5282 3.55335 32.4077C0.95078 38.2198 6.81609 36.8442 8.63351 31.0352C9.76902 29.2615 10.5749 26.816 10.9704 24.1023ZM38.0943 50.7442C37.2841 51.3231 36.3058 52.0776 35.9818 52.5193C35.4261 53.2772 35.8555 54.4899 37.1178 54.035C38.1276 53.6711 38.7183 51.3236 38.8874 50.1953C38.782 50.2656 38.6603 50.3481 38.5277 50.4397C38.3928 50.5328 38.2465 50.6354 38.0943 50.7442Z", "fill", "#C3C3F6"], [1, "", 2, "background-image", "url(https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/images/triangle.png)"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "px-1", "py-3", "shadow-2xl", "after:absolute", "md:after:-bottom-[19px]", "after:-bottom-[15px]", "after:left-1/2", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/triangle.svg')]", "after:inline-block", "md:w-36", "w-28", "lg:w-40", "text-center", "font-bold", "leading-tight", "text-base", "lg:text-xl", "sm:left-16", "md:left-5", "lg:-left-8", "left-0", "md:text-xl", "bottom-[60%]", "lg:bottom-[60%]", "absolute", "bg-white", "rounded-xl", "font-lora", "text-theme-purple"], ["class", "fixed bottom-0 left-0 right-0 z-30 flex w-full gap-5 px-4 py-5 bg-white shadow-sm opacity-100 lg:hidden", 4, "ngIf"], [1, "fixed", "bottom-0", "left-0", "right-0", "z-30", "flex", "w-full", "gap-5", "px-4", "py-5", "bg-white", "shadow-sm", "opacity-100", "lg:hidden"], [1, "font-roboto"], [1, "text-theme-brown", "pt-2", "px-1", "text-[15px]"], [1, "font-bold", "text-[22px]", "mr-1", "text-theme-brown"], [1, "pt-2", "mx-2", "line-through"], [1, "font-roboto", "px-3", "flex-wrap", "text-[15px]", "whitespace-nowrap"], [1, "w-full", "text-end"], [1, "justify-center", "px-4", "py-1.5", "text-lg", "text-white", "border", "border-transparent", "rounded-full", "group", "border-1", "font-roboto", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", 3, "click"]],
    template: function ConsultationHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "del", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Per Consult");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConsultationHeroSectionComponent_Template_button_click_21_listener() {
          return ctx.redirectToNextPage(ctx.consultationDetails);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Buy Consultation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div")(25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "svg", 18)(27, "mask", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "path", 22)(31, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 24)(33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "svg", 30)(40, "mask", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 35)(45, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, ConsultationHeroSectionComponent_div_47_Template, 13, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/watch-icon.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_duration, " mins Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_sell_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u20B9", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_standard_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_banner == null ? null : ctx.consultationDetails.cns_banner.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_banner == null ? null : ctx.consultationDetails.cns_banner.left_section == null ? null : ctx.consultationDetails.cns_banner.left_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.consultationDetails == null ? null : ctx.consultationDetails.cns_banner == null ? null : ctx.consultationDetails.cns_banner.right_section == null ? null : ctx.consultationDetails.cns_banner.right_section.desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.scrolled);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__.InlineSVGDirective],
    encapsulation: 2
  });
  return ConsultationHeroSectionComponent;
})();


/***/ }),

/***/ 8750:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-how-it-works/consultation-how-it-works.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationHowItWorksComponent: () => (/* binding */ ConsultationHowItWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);



function ConsultationHowItWorksComponent_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const consultationHowItWorks_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", consultationHowItWorks_r2 == null ? null : consultationHowItWorks_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](consultationHowItWorks_r2 == null ? null : consultationHowItWorks_r2.title);
  }
}
function ConsultationHowItWorksComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConsultationHowItWorksComponent_div_7_ng_container_1_Template, 5, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.gytreeBenefits == null ? null : ctx_r0.gytreeBenefits.cns_how_it_work == null ? null : ctx_r0.gytreeBenefits.cns_how_it_work.data);
  }
}
let ConsultationHowItWorksComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationHowItWorksComponent {}
  _class = ConsultationHowItWorksComponent;
  _class.ɵfac = function ConsultationHowItWorksComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation-how-it-works"]],
    inputs: {
      gytreeBenefits: "gytreeBenefits"
    },
    decls: 8,
    vars: 2,
    consts: [[1, "container"], [1, "lg:w-[60%]", "md:w-[80%]", "mx-auto"], [1, "relative", "pb-12"], [1, "px-2", "py-8", "text-2xl", "font-extrabold", "sm:text-center", "md:py-12", "font-lora", "sm:text-3xl", "text-theme-purple"], [1, "absolute", "right-0", "sm:right-20", "top-5", "text-theme-purple-thum-icon", 3, "inlineSVG"], ["class", "flex-col flex-wrap justify-center py-4 md:flex md:flex-row", 4, "ngIf"], [1, "flex-col", "flex-wrap", "justify-center", "py-4", "md:flex", "md:flex-row"], [4, "ngFor", "ngForOf"], [1, "flex", "w-full", "gap-3", "mb-5", "md:w-1/2", "md:mb-14"], [1, "flex-shrink-0", "w-10", "h-10", "text-theme-purple", 3, "src"], [1, "font-roboto", "text-[16px]", "sm:text-[21px]"]],
    template: function ConsultationHowItWorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " How it Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ConsultationHowItWorksComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/how-it-works/svg/top-icon.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gytreeBenefits == null ? null : ctx.gytreeBenefits.cns_how_it_work == null ? null : ctx.gytreeBenefits.cns_how_it_work.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective],
    encapsulation: 2
  });
  return ConsultationHowItWorksComponent;
})();


/***/ }),

/***/ 17707:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-product/consultation-product.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationProductComponent: () => (/* binding */ ConsultationProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function ConsultationProductComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const productsData_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", productsData_r1 == null ? null : productsData_r1.prdct_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", productsData_r1 == null ? null : productsData_r1.prdct_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", productsData_r1 == null ? null : productsData_r1.gtsp_variant, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", productsData_r1 == null ? null : productsData_r1.gtsp_price, "");
  }
}
let ConsultationProductComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationProductComponent {}
  _class = ConsultationProductComponent;
  _class.ɵfac = function ConsultationProductComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation-product"]],
    inputs: {
      productList: "productList"
    },
    decls: 10,
    vars: 1,
    consts: [[1, "mx-auto", "md:container", "lg:pt-12"], [1, "flex", "flex-wrap", "justify-center", "w-full", "mx-auto", "lg:w-1/2"], [1, "flex", "items-center", "justify-between", "w-full", "px-5", "md:px-0"], [1, "text-theme-purple", "font-lora", "md:text-[30px]", "sm:text-[20px]", "font-extrabold", "text-[23px]"], ["href", "https://shop.gytree.com/", "target", "_blank", 1, "lg:text-[23px]", "sm:text-[20px]", "text-theme-hot-pink", "text-[16px]", "hover:underline", "hover:duration-75", "cursor-pointer"], [1, "flex", "justify-between", "gap-3", "px-5", "py-10", "md:gap-10", "md:px-0"], ["class", "flex flex-col flex-wrap w-1/3", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "flex-wrap", "w-1/3"], ["alt", "gallery", 1, "block", "object-cover", "object-center", "w-full", "rounded-lg", 3, "src"], [1, "pt-5", "lg:text-[23px]", "sm:text-[20px]", "text-[13px]", "leading-tight", "font-lora", "text-black", "font-roboto", "font-normal"], [1, ""], [1, "text-theme-purple", "lg:text-[27px]", "md:text-[23px]", "text-[16px]", "pt-1", "font-roboto", "font-bold"]],
    template: function ConsultationProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Gytree Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConsultationProductComponent_div_9_Template, 9, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    encapsulation: 2
  });
  return ConsultationProductComponent;
})();


/***/ }),

/***/ 71626:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/consultation/components/consultation-testimonial/components/consultation-testimonial-box/consultation-testimonial-box.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationTestimonialBoxComponent: () => (/* binding */ ConsultationTestimonialBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);



function ConsultationTestimonialBoxComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function ConsultationTestimonialBoxComponent_div_10_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 12)(3, "g", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 14)(5, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ConsultationTestimonialBoxComponent_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConsultationTestimonialBoxComponent_div_10_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r1 - 0.5 <= ctx_r3.testimonial.tstm_rating);
  }
}
function ConsultationTestimonialBoxComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConsultationTestimonialBoxComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConsultationTestimonialBoxComponent_div_10_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r1 <= ctx_r0.testimonial.tstm_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r1 > ctx_r0.testimonial.tstm_rating);
  }
}
let ConsultationTestimonialBoxComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationTestimonialBoxComponent {
    constructor() {
      this.class = "block lg:pb-7 last:pb-0";
      this.arrayFromNum = n => Array(n);
      /**
        * rating data
        */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
  }
  _class = ConsultationTestimonialBoxComponent;
  _class.ɵfac = function ConsultationTestimonialBoxComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation-testimonial-box"]],
    hostVars: 2,
    hostBindings: function ConsultationTestimonialBoxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class);
      }
    },
    inputs: {
      testimonial: "testimonial"
    },
    decls: 11,
    vars: 4,
    consts: [[1, "relative", "px-3", "py-3", "font-roboto", "bg-white", "lg:py-4", "lg:px-6", "rounded-2xl", "lg:rounded-[26px]", "text-sm", "md:text-sm", "lg:text-base"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/others/chatbox-bottom-arrow.png", "alt", "", 1, "absolute", "top-[calc(100%-1px)]", "left-5"], [1, "flex", "items-center", "pt-3", "lg:pt-4"], [1, "w-8", "h-8", "lg:h-12", "lg:w-12", "me-3"], ["alt", "", 1, "w-3/4", "rounded-full", "h-3/4", 3, "src"], [1, "text-[12px]", "font-medium", "lg:text-xl", "sm:text-normal", "font-roboto"], [1, "flex", "items-center"], ["class", "block w-4 h-4 lg:w-6 lg:h-6 text-theme-yellow", 4, "ngFor", "ngForOf"], [1, "block", "w-4", "h-4", "lg:w-6", "lg:h-6", "text-theme-yellow"], [4, "ngIf"], [1, "block", "w-5", "h-5", "text-theme-yellow", "[&>svg]:w-full", "[&>svg]:h-full", 3, "inlineSVG"], [1, "block", "w-5", "h-5", "[&>svg]:h-full", "[&>svg]:w-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["clip-path", "url(#clip0_3650_1917)"], ["d", "M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z", 1, "fill-theme-yellow"], ["d", "M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                    0V10.1538L11.3078 13.2918L9.65674 8.2149Z", 1, "fill-gray-500"]],
    template: function ConsultationTestimonialBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ConsultationTestimonialBoxComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.testimonial == null ? null : ctx.testimonial.tstm_desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.testimonial == null ? null : ctx.testimonial.tstm_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.testimonial == null ? null : ctx.testimonial.tstm_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.feedBackStar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective],
    encapsulation: 2
  });
  return ConsultationTestimonialBoxComponent;
})();


/***/ }),

/***/ 17419:
/*!****************************************************************!*\
  !*** ./src/app/modules/consultation/consultation.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationComponent: () => (/* binding */ ConsultationComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/products-list/products-list.service */ 52630);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/testimonial-list/testimonial-list.service */ 32939);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _shared_services_service_banner_list_service_banner_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/service-banner-list/service-banner-list.service */ 61231);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/meta-tags/meta-tags.service */ 79412);
/* harmony import */ var _package_components_package_testimonial_package_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../package/components/package-testimonial/package-testimonial.component */ 11175);
/* harmony import */ var _home_components_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/components/products/products.component */ 42663);
/* harmony import */ var _components_consultation_about_consultation_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/consultation-about/consultation-about.component */ 55017);
/* harmony import */ var _components_consultation_how_it_works_consultation_how_it_works_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/consultation-how-it-works/consultation-how-it-works.component */ 8750);
/* harmony import */ var _components_consultation_hero_section_consultation_hero_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/consultation-hero-section/consultation-hero-section.component */ 82170);
/* harmony import */ var _components_consultation_benefits_consultation_benefits_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/consultation-benefits/consultation-benefits.component */ 32593);
















let ConsultationComponent = /*#__PURE__*/(() => {
  var _class;
  class ConsultationComponent {
    constructor(productListService, GetData, testimonialService, titleService, route, serviceBannerList, pageListService, metaService, metaTagsService) {
      this.productListService = productListService;
      this.GetData = GetData;
      this.testimonialService = testimonialService;
      this.titleService = titleService;
      this.route = route;
      this.serviceBannerList = serviceBannerList;
      this.pageListService = pageListService;
      this.metaService = metaService;
      this.metaTagsService = metaTagsService;
      this.productList = [];
      this.testimonialList = [];
      this.gytreeBenefits = [];
      this.doctorDetails = [];
      this.gytreeHowItworks = [];
      this.isDataVisible = {
        gytreeProducts: false,
        gytreeTestimonial: false,
        gytreeBenefits: false
      };
      this.GetData.Product.subscribe(res => {
        this.productList = res;
      });
    }
    /**
     * Method to scroll data
     */
    // @HostListener('window:scroll', ['$event'])
    // onScroll(e: any) {
    //     this.allScrollEvents();
    // }
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.helpWithId = params['params'].slug;
      });
      this.getConsulatationdata(this.helpWithId);
      this.getBannerdata();
      // this.getProductListData();
    }

    getBannerdata() {
      this.pageListService.getBannerList('consultation').subscribe(resp => {
        this.banners = resp?.data?.data;
      });
    }
    getConsulatationdata(id) {
      this.pageListService.getMasterConsultIdList('consultation', id).subscribe(resp => {
        if (resp?.success) {
          this.getTestimonialList(resp?.data?.data?.cns_id);
          this.consultationDetails = resp?.data?.data;
          this.consultationId = resp?.data?.data?.cns_id;
          this.setMetaTagAndTitle();
          this.doctorDetails = resp?.data?.data;
          this.gytreeBenefits = resp?.data?.data?.cns_benefit;
          // if (
          //     JSON.parse(localStorage.getItem('selectedValue')) ==
          //     'consultation'
          // ) {
          const middleIndex = Math.abs(this.gytreeBenefits?.data?.length / 2);
          var middleGtpBenefitsData = [...this.gytreeBenefits?.data].reverse().reduce((c, v, i) => {
            if (v === this.gytreeBenefits?.data[i]) c = v;
            return c;
          }, null);
          this.gytreeBenefits = {
            ...this.gytreeBenefits,
            middle_benefits: middleGtpBenefitsData
          };
          this.gytreeBenefits = {
            ...this.gytreeBenefits,
            first_gtp_benefits: (this.gytreeBenefits?.data || []).slice(0, middleIndex)
          };
          this.gytreeBenefits = {
            ...this.gytreeBenefits,
            second_gtp_benefits: (this.gytreeBenefits?.data || []).slice(-middleIndex)
          };
          // } 
          // else if (
          //     JSON.parse(localStorage.getItem('selectedValue')) ==
          //     'package'
          // ) {
          //         const middleIndex = Math.abs(
          //             this.gytreeBenefits?.package?.gtp_benefits?.length /
          //             2
          //         );
          //         var middleGtpBenefitsData = [
          //             ...this.gytreeBenefits?.package?.gtp_benefits,
          //         ]
          //             .reverse()
          //             .reduce((c, v, i) => {
          //                 if (
          //                     v ===
          //                     this.gytreeBenefits?.package?.gtp_benefits[
          //                     i
          //                     ]
          //                 )
          //                     c = v;
          //                 return c;
          //             }, null);
          //         this.gytreeBenefits = {
          //             ...this.gytreeBenefits,
          //             middle_benefits: middleGtpBenefitsData,
          //         };
          //         this.gytreeBenefits = {
          //             ...this.gytreeBenefits,
          //             first_gtp_benefits: (
          //                 this.gytreeBenefits?.package?.gtp_benefits || []
          //             ).slice(0, middleIndex),
          //         };
          //         this.gytreeBenefits = {
          //             ...this.gytreeBenefits,
          //             second_gtp_benefits: (
          //                 this.gytreeBenefits?.package?.gtp_benefits || []
          //             ).slice(-middleIndex),
          //         };
          //     }
        }
      });
    }

    allScrollEvents() {
      // this.getProductScrollEvent();
    }
    getTestimonialList(id) {
      this.pageListService.getTestimonialListById('testimonial', 'consultation', id).subscribe(res => {
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
    getProductScrollEvent() {
      var offsets = document.getElementById('gytree-products-service-block').getBoundingClientRect();
      var top = offsets.top;
      if (top < 1200 && !this.isDataVisible.gytreeProducts) {
        this.GetData.storedHomeData.subscribe(res => {
          if (!res?.gytreeProducts || res?.gytreeProducts === null) {
            this.getProductListData();
          } else {
            this.productList = res?.gytreeProducts;
          }
        });
        this.isDataVisible.gytreeProducts = true;
      }
    }
    getProductListData() {
      this.pageListService.getMasterUserList('product').subscribe(res => {
        if (res?.success) {
          this.productList = res?.data?.data;
        }
      });
    }
    /**
    * Meta tag and title
    */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Consultation',
        metaTitle: this.consultationDetails?.cns_meta?.meta_title || this.consultationDetails?.cns_name,
        metaDescription: this.consultationDetails?.cns_meta?.meta_desc || this.consultationDetails?.cns_desc,
        metaKeyword: this.consultationDetails?.cns_meta?.meta_keywords,
        metaImage: this.consultationDetails?.cns_meta?.meta_image || this.consultationDetails?.cns_banner?.image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
      // this.metaTagsService?.metaTags.subscribe((res) => {
      //     if (res) {
      //         let metaData = res?.data?.filter((ele) => {
      //             return ele.meta_type === MetaTagsEnum.HOME;
      //         });
      //         const data = {
      //             title: 'Gytree - Consultation',
      //             metaTitle: metaData[0]?.gmt_title,
      //             metaDescription: metaData[0]?.gmt_desc,
      //             metaKeyword: metaData[0]?.gmt_keywords,
      //             metaImage: metaData[0]?.gmt_image,
      //         };
      //         CommonUtil.setMetaTagAndTitle(
      //             this.titleService,
      //             this.metaService,
      //             data
      //         );
      //     }
      // });
    }
  }
  _class = ConsultationComponent;
  _class.ɵfac = function ConsultationComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_products_list_products_list_service__WEBPACK_IMPORTED_MODULE_1__.ProductsListService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_testimonial_list_testimonial_list_service__WEBPACK_IMPORTED_MODULE_3__.TestimonialListService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_service_banner_list_service_banner_list_service__WEBPACK_IMPORTED_MODULE_4__.ServiceBannerListService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_5__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_6__.MetaTagsService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-consultation"]],
    decls: 6,
    vars: 8,
    consts: [[1, "block", "lg:pt-[85px]", "bg-theme-extra-light-purple", "relative", "lg:z-10", 3, "consultationDetails", "doctorData"], [1, "block", 3, "consultationDetails"], ["id", "gytree-benefits-block", 1, "block", "bg-theme-extra-light-purple", 3, "gytreeBenefits"], ["id", "gytree-benefits-block", 1, "block", 3, "gytreeBenefits"], ["gredientClassesTop", "from-theme-extra-light-purple to-theme-extra-light-purple/0", "gredientClassesBottom", "from-theme-extra-light-purple to-theme-extra-light-purple/0", "id", "gytree-testimonial-block", 1, "block", "bg-theme-extra-light-purple", 3, "testimonialData", "testimonialConfig"], ["textColorClass", "text-theme-purple", "id", "gytree-products-service-block", 1, "block", 3, "productList"]],
    template: function ConsultationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-consultation-hero-section", 0)(1, "app-consultation-about", 1)(2, "app-consultation-how-it-works", 2)(3, "app-consultation-benefits", 3)(4, "app-package-testimonial", 4)(5, "app-products", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("consultationDetails", ctx.consultationDetails)("doctorData", ctx.doctorDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("consultationDetails", ctx.consultationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("gytreeBenefits", ctx.consultationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("gytreeBenefits", ctx.gytreeBenefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("testimonialData", ctx.testimonialList)("testimonialConfig", ctx.banners == null ? null : ctx.banners.cnsp_testimonial);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("productList", ctx.productList);
      }
    },
    dependencies: [_package_components_package_testimonial_package_testimonial_component__WEBPACK_IMPORTED_MODULE_7__.PackageTestimonialComponent, _home_components_products_products_component__WEBPACK_IMPORTED_MODULE_8__.ProductsComponent, _components_consultation_about_consultation_about_component__WEBPACK_IMPORTED_MODULE_9__.ConsultationAboutComponent, _components_consultation_how_it_works_consultation_how_it_works_component__WEBPACK_IMPORTED_MODULE_10__.ConsultationHowItWorksComponent, _components_consultation_hero_section_consultation_hero_section_component__WEBPACK_IMPORTED_MODULE_11__.ConsultationHeroSectionComponent, _components_consultation_benefits_consultation_benefits_component__WEBPACK_IMPORTED_MODULE_12__.ConsultationBenefitsComponent],
    encapsulation: 2
  });
  return ConsultationComponent;
})();


/***/ }),

/***/ 47716:
/*!*************************************************************!*\
  !*** ./src/app/modules/consultation/consultation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationModule: () => (/* binding */ ConsultationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _consultation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultation.component */ 17419);
/* harmony import */ var _components_consultation_about_consultation_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/consultation-about/consultation-about.component */ 55017);
/* harmony import */ var _components_consultation_how_it_works_consultation_how_it_works_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/consultation-how-it-works/consultation-how-it-works.component */ 8750);
/* harmony import */ var _components_consultation_hero_section_consultation_hero_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/consultation-hero-section/consultation-hero-section.component */ 82170);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _components_consultation_benefits_consultation_benefits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/consultation-benefits/consultation-benefits.component */ 32593);
/* harmony import */ var _components_consultation_product_consultation_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/consultation-product/consultation-product.component */ 17707);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _components_consultation_testimonial_components_consultation_testimonial_box_consultation_testimonial_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/consultation-testimonial/components/consultation-testimonial-box/consultation-testimonial-box.component */ 71626);
/* harmony import */ var _book_now_page_components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../book-now-page/components/price-box/price-box.module */ 11978);
/* harmony import */ var _package_components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../package/components/package-testimonial/package-testimonial.module */ 3216);
/* harmony import */ var _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/components/products/home-products.module */ 6267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 78371);
















const routes = [{
  path: '',
  component: _consultation_component__WEBPACK_IMPORTED_MODULE_0__.ConsultationComponent
}];
let ConsultationModule = /*#__PURE__*/(() => {
  var _class;
  class ConsultationModule {}
  _class = ConsultationModule;
  _class.ɵfac = function ConsultationModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule, ngx_splide__WEBPACK_IMPORTED_MODULE_14__.NgxSplideModule, _book_now_page_components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_8__.PriceBoxModule, _package_components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_9__.PackageTestimonialModule, _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_10__.HomeProductModule]
  });
  return ConsultationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ConsultationModule, {
    declarations: [_consultation_component__WEBPACK_IMPORTED_MODULE_0__.ConsultationComponent, _components_consultation_about_consultation_about_component__WEBPACK_IMPORTED_MODULE_1__.ConsultationAboutComponent, _components_consultation_how_it_works_consultation_how_it_works_component__WEBPACK_IMPORTED_MODULE_2__.ConsultationHowItWorksComponent, _components_consultation_hero_section_consultation_hero_section_component__WEBPACK_IMPORTED_MODULE_3__.ConsultationHeroSectionComponent, _components_consultation_benefits_consultation_benefits_component__WEBPACK_IMPORTED_MODULE_5__.ConsultationBenefitsComponent, _components_consultation_product_consultation_product_component__WEBPACK_IMPORTED_MODULE_6__.ConsultationProductComponent, _components_consultation_testimonial_components_consultation_testimonial_box_consultation_testimonial_box_component__WEBPACK_IMPORTED_MODULE_7__.ConsultationTestimonialBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule, ngx_splide__WEBPACK_IMPORTED_MODULE_14__.NgxSplideModule, _book_now_page_components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_8__.PriceBoxModule, _package_components_package_testimonial_package_testimonial_module__WEBPACK_IMPORTED_MODULE_9__.PackageTestimonialModule, _home_components_products_home_products_module__WEBPACK_IMPORTED_MODULE_10__.HomeProductModule]
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

/***/ })

};
;