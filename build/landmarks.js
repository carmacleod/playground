!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";var n=r(2);function o(e){return c(e.value)}function a(e){var t;return(t=u(e,"aria-valuetext")).length?t:(t=u(e,"aria-valuenow")).length?t:o(e)}function i(e){switch(Object(n.a)(e)){case"textbox":return function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&-1!==["email","password","search","tel","text","url"].indexOf(r)?o(e):"textarea"===t?o(e):""}(e);case"combobox":return function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&-1!==["email","search","tel","text","url"].indexOf(r)?o(e):""}(e);case"listbox":return function(e){if("select"===e.tagName.toLowerCase()){for(var t=[],r=e.selectedOptions,n=0;n<r.length;n++){var o=c(r[n].value);o.length&&t.push(o)}if(t.length)return t.join(" ")}return""}(e);case"slider":return function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"range"===r?a(e):""}(e);case"spinbutton":return function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"number"===r?a(e):""}(e)}return""}function c(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s+/g," ")}function u(e,t){var r=e.getAttribute(t);return null===r?"":c(r)}function l(e){var t=e.getAttribute("alt");return null!==t&&0===c(t).length}function s(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function f(e,t){var r=t,n=getComputedStyle(e,":before").content,o=getComputedStyle(e,":after").content;return"none"!==n&&(r=n+r),"none"!==o&&(r+=o),r}function d(e,t){var r,o,a="";if(e===t)return"";switch(e.nodeType){case Node.ELEMENT_NODE:if(function(e){switch(e.tagName.toLowerCase()){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}(e))a=u(e,"alt");else if(r=e,o=Object(n.a)(r),-1!==["textbox","combobox","listbox","slider","spinbutton"].indexOf(o))a=i(e);else if(e.hasChildNodes()){for(var l=e.childNodes,s=[],b=0;b<l.length;b++){var m=d(l[b],t);m.length&&s.push(m)}a=s.length?s.join(" "):""}a=f(e,a);break;case Node.TEXT_NODE:a=c(e.textContent)}return a}function b(e,t){var r="";if(e.hasChildNodes()){for(var n=e.childNodes,o=[],a=0;a<n.length;a++){var i=d(n[a],t);i.length&&o.push(i)}r=o.length?o.join(" "):""}return f(e,r)}function m(e,t){var r;return(r=u(e,t)).length?{name:r,source:t}:null}function p(e){var t=e.getAttribute("alt");return null!==t?(t=c(t)).length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}:null}function h(e){var t;return(t=b(e)).length?{name:t,source:"contents"}:null}function g(e){return e.length?{name:e,source:"default"}:null}function y(e,t){var r=e.querySelector(t);if(r){var n=b(r);if(n.length)return{name:n,source:t+" element"}}return null}function v(e){var t,r;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'))&&(t=b(r,e)).length?{name:t,source:"label reference"}:"function"==typeof e.closest&&(r=e.closest("label"))&&(t=b(r,e)).length?{name:t,source:"label encapsulation"}:null}function w(e){var t,r;if((r=e.querySelector("summary"))&&(t=b(r)),e.hasAttribute("open")){if((t+=function(e,t){var r,n=[];return Array.prototype.forEach.call(e.childNodes,(function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(r=b(e)).length&&n.push(r);break;case Node.TEXT_NODE:(r=c(e.textContent)).length&&n.push(r)}})),n.length?n.join(" "):""}(e,(function(e){return"summary"!==e.tagName.toLowerCase()}))).length)return{name:t,source:"contents"}}else if(t.length)return{name:t,source:"summary element"};return null}r.d(t,"l",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return b})),r.d(t,"f",(function(){return m})),r.d(t,"e",(function(){return p})),r.d(t,"g",(function(){return h})),r.d(t,"h",(function(){return g})),r.d(t,"i",(function(){return y})),r.d(t,"k",(function(){return v})),r.d(t,"j",(function(){return w}))},function(e,t,r){"use strict";var n=r(3),o=1e5;var a=r(5);function i(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function c(e,t){return"function"==typeof e.closest&&t.some((function(t){return null!==e.closest(t)}))}function u(e,t){var r=e.parentElement.tagName.toLowerCase();return!!r&&t.some((function(e){return r===e}))}function l(e){var t=e.targetList,r=e.cssClass,i=e.getInfo,c=e.evalInfo,u=e.dndFlag,l=0;return t.forEach((function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,(function(t){if(function(e){return function e(t){if(t.nodeType===Node.DOCUMENT_NODE)return!0;var r=window.getComputedStyle(t,null),n=r.getPropertyValue("display"),o=r.getPropertyValue("visibility"),a=t.getAttribute("hidden"),i=t.getAttribute("aria-hidden");return"none"!==n&&"hidden"!==o&&null===a&&"true"!==i&&e(t.parentNode)}(e)}(t)){var s=i(t,e);c&&c(s,e);var f=t.getBoundingClientRect();e.label=s.accName+" "+e.label;var d=function(e,t,r){var a=Object(n.c)(),i=document.createElement("div");i.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),i.startLeft=t.left+a.x+"px",i.startTop=t.top+a.y+"px",i.style.left=i.startLeft,i.style.top=i.startTop,i.style.width=Math.max(t.width,68)+"px",i.style.height=Math.max(t.height,27)+"px",i.style.borderColor=e.color,i.style.zIndex=o;var c=document.createElement("div");return c.setAttribute("class","oaa-overlay-label"),c.style.backgroundColor=e.color,c.innerHTML=e.label,i.appendChild(c),i}(e,f,r);u&&function(e){function t(e){e.style.zIndex=o+=100}var r=e.firstChild;r.onmousedown=function(e){Object(n.b)(this.parentNode,t,e)},r.ondblclick=function(e){var t;(t=this.parentNode).style.left=t.startLeft,t.style.top=t.startTop}}(d),d.firstChild.title=Object(a.a)(s),document.body.appendChild(d),l+=1}}))})),l}function s(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,(function(e){document.body.removeChild(e)}))}r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return s}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}));var n=r(1),o=r(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"];function c(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return function(e){for(var t=e.split(" "),r=function(e){var r=t[e].toLowerCase(),n=i.find((function(e){return e===r}));if(n)return{v:n}},n=0;n<t.length;n++){var o=r(n);if("object"===a(o))return o.v}return null}(Object(o.a)(e,"role"));switch(t){case"a":case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!Object(n.d)(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"heading";case"header":if(!Object(n.d)(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!Object(o.c)(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(Object(n.c)(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(function(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r||("optgroup"===r&&"select"===n||"datalist"===r)}(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":case"tfoot":case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function u(e){var t=c(e);if(null===t)return!1;return void 0!==["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"].find((function(e){return e===t}))}},function(e,t,r){"use strict";function n(){var e;return{x:void 0===window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,y:void 0===window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset}}function o(e,t,r){var o=n(),a=r.clientX+o.x,i=r.clientY+o.y,c=e.offsetLeft,u=e.offsetTop,l=a-c,s=i-u;function f(t){t||(t=window.event);var r=n();e.style.left=t.clientX+r.x-l+"px",e.style.top=t.clientY+r.y-s+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function d(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",d,!0),document.removeEventListener("mousemove",f,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",d),e.detachEvent("onmouseup",d),e.detachEvent("onmousemove",f),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}t&&t(e),document.addEventListener?(document.addEventListener("mousemove",f,!0),document.addEventListener("mouseup",d,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",f),e.attachEvent("onmouseup",d),e.attachEvent("onlosecapture",d)),r.stopPropagation?r.stopPropagation():r.cancelBubble=!0,r.preventDefault?r.preventDefault():r.returnValue=!1}function a(){Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,r=Object(this),n=r.length>>>0,o=arguments[1],a=0;a<n;a++)if(t=r[a],e.call(o,t,a,r))return t}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})}r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return c}));var n={};function o(e){var t=n.classPrefix;switch(e){case"Forms":return t+"0";case"Headings":return t+"1";case"Images":return t+"2";case"Landmarks":return t+"3";case"Lists":return t+"4";case"Interactive":return t+"5"}return"unrecognizedName"}function a(e){return n.globalPrefix+e}function i(){return n.title}function c(){return n.version}Object.defineProperty(n,"classPrefix",{value:"a11yGfdXALm"}),Object.defineProperty(n,"globalPrefix",{value:"a11y"}),Object.defineProperty(n,"title",{value:"oaa-tools/bookmarklets"}),Object.defineProperty(n,"version",{value:"0.2.2"})},function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(0);function o(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var o=e.type;o&&o.length&&(r+=' [type="'+o+'"]')}if("label"===t){var a=Object(n.a)(e,"for");a.length&&(r+=' [for="'+a+'"]')}if(Object(n.d)(e)){var i=e.id;i&&i.length&&(r+=' [id="'+i+'"]')}if(e.hasAttribute("role")){var c=Object(n.a)(e,"role");c.length&&(r+=' [role="'+c+'"]')}return r}function a(e){var t="",r=e.title,n=e.element,o=e.grpLabels,a=e.accName,i=e.accDesc,c=e.role,u=e.props;if(t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),o&&o.length)for(var l=o.length-1;l>=0;l--)t+="\nGRP. LABEL: "+o[l].name+"\nFROM: "+o[l].source;return a&&(t+="\nACC. NAME: "+a.name+"\nFROM: "+a.source),i&&(t+="\nACC. DESC: "+i.name+"\nFROM: "+i.source),c&&(t+="\nROLE: "+c),u&&(t+="\nPROPERTIES: "+u),t}},function(e,t,r){"use strict";var n=r(4),o=r(1),a=r(3);function i(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=Object(a.c)();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function c(){this.GLOBAL_NAME="a11yMessageDialog",this.CSS_CLASS="oaa-message-dialog"}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){var t=this,r=Object(n.b)(e.appName);if("object"===u(window[r]))return window[r];this.appName=e.appName,this.cssClass=e.cssClass,this.msgText=e.msgText,this.params=e,this.show=!1;var a,i=new c;window.addEventListener("resize",(function(e){Object(o.e)(t.cssClass),i.resize(),t.show=!1})),window[r]=this,a=this.appName,console.log(Object(n.c)()+" : v"+Object(n.d)()+" : "+a)}c.prototype.show=function(e,t){var r,n,o,a,c,u,l=this,s=this.GLOBAL_NAME;window[s]||(window[s]=(o=this.CSS_CLASS,a=function(e){return l.hide()},c=document.createElement("div"),u=document.createElement("button"),c.className=o,i(c),u.onclick=a,c.appendChild(u),document.body.appendChild(c),c)),(r=document.createElement("h2")).innerHTML=e,window[s].appendChild(r),(n=document.createElement("div")).innerHTML=t,window[s].appendChild(n)},c.prototype.hide=function(){var e,t=this.GLOBAL_NAME;window[t]&&((e=window[t])&&document.body.removeChild(e),delete window[t])},c.prototype.resize=function(){var e=this.GLOBAL_NAME;window[e]&&i(window[e])},r.d(t,"a",(function(){return l})),l.prototype.run=function(){var e=new c;e.hide(),this.show=!this.show,this.show?0===Object(o.a)(this.params)&&(e.show(this.appName,this.msgText),this.show=!1):Object(o.e)(this.cssClass)}},function(e,t,r){"use strict";var n=r(0),o=r(2);function a(e){return Object(n.d)(e)?function(e){var t=[];return"function"!=typeof e.closest?t:(function e(t,r){var o=t.closest("fieldset");if(o){var a=o.querySelector("legend");if(a){var i=Object(n.b)(a);i.length&&r.push({name:i,source:"fieldset/legend"})}e(o.parentNode,r)}}(e,t),t)}(e):[]}function i(e,t){var r,o,a,i,u=Object(n.a)(e,t),l=[];if(u.length)for(r=u.split(" "),o=0;o<r.length;o++)(a=document.getElementById(r[o]))&&(i=c(a,!0))&&i.name.length&&l.push(i.name);return l.length?{name:l.join(" "),source:t}:null}function c(e,t){var r=null;return t||(r=i(e,"aria-labelledby")),null===r&&(r=Object(n.f)(e,"aria-label")),null===r&&(r=function(e,t){var r=e.tagName.toLowerCase(),a=Object(o.a)(e),i=null;if(a&&("presentation"===a||"none"===a))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(i=Object(n.k)(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":null===(i=Object(n.k)(e))&&(i=Object(n.f)(e,"placeholder"));break;case"button":i=Object(n.f)(e,"value");break;case"reset":null===(i=Object(n.f)(e,"value"))&&(i=Object(n.h)("Reset"));break;case"submit":null===(i=Object(n.f)(e,"value"))&&(i=Object(n.h)("Submit"));break;case"image":null===(i=Object(n.e)(e))&&(i=Object(n.f)(e,"value"));break;default:i=Object(n.k)(e)}break;case"button":case"label":i=Object(n.g)(e);break;case"keygen":case"meter":case"output":case"progress":case"select":i=Object(n.k)(e);break;case"textarea":null===(i=Object(n.k)(e))&&(i=Object(n.f)(e,"placeholder"));break;case"audio":case"embed":i={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":i=Object(n.f)(e,"title");break;case"img":case"area":i=Object(n.e)(e);break;case"object":i={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":i=Object(n.i)(e,"title");break;case"video":i={name:"NOT YET IMPLEMENTED",source:""};break;case"a":i=Object(n.g)(e);break;case"details":i=Object(n.j)(e);break;case"figure":i=Object(n.i)(e,"figcaption");break;case"table":i=Object(n.i)(e,"caption");break;default:(Object(o.b)(e)||t)&&(i=Object(n.g)(e))}return null===i&&(i=Object(n.f)(e,"title")),i}(e,t)),r}var u=r(5);function l(e,t){this.title=t,this.element=Object(u.b)(e),this.grpLabels=a(e),this.accName=c(e),this.accDesc=function(e,t){var r=null;return t||(r=i(e,"aria-describedby")),null===r&&(r=Object(n.f)(e,"title")),r}(e),this.role=Object(o.a)(e),function(e,t){if(null===e||null===t)return!1;var r=e.name,n=t.name;return"string"==typeof r&&"string"==typeof n&&r.toLowerCase().includes(n.toLowerCase())}(this.accName,this.accDesc)&&(this.accDesc=null)}r.d(t,"a",(function(){return l})),l.prototype.addProps=function(e){this.props=e}},,,,,function(e,t,r){"use strict";r.r(t);var n=r(6),o=r(7),a=r(4),i=r(1),c=r(3);(function(){Object(c.a)();var e=[{selector:'aside:not([role]), [role~="complementary"], [role~="COMPLEMENTARY"]',color:"maroon",label:"complementary"},{selector:'footer, [role~="contentinfo"], [role~="CONTENTINFO"]',filter:function(e){return"footer"!==e.tagName.toLowerCase()||!Object(i.d)(e,["article","section"])},color:"olive",label:"contentinfo"},{selector:'[role~="application"], [role~="APPLICATION"]',color:"black",label:"application"},{selector:'nav, [role~="navigation"], [role~="NAVIGATION"]',color:"green",label:"navigation"},{selector:'[role~="region"][aria-labelledby], [role~="REGION"][aria-labelledby]',color:"teal",label:"region"},{selector:'[role~="region"][aria-label], [role~="REGION"][aria-label]',color:"teal",label:"region"},{selector:"section[aria-labelledby], section[aria-label]",color:"teal",label:"region"},{selector:'header, [role~="banner"], [role~="BANNER"]',filter:function(e){return"header"!==e.tagName.toLowerCase()||!Object(i.d)(e,["article","section"])},color:"gray",label:"banner"},{selector:'[role~="search"], [role~="SEARCH"]',color:"purple",label:"search"},{selector:'main, [role~="main"], [role~="MAIN"]',color:"navy",label:"main"}],t=e.map((function(e){return"<li>"+e.selector+"</li>"})).join(""),r={appName:"Landmarks",cssClass:Object(a.a)("Landmarks"),msgText:"No elements with ARIA Landmark roles found: <ul>"+t+"</ul>",targetList:e,getInfo:function(e,t){return new o.a(e,"LANDMARK INFO")},dndFlag:!0};return new n.a(r)})().run()}]);