import f from"./Icon.1a0e11b7.js";import{_ as b,a as $,b as k,c as C}from"./Bar.999a5d1b.js";import{u as B}from"./useToast.221f038c.js";import{U as E}from"./usersHlp.01529263.js";import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";import{k as _,l as m,m as e,t as s,z as v,F as x,A as w,B as U,q as o,v as u,C as P,s as A,_ as D}from"./entry.3656eccc.js";import"./config.b6453272.js";import"./apiV1.b7abf212.js";import"./useStorage.48e4a811.js";const N={data(){return{data:[],paginate:{},loading:!1,page:1}},methods:{handleClickPage(t){switch(t){case"next":this.page++;break;case"prev":this.page--;break;default:this.page=t}},hanleEdit(t){console.log("[DEBUG] Handle edit:",t)},hanleDelete(t){const{toast_success:c,toast_question:i}=B();i(this.$t("Are you sure do this action?"),this.$t("Yes")).then(r=>{r.isConfirmed&&(console.log("[DEBUG] Handle delete:",t),c(this.$t("Administrador eliminado: "+t)),this.loading=!0,this.getUsers())})},async getUsers(){const t=new E,{data:c,meta:i,links:r}=await t.get(null,{page:this.page}).catch(a=>({}));this.data=c??[],this.paginate={...i??{},links:{...r??{}}},this.loading=!1}},watch:{page(){this.getUsers()}},mounted(){this.loading=!0,this.getUsers()}},O={class:"min-w-full divide-y divide-gray-300"},z={class:"bg-gray-100"},G={scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},V={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},I={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},L={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},T={scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},q={class:"sr-only"},F={key:0},H={colspan:"5",class:"bg-green-500"},S={class:"text-center text-base text-white"},Y={class:"border-t border-gray-200 py-4 text-center"},j={class:"border-t border-gray-200"},J={class:"border-t border-gray-200 text-sm text-gray-600"},K={class:"border-t border-gray-200"},M={class:"border-t border-gray-200 space-x-2"};function Q(t,c,i,r,a,l){const d=f,p=b,h=$,g=k;return _(),m(x,null,[e("table",O,[e("thead",null,[e("tr",z,[e("th",G,s(t.$t("Id")),1),e("th",V,s(t.$t("Name")),1),e("th",I,s(t.$t("Email")),1),e("th",L,s(t.$t("Gender")),1),e("th",T,[e("span",q,s(t.$t("Select")),1)])])]),e("tbody",null,[a.loading?(_(),m("tr",F,[e("td",H,[e("h4",S,s(t.$t("Loading"))+"...",1)])])):v("",!0),(_(!0),m(x,null,w(a.data,n=>(_(),m("tr",{key:n.id,class:U([a.loading?"opacity-10":"","text-sm"])},[e("td",Y," #"+s(n.id),1),e("td",j,[o(d,{name:"wpf:name"}),u(" "+s(n.name),1)]),e("td",J,[o(d,{name:"wpf:message-outline"}),u(" "+s(n.email),1)]),e("td",K,[o(d,{name:`mdi:gender-${n.gender}`,size:"1.2rem"},null,8,["name"]),u(" "+s(t.$t(n.gender)),1)]),e("td",M,[o(p,{id:n.id,onOnClick:l.hanleEdit},null,8,["id","onOnClick"]),o(h,{id:n.id,onOnClick:l.hanleDelete},null,8,["id","onOnClick"])])],2))),128))])]),o(g,{meta:a.paginate,onClickPage:l.handleClickPage,onChangePage:l.handleClickPage},null,8,["meta","onClickPage","onChangePage"])],64)}const R=y(N,[["render",Q]]),W={methods:{handleAdd(){console.log("[DEBUG] handle Add")}}},X={class:"px-4 sm:px-6 lg:px-8"},Z={class:"sm:flex sm:items-center"},ee={class:"sm:flex-auto flex text-indigo-950"},te={class:"text-2xl font-semibold leading-6 ml-2"},se={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},oe={class:"-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"};function ne(t,c,i,r,a,l){const d=f,p=C,h=R,g=D;return _(),P(g,null,{default:A(()=>[e("div",X,[e("div",Z,[e("div",ee,[o(d,{name:"wpf:collaborator",size:"1.5rem"}),e("h2",te,s(t.$t("Customers")),1)]),e("div",se,[o(p,{large:"",onOnClick:l.handleAdd},null,8,["onOnClick"])])]),e("div",oe,[o(h)])])]),_:1})}const he=y(W,[["render",ne]]);export{he as default};
