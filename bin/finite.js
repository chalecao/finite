var r=void 0;function n(r){if(Array.isArray(r)){for(var n=0,e=Array(r.length);n<r.length;n++)e[n]=r[n];return e}return Array.from(r)}function e(r){return function(){var n=r.apply(this,arguments);return new Promise(function(r,e){return function t(a,u){try{var o=n[a](u),i=o.value}catch(r){return void e(r)}if(!o.done)return Promise.resolve(i).then(function(r){t("next",r)},function(r){t("throw",r)});r(i)}("next")})}}var t=1,a=2,u=3,o={},i={load:function(){var n=e(regeneratorRuntime.mark(function n(e){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=e,r.next=r.t0===t?3:r.t0===a?5:r.t0===u?7:9;break;case 3:return r.abrupt("return",1);case 5:return r.abrupt("return",new Promise(function(r,n){document.addEventListener("DOMContentLoaded",function(n){console.log("DOMContentLoaded"),r(1)})}));case 7:return r.abrupt("return",new Promise(function(r,n){window.addEventListener("load",function(n){console.log("WindowLoad"),r(1)})}));case 9:case"end":return r.stop()}},n,r)}));return function(r){return n.apply(this,arguments)}}(),init:function(){var n=e(regeneratorRuntime.mark(function n(t,a){var u;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o.graph=t,o.avs=a,o.graph.events.filter(function(r){return!!r.from}).forEach(function(n){n.from&&(o.avs[n.from].fire=function(n){for(var t=arguments,a=arguments.length,u=Array(a>1?a-1:0),o=1;o<a;o++)u[o-1]=t[o];return e(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.handleEvts.apply(i,[n].concat(u));case 2:case"end":return r.stop()}},e,r)}))})}),!(u=o.graph.events.find(function(r){return r.entry>=0}))){n.next=8;break}return n.next=7,i.load(u.entry);case 7:i.handleEvts(u.name);case 8:case"end":return n.stop()}},n,r)}));return function(r,e){return n.apply(this,arguments)}}(),handleEvts:function(){var n=e(regeneratorRuntime.mark(function n(e,t){var a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=o.graph.events.find(function(r){return r.name==e}),r.next=3,a;case 3:if(r.t0=r.sent,!r.t0){r.next=6;break}i.exec(a.next,t);case 6:case"end":return r.stop()}},n,r)}));return function(r,e){return n.apply(this,arguments)}}(),exec:function(){var t=e(regeneratorRuntime.mark(function t(a,u){var c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Array.isArray(a)||(a=[a]),c=[],a.forEach(function(t){var a;c.push(new Promise((a=e(regeneratorRuntime.mark(function e(a,c){var s,f,p,v;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(f=i.findStep(t)).entry){r.next=4;break}return r.next=4,i.load(f.entry);case 4:return p=[],f.param&&(p=i.handleParam(f.param,u)),r.next=8,(s=o.avs[t.split("_")[0]])[t.split("_")[1]].apply(s,n(p));case 8:v=r.sent,f.next&&i.exec(f.next,v),a(1);case 11:case"end":return r.stop()}},e,r)})),function(r,n){return a.apply(this,arguments)})))}),t.next=5,Promise.all(c);case 5:case"end":return t.stop()}},t,r)}));return function(r,n){return t.apply(this,arguments)}}(),findStep:function(r){return o.graph[r.split("_")[0]][r.split("_")[1]]},handleParam:function(r,n){var e=[];return r?(Array.isArray(r)||(r=[r]),r.forEach(function(r){"$"==r?e.push(n):e.push(o.avs[r])}),e):e}},c=function(){var n=e(regeneratorRuntime.mark(function n(e,t){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:i.init(e,t);case 1:case"end":return r.stop()}},n,r)}));return function(r,e){return n.apply(this,arguments)}}();export default c;
