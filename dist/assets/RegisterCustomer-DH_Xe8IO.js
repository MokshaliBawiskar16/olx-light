import{e as h,a as x,r as n,y as t,j as e}from"./index-DFBXhpBk.js";import{u}from"./formik.esm-CiWefhGh.js";import{c as g,a}from"./index.esm-B2SHaAPu.js";import{h as r}from"./HandleClasses-C0gnHbqo.js";const k=()=>{const[c,{isSuccess:d,isError:i,error:l,isLoading:j}]=h(),o=x(),s=u({initialValues:{name:"",email:"",mobile:"",password:"",gender:"",address:""},validationSchema:g({name:a().required("Enter  name"),email:a().required("Enter  email"),mobile:a().required("Enter  mobile"),password:a().required("Enter  password"),gender:a().required("Enter  gender"),address:a().required("Enter  address")}),onSubmit:(m,{resetForm:p})=>{c(m),p()}});return n.useEffect(()=>{d&&(t.success("regisster success"),o("/login-customer"))},[d]),n.useEffect(()=>{i&&t.error(l.data?l.data.message:"something went wrong")},[i]),e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsx("div",{className:"constiner",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-sm-3",children:e.jsxs("div",{class:"card",children:[e.jsx("div",{class:"card-header",children:"Register Customer"}),e.jsxs("div",{class:"card-body",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Enter Name",...s.getFieldProps("name"),className:r(s,"name")}),e.jsx("span",{className:"valid-feedback",children:"all good"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.name})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Enter  email",...s.getFieldProps("email"),className:r(s,"email")}),e.jsx("span",{className:"valid-feedback",children:"all good"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.email})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Enter  mobile",...s.getFieldProps("mobile"),className:r(s,"mobile")}),e.jsx("span",{className:"valid-feedback",children:"all good"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.mobile})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Enter  password",...s.getFieldProps("password"),className:r(s,"password")}),e.jsx("span",{className:"valid-feedback",children:"all good"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.password})]}),e.jsxs("div",{children:[e.jsx("input",{...s.getFieldProps("gender"),value:"male",id:"male",type:"radio",className:` ms-2 form-check-input ${s.touched.gender&&s.errors.gender&&"is-invalid"}`,name:"gender"}),e.jsx("label",{htmlFor:"male",children:"male"}),e.jsx("input",{...s.getFieldProps("gender"),value:"female",id:"female",type:"radio",className:` ms-2 form-check-input ${s.touched.gender&&s.errors.gender&&"is-invalid"}`,name:"gender"}),e.jsx("label",{htmlFor:"female",children:"female"}),e.jsx("span",{className:"valid-feedback",children:"all good"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.gender})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Enter  address",...s.getFieldProps("address"),className:r(s,"address")}),e.jsx("span",{className:"valid-feedback",children:"all good"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.address})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Register Customer"})]})]})})})})})})};export{k as default};
