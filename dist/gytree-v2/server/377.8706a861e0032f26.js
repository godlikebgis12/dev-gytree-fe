"use strict";
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 35195:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/reschedule-appointment/payment-stepper/payment-stepper.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentStepperComponent: () => (/* binding */ PaymentStepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);




const _c0 = function (a0, a1) {
  return {
    "after:border-theme-purple-lighter": a0,
    "after:border-theme-purple": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "text-theme-purple": a0,
    "text-theme-purple-lighter": a1
  };
};
let PaymentStepperComponent = /*#__PURE__*/(() => {
  var _class;
  class PaymentStepperComponent {
    constructor(GetData) {
      this.GetData = GetData;
      this.visitedStepIcon = 'https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/visited.svg';
      this.currentStepIcon = 'https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/current.svg';
      this.blankStepIcon = 'https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/blank.svg';
      this.GetData.bookingSummrySelected.subscribe(res => {
        this.isSummarySelected = res?.bookingSummrySelected;
      });
    }
  }
  _class = PaymentStepperComponent;
  _class.ɵfac = function PaymentStepperComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_0__.GetDataService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-payment-stepper"]],
    decls: 9,
    vars: 10,
    consts: [[1, "flex", "items-center", "justify-center", "w-full", "gap-[5px]", "text-sm", "font-medium", "text-center", "text-gray-500", "sm:text-base"], [1, "flex", "relative", "gap-[5px]", "w-[200px]", "max-w-full", "items-center", "text-theme-purple", "after:content-['']", "after:w-full", "after:border-b", "after:border-1", 3, "ngClass"], [1, "flex", "items-center", 3, "inlineSVG"], [1, "absolute", "left-0", "-translate-x-[40%]", "top-[calc(100%+10px)]", "whitespace-nowrap"], [1, "relative", "flex", "items-center", 3, "ngClass"]],
    template: function PaymentStepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ol", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Appointment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Your Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx.isSummarySelected, ctx.isSummarySelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", ctx.isSummarySelected ? ctx.visitedStepIcon : ctx.currentStepIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c1, ctx.isSummarySelected, !ctx.isSummarySelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", ctx.isSummarySelected ? ctx.currentStepIcon : ctx.blankStepIcon);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective],
    encapsulation: 2
  });
  return PaymentStepperComponent;
})();


/***/ }),

/***/ 60956:
/*!************************************************************************************!*\
  !*** ./src/app/modules/reschedule-appointment/reschedule-appointment.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RescheduleAppointmentComponent: () => (/* binding */ RescheduleAppointmentComponent)
/* harmony export */ });
/* harmony import */ var D_Projects_gytree_gytree_v3_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 75193);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 78371);
/* harmony import */ var src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/get-data.service */ 87595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/local-storage/local-storage.service */ 59849);
/* harmony import */ var src_app_modules_shared_services_doctor_slot_availability_doctor_slot_availability_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/doctor-slot-availability/doctor-slot-availability.service */ 47116);
/* harmony import */ var src_app_modules_shared_services_doctor_availability_doctor_availability_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/doctor-availability/doctor-availability.service */ 96680);
/* harmony import */ var src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/services/doctors-list/doctors-list.service */ 3904);
/* harmony import */ var src_app_modules_shared_services_appoinments_list_appoinments_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/appoinments-list/appoinments-list.service */ 17773);
/* harmony import */ var src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/services/page-list/page-list.service */ 52139);
/* harmony import */ var src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/event-tracking.service */ 40484);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 27867);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _payment_stepper_payment_stepper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment-stepper/payment-stepper.component */ 35195);


















function RescheduleAppointmentComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tags_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tags_r8, " ");
  }
}
function RescheduleAppointmentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, RescheduleAppointmentComponent_div_16_div_1_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", (ctx_r0.orderData == null ? null : ctx_r0.orderData.appt_purchase == null ? null : ctx_r0.orderData.appt_purchase.prcs_tags) || (ctx_r0.orderData == null ? null : ctx_r0.orderData.order_ref_tags));
  }
}
function RescheduleAppointmentComponent_div_17_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/star.svg");
  }
}
function RescheduleAppointmentComponent_div_17_div_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "svg", 45)(3, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "path", 47)(5, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function RescheduleAppointmentComponent_div_17_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, RescheduleAppointmentComponent_div_17_div_2_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r10 - 0.5 <= (ctx_r12.orderData == null ? null : ctx_r12.orderData.appt_purchase == null ? null : ctx_r12.orderData.appt_purchase.prcs_rating) || i_r10 - 0.5 <= (ctx_r12.orderData == null ? null : ctx_r12.orderData.app_refrence_star));
  }
}
function RescheduleAppointmentComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, RescheduleAppointmentComponent_div_17_div_2_ng_container_1_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, RescheduleAppointmentComponent_div_17_div_2_ng_container_2_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r10 <= (ctx_r9.orderData == null ? null : ctx_r9.orderData.appt_purchase == null ? null : ctx_r9.orderData.appt_purchase.prcs_rating) || i_r10 <= (ctx_r9.orderData == null ? null : ctx_r9.orderData.app_refrence_star));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r10 > (ctx_r9.orderData == null ? null : ctx_r9.orderData.appt_purchase == null ? null : ctx_r9.orderData.appt_purchase.prcs_rating) || i_r10 > (ctx_r9.orderData == null ? null : ctx_r9.orderData.app_refrence_star));
  }
}
function RescheduleAppointmentComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, RescheduleAppointmentComponent_div_17_div_2_Template, 3, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.feedBackStar);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (ctx_r1.orderData == null ? null : ctx_r1.orderData.appt_purchase == null ? null : ctx_r1.orderData.appt_purchase.prcs_rating) || (ctx_r1.orderData == null ? null : ctx_r1.orderData.app_refrence_star), "/5 ");
  }
}
function RescheduleAppointmentComponent_div_33_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 54);
  }
}
function RescheduleAppointmentComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RescheduleAppointmentComponent_div_33_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const dateData_r15 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r17.getDateValue(dateData_r15 == null ? null : dateData_r15.fullDate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, RescheduleAppointmentComponent_div_33_div_6_Template, 1, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dateData_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r2.selectedDate === (dateData_r15 == null ? null : dateData_r15.date) ? "bg-theme-brown" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r2.selectedDate === (dateData_r15 == null ? null : dateData_r15.date) ? "text-white" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", dateData_r15 == null ? null : dateData_r15.date == null ? null : dateData_r15.date.split("-")[2], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r2.selectedDate === (dateData_r15 == null ? null : dateData_r15.date) ? "text-white" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", dateData_r15 == null ? null : dateData_r15.day, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.selectedDate === (dateData_r15 == null ? null : dateData_r15.date));
  }
}
function RescheduleAppointmentComponent_p_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "please select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function RescheduleAppointmentComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Choose a Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function RescheduleAppointmentComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Slot available");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-theme-brown text-white": a0,
    "border border-theme-brown": a1
  };
};
function RescheduleAppointmentComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RescheduleAppointmentComponent_div_39_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const index_r20 = restoredCtx.index;
      const slot_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.selectSlot(index_r20, slot_r19 == null ? null : slot_r19.time));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slot_r19 = ctx.$implicit;
    const index_r20 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c0, ctx_r6.selectedSlot === index_r20, ctx_r6.selectedSlot !== index_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](slot_r19 == null ? null : slot_r19.time);
  }
}
let RescheduleAppointmentComponent = /*#__PURE__*/(() => {
  var _class;
  class RescheduleAppointmentComponent {
    constructor(cdr, GetData, router, location, localStorageService, doctorSlotAvailabilityService, doctorAvailabilityService, doctorsListService, appoinmentService, pageListService, eventTrackingService, activatedRoute, toastr) {
      this.cdr = cdr;
      this.GetData = GetData;
      this.router = router;
      this.location = location;
      this.localStorageService = localStorageService;
      this.doctorSlotAvailabilityService = doctorSlotAvailabilityService;
      this.doctorAvailabilityService = doctorAvailabilityService;
      this.doctorsListService = doctorsListService;
      this.appoinmentService = appoinmentService;
      this.pageListService = pageListService;
      this.eventTrackingService = eventTrackingService;
      this.activatedRoute = activatedRoute;
      this.toastr = toastr;
      this.scheduleAppointmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
      this.currentList = [];
      this.currentIndex = 0;
      this.batchSize = 7;
      this.selectedSlot = 0;
      this.chooseSlotArray = [];
      this.selectedSlotFlag = false;
      this.feedBackStar = [1, 2, 3, 4, 5];
      this.subscriptions = [];
      this.doctorAvailability = [];
      this.check = false;
      this.userDetails = this.localStorageService.getItem('userSlug');
      this.slotsNotAvailable = false;
      this.TWElementsInit = () => {
        (0,D_Projects_gytree_gytree_v3_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const {
            initTE,
            Datepicker,
            Input,
            Select,
            Dropdown,
            Modal
          } = yield __webpack_require__.e(/*! import() */ 230).then(__webpack_require__.bind(__webpack_require__, /*! tw-elements */ 77230));
          initTE({
            Dropdown,
            Select,
            Datepicker,
            Input,
            Modal
          });
        })();
        return null;
      };
      this.filterFunction = date => {
        let availabilityDates = [];
        let finalData = [];
        this.doctorAvailability.forEach(element => {
          availabilityDates.push({
            year: Number(element?.date?.split('-')[0]),
            month: Number(element?.date?.split('-')[1]),
            day: Number(element?.date?.split('-')[2])
          });
        });
        availabilityDates.forEach(ele => {
          if (ele.year === date.getFullYear() && ele.month === date.getMonth() + 1 && ele.day === date.getDate()) {
            finalData = (finalData || []).concat(ele);
          }
        });
        return finalData?.length ? true : false;
      };
    }
    ngOnInit() {
      this.TWElementsInit();
      this.slug = this.activatedRoute.snapshot.paramMap.get('order_id');
      this.parentSlug = this.activatedRoute.snapshot.paramMap.get('slug');
      if (this.slug && this.parentSlug) {
        this.getDoctorAvailability();
        this.getOrderData();
      }
      this.initForm();
    }
    /**
     * Control declaration of contactUsForm
     */
    initForm() {
      this.scheduleAppointmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
        time: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
      });
      this.cdr.detectChanges();
    }
    /**
     * api call to get available time slots
     */
    getTimeSlots(date) {
      this.slotsNotAvailable = false;
      let payload = {};
      if (this.orderData) {
        payload = {
          "dr_id": this.orderData?.appt_fk_dr_id,
          "date": date
        };
      }
      this.doctorSlotAvailabilityService.doctorSlotAvailability(payload).subscribe(resp => {
        this.chooseSlotArray = resp?.data?.data?.slots;
        this.selectedSlotName = this.chooseSlotArray[0]?.time;
        this.chooseSlotArray.length === 0 ? this.slotsNotAvailable = true : this.slotsNotAvailable = false;
        this.cdr.detectChanges();
      });
    }
    selectSlot(slotVal, slotName) {
      this.selectedSlot = slotVal;
      this.selectedSlotName = slotName;
      this.selectedSlotFlag = false;
    }
    /**
     * Method to get the doctor's availability details
     */
    getDoctorAvailability() {
      let payload = {
        "type": "doctor",
        "slug": this.parentSlug
      };
      this.subscriptions.push(this.doctorAvailabilityService.getDocAvailability(payload).subscribe(data => {
        if (data?.success) {
          this.doctorAvailability = data?.data?.data?.availabilities;
          this.doctorAvailability = this.doctorAvailability.map(item => {
            const dayName = item?.day;
            const sortedDayName = moment__WEBPACK_IMPORTED_MODULE_1__().day(dayName).format('ddd'); // Get the first 3 characters of the day name
            return {
              ...item,
              day: sortedDayName
            };
          });
          ;
          this.selectedDateYear = this.doctorAvailability[0]?.date;
          this.birthDatePickerInit();
          this.updateDates();
        }
      }));
    }
    /**
     * Control of datePicker
     */
    birthDatePickerInit() {
      var _this = this;
      (0,D_Projects_gytree_gytree_v3_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          initTE,
          Datepicker
        } = yield __webpack_require__.e(/*! import() */ 230).then(__webpack_require__.bind(__webpack_require__, /*! tw-elements */ 77230));
        initTE({
          Datepicker
        });
        new Datepicker(document.querySelector('#birthDatePickerContainer'), {
          filter: _this.filterFunction
        }, {
          inline: true,
          removeClearBtn: true
        }, {
          datepickerToggleButton: 'flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-theme-theme-lightest-pink focus:text-theme-theme-lightest-pink'
        });
      })();
    }
    getDateValue(date) {
      this.selectedDate = date;
      this.selectedDateYear = date;
      this.updateDates();
      this.getTimeSlots(date);
      this.checkDateWeek();
    }
    updateDates() {
      const batchStart = this.currentIndex;
      const batchEnd = Math.min(this.currentIndex + this.batchSize, this.doctorAvailability?.length);
      const currentBatch = this.doctorAvailability?.slice(batchStart, batchEnd);
      this.currentList = [];
      (currentBatch || []).forEach(dateEntry => {
        (this.currentList || []).push({
          date: dateEntry?.date,
          day: dateEntry?.day,
          fullDate: dateEntry?.date
        });
      });
    }
    checkDateWeek() {
      let date1 = new Date(this.currentList[0]['date']).getTime();
      let date2 = new Date(this.selectedDate).getTime();
      if (this.currentList.find(date => date.date === this.selectedDate)) this.check = false;
      if (!this.currentList.find(date => date.date === this.selectedDate)) {
        this.check = true;
        if (date1 < date2) {
          this.moveRight();
        }
        if (date1 > date2) {
          this.moveLeft();
        }
      }
    }
    moveLeft() {
      this.currentIndex = Math.max(0, this.currentIndex - this.batchSize);
      this.updateDates();
      this.check ? this.checkDateWeek() : this.selectedDateYear = this.currentList[0].fullDate;
    }
    moveRight() {
      this.currentIndex = Math.min(this.currentIndex + this.batchSize, this.doctorAvailability.length - this.batchSize);
      this.updateDates();
      this.selectedDateYear = this.currentList[0].fullDate;
      this.check ? this.checkDateWeek() : this.selectedDateYear = this.currentList[0].fullDate;
    }
    getOrderData() {
      this.subscriptions.push(this.pageListService.getAppointmentById(this.slug).subscribe(data => {
        if (data?.success) {
          this.orderData = data?.data?.data;
        }
      }));
    }
    bookNow() {
      this.selectedSlotFlag = true;
      if (!this.selectedDate) {
        return;
      }
      let payload = {};
      payload = {
        "appt_id": this.orderData?.appt_id,
        "appt_slot_time": this.selectedSlotName,
        "appt_date": this.selectedDate
      };
      this.subscriptions.push(this.appoinmentService.appoinmentReschedule(payload).subscribe(data => {
        if (data) {
          this.toastr.success('Reschedule Appointment Successfully', undefined, {
            positionClass: 'toast-bottom-center',
            closeButton: true
          });
          setTimeout(() => {
            this.router.navigate(['/appointment']);
          }, 1000);
        }
      }));
    }
  }
  _class = RescheduleAppointmentComponent;
  _class.ɵfac = function RescheduleAppointmentComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__.GetDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_doctor_slot_availability_doctor_slot_availability_service__WEBPACK_IMPORTED_MODULE_4__.DoctorSlotAvailabilityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_doctor_availability_doctor_availability_service__WEBPACK_IMPORTED_MODULE_5__.DoctorAvailabilityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_doctors_list_doctors_list_service__WEBPACK_IMPORTED_MODULE_6__.DoctorslistService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_appoinments_list_appoinments_list_service__WEBPACK_IMPORTED_MODULE_7__.AppoinmentsListService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_page_list_page_list_service__WEBPACK_IMPORTED_MODULE_8__.PageListService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_event_tracking_service__WEBPACK_IMPORTED_MODULE_9__.EventTrackingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-reschedule-appointment"]],
    decls: 43,
    vars: 17,
    consts: [[1, "sm:container", "pb-[72px]", "sm:pb-0", "flex-col", "justify-center", "flex", "h-screen"], [1, "sticky", "block", "pt-6", "pb-10", "sm:pt-10", "sm:pb-14"], [1, "flex", "justify-center"], [1, "sm:w-[510px]", "max-w-full"], [1, "pt-3", "text-lg", "sm:py-3", "font-roboto"], [1, "px-4", "sm:px-0"], [1, "mb-5", "leading-none"], [1, "capitalize"], [1, "flex", "gap-4", "bg-theme-purple-lighter", "rounded-3xl", "py-[15px]", "px-5", "mb-5"], [1, "bg-theme-light-cream", "w-[100px]", "h-[100px]", "rounded-[20px]", "overflow-hidden", "shrink-0", "inline-flex", "items-end"], ["alt", "", 1, "max-w-full", "max-h-full", 3, "src"], [1, ""], [1, "mb-1.5", "text-lg", "font-semibold"], ["class", "flex flex-wrap gap-2", 4, "ngIf"], ["class", "inline-flex items-center gap-2 font-semibold font-roboto", 4, "ngIf"], [1, "sm:border", "border-theme-ligher-pink", "rounded-2xl", "py-5", "px-[15px]"], [1, "flex", "justify-between", "px-2"], [1, "mb-2", "text-lg", "font-extrabold", "sm:text-xl", "text-theme-brown", "font-lora"], ["id", "birthDatePickerContainer", "data-te-target", "#datePickerOne", "data-te-format", "yyyy-mm-dd", 1, "relative"], ["type", "text", "id", "birthDatePicker", "placeholder", "Birth Date", 1, "w-full", "hidden", "px-4", "py-2", "bg-transparent", "border", "rounded-full", "appearance-none", "font-roboto", "focus:outline-none", "focus:ring-0", "peer", "data-[te-input-state-active]:placeholder:opacity-100", "motion-reduce:transition-none", "[&:not([data-te-input-placeholder-active])]:placeholder:opacity-0", 3, "ngModel", "ngModelChange", "input"], ["for", "birthDatePicker", 1, "absolute", "font-roboto", "text-gray-500", "duration-300", "transform", "-translate-y-4", "scale-75", "top-2", "z-10", "origin-[0]", "bg-white", "peer-placeholder-shown:scale-100", "peer-placeholder-shown:-translate-y-1/2", "peer-placeholder-shown:top-1/2", "peer-focus:top-2", "peer-focus:scale-75", "peer-focus:-translate-y-5", "left-5", "peer-focus:left-5", "peer-data-[te-input-state-active]:-translate-y-[0.9rem]", "peer-data-[te-input-state-active]:scale-[0.8]", "motion-reduce:transition-none"], ["id", "datePickerOne", "data-te-datepicker-toggle-ref", "", "data-te-datepicker-toggle-button-ref", "", 1, "text-sm", "sm:text-base", "inline-flex", "items-center", "gap-2.5", "cursor-pointer", "select-none", "mb-2.5"], ["id", "birthDatePickerContainer", "inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/chevron-down.svg", 1, ""], [1, "text-sm", "sm:text-base", "inline-flex", "items-center", "gap-2.5", "cursor-pointer", "select-none", "mb-2.5", "w-full"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/left-arrow.svg", 1, "hidden", "overflow-hidden", "rounded-full", "cursor-pointer", "sm:block", 3, "click"], [1, "flex", "flex-auto", "justify-between", "gap-[5px]"], ["class", "rounded-3xl px-2.5 py-3.5 sm:py-4 font-roboto flex justify-center items-center cursor-pointer w-[40px] md:w-[46px]", 3, "ngClass", 4, "ngFor", "ngForOf"], ["inlineSVG", "https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/right-arrow.svg", 1, "hidden", "overflow-hidden", "rounded-full", "cursor-pointer", "sm:block", 3, "click"], ["class", "capitalize text-danger", 4, "ngIf"], ["class", "mt-4 mb-2 text-xl font-extrabold text-theme-brown font-lora", 4, "ngIf"], ["class", "text-center text-danger", 4, "ngIf"], [1, "flex", "flex-wrap", "justify-center", "sm:overflow-y-auto", "sm:max-h-[140px]", "styled-scrollbar"], ["class", "p-1 sm:px-1.5 sm:py-2", 4, "ngFor", "ngForOf"], [1, "text-center", "left-0", "right-0", "shadow-[0px_15px_50px_0px_rgba(0,0,0,0.20)]", "sm:shadow-none", "fixed", "sm:static", "bottom-0", "bg-white", "w-full", "z-[50]"], [1, "cursor-pointer", "inline-block", "px-6", "sm:px-8", "py-1.5", "sm:py-2", "my-4", "sm:my-6", "text-xl", "sm:text-2xl", "text-white", "rounded-full", "mx-auto", "font-roboto", "bg-theme-light-maroon", 3, "disabled", "ngClass", "click"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-2 py-1 mb-2 text-sm leading-none text-center border border-white font-roboto rounded-2xl", 4, "ngFor", "ngForOf"], [1, "px-2", "py-1", "mb-2", "text-sm", "leading-none", "text-center", "border", "border-white", "font-roboto", "rounded-2xl"], [1, "inline-flex", "items-center", "gap-2", "font-semibold", "font-roboto"], [1, "inline-flex", "gap-1.5"], ["class", "block w-4 h-4 lg:w-6 lg:h-6 text-theme-yellow", 4, "ngFor", "ngForOf"], [1, "block", "w-4", "h-4", "lg:w-6", "lg:h-6", "text-theme-yellow"], [4, "ngIf"], [1, "block", "w-5", "h-5", "text-theme-yellow", "[&>svg]:h-full", "[&>svg]:w-full", 3, "inlineSVG"], [1, "block", "w-5", "h-5", "[&>svg]:h-full", "[&>svg]:w-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["clip-path", "url(#clip0_3650_1917)"], ["d", "M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z", 1, "fill-theme-yellow"], ["d", "M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                                            0V10.1538L11.3078 13.2918L9.65674 8.2149Z", 1, "fill-gray-500"], [1, "rounded-3xl", "px-2.5", "py-3.5", "sm:py-4", "font-roboto", "flex", "justify-center", "items-center", "cursor-pointer", "w-[40px]", "md:w-[46px]", 3, "ngClass"], [1, "text-center", 3, "click"], [1, "mb-2", "text-sm", "leading-none", "sm:mb-1", "sm:font-semibold", "sm:text-base", "text-theme-light-grey", 3, "ngClass"], [1, "mb-2", "sm:mb-1.5", "text-xs", "sm:text-sm", "capitalize", "text-theme-light-grey", "leading-none", 3, "ngClass"], ["class", "rounded-full mx-auto w-1.5 h-1.5 bg-white white-dot", 4, "ngIf"], [1, "rounded-full", "mx-auto", "w-1.5", "h-1.5", "bg-white", "white-dot"], [1, "capitalize", "text-danger"], [1, "mt-4", "mb-2", "text-xl", "font-extrabold", "text-theme-brown", "font-lora"], [1, "text-center", "text-danger"], [1, "p-1", "sm:px-1.5", "sm:py-2"], [1, "inline-flex", "justify-center", "px-3", "py-1", "rounded-full", "sm:px-4", "w-[100px]", "lg:w-[80px]", 3, "ngClass", "click"]],
    template: function RescheduleAppointmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-payment-stepper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 11)(14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, RescheduleAppointmentComponent_div_16_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, RescheduleAppointmentComponent_div_17_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, " Select Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 11)(23, "div", 18)(24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RescheduleAppointmentComponent_Template_input_ngModelChange_24_listener($event) {
          return ctx.selectedDate = $event;
        })("input", function RescheduleAppointmentComponent_Template_input_input_24_listener() {
          return ctx.getDateValue(ctx.selectedDate);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 23)(31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RescheduleAppointmentComponent_Template_div_click_31_listener() {
          return ctx.moveLeft();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, RescheduleAppointmentComponent_div_33_Template, 7, 6, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RescheduleAppointmentComponent_Template_div_click_34_listener() {
          return ctx.moveRight();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, RescheduleAppointmentComponent_p_35_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, RescheduleAppointmentComponent_div_36_Template, 2, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, RescheduleAppointmentComponent_p_37_Template, 2, 0, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, RescheduleAppointmentComponent_div_39_Template, 3, 5, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 33)(41, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RescheduleAppointmentComponent_Template_button_click_41_listener() {
          return ctx.bookNow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " Book Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.orderData == null ? null : ctx.orderData.appt_purchase == null ? null : ctx.orderData.appt_purchase.prcs_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", (ctx.orderData == null ? null : ctx.orderData.appt_purchase == null ? null : ctx.orderData.appt_purchase.prcs_image) || (ctx.orderData == null ? null : ctx.orderData.app_refrence_image), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((ctx.orderData == null ? null : ctx.orderData.appt_purchase == null ? null : ctx.orderData.appt_purchase.prcs_name) || (ctx.orderData == null ? null : ctx.orderData.gto_package_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.orderData == null ? null : ctx.orderData.appt_purchase == null ? null : ctx.orderData.appt_purchase.prcs_tags == null ? null : ctx.orderData.appt_purchase.prcs_tags.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.orderData == null ? null : ctx.orderData.appt_purchase == null ? null : ctx.orderData.appt_purchase.prcs_rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](28, 14, ctx.selectedDateYear, "MMM,yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.currentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectedDate && ctx.selectedSlotFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.chooseSlotArray == null ? null : ctx.chooseSlotArray.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.slotsNotAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.chooseSlotArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.selectedSlotName)("ngClass", !ctx.selectedSlotName ? "opacity-60" : "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _payment_stepper_payment_stepper_component__WEBPACK_IMPORTED_MODULE_11__.PaymentStepperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe]
  });
  return RescheduleAppointmentComponent;
})();


/***/ }),

/***/ 16377:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/reschedule-appointment/reschedule-appointment.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RescheduleAppointmentModule: () => (/* binding */ RescheduleAppointmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 14565);
/* harmony import */ var _reschedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reschedule-appointment.component */ 60956);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16055);
/* harmony import */ var _payment_stepper_payment_stepper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-stepper/payment-stepper.component */ 35195);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg-2 */ 92103);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 68680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 78371);








const routes = [{
  path: '',
  component: _reschedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__.RescheduleAppointmentComponent
}];
let RescheduleAppointmentModule = /*#__PURE__*/(() => {
  var _class;
  class RescheduleAppointmentModule {}
  _class = RescheduleAppointmentModule;
  _class.ɵfac = function RescheduleAppointmentModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
  return RescheduleAppointmentModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RescheduleAppointmentModule, {
    declarations: [_reschedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__.RescheduleAppointmentComponent, _payment_stepper_payment_stepper_component__WEBPACK_IMPORTED_MODULE_1__.PaymentStepperComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
})();

/***/ })

};
;