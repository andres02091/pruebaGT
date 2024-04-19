import './polyfills.server.mjs';
import{a as S,b as N,c as k,d as D,i as j,k as M,n as V,r as T,s as B,t as A}from"./chunk-V7D22WKK.mjs";import{E as b,h as w,i as E}from"./chunk-SMARMCMH.mjs";import{Fa as d,Ga as F,Qa as p,S as s,Va as r,Wa as t,Xa as m,Z as g,_ as c,_a as u,aa as C,cb as o,jb as h,kb as x,ua as f}from"./chunk-S4NWIVL2.mjs";import"./chunk-KRLCULJA.mjs";var H=(()=>{let e=class e{transform(l,...n){return JSON.stringify(l,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=C({name:"prettyjson",type:e,pure:!0});let i=e;return i})();var I=(()=>{let e=class e{constructor(l){this.fb=l,this.exampleForm=this.fb.group({name:[""],releaseDate:[""],franchise:[!1],budget:[0],worldwide:[0],summary:[""]})}ngOnInit(){this.updateControls()}updateControls(){this.exampleForm.patchValue({name:"Avengers: Endgame",releaseDate:"26/04/2019",franchise:!0,budget:356e6,worldwide:2797800564,summary:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins."})}resetControls(){this.exampleForm.patchValue({name:null,releaseDate:null,franchise:!0,budget:null,worldwide:null,summary:null})}resetFranchise(){let l=!this.exampleForm.value.franchise;this.exampleForm.patchValue({franchise:l})}};e.\u0275fac=function(n){return new(n||e)(F(T))},e.\u0275cmp=g({type:e,selectors:[["app-form-builder"]],decls:52,vars:7,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-12","col-sm-12","col-md-7","col-lg-7","col-xl-7"],[1,"card-title","text-center","text-info"],[1,"row","g-3",3,"formGroup"],[1,"col-12","col-sm-12","col-md-6","col-lg-6","col-xl-6"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name",1,"form-control"],["for","releaseDate",1,"form-label"],["type","text","id","releaseDate","formControlName","releaseDate",1,"form-control"],["for","budget",1,"form-label"],["type","text","id","budget","formControlName","budget",1,"form-control"],["for","worldwide",1,"form-label"],["type","text","id","worldwide","formControlName","worldwide",1,"form-control"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],["for","summary",1,"form-label"],["id","summary","rows","3","id","summary","formControlName","summary",1,"form-control"],[1,"form-check"],["type","checkbox","id","franchise","formControlName","franchise",1,"form-check-input"],["for","franchise",1,"form-check-label"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4"],["type","submit",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-12","col-sm-12","col-md-5","col-lg-5","col-xl-5"],[1,"card-title","text-center","text-primary"],[3,"innerHTML"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),o(5,"FormBuilder"),t(),r(6,"form",5)(7,"div",6)(8,"label",7),o(9,"Name"),t(),m(10,"input",8),t(),r(11,"div",6)(12,"label",9),o(13,"Release Date"),t(),m(14,"input",10),t(),r(15,"div",6)(16,"label",11),o(17,"Budget"),t(),m(18,"input",12),t(),r(19,"div",6)(20,"label",13),o(21,"Worldwide"),t(),m(22,"input",14),t(),r(23,"div",15)(24,"label",16),o(25,"Summary"),t(),m(26,"textarea",17),t(),r(27,"div",15)(28,"div",18),m(29,"input",19),r(30,"label",20),o(31," Franchise "),t()()(),r(32,"div",21)(33,"button",22),u("click",function(){return a.resetControls()}),o(34,"Reset Controls"),t()(),r(35,"div",21)(36,"button",22),u("click",function(){return a.resetFranchise()}),o(37,"Change Franchise"),t()(),r(38,"div",21)(39,"button",22),u("click",function(){return a.updateControls()}),o(40,"Update Controls"),t()()()(),r(41,"div",23)(42,"h5",24),o(43,"FormBuilder Result"),t(),r(44,"strong"),o(45,"Value with prettyjson"),t(),m(46,"div",25),h(47,"prettyjson"),r(48,"strong"),o(49,"Value with json"),t(),m(50,"div",25),h(51,"json"),t()()()()),n&2&&(d(6),p("formGroup",a.exampleForm),d(40),p("innerHTML",x(47,3,a.exampleForm.value),f),d(4),p("innerHTML",x(51,5,a.exampleForm.value),f))},dependencies:[j,N,S,k,D,M,V,w,H]});let i=e;return i})();var R=[{path:"",component:I,children:[]}],P=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c({type:e}),e.\u0275inj=s({imports:[b.forChild(R),b]});let i=e;return i})();var ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c({type:e}),e.\u0275inj=s({imports:[E,P,B,A]});let i=e;return i})();export{ee as ExerciceModule};
