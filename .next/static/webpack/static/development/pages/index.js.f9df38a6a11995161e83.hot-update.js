webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/shai/Desktop/Tech/Personal projects/corona-count-down/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Home = function Home() {
  var today = new Date(); // Set time to one minute after midnight

  today.setHours(0, 1, 0, 0); //The official SA lockdown end date

  var lockdownEndDate = new Date('apr 16 2020');
  var timeDifference = Math.abs(lockdownEndDate.getTime() - today.getTime()); //converts time difference to days left using formula from

  var daysLeft = Math.round(timeDifference / (1000 * 3600 * 24));
  var name = 'Shai';
  var instagramURL = 'https://instagram.com/shaiunterslak';
  var googleHangoutURL = 'https://hangouts.google.com/call/Oe4X';
  var cellNumber = 'tel:' + '+2787777777'; //your number here

  var imgurLink = 'https://i.imgur.com/Di8w99o.jpg';
  return __jsx("div", {
    className: "jsx-3043446406" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, name, " Count Down"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3043446406" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Days left: ", daysLeft), __jsx("p", {
    className: "jsx-3043446406" + " " + 'description',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Until you can legally see ", name), __jsx("div", {
    className: "jsx-3043446406" + " " + 'grid',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: instagramURL,
    target: "_blank",
    className: "jsx-3043446406" + " " + 'card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Look at his face \u2192"), __jsx("p", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Find expertly curated ", name, " content on his Instagram.")), __jsx("a", {
    href: googleHangoutURL,
    target: "_blank",
    className: "jsx-3043446406" + " " + 'card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Talk to his face \u2192"), __jsx("p", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Join this Google Hangout and let him know you're there.")), __jsx("a", {
    href: cellNumber,
    className: "jsx-3043446406" + " " + 'card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Talk to his ear \u2192"), __jsx("p", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Cellphones are the next big thing. Give ", name, " a call anytime.")), __jsx("a", {
    href: imgurLink,
    target: "_blank",
    className: "jsx-3043446406" + " " + 'card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Look at his ear \u2192"), __jsx("p", {
    className: "jsx-3043446406",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "View a high resolution photo of ", name, "'s ear. For the bad days.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3355275565",
    __self: _this
  }, ".container.jsx-3043446406{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3043446406{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3043446406{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3043446406 img.jsx-3043446406{margin-left:0.5rem;}footer.jsx-3043446406 a.jsx-3043446406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3043446406{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3043446406 a.jsx-3043446406{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3043446406 a.jsx-3043446406:hover,.title.jsx-3043446406 a.jsx-3043446406:focus,.title.jsx-3043446406 a.jsx-3043446406:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-3043446406{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-3043446406,.description.jsx-3043446406{text-align:center;}.description.jsx-3043446406{line-height:1.5;font-size:1.5rem;}code.jsx-3043446406{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-3043446406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-3043446406{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-3043446406:hover,.card.jsx-3043446406:focus,.card.jsx-3043446406:active{color:#0070f3;border-color:#0070f3;}.card.jsx-3043446406 h3.jsx-3043446406{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-3043446406 p.jsx-3043446406{margin:0;font-size:1.25rem;line-height:1.5;}@media (max-width:600px){.grid.jsx-3043446406{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFpL0Rlc2t0b3AvVGVjaC9QZXJzb25hbCBwcm9qZWN0cy9jb3JvbmEtY291bnQtZG93bi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCLEFBRzRCLEFBU0YsQUFTSixBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFPUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBT0ksU0FqRUksQUEyREMsRUE5RkwsQUFxR1csQ0EvQlQsRUFuRE0sQUFLQSxBQTREQSxDQTdGZCxDQXVEVSxDQWhFQSxDQTREbkIsQUErQ21CLENBaEZuQixBQTBDb0IsS0FsRFcsRUFtQ2QsQ0EyREMsTUFoRGxCLENBaEVlLENBc0dmLEFBS0EsRUF0Q2tCLElBZmxCLEVBMkRBLEtBeEdlLEtBVUEsQUFtREksT0F0Qm5CLElBWEEsQUFLQSxNQThCc0UsSUExQzdDLEFBK0NKLElBV0osV0ErQmYsSUE5QmdCLGVBeEZNLENBeUZSLGFBaEZRLENBaUZELElBdkVFLHdDQTBEQSxNQS9DSixBQTZETSxhQTFGRixLQXVFekIsT0FvQnFCLEVBbEZJLGlCQW1GOEIsU0F6RWxDLHdDQVdyQixBQStDaUIsbUJBNUVJLGNBU0Esb0JBVXJCLElBMkRrQixNQWNsQixVQWJrQixnQkFDbEIsdUJBL0VBLGNBU0EiLCJmaWxlIjoiL1VzZXJzL3NoYWkvRGVza3RvcC9UZWNoL1BlcnNvbmFsIHByb2plY3RzL2Nvcm9uYS1jb3VudC1kb3duL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIC8vIFNldCB0aW1lIHRvIG9uZSBtaW51dGUgYWZ0ZXIgbWlkbmlnaHRcbiAgdG9kYXkuc2V0SG91cnMoMCwgMSwgMCwgMClcblxuICAvL1RoZSBvZmZpY2lhbCBTQSBsb2NrZG93biBlbmQgZGF0ZVxuICBsZXQgbG9ja2Rvd25FbmREYXRlID0gbmV3IERhdGUoJ2FwciAxNiAyMDIwJylcbiAgbGV0IHRpbWVEaWZmZXJlbmNlID0gTWF0aC5hYnMobG9ja2Rvd25FbmREYXRlLmdldFRpbWUoKSAtIHRvZGF5LmdldFRpbWUoKSlcblxuICAvL2NvbnZlcnRzIHRpbWUgZGlmZmVyZW5jZSB0byBkYXlzIGxlZnQgdXNpbmcgZm9ybXVsYSBmcm9tXG4gIGxldCBkYXlzTGVmdCA9IE1hdGgucm91bmQodGltZURpZmZlcmVuY2UgLyAoMTAwMCAqIDM2MDAgKiAyNCkpXG5cbiAgbGV0IG5hbWUgPSAnU2hhaSdcbiAgbGV0IGluc3RhZ3JhbVVSTCA9ICdodHRwczovL2luc3RhZ3JhbS5jb20vc2hhaXVudGVyc2xhaydcbiAgbGV0IGdvb2dsZUhhbmdvdXRVUkwgPSAnaHR0cHM6Ly9oYW5nb3V0cy5nb29nbGUuY29tL2NhbGwvT2U0WCdcbiAgbGV0IGNlbGxOdW1iZXIgPSAndGVsOicgKyAnKzI3ODc3Nzc3NzcnIC8veW91ciBudW1iZXIgaGVyZVxuICBsZXQgaW1ndXJMaW5rID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vRGk4dzk5by5qcGcnXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e25hbWV9IENvdW50IERvd248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5EYXlzIGxlZnQ6IHtkYXlzTGVmdH08L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlVudGlsIHlvdSBjYW4gbGVnYWxseSBzZWUge25hbWV9PC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkJz5cbiAgICAgICAgICA8YSBocmVmPXtpbnN0YWdyYW1VUkx9IHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgPGgzPkxvb2sgYXQgaGlzIGZhY2UgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkZpbmQgZXhwZXJ0bHkgY3VyYXRlZCB7bmFtZX0gY29udGVudCBvbiBoaXMgSW5zdGFncmFtLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPXtnb29nbGVIYW5nb3V0VVJMfSB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgIDxoMz5UYWxrIHRvIGhpcyBmYWNlICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5Kb2luIHRoaXMgR29vZ2xlIEhhbmdvdXQgYW5kIGxldCBoaW0ga25vdyB5b3UncmUgdGhlcmUuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9e2NlbGxOdW1iZXJ9IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICA8aDM+VGFsayB0byBoaXMgZWFyICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ2VsbHBob25lcyBhcmUgdGhlIG5leHQgYmlnIHRoaW5nLiBHaXZlIHtuYW1lfSBhIGNhbGwgYW55dGltZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPXtpbWd1ckxpbmt9IHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgPGgzPkxvb2sgYXQgaGlzIGVhciAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFZpZXcgYSBoaWdoIHJlc29sdXRpb24gcGhvdG8gb2Yge25hbWV9J3MgZWFyLiBGb3IgdGhlIGJhZCBkYXlzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/shai/Desktop/Tech/Personal projects/corona-count-down/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "441912642",
    __self: _this
  }, "iframe{height:200px;}html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFpL0Rlc2t0b3AvVGVjaC9QZXJzb25hbCBwcm9qZWN0cy9jb3JvbmEtY291bnQtZG93bi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwTHlCLEFBR3dCLEFBSUgsQUFRWSxVQVBiLEdBSlgsTUFPYyxHQUtkLG1JQUpBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFpL0Rlc2t0b3AvVGVjaC9QZXJzb25hbCBwcm9qZWN0cy9jb3JvbmEtY291bnQtZG93bi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAvLyBTZXQgdGltZSB0byBvbmUgbWludXRlIGFmdGVyIG1pZG5pZ2h0XG4gIHRvZGF5LnNldEhvdXJzKDAsIDEsIDAsIDApXG5cbiAgLy9UaGUgb2ZmaWNpYWwgU0EgbG9ja2Rvd24gZW5kIGRhdGVcbiAgbGV0IGxvY2tkb3duRW5kRGF0ZSA9IG5ldyBEYXRlKCdhcHIgMTYgMjAyMCcpXG4gIGxldCB0aW1lRGlmZmVyZW5jZSA9IE1hdGguYWJzKGxvY2tkb3duRW5kRGF0ZS5nZXRUaW1lKCkgLSB0b2RheS5nZXRUaW1lKCkpXG5cbiAgLy9jb252ZXJ0cyB0aW1lIGRpZmZlcmVuY2UgdG8gZGF5cyBsZWZ0IHVzaW5nIGZvcm11bGEgZnJvbVxuICBsZXQgZGF5c0xlZnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmZXJlbmNlIC8gKDEwMDAgKiAzNjAwICogMjQpKVxuXG4gIGxldCBuYW1lID0gJ1NoYWknXG4gIGxldCBpbnN0YWdyYW1VUkwgPSAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3NoYWl1bnRlcnNsYWsnXG4gIGxldCBnb29nbGVIYW5nb3V0VVJMID0gJ2h0dHBzOi8vaGFuZ291dHMuZ29vZ2xlLmNvbS9jYWxsL09lNFgnXG4gIGxldCBjZWxsTnVtYmVyID0gJ3RlbDonICsgJysyNzg3Nzc3Nzc3JyAvL3lvdXIgbnVtYmVyIGhlcmVcbiAgbGV0IGltZ3VyTGluayA9ICdodHRwczovL2kuaW1ndXIuY29tL0RpOHc5OW8uanBnJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntuYW1lfSBDb3VudCBEb3duPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+RGF5cyBsZWZ0OiB7ZGF5c0xlZnR9PC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5VbnRpbCB5b3UgY2FuIGxlZ2FsbHkgc2VlIHtuYW1lfTwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAgPGEgaHJlZj17aW5zdGFncmFtVVJMfSB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgIDxoMz5Mb29rIGF0IGhpcyBmYWNlICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5GaW5kIGV4cGVydGx5IGN1cmF0ZWQge25hbWV9IGNvbnRlbnQgb24gaGlzIEluc3RhZ3JhbS48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj17Z29vZ2xlSGFuZ291dFVSTH0gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICA8aDM+VGFsayB0byBoaXMgZmFjZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+Sm9pbiB0aGlzIEdvb2dsZSBIYW5nb3V0IGFuZCBsZXQgaGltIGtub3cgeW91J3JlIHRoZXJlLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPXtjZWxsTnVtYmVyfSBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgPGgzPlRhbGsgdG8gaGlzIGVhciAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIENlbGxwaG9uZXMgYXJlIHRoZSBuZXh0IGJpZyB0aGluZy4gR2l2ZSB7bmFtZX0gYSBjYWxsIGFueXRpbWUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj17aW1ndXJMaW5rfSB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgIDxoMz5Mb29rIGF0IGhpcyBlYXIgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBWaWV3IGEgaGlnaCByZXNvbHV0aW9uIHBob3RvIG9mIHtuYW1lfSdzIGVhci4gRm9yIHRoZSBiYWQgZGF5cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/shai/Desktop/Tech/Personal projects/corona-count-down/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f9df38a6a11995161e83.hot-update.js.map