(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reg"],{"75e2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("form",{staticClass:"form-wrapper"},[s("div",{staticClass:"info"},[e._v("请输入以下信息")]),s("div",{staticClass:"form-input"},[s("label",[e._v("登录名:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",{staticClass:"form-input"},[s("label",[e._v("密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("div",{staticClass:"form-input"},[s("label",[e._v("再次输入密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordRepeart,expression:"passwordRepeart"}],attrs:{type:"password"},domProps:{value:e.passwordRepeart},on:{input:function(t){t.target.composing||(e.passwordRepeart=t.target.value)}}})]),s("div",{staticClass:"btns"},[s("button",{staticClass:"reg",attrs:{type:"button"},on:{click:function(t){return e.reg()}}},[e._v("确认注册")]),s("button",{staticClass:"cancel",attrs:{type:"button"},on:{click:function(){t.$router.back()}}},[e._v("取消")])]),s("div")])},r=[],o=(a("7f7f"),{name:"RegForm",data:function(){return{name:"",password:"",passwordRepeart:""}},methods:{reg:function(){this.password===this.passwordRepeart&&""!=this.name?(localStorage.setItem("name",this.name),localStorage.setItem("password",this.password),alert("成功注册"),this.$router.push({name:"login"})):alert("请检查密码是否输入一致")}}}),n=o,i=(a("ec4e"),a("2877")),p=Object(i["a"])(n,s,r,!1,null,"12ccbc06",null);e["default"]=p.exports},"8c6d":function(t,e,a){},ec4e:function(t,e,a){"use strict";var s=a("8c6d"),r=a.n(s);r.a}}]);
//# sourceMappingURL=reg.70b29b66.js.map