(this.webpackJsonpd2d=this.webpackJsonpd2d||[]).push([[0],{187:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return doTransform}));var _converters__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(195),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),ramda__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(212);function doTransform(sourceType,source,transform,destType){var input;try{input=_converters__WEBPACK_IMPORTED_MODULE_0__.d[sourceType](source)}catch(error){return{error:error,type:"error",phase:"input"}}var data=input;if(transform.trim().length)try{var _=lodash__WEBPACK_IMPORTED_MODULE_1___default.a,R=ramda__WEBPACK_IMPORTED_MODULE_2__;eval(transform)}catch(error){return{error:error,type:"error",phase:"transform"}}try{return _converters__WEBPACK_IMPORTED_MODULE_0__.a[destType](data)}catch(error){return{error:error,type:"error",phase:"output"}}}},20:function(e,t,r){"use strict";var a=r(426),n=r(188),o=r.n(n),c=r(128),l=r.n(c),s=r(52),u=r(53),i=r(54),m=r(57),d=r(59),p=r(0),_=r.n(p),f=function(e,t,r){return _.a.createElement("div",null,"Oops! An error occurred: $",e.toString(),_.a.createElement("br",null),_.a.createElement("a",{href:"#",onClick:r},"Try again"))},h=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={},r.resetError=function(){r.setState({error:void 0,errorInfo:void 0})},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?(this.props.renderError||f)(this.state.error,this.state.errorInfo,this.resetError):this.props.render()}}]),t}(_.a.Component),v=r(72);var E=r(189),b=r.n(E)()({loader:function(){return r.e(5).then(r.bind(null,440))},loading:function(){return _.a.createElement("div",null,"Loading table")}}),y=function(e){var t=e.value;if("object"===typeof t)try{t=JSON.stringify(t)}catch(r){t="<unrenderable>"}return _.a.createElement(_.a.Fragment,null,t)},T=_.a.memo((function(e){var t=e.data;try{var r=Array.from(t),a=function(e){var t=[],r=new Set;return e.forEach((function(e){return e&&Object.keys(e).forEach((function(e){r.has(e)||(t.push(e),r.add(e))}))})),t}(r);return a.length?_.a.createElement(b,{data:r,columns:a.map((function(e){return{accessor:e,Header:e,Cell:y}}))}):_.a.createElement(v.a,{result:{phase:"output",error:new Error("Unable to figure out columns"),type:"error"}})}catch(n){return _.a.createElement(v.a,{result:{phase:"output",error:n,type:"error"}})}})),O=r(129),C=r.n(O),S=r(190),g=r(430);function j(){return(j=Object(S.a)(C.a.mark((function e(t,a){var n,o,c,l,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Promise.all([r.e(3),r.e(4)]).then(r.t.bind(null,439,7)),o=Array.from(t),e.next=4,n;case 4:c=e.sent,l=c.utils.json_to_sheet(o),s=c.utils.book_new(),c.utils.book_append_sheet(s,l,"d2d"),c.writeFile(s,"d2d-".concat((new Date).toISOString(),".").concat(a));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){var t=e.label,r=e.format,a=e.data;return _.a.createElement(g.a,{onClick:function(e){try{!function(e,t){j.apply(this,arguments)}(a,r)}catch(t){alert(t)}}},t)},k=function(e){var t=e.data;return _.a.createElement("div",{style:{textAlign:"center"}},_.a.createElement(w,{label:"Download XLSX",format:"xlsx",data:t}),_.a.createElement(w,{label:"Download XLS",format:"xls",data:t}),_.a.createElement(w,{label:"Download ODS",format:"ods",data:t}))};r.d(t,"d",(function(){return L})),r.d(t,"a",(function(){return B})),r.d(t,"c",(function(){return P})),r.d(t,"b",(function(){return F}));var x=Object(a.a)(","),D=Object(a.a)(";"),M=Object(a.a)("\t"),L={csv:x.parse,json:JSON.parse,scsv:D.parse,text:function(e){return e},toml:o.a.parse,tsv:M.parse,yaml:l.a.safeLoad},A=function(e){return function(t){return{value:e(t),type:"string"}}},B={"json-compact":A(JSON.stringify),csv:A(x.format),scsv:A(D.format),json:A((function(e){return JSON.stringify(e,null,2)})),text:A((function(e){return""+e})),tsv:A(M.format),yaml:A(l.a.safeDump),table:function(e){return{error:null,type:"element",element:_.a.createElement(h,{render:function(){return _.a.createElement(T,{data:e})}})}},xlsx:function(e){return{error:null,type:"element",element:_.a.createElement(k,{data:e})}}},P={"json-compact":"JSON (compact)",csv:"CSV",json:"JSON",scsv:"SCSV",table:"Table",text:"Text",toml:"TOML",tsv:"TSV",xlsx:"XLS/XLSX",yaml:"YAML"},F={csv:"Comma-separated values",scsv:"Semicolon-separated values",tsv:"Tab-separated values"}},225:function(e,t,r){e.exports=r(419)},230:function(e,t,r){},419:function(e,t,r){"use strict";r.r(t);var a,n,o=r(0),c=r.n(o),l=r(42),s=r.n(l),u=(r(230),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(23)),i="\n- A: One\n  B: Two\n  C: Three\n- A: Two\n  B: Four\n  C: Five\n- A: Three\n  B: Six\n  C: Seven\n".trim(),m={"json-compact":"json-compact",csv:"A,B,C\nOne,Two,Three\nTwo,Four,Five\nThree,Six,Seven",scsv:'"A","B","C"\n"One","Two","Three"\n"Two","Four","Five"\n"Three","Six","Seven"',json:JSON.stringify([{A:"One",B:"Two",C:"Three"},{A:"Two",B:"Four",C:"Five"},{A:"Three",B:"Six",C:"Seven"}],null,2),text:"Some arbitrary text",tsv:"A\tB\tC\nOne\tTwo\tThree\nTwo\tFour\tFive\nThree\tSix\tSeven",yaml:i,toml:'# This is a TOML document.\ntitle = "TOML Example"\n[owner]\nname = "Tom Preston-Werner"\ndob = 1979-05-27T07:32:00-08:00 # First class dates'},d=r(187),p=r(21);!function(e){e.ThreeColumns="threeColumns",e.BottomCode="bottomCode"}(n||(n={}));var _=(a={},Object(p.a)(a,n.ThreeColumns,"Three Columns"),Object(p.a)(a,n.BottomCode,"Code on Bottom"),a),f=r(73),h=r(196),v=r(197),E=r(428),b=r(62),y=r(427),T=function(e){var t=e.value,r=e.options,a=e.onChange,n=c.a.useState(!1),o=Object(u.a)(n,2),l=o[0],s=o[1],i=c.a.useState(!1),m=Object(u.a)(i,2),d=m[0],p=m[1];return c.a.createElement(c.a.Fragment,null,d?c.a.createElement("textarea",{value:t,onChange:function(e){return a(e.target.value)},placeholder:r.placeholder}):c.a.createElement(v.Controlled,{className:"code-editor",value:t,options:Object(h.a)({},r,{lineWrapping:l}),onBeforeChange:function(e,t,r){return a(r)}}),c.a.createElement(E.a,{trigger:c.a.createElement(b.a,{circular:!0,name:"setting",style:{position:"absolute",right:"5px",bottom:"5px"}}),hoverable:!0,plain:!0},c.a.createElement(y.a,{label:"Wrap Lines",checked:l,onChange:function(e,t){return s(!!t.checked)}}),c.a.createElement("br",null),c.a.createElement(y.a,{label:"Plain Editor",checked:d,onChange:function(e,t){return p(!!t.checked)}})))},O=r(20),C=function(e){var t=e.sourceType,r=e.source,a=e.onChangeSource,n=e.style;return c.a.createElement("div",{className:"codebox-wrapper",style:n},c.a.createElement(T,{value:r,options:{mode:t,theme:"solarized light",lineNumbers:!0,placeholder:"Paste or type in ".concat(O.c[t]||t," data here.")},onChange:a}))},S="\n// Feel free to modify `data` using JavaScript here.\n// * Lodash is available as `_`\n// ** e.g. `_.reverse(data)`\n// * Ramda is available as `R`\n// ** e.g. `data = R.reverse(data)`\n".trim(),g=function(e){var t=e.transform,r=e.onChangeTransform,a=e.style;return c.a.createElement("div",{className:"codebox-wrapper",style:a},c.a.createElement(T,{value:t,options:{mode:"javascript",theme:"solarized dark",lineNumbers:!0,placeholder:S},onChange:r}))},j=r(72),w=function(e){var t=e.destType,r=e.result,a=e.style,n=null;switch(r.type){case"element":n=r.element;break;case"string":n=c.a.createElement(T,{value:r.value,options:{mode:t,theme:"solarized light",lineNumbers:!0,readOnly:!0,placeholder:"Output will appear here in ".concat(O.c[t]||t,".")},onChange:function(){}});break;case"error":n=c.a.createElement(j.a,{result:r})}return c.a.createElement("div",{className:"codebox-wrapper",style:a},n)},k=r(429),x=r(431),D=function(e){var t=e.label,r=e.value,a=e.options,n=e.onChange,o=(e.style,function(e,t){n(t.name),e.preventDefault()});return c.a.createElement(k.a,{item:!0,text:"".concat(t,": ").concat(O.c[r]||r),closeOnChange:!1},c.a.createElement(k.a.Menu,{style:{minWidth:"25em"}},a.map((function(e){return c.a.createElement(k.a.Item,{key:e,name:e,active:r===e,onClick:o,text:O.c[e]||e,description:O.b[e]})}))))},M=function(e){var t=e.sourceType,r=e.setSourceType,a=e.loadSample,n=e.destType,o=e.setDestType,l=e.layout,s=e.setLayout;return c.a.createElement(x.a,{fluid:!0,secondary:!0,size:"small"},c.a.createElement(D,{label:"Source Format",value:t,options:Object.keys(O.d),onChange:r}),c.a.createElement(D,{label:"Output Format",value:n,options:Object.keys(O.a),onChange:o}),c.a.createElement(x.a.Menu,{position:"right"},c.a.createElement(x.a.Item,{name:"loadSample",onClick:a},"Load ",O.c[t]||t," Sample"),c.a.createElement(k.a,{item:!0,text:"Layout..."},c.a.createElement(k.a.Menu,null,Object.entries(_).map((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];return c.a.createElement(k.a.Item,{key:r,name:r,active:l===r,text:a,onClick:function(e,t){var r=t.name;return s(r)}})}))))))},L=r(135),A=Object(L.a)("d2d-layout"),B=Object(L.a)("d2d-transform"),P=function(){var e,t=c.a.useState("yaml"),r=Object(u.a)(t,2),a=r[0],o=r[1],l=c.a.useState(""),s=Object(u.a)(l,2),i=s[0],p=s[1],_=c.a.useState("json"),h=Object(u.a)(_,2),v=h[0],E=h[1],b=B(""),y=Object(u.a)(b,2),T=y[0],O=y[1],S=A(n.ThreeColumns),j=Object(u.a)(S,2),k=j[0],x=j[1],D=c.a.useMemo((function(){return Object(d.a)(a,i,T,v)}),[a,i,T,v]);switch(k){case n.ThreeColumns:default:e=c.a.createElement(f.a,{split:"vertical",defaultSize:"35%"},c.a.createElement(C,{source:i,sourceType:a,onChangeSource:p}),c.a.createElement(f.a,{split:"vertical",defaultSize:"40%"},c.a.createElement(g,{transform:T,onChangeTransform:O}),c.a.createElement(w,{destType:v,result:D})));break;case n.BottomCode:e=c.a.createElement(f.a,{split:"horizontal",defaultSize:"80%"},c.a.createElement(f.a,{split:"vertical",defaultSize:"50%"},c.a.createElement(C,{source:i,sourceType:a,onChangeSource:p}),c.a.createElement(w,{destType:v,result:D})),c.a.createElement(g,{transform:T,onChangeTransform:O}))}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"settings"},c.a.createElement(M,{sourceType:a,setSourceType:o,loadSample:function(){p(m[a])},destType:v,setDestType:E,layout:k,setLayout:x})),c.a.createElement("div",{id:"main-panes"},e))};s.a.render(c.a.createElement(P,null),document.getElementById("root"))},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(0),n=r.n(a),o=function(e){var t=e.result,r=t.error,a=t.phase;return n.a.createElement("div",{className:"error-result"},n.a.createElement("h2",null,r.name||"Error"," in ",a),r.stack?n.a.createElement("div",{className:"error-stack"},r.stack):n.a.createElement("b",null,r.toString()))}}},[[225,1,2]]]);
//# sourceMappingURL=main.4eb51516.chunk.js.map