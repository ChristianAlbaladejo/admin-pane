(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PTPi:function(t,e,n){"use strict";n.r(e);var o=n("tyNb"),i=n("ofXK"),b=n("3Pt+");class r{constructor(t,e,n,o,i,b,r,s,c){this.name=t,this.lastname=e,this.password=n,this.CIF=o,this.calle=i,this.CP=b,this.poblacion=r,this.email=s,this.telefono=c}}var s=n("qfBg"),c=n("fXoL");const a=function(){return["/dashboard"]},d=function(){return{standalone:!0}},l=[{path:"login",component:(()=>{class t{constructor(t,e){this._router=t,this._userService=e,this.user=new r("","","","","","","","","")}ngOnInit(){}ngOnDestroy(){}login(){this._userService.login(this.user).subscribe(t=>{this.identity=t.user,this.token=t.token,localStorage.setItem("identity",JSON.stringify(this.identity)),localStorage.setItem("token",this.token),this._router.navigate(["/dashboard"])},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(o.a),c.Mb(s.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-login"]],features:[c.yb([s.a])],decls:35,vars:8,consts:[[1,"header","bg-gradient-success","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-body","px-lg-5","py-lg-5"],["role","form"],[1,"form-group","mb-3"],[1,"container","px-4",2,"text-align","center"],["routerLinkActive","active",3,"routerLink"],["src","assets/img/brand/logo.png"],[1,"col"],[2,"text-align","center"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["id","email","placeholder","Email","type","email",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"text-center"],["type","button",1,"btn","btn-success","my-4",3,"click"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Nb(3,"div",3),c.Qb(),c.Qb(),c.Rb(4,"div",4),c.gc(),c.Rb(5,"svg",5),c.Nb(6,"polygon",6),c.Qb(),c.Qb(),c.Qb(),c.fc(),c.Rb(7,"div",7),c.Rb(8,"div",3),c.Rb(9,"div",8),c.Rb(10,"div",9),c.Rb(11,"div",10),c.Rb(12,"form",11),c.Rb(13,"div",12),c.Rb(14,"div",13),c.Rb(15,"a",14),c.Nb(16,"img",15),c.Qb(),c.Qb(),c.Rb(17,"div",16),c.Rb(18,"div",17),c.Rb(19,"h2"),c.Ec(20,"Consultas Externas VPBX"),c.Qb(),c.Qb(),c.Qb(),c.Rb(21,"div",18),c.Rb(22,"div",19),c.Rb(23,"span",20),c.Nb(24,"i",21),c.Qb(),c.Qb(),c.Rb(25,"input",22),c.dc("ngModelChange",(function(t){return e.user.email=t})),c.Qb(),c.Qb(),c.Qb(),c.Rb(26,"div",23),c.Rb(27,"div",18),c.Rb(28,"div",19),c.Rb(29,"span",20),c.Nb(30,"i",24),c.Qb(),c.Qb(),c.Rb(31,"input",25),c.dc("ngModelChange",(function(t){return e.user.password=t})),c.Qb(),c.Qb(),c.Qb(),c.Rb(32,"div",26),c.Rb(33,"button",27),c.dc("click",(function(){return e.login()})),c.Ec(34,"Sign in"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.zb(15),c.nc("routerLink",c.qc(5,a)),c.zb(10),c.nc("ngModel",e.user.email)("ngModelOptions",c.qc(6,d)),c.zb(6),c.nc("ngModel",e.user.password)("ngModelOptions",c.qc(7,d)))},directives:[b.m,b.f,b.g,o.c,o.b,b.a,b.e,b.h],styles:["img[_ngcontent-%COMP%]{width:18rem;margin-bottom:2rem}"]}),t})()},{path:"register",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"div",3),c.Rb(4,"div",4),c.Rb(5,"h1",5),c.Ec(6,"Welcome!"),c.Qb(),c.Rb(7,"p",6),c.Ec(8,"Use these awesome forms to login or create new account in your project for free."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"div",7),c.gc(),c.Rb(10,"svg",8),c.Nb(11,"polygon",9),c.Qb(),c.Qb(),c.Qb(),c.fc(),c.Rb(12,"div",10),c.Rb(13,"div",3),c.Rb(14,"div",11),c.Rb(15,"div",12),c.Rb(16,"div",13),c.Rb(17,"div",14),c.Rb(18,"small"),c.Ec(19,"Sign up with"),c.Qb(),c.Qb(),c.Rb(20,"div",15),c.Rb(21,"a",16),c.Rb(22,"span",17),c.Nb(23,"img",18),c.Qb(),c.Rb(24,"span",19),c.Ec(25,"Github"),c.Qb(),c.Qb(),c.Rb(26,"a",20),c.Rb(27,"span",17),c.Nb(28,"img",21),c.Qb(),c.Rb(29,"span",19),c.Ec(30,"Google"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(31,"div",22),c.Rb(32,"div",23),c.Rb(33,"small"),c.Ec(34,"Or sign up with credentials"),c.Qb(),c.Qb(),c.Rb(35,"form",24),c.Rb(36,"div",25),c.Rb(37,"div",26),c.Rb(38,"div",27),c.Rb(39,"span",28),c.Nb(40,"i",29),c.Qb(),c.Qb(),c.Nb(41,"input",30),c.Qb(),c.Qb(),c.Rb(42,"div",25),c.Rb(43,"div",26),c.Rb(44,"div",27),c.Rb(45,"span",28),c.Nb(46,"i",31),c.Qb(),c.Qb(),c.Nb(47,"input",32),c.Qb(),c.Qb(),c.Rb(48,"div",25),c.Rb(49,"div",33),c.Rb(50,"div",27),c.Rb(51,"span",28),c.Nb(52,"i",34),c.Qb(),c.Qb(),c.Nb(53,"input",35),c.Qb(),c.Qb(),c.Rb(54,"div",36),c.Rb(55,"small"),c.Ec(56,"password strength: "),c.Rb(57,"span",37),c.Ec(58,"strong"),c.Qb(),c.Qb(),c.Qb(),c.Rb(59,"div",38),c.Rb(60,"div",39),c.Rb(61,"div",40),c.Nb(62,"input",41),c.Rb(63,"label",42),c.Rb(64,"span",43),c.Ec(65,"I agree with the "),c.Rb(66,"a",44),c.Ec(67,"Privacy Policy"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(68,"div",15),c.Rb(69,"button",45),c.Ec(70,"Create account"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb())},directives:[b.m,b.f,b.g],styles:[""]}),t})()}];n.d(e,"AuthLayoutModule",(function(){return p}));let p=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[i.b,o.d.forChild(l),b.b]]}),t})()}}]);