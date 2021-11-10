(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{89:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),s=a.n(r),c=a(64),i=a(19),l=a(12),d=a(32),b=a(28),j=a(121),p=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],o=t[1];return{handleImageOnLoad:function(){o(!0)},css:{thumbnail:{visibility:a?"hidden":"visible",filter:"blur(8px)",transition:"visibility 0ms ease-out 500ms"},fullSize:{opacity:a?1:0,transition:"opacity 500ms ease-in 0ms"}}}},m=a(118),h=a(132),x=a(134),u=a(65),f=a(116),g=a(50),O=Object(u.a)({palette:{primary:{main:"#FFF"},secondary:g.a},typography:{fontFamily:"Roboto, sans-serif"},overrides:{MuiButton:{label:{color:"#FFF"}}}}),v=Object(f.a)({root:{height:"100vh",display:"flex",flexDirection:"row"},frame:{width:"40%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},form:{display:"flex",flexDirection:"column"},header:{height:"28px",fontSize:"24px",display:"flex",alignItems:"center",letterSpacing:"0.05em",textTransform:"capitalize",margin:"20px 0px",fontFamily:"Roboto, sans-serif"},paragraph:{fontFamily:"Roboto, sans-serif",fontSize:"20px",textAlign:"center",letterSpacing:"0.05em"},input:{width:"380px",height:"42px",marginTop:"20px",marginBottom:"20px"},buttonLogIn:{fontWeight:"bold",marginTop:"20px"},wrapper:{height:"100%",width:"60%"},signIn:{display:"flex",flexDirection:"row",margin:"100px",justifyContent:"center"},buttonSignIn:{height:"30px",fontSize:"17px",fontWeight:"bold",margin:"0px 0px 0px 20px",width:"170px"}}),A=a(2),y=function(e){var t=e.show,a=e.onSubmit,n=v(),o=n.frame,r=n.header,s=n.paragraph,c=n.form,i=n.input,l=n.buttonLogIn,d=n.signIn,b=n.buttonSignIn;return Object(A.jsxs)("div",{className:o,children:[Object(A.jsx)("h1",{className:r,children:"We've missed you!"}),Object(A.jsx)(m.a,{className:s,children:"Login"}),Object(A.jsxs)("form",{className:c,color:"main",onSubmit:a,children:[Object(A.jsx)(h.a,{variant:"outlined",label:"username",type:"text",className:i,color:"secondary",required:!0}),Object(A.jsx)(h.a,{variant:"outlined",label:"password",type:"password",className:i,color:"secondary",required:!0}),Object(A.jsx)(x.a,{color:"secondary",variant:"contained",className:l,type:"submit",children:"Log In"})]}),Object(A.jsxs)("div",{className:d,children:[Object(A.jsx)(m.a,{className:s,children:"New to Redditlone?"}),Object(A.jsx)(x.a,{color:"secondary",variant:"contained",className:b,onClick:function(){return t(!0)},children:"Sign Up"})]})]})},N=function(e){var t=e.show,a=e.onSubmit,n=v(),o=n.frame,r=n.header,s=n.paragraph,c=n.form,i=n.input,l=n.buttonLogIn,d=n.signIn,b=n.buttonSignIn;return Object(A.jsxs)("div",{className:o,children:[Object(A.jsx)("h1",{className:r,children:"Sign Up"}),Object(A.jsx)(m.a,{className:s,children:"Your username is how other community members will see you."}),Object(A.jsxs)("form",{className:c,color:"main",onSubmit:a,children:[Object(A.jsx)(h.a,{variant:"outlined",label:"username",type:"text",className:i,color:"secondary",required:!0}),Object(A.jsx)(h.a,{variant:"outlined",label:"password",type:"text",className:i,color:"secondary",required:!0}),Object(A.jsx)(x.a,{color:"secondary",variant:"contained",className:l,type:"submit",children:"Sign Up"})]}),Object(A.jsxs)("div",{className:d,children:[Object(A.jsx)(m.a,{className:s,children:"Already a Redditloner?"}),Object(A.jsx)(x.a,{color:"secondary",variant:"contained",className:b,onClick:function(){return t(!1)},children:"Log In"})]})]})},w=a.p+"static/media/loginPic.f4fbabf2.jpg",C=function(){var e=p(),t=e.handleImageOnLoad,a=e.css,o=v(),r=o.root,s=o.wrapper,c=Object(n.useState)(!0),i=Object(b.a)(c,2),m=i[0],h=i[1],x=Object(l.f)(),u=function(e){h(!e)},f=function(e){e.preventDefault(),console.log("form",e),x.push("/")};return Object(A.jsx)(j.a,{theme:O,children:Object(A.jsxs)("div",{className:r,children:[m?Object(A.jsx)(y,{show:u,onSubmit:f}):Object(A.jsx)(N,{show:u,onSubmit:f}),Object(A.jsx)("img",{src:w,alt:"loginPicture",className:s,onLoad:t,style:Object(d.a)({},a.fullSize)})]})})},S=a(133),_=a(69),B=a(126),I=a(124),k=a(125),z=a(122),F=a(123),R=function(e){var t=e.children,a=Object(z.a)();return Object(A.jsx)(F.a,{appear:!1,direction:"down",in:!a,children:t})},q=Object(f.a)((function(e){return{root:{flexGrow:1,display:"flex",justifyContent:"space-between"},homeButton:{marginRight:e.spacing(2),backgroundColor:"#F48023",color:"#FFF","&:hover":{backgroundColor:"#b45100",borderColor:"#b45100",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#b45100",borderColor:"#b45100"},"&:focus":{boxShadow:"0 0 0 0.2rem #b451008f"}},loginButton:{backgroundColor:"#EAEAEA",color:"#1682FD","& .MuiButton-label":{color:"#1682FD"},"&:hover":{backgroundColor:"#cbe3ff",borderColor:"#cbe3ff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#cbe3ff",borderColor:"#cbe3ff"},"&:focus":{boxShadow:"0 0 0 0.2rem #cbe3ff84"}},logo:{maxHeight:"60px"},logoBtn:{padding:0}}})),U=function(e){var t=q(),a=t.root,n=t.logoBtn,r=t.logo,s=t.homeButton,c=t.loginButton;return Object(A.jsx)(o.a.Fragment,{children:Object(A.jsx)(R,Object(d.a)(Object(d.a)({},e),{},{children:Object(A.jsx)(I.a,{color:"transparent",children:Object(A.jsxs)(k.a,{className:a,children:[Object(A.jsx)(x.a,{className:n,component:i.b,to:"/",children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAACHCAYAAAAhmXSRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmTSURBVHgB7d3hddM6GMZx9Z77HZgAOkHbCYAJSidomYAyAWUC6ASFCUonKJ2gdILSCYAJcvP48ObourYlK44jy//fOTm0jZPYxk8kS7K8s1hyAIrwjwNQDAINFIRAAwUh0EBBCDRQEAINFIRAAwUh0EBBCDRQEAINFIRAAwUh0EBBCDRQEAINFIRAAwUh0EBBCDRQEAINFIRAAwUh0EBBCDRQkH8dsvLt2zd3c3Pjfv/+7Tbl6dOnq8fe3l717/7+vsP0EehM/Pz50x0dHbkfP364bXn16lUV7MPDw+pnTM8O83Ln4fXr1+779+8uFy9evKhC/eHDh+pnTAOBzoCCrEDn6uTkhGBPBI1iGVB1O2dfvnxxu7u77u3bt9mv69wRaERTsA8ODtzHjx8d8kSg0Yta38/OzqoGPErr/BBoJFH3ms77CXVeCDSSKcyEOi/0Q0/Emzdv3KdPn9xQFEJVn+/u7qpW9tQuMwv19fU1reAZINATodFcQwbG3ktfFOqSEjV6XV1dVdXpPizUt7e31Xpie6hyY0X9zZeXl+7+/r76uQ+FWt1a2C4CjUdUel9cXPSuRqtkPz8/d9geAo1WGvqparSq5bHUpbXJC0vQjUCjk86JVQ238+wQhZmBJ9tDoBFFJe/p6WnUsp8/f6Yra0sINKKp2yz2skpK6e0g0OhF1e+Yrik1kHEuPT4CjV4U5pgBLgrz169fHcZFoNGb+qhjqt59B6hgfQQaSWJavTWclGr3uAg0kqiEjjmXzmlapTkg0EgWMzxUM5hiPAQayWLOo+mPHheBRjLN6R2yzWmJ54hAI5ku3AidR9MoNi4CjbU8efKk83kCPS4CjbVoel/kg0ADBSHQQEEINNai6YqQDwKNtTw8PHQ+z0yg4yLQSBYzrJNAj4tAI5nm9A5hWt9xEWgki7k8khvHj4tAI4nGaMdUuV++fOkwHgKNJDFzhun8eX9/32E8BBq9qXTWbXNCqG6Pj0CjN93HKsbx8bHDuAg0enn//n3UNc6qblNCj49AI5rOmzWJfozYO21gWAQaURRm3T0jhkrnvnevxDC4PzQ62b2qYktmGfLG9OiHQKOV+pl1z+c+84KpZO5zt0oMiyo3HtE8YAqyWrP7hFlVbUrn7aKERkVVaw3l1O1rUubS1pht3SCesdvbRaAnQoEbctJ6lbx//vypSmN7pLIwc2XV9hHoiVDpmeO9oizMDPHMA+fQSKYSmTDnhUAjiUaBEeb8EGj0YveH5pw5T5xDI5r6lxVmgpwvAo1OKpEVZF05xcUW+SPQaKVRXyqR6VueDs6h0Up91YR5WiihJ0KtyUONkdYN5nRdc4gGspyfn7t37945TAOBnggFeshrjDVKLOZySC2j82dK6mmgyj1TKnVjWqs15FQXamAadhZLDkARKKGBghDoiVEjVVsVWFdM9bl+2afXHR0dJb8eeSDQE6MrrjQndj14+tvBwUHrFLtaviusug5a731zc+MwXQS6EGq17qLSV4FH2ei2KoRarZ8/f9569dOvX7+qFmuUjUAXhMn5QKAjWMlmgyv0u85H9a/6ctv6c/3zVpWcsYMz/PfXa2KvObblN02fY1MWxW5Xfd30etuvfS/6iN3/s7RA0PKgXSwPxurns7Oz6mftOnvc3t7+b/mLi4vqNf4yepycnCzu7+9bP0fPLQ/uR++/PGAXy0avahk9r7/V32dZpa7+fnp6+r/302fqYe9pv+vhr7e2S8/b5zS5vr5efX7b+jXROmk5rWPT/tPvoX3j75++nz8nlNAR7PxTjUoqWVSi+KWKX/LYHSb0t+WB7Pb29qrXXl1dVS3RGh/dNDmA3lct1FpW762ST+fEDw8PVeuzrnzqaqW20s4/T9bP9btE+r/r3s2xpb9/5wxV7e2+z3d3d9V7av20DU3T+No6qbtN22Lbp31k95nu2jdS3z+Hh4erz/f3z+xvwbNA0DJYq5KgqxRRyazlVDqrNKpbHuyr9/HpPfU3PadlmiwP1FVp5hpKaP3u/pbAXdvQpquEtufatl9/sxqJlq3TOrm/pWnT9mlfHR8fV8+rBG56f322tl21hLbn9fqm5+eEQEewMIQOFh1UodBb9fPy8nL1NzvgFdou9toxA21hCW2XQmlfNvUvM9s+/3SgiYWy/jn2en1httH/TdsXwpzQD91DV+ONqouq8qk62tVIY5ciqgpuVGXUa0JXP22jOmnbpW3v2i47xRANUmli1eQ21kpfH9yidQjdAM9Og9aZX7wEnEMPROdyYjd3C7HzYWvtjWnptRbvMQ9a266Ym7drGX0pta1fqDVa7Q3itxVYi7ZeG9qvWtZffo4I9ECs4afeCBX7utjuprGvS+67fjLkeHD7fL1nzPXbWs85X7tNlXsgdhAtz411ohp8qDVX+pYkdoCPVQLZdsWENCX8sZ+v6njMflWPBIHG2qy62PfiBgVTB6DOo0NDMxUqVWfHnNy+z3bZMqFz5T60b9R9p/Nohq6GEeiBWKORbozet8qpxqSYc297PmWOr93d3erftvNbhUbqoVHJqFA1XeHl03Padi079HS/6r+ObZuYOwI9oGW3SvWvBkA03SnSrjnWNc0+mw5IgWg6aHUwa1I/hUqlc1drbxsLWdsN3K0KX78hnt0pQ+ug7Wq6YZ621e4lHTu1UR+h/SPapzbwZNYWCAr14fpsAIj72yeqvlc9/CGLTf3N/uAI/bssGavX+cM29R5tfcGhfmj1DfvDUe0zfLaO+rz64Jj6dtnw0dB2ifUjh4Z22sCcpsEpTftHy/n7p21Az5wQ6Ag6aOuju7rYGGp/zLJ+1vt0DU7RwaiRVHbg+gFqG0Hmv1av6xqcomX0JeEHo2m9bX2bBq+kbJfWXcuFwmaDQ9oGkKyzf+aCSQI3zKq3Ka3ZdoVSjq22qds1lNz3z7YQaKAgNIoBBSHQGVDr9c7OTucjt8nu1bIdWmd7NLX4YzMINJKoG8wuxgixfmRsHoFGMl39FdMopga0et87NoNAI5kNOomhQSHYPAKNtWhoaMxQT39iQWwOgc7As2fPgsvk3NeqIa+xM39iswh0BjThXigQQ17BNDSdR4dmU9EyQ1+0gccIdAZC56IKS+5hUIt31zqmXCGGBAtkoz7v9dTGKGustcZ621jrmHHeGBZDP4GCUOUGCkKggYIQaKAgBBooCIEGCkKggYIQaKAgBBooCIEGCkKggYIQaKAgBBooCIEGCkKggYIQaKAgBBooCIEGCkKggYIQaKAgBBooCIEGCvIf/WsfGE9VFtQAAAAASUVORK5CYII=",className:r,alt:"Reditlone logo",loading:"lazy"})}),Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{variant:"contained",className:s,component:i.b,"data-testid":"homeRoute",to:"/",children:Object(A.jsx)(m.a,{variant:"button",children:"Home"})}),Object(A.jsx)(x.a,{variant:"contained",className:c,component:i.b,"data-testid":"loginRoute",to:"/login",children:Object(A.jsx)(m.a,{variant:"button",children:"Login"})})]})]})})}))})},Q=Object(u.a)({typography:{fontFamily:"Roboto, sans-serif",h1:{fontSize:"3rem"}},palette:{secondary:g.a}}),P=function(e){var t=e.children;return Object(A.jsx)(o.a.Fragment,{children:Object(A.jsx)(j.a,{theme:Q,children:Object(A.jsx)(_.a,{style:{minHeight:"100vh"},children:Object(A.jsxs)(B.a,{children:[Object(A.jsx)(U,{}),t]})})})})},E=a(127),W=a(128),D=a(135),V=a(129),H=a(130),K=a(131),X=a(91),G=Object(X.a)((function(){return{post:{cursor:"pointer",marginTop:"20px","&:hover":{borderColor:"#b45100",boxShadow:"4px 11px 28px 0px rgba(34, 60, 80, 0.2)"}},arrowUp:{color:"#696969",transition:"0.3s","&:hover":{color:"#FF0000"}},arrowDown:{color:"#696969",transition:"0.3s","&:hover":{color:"#0000CD"}},comments:{color:"#696969",transition:"0.3s"},post__Top:{display:"flex",justifyContent:"space-between",marginBottom:"20px"},post__User:{display:"flex",alignItems:"center",columnGap:"10px"},post__BodyAndVote:{display:"flex"},post__Raiting:{display:"flex",flexDirection:"column",alignItems:"center",paddingLeft:"14px"},post__Title:{textAlign:"center"},post__BodyText:{paddingLeft:"40px"},post__Comments:{paddingLeft:"85px"},post__CommentsBlocks:{display:"flex",alignItems:"center",justifyContent:"center",columnGap:"15px",width:"150px",padding:"5px",borderRadius:"10px",transition:"0.5s","&:hover":{backgroundColor:"#EAEEF3"}}}})),T=function(e){var t=e.post,a=G();return Object(A.jsx)(E.a,{className:a.post,children:Object(A.jsxs)(W.a,{children:[Object(A.jsxs)("div",{className:a.post__Top,children:[Object(A.jsxs)("div",{className:a.post__User,children:[Object(A.jsx)(D.a,{alt:"User img",src:"https://www.kino-teatr.ru/movie/kadr/137719/pv_878912.jpg"}),Object(A.jsx)("span",{children:"User Name"})]}),Object(A.jsx)("div",{children:"data"})]}),Object(A.jsxs)("div",{className:a.post__BodyAndVote,children:[Object(A.jsxs)("div",{className:a.post__Raiting,children:[Object(A.jsx)("p",{children:Object(A.jsx)(V.a,{className:a.arrowUp})}),Object(A.jsx)("div",{children:"0"}),Object(A.jsx)("p",{children:Object(A.jsx)(H.a,{className:a.arrowDown})})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h3",{className:a.post__Title,children:t.title}),Object(A.jsx)("p",{className:a.post__BodyText,children:t.body})]})]}),Object(A.jsx)("div",{className:a.post__Comments,children:Object(A.jsxs)("div",{className:a.post__CommentsBlocks,children:[Object(A.jsx)(K.a,{className:a.comments}),Object(A.jsx)("span",{children:"0"}),Object(A.jsx)("span",{children:"Comments"})]})})]})})},Y=Object(X.a)((function(){return{button:{backgroundColor:"#42a5f5",color:"#fff","&:hover":{backgroundColor:"#1976d2",borderColor:"#fff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#1565c0",borderColor:"#fff"},"&:focus":{boxShadow:"0 0 0 0.2rem #cbe3ff84"}},sort:{display:"flex",alignItems:"center",columnGap:"10px"},sortText:{fontSize:"20px"},topNav:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},searchAndNewPost:{display:"flex",flexDirection:"column",rowGap:"20px"},post:{marginTop:"25px"},addPostBtn:{backgroundColor:"#42a5f5"},search:{margin:"0 0 10px 25px"}}})),L=function(){var e=Y(),t=e.button,a=e.sort,o=e.sortText,r=e.topNav,s=e.searchAndNewPost,c=e.post,i=e.search,d=Object(l.f)(),j=Object(n.useState)([]),p=Object(b.a)(j,2),m=p[0],u=p[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]),Object(A.jsx)(P,{children:Object(A.jsxs)(S.a,{py:10,children:[Object(A.jsxs)("div",{className:r,children:[Object(A.jsxs)("div",{className:a,children:[Object(A.jsx)("span",{className:o,children:"Sort by:"}),Object(A.jsx)(x.a,{variant:"outlined",className:t,children:"New"}),Object(A.jsx)(x.a,{variant:"outlined",className:t,children:"TOP"}),Object(A.jsx)(h.a,{id:"standard-basic",label:"Search",variant:"standard",className:i})]}),Object(A.jsx)("div",{className:s,children:Object(A.jsx)(x.a,{variant:"contained",className:t,onClick:function(){return d.push("/addpost")},children:"Add new post"})})]}),Object(A.jsx)("div",{className:c,children:m.map((function(e){return Object(A.jsx)(T,{post:e},e.id)}))})]})})},M=a(120),J=Object(X.a)((function(){return{text:{color:"#42a5f5",fontFamily:"#42a5f5",fontSize:"1.6rem"},button:{backgroundColor:"#42a5f5",color:"#fff","&:hover":{backgroundColor:"#1976d2",borderColor:"#fff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#1565c0",borderColor:"#fff"},"&:focus":{boxShadow:"0 0 0 0.2rem #cbe3ff84"}},card:{maxWidth:500,margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"}},form:{padding:"5rem",width:"50%",margin:"auto"},pageform:{display:"grid",alignItems:"center",justifyContent:"center",minHeight:"70vh"},textarea:{width:"380",height:"180",marginBottom:"2em"},textfield:{marginBottom:"2em"}}})),Z=function(){var e=J(),t=e.form,a=e.card,n=e.text,o=e.textfield,r=e.textarea,s=e.button,c=Object(l.f)();return Object(A.jsx)("form",{className:t,onSubmit:function(){return c.push("/")},children:Object(A.jsx)(E.a,{className:a,children:Object(A.jsxs)(S.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",p:3,m:8},children:[Object(A.jsx)(m.a,{className:n,children:"Create a New Post"}),Object(A.jsx)(h.a,{className:o,required:!0,variant:"outlined",label:"Title"}),Object(A.jsx)(M.a,{className:r,id:"outlined-textarea","aria-label":"empty textarea",placeholder:"Your Post...",minRows:8}),Object(A.jsx)(x.a,{size:"large",variant:"contained",className:s,type:"submit",children:"Puplish a New Post"})]})})})},$=a.p+"static/media/user-avatar.53de5600.webp",ee=(Object(u.a)({palette:{primary:{main:"#FFF"},secondary:g.a},typography:{fontFamily:"Roboto, sans-serif"}}),Object(f.a)({user_info_wrap:{textAlign:"center"},user_name_wrap:{fontSize:"25px"},reputation_wrap:{border:"3px solid orange",padding:"10px",marginTop:"15px"},reputation_score:{fontWeight:"bold"}})),te=function(){var e=ee();return Object(A.jsxs)("div",{className:e.user_info_wrap,children:[Object(A.jsx)("div",{children:Object(A.jsx)("img",{src:$,alt:"user-avatar",width:"200px",height:"200px"})}),Object(A.jsx)("div",{className:e.user_name_wrap,children:"Username"}),Object(A.jsxs)("div",{className:e.reputation_wrap,children:["Reputation: ",Object(A.jsx)("span",{className:e.reputation_score,children:"100"})]})]})},ae=Object(u.a)({palette:{primary:{main:"#FFF"},secondary:g.a},typography:{fontFamily:"Roboto, sans-serif"},overrides:{MuiButton:{label:{color:"#000",textTransform:"initial"}}}}),ne=Object(f.a)({change_settings_modal_wrap:{textAlign:"center",position:"fixed",top:"0",left:"0",zIndex:999999,overflow:"hidden",width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center"},change_settings_form:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"#fff7df",padding:"40px",borderRadius:"15px",width:"400px"},change_settings_title:{margin:"0"},change_settings_form_input:{margin:"20px 0"},change_settings_form_btns:{width:"190px",padding:"12px 30px",border:"none",borderRadius:"10px",cursor:"pointer"},cancel_btn:{marginLeft:"15px"}}),oe=function(e){var t=ne(),a=function(){return e.active(true)};return Object(A.jsx)(j.a,{theme:ae,children:Object(A.jsx)("div",{onClick:a,className:t.change_settings_modal_wrap,children:Object(A.jsxs)("form",{action:"",onClick:function(e){return e.stopPropagation()},className:t.change_settings_form,children:[Object(A.jsx)("h2",{className:t.change_settings_title,children:"Upload user avatar"}),Object(A.jsxs)(x.a,{variant:"contained",component:"label",className:t.change_settings_form_input,children:["\u0421hoose new avatar",Object(A.jsx)("input",{type:"file",hidden:!0})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{color:"secondary",className:t.change_settings_form_btns,type:"submit",variant:"contained",children:"Change avatar"}),Object(A.jsx)(x.a,{onClick:a,type:"button",variant:"contained",className:t.cancel_btn+" "+t.change_settings_form_btns,children:"Cancel"})]})]})})})},re=(Object(u.a)({palette:{primary:{main:"#FFF"},secondary:g.a},typography:{fontFamily:"Roboto, sans-serif"}}),Object(f.a)({user_settings_btn_wrap:{textAlign:"right",alignSelf:"end"},user_settings_btn:{width:"53px",background:"transparent",appearance:"none",border:"none",cursor:"pointer",color:"#625d5d",transition:"1s","&:hover":{color:"#0c0c0c",transition:"1s"}}})),se=function(){var e=re(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),o=a[0],r=a[1];return Object(A.jsxs)("div",{className:e.user_settings_btn_wrap,children:[Object(A.jsx)("button",{onClick:function(){console.log("clicked"),r(!0)},className:e.user_settings_btn,children:Object(A.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user-cog",className:"svg-inline--fa fa-user-cog fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(A.jsx)("path",{fill:"currentColor",d:"M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"})})}),o&&Object(A.jsx)(oe,{active:function(e){e&&r(!1)}})]})},ce=Object(f.a)({container:{padding:"100px",main:"#FFF",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),ie=function(){var e=ce();return Object(A.jsx)(P,{children:Object(A.jsxs)("div",{className:e.container,children:[Object(A.jsx)(se,{}),Object(A.jsx)(te,{})]})})},le=a.p+"static/media/notFound.a1fca5e5.jpg",de=Object(X.a)((function(){return{root:{display:"flex",alignItems:"end",justifyContent:"center",height:"80vh",position:"relative"},img:{height:"100%",position:"absolute",top:0}}})),be=function(){var e=de(),t=e.root,a=e.img,n=p(),o=n.handleImageOnLoad,r=n.css;return Object(A.jsxs)(B.a,{className:t,children:[Object(A.jsx)("img",{className:a,src:le,alt:"Not found",onLoad:o,style:Object(d.a)({},r.fullSize)}),Object(A.jsx)(x.a,{variant:"contained",color:"primary",component:i.b,to:"/",children:Object(A.jsx)(m.a,{variant:"button",children:"Go to home"})})]})};var je=function(){return Object(A.jsx)(i.a,{children:Object(A.jsxs)(l.c,{children:[Object(A.jsx)(l.a,{path:"/",exact:!0,component:L}),Object(A.jsx)(l.a,{path:"/login",component:C}),Object(A.jsx)(l.a,{path:"/addpost",component:Z}),Object(A.jsx)(l.a,{path:"/user",component:ie}),Object(A.jsx)(l.a,{component:be})]})})},pe=a(66),me=Object(pe.a)({reducer:{}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(c.a,{store:me,children:Object(A.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[89,1,2]]]);
//# sourceMappingURL=main.12a9ff27.chunk.js.map