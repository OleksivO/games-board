(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"Tx//":function(e,t,n){"use strict";n.r(t),n.d(t,"LayoutModule",(function(){return z}));var a=n("tyNb"),i=n("fXoL"),r=n("2Vo4"),o=n("itXk"),c=n("LRne"),s=n("HDdC"),l=n("quSY");class g extends l.a{constructor(e,t){super()}schedule(e,t=0){return this}}class d extends g{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,a=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(a,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(a,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,a=void 0;try{this.work(e)}catch(i){n=!0,a=!!i&&i||new Error(i)}if(n)return this.unsubscribe(),a}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,a=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==a&&n.splice(a,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}let u=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class b extends u{constructor(e,t=u.now){super(e,()=>b.delegate&&b.delegate!==this?b.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return b.delegate&&b.delegate!==this?b.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}const h=new b(d);var p=n("DH7j");function m(e){const{subscriber:t,counter:n,period:a}=e;t.next(n),this.schedule({subscriber:t,counter:n+1,period:a},a)}var f=n("pLZG"),_=n("lJxs"),y=n("JIr8"),x=n("JX91"),w=n("eIep");const C=(e,t)=>{const n=e.includes("new"),a=e.includes("top");return"top"===t&&n?"New":"new"===t&&a?"Top":"top"!==t&&"new"!==t?a?"top":n?"new":"":""};var v=n("tk/3");let O=(()=>{class e{constructor(e){this.httpClient=e,this.selectedCategory$=new r.a("new")}getFullGamesInfo(){return Object(o.a)(this.fetchGames(),this.fetchJackpots(),this.selectedCategory$).pipe(Object(f.a)(([e,t,n])=>!!e&&!!t),Object(_.a)(([e,t,n])=>this.getFilteredGames(e.map(e=>((e,t,n)=>{const a=t.find(t=>t.game===e.id);return Object.assign(Object.assign({},e),{image:e.image.replace("//","https://"),jackpot:a?a.amount:null,highlightedCategory:C(e.categories,n).toUpperCase()})})(e,t,n)),n)))}getSelectedCategory(){return this.selectedCategory$.asObservable()}setSelectedCategory(e){this.selectedCategory$.next(e)}getFilteredGames(e,t){switch(t){case"other":return e.filter(e=>e.categories.includes("ball")||e.categories.includes("virtual")||e.categories.includes("fun"));case"jackpots":return e.filter(e=>!!e.jackpot);default:return e.filter(e=>e.categories.includes(t))}}fetchGames(){return this.httpClient.get("https://stage.whgstage.com/front-end-test/games.php").pipe(Object(y.a)(e=>(console.error("Problem with fetching games",e),Object(c.a)([]))))}fetchJackpots(){return function(e=0,t=h){var n;return n=e,(Object(p.a)(n)||!(n-parseFloat(n)+1>=0)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=h),new s.a(n=>(n.add(t.schedule(m,e,{subscriber:n,counter:0,period:e})),n))}(5e3).pipe(Object(x.a)(0),Object(w.a)(()=>this.httpClient.get("https://stage.whgstage.com/front-end-test/jackpots.php")),Object(y.a)(e=>(console.error("Problem with fetching jackpots",e),Object(c.a)([]))))}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(v.a))},e.\u0275prov=i.Ab({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=n("ofXK");function P(e,t){if(1&e){const e=i.Ib();i.Hb(0,"a",2),i.Nb("click",(function(){i.Vb(e);const n=t.$implicit;return i.Pb().onCategorySelect(n.value)})),i.ac(1),i.Gb()}if(2&e){const e=t.$implicit,n=i.Pb();i.wb("active",n.selectedCategory===e.value),i.Tb("title",e.title),i.ub(1),i.bc(e.title)}}let M=(()=>{class e{constructor(){this.categories=[{title:"New Games",value:"new"},{title:"Top Games",value:"top"},{title:"Slots",value:"slots"},{title:"Jackpots",value:"jackpots"},{title:"Live",value:"live"},{title:"Blackjack",value:"blackjack"},{title:"Roulette",value:"roulette"},{title:"Table",value:"table"},{title:"Poker",value:"poker"},{title:"Other",value:"other"}],this.selectCategory=new i.n}onCategorySelect(e){this.selectCategory.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.yb({type:e,selectors:[["gb-games-categories"]],inputs:{selectedCategory:"selectedCategory"},outputs:{selectCategory:"selectCategory"},decls:2,vars:1,consts:[[1,"categories-container"],["class","categories-container__item",3,"title","active","click",4,"ngFor","ngForOf"],[1,"categories-container__item",3,"title","click"]],template:function(e,t){1&e&&(i.Hb(0,"nav",0),i.Zb(1,P,2,4,"a",1),i.Gb()),2&e&&(i.ub(1),i.Tb("ngForOf",t.categories))},directives:[k.j],styles:[".categories-container[_ngcontent-%COMP%]{background:#373737;display:flex;width:100%;justify-content:space-between;flex-wrap:wrap}.categories-container__item[_ngcontent-%COMP%]{width:10%;cursor:pointer;color:#fff;text-align:center;padding:15px 0;font-size:20px;text-decoration:none}.categories-container__item.active[_ngcontent-%COMP%]{background:#8dc63f}@media only screen and (max-width:1200px){.categories-container__item[_ngcontent-%COMP%]{width:20%}}@media only screen and (max-width:600px){.categories-container__item[_ngcontent-%COMP%]{width:50%}}@media only screen and (max-width:300px){.categories-container__item[_ngcontent-%COMP%]{width:100%}}"]}),e})();function j(e,t){if(1&e&&(i.Hb(0,"div",7),i.Hb(1,"div",8),i.Hb(2,"div",9),i.ac(3),i.Gb(),i.Gb(),i.Gb()),2&e){const e=i.Pb();i.ub(3),i.cc(" ",e.game.highlightedCategory," ")}}function G(e,t){if(1&e&&(i.Hb(0,"div",10),i.ac(1),i.Qb(2,"currency"),i.Gb()),2&e){const e=i.Pb();i.ub(1),i.cc(" ",i.Sb(2,1,e.game.jackpot,"GBP")," ")}}let I=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.yb({type:e,selectors:[["gb-game-card"]],inputs:{game:"game"},decls:8,vars:6,consts:[[1,"game-card"],["class","game-card__ribbon",4,"ngIf"],[1,"game-card__container"],["class","game-card__container--jackpot",4,"ngIf"],[1,"game-card__container--play"],["src","./assets/icons/play-button.svg",3,"alt"],[1,"game-title"],[1,"game-card__ribbon"],[1,"game-card__ribbon--text-container"],[1,"text-label"],[1,"game-card__container--jackpot"]],template:function(e,t){1&e&&(i.Hb(0,"div",0),i.Zb(1,j,4,1,"div",1),i.Hb(2,"div",2),i.Zb(3,G,3,4,"div",3),i.Hb(4,"div",4),i.Fb(5,"img",5),i.Hb(6,"div",6),i.ac(7),i.Gb(),i.Gb(),i.Gb(),i.Gb()),2&e&&(i.ub(1),i.Tb("ngIf",t.game.highlightedCategory),i.ub(1),i.Yb("background-image","url("+t.game.image+")"),i.ub(1),i.Tb("ngIf",t.game.jackpot),i.ub(2),i.Tb("alt",t.game.name),i.ub(2),i.bc(t.game.name))},directives:[k.k],pipes:[k.d],styles:['.game-card[_ngcontent-%COMP%]{position:relative;padding:10px}.game-card__container[_ngcontent-%COMP%]{cursor:pointer;background-color:#e9e9e9;border-radius:5px;padding-top:56.25%;background-size:cover;position:relative}.game-card__container--jackpot[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.3);color:#fff;z-index:2;display:flex;padding:5px 0;border-top-left-radius:5px;border-top-right-radius:5px;font-weight:700;font-size:16px}.game-card__container--jackpot[_ngcontent-%COMP%], .game-card__container--play[_ngcontent-%COMP%]{width:100%;top:0;position:absolute;justify-content:center;align-items:center}.game-card__container--play[_ngcontent-%COMP%]{display:none;flex-direction:column;height:100%;border-radius:5px;z-index:1;text-align:center;background-color:rgba(0,0,0,.6)}.game-card__container--play[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]{color:#fff;font-weight:700;position:absolute;bottom:10px;font-size:20px}.game-card__container--play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px}.game-card__container--play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.game-card__container[_ngcontent-%COMP%]:hover   .game-card__container--play[_ngcontent-%COMP%]{display:flex}.game-card__ribbon[_ngcontent-%COMP%]{background:transparent;width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.game-card__ribbon[_ngcontent-%COMP%]:before{content:"";display:block;border-radius:10px 10px 0 0;width:17%;height:10px;position:absolute;right:24%;background:#008a3b;background:linear-gradient(90deg,#8dc63f 1%,#0f330a 45%)}.game-card__ribbon[_ngcontent-%COMP%]:after{content:"";display:block;border-radius:0 10px 10px 0;width:10px;height:30%;position:absolute;right:0;top:40%;background:#0f330a;background:linear-gradient(180deg,#0f330a 55%,#8dc63f 99%)}.game-card__ribbon--text-container[_ngcontent-%COMP%]{cursor:pointer;width:55%;height:20%;position:relative;top:15%;right:-58%;z-index:3;overflow:hidden;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);background:#8dc63f;background:linear-gradient(90deg,#00722d 0,#8dc63f 51%,#00561c)}.game-card__ribbon--text-container[_ngcontent-%COMP%]:before{height:72px;top:-13px;left:27px;-webkit-transform:rotate(45deg)}.game-card__ribbon--text-container[_ngcontent-%COMP%]:after, .game-card__ribbon--text-container[_ngcontent-%COMP%]:before{content:"";display:block;width:13px;position:relative;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);background:linear-gradient(90deg,hsla(0,0%,100%,0) 1%,hsla(0,0%,100%,.6) 50%,hsla(0,0%,100%,0))}.game-card__ribbon--text-container[_ngcontent-%COMP%]:after{height:200%;bottom:90px;left:82%;-webkit-transform:rotate(-45deg)}.game-card__ribbon--text-container[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{font-size:20px;position:absolute;z-index:3;color:#fff;height:30px;right:37%;top:21%;font-weight:700}@media only screen and (max-width:750px){.game-card__ribbon--text-container[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{right:40%}}@media only screen and (max-width:600px){.game-card__ribbon--text-container[_ngcontent-%COMP%]:after{bottom:94px}.game-card__ribbon--text-container[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%]{right:44%;top:32%}}']}),e})();function S(e,t){1&e&&i.Fb(0,"gb-game-card",2),2&e&&i.Tb("game",t.$implicit)}let F=(()=>{class e{constructor(){this.games=[]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.yb({type:e,selectors:[["gb-games-list"]],inputs:{games:"games"},decls:2,vars:1,consts:[[1,"games-list-container"],["class","games-list-container__item",3,"game",4,"ngFor","ngForOf"],[1,"games-list-container__item",3,"game"]],template:function(e,t){1&e&&(i.Hb(0,"section",0),i.Zb(1,S,1,1,"gb-game-card",1),i.Gb()),2&e&&(i.ub(1),i.Tb("ngForOf",t.games))},directives:[k.j,I],styles:[".games-list-container[_ngcontent-%COMP%]{padding:2rem 5rem;display:flex;justify-content:left;flex-wrap:wrap}.games-list-container__item[_ngcontent-%COMP%]{width:20%}@media only screen and (max-width:1200px){.games-list-container[_ngcontent-%COMP%]{padding:2rem 1rem}.games-list-container__item[_ngcontent-%COMP%]{width:33.3%}}@media only screen and (max-width:750px){.games-list-container__item[_ngcontent-%COMP%]{width:50%}}@media only screen and (max-width:600px){.games-list-container__item[_ngcontent-%COMP%]{width:100%}}"]}),e})();const H=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e){this.gamesService=e,this.selectedCategory$=this.gamesService.getSelectedCategory(),this.games$=this.gamesService.getFullGamesInfo()}onCategorySelect(e){this.gamesService.setSelectedCategory(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Eb(O))},e.\u0275cmp=i.yb({type:e,selectors:[["gb-games-overview"]],decls:4,vars:6,consts:[[3,"selectedCategory","selectCategory"],[3,"games"]],template:function(e,t){1&e&&(i.Hb(0,"gb-games-categories",0),i.Nb("selectCategory",(function(e){return t.onCategorySelect(e)})),i.Qb(1,"async"),i.Gb(),i.Fb(2,"gb-games-list",1),i.Qb(3,"async")),2&e&&(i.Tb("selectedCategory",i.Rb(1,2,t.selectedCategory$)),i.ub(2),i.Tb("games",i.Rb(3,4,t.games$)))},directives:[M,F],pipes:[k.b],styles:[""]}),e})()}]}];let T=(()=>{class e{}return e.\u0275mod=i.Cb({type:e}),e.\u0275inj=i.Bb({factory:function(t){return new(t||e)},imports:[[a.a.forChild(H)],a.a]}),e})(),z=(()=>{class e{}return e.\u0275mod=i.Cb({type:e}),e.\u0275inj=i.Bb({factory:function(t){return new(t||e)},imports:[[k.c,T]]}),e})()}}]);