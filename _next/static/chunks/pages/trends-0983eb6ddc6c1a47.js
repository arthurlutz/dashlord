(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{37434:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var l=t(85893),u=t(9008),d=t(67294),v=t(45697),r=t.n(v);function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function Z(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var s=(0,d.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,v=void 0===u?24:u,r=Z(e,["color","size"]);return d.createElement("svg",T({ref:a,xmlns:"http://www.w3.org/2000/svg",width:v,height:v,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),d.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),d.createElement("polyline",{points:"17 6 23 6 23 12"}))}));s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="TrendingUp";var o=s;function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function n(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var h=(0,d.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,v=void 0===u?24:u,r=n(e,["color","size"]);return d.createElement("svg",i({ref:a,xmlns:"http://www.w3.org/2000/svg",width:v,height:v,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),d.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),d.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},h.displayName="TrendingDown";var c=h,p=t(74041),g=t(18121),f=t(49384),_={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},G=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=_[e],l=a[0],u=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,f.BE)(u)-(0,f.BE)(l):t.reverse?l-u:u-l}(e.key,e.values)>0?(0,l.jsx)(o,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(c,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return _[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],m=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in _})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var u=l[0],d=l[l.length-1],v=_[t].treshold;(!v||Math.abs(u-d)>(v||0))&&u!==d&&(a[t]=[u,d])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(g.s,{title:(0,f.p5)(e),url:"/url/".concat(encodeURIComponent((0,f.N0)(e))),children:(0,l.jsx)(p.Table,{columns:G,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},b=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"httpGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A+"}],"dependabotGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"D"}],"dependabotCount":[{"date":"2021-06-23T16:01:06.000Z","value":7}],"testsslGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"B"}],"cookiesCount":[{"date":"2021-06-23T16:01:06.000Z","value":2}],"trackersGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"trackersCount":[{"date":"2021-06-23T16:01:06.000Z","value":0}],"lighthouse_performance":[{"date":"2021-06-23T16:01:06.000Z","value":0.5}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:01:06.000Z","value":0.93}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:01:06.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-06-23T16:01:06.000Z","value":0.83}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-06-23T16:01:06.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"D"}]},"https://beta.gouv.fr":{"httpGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"D"}],"testsslGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"B"}],"cookiesCount":[{"date":"2021-06-23T16:01:06.000Z","value":2}],"trackersGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"C"}],"trackersCount":[{"date":"2021-06-23T16:01:06.000Z","value":6}],"lighthouse_performance":[{"date":"2021-06-23T16:01:06.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:01:06.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:01:06.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-06-23T16:01:06.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-06-23T16:01:06.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:01:06.000Z","value":"B"}]},"https://arthur.lutz.im":{"httpGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"},{"date":"2021-09-26T04:52:37.000Z","value":"B+"}],"testsslGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"cookiesCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"trackersGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"C"}],"trackersCount":[{"date":"2021-06-23T16:19:56.000Z","value":8},{"date":"2021-09-24T04:51:08.000Z","value":6}],"lighthouse_performance":[{"date":"2021-06-23T16:19:56.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:19:56.000Z","value":0.64}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"C"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:19:56.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-06-23T16:19:56.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-06-23T16:19:56.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"D"}],"apdex":[{"date":"2021-06-24T09:00:06.000Z","value":1},{"date":"2021-07-15T04:47:44.000Z","value":0.95},{"date":"2021-07-16T04:50:54.000Z","value":1},{"date":"2021-07-20T04:52:15.000Z","value":0.95},{"date":"2021-07-21T04:58:41.000Z","value":1},{"date":"2021-08-19T04:53:58.000Z","value":0.95},{"date":"2021-08-20T04:57:37.000Z","value":1},{"date":"2021-08-27T04:53:25.000Z","value":0.95},{"date":"2021-08-28T04:49:41.000Z","value":1},{"date":"2021-09-18T04:49:04.000Z","value":0.95},{"date":"2021-09-19T04:53:42.000Z","value":1},{"date":"2022-01-06T04:45:22.000Z","value":0.889},{"date":"2022-01-07T04:44:22.000Z","value":1}],"apdexGrade":[{"date":"2021-06-24T09:00:06.000Z","value":"A"},{"date":"2021-07-15T04:47:44.000Z","value":"F"},{"date":"2021-07-16T04:50:54.000Z","value":"A"},{"date":"2021-07-20T04:52:15.000Z","value":"F"},{"date":"2021-07-21T04:58:41.000Z","value":"A"},{"date":"2021-08-19T04:53:58.000Z","value":"F"},{"date":"2021-08-20T04:57:37.000Z","value":"A"},{"date":"2021-08-27T04:53:25.000Z","value":"F"},{"date":"2021-08-28T04:49:41.000Z","value":"A"},{"date":"2021-09-18T04:49:04.000Z","value":"F"},{"date":"2021-09-19T04:53:42.000Z","value":"A"},{"date":"2022-01-06T04:45:22.000Z","value":"F"},{"date":"2022-01-07T04:44:22.000Z","value":"A"}],"uptime":[{"date":"2021-06-24T09:00:06.000Z","value":100},{"date":"2022-01-17T04:45:46.000Z","value":99.465},{"date":"2022-02-17T04:43:01.000Z","value":100}],"uptimeGrade":[{"date":"2021-06-24T09:00:06.000Z","value":"A"}],"nmapGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-06-29T04:46:59.000Z","value":5}],"nmapOpenPortsGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-01-02T10:54:44.000Z","value":false},{"date":"2022-01-29T04:42:46.000Z","value":true},{"date":"2022-02-13T04:43:09.000Z","value":false}],"testsslExpireDate":[{"date":"2022-01-02T10:54:44.000Z","value":"2022-02-28T04:28:00.000Z"},{"date":"2022-02-13T04:43:09.000Z","value":"2022-05-13T04:28:00.000Z"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://arthur.lutz.im/blog/":{"httpGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"},{"date":"2021-09-26T04:52:37.000Z","value":"B+"}],"testsslGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"cookiesCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"trackersGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"trackersCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"lighthouse_performance":[{"date":"2021-06-23T16:19:56.000Z","value":0.5318906784057618},{"date":"2021-07-14T04:48:52.000Z","value":0.5318744659423829},{"date":"2021-07-15T04:47:44.000Z","value":0.5318906784057618},{"date":"2021-07-20T04:52:15.000Z","value":0.5514743804931641},{"date":"2021-07-21T04:58:41.000Z","value":0.5464393615722656},{"date":"2021-08-02T04:49:18.000Z","value":0.5466039657592774},{"date":"2021-08-03T04:53:27.000Z","value":0.5464393615722656},{"date":"2021-08-06T04:50:47.000Z","value":0.5464231491088867},{"date":"2021-08-07T04:51:00.000Z","value":0.5464393615722656},{"date":"2021-08-16T04:56:35.000Z","value":0.5464420318603516},{"date":"2021-08-17T04:53:07.000Z","value":0.5427604675292969},{"date":"2021-08-18T04:50:54.000Z","value":0.542744255065918},{"date":"2021-08-19T04:53:58.000Z","value":0.5427604675292969},{"date":"2021-08-20T04:57:37.000Z","value":0.542744255065918},{"date":"2021-08-21T04:51:01.000Z","value":0.5427604675292969},{"date":"2021-08-26T04:51:10.000Z","value":0.542744255065918},{"date":"2021-08-27T04:53:25.000Z","value":0.5427604675292969},{"date":"2021-08-28T04:49:41.000Z","value":0.542744255065918},{"date":"2021-08-30T04:55:12.000Z","value":0.5427604675292969},{"date":"2021-09-04T04:50:57.000Z","value":0.542744255065918},{"date":"2021-09-05T04:48:32.000Z","value":0.5427604675292969},{"date":"2021-09-09T04:50:02.000Z","value":0.542758560180664},{"date":"2021-09-11T04:48:32.000Z","value":0.5427423477172851},{"date":"2021-09-12T04:50:20.000Z","value":0.542758560180664},{"date":"2021-09-24T04:51:08.000Z","value":0.5427423477172851},{"date":"2021-09-25T04:53:50.000Z","value":0.542758560180664},{"date":"2022-01-02T10:54:44.000Z","value":0.5422267913818359},{"date":"2022-01-16T04:45:44.000Z","value":0.542210578918457},{"date":"2022-01-17T04:45:46.000Z","value":0.5422267913818359},{"date":"2022-01-20T04:43:25.000Z","value":0.542210578918457},{"date":"2022-01-21T04:47:47.000Z","value":0.5422267913818359},{"date":"2022-01-26T04:41:56.000Z","value":0.5413343429565429},{"date":"2022-01-29T04:42:46.000Z","value":0.5415302276611328},{"date":"2022-01-30T04:41:39.000Z","value":0.5413343429565429},{"date":"2022-02-11T04:42:45.000Z","value":0.5401966094970703},{"date":"2022-02-12T04:44:34.000Z","value":0.5413343429565429},{"date":"2022-02-23T04:42:47.000Z","value":0.5405410766601563},{"date":"2022-02-25T04:44:38.000Z","value":0.5}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"C"},{"date":"2022-02-25T04:44:38.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:19:56.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:19:56.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-06-23T16:19:56.000Z","value":0.77}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-06-23T16:19:56.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"D"}],"nmapGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-06-29T04:46:59.000Z","value":5}],"nmapOpenPortsGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-01-02T10:54:44.000Z","value":false},{"date":"2022-01-29T04:42:46.000Z","value":true},{"date":"2022-02-13T04:43:09.000Z","value":false}],"testsslExpireDate":[{"date":"2022-01-02T10:54:44.000Z","value":"2022-02-28T04:28:00.000Z"},{"date":"2022-02-13T04:43:09.000Z","value":"2022-05-13T04:28:00.000Z"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.festivalparminous.org/":{"httpGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B+"}],"testsslGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"cookiesCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"trackersGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"trackersCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"lighthouse_performance":[{"date":"2021-06-23T16:19:56.000Z","value":0.9850967407226563},{"date":"2021-07-21T04:58:41.000Z","value":0.9800661087036133},{"date":"2021-07-23T04:50:20.000Z","value":0.9814588546752929},{"date":"2021-07-26T04:51:18.000Z","value":0.9816068649291992},{"date":"2021-07-27T04:51:15.000Z","value":0.9814588546752929},{"date":"2021-08-16T04:56:35.000Z","value":0.9814615249633789},{"date":"2021-09-10T04:53:19.000Z","value":0.9814599990844727},{"date":"2022-01-02T10:54:44.000Z","value":0.8125118255615235},{"date":"2022-01-26T04:41:56.000Z","value":0.8116250991821289},{"date":"2022-01-27T04:43:34.000Z","value":0.8099714279174804},{"date":"2022-02-23T04:42:47.000Z","value":0.8079851150512696}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"},{"date":"2022-01-02T10:54:44.000Z","value":"B"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:19:56.000Z","value":0.93},{"date":"2022-01-27T04:43:34.000Z","value":0.9}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:19:56.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-06-23T16:19:56.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-06-23T16:19:56.000Z","value":0.5}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"D"}],"apdex":[{"date":"2021-06-24T09:00:06.000Z","value":1},{"date":"2021-07-23T04:50:20.000Z","value":0.944},{"date":"2021-07-24T04:49:39.000Z","value":1},{"date":"2021-08-12T04:50:59.000Z","value":0.944},{"date":"2021-08-13T04:54:58.000Z","value":1},{"date":"2021-09-12T04:50:20.000Z","value":0.944},{"date":"2021-09-13T04:50:57.000Z","value":1}],"apdexGrade":[{"date":"2021-06-24T09:00:06.000Z","value":"A"},{"date":"2021-07-23T04:50:20.000Z","value":"F"},{"date":"2021-07-24T04:49:39.000Z","value":"A"},{"date":"2021-08-12T04:50:59.000Z","value":"F"},{"date":"2021-08-13T04:54:58.000Z","value":"A"},{"date":"2021-09-12T04:50:20.000Z","value":"F"},{"date":"2021-09-13T04:50:57.000Z","value":"A"}],"uptime":[{"date":"2021-06-24T09:00:06.000Z","value":100}],"uptimeGrade":[{"date":"2021-06-24T09:00:06.000Z","value":"A"}],"nmapGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"},{"date":"2022-03-09T04:43:50.000Z","value":"B"},{"date":"2022-03-10T04:43:06.691Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-06-29T04:46:59.000Z","value":10}],"nmapOpenPortsGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-01-02T10:54:44.000Z","value":false},{"date":"2022-02-19T04:41:56.000Z","value":true},{"date":"2022-03-06T04:43:19.000Z","value":false}],"testsslExpireDate":[{"date":"2022-01-02T10:54:44.000Z","value":"2022-03-21T04:27:00.000Z"},{"date":"2022-03-06T04:43:19.000Z","value":"2022-06-03T04:27:00.000Z"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.soundsmag.org/":{"httpGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"}],"testsslGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"cookiesCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"trackersGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"trackersCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"lighthouse_performance":[{"date":"2021-06-23T16:19:56.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:19:56.000Z","value":0.94},{"date":"2021-08-16T04:56:35.000Z","value":0.95}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:19:56.000Z","value":0.73},{"date":"2021-08-16T04:56:35.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"},{"date":"2021-08-16T04:56:35.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-06-23T16:19:56.000Z","value":0.77},{"date":"2021-08-16T04:56:35.000Z","value":0.68}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2021-06-23T16:19:56.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"D"}],"nmapGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-06-29T04:46:59.000Z","value":10}],"nmapOpenPortsGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-01-02T10:54:44.000Z","value":false},{"date":"2022-02-20T04:43:15.000Z","value":true},{"date":"2022-03-07T04:42:53.000Z","value":false}],"testsslExpireDate":[{"date":"2022-01-02T10:54:44.000Z","value":"2022-03-22T04:26:00.000Z"},{"date":"2022-03-07T04:42:53.000Z","value":"2022-06-04T04:25:00.000Z"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.cartographiepublicitaire.org/":{"httpGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"B"}],"testsslGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"cookiesCount":[{"date":"2021-06-23T16:19:56.000Z","value":0}],"trackersGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"F"}],"trackersCount":[{"date":"2021-06-23T16:19:56.000Z","value":52},{"date":"2021-06-24T09:00:06.000Z","value":53},{"date":"2021-06-29T04:46:59.000Z","value":55},{"date":"2021-06-30T04:49:41.000Z","value":53},{"date":"2021-07-04T04:48:21.000Z","value":55},{"date":"2021-07-06T04:47:27.000Z","value":53},{"date":"2021-07-07T04:54:03.000Z","value":55},{"date":"2021-07-08T04:48:11.000Z","value":53},{"date":"2021-07-09T04:49:10.000Z","value":55},{"date":"2021-07-11T04:46:32.000Z","value":53},{"date":"2021-07-12T04:49:31.000Z","value":51},{"date":"2021-07-14T04:48:52.000Z","value":53},{"date":"2021-07-15T04:47:44.000Z","value":52},{"date":"2021-07-16T04:50:54.000Z","value":50},{"date":"2021-07-17T04:47:51.000Z","value":53},{"date":"2021-07-18T04:52:06.000Z","value":55},{"date":"2021-07-22T04:47:21.000Z","value":53},{"date":"2021-07-25T04:49:12.000Z","value":55},{"date":"2021-07-26T04:51:18.000Z","value":53},{"date":"2021-07-27T04:51:15.000Z","value":55},{"date":"2021-07-28T04:49:38.000Z","value":53},{"date":"2021-07-29T04:50:42.000Z","value":55},{"date":"2021-08-01T04:49:08.000Z","value":53},{"date":"2021-08-04T04:51:31.000Z","value":55},{"date":"2021-08-09T05:03:51.000Z","value":53},{"date":"2021-08-10T04:51:03.000Z","value":55},{"date":"2021-08-11T04:57:05.000Z","value":53},{"date":"2021-08-15T04:50:57.000Z","value":55},{"date":"2021-08-18T04:50:54.000Z","value":53},{"date":"2021-08-19T04:53:58.000Z","value":55},{"date":"2021-08-26T04:51:10.000Z","value":53},{"date":"2021-08-27T04:53:25.000Z","value":55},{"date":"2021-08-31T04:52:21.000Z","value":53},{"date":"2021-09-01T04:51:41.000Z","value":51},{"date":"2021-09-02T04:53:15.000Z","value":52}],"lighthouse_performance":[{"date":"2021-06-23T16:19:56.000Z","value":0.07229270935058593},{"date":"2021-06-24T09:00:06.000Z","value":0.07084903717041016},{"date":"2021-06-29T04:46:59.000Z","value":0.07347888946533203},{"date":"2021-06-30T04:49:41.000Z","value":0.07360191345214843},{"date":"2021-07-01T04:46:14.000Z","value":0.0709442138671875},{"date":"2021-07-02T04:47:42.000Z","value":0.07075691223144531},{"date":"2021-07-03T04:47:13.000Z","value":0.07076091766357422},{"date":"2021-07-04T04:48:21.000Z","value":0.0736154556274414},{"date":"2021-07-05T04:46:30.000Z","value":0.07413139343261718},{"date":"2021-07-06T04:47:27.000Z","value":0.07407703399658203},{"date":"2021-07-07T04:54:03.000Z","value":0.07343196868896484},{"date":"2021-07-08T04:48:11.000Z","value":0.0736175537109375},{"date":"2021-07-09T04:49:10.000Z","value":0.07369384765625},{"date":"2021-07-10T04:48:24.000Z","value":0.07349395751953125},{"date":"2021-07-11T04:46:32.000Z","value":0.07094078063964844},{"date":"2021-07-12T04:49:31.000Z","value":0.07347145080566406},{"date":"2021-07-14T04:48:52.000Z","value":0.07071285247802735},{"date":"2021-07-15T04:47:44.000Z","value":0.0709268569946289},{"date":"2021-07-16T04:50:54.000Z","value":0.07650146484375},{"date":"2021-07-17T04:47:51.000Z","value":0.07008838653564453},{"date":"2021-07-18T04:52:06.000Z","value":0.07295913696289062},{"date":"2021-07-19T04:53:27.000Z","value":0.07253952026367187},{"date":"2021-07-20T04:52:15.000Z","value":0.07244949340820313},{"date":"2021-07-21T04:58:41.000Z","value":0.06765022277832031},{"date":"2021-07-22T04:47:21.000Z","value":0.06572227478027344},{"date":"2021-07-23T04:50:20.000Z","value":0.06869163513183593},{"date":"2021-07-24T04:49:39.000Z","value":0.06530990600585937},{"date":"2021-07-25T04:49:12.000Z","value":0.06774539947509765},{"date":"2021-07-26T04:51:18.000Z","value":0.06519508361816406},{"date":"2021-07-27T04:51:15.000Z","value":0.06755828857421875},{"date":"2021-07-28T04:49:38.000Z","value":0.06431617736816406},{"date":"2021-07-29T04:50:42.000Z","value":0.0680816650390625},{"date":"2021-07-30T04:50:19.000Z","value":0.06755027770996094},{"date":"2021-07-31T04:50:54.000Z","value":0.06755237579345703},{"date":"2021-08-01T04:49:08.000Z","value":0.06510982513427735},{"date":"2021-08-02T04:49:18.000Z","value":0.07334442138671875},{"date":"2021-08-03T04:53:27.000Z","value":0.0728952407836914},{"date":"2021-08-04T04:51:31.000Z","value":0.067718505859375},{"date":"2021-08-05T04:54:07.000Z","value":0.06759395599365234},{"date":"2021-08-06T04:50:47.000Z","value":0.06797580718994141},{"date":"2021-08-07T04:51:00.000Z","value":0.06759777069091796},{"date":"2021-08-08T04:51:23.000Z","value":0.0676919937133789},{"date":"2021-08-09T05:03:51.000Z","value":0.06767501831054687},{"date":"2021-08-10T04:51:03.000Z","value":0.06769180297851562},{"date":"2021-08-11T04:57:05.000Z","value":0.06501178741455078},{"date":"2021-08-12T04:50:59.000Z","value":0.06479301452636718},{"date":"2021-08-13T04:54:58.000Z","value":0.0674966812133789},{"date":"2021-08-14T04:54:22.000Z","value":0.0685201644897461},{"date":"2021-08-15T04:50:57.000Z","value":0.06760940551757813},{"date":"2021-08-16T04:56:35.000Z","value":0.06749916076660156},{"date":"2021-08-17T04:53:07.000Z","value":0.06759090423583984},{"date":"2021-08-18T04:50:54.000Z","value":0.06502056121826172},{"date":"2021-08-19T04:53:58.000Z","value":0.06760311126708984},{"date":"2021-08-20T04:57:37.000Z","value":0.06749267578125},{"date":"2021-08-21T04:51:01.000Z","value":0.06747856140136718},{"date":"2021-08-22T04:53:32.000Z","value":0.06751136779785157},{"date":"2021-08-23T04:53:18.000Z","value":0.06748752593994141},{"date":"2021-08-24T04:53:34.000Z","value":0.06748943328857422},{"date":"2021-08-25T04:54:06.000Z","value":0.06748294830322266},{"date":"2021-08-26T04:51:10.000Z","value":0.065191650390625},{"date":"2021-08-27T04:53:25.000Z","value":0.06756610870361328},{"date":"2021-08-28T04:49:41.000Z","value":0.06761817932128907},{"date":"2021-08-29T04:54:27.000Z","value":0.0675008773803711},{"date":"2021-08-30T04:55:12.000Z","value":0.0675079345703125},{"date":"2021-08-31T04:52:21.000Z","value":0.06503734588623047},{"date":"2021-09-01T04:51:41.000Z","value":0.06740608215332031},{"date":"2021-09-02T04:53:15.000Z","value":0.07316055297851562}],"lighthouse_performanceGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2021-06-23T16:19:56.000Z","value":0.9}],"lighthouse_accessibilityGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-06-23T16:19:56.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-06-23T16:19:56.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-06-23T16:19:56.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-06-23T16:19:56.000Z","value":"D"}],"nmapGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2021-06-29T04:46:59.000Z","value":10}],"nmapOpenPortsGrade":[{"date":"2021-06-29T04:46:59.000Z","value":"F"}]},"https://cartographiepublicitaire.eu.org":{"httpGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"B"}],"nmapGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-01-02T10:54:44.000Z","value":10}],"nmapOpenPortsGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-01-02T10:54:44.000Z","value":false},{"date":"2022-01-03T04:45:56.000Z","value":true},{"date":"2022-01-18T04:47:35.000Z","value":false}],"testsslExpireDate":[{"date":"2022-01-02T10:54:44.000Z","value":"2022-02-01T14:30:00.000Z"},{"date":"2022-01-18T04:47:35.000Z","value":"2022-04-17T04:25:00.000Z"}],"testsslGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"A"}],"cookiesCount":[{"date":"2022-01-02T10:54:44.000Z","value":0}],"trackersGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"F"},{"date":"2022-01-20T04:43:25.000Z","value":"C"},{"date":"2022-01-21T04:47:47.000Z","value":"F"}],"trackersCount":[{"date":"2022-01-02T10:54:44.000Z","value":53},{"date":"2022-01-03T04:45:56.000Z","value":55},{"date":"2022-01-05T04:45:19.000Z","value":57},{"date":"2022-01-08T04:45:28.000Z","value":55},{"date":"2022-01-10T04:45:20.000Z","value":57},{"date":"2022-01-13T04:46:31.000Z","value":54},{"date":"2022-01-14T04:46:40.000Z","value":57},{"date":"2022-01-16T04:45:44.000Z","value":54},{"date":"2022-01-17T04:45:46.000Z","value":57},{"date":"2022-01-19T04:43:00.000Z","value":55},{"date":"2022-01-20T04:43:25.000Z","value":9},{"date":"2022-01-21T04:47:47.000Z","value":55},{"date":"2022-01-22T04:41:43.000Z","value":57},{"date":"2022-01-23T04:43:46.000Z","value":54},{"date":"2022-01-24T04:42:36.000Z","value":57},{"date":"2022-01-25T04:44:15.000Z","value":55},{"date":"2022-01-26T04:41:56.000Z","value":57},{"date":"2022-01-28T04:44:10.000Z","value":55},{"date":"2022-01-30T04:41:39.000Z","value":57},{"date":"2022-01-31T04:43:19.000Z","value":55},{"date":"2022-02-01T04:43:14.000Z","value":57},{"date":"2022-02-10T04:43:08.000Z","value":55},{"date":"2022-02-12T04:44:34.000Z","value":57},{"date":"2022-02-18T04:44:16.000Z","value":55},{"date":"2022-02-19T04:41:56.000Z","value":57},{"date":"2022-02-21T04:45:35.000Z","value":51},{"date":"2022-02-22T04:42:34.000Z","value":55},{"date":"2022-02-23T04:42:47.000Z","value":57},{"date":"2022-02-27T04:45:44.000Z","value":55},{"date":"2022-03-01T04:51:09.000Z","value":54},{"date":"2022-03-02T04:44:25.000Z","value":57},{"date":"2022-03-05T04:47:03.000Z","value":55},{"date":"2022-03-07T04:42:53.000Z","value":57},{"date":"2022-03-08T04:53:33.000Z","value":54},{"date":"2022-03-09T04:43:50.000Z","value":53}],"lighthouse_performance":[{"date":"2022-01-02T10:54:44.000Z","value":0.07220115661621093},{"date":"2022-01-03T04:45:56.000Z","value":0.0669485092163086},{"date":"2022-01-04T04:48:12.000Z","value":0.06683540344238281},{"date":"2022-01-05T04:45:19.000Z","value":0.06683769226074218},{"date":"2022-01-06T04:45:22.000Z","value":0.06722030639648438},{"date":"2022-01-07T04:44:22.000Z","value":0.06682491302490234},{"date":"2022-01-08T04:45:28.000Z","value":0.06457881927490235},{"date":"2022-01-09T04:46:00.000Z","value":0.06406574249267578},{"date":"2022-01-10T04:45:20.000Z","value":0.06721229553222656},{"date":"2022-01-11T04:45:57.000Z","value":0.06668815612792969},{"date":"2022-01-12T04:45:26.000Z","value":0.06718978881835938},{"date":"2022-01-13T04:46:31.000Z","value":0.07237281799316406},{"date":"2022-01-14T04:46:40.000Z","value":0.06695938110351562},{"date":"2022-01-15T04:45:29.000Z","value":0.06681613922119141},{"date":"2022-01-16T04:45:44.000Z","value":0.07231254577636718},{"date":"2022-01-17T04:45:46.000Z","value":0.06694965362548828},{"date":"2022-01-18T04:47:35.000Z","value":0.06696052551269531},{"date":"2022-01-19T04:43:00.000Z","value":0.06694011688232422},{"date":"2022-01-20T04:43:25.000Z","value":0.06722373962402343},{"date":"2022-01-21T04:47:47.000Z","value":0.0667266845703125},{"date":"2022-01-22T04:41:43.000Z","value":0.0670745849609375},{"date":"2022-01-23T04:43:46.000Z","value":0.0676034927368164},{"date":"2022-01-24T04:42:36.000Z","value":0.06646995544433594},{"date":"2022-01-25T04:44:15.000Z","value":0.06651744842529297},{"date":"2022-01-26T04:41:56.000Z","value":0.06606636047363282},{"date":"2022-01-27T04:43:34.000Z","value":0.06563339233398438},{"date":"2022-01-28T04:44:10.000Z","value":0.06610107421875},{"date":"2022-01-29T04:42:46.000Z","value":0.0656646728515625},{"date":"2022-01-30T04:41:39.000Z","value":0.06612987518310547},{"date":"2022-01-31T04:43:19.000Z","value":0.06574287414550781},{"date":"2022-02-01T04:43:14.000Z","value":0.06558361053466796},{"date":"2022-02-02T04:40:30.000Z","value":0.0656423568725586},{"date":"2022-02-03T04:42:25.000Z","value":0.06566200256347657},{"date":"2022-02-04T04:37:51.000Z","value":0.0655813217163086},{"date":"2022-02-10T04:43:08.000Z","value":0.06559219360351562},{"date":"2022-02-11T04:42:45.000Z","value":0.058287620544433594},{"date":"2022-02-12T04:44:34.000Z","value":0.05824756622314453},{"date":"2022-02-13T04:43:09.000Z","value":0.06572608947753907},{"date":"2022-02-14T04:43:49.000Z","value":0.06562843322753906},{"date":"2022-02-17T04:43:01.000Z","value":0.05827789306640625},{"date":"2022-02-18T04:44:16.000Z","value":0.06301708221435547},{"date":"2022-02-19T04:41:56.000Z","value":0.06560211181640625},{"date":"2022-02-20T04:43:15.000Z","value":0.06556987762451172},{"date":"2022-02-21T04:45:35.000Z","value":0.07231597900390625},{"date":"2022-02-22T04:42:34.000Z","value":0.06557273864746094},{"date":"2022-02-23T04:42:47.000Z","value":0.06360950469970703},{"date":"2022-02-24T04:44:31.000Z","value":0.06405925750732422},{"date":"2022-02-25T04:44:38.000Z","value":0.06370487213134765},{"date":"2022-02-26T04:42:40.000Z","value":0.06357307434082031},{"date":"2022-02-27T04:45:44.000Z","value":0.06373023986816406},{"date":"2022-02-28T04:56:48.000Z","value":0.056244850158691406},{"date":"2022-03-01T04:51:09.000Z","value":0.05981254577636719},{"date":"2022-03-02T04:44:25.000Z","value":0.06411304473876953},{"date":"2022-03-03T04:44:05.000Z","value":0.06408176422119141},{"date":"2022-03-04T04:45:46.000Z","value":0.06376018524169921},{"date":"2022-03-05T04:47:03.000Z","value":0.06362037658691407},{"date":"2022-03-06T04:43:19.000Z","value":0.06421947479248047},{"date":"2022-03-07T04:42:53.000Z","value":0.06361370086669922},{"date":"2022-03-08T04:53:33.000Z","value":0.06911296844482422},{"date":"2022-03-09T04:43:50.000Z","value":0.06225013732910156},{"date":"2022-03-10T04:43:06.691Z","value":0.061272048950195314}],"lighthouse_performanceGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-01-02T10:54:44.000Z","value":0.9}],"lighthouse_accessibilityGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-01-02T10:54:44.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-01-02T10:54:44.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-01-02T10:54:44.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2022-01-02T10:54:44.000Z","value":"D"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),y=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.default,{children:(0,l.jsx)("title",{children:"DashLord - evolutions"})}),(0,l.jsx)(m,{trends:b})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return i}});var l=t(85893),u=(t(67294),t(94184)),d=t.n(u),v=t(79223),r=t(73973),T=t(83206),Z=t(41664),s=t(75670),o=t.n(s),i=function(e){var a=e.title,t=e.children,u=e.info,s=e.url,i=e.urlText,n=void 0===i?"":i,h=e.className,c=e.isExternal,p=void 0!==c&&c;return(0,l.jsxs)("div",{className:d()(o().container,h),children:[(0,l.jsxs)("div",{className:o().banner,children:[(0,l.jsx)("h5",{className:o().mainTitle,children:a}),u&&(0,l.jsx)(v.Z,{overlay:u,children:(0,l.jsx)(r.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),s&&(p?(0,l.jsx)("a",{style:{float:"right"},href:s,target:"_blank",rel:"noreferrer noopener",children:n}):(0,l.jsx)(Z.default,{prefetch:!1,href:s,children:(0,l.jsxs)("a",{style:{float:"right"},children:[n,(0,l.jsx)(T.Z,{})]})}))]}),(0,l.jsx)("div",{className:o().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return a=37434,e(e.s=a);var a}));var a=e.O();_N_E=a}]);