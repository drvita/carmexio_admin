import{D as d,n as c,C as u,s as f,_ as p,k as y,m as t,t as i}from"./entry.7e45b807.js";import{u as g}from"./useToast.5e8047f0.js";import{A as _}from"./adminsHlp.140c5e7f.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import"./apiV1.6105319e.js";import"./useStorage.6e19b9e8.js";const k={methods:{handleClick(){const{query:e}=d(),{toast_error:r,toast_success:o}=g();if(!e||!e.url){r(this.$t("Server error"));return}new _().verify(e.url).then(()=>{console.log("[Verify] Status: email verified"),o(this.$t("Email verified")),setTimeout(()=>c("/"),2e3)}).catch(s=>{console.error("[Verify] Status error:",s.message),r(this.$t(s.message))})}}},x={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},b={class:"p-6 space-y-4 md:space-y-6 sm:p-8 text-white flex flex-col"};function v(e,r,o,n,s,a){const m=p;return y(),u(m,{name:"login"},{default:f(()=>[t("div",x,[t("div",b,[t("span",null,i(e.$t("Please click the button below to verify your email address")),1),t("button",{onClick:r[0]||(r[0]=(...l)=>a.handleClick&&a.handleClick(...l)),class:"w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},i(e.$t("Verify Email Address")),1)])])]),_:1})}const B=h(k,[["render",v]]);export{B as default};
