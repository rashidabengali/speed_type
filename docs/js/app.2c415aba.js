(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)i=o[l],a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bc55b9f2"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,r[1](i)}a[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"092c":function(e,t,r){"use strict";var n=r("1aa0"),a=r.n(n);a.a},"1aa0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("00e4"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[e.currentUser?[r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |")],1),r("li",[r("router-link",{attrs:{to:{path:"game"}}},[e._v("Play Game")]),e._v(" |")],1),r("li",[r("span",[e._v(" Welcome "+e._s(e.currentUser.displayName)+" ")]),r("a",{attrs:{href:"#"},on:{click:e.signOut}},[e._v("Sign Out")]),e._v(" |")])])]:e._e()],2),r("router-view")],1)},i=[],o=(r("96cf"),r("3b8d")),c=(r("6762"),r("2fdb"),r("ac6a"),r("20d6"),r("2f62"));n["default"].use(c["a"]);var u=new c["a"].Store({state:{currentUser:null},mutations:{setCurrentUser:function(e,t){e.currentUser=t}},actions:{}}),l=r("8aa5"),p=r.n(l),d=(r("e89a"),{apiKey:"AIzaSyDr32zYXkyHwdWDnMentnq2fmd9ZZghM_c",authDomain:"speedtype-e51a8.firebaseapp.com",databaseURL:"https://speedtype-e51a8.firebaseio.com",projectId:"speedtype-e51a8",storageBucket:"speedtype-e51a8.appspot.com",messagingSenderId:"771149971829",appId:"1:771149971829:web:acb3739a88d46dc5"}),h=p.a.initializeApp(d),m=h.firestore();h.signUp=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r,n,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.auth().createUserWithEmailAndPassword(t,r).then(function(){return console.log("IMAGE",a),p.a.auth().currentUser.updateProfile({displayName:n,photoURL:a}).catch(function(e){return e}).catch(function(e){return e})});case 3:return u.commit("setCurrentUser",p.a.auth().currentUser),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r,n,a){return e.apply(this,arguments)}}(),h.signIn=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.auth().signInWithEmailAndPassword(t,r);case 3:return u.commit("setCurrentUser",p.a.auth().currentUser),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r){return e.apply(this,arguments)}}(),h.signOut=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.auth().signOut();case 3:return u.commit("setCurrentUser",null),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),h.addScore=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.collection("scores").add({playerName:t,score:n,userId:r}).then(function(){if(s){var e=m.collection("races").doc(s).get(),t=[];t=e.data().players;var i=t.findIndex(function(e){return e.id===r});t[i].score=n,t[i].percentage=a,m.collection("races").doc(s).update({players:t})}});case 3:e.sent,e.next=9;break;case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,r,n,a,s){return e.apply(this,arguments)}}(),h.getScores=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,m.collection("scores").get();case 4:return r=e.sent,r.docs.forEach(function(e){t.push(e.data())}),e.abrupt("return",t);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),h.createRace=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r,n,a){var s,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s={name:a,id:r,score:0},i=[],i.push(s),e.next=6,m.collection("races").add({token:t,players:i,phrase:n});case 6:return o=e.sent,c=o.id,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,r,n,a){return e.apply(this,arguments)}}(),h.joinRace=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=null,e.next=4,m.collection("races").get();case 4:return s=e.sent,s.docs.forEach(function(e){if(e.data().token===t){var s=e.data().players;if(!s.includes(r)){var i={name:n,id:r,score:null};s.push(i),m.collection("races").doc(e.id).update({players:s})}a=e.id}}),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e["catch"](0),console.log("ERROR in joinrace",e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,r,n){return e.apply(this,arguments)}}(),h.getRaceDetailsDoc=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.collection("races").doc(t);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),h.updatePlayerPercentage=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.collection("races").doc(t).get();case 2:a=e.sent,s=[],s=a.data().players,i=s.findIndex(function(e){return e.id===r}),s[i].percentage=n,m.collection("races").doc(t).update({players:s});case 8:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}();var f=h,g={computed:{currentUser:function(){return this.$store.state.currentUser}},methods:{signOut:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.signOut();case 2:this.$router.push("/");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){document.getElementsByTagName("body")[0].classList.add("container")}},v=g,b=(r("034f"),r("2877")),y=Object(b["a"])(v,s,i,!1,null,null,null),w=y.exports,_=r("2536"),x=r.n(_),k=r("8c4f"),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("SPEED TYPE")]),r("br"),r("img",{attrs:{src:"https://i.imgur.com/B5MIn6t.gif",alt:"gif"}}),r("div",{staticClass:"homeButtons"},[r("b-row",[r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("router-link",{attrs:{to:{path:"leaderboard"}}},[r("b-button",{staticClass:"animated infinite pulse delay-2s",attrs:{size:"lg",variant:"light"}},[e._v("Leader Board")])],1),r("br"),r("br"),r("p",[e._v("Make it to the top of the Leader Board.\n        "),r("br"),e._v("\n        Speed Up!\n        ")])],1),r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("router-link",{attrs:{to:{path:"signup"}}},[r("b-button",{staticClass:"animated infinite pulse delay-2s",attrs:{size:"lg",variant:"light"}},[e._v("Sign Up")])],1),r("br"),r("br"),r("p",[e._v("Already a Member? "),r("span",[r("router-link",{attrs:{to:{path:"signin"}}},[e._v("Sign In")])],1)])],1)],1)],1)])},P=[],R={name:"home",data:function(){return{}},methods:{}},U=R,T=(r("e66d"),Object(b["a"])(U,C,P,!1,null,"38953ee6",null)),E=T.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[r("h1",{attrs:{id:"v-step-0"}},[e._v("SPEED TYPE")]),r("h3",{ref:"heading",staticClass:"v-step-1",attrs:{id:"preventcopy"}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.test,expression:"test"}],staticClass:"inputText",attrs:{placeholder:"start typing",onpaste:"return false",disabled:e.isDisabled},domProps:{value:e.test},on:{keyup:e.timer,input:function(t){t.target.composing||(e.test=t.target.value)}}}),r("p",{staticClass:"message"},[e._v(e._s(e.message))]),r("p",{staticClass:"v-step-2"},[e._v("Timer (Seconds): "),r("span",{staticClass:"score"},[e._v(e._s(e.stopwatch))])]),r("p",{staticClass:"v-step-3"},[e._v("Speed (WPM): "),r("span",{staticClass:"score"},[e._v(e._s(e.speed))])]),r("b-button",{attrs:{"data-v-step":"6",variant:"success"},on:{click:e.restart}},[e._v("Restart")]),r("div",{staticClass:"gameButtons"},[r("b-row",[r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("router-link",{attrs:{to:{path:"leaderboard"}}},[r("b-button",{staticClass:"animated infinite pulse delay-2s, v-step-4",attrs:{variant:"primary"}},[e._v("Leader Board")])],1)],1),r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("router-link",{attrs:{to:{path:"race"}}},[r("b-button",{staticClass:"animated infinite pulse delay-2s, v-step-5",attrs:{variant:"primary"}},[e._v("Play with your Foes")])],1)],1)],1)],1),r("v-tour",{attrs:{name:"myTour",steps:e.steps}})],1)},I=[];r("c5f6"),r("7f7f");r("2440");var O=r("8887"),S=new O,$=r("871a"),N={name:"game",computed:{currentUser:function(){return this.$store.state.currentUser}},data:function(){return{steps:[{target:"#v-step-0",content:"Take a tour for <strong>Game Instructions</strong>!"},{target:".v-step-1",content:"Type this sentence accurately below"},{target:".v-step-2",content:"As soon as you start typing, the timer will begin"},{target:".v-step-3",content:"Your typing speed will be displayed here as you keep typing"},{target:".v-step-4",content:"The higher your speed, the higher you score<br>Speed up to make it to the top ranks of the <strong>Leader Board</strong>"},{target:".v-step-5",content:"Don't want to play alone?<br>No worries! Click here and create or join a race."},{target:'[data-v-step="6"]',content:"Play the Game, you'll love it!<br>Click the <strong>Restart</strong> button to score higher.",params:{placement:"top"}}],message:"",test:null,speed:0,isDisabled:!1,isPlaying:!1,t:null,uid:"",name:"",stopwatch:0}},methods:{addScore:function(){f.addScore(this.name,this.uid,Number(this.speed))},displayScore:function(){this.$refs.heading.innerText===this.test&&(S.stop(),this.stopwatch=this.getElapsedTime(),this.uid=this.currentUser.uid,this.name=this.currentUser.displayName,this.message="CORRECT!",this.speed=this.getWPM(),this.addScore(),clearInterval(this.t),clearInterval(this.p),this.isDisabled=!0)},getWPM:function(){return(this.test.length/5/(this.stopwatch/60)).toFixed()},timer:function(){var e=this;if(this.isPlaying)return this.$refs.heading.innerHTML=this.getPhraseHtml(),this.speed=this.getWPM(),void this.displayScore();this.isPlaying=!0,S.start(),this.t=setInterval(function(){e.stopwatch=e.getElapsedTime()},300)},getPhraseHtml:function(){var e=this.$refs.heading.innerText,t=this.test;if(!t)return e;for(var r="",n=0;n<t.length;n++){if(t[n]!==e[n])break;r+=e[n]}var a=e.substring(n),s="";return a&&(s="<span>".concat(a,"</span>")),'<span style="color: green">'.concat(r,"</span>").concat(s)},getElapsedTime:function(){var e=Number((S.time()/1e3).toFixed(1));return e||0},restart:function(){this.stopwatch=0,this.speed=null,this.message="",this.test="",this.isPlaying=!1,this.isDisabled=!1,this.t=null,this.p=null,this.$refs.heading.innerText=$.sentence(),S.reset()}},mounted:function(){this.$refs.heading.innerText=$.sentence(),this.$tours["myTour"].start()}},M=N,D=(r("c932"),Object(b["a"])(M,j,I,!1,null,"5ca0b5b8",null)),A=D.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-4 is-offset-4"},[r("h1",[e._v("Sign Up")]),r("form",{attrs:{enctype:"multipart/form-data"}},[r("div",{staticClass:"field"},[r("input",{ref:"name",staticClass:"input",attrs:{type:"name",placeholder:"Name"}})]),r("div",{staticClass:"field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]),r("div",{staticClass:"field"},[r("input",{ref:"imgupload",staticClass:"input",attrs:{type:"file",id:"fileInput",accept:"image/*"}}),r("button",{staticClass:"button is-primary",on:{click:e.uploadImg}},[e._v("Upload Image")])]),r("button",{staticClass:"button is-primary",on:{click:e.createAccount}},[e._v("Sign Up")])]),r("br"),e.error?r("div",{staticClass:"message is-danger"},[r("div",{staticClass:"message-body"},[e._v(e._s(e.error))])]):e._e()])])},H=[],W={name:"signup",data:function(){return{name:"",email:"",password:"",confirmPassword:"",image:"",error:"",uploadEnd:!1,uploadedImage:"",uploadTask:"",fileName:""}},methods:{uploadImg:function(){var e=this,t=p.a.storage(),r=t.ref(),n=document.getElementById("fileInput").files[0],a=r.child("images/".concat(n.name)).put(n);a.on("state_changed",function(e){},function(e){console.log("ERROR",e)},function(t){console.log("success"),a.snapshot.ref.getDownloadURL().then(function(t){console.log("File available at",t),console.log("CONSOLE THIS>IMAGE",e),e.image=t,console.log("CONSOLE THIS>IMAGE",e.image)})})},createAccount:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.name=this.$refs.name.value,console.log("THIS IMAGE IS",this.image),this.password!==this.confirmPassword&&""!==this.name){e.next=10;break}return console.log("THIS IMAGE",this.image),e.next=6,f.signUp(this.email,this.password,this.name,this.image);case 6:t=e.sent,t.message?this.error=t.message:this.$router.push("/profile"),e.next=11;break;case 10:this.error="Either Passwords do not match or name is blank";case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},B=W,G=Object(b["a"])(B,L,H,!1,null,null,null),Y=G.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"signin"},[r("b-card",{staticClass:"mt-3",attrs:{header:"SIGN IN"}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.signIn(t)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Password:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("b-button",{attrs:{type:"submit",variant:"dark"}},[e._v("Sign In")])],1)],1),r("br"),e.error?r("div",{staticClass:"message is-danger"},[r("div",{staticClass:"message-body"},[e._v(e._s(e.error))])]):e._e(),r("img",{attrs:{src:"https://i.imgur.com/C2cXrol.jpg",alt:"keyboard"}})],1)},z=[],q={name:"signin",data:function(){return{email:"",password:"",error:""}},computed:{currentUser:function(){return this.$store.state.currentUser}},methods:{signIn:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.signIn(this.email,this.password);case 2:t=e.sent,t.message?this.error=t.message:this.$router.push("/game");case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},J=q,X=(r("d76a"),Object(b["a"])(J,F,z,!1,null,"4143d74b",null)),K=X.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Profile")]),r("p",[e._v(e._s(e.currentUser.email))]),e.currentUser.displayName?[r("p",[e._v(e._s(e.currentUser.displayName))])]:[r("p",[e._v("New User")])],e.currentUser.photoURL?[r("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:e.currentUser.photoURL,alt:"avatar"}})]:[r("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:"https://i.imgur.com/i1QoHaK.png",alt:"avatar"}})]],2)},Q=[],V={name:"profile",computed:{currentUser:function(){return this.$store.state.currentUser}}},ee=V,te=Object(b["a"])(ee,Z,Q,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"race"},[r("h1",[e._v("PLAY WITH YOUR FOES")]),r("b-row",[r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.createToken,expression:"createToken"}],attrs:{type:"text"},domProps:{value:e.createToken},on:{input:function(t){t.target.composing||(e.createToken=t.target.value)}}}),r("b-button",{attrs:{variant:"warning"},on:{click:e.createRace}},[e._v("Create Race")])],1),r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.joinToken,expression:"joinToken"}],attrs:{type:"text"},domProps:{value:e.joinToken},on:{input:function(t){t.target.composing||(e.joinToken=t.target.value)}}}),r("b-button",{attrs:{variant:"warning"},on:{click:e.joinRace}},[e._v("Join Race")])],1)],1),r("br"),e.error?r("div",{staticClass:"message is-danger"},[r("div",{staticClass:"message-body"},[e._v(e._s(e.error))])]):e._e(),r("img",{attrs:{src:"https://i.imgur.com/C2cXrol.jpg",alt:"keyboard"}})],1)},ae=[],se=r("871a"),ie={name:"race",computed:{currentUser:function(){return this.$store.state.currentUser},raceId:function(){return this.database.createRace}},data:function(){return{createToken:null,error:"",joinToken:null,phrase:"",uid:""}},methods:{createRace:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.uid=this.currentUser.uid,this.name=this.currentUser.displayName,this.phrase=se.sentence(),e.next=5,f.createRace(this.createToken,this.uid,this.phrase,this.name);case 5:t=e.sent,t.message?this.error=t.message:this.$router.push("/multiplayergame/".concat(t));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),joinRace:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.uid=this.currentUser.uid,this.name=this.currentUser.displayName,e.next=4,f.joinRace(this.joinToken,this.uid,this.name);case 4:t=e.sent,t.message?this.error=t.message:this.$router.push("/multiplayergame/".concat(t));case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},oe=ie,ce=(r("092c"),Object(b["a"])(oe,ne,ae,!1,null,"9354bfa0",null)),ue=ce.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[r("h1",[e._v("SPEED TYPE")]),r("div",{staticClass:"multi"},[r("p",[e._v("Players in the Race")]),r("ul",[this.uid===e.currentUser.uid?e._l(e.players,function(t){return r("li",[e._v("\n        "+e._s(t.name)),r("span",[r("b-progress",{attrs:{height:"2rem",value:t.percentage,"show-progress":"",animated:""}})],1)])}):e._e()],2)]),r("h3",{ref:"heading",staticClass:"preventcopy"}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.test,expression:"test"}],staticClass:"inputText",attrs:{placeholder:"start typing",onpaste:"return false",disabled:e.isDisabled},domProps:{value:e.test},on:{keyup:e.timer,input:function(t){t.target.composing||(e.test=t.target.value)}}}),r("p",{staticClass:"message"},[e._v(e._s(e.message))]),r("b-row",[r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("p",[e._v("Timer (Seconds): "),r("span",{staticClass:"score"},[e._v(e._s(e.stopwatch))])])]),r("b-col",{staticClass:"pb-2",attrs:{lg:"6"}},[r("p",[e._v("Speed (WPM): "),r("span",{staticClass:"score"},[e._v(e._s(e.speed))])])])],1),r("b-button",{attrs:{size:"lg",variant:"success"},on:{click:e.backToRace}},[e._v("Play Again")])],1)},pe=[],de=r("8887"),he=new de,me={name:"game",computed:{currentUser:function(){return this.$store.state.currentUser}},data:function(){return{raceId:null,speed:0,message:"",test:"",players:[],isDisabled:!1,isPlaying:!1,t:null,p:null,uid:"",name:"",stopwatch:0,percentage:0}},methods:{backToRace:function(){this.$router.push("/race")},addScore:function(){f.addScore(this.name,this.uid,Number(this.speed),Number(this.percentage),this.raceId)},displayScore:function(){this.$refs.heading.innerText===this.test&&(he.stop(),this.stopwatch=this.getElapsedTime(),this.uid=this.currentUser.uid,this.name=this.currentUser.displayName,this.message="CORRECT!",this.speed=this.getWPM(),this.addScore(),clearInterval(this.t),clearInterval(this.p),this.isDisabled=!0)},getWPM:function(){return(this.test.length/5/(this.stopwatch/60)).toFixed()},timer:function(){var e=this;if(this.isPlaying)return this.$refs.heading.innerHTML=this.getPhraseHtml(),this.speed=this.getWPM(),void this.displayScore();this.isPlaying=!0,he.start(),this.t=setInterval(function(){e.stopwatch=e.getElapsedTime()},300),this.p=setInterval(function(){e.percentage=(e.test.length/e.$refs.heading.innerText.length*100).toFixed(2),f.updatePlayerPercentage(e.raceId,e.uid,Number(e.percentage))},1e3)},getPhraseHtml:function(){var e=this.$refs.heading.innerText,t=this.test;if(!t)return e;for(var r="",n=0;n<t.length;n++){if(t[n]!==e[n])break;r+=e[n]}var a=e.substring(n),s="";return a&&(s="<span>".concat(a,"</span>")),'<span style="color: green">'.concat(r,"</span>").concat(s)},getElapsedTime:function(){var e=Number((he.time()/1e3).toFixed(2));return e}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.raceId=this.$route.params.id,this.uid=this.currentUser.uid,this.name=this.currentUser.displayName,e.next=5,f.getRaceDetailsDoc(this.raceId);case 5:return t=e.sent,e.next=8,t.get();case 8:r=e.sent,this.$refs.heading.innerText=r.data().phrase,t.onSnapshot(function(e){var t=e.data();n.players=t.players;var r=n.players.findIndex(function(e){return e.id===n.uid});console.log("Player",n.players[r]),n.players[r].name="You"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},fe=me,ge=(r("7c50"),Object(b["a"])(fe,le,pe,!1,null,null,null)),ve=ge.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board"},[r("h1",[e._v("Leader Board")]),r("table",{staticClass:"board"},[e._m(0),r("tbody",e._l(e.scores,function(t,n){return r("tr",{key:n},[r("td",[e._v(e._s(t.playerName))]),e._v(" |\n        "),r("td",[e._v(e._s(t.score))])])}),0)])])},ye=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Players")]),r("th",[e._v("Highest Speed")]),r("th")])])}],we=r("2ef0"),_e={name:"leaderboard",computed:{currentUser:function(){return this.$store.state.currentUser}},data:function(){return{scores:[]}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.getScores();case 2:this.scores=e.sent,this.scores=we.orderBy(this.scores,["score"],["desc"]);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},xe=_e,ke=(r("7a7c"),Object(b["a"])(xe,be,ye,!1,null,null,null)),Ce=ke.exports;n["default"].use(k["a"]);var Pe=new k["a"]({base:"/",routes:[{path:"/",name:"home",component:E},{path:"/game",name:"game",component:A,meta:{auth:!0}},{path:"/multiplayergame/:id",name:"multiplayergame",component:ve,meta:{auth:!0}},{path:"/race",name:"race",component:ue,meta:{auth:!0}},{path:"/leaderboard",name:"leaderboard",component:Ce},{path:"/signup",name:"signup",component:Y},{path:"/signin",name:"signin",component:K},{path:"/profile",name:"profile",component:re,meta:{auth:!0}},{path:"/instructions",name:"intructions",component:function(){return r.e("about").then(r.bind(null,"dd5a"))}}]});Pe.beforeEach(function(e,t,r){e.meta.auth&&!u.state.currentUser?r({path:"/signin"}):r()});var Re,Ue=Pe,Te=r("5f5b");r("f9e3"),r("2dd8");r("2440"),r("9ddc"),n["default"].use(a["a"]),n["default"].use(x.a),n["default"].use(Te["a"]),n["default"].config.productionTip=!1;var Ee=function(){Re||(Re=new n["default"]({el:"#app",data:{color:"pink"},router:Ue,store:u,render:function(e){return e(w)}}).$mount("#app"))};p.a.auth().onAuthStateChanged(function(e){e?u.commit("setCurrentUser",e):u.commit("setCurrentUser",null),Ee()})},"64a9":function(e,t,r){},"7a7c":function(e,t,r){"use strict";var n=r("8cc6"),a=r.n(n);a.a},"7c50":function(e,t,r){"use strict";var n=r("e172"),a=r.n(n);a.a},"8cc6":function(e,t,r){},9006:function(e,t,r){},b68a:function(e,t,r){},c932:function(e,t,r){"use strict";var n=r("b68a"),a=r.n(n);a.a},d76a:function(e,t,r){"use strict";var n=r("e8ef"),a=r.n(n);a.a},e172:function(e,t,r){},e66d:function(e,t,r){"use strict";var n=r("9006"),a=r.n(n);a.a},e8ef:function(e,t,r){}});
//# sourceMappingURL=app.2c415aba.js.map