import './polyfills.server.mjs';
import{b as k,c as T,d as V,i as I,k as j,m as w,n as H,r as O,s as G,t as P}from"./chunk-V7D22WKK.mjs";import{E as b,f as M,i as _}from"./chunk-SMARMCMH.mjs";import{Fa as l,Ga as F,Qa as s,S as d,Ua as N,Va as i,Wa as t,Xa as p,Z as C,_ as f,_a as c,aa as E,ab as S,cb as n,db as D,eb as A,jb as x,kb as v,ua as y}from"./chunk-S4NWIVL2.mjs";import"./chunk-KRLCULJA.mjs";var B=(()=>{let e=class e{transform(m,...o){return JSON.stringify(m,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=E({name:"prettyjson",type:e,pure:!0});let r=e;return r})();function J(r,e){if(r&1&&(i(0,"tr")(1,"th"),n(2),t(),i(3,"td"),p(4,"input",21),t()()),r&2){let u=e.index;l(2),D(u+1),l(2),S("id",u),s("formControlName",u)}}var L=(()=>{let e=class e{constructor(m){this.fb=m,this.exampleForm=this.fb.group({name:[""],releaseDate:[""],characters:this.fb.array([this.fb.control("Iron Man"),this.fb.control("Thanos"),this.fb.control("Hulk"),this.fb.control("Captain America")])})}ngOnInit(){this.exampleForm.patchValue({name:"Avengers: Endgame",releaseDate:"26/04/2019"})}addCharacter(){this.characters.push(this.fb.control("New Character"))}get characters(){return this.exampleForm.get("characters")}updateControls(){this.exampleForm.patchValue({name:"Avengers: Endgame patchValue",releaseDate:"26/04/2019 patchValue"})}resetControls(){this.exampleForm.patchValue({name:null,releaseDate:null})}};e.\u0275fac=function(o){return new(o||e)(F(O))},e.\u0275cmp=C({type:e,selectors:[["app-form-array"]],decls:53,vars:9,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-7"],[1,"card-title","text-center","text-primary"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-9"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"form-group","col-md-3"],["for","releaseDate"],["type","text","id","releaseDate","formControlName","releaseDate",1,"form-control"],[1,"card","p-4"],[1,"card-title","text-center","text-info"],["formArrayName","characters"],["type","submit",1,"btn","btn-primary","mr-2",3,"click"],[1,"table","table-sm","table-bordered"],[4,"ngFor","ngForOf"],[1,"col-5"],[3,"innerHTML"],["type","text",1,"form-control",3,"id","formControlName"]],template:function(o,a){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),n(5,"FormArray"),t(),i(6,"form",5)(7,"div",6)(8,"div",7)(9,"label",8),n(10,"Name"),t(),p(11,"input",9),t(),i(12,"div",10)(13,"label",11),n(14,"Date"),t(),p(15,"input",12),t()(),i(16,"div",13)(17,"h5",14),n(18,"Arrays"),t(),i(19,"div",6)(20,"div",15)(21,"button",16),c("click",function(){return a.addCharacter()}),n(22,"Add"),t(),i(23,"button",16),c("click",function(){return a.updateControls()}),n(24,"Delete"),t(),i(25,"table",17)(26,"thead")(27,"tr")(28,"th"),n(29,"Id"),t(),i(30,"th"),n(31,"Name"),t()()(),i(32,"tbody"),N(33,J,5,3,"tr",18),t()()()()(),i(34,"button",16),c("click",function(){return a.resetControls()}),n(35,"Reset Controls"),t(),i(36,"button",16),c("click",function(){return a.updateControls()}),n(37,"Update Controls"),t()()(),i(38,"div",19)(39,"h5",4),n(40,"FormArray Result"),t(),i(41,"strong"),n(42,"Valid"),t(),n(43),p(44,"br"),i(45,"strong"),n(46,"Form Value"),t(),p(47,"div",20),x(48,"prettyjson"),i(49,"strong"),n(50,"Array Value"),t(),p(51,"div",20),x(52,"prettyjson"),t()()()()),o&2&&(l(6),s("formGroup",a.exampleForm),l(27),s("ngForOf",a.characters.controls),l(10),A(" : ",a.exampleForm.valid,""),l(4),s("innerHTML",v(48,5,a.exampleForm.value),y),l(4),s("innerHTML",v(52,7,a.exampleForm.value.characters),y))},dependencies:[M,I,k,T,V,j,H,w,B]});let r=e;return r})();var U=[{path:"",component:L,children:[]}],R=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[b.forChild(U),b]});let r=e;return r})();var ae=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[_,R,G,P]});let r=e;return r})();export{ae as ExerciceModule};
