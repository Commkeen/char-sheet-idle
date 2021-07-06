(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkchar_sheet_idle"] = self["webpackChunkchar_sheet_idle"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_time_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/time.service */
      9260);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      5618);
      /* harmony import */


      var _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/location-panel/location-panel.component */
      8727);
      /* harmony import */


      var _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/character-panel/character-panel.component */
      280);
      /* harmony import */


      var _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/message-panel/message-panel.component */
      4902);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(_timeService) {
          _classCallCheck(this, _AppComponent);

          this._timeService = _timeService;
          this.title = 'char-sheet-idle';
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._timeService.startGame();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_0__.TimeService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 0,
        consts: [["fxLayout", "column", 1, "layout-container"], ["fxFlex", "4", 1, "layout-top"], ["fxFlex", "70", 1, "layout-center"], ["fxFlex", "26", "fxLayout", "row", 1, "layout-bottom"], ["fxFlex", "60", 1, "layout-left-bottom"], ["fxFlex", "40", 1, "layout-right-bottom"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Character Sheet Idle 0.1 --- Work in progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-location-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-character-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-message-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__.LocationPanelComponent, _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__.CharacterPanelComponent, _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__.MessagePanelComponent],
        styles: [".layout-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.layout-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-center[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-left-bottom[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQU1BO0VBQ0UsZ0NBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sYXlvdXQtdG9we1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxufVxyXG5cclxuLmxheW91dC1jZW50ZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcblxyXG4ubGF5b3V0LWJvdHRvbXtcclxuXHJcbn1cclxuXHJcbi5sYXlvdXQtbGVmdC1ib3R0b217XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuXHJcbi5sYXlvdXQtcmlnaHQtYm90dG9te1xyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      5618);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/location-panel/location-panel.component */
      8727);
      /* harmony import */


      var _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/character-panel/character-panel.component */
      280);
      /* harmony import */


      var _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/message-panel/message-panel.component */
      4902);
      /* harmony import */


      var _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/common/game-button/game-button.component */
      8473);
      /* harmony import */


      var _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/common/progress-bar/progress-bar.component */
      3358);
      /* harmony import */


      var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pipes/display-number.pipe */
      9191);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_1__.LocationPanelComponent, _components_character_panel_character_panel_component__WEBPACK_IMPORTED_MODULE_2__.CharacterPanelComponent, _components_message_panel_message_panel_component__WEBPACK_IMPORTED_MODULE_3__.MessagePanelComponent, _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_4__.GameButtonComponent, _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent, _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_6__.DisplayNumberPipe],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexModule]
        });
      })();
      /***/

    },

    /***/
    280:
    /*!*************************************************************************!*\
      !*** ./src/app/components/character-panel/character-panel.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharacterPanelComponent": function CharacterPanelComponent() {
          return (
            /* binding */
            _CharacterPanelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/game.service */
      1397);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      5618);
      /* harmony import */


      var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/game-button/game-button.component */
      8473);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/progress-bar/progress-bar.component */
      3358);
      /* harmony import */


      var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/display-number.pipe */
      9191);

      function CharacterPanelComponent_span_4_game_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "game-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_span_4_game_button_6_Template_game_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r3.upgradeDie();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Upgrade Die: ", ctx_r2.getNextDieCost(), " AP ");
        }
      }

      function CharacterPanelComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CharacterPanelComponent_span_4_game_button_6_Template, 2, 1, "game-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Current die: ", ctx_r0.dieCount, "d", ctx_r0.dieFaces, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("AP: ", ctx_r0.ap, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getNextDieCost() != null);
        }
      }

      function CharacterPanelComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_div_5_Template_game_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r5.rest();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Body: ", ctx_r1.body, "");
        }
      }

      var _CharacterPanelComponent = /*#__PURE__*/function () {
        function _CharacterPanelComponent(_gameService) {
          _classCallCheck(this, _CharacterPanelComponent);

          this._gameService = _gameService;
        }

        _createClass(_CharacterPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getCharacter",
          value: function getCharacter() {
            return this._gameService.character;
          }
        }, {
          key: "getAP",
          value: function getAP() {
            return this._gameService.ap;
          }
        }, {
          key: "getDie",
          value: function getDie() {
            return this._gameService.getCurrentDie();
          }
        }, {
          key: "getNextDieCost",
          value: function getNextDieCost() {
            var result = null;

            var nextDie = this._gameService.getNextDie();

            if (nextDie != null) {
              result = nextDie.cost;
            }

            return result;
          } // ======Display Getters======

        }, {
          key: "name",
          get: function get() {
            return this.getCharacter().name;
          }
        }, {
          key: "level",
          get: function get() {
            return this.getCharacter().level;
          }
        }, {
          key: "xp",
          get: function get() {
            return this.getCharacter().xp;
          }
        }, {
          key: "xpMax",
          get: function get() {
            return this._gameService.getLevelCost(this.level + 1);
          }
        }, {
          key: "stamina",
          get: function get() {
            return this.getCharacter().stamina;
          }
        }, {
          key: "maxStamina",
          get: function get() {
            return this.getCharacter().maxStamina;
          }
        }, {
          key: "body",
          get: function get() {
            return this.getCharacter().body;
          }
        }, {
          key: "ap",
          get: function get() {
            return this._gameService.ap;
          }
        }, {
          key: "dieCount",
          get: function get() {
            return this.getDie().count;
          }
        }, {
          key: "dieFaces",
          get: function get() {
            return this.getDie().faces;
          } // ======Click Handlers======

        }, {
          key: "rollNewCharacter",
          value: function rollNewCharacter() {
            this._gameService.rollNewCharacter();
          }
        }, {
          key: "upgradeDie",
          value: function upgradeDie() {
            this._gameService.upgradeDie();
          }
        }, {
          key: "rest",
          value: function rest() {
            this._gameService.rest();
          }
        }]);

        return _CharacterPanelComponent;
      }();

      _CharacterPanelComponent.ɵfac = function CharacterPanelComponent_Factory(t) {
        return new (t || _CharacterPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService));
      };

      _CharacterPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _CharacterPanelComponent,
        selectors: [["app-character-panel"]],
        decls: 6,
        vars: 2,
        consts: [["fxLayout", "row", 1, "game-section"], ["fxLayout", "column", 1, "reroll-panel"], [3, "click"], [4, "ngIf"], ["fxLayout", "row", "class", "character-sheet", 4, "ngIf"], [3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "character-sheet"], ["fxLayout", "column", 1, "character-sheet-left"], ["fxLayout", "row"], ["fxFlex", "80"], [3, "value", "max"], ["fxLayout", "column", 1, "character-sheet-right"]],
        template: function CharacterPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "game-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterPanelComponent_Template_game_button_click_2_listener() {
              return ctx.rollNewCharacter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Roll New Character");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CharacterPanelComponent_span_4_Template, 7, 4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CharacterPanelComponent_div_5_Template, 24, 13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCharacter() != null);
          }
        },
        directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__.GameButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent],
        pipes: [_pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_3__.DisplayNumberPipe],
        styles: [".reroll-panel[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.character-sheet-left[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 30px;\n}\n\n.character-sheet-right[_ngcontent-%COMP%] {\n  margin: 1.5em;\n  padding-left: 15px;\n  padding-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJjaGFyYWN0ZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVyb2xsLXBhbmVse1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLXNoZWV0LWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItc2hlZXQtcmlnaHR7XHJcbiAgbWFyZ2luOiAxLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    8473:
    /*!************************************************************************!*\
      !*** ./src/app/components/common/game-button/game-button.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameButtonComponent": function GameButtonComponent() {
          return (
            /* binding */
            _GameButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _c0 = ["*"];

      var _GameButtonComponent = /*#__PURE__*/function () {
        function _GameButtonComponent() {
          _classCallCheck(this, _GameButtonComponent);

          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_GameButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick(event) {
            event.stopPropagation();
            this.click.emit();
          }
        }]);

        return _GameButtonComponent;
      }();

      _GameButtonComponent.ɵfac = function GameButtonComponent_Factory(t) {
        return new (t || _GameButtonComponent)();
      };

      _GameButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _GameButtonComponent,
        selectors: [["game-button"]],
        outputs: {
          click: "click"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [[1, "game-btn", 3, "click"], [1, "text"]],
        template: function GameButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameButtonComponent_Template_div_click_0_listener($event) {
              return ctx.onClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".game-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px solid darkslategray;\n  border-radius: 3px;\n  min-height: 1.4em;\n  font-size: 9pt;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0.3em;\n  text-align: center;\n  pointer-events: none;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImdhbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNGVtO1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwLjNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    3358:
    /*!**************************************************************************!*\
      !*** ./src/app/components/common/progress-bar/progress-bar.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressBarComponent": function ProgressBarComponent() {
          return (
            /* binding */
            _ProgressBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProgressBarComponent = /*#__PURE__*/function () {
        function _ProgressBarComponent() {
          _classCallCheck(this, _ProgressBarComponent);

          this.value = 15;
          this.max = 100;
        }

        _createClass(_ProgressBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getWidth",
          value: function getWidth() {
            var result = this.value / this.max;
            result = result * 100;
            result = Math.min(result, 100);
            result = Math.max(0, result);
            return result;
          }
        }]);

        return _ProgressBarComponent;
      }();

      _ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
        return new (t || _ProgressBarComponent)();
      };

      _ProgressBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProgressBarComponent,
        selectors: [["progress-bar"]],
        inputs: {
          value: "value",
          max: "max"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "bar-outer"], [1, "bar-inner"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getWidth() + "%");
          }
        },
        styles: [".bar-outer[_ngcontent-%COMP%] {\n  background-color: #c9d7eb;\n  border-radius: 3px;\n  padding: 0px;\n}\n\n.bar-inner[_ngcontent-%COMP%] {\n  background-color: blue;\n  height: 0.3em;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItb3V0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIxNSwgMjM1KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYmFyLWlubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGhlaWdodDogMC4zZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    8727:
    /*!***********************************************************************!*\
      !*** ./src/app/components/location-panel/location-panel.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocationPanelComponent": function LocationPanelComponent() {
          return (
            /* binding */
            _LocationPanelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/game.service */
      1397);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      5618);
      /* harmony import */


      var _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/game-button/game-button.component */
      8473);
      /* harmony import */


      var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/progress-bar/progress-bar.component */
      3358);

      function LocationPanelComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "game-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LocationPanelComponent_div_2_Template_game_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var venture_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.selectVenture(venture_r1);
          });

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
        }

        if (rf & 2) {
          var venture_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venture_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venture_r1.completions);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venture_r1.encounterName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", venture_r1.progress)("max", venture_r1.progressMax);
        }
      }

      var _LocationPanelComponent = /*#__PURE__*/function () {
        function _LocationPanelComponent(_gameService) {
          _classCallCheck(this, _LocationPanelComponent);

          this._gameService = _gameService;
          this.localVentures = [];
        }

        _createClass(_LocationPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getVentures",
          value: function getVentures() {
            return this._gameService.ventures;
          } // ======Display Getters======
          // ======Click Handlers======

        }, {
          key: "selectVenture",
          value: function selectVenture(v) {
            this._gameService.selectVenture(v);
          }
        }]);

        return _LocationPanelComponent;
      }();

      _LocationPanelComponent.ɵfac = function LocationPanelComponent_Factory(t) {
        return new (t || _LocationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService));
      };

      _LocationPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _LocationPanelComponent,
        selectors: [["app-location-panel"]],
        decls: 3,
        vars: 1,
        consts: [[1, "game-section"], [1, "local-ventures"], ["class", "venture", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "venture"], ["fxFlex", "30"], ["fxFlex", "30", "fxLayout", "row", 1, "venture-left"], ["fxFlex", "60", 3, "click"], ["fxFlex", "40"], ["fxFlex", "70", "fxLayout", "column", 1, "venture-right"], [3, "value", "max"]],
        template: function LocationPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LocationPanelComponent_div_2_Template, 11, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getVentures());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_1__.GameButtonComponent, _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent],
        styles: [".local-ventures[_ngcontent-%COMP%] {\n  margin: 2em;\n  max-width: 60%;\n}\n\n.venture[_ngcontent-%COMP%] {\n  margin: 1.8em;\n}\n\n.venture-left[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImxvY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2FsLXZlbnR1cmVze1xyXG4gIG1hcmdpbjogMi4wZW07XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi52ZW50dXJle1xyXG4gIG1hcmdpbjogMS44ZW07XHJcbn1cclxuXHJcbi52ZW50dXJlLWxlZnR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi52ZW50dXJlLXJpZ2h0e1xyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    4902:
    /*!*********************************************************************!*\
      !*** ./src/app/components/message-panel/message-panel.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagePanelComponent": function MessagePanelComponent() {
          return (
            /* binding */
            _MessagePanelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/message.service */
      2684);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function MessagePanelComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r1, " ");
        }
      }

      var _MessagePanelComponent = /*#__PURE__*/function () {
        function _MessagePanelComponent(_messageService) {
          _classCallCheck(this, _MessagePanelComponent);

          this._messageService = _messageService;
          this.messageBuffer = [];
          this.messageBufferSize = 10;
        }

        _createClass(_MessagePanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._messageService.msgFeed.subscribe(function (x) {
              return _this.onMessage(x);
            });
          }
        }, {
          key: "onMessage",
          value: function onMessage(msg) {
            this.messageBuffer.push(msg);

            while (this.messageBuffer.length > this.messageBufferSize) {
              this.messageBuffer.splice(0, 1);
            }
          }
        }]);

        return _MessagePanelComponent;
      }();

      _MessagePanelComponent.ɵfac = function MessagePanelComponent_Factory(t) {
        return new (t || _MessagePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _MessagePanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MessagePanelComponent,
        selectors: [["app-message-panel"]],
        decls: 3,
        vars: 1,
        consts: [[1, "game-section"], [1, "messages"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"]],
        template: function MessagePanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MessagePanelComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messageBuffer);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    4553:
    /*!*************************************!*\
      !*** ./src/app/models/character.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Character": function Character() {
          return (
            /* binding */
            _Character
          );
        }
        /* harmony export */

      });

      var _Character = function _Character() {
        _classCallCheck(this, _Character);
      };
      /***/

    },

    /***/
    7949:
    /*!***********************************!*\
      !*** ./src/app/models/venture.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Venture": function Venture() {
          return (
            /* binding */
            _Venture
          );
        }
        /* harmony export */

      });

      var _Venture = function _Venture() {
        _classCallCheck(this, _Venture);

        this.encounterName = null;
        this.progress = 0;
        this.progressMax = 100;
        this.completions = 0;
      };
      /***/

    },

    /***/
    9191:
    /*!**********************************************!*\
      !*** ./src/app/pipes/display-number.pipe.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisplayNumberPipe": function DisplayNumberPipe() {
          return (
            /* binding */
            _DisplayNumberPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _DisplayNumberPipe = /*#__PURE__*/function () {
        function _DisplayNumberPipe() {
          _classCallCheck(this, _DisplayNumberPipe);
        }

        _createClass(_DisplayNumberPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var prefix = '';
            var suffix = '';

            if (value < 0) {
              prefix = '-';
            }

            value = Math.abs(value);

            if (value < 1000) {
              return prefix + this.getSuffixedValue(value, suffix);
            }

            var decimalPlaces = Math.floor(Math.log10(value));

            if (decimalPlaces < 6) {
              value = value / 1000;
              suffix = 'K';
            } else {
              value = value / 1000000;
              suffix = 'M';
            }

            return prefix + this.getSuffixedValue(value, suffix);
          }
        }, {
          key: "getSuffixedValue",
          value: function getSuffixedValue(value, suffix) {
            if (value - Math.floor(value) > 0.01) {
              return value.toFixed(2) + suffix;
            }

            return value.toFixed(0) + suffix;
          }
        }]);

        return _DisplayNumberPipe;
      }();

      _DisplayNumberPipe.ɵfac = function DisplayNumberPipe_Factory(t) {
        return new (t || _DisplayNumberPipe)();
      };

      _DisplayNumberPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "displayNumber",
        type: _DisplayNumberPipe,
        pure: true
      });
      /***/
    },

    /***/
    1397:
    /*!******************************************!*\
      !*** ./src/app/services/game.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameService": function GameService() {
          return (
            /* binding */
            _GameService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/character */
      4553);
      /* harmony import */


      var _models_venture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/venture */
      7949);
      /* harmony import */


      var _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../staticData/dieDefinitions */
      5476);
      /* harmony import */


      var _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../staticData/ventureDefinitions */
      6193);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./time.service */
      9260);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./message.service */
      2684);

      var _GameService = /*#__PURE__*/function () {
        function _GameService(_timeService, _messageService) {
          _classCallCheck(this, _GameService);

          this._timeService = _timeService;
          this._messageService = _messageService;
          this.character = null;
          this.ventures = [];
          this.ap = 0;
          this.dieRank = 0;
          this.resting = false;
          this._init = false;
        }

        _createClass(_GameService, [{
          key: "initVentures",
          value: function initVentures() {
            var _this2 = this;

            this.ventures = [];

            _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_3__.VENTURE_LIBRARY.forEach(function (def) {
              var v = new _models_venture__WEBPACK_IMPORTED_MODULE_1__.Venture();
              v.name = def.name;

              _this2.ventures.push(v);
            });
          }
        }, {
          key: "initSim",
          value: function initSim() {
            var _this3 = this;

            if (this._init) {
              return;
            }

            this._timeService.tick.subscribe(function (x) {
              return _this3.tick(x);
            });

            this._init = true;
          } // ======Simulation======

        }, {
          key: "tick",
          value: function tick(dT) {
            var _this4 = this;

            if (this.character == null) {
              return;
            } // Do Rest


            if (this.resting) {
              this.character.stamina += 5 * dT;

              if (this.character.stamina >= this.character.maxStamina) {
                this.character.stamina = this.character.maxStamina;
                this.resting = false;
              }
            } // Progress current venture
            else if (this.targetVenture != null) {
                var venture = this.ventures.find(function (x) {
                  return x.name == _this4.targetVenture;
                });

                if (venture == null) {
                  return;
                } // If there isn't an encounter, init an encounter


                if (venture.encounterName == null) {
                  this.startEncounter(venture);
                }

                venture.progress += 7 * this.character.body * dT;
                this.character.stamina -= dT;

                if (this.character.stamina <= 0) {
                  this.resting = true;
                }

                if (venture.progress > venture.progressMax) {
                  venture.completions++;
                  venture.progress = 0;

                  this._messageService.addMessage("You slay the " + venture.encounterName + ".");

                  this.startEncounter(venture);
                  this.gainXp(Math.floor(Math.random() * 75 + 75));
                }
              } // Degen venture progress


            this.ventures.forEach(function (x) {
              if (x.progress > 0 && (_this4.resting || _this4.targetVenture != x.name)) {
                x.progress -= 4 * dT;

                if (x.progress <= 0) {
                  x.progress = 0;
                  x.encounterName = null;
                }
              }
            });
          } // ======Character Operations======

        }, {
          key: "rollNewCharacter",
          value: function rollNewCharacter() {
            var die = this.getCurrentDie();
            this.character = new _models_character__WEBPACK_IMPORTED_MODULE_0__.Character();
            this.character.name = "Bob the Adventurer";
            this.character.xp = 0;
            this.character.level = 1;
            this.character.body = die.roll();
            this.character.maxStamina = (this.character.body + 2) * 3;
            this.character.stamina = this.character.maxStamina;
            this.targetVenture = null;
            this.resting = false;

            this._messageService.addMessage("Welcome, " + this.character.name + "!");

            this.initVentures();
            this.initSim();
          }
        }, {
          key: "getLevelCost",
          value: function getLevelCost(level) {
            return 150 + (level * level - 2) * 135;
          }
        }, {
          key: "rest",
          value: function rest() {
            this.resting = true;
          }
        }, {
          key: "gainXp",
          value: function gainXp(xp) {
            this.character.xp += xp;
            var nextLevelCost = this.getLevelCost(this.character.level + 1);

            if (this.character.xp >= nextLevelCost) {
              this.character.xp -= nextLevelCost;
              this.gainLevel();
            }
          }
        }, {
          key: "gainLevel",
          value: function gainLevel() {
            this.character.level++;
            var newLevel = this.character.level;

            this._messageService.addMessage("You have reached level " + newLevel + "!");

            var die = this.getCurrentDie();
            var bodyIncrease = Math.floor(die.roll() / 3);

            if (bodyIncrease > 0) {
              this._messageService.addMessage("Your Body has increased by " + bodyIncrease + ".");

              this.character.body += bodyIncrease;
            }

            this.character.maxStamina = (this.character.body + 2) * 3;
            this.character.stamina = this.character.maxStamina;
            var newAp = Math.max(0, newLevel * newLevel - 3);
            this.ap += newAp;

            this._messageService.addMessage("You have gained " + newAp + " AP.");
          } //======Venture Operations======

        }, {
          key: "getVentureDef",
          value: function getVentureDef(name) {
            return _staticData_ventureDefinitions__WEBPACK_IMPORTED_MODULE_3__.VENTURE_LIBRARY.find(function (x) {
              return x.name == name;
            });
          }
        }, {
          key: "selectVenture",
          value: function selectVenture(venture) {
            this.targetVenture = venture.name;
          }
        }, {
          key: "startEncounter",
          value: function startEncounter(venture) {
            var def = this.getVentureDef(venture.name);
            var encounter = def.getRandomEncounter();
            venture.encounterName = encounter;
          } //======Die Operations======

        }, {
          key: "getCurrentDie",
          value: function getCurrentDie() {
            return _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY[this.dieRank];
          }
        }, {
          key: "getNextDie",
          value: function getNextDie() {
            if (_staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY.length <= this.dieRank + 1) {
              return null;
            }

            return _staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY[this.dieRank + 1];
          }
        }, {
          key: "upgradeDie",
          value: function upgradeDie() {
            if (_staticData_dieDefinitions__WEBPACK_IMPORTED_MODULE_2__.DIE_LIBRARY.length <= this.dieRank + 1) {
              return;
            }

            this.dieRank++;
          }
        }]);

        return _GameService;
      }();

      _GameService.ɵfac = function GameService_Factory(t) {
        return new (t || _GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_time_service__WEBPACK_IMPORTED_MODULE_4__.TimeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService));
      };

      _GameService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _GameService,
        factory: _GameService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2684:
    /*!*********************************************!*\
      !*** ./src/app/services/message.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* binding */
            _MessageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MessageService = /*#__PURE__*/function () {
        function _MessageService() {
          _classCallCheck(this, _MessageService);

          this.msgFeed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_MessageService, [{
          key: "addMessage",
          value: function addMessage(message) {
            this.msgFeed.next(message);
          }
        }]);

        return _MessageService;
      }();

      _MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || _MessageService)();
      };

      _MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _MessageService,
        factory: _MessageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9260:
    /*!******************************************!*\
      !*** ./src/app/services/time.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimeService": function TimeService() {
          return (
            /* binding */
            _TimeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      945);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var tickRate = 100;

      var _TimeService = /*#__PURE__*/function () {
        function _TimeService() {
          _classCallCheck(this, _TimeService);

          this.tick = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this._timerSubscription = null;
        }

        _createClass(_TimeService, [{
          key: "startGame",
          value: function startGame() {
            var _this5 = this;

            if (this._timerSubscription != null) {
              this._timerSubscription.unsubscribe();
            }

            this._timerSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(tickRate).subscribe(function (x) {
              return _this5.tick.next(tickRate / 1000);
            });
          }
        }]);

        return _TimeService;
      }();

      _TimeService.ɵfac = function TimeService_Factory(t) {
        return new (t || _TimeService)();
      };

      _TimeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _TimeService,
        factory: _TimeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    5476:
    /*!**********************************************!*\
      !*** ./src/app/staticData/dieDefinitions.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DieDef": function DieDef() {
          return (
            /* binding */
            _DieDef
          );
        },

        /* harmony export */
        "DIE_LIBRARY": function DIE_LIBRARY() {
          return (
            /* binding */
            _DIE_LIBRARY
          );
        }
        /* harmony export */

      });

      var _DieDef = /*#__PURE__*/function () {
        function _DieDef(count, faces, cost) {
          _classCallCheck(this, _DieDef);

          this.count = count;
          this.faces = faces;
          this.cost = cost;
        }

        _createClass(_DieDef, [{
          key: "roll",
          value: function roll() {
            var total = 0;

            for (var i = 0; i < this.count; i++) {
              total += Math.floor(Math.random() * this.faces) + 1;
            }

            return total;
          }
        }]);

        return _DieDef;
      }();

      var _DIE_LIBRARY = [new _DieDef(1, 4, 1), new _DieDef(1, 6, 1), new _DieDef(1, 8, 5), new _DieDef(1, 10, 8), new _DieDef(2, 6, 14), new _DieDef(2, 8, 20), new _DieDef(3, 6, 30), new _DieDef(3, 8, 45), new _DieDef(4, 6, 70), new _DieDef(4, 8, 100), new _DieDef(6, 6, 150)];
      /***/
    },

    /***/
    6193:
    /*!**************************************************!*\
      !*** ./src/app/staticData/ventureDefinitions.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VentureDef": function VentureDef() {
          return (
            /* binding */
            _VentureDef
          );
        },

        /* harmony export */
        "VENTURE_LIBRARY": function VENTURE_LIBRARY() {
          return (
            /* binding */
            _VENTURE_LIBRARY
          );
        }
        /* harmony export */

      });

      var _VentureDef = /*#__PURE__*/function () {
        function _VentureDef(name) {
          _classCallCheck(this, _VentureDef);

          this.encounters = [];
          this.name = name;
        }

        _createClass(_VentureDef, [{
          key: "getRandomEncounter",
          value: function getRandomEncounter() {
            var random = Math.floor(Math.random() * this.encounters.length);
            return this.encounters[random];
          }
        }, {
          key: "addEncounter",
          value: function addEncounter(name) {
            this.encounters.push(name);
            return this;
          }
        }, {
          key: "addPrereq",
          value: function addPrereq(name, rank) {
            this.prereqName = name;
            this.prereqRank = rank;
            return this;
          }
        }]);

        return _VentureDef;
      }();

      var _VENTURE_LIBRARY = [new _VentureDef("The Innkeeper's Basement").addEncounter("rat").addEncounter("slime mold").addEncounter("brutal rat"), new _VentureDef("The Thicket").addPrereq("The Innkeeper's Basement", 5).addEncounter("brutal rat").addEncounter("wolf").addEncounter("felsprite").addEncounter("dire rat").addEncounter("goblin scout"), new _VentureDef("The Goblin Caves").addPrereq("The Thicket", 5).addEncounter("dire rat").addEncounter("goblin scout").addEncounter("goblin guard").addEncounter("goblin sage").addEncounter("hobgoblin overseer"), new _VentureDef("The Lost Tomb").addPrereq("The Lost Tomb", 5).addEncounter("goblin sage").addEncounter("goblin shaman").addEncounter("hobgoblin graverobber").addEncounter("corpse wight").addEncounter("tomb lord")];
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map