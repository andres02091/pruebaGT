import{b as M,c as O,e as F,p as k}from"./chunk-MQNWUGWY.js";import{$a as v,Fa as l,Ka as I,Qa as d,Ua as _,V as x,Va as a,Wa as r,Xa as m,Ya as S,_a as h,aa as u,ab as T,ba as b,bb as w,cb as c,db as f,eb as E,fa as y,ga as C,xa as g}from"./chunk-O26KBKTK.js";var p=class{constructor(){this.title="",this.name="",this.releaseDate=""}};var N=(()=>{let e=class e{constructor(){this.selected=new I,this.channel=new p,this.index=0}select(o){this.selected.emit(o)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-channel"]],inputs:{channel:"channel",index:"index"},outputs:{selected:"selected"},decls:7,vars:4,consts:[["tabindex","1",1,"nga-card-component","p-2","mb-2","text-center",3,"click","keyup"],[1,"img-thumbnail",3,"src","alt"],[1,"card-body"],[1,"card-text"],["type","button",1,"btn","btn-primary","btn-sm"]],template:function(n,i){n&1&&(a(0,"div",0),h("click",function(){return i.select(i.channel)})("keyup",function(){return i.select(i.channel)}),m(1,"img",1),a(2,"div",2)(3,"p",3),c(4),r(),a(5,"button",4),c(6),r()()()),n&2&&(l(1),w("src","assets/params/images/channels/",i.channel.name,".jpg",g),T("alt",i.channel.name),l(3),f(i.channel.releaseDate),l(2),E("n\xB0 ",i.index,""))},styles:[".nga-card-component[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;cursor:pointer;-webkit-box-shadow:0 0px 1px 0 rgba(0,0,0,.16),0 0px 5px 0 rgba(0,0,0,.12);box-shadow:0 0 1px #00000029,0 0 5px #0000001f}.nga-card-component[_ngcontent-%COMP%]:hover{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}"]});let t=e;return t})();function H(t,e){t&1&&(a(0,"div",12)(1,"div",13),c(2," Select a channel on the list"),m(3,"br")(4,"br")(5,"i",14)(6,"br"),r()())}function R(t,e){if(t&1){let s=S();a(0,"div",15),m(1,"img",16),a(2,"button",17),h("click",function(){y(s);let n=v();return C(n.onReset())}),c(3,"Reset"),r()()}if(t&2){let s=v();l(1),w("src","assets/params/images/channels/",s.channelSelected.name,".jpg",g)}}function U(t,e){if(t&1){let s=S();a(0,"div",18)(1,"app-channel",19),h("selected",function(n){y(s);let i=v();return C(i.onSelected(n))}),r()()}if(t&2){let s=e.$implicit,o=e.index;l(1),d("channel",s)("index",o+1)}}var V=(()=>{let e=class e{constructor(){this.channelSelected=new p,this.channels=[{title:"Disney Channel",name:"disney-channel",releaseDate:"22/03/1997"},{title:"FOX",name:"fox",releaseDate:"09/10/1986"},{title:"Discovery Channel",name:"discovery-channel",releaseDate:"17/06/1985"},{title:"HBO",name:"hbo",releaseDate:"08/11/1972"},{title:"History",name:"history",releaseDate:"01/01/1995"},{title:"Hulu",name:"hulu",releaseDate:"29/03/2007"},{title:"MTV",name:"mtv",releaseDate:"01/08/1981"},{title:"NBC",name:"nbc",releaseDate:"01/07/1941"},{title:"Netflix",name:"netflix",releaseDate:"29/08/1997"},{title:"Showtime",name:"showtime",releaseDate:"09/05/1976"},{title:"USA Nnetwork",name:"usa-network",releaseDate:"22/09/1977"}]}ngOnInit(){this.channelSelected=this.channels[0]}onSelected(o){this.channelSelected=o}onReset(){this.channelSelected=new p}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-example-components"]],decls:19,vars:5,consts:[[1,"container","pt-5"],[1,"row"],[1,"text-center"],[1,"h5"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4","p-4"],[1,"nga-card-component","text-center"],[1,"card-title","text-primary","p-2"],[1,"card-title"],["class","card-body",4,"ngIf"],["class","card-body text-center",4,"ngIf"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],["class","col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",4,"ngFor","ngForOf"],[1,"card-body"],["role","alert",1,"alert","alert-info"],[1,"fas","fa-arrow-alt-circle-right","ms-4","fa-2x"],[1,"card-body","text-center"],["alt","channel.name",1,"img-thumbnail",3,"src"],["type","button",1,"btn","btn-info","mt-2",3,"click"],[1,"col-6","col-sm-6","col-md-4","col-lg-3","col-xl-3"],[3,"channel","index","selected"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),c(4,"Components Features"),r(),m(5,"hr"),r()(),a(6,"div",1)(7,"div",4)(8,"div",1)(9,"div",5)(10,"h5",6),c(11),r(),a(12,"h5",7),c(13),r(),_(14,H,7,0,"div",8)(15,R,4,1,"div",9),r()()(),a(16,"div",10)(17,"div",1),_(18,U,2,2,"div",11),r()()()()),n&2&&(l(11),f(i.channelSelected.title),l(2),f(i.channelSelected.releaseDate),l(1),d("ngIf",!i.channelSelected.name),l(1),d("ngIf",i.channelSelected.name),l(3),d("ngForOf",i.channels))},dependencies:[M,O,N],styles:[".nga-card-component[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;cursor:pointer;-webkit-box-shadow:0 0px 1px 0 rgba(0,0,0,.16),0 0px 5px 0 rgba(0,0,0,.12);box-shadow:0 0 1px #00000029,0 0 5px #0000001f}.nga-card-component[_ngcontent-%COMP%]:hover{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}"]});let t=e;return t})();var z=[{path:"",component:V}],j=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[k.forChild(z),k]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[F,j]});let t=e;return t})();export{re as TutorialModule};
