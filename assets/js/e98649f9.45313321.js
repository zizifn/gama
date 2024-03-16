"use strict";(self.webpackChunkgama=self.webpackChunkgama||[]).push([[3681],{4331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>u,toc:()=>h});var s=t(4848),i=t(8453),o=t(6540);const l=o.forwardRef((function({title:e,titleId:n,...t},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":n},t),e?o.createElement("title",{id:n},e):null,o.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",clipRule:"evenodd"}))}));function d(e){let{endpoint:n}=e;const[t,i]=(0,o.useState)("Check");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{onClick:()=>async function(){const e=window.localStorage.getItem("apiKey");if(e){console.log("checkAPIAvailability"),i("Checking...");try{const t=await fetch(`${n}/v1/chat/completions`,{method:"Post",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:"Hello!"}]})});if(t.ok){i("Checked");const e=await t.json();alert(JSON.stringify(e))}else i("Check"),alert(`${n} return ${t.status} ${t.statusText}))`)}catch(t){i("Check failed"),console.error(t),alert(JSON.stringify(t.message))}}else alert("Please save your API Key first")}(),type:"button",className:"inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Checked"===t?(0,s.jsxs)(s.Fragment,{children:["Checked",(0,s.jsx)(l,{className:"-mr-0.5 h-5 w-5 text-green-400","aria-hidden":"true"})]}):t})})}function r(){const[e,n]=(0,o.useState)(!1),[t,i]=(0,o.useState)("");return(0,o.useEffect)((()=>{const e=window.localStorage.getItem("apiKey");console.log("useEffect running",e),e&&i(e)}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative flex",children:[(0,s.jsx)("label",{htmlFor:"name",className:" absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900",children:"API Key"}),(0,s.jsx)("input",{onChange:e=>{i(e.target.value),n(!1)},value:t,type:"text",name:"name",id:"name",className:"basis-1/2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"SK-...."}),(0,s.jsxs)("button",{onClick:()=>{return e=t,console.log(t),window.localStorage.setItem("apiKey",e),void n(!0);var e},type:"button",className:"inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:["Save",e?(0,s.jsx)(l,{className:"-mr-0.5 h-5 w-5 text-green-400","aria-hidden":"true"}):null]})]})})}const a={},c="\u73af\u5883\u4fe1\u606f\u548c\u68c0\u67e5",u={id:"setup/setup",title:"\u73af\u5883\u4fe1\u606f\u548c\u68c0\u67e5",description:"OpenAI Models",source:"@site/docs/setup/setup.mdx",sourceDirName:"setup",slug:"/setup/",permalink:"/docs/setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/setup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"setupSidebar"},p={},h=[{value:"OpenAI Models",id:"openai-models",level:2},{value:"Chat.Completions Models:",id:"chatcompletions-models",level:3},{value:"Embeddings Models:",id:"embeddings-models",level:3},{value:"Image Models:",id:"image-models",level:3},{value:"Audio Models:",id:"audio-models",level:3},{value:"API endpoints",id:"api-endpoints",level:2},{value:"API Key",id:"api-key",level:3},{value:"Endpoints",id:"endpoints",level:3},{value:"\u4f18\u8d28\u7ebf\u8def1 (\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1)",id:"\u4f18\u8d28\u7ebf\u8def1-\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1",level:4},{value:"\u4f18\u8d28\u7ebf\u8def2 (\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1)",id:"\u4f18\u8d28\u7ebf\u8def2-\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1",level:4},{value:"CloudFlare Worker",id:"cloudflare-worker",level:4},{value:"CloudFlare CDN",id:"cloudflare-cdn",level:4}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u73af\u5883\u4fe1\u606f\u548c\u68c0\u67e5",children:"\u73af\u5883\u4fe1\u606f\u548c\u68c0\u67e5"}),"\n","\n","\n",(0,s.jsx)(n.h2,{id:"openai-models",children:"OpenAI Models"}),"\n",(0,s.jsx)(n.h3,{id:"chatcompletions-models",children:"Chat.Completions Models:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpt-3.5-turbo\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpt-4-turbo-preview\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpt-4-vision-preview\n"})}),"\n",(0,s.jsx)(n.h3,{id:"embeddings-models",children:"Embeddings Models:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"text-embedding-ada-002\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"text-embedding-3-small\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"text-embedding-3-large\n"})}),"\n",(0,s.jsx)(n.h3,{id:"image-models",children:"Image Models:"}),"\n",(0,s.jsx)(n.h3,{id:"audio-models",children:"Audio Models:"}),"\n",(0,s.jsx)(n.h2,{id:"api-endpoints",children:"API endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["OpenAI \u7684\u670d\u52a1\u662f\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"https://www.ohmygpt.com/",children:"https://www.ohmygpt.com/"})," \u63d0\u4f9b."]}),"\n",(0,s.jsx)(n.h3,{id:"api-key",children:"API Key"}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h3,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsx)(n.h4,{id:"\u4f18\u8d28\u7ebf\u8def1-\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1",children:"\u4f18\u8d28\u7ebf\u8def1 (\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1)"}),"\n",(0,s.jsx)(d,{endpoint:"https://aigptx.top/"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://aigptx.top/\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4f18\u8d28\u7ebf\u8def2-\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1",children:"\u4f18\u8d28\u7ebf\u8def2 (\u65e0\u53ef\u7528\u6027\u4fdd\u8bc1)"}),"\n",(0,s.jsx)(d,{endpoint:"https://cn2us02.opapi.win/"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://cn2us02.opapi.win/\n"})}),"\n",(0,s.jsx)(n.h4,{id:"cloudflare-worker",children:"CloudFlare Worker"}),"\n",(0,s.jsx)(d,{endpoint:"https://cfwus02.opapi.win/"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://cfwus02.opapi.win/\n"})}),"\n",(0,s.jsx)(n.h4,{id:"cloudflare-cdn",children:"CloudFlare CDN"}),"\n",(0,s.jsx)(d,{endpoint:"https://apic.ohmygpt.com/"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://apic.ohmygpt.com/\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(6540);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);