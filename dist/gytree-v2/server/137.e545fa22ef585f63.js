exports.id = 137;
exports.ids = [137];
exports.modules = {

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

/***/ 479:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/terms-and-conditions/components/tc-content/tc-content.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TcContentComponent: () => (/* binding */ TcContentComponent)
/* harmony export */ });
/* harmony import */ var _tc_content_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tc-content.constant */ 40122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/safe-pipe/safe.pipe */ 66654);




const _c0 = function (a0, a1) {
  return {
    "font-medium rounded-full border-theme-purple-lighter": a0,
    "border-transparent text-theme-lighter-grey": a1
  };
};
function TcContentComponent_div_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TcContentComponent_div_4_button_3_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const index_r4 = restoredCtx.index;
      const term_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.tcClick($event, index_r4, term_r3 == null ? null : term_r3.tcc_id, ctx_r5.convertInId(term_r3 == null ? null : term_r3.tcc_id)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const term_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", term_r3 == null ? null : term_r3.tcc_id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r2.selectedItem === index_r4, ctx_r2.selectedItem !== index_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (term_r3 == null ? null : term_r3.tcc_sort_order) + ". " + (term_r3 == null ? null : term_r3.tcc_title), " ");
  }
}
function TcContentComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TcContentComponent_div_4_button_3_Template, 2, 6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.banners == null ? null : ctx_r0.banners.tc_content == null ? null : ctx_r0.banners.tc_content.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.termsAndConditionData);
  }
}
function TcContentComponent_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16)(2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const term_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", term_r10 == null ? null : term_r10.tcc_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((term_r10 == null ? null : term_r10.tcc_sort_order) + ". " + (term_r10 == null ? null : term_r10.tcc_title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, term_r10 == null ? null : term_r10.tcc_desc), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function TcContentComponent_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23)(9, "div", 24)(10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.banners == null ? null : ctx_r8.banners.tc_middle_content == null ? null : ctx_r8.banners.tc_middle_content.ask_button == null ? null : ctx_r8.banners.tc_middle_content.ask_button.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.banners == null ? null : ctx_r8.banners.tc_middle_content == null ? null : ctx_r8.banners.tc_middle_content.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.banners == null ? null : ctx_r8.banners.tc_middle_content == null ? null : ctx_r8.banners.tc_middle_content.desc, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r8.banners == null ? null : ctx_r8.banners.tc_middle_content == null ? null : ctx_r8.banners.tc_middle_content.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.banners == null ? null : ctx_r8.banners.tc_middle_content == null ? null : ctx_r8.banners.tc_middle_content.right_section == null ? null : ctx_r8.banners.tc_middle_content.right_section.text, " ");
  }
}
function TcContentComponent_div_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16)(2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const term_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", term_r11 == null ? null : term_r11.tcc_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((term_r11 == null ? null : term_r11.tcc_sort_order) + ". " + (term_r11 == null ? null : term_r11.tcc_title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, term_r11 == null ? null : term_r11.tcc_desc), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function TcContentComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TcContentComponent_div_5_ng_container_6_Template, 6, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TcContentComponent_div_5_div_7_Template, 14, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TcContentComponent_div_5_ng_container_8_Template, 6, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.banners == null ? null : ctx_r1.banners.tc_content == null ? null : ctx_r1.banners.tc_content.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, ctx_r1.banners == null ? null : ctx_r1.banners.tc_content == null ? null : ctx_r1.banners.tc_content.desc), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.termsAndConditionData.slice(0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.banners == null ? null : ctx_r1.banners.tc_middle_content == null ? null : ctx_r1.banners.tc_middle_content.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.termsAndConditionData.slice(2));
  }
}
let TcContentComponent = /*#__PURE__*/(() => {
  var _class;
  class TcContentComponent {
    constructor() {
      this.termsAndConditions = _tc_content_constant__WEBPACK_IMPORTED_MODULE_0__.TERMS_AND_CONDITIONS;
      this.selectedItem = 0;
      this.selectedtermsTitle = 'definition';
    }
    ngOnChanges(changes) {
      // this.termsAndConditionData =
      //     changes['termsAndConditionData']?.currentValue?.gtmp_value;
      // const general = document?.getElementById('general');
      // const promotionCard = document.getElementById('promotionCard');
    }
    tcClick(event, faqTypeData, data, id) {
      this.selectedItem = faqTypeData;
      this.selectedtermsTitle = data?.replace(/\s/g, '')?.toLowerCase();
      const element = document.getElementById(this.convertInId(id));
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    convertInId(value) {
      return value?.replaceAll(' ', '')?.toLowerCase();
    }
  }
  _class = TcContentComponent;
  _class.ɵfac = function TcContentComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-tc-content"]],
    inputs: {
      termsAndConditionData: "termsAndConditionData",
      banners: "banners"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 6,
    vars: 2,
    consts: [[1, "container"], [1, "pb-12"], [1, "grid-cols-12", "pt-5", "text-left", "sm:grid"], [1, "col-span-3", "px-3"], ["class", "text-lg font-roboto flex items-center gap-3 pb-2 sm:pb-0 sm:block sticky top-0 lg:top-[85px] max-h-screen lg:max-h-[calc(100vh-85px)] overflow-auto styled-scrollbar hover-scroll-visible", 4, "ngIf"], ["class", "col-span-9 px-3 pt-5 text-base sm:text-lg font-roboto", 4, "ngIf"], [1, "text-lg", "font-roboto", "flex", "items-center", "gap-3", "pb-2", "sm:pb-0", "sm:block", "sticky", "top-0", "lg:top-[85px]", "max-h-screen", "lg:max-h-[calc(100vh-85px)]", "overflow-auto", "styled-scrollbar", "hover-scroll-visible"], [1, "py-2", "sm:mt-4", "text-theme-lighter-grey", "whitespace-nowrap"], ["class", "block px-2 py-1 text-left border sm:w-full sm:mb-2 last:mb-0 whitespace-nowrap sm:truncate", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "block", "px-2", "py-1", "text-left", "border", "sm:w-full", "sm:mb-2", "last:mb-0", "whitespace-nowrap", "sm:truncate", 3, "title", "ngClass", "click"], [1, "col-span-9", "px-3", "pt-5", "text-base", "sm:text-lg", "font-roboto"], [1, "pb-5"], [1, "pb-0", "text-3xl", "font-bold", "text-theme-purple", "font-lora"], [1, "ql-editor", 3, "innerHTML"], [4, "ngFor", "ngForOf"], ["id", "promotionCard", "class", "grid grid-cols-12 px-10 my-5 bg-theme-purple-lighter rounded-3xl pt-7  justify-end items-end", 4, "ngIf"], [1, "pb-0", 3, "id"], [1, "text-3xl", "font-bold", "text-theme-purple", "font-lora", "py-5"], ["id", "promotionCard", 1, "grid", "grid-cols-12", "px-10", "my-5", "bg-theme-purple-lighter", "rounded-3xl", "pt-7", "justify-end", "items-end"], [1, "col-span-12", "text-center", "sm:text-start", "pb-2", "md:pb-7", "md:text-start", "lg:col-span-8"], ["target", "_blank", 1, "inline-block", "px-4", "py-1", "my-3", "border", "border-black", "rounded-full", "font-roboto"], [1, "pt-4", "text-xl", "font-bold", "text-center", "xl:text-2xl", "md:text-xl", "lg", "sm:w-full", "sm:text-left", "sm:text-xl", "font-lora"], [1, "pt-4", "text-center", "md:text-start", "text-base", "sm:w-full", "font-roboto"], [1, "col-span-12", "mt-5", "lg:col-span-4", "sm:mt-0"], [1, "relative"], [1, "relative", "w-fit", "mr-auto", "ml-auto", "md:ml-0", "sm:mx-auto", "lg:mx-0"], ["alt", "", 1, "relative", "z-[5]", "lg:mx-0", 3, "src"], [1, "absolute", "px-4", "py-5", "text-base", "font-bold", "text-center", "bg-white", "xl:w-40", "xl:text-xl", "xl:right-[-80px]", "2xl:right-[-80px]", "lg:top-20", "lg:right-[-60px]", "lg:w-36", "w-32", "sm:w-32", "sm:text-xl", "md:top-24", "md:w-36", "md:-right-16", "md:text-base", "top-20", "-right-8", "sm:right-8", "sm:top-10", "text-theme-purple", "font-lora", "rounded-lg", "md:rounded-b-xl", "md:rounded-tl-none", "md:rounded-tr-xl", "z-10"]],
    template: function TcContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TcContentComponent_div_4_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TcContentComponent_div_5_Template, 9, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.termsAndConditionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.banners);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_safe_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe],
    encapsulation: 2
  });
  return TcContentComponent;
})();


/***/ }),

/***/ 40122:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/terms-and-conditions/components/tc-content/tc-content.constant.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TERMS_AND_CONDITIONS: () => (/* binding */ TERMS_AND_CONDITIONS),
/* harmony export */   cardHtml: () => (/* binding */ cardHtml)
/* harmony export */ });
const TERMS_AND_CONDITIONS = [{
  id: 1.,
  title: 'Definition'
}, {
  id: 2.,
  title: 'General'
}, {
  id: 3.,
  title: 'Services'
}, {
  id: 4.,
  title: 'Use of the Platform'
}, {
  id: 5.,
  title: 'User Obligations'
}, {
  id: 6.,
  title: 'Registration'
}, {
  id: 7.,
  title: 'Use of Services'
}, {
  id: 8.,
  title: 'Content'
}, {
  id: 9.,
  title: 'Booking Services'
}, {
  id: 10.,
  title: 'Payments Related Information'
}, {
  id: 11.,
  title: 'Cancellation and Refund policy'
}, {
  id: 12.,
  title: 'Disclaimers of Warranty and Limitation of Liability'
}, {
  id: 13.,
  title: 'Term and Termination'
}, {
  id: 14.,
  title: 'Governing Law and Jurisdiction'
}, {
  id: 15.,
  title: 'Report Abuse and Take Down Policy'
}, {
  id: 16.,
  title: 'General Provisions'
}];
const cardHtml = '<div id="promotionCard" class="flex items-center col-span-9 px-3 pt-5 text-base sm:text-lg font-roboto"> <div class="grid grid-cols-12 px-10 my-5 bg-theme-purple-lighter rounded-3xl pt-7"> <div class="col-span-12 text-center sm:text-start md:text-start sm:col-span-8"> <div class="inline-block px-4 py-1 border border-black rounded-full"> Legal </div> <div class="pt-4 mb-5 text-xl font-bold text-center xl:text-2xl md:text-xl lg sm:w-full sm:text-left sm:text-xl font-lora"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div> </div> <div class="col-span-12 mt-5 sm:col-span-4 sm:mt-0 flex lg:block items-end"> <div class="relative"> <img src="https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/t&c-img/tc.png" alt="" class=""> <div class="absolute p-2 text-sm font-bold text-center bg-white xl:w-32 xl:text-xl xl:right-0 2xl:right-10 lg:top-10 lg:right-0 lg:w-24 w-28 sm:w-32 sm:text-xl md:top-2 md:w-24 md:-right-8 md:text-sm top-2 -right-4 sm:right-8 sm:top-10 text-theme-purple font-lora rounded-xl"> Root cause Analysis </div> </div> </div> </div> </div>';

/***/ }),

/***/ 24077:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/terms-and-conditions/components/tc-hero-section/tc-hero-section.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TcHeroSectionComponent: () => (/* binding */ TcHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);

let TcHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class TcHeroSectionComponent {}
  _class = TcHeroSectionComponent;
  _class.ɵfac = function TcHeroSectionComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-tc-hero-section"]],
    inputs: {
      banners: "banners"
    },
    decls: 31,
    vars: 4,
    consts: [[1, "hero-sec-wrapper"], [1, "container"], [1, "grid", "md:grid-cols-2"], [1, "flex", "items-center", "justify-center", "py", "hero-sec-text", "lg:py-2"], [1, "w-full", "sm:w-[70%]", "relative", "sm:px-0", "px-10"], [1, "absolute", "top-4", "left-72", "sm:left-0", "sm:-top-5"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/faqs-page-images/flower-icon.png", "alt", "", 1, "w-1/2", "md:w-full"], [1, "px-1", "py-8", "text-4xl", "font-bold", "text-center", "sm:text-left", "sm:px-2", "xl:leading-snug", "sm:text-4xl", "text-theme-purple", "lg:mb-5", "lg:text-3xl", "xl:text-6xl", "font-lora"], [1, "flex", "justify-center"], [1, "relative", "pt-8", "pl-0", "sm:pt-20", "sm:pl-24", "md:pl-20", "hero-image", "w-fit"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/faqs-page-images/faq-page-icon.svg", 1, "absolute", "-right-0", "md:top-14", "top-4", "w-[100px]", "h-[100px]"], [1, "absolute", "left-0", "top-36", "sm:-left-9", "lg:top-72", "sm:top-56", "md:top-40"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/t&c-img/round-icon.svg", "alt", ""], [1, "inset-0", "top-0", "w-full", "h-full", "sm:top-20", "left-8", "sm:left-20", "sm:h-5/6"], ["alt", "", 3, "src"], [1, "absolute"], [1, "relative"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "after:absolute", "px-3", "py-2", "2xl:-top-80", "2xl:-right-80", "xl:-top-80", "xl:-right-60", "text-theme-purple", "md:after:top-[calc(100%-10px)]", "after:top-[calc(100%-5px)]", "lg:-right-60", "lg:-top-64", "after:right-0", "after:left-1/2", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/t&c-img/triangle.svg')]", "after:w-6", "after:h-6", "after:inline-block", "md:w-32", "w-28", "p-2", "lg:w-40", "text-center", "font-bold", "leading-tight", "text-base", "lg:text-xl", "md:text-xl", "right-52", "sm:right-96", "md:-right-44", "-top-52", "md:-top-52", "sm:-top-64", "absolute", "bg-white", "lg:px-5", "lg:py-5", "shadow-2xl", "font-lora", "rounded-xl"], [1, "absolute", "sm:-right-8", "-right-0", "-top-2", "sm:-top-2", "xl:-top-2", "xl:-right-20"], ["width", "30", "height", "30", "viewBox", "0 0 21 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.4683 6.06394C9.69936 6.0068 7.57043 3.62952 7.20459 1.01705C7.19412 0.94933 7.16166 0.88691 7.1122 0.839368C7.07501 0.803618 7.0297 0.777377 6.98014 0.762887C6.93058 0.748397 6.87824 0.746087 6.82758 0.756156C6.77693 0.766225 6.72948 0.788373 6.68927 0.820709C6.64906 0.853044 6.6173 0.894607 6.59669 0.941847C5.49139 3.89382 2.97555 6.09601 0.267555 7.63798C-0.206566 7.90892 0.0103544 8.61927 0.444935 8.60858C2.38909 10.5361 5.09746 12.3207 5.74896 15.1547C5.76485 15.2498 5.81437 15.3364 5.88939 15.3987C5.96423 15.4613 6.05875 15.4955 6.15638 15.4955C6.25402 15.4955 6.34854 15.4613 6.42337 15.3987C6.49788 15.3367 6.54769 15.2501 6.5638 15.1547C7.37088 11.6103 9.24298 8.43716 12.7185 6.91694C13.1383 6.70609 12.8844 6.07463 12.4683 6.06394ZM6.10779 13.7196C5.60595 12.7226 4.99134 11.7862 4.27597 10.9287C3.55167 10.033 2.59604 8.73723 1.46635 8.07333C3.84878 6.64563 5.97734 4.82903 6.89713 2.24126C7.59556 4.3148 8.98245 6.05288 11.0715 6.6954C8.45733 8.23036 6.98397 10.8572 6.10779 13.7196Z", "fill", "#A9A9FB"], ["d", "M20.4612 13.1751C18.3086 13.0808 16.9003 11.3585 16.5499 9.36721C16.5244 9.22528 16.302 9.16741 16.2506 9.32371C15.4738 11.5981 13.9266 13.5169 11.6099 14.3345C11.3217 14.4362 11.4821 14.8358 11.7522 14.803C12.7127 15.3111 13.5561 16.014 14.2281 16.8666C14.8997 17.7187 15.3848 18.7017 15.6523 19.7522C15.661 19.8 15.6862 19.8432 15.7236 19.8743C15.7609 19.9054 15.808 19.9224 15.8567 19.9224C15.9053 19.9224 15.9525 19.9054 15.9898 19.8743C16.0272 19.8432 16.0524 19.8 16.061 19.7522C16.6885 17.0959 17.9948 14.7706 20.5816 13.6075C20.8041 13.5021 20.6655 13.1825 20.4612 13.1751Z", "fill", "#FF2EAE"], ["data-aos", "zoom-in", "data-aos-delay", "800", "data-aos-duration", "500", "data-aos-once", "true", 1, "white-box", "after:absolute", "lg:-top-44", "lg:right-[-31.75rem]", "2xl:right-[-42.75rem]", "2xl:-top-52", "px-3", "py-2", "xl:-top-52", "xl:right-[-37.75rem]", "text-theme-purple", "md:after:top-[calc(100%-10px)]", "after:top-[calc(100%-5px)]", "after:right-0", "after:left-1/2", "after:content-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/t&c-img/triangle.svg')]", "after:w-6", "after:h-6", "after:inline-block", "md:w-32", "w-28", "lg:w-40", "text-center", "font-bold", "leading-tight", "text-base", "lg:text-xl", "md:text-xl", "-right-1", "sm:right-8", "md:-right-[100%]", "top-[-7.25rem]", "md:-top-32", "sm:-top-40", "absolute", "bg-white", "lg:px-5", "lg:py-5", "shadow-2xl", "font-lora", "rounded-xl"], [1, "absolute", "right-0", "-top-2"], ["width", "21", "height", "20", "viewBox", "0 0 21 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"]],
    template: function TcHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14)(17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16)(19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 20)(24, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 20)(30, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.tc_title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.banners == null ? null : ctx.banners.tc_banner == null ? null : ctx.banners.tc_banner.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.tc_banner == null ? null : ctx.banners.tc_banner.left_section == null ? null : ctx.banners.tc_banner.left_section.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.banners == null ? null : ctx.banners.tc_banner == null ? null : ctx.banners.tc_banner.right_section == null ? null : ctx.banners.tc_banner.right_section.text, " ");
      }
    },
    encapsulation: 2
  });
  return TcHeroSectionComponent;
})();


/***/ }),

/***/ 64998:
/*!********************************************************************************!*\
  !*** ./src/app/modules/terms-and-conditions/terms-and-conditions.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditionsComponent: () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 79457);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_banner_list_banner_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/banner-list/banner-list.service */ 33292);
/* harmony import */ var _shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/employer-list/employer-list.service */ 98034);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/meta-tags/meta-tags.service */ 79412);
/* harmony import */ var _components_tc_hero_section_tc_hero_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tc-hero-section/tc-hero-section.component */ 24077);
/* harmony import */ var _components_tc_content_tc_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tc-content/tc-content.component */ 479);










let TermsAndConditionsComponent = /*#__PURE__*/(() => {
  var _class;
  class TermsAndConditionsComponent {
    constructor(bannerListService, employerListService, pageListService, titleService, metaTagsService, metaService) {
      this.bannerListService = bannerListService;
      this.employerListService = employerListService;
      this.pageListService = pageListService;
      this.titleService = titleService;
      this.metaTagsService = metaTagsService;
      this.metaService = metaService;
      this.banners = [];
      this.termsAndConditionData = [];
    }
    ngOnInit() {
      this.getBannerdata();
      aos__WEBPACK_IMPORTED_MODULE_0___default().init({});
    }
    /**
     * Method to get Banner data
     */
    getBannerdata() {
      this.pageListService.getBannerList('term-condition').subscribe(resp => {
        this.banners = resp?.data?.data;
      });
      this.getTermsUseData();
    }
    getTermsUseData() {
      this.pageListService.getBannerList('tc-content').subscribe(resp => {
        this.termsAndConditionData = resp?.data?.data;
        this.setMetaTagAndTitle();
      });
    }
    /**
     * Meta tag and title
     */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Terms & Conditions',
        metaTitle: this.banners?.tc_meta?.meta_title,
        metaDescription: this.banners?.tc_meta?.meta_desc,
        metaKeyword: this.banners?.tc_meta?.meta_keywords,
        metaImage: this.banners?.tc_meta?.meta_image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_1__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
    }
  }
  _class = TermsAndConditionsComponent;
  _class.ɵfac = function TermsAndConditionsComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_banner_list_banner_list_service__WEBPACK_IMPORTED_MODULE_2__.BannerListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_employer_list_employer_list_service__WEBPACK_IMPORTED_MODULE_3__.EmployerListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_4__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_5__.MetaTagsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-terms-and-conditions"]],
    decls: 2,
    vars: 3,
    consts: [[1, "block", "lg:pt-[85px]", "bg-theme-extra-light-purple", 3, "banners"], [1, "block", 3, "termsAndConditionData", "banners"]],
    template: function TermsAndConditionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-tc-hero-section", 0)(1, "app-tc-content", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("banners", ctx.banners);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("termsAndConditionData", ctx.termsAndConditionData)("banners", ctx.banners);
      }
    },
    dependencies: [_components_tc_hero_section_tc_hero_section_component__WEBPACK_IMPORTED_MODULE_6__.TcHeroSectionComponent, _components_tc_content_tc_content_component__WEBPACK_IMPORTED_MODULE_7__.TcContentComponent],
    encapsulation: 2
  });
  return TermsAndConditionsComponent;
})();


/***/ }),

/***/ 87137:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/terms-and-conditions/terms-and-conditions.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditionsModule: () => (/* binding */ TermsAndConditionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.component */ 64998);
/* harmony import */ var _components_tc_hero_section_tc_hero_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tc-hero-section/tc-hero-section.component */ 24077);
/* harmony import */ var _components_tc_content_tc_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tc-content/tc-content.component */ 479);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/safe-pipe/safe-pipe.module */ 53547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 78371);








const routes = [{
  path: '',
  component: _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsComponent
}];
let TermsAndConditionsModule = /*#__PURE__*/(() => {
  var _class;
  class TermsAndConditionsModule {}
  _class = TermsAndConditionsModule;
  _class.ɵfac = function TermsAndConditionsModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.SafePipeModule]
  });
  return TermsAndConditionsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TermsAndConditionsModule, {
    declarations: [_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsComponent, _components_tc_hero_section_tc_hero_section_component__WEBPACK_IMPORTED_MODULE_1__.TcHeroSectionComponent, _components_tc_content_tc_content_component__WEBPACK_IMPORTED_MODULE_2__.TcContentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_shared_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.SafePipeModule]
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