import{C as d}from"./ComponentWrapper-ce5466e1.js";import{d as u,p as f,b as t,o as l,e as s,w as o,f as c,n as P,l as V,t as b,h as v,i as x}from"./index-8ad79817.js";const C=x("i",{class:"el-icon-question"},null,-1),B=u({name:"SwitchComponent",props:{componentProps:null},setup(e){const n=f(e.componentProps);return(w,a)=>{const p=t("el-tooltip"),m=t("el-switch"),r=t("el-form-item");return l(),s(d,{"component-props":e.componentProps},{default:o(()=>[c(r,null,P({default:o(()=>[c(m,{modelValue:n.value.defaultValue,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value.defaultValue=i),"active-text":e.componentProps.activeText,disabled:e.componentProps.disabled},null,8,["modelValue","active-text","disabled"])]),_:2},[e.componentProps.showLabel!==!1?{name:"label",fn:o(()=>[V(b(e.componentProps.label)+" ",1),e.componentProps.tip?(l(),s(p,{key:0,content:e.componentProps.tip,placement:"top"},{default:o(()=>[C]),_:1},8,["content"])):v("",!0)])}:void 0]),1024)]),_:1},8,["component-props"])}}});export{B as default};