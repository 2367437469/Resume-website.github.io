"use strict";(self["webpackChunkdouguo"]=self["webpackChunkdouguo"]||[]).push([[893],{893:function(t,s,a){a.r(s),a.d(s,{default:function(){return l}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"renqun"},t._l(t.renqunData,(function(s,e){return a("div",{key:e,staticClass:"list"},[a("div",{staticClass:"item"},[a("div",{staticClass:"title-box"},[a("div",{staticClass:"name"},[t._v(t._s(s.name)),a("van-icon",{attrs:{name:"arrow"}})],1),t._m(0,!0)])]),a("div",{staticClass:"dish-box"},t._l(s.cs,(function(s,e){return a("div",{key:e,staticClass:"dish",on:{click:function(a){return t.searchDish(s.name)}}},[t._v(t._s(s.name))])})),0)])})),0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"img-box"},[a("img",{staticClass:"auto-img",attrs:{src:"",alt:""}})])}],i={name:"Renqun",data(){return{renqunData:[]}},created(){this.getRenqunData()},methods:{getRenqunData(){this.axios({method:"get",url:"https://apis.netstart.cn/douguo/recipe/flatcatalogs"}).then((t=>{200===t.status&&(this.renqunData=t.data.result.cs[8].cs)})).catch((t=>{}))},searchDish(t){this.$router.push({path:"search",query:{value:t}})}}},r=i,u=a(1001),c=(0,u.Z)(r,e,n,!1,null,"77446b00",null),l=c.exports}}]);
//# sourceMappingURL=893.1d778583.js.map