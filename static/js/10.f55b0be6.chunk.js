(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1129:function(e,t,n){"use strict";n.r(t);n(0);var i,r,c,s,o,a,b,l=n(183),j=n(54),d=n(104),x=n(2),u=n(295),p=n(173),m=n(18),O=n(29),h=n(15),f=n(7),g=n(889),v=n(907),w=n(1),y=f.e.div(i||(i=Object(h.a)(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=f.e.img(r||(r=Object(h.a)(["\n  border-radius: 50%;\n  height: 64px;\n  margin-top: -12px;\n  width: 64px;\n  border: solid 2px white;\n\n  "," {\n    height: 128px;\n    margin-top: -24px;\n    width: 128px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),Q=f.e.div(c||(c=Object(h.a)(["\n  margin-bottom: 8px;\n  text-align: center;\n"]))),D=Object(f.e)(x.s)(s||(s=Object(h.a)(["\n  overflow: visible;\n"]))),P=Object(f.e)(x.v)(o||(o=Object(h.a)(["\n  position: relative;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 32px 32px 0 0;\n  padding-top: 0;\n  text-align: center;\n"])),(function(e){return e.bg})),C=Object(f.e)(x.Q).attrs({as:"h2"})(a||(a=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),I=f.e.div(b||(b=Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n  margin-bottom: 16px;\n\n  "," {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    margin-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),N=function(e){var t=e.team,n=Object(m.b)().t;return Object(w.jsx)(y,{children:Object(w.jsxs)(D,{children:[Object(w.jsxs)(P,{bg:"/images/teams/".concat(t.background),children:[Object(w.jsx)(Q,{children:Object(w.jsx)(k,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"})}),Object(w.jsx)(C,{color:t.textColor,children:t.name}),Object(w.jsx)(x.Nb,{as:"p",color:t.textColor,children:n(t.description)})]}),Object(w.jsxs)(x.t,{children:[Object(w.jsxs)(I,{children:[Object(w.jsx)(v.a,{icon:x.J,title:t.users,subtitle:n("Active Members")}),Object(w.jsx)(v.a,{icon:x.yb,title:n("Coming Soon"),subtitle:n("Team Points"),isDisabled:!0})]}),Object(w.jsx)(x.Q,{as:"h3",children:n("Team Achievements")}),Object(w.jsx)(g.a,{})]})]})})},S=n(906);t.default=function(){var e=Object(j.h)().id,t=Number(e),n=Object(m.b)().t,i=-1!==p.a.findIndex((function(e){return e.id===t})),r=Object(O.I)(t);return i?r?Object(w.jsxs)(l.a,{children:[Object(w.jsx)(S.a,{}),Object(w.jsx)(x.P,{mb:"24px",children:Object(w.jsx)(d.a,{to:"/teams",children:Object(w.jsxs)(x.P,{alignItems:"center",children:[Object(w.jsx)(x.E,{color:"primary"}),Object(w.jsx)(x.Nb,{color:"primary",children:n("Teams Overview")})]})})}),Object(w.jsx)(N,{team:r})]}):Object(w.jsx)(u.a,{}):Object(w.jsx)(j.a,{to:"/404"})}},879:function(e,t,n){"use strict";var i,r=n(15),c=n(7).e.div(i||(i=Object(r.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.a=c},889:function(e,t,n){"use strict";n(0);var i=n(2),r=n(18),c=n(1);t.a=function(e){var t=e.children,n=Object(r.b)().t;return Object(c.jsxs)(i.P,{flexDirection:"column",alignItems:"center",justifyContent:"center",p:"24px",children:[Object(c.jsx)(i.n,{width:"72px",height:"72px"}),Object(c.jsx)(i.Q,{as:"h5",scale:"md",color:"textDisabled",children:t||n("Coming Soon!")})]})}},906:function(e,t,n){"use strict";n(0);var i=n(2),r=n(29),c=n(18),s=n(879),o=n(104),a=n(1),b=function(){var e=Object(c.b)().t;return Object(a.jsx)(i.s,{mb:"32px",isActive:!0,children:Object(a.jsx)(i.t,{children:Object(a.jsxs)(i.P,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(i.Q,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(a.jsx)(i.Nb,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(a.jsx)(i.o,{as:o.a,to:"/profile",mt:["16px",null,0],children:e("Set up now")})]})})})};t.a=function(){var e=Object(c.b)().t,t=Object(r.H)(),n=t.isInitialized,o=t.profile,l=n&&!o;return Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)(b,{}),Object(a.jsxs)(s.a,{children:[Object(a.jsx)(i.Q,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(a.jsx)(i.Nb,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}},907:function(e,t,n){"use strict";var i,r=n(10),c=n(94),s=(n(0),n(2)),o=n(15),a=n(7),b=Object(a.e)(s.Nb)(i||(i=Object(o.a)(["\n  border: 2px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.tertiary}));b.defaultProps={p:"24px"};var l=b,j=n(1),d=["icon","title","subtitle","isDisabled"];t.a=function(e){var t=e.icon,n=e.title,i=e.subtitle,o=e.isDisabled,a=void 0!==o&&o,b=Object(c.a)(e,d);return Object(j.jsx)(l,Object(r.a)(Object(r.a)({},b),{},{children:Object(j.jsxs)(s.P,{alignItems:"start",children:[Object(j.jsx)(t,{width:"44px",mr:"24px",color:a?"textDisabled":"currentColor"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(s.Q,{as:"h3",scale:"xl",color:a?"textDisabled":"text",children:n}),Object(j.jsx)(s.Nb,{textTransform:"uppercase",color:a?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:i})]})]})}))}}}]);
//# sourceMappingURL=10.f55b0be6.chunk.js.map