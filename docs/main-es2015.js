(self["webpackChunkchar_sheet_idle"] = self["webpackChunkchar_sheet_idle"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/time.service */ 9260);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/location-panel/location-panel.component */ 8727);
/* harmony import */ var _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/skill-panel/skill-panel.component */ 2087);
/* harmony import */ var _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/character-panel/character-panel.component */ 280);
/* harmony import */ var _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/message-panel/message-panel.component */ 4902);







class AppComponent {
    constructor(_timeService) {
        this._timeService = _timeService;
        this.title = 'char-sheet-idle';
    }
    ngOnInit() {
        this._timeService.startGame();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_0__.TimeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["fxLayout", "column", 1, "layout-container"], ["fxFlex", "4", 1, "layout-top"], ["fxFlex", "70", 1, "layout-center"], ["fxFlex", "80", 1, "layout-center-left"], ["fxFlex", "20", 1, "layout-center-right"], ["fxFlex", "26", "fxLayout", "row", 1, "layout-bottom"], ["fxFlex", "60", 1, "layout-left-bottom"], ["fxFlex", "40", 1, "layout-right-bottom"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Character Sheet Idle 0.1 --- Work in progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-location-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-skill-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-character-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-message-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__.LocationPanelComponent, _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_2__.SkillPanelComponent, _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_3__.CharacterPanelComponent, _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_4__.MessagePanelComponent], styles: [".layout-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.layout-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-center[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-left-bottom[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQU1BO0VBQ0UsZ0NBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sYXlvdXQtdG9we1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxufVxyXG5cclxuLmxheW91dC1jZW50ZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcblxyXG4ubGF5b3V0LWJvdHRvbXtcclxuXHJcbn1cclxuXHJcbi5sYXlvdXQtbGVmdC1ib3R0b217XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuXHJcbi5sYXlvdXQtcmlnaHQtYm90dG9te1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/location-panel/location-panel.component */ 8727);
/* harmony import */ var _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/character-panel/character-panel.component */ 280);
/* harmony import */ var _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/message-panel/message-panel.component */ 4902);
/* harmony import */ var _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/game-button/game-button.component */ 8473);
/* harmony import */ var _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/progress-bar/progress-bar.component */ 3358);
/* harmony import */ var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/display-number.pipe */ 9191);
/* harmony import */ var _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/skill-panel/skill-panel.component */ 2087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__.LocationPanelComponent,
        _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__.CharacterPanelComponent,
        _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__.MessagePanelComponent,
        _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_4__.GameButtonComponent,
        _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent,
        _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_6__.DisplayNumberPipe,
        _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_7__.SkillPanelComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexModule] }); })();


/***/ }),

/***/ 280:
/*!*************************************************************************!*\
  !*** ./src/app/components/character-panel/character-panel.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterPanelComponent": function() { return /* binding */ CharacterPanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/game-button/game-button.component */ 8473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);
/* harmony import */ var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/display-number.pipe */ 9191);







function CharacterPanelComponent_span_4_game_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_span_4_game_button_6_Template_game_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.upgradeDie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Upgrade Die: ", ctx_r2.getNextDieCost(), " AP ");
} }
function CharacterPanelComponent_span_4_game_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_span_4_game_button_8_Template_game_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.unlockStat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Unlock ", ctx_r3.getNextStatUnlockName(), ": ", ctx_r3.getNextStatUnlockCost(), " AP ");
} }
function CharacterPanelComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CharacterPanelComponent_span_4_game_button_6_Template, 2, 1, "game-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CharacterPanelComponent_span_4_game_button_8_Template, 2, 2, "game-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Current die: ", ctx_r0.dieCount, "d", ctx_r0.dieFaces, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("AP: ", ctx_r0.ap, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getNextDieCost() != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getNextStatUnlockName() != null);
} }
function CharacterPanelComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", stat_r9.key, ": ", stat_r9.value, " ");
} }
function CharacterPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "displayNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_div_5_Template_game_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.rest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Resting at the inn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CharacterPanelComponent_div_5_div_22_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Stamina: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 11, ctx_r1.stamina), "/", ctx_r1.maxStamina, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.stamina)("max", ctx_r1.maxStamina);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Level ", ctx_r1.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("XP: ", ctx_r1.xp, "/", ctx_r1.xpMax, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.xp)("max", ctx_r1.xpMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 13, ctx_r1.stats));
} }
class CharacterPanelComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
    }
    ngOnInit() {
    }
    getCharacter() {
        return this._gameService.character;
    }
    getAP() {
        return this._gameService.ap;
    }
    getDie() {
        return this._gameService.getCurrentDie();
    }
    getNextDieCost() {
        let result = null;
        const nextDie = this._gameService.getNextDie();
        if (nextDie != null) {
            result = nextDie.cost;
        }
        return result;
    }
    getNextStatUnlockName() {
        const nextUnlock = this._gameService.getNextStatUnlock();
        if (nextUnlock == null) {
            return null;
        }
        return nextUnlock.stat;
    }
    getNextStatUnlockCost() {
        const nextUnlock = this._gameService.getNextStatUnlock();
        if (nextUnlock == null) {
            return null;
        }
        return nextUnlock.cost;
    }
    // ======Display Getters======
    get name() {
        return this.getCharacter().name;
    }
    get level() {
        return this.getCharacter().level;
    }
    get xp() {
        return this.getCharacter().xp;
    }
    get xpMax() {
        return this._gameService.getLevelCost(this.level + 1);
    }
    get stamina() {
        return this.getCharacter().stamina;
    }
    get maxStamina() {
        return this.getCharacter().maxStamina;
    }
    get stats() {
        return this.getCharacter().stats;
    }
    getStat(stat) {
        return this.getCharacter().stat(stat);
    }
    get ap() {
        return this._gameService.ap;
    }
    get dieCount() {
        return this.getDie().count;
    }
    get dieFaces() {
        return this.getDie().faces;
    }
    // ======Click Handlers======
    rollNewCharacter() {
        this._gameService.rollNewCharacter();
    }
    upgradeDie() {
        this._gameService.upgradeDie();
    }
    unlockStat() {
        this._gameService.unlockStat();
    }
    rest() {
        this._gameService.rest();
    }
}
CharacterPanelComponent.ɵfac = function CharacterPanelComponent_Factory(t) { return new (t || CharacterPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
CharacterPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CharacterPanelComponent, selectors: [["app-character-panel"]], decls: 6, vars: 2, consts: [["fxLayout", "row", 1, "game-section"], ["fxLayout", "column", 1, "reroll-panel"], [3, "click"], [4, "ngIf"], ["fxLayout", "row", "class", "character-sheet", 4, "ngIf"], [3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "character-sheet"], ["fxLayout", "column", 1, "character-sheet-left"], ["fxLayout", "row"], ["fxFlex", "80"], [3, "value", "max"], ["fxLayout", "column", 1, "character-sheet-right"], [4, "ngFor", "ngForOf"]], template: function CharacterPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "game-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_Template_game_button_click_2_listener() { return ctx.rollNewCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Roll New Character");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CharacterPanelComponent_span_4_Template, 9, 5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CharacterPanelComponent_div_5_Template, 24, 15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__.GameButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_3__.DisplayNumberPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe], styles: [".reroll-panel[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.character-sheet-left[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 30px;\n}\n\n.character-sheet-right[_ngcontent-%COMP%] {\n  margin: 1.5em;\n  padding-left: 15px;\n  padding-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJjaGFyYWN0ZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVyb2xsLXBhbmVse1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLXNoZWV0LWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItc2hlZXQtcmlnaHR7XHJcbiAgbWFyZ2luOiAxLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8473:
/*!************************************************************************!*\
  !*** ./src/app/components/common/game-button/game-button.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameButtonComponent": function() { return /* binding */ GameButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


const _c0 = ["*"];
class GameButtonComponent {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onClick(event) {
        event.stopPropagation();
        this.click.emit();
    }
}
GameButtonComponent.ɵfac = function GameButtonComponent_Factory(t) { return new (t || GameButtonComponent)(); };
GameButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameButtonComponent, selectors: [["game-button"]], outputs: { click: "click" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "game-btn", 3, "click"], [1, "text"]], template: function GameButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameButtonComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".game-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px solid darkslategray;\n  border-radius: 3px;\n  min-height: 1.4em;\n  font-size: 9pt;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0.3em;\n  text-align: center;\n  pointer-events: none;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImdhbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNGVtO1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwLjNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3358:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": function() { return /* binding */ ProgressBarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProgressBarComponent {
    constructor() {
        this.value = 15;
        this.max = 100;
    }
    ngOnInit() {
    }
    getWidth() {
        let result = this.value / this.max;
        result = result * 100;
        result = Math.min(result, 100);
        result = Math.max(0, result);
        return result;
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["progress-bar"]], inputs: { value: "value", max: "max" }, decls: 2, vars: 2, consts: [[1, "bar-outer"], [1, "bar-inner"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getWidth() + "%");
    } }, styles: [".bar-outer[_ngcontent-%COMP%] {\n  background-color: #c9d7eb;\n  border-radius: 3px;\n  padding: 0px;\n}\n\n.bar-inner[_ngcontent-%COMP%] {\n  background-color: blue;\n  height: 0.3em;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItb3V0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIxNSwgMjM1KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYmFyLWlubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGhlaWdodDogMC4zZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8727:
/*!***********************************************************************!*\
  !*** ./src/app/components/location-panel/location-panel.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPanelComponent": function() { return /* binding */ LocationPanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/game-button/game-button.component */ 8473);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);






function LocationPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "game-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LocationPanelComponent_div_2_Template_game_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const venture_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.selectVenture(venture_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "progress-bar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venture_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venture_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venture_r1.completions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venture_r1.encounterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", venture_r1.progress)("max", venture_r1.progressMax);
} }
class LocationPanelComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
        this.localVentures = [];
    }
    ngOnInit() {
    }
    getVentures() {
        return this._gameService.ventures;
    }
    // ======Display Getters======
    // ======Click Handlers======
    selectVenture(v) {
        this._gameService.selectVenture(v);
    }
}
LocationPanelComponent.ɵfac = function LocationPanelComponent_Factory(t) { return new (t || LocationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
LocationPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LocationPanelComponent, selectors: [["app-location-panel"]], decls: 3, vars: 1, consts: [[1, "game-section"], [1, "local-ventures"], ["class", "venture", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "venture"], ["fxFlex", "30"], ["fxFlex", "30", "fxLayout", "row", 1, "venture-left"], ["fxFlex", "60", 3, "click"], ["fxFlex", "40"], ["fxFlex", "70", "fxLayout", "column", 1, "venture-right"], [3, "value", "max"]], template: function LocationPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LocationPanelComponent_div_2_Template, 11, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getVentures());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__.GameButtonComponent, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent], styles: [".local-ventures[_ngcontent-%COMP%] {\n  margin: 2em;\n  max-width: 60%;\n}\n\n.venture[_ngcontent-%COMP%] {\n  margin: 1.8em;\n}\n\n.venture-left[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImxvY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2FsLXZlbnR1cmVze1xyXG4gIG1hcmdpbjogMi4wZW07XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi52ZW50dXJle1xyXG4gIG1hcmdpbjogMS44ZW07XHJcbn1cclxuXHJcbi52ZW50dXJlLWxlZnR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi52ZW50dXJlLXJpZ2h0e1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4902:
/*!*********************************************************************!*\
  !*** ./src/app/components/message-panel/message-panel.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePanelComponent": function() { return /* binding */ MessagePanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/message.service */ 2684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function MessagePanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r1, " ");
} }
class MessagePanelComponent {
    constructor(_messageService) {
        this._messageService = _messageService;
        this.messageBuffer = [];
        this.messageBufferSize = 10;
    }
    ngOnInit() {
        this._messageService.msgFeed.subscribe(x => this.onMessage(x));
    }
    onMessage(msg) {
        this.messageBuffer.push(msg);
        while (this.messageBuffer.length > this.messageBufferSize) {
            this.messageBuffer.splice(0, 1);
        }
    }
}
MessagePanelComponent.ɵfac = function MessagePanelComponent_Factory(t) { return new (t || MessagePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
MessagePanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagePanelComponent, selectors: [["app-message-panel"]], decls: 3, vars: 1, consts: [[1, "game-section"], [1, "messages"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"]], template: function MessagePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MessagePanelComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messageBuffer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2087:
/*!*****************************************************************!*\
  !*** ./src/app/components/skill-panel/skill-panel.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillPanelComponent": function() { return /* binding */ SkillPanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);





function SkillPanelComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", skill_r2.total(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r2.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", skill_r2.progress)("max", ctx_r1.progressMax(skill_r2));
} }
function SkillPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SkillPanelComponent_div_0_div_3_Template, 10, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.getSkills());
} }
class SkillPanelComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
    }
    ngOnInit() {
    }
    getSkills() {
        if (this._gameService.character == null) {
            return null;
        }
        return this._gameService.character.skills;
    }
    // ======Display Getters======
    progressMax(skill) {
        return this._gameService.getSkillRankCost(skill.name, skill.rank + 1);
    }
}
SkillPanelComponent.ɵfac = function SkillPanelComponent_Factory(t) { return new (t || SkillPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
SkillPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillPanelComponent, selectors: [["app-skill-panel"]], decls: 1, vars: 1, consts: [["class", "game-section", 4, "ngIf"], [1, "game-section"], [1, "combat-skills"], ["class", "skill", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "skill"], ["fxFlex", "10", 1, "skill-total"], ["fxFlex", "90", "fxLayout", "column"], ["fxFlex", "90", "fxLayout", "row", 1, "skill-text"], ["fxFlex", "90"], ["fxFlex", "10"], ["fxFlex", "10", 3, "value", "max"]], template: function SkillPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SkillPanelComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getSkills() != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent], styles: [".skill[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n\n.skill-total[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15pt;\n}\n\n.skill-text[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InNraWxsLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLnNraWxsLXRvdGFsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5za2lsbC10ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4553:
/*!*************************************!*\
  !*** ./src/app/models/character.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Character": function() { return /* binding */ Character; },
/* harmony export */   "Skill": function() { return /* binding */ Skill; }
/* harmony export */ });
class Character {
    constructor() {
        this.stats = new Map();
        this.skills = [];
    }
    stat(stat) {
        if (!this.stats.has(stat)) {
            return 0;
        }
        return this.stats.get(stat);
    }
    setStat(stat, value) {
        this.stats.set(stat, value);
    }
    getStats() {
        return this.stats.keys();
    }
    skill(skill) {
        return this.skills.find(x => x.name == skill);
    }
    hasSkill(skill) {
        return this.skills.some(x => x.name == skill);
    }
}
class Skill {
    constructor(name) {
        this.rank = 1;
        this.progress = 0;
        this.itemBonus = 0;
        this.name = name;
    }
    total() {
        return this.rank + this.itemBonus;
    }
}


/***/ }),

/***/ 7949:
/*!***********************************!*\
  !*** ./src/app/models/venture.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Venture": function() { return /* binding */ Venture; }
/* harmony export */ });
class Venture {
    constructor() {
        this.encounterName = null;
        this.progress = 0;
        this.progressMax = 100;
        this.completions = 0;
    }
}


/***/ }),

/***/ 9191:
/*!**********************************************!*\
  !*** ./src/app/pipes/display-number.pipe.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayNumberPipe": function() { return /* binding */ DisplayNumberPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DisplayNumberPipe {
    transform(value, args) {
        let prefix = '';
        let suffix = '';
        if (value < 0) {
            prefix = '-';
        }
        value = Math.abs(value);
        if (value < 1000) {
            return prefix + this.getSuffixedValue(value, suffix);
        }
        const decimalPlaces = Math.floor(Math.log10(value));
        if (decimalPlaces < 6) {
            value = (value / 1000);
            suffix = 'K';
        }
        else {
            value = (value / 1000000);
            suffix = 'M';
        }
        return prefix + this.getSuffixedValue(value, suffix);
    }
    getSuffixedValue(value, suffix) {
        if (value - Math.floor(value) > 0.01) {
            return value.toFixed(2) + suffix;
        }
        return value.toFixed(0) + suffix;
    }
}
DisplayNumberPipe.ɵfac = function DisplayNumberPipe_Factory(t) { return new (t || DisplayNumberPipe)(); };
DisplayNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "displayNumber", type: DisplayNumberPipe, pure: true });


/***/ }),

/***/ 1397:
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": function() { return /* binding */ GameService; }
/* harmony export */ });
/* harmony import */ var _models_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/character */ 4553);
/* harmony import */ var _models_venture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/venture */ 7949);
/* harmony import */ var _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staticData/dieDefinitions */ 5476);
/* harmony import */ var _staticData_encounterDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticData/encounterDefinitions */ 3973);
/* harmony import */ var _staticData_itemDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../staticData/itemDefinitions */ 2333);
/* harmony import */ var _staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staticData/skillDefinitions */ 1294);
/* harmony import */ var _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../staticData/ventureDefinitions */ 6193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time.service */ 9260);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message.service */ 2684);










class GameService {
    constructor(_timeService, _messageService) {
        this._timeService = _timeService;
        this._messageService = _messageService;
        this.character = null;
        this.ventures = [];
        this.items = [];
        this.ap = 0;
        this.dieRank = 0;
        this.unlockedStats = ["body"];
        this.resting = false;
        this._init = false;
    }
    initVentures() {
        this.ventures = [];
        _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_6__.VENTURE_LIBRARY.forEach(def => {
            const v = new _models_venture__WEBPACK_IMPORTED_MODULE_1__.Venture();
            v.name = def.name;
            this.ventures.push(v);
        });
    }
    initSim() {
        if (this._init) {
            return;
        }
        this._timeService.tick.subscribe(x => this.tick(x));
        this._init = true;
    }
    // ======Simulation======
    tick(dT) {
        if (this.character == null) {
            return;
        }
        // Do Rest
        if (this.resting) {
            this.character.stamina += 5 * dT;
            if (this.character.stamina >= this.character.maxStamina) {
                this.character.stamina = this.character.maxStamina;
                this.resting = false;
            }
        }
        // Progress current venture
        else if (this.targetVenture != null) {
            const venture = this.ventures.find(x => x.name == this.targetVenture);
            if (venture == null) {
                return;
            }
            // If there isn't an encounter, init an encounter
            if (venture.encounterName == null) {
                this.startEncounter(venture);
            }
            const encDef = this.getEncounterDef(venture.encounterName);
            const bestSkill = this.bestSkillForEncounter(encDef);
            if (bestSkill != null) {
                const encSkill = encDef.skills.find(x => x.skill == bestSkill);
                const charSkillStr = this.character.skill(bestSkill).total();
                venture.progress += encSkill.strength * charSkillStr * dT;
                this.advanceSkill(bestSkill, dT);
            }
            venture.progress += 7 * this.character.stat("body") * encDef.getSkill("melee") * dT;
            this.character.stamina -= dT * encDef.staminaDrain;
            if (this.character.stamina <= 0) {
                this.resting = true;
            }
            if (venture.progress > venture.progressMax) {
                venture.completions++;
                venture.progress = 0;
                this._messageService.addMessage("You slay the " + venture.encounterName + ".");
                this.gainXp(encDef.xpReward);
                if (encDef.itemReward != null) {
                    this.gainItem(encDef.itemReward);
                }
                this.startEncounter(venture);
            }
        }
        // Degen venture progress
        this.ventures.forEach(x => {
            if (x.progress > 0 && (this.resting || this.targetVenture != x.name)) {
                const encDef = this.getEncounterDef(x.encounterName);
                const progDegen = x.progressMax * (encDef.progressDegenPct / 100);
                x.progress -= progDegen * dT;
                if (x.progress <= 0) {
                    x.progress = 0;
                    this._messageService.addMessage(`The ${x.encounterName} wandered off while you were asleep.`);
                    x.encounterName = null;
                }
            }
        });
    }
    advanceSkill(skill, dT) {
        const s = this.character.skill(skill);
        const sDef = this.getSkillDef(skill);
        const relatedStat = this.character.stat(sDef.stat);
        s.progress += relatedStat * relatedStat * dT;
        const nextRankCost = this.getSkillRankCost(skill, s.rank + 1);
        if (s.progress >= nextRankCost) {
            s.progress -= nextRankCost;
            s.rank++;
            this._messageService.addMessage(`Your ${skill} skill has increased to ${s.rank}.`);
        }
    }
    // ======Character Operations======
    rollNewCharacter() {
        const die = this.getCurrentDie();
        this.character = new _models_character__WEBPACK_IMPORTED_MODULE_0__.Character();
        this.character.name = "Bob the Adventurer";
        this.character.xp = 0;
        this.character.level = 1;
        this.unlockedStats.forEach(x => {
            this.character.setStat(x, die.roll());
        });
        this.initSkills();
        // TODO: Sell old items
        this.items = [];
        this.character.maxStamina = (this.character.stat("body") + 2) * 3;
        this.character.stamina = this.character.maxStamina;
        this.targetVenture = null;
        this.resting = false;
        this._messageService.addMessage("Welcome, " + this.character.name + "!");
        this.initVentures();
        this.initSim();
        this.updateSkills();
    }
    initSkills() {
        this.character.skills = [];
        _staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_5__.SKILL_LIBRARY.forEach(x => {
            this.character.skills.push(new _models_character__WEBPACK_IMPORTED_MODULE_0__.Skill(x.name));
        });
    }
    updateSkills() {
        this.character.skills.forEach(x => {
            x.itemBonus = 0;
        });
        this.items.forEach(x => {
            const def = this.getItemDef(x);
            let canUse = true;
            if (def.requiredStat != null) {
                if (def.requiredStatAmount > this.character.stat(def.requiredStat)) {
                    canUse = false;
                }
            }
            if (canUse) {
                const skill = this.character.skill(def.skill);
                if (skill != null) {
                    skill.itemBonus += def.strength;
                }
            }
        });
    }
    bestSkillForEncounter(encounter) {
        let bestSkill = null;
        let bestStrength = 0;
        encounter.skills.forEach(s => {
            if (!this.character.hasSkill(s.skill)) {
                return;
            }
            const skillDef = this.getSkillDef(s.skill);
            if (this.character.stat(skillDef.stat) <= 0) {
                return;
            } // Can't use a skill with no supporting stat
            const str = this.character.skill(s.skill).total() * s.strength;
            if (str > bestStrength) {
                bestSkill = s.skill;
                bestStrength = str;
            }
        });
        return bestSkill;
    }
    getSkillRankCost(skill, rank) {
        const def = this.getSkillDef(skill);
        return 25 + (((rank * rank) - 2) * 45 * def.cost);
    }
    getLevelCost(level) {
        return 150 + (((level * level) - 2) * 135);
    }
    rest() {
        this.resting = true;
    }
    gainXp(xp) {
        this.character.xp += xp;
        const nextLevelCost = this.getLevelCost(this.character.level + 1);
        if (this.character.xp >= nextLevelCost) {
            this.character.xp -= nextLevelCost;
            this.gainLevel();
        }
    }
    gainLevel() {
        this.character.level++;
        const newLevel = this.character.level;
        this._messageService.addMessage("You have reached level " + newLevel + "!");
        const die = this.getCurrentDie();
        for (let stat of this.character.getStats()) {
            const curStat = this.character.stat(stat);
            const increase = Math.floor(die.roll() / 3);
            if (increase > 0) {
                this._messageService.addMessage(`Your ${stat} has increased by ${increase}.`);
                this.character.setStat(stat, curStat + increase);
            }
        }
        this.character.maxStamina = (this.character.stat("body") + 2) * 3;
        this.character.stamina = this.character.maxStamina;
        const newAp = Math.max(0, newLevel * newLevel - 3);
        this.ap += newAp;
        this._messageService.addMessage("You have gained " + newAp + " AP.");
        this.updateSkills();
    }
    gainItem(item) {
        this._messageService.addMessage(`You found a ${item}.`);
        if (this.items.indexOf(item) != -1) {
            this._messageService.addMessage(`You already have one, so you sold it.`);
        }
        else {
            this.items.push(item);
        }
        this.updateSkills();
    }
    getSkillDef(name) {
        return _staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_5__.SKILL_LIBRARY.find(x => x.name == name);
    }
    getItemDef(name) {
        return _staticData_itemDefinitions__WEBPACK_IMPORTED_MODULE_4__.ITEM_LIBRARY.find(x => x.name == name);
    }
    //======Venture Operations======
    getVentureDef(name) {
        return _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_6__.VENTURE_LIBRARY.find(x => x.name == name);
    }
    getEncounterDef(name) {
        return _staticData_encounterDefinitions__WEBPACK_IMPORTED_MODULE_3__.ENCOUNTER_LIBRARY.find(x => x.name == name);
    }
    selectVenture(venture) {
        this.targetVenture = venture.name;
    }
    startEncounter(venture) {
        const def = this.getVentureDef(venture.name);
        const encounter = def.getRandomEncounter();
        const encDef = this.getEncounterDef(encounter);
        venture.encounterName = encounter;
        venture.progressMax = 25 * Math.pow(encDef.progressNeeded, 4.5);
    }
    //======Die Operations======
    getCurrentDie() {
        return _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY[this.dieRank];
    }
    getNextDie() {
        if (_staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY.length <= this.dieRank + 1) {
            return null;
        }
        return _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY[this.dieRank + 1];
    }
    upgradeDie() {
        if (_staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY.length <= this.dieRank + 1) {
            return;
        }
        this.dieRank++;
    }
    //======AP Unlocks======
    getNextStatUnlock() {
        if (this.unlockedStats.length == 1) {
            return { stat: "agility", cost: 10 };
        }
        if (this.unlockedStats.length == 2) {
            return { stat: "mind", cost: 25 };
        }
        return null;
    }
    unlockStat() {
        const unlock = this.getNextStatUnlock();
        if (unlock == null) {
            return;
        }
        this.unlockedStats.push(unlock.stat);
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_time_service__WEBPACK_IMPORTED_MODULE_7__.TimeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_8__.MessageService)); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2684:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": function() { return /* binding */ MessageService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class MessageService {
    constructor() {
        this.msgFeed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    addMessage(message) {
        this.msgFeed.next(message);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9260:
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeService": function() { return /* binding */ TimeService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);


const tickRate = 100;
class TimeService {
    constructor() {
        this.tick = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._timerSubscription = null;
    }
    startGame() {
        if (this._timerSubscription != null) {
            this._timerSubscription.unsubscribe();
        }
        this._timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(tickRate).subscribe(x => this.tick.next(tickRate / 1000));
    }
}
TimeService.ɵfac = function TimeService_Factory(t) { return new (t || TimeService)(); };
TimeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TimeService, factory: TimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5476:
/*!**********************************************!*\
  !*** ./src/app/staticData/dieDefinitions.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DieDef": function() { return /* binding */ DieDef; },
/* harmony export */   "DIE_LIBRARY": function() { return /* binding */ DIE_LIBRARY; }
/* harmony export */ });
class DieDef {
    constructor(count, faces, cost) {
        this.count = count;
        this.faces = faces;
        this.cost = cost;
    }
    roll() {
        let total = 0;
        for (let i = 0; i < this.count; i++) {
            total += Math.floor(Math.random() * this.faces) + 1;
        }
        return total;
    }
}
const DIE_LIBRARY = [
    new DieDef(1, 4, 1),
    new DieDef(1, 6, 1),
    new DieDef(1, 8, 5),
    new DieDef(1, 10, 8),
    new DieDef(2, 6, 14),
    new DieDef(2, 8, 20),
    new DieDef(3, 6, 30),
    new DieDef(3, 8, 45),
    new DieDef(4, 6, 70),
    new DieDef(4, 8, 100),
    new DieDef(6, 6, 150)
];


/***/ }),

/***/ 3973:
/*!****************************************************!*\
  !*** ./src/app/staticData/encounterDefinitions.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncounterSkillDef": function() { return /* binding */ EncounterSkillDef; },
/* harmony export */   "EncounterDef": function() { return /* binding */ EncounterDef; },
/* harmony export */   "CombatEncounterDef": function() { return /* binding */ CombatEncounterDef; },
/* harmony export */   "ENCOUNTER_LIBRARY": function() { return /* binding */ ENCOUNTER_LIBRARY; }
/* harmony export */ });
class EncounterSkillDef {
    constructor(skill, strength = 1) {
        this.skill = skill;
        this.strength = strength;
    }
}
class EncounterDef {
    constructor(name) {
        this.progressNeeded = 1; // Multiplied by 100
        this.progressDegenPct = 7;
        this.staminaDrain = 1;
        this.xpReward = 100;
        this.itemReward = null;
        this.skills = [];
        this.name = name;
    }
    getSkill(skill) {
        const s = this.skills.find(x => x.skill == skill);
        if (s == null) {
            return 0;
        }
        return s.strength;
    }
    setDifficulty(num) {
        this.progressNeeded = num;
        this.staminaDrain = num;
        return this;
    }
    xp(num) {
        this.xpReward = num;
        return this;
    }
    item(item) {
        this.itemReward = item;
        return this;
    }
    addSkill(skill, strength = 1) {
        let def = this.skills.find(x => x.skill == skill);
        if (def == null) {
            def = new EncounterSkillDef(skill);
            this.skills.push(def);
        }
        def.strength = strength;
        return this;
    }
}
class CombatEncounterDef extends EncounterDef {
    constructor(name) {
        super(name);
        this.initCombatSkills();
    }
    initCombatSkills() {
        this.skills.push(new EncounterSkillDef("melee"));
        this.skills.push(new EncounterSkillDef("ranged"));
        this.skills.push(new EncounterSkillDef("magic"));
    }
    resist(skill) {
        this.addSkill(skill, 0.5);
        return this;
    }
    weak(skill) {
        this.addSkill(skill, 2);
        return this;
    }
}
const ENCOUNTER_LIBRARY = [
    new CombatEncounterDef("rat")
        .xp(10).item("shortbow"),
    new CombatEncounterDef("slime mold").resist("ranged")
        .xp(5),
    new CombatEncounterDef("brutal rat").setDifficulty(1.5)
        .xp(15).item("knife"),
    new CombatEncounterDef("wolf").setDifficulty(1.8),
    new CombatEncounterDef("felsprite").setDifficulty(1.4)
        .resist("melee").resist("ranged"),
    new CombatEncounterDef("dire rat").setDifficulty(1.7),
    new CombatEncounterDef("goblin scout").setDifficulty(1.75),
    new CombatEncounterDef("goblin guard").setDifficulty(2.2),
    new CombatEncounterDef("goblin sage").setDifficulty(2.1)
        .resist("magic"),
    new CombatEncounterDef("hobgoblin overseer").setDifficulty(2.7)
        .resist("ranged"),
    new CombatEncounterDef("goblin shaman").setDifficulty(2.5)
        .resist("magic"),
    new CombatEncounterDef("hobgoblin graverobber").setDifficulty(3)
        .resist("ranged"),
    new CombatEncounterDef("corpse wight").setDifficulty(2.9)
        .resist("melee").resist("ranged"),
    new CombatEncounterDef("tomb lord").setDifficulty(3.5)
        .item("staff of ancients")
];


/***/ }),

/***/ 2333:
/*!***********************************************!*\
  !*** ./src/app/staticData/itemDefinitions.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDef": function() { return /* binding */ ItemDef; },
/* harmony export */   "ITEM_LIBRARY": function() { return /* binding */ ITEM_LIBRARY; }
/* harmony export */ });
class ItemDef {
    constructor(name) {
        this.skill = null;
        this.strength = 0;
        this.requiredStat = null;
        this.requiredStatAmount = 0;
        this.gold = 1;
        this.name = name;
    }
    setSkill(skill, strength) {
        this.skill = skill;
        this.strength = strength;
        return this;
    }
    setReq(stat, amount) {
        this.requiredStat = stat;
        this.requiredStatAmount = amount;
        return this;
    }
    setValue(gold) {
        this.gold = gold;
    }
}
const ITEM_LIBRARY = [
    new ItemDef("knife").setSkill("melee", 2)
        .setReq("body", 2),
    new ItemDef("shortbow").setSkill("ranged", 7)
        .setReq("body", 2),
    new ItemDef("longbow").setSkill("ranged", 14)
        .setReq("body", 5),
    new ItemDef("staff of ancients").setSkill("magic", 25)
        .setReq("mind", 15)
];


/***/ }),

/***/ 1294:
/*!************************************************!*\
  !*** ./src/app/staticData/skillDefinitions.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillDef": function() { return /* binding */ SkillDef; },
/* harmony export */   "SKILL_LIBRARY": function() { return /* binding */ SKILL_LIBRARY; }
/* harmony export */ });
class SkillDef {
    constructor(name) {
        this.stat = null;
        this.cost = 1; // Multiplier
        this.name = name;
    }
    setStat(stat) {
        this.stat = stat;
        return this;
    }
    setCost(cost) {
        this.cost = cost;
        return this;
    }
}
const SKILL_LIBRARY = [
    new SkillDef("melee").setStat("body").setCost(1),
    new SkillDef("ranged").setStat("agility").setCost(1),
    new SkillDef("magic").setStat("mind").setCost(1),
];


/***/ }),

/***/ 6193:
/*!**************************************************!*\
  !*** ./src/app/staticData/ventureDefinitions.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentureDef": function() { return /* binding */ VentureDef; },
/* harmony export */   "VENTURE_LIBRARY": function() { return /* binding */ VENTURE_LIBRARY; }
/* harmony export */ });
class VentureDef {
    constructor(name) {
        this.encounters = [];
        this.name = name;
    }
    getRandomEncounter() {
        const random = Math.floor(Math.random() * this.encounters.length);
        return this.encounters[random];
    }
    addEncounter(name) {
        this.encounters.push(name);
        return this;
    }
    addPrereq(name, rank) {
        this.prereqName = name;
        this.prereqRank = rank;
        return this;
    }
}
const VENTURE_LIBRARY = [
    new VentureDef("The Innkeeper's Basement")
        .addEncounter("rat")
        .addEncounter("slime mold")
        .addEncounter("brutal rat"),
    new VentureDef("The Thicket")
        .addPrereq("The Innkeeper's Basement", 5)
        .addEncounter("brutal rat")
        .addEncounter("wolf")
        .addEncounter("felsprite")
        .addEncounter("dire rat")
        .addEncounter("goblin scout"),
    new VentureDef("The Goblin Caves")
        .addPrereq("The Thicket", 5)
        .addEncounter("dire rat")
        .addEncounter("goblin scout")
        .addEncounter("goblin guard")
        .addEncounter("goblin sage")
        .addEncounter("hobgoblin overseer"),
    new VentureDef("The Lost Tomb")
        .addPrereq("The Lost Tomb", 5)
        .addEncounter("goblin sage")
        .addEncounter("goblin shaman")
        .addEncounter("hobgoblin graverobber")
        .addEncounter("corpse wight")
        .addEncounter("tomb lord")
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map