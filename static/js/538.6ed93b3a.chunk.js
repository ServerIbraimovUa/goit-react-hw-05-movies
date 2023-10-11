/*! For license information please see 538.6ed93b3a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[538],{2634:function(t,r,e){e.d(r,{$:function(){return u},W:function(){return c}});var n,o,i=e(168),a=e(5867),c=a.ZP.div(n||(n=(0,i.Z)(["\n  max-width: 1100px;\n  padding: 0 16px;\n  margin: 0 auto;\n"]))),u=a.ZP.section(o||(o=(0,i.Z)(["\n  padding: 60px 0;\n  border-bottom: 1px solid #eee;\n  height: 100%;\n"])))},9760:function(t,r,e){e(2791);var n=e(184);r.Z=function(){return(0,n.jsx)("h1",{children:"Error"})}},2:function(t,r,e){var n=e(3430),o=e(184);r.Z=function(){return(0,o.jsx)(n.g4,{height:"80",width:"80",radius:"11",color:"#1e349f",ariaLabel:"three-dots-loading",wrapperStyle:{position:"absolute",bottom:"47%",left:"47%"},wrapperClassName:"",visible:!0})}},2538:function(t,r,e){e.r(r),e.d(r,{default:function(){return G}});var n,o,i,a,c,u,s=e(5861),l=e(9439),f=e(2634),h=e(9760),p=e(2),d=e(168),v=e(5867),y=v.ZP.div(n||(n=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  font-size: 20px;\n  ul {\n    display: flex;\n    gap: 10px;\n  }\n"]))),g=v.ZP.ul(o||(o=(0,d.Z)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  li {\n  }\n  a {\n    background: #fff;\n    border-radius: 20px;\n    display: block;\n    text-decoration: none;\n    padding: 10px 20px;\n    color: inherit;\n    &:hover,\n    &:focus {\n      background: #ee0000;\n      color: #fff;\n    }\n  }\n"]))),m=e(1087),x=e(7689),w=e(2791),b=v.ZP.div(i||(i=(0,d.Z)(["\n  position: relative;\n  border: 1px solid #eee;\n"]))),j=v.ZP.span(a||(a=(0,d.Z)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  background-color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 4px solid ",";\n  /* ","; */\n"])),(function(t){return t.rating>=7?"green":"yellow"}),(function(t){var r=t.rating;return r<=5?"red":r<7?"orange":"green"})),L=v.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  p {\n    margin-bottom: 30px;\n  }\n  h4 {\n    margin-bottom: 10px;\n  }\n"]))),E=(0,v.ZP)(m.rU)(u||(u=(0,d.Z)(["\n  position: absolute;\n  top: -44px;\n  left: 0;\n  z-index: 2;\n  display: block;\n  text-decoration: none;\n  padding-left: 60px;\n  padding-right: 20px;\n  background-color: #fff;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n\n  font-weight: 600;\n\n  color: inherit;\n  &:hover,\n  &:focus {\n    background: #ee0000;\n    color: #fff;\n  }\n"]))),k=e(184),_=function(t){var r,e,n=t.movie,o=(0,x.TH)(),i=(0,w.useRef)(null!==(r=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/"),a=n.title,c=n.overview,u=n.genres,s=n.release_date,l=n.vote_average,f=n.poster_path;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(E,{to:i.current,children:"Go back"}),(0,k.jsxs)(b,{children:[(0,k.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(f),alt:a}),l?(0,k.jsx)(j,{rating:l,children:l.toFixed(1)}):""]}),(0,k.jsxs)(L,{children:[(0,k.jsx)("h2",{children:a}),(0,k.jsxs)("p",{children:["Release data: ",s]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:c}),(0,k.jsx)("h4",{children:"Genres"}),(0,k.jsx)("ul",{children:u&&u.map((function(t){var r=t.id,e=t.name;return(0,k.jsx)("li",{children:e},r)}))})]})]})},Z=function(t){var r=t.movie;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(y,{children:[(0,k.jsx)(_,{movie:r}),(0,k.jsxs)(g,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(m.rU,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]})]})})},O=e(1207);function P(){P=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==e&&n.call(b,a)&&(x=b);var j=m.prototype=y.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}var G=function(){var t=(0,w.useState)({}),r=(0,l.Z)(t,2),e=r[0],n=r[1],o=(0,w.useState)(!1),i=(0,l.Z)(o,2),a=i[0],c=i[1],u=(0,w.useState)(!1),d=(0,l.Z)(u,2),v=d[0],y=d[1],g=(0,x.UO)().movieId;return(0,w.useEffect)((function(){var t=function(){var t=(0,s.Z)(P().mark((function t(r){var e;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,O.t4)(r);case 3:e=t.sent,n(e),c(!0),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message),y(!0),c(!1);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}();return t(g),function(){t(g)}}),[g]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.$,{children:(0,k.jsxs)(f.W,{children:[v&&(0,k.jsx)(h.Z,{}),a?(0,k.jsx)(Z,{movie:e}):(0,k.jsx)(p.Z,{})]})}),(0,k.jsx)(w.Suspense,{fallback:(0,k.jsx)(p.Z,{}),children:(0,k.jsx)(x.j3,{})})]})}},1207:function(t,r,e){e.d(r,{Eb:function(){return f},SM:function(){return p},V0:function(){return v},XT:function(){return c},t4:function(){return s}});var n=e(5861),o=e(1243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==e&&n.call(j,c)&&(w=j);var L=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=Z(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function Z(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,Z(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},E(k.prototype),l(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var a="https://api.themoviedb.org/3";function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/trending/all/day"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(r));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(r,"/credits"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(r,"/reviews"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return y=(0,n.Z)(i().mark((function t(r){var e,n=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>1&&void 0!==n[1]?n[1]:1,t.next=3,o.Z.get("".concat(a,"/search/movie?query=").concat(r,"&page=").concat(e));case 3:return t.abrupt("return",t.sent.data);case 4:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}o.Z.defaults.params={api_key:"05fecd37f4938abe676372f3977174d8"}}}]);
//# sourceMappingURL=538.6ed93b3a.chunk.js.map