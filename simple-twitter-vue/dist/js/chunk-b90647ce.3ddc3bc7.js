(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b90647ce"],{"54e2":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container py-5"},[s("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}}},[e._m(0),s("div",{staticClass:"form-label-group mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v("Submit")]),s("div",{staticClass:"text-center mb-3"},[s("p",[s("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]),s("p",{attrs:{"clrouter-linkss":"mt-5 mb-3 text-muted text-center"}},[e._v("© 2017-2018")])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],n=(s("96cf"),s("1da1")),i=s("7696"),o=s("2fa3"),l={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return o["a"].fire({icon:"warning",title:"請填入 email 和 password"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,i["a"].signIn({email:e.email,password:e.password});case 7:if(s=t.sent,a=s.data,"success"===a.status){t.next=11;break}throw new Error(a.message);case 11:localStorage.setItem("token",a.token),e.$store.commit("setCurrentUser",a.user),e.$router.push("/"),t.next=22;break;case 16:t.prev=16,t.t0=t["catch"](0),e.password="",o["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),e.isProcessing=!1,console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},c=l,u=s("2877"),m=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=m.exports},7696:function(e,t,s){"use strict";s("b0c0");var a=s("2fa3");t["a"]={signIn:function(e){var t=e.email,s=e.password;return a["b"].post("/signin",{email:t,password:s})},signUp:function(e){var t=e.name,s=e.email,r=e.password,n=e.passwordCheck;return a["b"].post("/signup",{name:t,email:s,password:r,passwordCheck:n})}}}}]);
//# sourceMappingURL=chunk-b90647ce.3ddc3bc7.js.map