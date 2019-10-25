function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n  <!-- Sidebar Holder -->\r\n  <nav id=\"sidebar\">\r\n      <div class=\"sidebar-header\">\r\n          <!-- <h3>Learning Tool </h3> -->\r\n          <h6>Quick Access</h6>\r\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n      </div>\r\n\r\n    \r\n\r\n      <ul class=\"list-unstyled CTAs\">\r\n         \r\n              <li>  <a routerLink ='/editor-pane' style=\"color: black;\">\r\n                  <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n                  Back To Page Structure\r\n              </a></li>\r\n              <li>  <a routerLink ='/dashboard' style=\"color: black;\">\r\n                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n                Back To Dashboard\r\n            </a></li>\r\n         \r\n          <li><a  class=\"addnew\" (click)=\"addCourse()\">Add New</a></li>\r\n          <li><a (click)=\"sendData()\" class=\"article\" routerLink='/final-course/courses' class=\"addnew\">Preview</a></li>\r\n\r\n          <!-- <li><a (click)=\"sendData()\" class=\"article\" routerLink='/final-course'>Preview Course</a></li> -->\r\n      </ul>\r\n      <ul class=\"list\" >\r\n          <div class=\"btn-group\">\r\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  Choose Type\r\n                </button>\r\n              <div class=\"dropdown-menu\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Training Programme</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Course Creator</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Survey</a>\r\n                  \r\n                  <a class=\"dropdown-item\" href=\"#\">Questionnaire</a>\r\n              </div>\r\n            </div>\r\n      <div class=\"list-data\">\r\n        <li > <a  routerLink='/dashboard'>My Courses</a> </li>\r\n        <li><a href=\"#\">My Training Programme</a> </li>\r\n        <li><a href=\"#\">My Survey</a></li>\r\n        <li><a href=\"#\">My Questionnaire</a></li>\r\n      </div> \r\n      <div class=\"list-input\">\r\n        <li><a href=\"#\">Assigned Courses</a></li>\r\n        <li>Search by name <br>\r\n          <input type=\"text\" name=\"name\" id=\"nameInput\"></li>\r\n        \r\n        <li>Search by Tag <br>\r\n          <input type=\"text\" name=\"tag\" id=\"tagInput\"></li>\r\n        \r\n      </div>\r\n      </ul>\r\n  </nav>\r\n \r\n  <!-- Page Content Holder -->\r\n  <main  class=\"page-content\">\r\n     \r\n      <app-breadcrumbs style=\" background-color: #ffffff;border: none !important;padding: 0.571em 1em;width: 78%;margin-left: 1%;\"></app-breadcrumbs>\r\n      <router-outlet></router-outlet>\r\n  </main>\r\n\r\n\r\n  \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/breadcrumbs/breadcrumbs.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/breadcrumbs/breadcrumbs.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBreadcrumbsBreadcrumbsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col\" style=\"max-width: 96%;margin-left: -1%;margin-top: -18px;\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\" \r\n            *ngFor=\"let item of breadcrumbList; let i = index\"\r\n            [class.active]=\"i===breadcrumbList.length-1\">\r\n            <a [routerLink]=\"item.path\" *ngIf=\"i!==breadcrumbList.length-1\">\r\n              {{ item.name }}\r\n            </a>\r\n            <span *ngIf=\"i===breadcrumbList.length-1\">{{ item.name }}</span>\r\n          </li>\r\n        </ol>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/component-content.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/component-content.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentContentComponentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/graphics/graphics.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/graphics/graphics.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentContentGraphicsGraphicsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container contact\">\r\n        <div class=\"header\">\r\n                <h6>General</h6>\r\n        </div>\r\n        \r\n            <form #graphicsCompForm=\"ngForm\" (ngSubmit)=\"SubmitItem(graphicsCompForm)\" class=\"graphicsCompForm\">\r\n            <div class=\"col-lg\" >\r\n              \r\n                    <div class=\"contact-form\">\r\n                            \r\n                        <div class=\"form-group\">\r\n                          <label class=\"control-label col-sm-2\" for=\"title\">Title</label>\r\n                          <div class=\"col-sm-10\">          \r\n                            <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label class=\"control-label col-sm-2\" for=\"displayTitle\">Display Title</label>\r\n                          <div class=\"col-sm-10\">          \r\n                            <input type=\"text\" class=\"form-control\" id=\"displayTitle\" name=\"displayTitle\" ngModel>\r\n                          </div>\r\n                        </div>\r\n                       \r\n                        \r\n                        <div class=\"form-group\">\r\n                          <label class=\"control-label col-sm-2\" for=\"body\">Body</label>\r\n                          <div class=\"col-sm-10\">\r\n                                \r\n                                <p-editor [style]=\"{'height':'250px'}\" name=\"body\" ngModel></p-editor>\r\n                               \r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                                <label class=\"control-label col-sm-2\" for=\"instruction\">Instruction</label>\r\n                                <div class=\"col-sm-10\">\r\n                                  <input type=\"text\" class=\"form-control\" id=\"instruction\"  name=\"instruction\" ngModel>\r\n                                </div>\r\n                                \r\n                         </div>\r\n                        \r\n                        \r\n                       \r\n                         \r\n                      \r\n                    \r\n                   \r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"blink\">Image Upload</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"file\" id=\"myFile\" size=\"50\" name=\"graphics_url\" (change)=\"uploadImage($event)\" ngModel>\r\n                            </div>\r\n                     </div>\r\n                  \r\n                    \r\n                    <div class=\"form-group\">        \r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" >Submit</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </form>\r\n        </div>\r\n        <div>\r\n               \r\n        \r\n    </div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/text-box/text-box.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/text-box/text-box.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentContentTextBoxTextBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container contact\">\r\n        <div class=\"header\">\r\n                <h6>General</h6>\r\n        </div>\r\n        \r\n            <form #textForm=\"ngForm\" (ngSubmit)=\"SubmitItem(textForm)\" class=\"textForm\">\r\n            <div class=\"col-lg\" >\r\n                <div class=\"contact-form\">\r\n                        <div class=\"form-group\">\r\n                                <label class=\"control-label col-sm-2\" for=\"title\">Preview Image</label>\r\n                                <div class=\"col-sm-10\">          \r\n                                  <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                                </div>\r\n                         </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"title\">Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"dtitle\">Display Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"dtitle\" name=\"dtitle\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"blink\">Description</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"blink\"  name=\"blink\" ngModel>\r\n                            </div>\r\n                     </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"body\">Body</label>\r\n                      <div class=\"col-sm-10\">\r\n                            \r\n                            <p-editor [style]=\"{'height':'250px'}\" ngModel></p-editor>\r\n                           \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"blink\">Tags</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"blink\"  name=\"blink\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                            \r\n                            <div class=\"col-sm-10 checkbox\">\r\n                               <input type=\"checkbox\" style=\"width: 1.5%;\" class=\"form-control\" id=\"checkbox\"  name=\"checkbox\" ngModel> Share will all users\r\n                            </div>\r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"blink\">Share with specific users</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"blink\"  name=\"blink\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                     <div class=\"header\">\r\n                            <h6 style=\"padding: 14px 19px;margin-top: 0%;\">Menu Lock Type</h6>\r\n                    </div>\r\n                    <div class=\"dropdown\">\r\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                             Lock type\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Custom</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Lock last</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Unlock First</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Sequential</a>\r\n\r\n                            </div>\r\n                    </div>\r\n                    \r\n                   \r\n                     <div class=\"header\">\r\n                            <h6 style=\"padding: 14px 19px;margin-top: 0%;\">Custom CSS</h6>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <div class=\"col-sm-10\">\r\n                            <textarea  class=\"form-control\" id=\"text-area\"  name=\"text-area\" ngModel rows=\"3\"></textarea>   \r\n                            </div>\r\n                            \r\n                    </div>\r\n                    <div class=\"form-group\">        \r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" >Submit</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </form>\r\n        </div>\r\n        <div>\r\n               \r\n        \r\n    </div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component-sidebar/component-sidebar.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component-sidebar/component-sidebar.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentSidebarComponentSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" *ngIf='isShow'>\r\n        <!-- Sidebar Holder -->\r\n        <nav id=\"sidebar\">\r\n            <div class=\"sidebar-header\">\r\n                <!-- <h3>Learning Tool </h3> -->\r\n                <h6>Add Components</h6>\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\" (click)='hideComponentbar()' ></i>\r\n            </div>\r\n      \r\n          \r\n      \r\n            <ul class=\"list-unstyled CTAs\">\r\n               \r\n                <div class=\"accordion\" id=\"accordionExample\">\r\n                    <div class=\"card \">\r\n                       \r\n                            <div class=\"card-header\" id=\"headingTwo\">\r\n                                    <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                            <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                    </div>\r\n                                <h2 class=\"mb-0 col-md-8\">\r\n                                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                                    Text Box\r\n                                    </button>\r\n                                </h2>\r\n                            </div> \r\n                             </div>\r\n                            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col\" style=\"margin-left: -13px;\">\r\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" ><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>Add </button>\r\n                                        </div>\r\n                                        <div class=\"col\" style=\"margin-left: 0px;\">\r\n                                             <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"addTextBox('Textbox')\"  > <i class=\"fa fa-arrows-h\" aria-hidden=\"true\"></i>Add </button>\r\n                                        </div>\r\n                                        <div class=\"col\" style=\"margin-right: -20px;\">\r\n                                            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n                                                Add </button>  \r\n                                        </div>\r\n                                    </div>\r\n                                       \r\n                                        \r\n                                        \r\n                                </div>\r\n                            </div>\r\n                        \r\n                      </div>\r\n                      <div class=\"card \">\r\n                       \r\n                            <div class=\"card-header\" id=\"headingTwo\">\r\n                                    <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                            <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                    </div>\r\n                                <h2 class=\"mb-0 col-md-8\">\r\n                                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                                   Graphics\r\n                                    </button>\r\n                                </h2>\r\n                            </div> \r\n                             </div>\r\n                            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                                <div class=\"card-body\">\r\n                                        <div class=\"row\">\r\n                                                <div class=\"col\" style=\"margin-left: -13px;\">\r\n                                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" ><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>Add </button>\r\n                                                </div>\r\n                                                <div class=\"col\" style=\"margin-left: 0px;\">\r\n                                                     <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"addGraphics('Graphics')\"> <i class=\"fa fa-arrows-h\" aria-hidden=\"true\"></i>Add </button>\r\n                                                </div>\r\n                                                <div class=\"col\" style=\"margin-right: -20px;\">\r\n                                                    <button type=\"button\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n                                                        Add </button>  \r\n                                                </div>\r\n                                        </div>        \r\n                                </div>\r\n                            </div>\r\n                        \r\n                      </div>\r\n                   \r\n                    \r\n                  </div>\r\n            </ul>\r\n           \r\n        </nav>\r\n       \r\n        <!-- Page Content Holder -->\r\n        <main  class=\"page-content\">\r\n            <!-- <app-breadcrumbs></app-breadcrumbs> -->\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n      \r\n      \r\n        \r\n      </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/article/article.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/article/article.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentArticleArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container contact\">\r\n        <div class=\"header\">\r\n                <h6>General</h6>\r\n        </div>\r\n        \r\n            <form #myArticleForm=\"ngForm\" (ngSubmit)=\"SubmitItem(myArticleForm)\" class=\"myArticleForm\">\r\n            <div class=\"col-lg\" >\r\n                <div class=\"contact-form\">\r\n                        \r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"title\">Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"displayTitle\">Display Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"displayTitle\" name=\"displayTitle\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"body\">Body</label>\r\n                      <div class=\"col-sm-10\">\r\n                            \r\n                            <p-editor [style]=\"{'height':'250px'}\" name=\"body\" ngModel></p-editor>\r\n                           \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"instruction\">Instruction</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"instruction\"  name=\"instruction\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                    \r\n                    \r\n                   \r\n                     \r\n                    <div class=\"form-group\">        \r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" >Submit</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </form>\r\n        </div>\r\n        <div>\r\n               \r\n        \r\n    </div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/block/block.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/block/block.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentBlockBlockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container contact\">\r\n        <div class=\"header\">\r\n                <h6>General</h6>\r\n        </div>\r\n        \r\n        <form #myBlockForm=\"ngForm\" (ngSubmit)=\"SubmitItem(myBlockForm)\" class=\"myBlockForm\">\r\n            <div class=\"col-lg\" >\r\n                <div class=\"contact-form\">\r\n                        \r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"title\">Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"displayTitle\">Display Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"displayTitle\" name=\"displayTitle\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"body\">Body</label>\r\n                      <div class=\"col-sm-10\">\r\n                            \r\n                            <p-editor [style]=\"{'height':'250px'}\" name=\"body\" ngModel></p-editor>\r\n                           \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"instruction\">Instruction</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"instruction\"  name=\"instruction\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                    \r\n                    \r\n                   \r\n                     \r\n                    <div class=\"form-group\">        \r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" >Submit</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </form>\r\n        </div>\r\n        <div>\r\n               \r\n        \r\n    </div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\"><a routerLink ='#'>\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            Back To Page Structure</a></li>\r\n        </ol>\r\n</nav> -->\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/course/course.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/course/course.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentCourseCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container contact\">\r\n        <div class=\"header\">\r\n                <h6>General</h6>\r\n        </div>\r\n        \r\n            <form #myCourseForm=\"ngForm\" (ngSubmit)=\"SubmitItem(myCourseForm)\" class=\"myCourseForm\">\r\n            <div class=\"col-lg\" >\r\n                <div class=\"contact-form\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"title\">Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"displayTitle\">Display Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"displayTitle\" name=\"displayTitle\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"description\">Description</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"description\"  name=\"description\" ngModel>\r\n                            </div>\r\n                     </div>\r\n                    \r\n                     <div class=\"form-group\">\r\n                        <label class=\"control-label col-sm-2\" for=\"body\">Body</label>\r\n                        <div class=\"col-sm-10\">\r\n                              \r\n                              <p-editor [style]=\"{'height':'250px'}\" ngModel name=\"body\"></p-editor>\r\n                             \r\n                        </div>\r\n                      </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"tags\">Tags</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"tags\"  name=\"tags\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                            \r\n                            <div class=\"col-sm-10 checkbox\">\r\n                               <input type=\"checkbox\" style=\"width: 2.5%;\" class=\"form-control\" id=\"checkbox\"  name=\"checkbox\" ngModel> Share with all users\r\n                            </div>\r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                            <label class=\"control-label \" style=\"margin-left: 2%;\" for=\"user\">Share with specific users</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"user\"  name=\"user\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                     <div class=\"header\">\r\n                            <h6 style=\"padding: 14px 19px;margin-top: 0%;\">Menu Lock Type</h6>\r\n                    </div>\r\n                    <select class=\"select\"  [(ngModel)]=\"selectedLevel\" [ngModelOptions]=\"{standalone: true}\" name=\"lockType\" (change)=\"selected()\">Lock Type\r\n                        <option *ngFor=\"let item of data\" [ngValue]=\"item\">{{item.name}}</option>\r\n                    </select>\r\n                    \r\n                  \r\n                    <!-- <div class=\"dropdown\">\r\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                             Lock type\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Custom</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Lock last</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Unlock First</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Sequential</a>\r\n\r\n                            </div>\r\n                    </div> -->\r\n                    \r\n                   \r\n                     <div class=\"header\">\r\n                            <h6 style=\"padding: 14px 19px;margin-top: 0%;\">Custom CSS</h6>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <div class=\"col-sm-10\">\r\n                            <textarea  class=\"form-control\" id=\"text-area\"  name=\"customCSS\" ngModel rows=\"3\"></textarea>   \r\n                            </div>\r\n                            \r\n                    </div>\r\n                    <div class=\"form-group\">        \r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" >Submit</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </form>\r\n        </div>\r\n        <div>\r\n               \r\n        \r\n    </div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/page/page.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/page/page.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPagePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container contact\">\r\n        <div class=\"header\">\r\n                <h6>General</h6>\r\n        </div>\r\n        \r\n            <form #myForm=\"ngForm\" (ngSubmit)=\"SubmitItem(myForm)\" class=\"myForm\">\r\n            <div class=\"col-lg\" >\r\n                <div class=\"contact-form\">\r\n                       \r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"title\">Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"displayTitle\">Display Title</label>\r\n                      <div class=\"col-sm-10\">          \r\n                        <input type=\"text\" class=\"form-control\" id=\"displayTitle\" name=\"displayTitle\" ngModel>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-sm-2\" for=\"body\">Body</label>\r\n                        <div class=\"col-sm-10\">\r\n                              \r\n                              <p-editor [style]=\"{'height':'250px'}\" ngModel name=\"body\" ></p-editor>\r\n                             \r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label class=\"control-label col-sm-2\" for=\"pageBody\">Page Body</label>\r\n                          <div class=\"col-sm-10\">\r\n                                \r\n                                <p-editor [style]=\"{'height':'250px'}\" ngModel name=\"pageBody\"></p-editor>\r\n                               \r\n                          </div>\r\n                        </div>\r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"instruction\">Instruction Text</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"instruction\"  name=\"instruction\" ngModel>\r\n                            </div>\r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                        <label class=\"control-label col-sm-2\" for=\"btnlinkText\">Button Text</label>\r\n                        <div class=\"col-sm-10\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"btnlinkText\"  name=\"btnlinkText\" ngModel>\r\n                        </div>\r\n                 </div>\r\n                    \r\n                   \r\n                    <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"duration\">Duration</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"duration\"  name=\"duration\" ngModel>\r\n                            </div>\r\n                            \r\n                     </div>\r\n                     \r\n                     \r\n                    \r\n                   \r\n                    \r\n                    <div class=\"form-group\">        \r\n                      <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\" >Submit</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </form>\r\n        </div>\r\n        <div>\r\n               \r\n        \r\n    </div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n        <div class=\"container\">\r\n            \r\n            <div class=\"header\">\r\n                <h3>My Courses</h3>\r\n                <div class=\"dropdown\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                         Search by\r\n                        </button>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        </div>\r\n                </div>\r\n                <div class=\"icons\">\r\n                      <a (click)=\"showList()\" > <i class=\"fa fa-list\" aria-hidden=\"true\" ></i></a> \r\n                      <a (click)=\"showGrid()\"><i class=\"fa fa-th-large\" aria-hidden=\"true\" ></i></a>  \r\n                </div>\r\n               \r\n            </div>\r\n            <div class=\"row\"  >\r\n                    <div *ngFor=\"let course of courses; let index=index\"  class=\"col col-sm-12 col-md-6 col-lg-3 col-xl-3\">\r\n                       \r\n                            <div class=\"card\" >\r\n                                    <div class=\"card-img-top\">\r\n                                      \r\n                                      \r\n                                          <a routerLink='/content/course'><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\r\n                                          <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\" (click)='deleteCourse(course.number)'></i>\r\n                                     \r\n                                            \r\n                                    </div>\r\n                                       \r\n                                       \r\n                                        <div class=\"card-body\">\r\n                                          <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                          <a  routerLink='/page-structure'><h5 class=\"card-title\">Angular</h5></a>\r\n                                          <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                          \r\n                                          <div class=\"progress\">\r\n                                                <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                </div>\r\n                    </div>\r\n                    <!-- <div class=\"col col-sm-12 col-md-6 col-lg-3 col-xl-3\">\r\n                            <div class=\"card\" >\r\n                                    <div class=\"card-img-top\">\r\n                                            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                            <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                    </div>\r\n                                       \r\n                                       \r\n                                        <div class=\"card-body\">\r\n                                          <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                          <h5 class=\"card-title\">Angular</h5>\r\n                                          <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                          \r\n                                          <div class=\"progress\">\r\n                                                <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                            <div class=\"card\" >\r\n                                    <div class=\"card-img-top\">\r\n                                            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                            <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                    </div>\r\n                                       \r\n                                       \r\n                                        <div class=\"card-body\">\r\n                                          <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                          <h5 class=\"card-title\">Angular</h5>\r\n                                          <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                          \r\n                                          <div class=\"progress\">\r\n                                                <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                            <div class=\"card\" >\r\n                                    <div class=\"card-img-top\">\r\n                                            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                            <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                    </div>\r\n                                       \r\n                                       \r\n                                        <div class=\"card-body\">\r\n                                          <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                          <h5 class=\"card-title\">Angular</h5>\r\n                                          <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                          \r\n                                          <div class=\"progress\">\r\n                                                <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <!-- <div class=\"row\" >\r\n                        <div class=\"col\">\r\n                                <div class=\"card\" >\r\n                                        <div class=\"card-img-top\">\r\n                                                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                                <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                           \r\n                                           \r\n                                            <div class=\"card-body\">\r\n                                              <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                              <h5 class=\"card-title\">Angular</h5>\r\n                                              <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                              \r\n                                              <div class=\"progress\">\r\n                                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                                <div class=\"card\" >\r\n                                        <div class=\"card-img-top\">\r\n                                                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                                <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                           \r\n                                           \r\n                                            <div class=\"card-body\">\r\n                                              <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                              <h5 class=\"card-title\">Angular</h5>\r\n                                              <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                              \r\n                                              <div class=\"progress\">\r\n                                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                                <div class=\"card\" >\r\n                                        <div class=\"card-img-top\">\r\n                                                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                                <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                           \r\n                                           \r\n                                            <div class=\"card-body\">\r\n                                              <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                              <h5 class=\"card-title\">Angular</h5>\r\n                                              <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                              \r\n                                              <div class=\"progress\">\r\n                                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                                <div class=\"card\" >\r\n                                        <div class=\"card-img-top\">\r\n                                                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n                                                <i class=\"fa fa-trash-o\" style=\"float: left;\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                           \r\n                                           \r\n                                            <div class=\"card-body\">\r\n                                              <p class=\"card-text\" style=\"color: #212529;\">Development</p>\r\n                                              <h5 class=\"card-title\">Angular</h5>\r\n                                              <p class=\"card-text\" style=\"margin-top: -9px;\">Updated On 10th October 2019</p>\r\n                                              \r\n                                              <div class=\"progress\">\r\n                                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                    </div>\r\n                        </div>\r\n                      </div> -->\r\n                <div class=\"h-list\" *ngIf= 'visible'>  \r\n                  <div class=\"container tb-heading\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-4\" style=\"text-align-last: center;\">Course Name</div>\r\n                          <div class=\"col-2\">Created On</div>\r\n                          <div class=\"col-2\">Duration</div>\r\n                          <div class=\"col-2\">Lesson</div>\r\n                          <div class=\"col-2\">Progress</div>\r\n                      </div>    \r\n                  </div>  \r\n                      <div class=\"card mb-3\" >\r\n                            <div class=\"row no-gutters\">\r\n                              <div class=\"col-md-2\">\r\n                                <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                              </div>\r\n                              <div class=\"col-md-10\">\r\n                                <div class=\"card-body\">\r\n                                  <h5 class=\"card-title\">Angular <span class=\"badge badge-secondary\">New</span></h5>\r\n                                  <p class=\"card-text\">Web Development</p>\r\n                                  <div class=\"container\">\r\n                                    <div class=\"row row-1\">\r\n                                        <div class=\"col\">11th October 2019</div>\r\n                                        <div class=\"col\">60 minutes</div>\r\n                                        <div class=\"col\" style=\" margin-left: -17px;\">14 Lesson</div>\r\n                                        <div class=\"col\">\r\n                                            <div class=\"progress\">\r\n                                                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                              </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div> \r\n                          <div class=\"card mb-3\" >\r\n                              <div class=\"row no-gutters\">\r\n                                <div class=\"col-md-2\">\r\n                                  <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                </div>\r\n                                <div class=\"col-md-10\">\r\n                                  <div class=\"card-body\">\r\n                                    <h5 class=\"card-title\">Angular <span class=\"badge badge-secondary\">New</span></h5>\r\n                                    <p class=\"card-text\">Web Development</p>\r\n                                    <div class=\"container\">\r\n                                      <div class=\"row row-1\">\r\n                                          <div class=\"col\">11th October 2019</div>\r\n                                          <div class=\"col\">60 minutes</div>\r\n                                          <div class=\"col\" style=\" margin-left: -17px;\">14 Lesson</div>\r\n                                          <div class=\"col\">\r\n                                              <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                </div>\r\n                                          </div>\r\n  \r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div> \r\n                            <div class=\"card mb-3\" >\r\n                                <div class=\"row no-gutters\">\r\n                                  <div class=\"col-md-2\">\r\n                                    <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                  </div>\r\n                                  <div class=\"col-md-10\">\r\n                                    <div class=\"card-body\">\r\n                                      <h5 class=\"card-title\">Angular <span class=\"badge badge-secondary\">New</span></h5>\r\n                                      <p class=\"card-text\">Web Development</p>\r\n                                      <div class=\"container\">\r\n                                        <div class=\"row row-1\">\r\n                                            <div class=\"col\">11th October 2019</div>\r\n                                            <div class=\"col\">60 minutes</div>\r\n                                            <div class=\"col\" style=\" margin-left: -17px;\">14 Lesson</div>\r\n                                            <div class=\"col\">\r\n                                                <div class=\"progress\">\r\n                                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                  </div>\r\n                                            </div>\r\n    \r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div> \r\n                              <div class=\"card mb-3\" >\r\n                                  <div class=\"row no-gutters\">\r\n                                    <div class=\"col-md-2\">\r\n                                      <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                    </div>\r\n                                    <div class=\"col-md-10\">\r\n                                      <div class=\"card-body\">\r\n                                        <h5 class=\"card-title\">Angular <span class=\"badge badge-secondary\">New</span></h5>\r\n                                        <p class=\"card-text\">Web Development</p>\r\n                                        <div class=\"container\">\r\n                                          <div class=\"row row-1\">\r\n                                              <div class=\"col\">11th October 2019</div>\r\n                                              <div class=\"col\">60 minutes</div>\r\n                                              <div class=\"col\" style=\" margin-left: -17px;\">14 Lesson</div>\r\n                                              <div class=\"col\">\r\n                                                  <div class=\"progress\">\r\n                                                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                    </div>\r\n                                              </div>\r\n      \r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div> \r\n                                <div class=\"card mb-3\" >\r\n                                    <div class=\"row no-gutters\">\r\n                                      <div class=\"col-md-2\">\r\n                                        <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                      </div>\r\n                                      <div class=\"col-md-10\">\r\n                                        <div class=\"card-body\">\r\n                                          <h5 class=\"card-title\">Angular <span class=\"badge badge-secondary\">New</span></h5>\r\n                                          <p class=\"card-text\">Web Development</p>\r\n                                          <div class=\"container\">\r\n                                            <div class=\"row row-1\">\r\n                                                <div class=\"col\">11th October 2019</div>\r\n                                                <div class=\"col\">60 minutes</div>\r\n                                                <div class=\"col\" style=\" margin-left: -17px;\">14 Lesson</div>\r\n                                                <div class=\"col\">\r\n                                                    <div class=\"progress\">\r\n                                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                      </div>\r\n                                                </div>\r\n        \r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div> \r\n                                  <div class=\"card mb-3\" >\r\n                                      <div class=\"row no-gutters\">\r\n                                        <div class=\"col-md-2\">\r\n                                          <img src=\"assets/images/2.jpg\" class=\"card-img\" alt=\"...\">\r\n                                        </div>\r\n                                        <div class=\"col-md-10\">\r\n                                          <div class=\"card-body\">\r\n                                            <h5 class=\"card-title\">Angular <span class=\"badge badge-secondary\">New</span></h5>\r\n                                            <p class=\"card-text\">Web Development</p>\r\n                                            <div class=\"container\">\r\n                                              <div class=\"row row-1\">\r\n                                                  <div class=\"col\">11th October 2019</div>\r\n                                                  <div class=\"col\">60 minutes</div>\r\n                                                  <div class=\"col\" style=\" margin-left: -17px;\">14 Lesson</div>\r\n                                                  <div class=\"col\">\r\n                                                      <div class=\"progress\">\r\n                                                          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                        </div>\r\n                                                  </div>\r\n          \r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div> \r\n                          \r\n                    </div> \r\n        </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editor-pane/editor-pane.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor-pane/editor-pane.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditorPaneEditorPaneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n      \r\n        <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" style=\"border: none;\">\r\n                        <div class=\"card\" style=\"height: 60px;\" >\r\n                                <div class=\"card-body\">\r\n                                        <div class=\"dropdown\">\r\n                                                <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                    <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Click To Edit\"></i>\r\n    \r\n                                                </a>\r\n                                              \r\n                                                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                                                  <a class=\"dropdown-item\"routerLink='/content/page'>Edit</a>\r\n                                                  <a class=\"dropdown-item\" href=\"#\">Copy</a>\r\n                                                  \r\n                                                </div>\r\n                                              </div>\r\n                                         \r\n                                      \r\n                                  <h5 class=\"card-title\">Page title</h5>\r\n                                  \r\n                                  \r\n                                </div>\r\n                        </div>\r\n    \r\n                </li>\r\n                \r\n          </ul>\r\n          <ul class=\"list-group\" id=\"article\" style=\"width: 94%;\" >\r\n           \r\n            \r\n                <li class=\"list-group-item\" *ngFor=\"let article of articles; let index=index\">\r\n                    <!-- <a routerLink='/content/article'>\r\n                             <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Edit\" ></i>\r\n                    </a>\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\" style=\"float: right;\"  (click)=\"deleteArticle(articles.number)\"></i>\r\n                        <span class=\"count-numbers\">Article Title</span>\r\n                        <span class=\"count-name\">{{article.number}}</span>  -->\r\n                       <div class=\"card\" style=\"border: none;height: 32px;\">\r\n                                <div class=\"card-body\" style=\"padding: 6px 23px;\">\r\n                                                <div class=\"dropdown\">\r\n                                                        <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                            <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Click To Edit\"></i>\r\n            \r\n                                                        </a>\r\n                                                      \r\n                                                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                                                          <a class=\"dropdown-item\" routerLink='/content/article'>Edit</a>\r\n                                                          <a class=\"dropdown-item\" href=\"#\">Copy</a>\r\n                                                          \r\n                                                        </div>\r\n                                                      </div>\r\n                                                 \r\n                                                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\" style=\"float: right;margin-top: -35px;margin-right: -46px;\" (click)=\"deleteArticle(article.number)\"></i>\r\n  \r\n                                          <h5 class=\"card-title\">Article title</h5>\r\n                                          \r\n                                          \r\n                                        </div>\r\n                       </div>\r\n                        <hr>\r\n                    <ul class=\"list-group\" id=\"block\" >\r\n                        <li class=\"list-group-item\" style=\"border: none;\"  *ngFor=\"let block of blocks; let index=index\" >\r\n                            <!-- <a routerLink='/content/block'>\r\n                                    <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Edit\" ></i>\r\n                           </a>\r\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\" style=\"float: right;\" (click)=\"deleteBlock(blocks.number)\"></i>\r\n                                <span class=\"count-numbers\">Block Title</span>\r\n                                <span class=\"count-name\">{{block.number}}</span>  -->\r\n                                <div class=\"card\" style=\"border: none;height: 58px;\">\r\n                                <div class=\"card-body\" style=\"padding: 0px 4px;\">\r\n                                                <div class=\"dropdown\" >\r\n                                                        <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                                <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Click To Edit\"></i>\r\n                \r\n                                                        </a>\r\n                                                        \r\n                                                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                                                                <a class=\"dropdown-item\"routerLink='/content/block'>Edit</a>\r\n                                                                <a class=\"dropdown-item\" href=\"#\">Copy</a>\r\n                                                                \r\n                                                        </div>\r\n                                                        </div>\r\n                                                        \r\n                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\" style=\"float: right;margin-top: -35px;margin-right: -46px;\" (click)=\"deleteBlock(block.number)\"></i>\r\n        \r\n                                                <h5 class=\"card-title\">Block title - {{block.number}}</h5>\r\n                                                <hr style=\"width: 112%; margin-left: -25px;margin-top: 23px;\">\r\n                                                \r\n                                        </div>\r\n                                        \r\n\r\n                                </div>\r\n                                <ul class=\"list-group\" id=\"component\">\r\n                                        <li class=\"list-group-item\" style=\" text-align: center;\">\r\n                                                   \r\n                                                    <div class=\"card\" style=\"border: none;height: 62px;\" *ngIf=\"visible\">\r\n                                                                <div class=\"card-body\" style=\"padding: 0px 4px;\">\r\n                                                                                <div class=\"dropdown\" style=\"text-align: start; padding: 2px 11px;\">\r\n                                                                                        <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                                                                <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Click To Edit\"></i>\r\n                                                \r\n                                                                                        </a>\r\n                                                                                        \r\n                                                                                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                                                                                                <a class=\"dropdown-item\" (click)='gotoComponentPage(Component, $event)'>Edit</a>\r\n                                                                                                <a class=\"dropdown-item\" href=\"#\">Copy</a>\r\n                                                                                                \r\n                                                                                        </div>\r\n                                                                                        </div>\r\n                                                                                        \r\n                                                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\" style=\"float: right;margin-top: -35px;margin-right: -46px;\" (click)=\"deleteComponent()\"></i>\r\n                                        \r\n                                                                                <h5 class=\"card-title\" style=\"text-align: start; margin-top: -37px;\">{{Component}} </h5>\r\n                                                                                \r\n                                                                                \r\n                                                                        </div>\r\n                                \r\n                                                                </div>\r\n                                                <button type=\"button\" class=\"btn  btn-c\" (click) = 'displayComponentbar()' *ngIf=\"!visible\" [disabled]='this.Component' >Add Component</button>\r\n    \r\n                                        </li>\r\n                                        \r\n                                </ul>\r\n    \r\n                        </li>\r\n                        <button type=\"button\" class=\"btn  btn-b\" (click)=\"addBlock()\">Add Block</button>  \r\n                    </ul>\r\n                  \r\n                </li>\r\n                \r\n            </ul>  \r\n            <button type=\"button\" class=\"btn btn-a\" (click)=\"addArticle()\" >Add Article</button>\r\n        <app-component-sidebar  *ngIf = 'isShow' (addComponent)=\"addComponentHere($event)\"></app-component-sidebar>\r\n            \r\n    </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/articles/articles.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/articles/articles.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseArticlesArticlesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" *ngFor= \"let article of articleContent\">\r\n        <div class=\"card-body article-header\">\r\n        {{article.title}}\r\n        </div>\r\n        <div class=\"card-body article-body\">\r\n           {{article.body}}        \r\n         </div>\r\n         <div class=\"card-body\" >\r\n                <app-blocks [blockContent]= \"block\"></app-blocks>\r\n         </div>\r\n         <!-- <div class=\"card-body\" >\r\n                <app-text [textContent]= \"mainComponent\"></app-text>\r\n      \r\n        </div> -->\r\n        <div class=\"card-body\" >\r\n                <app-graphic [graphicsContent]= \"component\"></app-graphic>\r\n      \r\n        </div>\r\n </div>\r\n \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/blocks/blocks.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/blocks/blocks.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseBlocksBlocksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" id=\"block\" *ngFor =\"let block of blockContent\" >\r\n  <div class=\"card-body block-title\">\r\n    {{block.title}}\r\n  </div>\r\n  <div class=\"card-body block-body\">\r\n     {{block.body}} \r\n  </div>\r\n  \r\n  \r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/components.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/components.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseComponentsComponentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>components works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/graphic/graphic.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/graphic/graphic.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseComponentsGraphicGraphicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"card\" id=\"page\" *ngFor =\"let photo of graphicsContent\"  >\r\n  <div class=\"card-body graphics-title\" >\r\n   {{photo.title}}\r\n  </div>\r\n  <div class=\"card-body graphics-inner\">\r\n      {{photo.body}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <img [src]=\"graphics_id\" alt=\"\">\r\n      {{photo.graphics_id}}\r\n    </div>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/text/text.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/text/text.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseComponentsTextTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" id=\"text\" *ngFor =\"let text of textContent\" >\r\n  <div class=\"card-body text-title\">\r\n    {{text.title}}\r\n  </div>\r\n  <div class=\"card-body text-body\">\r\n     {{text.body}} \r\n  </div>\r\n  \r\n  \r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/course-object/course-object.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/course-object/course-object.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseCourseObjectCourseObjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pages [pageContent]=\"page1\"></app-pages>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/courses/courses.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/courses/courses.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseCoursesCoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                    <div class=\"card\" *ngFor='let content of course' >\r\n                            <div class=\"card-body\">\r\n                              <h5 class=\"card-title\">{{content.title}}</h5>\r\n                              <h6 class=\"card-subtitle mb-2 text-muted\">{{content.tags}} </h6>\r\n                              <p class=\"card-text\">{{content.body}}</p>\r\n                             \r\n                            </div>\r\n                    </div>\r\n\r\n            </div>\r\n         \r\n</div>   \r\n<div class=\"cont-2\"  >\r\n        <div class=\"row\"  >\r\n                <div class=\"col col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n                   \r\n                    <div class=\"card \" *ngFor= 'let pages of page1'  >\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\" > {{pages.title}}</h5>\r\n                            <p class=\"card-text\" >\r\n                                {{pages.body}}\r\n                            </p>\r\n                             <div class=\"btnLink\" (click)='goToPage()' routerLink='/final-course/course-object'>\r\n                                 <a  style=\" color: #fff;\">{{pages.btnlinkText}}</a>\r\n                             </div>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                                \r\n                    </div>\r\n                </div>\r\n                <div class=\"col col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n                   \r\n                        <div class=\"card \" *ngFor= 'let pages of page1'  >\r\n                            <div class=\"card-body\">\r\n                                <h5 class=\"card-title\" > {{pages.title}}</h5>\r\n                                <p class=\"card-text\" >\r\n                                    {{pages.body}}\r\n                                </p>\r\n                                 <div class=\"btnLink\" (click)='goToPage()' routerLink='/final-course/course-object'>\r\n                                     <a  style=\" color: #fff;\">{{pages.btnlinkText}}</a>\r\n                                 </div>\r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                </div>\r\n                            </div>\r\n                                    \r\n                        </div>\r\n                    </div>\r\n              \r\n                       \r\n              </div>\r\n</div> \r\n<app-course-object></app-course-object>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/final-course.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/final-course.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCourseFinalCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <!-- <span id=\"learnername\"> {{learnername}}</span> -->\r\n        <!-- <app-courses [courseContent]='course'></app-courses> -->\r\n        <router-outlet></router-outlet>\r\n            \r\n\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/pages/pages.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/pages/pages.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalCoursePagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"card\" id=\"page\" *ngFor= 'let pages of pageContent'  >\r\n    <div class=\"card-body page-title\" >\r\n     {{pages.title}}\r\n    </div>\r\n    <div class=\"card-body page-inner\">\r\n        {{pages.pageBody}}\r\n      </div>\r\n      \r\n  </div>\r\n  <app-articles [articleContent]=\"article\" >\r\n   \r\n  </app-articles>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-structure/page-structure.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-structure/page-structure.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageStructurePageStructureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <div class=\"btn-grp\">\r\n        <button type=\"button\" class=\"btn btn-1\" (click)=\"addPage()\">Add Page</button>\r\n        <button type=\"button\" class=\"btn btn-2\">Add Submenu</button>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n            <li class=\"list-group-item\" *ngFor=\"let page of pages; let index=index\">\r\n                  \r\n                        <div class=\"card\" >\r\n                            <div class=\"card-body\">\r\n                                    <div class=\"dropdown\">\r\n                                            <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-cog\" aria-hidden=\"true\" title=\"Click To Edit\"></i>\r\n\r\n                                            </a>\r\n                                          \r\n                                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                                              <a class=\"dropdown-item\" routerLink='/content/page'>Edit</a>\r\n                                              <a class=\"dropdown-item\" href=\"#\">Copy</a>\r\n                                              \r\n                                            </div>\r\n                                          </div>\r\n                                     \r\n                               <i class=\"fa fa-trash-o\" aria-hidden=\"true\" style=\"float: right;margin-top: -35px;\" (click)=\"deletePage(pages.number)\"></i>\r\n                            <a routerLink='/editor-pane'>  \r\n                              <h5 class=\"card-title\">Page title</h5>\r\n                              <h6 class=\"card-subtitle mb-2 text-muted\">{{page.number}}</h6>\r\n                            </a>\r\n                            </div>\r\n                    </div>\r\n                  \r\n\r\n            </li>\r\n            \r\n      </ul>\r\n        \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _content_course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./content/course/course.component */
    "./src/app/content/course/course.component.ts");
    /* harmony import */


    var _content_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./content/page/page.component */
    "./src/app/content/page/page.component.ts");
    /* harmony import */


    var _content_article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./content/article/article.component */
    "./src/app/content/article/article.component.ts");
    /* harmony import */


    var _content_block_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./content/block/block.component */
    "./src/app/content/block/block.component.ts");
    /* harmony import */


    var _component_content_component_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component-content/component-content.component */
    "./src/app/component-content/component-content.component.ts");
    /* harmony import */


    var _component_content_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component-content/graphics/graphics.component */
    "./src/app/component-content/graphics/graphics.component.ts");
    /* harmony import */


    var _component_content_text_box_text_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component-content/text-box/text-box.component */
    "./src/app/component-content/text-box/text-box.component.ts");
    /* harmony import */


    var _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./page-structure/page-structure.component */
    "./src/app/page-structure/page-structure.component.ts");
    /* harmony import */


    var _editor_pane_editor_pane_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./editor-pane/editor-pane.component */
    "./src/app/editor-pane/editor-pane.component.ts");
    /* harmony import */


    var _component_sidebar_component_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component-sidebar/component-sidebar.component */
    "./src/app/component-sidebar/component-sidebar.component.ts");
    /* harmony import */


    var _final_course_final_course_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./final-course/final-course.component */
    "./src/app/final-course/final-course.component.ts");
    /* harmony import */


    var _final_course_pages_pages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./final-course/pages/pages.component */
    "./src/app/final-course/pages/pages.component.ts");
    /* harmony import */


    var _final_course_articles_articles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./final-course/articles/articles.component */
    "./src/app/final-course/articles/articles.component.ts");
    /* harmony import */


    var _final_course_blocks_blocks_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./final-course/blocks/blocks.component */
    "./src/app/final-course/blocks/blocks.component.ts");
    /* harmony import */


    var _final_course_components_components_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./final-course/components/components.component */
    "./src/app/final-course/components/components.component.ts");
    /* harmony import */


    var _final_course_courses_courses_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./final-course/courses/courses.component */
    "./src/app/final-course/courses/courses.component.ts");
    /* harmony import */


    var _final_course_components_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./final-course/components/graphic/graphic.component */
    "./src/app/final-course/components/graphic/graphic.component.ts");
    /* harmony import */


    var _final_course_components_text_text_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./final-course/components/text/text.component */
    "./src/app/final-course/components/text/text.component.ts");
    /* harmony import */


    var _final_course_course_object_course_object_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./final-course/course-object/course-object.component */
    "./src/app/final-course/course-object/course-object.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'component-sidebar',
      component: _component_sidebar_component_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["ComponentSidebarComponent"]
    }, {
      path: 'editor-pane',
      component: _editor_pane_editor_pane_component__WEBPACK_IMPORTED_MODULE_13__["EditorPaneComponent"]
    }, {
      path: 'page-structure',
      component: _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_12__["PageStructureComponent"]
    }, {
      path: 'content',
      component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
      children: [{
        path: 'page',
        component: _content_page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"]
      }, {
        path: 'article',
        component: _content_article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"]
      }, {
        path: 'block',
        component: _content_block_block_component__WEBPACK_IMPORTED_MODULE_8__["BlockComponent"]
      }, {
        path: 'course',
        component: _content_course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"]
      }]
    }, {
      path: 'final-course',
      component: _final_course_final_course_component__WEBPACK_IMPORTED_MODULE_15__["FinalCourseComponent"],
      children: [{
        path: 'pages',
        component: _final_course_pages_pages_component__WEBPACK_IMPORTED_MODULE_16__["PagesComponent"]
      }, {
        path: 'articles',
        component: _final_course_articles_articles_component__WEBPACK_IMPORTED_MODULE_17__["ArticlesComponent"]
      }, {
        path: 'blocks',
        component: _final_course_blocks_blocks_component__WEBPACK_IMPORTED_MODULE_18__["BlocksComponent"]
      }, {
        path: 'courses',
        component: _final_course_courses_courses_component__WEBPACK_IMPORTED_MODULE_20__["CoursesComponent"]
      }, {
        path: 'course-object',
        component: _final_course_course_object_course_object_component__WEBPACK_IMPORTED_MODULE_23__["CourseObjectComponent"]
      }, {
        path: 'components',
        component: _final_course_components_components_component__WEBPACK_IMPORTED_MODULE_19__["ComponentsComponent"],
        children: [{
          path: 'graphic',
          component: _final_course_components_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_21__["GraphicComponent"]
        }, {
          path: 'text',
          component: _final_course_components_text_text_component__WEBPACK_IMPORTED_MODULE_22__["TextComponent"]
        }]
      }]
    }, {
      path: 'component-content',
      component: _component_content_component_content_component__WEBPACK_IMPORTED_MODULE_9__["ComponentContentComponent"],
      children: [{
        path: 'graphics',
        component: _component_content_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_10__["GraphicsComponent"]
      }, {
        path: 'text-box',
        component: _component_content_text_box_text_box_component__WEBPACK_IMPORTED_MODULE_11__["TextBoxComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700\";\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 999;\n  background: #fff;\n  color: #000;\n  transition: all 0.3s;\n  border-right: 1px solid #8e939b;\n}\n#sidebar.active {\n  margin-left: -250px;\n}\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #ffffff;\n  color: #000;\n}\n.sidebar-header h6 {\n  margin-left: 3px;\n}\n.sidebar-header .fa {\n  float: right;\n  margin-top: -27px;\n}\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar ul li a:hover {\n  text-decoration: none;\n}\n.list-data li {\n  line-height: 11px;\n}\n.list-data, .list-input {\n  margin-top: 27px;\n  margin-left: -23px;\n}\n.list-input li {\n  line-height: 15px;\n  padding: 7px 9px;\n  font-size: 12px;\n}\n.list-input li a {\n  margin-left: -9px;\n}\n.list-input li input[type=text] {\n  width: 88%;\n}\n.list {\n  font-family: Lato;\n  font-size: 11px;\n  color: black;\n  list-style-type: none;\n}\n.list a {\n  color: black !important;\n}\n.list a:hover {\n  color: #007bff !important;\n}\nul.CTAs {\n  padding: 20px;\n}\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\nli a.addnew {\n  background: #373d47;\n  color: #fff;\n  border-radius: 4px;\n  width: 90%;\n  cursor: pointer;\n}\n.btn-group {\n  position: relative;\n  display: inline-flex;\n  /* vertical-align: middle; */\n  width: 88%;\n  margin-left: -15px;\n  height: 25px;\n  background: white;\n}\n.btn-group .btn {\n  position: relative;\n  flex: 1 1 auto;\n  background: white;\n  color: black;\n  padding: 0px;\n  font-size: 13px;\n  font-family: Lato;\n  cursor: pointer;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  font-size: 13px;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-menu {\n  width: 100%;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n  width: calc(100% - 250px);\n  padding: 40px;\n  min-height: 100vh;\n  transition: all 0.3s;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n#content.active {\n  width: 100%;\n}\n.page-content {\n  width: calc(100vw - 250px);\n  float: right;\n  height: 100vh;\n  padding: 1% 2%;\n}\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -250px;\n  }\n\n  #sidebar.active {\n    margin-left: 0;\n  }\n\n  #content {\n    width: 100%;\n  }\n\n  #content.active {\n    width: calc(100% - 250px);\n  }\n\n  #sidebarCollapse span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRUFBQTtBQUlSOzt1REFBQTtBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQ0ZKO0FES0E7RUFDSSxtQkFBQTtBQ0ZKO0FETUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSEo7QURLQTtFQUNJLGdCQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FET0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSko7QURNQTtFQUVJLHFCQUFBO0FDSko7QURRQTtFQUNJLGlCQUFBO0FDTEo7QURRQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE9BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKSjtBRE9BO0VBQ0ksaUJBQUE7QUNKSjtBRE1BO0VBQ0ksVUFBQTtBQ0hKO0FEUUM7RUFDRyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNMSjtBRFNBO0VBQ0ksdUJBQUE7QUNOSjtBRFFBO0VBQ0kseUJBQUE7QUNMSjtBRFNBO0VBQ0ksYUFBQTtBQ05KO0FEU0E7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0xKO0FEU0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQ0xKO0FET0E7RUFDSSxXQUFBO0FDSko7QURVQTs7dURBQUE7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDUEo7QURTQTtFQUNJLFdBQUE7QUNOSjtBRFNBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNOSjtBRFVBOzt1REFBQTtBQUdBO0VBQ0k7SUFDSSxtQkFBQTtFQ1BOOztFRFNFO0lBQ0ksY0FBQTtFQ05OOztFRFFFO0lBQ0ksV0FBQTtFQ0xOOztFRE9FO0lBQ0kseUJBQUE7RUNKTjs7RURNRTtJQUNJLGFBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiNzaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ZTkzOWI7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICBcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnNpZGViYXItaGVhZGVyIGg2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIC5mYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xyXG59XHJcblxyXG5cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzM3M2Q0NztcclxufVxyXG5cclxuLmxpc3QtZGF0YSBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuXHJcbn1cclxuLmxpc3QtZGF0YSwgLmxpc3QtaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yM3B4O1xyXG59XHJcbi5saXN0LWlucHV0IGxpe1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggOXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxufVxyXG4ubGlzdC1pbnB1dCBsaSBhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbn1cclxuLmxpc3QtaW5wdXQgbGkgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgIHdpZHRoOiA4OCU7XHJcbn1cclxuXHJcblxyXG5cclxuIC5saXN0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuXHJcbn1cclxuLmxpc3QgYXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxudWwuQ1RBcyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxubGkgYS5hZGRuZXcge1xyXG4gICAgYmFja2dyb3VuZDogIzM3M2Q0NztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmJ0bi1ncm91cHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uYnRuLWdyb3VwIC5idG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW0gMS41cmVtO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ09OVEVOVCBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jY29udGVudCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4jY29udGVudC5hY3RpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNTBweCk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMSUgMiU7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIE1FRElBUVVFUklFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgICNjb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgICNjb250ZW50LmFjdGl2ZSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICAgIH1cclxuICAgICNzaWRlYmFyQ29sbGFwc2Ugc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgU0lERUJBUiBTVFlMRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiNzaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ZTkzOWI7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG59XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc2lkZWJhci1oZWFkZXIgaDYge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uc2lkZWJhci1oZWFkZXIgLmZhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMjdweDtcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubGlzdC1kYXRhIGxpIHtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG5cbi5saXN0LWRhdGEsIC5saXN0LWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjdweDtcbiAgbWFyZ2luLWxlZnQ6IC0yM3B4O1xufVxuXG4ubGlzdC1pbnB1dCBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiA3cHggOXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5saXN0LWlucHV0IGxpIGEge1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cblxuLmxpc3QtaW5wdXQgbGkgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5saXN0IHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5saXN0IGEge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmxpc3QgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbnVsLkNUQXMge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG51bC5DVEFzIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5saSBhLmFkZG5ldyB7XG4gIGJhY2tncm91bmQ6ICMzNzNkNDc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJ0bi1ncm91cCAuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENPTlRFTlQgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4jY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jY29udGVudC5hY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDElIDIlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBNRURJQVFVRVJJRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG4gIH1cblxuICAjc2lkZWJhci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI2NvbnRlbnQuYWN0aXZlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICB9XG5cbiAgI3NpZGViYXJDb2xsYXBzZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/layout.service */
    "./src/app/services/layout.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(layoutService) {
        _classCallCheck(this, AppComponent);

        this.layoutService = layoutService;
        this.addcourse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = 'learning-tool';
      }

      _createClass(AppComponent, [{
        key: "sendData",
        value: function sendData() {
          this.course = localStorage.getItem('course'); // this.page=localStorage.getItem("page");

          console.log("getting data on clicking priview button", this.course);
          this.layoutService.PageContentAdded.next(this.course);
        }
      }, {
        key: "addCourse",
        value: function addCourse() {
          console.log('add new clicked');
          this.getvalue = localStorage.getItem('**course**');
          console.log(this.getvalue);
          this.layoutService.courseAdded.next();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppComponent.prototype, "addcourse", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _content_course_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./content/course/course.component */
    "./src/app/content/course/course.component.ts");
    /* harmony import */


    var _content_page_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./content/page/page.component */
    "./src/app/content/page/page.component.ts");
    /* harmony import */


    var _content_article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./content/article/article.component */
    "./src/app/content/article/article.component.ts");
    /* harmony import */


    var _content_block_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./content/block/block.component */
    "./src/app/content/block/block.component.ts");
    /* harmony import */


    var _component_content_component_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./component-content/component-content.component */
    "./src/app/component-content/component-content.component.ts");
    /* harmony import */


    var _component_content_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component-content/graphics/graphics.component */
    "./src/app/component-content/graphics/graphics.component.ts");
    /* harmony import */


    var _component_content_text_box_text_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./component-content/text-box/text-box.component */
    "./src/app/component-content/text-box/text-box.component.ts");
    /* harmony import */


    var _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./page-structure/page-structure.component */
    "./src/app/page-structure/page-structure.component.ts");
    /* harmony import */


    var _editor_pane_editor_pane_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./editor-pane/editor-pane.component */
    "./src/app/editor-pane/editor-pane.component.ts");
    /* harmony import */


    var _component_sidebar_component_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./component-sidebar/component-sidebar.component */
    "./src/app/component-sidebar/component-sidebar.component.ts");
    /* harmony import */


    var _final_course_final_course_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./final-course/final-course.component */
    "./src/app/final-course/final-course.component.ts");
    /* harmony import */


    var _final_course_pages_pages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./final-course/pages/pages.component */
    "./src/app/final-course/pages/pages.component.ts");
    /* harmony import */


    var _final_course_articles_articles_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./final-course/articles/articles.component */
    "./src/app/final-course/articles/articles.component.ts");
    /* harmony import */


    var _final_course_blocks_blocks_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./final-course/blocks/blocks.component */
    "./src/app/final-course/blocks/blocks.component.ts");
    /* harmony import */


    var _final_course_courses_courses_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./final-course/courses/courses.component */
    "./src/app/final-course/courses/courses.component.ts");
    /* harmony import */


    var _final_course_components_components_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./final-course/components/components.component */
    "./src/app/final-course/components/components.component.ts");
    /* harmony import */


    var _final_course_components_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./final-course/components/graphic/graphic.component */
    "./src/app/final-course/components/graphic/graphic.component.ts");
    /* harmony import */


    var _final_course_components_text_text_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./final-course/components/text/text.component */
    "./src/app/final-course/components/text/text.component.ts");
    /* harmony import */


    var primeng_editor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! primeng/editor */
    "./node_modules/primeng/editor.js");
    /* harmony import */


    var primeng_editor__WEBPACK_IMPORTED_MODULE_27___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_27__);
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_28___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_28__);
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/checkbox.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_29___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_29__);
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/breadcrumb.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30__);
    /* harmony import */


    var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./breadcrumbs/breadcrumbs.component */
    "./src/app/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _final_course_course_object_course_object_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./final-course/course-object/course-object.component */
    "./src/app/final-course/course-object/course-object.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"], _content_course_course_component__WEBPACK_IMPORTED_MODULE_9__["CourseComponent"], _content_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"], _content_article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"], _content_block_block_component__WEBPACK_IMPORTED_MODULE_12__["BlockComponent"], _component_content_component_content_component__WEBPACK_IMPORTED_MODULE_13__["ComponentContentComponent"], _component_content_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_14__["GraphicsComponent"], _component_content_text_box_text_box_component__WEBPACK_IMPORTED_MODULE_15__["TextBoxComponent"], _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_16__["PageStructureComponent"], _editor_pane_editor_pane_component__WEBPACK_IMPORTED_MODULE_17__["EditorPaneComponent"], _component_sidebar_component_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["ComponentSidebarComponent"], _final_course_final_course_component__WEBPACK_IMPORTED_MODULE_19__["FinalCourseComponent"], _final_course_pages_pages_component__WEBPACK_IMPORTED_MODULE_20__["PagesComponent"], _final_course_articles_articles_component__WEBPACK_IMPORTED_MODULE_21__["ArticlesComponent"], _final_course_courses_courses_component__WEBPACK_IMPORTED_MODULE_23__["CoursesComponent"], _final_course_blocks_blocks_component__WEBPACK_IMPORTED_MODULE_22__["BlocksComponent"], _final_course_components_components_component__WEBPACK_IMPORTED_MODULE_24__["ComponentsComponent"], _final_course_components_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_25__["GraphicComponent"], _final_course_components_text_text_component__WEBPACK_IMPORTED_MODULE_26__["TextComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_31__["BreadcrumbsComponent"], _final_course_course_object_course_object_component__WEBPACK_IMPORTED_MODULE_32__["CourseObjectComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], primeng_editor__WEBPACK_IMPORTED_MODULE_27__["EditorModule"], primeng_button__WEBPACK_IMPORTED_MODULE_28__["ButtonModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30__["BreadcrumbModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_29__["CheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/breadcrumbs/breadcrumbs.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/breadcrumbs/breadcrumbs.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBreadcrumbsBreadcrumbsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/breadcrumbs/breadcrumbs.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/breadcrumbs/breadcrumbs.component.ts ***!
    \******************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcAppBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/layout.service */
    "./src/app/services/layout.service.ts");

    var BreadcrumbsComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbsComponent(_router, layoutService) {
        _classCallCheck(this, BreadcrumbsComponent);

        this._router = _router;
        this.layoutService = layoutService;
        this.pageLocation = [];
        this.breadcrumbList = [];
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageLocation = this.layoutService.getPageLocation();
          this.listenRouting();
        }
      }, {
        key: "listenRouting",
        value: function listenRouting() {
          var _this = this;

          var routerUrl, routerList, target;

          this._router.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;

            if (routerUrl && typeof routerUrl === 'string') {
              target = _this.pageLocation;
              _this.breadcrumbList.length = 0;
              routerList = routerUrl.slice(1).split('/');
              routerList.forEach(function (router, index) {
                target = target.find(function (page) {
                  return page.path.slice(2) === router;
                });

                _this.breadcrumbList.push({
                  name: target.name,
                  path: index === 0 ? target.path : "".concat(_this.breadcrumbList[index - 1].path, "/").concat(target.path.slice(2))
                });

                if (index + 1 !== routerList.length) {
                  target = target.children;
                }
              });
              console.log(_this.breadcrumbList);
            }
          });
        }
      }]);

      return BreadcrumbsComponent;
    }();

    BreadcrumbsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
      }];
    };

    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumbs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumbs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/breadcrumbs/breadcrumbs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumbs.component.scss */
      "./src/app/breadcrumbs/breadcrumbs.component.scss")).default]
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/app/component-content/component-content.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/component-content/component-content.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentContentComponentContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC1jb250ZW50L2NvbXBvbmVudC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component-content/component-content.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component-content/component-content.component.ts ***!
    \******************************************************************/

  /*! exports provided: ComponentContentComponent */

  /***/
  function srcAppComponentContentComponentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentContentComponent", function () {
      return ComponentContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComponentContentComponent =
    /*#__PURE__*/
    function () {
      function ComponentContentComponent() {
        _classCallCheck(this, ComponentContentComponent);
      }

      _createClass(ComponentContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentContentComponent;
    }();

    ComponentContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-component-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./component-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/component-content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./component-content.component.scss */
      "./src/app/component-content/component-content.component.scss")).default]
    })], ComponentContentComponent);
    /***/
  },

  /***/
  "./src/app/component-content/graphics/graphics.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/component-content/graphics/graphics.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentContentGraphicsGraphicsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h6 {\n  font-family: \"lato\";\n  font-size: 15px;\n  padding: 14px 0px;\n  font-weight: 900;\n  margin-top: 6%;\n}\n\n.graphicsCompForm {\n  margin-left: -3%;\n  margin-top: 3%;\n}\n\n.graphicsCompForm .control-label {\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.graphicsCompForm .checkbox {\n  font-family: lato;\n  font-size: 13px;\n}\n\n.graphicsCompForm .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n\n.graphicsCompForm .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.graphicsCompForm .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n  margin-left: -56%;\n}\n\n.graphicsCompForm .contact-form button {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50LWNvbnRlbnQvZ3JhcGhpY3MvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxjb21wb25lbnQtY29udGVudFxcZ3JhcGhpY3NcXGdyYXBoaWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQtY29udGVudC9ncmFwaGljcy9ncmFwaGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0M7RUFDRyxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURESTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERTO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0diOztBRERTO0VBQ0csV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0daOztBREdTO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQtY29udGVudC9ncmFwaGljcy9ncmFwaGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIgaDZ7XHJcbiAgICBmb250LWZhbWlseTogJ2xhdG8nO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTRweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbn1cclxuIC5ncmFwaGljc0NvbXBGb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgIH1cclxuICAgIC5jaGVja2JveHtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgICAgICBcclxuICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICB3aWRvd3M6IDE1JTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xyXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0MnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU2JTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29udGFjdC1mb3JtIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3M2Q0NztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIi5oZWFkZXIgaDYge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG4uZ3JhcGhpY3NDb21wRm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAtMyU7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuLmdyYXBoaWNzQ29tcEZvcm0gLmNvbnRyb2wtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ncmFwaGljc0NvbXBGb3JtIC5jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZ3JhcGhpY3NDb21wRm9ybSAuZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNSU7XG59XG4uZ3JhcGhpY3NDb21wRm9ybSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB3aWRvd3M6IDE1JTtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZ3JhcGhpY3NDb21wRm9ybSAuZHJvcGRvd24gLmJ0bi1zZWNvbmRhcnkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xuICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDVweCA0MnB4O1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tbGVmdDogLTU2JTtcbn1cbi5ncmFwaGljc0NvbXBGb3JtIC5jb250YWN0LWZvcm0gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzM3M2Q0NztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/component-content/graphics/graphics.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component-content/graphics/graphics.component.ts ***!
    \******************************************************************/

  /*! exports provided: GraphicsComponent */

  /***/
  function srcAppComponentContentGraphicsGraphicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphicsComponent", function () {
      return GraphicsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var GraphicsComponent =
    /*#__PURE__*/
    function () {
      function GraphicsComponent(layoutService) {
        _classCallCheck(this, GraphicsComponent);

        this.layoutService = layoutService;
      }

      _createClass(GraphicsComponent, [{
        key: "uploadImage",
        value: function uploadImage($event) {
          this.reader = new FileReader();
          this.name = $event.target.files[0].name;
          this.reader.addEventListener("load", function () {
            if (this.result && localStorage) {
              console.log(typeof this.result);
              localStorage.setItem('name', JSON.stringify(this.result));
            } else {
              alert();
            }
          });
          this.reader.readAsDataURL($event.target.files[0]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SubmitItem",
        value: function SubmitItem(graphicsCompForm) {
          console.log(graphicsCompForm.value);
          this.layoutService.addGraphics(graphicsCompForm.value);
          console.log(JSON.stringify(graphicsCompForm.value));
          localStorage.setItem("GraphicsComponentItem", JSON.stringify(graphicsCompForm.value));
        }
      }, {
        key: "graphics",
        get: function get() {
          return this.layoutService.graphics;
        }
      }]);

      return GraphicsComponent;
    }();

    GraphicsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    GraphicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graphics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graphics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/graphics/graphics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./graphics.component.scss */
      "./src/app/component-content/graphics/graphics.component.scss")).default]
    })], GraphicsComponent);
    /***/
  },

  /***/
  "./src/app/component-content/text-box/text-box.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/component-content/text-box/text-box.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentContentTextBoxTextBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h6 {\n  font-family: \"lato\";\n  font-size: 15px;\n  padding: 14px 0px;\n  font-weight: 900;\n  margin-top: 6%;\n}\n\n.textForm {\n  margin-left: -3%;\n  margin-top: 3%;\n}\n\n.textForm .control-label {\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.textForm .checkbox {\n  font-family: lato;\n  font-size: 13px;\n}\n\n.textForm .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n\n.textForm .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.textForm .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n  margin-left: -56%;\n}\n\n.textForm .contact-form button {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50LWNvbnRlbnQvdGV4dC1ib3gvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxjb21wb25lbnQtY29udGVudFxcdGV4dC1ib3hcXHRleHQtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQtY29udGVudC90ZXh0LWJveC90ZXh0LWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0M7RUFDRyxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURESTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERTO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0diOztBRERTO0VBQ0csV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0daOztBREdTO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQtY29udGVudC90ZXh0LWJveC90ZXh0LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIgaDZ7XHJcbiAgICBmb250LWZhbWlseTogJ2xhdG8nO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTRweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbn1cclxuIC50ZXh0Rm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIC5jb250cm9sLWxhYmVse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICB9XHJcbiAgICAuY2hlY2tib3h7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3due1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgd2lkb3dzOiAxNSU7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xhdG8nO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggI2RkZGJkYjtcclxuICAgICAgICAgICAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01NiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmNvbnRhY3QtZm9ybSBidXR0b257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzNkNDc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIH1cclxufVxyXG4iLCIuaGVhZGVyIGg2IHtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDE0cHggMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiA2JTtcbn1cblxuLnRleHRGb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4udGV4dEZvcm0gLmNvbnRyb2wtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi50ZXh0Rm9ybSAuY2hlY2tib3gge1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnRleHRGb3JtIC5kcm9wZG93biB7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC01JTtcbn1cbi50ZXh0Rm9ybSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB3aWRvd3M6IDE1JTtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4udGV4dEZvcm0gLmRyb3Bkb3duIC5idG4tc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggI2RkZGJkYjtcbiAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA1cHggNDJweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC01NiU7XG59XG4udGV4dEZvcm0gLmNvbnRhY3QtZm9ybSBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDkwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component-content/text-box/text-box.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component-content/text-box/text-box.component.ts ***!
    \******************************************************************/

  /*! exports provided: TextBoxComponent */

  /***/
  function srcAppComponentContentTextBoxTextBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextBoxComponent", function () {
      return TextBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TextBoxComponent =
    /*#__PURE__*/
    function () {
      function TextBoxComponent() {
        _classCallCheck(this, TextBoxComponent);
      }

      _createClass(TextBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TextBoxComponent;
    }();

    TextBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component-content/text-box/text-box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text-box.component.scss */
      "./src/app/component-content/text-box/text-box.component.scss")).default]
    })], TextBoxComponent);
    /***/
  },

  /***/
  "./src/app/component-sidebar/component-sidebar.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/component-sidebar/component-sidebar.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentSidebarComponentSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700\";\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  z-index: 999;\n  background: #fff;\n  color: #000;\n  transition: all 0.3s;\n  border-left: 1px solid #8e939b;\n  transition: width 2s;\n}\n#sidebar.active {\n  margin-left: -250px;\n}\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #ffffff;\n  color: #000;\n}\n.sidebar-header h6 {\n  margin-left: 3px;\n}\n.sidebar-header .fa {\n  float: right;\n  margin-top: -27px;\n}\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar ul li a:hover {\n  text-decoration: none;\n}\n.list-data li {\n  line-height: 11px;\n}\n.list-data, .list-input {\n  margin-top: 27px;\n  margin-left: -23px;\n}\n.list-input li {\n  line-height: 15px;\n  padding: 7px 9px;\n  font-size: 12px;\n}\n.list-input li a {\n  margin-left: -9px;\n}\n.list-input li input[type=text] {\n  width: 88%;\n}\n.list {\n  font-family: Lato;\n  font-size: 11px;\n  color: black;\n  list-style-type: none;\n}\n.list a {\n  color: black !important;\n}\n.list a:hover {\n  color: #007bff !important;\n}\nul.CTAs {\n  padding: 0px;\n}\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\nli a.addnew {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n.btn-group {\n  position: relative;\n  display: inline-flex;\n  /* vertical-align: middle; */\n  width: 88%;\n  margin-left: -15px;\n  height: 25px;\n  background: white;\n}\n.btn-group .btn {\n  position: relative;\n  flex: 1 1 auto;\n  background: white;\n  color: black;\n  padding: 0px;\n  font-size: 13px;\n  font-family: Lato;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  font-size: 13px;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-menu {\n  width: 100%;\n}\n.card {\n  border: none;\n  border-radius: 0px;\n  padding: 3px 1px;\n}\n.card-header {\n  border-radius: 0px;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: none;\n}\n.card-header .btn-link {\n  font-weight: 900;\n  color: #000;\n  font-family: lato;\n  font-size: 12px;\n  text-decoration: none;\n  margin-left: -24%;\n  margin-top: -9px;\n}\n.card-header .card-img {\n  width: 100%;\n  height: 41px;\n  border-radius: 0px;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n  width: calc(100% - 250px);\n  padding: 40px;\n  min-height: 100vh;\n  transition: all 0.3s;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n#content.active {\n  width: 100%;\n}\n.page-content {\n  width: calc(100vw - 250px);\n  float: right;\n  height: 100vh;\n  padding: 1% 2%;\n}\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -250px;\n  }\n\n  #sidebar.active {\n    margin-left: 0;\n  }\n\n  #content {\n    width: 100%;\n  }\n\n  #content.active {\n    width: calc(100% - 250px);\n  }\n\n  #sidebarCollapse span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50LXNpZGViYXIvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxjb21wb25lbnQtc2lkZWJhclxcY29tcG9uZW50LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC1zaWRlYmFyL2NvbXBvbmVudC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBFQUFBO0FBSVI7O3VEQUFBO0FBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUNGSjtBREtBO0VBQ0ksbUJBQUE7QUNGSjtBRE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0hKO0FES0E7RUFDSSxnQkFBQTtBQ0ZKO0FES0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRE9BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FETUE7RUFFSSxxQkFBQTtBQ0pKO0FEUUE7RUFDSSxpQkFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSko7QURPQTtFQUNJLGlCQUFBO0FDSko7QURNQTtFQUNJLFVBQUE7QUNISjtBRFFDO0VBQ0csaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDTEo7QURTQTtFQUNJLHVCQUFBO0FDTko7QURRQTtFQUNJLHlCQUFBO0FDTEo7QURTQTtFQUNJLFlBQUE7QUNOSjtBRFNBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7QURRQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0xKO0FEU0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FDTEo7QURPQTtFQUNJLFdBQUE7QUNKSjtBRE9BO0VBQ0ksWUFBQTtFQUNILGtCQUFBO0VBQ0EsZ0JBQUE7QUNKRDtBRE9BO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQyxtQkFBQTtBQ0pMO0FETUs7RUFDRyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRE1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQyxrQkFBQTtBQ0pUO0FEVUE7O3VEQUFBO0FBR0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ1BKO0FEU0E7RUFDSSxXQUFBO0FDTko7QURTQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDTko7QURVQTs7dURBQUE7QUFHQTtFQUNJO0lBQ0ksbUJBQUE7RUNQTjs7RURTRTtJQUNJLGNBQUE7RUNOTjs7RURRRTtJQUNJLFdBQUE7RUNMTjs7RURPRTtJQUNJLHlCQUFBO0VDSk47O0VETUU7SUFDSSxhQUFBO0VDSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC1zaWRlYmFyL2NvbXBvbmVudC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiNzaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOGU5MzliO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnM7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICBcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnNpZGViYXItaGVhZGVyIGg2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIC5mYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xyXG59XHJcblxyXG5cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzM3M2Q0NztcclxufVxyXG5cclxuLmxpc3QtZGF0YSBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuXHJcbn1cclxuLmxpc3QtZGF0YSwgLmxpc3QtaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yM3B4O1xyXG59XHJcbi5saXN0LWlucHV0IGxpe1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggOXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxufVxyXG4ubGlzdC1pbnB1dCBsaSBhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbn1cclxuLmxpc3QtaW5wdXQgbGkgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgIHdpZHRoOiA4OCU7XHJcbn1cclxuXHJcblxyXG5cclxuIC5saXN0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuXHJcbn1cclxuLmxpc3QgYXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxudWwuQ1RBcyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5saSBhLmFkZG5ldyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmJ0bi1ncm91cHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uYnRuLWdyb3VwIC5idG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcblxyXG59XHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW0gMS41cmVtO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5jYXJke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gcGFkZGluZzogM3B4IDFweDtcclxuICAgXHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcclxuICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG5cclxuICAgICAuYnRuLWxpbmsge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI0JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuI2NvbnRlbnQuYWN0aXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDElIDIlO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBNRURJQVFVRVJJRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjc2lkZWJhciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgIH1cclxuICAgICNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAjY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjY29udGVudC5hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4jc2lkZWJhciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOGU5MzliO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAycztcbn1cblxuI3NpZGViYXIuYWN0aXZlIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbn1cblxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zaWRlYmFyLWhlYWRlciBoNiB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5zaWRlYmFyLWhlYWRlciAuZmEge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0yN3B4O1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5saXN0LWRhdGEgbGkge1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cblxuLmxpc3QtZGF0YSwgLmxpc3QtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBtYXJnaW4tbGVmdDogLTIzcHg7XG59XG5cbi5saXN0LWlucHV0IGxpIHtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDdweCA5cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxpc3QtaW5wdXQgbGkgYSB7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuXG4ubGlzdC1pbnB1dCBsaSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmxpc3Qge1xuICBmb250LWZhbWlseTogTGF0bztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmxpc3QgYSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubGlzdCBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxudWwuQ1RBcyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxudWwuQ1RBcyBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxubGkgYS5hZGRuZXcge1xuICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJ0bi1ncm91cCAuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDEuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiAzcHggMXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jYXJkLWhlYWRlciAuYnRuLWxpbmsge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IGxhdG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tbGVmdDogLTI0JTtcbiAgbWFyZ2luLXRvcDogLTlweDtcbn1cbi5jYXJkLWhlYWRlciAuY2FyZC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENPTlRFTlQgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4jY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jY29udGVudC5hY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDElIDIlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBNRURJQVFVRVJJRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG4gIH1cblxuICAjc2lkZWJhci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI2NvbnRlbnQuYWN0aXZlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICB9XG5cbiAgI3NpZGViYXJDb2xsYXBzZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/component-sidebar/component-sidebar.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component-sidebar/component-sidebar.component.ts ***!
    \******************************************************************/

  /*! exports provided: ComponentSidebarComponent */

  /***/
  function srcAppComponentSidebarComponentSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentSidebarComponent", function () {
      return ComponentSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComponentSidebarComponent =
    /*#__PURE__*/
    function () {
      function ComponentSidebarComponent() {
        _classCallCheck(this, ComponentSidebarComponent);

        this.addComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isShow = true;
        this.graphicComp = 'Graphics';
        this.textComp = 'Text';
      }

      _createClass(ComponentSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hideComponentbar",
        value: function hideComponentbar() {
          this.isShow = !this.isShow;
        }
      }, {
        key: "addGraphics",
        value: function addGraphics() {
          this.addComponent.emit(this.graphicComp);
        }
      }, {
        key: "addTextBox",
        value: function addTextBox() {
          this.addComponent.emit(this.textComp);
        }
      }]);

      return ComponentSidebarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ComponentSidebarComponent.prototype, "addComponent", void 0);
    ComponentSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-component-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./component-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component-sidebar/component-sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./component-sidebar.component.scss */
      "./src/app/component-sidebar/component-sidebar.component.scss")).default]
    })], ComponentSidebarComponent);
    /***/
  },

  /***/
  "./src/app/content/article/article.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/content/article/article.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentArticleArticleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h6 {\n  font-family: \"lato\";\n  font-size: 15px;\n  padding: 14px 0px;\n  font-weight: 900;\n  margin-top: 6%;\n}\n\n.myArticleForm {\n  margin-left: -3%;\n  margin-top: 3%;\n}\n\n.myArticleForm .control-label {\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myArticleForm .checkbox {\n  font-family: lato;\n  font-size: 13px;\n}\n\n.myArticleForm .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n\n.myArticleForm .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myArticleForm .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n  margin-left: -56%;\n}\n\n.myArticleForm .contact-form button {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hcnRpY2xlL0Q6XFxGaW5hbEF1dGhvcmluZ1Rvb2xTY29ybVdyYXBwZXJcXGxlYXJuaW5ndG9vbC1zY29ybS9zcmNcXGFwcFxcY29udGVudFxcYXJ0aWNsZVxcYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENDO0VBQ0csZ0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEREk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHUjs7QUREUztFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNHYjs7QUREUztFQUNHLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHWjs7QURHUztFQUNHLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbiAubXlBcnRpY2xlRm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIC5jb250cm9sLWxhYmVse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICB9XHJcbiAgICAuY2hlY2tib3h7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3due1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgd2lkb3dzOiAxNSU7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xhdG8nO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggI2RkZGJkYjtcclxuICAgICAgICAgICAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01NiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmNvbnRhY3QtZm9ybSBidXR0b257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzNkNDc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIH1cclxufVxyXG4iLCIuaGVhZGVyIGg2IHtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDE0cHggMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiA2JTtcbn1cblxuLm15QXJ0aWNsZUZvcm0ge1xuICBtYXJnaW4tbGVmdDogLTMlO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cbi5teUFydGljbGVGb3JtIC5jb250cm9sLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlBcnRpY2xlRm9ybSAuY2hlY2tib3gge1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm15QXJ0aWNsZUZvcm0gLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTUlO1xufVxuLm15QXJ0aWNsZUZvcm0gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkb3dzOiAxNSU7XG4gIGZvbnQtZmFtaWx5OiBcImxhdG9cIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm15QXJ0aWNsZUZvcm0gLmRyb3Bkb3duIC5idG4tc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggI2RkZGJkYjtcbiAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA1cHggNDJweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC01NiU7XG59XG4ubXlBcnRpY2xlRm9ybSAuY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzNzNkNDc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogOTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/article/article.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/content/article/article.component.ts ***!
    \******************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppContentArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var ArticleComponent =
    /*#__PURE__*/
    function () {
      function ArticleComponent(layoutService) {
        _classCallCheck(this, ArticleComponent);

        this.layoutService = layoutService;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SubmitItem",
        value: function SubmitItem(myArticleForm) {
          this.layoutService.addArticle(myArticleForm.value);
          console.log(JSON.stringify(myArticleForm.value));
          localStorage.setItem("ArticleItem", JSON.stringify(myArticleForm.value)); // return JSON.stringify(this.model);
        }
      }, {
        key: "article",
        get: function get() {
          return this.layoutService.article;
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/article/article.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article.component.scss */
      "./src/app/content/article/article.component.scss")).default]
    })], ArticleComponent);
    /***/
  },

  /***/
  "./src/app/content/block/block.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/content/block/block.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentBlockBlockComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h6 {\n  font-family: \"lato\";\n  font-size: 15px;\n  padding: 14px 0px;\n  font-weight: 900;\n  margin-top: 6%;\n}\n\n.myBlockForm {\n  margin-left: -3%;\n  margin-top: 3%;\n}\n\n.myBlockForm .control-label {\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myBlockForm .checkbox {\n  font-family: lato;\n  font-size: 13px;\n}\n\n.myBlockForm .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n\n.myBlockForm .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myBlockForm .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n  margin-left: -56%;\n}\n\n.myBlockForm .contact-form button {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ibG9jay9EOlxcRmluYWxBdXRob3JpbmdUb29sU2Nvcm1XcmFwcGVyXFxsZWFybmluZ3Rvb2wtc2Nvcm0vc3JjXFxhcHBcXGNvbnRlbnRcXGJsb2NrXFxibG9jay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9ibG9jay9ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0M7RUFDRyxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURESTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERTO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0diOztBRERTO0VBQ0csV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0daOztBREdTO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciBoNntcclxuICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG4gLm15QmxvY2tGb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgIH1cclxuICAgIC5jaGVja2JveHtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgICAgICBcclxuICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICB3aWRvd3M6IDE1JTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xyXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0MnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU2JTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29udGFjdC1mb3JtIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3M2Q0NztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIi5oZWFkZXIgaDYge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG4ubXlCbG9ja0Zvcm0ge1xuICBtYXJnaW4tbGVmdDogLTMlO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cbi5teUJsb2NrRm9ybSAuY29udHJvbC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcImxhdG9cIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm15QmxvY2tGb3JtIC5jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlCbG9ja0Zvcm0gLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTUlO1xufVxuLm15QmxvY2tGb3JtIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIHdpZG93czogMTUlO1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5teUJsb2NrRm9ybSAuZHJvcGRvd24gLmJ0bi1zZWNvbmRhcnkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xuICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDVweCA0MnB4O1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tbGVmdDogLTU2JTtcbn1cbi5teUJsb2NrRm9ybSAuY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzNzNkNDc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogOTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/block/block.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/content/block/block.component.ts ***!
    \**************************************************/

  /*! exports provided: BlockComponent */

  /***/
  function srcAppContentBlockBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockComponent", function () {
      return BlockComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var BlockComponent =
    /*#__PURE__*/
    function () {
      function BlockComponent(layoutService) {
        _classCallCheck(this, BlockComponent);

        this.layoutService = layoutService;
      }

      _createClass(BlockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SubmitItem",
        value: function SubmitItem(myBlockForm) {
          this.layoutService.addBlock(myBlockForm.value);
          console.log(JSON.stringify(myBlockForm.value));
          localStorage.setItem("BlockItem", JSON.stringify(myBlockForm.value)); // return JSON.stringify(this.model);
        }
      }, {
        key: "block",
        get: function get() {
          return this.layoutService.block;
        }
      }]);

      return BlockComponent;
    }();

    BlockComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-block',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./block.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/block/block.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./block.component.scss */
      "./src/app/content/block/block.component.scss")).default]
    })], BlockComponent);
    /***/
  },

  /***/
  "./src/app/content/content.component.scss":
  /*!************************************************!*\
    !*** ./src/app/content/content.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContentComponent =
    /*#__PURE__*/
    function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content.component.scss */
      "./src/app/content/content.component.scss")).default]
    })], ContentComponent);
    /***/
  },

  /***/
  "./src/app/content/course/course.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/content/course/course.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentCourseCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h6 {\n  font-family: \"lato\";\n  font-size: 15px;\n  padding: 14px 0px;\n  font-weight: 900;\n  margin-top: 6%;\n}\n\n.myCourseForm {\n  margin-left: -3%;\n  margin-top: 3%;\n}\n\n.myCourseForm .control-label {\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myCourseForm .checkbox {\n  font-family: lato;\n  font-size: 13px;\n}\n\n.myCourseForm .select {\n  float: right;\n  margin-top: -6%;\n  margin-right: 61%;\n  font-family: lato;\n  font-size: 13px;\n  padding: 2px;\n}\n\n.myCourseForm .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n\n.myCourseForm .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myCourseForm .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n  margin-left: -56%;\n}\n\n.myCourseForm .contact-form button {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb3Vyc2UvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxjb250ZW50XFxjb3Vyc2VcXGNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQztFQUNHLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLFlBQUE7RUFDSixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERTO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0diOztBRERTO0VBQ0csV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0daOztBREdTO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbiAubXlDb3Vyc2VGb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgIH1cclxuICAgIC5jaGVja2JveHtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC02JTtcclxuICAgIG1hcmdpbi1yaWdodDogNjElO1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgICAgICBcclxuICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICB3aWRvd3M6IDE1JTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xyXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0MnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU2JTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29udGFjdC1mb3JtIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3M2Q0NztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIi5oZWFkZXIgaDYge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG4ubXlDb3Vyc2VGb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4ubXlDb3Vyc2VGb3JtIC5jb250cm9sLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlDb3Vyc2VGb3JtIC5jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlDb3Vyc2VGb3JtIC5zZWxlY3Qge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC02JTtcbiAgbWFyZ2luLXJpZ2h0OiA2MSU7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5teUNvdXJzZUZvcm0gLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTUlO1xufVxuLm15Q291cnNlRm9ybSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB3aWRvd3M6IDE1JTtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlDb3Vyc2VGb3JtIC5kcm9wZG93biAuYnRuLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICNkZGRiZGI7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cbiAgZm9udC1mYW1pbHk6IGxhdG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNXB4IDQycHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAtNTYlO1xufVxuLm15Q291cnNlRm9ybSAuY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzNzNkNDc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogOTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/course/course.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/content/course/course.component.ts ***!
    \****************************************************/

  /*! exports provided: CourseComponent */

  /***/
  function srcAppContentCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
      return CourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var CourseComponent =
    /*#__PURE__*/
    function () {
      function CourseComponent(layoutService) {
        _classCallCheck(this, CourseComponent);

        this.layoutService = layoutService;
        this.data = [{
          id: 0,
          name: "Custom"
        }, {
          id: 1,
          name: "Lock Last"
        }, {
          id: 2,
          name: "Unlock First"
        }, {
          id: 3,
          name: "Sequential"
        }];
      }

      _createClass(CourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SubmitItem",
        value: function SubmitItem(myCourseForm) {
          this.layoutService.addCourses(myCourseForm.value);
          console.log(JSON.stringify(myCourseForm.value));
          localStorage.setItem("CourseItem", JSON.stringify(myCourseForm.value)); // return JSON.stringify(this.model);
        }
      }, {
        key: "selected",
        value: function selected() {
          console.log(this.selectedLevel.name);
        }
      }, {
        key: "course",
        get: function get() {
          return this.layoutService.course;
        }
      }]);

      return CourseComponent;
    }();

    CourseComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/course/course.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course.component.scss */
      "./src/app/content/course/course.component.scss")).default]
    })], CourseComponent);
    /***/
  },

  /***/
  "./src/app/content/page/page.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/content/page/page.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentPagePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header h6 {\n  font-family: \"lato\";\n  font-size: 15px;\n  padding: 14px 0px;\n  font-weight: 900;\n  margin-top: 6%;\n}\n\n.myForm {\n  margin-left: -3%;\n  margin-top: 3%;\n}\n\n.myForm .control-label {\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myForm .checkbox {\n  font-family: lato;\n  font-size: 13px;\n}\n\n.myForm .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n\n.myForm .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n\n.myForm .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n  margin-left: -56%;\n}\n\n.myForm .contact-form button {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9wYWdlL0Q6XFxGaW5hbEF1dGhvcmluZ1Rvb2xTY29ybVdyYXBwZXJcXGxlYXJuaW5ndG9vbC1zY29ybS9zcmNcXGFwcFxcY29udGVudFxccGFnZVxccGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9wYWdlL3BhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENDO0VBQ0csZ0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEREk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHUjs7QUREUztFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNHYjs7QUREUztFQUNHLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHWjs7QURHUztFQUNHLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wYWdlL3BhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbiAubXlGb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgIH1cclxuICAgIC5jaGVja2JveHtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgICAgICBcclxuICAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgICB3aWRvd3M6IDE1JTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xyXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0MnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU2JTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29udGFjdC1mb3JtIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3M2Q0NztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIi5oZWFkZXIgaDYge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG4ubXlGb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4ubXlGb3JtIC5jb250cm9sLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlGb3JtIC5jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlGb3JtIC5kcm9wZG93biB7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC01JTtcbn1cbi5teUZvcm0gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkb3dzOiAxNSU7XG4gIGZvbnQtZmFtaWx5OiBcImxhdG9cIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm15Rm9ybSAuZHJvcGRvd24gLmJ0bi1zZWNvbmRhcnkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xuICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDVweCA0MnB4O1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tbGVmdDogLTU2JTtcbn1cbi5teUZvcm0gLmNvbnRhY3QtZm9ybSBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDkwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/content/page/page.component.ts":
  /*!************************************************!*\
    !*** ./src/app/content/page/page.component.ts ***!
    \************************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppContentPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var PageComponent =
    /*#__PURE__*/
    function () {
      function PageComponent(layoutService) {
        _classCallCheck(this, PageComponent);

        this.layoutService = layoutService;
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SubmitItem",
        value: function SubmitItem(myForm) {
          this.layoutService.addPage(myForm.value);
          console.log(JSON.stringify(myForm.value));
          localStorage.setItem("PageItem", JSON.stringify(myForm.value)); // return JSON.stringify(this.model);
        }
      }, {
        key: "page",
        get: function get() {
          return this.layoutService.page;
        }
      }]);

      return PageComponent;
    }();

    PageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/page/page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page.component.scss */
      "./src/app/content/page/page.component.scss")).default]
    })], PageComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  margin-top: -10%;\n  margin-left: 1%;\n  margin-right: 1%;\n}\n.wrapper .container {\n  margin-top: 9%;\n  margin-left: -2%;\n}\n.row {\n  margin-top: 13px;\n}\n.card {\n  border-radius: 6px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-shadow: 5px 5px 5px #dddbdb;\n}\n.card .card-body {\n  margin-top: -17px;\n  margin-left: -8px;\n}\n.card .card-title {\n  margin-bottom: 0.75rem;\n  font-weight: 700;\n  color: #212529;\n}\n.card .card-text {\n  font-family: lato;\n  font-size: 10px;\n  margin: 1px;\n  color: #B5B5B5;\n}\n.card-img-top {\n  background-image: url(\"/assets/images/2.jpg\");\n  background-size: cover;\n  height: 120px;\n  border-radius: 6px 6px 0px 0px;\n  opacity: 0.7;\n}\n.card-img-top .fa {\n  font-size: 20px;\n  float: right;\n  padding: 12px;\n  color: white;\n}\n.progress {\n  display: flex;\n  height: 7px;\n  width: 103%;\n  margin-top: 18px;\n  margin-bottom: -8px;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress .bg-primary {\n  background-color: #6c63ff !important;\n}\n.header {\n  margin-top: 7%;\n}\n.header .icons {\n  margin-top: -7%;\n  float: right;\n}\n.header .icons .fa {\n  padding: 7px 12px;\n  font-size: 20px;\n}\n.header .dropdown {\n  margin-bottom: 4%;\n  text-align: center;\n  margin-top: -5%;\n}\n.header .dropdown .dropdown-menu {\n  widows: 15%;\n  font-family: \"lato\";\n  font-size: 13px;\n}\n.header .dropdown .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border: none;\n  box-shadow: 3px 3px 3px #dddbdb;\n  /* border-radius: 4px; */\n  font-family: lato;\n  font-size: 13px;\n  padding: 5px 42px;\n  width: 15%;\n}\n.header h3 {\n  font-family: \"lato\";\n  font-size: 25px;\n  padding: 14px 0px;\n  font-weight: 900;\n}\n.h-list .card {\n  height: 91px;\n  width: 99%;\n  border-radius: 0px;\n}\n.h-list .card-title {\n  font-weight: 700;\n  color: #212529;\n  margin-left: -7%;\n  font-size: 14px;\n  margin-top: 12px;\n  font-family: lato;\n}\n.h-list .card-title .badge {\n  border-radius: 0%;\n}\n.h-list .card-title .badge-secondary {\n  color: #000;\n  background-color: #B5B5B5;\n}\n.h-list .row-1 {\n  margin-left: 17%;\n  margin-top: -4%;\n  font-family: lato;\n  font-size: 12px;\n  font-weight: 600;\n}\n.h-list .row-1 .progress {\n  display: flex;\n  height: 11px;\n  width: 103%;\n  margin-top: 4px;\n  margin-left: -23%;\n  margin-bottom: -8px;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 1.25rem;\n}\n.h-list .row-1 .progress .progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #B5B5B5;\n  transition: width 0.6s ease;\n  width: 25%;\n}\n.h-list .card-text {\n  margin-left: -7%;\n  margin-top: -1%;\n}\n.h-list .card-img {\n  height: 126%;\n  width: 50%;\n  padding: 3px 3px;\n  margin: -6px 22px;\n}\n.h-list .tb-heading .row {\n  margin-top: 13px;\n  font-family: lato;\n  padding: 20px 0px;\n  color: #B5B5B5;\n  font-size: 16px;\n  font-weight: 500;\n}\n.h-list .tb-heading .row .col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n  margin-left: -2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxGaW5hbEF1dGhvcmluZ1Rvb2xTY29ybVdyYXBwZXJcXGxlYXJuaW5ndG9vbC1zY29ybS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0VBQ0osZ0JBQUE7QUNFSjtBREdBO0VBQ0ksZ0JBQUE7QUNBSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtFQUNKLGlCQUFBO0FDRUo7QURBSTtFQUNJLHNCQUFBO0VBQ0osZ0JBQUE7RUFDQSxjQUFBO0FDRUo7QURDSTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0o7QURFQTtFQUVJLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQUo7QURHSTtFQUNJLGVBQUE7RUFDSixZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDREo7QURFSTtFQUNJLG9DQUFBO0FDQVI7QURHQTtFQUNJLGNBQUE7QUNBSjtBRENJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRVo7QURDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ1I7QURDUztFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDYjtBREdRO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNEWjtBREtBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FETUk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDSFI7QURNSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKUjtBREtRO0VBQ0ksaUJBQUE7QUNIWjtBREtRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDSFo7QURNSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSlI7QURLUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNIWjtBREtZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDSGhCO0FET0k7RUFDSSxnQkFBQTtFQUNKLGVBQUE7QUNMSjtBRE9JO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTFI7QURRUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOWjtBRFFnQjtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ05wQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIG1hcmdpbi10b3A6IC0xMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA5JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICNkZGRiZGI7XHJcbiAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGNvbG9yOiAjQjVCNUI1O1xyXG4gICAgfVxyXG59XHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvMi5qcGcnKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIFxyXG5cclxuICAgIC5mYXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi5wcm9ncmVzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICB3aWR0aDogMTAzJTtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIC5iZy1wcmltYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2M2ZmIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uaGVhZGVye1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICAuaWNvbnN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTclO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAuZmF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3due1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgd2lkb3dzOiAxNSU7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xhdG8nO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGRkYmRiO1xyXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0MnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaGVhZGVyIGgze1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmgtbGlzdHtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogOTFweDtcclxuICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgIC5iYWRnZXtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWRnZS1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I1QjVCNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93LTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgLnByb2dyZXNze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDMlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjMlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XHJcblxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjVCNUI1O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjZzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTclO1xyXG4gICAgbWFyZ2luLXRvcDogLTElO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEyNiU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAzcHggM3B4O1xyXG4gICAgICAgIG1hcmdpbjogLTZweCAyMnB4O1xyXG4gICAgfVxyXG4gICAgLnRiLWhlYWRpbmd7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0I1QjVCNTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY29sLTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxNi42NjY2NjclO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTYuNjY2NjY3JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIud3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA5JTtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggI2RkZGJkYjtcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLmNhcmQgLmNhcmQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMXB4O1xuICBjb2xvcjogI0I1QjVCNTtcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzLzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5jYXJkLWltZy10b3AgLmZhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3cHg7XG4gIHdpZHRoOiAxMDMlO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4ucHJvZ3Jlc3MgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2M2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cbi5oZWFkZXIgLmljb25zIHtcbiAgbWFyZ2luLXRvcDogLTclO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaGVhZGVyIC5pY29ucyAuZmEge1xuICBwYWRkaW5nOiA3cHggMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmhlYWRlciAuZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNSU7XG59XG4uaGVhZGVyIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIHdpZG93czogMTUlO1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5oZWFkZXIgLmRyb3Bkb3duIC5idG4tc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggI2RkZGJkYjtcbiAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA1cHggNDJweDtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmhlYWRlciBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcImxhdG9cIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAxNHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmgtbGlzdCAuY2FyZCB7XG4gIGhlaWdodDogOTFweDtcbiAgd2lkdGg6IDk5JTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmgtbGlzdCAuY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBtYXJnaW4tbGVmdDogLTclO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xufVxuLmgtbGlzdCAuY2FyZC10aXRsZSAuYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiAwJTtcbn1cbi5oLWxpc3QgLmNhcmQtdGl0bGUgLmJhZGdlLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjVCNUI1O1xufVxuLmgtbGlzdCAucm93LTEge1xuICBtYXJnaW4tbGVmdDogMTclO1xuICBtYXJnaW4tdG9wOiAtNCU7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaC1saXN0IC5yb3ctMSAucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDExcHg7XG4gIHdpZHRoOiAxMDMlO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjMlO1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG59XG4uaC1saXN0IC5yb3ctMSAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjVCNUI1O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XG4gIHdpZHRoOiAyNSU7XG59XG4uaC1saXN0IC5jYXJkLXRleHQge1xuICBtYXJnaW4tbGVmdDogLTclO1xuICBtYXJnaW4tdG9wOiAtMSU7XG59XG4uaC1saXN0IC5jYXJkLWltZyB7XG4gIGhlaWdodDogMTI2JTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogM3B4IDNweDtcbiAgbWFyZ2luOiAtNnB4IDIycHg7XG59XG4uaC1saXN0IC50Yi1oZWFkaW5nIC5yb3cge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LWZhbWlseTogbGF0bztcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGNvbG9yOiAjQjVCNUI1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaC1saXN0IC50Yi1oZWFkaW5nIC5yb3cgLmNvbC0yIHtcbiAgZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gIG1heC13aWR0aDogMTYuNjY2NjY3JTtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(layoutService) {
        _classCallCheck(this, DashboardComponent);

        this.layoutService = layoutService;
        this.visible = false;
        this.courses = [{
          "number": "Course 1"
        }];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.layoutService.courseAdded.subscribe(function (courses) {
            _this2.store = localStorage.setItem('**course**', JSON.stringify(_this2.courses.push({
              "number": "Course " + (_this2.courses.length + 1)
            })));
            _this2.getvalue = localStorage.getItem('**course**');
            console.log(_this2.getvalue);
          });
        }
      }, {
        key: "showList",
        value: function showList() {
          console.log("show list");
          this.visible = !this.visible;
        }
      }, {
        key: "showGrid",
        value: function showGrid() {
          console.log("show grid");
          this.visible = this.visible;
        }
      }, {
        key: "addCourse",
        value: function addCourse($event) {
          this.Course = $event;
          console.log("this.Course", this.Course);
          this.addNewCourse();
        }
      }, {
        key: "addNewCourse",
        value: function addNewCourse() {
          this.courses.push({
            "number": "Course " + (this.courses.length + 1)
          });
          console.log('hey', this.courses.length);
        }
      }, {
        key: "deleteCourse",
        value: function deleteCourse(number) {
          this.courses.splice(this.courses.findIndex(function (course) {
            return course.number === number;
          }), 1);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/editor-pane/editor-pane.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/editor-pane/editor-pane.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditorPaneEditorPaneComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  margin-top: 77px;\n}\n.wrapper .list-group-item {\n  border: 0px;\n  margin-bottom: 7px;\n}\n.wrapper .list-group-item .card {\n  width: 98%;\n  margin-left: -19px;\n}\n.wrapper .list-group-item .card .card-title {\n  margin-top: -36px;\n  margin-left: 57px;\n  font-size: 15px;\n}\n.wrapper .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border-color: #fff;\n  margin-top: -14px;\n  margin-left: -16px;\n  padding: 13px 13px;\n}\n.wrapper .btn-secondary :focus {\n  box-shadow: none;\n}\n.wrapper .list-group hr {\n  width: 104%;\n  margin-left: -20px;\n}\n.wrapper .list-group .list-group-item {\n  border: 1px solid #B5B5B5;\n}\n.wrapper .btn-a, .wrapper .btn-b {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 16%;\n}\n.wrapper .btn-a {\n  margin-top: 12px;\n  margin: 1% 39%;\n}\n.wrapper .btn-b {\n  margin: 0% 41%;\n  width: 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yLXBhbmUvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxlZGl0b3ItcGFuZVxcZWRpdG9yLXBhbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci1wYW5lL2VkaXRvci1wYW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxpQkFBQTtFQUNELGlCQUFBO0VBQ0EsZUFBQTtBQ0VmO0FER0k7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQyxrQkFBQTtFQUNELGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FESVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBREtLO0VBQ0csbUJBQUE7RUFDSixXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDSEo7QURPSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0xSO0FEUUk7RUFDSSxjQUFBO0VBQ0osVUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yLXBhbmUvZWRpdG9yLXBhbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIG1hcmdpbi10b3A6IDc3cHg7XHJcbiAgICBcclxuICAgIC5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgXHJcbiAgICAgICAgLmNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTlweDtcclxuICAgICAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDU3cHg7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXNlY29uZGFyeSA6Zm9jdXN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3Vwe1xyXG4gICAgICAgIGhye1xyXG4gICAgICAgICAgICB3aWR0aDogMTA0JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjVCNUI1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAuYnRuLWEgLC5idG4tYntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDE2JTtcclxuICAgIFxyXG4gICBcclxuICAgIH1cclxuICAgIC5idG4tYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtYXJnaW46IDElIDM5JTtcclxuXHJcbiAgICB9XHJcbiAgICAuYnRuLWJ7XHJcbiAgICAgICAgbWFyZ2luOiAwJSA0MSU7XHJcbiAgICB3aWR0aDogMTclO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxufSIsIi53cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNzdweDtcbn1cbi53cmFwcGVyIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLndyYXBwZXIgLmxpc3QtZ3JvdXAtaXRlbSAuY2FyZCB7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTlweDtcbn1cbi53cmFwcGVyIC5saXN0LWdyb3VwLWl0ZW0gLmNhcmQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDU3cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi53cmFwcGVyIC5idG4tc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgcGFkZGluZzogMTNweCAxM3B4O1xufVxuLndyYXBwZXIgLmJ0bi1zZWNvbmRhcnkgOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi53cmFwcGVyIC5saXN0LWdyb3VwIGhyIHtcbiAgd2lkdGg6IDEwNCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cbi53cmFwcGVyIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjVCNUI1O1xufVxuLndyYXBwZXIgLmJ0bi1hLCAud3JhcHBlciAuYnRuLWIge1xuICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDE2JTtcbn1cbi53cmFwcGVyIC5idG4tYSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbjogMSUgMzklO1xufVxuLndyYXBwZXIgLmJ0bi1iIHtcbiAgbWFyZ2luOiAwJSA0MSU7XG4gIHdpZHRoOiAxNyU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor-pane/editor-pane.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/editor-pane/editor-pane.component.ts ***!
    \******************************************************/

  /*! exports provided: EditorPaneComponent */

  /***/
  function srcAppEditorPaneEditorPaneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorPaneComponent", function () {
      return EditorPaneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditorPaneComponent =
    /*#__PURE__*/
    function () {
      function EditorPaneComponent(route, router) {
        _classCallCheck(this, EditorPaneComponent);

        this.route = route;
        this.router = router;
        this.articles = [{
          "number": "Article 1"
        }];
        this.blocks = [{
          "number": "Block 1"
        }];
        this.isShow = false;
        this.visible = false;
      }

      _createClass(EditorPaneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addArticle",
        value: function addArticle() {
          this.articles.push({
            "number": "Article " + (this.articles.length + 1)
          });
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(number) {
          this.articles.splice(this.articles.findIndex(function (article) {
            return article.number === number;
          }), 1);
        }
      }, {
        key: "addBlock",
        value: function addBlock() {
          this.blocks.push({
            "number": "Block " + (this.blocks.length + 1)
          });
        }
      }, {
        key: "deleteBlock",
        value: function deleteBlock(number) {
          console.log(number);
          this.blocks.splice(this.blocks.findIndex(function (block) {
            return block.number === number;
          }), 1);
        }
      }, {
        key: "deleteComponent",
        value: function deleteComponent() {
          return this.Component.slice();
        }
      }, {
        key: "displayComponentbar",
        value: function displayComponentbar() {
          this.isShow = !this.isShow;
        }
      }, {
        key: "addComponentHere",
        value: function addComponentHere($event) {
          this.Component = $event;
          console.log(this.Component);
          this.visible = true;
          this.isShow = false;
        }
      }, {
        key: "gotoComponentPage",
        value: function gotoComponentPage(component) {
          console.log(component);

          if (component === 'Text') {
            this.router.navigate(['/component-content/text-box']);
          } else if (component === 'Graphics') {
            this.router.navigate(['/component-content/graphics']);
          } else {
            console.log('no page found');
          }
        }
      }]);

      return EditorPaneComponent;
    }();

    EditorPaneComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EditorPaneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editor-pane',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editor-pane.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editor-pane/editor-pane.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editor-pane.component.scss */
      "./src/app/editor-pane/editor-pane.component.scss")).default]
    })], EditorPaneComponent);
    /***/
  },

  /***/
  "./src/app/final-course/articles/articles.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/final-course/articles/articles.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseArticlesArticlesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  width: 94% !important;\n  margin-left: 4% !important;\n  border-radius: 0px;\n  margin: 30px auto;\n}\n\n.article-header {\n  color: black;\n  font-family: lato;\n  font-size: 50px;\n}\n\n.article-body {\n  color: black;\n  font-family: lato;\n  font-size: 20px;\n  padding: 2px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY291cnNlL2FydGljbGVzL0Q6XFxGaW5hbEF1dGhvcmluZ1Rvb2xTY29ybVdyYXBwZXJcXGxlYXJuaW5ndG9vbC1zY29ybS9zcmNcXGFwcFxcZmluYWwtY291cnNlXFxhcnRpY2xlc1xcYXJ0aWNsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0EsMEJBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0FDRko7O0FESUE7RUFFSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRko7O0FESUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgXHJcbiAgICB3aWR0aDogOTQlIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG4uYXJ0aWNsZS1oZWFkZXJ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4uYXJ0aWNsZS1ib2R5e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggMjRweDtcclxufSIsIi5jYXJkIHtcbiAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmFydGljbGUtaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uYXJ0aWNsZS1ib2R5IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAycHggMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/final-course/articles/articles.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/final-course/articles/articles.component.ts ***!
    \*************************************************************/

  /*! exports provided: ArticlesComponent */

  /***/
  function srcAppFinalCourseArticlesArticlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function () {
      return ArticlesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ArticlesComponent =
    /*#__PURE__*/
    function () {
      function ArticlesComponent(layoutService, route, router) {
        _classCallCheck(this, ArticlesComponent);

        this.layoutService = layoutService;
        this.route = route;
        this.router = router;
      }

      _createClass(ArticlesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.layoutService.PageContentAdded.subscribe(function (data) {
            // this.page=  this.pageContent.push(data);
            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this3.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this3.course); //COURSE

              _this3.page = _this3.course[0];
              console.log('page', _this3.page['_childInfo']);
              _this3.page1 = _this3.page['_childInfo'];
              console.log("page1", _this3.page1[0]);
              _this3.pages = _this3.page1[0]; //PAGE

              _this3.article = _this3.pages['_childInfo'];
              _this3.articles = _this3.article[0]; //ARTICLE

              console.log('this.articles', _this3.articles);
              _this3.block = _this3.articles['_childInfo'];
              _this3.blocks = _this3.block[0];
              console.log('this.blocks', _this3.blocks); //BLOCK

              _this3.component = _this3.blocks['_childInfo'];
              console.log('this.component', _this3.component);
              _this3.components = _this3.component[0];
              console.log('this.components', _this3.components); //Component
              // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];
              // console.log(typeof this.pages);
            } else {
              console.log("No page array found");
            }
          }); //   this.serviceService.ArticleContentAdded.subscribe((_article)=>{
          //     console.log("final course data",this.route.snapshot.paramMap.get('id'));
          //   this.articleData=this.route.snapshot.paramMap.get('id');
          //   this.article = JSON.parse(this.articleData);
          //   _article = this.article;
          //   console.log("_article", this.article);
          //   this.articleContent.push(_article);
          //  });
        }
      }]);

      return ArticlesComponent;
    }();

    ArticlesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArticlesComponent.prototype, "articleContent", void 0);
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-articles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/articles/articles.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articles.component.scss */
      "./src/app/final-course/articles/articles.component.scss")).default]
    })], ArticlesComponent);
    /***/
  },

  /***/
  "./src/app/final-course/blocks/blocks.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/final-course/blocks/blocks.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseBlocksBlocksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  border: none;\n}\n\n.block-title {\n  color: #000;\n  font-family: lato;\n  font-size: 50px;\n}\n\n.block-body {\n  color: #000;\n  font-family: lato;\n  font-size: 20px;\n  padding: 2px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY291cnNlL2Jsb2Nrcy9EOlxcRmluYWxBdXRob3JpbmdUb29sU2Nvcm1XcmFwcGVyXFxsZWFybmluZ3Rvb2wtc2Nvcm0vc3JjXFxhcHBcXGZpbmFsLWNvdXJzZVxcYmxvY2tzXFxibG9ja3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9ibG9ja3MvYmxvY2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBTUksWUFBQTtBQ0pKOztBRE1BO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pBOztBRE1BO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSEEiLCJmaWxlIjoic3JjL2FwcC9maW5hbC1jb3Vyc2UvYmxvY2tzL2Jsb2Nrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgXHJcbiAgICAvLyB3aWR0aDogNzglIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMCUhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5ibG9jay10aXRsZXtcclxuLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogIzAwMDtcclxuZm9udC1mYW1pbHk6IGxhdG87XHJcbmZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4uYmxvY2stYm9keXtcclxuY29sb3I6ICMwMDA7XHJcbmZvbnQtZmFtaWx5OiBsYXRvO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbnBhZGRpbmc6IDJweCAyNHB4O1xyXG59IiwiLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5ibG9jay10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uYmxvY2stYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAycHggMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/final-course/blocks/blocks.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/final-course/blocks/blocks.component.ts ***!
    \*********************************************************/

  /*! exports provided: BlocksComponent */

  /***/
  function srcAppFinalCourseBlocksBlocksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlocksComponent", function () {
      return BlocksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BlocksComponent =
    /*#__PURE__*/
    function () {
      function BlocksComponent(layoutService, route, router) {
        _classCallCheck(this, BlocksComponent);

        this.layoutService = layoutService;
        this.route = route;
        this.router = router;
      }

      _createClass(BlocksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.layoutService.PageContentAdded.subscribe(function (data) {
            // this.page=  this.pageContent.push(data);
            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this4.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this4.course); //COURSE

              _this4.page = _this4.course[0];
              console.log('page', _this4.page['_childInfo']);
              _this4.page1 = _this4.page['_childInfo'];
              console.log("page1", _this4.page1[0]);
              _this4.pages = _this4.page1[0]; //PAGE

              _this4.article = _this4.pages['_childInfo'];
              _this4.articles = _this4.article[0]; //ARTICLE

              console.log('this.articles', _this4.articles);
              _this4.block = _this4.articles['_childInfo'];
              _this4.blocks = _this4.block[0];
              console.log('this.blocks', _this4.blocks); //BLOCK

              _this4.component = _this4.blocks['_childInfo'];
              console.log('this.component', _this4.component);
              _this4.components = _this4.component[0];
              console.log('this.components', _this4.components); //Component
              // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];
              // console.log(typeof this.pages);
            } else {
              console.log("No page array found");
            }
          }); //   this.serviceService.BlockContentAdded.subscribe((_block)=>{
          //     console.log("final course data",this.route.snapshot.paramMap.get('data'));
          //   this.blockData=this.route.snapshot.paramMap.get('data');
          //   this.block = JSON.parse(this.blockData);
          //   _block = this.block;
          //   console.log("_block", this.block);
          //   this.blockContent.push(_block);
          //  });
        }
      }]);

      return BlocksComponent;
    }();

    BlocksComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BlocksComponent.prototype, "blockContent", void 0);
    BlocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blocks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blocks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/blocks/blocks.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blocks.component.scss */
      "./src/app/final-course/blocks/blocks.component.scss")).default]
    })], BlocksComponent);
    /***/
  },

  /***/
  "./src/app/final-course/components/components.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/final-course/components/components.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseComponentsComponentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9jb21wb25lbnRzL2NvbXBvbmVudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/final-course/components/components.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/final-course/components/components.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ComponentsComponent */

  /***/
  function srcAppFinalCourseComponentsComponentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function () {
      return ComponentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComponentsComponent =
    /*#__PURE__*/
    function () {
      function ComponentsComponent() {
        _classCallCheck(this, ComponentsComponent);
      }

      _createClass(ComponentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsComponent;
    }();

    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-components',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./components.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/components.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./components.component.scss */
      "./src/app/final-course/components/components.component.scss")).default]
    })], ComponentsComponent);
    /***/
  },

  /***/
  "./src/app/final-course/components/graphic/graphic.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/final-course/components/graphic/graphic.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseComponentsGraphicGraphicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background-color: #373d47;\n}\n\n.graphics-title {\n  color: #fff;\n  font-family: lato;\n  font-size: 50px;\n}\n\n.graphics-inner {\n  color: #fff;\n  font-family: lato;\n  font-size: 20px;\n  padding: 2px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY291cnNlL2NvbXBvbmVudHMvZ3JhcGhpYy9EOlxcRmluYWxBdXRob3JpbmdUb29sU2Nvcm1XcmFwcGVyXFxsZWFybmluZ3Rvb2wtc2Nvcm0vc3JjXFxhcHBcXGZpbmFsLWNvdXJzZVxcY29tcG9uZW50c1xcZ3JhcGhpY1xcZ3JhcGhpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmluYWwtY291cnNlL2NvbXBvbmVudHMvZ3JhcGhpYy9ncmFwaGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUkseUJBQUE7QUNGSjs7QURLQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNIQTs7QURLQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZBIiwiZmlsZSI6InNyYy9hcHAvZmluYWwtY291cnNlL2NvbXBvbmVudHMvZ3JhcGhpYy9ncmFwaGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBcclxuICAgIC8vIHdpZHRoOiA3OCUhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIwJSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczZDQ3O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZ3JhcGhpY3MtdGl0bGV7XHJcbi8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtZmFtaWx5OiBsYXRvO1xyXG5mb250LXNpemU6IDUwcHg7XHJcbn1cclxuLmdyYXBoaWNzLWlubmVye1xyXG5jb2xvcjojZmZmO1xyXG5mb250LWZhbWlseTogbGF0bztcclxuZm9udC1zaXplOiAyMHB4O1xyXG5wYWRkaW5nOiAycHggMjRweDtcclxufSIsIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2Q0Nztcbn1cblxuLmdyYXBoaWNzLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5ncmFwaGljcy1pbm5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAycHggMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/final-course/components/graphic/graphic.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/final-course/components/graphic/graphic.component.ts ***!
    \**********************************************************************/

  /*! exports provided: GraphicComponent */

  /***/
  function srcAppFinalCourseComponentsGraphicGraphicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphicComponent", function () {
      return GraphicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var GraphicComponent =
    /*#__PURE__*/
    function () {
      function GraphicComponent(layoutService, route, router) {
        _classCallCheck(this, GraphicComponent);

        this.layoutService = layoutService;
        this.route = route;
        this.router = router;
      }

      _createClass(GraphicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.layoutService.PageContentAdded.subscribe(function (data) {
            // this.page=  this.pageContent.push(data);
            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this5.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this5.course); //COURSE

              _this5.page = _this5.course[0];
              console.log('page', _this5.page['_childInfo']);
              _this5.page1 = _this5.page['_childInfo'];
              console.log("page1", _this5.page1[0]);
              _this5.pages = _this5.page1[0]; //PAGE

              _this5.article = _this5.pages['_childInfo'];
              _this5.articles = _this5.article[0]; //ARTICLE

              console.log('this.articles', _this5.articles);
              _this5.block = _this5.articles['_childInfo'];
              _this5.blocks = _this5.block[0];
              console.log('this.blocks', _this5.blocks); //BLOCK

              _this5.component = _this5.blocks['_childInfo'];
              console.log('this.component', _this5.component);
              _this5.components = _this5.component[0];
              console.log('this.components', _this5.components); //Component
              // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];
              // console.log(typeof this.pages);
            } else {
              console.log("No page array found");
            }
          });
        }
      }]);

      return GraphicComponent;
    }();

    GraphicComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraphicComponent.prototype, "graphicsContent", void 0);
    GraphicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graphic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graphic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/graphic/graphic.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./graphic.component.scss */
      "./src/app/final-course/components/graphic/graphic.component.scss")).default]
    })], GraphicComponent);
    /***/
  },

  /***/
  "./src/app/final-course/components/text/text.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/final-course/components/text/text.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseComponentsTextTextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background-color: #373d47;\n  align-items: center;\n}\n\n.text-title {\n  text-align: center;\n  color: #fff;\n  font-family: lato;\n  font-size: 50px;\n}\n\n.text-inner {\n  color: #fff;\n  font-family: lato;\n  font-size: 20px;\n  padding: 2px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY291cnNlL2NvbXBvbmVudHMvdGV4dC9EOlxcRmluYWxBdXRob3JpbmdUb29sU2Nvcm1XcmFwcGVyXFxsZWFybmluZ3Rvb2wtc2Nvcm0vc3JjXFxhcHBcXGZpbmFsLWNvdXJzZVxcY29tcG9uZW50c1xcdGV4dFxcdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmluYWwtY291cnNlL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUkseUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREE7O0FER0E7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBQSIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgXHJcbiAgICAvLyB3aWR0aDogNzglIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMCUhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2Q0NztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtdGl0bGV7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtZmFtaWx5OiBsYXRvO1xyXG5mb250LXNpemU6IDUwcHg7XHJcbn1cclxuLnRleHQtaW5uZXJ7XHJcbmNvbG9yOiNmZmY7XHJcbmZvbnQtZmFtaWx5OiBsYXRvO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbnBhZGRpbmc6IDJweCAyNHB4O1xyXG59IiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczZDQ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi50ZXh0LWlubmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDJweCAyNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/final-course/components/text/text.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/final-course/components/text/text.component.ts ***!
    \****************************************************************/

  /*! exports provided: TextComponent */

  /***/
  function srcAppFinalCourseComponentsTextTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
      return TextComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TextComponent =
    /*#__PURE__*/
    function () {
      function TextComponent(layoutService, route, router) {
        _classCallCheck(this, TextComponent);

        this.layoutService = layoutService;
        this.route = route;
        this.router = router;
      }

      _createClass(TextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.layoutService.PageContentAdded.subscribe(function (data) {
            // this.page=  this.pageContent.push(data);
            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this6.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this6.course); //COURSE

              _this6.page = _this6.course[0];
              console.log('page', _this6.page['_childInfo']);
              _this6.page1 = _this6.page['_childInfo'];
              console.log("page1", _this6.page1[0]);
              _this6.pages = _this6.page1[0]; //PAGE

              _this6.article = _this6.pages['_childInfo'];
              _this6.articles = _this6.article[0]; //ARTICLE

              console.log('this.articles', _this6.articles);
              _this6.block = _this6.articles['_childInfo'];
              _this6.blocks = _this6.block[0];
              console.log('this.blocks', _this6.blocks); //BLOCK

              _this6.component = _this6.blocks['_childInfo'];
              console.log('this.component', _this6.component);
              _this6.components = _this6.component[0];
              console.log('this.components', _this6.components); //Component
              // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];
              // console.log(typeof this.pages);
            } else {
              console.log("No page array found");
            }
          }); //   this.serviceService.TextContentAdded.subscribe((_text)=>{
          //     console.log("final course data",this.route.snapshot.paramMap.get('text_id'));
          //   this.textData=this.route.snapshot.paramMap.get('text_id');
          //   this.text = JSON.parse(this.textData);
          //   _text = this.text;
          //   console.log("_text", this.text);
          //   this.textContent.push(_text);
          //  });
        }
      }]);

      return TextComponent;
    }();

    TextComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextComponent.prototype, "textContent", void 0);
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/components/text/text.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text.component.scss */
      "./src/app/final-course/components/text/text.component.scss")).default]
    })], TextComponent);
    /***/
  },

  /***/
  "./src/app/final-course/course-object/course-object.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/final-course/course-object/course-object.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseCourseObjectCourseObjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9jb3Vyc2Utb2JqZWN0L2NvdXJzZS1vYmplY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/final-course/course-object/course-object.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/final-course/course-object/course-object.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CourseObjectComponent */

  /***/
  function srcAppFinalCourseCourseObjectCourseObjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseObjectComponent", function () {
      return CourseObjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var CourseObjectComponent =
    /*#__PURE__*/
    function () {
      function CourseObjectComponent(layoutService) {
        _classCallCheck(this, CourseObjectComponent);

        this.layoutService = layoutService;
      }

      _createClass(CourseObjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          console.log('course-object');
          this.layoutService.PageContentAdded.subscribe(function (data) {
            console.log('data', data);

            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this7.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this7.course); //COURSE

              _this7.page = _this7.course[0];
              console.log('page', _this7.page['_childInfo']);
              _this7.page1 = _this7.page['_childInfo'];
              console.log("page1", _this7.page1);
              _this7.pages = _this7.page1[0]; //PAGE

              _this7.article = _this7.pages['_childInfo'];
              _this7.articles = _this7.article[0]; //ARTICLE

              console.log('this.articles', _this7.articles);
              _this7.block = _this7.articles['_childInfo'];
              _this7.blocks = _this7.block[0];
              console.log('this.blocks', _this7.blocks); //BLOCK

              _this7.component = _this7.blocks['_childInfo'];
              console.log('this.component', _this7.component);
              _this7.components = _this7.component[0];
              console.log('this.components', _this7.components); //Component

              _this7.newCourse = {
                _course: _this7.course,
                _page: _this7.pages,
                _article: _this7.articles,
                _block: _this7.blocks,
                _component: _this7.components
              };
              console.log('course object', _this7.newCourse); // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];     
              // console.log(typeof this.pages);
            } else {
              console.log("No page array found");
            }
          });
        }
      }]);

      return CourseObjectComponent;
    }();

    CourseObjectComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CourseObjectComponent.prototype, "pageContent", void 0);
    CourseObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course-object',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course-object.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/course-object/course-object.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course-object.component.scss */
      "./src/app/final-course/course-object/course-object.component.scss")).default]
    })], CourseObjectComponent);
    /***/
  },

  /***/
  "./src/app/final-course/courses/courses.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/final-course/courses/courses.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseCoursesCoursesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container .card-img {\n  border-radius: 0px;\n}\n.container .img-1 {\n  width: 110%;\n}\n.container .img-2 {\n  width: 166%;\n  margin-left: 30%;\n}\n.container .img-3 {\n  height: 202px;\n  margin-top: 8%;\n}\n.container .card {\n  width: 107%;\n  border-radius: 0px;\n  background-color: #212529;\n  margin-left: -3%;\n}\n.container .card .card-title {\n  margin-bottom: 0.75rem;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: lato;\n  font-weight: 700;\n  font-size: 37px;\n  padding: 21px 5px;\n}\n.container .card .text-muted {\n  text-align: center;\n  font-family: lato;\n  margin: -39px auto;\n}\n.container .card .card-text {\n  font-family: lato;\n  color: #fff;\n  font-size: 20px;\n  margin: 1px;\n  padding: 12px 6px;\n}\n.cont-2 .card {\n  border-radius: 0px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-shadow: 5px 5px 5px #dddbdb;\n  background-color: white;\n  margin-top: -24px;\n  margin-left: 16px;\n}\n.cont-2 .card .card-body {\n  margin-top: -17px;\n  margin-left: -8px;\n}\n.cont-2 .card .card-title {\n  margin-bottom: 0.75rem;\n  font-family: lato;\n  font-weight: 700;\n  color: #212529;\n  font-size: 37px;\n  padding: 21px 5px;\n}\n.cont-2 .card .card-text {\n  font-family: lato;\n  font-size: 20px;\n  margin: 1px;\n  padding: 12px 6px;\n  color: #B5B5B5;\n}\n.cont-2 .card .btnLink {\n  background: #373d47;\n  color: #fff;\n  border-radius: 20px;\n  width: 24%;\n  height: 33px;\n  padding: 3px;\n  text-align: center;\n  margin: 22px 8px;\n  cursor: pointer;\n}\n.cont-2 .card .progress {\n  display: flex;\n  height: 7px;\n  width: 103%;\n  margin-top: 18px;\n  margin-bottom: -8px;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.cont-2 .card .progress .bg-primary {\n  background-color: #6c63ff !important;\n}\n.course-object {\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY291cnNlL2NvdXJzZXMvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxmaW5hbC1jb3Vyc2VcXGNvdXJzZXNcXGNvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDRyxXQUFBO0FDQVA7QURHSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER0k7RUFDSSxhQUFBO0VBQ0gsY0FBQTtBQ0RMO0FER0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDRFI7QURFSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRFI7QURZSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRFdRO0VBQ0ksaUJBQUE7RUFDSixpQkFBQTtBQ1RSO0FEV1E7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVFo7QURZUTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNWUjtBRFlRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1ZaO0FEWVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNWWjtBRFdZO0VBQ0ksb0NBQUE7QUNUaEI7QURlQTtFQUNJLGNBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLmNhcmQtaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctMXtcclxuICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5pbWctMntcclxuICAgICAgICB3aWR0aDogMTY2JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgfVxyXG4gICAgLmltZy0ze1xyXG4gICAgICAgIGhlaWdodDogMjAycHg7XHJcbiAgICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMTA3JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMlO1xyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICBwYWRkaW5nOiAyMXB4IDVweDtcclxuICAgIH1cclxuICAgIC50ZXh0LW11dGVke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBtYXJnaW46IC0zOXB4IGF1dG87XHJcblxyXG4gICAgfVxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCA2cHg7XHJcblxyXG5cclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgfVxyXG4gICBcclxuIFxyXG59XHJcbi5jb250LTJ7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggI2RkZGJkYjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMXB4IDVweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC10ZXh0e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDZweDtcclxuICAgICAgICBjb2xvcjogI0I1QjVCNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bkxpbmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczZDQ3O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMnB4IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMyU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICAgICAgIC5iZy1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2YzYzZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jb3Vyc2Utb2JqZWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY2FyZC1pbWcge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY29udGFpbmVyIC5pbWctMSB7XG4gIHdpZHRoOiAxMTAlO1xufVxuLmNvbnRhaW5lciAuaW1nLTIge1xuICB3aWR0aDogMTY2JTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cbi5jb250YWluZXIgLmltZy0zIHtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgbWFyZ2luLXRvcDogOCU7XG59XG4uY29udGFpbmVyIC5jYXJkIHtcbiAgd2lkdGg6IDEwNyU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbn1cbi5jb250YWluZXIgLmNhcmQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzN3B4O1xuICBwYWRkaW5nOiAyMXB4IDVweDtcbn1cbi5jb250YWluZXIgLmNhcmQgLnRleHQtbXV0ZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBtYXJnaW46IC0zOXB4IGF1dG87XG59XG4uY29udGFpbmVyIC5jYXJkIC5jYXJkLXRleHQge1xuICBmb250LWZhbWlseTogbGF0bztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxcHg7XG4gIHBhZGRpbmc6IDEycHggNnB4O1xufVxuXG4uY29udC0yIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggI2RkZGJkYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5jb250LTIgLmNhcmQgLmNhcmQtYm9keSB7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5jb250LTIgLmNhcmQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtc2l6ZTogMzdweDtcbiAgcGFkZGluZzogMjFweCA1cHg7XG59XG4uY29udC0yIC5jYXJkIC5jYXJkLXRleHQge1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDFweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGNvbG9yOiAjQjVCNUI1O1xufVxuLmNvbnQtMiAuY2FyZCAuYnRuTGluayB7XG4gIGJhY2tncm91bmQ6ICMzNzNkNDc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMjQlO1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIycHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udC0yIC5jYXJkIC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogN3B4O1xuICB3aWR0aDogMTAzJTtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmNvbnQtMiAuY2FyZCAucHJvZ3Jlc3MgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2M2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5jb3Vyc2Utb2JqZWN0IHtcbiAgbWFyZ2luLXRvcDogMiU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/final-course/courses/courses.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/final-course/courses/courses.component.ts ***!
    \***********************************************************/

  /*! exports provided: CoursesComponent */

  /***/
  function srcAppFinalCourseCoursesCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursesComponent", function () {
      return CoursesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CoursesComponent =
    /*#__PURE__*/
    function () {
      //newCourse: { _course: string; _page: string; _article: string; _block: string; _component: string; };
      function CoursesComponent(layoutService, router) {
        _classCallCheck(this, CoursesComponent);

        this.layoutService = layoutService;
        this.router = router;
        this.show = false;
      }

      _createClass(CoursesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          console.log('courses');
          this.layoutService.PageContentAdded.subscribe(function (data) {
            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this8.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this8.course); //COURSE

              _this8.page = _this8.course[0];
              console.log('page', _this8.page['_childInfo']);
              _this8.page1 = _this8.page['_childInfo'];
              console.log("page1", _this8.page1[0]);
              _this8.pages = _this8.page1[0]; //PAGE

              _this8.article = _this8.pages['_childInfo'];
              _this8.articles = _this8.article[0]; //ARTICLE

              console.log('this.articles', _this8.articles);
              _this8.block = _this8.articles['_childInfo'];
              _this8.blocks = _this8.block[0];
              console.log('this.blocks', _this8.blocks); //BLOCK

              _this8.component = _this8.blocks['_childInfo'];
              console.log('this.component', _this8.component);
              _this8.components = _this8.component[0];
              console.log('this.components', _this8.components); //Component
            } else {
              console.log("No page array found");
            }
          });
        }
      }, {
        key: "goToPage",
        value: function goToPage() {
          console.log('click view button');
          this.show = !this.show;
          this.courseObject = localStorage.getItem('PageItem');
          console.log('this.courseObject', this.courseObject);
          this.layoutService.PageAdded.next(this.courseObject);
          this.router.navigate(['/final-course/course-object']);
        }
      }]);

      return CoursesComponent;
    }();

    CoursesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoursesComponent.prototype, "courseContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoursesComponent.prototype, "pageContent", void 0);
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-courses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./courses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/courses/courses.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./courses.component.scss */
      "./src/app/final-course/courses/courses.component.scss")).default]
    })], CoursesComponent);
    /***/
  },

  /***/
  "./src/app/final-course/final-course.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/final-course/final-course.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCourseFinalCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9maW5hbC1jb3Vyc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/final-course/final-course.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/final-course/final-course.component.ts ***!
    \********************************************************/

  /*! exports provided: FinalCourseComponent */

  /***/
  function srcAppFinalCourseFinalCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalCourseComponent", function () {
      return FinalCourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/layout.service */
    "./src/app/services/layout.service.ts");
    /* harmony import */


    var _services_scorm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/scorm.service */
    "./src/app/services/scorm.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FinalCourseComponent =
    /*#__PURE__*/
    function () {
      function FinalCourseComponent(layoutService, scormService, _http) {
        _classCallCheck(this, FinalCourseComponent);

        this.layoutService = layoutService;
        this.scormService = scormService;
        this._http = _http;
        this.loadXML();
      }

      _createClass(FinalCourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          console.log('final course'); // let objToBeShred = {
          //   course: this.course,
          //   page:this.page,
          // }

          this.layoutService.PageContentAdded.subscribe(function (data) {
            // this.page=  this.pageContent.push(data);
            if (data) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this9.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this9.course); //COURSE

              _this9.page = _this9.course[0]; // console.log('page',this.page['_childInfo']);

              _this9.page1 = _this9.page['_childInfo'];
              console.log("page1", _this9.page1[0]);
              _this9.pages = _this9.page1[0]; //PAGE

              _this9.article = _this9.pages['_childInfo'];
              _this9.articles = _this9.article[0]; //ARTICLE

              console.log('this.articles', _this9.articles);
              _this9.block = _this9.articles['_childInfo'];
              _this9.blocks = _this9.block[0];
              console.log('this.blocks', _this9.blocks); //BLOCK

              _this9.component = _this9.blocks['_childInfo'];
              console.log('this.component', _this9.component);
              _this9.components = _this9.component[0];
              console.log('this.components', _this9.components); //Component

              _this9.newCourse = {
                _course: _this9.course[0],
                _page: _this9.pages,
                _article: _this9.articles,
                _block: _this9.blocks,
                _component: _this9.components
              };
              console.log('Final', _this9.newCourse);

              _this9.scormService.initCourse(); // console.log('scormservice',this.scormService.initCourse());
              // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];
              // console.log(typeof this.pages);

            } else {
              console.log("No page array found");
            }
          });
        }
      }, {
        key: "loadXML",
        value: function loadXML() {
          this._http.get('/assets/imsmanifest.xml', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'text/xml').append('Access-Control-Allow-Methods', 'GET').append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
            responseType: 'text'
          });
        }
      }]);

      return FinalCourseComponent;
    }();

    FinalCourseComponent.ctorParameters = function () {
      return [{
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _services_scorm_service__WEBPACK_IMPORTED_MODULE_3__["ScormService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    FinalCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-final-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./final-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/final-course.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./final-course.component.scss */
      "./src/app/final-course/final-course.component.scss")).default]
    })], FinalCourseComponent);
    /***/
  },

  /***/
  "./src/app/final-course/pages/pages.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/final-course/pages/pages.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalCoursePagesPagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  width: 94% !important;\n  margin-left: 4% !important;\n  border-radius: 0px;\n  background-color: #212529;\n  align-items: center;\n}\n\n.page-title {\n  margin-bottom: 0.75rem;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: lato;\n  font-weight: 700;\n  font-size: 37px;\n}\n\n.page-inner {\n  font-family: lato;\n  color: #fff;\n  font-size: 20px;\n  margin: 1px;\n  padding: 2px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY291cnNlL3BhZ2VzL0Q6XFxGaW5hbEF1dGhvcmluZ1Rvb2xTY29ybVdyYXBwZXJcXGxlYXJuaW5ndG9vbC1zY29ybS9zcmNcXGFwcFxcZmluYWwtY291cnNlXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbmFsLWNvdXJzZS9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmluYWwtY291cnNlL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBcclxuICAgIHdpZHRoOiA5NCUhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wYWdlLXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgXHJcbn1cclxuLnBhZ2UtaW5uZXJ7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAycHggMThweDtcclxufSIsIi5jYXJkIHtcbiAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDM3cHg7XG59XG5cbi5wYWdlLWlubmVyIHtcbiAgZm9udC1mYW1pbHk6IGxhdG87XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMXB4O1xuICBwYWRkaW5nOiAycHggMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/final-course/pages/pages.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/final-course/pages/pages.component.ts ***!
    \*******************************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppFinalCoursePagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/layout.service */
    "./src/app/services/layout.service.ts");

    var PagesComponent =
    /*#__PURE__*/
    function () {
      function PagesComponent(layoutService) {
        _classCallCheck(this, PagesComponent);

        this.layoutService = layoutService;
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          console.log("Inside pages");
          this.layoutService.PageContentAdded.subscribe(function (data) {
            console.log("m here!!"); // this.page=  this.pageContent.push(data);

            if (JSON.parse(localStorage.getItem('course'))) {
              console.log("this is the data that comes in final-course.ts", data);
              console.log(typeof data);
              _this10.course = typeof data === 'string' ? JSON.parse(data) : data;
              console.log('this.course', _this10.course); //COURSE

              _this10.page = _this10.course[0];
              console.log('page', _this10.page['_childInfo']);
              _this10.page1 = _this10.page['_childInfo'];
              console.log("page1", _this10.page1[0]);
              _this10.pages = _this10.page1[0]; //PAGE

              _this10.article = _this10.pages['_childInfo'];
              console.log('this.article', _this10.article);
              _this10.articles = _this10.article[0]; //ARTICLE

              console.log('this.articles', _this10.articles);
              _this10.block = _this10.articles['_childInfo'];
              _this10.blocks = _this10.block[0];
              console.log('this.blocks', _this10.blocks); //BLOCK

              _this10.component = _this10.blocks['_childInfo'];
              console.log('this.component', _this10.component);
              _this10.components = _this10.component[0];
              console.log('this.components', _this10.components); //Component
              // this.pages = typeof(data)==='string'? JSON.parse(data): data;
              // console.log("this.pages",this.pages);
              // this.articleIndex=this.pages[0];
              // console.log("article index",this.articleIndex['_childInfo']);
              //   this.blockIndex =this.articleIndex['_childInfo'];
              // console.log("block index",this.blockIndex[0]);   // PAGE
              // this.blockIndex1 =this.blockIndex[0];
              // console.log("block index 1",this.blockIndex1['_childInfo']);
              // this.componentIndex =this.blockIndex1['_childInfo'];
              // console.log("component index",this.componentIndex[0]); //ARTICLE
              // this.componentIndex1 =this.componentIndex[0];
              // console.log("component index 1",this.componentIndex1['_childInfo']);
              // this.mainComponent = this.componentIndex1['_childInfo'];
              // console.log("mainComponent",this.mainComponent[0]); //BLOCK
              // this.mainComponent1 = this.mainComponent[0];
              // console.log(typeof this.pages);
            } else {
              console.log("No page array found");
            }
          });
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagesComponent.prototype, "pageContent", void 0);
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final-course/pages/pages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pages.component.scss */
      "./src/app/final-course/pages/pages.component.scss")).default]
    })], PagesComponent);
    /***/
  },

  /***/
  "./src/app/page-structure/page-structure.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/page-structure/page-structure.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageStructurePageStructureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper .btn-grp {\n  margin-top: 8%;\n}\n.wrapper .btn-grp .btn {\n  width: 20%;\n  height: 50px;\n  border: 1px solid #B5B5B5;\n  border-radius: 4px;\n  font-family: lato;\n  font-size: 15px;\n  color: #212529;\n}\n.wrapper .btn-grp .btn-1 {\n  background-color: #e9ecef;\n}\n.wrapper .btn-grp .btn-2 {\n  margin-left: 20px;\n}\n.wrapper .list-group-item {\n  border: 0px;\n}\n.wrapper .list-group-item .card {\n  width: 90%;\n  margin-left: -19px;\n}\n.wrapper .btn-secondary {\n  color: #000;\n  background-color: #fff;\n  border-color: #fff;\n  margin-top: -14px;\n  margin-left: -16px;\n  padding: 13px 13px;\n}\n.wrapper .btn-secondary :focus {\n  box-shadow: none;\n}\n.wrapper .card-title {\n  color: #000;\n  text-decoration: none;\n}\n.wrapper .text-muted {\n  color: #6c757d !important;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1zdHJ1Y3R1cmUvRDpcXEZpbmFsQXV0aG9yaW5nVG9vbFNjb3JtV3JhcHBlclxcbGVhcm5pbmd0b29sLXNjb3JtL3NyY1xcYXBwXFxwYWdlLXN0cnVjdHVyZVxccGFnZS1zdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2Utc3RydWN0dXJlL3BhZ2Utc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtBQ0FSO0FEQ1k7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ1o7QURFUTtFQUNJLHlCQUFBO0FDQVo7QURFUTtFQUNJLGlCQUFBO0FDQVo7QURHSTtFQUNJLFdBQUE7QUNEUjtBREVRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQVo7QURHSTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNDLGtCQUFBO0VBQ0QsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUNJLGdCQUFBO0FDRFI7QURHSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0RSO0FER0k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLXN0cnVjdHVyZS9wYWdlLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgLmJ0bi1ncnB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICAgICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I1QjVCNTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tMXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi0ye1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zZWNvbmRhcnkgOmZvY3Vze1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1tdXRlZCB7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2QhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbn0iLCIud3JhcHBlciAuYnRuLWdycCB7XG4gIG1hcmdpbi10b3A6IDglO1xufVxuLndyYXBwZXIgLmJ0bi1ncnAgLmJ0biB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I1QjVCNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogbGF0bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbi53cmFwcGVyIC5idG4tZ3JwIC5idG4tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG4ud3JhcHBlciAuYnRuLWdycCAuYnRuLTIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi53cmFwcGVyIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXI6IDBweDtcbn1cbi53cmFwcGVyIC5saXN0LWdyb3VwLWl0ZW0gLmNhcmQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG59XG4ud3JhcHBlciAuYnRuLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIHBhZGRpbmc6IDEzcHggMTNweDtcbn1cbi53cmFwcGVyIC5idG4tc2Vjb25kYXJ5IDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ud3JhcHBlciAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ud3JhcHBlciAudGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/page-structure/page-structure.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-structure/page-structure.component.ts ***!
    \************************************************************/

  /*! exports provided: PageStructureComponent */

  /***/
  function srcAppPageStructurePageStructureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageStructureComponent", function () {
      return PageStructureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageStructureComponent =
    /*#__PURE__*/
    function () {
      function PageStructureComponent() {
        _classCallCheck(this, PageStructureComponent);

        this.pages = [{
          "number": "Page 1"
        }];
      }

      _createClass(PageStructureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addPage",
        value: function addPage() {
          this.page_no = this.pages.push({
            "number": "Page " + (this.pages.length + 1)
          });
          console.log(JSON.stringify(this.page_no));
        }
      }, {
        key: "deletePage",
        value: function deletePage(number) {
          console.log(number);
          this.pages.splice(this.pages.findIndex(function (page) {
            return page.number === number;
          }), 1);
        }
      }]);

      return PageStructureComponent;
    }();

    PageStructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-structure',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-structure.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-structure/page-structure.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-structure.component.scss */
      "./src/app/page-structure/page-structure.component.scss")).default]
    })], PageStructureComponent);
    /***/
  },

  /***/
  "./src/app/services/layout.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/layout.service.ts ***!
    \********************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-uuid */
    "./node_modules/angular2-uuid/index.js");
    /* harmony import */


    var angular2_uuid__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LayoutService =
    /*#__PURE__*/
    function () {
      function LayoutService() {
        _classCallCheck(this, LayoutService);

        this.course = [];
        this.page = [];
        this.article = [];
        this.block = [];
        this.textBox = [];
        this.graphics = [];
        this.PageContentAdded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.PageAdded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.courseAdded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(LayoutService, [{
        key: "getPageLocation",
        value: function getPageLocation() {
          var pageLocation = [{
            path: './dashboard',
            name: 'Dashboard'
          }, {
            path: './editor-pane',
            name: 'Page Structure'
          }, {
            path: './page-structure',
            name: 'Course Structure'
          }, {
            path: './content',
            name: 'Settings',
            children: [{
              path: './page',
              name: 'Page Settings'
            }, {
              path: './article',
              name: 'Article Settings'
            }, {
              path: './block',
              name: 'Block Settings'
            }, {
              path: './course',
              name: 'Course Settings'
            }]
          }, {
            path: './final-course',
            name: 'Final Course',
            children: [{
              path: './pages',
              name: 'Page '
            }, {
              path: './course-object',
              name: 'Course-Object '
            }, {
              path: './article',
              name: 'Article '
            }, {
              path: './courses',
              name: 'Course '
            }, {
              path: './blocks',
              name: 'Block '
            }]
          }, {
            path: './component-content',
            name: 'Component Settings',
            children: [{
              path: './graphics',
              name: 'Graphics'
            }, {
              path: './text-box',
              name: 'TextBox'
            }]
          }];
          return pageLocation;
        }
      }, {
        key: "addCourses",
        value: function addCourses(value) {
          this.course.push({
            _courseid: angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID(),
            _type: "course",
            title: value.title != '' ? value.title : 'not specified',
            displayTitle: value.displayTitle != '' ? value.displayTitle : 'not specified',
            description: value.description != '' ? value.description : 'not specified',
            body: '<div>' + value.body + '</div>',
            tags: value.tags != '' ? value.tags : 'not specified',
            lockType: value.lockType != '' ? value.lockType : 'not specified',
            _childInfo: this.page,
            customCSS: value.customCSS != '' ? value.customCSS : 'not specified'
          });
          console.log("course", this.course);
        }
      }, {
        key: "addPage",
        value: function addPage(value) {
          this.page.push({
            _pageid: angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID(),
            _type: 'Page',
            _parentId: value._parentId != '' ? value._parentId : 'not specified',
            title: value.title != '' ? value.title : 'not specified',
            displayTitle: value.displayTitle != '' ? value.displayTitle : 'not specified',
            body: '<div>' + value.body + '</div>',
            pageBody: '<div>' + value.pageBody + '</div>',
            instruction: value.instruction != '' ? value.instruction : 'not specified',
            btnlinkText: value.btnlinkText != '' ? value.btnlinkText : 'not specified',
            duration: value.duration != '' ? value.duration : 'not specified',
            _childInfo: this.article,
            _pageLevelProgressEnabled: value._pageLevelProgressEnabled != '' ? value._pageLevelProgressEnabled : 'not specified'
          });
          console.log("page", this.page);
        }
      }, {
        key: "addArticle",
        value: function addArticle(value) {
          this.article.push({
            _articleid: angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID(),
            _parentId: value._parentId != '' ? value._parentId : 'not specified',
            _type: 'Article',
            _classes: value._classes != '' ? value._classes : 'not specified',
            title: value.title != '' ? value.title : 'not specified',
            displayTitle: value.displayTitle != '' ? value.displayTitle : 'not specified',
            body: '<div>' + value.body + '</div>',
            _childInfo: this.block,
            instruction: value.instruction != '' ? value.instruction : 'not specified'
          });
          console.log("article", this.article);
        }
      }, {
        key: "addText",
        value: function addText(value) {
          this.textBox.push({
            title: value.title != '' ? value.title : 'not specified',
            dtitle: value.dtitle != '' ? value.dtitle : 'not specified',
            body: '<div>' + value.body + '</div>',
            _type: 'Text Component',
            _parentId: value._parentId != '' ? value._parentId : 'not specified'
          });
          console.log("textbox", this.textBox);
          console.log("type text", this.textBox[0]._type);
          localStorage.setItem("course", JSON.stringify(this.course));
        }
      }, {
        key: "addGraphics",
        value: function addGraphics(value) {
          this.graphics.push({
            _graphicsid: angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID(),
            _parentId: value._parentId != '' ? value._parentId : 'not specified',
            body: '<div>' + value.body + '</div>',
            _type: 'Graphics Component',
            title: value.title != '' ? value.title : 'not specified',
            displayTitle: value.displayTitle != '' ? value.displayTitle : 'not specified',
            instruction: value.instruction != '' ? value.instruction : 'not specified',
            graphics_url: value.file != '' ? value.file : 'not specified'
          });
          console.log("graphics", this.graphics);
          localStorage.setItem("course", JSON.stringify(this.course));
        }
      }, {
        key: "addBlock",
        value: function addBlock(value) {
          console.log(value, 'block component');
          this.block.push({
            _blockid: angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID(),
            _parentId: value._parentId != '' ? value._parentId : 'not specified',
            _classes: value._classes != '' ? value._classes : 'not specified',
            title: value.title != '' ? value.title : 'not specified',
            displayTitle: value.displayTitle != '' ? value.displayTitle : 'not specified',
            body: '<div>' + value.body + '</div>',
            _type: 'block',
            _trackingId: 1,
            instruction: value.instruction != '' ? value.instruction : 'not specified',
            _childInfo: this.graphics
          });
          console.log("block", this.block);
        }
      }]);

      return LayoutService;
    }();

    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LayoutService);
    /***/
  },

  /***/
  "./src/app/services/scorm.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/scorm.service.ts ***!
    \*******************************************/

  /*! exports provided: ScormService */

  /***/
  function srcAppServicesScormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScormService", function () {
      return ScormService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var pipwerks_scorm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! pipwerks-scorm-api-wrapper */
    "./node_modules/pipwerks-scorm-api-wrapper/index.js");
    /* harmony import */


    var pipwerks_scorm_api_wrapper__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(pipwerks_scorm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__);

    var ScormService =
    /*#__PURE__*/
    function () {
      function ScormService() {
        _classCallCheck(this, ScormService);

        this.lmsConnected = false;
      }

      _createClass(ScormService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('scorm service');
          this.lmsConnected = false;
        }
      }, {
        key: "handleError",
        value: function handleError(msg) {
          alert(msg); // window.close();
        }
      }, {
        key: "initCourse",
        value: function initCourse() {
          console.log('initcourse'); //scorm.init returns a boolean

          this.lmsConnected = pipwerks_scorm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["SCORM"].init(); //If the scorm.init function succeeded...

          if (this.lmsConnected) {
            console.log('connected'); //Let's get the completion status to see if the course has already been completed

            var completionstatus = pipwerks_scorm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["SCORM"].get("cmi.core.lesson_status"); //If the course has already been completed...

            if (completionstatus == "completed" || completionstatus == "passed") {
              //...let's display a message and close the browser window
              this.handleError("You have already completed this course. You do not need to continue.");
            } //Now let's get the username from the LMS


            var learnername = pipwerks_scorm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["SCORM"].get("cmi.core.student_name"); //If the name was successfully retrieved...

            if (learnername) {
              //...let's display the username in a page element named "learnername"
              document.getElementById("learnername").innerHTML = learnername;
              console.log('learnername', learnername); //use the name in the form
            } //If the course couldn't connect to the LMS for some reason...

          } else {
            //... let's alert the user then close the window.
            this.handleError("Error: Course could not connect with the LMS");
          }
        }
      }]);

      return ScormService;
    }();

    ScormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ScormService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\FinalAuthoringToolScormWrapper\learningtool-scorm\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map