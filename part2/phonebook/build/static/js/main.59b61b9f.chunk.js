(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),r=t.n(c),a=t(3),o=t(2),u=t(4),i=t.n(u),s="/api/persons",l=function(){return i.a.get(s).then((function(e){return e.data}))},d=function(e){return i.a.post(s,e).then((function(e){return e.data}))},j=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e}))},b=t(0),f=function(e){var n=e.searchName,t=e.persons,c=e.deletePerson;return""===n?Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[e.name,", ",e.number," ",Object(b.jsx)(m,{deletePerson:c,id:e.id})]},e.id)}))}):Object(b.jsx)("ul",{children:t.filter((function(e){return e.name.toUpperCase().includes(n.toUpperCase())})).map((function(e){return Object(b.jsxs)("li",{children:[e.name,", ",e.number," ",Object(b.jsx)(m,{deletePerson:c,id:e.id})]},e.id)}))})},m=function(e){var n=e.deletePerson,t=e.id;return Object(b.jsx)("button",{onClick:function(){return n(t)},children:"delete"})},O=function(e){var n=e.searchName,t=e.handleSearchChange;return Object(b.jsxs)("p",{children:["filter shown with",Object(b.jsx)("input",{value:n,onChange:t})]})},p=function(e){var n=e.handleSubmit,t=e.newName,c=e.newNumber,r=e.handleNameChange,a=e.handleNumberChange;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:[" name: ",Object(b.jsx)("input",{value:t,onChange:r})]}),Object(b.jsxs)("div",{children:[" number: ",Object(b.jsx)("input",{value:c,onChange:a})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.message;return null===n?null:Object(b.jsx)("div",{className:"msg",children:n})},g=function(){var e=Object(o.useState)([""]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),u=Object(a.a)(r,2),i=u[0],s=u[1],m=Object(o.useState)(""),g=Object(a.a)(m,2),v=g[0],w=g[1],N=Object(o.useState)(""),C=Object(a.a)(N,2),S=C[0],P=C[1],k=Object(o.useState)(null),y=Object(a.a)(k,2),T=y[0],D=y[1];Object(o.useEffect)((function(){l().then((function(e){c(e),console.log("initial promise fulfilled")}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(x,{message:T}),Object(b.jsx)(O,{searchName:S,handleSearchChange:function(e){P(e.target.value)}}),Object(b.jsx)("h2",{children:"add new entries"}),Object(b.jsx)(p,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===i})),r={name:i,number:v};n?window.confirm("".concat(i," is already added. Replace old number with new one?"))&&j(n.id,r).then((function(e){c(t.map((function(n){return n.name!==i?n:e}))),s(""),w(""),D("".concat(e.name," number changed to ").concat(v)),setTimeout((function(){D(null)}),3e3)})).catch((function(e){D("Information of ".concat(n.name," has already been removed from server"))})):d(r).then((function(e){c(t.concat(e)),s(""),w(""),D("".concat(e.name," successfully added")),setTimeout((function(){D(null)}),3e3)}))},newName:i,newNumber:v,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){w(e.target.value)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(f,{searchName:S,persons:t,deletePerson:function(e){console.log("deletePerson function triggered in App component"),console.log(e);var n=t.find((function(n){return n.id===e})).name;window.confirm("Delete ".concat(n,"?"))&&h(e).then((function(r){console.log(r),c(t.filter((function(n){return n.id!==e}))),D("".concat(n," successfully deleted")),setTimeout((function(){D(null)}),3e3)}))}})]})};t(38);r.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.59b61b9f.chunk.js.map