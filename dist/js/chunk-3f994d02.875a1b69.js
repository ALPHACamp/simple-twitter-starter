(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f994d02"],{1615:function(e,t,n){},"18ed":function(e,t,n){"use strict";var r=n("1615"),s=n.n(r);s.a},2957:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user"},[n("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),n("div",[n("router-link",{staticClass:"user-profile-link",attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),e.user.introduction?n("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):n("p",[e._v("no introduction yet")]),e.isFollowing?n("button",{on:{click:function(t){return e.removeFollowing({UserId:e.user.id})}}},[e._v("Unfollow")]):e.account.id!==e.user.id?n("button",{on:{click:function(t){return e.addFollowing({UserId:e.user.id})}}},[e._v("Follow")]):e._e()],1)])},s=[],i=n("cebc"),o=n("2f62"),c={name:"UserCard",props:{user:Object,account:Object},computed:{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.user.id})}},methods:Object(i["a"])({},Object(o["b"])("account",["addFollowing","removeFollowing"]))},a=c,u=(n("18ed"),n("2877")),l=Object(u["a"])(a,r,s,!1,null,"99ded008",null);t["a"]=l.exports},"2e33":function(e,t,n){"use strict";var r=n("92ff"),s=n.n(r);s.a},"2fdb":function(e,t,n){"use strict";var r=n("5ca1"),s=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(e){return!!~s(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var r=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(s){}}return!0}},"53ef":function(e,t,n){"use strict";var r=n("a77d"),s=n.n(r);s.a},6762:function(e,t,n){"use strict";var r=n("5ca1"),s=n("c366")(!0);r(r.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"768e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("user-side-bar",{attrs:{id:"user-profile",user:e.user}}),n("main",[n("h3",[e._v(" Following")]),n("div",{attrs:{id:"followings"}},[e._l(e.followings,function(t){return[n("user-card",{attrs:{user:t,account:e.account}})]})],2)])],1)])},s=[],i=(n("55dd"),n("cebc")),o=n("b17a"),c=n("2957"),a=n("adf8"),u=n("2f62"),l={name:"profile",components:{Tweet:o["a"],UserSideBar:a["a"],UserCard:c["a"]},computed:Object(i["a"])({},Object(u["e"])("user",{user:function(e){return e.user}}),Object(u["e"])("account",{account:function(e){return e}}),{followings:function(){return this.user.Followings.slice().sort(function(e,t){return new Date(t.Followship.createdAt)-new Date(e.Followship.createdAt)})}}),methods:{}},d=l,p=(n("2e33"),n("2877")),f=Object(p["a"])(d,r,s,!1,null,"268a62c2",null);t["default"]=f.exports},"77cc":function(e,t,n){"use strict";var r=n("c2b6"),s=n.n(r);s.a},8542:function(e,t,n){},"92ff":function(e,t,n){},a058:function(e,t,n){"use strict";var r=n("8542"),s=n.n(r);s.a},a77d:function(e,t,n){},aae3:function(e,t,n){var r=n("d3f4"),s=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},adf8:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-profile"}},[n("div",[n("div",{style:"background-image: url("+e.currentUser.avatar+")"}),n("h3",[e._v(e._s(e.currentUser.name))]),e.user.introduction?n("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):n("p",[e._v("no introduction yet")])]),n("div",[n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/tweets",tag:"p"}},[e._v("Tweets "+e._s(e.currentUser.Tweets.length))]),n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followings",tag:"p"}},[e._v("Followings "+e._s(e.currentUser.Followings.length))]),n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/followers",tag:"p"}},[e._v("Followers "+e._s(e.currentUser.Followers.length))]),n("router-link",{attrs:{to:"/users/"+e.currentUser.id+"/likes",tag:"p"}},[e._v("like "+e._s(e.currentUser.LikedTweets.length))])],1),e.user.id===e.account.id?n("router-link",{attrs:{to:"/users/"+e.account.id+"/edit",tag:"button"}},[e._v("Edit Profile")]):e.isFollowing?n("button",{on:{click:function(t){return e.removeFollowing({UserId:e.currentUser.id})}}},[e._v("Unfollow")]):n("button",{on:{click:function(t){return e.addFollowing({UserId:e.currentUser.id})}}},[e._v("Follow")])],1)},s=[],i=n("cebc"),o=n("2f62"),c={props:{user:Object},data:function(){return{currentUser:Object}},computed:Object(i["a"])({},Object(o["e"])("account",{account:function(e){return e}}),{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.currentUser.id})}}),beforeMount:function(){this.currentUser=this.user.id===this.account.id?this.account:this.user},methods:Object(i["a"])({},Object(o["b"])("account",["addFollowing","removeFollowing"]))},a=c,u=(n("a058"),n("2877")),l=Object(u["a"])(a,r,s,!1,null,"39aa3a44",null);t["a"]=l.exports},b17a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tweets"}},[n("div",{staticClass:"tweet"},[n("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),n("div",[n("div",[n("router-link",{attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),n("span",[e._v(", "+e._s(e.date)+", "+e._s(e.time))])],1),n("p",[e._v(e._s(e.tweet.description.substring(0,50)))]),n("div",[n("div",{staticClass:"reply-like"},[n("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+e.tweet.id+"/replies",tag:"span"}},[e._v("Reply("+e._s(e.tweet.Replies.length)+")")]),e.isLiked?n("span",{staticClass:"like",on:{click:function(t){return e.deleteLike(e.account.id,e.tweet.id)}}},[e._v("Unlike("+e._s(e.tweet.LikedUsers.length)+")")]):n("span",{staticClass:"like",on:{click:function(t){return e.postLike(e.account.id,e.tweet.id)}}},[e._v("Like("+e._s(e.tweet.LikedUsers.length)+")")])],1)])]),0!==e.tweet.Replies.length&&this.$route.path.includes("admin")?n("button",{staticClass:"drop-down",on:{click:function(t){e.showReplies=!e.showReplies}}},[!1===e.showReplies?n("i",{staticClass:"fas fa-angle-left"}):e._e(),!0===e.showReplies?n("i",{staticClass:"fas fa-angle-down"}):e._e()]):e._e()]),n("transition",{attrs:{name:"reply-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showReplies,expression:"showReplies"}],attrs:{id:"replies"}},[e._l(e.tweet.Replies,function(e){return[n("reply-card",{key:e.id,attrs:{reply:e}})]})],2)])],1)},s=[],i=(n("6762"),n("2fdb"),n("cebc")),o=n("2f62"),c=n("d88d"),a={name:"tweet",props:{tweet:Object,user:Object,account:Object},components:{ReplyCard:c["a"]},data:function(){return{showReplies:!1}},computed:{isLiked:function(){var e=this;return this.account.LikedTweets.some(function(t){return t.id===e.tweet.id})},date:function(){var e=new Date(this.tweet.createdAt),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;return e.getFullYear()+"-"+t+"-"+e.getDate()},time:function(){var e=new Date(this.tweet.createdAt);return e.getHours()+":"+e.getMinutes()}},methods:Object(i["a"])({},Object(o["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(o["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(o["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(o["b"])("tweet",["addLike","removeLike"]),{postLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("add like in homepage or Like page or admin page"),this.ADD_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:e})),this.ADD_ACCOUNT_LIKE({id:t}),this.addLike({accountId:e,tweetId:t})},deleteLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("remove like in homepage or Like page or admin page"),this.REMOVE_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:e})),this.REMOVE_ACCOUNT_LIKE({tweetId:t}),this.removeLike({accountId:e,tweetId:t})},toggleReplies:function(){this.showReplies=!this.showReplies}})},u=a,l=(n("77cc"),n("2877")),d=Object(l["a"])(u,r,s,!1,null,"838bf76c",null);t["a"]=d.exports},c2b6:function(e,t,n){},d2c8:function(e,t,n){var r=n("aae3"),s=n("be13");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(s(e))}},d88d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"replies"},[n("img",{attrs:{src:e.reply.User.avatar}}),n("div",[n("div",[n("router-link",{attrs:{to:"/users/"+e.reply.userId+"/tweets",tag:"span"}},[e._v("Replying to @"+e._s(e.reply.User.name))]),n("br"),n("span",[e._v(e._s(e.reply.createdAt))])],1),n("p",[e._v(e._s(e.reply.comment.substring(0,50)))])])])},s=[],i={name:"ReplayCard",props:{reply:Object}},o=i,c=(n("53ef"),n("2877")),a=Object(c["a"])(o,r,s,!1,null,"8242c580",null);t["a"]=a.exports}}]);
//# sourceMappingURL=chunk-3f994d02.875a1b69.js.map