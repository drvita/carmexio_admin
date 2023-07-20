import h from"./Icon.0ba8ef11.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import{k as c,l as d,m as a,t as u,B as f,q as x,z as m,n as y,C as _,s as w,_ as v,A as B,F as C}from"./entry.454c48d4.js";import{A as $}from"./apiV1.3869396f.js";import{u as k}from"./useStorage.12f764f9.js";import"./config.6fdf6528.js";const A={props:{title:{type:String,default:"title"},icon:{type:String,default:"wpf:coins"},number:{type:Number,default:1},iconBg:{type:String,default:"gray-800"},iconColor:{type:String,default:"white"},footer:{type:String}},computed:{classIcon(){return{[`bg-${this.iconBg}`]:!0,[`text-${this.iconColor}`]:this.iconBg==="gray-800"}}}},S={class:"border drop-shadow-md rounded-lg p-2 cursor-pointer"},D={class:"h-16 px-2 pb-6 pt-2 flex"},N={class:"flex space-x-2 flex-col w-4/6"},I={class:"md:text-lg"},V={class:"text-lg md:text-2xl"},z={key:0,class:"w-2/6 text-right pt-2"},L={key:0,class:"text-xs text-gray-400 py-2 px-3"};function q(t,n,e,s,o,r){const i=h;return c(),d("div",S,[a("div",D,[a("div",N,[a("span",I,u(e.title),1),a("div",null,[a("span",V,u(e.number),1)])]),e.icon?(c(),d("div",z,[a("span",{class:f(["rounded-full border drop-shadow-md px-3 py-2 text-2xl",r.classIcon])},[x(i,{name:e.icon},null,8,["name"])],2)])):m("",!0)]),e.footer?(c(),d("div",L,u(e.footer),1)):m("",!0)])}const E=p(A,[["render",q]]);function F(t){let n,e=t[0],s=1;for(;s<t.length;){const o=t[s],r=t[s+1];if(s+=2,(o==="optionalAccess"||o==="optionalCall")&&e==null)return;o==="access"||o==="optionalAccess"?(n=e,e=r(e)):(o==="call"||o==="optionalCall")&&(e=r((...i)=>e.call(n,...i)),n=void 0)}return e}class R extends ${async analytics(){return this.method="GET",this.path="dashboard/analytics",this.params={},new Promise(async(n,e)=>await this.request().then(s=>{if(s.type==="server error"||F([s,"access",o=>o.response,"optionalAccess",o=>o.errors]))return e(s);n(s.response)}))}}const T={data(){return{data:[]}},methods:{handleClick(t){t.url&&y(t.url)},getData(){const t=new R,e=k().hasRole("root");t.analytics().then(s=>{const o=[{icon:"wpf:administrator",title:this.$t("Administrators"),number:s.admins_count,url:"/dashboard/admins",show:e},{icon:"wpf:car-rental",title:this.$t("Cars"),iconBg:"gray-200",number:s.cars_count,url:"/dashboard/cars",show:!0}];this.data=o})}},computed:{classBox(){var n;let t;return((n=this.data)==null?void 0:n.length)>2?t={"md:grid-cols-3":!0}:t={"md:grid-cols-2":!0},t},box(){return this.data.filter(t=>t.show)}},mounted(){this.getData()}},G={class:"px-4 sm:px-6 lg:px-8"},H={class:"sm:flex sm:items-center"},P={class:"sm:flex-auto flex text-blue-800"},j={class:"text-2xl font-semibold leading-6 ml-2"};function J(t,n,e,s,o,r){const i=h,g=E,b=v;return c(),_(b,null,{default:w(()=>[a("div",G,[a("div",H,[a("div",P,[x(i,{name:"wpf:statistics",size:"1.5rem"}),a("h2",j,u(t.$t("Dashboard")),1)])]),a("div",{class:f([r.classBox,"py-10 px-2 grid grid-cols-1 gap-1 md:gap-4"])},[(c(!0),d(C,null,B(r.box,l=>(c(),_(g,{icon:l.icon,title:l.title,number:l.number,"icon-bg":l.iconBg,onClick:K=>r.handleClick(l)},null,8,["icon","title","number","icon-bg","onClick"]))),256))],2)])]),_:1})}const Y=p(T,[["render",J]]);export{Y as default};
