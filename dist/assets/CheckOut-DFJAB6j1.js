import{B as i,a as u,k as d,b as m,r as h,y as l,j as s}from"./index-DFBXhpBk.js";import"./index.esm-B2SHaAPu.js";const f=()=>{const[c,{isSuccess:r}]=i(),t=u(),{pid:a}=d(),o=()=>{c({products:a})},{customer:e}=m(n=>n.auth);return h.useEffect(()=>{r&&(l.success("order Place Success"),t("/success"))},[r]),s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"Shipping Information"}),s.jsx("h3",{children:"Your oredr is conform"}),e.name,s.jsx("hr",{}),e.email,s.jsx("hr",{}),e.address,s.jsx("button",{onClick:o,children:"confirm Order"})]})};export{f as default};
