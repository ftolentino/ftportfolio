(this.webpackJsonpftportfolio=this.webpackJsonpftportfolio||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var i=c(2),n=c.n(i),s=c(17),a=c.n(s),l=(c(32),c(4)),o=(c(33),c(16)),r=(c(34),c(6)),b=c(19),j=c(15),h=(c(35),c(1)),d=["btn--primary","btn--outline"],m=["btn--medium","btn--large","btn--mobile","btn--wide"],u=["primary","blue","red","green"],x=function(e){var t=e.children,c=e.type,i=e.onClick,n=e.buttonStyle,s=e.buttonSize,a=e.buttonColor,l=d.includes(n)?n:d[0],o=m.includes(s)?s:m[0],r=u.includes(a)?a:null;return Object(h.jsx)("button",{className:"btn ".concat(l," \n        ").concat(o," ").concat(r),onClick:i,type:c,children:t})},O=c(0),g=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!0),a=Object(o.a)(s,2),l=a[0],d=a[1],m=function(){return n(!1)},u=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(i.useEffect)((function(){return u(),window.addEventListener("resize",u),window.removeEventListener("resize",u)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(O.b.Provider,{value:{color:"#fff"},children:Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("div",{className:"navbar-container container",children:[Object(h.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:m,children:[Object(h.jsx)(b.a,{className:"navbar-icon"}),"FT"]}),Object(h.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:c?Object(h.jsx)(j.f,{}):Object(h.jsx)(j.a,{})}),Object(h.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/projects",className:"nav-links",onClick:m,children:"Projects"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/skills",className:"nav-links",onClick:m,children:"Skills"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/about",className:"nav-links",onClick:m,children:"About"})}),Object(h.jsx)("li",{className:"nav-btn",children:l?Object(h.jsx)(r.b,{to:"/contact",className:"btn-link",onClick:m,children:Object(h.jsx)(x,{buttonStyle:"btn--outline",children:"Contact"})}):Object(h.jsx)(r.b,{to:"/contact",className:"btn-link",onClick:m,children:Object(h.jsx)(x,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"Contact"})})})]})]})})})})},p=c(14),v=(c(45),function(e){var t=e.lightBg,c=e.topLine,i=e.lightText,n=e.lightTextDesc,s=e.headline,a=e.description,l=e.buttonLabel,o=e.shadow,b=e.img,j=e.alt;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row home__hero-row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(h.jsx)("div",{className:"top-line",children:c}),Object(h.jsx)("h1",{className:i?"heading":"heading dark",children:s}),Object(h.jsx)("p",{className:n?"home__hero-subtitle":"home__hero-subtitle dark",children:a}),Object(h.jsx)(r.b,{to:"/contact",children:Object(h.jsx)(x,{buttonSize:"btn--medium",buttonColor:"blue",children:l})})]})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"home__hero-img-wrapper",children:Object(h.jsx)("img",{src:b,alt:j,className:o?"home__hero-img-shadow":"home__hero-img"})})})]})})})})}),f={lightBg:!1,lightText:!0,lightTextDesc:!0,shadow:!0,topLine:"Frontend Developer",headline:"Filmer Tolentino",description:"I strive to build responsive and visually aesthetic web applications.",buttonLabel:"Contact Me",imgStart:"",img:"",alt:""},N={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Project 1",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-1.svg",alt:"Vault"},k={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Project 2",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},_={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Project 3",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-7.svg",alt:"Vault"},w={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Project 4",headline:"Web App Title",description:"Web App description goes here",buttonLabel:"Check it out",imgStart:"",img:"images/svg-8.svg",alt:"Vault"},T={lightBg:!1,lightText:!0,lightTextDesc:!0,headline:"About",imgStart:"",img:"images/FTheadshot1.png",alt:"Headshot"},S=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,Object(p.a)({},N)),Object(h.jsx)(v,Object(p.a)({},k)),Object(h.jsx)(v,Object(p.a)({},_)),Object(h.jsx)(v,Object(p.a)({},w))]})},L=(c(46),function(e){var t=e.headline,c=e.img,i=e.alt;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"about_hero-section",children:Object(h.jsx)("div",{className:"about-container",children:Object(h.jsxs)("div",{className:"about-row about__hero-row",children:[Object(h.jsx)("div",{className:"about-col",children:Object(h.jsxs)("div",{className:"about__hero-text-wrapper",children:[Object(h.jsx)("h1",{className:"about-heading",children:t}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non libero laoreet, viverra metus in, dictum elit. Ut varius euismod velit et auctor. Nullam eget facilisis risus, ac fermentum mi. Phasellus efficitur bibendum nunc, eget consequat dolor finibus quis. Morbi hendrerit efficitur vestibulum. Curabitur nec blandit nibh. Phasellus eu sapien ut erat luctus rhoncus. Vivamus finibus ipsum et condimentum lobortis. Vestibulum at vehicula arcu. Sed mollis tincidunt erat a lacinia. Aliquam condimentum, tortor fringilla tempor posuere, sapien quam sagittis ex, vel tempus nisl lacus quis elit."})]})}),Object(h.jsx)("div",{className:"about-col",children:Object(h.jsx)("div",{className:"about__hero-img-wrapper",children:Object(h.jsx)("img",{src:c,alt:i,className:"about__hero-img-shadow"})})})]})})})})}),C=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(L,Object(p.a)({},T))})},F=(c(47),c(26)),y=c.n(F),A=c(25),B=c.n(A),D=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(h.jsx)("div",{className:"contact-container",children:Object(h.jsxs)("section",{className:"contact-section",children:[Object(h.jsx)("p",{className:"contact-section-heading",children:"Interested in working together? Let's connect!"}),Object(h.jsx)("fieldset",{className:"fieldset",children:Object(h.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),B.a.sendForm("service_g9uwc3g","template_rci670h",e.target,"user_ZDwBobbI1kwHVXohZwLgU").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),alert("Thanks! I will be in touch!")},children:[Object(h.jsx)("input",{className:"contact-input",type:"text",name:"subject",placeholder:"Subject",required:!0}),Object(h.jsx)("input",{className:"contact-input",type:"text",name:"name",placeholder:"Name",required:!0}),Object(h.jsx)("input",{className:"contact-input",name:"email",type:"email",placeholder:"Your Email",required:!0}),Object(h.jsx)("textarea",{className:"contact-input",name:"message",placeholder:"Message",required:!0}),Object(h.jsx)(x,{buttonStyle:"btn--outline",onClick:function(){return n(!c)},children:Object(h.jsx)(y.a,{})})]})})]})})},q=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Skills"})})},I=(c(54),function(e){var t=e.lightBg,c=e.topLine,i=e.lightText,n=e.lightTextDesc,s=e.headline,a=e.description,l=e.buttonLabel;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"home__hero-row",children:[Object(h.jsx)("div",{className:"top-line",children:c}),Object(h.jsx)("h1",{className:i?"heading":"heading dark",children:s}),Object(h.jsx)("p",{className:n?"home__hero-subtitle":"home__hero-subtitle dark",children:a}),Object(h.jsx)(r.b,{to:"/contact",children:Object(h.jsx)(x,{buttonSize:"btn--medium",buttonColor:"blue",children:l})})]})})})})}),W=function(){return Object(h.jsx)("div",{className:"home__page-section",children:Object(h.jsx)(I,Object(p.a)({},f))})},E=(c(55),function(){return Object(h.jsx)("div",{className:"footer-container",children:Object(h.jsx)("section",{className:"social-media",children:Object(h.jsxs)("div",{className:"social-media-wrap",children:[Object(h.jsx)("div",{className:"footer-logo",children:Object(h.jsxs)(r.b,{to:"/",className:"social-logo",children:[Object(h.jsx)(b.a,{className:"navbar-icon"}),"FT"]})}),Object(h.jsx)("small",{className:"website-rights",children:"FILMER TOLENTINO \xa9 2021"}),Object(h.jsxs)("div",{className:"social-icons",children:[Object(h.jsx)("a",{className:"social-icon-link",href:"https://www.facebook.com/filmer.tolentino",rel:"noreferrer",target:"_blank","aria-label":"Facebook",children:Object(h.jsx)(j.b,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://www.instagram.com/filmerraw/",rel:"noreferrer",target:"_blank","aria-label":"Instagram",children:Object(h.jsx)(j.d,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://twitter.com/filmerTolentino",rel:"noreferrer",target:"_blank","aria-label":"Twitter",children:Object(h.jsx)(j.g,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/ftolentino/",rel:"noreferrer",target:"_blank","aria-label":"LinkedIn",children:Object(h.jsx)(j.e,{})}),Object(h.jsx)("a",{className:"social-icon-link",href:"https://github.com/ftolentino",rel:"noreferrer",target:"_blank","aria-label":"Github",children:Object(h.jsx)(j.c,{})})]})]})})})});function P(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var V=c(72);var z=function(){return Object(h.jsx)(V.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(P,{}),Object(h.jsx)(g,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:W}),Object(h.jsx)(l.a,{path:"/projects",component:S}),Object(h.jsx)(l.a,{path:"/skills",component:q}),Object(h.jsx)(l.a,{path:"/about",component:C}),Object(h.jsx)(l.a,{path:"/contact",component:D})]}),Object(h.jsx)(E,{})]})})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(r.a,{basename:"/ftportfolio",children:Object(h.jsx)(z,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.18b42e6a.chunk.js.map