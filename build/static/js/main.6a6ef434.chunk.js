(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),a=t.n(r),s=t(15),i=t.n(s),o=(t(6),t(3)),u=function(e){var n=e.person,t=e.eliminatePerson;return Object(c.jsxs)("li",{children:[n.name,"  ",n.number,"  ",Object(c.jsx)("button",{onClick:t,children:"delete"})]})},j=t(4),d=t.n(j),l="/api/persons",b=function(){return d.a.get(l)},h=function(e){return d.a.post(l,e)},O=function(e){return d.a.delete("".concat(l,"/").concat(e))},m=function(e){return Object(c.jsxs)("p",{children:["filter shown with  ",Object(c.jsx)("input",{onChange:e.onChange})]})},f=function(e){var n=Object(r.useState)("some message"),t=Object(o.a)(n,2),a=t[0],s=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)("ul",{children:e.persons.filter((function(n){return n.name.includes(e.filter)})).map((function(n){return Object(c.jsx)(u,{person:n,eliminatePerson:function(){return t=n.id,"http://localhost:3001/notes/".concat(t),e.persons.find((function(e){return e.id===t})),void O(t).then((function(e){s("id "+t+" was deleted"),alert(a)})).catch((function(e){alert("the person '".concat(t,"' was already deleted from server"))}));var t}},n.id)}))})]})},g=function(e){return Object(c.jsx)("form",{onSubmit:e.submit,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Add a new number"}),Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},p=function(e){var n=e.message;e.type;return null===n?null:n.includes("Added")?Object(c.jsx)("div",{className:"message",children:n}):Object(c.jsx)("div",{className:"invisible",children:n})},x=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),u=i[0],j=i[1],d=Object(r.useState)(""),l=Object(o.a)(d,2),O=l[0],x=l[1],v=Object(r.useState)(""),C=Object(o.a)(v,2),w=C[0],N=C[1],S=Object(r.useState)("some error happened..."),k=Object(o.a)(S,2),P=k[0],y=k[1];Object(r.useEffect)((function(){b().then((function(e){a(e.data)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(p,{message:P}),Object(c.jsx)(m,{onChange:function(e){N(e.target.value)}}),Object(c.jsx)(g,{submit:function(e){e.preventDefault();var n={name:u,number:O,date:(new Date).toISOString(),id:Math.random()*t.length+1};console.log(n),console.log(t),h(n).then((function(e){a(t.concat(e.data)),j(""),x(""),y("Added "+n.name)}))},newName:u,handleNameChange:function(e){j(e.target.value)},newNumber:O,handleNumberChange:function(e){x(e.target.value)}}),Object(c.jsx)(f,{persons:t,filter:w})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()},6:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.6a6ef434.chunk.js.map