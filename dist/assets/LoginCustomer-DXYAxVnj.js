import{f as p,a as h,r as i,y as t,j as s}from"./index-DFBXhpBk.js";import{u as x}from"./formik.esm-CiWefhGh.js";import{c as f,a as o}from"./index.esm-B2SHaAPu.js";import{h as c}from"./HandleClasses-C0gnHbqo.js";const b=()=>{const[n,{isSuccess:r,isError:l,error:a}]=p(),d=h(),e=x({initialValues:{email:"",password:""},validationSchema:f({email:o().required("Enter email"),password:o().required("Enter password")}),onSubmit:(m,{resetForm:u})=>{n(m),u()}});return i.useEffect(()=>{r&&(t.success("Login Success"),d("/user"),console.log("issuccessssss"))},[r]),i.useEffect(()=>{l&&t.error(a.data?a.data.message:"something went wrong")},[r]),s.jsx(s.Fragment,{children:s.jsx("form",{onSubmit:e.handleSubmit,children:s.jsx("div",{className:"conatiner",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-sm-6 offset-sm-3",children:s.jsxs("div",{class:"card",children:[s.jsx("div",{class:"card-header",children:"Login customer"}),s.jsxs("div",{class:"card-body",children:[s.jsxs("div",{children:[s.jsx("input",{type:"text",...e.getFieldProps("email"),placeholder:"Enter Email",className:c(e,"email")}),s.jsx("span",{className:"invalild-feedback",children:e.errors.email})]}),s.jsxs("div",{children:[s.jsx("input",{type:"text",...e.getFieldProps("password"),placeholder:"Enter Password",className:c(e,"password")}),s.jsx("span",{className:"invalild-feedback",children:e.errors.password})]}),s.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Login"})]})]})})})})})})};export{b as default};
