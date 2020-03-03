"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(e,t,r){"use strict";var n,a=t.isDefined,i=t.isFunction,o=t.isString,u=t.isObject,s=t.isArray,l=t.forEach,c=t.extend,f=t.copy,p=t.toJson;function h(e,t){return c(new(c(function(){},{prototype:e})),t)}function $(e){return l(arguments,function(t){t!==e&&l(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function v(e){if(Object.keys)return Object.keys(e);var t=[];return l(e,function(e,r){t.push(r)}),t}function m(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for((n=n<0?Math.ceil(n):Math.floor(n))<0&&(n+=r);n<r;n++)if(n in e&&e[n]===t)return n;return-1}function d(e,t,r,n){var a,i=function(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}(r,n),o={},u=[];for(var s in i)if(i[s]&&i[s].params&&(a=v(i[s].params)).length)for(var l in a)m(u,a[l])>=0||(u.push(a[l]),o[a[l]]=e[a[l]]);return c({},o,t)}function g(e,t,r){if(!r)for(var n in r=[],e)r.push(n);for(var a=0;a<r.length;a++){var i=r[a];if(e[i]!=t[i])return!1}return!0}function y(e,t){var r={};return l(e,function(e){r[e]=t[e]}),r}function w(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return l(r,function(r){r in e&&(t[r]=e[r])}),t}function b(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)-1==m(r,n)&&(t[n]=e[n]);return t}function S(e,t){var r=s(e),n=r?[]:{};return l(e,function(e,a){t(e,a)&&(n[r?n.length:a]=e)}),n}function E(e,t){var r=s(e)?[]:{};return l(e,function(e,n){r[n]=t(e,n)}),r}function x(e,t){var n=1,i=2,s={},f=[],p=s,h=c(e.when(s),{$$promises:s,$$values:s});this.study=function(s){if(!u(s))throw new Error("'invocables' must be an object");var d=v(s||{}),g=[],y=[],w={};function S(e){return u(e)&&e.then&&e.$$promises}return l(s,function e(r,a){if(w[a]!==i){if(y.push(a),w[a]===n)throw y.splice(0,m(y,a)),new Error("Cyclic dependency: "+y.join(" -> "));if(w[a]=n,o(r))g.push(a,[function(){return t.get(r)}],f);else{var u=t.annotate(r);l(u,function(t){t!==a&&s.hasOwnProperty(t)&&e(s[t],t)}),g.push(a,r,u)}y.pop(),w[a]=i}}),s=y=w=null,function(n,i,o){if(S(n)&&o===r&&(o=i,i=n,n=null),n){if(!u(n))throw new Error("'locals' must be an object")}else n=p;if(i){if(!S(i))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else i=h;var s=e.defer(),f=s.promise,v=f.$$promises={},m=c({},n),y=1+g.length/3,w=!1;function E(){--y||(w||$(m,i.$$values),f.$$values=m,f.$$promises=f.$$promises||!0,delete f.$$inheritedValues,s.resolve(m))}function x(e){f.$$failure=e,s.reject(e)}if(a(i.$$failure))return x(i.$$failure),f;i.$$inheritedValues&&$(m,b(i.$$inheritedValues,d)),c(v,i.$$promises),i.$$values?(w=$(m,b(i.$$values,d)),f.$$inheritedValues=b(i.$$values,d),E()):(i.$$inheritedValues&&(f.$$inheritedValues=b(i.$$inheritedValues,d)),i.then(E,x));for(var P=0,j=g.length;P<j;P+=3)n.hasOwnProperty(g[P])?E():A(g[P],g[P+1],g[P+2]);function A(r,i,u){var s=e.defer(),c=0;function p(e){s.reject(e),x(e)}function h(){if(!a(f.$$failure))try{s.resolve(t.invoke(i,o,m)),s.promise.then(function(e){m[r]=e,E()},p)}catch(e){p(e)}}l(u,function(e){v.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(c++,v[e].then(function(t){m[e]=t,--c||h()},p))}),c||h(),v[r]=s.promise}return f}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function P(e,t,r){this.fromConfig=function(e,t,r){return a(e.template)?this.fromString(e.template,t):a(e.templateUrl)?this.fromUrl(e.templateUrl,t):a(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return i(e)?e(t):e},this.fromUrl=function(r,n){return i(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function j(e,t,a){t=c({params:{}},u(t)?t:{});var i,o,s,l,f=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,p=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,$="^",v=0,m=this.segments=[],d=a?a.params:{},g=this.params=a?a.params.$$new():new n.ParamSet,y=[];function w(t,r,a,i){if(y.push(t),d[t])return d[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(g[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return g[t]=new n.Param(t,r,a,i),g[t]}function b(e,t,r,n){var a=["",""],i=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return i;switch(r){case!1:a=["(",")"+(n?"?":"")];break;case!0:i=i.replace(/\/$/,""),a=["(?:/(",")|/)?"];break;default:a=["("+r+"|",")?"]}return i+a[0]+t+a[1]}function S(a,i){var o,u,s,l,c;return o=a[2]||a[3],c=t.params[o],s=e.substring(v,a.index),(u=i?a[4]:a[4]||("*"==a[1]?".*":null))&&(l=n.type(u)||h(n.type("string"),{pattern:new RegExp(u,t.caseInsensitive?"i":r)})),{id:o,regexp:u,segment:s,type:l,cfg:c}}for(this.source=e;(i=f.exec(e))&&!((o=S(i,!1)).segment.indexOf("?")>=0);)s=w(o.id,o.type,o.cfg,"path"),$+=b(o.segment,s.type.pattern.source,s.squash,s.isOptional),m.push(o.segment),v=f.lastIndex;var E=(l=e.substring(v)).indexOf("?");if(E>=0){var x=this.sourceSearch=l.substring(E);if(l=l.substring(0,E),this.sourcePath=e.substring(0,v+E),x.length>0)for(v=0;i=p.exec(x);)s=w((o=S(i,!0)).id,o.type,o.cfg,"search"),v=f.lastIndex}else this.sourcePath=e,this.sourceSearch="";$+=b(l)+(!1===t.strict?"/?":"")+"$",m.push(l),this.regexp=new RegExp($,t.caseInsensitive?"i":r),this.prefix=m[0],this.$$paramNames=y}function A(e){c(this,e)}function O(e,n){var u,l=[],f=null,p=!1;function h(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return!a(n)||n}function $(n,a,i,s,c){var h,$=s.baseHref(),v=n.url();function m(e){if(!e||!e.defaultPrevented){h&&n.url();h=r;var t,a=l.length;for(t=0;t<a;t++)if(u(l[t]))return;f&&u(f)}function u(e){var t=e(i,n);return!!t&&(o(t)&&n.replace().url(t),!0)}}function d(){return u=u||a.$on("$locationChangeSuccess",m)}return p||d(),{sync:function(){m()},listen:function(){return d()},update:function(e){e?v=n.url():n.url()!==v&&(n.url(v),n.replace())},push:function(e,t,a){var i=e.format(t||{});null!==i&&t&&t["#"]&&(i+="#"+t["#"]),n.url(i),h=a&&a.$$avoidResync?n.url():r,a&&a.replace&&n.replace()},href:function(r,a,i){if(!r.validates(a))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled),o=o&&c.history;var u=r.format(a);if(i=i||{},o||null===u||(u="#"+e.hashPrefix()+u),null!==u&&a&&a["#"]&&(u+="#"+a["#"]),u=function(e,t,r){return"/"===$?e:t?$.slice(0,-1)+e:r?$.slice(1)+e:e}(u,o,i.absolute),!i.absolute||!u)return u;var s=!o&&u?"/":"",l=n.port();return l=80===l||443===l?"":":"+l,[n.protocol(),"://",n.host(),l,s,u].join("")}}}this.rule=function(e){if(!i(e))throw new Error("'rule' must be a function");return l.push(e),this},this.otherwise=function(e){if(o(e)){var t=e;e=function(){return t}}else if(!i(e))throw new Error("'rule' must be a function");return f=e,this},this.when=function(e,t){var r,a=o(t);if(o(e)&&(e=n.compile(e)),!a&&!i(t)&&!s(t))throw new Error("invalid 'handler' in when()");var u={matcher:function(e,t){return a&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),c(function(r,n){return h(r,t,e.exec(n.path(),n.search()))},{prefix:o(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return a&&(r=t,t=["$match",function(e){return t=e,r.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]});var t}]),c(function(r,n){return h(r,t,e.exec(n.path()))},{prefix:(n=e,i=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(n.source),null!=i?i[1].replace(/\\(.)/g,"$1"):"")});var n,i}},l={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var f in l)if(l[f])return this.rule(u[f](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),p=e},this.$get=$,$.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function k(e,p){var $,b,S={},x={},P="abstract",j={parent:function(e){if(a(e.parent)&&e.parent)return A(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?A(t[1]):$},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=h(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(o(t))return"^"==t.charAt(0)?p.compile(t.substring(1),r):(e.parent.navigable||$).url.concat(t,r);if(!t||p.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new n.ParamSet;return l(e.params||{},function(e,r){t[r]||(t[r]=new n.Param(r,null,e,"config"))}),t},params:function(e){var t=w(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?c(e.parent.params.$$new(),t):new n.ParamSet},views:function(e){var t={};return l(a(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),r.resolveAs=r.resolveAs||e.resolveAs||"$resolve",t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?c({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};function A(e,t){if(!e)return r;var n,a=o(e),i=a?e:e.name;if(0===(n=i).indexOf(".")||0===n.indexOf("^")){if(!t)throw new Error("No reference point given for path '"+i+"'");t=A(t);for(var u=i.split("."),s=0,l=u.length,c=t;s<l;s++)if(""!==u[s]||0!==s){if("^"!==u[s])break;if(!c.parent)throw new Error("Path '"+i+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(s).join("."),i=c.name+(c.name&&u?".":"")+u}var f=S[i];return!f||!a&&(a||f!==e&&f.self!==e)?r:f}function O(t){var r=(t=h(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}})).name;if(!o(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(S.hasOwnProperty(r))throw new Error("State '"+r+"' is already defined");var n=-1!==r.indexOf(".")?r.substring(0,r.lastIndexOf(".")):o(t.parent)?t.parent:u(t.parent)&&o(t.parent.name)?t.parent.name:"";if(n&&!S[n])return function(e,t){x[e]||(x[e]=[]),x[e].push(t)}(n,t.self);for(var a in j)i(j[a])&&(t[a]=j[a](t,j.$delegates[a]));return S[r]=t,!t[P]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){b.$current.navigable==t&&g(e,r)||b.transitionTo(t,e,{inherit:!0,location:!1})}]),function(e){for(var t=x[e]||[];t.length;)O(t.shift())}(r),t}function k(e,p,x,j,O,k,q,C,I){var V=p.reject(new Error("transition superseded")),M=p.reject(new Error("transition prevented")),N=p.reject(new Error("transition aborted")),R=p.reject(new Error("transition failed"));function D(e,r,n,a,o,u){var c=n?r:y(e.params.$$keys(),r),f={$stateParams:c};o.resolve=O.resolve(e.resolve,f,o.resolve,e);var h=[o.resolve.then(function(e){o.globals=e})];return a&&h.push(a),p.all(h).then(function(){var r=[];return l(e.views,function(n,a){var l=n.resolve&&n.resolve!==e.resolve?n.resolve:{};l.$template=[function(){return x.load(a,{view:n,locals:o.globals,params:c,notify:u.notify})||""}],r.push(O.resolve(l,o.globals,o.resolve,e).then(function(r){if(i(n.controllerProvider)||s(n.controllerProvider)){var u=t.extend({},l,o.globals);r.$$controller=j.invoke(n.controllerProvider,null,u)}else r.$$controller=n.controller;r.$$state=e,r.$$controllerAs=n.controllerAs,r.$$resolveAs=n.resolveAs,o[a]=r}))}),p.all(r).then(function(){return o.globals})}).then(function(e){return o})}return $.locals={resolve:null,globals:{$stateParams:{}}},(b={params:{},current:$.self,$current:$,transition:null}).reload=function(e){return b.transitionTo(b.current,k,{reload:e||!0,inherit:!1,notify:!0})},b.go=function(e,t,r){return b.transitionTo(e,t,c({inherit:!0,relative:b.$current},r))},b.transitionTo=function(t,r,i){r=r||{},i=c({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},i||{});var s=b.$current,l=b.params,v=s.path,m=A(t,i.relative),g=r["#"];if(!a(m)){var S={to:t,toParams:r,options:i},E=function(t,r,n,a){var i=e.$broadcast("$stateNotFound",t,r,n);if(i.defaultPrevented)return q.update(),N;if(!i.retry)return null;if(a.$retry)return q.update(),R;var o=b.transition=p.when(i.retry);return o.then(function(){return o!==b.transition?V:(t.options.$retry=!0,b.transitionTo(t.to,t.toParams,t.options))},function(){return N}),q.update(),o}(S,s.self,l,i);if(E)return E;if(r=S.toParams,m=A(t=S.to,(i=S.options).relative),!a(m)){if(!i.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+i.relative+"'")}}if(m[P])throw new Error("Cannot transition to abstract state '"+t+"'");if(i.inherit&&(r=d(k,r||{},b.$current,m)),!m.params.$$validates(r))return R;r=m.params.$$values(r);var x=(t=m).path,O=0,C=x[O],I=$.locals,F=[];if(i.reload){if(o(i.reload)||u(i.reload)){if(u(i.reload)&&!i.reload.name)throw new Error("Invalid reload state object");var U=!0===i.reload?v[0]:A(i.reload);if(i.reload&&!U)throw new Error("No such reload state '"+(o(i.reload)?i.reload:i.reload.name)+"'");for(;C&&C===v[O]&&C!==U;)I=F[O]=C.locals,C=x[++O]}}else for(;C&&C===v[O]&&C.ownParams.$$equals(r,l);)I=F[O]=C.locals,C=x[++O];if(function(e,t,r,a,i,o){if(!o.reload&&e===r&&(i===r.locals||!1===e.self.reloadOnSearch&&function(e,t,r){var a=e.params.$$keys().filter(function(t){return"search"!=e.params[t].location}),i=w.apply({},[e.params].concat(a));return new n.ParamSet(i).$$equals(t,r)}(r,a,t)))return!0}(t,r,s,l,I,i))return g&&(r["#"]=g),b.params=r,f(b.params,k),f(y(t.params.$$keys(),k),t.locals.globals.$stateParams),i.location&&t.navigable&&t.navigable.url&&(q.push(t.navigable.url,r,{$$avoidResync:!0,replace:"replace"===i.location}),q.update(!0)),b.transition=null,p.when(b.current);if(r=y(t.params.$$keys(),r||{}),g&&(r["#"]=g),i.notify&&e.$broadcast("$stateChangeStart",t.self,r,s.self,l,i).defaultPrevented)return e.$broadcast("$stateChangeCancel",t.self,r,s.self,l),null==b.transition&&q.update(),M;for(var T=p.when(I),z=O;z<x.length;C=x[++z])I=F[z]=h(I),T=D(C,r,C===t,T,I,i);var L=b.transition=T.then(function(){var n,a,o;if(b.transition!==L)return V;for(n=v.length-1;n>=O;n--)(o=v[n]).self.onExit&&j.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(n=O;n<x.length;n++)(a=x[n]).locals=F[n],a.self.onEnter&&j.invoke(a.self.onEnter,a.self,a.locals.globals);return b.transition!==L?V:(b.$current=t,b.current=t.self,b.params=r,f(b.params,k),b.transition=null,i.location&&t.navigable&&q.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===i.location}),i.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,s.self,l),q.update(!0),b.current)}).then(null,function(n){return b.transition!==L?V:(b.transition=null,e.$broadcast("$stateChangeError",t.self,r,s.self,l,n).defaultPrevented||q.update(),p.reject(n))});return L},b.is=function(e,t,n){var i=A(e,(n=c({relative:b.$current},n||{})).relative);return a(i)?b.$current===i&&(!t||g(i.params.$$values(t),k)):r},b.includes=function(e,t,n){if(n=c({relative:b.$current},n||{}),o(e)&&e.indexOf("*")>-1){if(!function(e){for(var t=e.split("."),r=b.$current.name.split("."),n=0,a=t.length;n<a;n++)"*"===t[n]&&(r[n]="*");return"**"===t[0]&&(r=r.slice(m(r,t[1]))).unshift("**"),"**"===t[t.length-1]&&(r.splice(m(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length==r.length&&r.join("")===t.join("")}(e))return!1;e=b.$current.name}var i=A(e,n.relative);return a(i)?!!a(b.$current.includes[i.name])&&(!t||g(i.params.$$values(t),k,v(t))):r},b.href=function(e,t,n){var i=A(e,(n=c({lossy:!0,inherit:!0,absolute:!1,relative:b.$current},n||{})).relative);if(!a(i))return null;n.inherit&&(t=d(k,t||{},b.$current,i));var o=i&&n.lossy?i.navigable:i;return o&&o.url!==r&&null!==o.url?q.href(o.url,y(i.params.$$keys().concat("#"),t||{}),{absolute:n.absolute}):null},b.get=function(e,t){if(0===arguments.length)return E(v(S),function(e){return S[e].self});var r=A(e,t||b.$current);return r&&r.self?r.self:null},b}($=O({name:"",url:"^",views:null,abstract:!0})).navigable=null,this.decorator=function(e,t){if(o(e)&&!a(t))return j[e];if(!i(t)||!o(e))return this;j[e]&&!j.$delegates[e]&&(j.$delegates[e]=j[e]);return j[e]=t,this},this.state=function(e,t){u(e)?t=e:t.name=e;return O(t),this},this.$get=k,k.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function q(){function e(e,t){return{load:function(e,r){var n;return(r=c({template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}},r)).view&&(n=t.fromConfig(r.view,r.params,r.locals)),n}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function C(e,r,n,a,i){var o=r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(e){return null}},u=o("$animator"),s=o("$animate");return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,o,l){return function(r,o,c){var f,p,h,$,v=c.onload||"",m=c.autoscroll,d=function(e,r){if(s)return{enter:function(e,r,n){t.version.minor>2?s.enter(e,null,r).then(n):s.enter(e,null,r,n)},leave:function(e,r){t.version.minor>2?s.leave(e).then(r):s.leave(e,r)}};if(u){var n=u&&u(r,e);return{enter:function(e,t,r){n.enter(e,null,t),r()},leave:function(e,t){n.leave(e),t()}}}return{enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}}}(c,r);o.inheritedData("$uiView");function g(u){var s,g=V(r,c,o,a),y=g&&e.$current&&e.$current.locals[g];if(u||y!==$){s=r.$new(),$=e.$current.locals[g],s.$emit("$viewContentLoading",g);var w=l(s,function(e){var a=i.defer(),u=i.defer(),s={$animEnter:a.promise,$animLeave:u.promise,$$animLeave:u};e.data("$uiViewAnim",s),d.enter(e,o,function(){a.resolve(),h&&h.$emit("$viewContentAnimationEnded"),(t.isDefined(m)&&!m||r.$eval(m))&&n(e)}),function(){if(f&&(f.remove(),f=null),h&&(h.$destroy(),h=null),p){var e=p.data("$uiViewAnim");d.leave(p,function(){e.$$animLeave.resolve(),f=null}),f=p,p=null}}()});p=w,(h=s).$emit("$viewContentLoaded",g),h.$eval(v)}}r.$on("$stateChangeSuccess",function(){g(!1)}),g(!0)}}}}function I(e,r,n,a){return{restrict:"ECA",priority:-400,compile:function(o){var u=o.html();return function(o,s,l){var c=n.$current,f=V(o,l,s,a),p=c&&c.locals[f];if(p){s.data("$uiView",{name:f,state:p.$$state}),s.html(p.$template?p.$template:u);var h=t.extend({},p);o[p.$$resolveAs]=h;var $=e(s.contents());if(p.$$controller){p.$scope=o,p.$element=s;var v=r(p.$$controller,p);p.$$controllerAs&&(o[p.$$controllerAs]=v,o[p.$$controllerAs][p.$$resolveAs]=h),i(v.$onInit)&&v.$onInit(),s.data("$ngControllerController",v),s.children().data("$ngControllerController",v)}$(o)}}}}}function V(e,t,r,n){var a=n(t.uiView||t.name||"")(e),i=r.inheritedData("$uiView");return a.indexOf("@")>=0?a:a+"@"+(i?i.state.name:"")}function M(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),!(r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/))||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function N(e){var t=e.parent().inheritedData("$uiView");if(t&&t.state&&t.state.name)return t.state}function R(e){var t="[object SVGAnimatedString]"===Object.prototype.toString.call(e.prop("href")),r="FORM"===e[0].nodeName;return{attr:r?"action":t?"xlink:href":"href",isAnchor:"A"===e.prop("tagName").toUpperCase(),clickable:!r}}function D(e,t,r,n,a){return function(i){var o=i.which||i.button,u=a();if(!(o>1||i.ctrlKey||i.metaKey||i.shiftKey||e.attr("target"))){var s=r(function(){t.go(u.state,u.params,u.options)});i.preventDefault();var l=n.isAnchor&&!u.href?1:0;i.preventDefault=function(){l--<=0&&r.cancel(s)}}}}function F(e,r){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,a,i,o){var u,s=M(i.uiSref,e.current.name),l={state:s.state,href:null,params:null},f=R(a),p=o[1]||o[0],h=null;l.options=c(function(e,t){return{relative:N(e)||t.$current,inherit:!0}}(a,e),i.uiSrefOpts?n.$eval(i.uiSrefOpts):{});var $=function(r){r&&(l.params=t.copy(r)),l.href=e.href(s.state,l.params,l.options),h&&h(),p&&(h=p.$$addStateInfo(s.state,l.params)),null!==l.href&&i.$set(f.attr,l.href)};s.paramExpr&&(n.$watch(s.paramExpr,function(e){e!==l.params&&$(e)},!0),l.params=t.copy(n.$eval(s.paramExpr))),$(),f.clickable&&(u=D(a,e,r,f,function(){return l}),a.bind("click",u),n.$on("$destroy",function(){a.unbind("click",u)}))}}}function U(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,n,a,i){var o,u=R(n),s=i[1]||i[0],l="["+[a.uiState,a.uiStateParams||null,a.uiStateOpts||null].map(function(e){return e||"null"}).join(", ")+"]",c={state:null,params:null,options:null,href:null},f=null;function p(t){c.state=t[0],c.params=t[1],c.options=t[2],c.href=e.href(c.state,c.params,c.options),f&&f(),s&&(f=s.$$addStateInfo(c.state,c.params)),c.href&&a.$set(u.attr,c.href)}r.$watch(l,p,!0),p(r.$eval(l)),u.clickable&&(o=D(n,e,t,u,function(){return c}),n.bind("click",o),r.$on("$destroy",function(){n.unbind("click",o)}))}}}function T(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,n,a,i){var s,c,f=[],h={};s=r(a.uiSrefActiveEq||"",!1)(t);try{c=t.$eval(a.uiSrefActive)}catch(e){}function $(r,a,i){var s=e.get(r,N(n)),l=function(e,r){if(!o(e))throw new Error("state should be a string");if(u(r))return e+p(r);if(r=t.$eval(r),u(r))return e+p(r);return e}(r,a),c={state:s||{name:r},params:a,hash:l};return f.push(c),h[l]=i,function(){var e=f.indexOf(c);-1!==e&&f.splice(e,1)}}function v(){for(var t=0;t<f.length;t++)r=f[t].state,a=f[t].params,e.includes(r.name,a)?m(n,h[f[t].hash]):d(n,h[f[t].hash]),g(f[t].state,f[t].params)?m(n,s):d(n,s);var r,a}function m(e,t){i(function(){e.addClass(t)})}function d(e,t){e.removeClass(t)}function g(t,r){return e.is(t.name,r)}c=c||r(a.uiSrefActive||"",!1)(t),u(c)&&l(c,function(r,n){if(o(r)){var a=M(r,e.current.name);$(a.state,t.$eval(a.paramExpr),n)}}),this.$$addStateInfo=function(e,t){if(!(u(c)&&f.length>0)){var r=$(e,t,c);return v(),r}},t.$on("$stateChangeSuccess",v),v()}]}}function z(e){var t=function(t,r){return e.is(t,r)};return t.$stateful=!0,t}function L(e){var t=function(t,r,n){return e.includes(t,r,n)};return t.$stateful=!0,t}t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),x.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",x),P.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",P),j.prototype.concat=function(e,t){var r={caseInsensitive:n.caseInsensitive(),strict:n.strictMode(),squash:n.defaultSquashPolicy()};return new j(this.sourcePath+e+this.sourceSearch,c(r,t),this)},j.prototype.toString=function(){return this.source},j.prototype.exec=function(e,t){var r=this.regexp.exec(e);if(!r)return null;t=t||{};var n,i,o,u,s,l=this.parameters(),c=l.length,f=this.segments.length-1,p={};if(f!==r.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");function h(e){function t(e){return e.split("").reverse().join("")}var r=E(t(e).split(/-(?!\\)/),t);return E(r,function(e){return e.replace(/\\-/g,"-")}).reverse()}for(n=0;n<f;n++){for(o=l[n],u=this.params[o],s=r[n+1],i=0;i<u.replace.length;i++)u.replace[i].from===s&&(s=u.replace[i].to);s&&!0===u.array&&(s=h(s)),a(s)&&(s=u.type.decode(s)),p[o]=u.value(s)}for(;n<c;n++){for(p[o=l[n]]=this.params[o].value(t[o]),u=this.params[o],s=t[o],i=0;i<u.replace.length;i++)u.replace[i].from===s&&(s=u.replace[i].to);a(s)&&(s=u.type.decode(s)),p[o]=u.value(s)}return p},j.prototype.parameters=function(e){return a(e)?this.params[e]||null:this.$$paramNames},j.prototype.validates=function(e){return this.params.$$validates(e)},j.prototype.format=function(e){e=e||{};var t=this.segments,r=this.parameters(),n=this.params;if(!this.validates(e))return null;var a,i=!1,u=t.length-1,l=r.length,c=t[0];function f(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}for(a=0;a<l;a++){var p=a<u,h=r[a],$=n[h],v=$.value(e[h]),m=$.isOptional&&$.type.equals($.value(),v),d=!!m&&$.squash,g=$.type.encode(v);if(p){var y=t[a+1],w=a+1===u;if(!1===d)null!=g&&(s(g)?c+=E(g,f).join("-"):c+=encodeURIComponent(g)),c+=y;else if(!0===d){var b=c.match(/\/$/)?/\/?(.*)/:/(.*)/;c+=y.match(b)[1]}else o(d)&&(c+=d+y);w&&!0===$.squash&&"/"===c.slice(-1)&&(c=c.slice(0,-1))}else{if(null==g||m&&!1!==d)continue;if(s(g)||(g=[g]),0===g.length)continue;c+=(i?"&":"?")+h+"="+(g=E(g,encodeURIComponent).join("&"+h+"=")),i=!0}}return c},A.prototype.is=function(e,t){return!0},A.prototype.encode=function(e,t){return e},A.prototype.decode=function(e,t){return e},A.prototype.equals=function(e,t){return e==t},A.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},A.prototype.pattern=/.*/,A.prototype.toString=function(){return"{Type:"+this.name+"}"},A.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},A.prototype.$asArray=function(e,t){if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new function(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function i(e){return s(e)?e:a(e)?[e]:[]}function o(e){return!e}function u(e,n){return function(a){if(s(a)&&0===a.length)return a;var u=E(a=i(a),e);return!0===n?0===S(u,o).length:function(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}(u)}}var l;this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=(l=n(e,"equals"),function(e,t){var r=i(e),n=i(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++)if(!l(r[a],n[a]))return!1;return!0}),this.pattern=e.pattern,this.$normalize=u(n(e,"$normalize")),this.name=e.name,this.$arrayMode=t}(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",function e(){n=this;var f=!1,p=!0,$=!1;function d(e){return null!=e?e.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):e}var g,y={},w=!0,b=[],x={string:{encode:d,decode:function(e){return null!=e?e.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):e},is:function(e){return null==e||!a(e)||"string"==typeof e},pattern:/[^\/]*/},int:{encode:d,decode:function(e){return parseInt(e,10)},is:function(e){return a(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return!0===e||!1===e},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^\/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};function P(e){return i(e)||s(e)&&i(e[e.length-1])}function O(){for(;b.length;){var e=b.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(y[e.name],g.invoke(e.def))}}function k(e){c(this,e||{})}e.$$getDefaultValue=function(e){if(!P(e.value))return e.value;if(!g)throw new Error("Injectable functions cannot be called at configuration time");return g.invoke(e.value)},this.caseInsensitive=function(e){return a(e)&&(f=e),f},this.strictMode=function(e){return a(e)&&(p=e),p},this.defaultSquashPolicy=function(e){if(!a(e))return $;if(!0!==e&&!1!==e&&!o(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return $=e,e},this.compile=function(e,t){return new j(e,c({strict:p,caseInsensitive:f},t))},this.isMatcher=function(e){if(!u(e))return!1;var t=!0;return l(j.prototype,function(r,n){i(r)&&(t=t&&a(e[n])&&i(e[n]))}),t},this.type=function(e,t,r){if(!a(t))return y[e];if(y.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return y[e]=new A(c({name:e},t)),r&&(b.push({name:e,def:r}),w||O()),this},l(x,function(e,t){y[t]=new A(c({name:t},e))}),y=h(y,{}),this.$get=["$injector",function(e){return g=e,w=!1,O(),l(x,function(e,t){y[t]||(y[t]=new A(e))}),this}],this.Param=function(e,n,i,l){var f=this;i=function(e){var t=u(e)?v(e):[];return-1===m(t,"value")&&-1===m(t,"type")&&-1===m(t,"squash")&&-1===m(t,"array")&&(e={value:e}),e.$$fn=P(e.value)?e.value:function(){return e.value},e}(i),n=function(r,n,a){if(r.type&&n)throw new Error("Param '"+e+"' has two type configurations.");return n||(r.type?t.isString(r.type)?y[r.type]:r.type instanceof A?r.type:new A(r.type):"config"===a?y.any:y.string)}(i,n,l);var p,h,d=(p={array:"search"===l&&"auto"},h=e.match(/\[\]$/)?{array:!0}:{},c(p,h,i).array);"string"!==(n=d?n.$asArray(d,"search"===l):n).name||d||"path"!==l||i.value!==r||(i.value="");var w=i.value!==r,b=function(e,t){var r=e.squash;if(!t||!1===r)return!1;if(!a(r)||null==r)return $;if(!0===r||o(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}(i,w),x=function(e,t,n,a){var i,u,l=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return i=s(e.replace)?e.replace:[],o(a)&&i.push({from:a,to:r}),u=E(i,function(e){return e.from}),S(l,function(e){return-1===m(u,e.from)}).concat(i)}(i,d,w,b);c(this,{id:e,type:n,location:l,array:d,squash:b,replace:x,isOptional:w,value:function(e){return e=function(e){var t,r=E(S(f.replace,(t=e,function(e){return e.from===t})),function(e){return e.to});return r.length?r[0]:e}(e),a(e)?f.type.$normalize(e):function(){if(!g)throw new Error("Injectable functions cannot be called at configuration time");var e=g.invoke(i.$$fn);if(null!==e&&e!==r&&!f.type.is(e))throw new Error("Default value ("+e+") for parameter '"+f.id+"' is not an instance of Type ("+f.type.name+")");return e}()},dynamic:r,config:i,toString:function(){return"{Param:"+e+" "+n+" squash: '"+b+"' optional: "+w+"}"}})},k.prototype={$$new:function(){return h(this,c(new k,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=v(k.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),l(t,function(t){l(v(t),function(t){-1===m(e,t)&&-1===m(n,t)&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return l(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return l(n.$$keys(),function(a){var i=e&&e[a],o=t&&t[a];n[a].type.equals(i,o)||(r=!1)}),r},$$validates:function(e){var n,a,i,o,u,s=this.$$keys();for(n=0;n<s.length&&(a=this[s[n]],(i=e[s[n]])!==r&&null!==i||!a.isOptional);n++){if(o=a.type.$normalize(i),!a.type.is(o))return!1;if(u=a.type.encode(o),t.isString(u)&&!a.type.pattern.exec(u))return!1}return!0},$$parent:r},this.ParamSet=k}),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),O.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",O),k.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",k).run(["$injector",function(e){e.get("$state.runtime").autoinject&&e.get("$state")}]),q.$inject=[],t.module("ui.router.state").provider("$view",q),t.module("ui.router.state").provider("$uiViewScroll",function(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){return r(function(){e[0].scrollIntoView()},0,!1)}}]}),C.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],I.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",C),t.module("ui.router.state").directive("uiView",I),F.$inject=["$state","$timeout"],U.$inject=["$state","$timeout"],T.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",F).directive("uiSrefActive",T).directive("uiSrefActiveEq",T).directive("uiState",U),z.$inject=["$state"],L.$inject=["$state"],t.module("ui.router.state").filter("isState",z).filter("includedByState",L)}(window,window.angular);