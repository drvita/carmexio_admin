import{d as r,K as u,c as p,k as f,l as _,L as d}from"./entry.0a49ef2e.js";import{u as m}from"./config.583245fe.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";function l(c){let t,n=c[0],a=1;for(;a<c.length;){const o=c[a],i=c[a+1];if(a+=2,(o==="optionalAccess"||o==="optionalCall")&&n==null)return;o==="access"||o==="optionalAccess"?(t=n,n=i(n)):(o==="call"||o==="optionalCall")&&(n=i((...e)=>n.call(t,...e)),t=void 0)}return n}const x=r({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(c){const t=c;u(e=>({"5fa51ebc":o.value}));const n=m();l([n,"optionalAccess",e=>e.nuxtIcon,"optionalAccess",e=>e.aliases]);const a=p(()=>(l([n,"optionalAccess",e=>e.nuxtIcon,"optionalAccess",e=>e.aliases])||{})[t.name]||t.name),o=p(()=>`url('https://api.iconify.design/${a.value.replace(":","/")}.svg')`),i=p(()=>{if(!t.size&&typeof l([n,"access",s=>s.nuxtIcon,"optionalAccess",s=>s.size])=="boolean"&&!l([n,"access",s=>s.nuxtIcon,"optionalAccess",s=>s.size]))return;const e=t.size||l([n,"access",s=>s.nuxtIcon,"optionalAccess",s=>s.size])||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(f(),_("span",{style:d({width:i.value,height:i.value})},null,4))}});const C=S(x,[["__scopeId","data-v-5ee01813"]]);export{C as default};