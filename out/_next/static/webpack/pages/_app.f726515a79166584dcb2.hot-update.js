self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/common/Topbar.tsx":
/*!**************************************!*\
  !*** ./components/common/Topbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobBar": function() { return /* binding */ TobBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Topbar.module.css */ "./styles/Topbar.module.css");
/* harmony import */ var _styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Workspace\\blog\\components\\common\\Topbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




var TobBar = function TobBar(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(">"),
      menuText = _useState2[0],
      setMenuText = _useState2[1];

  var toggleNavbar = function toggleNavbar() {
    setCollapsed(!collapsed);

    if (collapsed == true) {
      setMenuText("∨");
    } else {
      setMenuText(">");
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
    dark: true,
    className: (_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
    className: (_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().brand),
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "HYEOKJAE."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Simple Text"), __jsx("button", {
    onClick: toggleNavbar,
    className: (_styles_Topbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, menuText + " MENU"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
    isOpen: !collapsed,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    href: "/components/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Posts")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    href: "https://github.com/HyeokjaeLee",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "GitHub"))))));
};
/*  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark={true} expand="md" className={styles.navbar}>
      <NavbarBrand className={styles.brand} href="/">
        HYEOKJAE.
      </NavbarBrand>
      <Nav className="mr-auto" navbar={true} justified={true}>
        <NavItem>
          <NavLink href="/components/">Posts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/HyeokjaeLee">GitHub</NavLink>
        </NavItem>
        <NavLink href="https://github.com/HyeokjaeLee">About</NavLink>
      </Nav>
    </Navbar>
  ); */

_s(TobBar, "NHyDJeBEpZk4E9M5ydRxjAwsfN4=");

_c = TobBar;

var _c;

$RefreshReg$(_c, "TobBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVG9wYmFyLnRzeCJdLCJuYW1lcyI6WyJUb2JCYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwibWVudVRleHQiLCJzZXRNZW51VGV4dCIsInRvZ2dsZU5hdmJhciIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLElBQUQsQ0FEWDtBQUFBLE1BQ3hCQyxTQUR3QjtBQUFBLE1BQ2JDLFlBRGE7O0FBQUEsbUJBRUNGLCtDQUFRLENBQUMsR0FBRCxDQUZUO0FBQUEsTUFFeEJHLFFBRndCO0FBQUEsTUFFZEMsV0FGYzs7QUFHL0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkgsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7O0FBQ0EsUUFBSUEsU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCRyxpQkFBVyxDQUFDLEdBQUQsQ0FBWDtBQUNELEtBRkQsTUFFTztBQUNMQSxpQkFBVyxDQUFDLEdBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQVEsUUFBSSxNQUFaO0FBQWEsYUFBUyxFQUFFRSx5RUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBYSxhQUFTLEVBQUVBLHdFQUF4QjtBQUFzQyxRQUFJLEVBQUMsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtFO0FBQVEsV0FBTyxFQUFFRCxZQUFqQjtBQUErQixhQUFTLEVBQUVDLHVFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBQVEsR0FBRyxPQURkLENBTEYsRUFRRSxNQUFDLGdEQUFEO0FBQVUsVUFBTSxFQUFFLENBQUNGLFNBQW5CO0FBQThCLFVBQU0sTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxVQUFNLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBUyxRQUFJLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FERixFQUlFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBUyxRQUFJLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBSkYsQ0FERixDQVJGLENBREYsQ0FERjtBQXVCRCxDQW5DTTtBQW9DUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXZEYUgsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY3MjY1MTVhNzkxNjY1ODRkY2IyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgTmF2YmFyVGV4dCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1RvcGJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9iQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFttZW51VGV4dCwgc2V0TWVudVRleHRdID0gdXNlU3RhdGUoXCI+XCIpO1xyXG4gIGNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcclxuICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKTtcclxuICAgIGlmIChjb2xsYXBzZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBzZXRNZW51VGV4dChcIuKIqFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1lbnVUZXh0KFwiPlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBkYXJrIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgSFlFT0tKQUUuXHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8TmF2YmFyVGV4dD5TaW1wbGUgVGV4dDwvTmF2YmFyVGV4dD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICB7bWVudVRleHQgKyBcIiBNRU5VXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17IWNvbGxhcHNlZH0gbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdiBuYXZiYXI+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9cIj5Qb3N0czwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0h5ZW9ramFlTGVlXCI+R2l0SHViPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8qICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyIGRhcms9e3RydWV9IGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgPE5hdmJhckJyYW5kIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfSBocmVmPVwiL1wiPlxyXG4gICAgICAgIEhZRU9LSkFFLlxyXG4gICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI9e3RydWV9IGp1c3RpZmllZD17dHJ1ZX0+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2NvbXBvbmVudHMvXCI+UG9zdHM8L05hdkxpbms+XHJcbiAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9IeWVva2phZUxlZVwiPkdpdEh1YjwvTmF2TGluaz5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9IeWVva2phZUxlZVwiPkFib3V0PC9OYXZMaW5rPlxyXG4gICAgICA8L05hdj5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7ICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=