(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043b4276"],{1511:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid d-flex flex-column flex-grow-1 vh-100 overflow-hidden py-5"},[r("div",{staticClass:"row px-5 mx-auto flex-grow-1 overflow-hidden",staticStyle:{width:"75%"}},[r("UserProfileCard",{staticClass:"col-md-4 mr-auto mh-100 overflow-auto",attrs:{user:e.user},on:{"after-follow-user":e.afterFollowUser,"after-unfollow-user":e.afterUnfollowUser}}),r("UserTweets",{staticClass:"col-md-7 mr-auto mh-100 overflow-auto",attrs:{tweets:e.tweets},on:{"after-add-like":e.afterLike,"after-delete-like":e.afterUnlike}})],1)])},n=[],a=(r("4de4"),r("d81d"),r("b0c0"),r("5530")),o=(r("96cf"),r("1da1")),i=r("7950"),l=r("202d"),u=r("4cce"),c=r("7482"),f=r("2fa3"),d={components:{UserProfileCard:i["a"],UserTweets:l["a"]},data:function(){return{user:{id:-1,email:"",name:"",avatar:"",introduction:"",role:"",isCurrentUser:null,isFollowed:null,tweetsCount:-1,followingCount:-1,followerCount:-1,likeCount:-1},tweets:[]}},created:function(){var e=this.$route.params.id;this.fetchProfileData(e),this.fetchTweetsData(e)},methods:{fetchProfileData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,o,i,l,c,d,w,p,m,v,h,g,k,b,x;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].getUserProfile(e);case 3:if(s=r.sent,n=s.data,o=s.statusText,"OK"===o){r.next=7;break}throw new Error;case 7:i=n.user,l=i.id,c=i.email,d=i.name,w=i.avatar,p=i.introduction,m=i.role,v=i.isCurrentUser,h=i.isFollowed,g=i.tweetsCount,k=i.followingCount,b=i.followerCount,x=i.likeCount,t.user=Object(a["a"])(Object(a["a"])({},t.user),{},{id:l,email:c,name:d,avatar:w,introduction:p,role:m,isCurrentUser:v,isFollowed:h,tweetsCount:g,followingCount:k,followerCount:b,likeCount:x}),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),f["a"].fire({icon:"error",title:"無法取得資料"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},fetchTweetsData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].getTweets(e);case 3:if(s=r.sent,n=s.data,a=s.statusText,"OK"===a){r.next=7;break}throw new Error;case 7:t.tweets=n.tweets,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),f["a"].fire({icon:"error",title:"無法取得資料"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},afterFollowUser:function(e){e===this.user.id&&(this.user=Object(a["a"])(Object(a["a"])({},this.user),{},{followerCount:this.user.followerCount+1,isFollowed:!0}))},afterUnfollowUser:function(e){e===this.user.id&&(this.user=Object(a["a"])(Object(a["a"])({},this.user),{},{followerCount:this.user.followerCount-1,isFollowed:!1}))},afterLike:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log("add like"),r.next=4,c["a"].tweets.like(e);case 4:if(s=r.sent,n=s.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:t.tweets=t.tweets.map((function(t){return t.id!==e?t:Object(a["a"])(Object(a["a"])({},t),{},{likesCount:t.likesCount+1,isLiked:!0})})),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),f["a"].fire({icon:"error",title:"無法add like，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterUnlike:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log("delete like"),r.next=4,c["a"].tweets.unlike(e);case 4:if(s=r.sent,n=s.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:t.user.isCurrentUser&&(t.tweets=t.tweets.filter((function(t){return t.id!==e}))),t.tweets=t.tweets.map((function(t){return t.id!==e?t:Object(a["a"])(Object(a["a"])({},t),{},{likesCount:t.likesCount-1,isLiked:!1})})),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),f["a"].fire({icon:"error",title:"無法取消like，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},w=d,p=r("2877"),m=Object(p["a"])(w,s,n,!1,null,null,null);t["default"]=m.exports},7950:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-4 d-flex flex-column align-items-start"},[r("img",{attrs:{src:e.user.avatar,width:"250px",height:"250px"}}),r("div",{staticClass:"mt-2 d-flex flex-column align-items-start"},[r("h2",{staticClass:"title"},[e._v(e._s(e.user.name))]),r("p",{staticStyle:{width:"300px","text-align":"left","word-break":"break-all"}},[e._v(e._s(e.user.introduction))]),r("ul",{staticClass:"list-inline list-unstyled"},[r("li",{staticStyle:{"text-align":"left"}},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("strong",[e._v(e._s(e.user.tweetsCount)+" ")]),e._v("Tweets ")])],1),r("li",{staticStyle:{"text-align":"left"}},[r("router-link",{attrs:{to:{name:"users-followings",params:{id:e.user.id}}}},[r("strong",[e._v(e._s(e.user.followingCount))]),e._v(" followings (追蹤者) ")])],1),r("li",{staticStyle:{"text-align":"left"}},[r("router-link",{attrs:{to:{name:"users-followers",params:{id:e.user.id}}}},[r("strong",[e._v(e._s(e.user.followerCount))]),e._v(" followers (追隨者) ")])],1),r("li",{staticStyle:{"text-align":"left"}},[r("router-link",{attrs:{to:{name:"users-likes",params:{id:e.user.id}}}},[r("strong",[e._v(e._s(e.user.likeCount))]),e._v(" Likes ")])],1)]),r("div",{attrs:{id:"follow-btns"}},[e.user.isFollowed||e.user.isCurrentUser?e.user.isFollowed&&!e.user.isCurrentUser?r("button",{staticClass:"btn btn-danger",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.unfollow(e.user.id)}}},[e._v("取消追蹤")]):r("router-link",{staticClass:"btn btn-primary ml-2",attrs:{to:{name:"users-profile-edit",query:{id:e.user.id}}}},[e._v("edit profile")]):r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.follow(e.user.id)}}},[e._v("追蹤")])],1)])])},n=[],a=(r("96cf"),r("1da1")),o=r("4cce"),i=r("2fa3"),l={props:{user:{type:Object,required:!0}},data:function(){return{isProcessing:!1}},methods:{follow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o["a"].follow(e);case 4:s=r.sent,n=s.data,console.log("data",n),t.$emit("after-follow-user",e),t.isProcessing=!1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isProcessing=!1,i["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},unfollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o["a"].unfollow(e);case 4:if(s=r.sent,n=s.data,console.log("data",n),"success"===n.status){r.next=9;break}throw new Error(n.message);case 9:t.$emit("after-unfollow-user",e),t.isProcessing=!1,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),t.isProcessing=!1,i["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}},u=l,c=r("2877"),f=Object(c["a"])(u,s,n,!1,null,null,null);t["a"]=f.exports},d81d:function(e,t,r){"use strict";var s=r("23e7"),n=r("b727").map,a=r("1dde"),o=r("ae40"),i=a("map"),l=o("map");s({target:"Array",proto:!0,forced:!i||!l},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-043b4276.735a928e.js.map