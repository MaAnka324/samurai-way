"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[979],{1979:function(s,t,e){e.r(t),e.d(t,{default:function(){return U}});var o=e(1413),i=e(5671),r=e(3144),n=e(136),u=e(5716),a=e(2791),p=e(81),l="Profile_descriptionBlock__T0wfu",c="MyPosts_postsBlock__WnKSr",d="MyPosts_posts__Ocy+a",f="Post_item__fe6kd",h=e(184),x=function(s){return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("img",{src:"https://www.ochkov.net/wiki/wiki/storage/app/uploads/public/5d7/a08/0c6/5d7a080c6de1b874225893.jpg"}),s.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"LIKE "}),s.likesCount]})]})},j=e(6139),m=e(704),g=e(9155),v=e(1117),P=(0,g.B)(10),k=(0,m.Z)({form:"post"})((function(s){return(0,h.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,h.jsx)(j.Z,{name:"post",component:v.gx,validate:[g.C,P],placeholder:"Post message"}),(0,h.jsx)("button",{children:"Add post"})]})})),C=a.memo((function(s){var t=s.posts.map((function(s){return(0,h.jsx)(x,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(k,{onSubmit:function(t){s.addPost(t.post)}}),(0,h.jsx)("div",{className:d,children:t})]})})),S=e(8687),_=(0,S.$j)((function(s){return{posts:s.profilePage.post,messageForNewPost:s.profilePage.messageForNewPost}}),(function(s){return{addPost:function(t){s((0,p.Pi)(t))},onChange:function(t){s((0,p.Yx)(t.currentTarget.value))}}}))(C),w=e(8070),b=e(1516),Z=e(1640),y=e(6747),N=e(885),T=function(s){var t=(0,a.useState)(!1),e=(0,N.Z)(t,2),o=e[0],i=e[1],r=(0,a.useState)(s.status),n=(0,N.Z)(r,2),u=n[0],p=n[1];(0,a.useEffect)((function(){p(s.status)}),[s.status]);return(0,h.jsxs)("div",{children:[!o&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"------"})}),o&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(s){p(s.currentTarget.value)},onBlur:function(){i(!1),s.updateStatus(u)},autoFocus:!0,value:u})})]})},A=function(s){var t;return s.profile?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:s.profile.fullName}),(0,h.jsxs)("p",{children:["About me: ",s.profile.aboutMe]}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{src:null!==(t=s.profile.photos)&&void 0!==t&&t.large?s.profile.photos.large:w}),(0,h.jsx)(T,{status:s.status,updateStatus:s.updateStatus})]}),(0,h.jsxs)("div",{children:["LookingForAJobDescription: ",s.profile.lookingForAJobDescription]})]}):(0,h.jsx)(y.Z,{sx:{display:"flex"},children:(0,h.jsx)(Z.Z,{})})},F=function(s){return s.isAuth?(0,h.jsxs)("div",{children:[(0,h.jsx)(A,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,h.jsx)(_,{})]}):(0,h.jsx)(b.l_,{to:"/login"})},I=e(7781),M=function(s){(0,n.Z)(e,s);var t=(0,u.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;console.log(this.props),s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.setUsersProfileTC(s),this.props.getStatusTC(s)}},{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(F,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC}))})}}]),e}(a.Component),U=(0,I.qC)((0,S.$j)((function(s){return{profile:s.profilePage.profile,post:s.profilePage.post,messageForNewPost:s.profilePage.messageForNewPost,isAuth:s.auth.isAuth,status:s.profilePage.status,authorizedUserId:s.auth.id}}),{setUsersProfile:p.hA,setUsersProfileTC:p.II,getStatusTC:p.GP,updateStatusTC:p.OG}),b.EN)(M)}}]);
//# sourceMappingURL=979.b23cc981.chunk.js.map