import{j as e,m as l,r as c}from"./index-BRUBgm9X.js";import{c as a,S as u,I as y}from"./share-2-eQ6wZl3n.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("CloudDownload",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=a("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),w=[{icon:e.jsx(u,{size:20}),title:"Direct Reddit Preview",description:"Share any image post from Reddit directly to SubPaper and test it as your wallpaper instantly."},{icon:e.jsx(f,{size:20}),title:"Privacy Focused",description:"Complete anonymity with no registration or login required. We respect your digital footprint."},{icon:e.jsx(x,{size:20}),title:"Daily 4K Updates",description:"Fresh 4K-level photos added regularly from the most active communities to keep your device stunning."},{icon:e.jsx(m,{size:20}),title:"Native Offline Mode",description:"Access and view wallpapers you have already browsed even without an internet connection."},{icon:e.jsx(y,{size:20}),title:"Lossless Resolution",description:"Our upgraded engine ensures every image is served at the absolute highest available resolution."},{icon:e.jsx(v,{size:20}),title:"Community Sourced",description:"Curated from the internet's best Subreddits to ensure endless variety and premium quality."}],M=()=>e.jsx("section",{className:"details-section",id:"details",children:e.jsxs("div",{className:"container",children:[e.jsxs(l.div,{className:"details-header",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},children:[e.jsxs("div",{className:"pill-badge",children:[e.jsx("span",{className:"dot"}),"Everything You Need"]}),e.jsx("h2",{className:"text-gradient",children:"Built with care, designed for you."}),e.jsx("p",{children:"A complete wallpaper experience with every detail considered."})]}),e.jsx("div",{className:"details-grid",children:w.map((i,s)=>e.jsx(j,{detail:i,index:s},s))})]})}),j=({detail:i,index:s})=>{const n=c.useRef(null);return c.useEffect(()=>{const t=n.current;if(!t)return;const o=r=>{const d=t.getBoundingClientRect(),p=r.clientX-d.left,h=r.clientY-d.top;t.style.setProperty("--mouse-x",`${p}px`),t.style.setProperty("--mouse-y",`${h}px`)};return t.addEventListener("mousemove",o),()=>t.removeEventListener("mousemove",o)},[]),e.jsxs(l.div,{ref:n,className:"detail-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:s*.08},children:[e.jsx("div",{className:"detail-icon-wrapper",children:i.icon}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.description})]})};export{M as default};
