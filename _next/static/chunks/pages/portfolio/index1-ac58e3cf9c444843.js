(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{605:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/index1",function(){return n(5654)}])},5654:function(e,t,n){"use strict";n.r(t);var o=n(5893),s=n(7294),r=n(5477),l=n(2836),c=n(3881),i=n(8805),u=n(864);t.default=()=>{let e=(0,s.useRef)(null),t=(0,s.useRef)(e=>{}),n=(0,s.useRef)([{panel:1,offset:0,action:()=>{setTimeout(()=>{let t=document.querySelector(".quick-facts");t&&(t.style.display="block",e.current&&(e.current.querySelector("#test").style.height=e.current.querySelector(".about-paragraph").offsetHeight+e.current.querySelector(".quick-facts").offsetHeight+50+"px"),setTimeout(()=>{t&&(t.style.opacity="100%"),n.current[0].done=!0},1250))},100)},done:!1},{panel:0,offset:0,action:()=>t.current(0),done:!1},{panel:1,offset:.05,action:()=>t.current(1),done:!1},{panel:3,offset:.05,action:()=>t.current(2),done:!1}]),a=(0,s.useRef)(),f=()=>{n.current.forEach(e=>{!1===e.done&&window.scrollY>=a.current[e.panel].offsetTop+e.offset*window.innerHeight&&e.action()})};(0,s.useEffect)(()=>{window.addEventListener("scroll",f),a.current=document.querySelectorAll("*[data-panel]")},[]);let d=e=>{let t=0;for(let e=1;e<a.current.length;e++)console.log(e,Math.abs(window.scrollY-Math.abs(a.current[e].offsetTop)),Math.abs(window.scrollY-Math.abs(a.current[t].offsetTop))),Math.abs(window.scrollY-Math.abs(a.current[e].offsetTop))<Math.abs(window.scrollY-Math.abs(a.current[t].offsetTop))&&(t=e);(1===e&&t!==a.current.length-1||-1===e&&0!==t)&&(t+=e),window.scrollTo({left:window.scrollX,top:a.current[t].offsetTop+.1*window.innerHeight,behavior:"smooth"})};return(0,o.jsxs)("div",{className:"portfolio",children:[(0,o.jsxs)("div",{className:"scroll-btns",children:[(0,o.jsx)("button",{className:"scroll-btn",onClick:()=>d(-1),children:(0,o.jsx)(()=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),(0,o.jsx)("polyline",{points:"5 12 12 5 19 12"})]}),{})}),(0,o.jsx)("button",{className:"scroll-btn",onClick:()=>d(1),children:(0,o.jsx)(()=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,o.jsx)("polyline",{points:"19 12 12 19 5 12"})]}),{})})]}),(0,o.jsx)(r.Z,{test:t}),(0,o.jsxs)("div",{className:"potfolio-panels",ref:e,children:[(0,o.jsx)(l.Z,{num:0}),(0,o.jsx)(l.Z,{num:1,children:(0,o.jsx)(c.Z,{})}),(0,o.jsx)(l.Z,{num:2}),(0,o.jsx)(l.Z,{num:3,children:(0,o.jsx)(i.Z,{})}),(0,o.jsx)(l.Z,{num:4}),(0,o.jsx)(l.Z,{num:5,children:(0,o.jsx)(u.Z,{})})]})]})}}},function(e){e.O(0,[555,774,888,179],function(){return e(e.s=605)}),_N_E=e.O()}]);