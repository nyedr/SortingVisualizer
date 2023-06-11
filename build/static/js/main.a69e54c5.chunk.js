(this.webpackJsonpsortingalgorithmsvisualizer=this.webpackJsonpsortingalgorithmsvisualizer||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var r,i,o,a,s,c,l,u,d,b,f,h,p=t(0),g=t(14),x=t(8),j=t(4),m=t(2),v=t(3),O=v.b.button(r||(r=Object(m.a)(["\n  background-color: hsl(",", 88%, 70%);\n  cursor: pointer;\n  border: none;\n  padding: 0.5em 1.2em;\n  border-radius: 7px;\n  color: white;\n  font-weight: bold;\n  transition: 0.325s ease-in-out;\n  white-space: nowrap;\n  flex-basis: 7.5rem;\n\n  &:hover {\n    transform: scale(1.05);\n    background-color: hsl(",", 88%, 60%);\n  }\n"])),(function(e){return e.hue}),(function(e){return e.hue})),y=v.b.div(i||(i=Object(m.a)(["\n  display: flex;\n  gap: 0.7rem;\n\n  @media (max-width: 400px) {\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),w=t(1),S=["Quick","Bubble","Merge"],C=function(e){var n=e.algorithm,t=e.index,r=e.setAlgorithm,i=100*t;return Object(w.jsx)(O,{hue:i,onClick:function(){return function(e){switch(e){case"Quick":return void r(se.QUICK);case"Merge":return void r(se.MERGE);case"Bubble":return void r(se.BUBBLE);default:r(se.BUBBLE)}}(n)},children:"".concat(n," Sort")})},k=function(e){var n=e.setAlgorithm;return Object(w.jsx)(y,{children:S.map((function(e,t){return Object(w.jsx)(C,{setAlgorithm:n,index:t,algorithm:e},t)}))})},E=v.b.div(o||(o=Object(m.a)(["\n  display: flex;\n  gap: 1rem;\n  justify-content: space-evenly;\n  width: 100%;\n  flex-wrap: wrap;\n"]))),B=v.b.button(a||(a=Object(m.a)(["\n  padding: 0.4em 1.3em;\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n  color: white;\n  font-weight: bold;\n  font-size: 1.1rem;\n  transition: 0.325s ease-in-out;\n  background-color: ",";\n\n  &:hover {\n    transform: scale(1.05);\n    background-color: ",";\n  }\n"])),(function(e){return e.bg}),(function(e){return e.bgh})),A=v.b.input(s||(s=Object(m.a)(["\n  padding: 3px;\n  cursor: pointer;\n"]))),I=v.b.div(c||(c=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  & > label {\n    font-size: 1.3rem;\n  }\n"]))),z=v.b.div(l||(l=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n"]))),R=v.b.div(u||(u=Object(m.a)(["\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n"]))),L=v.b.button(d||(d=Object(m.a)(["\n  box-shadow: ",";\n  padding: 0.4em 1.3em;\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: 0.325s ease-in-out;\n  font-size: 1.1rem;\n  white-space: nowrap;\n"])),(function(e){return e.showData?"inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px #fff":"0px 0px rgba(0, 0, 0, 0.1)"})),U=function(e){var n=e.getRandomArray,t=e.lengthInputRef,r=e.setSize,i=e.setIsSorting,o=e.setSortingSpeed,a=e.isSorted,s=e.showData,c=e.setShowData;return Object(w.jsxs)(E,{children:[Object(w.jsxs)(I,{children:[Object(w.jsxs)(z,{children:[Object(w.jsx)("label",{htmlFor:"sort-length",children:"Size:"}),Object(w.jsx)(A,{ref:t,onChange:function(e){return r(+e.target.value)},type:"range",max:70,min:10,id:"sort-length"})]}),Object(w.jsxs)(z,{children:[Object(w.jsx)("label",{htmlFor:"sort-speed",children:"Speed:"}),Object(w.jsx)(A,{onChange:function(e){return o(+e.target.value)},type:"range",max:99,min:1,id:"sort-speed"})]})]}),Object(w.jsxs)(R,{children:[Object(w.jsx)(B,{bg:"hsl(27, 87%, 60%)",bgh:"hsl(27, 87%, 50%)",onClick:function(){return!Array.isArray(n)&&n()},children:"Shuffle"}),Object(w.jsx)(B,{onClick:function(){a&&n(),i(!0)},bg:"#999",bgh:"#777",children:"Sort"}),Object(w.jsx)(L,{showData:s,onClick:function(){return c((function(e){return!e}))},children:"Big O"})]})]})},D=Object(v.a)(b||(b=Object(m.a)(['\n  /* Box sizing rules */\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  /* Remove default margin */\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  figure,\n  blockquote,\n  dl,\n  dd {\n    margin: 0;\n  }\n\n  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\n  ul[role="list"],\n  ol[role="list"] {\n    list-style: none;\n  }\n\n  /* Set core root defaults */\n  html:focus-within {\n    scroll-behavior: smooth;\n  }\n\n  /* Set core body defaults */\n  body {\n    min-height: 100%;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n    font-family: "Roboto";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f9f9f9;\n    overflow-x: hidden;\n  }\n\n  html, #root, body {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  /* A elements that don\'t have a class get default styles */\n  a:not([class]) {\n    text-decoration-skip-ink: auto;\n  }\n\n  /* Make images easier to work with */\n  img,\n  picture {\n    max-width: 100%;\n    display: block;\n  }\n\n  /* Inherit fonts for inputs and buttons */\n  input,\n  button,\n  textarea,\n  select {\n    font: inherit;\n  }\n\n  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n  @media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n      scroll-behavior: auto;\n    }\n\n    *,\n    *::before,\n    *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n']))),M=v.b.div(f||(f=Object(m.a)(["\n  width: max(75vw, 300px);\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1.3rem;\n  border-radius: 15px;\n  background-color: white;\n  -webkit-box-shadow: 10px 15px 13px -1px rgba(0, 0, 0, 0.11);\n  -moz-box-shadow: 10px 15px 13px -1px rgba(0, 0, 0, 0.11);\n  box-shadow: 10px 15px 13px -1px rgba(0, 0, 0, 0.11);\n  gap: 1rem;\n\n  @media (max-width: 510px) {\n    width: 100%;\n    height: 100%;\n    justify-content: space-evenly;\n  }\n"]))),Q=v.b.h1(h||(h=Object(m.a)(["\n  font-size: 1.6rem;\n  text-align: center;\n"]))),G=t(5),K=function(e){for(var n=[],t=0;t<e.length;t++)for(var r=0;r<e.length-t-1;r++){if(e[r]>e[r+1]){var i=e[r];e[r]=e[r+1],e[r+1]=i,n.push({array:Object(G.a)(e),indexes:[r,r+1]})}}return n};function W(e,n,t,r){if(n!==t){var i=Math.floor((n+t)/2);W(e,n,i,r),W(e,i+1,t,r),function(e,n,t,r,i){for(var o=n,a=n,s=t+1,c=e.slice();a<=t&&s<=r;){c[a]<=c[s]?e[o++]=c[a++]:e[o++]=c[s++];var l={array:e.slice(),indexes:[a,s,o]};i.push(l)}for(;a<=t;){e[o++]=c[a++];var u={array:e.slice(),indexes:[a,o]};i.push(u)}for(;s<=r;){e[o++]=c[s++];var d={array:e.slice(),indexes:[s,o]};i.push(d)}}(e,n,i,t,r)}}var H=function(e){var n=[];return W(e,0,e.length-1,n),n},J=function(e){return Object.entries(e).sort((function(e,n){return e[0]<n[0]?-1:e[0]>n[0]?1:0}))},F=function e(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++){if(typeof n[r]!==typeof t[r])return!1;if(Object.prototype.toString.call(n[r])===""+{}){if(!e(J(n[r]),J(t[r])))return!1}else if(Array.isArray(n[r])){if(!e(n[r],t[r]))return!1}else if(n[r]!==t[r])return!1}return!0};var N,P,T,q,V,X,Y=function(e){var n=[];return e.length<=1?n:(function t(r,i){if(r<i){var o=function(t,r){var i=t,o=e[t];n.push({array:Object(G.a)(e),indexes:[t,i],pivot:r});for(var a=t+1;a<=r;a++)if(n.push({array:Object(G.a)(e),indexes:[a,i],pivot:r}),e[a]<o){i++,n.push({array:Object(G.a)(e),indexes:[a,i],pivot:r});var s=[e[i],e[a]];e[a]=s[0],e[i]=s[1],n.push({array:Object(G.a)(e),indexes:[a,i],pivot:r})}var c=[e[i],e[t]];return e[t]=c[0],e[i]=c[1],n.push({array:Object(G.a)(e),indexes:[t,i],pivot:r}),i}(r,i);t(r,o),t(o+1,i)}}(0,e.length-1),function(e){for(var n=new Set,t=[],r=0;r<e.length;r++){var i=JSON.stringify(e[r]);n.has(i)||t.push(e[r]),n.add(i)}return t}(n))},Z=v.b.div(N||(N=Object(m.a)(["\n  position: absolute;\n  background-color: ",";\n  border: 1px solid;\n\n  &:hover > div {\n    display: block;\n  }\n"])),(function(e){return e.isPivot?"hsl(300, 83%, 65%)":"hsl(".concat(e.lineHue,", 83%, 65%)")})),$=v.b.div(P||(P=Object(m.a)(["\n  position: relative;\n  transform: translate(-50%, -50%);\n  transform: rotate(180deg);\n  max-width: 100%;\n  background-color: #fafafa;\n  width: 100%;\n  height: 300px;\n  border-radius: 15px;\n"]))),_=function(e){var n=e.array,t=e.currentLine,r=Object(p.useRef)(null),i=Object(p.useState)(0),o=Object(j.a)(i,2)[1],a=function(){var e,n;o(null!==(e=null===(n=r.current)||void 0===n?void 0:n.offsetWidth)&&void 0!==e?e:0)};Object(p.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]);var s=function(e){var n,i,o,a,s,c,l=e.num,u=e.arrLength,d=e.idx,b=(null!==(n=null===(i=r.current)||void 0===i?void 0:i.offsetWidth)&&void 0!==n?n:10)/u,f={height:(null!==(o=null===(a=r.current)||void 0===a?void 0:a.offsetHeight)&&void 0!==o?o:300)/u*l,left:d*b,width:b},h=!(null===t||void 0===t||!t.isSorting)&&(null===t||void 0===t||null===(s=t.lineData)||void 0===s?void 0:s.currentIndexes.includes(d)),p=!(null===t||void 0===t||!t.isSorting)&&(null===t||void 0===t?void 0:t.lineData.pivot)===d,g=h?100*(null===t||void 0===t||null===(c=t.lineData)||void 0===c?void 0:c.currentIndexes.indexOf(d))+50:212;return Object(w.jsx)(Z,{lineHue:g,isPivot:p,style:f})};return Object(w.jsx)($,{ref:r,children:n.map((function(e,n,t){var r=t.length;return Object(w.jsx)(s,{num:e,arrLength:r,idx:n},n)}))})},ee=function(e){var n=e.array,t=e.algorithm,r=e.isSorting,i=e.setArray,o=e.setIsSorting,a=e.sortingSpeed,s=e.setIsSorted,c=Object(p.useState)({currentIndexes:[]}),l=Object(j.a)(c,2),u=l[0],d=l[1],b=2e3/n.length*((100-a)/100),f=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(null!=t[r]&&"indexes"in t[r]){d({currentIndexes:t[r].indexes,pivot:t[r].pivot});var a=n.sort((function(e,n){return e-n}));F(t[r].array,a)?(console.log("Animation Done"),s(!0),o(!1)):setTimeout((function(){return e(t,r+1)}),b),i(t[r].array)}};Object(p.useEffect)((function(){r&&function(){var e,r,i,o=[];switch(t){case se.BUBBLE:o=null!==(e=K(n))&&void 0!==e?e:[];break;case se.MERGE:o=null!==(r=H(n))&&void 0!==r?r:[];break;case se.QUICK:o=null!==(i=Y(n))&&void 0!==i?i:[];break;default:throw new Error(t+" is not a valid algorithm.")}f(o)}()}),[r]);var h={array:n,currentLine:{isSorting:r,lineData:u}};return Object(w.jsx)(_,Object(x.a)({},h))},ne=function(e){var n=e.size,t=e.setIsSorted,r=Object(p.useState)([]),i=Object(j.a)(r,2),o=i[0],a=i[1],s=function(){t(!1);var e=Array.from({length:n},(function(e,n){return n+1}));e.sort((function(){return Math.random()-.5})),a(e)};return Object(p.useEffect)((function(){s()}),[]),{array:o,setArray:a,getRandomArray:s}},te=v.b.div(T||(T=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #404040;\n  border-radius: 10px;\n  padding: 1rem;\n  gap: 1rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n"]))),re=v.b.div(q||(q=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 1.5rem;\n  width: 100%;\n"]))),ie=v.b.span(V||(V=Object(m.a)(["\n  font-size: 1.3rem;\n"]))),oe=v.b.div(X||(X=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ae=function(e){var n=e.algorithm,t=function(e){switch(e){case se.BUBBLE:return{timeComplexity:{worstCase:"O(n^2)",averageCase:"O(n^2)"},spaceComplexity:{worstCase:"O(1)",averageCase:"O(1)"}};case se.MERGE:return{timeComplexity:{worstCase:"O(n * log(n))",averageCase:"O(n * log(n))"},spaceComplexity:{worstCase:"O(n)",averageCase:"O(n)"}};case se.QUICK:return{timeComplexity:{worstCase:"O(n^2)",averageCase:"O(n * log(n))"},spaceComplexity:{worstCase:"O(n)",averageCase:"O(log(n))"}};default:return{timeComplexity:{worstCase:"O(n^2)",averageCase:"O(n^2)"},spaceComplexity:{worstCase:"O(1)",averageCase:"O(1)"}}}},r=Object(p.useState)(t(n)),i=Object(j.a)(r,2),o=i[0],a=i[1];return Object(p.useEffect)((function(){a(t(n))}),[n]),Object(w.jsxs)(te,{children:[Object(w.jsxs)(oe,{children:[Object(w.jsx)(ie,{children:"Time Complexity"}),Object(w.jsxs)(re,{children:[Object(w.jsxs)("span",{children:["Worst case: ",o.timeComplexity.worstCase]}),Object(w.jsxs)("span",{children:["Average case: ",o.timeComplexity.averageCase]})]})]}),Object(w.jsxs)(oe,{children:[Object(w.jsx)(ie,{children:"Space Complexity"}),Object(w.jsxs)(re,{children:[Object(w.jsxs)("span",{children:["Worst case: ",o.spaceComplexity.worstCase]}),Object(w.jsxs)("span",{children:["Average case: ",o.spaceComplexity.averageCase]})]})]})]})},se=function(e){return e.BUBBLE="BUBBLE",e.QUICK="QUICK",e.MERGE="MERGE",e}({});function ce(){var e=Object(p.useState)(se.BUBBLE),n=Object(j.a)(e,2),t=n[0],r=n[1],i=Object(p.useState)(20),o=Object(j.a)(i,2),a=o[0],s=o[1],c=Object(p.useState)(!1),l=Object(j.a)(c,2),u=l[0],d=l[1],b=ne({size:a,setIsSorted:d}),f=b.array,h=b.setArray,g=b.getRandomArray,m=Object(p.useState)(!1),v=Object(j.a)(m,2),O=v[0],y=v[1],S=Object(p.useState)(99),C=Object(j.a)(S,2),E=C[0],B=C[1],A=Object(p.useRef)(null),I=Object(p.useState)(!1),z=Object(j.a)(I,2),R=z[0],L=z[1];Object(p.useEffect)((function(){Array.isArray(g)||g(),null!=A.current&&(A.current.value=""+a)}),[a]);var G=t.slice(0,1)+t.slice(1).toLowerCase(),K={getRandomArray:g,lengthInputRef:A,setSize:s,setIsSorting:y,setSortingSpeed:B,isSorted:u,showData:R,setShowData:L},W={array:f,algorithm:t,isSorting:O,setArray:h,setIsSorting:y,sortingSpeed:E,setIsSorted:d};return Object(w.jsxs)(M,{children:[Object(w.jsx)(D,{}),Object(w.jsxs)(Q,{children:["Sorting Algorithm Visualizer: ",G]}),Object(w.jsx)(U,Object(x.a)({},K)),ee(W),R&&Object(w.jsx)(ae,{algorithm:t}),Object(w.jsx)(k,{setAlgorithm:r})]})}var le=document.getElementById("root");if(!le)throw new Error("Unable to load application: No root element.");Object(g.createRoot)(le).render(Object(w.jsx)(p.StrictMode,{children:Object(w.jsx)(ce,{})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a69e54c5.chunk.js.map