"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3751],{1374:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(9496),n=a(5924),r=a(4963),s=a(5013),c=a(7690),g=a(5414),m=a(9641),o=a(1692);function i(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.docsPages,c.k.page.docsTagsListPage)},l.createElement(s.d,{title:a}),l.createElement(o.Z,{tag:"doc_tags_list"}),l.createElement(g.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(m.Z,{tags:t}))))))}},5914:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9496),n=a(5924),r=a(1731);const s={tag:"tag_aVw2",tagRegular:"tagRegular_giGE",tagWithCount:"tagWithCount_tB5s"};function c(e){let{permalink:t,label:a,count:c}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s.tag,c?s.tagWithCount:s.tagRegular)},a,c&&l.createElement("span",null,c))}},9641:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(9496),n=a(4963),r=a(5914);const s={tag:"tag_sGMK"};function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},4963:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(24);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);