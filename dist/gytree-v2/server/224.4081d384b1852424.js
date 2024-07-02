"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 87145:
/*!************************************************************************!*\
  !*** ./src/app/modules/request-callback/request-callback.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestCallbackComponent: () => (/* binding */ RequestCallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/intl-phn-input/public_api */ 65856);
/* harmony import */ var src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/form-validatin.constant */ 49143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth/auth.service */ 88477);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 27867);
/* harmony import */ var _shared_services_request_callback_request_callback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/request-callback/request-callback.service */ 29965);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 45781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _shared_intl_phn_input_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/intl-phn-input/lib/ngx-intl-tel-input.component */ 92392);
/* harmony import */ var _shared_intl_phn_input_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/intl-phn-input/lib/directives/native-element-injector.directive */ 74953);
/* harmony import */ var _shared_ng_otp_input_components_ng_otp_input_ng_otp_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ng-otp-input/components/ng-otp-input/ng-otp-input.component */ 50261);














function RequestCallbackComponent_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Mobile Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RequestCallbackComponent_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mobile Number is Invaild ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RequestCallbackComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RequestCallbackComponent_div_16_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RequestCallbackComponent_div_16_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r0.requestCallbackForm == null ? null : ctx_r0.requestCallbackForm.value == null ? null : ctx_r0.requestCallbackForm.value.mobileNumber) && (ctx_r0.requestCallbackForm == null ? null : ctx_r0.requestCallbackForm.controls == null ? null : ctx_r0.requestCallbackForm.controls.mobileNumber == null ? null : ctx_r0.requestCallbackForm.controls.mobileNumber.errors == null ? null : ctx_r0.requestCallbackForm.controls.mobileNumber.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.requestCallbackForm == null ? null : ctx_r0.requestCallbackForm.value == null ? null : ctx_r0.requestCallbackForm.value.mobileNumber) && (ctx_r0.requestCallbackForm == null ? null : ctx_r0.requestCallbackForm.controls["mobileNumber"] == null ? null : ctx_r0.requestCallbackForm.controls["mobileNumber"].invalid));
  }
}
function RequestCallbackComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestCallbackComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.sendOtpClickHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RequestCallbackComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Enter Your OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ng-otp-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("isKeyUpEnter", function RequestCallbackComponent_ng_container_19_Template_ng_otp_input_isKeyUpEnter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.otpNextEvent());
    })("onInputChange", function RequestCallbackComponent_ng_container_19_Template_ng_otp_input_onInputChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      let tmp_b_0;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((tmp_b_0 = ctx_r12.requestCallbackForm.get("otp")) == null ? null : tmp_b_0.setValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx_r2.config);
  }
}
function RequestCallbackComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestCallbackComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.submitContactUsForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RequestCallbackComponent_ng_template_22_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const message_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().message;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", message_r16, " ");
  }
}
function RequestCallbackComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, RequestCallbackComponent_ng_template_22_ng_container_0_Template, 4, 1, "ng-container", 14);
  }
  if (rf & 2) {
    const control_r15 = ctx.control;
    const validation_r17 = ctx.validation;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r15.hasError(validation_r17) && (control_r15.dirty || control_r15.touched));
  }
}
const _c0 = function (a2) {
  return {
    validation: "required",
    message: "Name is required",
    control: a2
  };
};
const _c1 = function (a2) {
  return {
    validation: "pattern",
    message: "Name is invalid",
    control: a2
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
let RequestCallbackComponent = /*#__PURE__*/(() => {
  var _class;
  class RequestCallbackComponent {
    constructor(cdr, authenticationService, toastr, rquestcallbackService, route, titleService, router) {
      this.cdr = cdr;
      this.authenticationService = authenticationService;
      this.toastr = toastr;
      this.rquestcallbackService = rquestcallbackService;
      this.route = route;
      this.titleService = titleService;
      this.router = router;
      this.showOtp = false;
      this.message = '';
      this.selectedCountry = '';
      this.subscriptions = [];
      this.config = {
        allowNumbersOnly: true,
        length: 6,
        isPasswordInput: false,
        disableAutoFocus: false,
        placeholder: '',
        containerClass: 'd-flex',
        inputClass: ''
      };
      this.route.queryParams.subscribe(params => {
        this.inquiryType = params?.type;
      });
    }
    ngOnInit() {
      this.initForm();
      this.titleService.setTitle('Gytree - Request a Callback');
    }
    /**
     * Control declaration of contactUsForm
     */
    initForm() {
      this.requestCallbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(src_app_shared_constants_form_validatin_constant__WEBPACK_IMPORTED_MODULE_1__.FORM_VALIDATION.ONLY_SPACE_RESTRICT)]),
        mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])),
        isOtpScreen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false),
        otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        SearchCountryField: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchCountryField),
        CountryISO: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_0__.CountryISO)
      });
    }
    sendOtpClickHandler() {
      if (this.requestCallbackForm?.value?.mobileNumber && this.requestCallbackForm?.value?.name && this.requestCallbackForm?.controls['mobileNumber']?.valid) {
        const payload = {
          "rqcb_mo_no": this.requestCallbackForm?.value?.mobileNumber.number.replaceAll(/[-\s]/g, ''),
          "rqcb_country_code": this.requestCallbackForm?.value?.mobileNumber?.dialCode,
          "rqcb_name": this.requestCallbackForm?.value?.name
        };
        this.subscriptions.push(this.authenticationService.generateOtp(payload).subscribe(data => {
          if (data?.success) {
            this.requestCallbackForm.get('isOtpScreen')?.setValue(true);
          }
          this.cdr.detectChanges();
        }));
      } else {
        this.requestCallbackForm.markAllAsTouched();
        return;
      }
    }
    /**
     * Submit Click Handler contactUsForm
     */
    submitContactUsForm() {
      if (this.requestCallbackForm.invalid) {
        this.requestCallbackForm.markAllAsTouched();
        return;
      }
      const payload = {
        "rqcb_mo_no": this.requestCallbackForm?.value?.mobileNumber?.number.replaceAll(/[-\s]/g, ''),
        "rqcb_country_code": this.requestCallbackForm?.value?.mobileNumber?.dialCode,
        "rqcb_otp": this.requestCallbackForm.getRawValue().otp
      };
      this.subscriptions.push(this.rquestcallbackService.otpValidate(payload).subscribe(res => {
        if (res && res?.data && res?.data?.status == 200) {
          this.toastr.success(res?.data?.data?.message, undefined, {
            positionClass: 'toast-bottom-center',
            closeButton: true,
            //disableTimeOut: true,
            tapToDismiss: false
          });
          this.router.navigate(['/']);
        } else {
          this.toastr.error('Invalid Otp', undefined, {
            positionClass: 'toast-bottom-center',
            closeButton: true,
            //disableTimeOut: true,
            tapToDismiss: false
          });
        }
      }));
    }
    // postReuestCallback() {
    //     const payload = {
    //         gt_inq_name: this.requestCallbackForm?.value?.name,
    //         gt_inq_mob_no:
    //             this.requestCallbackForm?.value?.mobileNumber.number.replaceAll(
    //                 /[-\s]/g,
    //                 ''
    //             ),
    //         gt_inq_type: this.inquiryType,
    //     };
    //     this.subscriptions.push(
    //         this.rquestcallbackService
    //             .postReuestCallback(payload)
    //             .subscribe((res) => {
    //                 if (res && res?.data && res?.data?.status == 200) {
    //                     this.toastr.success(
    //                         res?.data?.data?.message,
    //                         undefined,
    //                         {
    //                             positionClass: 'toast-bottom-center',
    //                             closeButton: true,
    //                             //disableTimeOut: true,
    //                             tapToDismiss: false,
    //                         }
    //                     );
    //                     this.router.navigate(['/']);
    //                 }
    //             })
    //     );
    // }
    onCountryChange(event) {}
    onChange(event) {
      this.requestCallbackForm.get('isOtpScreen')?.setValue(false);
    }
  }
  _class = RequestCallbackComponent;
  _class.ɵfac = function RequestCallbackComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_request_callback_request_callback_service__WEBPACK_IMPORTED_MODULE_3__.RequestCallbackService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-request-callback"]],
    decls: 24,
    vars: 24,
    consts: [["novalidate", "novalidate", 1, "form", "w-100", 3, "formGroup"], [1, "mb-5", "mt-16", "py-2", "justify-center", "flex", "text-xl", "font-bold", "font-lora", "text-danger", "text-center"], [1, "title", "px-2", 2, "margin-top", "2.5rem!important", "margin-bottom", "2.5rem!important"], [1, "hidden", "md:block"], [1, "w-fit", "mx-auto", "max-w-full", "px-3", "pt-8"], [1, "col-span-12", "md:col-span-6"], [1, "mb-5"], [1, "relative"], ["type", "text", "name", "name", "formControlName", "name", "autocomplete", "off", "placeholder", "Name", 1, "w-full", "px-4", "py-2", "bg-transparent", "rounded-full", "appearance-none", "font-roboto", "border", "border-theme-lightest-pink", "focus:outline-none", "focus:ring-0", "peer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dropdownMaxHeight", "150px", "numberonly", "", "cssClass", "w-full py-1.5 text-black border rounded-full outline-none px-5 sm:py-2 placeholder:text-theme-lightest-grey border-theme-lightest-pink", "name", "mobileNumber", "formControlName", "mobileNumber", 1, "", 3, "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "phoneValidation", "separateDialCode", "isKeyUpEnter", "countryChange", "ngModelChange"], ["class", "text-sm text-left text-theme-error-red", 4, "ngIf"], [1, "text-center", "mt-5"], ["class", "inline-block px-7 py-1.5 mx-auto text-lg sm:text-xl text-white rounded-full font-roboto bg-theme-light-maroon", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "mt-5", "mb-5"], ["formError", ""], [1, "text-sm", "text-left", "text-theme-error-red"], [1, "inline-block", "px-7", "py-1.5", "mx-auto", "text-lg", "sm:text-xl", "text-white", "rounded-full", "font-roboto", "bg-theme-light-maroon", 3, "click"], [1, "py-2", "text-xl", "font-bold", "font-lora", "text-center"], [1, "block", "mt-6", "ng-otp-input-container", "text-center", 3, "config", "isKeyUpEnter", "onInputChange"], ["role", "alert", 1, ""]],
    template: function RequestCallbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Welcome to Gytree - the sisterhood of wellbeing. Get help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " from Gytree's health experts. Fill details for Free Callback. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](11, 9)(12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "ngx-intl-tel-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("isKeyUpEnter", function RequestCallbackComponent_Template_ngx_intl_tel_input_isKeyUpEnter_15_listener() {
          return ctx.sendOtpClickHandler();
        })("countryChange", function RequestCallbackComponent_Template_ngx_intl_tel_input_countryChange_15_listener($event) {
          return ctx.onCountryChange($event);
        })("ngModelChange", function RequestCallbackComponent_Template_ngx_intl_tel_input_ngModelChange_15_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, RequestCallbackComponent_div_16_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RequestCallbackComponent_button_18_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RequestCallbackComponent_ng_container_19_Template, 4, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, RequestCallbackComponent_button_21_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RequestCallbackComponent_ng_template_22_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.requestCallbackForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](17, _c0, ctx.requestCallbackForm.controls["name"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](19, _c1, ctx.requestCallbackForm.controls["name"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("enableAutoCountrySelect", true)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](21, _c2, ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.value == null ? null : ctx.requestCallbackForm.value.SearchCountryField.Iso2, ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.value == null ? null : ctx.requestCallbackForm.value.SearchCountryField.Name))("selectFirstCountry", false)("selectedCountryISO", ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.value == null ? null : ctx.requestCallbackForm.value.CountryISO.India)("phoneValidation", true)("separateDialCode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.requestCallbackForm.controls["mobileNumber"] == null ? null : ctx.requestCallbackForm.controls["mobileNumber"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((tmp_14_0 = ctx.requestCallbackForm.get("isOtpScreen")) == null ? null : tmp_14_0.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.requestCallbackForm.get("isOtpScreen")) == null ? null : tmp_15_0.value) && (ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.value == null ? null : ctx.requestCallbackForm.value.mobileNumber) && (ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.controls["mobileNumber"] == null ? null : ctx.requestCallbackForm.controls["mobileNumber"].valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.requestCallbackForm.get("isOtpScreen")) == null ? null : tmp_16_0.value) && (ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.value == null ? null : ctx.requestCallbackForm.value.mobileNumber) && (ctx.requestCallbackForm == null ? null : ctx.requestCallbackForm.controls["mobileNumber"] == null ? null : ctx.requestCallbackForm.controls["mobileNumber"].valid));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_intl_phn_input_lib_ngx_intl_tel_input_component__WEBPACK_IMPORTED_MODULE_4__.NgxIntlTelInputComponent, _shared_intl_phn_input_lib_directives_native_element_injector_directive__WEBPACK_IMPORTED_MODULE_5__.NativeElementInjectorDirective, _shared_ng_otp_input_components_ng_otp_input_ng_otp_input_component__WEBPACK_IMPORTED_MODULE_6__.NgOtpInputComponent],
    encapsulation: 2
  });
  return RequestCallbackComponent;
})();


/***/ }),

/***/ 4224:
/*!*********************************************************************!*\
  !*** ./src/app/modules/request-callback/request-callback.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestCallbackModule: () => (/* binding */ RequestCallbackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _request_callback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-callback.component */ 87145);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/image-lazy-load/image-lazy-load.module */ 1914);
/* harmony import */ var src_app_shared_ng_otp_input_ng_otp_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ng-otp-input/ng-otp-input.module */ 47832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var src_app_shared_form_validation_template_form_validation_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/form-validation-template/form-validation-template.module */ 64769);
/* harmony import */ var src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/intl-phn-input/public_api */ 65856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 78371);










let RequestCallbackModule = /*#__PURE__*/(() => {
  var _class;
  class RequestCallbackModule {}
  _class = RequestCallbackModule;
  _class.ɵfac = function RequestCallbackModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_shared_form_validation_template_form_validation_template_module__WEBPACK_IMPORTED_MODULE_3__.FormValidationTemplateModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_1__.ImageLazyLoadModule, src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_4__.NgxIntlTelInputModule, src_app_shared_ng_otp_input_ng_otp_input_module__WEBPACK_IMPORTED_MODULE_2__.NgOtpInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: '',
      component: _request_callback_component__WEBPACK_IMPORTED_MODULE_0__.RequestCallbackComponent
    }])]
  });
  return RequestCallbackModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RequestCallbackModule, {
    declarations: [_request_callback_component__WEBPACK_IMPORTED_MODULE_0__.RequestCallbackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_shared_form_validation_template_form_validation_template_module__WEBPACK_IMPORTED_MODULE_3__.FormValidationTemplateModule, src_app_shared_image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_1__.ImageLazyLoadModule, src_app_shared_intl_phn_input_public_api__WEBPACK_IMPORTED_MODULE_4__.NgxIntlTelInputModule, src_app_shared_ng_otp_input_ng_otp_input_module__WEBPACK_IMPORTED_MODULE_2__.NgOtpInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 29965:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/services/request-callback/request-callback.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestCallbackService: () => (/* binding */ RequestCallbackService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base/base.service */ 84251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 93634);
/* harmony import */ var src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage/token-storage.service */ 59286);





let RequestCallbackService = /*#__PURE__*/(() => {
  var _class;
  class RequestCallbackService extends src_app_shared_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(httpClient, tokenStorage) {
      super(httpClient, tokenStorage);
      this.httpClient = httpClient;
      this.tokenStorage = tokenStorage;
    }
    otpValidate(data) {
      const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrls.baseUrlFe}inquiry/request-callback/validate-otp`;
      return this.post(url, data);
    }
  }
  _class = RequestCallbackService;
  _class.ɵfac = function RequestCallbackService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return RequestCallbackService;
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

/***/ 50261:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/ng-otp-input/components/ng-otp-input/ng-otp-input.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgOtpInputComponent: () => (/* binding */ NgOtpInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var _utils_keyboard_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/keyboard-util */ 95344);
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/keys.pipe */ 50694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 14565);







function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onKeyUp($event, i_r3));
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onInput($event));
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onKeyDown($event, i_r3));
    })("keyup.enter", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.sendInputCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 2, 10, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ng-otp-input-wrapper wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
  }
}
let NgOtpInputComponent = /*#__PURE__*/(() => {
  var _class;
  class NgOtpInputComponent {
    get inputType() {
      return this.config?.isPasswordInput ? 'password' : this.config?.allowNumbersOnly ? 'tel' : 'text';
    }
    constructor(keysPipe) {
      this.keysPipe = keysPipe;
      this.config = {
        length: 4
      };
      // tslint:disable-next-line: no-output-on-prefix
      this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      this.isKeyUpEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      this.inputControls = new Array(this.config.length);
      this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
    }
    ngOnInit() {
      this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
      for (let index = 0; index < this.config.length; index++) {
        this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl());
      }
      this.otpForm.valueChanges.subscribe(v => {
        this.keysPipe.transform(this.otpForm.controls).forEach(k => {
          var val = this.otpForm.controls[k].value;
          if (val && val.length > 1) {
            if (val.length >= this.config.length) {
              this.setValue(val);
            } else {
              this.rebuildValue();
            }
          }
        });
      });
    }
    ngAfterViewInit() {
      if (!this.config.disableAutoFocus) {
        const containerItem = document.getElementById(`c_${this.componentKey}`);
        if (containerItem) {
          const ele = containerItem.getElementsByClassName('otp-input')[0];
          if (ele && ele.focus) {
            ele.focus();
          }
        }
      }
    }
    getControlName(idx) {
      return `ctrl_${idx}`;
    }
    sendInputCode() {
      this.isKeyUpEnter.emit(true);
    }
    onKeyDown($event, inputIdx = null) {
      if (_utils_keyboard_util__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtil.ifSpacebar($event)) {
        $event.preventDefault();
        return false;
      }
    }
    onInput($event) {
      let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;
      if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
        $event.target.value = '';
        $event.stopPropagation();
        $event.preventDefault();
        return;
      }
    }
    onKeyUp($event, inputIdx = null) {
      const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
      const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
      if (_utils_keyboard_util__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtil.ifRightArrow($event)) {
        $event.preventDefault();
        this.setSelected(nextInputId);
        return;
      }
      if (_utils_keyboard_util__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtil.ifLeftArrow($event)) {
        $event.preventDefault();
        this.setSelected(prevInputId);
        return;
      }
      if (_utils_keyboard_util__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtil.ifBackspaceOrDelete($event) && !$event.target.value) {
        this.setSelected(prevInputId);
        this.rebuildValue();
        return;
      }
      if (!$event.target.value) {
        return;
      }
      if (this.ifValidKeyCode($event)) {
        this.setSelected(nextInputId);
      }
      this.rebuildValue();
    }
    validateNumber(val) {
      return val && /^\d*\.?\d*$/.test(val);
    }
    appendKey(id) {
      return `${id}_${this.componentKey}`;
    }
    setSelected(eleId) {
      this.focusTo(eleId);
      const ele = document.getElementById(eleId);
      if (ele && ele.setSelectionRange) {
        setTimeout(() => {
          ele.setSelectionRange(0, 1);
        }, 0);
      }
    }
    ifValidKeyCode(event) {
      const inp = event.key;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode);
    }
    focusTo(eleId) {
      const ele = document.getElementById(eleId);
      if (ele) {
        ele.focus();
      }
    }
    // method to set component value
    setValue(value) {
      if (this.config.allowNumbersOnly && isNaN(value)) {
        return;
      }
      this.otpForm.reset();
      if (!value) {
        this.rebuildValue();
        return;
      }
      value = value.toString().replace(/\s/g, ''); // remove whitespace
      Array.from(value).forEach((c, idx) => {
        if (this.otpForm.get(this.getControlName(idx))) {
          this.otpForm.get(this.getControlName(idx)).setValue(c);
        }
      });
      if (!this.config.disableAutoFocus) {
        const containerItem = document.getElementById(`c_${this.componentKey}`);
        var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
        let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
      this.rebuildValue();
    }
    rebuildValue() {
      let val = '';
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        if (this.otpForm.controls[k].value) {
          let ctrlVal = this.otpForm.controls[k].value;
          let isLengthExceed = ctrlVal.length > 1;
          let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
          ctrlVal = ctrlVal[0];
          let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
          if (isCaseTransformEnabled && transformedVal == ctrlVal) {
            isCaseTransformEnabled = false;
          } else {
            ctrlVal = transformedVal;
          }
          val += ctrlVal;
          if (isLengthExceed || isCaseTransformEnabled) {
            this.otpForm.controls[k].setValue(ctrlVal);
          }
        }
      });
      if (this.formCtrl?.setValue) {
        this.formCtrl.setValue(val);
      }
      this.onInputChange.emit(val);
      this.currentVal = val;
    }
    handlePaste(e) {
      // Get pasted data via clipboard API
      const data = window;
      let clipboardData = e.clipboardData || data['clipboardData'];
      if (clipboardData) {
        var pastedData = clipboardData.getData('Text');
      }
      // Stop data actually being pasted into div
      e.stopPropagation();
      e.preventDefault();
      if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
        return;
      }
      this.setValue(pastedData);
    }
  }
  _class = NgOtpInputComponent;
  _class.ɵfac = function NgOtpInputComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__.KeysPipe));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["ng-otp-input"]],
    inputs: {
      config: "config",
      formCtrl: "formCtrl"
    },
    outputs: {
      onInputChange: "onInputChange",
      isKeyUpEnter: "isKeyUpEnter"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", "keyup.enter", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "paste", "keyup", "input", "keydown", "keyup.enter"], ["inp", ""]],
    template: function NgOtpInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__.KeysPipe],
    styles: [".otp-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  border: solid 1px #c5c5c5;\n  text-align: center;\n  font-size: 20px;\n}\n\n.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n\n@media screen and (max-width: 767px) {\n  .otp-input[_ngcontent-%COMP%] {\n    width: 40px;\n    font-size: 24px;\n    height: 40px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .otp-input[_ngcontent-%COMP%] {\n    width: 30px;\n    font-size: 18px;\n    height: 30px;\n  }\n}"]
  });
  return NgOtpInputComponent;
})();


/***/ }),

/***/ 47832:
/*!************************************************************!*\
  !*** ./src/app/shared/ng-otp-input/ng-otp-input.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgOtpInputModule: () => (/* binding */ NgOtpInputModule)
/* harmony export */ });
/* harmony import */ var _components_ng_otp_input_ng_otp_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ng-otp-input/ng-otp-input.component */ 50261);
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/keys.pipe */ 50694);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);





let NgOtpInputModule = /*#__PURE__*/(() => {
  var _class;
  class NgOtpInputModule {}
  _class = NgOtpInputModule;
  _class.ɵfac = function NgOtpInputModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__.KeysPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
  return NgOtpInputModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgOtpInputModule, {
    declarations: [_components_ng_otp_input_ng_otp_input_component__WEBPACK_IMPORTED_MODULE_0__.NgOtpInputComponent, _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__.KeysPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
    exports: [_components_ng_otp_input_ng_otp_input_component__WEBPACK_IMPORTED_MODULE_0__.NgOtpInputComponent, _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_1__.KeysPipe]
  });
})();

/***/ }),

/***/ 50694:
/*!********************************************************!*\
  !*** ./src/app/shared/ng-otp-input/pipes/keys.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeysPipe: () => (/* binding */ KeysPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 78371);

let KeysPipe = /*#__PURE__*/(() => {
  var _class;
  class KeysPipe {
    transform(value) {
      return Object.keys(value);
    }
  }
  _class = KeysPipe;
  _class.ɵfac = function KeysPipe_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "keys",
    type: _class,
    pure: true
  });
  return KeysPipe;
})();


/***/ }),

/***/ 95344:
/*!************************************************************!*\
  !*** ./src/app/shared/ng-otp-input/utils/keyboard-util.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardUtil: () => (/* binding */ KeyboardUtil)
/* harmony export */ });
class KeyboardUtil {
  static ifBackspaceOrDelete(event) {
    return this.ifKey(event, 'Backspace;Delete;Del');
  }
  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }
  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }

  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }
}

/***/ })

};
;