import{j as e,m as d,r as l}from"./index-TIDxUJXW.js";import{c as i}from"./createLucideIcon-Bi1QBk6y.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=i("CloudDownload",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),v=[{icon:e.jsx(u,{size:20}),title:"Privacy First",description:"No registration, no login, no tracking. Just open and explore thousands of premium wallpapers."},{icon:e.jsx(h,{size:20}),title:"Offline Ready",description:"Browse wallpapers you've already viewed even without an internet connection."},{icon:e.jsx(f,{size:20}),title:"Smart Search",description:"Find the perfect wallpaper using powerful subreddit search and real-time filtering."},{icon:e.jsx(x,{size:20}),title:"Daily Fresh",description:"New wallpapers added every day from the most active communities on Reddit."},{icon:e.jsx(m,{size:20}),title:"Curated Collections",description:"Hand-picked categories from anime to nature, minimal to abstract — always expanding."},{icon:e.jsx(w,{size:20}),title:"Lightweight & Fast",description:"Under 5MB install size. No bloatware, no battery drain. Designed to be incredibly efficient."}],C=()=>e.jsx("section",{className:"details-section",id:"details",children:e.jsxs("div",{className:"container",children:[e.jsxs(d.div,{className:"details-header",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},children:[e.jsxs("div",{className:"pill-badge",children:[e.jsx("span",{className:"dot"}),"Everything You Need"]}),e.jsx("h2",{className:"text-gradient",children:"Built with care, designed for you."}),e.jsx("p",{children:"A complete wallpaper experience with every detail considered."})]}),e.jsx("div",{className:"details-grid",children:v.map((a,r)=>e.jsx(j,{detail:a,index:r},r))})]})}),j=({detail:a,index:r})=>{const n=l.useRef(null);return l.useEffect(()=>{const t=n.current;if(!t)return;const s=c=>{const o=t.getBoundingClientRect(),p=c.clientX-o.left,y=c.clientY-o.top;t.style.setProperty("--mouse-x",`${p}px`),t.style.setProperty("--mouse-y",`${y}px`)};return t.addEventListener("mousemove",s),()=>t.removeEventListener("mousemove",s)},[]),e.jsxs(d.div,{ref:n,className:"detail-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:r*.08},children:[e.jsx("div",{className:"detail-icon-wrapper",children:a.icon}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.description})]})};export{C as default};
