!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";var r=n(2);function o(e){return u(e.value)}function a(e){var t;return(t=c(e,"aria-valuetext")).length?t:(t=c(e,"aria-valuenow")).length?t:o(e)}function i(e){switch(Object(r.a)(e)){case"textbox":return function(e){var t=e.tagName.toLowerCase(),n=e.type;return"input"===t&&-1!==["email","password","search","tel","text","url"].indexOf(n)?o(e):"textarea"===t?o(e):""}(e);case"combobox":return function(e){var t=e.tagName.toLowerCase(),n=e.type;return"input"===t&&-1!==["email","search","tel","text","url"].indexOf(n)?o(e):""}(e);case"listbox":return function(e){if("select"===e.tagName.toLowerCase()){for(var t=[],n=e.selectedOptions,r=0;r<n.length;r++){var o=u(n[r].value);o.length&&t.push(o)}if(t.length)return t.join(" ")}return""}(e);case"slider":return function(e){var t=e.tagName.toLowerCase(),n=e.type;return"input"===t&&"range"===n?a(e):""}(e);case"spinbutton":return function(e){var t=e.tagName.toLowerCase(),n=e.type;return"input"===t&&"number"===n?a(e):""}(e)}return""}function u(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s+/g," ")}function c(e,t){var n=e.getAttribute(t);return null===n?"":u(n)}function s(e){var t=e.getAttribute("alt");return null!==t&&0===u(t).length}function l(e){var t=e.tagName.toLowerCase(),n=e.type;switch(t){case"input":return"hidden"!==n;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function f(e,t){var n=t,r=getComputedStyle(e,":before").content,o=getComputedStyle(e,":after").content;return'""'!==r&&"none"!==r&&(n=r+n),'""'!==o&&"none"!==o&&(n+=o),n}function d(e,t){var n,o,a="";if(e===t)return"";switch(e.nodeType){case Node.ELEMENT_NODE:if(function(e){switch(e.tagName.toLowerCase()){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}(e))a=c(e,"alt");else if(n=e,o=Object(r.a)(n),-1!==["textbox","combobox","listbox","slider","spinbutton"].indexOf(o))a=i(e);else if(e.hasChildNodes()){for(var s=e.childNodes,l=[],b=0;b<s.length;b++){var m=d(s[b],t);m.length&&l.push(m)}a=l.length?l.join(" "):""}a=f(e,a);break;case Node.TEXT_NODE:a=u(e.textContent)}return a}function b(e,t){var n="";if(e.hasChildNodes()){for(var r=e.childNodes,o=[],a=0;a<r.length;a++){var i=d(r[a],t);i.length&&o.push(i)}n=o.length?o.join(" "):""}return f(e,n)}function m(e,t){var n;return(n=c(e,t)).length?{name:n,source:t}:null}function p(e){var t=e.getAttribute("alt");return null!==t?(t=u(t)).length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}:null}function h(e){var t;return(t=b(e)).length?{name:t,source:"contents"}:null}function g(e){return e.length?{name:e,source:"default"}:null}function v(e,t){var n=e.querySelector(t);if(n){var r=b(n);if(r.length)return{name:r,source:t+" element"}}return null}function y(e){var t,n;return e.id&&(n=document.querySelector('[for="'+e.id+'"]'))&&(t=b(n,e)).length?{name:t,source:"label reference"}:"function"==typeof e.closest&&(n=e.closest("label"))&&(t=b(n,e)).length?{name:t,source:"label encapsulation"}:null}function w(e){var t,n;if((n=e.querySelector("summary"))&&(t=b(n)),e.hasAttribute("open")){if((t+=function(e,t){var n,r=[];return Array.prototype.forEach.call(e.childNodes,(function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(n=b(e)).length&&r.push(n);break;case Node.TEXT_NODE:(n=u(e.textContent)).length&&r.push(n)}})),r.length?r.join(" "):""}(e,(function(e){return"summary"!==e.tagName.toLowerCase()}))).length)return{name:t,source:"contents"}}else if(t.length)return{name:t,source:"summary element"};return null}n.d(t,"l",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return g})),n.d(t,"i",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"j",(function(){return w}))},function(e,t,n){"use strict";var r=n(3),o=1e5;var a=n(5);function i(e,t){for(var n=0,r=e.firstElementChild;r;)t.indexOf(r.tagName)>-1&&(n+=1),r=r.nextElementSibling;return n}function u(e,t){return"function"==typeof e.closest&&t.some((function(t){return null!==e.closest(t)}))}function c(e,t){var n=e.parentElement.tagName.toLowerCase();return!!n&&t.some((function(e){return n===e}))}function s(e){var t=e.targetList,n=e.cssClass,i=e.getInfo,u=e.evalInfo,c=e.dndFlag,s=0;return t.forEach((function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,(function(t){if(function(e){return function e(t){if(t.nodeType===Node.DOCUMENT_NODE)return!0;var n=window.getComputedStyle(t,null),r=n.getPropertyValue("display"),o=n.getPropertyValue("visibility"),a=t.getAttribute("hidden"),i=t.getAttribute("aria-hidden");return"none"!==r&&"hidden"!==o&&null===a&&"true"!==i&&e(t.parentNode)}(e)}(t)){var l=i(t,e);u&&u(l,e);var f=t.getBoundingClientRect(),d=function(e,t,n){var a=Object(r.c)(),i=document.createElement("div");i.setAttribute("class",[n,"oaa-element-overlay"].join(" ")),i.startLeft=t.left+a.x+"px",i.startTop=t.top+a.y+"px",i.style.left=i.startLeft,i.style.top=i.startTop,i.style.width=Math.max(t.width,68)+"px",i.style.height=Math.max(t.height,27)+"px",i.style.borderColor=e.color,i.style.zIndex=o;var u=document.createElement("div");return u.setAttribute("class","oaa-overlay-label"),u.style.backgroundColor=e.color,u.innerHTML=e.label,i.appendChild(u),i}(e,f,n);c&&function(e){function t(e){e.style.zIndex=o+=100}var n=e.firstChild;n.onmousedown=function(e){Object(r.b)(this.parentNode,t,e)},n.ondblclick=function(e){var t;(t=this.parentNode).style.left=t.startLeft,t.style.top=t.startTop}}(d);var b=d.firstChild;b.title=Object(a.a)(l),b.innerText=e.label,l.accName&&(b.innerText=l.accName.name+" "+e.label),document.body.appendChild(d),s+=1}}))})),s}function l(e){var t="div."+e,n=document.querySelectorAll(t);Array.prototype.forEach.call(n,(function(e){document.body.removeChild(e)}))}n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n(1),o=n(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"];function u(e){var t=e.tagName.toLowerCase(),n=e.type;if(e.hasAttribute("role"))return function(e){for(var t=e.split(" "),n=function(e){var n=t[e].toLowerCase(),r=i.find((function(e){return e===n}));if(r)return{v:r}},r=0;r<t.length;r++){var o=n(r);if("object"===a(o))return o.v}return null}(Object(o.a)(e,"role"));switch(t){case"a":case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!Object(r.d)(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"heading";case"header":if(!Object(r.d)(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!Object(o.c)(e))return"img";break;case"input":if("button"===n)return"button";if("checkbox"===n)return"checkbox";if("email"===n)return e.hasAttribute("list")?"combobox":"textbox";if("image"===n)return"button";if("number"===n)return"spinbutton";if("password"===n)return"textbox";if("radio"===n)return"radio";if("range"===n)return"slider";if("reset"===n)return"button";if("search"===n)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===n)return"button";if("tel"===n)return e.hasAttribute("list")?"combobox":"textbox";if("text"===n)return e.hasAttribute("list")?"combobox":"textbox";if("url"===n)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(Object(r.c)(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===n)return"toolbar";break;case"menuitem":if("command"===n)return"menuitem";if("checkbox"===n)return"menuitemcheckbox";if("radio"===n)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(function(e){var t=e.parentElement,n=t.tagName.toLowerCase(),r=t.parentElement.tagName.toLowerCase();return"select"===n||("optgroup"===n&&"select"===r||"datalist"===n)}(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":case"tfoot":case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function c(e){var t=u(e);if(null===t)return!1;return void 0!==["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"].find((function(e){return e===t}))}},function(e,t,n){"use strict";function r(){var e;return{x:void 0===window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,y:void 0===window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset}}function o(e,t,n){var o=r(),a=n.clientX+o.x,i=n.clientY+o.y,u=e.offsetLeft,c=e.offsetTop,s=a-u,l=i-c;function f(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-s+"px",e.style.top=t.clientY+n.y-l+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function d(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",d,!0),document.removeEventListener("mousemove",f,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",d),e.detachEvent("onmouseup",d),e.detachEvent("onmousemove",f),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}t&&t(e),document.addEventListener?(document.addEventListener("mousemove",f,!0),document.addEventListener("mouseup",d,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",f),e.attachEvent("onmouseup",d),e.attachEvent("onlosecapture",d)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}function a(){Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,o=arguments[1],a=0;a<r;a++)if(t=n[a],e.call(o,t,a,n))return t}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})}n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));var r={};function o(e){var t=r.classPrefix;switch(e){case"Forms":return t+"0";case"Headings":return t+"1";case"Images":return t+"2";case"Landmarks":return t+"3";case"Lists":return t+"4";case"Interactive":return t+"5"}return"unrecognizedName"}function a(e){return r.globalPrefix+e}function i(){return r.title}function u(){return r.version}Object.defineProperty(r,"classPrefix",{value:"a11yGfdXALm"}),Object.defineProperty(r,"globalPrefix",{value:"a11y"}),Object.defineProperty(r,"title",{value:"oaa-tools/bookmarklets"}),Object.defineProperty(r,"version",{value:"0.2.2"})},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(0);function o(e){var t=e.tagName.toLowerCase(),n=t;if("input"===t){var o=e.type;o&&o.length&&(n+=' [type="'+o+'"]')}if("label"===t){var a=Object(r.a)(e,"for");a.length&&(n+=' [for="'+a+'"]')}if(Object(r.d)(e)){var i=e.id;i&&i.length&&(n+=' [id="'+i+'"]')}if(e.hasAttribute("role")){var u=Object(r.a)(e,"role");u.length&&(n+=' [role="'+u+'"]')}return n}function a(e){var t="",n=(e.title,e.element),r=e.grpLabels,o=e.accName,a=e.accDesc,i=e.role,u=e.props;if(n&&(t+="\nELEMENT: "+n),r&&r.length)for(var c=r.length-1;c>=0;c--)t+="\nGROUP LABEL: "+r[c].name+"\nFROM: "+r[c].source;return o&&(t+="\nACC NAME: "+o.name+"\nFROM: "+o.source),a&&(t+="\nACC DESC: "+a.name+"\nFROM: "+a.source),i&&(t+="\nROLE: "+i),u&&(t+="\nPROPERTIES: "+u),t}},function(e,t,n){"use strict";var r=n(4),o=n(1),a=n(3);function i(e){var t=window.innerWidth/3.2,n=window.innerWidth/2-t/2,r=Object(a.c)();e.style.width=t+"px",e.style.left=r.x+n+"px",e.style.top=r.y+30+"px"}function u(){this.GLOBAL_NAME="a11yMessageDialog",this.CSS_CLASS="oaa-message-dialog"}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){var t=this,n=Object(r.b)(e.appName);if("object"===c(window[n]))return window[n];this.appName=e.appName,this.cssClass=e.cssClass,this.msgText=e.msgText,this.params=e,this.show=!1;var a,i=new u;window.addEventListener("resize",(function(e){Object(o.e)(t.cssClass),i.resize(),t.show=!1})),window[n]=this,a=this.appName,console.log(Object(r.c)()+" : v"+Object(r.d)()+" : "+a)}u.prototype.show=function(e,t){var n,r,o,a,u,c,s=this,l=this.GLOBAL_NAME;window[l]||(window[l]=(o=this.CSS_CLASS,a=function(e){return s.hide()},u=document.createElement("div"),c=document.createElement("button"),u.className=o,i(u),c.onclick=a,u.appendChild(c),document.body.appendChild(u),u)),(n=document.createElement("h2")).innerHTML=e,window[l].appendChild(n),(r=document.createElement("div")).innerHTML=t,window[l].appendChild(r)},u.prototype.hide=function(){var e,t=this.GLOBAL_NAME;window[t]&&((e=window[t])&&document.body.removeChild(e),delete window[t])},u.prototype.resize=function(){var e=this.GLOBAL_NAME;window[e]&&i(window[e])},n.d(t,"a",(function(){return s})),s.prototype.run=function(){var e=new u;e.hide(),this.show=!this.show,this.show?0===Object(o.a)(this.params)&&(e.show(this.appName,this.msgText),this.show=!1):Object(o.e)(this.cssClass)}},function(e,t,n){"use strict";var r=n(0),o=n(2);function a(e){return Object(r.d)(e)?function(e){var t=[];return"function"!=typeof e.closest?t:(function e(t,n){var o=t.closest("fieldset");if(o){var a=o.querySelector("legend");if(a){var i=Object(r.b)(a);i.length&&n.push({name:i,source:"fieldset/legend"})}e(o.parentNode,n)}}(e,t),t)}(e):[]}function i(e,t){var n,o,a,i,c=Object(r.a)(e,t),s=[];if(c.length)for(n=c.split(" "),o=0;o<n.length;o++)(a=document.getElementById(n[o]))&&(i=u(a,!0))&&i.name.length&&s.push(i.name);return s.length?{name:s.join(" "),source:t}:null}function u(e,t){var n=null;return t||(n=i(e,"aria-labelledby")),null===n&&(n=Object(r.f)(e,"aria-label")),null===n&&(n=function(e,t){var n=e.tagName.toLowerCase(),a=Object(o.a)(e),i=null;if(a&&("presentation"===a||"none"===a))return null;switch(n){case"input":switch(e.type){case"hidden":t&&(i=Object(r.k)(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":null===(i=Object(r.k)(e))&&(i=Object(r.f)(e,"placeholder"));break;case"button":i=Object(r.f)(e,"value");break;case"reset":null===(i=Object(r.f)(e,"value"))&&(i=Object(r.h)("Reset"));break;case"submit":null===(i=Object(r.f)(e,"value"))&&(i=Object(r.h)("Submit"));break;case"image":null===(i=Object(r.e)(e))&&(i=Object(r.f)(e,"value"));break;default:i=Object(r.k)(e)}break;case"button":case"label":i=Object(r.g)(e);break;case"keygen":case"meter":case"output":case"progress":case"select":i=Object(r.k)(e);break;case"textarea":null===(i=Object(r.k)(e))&&(i=Object(r.f)(e,"placeholder"));break;case"audio":case"embed":i={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":i=Object(r.f)(e,"title");break;case"img":case"area":i=Object(r.e)(e);break;case"object":i={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":i=Object(r.i)(e,"title");break;case"video":i={name:"NOT YET IMPLEMENTED",source:""};break;case"a":i=Object(r.g)(e);break;case"details":i=Object(r.j)(e);break;case"figure":i=Object(r.i)(e,"figcaption");break;case"fieldset":i=Object(r.i)(e,"legend");break;case"table":i=Object(r.i)(e,"caption");break;default:(Object(o.b)(e)||t)&&(i=Object(r.g)(e))}return null===i&&(i=Object(r.f)(e,"title")),i}(e,t)),n}var c=n(5);function s(e,t){this.title=t,this.element=Object(c.b)(e),this.grpLabels=a(e),this.accName=u(e),this.accDesc=function(e,t){var n=null;return t||(n=i(e,"aria-describedby")),null===n&&(n=Object(r.f)(e,"title")),n}(e),this.role=Object(o.a)(e);var n=this.accName?this.accName.name:"",s=this.accDesc?this.accDesc.name:"";console.log(this.title+", el="+this.element+", name="+n+", desc="+s+", role="+this.role),function(e,t){if(null===e||null===t)return!1;var n=e.name,r=t.name;return"string"==typeof n&&"string"==typeof r&&n.toLowerCase().includes(r.toLowerCase())}(this.accName,this.accDesc)&&(this.accDesc=null)}n.d(t,"a",(function(){return s})),s.prototype.addProps=function(e){this.props=e}},,function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(7),a=n(4),i=n(3);(function(){Object(i.a)();var e=[{selector:"h1",color:"navy",label:"h1"},{selector:"h2",color:"olive",label:"h2"},{selector:"h3",color:"purple",label:"h3"},{selector:"h4",color:"green",label:"h4"},{selector:"h5",color:"gray",label:"h5"},{selector:"h6",color:"brown",label:"h6"}],t=e.map((function(e){return e.selector})).join(", "),n={appName:"Headings",cssClass:Object(a.a)("Headings"),msgText:"No heading elements ("+t+") found.",targetList:e,getInfo:function(e,t){var n=new o.a(e,"HEADING INFO");return n.addProps("level "+t.label.substring(1)),n},dndFlag:!0};return new r.a(n)})().run()}]);