(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{105:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a.n(r),l=a(24),s=a(34),c=a(45),m=function(e){return{type:"NAV_SELECTED",payload:e}},p=a(76),u=a(158),d=a(149),g=a(155),f=a(13),h=a(67),b=a(161),x=a(66),E=(a(105),{Home:{line1:"Hi,",line2:"I'm Falah,",line3:"Web Developer."},"About Me":{title:"About Me",desc:"I am a student at Institut Teknologi Bandung, and currently in my third-year for majoring informatics. I'm looking forward for more experiences, to further expand my skillset."}}),y=(a(75),i.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){e.mobile&&o(!0)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"vert-move1",style:{color:e.mobile?"rgba(61, 61, 61, 0.62)":r?"rgba(61, 61, 61, 0.82)":"rgba(61, 61, 61, 0.52)",userSelect:"none",width:"70px",height:"20px",cursor:"pointer",marginTop:"20px",marginLeft:"Linkedin"===e.text?"-5px":void 0},onMouseEnter:function(){o(!0)},onMouseLeave:function(){e.mobile||o(!1)},onClick:function(){return window.open(e.linkto,"_blank")}},i.a.createElement("div",{style:{fontSize:e.mobile?"27px":"23px",marginTop:"Linkedin"===e.text?"-2px":void 0,display:"inline-block"}},i.a.createElement("div",null,i.a.createElement("i",{style:{display:"block",marginBottom:"-39px",cursor:"pointer"},className:"ri-".concat(e.text.toLowerCase(),r?"-fill":"-line")}))),i.a.createElement("span",{style:{fontSize:e.mobile?"17px":"14px",display:"inline-block",marginLeft:e.rep?"4px":"1px",marginTop:"4px",fontFamily:"Recursive",position:"absolute",cursor:"pointer"}},e.rep?e.rep:e.text)))}))),v=i.a.memo((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"330px",marginLeft:"110px",marginTop:"150px"}},i.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement(d.a,{item:!0,xs:!0},i.a.createElement(y,{text:"Github",linkto:"https://github.com/falahsuta"})),i.a.createElement(d.a,{item:!0,xs:!0},i.a.createElement(y,{text:"Linkedin",linkto:"https://www.linkedin.com/in/falah-sutawindaya/"})),i.a.createElement(d.a,{item:!0,xs:!0},i.a.createElement(y,{text:"Instagram",linkto:"https://instagram.com/falahsutawindaya"})))))})),k=i.a.memo((function(e){var t,a=e.nav;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{fontFamily:"Recursive",position:"absolute",marginTop:"10px",marginLeft:"20px",width:"510px",height:"900px",userSelect:"none"}},(t=45,i.a.createElement("div",{style:{marginTop:"3px",width:"30px",height:t}})),i.a.createElement("h2",{style:{color:"rgba(61, 61, 61, 0.82)"}},E[a]?E[a].title:""),i.a.createElement("div",{style:{lineHeight:1.6,color:"rgba(61, 61, 61, 0.72)"}},E[a]?E[a].desc:""),i.a.createElement(v,null)))})),w=a(84),j=[{header:"Disscuss",text:"Reddit wannabe but with some preferences style of mine."},{header:"Info Extractor",text:"Web based app to extract relevant information given text/articles input."},{header:"Portofolio",text:"A Personal website for showcase project i have done in past."},{header:"15-Puzzle Solver",text:"CLI based visualizer for solving 15-puzzle using branch and bound."}],O=a(89),S=a(59),T=a(4),L=a(156),N=a(157),z=a(160),R=a(85),I=a.n(R),C=a(86),F=a(87),H=a(162),M=a(159),P=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(55),height:function(t){return e.spacing(t.height)},borderRadius:"14px",fontFamily:"Recursive",fontSize:"14px",userSelect:"none",marginBottom:"20px"}}}})),D=i.a.memo((function(e){var t=e.data,a=P(t);return i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{elevation:0},i.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-start"},i.a.createElement("div",{style:{width:"85%",margin:"0 auto",marginTop:"16px",marginLeft:"32px"}},i.a.createElement("h2",{style:{color:"rgba(61, 61, 61, 0.82)"}},e.header),i.a.createElement("h4",{style:{color:"rgba(61, 61, 61, 0.79)"}},"Stacks: ".concat(t.stacks)),i.a.createElement("img",{style:{borderRadius:"8px",marginLeft:"25px",marginBottom:"-5px",cursor:"pointer"},onClick:function(){return window.open(t.giflink,"_blank")},src:t.gif}),i.a.createElement("p",{style:{color:"rgba(61, 61, 61, 0.70)",marginLeft:"98px",marginBottom:"-5px",fontSize:"11px"}},"(Click the image for clarity)"),i.a.createElement("h3",{style:{color:"rgba(61, 61, 61, 0.82)",marginBottom:"-5px"}},"Descriptions"),i.a.createElement("p",{style:{lineHeight:1.1,color:"rgba(61, 61, 61, 0.62)",fontSize:"13px"}},t.descriptions),i.a.createElement("h3",{style:{color:"rgba(61, 61, 61, 0.82)",marginBottom:"-8px"}},"Features"),i.a.createElement("p",{style:{lineHeight:1.1,color:"rgba(61, 61, 61, 0.62)",fontSize:"13px"}},t.features),i.a.createElement("div",{style:{marginLeft:"255px",marginTop:"15-Puzzle Solver"===t.header?"30px":"25px"}},i.a.createElement(y,{text:"Github",rep:"Repository",linkto:t.linkto}))))))})),A={Disscuss:{stacks:"React, Express, Mongo",descriptions:"Disscuss is a platform to share and exchange ideas, designed to accomodate more on user interaction, such as threaded comments.",features:"The UI features including dark mode, dialog based interactions (creating post, submitting form, viewing post), threaded comments style, infinite fetch posts (server-side pagination), tags categories, and also multi-step validation form. In server-side it also has authentication and authorization system (jwt-token).",height:74,gif:"https://media4.giphy.com/media/j3mZ0w4038EKNMtZuI/giphy.gif",linkto:"https://github.com/falahsuta/Projects-1-Unamed",giflink:"https://media1.giphy.com/media/iFsJzdqaQ3v66NGXXZ/giphy.gif"},"Info Extractor":{stacks:"Flask (Python)",descriptions:"Web based app to extract relevant information within news / article such as dates of events, or number of peoples involed.",features:"Input is very open to any news/articles related, search-engine styles app that gives all information relevant. It uses variance algorithm to extract the information such as boyer moore, KMP, and simple regex",gif:"https://media3.giphy.com/media/J4hThbQO89hS5HHp2m/giphy.gif",height:70,linkto:"https://github.com/falahsuta/Info-Extraction",giflink:"https://media1.giphy.com/media/hqg68DMCEhLhvekK3d/giphy.gif"},Portofolio:{stacks:"React (Javascript)",descriptions:"Portofolio web written in react to showcase projects.",features:"Single page application, page transition, some dialog interactions, and simple animations",height:63,gif:"https://media3.giphy.com/media/RG4AAhncolcEuHNiox/giphy.gif",linkto:"https://github.com/falahsuta/Personal-Web-",giflink:"https://media2.giphy.com/media/UWzoTLkoxDW8t1EASN/giphy.gif"},"15-Puzzle Solver":{stacks:"Python",descriptions:"Command-line based app that solves 15 puzzle problems and display the steps processes. It uses branch and bound algorithm for solving the puzzle problems.",features:"Detail information related to particular problems, and shows step-by-step the solving processes.",gif:"https://media1.giphy.com/media/LkwIrR6xRrs0jO98Yb/giphy.gif",height:67,linkto:"https://github.com/falahsuta/15-solver",giflink:"https://media3.giphy.com/media/eg9wtzO4w6nhdsjXs4/giphy.gif"}},B=Object(p.a)((function(e){var t,a=e.breakpoints,n=e.spacing;return{root:Object(S.a)({margin:"auto",borderRadius:n(2),transition:"0.3s",boxShadow:"0px 3px 15px rgba(0,0,0,0.2)",position:"relative",marginLeft:"auto",overflow:"initial",background:"rgba(249, 249, 249, 0.9)",display:"flex",flexDirection:"column",alignItems:"center",width:320},a.up("md"),{flexDirection:"row"}),media:(t={width:"88%",marginLeft:"auto",marginRight:"auto",marginTop:n(-3),height:0,paddingBottom:"42%",borderRadius:n(2),backgroundColor:"#fff",position:"relative"},Object(S.a)(t,a.up("md"),{width:"100%",marginLeft:n(-3),marginTop:0,transform:"translateX(-8px)"}),Object(S.a)(t,"&:after",{content:'" "',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",borderRadius:n(2),opacity:.5}),t),content:{padding:24},cta:{marginTop:24,textTransform:"initial"}}})),W=i.a.forwardRef((function(e,t){return i.a.createElement(H.a,Object.assign({direction:"up",ref:t},e))})),_=i.a.memo((function(e){var t=B(),a=Object(n.useState)(!1),r=Object(f.a)(a,2),o=r[0],l=r[1],s=Object(C.useBlogTextInfoContentStyles)(),c=s.button,m=Object(O.a)(s,["button"]),p=Object(F.useOverShadowStyles)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{userSelect:"none"}},i.a.createElement(g.a,{elevation:0,className:Object(T.default)(t.root,p.root)},i.a.createElement(L.a,{className:t.media,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"}),i.a.createElement(N.a,null,i.a.createElement(I.a,{classes:m,heading:e.header,body:e.text}),i.a.createElement(z.a,{onClick:function(){return l(!0)},className:c},"Documentation")))),i.a.createElement(M.a,{open:o,TransitionComponent:W,onClose:function(){l(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",maxWidth:"lg",scroll:"paper",disableScrollLock:!0,PaperComponent:function(){return i.a.createElement(D,{header:e.header,data:A[e.header]})}}))})),G=i.a.memo((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"vert-move",style:{color:"rgba(61, 61, 61, 0.52)",userSelect:"none"}},i.a.createElement("div",{style:{fontSize:"23px",display:"inline-block"}},i.a.createElement("div",{style:{marginTop:"30px"}},i.a.createElement("i",{style:{display:"block",marginBottom:"-19px"},className:"ri-arrow-up-s-line"}),i.a.createElement("i",{style:{display:"block"},className:"ri-arrow-drop-up-line"}))),i.a.createElement("span",{style:{fontSize:"14px",display:"inline-block",marginLeft:"1px",marginTop:"36px",fontFamily:"Recursive",position:"absolute"}},"Scroll Up")))})),J=i.a.memo((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{height:"22.7em",width:"530px",borderRadius:"20px"}},i.a.createElement(w.a,null,j.map((function(e,t){var a=t%2===0?0===t?"50px 35px":"50px 45px":"100px 45px";return i.a.createElement("div",{style:{margin:a}},i.a.createElement(_,{key:e.header,header:e.header,text:e.text}))}))),i.a.createElement("div",{style:{marginLeft:"220px"}},i.a.createElement(G,null))))})),U=Object(h.a)({header:{top:"110px",left:"40px",fontSize:"30px",cursor:"normal",color:"rgba(81, 81, 81, 0.94)",fontFamily:"Recursive"}}),X={fontSize:"12px",marginTop:"95px",marginLeft:"41px",opacity:"0.6",userSelect:"none"},$=i.a.memo((function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1],o=Object(l.c)((function(e){return e.nav})),s=U(),c=Object(n.useRef)(),m=Object(n.useRef)(),p=Object(n.useRef)(),u=Object(n.useRef)();return Object(n.useEffect)((function(){"Home"===o&&setTimeout((function(){r(!0),c.current.innerHTML=c.current.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),m.current.innerHTML=m.current.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),p.current.innerHTML=p.current.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),u.current.innerHTML=u.current.textContent.replace(/\S/g,"<span class='lettera'>$&</span>"),Object(x.a)({targets:".letter",rotateY:[-90,0],duration:4800,delay:function(e,t){return 45*t}}),Object(x.a)({targets:".ml12 .lettera",opacity:[0,1],easing:"easeInOutQuad",duration:2250,delay:function(e,t){return 10*(t+1)}})}),300),"Home"!==o&&r(!1)}),[o]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content"},a&&i.a.createElement("div",null,i.a.createElement("h1",{className:"ml10 ".concat(s.header)},i.a.createElement("span",{style:{marginBottom:"10px"},className:"text-wrapper letters"},i.a.createElement("span",{style:{display:"block"},ref:c},E.Home.line1),i.a.createElement("span",{style:{display:"block"},ref:m},E.Home.line2),i.a.createElement("span",{style:{display:"block"},ref:p},E.Home.line3)))),a&&i.a.createElement("p",{className:"".concat(s.header," ml12"),style:X,ref:u},"Passionate in Front-End Dev / Webdev in general"),i.a.createElement(b.a,{in:"Projects"===o,timeout:4300,classNames:"alert",unmountOnExit:!0},i.a.createElement("div",null,"Projects"===o&&i.a.createElement(J,null))),o&&i.a.createElement(b.a,{in:"About Me"===o,timeout:4300,classNames:"alert",unmountOnExit:!0},i.a.createElement(k,{nav:o}))))})),q=(a(132),i.a.memo((function(){var e=Object(l.b)(),t=Object(n.useState)("Home"),a=Object(f.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),c=Object(f.a)(s,2),p=c[0],u=c[1],d=Object(n.useState)(!1),g=Object(f.a)(d,2),h=g[0],x=g[1],E=Object(n.useState)(!1),y=Object(f.a)(E,2),v=y[0],k=y[1];Object(n.useEffect)((function(){setTimeout((function(){k(!0)}),300)}),[]);var w=["Home","Projects","About Me"].map((function(t,a){return i.a.createElement("div",{key:t,className:"card ".concat(t===r&&"selected-card"),onMouseEnter:function(){u(t)},onMouseLeave:function(){u("")},onClick:function(){p!==r&&(setTimeout((function(){x(!0)}),200),o(""),setTimeout((function(){x(!1)}),900),setTimeout((function(){o(t),e(m(t))}),500))}},i.a.createElement("span",{className:"card-text && ".concat(t===p&&r!==p&&"moving-left")},t),i.a.createElement("span",{style:{color:"rgba(40, 40, 40, 0.899)",cursor:"pointer",marginRight:"-13px",marginBottom:"2px",fontSize:"15px",transition:"all 0.1s ease-in-out",opacity:"0.75"},className:"blink"},!h&&t===r&&i.a.createElement("span",null," _")))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{in:v,timeout:4300,classNames:"first",unmountOnExit:!0},i.a.createElement("div",{className:"container-card"},w)))}))),K=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),borderRadius:"20px",width:e.spacing(99),height:e.spacing(55),boxShadow:"0px 8px 45px 0 rgba(31, 31, 31, 0.15)"}}}})),Q=i.a.memo((function(){var e,t=K();return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,(e=43,i.a.createElement("div",{style:{marginTop:"3px",width:"30px",height:e}})),i.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement("div",{className:t.root},i.a.createElement(g.a,{elevation:0},i.a.createElement(d.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-start"},i.a.createElement(d.a,{item:!0,xs:9},i.a.createElement("div",{style:{marginLeft:"60px"}},i.a.createElement($,null))),i.a.createElement(d.a,{item:!0,xs:3},i.a.createElement("div",{style:{marginRight:"100px",marginTop:"130px"}},i.a.createElement(q,null)))))))))})),Z=(a(133),Object(h.a)({header:{fontSize:"27px",cursor:"normal",color:"rgba(81, 81, 81, 0.84)",fontFamily:"Recursive"}})),V=i.a.memo((function(e){var t=Z(),a=Object(n.useState)(!1),r=Object(f.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(!1),c=Object(f.a)(s,2),m=c[0],p=c[1];return Object(n.useEffect)((function(){setTimeout((function(){l(!0)}),300),setTimeout((function(){p(!0)}),300)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement("br",null),i.a.createElement("h1",{className:t.header,style:{marginTop:e.mobile?"270px":"170px"}},i.a.createElement(b.a,{in:o,timeout:4300,classNames:"abouts3",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement("span",{style:{display:"block"}},e.mobile?"Please use desktop,":"Some libraries weren't supported"),i.a.createElement("span",{style:{display:"block"}},e.mobile?"For best experience.":"for this browser,"),e.edge&&i.a.createElement("span",{style:{display:"block"}},"Please kindly use Chrome instead."))),i.a.createElement(b.a,{in:m,timeout:4300,classNames:"abouts3",unmountOnExit:!0},i.a.createElement(y,{text:"Github",rep:"Repository",mobile:e.mobile||e.edge})))))})),Y=i.a.memo((function(){var e=Object(l.b)();return Object(n.useEffect)((function(){e(m("Home"))}),[]),i.a.createElement(i.a.Fragment,null,c.isChrome&&i.a.createElement(Q,null),!c.isChrome&&!c.isMobile&&i.a.createElement(V,{edge:"Mark"}),c.isMobile&&i.a.createElement(V,{mobile:"Mark"}))})),ee=Object(s.b)({nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"NAV_SELECTED"===t.type?t.payload:e},dial:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"DIAL_OPENED"===t.type||"DIAL_CLOSED"===t.type?t.payload:e}});o.a.render(i.a.createElement(l.a,{store:Object(s.c)(ee)},i.a.createElement(Y,null)),document.querySelector("#root"))},75:function(e,t,a){},95:function(e,t,a){e.exports=a(134)}},[[95,1,2]]]);
//# sourceMappingURL=main.2469d493.chunk.js.map