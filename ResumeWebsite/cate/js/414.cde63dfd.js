"use strict";(self["webpackChunkdouguo"]=self["webpackChunkdouguo"]||[]).push([[414],{9414:function(t,s,a){a.r(s),a.d(s,{default:function(){return h}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zhushi"},t._l(t.zhushiData,(function(s,i){return a("div",{key:i,staticClass:"list"},[a("div",{staticClass:"item"},[a("div",{staticClass:"title-box"},[a("div",{staticClass:"name"},[t._v(t._s(s.name)),a("van-icon",{attrs:{name:"arrow"}})],1),t._m(0,!0)])]),a("div",{staticClass:"dish-box"},t._l(s.cs,(function(s,i){return a("div",{key:i,staticClass:"dish",on:{click:function(a){return t.searchDish(s.name)}}},[t._v(" "+t._s(s.name)+" ")])})),0)])})),0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"img-box"},[a("img",{staticClass:"auto-img",attrs:{src:"",alt:""}})])}],u={name:"Zhushi",data(){return{zhushiData:[]}},created(){this.getZhushiData()},methods:{getZhushiData(){this.axios({method:"get",url:"https://apis.netstart.cn/douguo/recipe/flatcatalogs"}).then((t=>{200===t.status&&(this.zhushiData=t.data.result.cs[4].cs)})).catch((t=>{}))},searchDish(t){this.$router.push({path:"search",query:{value:t}})}}},c=u,n=a(1001),r=(0,n.Z)(c,i,e,!1,null,"5f4c981c",null),h=r.exports}}]);
//# sourceMappingURL=414.cde63dfd.js.map