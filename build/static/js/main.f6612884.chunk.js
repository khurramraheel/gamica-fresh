(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(22),s=c.n(r),i=(c(42),c(13)),l=c(7),d=c(2),j=c.n(d),o=c(5),b=c(6),u=c(29),p=[],O={user:null};var h=Object(u.a)({dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(e=Object(b.a)(e),t.type){case"ADD_DELETED":var c=e.find((function(e){if(e.id==t.id)return!0})),a=e.indexOf(c);e.splice(a,1)}if("Update_DATA"==t.type){var n=e.find((function(e){if(e.id==t.payload.id)return!0})),r=e.indexOf(n);e[r]=t.payload}return"LOADED_ADS"==t.type&&(e=Object(b.a)(t.ads)),"ADD_DATA"==t.type&&e.push({imgsrc:t.payload.imgsrc,price:t.payload.price,title:t.payload.title}),e},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(e=Object(l.a)({},e),t.type){case"USER_LOGIN":e.user=t.payload;break;case"USER_LOGOUT":e.user=null}return e}}),x=Object(u.b)(h),m=c(12),f=c.n(m),v=c(1);function g(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)();function n(){return(n=Object(o.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f.a.post("/create_ad",{price:t.current.value,title:c.current.value});case 3:n=e.sent,x.dispatch({type:"ADD_DATA",payload:n.data});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsx)("div",{className:"container contact_div",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-md-4 col-8 mx-auto",children:Object(v.jsxs)("form",{onSubmit:function(e){return n.apply(this,arguments)},children:[Object(v.jsxs)("div",{class:"mb-3",children:[Object(v.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Title"}),Object(v.jsx)("input",{type:"text",ref:c,class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(v.jsxs)("div",{class:"mb-3",children:[Object(v.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"price"}),Object(v.jsx)("input",{type:"number",ref:t,class:"form-control",id:"exampleInputPassword1"})]}),Object(v.jsxs)("div",{class:"mb-3 form-check",children:[Object(v.jsx)("input",{type:"file",ref:e,class:"form-check-input",id:"exampleCheck1"}),Object(v.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Upload Picture"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})})})}var y=c(15),S=c(19);function w(e){Object(a.useRef)();var t=Object(S.c)((function(e){return e.userReducer.user}));return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col m12",children:Object(v.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(v.jsxs)("div",{class:"container-fluid",children:[Object(v.jsx)("a",{class:"navbar-brand",href:"#",children:"OLX"}),Object(v.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{class:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(v.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsx)(y.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsx)(y.b,{to:"form",children:"New Adds"})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsx)(y.b,{to:"/signup",children:"SIgnup"})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsx)(y.b,{to:"/login",children:"LOgin"})})]}),Object(v.jsxs)("form",{class:"d-flex",children:[Object(v.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){e.setSearch(t.target.value)}}),t?Object(v.jsxs)("span",{className:"user-box",children:[" Welcome, ",Object(v.jsx)("b",{children:t.name})]}):null,Object(v.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})})})}var k=c(4);function D(e){var t=Object(k.f)();return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"",children:Object(v.jsx)("div",{className:"mainDiv",children:Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)("div",{className:"image",children:Object(v.jsx)("img",{className:"",src:e.data.imgsrc})}),Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("span",{children:e.data.title}),Object(v.jsx)("div",{children:e.data.price})]}),Object(v.jsx)("button",{onClick:function(){e.deleteItem(e.data.id)},children:"Delete"}),Object(v.jsx)("button",{onClick:function(){t.push("/edit/"+e.data.id)},children:"Edit"})]})})})})}c(68);var _=Object(S.b)((function(e){return e}))((function(e){function t(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("/delete_ad?ad_id="+t);case 2:x.dispatch({type:"ADD_DELETED",id:t}),alert("delete items");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsx)("div",{children:e.dataReducer.filter((function(t){return!e.search||t.title.includes(e.search)})).map((function(e,c){return Object(v.jsx)(D,{data:e,deleteItem:t,index:c})}))})}));function E(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(k.f)(),r=Object(k.g)(),s=Object(a.useState)({}),d=Object(i.a)(s,2),b=d[0],u=d[1];function p(){return(p=Object(o.a)(j.a.mark((function a(s){var i,l;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),i={price:t.current.value,title:c.current.value,id:r.id},e.current.files.length&&((i=new FormData).append("id",r.id),i.append("price",t.current.value),i.append("title",c.current.value),i.append("meriFile",e.current.files[0])),a.next=5,f.a.put("/update_ad",i);case 5:l=a.sent,n.push("/"),x.dispatch({type:"Update_DATA",payload:l.data});case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(a.useEffect)((function(){f.a.get("/load_ad?id="+r.id).then((function(e){u(e.data)}))}),[]),Object(v.jsx)("div",{className:"container contact_div",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-md-4 col-8 mx-auto",children:Object(v.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(v.jsxs)("div",{class:"mb-3",children:[Object(v.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Title"}),Object(v.jsx)("input",{defaultValue:b.title,type:"text",ref:c,class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(v.jsxs)("div",{class:"mb-3",children:[Object(v.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"price"}),Object(v.jsx)("input",{defaultValue:b.price,type:"number",ref:t,class:"form-control",id:"exampleInputPassword1"})]}),Object(v.jsxs)("div",{class:"mb-3 form-check",children:[Object(v.jsx)("input",{onChange:function(e){u(Object(l.a)(Object(l.a)({},b),{},{imgsrc:URL.createObjectURL(e.target.files[0])}))},type:"file",ref:e,class:"form-check-input",id:"exampleCheck1"}),Object(v.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Upload Picture"})]}),Object(v.jsx)("img",{src:b.imgsrc}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})})})}var N=c(28);function I(){var e=Object(N.a)(),t=e.register,c=e.handleSubmit,a=(e.watch,e.formState.errors,function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/signup",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(v.jsxs)("form",{onSubmit:c(a),children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",Object(l.a)(Object(l.a)({},t("name")),{},{type:"text"}))}),Object(v.jsx)("div",{children:Object(v.jsx)("input",Object(l.a)(Object(l.a)({},t("email")),{},{type:"email"}))}),Object(v.jsx)("div",{children:Object(v.jsx)("input",Object(l.a)(Object(l.a)({},t("password")),{},{type:"password"}))}),Object(v.jsx)("button",{children:"Submit User"})]})}function A(){var e=Object(N.a)(),t=e.register,c=e.handleSubmit,a=(e.watch,e.formState.errors,Object(k.f)()),n=function(){var e=Object(o.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("/login",t);case 3:(c=e.sent).data.user.id?(localStorage.setItem("token",c.data.token),x.dispatch({type:"USER_LOGIN",payload:c.data.user}),a.push("/dashboard")):alert("user nahi j"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:c(n),children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",Object(l.a)(Object(l.a)({},t("email")),{},{type:"email"}))}),Object(v.jsx)("div",{children:Object(v.jsx)("input",Object(l.a)(Object(l.a)({},t("password")),{},{type:"password"}))}),Object(v.jsx)("button",{children:"Login"})]})}function R(){Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/check_session?token="+localStorage.getItem("token"));case 3:(t=e.sent).data.id&&x.dispatch({type:"USER_LOGIN",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("token garbaring");case 10:return e.next=12,f.a.get("/get_ads");case 12:c=e.sent,x.dispatch({type:"LOADED_ADS",ads:c.data});case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{setSearch:n}),Object(v.jsxs)(k.c,{children:[Object(v.jsx)(k.a,{path:"/form",component:g}),Object(v.jsx)(k.a,{path:"/signup",component:I}),Object(v.jsx)(k.a,{path:"/login",component:A}),Object(v.jsx)(k.a,{path:"/edit/:id",component:E}),Object(v.jsx)(k.a,{path:"/",render:function(){return Object(v.jsx)(_,{search:c})}})]})]})}var L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(y.a,{children:Object(v.jsx)(S.a,{store:x,children:Object(v.jsx)(R,{})})})}),document.getElementById("root")),L()}},[[69,1,2]]]);
//# sourceMappingURL=main.f6612884.chunk.js.map