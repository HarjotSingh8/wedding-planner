(this["webpackJsonpwedding-planner"]=this["webpackJsonpwedding-planner"]||[]).push([[0],{34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),o=a.n(r),i=(a(39),a(2)),c=a(3),l=a(5),u=a(4),d=a(6),h=a(9),m=a(12),p=(a(18),a(19),s.a.createContext(null)),b=function(e){return function(t){return s.a.createElement(p.Consumer,null,(function(a){return s.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},f=p,v=a(15),g=a.n(v),y=(a(41),a(43),a(51),{apiKey:"AIzaSyAk6bifdNspHpJiayRf1WVw0mNBN_7lf2g",authDomain:"wp-database-d7c6f.firebaseapp.com",databaseURL:"https://wp-database-d7c6f.firebaseio.com",projectId:"wp-database-d7c6f",storageBucket:"wp-database-d7c6f.appspot.com",messagingSenderId:"76433547092",appId:"1:76433547092:web:36a2db486b682d53f632c1",measurementId:"G-GY12PRF563"}),E=function e(){var t=this;Object(i.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},g.a.initializeApp(y),this.auth=g.a.auth(),this.db=g.a.database(),this.storage=g.a.storage(),this.googleProvider=new g.a.auth.GoogleAuthProvider,this.facebookProvider=new g.a.auth.FacebookAuthProvider,this.twitterProvider=new g.a.auth.TwitterAuthProvider},j=a(8),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={img:null,loaded:null},e.found=e.found.bind(Object(j.a)(e)),e.notfound=e.notfound.bind(Object(j.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("fetchimg"),null==this.state.loaded&&this.props.firebase.storage.ref().child("/cities/"+this.props.city+"Compressed.jpg").getDownloadURL().then(this.found,this.notfound)}},{key:"found",value:function(e){console.log("found"),this.setState({img:e})}},{key:"notfound",value:function(){console.log('not found"'+this.props.city+'"')}},{key:"render",value:function(){return this.state.img?s.a.createElement("div",{class:"embed-responsive embed-responsive-16by9"},s.a.createElement("img",{class:"card-img-top embed-responsive-item",style:{objectFit:"cover"},src:this.state.img})):s.a.createElement("img",{class:"card-img-top",src:"...",alt:"image loading"})}}]),t}(n.Component),w=b(O),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).saveToUser=e.saveToUser.bind(Object(j.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"saveToUser",value:function(){console.log("saving");this.props.id;this.props.firebase.db.ref("/users/"+this.props.authUser.uid+"/saved/"+this.props.id).set(1)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{style:{position:"absolute",right:"0px",bottom:"0px"}},s.a.createElement("button",{value:this.props.id,className:"btn btn-outline-danger ",onClick:this.saveToUser},"Save"))}}]),t}(n.Component),S=b(k),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return null!=this.props.authUser?s.a.createElement(S,{authUser:this.props.authUser,id:this.props.id}):s.a.createElement(x,null)}}]),t}(n.Component),x=function(){return s.a.createElement("button",{className:"btn btn-light disabled",style:{position:"absolute",right:"0px",bottom:"0px"}},"Login to Save")},C=U,N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={cities:null,data:null,vendor:null,city:null,page:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;null==this.state.cities&&fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({cities:t})})),console.log("page="+this.props.match.params.v),this.state.vendor==this.props.match.params.v&&this.state.city==this.props.match.params.c&&this.state.page==this.props.match.params.p||this.setState({vendor:this.props.match.params.v,city:this.props.match.params.c,page:this.props.match.params.p}),this.state.vendor&&this.state.city&&this.state.page&&!this.state.data&&fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/"+this.state.vendor+"/"+this.state.city+"/page"+this.state.page+".json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t})}))}},{key:"componentDidMount",value:function(){console.log("page="+this.state.page),this.state.vendor==this.props.match.params.v&&this.state.city==this.props.match.params.c&&this.state.page==this.props.match.params.p||this.setState({vendor:this.props.match.params.v,city:this.props.match.params.c,page:this.props.match.params.p})}},{key:"render",value:function(){var e=this;return this.state.vendor?null==this.state.city&&this.state.cities?s.a.createElement("div",{className:"row justify-content-center bg-light"},Object.keys(this.state.cities).map((function(t){return s.a.createElement("div",{class:"col-6 col-sm-4 col-md-3 mb-5"},s.a.createElement("div",{class:"card text-center border-light shadow-sm bg-white rounded"},s.a.createElement(h.b,{to:"/vendors/"+e.state.vendor+"/"+e.state.cities[t]+"/1",class:""},s.a.createElement(w,{city:e.state.cities[t]})),s.a.createElement("div",{class:"card-body justify-content-center"},s.a.createElement("h5",{class:"card-title"},e.state.cities[t]))))}))):this.state.vendor&&this.state.city&&null!=this.state.data?s.a.createElement("div",null,Object.keys(this.state.data).map((function(t){return s.a.createElement("div",null,s.a.createElement("div",{class:"card text-dark bg-white mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},s.a.createElement("div",{class:"col-md-4 overflow-hidden"},s.a.createElement("img",{src:e.state.data[t].image})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},s.a.createElement("h4",null,e.state.data[t].name)),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},e.state.data[t].desc),s.a.createElement("p",{class:"card-text"},e.state.data[t].address),s.a.createElement("p",{class:"card-text"},"Price : ",e.state.data[t].price," per plate"),s.a.createElement(C,{authUser:e.state.auth,id:t}))))))}))):s.a.createElement("div",null,"Loading ..."):s.a.createElement("div",{class:"row "},s.a.createElement("div",{class:"col-6 "},s.a.createElement("div",{class:"card embed-responsive embed-responsive-16by9"},s.a.createElement("img",{class:"card-img-top embed-responsive-item",src:"https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg",style:{objectFit:"cover"}}),s.a.createElement(h.b,{class:"card-img-overlay  text-white",style:{textDecoration:"none",fontSize:"6vw"},to:"/vendors/photographers"},"Photographers"))),s.a.createElement("div",{class:"col-6"},s.a.createElement("div",{class:"card embed-responsive embed-responsive-16by9"},s.a.createElement("img",{class:"card-img-top embed-responsive-item",src:"https://theweddingshow.in/wp-content/uploads/2018/07/makeup.jpg",style:{objectFit:"cover"}}),s.a.createElement(h.b,{class:"card-img-overlay  text-white",style:{textDecoration:"none",fontSize:"6vw"},to:"/vendors/bridalmakeup"},"Bridal Makeup"))))}}]),t}(s.a.Component),I=Object(m.f)(b(N)),P=s.a.createContext(null),D=function(e){var t=function(t){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={authUser:null},t}return Object(d.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return s.a.createElement(P.Provider,{value:this.state.authUser},s.a.createElement(e,this.props))}}]),a}(s.a.Component);return b(t)},W=a(21),A=a(17),T={email:"",password:"",error:null},q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,s=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,s).then((function(){a.setState({error:null})})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},T),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,r=""===a||""===t;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{class:"row justify-content-center bg-white"},s.a.createElement("input",{name:"email",class:"col-12 my-2",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"password",class:"col-12 my-2",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),s.a.createElement("button",{class:"btn btn-primary col-12 my-2",disabled:r,type:"submit"},"Sign In"),s.a.createElement(M,{class:"my-2"}),s.a.createElement(G,null),s.a.createElement(F,null),n&&s.a.createElement("p",null,n.message)))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithGoogle().then((function(e){return a.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})})).then((function(){a.setState({error:null})})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.state={error:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("button",{class:"btn btn-primary my-2",type:"submit"},"Sign In with Google"),e&&s.a.createElement("p",null,e.message))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithFacebook().then((function(e){return a.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){a.setState({error:null})})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.state={error:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("button",{class:"btn btn-primary my-2",type:"submit"},"Sign In with Facebook"),e&&s.a.createElement("p",null,e.message))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithTwitter().then((function(e){return a.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){a.setState({error:null})})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.state={error:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("button",{class:"btn btn-primary my-2",type:"submit"},"Sign In with Twitter"),e&&s.a.createElement("p",null,e.message))}}]),t}(n.Component),F=b(L),G=b(z),H=b(q),M=b(R),B=function(){return s.a.createElement("div",{class:"row justify-content-center bg-white p-5"},s.a.createElement("p",{class:"display-3"},"Sign In"),s.a.createElement(H,null))},J={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,s=t.email,r=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(s,r).then((function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:s})})).then((function(e){a.setState(Object(W.a)({},J))})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},J),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,r=e.passwordTwo,o=e.error,i=n!==r||""===n||""===a||""===t;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{class:"row justify-content-center bg-white"},s.a.createElement("input",{name:"username",class:"col-12 my-2",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderColor:"pink"}}),s.a.createElement("input",{name:"email",class:"col-12 my-2",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderColor:"pink"}}),s.a.createElement("input",{name:"passwordOne",class:"col-12 my-2",value:n,onChange:this.onChange,type:"password",placeholder:"Password",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderColor:"pink"}}),s.a.createElement("input",{name:"passwordTwo",class:"col-12 my-2",value:r,onChange:this.onChange,type:"password",placeholder:"Confirm Password",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderColor:"pink"}}),s.a.createElement("button",{class:"btn btn-primary col-12 my-2",disabled:i,type:"submit"},"Sign Up"),s.a.createElement("button",{class:"btn col-12 my-2 btn-primary",onClick:this.authWithGoogle},"Login with Google"),o&&s.a.createElement("p",null,o.message)))}}]),t}(n.Component),V=b(Q),K=function(){return s.a.createElement("div",{class:"row justify-content-center bg-white p-5"},s.a.createElement("p",{class:"display-3"},"Sign Up"),s.a.createElement(V,null))},X=b((function(e){var t=e.firebase;return s.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:t.doSignOut},"SIGN OUT")})),Y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.b,{className:"btn btn-dark",to:"/userData"},this.props.username),s.a.createElement(X,null))}}]),t}(n.Component),$=b(Y),_=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{type:"button",className:"btn btn-dark","data-toggle":"dropdown"},"LOGIN"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},s.a.createElement("div",{className:"dropdown-item"},s.a.createElement(B,null),s.a.createElement("div",{id:"firebaseui-auth-container"})))),s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{type:"button",className:"btn btn-dark","data-toggle":"dropdown"},"SIGNUP"),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-0"},s.a.createElement("div",{className:"dropdown-item"},s.a.createElement(K,null)))))},Z=function(e){var t=e.authUser,a=e.username;return s.a.createElement("div",{className:"row justify-content-center justify-content-sm-end"},t?s.a.createElement($,{authUser:t,username:a}):s.a.createElement(_,null))},ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={authUserState:null,usern:null},a.setState({authUser:null}),a.updateUsername=a.updateUsername.bind(Object(j.a)(a)),a.checkUpdate=a.checkUpdate.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateUsername",value:function(){null!=this.state.authUserState&&this.props.firebase.db.ref("users/"+this.state.authUserState.uid).once("value").then((function(e){var t=e.val()&&e.val().username||"Anonymous";console.log("uname="+t)}))}},{key:"checkUpdate",value:function(){console.log(this.state.usern)}},{key:"componentDidUpdate",value:function(){var e=this;null!=this.state.authUserState&&this.props.firebase.db.ref("users/"+this.state.authUserState.uid+"/username").on("value",(function(t){var a=t.val();a&&null==e.state.usern&&e.setState({usern:a})}))}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUserState:t}):e.setState({authUserState:null}),console.log("user="+e.state.authUserState.uid),console.log("user"+e.props.firebase.auth.currentUser.profile),e.updateUsername()})),fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json").then((function(e){return e.json()})).then((function(t){return e.setState({cities:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:" container-fluid bg-dark text-white",style:{width:"100%"}},"  ",s.a.createElement("div",{className:"row d-flex justify-content-between"},s.a.createElement("div",{className:"d-flex justify-content-center justify-content-sm-center justify-content-md-start col-12 col-sm-12 col-md-4 col-xl-3"},s.a.createElement(h.b,{className:"btn  btn-dark text-monospaced ",to:"/"},s.a.createElement("b",null,"WEDDING PLANNER"))),s.a.createElement("div",{className:"d-flex col-12 col-sm-4 col-md-4 justify-content-center"},s.a.createElement("div",{className:"btn-group"},s.a.createElement(h.b,{className:"btn btn-dark",to:"/vendors"},"VENDORS"),s.a.createElement(h.b,{className:"btn btn-dark",to:"/banquets"},"BANQUETS"))),s.a.createElement("div",{className:"col-12 col-sm-6 col-md-4"},s.a.createElement(Z,{authUser:this.state.authUserState,username:this.state.usern})))))}}]),t}(n.Component),te=b(ee),ae=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={cities:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.cities||fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json").then((function(e){return e.json()})).then((function(t){return e.setState({cities:t})}))}},{key:"render",value:function(){var e=this;return null!=this.state.cities?s.a.createElement("div",{className:"row justify-content-center bg-light"},Object.keys(this.state.cities).map((function(t){return s.a.createElement("div",{class:"col-6 col-sm-4 col-md-3 mb-5"},s.a.createElement("div",{class:"card text-center border-light shadow-sm bg-white rounded"},s.a.createElement(w,{city:e.state.cities[t]}),s.a.createElement("div",{class:"card-body justify-content-center"},s.a.createElement("h5",{class:"card-title"},e.state.cities[t]),s.a.createElement(h.b,{to:"/banquets/"+e.state.cities[t]+"/1",class:"btn m-1 btn-primary"},"Banquets"))))}))):s.a.createElement("div",null,"Loading Cities")}}]),t}(n.Component),ne=Object(m.f)(b(ae)),se=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={img:null,loaded:null},e.found=e.found.bind(Object(j.a)(e)),e.notfound=e.notfound.bind(Object(j.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("fetchimg"),null==this.state.loaded&&this.props.firebase.storage.ref().child("/cover/"+this.props.city+"Cover.jpg").getDownloadURL().then(this.found,this.notfound)}},{key:"found",value:function(e){console.log("found"),this.setState({img:e})}},{key:"notfound",value:function(){console.log('not found"'+this.props.city+'"')}},{key:"render",value:function(){return this.state.img?s.a.createElement("div",{class:"jumbotron m-0 row display-1 justify-content-center",style:{backgroundImage:"url('"+this.state.img+"')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",fontSize:"10vw"}},s.a.createElement("div",{class:"flex-shrink-1 d-flex text-light justify-content-center"},this.props.city.toUpperCase())):s.a.createElement("img",{class:"card-img-top",src:"...",alt:"image loading/not available"})}}]),t}(n.Component),re=b(se);var oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={banquets:{},arr:{},auth:null,next:null,page:1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(){var e=this;this.state.page!=this.props.page&&(console.log("didmount called"),fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page"+this.props.page+".json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({page:e.props.page,banquets:t})})))}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({auth:t}):e.setState({auth:null})})),this.setState({page:this.props.page}),console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page1.json"),console.log("didmount called"),fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+this.props.city+"/page"+this.props.page+".json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({banquets:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(re,{city:this.props.city}),s.a.createElement("div",{class:"md-form active-pink-4 mt-0 mx-5"},s.a.createElement("input",{class:"form-control",type:"text",placeholder:"Search","aria-label":"Search",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderColor:"pink"}})),s.a.createElement("div",null,s.a.createElement("div",{id:"banq",class:"container-fluid row justify-content-center"},Object.keys(this.state.banquets).map((function(t){return s.a.createElement("div",{class:"col-sm-12 col-xl-6 h-100 my-3"},s.a.createElement("div",{class:"card text-dark bg-light shadow",style:{border:"0px",overflow:"hidden"}},s.a.createElement("div",{class:"row d-flex no-gutters"},s.a.createElement("div",{class:"col-sm-12 col-md-4",style:{backgroundImage:"url('"+e.state.banquets[t].image+"')",backgroundSize:"cover",minHeight:"271px"}}),s.a.createElement("div",{class:"col-sm-12 col-md-8",style:{height:"271px"}},s.a.createElement("div",{class:"card-header bg-light",style:{borderColor:"pink"}},s.a.createElement("h4",null,e.state.banquets[t].name)),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text",style:{height:"48px",overflow:"hidden"}},e.state.banquets[t].desc),s.a.createElement("p",{class:"card-text",style:{height:"48px",overflow:"hidden"}},e.state.banquets[t].address),s.a.createElement("p",{class:"card-text",style:{height:"48px"}},"Price : ",e.state.banquets[t].price," per plate"),s.a.createElement(C,{authUser:e.state.auth,id:t}))))))}))),s.a.createElement("div",{class:"row mb-2 mt-2  d-flex justify-content-center",style:{width:"100%"}},s.a.createElement(h.b,{class:"btn btn-primary",to:"/banquets/"+this.props.city+"/"+(parseInt(this.props.page,10)+1)},"next"))))}}]),t}(n.Component),ie=Object(m.f)(b(oe)),ce=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={city:null,page:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){console.log("page="+this.props.match.params.p),this.state.page!=this.props.match.params.p&&this.setState({page:this.props.match.params.p})}},{key:"render",value:function(){return void 0!=this.props.match.params.c?s.a.createElement(ie,{city:this.props.match.params.c,page:this.props.match.params.p,key:this.props.key,authUser:this.props.authUser}):s.a.createElement(ne,null)}}]),t}(s.a.Component),le=Object(m.f)(b(ce)),ue=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"jumbotron row display-1 justify-content-center",style:{backgroundImage:"url('https://media.weddingz.in/images/66e4ddd34b6cbfd42e60fbae48e85248/shweta-and-arjun-lakshmi-niwas-palace-bikaner-wedding.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",fontSize:"10vw"}},s.a.createElement("div",{class:"flex-shrink-1 d-flex text-light justify-content-center"},"WEDDING PLANNER")),s.a.createElement("div",{class:"display-1 d-flex justify-content-center",style:{fontSize:"6vw"}},"CITIES"),s.a.createElement(ne,null))}}]),t}(n.Component),de=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).removeFromUser=e.removeFromUser.bind(Object(j.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"removeFromUser",value:function(){console.log(this.props.firebase.auth.W),this.props.firebase.db.ref("/users/"+this.props.firebase.auth.W+"/saved/"+this.props.hash).set(null)}},{key:"render",value:function(){return s.a.createElement("div",{style:{position:"absolute",right:"0px",bottom:"0px"}},s.a.createElement("button",{className:"btn btn-secondary",onClick:this.removeFromUser},"Remove"))}}]),t}(n.Component),he=b(de),me=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={authUser:null,savedHashes:null},e.getdata=e.getdata.bind(Object(j.a)(e)),e.removeEntry=e.removeEntry.bind(Object(j.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getdata",value:function(e){var t=this;console.log("hash="+e);var a=null;this.props.firebase.db.ref("public/vendors/all/"+e).once("value",(function(n){if(a=n.val())if(console.log(a),console.log(t.state.savedHashes),a.hash=e,t.state.savedHashes){var s=t.state.savedHashes;s.push(a),t.setState({savedHashes:s})}else t.setState({savedHashes:[a]})}))}},{key:"removeEntry",value:function(){console.log("called")}},{key:"componentDidMount",value:function(){var e=this;this.props.authUser&&!this.state.authUser&&this.setState({authUser:this.props.authUser}),this.props.authUser&&(this.setState({savedHashes:null}),this.props.firebase.db.ref("users/"+this.props.authUser.uid+"/saved").on("value",(function(t){e.setState({savedHashes:null});var a=t.val();if(console.log(a),a){console.log("uathid ="+e.props.authUser);var n=[],s=[];Object.keys(a).forEach((function(e){n.push(e)}));for(var r=0;r<n.length;r++)s.push(e.getdata(n[r]));console.log(s)}})))}},{key:"render",value:function(){return this.state.savedHashes?s.a.createElement("div",null,s.a.createElement("p",{class:"display-3"},"Saved Items"),this.state.savedHashes.map((function(e){return s.a.createElement("div",{class:"card text-white bg-dark mt-3 ml-3 mr-3"},s.a.createElement("div",{class:"row no-gutters"},Object.keys(e).map((function(t){if("image"==t)return s.a.createElement("div",{class:"col-md-4 overflow-hidden",style:{backgroundImage:"url("+e[t]+")",backgroundSize:"cover",backgroundPosition:"center",minHeight:"200px",minWidth:"50px"}})})),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("div",{class:"card-header"},Object.keys(e).map((function(t){if("name"==t)return s.a.createElement("h4",null,e[t])}))),s.a.createElement("div",{class:"card-body"},Object.keys(e).map((function(t){if("image"!=t&&"name"!=t&&"type"!=t&&"hash"!=t)return s.a.createElement("p",{class:"card-text"},e[t])})),Object.keys(e).map((function(t){if("hash"==t)return s.a.createElement(he,{hash:e[t]})}))))))}))):s.a.createElement("div",null,"Not loaded data")}}]),t}(n.Component),pe=b(me),be=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"navbar  bg-dark text-white"},"Footer")}}]),t}(n.Component),fe=D(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={authUser:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged((function(t){null!=t&&t!=e.state.authUser&&(t?e.setState({authUser:t}):e.setState({authUser:null}))})),console.log("userauth changed ")}},{key:"render",value:function(){var e=this;return s.a.createElement(h.a,{basename:"/"},s.a.createElement("div",null,s.a.createElement(te,{cities:this.state.cities,authUser:this.state.authUser}),s.a.createElement("div",null,s.a.createElement(m.c,null,s.a.createElement(m.a,{path:"/banquets/:c?/:p?",render:function(t){return s.a.createElement(le,Object.assign({authUser:e.state.authUser},t))}}),s.a.createElement(m.a,{path:"/vendors/:v?/:c?/:p?",render:function(t){return s.a.createElement(I,Object.assign({authUser:e.state.authUser},t))}}),s.a.createElement(m.a,{path:"/userData",render:function(t){return s.a.createElement(pe,Object.assign({authUser:e.state.authUser},t))}}),s.a.createElement(m.a,{exactpath:"/"},s.a.createElement(ue,null)))),s.a.createElement(be,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f.Provider,{value:new E},s.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.663d9b29.chunk.js.map