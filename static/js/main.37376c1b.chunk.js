(this["webpackJsonpmonitor-server"]=this["webpackJsonpmonitor-server"]||[]).push([[0],{392:function(e,t,a){e.exports=a(535)},397:function(e,t,a){},427:function(e,t){},534:function(e,t,a){},535:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),s=a.n(l),o=(a(397),a(374)),i=a(375),r=a(385),m=a(384),u=a(190),d=a.n(u),b=a(144),p=a(32),E=a(376),f=a.n(E),v=a(383),h=a.n(v),O=(a(534),d()("https://commandingserver.herokuapp.com/command")),_=c.a.memo((function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(e.globalCommand),i=Object(p.a)(o,2),r=i[0],m=i[1],u=Object(n.useState)(""),d=Object(p.a)(u,2),b=d[0],E=d[1],f=Object(n.useState)(""),v=Object(p.a)(f,2),h=v[0],_=v[1],j=Object(n.useState)(""),S=Object(p.a)(j,2),y=S[0],N=S[1],g=Object(n.useState)(""),k=Object(p.a)(g,2),C=k[0],I=k[1],D=Object(n.useState)(""),w=Object(p.a)(D,2),x=w[0],M=w[1],T=Object(n.useState)(!1),A=Object(p.a)(T,2),J=A[0],P=A[1],B=Object(n.useState)(""),W=Object(p.a)(B,2),q=W[0],F=W[1],L=Object(n.useState)(!1),U=Object(p.a)(L,2),X=U[0],$=U[1],z=Object(n.useState)(-1),G=Object(p.a)(z,2),H=G[0],K=G[1];Object(n.useEffect)((function(){m(e.globalCommand)}),[e.globalCommand]),e.socket.on("output_from_client_to_web",(function(t){var a=JSON.parse(t).response;K(JSON.parse(t).efficiency),$(!0),a.session_ID===e.client_Session_ID&&(E(a.stdout),_(a.stderr),N(a.return_code),I(a.return_code_meaning),M(a.execution_timestamp),F(a.latest_command)),P(!0)}));var Q={client_ID:e.client_Session_ID,command:r};Object(n.useEffect)((function(){O.emit("command_from_web",Q)}),[r]);var R=0===y?"#00d1b2":"lightcoral";return c.a.createElement("div",{className:"tile is-parent"},c.a.createElement("article",{className:"tile is-child notification is-bordered has-text-centered"},X?c.a.createElement("span",{style:{float:"right"}},"Batch Command Execution Efficiency : ",H):null,c.a.createElement("div",{className:"title"},e.client_ID),c.a.createElement("div",{style:{display:"block"}},0!==q.length?c.a.createElement("div",{className:"is-pulled-right"},"Latest Command Supplied :"," ",c.a.createElement("span",{style:{fontFamily:"monospace"}},q)):null,c.a.createElement("div",{className:"is-pulled-left"},"Session ID : ",e.client_Session_ID)),c.a.createElement("br",null),J?c.a.createElement("div",{style:{backgroundColor:R,display:"block"},className:"output_metadata is-family-monospace"},c.a.createElement("div",{class:"return_code"},y," \u25b6\ufe0f ",C),c.a.createElement("div",null,"EXECUTION TIMESTAMP : ",x)):null,c.a.createElement("br",null),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(l)}},c.a.createElement("div",{className:"field has-addons is-centered"},c.a.createElement("div",{className:"control is-expanded"},c.a.createElement("input",{className:"input is-family-monospace",type:"text",placeholder:"Enter command here",onChange:function(e){s(e.target.value)}})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"submit",className:"button is-primary"},"Command")))),b.length>0?c.a.createElement("div",{className:"is-family-monospace disp output"},b):null,h.length>0?c.a.createElement("div",{className:"is-family-monospace disp error"},h):null))}));function j(e){var t=e.className,a=e.style,n=e.onClick;return c.a.createElement("div",{className:t,style:Object(b.a)({},a,{display:"block",background:"#00d1b2"}),onClick:n})}function S(e){var t=e.className,a=e.style,n=e.onClick;return c.a.createElement("div",{className:t,style:Object(b.a)({},a,{display:"block",background:"#00d1b2"}),onClick:n})}var y={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,accessibility:!0,swipeToSlide:!0,centerMode:!0,centerPadding:"0px",nextArrow:c.a.createElement(j,null),prevArrow:c.a.createElement(S,null)},N=c.a.memo((function(e){var t;return t=c.a.createElement(h.a,y,e.selected_clients.map((function(t){return c.a.createElement(_,{key:t.client_Session_ID,client_ID:t.client_ID,client_Session_ID:t.client_Session_ID,socket:e.socket,globalCommand:e.globalCommand})}))),c.a.createElement("div",{className:""},t)})),g=c.a.memo((function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),r=i[0],m=i[1],u=Object(n.useState)(),d=Object(p.a)(u,2),E=d[0],v=d[1],h=Object(n.useState)(!1),O=Object(p.a)(h,2),_=O[0],j=O[1],S=[];e.clients.map((function(e){S.push(Object(b.a)({},e))}));return c.a.createElement("div",null,c.a.createElement(N,{selected_clients:l,socket:e.socket,globalCommand:E}),_?c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(r)}},c.a.createElement("div",{className:"field has-addons is-centered"},c.a.createElement("div",{className:"control is-expanded"},c.a.createElement("input",{className:"input is-family-monospace",type:"text",placeholder:"Command to all selected clients",onChange:function(e){m(e.target.value)}})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"submit",className:"button is-primary"},"Command Selected Clients")))),c.a.createElement("br",null)," "):null,c.a.createElement(f.a,{title:"Connected Clients",columns:[{title:"Name",field:"client_ID"},{title:"Session ID",field:"client_Session_ID"},{title:"Connection Time",field:"connection_timestamp"},{title:"IP Address",field:"client_IP"}],data:S,options:{selection:!0},actions:[{tooltip:"Command all selected clients",icon:"code",onClick:function(e,t){s(t),t.length>1&&j(!0)}}]}))})),k=function(){return c.a.createElement("section",{className:"hero is-primary"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"Monitor Server"),c.a.createElement("h2",{className:"subtitle"},"Monitors the connected clients with commands."))))},C=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={socket:d()("https://commandingserver.herokuapp.com/"),response:[]},n.state.socket.emit("populate_me","Some Message is required here."),n.state.socket.on("update_connections_list",(function(e){n.setState({response:e})})),n}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement("div",{className:"container"},c.a.createElement("br",null),c.a.createElement(g,{clients:this.state.response,socket:this.state.socket})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[392,1,2]]]);
//# sourceMappingURL=main.37376c1b.chunk.js.map