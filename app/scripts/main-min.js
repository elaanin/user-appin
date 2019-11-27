"use strict";function checkExpires(e){}function getJWTToken(){var e=localStorage.getItem("AUTH");return e?"Bearer "+JSON.parse(e).token:""}window.app_version=2;var href=document.location.href.includes("http://localhost");if(href)var baseUrl="http://lineblocs.com/api";else baseUrl="/api";function createUrl(e){return baseUrl+e}function generatePassword(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",o=0,n=e.length;o<32;++o)t+=e.charAt(Math.floor(Math.random()*n));return t}angular.module("MaterialApp",["ui.router","ngAnimate","ngMaterial","chart.js","pascalprecht.translate","md.data.table","ngIdle"]).service("JWTHttpInterceptor",function(){return{request:function(e){return localStorage.getItem("AUTH")&&(e.headers.Authorization=getJWTToken()),console.log("request headers are ",e.headers),e}}}).factory("SharedPref",function(e,t,o,n){var r=this;r.title="LineBlocs.com",r.FLOW_EDITOR_URL="http://editor.lineblocs.com",r.SHOW_NAVBAR=!0,r.PAGE_CONTENT_NO_PADDING=!1,r.isLoading=!0,r.billingCountries=[{iso:"CA",name:"Canada"},{iso:"US",name:"United States"}];return r.endIsLoading=function(){return n(function(e,t){o(function(){r.isLoading=!1,e()},0)})},r.endIsCreateLoading=function(){return n(function(e,t){o(function(){r.isCreateLoading=!1,e()},0)})},r.changeRoute=function(t,o){console.log("changeRoute called ",arguments);o=o||{};["flow-editor"].includes(t)||(r.isLoading=!0),e.go(t,o)},r.collapseNavbar=function(){r.SHOW_NAVBAR=!1,r.PAGE_CONTENT_NO_PADDING=!0,$(".c-hamburger").removeClass("is-active"),$("body").removeClass("extended")},r.showNavbar=function(){r.SHOW_NAVBAR=!0,r.PAGE_CONTENT_NO_PADDING=!1,$(".c-hamburger").addClass("is-active"),$("body").addClass("extended")},r.doLogout=function(){localStorage.removeItem("AUTH"),e.go("login",{})},r.setAuthToken=function(e){localStorage.setItem("AUTH",JSON.stringify(e))},r.getAuthToken=function(){return JSON.parse(localStorage.getItem("AUTH"))},r.showError=function(e,o){t.show(t.alert().parent(angular.element(document.querySelector("#popupContainer"))).clickOutsideToClose(!0).title(e).textContent(o).ariaLabel(e).ok("Ok"))},r.updateTitle=function(e){r.title="LineBlocs.com",e&&(r.title="LineBlocs.com - "+e)},r}).factory("Backend",function(e,t,o){function n(e){o.showError("An error occured.")}return this.getJWTToken=function(o,n){var r={email:o,password:n};return t(function(t,o){e.post(createUrl("/jwt/authenticate"),r).then(function(e){localStorage.setItem("AUTH",JSON.stringify(e.data)),t()}).catch(function(e){o(e)})})},this.get=function(o,r){return t(function(t,a){e.get(createUrl(o),r).then(t,function(e){n(),a(e)})})},this.delete=function(o){return t(function(t,r){e.delete(createUrl(o),params).then(t,function(e){n(),r(e)})})},this.post=function(o,r,a){return t(function(t,i){e.post(createUrl(o),r).then(t,function(e){a||n(),i(e)})})},this}).config(["$httpProvider",function(e){e.interceptors.push("JWTHttpInterceptor")}]).config(function(e,t){e.idle(900),e.timeout(60),t.interval(600)}).config(function(e){e.useStaticFilesLoader({prefix:"languages/",suffix:".json"}),e.useSanitizeValueStrategy(null),e.preferredLanguage("en")}).config(function(e,t){t.when("/dashboard","/dashboard/home"),t.otherwise("/dashboard/home"),e.state("base",{abstract:!0,url:"",templateUrl:"views/base.html?v="+window.app_version,controller:"DashboardCtrl"}).state("login",{url:"/login",parent:"base",templateUrl:"views/pages/login.html?v="+window.app_version,controller:"LoginCtrl"}).state("register",{url:"/register",parent:"base",templateUrl:"views/pages/register.html?v="+window.app_version,controller:"RegisterCtrl"}).state("forgot",{url:"/forgot",parent:"base",templateUrl:"views/pages/forgot.html?v="+window.app_version,controller:"ForgotCtrl"}).state("reset",{url:"/reset",parent:"base",templateUrl:"views/pages/reset.html?v="+window.app_version,controller:"ResetCtrl"}).state("404",{url:"/404-page",parent:"base",templateUrl:"views/pages/404-page.html?v="+window.app_version}).state("dashboard",{url:"/dashboard",parent:"base",templateUrl:"views/layouts/dashboard.html?v="+window.app_version,controller:"DashboardCtrl"}).state("dashboard-user-welcome",{url:"/dashboard/welcome",parent:"dashboard",templateUrl:"views/pages/dashboard-welcome.html?v="+window.app_version,controller:"DashboardWelcomeCtrl"}).state("my-numbers",{url:"/dids/my-numbers",parent:"dashboard",templateUrl:"views/pages/did/my-numbers.html?v="+window.app_version,controller:"MyNumbersCtrl"}).state("my-numbers-edit",{url:"/dids/my-numbers/{numberId}/edit",parent:"dashboard",templateUrl:"views/pages/did/my-numbers-edit.html?v="+window.app_version,controller:"MyNumbersEditCtrl"}).state("buy-numbers",{url:"/dids/buy-numbers",parent:"dashboard",templateUrl:"views/pages/did/buy-numbers.html?v="+window.app_version,controller:"BuyNumbersCtrl"}).state("flows",{url:"/flows",parent:"dashboard",templateUrl:"views/pages/flows.html?v="+window.app_version,controller:"FlowsCtrl"}).state("flow-editor",{url:"/flows/{flowId}",parent:"dashboard",templateUrl:"views/pages/flow-editor.html?v="+window.app_version,controller:"FlowEditorCtrl"}).state("extensions",{url:"/extensions",parent:"dashboard",templateUrl:"views/pages/extensions.html?v="+window.app_version,controller:"ExtensionsCtrl"}).state("extension-create",{url:"/extension/create",parent:"dashboard",templateUrl:"views/pages/extension-create.html?v="+window.app_version,controller:"ExtensionCreateCtrl"}).state("extension-edit",{url:"/extension/{extensionId}/edit",parent:"dashboard",templateUrl:"views/pages/extension-edit.html?v="+window.app_version,controller:"ExtensionEditCtrl"}).state("calls",{url:"/calls",parent:"dashboard",templateUrl:"views/pages/calls.html?v="+window.app_version,controller:"CallsCtrl"}).state("call-view",{url:"/call/{callId}/view",parent:"dashboard",templateUrl:"views/pages/call-view.html?v="+window.app_version,controller:"CallViewCtrl"}).state("recordings",{url:"/recordings",parent:"dashboard",templateUrl:"views/pages/recordings.html?v="+window.app_version,controller:"RecordingsCtrl"}).state("billing",{url:"/billing",parent:"dashboard",templateUrl:"views/pages/billing.html?v="+window.app_version,controller:"BillingCtrl"}).state("billing-add-card",{url:"/billing/add-card",parent:"dashboard",templateUrl:"views/pages/billing-add-card.html?v="+window.app_version,controller:"BillingCtrl"}).state("home",{url:"/home",parent:"dashboard",templateUrl:"views/pages/dashboard/home.html?v="+window.app_version,controller:"HomeCtrl"}).state("settings",{url:"/settings",parent:"dashboard",templateUrl:"views/pages/settings.html?v="+window.app_version,controller:"SettingsCtrl"}).state("blank",{url:"/blank",parent:"dashboard",templateUrl:"views/pages/dashboard/blank.html?v="+window.app_version}).state("profile",{url:"/profile",parent:"dashboard",templateUrl:"views/pages/dashboard/profile.html?v="+window.app_version,controller:"profileCtrl"}).state("form",{url:"/form",parent:"dashboard",templateUrl:"views/pages/dashboard/form.html?v="+window.app_version,controller:"formCtrl"}).state("button",{url:"/ui-elements/button",parent:"dashboard",templateUrl:"views/pages/dashboard/ui-elements/button.html?v="+window.app_version}).state("card",{url:"/ui-elements/card",parent:"dashboard",templateUrl:"views/pages/dashboard/ui-elements/card.html?v="+window.app_version,controller:"cardCtrl"}).state("components",{url:"/ui-elements/components",parent:"dashboard",templateUrl:"views/pages/dashboard/component.html?v="+window.app_version,controller:"componentCtrl"}).state("chartjs",{url:"/charts/chart.js",parent:"dashboard",templateUrl:"views/pages/dashboard/charts/chartjs.html?v="+window.app_version,controller:"ChartCtrl"}).state("c3chart",{url:"/charts/c3chart",parent:"dashboard",templateUrl:"views/pages/dashboard/charts/c3chart.html?v="+window.app_version}).state("calendar",{url:"/calendar",parent:"dashboard",templateUrl:"views/pages/dashboard/calendar.html?v="+window.app_version,controller:"calendarCtrl"}).state("invoice",{url:"/invoice",parent:"dashboard",templateUrl:"views/pages/dashboard/invoice.html?v="+window.app_version}).state("inbox",{url:"/mail/inbox",parent:"dashboard",templateUrl:"views/pages/dashboard/mail/inbox.html?v="+window.app_version,controller:"paperCtrl"}).state("docs",{url:"/docs",parent:"dashboard",templateUrl:"views/pages/dashboard/docs.html?v="+window.app_version,controller:"docsCtrl"})}).run(function(e,t){e.$on("IdleStart",function(){}),e.$on("IdleTimeout",function(){t.doLogout()}),e.$on("$stateChangeStart",function(e,o,n,r,a){t.showNavbar()})}),angular.module("MaterialApp").controller("BillingCtrl",function(e,t,o,n,r,a,i,s,l,d){function u(t,o){var n={};n.card_id=t,n.amount=o,e.data.creditAmount.value,a.isCreateLoading=!0,r.post("/credit/addCredit",n).then(function(e){console.log("added credit amount"),s.show(s.simple().textContent("Added credits successfully").position("top right").hideDelay(3e3)),g()}),a.endIsCreateLoading()}function c(e){return n(function(t,o){var n={};n.stripe_token=e.id,n.stripe_card=e.card.id,n.last_4=e.card.last4,n.issuer=e.card.brand,a.isCreateLoading=!0,r.post("/card/addCard",n).then(function(e){t(e),a.endIsCreateLoading()},function(e){console.error("an error occured ",e)})})}function p(e,t,o,n,r,a){function i(r,a){t(function(){e.$apply(),a.error?e.errorMsg=a.error.message:(o.hide(),n(a))},0)}e.SharedPref=a,e.card={name:"",address:"",city:"",postal_code:"",number:"",expires:"",cvv:""},e.cancel=function(){o.cancel()},e.submit=function(){var t={};t.number=e.card.number,t.cvc=e.card.cvv;var o=e.card.expires.split("/");t.exp_month=o[0],t.exp_year=o[1],t.address_zip=e.card.postal_code,Stripe.card.createToken(t,i)}}function g(){a.isLoading=!0,r.get("/billing").then(function(t){console.log("finished loading.."),e.billing=t.data[0],e.settings.db=t.data[0].info.settings;var o=parseFloat(e.settings.db.auto_recharge_top_up_dollars);if(e.settings.db.auto_recharge_top_up)for(var n in e.creditAmounts){var r=e.creditAmounts[n];console.log("comparing amount ",r,o),r.value===o&&(e.settings.db.auto_recharge_top_up=r)}e.cards=t.data[1],e.config=t.data[2],e.history=t.data[3],console.log("config is ",e.config),Stripe.setPublishableKey(e.config.stripe.key),console.log("billing data is ",e.billing),console.log("cards are ",e.cards),console.log("settings are ",e.settings),e.creditAmount=e.creditAmounts[0],a.endIsLoading()})}a.updateTitle("Billing"),e.SharedPref=a,e.triedSubmit=!1,e.cards=[],e.creditAmounts=[{name:"$10",value:10},{name:"$25",value:25},{name:"$50",value:50},{name:"$100",value:100},{name:"$250",value:250}],e.settings={newCard:!1,type:"CARD"},e.data={selectedCard:null,creditAmount:null},e.card={name:"",address:"",city:"",postal_code:"",number:"",expires:"",cvv:""},e.createLabel=function(e){return"**** **** **** "+e.last_4},e.addCard=function(t){l.show({controller:p,templateUrl:"/views/dialogs/add-card.html",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,locals:{onSuccess:function(e){c(e).then(function(){g()})},onError:function(){}}}).then(function(t){e.status='You said the information was "'+t+'".'},function(){e.status="You cancelled the dialog."})},e.addCredit=function(){var t={};if(console.log("card is ",e.data.selectedCard),console.log("amount is ",e.data.creditAmount),e.data.selectedCard){if("new"===e.data.selectedCard){(t={}).number=e.card.number,t.cvc=e.card.cvv;var n=e.card.expires.split("/");return t.exp_month=n[0],t.exp_year=n[1],t.address_zip=e.card.postal_code,void Stripe.card.createToken(t,function(t,n){n.error?e.errorMsg=n.error.message:(l.hide(),c(n).then(function(t){u(t.headers("X-Card-ID"),e.data.creditAmount.value)})),o(function(){e.$apply()},0)})}u(e.data.selectedCard,e.data.creditAmount.value)}},e.addCreditPayPal=function(){var t={};console.log("card is ",e.data.selectedCard),console.log("amount is ",e.data.creditAmount),t.amount=e.data.creditAmount.value,a.isCreateLoading=!0,r.post("/credit/checkoutWithPayPal",t).then(function(e){var t=e.data;d.location.href=t.url})},e.getCardOptions=function(){angular.copy(e.cards)},e.changeCard=function(t){console.log("changeCard ",t),e.data.selectedCard=t,e.settings.newCard="new"===t},e.changeAmount=function(t){console.log("changeAmount ",t),e.data.creditAmount=t},e.changeAutoRechargeAmount=function(t){console.log("changeAutoRechargeAmount ",t),e.settings.db.auto_recharge_top_up=t},e.changeType=function(t){e.settings.type=t},e.saveSettings=function(){var t={};t.auto_recharge=e.settings.db.auto_recharge;var o=e.settings.db.auto_recharge_top_up.value;t.auto_recharge_top_up=100*o,console.log("recharge in cents is ",t.auto_recharge_top_up),a.isCreateLoading=!0,r.post("/changeBillingSettings",t).then(function(e){s.show(s.simple().textContent("Saved billing settings").position("top right").hideDelay(3e3))}),a.endIsCreateLoading()},g()}),angular.module("MaterialApp").controller("BuyNumbersCtrl",function(e,t,o,n,r,a){function i(e,t,o){e.number=o,e.cancel=function(){t.cancel()},e.gotoSettings=function(){t.hide(""),n.go("my-numbers-edit",{numberId:o.id})}}a.updateTitle("Buy Numbers"),e.countries=[{iso:"CA",name:"Canada"},{iso:"US",name:"United States"}],e.settings={country:"",region:"",pattern:"",rate_center:""},e.numbers=[],e.didFetch=!1,e.load=function(){a.endIsLoading()},e.fetch=function(o,n){if(e.triedSubmit=!0,n.$valid){var r={};r.region=e.settings.region,r.rate_center=e.settings.rate_center,r.prefix="",r.country_iso=e.settings.country.iso,a.isCreateLoading=!0,t.get("/did/available",{params:r}).then(function(t){e.numbers=t.data,e.didFetch=!0,a.endIsCreateLoading()})}},e.buyNumber=function(o,n){var s=r.confirm().title('Are you sure you want to purchase number "'+n.number+'"?').textContent("this number will cost you "+n.monthly_cost+" monthly. you may unrent this number at any time ").ariaLabel("Buy number").targetEvent(o).ok("Yes").cancel("No");r.show(s).then(function(){var s={};s.api_number=n.api_number,s.number=n.number,s.region=n.region,s.monthly_cost=n.monthly_cost,s.provider=n.provider,s.country=n.country,t.post("/did/saveNumber",s).then(function(n){t.get("/did/numberData/"+n.headers("X-Number-ID")).then(function(t){var n=t.data;!function(t,o){r.show({controller:i,templateUrl:"views/dialogs/purchase-did-confirm.html",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,fullscreen:e.customFullscreen,locals:{number:o}}).then(function(){},function(){})}(o,n)})},function(e){if(console.log("res is: ",e),400===e.status){var t=e.data;a.showError("Error",t.message)}})},function(){})},e.changeCountry=function(t){console.log("changeCountry ",t),e.settings.country=t},e.load()}),angular.module("MaterialApp").controller("CallViewCtrl",function(e,t,o,n,r,a,i,s){s.updateTitle("Call View"),e.call=[],e.load=function(){s.isLoading=!0,t.get("/call/callData/"+a.callId).then(function(t){console.log("call is ",t.data),s.isLoading=!1;var o=t.data;o.recordings=o.recordings.map(function(e){return e.uri=i.trustAsResourceUrl(e.uri),e}),e.call=o})},e.load()}),angular.module("MaterialApp").controller("CallsCtrl",function(e,t,o,n,r,a){a.updateTitle("Calls"),e.settings={page:0},e.calls=[],e.load=function(){a.isLoading=!0,t.get("/call/listCalls",e.settings).then(function(t){e.calls=t.data.data,a.endIsLoading()})},e.viewCall=function(e){n.go("call-view",{callId:e.id})},e.load()}),angular.module("MaterialApp").controller("DashboardWelcomeCtrl",function(e,t,o,n){o.updateTitle("Dashboard"),n.all([t.get("/self"),t.get("/getBillingInfo")]).then(function(e){o.userInfo=e[0].data,o.billInfo=e[1].data,o.endIsLoading()})}),angular.module("MaterialApp").controller("ExtensionCreateCtrl",function(e,t,o,n,r,a,i){i.updateTitle("Create Extension"),e.values={username:"",secret:""},e.ui={showSecret:!1,secretStrength:0},e.triedSubmit=!1,e.generateSecret=function(){e.values.secret=generatePassword()},e.showSecret=function(){e.ui.showSecret=!0},e.hideSecret=function(){e.ui.showSecret=!1},e.submit=function(o){if(console.log("submitting extension form ",arguments),e.triedSubmit=!0,o.$valid){var r={};r.username=e.values.username,r.caller_id=e.values.caller_id,r.secret=e.values.secret;var s={bottom:!1,top:!0,left:!1,right:!0},l=Object.keys(s).filter(function(e){return s[e]}).join(" ");console.log("toastPosStr",l),i.isCreateLoading=!0,t.post("/extension/saveExtension",r).then(function(){console.log("updated extension.."),a.show(a.simple().textContent("Created extension").position("top right").hideDelay(3e3)),n.go("extensions",{}),i.endIsCreateLoading()})}},e.keyupSecret=function(){var t=zxcvbn(e.values.secret);e.ui.secretStrength=(25*t.score).toString()+"%"}}),angular.module("MaterialApp").controller("ExtensionEditCtrl",function(e,t,o,n,r,a,i,s){s.updateTitle("Edit Extension"),e.values={username:"",secret:""},e.ui={showSecret:!1,secretStrength:0},e.triedSubmit=!1,e.load=function(){s.isLoading=!0,t.get("/extension/extensionData/"+i.extensionId).then(function(t){e.extension=t.data,e.values=angular.copy(e.extension),s.endIsLoading()})},e.generateSecret=function(){e.values.secret=generatePassword()},e.showSecret=function(){e.ui.showSecret=!0},e.hideSecret=function(){e.ui.showSecret=!1},e.submit=function(o){if(console.log("submitting extension form ",arguments),e.triedSubmit=!0,o.$valid){var r={};r.username=e.values.username,r.secret=e.values.secret,r.caller_id=e.values.caller_id;var l={bottom:!1,top:!0,left:!1,right:!0},d=Object.keys(l).filter(function(e){return l[e]}).join(" ");console.log("toastPosStr",d),s.isCreateLoading=!0,t.post("/extension/updateExtension/"+i.extensionId,r).then(function(){console.log("updated extension.."),a.show(a.simple().textContent("Updated extension").position("top right").hideDelay(3e3)),n.go("extensions",{}),s.endIsCreateLoading()})}},e.keyupSecret=function(){var t=zxcvbn(e.values.secret);e.ui.secretStrength=(25*t.score).toString()+"%"},e.load()}),angular.module("MaterialApp").controller("ExtensionsCtrl",function(e,t,o,n,r,a,i){function s(e,t,o,n){e.SharedPref=n,e.extension=o,e.close=function(){t.hide()}}i.updateTitle("Extensions"),e.settings={page:0},e.extensions=[],e.load=function(){i.isLoading=!0,t.get("/extension/listExtensions",e.settings).then(function(t){e.extensions=t.data.data,i.endIsLoading()})},e.editExtension=function(e){n.go("extension-edit",{extensionId:e.id})},e.createExtension=function(e){n.go("extension-create",{})},e.connectInfo=function(t,o){r.show({controller:s,templateUrl:"views/dialogs/extension-connect-info.html",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,fullscreen:e.customFullscreen,locals:{extension:o}}).then(function(){},function(){})},e.deleteExtension=function(o,n){var i=r.confirm().title("Are you sure you want to delete this extension?").textContent("This will permantely remove the extension and you will no longer be able to use it").ariaLabel("Delete extension").targetEvent(o).ok("Yes").cancel("No");r.show(i).then(function(){t.delete("/extension/deleteExtension/"+n.id).then(function(){a.show(a.simple().textContent("Extension deleted..").position("top right").hideDelay(3e3)),e.load()})},function(){})},e.load()}),angular.module("MaterialApp").controller("FlowEditorCtrl",function(e,t,o,n,r,a,i,s){var l;a.updateTitle("Flow Editor"),e.settings={page:0},e.numbers=[];var d=a.getAuthToken();l="new"===i.flowId?a.FLOW_EDITOR_URL+"/create?auth="+d.token:a.FLOW_EDITOR_URL+"/edit?flowId="+i.flowId+"&auth="+d.token,e.flowUrl=s.trustAsResourceUrl(l),console.log("flow url is ",e.flowUrl),a.collapseNavbar()}),angular.module("MaterialApp").controller("FlowsCtrl",function(e,t,o,n,r,a,i){i.updateTitle("Flows"),e.settings={page:0},e.flows=[],e.load=function(){i.isLoading=!0,t.get("/flow/listFlows",e.settings).then(function(t){e.flows=t.data.data,i.endIsLoading()})},e.editFlow=function(e){i.changeRoute("flow-editor",{flowId:e.id})},e.createFlow=function(){i.changeRoute("flow-editor",{flowId:"new"})},e.deleteFlow=function(o,n){var i=r.confirm().title("Are you sure you want to delete this flow?").textContent("This will permantely remove the flow and also unset the flow on numbers that have this flow attached to it").ariaLabel("Delete flow").targetEvent(o).ok("Yes").cancel("No");r.show(i).then(function(){t.delete("/flow/deleteFlow/"+n.id).then(function(){a.show(a.simple().textContent("Flow deleted..").position("top right").hideDelay(3e3)),e.load()})},function(){})},e.load()}),angular.module("MaterialApp").controller("MyNumbersCtrl",function(e,t,o,n,r,a,i){i.updateTitle("My Numbers"),e.settings={page:0},e.numbers=[],e.load=function(){i.isLoading=!0,t.get("/did/listNumbers",e.settings).then(function(t){e.numbers=t.data.data,i.endIsLoading()})},e.buyNumber=function(){n.go("buy-numbers",{})},e.editNumber=function(e){n.go("my-numbers-edit",{numberId:e.id})},e.deleteNumber=function(o,n){var i=r.confirm().title("Are you sure you want to delete this number?").textContent("If you delete this number you will not be able to call it anymore").ariaLabel("Delete number").targetEvent(o).ok("Yes").cancel("No");r.show(i).then(function(){t.delete("/did/deleteNumber/"+n.id).then(function(){a.show(a.simple().textContent("Number deleted..").position("top right").hideDelay(3e3)),e.load()})},function(){})},e.load()}),angular.module("MaterialApp").controller("MyNumbersEditCtrl",function(e,t,o,n,r,a,i,s,l){l.updateTitle("Edit Number"),e.flows=[],e.number=null,e.saveNumber=function(o){var a={};a.name=e.number.name,a.flow_id=e.number.flow_id;var i={bottom:!1,top:!0,left:!1,right:!0},d=Object.keys(i).filter(function(e){return i[e]}).join(" ");console.log("toastPosStr",d),l.isCreateLoading=!0,t.post("/did/updateNumber/"+r.numberId,a).then(function(){console.log("updated number.."),s.show(s.simple().textContent("Number updated..").position(d).hideDelay(3e3)),n.go("my-numbers",{}),l.endIsCreateLoading()})},e.changeFlow=function(t){e.number.flow_id=t,console.log("changeFlow",t)},e.editFlow=function(e){n.go("flow-editor",{flowId:e})},l.isLoading=!0,i.all([t.get("/flow/listFlows"),t.get("/did/numberData/"+r.numberId)]).then(function(t){e.flows=t[0].data.data,e.number=t[1].data,l.endIsLoading()})}),angular.module("MaterialApp").controller("RecordingsCtrl",function(e,t,o,n,r,a,i){i.updateTitle("Recordings"),e.settings={page:0},e.recordings=[],e.load=function(){i.isLoading=!0,t.get("/recording/listRecordings",e.settings).then(function(t){var o=t.data.data;e.recordings=o.map(function(e){return e.uri=a.trustAsResourceUrl(e.uri),e}),i.endIsLoading()})},e.deleteRecording=function(o,n){var a=r.confirm().title("Are you sure you want to delete this recording?").textContent("This will permantely remove the recordings from your storage").ariaLabel("Delete recording").targetEvent(o).ok("Yes").cancel("No");r.show(a).then(function(){t.delete("/recording/deleteRecording/"+n.id).then(function(){console.log("deleted recording.."),$mdToast.show($mdToast.simple().textContent("recording deleted..").position("top right").hideDelay(3e3)),e.load()})},function(){})},e.load()}),angular.module("MaterialApp").controller("DashboardCtrl",function(e,t,o,n,r,a,i){e.SharedPref=i,$(window).width()<1450&&($(".c-hamburger").removeClass("is-active"),$("body").removeClass("extended")),e.$state=t,o.$on("$stateChangeSuccess",function(){r(function(){$("body").scrollTop(0)},200)}),$("body").hasClass("extended")&&r(function(){$(".sidebar").perfectScrollbar()},200),e.rtl=function(){$("body").toggleClass("rtl")},e.subnav=function(t){return t==e.showingSubNav?e.showingSubNav=0:e.showingSubNav=t,!1},e.extend=function(){$(".c-hamburger").toggleClass("is-active"),$("body").toggleClass("extended"),$(".sidebar").toggleClass("ps-container"),o.$broadcast("resize"),r(function(){$(".sidebar").perfectScrollbar(),console.log("pfscroll")},200)},e.changeTheme=function(e){$("<link>").appendTo("head").attr({type:"text/css",rel:"stylesheet"}).attr("href","styles/app-"+e+".css")},angular.element(a).bind("resize",function(){}),$(window).width()<1200&&o.$on("$stateChangeSuccess",function(){$(".c-hamburger").removeClass("is-active"),$("body").removeClass("extended")}),$(window).width()<600&&o.$on("$stateChangeSuccess",function(){$(".mdl-grid").removeAttr("dragula")}),e.changeLanguage=function(e){n.use(e)}}),angular.module("MaterialApp").controller("ForgotCtrl",function(e,t,o,n,r,a,i,s,l){a.updateTitle("Forgot Password"),e.triedSubmit=!1,e.isLoading=!1,e.user={email:""},e.submit=function(t,o){if(e.triedSubmit=!0,o.$valid){var n=angular.copy(e.user);return e.isLoading=!0,void r.post("/forgot",n).then(function(t){t.data;e.isLoading=!1,s.show(s.simple().textContent("Reset instructions sent to email..").position("top right").hideDelay(3e3))}).catch(function(){e.isLoading=!1})}}}),angular.module("MaterialApp").controller("HeadCtrl",function(e,t){e.SharedPref=t}),angular.module("MaterialApp").controller("HomeCtrl",["$scope","$timeout","Backend","SharedPref","$q",function(e,t,o,n,r){n.updateTitle("Dashboard"),e.options1={lineWidth:8,scaleColor:!1,size:85,lineCap:"square",barColor:"#fb8c00",trackColor:"#f9dcb8"},e.options2={lineWidth:8,scaleColor:!1,size:85,lineCap:"square",barColor:"#00D554",trackColor:"#c7f9db"},e.options3={lineWidth:8,scaleColor:!1,size:85,lineCap:"square",barColor:"#F800FC",trackColor:"#F5E5F5"},e.labels=["January","February","March","April","May","June","July"],e.series=["Series A","Series B"],e.data=[[65,59,80,81,56,55,40],[28,48,40,19,86,27,90]],e.onClick=function(e,t){console.log(e,t)},$(window).width()<600&&$(".mdl-grid").removeAttr("dragula"),t(function(){Chart.helpers.color;n.isLoading=!0,o.get("/dashboard").then(function(o){var r=o.data[0];n.billInfo=o.data[1],n.userInfo=o.data[2],console.log("graph data is ",r),n.isLoading=!1,t(function(){e.line={legend:!0,labels:r.labels,data:[r.data.inbound,r.data.outbound],series:["Inbound","Outbound"],colours:[{fillColor:"#2b36ff",strokeColor:"#2b36ff",pointColor:"#2b36ff",pointStrokeColor:"#2b36ff",pointHighlightFill:"#2b36ff",pointHighlightStroke:"#2b36ff"},{fillColor:"#ffa01c",strokeColor:"#ffa01c",pointColor:"#ffa01c",pointStrokeColor:"#ffa01c",pointHighlightFill:"#ffa01c",pointHighlightStroke:"#ffa01c"}],options:{legend:{display:!0,position:"right"},responsive:!0,bezierCurve:!1,datasetStroke:!1,pointDotRadius:6,showTooltips:!1},onClick:function(e,t){console.log(e,t)}}},0)})},0),e.line2={labels:["JAN","FEB","MAR","APR","MAY","JUN"],data:[[99,180,80,140,120,220,100],[50,145,200,75,50,100,50]],colours:[{fillColor:"#2b36ff",strokeColor:"#C172FF",pointColor:"#fff",pointStrokeColor:"#8F00FF",pointHighlightFill:"#fff",pointHighlightStroke:"#8F00FF"},{fillColor:"#ffa01c",strokeColor:"#FFB53A",pointColor:"#fff",pointStrokeColor:"#FF8300",pointHighlightFill:"#fff",pointHighlightStroke:"#FF8300"}],options:{responsive:!0,bezierCurve:!1,datasetStroke:!1,legendTemplate:!1,pointDotRadius:9,pointDotStrokeWidth:3,datasetStrokeWidth:3},onClick:function(e,t){console.log(e,t)}}}]),angular.module("MaterialApp").controller("LoginCtrl",function(e,t,o,n,r,a,i,s){a.updateTitle("Login"),e.triedSubmit=!1,e.couldNotLogin=!1,e.shouldSplash=!1,e.isLoading=!1,e.user={email:"",password:""},e.submit=function(t,o){if(e.triedSubmit=!0,o.$valid){var n=angular.copy(e.user);return e.isLoading=!0,void r.post("/jwt/authenticate",n).then(function(t){var o=t.data;e.isLoading=!1,e.couldNotLogin=!1,a.setAuthToken(o),s.watch(),i.go("home",{})}).catch(function(){e.isLoading=!1,e.couldNotLogin=!0})}},e.authenticate=function(){var e=n.defer();return o(function(){e.resolve(),o(function(){s.watch(),t.path("/dashboard/home")},600)},1100),e.promise}}),angular.module("MaterialApp").controller("RegisterCtrl",function(e,t,o,n,r,a,i,s,l){a.updateTitle("Register"),e.triedSubmit=!1,e.passwordsDontMatch=!1,e.shouldSplash=!1,e.didVerifyCall=!1,e.step=1,e.userId=null,e.token=null,e.invalidCode=!1,e.invalidNumber=!1,e.user={first_name:"",last_name:"",email:"",password:"",password2:""},e.verify1={mobile_number:""},e.verify2={confirmation_code:""},e.workspace="",e.submit=function(t,o){if(console.log("called submit"),e.triedSubmit=!0,e.user.password===e.user.password2){if(e.passwordsDontMatch=!1,!o.$valid)return!1;var n=angular.copy(e.user);r.post("/register",n).then(function(t){e.token=t.data.token,e.userId=t.data.userId,e.step=2})}else e.passwordsDontMatch=!0},e.submitVerify1Form=function(t,o){if(console.log("called submitVerify1Form"),e.triedSubmit=!0,o.$valid){var n=angular.copy(e.verify1);return n.userId=e.userId,void r.post("/registerSendVerify",n).then(function(t){t.data;if(t.data.valid)return e.didVerifyCall=!0,void(e.invalidNumber=!1);e.invalidNumber=!0})}return!1},e.submitVerify2Form=function(t,o){if(console.log("called submitVerify2Form"),e.triedSubmit=!0,o.$valid){var n=angular.copy(e.verify2);return n.userId=e.userId,void r.post("/registerVerify",n).then(function(t){t.data.isValid?e.step=3:e.invalidCode=!0})}return!1},e.submitWorkspaceForm=function(t,o){if(console.log("called submitWorkspaceForm"),e.triedSubmit=!0,o.$valid){var n={};n.userId=e.userId,n.workspace=e.workspace,r.post("/updateWorkspace",n).then(function(t){if(t.data.success)return e.invalidWorkspaceTaken=!1,void function(){e.shouldSplash=!0,a.setAuthToken(e.token);var t={userId:e.userId};e.invalidCode=!1,r.post("/userSpinup",t).then(function(e){if(e.data.success)return l.watch(),void i.go("dashboard-user-welcome",{});s.show(s.simple().textContent("Error occured while creating your account. please account support").position("top right").hideDelay(1e4))})}();e.invalidWorkspaceTaken=!0})}return!1},e.recall=function(){var t=angular.copy(e.verify1);t.userId=e.userId,r.post("/registerSendVerify",t).then(function(e){s.show(s.simple().textContent("You will be called shortly.").position("top right").hideDelay(3e3))})},e.authenticate=function(){var e=n.defer();return o(function(){e.resolve(),o(function(){t.path("/dashboard/home")},600)},1100),e.promise}}),angular.module("MaterialApp").controller("ResetCtrl",function(e,t,o,n,r,a,i,s,l){a.updateTitle("Reset"),e.triedSubmit=!1,e.isLoading=!1,e.couldNotReset=!1,e.couldNotResetMsg="";var d=t.search().token;e.user={email:"",password:"",confirmPassword:"",token:d},console.log("reset params are ",e.user),e.submit=function(t,o){if(e.triedSubmit=!0,e.user.password===e.user.confirmPassword){if(e.passwordsDontMatch=!1,o.$valid){var n={};return n.email=e.user.email,n.token=e.user.token,n.password=e.user.password,n.password_confirmation=e.user.confirmPassword,e.isLoading=!0,console.log("requesting reset ",n),e.couldNotReset=!1,e.couldNotResetMsg="",void r.post("/reset",n,!0).then(function(t){t.data;e.isLoading=!1,s.show(s.simple().textContent("Password was reset successfully.").position("top right").hideDelay(3e3)),i.go("login",{})}).catch(function(t){console.log("error reply is ",t),e.couldNotReset=!0,e.couldNotResetMsg=t.data.message,e.isLoading=!1})}}else e.passwordsDontMatch=!0}}),angular.module("MaterialApp").controller("SettingsCtrl",function(e,t,o,n,r,a,i,s){a.updateTitle("Settings"),e.triedSubmit=!1,e.user={first_name:"",last_name:"",email:"",password:"",password2:""},e.submitSettings=function(t,o){if(e.triedSubmit=!0,o.$valid){var n={};return n.first_name=e.user.first_name,n.last_name=e.user.last_name,n.email=e.user.email,a.isCreateLoading=!0,void r.post("/updateSelf",n).then(function(e){s.show(s.simple().textContent("Updated your info").position("top right").hideDelay(3e3)),a.endIsCreateLoading()})}return!1},e.submitPasswords=function(t,o){if(e.triedSubmit=!0,e.user.password===e.user.password2){if(e.passwordsDontMatch=!1,o.$valid){var n={};return n.password=e.user.password,a.isCreateLoading=!0,void r.post("/updateSelf",n).then(function(e){e.data;s.show(s.simple().textContent("Updated your passwords").position("top right").hideDelay(3e3)),a.endIsCreateLoading()})}return!1}e.passwordsDontMatch=!0},a.isLoading=!0,r.get("/self").then(function(t){e.user=t.data,console.log("user is ",e.user),a.endIsLoading()})});