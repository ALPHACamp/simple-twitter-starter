(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-043b4276":"735a928e","chunk-04a2f9c8":"4bfe3df4","chunk-0b9192aa":"6806b47e","chunk-10dd3aec":"78fe3f8e","chunk-1c413f66":"925f266c","chunk-216cacea":"4dab1602","chunk-31398ba4":"dcc02efc","chunk-66507ce2":"47b6808d","chunk-6dc0946e":"8a1e84f4","chunk-b90647ce":"3ddc3bc7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-10dd3aec":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-043b4276":"31d6cfe0","chunk-04a2f9c8":"31d6cfe0","chunk-0b9192aa":"31d6cfe0","chunk-10dd3aec":"2a16eed5","chunk-1c413f66":"31d6cfe0","chunk-216cacea":"31d6cfe0","chunk-31398ba4":"31d6cfe0","chunk-66507ce2":"31d6cfe0","chunk-6dc0946e":"31d6cfe0","chunk-b90647ce":"31d6cfe0"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"1b45":function(e,t,r){},"202d":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},e._l(e.tweets,(function(t){return r("div",{key:t.id,staticClass:"row border border-secondary rounded my-1 p-2"},[r("div",{staticClass:"col-3 d-flex align-items-center justify-content-center"},[r("img",{attrs:{src:t.User.avatar}})]),r("div",{staticClass:"col-8 text-left"},[r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:t.User.id}}}},[e._v(" @"+e._s(t.User.name))]),e._v(", "+e._s(e._f("formatTime")(t.createdAt)))],1),r("p",[e._v(e._s(t.description))]),r("div",{staticClass:"row justify-content-start"},[r("div",{staticClass:"col mw-50"},[r("router-link",{attrs:{to:{name:"replies",params:{tweet_id:t.id}}}},[r("button",{staticClass:"btn btn-light"},[e._v("Reply ("+e._s(t.repliesCount)+")")])])],1),r("div",{staticClass:"col mw-50"},[t.isLiked?r("button",{staticClass:"btn btn-danger",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteLike(t.id)}}},[e._v("Dislike ("+e._s(t.likesCount)+" )")]):r("button",{staticClass:"btn btn-light",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addLike(t.id)}}},[e._v("Like ("+e._s(t.likesCount)+" )")])])])])])})),0)},a=[],s=r("2708"),o={mixins:[s["b"]],props:{tweets:{type:Array,required:!0}},data:function(){return{isProcessing:!1}},methods:{addLike:function(e){var t=this;this.isProcessing=!0,this.$emit("after-add-like",e),setTimeout((function(){t.isProcessing=!1}),500)},deleteLike:function(e){var t=this;this.isProcessing=!0,this.$emit("after-delete-like",e),setTimeout((function(){t.isProcessing=!1}),500)}}},c=o,i=(r("bbd1"),r("2877")),u=Object(i["a"])(c,n,a,!1,null,"8cea8772",null);t["a"]=u.exports},2708:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o}));var n=r("c1df"),a=r.n(n),s={filters:{fromNow:function(e){return e?a()(e).fromNow():"-"},formatTime:function(e){return e?a()(e).format("MMMM Do YYYY, h:mm:ss a"):"-"}}},o={filters:{formatTime:function(e){return e?a()(e).format("MMMM Do YYYY, h:mm:ss a"):"-"}}}},"2fa3":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r("bc3a"),a=r.n(n),s=r("3d20"),o=r.n(s),c="/api",i=a.a.create({baseURL:c}),u=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b453","./mt.js":"1b453","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"4cce":function(e,t,r){"use strict";var n=r("2fa3"),a=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return n["b"].get("/current-user",{headers:{Authorization:"Bearer ".concat(a())}})},get:function(e){var t=e.userId;return n["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(a())}})},getFollowings:function(e){return n["b"].get("/users/".concat(e,"/followings"),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},getFollowers:function(e){return n["b"].get("/users/".concat(e,"/followers"),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},follow:function(e){return n["b"].post("/followships/",{id:e},{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},unfollow:function(e){return n["b"].delete("/followships/".concat(e),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},getUserProfile:function(e){return n["b"].get("/users/".concat(e),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},putUser:function(e){var t=e.userId,r=e.formData;return n["b"].post("/users/".concat(t,"/edit"),r,{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},getTweets:function(e){return n["b"].get("/users/".concat(e,"/tweets"),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},getLikes:function(e){return n["b"].get("/users/".concat(e,"/likes"),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},getReplies:function(e){return n["b"].get("/tweets/".concat(e,"/replies"),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},like:function(e){return n["b"].post("/tweets/".concat(e,"/like"),null,{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},unlike:function(e){return n["b"].post("/tweets/".concat(e,"/unlike"),null,{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})}}},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vh-100 overflow-hidden",attrs:{id:"app"}},[r("Navbar"),r("main",{staticClass:"mt-5 bg-white flex-grow-1 overflow-hidden",attrs:{role:"main"}},[r("router-view")],1)],1)},s=[],o=(r("ab8b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Simple Twitter")]),e._m(0),r("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[r("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.role==e.roles.admin?r("router-link",{staticClass:"text-white mr-3",attrs:{to:{name:"admin-tweets"}}},[e._v("管理員後台")]):e._e(),e.isAuthenticated?r("router-link",{staticClass:"text-white mr-3",attrs:{to:{name:"user",params:{id:e.currentUser.id}}}},[e._v("使用者 "+e._s(e.currentUser.name)+" ,您好")]):e._e(),e.isAuthenticated?r("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v("登出")]):e._e()],1)])],1)}),c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],i=r("5530"),u=r("2f62"),l={name:"Navbar",data:function(){return{roles:{admin:"admin",user:"user"}}},computed:Object(i["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},d=l,f=r("2877"),h=Object(f["a"])(d,o,c,!1,null,null,null),b=h.exports,p={name:"App",components:{Navbar:b}},m=p,v=(r("034f"),Object(f["a"])(m,a,s,!1,null,null,null)),w=v.exports,j=(r("b0c0"),r("d3b7"),r("96cf"),r("1da1")),g=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("404 Page Not Found")])},x=[],y={},_=Object(f["a"])(y,k,x,!1,null,null,null),C=_.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container d-flex flex-column flex-grow-1 vh-100 overflow-hidden py-5"},[r("div",{staticClass:"row flex-grow-1 overflow-hidden"},[r("div",{staticClass:"col-md-8 mh-100 overflow-auto"},[r("TweetNew",{attrs:{"user-id":e.currentUser.id},on:{"after-create-tweet":e.afterCreateTweet}}),r("TweetIndex",{attrs:{tweets:e.tweets},on:{"after-add-like":e.afterAddLike,"after-delete-like":e.afterDeleteLike}})],1),r("div",{staticClass:"col-md-4 mh-100 overflow-auto"},[r("h4",[e._v("Popular users")]),r("UserTop",{attrs:{"top-users":e.topUsers,"current-user":e.currentUser},on:{"after-add-follow":e.afterAddFollow,"after-delete-follow":e.afterDeleteFollow}})],1)])])},z=[],U=(r("a4d3"),r("e01a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"container",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"row form-group mb-4"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"col form-control",attrs:{rows:"3",name:"tweet",placeholder:"What's on your mind?"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._m(0)])}),T=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row d-flex justify-content-end"},[r("button",{staticClass:"col-2 btn btn-primary mr-0",attrs:{type:"submit"}},[e._v("Tweet")])])}],O=(r("a9e3"),{props:{userId:{type:Number,required:!0}},data:function(){return{description:""}},methods:{handleSubmit:function(){this.$emit("after-create-tweet",{description:this.description}),this.description=""}}}),S=O,E=(r("7ed9"),Object(f["a"])(S,U,T,!1,null,"60e667be",null)),P=E.exports,B=r("202d"),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},e._l(e.topUsers,(function(t){return r("div",{key:t.id,staticClass:"row border border-secondary rounded my-1 p-3"},[r("div",{staticClass:"col-3 d-flex align-items-start justify-content-center"},[r("img",{attrs:{src:t.avatar}})]),r("div",{staticClass:"col-8 text-left"},[r("router-link",{attrs:{to:{name:"user",params:{id:t.id}}}},[r("h5",[e._v(e._s(t.name))])]),r("p",[e._v(e._s(t.introduction))]),t.id!=e.currentUser.id?r("div",{staticClass:"row justify-content-end"},[t.isFollowed?r("button",{staticClass:"btn btn-danger",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteFollow(t.id)}}},[e._v("Unfollow ")]):r("button",{staticClass:"btn btn-primary",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addFollow(t.id)}}},[e._v("Follow ")])]):e._e()],1)])})),0)},L=[],D={props:{topUsers:{type:Array,required:!0},currentUser:{type:Object,required:!0}},methods:{addFollow:function(e){this.$emit("after-add-follow",e)},deleteFollow:function(e){this.$emit("after-delete-follow",e)}}},N=D,$=(r("d120"),Object(f["a"])(N,R,L,!1,null,"61380ede",null)),F=$.exports,M=r("2fa3"),I=r("7482"),q=function(){return localStorage.getItem("token")},Y={followship:{create:function(e){return M["b"].post("/followships",{id:e},{headers:{Authorization:"Bearer ".concat(q())},validateStatus:function(e){return e<500}})},delete:function(e){return M["b"].delete("/followships/".concat(e),{headers:{Authorization:"Bearer ".concat(q())},validateStatus:function(e){return e<500}})}}},J={components:{TweetNew:P,TweetIndex:B["a"],UserTop:F},data:function(){return{tweets:[],topUsers:[]}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTweets();case 2:return t.next=4,e.fetchTopUsers();case 4:case"end":return t.stop()}}),t)})))()},computed:Object(i["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{fetchTweets:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I["a"].getTweets();case 3:r=t.sent,n=r.data,e.tweets=n.tweets,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),M["a"].fire({icon:"error",title:"無法取得推特資料，請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchTopUsers:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.topUsers=n.topUsers,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),M["a"].fire({icon:"error",title:"無法取得風雲人物資料，請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},afterCreateTweet:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e.description){r.next=3;break}throw new Error("Tweet can not be empty!");case 3:if(!(e.description.length>140)){r.next=5;break}throw new Error("Tweet should be shorter than 140 characters!");case 5:return r.next=7,I["a"].tweets.create(e.description);case 7:if(n=r.sent,a=n.data,"success"===a.status){r.next=11;break}throw new Error(a.message);case 11:t.fetchTweets(),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](0),M["a"].fire({icon:"error",title:r.t0});case 17:case"end":return r.stop()}}),r,null,[[0,14]])})))()},afterAddFollow:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Y.followship.create(e);case 3:if(n=r.sent,a=n.data,console.log(e),"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.fetchTopUsers(),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),M["a"].fire({icon:"error",title:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterDeleteFollow:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Y.followship.delete(e);case 3:if(n=r.sent,a=n.data,console.log(e),"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.fetchTopUsers(),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),M["a"].fire({icon:"error",title:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterAddLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,I["a"].tweets.like(e);case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.fetchTweets(),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),M["a"].fire({icon:"error",title:r.t0});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},afterDeleteLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,I["a"].tweets.unlike(e);case 3:if(n=r.sent,a=n.data,console.log(a),"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.fetchTweets(),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),M["a"].fire({icon:"error",title:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},H=J,K=Object(f["a"])(H,A,z,!1,null,null,null),W=K.exports,G=r("4cce"),Q=r("0e44");n["a"].use(u["a"]);var V=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",role:"user"},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(i["a"])(Object(i["a"])({},e.currentUser),t),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,c,i,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,G["a"].getCurrentUser();case 4:if(n=t.sent,a=n.data,s=n.statusText,"error"!==s){t.next=10;break}throw console.log("statusText!",s),new Error(a);case 10:o=a.id,c=a.name,i=a.email,u=a.avatar,l=a.role,r("setCurrentUser",{id:o,name:c,email:i,avatar:u,role:l}),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](1),console.log("error",t.t0),r("revokeAuthentication"),console.error("can not fetch user information");case 19:case"end":return t.stop()}}),t,null,[[1,14]])})))()}},modules:{},plugins:[Object(Q["a"])()]});n["a"].use(g["a"]);var X=function(e,t,r){var n=V.state.currentUser;n&&"admin"!==n.role?r("/404"):r()},Z=[{path:"/",name:"root",redirect:"/tweets"},{path:"/signin",name:"sign-in",component:function(){return r.e("chunk-b90647ce").then(r.bind(null,"54e2"))}},{path:"/signup",name:"sign-up",component:function(){return r.e("chunk-1c413f66").then(r.bind(null,"5c9c"))}},{path:"/admin/tweets",name:"admin-tweets",component:function(){return r.e("chunk-66507ce2").then(r.bind(null,"fa6a"))},beforeEnter:X},{path:"/admin/users",name:"admin-users",component:function(){return r.e("chunk-216cacea").then(r.bind(null,"6135"))},beforeEnter:X},{path:"/users/:id/tweets",name:"user",component:function(){return r.e("chunk-043b4276").then(r.bind(null,"1511"))}},{path:"/users/:id/edit",name:"users-profile-edit",component:function(){return r.e("chunk-0b9192aa").then(r.bind(null,"da5c"))}},{path:"/users/:id/likes",name:"users-likes",component:function(){return r.e("chunk-6dc0946e").then(r.bind(null,"035c"))}},{path:"/users/:id/followings",name:"users-followings",component:function(){return r.e("chunk-31398ba4").then(r.bind(null,"cc95"))}},{path:"/users/:id/followers",name:"users-followers",component:function(){return r.e("chunk-04a2f9c8").then(r.bind(null,"7384"))}},{path:"/tweets",name:"tweets",component:W},{path:"/tweets/:tweet_id/replies",name:"replies",component:function(){return r.e("chunk-10dd3aec").then(r.bind(null,"b0c6"))}},{path:"*",name:"not-found",component:C}],ee=new g["a"]({routes:Z});ee.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("token"),s=V.state.token,o=V.state.isAuthenticated,!a||a===s){e.next=7;break}return e.next=6,V.dispatch("fetchCurrentUser");case 6:o=e.sent;case 7:if(o||"sign-in"===t.name){e.next=10;break}return n("/signin"),e.abrupt("return");case 10:if(!o||"sign-in"!==t.name){e.next=13;break}return n("/tweets"),e.abrupt("return");case 13:n();case 14:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var te=ee;n["a"].config.productionTip=!1,new n["a"]({router:te,store:V,render:function(e){return e(w)}}).$mount("#app")},7482:function(e,t,r){"use strict";var n=r("2fa3"),a=function(){return localStorage.getItem("token")};t["a"]={getTweets:function(){return n["b"].get("/tweets",{headers:{Authorization:"Bearer ".concat(a())}})},getTopUsers:function(){return n["b"].get("/tweets/top_users",{headers:{Authorization:"Bearer ".concat(a())}})},tweets:{create:function(e){return n["b"].post("/tweets",{description:e},{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},like:function(e){return n["b"].post("/tweets/".concat(e,"/like"),{},{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})},unlike:function(e){return n["b"].post("/tweets/".concat(e,"/unlike"),{},{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})}}}},"7ed9":function(e,t,r){"use strict";var n=r("ac84"),a=r.n(n);a.a},"85ec":function(e,t,r){},a3b5:function(e,t,r){},ac84:function(e,t,r){},bbd1:function(e,t,r){"use strict";var n=r("a3b5"),a=r.n(n);a.a},d120:function(e,t,r){"use strict";var n=r("1b45"),a=r.n(n);a.a}});
//# sourceMappingURL=app.d8c78e5a.js.map