(this.webpackJsonpftportfolio=this.webpackJsonpftportfolio||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(19),s=c.n(a),l=(c(26),c(3)),o=(c(27),c(18)),r=(c(28),c(7)),b=c(13),j=c(9),h=(c(29),c(1)),d=["btn--primary","btn--outline"],m=["btn--medium","btn--large","btn--mobile","btn--wide"],u=["primary","blue","red","green"],x=function(e){var t=e.children,c=e.type,n=e.onClick,i=e.buttonStyle,a=e.buttonSize,s=e.buttonColor,l=d.includes(i)?i:d[0],o=m.includes(a)?a:m[0],r=u.includes(s)?s:null;return Object(h.jsx)("button",{className:"btn ".concat(l," \n        ").concat(o," ").concat(r),onClick:n,type:c,children:t})},O=c(0),g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),s=Object(o.a)(a,2),l=s[0],d=s[1],m=function(){return i(!1)},u=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)((function(){u()}),[]),window.addEventListener("resize",u),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(O.b.Provider,{value:{color:"#fff"},children:Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("div",{className:"navbar-container container",children:[Object(h.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:m,children:[Object(h.jsx)(b.a,{className:"navbar-icon"}),"FT"]}),Object(h.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:c?Object(h.jsx)(j.f,{}):Object(h.jsx)(j.a,{})}),Object(h.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/projects",className:"nav-links",onClick:m,children:"Projects"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/about",className:"nav-links",onClick:m,children:"About"})}),Object(h.jsx)("li",{className:"nav-btn",children:l?Object(h.jsx)(r.b,{to:"/contact",className:"btn-link",children:Object(h.jsx)(x,{buttonStyle:"btn--outline",children:"Contact"})}):Object(h.jsx)(r.b,{to:"/contact",className:"btn-link",onClick:m,children:Object(h.jsx)(x,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"Contact"})})})]})]})})})})},p=c(11),f=(c(39),function(e){var t=e.lightBg,c=e.topLine,n=e.lightText,i=e.lightTextDesc,a=e.headline,s=e.description,l=e.buttonLabel,o=e.img,b=e.alt;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row home__hero-row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(h.jsx)("div",{className:"top-line",children:c}),Object(h.jsx)("h1",{className:n?"heading":"heading dark",children:a}),Object(h.jsx)("p",{className:i?"home__hero-subtitle":"home__hero-subtitle dark",children:s}),Object(h.jsx)(r.b,{to:"/contact",children:Object(h.jsx)(x,{buttonSize:"btn--wide",buttonColor:"blue",children:l})})]})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"home__hero-img-wrapper",children:Object(h.jsx)("img",{src:o,alt:b,className:"home_hero-img"})})})]})})})})}),v={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Frontend Developer",headline:"Filmer Tolentino",description:"I strive to build responsive and visually aesthetic web applications.",buttonLabel:"Contact Me",imgStart:"",img:"images/FTheadshot1.png",alt:"Headshot"},N={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Project 1",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},k={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Project 2",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},w={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Project 3",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-7.svg",alt:"Vault"},T={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Project 4",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-8.svg",alt:"Vault"},_=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,Object(p.a)({},N)),Object(h.jsx)(f,Object(p.a)({},k)),Object(h.jsx)(f,Object(p.a)({},w)),Object(h.jsx)(f,Object(p.a)({},T))]})},L=(c(40),function(e){return Object(h.jsx)("div",{className:"about",children:Object(h.jsx)("h1",{children:"About"})})}),S=(c(41),c(21)),C=c.n(S),y=function(){return Object(h.jsx)("div",{className:"contact-container",children:Object(h.jsxs)("section",{className:"contact-section",children:[Object(h.jsx)("p",{className:"contact-section-heading",children:"Interested in working together? Let's connect!"}),Object(h.jsx)("div",{className:"input-areas",children:Object(h.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),C.a.sendForm("service_g9uwc3g","template_rci670h",e.target,"user_ZDwBobbI1kwHVXohZwLgU").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(h.jsx)("input",{className:"contact-input",type:"text",name:"subject",placeholder:"Subject"}),Object(h.jsx)("input",{className:"contact-input",type:"text",name:"name",placeholder:"Name"}),Object(h.jsx)("input",{className:"contact-input",name:"email",type:"email",placeholder:"Your Email"}),Object(h.jsx)("textarea",{className:"contact-input",name:"message",placeholder:"Message"}),Object(h.jsx)(x,{buttonStyle:"btn--outline",children:"Submit"})]})})]})})},F=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,Object(p.a)({},v))})},A=(c(44),function(){return Object(h.jsx)("div",{className:"footer-container",children:Object(h.jsx)("section",{className:"social-media",children:Object(h.jsxs)("div",{className:"social-media-wrap",children:[Object(h.jsx)("div",{className:"footer-logo",children:Object(h.jsxs)(r.b,{to:"/",className:"social-logo",children:[Object(h.jsx)(b.a,{className:"navbar-icon"}),"FT"]})}),Object(h.jsx)("small",{className:"website-rights",children:"FILMER TOLENTINO \xa9 2021"}),Object(h.jsxs)("div",{className:"social-icons",children:[Object(h.jsx)("a",{className:"social-icon-link",href:"https://www.facebook.com/filmer.tolentino",rel:"noreferrer",target:"_blank","aria-label":"Facebook",children:Object(h.jsx)(j.b,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://www.instagram.com/filmerraw/",rel:"noreferrer",target:"_blank","aria-label":"Instagram",children:Object(h.jsx)(j.d,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://twitter.com/filmerTolentino",rel:"noreferrer",target:"_blank","aria-label":"Twitter",children:Object(h.jsx)(j.g,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/ftolentino/",rel:"noreferrer",target:"_blank","aria-label":"LinkedIn",children:Object(h.jsx)(j.e,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://github.com/ftolentino",rel:"noreferrer",target:"_blank","aria-label":"Github",children:Object(h.jsx)(j.c,{})})]})]})})})});var B=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:F}),Object(h.jsx)(l.a,{path:"/projects",component:_}),Object(h.jsx)(l.a,{path:"/about",component:L}),Object(h.jsx)(l.a,{path:"/contact",component:y})]}),Object(h.jsx)(A,{})]})};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(r.a,{basename:"/ftportfolio",children:Object(h.jsx)(B,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f4c68576.chunk.js.map