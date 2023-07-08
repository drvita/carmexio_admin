import B from"./Icon.d28f6baf.js";import{_ as S,a as E,b as P,c as T}from"./Bar.9d21a9b5.js";import{n as $,k as _,l as p,m as t,t as i,z as x,F as C,A as D,v as M,B as N,q as n,C as O,s as m,E as V,_ as A}from"./entry.7e45b807.js";import{u as b}from"./useToast.5e8047f0.js";import{U as y,a as L,_ as U,b as z}from"./brandsHlp.9d29e013.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as I,b as q,a as Y,c as j,d as G}from"./BtnSave.0eb93e10.js";import{_ as H,a as J}from"./modal.99115117.js";import{u as K}from"./useStorage.6e19b9e8.js";import"./config.e10c9340.js";import"./apiV1.6105319e.js";const Q={props:{saved:{type:Boolean}},data(){return{data:[],paginate:{},loading:!1,page:1}},methods:{handleClickPage(e){switch(e){case"next":this.page++;break;case"prev":this.page--;break;default:this.page=e}},hanleEdit(e){$("/dashboard/cars/"+e)},hanleDelete(e){const{toast_success:a,toast_error:d,toast_question:h}=b();h(this.$t("Are you sure do this action?"),this.$t("Yes")).then(o=>{if(o.isConfirmed){const s=new y;this.loading=!0,s.delete(e).then(()=>{console.log("[Car] car deleted:",e),a(this.$t("Car deleted")),this.getCars()}).catch(r=>{console.error("[Car] error:",r==null?void 0:r.message),d(this.$t("Sorry, we have error in server, try again later")),this.loading=!1})}})},async getCars(){const e=new y,{data:a,meta:d,links:h}=await e.get(0,{page:this.page});this.data=a??[],this.paginate={...d??{},links:{...h??{}}},this.loading=!1},clasStatus(e){switch(e){case"for sale":return{"text-green-800":!0};case"saled":return{"text-red-800":!0};default:return{"text-gray-800":!0}}}},watch:{page(){this.getCars()},saved(){this.saved&&this.getCars()}},mounted(){this.loading=!0,this.getCars()}},R={class:"min-w-full divide-y divide-gray-300"},W={scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},X={scope:"col",class:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},Z={scope:"col",class:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},ee={scope:"col",class:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},te={scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},ae={scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},ne={class:"sr-only"},se={key:0},oe={colspan:"6",class:"bg-green-500"},le={class:"text-center text-base text-white"},re={class:"border-t border-gray-200 py-2 pl-2 uppercase"},ie={class:"hidden lg:table-cell border-t border-gray-200 lowercase"},de={class:"text-gray-500 text-sm"},ce={class:"hidden lg:table-cell border-t border-gray-200 text-sm lowercase"},he={class:"border-t border-gray-200"},me={class:"border-t border-gray-200 space-x-2"};function _e(e,a,d,h,o,s){const r=S,u=E,c=P;return _(),p(C,null,[t("table",R,[t("thead",null,[t("tr",null,[t("th",W,i(e.$t("Brand")),1),t("th",X,i(e.$t("Model")),1),t("th",Z,i(e.$t("Transmition")),1),t("th",ee,i(e.$t("Status")),1),t("th",te,i(e.$t("Price")),1),t("th",ae,[t("span",ne,i(e.$t("Select")),1)])])]),t("tbody",null,[o.loading?(_(),p("tr",se,[t("td",oe,[t("h4",le,i(e.$t("Loading"))+"...",1)])])):x("",!0),(_(!0),p(C,null,D(o.data,l=>(_(),p("tr",{key:l.id},[t("td",re,i(l.brand.name),1),t("td",ie,[M(i(l.model)+" / ",1),t("span",de,i(l.year),1)]),t("td",ce,i(e.$t(l.transmition)),1),t("td",{class:N([s.clasStatus(l.status),"hidden lg:table-cell border-t border-gray-200 text-sm capitalize"])},i(e.$t(l.status)),3),t("td",he," $ "+i(new Intl.NumberFormat().format(l.price_base))+" "+i(l.currency),1),t("td",me,[n(r,{id:l.id,onOnClick:s.hanleEdit},null,8,["id","onOnClick"]),n(u,{id:l.id,onOnClick:s.hanleDelete},null,8,["id","onOnClick"])])]))),128))])]),n(c,{meta:o.paginate,onClickPage:s.handleClickPage,onChangePage:s.handleClickPage},null,8,["meta","onClickPage","onChangePage"])],64)}const ue=v(Q,[["render",_e]]),pe={data(){return{form:{id:0,brand:"",model:"",year:"",transmition:"",status:"for sale",color:"",price:"",currency:"USD",specifications:""},data:[],loading:!1}},methods:{handleFormChange({target:e},a){this.form[a]=e.value},handleBtnSave(){if(!this.formValidation()){console.error("[Cars] Form inValid");return}const e=new y,a=this.getModelData(),{toast_error:d,toast_success:h}=b();this.loading=!0,e.set(a).then(({data:o})=>{o&&(console.log("[Car] Car saved:",o.id),h(this.$t("Car saved")),this.$emit("saved",o.id),this.handleClose()),this.loading=!1}).catch(o=>{console.error("[Car] error:",o==null?void 0:o.message),d(this.$t("Sorry, we have error in server, try again later")),this.loading=!1})},getModelData(){const{getUser:e}=K();return{brand_id:this.form.brand,model:this.form.model,year:this.form.year,transmition:this.form.transmition,status:this.form.status,color:this.form.color??"",price_base:this.form.price,currency:this.form.currency,specifications:this.form.specifications&&"--",admin_id:e().id}},formValidation(){const{toast_error:e}=b(),a={...this.form};return a.brand?a.model?a.year?a.transmition?a.status?a.price?!0:(e(this.$t("Please, type price")),!1):(e(this.$t("Please, select a status")),!1):(e(this.$t("Please, select a transmition")),!1):(e(this.$t("Please, type year")),!1):(e(this.$t("Please, type model")),!1):(e(this.$t("Please, select a brand")),!1)},handleClose(){this.$emit("onClose")},async getBrands(){const e=new L,{data:a}=await e.get(0,{perpage:200});this.data=a??[]}},computed:{dataBrand(){const e=[...this.data];return e.map(a=>{if(a.id===this.form.brand){a.selected=!0;return}a.selected=!1}),e},dataStatus(){const e=[{id:"for sale",name:this.$t("for sale")},{id:"apart",name:this.$t("apart")},{id:"saled",name:this.$t("saled")}];return e.map((a,d)=>{if(a.id===this.form.status){e[d].selected=!0;return}e[d].selected=!1}),e},dataTransmition(){const e=[{id:"automatic",name:this.$t("automatic")},{id:"standard",name:this.$t("standard")}];return e.map(a=>{if(a.id===this.form.transmition){a.selected=!0;return}a.selected=!1}),e},title(){return this.form.id?this.$t("Edit car"):this.$t("New car")},placeholdColor(){return this.$t("white")},placeholdModel(){return this.$t("classic jetta")}},mounted(){this.getBrands()}},ge={class:"grid grid-cols-2 gap-4"},fe={class:"grid grid-cols-2 gap-4"},Ce=t("hr",{class:"my-4"},null,-1),be={key:0,class:"w-full text-right py-2 pr-6 border text-primary-800 font-semibold"},ye={class:"grid grid-cols-2 gap-2"};function xe(e,a,d,h,o,s){const r=I,u=q,c=H,l=Y,f=U,g=z,w=j,k=G,F=J;return _(),O(F,{title:s.title,onOnClose:s.handleClose},{default:m(()=>[n(c,null,{default:m(()=>[n(r,{label:"Brand",to:"brand"}),n(u,{data:s.dataBrand,id:"brand",onOnChange:s.handleFormChange},null,8,["data","onOnChange"])]),_:1}),n(c,null,{default:m(()=>[t("div",ge,[t("div",null,[n(r,{label:"Model",to:"model"}),n(l,{id:"model",placeholder:s.placeholdModel,onOnChange:s.handleFormChange},null,8,["placeholder","onOnChange"])]),t("div",null,[n(r,{label:"Year",to:"year"}),n(l,{id:"year",placeholder:"2017",onOnChange:s.handleFormChange},null,8,["onOnChange"])])])]),_:1}),n(c,null,{default:m(()=>[n(r,{label:"Transmition",to:"transmition"}),n(u,{data:s.dataTransmition,id:"transmition",onOnChange:s.handleFormChange},null,8,["data","onOnChange"])]),_:1}),n(c,null,{default:m(()=>[t("div",fe,[t("div",null,[n(r,{label:"Status",to:"status"}),n(u,{data:s.dataStatus,id:"status",onOnChange:s.handleFormChange},null,8,["data","onOnChange"])]),t("div",null,[n(r,{label:"Color",to:"color",optional:""}),n(l,{id:"color",placeholder:s.placeholdColor,onOnChange:s.handleFormChange},null,8,["placeholder","onOnChange"])])])]),_:1}),n(c,null,{default:m(()=>[n(r,{label:"Price",to:"price"}),n(f,{id:"price",onOnChange:s.handleFormChange,onOnChangeCurrency:s.handleFormChange},null,8,["onOnChange","onOnChangeCurrency"])]),_:1}),n(c,null,{default:m(()=>[n(r,{label:"Specifications",to:"specifications",optional:""}),n(g,{id:"specifications",onOnChange:s.handleFormChange},null,8,["onOnChange"])]),_:1}),Ce,o.loading?(_(),p("div",be,i(e.$t("Loading"))+"...",1)):x("",!0),t("div",ye,[n(w,{large:"",onOnClick:s.handleClose},null,8,["onOnClick"]),n(k,{disabled:o.loading,onOnClick:s.handleBtnSave},null,8,["disabled","onOnClick"])])]),_:1},8,["title","onOnClose"])}const ve=v(pe,[["render",xe]]),$e={data(){return{showForm:!1,saved:!1}},methods:{handleAdd(){this.showForm=!0}},computed:{saveCar(){return!this.showForm&&this.saved}},watch:{showForm(){this.showForm&&(this.saved=!1)}}},Oe={class:"px-4 sm:px-6 lg:px-8"},we={class:"sm:flex sm:items-center"},ke={class:"sm:flex-auto flex text-indigo-900"},Fe={class:"text-2xl font-semibold leading-6 ml-2"},Be={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},Se={class:"-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"};function Ee(e,a,d,h,o,s){const r=B,u=T,c=ue,l=A,f=ve;return _(),p(C,null,[n(l,null,{default:m(()=>[t("div",Oe,[t("div",we,[t("div",ke,[n(r,{name:"wpf:car-rental",size:"1.5rem"}),t("h2",Fe,i(e.$t("Cars")),1)]),t("div",Be,[n(u,{large:"",onOnClick:s.handleAdd},null,8,["onOnClick"])])]),t("div",Se,[n(c,{saved:s.saveCar},null,8,["saved"])])])]),_:1}),o.showForm?(_(),O(f,{key:0,onOnClose:a[0]||(a[0]=g=>this.showForm=!1),onSaved:a[1]||(a[1]=g=>("navigateTo"in e?e.navigateTo:V($))("cars/"+g))})):x("",!0)],64)}const qe=v($e,[["render",Ee]]);export{qe as default};