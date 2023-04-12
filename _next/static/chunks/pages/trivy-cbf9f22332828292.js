(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{4917:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trivy",function(){return r(12991)}])},12991:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t=r(85893),i=r(9008),a=r.n(i),l=r(41799),s=r(69396),o=r(828),c=r(74041),u=r(18618),d=r.n(u),f=r(84517),v=r(18121),h=function(e){var n=e.severity||"",r="CRITICAL"===n||"HIGH"===n?"danger":"MEDIUM"===n?"warning":"LOW"===n?"info":"success";return(0,t.jsx)(f.Z,{className:"w-100",variant:r,children:e.title||n})},_=[{name:"severity",label:"S\xe9verit\xe9",render:function(e){return(0,t.jsx)(h,(0,s.Z)((0,l.Z)({},e),{title:e.score}))}},{name:"title",label:"Title",render:function(e){return(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title||e.id})}},{name:"fixable",label:"",render:function(e){return(0,t.jsx)("div",{style:{textAlign:"center"},children:e.fixableVersions?"\u2705 ".concat(e.fixableVersions):"\u274c"})}}],x=function(e){var n=function(e){var n=e.filter((function(e){return e.trivy&&e.trivy.length})).flatMap((function(e){return e.trivy})).flatMap((function(e){return e.Results.filter((function(e){return e.Vulnerabilities&&e.Vulnerabilities.length})).flatMap((function(n){return n.Vulnerabilities.map((function(r){var t,i,a,l,s,o;return{image:e.ArtifactName,target:n.Target,severity:r.Severity,title:r.Title,fixableVersions:r.FixedVersion,id:r.VulnerabilityID,url:r.PrimaryURL,key:e.ArtifactName+n.Target+r.Severity+r.Title,score:Math.max((null===(t=r.CVSS)||void 0===t||null===(i=t.nvd)||void 0===i?void 0:i.V3Score)||0,(null===(a=r.CVSS)||void 0===a||null===(l=a.nvd)||void 0===l?void 0:l.V2Score)||0,(null===(s=r.CVSS)||void 0===s||null===(o=s.redhat)||void 0===o?void 0:o.V3Score)||0)}}))}))}));return d()(n,"key")}(e.report);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Callout,{hasInfoIcon:!1,className:"fr-mb-3w",children:(0,t.jsx)(c.CalloutTitle,{as:"h1",children:"Trivy : analyse des images Docker"})}),["CRITICAL"].map((function(e){var r=n.filter((function(n){return n.severity===e})).filter((function(e){return"Node.js"!==e.target})).reduce((function(e,n){return e[n.target]||(e[n.target]=[]),e[n.target].push(n),e}),{});return Object.entries(r).sort((function(e,n){var r=(0,o.Z)(e,2),t=(r[0],r[1]),i=(0,o.Z)(n,2);i[0];return i[1].length-t.length})).map((function(n){var r=(0,o.Z)(n,2),i=r[0],a=r[1];return a.sort((function(e,n){return n.score-e.score})),(0,t.jsx)(v.s,{title:"".concat(e," (").concat(a.length,") : ").concat(i),children:(0,t.jsx)(c.Table,{rowKey:function(e){return e.key},columns:_,data:a})},i)}))}))]})},g=r(66078),b=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"Wappalyzer - Technologies - Dashlord"})}),(0,t.jsx)(x,{report:g})]})}},84517:function(e,n,r){"use strict";var t=r(85893),i=r(94184),a=r.n(i),l=(r(67294),r(11163)),s=r(32905),o=r.n(s);n.Z=function(e){var n=e.children,r=e.external,i=void 0!==r&&r,s=e.variant,c=e.className,u=e.to,d=e.style,f=(0,l.useRouter)();return(0,t.jsx)("button",{type:"button",className:a()(c,o()[s]),onClick:function(){if(u){if(i)return void window.open(u);f.push(u)}},style:d,children:n})}},18121:function(e,n,r){"use strict";r.d(n,{s:function(){return v}});var t=r(85893),i=(r(67294),r(94184)),a=r.n(i),l=r(659),s=r(73973),o=r(83206),c=r(41664),u=r.n(c),d=r(75670),f=r.n(d),v=function(e){var n=e.title,r=e.children,i=e.info,c=e.url,d=e.urlText,v=void 0===d?"":d,h=e.className,_=e.isExternal,x=void 0!==_&&_;return(0,t.jsxs)("div",{className:a()(f().container,h),children:[(0,t.jsxs)("div",{className:f().banner,children:[(0,t.jsx)("h5",{className:f().mainTitle,children:n}),i&&(0,t.jsx)(l.Z,{overlay:i,children:(0,t.jsx)(s.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),c&&(x?(0,t.jsx)("a",{style:{float:"right"},href:c,target:"_blank",rel:"noreferrer noopener",children:v}):(0,t.jsx)(u(),{prefetch:!1,href:c,children:(0,t.jsxs)("a",{style:{float:"right"},children:[v,(0,t.jsx)(o.Z,{})]})}))]}),(0,t.jsx)("div",{className:f().body,children:r})]})}},32905:function(e){e.exports={success:"badge_success__HjgKW",info:"badge_info__eK6GA",warning:"badge_warning__5QJuG",danger:"badge_danger__Lexxg"}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,462,774,888,179],(function(){return n=4917,e(e.s=n);var n}));var n=e.O();_N_E=n}]);