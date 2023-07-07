import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{k as r,l,M as y,m as n,t as d,F as g,A as x,C as $,q as u,B as v,n as b,D as w,v as k,G as C}from"./entry.3656eccc.js";import{u as N}from"./useStorage.48e4a811.js";import f from"./Icon.1a0e11b7.js";import{u as S}from"./useToast.221f038c.js";import{L as M}from"./loginHlp.f683a337.js";import"./config.b6453272.js";import"./apiV1.b7abf212.js";const L={},B={class:"absolute top-0 left-0 w-full z-10 bg-transparent opacity-80 dark:bg-gray-900"},z=y('<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="https://flowbite.com/" class="flex items-center"><img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Car Mexio</span></a><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button></div>',1),I=[z];function D(t,e){return r(),l("nav",B,I)}const H=m(L,[["render",D]]),A={props:{name:{type:String,default:""},value:{type:String,default:""}}},T={class:"flex flex-col text-white m-1 md:m-2"},V={class:"font-semibold capitalize"},j={class:"ml-2 text-gray-300 text-sm"};function E(t,e,s,_,o,a){return r(),l("div",T,[n("span",V,d(s.name)+":",1),n("span",j,d(s.value),1)])}const F=m(A,[["render",E]]),O={data(){return{data:[]}},mounted(){const e=N().getUser();this.data=[{key:this.$t("Id"),value:e.id},{key:this.$t("Name"),value:e.name},{key:this.$t("Email"),value:e.email},{key:this.$t("Gender"),value:e.gender}]}},U={class:"relative bg-gray-800 pb-8 pt-20"},q={class:"grid grid-cols-2 grid-rows-2 p-2 md:p-0 md:flex md:flex-row md:space-x-4 md:justify-center"};function G(t,e,s,_,o,a){const i=F;return r(),l("div",U,[n("div",q,[(r(!0),l(g,null,x(o.data,c=>(r(),$(i,{name:c.key,value:c.value},null,8,["name","value"]))),256))])])}const Q=m(O,[["render",G]]),R={props:{id:{type:Number},name:{type:String,default:"subway:admin"},text:{type:String,default:"Users"},current:{type:Boolean}},computed:{classCurrent(){return this.current?"text-blue-700 underline text-lg":"text-blue-950"}},methods:{handleClick(){this.$emit("onClick",this.id??this.name)}}},Y={class:"ml-4 truncate"};function J(t,e,s,_,o,a){const i=f;return r(),l("div",{class:v([a.classCurrent,"content-end cursor-pointer text-base"]),onClick:e[0]||(e[0]=(...c)=>a.handleClick&&a.handleClick(...c))},[u(i,{name:s.name},null,8,["name"]),n("span",Y,d(s.text),1)],2)}const K=m(R,[["render",J]]),P={methods:{handleClick(){const{toast_error:t,toast_question:e}=S();e(this.$t("Are you sure do this action?"),this.$t("Yes")).then(s=>{s.isConfirmed&&(console.log("[Logout] Session cerrada"),new M().logout().then(o=>(console.log("[Logout] logout complete:"),b("/"))).catch(o=>{console.error("[Logout] logout failer:",o),t(this.$t((o==null?void 0:o.message)??"Server error")),this.email="",this.password=""}))})}}},W={class:"ml-2"};function X(t,e,s,_,o,a){const i=f;return r(),l("button",{onClick:e[0]||(e[0]=(...c)=>a.handleClick&&a.handleClick(...c)),class:"w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},[u(i,{name:"wpf:shutdown",color:"white",size:"1rem"}),n("span",W,d(t.$t("Logout")),1)])}const Z=m(P,[["render",X]]),ee={data(){return{menus:[]}},methods:{hanleClickMenu(t){const e=this.menus.find(s=>s.iconName===t);return b(e.page)}},mounted(){const t=w(),e=[{iconName:"wpf:statistics",text:this.$t("Dashboard"),page:"/dashboard",current:!1},{iconName:"wpf:administrator",text:this.$t("Admins"),page:"/dashboard/admins",current:!1},{iconName:"wpf:collaborator",text:this.$t("Sellers"),page:"/dashboard/sellers",current:!1},{iconName:"wpf:name",text:this.$t("Customers"),page:"/dashboard/customers",current:!1},{iconName:"wpf:car-rental",text:this.$t("Cars"),page:"/dashboard/cars",current:!1}];for(let s=0;s<e.length;s++)e[s].page===t.path&&(e[s].current=!0);this.menus=e}},te={class:"drop-shadow-md rounded-lg"},se={class:"bg-gray-100 pt-6"},ne={class:"text-center text-2xl font-semibold"},oe=n("p",{class:"text-center text-lg w-full"},"Administrador",-1),ae={class:"bg-gray-50 border-t pb-12 pt-4"},re={class:"flex flex-col space-y-4 pl-5"},ce={class:"mt-12 text-center px-6"};function ie(t,e,s,_,o,a){const i=f,c=K,p=Z;return r(),l("div",te,[n("div",se,[n("h4",ne,[u(i,{name:"wpf:statistics",color:"blue",size:"1.5rem"}),k(" "+d(t.$t("Dashboard")),1)]),oe]),n("div",ae,[n("div",re,[(r(!0),l(g,null,x(o.menus,h=>(r(),$(c,{name:h.iconName,text:h.text,current:h.current,onOnClick:a.hanleClickMenu},null,8,["name","text","current","onOnClick"]))),256))]),n("div",ce,[u(p)])])])}const le=m(ee,[["render",ie]]),de={beforeCreate:function(){document.getElementsByTagName("html")[0].classList.remove("dark"),document.body.className="h-screen bg-gray-200"},computed:{year(){return"2023"},company(){return"IQISS Mexico"}}},ue={class:"h-screen w-full flex"},me={class:"w-full md:w-3/4 lg:w-8/12 drop-shadow-md p-0"},_e={class:"py-6 bg-white min-h-screen"},pe={class:"flex justify-center items-end text-gray-400 w-full bg-gray-900 h-10 md:h-18 statics bottom-0 pb-1 md:pb-2"},he={class:""},fe={class:"ml-2"},ge={class:""},xe={class:"hidden md:block fixed right-0 w-1/4 p-0 pl-4 h-full"};function $e(t,e,s,_,o,a){const i=H,c=Q,p=le;return r(),l("div",ue,[n("div",me,[u(i),u(c),n("div",_e,[C(t.$slots,"default")]),n("footer",pe,[n("span",he,d(t.$t("All right reserved")),1),n("span",fe,d(a.company),1),n("span",ge,"@"+d(a.year),1)])]),n("div",xe,[u(p)])])}const Me=m(de,[["render",$e]]);export{Me as default};
