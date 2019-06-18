(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),i=(a(81),a(82),a(17)),o=a(18),s=a(20),m=a(19),u=a(21),d=a(140),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#e3f2fd"}},r.a.createElement(d.a,{className:"navbar-brand",to:""},"Burn it"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.a,{className:"nav-link",to:"/home"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.a,{className:"nav-link",to:"/profile"},"Profile")))))}}]),t}(n.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return r.a.createElement("div",{className:"Row"},r.a.createElement("div",{className:"card  mb-3 ml-5 mt-5",style:{display:"inline-block",borderColor:"#9cd1f8"}},r.a.createElement("div",{className:"card-header bg-transparent"},r.a.createElement("h5",null,t)),r.a.createElement("div",{className:"card-body "},r.a.createElement("span",{className:"card-title mr-2",style:{display:"inline-block"}},"Walking 30 minutes : 100 Calorie"),r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm mb-2",href:"#",style:{display:"inline-block"}},r.a.createElement("i",{className:"fa fa-trash-o fa-lg"}))),r.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}}),r.a.createElement("div",{style:{display:"inline-block"}},"Last updated : 2019-6-12 14:35"))))}}]),t}(n.Component),p=a(25),v=a.n(p),f=a(46),g=(a(55),a(73)),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={exercise:"run",calorie:10,value:"running",time:"minutes",duration:0},a.fetchCalorie=function(){var e=Object(f.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://trackapi.nutritionix.com/v2/natural/exercise",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-app-key":"d1f7ab9e52b72ffdcace031cd9fb3e75","x-app-id":"04ca317f"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({query:t,gender:"female",weight_kg:50,height_cm:160,age:33})}).then(function(e){return e.json()}).then(function(e){console.log(e.exercises[0]),a.setState({calorie:e.exercises[0].nf_calories})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSelectTime=function(e){if(a.setState({time:e.target.name}),a.state.duration>0){var t=a.state.duration;"hours"===e.target.name&&(t*=60);var n=a.state.value+" "+t+" minutes";console.log(n),a.fetchCalorie(n)}},a.handleTimeChange=function(){var e=Object(f.a)(v.a.mark(function e(t){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({duration:t.target.value},function(){return console.log(a.state.duration)}),n=t.target.value,"hours"===a.state.time&&(n=60*t.target.value),r=a.state.value+" "+n+" minutes",console.log(r),a.fetchCalorie(r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.state.exercise);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSelectExercise",value:function(e){var t=this;if(this.setState({value:e},function(){return console.log(t.state.value)}),this.state.duration>0){var a=this.state.duration;"hours"===this.state.time&&(a*=60);var n=e+" "+a+" minutes";console.log(n),this.fetchCalorie(n)}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card  mb-3 ml-5 mt-5",style:{display:"inline-block",borderColor:"#9cd1f8"}},r.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("h5",null,"Add new exercise")),r.a.createElement("div",{className:"card-body "},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Exercise"),r.a.createElement(g.SelectList,{data:["running","walking","hiit","cardio","yoga","elliptial"],defaultValue:"running",onChange:function(t){return e.handleSelectExercise(t)}}))),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Time","aria-label":"Time","aria-describedby":"button-addon4",onChange:this.handleTimeChange}),r.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"button"},r.a.createElement("label",{className:"minutes"===this.state.time?"btn btn-outline-secondary active":"btn btn-outline-secondary"},r.a.createElement("input",{type:"radio",name:"minutes",checked:"minutes"===this.state.time,onChange:this.handleSelectTime}),"minutes"),r.a.createElement("label",{className:"hours"===this.state.time?"btn btn-outline-secondary active":"btn btn-outline-secondary"},r.a.createElement("input",{type:"radio",name:"hours",checked:"hours"===this.state.time,onChange:this.handleSelectTime}),"hours"))),r.a.createElement("div",{className:"mt-2"},this.state.duration>0&&r.a.createElement("span",null,"I did ",this.state.duration," ",this.state.time," ",this.state.value,". ",r.a.createElement("br",null),"Total calories estimated:",this.state.calorie,"Calories."))),r.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("button",{type:"button",className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"}},"Submit")))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={height:160,weight:55,age:33},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card  mb-3 ml-5 mt-5",style:{display:"inline-block",borderColor:"#9cd1f8"}},r.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("h5",null,"Weiwei's Personal Profile")),r.a.createElement("div",{className:"card-body "},r.a.createElement("div",{className:"row mr-5"},r.a.createElement("label",null,"Weight: ",r.a.createElement("input",{type:"number"})),r.a.createElement("label",null,"Height: ",r.a.createElement("input",{type:"number"})),r.a.createElement("label",null,"Age: ",r.a.createElement("input",{type:"number"})))),r.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}}),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("button",{className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"}},"Clear"),r.a.createElement("button",{className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"}},"Submit"))))}}]),t}(n.Component),N=a(142),k=a(143);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(k.a,{path:"/home",component:h}),r.a.createElement(k.a,{path:"/profile",component:y}),r.a.createElement(k.a,{path:"/",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(135),a(136),a(137);var C=a(141);c.a.render(r.a.createElement(C.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a(138)},81:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.8175255d.chunk.js.map