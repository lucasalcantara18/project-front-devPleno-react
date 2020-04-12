webpackHotUpdate("static\\development\\pages\\app.js",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\lucao\\OneDrive\\\xC1rea de Trabalho\\projeto_devPleno\\project-front-devPleno-react\\pages\\app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Status proximos a voc\xEA"), __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.chekins.map(function (checkin) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 33
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }, checkin.id === props.user.sub && 'Seu status'), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, checkin.status), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }
    }, JSON.stringify(checkin.coords)), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 37
      }
    }, checkin.distance));
  })));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=app.js.e2add2799c74e908ab45.hot-update.js.map