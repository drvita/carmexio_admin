import x from"./Icon.0ba8ef11.js";import{_ as b,a as $,b as k,c as C}from"./Bar.b1024e6b.js";import{u as w}from"./useToast.25e6c600.js";import{A as v}from"./apiV1.3869396f.js";import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";import{k as _,l as m,m as t,t as i,z as A,F as f,A as B,B as E,q as r,v as u,C as S,s as P,_ as D}from"./entry.454c48d4.js";import"./config.6fdf6528.js";import"./useStorage.12f764f9.js";function N(e){let a,s=e[0],l=1;for(;l<e.length;){const n=e[l],o=e[l+1];if(l+=2,(n==="optionalAccess"||n==="optionalCall")&&s==null)return;n==="access"||n==="optionalAccess"?(a=s,s=o(s)):(n==="call"||n==="optionalCall")&&(s=o((...c)=>s.call(a,...c)),a=void 0)}return s}class O extends v{async get(a=0,s={}){return this.method="GET",this.path="sellers/list",this.params=s,console.log(a),new Promise(async(l,n)=>await this.request().then(o=>{if(o.type==="server error"||N([o,"access",c=>c.response,"optionalAccess",c=>c.errors]))return n(o);l(o.response)}))}}const V={data(){return{data:[],paginate:{},loading:!1,page:1}},methods:{handleClickPage(e){switch(e){case"next":this.page++;break;case"prev":this.page--;break;default:this.page=e}},hanleEdit(e){console.log("[DEBUG] Handle edit:",e)},hanleDelete(e){const{toast_success:a,toast_question:s}=w();s(this.$t("Are you sure do this action?"),this.$t("Yes")).then(l=>{l.isConfirmed&&(console.log("[DEBUG] Handle delete:",e),a(this.$t("Vendedor eliminado: "+e)),this.loading=!0,this.getSellers())})},async getSellers(){const e=new O,{data:a,meta:s,links:l}=await e.get(0,{page:this.page});this.data=a??[],this.paginate={...s??{},links:{...l??{}}},this.loading=!1}},watch:{page(){this.getSellers()}},mounted(){this.loading=!0,this.getSellers()}},G={class:"min-w-full divide-y divide-gray-300"},z={class:"bg-gray-100"},L={scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},T={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},q={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},H={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},I={scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},U={class:"sr-only"},F={key:0},Y={colspan:"5",class:"bg-green-500"},j={class:"text-center text-base text-white"},J={class:"border-t border-gray-200 py-4 text-center"},K={class:"border-t border-gray-200"},M={class:"border-t border-gray-200 text-sm text-gray-600"},Q={class:"border-t border-gray-200"},R={class:"border-t border-gray-200 space-x-2"};function W(e,a,s,l,n,o){const c=x,p=b,h=$,g=k;return _(),m(f,null,[t("table",G,[t("thead",null,[t("tr",z,[t("th",L,i(e.$t("Id")),1),t("th",T,i(e.$t("Name")),1),t("th",q,i(e.$t("Email")),1),t("th",H,i(e.$t("Gender")),1),t("th",I,[t("span",U,i(e.$t("Select")),1)])])]),t("tbody",null,[n.loading?(_(),m("tr",F,[t("td",Y,[t("h4",j,i(e.$t("Loading"))+"...",1)])])):A("",!0),(_(!0),m(f,null,B(n.data,d=>(_(),m("tr",{key:d.id,class:E([n.loading?"opacity-10":"","text-sm"])},[t("td",J," #"+i(d.id),1),t("td",K,[r(c,{name:"wpf:collaborator"}),u(" "+i(d.name),1)]),t("td",M,[r(c,{name:"wpf:message-outline"}),u(" "+i(d.email),1)]),t("td",Q,[r(c,{name:`mdi:gender-${d.gender}`,size:"1.2rem"},null,8,["name"]),u(" "+i(e.$t(d.gender)),1)]),t("td",R,[r(p,{id:d.id,onOnClick:o.hanleEdit},null,8,["id","onOnClick"]),r(h,{id:d.id,onOnClick:o.hanleDelete},null,8,["id","onOnClick"])])],2))),128))])]),r(g,{meta:n.paginate,onClickPage:o.handleClickPage,onChangePage:o.handleClickPage},null,8,["meta","onClickPage","onChangePage"])],64)}const X=y(V,[["render",W]]),Z={methods:{handleAdd(){console.log("[DEBUG] handle Add")}}},ee={class:"px-4 sm:px-6 lg:px-8"},te={class:"sm:flex sm:items-center"},se={class:"sm:flex-auto flex text-blue-900"},ne={class:"text-2xl font-semibold leading-6 ml-2"},oe={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},le={class:"-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"};function ae(e,a,s,l,n,o){const c=x,p=C,h=X,g=D;return _(),S(g,null,{default:P(()=>[t("div",ee,[t("div",te,[t("div",se,[r(c,{name:"wpf:collaborator",size:"1.5rem"}),t("h2",ne,i(e.$t("Sellers")),1)]),t("div",oe,[r(p,{large:"",onOnClick:o.handleAdd},null,8,["onOnClick"])])]),t("div",le,[r(h)])])]),_:1})}const ge=y(Z,[["render",ae]]);export{ge as default};