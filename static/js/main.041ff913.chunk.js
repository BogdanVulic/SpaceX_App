(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{66:function(e,n,t){"use strict";t.r(n);var r,c,i,a,s,o,l,d,j,u,b,p=t(1),h=t.n(p),g=t(33),x=t.n(g),O=t(2),m=t(3),f=t(4),v=f.a.div(r||(r=Object(m.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    padding: 20px;\n    justify-content: center;\n    align-items: center;\n    p{\n        margin: 5px;\n    }\n    img{\n        width: 70%;\n        margin-bottom: 20px;\n    }\n"]))),k=t.p+"static/media/logo.70bab643.png",w=t(0),y=function(e){var n,t,r,c,i=e.company;return Object(w.jsxs)(v,{children:[Object(w.jsx)("img",{src:k,alt:""}),Object(w.jsx)("p",{children:i.summary}),Object(w.jsxs)("p",{children:["CEO: ",i.ceo]}),Object(w.jsxs)("p",{children:["COO: ",i.coo]}),Object(w.jsxs)("p",{children:["Employees: ",i.employees]}),Object(w.jsxs)("p",{children:["Founded: ",i.founded]}),Object(w.jsxs)("p",{children:["HeadQuarters: ",null===(n=i.headquarters)||void 0===n?void 0:n.address,", ",null===(t=i.headquarters)||void 0===t?void 0:t.city,", ",null===(r=i.headquarters)||void 0===r?void 0:r.state]}),Object(w.jsx)("a",{target:"blank",href:null===(c=i.links)||void 0===c?void 0:c.website,children:"Official website"})]})},C=t(6),S=t(5),N=f.a.div(c||(c=Object(m.a)(["\n    \n    div{\n        padding: 10px;\n        transition: transform .2s;\n    }\n    div:hover{\n        transform: scale(1.03);\n    }\n    img{\n        width: 80px;\n        heigth: 80x;\n    }\n    div > p{\n        padding: 10px;\n        font-size: 10px;\n    }\n"]))),F=function(e){var n=e.launch;return Object(w.jsx)(N,{children:Object(w.jsx)("div",{children:Object(w.jsxs)(S.b,{to:"/launches/".concat(n.id),children:[Object(w.jsx)("img",{src:n.links.patch.small?n.links.patch.small:"https://via.placeholder.com/200",alt:""}),Object(w.jsx)("p",{children:n.name})]})})})},I=f.a.div(i||(i=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 2px;\n    margin: 10px;\n    align-items: center;\n    justify-items: center;\n    .arrow {\n        border: solid rgb(126, 126, 126);\n        border-width: 0 3px 3px 0;\n        display: inline-block;\n        padding: 10px;\n    }\n    .right{\n        transform: rotate(-45deg);\n        -webkit-transform: rotate(-45deg);\n    }\n    .left {\n        transform: rotate(135deg);\n        -webkit-transform: rotate(135deg);\n    }\n    .right:hover, .left:hover{\n        border-color: #3234C2;\n        cursor: pointer;\n    }\n      \n"]))),M=f.a.select(a||(a=Object(m.a)(["\n    appearance: none;\n    background-color: rgba(0,0,0,0.5);\n    border-radius: 3px;\n    padding: 5px 10px;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n"]))),R=function(e){var n=e.setPerPage,t=e.setMargins;return Object(w.jsxs)(M,{onChange:function(e){n(Number(e.target.value)),t((function(n){return[0,Number(e.target.value)]}))},children:[Object(w.jsx)("option",{value:5,children:"5"}),Object(w.jsx)("option",{value:10,children:"10"}),Object(w.jsx)("option",{value:15,children:"15"})]})},U=t(38),D=f.a.button(s||(s=Object(m.a)(["\n    background: none;\n    border: none;\n    padding: 5px;\n    cursor: pointer;\n    outline: inherit;\n    bottom: 20px;\n    :hover{\n        color: #005288;\n    }\n"]))),E=function(e){var n=e.length,t=e.perPage,r=e.setMargins,c=Object(U.a)(Array(Math.ceil(n/t)).keys());return Object(w.jsx)("div",{children:c.length>1&&c.map((function(e){return Object(w.jsx)(D,{onClick:function(){r((function(n){return[e*t,e*t+t]}))},children:e+1},e)}))})},L=function(e){var n=e.perPage,t=e.setMargins,r=e.rockets,c=e.rocketID,i=e.setRocketID;return Object(w.jsx)("form",{style:{padding:10},children:Object(w.jsx)(w.Fragment,{children:r.map((function(e){return Object(w.jsxs)("label",{style:{padding:10},children:[e.name,Object(w.jsx)("input",{type:"radio",checked:c===e.id,value:e.id,onChange:function(e){i(e.target.value),t((function(e){return[0,n]}))}})]},e.id)}))})})},P=function(e){var n=e.rockets,t=e.launches,r=e.loggedIn,c=Object(p.useState)([0,5]),i=Object(O.a)(c,2),a=i[0],s=i[1],o=Object(p.useState)(5),l=Object(O.a)(o,2),d=l[0],j=l[1],u=Object(p.useState)(""),b=Object(O.a)(u,2),h=b[0],g=b[1];return Object(w.jsx)(w.Fragment,{children:r?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(L,{perPage:d,setMargins:s,rocketID:h,setRocketID:g,rockets:n}),Object(w.jsx)("span",{style:{padding:5},children:"Launches per page"}),Object(w.jsx)(R,{setMargins:s,setPerPage:j}),Object(w.jsx)(I,{children:t.filter((function(e){return e.rocket.includes(h)})).slice(a[0],a[1]).map((function(e){return Object(w.jsx)(F,{launch:e},e.id)}))}),Object(w.jsx)(E,{length:t.filter((function(e){return e.rocket.includes(h)})).length,perPage:d,setMargins:s})]}):Object(w.jsx)(C.a,{to:"/login"})})},_=f.a.div(o||(o=Object(m.a)(["\n    details{\n        padding: 5px;\n        p{\n            padding: 5px;\n        }\n    }\n    h2{\n        padding: 10px;\n        font-size: 18px;\n    }\n"]))),T=function(e){var n=e.rocket;return Object(w.jsxs)(_,{children:[Object(w.jsx)("img",{style:{width:400,height:300},src:n.flickr_images[0],alt:""}),Object(w.jsx)("h2",{children:n.name}),Object(w.jsxs)("details",{children:[Object(w.jsx)("p",{children:n.description}),Object(w.jsxs)("p",{children:["Cost per launch: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(n.cost_per_launch)]}),Object(w.jsxs)("p",{children:["Height: ",n.height.meters,"m"]}),Object(w.jsx)("p",{children:n.active?"Currently active":"Currently not active"}),Object(w.jsx)("a",{href:n.wikipedia,target:"blank",children:"Read more at wiki"})]})]})},z=f.a.div(l||(l=Object(m.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\ngrid-gap: 2px;\nmargin: 10px;\nalign-items: center;\njustify-items: center;\n.arrow {\n    border: solid rgb(126, 126, 126);\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 10px;\n}\n.right{\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n}\n.left {\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n}\n.right:hover, .left:hover{\n    border-color: #005288;\n    cursor: pointer;\n}\n"]))),A=function(e){var n=e.rockets,t=e.loggedIn,r=Object(p.useState)([0,1]),c=Object(O.a)(r,2),i=c[0],a=c[1];return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsxs)(z,{children:[Object(w.jsx)("p",{className:0===i[0]?"remove":void 0,onClick:function(){a((function(e){return[e[0]-1,e[1]-1]}))},children:Object(w.jsx)("i",{className:"arrow left"})}),n.slice(i[0],i[1]).map((function(e){return Object(w.jsx)(T,{rocket:e},e.name)})),Object(w.jsx)("p",{className:i[1]>=n.length?"remove":void 0,onClick:function(){a((function(e){return[e[0]+1,e[1]+1]}))},children:Object(w.jsx)("i",{className:"arrow right"})})]}):Object(w.jsx)(C.a,{to:"/login"})})},H=function(e){var n=e.crewMember;return Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{style:{width:100,height:130},src:n.image,alt:""}),Object(w.jsx)("p",{children:Object(w.jsx)(S.b,{to:"/crew/".concat(n.id),children:n.name})})]})},q=f.a.div(d||(d=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 1rem;\n    justify-content: center;\n    align-items: center;\n"]))),B=function(e){var n=e.crew,t=e.loggedIn;return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsx)(q,{children:n.map((function(e){return Object(w.jsx)(H,{crewMember:e},e.id)}))}):Object(w.jsx)(C.a,{to:"/login"})})},J=t(13),V=t.n(J),W="https://api.spacexdata.com/v4",K=function(){return V.a.get("https://my-json-server.typicode.com/BogdanVulic/json_server/users")},Q=f.a.nav(j||(j=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    margin-bottom: 20px;\n    background-color: rgba(0, 0, 0);\n    padding: 10px;\n    display: grid;\n    grid-auto-rows: minmax(40px, auto);\n    grid-gap: 20px;\n    border: 1px solid black;\n    img{\n        max-width: 150px;\n    }\n    a{\n        padding-top: 10px;\n        color: #C1C1C1;\n        text-decoration: none;\n    }\n    a:hover{\n        color: #005288;\n    }\n    span{\n        padding-top: 10px;\n        color: #C1C1C1;\n    }\n    button{\n        background: none;\n        color: #C1C1C1;\n        border: none;\n        padding-bottom: 7px;\n        cursor: pointer;\n        outline: inherit;\n    }\n    span > span {\n        color: #005288;\n    }"]))),Z=function(e){var n=e.user,t=e.setUser;return Object(w.jsxs)(Q,{children:[Object(w.jsx)("img",{src:k,alt:""}),Object(w.jsx)(S.b,{to:"/",children:"HOME"}),Object(w.jsx)(S.b,{to:"/launches",children:"LAUNCHES"}),Object(w.jsx)(S.b,{to:"/rockets",children:"ROCKETS"}),Object(w.jsx)(S.b,{to:"/crew",children:"CREW"}),n?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("span",{children:["Welcome ",Object(w.jsx)("span",{children:n.username})]}),Object(w.jsx)("button",{onClick:function(){return t(null)},children:"Logout"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S.b,{to:"/login",children:"Login"}),Object(w.jsx)(S.b,{to:"/register",children:"Register"})]})]})},G=f.a.form(u||(u=Object(m.a)(["\ndisplay: flex;\nflex-flow: column wrap;\npadding: 20px;\ncolor: black;\njustify-content: center;\nalign-items: center;\ninput{\n    padding: 5px;\n    color: black;\n    width: 500px;\n    margin: 5px;\n}\n#submit{\n    width: 100px;\n    height: 30px;\n}\n"]))),X=function(e){var n=e.setUser,t=Object(p.useState)(""),r=Object(O.a)(t,2),c=r[0],i=r[1],a=Object(p.useState)(""),s=Object(O.a)(a,2),o=s[0],l=s[1],d=Object(p.useState)(""),j=Object(O.a)(d,2),u=j[0],b=j[1],h=Object(C.g)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(G,{onSubmit:function(e){e.preventDefault(),K().then((function(e){var t=e.data.find((function(e){return(e.username===c||e.email===c)&&e.password===o}));t?(n(t),h.push("/launches")):(b("Username or password incorrect"),setTimeout((function(){b("")}),5e3))}))},children:[Object(w.jsx)("input",{type:"text",placeholder:"username or email...",onChange:function(e){return i(e.target.value)}}),Object(w.jsx)("input",{type:"password",placeholder:"password...",onChange:function(e){return l(e.target.value)}}),Object(w.jsx)("input",{id:"submit",type:"submit",value:"Login"})]}),Object(w.jsx)("div",{children:Object(w.jsx)(S.b,{to:"/register",children:"Not registered?"})}),Object(w.jsx)("p",{children:u})]})},Y=f.a.form(b||(b=Object(m.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    padding: 20px;\n    color: black;\n    justify-content: center;\n    align-items: center;\n    input{\n        padding: 5px;\n        color: black;\n        width: 500px;\n        margin: 5px;\n    }\n    #submit{\n        width: 100px;\n        height: 30px;\n    }\n"]))),$=function(){var e=function(){var e=Object(p.useState)(""),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(p.useState)(""),i=Object(O.a)(c,2),a=i[0],s=i[1],o=Object(p.useState)(""),l=Object(O.a)(o,2);return[t,r,a,s,l[0],l[1]]}(),n=Object(O.a)(e,6),t=n[0],r=n[1],c=n[2],i=n[3],a=n[4],s=n[5],o=Object(p.useState)(""),l=Object(O.a)(o,2),d=l[0],j=l[1],u=Object(C.g)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(Y,{onSubmit:function(e){if(e.preventDefault(),t.length<4&&!function(e){return e.length>=8&&e.split("").some((function(e){return!isNaN(Number(e))}))&&e.split("").some((function(e){return e>="A"&&e<="Z"||e>="a"&&e<="z"}))}(a))return j("Invalid entry: username has to be at least 4 characters long, password at least 8 characters long with at least one letter and one number"),void setTimeout((function(){j("")}),7e3);K().then((function(e){e.data.some((function(e){return e.username===t||e.email===c}))?(j("User already exists"),setTimeout((function(){j("")}),3e3)):function(e,n,t){return V.a.post("https://my-json-server.typicode.com/BogdanVulic/json_server/users",{username:e,email:n,password:t})}(t,c,a).then((function(e){u.push("/login")}))}))},children:[Object(w.jsx)("input",{type:"text",placeholder:"username...",onChange:function(e){return r(e.target.value)}}),Object(w.jsx)("input",{type:"email",placeholder:"email...",onChange:function(e){return i(e.target.value)}}),Object(w.jsx)("input",{type:"password",placeholder:"password...",onChange:function(e){return s(e.target.value)}}),Object(w.jsx)("input",{id:"submit",type:"submit",value:"Register"})]}),Object(w.jsx)("p",{children:d})]})},ee=function(e){var n=e.crew,t=e.launches,r=Object(C.h)().id,c=n.find((function(e){return e.id===r})),i=t.filter((function(e){return e.id===c.launches[0]})).map((function(e){return Object(w.jsx)(S.b,{to:"/launches/".concat(e.id),children:e.name},e.id)}));return Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{style:{width:200,height:260},src:c.image,alt:""}),Object(w.jsx)("p",{children:c.name}),Object(w.jsxs)("p",{children:["Agency: ",c.agency]}),Object(w.jsxs)("div",{children:["Launches: ",i[0]?i:"No Launches"]}),Object(w.jsxs)("p",{children:["Status: ",c.status]}),Object(w.jsx)("a",{href:c.wikipedia,target:"blank",children:"Read more at wiki"})]})},ne=function(e){var n=e.launches,t=e.rockets,r=Object(C.h)().id,c=n.find((function(e){return e.id===r}));return Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:c.links.patch.small?c.links.patch.small:"https://via.placeholder.com/200",alt:""}),Object(w.jsx)("p",{children:c.name}),Object(w.jsx)("p",{children:c.details?c.details:"No details"}),Object(w.jsxs)("p",{children:["Launch date: ",c.date_utc.split("T")[0].split("-").reverse().join(". ").concat(".")]}),Object(w.jsxs)("p",{children:["Rocket: ",t.find((function(e){return e.id===c.rocket})).name]})]})},te=function(){var e=Object(p.useState)({}),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(p.useState)([]),i=Object(O.a)(c,2),a=i[0],s=i[1],o=Object(p.useState)([]),l=Object(O.a)(o,2),d=l[0],j=l[1],u=Object(p.useState)(null),b=Object(O.a)(u,2),h=b[0],g=b[1],x=Object(p.useState)([]),m=Object(O.a)(x,2),f=m[0],v=m[1];return Object(p.useEffect)((function(){h&&(V.a.get("".concat(W).concat("/company")).then((function(e){r(e.data)})),V.a.get("".concat(W).concat("/launches")).then((function(e){s(e.data)})),V.a.get("".concat(W).concat("/rockets")).then((function(e){j(e.data)})),V.a.get("".concat(W).concat("/crew")).then((function(e){v(e.data)})))}),[h]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(S.a,{children:[Object(w.jsx)(Z,{user:h,setUser:g}),Object(w.jsxs)(C.d,{children:[Object(w.jsx)(C.b,{exact:!0,path:"/",children:Object(w.jsx)(y,{company:t})}),Object(w.jsx)(C.b,{path:"/launches/:id",children:Object(w.jsx)(ne,{launches:a,rockets:d})}),Object(w.jsx)(C.b,{path:"/launches",children:Object(w.jsx)(P,{rockets:d,loggedIn:h,launches:a})}),Object(w.jsx)(C.b,{path:"/rockets",children:Object(w.jsx)(A,{loggedIn:h,rockets:d})}),Object(w.jsx)(C.b,{path:"/crew/:id",children:Object(w.jsx)(ee,{crew:f,launches:a})}),Object(w.jsx)(C.b,{path:"/crew",children:Object(w.jsx)(B,{loggedIn:h,crew:f,launches:a})}),Object(w.jsx)(C.b,{path:"/login",children:Object(w.jsx)(X,{setUser:g})}),Object(w.jsx)(C.b,{path:"/register",children:Object(w.jsx)($,{})})]})]})})};x.a.render(Object(w.jsx)(h.a.StrictMode,{children:Object(w.jsx)(te,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.041ff913.chunk.js.map