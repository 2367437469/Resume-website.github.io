"use strict";(self["webpackChunkdouguo"]=self["webpackChunkdouguo"]||[]).push([[2],{7730:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"userdetail"},[e("div",{staticClass:"nav"},[e("van-nav-bar",{attrs:{fixed:"","left-arrow":""},on:{"click-left":t.back},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"ellipsis",size:"20",color:"#000"},on:{click:function(s){t.showShare=!0}}})]},proxy:!0}])})],1),e("div",{staticClass:"user-info"},[e("div",{staticClass:"img-box"},[e("div",{staticClass:"user-img"},[e("img",{staticClass:"auto-img",attrs:{src:t.user.user_photo,alt:""}})]),t.user.verified_image?e("div",{staticClass:"verified"},[e("img",{staticClass:"auto-img",attrs:{src:t.user.verified_image,alt:""}})]):t._e()]),e("div",{staticClass:"info"},[e("div",{staticClass:"title-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.user.nick))]),t.user.usermedal?e("div",{staticClass:"usermedal-box"},[e("div",{staticClass:"usermedal"},[e("img",{staticClass:"auto-img",attrs:{src:t.user.usermedal.icon,alt:""}})]),e("div",{staticClass:"count"},[t._v(t._s(t.user.usermedal.count_text))])]):t._e(),e("div",{staticClass:"lv"},[t._v("LV."+t._s(t.user.lvl))])]),e("div",{staticClass:"collect interest",on:{click:function(s){return s.stopPropagation(),t.interest.apply(null,arguments)}}},[t._v("关注")])])]),e("div",{staticClass:"archivement"},t._l(t.archivementTag,(function(s,i){return e("div",{key:i,staticClass:"tag",style:{color:s.text_color,backgroundColor:s.background_start_color}},[t._v(" "+t._s(s.text)+" "),e("van-icon",{attrs:{name:"play"}})],1)})),0),e("div",{staticClass:"introduce"},[e("div",{staticClass:"item"},[t._v("厨娘")]),e("div",{staticClass:"item"},[t._v(t._s(t.user.age))]),e("div",{staticClass:"item"},[t._v(t._s(t.user.location))])]),e("div",{staticClass:"introduction"},[t._v(" "+t._s(t.user.introduction?t.user.introduction:t.text)+" ")]),e("div",{staticClass:"list"},[e("div",{staticClass:"item"},[e("div",{staticClass:"count"},[t._v(t._s(t.user.following_count_text))]),e("div",{staticClass:"title"},[t._v("关注")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"count"},[t._v(t._s(t.user.followers_count_text))]),e("div",{staticClass:"title"},[t._v("粉丝")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"count"},[t._v(t._s(t.user.favoed_count_text))]),e("div",{staticClass:"title"},[t._v("被收藏")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"count"},[t._v(t._s(t.user.noted_count_text))]),e("div",{staticClass:"title"},[t._v("被学做")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"count"},[t._v(t._s(t.user.point_text))]),e("div",{staticClass:"title"},[t._v("经验值")])])]),e("van-tabs",{attrs:{color:"#facc30","title-active-color":"#000","title-inactive-color":"#999"},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[e("van-tab",{attrs:{title:t.name.recipes,"title-style":{fontWeight:"bold",fontSize:"16px"},name:"a"}},[e("div",{staticClass:"recipes-list"},[t._l(t.recipes,(function(s,i){return e("div",{key:i,staticClass:"recipes-item",on:{click:function(e){return t.goDetail(s.r.id)}}},[e("div",{staticClass:"banner"},[e("img",{staticClass:"auto-img",attrs:{src:s.r.img,alt:""}})]),e("div",{staticClass:"recommend"},[t._v(t._s(s.r.recommend_label))]),e("div",{staticClass:"title"},[t._v(t._s(s.r.n))])])})),e("van-list",{attrs:{offset:"100",finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[e("br")])],2)]),e("van-tab",{attrs:{title:t.name.notes,"title-style":{fontWeight:"bold",fontSize:"16px"},name:"b"}},[e("van-calendar",{style:{height:"450px"},attrs:{"min-date":t.minDate,"max-date":t.maxDate,poppable:!1,"show-subtitle":!1,"show-confirm":!1}}),e("div",{staticClass:"usernotescalendar-list"},t._l(t.usernotescalendar,(function(s,i){return e("div",{key:i,staticClass:"usernotescalendar-item"},[e("div",{staticClass:"date"},[e("div",{staticClass:"day"},[t._v(t._s(s.day_text))]),e("div",{staticClass:"month"},[t._v(t._s(s.month_text))])]),e("div",{staticClass:"notes-item"},t._l(s.day_list,(function(s,i){return e("div",{key:i,staticClass:"item",on:{click:function(e){return t.goNotesDetail(s.id)}}},[e("img",{attrs:{src:s.image_u,alt:""}})])})),0)])})),0),e("van-list",{attrs:{offset:"100",finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad2},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[e("br")])],1),e("van-tab",{attrs:{title:t.name.collect,"title-style":{fontWeight:"bold",fontSize:"16px"},name:"c"}},[e("div",{staticClass:"ufavorites-list"},t._l(t.ufavorites,(function(s,i){return e("div",{key:i,staticClass:"ufavorites-item",on:{click:function(e){return t.goDetail(s.id)}}},[e("div",{staticClass:"banner"},[e("img",{staticClass:"auto-img",attrs:{src:s.img,alt:""}})]),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(s.n))]),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.rate>0,expression:"item.rate > 0"}]},[t._v(t._s(s.rate)+"分 · ")]),e("span",[t._v(t._s(s.recommend_label))])]),e("div",{staticClass:"user"},[e("div",{staticClass:"head-img"},[e("img",{staticClass:"auto-img",attrs:{src:s.a.p,alt:""}})]),e("div",{staticClass:"name"},[t._v(t._s(s.a.n))])])])])})),0),e("van-list",{attrs:{offset:"100",finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad1},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[e("br")])],1)],1),e("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(s){t.showShare=s},expression:"showShare"}})],1)},a=[],n=(e(7542),e(1404)),o=(e(8508),e(8256)),c=(e(1539),e(4747),e(8309),e(4916),e(3123),{name:"Userdetail",data:function(){return{id:"",user:{},archivementTag:[],text:"吃货不是在吃就是在去吃的路上，没时间写签名",activeName:"a",offset:0,limit:10,noteOffset:0,noteLimit:100,name:{recipes:"",notes:"",collect:""},year:"",month:"",day:"",recipes:[],loading:!1,finished:!1,ufavorites:[],minDate:"",maxDate:"",usernotescalendar:[],showShare:!1,options:[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]]}},created:function(){this.id=this.$route.params.id,this.getUserDetailData(),this.getUrecipesData();var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth(),this.day=t.getDate(),this.maxDate=new Date(this.year,this.month,this.day),this.getNotescalendar(),this.getUfavorites(),this.getUsernotescalendar()},methods:{back:function(){this.$router.go(-1)},onLoad:function(){var t=this;this.offset=this.offset+10,setTimeout((function(){t.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/urecipes/"+t.id+"/"+t.offset+"/"+t.limit}).then((function(s){200===s.status&&s.data.result.list.forEach((function(s){t.recipes.push(s)}))})).catch((function(t){})),t.loading=!1,t.recipes.length<t.limit&&(t.finished=!0)}),1e3)},getUserDetailData:function(){var t=this;this.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/info/"+this.id}).then((function(s){t.archivementTag=s.data.result.user.archivement_tags,t.user=s.data.result.user,t.name.recipes="菜谱"+t.user.recipes_count,t.name.notes="笔记"+t.user.notes_count,t.name.collect="收藏"+t.user.collect_count;var e=t.user.regist_time.split(/ /)[0].split(/-/)[0],i=t.user.regist_time.split(/ /)[0].split(/-/)[1]-1,a=t.user.regist_time.split(/ /)[0].split(/-/)[2];t.minDate=new Date(e,i,a)})).catch((function(t){}))},getUrecipesData:function(){var t=this;this.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/urecipes/"+this.id+"/"+this.offset+"/"+this.limit}).then((function(s){t.recipes=s.data.result.list})).catch((function(t){}))},goDetail:function(t){this.$router.push({name:"Detail",params:{id:t}})},goNotesDetail:function(t){this.$router.push({name:"Notesdetail",params:{id:t}})},getNotescalendar:function(){this.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/notescalendar/"+this.id+"/"+this.year+"/"+this.month}).then((function(t){})).catch((function(t){}))},getUsernotescalendar:function(){var t=this;this.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/usernotescalendar/"+this.id+"/"+this.noteOffset+"/"+this.noteLimit}).then((function(s){t.usernotescalendar=s.data.result.notes})).catch((function(t){}))},onLoad2:function(){var t=this;this.noteOffset=this.noteOffset+50,setTimeout((function(){t.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/usernotescalendar/"+t.id+"/"+t.noteOffset+"/"+t.noteLimit}).then((function(s){s.data.result.notes,s.status,t.loading=!1})).catch((function(t){})),t.usernotescalendar.length<t.noteLimit&&(t.finished=!0)}),1e3)},getUfavorites:function(){var t=this;this.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/ufavorites/"+this.id+"/"+this.offset+"/"+this.limit}).then((function(s){t.ufavorites=s.data.result.recipes})).catch((function(t){}))},onLoad1:function(){var t=this;this.offset=this.offset+10,setTimeout((function(){t.axios({method:"get",url:"https://apis.netstart.cn/douguo/user/ufavorites/"+t.id+"/"+t.offset+"/"+t.limit}).then((function(s){200===s.status&&s.data.result.recipes.forEach((function(s){t.ufavorites.push(s)}))})).catch((function(t){})),t.loading=!1,t.ufavorites.length<t.limit&&(t.finished=!0)}),1e3)},onSelect:function(t){(0,o.Z)(t.name),this.showShare=!1},interest:function(){var t=document.querySelector(".interest");this.$root.isLogin?this.isinterest?(n.Z.confirm({title:"提示",message:"确定要取消关注该用户吗?"}).then((function(){t.innerText="关注",t.style.backgroundColor="#facc30"})),this.isinterest=!1):(t.innerText="已关注",t.style.backgroundColor="#f1f1f1",this.isinterest=!0):this.$router.push({name:"Login"})}}}),r=c,l=e(1001),u=(0,l.Z)(r,i,a,!1,null,"17c7f993",null),d=u.exports}}]);
//# sourceMappingURL=2-legacy.6a25f532.js.map