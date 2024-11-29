import{_ as P,b as V}from"./chunks/theme.8EBF-V0P.js";import{d as h,_ as v,B as p,o as n,c as a,j as s,G as i,w as b,a as k,t as f,e as _,n as g,h as L,F as T,C as y,a0 as S,p as A}from"./chunks/framework.NNQQ-GEh.js";import{d as M}from"./chunks/team.data.DC-RH9RA.js";var m=(e=>(e.ALL="all",e.TBI="tbi",e.ABI="abi",e))(m||{});const I=h({components:{VPLink:P,VPSocialLinks:V},props:{size:{type:String,default:"medium"},member:{type:Object,required:!0},slug:{type:String,required:!0}}}),B={class:"profile"},w=["src","alt"],C={class:"data"},z={class:"name"},K={key:0,class:"affiliation"},N={class:"title"},q=["innerHTML"],O={key:2,class:"links"},j={key:0,class:"sp"};function F(e,t,c,d,r,u){const o=p("VPLink"),l=p("VPSocialLinks");return n(),a("article",{class:g(["VPTeamMembersItem",[e.size]])},[s("div",B,[s("div",null,[i(o,{href:"/persons/"+e.slug},{default:b(()=>[s("img",{class:"avatar",src:e.member.avatar,alt:e.member.name},null,8,w)]),_:1},8,["href"])]),s("div",C,[s("h1",z,[i(o,{href:"/persons/"+e.slug},{default:b(()=>[k(f(e.member.name),1)]),_:1},8,["href"])]),e.member.role?(n(),a("p",K,[s("span",N,f(e.member.role),1)])):_("",!0),e.member.description?(n(),a("p",{key:1,class:"desc",innerHTML:e.member.description},null,8,q)):_("",!0),e.member.socialLinks?(n(),a("div",O,[i(l,{links:e.member.socialLinks},null,8,["links"])])):_("",!0)])]),e.member.sponsor?(n(),a("div",j,[i(o,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:b(()=>[t[0]||(t[0]=s("span",{class:"vpi-heart sp-icon"},null,-1)),k(" "+f(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):_("",!0)],2)}const H=v(I,[["render",F],["__scopeId","data-v-a9a665a7"]]),E=h({components:{VPTeamMembersItem:H},props:{size:{type:String,default:"medium"},members:{type:Array,required:!0}},setup(e){return{classes:L(()=>[e.size,`count-${e.members.length}`])}}}),G={class:"TeamMembersContainer"};function J(e,t,c,d,r,u){const o=p("VPTeamMembersItem");return n(),a("div",{class:g(["VPTeamMembers",e.classes])},[s("div",G,[(n(!0),a(T,null,y(e.members,([l,$])=>(n(),a("div",{key:$.name,class:"item"},[i(o,{size:e.size,member:$,slug:l},null,8,["size","member","slug"])]))),128))])],2)}const D=v(E,[["render",J],["__scopeId","data-v-239ecd21"]]),Q=h({props:{group:{type:String,required:!0,default:`${m.ALL}`}},emits:["picked"],setup(e,{emit:t}){return{items:[{id:m.ALL,value:"All"},{id:m.ABI,value:"ABI"},{id:m.TBI,value:"TBI"}],pick:r=>{t("picked",r)}}}}),R={class:"d-flex flex-row gap-2 w-100"},U={class:"mb-0"},W=["onClick"];function X(e,t,c,d,r,u){return n(),a("div",R,[(n(!0),a(T,null,y(e.items,(o,l)=>(n(),a("div",{key:l,class:g(["entity-card w-100 ratio-1x1 text-center",{active:e.group===o.id}])},[s("h3",U,[s("a",{href:"",class:"stretched-link",onClick:S($=>e.pick(o.id),["prevent"])},f(o.value),9,W)])],2))),128))])}const Y=v(Q,[["render",X]]),Z=h({components:{KTeamMembers:D,KTeamSwitch:Y},setup(){const e=A(m.ALL),t=r=>{e.value=r},c=M,d=L(()=>c.filter(([,r])=>e.value===m.ALL?!0:(Array.isArray(r.team)?r.team:[r.team]).indexOf(e.value)!==-1));return{group:e,handlePicked:t,items:d}}}),x={class:"container"},ee={class:"d-flex flex-column gap-2"};function se(e,t,c,d,r,u){const o=p("KTeamSwitch"),l=p("KTeamMembers");return n(),a("div",x,[t[0]||(t[0]=s("div",{class:"page-title"},[s("h1",{class:"page-title-text"},[s("i",{class:"fas fa-user-friends"}),k(" Team ")])],-1)),s("div",ee,[s("div",null,[i(o,{group:e.group,onPicked:e.handlePicked},null,8,["group","onPicked"])]),i(l,{members:e.items},null,8,["members"])])])}const te=v(Z,[["render",se],["__scopeId","data-v-f8466407"]]),ie=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"team/index.md","filePath":"team/index.md"}'),ne={name:"team/index.md"},ce=Object.assign(ne,{setup(e){return(t,c)=>(n(),a("div",null,[i(te)]))}});export{ie as __pageData,ce as default};