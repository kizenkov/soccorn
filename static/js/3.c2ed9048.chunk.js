(this.webpackJsonpcorn=this.webpackJsonpcorn||[]).push([[3],{265:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2y0N3",dialog:"Dialogs_dialog__12yjL",activeName:"Dialogs_activeName__3ba-R",messages:"Dialogs_messages__gLdmD",message:"Dialogs_message__F35Tr",choosingDialog:"Dialogs_choosingDialog__3_iSt",messageFromMe:"Dialogs_messageFromMe__11BsT",sendArea:"Dialogs_sendArea__3yi6b"}},268:function(e,a,s){"use strict";s.r(a);var i=s(1),o=s(265),t=s.n(o),c=s(19),n=s(10),g=s(0),l=function(e){var a=e.dialogsPage,s=e.setActiveNameDialogs,o=Object(i.useContext)(n.a);return Object(g.jsx)("div",{className:t.a.dialog,style:{backgroundColor:o.backgroundContent},children:Object.keys(a.dialogs).map((function(e){return Object(g.jsx)("div",{className:a.activeNameDialogs===e?t.a.activeName:null,children:Object(g.jsx)("p",{onClick:function(){return function(e){s(e)}(e)},children:Object(g.jsx)("b",{children:e})})},e)}))})},r=s(114),d=s(31),u=s(27),m=s(46),b=function(e){var a=e.dialogsPage,s=e.sendMessage,o=Object(i.useContext)(n.a),c=Object(i.useState)(""),l=Object(u.a)(c,2),r=l[0],d=l[1];return Object(g.jsxs)("div",{className:t.a.messages,children:[Object(g.jsxs)("div",{className:t.a.message,style:{backgroundColor:o.backgroundContent},children:[!a.activeNameDialogs&&Object(g.jsx)("div",{className:t.a.choosingDialog,children:"\u21e6\u21e6\u21e6 Choose dialog"}),a.activeNameDialogs?Object(g.jsx)("div",{children:a.dialogs[a.activeNameDialogs].map((function(e){return Object(g.jsx)("div",{className:"me"===e.whoWrite?t.a.messageFromMe:null,children:e.dialogMessage},e.id)}))}):null]}),Object(g.jsx)("div",{className:t.a.sendArea,style:{backgroundColor:o.backgroundContent},children:Object(m.a)((function(e){d(e.currentTarget.value)}),r,(function(){s(r,a.activeNameDialogs),d("")}),o.backgroundButton)})]})},j=s(115),v=function(e){return e.dialogsPage};a.default=Object(d.c)(r.a,Object(c.b)((function(e){return{dialogsPage:v(e)}}),{setActiveNameDialogs:j.c,sendMessage:j.b}))((function(e){return Object(g.jsxs)("div",{className:t.a.dialogs,children:[Object(g.jsx)(l,{dialogsPage:e.dialogsPage,setActiveNameDialogs:e.setActiveNameDialogs}),Object(g.jsx)(b,{dialogsPage:e.dialogsPage,sendMessage:e.sendMessage})]})}))}}]);
//# sourceMappingURL=3.c2ed9048.chunk.js.map