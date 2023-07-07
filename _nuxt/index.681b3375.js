import p from"./Icon.1a0e11b7.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{k as c,l as d,m as a,t as u,B as b,q as f,z as _,n as y,C as m,s as w,_ as C,A as $,F as v}from"./entry.3656eccc.js";import{A as B}from"./apiV1.b7abf212.js";import"./config.b6453272.js";import"./useStorage.48e4a811.js";const k={props:{title:{type:String,default:"title"},icon:{type:String,default:"wpf:coins"},number:{type:Number,default:1},iconBg:{type:String,default:"gray-800"},iconColor:{type:String,default:"white"},footer:{type:String}},computed:{classIcon(){return{[`bg-${this.iconBg}`]:!0,[`text-${this.iconColor}`]:this.iconBg==="gray-800"}}}},A={class:"border drop-shadow-md rounded-lg p-2"},S={class:"h-16 px-2 py-3 flex"},D={class:"flex flex-col w-4/6"},N={class:""},I={class:"text-lg"},V={key:0,class:"w-2/6"},z={key:0,class:"text-xs text-gray-400 py-2 px-3"};function E(e,n,t,o,s,r){const i=p;return c(),d("div",A,[a("div",S,[a("div",D,[a("span",N,u(t.title),1),a("span",I,u(t.number),1)]),t.icon?(c(),d("div",V,[a("span",{class:b(["rounded-full border drop-shadow-md px-3 py-2 text-2xl",r.classIcon])},[f(i,{name:t.icon},null,8,["name"])],2)])):_("",!0)]),t.footer?(c(),d("div",z,u(t.footer),1)):_("",!0)])}const L=h(k,[["render",E]]);function q(e){let n,t=e[0],o=1;for(;o<e.length;){const s=e[o],r=e[o+1];if(o+=2,(s==="optionalAccess"||s==="optionalCall")&&t==null)return;s==="access"||s==="optionalAccess"?(n=t,t=r(t)):(s==="call"||s==="optionalCall")&&(t=r((...i)=>t.call(n,...i)),n=void 0)}return t}class F extends B{async analytics(){return this.method="GET",this.path="dashboard/analytics",this.params={},new Promise(async(n,t)=>await this.request().then(o=>{if(o.type==="server error"||q([o,"access",s=>s.response,"optionalAccess",s=>s.errors]))return t(o);n(o.response)}))}}const G={data(){return{data:[]}},methods:{handleClick(e){e.url&&(y(e.url),console.log("[DEBUG] Click",e.url))},getData(){new F().analytics().then(n=>{const t=[{icon:"wpf:administrator",title:this.$t("Administrators"),number:n.admins_count,url:"/dashboard/admins"},{icon:"wpf:collaborator",title:this.$t("Sellers"),number:n.sellers_count,url:"/dashboard/sellers"},{icon:"wpf:name",title:this.$t("Customers"),number:n.customers_count,url:"/dashboard/customers"},{icon:"wpf:car-rental",title:this.$t("Cars"),iconBg:"gray-200",number:n.cars_count,url:"/dashboard/cars"}];this.data=t})}},mounted(){this.getData()}},T={class:"px-4 sm:px-6 lg:px-8"},H={class:"sm:flex sm:items-center"},P={class:"sm:flex-auto flex text-blue-800"},U={class:"text-2xl font-semibold leading-6 ml-2"},j={class:"py-10 px-2 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4"};function J(e,n,t,o,s,r){const i=p,x=L,g=C;return c(),m(g,null,{default:w(()=>[a("div",T,[a("div",H,[a("div",P,[f(i,{name:"wpf:statistics",size:"1.5rem"}),a("h2",U,u(e.$t("Dashboard")),1)])]),a("div",j,[(c(!0),d(v,null,$(s.data,l=>(c(),m(x,{icon:l.icon,title:l.title,number:l.number,"icon-bg":l.iconBg,onClick:K=>r.handleClick(l)},null,8,["icon","title","number","icon-bg","onClick"]))),256))])])]),_:1})}const Y=h(G,[["render",J]]);export{Y as default};