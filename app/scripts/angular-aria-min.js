!function(r,e){"use strict";var a=e.module("ngAria",["ng"]).provider("$aria",function(){var r={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};function a(e,a,i,t){return function(c,o,u){var d=u.$normalize(a);!r[d]||n(o,i)||u[d]||c.$watch(u[e],function(r){r=t?!r:!!r,o.attr(a,r)})}}this.config=function(a){r=e.extend(r,a)},this.$get=function(){return{config:function(e){return r[e]},$$watchExpr:a}}}),i=["BUTTON","A","INPUT","TEXTAREA","SELECT","DETAILS","SUMMARY"],n=function(r,e){if(-1!==e.indexOf(r[0].nodeName))return!0};a.directive("ngShow",["$aria",function(r){return r.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(r){return r.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(r){return r.$$watchExpr("ngValue","aria-checked",i,!1)}]).directive("ngChecked",["$aria",function(r){return r.$$watchExpr("ngChecked","aria-checked",i,!1)}]).directive("ngReadonly",["$aria",function(r){return r.$$watchExpr("ngReadonly","aria-readonly",i,!1)}]).directive("ngRequired",["$aria",function(r){return r.$$watchExpr("ngRequired","aria-required",i,!1)}]).directive("ngModel",["$aria",function(r){function e(e,a,t,c){return r.config(a)&&!t.attr(e)&&(c||!n(t,i))}function a(r,e){return!e.attr("role")&&e.attr("type")===r&&"INPUT"!==e[0].nodeName}return{restrict:"A",require:"ngModel",priority:200,compile:function(i,n){var t=function(r,e){var a=r.type,i=r.role;return"checkbox"===(a||i)||"menuitemcheckbox"===i?"checkbox":"radio"===(a||i)||"menuitemradio"===i?"radio":"range"===a||"progressbar"===i||"slider"===i?"range":""}(n);return{pre:function(r,e,a,i){"checkbox"===t&&(i.$isEmpty=function(r){return!1===r})},post:function(i,n,c,o){var u=e("tabindex","tabindex",n,!1);function d(){return o.$modelValue}switch(t){case"radio":case"checkbox":a(t,n)&&n.attr("role",t),e("aria-checked","ariaChecked",n,!1)&&i.$watch(d,"radio"===t?function(r){var e=c.value==o.$viewValue;n.attr("aria-checked",e)}:function(){n.attr("aria-checked",!o.$isEmpty(o.$viewValue))}),u&&n.attr("tabindex",0);break;case"range":if(a(t,n)&&n.attr("role","slider"),r.config("ariaValue")){var l=!n.attr("aria-valuemin")&&(c.hasOwnProperty("min")||c.hasOwnProperty("ngMin")),f=!n.attr("aria-valuemax")&&(c.hasOwnProperty("max")||c.hasOwnProperty("ngMax")),s=!n.attr("aria-valuenow");l&&c.$observe("min",function(r){n.attr("aria-valuemin",r)}),f&&c.$observe("max",function(r){n.attr("aria-valuemax",r)}),s&&i.$watch(d,function(r){n.attr("aria-valuenow",r)})}u&&n.attr("tabindex",0)}!c.hasOwnProperty("ngRequired")&&o.$validators.required&&e("aria-required","ariaRequired",n,!1)&&c.$observe("required",function(){n.attr("aria-required",!!c.required)}),e("aria-invalid","ariaInvalid",n,!0)&&i.$watch(function(){return o.$invalid},function(r){n.attr("aria-invalid",!!r)})}}}}}]).directive("ngDisabled",["$aria",function(r){return r.$$watchExpr("ngDisabled","aria-disabled",i,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(r,e,a,i){e.attr("aria-live")||e.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(r,e){return{restrict:"A",compile:function(a,t){var c=e(t.ngClick,null,!0);return function(e,a,t){n(a,i)||(r.config("bindRoleForClick")&&!a.attr("role")&&a.attr("role","button"),r.config("tabindex")&&!a.attr("tabindex")&&a.attr("tabindex",0),r.config("bindKeypress")&&!t.ngKeypress&&a.on("keypress",function(r){var a=r.which||r.keyCode;32!==a&&13!==a||e.$apply(function(){c(e,{$event:r})})}))}}}}]).directive("ngDblclick",["$aria",function(r){return function(e,a,t){!r.config("tabindex")||a.attr("tabindex")||n(a,i)||a.attr("tabindex",0)}}])}(window,window.angular);