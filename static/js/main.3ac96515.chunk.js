(this["webpackJsonpwedding-planner"]=this["webpackJsonpwedding-planner"]||[]).push([[0],{31:function(e,t,a){},35:function(e,t,a){e.exports=a(51)},40:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(32),c=a.n(r),l=(a(40),a(2)),i=a(3),o=a(5),u=a(4),d=a(6),m=a(7),p=a(11),h=(a(14),a(15),s.a.createContext(null)),b=function(e){return function(t){return s.a.createElement(h.Consumer,null,(function(a){return s.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},v=h,f=a(22),E=a.n(f),g=(a(42),a(44),{apiKey:"AIzaSyAk6bifdNspHpJiayRf1WVw0mNBN_7lf2g",authDomain:"wp-database-d7c6f.firebaseapp.com",databaseURL:"https://wp-database-d7c6f.firebaseio.com",projectId:"wp-database-d7c6f",storageBucket:"wp-database-d7c6f.appspot.com",messagingSenderId:"76433547092",appId:"1:76433547092:web:36a2db486b682d53f632c1",measurementId:"G-GY12PRF563"}),y=function e(){var t=this;Object(l.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.doSignOut=function(){return t.auth.signOut()},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},E.a.initializeApp(g),this.auth=E.a.auth(),this.db=E.a.database()},j=s.a.createContext(null),w=function(e){var t=function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={authUser:null},t}return Object(d.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return s.a.createElement(j.Provider,{value:this.state.authUser},s.a.createElement(e,this.props))}}]),a}(s.a.Component);return b(t)},O=a(12),x=a(17),k=a(18),S={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,s=t.email,r=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(s,r).then((function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:s})})).then((function(e){a.setState(Object(k.a)({},S))})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.state=Object(k.a)({},S),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,r=e.passwordTwo,c=e.error,l=n!==r||""===n||""===a||""===t;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),s.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),s.a.createElement("input",{name:"passwordTwo",value:r,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),s.a.createElement("button",{disabled:l,type:"submit"},"Sign Up"),s.a.createElement("li",{onClick:this.authWithGoogle},"Login with Google"),c&&s.a.createElement("p",null,c.message))}}]),t}(n.Component),N=function(){return s.a.createElement("p",null,"Don't have an account? ",s.a.createElement(m.b,{to:"/signup"},"Sign Up"))},q=b(U),C=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"SignUp"),s.a.createElement(q,null))},L={email:"",password:"",error:null},P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,s=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,s).then((function(){a.setState(Object(k.a)({},L)),a.props.history.push("/home")})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.state=Object(k.a)({},L),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,r=""===a||""===t;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),s.a.createElement("button",{disabled:r,type:"submit"},"Sign In"),n&&s.a.createElement("p",null,n.message))}}]),t}(n.Component),D=b(P),A=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"SignIn"),s.a.createElement(D,null),s.a.createElement(N,null))},I=b((function(e){var t=e.firebase;return s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:t.doSignOut},"SIGN OUT"))})),H=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.b,{className:"btn btn-dark",to:"/userData"},this.props.username),s.a.createElement(I,null))}}]),t}(n.Component),W=b(H),z=function(){return s.a.createElement("div",{className:"btn-group"},s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{type:"button",className:"btn btn-dark","data-toggle":"dropdown"},"LOGIN"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},s.a.createElement("div",{className:"dropdown-item"},s.a.createElement(A,null),s.a.createElement("div",{id:"firebaseui-auth-container"})))),s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{type:"button",className:"btn btn-dark","data-toggle":"dropdown"},"SIGNUP"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},s.a.createElement("div",{className:"dropdown-item"},s.a.createElement(C,null),s.a.createElement("button",{className:"save"},"save")))))},M=function(e){var t=e.authUser,a=e.username;return s.a.createElement("div",null,t?s.a.createElement(W,{authUser:t,username:a}):s.a.createElement(z,null))},R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={cities:{},authUserState:null,usern:null,messages:null},a.setState({authUser:null}),a.updateUsername=a.updateUsername.bind(Object(O.a)(a)),a.checkUpdate=a.checkUpdate.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updateUsername",value:function(){null!=this.state.authUserState&&this.props.firebase.db.ref("users/"+this.state.authUserState.uid).once("value").then((function(e){var t=e.val()&&e.val().username||"Anonymous";console.log("uname="+t)}))}},{key:"checkUpdate",value:function(){console.log(this.state.usern)}},{key:"componentDidUpdate",value:function(){var e=this;console.log(this.state.messages),null!=this.state.authUserState&&this.props.firebase.db.ref("users/"+this.state.authUserState.uid+"/username").on("value",(function(t){var a=t.val();a&&null==e.state.usern&&e.setState({usern:a})}))}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUserState:t}):e.setState({authUserState:null}),console.log("user="+e.state.authUserState.uid),console.log("user"+e.props.firebase.auth.currentUser.profile),e.updateUsername()})),fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json").then((function(e){return e.json()})).then((function(t){return e.setState({cities:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex flex-row bg-dark text-white"},"  ",s.a.createElement(m.b,{className:"p-2 btn btn-dark text-monospaced",to:"/"},"WEDDING PLANNER"),s.a.createElement("div",{className:"btn-group mr-auto"},s.a.createElement("button",{type:"button",className:"btn btn-dark"},"Venues"),s.a.createElement(m.b,{className:"btn btn-dark",to:"/vendors"},"VENDORS"),s.a.createElement(m.b,{className:"btn btn-dark",to:"/banquets"},"BANQUETS")),s.a.createElement("div",null,s.a.createElement(M,{authUser:this.state.authUserState,username:this.state.usern}))))}}]),t}(n.Component),T=b(R),G=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{id:"banq"},Object.keys(this.props.banquets).map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{class:"card text-white bg-dark mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},s.a.createElement("div",{class:"col-md-4 overflow-hidden"},s.a.createElement("img",{src:e.props.banquets[t][0].image})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},s.a.createElement("h4",null,e.props.banquets[t][0].name)),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},e.props.banquets[t][0].desc),s.a.createElement("p",{class:"card-text"},e.props.banquets[t][0].address),s.a.createElement("p",{class:"card-text"},"Price : ",e.props.banquets[t][0].price," per plate"))))))}))))}}]),t}(n.Component),F=(a(31),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).saveToUser=e.saveToUser.bind(Object(O.a)(e)),e.removeFromUser=e.removeFromUser.bind(Object(O.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"saveToUser",value:function(){console.log("saving");this.props.id;this.props.firebase.db.ref("/users/"+this.props.authUser.uid+"/saved/"+this.props.id).set(1)}},{key:"removeFromUser",value:function(){console.log(this.props.firebase.db.ref("/users/"+this.props.authUser.uid+"/saved").push().remove())}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{style:{position:"absolute",right:"0px",bottom:"0px"}},s.a.createElement("button",{value:this.props.id,className:"btn btn-secondary",onClick:this.saveToUser},"Save"))}}]),t}(n.Component)),B=b(F),J=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null!=this.props.authUser?s.a.createElement(B,{authUser:this.props.authUser,id:this.props.id}):s.a.createElement(V,null)}}]),t}(n.Component),V=function(){return s.a.createElement("button",{className:"btn btn-secondary disabled",style:{position:"absolute",right:"0px",bottom:"0px"}},"Login to Save")},K=J;var Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={banquets:{},arr:{},auth:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({auth:t}):e.setState({auth:null})})),console.log("didmount called"),fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page"+this.props.pageno.toString()+".json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({banquets:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{style:{left:"0px",width:"100%",marginLeft:"0px"},className:"row bg-secondary text-white"},s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Location"),s.a.createElement("div",{class:"searchdiv"},s.a.createElement("input",{id:"searchlocation",type:"text",class:"searchbar",placeholder:"search location"}))),s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Name"),s.a.createElement("div",{class:"searchdiv"},s.a.createElement("input",{id:"searchname",type:"text",class:"searchbar",placeholder:"search by name",onFocus:void 0}))),s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Price:"),s.a.createElement("div",{className:"btn-grp"},s.a.createElement("button",{className:"btn btn-secondary"},"High to Low"),s.a.createElement("button",{className:"btn btn-secondary"},"Low to High"))))),s.a.createElement("div",null,s.a.createElement("div",{id:"banq"},Object.keys(this.state.banquets).map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{class:"card text-white bg-dark mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},s.a.createElement("div",{class:"col-md-4 overflow-hidden"},s.a.createElement("img",{src:e.state.banquets[t].image})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},s.a.createElement("h4",null,e.state.banquets[t].name)),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},e.state.banquets[t].desc),s.a.createElement("p",{class:"card-text"},e.state.banquets[t].address),s.a.createElement("p",{class:"card-text"},"Price : ",e.state.banquets[t].price," per plate"),s.a.createElement(K,{authUser:e.state.auth,id:t}))))))})))))}}]),t}(n.Component),Y=(b(Q),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={cities:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json").then((function(e){return e.json()})).then((function(t){return e.setState({cities:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{class:"row d-flex justify-content-center",style:{marginTop:"2rem",marginLeft:"1rem",marginRight:"1rem"}},Object.keys(this.state.cities).map((function(t){return s.a.createElement("div",{class:"card text-center border-light shadow bg-white rounded",style:{width:"16rem",marginRight:"2rem",marginBottom:"2rem"}},s.a.createElement("img",{class:"card-img-top",src:"...",alt:"Card image cap"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},e.state.cities[t]),s.a.createElement(m.b,{to:"/banquets/"+e.state.cities[t]+"/1",class:"btn btn-primary",style:{marginRight:"1rem"}},"Banquets"),s.a.createElement(m.b,{to:"/banquets/"+e.state.cities[t]+"/1",class:"btn btn-primary"},"More")))})))}}]),t}(n.Component)),$=Object(p.f)(b(Y)),_=a(9);Object(_.a)();var X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={banquets:{},arr:{},auth:null,next:null,page:1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(){var e=this;this.state.page!=this.props.page&&(console.log("didmount called"),fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page"+this.props.page+".json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({page:e.props.page,banquets:t})})))}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({auth:t}):e.setState({auth:null})})),this.setState({page:this.props.page}),console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page1.json"),console.log("didmount called"),fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page"+this.props.page+".json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({banquets:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{style:{left:"0px",width:"100%",marginLeft:"0px"},className:"row bg-secondary text-white"},s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Location"),s.a.createElement("div",{class:"searchdiv"},s.a.createElement("input",{id:"searchlocation",type:"text",class:"searchbar",placeholder:"search location"}))),s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Name"),s.a.createElement("div",{class:"searchdiv"},s.a.createElement("input",{id:"searchname",type:"text",class:"searchbar",placeholder:"search by name",onFocus:void 0}))),s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Price:"),s.a.createElement("div",{className:"btn-grp"},s.a.createElement("button",{className:"btn btn-secondary"},"High to Low"),s.a.createElement("button",{className:"btn btn-secondary"},"Low to High"))))),s.a.createElement("div",null,s.a.createElement("div",{id:"banq"},Object.keys(this.state.banquets).map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{class:"card text-white bg-dark mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},s.a.createElement("div",{class:"col-md-4 overflow-hidden"},s.a.createElement("img",{src:e.state.banquets[t].image})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},s.a.createElement("h4",null,e.state.banquets[t].name)),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},e.state.banquets[t].desc),s.a.createElement("p",{class:"card-text"},e.state.banquets[t].address),s.a.createElement("p",{class:"card-text"},"Price : ",e.state.banquets[t].price," per plate"),s.a.createElement(K,{authUser:e.state.auth,id:t}))))))}))),s.a.createElement("div",{class:"row mb-2 mt-2  d-flex justify-content-center"},s.a.createElement(m.b,{class:"btn btn-primary",to:"/banquets/"+this.props.city+"/"+(parseInt(this.props.page,10)+1)},"next"))))}}]),t}(n.Component),Z=Object(p.f)(b(X)),ee=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={city:null,page:null},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){console.log("page="+this.props.match.params.p),this.state.page!=this.props.match.params.p&&this.setState({page:this.props.match.params.p})}},{key:"render",value:function(){return void 0!=this.props.match.params.c?s.a.createElement(Z,{city:this.props.match.params.c,page:this.props.match.params.p,key:this.props.key,authUser:this.props.authUser}):s.a.createElement($,null)}}]),t}(s.a.Component),te=Object(p.f)(b(ee));var ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={banquets:{},arr:{},auth:null,city:null,pageno:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.handle,t=this.props.match.params.handle1;this.setState({city:e}),this.setState({pageno:t}),console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+e+"/page1.json")}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({auth:t}):e.setState({auth:null})}));var t=this.props.match.params.handle,a=this.props.match.params.handle1;this.setState({city:t}),this.setState({pageno:a}),console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+t+"/page1.json"),console.log("didmount called"),fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+t+"/page1.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({banquets:t})}))}},{key:"render",value:function(){var e=this;return void 0!=this.state.handle1?s.a.createElement("div",null,"city selector",s.a.createElement("div",null,s.a.createElement("div",{style:{left:"0px",width:"100%",marginLeft:"0px"},className:"row bg-secondary text-white"},s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Location"),s.a.createElement("div",{class:"searchdiv"},s.a.createElement("input",{id:"searchlocation",type:"text",class:"searchbar",placeholder:"search location"}))),s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Name"),s.a.createElement("div",{class:"searchdiv"},s.a.createElement("input",{id:"searchname",type:"text",class:"searchbar",placeholder:"search by name",onFocus:void 0}))),s.a.createElement("div",{style:{float:"left",width:"400px",marginLeft:"0px"},className:"row"},s.a.createElement("div",{className:"p-2 bg-secondary text-monospace"},"Price:"),s.a.createElement("div",{className:"btn-grp"},s.a.createElement("button",{className:"btn btn-secondary"},"High to Low"),s.a.createElement("button",{className:"btn btn-secondary"},"Low to High"))))),s.a.createElement("div",null,s.a.createElement("div",{id:"banq"},Object.keys(this.state.banquets).map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{class:"card text-white bg-dark mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},s.a.createElement("div",{class:"col-md-4 overflow-hidden"},s.a.createElement("img",{src:e.state.banquets[t].image})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},s.a.createElement("h4",null,e.state.banquets[t].name)),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},e.state.banquets[t].desc),s.a.createElement("p",{class:"card-text"},e.state.banquets[t].address),s.a.createElement("p",{class:"card-text"},"Price : ",e.state.banquets[t].price," per plate"),s.a.createElement(K,{authUser:e.state.auth,id:t}))))))}))))):s.a.createElement("div",null,"no city selected")}}]),t}(n.Component),ne=(b(ae),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(te,null)}}]),t}(n.Component)),se=(Object(p.f)(b(ne)),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"jumbotron justify-content-center",style:{backgroundImage:"url('https://media.weddingz.in/images/66e4ddd34b6cbfd42e60fbae48e85248/shweta-and-arjun-lakshmi-niwas-palace-bikaner-wedding.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},s.a.createElement("div",{class:"display-1 d-flex text-light justify-content-center"},"WEDDING PLANNER")),s.a.createElement("div",{class:"display-1 d-flex justify-content-center",style:{width:"100%"}},"CITIES"),s.a.createElement($,null))}}]),t}(n.Component)),re=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={authUser:null,savedHashes:null},e.getdata=e.getdata.bind(Object(O.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getdata",value:function(e){var t=this;console.log("hash="+e);var a=null;this.props.firebase.db.ref("public/vendors/all/"+e).on("value",(function(e){if(a=e.val())if(console.log(a),console.log(t.state.savedHashes),t.state.savedHashes){var n=t.state.savedHashes;n.push(a),t.setState({savedHashes:n})}else t.setState({savedHashes:[a]})}))}},{key:"componentDidMount",value:function(){var e=this;this.props.authUser&&!this.state.authUser&&this.setState({authUser:this.props.authUser}),this.props.authUser&&this.props.firebase.db.ref("users/"+this.props.authUser.uid+"/saved").on("value",(function(t){var a=t.val();if(console.log(a),a){var n=[],s=[];Object.keys(a).forEach((function(e){n.push(e)}));for(var r=0;r<n.length;r++)s.push(e.getdata(n[r]));console.log(s)}}))}},{key:"render",value:function(){return this.state.savedHashes?s.a.createElement("div",null,s.a.createElement("p",{class:"display-3"},"Saved Items"),this.state.savedHashes.map((function(e){return s.a.createElement("div",{class:"card text-white bg-dark mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},Object.keys(e).map((function(t){if("image"==t)return s.a.createElement("div",{class:"col-md-4 overflow-hidden",style:{backgroundImage:"url("+e[t]+")",backgroundSize:"cover",backgroundPosition:"center",minHeight:"200px",minWidth:"50px"}})})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},Object.keys(e).map((function(t){if("name"==t)return s.a.createElement("h4",null,e[t])}))),s.a.createElement("div",{class:"card-body"},Object.keys(e).map((function(t){if("image"!=t&&"name"!=t&&"type"!=t)return s.a.createElement("p",{class:"card-text"},e[t])}))))))}))):s.a.createElement("div",null,"Not loaded data")}}]),t}(n.Component),ce=b(re);function le(){return s.a.createElement("h2",null,"About")}var ie=w(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={authUser:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){console.log("update app.js"+this.state.authUser)}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){null!=t&&t!=e.state.authUser&&(t?e.setState({authUser:t}):e.setState({authUser:null}))})),console.log("userauth changed ")}},{key:"render",value:function(){var e=this;return s.a.createElement(m.a,{basename:"/"},s.a.createElement("div",null,s.a.createElement(T,{cities:this.state.cities,authUser:this.state.authUser}),s.a.createElement(p.c,null,s.a.createElement(p.a,{path:"/banquets/:c?/:p?",render:function(t){return s.a.createElement(te,Object.assign({authUser:e.state.authUser},t))}}),s.a.createElement(p.a,{path:"/userData"},s.a.createElement(ce,{authUser:this.state.authUser})),s.a.createElement(p.a,{path:"/banques/",component:te}),s.a.createElement(p.a,{path:"/all"},s.a.createElement(G,{banquets:this.state.cities})),s.a.createElement(p.a,{path:"/about"},s.a.createElement(le,null)),s.a.createElement(p.a,{exactpath:"/"},s.a.createElement(se,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(v.Provider,{value:new y},s.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.3ac96515.chunk.js.map