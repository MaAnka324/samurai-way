"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[951],{9951:function(s,e,o){o.r(e),o.d(e,{default:function(){return U}});var t=o(1413),i=o(5671),n=o(3144),r=o(136),l=o(5716),a=o(2791),u=o(81),d=o(885),c="Profile_descriptionBlock__T0wfu",p="MyPosts_postsBlock__WnKSr",h="MyPosts_posts__Ocy+a",f="Post_item__fe6kd",v=o(184),x=function(s){return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("img",{src:"https://www.ochkov.net/wiki/wiki/storage/app/uploads/public/5d7/a08/0c6/5d7a080c6de1b874225893.jpg"}),s.message,(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:"LIKE "}),s.likesCount]})]})},j=o(6139),m=o(704),g=o(9155),b=o(1117),P=(0,g.B)(10),k=(0,m.Z)({form:"post"})((function(s){return(0,v.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,v.jsx)(j.Z,{name:"post",component:b.gx,validate:[g.C,P],placeholder:"Post message"}),(0,v.jsx)("button",{children:"Add post"})]})})),C=a.memo((function(s){var e=s.posts.map((function(s){return(0,v.jsx)(x,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h3",{children:"My posts"}),(0,v.jsx)(k,{onSubmit:function(e){s.addPost(e.post)}}),(0,v.jsx)("div",{className:h,children:e})]})})),S=o(8687),w=(0,S.$j)((function(s){return{posts:s.profilePage.post,messageForNewPost:s.profilePage.messageForNewPost}}),(function(s){return{addPost:function(e){s((0,u.Pi)(e))},onChange:function(e){s((0,u.Yx)(e.currentTarget.value))}}}))(C),y=o(8070),T=o(1516),Z=o(1640),I=o(6747),_=function(s){var e=(0,a.useState)(!1),o=(0,d.Z)(e,2),t=o[0],i=o[1],n=(0,a.useState)(s.status),r=(0,d.Z)(n,2),l=r[0],u=r[1];(0,a.useEffect)((function(){u(s.status)}),[s.status]);return(0,v.jsxs)("div",{children:[!t&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Status : "}),(0,v.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"------"})]}),t&&(0,v.jsx)("div",{children:(0,v.jsx)("input",{onChange:function(s){u(s.currentTarget.value)},onBlur:function(){i(!1),s.updateStatus(l)},autoFocus:!0,value:l})})]})},A=(0,m.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit;s.error;return(0,v.jsxs)("form",{onSubmit:e,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Name : "})," ",(0,v.jsx)(j.Z,{name:"fullName",placeholder:"fullName",component:b.II,validate:[g.C]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking for a Job :"})," ",(0,v.jsx)(j.Z,{name:"lookingForAJob",placeholder:"lookingForAJob",component:b.II,type:"checkbox"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills:"})," ",(0,v.jsx)(j.Z,{name:"lookingForAJobDescription",placeholder:"lookingForAJobDescription",component:b.II})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"About me "}),(0,v.jsx)(j.Z,{name:"aboutMe",placeholder:"aboutMe",component:b.II})]}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{children:"save"})})]})})),N=function(s){var e,o=(0,a.useState)(!1),t=(0,d.Z)(o,2),i=t[0],n=t[1];if(!s.profile)return(0,v.jsx)(I.Z,{sx:{display:"flex"},children:(0,v.jsx)(Z.Z,{})});return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("img",{src:null!==(e=s.profile.photos)&&void 0!==e&&e.large?s.profile.photos.large:y}),s.isOwner&&(0,v.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&s.savePhoto(e.target.files[0])}})]}),(0,v.jsx)(_,{status:null===s||void 0===s?void 0:s.status,updateStatus:null===s||void 0===s?void 0:s.updateStatus}),i?(0,v.jsxs)("div",{children:[(0,v.jsx)(A,{initialValues:s.profile,onSubmit:function(e){s.saveProfile(e)}}),(0,v.jsx)("button",{onClick:function(){n(!1)},children:"go to profile"})]}):(0,v.jsx)("div",{children:(0,v.jsx)(F,{profile:s.profile,status:s.status,updateStatus:s.updateStatus,isOwner:s.isOwner,goToEditMode:function(){n(!0)}})})]})},F=function(s){var e,o,t,i,n;return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Name : "})," ",null===s||void 0===s||null===(e=s.profile)||void 0===e?void 0:e.fullName]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking for a Job :"})," ",null!==s&&void 0!==s&&null!==(o=s.profile)&&void 0!==o&&o.lookingForAJob?"yes":"no"]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills:"})," ",null!==s&&void 0!==s&&null!==(t=s.profile)&&void 0!==t&&t.lookingForAJobDescription?s.profile.lookingForAJobDescription:"------"]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"About me "}),null===s||void 0===s||null===(i=s.profile)||void 0===i?void 0:i.aboutMe]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Contacts "}),(null===s||void 0===s||null===(n=s.profile)||void 0===n?void 0:n.contacts)&&Object.keys(s.profile.contacts).map((function(s){return(0,v.jsx)(M,{contactTitle:s},s)}))]}),s.isOwner&&(0,v.jsx)("div",{children:(0,v.jsx)("button",{onClick:s.goToEditMode,children:"edit"})})]})},M=function(s){return(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:s.contactTitle}),": ",s.contactValue]})},O=function(s){return s.isAuth?(0,v.jsxs)("div",{children:[(0,v.jsx)(N,{profile:s.profile,status:s.status,updateStatus:s.updateStatus,isOwner:s.isOwner,savePhoto:s.savePhoto,saveProfile:s.saveProfile}),(0,v.jsx)(w,{})]}):(0,v.jsx)(T.l_,{to:"/login"})},J=o(7781),D=function(s){(0,r.Z)(o,s);var e=(0,l.Z)(o);function o(){return(0,i.Z)(this,o),e.apply(this,arguments)}return(0,n.Z)(o,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.setUsersProfileTC(s),this.props.getStatusTC(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,o){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)("div",{children:(0,v.jsx)(O,(0,t.Z)((0,t.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC,savePhoto:this.props.savePhotoTC,saveProfile:this.props.saveProfileTC}))})}}]),o}(a.Component),U=(0,J.qC)((0,S.$j)((function(s){return{profile:s.profilePage.profile,post:s.profilePage.post,messageForNewPost:s.profilePage.messageForNewPost,isAuth:s.auth.isAuth,status:s.profilePage.status,authorizedUserId:s.auth.id}}),{setUsersProfile:u.hA,setUsersProfileTC:u.II,getStatusTC:u.GP,updateStatusTC:u.OG,savePhotoTC:u.Tw,saveProfileTC:u.Ms}),T.EN)(D)}}]);
//# sourceMappingURL=951.22dcc70c.chunk.js.map