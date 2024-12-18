import{k as U,r as g,l as ut,c as Ne,f as W,u as ct,o as dt,m as ft,j as l,a as L,b as Se}from"./index-DksE4EtG.js";import{m as Ve,d as pe,e as _,f as me,b as D,T as z,B as ht,C as pt}from"./Text-D7ceCm6O.js";import{G as N}from"./index-ADFnu5CB.js";import"./index-D3nTArDB.js";function mt(t,e,n,s){return t.addEventListener(e,n,s),()=>{t.removeEventListener(e,n,s)}}function gt(t){return t.view??window}function xt(t){const e=gt(t);return typeof e.PointerEvent<"u"&&t instanceof e.PointerEvent?t.pointerType==="mouse":t instanceof e.MouseEvent}function ze(t){return!!t.touches}function vt(t){return ze(t)&&t.touches.length>1}function bt(t,e="page"){const n=t.touches[0]||t.changedTouches[0];return{x:n[`${e}X`],y:n[`${e}Y`]}}function St(t,e="page"){return{x:t[`${e}X`],y:t[`${e}Y`]}}function Ue(t,e="page"){return ze(t)?bt(t,e):St(t,e)}function yt(t){return e=>{const n=xt(e);(!n||n&&e.button===0)&&t(e)}}function Pt(t,e=!1){function n(o){t(o,{point:Ue(o)})}return e?yt(n):n}function Q(t,e,n,s){return mt(t,e,Pt(n,e==="pointerdown"),s)}function wt(t){const e=parseFloat(t);return typeof e!="number"||Number.isNaN(e)?0:e}function kt(t,e){let n=wt(t);const s=10**(e??10);return n=Math.round(n*s)/s,e?n.toFixed(e):n.toString()}function Rt(t){if(!Number.isFinite(t))return 0;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n+=1;return n}function Ie(t,e,n){return(t-e)*100/(n-e)}function Tt(t,e,n){return(n-e)*t+e}function Ct(t,e,n){const s=Math.round((t-e)/n)*n+e,o=Rt(n);return kt(s,o)}function $e(t,e,n){return t==null?t:(n<e&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(t,e),n))}function jt(t){const{value:e,defaultValue:n,onChange:s,shouldUpdate:o=(b,j)=>b!==j}=t,c=U(s),p=U(o),[m,d]=g.useState(n),f=e!==void 0,u=f?e:m,h=U(b=>{const F=typeof b=="function"?b(u):b;p(u,F)&&(f||d(F),c(F))},[f,c,u,p]);return[u,h]}function Et(t){const e=g.useRef(null);return e.current=t,e}const Be=1/60*1e3,Mt=typeof performance<"u"?()=>performance.now():()=>Date.now(),He=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Mt()),Be);function Vt(t){let e=[],n=[],s=0,o=!1,c=!1;const p=new WeakSet,m={schedule:(d,f=!1,u=!1)=>{const h=u&&o,b=h?e:n;return f&&p.add(d),b.indexOf(d)===-1&&(b.push(d),h&&o&&(s=e.length)),d},cancel:d=>{const f=n.indexOf(d);f!==-1&&n.splice(f,1),p.delete(d)},process:d=>{if(o){c=!0;return}if(o=!0,[e,n]=[n,e],n.length=0,s=e.length,s)for(let f=0;f<s;f++){const u=e[f];u(d),p.has(u)&&(m.schedule(u),t())}o=!1,c&&(c=!1,m.process(d))}};return m}const It=40;let ve=!0,O=!1,be=!1;const B={delta:0,timestamp:0},K=["read","update","preRender","render","postRender"],te=K.reduce((t,e)=>(t[e]=Vt(()=>O=!0),t),{}),$t=K.reduce((t,e)=>{const n=te[e];return t[e]=(s,o=!1,c=!1)=>(O||Ft(),n.schedule(s,o,c)),t},{}),At=K.reduce((t,e)=>(t[e]=te[e].cancel,t),{});K.reduce((t,e)=>(t[e]=()=>te[e].process(B),t),{});const Dt=t=>te[t].process(B),Oe=t=>{O=!1,B.delta=ve?Be:Math.max(Math.min(t-B.timestamp,It),1),B.timestamp=t,be=!0,K.forEach(Dt),be=!1,O&&(ve=!1,He(Oe))},Ft=()=>{O=!0,ve=!0,be||He(Oe)},Ae=()=>B;var _t=Object.defineProperty,Nt=(t,e,n)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,R=(t,e,n)=>(Nt(t,typeof e!="symbol"?e+"":e,n),n);class zt{constructor(e,n,s){if(R(this,"history",[]),R(this,"startEvent",null),R(this,"lastEvent",null),R(this,"lastEventInfo",null),R(this,"handlers",{}),R(this,"removeListeners",()=>{}),R(this,"threshold",3),R(this,"win"),R(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const m=ge(this.lastEventInfo,this.history),d=this.startEvent!==null,f=Ot(m.offset,{x:0,y:0})>=this.threshold;if(!d&&!f)return;const{timestamp:u}=Ae();this.history.push({...m.point,timestamp:u});const{onStart:h,onMove:b}=this.handlers;d||(h==null||h(this.lastEvent,m),this.startEvent=this.lastEvent),b==null||b(this.lastEvent,m)}),R(this,"onPointerMove",(m,d)=>{this.lastEvent=m,this.lastEventInfo=d,$t.update(this.updatePoint,!0)}),R(this,"onPointerUp",(m,d)=>{const f=ge(d,this.history),{onEnd:u,onSessionEnd:h}=this.handlers;h==null||h(m,f),this.end(),!(!u||!this.startEvent)&&(u==null||u(m,f))}),this.win=e.view??window,vt(e))return;this.handlers=n,s&&(this.threshold=s),e.stopPropagation(),e.preventDefault();const o={point:Ue(e)},{timestamp:c}=Ae();this.history=[{...o.point,timestamp:c}];const{onSessionStart:p}=n;p==null||p(e,ge(o,this.history)),this.removeListeners=Ht(Q(this.win,"pointermove",this.onPointerMove),Q(this.win,"pointerup",this.onPointerUp),Q(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),At.update(this.updatePoint)}}function De(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ge(t,e){return{point:t.point,delta:De(t.point,e[e.length-1]),offset:De(t.point,e[0]),velocity:Bt(e,.1)}}const Ut=t=>t*1e3;function Bt(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const o=t[t.length-1];for(;n>=0&&(s=t[n],!(o.timestamp-s.timestamp>Ut(e)));)n--;if(!s)return{x:0,y:0};const c=(o.timestamp-s.timestamp)/1e3;if(c===0)return{x:0,y:0};const p={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function Ht(...t){return e=>t.reduce((n,s)=>s(n),e)}function xe(t,e){return Math.abs(t-e)}function Fe(t){return"x"in t&&"y"in t}function Ot(t,e){if(typeof t=="number"&&typeof e=="number")return xe(t,e);if(Fe(t)&&Fe(e)){const n=xe(t.x,e.x),s=xe(t.y,e.y);return Math.sqrt(n**2+s**2)}return 0}function Wt(t,e){const{onPan:n,onPanStart:s,onPanEnd:o,onPanSessionStart:c,onPanSessionEnd:p,threshold:m}=e,d=!!(n||s||o||c||p),f=g.useRef(null),u=Et({onSessionStart:c,onSessionEnd:p,onStart:s,onMove:n,onEnd(h,b){f.current=null,o==null||o(h,b)}});g.useEffect(()=>{var h;(h=f.current)==null||h.updateHandlers(u.current)}),g.useEffect(()=>{const h=t.current;if(!h||!d)return;function b(j){f.current=new zt(j,u.current,m)}return Q(h,"pointerdown",b)},[t,d,u,m]),g.useEffect(()=>()=>{var h;(h=f.current)==null||h.end(),f.current=null},[])}function Lt(t){return{root:`slider-root-${t}`,getThumb:e=>`slider-thumb-${t}-${e}`,getInput:e=>`slider-input-${t}-${e}`,track:`slider-track-${t}`,innerTrack:`slider-filled-track-${t}`,getMarker:e=>`slider-marker-${t}-${e}`,output:`slider-output-${t}`}}function ee(t){const{orientation:e,vertical:n,horizontal:s}=t;return e==="vertical"?n:s}function Kt(t){const{orientation:e,thumbPercents:n,isReversed:s}=t,o=j=>({position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...ee({orientation:e,vertical:{bottom:`${n[j]}%`},horizontal:{left:`${n[j]}%`}})}),c={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0},p={position:"absolute",...ee({orientation:e,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},m=n.length===1,d=[0,s?100-n[0]:n[0]],f=m?d:n;let u=f[0];!m&&s&&(u=100-u);const h=Math.abs(f[f.length-1]-f[0]),b={...p,...ee({orientation:e,vertical:s?{height:`${h}%`,top:`${u}%`}:{height:`${h}%`,bottom:`${u}%`},horizontal:s?{width:`${h}%`,right:`${u}%`}:{width:`${h}%`,left:`${u}%`}})};return{trackStyle:p,innerTrackStyle:b,rootStyle:c,getThumbStyle:o}}function Xt(t){const{isReversed:e,direction:n,orientation:s}=t;return n==="ltr"||s==="vertical"?e:!e}function Yt(t){const{min:e=0,max:n=100,onChange:s,value:o,defaultValue:c,isReversed:p,direction:m="ltr",orientation:d="horizontal",id:f,isDisabled:u,isReadOnly:h,onChangeStart:b,onChangeEnd:j,step:F=1,getAriaValueText:Ye,"aria-valuetext":X,"aria-label":I,"aria-labelledby":Y,name:Z,focusThumbOnChange:ye=!0,minStepsBetweenThumbs:Ze=0,...Pe}=t,re=U(b),$=U(j),q=U(Ye),T=Xt({isReversed:p,direction:m,orientation:d}),[G,oe]=jt({value:o,defaultValue:c??[25,75],onChange:s});if(!Array.isArray(G))throw new TypeError(`[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof G}\``);const[ae,we]=g.useState(!1),[ie,le]=g.useState(!1),[S,H]=g.useState(-1),A=!(u||h),qe=g.useRef(G),y=G.map(r=>$e(r,e,n)),Ge=Ze*F,M=Zt(y,e,n,Ge),w=g.useRef({eventSource:null,value:[],valueBounds:[]});w.current.value=y,w.current.valueBounds=M;const Je=y.map(r=>n-r+e),ue=(T?Je:y).map(r=>Ie(r,e,n)),ce=d==="vertical",de=g.useRef(null),fe=g.useRef(null),Qe=g.useId(),P=Lt(f??Qe),ke=g.useCallback(r=>{var V;if(!de.current)return;w.current.eventSource="pointer";const i=de.current.getBoundingClientRect(),{clientX:a,clientY:x}=((V=r.touches)==null?void 0:V[0])??r,v=ce?i.bottom-x:a-i.left,E=ce?i.height:i.width;let C=v/E;return T&&(C=1-C),Tt(C,e,n)},[ce,T,n,e]),he=(n-e)/10,J=F||(n-e)/100,k=g.useMemo(()=>({setValueAtIndex(r,i){if(!A)return;const a=w.current.valueBounds[r];i=parseFloat(Ct(i,a.min,J)),i=$e(i,a.min,a.max);const x=[...w.current.value];x[r]=i,oe(x)},setActiveIndex:H,stepUp(r,i=J){const a=w.current.value[r],x=T?a-i:a+i;k.setValueAtIndex(r,x)},stepDown(r,i=J){const a=w.current.value[r],x=T?a+i:a-i;k.setValueAtIndex(r,x)},reset(){oe(qe.current)}}),[J,T,oe,A]),Re=g.useCallback(r=>{const i=r.key,x={ArrowRight:()=>k.stepUp(S),ArrowUp:()=>k.stepUp(S),ArrowLeft:()=>k.stepDown(S),ArrowDown:()=>k.stepDown(S),PageUp:()=>k.stepUp(S,he),PageDown:()=>k.stepDown(S,he),Home:()=>{const{min:v}=M[S];k.setValueAtIndex(S,v)},End:()=>{const{max:v}=M[S];k.setValueAtIndex(S,v)}}[i];x&&(r.preventDefault(),r.stopPropagation(),x(r),w.current.eventSource="keyboard")},[k,S,he,M]),{getThumbStyle:Te,rootStyle:Ce,trackStyle:je,innerTrackStyle:Ee}=g.useMemo(()=>Kt({isReversed:T,orientation:d,thumbPercents:ue}),[T,d,ue]),Me=g.useCallback(r=>{var a;const i=r??S;if(i!==-1&&ye){const x=P.getThumb(i),v=(a=fe.current)==null?void 0:a.ownerDocument.getElementById(x);v&&setTimeout(()=>v.focus())}},[ye,S,P]);ut(()=>{w.current.eventSource==="keyboard"&&($==null||$(w.current.value))},[y,$]);const et=r=>{const i=ke(r)||0,a=w.current.value.map(V=>Math.abs(V-i)),x=Math.min(...a);let v=a.indexOf(x);const E=a.filter(V=>V===x);E.length>1&&i>w.current.value[v]&&(v=v+E.length-1),H(v),k.setValueAtIndex(v,i),Me(v)},tt=r=>{if(S==-1)return;const i=ke(r)||0;H(S),k.setValueAtIndex(S,i),Me(S)};Wt(fe,{onPanSessionStart(r){A&&(we(!0),et(r),re==null||re(w.current.value))},onPanSessionEnd(){A&&(we(!1),$==null||$(w.current.value))},onPan(r){A&&tt(r)}});const nt=g.useCallback((r={},i=null)=>({...r,...Pe,id:P.root,ref:Ve(i,fe),tabIndex:-1,"aria-disabled":pe(u),"data-focused":_(ie),style:{...r.style,...Ce}}),[Pe,u,ie,Ce,P]),st=g.useCallback((r={},i=null)=>({...r,ref:Ve(i,de),id:P.track,"data-disabled":_(u),style:{...r.style,...je}}),[u,je,P]),rt=g.useCallback((r={},i=null)=>({...r,ref:i,id:P.innerTrack,style:{...r.style,...Ee}}),[Ee,P]),ot=g.useCallback((r,i=null)=>{const{index:a,...x}=r,v=y[a];if(v==null)throw new TypeError(`[range-slider > thumb] Cannot find value at index \`${a}\`. The \`value\` or \`defaultValue\` length is : ${y.length}`);const E=M[a];return{...x,ref:i,role:"slider",tabIndex:A?0:void 0,id:P.getThumb(a),"data-active":_(ae&&S===a),"aria-valuetext":(q==null?void 0:q(v))??(X==null?void 0:X[a]),"aria-valuemin":E.min,"aria-valuemax":E.max,"aria-valuenow":v,"aria-orientation":d,"aria-disabled":pe(u),"aria-readonly":pe(h),"aria-label":I==null?void 0:I[a],"aria-labelledby":I!=null&&I[a]||Y==null?void 0:Y[a],style:{...r.style,...Te(a)},onKeyDown:me(r.onKeyDown,Re),onFocus:me(r.onFocus,()=>{le(!0),H(a)}),onBlur:me(r.onBlur,()=>{le(!1),H(-1)})}},[P,y,M,A,ae,S,q,X,d,u,h,I,Y,Te,Re,le]),at=g.useCallback((r={},i=null)=>({...r,ref:i,id:P.output,htmlFor:y.map((a,x)=>P.getThumb(x)).join(" "),"aria-live":"off"}),[P,y]),it=g.useCallback((r,i=null)=>{const{value:a,...x}=r,v=!(a<e||a>n),E=a>=y[0]&&a<=y[y.length-1];let C=Ie(a,e,n);C=T?100-C:C;const V={position:"absolute",pointerEvents:"none",...ee({orientation:d,vertical:{bottom:`${C}%`},horizontal:{left:`${C}%`}})};return{...x,ref:i,id:P.getMarker(r.value),role:"presentation","aria-hidden":!0,"data-disabled":_(u),"data-invalid":_(!v),"data-highlighted":_(E),style:{...r.style,...V}}},[u,T,n,e,d,y,P]),lt=g.useCallback((r,i=null)=>{const{index:a,...x}=r;return{...x,ref:i,id:P.getInput(a),type:"hidden",value:y[a],name:Array.isArray(Z)?Z[a]:`${Z}-${a}`}},[Z,y,P]);return{state:{value:y,isFocused:ie,isDragging:ae,getThumbPercent:r=>ue[r],getThumbMinValue:r=>M[r].min,getThumbMaxValue:r=>M[r].max},actions:k,getRootProps:nt,getTrackProps:st,getInnerTrackProps:rt,getThumbProps:ot,getMarkerProps:it,getInputProps:lt,getOutputProps:at}}function Zt(t,e,n,s){return t.map((o,c)=>{const p=c===0?e:t[c-1]+s,m=c===t.length-1?n:t[c+1]-s;return{min:p,max:m}})}const[qt,ne]=Ne({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"}),[Gt,se]=Ne({name:"RangeSliderStylesContext",errorMessage:`useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),We=W(function(e,n){const s={orientation:"horizontal",...e},o=ct("Slider",s),c=dt(s),{direction:p}=ft();c.direction=p;const{getRootProps:m,...d}=Yt(c),f=g.useMemo(()=>({...d,name:s.name}),[d,s.name]);return l.jsx(qt,{value:f,children:l.jsx(Gt,{value:o,children:l.jsx(L.div,{...m({},n),className:"chakra-slider",__css:o.container,children:s.children})})})});We.displayName="RangeSlider";const Le=W(function(e,n){const{getThumbProps:s,getInputProps:o,name:c}=ne(),p=se(),m=s(e,n);return l.jsxs(L.div,{...m,className:Se("chakra-slider__thumb",e.className),__css:p.thumb,children:[m.children,c&&l.jsx("input",{...o({index:e.index})})]})});Le.displayName="RangeSliderThumb";const Ke=W(function(e,n){const{getTrackProps:s}=ne(),o=se(),c=s(e,n);return l.jsx(L.div,{...c,className:Se("chakra-slider__track",e.className),__css:o.track,"data-testid":"chakra-range-slider-track"})});Ke.displayName="RangeSliderTrack";const Xe=W(function(e,n){const{getInnerTrackProps:s}=ne(),o=se(),c=s(e,n);return l.jsx(L.div,{...c,className:"chakra-slider__filled-track",__css:o.filledTrack})});Xe.displayName="RangeSliderFilledTrack";const Jt=W(function(e,n){const{getMarkerProps:s}=ne(),o=se(),c=s(e,n);return l.jsx(L.div,{...c,className:Se("chakra-slider__marker",e.className),__css:o.mark})});Jt.displayName="RangeSliderMark";const Qt=t=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...t,children:[l.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H11C11.5523 2 12 2.44772 12 3C12 3.55228 11.5523 4 11 4H7Z"}),l.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z"}),l.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V4H15C14.4477 4 14 3.55228 14 3Z"})]}),en=We,tn=Ke,nn=Xe,_e=Le,sn=()=>l.jsxs(D,{w:"100%",gap:"35px",flexDir:"column",bg:"gray.100",borderRadius:"30px",p:"40px 45px",children:[l.jsxs(D,{flexDir:"column",gap:"15px",children:[l.jsxs(D,{alignItems:"center",justifyContent:"space-between",children:[l.jsx(z,{fontSize:"32px",fontWeight:600,children:"Посмотрите товары"}),l.jsx(ht,{p:"25px",fontSize:"28px",bgColor:"white",rightIcon:l.jsx(Qt,{color:"black"}),_hover:{bg:"gray.200"},children:"Заказать"})]}),l.jsxs(D,{w:"100%",overflowX:"scroll",gap:"20px",children:[l.jsx(N,{basket:!1}),l.jsx(N,{basket:!1}),l.jsx(N,{basket:!1}),l.jsx(N,{basket:!1}),l.jsx(N,{basket:!1}),l.jsx(N,{basket:!1})]})]}),l.jsx(z,{fontSize:"32px",fontWeight:600,children:"Сумма заказа: 13 555 руб"}),l.jsx(z,{fontSize:"32px",fontWeight:600,children:"Настройте срок доставки"}),l.jsxs(D,{bg:"gray.200",borderRadius:"20px",gap:"30px",flexDir:"column",p:"20px 40px",children:[l.jsxs(en,{"aria-label":["min","max"],defaultValue:[10,80],children:[l.jsx(tn,{bg:"white",children:l.jsx(nn,{bg:"blue.100"})}),l.jsx(_e,{boxSize:6,index:0}),l.jsx(_e,{boxSize:6,index:1})]}),l.jsxs(D,{alignItems:"center",justifyContent:"space-between",children:[l.jsx(z,{color:"white",fontSize:"32px",fontWeight:600,children:"Минимум: 35 дней"}),l.jsx(z,{color:"white",fontSize:"32px",fontWeight:600,children:"Максимум: 1 год"})]})]})]}),fn=()=>l.jsxs(pt,{children:[l.jsx(D,{w:"100%",py:"15px",justifyContent:"center",bg:"gray.100",borderRadius:"30px",mb:"20px",children:l.jsx(z,{fontSize:"32px",fontWeight:600,textAlign:"center",children:"Оформление заказа"})}),l.jsx(sn,{})]});export{fn as default};