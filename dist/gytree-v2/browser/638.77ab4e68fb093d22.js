"use strict";(self.webpackChunkgytree_v2=self.webpackChunkgytree_v2||[]).push([[638],{5638:(le,x,s)=>{s.r(x),s.d(x,{RescheduleAppointmentModule:()=>$});var d=s(6814),y=s(5861),p=s(95),_=s(6676),e=s(8926),b=s(7704),f=s(2528),D=s(2870),S=s(9638),A=s(4512),w=s(7302),Z=s(4892),T=s(3177),C=s(4701),k=s(9229),v=s(53);const I=function(a,l){return{"after:border-theme-purple-lighter":a,"after:border-theme-purple":l}},N=function(a,l){return{"text-theme-purple":a,"text-theme-purple-lighter":l}};let R=(()=>{var a;class l{constructor(n){this.GetData=n,this.visitedStepIcon="https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/visited.svg",this.currentStepIcon="https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/current.svg",this.blankStepIcon="https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/blank.svg",this.GetData.bookingSummrySelected.subscribe(t=>{this.isSummarySelected=t?.bookingSummrySelected})}}return(a=l).\u0275fac=function(n){return new(n||a)(e.Y36(b.r))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-payment-stepper"]],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","w-full","gap-[5px]","text-sm","font-medium","text-center","text-gray-500","sm:text-base"],[1,"flex","relative","gap-[5px]","w-[200px]","max-w-full","items-center","text-theme-purple","after:content-['']","after:w-full","after:border-b","after:border-1",3,"ngClass"],[1,"flex","items-center",3,"inlineSVG"],[1,"absolute","left-0","-translate-x-[40%]","top-[calc(100%+10px)]","whitespace-nowrap"],[1,"relative","flex","items-center",3,"ngClass"]],template:function(n,t){1&n&&(e.TgZ(0,"ol",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e._uU(4," Appointment "),e.qZA()(),e.TgZ(5,"div",4),e._UZ(6,"div",2),e.TgZ(7,"div",3),e._uU(8," Your Order "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("ngClass",e.WLB(4,I,t.isSummarySelected,t.isSummarySelected)),e.xp6(1),e.Q6J("inlineSVG",t.isSummarySelected?t.visitedStepIcon:t.currentStepIcon),e.xp6(3),e.Q6J("ngClass",e.WLB(7,N,t.isSummarySelected,!t.isSummarySelected)),e.xp6(1),e.Q6J("inlineSVG",t.isSummarySelected?t.currentStepIcon:t.blankStepIcon))},dependencies:[d.mk,v.d$],encapsulation:2}),l})();function Y(a,l){if(1&a&&(e.TgZ(0,"div",37),e._uU(1),e.qZA()),2&a){const i=l.$implicit;e.xp6(1),e.hij(" ",i," ")}}function J(a,l){if(1&a&&(e.TgZ(0,"div",35),e.YNc(1,Y,2,1,"div",36),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",(null==i.orderData||null==i.orderData.appt_purchase?null:i.orderData.appt_purchase.prcs_tags)||(null==i.orderData?null:i.orderData.order_ref_tags))}}function F(a,l){1&a&&(e.ynx(0),e._UZ(1,"p",43),e.BQk()),2&a&&(e.xp6(1),e.Q6J("inlineSVG","https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/star.svg"))}function L(a,l){1&a&&(e.ynx(0),e.TgZ(1,"p",44),e.O4$(),e.TgZ(2,"svg",45)(3,"g",46),e._UZ(4,"path",47)(5,"path",48),e.qZA()()(),e.BQk())}function Q(a,l){if(1&a&&(e.ynx(0),e.YNc(1,L,6,0,"ng-container",42),e.BQk()),2&a){const i=e.oxw().$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i-.5<=(null==n.orderData||null==n.orderData.appt_purchase?null:n.orderData.appt_purchase.prcs_rating)||i-.5<=(null==n.orderData?null:n.orderData.app_refrence_star))}}function U(a,l){if(1&a&&(e.TgZ(0,"div",41),e.YNc(1,F,2,1,"ng-container",42),e.YNc(2,Q,2,1,"ng-container",42),e.qZA()),2&a){const i=l.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i<=(null==n.orderData||null==n.orderData.appt_purchase?null:n.orderData.appt_purchase.prcs_rating)||i<=(null==n.orderData?null:n.orderData.app_refrence_star)),e.xp6(1),e.Q6J("ngIf",i>(null==n.orderData||null==n.orderData.appt_purchase?null:n.orderData.appt_purchase.prcs_rating)||i>(null==n.orderData?null:n.orderData.app_refrence_star))}}function M(a,l){if(1&a&&(e.TgZ(0,"div",38)(1,"div",39),e.YNc(2,U,3,2,"div",40),e.qZA(),e._uU(3),e.qZA()),2&a){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.feedBackStar),e.xp6(1),e.hij(" ",(null==i.orderData||null==i.orderData.appt_purchase?null:i.orderData.appt_purchase.prcs_rating)||(null==i.orderData?null:i.orderData.app_refrence_star),"/5 ")}}function z(a,l){1&a&&e._UZ(0,"div",54)}function O(a,l){if(1&a){const i=e.EpF();e.TgZ(0,"div",49)(1,"div",50),e.NdJ("click",function(){const o=e.CHM(i).$implicit,r=e.oxw();return e.KtG(r.getDateValue(null==o?null:o.fullDate))}),e.TgZ(2,"div",51),e._uU(3),e.qZA(),e.TgZ(4,"div",52),e._uU(5),e.qZA(),e.YNc(6,z,1,0,"div",53),e.qZA()()}if(2&a){const i=l.$implicit,n=e.oxw();e.Q6J("ngClass",n.selectedDate===(null==i?null:i.date)?"bg-theme-brown":""),e.xp6(2),e.Q6J("ngClass",n.selectedDate===(null==i?null:i.date)?"text-white":""),e.xp6(1),e.hij(" ",null==i||null==i.date?null:i.date.split("-")[2],""),e.xp6(1),e.Q6J("ngClass",n.selectedDate===(null==i?null:i.date)?"text-white":""),e.xp6(1),e.hij(" ",null==i?null:i.day,""),e.xp6(1),e.Q6J("ngIf",n.selectedDate===(null==i?null:i.date))}}function B(a,l){1&a&&(e.TgZ(0,"p",55),e._uU(1,"please select Date"),e.qZA())}function V(a,l){1&a&&(e.TgZ(0,"div",56),e._uU(1," Choose a Slot "),e.qZA())}function j(a,l){1&a&&(e.TgZ(0,"p",57),e._uU(1,"No Slot available"),e.qZA())}const G=function(a,l){return{"bg-theme-brown text-white":a,"border border-theme-brown":l}};function P(a,l){if(1&a){const i=e.EpF();e.TgZ(0,"div",58)(1,"button",59),e.NdJ("click",function(){const t=e.CHM(i),o=t.index,r=t.$implicit,u=e.oxw();return e.KtG(u.selectSlot(o,null==r?null:r.time))}),e._uU(2),e.qZA()()}if(2&a){const i=l.$implicit,n=l.index,t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(2,G,t.selectedSlot===n,t.selectedSlot!==n)),e.xp6(1),e.Oqu(null==i?null:i.time)}}const q=[{path:"",component:(()=>{var a;class l{constructor(n,t,o,r,u,W,E,H,X,K,ee,te,ne){this.cdr=n,this.GetData=t,this.router=o,this.location=r,this.localStorageService=u,this.doctorSlotAvailabilityService=W,this.doctorAvailabilityService=E,this.doctorsListService=H,this.appoinmentService=X,this.pageListService=K,this.eventTrackingService=ee,this.activatedRoute=te,this.toastr=ne,this.scheduleAppointmentForm=new p.cw({}),this.currentList=[],this.currentIndex=0,this.batchSize=7,this.selectedSlot=0,this.chooseSlotArray=[],this.selectedSlotFlag=!1,this.feedBackStar=[1,2,3,4,5],this.subscriptions=[],this.doctorAvailability=[],this.check=!1,this.userDetails=this.localStorageService.getItem("userSlug"),this.slotsNotAvailable=!1,this.TWElementsInit=()=>((0,y.Z)(function*(){const{initTE:h,Datepicker:g,Input:m,Select:c,Dropdown:ae,Modal:ie}=yield s.e(454).then(s.bind(s,8454));h({Dropdown:ae,Select:c,Datepicker:g,Input:m,Modal:ie})})(),null),this.filterFunction=h=>{let g=[],m=[];return this.doctorAvailability.forEach(c=>{g.push({year:Number(c?.date?.split("-")[0]),month:Number(c?.date?.split("-")[1]),day:Number(c?.date?.split("-")[2])})}),g.forEach(c=>{c.year===h.getFullYear()&&c.month===h.getMonth()+1&&c.day===h.getDate()&&(m=(m||[]).concat(c))}),!!m?.length}}ngOnInit(){this.TWElementsInit(),this.slug=this.activatedRoute.snapshot.paramMap.get("order_id"),this.parentSlug=this.activatedRoute.snapshot.paramMap.get("slug"),this.slug&&this.parentSlug&&(this.getDoctorAvailability(),this.getOrderData()),this.initForm()}initForm(){this.scheduleAppointmentForm=new p.cw({date:new p.NI(null,[p.kI.required]),time:new p.NI("",[p.kI.required])}),this.cdr.detectChanges()}getTimeSlots(n){this.slotsNotAvailable=!1;let t={};this.orderData&&(t={dr_id:this.orderData?.appt_fk_dr_id,date:n}),this.doctorSlotAvailabilityService.doctorSlotAvailability(t).subscribe(o=>{this.chooseSlotArray=o?.data?.data?.slots,this.selectedSlotName=this.chooseSlotArray[0]?.time,this.slotsNotAvailable=0===this.chooseSlotArray.length,this.cdr.detectChanges()})}selectSlot(n,t){this.selectedSlot=n,this.selectedSlotName=t,this.selectedSlotFlag=!1}getDoctorAvailability(){this.subscriptions.push(this.doctorAvailabilityService.getDocAvailability({type:"doctor",slug:this.parentSlug}).subscribe(t=>{t?.success&&(this.doctorAvailability=t?.data?.data?.availabilities,this.doctorAvailability=this.doctorAvailability.map(o=>{const r=o?.day,u=_().day(r).format("ddd");return{...o,day:u}}),this.selectedDateYear=this.doctorAvailability[0]?.date,this.birthDatePickerInit(),this.updateDates())}))}birthDatePickerInit(){var n=this;(0,y.Z)(function*(){const{initTE:t,Datepicker:o}=yield s.e(454).then(s.bind(s,8454));t({Datepicker:o}),new o(document.querySelector("#birthDatePickerContainer"),{filter:n.filterFunction},{inline:!0,removeClearBtn:!0},{datepickerToggleButton:"flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-theme-theme-lightest-pink focus:text-theme-theme-lightest-pink"})})()}getDateValue(n){this.selectedDate=n,this.selectedDateYear=n,this.updateDates(),this.getTimeSlots(n),this.checkDateWeek()}updateDates(){const n=this.currentIndex,t=Math.min(this.currentIndex+this.batchSize,this.doctorAvailability?.length),o=this.doctorAvailability?.slice(n,t);this.currentList=[],(o||[]).forEach(r=>{(this.currentList||[]).push({date:r?.date,day:r?.day,fullDate:r?.date})})}checkDateWeek(){let n=new Date(this.currentList[0].date).getTime(),t=new Date(this.selectedDate).getTime();this.currentList.find(o=>o.date===this.selectedDate)&&(this.check=!1),this.currentList.find(o=>o.date===this.selectedDate)||(this.check=!0,n<t&&this.moveRight(),n>t&&this.moveLeft())}moveLeft(){this.currentIndex=Math.max(0,this.currentIndex-this.batchSize),this.updateDates(),this.check?this.checkDateWeek():this.selectedDateYear=this.currentList[0].fullDate}moveRight(){this.currentIndex=Math.min(this.currentIndex+this.batchSize,this.doctorAvailability.length-this.batchSize),this.updateDates(),this.selectedDateYear=this.currentList[0].fullDate,this.check?this.checkDateWeek():this.selectedDateYear=this.currentList[0].fullDate}getOrderData(){this.subscriptions.push(this.pageListService.getAppointmentById(this.slug).subscribe(n=>{n?.success&&(this.orderData=n?.data?.data)}))}bookNow(){if(this.selectedSlotFlag=!0,!this.selectedDate)return;let n={};n={appt_id:this.orderData?.appt_id,appt_slot_time:this.selectedSlotName,appt_date:this.selectedDate},this.subscriptions.push(this.appoinmentService.appoinmentReschedule(n).subscribe(t=>{t&&(this.toastr.success("Reschedule Appointment Successfully",void 0,{positionClass:"toast-bottom-center",closeButton:!0}),setTimeout(()=>{this.router.navigate(["/appointment"])},1e3))}))}}return(a=l).\u0275fac=function(n){return new(n||a)(e.Y36(e.sBO),e.Y36(b.r),e.Y36(f.F0),e.Y36(d.Ye),e.Y36(D.n),e.Y36(S.$),e.Y36(A.B),e.Y36(w.N),e.Y36(Z.T),e.Y36(T.p),e.Y36(C.f),e.Y36(f.gz),e.Y36(k._W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-reschedule-appointment"]],decls:43,vars:17,consts:[[1,"sm:container","pb-[72px]","sm:pb-0","flex-col","justify-center","flex","h-screen"],[1,"sticky","block","pt-6","pb-10","sm:pt-10","sm:pb-14"],[1,"flex","justify-center"],[1,"sm:w-[510px]","max-w-full"],[1,"pt-3","text-lg","sm:py-3","font-roboto"],[1,"px-4","sm:px-0"],[1,"mb-5","leading-none"],[1,"capitalize"],[1,"flex","gap-4","bg-theme-purple-lighter","rounded-3xl","py-[15px]","px-5","mb-5"],[1,"bg-theme-light-cream","w-[100px]","h-[100px]","rounded-[20px]","overflow-hidden","shrink-0","inline-flex","items-end"],["alt","",1,"max-w-full","max-h-full",3,"src"],[1,""],[1,"mb-1.5","text-lg","font-semibold"],["class","flex flex-wrap gap-2",4,"ngIf"],["class","inline-flex items-center gap-2 font-semibold font-roboto",4,"ngIf"],[1,"sm:border","border-theme-ligher-pink","rounded-2xl","py-5","px-[15px]"],[1,"flex","justify-between","px-2"],[1,"mb-2","text-lg","font-extrabold","sm:text-xl","text-theme-brown","font-lora"],["id","birthDatePickerContainer","data-te-target","#datePickerOne","data-te-format","yyyy-mm-dd",1,"relative"],["type","text","id","birthDatePicker","placeholder","Birth Date",1,"w-full","hidden","px-4","py-2","bg-transparent","border","rounded-full","appearance-none","font-roboto","focus:outline-none","focus:ring-0","peer","data-[te-input-state-active]:placeholder:opacity-100","motion-reduce:transition-none","[&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",3,"ngModel","ngModelChange","input"],["for","birthDatePicker",1,"absolute","font-roboto","text-gray-500","duration-300","transform","-translate-y-4","scale-75","top-2","z-10","origin-[0]","bg-white","peer-placeholder-shown:scale-100","peer-placeholder-shown:-translate-y-1/2","peer-placeholder-shown:top-1/2","peer-focus:top-2","peer-focus:scale-75","peer-focus:-translate-y-5","left-5","peer-focus:left-5","peer-data-[te-input-state-active]:-translate-y-[0.9rem]","peer-data-[te-input-state-active]:scale-[0.8]","motion-reduce:transition-none"],["id","datePickerOne","data-te-datepicker-toggle-ref","","data-te-datepicker-toggle-button-ref","",1,"text-sm","sm:text-base","inline-flex","items-center","gap-2.5","cursor-pointer","select-none","mb-2.5"],["id","birthDatePickerContainer","inlineSVG","https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/chevron-down.svg",1,""],[1,"text-sm","sm:text-base","inline-flex","items-center","gap-2.5","cursor-pointer","select-none","mb-2.5","w-full"],["inlineSVG","https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/left-arrow.svg",1,"hidden","overflow-hidden","rounded-full","cursor-pointer","sm:block",3,"click"],[1,"flex","flex-auto","justify-between","gap-[5px]"],["class","rounded-3xl px-2.5 py-3.5 sm:py-4 font-roboto flex justify-center items-center cursor-pointer w-[40px] md:w-[46px]",3,"ngClass",4,"ngFor","ngForOf"],["inlineSVG","https://s3.ap-south-1.amazonaws.com/gytree.com/assetsV2/media/payment-module/svg/right-arrow.svg",1,"hidden","overflow-hidden","rounded-full","cursor-pointer","sm:block",3,"click"],["class","capitalize text-danger",4,"ngIf"],["class","mt-4 mb-2 text-xl font-extrabold text-theme-brown font-lora",4,"ngIf"],["class","text-center text-danger",4,"ngIf"],[1,"flex","flex-wrap","justify-center","sm:overflow-y-auto","sm:max-h-[140px]","styled-scrollbar"],["class","p-1 sm:px-1.5 sm:py-2",4,"ngFor","ngForOf"],[1,"text-center","left-0","right-0","shadow-[0px_15px_50px_0px_rgba(0,0,0,0.20)]","sm:shadow-none","fixed","sm:static","bottom-0","bg-white","w-full","z-[50]"],[1,"cursor-pointer","inline-block","px-6","sm:px-8","py-1.5","sm:py-2","my-4","sm:my-6","text-xl","sm:text-2xl","text-white","rounded-full","mx-auto","font-roboto","bg-theme-light-maroon",3,"disabled","ngClass","click"],[1,"flex","flex-wrap","gap-2"],["class","px-2 py-1 mb-2 text-sm leading-none text-center border border-white font-roboto rounded-2xl",4,"ngFor","ngForOf"],[1,"px-2","py-1","mb-2","text-sm","leading-none","text-center","border","border-white","font-roboto","rounded-2xl"],[1,"inline-flex","items-center","gap-2","font-semibold","font-roboto"],[1,"inline-flex","gap-1.5"],["class","block w-4 h-4 lg:w-6 lg:h-6 text-theme-yellow",4,"ngFor","ngForOf"],[1,"block","w-4","h-4","lg:w-6","lg:h-6","text-theme-yellow"],[4,"ngIf"],[1,"block","w-5","h-5","text-theme-yellow","[&>svg]:h-full","[&>svg]:w-full",3,"inlineSVG"],[1,"block","w-5","h-5","[&>svg]:h-full","[&>svg]:w-full"],["xmlns","http://www.w3.org/2000/svg","width","14","height","14","viewBox","0 0 14 14","fill","none"],["clip-path","url(#clip0_3650_1917)"],["d","M5.33691 5.07688H0L4.31951 8.2149L2.66845 13.2918L6.98797 10.1538V0L5.33691 5.07688Z",1,"fill-theme-yellow"],["d","M9.65674 8.2149L13.9762 5.07688H8.63682L6.98828\n                                                            0V10.1538L11.3078 13.2918L9.65674 8.2149Z",1,"fill-gray-500"],[1,"rounded-3xl","px-2.5","py-3.5","sm:py-4","font-roboto","flex","justify-center","items-center","cursor-pointer","w-[40px]","md:w-[46px]",3,"ngClass"],[1,"text-center",3,"click"],[1,"mb-2","text-sm","leading-none","sm:mb-1","sm:font-semibold","sm:text-base","text-theme-light-grey",3,"ngClass"],[1,"mb-2","sm:mb-1.5","text-xs","sm:text-sm","capitalize","text-theme-light-grey","leading-none",3,"ngClass"],["class","rounded-full mx-auto w-1.5 h-1.5 bg-white white-dot",4,"ngIf"],[1,"rounded-full","mx-auto","w-1.5","h-1.5","bg-white","white-dot"],[1,"capitalize","text-danger"],[1,"mt-4","mb-2","text-xl","font-extrabold","text-theme-brown","font-lora"],[1,"text-center","text-danger"],[1,"p-1","sm:px-1.5","sm:py-2"],[1,"inline-flex","justify-center","px-3","py-1","rounded-full","sm:px-4","w-[100px]","lg:w-[80px]",3,"ngClass","click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-payment-stepper",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"span",7),e._uU(8),e.qZA(),e._uU(9," Details "),e.qZA(),e.TgZ(10,"div",8)(11,"div",9),e._UZ(12,"img",10),e.qZA(),e.TgZ(13,"div",11)(14,"div",12),e._uU(15),e.qZA(),e.YNc(16,J,2,1,"div",13),e.YNc(17,M,4,2,"div",14),e.qZA()()(),e.TgZ(18,"div",15)(19,"div",16)(20,"div",17),e._uU(21," Select Date "),e.qZA(),e.TgZ(22,"div",11)(23,"div",18)(24,"input",19),e.NdJ("ngModelChange",function(r){return t.selectedDate=r})("input",function(){return t.getDateValue(t.selectedDate)}),e.qZA(),e._UZ(25,"label",20),e.TgZ(26,"div",21),e._uU(27),e.ALo(28,"date"),e._UZ(29,"div",22),e.qZA()()()(),e.TgZ(30,"div",23)(31,"div",24),e.NdJ("click",function(){return t.moveLeft()}),e.qZA(),e.TgZ(32,"div",25),e.YNc(33,O,7,6,"div",26),e.qZA(),e.TgZ(34,"div",27),e.NdJ("click",function(){return t.moveRight()}),e.qZA()(),e.YNc(35,B,2,0,"p",28),e.YNc(36,V,2,0,"div",29),e.YNc(37,j,2,0,"p",30),e.TgZ(38,"div",31),e.YNc(39,P,3,5,"div",32),e.qZA()(),e.TgZ(40,"div",33)(41,"button",34),e.NdJ("click",function(){return t.bookNow()}),e._uU(42," Book Now "),e.qZA()()()()()()),2&n&&(e.xp6(8),e.Oqu(null==t.orderData||null==t.orderData.appt_purchase?null:t.orderData.appt_purchase.prcs_type),e.xp6(4),e.Q6J("src",(null==t.orderData||null==t.orderData.appt_purchase?null:t.orderData.appt_purchase.prcs_image)||(null==t.orderData?null:t.orderData.app_refrence_image),e.LSH),e.xp6(3),e.Oqu((null==t.orderData||null==t.orderData.appt_purchase?null:t.orderData.appt_purchase.prcs_name)||(null==t.orderData?null:t.orderData.gto_package_name)),e.xp6(1),e.Q6J("ngIf",(null==t.orderData||null==t.orderData.appt_purchase||null==t.orderData.appt_purchase.prcs_tags?null:t.orderData.appt_purchase.prcs_tags.length)>0),e.xp6(1),e.Q6J("ngIf",null==t.orderData||null==t.orderData.appt_purchase?null:t.orderData.appt_purchase.prcs_rating),e.xp6(7),e.Q6J("ngModel",t.selectedDate),e.xp6(3),e.hij(" ",e.xi3(28,14,t.selectedDateYear,"MMM,yyyy")," "),e.xp6(6),e.Q6J("ngForOf",t.currentList),e.xp6(2),e.Q6J("ngIf",!t.selectedDate&&t.selectedSlotFlag),e.xp6(1),e.Q6J("ngIf",null==t.chooseSlotArray?null:t.chooseSlotArray.length),e.xp6(1),e.Q6J("ngIf",t.slotsNotAvailable),e.xp6(2),e.Q6J("ngForOf",t.chooseSlotArray),e.xp6(2),e.Q6J("disabled",!t.selectedSlotName)("ngClass",t.selectedSlotName?"":"opacity-60"))},dependencies:[d.mk,d.sg,d.O5,v.d$,p.Fj,p.JJ,p.On,R,d.uU]}),l})()}];let $=(()=>{var a;class l{}return(a=l).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[f.Bz.forChild(q),d.ez,v.vi,p.u5,p.UX]}),l})()}}]);