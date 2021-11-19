(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{233:function(n,e,t){"use strict";t.r(e);var i,o,r,c,a,d,s,l,x,p,b,j,f,h,u,O,m,v,g,y,w,k,z,S,C,W,M,N,_,F,T,D,E,B,L,P,R,q,A,I,V,J,U,Y,H,Q,G=t(1),K=t.n(G),X=t(39),Z=t.n(X),$=t(4),nn=t(3),en=Object(nn.b)(i||(i=Object($.a)(["\n  * {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font: 400 14px Marvel, sans-serif;\n  background: #f0f0f5;\n}\n\ninput,\nbutton {\n  font: 400 18px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n"]))),tn=t(101),on=t(5),rn=t(9),cn=t(7),an=t(10),dn=(Object(an.b)(),t(92)),sn=t.n(dn),ln=t(93),xn=t.n(ln),pn="bd7d678fefa18633deab626c47b85ba0",bn=Number(new Date),jn=xn()(bn+"d5abb2cd6a048843163742cca09ad3911629c265"+pn),fn=sn.a.create({baseURL:"http://gateway.marvel.com/v1/public/",params:{ts:bn,apikey:pn,hash:jn}}),hn=function(){return fn.get("/comics")},un=t(28),On=t.p+"static/media/MarvelLogo.e0f65ae8.png",mn=nn.d.div(o||(o=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #202020;\n  min-height: 100vh;\n  overflow: hidden;\n"]))),vn=nn.d.div(r||(r=Object($.a)(["\n  position: absolute;\n  width: 40px;\n  height: 350px;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n  transition: all ease 0.5s;\n\n  svg {\n    width: 50px;\n    height: 50px;\n    fill: ",";\n  }\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.colors.white}),(function(n){return"arrow-left"===n.className&&"\n    left: 0;\n  "}),(function(n){return"arrow-right"===n.className&&"\n    right: 0;\n  "})),gn=nn.d.img(c||(c=Object($.a)(["\n  width: 200px;\n"]))),yn=nn.d.div(a||(a=Object($.a)(["\n  display: flex;\n  gap: 20px;\n  overflow-x: scroll;\n  margin-top: 80px;\n  padding: 20px;\n  transition: all ease 0.5s;\n\n  ","\n\n  :hover {\n    "," {\n      opacity: 1;\n    }\n  }\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  .selected {\n    transform: translateY(-15px);\n    border: 3px solid ",";\n    box-shadow: -2px 2px 0px 2px ",";\n    :hover {\n      box-shadow: -2px 2px 0px 2px ",";\n    }\n  }\n\n  ","\n\n  ","\n"])),(function(n){var e=n.inputState;return 0!==(null===e||void 0===e?void 0:e.length)&&Object(nn.c)(d||(d=Object($.a)(["\n      "," {\n        display: none;\n      }\n    "])),vn)}),vn,(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.red}),(function(n){return!0===n.showModal&&Object(nn.c)(s||(s=Object($.a)(["\n      opacity: 0.2;\n    "])))}),(function(n){return!0===n.showEmailModal&&Object(nn.c)(l||(l=Object($.a)(["\n      opacity: 0.2;\n    "])))})),wn=nn.d.div(x||(x=Object($.a)(["\n  width: 180px;\n  border: 3px solid ",";\n  border-radius: 0px 0px 20px 0px;\n  background: ",";\n  cursor: pointer;\n  transition: all ease 0.2s;\n\n  :hover {\n    box-shadow: -2px 2px 0px 2px ",";\n    z-index: 1;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.redVariant}),(function(n){return n.theme.colors.white})),kn=nn.d.div(p||(p=Object($.a)(["\n  display: flex;\n\n  img {\n    width: 100%;\n    height: 230px;\n  }\n"]))),zn=nn.d.div(b||(b=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 10px;\n\n  strong {\n    font-size: 18px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  p,\n  strong {\n    color: ",";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  span {\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.textWhite})),Sn=nn.d.div(j||(j=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 5px;\n  cursor: pointer;\n\n  svg {\n    width: 32px;\n    transition: 0.2s;\n    fill: ",";\n  }\n\n  svg:hover {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.textWhite})),Cn=nn.d.div(f||(f=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n"]))),Wn=nn.d.input(h||(h=Object($.a)(["\n  width: 400px;\n  height: 35px;\n  border-radius: 20px;\n  text-indent: 20px;\n  border: 1px transparent;\n  box-shadow: 0px 0px 6px 1px #d0d1d5;\n  font-size: 16px;\n"]))),Mn=nn.d.div(u||(u=Object($.a)(["\n  display: flex;\n  justify-content: end;\n  position: absolute;\n  padding: 20px;\n  right: 0;\n  bottom: 0;\n"]))),Nn=nn.d.button(O||(O=Object($.a)(["\n  padding: 20px;\n  background: ",";\n  border: 0;\n  border-radius: 20px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all ease 0.2s;\n\n  :hover {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.buttonRed})),_n=t(22),Fn=nn.d.div(m||(m=Object($.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Tn=nn.d.div(v||(v=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  width: 50vw;\n  background: white;\n  border-radius: 20px;\n  background: #202020;\n  box-shadow: 0px 0px 10px 1px ",";\n"])),(function(n){return n.theme.colors.white})),Dn=nn.d.div(g||(g=Object($.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  color: ",";\n  margin-top: 20px;\n"])),(function(n){return n.theme.colors.textWhite})),En=nn.d.div(y||(y=Object($.a)(["\n  border-top: 1px solid ",";\n  margin: 20px 0;\n"])),(function(n){return n.theme.colors.white})),Bn=nn.d.div(w||(w=Object($.a)(["\n  display: flex;\n  justify-content: end;\n\n  svg {\n    fill: ",";\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  svg:hover {\n    width: 32px;\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.red})),Ln=nn.d.div(k||(k=Object($.a)(["\n  display: flex;\n  margin-top: 45px;\n"]))),Pn=nn.d.div(z||(z=Object($.a)([""]))),Rn=nn.d.img(S||(S=Object($.a)(["\n  width: 305px;\n  height: 500px;\n"]))),qn=nn.d.div(C||(C=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  text-indent: 50px;\n"]))),An=nn.d.div(W||(W=Object($.a)([""]))),In=nn.d.p(M||(M=Object($.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.textWhite})),Vn=nn.d.p(N||(N=Object($.a)(["\n  font-size: 16px;\n  font-weight: 400;\n  color: #e7e7e7;\n"]))),Jn=nn.d.div(_||(_=Object($.a)(["\n  display: flex;\n  /* gap: 80px; */\n  margin-top: 30px;\n"]))),Un=nn.d.div(F||(F=Object($.a)(["\n  display: flex;\n  margin-top: 30px;\n"]))),Yn=nn.d.div(T||(T=Object($.a)(["\n  color: #ffffff;\n  display: flex;\n  text-align: left;\n  max-width: 380px;\n  text-indent: 0px;\n  padding: 20px 50px;\n\n  p {\n    font-size: 16px;\n    font-weight: 600;\n  }\n"]))),Hn=t(2),Qn=function(n){var e=n.id,t=void 0===e?"detailModal":e,i=n.closeModal,o=n.comicDetail,r=null===o||void 0===o?void 0:o.creators.items.find((function(n){return"writer"===n.role})),c=null===o||void 0===o?void 0:o.creators.items.find((function(n){return"penciller"===n.role})),a=null===o||void 0===o?void 0:o.creators.items.find((function(n){return"penciller (cover)"===n.role}));return Object(Hn.jsx)(Fn,{id:t,onClick:function(n){n.target.id===t&&i(!1)},children:Object(Hn.jsxs)(Tn,{children:[Object(Hn.jsx)(Bn,{children:Object(Hn.jsx)(_n.a,{onClick:function(){i(!1)},size:35})}),Object(Hn.jsx)(Dn,{children:Object(Hn.jsx)("h1",{children:null===o||void 0===o?void 0:o.title})}),Object(Hn.jsx)(En,{}),Object(Hn.jsxs)(Ln,{children:[Object(Hn.jsx)(Pn,{children:Object(Hn.jsx)(Rn,{src:"".concat(null===o||void 0===o?void 0:o.thumbnail.path,".").concat(null===o||void 0===o?void 0:o.thumbnail.extension),alt:""})}),Object(Hn.jsxs)(qn,{children:[Object(Hn.jsxs)(An,{children:[Object(Hn.jsx)(In,{children:"Published:"}),Object(Hn.jsx)(Vn,{children:null===o||void 0===o?void 0:o.dates[0].date.split("T")[0]})]}),Object(Hn.jsxs)(Jn,{children:[Object(Hn.jsxs)(An,{children:[Object(Hn.jsx)(In,{children:"Writer:"}),Object(Hn.jsx)(Vn,{children:r?r.name:"No information available"})]}),Object(Hn.jsxs)(An,{children:[Object(Hn.jsx)(In,{children:"Penciler:"}),Object(Hn.jsx)(Vn,{children:c?c.name:"No information available"})]})]}),Object(Hn.jsx)(Un,{children:Object(Hn.jsxs)(An,{children:[Object(Hn.jsx)(In,{children:"Cover Artist:"}),Object(Hn.jsx)(Vn,{children:a?a.name:"No information available"})]})}),Object(Hn.jsx)(Yn,{children:Object(Hn.jsx)("p",{children:(null===o||void 0===o?void 0:o.description)?o.description:"..."})})]})]})]})})},Gn=t(52),Kn=t.n(Gn),Xn=t(94),Zn=t(95),$n=t(102),ne=nn.d.div(D||(D=Object($.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ee=nn.d.div(E||(E=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  width: 30vw;\n  background: white;\n  border-radius: 20px;\n  background: #202020;\n  box-shadow: 0px 0px 10px 1px ",";\n"])),(function(n){return n.theme.colors.white})),te=nn.d.div(B||(B=Object($.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 40px;\n"]))),ie=nn.d.div(L||(L=Object($.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding-top: 20px;\n"]))),oe=nn.d.button(P||(P=Object($.a)(["\n  padding: 15px;\n  width: 150px;\n  background: ",";\n  border: 0;\n  border-radius: 20px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all ease 0.2s;\n\n  :hover {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.buttonRed})),re=nn.d.div(R||(R=Object($.a)(["\n  display: flex;\n  justify-content: end;\n\n  svg {\n    fill: ",";\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  svg:hover {\n    width: 32px;\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.red})),ce=nn.d.p(q||(q=Object($.a)(["\n  color: #ff4048;\n  font-size: 16px;\n  text-indent: 30px;\n"]))),ae=t(103),de=t(104),se=nn.d.div(A||(A=Object($.a)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: left;\n  * {\n    outline: 0;\n  }\n\n  input,\n  label {\n    margin: 0.4rem 0;\n  }\n\n  .icon {\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    border-right: 1px solid #202020;\n    width: 35px;\n\n    ","\n  }\n"])),(function(n){return"right"===n.iconDir?Object(nn.c)(I||(I=Object($.a)(["\n            right: 20px;\n          "]))):Object(nn.c)(V||(V=Object($.a)(["\n            left: 20px;\n          "])))})),le=nn.d.label(J||(J=Object($.a)(["\n  display: block;\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.textWhite})),xe=nn.d.input(U||(U=Object($.a)(["\n  width: 300px;\n  height: 40px;\n  box-shadow: 0px 1px 5px 1px #d0d1d5;\n  border: 1px solid #d0d1d5;\n  border-radius: 25px;\n  text-indent: 35px;\n  font-size: 14px;\n  color: ",";\n\n  ::placeholder {\n    color: ",";\n  }\n\n  ","\n"])),(function(n){return n.theme.colors.textBlack}),(function(n){return n.theme.colors.textBlack}),(function(n){return"left"===n.iconDir&&Object(nn.c)(Y||(Y=Object($.a)(["\n      text-indent: 60px;\n    "])))})),pe=nn.d.div(H||(H=Object($.a)(["\n  display: flex;\n  align-items: center;\n"]))),be=["label","icon","iconDir","iconClass"],je=function(n){var e=n.label,t=n.icon,i=n.iconDir,o=void 0===i?"left":i,r=n.iconClass,c=Object(de.a)(n,be);return Object(Hn.jsxs)(se,{iconDir:o,children:[Object(Hn.jsx)(le,{children:e}),Object(Hn.jsxs)(pe,{children:[t&&Object(Hn.jsx)(t,{className:"icon ".concat(String(r))}),Object(Hn.jsx)(xe,Object(ae.a)({iconDir:o},c))]})]})},fe=function(n){var e=n.selecteds,t=function(){var n=e.map((function(n){return n.creators.items.find((function(n){return"writer"===n.role}))}));return n[0]?n[0].name:"No information available"},i=function(){var n=e.map((function(n){return n.creators.items.find((function(n){return"penciller"===n.role}))}));return n[0]?n[0].name:"No information available"},o=function(){var n=e.map((function(n){return n.creators.items.find((function(n){return"penciller (cover)"===n.role}))}));return n[0]?n[0].name:"No information available"};return Object(Hn.jsx)("div",{children:e.map((function(n,e){return Object(Hn.jsxs)("div",{style:{marginTop:"20px",padding:"25px",width:"50vw",borderRadius:"20px",background:"#202020"},children:[Object(Hn.jsx)("div",{style:{display:"flex",fontWeight:"bold",color:"#ffffff",marginTop:"20px",fontSize:"20px"},children:null===n||void 0===n?void 0:n.title}),Object(Hn.jsxs)("div",{style:{display:"flex",marginTop:"45px"},children:[Object(Hn.jsx)("div",{children:Object(Hn.jsx)("img",{src:"".concat(null===n||void 0===n?void 0:n.thumbnail.path,".").concat(null===n||void 0===n?void 0:n.thumbnail.extension),alt:"",style:{width:"305px",height:"500px"}})}),Object(Hn.jsxs)("div",{style:{textIndent:"50px"},children:[Object(Hn.jsxs)("div",{children:[Object(Hn.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:"Published:"}),Object(Hn.jsx)("div",{style:{fontSize:"16px",color:"#e7e7e7"},children:null===n||void 0===n?void 0:n.dates[0].date.split("T")[0]})]}),Object(Hn.jsxs)("div",{style:{display:"flex",marginTop:"30px"},children:[Object(Hn.jsxs)("div",{children:[Object(Hn.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:"Writer:"}),Object(Hn.jsx)("div",{style:{fontSize:"16px",color:"#e7e7e7"},children:t()})]}),Object(Hn.jsxs)("div",{children:[Object(Hn.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:"Penciler:"}),Object(Hn.jsx)("div",{style:{fontSize:"16px",color:"#e7e7e7"},children:i()})]})]}),Object(Hn.jsx)("div",{style:{display:"flex",marginTop:"30px"},children:Object(Hn.jsxs)("div",{children:[Object(Hn.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:"Cover Artist:"}),Object(Hn.jsx)("div",{style:{fontSize:"16px",color:"#e7e7e7"},children:o()})]})}),Object(Hn.jsx)("div",{style:{color:"#ffffff",display:"flex",textAlign:"left",maxWidth:"380px",textIndent:"0px",padding:"20px 50px"},children:Object(Hn.jsx)("p",{style:{fontSize:"16px",fontWeight:"bold"},children:(null===n||void 0===n?void 0:n.description)?n.description:"..."})})]})]})]},e)}))})},he=t(29),ue=Object(nn.d)(he.a)(Q||(Q=Object($.a)(["\n  .Toastify__toast-icon {\n    /* width: auto; */\n    /* position: absolute;\n    right: 20px;\n    top: 40px; */\n  }\n  .Toastify__toast--info {\n    .title {\n      color: #0087ee;\n    }\n  }\n  .Toastify__toast--success {\n    .title {\n      color: #34cf58;\n    }\n  }\n  .Toastify__toast--warning {\n    .title {\n      color: #ffc933;\n    }\n  }\n  .Toastify__toast--error {\n    .title {\n      color: #ff7583;\n    }\n  }\n  /* .Toastify__toast {\n    width: 398px;\n    height: 112px;\n    background: #ffffff;\n    box-shadow: 0px 3px 6px #d7d8e4;\n    border: 5px solid #ffffff;\n    border-radius: 20px;\n    right: 6em;\n    padding: 0 25px;\n  }\n  .toastMessage {\n    width: 100%;\n    display: flex;\n    padding: 25px 0px;\n    flex-direction: column;\n\n    svg {\n      width: 26px;\n      margin-right: 15px;\n      height: 26px;\n      flex: 26px 0 0;\n    }\n\n    .title {\n      position: absolute;\n      top: 10px;\n      font-size: 16px;\n      font-weight: bold;\n    }\n\n    p {\n      color: #989ab8;\n      max-width: 70%;\n      margin-top: 15px;\n      font-size: 0.85rem;\n      font-weight: 600;\n    }\n  } */\n"]))),Oe=(t(134),{colors:{white:"#FFFFFF",red:"#f0141e",redVariant:"#740000",textWhite:"#FFFFFF",textBlack:"#202020",buttonRed:"#740000"}}),me=function(n){var e=n.type,t=n.message;switch(e){case"success":he.b.success(t);break;case"error":he.b.error(t)}};function ve(){return Object(Hn.jsx)(ue,{toastClassName:"toastBody",position:"top-right",autoClose:5e3,hideProgressBar:!1,limit:1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:Oe})}var ge=t(54),ye=t(23),we="Campo obrigat\xf3rio";ye.b({mixed:{default:we,required:we}});var ke,ze,Se=ye.a().shape({name:ye.c().required(),email:ye.c().email("Digite um e-mail v\xe1lido").required()}),Ce=function(n){var e=n.id,t=void 0===e?"modal":e,i=n.closeModal,o=n.selecteds,r=n.onSubmit,c=function(n){Object($n.a)("service_z36mto3","template_8hj9ucl",{subject:"Comics",name:n.name,to_email:n.email,message:Object(Zn.renderToStaticMarkup)(Object(Hn.jsx)(fe,{selecteds:o}))},"user_YkiaSzmojQRythu7P5Uqj").then((function(){me({type:"success",message:"Email successfully sent!"}),i(!1)}),(function(){me({type:"error",message:"Failed to send email!"})}))};return Object(Hn.jsx)(ne,{id:t,onClick:function(n){n.target.id===t&&i(!1)},children:Object(Hn.jsxs)(ee,{children:[Object(Hn.jsx)(re,{children:Object(Hn.jsx)(_n.a,{onClick:function(){i(!1)},size:35})}),Object(Hn.jsx)(ge.b,{validationSchema:Se,initialValues:{name:"",email:""},onSubmit:function(){var n=Object(Xn.a)(Kn.a.mark((function n(e){return Kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r&&r(e),n.next=3,c(e);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:function(n){return Object(Hn.jsx)(te,{children:Object(Hn.jsxs)(ge.a,{onSubmit:n.handleSubmit,children:[Object(Hn.jsx)(je,{"data-testid":"name",name:"name",type:"text",label:"Name",icon:_n.c,placeholder:"Enter your name",onChange:n.handleChange}),n.errors.name&&Object(Hn.jsx)(ce,{children:n.errors.name}),Object(Hn.jsx)(je,{"data-testid":"email",name:"email",type:"email",label:"E-mail",icon:_n.b,placeholder:"Enter your e-mail",onChange:n.handleChange}),n.errors.email&&Object(Hn.jsx)(ce,{children:n.errors.email}),Object(Hn.jsx)(ie,{children:Object(Hn.jsx)(oe,{type:"submit",children:"Send"})})]})})}})]})})},We=nn.d.div(ke||(ke=Object($.a)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n  }\n  :nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  :nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  :nth-child(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Me=nn.d.div(ze||(ze=Object($.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n"]))),Ne=function(){return Object(Hn.jsx)(Me,{children:Object(Hn.jsxs)(We,{children:[Object(Hn.jsx)("div",{}),Object(Hn.jsx)("div",{}),Object(Hn.jsx)("div",{}),Object(Hn.jsx)("div",{})]})})},_e=function(){var n=Object(G.useState)([]),e=Object(cn.a)(n,2),t=e[0],i=e[1],o=Object(G.useState)(),r=Object(cn.a)(o,2),c=r[0],a=r[1],d=Object(G.useState)(""),s=Object(cn.a)(d,2),l=s[0],x=s[1],p=Object(G.useState)(!1),b=Object(cn.a)(p,2),j=b[0],f=b[1],h=Object(G.useState)(!1),u=Object(cn.a)(h,2),O=u[0],m=u[1],v=Object(G.useState)(0),g=Object(cn.a)(v,2),y=g[0],w=g[1],k=Object(G.useState)(!0),z=Object(cn.a)(k,2),S=z[0],C=z[1],W=Object(G.useState)([]),M=Object(cn.a)(W,2),N=M[0],_=M[1];Object(G.useEffect)((function(){hn().then((function(n){i(n.data.data.results)})).finally((function(){return C(!1)})).catch((function(){return me({type:"error",message:"Failed to load comics!"})}))}),[]);return Object(Hn.jsxs)(mn,{children:[Object(Hn.jsxs)(Cn,{children:[Object(Hn.jsx)(gn,{src:On,alt:"marvel logo"}),Object(Hn.jsx)(Wn,{type:"text",placeholder:"Search comics",onChange:function(n){x(n.target.value)}})]}),S?Object(Hn.jsx)(Ne,{}):Object(Hn.jsxs)(yn,{showModal:j,showEmailModal:O,style:{marginLeft:y,width:200*t.length},inputState:l,children:[Object(Hn.jsx)(vn,{className:"arrow-left",onClick:function(){var n=y+Math.round(window.innerWidth/2);n>0&&(n=0),w(n)},children:Object(Hn.jsx)(un.a,{})}),Object(Hn.jsx)(vn,{className:"arrow-right",onClick:function(){var n=y-Math.round(window.innerWidth/2),e=200*t.length;window.innerWidth-e>n&&(n=window.innerWidth-e),w(n)},children:Object(Hn.jsx)(un.b,{})}),t.filter((function(n){return n.title.toLowerCase().includes(l.toLowerCase())?n:null})).map((function(n){return Object(Hn.jsxs)(wn,{className:(e=n.id,N.find((function(n){return n.id===e}))&&"selected"),onClick:function(e){!function(n,e){N.find((function(n){return n.id===e.id}))||"path"===n.target.nodeName?_(N.filter((function(n){return n.id!==e.id}))):_((function(n){return[].concat(Object(rn.a)(n),[e])}))}(e,n)},children:[Object(Hn.jsx)(kn,{children:Object(Hn.jsx)("img",{src:"".concat(n.thumbnail.path,".").concat(n.thumbnail.extension),alt:"comics"})}),Object(Hn.jsxs)(zn,{children:[Object(Hn.jsx)("strong",{children:n.title}),Object(Hn.jsx)("p",{children:n.description?n.description:"..."}),Object(Hn.jsx)(Sn,{children:Object(Hn.jsx)(un.c,{size:32,onClick:function(){!function(n){a(n),f(!j)}(n)}})})]})]},n.id);var e}))]}),j&&Object(Hn.jsx)(Qn,{closeModal:f,comicDetail:c}),O&&Object(Hn.jsx)(Ce,{closeModal:m,selecteds:N}),Object(Hn.jsx)(Mn,{children:Object(Hn.jsx)(Nn,{onClick:function(){m(!O)},children:"Send by email"})})]})};function Fe(){return Object(Hn.jsx)(tn.a,{children:Object(Hn.jsx)(on.c,{children:Object(Hn.jsx)(on.a,{path:"/marvel-app",element:Object(Hn.jsx)(_e,{})})})})}var Te=function(){return Object(Hn.jsxs)(nn.a,{theme:Oe,children:[Object(Hn.jsx)(ve,{}),Object(Hn.jsx)(Fe,{}),Object(Hn.jsx)(en,{})]})};Z.a.render(Object(Hn.jsx)(K.a.StrictMode,{children:Object(Hn.jsx)(Te,{})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.1f782901.chunk.js.map