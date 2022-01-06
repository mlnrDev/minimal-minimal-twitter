"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{6652:function(e,t,n){function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},2737:function(e,t,n){n.d(t,{z$:function(){return x},fC:function(){return R}});var r=n(192),o=n(7294);const i=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{};var l=n(7255);const a=e=>{const{present:t,children:n}=e,r=function(e){const[t,n]=o.useState(),r=o.useRef({}),l=o.useRef(e),a=o.useRef("none"),c=e?"mounted":"unmounted",[d,u]=function(e,t){return o.useReducer(((e,n)=>{const r=t[e][n];return null!=r?r:e}),e)}(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect((()=>{const e=s(r.current);a.current="mounted"===d?e:"none"}),[d]),i((()=>{const t=r.current,n=l.current;if(n!==e){const r=a.current,o=s(t);if(e)u("MOUNT");else if("none"===o||"none"===(null==t?void 0:t.display))u("UNMOUNT");else{const e=r!==o;u(n&&e?"ANIMATION_OUT":"UNMOUNT")}l.current=e}}),[e,u]),i((()=>{if(t){const e=e=>{const n=s(r.current).includes(e.animationName);e.target===t&&n&&u("ANIMATION_END")},n=e=>{e.target===t&&(a.current=s(r.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}}),[t,u]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:o.useCallback((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),a="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),c=(0,l.e)(r.ref,a.ref);return"function"==typeof n||r.isPresent?o.cloneElement(a,{ref:c}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence";var c=n(2602),d=n(2935),u=n(7571),f=n(6600),p=n(6652),m=n(2707),h=n(7462);const[g,b]=(0,m.b)("Checkbox"),[S,y]=g("Checkbox"),v=o.forwardRef(((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":i,name:a,checked:s,defaultChecked:d,required:u,disabled:m,value:g="on",onCheckedChange:b,...y}=e,[v,R]=o.useState(null),x=(0,l.e)(t,(e=>R(e))),C=(0,c.t0)(v),$=i||C,B=o.useRef(!1),M=!v||Boolean(v.closest("form")),[I=!1,P]=(0,f.T)({prop:s,defaultProp:d,onChange:b});return o.createElement(S,{scope:n,state:I,disabled:m},o.createElement(r.W.button,(0,h.Z)({type:"button",role:"checkbox","aria-checked":E(I)?"mixed":I,"aria-labelledby":$,"aria-required":u,"data-state":w(I),"data-disabled":m?"":void 0,disabled:m,value:g},y,{ref:x,onClick:(0,p.M)(e.onClick,(e=>{P((e=>!!E(e)||!e)),M&&(B.current=e.isPropagationStopped(),B.current||e.stopPropagation())}))})),M&&o.createElement(k,{control:v,bubbles:!B.current,name:a,value:g,checked:I,required:u,disabled:m,style:{transform:"translateX(-100%)"}}))})),k=e=>{const{control:t,checked:n,bubbles:r=!0,...i}=e,l=o.useRef(null),a=(0,u.D)(n),s=(0,d.t)(t);return o.useEffect((()=>{const e=l.current,t=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(t,"checked").set;if(a!==n&&o){const t=new Event("click",{bubbles:r});e.indeterminate=E(n),o.call(e,!E(n)&&n),e.dispatchEvent(t)}}),[a,n,r]),o.createElement("input",(0,h.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!E(n)&&n},i,{tabIndex:-1,ref:l,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E(e){return"indeterminate"===e}function w(e){return E(e)?"indeterminate":e?"checked":"unchecked"}const R=v,x=o.forwardRef(((e,t)=>{const{__scopeCheckbox:n,forceMount:i,...l}=e,s=y("CheckboxIndicator",n);return o.createElement(a,{present:i||E(s.state)||!0===s.state},o.createElement(r.W.span,(0,h.Z)({"data-state":w(s.state),"data-disabled":s.disabled?"":void 0},l,{ref:t,style:{pointerEvents:"none",...e.style}})))}))},7255:function(e,t,n){n.d(t,{F:function(){return o},e:function(){return i}});var r=n(7294);function o(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function i(...e){return r.useCallback(o(...e),e)}},2707:function(e,t,n){n.d(t,{k:function(){return o},b:function(){return i}});var r=n(7294);function o(e,t){const n=r.createContext(t);function o(e){const{children:t,...o}=e,i=r.useMemo((()=>o),Object.values(o));return r.createElement(n.Provider,{value:i},t)}return o.displayName=e+"Provider",[o,function(o){const i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[];const o=()=>{const t=n.map((e=>r.createContext(e)));return function(n){const o=(null==n?void 0:n[e])||t;return r.useMemo((()=>({[`__scope${e}`]:{...n,[e]:o}})),[n,o])}};return o.scopeName=e,[function(t,o){const i=r.createContext(o),l=n.length;function a(t){const{scope:n,children:o,...a}=t,s=(null==n?void 0:n[e][l])||i,c=r.useMemo((()=>a),Object.values(a));return r.createElement(s.Provider,{value:c},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){const s=(null==a?void 0:a[e][l])||i,c=r.useContext(s);if(c)return c;if(void 0!==o)return o;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},l(o,...t)]}function l(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const o=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{});return r.useMemo((()=>({[`__scope${t.scopeName}`]:o})),[o])}};return n.scopeName=t.scopeName,n}},2602:function(e,t,n){n.d(t,{t0:function(){return a}});var r=n(2707),o=n(7294);const[i,l]=(0,r.k)("Label",{id:void 0,controlRef:{current:null}}),a=e=>{const t=l("LabelConsumer"),{controlRef:n}=t;return o.useEffect((()=>{e&&(n.current=e)}),[e,n]),t.id}},192:function(e,t,n){n.d(t,{W:function(){return l}});var r=n(8820),o=n(7294),i=n(7462);const l=["a","button","div","h2","h3","img","li","nav","p","span","svg","ul"].reduce(((e,t)=>({...e,[t]:o.forwardRef(((e,n)=>{const{asChild:l,...s}=e,c=l?r.g7:t;return o.useEffect((()=>{window[Symbol.for("radix-ui")]=!0}),[]),e.as&&console.error(a),o.createElement(c,(0,i.Z)({},s,{ref:n}))}))})),{}),a="Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element"},2090:function(e,t,n){n.d(t,{f:function(){return d}});var r=n(192),o=n(7294),i=n(7462);const l="horizontal",a=["horizontal","vertical"],s=o.forwardRef(((e,t)=>{const{decorative:n,orientation:a=l,...s}=e,d=c(a)?a:l,u=n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"};return o.createElement(r.W.div,(0,i.Z)({"data-orientation":d},u,s,{ref:t}))}));function c(e){return a.includes(e)}s.propTypes={orientation(e,t,n){const r=e[t],o=String(r);return r&&!c(r)?new Error(function(e,t){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to \`${l}\`.`}(o,n)):null}};const d=s},7602:function(e,t,n){n.d(t,{e6:function(){return D},fC:function(){return N},bU:function(){return _},fQ:function(){return O}});var r=n(8820),o=n(7255),i=n(2707),l=n(7294);var a=n(192),s=n(2935),c=n(7571);var d=n(6600),u=n(6652);var f=n(7462);const p=["PageUp","PageDown"],m=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],h={ltr:["ArrowDown","Home","ArrowLeft","PageDown"],rtl:["ArrowDown","Home","ArrowRight","PageDown"]},[g,b,S]=function(e){const t=e+"CollectionProvider",[n,a]=(0,i.b)(t),[s,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",u=e+"CollectionItemSlot",f="data-radix-collection-item";return[{Provider:e=>{const{scope:t,children:n}=e,r=l.useRef(null),o=l.useRef(new Map).current;return l.createElement(s,{scope:t,itemMap:o,collectionRef:r},n)},Slot:l.forwardRef(((e,t)=>{const{scope:n,children:i}=e,a=c(d,n),s=(0,o.e)(t,a.collectionRef);return l.createElement(r.g7,{ref:s},i)})),ItemSlot:l.forwardRef(((e,t)=>{const{scope:n,children:i,...a}=e,s=l.useRef(null),d=(0,o.e)(t,s),p=c(u,n);return l.useEffect((()=>(p.itemMap.set(s,{ref:s,...a}),()=>{p.itemMap.delete(s)}))),l.createElement(r.g7,{[f]:"",ref:d},i)}))},function(t){const n=c(e+"CollectionConsumer",t);return l.useCallback((()=>{const e=n.collectionRef.current;if(!e)return[];const t=Array.from(e.querySelectorAll(`[${f}]`));return Array.from(n.itemMap.values()).sort(((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current)))}),[n.collectionRef,n.itemMap])},a]}("Slider"),[y,v]=(0,i.b)("Slider",[S]),[k,E]=y("Slider"),w=l.forwardRef(((e,t)=>{const{name:n,min:r=0,max:i=100,step:a=1,orientation:s="horizontal",disabled:c=!1,minStepsBetweenThumbs:u=0,defaultValue:h=[r],value:b,onValueChange:S=(()=>{}),...y}=e,[v,E]=l.useState(null),w=(0,o.e)(t,(e=>E(e))),R=l.useRef(new Set),x=l.useRef(0),B="horizontal"===s,M=!v||Boolean(v.closest("form")),I=B?C:$,[P=[],T]=(0,d.T)({prop:b,defaultProp:h,onChange:e=>{var t;null===(t=[...R.current][x.current])||void 0===t||t.focus(),S(e)}});function W(e,t){const n=function(e){return(String(e).split(".")[1]||"").length}(a),o=function(e,[t,n]){return Math.min(n,Math.max(t,e))}(function(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}(Math.round((e-r)/a)*a+r,n),[r,i]);T(((e=[])=>{const n=function(e=[],t,n){const r=[...e];return r[n]=t,r.sort(((e,t)=>e-t))}(e,o,t);return function(e,t){if(t>0){const n=function(e){return e.slice(0,-1).map(((t,n)=>e[n+1]-t))}(e);return Math.min(...n)>=t}return!0}(n,u*a)?(x.current=n.indexOf(o),String(n)===String(e)?e:n):e}))}return l.createElement(k,{scope:e.__scopeSlider,disabled:c,min:r,max:i,valueIndexToChangeRef:x,thumbs:R.current,values:P,orientation:s},l.createElement(g.Provider,{scope:e.__scopeSlider},l.createElement(g.Slot,{scope:e.__scopeSlider},l.createElement(I,(0,f.Z)({"aria-disabled":c,"data-disabled":c?"":void 0},y,{ref:w,min:r,max:i,onSlideStart:c?void 0:function(e){W(e,function(e,t){if(1===e.length)return 0;const n=e.map((e=>Math.abs(e-t))),r=Math.min(...n);return n.indexOf(r)}(P,e))},onSlideMove:c?void 0:function(e){W(e,x.current)},onHomeKeyDown:()=>!c&&W(r,0),onEndKeyDown:()=>!c&&W(i,P.length-1),onStepKeyDown:({event:e,direction:t})=>{if(!c){const n=p.includes(e.key)||e.shiftKey&&m.includes(e.key)?10:1,r=x.current;W(P[r]+a*n*t,r)}}})))),M&&P.map(((e,t)=>l.createElement(z,{key:t,name:n?n+(P.length>1?"[]":""):void 0,value:e}))))})),[R,x]=y("Slider",{startEdge:"left",endEdge:"right",size:"width",direction:1}),C=l.forwardRef(((e,t)=>{const{min:n,max:r,dir:i,onSlideStart:a,onSlideMove:s,onStepKeyDown:c,...d}=e,[u,p]=l.useState(null),m=(0,o.e)(t,(e=>p(e))),g=l.useRef(),b=function(e,t){const[n,r]=l.useState("ltr"),[o,i]=l.useState(),a=l.useRef(0);return l.useEffect((()=>{if(void 0===t&&null!=e&&e.parentElement){const t=getComputedStyle(e.parentElement);i(t)}}),[e,t]),l.useEffect((()=>(void 0===t&&function e(){a.current=requestAnimationFrame((()=>{const t=null==o?void 0:o.direction;t&&r(t),e()}))}(),()=>cancelAnimationFrame(a.current))),[o,t,r]),t||n}(u,i),S="ltr"===b;function y(e){const t=g.current||u.getBoundingClientRect(),o=j([0,t.width],S?[n,r]:[r,n]);return g.current=t,o(e-t.left)}return l.createElement(R,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width"},l.createElement(B,(0,f.Z)({"data-orientation":"horizontal"},d,{ref:m,style:{...d.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{const t=y(e.clientX);null==a||a(t)},onSlideMove:e=>{const t=y(e.clientX);null==s||s(t)},onSlideEnd:()=>g.current=void 0,onStepKeyDown:e=>{const t=h[b].includes(e.key);null==c||c({event:e,direction:t?-1:1})}})))})),$=l.forwardRef(((e,t)=>{const{min:n,max:r,onSlideStart:i,onSlideMove:a,onStepKeyDown:s,...c}=e,d=l.useRef(null),u=(0,o.e)(t,d),p=l.useRef();function m(e){const t=p.current||d.current.getBoundingClientRect(),o=j([0,t.height],[r,n]);return p.current=t,o(e-t.top)}return l.createElement(R,{scope:e.__scopeSlider,startEdge:"bottom",endEdge:"top",size:"height",direction:1},l.createElement(B,(0,f.Z)({"data-orientation":"vertical"},c,{ref:u,style:{...c.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{const t=m(e.clientY);null==i||i(t)},onSlideMove:e=>{const t=m(e.clientY);null==a||a(t)},onSlideEnd:()=>p.current=void 0,onStepKeyDown:e=>{const t=h.ltr.includes(e.key);null==s||s({event:e,direction:t?-1:1})}})))})),B=l.forwardRef(((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:o,onSlideEnd:i,onHomeKeyDown:s,onEndKeyDown:c,onStepKeyDown:d,...h}=e,g=E("Slider",n);return l.createElement(a.W.span,(0,f.Z)({},h,{ref:t,onKeyDown:(0,u.M)(e.onKeyDown,(e=>{"Home"===e.key?s(e):"End"===e.key?c(e):p.concat(m).includes(e.key)&&(d(e),e.preventDefault())})),onPointerDown:(0,u.M)(e.onPointerDown,(e=>{const t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),g.thumbs.has(t)?t.focus():r(e)})),onPointerMove:(0,u.M)(e.onPointerMove,(e=>{e.target.hasPointerCapture(e.pointerId)&&o(e)})),onPointerUp:(0,u.M)(e.onPointerUp,(e=>{const t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),i(e))}))}))})),M=l.forwardRef(((e,t)=>{const{__scopeSlider:n,...r}=e,o=E("SliderTrack",n);return l.createElement(a.W.span,(0,f.Z)({"data-disabled":o.disabled?"":void 0,"data-orientation":o.orientation},r,{ref:t}))})),I=l.forwardRef(((e,t)=>{const{__scopeSlider:n,...r}=e,i=E("SliderRange",n),s=x("SliderRange",n),c=l.useRef(null),d=(0,o.e)(t,c),u=i.values.length,p=i.values.map((e=>W(e,i.min,i.max))),m=u>1?Math.min(...p):0,h=100-Math.max(...p);return l.createElement(a.W.span,(0,f.Z)({"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0},r,{ref:d,style:{...e.style,[s.startEdge]:m+"%",[s.endEdge]:h+"%"}}))})),P=l.forwardRef(((e,t)=>{const n=b(e.__scopeSlider),[r,i]=l.useState(null),a=(0,o.e)(t,(e=>i(e))),s=l.useMemo((()=>r?n().findIndex((e=>e.ref.current===r)):-1),[n,r]);return l.createElement(T,(0,f.Z)({},e,{ref:a,index:s}))})),T=l.forwardRef(((e,t)=>{const{__scopeSlider:n,index:r,...i}=e,c=E("SliderThumb",n),d=x("SliderThumb",n),[p,m]=l.useState(null),h=(0,o.e)(t,(e=>m(e))),b=(0,s.t)(p),S=c.values[r],y=void 0===S?0:W(S,c.min,c.max),v=function(e,t){return t>2?`Value ${e+1} of ${t}`:2===t?["Minimum","Maximum"][e]:void 0}(r,c.values.length),k=null==b?void 0:b[d.size],w=k?function(e,t,n){const r=e/2;return(r-j([0,50],[0,r])(t)*n)*n}(k,y,d.direction):0;return l.useEffect((()=>{if(p)return c.thumbs.add(p),()=>{c.thumbs.delete(p)}}),[p,c.thumbs]),l.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[d.startEdge]:`calc(${y}% + ${w}px)`}},l.createElement(g.ItemSlot,{scope:e.__scopeSlider},l.createElement(a.W.span,(0,f.Z)({role:"slider","aria-label":e["aria-label"]||v,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0},i,{ref:h,style:void 0===S?{display:"none"}:e.style,onFocus:(0,u.M)(e.onFocus,(()=>{c.valueIndexToChangeRef.current=r}))}))))})),z=e=>{const{value:t,...n}=e,r=l.useRef(null),o=(0,c.D)(t);return l.useEffect((()=>{const e=r.current,n=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(n,"value").set;if(o!==t&&i){const n=new Event("input",{bubbles:!0});i.call(e,t),e.dispatchEvent(n)}}),[o,t]),l.createElement("input",(0,f.Z)({style:{display:"none"}},n,{ref:r,defaultValue:t}))};function W(e,t,n){return 100/(n-t)*(e-t)}function j(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}const N=w,O=M,D=I,_=P},8820:function(e,t,n){n.d(t,{g7:function(){return l}});var r=n(7255),o=n(7294),i=n(7462);const l=o.forwardRef(((e,t)=>{const{children:n,...r}=e;return o.Children.toArray(n).some(c)?o.createElement(o.Fragment,null,o.Children.map(n,(e=>c(e)?o.createElement(a,(0,i.Z)({},r,{ref:t}),e.props.children):e))):o.createElement(a,(0,i.Z)({},r,{ref:t}),n)}));l.displayName="Slot";const a=o.forwardRef(((e,t)=>{const{children:n,...i}=e;return o.isValidElement(n)?o.cloneElement(n,{...d(i,n.props),ref:(0,r.F)(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null}));a.displayName="SlotClone";const s=({children:e})=>o.createElement(o.Fragment,null,e);function c(e){return o.isValidElement(e)&&e.type===s}function d(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==i||i(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}},5039:function(e,t,n){n.d(t,{fC:function(){return v},bU:function(){return k}});var r=n(2602),o=n(192),i=n(2935),l=n(7571),a=n(6600),s=n(2707),c=n(7255),d=n(6652),u=n(7294),f=n(7462);const[p,m]=(0,s.b)("Switch"),[h,g]=p("Switch"),b=u.forwardRef(((e,t)=>{const{__scopeSwitch:n,"aria-labelledby":i,name:l,checked:s,defaultChecked:p,required:m,disabled:g,value:b="on",onCheckedChange:v,...k}=e,[E,w]=u.useState(null),R=(0,c.e)(t,(e=>w(e))),x=(0,r.t0)(E),C=i||x,$=u.useRef(!1),B=!E||Boolean(E.closest("form")),[M=!1,I]=(0,a.T)({prop:s,defaultProp:p,onChange:v});return u.createElement(h,{scope:n,checked:M,disabled:g},u.createElement(o.W.button,(0,f.Z)({type:"button",role:"switch","aria-checked":M,"aria-labelledby":C,"aria-required":m,"data-state":y(M),"data-disabled":g?"":void 0,disabled:g,value:b},k,{ref:R,onClick:(0,d.M)(e.onClick,(e=>{I((e=>!e)),B&&($.current=e.isPropagationStopped(),$.current||e.stopPropagation())}))})),B&&u.createElement(S,{control:E,bubbles:!$.current,name:l,value:b,checked:M,required:m,disabled:g,style:{transform:"translateX(-100%)"}}))})),S=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,a=u.useRef(null),s=(0,l.D)(n),c=(0,i.t)(t);return u.useEffect((()=>{const e=a.current,t=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==n&&o){const t=new Event("click",{bubbles:r});o.call(e,n),e.dispatchEvent(t)}}),[s,n,r]),u.createElement("input",(0,f.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},o,{tabIndex:-1,ref:a,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return e?"checked":"unchecked"}const v=b,k=u.forwardRef(((e,t)=>{const{__scopeSwitch:n,...r}=e,i=g("SwitchThumb",n);return u.createElement(o.W.span,(0,f.Z)({"data-state":y(i.checked),"data-disabled":i.disabled?"":void 0},r,{ref:t}))}))},869:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(192),o=n(6600),i=n(6652),l=n(7294),a=n(7462);const s=l.forwardRef(((e,t)=>{const{pressed:n,defaultPressed:s=!1,onPressedChange:c,...d}=e,[u=!1,f]=(0,o.T)({prop:n,onChange:c,defaultProp:s});return l.createElement(r.W.button,(0,a.Z)({type:"button","aria-pressed":u,"data-state":u?"on":"off","data-disabled":e.disabled?"":void 0},d,{ref:t,onClick:(0,i.M)(e.onClick,(()=>{e.disabled||f(!u)}))}))}))},6600:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(7294);function o(e){const t=r.useRef(e);return r.useEffect((()=>{t.current=e})),r.useMemo((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}function i({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[i,l]=function({defaultProp:e,onChange:t}){const n=r.useState(e),[i]=n,l=r.useRef(i),a=o(t);return r.useEffect((()=>{l.current!==i&&(a(i),l.current=i)}),[i,l,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,s=a?e:i,c=o(n);return[s,r.useCallback((t=>{if(a){const n=t,r="function"==typeof t?n(e):t;r!==e&&c(r)}else l(t)}),[a,e,l,c])]}},7571:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(7294);function o(e){const t=r.useRef(e);return r.useEffect((()=>{t.current=e}),[e]),t.current}},2935:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(7294);function o(e){const[t,n]=r.useState(void 0);return r.useEffect((()=>{if(e){const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,i;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,i=t.blockSize}else{const t=e.getBoundingClientRect();o=t.width,i=t.height}n({width:o,height:i})}));return t.observe(e,{box:"border-box"}),()=>{n(void 0),t.unobserve(e)}}}),[e]),t}},7462:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},6744:function(e,t,n){n.d(t,{zo:function(){return ee}});var r,o=n(7294),i="colors",l="sizes",a="space",s={gap:a,gridGap:a,columnGap:a,gridColumnGap:a,rowGap:a,gridRowGap:a,inset:a,insetBlock:a,insetBlockEnd:a,insetBlockStart:a,insetInline:a,insetInlineEnd:a,insetInlineStart:a,margin:a,marginTop:a,marginRight:a,marginBottom:a,marginLeft:a,marginBlock:a,marginBlockEnd:a,marginBlockStart:a,marginInline:a,marginInlineEnd:a,marginInlineStart:a,padding:a,paddingTop:a,paddingRight:a,paddingBottom:a,paddingLeft:a,paddingBlock:a,paddingBlockEnd:a,paddingBlockStart:a,paddingInline:a,paddingInlineEnd:a,paddingInlineStart:a,top:a,right:a,bottom:a,left:a,scrollMargin:a,scrollMarginTop:a,scrollMarginRight:a,scrollMarginBottom:a,scrollMarginLeft:a,scrollMarginX:a,scrollMarginY:a,scrollMarginBlock:a,scrollMarginBlockEnd:a,scrollMarginBlockStart:a,scrollMarginInline:a,scrollMarginInlineEnd:a,scrollMarginInlineStart:a,scrollPadding:a,scrollPaddingTop:a,scrollPaddingRight:a,scrollPaddingBottom:a,scrollPaddingLeft:a,scrollPaddingX:a,scrollPaddingY:a,scrollPaddingBlock:a,scrollPaddingBlockEnd:a,scrollPaddingBlockStart:a,scrollPaddingInline:a,scrollPaddingInlineEnd:a,scrollPaddingInlineStart:a,fontSize:"fontSizes",background:i,backgroundColor:i,backgroundImage:i,borderImage:i,border:i,borderBlock:i,borderBlockEnd:i,borderBlockStart:i,borderBottom:i,borderBottomColor:i,borderColor:i,borderInline:i,borderInlineEnd:i,borderInlineStart:i,borderLeft:i,borderLeftColor:i,borderRight:i,borderRightColor:i,borderTop:i,borderTopColor:i,caretColor:i,color:i,columnRuleColor:i,fill:i,outline:i,outlineColor:i,stroke:i,textDecorationColor:i,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:l,minBlockSize:l,maxBlockSize:l,inlineSize:l,minInlineSize:l,maxInlineSize:l,width:l,minWidth:l,maxWidth:l,height:l,minHeight:l,maxHeight:l,flexBasis:l,gridTemplateColumns:l,gridTemplateRows:l,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},c=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,d=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(e=>JSON.stringify(e,c))(t);return o in e?e[o]:e[o]=n(t,...r)}},u=Symbol.for("sxs.internal"),f=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),p=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:m}=Object.prototype,h=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),g=/\s+(?![^()]*\))/,b=e=>t=>e(..."string"==typeof t?String(t).split(g):[t]),S={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:b(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:b(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:b(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:b(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:b(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:b(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},y=/([\d.]+)([^]*)/,v=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,k=(e,t)=>e in E&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,o)=>n+("stretch"===r?`-moz-available${o};${h(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${h(e)}:${n}fit-content`)+o)):String(t),E={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},w=e=>e?e+"-":"",R=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,o,i,l)=>"$"==i==!!o?e:(r||"--"==i?"calc(":"")+"var(--"+("$"===i?w(t)+(l.includes("$")?"":w(n))+l.replace(/\$/g,"-"):l)+")"+(r||"--"==i?"*"+(r||"")+(o||"1")+")":""))),x=/\s*,\s*(?![^()]*\))/,C=Object.prototype.toString,$=(e,t,n,r,o)=>{let i,l,a;const s=(e,t,n)=>{let c,d;const u=e=>{for(c in e){const m=64===c.charCodeAt(0),g=m&&Array.isArray(e[c])?e[c]:[e[c]];for(d of g){const e=/[A-Z]/.test(p=c)?p:p.replace(/-[^]/g,(e=>e[1].toUpperCase())),g="object"==typeof d&&d&&d.toString===C&&(!r.utils[e]||!t.length);if(e in r.utils&&!g){const t=r.utils[e];if(t!==l){l=t,u(t(d)),l=null;continue}}else if(e in S){const t=S[e];if(t!==a){a=t,u(t(d)),a=null;continue}}if(m&&(f=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=f.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,o,i)=>{const l=y.test(t),a=.0625*(l?-1:1),[s,c]=l?[r,t]:[t,r];return"("+("="===n[0]?"":">"===n[0]===l?"max-":"min-")+s+":"+("="!==n[0]&&1===n.length?c.replace(y,((e,t,r)=>Number(t)+a*(">"===n?1:-1)+r)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+s+":"+(1===o.length?i.replace(y,((e,t,n)=>Number(t)+a*(">"===o?-1:1)+n)):i):"")+")"}))),g){const e=m?n.concat(c):[...n],r=m?[...t]:v(t,c.split(x));void 0!==i&&o(B(...i)),i=void 0,s(d,r,e)}else void 0===i&&(i=[[],t,n]),c=m||36!==c.charCodeAt(0)?c:`--${w(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=g?d:"number"==typeof d?d&&e in M?String(d)+"px":String(d):R(k(e,null==d?"":d),r.prefix,r.themeMap[e]),i[0].push(`${m?`${c} `:`${h(c)}:`}${d}`)}}var f,p};u(e),void 0!==i&&o(B(...i)),i=void 0};s(e,t,n)},B=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,M={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},I=e=>String.fromCharCode(e+(e>25?39:97)),P=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=I(t%52)+n;return I(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),T=["themed","global","styled","onevar","resonevar","allvar","inline"],z=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return e.cssRules,!0}catch(e){return!1}},W=e=>{let t;const n=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const t in e)delete e[t]}const r=Object(e).styleSheets||[];for(const e of r)if(z(e)){for(let r=0,o=e.cssRules;o[r];++r){const i=Object(o[r]);if(1!==i.type)continue;const l=Object(o[r+1]);if(4!==l.type)continue;++r;const{cssText:a}=i;if(!a.startsWith("--sxs"))continue;const s=a.slice(14,-3).trim().split(/\s+/),c=T[s[0]];c&&(t||(t={sheet:e,reset:n,rules:{}}),t.rules[c]={group:l,index:r,cache:new Set(s)})}if(t)break}if(!t){const r=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,r(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:r("","text/css"),rules:{},reset:n,toString(){const{cssRules:e}=t.sheet;return[].map.call(e,((n,r)=>{const{cssText:o}=n;let i="";if(o.startsWith("--sxs"))return"";if(e[r-1]&&(i=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${o}`;return n.cssRules.length?`${i}${o}`:""}return o})).join("")}}}const{sheet:o,rules:i}=t;for(let e=T.length-1;e>=0;--e){const t=T[e];if(!i[t]){const n=T[e+1],r=i[n]?i[n].index:o.cssRules.length;o.insertRule("@media{}",r),o.insertRule(`--sxs{--sxs:${e}}`,r),i[t]={group:o.cssRules[r+1],index:r,cache:new Set([e])}}j(i[t])}};return n(),t},j=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n}catch{}}},N=Symbol(),O=d(),D=(e,t)=>O(e,(()=>(...n)=>{let r={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[u]){null==r.type&&(r.type=t[u].type);for(const e of t[u].composers)r.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==r.type&&(r.type=t):r.composers.add(_(t,e));return null==r.type&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),A(e,r,t)})),_=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${w(o.prefix)}c-${P(r)}`,l=[],a=[],s=Object.create(null),c=[];for(const f in n)s[f]=String(n[f]);if("object"==typeof e&&e)for(const f in e){d=s,u=f,m.call(d,u)||(s[f]="undefined");const t=e[f];for(const e in t){const n={[f]:String(e)};"undefined"===String(e)&&c.push(f);const r=t[e],o=[n,r,!p(r)];l.push(o)}}var d,u;if("object"==typeof t&&t)for(const f of t){let{css:e,...t}=f;e="object"==typeof e&&e||{};for(const r in t)t[r]=String(t[r]);const n=[t,e,!p(e)];a.push(n)}return[i,r,l,a,s,c]},A=(e,t,n)=>{const[r,o,i,l]=L(t.composers),a="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[N].length;n++){const[r,o]=t[N][n];e.rules[r].apply(o)}return t[N]=[],null}return t[N]=[],t.rules={},T.forEach((e=>t.rules[e]={apply:n=>t[N].push([e,n])})),t})(n):null,s=(a||n).rules,c=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,d=d=>{d="object"==typeof d&&d||U;const{css:u,...f}=d,p={};for(const e in i)if(delete f[e],e in d){let t=d[e];"object"==typeof t&&t?p[e]={"@initial":i[e],...t}:(t=String(t),p[e]="undefined"!==t||l.has(e)?t:i[e])}else p[e]=i[e];const m=new Set([...o]);for(const[r,o,i,l]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),$(o,[`.${r}`],[],e,(e=>{s.styled.apply(e)})));const t=Z(i,p,e.media),a=Z(l,p,e.media,!0);for(const o of t)if(void 0!==o)for(const[t,i,l]of o){const o=`${r}-${P(i)}-${t}`;m.add(o);const a=(l?n.rules.resonevar:n.rules.onevar).cache,c=l?s.resonevar:s.onevar;a.has(o)||(a.add(o),$(i,[`.${o}`],[],e,(e=>{c.apply(e)})))}for(const o of a)if(void 0!==o)for(const[t,i]of o){const o=`${r}-${P(i)}-${t}`;m.add(o),n.rules.allvar.cache.has(o)||(n.rules.allvar.cache.add(o),$(i,[`.${o}`],[],e,(e=>{s.allvar.apply(e)})))}}if("object"==typeof u&&u){const t=`${r}-i${P(u)}-css`;m.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),$(u,[`.${t}`],[],e,(e=>{s.inline.apply(e)})))}for(const e of String(d.className||"").trim().split(/\s+/))e&&m.add(e);const h=f.className=[...m].join(" ");return{type:t.type,className:h,selector:c,props:f,toString:()=>h,deferredInjector:a}};return f(d,{className:r,selector:c,[u]:t,toString:()=>(n.rules.styled.cache.has(r)||d(),r)})},L=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,a]of e){""===t&&(t=i),n.push(i),o.push(...a);for(const e in l){const t=l[e];(void 0===r[e]||"undefined"!==t||a.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(o)]},Z=(e,t,n,r)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let e,s=0,c=!1;for(e in i){const r=i[e];let o=t[e];if(o!==r){if("object"!=typeof o||!o)continue e;{let e,t,i=0;for(const l in o){if(r===String(o[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in n?n[e]:l.replace(/^@media ?/,"")),c=!0}s+=i,e=!0}++i}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(o[s]=o[s]||[]).push([r?"cv":`${e}-${i[e]}`,l,c])}return o},U={},H=d(),F=(e,t)=>H(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=P(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}$(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return f(r,{toString:r})})),V=d(),K=(e,t)=>V(e,(()=>n=>{const r=`${w(e.prefix)}k-${P(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];$(n,[],[],e,(e=>o.push(e)));const i=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(i)}return r};return f(o,{get name(){return o()},toString:o})})),q=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+w(this.prefix)+w(this.scale)+this.token}toString(){return this.computedValue}},G=d(),X=(e,t)=>G(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const o=`.${n=(n="string"==typeof n?n:"")||`${w(e.prefix)}t-${P(r)}`}`,i={},l=[];for(const t in r){i[t]={};for(const n in r[t]){const o=`--${w(e.prefix)}${t}-${n}`,a=R(String(r[t][n]),e.prefix,t);i[t][n]=new q(n,a,t,e.prefix),l.push(`${o}:${a}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const o=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(o)}return n};return{...i,get className(){return a()},selector:o,toString:a}})),Y=d(),J=d(),Q=()=>r||(r=(e=>{const t=(e=>{let t=!1;const n=Y(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,i="object"==typeof e.theme&&e.theme||{},l={prefix:n,media:r,theme:i,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...s},utils:"object"==typeof e.utils&&e.utils||{}},a=W(o),c={css:D(l,a),globalCss:F(l,a),keyframes:K(l,a),createTheme:X(l,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:l,prefix:n,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(i)),c}));return t||n.reset(),n})(e);return t.styled=(({config:e,sheet:t})=>J(e,(()=>{const n=D(e,t);return(...e)=>{const t=n(...e),r=t[u].type,i=o.forwardRef(((e,n)=>{const i=e&&e.as||r,{props:l,deferredInjector:a}=t(e);return delete l.as,l.ref=n,a?o.createElement(o.Fragment,null,o.createElement(i,l),o.createElement(a,null)):o.createElement(i,l)}));return i.className=t.className,i.displayName=`Styled.${r.displayName||r.name||r}`,i.selector=t.selector,i.toString=()=>t.selector,i[u]=t[u],i}})))(t),t})()),ee=(...e)=>Q().styled(...e)}}]);