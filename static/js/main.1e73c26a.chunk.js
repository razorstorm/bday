(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),s=a.n(r),l=a(18),i=(a(30),a(5)),c=a(6),u=a(8),m=a(7),h=a(9),d=(a(12),a(13),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).headerRef=o.a.createRef();var n={y:window.pageYOffset?document.documentElement.scrollTop:document.body.scrollTop};return a.state={scrollTop:n.y},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"_onScroll",value:function(e){var t={y:window.pageYOffset?document.documentElement.scrollTop:document.body.scrollTop};this.setState({scrollTop:t.y}),console.log(t.y)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._onScroll.bind(this))}},{key:"render",value:function(){return o.a.createElement("header",{className:this.props.className+" intro-header",ref:this.headerRef},o.a.createElement("div",{className:"headerBG",style:{background:'url("'.concat("/portfolio2019/images/header.jpeg",'") no-repeat scroll center / cover'),position:"fixed"}}),o.a.createElement("div",{className:"headerShadow"}),this.props.children)}}]),t}(n.Component)),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=((new Date-new Date("04/26/1994").getTime())/1e3).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o.a.createElement("div",{className:"aboutmeWrapper homePageSection",id:"about"},o.a.createElement("section",{className:"aboutmeSection"},o.a.createElement("h2",{className:"pageTitle"},"Karen's 26th Birthday"),o.a.createElement("h4",{className:"seconds"},"Fun fact! You are currently ",o.a.createElement("strong",null,e)," seconds old!"),o.a.createElement("div",{className:"aboutProfilePicWrapper"},o.a.createElement("img",{className:"aboutProfilePic",alt:"profile",src:"/portfolio2019/images/karen.jpeg"})),o.a.createElement("h3",{className:"titleName"},"To my favorite person,"),o.a.createElement("p",{className:"aboutme"},'Karen, a year ago when I first met you, you told me that you are taking a bootcamp to learn how to program. My first thoughts were "ugh you too huh?", but as I talked to you more about it I could see this deep passion for engineering. Even at that moment I could tell you are someone who does not give up on their dreams and truly believe in using engineering to help improve the world.'),o.a.createElement("p",{className:"aboutme"},"Half a year ago when I first started trying to teach you, I saw this passion for learning that's rare to find even amongst people who are already engineers. At this point we first started trying algos. You were completely lost but never gave up hope."),o.a.createElement("p",{className:"aboutme"},"4 months ago you told me that this has been the hardest time in your life. Yet even on the hardest days you never gave up, and you never lost your passion to learn."),o.a.createElement("p",{className:"aboutme"},"Since I've been back and you've quit Apple, you finally had time to dedicate to studying, and in 3 short months you've gone from barely knowing how to write a function to crushing leetcode mediums! You come up with algos better than mine sometimes now!"),o.a.createElement("p",{className:"aboutme"},"Now look at yourself. You are crushing it at algo and are designing beautiful websites."),o.a.createElement("p",{className:"aboutme"},"I'm incredibly proud of all the progress we've made in the past months. I regret not coming back to SF earlier, but I am so glad to have had the opportunity to be on this journey with you. We're in the final stretch now and I have no doubts that you'll make an amazing frontend eng very very soon!"),o.a.createElement("p",{className:"aboutme"},"2020 has been a hell of a trip, but this will be your year to shine. Let's make 26 into the best time in your life so far!"),o.a.createElement("p",{className:"aboutme"},"Happy birthday to the the prettiest and smortest new frontend engineer the world has ever seen!")))}}]),t}(n.Component),b=a(16),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home",id:"home"},o.a.createElement(d,{className:"home-header"},o.a.createElement("div",{className:"container h-100"},o.a.createElement("div",{className:"row h-100 align-items-center"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"HAPPY BIRTHDAY"),o.a.createElement("h2",null,"KAREN SIN"),o.a.createElement("h4",null,"React Master | Algo Genius | Super Fun | Cute AF"),o.a.createElement(b.HashLink,{to:"/#projects",className:"btn collab-btn"},o.a.createElement("i",{className:""}),"Learn more about my birthday"))))),o.a.createElement("section",{className:"scrolldown"},o.a.createElement(b.HashLink,{to:"/#projects"},o.a.createElement("i",{className:"fas fa-angle-double-down"})))),o.a.createElement("div",{className:"homeContent"},o.a.createElement("div",{className:"projBGBG",style:{background:'url("'.concat("/portfolio2019/images/projects_background.jpg",'") no-repeat center / cover')}},o.a.createElement("div",{className:"projBGShadow"},o.a.createElement("img",{alt:"background",className:"projBG",src:"/portfolio2019/images/projects_background.jpg"}))),o.a.createElement(p,null)))}}]),t}(n.Component),f=(a(37),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"bubble",style:{left:this.props.x,top:this.props.y,transform:"scale("+this.props.size+")"}})}}]),t}(n.Component));function v(e,t){return Math.random()*(t-e)+e}var g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={x:0,y:0,bubbles:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"_onMouseMove",value:function(e){var t=+new Date;if(t>this.state.lastBubbleStamp+v(50,1e3)){var a=Math.random()>.5?-1:1;this.state.bubbles.push({x:e.clientX,y:e.clientY,size:v(.02,.14),direction:a,lastTurnTime:t,lastGrowTime:t}),this.setState({lastBubbleStamp:t})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateBubbles",value:function(){if(this.state){var e=+new Date,t=this.state.bubbles.map(function(t){var a=t.direction,n=t.lastTurnTime,o=t.lastGrowTime,r=t.size;return e>n+v(2e3,6e3)&&(a=-a,n=e),e>o+v(100,200)&&(o=e,r+=v(.001,.003)),t.y<0?null:{x:t.x+.3*a,y:t.y-2.5,size:r,direction:a,lastTurnTime:n,lastGrowTime:o}}).filter(function(e){return null!==e});this.setState({bubbles:t})}}},{key:"componentDidMount",value:function(){this.setState({lastBubbleStamp:+new Date}),this.interval=setInterval(this.updateBubbles.bind(this),20)}},{key:"render",value:function(){var e=this.state.bubbles.map(function(e,t){return o.a.createElement(f,{x:e.x,y:e.y,size:e.size,key:t})});return o.a.createElement("div",{className:"App",onMouseMove:this._onMouseMove.bind(this)},o.a.createElement("div",{className:"bob"},e),o.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(22),E=a(14);s.a.render(o.a.createElement(l.a,{basename:"/portfolio2019"},o.a.createElement(w.a,null,o.a.createElement(E.a,{exact:!0,path:"/",component:g}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.1e73c26a.chunk.js.map