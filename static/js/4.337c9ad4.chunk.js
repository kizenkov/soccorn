(this.webpackJsonpcorn=this.webpackJsonpcorn||[]).push([[4],{266:function(e,t,n){e.exports={users:"Users_users__2rRt0",currentPage:"Users_currentPage__5xvai",paginator:"Users_paginator__puduz",pages:"Users_pages__3gWjO",user:"Users_user__3XetG",inline:"Users_inline__3et9t",description:"Users_description__3QGGl"}},269:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(3),o=n(4),c=n(11),i=n(12),a=n(1),u=n.n(a),l=n(266),b=n.n(l),p=n(19),j=n(18),d=n(58),h=n(26),f=n(10),g=n(0),O=function(e){var t=Object(a.useContext)(f.a);return Object(g.jsxs)("div",{className:b.a.user,children:[Object(g.jsx)("div",{className:b.a.inline,children:Object(g.jsx)(j.b,{to:"/profile/".concat(e.id),children:Object(g.jsx)("img",{src:e.photo||d.a,alt:"userIcon"})})}),Object(g.jsx)("div",{className:b.a.inline+" "+b.a.description,children:Object(g.jsx)("div",{children:Object(g.jsx)("b",{children:e.name})})}),e.isAuth?Object(g.jsx)("div",{className:b.a.button,children:e.followed?Object(h.a)("UNFOLLOW",(function(){return e.unfollow(e.id)}),e.isDisable.some((function(t){return t===e.id})),t.backgroundButton):Object(h.a)("FOLLOW",(function(){return e.follow(e.id)}),e.isDisable.some((function(t){return t===e.id})),t.backgroundButton)}):null,Object(g.jsx)("hr",{})]})},x=n(116),v=n(27),_=function(e){var t=e.getUsers,n=e.currentPage,s=e.totalCount,r=e.pageSize,o=Object(a.useContext)(f.a),c=10,i=Object(a.useState)(1),u=Object(v.a)(i,2),l=u[0],p=u[1],j=Math.ceil(s/r),d=l*c-9,O=j/c&&l*c;l===Math.ceil(j/c)&&(O=j);for(var x=[],_=d;_<=O;_++)x.push(_);var m=x.map((function(e){return Object(g.jsx)("div",{className:b.a.pages,children:Object(g.jsx)("span",{onClick:function(){return t(e)},className:e===n?b.a.currentPage:null,children:e})},e)}));return Object(g.jsx)("div",{className:b.a.paginator,children:Object(g.jsxs)("div",{children:[Object(h.a)("\u261a",(function(){return p(l-1)}),1===l,o.backgroundButton),m,Object(h.a)("\u261b",(function(){return p(l+1)}),l===Math.ceil(j/c),o.backgroundButton)]})})},m=n(59),k=function(e){return e.usersPage.users},w=function(e){return e.usersPage.totalCount},U=function(e){return e.usersPage.pageSize},P=function(e){return e.usersPage.currentPage},C=function(e){return e.usersPage.isDisable},N=n(30),T=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getUsers=function(t){e.props.getUsersThunk(t,e.props.pageSize)},e.follow=function(t){e.props.followThunk(t)},e.unfollow=function(t){e.props.unfollowThunk(t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk()}},{key:"render",value:function(){var e=this,t=this.props.users.map((function(t){return Object(g.jsx)(O,{id:t.id,photo:t.photos.small,name:t.name,followed:t.followed,follow:e.follow,unfollow:e.unfollow,isDisable:e.props.isDisable,isAuth:e.props.isAuth},t.id)}));return Object(g.jsxs)("div",{className:b.a.users,style:{backgroundColor:this.context.backgroundContent},children:[this.props.isFetching&&Object(g.jsx)(m.a,{}),Object(g.jsx)(_,Object(s.a)(Object(s.a)({},this.props),{},{getUsers:this.getUsers})),t]})}}]),n}(u.a.Component);T.contextType=f.a;t.default=Object(p.b)((function(e){return{users:k(e),totalCount:w(e),pageSize:U(e),currentPage:P(e),isFetching:Object(N.d)(e),isDisable:C(e),isAuth:Object(N.c)(e)}}),{followThunk:x.b,unfollowThunk:x.d,getUsersThunk:x.c})(T)}}]);
//# sourceMappingURL=4.337c9ad4.chunk.js.map