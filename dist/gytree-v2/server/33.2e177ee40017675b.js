"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 75752:
/*!******************************************************************!*\
  !*** ./src/app/modules/book-now-page/book-now-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookNowPageComponent: () => (/* binding */ BookNowPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/common-util */ 48396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _shared_services_workshop_conduct_list_workshop_conduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/workshop-conduct-list/workshop-conduct.service */ 90991);
/* harmony import */ var _shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/meta-tags/meta-tags.service */ 79412);
/* harmony import */ var _shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _components_price_box_price_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/price-box/price-box.component */ 83720);
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/overview/overview.component */ 4678);
/* harmony import */ var _components_specialist_specialist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/specialist/specialist.component */ 47764);
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/education/education.component */ 62572);
/* harmony import */ var _components_languages_known_languages_known_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/languages-known/languages-known.component */ 91509);
/* harmony import */ var _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/programs/programs.component */ 26149);
/* harmony import */ var _components_workshops_conduct_workshops_conduct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/workshops-conduct/workshops-conduct.component */ 28941);
/* harmony import */ var _components_book_now_hero_section_book_now_hero_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/book-now-hero-section/book-now-hero-section.component */ 85974);

















let BookNowPageComponent = /*#__PURE__*/(() => {
  var _class;
  class BookNowPageComponent {
    /**
     * Method to scroll data
     */
    onScroll(event) {
      this.allScrollEvents(event);
    }
    constructor(GetData, doctorService, activatedRoute, workshopDataService, metaTagsService, pageListService, titleService, metaService) {
      this.GetData = GetData;
      this.doctorService = doctorService;
      this.activatedRoute = activatedRoute;
      this.workshopDataService = workshopDataService;
      this.metaTagsService = metaTagsService;
      this.pageListService = pageListService;
      this.titleService = titleService;
      this.metaService = metaService;
      this.isDataVisible = {
        gytreeHeroSection: false
      };
      this.gytreeBookNowList = [];
      this.workshopData = [];
    }
    ngOnInit() {
      document.body.style.overflow = 'unset';
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      this.activatedRoute.paramMap.subscribe(params => {
        this.doctorSlug = params['params'].slug;
      });
      this.getGytreeHeroSectiondata();
    }
    allScrollEvents(event) {
      this.getGytreeExpertDetailsScrollEvent();
    }
    getGytreeExpertDetailsScrollEvent() {
      var offsets = document.getElementById('gytree-hero-block').getBoundingClientRect();
      var top = offsets.top;
      if (top < 50 && !this.isDataVisible.gytreeHeroSection) {
        this.GetData.storedHomeData.subscribe(res => {
          if (!res?.gytreeImpact || res?.gytreeHeroSection === null) {
            // this.getGytreeHeroSectiondata();
          } else {
            this.gytreeBookNowList = res?.gytreeHeroSection;
          }
        });
        this.isDataVisible.gytreeHeroSection = true;
      }
    }
    getGytreeHeroSectiondata() {
      this.pageListService.getDoctorLisBySlug(this.doctorSlug).subscribe(resp => {
        this.doctorsDetailsData = resp?.data?.data;
        this.workshopData = resp?.data?.data?.dr_workshops;
        this.doctorData = resp?.data?.data;
        // this.doctorsDetailsData?.gtd_area_of_expertise.forEach(
        //     (element) => {
        //         if (element == 'other' || element == 'Other') {
        //             this.doctorsDetailsData?.gtd_area_of_expertise.splice(
        //                 this.doctorsDetailsData?.gtd_area_of_expertise.indexOf(
        //                     element
        //                 ),
        //                 1
        //             );
        //             this.doctorsDetailsData?.gtd_area_of_expertise.push(
        //                 this.doctorsDetailsData?.other_area_of_expertise
        //             );
        //         }
        //     }
        // );
        this.setMetaTagAndTitle();
        this.getWorkShopData();
      });
    }
    getWorkShopData() {
      // this.workshopDataService.workshopData(this.doctorSlug).subscribe((resp: any) => {
      //     this.workshopData = resp?.data?.data;
      // });
    }
    /**
    * Meta tag and title
    */
    setMetaTagAndTitle() {
      const data = {
        title: 'Gytree - Book Now',
        metaTitle: this.doctorsDetailsData?.dr_meta?.meta_title,
        metaDescription: this.doctorsDetailsData?.dr_meta?.meta_desc,
        metaKeyword: this.doctorsDetailsData?.dr_meta?.meta_keywords,
        metaImage: this.doctorsDetailsData?.dr_meta?.meta_image
      };
      _shared_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.setMetaTagAndTitle(this.titleService, this.metaService, data);
      // this.metaTagsService?.metaTags.subscribe((res) => {
      //     if (res) {
      //         let metaData = res?.data?.filter((ele) => {
      //             return ele.meta_type === MetaTagsEnum.HOME;
      //         });
      //         const data = {
      //             title: 'Gytree - Book Now',
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
  _class = BookNowPageComponent;
  _class.ɵfac = function BookNowPageComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_2__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_workshop_conduct_list_workshop_conduct_service__WEBPACK_IMPORTED_MODULE_3__.WorkshopDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_meta_tags_meta_tags_service__WEBPACK_IMPORTED_MODULE_4__.MetaTagsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_5__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Meta));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-book-now-page"]],
    hostBindings: function BookNowPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("scroll", function BookNowPageComponent_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
      }
    },
    decls: 8,
    vars: 8,
    consts: [["id", "gytree-hero-block", 1, "block", "lg:pt-[85px]", "bg-theme-light-cream", "relative", "lg:z-10", 3, "doctorsDetailsData"], [1, "block", 3, "doctorsDetailsData"], ["id", "programs", 1, "block", 3, "doctorsDetailsData"], [1, "block", 3, "workshopData"]],
    template: function BookNowPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-book-now-hero-section", 0)(1, "app-overview", 1)(2, "app-specialist", 1)(3, "app-education", 1)(4, "app-languages-known", 1)(5, "app-programs", 2)(6, "app-price-box", 1)(7, "app-workshops-conduct", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorsDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorsDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorsDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorsDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorsDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("doctorsDetailsData", ctx.doctorsDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("workshopData", ctx.workshopData);
      }
    },
    dependencies: [_components_price_box_price_box_component__WEBPACK_IMPORTED_MODULE_6__.PriceBoxComponent, _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__.OverviewComponent, _components_specialist_specialist_component__WEBPACK_IMPORTED_MODULE_8__.SpecialistComponent, _components_education_education_component__WEBPACK_IMPORTED_MODULE_9__.EducationComponent, _components_languages_known_languages_known_component__WEBPACK_IMPORTED_MODULE_10__.LanguagesKnownComponent, _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_11__.ProgramsComponent, _components_workshops_conduct_workshops_conduct_component__WEBPACK_IMPORTED_MODULE_12__.WorkshopsConductComponent, _components_book_now_hero_section_book_now_hero_section_component__WEBPACK_IMPORTED_MODULE_13__.BookNowHeroSectionComponent],
    encapsulation: 2
  });
  return BookNowPageComponent;
})();


/***/ }),

/***/ 11033:
/*!***************************************************************!*\
  !*** ./src/app/modules/book-now-page/book-now-page.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookNowPageModule: () => (/* binding */ BookNowPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _book_now_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-now-page.component */ 75752);
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/overview/overview.component */ 4678);
/* harmony import */ var _components_specialist_specialist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/specialist/specialist.component */ 47764);
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/education/education.component */ 62572);
/* harmony import */ var _components_languages_known_languages_known_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/languages-known/languages-known.component */ 91509);
/* harmony import */ var _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/programs/programs.component */ 26149);
/* harmony import */ var _components_workshops_conduct_workshops_conduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/workshops-conduct/workshops-conduct.component */ 28941);
/* harmony import */ var _components_book_now_hero_section_book_now_hero_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/book-now-hero-section/book-now-hero-section.component */ 85974);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _components_programs_components_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/programs/components/program-card/program-card.component */ 4169);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/price-box/price-box.module */ 11978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 78371);


// components














const routes = [{
  path: '',
  component: _book_now_page_component__WEBPACK_IMPORTED_MODULE_0__.BookNowPageComponent
}];
let BookNowPageModule = /*#__PURE__*/(() => {
  var _class;
  class BookNowPageModule {}
  _class = BookNowPageModule;
  _class.ɵfac = function BookNowPageModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__.InlineSVGModule, ngx_splide__WEBPACK_IMPORTED_MODULE_14__.NgxSplideModule, _components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_10__.PriceBoxModule]
  });
  return BookNowPageModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](BookNowPageModule, {
    declarations: [_book_now_page_component__WEBPACK_IMPORTED_MODULE_0__.BookNowPageComponent, _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__.OverviewComponent, _components_specialist_specialist_component__WEBPACK_IMPORTED_MODULE_2__.SpecialistComponent, _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__.EducationComponent, _components_languages_known_languages_known_component__WEBPACK_IMPORTED_MODULE_4__.LanguagesKnownComponent, _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_5__.ProgramsComponent, _components_workshops_conduct_workshops_conduct_component__WEBPACK_IMPORTED_MODULE_6__.WorkshopsConductComponent, _components_book_now_hero_section_book_now_hero_section_component__WEBPACK_IMPORTED_MODULE_7__.BookNowHeroSectionComponent, _components_programs_components_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_9__.ProgramCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__.InlineSVGModule, ngx_splide__WEBPACK_IMPORTED_MODULE_14__.NgxSplideModule, _components_price_box_price_box_module__WEBPACK_IMPORTED_MODULE_10__.PriceBoxModule]
  });
})();

/***/ }),

/***/ 85974:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/book-now-hero-section/book-now-hero-section.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookNowHeroSectionComponent: () => (/* binding */ BookNowHeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_modules_shared_services_navigation_service_list_navigate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation-service-list/navigate.service */ 97853);
/* harmony import */ var src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/local-storage/local-storage.service */ 59849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);









function BookNowHeroSectionComponent_div_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BookNowHeroSectionComponent_div_10_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 39)(3, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 41)(5, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BookNowHeroSectionComponent_div_10_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookNowHeroSectionComponent_div_10_ng_container_1_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r3 - 0.5 <= (ctx_r5.doctorsDetailsData == null ? null : ctx_r5.doctorsDetailsData.dr_rating));
  }
}
function BookNowHeroSectionComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookNowHeroSectionComponent_div_10_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BookNowHeroSectionComponent_div_10_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r3 <= (ctx_r2.doctorsDetailsData == null ? null : ctx_r2.doctorsDetailsData.dr_rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r3 > (ctx_r2.doctorsDetailsData == null ? null : ctx_r2.doctorsDetailsData.dr_rating));
  }
}
function BookNowHeroSectionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookNowHeroSectionComponent_div_10_ng_container_1_Template, 3, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.feedBackStar);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_rating, "");
  }
}
function BookNowHeroSectionComponent_ng_container_41_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/help-section/svg/star.svg");
  }
}
function BookNowHeroSectionComponent_ng_container_41_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 45)(3, "defs")(4, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " .cls-1 { fill: #ff9529; } .cls-2 { fill: #606060; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 46)(7, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BookNowHeroSectionComponent_ng_container_41_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookNowHeroSectionComponent_ng_container_41_ng_container_2_ng_container_1_Template, 8, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r8 - 0.5 <= (ctx_r10.doctorsDetailsData == null ? null : ctx_r10.doctorsDetailsData.dr_rating));
  }
}
function BookNowHeroSectionComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookNowHeroSectionComponent_ng_container_41_ng_container_1_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BookNowHeroSectionComponent_ng_container_41_ng_container_2_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r8 <= (ctx_r1.doctorsDetailsData == null ? null : ctx_r1.doctorsDetailsData.dr_rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r8 > (ctx_r1.doctorsDetailsData == null ? null : ctx_r1.doctorsDetailsData.dr_rating));
  }
}
let BookNowHeroSectionComponent = /*#__PURE__*/(() => {
  var _class;
  class BookNowHeroSectionComponent {
    constructor(navigateService, doctorsListService, cdr, activatedRoute, eventTrackingService, pageListService, localStorageService, router) {
      this.navigateService = navigateService;
      this.doctorsListService = doctorsListService;
      this.cdr = cdr;
      this.activatedRoute = activatedRoute;
      this.eventTrackingService = eventTrackingService;
      this.pageListService = pageListService;
      this.localStorageService = localStorageService;
      this.router = router;
      this.subscriptions = [];
      /**
       * rating data
       */
      this.feedBackStar = [1, 2, 3, 4, 5];
    }
    ngOnInit() {}
    bookingConsultation(type, doctorData) {
      localStorage.setItem('doctorType', JSON.stringify(type));
      localStorage.setItem('service', JSON.stringify(false));
      let data = JSON.parse(localStorage.getItem('doctorData'));
      this.getQuestionList(doctorData?.dr_prof_details?.dr_fk_dgn_id, doctorData || data);
    }
    getQuestionList(id, consultationDetails) {
      this.userData = this.localStorageService.getItem("userSlug");
      if (this.userData?.user_setup_status == 'pending') {
        this.router.navigate(['/auth/signup'], {
          queryParams: {
            mobilenumber: this.userData?.user_mo_no.replace(' ', ''),
            quiz: false
          }
        });
        return;
      }
      this.subscriptions.push(this.pageListService.getQuestionsList(id).subscribe(data => {
        if (data.data.status == 401) {
          localStorage.setItem('URL', JSON.stringify('/experts'));
          return;
        }
        if (data?.success) {
          this.questionsList = data?.data?.data?.qg_question_list;
          if (data?.data?.data && this.questionsList?.length > 0) {
            this.router.navigate(['payment/select-issues', this.doctorsDetailsData?.dr_slug], {
              queryParams: {
                // type: this.doctorData?.gtd_type,
                // service:true
              }
            });
          } else if (data?.data?.data && this.questionsList?.length <= 0) {
            this.router.navigate(['payment/select-dates', this.doctorsDetailsData?.dr_slug], {
              queryParams: {
                //  type: this.doctorData?.gtd_type,
                // service:true
              }
            });
          }
          const eventVal = {
            'Expert Name': this.doctorsDetailsData?.dr_name,
            Amount: this.doctorsDetailsData?.dr_prof_details?.dr_cnsltn_price,
            Category: this.doctorsDetailsData?.dr_prof_details?.dr_dgn?.dgn_name
          };
          this.eventTrackingService.trackWebEnagegeEvent('Book now - Expert', eventVal);
        } else {
          this.router.navigate(['payment/select-dates', this.doctorsDetailsData?.dr_slug], {
            queryParams: {
              //  type: this.doctorData?.gtd_type,
              // service:true
            }
          });
          const eventVal = {
            'Expert Name': this.doctorsDetailsData?.dr_name,
            Amount: this.doctorsDetailsData?.dr_prof_details?.dr_cnsltn_price,
            Category: this.doctorsDetailsData?.dr_prof_details?.dr_dgn?.dgn_name
          };
          this.eventTrackingService.trackWebEnagegeEvent('Book now - Expert', eventVal);
        }
      }));
    }
  }
  _class = BookNowHeroSectionComponent;
  _class.ɵfac = function BookNowHeroSectionComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service_list_navigate_service__WEBPACK_IMPORTED_MODULE_0__.NavigateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_1__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_2__.EventTrackingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_3__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-book-now-hero-section"]],
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 46,
    vars: 11,
    consts: [[1, "relative", "hero-sec-wrapper"], [1, "container"], [1, "grid", "lg:grid-cols-2"], [1, "relative", "flex", "items-center", "hero-sec-text"], [1, "w-full"], [1, "font-bold", "text-center", "sm:text-4xl", "pt-12", "text-[32px]", "sm:px-2", "sm:py-8", "lg:mb-5", "lg:text-3xl", "lg:text-left", "xl:text-6xl", "text-theme-brown", "font-lora"], [1, "text-center", "lg:text-start"], [1, "outline-none", "inline-block", "border", "border-1", "px-4", "py-1", "mt-2", "border-theme-skin", "rounded-full", "lg:py-1.5", "sm:px-2", "lg:px-8", "font-normal", "text-[16px]", "sm:text-[19px]", "md:text-xl", "lg:text-2xl", "transition-all", "duration-300", "mb-5", "font-roboto"], ["class", "flex justify-center gap-2 lg:justify-start", 4, "ngIf"], [1, "sm:text-[21px]", "text-[18px]", "text-center", "lg:text-start", "font-roboto", "py-2"], [1, "flex", "items-center", "justify-center", "gap-3", "mb-2", "lg:justify-start", "lg:mb-4"], [1, "flex", "gap-1", "items-center", "leading-none", "text-theme-brown", "font-roboto"], [1, "sm:text-[20px]", "pt-3", "text-[18px]"], [1, "font-bold", "text-[27px]", "pt-2"], [1, "line-through", "flex", "items-center", "text-center", "pt-3", "text-theme-light-grey", "font-roboto", "text-[18px]", "leading-none"], [1, "hidden", "lg:block", "pt-3", "sm:text-[21px]", "text-[15px]", "font-roboto", "leading-none"], [1, "sm:text-[21px]", "flex", "lg:hidden", "lg:justify-start", "justify-center", "text-[15px]", "font-roboto", "py-2"], [1, "flex", "justify-center", "pt-2", "mb-8", "lg:justify-start"], [1, "outline-none", "lg:justify-start", "justify-center", "text-center", "flex", "gap-4", "relative", "border", "border-1", "border-transparent", "rounded-full", "py-2", "lg:py-1.5", "px-5", "lg:px-10", "text-base", "lg:text-xl", "lg:text-[22px]", "text-white", "bg-theme-light-maroon", "hover:bg-theme-medium-maroon", "hover:shadow-lg", "transition-all", "duration-300", "font-roboto", 3, "click"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/did-you-know/up-right.svg", 1, "mt-1", "text-lg", "transition-transform", "sm:mt-2", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], [1, "absolute", "sm:h-[51px]", "sm:w-[51px]", "sm:left-0", "sm:right-auto", "lg:right-20", "top-[40%]", "-left-[16px]", "lg:left-auto", "text-theme-brown", "opacity-100", "md:h-15", "md:w-15", "h-10", "w-10", 3, "inlineSVG"], [1, "relative", "px-8", "mx-auto", "sm:pt-16", "hero-image", "lg:mx-0", "sm:px-0"], [1, "relative", "ml-auto", "w-fit"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/expert-detail-page-hero-images/bg-sarika-img.png", "alt", "", 1, "sm:inline-block"], [1, "absolute", "text-center", "xl:w-52", "lg:w-40", "text-theme-brown", "sm:text-[30px]", "font-lora", "font-bold", "lg:rounded-t-xl", "rounded-t-lg", "lg:rounded-l-xl", "rounded-l-lg", "0", "bg-white", "mb-3", "xl:bottom-32", "lg:bottom-24", "z-20", "lg:p-4", "p-2", "xl:-left-14", "lg:-left-6", "sm:bottom-16", "sm:w-48", "sm:-left-10", "bottom-12", "-left-8"], [1, "flex", "justify-center", "gap-1", "text-theme-brown"], [1, "leading-none"], [1, "flex", "items-end", "justify-end", "text-sm"], [1, "flex", "items-center", "justify-center", "gap-2"], [4, "ngFor", "ngForOf"], [1, "absolute", "inset-0", "w-full", "h-full", "pt-2", "pr-1", "overflow-hidden"], ["alt", "", 1, "object-cover", "object-bottom", "w-full", "h-full", "rounded-t-full", 3, "src"], [1, "absolute", "z-20", "p-2", "text-sm", "text-center", "bg-white", "rounded-t-full", "rounded-l-full", "lg:rounded-t-full", "lg:rounded-l-full", "font-roboto", "top-12", "xl:-right-3", "min-[1537px]:-right-20", "lg:right-2", "lg:w-52", "text-theme-brown", "sm:top-24", "sm:w-48", "sm:right-3", "-right-10", "lg:text-base"], [1, "flex", "justify-center", "gap-2", "lg:justify-start"], [1, "sm:text-[25px]", "text-[21px]", "text-theme-brown", "font-bold", "font-lora"], [1, "text-[12px]"], [4, "ngIf"], ["src", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/expert-details/icons.svg", "alt", ""], [1, "block", "[&>svg]:h-full", "[&>svg]:w-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "23", "height", "21", "viewBox", "0 0 14 14", "fill", "none"], ["clip-path", "url(#clip0_3650_1917)"], ["d", "M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z", 1, "fill-theme-yellow"], ["d", "M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                                0V10.1538L11.3078 13.2918L9.65674 8.2149Z", 1, "fill-gray-500"], [1, "w-3", "h-4", "sm:h-7", "sm:w-7", "text-theme-yellow", 3, "inlineSVG"], [1, "w-3", "h-4", "sm:h-7", "sm:w-7", "text-theme-yellow", "flex", "justify-center", 2, "align-items", "center"], ["xmlns", "http://www.w3.org/2000/svg", "id", "Layer_1", "data-name", "Layer 1", "width", "21", "height", "20.95", "viewBox", "0 0 2179 2083", 1, "mb-1"], ["d", "m1119.36,46.06c-50.97-14.43-111.66,8.71-131.4,69.45l-173.76,534.79c-14.26,43.9-55.17,73.62-101.33,73.62H150.56c-103.21,0-146.13,132.08-62.63,192.75l454.92,330.52c37.34,27.13,52.97,75.23,38.71,119.13l-173.76,534.78c-31.9,98.17,80.46,179.8,163.96,119.13l454.92-330.52c27.27-19.82,62.83-16.22,96.89-21.29l-4.21-1622.35Z", 1, "cls-1"], ["d", "m1094.98,42.05c50.97-14.43,110.05,12.72,129.78,73.46l173.76,534.79c14.26,43.9,55.17,73.62,101.33,73.62h562.31c103.21,0,146.13,132.08,62.63,192.75l-454.92,330.52c-37.34,27.13-52.97,75.23-38.71,119.13l173.76,534.78c31.9,98.17-80.46,179.8-163.96,119.13l-454.92-330.52c-27.27-19.82-59.2-21.23-91.89-18.31l.82-1629.34Z", 1, "cls-2"]],
    template: function BookNowHeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BookNowHeroSectionComponent_div_10_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Per Consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Per Consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookNowHeroSectionComponent_Template_button_click_26_listener() {
          return ctx.bookingConsultation(ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_prof_details == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_dgn == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_dgn.dgn_name, ctx.doctorsDetailsData);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " Book Consultation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, BookNowHeroSectionComponent_ng_container_41_Template, 3, 2, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_prof_details == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_dgn == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_dgn.dgn_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_experience, " Years Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_prof_details == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_cnsltn_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u20B9", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_prof_details == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_std_price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/thum.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.feedBackStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_prof_details == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_dgn == null ? null : ctx.doctorsDetailsData.dr_prof_details.dr_dgn.dgn_name, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__.InlineSVGDirective],
    encapsulation: 2
  });
  return BookNowHeroSectionComponent;
})();


/***/ }),

/***/ 62572:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/education/education.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationComponent: () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function EducationComponent_div_1_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctorsEducationData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doctorsEducationData_r2 == null ? null : doctorsEducationData_r2.edu_degree == null ? null : doctorsEducationData_r2.edu_degree.dgr_name, " ");
  }
}
function EducationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Education ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 7)(7, "path", 8)(8, "path", 9)(9, "path", 10)(10, "path", 11)(11, "path", 12)(12, "path", 13)(13, "path", 14)(14, "path", 15)(15, "path", 16)(16, "path", 17)(17, "path", 18)(18, "path", 19)(19, "path", 20)(20, "path", 21)(21, "path", 22)(22, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EducationComponent_div_1_ng_container_24_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_educations);
  }
}
let EducationComponent = /*#__PURE__*/(() => {
  var _class;
  class EducationComponent {}
  _class = EducationComponent;
  _class.ɵfac = function EducationComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-education"]],
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "did-you-know", "md:px-0"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "relative", "gap-5", "md:rounded-[40px]", "rounded-[18px]", "sm:w-1/2", "md:w-1/2", "md:pt-2.5", "md:pb-5", "pb-2", "md:px-10", "px-3", "bg-theme-purple-lighter", "font-roboto"], [1, "text-black", "pt-4", "font-bold", "lg:text-[30px]", "text-center", "md:text-left", "font-lora", "md:text-[25px]", "text-[23px]", "sm:text-[30px]"], [1, "absolute", "h-[180px]", "w-[50px]", "sm:h-[200px]", "sm:w-[90px]", "sm:left-[75%]", "sm:bottom-40", "-top-24", "left-64"], ["width", "100%", "height", "100%", "viewBox", "0 0 95 95", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M33.4408 12.1828C33.6648 10.6832 34.1338 9.23068 34.8292 7.88331C35.2954 7.02123 35.8693 6.22188 36.537 5.50447C37.4626 4.49554 37.2682 4.64827 38.9667 4.72695C40.7439 4.80562 40.5727 4.68992 41.0077 6.06909C41.1697 6.58281 41.2993 7.11042 41.4104 7.63802C41.6714 8.84595 41.8338 10.0733 41.8963 11.3081C41.9661 12.6615 41.9134 14.0184 41.739 15.3623C41.6695 15.9084 41.5862 16.4638 41.4659 17.0007L41.1188 18.2456L37.3839 18.3937C36.5277 17.7597 36.2408 14.9504 36.0603 13.8859C35.8702 12.6026 35.7574 11.3091 35.7224 10.0122C35.7126 9.92649 35.6715 9.84737 35.6071 9.78994C35.5426 9.73251 35.4593 9.70078 35.373 9.70078C35.2867 9.70078 35.2034 9.73251 35.139 9.78994C35.0745 9.84737 35.0335 9.92649 35.0236 10.0122C35.1256 12.4076 35.5426 14.779 36.2639 17.0655C36.6573 18.3613 37.1433 20.4255 38.7585 20.7031C42.66 21.3788 42.697 14.2238 42.6646 12.081C42.6276 9.73918 42.4887 2.47306 38.4993 3.47273C35.1624 4.31042 33.4824 9.25323 33.0381 12.155C32.9965 12.4142 33.4038 12.442 33.4454 12.1874L33.4408 12.1828Z", "fill", "#581E1E"], ["d", "M41.9495 15.7879C42.204 18.1019 44.5829 24.2434 47.7161 20.8556C48.8685 19.6107 49.248 17.616 49.646 16.0193C50.2823 13.6019 50.612 11.114 50.6272 8.61432C50.6272 5.91151 49.9885 1.77399 47.2949 0.371679C43.9812 -1.39163 41.8708 3.55581 41.5144 6.05961C41.4728 6.34655 41.9217 6.52242 42.0282 6.23085C42.3638 5.13616 42.817 4.08099 43.3796 3.08374C45.4992 -0.396585 49.7848 4.5925 50.0949 7.87382C50.3032 10.0953 49.8774 12.4556 49.4146 14.6216C49.1706 15.9026 48.8255 17.1623 48.3825 18.3889C47.7994 19.8884 46.4248 22.1191 44.2589 20.4299C42.926 19.3885 42.4678 17.3198 42.2225 15.7462C42.1994 15.5981 41.9449 15.6351 41.9587 15.7879H41.9495Z", "fill", "#581E1E"], ["d", "M47.1745 20.941C47.9659 19.7886 48.6092 17.5532 47.4614 16.3869C46.4433 15.3456 44.7957 16.0398 44.1847 17.1506C43.6525 18.1225 43.4072 20.2699 44.518 20.9826C45.0687 21.3344 46.6793 21.4964 47.1467 20.9826C47.1722 20.9567 47.1864 20.9218 47.1864 20.8854C47.1864 20.8491 47.1722 20.8142 47.1467 20.7883C46.7996 20.5152 46.3507 20.6078 45.9342 20.5985C45.6216 20.6232 45.3073 20.587 45.0085 20.4921C44.4439 20.2144 44.4115 19.2749 44.4439 18.7334C44.5133 17.6365 45.2168 16.2435 46.5404 16.498C47.7252 16.7248 47.753 18.4973 47.5586 19.3998C47.4415 19.906 47.238 20.3882 46.957 20.8253C46.8737 20.9549 47.0819 21.0752 47.1745 20.941ZM38.0895 19.4878C38.0294 18.8301 38.1034 18.1674 38.3071 17.5393C38.3959 17.2422 38.5422 16.9654 38.7375 16.7248L39.5381 16.3638C39.7205 16.4906 39.8584 16.672 39.9315 16.8821C40.3943 17.8818 39.9315 18.9787 40.1305 19.9968C40.1413 20.046 40.1663 20.0909 40.2026 20.1258C40.2388 20.1607 40.2846 20.1841 40.3341 20.193C40.3836 20.202 40.4347 20.196 40.4808 20.1759C40.527 20.1558 40.5661 20.1225 40.5933 20.0802C41.3292 18.9324 41.2089 16.1139 39.6677 15.5816C37.8396 14.9476 37.4786 18.3955 37.7471 19.5248C37.7568 19.5658 37.7813 19.6018 37.8159 19.6259C37.8505 19.6499 37.8928 19.6604 37.9346 19.6552C37.9765 19.6501 38.015 19.6297 38.0427 19.5979C38.0704 19.5662 38.0854 19.5253 38.0849 19.4831L38.0895 19.4878ZM50.7057 7.86661C50.9047 6.41801 51.0297 4.16413 52.0942 3.12744C54.6489 0.623635 55.9355 2.45173 56.3937 4.16413C56.5038 4.63758 56.5631 5.12214 56.5695 5.60809C56.6852 8.30628 56.1761 11.259 55.593 13.8831C55.3223 15.1878 54.9399 16.4668 54.4499 17.7059C54.0148 18.7565 52.9041 21.6306 50.7983 19.0481C50.391 18.5483 50.3123 17.5625 50.2337 16.9516C49.8218 13.6795 50.4188 10.2408 50.8307 6.98727C50.8307 6.82991 50.6039 6.82066 50.5854 6.98727C50.2753 9.86132 49.6228 12.7678 49.6598 15.6649C49.6876 17.1506 49.7709 19.3952 51.2333 20.293C54.7414 22.4636 56.0882 14.7671 56.4631 12.8418C57.0138 10.0279 58.8836 2.68777 54.9914 1.33636C51.474 0.109916 50.5206 5.60809 50.2846 7.86661C50.2568 8.13041 50.6548 8.15355 50.6918 7.899L50.7057 7.86661Z", "fill", "#581E1E"], ["d", "M51.0111 19.1381C50.9366 18.3759 50.9977 17.6065 51.1916 16.8657C51.3536 16.2779 51.9368 14.5146 52.9827 15.8567C53.3761 16.3612 53.3992 17.3655 53.4455 17.9672C53.5483 18.6528 53.3968 19.3523 53.0197 19.9341C52.9989 19.9724 52.9899 20.0159 52.9937 20.0593C52.9975 20.1028 53.014 20.1441 53.0412 20.1781C53.0683 20.2122 53.1049 20.2375 53.1464 20.2509C53.1878 20.2643 53.2323 20.2652 53.2743 20.2534C54.0287 19.9711 54.1258 19.1843 54.1212 18.4485C54.1212 17.4164 53.9546 15.6716 53.0105 15.0191C50.8862 13.5566 50.4465 18.1106 50.5437 19.1843C50.5715 19.4852 51.0389 19.4296 51.0065 19.1288L51.0111 19.1381ZM64.7936 12.5199C64.7936 9.96055 63.9143 4.9113 60.1655 5.66105C57.6478 6.16551 56.8148 9.88187 56.3473 11.9414C55.8799 14.0009 54.7321 19.0686 57.3979 20.1377C60.9477 21.5586 63.0442 13.0197 63.146 10.8399C63.146 10.5853 62.822 10.5668 62.7341 10.7751C62.2111 11.9738 61.9936 13.2604 61.5863 14.4776C61.3541 15.2057 61.0758 15.9183 60.7533 16.6111C60.2581 17.6524 58.541 20.8829 56.7222 18.268C55.7179 16.824 56.5741 13.5057 56.8888 11.821C57.2035 10.1364 57.6247 8.06766 58.8465 6.86435C60.4617 5.27229 62.6045 6.10997 63.669 7.92419C64.4835 9.31262 64.5159 10.9695 64.5113 12.5245C64.5113 12.7143 64.8029 12.6819 64.8029 12.4967L64.7936 12.5199Z", "fill", "#581E1E"], ["d", "M57.2255 19.1633C56.9339 18.3042 56.8701 17.3841 57.0404 16.4929C57.0903 16.1815 57.1854 15.879 57.3227 15.5951C57.7022 14.9425 58.8963 15.3313 59.1231 16.0162C59.4933 17.1408 58.8361 18.5709 58.7204 19.7187C58.6927 19.9825 59.086 20.0658 59.1832 19.8483C59.8219 18.6681 60.6318 14.1557 58.128 14.3223C56.0546 14.4612 56.411 18.0618 56.8414 19.3346C56.9247 19.5799 57.3042 19.4132 57.207 19.1726L57.2255 19.1633ZM27.4993 12.6053C26.6107 10.5458 24.4818 7.34317 21.8715 7.51441C19.2613 7.68565 19.7981 10.9947 20.696 12.5775C20.8163 12.7904 21.2282 12.7349 21.1588 12.448C20.9459 11.601 19.9647 8.74548 21.5244 8.37986C22.5796 8.12532 23.6024 8.75936 24.3707 9.4073C25.4761 10.3756 26.3993 11.5339 27.0966 12.8275C27.2262 13.0589 27.6057 12.8552 27.5039 12.6146L27.4993 12.6053Z", "fill", "#581E1E"], ["d", "M20.6657 9.58167C20.7583 9.39654 21.1285 9.84547 21.1887 9.91952C21.2812 10.1 21.3553 10.2898 21.434 10.4795C21.6561 11.0395 22.0078 11.9605 21.8968 12.4835C21.744 13.099 22.7668 13.0018 22.5169 12.4372C22.376 11.9265 22.2693 11.407 22.1976 10.8822C22.0776 10.3777 21.8793 9.89513 21.6098 9.45208C21.2766 8.95687 20.4991 8.68382 20.2214 9.4058C20.1997 9.46681 20.2027 9.53392 20.2299 9.59272C20.257 9.65152 20.3061 9.69734 20.3667 9.72035C20.4272 9.74336 20.4944 9.74172 20.5537 9.7158C20.6131 9.68987 20.6599 9.64172 20.6842 9.58167H20.6657ZM78.9427 56.742C77.1592 55.0499 75.5039 53.2276 73.9906 51.2901C72.6022 49.5268 71.4591 47.546 69.7837 46.0464C68.7979 45.1625 67.4372 44.1582 66.1414 45.0468C64.9982 45.8289 64.8779 47.5922 65.063 48.8326C65.7248 53.2061 70.1539 55.8302 71.2184 60.1251C72.144 63.8739 71.9681 68.0762 74.6524 71.14C74.6811 71.1649 74.7177 71.1789 74.7557 71.1793C74.7936 71.1792 74.8302 71.1655 74.8589 71.1407C74.8876 71.1159 74.9064 71.0817 74.9121 71.0442C74.9177 71.0066 74.9093 70.9682 74.8885 70.9364C72.343 68.0068 72.5744 64.1978 71.82 60.6296C71.1119 57.3251 69.1635 55.2564 67.2706 52.5582C66.2987 51.1698 64.6372 48.18 65.8498 46.5139C67.3863 44.4035 69.2237 46.264 70.1493 47.2312C70.8144 47.9629 71.4327 48.7358 72.0005 49.5453C73.9762 52.2737 76.2197 54.7977 78.6974 57.0798C78.8918 57.2557 79.1278 56.941 78.9427 56.7651V56.742Z", "fill", "#581E1E"], ["d", "M65.7197 46.1203C65.8215 47.6244 66.5713 50.915 68.6632 50.6743C71.0698 50.3966 69.4777 46.8885 68.7557 45.8241C68.5614 45.5325 68.043 45.8241 68.2096 46.1295C68.5165 46.6603 68.7946 47.2072 69.0427 47.7679C69.3713 48.6195 69.561 50.6697 67.8394 50.031C66.5805 49.5682 66.0761 47.1847 65.965 46.1157C65.965 45.9583 65.7058 45.9629 65.7151 46.1157L65.7197 46.1203ZM72.0278 39.1087C74.2678 40.0343 75.8136 40.96 76.9938 43.1213C77.8972 44.7005 78.9847 46.167 80.2334 47.4902C82.4734 50.0171 83.0797 52.2155 83.2741 55.594C83.3741 57.4066 83.6374 59.2065 84.0609 60.9719C85.0436 64.8629 86.4869 68.6228 88.3604 72.1718C89.8737 75.1153 91.8083 79.3408 94.5713 81.317C94.7564 81.4512 95.0989 81.2753 94.9693 81.03C94.1177 79.4194 92.7432 78.0495 91.7296 76.5223C90.4665 74.6028 89.3228 72.6074 88.3048 70.5474C86.3286 66.5672 84.6024 62.2585 83.9544 57.834C83.6906 55.9828 83.9544 54.0575 83.5934 52.2155C83.2324 50.3735 82.205 49.0082 81.0063 47.6707C79.4776 46.0245 78.1222 44.2255 76.9614 42.3021C75.8321 40.4277 74.0549 39.6317 72.0695 38.8866C71.9306 38.8357 71.8751 39.0532 72.0093 39.1041L72.0278 39.1087ZM72.0602 46.0509C72.3809 46.6533 72.7844 47.2079 73.2589 47.6985C73.6708 48.1196 74.3511 48.8509 74.9759 48.8833C75.0056 48.8862 75.0355 48.8804 75.0619 48.8665C75.0883 48.8526 75.11 48.8313 75.1243 48.8051C75.1386 48.7789 75.1449 48.7491 75.1424 48.7194C75.1399 48.6897 75.1286 48.6614 75.1101 48.638C74.9458 48.4454 74.7443 48.288 74.5177 48.1752C74.207 47.9756 73.9129 47.7512 73.6384 47.5041C73.1107 47.0301 72.6554 46.4812 72.287 45.875C72.1944 45.7223 71.9862 45.875 72.0648 46.0324L72.0602 46.0509Z", "fill", "#581E1E"], ["d", "M73.2957 50.1479C74.0922 49.9644 74.8402 49.6125 75.4894 49.1158C75.9244 48.7641 76.6048 48.255 76.577 47.6487C76.5747 47.6199 76.5659 47.592 76.5513 47.567C76.5366 47.5421 76.5165 47.5208 76.4925 47.5048C76.4684 47.4887 76.441 47.4783 76.4124 47.4744C76.3837 47.4705 76.3546 47.4731 76.3271 47.4821C75.8365 47.6487 75.5495 48.2504 75.1747 48.5975C74.6087 49.1387 73.9462 49.5688 73.2216 49.8656C73.0689 49.9257 73.1337 50.1895 73.2957 50.1479ZM77.8081 51.5502C77.6309 52.0317 77.4109 52.4964 77.1509 52.9386C76.8693 53.3271 76.6112 53.732 76.378 54.1512C76.3702 54.1715 76.3674 54.1934 76.3697 54.215C76.3719 54.2366 76.3793 54.2574 76.3911 54.2757C76.4029 54.2939 76.4188 54.3091 76.4376 54.3201C76.4564 54.331 76.4775 54.3374 76.4992 54.3386C76.5282 54.3404 76.557 54.3331 76.5816 54.3178C77.3776 53.7763 77.8636 52.5776 78.1829 51.7076C78.2709 51.4669 77.9052 51.3095 77.8127 51.5548L77.8081 51.5502ZM67.7743 58.3443C65.6015 57.5208 63.3669 56.8708 61.0914 56.4005C59.3605 56.0348 57.1806 55.3452 55.4127 55.5535C54.5565 55.6553 53.8808 56.1135 54.0659 57.0762C54.3899 58.7469 57.574 59.6586 58.9069 60.2279C60.8137 61.0424 62.8732 61.4914 64.7661 62.3244C68.2325 63.8517 68.6629 67.1562 69.7043 70.3727C70.9631 74.2695 72.8976 78.5366 76.4937 80.7952C76.6557 80.897 76.85 80.6517 76.7019 80.5221C73.8334 78.0591 71.6935 74.8581 70.5142 71.2659C69.5886 68.6557 69.2646 65.2494 67.1125 63.2778C66.1082 62.3522 64.7985 61.8894 63.535 61.5006C61.5018 60.881 59.5133 60.1233 57.5833 59.2328C57.1205 59.0153 53.1958 57.2798 55.4543 56.058C56.4864 55.498 61.0914 56.8401 61.4709 56.9234C63.5767 57.3631 65.6362 57.9694 67.6864 58.5895C67.8206 58.6312 67.9039 58.409 67.7697 58.3581L67.7743 58.3443Z", "fill", "#581E1E"], ["d", "M54.4085 56.5893C54.0052 56.4634 53.6286 56.2642 53.2978 56.0015C51.9246 55.3475 52.2333 54.2229 54.2234 52.6276C54.8158 52.4101 55.9358 52.6276 56.5374 52.6646C57.9675 52.7155 59.393 52.822 60.8092 53.0071C63.7088 53.3937 66.5089 54.3265 69.0611 55.7562C69.0901 55.7667 69.1214 55.7693 69.1518 55.7638C69.1822 55.7583 69.2105 55.7449 69.2341 55.7249C69.2576 55.7048 69.2753 55.679 69.2856 55.6498C69.2959 55.6207 69.2982 55.5894 69.2925 55.559C69.2853 55.5185 69.264 55.4817 69.2323 55.4554C65.0392 52.5813 59.5133 52.2157 54.5983 52.3777C53.5338 52.4101 51.7242 52.424 51.5622 53.8726C51.4002 55.3212 53.3024 56.2884 54.3391 56.7142C54.4224 56.7466 54.4872 56.6217 54.4039 56.5893H54.4085ZM68.103 57.177C67.5106 58.5192 66.9784 60.1112 67.0941 61.6015C67.0969 61.6461 67.1158 61.6881 67.1471 61.7199C67.1785 61.7516 67.2203 61.771 67.2648 61.7744C67.3094 61.7778 67.3536 61.7649 67.3894 61.7383C67.4252 61.7116 67.4502 61.6729 67.4597 61.6293C67.7374 60.1436 67.8346 58.695 68.3113 57.2372C68.3576 57.103 68.1586 57.0521 68.103 57.1724V57.177ZM70.5883 65.8269C71.0737 65.2623 71.7194 64.8588 72.4396 64.6699C72.6756 64.6144 72.546 64.2071 72.3285 64.3182C71.5906 64.6014 70.9341 65.0625 70.4171 65.6603C70.3153 65.7853 70.4958 65.9473 70.6022 65.8269H70.5883ZM12.228 56.2653C13.2879 52.4703 13.0935 48.4577 13.2879 44.5608C13.3249 43.1474 13.5109 41.7423 13.8432 40.3678C14.0363 39.5963 14.3206 38.8505 14.6902 38.1463C15.0359 36.8782 15.8148 36.5987 17.0274 37.3086C18.2154 36.9999 18.7999 37.3086 18.7814 38.2342C19.471 39.7754 18.7814 42.0246 18.5408 43.5982C18.3 45.006 18.2533 46.4402 18.4019 47.8607C18.6981 50.1747 19.633 52.3962 20.3966 54.6038C21.4611 57.663 21.9609 60.5879 21.3824 63.8091C20.7669 67.2339 19.3738 70.455 18.2307 73.7225C17.4578 75.9347 16.7034 78.2349 17.0551 80.5952C17.0551 80.7479 17.3236 80.7664 17.3328 80.5952C17.828 73.8706 22.1599 68.1456 22.4006 61.3747C22.5163 58.0888 21.3546 55.1731 20.2948 52.1185C19.5867 50.0868 18.9943 48.0458 19.0869 45.866C19.1563 44.26 19.5867 42.7003 19.7302 41.1036C19.8829 39.4098 19.8644 36.0775 17.953 35.1889C16.472 34.4994 15.1761 36.1747 14.5051 37.2392C13.0796 39.5486 12.7973 42.2792 12.7973 44.8941C12.7973 48.6521 12.8482 52.5397 11.9457 56.2144C11.9041 56.3949 12.1771 56.4273 12.2234 56.256L12.228 56.2653Z", "fill", "#581E1E"], ["d", "M14.7513 37.679C13.3305 34.4393 10.586 38.1418 9.57709 39.4793C8.04982 41.5249 6.49015 43.5474 4.949 45.5791C3.67627 47.2499 1.9361 49.0271 1.38073 51.1329C0.973461 52.6555 1.31594 54.2152 1.77412 55.6823C2.55164 58.1629 3.43561 60.5418 3.92156 63.0872C5.01379 68.8724 4.44916 74.3983 2.99594 80.0585C2.91726 80.3778 3.43098 80.5861 3.55131 80.2621C5.97181 73.7828 5.61081 66.2853 3.75957 59.7226C3.19032 57.7094 2.08883 55.6499 1.87594 53.5626C1.589 50.721 3.26437 48.8049 4.87495 46.6853L8.71164 41.6499C9.54007 40.5623 12.8769 35.1706 14.4181 37.8178C14.5199 37.9937 14.8346 37.8549 14.7513 37.6651V37.679ZM16.0379 36.1749C15.3067 37.5401 14.5338 39.1183 14.8624 40.715C15.029 41.5296 15.5566 42.4135 16.4822 42.4274C18.6435 42.4644 19.2591 38.0076 18.6528 36.6053C18.6302 36.5605 18.5948 36.5236 18.551 36.4993C18.5072 36.475 18.4571 36.4644 18.4072 36.4689C18.3574 36.4734 18.31 36.4927 18.2712 36.5245C18.2325 36.5562 18.2042 36.5989 18.19 36.6469C18.0002 37.3504 17.8521 42.7606 15.9824 41.4509C14.5616 40.4558 15.8019 37.4568 16.223 36.2582C16.2601 36.1563 16.1027 36.0684 16.0518 36.1702L16.0379 36.1749Z", "fill", "#581E1E"], ["d", "M12.8906 46.2102C12.5922 45.8969 12.219 45.6646 11.8061 45.535C11.3932 45.4055 10.9542 45.383 10.5303 45.4697C10.4797 45.477 10.4335 45.5023 10.4001 45.541C10.3668 45.5797 10.3486 45.6292 10.3489 45.6803C10.3491 45.7312 10.3675 45.7804 10.4008 45.819C10.434 45.8576 10.4799 45.8831 10.5303 45.8909C11.252 45.912 11.9517 46.1437 12.5435 46.5573C12.7842 46.7332 13.0989 46.4324 12.8721 46.2102H12.8906ZM12.8675 48.3391C12.5488 48.0916 12.18 47.9165 11.7867 47.8262C11.3934 47.7358 10.9852 47.7324 10.5904 47.8162C10.5433 47.8357 10.5034 47.8694 10.4764 47.9127C10.4493 47.9559 10.4364 48.0065 10.4395 48.0575C10.4425 48.1084 10.4614 48.1571 10.4934 48.1968C10.5255 48.2365 10.5691 48.2652 10.6182 48.279C11.297 48.2987 11.9621 48.4745 12.562 48.7927C12.6233 48.8264 12.695 48.8359 12.7629 48.8191C12.8307 48.8024 12.8898 48.7606 12.9284 48.7023C12.9669 48.6439 12.982 48.5732 12.9707 48.5042C12.9594 48.4352 12.9226 48.3729 12.8675 48.3299V48.3391ZM8.48003 49.797C9.30383 52.111 10.2017 56.2763 12.96 57.0863C13.3071 57.1881 13.4228 56.7068 13.1637 56.5309C10.6969 54.8463 9.98416 52.273 8.70217 49.6906C8.63738 49.5656 8.42912 49.6628 8.4754 49.7924L8.48003 49.797Z", "fill", "#581E1E"], ["d", "M2.45952 33.9024C4.7134 36.8597 9.54051 35.7906 9.62844 31.7827C9.68398 29.2557 7.59671 26.6918 6.10183 24.8405C5.17621 23.7159 3.11671 21.1751 1.43208 21.3186C1.20783 21.3363 0.990117 21.4026 0.793952 21.5127C0.597786 21.6228 0.427842 21.7741 0.295847 21.9563C0.163851 22.1384 0.0729474 22.347 0.029407 22.5677C-0.0141334 22.7884 -0.00927362 23.016 0.0436513 23.2346C0.312081 24.623 2.03836 25.1599 3.24629 25.1136C8.8648 24.8868 9.11009 17.2829 9.03142 13.2703C9.03142 12.951 8.53621 12.9047 8.52695 13.2333C8.47142 15.7371 8.52695 18.4677 7.64761 20.8465C7.28891 21.8524 6.68247 22.7518 5.88431 23.4614C5.4215 23.8455 3.21853 25.1876 2.59373 24.6554L2.10315 21.9434C2.51968 22.1419 2.91122 22.3886 3.26943 22.6792C5.09291 23.9843 6.43968 25.8634 7.63836 27.7377C8.53158 29.1262 9.40629 30.7275 9.09158 32.4214C8.77687 34.1152 8.21224 34.1476 6.45357 34.6429C4.52365 35.189 3.91274 35.3463 2.64927 33.7496C2.55208 33.6293 2.34844 33.7496 2.44563 33.8838L2.45952 33.9024Z", "fill", "#FF2EAE"], ["d", "M7.29654 16.6572C8.24993 15.6576 8.44893 14.0516 8.90249 12.802L8.51836 12.7743C8.87009 13.649 9.07836 14.57 9.44398 15.4447C9.61984 15.9075 9.84199 16.5786 10.2909 16.8331C10.3327 16.8592 10.3818 16.8709 10.4308 16.8666C10.4798 16.8623 10.5261 16.8422 10.5626 16.8093C10.5992 16.7763 10.6241 16.7324 10.6335 16.6841C10.6429 16.6358 10.6364 16.5858 10.6149 16.5415C10.3279 15.9399 9.96695 15.403 9.71703 14.7782C9.43472 14.0794 9.22183 13.3574 8.93951 12.6632C8.92509 12.6213 8.89795 12.5849 8.86185 12.5591C8.82576 12.5334 8.78253 12.5195 8.73819 12.5195C8.69385 12.5195 8.65062 12.5334 8.61453 12.5591C8.57844 12.5849 8.55129 12.6213 8.53687 12.6632C8.12034 13.8665 7.96298 15.4678 7.11141 16.4536C6.99108 16.5971 7.19009 16.7961 7.31968 16.6572H7.29654Z", "fill", "#FF2EAE"], ["d", "M14.7243 36.7795L15.2334 16.6196C15.2334 16.0549 14.9372 13.292 15.3213 12.9171C15.7055 12.5422 17.3299 12.8662 17.7603 12.8662H20.8565C25.2116 12.8662 29.5805 12.9634 33.9355 12.8153C33.9675 12.8153 33.9981 12.8026 34.0206 12.78C34.0432 12.7575 34.0559 12.7268 34.0559 12.6949C34.0559 12.663 34.0432 12.6324 34.0206 12.6098C33.9981 12.5873 33.9675 12.5746 33.9355 12.5746C27.6922 12.3478 21.4397 12.5191 15.1779 12.5283C15.134 12.527 15.0912 12.5426 15.0585 12.5719C15.0258 12.6012 15.0055 12.6419 15.002 12.6857C14.8201 20.7233 14.6489 28.7623 14.4883 36.8027C14.4883 36.9647 14.7336 36.9415 14.7382 36.8027L14.7243 36.7795ZM64.6522 12.7412L69.5025 12.7875C69.8912 12.7875 71.7795 12.5561 72.0109 12.7875C72.1775 12.9634 71.8489 16.4529 71.8443 16.9528V39.7647C71.8443 42.8007 71.6545 45.9339 71.9183 48.9607C71.9183 49.0949 72.1497 49.1181 72.1636 48.9607C72.7514 42.6896 72.2562 36.1362 72.2562 29.8374C72.2562 24.0847 72.2562 18.3366 72.2238 12.5839C72.2238 12.4728 72.1035 12.4219 72.0155 12.4219C69.5488 12.4219 67.0866 12.4635 64.6106 12.4867C64.4532 12.4867 64.4717 12.7273 64.6106 12.732L64.6522 12.7412ZM53.3319 52.8298C49.3888 52.7835 45.4396 52.7604 41.484 52.7604C34.5742 52.7604 27.5071 52.3485 20.6113 52.8437C20.4724 52.8437 20.4585 53.0797 20.6113 53.089C27.5534 53.6166 34.6483 53.1862 41.5858 53.1769C45.5044 53.1769 49.4225 53.1477 53.3412 53.089C53.4985 53.089 53.48 52.8483 53.3412 52.8437L53.3319 52.8298Z", "fill", "#581E1E"], ["d", "M57.5211 35.6772C57.0583 37.2184 54.9386 37.1027 55.6328 39.0048C55.7393 39.2918 56.1419 39.7083 56.1882 39.9999C56.4613 41.6937 55.6884 41.143 54.9155 41.5318C54.4527 41.7724 53.9575 41.7817 53.6659 42.3C53.3003 42.948 53.7261 43.6283 53.6381 44.2855C53.4021 46.0488 52.2497 44.938 51.0695 45.2111C49.1257 45.6739 50.5419 48.3767 47.8576 47.6038C46.4276 47.1919 46.2286 46.868 45.1317 48.1777C43.3869 50.2511 43.1555 46.9096 41.2857 47.1549C40.1195 47.3076 39.3836 48.7285 38.4487 47.0531C38.1618 46.5347 38.2636 45.8266 37.7175 45.4425C37.2547 45.1047 36.6854 45.2204 36.1393 45.262C35.8029 45.343 35.4578 45.3819 35.1119 45.3777C33.9872 44.9982 34.7046 43.9893 34.6491 43.2164C34.6779 42.98 34.6511 42.7401 34.5708 42.5159C34.4904 42.2917 34.3587 42.0894 34.1862 41.9251C33.7234 41.504 32.7654 41.6891 32.372 41.3004C31.1826 40.1156 32.6497 39.5371 32.7284 38.4911C32.7886 37.6904 32.3535 37.3757 31.7657 36.8759C29.6091 35.0247 32.5062 35.1728 32.7515 33.4557C32.8672 32.669 32.1082 32.2385 31.9972 31.5536C31.6871 29.6422 33.3393 30.3919 34.1909 29.6329C35.5515 28.4157 33.33 26.0508 36.0421 26.2868C37.9674 26.4534 37.6619 25.9073 38.4441 24.505C39.5317 22.5566 40.8692 25.0974 42.3456 24.1718C43.0676 23.709 43.4239 22.0984 44.5347 22.6445C45.2844 23.0101 45.377 24.2227 46.3211 24.4263C47.1588 24.6114 47.5938 23.8015 48.3158 23.6812C50.2272 23.3711 49.4775 25.0233 50.2365 25.8749C50.7456 26.4442 51.3195 26.3377 52.0414 26.2961C53.9899 26.1387 53.4299 26.8653 53.5132 28.3417C53.4849 28.5943 53.5206 28.85 53.6168 29.0853C53.713 29.3206 53.8668 29.528 54.0639 29.6885C55.1562 30.6141 56.5723 29.7347 55.9152 32.0025C55.7439 32.5995 55.3089 32.9281 55.4755 33.6223C55.7347 34.6637 57.2064 34.8303 57.5165 35.867C57.5284 35.9111 57.5491 35.9525 57.5772 35.9885C57.6054 36.0246 57.6404 36.0547 57.6803 36.0771C57.7402 36.111 57.8088 36.1265 57.8774 36.1215C57.9461 36.1165 58.0117 36.0912 58.066 36.0489C58.1203 36.0066 58.1608 35.9492 58.1824 35.8838C58.2041 35.8185 58.2059 35.7482 58.1876 35.6818C57.9608 34.9275 57.3267 34.7562 56.8824 34.1592C55.7948 32.7337 57.2157 32.1876 57.1925 30.864C57.199 30.6609 57.1504 30.4599 57.0518 30.2822C56.9532 30.1046 56.8083 29.957 56.6325 29.8551C55.4477 28.9526 54.1889 29.4987 54.3185 27.3374C54.4157 25.8888 53.9667 25.4306 52.5043 25.5232C50.5743 25.6528 50.8428 24.6438 50.0838 23.3804C50.0034 23.1936 49.8758 23.0309 49.7135 22.9084C49.5512 22.7859 49.3598 22.7077 49.1581 22.6815C48.0659 22.5195 47.1773 24.0376 45.974 23.3526C45.2798 22.9546 45.1317 21.7328 44.1598 21.668C43.9655 21.6717 43.7739 21.7146 43.5966 21.7941C43.4192 21.8736 43.2598 21.9881 43.1277 22.1308C42.4104 22.6954 42.5446 23.2878 41.4061 23.3387C40.5221 23.3757 40.4064 23.0147 39.6659 22.7972C37.9767 22.2974 38.2775 23.7228 37.6434 24.7503C36.6391 26.3979 34.2279 24.4726 33.7975 26.5645C33.7095 26.9995 33.941 27.4207 33.89 27.8465C33.7697 28.8924 33.2329 29.0868 32.3859 29.508C31.8953 29.7486 31.2752 29.7718 31.0299 30.3549C30.7846 30.938 31.2011 31.3777 31.3724 31.8822C31.7611 33.0438 31.8352 33.6131 30.9096 34.4369C30.6095 34.6361 30.3516 34.8924 30.1505 35.1913C30.0543 35.3571 30.0013 35.5445 29.9965 35.7361C29.9916 35.9278 30.035 36.1176 30.1228 36.2881C30.3113 36.5796 30.5569 36.8299 30.8448 37.024C31.8305 37.8987 31.812 38.3615 31.3909 39.6342C30.9697 40.907 30.8494 41.3004 32.1823 41.9483C32.8256 42.263 33.7327 42.2815 33.9641 43.1979C34.0798 43.6607 33.7466 44.2531 33.7929 44.739C33.8484 45.3314 33.941 45.697 34.501 45.9655C35.4867 46.4283 36.2133 45.5675 37.1529 46.3265C37.9072 46.9328 37.6527 47.9185 38.3191 48.5341C38.4701 48.6785 38.6579 48.7786 38.862 48.8235C39.066 48.8684 39.2785 48.8563 39.4762 48.7886C39.8372 48.7285 40.1056 48.4276 40.4388 48.3258C42.1651 47.7797 42.0679 48.3258 42.9843 49.2005C44.331 50.464 44.5671 49.4227 45.7009 48.5572C47.3162 47.3308 49.1489 50.103 50.2087 47.8676C50.5419 47.1595 50.5419 46.1367 51.5277 45.8822C52.0553 45.748 52.7218 46.1506 53.2818 46.0349C53.8418 45.9192 54.1102 45.8081 54.3277 45.2666C54.4008 44.914 54.4008 44.5502 54.3277 44.1975C54.2352 42.8091 54.6285 42.5361 55.7624 42.0177C56.2669 41.7863 56.9102 41.7354 57.1509 41.1291C57.4285 40.3747 56.6881 39.824 56.5214 39.1853C55.9846 37.3341 57.771 37.2785 58.1968 35.8577C58.2174 35.7693 58.2027 35.6763 58.156 35.5984C58.1092 35.5206 58.034 35.4639 57.9463 35.4405C57.8586 35.4171 57.7652 35.4286 57.6858 35.4728C57.6065 35.517 57.5474 35.5903 57.5211 35.6772Z", "fill", "#FF2EAE"], ["d", "M51.2066 31.3537C50.7438 30.4281 50.281 29.5025 49.3554 29.0396C47.9669 28.114 47.0413 27.1884 45.1901 26.7256C40.0992 26.2628 37.3223 30.8909 35.9339 34.5934C35.4711 36.4446 35.9339 38.2958 36.3967 40.1471C37.3223 41.5355 39.1736 42.4611 40.562 43.3868C41.4876 43.8496 42.876 43.8496 43.8017 44.3124C48.4298 45.238 51.6694 41.5355 52.1322 37.3702C52.5469 35.3184 52.2188 33.186 51.2066 31.3537ZM48.2493 31.8165C46.6942 34.76 45.2965 37.6803 44.2506 39.8925C44.1838 40.0381 44.0821 40.165 43.9545 40.2618C43.827 40.3587 43.6775 40.4226 43.5193 40.4479H43.4129C43.296 40.4466 43.1808 40.4198 43.0753 40.3694C42.9698 40.3191 42.8765 40.2464 42.802 40.1563C41.8865 39.0652 41.0127 37.9398 40.1825 36.7825C40.0936 36.65 40.0567 36.4893 40.079 36.3313C40.1012 36.1734 40.1809 36.0291 40.3028 35.9263C40.4031 35.8284 40.5376 35.7737 40.6777 35.7737C40.8178 35.7737 40.9523 35.8284 41.0526 35.9263C41.8069 36.6436 42.4734 37.3147 43.0843 37.9395C43.9877 35.4415 45.2456 33.0864 46.8192 30.9464C46.9502 30.7794 47.14 30.6686 47.3498 30.6368C47.5597 30.605 47.7738 30.6545 47.9484 30.7752C48.0392 30.8217 48.1196 30.8861 48.1848 30.9645C48.2501 31.0428 48.2989 31.1336 48.3283 31.2312C48.3576 31.3289 48.367 31.4315 48.3558 31.5328C48.3446 31.6342 48.3131 31.7322 48.2631 31.8211L48.2493 31.8165ZM75.4208 13.7345C75.2754 12.6129 75.2413 11.4797 75.319 10.3514C75.3179 10.3089 75.3052 10.2675 75.2824 10.2316C75.2596 10.1958 75.2274 10.1668 75.1894 10.1478C74.2953 9.8292 73.4625 9.35958 72.7273 8.75933L72.6902 9.22214C73.7084 8.78709 75.4208 8.75933 76.2909 8.06048C77.0129 7.46809 77.2165 5.74643 77.6562 4.82082L77.1008 4.77916C77.3924 5.59834 77.7719 7.44957 78.4615 7.99106C79.1511 8.53255 81.0301 8.62048 81.9002 8.75007L81.7659 8.28726C80.8982 8.83122 80.0022 9.32867 79.0816 9.77751C79.0285 9.8023 78.9849 9.84369 78.9573 9.89545C78.9298 9.94721 78.9198 10.0065 78.9289 10.0644L79.9841 13.6142L80.4099 13.3273C79.3214 12.6256 78.3786 11.7204 77.633 10.6615C77.6069 10.6194 77.5704 10.5847 77.5271 10.5606C77.4838 10.5365 77.435 10.5239 77.3854 10.5239C77.3359 10.5239 77.2871 10.5365 77.2438 10.5606C77.2005 10.5847 77.164 10.6194 77.1378 10.6615C76.3542 11.6067 75.6513 12.6161 75.0367 13.679C74.9302 13.8826 75.2218 14.0354 75.3653 13.8826C76.1777 12.9528 76.9349 11.9761 77.633 10.9577H77.124C77.9201 12.0827 78.9219 13.0469 80.0767 13.7993C80.2664 13.9243 80.5719 13.7484 80.5025 13.5124C80.2618 12.7163 79.276 10.7911 79.836 9.99966C80.1507 9.53685 81.5947 9.00924 82.0668 8.71767C82.2796 8.58809 82.1362 8.278 81.9325 8.25486C81.192 8.13453 79.1927 7.94015 78.7716 7.54676C78.3504 7.15338 77.8876 5.30214 77.6516 4.61718C77.6319 4.56146 77.5965 4.51265 77.5496 4.47673C77.5027 4.44081 77.4464 4.41933 77.3875 4.41491C77.3286 4.4105 77.2696 4.42333 77.2179 4.45186C77.1662 4.48038 77.1239 4.52335 77.0962 4.57553C76.7306 5.33453 76.5316 6.42676 76.0873 7.09321C75.7587 7.6023 75.9762 7.55602 75.2959 7.80594C74.3702 8.15304 73.3474 8.34742 72.4357 8.73156C72.3943 8.75267 72.359 8.78406 72.3333 8.82271C72.3075 8.86137 72.2921 8.906 72.2885 8.95232C72.2846 8.99872 72.2927 9.04535 72.3119 9.08774C72.3312 9.13013 72.3611 9.16684 72.3987 9.19437C72.8476 9.58637 73.3474 9.91635 73.8843 10.1755C74.4952 10.4301 74.6387 10.2912 74.8099 10.7587C75.1154 11.5825 74.8423 12.8691 75.0089 13.7716C75.0737 14.0168 75.4578 13.9891 75.4208 13.7345Z", "fill", "#FF2EAE"], ["d", "M43.5775 57.6193C42.8417 63.0712 43.7626 71.661 48.9646 74.8682C49.8491 75.4394 50.8902 75.7194 51.9419 75.6687C52.9935 75.6181 54.0029 75.2395 54.8284 74.5859C56.1613 73.4798 56.7306 71.3463 55.2357 70.1013C53.4261 68.6064 52.3339 70.8742 52.1765 72.4755C51.9359 74.8729 52.9031 77.2008 54.1851 79.177C57.1702 83.8051 62.0899 87.2391 66.9911 89.5393C73.836 92.7512 81.639 94.3201 89.1828 94.4173C89.4466 94.4173 89.4975 93.9545 89.2244 93.9545C78.117 92.7188 66.6671 90.7148 58.1236 82.8471C55.754 80.6626 53.3428 77.932 52.7921 74.6461C52.6852 73.9762 52.6852 73.2935 52.7921 72.6236C52.8018 72.1598 52.8911 71.7012 53.0559 71.2676L55.3468 72.4848C55.754 73.6603 52.9818 74.8312 52.4496 74.9377C51.5421 75.1083 50.6039 74.9868 49.7699 74.5905C46.956 73.3086 45.5306 69.782 44.679 67.0051C43.8003 63.9544 43.4866 60.7689 43.7534 57.6054C43.7534 57.4573 43.5451 57.462 43.5266 57.6054L43.5775 57.6193Z", "fill", "#581E1E"], [1, "sm:mx-auto", "w-fit", "md:w-auto"], [4, "ngFor", "ngForOf"], [1, "flex", "gap-2", "font-normal", "font-roboto", "pt-3", "md:text-base", "text-[16px]", "sm:text-[18px]", "before:mt-1", "before:content-['']", "before:flex-shrink-0", "before:bg-[url('https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/experts-detail-page-icons/icon.svg')]", "before:h-5", "before:w-5"]],
    template: function EducationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducationComponent_div_1_Template, 25, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorsDetailsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return EducationComponent;
})();


/***/ }),

/***/ 91509:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/languages-known/languages-known.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagesKnownComponent: () => (/* binding */ LanguagesKnownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function LanguagesKnownComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctorsLangData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doctorsLangData_r2, " ");
  }
}
function LanguagesKnownComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Languages Known ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LanguagesKnownComponent_div_0_ng_container_4_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_languages == null ? null : ctx_r0.doctorsDetailsData.dr_languages.split(","));
  }
}
let LanguagesKnownComponent = /*#__PURE__*/(() => {
  var _class;
  class LanguagesKnownComponent {}
  _class = LanguagesKnownComponent;
  _class.ɵfac = function LanguagesKnownComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-languages-known"]],
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container mt-10", 4, "ngIf"], [1, "container", "mt-10"], [1, "text-theme-brown", "font-lora", "font-bold", "text-[23px]", "sm:text-[30px]"], [1, "flex", "flex-wrap", "gap-2", "py-6", "mb-5", "capitalize", "sm:gap-5"], [4, "ngFor", "ngForOf"], [1, "border-2", "sm:px-4", "py-1", "px-4", "text-[15px]", "sm:text-[19px]", "rounded-full", "font-roboto"]],
    template: function LanguagesKnownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LanguagesKnownComponent_div_0_Template, 5, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorsDetailsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return LanguagesKnownComponent;
})();


/***/ }),

/***/ 4678:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/overview/overview.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function OverviewComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_signature == null ? null : ctx_r0.doctorsDetailsData.dr_signature.about_me, " ");
  }
}
let OverviewComponent = /*#__PURE__*/(() => {
  var _class;
  class OverviewComponent {}
  _class = OverviewComponent;
  _class.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-overview"]],
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 25,
    vars: 1,
    consts: [[1, "container"], [1, "relative"], [1, "absolute", "mt-4", "w-[40px]", "right-8", "-top-11", "lg:hidden"], ["width", "100%", "height", "100%", "viewBox", "0 0 89 137", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M89.0002 83.4347C87.9478 77.6786 86.8516 71.9374 85.7843 66.1887C85.0434 62.0858 84.9692 56.8385 83.0431 53.1198C82.9836 52.9752 82.88 52.853 82.7469 52.7708C82.6138 52.6886 82.4582 52.6506 82.3022 52.6622C67.9494 54.7581 53.5604 56.5285 39.1631 58.2855C38.9738 58.3134 38.8025 58.4134 38.6851 58.5646C38.5678 58.7158 38.5134 58.9065 38.5335 59.0969C39.623 67.3843 39.7928 75.8037 40.7562 84.1133C36.9255 86.6669 32.6053 88.9468 29.1825 91.9876C26.1298 94.6732 26.2188 97.8905 27.7007 101.448C29.8715 106.776 32.391 111.691 33.3692 117.453C34.3334 123.248 33.7052 129.194 31.5536 134.663C31.3682 135.164 32.1618 135.607 32.4206 135.106C36.0511 128.102 35.3843 119.712 33.3247 112.347C32.7331 110.252 32.0355 108.188 31.2347 106.163C30.2349 103.624 28.5083 100.954 28.182 98.2154C27.6117 93.4116 32.1981 91.4855 35.5023 89.0432C37.3038 87.7074 39.0815 86.342 40.8749 85.0063C41.001 86.0172 41.1271 87.0355 41.2828 88.0464C41.2936 88.1198 41.3244 88.1888 41.3718 88.2459C41.2972 88.4085 41.2845 88.5928 41.3363 88.7641C41.3881 88.9354 41.5007 89.0819 41.6529 89.1759C41.7537 89.239 41.8682 89.2769 41.9867 89.2865C43.377 89.2178 44.7418 88.8872 46.0095 88.3119C45.6386 89.5668 45.2685 90.8135 44.8094 92.0017C44.2087 92.3414 43.5872 92.6588 42.9568 92.9614C42.4049 93.1777 41.9012 93.5011 41.4749 93.913C41.4331 93.9628 41.4099 94.0255 41.409 94.0906C41.4082 94.1556 41.4299 94.2189 41.4705 94.2697C41.4974 94.3036 41.5319 94.3305 41.5713 94.3483C41.9828 94.4736 42.4184 94.4981 42.8413 94.4199C43.2643 94.3417 43.6623 94.163 44.0018 93.8989C43.0639 95.8732 41.5998 97.5507 39.7706 98.7472C39.5629 98.8799 39.7706 99.2559 40.0079 99.1232C42.396 97.6332 44.2466 95.4204 45.2908 92.8064L45.3724 92.7182C45.4095 92.6762 45.4372 92.6269 45.4539 92.5735C45.4705 92.5201 45.4756 92.4637 45.4688 92.4081C46.5583 89.8991 47.2992 87.1534 48.3583 84.6006C48.8701 83.368 49.6332 81.0881 50.7368 80.3056C51.2805 79.3607 52.1275 79.5157 53.2785 80.7706C55.2046 80.7017 55.9241 81.4077 55.4346 82.8881C55.6571 84.0102 55.1898 85.5225 55.0192 86.6669C54.6668 88.6802 54.1288 90.6565 53.412 92.5706C53.3138 92.6438 53.2395 92.7446 53.1986 92.8601C53.1577 92.9757 53.1519 93.1007 53.1821 93.2195C52.6778 94.6954 52.1742 96.1194 51.7893 97.6473C51.6458 98.2126 51.5613 98.7912 51.5371 99.3739C51.4622 99.492 51.4224 99.6289 51.4224 99.7688C51.4224 99.9087 51.4622 100.046 51.5371 100.164C51.6187 102.12 52.2788 103.934 52.6192 106.016C53.2422 109.787 51.5964 113.262 51.3005 116.967C51.2696 118.593 51.3688 120.22 51.5972 121.83C51.7117 124.188 51.1318 126.528 49.9292 128.56C48.5734 131.106 47.314 133.438 48.0327 136.353C48.0351 136.37 48.0409 136.387 48.0499 136.402C48.0588 136.418 48.0707 136.431 48.0848 136.442C48.099 136.452 48.1151 136.46 48.1323 136.464C48.1494 136.469 48.1673 136.469 48.1848 136.467C48.2022 136.465 48.2191 136.459 48.2343 136.45C48.2495 136.441 48.2628 136.429 48.2734 136.415C48.284 136.401 48.2917 136.385 48.2961 136.368C48.3005 136.351 48.3015 136.333 48.299 136.316C47.7731 131.297 51.856 128.28 52.278 123.609C52.4783 121.395 51.8627 119.217 52.0259 116.967C52.2261 114.207 53.3601 111.631 53.6494 108.849C53.7696 107.58 53.7071 106.3 53.464 105.049C53.1599 103.587 52.9395 102.109 52.8039 100.621C53.2027 100.694 53.5809 100.852 53.9124 101.085C54.2438 101.318 54.5205 101.621 54.7233 101.972C55.0793 102.886 55.109 103.994 55.4205 104.924C55.8054 106.105 56.3312 107.536 57.4207 108.244C58.8284 109.167 60.9548 108.495 60.8806 106.768C64.1707 107.411 62.7704 101.367 62.022 99.204C63.9037 97.2928 61.6957 93.0207 60.5402 90.8877C62.2371 90.4524 63.5484 89.3673 63.6374 87.3974C71.8254 86.6076 79.983 85.3386 88.0887 83.7959C88.1651 83.8631 88.2585 83.9079 88.3587 83.9256C88.4589 83.9433 88.562 83.933 88.6568 83.896C88.7511 83.8584 88.8331 83.7954 88.8937 83.7139C88.9544 83.6325 88.9912 83.5358 89.0002 83.4347ZM57.4348 106.857L57.0351 106.119C56.8067 105.56 56.6111 104.988 56.4492 104.407C56.1236 103.381 56.0939 102.068 55.5681 101.152C55.0415 100.237 53.8118 99.7729 52.7749 99.3449C52.8083 98.6181 52.9129 97.8965 53.0864 97.1897C53.7698 97.6219 54.4121 98.1159 55.0051 98.6656C55.9975 99.6401 56.2867 101.537 56.9312 102.798C57.5765 104.06 58.6133 105.935 60.0581 106.576L57.4348 106.857ZM62.252 104.931C60.4734 107.794 57.8057 102.097 57.4949 101.462C57.0425 100.452 56.82 99.2485 56.0568 98.4446C55.2148 97.659 54.2908 96.9663 53.3008 96.3783C53.3824 96.1194 53.4714 95.8539 53.5752 95.5884C53.748 95.1263 53.9164 94.6658 54.0788 94.2082C54.3755 94.5998 54.6276 95.0789 54.9013 95.4111C55.554 96.2159 56.309 96.8871 57.0277 97.625C58.132 98.7613 59.8141 100.754 61.5919 99.5808C61.6364 99.5808 61.6735 99.5066 61.718 99.4777C62.2371 101.079 63.0077 103.728 62.2594 104.931H62.252ZM61.8885 97.8097C60.7545 100.525 58.0727 97.1674 57.1315 96.2381C56.3906 95.5001 54.6343 94.0902 54.6714 93.0133C54.6794 92.8801 54.6591 92.7466 54.6121 92.6217C54.8197 91.9654 55.0051 91.3157 55.1831 90.6593C56.7206 91.1822 58.3641 91.3238 59.9691 91.0724C60.9555 92.8435 62.6888 95.8836 61.8885 97.8097ZM55.4123 89.8175C55.5606 89.2345 55.6867 88.6516 55.8128 88.0612C55.8521 88.0642 55.8914 88.0642 55.9315 88.0612C58.3545 87.921 60.7694 87.729 63.1776 87.5005C62.8141 91.2934 58.0801 89.8175 55.4123 89.8175ZM56.1021 86.4525C56.2504 85.5447 56.3683 84.6303 56.4499 83.6928C56.7985 79.7004 53.8785 75.2578 50.1887 79.3096C48.1291 81.5672 47.1583 84.4011 46.2913 87.2795C45.7232 87.4493 45.1439 87.5799 44.5573 87.6704C43.8163 87.7735 43.0235 87.7586 42.2677 87.855C41.7708 81.9514 41.2227 76.0922 40.8378 70.1959C40.6376 67.1922 40.4447 64.1884 40.1851 61.1921C40.1851 60.8087 39.9041 60.0121 40.0524 59.7162C40.2007 59.4218 42.1787 59.444 42.9642 59.3476C45.5971 59.0376 48.2322 58.7209 50.8703 58.396C56.1414 57.7463 61.4072 57.0655 66.6678 56.352L73.8472 55.3626L78.1526 54.75C78.8119 54.6543 81.6347 53.8207 81.8572 53.946C82.8503 54.5512 83.0283 59.0086 83.2278 60.093C83.7217 62.6562 84.2038 65.2171 84.6733 67.7751C85.6659 73.0269 86.7327 78.2643 87.8736 83.4859C77.2559 84.3277 66.742 86.0691 56.1013 86.4451L56.1021 86.4525Z", "fill", "#581E1E"], ["d", "M55.2544 83.8625C55.4028 83.7883 55.3212 83.5213 55.158 83.5732C54.4778 83.7906 53.7468 83.7906 53.0665 83.5732C52.4701 83.327 51.909 83.0028 51.3978 82.6091C51.3587 82.5833 51.3126 82.5703 51.2658 82.5719C51.219 82.5734 51.1739 82.5896 51.1367 82.618C51.0997 82.6468 51.0728 82.6865 51.0597 82.7315C51.0467 82.7765 51.0482 82.8245 51.064 82.8686C51.6574 84.4484 54.001 84.5003 55.2544 83.8625ZM63.7643 46.705C62.9411 44.2322 60.6122 39.3773 57.6293 36.5085C57.6012 35.8539 57.5251 35.2022 57.4016 34.5587C56.5783 30.3163 53.6762 26.8876 50.3187 24.4001C44.6694 20.2171 37.3588 17.7666 30.3641 18.6477C31.4004 18.0643 32.3584 17.3515 33.2151 16.5265C33.2605 16.4861 33.2941 16.4341 33.3125 16.3762C33.3308 16.3182 33.3332 16.2564 33.3194 16.1972C33.3056 16.138 33.2761 16.0836 33.234 16.0397C33.1919 15.9959 33.1387 15.9642 33.0801 15.948C33.0022 15.9277 32.9195 15.937 32.8479 15.974C31.2682 16.6385 29.8501 17.9312 28.4395 18.9614C28.3736 18.9781 28.3142 19.0139 28.2686 19.0643C28.2231 19.1148 28.1935 19.1775 28.1836 19.2447C28.173 19.3118 28.1817 19.3805 28.2088 19.4428C28.2358 19.505 28.2801 19.5583 28.3364 19.5963C29.5705 20.441 30.7171 21.4267 32.0099 22.2337C32.0604 22.2681 32.1173 22.2922 32.1773 22.3043C32.2372 22.3164 32.299 22.3164 32.3589 22.3042C32.4189 22.292 32.4758 22.268 32.5263 22.2334C32.5768 22.1989 32.6198 22.1546 32.6529 22.1031C32.721 21.9989 32.7457 21.8722 32.7217 21.75C32.6977 21.6278 32.627 21.5198 32.5246 21.449C31.5775 20.6865 30.5615 20.0139 29.4897 19.4398C38.696 19.1187 49.4887 21.6811 54.8376 29.95C56.047 31.7498 56.803 33.8155 57.0411 35.9708C54.911 34.1856 52.5006 33.4907 50.0769 35.373C46.0793 38.4806 51.9355 46.5781 55.609 43.1123C57.0122 41.7825 57.5781 39.6688 57.6589 37.6143C58.1225 38.089 58.5608 38.5874 58.9739 39.1081C60.8578 41.4654 62.3283 44.1252 63.323 46.9742C63.4113 47.2278 63.8674 47.0187 63.7643 46.705ZM53.7222 43.1123C51.1263 42.7415 50.3031 41.3101 50.0628 40.7716C49.3723 39.2238 49.6919 37.8272 50.0628 37.0855C50.4336 36.3439 50.7436 35.5629 51.891 35.224C53.0383 34.8843 55.7625 35.9708 57.0337 37.0462C56.9388 39.5264 56.318 43.4832 53.7222 43.1123Z", "fill", "#581E1E"], ["d", "M13.5852 16.2852C14.4163 17.6228 14.7057 19.2271 14.3944 20.7708C14.2253 21.5755 13.4161 23.4667 12.2324 22.2712C11.8868 21.9159 11.843 20.8872 11.7911 20.4229C11.7102 19.6703 11.7276 18.9104 11.843 18.1623C11.9113 17.7218 12.0173 17.2886 12.159 16.8652C12.8992 16.8118 13.2448 17.0535 13.1958 17.5898C13.4973 18.9171 13.3282 20.3079 12.7175 21.5243L14.1296 21.5755C13.5543 20.1223 13.4214 18.5316 13.7476 17.0031L12.2398 17.1336C12.9375 18.4708 13.1257 20.0158 12.7694 21.4813L13.5926 20.8939C13.8211 20.8939 13.5481 19.6182 13.534 19.2785C13.5173 18.4758 13.5889 17.6737 13.7476 16.8867L12.3207 17.394C13.402 18.6333 13.0564 20.394 12.7323 21.8581L13.6075 21.1334C13.2107 21.1334 13.2989 18.6266 13.2544 18.4375L13.2915 17.8798C12.713 17.1648 12.6099 17.121 12.9822 17.7492C13.178 18.278 13.3212 18.8239 13.4087 19.3794C13.4532 19.8504 13.5051 21.6192 12.8725 21.8581L13.6883 21.9085C12.4675 21.1839 13.5852 18.6548 13.3946 17.8442C13.5711 18.6044 14.6962 18.3945 14.8653 17.7344C14.908 17.4986 14.8906 17.2559 14.8149 17.0286C14.7393 16.8013 14.6076 16.5967 14.4322 16.4335C14.2552 16.2687 14.0408 16.1494 13.8075 16.0858C13.5742 16.0222 13.3289 16.0163 13.0927 16.0686C11.7399 16.2926 11.5263 17.8145 11.4529 18.9092C11.3721 20.17 11.335 21.8069 12.2465 22.8578C13.3501 24.1038 14.387 22.8578 14.7252 21.7275C15.1823 20.1933 15.0887 18.5475 14.4604 17.075C14.0933 16.2132 13.3353 15.3217 12.3207 16.01C11.3061 16.6983 11.5345 18.9084 11.6517 19.9809C11.7689 21.0533 12.0188 22.7785 13.4391 22.7347C13.6505 22.7451 13.8581 22.6769 14.0206 22.5419C14.1824 22.4084 14.2872 22.2182 14.3135 22.0101C14.7326 20.0098 14.9239 17.9524 13.5051 16.2926C13.4058 16.1896 13.2816 16.1139 13.1446 16.0729C13.0075 16.0318 12.8622 16.0268 12.7227 16.0582C12.5831 16.0874 12.4536 16.1525 12.3469 16.247C12.2403 16.3416 12.1602 16.4624 12.1145 16.5974C11.8356 18.0466 11.1147 22.3943 13.5192 22.5315C13.7024 22.5352 13.8826 22.4796 14.031 22.3743C14.1793 22.2682 14.2891 22.1176 14.3425 21.9448C14.8186 20.0617 14.5798 18.0733 13.6735 16.3504C13.3798 15.7853 12.2984 15.7712 12.1664 16.481C11.78 18.3574 11.9587 20.305 12.6811 22.0828C12.7367 22.2192 12.8309 22.3379 12.9533 22.4232C13.0449 22.4868 13.149 22.5301 13.2587 22.55C13.3685 22.5699 13.4812 22.566 13.5892 22.5385C13.6973 22.5111 13.7983 22.4608 13.8852 22.391C13.9722 22.3212 14.0431 22.2335 14.0933 22.134C14.8282 20.4882 15.4898 16.1554 13.27 15.2201C10.4012 14.0105 10.4457 19.2059 10.6371 20.6121C10.7691 21.554 10.982 22.8942 11.8645 23.5097C12.2496 23.7337 12.7022 23.8121 13.1402 23.7308C13.5772 23.6504 13.9704 23.415 14.2475 23.0677C16.0275 21.1839 15.3355 17.945 14.0117 16.0464C13.9739 15.9887 13.915 15.9481 13.8477 15.9331C13.7804 15.9181 13.7099 15.93 13.6512 15.9662C13.6222 15.9839 13.597 16.0072 13.5771 16.0348C13.5572 16.0623 13.5431 16.0936 13.5356 16.1268C13.528 16.1599 13.5272 16.1942 13.5332 16.2277C13.5392 16.2611 13.5518 16.293 13.5704 16.3215L13.5852 16.2852Z", "fill", "#FF2EAE"], ["d", "M12.4155 29.4324C11.6849 29.4291 10.9687 29.2287 10.3425 28.8524C7.85646 27.4032 7.40108 23.6422 7.16523 21.4031C6.95979 19.606 6.48141 13.5043 9.18034 10.686C9.66658 10.1717 10.2633 9.77451 10.9255 9.52454C11.5905 9.27315 12.3036 9.1748 13.0118 9.23677C13.4521 9.28413 13.8785 9.41904 14.2659 9.63356C14.6531 9.84716 14.9913 10.1364 15.262 10.4835C16.334 11.8313 17.1174 13.3851 17.5634 15.0485C19.2915 19.563 18.9607 23.9247 16.666 27.019C16.1908 27.7173 15.5615 28.2972 14.8266 28.7137C14.088 29.1328 13.263 29.3785 12.4155 29.4324ZM12.6588 10.1357C12.1304 10.1165 11.604 10.2101 11.1146 10.4101C10.6258 10.6103 10.1875 10.9122 9.82781 11.2949C7.33433 13.9033 7.90838 20.0911 8.04781 21.3089C8.29034 23.3885 8.69529 26.8744 10.7979 28.1063C12.7173 29.2366 14.7688 28.1063 15.9451 26.5413C18.0566 23.6933 18.3429 19.6283 16.7253 15.3963V15.3095C16.534 14.5412 15.064 10.3018 12.9895 10.1861L12.6588 10.1357Z", "fill", "#FF2EAE"], ["d", "M12.284 33.7605C11.2471 33.7544 10.231 33.469 9.34256 32.9343C5.82706 30.8769 5.20999 25.4998 4.83471 22.2899C4.53359 19.7029 3.85719 10.9498 7.70273 6.92771C8.39151 6.20998 9.2342 5.65791 10.1673 5.3131C11.1037 4.96613 12.1063 4.83432 13.1006 4.92743C13.7117 4.99418 14.3028 5.18257 14.8391 5.47998C15.3734 5.7764 15.8426 6.17747 16.2186 6.65923C18.1306 8.78262 19.3069 12.3478 19.513 13.1814C21.9835 19.6592 21.5207 25.9129 18.2403 30.3332C16.8141 32.2823 14.6292 33.7605 12.284 33.7605ZM12.6074 5.79741C11.8133 5.77261 11.0229 5.91408 10.2867 6.21274C9.5534 6.51004 8.89102 6.95862 8.34279 7.5292C4.66561 11.3696 5.51111 20.4134 5.71729 22.1883C6.07032 25.2387 6.66662 30.3407 9.79127 32.1741C12.6815 33.8695 15.7476 32.2245 17.512 29.8474C20.6159 25.6667 21.0349 19.7029 18.6675 13.5219V13.3839C18.4243 12.3552 16.226 5.95687 13.0709 5.78999L12.6074 5.79741Z", "fill", "#FF2EAE"], ["d", "M12.0932 38.5083C10.7269 38.5017 9.38774 38.126 8.2173 37.4211C3.57743 34.6969 2.74602 27.545 2.25503 23.2693C1.8575 19.8206 0.945251 8.14672 6.05608 2.80597C6.96366 1.86143 8.07357 1.13493 9.30235 0.681096C10.5362 0.224958 11.8568 0.0520891 13.1664 0.175279C13.9617 0.265014 14.7312 0.512089 15.43 0.902113C16.1258 1.29034 16.7364 1.81444 17.2256 2.4433C19.8066 5.34173 21.3952 10.1537 21.6385 11.1898C24.9322 19.8198 24.3219 28.1532 19.9542 34.0376C18.0711 36.5741 15.1971 38.5083 12.0932 38.5083ZM12.5271 1.03042C11.4421 0.996709 10.3621 1.19048 9.3565 1.59928C8.3551 2.00616 7.45084 2.61979 6.70281 3.40005C1.73142 8.59543 2.86394 20.7914 3.14281 23.1603C3.62119 27.2765 4.41551 34.1607 8.68084 36.6601C12.6295 38.9793 16.8288 36.7476 19.2333 33.508C23.4178 27.8639 23.9911 19.8421 20.7997 11.4872V11.3997C20.6232 10.7693 17.8071 1.32783 13.1516 1.08085L12.5271 1.03042Z", "fill", "#FF2EAE"], ["d", "M11.5626 38.5666C5.24729 38.1104 1.46702 32.9151 0.326334 23.1325C-0.0704579 19.683 -0.981967 8.00913 4.12886 2.66839C5.0369 1.72422 6.14702 0.998 7.37588 0.544252C8.60976 0.0883614 9.93031 -0.0845005 11.24 0.038435L11.188 0.915085C10.0121 0.801191 8.82547 0.951192 7.71482 1.35415C6.60837 1.75516 5.60634 2.40002 4.78301 3.24095C-0.188383 8.43633 0.944142 20.6323 1.22375 23.0019C2.3051 32.3128 5.80503 37.2405 11.6368 37.661L11.5626 38.5666Z", "fill", "#FF2EAE"], ["d", "M1.48133 10.59C0.139294 18.2159 0.849877 26.0615 3.5402 33.3221C3.72413 33.8361 4.54071 33.6915 4.40053 33.133C2.19556 24.365 0.944363 15.5688 3.32734 6.71333L2.04722 6.42408C1.65785 8.09728 1.27589 9.77864 0.856105 11.4452L1.75352 11.6699C2.21188 9.88357 2.84228 8.14589 3.63587 6.48119L2.79779 6.21345C2.022 8.27645 1.43612 10.406 1.04745 12.5755C0.965871 13.0323 1.73869 13.2207 1.85587 12.7713C2.69753 9.59154 4.02492 6.56076 5.79116 3.78597C5.86176 3.6474 5.87729 3.48724 5.83464 3.33769C5.79199 3.18813 5.69431 3.06026 5.56124 2.97978C5.42795 2.89773 5.26923 2.86737 5.11507 2.89443C4.96092 2.92149 4.82202 3.0041 4.72464 3.12663L2.62127 6.02506L3.61362 6.62581C4.58575 4.5767 6.18904 2.89309 8.18822 1.82203C8.268 1.77925 8.33846 1.72101 8.3955 1.65072C8.45255 1.58044 8.49503 1.4995 8.52049 1.41263C8.55842 1.28173 8.55514 1.14232 8.51108 1.01335C8.46703 0.884371 8.38434 0.772083 8.27426 0.691734C8.16414 0.609396 8.03188 0.561929 7.89453 0.555452C7.75719 0.548974 7.62105 0.583784 7.50367 0.655392C5.31264 1.91644 3.57764 3.83943 2.54785 6.14818C2.49009 6.2764 2.4816 6.42141 2.52402 6.5555C2.56643 6.68958 2.65677 6.80333 2.77776 6.87501C2.89909 6.94808 3.04248 6.97553 3.18221 6.95242C3.32194 6.92932 3.44886 6.85717 3.5402 6.74893L5.79783 3.77855L4.73131 3.11847C2.98126 6.02787 1.7381 9.21339 1.05487 12.5391L1.89296 12.6259C2.27392 10.5135 2.86015 8.44335 3.64329 6.44484C3.84947 5.90862 3.04773 5.72024 2.80521 6.1771C1.99151 7.85463 1.34128 9.60662 0.863521 11.4088C0.839376 11.524 0.861201 11.644 0.924338 11.7433C0.988923 11.843 1.08888 11.9145 1.20407 11.9434C1.31926 11.9723 1.44113 11.9564 1.54511 11.8991C1.6484 11.8417 1.72548 11.7465 1.7602 11.6335C2.26082 9.97444 2.81262 8.322 3.34143 6.66957C3.59879 5.87302 2.29791 5.57561 2.06206 6.38032C-0.599788 15.2855 1.17205 24.4955 3.53278 33.2784L4.35603 32.9884C1.62076 25.6258 1.06229 18.3145 2.01088 10.6197C2.04796 10.3149 1.52509 10.2489 1.4665 10.5463L1.48133 10.59ZM76.6752 65.2657C73.7775 65.0951 70.8799 65.3087 67.9814 65.1374C67.923 65.1318 67.864 65.1406 67.8098 65.1629C67.7555 65.1853 67.7075 65.2206 67.6699 65.2657L64.2508 60.1972C64.2221 60.1498 64.1785 60.1133 64.1269 60.0932C64.0753 60.0731 64.0185 60.0705 63.9653 60.0859C63.9123 60.1003 63.8655 60.1315 63.8318 60.1749C63.7983 60.218 63.78 60.2709 63.7799 60.3255C63.7799 63.0021 64.3013 64.639 61.4755 65.5935C59.4264 66.1565 57.3494 66.6125 55.2529 66.9597C55.1497 66.978 55.056 67.0318 54.9882 67.1117C54.9212 67.1907 54.8844 67.2908 54.8844 67.3943C54.8844 67.4978 54.9212 67.5979 54.9882 67.6769C55.0549 67.7562 55.1491 67.8104 55.2522 67.8282C56.4403 68.0922 57.7086 68.2554 58.8752 68.5402C59.6174 68.5236 60.3404 68.7765 60.9104 69.2522C61.9198 69.5088 62.1979 70.1518 61.744 71.1813C61.9828 73.9581 61.744 76.8765 61.744 79.6741C61.744 80.0019 62.2439 80.3008 62.4686 79.9307C62.9611 79.0333 65.8662 72.3991 66.0909 72.4057C67.1196 72.4057 70.3073 77.7235 71.1624 78.727C71.4012 79.0051 71.8144 78.6773 71.7343 78.3784C71.1698 76.2431 70.1115 73.6799 70.0247 71.4809C69.8653 67.5434 73.647 66.7817 76.8347 66.0274C77.3568 65.9777 77.1247 65.2939 76.6752 65.2657Z", "fill", "#FF2EAE"], [1, "absolute", "hidden", "left-44", "-top-[6.75rem]", "lg:inline-block", "z-[1]"], ["width", "80", "height", "120", "viewBox", "0 0 89 137", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], [1, "text-theme-brown", "font-bold", "relative", "mt-5", "md:mt-12", "font-lora", "text-[23px]", "sm:text-[30px]"], ["class", "font-roboto sm:text-[21px] mx-4 mt-3 lg:w-[calc(100%-430px)]", 4, "ngIf"], [1, "font-roboto", "sm:text-[21px]", "mx-4", "mt-3", "lg:w-[calc(100%-430px)]"]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 4)(15, "path", 5)(16, "path", 6)(17, "path", 7)(18, "path", 8)(19, "path", 9)(20, "path", 10)(21, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OverviewComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorsDetailsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return OverviewComponent;
})();


/***/ }),

/***/ 83720:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/price-box/price-box.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 4169:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/programs/components/program-card/program-card.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramCardComponent: () => (/* binding */ ProgramCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);




function ProgramCardComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorProgramData == null ? null : ctx_r0.doctorProgramData.pkg_duration, " week Program ");
  }
}
function ProgramCardComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const howItWorks_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", howItWorks_r2 == null ? null : howItWorks_r2.desc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
let ProgramCardComponent = /*#__PURE__*/(() => {
  var _class;
  class ProgramCardComponent {
    constructor(router) {
      this.router = router;
    }
    getPackageData(slug) {
      this.router.navigate(['/program/', slug]);
    }
  }
  _class = ProgramCardComponent;
  _class.ɵfac = function ProgramCardComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-program-card"]],
    inputs: {
      doctorProgramData: "doctorProgramData"
    },
    decls: 18,
    vars: 7,
    consts: [[1, "flex", "flex-col", "justify-between", "h-full", "border-2", "border-theme-lightest-green", "rounded-3xl"], [1, "p-4", "sm:p-7"], [1, "mb-3", "text-2xl", "font-bold", "font-lora", "text-theme-base-dark-green", "text-[16px]", "sm:text-[25px]", "ml-2"], ["class", "flex px-4 py-1 mb-4 text-sm rounded-full bg-theme-bg-light-green-shade-3", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "months", "bg-theme-bg-light-green-shade-3", "rounded-b-3xl"], [1, "amount-all-months", "text-center", "font-roboto", "text-theme-darker-green", "text", "md:font-light", "pt-3", "text-[12px]", "sm:text-[20px]", "line-through", "font-bold"], [1, "font-roboto", "md:text-[23px]", "text-[17px]", "text-black", "text-center"], [1, "font-bold", "text-xl", "mr-1", "sm:text-[23px]", "text-theme-darker-green"], [1, "text-base", "sm:text-[23px]", "text-theme-darker-green"], [1, "flex", "justify-center", "w-full", "gap-3", "px-5", "py-2", "mx-auto", "mt-3", "font-bold", "sm:text-2xl", "group", "font-roboto", "rounded-3xl", "text-theme-light-pink", 3, "click"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/icons/did-you-know/up-right.svg", 1, "mt-1", "transition-transform", "sm:mt-2", "fill-theme-light-pink", "icon", "group-hover:translate-x-2", "group-hover:-translate-y-1"], [1, "flex", "px-4", "py-1", "mb-4", "text-sm", "rounded-full", "bg-theme-bg-light-green-shade-3"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/consultation-page/svg-icon/watch-icon.svg", 1, "w-4", "h-4", "me-2"], [1, "sm:text-[14px]", "text-[12px]", "font-roboto"], [1, "flex", "gap-2", "mb-3", "text-[12px]", "sm:text-[21px]", "font-roboto"], ["viewBox", "0 0 16 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "shrink-0", "mt-1", "sm:mt-3", "w-[12px]", "sm:w-[16px]", "sm:h-[12px]"], ["d", "M5.16613 12C4.71195 12.0002 4.27638 11.8126 3.9555 11.4787L0.295374 7.67744C-0.098458 7.26814 -0.098458 6.60467 0.295374 6.19536C0.689332 5.78619 1.32794 5.78619 1.7219 6.19536L5.16613 9.77374L14.2781 0.306878C14.6721 -0.102293 15.3107 -0.102293 15.7046 0.306878C16.0985 0.716179 16.0985 1.37966 15.7046 1.78896L6.37675 11.4787C6.05587 11.8126 5.6203 12.0002 5.16613 12Z", "fill", "#93CFCF"], [1, "", 3, "innerHTML"]],
    template: function ProgramCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProgramCardComponent_button_4_Template, 4, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProgramCardComponent_ng_container_6_Template, 5, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProgramCardComponent_Template_button_click_15_listener() {
          return ctx.getPackageData(ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_slug);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_duration) != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_how_it_works == null ? null : ctx.doctorProgramData.pkg_how_it_works.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_standard_price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_sell_price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_duration) != 1 ? "Per Program" : "Per Consult");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.doctorProgramData == null ? null : ctx.doctorProgramData.pkg_duration) != 1 ? "Get Program" : "Consult Now", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective],
    encapsulation: 2
  });
  return ProgramCardComponent;
})();


/***/ }),

/***/ 26149:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/programs/programs.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramsComponent: () => (/* binding */ ProgramsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-splide */ 10080);
/* harmony import */ var _components_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/program-card/program-card.component */ 4169);




function ProgramsComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "splide-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-program-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctorProgramData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("doctorProgramData", doctorProgramData_r2);
  }
}
function ProgramsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "splide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProgramsComponent_div_0_ng_container_4_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_name, " Included Programs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.programSliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_packages);
  }
}
let ProgramsComponent = /*#__PURE__*/(() => {
  var _class;
  class ProgramsComponent {
    constructor() {
      this.programSliderConfig = {
        // destroy: true,
        perPage: 3,
        gap: 40,
        padding: 120,
        arrows: false,
        pagination: false,
        breakpoints: {
          1280: {
            perPage: 2
          },
          992: {
            perPage: 1
          },
          640: {
            gap: 20,
            padding: 60
          }
        }
      };
    }
  }
  _class = ProgramsComponent;
  _class.ɵfac = function ProgramsComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-programs"]],
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "text-theme-brown", "font-lora", "text-[23px]", "sm:text-[30px]", "font-bold", "py-8"], [1, "book-now-program-slider", "pb-10", "block", 3, "options"], [4, "ngFor", "ngForOf"], [1, "block", "h-full", 3, "doctorProgramData"]],
    template: function ProgramsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProgramsComponent_div_0_Template, 5, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_packages) && (ctx.doctorsDetailsData == null ? null : ctx.doctorsDetailsData.dr_packages == null ? null : ctx.doctorsDetailsData.dr_packages.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideSlideComponent, _components_program_card_program_card_component__WEBPACK_IMPORTED_MODULE_0__.ProgramCardComponent],
    encapsulation: 2
  });
  return ProgramsComponent;
})();


/***/ }),

/***/ 47764:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/specialist/specialist.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialistComponent: () => (/* binding */ SpecialistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 14565);


function SpecialistComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctorSpecialistData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doctorSpecialistData_r2 == null ? null : doctorSpecialistData_r2.aoe_name, " ");
  }
}
function SpecialistComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Specialist in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecialistComponent_div_0_ng_container_4_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.doctorsDetailsData == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details == null ? null : ctx_r0.doctorsDetailsData.dr_prof_details.dr_expertise);
  }
}
let SpecialistComponent = /*#__PURE__*/(() => {
  var _class;
  class SpecialistComponent {}
  _class = SpecialistComponent;
  _class.ɵfac = function SpecialistComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-specialist"]],
    inputs: {
      doctorsDetailsData: "doctorsDetailsData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container mt-10", 4, "ngIf"], [1, "container", "mt-10"], [1, "text-theme-brown", "font-lora", "font-bold", "txt-[23px]", "sm:text-[30px]"], [1, "flex", "flex-wrap", "gap-2", "py-6", "mb-5", "sm:gap-5", "capitalize", "lg:w-[calc(100%-430px)]"], [4, "ngFor", "ngForOf"], [1, "border-2", "sm:px-4", "py-1", "px-4", "text-[15px]", "sm:text-[19px]", "rounded-full", "font-roboto"]],
    template: function SpecialistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpecialistComponent_div_0_Template, 5, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorsDetailsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
  return SpecialistComponent;
})();


/***/ }),

/***/ 28941:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/workshops-conduct/workshops-conduct.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkshopsConductComponent: () => (/* binding */ WorkshopsConductComponent)
/* harmony export */ });
/* harmony import */ var _workshops_conduct_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workshops-conduct.constant */ 65106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-splide */ 10080);




function WorkshopsConductComponent_div_0_splide_slide_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "splide-slide", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r2 == null ? null : slide_r2.wksp_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r2 == null ? null : slide_r2.wksp_name);
  }
}
function WorkshopsConductComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Workshops Conduct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "splide", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WorkshopsConductComponent_div_0_splide_slide_5_Template, 4, 2, "splide-slide", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.workShopSliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.workshopData);
  }
}
let WorkshopsConductComponent = /*#__PURE__*/(() => {
  var _class;
  class WorkshopsConductComponent {
    constructor() {
      this.workShopSliderConfig = _workshops_conduct_constant__WEBPACK_IMPORTED_MODULE_0__.WORKSHOP_SLIDER_CONFIG;
      this.workShopSlides = _workshops_conduct_constant__WEBPACK_IMPORTED_MODULE_0__.WORK_SHOP_SLIDES;
    }
  }
  _class = WorkshopsConductComponent;
  _class.ɵfac = function WorkshopsConductComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-workshops-conduct"]],
    inputs: {
      workshopData: "workshopData"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "my-10"], [1, "text-[rgb(88,30,30)]", "font-bold", "font-lora", "mb-4", "mx-2", "text-[23px]", "sm:text-[30px]"], [1, "block", 3, "options"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["alt", "", 1, "w-full", "rounded-3xl", 3, "src"], [1, "sm:text-[20px]", "text-[18px]", "px-2", "py-3", "font-roboto", "font-bold"]],
    template: function WorkshopsConductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkshopsConductComponent_div_0_Template, 6, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.workshopData && ctx.workshopData.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideSlideComponent],
    encapsulation: 2
  });
  return WorkshopsConductComponent;
})();


/***/ }),

/***/ 65106:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/book-now-page/components/workshops-conduct/workshops-conduct.constant.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WORKSHOP_SLIDER_CONFIG: () => (/* binding */ WORKSHOP_SLIDER_CONFIG),
/* harmony export */   WORK_SHOP_SLIDES: () => (/* binding */ WORK_SHOP_SLIDES)
/* harmony export */ });
const WORKSHOP_SLIDER_CONFIG = {
  perPage: 3,
  gap: 50,
  arrows: false,
  pagination: false,
  // padding: 30,
  breakpoints: {
    1280: {
      perPage: 2
    },
    768: {
      perPage: 1
    }
  }
};
const WORK_SHOP_SLIDES = [{
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-detail-page-images/workshop-live-strem-1.png",
  title: "Workshop - live stream"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-detail-page-images/workshop-live-strem-1.png",
  title: "Workshop - live stream"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-detail-page-images/workshop-live-strem-1.png",
  title: "Workshop - live stream"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-detail-page-images/workshop-live-strem-1.png",
  title: "Workshop - live stream"
}, {
  image: "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/book-now-detail-page-images/workshop-live-strem-1.png",
  title: "Workshop - live stream"
}];

/***/ }),

/***/ 90991:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/services/workshop-conduct-list/workshop-conduct.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkshopDataService: () => (/* binding */ WorkshopDataService)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);




let WorkshopDataService = /*#__PURE__*/(() => {
  var _class;
  class WorkshopDataService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
  }
  _class = WorkshopDataService;
  _class.ɵfac = function WorkshopDataService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return WorkshopDataService;
})();


/***/ })

};
;