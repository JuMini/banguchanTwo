/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);

	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);

	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);

	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);

	__webpack_require__(39);
	__webpack_require__(40);

	__webpack_require__(41);
	__webpack_require__(42);

	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);

	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);

	__webpack_require__(52);
	__webpack_require__(53);

	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);

	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);

	__webpack_require__(60);
	__webpack_require__(61);

	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);

	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
	return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
	}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// Cross-broswer implementation of text ranges and selections
	// documentation: http://bililite.com/blog/2011/01/17/cross-browser-text-ranges-and-selections/
	// Version: 1.1
	// Copyright (c) 2010 Daniel Wachsstock
	// MIT license:
	// Permission is hereby granted, free of charge, to any person
	// obtaining a copy of this software and associated documentation
	// files (the "Software"), to deal in the Software without
	// restriction, including without limitation the rights to use,
	// copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the
	// Software is furnished to do so, subject to the following
	// conditions:

	// The above copyright notice and this permission notice shall be
	// included in all copies or substantial portions of the Software.

	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	// OTHER DEALINGS IN THE SOFTWARE.

	(function(){

	bililiteRange = function(el, debug){
		var ret;
		if (debug){
			ret = new NothingRange(); // Easier to force it to use the no-selection type than to try to find an old browser
		}else if (document.selection){
			// Internet Explorer
			ret = new IERange();
		}else if (window.getSelection && el.setSelectionRange){
			// Standards. Element is an input or textarea 
			ret = new InputRange();
		}else if (window.getSelection){
			// Standards, with any other kind of element
			ret = new W3CRange();
		}else{
			// doesn't support selection
			ret = new NothingRange();
		}
		ret._el = el;
		ret._textProp = textProp(el);
		ret._bounds = [0, ret.length()];
		return ret;
	};

	function textProp(el){
		// returns the property that contains the text of the element
		if (typeof el.value != 'undefined') return 'value';
		if (typeof el.text != 'undefined') return 'text';
		if (typeof el.textContent != 'undefined') return 'textContent';
		return 'innerText';
	}

	// base class
	function Range(){}
	Range.prototype = {
		length: function() {
			return this._el[this._textProp].replace(/\r/g, '').length; // need to correct for IE's CrLf weirdness
		},
		bounds: function(s){
			if (s === 'all'){
				this._bounds = [0, this.length()];
			}else if (s === 'start'){
				this._bounds = [0, 0];
			}else if (s === 'end'){
				this._bounds = [this.length(), this.length()];
			}else if (s === 'selection'){
				this.bounds ('all'); // first select the whole thing for constraining
				this._bounds = this._nativeSelection();
			}else if (s){
				this._bounds = s; // don't error check now; the element may change at any moment, so constrain it when we need it.
			}else{
				var b = [
					Math.max(0, Math.min (this.length(), this._bounds[0])),
					Math.max(0, Math.min (this.length(), this._bounds[1]))
				];
				return b; // need to constrain it to fit
			}
			return this; // allow for chaining
		},
		select: function(){
			this._nativeSelect(this._nativeRange(this.bounds()));
			return this; // allow for chaining
		},
		text: function(text, select){
			if (arguments.length){
				this._nativeSetText(text, this._nativeRange(this.bounds()));
				if (select == 'start'){
					this.bounds ([this._bounds[0], this._bounds[0]]);
					this.select();
				}else if (select == 'end'){
					this.bounds ([this._bounds[0]+text.length, this._bounds[0]+text.length]);
					this.select();
				}else if (select == 'all'){
					this.bounds ([this._bounds[0], this._bounds[0]+text.length]);
					this.select();
				}
				return this; // allow for chaining
			}else{
				return this._nativeGetText(this._nativeRange(this.bounds()));
			}
		},
		insertEOL: function (){
			this._nativeEOL();
			this._bounds = [this._bounds[0]+1, this._bounds[0]+1]; // move past the EOL marker
			return this;
		}
	};


	function IERange(){}
	IERange.prototype = new Range();
	IERange.prototype._nativeRange = function (bounds){
		var rng;
		if (this._el.tagName == 'INPUT'){
			// IE 8 is very inconsistent; textareas have createTextRange but it doesn't work
			rng = this._el.createTextRange();
		}else{
			rng = document.body.createTextRange ();
			rng.moveToElementText(this._el);
		}
		if (bounds){
			if (bounds[1] < 0) bounds[1] = 0; // IE tends to run elements out of bounds
			if (bounds[0] > this.length()) bounds[0] = this.length();
			if (bounds[1] < rng.text.replace(/\r/g, '').length){ // correct for IE's CrLf wierdness
				// block-display elements have an invisible, uncounted end of element marker, so we move an extra one and use the current length of the range
				rng.moveEnd ('character', -1);
				rng.moveEnd ('character', bounds[1]-rng.text.replace(/\r/g, '').length);
			}
			if (bounds[0] > 0) rng.moveStart('character', bounds[0]);
		}
		return rng;					
	};
	IERange.prototype._nativeSelect = function (rng){
		rng.select();
	};
	IERange.prototype._nativeSelection = function (){
		// returns [start, end] for the selection constrained to be in element
		var rng = this._nativeRange(); // range of the element to constrain to
		var len = this.length();
		if (document.selection.type != 'Text') return [len, len]; // append to the end
		var sel = document.selection.createRange();
		try{
			return [
				iestart(sel, rng),
				ieend (sel, rng)
			];
		}catch (e){
			// IE gets upset sometimes about comparing text to input elements, but the selections cannot overlap, so make a best guess
			return (sel.parentElement().sourceIndex < this._el.sourceIndex) ? [0,0] : [len, len];
		}
	};
	IERange.prototype._nativeGetText = function (rng){
		return rng.text.replace(/\r/g, ''); // correct for IE's CrLf weirdness
	};
	IERange.prototype._nativeSetText = function (text, rng){
		rng.text = text;
	};
	IERange.prototype._nativeEOL = function(){
		if (typeof this._el.value != 'undefined'){
			this.text('\n'); // for input and textarea, insert it straight
		}else{
			this._nativeRange(this.bounds()).pasteHTML('<br/>');
		}
	};
	// IE internals
	function iestart(rng, constraint){
		// returns the position (in character) of the start of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
		var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf wierdness
		if (rng.compareEndPoints ('StartToStart', constraint) <= 0) return 0; // at or before the beginning
		if (rng.compareEndPoints ('StartToEnd', constraint) >= 0) return len;
		for (var i = 0; rng.compareEndPoints ('StartToStart', constraint) > 0; ++i, rng.moveStart('character', -1));
		return i;
	}
	function ieend (rng, constraint){
		// returns the position (in character) of the end of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
		var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf wierdness
		if (rng.compareEndPoints ('EndToEnd', constraint) >= 0) return len; // at or after the end
		if (rng.compareEndPoints ('EndToStart', constraint) <= 0) return 0;
		for (var i = 0; rng.compareEndPoints ('EndToStart', constraint) > 0; ++i, rng.moveEnd('character', -1));
		return i;
	}

	// an input element in a standards document. "Native Range" is just the bounds array
	function InputRange(){}
	InputRange.prototype = new Range();
	InputRange.prototype._nativeRange = function(bounds) {
		return bounds || [0, this.length()];
	};
	InputRange.prototype._nativeSelect = function (rng){
		this._el.setSelectionRange(rng[0], rng[1]);
	};
	InputRange.prototype._nativeSelection = function(){
		return [this._el.selectionStart, this._el.selectionEnd];
	};
	InputRange.prototype._nativeGetText = function(rng){
		return this._el.value.substring(rng[0], rng[1]);
	};
	InputRange.prototype._nativeSetText = function(text, rng){
		var val = this._el.value;
		this._el.value = val.substring(0, rng[0]) + text + val.substring(rng[1]);
	};
	InputRange.prototype._nativeEOL = function(){
		this.text('\n');
	};

	function W3CRange(){}
	W3CRange.prototype = new Range();
	W3CRange.prototype._nativeRange = function (bounds){
		var rng = document.createRange();
		rng.selectNodeContents(this._el);
		if (bounds){
			w3cmoveBoundary (rng, bounds[0], true, this._el);
			rng.collapse (true);
			w3cmoveBoundary (rng, bounds[1]-bounds[0], false, this._el);
		}
		return rng;					
	};
	W3CRange.prototype._nativeSelect = function (rng){
		window.getSelection().removeAllRanges();
		window.getSelection().addRange (rng);
	};
	W3CRange.prototype._nativeSelection = function (){
			// returns [start, end] for the selection constrained to be in element
			var rng = this._nativeRange(); // range of the element to constrain to
			if (window.getSelection().rangeCount == 0) return [this.length(), this.length()]; // append to the end
			var sel = window.getSelection().getRangeAt(0);
			return [
				w3cstart(sel, rng),
				w3cend (sel, rng)
			];
		};
	W3CRange.prototype._nativeGetText = function (rng){
		return rng.toString();
	};
	W3CRange.prototype._nativeSetText = function (text, rng){
		rng.deleteContents();
		rng.insertNode (document.createTextNode(text));
		this._el.normalize(); // merge the text with the surrounding text
	};
	W3CRange.prototype._nativeEOL = function(){
		var rng = this._nativeRange(this.bounds());
		rng.deleteContents();
		var br = document.createElement('br');
		br.setAttribute ('_moz_dirty', ''); // for Firefox
		rng.insertNode (br);
		rng.insertNode (document.createTextNode('\n'));
		rng.collapse (false);
	};
	// W3C internals
	function nextnode (node, root){
		//  in-order traversal
		// we've already visited node, so get kids then siblings
		if (node.firstChild) return node.firstChild;
		if (node.nextSibling) return node.nextSibling;
		if (node===root) return null;
		while (node.parentNode){
			// get uncles
			node = node.parentNode;
			if (node == root) return null;
			if (node.nextSibling) return node.nextSibling;
		}
		return null;
	}
	function w3cmoveBoundary (rng, n, bStart, el){
		// move the boundary (bStart == true ? start : end) n characters forward, up to the end of element el. Forward only!
		// if the start is moved after the end, then an exception is raised
		if (n <= 0) return;
		var node = rng[bStart ? 'startContainer' : 'endContainer'];
		if (node.nodeType == 3){
		  // we may be starting somewhere into the text
		  n += rng[bStart ? 'startOffset' : 'endOffset'];
		}
		while (node){
			if (node.nodeType == 3){
				if (n <= node.nodeValue.length){
					rng[bStart ? 'setStart' : 'setEnd'](node, n);
					// special case: if we end next to a <br>, include that node.
					if (n == node.nodeValue.length){
						// skip past zero-length text nodes
						for (var next = nextnode (node, el); next && next.nodeType==3 && next.nodeValue.length == 0; next = nextnode(next, el)){
							rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
						}
						if (next && next.nodeType == 1 && next.nodeName == "BR") rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
					}
					return;
				}else{
					rng[bStart ? 'setStartAfter' : 'setEndAfter'](node); // skip past this one
					n -= node.nodeValue.length; // and eat these characters
				}
			}
			node = nextnode (node, el);
		}
	}
	var     START_TO_START                 = 0; // from the w3c definitions
	var     START_TO_END                   = 1;
	var     END_TO_END                     = 2;
	var     END_TO_START                   = 3;
	// from the Mozilla documentation, for range.compareBoundaryPoints(how, sourceRange)
	// -1, 0, or 1, indicating whether the corresponding boundary-point of range is respectively before, equal to, or after the corresponding boundary-point of sourceRange. 
	    // * Range.END_TO_END compares the end boundary-point of sourceRange to the end boundary-point of range.
	    // * Range.END_TO_START compares the end boundary-point of sourceRange to the start boundary-point of range.
	    // * Range.START_TO_END compares the start boundary-point of sourceRange to the end boundary-point of range.
	    // * Range.START_TO_START compares the start boundary-point of sourceRange to the start boundary-point of range. 
	function w3cstart(rng, constraint){
		if (rng.compareBoundaryPoints (START_TO_START, constraint) <= 0) return 0; // at or before the beginning
		if (rng.compareBoundaryPoints (END_TO_START, constraint) >= 0) return constraint.toString().length;
		rng = rng.cloneRange(); // don't change the original
		rng.setEnd (constraint.endContainer, constraint.endOffset); // they now end at the same place
		return constraint.toString().length - rng.toString().length;
	}
	function w3cend (rng, constraint){
		if (rng.compareBoundaryPoints (END_TO_END, constraint) >= 0) return constraint.toString().length; // at or after the end
		if (rng.compareBoundaryPoints (START_TO_END, constraint) <= 0) return 0;
		rng = rng.cloneRange(); // don't change the original
		rng.setStart (constraint.startContainer, constraint.startOffset); // they now start at the same place
		return rng.toString().length;
	}

	function NothingRange(){}
	NothingRange.prototype = new Range();
	NothingRange.prototype._nativeRange = function(bounds) {
		return bounds || [0,this.length()];
	};
	NothingRange.prototype._nativeSelect = function (rng){ // do nothing
	};
	NothingRange.prototype._nativeSelection = function(){
		return [0,0];
	};
	NothingRange.prototype._nativeGetText = function (rng){
		return this._el[this._textProp].substring(rng[0], rng[1]);
	};
	NothingRange.prototype._nativeSetText = function (text, rng){
		var val = this._el[this._textProp];
		this._el[this._textProp] = val.substring(0, rng[0]) + text + val.substring(rng[1]);
	};
	NothingRange.prototype._nativeEOL = function(){
		this.text('\n');
	};

	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	 /*!
	 * jQuery Simulate v0.0.1 - simulate browser mouse and keyboard events
	 * https://github.com/jquery/jquery-simulate
	 *
	 * Copyright 2012 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Sun Dec 9 12:15:33 2012 -0500
	 */

	;(function( $, undefined ) {
		"use strict";

	var rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rdocument = /\[object (?:HTML)?Document\]/;

	function isDocument(ele) {
		return rdocument.test(Object.prototype.toString.call(ele));
	}

	function windowOfDocument(doc) {
		if(doc&&doc!=document){
			for (var i=0; i < window.frames.length; i+=1) {
				if (window.frames[i].document === doc) {
					return window.frames[i];
				}
			}
			return window;
		}
		else{
			return window;
		}
	}

	$.fn.simulate = function( type, options ) {
		return this.each(function() {
			new $.simulate( this, type, options );
		});
	};

	$.simulate = function( elem, type, options ) {
		var method = $.camelCase( "simulate-" + type );

		this.target = elem;
		this.options = options || {};

		if ( this[ method ] ) {
			this[ method ]();
		} else {
			this.simulateEvent( elem, type, this.options );
		}
	};

	$.extend( $.simulate, {

		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		},

		buttonCode: {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		}
	});

	$.extend( $.simulate.prototype, {

		simulateEvent: function( elem, type, options ) {
			var event = this.createEvent( type, options );
			this.dispatchEvent( elem, type, event, options );
		},

		createEvent: function( type, options ) {
			if ( rkeyEvent.test( type ) ) {
				return this.keyEvent( type, options );
			}

			if ( rmouseEvent.test( type ) ) {
				return this.mouseEvent( type, options );
			}
		},

		mouseEvent: function( type, options ) {
			var event,
				eventDoc,
				doc = isDocument(this.target)? this.target : (this.target.ownerDocument || document),
				docEle,
				body;
			
			
			options = $.extend({
				bubbles: true,
				cancelable: (type !== "mousemove"),
				view: windowOfDocument(doc),
				detail: 0,
				screenX: 0,
				screenY: 0,
				clientX: 1,
				clientY: 1,
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				button: 0,
				relatedTarget: undefined
			}, options );

			
			
			if ( doc.createEvent ) {
				event = doc.createEvent( "MouseEvents" );
				event.initMouseEvent( type, options.bubbles, options.cancelable,
					options.view, options.detail,
					options.screenX, options.screenY, options.clientX, options.clientY,
					options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
					options.button, options.relatedTarget || doc.body.parentNode );

				// IE 9+ creates events with pageX and pageY set to 0.
				// Trying to modify the properties throws an error,
				// so we define getters to return the correct values.
				if ( event.pageX === 0 && event.pageY === 0 && Object.defineProperty ) {
					eventDoc = isDocument(event.relatedTarget)? event.relatedTarget : (event.relatedTarget.ownerDocument || document);
					docEle = eventDoc.documentElement;
					body = eventDoc.body;

					Object.defineProperty( event, "pageX", {
						get: function() {
							return options.clientX +
								( docEle && docEle.scrollLeft || body && body.scrollLeft || 0 ) -
								( docEle && docEle.clientLeft || body && body.clientLeft || 0 );
						}
					});
					Object.defineProperty( event, "pageY", {
						get: function() {
							return options.clientY +
								( docEle && docEle.scrollTop || body && body.scrollTop || 0 ) -
								( docEle && docEle.clientTop || body && body.clientTop || 0 );
						}
					});
				}
			} else if ( doc.createEventObject ) {
				event = doc.createEventObject();
				$.extend( event, options );
				// standards event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ff974877(v=vs.85).aspx
				// old IE event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ms533544(v=vs.85).aspx
				// so we actually need to map the standard back to oldIE
				event.button = {
					0: 1,
					1: 4,
					2: 2
				}[ event.button ] || event.button;
			}

			return event;
		},

		keyEvent: function( type, options ) {
			var event, doc;
			options = $.extend({
				bubbles: true,
				cancelable: true,
				view: windowOfDocument(doc),
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				keyCode: 0,
				charCode: undefined
			}, options );

			doc = isDocument(this.target)? this.target : (this.target.ownerDocument || document);
			if ( doc.createEvent ) {
				try {
					event = doc.createEvent( "KeyEvents" );
					event.initKeyEvent( type, options.bubbles, options.cancelable, options.view,
						options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
						options.keyCode, options.charCode );
				// initKeyEvent throws an exception in WebKit
				// see: http://stackoverflow.com/questions/6406784/initkeyevent-keypress-only-works-in-firefox-need-a-cross-browser-solution
				// and also https://bugs.webkit.org/show_bug.cgi?id=13368
				// fall back to a generic event until we decide to implement initKeyboardEvent
				} catch( err ) {
					event = doc.createEvent( "Events" );
					event.initEvent( type, options.bubbles, options.cancelable );
					$.extend( event, {
						view: options.view,
						ctrlKey: options.ctrlKey,
						altKey: options.altKey,
						shiftKey: options.shiftKey,
						metaKey: options.metaKey,
						keyCode: options.keyCode,
						charCode: options.charCode
					});
				}
			} else if ( doc.createEventObject ) {
				event = doc.createEventObject();
				$.extend( event, options );
			}

			if ( !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() ) || (({}).toString.call( window.opera ) === "[object Opera]") ) {
				event.keyCode = (options.charCode > 0) ? options.charCode : options.keyCode;
				event.charCode = undefined;
			}

			return event;
		},

		dispatchEvent: function( elem, type, event, options ) {
			if (options.jQueryTrigger === true) {
				$(elem).trigger($.extend({}, event, options, {type: type}));
			}
			else if ( elem.dispatchEvent ) {
				elem.dispatchEvent( event );
			} else if ( elem.fireEvent ) {
				elem.fireEvent( "on" + type, event );
			}
		},

		simulateFocus: function() {
			var focusinEvent,
				triggered = false,
				$element = $( this.target );

			function trigger() {
				triggered = true;
			}

			$element.bind( "focus", trigger );
			$element[ 0 ].focus();

			if ( !triggered ) {
				focusinEvent = $.Event( "focusin" );
				focusinEvent.preventDefault();
				$element.trigger( focusinEvent );
				$element.triggerHandler( "focus" );
			}
			$element.unbind( "focus", trigger );
		},

		simulateBlur: function() {
			var focusoutEvent,
				triggered = false,
				$element = $( this.target );

			function trigger() {
				triggered = true;
			}

			$element.bind( "blur", trigger );
			$element[ 0 ].blur();

			// blur events are async in IE
			setTimeout(function() {
				// IE won't let the blur occur if the window is inactive
				if ( $element[ 0 ].ownerDocument.activeElement === $element[ 0 ] ) {
					$element[ 0 ].ownerDocument.body.focus();
				}

				// Firefox won't trigger events if the window is inactive
				// IE doesn't trigger events if we had to manually focus the body
				if ( !triggered ) {
					focusoutEvent = $.Event( "focusout" );
					focusoutEvent.preventDefault();
					$element.trigger( focusoutEvent );
					$element.triggerHandler( "blur" );
				}
				$element.unbind( "blur", trigger );
			}, 1 );
		}
	});



	/** complex events **/

	function findCenter( elem ) {
		var offset,
			$document,
			$elem = $( elem );
		
		if ( isDocument($elem[0]) ) {
			$document = $elem;
			offset = { left: 0, top: 0 };
		}
		else {
			$document = $( $elem[0].ownerDocument || document );
			offset = $elem.offset();
		}
		
		return {
			x: offset.left + $elem.outerWidth() / 2 - $document.scrollLeft(),
			y: offset.top + $elem.outerHeight() / 2 - $document.scrollTop()
		};
	}

	function findCorner( elem ) {
		var offset,
			$document,
			$elem = $( elem );
		
		if ( isDocument($elem[0]) ) {
			$document = $elem;
			offset = { left: 0, top: 0 };
		}
		else {
			$document = $( $elem[0].ownerDocument || document );
			offset = $elem.offset();
		}

		return {
			x: offset.left - document.scrollLeft(),
			y: offset.top - document.scrollTop()
		};
	}

	$.extend( $.simulate.prototype, {
		simulateDrag: function() {
			var i = 0,
				target = this.target,
				options = this.options,
				center = options.handle === "corner" ? findCorner( target ) : findCenter( target ),
				x = Math.floor( center.x ),
				y = Math.floor( center.y ),
				coord = { clientX: x, clientY: y },
				dx = options.dx || ( options.x !== undefined ? options.x - x : 0 ),
				dy = options.dy || ( options.y !== undefined ? options.y - y : 0 ),
				moves = options.moves || 3;

			this.simulateEvent( target, "mousedown", coord );

			for ( ; i < moves ; i++ ) {
				x += dx / moves;
				y += dy / moves;

				coord = {
					clientX: Math.round( x ),
					clientY: Math.round( y )
				};

				this.simulateEvent( target.ownerDocument, "mousemove", coord );
			}

			if ( $.contains( document, target ) ) {
				this.simulateEvent( target, "mouseup", coord );
				this.simulateEvent( target, "click", coord );
			} else {
				this.simulateEvent( document, "mouseup", coord );
			}
		}
	});

	})( jQuery );


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */

	/* jQuery Simulate Extended Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */

	;(function( $ ) {
		"use strict";

		/* Overwrite the $.simulate.prototype.mouseEvent function
		 * to convert pageX/Y to clientX/Y
		 */
		var originalMouseEvent = $.simulate.prototype.mouseEvent,
			rdocument = /\[object (?:HTML)?Document\]/;
		
		$.simulate.prototype.mouseEvent = function(type, options) {
			if (options.pageX || options.pageY) {
				var doc = rdocument.test(Object.prototype.toString.call(this.target))? this.target : (this.target.ownerDocument || document);
				options.clientX = (options.pageX || 0) - $(doc).scrollLeft();
				options.clientY = (options.pageY || 0) - $(doc).scrollTop();
			}
			return originalMouseEvent.apply(this, [type, options]);
		};
		
		
	})( jQuery );


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */

	/* jQuery Simulate Drag-n-Drop Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */

	;(function($, undefined) {
		"use strict";
		
		/* Overwrite the $.fn.simulate function to reduce the jQuery set to the first element for the
		 * drag-n-drop interactions.
		 */
		$.fn.simulate = function( type, options ) {
			switch (type) {
			case "drag":
			case "drop":
			case "drag-n-drop":
				var ele = this.first();
				new $.simulate( ele[0], type, options);
				return ele;
			default:
				return this.each(function() {
					new $.simulate( this, type, options );
				});
			}
		};
		
		var now = Date.now || function() { return new Date().getTime(); };
		
		var rdocument = /\[object (?:HTML)?Document\]/;
		/**
		 * Tests whether an object is an (HTML) document object.
		 * @param {DOM Element} elem - the object/element to be tested
		 * @returns {Boolean} <code>true</code> if <i>elem</i> is an (HTML) document object.
		 * @private
		 * @author julrich
		 * @since 1.1
		 */
		function isDocument( elem ) {
			return rdocument.test(Object.prototype.toString.call($(elem)[0]));
		}
		
		/**
		 * Selects the first match from an array.
		 * @param {Array} array - Array of objects to be be tested
		 * @param {Function} check - Callback function that accepts one argument (which will be one element
		 * from the <i>array</i>) and returns a boolean.
		 * @returns {Boolean|null} the first element in <i>array</i> for which <i>check</i> returns <code>true</code>.
		 * If none of the elements in <i>array</i> passes <i>check</i>, <code>null</code> is returned.
		 * @private
		 * @author julrich
		 * @since 1.1
		 */
		function selectFirstMatch(array, check) {
			var i;
			if ($.isFunction(check)) {
				for (i=0; i < array.length; i+=1) {
					if (check(array[i])) {
						return array[i];
					}
				}
				return null;
			}
			else {
				for (i=0; i < array.length; i+=1) {
					if (array[i]) {
						return array[i];
					}
				}
				return null;
			}
		}
		
		// Based on the findCenter function from jquery.simulate.js
		/**
		 * Calculates the position of the center of an DOM element.
		 * @param {DOM Element} elem - the element whose center should be calculated.
		 * @returns {Object} an object with the properties <code>x</code> and <code>y</code>
		 * representing the position of the center of <i>elem</i> in page relative coordinates
		 * (i.e. independent of any scrolling).
		 * @private
		 * @author julrich
		 * @since 1.0
		 */
		function findCenter( elem ) {
			var offset,
				$elem = $( elem );
			if ( isDocument($elem[0]) ) {
				offset = {left: 0, top: 0}; 
			}
			else {
				offset = $elem.offset();
			}
				
			return {
				x: offset.left + $elem.outerWidth() / 2,
				y: offset.top + $elem.outerHeight() / 2
			};
		}
		
		/**
		 * Converts page relative coordinates into client relative coordinates.
		 * @param {Numeric|Object} x - Either the x coordinate of the page relative coordinates or
		 * an object with the properties <code>pageX</code> and <code>pageY</code> representing page
		 * relative coordinates.
		 * @param {Numeric} [y] - If <i>x</i> is numeric (i.e. the x coordinate of page relative coordinates),
		 * then this is the y coordinate. If <i>x</i> is an object, this parameter is skipped.
		 * @param {DOM Document} [docRel] - Optional DOM document object used to calculate the client relative
		 * coordinates. The page relative coordinates are interpreted as being relative to that document and
		 * the scroll position of that document is used to calculate the client relative coordinates.
		 * By default, <code>document</code> is used.
		 * @returns {Object} an object representing the client relative coordinates corresponding to the
		 * given page relative coordinates. The object either provides the properties <code>x</code> and
		 * <code>y</code> when <i>x</i> and <i>y</i> were given as arguments, or <code>clientX</code>
		 * and <code>clientY</code> when the parameter <i>x</i> was given as an object (see above).
		 * @private
		 * @author julrich
		 * @since 1.0
		 */
		function pageToClientPos(x, y, docRel) {
			var $document;
			if ( isDocument(y) ) {
				$document = $(y);
			} else {
				$document = $(docRel || document);
			}
			
			if (typeof x === "number" && typeof y === "number") {
				return {
					x: x - $document.scrollLeft(),
					y: y - $document.scrollTop()
				};
			}
			else if (typeof x === "object" && x.pageX && x.pageY) {
				return {
					clientX: x.pageX - $document.scrollLeft(),
					clientY: x.pageY - $document.scrollTop()
				};
			}
		}
		
		/**
		 * Browser-independent implementation of <code>document.elementFromPoint()</code>.
		 * 
		 * When run for the first time on a scrolled page, this function performs a check on how
		 * <code>document.elementFromPoint()</code> is implemented in the current browser. It stores
		 * the results in two static variables so that the check can be skipped for successive calls.
		 * 
		 * @param {Numeric|Object} x - Either the x coordinate of client relative coordinates or an object
		 * with the properties <code>x</code> and <code>y</code> representing client relative coordinates.
		 * @param {Numeric} [y] - If <i>x</i> is numeric (i.e. the x coordinate of client relative coordinates),
		 * this is the y coordinate. If <i>x</i> is an object, this parameter is skipped.
		 * @param {DOM Document} [docRel] - Optional DOM document object
		 * @returns {DOM Element|Null}
		 * @private
		 * @author Nicolas Zeh (Basic idea), julrich
		 * @see http://www.zehnet.de/2010/11/19/document-elementfrompoint-a-jquery-solution/
		 * @since 1.0
		 */
		function elementAtPosition(x, y, docRel) {
			var doc;
			if ( isDocument(y) ) {
				doc = y;
			} else {
				doc = docRel || document;
			}
			
			if(!doc.elementFromPoint) {
				return null;
			}

			var clientX = x, clientY = y;
			if (typeof x === "object" && (x.clientX || x.clientY)) {
				clientX = x.clientX || 0 ;
				clientY = x.clientY || 0;
			}
			
			if(elementAtPosition.prototype.check)
			{
				var sl, ele;
				if ((sl = $(doc).scrollTop()) >0)
				{
					ele = doc.elementFromPoint(0, sl + $(window).height() -1);
					if ( ele !== null && ele.tagName.toUpperCase() === 'HTML' ) { ele = null; }
					elementAtPosition.prototype.nativeUsesRelative = ( ele === null );
				}
				else if((sl = $(doc).scrollLeft()) >0)
				{
					ele = doc.elementFromPoint(sl + $(window).width() -1, 0);
					if ( ele !== null && ele.tagName.toUpperCase() === 'HTML' ) { ele = null; }
					elementAtPosition.prototype.nativeUsesRelative = ( ele === null );
				}
				elementAtPosition.prototype.check = (sl<=0); // Check was not meaningful because we were at scroll position 0
			}

			if(!elementAtPosition.prototype.nativeUsesRelative)
			{
				clientX += $(doc).scrollLeft();
				clientY += $(doc).scrollTop();
			}

			return doc.elementFromPoint(clientX,clientY);
		}
		// Default values for the check variables
		elementAtPosition.prototype.check = true;
		elementAtPosition.prototype.nativeUsesRelative = true;
		
		/**
		 * Informs the rest of the world that the drag is finished.
		 * @param {DOM Element} ele - The element which was dragged.
		 * @param {Object} [options] - The drag options.
		 * @fires simulate-drag
		 * @private
		 * @author julrich 
		 * @since 1.0
		 */
		function dragFinished(ele, options) {
			var opts = options || {};
			$(ele).trigger({type: "simulate-drag"});
			if ($.isFunction(opts.callback)) {
				opts.callback.apply(ele);
			}
		}
		
		/**
		 * Generates a series of <code>mousemove</code> events for a drag.
		 * @param {Object} self - The simulate object.
		 * @param {DOM Element} ele - The element which is dragged.
		 * @param {Object} start - The start coordinates of the drag, represented using the properties
		 * <code>x</code> and <code>y</code>.
		 * @param {Object} drag - The distance to be dragged, represented using the properties <code>dx</code>
		 * and <code>dy</code>.
		 * @param {Object} options - The drag options. Must have the property <code>interpolation</code>
		 * containing the interpolation options (<code>stepWidth</code>, <code>stepCount</code>, etc.).
		 * @requires eventTarget
		 * @requires now()
		 * @private
		 * @author julrich
		 * @since 1.0
		 */
		function interpolatedEvents(self, ele, start, drag, options) {
			var targetDoc = selectFirstMatch([ele, ele.ownerDocument], isDocument) || document,
				interpolOptions = options.interpolation,
				dragDistance = Math.sqrt(Math.pow(drag.dx,2) + Math.pow(drag.dy,2)), // sqrt(a^2 + b^2)
				stepWidth, stepCount, stepVector;
			
			if (interpolOptions.stepWidth) {
				stepWidth = parseInt(interpolOptions.stepWidth, 10);
				stepCount = Math.floor(dragDistance / stepWidth)-1;
				var stepScale = stepWidth / dragDistance;
				stepVector = {x: drag.dx*stepScale, y: drag.dy*stepScale };
			}
			else {
				stepCount = parseInt(interpolOptions.stepCount, 10);
				stepWidth = dragDistance / (stepCount+1);
				stepVector = {x: drag.dx/(stepCount+1), y: drag.dy/(stepCount+1)};
			}
			
			
			var coords = $.extend({},start);
			
			/**
			 * Calculates the effective coordinates for one <code>mousemove</code> event and fires the event.
			 * @requires eventTarget
			 * @requires targetDoc
			 * @requires coords
			 * @requires stepVector
			 * @requires interpolOptions
			 * @fires mousemove
			 * @inner
			 * @author julrich
			 * @since 1.0
			 */
			function interpolationStep() {
				coords.x += stepVector.x;
				coords.y += stepVector.y;
				var effectiveCoords = {pageX: coords.x, pageY: coords.y};
				if (interpolOptions.shaky && (interpolOptions.shaky === true || !isNaN(parseInt(interpolOptions.shaky,10)) )) {
					var amplitude = (interpolOptions.shaky === true)? 1 : parseInt(interpolOptions.shaky,10);
					effectiveCoords.pageX += Math.floor(Math.random()*(2*amplitude+1)-amplitude);
					effectiveCoords.pageY += Math.floor(Math.random()*(2*amplitude+1)-amplitude);
				}
				var clientCoord = pageToClientPos(effectiveCoords, targetDoc),
					eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
				self.simulateEvent( eventTarget, "mousemove", {pageX: Math.round(effectiveCoords.pageX), pageY: Math.round(effectiveCoords.pageY)});	
			}
			
			
			var lastTime;
			
			/**
			 * Performs one interpolation step (i.e. cares about firing the event) and then sleeps for
			 * <code>stepDelay</code> milliseconds.
			 * @requires lastTime
			 * @requires stepDelay
			 * @requires step
			 * @requires ele
			 * @requires eventTarget
			 * @reuiqre targetDoc
			 * @requires start
			 * @requires drag
			 * @requires now()
			 * @inner
			 * @author julrich
			 * @since 1.0
			 */
			function stepAndSleep() {
				var timeElapsed = now() - lastTime; // Work-around for Firefox & IE "bug": setTimeout can fire before the timeout
				if (timeElapsed >= stepDelay) {
					if (step < stepCount) {
						interpolationStep();
						step += 1;
						lastTime = now();
						setTimeout(stepAndSleep, stepDelay);
					}
					else {
						var pageCoord = {pageX: Math.round(start.x+drag.dx), pageY: Math.round(start.y+drag.dy)},
							clientCoord = pageToClientPos(pageCoord, targetDoc),
							eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
						self.simulateEvent( eventTarget, "mousemove", pageCoord);
						dragFinished(ele, options);
					}
				}
				else {
					setTimeout(stepAndSleep, stepDelay - timeElapsed);
				}

			}

			if ( (!interpolOptions.stepDelay && !interpolOptions.duration) || ((interpolOptions.stepDelay <= 0) && (interpolOptions.duration <= 0)) ) {
				// Trigger as fast as possible
				for (var i=0; i < stepCount; i+=1) {
					interpolationStep();
				}
				var pageCoord = {pageX: Math.round(start.x+drag.dx), pageY: Math.round(start.y+drag.dy)},
					clientCoord = pageToClientPos(pageCoord, targetDoc),
					eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
				self.simulateEvent( eventTarget, "mousemove", pageCoord);
				dragFinished(ele, options);
			}
			else {
				var stepDelay = parseInt(interpolOptions.stepDelay,10) || Math.ceil(parseInt(interpolOptions.duration,10) / (stepCount+1));
				var step = 0;

				lastTime = now();
				setTimeout(stepAndSleep, stepDelay);
			}
			
		}

		/**
		 * @returns {Object|undefined} an object containing information about the currently active drag
		 * or <code>undefined</code> when there is no active drag.
		 * The returned object contains the following properties:
		 * <ul>
		 *     <li><code>dragElement</code>: the dragged element</li>
		 *     <li><code>dragStart</code>: object with the properties <code>x</code> and <code>y</code>
		 * representing the page relative start coordinates of the drag</li>
		 *     <li><code>dragDistance</code>: object with the properties <code>x</code> and <code>y</code>
		 * representing the distance of the drag in x and y direction</li>
		 * </ul>
		 * @public
		 * @author julrich
		 * @since 1.0
		 */
		$.simulate.activeDrag = function() {
			if (!$.simulate._activeDrag) {
				return undefined;
			}
			return $.extend(true,{},$.simulate._activeDrag);
		};
		
		$.extend( $.simulate.prototype,

		/**
		 * @lends $.simulate.prototype
		 */
		{
			
		
			/**
			 * Simulates a drag.
			 *
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateDrag: function() {
				var self = this,
					ele = self.target,
					options = $.extend({
						dx: 0,
						dy: 0,
						dragTarget: undefined,
						clickToDrag: false,
						eventProps: {},
						interpolation: {
							stepWidth: 0,
							stepCount: 0,
							stepDelay: 0,
							duration: 0,
							shaky: false
						},
						callback: undefined
					},	this.options);
				
				var start,
					continueDrag = ($.simulate._activeDrag && $.simulate._activeDrag.dragElement === ele);
				
				if (continueDrag) {
					start = $.simulate._activeDrag.dragStart;
				}
				else {
					start = findCenter( ele );
				}
					
				var x = Math.round( start.x ),
					y = Math.round( start.y ),
					coord = { pageX: x, pageY: y },
					dx,
					dy;
					
				if (options.dragTarget) {
					var end = findCenter(options.dragTarget);
					dx = Math.round(end.x - start.x);
					dy = Math.round(end.y - start.y);
				}
				else {
					dx = options.dx || 0;
					dy = options.dy || 0;
				}
					
				if (continueDrag) {
					// We just continue to move the dragged element
					$.simulate._activeDrag.dragDistance.x += dx;
					$.simulate._activeDrag.dragDistance.y += dy;	
					coord = { pageX: Math.round(x + $.simulate._activeDrag.dragDistance.x) , pageY: Math.round(y + $.simulate._activeDrag.dragDistance.y) };
				}
				else {
					if ($.simulate._activeDrag) {
						// Drop before starting a new drag
						$($.simulate._activeDrag.dragElement).simulate( "drop" );
					}
					
					// We start a new drag
					$.extend(options.eventProps, coord);
					self.simulateEvent( ele, "mousedown", options.eventProps );
					if (options.clickToDrag === true) {
						self.simulateEvent( ele, "mouseup", options.eventProps );
						self.simulateEvent( ele, "click", options.eventProps );
					}
					$(ele).add(ele.ownerDocument).one('mouseup', function() {
						$.simulate._activeDrag = undefined;
					});
					
					$.extend($.simulate, {
						_activeDrag: {
							dragElement: ele,
							dragStart: { x: x, y: y },
							dragDistance: { x: dx, y: dy }
						}
					});
					coord = { pageX: Math.round(x + dx), pageY: Math.round(y + dy) };
				}

				if (dx !== 0 || dy !== 0) {
					
					if ( options.interpolation && (options.interpolation.stepCount || options.interpolation.stepWidth) ) {
						interpolatedEvents(self, ele, {x: x, y: y}, {dx: dx, dy: dy}, options);
					}
					else {
						var targetDoc = selectFirstMatch([ele, ele.ownerDocument], isDocument) || document,
							clientCoord = pageToClientPos(coord, targetDoc),
							eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;

						$.extend(options.eventProps, coord);
						self.simulateEvent( eventTarget, "mousemove", options.eventProps );
						dragFinished(ele, options);
					}
				}
				else {
					dragFinished(ele, options);
				}
			},
			
			/**
			 * Simulates a drop.
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateDrop: function() {
				var self = this,
					ele = this.target,
					activeDrag = $.simulate._activeDrag,
					options = $.extend({
						clickToDrop: false,
						eventProps: {},
						callback: undefined
					}, self.options),
					moveBeforeDrop = true,
					center = findCenter( ele ),
					x = Math.round( center.x ),
					y = Math.round( center.y ),
					coord = { pageX: x, pageY: y },
					targetDoc = ( (activeDrag)? selectFirstMatch([activeDrag.dragElement, activeDrag.dragElement.ownerDocument], isDocument) : selectFirstMatch([ele, ele.ownerDocument], isDocument) ) || document, 
					clientCoord = pageToClientPos(coord, targetDoc),
					eventTarget = elementAtPosition(clientCoord, targetDoc);
				
				if (activeDrag && (activeDrag.dragElement === ele || isDocument(ele))) {
					// We already moved the mouse during the drag so we just simulate the drop on the end position
					x = Math.round(activeDrag.dragStart.x + activeDrag.dragDistance.x);
					y = Math.round(activeDrag.dragStart.y + activeDrag.dragDistance.y);
					coord = { pageX: x, pageY: y };
					clientCoord = pageToClientPos(coord, targetDoc);
					eventTarget = elementAtPosition(clientCoord, targetDoc);
					moveBeforeDrop = false;
				}
				
				if (!eventTarget) {
					eventTarget = (activeDrag)? activeDrag.dragElement : ele;
				}
				
				$.extend(options.eventProps, coord);

				if (moveBeforeDrop === true) {
					// Else we assume the drop should happen on target, so we move there
					self.simulateEvent( eventTarget, "mousemove", options.eventProps );
				}

				if (options.clickToDrop) {
					self.simulateEvent( eventTarget, "mousedown", options.eventProps );
				}
				this.simulateEvent( eventTarget, "mouseup", options.eventProps );
				if (options.clickToDrop) {
					self.simulateEvent( eventTarget, "click", options.eventProps );
				}
				
				$.simulate._activeDrag = undefined;
				$(eventTarget).trigger({type: "simulate-drop"});
				if ($.isFunction(options.callback)) {
					options.callback.apply(eventTarget);
				}
			},
			
			/**
			 * Simulates a drag followed by drop.
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateDragNDrop: function() {
				var self = this,
					ele = this.target,
					options = $.extend({
						dragTarget: undefined,
						dropTarget: undefined
					}, self.options),
					// If there is a dragTarget or dx/dy, then we drag there and simulate an independent drop on dropTarget or ele
					dropEle = ((options.dragTarget || options.dx || options.dy)? options.dropTarget : ele) || ele;
	/*
					dx = (options.dropTarget)? 0 : (options.dx || 0),
					dy = (options.dropTarget)? 0 : (options.dy || 0),
					dragDistance = { dx: dx, dy: dy };
				
				$.extend(options, dragDistance);
	*/			
				$(ele).simulate( "drag", $.extend({},options,{
					// If there is no dragTarget, no dx and no dy, we drag onto the dropTarget directly
					dragTarget: options.dragTarget || ((options.dx || options.dy)?undefined:options.dropTarget),
					callback: function() {
						$(dropEle).simulate( "drop", options );
					}
				}));
				
			}
		});
		
	}(jQuery));

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true bililiteRange:true */

	/* jQuery Simulate Key-Sequence Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 * 
	 * The plugin is an extension and modification of the jQuery sendkeys plugin by Daniel Wachsstock.
	 * Therefore, the original copyright notice and license follow below.
	 */

	// insert characters in a textarea or text input field
	// special characters are enclosed in {}; use {{} for the { character itself
	// documentation: http://bililite.com/blog/2008/08/20/the-fnsendkeys-plugin/
	// Version: 2.0
	// Copyright (c) 2010 Daniel Wachsstock
	// MIT license:
	// Permission is hereby granted, free of charge, to any person
	// obtaining a copy of this software and associated documentation
	// files (the "Software"), to deal in the Software without
	// restriction, including without limitation the rights to use,
	// copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the
	// Software is furnished to do so, subject to the following
	// conditions:
	//
	// The above copyright notice and this permission notice shall be
	// included in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	// OTHER DEALINGS IN THE SOFTWARE.

	;(function($, undefined){
		"use strict";
		
		$.simulate.prototype.quirks = $.simulate.prototype.quirks || {};
		
		$.extend($.simulate.prototype.quirks, 

		/**
		 * @lends $.simulate.prototype.quirks
		 */		
		{
			/**
			 * When simulating with delay in non-input elements,
			 * all spaces are simulated at the end of the sequence instead
			 * of the correct position.
			 * @see {@link https://github.com/j-ulrich/jquery-simulate-ext/issues/6|issues #6}
			 */
			delayedSpacesInNonInputGlitchToEnd: undefined

		});
		
		$.extend($.simulate.prototype,
				
		/**
		 * @lends $.simulate.prototype
		 */		
		{
			
			/**
			 * Simulates sequencial key strokes.
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/key-sequence.md
			 * @public
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			simulateKeySequence: function() {
				var target = this.target,
					$target = $(target),
					opts = $.extend({
						sequence: "",
						triggerKeyEvents: true,
						eventProps: {},
						delay: 0,
						callback: undefined
					}, this.options),
					sequence = opts.sequence;
				
				opts.delay = parseInt(opts.delay,10);

				var localkeys = {};

				// Fix for #6 (https://github.com/j-ulrich/jquery-simulate-ext/issues/6)
				if ($.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd && !$target.is('input,textarea')) {
					$.extend(localkeys, {
						' ': function(rng, s, opts) {
							var internalOpts = $.extend({}, opts, {
								triggerKeyEvents: false,
								delay: 0,
								callback: undefined
							});
							$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, '\xA0', internalOpts);
							$.simulate.prototype.simulateKeySequence.defaults['{leftarrow}'](rng, s, internalOpts);
							$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, s, opts);
							$.simulate.prototype.simulateKeySequence.defaults['{del}'](rng, s, internalOpts);
						}
					});
				}

				$.extend(localkeys, opts, $target.data('simulate-keySequence')); // allow for element-specific key functions

				// most elements to not keep track of their selection when they lose focus, so we have to do it for them
				var rng = $.data (target, 'simulate-keySequence.selection');
				if (!rng){
					rng = bililiteRange(target).bounds('selection');
					$.data(target, 'simulate-keySequence.selection', rng);
					$target.bind('mouseup.simulate-keySequence', function(){
						// we have to update the saved range. The routines here update the bounds with each press, but actual keypresses and mouseclicks do not
						$.data(target, 'simulate-keySequence.selection').bounds('selection');
					}).bind('keyup.simulate-keySequence', function(evt){
						// restore the selection if we got here with a tab (a click should select what was clicked on)
						if (evt.which === 9){
							// there's a flash of selection when we restore the focus, but I don't know how to avoid that.
							$.data(target, 'simulate-keySequence.selection').select();
						}else{
							$.data(target, 'simulate-keySequence.selection').bounds('selection');
						}	
					});
				}
				$target.focus();
				if (typeof sequence === 'undefined') { // no string, so we just set up the event handlers
					return;
				}
				sequence = sequence.replace(/\n/g, '{enter}'); // turn line feeds into explicit break insertions
				
				/**
				 * Informs the rest of the world that the sequences is finished.
				 * @fires simulate-keySequence
				 * @requires target
				 * @requires sequence
				 * @requires opts
				 * @inner
				 * @author julrich
				 * @since 1.0
				 */
				function sequenceFinished() {
					$target.trigger({type: 'simulate-keySequence', sequence: sequence});
					if ($.isFunction(opts.callback)) {
						opts.callback.apply(target, [{
							sequence: sequence
						}]);
					}
				}
				
				/**
				 * Simulates the key stroke for one character (or special sequence) and sleeps for
				 * <code>opts.delay</code> milliseconds.
				 * @requires lastTime
				 * @requires now()
				 * @requires tokenRegExp
				 * @requires opts
				 * @requires rng
				 * @inner
				 * @author julrich
				 * @since 1.0
				 */
				function processNextToken() {
					var timeElapsed = now() - lastTime; // Work-around for Firefox "bug": setTimeout can fire before the timeout
					if (timeElapsed >= opts.delay) {
						var match = tokenRegExp.exec(sequence);
						if ( match !== null ) {
							var s = match[0];
							(localkeys[s] || $.simulate.prototype.simulateKeySequence.defaults[s] || $.simulate.prototype.simulateKeySequence.defaults.simplechar)(rng, s, opts);
							setTimeout(processNextToken, opts.delay);
						}
						else {
							sequenceFinished();
						}
						lastTime = now();
					}
					else {
						setTimeout(processNextToken, opts.delay - timeElapsed);
					}
				}

				if (!opts.delay || opts.delay <= 0) {
					// Run as fast as possible
					sequence.replace(/\{[^}]*\}|[^{]+/g, function(s){
						(localkeys[s] || $.simulate.prototype.simulateKeySequence.defaults[s] || $.simulate.prototype.simulateKeySequence.defaults.simplechar)(rng, s, opts);
					});
					sequenceFinished();
				}
				else {
					var tokenRegExp = /\{[^}]*\}|[^{]/g; // This matches curly bracket expressions or single characters
					var now = Date.now || function() { return new Date().getTime(); },
						lastTime = now();
					
					processNextToken();
				}
				
			}
		});

		$.extend($.simulate.prototype.simulateKeySequence.prototype,
				
		/**
		 * @lends $.simulate.prototype.simulateKeySequence.prototype
		 */		
		{
			
				/**
				 * Maps special character char codes to IE key codes (covers IE and Webkit)
				 * @author julrich
				 * @since 1.0
				 */
				IEKeyCodeTable: {
					33: 49,	// ! -> 1
					64: 50,	// @ -> 2
					35: 51,	// # -> 3
					36: 52,	// $ -> 4
					37: 53,	// % -> 5
					94: 54,	// ^ -> 6
					38: 55,	// & -> 7
					42: 56,	// * -> 8
					40: 57,	// ( -> 9
					41: 48,	// ) -> 0
					
					59: 186,	// ; -> 186
					58: 186,	// : -> 186
					61: 187,	// = -> 187
					43: 187,	// + -> 187
					44: 188,	// , -> 188
					60: 188,	// < -> 188
					45: 189,	// - -> 189
					95: 189,	// _ -> 189
					46: 190,	// . -> 190
					62: 190,	// > -> 190
					47: 191,	// / -> 191
					63: 191,	// ? -> 191
					96: 192,	// ` -> 192
					126: 192,	// ~ -> 192
					91: 219,	// [ -> 219
					123: 219,	// { -> 219
					92: 220,	// \ -> 220
					124: 220,	// | -> 220
					93: 221,	// ] -> 221
					125: 221,	// } -> 221
					39: 222,	// ' -> 222
					34: 222		// " -> 222
				},
				
				/**
				 * Tries to convert character codes to key codes.
				 * @param {Numeric} character - A character code
				 * @returns {Numeric} The key code corresponding to the given character code,
				 * based on the key code table of InternetExplorer. If no corresponding key code
				 * could be found (which will be the case for all special characters except the common
				 * ones), the character code itself is returned. However, <code>keyCode === charCode</code>
				 * does not imply that no key code was found because some key codes are identical to the
				 * character codes (e.g. for uppercase characters).
				 * @requires $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable
				 * @see $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable
				 * @author julrich
				 * @since 1.0
				 */
				charToKeyCode: function(character) {
					var specialKeyCodeTable = $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable;
					var charCode = character.charCodeAt(0);
			
					if (charCode >= 64 && charCode <= 90 || charCode >= 48 && charCode <= 57) {
						// A-Z and 0-9
						return charCode;
					}
					else if (charCode >= 97 && charCode <= 122) {
						// a-z -> A-Z
						return character.toUpperCase().charCodeAt(0);
					}
					else if (specialKeyCodeTable[charCode] !== undefined) {
						return specialKeyCodeTable[charCode];
					}
					else {
						return charCode;
					}
				}
		});

		// add the functions publicly so they can be overridden
		$.simulate.prototype.simulateKeySequence.defaults = {
			
			/**
			 * Simulates key strokes of "normal" characters (i.e. non-special sequences).
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - String of (simple) characters to be simulated. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			simplechar: function (rng, s, opts){
				rng.text(s, 'end');
				if (opts.triggerKeyEvents) {
					for (var i =0; i < s.length; i += 1){
						var charCode = s.charCodeAt(i);
						var keyCode = $.simulate.prototype.simulateKeySequence.prototype.charToKeyCode(s.charAt(i));
						// a bit of cheating: rng._el is the element associated with rng.
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: keyCode}));
						$(rng._el).simulate('keypress', $.extend({}, opts.eventProps,{keyCode: charCode, which: charCode, charCode: charCode}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: keyCode}));
					}
				}
			},
			
			/**
			 * Simulates key strokes of a curly opening bracket. 
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{{}': function (rng, s, opts){
				$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, '{', opts);
			},
			
			/**
			 * Simulates hitting the enter button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{enter}': function (rng, s, opts){
				rng.insertEOL();
				rng.select();
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 13}));
					$(rng._el).simulate('keypress', $.extend({}, opts.eventProps, {keyCode: 13, which: 13, charCode: 13}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 13}));
				}
			},
			
			/**
			 * Simulates hitting the backspace button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{backspace}': function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { rng.bounds([b[0]-1, b[0]]); } // no characters selected; it's just an insertion point. Remove the previous character
				rng.text('', 'end'); // delete the characters and update the selection
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 8}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 8}));
				}
			},
			
			/**
			 * Simulates hitting the delete button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{del}': function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { rng.bounds([b[0], b[0]+1]); } // no characters selected; it's just an insertion point. Remove the next character
				rng.text('', 'end'); // delete the characters and update the selection
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 46}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 46}));
				}
			},
			
			/**
			 * Simulates hitting the right arrow button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{rightarrow}':  function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { b[1] += 1; } // no characters selected; it's just an insertion point. Move to the right
				rng.bounds([b[1], b[1]]).select();
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 39}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 39}));
				}
			},
			
			/**
			 * Simulates hitting the left arrow button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{leftarrow}': function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { b[0] -= 1; } // no characters selected; it's just an insertion point. Move to the left
				rng.bounds([b[0], b[0]]).select();
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 37}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 37}));
				}
			},
			
			/**
			 * Selects all characters in the target element.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{selectall}' : function (rng){
				rng.bounds('all').select();
			}
		};
		
		
			
		
		//####### Quirk detection #######
		if ($.simulate.ext_disableQuirkDetection !== true) { // Fixes issue #9 (https://github.com/j-ulrich/jquery-simulate-ext/issues/9)
			$(document).ready(function() {
				// delayedSpacesInNonInputGlitchToEnd
				// See issues #6 (https://github.com/j-ulrich/jquery-simulate-ext/issues/6)
				/* Append a div to the document (bililiteRange needs the element to be in the document), simulate
				 * a delayed sequence containing a space in the middle and check if the space moves to the end.
				 */
				var $testDiv = $('<div/>').css({height: 1, width: 1, position: 'absolute', left: -1000, top: -1000}).appendTo('body');
				$testDiv.simulate('key-sequence', {sequence: '\xA0 \xA0', delay:1, callback: function() {
					$.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd = ($testDiv.text() === '\xA0\xA0 ');
					$testDiv.remove();
				}});
			});
		}

	})(jQuery);

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */

	/* jQuery Simulate Key-Combo Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */

	/**
	 * 
	 * For details about key events, key codes, char codes etc. see http://unixpapa.com/js/key.html
	 */

	;(function($,undefined) {
		"use strict";

		/**
		 * Key codes of special keys.
		 * @private
		 * @author julrich
		 * @since 1.3.0
		 */
		var SpecialKeyCodes = {
			// Modifier Keys
			SHIFT:			16,
			CONTROL:		17,
			ALTERNATIVE:	18,
			META:			91,
			// Arrow Keys
			LEFT_ARROW:		37,
			UP_ARROW:		38,
			RIGHT_ARROW:	39,
			DOWN_ARROW:		40,
			// Function Keys
			F1:				112,
			F2:				113,
			F3:				114,
			F4:				115,
			F5:				116,
			F6:				117,
			F7:				118,
			F8:				119,
			F9:				120,
			F10:			121,
			F11:			122,
			F12:			123,
			// Other
			ENTER:			13,
			TABULATOR:		9,
			ESCAPE:			27,
			BACKSPACE:		8,
			INSERT:			45,
			DELETE:			46,
			HOME:			36,
			END:			35,
			PAGE_UP:		33,
			PAGE_DOWN:		34,

		};
		
		// SpecialKeyCode aliases
		SpecialKeyCodes.CTRL	= SpecialKeyCodes.CONTROL;
		SpecialKeyCodes.ALT		= SpecialKeyCodes.ALTERNATIVE;
		SpecialKeyCodes.COMMAND	= SpecialKeyCodes.META;
		SpecialKeyCodes.TAB		= SpecialKeyCodes.TABULATOR;
		SpecialKeyCodes.ESC		= SpecialKeyCodes.ESCAPE;
		

		$.extend( $.simulate.prototype,
				
		/**
		 * @lends $.simulate.prototype
		 */		
		{
			
			
			/**
			 * Simulates simultaneous key presses
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/key-combo.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateKeyCombo: function() {
				var $target = $(this.target),
					options = $.extend({
						combo: "",
						eventProps: {},
						eventsOnly: false
					}, this.options),
					combo = options.combo,
					comboSplit = combo.split(/(\+)/),
					plusExpected = false,
					holdKeys = [],
					i;
				
				if (combo.length === 0) {
					return;
				}
				
				// Remove empty parts
				comboSplit = $.grep(comboSplit, function(part) {
					return (part !== "");
				});
				
				for (i=0; i < comboSplit.length; i+=1) {
					var key = comboSplit[i],
						keyLowered = key.toLowerCase(),
						keySpecial = key.toUpperCase().replace('-','_');
					
					if (plusExpected) {
						if (key !== "+") {
							throw 'Syntax error: expected "+"';
						}
						else {
							plusExpected = false;
						}
					}
					else {
						var keyCode;
						if ( key.length > 1) {
							// Assume a special key
							keyCode = SpecialKeyCodes[keySpecial];
							
							if (keyCode === undefined) {
								throw 'Syntax error: unknown special key "'+key+'" (forgot "+" between keys?)';
							}
							
							switch (keyCode) {
							case SpecialKeyCodes.CONTROL:
							case SpecialKeyCodes.ALT:
							case SpecialKeyCodes.SHIFT:
							case SpecialKeyCodes.META:
								options.eventProps[keyLowered+"Key"] = true;
								break;
							}
							holdKeys.unshift(keyCode);
							options.eventProps.keyCode = keyCode;
							options.eventProps.which = keyCode;
							options.eventProps.charCode = 0;
							$target.simulate("keydown", options.eventProps);
							
						}
						else {
							// "Normal" key
							keyCode = $.simulate.prototype.simulateKeySequence.prototype.charToKeyCode(key);
							holdKeys.unshift(keyCode);
							options.eventProps.keyCode = keyCode;
							options.eventProps.which = keyCode;
							options.eventProps.charCode = undefined;
							$target.simulate("keydown", options.eventProps);
							if (options.eventProps.shiftKey) {
								key = key.toUpperCase();
							}
							options.eventProps.keyCode = key.charCodeAt(0);
							options.eventProps.charCode = options.eventProps.keyCode;
							options.eventProps.which = options.eventProps.keyCode;
							$target.simulate("keypress", options.eventProps);
							if (options.eventsOnly !== true && !options.eventProps.ctrlKey && !options.eventProps.altKey && !options.eventProps.metaKey) {
								$target.simulate('key-sequence', {sequence: key, triggerKeyEvents: false});
							}
						}
						
						plusExpected = true;
					}
				}
				
				if (!plusExpected) {
					throw 'Syntax error: expected key (trailing "+"?)';
				}
				
				// Release keys
				options.eventProps.charCode = undefined;
				for (i=0; i < holdKeys.length; i+=1) {
					options.eventProps.keyCode = holdKeys[i];
					options.eventProps.which = holdKeys[i];
					switch (options.eventProps.keyCode) {
					case SpecialKeyCodes.ALT:		options.eventProps.altKey = false; break;
					case SpecialKeyCodes.SHIFT:		options.eventProps.shiftKey = false; break;
					case SpecialKeyCodes.CONTROL:	options.eventProps.ctrlKey = false; break;
					case SpecialKeyCodes.META:		options.eventProps.metaKey = false; break;
					default:
						break;
					}
					$target.simulate("keyup", options.eventProps);				
				}
			}
			
		});
	}(jQuery));

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute',['ui.router', 'ngSanitize', 'ngResource', 'ngLodash'])
		// Possibly unhandled rejection 다루는 로직
		.config(['$qProvider', function ($qProvider) {
		    $qProvider.errorOnUnhandledRejections(false);
		}])

		.run(function($rootScope, $state, $window, $q, grammerGetService, lodash) {
			$rootScope._ = lodash;

	  	// Go Function Section
			$rootScope.goToPage = function(page, id, data){
				if(id<1) id=null;
				$state.go(page, { 'id':id, 'data':data }, { location: false });
			};

			// Message Function Section
			$rootScope.message = function(messagedir, content, interval_rest){
				if(interval_rest&&angular.isNumber(interval_rest)) $rootScope.$broadcast('message_'+messagedir, content, interval_rest);
				else $rootScope.$broadcast('message_'+messagedir, content);
			};

			// Countdown Function Section
			$rootScope.countdown = function(time){
				$rootScope.$broadcast('countdown', time);
			};

			// Set Function Section
			$rootScope.setDeviceWidthHeight = function(){
				$rootScope.device={ width:$window.innerWidth, height:$window.innerHeight };
			};

			// What Function Section
			$rootScope.what = function(obj){
			  console.log(obj);
			};

			$rootScope.initialize = function(){
				// boolean 관리
				$rootScope.booleans = {
					popup_boolean: false
				};

				$rootScope.values = {};

				// 기존 initialize 함수
				$rootScope.grammer_switch = 2;
				$rootScope.current_func_key = null;
				$rootScope.target_parent = null;
				$rootScope.setDeviceWidthHeight();
				$rootScope.excute_on = { value: null };
				$rootScope.excute_log_on = { value: null };
				grammerGetService.getGrammerStorage().then(function(grammer_storage){
					if(grammer_storage){
						$rootScope.excute_on.value = grammer_storage.excute_on;
						$rootScope.excute_log_on.value = grammer_storage.excute_log_on;
						$rootScope.grammer_storage = grammer_storage;
						if(grammer_storage.current_func_key&&grammer_storage.current_func_key!=null) $rootScope.current_func_key = grammer_storage.current_func_key; 
					}
					else{
						$rootScope.excute_on.value = true;
						$rootScope.excute_log_on.value = true;
						$rootScope.grammer_storage = null;
						$rootScope.current_func_key = null;
					}
				});
			};
			$rootScope.initialize();

			// Window Function Section 
			$window.addEventListener('resize', function() {
				$rootScope.$apply(function(){
					$rootScope.setDeviceWidthHeight();
				});
			});

			// function receiveMessage(event) {
			// 	console.log('event');
			// 	console.log(event);
			// 	console.info('event', event);
			// 	event.data = JSON.parse(event.data);
			// 	if(event.data.name=='responseForGetDocumentOfWoringFrame') $rootScope.$broadcast('DepartureOfDocumentForWorkingFrame', event.data.corresponding_frame_document);
			// };

			// window.addEventListener("message", receiveMessage, false);

			// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
			//   console.log(response.farewell);
			// });

			// OnMessage Function Section
			chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
				if(request.command=="goToPage"){
					location.href=request.value;
					sendResponse({response_value:"response"});
				}
			});
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	$(document).ready(function(){
		var div_grammer = $('<div class="f-ng" id="grammer" ng-app="grammer_execute"></div>');
	  div_grammer.append('<copyright-dir ng-if="$root.grammer_storage"></copyright-dir>');
	  div_grammer.append('<list-dir grammer-storage="$root.grammer_storage" ng-if="$root.grammer_storage"></list-dir>');
	  div_grammer.append('<popup-dir grammer-storage="$root.grammer_storage" ng-if="$root.booleans.popup_boolean&&$root.grammer_storage"></popup-dir>');
	  div_grammer.append('<logview-dir grammer-storage="$root.grammer_storage" grammer-key="$root.grammer_storage.grammer_key" versions="$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].versions" version-key="$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].version_key" version-value="$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].versions[$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].version_key]" ng-if="$root.grammer_storage"></logview-dir>')
	  $('html').append(div_grammer);
	  angular.bootstrap(div_grammer, ['grammer_execute']);
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.config(function ($httpProvider, $resourceProvider, $compileProvider) {

			$httpProvider.defaults.xsrfCookieName = 'csrftoken';
			$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
			$resourceProvider.defaults.stripTrailingSlashes = false;
			$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
		});

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.filter('capitalize', function() {
		  return function(input) {
		    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
		  }
		})
		.filter('trusted', ['$sce', function ($sce) {
	    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
		}])
		.filter('digit2', function() {
			return function(input) {
				input = Number(input);
				if (input < 10) { 
					input = '0' + input;
				}
				return input;
			}
		})
		.filter('chromeExtensionURL', function() {
			return function(input) {
				if(input) return chrome.extension.getURL(input);
				else return null;
			}
		})
		.filter('logFuncKeyFilter', function(){
			return function(func_key) {
				if(func_key=='like') return '님의 게시물에 좋아요 했습니다.';
				else if(func_key=='follow') return '님을 팔로우 했습니다.';
				else if(func_key=='review') return '님에게/님의 게시글에 댓글/답글 달았습니다.';
				else if(func_key=='invite') return '님을 초대 했습니다.';
				else if(func_key=='signup') return '에 가입 했습니다.';
				else if(func_key=='friend') return '님에게 친구신청 했습니다.';
				else if(func_key=='message') return '님에게 메세지 보냈습니다.';
				else if(func_key=='unfriend') return '님을 친구요청 취소 했습니다.';
				else if(func_key=='filter') return '댓글필터링 했습니다.';
				else if(func_key=='extract') return '추출 했습니다.';
				else if(func_key=='unfollow') return '님을 언팔로우 했습니다.';
				else if(func_key=='unfollow_all') return '님을 언팔로우 했습니다.';
				else if(func_key=='empathize') return '님의 게시글에 공감했습니다.';
				else if(func_key=='add_together') return '님에게 서로이웃신청했습니다.';
				else return '님에게 작업했습니다.';
			}
		});

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("listDir", function ($rootScope, $filter, $timeout, urlService, grammerGetService, grammerSetService) {
			return {
				link: function (scope, element, attrs) {

					// Set Function Section
					scope.setGrammerKeyOfGrammerStorage = function(grammer_key){
						scope.grammer_storage.grammer_key = grammer_key;
					};

					scope.setGrammerKeyOfGrammerStorageWithUrl = function(){
						// 접속중인 url과 grammers안의 grammer들을 비교해서 대응하는 grammer_key를 얻는다.
						grammerGetService.getGrammerKeyWithUrl().then(function(grammer_key){
							// grammer_storage를 get한 뒤 얻은 grammer_key를 넣어서 set하고 다시 가져온다.
							grammerSetService.setGrammerKey(grammer_key).then(function(grammer_key){
								// 앞단의 grammer_storage(scope.grammer_storage)에 grammer_key값을 세팅한다.
								scope.setGrammerKeyOfGrammerStorage(grammer_key);
							});
						});
					};

					// Toggle Function Section
					scope.toggleGrammer = function(grammer_key){
	          // displaymode(LIST) --> displaymode(DETAIL)
	          if(scope.displaymode == 'LIST'){
	            scope.displaymode = 'DETAIL';
	            // 서버 grammer_storage에 grammer_key를 세팅한다.
	            grammerSetService.setGrammerKey(grammer_key).then(function(grammer_key){
	              // 앞단 grammer_storage에 grammer_key를 세팅한다.
	              scope.setGrammerKeyOfGrammerStorage(grammer_key);
	            }, function(){
	              return;
	            });
	          }
	          // displaymode(DETAIL) --> displaymode(LIST)
	          else {
	            scope.displaymode = 'LIST';
	          }
	        };

					scope.toggleExcute = function(){
						grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
							grammer_storage_get.excute_on = !grammer_storage_get.excute_on;
							grammerSetService.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
								$rootScope.excute_on.value = grammer_storage_set.excute_on;
							});
						});
					};

					scope.toggleExtension = function(){
						$rootScope.message('settings_inform', '우측 상단 주소창 옆 빨강색 GRAMMER 아이콘을 클릭해주세요 :)');
					};

					// Initialize Function Section
					scope.initialize = function(){
						if(!scope.grammer_storage) return;
						scope.setGrammerKeyOfGrammerStorageWithUrl();
					};

					scope.$watch('grammers', function(newValue, oldValue) {
						scope.initialize();
					});

					scope.$watch('grammer_storage.grammer_key', function(newValue, oldValue) {
						if(scope.grammer_storage.grammer_key) scope.displaymode = 'DETAIL';
						else scope.displaymode = 'LIST';
					});
			
					var timeoutPromise;
					scope.$watch('displaymode', function(newValue, oldValue){
						if(newValue==oldValue) return;
						if(scope.displaymode=='LIST'){
							$timeout.cancel(timeoutPromise);
						}
						if(scope.displaymode=='DETAIL'){
							if(!scope.grammer_storage.grammer_key){
								scope.displaymode = 'LIST';
								return;
							}
							var url = urlService.getUrl();
							if(_.includes(url, scope.grammer_storage.grammers[scope.grammer_storage.grammer_key].host)) return;
							$timeout.cancel(timeoutPromise);
							timeoutPromise = $timeout(function(){
								urlService.goToUrl(scope.grammer_storage.grammers[scope.grammer_storage.grammer_key].url);
							}, 1000);
						}
					});

				},
				replace: true,
				scope:{
					grammer_storage: "=grammerStorage"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/list/listDir.html'))
			};
		});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("detailDir", function ($q, $rootScope, $filter, stringService, grammerStartService, grammerStopService, grammerSetService, grammerGetService){
			return {
			link: function (scope, element, attrs) {

					// Check Function Section
					scope.checkExistOfFuncs = function(funcs, message_boolean){
						// click==true인 func가 없으면 '하고 싶은 작업을 선택해주세요' 라는 메시지가 뜬다.
						if(!_.findKey(funcs, { 'click': true })){
							if(message_boolean) $rootScope.message('stopstart', '하고 싶은 작업을 선택해주세요');
							return false;
						}
						else{
							return true;
						}
					};

					// Start Function Section
					scope.start = function(){
						// click==true인 func가 없을 때
						if(!scope.checkExistOfFuncs(scope.version_value.funcs, true)){
							scope.togglePlay(false);
							scope.stop();
						}
						// click==true인 func가 있을 때
						else{
							grammerStartService.start();
							// if(new Date().getTime() <= new Date('9/1/2016').getTime()){
							// }
							// else{
							// 	alert('9월 1일까지만 사용할 수 있는 그래머 확장프로그램입니다.');
							// 	scope.stop();
							// }
						}
					};

					// Stop Function Section
					scope.stop = function(){
						grammerStopService.stop();
					};

					// Toggle Function Section	

					// (instagrammerUnfollow 사용)&&(Viral Version 사용==$rootScope.grammr_switch==2) 시 클릭한 func말고 나머지는 전부 click = false로 만들기
					// func toggle한다.
					scope.toggleFunc = function(func_key){
						// 해당 func이 준비되었을 때
						if(scope.version_value.funcs[func_key].ready!=false){
							scope.version_value.funcs[func_key].click = !scope.version_value.funcs[func_key].click;
						}
						// 해당 func이 준비되지 않았을 때
						else{
							scope.version_value.funcs[func_key].click = false; 
							$rootScope.message(func_key, func_key+' 기능은 지금 개발 중입니다. 잠시 기다려주세요!');
						}
						if((scope.version_value.funcs[func_key].ready!=false)
						&&scope.version_value.funcs[func_key].only&&($rootScope.grammer_switch==1||$rootScope.grammer_switch==2)){
							grammerSetService.setCurrentFuncKey(func_key).then(function(current_func_key){
								$rootScope.current_func_key = current_func_key;
							});
							// 해당 func만 click(true), 나머지 func click(false)
							grammerSetService.setClickOfFunc(scope.grammer_key, scope.version_key, func_key, scope.version_value.funcs[func_key].click).then(function(click_value){
								scope.version_value.funcs[func_key].click = click_value;
								angular.forEach(scope.version_value.funcs, function(func_value, func_key_at_funcs){
									if(func_key!=func_key_at_funcs){
										grammerSetService.setClickOfFunc(scope.grammer_key, scope.version_key, func_key_at_funcs, false).then(function(click_value){
											scope.version_value.funcs[func_key_at_funcs].click = click_value;
										});
									} 
								});
							});
						}
						else{
							grammerSetService.setClickOfFunc(scope.grammer_key, scope.version_key, func_key, scope.version_value.funcs[func_key].click).then(function(click_value){
								scope.version_value.funcs[func_key].click = click_value;
							});
						}
					};

					scope.togglePlayPrepare = function(){
						return $q(function(resolve, reject){
							grammerGetService.getStatuses(scope.grammer_key, scope.version_key).then(function(statuses_get){
								if(_.size(statuses_get)==0) { resolve(statuses_get); return; }
								var status_index = 0;
								angular.forEach(statuses_get, function(status_value, status_key){
									status_index += 1;
									if(!(stringService.containString1InString2WithoutCapital('limit', status_key)
										||stringService.containString1InString2WithoutCapital('end', status_key))) delete statuses_get[status_key];
									if(status_index>=_.size(statuses_get)) resolve(statuses_get);
								});
							}, function(){
								resolve({});
							});
						});
					};

					// toggle해놓은 func들을 한번에 돌린다.
					scope.togglePlay = function(play_value){
						// play_value가 boolean값이 아닐 때
						if(!_.isBoolean(play_value)){
							play_value = !scope.version_value.play;
						}
						// play_value===true
						if(play_value){
							scope.togglePlayPrepare().then(function(statuses){
								// statuses를 빈객체({})로 셋팅한다.
								grammerSetService.setStatuses(scope.grammer_key, scope.version_key, statuses).then(function(){
									grammerSetService.setPlayOfVersion(scope.grammer_key, scope.version_key, true);
									scope.version_value.play = true;
								});
							});
						}
						// play_value===false
						else{ scope.version_value.play = false; }
					};

					// 이 부분 때문에 새로고침을 해도 작업중이었으면 작업을 시작한다.
					// 이 부분 때문에 scope.stop 함수가 실행됨으로써 해당 버전의 statuses가 생성된다.
					scope.initialize = function(){
						if(scope.version_value.play){
							scope.start(); 
							return; 
						}
						scope.stop();
					};
					scope.initialize();

					// Watch Function Section
					scope.$watch('version_value.play', function(newValue, oldValue){
						if(newValue!==oldValue){
							if(scope.version_value.play){ scope.start(); return; }
							scope.stop();
						}
					});
				},
				replace: true,
				scope:{
					versions: "=versions",
					version_value: "=versionValue",
					version_key: "=versionKey",
					grammer_key: "=grammerKey"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/detail/detailDir.html'))
			};
		});

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("versionDir", function ($rootScope, $filter, grammerSetService) {
			return {
				link: function (scope, element, attrs) {

					// Get Function Section
					scope.getIdsOfVersions = function(){
						return _.values(_.mapValues(scope.grammer_value.versions, 'id'));
					};

					scope.getOrderedIdsOfVersions = function(){
						return _.orderBy(scope.getIdsOfVersions());
					};
					 
					scope.getIdOfCurrentVersion = function(){
						return scope.grammer_value.versions[scope.grammer_value.version_key].id;
					};

					scope.getIndexOfCurrentId = function(){
						return scope.getOrderedIdsOfVersions().indexOf(scope.getIdOfCurrentVersion());
					};

					scope.getPreIdOfCurrentVersion = function(){
						var pre_index = scope.getIndexOfCurrentId()-1;
						return scope.getOrderedIdsOfVersions()[pre_index];
					};

					scope.getNextIdOfCurrentVersion = function(){
						var next_index = scope.getIndexOfCurrentId()+1;
						return scope.getOrderedIdsOfVersions()[next_index];
					};

					// Increse Function Section
					scope.increaseVersion = function(){
						// $rootScope.what(_.filter(scope.grammer_value.versions, {'id':scope.getIdOfCurrentVersion()+1}));
						grammerSetService.setVersionKey(scope.grammer_key, _.findKey(scope.grammer_value.versions, ['id',scope.getNextIdOfCurrentVersion()])).then(function(version_key){
							scope.grammer_value.version_key = version_key;
						});
					};

					// Decrease Function Section
					scope.decreaseVersion = function(){
						grammerSetService.setVersionKey(scope.grammer_key, _.findKey(scope.grammer_value.versions, ['id',scope.getPreIdOfCurrentVersion()])).then(function(version_key){
							scope.grammer_value.version_key = version_key;
						});
					};

				},
				replace: true,
				scope:{
					grammer_key : "=grammerKey",
					grammer_value : "=grammerValue"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/version/versionDir.html'))
			};
		});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("copyrightDir", function ($rootScope, $filter) {
			return {
				link: function (scope, element, attrs) {
					scope.openGrammerWindow = function(){
						var window_grammer = window.open('http://www.grammer.kr', '_blank');
						if(window_grammer) window_grammer.focus();
						else alert('Please allow popups for this website');
					};
				},
				replace: true,
				scope:false,
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/copyright/copyrightDir.html'))
			};
		});

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("messageDir", function ($rootScope, $filter, $timeout) {
			return {
				link: function (scope, element, attrs) {
						
					var timeoutShowTrue;
					var timeoutShowFalse;
					var timeoutDeleteTrue;

					scope.$on('message_'+attrs['message'], function(event, content, interval_rest){

						if(!(content&&content.length>=1)) return;
						// 쉼 메세지일 경우
						if(content.indexOf('쉬었다가')>=0){
							scope.message_of_attrs = { value: attrs['message'] };
							scope.message.content = content;
							scope.message.delete = false;
							$timeout.cancel(timeoutShowTrue);
							$timeout.cancel(timeoutShowFalse);
							$timeout.cancel(timeoutDeleteTrue);
							timeoutShowTrue = $timeout(function(){scope.message.show = true;},100);
							timeoutShowFalse = $timeout(function(){scope.message.show = false;},interval_rest*1000*60);
							timeoutDeleteTrue = $timeout(function(){scope.message.delete = true;},interval_rest*1000*60);
						}
						// 쉼 메시지가 아닌 경우
						else{
							scope.message_of_attrs = { value: attrs['message'] };
							scope.message.content = content;
							scope.message.delete = false;
							$timeout.cancel(timeoutShowTrue);
							$timeout.cancel(timeoutShowFalse);
							$timeout.cancel(timeoutDeleteTrue);
							timeoutShowTrue = $timeout(function(){scope.message.show = true;},100);
							timeoutShowFalse = $timeout(function(){scope.message.show = false;},7000);
							timeoutDeleteTrue = $timeout(function(){scope.message.delete = true;},7500);
						}
					});

					scope.delayDuration = function(){
						$timeout.cancel(timeoutShowTrue);
						$timeout.cancel(timeoutShowFalse);
						$timeout.cancel(timeoutDeleteTrue);
						timeoutShowTrue = $timeout(function(){scope.message.show = true;},100);
						timeoutShowFalse = $timeout(function(){scope.message.show = false;},4000);
						timeoutDeleteTrue = $timeout(function(){scope.message.delete = true;},4500);
					};

					scope.initialize = function(){
						scope.message = {
							content : '',
							show : false,
							delete : true
						}
					};
					scope.initialize();
				},
				replace: true,
				scope:{
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/message/messageDir.html'))
			};
		});

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("countdownDir", function ($rootScope, $filter, $interval) {
			return {
				link: function (scope, element, attrs) {

					// Get Function Section
					scope.second = 0;
					scope.getSecond=function(){
						if(angular.isNumber(scope.time)&&scope.time>=1) scope.second = Math.floor(scope.time%60);
						else scope.second = 0;
					};
					scope.minute = 0;
					scope.getMinute=function(){
						if(angular.isNumber(scope.time)&&scope.time>=1) scope.minute = Math.floor((scope.time/60)%60);
						else scope.minute = 0;
					};
					scope.hour = 0;
					scope.getHour=function(){
						if(angular.isNumber(scope.time)&&scope.time>=1) scope.hour = Math.floor(scope.time/(60*60));
						else scope.hour = 0;
					};

					var intervalPromise;
					$rootScope.$on('countdown', function(event, time){
						$interval.cancel(intervalPromise);
						scope.time = Math.floor(time);
						// interval promise를 1초로 끊어서 주었다.
						intervalPromise = $interval(function(){
							scope.time -=1;
							scope.getSecond();
							scope.getMinute();
							scope.getHour();
						},1000);
					});

					scope.$watch('time', function(){
						if(scope.time<=0) $interval.cancel(intervalPromise);
					});


				},
				replace: true,
				scope:{
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/countdown/countdownDir.html'))
			};
		});

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.directive('logviewDir', function($rootScope, $filter, grammerGetService, grammerSetService){
			return {
				link: function(scope, element, attrs){

					// Toggle Function Section
					scope.toggleExcuteLog = function(){
						grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
							grammer_storage_get.excute_log_on = !grammer_storage_get.excute_log_on;
							grammerSetService.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
								$rootScope.excute_log_on.value = grammer_storage_set.excute_log_on;
							});
						});
					};

					scope.toggleFunc = function(func_key){
						scope.inform_click = false;
						scope.current_func_key = func_key;
						if(scope.version_value.funcs[func_key].ready!=false){
							scope.version_value.funcs[func_key].click_log = true;
							grammerSetService.setClickLogOfFunc(scope.grammer_key, scope.version_key, func_key, scope.version_value.funcs[func_key].click_log).then(function(click_value){
								scope.version_value.funcs[func_key].click_log = click_value;
								var funcs_list_not_matched = [];
								var check_number = 0;
								angular.forEach(scope.version_value.funcs, function(func_value, func_key_at_funcs){
									if(func_key!=func_key_at_funcs){
										funcs_list_not_matched.push({name:func_key_at_funcs});
										check_number += 1;
									}
									if(_.size(scope.version_value.funcs)==(check_number+1)){
										var func_index = 0;
										var execute = function(){
											grammerSetService.setClickLogOfFunc(scope.grammer_key, scope.version_key, funcs_list_not_matched[func_index].name, false).then(function(click_value){
												scope.version_value.funcs[funcs_list_not_matched[func_index].name].click_log = click_value;
												func_index += 1;
												if(func_index!=funcs_list_not_matched.length){
													execute();
												}
											});
										};
										execute();
									}
								});	
							});
						}	
						else{
							scope.version_value.funcs[func_key].click_log = false;
							alert('해당 기능은 현재 개발/개발예정 중에 있습니다. :)');
						}
					};

					// Reset Function Section
					scope.resetLogs = function(){
						grammerGetService.getFunc(scope.grammer_key, scope.version_key, scope.current_func_key).then(function(func_get){
							func_get.logs = [];
							grammerSetService.setFunc(scope.grammer_key, scope.version_key, scope.current_func_key, func_get).then(function(func_set){
								
							});
						});
					};

					// Initialize Section
					scope.initialize = function(){
						scope.inform_click = null;
						scope.current_func_key = null;
						var clicked_func = _.findKey(scope.version_value.funcs, {click_log:true});
						if(!clicked_func) scope.inform_click = true;
						else scope.current_func_key = clicked_func;
					};
					scope.initialize();

				},
				replace: true,
				scope: {
					grammer_storage: "=grammerStorage",
					grammer_key: "=grammerKey",
					versions: "=versions",
					version_key: "=versionKey",
					version_value: "=versionValue"
				},
				restrict:"EA",
				templateUrl:$filter('trusted')(chrome.extension.getURL('templates_execute/logview/logviewDir.html'))
			}
		})

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.directive('popupDir', function($rootScope, $q, $filter, $interval, popupService){
			return {
				link: function(scope, element, attrs){

					// Resource Function Section
					// var resource_url = 'http://127.0.0.1:8000/InstaUnfollow/'; // 개발용
	        var resource_url = 'http://eb-grammer-app-dev.ap-northeast-2.elasticbeanstalk.com/InstaUnfollow/'; // 개인용
	        // var resource_url = 'http://ebgrammerapp-changho.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 신창호
	        // var resource_url = 'http://ebgrammerapp-heungbo.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 강흥보
	        // var resource_url = 'http://ebgrammerapp-changdae.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 안창대
	        // var resource_url = 'http://ebgrammerappdoochul.52ksw2uxxt.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 주두철
	        // var resource_url = 'http://ebgrammerapp.cznf3q5vi6.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 박희빈(삼월)
	        // var resource_url = 'http://ebgrammerapp-env-jisu.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 안지수
	        // var resource_url = 'http://ebGrammerApp-dongju-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 김동주
	        // var resource_url = 'http://ebGrammerApp-kimcorp-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 김기업(단순 기업형)
	        // var resource_url = 'http://ebGrammerApp-super-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 송준호 super
	        // var resource_url = 'http://ebGrammerApp-younghwa-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 문영화
	        // var resource_url = 'http://eb-grammer-app-dev.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 변동섭
	        // var resource_url = 'http://ebGrammerApp-cover-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 커버
	        // var resource_url = 'http://ebGrammerApp-minsun-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 강민성
	        // var resource_url = 'http://ebgrammerapp-bibong-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 비봉
	        // var resource_url = 'http://ebGrammerApp-dongu-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 동우
	        
	        // var resource_url_two = 'http://127.0.0.1:8000/FollowersFollowings/'; // 개발용
	        var resource_url_two = 'http://eb-grammer-app-dev.ap-northeast-2.elasticbeanstalk.com/FollowersFollowings/'; // 개인용
	        // var resource_url_two = 'http://ebgrammerapp-changho.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 신창호
	        // var resource_url_two = 'http://ebgrammerapp-heungbo.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 강흥보
	        // var resource_url_two = 'http://ebgrammerapp-changdae.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 안창대
	        // var resource_url_two = 'http://ebgrammerappdoochul.52ksw2uxxt.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 주두철
	        // var resource_url_two = 'http://ebgrammerapp.cznf3q5vi6.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 박희빈(삼월)
	        // var resource_url_two = 'http://ebgrammerapp-env-jisu.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 안지수
	        // var resource_url_two = 'http://ebGrammerApp-dongju-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 김동주
	        // var resource_url_two = 'http://ebGrammerApp-kimcorp-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 김기업(단순 기업형)
	        // var resource_url_two = 'http://ebGrammerApp-super-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 송준호 super
	        // var resource_url_two = 'http://ebGrammerApp-younghwa-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 문영화
	        // var resource_url_two = 'http://eb-grammer-app-dev.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 변동섭
	        // var resource_url_two = 'http://ebGrammerApp-cover-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 커버
	        // var resource_url_two = 'http://ebGrammerApp-minsun-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 강민성
	        // var resource_url_two = 'http://ebgrammerapp-bibong-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 비봉
	        // var resource_url_two = 'http://ebGrammerApp-dongu-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 동우

	        // Interval Function Section
	        scope.intervalRequest = function(){
	          return $q(function(resolve, reject){
	            var intervalPromise = $interval(function(){
	              // 이제 instaAccount 모델에서 followers, followings 가져오는 로직을 추가하여야 한다.
	              popupService.sendMessageOnPopupTwo(resource_url_two, scope.values.user_name).then(function(response){
	                if(response&&response.exist&&response.followers&&response.followings){
	                  $interval.cancel(intervalPromise);
	                  scope.values.server_information = '정보 리펙토링/저장 중입니다';
	                  popupService.refactorInformationOnPopup(response.followers, response.followings).then(function(){
	                    $interval.cancel(intervalPromise_first);
	                    if(scope.values.server_information_on) scope.values.server_information_on = false;
	                    $rootScope.$broadcast('useUnfollowNew');
	                  });
	                }
	                else{
	                  // scope.values.server_information_delay_on = false;
	                  // scope.values.server_information = '정보를 가져오는데 실패했습니다 다시 시도해주세요.';
	                }
	              });
	            }, 10000); // 10초에 한번씩
	          });
	        };

	        var intervalPromise_first;
	        // Use Function Section
	        scope.useUnfollowNew = function(){
	          scope.values.server_information_on = true;
	          if(!(scope.values&&scope.values.user_name&&scope.values.password)){
	            scope.values.server_information = '사용자이름과 비밀번호를 입력해주세요.';
	            return;
	          }
	          intervalPromise_first = $interval(function(){
	            scope.values.server_information_time += 1;
	          }, 1000);
	          scope.values.server_information_delay_on = true;
	          scope.values.server_information = '팔로워/팔로잉 리스트를 가져오는 중입니다';
	          popupService.sendMessageOnPopup(resource_url, scope.values.user_name, scope.values.password).then(function(response){
	            if(response.exist){
	            }
	            else{
	              // 사용자이름, 비밀번호가 부합하지 않을 때(제대로 된 정보를 가져오지 않았을 때)
	              scope.values.server_information_delay_on = false;
	              scope.values.server_information = '사용자이름과 비밀번호를 다시 입력해주세요.';
	            }
	          });
	          scope.intervalRequest(); 
	        };

	        scope.useUnfollowPast = function(){
	        	$rootScope.$broadcast('useUnfollowPast');
	        };

					// Initialize Function Section
					scope.initialize = function(){
						scope.text_list = [
							'안녕하세요. 그래머입니다.',
							'계정 사용자 이름과 비밀번호를 입력해주시면',
							'훨씬 빠른 언팔로우 작업이 가능합니다.',
							'입력하신 정보는 오로지 원활한 작업을 위해',
							'프로그램 내에서만 사용이 되며,',
							'그래머는 이를 <span class="t-bo c-bk">절대</span> 수집하지 않습니다.',
							'혹시 사용자이름, 비밀번호를',
							'잘 입력하셨는데 맞지 않다고 나온다면',
							'새로고침을 누르시고 본인임버튼을 클릭해주세요.',
							'하시는 일에 작게나마 도움이 되었으면 좋겠습니다.',
							'감사합니다 : )'
						];

						scope.values = { 
							user_name:null, 
							password:null,
							server_information_on:false,
	            server_information_delay_on:false,
							server_information:'',
	            server_information_time:0
						};

						scope.promises = [];
					};
					scope.initialize();

				},
				replace: true,
				scope:{
					grammer_storage: "=grammerStorage"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/popup/popupDir.html'))
			}
		});

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('arrayService', function($q, $rootScope, stringService){

			this.target_parent;
			this.element_index;

			this.makeArray = function(string, split){
				if(angular.isArray(string)) return string;
				else if(angular.isString(string)) return string.split(split);
				else return [];
			};
			this.hasItems = function(array){
				try{
					if(!angular.isArray(array)) return false;
					return array.length>=1;
				}catch(e){
					return false;
				}
			};
			
			this.getRandom = function(array){
				if(!angular.isArray(array)) {
					return null;
				}
				return array[Math.floor(Math.random()*array.length)];
			};

			// words은 배열로 들어온다.
			// innerOuterHTMLs.list, innerOuterHTML
			// 1. innerOuterHTMLs.list -> 등록해 놓은 목록
			// 2. innerOuterHTML -> 긁어온 element 안의 innerHTML or outerHTML
			// innerOuterHTMLs.list, innerOuterHTML
			this.existWordsInString = function(words, string){
				var self = this;
				return $q(function(resolve, reject){
					if(!self.hasItems(words)){ resolve(false); return; }
					// 아랫줄은 string에서 모든 빈칸을 ""로 바꾼다.
					// \s 는 whitespace를 의미 
					// g 는 global을 의미 
					// 즉, /\s/g란 모든 빈칸을 의미한다.
					string = string.replace(/\s/g,"");
					angular.forEach(words, function(word, word_index){
						word = word.replace(/\s/g,"");
		  			if(word&&stringService.containString1InString2WithoutCapital(word, string)){ 
		  				resolve(word);
		  				return;
		  			}
		  			if(word_index+1==words.length){
		  				resolve(null);
		  				return;
		  			}
		  		});
				});
			};

			this.famoussayings = [
				'명성을 쌓는 것에는 20년이란 세월이 걸리며 명성을 무너뜨리는 것에는 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다<br/><br/>-워렌버핏',
				'간단함이 훌륭함의 열쇠다<br/><br/>-이소룡',
				'승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다<br/><br/>-크리스티 메튜슨',
				'승자는 책임지는 태도로 살며, 패자는 약속을 남발한다<br/><br/>-유태경전',
				'말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다<br/><br/>-하우얼',
				'내 자신의 무식을 아는 것은 지식으로의 첫걸음이다<br/><br/>-바이런',
				'가시에 찔리지 않고서는 장미를 모을 수 없다<br/><br/>-핀페이',
				'고통을 거치지 않고 얻은 승리는 영광이 아니다<br/><br/>-나폴레옹',
				'기와 한 장 아껴서 대들보 썩는다<br/><br/>-한국속담',
				'바람이 불지 않으면 노를 저어라<br/><br/>-윈스턴 처칠',
				'강에서 물고기를 보고 탐내는 것보다 돌아가서 그물을 짜는 것이 옳다<br/><br/>-예악지',
				'역경은 사람을 부유하게 하지는 않으나 지혜롭게 한다<br/><br/>-풀러',
				'낭비한 시간에 대한 후회는 더 큰 시간 낭비다<br/><br/>-메이슨 쿨리',
				'들은 것은 잊어버리고, 본 것은 기억하고 직접 해 본 것은 이해한다<br/><br/>-공자',
				'산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다<br/><br/>-공자',
				'앞날을 결정짓고자 하면 옛 것을 공부하라<br/><br/>-공자',
				'아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다<br/><br/>-카를로스 곤',
				'절대 포기하지 마라. 장벽에 부딪히거든, 그것이 절실함을 나에게 물어보는 장치에 불과하다는 것을 잊지 마라<br/><br/>-랜디 포시',
				'현재와 미래는 어떻게든 연결되어 있다.<br/><br/>-스티브 잡스',
				'모든 기능은 유지비용이 든다. 소수의 기능을 가지는 것은 우리가 정말로 신경 쓰는 것에 집중하도록 하고 그것들이 뛰어나도록 만든다<br/><br/>-데이비드 카프',
				'시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다.<br/><br/>-푸블릴리우스 시루스',
				'다리를 움직이지 않고는 작은 도랑도 건널 수 없다<br/><br/>-알랭',
				'항상 갈구하라.바보짓을 두려워마라<br/><br/>-스티브 잡스',
				'비장의 무기는 아직 손 안에 있다. 그것은 희망이다<br/><br/>-나폴레옹',
				'성공을 위한 세 가지 열쇠는 이것이다. 첫째는 끈기, 둘째는 끈기, 셋째도 끈기<br/><br/>-이소룡',
				'성공의 커다란 비결은 결코 지치지 않는 인간으로 인생을 살아가는 것이다.<br/><br/>-알버트 슈바이처',
				'나는 그저 나보다 머리가 좋은 사람들을 채용했을 뿐이다<br/><br/>-록펠러',
				'18년동안 아마존을 성공으로 이끈 3가지 큰 전략이 있다. 그것은 고객을 우선 생각하고, 발명하고, 인내하는 것이다<br/><br/>-제프 베조스',
				'가끔은 혁신을 추구하다 실수할 때도 있다. 하지만 빨리 인정하고 다른 혁신을 개선해 나가는 것이 최선이다<br/><br/>-스티브 잡스',
				'휴식은 게으름도, 멈춤도 아니다<br/><br/>-헨리 포드',
				'배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다<br/><br/>-공자',
				'자신의 꿈을 만들어가지 못하면 언젠가 남의 꿈을 이루는데 이용될 것이다<br/><br/>-암바니',
				'성공은 최종적인 게 아니며 실패는 치명적인 게 아니다. 중요한 것은 지속하고자 하는 용기다<br/><br/>-윈스턴 처칠',
				'아무런 위험을 감수하지 않는다면 더 큰 위험을 감수하게 될 것이다<br/><br/>-에리카 종',
				'성공은 수고의 대가라는 것을 기억하라<br/><br/>-소포클레스',
				'실패는 고통스럽다. 그러나 최선을 다하지 못했음을 깨닫는 것은 몇 배 더 고통스럽다<br/><br/>-엔드류 매튜스',
				'품질이란 우연히 만들어지는 것이 아니라, 언제나 지적 노력의 결과이다.<br/><br/>-존 러스킨',
				'성공을 원한다면 많은 것들과 친해져야 한다. 인내심은 당신의 소중한 친구로, 경험은 친절한 상담자로, 신중함은 당신의 형제로, 희망은 늘 곁에서 지켜주는 부모님처럼 친해져야 한다<br/><br/>-J 에디슨',
				'자신이 대중과 똑같아질 때는 잠시 쉬고 고민할 때이다<br/><br/>-마크 트웨인',
				'성공은 영원하지 않고, 실패는 치명적이지 않다<br/><br/>-마이크 디트카',
				'정신 이상이란 계속 같은 행동을 되풀이하면서 다른 결과를 기대하는 것이다.<br/><br/>-아인슈타인',
				'우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다<br/><br/>-월터 페이터',
				'빛을 보게 만들 수 없다면, 열이라도 느끼게 해라<br/><br/>-로널드 레이건',
				'아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라.우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다<br/><br/>-토마스 제퍼슨',
				'계속 노력해야 한다. 우리는 모두 성장하고 있다. 지름길은 없다. 방문객을 확보하려면 시간을 들여야 한다<br/><br/>-존 그루버',
				'다른 사람들이 할 수 있거나 할 일을 하지 말고, 다른 이들이 할 수 없고 하지 않을 일들을 해라<br/><br/>-아멜리아 에어하트',
				'패배는 최악의 실패가 아니다. 시도를 하지 않는 것이 진짜 실패다<br/><br/>-조지 우드베리',
				'실패로부터 성공을 이끌어내라.좌절과 실패는 성공에 이르는 가장 확실한 디딤돌이다<br/><br/>-데일 카네기',
				'경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다<br/><br/>-오귀스트 르네 로댕',
				'계산된 위험을 감수해라. 이것은 단순한 무모함과는 완전히 다른 것이다.<br/><br/>-조지 스미스 패튼',
				'성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다<br/><br/>-윈스턴 처칠',
				'경쟁우위가 없다면, 경쟁하지 마라<br/><br/>-잭 웰치',
				'실수를 해보지 않은 사람은 한번도 새로운 일을 시도해보지 않았던 사람이다.<br/><br/>-아인슈타인',
				'한 번 실패한 것이, 앞으로의 모든 일에 실패할 것이라고 의미하지는 않는다.<br/><br/>-마릴린 먼로',
				'사업의 비결은 다른 사람들은 아무도 모르고 있는 무엇인가를 아는 것이다.<br/><br/>-아리스토틀 오나시스',
				'성공에 대한 비밀은 따로 존재하지 않는다. 그것은 바로 준비, 근면성, 실패로부터의 배움이다<br/><br/>-콜린 파월',
				'비전이 있어야 전략이 생긴다<br/><br/>-제인스 쿠퍼',
				'리스크를 줄이는 것이 이익을 추구하는 일보다 더 중요하다<br/><br/>-제임스 핑크스',
				'비즈니스에서 중요한 것은 규모가 아니다. 자본금 50만 달러의 회사가 5백만 달러의 다른 회사보다 더 많은 이익을 올리는 경우가 있다. 효율이 따르지 않는다면 규모가 핸디캡이 된다<br/><br/>-허버트 카슨',
				'최악의 시나리오를 대비하지 않는 사업 계획이 가장 나쁜 계획이다<br/><br/>-슘페터',
				'아무리 힘들지라도 최선으로 여겨지는 길을 선택하라<br/><br/>-피타고라스',
				'새로운 경쟁우위 전략은 지금까지의 원칙과 디자인을 지속적으로 개선해 나가는 것이다<br/><br/>-다이앤 브래디',
				'제조, 회계, 배송 같은 일들은 밖에 하청주고 이익을 올리는 일에 집중하라.<br/><br/>-제프리 무어',
				'부자들은 보통 무엇인가 가치 있는 것을 창조하여 무엇인가 사회에서 필요한 것을 만들어 낸다. 그 부산물로 부를 창출하는 것이다<br/><br/>-게리 헥터',
				'지난 실수를 잊어라. 실패도 잊어라. 자신이 할 것을 빼놓고 전부 잊어라. 그리고 그 할 것을 실행하라<br/><br/>-윌리엄 듀런트',
				'중요한 질문은 “당신이 얼마나 바쁜가?”가 아니다. “당신이 무엇에 바쁜가”가 핵심 질문이다<br/><br/>-오프라 윈프리',
				'나는 실패한 것이 아니었다. 단지 성공하지 않는 10,000가지 방법을 발견했을 뿐이다<br/><br/>-에디슨',
				'가장 중요한 것은 기회를 잡는 것을 두려워 않는 것이다. 기억하라, 가장 큰 실패는 시도하지 않는 것이다<br/><br/>-데비 필즈',
				'놀라운 아이디어는 넘쳐난다. 단지 부족한 점은 그것을 실행하는 의지이다<br/><br/>-세스 고딘',
				'가장 중요한 것은 당장 자리에서 일어나서 무엇인가를 하는 것이다<br/><br/>-놀란 부쉬넬',
				'절대적인 목표는 만족하는 고객으로부터 돈을 받는 것이다<br/><br/>-존 이간',
				'팀원들을 두 판의 피자로 만족시킬 수 없다면, 팀이 너무 큰 것이다<br/><br/>-제프 베조스',
				'몇몇 사람들을 정말로 행복하게 만드는 것이 많은 사람들을 조금 행복하게 만드는 것보다 낫다<br/><br/>-폴 그레이엄',
				'아이디어가 전부는 아니다. 아이디어를 실현하는 것이 더 중요하다<br/><br/>-스콧 벨스키',
				'작은 규모로 머물러 있는 것이 나쁜 것은 아니다. 작은 팀으로도 얼마든지 큰 것들을 할 수 있다<br/><br/>-제이슨 프라이드',
				'실패를 걱정하지 마라. 한 번만 옳기만 하면 된다<br/><br/>-드류 휴스턴',
				'무엇인가 만들고 싶은 게 있고, 기술자가 아직 없다면, 아이디어를 실현할 가장 가까운 방법을 찾아라<br/><br/>-데니스 크롤리',
				'많이 실패해라. 그래서 빨리 성공할 수 있게 해라<br/><br/>-톰 켈리',
				'가능한 자기자본만으로 회사를 운영하라<br/><br/>-개릿 캠프',
				'데이터가 감정을 이긴다<br/><br/>-션 래드',
				'아이디어를 발전시키는 데 100명 단위의 회사를 가질 필요는 없다<br/><br/>-래리 페이지',
				'필요하지 않다면, 투자 받는 것에 대해 걱정하지 마라. 요즘은 예전보다 사업을 더 싸게 시작할 수 있다<br/><br/>-노아 에버렛',
				'근면함이 행운의 어머니이다<br/><br/>-벤자민 프랭클린',
				'사람들은 자주 엉뚱한 것에 열심이다. 열심히 하는 것보다 더 중요한 것은 올바른 것에 노력을 기울이는 것이다<br/><br/>-카트리나 페이크',
				'이론은 멋지지만, 실행에 옮기기 전까지는 쓸모 없는 것이다<br/><br/>-제임스 페니',
				'가장 불만스러워 하는 고객이 배움의 가장 좋은 원천이다<br/><br/>-빌 게이츠',
				'타이밍, 인내, 10년간의 노력이 자신을 갑작스런 성공으로 보이게 할 것이다.<br/><br/>-비즈 스톤',
				'실수를 하고 있지 않다면, 자신이 결정을 내리고 있지 않는 것이다<br/><br/>-캐더린 쿡',
				'백만가지 아이디어를 가질 수 있겠지만, 그것을 실현하기 전까지는 쓸모 없는 것일 뿐이다<br/><br/>-로렌 아마란티',
				'경쟁자들에 대해 잊고, 자신의 고객에게 집중해라<br/><br/>-잭 마',
				'스타트업을 경영하는 것은 얼굴에 지속적인 펀치를 맞는 것과 같다. 하지만 대기업에서 일하는 것은 물고문 당하는 것과 같다<br/><br/>-폴 그레이엄',
				'안 좋은 직원을 고용하는 것은 뛰어난 인재를 놓친 것보다 대가가 크다<br/><br/>-조 크라우스',
				'잘못이 아닌, 해결책을 찾아라<br/><br/>-포드',
				'필요가 발명의 어머니라면, 불만은 진보의 어머니다<br/><br/>-록펠러',
				'내 첫 번째 회사는 엄청나게 크게 실패했다. 두 번째 회사는 실패했지만, 첫 번째보다 덜 실패했다. 세 번째 회사는 적절하게 실패했고, 견딜 만 했다 네 번째 회사는 거의 실패하지 않았고, 크게 만족하지는 않았지만 그런대로 괜찮았다. 그 다음 다섯 번째 회사는 바로 Paypal이었다<br/><br/>-맥스 레브친',
				'중요한 것을 모두 측정하라<br/><br/>-밥 파슨스',
				'포기해야겠다는 생각이 들 때야말로 성공에 가까워진 때이다<br/><br/>-밥 파슨스',
				'편안한 상황에서 벗어나라<br/><br/>-밥 파슨스',
				'만일 날마다 거절당하지 않는다면, 자신의 목표가 충분히 야심차지 않은 것이다<br/><br/>-크리스 딕슨'
			];
		});

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('booleanService', function(stringService){
			this.makeBoolean = function(boolean){
				if(boolean==true){return true;}
				else if(boolean==false){return false;}
				else if(stringService.containString1InString2WithoutCapital(boolean, 'true')){return true;}
				else if(stringService.containString1InString2WithoutCapital(boolean, 'false')){return false;}
				else return false;
			};
			this.checkBoolean = function(boolean){
				if(boolean==true||boolean==false) { return true; }
				else { return false; }
			};
		});

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('cookieService', function($rootScope, $q){

			this.createCookie = function(name,value,days) {
				if (days) {
					var date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires = "; expires="+date.toGMTString();
				}
				else var expires = "";
				document.cookie = name+"="+value+expires+"; path=/";
			};

			this.readCookie = function(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
				}
				return null;
			};

			this.readCookies = function(name) {
				return $q(function(resolve, reject){
					var name_split = name + "=";
					var cookies = document.cookie.split(';');
					var values = [];
					angular.forEach(cookies, function(cookie, cookie_index){
						if(cookie.indexOf(name_split)==0){
							values.push(cookie.split(name_split)[1]);
						}
						if(cookie_index==cookies.length-1){
							resolve(values);
						}
					});
				});
			};

			// cookie를 다 긁어 온 뒤에 csrftoken 이 포함된 cookie들을 가져온 뒤, 해당 csrftoken 값을 모아서 반환(resolve) 한다. 
			this.readCsrftokens = function() {
				return $q(function(resolve, reject){
					var cookies = document.cookie.split(';');
					var values = [];
					angular.forEach(cookies, function(cookie, cookie_index){
						// 해당 cookie에 'csrftoken=' 가 포함되어 있을 때
						if(cookie.indexOf('csrftoken=')!==-1){
							values.push(cookie.split('csrftoken=')[1]);
						}
						if(cookie_index==cookies.length-1){
							resolve(values);
						}
					});
				});
			};

			this.eraseCookie = function(name) {
				createCookie(name,"",-1);
			}
		});


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('htmlService', function($rootScope, $q, $timeout, $filter, arrayService, stringService, numberService, getSettingService){

			this.username;

			// Check Function Section
			this.checkContainingOfCorresponding = function(element, corresponding){
				var self = this;
				return $q(function(resolve, reject){
					var property_value;
					property_value = element.getAttribute(corresponding.criteria);
					if(corresponding.criteria&&corresponding.contain&&!stringService.containString1InString2WithoutCapital(corresponding.contain, property_value)){ reject(); }
					else{ resolve(); }
				});
			};

			// Element Function Section
			this.getElementsWithHref = function(elements, href, not_href){
				var self = this;
				return $q(function(resolve, reject){
					if(!(_.size(href)||_.size(not_href))){ resolve(elements); return; }
					var elements_href = [];
					angular.forEach(elements, function(element, element_index){
						var push_boolean = true;
						if(_.size(href)&&!stringService.containString1InString2WithoutCapital(href, element.href)) push_boolean = false;
						if(_.size(not_href)&&stringService.containString1InString2WithoutCapital(not_href, element.href)) push_boolean = false;
						if(push_boolean) elements_href.push(element);
						if(element_index+1>=elements.length) resolve(elements_href);
					});
				});
			};

			this.getElementWithCorrespondings = function(element, correspondings, condition){
				var self = this;
				return $q(function(resolve, reject){
					if(condition=='AND'){
						var promises = [];
						angular.forEach(correspondings, function(corresponding, corresponding_index){
							var promise = self.checkContainingOfCorresponding(element, corresponding);
							promises.push(promise);
							if(corresponding_index+1>=correspondings.length){
								$q.all(promises).then( function(){ resolve(element); return; }, function(){ reject(); return; } )
							}
						});
					}
					else if(condition=='OR'){
						var corresponding_index = 0;
						var selfCarryOut = function(){
							self.checkContainingOfCorresponding(element, correspondings[corresponding_index]).then(function(){
								resolve(element);
							}, function(){
								corresponding_index += 1;
								if(corresponding_index>=correspondings.length){ reject(); return; }
								selfCarryOut();
							});
						};
						selfCarryOut();				
					}
				});
			};

			this.getElementsWithCorrespondings = function(elements, correspondings){
				var self = this;
				return $q(function(resolve, reject){
					if(!(correspondings&&correspondings.value&&_.size(correspondings.value)>=1)){ resolve(elements); return; }
					var elements_corresponding = [];
					var element_index = 0;
					var selfCarryOut = function(){
						self.getElementWithCorrespondings(elements[element_index], correspondings.value, correspondings.condition).then(function(element){
							elements_corresponding.push(element);
							if(element_index+1>=_.size(elements)){
								resolve(elements_corresponding); return;
							}
							element_index += 1;
							selfCarryOut();
						}, function(){ 
							if(element_index+1>=_.size(elements)){
								resolve(elements_corresponding); return;
							}
							element_index += 1;
							selfCarryOut();
						});
					};
					selfCarryOut();
				});
			};

			// elements[element_index], innerOuterHTMLs
			this.getElementWithInnerOuterHTMLs = function(element, innerOuterHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					if(!(_.size(innerOuterHTMLs.list.value)>=1||_.size(innerOuterHTMLs.list)>=1)){ resolve(element); return; }
					var innerOuterHTML;
					if(innerOuterHTMLs.type=='OUTERHTML'){ innerOuterHTML = element.outerHTML; }
					else{ innerOuterHTML = element.innerHTML; }
					if(innerOuterHTMLs.list.value){
						// innerOuterHTMLs.list.value가 배열의 형태일 때
						if(angular.isArray(innerOuterHTMLs.list.value)){
							arrayService.existWordsInString(innerOuterHTMLs.list.value, innerOuterHTML).then(function(word){
								if(word) resolve(word); 
								else reject();
							}, function(){
								reject();
							});
						}
						// innerOuterHTMLs.list.value가 배열의 형태가 아닐 때(문자열의 형태일 때)
						else {
							if(stringService.containString1InString2WithoutCapital(innerOuterHTMLs.list.value, innerOuterHTML)) resolve(innerOuterHTMLs.list.value);
							else reject();
						}
					}
					else {
						arrayService.existWordsInString(innerOuterHTMLs.list, innerOuterHTML).then(function(word){
							if(word) resolve(word);
							else reject();
						}, function(){
							reject();
						});
					}
				});
			};

			this.getElementsWithInnerOuterHTMLsSub = function(elements, innerOuterHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					var element_index = 0;
					var elements_match = [];
					var execute = function(){
						self.getElementWithInnerOuterHTMLs(elements[element_index], innerOuterHTMLs).then(function(word){
							if(word) elements_match.push(elements[element_index]);
							element_index += 1;
							if(element_index>=elements.length) {
								resolve(elements_match);  
							}
							else execute();
						}, function(){
							element_index += 1;
							if(element_index>=elements.length) {
								resolve(elements_match); 
							}
							else execute();
						});
					};
					execute();
				});
			};

			// Element Function Section
			// elements, html.innerOuterHTMLs
			this.getElementsWithInnerOuterHTMLs = function(elements, innerOuterHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					if(!(elements&&elements.length>=1)){ resolve(elements); return; }
					if(!(innerOuterHTMLs&&innerOuterHTMLs.list)){ resolve(elements); return; }
					else if(innerOuterHTMLs.list.setting_key){ 
						innerOuterHTMLs.list.value = getSettingService.getSetting(innerOuterHTMLs.list.setting_key); 
						self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
							resolve(elements_match);
						});
					}
					else if(innerOuterHTMLs.list.html_value){
						// 배열일 때
						if(angular.isArray(innerOuterHTMLs.list.html_value)){
							var html_value_index = 0;
							var selfCarryOut = function(){
								self.getTextOfHtmlObjectWithSplit(innerOuterHTMLs.list.html_value[html_value_index], innerOuterHTMLs.list.html_value[html_value_index].split).then(function(identification){
									innerOuterHTMLs.list.value = identification;
									self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
										resolve(elements_match);
									});
								}, function(){
									html_value_index += 1;
									if(html_value_index>=innerOuterHTMLs.list.html_value.length){ reject(); return; }
									selfCarryOut();
								});
							};
							selfCarryOut();
						}
						else {
							self.getTextOfHtmlObjectWithSplit(innerOuterHTMLs.list.html_value, innerOuterHTMLs.list.html_value.split).then(function(identification){
								innerOuterHTMLs.list.value = identification;
								self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
									resolve(elements_match);
								});
							});
						}
					}
					else {
						self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
							resolve(elements_match);
						});
					}
				});
			};

			this.getFrameIdFromFrameIdList = function(frame_id_list){
				var self = this;
				return(function(resolve, reject){
					var frame_id_value;
					angular.forEach(frame_id_list, function(frame_id_list_element, frame_id_list_element_index){
						if(frame_id_list_element.basic) frame_id_value += frame_id_list_element.basic;
						else if(frame_id_list_element.status) frame_id += getSettingService.getStatus(frame_id_list_element.status);
						if(frame_id_list_element_index+1>=frame_id_list.length) resolve(frame_id_value);
					});
				});
			};

			this.getElementsWithSelectorOnFrameId = function(frame_id, selector){
				return $q(function(resolve, reject){
					var elements;
					if(!window.frames[frame_id]&&parent.frames[frame_id]) 
						elements = parent.frames[frame_id].document.querySelectorAll(selector); 
					else if(window.frames[frame_id]&&!parent.frames[frame_id]) 
						elements = window.frames[frame_id].document.querySelectorAll(selector);
					else if(window.frames[frame_id]&&parent.frames[frame_id])
						elements = window.frames[frame_id].document.querySelectorAll(selector);
					else 
						elements = []; 
					resolve(elements);
				});
			};

			this.getFramesWithFrameId = function(frame_id, frame_id_index){
				return $q(function(resolve, reject){
					// frame_id_index가 0이 아닐때의 로직
					if(frame_id_index!==0){ working_frame = working_frame.frames[frame_id]; resolve(); return; }
					// frame_id_index가 0일 때만 구동되는 로직
					if(!window.frames[frame_id]&&parent.frames[frame_id]) { working_frame = parent.frames[frame_id]; }
					else if(window.frames[frame_id]&&!parent.frames[frame_id]) { working_frame = window.frames[frame_id]; }
					else if(window.frames[frame_id]&&parent.frames[frame_id]) { working_frame = window.frames[frame_id]; }
					// 유일하게 리젝나는 순간
					else { reject(); return; }
					// 위에서 만들어진 result_frame을 resolve하는 순간.
					// but, window.frames[frame_id] 또는 parent.frames[frame_id] 같은 frame들을 resolve시킬 수가 없기 때문에 다른 전역 변수에 지정을 해서 작업을 해야한다.
					resolve();
				});
			};

			var working_frame;
			this.getFramesWithFrameIdSuccession = function(frame_id_succession){
				var self = this;
				return $q(function(resolve, reject){
					working_frame = null;
					var frame_id_index = 0;
					var selfCarryOut = function(){
						self.getFramesWithFrameId(frame_id_succession[frame_id_index], frame_id_index).then(function(){
							frame_id_index += 1;
							if(frame_id_index>=frame_id_succession.length) resolve();
							else selfCarryOut();
						}, function(){
							reject();
						});
					};
					selfCarryOut();
				});
			};

			this.getElementsWithSelector = function(selector, parent_element, frame_id){
				var self = this;
				return $q(function(resolve, reject){
					var elements;
					// parent_element가 없을 때
					if(!(angular.isDefined(parent_element)&&parent_element)){ 
						if(angular.isDefined(frame_id)){
							if(angular.isString(frame_id)){
								self.getElementsWithSelectorOnFrameId(frame_id, selector).then(function(elements){
									resolve(elements);
								});
							}
							else if(angular.isObject(frame_id)&&angular.isArray(frame_id.list)){
								// 1. frame_id.list를 가지고 frame_id.value 를 제작
								// 2. frame_id.value를 가지고 셋팅
								self.getFrameIdFromFrameIdList(frame_id.list).then(function(frame_id_value){
									self.getElementsWithSelectorOnFrameId(frame_id_value, selector).then(function(elements){
										resolve(elements);
									});
								});
							}
							else if(angular.isObject(frame_id)&&angular.isArray(frame_id.succession)&&_.isNumber(frame_id.value)){
								// self.getFramesWithFrameIdSuccession가 끝났을 때 타겟팅된 frame을 working_frame이라는 변수에 저장해 놓았다.
								self.getFramesWithFrameIdSuccession(frame_id.succession).then(function(){
								 	// document.domain = ''





									// 1. background.js로 Naver blog의 타겟팅 된 Frame에 addEventListener가 포함된 script를 삽입하는 로직을 붙인다.
									self.sendMessageForGettingBlogFrame(frame_id.value);
									// 2. 해당 프레임(working_frame)의 document를 가져오기 위해 작업할 프레임에 postMessage를 보낸다.  
									working_frame.postMessage('getDocumentOfWorkingFrame', '*');
									// 3. 'getDocumentOfWorkingFrame' 신호를 받은 해당 프레임(working_frame)에 있는 addEventListenerOnNaverBlog.js에서 보낸 맞신호를 받는
									//    window.addEventListener(이벤트 리스너)를 추가한다.
									$rootScope.$on('DepartureOfDocumentForWorkingFrame', function(event, document){
										elements = document.querySelectorAll(selector); resolve(elements);
									});
								}, function(){
									reject();
								});
							}
						}
						else { elements = document.querySelectorAll(selector); resolve(elements); }
					}
					// parent_element가 있을 때
					else{ elements = parent_element.querySelectorAll(selector); resolve(elements); }
				});
			};

			// getElementsOfParentsElement에서는 selector를 얻은 뒤에 그것을 가지고
			// getElementsWithSelector를 호출한다.
			this.getElementsOfParentElement = function(html){
				var self = this;
				return $q(function(resolve, reject){
					self.getSelector(html).then(function(selector){
						var elements;
						// parent_html 있을 때
						if(html.parent_html){
							self.getElements(html.parent_html).then(function(parent_elements){
								if(!html.parent_html.index) arrayService.target_parent = parent_elements[0];
								else arrayService.target_parent = parent_elements[html.parent_html.index];
								self.getElementsWithSelector(selector, arrayService.target_parent, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							}, function(){
								self.getElementsWithSelector(selector, null, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							});
						}	
						// parent_html 없을 때
						else{
							// parent_element 있을 때
							if(html.parent_element) {
								self.getElementsWithSelector(selector, html.parent_element, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							}
							// parent_element 없을 때
							else {
								self.getElementsWithSelector(selector, null, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							}
						}
					}, function(){
						reject();
					});
				});
			};

			this.getElementsSub = function(html){
				var self = this;
				return $q(function(resolve, reject){
					// 일단 부모 element로 접근한다.
					self.getElementsOfParentElement(html).then(function(elements){
						self.getElementsWithHref(elements, html.href, html.not_href).then(function(elements){
							self.getElementsWithCorrespondings(elements, html.correspondings).then(function(elements){
								self.getElementsWithInnerOuterHTMLs(elements, html.innerOuterHTMLs).then(function(elements){
									if(elements&&elements.length>=1){ resolve(elements); }
									else{ reject(); }
								}, function(){ reject(); });
							}, function(){ reject(); });
						}, function(){ reject(); });
					}, function(){ reject(); });
				});
			};

			// 해당 elements를 get하는 함수
			this.getElements = function(html){
				var self = this;
				return $q(function(resolve, reject){
					// 1. html이 배열 형식일 때
					if(angular.isArray(html)){
						var html_index = 0;
						var selfCarryOut = function(){
							self.getElementsSub(html[html_index]).then(function(elements){
								resolve(elements);
							}, function(){
								html_index += 1;
								if(html_index>=_.size(html)) {
									reject();
								}
								else selfCarryOut();
							});
						};
						selfCarryOut();
					}
					// 2. html이 배열이 아닌 객체 형식일 때
					else{
						self.getElementsSub(html).then(function(elements){
							resolve(elements);
						}, function(){
							reject();
						});
					}
				});
			};

			// getElement를 하려면 getElements를 해야 한다.
			// option.htmls[html_index].html
			this.getElement = function(html, random, index){
				var self = this;
				return $q(function(resolve, reject){
					self.getElements(html).then(function(elements){
						if(!(elements.length>=1)){ reject(); return; }
						var element;
						if(random){
						  element = elements[Math.floor(Math.random()*elements.length)]; 
						}
						else if(html.index_range){
							element = elements[Math.floor(Math.random()*html.index_range)];
						}
						else if(index){ 
							element = elements[index]; 
						}
						else if(html.decent_index){
							element = elements[html.decent_index];
						}
						else if(html.status_index){
							var index_wanted = getSettingService.getStatus(html.status_index);
							index_wanted = Number(index_wanted);
							element = elements[index_wanted];
						}
						else{ element = elements[0]; }
						if(element) resolve(element);
						else reject();
					}, function(){ reject(); });
				});
			};

			// Selector Function Section
			this.getSelector = function(html){
				var self = this;
				return $q(function(resolve, reject){
					if(!html){ reject(); return; }
					var selector = '';
					if(html.tag) selector += html.tag;
					if(html&&html.classes&&_.size(html.classes.list)>=1){
						selector += '.'+html.classes.list.join('.');
					}
					if(html&&html.properties&&_.size(html.properties.list)>=1){
						selector += '['+html.properties.list.join('][')+']';
					}
					if(html&&html.not_classes&&_.size(html.not_classes.list)>=1){
						selector += ':not(.'+html.not_classes.list.join('):not(.')+')';
					}			
					if(html&&html.not_properties&&_.size(html.not_properties.list)>=1){
						selector += ':not(['+html.not_properties.list.join(']):not([')+'])';
					}
					resolve(selector);
				});
			};

			// Text Function Section
			this.getTextOfElementWithSplit = function(element, split){
				var self = this;
				// text 정하는 부분
				var text = '';
				if(split.attr){
					text = element.getAttribute(split.attr);
				}
				if(angular.isDefined(split)&&split.splice_kakao){
					text = text.replace(".", "/");
				}
				else if(split.html){
					if(split.html=='outerHTML') text = element.outerHTML;
					else text = element.innerHTML;
				}
				// 생성된 text 안에 params안의 어떤 param(Array)과 부합되는지 체크 하고 부합하는 param으로 작업한다.
				if(split.params&&_.size(split.params)>=1) {
					text = stringService.getSplit(text, split.params[0], split.params[1]);
				}
				if(_.size(text)>=1) text = text.replace(/\s/g,"");
				text = text.replace(/,/g,"");
				if(split.type=='NUMBER') text = numberService.makeNumber(text);
				return text;
			};

			this.getTextOfHtmlObjectWithSplit = function(html, split, random){
				var self = this;
				return $q(function(resolve, reject){
					// html이 Array가 아닌 Object인 경우
					if(!angular.isArray(html)){
						self.getElement(html, random).then(function(element){
							var text = self.getTextOfElementWithSplit(element, split);
							if(split.type=='NUMBER') text = numberService.makeNumber(text);
							resolve(text);
						}, function(){ reject(); });
					}
					// html이 Array인 경우
					else{
						// 재귀함수와 비동기함수
						var html_index = 0;
						var selfCarryOut = function(){
							self.getElement(html[html_index], random).then(function(element){
								var text = self.getTextOfElementWithSplit(element, html[html_index].split);
								if(html[html_index].split.type=='NUMBER') text = numberService.makeNumber(text);
								resolve(text);
							}, function(){
								html_index += 1;
								if(html_index>=html.length){ reject(); return; }
								else{ selfCarryOut(); }
							});
						};
						selfCarryOut();
					}
				});
			};

			this.getTextsOfHtmlObjectWithSplit = function(html, split){
				var self = this;
				return $q(function(resolve, reject){
					self.getElements(html).then(function(elements){
						var texts = [];
						if(elements.length==0) resolve(texts);
						angular.forEach(elements, function(element, element_index){
							var text;
							text = self.getTextOfElementWithSplit(element, split);
							texts.push(text);
							if(element_index+1>=elements.length){ resolve(texts); }
						});
					}, function(){ reject(); });
				});
			};

			this.getHTMLOfElement = function(element, option){
				var self = this;
				return $q(function(resolve, reject){
					var html_text;
					if(option.type=='innerHTML') html_text = element.innerHTML;
					else html_text = element.outerHTML;
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					html_text = html_text.split(option.params[0])[1];
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					html_text = html_text.split(option.params[1])[0];
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					html_text = html_text.replace(/'/g, "");
					html_text = html_text.replace(/&amp;/g, '&');
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					if(_.size(html_text)&&_.size(option.url.basic)&&!stringService.containString1InString2WithoutCapital(option.url.basic, html_text)){
						reject(); return;
					}
					resolve(html_text);
				});
			};


			// Send Function Section
			this.sendMessageForGettingBlogFrame = function(frame_id){
				var self = this;
				return $q(function(resolve, reject){
					chrome.runtime.sendMessage({
						action:'injectScriptOnNaverBlog',
						frame_id:frame_id
					}, function(response){
						resolve(response);
					});
				});
			};

		});

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('numberService', function($rootScope){
			// Get Function Section
			this.getRandomOfNumber = function(number, percentage){
				// 들어오는 number가 string형식일 수도 있으므로 자료형을 number로 바꿔준다.
				number = Number(number);
				if(!(angular.isNumber(number)&&number>=1)) return 1; 
				if(Math.random()<0.5) return Math.floor(number + Math.random()*number*percentage*0.01);
				else return Math.floor(number - Math.random()*number*percentage*0.01);
			};

			this.getRandomNumberInRange = function(range){
				range = Number(range);
				return Math.floor(Math.random()*range);
			};

			this.count = 1;
			this.getRandomOfFloatNumber = function(count){
				var self = this;
				count = Number(count);
				self.count += 1;
				if(self.count%3==0) return 0.1;
				else if(self.count%3==1) return 0.3;
				else if(self.count%3==2) return 0.5;
			};

			this.getRandomIndexOfArray = function(array){
				return Math.floor(Math.random()*array.length);
			};

			// Is Function Section
			this.isPositive = function(number){
				if(angular.isNumber(number)&&number>0) return true;
				else return false;
			};

			this.isSame = function(number1, number2){
				return Number(number1)==Number(number2);
			};
			
			// Make Function Section
			this.makeNumber = function(number){
				if(angular.isString(number)){
					number = number.replace(/\s/g, '');
					number = number.replace(/,/g, '');
				}
				if(angular.isString(number)&&number.indexOf('k')!=-1){
					number = Math.floor(Number(number.split('k')[0]))*1000;
				}
				else if(angular.isString(number)&&number.indexOf('m')!=-1){
					number = Math.floor(Number(number.split('m')[0]))*1000000;
				}
				else{
					number = Math.floor(Number(number));
				}
				if(!(angular.isNumber(number)&&number>=1)) return 0; 
				return number;
			};

			// Set Function Section
			this.setNumberInRange = function(number, range1, range2){
				var self = this;
				number = self.makeNumber(number);
				if(range1&&number<range1){
					range1 = self.makeNumber(range1);
					number += range1;
				}
				if(range2&&number>range2){
					range2 = self.makeNumber(range2);
					number = number%range2;
				}
				if(range1&&number<range1){
					range1 = self.makeNumber(range1);
					number += range1;
				}
				return number;
			};
		});

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('stringService', function($rootScope){
			// Check Function Section
			this.checkString = function(string){
				if(angular.isString(string)) return true;
				return false;
			};
			this.checkStringLength = function(string){
				var self = this;
				if(angular.isString(string)&&string.length>=1) return true;
				return false;
			};
			// Compare Function Section
			this.compareWithoutCapital = function(string1, string2){
				if(this.getLowercaseOfString(string1)==this.getLowercaseOfString(string2)) return true;
				else return false;
			};
			// Contain Function Section
			this.containString1InString2WithoutCapital = function(string1, string2){
				if(string1&&string2&&this.getLowercaseOfString(string2).indexOf(this.getLowercaseOfString(string1))!==-1){ return true;}
				else{ return false;}
			};
			// Get Function Section
			this.getUppercaseOfString = function(string){
				return angular.uppercase(string);
			};
			this.getLowercaseOfString = function(string){
				return angular.lowercase(string);
			};
			this.getStringWithDefalut = function(string, default_string){
				if(this.checkStringLength(string)) return string;
				else return default_string;
			};
			// Make Function Section
			this.makeString = function(string){
				if(!string) return '';
				return String(string);
			};

			this.getSplit = function(string, split1, split2){
				var self = this;
				if(!self.checkStringLength(string)) return '';
				if((split1&&string.indexOf(split1)==-1)&&(split2&&string.indexOf(split2)==-1)) return null;
				if(self.checkStringLength(string)&&split1&&self.checkStringLength(split1)&&(string.indexOf(split1)!=-1)) string = string.split(split1)[1];
				if(self.checkStringLength(string)&&split2&&self.checkStringLength(split2)&&(string.indexOf(split2)!=-1)) string = string.split(split2)[0];
				if(!(string&&string.length>=1)) return null;
				string = string.replace(/\s/g,"");
				return string;
			};

		});

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('timeoutService', function($rootScope, $timeout, $q){
			this.delayPromise = function(delay){
				return $q(function(resolve, reject){
					if(delay&&angular.isNumber(delay)){
						// delay가 원래 의미하는게 때문에 1000을 곱해준다.(second)
						$timeout(function(){ resolve(); }, delay*1000);
					}
					else{ resolve(); }
				});
			};
		});

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('urlService', function($rootScope, $q, $filter, arrayService, htmlService, numberService, getSettingService){
			
			// Initialize Section
			this.object_index;

			// Convert Function Section
			this.convertWithType = function(value, type){
				var self = this;
				this.setUrl();
				if(type=='NUMBER'){
					if(angular.isNumber(parseInt(value))&&parseInt(value)>=1){
						return parseInt(value);
					}
					else {
						return 0;
					}
				}
				if(type=='STRING'){
					return String(value);
				}
			};

			// Check Function Section
			this.checkLogsOfFunc = function(func_key){
				var self = this;
				return $q(function(resolve, reject){
					var func;
					func = getSettingService.getFunc(func_key);
					if(func&&func.logs&&angular.isArray(func.logs)) resolve(func.logs);
				});
			};

			this.checkNumberOfUsernameOnLogs = function(logs){
				var self = this;
				return $q(function(resolve, reject){
					self.object_index = 0;
					if(!(logs.length>0)) resolve();
					angular.forEach(logs, function(log, log_index){
						if(htmlService.username==log.target_user_name) self.object_index += 1;
						if(log_index+1>=logs.length) resolve();
					});
				});
			};

			// Get Function Section
			this.getUrl = function(){
				var self = this;
				self.setUrl();
				return self.url;
			};

			this.getUrlWithExtraWithUsername = function(edges, func_key){
				var self = this;
				return $q(function(resolve, reject){
					self.checkLogsOfFunc(func_key).then(function(logs){
						self.checkNumberOfUsernameOnLogs(logs).then(function(){
							var username_correspondings = [];
							angular.forEach(edges, function(edge, edge_index){
								if(edge.node.owner.username==htmlService.username) username_correspondings.push(edge.node);
								if(edge_index+1>=edges.length) {
									resolve(username_correspondings[self.object_index]);
								}
							});
						});
					});
				});
			};

			this.getUrlWithExtraGetTextWithSplit = function(url_extra_object, url_extra_object_html){
				var self = this;
				return $q(function(resolve, reject){
					htmlService.getTextOfHtmlObjectWithSplit(url_extra_object_html, url_extra_object_html.split, url_extra_object.random).then(function(text){
						if(!(url_extra_object&&url_extra_object.no_encode)){
							if(url_extra_object_html.split.type=='NUMBER')
								resolve(encodeURI(text, 'UTF-8'));
							else
								resolve(encodeURI(text.replace(/\s/g,""), 'UTF-8'));
						}
						else {
							if(url_extra_object_html.split.type=='NUMBER')
								resolve(text);
							else
								resolve(text.replace(/\s/g,""));
						}
					}, function(){ reject(); });
				});
			};

			// url_object.extra.list[extra_index]
			// ex) { html:this.htmls.id_review, type:'OBJECT' }
			this.getUrlWithExtra = function(url_extra_object){
				var self = this;
				return $q(function(resolve, reject){
					// [arrayService.getRandom(this.getSetting('list_search_tag'))]
					if(angular.isString(url_extra_object)){ 
						resolve(encodeURI(url_extra_object.replace(/\s/g,""), 'UTF-8')); 
					}
					// getRandomNumberInRange
					else if(url_extra_object.range){
						var number = numberService.getRandomNumberInRange(url_extra_object.range);
						resolve(encodeURI(number, 'UTF-8'));
					}
					// url_extra_object가 배열인 경우
					else if(!url_extra_object.range&&angular.isArray(url_extra_object)){
						if(url_extra_object[0]&&url_extra_object[0].setting_key){
							url_extra_object[0] = getSettingService.getSetting(url_extra_object[0].setting_key, url_extra_object[0].method);
							resolve(encodeURI(arrayService.getRandom(url_extra_object).replace(/\s/g,""), 'UTF-8'));
						}
						else resolve(encodeURI(arrayService.getRandom(url_extra_object).replace(/\s/g,""), 'UTF-8')); 
					}
					// 이하 url_extra_object가 배열이 아니고 객체({}) 형태인 경우
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.setting_key){
						url_extra_object.value = getSettingService.getSetting(url_extra_object.setting_key, url_extra_object.method);
						if($rootScope.grammer_storage.grammer_key=="instagrammer"&&$rootScope.grammer_storage.grammers[$rootScope.grammer_storage.grammer_key].version_key=="specificuser"){
							if(!url_extra_object.value){
								$rootScope.message('stopstart', '셋팅창에서 작업할 계정을 적어주세요!!');
								$timeout(function(){ reject(); }, 3000);
							}
							else{ resolve(encodeURI(url_extra_object.value.replace(/\s/g,""), 'UTF-8')); }
						}
						else{
							resolve(encodeURI(arrayService.getRandom(url_extra_object.value).replace(/\s/g,""), 'UTF-8'));
						}
					}
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.html&&url_extra_object.type!='OBJECT'){
						if(url_extra_object&&!angular.isArray(url_extra_object.html)){
							self.getUrlWithExtraGetTextWithSplit(url_extra_object, url_extra_object.html).then(function(url_text){
								resolve(url_text);
							}, function(){
								reject();
							});
						}
						else {
							var html_index = 0;
							var selfCarryOut = function(){
								self.getUrlWithExtraGetTextWithSplit(url_extra_object, url_extra_object.html[html_index]).then(function(url_text){
									resolve(url_text);
								}, function(){
									html_index += 1;
									if(html_index>=url_extra_object.html.length){ reject(); return; }
									else{ selfCarryOut(); }
								});
							};
							selfCarryOut();
						}
					}
					// instagrammerMyfollowerService 를 위한 로직
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.html&&url_extra_object.type=='OBJECT'){
						htmlService.getElement(url_extra_object.html).then(function(script_object){
							var json_text = script_object.innerHTML.slice(21);
							// JSON.parse : JSON(Javascript Object Notation) 문자열을 개체로 변환합니다.
							json_text = JSON.parse(json_text.replace(/;/g,""));
							self.getUrlWithExtraWithUsername(json_text.entry_data.FeedPage[0].graphql.user.edge_web_feed_timeline.edges, url_extra_object.func_key).then(function(node_object){
								resolve(encodeURI(node_object.id, 'UTF-8'));
							});
						});
					}
					// instagrammerUnfollowService 를 위한 로직
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.status&&url_extra_object.status_index){
						var status = $rootScope.grammer_storage.grammers[url_extra_object.grammer_key].versions[url_extra_object.version_key].statuses[url_extra_object.status];
						var status_index = $rootScope.grammer_storage.grammers[url_extra_object.grammer_key].versions[url_extra_object.version_key].statuses[url_extra_object.status_index];
						status_index = numberService.makeNumber(status_index);
						resolve(encodeURI(status[status_index], 'UTF-8'));
					}
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.status&&!url_extra_object.status_index){
						var status = $rootScope.grammer_storage.grammers[url_extra_object.grammer_key].versions[url_extra_object.version_key].statuses[url_extra_object.status];
						if(url_extra_object.no_encode) { resolve(status); return; }
						resolve(encodeURI(status, 'UTF-8'));
					}
					else{ resolve(url_extra_object); }
				});
			};

			// option.url
			this.getUrlWithExtras = function(url_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!url_object) reject();
					if(!(url_object&&url_object.basic)) var url='';
					else var url = url_object.basic;
					if(!(url_object.extra&&url_object.extra.list&&_.size(url_object.extra.list)>=1)){
						resolve(url); return;
					}
					var extra_index = 0;
					var execute = function(){
						self.getUrlWithExtra(url_object.extra.list[extra_index]).then(function(url_extra){
							url += url_extra;
							if(extra_index>=url_object.extra.list.length-1){ resolve(url); return; }
							else{ extra_index += 1; execute(); }
						}, function(){
							if(extra_index>=url_object.extra.list.length-1){ resolve(url); return; }
							else{ extra_index += 1; execute(); }
						});
					};
					execute();
				});
			};

			this.getVariableFromUrl = function(key, type){
				var self = this;
				self.setUrl();
				if( self.url.indexOf('_'+key+'=')!==-1 ){
					var part = self.url.split('_'+key+'=')[1];
					if ( part&&part.indexOf('/')!==-1 ) {
	          part = part.split('/')[0];
	        }
	        if ( part&&part.indexOf('&')!==-1 ) {
	          part = part.split('&')[0];
	        }
					return self.convertWithType(part, type);
				}
				else{
					if(type=='NUMBER'){ return 0; }
					else if(type=='STRING'){ return ''; }
				}
			};

			this.getSplit = function(param1, param2){
				var self = this;
				var url = self.getUrl();
				if(url.indexOf(param1)==-1&&url.indexOf(param2)==-1) return null;
				if(url.indexOf(param1)!=-1) url = url.split(param1)[1];
				if(url.indexOf(param2)!=-1) url = url.split(param2)[0];
				return url;
			};

			// Go Function Section
			this.goToUrl = function(url){
				location.href = url;
			};
			// Set Function Section
			this.setUrl = function(){
				var self = this;
				self.url = angular.copy(location.href);
			};

		});

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('popupService', function($rootScope, $q, grammerService, grammerSetService){

			// Send Function Section
			this.sendMessageOnPopup = function(resource_url, user_name, password, content){
				return $q(function(resolve, reject){
					chrome.runtime.sendMessage({
						resource_url : resource_url,
						user_name : user_name,
						password : password
					}, function(response){
						resolve(response);
					});
				});
			};

			this.sendMessageOnPopupTwo = function(resource_url, user_name){
				return $q(function(resolve, reject){
					chrome.runtime.sendMessage({
						resource_url : resource_url,
						user_name : user_name
					}, function(response){
						resolve(response);
					});
				});
			};

			// Set Function Section
			this.setRefactoredInformation = function(follower_total, following_total, promises_response){
				return $q(function(resolve, reject){
					grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'follower_total', follower_total).then(function(){
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'following_total', following_total).then(function(){
							grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'follower_list', promises_response[0]).then(function(){
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'following_list', promises_response[1]).then(function(){
									resolve();
								});
							});
						});
					});
				});
			};

			// Refactoring Function Section
			
			// followers_list --> , 로 join된 텍스트 형식
			this.refactorInformationOnFollowers_list = function(followers_list){
				return $q(function(resolve, reject){
					var followers;
					followers = followers_list.split(",");
					if(followers&&angular.isArray(followers)&&followers.length>=1) resolve(followers);
				});
			};

			// followings_list --> , 로 join된 텍스트 형식
			this.refactorInformationOnFollowings_list = function(followings_list){
				return $q(function(resolve, reject){
					var followings;
					followings = followings_list.split(",");
					if(followings&&angular.isArray(followings)&&followings.length>=1){
						// followings.reverse();
						resolve(followings);
					}
				});
			};

			this.refactorInformationOnPopup = function(followers_list, followings_list){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					if(followers_list.length>=1&&followings_list.length>=1){
						promises.push(self.refactorInformationOnFollowers_list(followers_list));
						promises.push(self.refactorInformationOnFollowings_list(followings_list));
					}
					$q.all(promises).then(function(promises_response){
						var follower_total = promises_response[0].length;
						var following_total = promises_response[1].length;
						self.setRefactoredInformation(follower_total, following_total, promises_response).then(function(){
							resolve();
						});
					});
				});
			};

		});

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('getSettingService', function($rootScope, arrayService, numberService){

			this.getStatus = function(status_key){
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key]
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key].value) return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key].value;
				else if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key]) return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key];
				else return null;
			};

			this.getSettingOriginal = function(setting_key){
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key].settings[setting_key]
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].settings[setting_key].value) return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].settings[setting_key].value;
				else return null;
			};

			this.getSettingGetRandom = function(setting_key){
				var self = this;
				return arrayService.getRandom(self.getSettingOriginal(setting_key));
			};

			this.getSettingGetRandomOfNumber = function(setting_key, percentage){
				var self = this;
				return numberService.getRandomOfNumber(self.getSettingOriginal(setting_key), percentage);
			};

			this.getSetting = function(setting_key, method, percentage){
				var self = this;
				if(method){
					if(method=='getRandom') return self.getSettingGetRandom(setting_key);
					if(method=='getRandomOfNumber') return self.getSettingGetRandomOfNumber(setting_key, percentage);
				} 
				else {
					return self.getSettingOriginal(setting_key); 
				}
			};

			this.getClick = function(click_key){
				var self = this;
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs[click_key].click;
			};

			this.getFunc = function(func_key){
				var self = this;
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key]
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs[func_key])  
				 	return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs[func_key];
				else
					return null;
			};
		});

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerService', function($filter,
			bandgrammerInviteService, bandgrammerSignupService,
			blogrammerNewfriendService, blogrammerCommunicationService,
			facegrammerCompetitionService, facegrammerNewfriendService, facegrammerNewsfeedService, facegrammerPageService, facegrammerUnfriendService,
			instagrammerFollowService, instagrammerMyfollowerService, instagrammerUnfollowService, instagrammerSpecificuserService,
			kakaogrammerNewfriendService, kakaogrammerUnfriendService,
			pholagrammerFollowService, pholagrammerMyfollowerService, pholagrammerUnfollowService,
			postgrammerFollowService, postgrammerUnfollowService, postgrammerInviteService,
			twitgrammerFollowService, twitgrammerMyfollowerService, twitgrammerUnfollowService,
			vingrammerFollowService, vingrammerUnfollowService,
			youtugrammerFollowService, youtugrammerMyfollowerService, youtugrammerUnfollowService){

			this.grammer;
			this.version;
			this.service;
			this.target_user_name; 
			this.get = function(grammer_key, version_key){
				var service_name = $filter('lowercase')(grammer_key)+$filter('capitalize')(version_key)+'Service';
				var service;
				switch (service_name){
					case 'bandgrammerInviteService': return bandgrammerInviteService; break;
					case 'bandgrammerSignupService': return bandgrammerSignupService; break;

					case 'blogrammerNewfriendService':	return blogrammerNewfriendService; break;
					case 'blogrammerCommunicationService':	return blogrammerCommunicationService; break;

					case 'facegrammerCompetitionService':	return facegrammerCompetitionService; break;
					case 'facegrammerNewfriendService':	return facegrammerNewfriendService; break;
					case 'facegrammerNewsfeedService':	return facegrammerNewsfeedService; break;
					case 'facegrammerPageService':	return facegrammerPageService; break;
					case 'facegrammerUnfriendService':	return facegrammerUnfriendService; break;

					case 'instagrammerFollowService':	return instagrammerFollowService; break;
					case 'instagrammerMyfollowerService':	return instagrammerMyfollowerService; break;
					case 'instagrammerUnfollowService':	return instagrammerUnfollowService; break;
					case 'instagrammerSpecificuserService':	return instagrammerSpecificuserService; break;

					case 'kakaogrammerNewfriendService':	return kakaogrammerNewfriendService; break;
					case 'kakaogrammerUnfriendService':	return kakaogrammerUnfriendService; break;

					case 'pholagrammerFollowService':	return pholagrammerFollowService; break;
					case 'pholagrammerMyfollowerService':	return pholagrammerMyfollowerService; break;
					case 'pholagrammerUnfollowService':	return pholagrammerUnfollowService; break;

					case 'postgrammerFollowService': return postgrammerFollowService; break;
					case 'postgrammerUnfollowService': return postgrammerUnfollowService; break;
					case 'postgrammerInviteService': return postgrammerInviteService; break;

					case 'twitgrammerFollowService':	return twitgrammerFollowService; break;
					case 'twitgrammerMyfollowerService':	return twitgrammerMyfollowerService; break;
					case 'twitgrammerUnfollowService':	return twitgrammerUnfollowService; break;

					case 'vingrammerFollowService':	return vingrammerFollowService; break;
					case 'vingrammerUnfollowService':	return vingrammerUnfollowService; break;
					
					case 'youtugrammerFollowService':	return youtugrammerFollowService; break;
					case 'youtugrammerMyfollowerService':	return youtugrammerMyfollowerService; break;
					case 'youtugrammerUnfollowService':	return youtugrammerUnfollowService; break;
					default:
						return null;
				}
			};
		});

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerCheckService', function($q, $rootScope, $timeout, numberService, stringService, urlService, htmlService, timeoutService){

			// Exist Function Section
			this.checkExistOfUrl = function(url){
				var self = this;
				return $q(function(resolve, reject){
					if(!url){ resolve(); return; }
					if(url.changing){ resolve(); return; }
					if(stringService.containString1InString2WithoutCapital(url.basic, urlService.getUrl())){ resolve(); }
					else{ reject(); }
				});
			};

			this.checkExistOfHtml = function(html){
				var self = this;
				return $q(function(resolve, reject){
					if(!html){ resolve(); return; }
					htmlService.getElements(html).then(function(elements){
						if(elements&&elements.length>=1){ resolve(); }
						else { reject(); }
					}, function(){ reject(); });
				});
			};

			// Identification Function Section
			this.checkIdentificationFromDB = function(grammer_key, version_key, identification){
				var self = this;
				return $q(function(resolve, reject){ 
					// var resource_url = 'http://127.0.0.1:8000/Grammer/'; // 개발용
	        var resource_url = 'http://eb-grammer-app-dev.ap-northeast-2.elasticbeanstalk.com/Grammer/'; // 개인용
	        // var resource_url = 'http://ebgrammerapp-changho.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 신창호
	        // var resource_url = 'http://ebgrammerapp-heungbo.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 강흥보
	        // var resource_url = 'http://ebgrammerapp-changdae.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 안창대
	        // var resource_url = 'http://ebgrammerappdoochul.52ksw2uxxt.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 주두철
	        // var resource_url = 'http://ebgrammerapp.cznf3q5vi6.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 박희빈(삼월)
	        // var resource_url = 'http://ebgrammerapp-env-jisu.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 안지수
	        // var resource_url = 'http://ebGrammerApp-dongju-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 김동주
	        // var resource_url = 'http://ebGrammerApp-kimcorp-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 김기업(단순 기업형)
	        // var resource_url = 'http://ebGrammerApp-super-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 고유주 super
	        // var resource_url = 'http://ebGrammerApp-younghwa-env.ap-northeast-2.elasticbeanstalk.com/Grammer/'; // 기업용 문영화
	        // var resource_url = 'http://eb-grammer-app-dev.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 변동섭
	        // var resource_url = 'http://ebGrammerApp-cover-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 커버 ** 인스타 언팔쿼리 기능 유.
	        // var resource_url = 'http://ebGrammerApp-minsun-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 강민성 ** 인스타 언팔쿼리 기능 유.
	        // var resource_url = 'http://ebgrammerapp-bibong-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 비봉 ** 인스타 언팔쿼리 기능 유.
	        // var resource_url = 'http://ebGrammerApp-dongu-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 동우 ** 인스타 언팔쿼리 기능 유.

					chrome.runtime.sendMessage({
						resource_url : resource_url,
						grammer_key : grammer_key,
						// version_key : version_key,
						identification : identification
					}, function(response){
						if(response.exist==true){ resolve(); return; }
						else{ 
							if(response.grammer==false){ $rootScope.message('stopstart', identification+'님 안녕하세요!<br/>'+grammer_key+'는 아직 런칭되지 않았습니다'); }
							else if(response.identification==false){ $rootScope.message('stopstart', identification+'님 안녕하세요!<br/> 고객님의 '+grammer_key+' 계정이 서버에 등록되지 않았습니다.'); }
							// else if(response.version==false){ $rootScope.message('stopstart', identification+'님 안녕하세요!<br/>'+version_key+' 구매 문의 : 010 9488 1462'); }
							else { $rootScope.message('stopstart', '에러가 발생했습니다<br/>문의 그래머 개발자: 010 9488 1462'); }
							$timeout(function(){ reject(); }, 5000);
						}
					});
				});
			};

			this.checkIdentificationSub = function(identification_html, grammer_key, version_key, timeoutPromise, service){
				var self = this;
				return $q(function(resolve, reject){
					var check_passed = service.getStatus('check_passed');
					if(check_passed&&_.isBoolean(check_passed)){
						$timeout.cancel(timeoutPromise);
						resolve();
					}
					else{
						htmlService.getTextOfHtmlObjectWithSplit(identification_html, identification_html.split).then(function(identification){
							$timeout.cancel(timeoutPromise);
							$rootScope.values.identification = identification;
							self.checkIdentificationFromDB(grammer_key, version_key, identification).then(function(){
								if(identification_html&&identification_html.check_once&&_.isBoolean(identification_html.check_once)){
									service.setStatus('identification', identification).then(function(){
										service.setStatus('check_passed', true).then(function(){
											resolve();
										}, function(){
											reject();
										});
									});
								}
								else{
									service.setStatus('identification', identification).then(function(){
										resolve();
									}, function(){
										reject();									
									});
								}
							}, function(){
								reject();
							});    
						}, function(){ reject(); });
					}
				});
			};
			
			this.checkIdentification = function(service){
				var self = this;
				return $q(function(resolve, reject){
					var count = 0;
					if(numberService.isPositive(service.getStatus('count'))){
						count = service.getStatus('count');
					}
					// count가 1000의 배수가 아닐 때 resolve, return
					// 0 또한 1000의 배수이다.
	        if(!(count%1000==0)){ resolve(); return; }
					$rootScope.message('stopstart', '서버 허가를 기다리고 있습니다');
					var grammer_key = service.grammer_key;
					var version_key = service.version_key;
					var identification_html = service.htmls.identification;
					if(!(grammer_key&&version_key&&identification_html)){
						$rootScope.message('stopstart', '아직 준비가 되지 않았습니다'); reject(); return;
					}
					var timeoutPromise;
					timeoutPromise = $timeout(function(){
						if(grammer_key=='postgrammer') $rootScope.message('stopstart', '로그인 후 구동해주세요');
						if(grammer_key=='blogrammer') $rootScope.message('stopstart', '로그인 후 구동해주세요');
					}, 2000);
					// identification_html 이 배열이 아닌 객체형태일 경우
					if(identification_html&&!angular.isArray(identification_html)){
						self.checkIdentificationSub(identification_html, grammer_key, version_key, timeoutPromise, service).then(function(){
							resolve();
						}, function(){
							reject();
						});
					}
					// identification_html 이 배열형태일 경우
					else {
						var identification_index = 0;
						var selfCarryOut = function(){
							self.checkIdentificationSub(identification_html[identification_index], grammer_key, version_key, timeoutPromise, service).then(function(){
								resolve();
							}, function(){
								identification_index += 1;
								if(identification_index>=identification_html.length){ reject(); return; }
								else{ selfCarryOut(); }
							});
						};
						selfCarryOut();
					}
				});
		  };

			// Page Function Section
			// page.urls
			this.checkPageWithUrls = function(urls){
				var self = this;
				return $q(function(resolve, reject){
					if(!(urls&&urls.list&&_.size(urls.list)>=1)){ resolve(); return; }
					if(urls.condition=='OR'){
						// 재귀함수와 비동기함수
						var url_index = 0;
						var execute = function(){
							self.checkExistOfUrl(urls.list[url_index]).then(function(){
								resolve(); return;
							}, function(){
								url_index += 1;
								if(url_index>=urls.list.length){ reject(); return; }
								else{ execute(); }
							});
						};
						execute();
					}
					// urls.condition == 'And'
					else{
						// angular.forEach 와 다수 비동기 병렬 함수 
						var promises = [];
						angular.forEach(urls.list, function(url, url_index){
							var promise = self.checkExistOfUrl(url);
							promises.push(promise);
							if(url_index>=urls.list.length-1){
								$q.all(promises).then( function(){ 
									resolve(); 
								}, function(){ 
									reject(); 
								});
							}
						});
					}
				});
			};

			this.checkPageWithHtmls = function(htmls){
				var self = this;
				return $q(function(resolve, reject){
					if(!(htmls&&htmls.list&&_.size(htmls.list)>=1)){ resolve(); return; }
					if(htmls.condition=='OR'){
						var html_index = 0;
						var execute = function(){
							self.checkExistOfHtml(htmls.list[html_index]).then(function(){
								resolve(); return;
							}, function(){
								html_index += 1;
								if(html_index>=htmls.list.length){ reject(); return; }
								else{ execute(); }
							});
						};
						execute();
					}
					else{
						var promises = [];
						angular.forEach(htmls.list, function(html, html_index){
							var promise = self.checkExistOfHtml(html);
							promises.push(promise);
							if(html_index>=htmls.list.length-1){
								$q.all(promises).then( function(){ 
									resolve(); 
								}, function(){ 
									reject(); 
								});
							}
						});
					}
				});
			};

			// checkPage에 들어오는 파라미터의 형식은 각 서비스.pages.start의 각 객체들을 의미한다.
			// checkPage함수는 grammerStartService.startService에서 service.pages.start에서 getPage를 할 때에 호출한다.
			this.checkPage = function(page){
				var self = this;
				return $q(function(resolve, reject){
					if(!page){ reject(); return; }
					var promises = [];
					promises.push(self.checkPageWithUrls(page.urls));
					promises.push(self.checkPageWithHtmls(page.htmls));
					$q.all(promises).then( function(successresponse){
						resolve();
					}, function(){
						reject(); 
					});
				});
			};

			// Rest Function Section
			this.checkRest = function(service){
				var self = this;
				return $q(function(resolve, reject){
					var count = service.getStatus('count');
					var boolean_rest = service.getSetting('boolean_rest');
					var count_rest = service.getSetting('count_rest');
					var interval_rest = service.getSetting('interval_rest');
					interval_rest = numberService.getRandomOfNumber(interval_rest, 50);
					if(!(boolean_rest&&_.gt(count_rest,0)&&_.gt(count,0))){; resolve(); return; }
					if(_.gt(count,count_rest)&&(count%count_rest==0)&&_.gt(count,service.getStatus('count_rested'))){
						$rootScope.message('stopstart', interval_rest+'분 쉬었다가 다시 시작합니다', interval_rest);
						$rootScope.$broadcast('countdown', interval_rest*60);
						timeoutService.delayPromise(interval_rest*60).then(function(){ resolve(); }, function(){ resolve(); });
					}
					else {
						resolve();
					}
				});
			};
		  
		});

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerGetService', function($rootScope, $q, urlService, grammerCheckService){

			this.grammer_storage;

			this.getGrammerStorage = function(){
				return $q(function(resolve, reject){
					chrome.storage.local.get('grammer_storage', function(response) {
						resolve(angular.fromJson(response['grammer_storage']));
					});
				});
			};

			this.getGrammers = function(){
				var self = this;
				return $q(function(resolve, reject){
					self.getGrammerStorage().then(function(grammer_storage){
						if(!grammer_storage){ reject(); return; }
						resolve(grammer_storage.grammers);
					}, function(){
						reject();
					});
				});
			};

			this.getGrammer = function(grammer_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getGrammers().then(function(grammers){
						if(!grammers[grammer_key]){ reject(); return; }
						resolve(grammers[grammer_key]);
					}, function(){
						reject();
					});
				});
			};

			// 원래 있는 grammer_key룰 가져오는 게 아니라 현재 url과 grammers를 비교해서 grammer_key를 가져온다.
			this.getGrammerKeyWithUrl = function(){
				var self = this;
				return $q(function(resolve, reject){
					var url = urlService.getUrl();
					self.getGrammers().then(function(grammers){
						var grammer_index = 0;
						angular.forEach(grammers, function(grammer_value, grammer_key){
							grammer_index += 1;
							if(angular.isString(grammer_value.host)){
								if(_.includes(url, grammer_value.host)){ resolve(grammer_key); return; }
							}
							else if(angular.isArray(grammer_value.host)){
								angular.forEach(grammer_value.host, function(host_element, host_element_index){
									if(_.includes(url, host_element)){ resolve(grammer_key); return; }
								});
							}
							if(grammer_index==_.size(grammers)){ reject(); return; }
						});
					});
				});
			};

			this.getGrammerValueWithUrl = function(){
				var self = this;
				return $q(function(resolve, reject){
					var url = urlService.getUrl();
					self.getGrammers().then(function(grammers){
						var grammer_index = 0;
						angular.forEach(grammers, function(grammer_value, grammer_key){
							grammer_index += 1;
							if(angular.isString(grammer_value.host)){
								if(_.includes(url, grammer_value.host)){ resolve(grammer_value); return; }
							}
							else if(angular.isArray(grammer_value.host)){
								angular.forEach(grammer_value.host, function(host_element, host_element_index){
									if(_.includes(url, host_element)){ resolve(grammer_value); return; }
								});
							}
							if(grammer_index==_.size(grammers)){ reject(); return; }
						});
					});
				});
			};

			this.getGrammerKeyValueWithUrl = function(){
				var self = this;
				return $q(function(resolve, reject){
					var url = urlService.getUrl();
					self.getGrammers().then(function(grammers){
						var grammer_index = 0;
						angular.forEach(grammers, function(grammer_value, grammer_key){
							grammer_index += 1;
							if(angular.isString(grammer_value.host)){
								if(_.includes(url, grammer_value.host)){ resolve({'key':grammer_key, 'value':grammer_value}); return; }
							}
							else if(angular.isArray(grammer_value.host)){
								angular.forEach(grammer_value.host, function(host_element, host_element_index){
									if(_.includes(url, host_element)){ resolve({'key':grammer_key, 'value':grammer_value}); return; }
								});
							}
							if(grammer_index==_.size(grammers)){ reject(); return; }
						});
					});
				});
			};

			this.getVersions = function(grammer_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getGrammer(grammer_key).then(function(grammer_value){
						if(!grammer_value.versions){ reject(); return; }
						resolve(grammer_value.versions);
					}, function(){
						reject();
					});
				});
			};

			this.getVersion = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersions(grammer_key).then(function(versions){
						if(!versions[version_key]){ reject(); return; }
						resolve(versions[version_key]);
					}, function(){
						reject();
					});
				});
			};

			this.getSettings = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersion(grammer_key, version_key).then(function(version){
						if(!version.settings){ reject(); return; }
						resolve(version.settings);
					}, function(){
						reject();
					});
				});
			};

			this.getSetting = function(grammer_key, version_key, setting_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getSettings(grammer_key, version_key).then(function(settings){
						if(!settings[setting_key]){ reject(); return; }
						resolve(settings[setting_key]);
					}, function(){
						reject();
					});
				});
			};

			this.getPlayOfVersion = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
				self.getVersion(grammer_key, version_key).then(function(version){
						if(!angular.isDefined(version.play)){ reject(); return; }
						resolve(version.play);
					}, function(){
						reject();
					});
				});
			};

			this.getFuncs = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersion(grammer_key, version_key).then(function(version){
						if(!version.funcs){ reject(); return; }
						resolve(version.funcs);
					}, function(){
						reject();
					});
				});
			};

			this.getFunc = function(grammer_key, version_key, func_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getFuncs(grammer_key, version_key, func_key).then(function(funcs){
						if(!funcs[func_key]){ reject(); return; }
						resolve(funcs[func_key]);
					}, function(){
						reject();
					});
				});
			};

			this.getStatuses = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersion(grammer_key, version_key).then(function(version){
						if(!version.statuses){ reject(); return; }
						resolve(version.statuses);
					}, function(){
						reject();
					});
				});
			};

			this.getStatus = function(grammer_key, version_key, status_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getStatuses(grammer_key, version_key, status_key).then(function(statuses){
						if(!statuses[status_key]){ reject(); return; }
						resolve(statuses[status_key]);
					}, function(){
						reject();
					});
				});
			};

			// Boolean Function Section
			this.getBooleanFromBooleanAndPercentage = function(boolean, percentage){
				if(!boolean) return false;
				if(!(percentage>=0&&percentage<=100)) percentage = 100;
				if(Math.random()<=percentage*0.01){
				 	return true;
				}
				return false;
			};

			// Delay Function Section
			this.getDelayOfStep = function(page_delay, step_delay){
				var delay;
				if(page_delay&&step_delay){ delay = page_delay*step_delay*0.01; }
				else if(step_delay){ delay = step_delay; }
				else if(page_delay){ delay = page_delay; }
				else{ delay = 0; }
				return delay;
			};

			// // Page Function Section
			// 이 함수에 들어오는 파라미터는 각 서비스.pages.start 로 들어온다.
			this.getPage = function(pages){
				return $q(function(resolve, reject){
					if(!(_.size(pages)>=1)){ reject(); return; }
					var page_index=0;
					var execute = function(){
						// grammerCheckService.checkPage는 해당 페이지에서 내가 예를 들어 instagrammerfollowService 같은 곳에 
						// instagrammerfollowService.pages.start.(urls || htmls)에 맞게 
						// 각각의 url들과 html정보를 적어놓았는지 체크하는 함수이다.
						grammerCheckService.checkPage(pages[page_index]).then(function(){
							resolve(pages[page_index]); return;
						}, function(){
							if($rootScope.grammer_storage.grammer_key=="facegrammer"&&$rootScope.grammer_storage.grammers[$rootScope.grammer_storage.grammer_key].version_key=="page"){
								$rootScope.message('stopstart', '구동할 자신의 페이스북 페이지로 가주세요!!');
							}
							page_index+=1;
							if(page_index>=pages.length){ reject(); return; }
							else{ execute(); }
						});
					};
					execute();
				});
			};

			this.getPageCorrespondingWithUrl = function(pages){
				var self = this;
				return $q(function(resolve, reject){
					angular.forEach(pages, function(page, page_index){
						grammerCheckService.checkPageWithUrls(page.urls).then(function(){
							resolve(page);
						});
					});
				});
			};

		});

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	angular.module("grammer_execute")
		.service('grammerSetService', function($q, $rootScope, grammerGetService) {
		
			// Grammer Funcion Section
		
			this.setGrammerStorage = function(grammer_storage){
				return $q(function(resolve, reject){
					var obj = {};
					obj['grammer_storage'] = angular.toJson(grammer_storage);
					chrome.storage.local.set(obj, function(){
						grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
							$rootScope.grammer_storage = grammer_storage_get;
							resolve(grammer_storage_get);
						},function(){
							reject();						
						});
					});
				});
			};

			this.setCurrentFuncKey = function(current_func_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
						grammer_storage_get.current_func_key = current_func_key;
						self.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
							resolve(grammer_storage_set.current_func_key);
						}, function(){
							reject();
						});
					});
				});
			};

			// get한 뒤에 grammer_storage_get.grammer_key에다가 grammer_key를 집어넣고 다시 set을 한다. 
			this.setGrammerKey = function(grammer_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
						grammer_storage_get.grammer_key = grammer_key;
						self.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
							resolve(grammer_storage_set.grammer_key);
						}, function(){
							reject();						
						});
					}, function(){
						reject();
					});
				});
			};

			this.setGrammers = function(grammers){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
						grammer_storage_get.grammers = grammers;
						self.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
							resolve(grammer_storage_set.grammers);
						}, function(){
							reject();						
						});
					}, function(){
						reject();
					});
				});
			};

			this.setGrammer = function(grammer_key, grammer_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammers().then(function(grammers_get){
						grammers_get[grammer_key] = grammer_value;
						self.setGrammers(grammers_get).then(function(grammers_set){
							resolve(grammers_set[grammer_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setVersionKey = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammer(grammer_key).then(function(grammer_get){
						grammer_get.version_key = version_key;
						self.setGrammer(grammer_key, grammer_get).then(function(grammer_set){
							resolve(grammer_set.version_key);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setVersions = function(grammer_key, versions){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammer(grammer_key).then(function(grammer_get){
						grammer_get.versions = versions;
						self.setGrammer(grammer_key, grammer_get).then(function(grammer_set){
							resolve(grammer_set.versions);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setVersion = function(grammer_key, version_key, version_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersions(grammer_key).then(function(versions_get){
						versions_get[version_key] = version_value;
						self.setVersions(grammer_key, versions_get).then(function(versions_set){
							resolve(versions_set[version_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setPlayOfVersion = function(grammer_key, version_key, play_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.play = play_value;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.play);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setSettings = function(grammer_key, version_key, settings){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.settings = settings;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.settings);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setSetting = function(grammer_key, version_key, setting_key, setting_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getSettings(grammer_key, version_key).then(function(settings_get){
						settings_get[setting_key] = setting_value;
						self.setSettings(grammer_key, version_key, settings_get).then(function(settings_set){
							resolve(settings_set[setting_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};
			
			this.setFuncs = function(grammer_key, version_key, funcs){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.funcs = funcs;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.funcs);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};
			
			this.setFunc = function(grammer_key, version_key, func_key, func_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getFuncs(grammer_key, version_key).then(function(funcs_get){
						funcs_get[func_key] = func_value;
						self.setFuncs(grammer_key, version_key, funcs_get).then(function(funcs_set){
							resolve(funcs_set[func_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setStatuses = function(grammer_key, version_key, statuses){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.statuses = statuses;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.statuses);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};
			
			this.setStatus = function(grammer_key, version_key, status_key, status_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getStatuses(grammer_key, version_key).then(function(statuses_get){
						statuses_get[status_key] = status_value;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve(statuses_set[status_key]);
						}, function(){
							reject();
						});
					}, function(){
						// 맨 처음 로직 싸이클 돌리고 왔을 때 version.statuses를 설정한다. 
						var statuses_get = {};
						statuses_get[status_key] = status_value;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve(statuses_set[status_key]);
						}, function(){
							reject();
						});
					});
				});
			};

			this.removeStatus = function(grammer_key, version_key, status_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getStatuses(grammer_key, version_key).then(function(statuses_get){
						statuses_get[status_key] = null;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve();
						}, function(){
							reject();
						});
					}, function(){
						// 맨 처음 로직 싸이클 돌리고 왔을 때 version.statuses를 설정한다. 
						var statuses_get = {};
						statuses_get[status_key] = null;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve();
						}, function(){
							reject();
						});
					});
				});
			};

			// click ( execute, extension:initialize false )
			this.setClickOfFunc = function(grammer_key, version_key, func_key, click_value){
				var self = this;
				return $q(function(resolve, reject){
					// 해당 func를 가져온다.
					grammerGetService.getFunc(grammer_key, version_key, func_key).then(function(func_get){
						// 가져온 func에 click속성을 생성하고, click_value 인자값을 설정해준다.
						func_get.click = click_value;
						// 가져온 func_get을 가지고 setFunc를 한다.
						self.setFunc(grammer_key, version_key, func_key, func_get).then(function(func_set){
							resolve(func_set.click);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setClickLogOfFunc = function(grammer_key, version_key, func_key, click_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getFunc(grammer_key, version_key, func_key).then(function(func_get){
						func_get.click_log = click_value;
						self.setFunc(grammer_key, version_key, func_key, func_get).then(function(func_set){
							resolve(func_set.click_log);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerGoService', function($rootScope, $location, arrayService, urlService, grammerGetService){

			// [this.urls.search]
			this.goPage = function(page){
				if(!(page&&page.urls&&page.urls.list&&_.size(page.urls.list)>=1)) return;
				// page.urls.list은 배열이다.
				// arrayService.getRandom이 주는 값은 객체이다.
				// var page_url = page.urls.list[0];
				var page_url = arrayService.getRandom(page.urls.list);
				// page_url은 객체형식이다.
				urlService.getUrlWithExtras(page_url).then(function(url){
					location.href = url;
				});
			};

			this.goNextPage = function(pages){
				var self = this;
				grammerGetService.getPage(pages).then(function(page){
					var index = pages.indexOf(page);
					if(index+1>=pages.length){
						self.goPage(pages[0]);
					}
					else{
						self.goPage(pages[index+1]);
					}
				});
			};

		});

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerActionService', function($q, $timeout, $rootScope, $filter, $interval, $location, $window, arrayService, numberService, urlService, stringService, htmlService, cookieService, timeoutService, getSettingService, grammerService, grammerGetService, grammerSetService, grammerStopService, grammerGoService){

			// Delay Function Section
			this.actionDelay = function(delay, delay_position){
				var self = this;
				var real_delay = delay;
				if(delay_position&&delay_position>=0&&delay_position<=100){
					real_delay = delay*delay_position*0.01*1000;
				}
				else{ real_delay = Math.random()*delay*1000; }
				return real_delay;
			};

			// Delete Function Section
			// delete_object 형식 -> {component:'property', name:'href'}
			this.actionDeleteOnElementSub = function(element, delete_object){
				var self = this;
				return $q(function(resolve, reject){
					if(delete_object&&delete_object.component=='property'){
						element.removeAttribute(delete_object.name);
						resolve(element);
					}
					else{
						resolve(element);
					}
				});
			};
			
			// delete_info 형식 --> [{component:'property', name:'href'}]
			this.actionDeleteOnElement = function(element, delete_info){
				var self = this;
				return $q(function(resolve, reject){
					if(!(delete_info&&delete_info.length>=1)){ resolve(element); return; }
					var delete_index = 0;
					var selfCarryOut = function(){
						self.actionDeleteOnElementSub(element, delete_info[delete_index]).then(function(element){
							delete_index += 1;
							if(delete_info.length==delete_index){
								resolve(element); return;
							} 
							selfCarryOut(); 
						});
					};
					selfCarryOut();
				});
			};

			this.actionClick_singleSub = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					self.solvePandora(option.index).then(function(index){
						htmlService.getElement(option.html, option.random, index).then(function(element){
							// option.delete 형식 --> [{component:'property', name:'href'}]
							self.actionDeleteOnElement(element, option.delete).then(function(element){
								$(element).simulate('mouseenter');
								$(element).simulate('mouseover');
								$(element).simulate("focus");
								$timeout(function(){
									$(element).simulate("click");
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							});
						}, function(){ resolve(); });
					});
				});
			};

			// Click Function Section
			// option, action_delay, action_func
			this.actionClick_single = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option&&option.conditions)){
						self.actionClick_singleSub(option, action_delay, action_func).then(function(){
							resolve();
						});
					}
					else{
						self.actionOnCondition(option).then(function(){
							self.actionClick_singleSub(option, action_delay, action_func).then(function(){
								resolve();
							});
						}, function(){
							resolve();
						});
					}
				});
			};

			this.actionClick_multiple = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					htmlService.getElements(option.html).then(function(elements){
						angular.forEach(elements, function(element, element_index){
							$timeout(function(){
								element.focus(); $(element).focus(); $(element).simulate("focus");
								$(element).simulate("click");
								if(element_index==elements.length-1){ resolve(); }
							}, self.actionDelay(action_delay, option.delay_position));
						});
					}, function(){ resolve(); });
				});
			};

			// 이 함수에 들어오는 option은 원래 action_object.click 형태이다.
			// 이 함수에 들어오는 option은 원래 action_object.func 형태이다.
			// action_object.click, action_delay, action_object.func
			this.actionClick = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return;}
					if(option.target) self.actionSetParentElementOnHTML(option.html);
					if(option&&option.comparison){
						self.comparePandora(option.comparison).then(function(){
							if(!option.multiple){
								self.actionClick_single(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
							else{
								self.actionClick_multiple(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
						}, function(){
							if(!option.multiple){
								self.actionClick_single(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
							else{
								self.actionClick_multiple(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
						});
					}
					else{
						if(!option.multiple){
							self.actionClick_single(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
						}
						else{
							self.actionClick_multiple(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
						}
					}
				});
			};

			this.actionClick_check_count = function(count, count_limit){
				var self = this;
				return $q(function(resolve, reject){
					if(!angular.isNumber(count_limit)){ resolve(); return; }
					else{
						if(count>=count_limit) resolve();
						else reject();
					}
				});
			};

			this.actionClick_interval = function(option, action_delay, element, count, action_func){
				var self = this;
				return $q(function(resolve, reject){
					var intervalPromise = $interval(function(){
						var promises = [];
						if(option&&(option.count||option.comparison)){
							promises.push(self.actionClick_check_count(count, option.count));
							promises.push(self.comparePandora(option.comparison));
						}
						$q.all(promises).then(function(){
							if(angular.isDefined(option.comparison)||angular.isDefined(option.count)){
								$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
							}
							self.actionClick(option, action_delay, action_func);
						}, function(){
							count += 1;
							self.actionClick(option, action_delay, action_func);
						});
					}, option.interval*1000);
				});
			};

			this.actionMultiClick = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return; }
					htmlService.getElement(option.html, option.random).then(function(element){
						var count = 1;
						if(!numberService.isPositive(option.interval)) option.interval = action_delay;
						self.actionClick(option, action_delay, action_func);
						self.actionClick_interval(option, action_delay, element, count, action_func).then(function(){ resolve(); }, function(){ reject(); });
					}, function(){
						resolve();
					});
				});
			};

			// Change Function Section
			this.addClassesOfElement = function(element, classes_add){
				var self = this;
				return $q(function(resolve, reject){
					if(!(classes_add&&(_.size(classes_add)>=1))){ resolve(); return; }
					angular.forEach(classes_add, function(class_add, class_add_index){
						element.classList.add(class_add);
						if(class_add_index==classes_add.length-1){ resolve(); }
					});
				});
			};
			this.removeClassesOfElement = function(element, classes_remove){
				var self = this;
				return $q(function(resolve, reject){
					if(!(classes_remove&&(_.size(classes_remove)>=1))){ resolve(); return; }
					angular.forEach(classes_remove, function(class_remove, class_remove_index){
						element.classList.remove(class_remove);
						if(class_remove_index==classes_remove.length-1){ resolve(); }
					});
				});
			};
			this.changeClassesOfElement = function(element, classes){
	      var self = this;
	        return $q(function(resolve, reject){
	          if(classes){
	            var promises = [];
	            if(classes.add&&classes.add.list&&(_.size(classes.add.list)>=1)){
	              var promise = self.addClassesOfElement(element, classes.add.list);
	              promises.push(promise);
	            }
	            if(classes.remove&&classes.remove.list&&(_.size(classes.remove.list)>=1)){
	              var promise = self.removeClassesOfElement(element, classes.remove.list);
	              promises.push(promise);
	            }
	            if(_.size(promises)>=1) resolve();
	            else $q.all(promises).then(function(){ resolve(); }, function(){ reject(); });
	          }
	          else resolve();
	       });
	    };
			this.addPropertiesOfElement = function(element, properties_add){
				var self = this;
				return $q(function(resolve, reject){
					angular.forEach(properties_add, function(property_add, property_add_index){
						element.setAttribute(property_add.name, property_add.value);
						if(property_add_index==properties_add.length-1){ resolve(); }
					});
				});
			};
			this.removePropertiesOfElement = function(element, properties_remove){
				var self = this;
				return $q(function(resolve, reject){
					if(!(properties_remove&&(_.size(properties_remove)>=1))){ resolve(); return; }
					angular.forEach(properties_remove, function(property_remove, property_remove_index){
						element.removeAttribute(property_remove.name);
						if(property_remove_index==properties_remove.length-1){ resolve(); }
					});
				});
			};
			this.changePropertiesOfElement = function(element, properties){
				var self = this;
				return $q(function(resolve, reject){
					if(properties){
						var promises = [];
						if(properties.add&&properties.add.list&&_(properties.add.list)){
							var promise = self.addPropertiesOfElement(element, properties.add.list);
							promises.push(promise);
						}
						if(properties.remove&&properties.remove.list&&(_.size(properties.remove.list)>=1)){
							var promise = self.removePropertiesOfElement(element, properties.remove.list);
							promises.push(promise);
						}
						if(_.size(promises)>=1) resolve();
						else $q.all(promises).then(function(){ resolve(); }, function(){ reject(); });
					}
					else resolve();
				});
			};

			// element, option.innerHTMLs
			this.changeInnerHTMLOfElement = function(element, innerHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					if(innerHTMLs){
						if(innerHTMLs.all&&innerHTMLs.all.setting_key) {
							element.innerHTML = getSettingService.getSetting(innerHTMLs.all.setting_key, innerHTMLs.all.method);		
							resolve();
						}
						else if(innerHTMLs.prepend&&_.size(innerHTMLs.prepend)) {
							element.prepend(innerHTMLs.prepend);
							resolve();
						}
						else if(innerHTMLs.append&&_.size(innerHTMLs.append)) {
							element.append(innerHTMLs.append);
							resolve();
						}
						else if(innerHTMLs.all&&!innerHTMLs.all.setting_key) {
							element.innerHTML = innerHTMLs.all;
							resolve();
						}
					}
					else {
						resolve();
					}
				});
			};

			this.changeReplaceChildOfElementSub = function(replaceChild){
				var self = this;
				return $q(function(resolve, reject){
					if(replaceChild.text){
						replaceChild.text.value = getSettingService.getSetting(replaceChild.text.setting_key, replaceChild.text.method);
						if(replaceChild.text.value){
							replaceChild.text.value = ' '+replaceChild.text.value;
							resolve(replaceChild);
						}
					}
				});
			};

			this.changeReplaceChildOfElement = function(element, replaceChild){
				var self = this;
				return $q(function(resolve, reject){
					self.changeReplaceChildOfElementSub(replaceChild).then(function(replaceChild){
						var newChild = document.createTextNode(replaceChild.text.value);
						if(replaceChild.position=='LAST'){
							var index = element.childNodes.length-1;
							if(index<=0) index = 0;
							element.replaceChild(newChild, element.childNodes[index]);
						}
						resolve();
					});
				});
			};

			// element, option.replaceChilds
			this.changeReplaceChildsOfElement = function(element, replaceChilds){
				var self = this;
				return $q(function(resolve, reject){
					if(!(replaceChilds&&replaceChilds.list&&_.size(replaceChilds.list)>=1)){ resolve(); return; }
					var promises = [];
					angular.forEach(replaceChilds.list, function(replaceChild, replaceChild_index){
						var promise = self.changeReplaceChildOfElement(element, replaceChild);
						promises.push(promise);
						if(replaceChild_index==replaceChilds.list.length-1){
							$q.all(promises).then(function(){ resolve(); }, function(){ reject(); });	
						}
					});
				});
			};

			// action_object.change, action_delay, action_object.func
			this.actionChange = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return;}
					htmlService.getElement(option.html, option.random).then(function(element){
						var promise_classes = self.changeClassesOfElement(element, option.classes);
						var promise_properties = self.changePropertiesOfElement(element, option.properties);
						var promise_innerHTMLs = self.changeInnerHTMLOfElement(element, option.innerHTMLs);
						var promise_replaceChilds = self.changeReplaceChildsOfElement(element, option.replaceChilds);
						$q.all([promise_classes, promise_properties, promise_innerHTMLs, promise_replaceChilds]).then(function(){ resolve(); }, function(){ reject(); });
					}, function(){ resolve(); });
				});
			};

			// Check Function Section
			// action_object.check, action_delay, action_object.func
			this.actionCheck = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(option&&option.status){
						if(option&&option.exist){
							if(grammerService.service.getStatus(option.status)) resolve();
							else reject();
						}
						else{
							if(grammerService.service.getStatus(option.status)) reject();
							else resolve();
						}
					}
					else{
						var promises = [];
						var html_index = 0;
						var execute = function(){
							if(option.htmls[html_index].target) self.actionSetParentElementOnHTML(option.htmls[html_index].html);
							htmlService.getElement(option.htmls[html_index].html).then(function(element){ // 요기 getElement에 index파라미터가 들어가야한다.
								// exist == true
								if(option.htmls[html_index].exist){
									html_index+=1;
									if(html_index>=option.htmls.length) resolve();
									else execute();
								}
								// exist == false
								else{
									$rootScope.message(action_func, option.htmls[html_index].message);
									reject();
								}
							}, function(){
								if(option.htmls[html_index].exist){
									$rootScope.message(action_func, option.htmls[html_index].message);
									reject();
								}
								else{
									html_index+=1;
									if(html_index>=option.htmls.length) {
										resolve();
									}
									else execute();
								}
							});
						};
						$timeout(function(){
							execute();
						}, self.actionDelay(action_delay, option.delay_position));
					}
				});
			};

			// Compare Function Section
			this.solveTextPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!pandora.isArray){
						if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
						htmlService.getTextOfHtmlObjectWithSplit(pandora.html, pandora.html.split).then(function(text){
							pandora.value = text;
							resolve(pandora);
						}, function(){ reject(); });
					}
					else{
						if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
						htmlService.getTextsOfHtmlObjectWithSplit(pandora.html, pandora.html.split).then(function(text_array){
							pandora.value = text_array;
							resolve(pandora);
						}, function(){ reject(); });	
					}
				});
			};
			this.solveNumberPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
					htmlService.getTextOfHtmlObjectWithSplit(pandora.html, pandora.html.split).then(function(text){
						pandora.value = numberService.makeNumber(text);
						if(pandora&&pandora.plus) pandora.value += pandora.plus;
						resolve(pandora);
					}, function(){ reject(); });
				});
			};

			// pandora.html에 해당하는 elements의 length를 pandora.value로 세팅하고, resolve한다.
			this.solveCountPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
					htmlService.getElements(pandora.html).then(function(elements){
						pandora.value = elements.length;
						pandora.value = numberService.makeNumber(pandora.value);
						resolve(pandora);
					}, function(){ pandora.value = 0; resolve(pandora); return; });
				});
			};

			this.solveQueryPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
					if(grammerService.service.grammer_key=='facegrammer'&&grammerService.service.version_key=='page'){
						pandora.value = [];
						htmlService.getElements(pandora.html).then(function(elements){
							var element_index = 0;
							var selfCarryOut = function(){
								// 1. elements[element_index]
								// 2. getElementsWithSelector 에서 가져오는 판을 설정한다. 
							};
							selfCarryOut();
							// pandora.value = elements;
							// resolve(pandora.value);
						}, function(){ pandora.value = []; resolve(pandora); return; });
					}
				});
			};

			this.solvePandoraAdditionalWork = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!(pandora&&pandora.additional_work)) { reject(); return;}
					var pandora_value_final;
					if(pandora.additional_work.plus){
						self.solvePandoraSub(pandora.additional_work.plus).then(function(plus_pandora){
							if(plus_pandora.multiple){
								self.solvePandoraSub(plus_pandora.multiple).then(function(multiple_pandora){
									pandora_value_final = pandora.value + plus_pandora.value*multiple_pandora.value;
									resolve(pandora_value_final);
								});
							}
							else{
								pandora_value_final = pandora.value + plus_pandora.value;
								resolve(pandora_value_final);
							}
						});
					}
					else if(pandora.additional_work.minus){
						self.solvePandoraSub(pandora.additional_work.minus).then(function(minus_pandora){
							if(minus_pandora.multiple){
								self.solvePandoraSub(minus_pandora.multiple).then(function(multiple_pandora){
									pandora_value_final = pandora.value - minus_pandora.value*multiple_pandora.value;
									resolve(pandora_value_final);
								});
							}
							else{
								pandora_value_final = pandora.value - minus_pandora.value;
								resolve(pandora_value_final);
							}
						});
					}
				});
			};

			// 이 함수 안에 들어오는 pandora라는 인자는 loop.comparison.pandoras에 있는 객체이다.
			// pandora는 pandoras라는 배열에 있는 객체이다.
			this.solvePandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!pandora){ resolve(null); return; }
					self.solvePandoraSub(pandora).then(function(pandora){
						self.solvePandoraAdditionalWork(pandora).then(function(pandora_value_final){
							pandora.value = pandora_value_final;
							resolve(pandora.value);
						}, function(){
							resolve(pandora.value);
						});
					}, function(){
						reject();
					});
				});
			};

			this.solvePandoraSub = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!pandora){ resolve(null); return; }
					// 1. If pandora has basic value, set value as basic.
					if(angular.isDefined(pandora.basic)){ // *** additional work
						pandora.value = pandora.basic;
						resolve(pandora);
						return;
					}
					// 1. Set pandora as elements's length.
					if(angular.isDefined(pandora.html)){
						// 아래 세줄에서 resolve하는 value는 pandora.value이다. 
						if(pandora.type=='TEXT'){ self.solveTextPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='NUMBER'){ self.solveNumberPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='COUNT'){ self.solveCountPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='QUERY'){ self.solveQueryPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='HTML_CHECK'){ resolve(); }
					}
					// 1. Set pandora as status variable.
					else if(angular.isDefined(pandora.status)){ // *** additional work
						pandora.value = grammerService.service.getStatus(pandora.status);
						if(pandora.type=='COUNT'||pandora.type=='NUMBER'){ pandora.value = numberService.makeNumber(pandora.value); }
						else if(pandora.type=='LENGTH'){ pandora.value = pandora.value.length }
						resolve(pandora);
					}
					else if(angular.isDefined(pandora.setting)){ // *** additional work
						pandora.value = grammerService.service.getSetting(pandora.setting);
						if(pandora.type=='COUNT'||pandora.type=='NUMBER'){ pandora.value = numberService.makeNumber(pandora.value); }
						resolve(pandora);
					}
					else if(angular.isDefined(pandora.time)){ // *** additional work
						var date = new Date();
						if(pandora.time=='startday_month') pandora.value = date.getMonth() + 1;
						else if(pandora.time=='startday_date') pandora.value = date.getDate();
						else if(pandora.time=='startmoment_time') pandora.value = date.getTime();
						else if(pandora.time=='current_time') pandora.value = date.getTime();
						resolve(pandora);
					}
					else if(angular.isDefined(pandora.func_name)){
						var grammer_key = grammerService.service.grammer_key;
						var version_key = grammerService.service.version_key;
						var result_array = [];
						grammerGetService.getFunc(grammer_key, version_key, pandora.func_name).then(function(func){
							if(!(func.logs.length>=1)){ pandora.value = func.logs; resolve(pandora); return; }
							// log 형태 -> { target_user_name:status_value, func_key:func_name })
							angular.forEach(func.logs, function(log, log_index){
								result_array.push(log.target_user_name);
								if(log_index+1>=func.logs.length) {
									pandora.value = result_array;
									resolve(pandora);
								}
							});
						});
					}
					else{ resolve(pandora); return; }
				});
			};

			this.comparePandora_compare = function(comparison){
				if(!angular.isDefined(comparison.done)) comparison.done = false;
				if(comparison.type=='=='&&comparison.pandoras[0].value==comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='>'&&comparison.pandoras[0].value>comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='>='&&comparison.pandoras[0].value>=comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='<'&&comparison.pandoras[0].value<comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='<='&&comparison.pandoras[0].value<=comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='in'&&comparison.pandoras[1].value.indexOf(comparison.pandoras[0].value)!==-1){ comparison.done = true; }
				else if(comparison.type=='!in'&&comparison.pandoras[1].value.indexOf(comparison.pandoras[0].value)==-1){ comparison.done = true; }
				else if(comparison.type=='infinite'){ comparison.done = false; }
				else{ comparison.done = false; }
			};

			this.comparePandora_message = function(comparison){
				if(comparison.message){
					var message = '';
					if(comparison.message){ message += comparison.message+' '; }
					message += comparison.pandoras[0].value+' / '+comparison.pandoras[1].value;
					if(comparison.count_confirming&&comparison.count_confirm&&comparison.count_confirm.value) message += ' (확인중 '+comparison.count_confirming+'/'+comparison.count_confirm.value+' )';
					$rootScope.message('stopstart', message);
				}
				else if(comparison.messages){
					if(comparison.done) $rootScope.message('stopstart', comparison.messages[0]); // 작업 끝났을 때
					else $rootScope.message('stopstart', comparison.messages[1]); // 작업 진행중일 때 
				}
			};

			this.comparePandora_confirm = function(comparison){
				// 여기서 // try 를 증가시키기전에 오차 퍼센트를 계산하여 오차 퍼센트가 설정값보다 같거나(0%로 설정할 수도 있으므로) 작은지부터 확인하고 // try 로 넘어간다
				var self = this;
				return $q(function(resolve, reject){
					if(comparison.pandoras[0].value&&comparison.count_limit&&comparison.count_limit.value&&(comparison.pandoras[0].value>=comparison.count_limit.value)) {
						$rootScope.message('stopstart', '쿼리값이 한계값에 도달했습니다. 검색을 마칩니다.', 2);
						resolve(); return;
					}
					// comparison.perentage_error는 setting들 중에서 perentage_error키에 해당하는 value값이다.
					if(comparison.perentage_error&&comparison.perentage_error.value&&angular.isDefined(comparison.pandoras[1].value)){
						// comparison.pandoras[0].value와 comparison.pandoras[1].value의 차이를
						// 퍼센티지로 표현한 것을 perentage_error_current라는 변수에 담는다.
						var perentage_error_current = (comparison.pandoras[1].value-comparison.pandoras[0].value)/comparison.pandoras[1].value * 100;
						// perentage_error_current(현재 오차 퍼센트)가 comparison.perentage_error값 이상이면 reject 
						if(perentage_error_current>=comparison.perentage_error.value){ reject(); return; }
					}
					if(!(comparison.count_confirm&&comparison.count_confirm.value)){ resolve(); return; }
					if(!angular.isDefined(comparison.pandoras[0].value_before)) comparison.pandoras[0].value_before = comparison.pandoras[0].value;
					if(!angular.isDefined(comparison.pandoras[1].value_before)) comparison.pandoras[1].value_before = comparison.pandoras[1].value;
					if(comparison.start){
						if((comparison.pandoras[0].value_before==comparison.pandoras[0].value)&&(comparison.pandoras[1].value_before==comparison.pandoras[1].value)){
							comparison.count_confirming += 1;
						}
						else{
							comparison.pandoras[0].value_before = comparison.pandoras[0].value;
							comparison.pandoras[1].value_before = comparison.pandoras[1].value;
							comparison.count_confirming = 0;
						}

						if(comparison.count_confirming>comparison.count_confirm.value){ resolve(); return; }
						reject();
					}
					else{
						comparison.start = true;
						comparison.count_confirming = 0;
						reject();
					}
				});
			};

			this.comparePandora = function(comparison){
				var self = this;
				return $q(function(resolve, reject){
					if(comparison&&comparison.count_confirm&&comparison.count_confirm.setting_key)
						comparison.count_confirm.value = getSettingService.getSetting(comparison.count_confirm.setting_key);

					if(comparison&&comparison.perentage_error&&comparison.perentage_error.setting_key)
						comparison.perentage_error.value = getSettingService.getSetting(comparison.perentage_error.setting_key);

					if(comparison&&comparison.count_limit&&comparison.count_limit.setting_key)
						comparison.count_limit.value = getSettingService.getSetting(comparison.count_limit.setting_key);
					// 1. If comparison is empty, resolve.
					// resolve 1
					if(!(comparison&&comparison.pandoras&&_.size(comparison.pandoras)>=1)){ resolve(); return; }
					var promises = [];
					angular.forEach(comparison.pandoras, function(pandora, pandora_index){
						// 2. Push calulate pandora of pandora promise.
						promises.push(self.solvePandora(pandora));
						// comparison.pandoras안의 객체들(2개)을 전부 돌린다.
						if(pandora_index+1==comparison.pandoras.length){
							$q.all(promises).then(function(){
								// 3. Compare.
								// 이 함수는 comparison.done값을 설정하기 위한 함수다.
								self.comparePandora_compare(comparison);
								// 3. Message
								self.comparePandora_message(comparison);
								// 3. Reject when no count_confirm
								if(!(comparison.count_confirm&&angular.isDefined(comparison.count_confirm.value)&&comparison.count_confirm.value>=1)){ 
									// resolve 2
									if(comparison.done){ resolve(); return; }
									reject(); return;
								}
								// 3. Reject before confirm.
								
								// resolve 3
								self.comparePandora_confirm(comparison).then(function(){ resolve(); }, function(){ reject(); });
							}, function(){ reject(); } );
						}
					});
				});
			};

			// action_object.compare, action_delay, action_object.func
			this.actionCompare = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option){ resolve(); return; }
					$timeout(function(){
						self.comparePandora(option).then(function(){ resolve(); }, function(){ reject(); });
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Go Function Section
			// action_object.go, action_delay, action_object.func
			this.actionGo = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.url){ reject(); return; }
					urlService.getUrlWithExtras(option.url).then(function(url){
						if(option.target_username&&arrayService.element_index) self.actionTargetUsername(option.target_username, action_delay, arrayService.element_index);
						$timeout(function(){
							location.href = url;
							resolve();
							// return;
						}, self.actionDelay(action_delay, option.delay_position));
					}, function(){
						reject();
					});
				});
			};

			//  Input Function Section
			//  action_object.input, action_delay, action_object.func
			this.actionInput = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					var new_review_boolean = getSettingService.getSetting('boolean_review_by_username');
					if(!option.html){ resolve(); return; }
					if(option.target) self.actionSetParentElementOnHTML(option.html);
					htmlService.getElement(option.html, option.random).then(function(element){
						$(element).simulate("focus");
						// [this.texts.review]
						if(option.texts&&option.texts.length>=1){
							// option.texts[0]이 배열이 아닐 경우(option.texts 자체가 배열) --> option.texts를 작업하면 된다.
							if(!angular.isArray(option.texts[0])){
								if(!new_review_boolean) option.texts[0].value = getSettingService.getSetting(option.texts[0].setting_key, option.texts[0].method);
								else option.texts[0].value = '@' + grammerService.target_user_name + getSettingService.getSetting('list_reviews_on_user_name', 'getRandom');
								$timeout(function(){
									$(element).simulate("key-sequence", { sequence:option.texts[0].value } );
									// $(element).trigger('textarea');
									$(element).trigger('input');
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							}
							// option.texts[0]이 배열인 경우 --> option.texts[0]를 작업하면 된다.(앞으로 이럴 경우가 없다.)
							else if(angular.isArray(option.texts[0])){
								option.texts[0].value = getSettingService.getSetting(option.texts[0].setting_key, option.texts[0].method);
								$timeout(function(){
									$(element).simulate("key-sequence", { sequence:option.texts[0].value[Math.floor(Math.random()*option.texts[0].value.length)] } );
									$(element).trigger('input');
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							}
						}
						else if(option.type){
							var text;
							if(option.type=='EMAIL') text = faker.internet.email();
							else if(option.type=='FULLNAME') text = faker.name.findName();
							else if(option.type=='USERNAME') text = faker.internet.userName();
							else if(option.type=='PASSWORD') text = faker.internet.password();
							if(_.size(text)){
								$timeout(function(){
									$(element).simulate("key-sequence", { sequence:text } );
									$(element).trigger('input');
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							}
							else{
								reject();
							}
						}
						else{
							$rootScope.message('stopstart', '입력할 문자가 없습니다');
							reject();
						}
					}, function(){
						resolve();
					});
				});
			};

			// Remove Function Section 
			this.actionMessage = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						$rootScope.message(action_func, option.text);
						resolve();
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Remove Function Section 
			this.actionRemove = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return;}
					if(option&&option.all){
						htmlService.getElements(option.html).then(function(elements){
							$timeout(function(){
								angular.forEach(elements, function(element, element_index){
									element.remove();
									if(element_index+1>=elements.length) resolve();
								});
							}, self.actionDelay(action_delay, option.delay_position));
						}, function(){
							resolve();
						});
					}
					else{
						htmlService.getElement(option.html, option.random).then(function(element){
							$timeout(function(){
								element.remove(); resolve();
							}, self.actionDelay(action_delay, option.delay_position));
						}, function(){
							resolve();
						});
					}
				});
			};

			this.actionOnCondition = function(option){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					angular.forEach(option.conditions, function(condition, condition_index){
						promises.push(self.solvePandora(condition));
						if(condition_index+1>=option.conditions.length){
							$q.all(promises).then(function(){
								if(option.conditions[0].value==option.conditions[1].value) resolve();
								else reject();
							});
						}
					});
				});
			};

			this.actionSaveSub = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					self.solvePandora(option.pandoras[0]).then(function(){
						if(option.pandoras[1].status){
							grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status, option.pandoras[0].value).then(function(status){
								resolve();
							});
						}
					}, function(){ reject(); });
				});
			};

			// Save Function Section
			// action_object.save, action_delay, action_object.func
			this.actionSave = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.pandoras&&_.size(option.pandoras)>=1)){ reject(); }
					$timeout(function(){
						if(!(option&&option.conditions)){
							self.actionSaveSub(option, action_delay, action_func).then(function(){
								resolve();
							}, function(){
								reject();
							});
						}
						else{
							self.actionOnCondition(option).then(function(){
								// 조건에 만족했을 때
								self.actionSaveSub(option, action_delay, action_func).then(function(){
									resolve();
								}, function(){
									reject();
								});
							}, function(){
								// 조건에 만족하지 못했을 때
								resolve();
							});
							// self.solvePandora(option.condition[0]).then(function(first_pandora_value))
						}
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Concat Function Section
			this.actionConcat = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.pandoras&&_.size(option.pandoras)>=1)){ reject(); }
					$timeout(function(){
						self.solvePandora(option.pandoras[0]).then(function(){
							if(option.pandoras[1].status){
								grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status).then(function(status_get){
									var status_will_be_set = status_get.concat(option.pandoras[0].value);
									grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status, status_will_be_set).then(function(status){
										resolve();
									});
								});
							}
						}, function(){ reject(); });
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Scroll Function Section
			// actionScroll_execute에서 사용할 수 있는 재료(offsetTop의 경우)
			// 1. element.offsetTop
			// 2. element.offsetParent.offsetTop
			this.actionScroll_execute = function(element, direction, interval, count, element_parent, body){
				if(count&&(count%5==0)){ 
					interval = numberService.getRandomOfFloatNumber(count);
				}
				else{ 
					interval = numberService.getRandomOfFloatNumber(grammerService.service.getStatus('count'));
				}
				if(direction=='UP'){ 
					$(element).animate({scrollTop: 0}, interval*1000, 'linear'); 
				}
				else if(direction=='OFFSETTOP'){
					if(grammerService.service.grammer_key=="instagrammer"&&grammerService.service.version_key=="unfollow"){
						$(element_parent).animate({scrollTop: element.offsetTop}, interval*1000, 'linear');
					} 
					else if(grammerService.service.grammer_key=="instagrammer"&&grammerService.service.version_key=="myfollower"){
						$('body').animate({scrollTop: element.offsetTop}, interval*1000, 'linear'); 
					}
					else if(grammerService.service.grammer_key=="facegrammer"&&grammerService.service.version_key=="newsfeed"){
						$('body').animate({scrollTop: element.offsetTop}, interval*1000, 'linear');
					}
					else if(grammerService.service.grammer_key=="facegrammer"&&(grammerService.service.version_key=="page"||grammerService.service.version_key=="newfriend")&&body){
						$('body').animate({scrollTop: element.offsetParent.offsetTop+330}, interval*1000, 'linear'); 
					}
					else if(grammerService.service.grammer_key=="facegrammer"&&(grammerService.service.version_key=="page"||grammerService.service.version_key=="newfriend")&&!body){
						$(element_parent).animate({scrollTop: element.offsetTop}, interval*1000, 'linear');
					}
					else{
						$('body').animate({scrollTop: element.offsetTop+($window.innerHeight*0.155)}, interval*1000, 'linear'); 
					}
				}
				// direction=='DOWN'
				else {
					$(element).animate({scrollTop: element.scrollHeight}, interval*1000, 'linear'); 
				}
			};

			this.actionScroll_check_count = function(count, count_limit){
				var self = this;
				return $q(function(resolve, reject){
					// 1. count_limit 이 없을 때 무조건 성공
					if(!angular.isNumber(count_limit)){ resolve(); return; }
					// 2. count_limit 이 있을 때 검증
					else{ 
						if(count>=count_limit) resolve();
						else reject();
					}
				});
			};

			// 이 함수에 문제가 있다.(어떠한 경우에 스크롤이 멈추고 진행이 안되는 문제)
			// option(action_object.scroll), action_delay, element, count
			this.actionScroll_interval = function(option, action_delay, element, count){
				var self = this;
				return $q(function(resolve, reject){
					// 1. interval Service
					var intervalPromise = $interval(function(){
						var promises = [];
						// if(option&&option.count&&option.comparison){
						if(option&&(option.count||option.comparison)){
							// 3-1. Check count.
							// actionScroll_check_count에 들어가는 option.count는 count_limit의 의미를 지닌다.
							promises.push(self.actionScroll_check_count(count, option.count));
							// 3-2. Check comparison.
							promises.push(self.comparePandora(option.comparison));
						}
						$q.all(promises).then(function(){
							// 4-1. Stop interval.
							// Error first possibility
							//  -> 아래 if문은 무조건 들어갈 수 밖에 없는데 그럼 멈추게 된다.
							//  그럼 그에 해당하는 원인은 actionScroll_check_count, comparePandora 두 함수가 예상과는 달리
							//  조금 일찍 둘다 resolve가 된 경우. 
							//  여기선 comparePandora에서 일찍 resolve가 된 경우밖에 없다.
							if(angular.isDefined(option.comparison)||angular.isDefined(option.count)){
								if(angular.isDefined(option.comparison)){
									grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.comparison.pandoras[1].status, option.comparison.pandoras[0].value).then(function(status_value){
										$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
									});
								}
								else {
									$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
								}
							}
							if(option.click){ self.actionClick(option.click, 0); }
							self.actionScroll_execute(element, option.direction, option.interval, count, null, option.body);
						}, function(){
							// option.click이 있을 때 actionClick을 실행시키기 위하여 잠시 scroll을 stop한다.
							$(element).stop();
							// 4-2. Continue interval.
							count += 1;
							if(option.click){ self.actionClick(option.click, 0); }
							self.actionScroll_execute(element, option.direction, option.interval, count, null, option.body);
						});
					}, option.interval*1000);

					// 2. Stop scroll if time is over.
					// Error second possibility
					//	-> action_delay가 터무니없이 낮게 들어올 수 있다는 점 
					if(numberService.isPositive(action_delay)){
						$timeout(function(){
							if(angular.isDefined(option.comparison)){
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.comparison.pandoras[1].status, option.comparison.pandoras[0].value).then(function(status_value){
									$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
								});
							}
							else {
								$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
							}
						}, self.actionDelay(action_delay, 100));
					}
				});
			};

			// action_object.scroll, action_delay, action_object.func
			this.actionScroll = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					// 1. If html is blank, set html with body.
					if(!option.html) option.html = {tag:'body'};
					htmlService.getElement(option.html, option.random).then(function(element){
						// count 초기화만 시켜놓는다.
						var count = 1;
						// 2. Set default interval as action_delay.
						if(!numberService.isPositive(option.interval)) option.interval=action_delay;
						// 2. Scroll just one time.
						self.actionScroll_execute(element, option.direction, option.interval, count, null, option.body);
						// 2. Scroll just one time.
						if(option.click){ self.actionClick(option.click, 0); }
						// 2. Scroll periodically.
						// actionScroll_interval에서 count를 작업시마다 +1 한다.
						self.actionScroll_interval(option, action_delay, element, count).then(function(){ resolve(); }, function(){ reject(); });
					}, function(){ 
						// $(element).stop();
						resolve(); 
					});
				});
			};

			// Log Function Section
			this.actionSet_func_log = function(action_object, func_name){
				return $q(function(resolve, reject){
					if(!func_name){ resolve(); return; }
					if(!(action_object&&action_object.log_push)){ resolve(); return; }
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'target_user_name').then(function(status_value){
						grammerGetService.getFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name).then(function(func_value){
							if(!(func_value&&func_value.logs)){ resolve(); return; }
							func_value.logs.push({ target_user_name:status_value, func_key:func_name });
							grammerSetService.setFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name, func_value).then(function(func_value){
								resolve();
							}, function(){
								reject();
							});
						});
					}, function(){
						grammerGetService.getFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name).then(function(func_value){
							if(!(func_value&&func_value.logs)){ resolve(); return; }
							func_value.logs.push({ target_user_name:grammerService.target_user_name, func_key:func_name });
							grammerSetService.setFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name, func_value).then(function(func_value){
								resolve();
							}, function(){
								reject();
							});
						});
					});
				});
			};

			// Set Function Section
			this.actionSetParentElementOnHTML = function(html){
				// html가 객체형식일 경우
				if(!angular.isArray(html)){ html.parent_element = grammerService.service.target; return; }
				// html가 배열형식일 경우
				angular.forEach(html, function(html_object, html_object_index){
					html_object.parent_element = grammerService.service.target;
					if(html_object_index+1>=html.length) return;
				});
			};

			// Status Function Section
			this.actionStatus_status = function(status){
				return $q(function(resolve, reject){
					if(!status){ resolve(); return; }
					var status_key;
					if(status&&status.increase) status_key = status.increase;
					else if(status&&status.decrease) status_key = status.decrease;
					else if(status&&status.set) status_key = status.set;
					// status_key 는 'count'같은 놈들이다.
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, status_key).then(function(status_value){
						if(!_.isNumber(status_value)) {
							status_value = 0;
						}
						if(status.increase) status_value += 1;
						else if(status.decrease) status_value -= 1;
						else if(status.set) {
							if(status.value=='target_user_name') status_value = grammerService.target_user_name;
							else status_value = status.value;
						}
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, status_key, status_value).then(function(status_value){
							resolve();
						}, function(){
							reject();
						});
					}, function(){
						var status_value;
						if(status.set) {
							if(status.value=='target_user_name') status_value = grammerService.target_user_name;
							else status_value = status.value;
						}
						else status_value = 0;
						if(status.increase) status_value += 1;
						else if(status.decrease) status_value -= 1;
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, status_key, status_value).then(function(status_value){
							resolve();
						}, function(){
							reject();
						});
					});
				});
			};

			this.actionStatus_statuses = function(statuses){
				var self = this;
				return $q(function(resolve, reject){
					if(!(_.size(statuses)>=1)){ resolve(); return; }
					var promises = [];
					var statuses_index = 0;
					var execute = function(){
						self.actionStatus_status(statuses[statuses_index]).then(function(){
							statuses_index += 1;
							if(statuses_index<statuses.length) execute();
							else resolve();
						}, function(){
							reject();
						});
					};
					execute();
				});
			};

			this.actionStatus = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.statuses||option.set)){ resolve(); return; }
					$timeout(function(){
						if(option&&option.statuses) self.actionStatus_statuses(option.statuses).then(function(){ resolve(); }, function(){ reject(); });
						else if(option&&option.set) {
							self.actionStatus_status(option).then(function(){ resolve(); }, function(){ reject(); });
						}
					}, self.actionDelay(action_delay, 50));
				});
			};

			// Target Function Section
			this.removeBackGroundColorAll = function(){
				var self = this;
				return $q(function(resolve, reject){
					htmlService.getElements({ classes:{list:['b-be1']} }).then(function(elements){
						if(!(elements.length>=1)) {
							resolve(); return;
						}
						angular.forEach(elements, function(element, element_index){
							element.classList.remove('b-be1');
							element.background = null;
							if(elements.length==element_index+1){
								resolve();
							} 
						});
					}, function(){
						resolve();
					});
				});
			};
			 
			// action_object.target, action_delay, action_object.func
			this.actionTarget = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.set){
						self.removeBackGroundColorAll().then(function(){
							if(grammerService.service&&grammerService.service.target) grammerService.service.target = null;
							resolve(); return;
						}, function(){
							if(grammerService.service&&grammerService.service.target) grammerService.service.target = null;
							resolve(); return;
						});
					}
					else {
						htmlService.getElements(option.html).then(function(elements){
							if(option.sort) elements = $filter('orderBy')(elements, '+offsetTop');
							self.solvePandora(option.index).then(function(index){
								// target의 index 객체가 status가 아닌 basic값으로 들어갈 때를 대비한 로직
								if(!angular.isNumber(index)) index = index.value; 
								if(elements&&elements[index]){
									grammerService.service.target = elements[index];
									if(option.target_username) self.actionTargetUsername(option.target_username, action_delay, index);
									// scroll section
									if(option.scroll&&option.scroll.value) {
										if(option.scroll.parent_html){
											htmlService.getElement(option.scroll.parent_html).then(function(parent_element){
												self.actionScroll_execute(grammerService.service.target, 'OFFSETTOP', 2, null, parent_element, option.body);
											});
										}
										else{
											self.actionScroll_execute(grammerService.service.target, 'OFFSETTOP', 2, null, arrayService.target_parent, option.body);
										}		
										self.actionClick(option.scroll);
									}
									$(grammerService.service.target).simulate('focus');
									grammerService.service.target.classList.add('b-be1');
									// user_name을 crawl하는 이유는 댓글을 달기 위함이다.
									if(option.crawl_user_name&&option.crawl_user_name.value){
										if(option.crawl_user_name&&option.crawl_user_name.target) option.crawl_user_name.target.parent_element = grammerService.service.target;
										htmlService.getElement(option.crawl_user_name.target).then(function(element){
											htmlService.username = element.innerHTML;
											resolve();
										});
									}
									else{
										resolve();
									}
								}
								else{ reject(); }
							}, function(){ reject(); });
						});
					}
				});
			};

			// Post Function Section
			// 1. url: 댓글 포스팅할 url
			// 2. data: 포스팅할 댓글
			// 3. headers: 
			this.actionPost_post = function(url, data, headers){
				var self = this;
				return $q(function(resolve, reject){
					// jquery Ajax method
					// Ajax method : Ajax is the art of exchanging data with a server, and update parts of a web page - without reloading the whole page.
					$.ajax({
						type: "POST",
						url: url,
						data: data,
						beforeSend: function(xhr){
							angular.forEach(headers, function(header, header_index){
								if(angular.isDefined(header.key)&&angular.isDefined(header.value)) xhr.setRequestHeader(header.key, header.value);
							});
						},
						success : function(data){ resolve(); },
						error : function(request, status, error){ reject(); }
					});
					// 1. beforeSend: A function to run before the request is sent
					// 2. success: A function to be run when the request succeeds
					// 3. error: A function to run if the request fails
					// xhr: xmlHttpRequest Object를 말함
					// xhr을 이용하여서 사용할 수 있는 Method References를 보려면 http://www.w3schools.com/xml/dom_http.asp 참고
				});
			};

			// option의 형태: post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }
			// csrftokens의 형태: csrftoken값들의 배열.
			this.actionPost_execute = function(option, csrftokens){
				var self = this;
				return $q(function(resolve, reject){
					var new_review_boolean = getSettingService.getSetting('boolean_review_by_username');
					urlService.getUrlWithExtras(option.url).then(function(url){
						var csrftoken_index = 0;
						var execute = function(){
							if(csrftokens){
								$filter('filter')(option.headers, {cookie:'csrftoken'})[0].value = csrftokens[csrftoken_index];
								csrftoken_index += 1;
							}
							// 1. option.data.comment_text가 배열인 경우 (이런 경우는 없을 것이다.)
							if(angular.isArray(option.data.comment_text)){
								var temporary_option_data = { comment_text: arrayService.getRandom(option.data.comment_text) };
								self.actionPost_post(url, temporary_option_data, option.headers ).then(function(){ resolve(); }, function(){ 
									if(csrftokens&&csrftoken_index==csrftokens.length-1){ execute(); }
									else reject();
								});
							}
							// 2. option.data.comment_text가 배열이 아닌 경우
							else{
								var temporary_text;
								if(!new_review_boolean) temporary_text = getSettingService.getSetting(option.data.comment_text.setting_key, option.data.comment_text.method);
								else temporary_text = '@' + grammerService.target_user_name + ' ' + getSettingService.getSetting('list_reviews_on_user_name', 'getRandom');
								var temporary_option_data = { comment_text: temporary_text };
								self.actionPost_post(url, temporary_option_data, option.headers ).then(function(){ resolve(); }, function(){ 
									if(csrftokens&&csrftoken_index==csrftokens.length-1){ execute(); }
									else reject();
								});
							}
						};
						execute();
					}, function(){ reject(); });
				});
			};

			// action_object.post, action_delay, action_object.func
			this.actionPost = function(option, action_delay){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						// 1. option.headers 배열에 cookie속성 값이 csrftoken인 객체가 있는지 csrftoken_headers에 담아서 판별한다.
						var csrftoken_headers = $filter('filter')(option.headers, {cookie:'csrftoken'});
						// 2. self.actionPost_execute를 통해 댓글을 포스트 한다.
						// 2-1. option.headers 배열에 1번에서 추출한 객체가 없다면 actionPost_execute를 통해 작업한다.
						if(!(csrftoken_headers&&csrftoken_headers.length>=1)){ self.actionPost_execute(option).then(function(){ resolve(); }, function(){ reject(); }); }
						// 2-2. option.headers 배열에 1번에서 추출한 객체가 있다면 cookieService.readCsrftokens 메서드를 활용해서 댓글 달기를 한다.
						else{
							cookieService.readCsrftokens().then(function(csrftokens){
								self.actionPost_execute(option, csrftokens).then(function(){ resolve(); }, function(){ reject(); });
							}, function(){ self.actionPost_execute(option).then(function(){ resolve(); }, function(){ reject(); }); });
						}
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionGoPage = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						var service = grammerService.service;
						// grammerGoService.goPage(service.pages.start[0]);
						grammerGoService.goPage(service.pages.start[option.page_index]);
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionUnfollowOnPost_execute = function(elFollow, elUnfollow, memberNo, followType, name){
				var self = this;
				return $q(function(resolve, reject){
					$.ajax({
		        url: "/my/unFollow.nhn",
		        async: true,
		        method: "post",
		        data: {
	            followType: followType,
	            followNo: memberNo
		        },
		        dataType: "json",
		        success: function(json) {
		        	resolve();
		        },
		        error: function() {
	            reject();
		        }
			    });
				});
			};

			this.actionUnfollowOnPost = function(action_delay){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						self.solvePandora({ status:'elUnfollow' }).then(function(elUnfollow){
							self.solvePandora({ status:'elFollow' }).then(function(elFollow){
								self.solvePandora({ status:'memberNo' }).then(function(memberNo){
									self.actionUnfollowOnPost_execute(elFollow, elUnfollow, memberNo, 'PERSON', grammerService.target_user_name).then(function(){
										resolve();
									}, function(){
										reject();
									});
								});
							});
						});
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionNaverBlogSubmit = function(action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'target_user_name').then(function(status_value){
							var b = document.createElement("form");
							b.id = "addBuddyPopupForm";
							document.body.appendChild(b);
							b.target = "_self";
							b.method = "post";
							b.action = "http://blog.naver.com/BuddyAdd.nhn?blogId=" + status_value;
							b.submit();
						}, function(){
							reject();
						});
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionSubtractSave = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						// first_pandora_value --> 피뺄셈 값
						self.solvePandora(option.pandoras[0]).then(function(first_pandora_value){
							// second_pandora_value --> 뺄셈 값
							self.solvePandora(option.pandoras[1]).then(function(second_pandora_value){
								var result_value = first_pandora_value - second_pandora_value;
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[2].status, result_value).then(function(status){
									resolve();
								}, function(){
									reject();
								});
							});
						});
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionManageFollowingList = function(following_list, corresponding_index){
				var self = this;
				return $q(function(resolve, reject){
					var following_length_before = following_list.length;
					following_list.splice(corresponding_index, 1);
					var following_length_after = following_list.length;
					if(following_length_before-1==following_length_after) resolve();
					else reject();
				});
			};

			this.actionExcludeSub = function(follower_list, following_list, follower_index){
				var self = this;
				return $q(function(resolve, reject){
					var corresponding_index = following_list.indexOf(follower_list[follower_index]);
					if(corresponding_index>=0) {
						self.actionManageFollowingList(following_list, corresponding_index).then(function(){
							if(follower_index+1>=follower_list.length) resolve();
							else reject();
						}, function(){
							if(follower_index+1>=follower_list.length) resolve();
							else reject();
						});
					}
					else {
						if(follower_index+1>=follower_list.length) resolve();
						else reject();
					}
				});
			};

			this.actionExclude = function(option, action_delay, index){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.pandoras&&_.size(option.pandoras)>=1)){ reject(); }
					// first_pandora_value --> 팔로워 리스트
					self.solvePandora(option.pandoras[0]).then(function(first_pandora_value){
						// second_pandora_value --> 팔로잉 리스트
						self.solvePandora(option.pandoras[1]).then(function(second_pandora_value){
							var follower_index = 0;
							var selfCarryOut = function(){
								self.actionExcludeSub(first_pandora_value, second_pandora_value, follower_index).then(function(){
									// first_pandora_value : follower_list, second_pandora_value : following_list
									grammerSetService.removeStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status).then(function(){
										grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status, second_pandora_value).then(function(status){
											resolve();
										});
									});
								}, function(){
									follower_index += 1;
									selfCarryOut();
								});
							};
							selfCarryOut();
						});
					});
				});
			};

			this.actionCrawlIndexOnTargetUsername = function(element, elements){
				var self = this;
				return $q(function(resolve, reject){
					var corresponding_index;
					angular.forEach(elements, function(element_ingredient, element_ingredient_index){
						if(element.innerHTML==element_ingredient.innerHTML){
							corresponding_index = element_ingredient_index;
							resolve(corresponding_index);
						}
					});
				});
			};

			// log기록을 위한 target으로 설정된 유저의 이름을 grammerService.target_user_name에 저장해 두는 로직
			this.actionTargetUsername = function(option, action_delay, index){
				var self = this;
				return $q(function(resolve, reject){
					var element;
					if(!option.html){ resolve(); return; }
					htmlService.getElements(option.html).then(function(elements){
						if(!(option&&option.random)){
							if(!index) {
								element = elements[0];
								if(option.type=='outerHTML') grammerService.target_user_name = element.outerHTML;
								else grammerService.target_user_name = element.innerHTML;
							}
							else {
								element = elements[index];
								if(option.type=='outerHTML') grammerService.target_user_name = element.outerHTML;
								else grammerService.target_user_name = element.innerHTML;
							}
						}
						else{
							element = elements[Math.floor(Math.random()*elements.length)];
							if(option.type=='outerHTML') grammerService.target_user_name = element.outerHTML;
							else grammerService.target_user_name = element.innerHTML;
						}
						if(option.html.split&&option.html.split.params&&_.size(option.html.split.params)>=1)
							grammerService.target_user_name = stringService.getSplit(grammerService.target_user_name, option.html.split.params[0], option.html.split.params[1]);
						if(option&&option.crawl_index) {
							var corresponding_index;
							self.actionCrawlIndexOnTargetUsername(element, elements).then(function(corresponding_index){
								var status_option = { set:'element_index', value:corresponding_index };
								self.actionStatus(status_option, 1, null);
							});
						}
						resolve();
					});
				});
			};

			this.actionOnPopup = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$rootScope.booleans[option.variable] = option.value;
					$rootScope.$on('useUnfollowNew', function(event){
						$rootScope.booleans[option.variable] = !option.value;
						resolve();
					});
					$rootScope.$on('useUnfollowPast', function(event){
						$rootScope.booleans[option.variable] = !option.value;
						grammerStopService.stop();
						// reject();
					});
				});
			};

			this.actionMyNameCheck = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					// identification--> 구동하는 내 이름
					// user_name--> 상대방 이름
					var identification = $rootScope.values.identification;
				 	var user_name = grammerService.target_user_name;
					if(identification!=user_name) resolve();
					else reject();
				});
			};

			this.actionLogPush = function(action_object, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						resolve();
						// self.actionSet_func_log(action_object, action_func).then(function(){
						// 	resolve();
						// }, function(){
						// 	reject();
						// });
					}, self.actionDelay(action_delay));
				});
			};

			this.actionReload = function(){
				var self = this;
				return $q(function(resolve, reject){
					location.reload();
					resolve();
				});
			};

			this.actionResolve = function(){
				var self = this;
				return $q(function(resolve, reject){
					resolve();
				});
			};

			this.actionStop = function(){
				var self = this;
				return $q(function(resolve, reject){
					grammerStopService.stop();
				});
			};

			this.action = function(action_object, action_delay){
				var self = this;
				return $q(function(resolve, reject){
					var timeoutPromise = timeoutService.delayPromise(action_delay);
					var actionPromise;
					if(!action_object.func) action_object.func = 'stopstart';
					if(action_object.action=='CLICK') actionPromise = self.actionClick(action_object.click, action_delay, action_object.func);
					else if(action_object.action=='MULTI_CLICK') actionPromise = self.actionMultiClick(action_object.click, action_delay, action_object.func);
					else if(action_object.action=='CHANGE') actionPromise = self.actionChange(action_object.change, action_delay, action_object.func);
					else if(action_object.action=='CHECK') actionPromise = self.actionCheck(action_object.check, action_delay, action_object.func);
					else if(action_object.action=='COMPARE') actionPromise = self.actionCompare(action_object.compare, action_delay, action_object.func);
					else if(action_object.action=='GO') actionPromise = self.actionGo(action_object.go, action_delay, action_object.func);
					else if(action_object.action=='INPUT') actionPromise = self.actionInput(action_object.input, action_delay, action_object.func);
					else if(action_object.action=='CONDITION') actionPromise = self.actionOnCondition(action_object.condition);
					else if(action_object.action=='MESSEAGE') actionPromise = self.actionMessage(action_object.message, action_delay, action_object.func);
					else if(action_object.action=='REMOVE') actionPromise = self.actionRemove(action_object.remove, action_delay, action_object.func);
					else if(action_object.action=='SAVE') actionPromise = self.actionSave(action_object.save, action_delay, action_object.func);
					else if(action_object.action=='CONCAT') actionPromise = self.actionConcat(action_object.concat, action_delay, action_object.func);
					else if(action_object.action=='SCROLL') actionPromise = self.actionScroll(action_object.scroll, action_delay, action_object.func);
					else if(action_object.action=='STATUS') actionPromise = self.actionStatus(action_object.status, action_delay, action_object.func);
					else if(action_object.action=='TARGET') actionPromise = self.actionTarget(action_object.target, action_delay, action_object.func);
					else if(action_object.action=='POST') actionPromise = self.actionPost(action_object.post, action_delay, action_object.func);
					else if(action_object.action=='GO_PAGE') actionPromise = self.actionGoPage(action_object.go_page, action_delay, action_object.func);
					else if(action_object.action=='UNFOLLOW_ON_POST') actionPromise = self.actionUnfollowOnPost(action_delay);
					else if(action_object.action=='NAVER_BLOG_SUBMIT') actionPromise = self.actionNaverBlogSubmit(action_delay, action_object.func);
					else if(action_object.action=='SUBTRACT_SAVE') actionPromise = self.actionSubtractSave(action_object.subtract_save, action_delay, action_object.func);
					else if(action_object.action=='EXCLUDE') actionPromise = self.actionExclude(action_object.exclude, action_delay, action_object.func);
					else if(action_object.action=='TARGET_USERNAME') actionPromise = self.actionTargetUsername(action_object.target_username, action_delay);
					else if(action_object.action=='ONPOPUP') actionPromise = self.actionOnPopup(action_object.on_popup, action_delay, action_object.func);
					else if(action_object.action=='MYNAME_CHECK') actionPromise = self.actionMyNameCheck(action_object.my_name_check, action_delay, action_object.func);
					else if(action_object.action=='LOG_PUSH') actionPromise = self.actionLogPush(action_object, action_delay, action_object.func);
					else if(action_object.action=='RELOAD') actionPromise = self.actionReload();
					else if(action_object.action=='RESOLVE') actionPromise = self.actionResolve();
					else if(action_object.action=='STOP') actionPromise = self.actionStop();
					else{ alert('아직 등록되지 않은 명령입니다. 그래머에게 이 소식을 알려주세요! 010-9488-1462'); reject(); }
					actionPromise.then(function(){
						timeoutPromise.then(function(){
							resolve();
						});
					}, function(){
						reject();
					});
				});
			};

		});

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerStopService', function($rootScope, $location, $filter, arrayService, grammerGetService, grammerSetService){

			this.stop = function(){
				grammerGetService.getGrammerKeyValueWithUrl().then(function( grammer_pair ){
					grammerGetService.getPlayOfVersion(grammer_pair.key, grammer_pair.value.version_key).then(function(play){
						if(play==false){
							grammerGetService.getStatuses(grammer_pair.key, grammer_pair.value.version_key).then(function(statuses){
								var text = '';
								if(_.gt(statuses.like_count,0)||_.gt(statuses.review_count,0)||_.gt(statuses.follow_count,0)||_.gt(statuses.friend_count,0)||_.gt(statuses.unfollow_count,0)){	
									text += $filter('capitalize')(grammer_pair.key)+' 작업 : '+statuses.count+' 번<br/><br/>';
									if(statuses.starttime&&statuses.endtime){ text += ' ' + $filter('date')(new Date(statuses.starttime), 'hh시 mm분')+'~'+$filter('date')(new Date(statuses.endtime), 'hh시 mm분')+'<br/>'; }
									if(_.gt(statuses.like_count,0)) text += '좋아요 작업 : '+statuses.like_count+' 번<br/>'; 
									if(_.gt(statuses.review_count,0)) text += '댓글 작업 : '+statuses.review_count+' 번<br/>'; 
									if(_.gt(statuses.follow_count,0)) text += '팔로우 작업 : '+statuses.follow_count+' 번<br/>'; 
									if(_.gt(statuses.friend_count,0)) text += '친구추가 작업 : '+statuses.friend_count+' 번<br/>'; 
									if(_.gt(statuses.unfollow_count,0)) text += '언팔로우 작업 : '+statuses.unfollow_count+' 번<br/>';
									if(_.gt(statuses.up_count,0)) text += 'UP 버튼 클릭 작업 : '+statuses.up_count+' 번<br/>';
									if(_.gt(statuses.invite_count,0)) text += '초대 작업 : '+statuses.invite_count+' 번<br/>';
									if(_.gt(statuses.review_like_count,0)) text += '댓글 좋아요 작업 : '+statuses.review_like_count+' 번<br/>';
									if(_.gt(statuses.friend_invite_count,0)) text += '친구 초대 작업 : '+statuses.friend_invite_count+' 번<br/>';
									if(_.gt(statuses.empathize_count,0)) text += '공감 작업 : '+statuses.empathize_count+' 번<br/>';
									if(_.gt(statuses.neighborhood_count,0)) text += '서로이웃추가 작업 : '+statuses.neighborhood_count+' 번<br/>';
								}
								else{
									text += arrayService.getRandom(arrayService.famoussayings);
								}
								if(_.size(text)) $rootScope.message('stopstart', text );
							});
						}
						// play===true or play x
						else{
							grammerSetService.setPlayOfVersion(grammer_pair.key, grammer_pair.value.version_key, false).then(function(){
								location.href = grammer_pair.value.url;
							});
						}
					});
				});
			};

		});

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerStartService', function($rootScope, $q, $timeout, $filter, timeoutService, getSettingService, htmlService, grammerService, grammerCheckService, grammerStopService, grammerGetService, grammerSetService, grammerActionService, grammerGoService){

			// Cancel Function Section
			this.cancelTimeoutPromise = function(timeoutPromises){
				return $q(function(resolve, reject){
					$timeout(function(){
						if(timeoutPromises&&_.size(timeoutPromises)>=1){
							angular.forEach(timeoutPromises, function(timeoutPromise, timeoutPromise_index){ 
								$timeout.cancel(timeoutPromise);
								if(timeoutPromises.length<=timeoutPromise_index+1) resolve();
							});
							return;
						}
						else { resolve(); }
					}, 1000);
				});
			};

			// Check Function Section
			this.checkChangeOfDay = function(checked_month, checked_date){
				var momentaryDate = new Date();
				var momentary_month = momentaryDate.getMonth() + 1;
				var momentary_date = momentaryDate.getDate();
				if(checked_date&&checked_month&&(momentary_date>checked_date)||(momentary_month>checked_month)) return true;
				else return false;
			};	

			this.actionCheckChangeOfDay = function(){
				var self = this;
				return $q(function(resolve, reject){
					self.getStartDayTimes().then(function(startday_times){
						self.getWorkEndTimes().then(function(work_end_times){
							if(work_end_times.work_end_month&&work_end_times.work_end_date){
								if(self.checkChangeOfDay(work_end_times.work_end_month, work_end_times.work_end_date)
								||self.checkChangeOfDay(startday_times.startday_month, startday_times.startday_date)) resolve();
								else reject();
							}
							else {
								if(self.checkChangeOfDay(startday_times.startday_month, startday_times.startday_date)) resolve();
								else reject();
							}
						});
					});
				});
			};

			// Get Function Section
			this.getStartDayTimes = function(){
				var self = this;
				return $q(function(resolve, reject){
					var startday_times = { startday_month:null, startday_date:null };
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'startday_month').then(function(startday_month){
						grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'startday_date').then(function(startday_date){
							startday_times.startday_month = startday_month;
							startday_times.startday_date = startday_date;
							resolve(startday_times);
						});
					});
				});
			};

			this.getWorkEndTimes = function(){
				var self = this;
				return $q(function(resolve, reject){
					var work_end_times = { work_end_month:null, work_end_date:null };
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_month').then(function(work_end_month){
						grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_date').then(function(work_end_date){
							work_end_times.work_end_month = work_end_month;
							work_end_times.work_end_date = work_end_date;
							resolve(work_end_times);
						});
					}, function(){
						resolve(work_end_times);
					});
				});
			};

			this.getActionObjectOption = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					var action_object_option;
					if(action_object.click) action_object_option = action_object.click;
					else if(action_object.change) action_object_option = action_object.change;
					else if(action_object.check) action_object_option = action_object.check;
					else if(action_object.input) action_object_option = action_object.input;
					else if(action_object.remove) action_object_option = action_object.remove;
					else if(action_object.target) action_object_option = action_object.target;
					if(action_object_option&&angular.isObject(action_object_option)) resolve(action_object_option);
					else reject();
				});
			};

			this.getActionObjectFunc = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					var action_object_func;
					if(action_object&&action_object.func) action_object_func = action_object.func;
					else action_object_func = 'stopstart';
					if(action_object_func&&angular.isString(action_object_func)) resolve(action_object_func);
					else reject();
				});
			};

			// Loop Function Section
			this.actionLoopSub = function(page){
				var self = this;
				return $q(function(resolve, reject){
					var timeoutPromises = [];
					var promises = [];
					if(page.delay&&page.delay.value&&angular.isNumber(page.delay.value)&&page.delay.value>=0){
						promises.push(timeoutService.delayPromise(page.delay.value));
						timeoutPromises.push($timeout(function(){ $rootScope.message('stopstart', '시간이 초과되어 다음 작업을 시작합니다.'); }, 1.5*(page.delay.value-1)*1000));
						timeoutPromises.push($timeout(function(){ resolve(); }, 1.5*page.delay.value*1000));
					}
					// startSteps를 actionLoop와 startPage에서 둘 다 사용한다.
					// self.startSteps(page).then(function(cancelTimeoutPromise_steps){
					self.startSteps(page).then(function(cancelTimeoutPromise_steps){
						// 3. Continue Loop
						// 1) (cancelTimeoutPromise_steps == true) --> 바로 resolve();
						if(cancelTimeoutPromise_steps){ self.cancelTimeoutPromise(timeoutPromises).then(function(){ resolve(); }); return; }
						// 2) (cancelTimeoutPromise_steps == false) --> page.delay.value 값 만큼 시간이 흐른 뒤 timeoutPromises에 있는 내용을 취소하고 resolve();
						else{
							if(promises&&_.size(promises)>=1){ // page.delay가 있을 때
								$q.all(promises).then(function(){
									self.cancelTimeoutPromise(timeoutPromises).then(function(){ resolve(); });
								});
							}
							else{ // page.delay가 없을 때
								resolve();
							}
						}
					}, function(){
						// 3. End Loop
						reject();
					});
				});
			};

			// 이 함수에 들어오는 파라미터 page는 어떤 action_object.action=='LOOP' 일 때 action_object.loop(object)이다.
			// grammerStartService.actionLoop 에서 resolve -> End Loop, reject -> Continue Loop
			this.actionLoop = function(page){
				var self = this;
				return $q(function(resolve, reject){
					if(page&&page.delay&&page.delay.setting_key) page.delay.value = getSettingService.getSetting(page.delay.setting_key, page.delay.method, page.delay.percentage);
					else page.delay = { value: null };
					// 1. Examine comparation of loop.
					// if(!page.comparison){ reject(); return; }
					// a. comparePandora에서 resolve가 난다면 loop가 종료
					// b. comparePandora에서 reject가 난다면 loop 계속
					if(page.comparison){
						grammerActionService.comparePandora(page.comparison).then(function(){
							// 2. End Loop
							reject(); return;
						}, function(){
							self.actionLoopSub(page).then(function(){ resolve(); }, function(){ reject(); });
						});
					}
					else{
						self.actionLoopSub(page).then(function(){ resolve(); }, function(){ reject(); });
					}
				});
			};

			this.actionTrycatch = function(try_page, catch_page, check_page, finally_page){
				var self = this;
				return $q(function(resolve, reject){
					if(!try_page){ resolve(true); return; }
					// 1. try_page 실행
					self.startSteps(try_page).then(
						function(cancelTimeoutPromise_steps){
							if(!finally_page){ resolve(cancelTimeoutPromise_steps); return; }
							// 2-1. try_page 실행 성공 후 finally_page 실행
							self.startSteps(finally_page).then(function(){ resolve(); }, function(){ reject(); });
						}, 
						function(){
							// 2-2. try_page 실행 실패 후 catch_page 실행
							self.startSteps(catch_page).then(
								function(cancelTimeoutPromise_steps){
									// 2-2-1. catch_page 실행 성공 후 finally_page 실행
									if(!finally_page){ resolve(true); return; }
									self.startSteps(finally_page).then(function(){ resolve(true); }, function(){ reject(); });
								}, 
								function(){
									// 2-2-2. catch_page 실행 실패 후 check_page 실행
									self.startSteps(check_page).then(
										function(cancelTimeoutPromise_steps){
											// 2-2-2-1. check_page 실행 성공 후 finally_page 실행
											if(!finally_page){ resolve(cancelTimeoutPromise_steps); return; }
											self.startSteps(finally_page).then(function(){ resolve(cancelTimeoutPromise_steps); }, function(){ reject(); });
										},
										function(){
											// 2-2-2-2. check_page 실행 실패 후 finally_page 실행
											if(!finally_page){ resolve(true); return; }
											self.startSteps(finally_page).then(function(cancelTimeoutPromise_steps){ resolve(cancelTimeoutPromise_steps); }, function(){ reject(); });
										}
									);
								}
							);
						}
					);
				});
			};

			// 이 함수에 들어오는 action_object는 list_step[step_index].list_action 배열안의 객체 하나이다.
			this.startAction_execute = function(action_object, delay){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.description) $rootScope.message(action_object.func, action_object.description+' 작업 시작');
					if(action_object.action=='LOOP'){
						var execute = function(){
							self.actionLoop(action_object.loop).then(function(){ execute(); }, function(){ resolve(); });
						};
						execute();
					}
					else if(action_object.action=='TRYCATCH'){
						self.actionTrycatch(action_object.try, action_object.catch, action_object.check, action_object.finally).then(function(timeoutPromise_cancel){ resolve(timeoutPromise_cancel); }, function(){ reject();});
					}
					else{
						grammerActionService.action(action_object, delay).then(function(){
							grammerActionService.actionSet_func_log(action_object, action_object.func).then(function(){
								grammerActionService.actionStatus_statuses(action_object.statuses).then(function(){
									if(action_object.description) $rootScope.message(action_object.func, action_object.description+' 작업 완료');
									resolve();
								});
							});
						}, function(){
							reject();
						});
					}
				});
			};

			this.setFuncOptionPercentage = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.func_option&&action_object.func_option.percentage&&action_object.func_option.percentage.setting_key){
						var percentage = action_object.func_option.percentage;
						action_object.func_option.percentage.value = getSettingService.getSetting(percentage.setting_key);
						if(_.isNumber(action_object.func_option.percentage.value)) resolve();
					}
					else resolve();
				});
			};

			this.setFuncOptionBoolean = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&action_object.func_option.boolean.value){
						resolve();
					} 
					else if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&!action_object.func_option.boolean.value){
						reject();
					}
					else{
						if(action_object.func_option&&action_object.func_option.boolean&&action_object.func_option.boolean.click_key){
							var boolean = action_object.func_option.boolean;
							if(boolean.setting_key) 
								action_object.func_option.boolean.value = grammerGetService.getBooleanFromBooleanAndPercentage(getSettingService.getClick(boolean.click_key), getSettingService.getSetting(boolean.setting_key));
							if(boolean.setting_value)
								action_object.func_option.boolean.value = grammerGetService.getBooleanFromBooleanAndPercentage(getSettingService.getClick(boolean.click_key), boolean.setting_value);
							if(_.isBoolean(action_object.func_option.boolean.value)) resolve();
						}
						else resolve();
					}
				});
			};

			this.setFuncOptionClick = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&action_object.func_option.click.value){
						resolve();
					}
					else if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&!action_object.func_option.click.value){
						reject();
					}
					else{
						if(action_object.func_option&&action_object.func_option.click&&action_object.func_option.click.click_key){
							var click = action_object.func_option.click;
							action_object.func_option.click.value = getSettingService.getClick(click.click_key);
							if(_.isBoolean(action_object.func_option.click.value)&&action_object.func_option.click.value) resolve();
							else reject();
						}
						else resolve();
					}
				});
			};

			this.setDayLimitValue = function(action_object, day_limit_value){
				var self = this;
				return $q(function(resolve, reject){
					action_object.func_option.day_limit.value = day_limit_value;
					if(_.isBoolean(action_object.func_option.day_limit.value)) resolve(); 
				});
			};

			this.setWorkEndTimesSub = function(momentary_month, momentary_date){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_month', momentary_month).then(function(){
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_date', momentary_date).then(function(){
							resolve();
						});
					});
				});
			};

			this.setWorkEndTimes = function(){
				var self = this;
				return $q(function(resolve, reject){
					var momentaryDate = new Date();
					var momentary_month = momentaryDate.getMonth() + 1;
					var momentary_date = momentaryDate.getDate();
					self.setWorkEndTimesSub(momentary_month, momentary_date).then(function(){
						resolve();
					});
				});
			};

			this.setFuncOptionDayLimitSub = function(action_object, count_status){
				var self = this;
				return $q(function(resolve, reject){
					// 1. 하루 작업량에 도달했을 경우
					if(count_status==action_object.func_option.day_limit.limit_value){
						self.setWorkEndTimes().then(function(){
							reject();
						});
					}
					// 2. 하루 작업량에 도달하지 못했을 경우
					else if(count_status<action_object.func_option.day_limit.limit_value){
						resolve();
					}
				});
			};

			this.setFuncOptionDayLimit = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!(action_object.func_option&&action_object.func_option.day_limit&&(action_object.func_option.day_limit.limit_setting_key||action_object.func_option.day_limit.limit_status_key))){ resolve(); return; }
					// *** limit_value -> 하루 제한 된 작업 수
					if(action_object.func_option&&action_object.func_option.day_limit&&action_object.func_option.day_limit.limit_setting_key)
						action_object.func_option.day_limit.limit_value = getSettingService.getSetting(action_object.func_option.day_limit.limit_setting_key);
					else if(action_object.func_option&&action_object.func_option.day_limit&&action_object.func_option.day_limit.limit_status_key)
						action_object.func_option.day_limit.limit_value = grammerService.service.getStatus(action_object.func_option.day_limit.limit_status_key);
					// action_object.func_option.day_limit.limit_value = setting_value;
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.day_limit.status_key).then(function(count_status){
						// count_status -> 각 작업시 마다 올라가는 follow_limit_count와 같은 값
						self.actionCheckChangeOfDay().then(function(){
							// 1. Date가 수정되어 제한을 풀고 count_status를 0으로 초기화 한 뒤 작업을 하도록 하는 경우(resolve)
							self.setDayLimitValue(action_object, true).then(function(){
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.day_limit.status_key, 0).then(function(status){
									resolve();
								});
							});
						}, function(){
							// -> 그래머 시작한 날과 해당 작업하려는 날이 같은 경우
							self.setFuncOptionDayLimitSub(action_object, count_status).then(function(){
								// 2. 아직 하루 한계치에 도달을 못해서 해당작업을 하게 되는 경우(resolve)
								resolve();
							}, function(){
								// 3. 하루 한계치에 도달해서 해당작업을 하지 못하게 하는 경우(reject)
								self.setDayLimitValue(action_object, false).then(function(){
									resolve();
									// reject();
								});
							});
						});
					}, function(){
						// 4. 해당 작업을 맨 처음 시작할 때 해당 status_key에 해당하는 value를 초기화 하고 작업을 시작하는 경우(resolve)
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.day_limit.status_key, 0).then(function(status){
							resolve();
						});
					});
				});
			};

			this.setWorkLimitValue = function(action_object, work_limit_value){
				var self = this;
				return $q(function(resolve, reject){
					action_object.func_option.work_limit.value = work_limit_value;
					if(_.isBoolean(action_object.func_option.work_limit.value)) resolve();
				});
			};

			this.setFuncOptionWorkLimitSub = function(action_object, count_status){
				var self = this;
				return $q(function(resolve, reject){
					// 1. 작업 한계치에 도달했을 경우
					if(count_status==action_object.func_option.work_limit.limit_value){
						reject();
					}
					// 2. 하루 작업 한계치에 도달하지 못했을 경우
					else if(count_status<action_object.func_option.work_limit.limit_value){
						resolve();
					}
				});
			};

			this.setFuncOptionWorkLimit = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!(action_object.func_option&&action_object.func_option.work_limit&&(action_object.func_option.work_limit.limit_setting_key||action_object.func_option.work_limit.limit_status_key))){ resolve(); return; }
					// *** limit_value -> 하루 제한 된 작업 수
					if(action_object.func_option&&action_object.func_option.work_limit&&action_object.func_option.work_limit.limit_setting_key)
						action_object.func_option.work_limit.limit_value = getSettingService.getSetting(action_object.func_option.work_limit.limit_setting_key);
					else if(action_object.func_option&&action_object.func_option.work_limit&&action_object.func_option.work_limit.limit_status_key)
						action_object.func_option.work_limit.limit_value = grammerService.service.getStatus(action_object.func_option.work_limit.limit_status_key);
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.work_limit.status_key).then(function(count_status){
						// --> 작업 한계치 도달했는지 확인 후 해당 변수 지정한 후 resolve Or reject
						self.setFuncOptionWorkLimitSub(action_object, count_status).then(function(){
							// 작업 한계치 도달하지 않은 상태 -> resolve
							self.setWorkLimitValue(action_object, true).then(function(){
								resolve();
							});
						}, function(){
							self.setWorkLimitValue(action_object, false).then(function(){
								resolve();
								// reject();
							}); 
						});
					}, function(){	
						// 해당 작업을 맨 처음 시작할 때 해당 status_key에 해당하는 value를 초기화 하고 작업을 시작하는 경우(resolve)
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.work_limit.status_key, 0).then(function(status){
							resolve();
						});
					});
				});
			};

			this.setHtmlExistValue = function(action_object, html_exist_value){
				var self = this;
				return $q(function(resolve, reject){
					action_object.func_option.html_check.value = html_exist_value;
					if(_.isBoolean(action_object.func_option.html_check.value)) resolve();
				});
			};

			this.setFuncOptionHtmlExist = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!(action_object.func_option&&action_object.func_option.html_check&&action_object.func_option.html_check.check)){ resolve(); return; }
					// 이하는 html의 존재 여부를 살피고 
					// 1. 존재할 경우 -> action_object.func_option.html_check.value = true
					// 2. 존재하지 않을 경우 -> action_object.func_option.html_check_value = false
					self.getActionObjectOption(action_object).then(function(action_object_option){
						self.getActionObjectFunc(action_object).then(function(action_object_func){
							htmlService.getElement(action_object_option.html).then(function(){
								self.setHtmlExistValue(action_object, true).then(function(){
									resolve();
								});
							}, function(){
								self.setHtmlExistValue(action_object, false).then(function(){
									resolve();
								});
							});
						});
					}, function(){
						resolve();
					});
				});
			};

			this.setFuncOption = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					promises.push(self.setFuncOptionPercentage(action_object));
					promises.push(self.setFuncOptionBoolean(action_object));
					promises.push(self.setFuncOptionClick(action_object));
					promises.push(self.setFuncOptionDayLimit(action_object));
					promises.push(self.setFuncOptionWorkLimit(action_object));
					promises.push(self.setFuncOptionHtmlExist(action_object));
					$q.all(promises).then(function(){
						resolve();
					}, function(){
						reject();
					});
				});
			}; 

			this.startActionSub = function(page, action_object, delay){
				var self = this;
				return $q(function(resolve, reject){
					self.setFuncOption(action_object).then(function(){
						// startAction을 할 시에 action_object.func가 없으면 stopstart로 초기화
						if(!(_.size(action_object.func)>=1)) action_object.func = 'stopstart';
						// 1. action_object.func_option이 있는 경우
						if(action_object&&action_object.func_option){
							// action_object.func_option.boolean은 작업을 할지 안할지에 대한 boolean값이다.
							// action_object.func_option.boolean.value -> false
							if(action_object.func_option.boolean&&_.isBoolean(action_object.func_option.boolean.value)&&!action_object.func_option.boolean.value){
								// action_object.func_option.click.value -> true
								if(action_object.func_option.click&&_.isBoolean(action_object.func_option.click.value)&&action_object.func_option.click.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 '+action_object.func_option.percentage.value+'% 확률로 작동하여 이번엔 건너뜁니다');
								}
								resolve();
								return;
							}
							// action_object.func_option.boolean.value -> true
							else{
								if(action_object.func_option&&action_object.func_option.day_limit&&_.isBoolean(action_object.func_option.day_limit.value)&&!action_object.func_option.day_limit.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 하루 한계 작업 수에 도달하여 이번엔 건너뜁니다');
									resolve();
									return;
								}
								else if(action_object.func_option&&action_object.func_option.work_limit&&_.isBoolean(action_object.func_option.work_limit.value)&&!action_object.func_option.work_limit.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 한계 작업 수에 도달하여 이번엔 건너뜁니다');
									resolve();
									return;
								}
								else if(action_object.func_option&&action_object.func_option.html_check&&_.isBoolean(action_object.func_option.html_check.value)&&!action_object.func_option.html_check.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 관련 정보가 없어서 이번엔 건너뜁니다.');
									resolve();
									return;
								}
								self.startAction_execute(action_object, delay).then(function(timeoutPromise_cancel){
									resolve(timeoutPromise_cancel);
								},function(){
									reject();
								});
							}
						}
						// 2. 그 외
						//  -> 각 서비스의 초기화 처럼 action_object.func_option이 없는 경우
						else{
							self.startAction_execute(action_object, delay).then(function(timeoutPromise_cancel){
								resolve(timeoutPromise_cancel);
							},function(){
								reject();
							});
						}
					}, function(){
						resolve();
					});
				});
			};

			// startAction에 들어오는 action_object 는 list_step에 있는 객체들중 하나이다.
			this.startAction = function(page, action_object, delay){
				var self = this;
				return $q(function(resolve, reject){
					// instagrammerUnfollowService 용
					if(angular.isDefined(page.select)&&(page.select===true)){
						if(action_object.permissions
						&&(_.size(action_object.permissions)>=1)
						&&(action_object.permissions.indexOf($rootScope.current_func_key)>=0)){
							action_object.func = $rootScope.current_func_key;
							self.startActionSub(page, action_object, delay).then(function(timeoutPromise_cancel){
								resolve(timeoutPromise_cancel);
							}, function(){
								reject();
							});
						}
						else{
							resolve();
						}
					}
					// 그 외
					else{
						self.startActionSub(page, action_object, delay).then(function(timeoutPromise_cancel){
							resolve(timeoutPromise_cancel);
						}, function(){
							reject();
						})
					}
				});
			};

			// Step Function Section
			// 이 함수를 바로 위에서 가지고 있는 startSteps 에선 step_index라는 변수로 list_step함수의 모든 객체에 접근을 한다.
			// i.e , startSteps -> startStep
			// 이 함수에서 step은 서비스.pages.start배열의 객체 하나의 list_step(배열)에 있는 객체 하나이다.(list_step[step_index]의 형태로 주입되서 들어온다.)
			// page, page.list_step[step_index], delay
			this.startStep = function(page, step, delay){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					// action_object은 step.list_action 배열에 있는 객체 하나씩을 의미한다.
					angular.forEach(step.list_action, function(action_object, action_index){
						var promise = self.startAction(page, action_object, delay);
						promises.push(promise);
					});
					$q.all(promises).then(function(cancelTimeoutPromise_actions){
						if(step.stop){
							$rootScope.message('stopstart', $filter('uppercase')(grammerService.service.grammer_key)+'가 '+$filter('uppercase')(grammerService.service.version_key)+' 임무를 완수했습니다');
							$timeout(function(){
								grammerStopService.stop(grammerService.service.grammer_key, grammerService.service.version_key);
							}, 3000);
						}
						else {
							resolve(_.some(cancelTimeoutPromise_actions, Boolean));
						}
					}, function(){ reject(); });
				});
			};

			// page or page[index]
			this.startStepsSub = function(page){
				var self = this;
				return $q(function(resolve, reject){
					if(page.delay&&page.delay.setting_key&&!page.delay.value) page.delay.value = getSettingService.getSetting(page.delay.setting_key, page.delay.method, page.delay.percentage);
					var step_index = 0;
					if(page.delay&&page.delay.value&&page.countdown!=false) $rootScope.countdown(page.delay.value);
					var cancelTimeoutPromise_steps = false;
					var execute = function(){
						var delay;
						if(page.delay&&page.delay.value) delay = grammerGetService.getDelayOfStep(page.delay.value, page.list_step[step_index].delay);
						else delay = grammerGetService.getDelayOfStep(null, page.list_step[step_index].delay);
						if(!(page.delay&&page.delay.value)&&page.list_step[step_index].delay&&(page.list_step[step_index].countdown!=false)) $rootScope.countdown(page.list_step[step_index].delay);
						self.startStep(page, page.list_step[step_index], delay).then(function(cancelTimeoutPromise_step){
							grammerActionService.actionStatus_statuses(page.list_step[step_index].statuses).then(function(){
								step_index+=1;
								if(cancelTimeoutPromise_step){ cancelTimeoutPromise_steps = true; }
								if(!(step_index>=page.list_step.length)) execute();
								else{
									$rootScope.message('stopstart', '잠시 후에 작업을 시작합니다'); 
									resolve(cancelTimeoutPromise_steps);
								}
							});
						},function(){ reject(); });
					};
					execute();
				});
			};

			// 이 함수에 들어오는 page파라미터는 서비스.pages.start라는 배열에 있는 객체 하나이다. 
			// 또는 어떤 action_object.action=='LOOP' 일 때 action_object.loop(object)이다.
			// 서비스.pages.start라는 배열에 있는 객체 또는 배열(facegrammerNewfriendService의 경우) 하나
			this.startSteps = function(page){
				// facegrammerNewfriendService와 같은 경우엔 page가 객체가 아닌 배열이다.
				// page 파라미터가 객체인 경우와 배열인 경우를 나눠서 생각하여야 한다.
				var self = this;
				return $q(function(resolve, reject){
					if(!(page&&_.size(page)>=1)) reject();
					// service가 facegrammerNewfriendService인 경우
					if(page.select_one){
						grammerGetService.getPageCorrespondingWithUrl(page.pages).then(function(page){
							self.startStepsSub(page).then(function(cancelTimeoutPromise_steps){
								resolve(cancelTimeoutPromise_steps);
							}, function(){
								reject();
							});
						});
					}
					else{
						self.startStepsSub(page).then(function(cancelTimeoutPromise_steps){
							resolve(cancelTimeoutPromise_steps);
						}, function(){
							reject();
						});
					}
				});
			};

			// Page Function Section
			// 이 함수에 들어오는 page파라미터는 서비스.pages.start라는 배열에 있는 객체 하나이다. 
			// page, page.delay.value
			this.startPage = function(page, page_delay){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					promises.push(self.startSteps(page));
					var timeoutPromises = [];
					if(_.isNumber(page_delay)&&page_delay>=0){ 
						promises.push(timeoutService.delayPromise(page_delay));
						timeoutPromises.push($timeout(function(){ $rootScope.message('stopstart', '시간이 초과되어 새로운 작업을 시작합니다'); }, 1.5*(page_delay-1)*1000));
						timeoutPromises.push($timeout(function(){ resolve(); }, 1.5*page_delay*1000));
					}
					$q.all(promises).then(function(){
						grammerActionService.actionStatus_statuses(page.statuses).then(function(){
							$rootScope.message('stopstart', '다음 작업 페이지로 이동합니다');
							$timeout(function(){
								if(timeoutPromises&&_.size(timeoutPromises)>=1){
									angular.forEach(timeoutPromises, function(timeoutPromise){ $timeout.cancel(timeoutPromise); });
								}
								resolve();
							}, 1000);
						});
					}, function(){ 
						$timeout(function(){ reject(); }, 2000); 
					});
				});
			};

			this.startService = function(service){
				var self = this;
				if(!(_.size(service.pages.start))>=1) return;
				var getPage_count = 0;
				var getPage = function(){
					getPage_count+=1;
					grammerGetService.getPage(service.pages.start).then(function(page){
						// page.delay.value --> 초기화
						if(page&&page.delay&&page.delay.value) page.delay.value = null;
						if(page&&page.delay&&page.delay.setting_key) page.delay.value = getSettingService.getSetting(page.delay.setting_key, page.delay.method, page.delay.percentage);
						else page.delay = { value: null };
						self.startPage(page, page.delay.value).then(function(){
							if(page.goNextPage!==false&&!(_.isNumber(page.next_page_index)&&page.next_page_index>=0)) grammerGoService.goNextPage(service.pages.start);
							else if(_.isNumber(page.next_page_index)&&page.next_page_index>=0) grammerGoService.goPage(service.pages.start[page.next_page_index]);
							else self.start();
						}, function(){
							// ******* 작업중에 한번이라도 reject가 난다면 page의 첫 객체로 이동한다.
							grammerGoService.goPage(service.pages.start[0]);
						});
					}, function(){
						if(getPage_count<=5){
							$timeout(function(){
								$rootScope.message('stopstart', '작업 준비 중입니다 ( '+getPage_count+'/5 )');
								getPage();
							}, 300);
						}
						else { 
							grammerGoService.goPage(service.pages.start[0]); 
						}
					});
				};
				getPage();
			};

			// Start Function Section
			this.start = function(){
				var self = this;
				var promises = [];
				grammerGetService.getGrammerKeyValueWithUrl().then(function( grammer_pair ){
					var promises = [];
					grammerService.service = grammerService.get( grammer_pair.key, grammer_pair.value.version_key );
					promises.push(grammerCheckService.checkIdentification(grammerService.service));
					promises.push(grammerCheckService.checkRest(grammerService.service));
					$q.all(promises).then(function(){
						// 매 작업 때마다 작업중인 version 에 count_rested라는 속성을 추가시키고, 
						// 그 해당 값을 version.statuses[state_key]를 이용하여 할당 시킨다.
						grammerSetService.setStatus(grammer_pair.key, grammer_pair.value.version_key, 'count_rested', grammerService.service.getStatus('count')).then(function(status){
							grammerGetService.getStatus(grammer_pair.key, grammer_pair.value.version_key, 'count').then(function(status){
								self.startService(grammerService.service);
							}, function(){
								grammerSetService.setStatus(grammer_pair.key, grammer_pair.value.version_key, 'count', 0).then(function(status){
									self.startService(grammerService.service);
								});
							});
						});
					}, function(){ grammerStopService.stop(); });
				}, function(){ $rootScope.message('stopstart', '그래머 스타트 오류입니다. 그래머에게 이 사실을 알려주세요! 010 9488 1462'); });
			};
		});

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('bandgrammerInviteService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'bandgrammer';
			this.version_key = 'invite';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('bandgrammerSignupService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'bandgrammer';
			this.version_key = 'signup';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('blogrammerNewfriendService', function($q, $rootScope, arrayService, numberService, grammerSetService){
			this.grammer_key = 'blogrammer';
			this.version_key = 'newfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['gnb_mail_address']},
					properties:{list:['href']},
					split:{ html:'innerHTML', params:[null, '@naver.com'] },
					check_once: true
				},
				// correspondings 에 있는 것중에서 하나만 만족해도 resolve할 수 있도록 수정.
				// correspondings 에 있는 것중 아무것도 만족하지 않으면 reject
				blog_bulletin:{ tag:'div',
					classes:{list:['multi_img']},
					properties:{list:['onclick']},
					split:{ attr:'onclick', params:["goBlankUrl('", "');"] },
					correspondings:{
						value:[
							{criteria:'onclick', contain:'blog.naver.com'},
							{criteria:'onclick', contain:'blog.me'}
						],
						condition:'OR'
					}
				},
				btn_empathize_do:{ tag:'a',
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt', 'pcol2']},
					properties:{list:['href', 'data-sid', 'data-did', 'data-cid', 'data-likeit']},
					frame_id:'mainFrame'
				},
				btn_empathize_did:{ tag:'a',
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt', 'pcol2', 'on']},
					properties:{list:['href', 'data-sid', 'data-did', 'data-cid', 'data-likeit']},
					frame_id:'mainFrame'
				},
				btn_review_open:{ tag:'a',
					classes:{list:['pcol2', '_cmtList', '_returnFalse']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['댓글']},
					frame_id:'mainFrame'
				},
				btn_review_opened:{ tag:'a',
					classes:{list:['pcol3', '_cmtList', '_returnFalse']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['댓글']},
					frame_id:'mainFrame'
				},
				user_real_id:{ tag:'a',
					classes:{list:['link', '_buddyList', '_returnFalseGnb']},
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['이웃블로그']},
					split:{ html:'outerHTML', params:['http://blog.naver.com|',')">이웃블로그'] },
					frame_id:'mainFrame'
				},
				logNo:{ tag:'frame',
					properties:{list:['name="mainFrame"', 'src', 'scrolling', 'onload']},
					split:{ attr:'src', params:['&logNo=', '&'] }
				},
				screen_frame_src:{ tag:'frame',
					properties:{list:['name="screenFrame"', 'src', 'scrolling']},
					split:{ attr:'src', params:[null, null] }
				},
				box_frameset:{ tag:'frameset',
					properties:{list:['rows', 'frameborder', 'framespacing']}
				},
				box_formComment:{ tag:'form',
					properties:{list:['id="formCommentLoginUser"', 'action="/CommentWrite.nhn"', 'method="post"']}
				},
				src_review:{ tag:'iframe',
					properties:{list:['allowtransparency="true"', 'src']},
					correspondings:{
						value:[
							{criteria:'src', contain:'CommentList.nhn'}
						],
						condition:'OR'
					},
					split:{ attr:'src', params:[null, null] },
					frame_id:'mainFrame'
				},
				box_neighborhood:{ tag:'div',
					classes:{list:['bx']},
					innerOuterHTMLs:{list:['서로이웃']}
				},
				box_neighborhood_together_disable:{ tag:'label',
					classes:{list:['disabled']},
					properties:{list:['for="p31_2"']},
					innerOuterHTMLs:{list:['서로이웃']}
				},
				box_select_neighborhood_together:{ tag:'input',
					classes:{list:['input_radio']},
					properties:{list:['name="relation"', 'type="radio"', 'value="1"']}
				},
				neighborhood_together_execute:{ tag:'a',
					parent_html:{ tag:'div', properties:{list:['id="footer"']} },
					properties:{list:['href="javascript:buddyAdd();"']},
					innerOuterHTMLs:{list:['다음']}
				},
				neighborhood_together_confirm:{ tag:'input',
					parent_html:{ tag:'div', properties:{list:['id="footer"']} },
					properties:{list:['type="image"', 'width="48"', 'height="28"']},
					innerOuterHTMLs:{list:['확인'], type:'OUTERHTML' }
				},
				btn_sticker_review:{ tag:'a',
					classes:{list:['pcol2']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['스티커 댓글']}
				},
				btn_sticker_category:{ tag:'button',
					properties:{list:['type="button"', 'data-value="line_characters_in_love"']},
					innerOuterHTMLs:{list:['http://gfmarket.phinf.naver.net']}
				},
				btn_sticker:{ tag:'button',
					parent_html:{ tag:'div', 
						parent_html:{ tag:'li', classes:{list:['active']} },
						classes:{list:['se2_linesticker_list']} 
					},
					properties:{list:['type="button"', 'data-value']},
					index_range:17
				},
				form_neighborhood:{ tag:'form',
					properties:{list:['id="addBuddyPopupForm"', 'target="addBuddy"', 'method="post"']}
				},
				btn_review_delete:{ tag:'span',
					innerOuterHTMLs:{list:['삭제']}
				},
				btn_master_only:{ tag:'input',
					properties:{list:['type="checkbox"', 'id="master_only"', 'name="temp.secretYn"', 'value="true"']}
				},
				btn_add_neighborhood:{ tag:'a',
					properties:{list:['target', 'href', 'onclick']},
					innerOuterHTMLs:{list:['이웃추가']},
					frame_id:'mainFrame'
				},
				btn_add_neighborhood_check:{ tag:'a',
					properties:{list:['href', 'id="buddyinvite_config_anchor"']},
					innerOuterHTMLs:{list:['서로이웃 맺기']}
				},
				btn_apply_submitted:{ tag:'a',
					properties:{list:['href']},
					innerOuterHTMLs:{list:['보낸신청']},
					frame_id:'papermain'
				},
				userid_already_neighborhood_apply:{ tag:'a',
					parent_html:{ tag:'table', properties:{list:['cellspacing', 'summary="이웃맺기 보낸신청 목록"']} },
					properties:{list:['target="_blank"']},
					innerOuterHTMLs:{list:['http://blog.naver.com/GoBlog.nhn?userId='], type:'OUTERHTML'},
					split:{ html:'innerHTML', params:['(',')'] },
					frame_id:'papermain'
				},
				btn_goPage_to_other_page:{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['paginate']} },
					properties:{list:['href']},
					innerOuterHTMLs:{list:['javascript:goPage'], type:'OUTERHTML'},
					frame_id:'papermain'
				},
				btn_admin_neighborhood_together:{ tag:'a',
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['서로이웃 맺기 관리']}
				},
				input_neighborhood_apply:{ tag:'textarea',
					properties:{list:['name="message"', 'id="message"']}
				},
				div_commentWriteWarningArea:{ tag:'div',
					classes:{list:['nob', 'pcol2']},
					properties:{list:['id="commentWriteWarningArea"']},
					innerOuterHTMLs:{list:['제한기능']}
				},
				div_spam:{ tag:'div',
					properties:{list:['id="whole-body"']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }},
					frame_id:'mainFrame'
				},
				input_review:{ tag:'textarea',
					classes:{list:['textarea', '_activeId', '_commentRosText']},
					properties:{list:['cols', 'rows', 'id="commentTextArea"']}
				},
				btn_review_submit:{ tag:'input',
					classes:{list:['_btnComment', 'btn', '_rosRestrict', '_commentRosButton', '_activeId']},
					properties:{list:['type="image"', 'src', 'alt="댓글입력"']}
				}
			};

			// Url Section
			this.urls = {
				pre_search:{ basic:'http://admin.blog.naver.com/AdminMain.nhn?blogId=', extra:{list:[ { grammer_key:'blogrammer', version_key:'newfriend', status:'identification', no_encode:true }, '&Redirect=Buddyinfo' ]}, changing:false },
				search:{ basic:'http://section.blog.naver.com/sub/SearchBlog.nhn?type=post&option.keyword=', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }], '&term=&option.startDate=&option.endDate=&option.page.currentPage=', { range:10 }, '&option.orderBy=date' ]}, changing:false },
				work_first:{ basic:'blog.naver.com', changing:false },
				work_second:{ basic:'blog.me', changing:false },
				detail:{ extra:{list:[ { html:this.htmls.blog_bulletin, no_encode:true, random:true } ]} },
				modified_frame:{ extra:{list:[ { html:this.htmls.screen_frame_src } ]}, changing:false },
				review_url:{ basic:'blog.naver.com', extra:{list:[ { status:'review_link', grammer_key:'blogrammer', version_key:'newfriend', no_encode:true } ]} },
				review_execution_page:{ basic:'blog.naver.com/CommentList.nhn?blogId=', changing:false },
				neighborhood_url:{ basic:'blog.naver.com/BuddyAdd.nhn?blogId=', changing:false },
				neighborhood_second_url:{ basic:'http://blog.naver.com/BuddyAdd.nhn', changing:false }
			};

			// Interval Section
			this.intervals = {
				search:{ setting_key:'interval_search', method:'getRandomOfNumber', percentage:30 },
				work:{ setting_key:'interval_work', method:'getRandomOfNumber', percentage:30 },
				review:{ setting_key:'interval_review', method:'getRandomOfNumber', percentage:30 },
				neighborhood:{ setting_key:'interval_neighborhood', method:'getRandomOfNumber', percentage:30 }
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' },
				friend_messages:{ setting_key:'list_friend_messages', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				empathize:{ click:{ click_key:'empathize' }, percentage:100, boolean:{ click_key:'empathize', setting_value:100 }, html_check:{ check:true } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' }, day_limit:{ limit:100, status_key:'review_limit_count' }, html_check:{ check:true } },
				review_must:{ click:{ click_key:'review' }, percentage:100, boolean:{ click_key:'review', setting_value:100 }, html_check:{ check:true } },
				neighborhood:{ click:{ click_key:'neighborhood' }, percentage:{ setting_key:'percentage_neighborhood' }, boolean:{ click_key:'neighborhood', setting_key:'percentage_neighborhood' }, day_limit:{ limit:100, status_key:'neighborhood_limit_count' }, html_check:{ check:true } },
				message:{ click:{ click_key:'message' }, percentage:{ setting_key:'percentage_message' }, boolean:{ click_key:'message', setting_key:'percentage_message' }, day_limit:{ limit:100, status_key:'message_limit_count' }, html_check:{ check:true } }
			};

			// Page Section
			this.pages = {
				start:[
					// 이미 작업한 유저 검색하는 페이지
					{
						urls : {list:[this.urls.pre_search], condition:'AND'},
						htmls : {list:[this.htmls.btn_add_neighborhood_check], condition:'AND'},
						list_step : [
							{list_action:[ 
								{ action:'CLICK', click:{ html:this.htmls.btn_add_neighborhood_check } } 
							], delay:3, countdown:false},
							{list_action:[
								{ action:'CLICK', click:{ html:this.htmls.btn_apply_submitted } }
							], delay:3, countdown:false},
							{list_action:[
								{ action:'STATUS', status:{ set:'already_neighborhood_apply', value:[] } }
							], delay:2, countdown:false},
							{list_action:[
								{ action:'STATUS', status:{ set:'page_index', value:0 } }
							], delay:1, countdown:false},
							{list_action:[
								{ action:'SAVE', save:{ pandoras:[{html:this.htmls.btn_goPage_to_other_page, type:'COUNT', additional_work:{ plus:{basic:1} } }, {status:'total_page_number_at_already_neighborhood_apply'}] } }
							], delay:2, countdown:false},
							{list_action:[ { action:'LOOP',
								loop:{
									list_step:[
										{list_action:[
											{ action:'STATUS', status:{ statuses:[ {increase:'page_index'} ] } }
										], delay:1},
										{list_action:[ 
											{ action:'CONCAT', description:'이미 이웃신청한 목록 저장', concat:{ pandoras:[{html:this.htmls.userid_already_neighborhood_apply, type:'TEXT', isArray:true}, {status:'already_neighborhood_apply'}] } } 
										], delay:5},
										{list_action:[
											{ action:'TRYCATCH',
												try : {
													list_step:[
														{list_action:[
															{ action:'COMPARE', description:'작업 진행 확인', compare:{ type:'>=', pandoras:[{status:'page_index'}, {status:'total_page_number_at_already_neighborhood_apply'}] } }
														], delay:2},
														// 작업 진행 마무리 되었을 때
														{list_action:[
															{ action:'GO_PAGE', description:'블로그래머', go_page:{ page_index:1 } }
														], delay:2}
													]
												},
												catch : {
													// 작업 진행 마무리 되지 않았을 때
													list_step:[
														{list_action:[
															{ action:'CLICK', click:{ html:this.htmls.btn_goPage_to_other_page, index:{status:'page_index', additional_work:{ minus:{basic:1} }} } }
														], delay:2}
													]
												}
											}
										]}
									]
								}
							} ]}
						]
					},
					// 블로그 게시물 선택하는 페이지
					{
						urls : {list:[this.urls.search], condition:'AND'},
						htmls : {list:[this.htmls.blog_bulletin], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_month'}, {status:'startday_month'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_date'}, {status:'startday_date'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:98}
						],
						delay:this.intervals.search
					},
					// 블로그 게시물 페이지
					{
						urls : {list:[this.urls.work_first, this.urls.work_second], condition:'OR'},
						htmls : {list:[this.htmls.box_frameset], condition:'AND'},
						list_step:[
							{list_action:[ { action:'TRYCATCH',
								try : {
									list_step:[
										// screenFrame 없이 mainFrame만 존재하는 경우
										{list_action:[
											{ action:'CHECK', description:'프레임 확인', check:{ htmls:[ { html:this.htmls.user_real_id, exist:true, message:'수정할 프레임' } ] } }
										], delay:5, countdown:false},
										{list_action:[ { action:'TRYCATCH', 
											try : {
												list_step:[
													{list_action:[
														{ action:'CHECK', func:'empathize', description:'공감한 게시물인지 검사', check:{ htmls:[ {html:this.htmls.btn_empathize_did, exist:false, message:'이미 공감중'} ] } },
														{ action:'CHECK', description:'유저 아이디 있는지 검사', check:{ htmls:[ {html:this.htmls.user_real_id, exist:true, message:'유저 아이디가 없음'} ] } },
														{ action:'CHECK', description:'스팸 게시물 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다.'} ] } }
													], delay:10},
													{list_action:[
														{ action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_real_id, type:'outerHTML' } }
													], delay:10},
													{list_action:[
														{ action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } }
													], delay:10},
													{list_action:[
														{ action:'COMPARE', description:'이미 서로이웃 신청된 사람인지 검사', compare:{ type:'!in', pandoras:[{status:'target_user_name'}, {status:'already_neighborhood_apply'}] } }
													], delay:5},
													{list_action:[
														{ action:'CLICK', func:'empathize', func_option:this.funcs_option.empathize, description:'공감', click:{ html:this.htmls.btn_empathize_do }, log_push:true, statuses:[{increase:'empathize_count'}] }
													], delay:10},
													// 댓글 목록은 관련 html이 있다면 차단 여부를 확인 하기 위해 무조건 연다.
													{list_action:[
														{ action:'CLICK', func:'review', func_option:this.funcs_option.review_must, description:'댓글 목록 열기', click:{ html:this.htmls.btn_review_open } }
													], delay:10},
													// 댓글 src 저장작업
													/*{list_action:[
														{ action:'SAVE', func:'review', func_option:this.funcs_option.review, description:'댓글 준비작업', save:{ pandoras:[{html:this.htmls.src_review, type:'TEXT'}, {status:'review_link'}], delay_position:50 } }
													], delay:15},
													{list_action:[
														{ action:'GO', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 작업 url로 이동', go:{ url:this.urls.review_url, delay_position:100 } }
													], delay:10},*/
													// 1. 댓글목록 상태에 따른 검증
													//   a. 댓글목록관련 html이 있어서 댓글목록이 열려 있는 상태 -> 댓글 작업 페이지로 간다. -> 추후 서로이웃 추가도 알아서 하게 된다.
													//   b. 댓글목록관련 html이 없어서 댓글목록이 열려 있지 않아 차단 검증을 할 수 없는 상태 -> 새로운 작업을 시작한다. 
													// 2. but, 댓글 달러는 가지 않은 상태
													{list_action:[ { action:'TRYCATCH',
														try : {
															list_step:[
																// 댓글목록관련 html이 있는지 확인하고 진행한다.
																{list_action:[
																	{ action:'CHECK', description:'사전 준비/검증 작업 first', check:{ htmls:[ {html:this.htmls.btn_review_opened, exist:true, message:'작업 불가능'} ] } },
																	{ action:'CHECK', description:'사전 준비/검증 작업 second', check:{ htmls:[ {html:this.htmls.btn_add_neighborhood, exist:true, message:'작업 불가능'} ] } }
																], delay:4, countdown:false},
																{list_action:[
																	{ action:'SAVE', func:'review', func_option:this.funcs_option.review, description:'댓글 준비작업', save:{ pandoras:[{html:this.htmls.src_review, type:'TEXT'}, {status:'review_link'}], delay_position:50 } }
																], delay:3, countdown:false},
																{list_action:[
																	{ action:'GO', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 작업 url로 이동', go:{ url:this.urls.review_url, delay_position:50 } }
																], delay:10, countdown:false},
																{list_action:[
																	{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																], delay:3, countdown:false}
															]
														},
														catch : {
															list_step:[
																// 포함된 경우 -> 새로운 작업 시작
																{list_action:[
																	{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																], delay:2}
															]
														}
													} ]}
												],
												delay:this.intervals.work
											},
											catch : {
												list_step:[
													{list_action:[
														{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
													], delay:3}
												],
												countdown:false
											}
										} ]}
									]
								},
								catch : {
									list_step:[
										// screenFrame 이 있어서 작업을 할 수 없는 경우
										// id가 screenFrame인 frame태그의 src에 있는 곳으로 이동한다.
										{list_action:[ { action:'GO', description:'프레임 수정', go:{ url:this.urls.modified_frame, delay_position:20 } } ], delay:10, countdown:false}
									],
									countdown:false
								}
							} ]}
						]
					},
					// 댓글등록 작업하는 페이지
					{
						urls:{list:[this.urls.review_execution_page], condition:'AND'},
						htmls:{list:[this.htmls.box_formComment], condition:'AND'},
						list_step:[
							// 타겟된 유저가 나를 차단하지는 않았는지 확인하고 작업시작 여부 결정
							{list_action:[ { action:'TRYCATCH', 
								try:{
									list_step:[
										{list_action:[
											{ action:'CHECK', description:'서로이웃추가 작업 가능 여부 확인', check:{ htmls:[ {html:this.htmls.div_commentWriteWarningArea, exist:false, message:'작업 불가'} ] } }
										], delay:2, countdown:false},
										{list_action:[ { action:'TRYCATCH',
											// 스티커 댓글 작업 로직
											try:{
												list_step:[
													{list_action:[
														{ action:'CONDITION', condition:{ conditions:[{setting:'sticker_review_boolean'}, {basic:true}] } }
													], delay:5, countdown:false},
													// 반복문 start
													{list_action:[ { action:'TRYCATCH',
														try:{
															list_step:[
																{list_action:[
																	{ action:'CHECK', func:'review', description:'내 댓글 확인', check:{ htmls:[ {html:this.htmls.btn_review_delete, exist:false, message:'다음 작업페이지로 이동'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', click:{ html:this.htmls.btn_master_only, conditions:[{setting:'secret_review'}, {basic:true}] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'스티커댓글 클릭', click:{ html:this.htmls.btn_sticker_review } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'스티커댓글 종류선택', click:{ html:this.htmls.btn_sticker_category } }
																], delay:10},
																{list_action:[
																	{ action:'LOG_PUSH', func:'review', description:'로그 추가', log_push:true }
																], delay:10},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_count'} ] } }
																], delay:20},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_limit_count'} ] } }
																], delay:20},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'스티커 선택/ 댓글 등록', click:{ html:this.htmls.btn_sticker }, log_push:true }
																], delay:10}
															],
															delay:this.intervals.review
														},
														catch:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ 
																				{ action:'COMPARE', description:'이미 서로이웃 신청된 사람인지 체크', compare:{ type:'!in', pandoras:[{status:'target_user_name'}, {func_name:'neighborhood'}] } } 
																			], delay:2, countdown:false},
																			// 포함되지 않은 경우 -> 서로이웃추가 작업 url로 이동
																			{list_action:[
																				{ action:'NAVER_BLOG_SUBMIT', func_option:this.funcs_option.neighborhood, func:'neighborhood', description:'서로이웃추가 작업 url로 이동'}
																			], delay:2, countdown:false},
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		],
																	},
																	catch : {
																		list_step:[
																			// 포함된 경우 -> 새로운 작업 시작
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		]
																	}
																} ]}
															],
															countdown:false
														}
													} ]}
													// 반복문 end
												],
												countdown:false
											},
											// 일반 댓글 작업 로직
											catch:{
												list_step:[
													// 반복문 start
													{list_action:[ { action:'TRYCATCH',
														try:{
															list_step:[
																{list_action:[
																	{ action:'CHECK', func:'review', description:'내 댓글 확인', check:{ htmls:[ {html:this.htmls.btn_review_delete, exist:false, message:'다음 작업페이지로 이동'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', click:{ html:this.htmls.btn_master_only, conditions:[{setting:'secret_review'}, {basic:true}] } }
																], delay:10},
																{list_action:[
																	{ action:'INPUT', func:'review', description:'댓글 입력', input:{ html:this.htmls.input_review, texts:[this.texts.review] } }
																], delay:10},
																{list_action:[
																	{ action:'LOG_PUSH', func:'review', description:'로그 추가', log_push:true }
																], delay:10},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_count'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_limit_count'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'댓글 등록', click:{ html:this.htmls.btn_review_submit } }
																], delay:10}
															],
															delay:this.intervals.review
														},
														catch:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ 
																				{ action:'COMPARE', description:'이미 서로이웃 신청된 사람인지 체크', compare:{ type:'!in', pandoras:[{status:'target_user_name'}, {func_name:'neighborhood'}] } } 
																			], delay:2, countdown:false},
																			// 포함되지 않은 경우 -> 서로이웃추가 작업 url로 이동
																			{list_action:[
																				{ action:'NAVER_BLOG_SUBMIT', func_option:this.funcs_option.neighborhood, func:'neighborhood', description:'서로이웃추가 작업 url로 이동'}
																			], delay:2, countdown:false},
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		],
																	},
																	catch : {
																		list_step:[
																			// 포함된 경우 -> 새로운 작업 시작
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		]
																	}
																} ]}
															],
															countdown:false
														}
													} ]}
													// 반복문 end
												],
												countdown:false
											}
										} ]}
									],
									countdown:false
								},
								catch:{
									list_step:[
										{list_action:[
											{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
										], delay:2, countdown:false}
									],
									countdown:false
								}
							} ]}
						],
						delay:this.intervals.review
					},
					// 서로이웃추가 작업하는 페이지
					{
						urls:{list:[this.urls.neighborhood_url], condition:'AND'},
						htmls:{list:[this.htmls.box_neighborhood], condition:'AND'},
						list_step:[
							{list_action:[ { action:'TRYCATCH',
								try:{
									list_step:[
										// 작업할 계정이 서이추를 허용해놨는지 확인
										{list_action:[ 
											{ action:'CHECK', func:'neighborhood', description:'서로이웃추가 가능 여부 검사', check:{ htmls:[ {html:this.htmls.box_neighborhood_together_disable, exist:false, message:'서로이웃추가 불가/ 새로운 작업 시작'} ] } } 
										], delay:10},
										// 서이추 가능할 경우
										{list_action:[
											{ action:'CLICK', func:'neighborhood', description:'서로이웃 클릭', click:{ html:this.htmls.box_select_neighborhood_together } }
										], delay:30},
										{list_action:[
											{ action:'CLICK', func:'neighborhood', description:'서로이웃 신청', click:{ html:this.htmls.neighborhood_together_execute } }
										], delay:30}
									],
									delay:this.intervals.neighborhood
								},
								catch:{
									list_step:[
										// 서이추 불가능할 경우
										{list_action:[
											{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
										], delay:2}
									],
									countdown:false
								}
							} ]}
						],
						delay:this.intervals.neighborhood,
						next_page_index:0
					},
					{
						urls:{list:[this.urls.neighborhood_second_url], condition:'AND'},
						htmls:{list:[this.htmls.neighborhood_together_confirm], condition:'AND'},
						list_step:[
							{list_action:[
								{ action:'LOG_PUSH', func:'neighborhood', description:'로그 추가', log_push:true }
							], delay:12},
							{list_action:[
								{ action:'STATUS', status:{ statuses:[ {increase:'neighborhood_count'} ] } }
							], delay:12},
							{list_action:[
								{ action:'STATUS', status:{ statuses:[ {increase:'neighborhood_limit_count'} ] } }
							], delay:12},
							{list_action:[
								{ action:'STATUS', status:{ statuses:[ {increase:'count'} ] } }
							], delay:12},
							{list_action:[
								{ action:'CHANGE', func:'neighborhood', description:'서로이웃 신청 메시지 리셋', change:{ html:this.htmls.input_neighborhood_apply, innerHTMLs:{ all:'  ' } } }
							], delay:10},
							{list_action:[
								{ action:'INPUT', func:'neighborhood', description:'서로이웃 신청 메시지 작성', input:{ html:this.htmls.input_neighborhood_apply, texts:[this.texts.friend_messages] } }
							], delay:20},
							{list_action:[
								{ action:'CLICK', func:'neighborhood', description:'서로이웃 신청 완료', click:{ html:this.htmls.neighborhood_together_confirm } }
							], delay:20}
						],
						delay:this.intervals.neighborhood
					},
					{
						urls:{list:[this.urls.neighborhood_second_url], condition:'AND'},
						htmls:{list:[this.htmls.btn_admin_neighborhood_together], condition:'AND'},
						list_step:[
							{list_action:[
								{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
							], delay:20}
						],
						delay:10
					}
				],
				stop:[]
			};
		});

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('blogrammerCommunicationService', function($q, $rootScope, arrayService, numberService, grammerSetService){
			this.grammer_key = 'blogrammer';
			this.version_key = 'communication';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['gnb_mail_address']},
					properties:{list:['href']},
					split:{ html:'innerHTML', params:[null, '@naver.com'] },
					check_once: true
				},
				box_view_all:{ tag:'a',
					classes:{list:['plist', 'pcol2', 'hand', '_toggleTopList', 'itemSubjectBoldfont', '_returnFalse']},
					properties:{list:['href', 'tabindex']},
					innerOuterHTMLs:{list:['전체보기']}
				},
				box_user_tit:{ tag:'a',
					parent_html:{ tag:'p',
						parent_html:{ tag:'div', classes:{list:['user_tit']} }
					},
					properties:{list:['href="http://blog.naver.com/MyBlog.nhn"']}
				},
				btn_review_open:{ tag:'a',
					classes:{list:['pcol2', '_cmtList', '_returnFalse']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['댓글']}
				},
				src_review:{ tag:'iframe',
					properties:{list:['allowtransparency="true"', 'src']},
					correspondings:{
						value:[
							{criteria:'src', contain:'CommentList.nhn'}
						],
						condition:'OR'
					},
					split:{ attr:'src', params:[null, null] }
				},
				box_textarea_at_review_page:{ tag:'textarea',
					classes:{list:['textarea', '_activeId', '_commentRosText']},
					properties:{list:['cols', 'rows', 'id="commentTextArea"']}
				},
				box_review:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['cmlist']},
						properties:{list:['id="commentList"']}
					},
					classes:{list:['_countableComment']},
					not_classes:{list:['reply']}
				},
				box_already_reply_check:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['cmlist']},
						properties:{list:['id="commentList"']}
					},
					classes:{list:['reply', '_countableComment']},
					status_index:'review_index'
				},
				box_review_reply:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['cmlist']},
						properties:{list:['id="commentList"']}
					},
					classes:{list:['reply', 'insert']},
					innerOuterHTMLs:{list:['비밀 답글']}
				},
				btn_review_reply:{ tag:'a',
					classes:{list:['_btnReplyForm', '_rosRestrict', '_commentRosButton', '_returnFalse', 'pcol2']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['답글']}
				},
				input_review:{ tag:'textarea',
					classes:{list:['textarea','nolog_t','pcol2','_activeId']},
					properties:{list:['name="comment.contents"', 'maxlength="6000"']}
				},
				btn_review_submit:{ tag:'input',
					classes:{list:['_btnComment', 'btn_r', '_activeId']},
					properties:{list:['type="image"', 'src', 'alt="답글입력"']}
				}
			};

			// Url Section
			this.urls = {
				work_first:{ basic:'blog.naver.com', changing:false },
				// 댓글목록 수와 url목록을 가져올 수 있도록 하는 페이지
				work:{ basic:'http://blog.naver.com', extra:{list:[ '/PostList.nhn?blogId=', { grammer_key:'blogrammer', version_key:'communication', status:'identification', no_encode:true }, '&categoryNo=0&currentPage=', { status:'communication_current_page', grammer_key:'blogrammer', version_key:'communication', no_encode:true } ]} },
				// 댓글작업을 할 수 있도록 하는 페이지
				work_review:{ basic:'http://blog.naver.com', extra:{list:[ { grammer_key:'blogrammer', version_key:'communication', status:'review_urls_at_page', status_index:'review_work_index' } ]}, changing:false },
				work_review_check:{ basic:'http://blog.naver.com/CommentList.nhn', changing:false }
			};

			// Interval Section
			this.intervals = {
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
			};

			// Page Section
			this.pages = {
				start:[
					// page_index : 0
					{
						urls : {list:[this.urls.work_first], condition:'AND'},
						htmls : {list:[this.htmls.box_user_tit], condition:'AND'},
						list_step : [
							// 초기화
							{list_action:[
								{ action:'STATUS', description:'초기화', status:{ set:'communication_current_page', value:1 } }
							], delay:3, countdown:false}
						]
					},
					// page_index : 1
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.box_view_all], condition:'AND'},
						list_step : [
							{list_action:[
								{ action:'CLICK', description:'모든 댓글 목록 클릭', click:{ html:this.htmls.btn_review_open, multiple:true } }
							], delay:3, countdown:false},
							{list_action:[
								{ action:'STATUS', description:'댓글 작업 초기화', status:{ set:'review_work_index', value:0 } }
							], delay:3, countdown:false},
							{list_action:[
								{ action:'SAVE', description:'작업할 댓글 url 목록 저장', save:{ pandoras:[{html:this.htmls.src_review, type:'TEXT', isArray:true}, {status:'review_urls_at_page'}] } },
								{ action:'SAVE', description:'작업할 댓글 url 목록 수 저장', save:{ pandoras:[{html:this.htmls.src_review, type:'COUNT'}, {status:'review_urls_total'}] } }
							], delay:6, countdown:false},
							{list_action:[
								{ action:'STATUS', func:'review', description:'초기화', status:{ set:'review_index', value:0 } }
							], delay:2, countdown:false},
							{list_action:[
								{ action:'GO', description:'댓글 작업 페이지로 이동', go:{ url:this.urls.work_review, delay_position:100 } }
							], delay:3, countdown:false}
						]
					},
					// page_index : 2
					// 댓글페이지에 가서 루프 돌리는 로직
					{
						urls : {list:[this.urls.work_review], condition:'AND'},
						htmls : {list:[this.htmls.box_textarea_at_review_page], condition:'AND'},
						list_step : [
							{list_action:[ { action:'TRYCATCH',
								try : {
									list_step:[
										{list_action:[
											{ action:'CHECK', func:'review', description:'댓글 유무 검사', check:{ htmls:[ {html:this.htmls.box_review, exist:true, message:'댓글 없음/대댓글 작업 불가능'} ] } }
										], delay:2, countdown:false},
										{list_action:[
											{ action:'SAVE', func:'review', description:'작업할 댓글 수 갱신', save:{ pandoras:[{html:this.htmls.box_review, type:'COUNT'}, {status:'review_total'}] } }
										], delay:2, countdown:false},
										{list_action:[ { action:'TRYCATCH',
											try : {
												list_step:[
													{list_action:[ 
														{ action:'TARGET', func:'review', description:'댓글 타겟 설정', target:{ html:this.htmls.box_review, index:{status:'review_index', type:'NUMBER'}, set:true, scroll:{value:true}, body:true } } 
													], delay:2, countdown:false},
													{list_action:[
														{ action:'CHECK', func:'review', description:'답글 버튼 유무 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_review_reply, exist:true, message:'답글 버튼 없음' } ] } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'CHECK', func:'review', description:'사전 작업 여부 검사', check:{ htmls:[ { html:this.htmls.box_already_reply_check, exist:false, message:'이미 대댓글 작업함' } ] } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'CLICK', func:'review', description:'답글 버튼 클릭', click:{ target:true, html:this.htmls.btn_review_reply } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'TARGET', func:'review', description:'타겟팅 해제', target:{ set:false } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'TARGET', func:'review', description:'답글 ui 타겟 설정', target:{ html:this.htmls.box_review_reply, index:{ basic:0 }, set:true, scroll:{value:true}, body:true } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'INPUT', func:'review', description:'댓글 입력', input:{ target:true, html:this.htmls.input_review, texts:[this.texts.review] }, message:'Tip : 5개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' }
													], delay:2, countdown:false},
													// start
													// 댓글이 등록될 경우에 아래 catch와 finally를 작업하지 못한다.
													// 그러므로 아래 로직은 댓글 등록을 할 경우에 필요한 status 작업이라 생각하면 된다.
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'review_index'} ] } }
													], delay:1, countdown:false},
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'count'} ] } }
													], delay:1, countdown:false},
													// end
													{list_action:[
														{ action:'CLICK', func:'review', description:'댓글 등록', click:{ target:true, html:this.htmls.btn_review_submit }, log_push:true, statuses:[{increase:'review_count'}] }
													], delay:5}
												],
												countdown:false
											},
											// 다음 사람에게 타겟팅한다.
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'review', message:{ text:'답글 버튼 없음/ 이미 대댓글 작업함', delay_position:0 } } ], delay:2, countdown:false}
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ 
														{ action:'TARGET', func:'review', description:'타겟팅 해제', target:{ set:false } } 
													], delay:2, countdown:false},
													// start
													// catch에 걸려서 여기까지 오게 된 경우에 필요한 status 작업이라 생각하면 된다.
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'review_index'} ] } }
													], delay:1, countdown:false},
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'count'} ] } }
													], delay:1, countdown:false},
													// end
													{list_action:[ { action:'TRYCATCH',
													 	try:{
													 		list_step:[
													 			{list_action:[ 
													 				{ action:'COMPARE', description:'댓글작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'review_index', type:'NUMBER'}, {status:'review_total', type:'NUMBER'}] } } 
													 			], delay:2, countdown:false},
													 			// 한 페이지 내 댓글작업 끝났을 경우 
													 			{list_action:[
																	{ action:'STATUS', func:'review', description:'초기화', status:{ set:'review_index', value:0 } }
																], delay:2, countdown:false},
												 				{list_action:[
												 					{ action:'STATUS', status:{ statuses:[ {increase:'review_work_index'} ] } }
												 				], delay:2, countdown:false},
												 				{list_action:[ { action:'TRYCATCH', 
												 					try:{
												 						list_step:[
												 							{list_action:[
												 								{ action:'COMPARE', description:'current_page 내 작업 상황 확인', compare:{ type:'>=', pandoras:[{status:'review_work_index', type:'NUMBER'}, {status:'review_urls_total', type:'NUMBER'}] } }
												 							], delay:2, countdown:false},
												 							// current_page내 댓글작업 끝났을 경우
												 							// communication_current_page를 늘리고 다음페이지로 넘어간다.
												 							{list_action:[
												 								{ action:'STATUS', status:{ statuses:[ {increase:'communication_current_page'} ] } }
												 							], delay:2, countdown:false},
												 							{list_action:[
												 								{ action:'GO_PAGE', go_page:{ page_index:1 } }
												 							], delay:2, countdown:false}
												 						],
												 						countdown:false
												 					},
												 					catch:{
												 						list_step:[
												 							// current_page내 댓글작업 끝나지 않았을 경우
															 				{list_action:[
															 					{ action:'GO', description:'다음 댓글 작업 페이지로 이동', go:{ url:this.urls.work_review, delay_position:20 } }
															 				], delay:10, countdown:false}
												 						],
												 						countdown:false
												 					}
												 				} ]}
													 		],
													 		countdown:false
													 	},
													 	catch:{
													 		list_step:[
													 			// 한 페이지 내 댓글작업 끝나지 않았을 경우
													 			{list_action:[
													 				{ action:'GO_PAGE', go_page:{ page_index:2 } }
													 			], delay:2, countdown:false}
													 		],
													 		countdown:false
													 	}
													} ]}
												],
												countdown:false
											}
										} ]}
									],
									countdown:false
								},
								catch : {
									list_step:[
										{list_action:[
						 					{ action:'STATUS', status:{ statuses:[ {increase:'review_work_index'} ] } }
						 				], delay:2, countdown:false},
						 				{list_action:[ { action:'TRYCATCH', 
						 					try:{
						 						list_step:[
						 							{list_action:[
						 								{ action:'COMPARE', description:'current_page 내 작업 상황 확인', compare:{ type:'>=', pandoras:[{status:'review_work_index', type:'NUMBER'}, {status:'review_urls_total', type:'NUMBER'}] } }
						 							], delay:2, countdown:false},
						 							// current_page내 댓글작업 끝났을 경우
						 							{list_action:[
						 								{ action:'STATUS', status:{ statuses:[ {increase:'communication_current_page'} ] } }
						 							], delay:2, countdown:false},
						 							{list_action:[
						 								{ action:'GO_PAGE', go_page:{ page_index:1 } }
						 							], delay:2, countdown:false}
						 						],
						 						countdown:false
						 					},
						 					catch:{
						 						list_step:[
						 							// current_page내 댓글작업 끝나지 않았을 경우
									 				{list_action:[
									 					{ action:'GO', description:'다음 댓글 작업 페이지로 이동', go:{ url:this.urls.work_review, delay_position:20 } }
									 				], delay:10, countdown:false}
						 						],
						 						countdown:false
						 					}
						 				} ]}
									],
									countdown:false
								}
							} ]}

						]
					}
				],
				stop:[]
			};
		});


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerCompetitionService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'competition';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval = numberService.getRandomOfNumber(this.getSetting('setting_name_en'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerNewfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'newfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					// 핸드폰 번호가 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_2s25']},
						split:{ attr:'href', params:[] }
					},
					// 이메일이 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_5yf', '_4qx2']},
						split:{ attr:'href', params:[] }
					}
				],
				btn_page:{ tag:'div',
					classes:{list:['_4xjz']},
					innerOuterHTMLs:{list:['페이지']}
				},
				btn_page_two:{ tag:'div',
					classes:{list:['linkWrap', 'noCount']},
					innerOuterHTMLs:{list:['페이지']}
				},
				btn_profile:{ tag:'a',
					classes:{list:['_5pb8', '_8o', '_8s', 'lfloat', '_ohe']},
					properties:{list:['data-ft', 'data-hovercard']},
					href:'https://www.facebook.com/',
					split:{ attr:'href', params:[] },
					correspondings:{
						value:[
							{critetia:'data-hovercard', contain:'/ajax/hovercard/user.php'}
						],
						condition:'AND'
					}
				},
				page_list:{ tag:'a',
					classes:{list:['_2ial', '_8o', '_8s', 'lfloat', '_ohe']},
					properties:{list:['href', 'aria-hidden="true"', 'data-testid']},
					href:'https://www.facebook.com',
					split:{ attr:'href', params:[] }
				},
				btn_page_bulletin: [
					{ tag:'a',
						parent_html:{ tag:'div', classes:{list:['_2yaa']}, not_classes:{list:['_2yap']} },
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					},
					{ tag:'a',
						classes:{list:['_3f-h']},
						not_classes:{list:['_3f-i']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					}
				],
				btn_page_bulletin_clicked: [
					{ tag:'a',
						parent_html:{ tag:'div', classes:{list:['_2yaa', '_2yap']} },
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					},
					{ tag:'a',
						classes:{list:['_3f-h', '_3f-i']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					}
				],
				box_page_bulletin:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['_2uor', '_1qkq', '_1qkx']} },
					classes:{list:['_4-u2', 'mbm', '_5jmm', '_5pat', '_5v3q', '_4-u8']}
				},
				div_review_like_list: { tag:'div',
					parent_html:{ tag:'div', classes:{list:['_ipp']} },
					classes:{list:['_3t53', '_4ar-', '_ipn']}
				},
				tab_liking:{ tag:'a',
					classes:{list:['_2x4v']},
					properties:{list:['rel="ignore"']}
				},
				feel_sympathy_number: { tag:'span',
					properties:{list:['aria-label', 'style="color: rgb(88, 144, 255);"']},
					split:{ attr:'aria-label', params:['해당사항 없음', '명이'] }
				},
				box_user_like_scroll:{ tag:'div', 
					parent_html:{ tag:'div', 
						classes:{list:['_4-i2', '_50f4']} 
					},
					classes:{list:['uiScrollableAreaWrap', 'scrollable']}, 
					properties:{list:['aria-label="스크롤 가능한 부분"', 'role="group"', 'tabindex="0"']}
				},
				btn_like_more: { tag:'a',
					classes:{list:['pam', 'uiBoxLightblue', 'uiMorePagerPrimary']},
					not_properties:{list:['ajaxify']},
					innerOuterHTMLs:{list:['더 보기']}
				},
				box_user_like:{ tag:'li',
					classes:{list:['_5i_q']}
				},
				btn_friend_add:{ tag:'button',
					classes:{list:['_42ft', '_4jy0', 'FriendRequestAdd', 'addButton', '_4jy3', '_517h', '_51sy']},
					not_classes:{list:['hidden_elem']},
					innerOuterHTMLs:{list:['추가', '친구']}
				},
				btn_tab_liking_close: { tag:'a',
					classes:{list:['_42ft', '_5upp', '_50zy', 'layerCancel', '_1f6', '_51-t', '_50-0', '_50z-']},
					innerOuterHTMLs:{list:['닫기']}
				},
				div_spam_page_name: { tag:'a',
					classes:{list:['_2wma']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				btn_confirm_friend: { tag:'button',
					classes:{list:['_42ft', '_4jy0', 'layerConfirm', 'uiOverlayButton', '_4jy3', '_4jy1', 'selected', '_51sy']},
					innerOuterHTMLs:{list:['확인']}
				},
				btn_close_friend: { tag:'a',
					classes:{list:['_42ft', '_42fu', 'layerCancel', 'autofocus', 'uiOverlayButton', 'selected', '_42g-', '_42gy']},
					innerOuterHTMLs:{list:['닫기']}
				},
				btn_close_friend2: { tag:'a',
					classes:{list:['autofocus', 'layerCancel', '_4jy0', '_4jy3', '_4jy1', '_51sy', 'selected', '_42ft']},
					innerOuterHTMLs:{list:['닫기']}
				},
				div_scroll_parent: { tag:'div',
					classes:{list:['uiScrollableAreaWrap', 'scrollable']},
					propreties:{list:['aria-label="스크롤 가능한 부분"', 'role="group"', 'tabindex="0"']}
				},
				div_no_result: { tag:'div',
					classes:{list:['_43zq', '_50f3', '_5kx5']},
					innerOuterHTMLs:{list:['사람이나 게시물을 찾으세요? 이름, 장소 혹은 다른 단어를 입력해보세요.']}
				}
			};

			// Url Section
			this.urls = {
				basic:{ basic:'https://www.facebook.com', extra:{list:[]}, changing:false },
				page_basic:{ basic:'https://www.facebook.com/pg/', extra:{list:[]}, changing:false },
				search_page:{ basic:'https://www.facebook.com/search/pages/?q=', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }] ]}, changing:false },
				page_list:{ basic:'', extra:{ list:[ { html:this.htmls.page_list, random:true } ] }, changing:false },
				page_bulletin_btn:{ basic:'https://www.facebook.com/', extra:{list:[ {html:this.htmls.btn_page_bulletin} ] }, changing:false }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:80 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:80 }
			};

			// Func Section
			this.funcs_option = {
				friend_add:{ click:{ click_key:'friend_add' }, percentage:100, boolean:{ click_key:'friend_add', setting_value:100 } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search_page], condition:'AND'},
						htmls : {list:[this.htmls.btn_page, this.htmls.btn_page_two], condition:'OR'},
						list_step : [
							{list_action:[ { action:'CHECK', description:'검색결과 있는지 체크', check:{ htmls:[ {html:this.htmls.div_no_result, exist:false, message:'검색결과 없음'} ] } } ], delay:10},
							{list_action:[ { action:'SCROLL', description:'페이지 검색', scroll:{ interval:5 } } ], delay:80},
							{list_action:[ { action:'GO', description:'페이지 선택', go:{ url:this.urls.page_list, delay_position:90 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.basic], condition:'AND'},
						htmls : {list:[this.htmls.btn_page_bulletin], condition:'AND'},
						list_step : [
							{list_action:[ { action:'TRYCATCH', func:'stopstart', 
								try : {
									list_step:[
										{list_action:[ { action:'CHECK', func:'stopstart', description:'페이지 이름 검사', check:{ htmls:[ { html:this.htmls.div_spam_page_name, exist:false, message:'작업 제외 : 페이지 이름에 스팸목록 포함' } ] } } ], delay: 2, countdown:false }
									]
								},
								catch : {
									list_step:[
										{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'작업 제외 : 페이지 이름에 스팸목록 포함', delay_position:0 } } ], delay:3, countdown:false}
									]
								}
							} ]},
							{list_action:[ { action:'GO', description:'게시글버튼 클릭', go:{ url:this.urls.page_bulletin_btn } } ], delay:4}
						],
						delay:10
					},
					{
						urls : {list:[this.urls.page_basic], condition:'AND'},
						htmls : {list:[this.htmls.btn_page_bulletin_clicked], condition:'AND'},
						list_step : [
							{list_action:[ { action:'SCROLL', description:'게시글 검색', scroll:{ interval:5, body:true, comparison:{ type: '>=', pandoras: [ {html:this.htmls.box_page_bulletin, type:'COUNT'}, {basic:'전체 게시글 수'} ], message:'페이지 게시글 검색', count_limit:{ setting_key:'page_list_search_limit' }, count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'STATUS', description:'초기화', status:{ set:'bulletin_index', value:0 } } ], delay:3},
							{list_action:[ { action:'SAVE', description:'작업할 게시글 수 갱신', save:{ pandoras:[{html:this.htmls.box_page_bulletin, type:'COUNT'}, {status:'bulletin_total'}] } } ], delay:3},
							{list_action:[ { action:'LOOP', description:'페이지 작업 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', description:'게시글 타겟 설정', target:{ html:this.htmls.box_page_bulletin, index:{status:'bulletin_index', type:'NUMBER'}, set:true, scroll:{ value:true }, body:true } } ], delay:2},
										{list_action:[ { action:'TRYCATCH', func:'friend_add',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'friend_add', check:{ htmls:[ { target:true, html:this.htmls.div_review_like_list, exist:true, message:'친구추가작업 제외 : 공감 한 사람 없음' } ] } } ], delay: 2, countdown:false },
													{list_action:[ { action:'STATUS', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가 작업 초기화', status:{ set:'friend_index', value:0 } } ], delay: 3, countdown:false},
													{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 리스트 팝업 열기', click:{ target:true, html:this.htmls.tab_liking, delay_position:0 } } ], delay:15, countdown:false},
													{list_action:[ { action:'SAVE', func:'friend_add', func_option:this.funcs_option.friend_add, description:'총 공감 수 저장', save:{ pandoras:[{html:this.htmls.feel_sympathy_number, type:'NUMBER'}, {status:'sympathy_total'}], delay_position:50 } } ], delay:2, countdonw:false },
													{list_action:[ { action:'SCROLL', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 리스트 검색', scroll:{ body:false, html:this.htmls.box_user_like_scroll, interval:4, click:{ html:this.htmls.btn_like_more }, comparison:{ type:'infinite', pandoras:[ {html:this.htmls.box_user_like, type:'COUNT'}, {status:'sympathy_total'} ], message:'공감한 리스트 검색', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ]},
													{list_action:[ { action:'LOOP', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가 작업 반복', 
														loop:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 사람 타겟팅', target:{ body:false, html:this.htmls.box_user_like, index:{status:'friend_index', type:'NUMBER'}, set:true, scroll:{ value:true, parent_html:this.htmls.div_scroll_parent } } } ], delay:2, countdown:false},
																			{list_action:[ { action:'CHECK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_friend_add, exist:true, message:'친구추가 버튼 없음' } ] } } ], delay:2, countdown:false},
																			{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가', click:{ target:true, html:this.htmls.btn_friend_add } } ], delay: 5, countdown:false, statuses:[{increase:'friend_count'}]},
																			{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, click:{ html:this.htmls.btn_confirm_friend } } ], delay: 3, countdown:false},
																			{list_action:[ { action:'CLICK', func:'frined_add', func_option:this.funcs_option.friend_add, click:{ html:this.htmls.btn_close_friend } } ], delay:3, countdown:false},
																			{list_action:[ { action:'CLICK', func:'frined_add', func_option:this.funcs_option.friend_add, click:{ html:this.htmls.btn_close_friend2 } } ], delay:3, countdown:false}
																		],
																		countdown:false
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'MESSEAGE', func:'friend_add', message:{ text:'친구추가 버튼 없음', delay_position:0 } } ], delay:2, countdown:false }
																		],
																		countdown:false
																	},
																	finally : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'friend_add', description:'사람 타겟팅 해제', target:{ set:false } } ], delay:2, countdown:false},
																			{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'friend_index'} ] } } ], delay:2, countdown:false}
																		],
																		countdown:false
																	}
																} ]}
															],
															delay: this.intervals.work,
															comparison:{ type:'>=', pandoras:[{status:'friend_index', type:'NUMBER'}, {status:'sympathy_total'}], message:'친구추가 작업' }
														}
													} ]},
													{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 리스트 팝업 닫기', click:{ html:this.htmls.btn_tab_liking_close } } ], delay:2, countdown:false}
												]
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'friend_add', message:{ text:'친구추가 작업 제외 : 공감한 사람 없음', delay_position:0 } } ], delay:3, countdown:false}
												]
											}
										} ]},
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'}, {increase:'bulletin_index'} ] } } ], countdown:false},
										{list_action:[ { action:'TARGET', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{ type:'>=', pandoras:[{status:'bulletin_index', type:'NUMBER'}, {status:'bulletin_total'}], message:'친구추가 작업' }
								}
							} ]}
						]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerNewsfeedService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'newsfeed';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval = numberService.getRandomOfNumber(this.getSetting('interval_work'), 50);
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['_2s25']},
					properties:{list:['accesskey', 'data-gt', 'href']},
					split:{ attr:'href', params:[] }
				},
				btn_newsfeed:{ tag:'div',
					classes:{list:['linkWrap', 'noCount']},
					properties:{list:['dir="ltr"']},
					innerOuterHTMLs:{list:['뉴스피드']}
				},
				div_newsfeed:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['_5jmm', '_5pat', '_3lb4', 'x_3-ucv_ev6']} },
					classes:{list:['_3ccb']}
				},
				// div_newsfeed:{ tag:'div',
				// 	classes:{list:['_5jmm', '_5pat', '_3lb4', 'x_3-ucv_ev6']},
				// 	properties:{list:['data-fte="1"', 'data-ftr="1"']}
				// },
				div_not_newsfeed:{ tag:'ul',
					classes:{list:['uiList', 'uiCollapsedList', 'uiCollapsedListHidden', '_5pbz', '_5va0', '_4kg']}
				},
				btn_like_do:{ tag:'a',
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k']},
					not_classes:{list:['UFILinkBright']},
					properties:{list:['aria-pressed="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_like_did:{ tag:'a',
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k']},
					properties:{list:['aria-pressed="true"', 'UFILinkBright']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_view_more:{ tag:'a',
					classes:{list:['_5usd']},
					properties:{list:['role="button"']},
					innerOuterHTMLs:{list:['소식 더 보기']}
				}
			};

			this.urls = {
				url_search:{ basic:'https://www.facebook.com', extra:{list:[]}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				// this.getSetting(setting_key) 함수는 해당 version의 settings중 setting_key에 해당하는 setting_value의 value값을 가져오는 함수이다.
				like:{ click:this.getClick('like'), percentage:100, boolean:grammerGetService.getBooleanFromBooleanAndPercentage(this.getClick('like'),100) },
				review:{ click:this.getClick('review'), percentage:this.getSetting('percentage_review'), each:true }
			};

			this.pages = {
				start:[
					{
						urls: {list:[this.urls.url_search], condition:'AND'},
						htmls: {list:[this.htmls.btn_newsfeed], condition:'AND'},
						list_step:[
							// newsfeed_index는 타겟을 순차적으로 설정하기 위한 도구이다.
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'newsfeed_index', value:0, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'newsfeed_total', value:0, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'LOOP', func:'stopstart', description:'뉴스피드 작업 반복',
								loop:{
									list_step: [
										{list_action:[ { action:'SCROLL', description:'뉴스피드 검색', scroll:{ interval:5 } } ], delay:20},
										{list_action:[ { action:'TARGET', func:'like', description:'타겟 설정', target:{ html:this.htmls.div_newsfeed, index:{status:'newsfeed_index', type:'NUMBER'}, set:true, scroll:{ value:true, html:this.htmls.btn_view_more }, sort:true } } ], delay: 5, countdown: false },
										{list_action:[ { action:'TRYCATCH', func:'like',
											try: {
												list_step:[
													{list_action:[ 
														{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, { target:true, html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음' } ] } },
														{ action:'CHECK', func:'stopstart', description:'뉴스피드 검사', check:{ htmls:[ { target:true, html:this.htmls.div_not_newsfeed, exist:false, message:'뉴스피드 게시글 아님' } ] } }
													], delay:5, countdown: false },
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'좋아요 예정', delay_position:0 } } ], delay: 2, countdown: false },
													{list_action:[ { action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ target:true, html:this.htmls.btn_like_do } } ], statuses:[{increase:'like_count'}], delay: 10, countdown: false }
													
													// {list_action:[ { action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ target:true, html:this.htmls.btn_like_do, index:{status:'count', type:'NUMBER'} } } ], statuses:[{increase:'like_count'}], delay: 10, countdown: false }
													// {list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:2, countdown: false },
													// {list_action:[
													// 	{ action:'POST', func:'review', func_option:this.funcs_option.review, description:'댓글 등록',
													// 		post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', statuses:[{increase:'review_count'}]
													// 	}
													// ], delay:5, countdown: false }
												],
												countdown: false
											},
											catch: {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'뉴스피드작업 제외 : 이미 좋아요 한 게시글 or 뉴스피드 게시글 아님', delay_position:0 } } ], delay: 2, countdown: false },
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay: 2, countdown: false }
												],
												countdown: false
											}
										} ] },
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'newsfeed_index'} ] } } ], delay: 2, countdown: false },
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay: 2, countdown: false },
										{list_action:[ { action:'TARGET', func:'like', description:'타겟 해제', target:{ set:false } } ], delay: 5, countdown: false }
									],
									delay:this.intervals.work,
									comparison:{ type:'infinite', pandoras:[{status:'newsfeed_index', type:'NUMBER'}, {status:'newsfeed_total', type:'NUMBER'}], message:'뉴스피드' }
								} }
							], statuses:[{increase:'count'}], stop:true }
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerPageService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'page';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			// Html Section
			this.htmls = {
				identification:[
					// 핸드폰 번호가 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_2s25']},
						split:{ attr:'href', params:[] }
					},
					// 이메일이 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_5yf', '_4qx2']},
						split:{ attr:'href', params:[] }
					},
					{ tag:'a',
						classes:{list:['_2wmb']},
						properties:{list:['href', 'data-hover', 'data-tooltip-content']},
						split:{ html:'innerHTML', params:['@',null] }
					}
				],
				page_list_section:{ tag:'div',
					classes:{list:['_4ciy']},
					innerOuterHTMLs:{list:['페이지']}
				},
				page_list_element:{ tag:'li',
					parent_html:{ tag:'ul', classes:{list:['_bui', 'nonDroppableNav', '_3-96']}, not_properties:{list:['data-ft']} },
					classes:{list:['clearfix', 'sideNavItem', 'stat_elem']}
				},
				page_url:{ tag:'a',
					parent_html:{ tag:'li', 
						parent_html:{ tag:'ul', classes:{list:['_bui', 'nonDroppableNav', '_3-96']}, not_properties:{list:['data-ft']} }, 
						classes:{list:['clearfix', 'sideNavItem', 'stat_elem']} },
					classes:{list:['_5afe']},
					split:{ attr:'href', params:['https://www.facebook.com/'] }
				},
				page_tab:[
					{ tag:'li',
						classes:{list:['_5vwz', '_5vwy', '_45hc', '_1hqh']},
						split:{ attr:'href', params:[] }
					},
					{ tag:'li',
						classes:{list:['_ju-', '_5vwz', '_5vwy', '_45hc', '_1hqh']},
						split:{ attr:'href', params:[] }
					}
				],
				box_page_bulletin:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['_2uor', '_1qkq', '_1qkx']} },
					classes:{list:['_4-u2', 'mbm', '_5jmm', '_5pat', '_5v3q', '_4-u8']}
				},
				tab_liking:{ tag:'a',
					classes:{list:['_2x4v']},
					properties:{list:['rel="ignore"']}
				},
				box_user_like_scroll:{ tag:'div',
					parent_html:{ tag:'div', 
						parent_html:{ tag:'div', classes:{list:['_4-i2', '_50f4']} },
						classes:{list:['uiScrollableAreaWrap', 'scrollable']}, 
						properties:{list:['aria-label="스크롤 가능한 부분"', 'role="group"', 'tabindex="0"']} 
					},
					classes:{list:['uiScrollableAreaBody']},
					properties:{list:['style="width:445px;"']}
				},
				box_my_friend_scroll:{ tag:'div',
					classes:{list:['fbProfileBrowserResult', 'scrollable', 'threeColumns', 'hideSummary']}
				},
				box_user_like:{ tag:'li',
					classes:{list:['_5i_q']}
				},
				box_my_friend_list:{ tag:'li',
					classes:{list:['fbProfileBrowserListItem', '_1sn']}
				},
				feel_sympathy_number: { tag:'span',
					properties:{list:['aria-label', 'style="color: rgb(88, 144, 255);"']},
					split:{ attr:'aria-label', params:['해당사항 없음', '명이'] }
				},
				btn_like_more: { tag:'a',
					classes:{list:['pam', 'uiBoxLightblue', 'uiMorePagerPrimary']},
					innerOuterHTMLs:{list:['더 보기']}
				},
				btn_bulletin_like_do: { tag:'a',	
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k']},
					properties:{list:['aria-pressed="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_bulletin_like_did: { tag:'a',
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k', 'UFILinkBright']},
					properties:{list:['aria-pressed="true"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_invite_do: { tag:'a',
					classes:{list:['_42ft', '_4jy0', '_4jy3', '_517h', '_51sy']},
					innerOuterHTMLs:{list:['초대']}
				},
				btn_review_list: { tag:'a',
					classes:{list:['_p']},
					innerOuterHTMLs:{list:['작성된 순서']}
				},
				btn_review_like_do: { tag:'a',
					classes:{list:['UFILikeLink']},
					properties:{list:['title="좋아요"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_review_more: { tag:'a',
					classes:{list:['UFIPagerLink']},
					innerOuterHTMLs:{list:['더 보기']}
				},
				div_review_element: { tag:'div',
					classes:{list:['UFIRow', 'UFIComment', '_4oep']},
					properties:{list:['role="article"']}
				},
				div_review_like_list: { tag:'div',
					parent_html:{ tag:'div', classes:{list:['_ipp']} },
					classes:{list:['_3t53', '_4ar-', '_ipn']}
				},
				btn_tab_liking_close: { tag:'a',
					classes:{list:['_42ft', '_5upp', '_50zy', 'layerCancel', '_463u', '_51-t', '_50-0', '_50z-']},
					innerOuterHTMLs:{list:['닫기']}
				},
				div_review_check_first: { tag:'a',
					classes:{list:['_ipm']},
					split:{ html:'innerHTML', params:['댓글 ','개'], type:'NUMBER' }
				},
				div_review_check_second: { tag:'a',
					classes:{list:['UFIPagerLink']},
					innerOuterHTMLs:{list:['더 보기']},
					split:{ html:'innerHTML', params:['댓글 ','개'], type:'NUMBER' }
				},
				div_review_check_third: { tag:'span',
					classes:{list:['fcg', 'UFIPagerCount']},
					split:{ html:'innerHTML', params:['해당사항 없음', '개 중'], type:'NUMBER' }
				},
				btn_page_home: [
					{ tag:'a',
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['홈']}
					},
					{ tag:'a',
						classes:{list:['_3f-h']},
						innerOuterHTMLs:{list:['홈']}
					}
				],
				btn_page_bulletin: [
					{ tag:'a',
						parent_html:{ tag:'div', 
							classes:{list:['_2yaa']}, 
							not_classes:{list:['_2yap']}
						},
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']}
					},
					{ tag:'a',
						classes:{list:['_3f-h']},
						not_classes:{list:['_3f-i']},
						innerOuterHTMLs:{list:['게시물']}
					}
				],
				btn_page_bulletin_clicked: [
					{ tag:'a',
						parent_html:{ tag:'div', 
							classes:{list:['_2yaa', '_2yap']} 
						},
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']}
					},
					{ tag:'a',
						classes:{list:['_3f-h', '_3f-i']},
						innerOuterHTMLs:{list:['게시물']}
					}
				],
				div_spam: { tag:'div',
					classes:{list:['UFICommentContent']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				btn_friend_invite : { tag:'a',
					classes:{list:['_39g5']},
					properties:{list:['role="button"']},
					innerOuterHTMLs:{list:['친구에게 페이지 좋아요 요청']}
				},
				btn_friend_invite_close : { tag:'a',
					classes:{list:['_42ft', '_5upp', '_50zy', 'layerCancel', '_51-t', '_50-0', '_50z-']}
				},
				btn_friend_invite_indivisual : { tag:'a',
					classes:{list:['uiButton', '_1sm']},
					innerOuterHTMLs:{list:['초대']}
				}
			};

			// Url Section
			this.urls = {
				page_bulletin_btn:{ basic:'https://www.facebook.com/', extra:{list:[]} },
				page_bulletin_btn_business:{ basic:'https://business.facebook.com/', extra:{list:[]} }
			};

			// Interval Section
			this.intervals = {
				search: { setting_key:'interval_search', method:'getRandomOfNumber', percentage:30 },
				prepare: { setting_key:'interval_prepare', method:'getRandomOfNumber', percentage:30 },
				work: { setting_key:'interval_work', method:'getRandomOfNumber', percentage:30 }
			};

			// Func Section
			this.funcs_option = {
				review_like:{ click:{ click_key:'review_like' }, percentage:100, boolean:{ click_key:'review_like', setting_value:100 } },
				bulletin_invite:{ click:{ click_key:'bulletin_invite' }, percentage:100, boolean:{ click_key:'bulletin_invite', setting_value:100 } },
				friend_invite:{ click:{ click_key:'friend_invite' }, percentage:100, boolean:{ click_key:'friend_invite', setting_value:100 }, html_check:{ check:true } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[], condition:'OR'},
						htmls : {list:[this.htmls.page_tab, this.htmls.btn_page_home, this.htmls.btn_page_bulletin], condition:'AND'},
						list_step:[
							{list_action:[ { action:'CLICK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'친구에게 페이지 좋아요 요청 버튼 클릭', click:{ html:this.htmls.btn_friend_invite } } ], delay:10, countdown:false},
							{list_action:[ { action:'SCROLL', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구들 검색', scroll:{ interval:5, html:this.htmls.box_my_friend_scroll, comparison:{ type:'>=', pandoras:[ {html:this.htmls.box_my_friend_list, type:'COUNT'}, {basic:'전체 내 친구들 수'} ], message:'내 친구들 검색', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ]},
							{list_action:[ { action:'STATUS', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'초기화', status:{ set:'friend_index', value:0 } } ], delay:3},
							{list_action:[ { action:'SAVE', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'작업할 친구들 수 갱신', save:{ pandoras:[{html:this.htmls.box_my_friend_list, type:'COUNT'}, {status:'friend_total'}] } } ], delay:3},
							{list_action:[ { action:'LOOP', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구들 페이지 초대 작업 반복', 
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', 
											try : {
												list_step:[
													{list_action:[ { action:'TARGET', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구 타겟 설정', target:{ html:this.htmls.box_my_friend_list, index:{status:'friend_index', type:'NUMBER'}, set:true, scroll:{value:true} } } ], delay:2, countdown:false},
													{list_action:[ { action:'CHECK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'초대 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_friend_invite_indivisual, exist:true, message:'초대 버튼 없음' } ] } } ], delay:2, countdown:false},
													{list_action:[ { action:'CLICK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'초대 작업 시작', click:{ target:true, html:this.htmls.btn_friend_invite_indivisual } } ], delay: 5, countdown:false, statuses:[{increase:'friend_invite_count'}]}
												],
												countdown:false
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'friend_invite', func_option:this.funcs_option.friend_invite, message:{ text:'초대 버튼 없음', delay_positon:0 } } ], delay:2, countdown:false}
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ { action:'TARGET', func:'friend_invite', description:'친구 타겟팅 해제', target:{ set:false } } ], delay:2, countdown:false}, 
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'friend_index'} ] } } ], delay:2, countdown:false}
												],
												countdown:false
											}	
										} ]}
									],
									delay: this.intervals.work,
									comparison:{ type:'>=', pandoras:[{status:'friend_index', type:'NUMBER'}, {status:'friend_total'}], message:'초대 작업' }
								}
							} ]},
							{list_action:[ { action:'CLICK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구들 리스트 닫기', click:{ html:this.htmls.btn_friend_invite_close } } ], delay:2, countdown:false},
							{list_action:[ { action:'CLICK', description:'게시글버튼 클릭', click:{ html:this.htmls.btn_page_bulletin, delay_position:100 } } ], delay:6, countdown:false}
						]
					},
					{
						urls : {list:[], condition:'OR'},
						htmls : {list:[this.htmls.page_tab, this.htmls.btn_page_bulletin_clicked], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'게시글 검색', scroll:{ interval:5, body:true, comparison:{ type: '>=', pandoras: [ {html:this.htmls.box_page_bulletin, type:'COUNT'}, {basic:'전체 게시글 수'} ], message:'페이지 게시글 검색', count_limit:{ setting_key:'page_list_search_limit' }, count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ] },
							{list_action:[ { action:'STATUS', description:'초기화', status:{ set:'bulletin_index', value:0 } } ], delay:3 },
							{list_action:[ { action:'SAVE', description:'작업할 게시글 수 갱신', save:{ pandoras:[{html:this.htmls.box_page_bulletin, type:'COUNT'}, {status:'bulletin_total'}] } } ], delay:3},
							{list_action:[ { action:'LOOP', description:'페이지 작업 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', description:'게시글 타겟 설정', target:{ html:this.htmls.box_page_bulletin, index:{status:'bulletin_index', type:'NUMBER'}, set:true, scroll:{ value:true }, body:true } } ], delay:2},
										{list_action:[ { action:'TRYCATCH', func:'bulletin_invite',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'bulletin_invite', check:{ htmls:[ { target:true, html:this.htmls.div_review_like_list, exist:true, message:'초대작업 제외 : 좋아요 한 사람 없음' } ] } } ], delay: 2, countdown:false },
													{list_action:[ { action:'STATUS', func_option:this.funcs_option.bulletin_invite, description:'초대 작업 초기화', status:{ set:'invite_index', value:0 } } ], delay: 2, countdown:false }, 
													{list_action:[ { action:'CLICK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 리스트 팝업 열기', click:{ target:true, html:this.htmls.tab_liking, delay_position:0 } } ], delay:10, countdown:false },
													{list_action:[ { action:'SAVE', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'총 공감 수 저장', save:{ pandoras:[{html:this.htmls.feel_sympathy_number, type:'NUMBER'}, {status:'sympathy_total'}], delay_position:50 } } ], delay:2, countdown:false },
													{list_action:[ { action:'SCROLL', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 리스트 검색', scroll:{ html:this.htmls.box_user_like_scroll, interval:4, click:{ html:this.htmls.btn_like_more }, comparison:{ type:'infinite', pandoras:[ {html:this.htmls.box_user_like, type:'COUNT'}, {status:'sympathy_total'} ], message:'공감한 리스트 검색', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ] },
													{list_action:[ { action:'LOOP', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'초대 작업 반복',
														loop:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 사람 타겟팅', target:{ html:this.htmls.box_user_like, index:{status:'invite_index', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:2, countdown:false},
																			{list_action:[ { action:'CHECK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'초대 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_invite_do, exist:true, message:'초대 버튼 없음' } ] } } ], delay:1, countdown:false},
																			{list_action:[ { action:'CLICK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'초대 작업 시작', click:{ target:true, html:this.htmls.btn_invite_do } } ], delay: 5, countdown:false, statuses:[{increase:'invite_count'}] }
																		],
																		countdown:false
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'MESSEAGE', func:'bulletin_invite', message:{ text:'초대 버튼 없음', delay_position:0 }} ], delay:2, countdown:false }
																		],
																		countdown:false
																	},
																	finally : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'bulletin_invite', description:'사람 타겟팅 해제', target:{ set:false } } ], delay:2, countdown:false},
																			{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'invite_index'} ] } } ], delay:2, countdown:false}
																		],
																		countdown:false
																	}
																} ]}
															],
															delay: this.intervals.work,
															comparison:{ type:'>=', pandoras:[{status:'invite_index', type:'NUMBER'}, {status:'sympathy_total'}], message:'초대 작업' }
														} 
													} ]},
													{list_action:[ { action:'CLICK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 리스트 팝업 닫기', click:{ html:this.htmls.btn_tab_liking_close } } ], delay:2, countdown:false }
												]
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'bulletin_invite', message:{ text:'초대작업 제외 : 좋아요 한 사람 없음', delay_position:0 } } ], delay:3, countdown:false }
												]
											}
										} ]},

										{list_action:[ { action:'TARGET', description:'게시글 타겟 설정', target:{ html:this.htmls.box_page_bulletin, index:{status:'bulletin_index', type:'NUMBER'}, set:true, scroll:{ value:true }, body:true } } ], delay:2},

										{list_action:[ { action:'TRYCATCH', func:'review_like',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 유무 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_review_list, exist:true, message:'댓글 좋아요 작업 제외 : 댓글 없음' } ] } } ], delay: 2, countdown:false},
													{list_action:[ { action:'STATUS', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요 작업 초기화', func_option:this.funcs_option.review_like, status:{ set:'like_index', value:0 } } ], delay: 2, countdown:false },

													{list_action:[ { action:'TRYCATCH', func:'review_like', 
														try : {
															list_step:[
																{list_action:[ { action:'CHECK', func:'review_like', description:'총 댓글 수 체크', check:{ htmls:[ { target:true, html:this.htmls.div_review_check_first, exist:true } ] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_check_first, type:'NUMBER'}, {status:'review_total'}], delay_position:50 } } ], delay:1, countdown:false}
															]
														},
														catch : {
															list_step:[
																{list_action:[ { action:'CHECK', func:'review_like', description:'총 댓글 수 체크', check:{ htmls:[ { target:true, html:this.htmls.div_review_check_second, exist:true } ] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_check_second, plus:2, type:'NUMBER'}, {status:'review_total'}], delay_position:50 } } ], delay:1, countdown:false}
															]
														},
														check : {
															list_step:[
																{list_action:[ { action:'CHECK', func:'review_like', description:'총 댓글 수 체크', check:{ htmls:[ { target:true, html:this.htmls.div_review_check_third, exist:true } ] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_check_third, type:'NUMBER'}, {status:'review_total'}], delay_position:50 } } ], delay:1, countdown:false}
															]
														},
														finally : {
															list_step:[
																{list_action:[ { action:'TRYCATCH', func:'review_like', 
																	try : {
																		list_step:[
																			{list_action:[ { action:'CHECK', func:'review_like', check:{ status:'review_total', exist:true } } ], delay: 1, countdown:false}
																		]
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_element, type:'COUNT', target:true}, {status:'review_total'}], delay_position:50 } } ], delay:5, countdown:false}
																		]
																	}
																} ]},
																{list_action:[ { action:'MESSEAGE', func:'review_like', message:{ text:'총 댓글 수 저장 완료' } } ], delay: 2, countdown:false}
															]
														}
													} ]},

													{list_action:[ { action:'MULTI_CLICK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 리스트 검색', click:{ html:this.htmls.btn_review_more, interval:3, target:true, comparison:{ type: '>=', pandoras : [ {html:this.htmls.div_review_element, type:'COUNT', target:true}, {status:'review_total'} ], message:'댓글 검색 작업', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ] },
													{list_action:[ { action:'LOOP', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요 작업 반복', 
														loop:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 타겟팅', target:{ html:this.htmls.div_review_element, index:{status:'like_index', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:1, countdown:false },
																			{list_action:[ 
																				{ action:'CHECK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_review_like_do, exist:true, message:'이미 댓글 좋아요 중' } ] } },
																				{ action:'CHECK',						   func_option:this.funcs_option.review_like, description:'스팸 검사', check:{ htmls:[ { target:true, html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있어요!:(' } ] } } 
																			], delay:1, countdown:false},
																			{list_action:[ { action:'CLICK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요', click:{ target:true, html:this.htmls.btn_review_like_do } } ], delay: 5, countdown:false, statuses:[{increase:'review_like_count'}]}
																		],
																		countdown:false
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'MESSEAGE', func:'review_like', message:{ text:'이미 댓글 좋아요/좋아요 신청 중' }} ], delay:1, countdown:false }
																		],
																		countdown:false
																	},
																	finally : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'review_like', description:'댓글 타겟팅 해제', target:{ set:false } } ], delay:1, countdown:false},
																			{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'like_index'} ] } } ], delay:1, countdown:false}
																		],
																		countdown:false
																	}
																} ]}
															],
															delay: this.intervals.work, 
															comparison:{ type:'>=', pandoras:[{status:'like_index', type:'NUMBER'}, {status:'review_total', type:'NUMBER'}], message:'댓글 좋아요 작업' }
														}
													} ]}
												]
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'review_like', message:{ text:'댓글 좋아요 작업 제외 : 댓글 없음', delay_position:0 } } ], delay:3, countdown:false }
												]
											}
										} ]},
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'}, {increase:'bulletin_index'} ] } } ], countdown:false },
										{list_action:[ { action:'TARGET', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{ type:'>=', pandoras:[{status:'bulletin_index', type:'NUMBER'}, {status:'bulletin_total'}], message:'페이지 작업' }
								}
							} ]}
						],
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerUnfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'unfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['_2s25']},
					split:{ attr:'href', params:[] }
				},
				box_friend_recommand:{ tag:'div',
					classes:{list:['mtl', '_30d', '_5ewg']},
					properties:{list:['id="fbSearchResultsBox"']},
					innerOuterHTMLs:{list:['알 수도 있는 사람']}
				},
				box_friend_doing:{ tag:'div',
					classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']},
					innerOuterHTMLs:{list:['친구 요청이 전송됨']}
				},
				box_friend_doing_none:{ tag:'div',
					classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']},
					innerOuterHTMLs:{list:['전송된 친구 요청 없음']}
				},
				btn_more:{ tag:'a',
					// parent_html:{ tag:'div', classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']}, innerOuterHTMLs:{list:['친구 요청이 전송됨']} },
					classes:{list:['pam', 'uiBoxLightblue', '_5cz', 'uiMorePagerPrimary']},
					properties:{list:['rel="async"', 'role="button"']},
					innerOuterHTMLs:{list:['요청 더 보기']}
				},
				box_friend:{
					parent_html:{ tag:'div', classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']}, innerOuterHTMLs:{list:['친구 요청이 전송됨']} },
					classes:{list:['clearfix', 'ruUserBox', '_3-z']}
				},
				btn_friend_doing:{ tag:'button',
					classes:{list:['_42ft', '_4jy0', 'FriendRequestOutgoing', 'enableFriendListFlyout', 'outgoingButton', 'enableFriendListFlyout', '_4jy3', '_517h', '_51sy']},
					not_classes:{list:['hidden_elem']},
					properties:{list:['data-flloc="ru_req_promo"', 'data-profileid', 'type="button"', 'data-cancelref="outgoing_requests"']},
					innerOuterHTMLs:{list:['친구 요청 전송됨']}
				},
				btn_unfriend_do:{ tag:'li',
					classes:{list:['uiMenuItem', 'FriendListCancel']},
					properties:{list:['data-label="친구 요청 취소"']},
					innerOuterHTMLs:{list:['친구 요청 취소']}
				},
				btn_unfriend_do_confirm:{ tag:'button',
					classes:{list:['_42ft', '_42fu', 'layerConfirm', 'uiOverlayButton', '_42g-', '_42gy']},
					properties:{list:['value="1"', 'type="submit"']},
					innerOuterHTMLs:{list:['요청 취소']}
				}
			};

			// Url Section
			this.urls = {
				work:{ basic:'https://www.facebook.com/friends/requests/?fcref=ff&outgoing=1', changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.box_friend_doing, this.htmls.box_friend_doing_none], condition:'OR'},
						list_step:[
							{list_action:[ { action:'REMOVE', func:'unfriend', description:'알 수도 있는 사람 제거', remove:{ html:this.htmls.box_friend_recommand } } ], delay:3},
							{list_action:[ { action:'SCROLL', func:'unfriend', description:'요청 중인 친구 검색', scroll:{ count:0.3, click:{ html:this.htmls.btn_more}, comparison:{type:'>=', pandoras:[{html:this.htmls.box_friend, type:'COUNT'}, {basic:'요청 중인 친구'} ], message:'요청 중인 친구', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							{list_action:[ { action:'SAVE', func:'unfriend', description:'요청 수 저장', save:{ pandoras:[{html:this.htmls.box_friend, type:'COUNT'}, {status :'unfriend_total'}] } } ], delay:3 },
							{list_action:[ { action:'STATUS', func:'unfriend', status:{ set:'unfriend_count', value:0 } } ], delay:1 },
							{list_action:[ { action:'LOOP', func:'unfriend', description:'요청 취소 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 설정', target:{ html:this.htmls.box_friend, index:{status:'unfriend_count', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:5 },
										{list_action:[ { action:'CLICK', func:'unfriend', description:'팝업 열기', click:{ target:true, html:this.htmls.btn_friend_doing, delay_position:50 } } ], delay:5},
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청 취소 클릭', click:{ html:this.htmls.btn_unfriend_do, delay_position:50 } } ], delay:10},
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청 취소', click:{ html:this.htmls.btn_unfriend_do_confirm, delay_position:50 } } ], log_push:true, delay:10, statuses:[{increase:'unfriend_count'}, {increase:'count'}]},
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{type:'>=', pandoras:[{status :'unfriend_count', type:'NUMBER'}, {status :'unfriend_total', type:'NUMBER'}], message:'요청취소 중' },
									delay:this.intervals.work
								} 
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				user_name:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']}
					}
				],
				myfeed_list:{ tag:'div',
					parent_html:{tag:'div', classes:{list:['_qj7yb']}}
				},
				myfeed_list_second:{ tag:'main',
					classes:{list:['_6ltyr']}
				},
				myfeed_list_third:{ tag:'section',
					classes:{list:['_jx516']}
				},
				myfeed_element:[
					{ tag:'article',
						classes:{list:['_h2d1o', '_55zw1', '_p8mqr', '_qs5p4']}
					},
					{ tag:'article',
						classes:{list:['_h2d1o', '_j5hrx', '_pieko']}
					},
					{ tag:'article',
						classes:{list:['_8ab8k', '_j5hrx', '_pieko']}
					}
				],
				btn_like_do:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']} 
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					}
				],
				input_review:[
					{ tag:'input',
						classes:{list:['_2hc0g', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					},
					{ tag:'input',
						classes:{list:['_7uiwk', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					}
				],
				id_review:{ tag:'script',
					properties:{list:["type='text/javascript'"]},
					innerOuterHTMLs:{list:['window._sharedData']}
				},
				username_bulletin:[
					{ tag:'a',
						properties:{list:['title', 'href']},
						classes:{list:['_4zhc5', 'notranslate', '_ebg8h']}
					},
					{ tag:'a',
						properties:{list:['title', 'href']},
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					}
				],
				check_like_did:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					}
				]
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Url Section
			this.urls = {
				url_search:{ basic:'https://www.instagram.com', extra:{list:[]}, changing:false },			
				review:{ basic:'/web/comments/', extra:{list:[ { html:this.htmls.id_review, type:'OBJECT', func_key:'review' }, '/add/' ] } }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:5 }
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				// this.getSetting(setting_key) 함수는 해당 version의 settings중 setting_key에 해당하는 setting_value의 value값을 가져오는 함수이다.
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' }, html_check:{ check:true } },
				review_second:{ click:{ click_key:'review' }, percentage:100, boolean:{ click_key:'review', setting_value:100 } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls: {list:[this.urls.url_search], condition:'AND'},
						htmls: {list:[this.htmls.myfeed_list, this.htmls.myfeed_list_second, this.htmls.myfeed_list_third], condition:'AND'},
						list_step:[
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'reload_interval', value:20, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'myfollower_index', value:0, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'LOOP', func:'stopstart', description:'마이피드 작업 반복',
								loop:{
									list_step: [
										{list_action:[ { action:'SCROLL', description:'마이피드 검색', scroll:{ interval:5 } } ], delay:8, countdown:false},
										{list_action:[ { action:'TARGET', description:'타겟 설정', target:{ html:this.htmls.myfeed_element, index:{status:'myfollower_index', type:'NUMBER'}, set:true, scroll:{ value:true }, target_username:{ html:this.htmls.user_name, type:'innerHTML' }, crawl_user_name:{ value: true, target: this.htmls.username_bulletin } } } ], delay: 1, countdown: false },
										{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:2},
										{list_action:[ { action:'TRYCATCH',
											try: {
												list_step:[
													{list_action:[ { action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ { target:true, html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'} ] } } ], delay:2, countdown: false},
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'좋아요 예정', delay_position:0 } } ], delay: 2, countdown: false },
													{list_action:[ { action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ target:true, html:this.htmls.btn_like_do }, log_push:true, statuses:[{increase:'like_count'}] } ], delay: 3, countdown: false },
													{list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력', input:{ target:true, html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5, countdown: false },
													{list_action:[
														{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록',
															post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', log_push:true, statuses:[{increase:'review_count'}]
														}
													], delay:5, countdown: false }
												],
												countdown: false
											},
											catch: {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'마이피드작업 제외 : 이미 좋아요 한 게시글', delay_position:0 } } ], delay: 2, countdown: false }
												],
												countdown: false
											},
											finally: {
												list_step:[
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'myfollower_index'} ] } } ], delay: 1, countdown: false },
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay: 1, countdown: false },
													{list_action:[ { action:'TRYCATCH', func:'review', func_option:this.funcs_option.review_second,
														try: {
															list_step:[
																{list_action:[ { action:'COMPARE', func:'stopstart', description:'새로고침 간격 확인', compare:{ type:'>=', pandoras:[{status:'myfollower_index', type:'NUMBER'}, {status:'reload_interval', type:'NUMBER'}] } } ], delay: 3, countdown:false},
																// 반응이 resolve일 경우
																{list_action:[ { action:'RELOAD' } ]}
															],
															countdown:false
														},
														catch: {
															list_step:[
																// 반응이 reject일 경우
																{list_action:[ { action:'RESOLVE' } ]}
															],
															countdown:false
														}
													} ]}
												],
												countdown: false
											}
										} ] },
										{list_action:[ { action:'TARGET', func:'like', description:'타겟 해제', target:{ set:false } } ], delay: 2, countdown: false }
									],
									delay:this.intervals.work,
									comparison:{ type:'infinite', pandoras:[{basic:'해당사항 없음'}, {basic:'해당사항 없음'}], message:'마이피드' }
								} }
							]}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerFollowService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				user_name:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']}
					}
				],
				popular_posts:{ tag:'div',
					classes:{list:['_5kftd']},
					innerOuterHTMLs:{list:['인기 게시물']}
				},
				post_img:{ tag:'a',
					classes:{list:['_8mlbc', '_vbtk2', '_t5r8b']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['img', '?tagged='], type:'OUTERHTML'},
					href:'/p/',
					split:{ attr:'href', params:[null, '/?tagged='] }
				},
				btn_more:{ tag:'a',
					innerOuterHTMLs:{list:['더 읽어들이기']},
					href:'/explore/tags/'
				},
				div_spam:[
					{ tag:'li',
						classes:{list:['_nk46a']},
						innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
					},
					{ tag:'li',
						classes:{list:['_99ch8']},
						innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
					}
				],
				div_spammer:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']},
						innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']},
						innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
					}
				],
				div_my_bulletin:{ tag:'a',
					classes:{list:['_4zhc5', 'notranslate', '_ook48']},
					innerOuterHTMLs:{list:{ 
						html_value:[
							{ tag:'a',
								classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
								innerOuterHTMLs:{list:['프로필']},
								split:{ attr:'href', params:['/', '/'] }
							},
							{ tag:'a',
								classes:{list:['_gx3bg']},
								split:{ attr:'href', params:['/', '/'] },
								decent_index:3
							},
							{ tag:'strong',
								classes:{list:['-cx-PRIVATE-NavBar__username']},
								split:{ html:'innerHTML' }
							}
						]
					}}
				},
				btn_follow_did:{ tag:'button',
					innerOuterHTMLs:{list:['팔로잉']}
				},
				btn_follow_do:{ tag:'button',
					innerOuterHTMLs:{list:['팔로우']}
				},
				check_like_do:[
					{	tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					}
				],
				check_like_did:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					}
				],
				btn_like_do:{ tag:'a',
					properties:{list:['role="button"', 'aria-disabled="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				input_review:[
					{ tag:'input',
						classes:{list:['_2hc0g', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					},
					{ tag:'input',
						classes:{list:['_7uiwk', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					}
				],
				id_review:{ tag:'meta',
					properties:{list:["property='al:ios:url'"]},
					split:{ attr:'content', params:['instagram://media?id='] }
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'https://www.instagram.com/explore/tags/', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }] ]}, changing:false },
				work:{ basic:'https://www.instagram.com/p/', changing:false },
				detail:{ basic:'https://www.instagram.com', extra:{list:[ { html:this.htmls.post_img, no_encode:true, random:true } ] } },
				review:{ basic:'/web/comments/', extra:{list:[ { html:this.htmls.id_review }, '/add/' ] } }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.popular_posts, this.htmls.post_img, this.htmls.btn_more], condition:'OR'},
						list_step:[
							{list_action:[ 
								{ action:'REMOVE', description:'인기 게시물 제거', remove:{ html:this.htmls.popular_posts } } 
							], delay:5},
							{list_action:[ 
								{ action:'SCROLL', description:'게시물 검색', scroll:{ interval:5, click:{ html:this.htmls.btn_more} } } 
							], delay:80},
							{list_action:[ 
								{ action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } 
							], delay:15}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.check_like_do, this.htmls.check_like_did, this.htmls.btn_like_do], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' }}
							], delay:8},
							{list_action:[
								{ action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } }
							], delay:2},
							{list_action:[
								{ action:'MYNAME_CHECK' }
							], delay:5},
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ]}},
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'} ] } },
								{ action:'CHECK', func:'review', description:'내 게시글 검사', check:{ htmls:[ {html:this.htmls.div_my_bulletin, exist:false, message:'내 게시글입니다'} ] } },
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:5},
							{list_action:[ 
								{ action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } 
							], delay:5},
							{list_action:[
								{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록',
									post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', log_push:true, statuses:[{increase:'review_count'}]
								}
							], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerUnfollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'unfollow';
			// getSetting에서 가져오는 setting.value 값은 extension의 grammerInitializeService.initializeValueOfSetting 에서 셋팅한다.
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				user_name:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']}
				},
				text_follower:{ tag:'span',
					parent_html:{tag:'a', classes:{list:['_s53mj']}, properties:{list:['href']}, innerOuterHTMLs:{list:['팔로워']}, href:'/followers/'},
					classes:{list:['_bkw5z']},
					properties:{list:['title']},
					split:{ attr:'title', params:[], type:'NUMBER' }
				},
				text_following:{ tag:'span',
					parent_html:{tag:'a', classes:{list:['_s53mj']}, properties:{list:['href']}, innerOuterHTMLs:{list:['팔로우']}, href:'/following/'},
					classes:{list:['_bkw5z']},
					split:{ html:'innerHTML', params:[], type:'NUMBER' }
				},
				tab_follower:{ tag:'a',
					classes:{list:['_s53mj']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['팔로워']},
					href:'/followers/',
				},
				tab_following:{ tag:'a',
					classes:{list:['_s53mj']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['팔로우']},
					href:'/following/',
				},
				btn_close:{ tag:'button',
					classes:{list:['_3eajp']},
					innerOuterHTMLs:{list:['닫기']}
				},
				box_scroll:{ tag:'div',
					classes:{list:['_4gt3b']}
				},
				box_user_follower:{ tag:'li',
					parent_html:{tag:'div', classes:{list:['_4gt3b']}},
					classes:{list:['_cx1ua']}
				},
				box_user_following:{ tag:'li',
					parent_html:{tag:'div', classes:{list:['_4gt3b']}},
					classes:{list:['_cx1ua']}
				},
				text_username:{ tag:'a',
					classes:{list:['_4zhc5', '_j7lfh']},
					properties:{list:['title', 'href']},
					split:{ html:'innerHTML', params:[] }
				},
				text_username_on_profile_page:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']},
					properties:{list:['title']},
					split:{ html:'innerHTML', params:[] }
				},
				btn_unfollow_do:{ tag:'button',
					innerOuterHTMLs:{list:['팔로잉']}
				},
				btn_profile_edit:{ tag:'button',
					innerOuterHTMLs:{list:['프로필 편집']}
				},
				div_undefined_user:{ tag:'div',
					classes:{list:['error-container', '-cx-PRIVATE-ErrorPage__errorContainer']},
					innerOuterHTMLs:{list:['죄송합니다']}
				},
				div_prohibited_user:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']},
					innerOuterHTMLs:{list:{ setting_key:'prohibited_user' }}
				}
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'https://www.instagram.com/', extra:{list:[{html:this.htmls.identification}, '/']}, changing:false },
				work_unfollow:{ basic:'https://www.instagram.com/', extra:{list:[{status:'following_list', status_index:'unfollow_index', grammer_key:'instagrammer', version_key:'unfollow' }, '/']}, changing:false },
				unfollow_page:{ basic:'https://www.instagram.com/', changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Func Section
			this.funcs_option = {
			};

			// Page Section
			this.pages = {
				start:[
					{
						select: true,
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.btn_profile_edit], condition:'AND'},
						list_step:[
							// *********** 일반형 버전
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}], delay_position:50 } } ], delay:3 },
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}], delay_position:50 } } ], delay:3 },
							// {list_action:[ { action:'CLICK', func:'unfollow', description:'팔로워 팝업 열기', permissions:['unfollow'], click:{ html:this.htmls.tab_follower, delay_position:0 } } ], delay:3 },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', permissions:['unfollow'], scroll:{ html:this.htmls.box_scroll, interval:1, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_follower, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 },
							// {list_action:[ { action:'CLICK', func:'unfollow', permissions:['unfollow'], click:{ html:this.htmls.btn_close, delay_position:0 } } ], delay:1 },
							// {list_action:[ { action:'CLICK', func:'unfollow', description:'팔로잉 팝업 열기', permissions:['unfollow', 'unfollow_all'], click:{ html:this.htmls.tab_following, delay_position:0 } } ], delay:3 },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', permissions:['unfollow', 'unfollow_all'], scroll:{ html:this.htmls.box_scroll, interval:1, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_following, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:3 },
							// {list_action:[ { action:'EXCLUDE', func:'unfollow', permissions:['unfollow'], description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:5},
							// {list_action:[ { action:'STATUS', func:'unfollow', permissions:['unfollow', 'unfollow_all'], status:{ set:'unfollow_index', value:0 } } ], delay: 2 },
							// {list_action:[ { action:'SAVE', func:'unfollow', permissions:['unfollow'], description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2},
							// {list_action:[ { action:'GO', description:'언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}

							// *********** 언팔 기능 추가 버전 
							{list_action:[ { action:'TRYCATCH', func:'unfollow', permissions:['unfollow', 'unfollow_all'], 
								try : {
									select: true,
									list_step:[
										{list_action:[ { action:'ONPOPUP', func:'unfollow', description:'팝업', permissions:['unfollow', 'unfollow_all'], on_popup:{ variable:'popup_boolean', value:true, delay_position:90 } } ], delay:3},
										// 반응이 resolve일 경우 -> 새로운 언팔로우 기능을 사용하게 됨
										{list_action:[ { action:'EXCLUDE', func:'unfollow', permissions:['unfollow'], description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:5},
										{list_action:[ { action:'STATUS', func:'unfollow', permissions:['unfollow', 'unfollow_all'], status:{ set:'unfollow_index', value:0 } } ], delay: 2 },
										{list_action:[ { action:'SAVE', func:'unfollow', permissions:['unfollow'], description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2},
										{list_action:[ { action:'GO', description:'언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}
									],
									countdown: false
								},
								catch : {
									select: true,
									list_step:[
										// 반응이 reject일 경우 -> 기존의 언팔로우 기능을 사용하게 됨
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}], delay_position:50 } } ], delay:3 },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}], delay_position:50 } } ], delay:3 },
										{list_action:[ { action:'CLICK', func:'unfollow', description:'팔로워 팝업 열기', permissions:['unfollow'], click:{ html:this.htmls.tab_follower, delay_position:0 } } ], delay:3 },
										{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', permissions:['unfollow'], scroll:{ html:this.htmls.box_scroll, interval:0.3, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_follower, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 },
										{list_action:[ { action:'CLICK', func:'unfollow', permissions:['unfollow'], click:{ html:this.htmls.btn_close, delay_position:0 } } ], delay:1 },
										{list_action:[ { action:'CLICK', func:'unfollow', description:'팔로잉 팝업 열기', permissions:['unfollow', 'unfollow_all'], click:{ html:this.htmls.tab_following, delay_position:0 } } ], delay:3 },
										{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', permissions:['unfollow', 'unfollow_all'], scroll:{ html:this.htmls.box_scroll, interval:0.3, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_following, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:3 },
										{list_action:[ { action:'STATUS', func:'unfollow', permissions:['unfollow', 'unfollow_all'], status:{ set:'unfollow_index', value:0 } } ], delay: 2 },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 갱신', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.box_user_following, type:'COUNT'}, {status :'following_total'}] } } ], delay:2 },
										{list_action:[ { action:'GO', description:'언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}
									],
									countdown: false
								}
							} ]}
						],
					},
					{
						select: true,
						urls : {list:[this.urls.unfollow_page], condition:'AND'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.div_undefined_user], condition:'OR'},
						list_step:[
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복', permissions:['unfollow', 'unfollow_all'],
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', func:'unfollow', permissions:['unfollow', 'unfollow_all'],
											try : { 
												select: true,
												list_step:[
													{list_action:[ 
														{ action:'CHECK', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'유저 존재 여부 확인', check:{ htmls:[ { html:this.htmls.div_undefined_user, exist:false, message:'언팔로우 제외 : 존재하지 않는 유저' } ] } },
														{ action:'CHECK', func:'stopstart', permissions:['unfollow', 'unfollow_all'], description:'언팔금지 목록 포함 여부 확인', check:{ htmls:[ { html:this.htmls.div_prohibited_user, exist:false, message:'언팔로우 제외 : 언팔 금지된 유저' } ] } },
														{ action:'CHECK', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'팔로잉 버튼 유무 확인', check:{ htmls:[ { html:this.htmls.btn_unfollow_do, exist:true, message:'언팔로우 제외 : 팔로잉 버튼 없음' } ] } }
													], delay: 3, countdown:false },
													{list_action:[ { action:'TARGET_USERNAME', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' }} ], delay:1, countdown:false},
													// {list_action:[ { action:'COMPARE', permissions:['unfollow'], description:'맞팔확인', compare:{ type:'!in', pandoras:[{ target:true, html:this.htmls.text_username_on_profile_page, type:'TEXT' }, {status:'follower_list'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:1, countdown:false },
													{list_action:[ { action:'MESSEAGE', func:'unfollow', permissions:['unfollow'], message:{ text:'언팔 예정', delay_position:0 } } ], delay: 1, countdown:false },
													{list_action:[ { action:'CLICK', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'언팔로우', click:{ target:true, html:this.htmls.btn_unfollow_do }, log_push:true, statuses:[{increase:'unfollow_limit_count'}] } ], delay: 30},
													{list_action:[ { action:'STATUS', permissions:['unfollow', 'unfollow_all'], status:{ statuses:[ {increase:'unfollow_count'} ] } } ], delay: 1, countdown:false }
												],
												countdown:false
											},
											catch : {
												select: true,
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'unfollow', permissions:['unfollow', 'unfollow_all'], message:{ text:'언팔로우 제외 : 맞팔인 유저 or 존재하지 않는 유저 or 팔로잉 버튼 없음 or 언팔 금지된 유저', delay_position:0 } } ], delay: 2, countdown:false }
												],
												countdown:false
											},
											finally : {
												select: true,
												list_step:[
													{list_action:[ { action:'STATUS', permissions:['unfollow', 'unfollow_all'], status:{ statuses:[ {increase:'unfollow_index'} ] } } ], delay:1, countdown:false },
													{list_action:[ { action:'STATUS', permissions:['unfollow', 'unfollow_all'], status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false },
													{list_action:[ { action:'TRYCATCH', func:'unfollow', permissions:['unfollow', 'unfollow_all'], 
														try : {
															select: true,
															list_step:[
																// 끝났을 때 resolve, 끝나지 않았을 때 reject
																{list_action:[ { action:'COMPARE', permissions:['unfollow', 'unfollow_all'], description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'unfollow_index', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'STOP', permissions:['unfollow', 'unfollow_all'], description:'작업 종료' } ], delay:1, countdown:false}
															],
															countdown:false
														},
														// 작업 끝나지 않았을 때
														catch : {
															select: true,
															list_step:[
																{list_action:[ { action:'GO', description:'다음 언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:20 } } ], delay:10, countdown:false}
															],
															countdown:false
														}
													} ]}
												],
												countdown:false
											}
										} ] }
									]
								}
							} ] }
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerSpecificuserService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'specificuser';
			this.getSetting = function( settingkey ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				btn_follow_following:[
					{ tag: 'button',
						innerOuterHTMLs:{list:['팔로우']}
					},
					{ tag: 'button',
						innerOuterHTMLs:{list:['팔로잉']}
					}
				],
				btn_recommended_user:{ tag:'button',
					classes:{list:['_ah57t', '_i46jh', '_rmr7s']}
				},
				text_follower:{ tag:'span',
					parent_html:{tag:'a', classes:{list:['_s53mj']}, properties:{list:['href']}, innerOuterHTMLs:{list:['팔로워']}, href:'/followers/'},
					classes:{list:['_bkw5z']},
					properties:{list:['title']},
					split:{ attr:'title', params:[], type:'NUMBER' }
				},
				tab_follower:{ tag:'a',
					classes:{list:['_s53mj']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['팔로워']},
					href:'/followers/',
				},
				text_username:{ tag:'a',
					classes:{list:['_4zhc5', '_j7lfh']},
					properties:{list:['title', 'href']},
					split:{ html:'innerHTML', params:[] }
				},
				text_targeted_user_name:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']},
					innerOuterHTMLs:{list:{ setting_key:'targeted_user' }}
				},
				user_work_bulletin:{ tag:'a',
					classes:{list:['_8mlbc', '_vbtk2', '_t5r8b']},
					properties:{list:['href']},
					split:{ attr:'href', params:[null, null] }
				},
				check_like_do:[
					{	tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					}
				],
				check_like_did:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					}
				],
				btn_like_do:{ tag:'a',
					properties:{list:['role="button"', 'aria-disabled="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				user_name:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']}
					}
				],
				btn_follow_did:{ tag:'button',
					innerOuterHTMLs:{list:['팔로잉']}
				},
				btn_follow_do:{ tag:'button',
					innerOuterHTMLs:{list:['팔로우']}
				},
				div_spam:{ tag:'li',
					classes:{list:['_nk46a']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'a',
					classes:{list:['_4zhc5', 'notranslate', '_ook48']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				input_review:[
					{ tag:'input',
						classes:{list:['_2hc0g', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					},
					{ tag:'input',
						classes:{list:['_7uiwk', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					}
				],
				id_review:{ tag:'meta',
					properties:{list:["property='al:ios:url'"]},
					split:{ attr:'content', params:['instagram://media?id='] }
				},
				box_user_follower:{ tag:'li',
					parent_html:{tag:'div', classes:{list:['_4gt3b']}},
					classes:{list:['_cx1ua']}
				},
				box_scroll:{ tag:'div',
					classes:{list:['_4gt3b']}
				},
				box_existing_following:{ tag:'li',
					classes:{list:['_cx1ua']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				box_me:{ tag:'li',
					classes:{list:['_cx1ua']},
					innerOuterHTMLs:{list:{ 
						html_value:[
							{ tag:'a',
								classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
								innerOuterHTMLs:{list:['프로필']},
								split:{ attr:'href', params:['/', '/'] }
							},
							{ tag:'a',
								classes:{list:['_gx3bg']},
								split:{ attr:'href', params:['/', '/'] },
								decent_index:3
							}
						]
					}}
				},
				btn_option:{ tag:'button',
					classes:{list:['_fcwm8', 'coreSpriteEllipsis', '_soakw']},
					innerOuterHTMLs:{list:['옵션']}
				},
				wrong_user_name:{ tag:'div',
					classes:{list:['_o0ohn']},
					innerOuterHTMLs:{list:['https://scontent-icn1-1.cdninstagram.com/t51.2885-19/s320x320/13628245_1756859711256597_1471815419_a.jpg']}
				},
				div_not_open:{ tag:'h2',
					classes:{list:['_glq0k']},
					innerOuterHTMLs:{list:['비공개 계정입니다']}
				},
				div_no_bulletin:{ tag:'h2',
					classes:{list:['_2gvyi']},
					innerOuterHTMLs:{list:['아직 게시물이 없습니다.']}
				}
			};

			// Url Section
			this.urls = {
				work_specific_user_start:{ basic:'https://www.instagram.com/', extra:{list:[{setting_key:'targeted_user'}, '/']}, changing:false }, //
				work_specific_user:{ basic:'https://www.instagram.com/', extra:{list:[{status:'follower_list', status_index:'work_index', grammer_key:'instagrammer', version_key:'specificuser'}, '/']}, changing:false }, //
				detail:{ basic:'https://www.instagram.com', extra:{list:[ { html:this.htmls.user_work_bulletin, random:true } ]}, changing:false },
				work:{ basic:'https://www.instagram.com/p/', changing:false },//
				review:{ basic:'/web/comments/', extra:{list:[ { html:this.htmls.id_review }, '/add/' ] }, changing:false }
			};

			// Interval Section
			this.intervals = {
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work_specific_user_start], condition:'AND'},
						htmls : {list:[this.htmls.btn_follow_following, this.htmls.text_targeted_user_name], condition:'AND'},
						list_step:[
							// {list_action:[ { action:'SAVE', save:{ pandoras:[{html:this.htmls.identification, type:'TEXT'}, {status:'identification'}] } } ], delay:1, countdown:false},
							{list_action:[ { action:'SAVE', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status:'follower_total'}], delay_position:50 } } ], delay:3, countdown:false},
							{list_action:[ { action:'CLICK', description:'팔로워 팝업 열기', click:{ html:this.htmls.tab_follower, delay_position:50 } } ], delay:3, countdown:false},
							{list_action:[ { action:'SCROLL', description:'팔로워 검색', scroll:{ html:this.htmls.box_scroll, interval:0.3, comparison:{ type: '>=', pandoras:[ {html:this.htmls.box_user_follower, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_limit:{ setting_key:'search_limit_value' }, count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'REMOVE', description:'기존 팔로잉 제거', remove:{ html:this.htmls.box_existing_following, all:true } } ], delay:2, countdown:false},
							{list_action:[ { action:'REMOVE', remove:{ html:this.htmls.box_me } } ], delay:1, countdown:false},
							{list_action:[ { action:'SAVE', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}], delay_position:10 } } ], delay:3, countdown:false},
							{list_action:[ { action:'STATUS', status:{ set:'work_index', value:0 } } ], delay:2, countdown:false},
							{list_action:[ { action:'SAVE', description:'작업할 팔로워 수 갱신', save:{ pandoras:[{status:'follower_list', type:'LENGTH'}, {status:'follower_total'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:100 } } ], delay:3, countdown:false}
						]
					},
					{
						urls : {list:[this.urls.work_specific_user], condition:'AND'},
						htmls : {list:[this.htmls.btn_follow_following, this.htmls.btn_option], condition:'AND'},
						list_step:[
							{list_action:[ { action:'TRYCATCH', 
								try : {
									list_step:[
										{list_action:[ { action:'CHECK', check:{ htmls:[ {html:this.htmls.wrong_user_name, exist:false, message:'잘못된 계정'} ] } } ], delay:1, countdown:false},
										{list_action:[ { action:'CHECK', func:'like', check:{ htmls:[ {html:this.htmls.div_not_open, exist:false, message:'비공개 계정'} ] } } ], delay:1, countdown:false},
										{list_action:[ { action:'CHECK', func:'follow', check:{ htmls:[ {html:this.htmls.div_no_bulletin, exist:false, message:'게시글 없음'} ] } } ], delay:1, countdown:false},
										// resolve 
										{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:5, countdown:false}
									],
									countdown:false
								},
								catch : {
									list_step:[
										// reject
										{list_action:[ { action:'STATUS', status:{ statuses:[{increase:'work_index'}] } } ], delay:1, countdown:false},
										{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:100 } } ], delay:3, countdown:false}
									],
									countdown:false
								}
							} ]}
						]
					},
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.check_like_do, this.htmls.check_like_did, this.htmls.btn_like_do], condition:'OR'},
						list_step:[
							{list_action:[ { action:'TRYCATCH', 
								try : {
									list_step:[
										{list_action:[
											{ action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' }}
										], delay:4, countdown:false},
										{list_action:[
											{ action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'MYNAME_CHECK' }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ]}},
											{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'} ] } },
											{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, log_push:true, statuses:[{increase:'like_count'}, {increase:'work_index'}] }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, log_push:true, statuses:[{increase:'follow_count'}] }
										], delay:4, countdown:false},
										{list_action:[ 
											{ action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } 
										], delay:4, countdown:false},
										{list_action:[
											{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록',
												post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', log_push:true, statuses:[{increase:'review_count'}]
											}
										], delay:4, countdown:false},
										{list_action:[ { action:'TRYCATCH', 
											try : {
												list_step:[
													// 끝났을 때 resolve, 끝나지 않았을 때 reject
													{list_action:[ { action:'COMPARE', description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'work_index', type:'NUMBER'}, {status:'follower_total', type:'NUMBER'}] } } ], delay: 2, countdown:false},
													{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
												],
												countdown:false
											},
											// 작업 끝나지 않았을 때
											catch : {
												list_step:[
													{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:50 } } ], delay:8, countdown:false}
												],
												countdown:false
											}
										} ]}
									],
									countdown:false
								},
								catch : {
									list_step:[
										{list_action:[ { action:'STATUS', status:{ statuses:[{increase:'work_index'}] } } ], delay:1, countdown:false},
										{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:100 } } ], delay:3, countdown:false}
									],
									countdown:false
								}
							} ]}
						],
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('kakaogrammerNewfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'kakaogrammer';
			this.version_key = 'newfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['link_name', '_displayName']},
					split:{ attr:'href', params:['/'] }
				},
				tab_photo:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['사진']}
				},
				tab_movie:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['동영상']}
				},
				popular_posts:{ tag:'div',
					classes:{list:['cont_recomm']},
					properties:{list:['data-part-name']},
					innerOuterHTMLs:{list:['인기 게시물']},
				},
				recommended_posts:{ tag:'div',
					classes:{list:['cont_recomm']},
					properties:{list:['data-part-name']},
					innerOuterHTMLs:{list:['추천 태그']}
				},
				post_img_bulletin:{ tag:'a',
					classes:{list:['link_thumb', '_link']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['이미지 로딩중']}
				},
				post_img:{ tag:'a',
					classes:{list:['link_thumb', '_link']},
					properties:{list:['data-kant-id']},
					not_href:'/ch/',
					split:{ attr:'href', params:[] }
				},
				post_text:{ tag:'a',
					classes:{list:['link_txt', '_link']},
					properties:{list:['data-kant-id']},
					split:{ attr:'href', params:[] }
				},
				post_img2:{ tag:'div',
					classes:{list:['img_item']},
					properties:{list:['data-model']},
					split:{ attr:'data-model', splice_kakao:true, params:[] }
				},
				div_spam:{ tag:'div',
					classes:{list:['_content']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }},
					indexes:[0]
				},
				div_spammer:{ tag:'a',
					classes:{list:['pf_name']},
					properties:{list:['data-profile-popup','data-kant-id','data-kant-group']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				div_selected_bulletin:{ tag:'div',
					classes:{list:['feed detail_desc', '_feedContainer']}
				},
				btn_friend_do:{ tag:'a',
					classes:{list:['btn_receive', '_btnRequestFriend', '_friendButtons']},
					properties:{list:['data-kant-id']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['친구신청']},
				},
				btn_friend_doing:{ tag:'a',
					classes:{list:['btn_receive', 'btn_receive_v2', '_btnRequestingFriend', '_friendButtons']},
					properties:{list:['data-kant-id']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['신청 중']},
				},
				btn_friend_did:{ tag:'a',
					classes:{list:['btn_left']},
					properties:{list:['data-kant-id']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['친구']},
				},
				btn_receive_feed:{ tag:'a',
					classes:{list:['btn_receive', '_btnFollowFriend', '_friendButtons']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['소식받기']}
				},
				btn_feel:{ tag:'button',
					classes:{list:['_btnLike']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['느낌']}
				},
				btn_up:{ tag:'button',
					classes:{list:['_btnUp']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['UP 하기']}
				},
				btn_like1_do:{ tag:'button',
					parent_html:{ tag:'div', properties:{list:['data-part-name="likeButton"']} },
					classes:{list:['_btnLike']},
					properties:{list:['data-kant-id="91"']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['느낌']}
				},
				btn_like1_did:{ tag:'span',
					parent_html:{ tag:'div', properties:{list:['data-part-name="likeButton"']} },
					classes:{list:['ico_ks', '_btnLikeWrapper']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['좋아요', '멋져요', '기뻐요', '슬퍼요', '힘내요']}
				},
				btn_like2_do:{ tag:'button',
					parent_html:{ tag:'ul', classes:{list:['ly', 'feel_layer']}, properties:{list:['data-part-name="likeButtonLayer"']} },
					properties:{list:['data-kant-id']},
					not_properties:{list:['data-kant-id="92"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				input_review:{ tag:'textarea',
					classes:{list:['_text']},
					properties:{list:['title="댓글 입력"']}
				},
				text_total_apply:{ tag:'span',
					classes:{list:['_count']},
					split:{ html:'innerHTML' },
					decent_index:4
				},
				btn_review_do:{ tag:'a',
					classes:{list:['_btnCommentSubmit', 'btn_com']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['전송']},
				},
				btn_liking:{ tag:'span',
					classes:{list:['ico_ks', 'bn_like', '_btnLikeWrapper']},
					properties:{list:['style="display: inline;"']}
				},
				btn_friend_apply:{ tag:'a',
					classes:{list:['link_friend']},
					innerOuterHTMLs:{list:['신청']}
				},
				btn_other_limit:{ tag:'a',
					classes:{list:['btn_com', 'btn_or', '_dialogOk', '_dialogBtn']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['확인']}
				},
				review_textarea:{ tag:'textarea',
					classes:{list:['_text']},
					properties:{list:['title="댓글 입력"']}
				},
				logout_prepare:{ tag:'a',
					classes:{list:['link_mystory', '_btnMenu']},
					properties:{list:['data-kant-id', 'data-kant-group']},
					innerOuterHTMLs:{list:['메뉴']}
				},
				logout:{ tag:'a',
					classes:{list:['link_logout', '_btnLogout']},
					properties:{list:['data-skip-navigate', 'data-kant-id', 'data-kant-ignore']},
					innerOuterHTMLs:{list:['로그아웃']}
				}
			};

			// Url Section
			this.urls = {
				newfriend_initial_work:{ basic:'https://story.kakao.com/', changing:false },
				search:{ basic:'https://story.kakao.com/hashtag/', extra:{list:[[{ setting_key:'list_search_tag', method:'getRandom' }]]}, changing:false },
				detail:{ basic:'https://story.kakao.com/', extra:{list:[ { html:this.htmls.post_img2, random:true } ] } },
				work:{ basic:'https://story.kakao.com/' }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				// friend:{ click:{ click_key:'friend' }, percentage:{ setting_key:'percentage_friend' }, boolean:{ click_key:'friend', setting_key:'percentage_friend' }, day_limit:{ limit_setting_key:'friend_limit_value', status_key:'friend_limit_count' } },
				friend:{ click:{ click_key:'friend' }, percentage:{ setting_key:'percentage_friend' }, boolean:{ click_key:'friend', setting_key:'percentage_friend' }, work_limit:{ limit_status_key:'friend_limit_value', status_key:'friend_limit_count' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.newfriend_initial_work], condition:'OR'},
						htmls : {list:[this.htmls.tab_photo, this.htmls.tab_movie], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startmoment_time'}, {status:'startmoment_time'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'CLICK', description:'신청 버튼 클릭', click:{ html:this.htmls.btn_friend_apply, delete:[{component:'property', name:'href'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'SAVE', description:'누적된 친구요청 수 저장', save:{ pandoras:[{html:this.htmls.text_total_apply, type:'NUMBER'}, {status:'total_apply_number'}], delay_position:50 } } ], delay:1, countdown:false},
							{list_action:[ { action:'SUBTRACT_SAVE', description:'가능 친구요청 수 저장', subtract_save:{ pandoras:[{setting:'kakao_friend_apply_limit'}, {status:'total_apply_number'}, {status:'friend_limit_value'}] } } ], delay:1, countdown:false}
							// {list_action:[ { action:'SUBTRACT_SAVE', description:'가능 친구요청 수 저장', subtract_save:{ pandoras:[{basic:200}, {status:'total_apply_number'}, {status:'friend_limit_value'}] } } ], delay:1, countdown:false}
						]
					},
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.post_img, this.htmls.post_text], condition:'OR'},
						list_step:[
							{list_action:[ { action:'REMOVE', description:'추천 태그 게시물 제거', remove:{ html:this.htmls.recommended_posts } } ], delay:5},
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:5 } } ], delay:80},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_friend_do, this.htmls.btn_up, this.htmls.btn_feel], condition:'AND'},
						list_step:[
							{list_action:[ { action:'CHECK', description:'친구 검사', check:{ htmls:[ 
								{html:this.htmls.btn_friend_doing, exist:false, message:'이미 친구 요청 중'}, 
								{html:this.htmls.btn_friend_do, exist:true, message:'친구추가 버튼 없음'}, 
								{html:this.htmls.btn_receive_feed, exist:false, message:'페이지 게시물'} ] } }
							], delay:10, countdown:false},
							{list_action:[ { action:'CHECK', description:'좋아요 검사', check:{ htmls:[
								{html:this.htmls.btn_feel, exist:true, message:'느낌 버튼 없음'},
								{html:this.htmls.btn_liking, exist:false, message:'이미 좋아요 중'} ] } }
							], delay:10, countdown:false},
							{list_action:[ { action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[
								{html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'},
								{html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } } 
							], delay:10, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'friend', func_option:this.funcs_option.friend, description:'친구 추가', click:{ html:this.htmls.btn_friend_do }, statuses:[{increase:'friend_count'}, {increase:'friend_limit_count'}] } 
							], delay:10, countdown:false},
							{list_action:[
								{ action:'CLICK', func:'friend', func_option:this.funcs_option.friend, func_option_fix:true, click:{ html:this.htmls.btn_other_limit } }
							], delay:2, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'느낌버튼 클릭', click:{ html:this.htmls.btn_feel } } 
							], delay:10, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, func_option_fix:true, description:'좋아요버튼 클릭', click:{ html:this.htmls.btn_like2_do }, statuses:[{increase:'like_count'}] } 
							], delay:10, countdown:false},
							{list_action:[
								{ action:'CLICK', func:'review', func_option:this.funcs_option.review, description:'댓글 입력창 클릭', click:{ html:this.htmls.review_textarea } }
							], delay:5, countdown:false},
							{list_action:[ 
								{ action:'INPUT', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력', input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } 
							], delay:5, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_do}, statuses:[{increase:'review_count'}] } 
							], delay:5, countdown:false},
							{list_action:[
								{ action:'TRYCATCH',
									try : {
										list_step:[
											// 끝났을 때 resolve, 끝나지 않았을 때 reject 
											{list_action:[ { action:'COMPARE', description:'작업 시간 확인', compare:{ type:'>=', pandoras:[{time:'current_time'}, {status:'startmoment_time', additional_work:{ plus:{setting:'work_time_limit', multiple:{basic:3600000} } } }] } } ], delay: 2, countdown:false},
											{list_action:[ { action:'CLICK', click:{ html:this.htmls.logout_prepare, delete:[{component:'property', name:'href'}] } } ], delay: 1, countdown:false},
											{list_action:[ { action:'CLICK', description:'로그아웃', click:{ html:this.htmls.logout } } ], delay: 1, countdown:false},
											{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
										],
										countdown:false
									},
									catch : {
										list_step:[
											{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false}
										],
										countdown:false
									}
								}
							], delay:10, countdown:false}
						],
						delay:this.intervals.work
					}
				],
				stop:[]
			};

		});

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('kakaogrammerUnfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'kakaogrammer';
			this.version_key = 'unfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['link_name', '_displayName']},
					split:{ attr:'href', params:['/'] }
				},
				tab_photo:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['사진']}
				},
				tab_movie:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['동영상']}
				},
				btn_friend_apply:{ tag:'a',
					classes:{list:['link_friend']},
					innerOuterHTMLs:{list:['신청']}
				},
				text_total_apply:{ tag:'span',
					classes:{list:['_count']},
					split:{ html:'innerHTML' },
					decent_index:4
				},
				box_scroll:{ tag:'ul',
					// parent_html:{ tag:'div',
					// 	classes:{list:['_list', 'inner_tabcont']},
					// 	properties:{list:['style="overflow: hidden; height: 634px;"']}
					// },
					classes:{list:['list_cate', 'list_cate_send']},
					properties:{list:['data-part-name', 'style="display: block;"']}
				},
				box_apply:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['list_cate', 'list_cate_send']},
						properties:{list:['data-part-name']}
					},
					properties:{list:['data-model']}
				},
				btn_friend_applying:{ tag:'button',
					classes:{list:['btn_link']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['신청취소']}
				},
				btn_friend_applying_confirm:{ tag:'a',
					classes:{list:['btn_com', 'btn_or', '_dialogOk', '_dialogBtn']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['확인']}
				}
			};

			// Url Section
			this.urls = {
				unfriend_work:{ basic:'https://story.kakao.com/', changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.unfriend_work], condition:'AND'},
						htmls : {list:[this.htmls.tab_photo, this.htmls.tab_movie], condition:'AND'},
						list_step:[
							{list_action:[ { action:'CLICK', func:'unfriend', description:'신청 버튼 클릭', click:{ html:this.htmls.btn_friend_apply, delete:[{component:'property', name:'href'}] } } ], delay:3},
							{list_action:[ { action:'SAVE', func:'unfriend', description:'총 친구요청 수 저장', save:{ pandoras:[{html:this.htmls.text_total_apply, type:'NUMBER'}, {status:'unfriend_total'}], delay_position:50 } } ], delay:2 },
							{list_action:[ { action:'SCROLL', func:'unfriend', description:'친구요청 검색', scroll:{ interval:1, html:this.htmls.box_scroll, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_apply, type:'COUNT'}, {status:'unfriend_total', type:'NUMBER'} ], message:'총 요청', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'STATUS', func:'unfriend', status:{ set:'fix_number', value:0 } } ], delay:1 },
							{list_action:[ { action:'STATUS', func:'unfriend', status:{ set:'unfriend_count', value:0 } } ], delay:1 },
							{list_action:[ { action:'LOOP', func:'unfriend', description:'요청 취소 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 설정', target:{ html:this.htmls.box_apply, index:{status:'fix_number', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:5 },
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청취소 클릭', click:{ target:true, html:this.htmls.btn_friend_applying } } ], delay:5, statuses:[{increase:'unfriend_count'}]},
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청취소 확인 클릭', click:{ html:this.htmls.btn_friend_applying_confirm, delete:[{component:'property', name:'href'}] } } ], delay:5},
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{type:'>=', pandoras:[{status:'unfriend_count', type:'NUMBER'}, {status:'unfriend_total', type:'NUMBER'}], message:'요청취소 중'},
									delay:this.intervals.work
								}
							} ] }
						]
					}
				]
			};


		});

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('pholagrammerFollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'pholagrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['btn_my']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['My Account']},
					split:{ attr:'href', params:['/my/', '/profile'] }
				},
				input_search:{ tag:'input',
					classes:{list:['sch_input_text', '_input_search']},
					properties:{list:['id="sch_input_text"', 'type="text"']},
				},
				tab_post:{ tag:'a',
					classes:{list:['btn_tab', 'btn_tab_on']},
					properties:{list:['data-search-filter', 'onclick']},
					innerOuterHTMLs:{list:['포스트']}
				},
				btn_keyword :{ tag:'a',
					classes:{list:['link_sch_tag']},
					properties:{list:['data-search-keyword', 'onclick']},
				},
				btn_post_more :{ tag:'a',
					classes:{list:['btn_view_more']},
					properties:{list:['data-persist-component']},
					href:'/post/',
					innerOuterHTMLs:{list:['더보기']},
					split:{ attr:'href', params:[] }
				},
				div_spam:{ tag:'span',
					classes:{list:['item_data _post_content']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }},
					indexes:[0]
				},
				div_spammer:{ tag:'a',
					classes:{list:['profile_wrap']},
					properties:{list:['data-persist-component']},
					href:'/my/',
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				btn_follow_do :{ tag:'a',
					classes:{list:['btn_follow']},
					not_classes:{list:['btn_follow_on']},
					properties:{list:['id="follow_btn"', 'data-follow-component="MEMBER"', 'onclick']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_follow_did :{ tag:'a',
					classes:{list:['btn_follow', 'btn_follow_on']},
					properties:{list:['id="follow_btn"', 'data-follow-component="MEMBER"', 'onclick']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_like_do :{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['item_btns_wrap']} },
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt']},
					not_classes:{list:['on']},
					properties:{list:['data-likeit-component', 'onclick']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_like_did :{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['item_btns_wrap']} },
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt', 'on']},
					properties:{list:['data-likeit-component', 'onclick']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				input_review :{ tag:'textarea',
					classes:{list:['u_cbox_text']},
					properties:{list:['id="cbox_module__write_textarea"']}
				},
				btn_review_do :{ tag:'button',
					classes:{list:['u_cbox_btn_upload']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['등록']}
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'http://www.pholar.co/search', changing:false },
				work:{ basic:'http://www.pholar.co/post/', changing:false },
				detail:{ basic:'', extra:{list:[ { html:this.htmls.btn_post_more, random:true } ] } }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' },
				search:{ setting_key:'list_search_tag', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.input_search, this.htmls.tab_post], condition:null},
						list_step:[
							{list_action:[ { action:'INPUT', description:'검색어 입력', input:{ html:this.htmls.input_search, texts:[this.texts.search]} } ], delay:10},
							{list_action:[ { action:'CLICK', description:'관련 키워드 보기', click:{ html:this.htmls.tab_post } } ], delay:10},
							{list_action:[ { action:'CLICK', description:'키워드 선택', click:{ html:this.htmls.btn_keyword } } ], delay:10},
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:5 } } ], delay:60},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_follow_do, this.htmls.btn_follow_did, this.htmls.btn_like_do, this.htmls.btn_like_did], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'CHECK', func:'follow', 	description:'팔로우 검사', 	check:{ htmls:[ {html:this.htmls.btn_follow_did, 	exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ]}},
								{ action:'CHECK', func:'like', 		description:'좋아요 검사', 	check:{ htmls:[ {html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음'} ] } },
								{ action:'CHECK', 								description:'스팸/스팸유저 검사', 		check:{ htmls:[ {html:this.htmls.div_spam, 			exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:10},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:10},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review,	description:'댓글 입력창 열기', click:{ html:this.htmls.input_review} } ], delay:5},
							{list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_do}, log_push:true, statuses:[{increase:'review_count'}] } ], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('pholagrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, grammerGetService){
			this.grammer_key = 'pholagrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			
			this.interval_search = numberService.getRandomOfNumber(this.getSetting('interval_search'), 50);
			this.interval_work = numberService.getRandomOfNumber(this.getSetting('interval_work'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:'http://www.pholar.co/search', changing:false },
				url_work:{ basic:'http://www.pholar.co/post/', changing:false },
				url_home:{ basic:'http://www.pholar.co', changing:false }
			};
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.url_search_tag, this.urls.url_search_location], condition:'OR'},
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						],
						delay:this.interval_search
					}
				],
				stop:[]
			};
		});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('pholagrammerUnfollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'pholagrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['btn_my']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['My Account']},
					split:{ attr:'href', params:['/my/', '/profile'] }
				},
				text_follower:{ tag:'a',
					classes:{list:['box_sub']},
					properties:{list:['data-persist-component="unique_idx2"', 'data-persist-param']},
					innerOuterHTMLs:{list:['팔로워']},
					split:{ html:'innerHTML', params:['<em class="cnt_num">','</em>'], type:'NUMBER' }
				},
				text_following:{ tag:'a',
					classes:{list:['box_sub']},
					properties:{list:['data-persist-component="unique_idx2"', 'data-persist-param']},
					innerOuterHTMLs:{list:['팔로잉']},
					split:{ html:'innerHTML', params:['<em class="cnt_num">','</em>'], type:'NUMBER' }
				},
				tab_follower:{ tag:'h2',
					classes:{list:['follow_head', 'my_follow']},
					innerOuterHTMLs:{list:['님의 팔로워']}
				},
				tab_following:{ tag:'h2',
					classes:{list:['follow_head']},
					innerOuterHTMLs:{list:['님의 팔로잉']}
				},
				tab_following_user:{ tag:'a',
					classes:{list:['btn_tab', 'btn_tab_on']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['유저']}
				},
				box_user:{ tag:'li',
					classes:{list:['item_follow_wrap']}
				},
				text_userid:{ tag:'a',
					classes:{list:['link_profile']},
					properties:{list:['href', 'title="계정 상세페이지"', 'onclick']},
					split:{ attr:'href', params:[null, null] }
				},
				btn_unfollow_do:{ tag:'a',
					classes:{list:['btn_follow', 'btn_follow_on']},
					properties:{list:['data-follow-component="MEMBER"', 'data-member-no']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				// btn_unfollow_more:{ tag:'div',
				// 	classes:{list:['_more', 'follow_view_more']},
				// 	innerOuterHTMLs:{list:['리스트 더 보기']}
				// }
				btn_unfollow_more:{ tag:'a',
					classes:{list:['btn_view_more']},
					// properties:{list:['href', 'data-more-type="next"', 'data-request-param']},
					innerOuterHTMLs:{list:['리스트 더 보기']}
				},
				btn_follow_do:{ tag:'a',
					classes:{list:['btn_follow', 'btn_follow_on']},
					properties:{list:['data-follow-component', 'data-member-no']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_edit:{ tag:'a',
					classes:{list:['btn_setting', '_btn_toggle_tools']},
					properties:{list:['title="설정하기"']},
					innerOuterHTMLs:{list:['설정하기']}
				},
				access_denied:{ tag:'span',
					classes:{list:['ly_inform_msg']}
				}
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'http://www.pholar.co/my/', extra:{list:[{html:this.htmls.identification}, '/profile']}, changing:false },
				follower:{ basic:'http://www.pholar.co/my/', extra:{list:[{html:this.htmls.identification}, '/profile/follower']}, changing:false },
				following:{ basic:'http://www.pholar.co/my/', extra:{list:[{html:this.htmls.identification}, '/profile/following/user']}, changing:false },
				work_unfollow:{ basic:'http://www.pholar.co', extra:{list:[{status:'following_list', status_index:'unfollow_index', grammer_key:'pholagrammer', version_key:'unfollow'}]}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.btn_edit], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}] } } ], delay:3 },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}] } } ], delay:3 }
						],
						delay:6
					},
					{
						urls : {list:[this.urls.follower], condition:'AND'},
						htmls : {list:[this.htmls.tab_follower], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ interval:0.3, click:{ html:this.htmls.btn_unfollow_more, delete:[{component:'property', name:'href'}] }, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.text_userid, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 }
						]
					},
					{
						urls : {list:[this.urls.following], condition:'AND'},
						htmls : {list:[this.htmls.tab_following, this.htmls.tab_following_user], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ interval:0.3, click:{ html:this.htmls.btn_unfollow_more, delete:[{component:'property', name:'href'}] }, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', save:{ pandoras:[{html:this.htmls.text_userid, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:3 },
							{list_action:[ { action:'EXCLUDE', func:'unfollow', description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:3},
							{list_action:[ { action:'STATUS', func:'unfollow', status:{ set:'unfollow_index', value:0 } } ], delay:2},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2},
							{list_action:[ { action:'GO', func:'unfollow', description:'언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}
						]
					},
					{
						urls : {list:[this.urls.work_unfollow], condition:'OR'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.access_denied], condition:'OR'},
						list_step:[
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', func:'unfollow',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'unfollow', description:'언팔로우 가능 여부 검사', check:{ htmls:[ {html:this.htmls.access_denied, exist:false, message:'접근 불가'} ] } } ], delay:2},
													{list_action:[ { action:'MESSEAGE', func:'unfollow', message:{ text:'언팔 예정', delay_position:0 } } ], delay: 1, countdown:false },
													{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ html:this.htmls.btn_follow_do, delete:[{component:'property', name:'href'}] } } ], delay:10}
												],
												countdown:false
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'unfollow', message:{ text:'언팔로우 불가 계정' } } ], delay:2, countdown:false }
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'unfollow_index'} ] } } ], delay:1, countdown:false },
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false},
													{list_action:[ { action:'TRYCATCH', func:'unfollow',
														try : {
															list_step:[
																{list_action:[ { action:'COMPARE', description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'unfollow_index', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}] } } ], delay:3, countdown:false},
																{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
															],
															countdown:false
														},
														catch : {
															list_step:[
																{list_action:[ { action:'GO', description:'다음 언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:20 } } ], delay:10, countdown:false}
															]
														}
													} ]}
												],
												countdown:false
											}
										} ]}
									]
								}
							} ]}
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('twitgrammerFollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'twitgrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['account-summary', 'account-summary-small', 'js-nav']},
					properties:{list:['data-nav="view_profile"']},
					split:{ attr:'href', params:['/'] }
				},
				recent_tab_tweet:{ tag:'a',
					classes:{list:['AdaptiveFiltersBar-target', 'AdaptiveFiltersBar-target--link', 'u-textUserColor', 'js-nav']},
					properties:{list:['href', 'data-nav="search_filter_tweets"']},
					href:'/search?',
					innerOuterHTMLs:{list:['최신']}
				},
				post_tweet:{ tag:'div',
					parent_html:{tag:'li', classes:{list:['js-stream-item', 'stream-item']}, properties:{list:['data-item-id', 'data-item-type']}},
					classes:{list:['tweet', 'js-stream-tweet', 'js-actionable-tweet', 'js-profile-popup-actionable', 'original-tweet', 'js-original-tweet']},
					properties:{list:['data-tweet-id', 'data-item-id', 'data-permalink-path', 'data-screen-name', 'data-name', 'data-user-id', 'data-you-follow', 'data-follows-you', 'data-you-block', 'data-disclosure-type']}
				},
				main_tweet:{ tag:'div',
					classes:{list:['permalink-inner', 'permalink-tweet-container']}
				},
				div_spam:{ tag:'p',
					parent_html:{ tag:'div', classes:{list:['js-tweet-text-container']} },
					classes:{list:['TweetTextSize', 'TweetTextSize--26px', 'js-tweet-text', 'tweet-text']},
					properties:{list:['data-aria-label-part']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'strong',
					classes:{list:['fullname', 'js-action-profile-name', 'show-popup-with-id']},
					properties:{list:['data-aria-label-part']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				check_follow:{ tag:'div',
					classes:{list:['user-actions', 'btn-group', 'not-muting', 'not-following']},
					properties:{list:['data-user-id', 'data-screen-name', 'data-name', 'data-protected="false"']}
				},
				check_following:{ tag:'div',
					classes:{list:['user-actions', 'btn-group', 'not-muting', 'including', 'following']},
					properties:{list:['data-user-id', 'data-screen-name', 'data-name', 'data-protected="false"']} 
				},
				btn_follow:{ tag:'button',
					classes:{list:['user-actions-follow-button', 'js-follow-btn', 'follow-button', 'btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['팔로우', '팔로잉', '언팔로우']}
				},
				check_liked:{ tag:'div',
					classes:{list:['IconContainer', 'js-tooltip']},
					properties:{list:['data-original-title']},
					innerOuterHTMLs:{list:['마음에 들어함']}
				},
				btn_like:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['ProfileTweet-action', 'ProfileTweet-action--favorite', 'js-toggleState']} },
					classes:{list:['ProfileTweet-actionButton', 'js-actionButton', 'js-actionFavorite']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['마음에 들어요']}
				},
				input_review_open:{ tag:'form',
					parent_html:{ tag:'div', classes:{list:['inline-reply-tweetbox', 'swift']} },
					classes:{list:['t1-form', 'tweet-form', 'condensed']},
					properties:{list:['method="post"', 'target="tweet-post-iframe"', 'data-default-text', 'data-condensed-text', 'action', 'enctype', 'data-poll-composer-rows', 'data-poll-duration']}
				},
				// input_review:{ tag:'div',
				// 	parent_html:{ tag:'div',
				// 		parent_html:{ tag:'div',
				// 			parent_html:{ tag:'div',
				// 				parent_html:{ tag:'div', 
				// 					classes:{list:['RichEditor', 'RichEditor--emojiPicker', 'is-fakeFocus']}
				// 				},
				// 				classes:{list:['RichEditor-container', 'u-borderRadiusInherit']}
				// 			},
				// 			classes:{list:['RichEditor-scrollContainer', 'u-borderRadiusInherit']}
				// 		},
				// 		classes:{list:['tweet-box', 'rich-editor']}
				// 	}
				// },
				input_review:{ tag:'div',
					parent_html:{ tag:'div',
						parent_html:{ tag:'div', classes:{list:['RichEditor-scrollContainer', 'u-borderRadiusInherit']}, index:3 },
						classes:{list:['tweet-box', 'rich-editor']},
						properties:{list:['aria-labelledby', 'name="tweet"', 'contenteditable="true"', 'spellcheck="true"', 'role="textbox"', 'aria-multiline="true"', 'data-placeholder-default="무슨 일이 일어나고 있나요?"', 'data-placeholder-poll-composer-on="질문하기..."', 'data-placeholder-reply="내 답글을 트윗합니다."', 'dir="ltr"', 'aria-autocomplete="list"', 'aria-expanded="false"', 'aria-owns']},
						innerOuterHTMLs:{list:['tweet-box-reply-to','typeahead-dropdown'], type:'OUTERHTML'}
					},
					not_classes:{list:['topbar', 'js-topbar', 'global-nav']},
					not_properties:{list:['data-at-shortcutkeys', 'id="doc"']},
					innerOuterHTMLs:{list:['<s>@</s>','twitter-atreply', 'pretty-link']}
				},
				btn_review_do:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['TweetBoxToolbar-tweetButton', 'tweet-button']}, index:1 },
					classes:{list:['btn', 'primary-btn', 'tweet-action', 'disabled', 'tweet-btn', 'js-tweet-btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['트윗하기']}
				},
				btn_review_changed:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['TweetBoxToolbar-tweetButton', 'tweet-button']}, index:1 },
					classes:{list:['btn', 'primary-btn', 'tweet-action', 'tweet-btn', 'js-tweet-btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['트윗하기']}
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'https://twitter.com/search?f=tweets&vertical=default&q=', extra:{list:[[{ setting_key:'list_search_tag', method:'getRandom' }], '&src=typd']}, changing:false },
				work:{ basic:'https://twitter.com', extra:{list:[]}, changing:true }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:10 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.recent_tab_tweet], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'트윗 검색', scroll:{ interval:5 } } ], delay:20},
							{list_action:[ { action:'CLICK', description:'트윗 선택', click:{ html:this.htmls.post_tweet } } ], delay:5},
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.check_following, exist:false, message:'이미 팔로잉 중'}, {html:this.htmls.check_follow, exist:true, message:'팔로우 버튼 없음'} ] } },
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_liked, exist:false, message:'이미 좋아요 중'} ] } },
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } } 
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like}, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow}, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, description:'댓글 입력창 열기', change:{ html:this.htmls.input_review_open, classes:{ remove:{list:['condensed']}}}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력', change:{ html:this.htmls.input_review, replaceChilds:{list:[{ text:this.texts.review, position:'LAST' } ] } } } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 버튼 활성화', change:{ html:this.htmls.btn_review_do, classes:{ remove:{list:['disabled'] } }, properties:{ remove:{list:[{name:'disabled'}] } } } } ], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_changed }, log_push:true, statuses:[{increase:'review_count'}] } ], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('twitgrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'twitgrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval_search = numberService.getRandomOfNumber(this.getSetting('interval_search'), 50);
			this.interval_work = numberService.getRandomOfNumber(this.getSetting('interval_work'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search_tag:{ basic:'https://twitter.com/search?f=tweets&vertical=default&q=', extra:{list:[arrayService.getRandom(this.getSetting('list_search_tag'))]}, changing:false },
				url_search_location:{ basic:'https://twitter.com/search?f=tweets&vertical=default&q=', extra:{list:[arrayService.getRandom(this.getSetting('list_search_location'))]}, changing:false },
				url_work:{ basic:'https://twitter.com/', changing:false },
				url_home:{ basic:'https://twitter.com', changing:false }
			};
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.url_search_tag, this.urls.url_search_location], condition:'OR'},
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						],
						delay:this.interval_search
					}
				],
				stop:[]
			};
		});

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('twitgrammerUnfollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'twitgrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['account-summary', 'account-summary-small', 'js-nav']},
					properties:{list:['data-nav="view_profile"']},
					split:{ attr:'href', params:['/'] }
				},
				text_follower:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--followers']},
					not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로워']},
					split:{ html:'innerHTML', params:['<span class="ProfileNav-value" data-is-compact="false">','</span>'], type:'NUMBER' }
				},
				text_following:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--following']},
					// not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로잉']},
					split:{ html:'innerHTML', params:['<span class="ProfileNav-value" data-is-compact="false">','</span>'], type:'NUMBER' }
				},
				tab_follower:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--followers']},
					not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로워']}
				},
				tab_follower_active:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--followers', 'is-active']},
					innerOuterHTMLs:{list:['팔로워']}
				},
				tab_following:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--following']},
					not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				tab_following_active:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--following', 'is-active']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				box_user:{ tag:'div',
					classes:{list:['ProfileCard', 'js-actionable-user']},
					properties:{list:['data-screen-name', 'data-user-id', 'data-feedback-token', 'data-impression-id']}
				},
				text_username:{ tag:'a',
					classes:{list:['ProfileNameTruncated-link', 'u-textInheritColor', 'js-nav', 'js-action-profile-name']},
					properties:{list:['data-aria-label-part', 'href']},
					split:{ attr:'href', params:['/'] }
				},
				btn_unfollow_do:{ tag:'button',
					classes:{list:['user-actions-follow-button', 'js-follow-btn', 'follow-button', 'btn', 'small', 'small-follow-btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['팔로잉', '언팔로우']}
				}
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'https://twitter.com/', extra:{list:[{html:this.htmls.identification}]}, changing:false },
				follower:{ basic:'https://twitter.com/followers', extra:{list:[]}, changing:false },
				following:{ basic:'https://twitter.com/following', extra:{list:[]}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.tab_follower, this.htmls.tab_following], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}] } } ], delay:50 },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}] } } ], delay:50 }
						],
						delay:6
					},
					{
						urls : {list:[this.urls.follower], condition:'AND'},
						htmls : {list:[this.htmls.tab_follower_active, this.htmls.tab_following], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워 검색 중', count_confirm:this.getSetting('count_confirm'), perentage_error:this.getSetting('perentage_error') } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 }
						]
					},
					{
						urls : {list:[this.urls.following], condition:'AND'},
						htmls : {list:[this.htmls.tab_follower, this.htmls.tab_following_active], condition:'OR'},
						list_step:[
							// 팔로잉 검색 시에 comparison이 없다.
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'following_total', type:'NUMBER'}], message:'팔로잉 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'following_total', type:'NUMBER'}], message:'팔로잉 검색 중', count_confirm:this.getSetting('count_confirm'), perentage_error:this.getSetting('perentage_error') } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'SAVE', func:'unfollow', description:'요청 수 저장', save:{ pandoras:[{html:this.htmls.box_user, type:'COUNT'}, {status :'following_total'}] } } ], delay:5 },
										{list_action:[ { action:'TARGET', func:'unfollow', description:'타겟 설정', target:{ html:this.htmls.box_user, index:{status:'unfollow_count', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:5},
										{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ target:true, html:this.htmls.btn_unfollow_do, comparison:{ type:'!in', pandoras:[{ target:true, html:this.htmls.text_username, type:'TEXT' }, {status:'follower_list'}], reject:{timeoutPromise:'RESOLVE'}, messages:['맞팔이 되어있지 않은 유저 (언팔로우 예정)', '맞팔이 되어있는 유저 (언팔로우 제외)'] } }, log_push:true, statuses:[{increase:'unfollow_count'}, {increase:'count'}] } ], delay: 10 },
										{list_action:[ { action:'TARGET', func:'unfollow', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{type:'>=', pandoras:[{status:'unfollow_count', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}], message:'언팔로우 중' },
									delay:this.intervals.work
								}
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('vingrammerFollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'vingrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['sidebar-profile-thumbnail']},
					properties:{list:['ui-sref="user.cover(currentUser)"', 'ui-sref-opts']},
					split:{ attr:'href', params:['/'] }
				},
				input_search:{ tag:'input',
					classes:{list:['search-input']},
					properties:{list:['type="text"', 'ng-model']},
					innerOuterHTMLs:{list:['검색어를 입력해 주세요'], type:'OUTERHTML'}
				},
				btn_keyword:{ tag:'a',
					classes:{list:['search-explore-keyword-link']},
					properties:{list:['ui-sref']},
					href:'/popular/',
					split:{ attr:'href', params:[] }
				},
				popular_posts:{ tag:'a',
					classes:{list:['ncard-contents-group']},
					properties:{list:['ng-switch-when']}
				},
				post_title:{ tag:'a',
					classes:{list:['ncard-text']},
					properties:{list:['ng-href']},
					innerOuterHTMLs:{list:['/posts/'], type:'OUTERHTML'},
					split:{ attr:'href', params:[] }
				},
				div_spam:{ tag:'p',
					parent_html:{ tag:'div', properties:{list:['vi-autolink="block.content"']} },
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'div',
					classes:{list:['collection-title']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				btn_follow_do:{ tag:'a',
					classes:{list:['collection-follow']},
					not_classes:{list:['collection-follow--unfollow']},
					properties:{list:['ng-switch-when', 'ng-click="followCollection(collection, $refreshSlick)"']},
					innerOuterHTMLs:{list:['Follow']}
				},
				btn_follow_did:{ tag:'a',
					classes:{list:['collection-follow', 'collection-follow--unfollow']},
					properties:{list:['ng-switch-when', 'ng-click="unfollowCollection(collection, $refreshSlick)"']},
					innerOuterHTMLs:{list:['UnFollow']}
				},
				check_like_did:{ tag:'i',
					parent_html:{ tag:'a', classes:{list:['lcard-button-link', 'onboarding-step-like']}, properties:{list:['ng-click="toggleCardLike()"']}, innerOuterHTMLs:{list:['카드가 좋다면 좋아요를 눌러주세요.']}},
					classes:{list:['card-like-icon', 'active']},
					properties:{list:['ng-class="{ active:post.is_liked }"']}
				},
				btn_like_do:{ tag:'a',
					classes:{list:['lcard-button-link', 'onboarding-step-like']},
					properties:{list:['ng-click="toggleCardLike()"']},
					innerOuterHTMLs:{list:['카드가 좋다면 좋아요를 눌러주세요.']}
				},
				input_review:{ tag:'textarea',
					properties:{list:['ng-focus', 'ng-keypress', 'vi-autosize', 'ng-attr-placeholder']}
				},
				btn_review_do:{ tag:'button',
					classes:{list:['btn', 'btn-primary']},
					properties:{list:['ng-click="addComment()"']}
				}
			};

			// Url Section
			this.urls = {
				search1:{ basic:'https://www.vingle.net/search', extra:{list:[]}, changing:false },
				search2:{ basic:'https://www.vingle.net/popular', extra:{list:[]}, changing:false },
				review:{ basic:'https://www.vingle.net/api/cards/', extra:{list:[urlService.getSplit('https://www.vingle.net/posts/','-'), '/comments' ]} },
				list:{ basic:'', extra:{list:[ { html:this.htmls.btn_keyword, random:true } ] } },
				detail:{ basic:'https://www.vingle.net', extra:{list:[ { html:this.htmls.post_title, random:true } ] } },
				work:{ basic:'https://www.vingle.net/posts/', changing:false }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				// like:{ click:this.getClick('like'), percentage:100, boolean:grammerGetService.getBooleanFromBooleanAndPercentage(this.getClick('like'),100) },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search1], condition:'OR'},
						htmls : {list:[this.htmls.input_search, this.htmls.btn_keyword], condition:'AND'},
						list_step:[
							{list_action:[ { action:'GO', description:'키워드 선택', go:{ url:this.urls.list, delay_position:100 } } ], delay:100}
						],
						delay:5
					},
					{
						urls : {list:[this.urls.search2], condition:'OR'},
						htmls : {list:[], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:5 } } ], delay:90},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_follow_do, this.htmls.btn_follow_did, this.htmls.btn_friend_did, this.htmls.check_like_did, this.htmls.btn_like_do], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로잉 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ] } },
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음'} ]}},
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{  htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, statuses:[{increase:'like_count'}] }
							], delay:10},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, statuses:[{increase:'follow_count'}] }
							], delay:10},
							{list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]},  message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[
								{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글서버 등록', 
									post:{ 
										url:this.urls.review, 
										data:{ comment:{ content:this.texts.review }, 
										post_id:Number(urlService.getSplit('https://www.vingle.net/posts/','-'))}
									}, 
									message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능',
									statuses:[{increase:'review_count'}]
								}
							], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('vingrammerUnfollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'vingrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['sidebar-profile-thumbnail']},
					properties:{list:['ui-sref="user.cover(currentUser)"', 'ui-sref-opts']},
					split:{ attr:'href', params:['/'] }
				},
				btn_collections_following_do:{ tag:'a',
					classes:{list:['user-sub-menu-item', 'active']},
					properties:{list:['ui-sref-active="active"', 'ui-sref="user.collections.following"', 'href']},
					innerOuterHTMLs:{list:['팔로우하고 있는 컬렉션']},
					split:{ html:'innerHTML', params:[null,'개의 팔로우하고 있는 컬렉션'], type:'NUMBER' }
				},
				btn_unfollow_do:{ tag:'a',
					classes:{list:['btn', 'btn-collection-follow', 'user-collection-btn', 'btn-collection-follow--default']},
					properties:{list:['ng-click="toggleFollowCollection()"']},
					innerOuterHTMLs:{list:['언팔로우']}
				}
			};

			// Url Section
			this.urls = {
				work:{ basic:'https://www.vingle.net/', extra:{list:[{html:this.htmls.identification}, '/following_collections']}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.btn_collections_following_do, this.htmls.btn_unfollow_do], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'컬렉션 수 저장', save:{ pandoras:[{html:this.htmls.btn_collections_following_do, type:'NUMBER'}, {status :'collections_total'}] } } ], delay:3 },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'컬렉션 검색', scroll:{ interval:0.3, comparison:{ type: '>=', pandoras : [ { html:this.htmls.btn_unfollow_do }, {status:'collections_total', type:'NUMBER'} ], message:'컬렉션 검색 중' } } } ] },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ html:this.htmls.btn_unfollow_do }, log_push:true, statuses:[{increase:'unfollow_count'}, {increase:'count'}], delay: 100 } ] }
									],
									comparison:{type:'>=', pandoras:[{status:'unfollow_count', type:'NUMBER'}, {status:'collections_total', type:'NUMBER'}], message:'언팔로우 중' },
									delay:this.intervals.work
								}
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('youtugrammerFollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'youtugrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['yt-masthead-picker-header', 'yt-masthead-picker-active-account']},
					properties:{list:['href']},
					split:{html:'innerHTML'}
				},
				div_spam:{ tag:'span',
					classes:{list:['watch-title']},
					properties:{list:['dir']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'a',
					classes:{list:['g-hovercard', 'yt-uix-sessionlink', 'spf-link']},
					properties:{list:['data-ytid', 'data-sessionlink']},
					href:'/channel/',
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				btn_videotitle:{ tag:'a',
					classes:{list:['yt-uix-sessionlink', 'yt-uix-tile-link', 'yt-ui-ellipsis', 'yt-ui-ellipsis-2', 'spf-link']},
					properties:{list:['data-sessionlink', 'title', 'aria-describedby']},
					href:'/watch?',
					split:{ attr:'href', params:[] }
				},
				btn_like_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-opacity', 'yt-uix-button-has-icon', 'no-icon-markup', 'like-button-renderer-like-button', 'like-button-renderer-like-button-unclicked']},
					not_classes:{list:['like-button-renderer-like-button-clicked', 'hid']},
					properties:{list:['type="button"', 'data-post-data']}
				},
				btn_like_did:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-opacity', 'yt-uix-button-has-icon', 'no-icon-markup', 'like-button-renderer-like-button', 'like-button-renderer-like-button-clicked']},
					not_classes:{list:['like-button-renderer-like-button-unclicked', 'hid']},
					properties:{list:['type="button"', 'data-post-data']}
				},
				btn_follow_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribe-branded', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer']},
					properties:{list:['type="button"', 'onclick']},
					not_properties:{list:['data-is-subscribed="true"']}
				},
				btn_follow_did:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribe-branded', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer']},
					properties:{list:['type="button"', 'onclick', 'data-is-subscribed="true"']}
				},
				btn_stop_video:{ tag:'video',
					classes:{list:['video-stream', 'html5-main-video']}
				},
				btn_review_open:{ tag:'div',
					classes:{list:['comment-simplebox-renderer-collapsed', 'comment-simplebox-trigger']},
					properties:{list:['data-simplebox-id="comment-simplebox-create-comment"']},
					innerOuterHTMLs:{list:['공개 댓글 추가']}
				},
				input_review:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['comment-simplebox']}, properties:{list:['id="comment-simplebox"']}},
					classes:{list:['comment-simplebox-text']},
					properties:{list:['role="textbox"', 'aria-multiline="true"']}
				},
				btn_review_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-primary', 'yt-uix-button-empty', 'comment-simplebox-submit', 'yt-uix-sessionlink']},
					properties:{list:['type="button"', 'onclick', 'aria-label', 'data-target', 'data-params', 'data-sessionlink', 'data-sessionlink-target']},
					innerOuterHTMLs:{list:['댓글']}
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'https://www.youtube.com/results?search_query=', extra:{list:[[{ setting_key:'list_search_tag', method:'getRandom' }],['&sp=EgIIAg%253D%253D', '&sp=EgIIAw%253D%253D', '&sp=EgIIBEgo6gMA', '&sp=EgIIBQ%253D%253D']]}, changing:false },
				detail:{ basic:'https://www.youtube.com', extra:{list:[ { html:this.htmls.btn_videotitle, random:true } ] } },
				work:{ basic:'https://www.youtube.com/watch?v=', changing:false },
				review:{ basic:'www.youtube.com/comment_service_ajax?action_create_comment=1', changing:false }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				// like:{ click:this.getClick('like'), percentage:100, boolean:grammerGetService.getBooleanFromBooleanAndPercentage(this.getClick('like'),100) },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.btn_videotitle], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'영상 검색', scroll:{ count:1 } } ], delay:80},
							{list_action:[ { action:'SCROLL', description:'위로 이동', scroll:{ direction:'UP', count:1} } ], delay:10},
							{list_action:[ { action:'GO', description:'영상 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_like_do, this.htmls.btn_like_did, this.htmls.btn_follow_do, this.htmls.btn_follow_did], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'아래로 이동', scroll:{ count:1} } ], delay:3},
							{list_action:[ { action:'SCROLL', description:'위로 이동', scroll:{ direction:'UP', count:1} } ], delay:3},
							{list_action:[
								{ action:'CHECK', func:'like',	description:'좋아요 검사', 	check:{ htmls:[ {html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음'} ] } },
								{ action:'CHECK', func:'follow',	description:'구독 검사', 	check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 구독 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'구독 버튼 없음'} ] } }
							], delay:5},
							{list_action:[ { action:'CLICK', description:'영상 정지', click:{ html:this.htmls.btn_stop_video } }, ], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do }, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'구독', click:{ html:this.htmls.btn_follow_do }, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, description:'댓글 입력창 열기', click:{ html:this.htmls.btn_review_open}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력', change:{ html:this.htmls.input_review, innerHTMLs:{ all:{ setting_key:'list_reviews', method:'getRandom' } } } } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 버튼 활성화', change:{ html:this.htmls.btn_review_do, properties:{ remove:{list:[{name:'disabled'}] } } } } ], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_do}, log_push:true, statuses:[{increase:'review_count'}] } ], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('youtugrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'youtugrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval = numberService.getRandomOfNumber(this.getSetting('setting_name_en'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('youtugrammerUnfollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'youtugrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Url Section
			this.urls = {
				work:{ basic:'https://www.youtube.com/subscription_manager', extra:{list:[]}, changing:false }
			};
			
			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['yt-masthead-picker-header', 'yt-masthead-picker-active-account']},
					properties:{list:['href']},
					split:{html:'innerHTML'}
				},
				text_subscription:{ tag:'h2',
					classes:{list:['subscription-manager-title']},
					innerOuterHTMLs:{list:['구독정보']},
					split:{ html:'innerHTML', params:['<b>','</b>개'], type:'NUMBER' }
				},
				btn_unfollow_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribed-branded', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer', 'hover-enabled']},
					properties:{list:['type="button"', 'onclick', 'aria-role="button"', 'aria-busy', 'aria-live', 'data-clicktracking', 'data-is-subscribed="True"', 'data-style-type']}
				},
				btn_unfollow_did:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer', 'yt-is-buffered', 'yt-uix-button-subscribe-branded']},
					properties:{list:['type="button"', 'onclick', 'aria-role="button"', 'aria-busy', 'aria-live', 'data-clicktracking', 'data-style-type']},
					not_properties:{list:['data-is-subscribed="True"']}
				}
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.btn_unfollow_do, this.htmls.btn_unfollow_did], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'채널 수 저장', save:{ pandoras:[{html:this.htmls.text_subscription, type:'NUMBER'}, {status:'channels_total'}] } } ], delay:3 },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'채널 검색', scroll:{ interval:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.text_subscription}, {status:'channels_total', type:'NUMBER'} ], message:'채널 검색 중' } } } ] },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ html:this.htmls.btn_unfollow_do }, log_push:true, statuses:[{increase:'unfollow_count'}, {increase:'count'}], delay: 100 } ] }
									],
									comparison:{type:'>=', pandoras:[{status:'unfollow_count', type:'NUMBER'}, {status:'channels_total', type:'NUMBER'}], message:'언팔로우 중' },
									delay:this.intervals.work
								}
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('postgrammerFollowService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'postgrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				// identification에서는 일반적인 getElements가 아니다. checkIdentification에서 getTextOfElementWithSplit 함수로 진행된다.
				identification:{ tag:'script',
					properties:{list:['type="text/javascript"']},
					innerOuterHTMLs:{list:['nhn=window.nhn']},
					split:{ html:'innerHTML', params:[',id:"','",memberNo'] }
				},
				post_tab:{ tag:'a',
					classes:{list:['tab1', 'on']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['포스트']}
				},
				series_tab:{ tag:'a',
					classes:{list:['tab2']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['시리즈']}
				},
				editor_tab:{ tag:'a',
					classes:{list:['tab3']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['에디터']} 
				},
				tag_tab:{ tag:'a',
					classes:{list:['tab4']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['태그']}
				},
				popular_post_bulletin:{	tag:'li',
					classes:{list:['_cds', 'check_visible']},
					properties:{list:['paramname', 'cursor', 'volumeno']},
					innerOuterHTMLs:{list:['팔로워', '스타에디터']}
				},
				post_bulletin:{ tag:'a',
					classes:{list:['link_end']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['<h3 class="tit_feed ell">']}
				},
				btn_more:{ tag:'button',
					classes:{list:['btn_lst_more', '_more', '_returnFalse']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['더보기']}
				},
				btn_like:{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['u_likeit_list_module']} },
					classes:{list:['u_likeit_list_btn', 'u_type_bright', 'u_none_txt']},
					properties:{list:['onclick', 'href']}
				},
				btn_like_did:{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['u_likeit_list_module']} },
					classes:{list:['u_likeit_list_btn', 'u_type_bright', 'u_none_txt', 'on']},
					properties:{list:['onclick', 'href']}
				},
				btn_follow:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['flt_r']} },
					classes:{list:['btn_flw', '__followAnchor']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_follow_did:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['flt_r']} },
					classes:{list:['btn_flw', '__followAnchor']},
					properties:{list:['onclick', 'style="display: none;"']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_review_submit:{ tag:'button',
					classes:{list:['u_cbox_btn_upload']},
					properties:{list:['data-action', 'data-log']},
					innerOuterHTMLs:{list:['등록']}
				},
				div_spammer:{ tag:'span',
					classes:{list:['nick']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				div_spam:{ tag:'p',
					parent_html:{ tag:'div', classes:{list:['se_textView']} },
					classes:{list:['se_textarea']}
				},
				input_review:{ tag:'textarea',
					classes:{list:['u_cbox_text']}
				},
				user_name:{ tag:'span',
					classes:{list:['ell']}
				},
				btn_recent:{ tag:'label',
					classes:{list:['option', '_createDate']},
					properties:{list:['data-type', 'onclick']},
					innerOuterHTMLs:{list:['최신순']}
				},
				btn_sticker_review:{ tag:'button',
					classes:{list:['u_cbox_btn_upload_sticker']},
					properties:{list:['data-action', 'data-log']},
					innerOuterHTMLs:{list:['스티커']}
				},
				btn_sticker_category:{ tag:'button',
					parent_html:{ tag:'li', classes:{list:['u_cbox_sticker_tab_item']}, properties:{list:['data-id="line_characters_in_love"']} },
					classes:{list:['u_cbox_sticker_tab_btn']},
					properties:{list:['type="button"', 'data-action', 'data-param']},
					innerOuterHTMLs:{list:['background-image:url']}
				},
				btn_sticker:{ tag:'button',
					parent_html:{ 
						parent_html:{ tag:'div', classes:{list:['u_cbox_sticker_area']}, not_properties:{list:['style="display: none;"']} },
						tag:'ul', classes:{list:['u_cbox_sticker_list']}, properties:{list:['data-id']} 
					},
					classes:{list:['u_cbox_sticker_btn']},
					properties:{list:['type="button"', 'data-action', 'data-param', 'data-animation']},
					index_range:15
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'http://post.naver.com/search/post.nhn?keyword=', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }], '&sortType=createDate.dsc&range=&term=all&navigationType=current' ]}, changing:false },
				work:{ basic:'http://post.naver.com/viewer/postView.nhn', changing:false },
				detail:{ basic:'http://post.naver.com/viewer/postView.nhn?', extra:{list:[ { html:this.htmls.post_bulletin, random:true } ]} }
			};

			// Interval Section
			this.intervals = {
				search:{ setting_key:'interval_search', method:'getRandomOfNumber', percentage:10 },
				work:{ setting_key:'interval_work', method:'getRandomOfNumber', percentage:10 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 }, day_limit:{ limit_setting_key:'like_limit', status_key:'like_limit_count' } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' }, day_limit:{ limit_setting_key:'follow_limit', status_key:'follow_limit_count' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' }, day_limit:{ limit_setting_key:'review_limit', status_key:'review_limit_count' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.post_tab, this.htmls.series_tab, this.htmls.editor_tab, this.htmls.tag_tab, this.htmls.post_bulletin], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_month'}, {status:'startday_month'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_date'}, {status:'startday_date'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:3, click:{ html:this.htmls.btn_more, delete:[{component:'property', name:'href'}] }} } ], delay:66},
							{list_action:[ { action:'REMOVE', description:'인기 게시물 제거', remove:{ html:this.htmls.popular_post_bulletin, all:true, delay_position:50 } } ], delay:5},
							{list_action:[ { action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, random:true, crawl_index:true, type:'innerHTML' } } ], delay:15},
							{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:2},
							{list_action:[ { action:'CLICK', description:'해당 게시물 선택', click:{ html:this.htmls.post_bulletin, index:{ status:'element_index' }, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_like, this.htmls.btn_like_did, this.htmls.btn_follow, this.htmls.btn_follow_did, this.htmls.btn_review_submit], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow, exist:true, message:'팔로우 버튼 없음' } ] } },
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like, exist:true, message:'좋아요 버튼 없음' } ] } },
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[ { action:'TRYCATCH', 
								try:{
									list_step:[
										{list_action:[
											{ action:'CONDITION', condition:{ conditions:[{setting:'sticker_review_boolean'}, {basic:true}] } }
										], delay:5, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like }, log_push:true, statuses:[{increase:'like_count'}, {increase:'like_limit_count'}] }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow }, log_push:true, statuses:[{increase:'follow_count'}, {increase:'follow_limit_count'}] }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, description:'스티커 댓글 클릭', click:{ html:this.htmls.btn_sticker_review } }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'스티커 종류 선택', click:{ html:this.htmls.btn_sticker_category, random:true }, log_push:true, statuses:[{increase:'review_count'}, {increase:'review_limit_count'}] }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'스티커 선택/ 댓글 등록', click:{ html:this.htmls.btn_sticker, random:true } }
										], delay:10, countdown:false}
									],
									delay:this.intervals.work
								},
								catch:{
									list_step:[
										{list_action:[
											{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like }, log_push:true, statuses:[{increase:'like_count'}, {increase:'like_limit_count'}] }
										], delay:25, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow }, log_push:true, statuses:[{increase:'follow_count'}, {increase:'follow_limit_count'}] }
										], delay:25, countdown:false},
										{list_action:[
											{ action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력', input:{ html:this.htmls.input_review, texts:[this.texts.review] } }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_submit }, log_push:true, statuses:[{increase:'review_count'}, {increase:'review_limit_count'}] }
										], delay:20, countdown:false}
									],
									delay:this.intervals.work
								}
							} ] }
						],
						statuses:[{increase:'count'}]
					}
				]
			};

		});

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('postgrammerUnfollowService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'postgrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				// identification에서는 일반적인 getElements가 아니다. checkIdentification에서 getTextOfElementWithSplit 함수로 진행된다.
				identification:{ tag:'script',
					properties:{list:['type="text/javascript"']},
					innerOuterHTMLs:{list:['nhn=window.nhn']},
					split:{ html:'innerHTML', params:['isLoggedIn:true,id:"','",memberNo'] }
				},
				btn_profile_edit:{ tag:'a',
					// classes:{list:['btn_set', 'profileEdit']},
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['설정']}
				},
				btn_profile_statistic:{ tag:'a',
					// classes:{list:['btn_t1']},
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['통계']}
				},
				text_follower:[
					{ tag:'span',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followerList.nhn'
						},
						classes:{list:['num']},
						split:{ html:'innerHTML' }
					},
					{ tag:'em',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followerList.nhn'
						},
						split:{ html:'innerHTML' }
					}
				],
				text_following:[
					{	tag:'span',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followingList.nhn'
						},
						classes:{list:['num']},
						split:{ html:'innerHTML' }
					},
					{ tag:'em',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followingList.nhn'
						},
						split:{ html:'innerHTML' }
					}
				],
				btn_invite_friend:{ tag:'span',
					classes:{list:['naver-splugin-c']},
					innerOuterHTMLs:{list:['친구 초대하기']}
				},
				btn_follower:{ tag:'a',
					// parent_html:{ tag:'div', classes:{list:['follow_state']} },
					properties:{list:['href']},
					href:'/my/followerList.nhn',
					innerOuterHTMLs:{list:['팔로워']},
					split:{ attr:'href', params:[null, null] }
				},
				btn_following:{ tag:'a',
					// parent_html:{ tag:'li', classes:{list:['inner']} },
					properties:{list:['href']},
					href:'/my/followingList.nhn',
					innerOuterHTMLs:{list:['팔로잉']},
					split:{ attr:'href', params:[null, null] }
				},
				box_follower_following_link:{ tag:'a',
					// parent_html:{ tag:'div', classes:{list:['info_top']} },
					classes:{list:['user_lnk']},
					properties:{list:['href', 'onclick']},
					href:'/my.nhn?navigationType=push',
					innerOuterHTMLs:{list:['<strong class="post_tit ell">']},
					split:{ attr:'href', params:[null, null] }
				},
				btn_editor:{ tag:'a',
					// parent_html:{ tag:'li' },
					properties:{list:['href']},
					classes:{list:['tab1', 'on']},
					innerOuterHTMLs:{list:['에디터']}
				},
				btn_series:{ tag:'a',
					// parent_html:{ tag:'li' },
					properties:{list:['href']},
					classes:{list:['tab3']},
					innerOuterHTMLs:{list:['시리즈']}
				},
				btn_tag:{ tag:'a',
					// parent_html:{ tag:'li' }, 
					properties:{list:['href']},
					classes:{list:['tab2']},
					innerOuterHTMLs:{list:['태그']}
				},
				head_following:{ tag:'h2',	
					innerOuterHTMLs:{list:['팔로잉']}
				},
				head_follower:{ tag:'h2',
					innerOuterHTMLs:{list:['팔로워']}
				},
				box_user_follower_following:{ tag:'li',
					classes:{list:['user_info_item']}
				},
				btn_more:{ tag:'button',
					classes:{list:['btn_lst_more', '_more', '_returnFalse']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['더보기']}
				},
				btn_my_following:[
					{ tag:'a',
						classes:{list:['btn', 'is_following']},
						properties:{list:['onclick', 'id']},
						innerOuterHTMLs:{list:['팔로잉']}
					},
					{ tag:'button',
						classes:{list:['btn_flw', 'on']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']}
					}
				],
				span_prohibited_user:{ tag:'span',
					classes:{list:['name']},
					innerOuterHTMLs:{list:{ setting_key:'prohibited_user' }}
				},
				user_name:[
					{ tag:'span',
						classes:{list:['name']}
					},
					{ tag:'a',
						parent_html:{ tag:'h2', classes:{list:['name']} },
						properties:{list:['href', 'onclick']}
					}	
				],
				btn_unfollow_do:[
					{ tag:'a',
						classes:{list:['btn', 'is_following']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:[null, null] }
					},
					{ tag:'button',
						classes:{list:['btn_flw', 'on']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:[null, null] }
					}
				],
				btn_follow_do:[
					{ tag:'a',
						classes:{list:['btn']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로우']},
						split:{ attr:'id', params:[null, null] }
					},
					{ tag:'button',
						classes:{list:['btn_flw']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로우']},
						split:{ attr:'id', params:[null, null] }
					}
				],
				btn_unfollow_do_for_id:[
					{ tag:'a',
						classes:{list:['btn', 'is_following']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:['unfollowAuthor_', null] }
					},
					{ tag:'button', 
						classes:{list:['btn_flw', 'on']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:['unfollowAuthor_', null] }
					}
				]
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'http://m.post.naver.com/', extra:{list:[{html:this.htmls.identification}, '?isHome=1']}, changing:false },
				follower_following_url:{ basic:'http://m.post.naver.com/my/', changing:false },
				follower_search:{ basic:'http://m.post.naver.com', extra:{list:[{status:'follower_link', grammer_key:'postgrammer', version_key:'unfollow'}]}, changing:false },
				following_search:{ basic:'http://m.post.naver.com', extra:{list:[{status:'following_link', grammer_key:'postgrammer', version_key:'unfollow'}]}, changing:false },
				work_unfollow:{ basic:'http://post.naver.com', extra:{list:[{status:'following_list', status_index:'unfollow_index', grammer_key:'postgrammer', version_key:'unfollow'}]}, changing:false }
			};

			// Interval Section
			this.intervals = {

			};

			// Text Section
			this.texts = {

			};

			// Func Section
			this.funcs_option = {

			};

			// Page Section
			this.pages = {
				start:[
					// 첫 마이페이지 링크
					{
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.btn_profile_edit, this.htmls.btn_profile_statistic], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status:'follower_total'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status:'following_total'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 검색창 링크 저장', save:{ pandoras:[{html:this.htmls.btn_follower, type:'TEXT'}, {status:'follower_link'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 검색창 링크 저장', save:{ pandoras:[{html:this.htmls.btn_following, type:'TEXT'}, {status:'following_link'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'GO', func:'unfollow', description:'팔로워 검색창으로 이동', go:{ url:this.urls.follower_search, delay_position:100 } } ], delay:2, countdown:false }
						]
					},
					// 팔로워 작업
					{
						urls : {list:[this.urls.follower_following_url], condition:'AND'},
						htmls : {list:[this.htmls.btn_invite_friend, this.htmls.head_follower], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ interval:1, click:{ html:this.htmls.btn_more }, comparison:{ type:'>=', pandoras:[ {html:this.htmls.box_user_follower_following, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.box_follower_following_link, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:2, countdown:false },
							{list_action:[ { action:'GO', func:'unfollow', description:'팔로잉 검색창으로 이동', go:{ url:this.urls.following_search, delay_position:100 } } ], delay:2, countdown:false }
						]
					},
					// 팔로잉 작업 && 팔로잉 맞팔 추출 작업
					{
						urls : {list:[this.urls.follower_following_url], condition:'AND'},
						htmls : {list:[this.htmls.btn_editor, this.htmls.btn_tag, this.htmls.btn_series, this.htmls.head_following], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ interval:1, click:{ html:this.htmls.btn_more }, comparison:{ type:'>=', pandoras:[ {html:this.htmls.box_user_follower_following, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', save:{ pandoras:[{html:this.htmls.box_follower_following_link, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:2, countdown:false },
							{list_action:[ { action:'EXCLUDE', func:'unfollow', description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'STATUS', func:'unfollow', status:{ set:'unfollow_index', value:0 } } ], delay:2, countdown:false},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'GO', func:'unfollow', description:'언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:4, countdown:false}
						]
					},
					// 언팔로우 작업 반복
					{
						urls : {list:[this.urls.work_unfollow], condition:'AND'},
						htmls : {list:[this.htmls.btn_my_following], condition:'AND'},
						list_step:[
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', func:'unfollow',
											try : {
												list_step:[
													{list_action:[
														{ action:'CHECK', func:'unfollow', description:'언팔금지 목록 포함 여부 확인', check:{ htmls:[ { html:this.htmls.span_prohibited_user, exist:false, message:'언팔로우 제외 : 언팔 금지된 유저' } ] } }
													], delay: 1, countdown:false},
													{list_action:[ { action:'TARGET_USERNAME', func:'unfollow', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' } } ], delay:1, countdown:false},
													{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:1, countdown:false},
													{list_action:[ { action:'SAVE', func:'unfollow', save:{ pandoras:[{html:this.htmls.btn_unfollow_do, type:'TEXT'}, {status:'elUnfollow'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'SAVE', func:'unfollow', save:{ pandoras:[{html:this.htmls.btn_follow_do, type:'TEXT'}, {status:'elFollow'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'SAVE', func:'unfollow', save:{ pandoras:[{html:this.htmls.btn_unfollow_do_for_id, type:'TEXT'}, {status:'memberNo'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'UNFOLLOW_ON_POST', func:'unfollow', description:'언팔로우', log_push:true, statuses:[{increase:'unfollow_count'}] } ], delay:5},
													{list_action:[ { action:'REMOVE', func:'unfollow', remove:{ html:this.htmls.btn_unfollow_do } } ]},
													{list_action:[ { action:'CHANGE', func:'unfollow', change:{ html:this.htmls.btn_follow_do, properties:{remove:{list:[{name:'style'}]}} } } ]}
												],
												countdown:false
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'unfollow', message:{ text:'언팔로우 제외 : 언팔 금지된 유저', delay_position:0 } } ], delay: 4, countdown:false}
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'unfollow_index'} ] } } ], delay:1, countdown:false},
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false},
													{list_action:[ { action:'TRYCATCH', func:'unfollow',
														try : {
															list_step:[
																// 끝났을 때 resolve, 끝나지 않았을 때 reject
																{list_action:[ { action:'COMPARE', description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'unfollow_index', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}] } } ], delay:2, countdown:false},
																{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
															],
															countdown:false
														},
														// 작업 끝나지 않았을 때
														catch : {
															list_step:[
																{list_action:[ { action:'GO', description:'다음 언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:20 } } ], delay:10, countdown:false}
															],
															countdown:false
														}
													} ]}
												],
												countdown:false
											}
										} ]}
									]
								}
							} ]}
						]
					}
				]
			};

		});

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('postgrammerInviteService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'postgrammer';
			this.version_key = 'invite';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				// identification에서는 일반적인 getElements가 아니다. checkIdentification에서 getTextOfElementWithSplit 함수로 진행된다.
				identification:{ tag:'script',
					properties:{list:['type="text/javascript"']},
					innerOuterHTMLs:{list:['nhn=window.nhn']},
					split:{ html:'innerHTML', params:['isLoggedIn:true,id:"','",memberNo'] }
				}
			};

			// Url Section
			this.urls = {

			};

			// Interval Section
			this.intervals = {

			};

			// Text Section
			this.texts = {

			};

			// Func Section
			this.funcs_option = {

			};

			// Page Section
			this.pages = {
				start:[
				]
			};

		});

/***/ }
/******/ ]);