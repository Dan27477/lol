(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1122:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return xn}));var r,c,a,i,s,o,u,l,b,j,d,x=n(3),p=n.n(x),f=n(12),O=n(17),h=n(0),m=n.n(h).a.createContext({mostRecentLotteryNumber:0,historyError:!1,historyData:[]}),g=n(11),v=n.n(g),y=n(455),w=n(58),k=n(278),S=n(398),C=n(397),L=(n(28),n(19)),N=n(23),D=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r,c,a,i,s,o,u,l,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(w.b)(),c=new r.eth.Contract(k,Object(L.m)()),a=new y.b(t),i=[],!(n.length>100)){e.next=13;break}s=0,o=p.a.mark((function e(){var t,r,o,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.slice(100*s,100*(s+1)),r=t.map((function(e){return[e[0].toLowerCase(),a.encodeFunctionData(e[1],e[2])]})),e.next=4,c.methods.aggregate(r).call();case 4:o=e.sent,u=o.returnData,s++,i=i.concat(u.map((function(e,n){return a.decodeFunctionResult(t[n][1],e)})));case 8:case"end":return e.stop()}}),e)}));case 7:if(!(s<n.length/100)){e.next=11;break}return e.delegateYield(o(),"t0",9);case 9:e.next=7;break;case 11:e.next=19;break;case 13:return u=n.map((function(e){return[e[0].toLowerCase(),a.encodeFunctionData(e[1],e[2])]})),e.next=16,c.methods.aggregate(u).call();case 16:l=e.sent,b=l.returnData,i=b.map((function(e,t){return a.decodeFunctionResult(n[t][1],e)}));case 19:return e.abrupt("return",i);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(p.a.mark((function e(t,n,r,c){var a,i,s,o,u,l,b,j,d,x;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,t.methods.issueIndex().call();case 4:e.t0=e.sent;case 5:return a=e.t0,e.next=8,A(n,r);case 8:return i=e.sent,s=Array.apply(null,{length:i}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=12,D(S,s);case 12:return o=e.sent,u=o.map((function(e){return e.toString()})),l=u.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=17,D(S,l);case 17:return b=e.sent,j=[],b.forEach(function(){var e=Object(f.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new v.a(t).eq(a)&&j.push(u[n]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d=j.map((function(e){return[n.options.address,"getLotteryNumbers",[e]]})),e.next=23,D(S,d);case 23:return x=e.sent,e.next=26,E(t);case 26:return e.abrupt("return",x);case 27:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.balanceOf(n).call());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(p.a.mark((function e(t,n,r){var c,a,i,s,o,u,l,b,j,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return e.next=4,A(n,r);case 4:return c=e.sent,a=Array.apply(null,{length:c}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=8,D(S,a);case 8:return i=e.sent,s=i.map((function(e){return e.toString()})),o=s.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=13,D(S,o);case 13:return u=e.sent,l=s.filter((function(e,t){return!u[t][0]})),b=l.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=18,D(C,b);case 18:return j=e.sent,d=[],j.forEach((function(e,t){e>0&&d.push(l[t])})),d.length>200&&(d=d.slice(0,200)),e.prev=22,e.abrupt("return",t.methods.multiClaim(d).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 26:return e.prev=26,e.t0=e.catch(22),e.abrupt("return",console.error(e.t0));case 29:case"end":return e.stop()}}),e,null,[[22,26]])})));return function(t,n,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(p.a.mark((function e(t,n,r){var c,a,i,s,o,u,l,b,j,d,x,O,h,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.issueIndex().call();case 3:return c=e.sent,e.next=6,A(n,r);case 6:return a=e.sent,i=Array.apply(null,{length:a}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=10,D(S,i);case 10:return s=e.sent,o=s.map((function(e){return e.toString()})),u=o.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=15,D(S,u);case 15:return l=e.sent,b=o.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=19,D(S,b);case 19:return j=e.sent,e.next=22,E(t);case 22:return d=e.sent,x=[],l.forEach(function(){var e=Object(f.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(d||t.toString()!==c)&&(j[n][0]||x.push(o[n]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),O=x.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=28,D(C,O);case 28:return h=e.sent,m=h.reduce((function(e,t){return v.a.sum(e,t)}),N.d),e.abrupt("return",m);case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0);case 36:return e.abrupt("return",N.d);case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.drawed().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,c,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,r=[],e.next=6,t.methods.drawed().call();case 6:if((c=e.sent)||0!==parseInt(n,10)){e.next=9;break}return e.abrupt("return",[0,0,0,0]);case 9:if(c){e.next=22;break}a=0;case 11:if(!(a<4)){e.next=20;break}return e.t0=r,e.next=15,t.methods.historyNumbers(n-1,a).call();case 15:e.t1=+e.sent.toString(),e.t0.push.call(e.t0,e.t1);case 17:a++,e.next=11;break;case 20:e.next=32;break;case 22:i=0;case 23:if(!(i<4)){e.next=32;break}return e.t2=r,e.next=27,t.methods.winningNumbers(i).call();case 27:e.t3=+e.sent.toString(),e.t2.push.call(e.t2,e.t3);case 29:i++,e.next=23;break;case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=n(47),P=n(183),R=n(15),M=n(7),H=n(2),U=n(18),V=n(185),K=n(1),W=Object(M.e)(H.Q).attrs({as:"h1",scale:"xl"})(r||(r=Object(R.a)(["\n  color: #ffffff;\n  margin-bottom: 24px;\n  text-shadow: 2px 2px 2px #00000040;\n"]))),q=Object(M.e)(H.Nb)(c||(c=Object(R.a)(["\n  background: -webkit-linear-gradient(#ffd800, #eb8c00);\n  font-size: 24px;\n  font-weight: 600;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),Y=M.e.div(a||(a=Object(R.a)(["\n  background-image: linear-gradient(#7645d9, #452a7a);\n  max-height: max-content;\n  overflow: hidden;\n  "," {\n    max-height: 256px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),J=Object(M.e)(V.a)(i||(i=Object(R.a)(["\n  display: flex;\n\n  flex-direction: column-reverse;\n\n  "," {\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),X=M.e.div(s||(s=Object(R.a)(["\n  flex: 1;\n  padding-right: 0;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    padding-right: 24px;\n  }\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Z=M.e.div(o||(o=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 0;\n\n  & img {\n    width: 80%;\n  }\n\n  "," {\n    margin-top: 0;\n    padding-left: 24px;\n  }\n\n  "," {\n    padding-left: 32px;\n    & img {\n      margin-top: -25px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),G=function(){var e=Object(U.b)().t;return Object(K.jsx)(Y,{children:Object(K.jsxs)(J,{children:[Object(K.jsxs)(X,{children:[Object(K.jsx)(W,{children:e("The Lottery Is Changing!")}),Object(K.jsx)(q,{children:e("Come back soon!")}),Object(K.jsx)(H.ab,{bold:!0,mt:20,external:!0,href:"https://voting.pancakeswap.finance/#/pancake/proposal/QmU8pcbmBrfbfVQXMMxmkExDq3mYq4s5cbBuFe6uCZzdmX",children:e("Learn more")})]}),Object(K.jsx)(Z,{children:Object(K.jsx)("img",{src:"/images/tombola.png",alt:"lottery bunny"})})]})})},$=n(10),_=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.pancakeswap.com/api/singleLottery?lotteryNumber=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(h.useState)(!0),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(h.useState)(null),a=Object(O.a)(c,2),i=a[0],s=a[1],o=Object(h.useState)(null),u=Object(O.a)(o,2),l=u[0],b=u[1],j=Object(h.useContext)(m).mostRecentLotteryNumber;return Object(h.useEffect)((function(){j>0&&function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,_(j);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()()}),[j,s,r,b]),{isLoading:n,data:i,mostRecentLotteryNumber:j,error:l}},te=M.e.div(u||(u=Object(R.a)(["\n  margin-bottom: 24px;\n"]))),ne=M.e.div(l||(l=Object(R.a)(["\n  position: relative;\n"]))),re=M.e.div(b||(b=Object(R.a)(["\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]))),ce=M.e.div(j||(j=Object(R.a)(["\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: auto;\n"]))),ae=function(e){var t=e.initialLotteryNumber,n=e.onSubmit,r=Object(h.useState)(t),c=Object(O.a)(r,2),a=c[0],i=c[1],s=Object(h.useState)(!1),o=Object(O.a)(s,2),u=o[0],l=o[1],b=Object(U.b)().t;return Object(K.jsxs)(te,{children:[Object(K.jsx)(H.Nb,{children:b("Select lottery number:")}),Object(K.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(a)},children:Object(K.jsxs)(ne,{children:[Object(K.jsx)(re,{children:Object(K.jsx)(H.W,{value:a,type:"number",inputMode:"numeric",min:"0",isWarning:u,max:t,onChange:function(e){if(e.currentTarget.value){var n=parseInt(e.currentTarget.value,10);l(n>t),i(n)}else i(t)}})}),Object(K.jsx)(ce,{children:Object(K.jsx)(H.o,{type:"submit",scale:"sm",disabled:u,children:b("Search")})})]})})]})},ie=function(e){var t=e.error;return Object(K.jsx)(H.Nb,{p:"24px",children:t.message})},se=n(94),oe=["valueToDisplay","children","Icon"],ue=M.e.div(d||(d=Object(R.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))),le=function(e){var t=e.valueToDisplay,n=e.children,r=e.Icon,c=Object(se.a)(e,oe);return Object(K.jsxs)(H.P,Object($.a)(Object($.a)({},c),{},{children:[r&&Object(K.jsx)(ue,{children:Object(K.jsx)(r,{})}),Object(K.jsxs)(H.P,{flexDirection:"column",children:[Object(K.jsx)(H.Nb,{fontSize:"14px",color:"textSubtle",children:n}),Object(K.jsx)(H.Q,{scale:"lg",children:t})]})]}))};le.defaultProps={valueToDisplay:"",Icon:function(){return Object(K.jsx)("div",{})},children:""};var be,je,de,xe,pe,fe,Oe,he,me,ge,ve,ye,we,ke,Se,Ce,Le,Ne,De,ze,Ae,Fe,Ie,Te,Ee,Qe,Be,Pe,Re,Me,He,Ue,Ve,Ke,We,qe,Ye,Je,Xe,Ze=le,Ge=n(31),$e=n(137),_e=n(291),et=function(){var e=Object(h.useState)(N.d),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(h.useState)(!1),a=Object(O.a)(c,2),i=a[0],s=a[1],o=Object(Ge.c)().account,u=Object(B.m)(),l=Object(B.l)(),b=Object(_e.a)(),j=b.lastUpdated,d=b.setLastUpdated,x=Object(h.useCallback)(Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,I(l,u,o);case 3:t=e.sent,r(t),s(!1);case 6:case"end":return e.stop()}}),e)}))),[o,l,u]);return Object(h.useEffect)((function(){o&&l&&u&&x()}),[o,x,l,u,j]),{claimLoading:i,claimAmount:n,setLastUpdated:d}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(h.useState)([]),n=Object(O.a)(t,2),r=n[0],c=n[1],a=Object(Ge.c)(),i=a.account,s=Object(B.m)(),o=Object(B.l)(),u=Object($e.a)(),l=u.fastRefresh;return Object(h.useEffect)((function(){i&&o&&s&&function(){var t=Object(f.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(o,s,i,e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,o,s,l,e]),r},nt=n(136),rt=M.e.div(be||(be=Object(R.a)(["\n  color: #ff8c28;\n"]))),ct=M.e.div(je||(je=Object(R.a)(["\n  text-align: center;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),at=Object(M.e)(H.o)(de||(de=Object(R.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[2]})),it=function(e){var t=e.myTicketNumbers,n=e.onDismiss,r=e.from,c=function(){var e=Object(h.useState)([0,0,0,0]),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(B.l)(),a=Object($e.a)().fastRefresh;return Object(h.useEffect)((function(){c&&function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(c);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,c,r]),n}(),a=Object(U.b)().t,i=Object(h.useCallback)((function(e){for(var t=0,n=c.length-1;n>=0;n--)c[n]==e[n]&&t++;return t}),[c]),s=t.map((function(e,t){if(i(e[0])>1&&"buy"!==r){var n=new Array(i(e[0])+1).join("\ud83e\udd11");return Object(K.jsxs)(rt,{children:[n,e.toString(),n]},t)}return Object(K.jsx)("p",{children:e.toString()},t)}));return Object(K.jsxs)(H.lb,{title:a("My Tickets (Total: %TICKETS%)",{TICKETS:t.length}),onDismiss:n,children:[Object(K.jsx)(ct,{children:Object(K.jsx)("h2",{children:s})}),Object(K.jsx)(at,{variant:"secondary",onClick:n,children:a("Close")})]})},st=M.e.div(xe||(xe=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n\n  & > div {\n    flex: 1;\n    width: 100%;\n  }\n"]))),ot=Object(M.e)(H.ab)(pe||(pe=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  height: 48px;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n"]))),ut=function(e){var t=e.contractLink,n=e.lotteryNumber,r=Object(U.b)().t,c=tt(n),a=c.length,i=Object(H.hc)(Object(K.jsx)(it,{myTicketNumbers:c,from:"buy"})),s=Object(O.a)(i,1)[0];return Object(Ge.c)().account?Object(K.jsxs)(st,{children:[Object(K.jsx)(H.o,{disabled:0===a,onClick:s,width:"100%",children:r("View your tickets")}),Object(K.jsx)(ot,{href:t,children:r("View on BscScan")})]}):Object(K.jsx)(st,{children:Object(K.jsx)(nt.a,{})})},lt=n(29),bt=n(874),jt=M.e.div(fe||(fe=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(4, auto);\n"])),(function(e){return e.pastDraw?3:2})),dt=Object(M.e)(H.Nb)(Oe||(Oe=Object(R.a)(["\n  text-align: right;\n"]))),xt=Object(M.e)(H.Q)(he||(he=Object(R.a)(["\n  text-align: right;\n"]))),pt=M.e.div(me||(me=Object(R.a)(["\n  margin-bottom: ",";\n"])),(function(e){return e.marginBottom?e.marginBottom:"10px"})),ft=Object(M.e)(pt)(ge||(ge=Object(R.a)(["\n  transform: translate(-40%, 0%);\n"]))),Ot=function(e){var t=e.lotteryPrizeAmount,n=void 0===t?0:t,r=e.pastDraw,c=void 0!==r&&r,a=e.jackpotMatches,i=e.twoTicketMatches,s=e.threeTicketMatches,o=+(n/100*50).toFixed(0),u=+(n/100*20).toFixed(0),l=+(n/100*10).toFixed(0),b=+(n/100*20).toFixed(0),j=Object(U.b)().t,d=Object(lt.G)(),x=function(e){return new g.BigNumber(e).multipliedBy(d).toNumber()};return Object(K.jsxs)(jt,{pastDraw:c,children:[Object(K.jsx)(pt,{children:Object(K.jsx)(H.Nb,{fontSize:"14px",color:"textSubtle",children:j("No. Matched")})}),c&&Object(K.jsx)(ft,{children:Object(K.jsx)(dt,{fontSize:"14px",color:"textSubtle",children:j("Winners")})}),Object(K.jsx)(pt,{children:Object(K.jsx)(dt,{fontSize:"14px",color:"textSubtle",children:j("Prize Pot")})}),Object(K.jsx)(pt,{children:Object(K.jsx)(H.Q,{scale:"md",children:"4"})}),c&&Object(K.jsx)(ft,{children:Object(K.jsx)(xt,{scale:"md",children:a})}),Object(K.jsx)(pt,{children:Object(K.jsxs)(xt,{scale:"md",children:[o.toLocaleString(),!c&&d.gt(0)&&Object(K.jsx)(bt.a,{value:x(o)})]})}),Object(K.jsx)(pt,{children:Object(K.jsx)(H.Nb,{bold:!0,children:"3"})}),c&&Object(K.jsx)(ft,{children:Object(K.jsx)(dt,{bold:!0,children:s})}),Object(K.jsx)(pt,{children:Object(K.jsxs)(dt,{children:[u.toLocaleString(),!c&&d.gt(0)&&Object(K.jsx)(bt.a,{value:x(u)})]})}),Object(K.jsx)(pt,{children:Object(K.jsx)(H.Nb,{children:"2"})}),c&&Object(K.jsx)(ft,{children:Object(K.jsx)(dt,{children:i})}),Object(K.jsx)(pt,{children:Object(K.jsxs)(dt,{children:[l.toLocaleString(),!c&&d.gt(0)&&Object(K.jsx)(bt.a,{value:x(l)})]})}),Object(K.jsx)(pt,{marginBottom:"0",children:Object(K.jsxs)(H.Nb,{children:[j(c?"Burned":"To burn"),":"]})}),c?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(pt,{marginBottom:"0"}),Object(K.jsx)(pt,{marginBottom:"0",children:Object(K.jsx)(dt,{children:b.toLocaleString()})})]}):Object(K.jsx)(pt,{marginBottom:"0",children:Object(K.jsx)(dt,{children:b.toLocaleString()})})]})},ht=function(e){if(!e)return{};var t=new Date(e),n=t.toDateString();return{hours:t.getUTCHours(),monthAndDay:n.split(" ").splice(1,2).join(" ")}},mt=M.e.div(ve||(ve=Object(R.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),gt=function(e){var t=e.timeValue,n=ht(t),r=n.monthAndDay,c=n.hours;return Object(K.jsx)(mt,{children:Object(K.jsxs)(H.Nb,{fontSize:"14px",children:[r,", ",c,":00 UTC"]})})},vt=M.e.div(ye||(ye=Object(R.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),yt=Object(M.e)(Ze)(we||(we=Object(R.a)(["\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[4]})),wt=function(e){var t=e.data,n=Object(U.b)().t,r=t.contractLink,c=t.jackpotTicket,a=t.lotteryDate,i=t.lotteryNumber,s=t.lotteryNumbers,o=t.match2Ticket,u=t.match3Ticket,l=t.poolSize;return!t.error&&t&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(H.t,{children:Object(K.jsxs)(vt,{children:[Object(K.jsx)(gt,{timeValue:a}),Object(K.jsx)(H.Q,{scale:"md",mb:"24px",children:n("Round #%num%",{num:i})}),Object(K.jsx)(yt,{valueToDisplay:"".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3]),Icon:H.Pb,children:n("Winning numbers")}),Object(K.jsx)(Ze,{valueToDisplay:"".concat(l.toLocaleString()," CAKE"),Icon:H.vb,children:n("Total prizes")})]})}),Object(K.jsxs)(H.u,{children:[Object(K.jsx)(Ot,{lotteryPrizeAmount:l,jackpotMatches:c,twoTicketMatches:o,threeTicketMatches:u,pastDraw:!0}),Object(K.jsx)(ut,{contractLink:r,lotteryNumber:i})]})]})},kt=function(e){var t=e.error,n=e.data;return Object(K.jsx)(H.s,{children:t.message?Object(K.jsx)(ie,{error:t}):Object(K.jsx)(wt,{data:n})})},St=M.e.div(ke||(ke=Object(R.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #ddd;\n  border-bottom: 8px solid #ddd;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Ct=function(){return Object(K.jsx)(St,{})},Lt=M.e.div(Se||(Se=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Nt=Object(M.e)(H.t)(Ce||(Ce=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 552px; // height of final card\n"]))),Dt=function(){var e=Object(h.useState)({roundData:null,error:{message:null,type:null},isInitialized:!1,isLoading:!0}),t=Object(O.a)(e,2),n=t[0],r=t[1],c=ee(),a=c.data,i=c.mostRecentLotteryNumber,s=Object(U.b)().t,o=n.roundData,u=n.error,l=n.isInitialized,b=n.isLoading;Object(h.useEffect)((function(){a&&r((function(e){return Object($.a)(Object($.a)({},e),{},{isLoading:!1,isInitialized:!0,roundData:a})}))}),[a,r]);var j=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r((function(e){return Object($.a)(Object($.a)({},e),{},{isLoading:!0})})),_(t).then((function(e){e.error?r((function(e){return Object($.a)(Object($.a)({},e),{},{error:{message:s("The lottery number you provided does not exist"),type:"out of range"},isLoading:!1,isInitialized:!0})})):r((function(t){return Object($.a)(Object($.a)({},t),{},{error:{message:null,type:null},roundData:e,isLoading:!1,isInitialized:!0})}))})).catch((function(){r((function(e){return Object($.a)(Object($.a)({},e),{},{error:{message:s("Error fetching data"),type:"api"},isLoading:!1,isInitialized:!0})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(Lt,{children:[Object(K.jsx)(ae,{initialLotteryNumber:i,onSubmit:j}),!l||b?Object(K.jsx)(H.s,{children:Object(K.jsx)(Nt,{children:Object(K.jsx)(Ct,{})})}):Object(K.jsx)(kt,{error:u,data:o})]})},zt=n(307),At=n(98),Ft=Object(h.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,1115))})),It=Object(h.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,1116))})),Tt=M.e.div(Le||(Le=Object(R.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Et=function(e){var t=e.showLast,n=Object(U.b)().t,r=Object(At.a)().isDark,c=Object(h.useContext)(m),a=c.historyData,i=c.historyError,s=function(e){var n=a.map((function(t){return t[e]})).reverse();return"max"===t?n:n.slice(-1*Number(t))},o=function(e){return{borderColor:e.color,fill:!1,borderWidth:2,pointRadius:0,pointHitRadius:10}},u=function(){return{labels:s("lotteryNumber"),datasets:[Object($.a)({label:n("Pool Size"),data:s("poolSize"),yAxisID:"y-axis-pool"},o({color:"#7A6EAA"})),Object($.a)({label:n("Burned"),data:s("burned"),yAxisID:"y-axis-burned"},o({color:"#1FC7D4"}))]}},l=function(e){var t=e.color,n=e.lineHeight,r=e.prefix,c=void 0===r?"":r;return{borderCapStyle:"round",gridLines:{display:!1},ticks:{fontFamily:"Kanit, sans-serif",fontColor:t,fontSize:12,lineHeight:n,maxRotation:0,beginAtZero:!0,autoSkipPadding:15,userCallback:function(e){return"".concat(c).concat(e.toLocaleString())}}}},b=Object(h.useMemo)((function(){return{tooltips:{mode:"index",intersect:!1,cornerRadius:16,backgroundColor:"#27262c",xPadding:16,yPadding:16,caretSize:6,titleFontFamily:"Kanit, sans-serif",titleFontSize:16,titleMarginBottom:8,bodyFontFamily:"Kanit, sans-serif",bodyFontSize:16,bodySpacing:8,beforeBody:"##",callbacks:{title:function(e){return"".concat(n("Round #%num%",{num:e[0].label}))},label:function(e){return" ".concat(e.yLabel.toLocaleString()," CAKE")},labelColor:function(e,t){return{borderColor:t.config.data.datasets[e.datasetIndex].cardBorder,backgroundColor:t.config.data.datasets[e.datasetIndex].borderColor}}}},legend:{display:!1},scales:{yAxes:[Object($.a)({type:"linear",position:"left",id:"y-axis-pool"},l({color:"#7A6EAA",lineHeight:1.6})),Object($.a)({type:"linear",position:"right",id:"y-axis-burned"},l({color:"#1FC7D4",lineHeight:1.5}))],xAxes:[Object($.a)({},l({color:r?"#FFFFFF":"#452A7A",lineHeight:1,prefix:"#"}))]}}}),[r,n]);return Object(K.jsxs)(K.Fragment,{children:[i&&Object(K.jsx)(Tt,{children:Object(K.jsx)(H.Nb,{children:n("Error fetching data")})}),!i&&a.length>1?Object(K.jsx)(h.Suspense,{fallback:Object(K.jsx)(H.P,{justifyContent:"center",children:Object(K.jsx)(Ct,{})}),children:50===t||100===t?Object(K.jsx)(It,{data:u(),options:b}):Object(K.jsx)(Ft,{data:u(),options:b,type:"line"})}):Object(K.jsx)(Tt,{children:Object(K.jsx)(Ct,{})})]})},Qt=M.e.div(Ne||(Ne=Object(R.a)(["\n  display: flex;\n  margin: 24px 0 24px;\n"]))),Bt=M.e.div(De||(De=Object(R.a)(["\n  display: flex;\n  margin-right: 18px;\n  align-items: center;\n"]))),Pt=M.e.div(ze||(ze=Object(R.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: ",";\n  margin-right: 6px;\n"])),(function(e){var t=e.isPoolSize,n=e.theme;return t?"#7A6EAA":n.colors.primary})),Rt=function(){var e=Object(U.b)().t;return Object(K.jsxs)(Qt,{children:[Object(K.jsxs)(Bt,{children:[Object(K.jsx)(Pt,{isPoolSize:!0}),Object(K.jsx)(H.Nb,{children:e("Pool Size")})]}),Object(K.jsxs)(Bt,{children:[Object(K.jsx)(Pt,{}),Object(K.jsx)(H.Nb,{children:e("Burned")})]})]})},Mt=M.e.div(Ae||(Ae=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-direction: column-reverse;\n\n  "," {\n    flex-wrap: nowrap;\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ht=M.e.div(Fe||(Fe=Object(R.a)(["\n  margin-top: 24px;\n\n  "," {\n    margin-top: 0;\n  }\n\n  > "," {\n    font-size: 12px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),H.Nb),Ut=function(){var e=Object(U.b)().t,t=Object(h.useState)(50),n=Object(O.a)(t,2),r=n[0],c=n[1];return Object(K.jsx)(H.s,{children:Object(K.jsxs)(H.t,{children:[Object(K.jsx)(H.Q,{scale:"md",children:e("History")}),Object(K.jsxs)(Mt,{children:[Object(K.jsx)(Rt,{}),Object(K.jsxs)(Ht,{children:[Object(K.jsx)(H.Nb,{textTransform:"uppercase",children:e("Show Last")}),Object(K.jsx)(zt.a,{options:[{label:"50",value:50},{label:"100",value:100},{label:"200",value:200},{label:e("Max"),value:"max"}],onChange:function(e){c(e.value)}})]})]}),Object(K.jsx)(Et,{showLast:r})]})})},Vt=n(22),Kt=M.e.div(Ie||(Ie=Object(R.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),Wt=M.e.div(Te||(Te=Object(R.a)(["\n  margin-bottom: 16px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),qt=M.e.div(Ee||(Ee=Object(R.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[3]})),Yt=M.e.div(Qe||(Qe=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Jt=Object(M.e)(H.o)(Be||(Be=Object(R.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[1]})),Xt=function(e){var t=e.onSuccess,n=Object(h.useState)(!1),r=Object(O.a)(n,2),c=r[0],a=r[1],i=Object(U.b)().t,s=et(),o=s.claimLoading,u=s.claimAmount,l=function(){var e=Object(Ge.c)().account,t=Object(B.l)(),n=Object(B.m)();return{onMultiClaim:Object(h.useCallback)(Object(f.a)(p.a.mark((function r(){var c;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,F(t,n,e);case 3:return c=r.sent,r.abrupt("return",c);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[e,t,n])}}().onMultiClaim,b=tt(),j=Object(H.hc)(Object(K.jsx)(it,{myTicketNumbers:b,from:"buy"})),d=Object(O.a)(j,1)[0],x=Object(h.useCallback)(Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,l();case 4:e.sent&&(t(),a(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[l,a,t]),m=Object(Vt.c)(u).toFixed(2);return Object(K.jsxs)(Yt,{children:[Object(K.jsx)(Wt,{children:Object(K.jsx)(H.ac,{})}),Object(K.jsx)(H.Q,{as:"h3",scale:"lg",color:"secondary",children:i("You won!")}),o&&Object(K.jsx)(Ct,{}),!o&&Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(Kt,{children:[Object(K.jsx)(H.Q,{as:"h4",scale:"xl",style:{marginRight:"6px"},children:m}),Object(K.jsx)(H.Q,{as:"h4",scale:"lg",children:"CAKE"})]})}),Object(K.jsx)(qt,{children:Object(K.jsx)(H.o,{width:"100%",disabled:c,onClick:x,children:i("Collect")})}),Object(K.jsx)(Jt,{variant:"text",onClick:d,children:i("View your tickets")})]})},Zt=M.e.div(Pe||(Pe=Object(R.a)(["\n  display: flex;\n"]))),Gt=M.e.div(Re||(Re=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),$t=Object(M.e)(H.Nb)(Me||(Me=Object(R.a)(["\n  padding-left: 12px;\n"]))),_t=M.e.img(He||(He=Object(R.a)(["\n  margin-right: 6px;\n\n  "," {\n    margin-right: 20px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),en=Object(M.e)(H.o)(Ue||(Ue=Object(R.a)(["\n  padding: 0 12px;\n  height: unset;\n"]))),tn=function(){var e=Object(U.b)().t,t=tt(),n=Object(H.hc)(Object(K.jsx)(it,{myTicketNumbers:t,from:"buy"})),r=Object(O.a)(n,1)[0];return Object(K.jsxs)(Zt,{children:[Object(K.jsx)(_t,{src:"/images/no-prize.svg",alt:"no prizes won"}),Object(K.jsxs)(Gt,{children:[Object(K.jsx)($t,{color:"textDisabled",children:e("Sorry, no prizes to collect")}),Object(K.jsx)(en,{variant:"text",onClick:r,children:e("View your tickets")})]})]})},nn=Object(M.e)(H.s)(Ve||(Ve=Object(R.a)(["\n  ","\n"])),(function(e){return e.isDisabled?"  \n        margin-top: 16px;\n        background-color: unset;\n        box-shadow: unset;\n        border: 1px solid ".concat(e.theme.colors.textDisabled,";\n\n        ").concat(e.theme.mediaQueries.sm," {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg," {\n          margin-top: 32px;\n        }\n        "):""})),rn=function(e){var t=e.isAWin,n=e.onSuccess;return Object(K.jsx)(nn,{isDisabled:!t,isActive:t,children:Object(K.jsx)(H.t,{children:t?Object(K.jsx)(Xt,{onSuccess:n}):Object(K.jsx)(tn,{})})})},cn=Object(M.e)(H.t)(Ke||(Ke=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  max-height: 196px;\n"]))),an=Object(M.e)(H.Q)(We||(We=Object(R.a)(["\n  margin: 16px 0;\n"]))),sn=M.e.div(qe||(qe=Object(R.a)(["\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),on=function(){var e=Object(U.b)().t;return Object(K.jsx)(H.s,{isActive:!0,children:Object(K.jsxs)(cn,{children:[Object(K.jsx)(sn,{children:Object(K.jsx)(H.Ob,{})}),Object(K.jsxs)("div",{children:[Object(K.jsx)(an,{scale:"md",children:e("Unlock wallet to access lottery")}),Object(K.jsx)(nt.a,{})]})]})})},un=function(){var e=Object(Ge.c)().account,t=et(),n=t.claimAmount,r=t.setLastUpdated,c=Object(Vt.c)(n)>0,a=Object(h.useCallback)((function(){r()}),[r]);return Object(K.jsx)(H.l,{mb:"32px",children:e?Object(K.jsx)(rn,{isAWin:c,onSuccess:a}):Object(K.jsx)(on,{})})},ln=Object(M.e)(H.i)(Ye||(Ye=Object(R.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),bn=M.e.div(Je||(Je=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),jn=M.e.div(Xe||(Xe=Object(R.a)(["\n  display: flex;\n  margin-top: 32px;\n  justify-content: center;\n"]))),dn=function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(un,{}),Object(K.jsxs)(ln,{children:[Object(K.jsx)(Dt,{}),Object(K.jsxs)(bn,{children:[Object(K.jsx)(Ut,{}),Object(K.jsx)(jn,{children:Object(K.jsx)("img",{src:"/images/pancake-lottery-bunny.png",alt:"lottery bunny"})})]})]})]})},xn=function(){var e=Object(B.l)(),t=Object(h.useState)([]),n=Object(O.a)(t,2),r=n[0],c=n[1],a=Object(h.useState)(!1),i=Object(O.a)(a,2),s=i[0],o=i[1],u=Object(h.useState)(0),l=Object(O.a)(u,2),b=l[0],j=l[1],d=Object(h.useState)(1),x=Object(O.a)(d,2),g=x[0],v=x[1];return Object(h.useEffect)((function(){fetch("https://api.pancakeswap.com/api/lotteryHistory").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(){o(!0)}))}),[]),Object(h.useEffect)((function(){e&&function(){var t=Object(f.a)(p.a.mark((function t(){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:n=t.sent,r=n-1,j(n),v(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(G,{}),Object(K.jsx)(P.a,{children:Object(K.jsx)(m.Provider,{value:{historyError:s,historyData:r,mostRecentLotteryNumber:g,currentLotteryNumber:b},children:Object(K.jsx)(dn,{})})})]})}},867:function(e,t,n){"use strict";var r=n(0),c=n(290),a=n(2),i=n(1);t.a=function(e){var t=e.value,n=e.decimals,s=e.fontSize,o=void 0===s?"40px":s,u=e.lineHeight,l=void 0===u?"1":u,b=e.prefix,j=void 0===b?"":b,d=e.bold,x=void 0===d||d,p=e.color,f=void 0===p?"text":p,O=Object(c.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),h=O.countUp,m=O.update,g=Object(r.useRef)(m);return Object(r.useEffect)((function(){g.current(t)}),[t,g]),Object(i.jsxs)(a.Nb,{bold:x,fontSize:o,style:{lineHeight:l},color:f,children:[j,h]})}},874:function(e,t,n){"use strict";var r=n(10),c=(n(0),n(867)),a=n(1);t.a=function(e){return Object(a.jsx)(c.a,Object(r.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}}}]);
//# sourceMappingURL=13.da6beec6.chunk.js.map