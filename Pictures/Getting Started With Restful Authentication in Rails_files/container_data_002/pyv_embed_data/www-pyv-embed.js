(function(){var l=this;function m(a){return void 0!==a}
function n(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function q(a){return"array"==p(a)}
function r(a){return"string"==typeof a}
function t(a){return"function"==p(a)}
function u(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var ea=Date.now||function(){return+new Date};
function w(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&m(b)?d[f]=b:d[f]?d=d[f]:d=d[f]={}}
function x(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,e){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var y;var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ga=/&/g,ha=/</g,ia=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,na=/[\x00&<>"']/;
function oa(a){var b=new RegExp("/".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"");return a.replace(b,"")}
function pa(a,b){return a<b?-1:a>b?1:0}
;var qa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=r(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},sa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(f[e++]=k)}return f},ta=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=Array(d),e=r(a)?a.split(""):a,g=0;g<d;g++)g in e&&(f[g]=b.call(c,e[g],g,a));
return f};function ua(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function va(a){a.classList?a=a.classList.contains("playing"):(a=ua(a),a=0<=qa(a,"playing"));return a}
function wa(){var a=document.body;a.classList?a.classList.add("playing"):va(a)||(a.className+=0<a.className.length?" playing":"playing")}
function xa(){var a=document.body;a.classList?a.classList.remove("playing"):va(a)&&(a.className=sa(ua(a),function(a){return"playing"!=a}).join(" "))}
;function z(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ya(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
function za(a){var b=Aa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;var A;a:{var Ba=l.navigator;if(Ba){var Ca=Ba.userAgent;if(Ca){A=Ca;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;function C(){this.c="";this.f=Da}
C.prototype.G=!0;C.prototype.F=function(){return this.c};
function Ea(a){if(a instanceof C&&a.constructor===C&&a.f===Da)return a.c;p(a);return"type_error:SafeUrl"}
var Fa=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Ga(a){if(a instanceof C)return a;a=a.G?a.F():String(a);Fa.test(a)||(a="about:invalid#zClosurez");return Ha(a)}
var Da={};function Ha(a){var b=new C;b.c=a;return b}
Ha("about:blank");function D(){this.c="";this.f=Ia}
D.prototype.G=!0;D.prototype.F=function(){return this.c};
function Ja(a){if(a instanceof D&&a.constructor===D&&a.f===Ia)return a.c;p(a);return"type_error:SafeHtml"}
var Ia={};function E(a){var b=new D;b.c=a;return b}
E("<!DOCTYPE html>");E("");E("<br>");function F(a,b){this.x=m(a)?a:0;this.y=m(b)?b:0}
F.prototype.clone=function(){return new F(this.x,this.y)};
F.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
F.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
F.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var Ka=B("Opera"),G=B("Trident")||B("MSIE"),La=B("Edge"),Ma=La||G,H=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),I=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge");function Na(){var a=l.document;return a?a.documentMode:void 0}
var Oa;a:{var Pa="",Qa=function(){var a=A;if(H)return/rv\:([^\);]+)(\)|;)/.exec(a);if(La)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(I)return/WebKit\/(\S+)/.exec(a);if(Ka)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Qa&&(Pa=Qa?Qa[1]:"");if(G){var Ra=Na();if(null!=Ra&&Ra>parseFloat(Pa)){Oa=String(Ra);break a}}Oa=Pa}var Sa=Oa,Ta={};
function L(a){var b;if(!(b=Ta[a])){b=0;for(var c=fa(String(Sa)).split("."),d=fa(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),aa=RegExp("(\\d*)(\\D*)","g");do{var J=k.exec(g)||["","",""],K=aa.exec(h)||["","",""];if(0==J[0].length&&0==K[0].length)break;b=pa(0==J[1].length?0:parseInt(J[1],10),0==K[1].length?0:parseInt(K[1],10))||pa(0==J[2].length,0==K[2].length)||pa(J[2],K[2])}while(0==b)}b=Ta[a]=0<=b}return b}
var Ua=l.document,Va=Ua&&G?Na()||("CSS1Compat"==Ua.compatMode?parseInt(Sa,10):5):void 0;!H&&!G||G&&9<=Number(Va)||H&&L("1.9.1");G&&L("9");function Wa(a,b){var c;c=b instanceof C?b:Ga(b);a.href=Ea(c)}
;function Xa(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ya(a){return Za(a,function(a){if(a="A"==a.nodeName)a=!0;return a},void 0)}
function Za(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function M(a){this.c=a||l.document||document}
M.prototype.createElement=function(a){return this.c.createElement(a)};
M.prototype.isElement=function(a){return u(a)&&1==a.nodeType};
M.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var $a=n("yt.dom.getNextId_");if(!$a){$a=function(){return++ab};
w("yt.dom.getNextId_",$a);var ab=0};var bb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};w("yt.config_",bb);w("yt.tokens_",window.yt&&window.yt.tokens_||{});var cb=window.yt&&window.yt.msgs_||n("window.ytcfg.msgs")||{};w("yt.msgs_",cb);function db(a){eb(bb,arguments)}
function N(a,b){return a in bb?bb[a]:b}
function fb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(d){var b=d,c=n("yt.logging.errors.log");c?c(b,void 0,void 0,void 0,void 0):(c=N("ERRORS",[]),c.push([b,void 0,void 0,void 0,void 0]),db("ERRORS",c));throw d;}}:a}
function eb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
;function O(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in gb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
O.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
O.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
O.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var gb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Aa=n("yt.events.listeners_")||{};w("yt.events.listeners_",Aa);var ib=n("yt.events.counter_")||{count:0};w("yt.events.counter_",ib);function jb(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return za(function(f){return f[0]==a&&f[1]==b&&f[2]==c&&f[4]==!!d})}
function P(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var f=jb(a,b,c,d);if(!f){var f=++ib.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=e?function(d){d=new O(d);if(!Za(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new O(b);
b.currentTarget=a;return c.call(a,b)};
g=fb(g);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Aa[f]=[a,b,c,g,d]}}}
;function kb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
;function lb(){}
var nb=[];function Q(a){var b=ob;if(a<b.h){a+=b.j;var c=b.c[a];return c===nb?b.c[a]=[]:c}c=b.f[a];return c===nb?b.f[a]=[]:c}
lb.prototype.toString=function(){return this.c.toString()};function pb(a){a||(a=[]);this.j=-1;this.c=a;a:{if(this.c.length){a=this.c.length-1;var b=this.c[a];if(b&&"object"==typeof b&&!q(b)){this.h=a- -1;this.f=b;break a}}this.h=Number.MAX_VALUE}}
x(pb,lb);function qb(a){qb[" "](a);return a}
qb[" "]=function(){};function rb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function sb(){var a=tb;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""}
;function ub(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}
;function vb(a,b,c,d,f,e){try{if((d?a.h:Math.random())<(f||a.f)){var g=a.c+b+("&"+wb(c,1)),g=g.substring(0,2E3);"undefined"===typeof e?xb(g):xb(g,e)}}catch(h){}}
function wb(a,b){var c=[];rb(a,function(a,f){var e=null;if(u(a)&&2>b)e=wb(a,b+1);else if(0===a||a)e=String(a);e&&c.push(f+"="+encodeURIComponent(e))});
return c.join("&")}
function xb(a,b){l.google_image_requests||(l.google_image_requests=[]);var c=l.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};
ub(c,"load",d);ub(c,"error",d)}c.src=a;l.google_image_requests.push(c)}
;function yb(a,b,c){this.l=a;this.j=b;this.c=c;this.h=this.f}
function zb(a,b,c){this.message=a;this.c=b||"";this.f=c||-1}
function Ab(a,b){var c;try{c=b()}catch(e){var d=a.c;try{var f=Bb(e),d=a.h.call(a,"osd_proto::reqm_int",f,void 0,void 0)}catch(g){a.f("pAR",g)}if(!d)throw e;}finally{}return c}
function Cb(a){var b=Db;return function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return Ab(b,function(){return a.apply(void 0,c)})}}
yb.prototype.f=function(a,b,c,d,f){try{var e={};e.context=a;b instanceof zb||(b=Bb(b));e.msg=b.message.substring(0,512);b.c&&(e.file=b.c);0<b.f&&(e.line=b.f.toString());var g=l.document;e.url=g.URL.substring(0,512);e.ref=(g.referrer||"").substring(0,512);if(d)try{d(e)}catch(h){}vb(this.l,f||this.j,e,!1,c)}catch(h){}return this.c};
function Bb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var f;c!=f;)f=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(e){b=d}}return new zb(b,a.fileName,a.lineNumber)}
;var Eb=document,R=window;var Fb,Db;Fb=new function(){this.c="http"+("http:"===R.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";this.f=.01;this.h=Math.random()};
Db=new yb(Fb,"jserror",!0);function Gb(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var f="&"+b+"=",e=a.indexOf(f);0>e?c=a+f+c:(e+=f.length,f=a.indexOf("&",e),c=0<=f?a.substring(0,e)+c+a.substring(f):a.substring(0,e)+c)}return 2E3<c.length?m(void 0)?Gb(a,b,void 0,d):a:c}
;var Hb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ib(a){return a?decodeURI(a):a}
function Jb(a,b,c,d){for(var f=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var e=a.charCodeAt(b-1);if(38==e||63==e)if(e=a.charCodeAt(b+f),!e||61==e||38==e||35==e)return b;b+=f+1}return-1}
var Kb=/#|$/,Lb=/[?&]($|#)/;function S(){this.h=this.h;this.c=this.c}
S.prototype.h=!1;S.prototype.isDisposed=function(){return this.h};
S.prototype.dispose=function(){this.h||(this.h=!0,this.B())};
S.prototype.B=function(){if(this.c)for(;this.c.length;)this.c.shift()()};
function Mb(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Nb=[0,2,1],Ob=null;function Pb(){var a=window.event||Ob;if(!a)return null;var b;(b=a.which?1<<Nb[a.which-1]:a.button)&&a.shiftKey&&(b|=8);b&&a.altKey&&(b|=16);b&&a.ctrlKey&&(b|=32);return b}
document.addEventListener&&document.addEventListener("mousedown",function(a){Ob=a},!0);
window.mb=function(a){if(a){var b=Pb();b&&(window.css?css(a.id,"mb",b,void 0,void 0):a&&(a.href=Gb(a.href,"mb",b,void 0)))}};var Qb=!G||9<=Number(Va),Rb=G&&!L("9");!I||L("528");H&&L("1.9b")||G&&L("8")||Ka&&L("9.5")||I&&L("528");H&&!L("8")||G&&L("9");function Sb(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
Sb.prototype.stopPropagation=function(){this.f=!0};
Sb.prototype.preventDefault=function(){this.defaultPrevented=!0};function T(a,b){Sb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.c=this.state=null;a&&this.init(a,b)}
x(T,Sb);
T.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var f=a.relatedTarget;if(f){if(H){var e;a:{try{qb(f.nodeName);e=!0;break a}catch(g){}e=!1}e||(f=null)}}else"mouseover"==c?f=a.fromElement:"mouseout"==c&&(f=a.toElement);this.relatedTarget=f;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.c=a;a.defaultPrevented&&this.preventDefault()};
T.prototype.stopPropagation=function(){T.C.stopPropagation.call(this);this.c.stopPropagation?this.c.stopPropagation():this.c.cancelBubble=!0};
T.prototype.preventDefault=function(){T.C.preventDefault.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Rb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Tb="closure_listenable_"+(1E6*Math.random()|0),Ub=0;function Vb(a,b,c,d,f){this.listener=a;this.c=null;this.src=b;this.type=c;this.o=!!d;this.f=f;this.key=++Ub;this.m=this.A=!1}
function Wb(a){a.m=!0;a.listener=null;a.c=null;a.src=null;a.f=null}
;function U(a){this.src=a;this.c={};this.f=0}
U.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.c))return!1;var f=this.c[a];b=Xb(f,b,c,d);return-1<b?(Wb(f[b]),Array.prototype.splice.call(f,b,1),0==f.length&&(delete this.c[a],this.f--),!0):!1};
U.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.c)if(!a||c==a){for(var d=this.c[c],f=0;f<d.length;f++)++b,Wb(d[f]);delete this.c[c];this.f--}return b};
U.prototype.hasListener=function(a,b){var c=m(a),d=c?a.toString():"",f=m(b);return ya(this.c,function(a){for(var g=0;g<a.length;++g)if(!(c&&a[g].type!=d||f&&a[g].o!=b))return!0;return!1})};
function Xb(a,b,c,d){for(var f=0;f<a.length;++f){var e=a[f];if(!e.m&&e.listener==b&&e.o==!!c&&e.f==d)return f}return-1}
;var Yb="closure_lm_"+(1E6*Math.random()|0),Zb={},$b=0;
function ac(a,b,c,d,f){if(q(b)){for(var e=0;e<b.length;e++)ac(a,b[e],c,d,f);return null}c=bc(c);if(a&&a[Tb])a=cc(a,b,c,d,f);else{e=c;if(!b)throw Error("Invalid event type");c=!!d;var g=dc(a);g||(a[Yb]=g=new U(a));var h=g,k=b.toString(),g=h.c[k];g||(g=h.c[k]=[],h.f++);var aa=Xb(g,e,d,f);-1<aa?(d=g[aa],d.A=!1):(d=new Vb(e,h.src,k,!!d,f),d.A=!1,g.push(d));if(!d.c){f=ec();d.c=f;f.src=a;f.listener=d;if(a.addEventListener)a.addEventListener(b.toString(),f,c);else if(a.attachEvent)a.attachEvent(fc(b.toString()),
f);else throw Error("addEventListener and attachEvent are unavailable.");$b++}a=d}return a}
function ec(){var a=gc,b=Qb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function hc(a){if("number"!=typeof a&&a&&!a.m){var b=a.src;if(b&&b[Tb])b.c(a);else{var c=a.type,d=a.c;b.removeEventListener?b.removeEventListener(c,d,a.o):b.detachEvent&&b.detachEvent(fc(c),d);$b--;if(c=dc(b)){var d=a.type,f;if(f=d in c.c){f=c.c[d];var e=qa(f,a),g;(g=0<=e)&&Array.prototype.splice.call(f,e,1);f=g}f&&(Wb(a),0==c.c[d].length&&(delete c.c[d],c.f--));0==c.f&&(c.src=null,b[Yb]=null)}else Wb(a)}}}
function fc(a){return a in Zb?Zb[a]:Zb[a]="on"+a}
function ic(a,b,c,d){var f=!0;if(a=dc(a))if(b=a.c[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var e=b[a];e&&e.o==c&&!e.m&&(e=jc(e,d),f=f&&!1!==e)}return f}
function jc(a,b){var c=a.listener,d=a.f||a.src;a.A&&hc(a);return c.call(d,b)}
function gc(a,b){if(a.m)return!0;if(!Qb){var c=b||n("window.event"),d=new T(c,this),f=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=d.currentTarget;e;e=e.parentNode)c.push(e);for(var e=a.type,g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var h=ic(c[g],e,!0,d),f=f&&h}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],h=ic(c[g],e,!1,d),f=f&&h}return f}return jc(a,new T(b,this))}
function dc(a){a=a[Yb];return a instanceof U?a:null}
var kc="__closure_events_fn_"+(1E9*Math.random()>>>0);function bc(a){if(t(a))return a;a[kc]||(a[kc]=function(b){return a.handleEvent(b)});
return a[kc]}
;function V(a){S.call(this);this.j=a;this.f={}}
x(V,S);var lc=[];function cc(a,b,c,d,f){q(c)||(c&&(lc[0]=c.toString()),c=lc);for(var e=0;e<c.length;e++){var g=ac(b,c[e],d||a.handleEvent,f||!1,a.j||a);if(!g)break;a.f[g.key]=g}return a}
V.prototype.removeAll=function(){z(this.f,function(a,b){this.f.hasOwnProperty(b)&&hc(a)},this);
this.f={}};
V.prototype.B=function(){V.C.B.call(this);this.removeAll()};
V.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function W(a,b,c){S.call(this);this.j=a;this.H=b;this.I=c;this.v=0;this.f={};this.l=new V(this);a=v(Mb,this.l);this.h?a.call(void 0):(this.c||(this.c=[]),this.c.push(m(void 0)?da(a,void 0):a));mc(this)}
x(W,S);function mc(a){ra(a.I,function(a){cc(this.l,a.element,"mousedown",this.J,!0);cc(this.l,a.element,"mouseup",v(this.L,a),!0)},a);
cc(a.l,a.H,"mouseenter",a.K,void 0)}
function nc(a,b){z(a.f,function(a,d){for(var f=b,e=f.search(Kb),g=0,h,k=[];0<=(h=Jb(f,g,d,e));)k.push(f.substring(g,h)),g=Math.min(f.indexOf("&",h)+1||e,e);k.push(f.substr(g));f=[k.join("").replace(Lb,"$1"),"&",d];null!=a&&f.push("=",encodeURIComponent(String(a)));f[1]&&(e=f[0],g=e.indexOf("#"),0<=g&&(f.push(e.substr(g)),f[0]=e=e.substr(0,g)),g=e.indexOf("?"),0>g?f[1]="?":g==e.length-1&&(f[1]=void 0));b=f.join("")});
return b}
W.prototype.J=function(){this.D=ea()};
W.prototype.L=function(a,b){var c=a.element;1==(this.j&1)&&(0==this.v&&this.v++,this.f.nm=this.v);2==(this.j&2)&&(this.f.nb=a.M);if(8==(this.j&8)){var d=this.H,f=Xa(d),e=new F(0,0),g;g=f?Xa(f):document;g=!G||9<=Number(Va)||"CSS1Compat"==(g?new M(Xa(g)):y||(y=new M)).c.compatMode?g.documentElement:g.body;if(d!=g){var h;b:{try{h=d.getBoundingClientRect()}catch(k){h={left:0,top:0,right:0,bottom:0};break b}G&&d.ownerDocument.body&&(d=d.ownerDocument,h.left-=d.documentElement.clientLeft+d.body.clientLeft,
h.top-=d.documentElement.clientTop+d.body.clientTop)}d=(f?new M(Xa(f)):y||(y=new M)).c;f=d.scrollingElement?d.scrollingElement:I||"CSS1Compat"!=d.compatMode?d.body||d.documentElement:d.documentElement;d=d.parentWindow||d.defaultView;f=G&&L("10")&&d.pageYOffset!=f.scrollTop?new F(f.scrollLeft,f.scrollTop):new F(d.pageXOffset||f.scrollLeft,d.pageYOffset||f.scrollTop);e.x=h.left+f.x;e.y=h.top+f.y}this.f.nx=Math.round(b.clientX-e.x);this.f.ny=Math.round(b.clientY-e.y)}16==(this.j&16)&&null!=this.D&&(e=
ea()-this.D,this.f.clkt=e);512==(this.j&512)&&(e=Pb())&&(this.f.mb=e);"A"==c.tagName.toUpperCase()&&Wa(c,nc(this,c.href))};
W.prototype.K=function(){this.v++};if(Eb&&Eb.URL){var tb=Eb.URL,oc=!(tb&&0<sb().length);Db.c=oc};function pc(a,b){this.f=a||0;this.c=b||""}
pc.prototype.match=function(a){return(this.f||this.c)&&(a.f||a.c)?this.c||a.c?this.c==a.c:this.f||a.f?this.f==a.f:!1:!1};
pc.prototype.toString=function(){var a=""+this.f;this.c&&(a+="-"+this.c);return a};
function qc(a){var b=[];z(a,function(a,d){var f=encodeURIComponent(d),e=a;r(e)&&(e=encodeURIComponent(e));b.push(f+"="+e)});
b.push("24="+(new Date).getTime());return b.join("\n")}
var rc=0,sc=0;function tc(){var a=0,b=R;try{if(b&&b.Goog_AdSense_getAdAdapterInstance)return b}catch(d){}var c=b.location&&b.location.ancestorOrigins;if(m(c)&&(!c||!c.length))return null;for(;b&&5>a;){try{if(b.google_osd_static_frame)return b}catch(d){}try{if(b.aswift_0&&b.aswift_0.google_osd_static_frame)return b.aswift_0}catch(d){}a++;b=b!=b.parent?b.parent:null}return null}
function uc(a,b,c,d,f){if(10<sc)R.clearInterval(rc);else if(++sc,R.postMessage&&(b.f||b.c)){var e=tc();if(e){var g={};b.f&&(g[4]=b.f);b.c&&(g[12]=b.c);g[0]="goog_request_monitoring";g[6]=a;g[16]=c;d&&d.length&&(g[17]=d.join(","));f&&(g[19]=f);try{var h=qc(g);e.postMessage(h,"*")}catch(k){}}}}
;function vc(a,b,c){if(c.data){var d=c.data;if(r(d)){c={};for(var d=d.split("\n"),f=0;f<d.length;f++){var e=d[f].indexOf("=");if(!(0>=e)){var g=Number(d[f].substr(0,e)),e=d[f].substr(e+1);switch(g){case 5:case 8:case 11:case 15:case 16:case 18:e="true"==e;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:e=Number(e);break;case 3:case 19:if(t(decodeURIComponent))try{e=decodeURIComponent(e)}catch(h){throw Error("Error: URI malformed: "+e);}break;case 17:e=ta(decodeURIComponent(e).split(","),
Number)}c[g]=e}}c=c[0]?c:null}else c=null;c&&(d=new pc(c[4],c[12]),a&&a.match(d)&&"goog_update_data"==c[0]&&(a=c[7],"number"==typeof a&&b(a)))}}
;var wc={"pyv-embed":2,"pyv-embed-container":2,"pyv-embed-channel-image-overlay":19,"pyv-embed-channel-name-overlay":20,"pyv-embed-channel-banner-overlay":9,"pyv-embed-overlay":21,"pyv-embed-headline-overlay":0,"pyv-embed-description-overlay":7},xc=!1,yc=!1,X=null,ob=new pb,Y=null,zc=!1,Ac=null,Bc=null;function Cc(){var a=0;Z("osd-1")?a=.01:Z("osd-25")?a=.25:Z("osd-50")?a=.5:Z("osd-75")&&(a=.75);null!=Bc&&zc&&!xc&&(Bc>=a?Y.playVideo():Y.pauseVideo())}
function Dc(){var a=15E3-1E3*Y.getCurrentTime();return 0<=a?a:0}
function Ec(){Y.mute();Z("osd")?(zc=!0,Cc()):Y.playVideo()}
function Fc(a){if(Z("osd"))switch(a.data){case YT.PlayerState.PLAYING:null===X&&(0==Dc()?Gc():(wa(),X=l.setTimeout(Gc,Dc())));break;case YT.PlayerState.PAUSED:null!=X&&(l.clearTimeout(X),X=null);0==Dc()&&Gc();break;case YT.PlayerState.ENDED:xa(),xc=!0}else switch(a.data){case YT.PlayerState.PLAYING:yc||(wa(),l.setTimeout(Gc,15E3),yc=!0);break;case YT.PlayerState.ENDED:xa()}}
function Gc(){xa();xc=!0;Y.stopVideo()}
function Hc(){var a=N("PLAYER_CONFIG",void 0),b=N("VIDEO_ID",void 0),c=N("HOST",void 0);u(a)&&r(b)&&u(YT)&&t(YT.ready)&&t(YT.Player)&&YT.ready(function(){var d={height:"100%",width:"100%",videoId:b,playerVars:a,events:{onReady:Ec,onStateChange:Fc}};r(c)&&(d.host=c);Y=new YT.Player("iframe-player",d)})}
function Ic(a){Bc=a;null===Y?Hc():Cc()}
function Jc(){var a=Q(1);Ib(a.match(Hb)[3]||null)||(0==a.lastIndexOf("/",0)&&(a=oa(a)),a="https://googleads.g.doubleclick.net/"+a);var b=[],c=0;null!=Q(2)&&(c=Q(2));z(wc,function(c,f){var e;e=document;if((e=r(f)?e.getElementById(f):f)&&(Z("background_click")||document.body.id!=f)&&(Z("container_click")||"pyv-embed-container"!=f)){var g=Z("background_click")||Z("container_click");"a"==e.nodeName.toLowerCase()?(Wa(e,a),g||P(e,"click",Kc,!0)):(P(e,"click",v(Lc,a)),P(e,"click",Kc,!0));b.push({element:e,
M:c})}});
document.body&&!Z("dss")&&(Ac=new W(c,document.body,b))}
function Z(a){var b=N("RENDERING_EXPERIMENTS")||[];return q(b)&&0<=qa(b,a)}
function Lc(a,b){var c;c=b||window.event;c=c.target||c.srcElement;3==c.nodeType&&(c=c.parentNode);if(a&&c&&!Ya(c)){c=b||window.event;c.cancelBubble=!0;c.stopPropagation&&c.stopPropagation();null!=Ac&&(a=nc(Ac,a));var d=a,f={target:"_blank"};c=window;var e;e=d instanceof C?d:Ga("undefined"!=typeof d.href?d.href:String(d));var d=f.target||d.target,g=[],h;for(h in f)switch(h){case "width":case "height":case "top":case "left":g.push(h+"="+f[h]);break;case "target":case "noreferrer":break;default:g.push(h+
"="+(f[h]?1:0))}h=g.join(",");(B("iPhone")&&!B("iPod")&&!B("iPad")||B("iPad")||B("iPod"))&&c.navigator&&c.navigator.standalone&&d&&"_self"!=d?(h=c.document.createElement("A"),Wa(h,e),h.setAttribute("target",d),f.noreferrer&&h.setAttribute("rel","noreferrer"),e=document.createEvent("MouseEvent"),e.initMouseEvent("click",!0,!0,c,1),h.dispatchEvent(e)):f.noreferrer?(h=c.open("",d,h),c=Ea(e),h&&(Ma&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),h.opener=null,na.test(c)&&(-1!=c.indexOf("&")&&(c=
c.replace(ga,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ha,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(ia,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(ka,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(la,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(ma,"&#0;"))),c=E('<META HTTP-EQUIV="refresh" content="0; url='+c+'">'),h.document.write(Ja(c)),h.document.close())):c.open(Ea(e),d,h)}}
function Kc(){vb(Fb,"pyv_user_click",{},!0,.1,void 0)}
;w("yt.setConfig",db);w("yt.setMsg",function(a){eb(cb,arguments)});
P(window,"load",function(){Z("osd")||Hc()});
P(window,"message",function(a){try{var b=kb(a.data)}catch(c){return}q(b)&&(ob=new pb(b),null!=Q(1)&&(Jc(),Z("osd")&&null!=Q(3)&&(a=window,b=Q(3),b=new pc(b,null),b.f||b.c)))&&(ub(a,"message",v(vc,b,Ic)),rc=R.setInterval(Cb(v(uc,2,b,void 0,void 0,void 0)),500))});})();
