(this["webpackJsonpdirectory-app"]=this["webpackJsonpdirectory-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),s=(n(13),n(4)),i=n(5),u=n(6),l=n(1),h=n(7),f=(n(14),function(e){var t=e.user,n=t.id,r=t.name,c=t.email;return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"user",src:"https://robohash.org/".concat(n,"?set=set3&size=180x180")}),a.a.createElement("h2",null,r),a.a.createElement("p",null,c))}),d=(n(15),function(e){return a.a.createElement("div",{className:"card-list"},e.users.map((function(e){return a.a.createElement(f,{key:e.id,user:e})})))}),p=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})});n(17);function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=function(e){Object(h.a)(r,e);var t,n=(t=r,function(){var e,n=Object(l.a)(t);if(m()){var r=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(u.a)(this,e)});function r(){var e;return Object(s.a)(this,r),(e=n.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={users:[],searchField:""},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Directory App"),a.a.createElement(p,{placeholder:"Search Users",handleChange:this.handleChange}),a.a.createElement(d,{users:r}))}}]),r}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.93258d5c.chunk.js.map