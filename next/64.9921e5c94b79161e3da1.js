(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{DRQ8:function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=function(){return function(){}}(),a=e("pMnS"),r=e("KM9H"),c=e("vuB0"),i=e("4vXS"),o=e("7uv5"),b=e("MGne"),s=e("NfCQ"),f=e("kztb"),p=e("V+dw"),d=e("8bEz"),h=e("k6ER"),w=e("4Ssn"),g=e("S+eJ"),F=e("Ip0R"),v=e("jvbL"),k=function(){function n(n){var l=this;this.authService=n,this.alive=!0,this.authService.onTokenChange().pipe(Object(v.a)(function(){return l.alive})).subscribe(function(n){l.token=null,n&&n.isValid()&&(l.token=n)})}return n.prototype.login=function(){var n=this;this.authService.authenticate("azure").pipe(Object(v.a)(function(){return n.alive})).subscribe(function(n){})},n.prototype.logout=function(){var n=this;this.authService.logout("azure").pipe(Object(v.a)(function(){return n.alive})).subscribe(function(n){})},n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),y=e("BDhN"),m=u.vb({encapsulation:2,styles:[],data:{}});function H(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"button",[["nbButton",""],["status","success"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.login()&&u),u},null,null)),(n()(),u.Pb(-1,null,["Sign In with Azure"]))],null,null)}function z(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"button",[["nbButton",""],["status","warning"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.logout()&&u),u},null,null)),(n()(),u.Pb(-1,null,["Sign Out"]))],null,null)}function O(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,16,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null],[2,"overlay-scroll-block",null]],[["window","scroll"],["window","resize"]],function(n,l,e){var t=!0;return"window:scroll"===l&&(t=!1!==u.Hb(n,1).onScroll(e)&&t),"window:resize"===l&&(t=!1!==u.Hb(n,1).onResize(e)&&t),t},r.f,r.b)),u.wb(1,4374528,null,0,c.b,[i.a,o.a,u.k,u.G,b.f,b.b,u.D,s.c,f.a,p.a,d.a,h.a],null,null),(n()(),u.xb(2,0,null,3,14,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,r.e,r.a)),u.wb(3,49152,null,0,c.a,[],null,null),(n()(),u.xb(4,0,null,0,12,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,w.f,w.b)),u.wb(5,49152,null,0,g.b,[],null,null),(n()(),u.xb(6,0,null,1,10,"nb-card-body",[],null,null,null,w.e,w.a)),u.wb(7,49152,null,0,g.a,[],null,null),(n()(),u.xb(8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u.Pb(9,null,["Current User Authenticated: ",""])),(n()(),u.xb(10,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Pb(11,null,["Current User Token: ",""])),u.Jb(0,F.h,[]),(n()(),u.mb(16777216,null,0,1,null,H)),u.wb(14,16384,null,0,F.n,[u.T,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.mb(16777216,null,0,1,null,z)),u.wb(16,16384,null,0,F.n,[u.T,u.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,14,0,!e.token),n(l,16,0,e.token)},function(n,l){var e=l.component;n(l,0,0,u.Hb(l,1).windowModeValue,u.Hb(l,1).withScrollValue,u.Hb(l,1).withSubheader,u.Hb(l,1).overlayScrollBlock),n(l,2,0,u.Hb(l,3).leftValue,u.Hb(l,3).startValue),n(l,4,1,[u.Hb(l,5).tiny,u.Hb(l,5).small,u.Hb(l,5).medium,u.Hb(l,5).large,u.Hb(l,5).giant,u.Hb(l,5).primary,u.Hb(l,5).info,u.Hb(l,5).success,u.Hb(l,5).warning,u.Hb(l,5).danger,u.Hb(l,5).hasAccent,u.Hb(l,5).primaryAccent,u.Hb(l,5).infoAccent,u.Hb(l,5).successAccent,u.Hb(l,5).warningAccent,u.Hb(l,5).dangerAccent]),n(l,9,0,!!e.token),n(l,11,0,u.Qb(l,11,0,u.Hb(l,12).transform(e.token)))})}function S(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-playground-azure",[],null,null,null,O,m)),u.wb(1,180224,null,0,k,[y.a],null,null)],null,null)}var j=u.tb("nb-playground-azure",k,S,{},{},[]),R=function(){function n(n,l){var e=this;this.authService=n,this.router=l,this.alive=!0,this.authService.authenticate("azure").pipe(Object(v.a)(function(){return e.alive})).subscribe(function(n){n.isSuccess()&&n.getRedirect()&&e.router.navigateByUrl(n.getRedirect())})}return n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),A=e("ZYCi"),V=u.vb({encapsulation:2,styles:[],data:{}});function x(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null],[2,"overlay-scroll-block",null]],[["window","scroll"],["window","resize"]],function(n,l,e){var t=!0;return"window:scroll"===l&&(t=!1!==u.Hb(n,1).onScroll(e)&&t),"window:resize"===l&&(t=!1!==u.Hb(n,1).onResize(e)&&t),t},r.f,r.b)),u.wb(1,4374528,null,0,c.b,[i.a,o.a,u.k,u.G,b.f,b.b,u.D,s.c,f.a,p.a,d.a,h.a],null,null),(n()(),u.xb(2,0,null,3,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,r.e,r.a)),u.wb(3,49152,null,0,c.a,[],null,null),(n()(),u.Pb(-1,0,["Authenticating..."]))],null,function(n,l){n(l,0,0,u.Hb(l,1).windowModeValue,u.Hb(l,1).withScrollValue,u.Hb(l,1).withSubheader,u.Hb(l,1).overlayScrollBlock),n(l,2,0,u.Hb(l,3).leftValue,u.Hb(l,3).startValue)})}function E(n){return u.Rb(0,[(n()(),u.xb(0,0,null,null,1,"nb-playground-azure-callback",[],null,null,null,x,V)),u.wb(1,180224,null,0,R,[y.a,A.l],null,null)],null,null)}var P=u.tb("nb-playground-azure-callback",R,E,{},{},[]),I=e("gIcY"),D=e("t/Na"),T=e("0ICW"),B=e("Abgx"),C=e("znn7"),N=e("Y4k2"),J=e("Bc6B"),M=e("6y2k"),_=e("++eV"),q=e("X/Iy"),Q=e("mrSG"),X=e("F/XL"),G=e("15JJ"),Y=e("67Y/"),K=e("9Z1F"),U=e("4pP6"),Z=e("89WS"),L=e("V1Ee"),W=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return Object(Q.c)(l,n),l.prototype.getValue=function(){return this.token.id_token},l.NAME="nb:auth:azure:token",l}(U.c),$=function(n){function l(){var l,e,u=null!==n&&n.apply(this,arguments)||this;return u.redirectResultHandlers=((l={})[Z.c.CODE]=function(){return Object(X.a)(u.route.snapshot.queryParams).pipe(Object(G.a)(function(n){return n.code?u.requestToken(n.code):Object(X.a)(new L.a(!1,n,u.getOption("redirect.failure"),u.getOption("defaultErrors"),[]))}))},l.id_token=function(){var n=u.getOption("authorize.requireValidToken");return Object(X.a)(u.route.snapshot.fragment).pipe(Object(Y.a)(function(n){return u.parseHashAsQueryParams(n)}),Object(Y.a)(function(l){return l.error?new L.a(!1,l,u.getOption("redirect.failure"),u.getOption("defaultErrors"),[]):new L.a(!0,l,u.getOption("redirect.success"),[],u.getOption("defaultMessages"),u.createToken(l,n))}),Object(K.a)(function(n){var l=[];return l.push(n instanceof U.a?n.message:"Something went wrong."),Object(X.a)(new L.a(!1,n,u.getOption("redirect.failure"),l))}))},l),u.redirectResults=((e={})[Z.c.CODE]=function(){return Object(X.a)(null)},e.id_token=function(){return Object(X.a)(u.route.snapshot.fragment).pipe(Object(Y.a)(function(n){return u.parseHashAsQueryParams(n)}),Object(Y.a)(function(n){return!(!n||!n.id_token&&!n.error)}))},e),u}return Object(Q.c)(l,n),l.setup=function(n){return[l,n]},l}(q.a),nn=e("i6JN"),ln=e("F4EV"),en=e("IVq4"),un=e("NFr4"),tn=e("0AKQ"),an=e("DJEY"),rn=e("+q8+"),cn=e("+Zd3"),on=e("4aFR"),bn=function(){return function(){}}();e.d(l,"AzurePlaygroundModuleNgFactory",function(){return sn});var sn=u.ub(t,[],function(n){return u.Eb([u.Fb(512,u.j,u.gb,[[8,[a.a,j,P]],[3,u.j],u.z]),u.Fb(4608,F.p,F.o,[u.w,[2,F.H]]),u.Fb(4608,I.z,I.z,[]),u.Fb(4608,D.k,D.q,[F.d,u.D,D.o]),u.Fb(4608,D.r,D.r,[D.k,D.p]),u.Fb(5120,D.a,function(n){return[n]},[D.r]),u.Fb(4608,D.n,D.n,[]),u.Fb(6144,D.l,null,[D.n]),u.Fb(4608,D.j,D.j,[D.l]),u.Fb(6144,D.b,null,[D.j]),u.Fb(4608,D.g,D.m,[D.b,u.s]),u.Fb(4608,D.c,D.c,[D.g]),u.Fb(4608,d.a,d.a,[A.l]),u.Fb(5120,T.b,B.c,[T.f]),u.Fb(5120,T.c,B.d,[T.b,u.s]),u.Fb(5120,T.d,B.e,[T.c]),u.Fb(4608,C.b,C.b,[C.a,T.d]),u.Fb(4608,N.b,N.a,[C.b]),u.Fb(4608,J.a,J.a,[N.b]),u.Fb(4608,y.a,y.a,[J.a,T.c]),u.Fb(4608,M.a,M.a,[]),u.Fb(4608,_.a,_.a,[D.c,A.a]),u.Fb(4608,q.a,q.a,[D.c,A.a,b.f]),u.Fb(4608,$,$,[D.c,A.a,b.f]),u.Fb(1073742336,F.c,F.c,[]),u.Fb(1073742336,I.y,I.y,[]),u.Fb(1073742336,I.i,I.i,[]),u.Fb(1073742336,D.e,D.e,[]),u.Fb(1073742336,D.d,D.d,[]),u.Fb(1073742336,A.p,A.p,[[2,A.u],[2,A.l]]),u.Fb(1073742336,nn.a,nn.a,[]),u.Fb(1073742336,ln.a,ln.a,[]),u.Fb(1073742336,en.a,en.a,[un.a]),u.Fb(1073742336,tn.a,tn.a,[]),u.Fb(1073742336,an.a,an.a,[]),u.Fb(1073742336,rn.a,rn.a,[]),u.Fb(1073742336,cn.a,cn.a,[]),u.Fb(1073742336,on.a,on.a,[]),u.Fb(1073742336,B.a,B.a,[]),u.Fb(1073742336,bn,bn,[]),u.Fb(1073742336,t,t,[]),u.Fb(256,D.o,"XSRF-TOKEN",[]),u.Fb(256,D.p,"X-XSRF-TOKEN",[]),u.Fb(1024,A.j,function(){return[[{path:"",component:k},{path:"callback",component:R}]]},[]),u.Fb(256,T.f,{strategies:[[$,{name:"azure",clientId:"bde728e2-2809-4ff1-bc9c-7fcb23800ebe",clientSecret:"",authorize:{endpoint:"https://login.microsoftonline.com/01513fd2-16a0-453b-9fa0-c9089bfa023e/oauth2/authorize",responseType:"id_token",scope:"openid",redirectUri:"https://akveo.github.io/nebular/example/azure/callback",params:{p:"b2c_1_nebular"}},token:{class:W},redirect:{success:"/example/azure"}}]]},[]),u.Fb(256,C.a,U.e,[]),u.Fb(256,T.a,"Authorization",[]),u.Fb(256,T.e,B.b,[])])})}}]);