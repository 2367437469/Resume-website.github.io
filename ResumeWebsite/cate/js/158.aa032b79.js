"use strict";(self["webpackChunkdouguo"]=self["webpackChunkdouguo"]||[]).push([[158],{9158:function(t,a,s){s.r(a),s.d(a,{default:function(){return l}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"caixi"},t._l(t.caixiData,(function(a,i){return s("div",{key:i,staticClass:"list"},[s("div",{staticClass:"item"},[s("div",{staticClass:"title-box"},[s("div",{staticClass:"name"},[t._v(t._s(a.name)),s("van-icon",{attrs:{name:"arrow"}})],1),t._m(0,!0)])]),s("div",{staticClass:"dish-box"},t._l(a.cs,(function(a,i){return s("div",{key:i,staticClass:"dish",on:{click:function(s){return t.searchDish(a.name)}}},[t._v(" "+t._s(a.name)+" ")])})),0)])})),0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"img-box"},[s("img",{staticClass:"auto-img",attrs:{src:"",alt:""}})])}],c={name:"Caixi",data(){return{caixiData:[]}},created(){this.getCaixiData()},methods:{getCaixiData(){this.axios({method:"get",url:"https://apis.netstart.cn/douguo/recipe/flatcatalogs"}).then((t=>{200===t.status&&(this.caixiData=t.data.result.cs[6].cs)})).catch((t=>{}))},searchDish(t){this.$router.push({path:"search",query:{value:t}})}}},n=c,r=s(1001),u=(0,r.Z)(n,i,e,!1,null,"97d06e4e",null),l=u.exports}}]);
//# sourceMappingURL=158.aa032b79.js.map