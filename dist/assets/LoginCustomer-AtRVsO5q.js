import{f as p,a as h,r as i,y as t,j as s}from"./index-O7fd-Ksl.js";import{u as x}from"./formik.esm-e0aiYYQc.js";import{c as f,a as o}from"./index.esm-Cw6ghX9I.js";import{h as c}from"./HandleClasses-BP4hTL13.js";const w=()=>{const[n,{isSuccess:r,isError:d,error:a}]=p(),l=h(),e=x({initialValues:{userName:"",password:""},validationSchema:f({userName:o().required("Enter userName"),password:o().required("Enter password")}),onSubmit:(m,{resetForm:u})=>{n(m),u()}});return i.useEffect(()=>{r&&(t.success("Login Success"),l("/user"),console.log("issuccessssss"))},[r]),i.useEffect(()=>{d&&t.error(a.data?a.data.message:"something went wrong")},[r]),s.jsx(s.Fragment,{children:s.jsx("form",{onSubmit:e.handleSubmit,children:s.jsx("div",{className:"conatiner",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-sm-6 offset-sm-3",children:s.jsxs("div",{class:"card",children:[s.jsx("div",{class:"card-header",children:"Login customer"}),s.jsxs("div",{class:"card-body",children:[s.jsxs("div",{children:[s.jsx("input",{type:"text",...e.getFieldProps("userName"),placeholder:"Enter userName",className:c(e,"userName")}),s.jsx("span",{className:"invalild-feedback",children:e.errors.userName})]}),s.jsxs("div",{children:[s.jsx("input",{type:"text",...e.getFieldProps("password"),placeholder:"Enter Password",className:c(e,"password")}),s.jsx("span",{className:"invalild-feedback",children:e.errors.password})]}),s.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Login"})]})]})})})})})})};export{w as default};
