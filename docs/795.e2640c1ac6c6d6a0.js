"use strict";(self.webpackChunkangular_client=self.webpackChunkangular_client||[]).push([[795],{2795:(P,d,e)=>{e.r(d),e.d(d,{StorePageModule:()=>p});var u=e(6895),r=e(1240),o=e(8256),m=e(5070);class a{constructor(t){this.route=t,this.storeName="Store Name"}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.storeName=" "+this.id.replace("_"," ")}}a.\u0275fac=function(t){return new(t||a)(o.Y36(r.gz))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-store-profile"]],decls:5,vars:1,consts:[[1,"content"],[1,"componentDescription"]],template:function(t,f){1&t&&(o.TgZ(0,"div",0)(1,"p",1),o._uU(2,"store-profile-component works!"),o.qZA(),o.TgZ(3,"h3"),o._uU(4),o.qZA()()),2&t&&(o.xp6(4),o.Oqu(f.storeName))},styles:[".content[_ngcontent-%COMP%]{position:relative;display:block;padding:10px}h3[_ngcontent-%COMP%]{display:flex;justify-content:center;color:#110f0f;font-size:20px}"]});class l{constructor(){}ngOnInit(){}}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-store-profile-page"]],decls:8,vars:0,consts:[[1,"page"],[1,"componentDescription"],[1,"content"],[1,"content2"]],template:function(t,f){1&t&&(o.TgZ(0,"div",0)(1,"p",1),o._uU(2,"store-page works!"),o.qZA(),o._UZ(3,"app-store-navbar"),o.TgZ(4,"div",2),o._UZ(5,"app-store-profile"),o.TgZ(6,"div",3),o._UZ(7,"router-outlet"),o.qZA()()())},dependencies:[r.lC,m.R,a],styles:[".page[_ngcontent-%COMP%]{background-color:#f3aa21;padding:10px;margin:10px auto}.content[_ngcontent-%COMP%]{display:flex;justify-content:center;width:98%}app-store-profile[_ngcontent-%COMP%]{position:relative;display:block;border-radius:10px;width:30%;margin:1%;background-color:#f5f8f4}.content2[_ngcontent-%COMP%]{position:relative;display:block;width:70%;border-radius:10px;background-color:#40fabc}"]});const g=[{path:"",component:l,children:[{path:"",redirectTo:"products",pathMatch:"full"},{path:"products",loadChildren:()=>e.e(971).then(e.bind(e,4971)).then(n=>n.StoreProductsComponentModule)},{path:"contacts",loadChildren:()=>e.e(458).then(e.bind(e,458)).then(n=>n.StoreContactsModule)}]}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[r.Bz.forChild(g),r.Bz]});const h=[{path:"",component:a}];class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[r.Bz.forChild(h),r.Bz]});class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[u.ez,s]});var C=e(890);class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[u.ez,c,C.x,i]})}}]);