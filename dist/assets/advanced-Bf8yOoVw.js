import{_ as h,d as b,T as g,a as u,s as p,u as w,e as c,r as C,c as S,f as $,h as i,k as I,B as F,y,F as D,w as q,A as m,C as A,x as N,t as L,l as z,p as R,D as K,g as M,i as E}from"./TableLite-BlNBgYdL.js";/* empty css            */const _=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},G=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},P=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,isReSearch:!1,rowClasses:n=>n.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0,display:function(n){return'<a href="#" data-id="'+n.id+'" class="is-rows-el name-btn">'+n.name+"</a>"}},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"",field:"quick",width:"10%",display:function(n){return'<button type="button" data-id="'+n.id+'" class="is-rows-el quick-btn">Button</button>'}}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),t=(n,l,s,r)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=n==null,(n>=10||l>=20)&&(l=20),r=="asc"?e.rows=_(n,l):e.rows=G(n,l),e.totalRecordCount=20,e.sortable.order=s,e.sortable.sort=r},600)},o=n=>{e.isLoading=!1,Array.prototype.forEach.call(n,function(l){l.classList.contains("name-btn")&&l.addEventListener("click",function(){console.log(this.dataset.id+" name-btn click!!")}),l.classList.contains("quick-btn")&&l.addEventListener("click",function(){console.log(this.dataset.id+" quick-btn click!!")})})},a=n=>{console.log(n)};return t(0,10,"id","asc"),{table:e,doSearch:t,tableLoadingFinish:o,updateCheckedRows:a}}});function O(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"has-checkbox":!0,"is-loading":e.table.isLoading,"is-re-search":e.table.isReSearch,columns:e.table.columns,rows:e.table.rows,rowClasses:e.table.rowClasses,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:e.tableLoadingFinish,onReturnCheckedRows:e.updateCheckedRows},null,8,["is-loading","is-re-search","columns","rows","rowClasses","total","sortable","messages","onDoSearch","onIsFinished","onReturnCheckedRows"])}const V=h(P,[["render",O]]),j=b({name:"App",components:{TableLite:g},setup(){const e=C(""),t=u([]);for(let a=0;a<126;a++)t.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});const o=u({columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:S(()=>t.filter(a=>a.email.toLowerCase().includes(e.value.toLowerCase())||a.name.toLowerCase().includes(e.value.toLowerCase()))),totalRecordCount:S(()=>o.rows.length),sortable:{order:"id",sort:"asc"}});return{searchTerm:e,table:o}}}),J={style:{"text-align":"left"}};function H(e,t,o,a,n,l){const s=p("table-lite");return c(),$(D,null,[i("div",J,[t[1]||(t[1]=i("label",null,"SearchBy:",-1)),I(i("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.searchTerm=r)},null,512),[[F,e.searchTerm]])]),y(s,{"is-static-mode":!0,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable},null,8,["columns","rows","total","sortable"])],64)}const U=h(j,[["render",H]]),X=b({name:"App",components:{TableLite:g},setup(){const e=C(""),t=u({rows:[]}),o=async n=>{const l=[];for(let s=0;s<126;s++)l.push({id:s,name:"TEST"+s,email:"test"+s+"@example.com"});return await new Promise((s,r)=>{try{a.isLoading=!0,setTimeout(()=>{a.isLoading=!1;let d=l.filter(f=>f.email.toLowerCase().includes(n.toLowerCase())||f.name.toLowerCase().includes(n.toLowerCase()));s(d)},2e3)}catch(d){console.log("Fetch error",d),r()}})},a=u({isLoading:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:S(()=>t.rows),totalRecordCount:S(()=>a.rows.length),sortable:{order:"id",sort:"asc"}});return q(()=>e.value,n=>{o(n).then(l=>{t.rows=l})}),o("").then(n=>{t.rows=n}),{searchTerm:e,table:a}}}),Q={style:{"text-align":"left"}};function W(e,t,o,a,n,l){const s=p("table-lite");return c(),$(D,null,[i("div",Q,[t[1]||(t[1]=i("label",null,"SearchBy:",-1)),I(i("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.searchTerm=r)},null,512),[[F,e.searchTerm]])]),y(s,{"is-static-mode":!0,"is-loading":e.table.isLoading,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable},null,8,["is-loading","columns","rows","total","sortable"])],64)}const Y=h(X,[["render",W]]),v=C(""),T=C(""),B=u([]);for(let e=1;e<126;e++)B.push({id:e,name:"TEST"+e,email:"test"+e+"@example.com"});const Z=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:S(()=>B.filter(o=>o.email.toLowerCase().includes(T.value.toLowerCase())&&o.name.toLowerCase().includes(v.value.toLowerCase()))),totalRecordCount:S(()=>e.rows.length),sortable:{order:"id",sort:"asc"}});return{searchTerm:v,searchTerm2:T,table:e,initTable:({el:o})=>{let a=o.getElementsByClassName("vtl-thead-tr");if(!a[0])return;let n=a[0].cloneNode(!0),l=n.getElementsByClassName("vtl-thead-th");for(let s=0;s<l.length;s++)l[s].innerHTML="";m(b({setup(){return()=>A("input",{value:v.value,onInput:s=>{v.value=s.target.value}})}})).mount(l[1]),m(b({setup(){return()=>A("input",{value:T.value,onInput:s=>{T.value=s.target.value}})}})).mount(l[2]),a[0].after(n)}}}});function x(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"is-static-mode":!0,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,onVnodeMounted:e.initTable},null,8,["columns","rows","total","sortable","onVnodeMounted"])}const ee=h(Z,[["render",x]]),ae=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},te=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},oe=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,isReSearch:!1,columns:[{label:"ID",headerClasses:["bg-gold","color-red"],columnClasses:["bg-gray"],field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",columnStyles:{background:"gold"},field:"name",width:"10%",sortable:!0,display:function(n){return'<a href="#" data-id="'+n.id+'" class="is-rows-el name-btn">'+n.name+"</a>"}},{label:"Email",headerStyles:{background:"gray"},columnStyles:{background:"gold"},field:"email",width:"15%",sortable:!0},{label:"",headerClasses:["bg-gold"],columnClasses:["bg-gray"],columnStyles:{background:"gray"},field:"quick",width:"10%",display:function(n){return'<button type="button" data-id="'+n.id+'" class="is-rows-el quick-btn">Button</button>'}}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),t=(n,l,s,r)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=n==null,(n>=10||l>=20)&&(l=20),r=="asc"?e.rows=ae(n,l):e.rows=te(n,l),e.totalRecordCount=20,e.sortable.order=s,e.sortable.sort=r},600)},o=n=>{e.isLoading=!1,Array.prototype.forEach.call(n,function(l){l.classList.contains("name-btn")&&l.addEventListener("click",function(){console.log(this.dataset.id+" name-btn click!!")}),l.classList.contains("quick-btn")&&l.addEventListener("click",function(){console.log(this.dataset.id+" quick-btn click!!")})})},a=n=>{console.log(n)};return t(0,10,"id","asc"),{table:e,doSearch:t,tableLoadingFinish:o,updateCheckedRows:a}}});function se(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"has-checkbox":!0,"is-loading":e.table.isLoading,"is-re-search":e.table.isReSearch,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:e.tableLoadingFinish,onReturnCheckedRows:e.updateCheckedRows},null,8,["is-loading","is-re-search","columns","rows","total","sortable","messages","onDoSearch","onIsFinished","onReturnCheckedRows"])}const le=h(oe,[["render",se]]),ne=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},re=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},ie=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,isReSearch:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0,display:function(n){return'<a href="#" data-id="'+n.id+'" class="is-rows-el name-btn">'+n.name+"</a>"}},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"",field:"quick",width:"10%",display:function(n){return'<button type="button" data-id="'+n.id+'" class="is-rows-el quick-btn">Button</button>'}}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),t=(n,l,s,r)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=n==null,(n>=10||l>=20)&&(l=20),r=="asc"?e.rows=ne(n,l):e.rows=re(n,l),e.totalRecordCount=20,e.sortable.order=s,e.sortable.sort=r},600)},o=n=>{e.isLoading=!1,Array.prototype.forEach.call(n,function(l){l.classList.contains("name-btn")&&l.addEventListener("click",function(){console.log(this.dataset.id+" name-btn click!!")}),l.classList.contains("quick-btn")&&l.addEventListener("click",function(){console.log(this.dataset.id+" quick-btn click!!")})})},a=n=>{console.log(n)};return t(0,10,"id","asc"),{table:e,doSearch:t,tableLoadingFinish:o,updateCheckedRows:a}}});function de(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"has-checkbox":!0,"is-loading":e.table.isLoading,"is-re-search":e.table.isReSearch,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:e.tableLoadingFinish,onReturnCheckedRows:e.updateCheckedRows},null,8,["is-loading","is-re-search","columns","rows","total","sortable","messages","onDoSearch","onIsFinished","onReturnCheckedRows"])}const ue=h(ie,[["render",de],["__scopeId","data-v-7e88ab44"]]),ce=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},be=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},me=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"使用者名稱",field:"name",width:"10%",sortable:!0},{label:"電子信箱",field:"email",width:"15%",sortable:!0}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"現在顯示 {0} 到 {1}筆 共{2}筆",pageSizeChangeLabel:"每頁筆數:",gotoPageLabel:"現在頁數:",noDataAvailable:"沒有資料"}}),t=(o,a,n,l)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=o==null,(o>=10||a>=20)&&(a=20),l=="asc"?e.rows=ce(o,a):e.rows=be(o,a),e.totalRecordCount=20,e.sortable.order=n,e.sortable.sort=l},600)};return t(0,10,"id","asc"),{table:e,doSearch:t}}});function pe(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"is-loading":e.table.isLoading,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:t[0]||(t[0]=r=>e.table.isLoading=!1)},null,8,["is-loading","columns","rows","total","sortable","messages","onDoSearch"])}const he=h(me,[["render",pe]]),ge=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},we=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},fe=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},pageOptions:[{value:15,text:15},{value:30,text:30}]}),t=(o,a,n,l)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=o==null,(o>=15||a>=30)&&(a=30),l=="asc"?e.rows=ge(o,a):e.rows=we(o,a),e.totalRecordCount=30,e.sortable.order=n,e.sortable.sort=l},600)};return t(0,e.pageOptions[0].value,"id","asc"),{table:e,doSearch:t}}});function Ce(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"is-loading":e.table.isLoading,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,"page-options":e.table.pageOptions,onDoSearch:e.doSearch,onIsFinished:t[0]||(t[0]=r=>e.table.isLoading=!1)},null,8,["is-loading","columns","rows","total","sortable","messages","page-options","onDoSearch"])}const ke=h(fe,[["render",Ce]]),Se=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},$e=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},Re=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,isReSearch:!1,rowClasses:l=>l.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0,display:function(l){return'<a href="#" data-id="'+l.id+'" class="is-rows-el name-btn">'+l.name+"</a>"}},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"",field:"quick",width:"10%",display:function(l){return'<button type="button" data-id="'+l.id+'" class="is-rows-el quick-btn">Button</button>'}}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),t=(l,s,r,d)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=l==null,(l>=10||s>=20)&&(s=20),d=="asc"?e.rows=Se(l,s):e.rows=$e(l,s),e.totalRecordCount=20,e.sortable.order=r,e.sortable.sort=d},600)},o=l=>{e.isLoading=!1,Array.prototype.forEach.call(l,function(s){s.classList.contains("name-btn")&&s.addEventListener("click",function(r){r.stopPropagation(),console.log(this.dataset.id+" name-btn click!!")}),s.classList.contains("quick-btn")&&s.addEventListener("click",function(r){r.stopPropagation(),console.log(this.dataset.id+" quick-btn click!!")})})},a=l=>{console.log(l)};return t(0,10,"id","asc"),{table:e,doSearch:t,tableLoadingFinish:o,updateCheckedRows:a,rowClicked:l=>{console.log("Row clicked!",l)}}}});function Le(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"has-checkbox":!0,"is-loading":e.table.isLoading,"is-re-search":e.table.isReSearch,columns:e.table.columns,rows:e.table.rows,rowClasses:e.table.rowClasses,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:e.tableLoadingFinish,onReturnCheckedRows:e.updateCheckedRows,onRowClicked:e.rowClicked},null,8,["is-loading","is-re-search","columns","rows","rowClasses","total","sortable","messages","onDoSearch","onIsFinished","onReturnCheckedRows","onRowClicked"])}const ve=h(Re,[["render",Le]]),Te=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},ye=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},Ee=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"}}),t=(o,a,n,l)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=o==null,(o>=10||a>=20)&&(a=20),l=="asc"?e.rows=Te(o,a):e.rows=ye(o,a),e.totalRecordCount=20,e.sortable.order=n,e.sortable.sort=l},600)};return t(0,10,"id","asc"),{table:e,doSearch:t}}});function De(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"is-fixed-first-column":!0,"is-loading":e.table.isLoading,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:t[0]||(t[0]=r=>e.table.isLoading=!1)},null,8,["is-loading","columns","rows","total","sortable","messages","onDoSearch"])}const Ae=h(Ee,[["render",De]]),Ie=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},Fe=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o},Ne=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"}}),t=(o,a,n,l)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=o==null,(o>=10||a>=20)&&(a=20),l=="asc"?e.rows=Ie(o,a):e.rows=Fe(o,a),e.totalRecordCount=20,e.sortable.order=n,e.sortable.sort=l},600)};return t(0,10,"id","asc"),{table:e,doSearch:t}}});function Be(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"is-fixed-first-column":!0,"max-height":300,"is-loading":e.table.isLoading,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:t[0]||(t[0]=r=>e.table.isLoading=!1)},null,8,["is-loading","columns","rows","total","sortable","messages","onDoSearch"])}const qe=h(Ne,[["render",Be]]),ze=b({name:"test-component",props:{App:String,allSubs:Array,marks:String}}),Ke={class:"modal-wrapper"},Me={class:"modal-container"},_e={class:"bg-dark sm:p-5 text-white h-full min-h-120 overflow-scroll px-2 rounded"},Ge={class:"text-center py-4 font-bold text-sm sm:text-xl uppercase"},Pe={class:"flex-cen flex-col"},Oe={class:"sm:min-w-sm min-w-full pt-10"},Ve={class:"flex-bet border-b border-[#e6e6e6] pb-1"},je={class:"font-bold sm:text-xl"},Je={class:"font-bold sm:text-xl"},He={class:"sm:min-w-sm min-w-full pt-10"},Ue={class:"font-bold sm:text-xl"};function Xe(e,t,o,a,n,l){return c(),w(K,{name:"modal"},{default:N(()=>[i("div",{class:"modal-mask text-left",onClick:t[0]||(t[0]=R(s=>e.$emit("close-modal"),["prevent"]))},[i("div",Ke,[i("div",Me,[i("div",_e,[i("h1",Ge,L(e.App),1),i("main",Pe,[i("div",Oe,[t[1]||(t[1]=i("p",{class:"text-xs py-2"},"Subject and marks",-1)),(c(!0),$(D,null,z(e.allSubs,s=>(c(),$("main",{key:s},[i("div",Ve,[i("h1",je,L(s.name),1),i("h1",Je,L(s.percentage),1)])]))),128))]),i("div",He,[t[2]||(t[2]=i("p",{class:"text-xs"},"Total Marks",-1)),i("h1",Ue,L(e.marks),1)])])])])])])]),_:1})}const Qe=h(ze,[["render",Xe],["__scopeId","data-v-b4eb7e86"]]),We=b({name:"App",components:{TableLite:g,Model:Qe},setup(){const e=u([{name:"M Atif",showEdit:!1,DOB:"12/12/2020",subs:"42",courseType:"Bs SE",allData:{App:"M Atif - Bs Software Engineering",allSubjects:[{name:"Ai Learning",percentage:"82%"},{name:"ML",percentage:"45%"},{name:"JavaScript",percentage:"99%"}],marks:"500"}},{name:"John Doe",showEdit:!1,DOB:"12/12/2022",subs:"36",courseType:"BS CS",allData:{App:"John Doe - Bs Computer Science",allSubjects:[{name:"Theory of Automata",percentage:"82%"},{name:"Software Construction",percentage:"45%"}],marks:"900"}}]),t=u({isLoading:!1,columns:[{label:"Name",field:"name",width:"25%",sortable:!0},{label:"Study",field:"courseType",width:"25%",sortable:!0},{label:"DOB",field:"DOB",width:"25%",sortable:!0},{label:"Subjects",field:"subs",width:"25%",sortable:!1},{label:" ",field:"icon",sortable:!1}],rows:e,totalRecordCount:S(()=>t.rows.length),sortable:{order:"name",sort:"asc"}}),o=()=>{a.value=!a.value,d.value=!d.value};let a=C(!1),n=C(""),l=C(""),s=C(""),r=C(""),d=C("");return{table:t,openModel:a,App:n,allSubs:l,extSubs:s,marks:r,onClickAway:o,clickedRow:d,rowClicked:k=>{d.value&&(k.showEdit=!k.showEdit,a.value=!a.value,n.value=k.name,l.value=k.allData.allSubjects,s.value=k.allData.extSubs,r.value=k.allData.marks)},deleteCurrentRow:k=>{e.splice(e.indexOf(k),1)}}}}),Ye={class:"flex-cen right-0 w-3 relative"},Ze=["onClick"],xe=["onClick"],ea=["onClick"],aa={key:0};function ta(e,t,o,a,n,l){const s=p("table-lite"),r=p("Model");return c(),$("section",null,[y(s,{"is-static-mode":!0,"is-slot-mode":!0,"is-loading":e.table.isLoading,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,onRowClicked:e.rowClicked},{icon:N(d=>[i("div",null,[i("div",Ye,[i("div",{onClick:R(f=>d.value.showEdit=!d.value.showEdit,["prevent"]),class:E([d.value.showEdit?"hidden":"block right-0"])},t[1]||(t[1]=[i("a",{href:"#"},"...",-1)]),10,Ze),i("div",{onClick:R(f=>d.value.showEdit=!d.value.showEdit,["prevent"]),class:E([d.value.showEdit?"block":"hidden"])},t[2]||(t[2]=[i("a",{href:"#"},"X",-1)]),10,xe),i("div",{class:E([[d.value.showEdit?"block":"hidden"],"w-240 bg-white py-5 px-8 z-50 absolute md:-left-72 -left-64 flex items-center uppercase font-semibold"])},[t[3]||(t[3]=i("i",{class:"fa-solid fa-pen text-green"},null,-1)),i("p",{onClick:t[0]||(t[0]=R(f=>e.clickedRow=!e.clickedRow,["prevent"])),class:"ml-1 cursor-pointer"}," View Info "),t[4]||(t[4]=i("i",{class:"fa-solid fa-trash-can text-green ml-4"},null,-1)),i("p",{onClick:R(f=>e.deleteCurrentRow(d.value),["prevent"]),class:"ml-1 cursor-pointer"}," Delete ",8,ea)],2)])])]),_:1},8,["is-loading","columns","rows","total","sortable","onRowClicked"]),e.openModel?(c(),$("section",aa,[i("div",null,[y(r,{App:e.App,allSubs:e.allSubs,marks:e.marks,onCloseModal:e.onClickAway},null,8,["App","allSubs","marks","onCloseModal"])])])):M("",!0)])}const oa=h(We,[["render",ta],["__scopeId","data-v-4f3bb346"]]),sa=(e,t)=>{e=e+1;let o=[];for(let a=e;a<=t;a++)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o.push({id:22,name:"TEST2",email:"testGGG@example.com"}),o},la=(e,t)=>{let o=[];for(let a=t;a>e;a--)o.push({id:a,name:"TEST"+a,email:"test"+a+"@example.com"});return o.push({id:22,name:"TEST2",email:"testGGG@example.com"}),o},na=b({name:"App",components:{TableLite:g},setup(){const e=u({isLoading:!1,isReSearch:!1,rowClasses:s=>s.id==1?["aaa","is-id-one"]:["bbb","other"],groupingKey:"name",hasGroupToggle:!0,groupingDisplay:function(s){return'<span style="background: darkgray; padding: 5px; border-radius: 5px;">'+s+"</span>"},columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0,display:function(s){return'<a href="#" data-id="'+s.id+'" class="is-rows-el name-btn">'+s.name+"</a>"}},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"",field:"quick",width:"10%",display:function(s){return'<button type="button" data-id="'+s.id+'" class="is-rows-el quick-btn">Button</button>'}}],rows:[],totalRecordCount:0,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),t=(s,r,d,f)=>{e.isLoading=!0,setTimeout(()=>{e.isReSearch=s==null,(s>=10||r>=20)&&(r=20),f=="asc"?e.rows=sa(s,r):e.rows=la(s,r),e.totalRecordCount=20,e.sortable.order=d,e.sortable.sort=f},600)},o=s=>{e.isLoading=!1,Array.prototype.forEach.call(s,function(r){r.classList.contains("name-btn")&&r.addEventListener("click",function(d){d.stopPropagation(),console.log(this.dataset.id+" name-btn click!!")}),r.classList.contains("quick-btn")&&r.addEventListener("click",function(d){d.stopPropagation(),console.log(this.dataset.id+" quick-btn click!!")})})},a=s=>{console.log(s)};return t(0,10,"id","asc"),{table:e,doSearch:t,tableLoadingFinish:o,updateCheckedRows:a,rowClicked:s=>{console.log("Row clicked!",s)},toggled:(s,r)=>{console.log("Row toggled",s,r)}}}});function ra(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"has-checkbox":!0,"is-loading":e.table.isLoading,"is-re-search":e.table.isReSearch,"start-collapsed":!0,"is-keep-collapsed":!0,"grouping-key":e.table.groupingKey,"has-group-toggle":e.table.hasGroupToggle,"grouping-display":e.table.groupingDisplay,columns:e.table.columns,rows:e.table.rows,rowClasses:e.table.rowClasses,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,onDoSearch:e.doSearch,onIsFinished:e.tableLoadingFinish,onReturnCheckedRows:e.updateCheckedRows,onRowClicked:e.rowClicked,onRowToggled:e.toggled},null,8,["is-loading","is-re-search","grouping-key","has-group-toggle","grouping-display","columns","rows","rowClasses","total","sortable","messages","onDoSearch","onIsFinished","onReturnCheckedRows","onRowClicked","onRowToggled"])}const ia=h(na,[["render",ra]]),da=b({name:"App",components:{TableLite:g},setup(){const e=u([]);for(let o=1;o<126;o++)e.push({id:o,name:"TEST"+o,email:"test"+o+"@example.com"});e.push({id:126,name:"TEST1",email:"test111@example.com"}),e.push({id:127,name:"TEST1",email:"test111111@example.com"}),e.push({id:128,name:"TEST2",email:"test222@example.com"});const t=u({groupingKey:"name",columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0},{label:"Email",field:"email",width:"15%",sortable:!0}],rows:e,totalRecordCount:S(()=>t.rows.length),sortable:{order:"id",sort:"asc"}});return{table:t}}});function ua(e,t,o,a,n,l){const s=p("table-lite");return c(),w(s,{"is-static-mode":!0,"grouping-key":e.table.groupingKey,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable},null,8,["grouping-key","columns","rows","total","sortable"])}const ca=h(da,[["render",ua]]);m(V).mount("#customize-display-table");m(U).mount("#filter-table");m(Y).mount("#filter2-table");m(ee).mount("#filter3-table");m(le).mount("#customize-style-table");m(ue).mount("#customize-style-table2");m(he).mount("#customize-message-table");m(ke).mount("#customize-page-dropdown-table");m(ve).mount("#row-clicked-table");m(Ae).mount("#fixed-first-column-table");m(qe).mount("#fixed-header-and-first-column-table");m(oa).mount("#show-controls-table");m(ia).mount("#grouping-table");m(ca).mount("#grouping2-table");
