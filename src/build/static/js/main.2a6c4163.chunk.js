(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(20);var r=n(1),c=n.n(r),a=n(17),s=n.n(a),i=(n(25),n(26),n(8)),o=n(2),j=n(0),l=function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{children:"Hello, welcome to my blog!"}),Object(j.jsx)("p",{children:"lorem ipsum"}),Object(j.jsx)("p",{children:"lorem ipsum"}),Object(j.jsx)("p",{children:"lorem ipsum"}),Object(j.jsx)("p",{children:"lorem ipsum"})]})},u=[{name:"learn-react",title:"Fastest way to learn React",content:["first paragraph","second paragraph","third paragraph","fourth paragraph"]},{name:"learn-extjs",title:"Fastest way to learn ExtJs",content:["first paragraph","second paragraph","third paragraph","fourth paragraph"]},{name:"learn-node",title:"Fastest way to learn Node",content:["first paragraph","second paragraph","third paragraph","fourth paragraph"]}],h=function(e){var t=e.articles;return Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){return Object(j.jsxs)(i.b,{className:"article-list-item",to:"/article/".concat(e.name),children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("p",{children:[e.content[0].substring(0,30),"..."]})]},t)}))})},p=function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{children:"Articles"}),Object(j.jsx)(h,{articles:u})]})},b=n(7),d=n.n(b),m=n(10),x=n(12),O=function(){return Object(j.jsx)("h1",{children:"404: Page not found!"})},f=function(e){var t=e.comments;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(j.jsxs)("div",{className:"comment",children:[Object(j.jsx)("h4",{children:e.username}),Object(j.jsx)("p",{children:e.text})]},t)}))]})},v=function(e){var t=e.articleName,n=e.upvotes,r=e.setArticleInfo,c=function(){var e=Object(m.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"upvotes-section",children:[Object(j.jsx)("button",{onClick:function(){return c()},children:"Add Upvote"}),Object(j.jsxs)("p",{children:["This post has been upvoted ",n," times!"]})]})},g=function(e){var t=e.articleName,n=e.setArticleInfo,c=Object(r.useState)(""),a=Object(x.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(x.a)(o,2),u=l[0],h=l[1],p=function(){var e=Object(m.a)(d.a.mark((function e(){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s.trim()&&""!==u.trim()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:s,text:u}),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,n(c),i(""),h("");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"add-comment-form",children:[Object(j.jsx)("h3",{children:"Add a comment"}),Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(j.jsxs)("label",{children:["Comment:",Object(j.jsx)("textarea",{rows:"4",cols:"50",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)("button",{onClick:function(){return p()},children:"Add comment"})]})},y=function(e){var t=e.match.params.name,n=u.find((function(e){return e.name===t})),a=Object(r.useState)({upvotes:0,comments:[]}),s=Object(x.a)(a,2),i=s[0],o=s[1];if(Object(r.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,o(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),!n)return Object(j.jsx)(O,{});var l=u.filter((function(e){return e.name!==t}));return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)(v,{articleName:t,upvotes:i.upvotes,setArticleInfo:o}),n.content.map((function(e,t){return Object(j.jsx)("p",{children:e},t)})),Object(j.jsx)("hr",{}),Object(j.jsx)(f,{comments:i.comments}),Object(j.jsx)(g,{articleName:t,setArticleInfo:o}),Object(j.jsx)("h3",{children:"Other articles:"}),Object(j.jsx)(h,{articles:l})]})},w=function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{children:"About page!"}),Object(j.jsx)("p",{children:"lorem ipsum"}),Object(j.jsx)("p",{children:"lorem ipsum"}),Object(j.jsx)("p",{children:"lorem ipsum"}),Object(j.jsx)("p",{children:"lorem ipsum"})]})},F=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/articles-list",children:"Articles"})})]})})};var A=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(F,{}),Object(j.jsx)("div",{id:"page-body",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",component:l,exact:!0}),Object(j.jsx)(o.a,{path:"/about",component:w}),Object(j.jsx)(o.a,{path:"/articles-list",component:p}),Object(j.jsx)(o.a,{path:"/article/:name",component:y}),Object(j.jsx)(o.a,{component:O})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),C()}},[[34,1,2]]]);
//# sourceMappingURL=main.2a6c4163.chunk.js.map