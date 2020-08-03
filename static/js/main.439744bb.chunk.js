(this.webpackJsonpd2d=this.webpackJsonpd2d||[]).push([[0],{340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return javascriptTransform}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(341),lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(344),javascriptTransform={transform:function transform(inputs,_transform){var data=inputs[0],data1=inputs[0],data2=inputs[1];if(_transform.trim().length){var _=lodash__WEBPACK_IMPORTED_MODULE_0___default.a,R=ramda__WEBPACK_IMPORTED_MODULE_1__;eval(_transform)}return data}}},359:function(e,t,a){e.exports=a(627)},364:function(e,t,a){},627:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),l=a.n(o),c=a(79),s=a.n(c),u=(a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(34)),i=a(96);!function(e){e.ThreeColumns="threeColumns",e.BottomCode="bottomCode",e.NoCode="noCode"}(r||(r={}));var m=(n={},Object(i.a)(n,r.ThreeColumns,"Three Columns"),Object(i.a)(n,r.BottomCode,"Code on Bottom"),Object(i.a)(n,r.NoCode,"No Code"),n),p=a(318),d=a(676),f=a(668),h=a(309),E=a.n(h),v=a(215),y=a.n(v),b=a(310),g=a(311),_=a(346),C=a(345),T=function(e,t,a){return l.a.createElement("div",null,"Oops! An error occurred: $",e.toString(),l.a.createElement("br",null),l.a.createElement("a",{href:"#",onClick:a},"Try again"))},S=function(e){Object(_.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.resetError=function(){e.setState({error:void 0,errorInfo:void 0})},e}return Object(g.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?(this.props.renderError||T)(this.state.error,this.state.errorInfo,this.resetError):this.props.render()}}]),a}(l.a.Component),O=function(e){var t=e.result,a=t.error,n=t.phase;return l.a.createElement("div",{className:"error-result"},l.a.createElement("h2",null,a.name||"Error"," in ",n),a.stack?l.a.createElement("div",{className:"error-stack"},a.stack):l.a.createElement("b",null,a.toString()))},k=a(312),j=a.n(k)()({loader:function(){return a.e(5).then(a.bind(null,684))},loading:function(){return l.a.createElement("div",null,"Loading table")}}),w=function(e){var t=e.value;if("object"===typeof t)try{t=JSON.stringify(t)}catch(a){t="<unrenderable>"}return l.a.createElement(l.a.Fragment,null,t)};var x=l.a.memo((function(e){var t=e.data;try{var a=Array.from(t),n=function(e){var t=[],a=new Set;return e.forEach((function(e){return e&&Object.keys(e).forEach((function(e){a.has(e)||(t.push(e),a.add(e))}))})),t}(a);return n.length?l.a.createElement(j,{data:a,columns:n.map((function(e){return{accessor:e,Header:e,Cell:w}}))}):l.a.createElement(O,{result:{phase:"output",error:new Error("Unable to figure out columns"),type:"error"}})}catch(r){return l.a.createElement(O,{result:{phase:"output",error:r,type:"error"}})}})),N=a(216),M=a.n(N),L=a(313),A=a(115);function B(){return(B=Object(L.a)(M.a.mark((function e(t,n){var r,o,l,c,s;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Promise.all([a.e(3),a.e(4)]).then(a.t.bind(null,683,7)),o=Array.from(t),e.next=4,r;case 4:l=e.sent,c=l.utils.json_to_sheet(o),s=l.utils.book_new(),l.utils.book_append_sheet(s,c,"d2d"),l.writeFile(s,"d2d-".concat((new Date).toISOString(),".").concat(n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){var t=e.label,a=e.format,n=e.data;return l.a.createElement(A.a,{onClick:function(e){try{!function(e,t){B.apply(this,arguments)}(n,a)}catch(t){alert(t)}}},t)},F=function(e){var t=e.data;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(D,{label:"Download XLSX",format:"xlsx",data:t}),l.a.createElement(D,{label:"Download XLS",format:"xls",data:t}),l.a.createElement(D,{label:"Download ODS",format:"ods",data:t}))},I=Object(f.a)(","),P=Object(f.a)(";"),R=Object(f.a)("\t");var J={csv:I.parse,json:JSON.parse,scsv:P.parse,text:function(e){return e},lines:function(e){return e.split("\n").filter((function(e){return(e=e.trimStart())&&!e.startsWith("#")}))},toml:E.a.parse,tsv:R.parse,yaml:y.a.safeLoad},W=function(e){return function(t){return{value:e(t),type:"string"}}},z={"json-compact":W(JSON.stringify),csv:W(I.format),scsv:W(P.format),json:W((function(e){return JSON.stringify(e,null,2)})),text:W((function(e){return""+e})),tsv:W(R.format),yaml:W(y.a.safeDump),table:function(e){return{error:null,type:"element",element:l.a.createElement(S,{render:function(){return l.a.createElement(x,{data:e})}})}},xlsx:function(e){return{error:null,type:"element",element:l.a.createElement(F,{data:e})}}},U={"json-compact":"JSON (compact)",csv:"CSV",json:"JSON",scsv:"SCSV",table:"Table",text:"Text",lines:"Text lines",toml:"TOML",tsv:"TSV",xlsx:"XLS/XLSX",yaml:"YAML"},K={csv:"Comma-separated values",scsv:"Semicolon-separated values",tsv:"Tab-separated values",lines:"Sans #comments and blanks"},X=function(e){var t=e.label,a=e.value,n=e.options,r=e.onChange,o=(e.style,e.nameMap),c=e.descriptionMap,s=function(e,t){r(t.name),e.preventDefault()};return l.a.createElement(d.a,{item:!0,text:"".concat(t,": ").concat(o[a]||a),closeOnChange:!1},l.a.createElement(d.a.Menu,{style:{minWidth:"25em"}},n.map((function(e){return l.a.createElement(d.a.Item,{key:e,name:e,active:a===e,onClick:s,text:o[e]||e,description:c?c[e]:void 0})}))))},q=[1,2,3],H=function(e){var t=e.destType,a=e.layout,n=e.setDestType,r=e.setLayout,o=e.nSources,c=e.setNSources;return l.a.createElement(p.a,{fluid:!0},l.a.createElement(d.a,{item:!0,text:"Layout: ".concat(m[a])||!1},l.a.createElement(d.a.Menu,null,Object.entries(m).map((function(e){var t=Object(u.a)(e,2),n=t[0],o=t[1];return l.a.createElement(d.a.Item,{key:n,name:n,active:a===n,text:o,onClick:function(e,t){var a=t.name;return r(a)}})})))),l.a.createElement(d.a,{item:!0,text:"Sources: ".concat(o)},l.a.createElement(d.a.Menu,null,q.map((function(e){return l.a.createElement(d.a.Item,{key:e,name:e,active:o===e,text:e,onClick:function(){return c(e)}})})))),l.a.createElement(X,{label:"Output Format",value:t,options:Object.keys(z),onChange:n,descriptionMap:K,nameMap:U}))},V=a(181),Y=a(131),$=(a(566),"\n- A: One\n  B: Two\n  C: Three\n- A: Two\n  B: Four\n  C: Five\n- A: Three\n  B: Six\n  C: Seven\n".trim()),G={"json-compact":"json-compact",csv:"A,B,C\nOne,Two,Three\nTwo,Four,Five\nThree,Six,Seven",scsv:'"A","B","C"\n"One","Two","Three"\n"Two","Four","Five"\n"Three","Six","Seven"',json:JSON.stringify([{A:"One",B:"Two",C:"Three"},{A:"Two",B:"Four",C:"Five"},{A:"Three",B:"Six",C:"Seven"}],null,2),text:"Some arbitrary text",lines:"Hello\nWorld\n# Octothorpe comments are ignored, as are blank lines:\n\n\n\nHernekeitto",tsv:"A\tB\tC\nOne\tTwo\tThree\nTwo\tFour\tFive\nThree\tSix\tSeven",yaml:$,toml:'# This is a TOML document.\ntitle = "TOML Example"\n[owner]\nname = "Tom Preston-Werner"\ndob = 1979-05-27T07:32:00-08:00 # First class dates'},Q=a(221),Z=a(339),ee=a(44),te=a(674),ae=a(671),ne=function(e){var t=e.value,a=e.options,n=e.onChange,r=l.a.useState(!1),o=Object(u.a)(r,2),c=o[0],s=o[1],i=l.a.useState(!!(t&&t.length>5e5)),m=Object(u.a)(i,2),p=m[0],d=m[1];return l.a.createElement(l.a.Fragment,null,p?l.a.createElement("textarea",{value:t,onChange:function(e){return n(e.target.value)},placeholder:a.placeholder}):l.a.createElement(Z.Controlled,{className:"code-editor",value:t,options:Object(Q.a)(Object(Q.a)({},a),{},{lineWrapping:c}),onBeforeChange:function(e,t,a){return n(a)}}),l.a.createElement(ee.a,{circular:!0,name:"copy",style:{position:"absolute",right:"35px",bottom:"5px"},link:!0,title:"Copy content",onClick:function(){return navigator.clipboard.writeText(t).then((function(){return Object(Y.toast)({type:"success",title:"Copied ".concat(t.length," characters.")})}),(function(){return Object(Y.toast)({type:"warning",title:"Copy failed."})}))}}),l.a.createElement(te.a,{trigger:l.a.createElement(ee.a,{circular:!0,name:"setting",style:{position:"absolute",right:"5px",bottom:"5px"}}),hoverable:!0,plain:!0,basic:!0},l.a.createElement(ae.a,{label:"Wrap Lines",checked:c,onChange:function(e,t){return s(!!t.checked)}}),l.a.createElement("br",null),l.a.createElement(ae.a,{label:"Plain Editor",checked:p,onChange:function(e,t){return d(!!t.checked)}})))},re=a(673),oe=function(e){var t=e.sourceType,a=e.source,n=e.onChangeSource,r=e.onChangeSourceType,o=e.onLoadSample,c=e.style,s=e.label,i=l.a.useState(!1),m=Object(u.a)(i,2),d=m[0],f=m[1],h=l.a.useCallback((function(){f(!1),n("")}),[f,n]),E=a.length>5e5&&!d?l.a.createElement("div",null,l.a.createElement(re.a,null,l.a.createElement(re.a.Header,null,"Large Content"),l.a.createElement("p",null,"The length of this data is ",a.length.toLocaleString()," characters.",l.a.createElement("br",null),"Showing it may cause performance problems.",l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement(A.a,{primary:!0,onClick:function(){return f(!0)}},"Show it anyway"),l.a.createElement(A.a,{negative:!0,basic:!0,onClick:h},"Clear the data")))):l.a.createElement(ne,{value:a,options:{mode:t,theme:"solarized light",lineNumbers:!0,placeholder:"Paste, drop or type in ".concat(U[t]||t," data here.")},onChange:n});return l.a.createElement("div",{className:"codebox-wrapper",style:c},l.a.createElement(p.a,{secondary:!0,size:"small",style:{margin:0}},s?l.a.createElement(p.a.Item,{style:{fontWeight:"bold"}},s):null,l.a.createElement(X,{label:"Source Format",value:t,options:Object.keys(J),onChange:r,nameMap:U,descriptionMap:K}),l.a.createElement(p.a.Item,{name:"loadSample",onClick:o},"Load ",U[t]||t," Sample")),E)},le=a(340),ce=a(672),se=a(342),ue=a.n(se),ie=function(e){var t=e.transform,a=e.onChangeTransform,n={rules:[]};if(t.trim())try{n=JSON.parse(t)}catch(c){throw new Error("Invalid Tem state: ".concat(c))}var r=function(){return a(JSON.stringify(n))},o=function(e){var t=e.target.name.split("_"),a=Object(u.a)(t,2),o=a[0],l=a[1],c=parseInt(l,10);if(!Number.isNaN(c))switch(o){case"match":case"replace":!function(e,t,a){var o=n.rules[e];o&&(o[t]=a),r()}(c,o,e.target.value)}};return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Match"),l.a.createElement("th",null,"Replacement"),l.a.createElement("th",{style:{width:"1px"}}))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:3},l.a.createElement(A.a,{onClick:function(){n.rules.push({match:"",replace:""}),r()}},"Add Rule")))),l.a.createElement("tbody",null,n.rules.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement(ce.a,{fluid:!0,placeholder:"Match regexp",name:"match_".concat(t),value:e.match,onChange:o})),l.a.createElement("td",null,l.a.createElement(ce.a,{fluid:!0,placeholder:"Replacement",name:"replace_".concat(t),value:e.replace,onChange:o})),l.a.createElement("td",null,l.a.createElement(A.a,{icon:!0,negative:!0,onClick:function(){return e=t,void(Number.isNaN(e)||(n.rules.splice(e,1),r()));var e}},l.a.createElement(ue.a,{name:"trash"}))))}))))},me={transform:function(e,t){var a=JSON.parse(t).rules,n=Array.isArray(e[0])?e.map((function(e){return"".concat(e)})).join("\n"):"".concat(e[0]);return a.forEach((function(e){if(e.match){var t=new RegExp(e.match,"gm");n=n.replace(t,e.replace)}})),n},getEditor:function(e,t){return l.a.createElement(ie,{transform:e,onChangeTransform:t})}},pe={javascript:le.a,tem:me},de={javascript:"JavaScript",tem:"Tem String Replace"};function fe(){var e=l.a.useState("yaml"),t=Object(u.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),o=Object(u.a)(r,2),c=o[0],s=o[1],i=l.a.useCallback((function(){s(G[a])}),[a,s]);return{type:a,setType:n,source:c,setSource:s,loadSample:i}}function he(e,t,a,n){for(var r=e.length,o=[r,t,a,n],c=[],s=0;s<r;s++){var u=e[s],i=u.source,m=u.type;o.push(i),o.push(m),c.push({source:i,type:m})}return l.a.useMemo((function(){return function(e,t,a,n){for(var r,o=[],l=0;l<e.length;l++){var c=e[l];try{o.push(J[c.type](c.source))}catch(s){return{error:s,type:"error",phase:"input",index:l}}}try{r=pe[a].transform(o,t)}catch(s){return{error:s,type:"error",phase:"transform"}}try{return z[n](r)}catch(s){return{error:s,type:"error",phase:"output"}}}(c,t,a,n)}),o)}var Ee=a(343),ve="\n// * Lodash is available as `_`\n// ** e.g. `_.reverse(data)`\n// * Ramda is available as `R`\n// ** e.g. `data = R.reverse(data)`\n".trim(),ye="\n// Feel free to modify `data` using JavaScript here.\n".concat(ve,"\n").trim(),be="\n// Feel free to modify `data` using JavaScript here.\n// Multiple sources are available:\n// * as the `inputs` array\n// * as `data1`, `data2`, ...\n//\n".concat(ve,"\n").trim(),ge=function(e){var t=e.transform,a=e.transformType,n=e.onChangeTransform,r=e.onChangeTransformType,o=e.nSources,c=e.style,s=pe[a],u=s.getEditor?s.getEditor(t,n,o):l.a.createElement(ne,{value:t,options:{mode:"javascript",theme:"solarized dark",lineNumbers:!0,placeholder:o>1?be:ye},onChange:n}),i=l.a.useCallback((function(e){var t=e.error,a=(e.componentStack,e.resetErrorBoundary);return l.a.createElement(re.a,{negative:!0},l.a.createElement("p",null,'The editor failed to render. The error message we got was "',l.a.createElement("b",null,t.message),'".'),l.a.createElement("p",null,"You can either change the transform type to something that's compatible with your data, or click below to reset your transform code."),l.a.createElement(A.a,{onClick:function(){n(""),a()}},"Reset transform"))}),[n]);return l.a.createElement("div",{className:"codebox-wrapper",style:c},l.a.createElement(p.a,{secondary:!0,size:"small",style:{margin:0}},l.a.createElement(X,{label:"Language",value:a,options:Object.keys(pe),onChange:r,nameMap:de})),l.a.createElement(Ee.ErrorBoundary,{FallbackComponent:i},u))},_e=function(e){var t=e.destType,a=e.result,n=e.style,r=null;switch(a.type){case"element":r=a.element;break;case"string":r=l.a.createElement(ne,{value:a.value,options:{mode:t,theme:"solarized light",lineNumbers:!0,readOnly:!0,placeholder:"Output will appear here in ".concat(U[t]||t,".")},onChange:function(){}});break;case"error":r=l.a.createElement(O,{result:a})}return l.a.createElement("div",{className:"codebox-wrapper",style:n},r)},Ce=a(99),Te=function(e){var t=e.sources,a=e.transform,n=e.onChangeTransform,o=e.onChangeTransformType,c=e.transformType,s=e.destType,u=e.result,i=e.layout,m=t.length,p=l.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column"}},t.map((function(e,t){return function(e,t,a){var n={source:e.source,sourceType:e.type,onChangeSource:e.setSource,onChangeSourceType:e.setType,onLoadSample:e.loadSample,label:t};return l.a.createElement(oe,Object.assign({},n,{key:a}))}(e,m>1?"Input ".concat(t+1):void 0,"input-".concat(t))}))),d=l.a.createElement(ge,{transform:a,transformType:c,onChangeTransform:n,onChangeTransformType:o,nSources:m}),f=l.a.createElement(_e,{destType:s,result:u});switch(i){case r.ThreeColumns:default:return l.a.createElement(Ce.a,{split:"vertical",defaultSize:"35%"},p,l.a.createElement(Ce.a,{split:"vertical",defaultSize:"40%"},d,f));case r.BottomCode:return l.a.createElement(Ce.a,{split:"horizontal",defaultSize:"80%"},l.a.createElement(Ce.a,{split:"vertical",defaultSize:"50%"},p,f),d);case r.NoCode:return l.a.createElement(Ce.a,{split:"vertical",defaultSize:"50%"},p,f)}},Se=Object(V.a)("d2d-layout"),Oe=Object(V.a)("d2d-transform"),ke=Object(V.a)("d2d-transform-type"),je=function(){var e=l.a.useState(1),t=Object(u.a)(e,2),a=t[0],n=t[1],o=l.a.useState("json"),c=Object(u.a)(o,2),s=c[0],i=c[1],m=Oe(""),p=Object(u.a)(m,2),d=p[0],f=p[1],h=ke("javascript"),E=Object(u.a)(h,2),v=E[0],y=E[1],b=Se(r.ThreeColumns),g=Object(u.a)(b,2),_=g[0],C=g[1],T=[fe(),fe(),fe()].slice(0,a),S=he(T,d,v,s);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"settings"},l.a.createElement(H,{nSources:a,setNSources:n,destType:s,setDestType:i,layout:_,setLayout:C})),l.a.createElement("div",{id:"main-panes"},l.a.createElement(Te,{sources:T,transform:d,transformType:v,onChangeTransform:f,onChangeTransformType:y,destType:s,result:S,layout:_})),l.a.createElement(Y.SemanticToastContainer,{position:"top-right"}))};s.a.render(l.a.createElement(je,null),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.439744bb.chunk.js.map