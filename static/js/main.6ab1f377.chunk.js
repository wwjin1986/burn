(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,t,a){e.exports=a(460)},231:function(e,t,a){},232:function(e,t,a){},460:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),i=a.n(l),s=(a(231),a(232),a(21)),c=a(22),o=a(24),d=a(23),m=a(25),u=a(462),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#e3f2fd"}},r.a.createElement(u.a,{className:"navbar-brand",to:""},"Burn it"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/today"},"Today")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/addexercise"},"Exercises")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/addweight"},"Weights")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/addweight"},"Plans")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/profile"},"Profile")))))}}]),t}(n.Component),p=(n.Component,a(6)),b=a.n(p),E=a(11),f=a(190),g=function(){var e=Object(E.a)(b.a.mark(function e(t,a,n){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:a,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:n,cache:"no-cache"});case 2:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(E.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},cache:"no-cache"}).then(function(e){return e.json()}).catch(function(e){return e});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=a(8),y=function(){var e=Object(E.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},cache:"no-cache"});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=function(e){if("yyyy-mm-dd"===e){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={calorie:10,workout:"running",time:"minutes",duration:0,todayTotal:0,records:[],dailyGoal:300,show:"collapse",newDailyGoal:0},a.date=N("yyyy-mm-dd"),a.fetchCalorie=function(){var e=Object(E.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://trackapi.nutritionix.com/v2/natural/exercise",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-app-key":"d1f7ab9e52b72ffdcace031cd9fb3e75","x-app-id":"04ca317f"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({query:t,gender:"female",weight_kg:50,height_cm:160,age:33})}).then(function(e){return e.json()}).then(function(e){a.setState({calorie:Math.round(e.exercises[0].nf_calories)})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSelectTime=function(e){if(a.setState({time:e.target.name}),a.state.duration>0){var t=a.state.duration;"hours"===e.target.name&&(t*=60);var n=a.state.workout+" "+t+" minutes";a.fetchCalorie(n)}},a.handleTimeChange=function(){var e=Object(E.a)(b.a.mark(function e(t){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({duration:t.target.value}),n=t.target.value,"hours"===a.state.time&&(n=60*t.target.value),r=a.state.workout+" "+n+" minutes",a.fetchCalorie(r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=Object(E.a)(b.a.mark(function e(){var t,n,r,l,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=a.state.workout,r=a.state.calorie,l=a.state.duration,"hours"===a.state.time&&(l*=60),i=JSON.stringify({time:t.toLocaleString(),calorieBurned:r,workout:n,date:a.date,duration:l}),e.next=8,g(v.apiEndPoint+"/calorie/","POST",i);case 8:return e.t0=a,e.next=11,w(v.apiEndPoint+"/calories/"+a.date+"/total");case 11:return e.t1=e.sent,e.next=14,w(v.apiEndPoint+"/calories/"+a.date);case 14:e.t2=e.sent,e.t3={todayTotal:e.t1,records:e.t2},e.t0.setState.call(e.t0,e.t3);case 17:case"end":return e.stop()}},e)})),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w(v.apiEndPoint+"/calories/"+this.date+"/total");case 3:return e.t1=e.sent,e.t2={todayTotal:e.t1},e.t0.setState.call(e.t0,e.t2),w(v.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({dailyGoal:e.dailyGoal})}),e.t3=this,e.next=10,w(v.apiEndPoint+"/calories/"+this.date);case 10:e.t4=e.sent,e.t5={records:e.t4},e.t3.setState.call(e.t3,e.t5);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSelectExercise",value:function(e){if(this.setState({workout:e}),this.state.duration>0){var t=this.state.duration;"hours"===this.state.time&&(t*=60);var a=e+" "+t+" minutes";this.fetchCalorie(a)}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card  mb-3 ml-5 mt-5",style:{borderColor:"#9cd1f8",width:"40%"}},r.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("h5",null,"Add new exercise")),r.a.createElement("div",{className:"card-body "},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Exercise"),r.a.createElement(f.SelectList,{data:["running","walking","hiit","cardio","yoga","elliptial","weight"],defaultValue:"running",onChange:function(t){return e.handleSelectExercise(t)}}))),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Time","aria-label":"Time","aria-describedby":"button-addon4",onChange:this.handleTimeChange}),r.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"button"},r.a.createElement("label",{className:"minutes"===this.state.time?"btn btn-outline-secondary active":"btn btn-outline-secondary"},r.a.createElement("input",{type:"radio",name:"minutes",checked:"minutes"===this.state.time,onChange:this.handleSelectTime}),"minutes"),r.a.createElement("label",{className:"hours"===this.state.time?"btn btn-outline-secondary active":"btn btn-outline-secondary"},r.a.createElement("input",{type:"radio",name:"hours",checked:"hours"===this.state.time,onChange:this.handleSelectTime}),"hours"))),r.a.createElement("div",{className:"mt-2"},this.state.duration>0&&r.a.createElement("span",null,"I did ",this.state.duration," ",this.state.time," ",this.state.workout,". ",r.a.createElement("br",null),"Total calories estimated: ",Math.round(this.state.calorie)," ","Calories."))),r.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("button",{type:"button",className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"},onClick:this.handleSubmit},"Submit")))),r.a.createElement("div",{name:"show records",id:"left",style:{borderColor:"#9cd1f8"}},r.a.createElement("table",{className:"table  table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Time"),r.a.createElement("th",{scope:"col"},"Workout"),r.a.createElement("th",{scope:"col"},"Duration/minutes"),r.a.createElement("th",{scope:"col"},"Calories"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,this.state.records.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.time),r.a.createElement("td",null,t.workout),r.a.createElement("td",null,t.duration),r.a.createElement("td",null,t.calorieBurned),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",name:t.id,onClick:e.handleDelete},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))))})))))}}]),t}(n.Component),C=a(33),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={height:160,heightincm:160,weight:55,age:33,unit:"kg",show:"collapse",newWeight:0,showAlert:"alert alert-success alert-dismissible fade",showInfo:"",weights:[]},a.handleSelectMeter=function(e){a.setState({unit:e.target.name}),"kg"===e.target.name?a.setState({weight:Math.round(.45359237*a.state.weight),height:Math.round(30.48*a.state.height*10)/10}):a.setState({weight:Math.round(2.20462262185*a.state.weight),height:Math.round(.0328084*a.state.height*100)/100})},a.handleEdit=function(){a.setState({show:"collapse"===a.state.show?"collapse show":"collapse"})},a.handleCancel=function(){a.setState({show:"collapse"})},a.handleNewWeightInput=function(e){a.setState({newWeight:e.target.value})},a.handleAddWeight=Object(E.a)(b.a.mark(function e(){var t,n,r,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.newWeight>0)){e.next=13;break}return t=a.state.newWeight,n=new Date,console.log(n),"lb"===a.state.unit&&(t=Math.round(.45359237*a.state.newWeight)),r=JSON.stringify({name:"Weiwei",weight:t,time:n.toLocaleString()}),e.next=8,g(v.apiEndPoint+"/profiles/Weiwei","POST",r);case 8:w(v.apiEndPoint+"/profiles/weiwei/weights").then(function(e){a.setState({weights:e,showAlert:"alert alert-success alert-dismissible fade show"}),console.log(e)}),l=JSON.stringify({name:"Weiwei",weight:t,height:160,age:33,dailyGoal:500}),g(v.apiEndPoint+"/profiles","POST",l),a.state.newWeight>a.state.weight?a.setState({showInfo:"Succeed! Your new weight is "+a.state.newWeight+" "+a.state.unit+". You gained "+(a.state.newWeight-a.state.weight)+" "+a.state.unit}):a.setState({showInfo:"Succeed! Your new weight is "+a.state.newWeight+" "+a.state.unit+". You lost "+(a.state.weight-a.state.newWeight)+" "+a.state.unit}),a.setState({weight:a.state.newWeight});case 13:case"end":return e.stop()}},e)})),a.handleDelete=function(){var e=Object(E.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(v.apiEndPoint+"/profiles/Weiwei/"+t.currentTarget.name);case 2:w(v.apiEndPoint+"/profiles/weiwei/weights").then(function(e){return e}).then(function(e){return a.setState({weights:e})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(v.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({weight:e.weight})}),w(v.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({height:e.height,heightincm:e.height})}),w(v.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({age:e.age})}),w(v.apiEndPoint+"/profiles/weiwei/weights").then(function(e){return t.setState({weights:e})});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.state.showAlert,role:"alert"},this.state.showInfo,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return e.setState({showAlert:"alert alert-success alert-dismissible fade"})}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))," "),r.a.createElement("div",{className:"card  mb-3 ml-5 ",style:{borderColor:"#9cd1f8",width:"40%"}},r.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("h5",null,"Weiwei's Personal Profile")),r.a.createElement("div",{className:"btn-group btn-group-toggle btn-sm","data-toggle":"button",style:{display:"inline-block"}},r.a.createElement("label",{className:"kg"===this.state.unit?"btn btn-sm btn-outline-secondary active":"btn btn-sm btn-outline-secondary"},r.a.createElement("input",{type:"radio",name:"kg",checked:"kg"===this.state.unit,onChange:this.handleSelectMeter}),"cm/kg"),r.a.createElement("label",{className:"lb"===this.state.unit?"btn btn-sm btn-outline-secondary active":"btn btn-sm btn-outline-secondary"},r.a.createElement("input",{type:"radio",name:"lb",checked:"lb"===this.state.unit,onChange:this.handleSelectMeter}),"ft/lb"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 ml-5"},"Weight"),r.a.createElement("div",{className:"col-7"},this.state.weight,"kg"===this.state.unit?" kg":" lb",r.a.createElement("i",{className:"fa fa-pencil-square-o ml-2","aria-hidden":"true",style:{cursor:"pointer"},onClick:this.handleEdit}),r.a.createElement("div",{className:this.state.show,id:"collapseExample"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"number",min:"0",placeholder:"Enter new weight here",step:"2.5",className:"mb-2",onChange:this.handleNewWeightInput})),r.a.createElement("div",{className:"col-3"},"kg"===this.state.unit?" kg":" lb")),r.a.createElement("div",{className:"row "},r.a.createElement("button",{className:"btn btn-sm ml-3 btn-outline-secondary",onClick:this.handleAddWeight},"Add new weight"),r.a.createElement("button",{onClick:this.handleCancel,className:"btn btn-sm ml-3 btn-outline-secondary"},"Close")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 ml-5"},"Height"),r.a.createElement("div",{className:"col-7"},this.state.height,"kg"===this.state.unit?"cm":"ft")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 ml-5"},"Age"),r.a.createElement("div",{className:"col-7"},this.state.age))),r.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}}),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("button",{type:"button",className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"}},"Edit")))),r.a.createElement("div",null,r.a.createElement("div",{name:"show records",id:"left"},r.a.createElement("table",{className:"table  table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Time"),r.a.createElement("th",{scope:"col"},"Weight"),r.a.createElement("th",{scope:"col"},"BMI"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,this.state.weights.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.time),r.a.createElement("td",null,t.weight," Kg"),r.a.createElement("td",null,Math.round(1e5*t.weight/e.state.heightincm/e.state.heightincm)/10),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",name:t.id,onClick:e.handleDelete},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))))})))),r.a.createElement("div",{id:"right"},r.a.createElement(C.e,{width:500,height:300,data:this.state.weights},r.a.createElement(C.g,{dataKey:"time"},r.a.createElement(C.b,{value:"Date",offset:0,position:"insideBottom"})),r.a.createElement(C.h,{dataKey:"weight",label:{value:"weight",angle:-90,position:"insideLeft"}}),r.a.createElement(C.a,{stroke:"#eee",strokeDasharray:"5 5"}),r.a.createElement(C.c,{verticalAlign:"top",height:36}),r.a.createElement(C.d,{name:"weight records",type:"monotone",dataKey:"weight",stroke:"#82ca9d"}),r.a.createElement(C.f,null)))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={calorie:10,workout:"running",time:"minutes",duration:0,todayTotal:0,records:[],dailyGoal:300,show:"collapse",newDailyGoal:0},a.date=N("yyyy-mm-dd"),a.handleCancel=function(){a.setState({show:"collapse"})},a.handleEdit=function(){a.setState({show:"collapse"===a.state.show?"collapse show":"collapse"})},a.handleChangeDailyGoal=function(e){a.setState({newDailyGoal:e.target.value})},a.handleSave=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.newDailyGoal,e.next=3,g(v.apiEndPoint+"/profiles/Weiwei/"+t,"POST",{});case 3:a.setState({dailyGoal:a.state.newDailyGoal});case 4:case"end":return e.stop()}},e)})),a.handleDelete=function(){var e=Object(E.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(v.apiEndPoint+"/profiles/Weiwei/calories/"+t.currentTarget.name);case 2:return e.t0=a,e.next=5,w(v.apiEndPoint+"/calories/"+a.date);case 5:return e.t1=e.sent,e.next=8,w(v.apiEndPoint+"/calories/"+a.date+"/total");case 8:e.t2=e.sent,e.t3={records:e.t1,todayTotal:e.t2},e.t0.setState.call(e.t0,e.t3);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w(v.apiEndPoint+"/calories/"+this.date+"/total");case 3:return e.t1=e.sent,e.t2={todayTotal:e.t1},e.t0.setState.call(e.t0,e.t2),w(v.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({dailyGoal:e.dailyGoal})}),e.t3=this,e.next=10,w(v.apiEndPoint+"/calories/"+this.date);case 10:e.t4=e.sent,e.t5={records:e.t4},e.t3.setState.call(e.t3,e.t5);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card  mb-3 ml-5 mt-5",style:{borderColor:"#9cd1f8",width:"40%"}},r.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("h5",null,"Today's Workout"),this.date),r.a.createElement("div",{className:"card-body "}," ",r.a.createElement("span",null,this.state.todayTotal," Caloreis Burned"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:this.state.todayTotal/this.state.dailyGoal>=1?"100%":Math.round(this.state.todayTotal/this.state.dailyGoal*100)+"%"},"aria-valuenow":this.state.todayTotal,"aria-valuemin":"0","aria-valuemax":this.state.dailyGoal},this.state.todayTotal/this.state.dailyGoal>=1?"100%":Math.round(this.state.todayTotal/this.state.dailyGoal*100)+" %"))),r.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},r.a.createElement("div",{style:{display:"inline-block"}},"Your goal to burn daliy is ",this.state.dailyGoal," Calories",r.a.createElement("i",{className:"fa fa-pencil-square-o ml-2","aria-hidden":"true",style:{cursor:"pointer"},onClick:this.handleEdit}),r.a.createElement("div",{className:this.state.show,id:"collapseExample"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"number",min:"0",placeholder:"Enter your daily goal",step:"2.5",className:"mb-2",onChange:this.handleChangeDailyGoal})),r.a.createElement("div",{className:"col-4"},"Calories ")),r.a.createElement("div",{className:"row "},r.a.createElement("button",{className:"btn btn-sm ml-3 btn-outline-secondary",onClick:this.handleSave},"Save"),r.a.createElement("button",{onClick:this.handleCancel,className:"btn btn-sm ml-3 btn-outline-secondary"},"Close"))))))),r.a.createElement("div",{name:"show records",className:"mb-3 ml-5 mt-5",style:{borderColor:"#9cd1f8",width:"40%"}},r.a.createElement("table",{className:"table  table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Time"),r.a.createElement("th",{scope:"col"},"Workout"),r.a.createElement("th",{scope:"col"},"Duration/minutes"),r.a.createElement("th",{scope:"col"},"Calories"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,this.state.records.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.time),r.a.createElement("td",null,t.workout),r.a.createElement("td",null,t.duration),r.a.createElement("td",null,t.calorieBurned),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",name:t.id,onClick:e.handleDelete},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))))})))))}}]),t}(n.Component),O=a(464),j=a(465);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(j.a,{path:"/today",component:x}),r.a.createElement(j.a,{path:"/addexercise",component:k}),r.a.createElement(j.a,{path:"/addweight",component:S}),r.a.createElement(j.a,{path:"/profile",component:S}),r.a.createElement(j.a,{path:"/",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(457),a(458),a(459);var W=a(463);i.a.render(r.a.createElement(W.a,{basename:"/burn"},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={apiEndPoint:"http://localhost:8080"}}},[[226,1,2]]]);
//# sourceMappingURL=main.6ab1f377.chunk.js.map