import{e as s,m as u,n as f,p as c}from"./chunk-MQNWUGWY.js";import{V as l,Va as o,Wa as n,Xa as d,aa as p,ba as m,cb as r}from"./chunk-O26KBKTK.js";var M=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["app-contact"]],decls:16,vars:0,consts:[[1,"row"],[1,"col-12","col-sm-12","col-md-3","col-lg-3","col-xl-3"],[1,"text-center"],["routerLink","/contact/mailing"],["routerLink","/contact/map"],["routerLink","/contact/website"],[1,"col-12","col-sm-12","col-md-9","col-lg-9","col-xl-9"]],template:function(i,C){i&1&&(o(0,"div",0)(1,"div",1)(2,"p",2),r(3,"contact works!"),n(),o(4,"ul")(5,"li")(6,"a",3),r(7,"Mailing"),n()(),o(8,"li")(9,"a",4),r(10,"Map"),n()(),o(11,"li")(12,"a",5),r(13,"Website"),n()()()(),o(14,"div",6),d(15,"router-outlet"),n()())},dependencies:[u,f]});let e=t;return e})();var x=[{path:"",component:M,children:[{path:"",loadChildren:()=>import("./chunk-SAVUZ55M.js").then(e=>e.MailingModule)},{path:"mailing",loadChildren:()=>import("./chunk-SAVUZ55M.js").then(e=>e.MailingModule)},{path:"mapping",loadChildren:()=>import("./chunk-TO55USBO.js").then(e=>e.MappingModule)},{path:"website",loadChildren:()=>import("./chunk-3W6KHXZT.js").then(e=>e.WebsiteModule)},{path:"**",loadChildren:()=>import("./chunk-SAVUZ55M.js").then(e=>e.MailingModule)}]}],g=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t}),t.\u0275inj=l({imports:[c.forChild(x),c]});let e=t;return e})();var N=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t}),t.\u0275inj=l({imports:[s,g]});let e=t;return e})();export{N as ContactModule};