/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{useState as i,useEffect as a}from"@dropins/tools/preact-compat.js";import{classes as c}from"@dropins/tools/lib.js";import{events as m}from"@dropins/tools/event-bus.js";import{g as l}from"../chunks/getFetchedProductData.js";const f=({initialData:o=null,children:p,...r})=>{const[t,s]=i(o);return a(()=>{const e=m.on("pdp/data",s);return()=>{e==null||e.off()}},[]),t?n("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.description)??""},...r,className:c(["pdp-description",r.className])}):null};f.getInitialData=l;export{f as ProductDescription,f as default};
//# sourceMappingURL=ProductDescription.js.map
