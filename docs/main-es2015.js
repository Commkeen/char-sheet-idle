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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/time.service */ 9260);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _components_status_panel_status_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/status-panel/status-panel.component */ 8625);
/* harmony import */ var _components_nav_panel_nav_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-panel/nav-panel.component */ 3008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skill-panel/skill-panel.component */ 2087);
/* harmony import */ var _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/character-panel/character-panel.component */ 280);
/* harmony import */ var _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message-panel/message-panel.component */ 4902);
/* harmony import */ var _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/location-panel/location-panel.component */ 8727);
/* harmony import */ var _components_character_sheet_panel_character_sheet_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/character-sheet-panel/character-sheet-panel.component */ 8095);











function AppComponent_app_location_panel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-location-panel");
} }
function AppComponent_app_character_sheet_panel_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-character-sheet-panel");
} }
class AppComponent {
    constructor(_timeService) {
        this._timeService = _timeService;
        this.title = 'char-sheet-idle';
        this.showLocation = true;
        this.showCharacterSheet = false;
    }
    ngOnInit() {
        this._timeService.startGame();
    }
    // ======Nav handlers======
    onSelectCharSheet() {
        this.showCharacterSheet = true;
        this.showLocation = false;
    }
    onSelectRegion() {
        this.showLocation = true;
        this.showCharacterSheet = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_0__.TimeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 2, consts: [["fxLayout", "column", 1, "layout-container"], ["fxFlex", "none", 1, "layout-header"], ["fxFlex", "none", 1, "layout-top"], ["fxFlex", "80", 1, "layout-center"], ["fxFlex", "none", 1, "layout-center-left"], [3, "selectCharSheet", "selectRegion"], ["fxFlex", "80", 1, "layout-center-center"], [4, "ngIf"], ["fxFlex", "20", 1, "layout-center-right"], ["fxFlex", "20", "fxLayout", "row", 1, "layout-bottom"], ["fxFlex", "60", 1, "layout-left-bottom"], ["fxFlex", "40", 1, "layout-right-bottom"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Character Sheet Idle 0.1 --- Work in progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-status-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-nav-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectCharSheet", function AppComponent_Template_app_nav_panel_selectCharSheet_7_listener() { return ctx.onSelectCharSheet(); })("selectRegion", function AppComponent_Template_app_nav_panel_selectRegion_7_listener() { return ctx.onSelectRegion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AppComponent_app_location_panel_9_Template, 1, 0, "app-location-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AppComponent_app_character_sheet_panel_10_Template, 1, 0, "app-character-sheet-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-skill-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-character-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-message-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showCharacterSheet);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _components_status_panel_status_panel_component__WEBPACK_IMPORTED_MODULE_1__.StatusPanelComponent, _components_nav_panel_nav_panel_component__WEBPACK_IMPORTED_MODULE_2__.NavPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_3__.SkillPanelComponent, _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_4__.CharacterPanelComponent, _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_5__.MessagePanelComponent, _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_6__.LocationPanelComponent, _components_character_sheet_panel_character_sheet_panel_component__WEBPACK_IMPORTED_MODULE_7__.CharacterSheetPanelComponent], styles: [".layout-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.layout-header[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  border-bottom: 1px solid darkgray;\n  font-size: 9pt;\n  font-style: italic;\n}\n\n.layout-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-center[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-left-bottom[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQU1BO0VBQ0UsZ0NBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sYXlvdXQtaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgZm9udC1zaXplOiA5cHQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubGF5b3V0LXRvcHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuXHJcbi5sYXlvdXQtY2VudGVye1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxufVxyXG5cclxuLmxheW91dC1ib3R0b217XHJcblxyXG59XHJcblxyXG4ubGF5b3V0LWxlZnQtYm90dG9te1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcblxyXG4ubGF5b3V0LXJpZ2h0LWJvdHRvbXtcclxuXHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/location-panel/location-panel.component */ 8727);
/* harmony import */ var _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/character-panel/character-panel.component */ 280);
/* harmony import */ var _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/message-panel/message-panel.component */ 4902);
/* harmony import */ var _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/game-button/game-button.component */ 8473);
/* harmony import */ var _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/progress-bar/progress-bar.component */ 3358);
/* harmony import */ var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/display-number.pipe */ 9191);
/* harmony import */ var _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/skill-panel/skill-panel.component */ 2087);
/* harmony import */ var _components_status_panel_status_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/status-panel/status-panel.component */ 8625);
/* harmony import */ var _components_nav_panel_nav_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-panel/nav-panel.component */ 3008);
/* harmony import */ var _components_character_sheet_panel_character_sheet_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/character-sheet-panel/character-sheet-panel.component */ 8095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__.LocationPanelComponent,
        _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__.CharacterPanelComponent,
        _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__.MessagePanelComponent,
        _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_4__.GameButtonComponent,
        _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent,
        _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_6__.DisplayNumberPipe,
        _components_skill_panel_skill_panel_component__WEBPACK_IMPORTED_MODULE_7__.SkillPanelComponent,
        _components_status_panel_status_panel_component__WEBPACK_IMPORTED_MODULE_8__.StatusPanelComponent,
        _components_nav_panel_nav_panel_component__WEBPACK_IMPORTED_MODULE_9__.NavPanelComponent,
        _components_character_sheet_panel_character_sheet_panel_component__WEBPACK_IMPORTED_MODULE_10__.CharacterSheetPanelComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var src_app_services_character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/character.service */ 6754);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/game-button/game-button.component */ 8473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);
/* harmony import */ var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/display-number.pipe */ 9191);








function CharacterPanelComponent_span_4_game_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CharacterPanelComponent_span_4_game_button_6_Template_game_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r4.upgradeDie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Upgrade Die: ", ctx_r2.getNextDieCost(), " AP ");
} }
function CharacterPanelComponent_span_4_game_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CharacterPanelComponent_span_4_game_button_8_Template_game_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.unlockStat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Unlock ", ctx_r3.getNextStatUnlockName(), ": ", ctx_r3.getNextStatUnlockCost(), " AP ");
} }
function CharacterPanelComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CharacterPanelComponent_span_4_game_button_6_Template, 2, 1, "game-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CharacterPanelComponent_span_4_game_button_8_Template, 2, 2, "game-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Current die: ", ctx_r0.dieCount, "d", ctx_r0.dieFaces, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("AP: ", ctx_r0.ap, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getNextDieCost() != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getNextStatUnlockName() != null);
} }
function CharacterPanelComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", stat_r9.key, ": ", stat_r9.value, " ");
} }
function CharacterPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "displayNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CharacterPanelComponent_div_5_Template_game_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.rest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Resting at the inn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CharacterPanelComponent_div_5_div_22_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Stamina: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 11, ctx_r1.stamina), "/", ctx_r1.maxStamina, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.stamina)("max", ctx_r1.maxStamina);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Level ", ctx_r1.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("XP: ", ctx_r1.xp, "/", ctx_r1.xpMax, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.xp)("max", ctx_r1.xpMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 13, ctx_r1.stats));
} }
class CharacterPanelComponent {
    constructor(_gameService, _characterService) {
        this._gameService = _gameService;
        this._characterService = _characterService;
    }
    ngOnInit() {
    }
    getCharacter() {
        return this._characterService.character;
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
        return this._characterService.getLevelCost(this.level + 1);
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
        this._characterService.rollNewCharacter();
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
CharacterPanelComponent.ɵfac = function CharacterPanelComponent_Factory(t) { return new (t || CharacterPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_character_service__WEBPACK_IMPORTED_MODULE_1__.CharacterService)); };
CharacterPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CharacterPanelComponent, selectors: [["app-character-panel"]], decls: 6, vars: 2, consts: [["fxLayout", "row", 1, "game-section"], ["fxLayout", "column", 1, "reroll-panel"], [3, "click"], [4, "ngIf"], ["fxLayout", "row", "class", "character-sheet", 4, "ngIf"], [3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "character-sheet"], ["fxLayout", "column", 1, "character-sheet-left"], ["fxLayout", "row"], ["fxFlex", "80"], [3, "value", "max"], ["fxLayout", "column", 1, "character-sheet-right"], [4, "ngFor", "ngForOf"]], template: function CharacterPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "game-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CharacterPanelComponent_Template_game_button_click_2_listener() { return ctx.rollNewCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Roll New Character");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CharacterPanelComponent_span_4_Template, 9, 5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CharacterPanelComponent_div_5_Template, 24, 15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_2__.GameButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_4__.DisplayNumberPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe], styles: [".reroll-panel[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.character-sheet-left[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 30px;\n}\n\n.character-sheet-right[_ngcontent-%COMP%] {\n  margin: 1.5em;\n  padding-left: 15px;\n  padding-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJjaGFyYWN0ZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVyb2xsLXBhbmVse1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLXNoZWV0LWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItc2hlZXQtcmlnaHR7XHJcbiAgbWFyZ2luOiAxLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8095:
/*!*************************************************************************************!*\
  !*** ./src/app/components/character-sheet-panel/character-sheet-panel.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterSheetPanelComponent": function() { return /* binding */ CharacterSheetPanelComponent; }
/* harmony export */ });
/* harmony import */ var src_app_staticData_perkDefinitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/staticData/perkDefinitions */ 6408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var src_app_services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/character.service */ 6754);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/game-button/game-button.component */ 8473);







function CharacterSheetPanelComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", stat_r4.key, ": ", stat_r4.value, " ");
} }
function CharacterSheetPanelComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perk_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", perk_r5.name, " ");
} }
function CharacterSheetPanelComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "game-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterSheetPanelComponent_div_0_div_15_Template_game_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const perk_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.selectPerk(perk_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perk_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", perk_r6.name, " (", ctx_r3.perkCost(perk_r6), " AP)");
} }
function CharacterSheetPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Bob the Adventurer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CharacterSheetPanelComponent_div_0_div_5_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Active Perks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CharacterSheetPanelComponent_div_0_div_11_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Perk Points: 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CharacterSheetPanelComponent_div_0_div_15_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, ctx_r0.stats));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.activePerks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.availablePerks);
} }
class CharacterSheetPanelComponent {
    constructor(_gameService, _characterService) {
        this._gameService = _gameService;
        this._characterService = _characterService;
    }
    ngOnInit() {
    }
    getCharacter() {
        return this._characterService.character;
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
    get stats() {
        return this.getCharacter().stats;
    }
    get activePerks() {
        return this.getCharacter().perks;
    }
    get availablePerks() {
        return this._characterService.availablePerks;
    }
    perkCost(perk) {
        return (0,src_app_staticData_perkDefinitions__WEBPACK_IMPORTED_MODULE_0__.getPerkDef)(perk.name).cost;
    }
    // ======Click Handlers======
    selectPerk(perk) {
        this._characterService.buyPerk(perk.name);
    }
}
CharacterSheetPanelComponent.ɵfac = function CharacterSheetPanelComponent_Factory(t) { return new (t || CharacterSheetPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_character_service__WEBPACK_IMPORTED_MODULE_2__.CharacterService)); };
CharacterSheetPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CharacterSheetPanelComponent, selectors: [["app-character-sheet-panel"]], decls: 1, vars: 1, consts: [["fxLayout", "row", "class", "game-section", 4, "ngIf"], ["fxLayout", "row", 1, "game-section"], ["fxLayout", "column", "fxFlex", "50", 1, "character-sheet-left"], [1, "stat-list"], ["class", "stat", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "50", 1, "character-sheet-right"], [1, "active-perk-list"], ["class", "active-perk", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 1, "available-perk-list"], ["fxFlex", "none", "class", "available-perk", 4, "ngFor", "ngForOf"], [1, "stat"], [1, "active-perk"], ["fxFlex", "none", 1, "available-perk"], [3, "click"]], template: function CharacterSheetPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CharacterSheetPanelComponent_div_0_Template, 16, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_3__.GameButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe], styles: [".game-section[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1zaGVldC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJjaGFyYWN0ZXItc2hlZXQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1zZWN0aW9ue1xyXG4gIG1hcmdpbjogMWVtO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var src_app_services_character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/character.service */ 6754);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);
/* harmony import */ var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/game-button/game-button.component */ 8473);







function LocationPanelComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "game-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LocationPanelComponent_div_0_div_15_Template_game_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const venture_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.selectVenture(venture_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venture_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](venture_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](venture_r2.completions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](venture_r2.encounterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", venture_r2.progress)("max", venture_r2.progressMax);
} }
function LocationPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Scouting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "progress-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Renown");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "progress-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Infamy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "progress-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LocationPanelComponent_div_0_div_15_Template, 11, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getVentures());
} }
class LocationPanelComponent {
    constructor(_gameService, _characterService) {
        this._gameService = _gameService;
        this._characterService = _characterService;
        this.localVentures = [];
    }
    ngOnInit() {
    }
    getCharacter() {
        return this._characterService.character;
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
LocationPanelComponent.ɵfac = function LocationPanelComponent_Factory(t) { return new (t || LocationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_character_service__WEBPACK_IMPORTED_MODULE_1__.CharacterService)); };
LocationPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LocationPanelComponent, selectors: [["app-location-panel"]], decls: 1, vars: 1, consts: [["class", "game-section", 4, "ngIf"], [1, "game-section"], ["fxLayout", "row", 1, "region-status"], ["fxFlex", "34", "fxLayout", "column", 1, "region-status-item"], ["fxFlex", "33", "fxLayout", "column", 1, "region-status-item"], [1, "local-ventures"], ["class", "venture", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "venture"], ["fxFlex", "30"], ["fxFlex", "30", "fxLayout", "row", 1, "venture-left"], ["fxFlex", "60", 3, "click"], ["fxFlex", "40"], ["fxFlex", "70", "fxLayout", "column", 1, "venture-right"], [3, "value", "max"]], template: function LocationPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LocationPanelComponent_div_0_Template, 16, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_3__.GameButtonComponent], styles: [".region-status-item[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  font-weight: bold;\n}\n\n.local-ventures[_ngcontent-%COMP%] {\n  margin: 2em;\n  max-width: 60%;\n}\n\n.venture[_ngcontent-%COMP%] {\n  margin: 1.8em;\n}\n\n.venture-left[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoibG9jYXRpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaW9uLXN0YXR1cy1pdGVte1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9jYWwtdmVudHVyZXN7XHJcbiAgbWFyZ2luOiAyLjBlbTtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnZlbnR1cmV7XHJcbiAgbWFyZ2luOiAxLjhlbTtcclxufVxyXG5cclxuLnZlbnR1cmUtbGVmdHtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnZlbnR1cmUtcmlnaHR7XHJcblxyXG59XHJcbiJdfQ== */"] });


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
        this.messageBufferSize = 8;
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

/***/ 3008:
/*!*************************************************************!*\
  !*** ./src/app/components/nav-panel/nav-panel.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavPanelComponent": function() { return /* binding */ NavPanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_staticData_regionDefinitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/staticData/regionDefinitions */ 7871);
/* harmony import */ var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/game-button/game-button.component */ 8473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function NavPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "game-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavPanelComponent_div_5_Template_game_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const region_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onSelectRegion(region_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](region_r1);
} }
class NavPanelComponent {
    constructor() {
        this.selectRegion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.selectCharSheet = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    get regions() {
        return src_app_staticData_regionDefinitions__WEBPACK_IMPORTED_MODULE_0__.REGION_LIBRARY.map(x => x.name);
    }
    // ======Click Handlers======
    onSelectCharSheet() {
        this.selectCharSheet.emit();
    }
    onSelectRegion(region) {
        this.selectRegion.emit(region);
    }
}
NavPanelComponent.ɵfac = function NavPanelComponent_Factory(t) { return new (t || NavPanelComponent)(); };
NavPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavPanelComponent, selectors: [["app-nav-panel"]], outputs: { selectRegion: "selectRegion", selectCharSheet: "selectCharSheet" }, decls: 6, vars: 1, consts: [[1, "game-section"], [1, "nav-top"], [3, "click"], [1, "nav-regions"], ["class", "region", 4, "ngFor", "ngForOf"], [1, "region"]], template: function NavPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "game-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavPanelComponent_Template_game_button_click_2_listener() { return ctx.onSelectCharSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Character Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavPanelComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regions);
    } }, directives: [_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__.GameButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".game-section[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n}\n\n.nav-top[_ngcontent-%COMP%] {\n  margin: 0.3em;\n  padding: 0.3em;\n  border-bottom: 1px solid darkgray;\n}\n\n.region[_ngcontent-%COMP%] {\n  margin: 0.3em;\n  padding: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6Im5hdi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLXNlY3Rpb24ge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcblxyXG4ubmF2LXRvcCB7XHJcbiAgbWFyZ2luOiAwLjNlbTtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuXHJcbi5yZWdpb24ge1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var src_app_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/staticData/skillDefinitions */ 1294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var src_app_services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/character.service */ 6754);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);







function SkillPanelComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", skill_r4.total(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r4.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", skill_r4.progress)("max", ctx_r1.progressMax(skill_r4));
} }
function SkillPanelComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", skill_r5.total(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r5.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", skill_r5.progress)("max", ctx_r2.progressMax(skill_r5));
} }
function SkillPanelComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", skill_r6.total(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r6.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", skill_r6.progress)("max", ctx_r3.progressMax(skill_r6));
} }
function SkillPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SkillPanelComponent_div_0_div_3_Template, 10, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SkillPanelComponent_div_0_div_6_Template, 10, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SkillPanelComponent_div_0_div_9_Template, 10, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getCombatSkills());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getDefenseSkills());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getOtherSkills());
} }
class SkillPanelComponent {
    constructor(_gameService, _characterService) {
        this._gameService = _gameService;
        this._characterService = _characterService;
    }
    ngOnInit() {
    }
    getCombatSkills() {
        return this.getSkills().filter(x => (0,src_app_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_0__.getSkillDef)(x.name).group == "combat");
    }
    getDefenseSkills() {
        return this.getSkills().filter(x => (0,src_app_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_0__.getSkillDef)(x.name).group == "defense");
    }
    getOtherSkills() {
        return this.getSkills().filter(x => (0,src_app_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_0__.getSkillDef)(x.name).group == "other");
    }
    getSkills() {
        if (this._characterService.character == null) {
            return null;
        }
        return this._characterService.character.skills;
    }
    // ======Display Getters======
    progressMax(skill) {
        return this._characterService.getSkillRankCost(skill.name, skill.rank + 1);
    }
}
SkillPanelComponent.ɵfac = function SkillPanelComponent_Factory(t) { return new (t || SkillPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_character_service__WEBPACK_IMPORTED_MODULE_2__.CharacterService)); };
SkillPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SkillPanelComponent, selectors: [["app-skill-panel"]], decls: 1, vars: 1, consts: [["class", "game-section", 4, "ngIf"], [1, "game-section"], [1, "combat-skills"], ["class", "skill", "fxLayout", "row", 4, "ngFor", "ngForOf"], [1, "defense-skills"], [1, "other-skills"], ["fxLayout", "row", 1, "skill"], ["fxFlex", "10", 1, "skill-total"], ["fxFlex", "90", "fxLayout", "column"], ["fxFlex", "90", "fxLayout", "row", 1, "skill-text"], ["fxFlex", "90"], ["fxFlex", "10"], ["fxFlex", "10", 3, "value", "max"]], template: function SkillPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SkillPanelComponent_div_0_Template, 10, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getSkills() != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent], styles: [".game-section[_ngcontent-%COMP%] {\n  margin: 0.2em;\n  padding: 0.4em;\n}\n\n.skill[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n\n.skill-total[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15pt;\n}\n\n.skill-text[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJza2lsbC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLXNlY3Rpb257XHJcbiAgbWFyZ2luOiAwLjJlbTtcclxuICBwYWRkaW5nOiAwLjRlbTtcclxufVxyXG5cclxuLnNraWxsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLnNraWxsLXRvdGFsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5za2lsbC10ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8625:
/*!*******************************************************************!*\
  !*** ./src/app/components/status-panel/status-panel.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusPanelComponent": function() { return /* binding */ StatusPanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var src_app_services_character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/character.service */ 6754);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ 3358);
/* harmony import */ var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/display-number.pipe */ 9191);







function StatusPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "displayNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "displayNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Gold: 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Level ", ctx_r0.level, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.xp)("max", ctx_r0.xpMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Stamina: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 11, ctx_r0.stamina), "/", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 13, ctx_r0.maxStamina), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.stamina)("max", ctx_r0.maxStamina);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.ventureName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.ventureProgress)("max", ctx_r0.ventureProgressMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("AP: ", ctx_r0.ap, "");
} }
class StatusPanelComponent {
    constructor(_gameService, _characterService) {
        this._gameService = _gameService;
        this._characterService = _characterService;
    }
    ngOnInit() {
    }
    getCharacter() {
        return this._characterService.character;
    }
    getTargetVenture() {
        const tgt = this._gameService.targetVenture;
        if (tgt == null) {
            return null;
        }
        return this._gameService.ventures.find(x => x.name == tgt);
    }
    // ======Display Getters======
    get level() {
        return this.getCharacter().level;
    }
    get xp() {
        return this.getCharacter().xp;
    }
    get xpMax() {
        return this._characterService.getLevelCost(this.level + 1);
    }
    get stamina() {
        return this.getCharacter().stamina;
    }
    get maxStamina() {
        return this.getCharacter().maxStamina;
    }
    get ap() {
        return this._gameService.ap;
    }
    get ventureName() {
        const venture = this.getTargetVenture();
        if (venture == null) {
            return "";
        }
        let result = venture.name;
        if (venture.encounterName != null) {
            result += ` - ${venture.encounterName}`;
        }
        return result;
    }
    get ventureProgress() {
        const venture = this.getTargetVenture();
        if (venture == null) {
            return 0;
        }
        return venture.progress;
    }
    get ventureProgressMax() {
        const venture = this.getTargetVenture();
        if (venture == null) {
            return 100;
        }
        return venture.progressMax;
    }
}
StatusPanelComponent.ɵfac = function StatusPanelComponent_Factory(t) { return new (t || StatusPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_character_service__WEBPACK_IMPORTED_MODULE_1__.CharacterService)); };
StatusPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StatusPanelComponent, selectors: [["app-status-panel"]], decls: 1, vars: 1, consts: [["fxLayout", "row", "class", "game-section", 4, "ngIf"], ["fxLayout", "row", 1, "game-section"], ["fxFlex", "30", 1, "status-section", "status-level"], [3, "value", "max"], ["fxFlex", "30", 1, "status-section", "status-stamina"], ["fxFlex", "30", 1, "status-section", "status-venture"], ["fxFlex", "10", 1, "status-section", "status-other"]], template: function StatusPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, StatusPanelComponent_div_0_Template, 17, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent], pipes: [_pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_3__.DisplayNumberPipe], styles: [".status-section[_ngcontent-%COMP%] {\n  margin-bottom: 0.3em;\n  margin-left: 0.3em;\n  margin-right: 0.3em;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoic3RhdHVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcclxuICBtYXJnaW4tbGVmdDogMC4zZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG4iXX0= */"] });


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
/* harmony export */   "Skill": function() { return /* binding */ Skill; },
/* harmony export */   "Perk": function() { return /* binding */ Perk; }
/* harmony export */ });
class Character {
    constructor() {
        this.stats = new Map();
        this.skills = [];
        this.perks = [];
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
    addPerk(name) {
        this.perks.push(new Perk(name));
    }
    hasPerk(name) {
        return this.perks.some(x => x.name == name);
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
class Perk {
    constructor(name) {
        this.name = name;
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

/***/ 6754:
/*!***********************************************!*\
  !*** ./src/app/services/character.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterService": function() { return /* binding */ CharacterService; }
/* harmony export */ });
/* harmony import */ var _models_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/character */ 4553);
/* harmony import */ var _staticData_itemDefinitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../staticData/itemDefinitions */ 2333);
/* harmony import */ var _staticData_perkDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staticData/perkDefinitions */ 6408);
/* harmony import */ var _staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticData/skillDefinitions */ 1294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ 2684);






class CharacterService {
    constructor(_messageService) {
        this._messageService = _messageService;
        this.character = null;
        this.availablePerks = [];
        this.items = [];
    }
    setGameService(svc) {
        this._gameService = svc;
    }
    rollNewCharacter() {
        const die = this._gameService.getCurrentDie();
        this.character = new _models_character__WEBPACK_IMPORTED_MODULE_0__.Character();
        this.character.name = "Bob the Adventurer";
        this.character.xp = 0;
        this.character.level = 1;
        this._gameService.unlockedStats.forEach(x => {
            this.character.setStat(x, die.roll());
        });
        this.initSkills();
        // TODO: Sell old items
        this.items = [];
        this.character.maxStamina = (this.character.stat("body") + 2) * 3;
        this.character.stamina = this.character.maxStamina;
        this._gameService.targetVenture = null;
        this._gameService.resting = false;
        this._messageService.addMessage("Welcome, " + this.character.name + "!");
        this._gameService.initVentures();
        this._gameService.initSim();
        this.updateSkills();
        this.updateAvailablePerks();
    }
    // ======Level======
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
        const die = this._gameService.getCurrentDie();
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
        this._gameService.ap += newAp;
        this._messageService.addMessage("You have gained " + newAp + " AP.");
        this.updateSkills();
    }
    getLevelCost(level) {
        return 150 + (((level * level) - 4) * 135);
    }
    // ======Skills======
    initSkills() {
        this.character.skills = [];
        _staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_3__.SKILL_LIBRARY.forEach(x => {
            this.character.skills.push(new _models_character__WEBPACK_IMPORTED_MODULE_0__.Skill(x.name));
        });
    }
    updateSkills() {
        this.character.skills.forEach(x => {
            x.itemBonus = 0;
        });
        this.items.forEach(x => {
            const def = (0,_staticData_itemDefinitions__WEBPACK_IMPORTED_MODULE_1__.getItemDef)(x);
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
            const skillDef = (0,_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_3__.getSkillDef)(s.skill);
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
    advanceSkill(skill, dT) {
        const s = this.character.skill(skill);
        const sDef = (0,_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_3__.getSkillDef)(skill);
        const relatedStat = this.character.stat(sDef.stat);
        s.progress += relatedStat * relatedStat * dT;
        const nextRankCost = this.getSkillRankCost(skill, s.rank + 1);
        if (s.progress >= nextRankCost) {
            s.progress -= nextRankCost;
            s.rank++;
            this._messageService.addMessage(`Your ${skill} skill has increased to ${s.rank}.`);
        }
    }
    getSkillRankCost(skill, rank) {
        const def = (0,_staticData_skillDefinitions__WEBPACK_IMPORTED_MODULE_3__.getSkillDef)(skill);
        return 25 + (((rank * rank) - 2) * 45 * def.cost);
    }
    // ======Perks======
    buyPerk(name) {
        this.character.addPerk(name);
        this.updateAvailablePerks();
    }
    updateAvailablePerks() {
        this.availablePerks = [];
        _staticData_perkDefinitions__WEBPACK_IMPORTED_MODULE_2__.PERK_LIBRARY.forEach(x => {
            if (this.character.hasPerk(x.name)) {
                return;
            }
            this.availablePerks.push(new _models_character__WEBPACK_IMPORTED_MODULE_0__.Perk(x.name));
        });
    }
    // ======Items======
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
}
CharacterService.ɵfac = function CharacterService_Factory(t) { return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
CharacterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CharacterService, factory: CharacterService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _models_venture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/venture */ 7949);
/* harmony import */ var _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../staticData/dieDefinitions */ 5476);
/* harmony import */ var _staticData_encounterDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staticData/encounterDefinitions */ 3973);
/* harmony import */ var _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticData/ventureDefinitions */ 6193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time.service */ 9260);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ 2684);
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character.service */ 6754);








class GameService {
    constructor(_timeService, _messageService, _characterService) {
        this._timeService = _timeService;
        this._messageService = _messageService;
        this._characterService = _characterService;
        this.ventures = [];
        this.ap = 0;
        this.dieRank = 0;
        this.unlockedStats = ["body"];
        this.resting = false;
        this._init = false;
        _characterService.setGameService(this);
    }
    initVentures() {
        this.ventures = [];
        _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_3__.VENTURE_LIBRARY.forEach(def => {
            const v = new _models_venture__WEBPACK_IMPORTED_MODULE_0__.Venture();
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
        const character = this._characterService.character;
        if (character == null) {
            return;
        }
        // Do Rest
        if (this.resting) {
            character.stamina += 5 * dT;
            if (character.stamina >= character.maxStamina) {
                character.stamina = character.maxStamina;
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
            const bestSkill = this._characterService.bestSkillForEncounter(encDef);
            if (bestSkill != null) {
                const encSkill = encDef.skills.find(x => x.skill == bestSkill);
                const charSkillStr = character.skill(bestSkill).total();
                venture.progress += 6 * encSkill.strength * charSkillStr * dT;
                this._characterService.advanceSkill(bestSkill, dT);
            }
            else {
                venture.progress += dT;
            }
            character.stamina -= dT * encDef.staminaDrain;
            if (character.stamina <= 0) {
                this.resting = true;
            }
            if (venture.progress > venture.progressMax) {
                venture.completions++;
                venture.progress = 0;
                this._messageService.addMessage("You slay the " + venture.encounterName + ".");
                let xpReward = 65 + (Math.pow(encDef.level, 1.5) * 15);
                this._characterService.gainXp(xpReward);
                if (encDef.itemReward != null) {
                    this._characterService.gainItem(encDef.itemReward);
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
    // ======Character Operations======
    rest() {
        this.resting = true;
    }
    //======Venture Operations======
    getVentureDef(name) {
        return _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_3__.VENTURE_LIBRARY.find(x => x.name == name);
    }
    getEncounterDef(name) {
        return _staticData_encounterDefinitions__WEBPACK_IMPORTED_MODULE_2__.ENCOUNTER_LIBRARY.find(x => x.name == name);
    }
    selectVenture(venture) {
        this.targetVenture = venture.name;
    }
    startEncounter(venture) {
        const def = this.getVentureDef(venture.name);
        const encounter = def.getRandomEncounter();
        const encDef = this.getEncounterDef(encounter);
        venture.encounterName = encounter;
        venture.progressMax = 15 * Math.pow(encDef.level, 2.2);
    }
    //======Die Operations======
    getCurrentDie() {
        return _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_1__.DIE_LIBRARY[this.dieRank];
    }
    getNextDie() {
        if (_staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_1__.DIE_LIBRARY.length <= this.dieRank + 1) {
            return null;
        }
        return _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_1__.DIE_LIBRARY[this.dieRank + 1];
    }
    upgradeDie() {
        if (_staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_1__.DIE_LIBRARY.length <= this.dieRank + 1) {
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
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_time_service__WEBPACK_IMPORTED_MODULE_4__.TimeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_character_service__WEBPACK_IMPORTED_MODULE_6__.CharacterService)); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


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
    constructor(name, level) {
        this.progressDegenPct = 7;
        this.staminaDrain = 1;
        this.itemReward = null;
        this.skills = [];
        this.name = name;
        this.level = level;
    }
    getSkill(skill) {
        const s = this.skills.find(x => x.skill == skill);
        if (s == null) {
            return 0;
        }
        return s.strength;
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
    constructor(name, level) {
        super(name, level);
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
    new CombatEncounterDef("rat", 1)
        .item("shortbow"),
    new CombatEncounterDef("slime mold", 1).resist("ranged"),
    new CombatEncounterDef("brutal rat", 2)
        .item("knife"),
    new CombatEncounterDef("wolf", 3),
    new CombatEncounterDef("felsprite", 2)
        .resist("melee").resist("ranged"),
    new CombatEncounterDef("dire rat", 3),
    new CombatEncounterDef("goblin scout", 5),
    new CombatEncounterDef("goblin guard", 7),
    new CombatEncounterDef("goblin sage", 8)
        .resist("magic"),
    new CombatEncounterDef("hobgoblin overseer", 10)
        .resist("ranged"),
    new CombatEncounterDef("goblin shaman", 9)
        .resist("magic"),
    new CombatEncounterDef("hobgoblin graverobber", 15)
        .resist("ranged"),
    new CombatEncounterDef("corpse wight", 18)
        .resist("melee").resist("ranged"),
    new CombatEncounterDef("tomb lord", 20)
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
/* harmony export */   "getItemDef": function() { return /* binding */ getItemDef; },
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
function getItemDef(name) {
    return ITEM_LIBRARY.find(x => x.name == name);
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

/***/ 6408:
/*!***********************************************!*\
  !*** ./src/app/staticData/perkDefinitions.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerkDef": function() { return /* binding */ PerkDef; },
/* harmony export */   "getPerkDef": function() { return /* binding */ getPerkDef; },
/* harmony export */   "PERK_LIBRARY": function() { return /* binding */ PERK_LIBRARY; }
/* harmony export */ });
class PerkDef {
    constructor(name) {
        this.cost = 1;
        this.creationOnly = false;
        this.requiredLevel = 1;
        this.requiredStat = null;
        this.requiredStatValue = 0;
        this.name = name;
    }
    setRequiredStat(stat, value) {
        this.requiredStat = stat;
        this.requiredStatValue = value;
        return this;
    }
    setLevel(level) {
        this.requiredLevel = level;
        return this;
    }
    setCreationOnly() {
        this.creationOnly = true;
        return this;
    }
}
function getPerkDef(name) {
    return PERK_LIBRARY.find(x => x.name == name);
}
const PERK_LIBRARY = [
    new PerkDef("Alchemy"),
    new PerkDef("Pathfinding"),
    new PerkDef("Feint"),
    new PerkDef("Divine Rites")
];


/***/ }),

/***/ 7871:
/*!*************************************************!*\
  !*** ./src/app/staticData/regionDefinitions.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionDef": function() { return /* binding */ RegionDef; },
/* harmony export */   "REGION_LIBRARY": function() { return /* binding */ REGION_LIBRARY; }
/* harmony export */ });
class RegionDef {
    constructor(name) {
        this.name = name;
    }
}
const REGION_LIBRARY = [
    new RegionDef("The Village"),
    new RegionDef("Lost Woods"),
    new RegionDef("City of Isling"),
    new RegionDef("Undermountain"),
    new RegionDef("Chaos Keep"),
    new RegionDef("Astral Reach"),
    new RegionDef("Dark Dimension")
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
/* harmony export */   "getSkillDef": function() { return /* binding */ getSkillDef; },
/* harmony export */   "SKILL_LIBRARY": function() { return /* binding */ SKILL_LIBRARY; }
/* harmony export */ });
class SkillDef {
    constructor(name) {
        this.stat = null;
        this.cost = 1; // Multiplier
        this.group = "other";
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
        return this;
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
function getSkillDef(name) {
    return SKILL_LIBRARY.find(x => x.name == name);
}
const SKILL_LIBRARY = [
    new SkillDef("melee").setStat("body").setGroup("combat").setCost(1),
    new SkillDef("ranged").setStat("agility").setGroup("combat").setCost(1),
    new SkillDef("magic").setStat("mind").setGroup("combat").setCost(1),
    new SkillDef("armor").setGroup("defense"),
    new SkillDef("dodge").setGroup("defense"),
    new SkillDef("clarity").setGroup("defense"),
    new SkillDef("conditioning"),
    new SkillDef("tactics"),
    new SkillDef("martial"),
    new SkillDef("negotiation"),
    new SkillDef("investigation"),
    new SkillDef("scout"),
    new SkillDef("concentration"),
    new SkillDef("ritual"),
    new SkillDef("deception"),
    new SkillDef("sneak"),
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