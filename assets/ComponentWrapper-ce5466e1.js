import{d as x,v as P,x as A,y as S,c as D,b as f,o as u,g as h,u as C,f as p,w as g,h as _,i as L,s as I,z as B,A as K,D as V}from"./index-8ad79817.js";const z=["onClick"],N={key:0,"w:pos":"absolute right-20px top-0","w:z":"100","w:transform":"~ -translate-y-1/2","w:grid":"~ rows-1 flow-col gap-6px"},T=x({name:"ComponentWrapper",props:{componentProps:null,activeComponentId:null},setup(d){const r=d,o=P(),m=A.concat([S]).filter(n=>n.type==="container").map(n=>n.component),l=D(()=>r.componentProps.id===o.activeComponentId);function b(){o.changeActiveComponentId(r.componentProps.id),o.changeActiveComponent(r.componentProps)}function a(n){const c=Array.isArray(n.children)?n.children:[];for(const[t,e]of c.entries()){if(e.id===r.componentProps.id)return s(e),n.children.splice(t,1),!0;if(a(e))return!0}return!1}function w(){o.changeAddComponentToChildren(!0),o.changeComSelectDialogVisible(!0)}async function v(){if(await this.$confirm("对话框关联的按钮将会失效吗? 确认删除吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(c=>c)==="confirm")for(const[c,t]of o.productSchema.dialogList.entries()){if(t.id===r.componentProps.id){s(t),o.productSchema.dialogList.splice(c,1);break}if(a(t))break}}async function y(){var n,c;for(const t of o.productSchema.dialogList)for(const[e,i]of t.children.entries()){if(i.id===r.componentProps.id){s(i),t.children.splice(e,1);break}if(a(i))break}if(((n=o.dialogSchema)==null?void 0:n.buttonList.length)>0)for(const[t,e]of o.dialogSchema.buttonList.entries()){if(e.id===r.componentProps.id){s(e),(c=o.dialogSchema)==null||c.buttonList.splice(t,1);break}if(a(e))break}for(const[t,e]of o.productSchema.components.entries()){if(console.info(e.id,r),e.id===r.componentProps.id){s(e),o.productSchema.components.splice(t,1);break}if(a(e))break}}async function k(){r.componentProps.component===V.Dialog?await v():await y()}function s(n){const c=o.formKeys.findIndex(e=>e.id===n.id);c!==-1&&o.formKeys.splice(c,1);const t=Array.isArray(n.children)?n.children:[];for(const e of t)s(e)}return(n,c)=>{const t=f("Plus"),e=f("el-icon"),i=f("Delete");return u(),h("div",{"w:pos":"relative","w:border":"1 dashed transparent hover:gray-500 hover:opacity-30",class:B(["product-designer-component-wrapper",{"!wd-border-blue-500":C(l)}]),onClick:K(b,["stop"])},[C(l)?(u(),h("div",N,[C(m).includes(d.componentProps.component)?(u(),h("div",{key:0,"w:border":"blue-500","w:bg":"!hover:blue-500",class:"tool-wrapper",onClick:w},[p(e,{color:"blue",class:"tool-icon"},{default:g(()=>[p(t)]),_:1})])):_("",!0),L("div",{"w:border":"red-400","w:bg":"!hover:red-400",class:"tool-wrapper",onClick:k},[p(e,{color:"red",class:"tool-icon"},{default:g(()=>[p(i)]),_:1})])])):_("",!0),I(n.$slots,"default",{},void 0,!0)],10,z)}}});const W=(d,r)=>{const o=d.__vccOpts||d;for(const[m,l]of r)o[m]=l;return o},F=W(T,[["__scopeId","data-v-0847c038"]]);export{F as C};
