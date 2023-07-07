import{_ as c}from"./_plugin-vue_export-helper.c27b6911.js";import{k as d,l as u,m as o}from"./entry.3656eccc.js";import{A as h}from"./apiV1.b7abf212.js";const p={props:{placeholder:{type:String,default:"100000"},id:{type:String,default:""},name:{type:String,default:""},defaultValue:{type:String,default:""},defaultCurrency:{type:String,default:"USD"}},methods:{handleChange(i){const n=this.name?this.name:this.id;this.$emit("onChange",i,n)}}},m={class:"relative mt-2"},f=o("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[o("span",{class:"text-gray-500 sm:text-sm"},"$")],-1),g=["id","name","value","placeholder"],y={class:"absolute inset-y-0 right-0 flex items-center pr-3"},_=["value"],x=o("option",null,"USD",-1),C=o("option",null,"MXN",-1),w=[x,C];function v(i,n,e,a,s,t){return d(),u("div",m,[f,o("input",{type:"number",id:e.id,name:e.name,value:e.defaultValue,onChange:n[0]||(n[0]=(...r)=>t.handleChange&&t.handleChange(...r)),class:"block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 outline-none",placeholder:e.placeholder},null,40,g),o("div",y,[o("select",{class:"bg-white text-gray-500",value:e.defaultCurrency,onChange:n[1]||(n[1]=r=>i.$emit("onChangeCurrency",r,"currency"))},w,40,_)])])}const k=c(p,[["render",v]]),b={props:{id:{type:String,default:""},rows:{type:Number,default:4},name:{type:String,default:""},defaultText:{type:String,default:""}},methods:{handleChange(i){const n=this.name?this.name:this.id;this.$emit("onChange",i,n)}}},A=["rows","name","id","value"];function S(i,n,e,a,s,t){return d(),u("textarea",{rows:e.rows,name:e.name,id:e.id,value:e.defaultText,onChange:n[0]||(n[0]=(...r)=>t.handleChange&&t.handleChange(...r)),class:"block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 outline-none"},null,40,A)}const q=c(b,[["render",S]]);function l(i){let n,e=i[0],a=1;for(;a<i.length;){const s=i[a],t=i[a+1];if(a+=2,(s==="optionalAccess"||s==="optionalCall")&&e==null)return;s==="access"||s==="optionalAccess"?(n=e,e=t(e)):(s==="call"||s==="optionalCall")&&(e=t((...r)=>e.call(n,...r)),n=void 0)}return e}let V=class extends h{async get(n=0,e={}){return this.method="GET",this.path="cars",this.params=e,n===0?this.path="cars":n&&(this.path="cars/"+n),new Promise(async(a,s)=>await this.request().then(t=>{if(t.type==="server error"||l([t,"access",r=>r.response,"optionalAccess",r=>r.errors]))return s(t);a(t.response)}))}async set(n){return this.method="POST",this.path="cars",this.params={},this.body=n,new Promise(async(e,a)=>await this.request().then(s=>{if(s.type==="server error"||l([s,"access",t=>t.response,"optionalAccess",t=>t.errors]))return a(s);e(s.response)}))}async update(n,e){return this.method="PUT",this.path="cars/"+n,this.params={},this.body=e,new Promise(async(a,s)=>await this.request().then(t=>{if(t.type==="server error"||l([t,"access",r=>r.response,"optionalAccess",r=>r.errors]))return s(t);a(t.response)}))}async delete(n){return this.method="DELETE",this.path="cars/"+n,this.params={},this.body={},new Promise(async(e,a)=>await this.request().then(s=>{if(s.type==="server error"||l([s,"access",t=>t.response,"optionalAccess",t=>t.errors]))return a(s);e(s.response)}))}};function P(i){let n,e=i[0],a=1;for(;a<i.length;){const s=i[a],t=i[a+1];if(a+=2,(s==="optionalAccess"||s==="optionalCall")&&e==null)return;s==="access"||s==="optionalAccess"?(n=e,e=t(e)):(s==="call"||s==="optionalCall")&&(e=t((...r)=>e.call(n,...r)),n=void 0)}return e}class B extends h{async get(n=0,e={}){return this.method="GET",this.path="brands",this.params=e,console.log(n),new Promise(async(a,s)=>await this.request().then(t=>{if(t.type==="server error"||P([t,"access",r=>r.response,"optionalAccess",r=>r.errors]))return s(t);a(t.response)}))}}export{V as U,k as _,B as a,q as b};
