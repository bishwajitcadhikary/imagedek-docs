"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: "ImageAI - AI Image Generator Assistant (SAAS)"
    }),
    useNextSeoProps () {
        return {
            titleTemplate: "%s – ImageAI"
        };
    },
    head: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: "ImageAI - AI Image Generator Assistant (SAAS)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: "ImageAI is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageAI helps you create stunning visuals that are sure to captivate your audience."
            })
        ]
    }),
    footer: {
        text: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [
                "Copyright \xa9 ",
                new Date().getFullYear(),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://codecanyon.net/user/abndevs",
                    target: "_blank",
                    children: "abnDevs"
                }),
                ". All Rights Reserved."
            ]
        })
    }
});


/***/ }),

/***/ 1297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6171);
/* harmony import */ var _home_bishwajit_vue_aiimage_docs_theme_config_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4006);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(452);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__]);
nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/*@jsxRuntime automatic @jsxImportSource react*/ 
const MDXLayout = function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};
function _createMdxContent(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}
function MDXContent(props = {}) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {
            ...props
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
const __nextra_internal__ = globalThis[Symbol.for("__nextra_internal__")] ||= Object.create(null);
__nextra_internal__.Layout = nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP;
__nextra_internal__.pageMap = [
    {
        "kind": "Meta",
        "data": {
            "index": "Overview",
            "install": "Installation",
            "admin": "Administration",
            "user": "User Guide"
        }
    },
    {
        "kind": "Folder",
        "name": "admin",
        "route": "/admin",
        "children": [
            {
                "kind": "Meta",
                "data": {
                    "login": "Login",
                    "openapi": "OpenAPI Configuration",
                    "finance": "Finance Management",
                    "frontend": "Frontend Management",
                    "support": "Support Tickets",
                    "system": "System Settings"
                }
            },
            {
                "kind": "Folder",
                "name": "finance",
                "route": "/admin/finance",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "payments": "Payment Methods",
                            "currency": "Currency",
                            "pricing": "Subscription Plans",
                            "taxes": "Taxes"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "currency",
                        "route": "/admin/finance/currency"
                    },
                    {
                        "kind": "Folder",
                        "name": "payments",
                        "route": "/admin/finance/payments",
                        "children": [
                            {
                                "kind": "Meta",
                                "data": {
                                    "stripe": "Stripe",
                                    "razorpay": "Razorpay",
                                    "mollie": "Mollie"
                                }
                            },
                            {
                                "kind": "MdxPage",
                                "name": "mollie",
                                "route": "/admin/finance/payments/mollie"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "razorpay",
                                "route": "/admin/finance/payments/razorpay"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "stripe",
                                "route": "/admin/finance/payments/stripe"
                            }
                        ]
                    },
                    {
                        "kind": "MdxPage",
                        "name": "pricing",
                        "route": "/admin/finance/pricing"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "taxes",
                        "route": "/admin/finance/taxes"
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "frontend",
                "route": "/admin/frontend",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "settings": "Settings",
                            "menu": "Menu Builder",
                            "page": "Pages",
                            "blog": "Blog",
                            "faq": "FAQ",
                            "features": "Features"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "blog",
                        "route": "/admin/frontend/blog"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "faq",
                        "route": "/admin/frontend/faq"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "features",
                        "route": "/admin/frontend/features"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "menu",
                        "route": "/admin/frontend/menu"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "page",
                        "route": "/admin/frontend/page"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "settings",
                        "route": "/admin/frontend/settings"
                    }
                ]
            },
            {
                "kind": "MdxPage",
                "name": "login",
                "route": "/admin/login"
            },
            {
                "kind": "MdxPage",
                "name": "openapi",
                "route": "/admin/openapi"
            },
            {
                "kind": "Folder",
                "name": "support",
                "route": "/admin/support",
                "children": [
                    {
                        "kind": "MdxPage",
                        "name": "departments",
                        "route": "/admin/support/departments"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "tickets",
                        "route": "/admin/support/tickets"
                    },
                    {
                        "kind": "Meta",
                        "data": {
                            "departments": "Departments",
                            "tickets": "Tickets"
                        }
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "system",
                "route": "/admin/system",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "general": "General Settings",
                            "auth": "Authentication",
                            "mail": "Mail Configuration",
                            "file_disk": "File Disk (Storage)",
                            "language": "Language",
                            "backup": "Backup",
                            "license": "License",
                            "upgrade": "Upgrade"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "auth",
                        "route": "/admin/system/auth"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "backup",
                        "route": "/admin/system/backup"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "file_disk",
                        "route": "/admin/system/file_disk"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "general",
                        "route": "/admin/system/general"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "language",
                        "route": "/admin/system/language"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "license",
                        "route": "/admin/system/license"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "mail",
                        "route": "/admin/system/mail"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "upgrade",
                        "route": "/admin/system/upgrade"
                    }
                ]
            }
        ]
    },
    {
        "kind": "MdxPage",
        "name": "index",
        "route": "/"
    },
    {
        "kind": "MdxPage",
        "name": "install",
        "route": "/install"
    },
    {
        "kind": "Folder",
        "name": "user",
        "route": "/user",
        "children": [
            {
                "kind": "Meta",
                "data": {
                    "registration": "Registration",
                    "login": "Login",
                    "profile": "Profile"
                }
            },
            {
                "kind": "MdxPage",
                "name": "login",
                "route": "/user/login"
            },
            {
                "kind": "MdxPage",
                "name": "profile",
                "route": "/user/profile"
            },
            {
                "kind": "MdxPage",
                "name": "registration",
                "route": "/user/registration"
            }
        ]
    }
];
__nextra_internal__.flexsearch = {
    "codeblocks": true
};
__nextra_internal__.themeConfig = _home_bishwajit_vue_aiimage_docs_theme_config_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3841:
/***/ ((module) => {

module.exports = require("@popperjs/core");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8395:
/***/ ((module) => {

module.exports = require("flexsearch");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

/***/ }),

/***/ 9164:
/***/ ((module) => {

module.exports = require("git-url-parse");

/***/ }),

/***/ 4916:
/***/ ((module) => {

module.exports = require("intersection-observer");

/***/ }),

/***/ 5875:
/***/ ((module) => {

module.exports = require("match-sorter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = import("nextra/components");;

/***/ }),

/***/ 6132:
/***/ ((module) => {

module.exports = import("nextra/hooks");;

/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = import("nextra/icons");;

/***/ }),

/***/ 5053:
/***/ ((module) => {

module.exports = import("nextra/mdx");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("scroll-into-view-if-needed");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,675,707], () => (__webpack_exec__(1297)));
module.exports = __webpack_exports__;

})();