(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(3),o=t.n(c),i=(t(14),t.p+"static/media/logo.db36153e.svg"),s=(t(15),t(1));var u=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(s.jsx)("p",{children:"Hello World"})]})})},d=t(2),l=t(5),m=t.n(l),p=t(7);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var h=Object(d.b)("counter/fetchCount",function(){var e=Object(p.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),v=Object(d.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),j=v.actions,b=(j.increment,j.decrement,j.incrementByAmount,v.reducer),g=Object(d.a)({reducer:{counter:b}}),w=t(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(w.a,{store:g,children:Object(s.jsx)(u,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b4c5a783.chunk.js.map