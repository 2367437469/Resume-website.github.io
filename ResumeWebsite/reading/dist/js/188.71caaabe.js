"use strict";(self["webpackChunkmaoyan"]=self["webpackChunkmaoyan"]||[]).push([[188],{9188:function(t,a,s){s.r(a),s.d(a,{default:function(){return r}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"BookDetails"},[s("van-nav-bar",{attrs:{title:"","left-arrow":""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"detail"},[s("div",{staticClass:"detail-box"},[s("img",{staticClass:"auto-img",attrs:{src:t.DetaImg,alt:""}})]),s("div",{staticClass:"detail-content"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.DetailsData.title)+" ")]),s("div",{staticClass:"type"},[s("div",{staticClass:"type-t"},[t._v(" "+t._s(t.DetailsData["pris:book"].category)+" ")]),s("div",{staticClass:"s"},[t._v("|")]),s("div",{staticClass:"type-name"},[t._v(" "+t._s(t.DetailsData.author.name)+" ")])]),s("div",{staticClass:"score"},[s("van-rate",{attrs:{readonly:"",size:10,color:"#f8bd12","void-icon":"star","void-color":"#eee"},model:{value:t.rateValue,callback:function(a){t.rateValue=a},expression:"rateValue"}})],1),s("div",{staticClass:"count"},[s("div",{staticClass:"wordsCount"},[t._v(t._s(t.num))]),s("div",{staticClass:"clicksCount"},[t._v(" "+t._s(t.DetailsData["pris:subscribe"].clicksCount)+"点击 ")])]),s("div",{staticClass:"text-count"},[t._v(t._s(t.DetailsData["pris:book"].wprice)+"阅读点/千字")])])]),s("div",{staticClass:"text-content"},[t._v(" "+t._s(t.DetailsData.summary)+" ")]),s("div",{staticClass:"authorization"},[t._v("授权方:"),s("div",{staticClass:"auth"},[t._v(t._s(t.DetailsData["pris:book"].authorizer))])]),s("div",{staticClass:"zptype"},[t._v("作品类型:"+t._s(t.DetailsData["pris:book"].paydesc))]),s("van-divider",{style:{padding:"0 10px"}}),s("div",{staticClass:"catalogue",on:{click:t.gitSkipCat}},[s("div",{staticClass:"catalogue-box"},[t._m(0),s("div",{staticClass:"catalogue-title"},[s("div",{staticClass:"catalogue-date"},[t._v(t._s(t.timeDate[0]+"月"+t.timeDate[1]+"日"))]),s("div",{staticClass:"catalogue-new"},[t._v("更至:"+t._s(t.newWordsData))])]),s("div",{staticClass:"state"},[t._v("连载中"),s("van-icon",{attrs:{name:"arrow"}})],1)])])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"catalogue-img"},[i("img",{staticClass:"auto-img",attrs:{src:s(9295),alt:""}})])}],l={name:"BookDetails",data(){return{rateValue:"",DetailsId:"",DetaImg:"",DetailsData:[],DetailsTitle:"",timeDate:"",num:0,newWordsData:[]}},created(){this.DetailsTitle=this.$route.params.title,this.DetailsId=this.$route.params.id,this.getDetailsData(),this.getNewWords()},methods:{onClickLeft(){this.$router.go(-1)},gitSkipCat(){this.$router.push({name:"BookCatalogue",params:{id:this.DetailsId}})},getWords(){return this.num=Number(this.DetailsData["pris:book"].words),0==this.num||this.num>1&&this.num<1e4?this.num+"":this.num=Math.round(this.num/1e4).toFixed(1)+"万"},async getDetailsData(){await this.axios.get("https://apis.netstart.cn/yunyuedu/book/getsub.json?id="+this.DetailsId+"&title="+this.DetailsTitle).then((t=>{console.log(t),this.DetailsData=t.feed.entry,this.DetaImg=this.DetailsData.link[1].href,this.rateValue=parseInt(this.DetailsData["pris:ranking"].value),this.timeDate=this.DetailsData["pris:book"].updated,this.timeDate=this.timeDate.split("T"),this.timeDate=this.timeDate[0].split("-").splice(1,2),this.getWords()})).catch((t=>{console.log(t)}))},async getNewWords(){await this.axios.get("https://apis.netstart.cn/yunyuedu/book/simpleInfo.json?id="+this.DetailsId).then((t=>{this.newWordsData=t.item.latestArticleTitle})).catch((t=>{console.log(t)}))}}},o=l,c=s(1001),n=(0,c.Z)(o,i,e,!1,null,"4c5e28a3",null),r=n.exports},9295:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWxJREFUWEftVrFKxEAUnNeJrdjZW+xuvsBCEOwEsRAsRFIJWoginCLonYLY+AFqYbCwEUGwEwQLv+D2bWEv+AsKwpOFRJIcgUsiXrPpkn2TGWZ5wxBG/NCI+REEFBwwxixaax/+81p+BRhjbkVkBcApMx94EcaYHRE5ATBeEvVeQ+RUeVZEEudc7L/nBSQisgagy8w9f6iU2iSiIwCTuZ+81SDPRqdzmG8AV8y8URDgX7TW88z81ICgMSRsQXAgOFBwQGvtM6DbeKcaAPNBxCKiAJwz824aRD0iOqz47+cQfGMVM3fMvFwIIq31DYBVEYmdc0kaxbGIdABkSfY6BGnVyEx68AHgOov78hXMMvNLC5La0LAFwYHgQMGBKIrm+v3+c+1dagEY6IREtG+tPUuTcJuIfD+c+MNK9gXggpm3ykl4D2DJd0Br7XGahHsi4jthOVLbltJL59z6QCdUSi045x5bOFobGrYgOPADPox7IZek6vMAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=188.71caaabe.js.map