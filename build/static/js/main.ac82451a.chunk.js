(this.webpackJsonppart2a=this.webpackJsonppart2a||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(15),r=n.n(c),a=n(6),i=n(3),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,o=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:o})]})},l=n(4),j=n.n(l),d="http://localhost:3001/api/notes",f=function(){var t=j.a.get(d),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},m=function(t){return j.a.post(d,t).then((function(t){return t.data}))},p=function(t,e){return j.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))},b=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},h=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},O=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(""),l=Object(i.a)(r,2),j=l[0],d=l[1],O=Object(o.useState)(!0),v=Object(i.a)(O,2),x=v[0],g=v[1],T=Object(o.useState)("some error happened..."),S=Object(i.a)(T,2),y=S[0],k=S[1];Object(o.useEffect)((function(){f().then((function(t){c(t)}))}),[]);var w=x?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(b,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(u.jsx)("ul",{children:w.map((function(t,e){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),o=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});console.log(" mandado",o),p(t,o).then((function(e){console.log("retornado",e),c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(o){k("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:new Date,important:Math.random()<.5};m(e).then((function(t){c(n.concat(t)),d("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(h,{})]})};n(39);r.a.render(Object(u.jsx)(O,{notes:[{id:1,content:"HTML is easy",date:"2019-05-30T17:30:31.098Z",important:!0},{id:2,content:"Browser can execute only JavaScript",date:"2019-05-30T18:39:34.091Z",important:!1},{id:3,content:"GET and POST are the most important methods of HTTP protocol",date:"2019-05-30T19:20:14.298Z",important:!0}]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ac82451a.chunk.js.map