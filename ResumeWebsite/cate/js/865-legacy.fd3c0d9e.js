"use strict";(self["webpackChunkdouguo"]=self["webpackChunkdouguo"]||[]).push([[865],{4865:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"login"},[this.$root.isLogin?i("div",{staticClass:"login-exit"},[i("div",{staticClass:"back",on:{click:t.back}},[i("van-icon",{attrs:{name:"arrow-left"}})],1),i("div",{staticClass:"sc"},t._l(t.cpData,(function(s,a){return i("div",{key:a,staticClass:"sc-box",on:{click:function(i){return t.gitDetail(s.cook_id)}}},[i("div",{staticClass:"sc-box"},[i("div",{staticClass:"sc-img"},[i("img",{staticClass:"auto-img img-box",attrs:{src:s.share_info.image,alt:""}})]),i("div",{staticClass:"sc-pname"},[i("div",{staticClass:"sc-title"},[t._v(" "+t._s(s.title)+" ")]),i("div",{staticClass:"sc-time"},[t._v(" "+t._s(s.release_time)+" ")]),i("div",{staticClass:"sc-cont"},[i("div",{staticClass:"sc-p"},[i("img",{staticClass:"auto-img",attrs:{src:s.user.user_photo,alt:""}})]),i("div",{staticClass:"sc-name"},[t._v(t._s(s.user.nickname))])])])])])})),0)]):i("div",[i("div",{staticClass:"title"},[t._v("豆果美食")]),i("van-form",[i("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"请输入手机号",autocomplete:"off",rules:[{required:!0,message:"请填写手机号"}]},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}}),i("van-field",{attrs:{type:t.isOpenLogin?"text":"password",name:"密码",label:"密码",placeholder:"密码","right-icon":t.isOpenLogin?"eye-o":"closed-eye",autocomplete:"off",rules:[{required:!0,message:"请填写密码"}]},on:{"click-right-icon":t.toggleLoginPasssword},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),i("div",{staticStyle:{margin:"16px"}},[i("van-button",{staticClass:"btnd",attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:t.getstorager}},[t._v("登入")])],1),i("div",{staticStyle:{margin:"16px"}},[i("van-button",{staticClass:"register",attrs:{round:"",block:"",type:"button"},on:{click:t.register}},[t._v("注册")])],1)],1)],1)])},e=[],o=(i(8508),i(8256)),n={name:"Login",data:function(){return{id:"",isOpenLogin:!1,name:"",account:"",password:"",cpData:[],list:[{title:"我的收藏"},{title:"消息中心"}]}},created:function(){this.id=this.$root.scjl,this.getSc()},methods:{gitDetail:function(t){this.$router.push({name:"Detail",params:{id:t}})},getSc:function(){for(var t=this,s=0;s<this.id.length;s++)this.axios({method:"get",url:"https://apis.netstart.cn/douguo/recipe/detail/"+this.id[s]}).then((function(s){t.cpData.push(s.data.result.recipe)})).catch((function(t){}))},register:function(){this.$router.push({name:"Register"})},back:function(){this.$router.push({name:"Home"})},getstorager:function(){var t=localStorage.getItem("data");if(""!==this.account&&""!==this.password)if(null!==t){var s=JSON.parse(t);if(this.account!=s.account||this.password!=s.password)return(0,o.Z)("账号或密码输入错误"),this.account="",void(this.password="");this.account===s.account&&this.password===s.password&&((0,o.Z)("登录成功"),this.$router.push({name:"Home"}),this.$root.isLogin=!0)}else(0,o.Z)("账号没注册");else(0,o.Z)("账号或者密码不能为空")},toggleLoginPasssword:function(){this.isOpenLogin=!this.isOpenLogin}}},c=n,r=i(1001),l=(0,r.Z)(c,a,e,!1,null,"8a369ed2",null),u=l.exports}}]);
//# sourceMappingURL=865-legacy.fd3c0d9e.js.map