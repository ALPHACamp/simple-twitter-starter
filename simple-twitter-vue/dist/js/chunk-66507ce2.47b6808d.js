(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66507ce2"],{"0047":function(e,t,n){var r=n("f89e"),a=n("dad4"),s=a;s.v1=r,s.v4=a,e.exports=s},"59ee":function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},ac4b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return n("li",{key:t.id,staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(e._s(t.title))])],1)})),0)},a=[],s=n("0047"),o={data:function(){return{tabs:[{id:Object(s["v4"])(),title:"Tweets",path:"/admin/tweets"},{id:Object(s["v4"])(),title:"Users",path:"/admin/users"}]}}},i=o,c=n("2877"),u=Object(c["a"])(i,r,a,!1,null,null,null);t["a"]=u.exports},be6c:function(e,t,n){"use strict";var r=n("2fa3"),a=function(){return localStorage.getItem("token")};t["a"]={getUsers:function(){return r["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(a())}})},getTweets:function(){return r["b"].get("/admin/tweets",{headers:{Authorization:"Bearer ".concat(a())}})},deleteTweets:function(e){return r["b"].delete("/admin/tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(a())},validateStatus:function(e){return e<500}})}}},dad4:function(e,t,n){var r=n("59ee"),a=n("e1f7");function s(e,t,n){var s=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[s+i]=o[i];return t||a(o)}e.exports=s},e1f7:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);function a(e,t){var r=t||0,a=n;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}e.exports=a},f89e:function(e,t,n){var r,a,s=n("59ee"),o=n("e1f7"),i=0,c=0;function u(e,t,n){var u=t&&n||0,l=t||[];e=e||{};var d=e.node||r,f=void 0!==e.clockseq?e.clockseq:a;if(null==d||null==f){var v=s();null==d&&(d=r=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==f&&(f=a=16383&(v[6]<<8|v[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),w=void 0!==e.nsecs?e.nsecs:c+1,h=p-i+(w-c)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||p>i)&&void 0===e.nsecs&&(w=0),w>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=p,c=w,a=f,p+=122192928e5;var m=(1e4*(268435455&p)+w)%4294967296;l[u++]=m>>>24&255,l[u++]=m>>>16&255,l[u++]=m>>>8&255,l[u++]=255&m;var b=p/4294967296*1e4&268435455;l[u++]=b>>>8&255,l[u++]=255&b,l[u++]=b>>>24&15|16,l[u++]=b>>>16&255,l[u++]=f>>>8|128,l[u++]=255&f;for(var g=0;g<6;++g)l[u+g]=d[g];return t||o(l)}e.exports=u},fa6a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container d-flex flex-column flex-grow-1 vh-100 overflow-hidden py-5"},[n("AdminNavs"),n("AdminTweetsIndex",{staticClass:"mh-100 overflow-auto",attrs:{tweets:this.tweets},on:{"after-delete-tweet":e.afterDeleteTweet}})],1)},a=[],s=(n("4de4"),n("96cf"),n("1da1")),o=n("ac4b"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Tweets")]),n("table",{staticClass:"table"},[e._m(0),n("tbody",e._l(e.tweets,(function(t){return n("tr",{key:t.id,staticStyle:{height:"50px"}},[n("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),n("td",{staticClass:"text-left"},[e._v(e._s(e._f("peek")(t.description)))]),n("td",[e._v(e._s(e._f("fromNow")(t.createdAt)))]),n("td",{staticClass:"align-middle d-flex justify-content-center"},[n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),e.deteleTweet(t.id)}}},[n("span",{staticClass:"text-danger",attrs:{"aria-hidden":"true"}},[e._v("×")])])])])})),0)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("#id")]),n("th",{staticStyle:{width:"50%"},attrs:{scope:"col"}},[e._v("Tweet")]),n("th",{attrs:{scope:"col"}},[e._v("Posted")]),n("th",{attrs:{scope:"col"}},[e._v("Delete")])])])}],u=n("2708"),l={mixins:[u["a"]],props:{tweets:{type:Array,required:!0}},filters:{peek:function(e){return e.length>50?"".concat(e.substr(0,50)," ..."):e||"-"}},methods:{deteleTweet:function(e){this.$emit("after-delete-tweet",e)}}},d=l,f=n("2877"),v=Object(f["a"])(d,i,c,!1,null,null,null),p=v.exports,w=n("be6c"),h={components:{AdminNavs:o["a"],AdminTweetsIndex:p},data:function(){return{tweets:[]}},created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w["a"].getTweets();case 3:n=t.sent,r=n.data.tweets,e.tweets=r,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},afterDeleteTweet:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.tweets=t.tweets.filter((function(t){return t.id!==e})),n.next=4,w["a"].deleteTweets(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},m=h,b=Object(f["a"])(m,r,a,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-66507ce2.47b6808d.js.map