(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3280c30a"],{2452:function(e,t,r){"use strict";var n=r("71d0"),s=r.n(n);s.a},3549:function(e,t,r){},"71d0":function(e,t,r){},"9d7e":function(e,t,r){"use strict";var n=r("d948"),s=r.n(n);s.a},a93f:function(e,t,r){"use strict";var n=r("ed7b"),s=r.n(n);s.a},adf8:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-profile"}},[r("div",[r("img",{attrs:{src:e.user.avatar}}),r("h3",[e._v(e._s(e.user.name))]),r("p",[e._v(e._s(e.user.introduction))])]),r("div",[r("p",[e._v("Tweets "+e._s(e.user.Tweets.length))]),r("p",[e._v("Followings "+e._s(e.user.Followings.length))]),r("p",[e._v("Followers "+e._s(e.user.Followers.length))]),r("p",[e._v("like "+e._s(e.user.LikedTweets.length))])]),e.user.id===e.account.id?r("router-link",{attrs:{to:"/users/"+e.user.id+"/edit",tag:"button"}},[e._v("Edit Profile")]):r("span",[e._v("Follow/Unfollow")])],1)},s=[],a=r("cebc"),i=r("2f62"),c={props:{user:Object},computed:Object(a["a"])({},Object(i["c"])("account",{account:function(e){return e}}))},u=c,o=(r("a93f"),r("2877")),l=Object(o["a"])(u,n,s,!1,null,"4440624c",null);t["a"]=l.exports},b0c6:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"content"}},[r("div",{staticClass:"container"},[r("user-side-bar",{attrs:{user:e.user}}),r("main",[r("div",{attrs:{id:"user-tweets"}},[r("h3",[e._v(" Tweets")]),r("tweet",{attrs:{tweet:e.tweet,user:e.tweet.User}})],1),r("div",{attrs:{id:"replies"}},[r("h3",[e._v(" Replies")]),e._l(e.tweet.Replies,function(e){return[r("reply-card",{key:e.id,attrs:{reply:e}})]})],2),r("div",{attrs:{id:"reply-input"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyContent,expression:"replyContent"}],attrs:{name:"text",id:"text",cols:"30",rows:"10"},domProps:{value:e.replyContent},on:{input:function(t){t.target.composing||(e.replyContent=t.target.value)}}}),r("button",{on:{click:function(t){return e.checkBeforePost(e.tweet.id)}}},[e._v("Reply")])])])],1)])},s=[],a=(r("96cf"),r("3b8d")),i=r("cebc"),c=r("b17a"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"replies"},[r("img",{attrs:{src:e.reply.User.avatar}}),r("div",[r("div",[r("router-link",{attrs:{to:"/users/"+e.reply.userId+"/tweets",tag:"span"}},[e._v("@"+e._s(e.reply.User.name))]),r("span",[e._v(", "+e._s(e.reply.createdAt))])],1),r("p",[e._v(e._s(e.reply.comment))])])])},o=[],l={name:"ReplayCard",props:{reply:Object}},p=l,d=(r("2452"),r("2877")),v=Object(d["a"])(p,u,o,!1,null,"651b858c",null),f=v.exports,w=r("adf8"),_=r("2f62"),b={name:"profile",components:{Tweet:c["a"],ReplyCard:f,UserSideBar:w["a"]},computed:Object(i["a"])({},Object(_["c"])("tweet",{tweet:function(e){return e.tweet}}),Object(_["c"])("user",{user:function(e){return e}}),Object(_["c"])("account",{account:function(e){return e}}),{likes:function(){return this.tweets.map(function(e){return e.likeCounts}).reduce(function(e,t){return e+t})}}),data:function(){return{replyContent:""}},methods:Object(i["a"])({},Object(_["b"])("tweet",["postReply"]),{checkBeforePost:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.replyContent){e.next=3;break}return alert("請填入資訊！"),e.abrupt("return");case 3:this.postReply({id:t,comment:this.replyContent,account:this.account}),this.replyContent="";case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()})},m=b,h=(r("9d7e"),Object(d["a"])(m,n,s,!1,null,"6c3013e0",null));t["default"]=h.exports},b17a:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tweets"},[r("img",{attrs:{src:e.user.avatar}}),r("div",[r("div",[r("router-link",{attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),r("span",[e._v(", "+e._s(e.tweet.createdAt))])],1),r("p",[e._v(e._s(e.tweet.description))]),r("div",[r("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+e.tweet.id+"/replies",tag:"span"}},[e._v("Reply("+e._s(e.tweet.Replies.length)+")")]),r("span",{staticClass:"like"},[e._v("Like("+e._s(e.tweet.LikedUsers.length)+")")])],1)])])},s=[],a={name:"tweet",props:{tweet:Object,user:Object}},i=a,c=(r("ba67"),r("2877")),u=Object(c["a"])(i,n,s,!1,null,"40c0e2d9",null);t["a"]=u.exports},ba67:function(e,t,r){"use strict";var n=r("3549"),s=r.n(n);s.a},d948:function(e,t,r){},ed7b:function(e,t,r){}}]);
//# sourceMappingURL=chunk-3280c30a.21542686.js.map