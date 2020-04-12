module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-23926\",\"private_key_id\":\"e34247b59cdf94597a6ff042eaffc524143192dd\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCth8/DgUHuVtXJ\\noHhkyprRhUODD9Rb+z+ALlO+iL7MR1Wq3zkoRLKxqoJv7CP154Ll22N8JhS/EnU5\\ntzzD8XEIckN+Y/iLWytytvW6Bk5V5z3XvW3xbdROlUIfxt63RHHMICrS41J387Ig\\nYzLK0bmqZMsuHtrT1/yYmVnPRYD0kasjcDtIUjD9PvbN8ZYla1GJ+ktOpe9oR4lN\\nVFQch73xSiUnZyEtgKPx/jA7QhgDL1z6/EShhH6dPQaIdagrQGduWG3d4WmpU48q\\nUcSgZHJGGPu2DPAXK63ZD5AVajGQUKSeoQfjGQd0hAKU3+ji/l2ijOdoUDStZUCd\\n5gEkz5INAgMBAAECggEABWJWdIUHwr7K0n8fioBhy4NEbBDbQIEGwEdPswn4TODK\\nvEBBpv7zV2wIW4jQDdLBfuMZeVzkyGU+Igy409s41q+q6e/tTS+b5RWJrBxYJQta\\nzHKUx8imAsvX7yH4ajxzVnIfZLHdGW/Zf0Psq8UplatGcEIl/SwxVW/D963QTuZC\\nsRixZsIZ07d+Az28ofb7a8/QiUjpAJ0FIPahjWZViai853RxMY8UCEo1qAlhT59t\\nKpfiFYd3BFGMq2koDvV9czDFZG9wvYqNuNmslsA7CS6oTVpHBU+abRYm/u3CsgsS\\nv0Sum5qd88xeU97JrObm3o/Rc9dWvYY9EC6nauPYyQKBgQDlNffXgCi8SBWk1HnP\\nJT/Lk888P9uhOBeF9gK8zfvhYI5GWf4Iwegd8WWUEJFvituXMGcWOp9m/R1zDbzd\\nW4nTg1y0bFnu04rGpAfLfyZyFtQ2lkrBWD7CSnjd0MO5xDRSDHFnRSTplcOg6IUC\\nLNdYpvUhKdaTdpyzESZ0WI6y9QKBgQDBz+DM2UCJY1yoNzWtNV4olTVu1N0XPfBc\\n5cTzw289Di0NxNvCBhFqH1ONVRoi9NnWQqPIrZm/eQYtj4mjK8ImmJZzg3LU5+W6\\nMejPSgjOCU63wbw9S/S01MFth2qkGHmYpFL0++2QHxCwCOU8FmFL3fkcjrfq0VWh\\nQIhU8l3juQKBgAk4Hnvgf8Ly80vp7+xRBzvc+hzmRKM7albNClclwdfS1mYmAH3B\\nruBlcTx/Xhoqb6KpI7xVJ0wxKhoSl2If6G9FfVkUcpmUkKRkvJuGxbkZCfgYG3Gj\\nZwLRlAL3/qdeKOyT64vH0DBFAdVbBN6Nhyvdq0ZmNGdCAhOBwRY06ahxAoGAaeFC\\nA0cwnZ3dsbwvo8eDABK7lSfO/PKGjImt9imvbKCA9oO0NqQQAXTJtW1nkO9Izmer\\niGdmlhbszBkdbTnroCA+GS8Xnb5uXzEC6bOdacnl6jd5udb0AZI1dbvEA4+nZj9n\\nXpT+7Hw8Jp9FdHUZhFPo0rQZP7xK1oQltpqNtmkCgYEA2ZoxhzCVDMqU0jqsQTei\\n+Nu06cY9n3EKpg2d4E0ZVCXtVqHAAA/d9j/hUasC1TXJ6fJUr6qkrH4qYTwDHQVx\\nUZWH5zr6dHw9Y2AzFRtyKwqtHFb1RKWMnXIrPWDgblSHMNZOYSKJDrTES4UW1nOF\\n85B5w3zIaTaCMWyutisoWAI=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-y5h4t@mydailystatus-23926.iam.gserviceaccount.com\",\"client_id\":\"112582524193712591336\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y5h4t%40mydailystatus-23926.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

console.log(process.env.AUTH0_SCOPE);
/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_LIFETIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
function toRad(Value) {
  return Value * Math.PI / 180;
}

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
} // Converts numeric degrees to radians

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
var _jsxFileName = "C:\\Users\\lucao\\OneDrive\\\xC1rea de Trabalho\\projeto_devPleno\\project-front-devPleno-react\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Status proximos a voc\xEA"), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.chekins.map(checkin => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 33
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }, checkin.id === props.user.sub && 'Seu status'), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, checkin.status), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }
    }, JSON.stringify(checkin.coords)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 37
      }
    }, checkin.distance));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);
  console.log(session);

  if (session) {
    const today = new Date();
    const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay();
    const checkToday = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').doc(session.user.sub).get();
    const todayData = checkToday.data();
    let forceCreate = true;

    if (todayData) {
      //pode ver outros checkins
      forceCreate = false;
      const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').near({
        center: todayData.coordinates,
        radius: 1000
      }).get();
      const checkinsList = [];
      checkins.docs.forEach(element => {
        checkinsList.push({
          id: element.id,
          status: element.data().status,
          coords: {
            lat: element.data().coordinates.latitude,
            long: element.data().coordinates.longitude
          },
          distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_4__["distance"])(todayData.coordinates.latitude, todayData.coordinates.longitude, element.data().coordinates.latitude, element.data().coordinates.longitude)
        });
      });
      return {
        props: {
          user: session.user,
          isAuth: true,
          forceCreate: false,
          chekins: checkinsList
        }
      };
    }

    return {
      props: {
        user: session.user,
        isAuth: true,
        forceCreate
      }
    };
  }

  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lucao\OneDrive\Área de Trabalho\projeto_devPleno\project-front-devPleno-react\pages\app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map