var el=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Xp=el(($o,us)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,e){typeof define=="function"&&define.amd?define([],e):typeof us=="object"&&typeof $o<"u"?us.exports=e():n.Papa=e()})(void 0,function n(){var e=typeof self<"u"?self:typeof window<"u"?window:e!==void 0?e:{},t=!e.document&&!!e.postMessage,i=e.IS_PAPA_WORKER||!1,r={},s=0,o={parse:function(x,_){var C=(_=_||{}).dynamicTyping||!1;if(L(C)&&(_.dynamicTypingFunction=C,C={}),_.dynamicTyping=C,_.transform=!!L(_.transform)&&_.transform,_.worker&&o.WORKERS_SUPPORTED){var G=function(){if(!o.WORKERS_SUPPORTED)return!1;var T=(Z=e.URL||e.webkitURL||null,R=n.toString(),o.BLOB_URL||(o.BLOB_URL=Z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",R,")();"],{type:"text/javascript"})))),$=new e.Worker(T),Z,R;return $.onmessage=f,$.id=s++,r[$.id]=$}();return G.userStep=_.step,G.userChunk=_.chunk,G.userComplete=_.complete,G.userError=_.error,_.step=L(_.step),_.chunk=L(_.chunk),_.complete=L(_.complete),_.error=L(_.error),delete _.worker,void G.postMessage({input:x,config:_,workerId:G.id})}var g=null;return o.NODE_STREAM_INPUT,typeof x=="string"?(x=function(T){return T.charCodeAt(0)===65279?T.slice(1):T}(x),g=_.download?new c(_):new d(_)):x.readable===!0&&L(x.read)&&L(x.on)?g=new p(_):(e.File&&x instanceof File||x instanceof Object)&&(g=new h(_)),g.stream(x)},unparse:function(x,_){var C=!1,G=!0,g=",",T=`\r
`,$='"',Z=$+$,R=!1,U=null,V=!1;(function(){if(typeof _=="object"){if(typeof _.delimiter!="string"||o.BAD_DELIMITERS.filter(function(N){return _.delimiter.indexOf(N)!==-1}).length||(g=_.delimiter),(typeof _.quotes=="boolean"||typeof _.quotes=="function"||Array.isArray(_.quotes))&&(C=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(R=_.skipEmptyLines),typeof _.newline=="string"&&(T=_.newline),typeof _.quoteChar=="string"&&($=_.quoteChar),typeof _.header=="boolean"&&(G=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");U=_.columns}_.escapeChar!==void 0&&(Z=_.escapeChar+$),(typeof _.escapeFormulae=="boolean"||_.escapeFormulae instanceof RegExp)&&(V=_.escapeFormulae instanceof RegExp?_.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var B=new RegExp(M($),"g");if(typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(x)){if(!x.length||Array.isArray(x[0]))return q(null,x,R);if(typeof x[0]=="object")return q(U||Object.keys(x[0]),x,R)}else if(typeof x=="object")return typeof x.data=="string"&&(x.data=JSON.parse(x.data)),Array.isArray(x.data)&&(x.fields||(x.fields=x.meta&&x.meta.fields||U),x.fields||(x.fields=Array.isArray(x.data[0])?x.fields:typeof x.data[0]=="object"?Object.keys(x.data[0]):[]),Array.isArray(x.data[0])||typeof x.data[0]=="object"||(x.data=[x.data])),q(x.fields||[],x.data||[],R);throw new Error("Unable to serialize unrecognized input");function q(N,J,ue){var _e="";typeof N=="string"&&(N=JSON.parse(N)),typeof J=="string"&&(J=JSON.parse(J));var O=Array.isArray(N)&&0<N.length,j=!Array.isArray(J[0]);if(O&&G){for(var ae=0;ae<N.length;ae++)0<ae&&(_e+=g),_e+=Y(N[ae],ae);0<J.length&&(_e+=T)}for(var ne=0;ne<J.length;ne++){var oe=O?N.length:J[ne].length,se=!1,be=O?Object.keys(J[ne]).length===0:J[ne].length===0;if(ue&&!O&&(se=ue==="greedy"?J[ne].join("").trim()==="":J[ne].length===1&&J[ne][0].length===0),ue==="greedy"&&O){for(var pe=[],D=0;D<oe;D++){var He=j?N[D]:D;pe.push(J[ne][He])}se=pe.join("").trim()===""}if(!se){for(var he=0;he<oe;he++){0<he&&!be&&(_e+=g);var Te=O&&j?N[he]:he;_e+=Y(J[ne][Te],he)}ne<J.length-1&&(!ue||0<oe&&!be)&&(_e+=T)}}return _e}function Y(N,J){if(N==null)return"";if(N.constructor===Date)return JSON.stringify(N).slice(1,25);var ue=!1;V&&typeof N=="string"&&V.test(N)&&(N="'"+N,ue=!0);var _e=N.toString().replace(B,Z);return(ue=ue||C===!0||typeof C=="function"&&C(N,J)||Array.isArray(C)&&C[J]||function(O,j){for(var ae=0;ae<j.length;ae++)if(-1<O.indexOf(j[ae]))return!0;return!1}(_e,o.BAD_DELIMITERS)||-1<_e.indexOf(g)||_e.charAt(0)===" "||_e.charAt(_e.length-1)===" ")?$+_e+$:_e}}};if(o.RECORD_SEP="",o.UNIT_SEP="",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r",`
`,'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!t&&!!e.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=y,o.ParserHandle=m,o.NetworkStreamer=c,o.FileStreamer=h,o.StringStreamer=d,o.ReadableStreamStreamer=p,e.jQuery){var a=e.jQuery;a.fn.parse=function(x){var _=x.config||{},C=[];return this.each(function(T){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&e.FileReader)||!this.files||this.files.length===0)return!0;for(var $=0;$<this.files.length;$++)C.push({file:this.files[$],inputElem:this,instanceConfig:a.extend({},_)})}),G(),this;function G(){if(C.length!==0){var T,$,Z,R,U=C[0];if(L(x.before)){var V=x.before(U.file,U.inputElem);if(typeof V=="object"){if(V.action==="abort")return T="AbortError",$=U.file,Z=U.inputElem,R=V.reason,void(L(x.error)&&x.error({name:T},$,Z,R));if(V.action==="skip")return void g();typeof V.config=="object"&&(U.instanceConfig=a.extend(U.instanceConfig,V.config))}else if(V==="skip")return void g()}var B=U.instanceConfig.complete;U.instanceConfig.complete=function(q){L(B)&&B(q,U.file,U.inputElem),g()},o.parse(U.file,U.instanceConfig)}else L(x.complete)&&x.complete()}function g(){C.splice(0,1),G()}}}function l(x){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(_){var C=S(_);C.chunkSize=parseInt(C.chunkSize),_.step||_.chunk||(C.chunkSize=null),this._handle=new m(C),(this._handle.streamer=this)._config=C}).call(this,x),this.parseChunk=function(_,C){if(this.isFirstChunk&&L(this._config.beforeFirstChunk)){var G=this._config.beforeFirstChunk(_);G!==void 0&&(_=G)}this.isFirstChunk=!1,this._halted=!1;var g=this._partialLine+_;this._partialLine="";var T=this._handle.parse(g,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var $=T.meta.cursor;this._finished||(this._partialLine=g.substring($-this._baseIndex),this._baseIndex=$),T&&T.data&&(this._rowCount+=T.data.length);var Z=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)e.postMessage({results:T,workerId:o.WORKER_ID,finished:Z});else if(L(this._config.chunk)&&!C){if(this._config.chunk(T,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);T=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(T.data),this._completeResults.errors=this._completeResults.errors.concat(T.errors),this._completeResults.meta=T.meta),this._completed||!Z||!L(this._config.complete)||T&&T.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),Z||T&&T.meta.paused||this._nextChunk(),T}this._halted=!0},this._sendError=function(_){L(this._config.error)?this._config.error(_):i&&this._config.error&&e.postMessage({workerId:o.WORKER_ID,error:_,finished:!1})}}function c(x){var _;(x=x||{}).chunkSize||(x.chunkSize=o.RemoteChunkSize),l.call(this,x),this._nextChunk=t?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(C){this._input=C,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),t||(_.onload=b(this._chunkLoaded,this),_.onerror=b(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!t),this._config.downloadRequestHeaders){var C=this._config.downloadRequestHeaders;for(var G in C)_.setRequestHeader(G,C[G])}if(this._config.chunkSize){var g=this._start+this._config.chunkSize-1;_.setRequestHeader("Range","bytes="+this._start+"-"+g)}try{_.send(this._config.downloadRequestBody)}catch(T){this._chunkError(T.message)}t&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:_.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(C){var G=C.getResponseHeader("Content-Range");return G===null?-1:parseInt(G.substring(G.lastIndexOf("/")+1))}(_),this.parseChunk(_.responseText)))},this._chunkError=function(C){var G=_.statusText||C;this._sendError(new Error(G))}}function h(x){var _,C;(x=x||{}).chunkSize||(x.chunkSize=o.LocalChunkSize),l.call(this,x);var G=typeof FileReader<"u";this.stream=function(g){this._input=g,C=g.slice||g.webkitSlice||g.mozSlice,G?((_=new FileReader).onload=b(this._chunkLoaded,this),_.onerror=b(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var g=this._input;if(this._config.chunkSize){var T=Math.min(this._start+this._config.chunkSize,this._input.size);g=C.call(g,this._start,T)}var $=_.readAsText(g,this._config.encoding);G||this._chunkLoaded({target:{result:$}})},this._chunkLoaded=function(g){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(g.target.result)},this._chunkError=function(){this._sendError(_.error)}}function d(x){var _;l.call(this,x=x||{}),this.stream=function(C){return _=C,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var C,G=this._config.chunkSize;return G?(C=_.substring(0,G),_=_.substring(G)):(C=_,_=""),this._finished=!_,this.parseChunk(C)}}}function p(x){l.call(this,x=x||{});var _=[],C=!0,G=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(g){this._input=g,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){G&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):C=!0},this._streamData=b(function(g){try{_.push(typeof g=="string"?g:g.toString(this._config.encoding)),C&&(C=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(T){this._streamError(T)}},this),this._streamError=b(function(g){this._streamCleanUp(),this._sendError(g)},this),this._streamEnd=b(function(){this._streamCleanUp(),G=!0,this._streamData("")},this),this._streamCleanUp=b(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function m(x){var _,C,G,g=Math.pow(2,53),T=-g,$=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,R=this,U=0,V=0,B=!1,q=!1,Y=[],N={data:[],errors:[],meta:{}};if(L(x.step)){var J=x.step;x.step=function(ne){if(N=ne,O())_e();else{if(_e(),N.data.length===0)return;U+=ne.data.length,x.preview&&U>x.preview?C.abort():(N.data=N.data[0],J(N,R))}}}function ue(ne){return x.skipEmptyLines==="greedy"?ne.join("").trim()==="":ne.length===1&&ne[0].length===0}function _e(){return N&&G&&(ae("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),G=!1),x.skipEmptyLines&&(N.data=N.data.filter(function(ne){return!ue(ne)})),O()&&function(){if(!N)return;function ne(se,be){L(x.transformHeader)&&(se=x.transformHeader(se,be)),Y.push(se)}if(Array.isArray(N.data[0])){for(var oe=0;O()&&oe<N.data.length;oe++)N.data[oe].forEach(ne);N.data.splice(0,1)}else N.data.forEach(ne)}(),function(){if(!N||!x.header&&!x.dynamicTyping&&!x.transform)return N;function ne(se,be){var pe,D=x.header?{}:[];for(pe=0;pe<se.length;pe++){var He=pe,he=se[pe];x.header&&(He=pe>=Y.length?"__parsed_extra":Y[pe]),x.transform&&(he=x.transform(he,He)),he=j(He,he),He==="__parsed_extra"?(D[He]=D[He]||[],D[He].push(he)):D[He]=he}return x.header&&(pe>Y.length?ae("FieldMismatch","TooManyFields","Too many fields: expected "+Y.length+" fields but parsed "+pe,V+be):pe<Y.length&&ae("FieldMismatch","TooFewFields","Too few fields: expected "+Y.length+" fields but parsed "+pe,V+be)),D}var oe=1;return!N.data.length||Array.isArray(N.data[0])?(N.data=N.data.map(ne),oe=N.data.length):N.data=ne(N.data,0),x.header&&N.meta&&(N.meta.fields=Y),V+=oe,N}()}function O(){return x.header&&Y.length===0}function j(ne,oe){return se=ne,x.dynamicTypingFunction&&x.dynamicTyping[se]===void 0&&(x.dynamicTyping[se]=x.dynamicTypingFunction(se)),(x.dynamicTyping[se]||x.dynamicTyping)===!0?oe==="true"||oe==="TRUE"||oe!=="false"&&oe!=="FALSE"&&(function(be){if($.test(be)){var pe=parseFloat(be);if(T<pe&&pe<g)return!0}return!1}(oe)?parseFloat(oe):Z.test(oe)?new Date(oe):oe===""?null:oe):oe;var se}function ae(ne,oe,se,be){var pe={type:ne,code:oe,message:se};be!==void 0&&(pe.row=be),N.errors.push(pe)}this.parse=function(ne,oe,se){var be=x.quoteChar||'"';if(x.newline||(x.newline=function(He,he){He=He.substring(0,1048576);var Te=new RegExp(M(he)+"([^]*?)"+M(he),"gm"),ve=(He=He.replace(Te,"")).split("\r"),Le=He.split(`
`),we=1<Le.length&&Le[0].length<ve[0].length;if(ve.length===1||we)return`
`;for(var Ae=0,Pe=0;Pe<ve.length;Pe++)ve[Pe][0]===`
`&&Ae++;return Ae>=ve.length/2?`\r
`:"\r"}(ne,be)),G=!1,x.delimiter)L(x.delimiter)&&(x.delimiter=x.delimiter(ne),N.meta.delimiter=x.delimiter);else{var pe=function(He,he,Te,ve,Le){var we,Ae,Pe,A;Le=Le||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var v=0;v<Le.length;v++){var F=Le[v],K=0,ee=0,Q=0;Pe=void 0;for(var Ce=new y({comments:ve,delimiter:F,newline:he,preview:10}).parse(He),Me=0;Me<Ce.data.length;Me++)if(Te&&ue(Ce.data[Me]))Q++;else{var ie=Ce.data[Me].length;ee+=ie,Pe!==void 0?0<ie&&(K+=Math.abs(ie-Pe),Pe=ie):Pe=ie}0<Ce.data.length&&(ee/=Ce.data.length-Q),(Ae===void 0||K<=Ae)&&(A===void 0||A<ee)&&1.99<ee&&(Ae=K,we=F,A=ee)}return{successful:!!(x.delimiter=we),bestDelimiter:we}}(ne,x.newline,x.skipEmptyLines,x.comments,x.delimitersToGuess);pe.successful?x.delimiter=pe.bestDelimiter:(G=!0,x.delimiter=o.DefaultDelimiter),N.meta.delimiter=x.delimiter}var D=S(x);return x.preview&&x.header&&D.preview++,_=ne,C=new y(D),N=C.parse(_,oe,se),_e(),B?{meta:{paused:!0}}:N||{meta:{paused:!1}}},this.paused=function(){return B},this.pause=function(){B=!0,C.abort(),_=L(x.chunk)?"":_.substring(C.getCharIndex())},this.resume=function(){R.streamer._halted?(B=!1,R.streamer.parseChunk(_,!0)):setTimeout(R.resume,3)},this.aborted=function(){return q},this.abort=function(){q=!0,C.abort(),N.meta.aborted=!0,L(x.complete)&&x.complete(N),_=""}}function M(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(x){var _,C=(x=x||{}).delimiter,G=x.newline,g=x.comments,T=x.step,$=x.preview,Z=x.fastMode,R=_=x.quoteChar===void 0||x.quoteChar===null?'"':x.quoteChar;if(x.escapeChar!==void 0&&(R=x.escapeChar),(typeof C!="string"||-1<o.BAD_DELIMITERS.indexOf(C))&&(C=","),g===C)throw new Error("Comment character same as delimiter");g===!0?g="#":(typeof g!="string"||-1<o.BAD_DELIMITERS.indexOf(g))&&(g=!1),G!==`
`&&G!=="\r"&&G!==`\r
`&&(G=`
`);var U=0,V=!1;this.parse=function(B,q,Y){if(typeof B!="string")throw new Error("Input must be a string");var N=B.length,J=C.length,ue=G.length,_e=g.length,O=L(T),j=[],ae=[],ne=[],oe=U=0;if(!B)return re();if(x.header&&!q){var se=B.split(G)[0].split(C),be=[],pe={},D=!1;for(var He in se){var he=se[He];L(x.transformHeader)&&(he=x.transformHeader(he,He));var Te=he,ve=pe[he]||0;for(0<ve&&(D=!0,Te=he+"_"+ve),pe[he]=ve+1;be.includes(Te);)Te=Te+"_"+ve;be.push(Te)}if(D){var Le=B.split(G);Le[0]=be.join(C),B=Le.join(G)}}if(Z||Z!==!1&&B.indexOf(_)===-1){for(var we=B.split(G),Ae=0;Ae<we.length;Ae++){if(ne=we[Ae],U+=ne.length,Ae!==we.length-1)U+=G.length;else if(Y)return re();if(!g||ne.substring(0,_e)!==g){if(O){if(j=[],Q(ne.split(C)),De(),V)return re()}else Q(ne.split(C));if($&&$<=Ae)return j=j.slice(0,$),re(!0)}}return re()}for(var Pe=B.indexOf(C,U),A=B.indexOf(G,U),v=new RegExp(M(R)+M(_),"g"),F=B.indexOf(_,U);;)if(B[U]!==_)if(g&&ne.length===0&&B.substring(U,U+_e)===g){if(A===-1)return re();U=A+ue,A=B.indexOf(G,U),Pe=B.indexOf(C,U)}else if(Pe!==-1&&(Pe<A||A===-1))ne.push(B.substring(U,Pe)),U=Pe+J,Pe=B.indexOf(C,U);else{if(A===-1)break;if(ne.push(B.substring(U,A)),ie(A+ue),O&&(De(),V))return re();if($&&j.length>=$)return re(!0)}else for(F=U,U++;;){if((F=B.indexOf(_,F+1))===-1)return Y||ae.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:j.length,index:U}),Me();if(F===N-1)return Me(B.substring(U,F).replace(v,_));if(_!==R||B[F+1]!==R){if(_===R||F===0||B[F-1]!==R){Pe!==-1&&Pe<F+1&&(Pe=B.indexOf(C,F+1)),A!==-1&&A<F+1&&(A=B.indexOf(G,F+1));var K=Ce(A===-1?Pe:Math.min(Pe,A));if(B.substr(F+1+K,J)===C){ne.push(B.substring(U,F).replace(v,_)),B[U=F+1+K+J]!==_&&(F=B.indexOf(_,U)),Pe=B.indexOf(C,U),A=B.indexOf(G,U);break}var ee=Ce(A);if(B.substring(F+1+ee,F+1+ee+ue)===G){if(ne.push(B.substring(U,F).replace(v,_)),ie(F+1+ee+ue),Pe=B.indexOf(C,U),F=B.indexOf(_,U),O&&(De(),V))return re();if($&&j.length>=$)return re(!0);break}ae.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:j.length,index:U}),F++}}else F++}return Me();function Q(te){j.push(te),oe=U}function Ce(te){var Qe=0;if(te!==-1){var Ne=B.substring(F+1,te);Ne&&Ne.trim()===""&&(Qe=Ne.length)}return Qe}function Me(te){return Y||(te===void 0&&(te=B.substring(U)),ne.push(te),U=N,Q(ne),O&&De()),re()}function ie(te){U=te,Q(ne),ne=[],A=B.indexOf(G,U)}function re(te){return{data:j,errors:ae,meta:{delimiter:C,linebreak:G,aborted:V,truncated:!!te,cursor:oe+(q||0)}}}function De(){T(re()),j=[],ae=[]}},this.abort=function(){V=!0},this.getCharIndex=function(){return U}}function f(x){var _=x.data,C=r[_.workerId],G=!1;if(_.error)C.userError(_.error,_.file);else if(_.results&&_.results.data){var g={abort:function(){G=!0,u(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:w,resume:w};if(L(C.userStep)){for(var T=0;T<_.results.data.length&&(C.userStep({data:_.results.data[T],errors:_.results.errors,meta:_.results.meta},g),!G);T++);delete _.results}else L(C.userChunk)&&(C.userChunk(_.results,g,_.file),delete _.results)}_.finished&&!G&&u(_.workerId,_.results)}function u(x,_){var C=r[x];L(C.userComplete)&&C.userComplete(_),C.terminate(),delete r[x]}function w(){throw new Error("Not implemented.")}function S(x){if(typeof x!="object"||x===null)return x;var _=Array.isArray(x)?[]:{};for(var C in x)_[C]=S(x[C]);return _}function b(x,_){return function(){x.apply(_,arguments)}}function L(x){return typeof x=="function"}return i&&(e.onmessage=function(x){var _=x.data;if(o.WORKER_ID===void 0&&_&&(o.WORKER_ID=_.workerId),typeof _.input=="string")e.postMessage({workerId:o.WORKER_ID,results:o.parse(_.input,_.config),finished:!0});else if(e.File&&_.input instanceof File||_.input instanceof Object){var C=o.parse(_.input,_.config);C&&e.postMessage({workerId:o.WORKER_ID,results:C,finished:!0})}}),(c.prototype=Object.create(l.prototype)).constructor=c,(h.prototype=Object.create(l.prototype)).constructor=h,(d.prototype=Object.create(d.prototype)).constructor=d,(p.prototype=Object.create(l.prototype)).constructor=p,o});let wt,Rt,hs,tt,It,io,ro,so;function tl(n,e,t,i,r,s,o){hs=n,tt=e,ro=t,so=i,It=r,io=s,nl(),il(),co()}function nl(){wt=document.createElement("button"),wt.className="collection-button",wt.setAttribute("title","集卡書"),fetch("images/book.svg").then(n=>n.text()).then(n=>{const e=n.replace(/<!DOCTYPE[^>]*>|<!--[\s\S]*?-->/g,""),t=e.match(/<svg[\s\S]*?\/svg>/g);t&&t.length>0?wt.innerHTML=t[0]:wt.innerHTML=e,li()}).catch(n=>{console.error("載入 SVG 失敗:",n),wt.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 1l-5 5v11l5-4.5V1zM1 4v14c0 1.1.9 2 2 2h11V4H1zm14-3v2h3v3h2V1h-5z"/>
                </svg>
            `,li()}),wt.addEventListener("click",ao),hs.appendChild(wt)}function il(){Rt=document.createElement("div"),Rt.className="collection-modal",Rt.style.display="none";const n=document.createElement("div");n.className="collection-info";const e=document.createElement("h2");e.className="collection-title",e.textContent="集卡書",n.appendChild(e);const t=document.createElement("div");t.className="collection-stats",n.appendChild(t),Rt.appendChild(n);const i=document.createElement("div");i.className="collection-grid",Rt.appendChild(i);const r=document.createElement("button");r.className="back-button",r.textContent="返回遊戲",r.addEventListener("click",ao),Rt.appendChild(r),hs.appendChild(Rt)}function li(){const n=tt.uniqueCardTypes.size,e=wt.querySelector("svg");if(e?wt.innerHTML=e.outerHTML:wt.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 1l-5 5v11l5-4.5V1zM1 4v14c0 1.1.9 2 2 2h11V4H1zm14-3v2h3v3h2V1h-5z"/>
            </svg>
        `,tt.newCardsCount>0){const i=document.createElement("div");i.className="new-cards-count",i.textContent=tt.newCardsCount,wt.appendChild(i)}const t=document.createElement("div");t.className="total-cards-count",t.textContent=n,wt.appendChild(t)}function ao(){tt.showCollection=!tt.showCollection,tt.showCollection?(tt.newCardsCount=0,localStorage.setItem("lastVisitTime",Date.now()),li(),lo(),Rt.style.display="flex",tt.viewingCardDetail&&oo()):Rt.style.display="none"}function Ii(n){switch(n){case"hearts":return"♥";case"diamonds":return"♦";case"spades":return"♠";case"clubs":return"♣";default:return""}}function rl(n){tt.viewingCardDetail=!0,tt.showCollection=!1,Rt.style.display="none";const e=tt.cards.filter(t=>t.name===n.name).length;n.count=e,Yo(n),It.textContent="返回集卡書",It.style.backgroundColor="#dc2626",It.style.color="white",It.originalClickEvent=It.onclick,It.onclick=oo,ro(n).then(t=>{tt.currentCard=n,so(t)})}function oo(){tt.viewingCardDetail=!1,io.style.display="none",It.textContent="抽牌",It.style.backgroundColor="",It.style.color="rgba(0, 0, 0, 0.8)",It.onclick=It.originalClickEvent,tt.showCollection=!0,Rt.style.display="flex",lo()}function lo(){const n=Rt.querySelector(".collection-grid"),e=Rt.querySelector(".collection-stats");n.innerHTML="";const t=no?no():[];if(t.length===0){const a=document.createElement("div");a.style.gridColumn="1 / -1",a.style.textAlign="center",a.style.color="white",a.style.fontSize="1.25rem",a.textContent="卡片加載失敗，請重新整理頁面",n.appendChild(a);return}const i={};tt.cards.forEach(a=>{i[a.name]?i[a.name].count++:i[a.name]={...a,count:1}});const r=t.length,s=Object.keys(i).length,o=Math.round(s/r*100);if(e.textContent=`已收集: ${s}/${r} (${o}%)`,t.forEach((a,l)=>{const c=l+1,h=i[a.name]!==void 0,d=document.createElement("div");d.className=h?"card-item":"card-item empty";const p=document.createElement("div");if(p.className="card-number",p.textContent=`${c}`,d.appendChild(p),h){const m=i[a.name],M=document.createElement("div");M.className="card-content",M.style.width="100%",M.style.height="100%",M.style.position="relative",M.style.display="flex",M.style.flexDirection="column",M.style.justifyContent="center",M.style.alignItems="center";const y=document.createElement("div");y.className="card-count-badge",y.textContent=`×${m.count}`,M.appendChild(y),d.appendChild(M);const f=document.createElement("div");f.className=`card-symbol ${m.color==="red"?"symbol-red":""}`,f.style.position="absolute",f.style.top="0.1rem",f.style.left="0.1rem",f.style.fontSize="1rem",f.style.fontWeight="bold",f.style.lineHeight="0.9",f.innerHTML=`${m.value}<br>${Ii(m.suit)}`,M.appendChild(f);const u=document.createElement("div");u.className=`card-symbol ${m.color==="red"?"symbol-red":""}`,u.style.position="absolute",u.style.bottom="0.1rem",u.style.right="0.1rem",u.style.fontSize="1rem",u.style.fontWeight="bold",u.style.lineHeight="0.9",u.style.transform="rotate(180deg)",u.innerHTML=`${m.value}<br>${Ii(m.suit)}`,M.appendChild(u);try{const w=document.createElement("img");w.className="card-image",w.src=`/images/${m.imageFile}`,w.alt=m.name,w.style.margin="0 auto",w.style.display="block",w.style.width="100%",w.style.maxWidth="100px",w.style.height="auto",w.style.aspectRatio="1/1",w.style.objectFit="cover",w.onerror=()=>{w.style.display="none";const S=document.createElement("div");S.className=`card-symbol ${m.color==="red"?"symbol-red":""}`,S.style.fontSize="5rem",S.style.textAlign="center",S.style.width="100%",S.style.marginBottom="0.5rem",S.textContent=Ii(m.suit),M.appendChild(S);const b=document.createElement("div");b.style.textAlign="center",b.style.width="100%",b.style.fontSize="0.9rem",b.style.padding="0 0.5rem",b.style.whiteSpace="nowrap",b.style.overflow="hidden",b.style.textOverflow="ellipsis",b.textContent=m.person||m.name,M.appendChild(b)},M.appendChild(w)}catch{const S=document.createElement("div");S.className=`card-symbol ${m.color==="red"?"symbol-red":""}`,S.style.fontSize="5rem",S.style.textAlign="center",S.style.width="100%",S.style.marginBottom="0.5rem",S.textContent=Ii(m.suit),M.appendChild(S);const b=document.createElement("div");b.style.textAlign="center",b.style.width="100%",b.style.fontSize="0.9rem",b.style.padding="0 0.5rem",b.style.whiteSpace="nowrap",b.style.overflow="hidden",b.style.textOverflow="ellipsis",b.textContent=m.person||m.name,M.appendChild(b)}d.style.cursor="pointer",d.addEventListener("click",()=>{rl(m)})}else{const m=document.createElement("div");m.style.display="flex",m.style.flexDirection="column",m.style.alignItems="center",m.style.justifyContent="center",m.style.height="100%",m.style.width="100%",m.style.padding="0.5rem";const M=document.createElement("div");M.style.fontSize="3.5rem",M.style.color="rgba(255, 255, 255, 0.15)",M.style.marginBottom="0.5rem",M.style.fontWeight="bold",M.style.fontFamily='"Arial", sans-serif',M.textContent="?",m.appendChild(M);const y=document.createElement("div");y.textContent="未收集",y.style.fontSize="0.7rem",y.style.marginTop="0.3rem",y.style.color="rgba(255, 255, 255, 0.4)",m.appendChild(y),d.appendChild(m)}n.appendChild(d)}),tt.cards.length===0&&t.length===0){const a=document.createElement("div");a.style.gridColumn="1 / -1",a.style.textAlign="center",a.style.color="white",a.style.fontSize="1.25rem",a.textContent="尚未收集到任何卡片",n.appendChild(a)}}function co(){const n=localStorage.getItem("kmtPokerCards");if(n){tt.cards=JSON.parse(n);const e=localStorage.getItem("lastVisitTime")||0,t=new Set,i=new Set;tt.cards.forEach(r=>{r.id<=e?t.add(r.name):i.add(r.name)}),tt.uniqueCardTypes=new Set([...t,...i]),tt.newCardsCount=Array.from(i).filter(r=>!t.has(r)).length,li()}}function sl(n=null){const e=n||tt;localStorage.setItem("kmtPokerCards",JSON.stringify(e.cards)),localStorage.setItem("lastVisitTime",Date.now())}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ds="162",al=0,Cs=1,ol=2,uo=1,ll=2,rn=3,ln=0,Mt=1,sn=2,_n=0,si=1,Rs=2,Ls=3,Ps=4,cl=5,In=100,ul=101,hl=102,Ds=103,Us=104,dl=200,fl=201,pl=202,ml=203,Qr=204,es=205,gl=206,_l=207,vl=208,xl=209,Ml=210,Sl=211,El=212,yl=213,Tl=214,Al=0,bl=1,wl=2,rr=3,Cl=4,Rl=5,Ll=6,Pl=7,fs=0,Dl=1,Ul=2,vn=0,Il=1,Nl=2,Fl=3,Ol=4,Bl=5,zl=6,Gl=7,ho=300,ci=301,ui=302,ts=303,ns=304,ur=306,is=1e3,Ht=1001,rs=1002,xt=1003,Is=1004,gi=1005,Et=1006,_r=1007,Fn=1008,xn=1009,Hl=1010,Vl=1011,ps=1012,fo=1013,gn=1014,an=1015,Ti=1016,po=1017,mo=1018,Bn=1020,kl=1021,Vt=1023,Wl=1024,Xl=1025,zn=1026,hi=1027,ql=1028,go=1029,Yl=1030,_o=1031,vo=1033,vr=33776,xr=33777,Mr=33778,Sr=33779,Ns=35840,Fs=35841,Os=35842,Bs=35843,xo=36196,zs=37492,Gs=37496,Hs=37808,Vs=37809,ks=37810,Ws=37811,Xs=37812,qs=37813,Ys=37814,$s=37815,Ks=37816,js=37817,Zs=37818,Js=37819,Qs=37820,ea=37821,Er=36492,ta=36494,na=36495,$l=36283,ia=36284,ra=36285,sa=36286,Kl=3200,jl=3201,Mo=0,Zl=1,mn="",Wt="srgb",En="srgb-linear",ms="display-p3",hr="display-p3-linear",sr="linear",je="srgb",ar="rec709",or="p3",Hn=7680,aa=519,Jl=512,Ql=513,ec=514,So=515,tc=516,nc=517,ic=518,rc=519,oa=35044,la="300 es",ss=1035,on=2e3,lr=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,as=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function sc(n,e){return(n%e+e)%e}function Tr(n,e,t){return(1-t)*n+t*e}function ca(n){return(n&n-1)===0&&n!==0}function os(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],m=i[5],M=i[8],y=r[0],f=r[3],u=r[6],w=r[1],S=r[4],b=r[7],L=r[2],x=r[5],_=r[8];return s[0]=o*y+a*w+l*L,s[3]=o*f+a*S+l*x,s[6]=o*u+a*b+l*_,s[1]=c*y+h*w+d*L,s[4]=c*f+h*S+d*x,s[7]=c*u+h*b+d*_,s[2]=p*y+m*w+M*L,s[5]=p*f+m*S+M*x,s[8]=p*u+m*b+M*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,p=a*l-h*s,m=c*s-o*l,M=t*d+i*p+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/M;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Ge;function Eo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ai(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ac(){const n=Ai("canvas");return n.style.display="block",n}const ua={};function oc(n){n in ua||(ua[n]=!0,console.warn(n))}const ha=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),da=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[En]:{transfer:sr,primaries:ar,toReference:n=>n,fromReference:n=>n},[Wt]:{transfer:je,primaries:ar,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[hr]:{transfer:sr,primaries:or,toReference:n=>n.applyMatrix3(da),fromReference:n=>n.applyMatrix3(ha)},[ms]:{transfer:je,primaries:or,toReference:n=>n.convertSRGBToLinear().applyMatrix3(da),fromReference:n=>n.applyMatrix3(ha).convertLinearToSRGB()}},lc=new Set([En,hr]),Ye={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!lc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ni[e].toReference,r=Ni[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ni[n].primaries},getTransfer:function(n){return n===mn?sr:Ni[n].transfer}};function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vn;class yo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=Ai("canvas")),Vn.width=e.width,Vn.height=e.height;const i=Vn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ai("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cc=0;class To{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wr(r[o].image)):s.push(wr(r[o]))}else s=wr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uc=0;class mt extends fi{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,i=Ht,r=Ht,s=Et,o=Fn,a=Vt,l=xn,c=mt.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=bi(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=ho;mt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],M=l[9],y=l[2],f=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-y)<.01&&Math.abs(M-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(M+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(m+1)/2,L=(u+1)/2,x=(h+p)/4,_=(d+y)/4,C=(M+f)/4;return S>b&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=x/i,s=_/i):b>L?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=x/r,s=C/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=_/s,r=C/s),this.set(i,r,s,t),this}let w=Math.sqrt((f-M)*(f-M)+(d-y)*(d-y)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(f-M)/w,this.y=(d-y)/w,this.z=(p-h)/w,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hc extends fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new mt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ao extends mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const p=s[o+0],m=s[o+1],M=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=M,e[t+3]=y;return}if(d!==y||l!==p||c!==m||h!==M){let f=1-a;const u=l*p+c*m+h*M+d*y,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const L=Math.sqrt(S),x=Math.atan2(L,u*w);f=Math.sin(f*x)/L,a=Math.sin(a*x)/L}const b=a*w;if(l=l*f+p*b,c=c*f+m*b,h=h*f+M*b,d=d*f+y*b,f===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],p=s[o+1],m=s[o+2],M=s[o+3];return e[t]=a*M+h*d+l*m-c*p,e[t+1]=l*M+h*p+c*d-a*m,e[t+2]=c*M+h*m+a*p-l*d,e[t+3]=h*M-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),p=l(i/2),m=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=p*h*d+c*m*M,this._y=c*m*d-p*h*M,this._z=c*h*M+p*m*d,this._w=c*h*d-p*m*M;break;case"YXZ":this._x=p*h*d+c*m*M,this._y=c*m*d-p*h*M,this._z=c*h*M-p*m*d,this._w=c*h*d+p*m*M;break;case"ZXY":this._x=p*h*d-c*m*M,this._y=c*m*d+p*h*M,this._z=c*h*M+p*m*d,this._w=c*h*d-p*m*M;break;case"ZYX":this._x=p*h*d-c*m*M,this._y=c*m*d+p*h*M,this._z=c*h*M-p*m*d,this._w=c*h*d+p*m*M;break;case"YZX":this._x=p*h*d+c*m*M,this._y=c*m*d+p*h*M,this._z=c*h*M-p*m*d,this._w=c*h*d-p*m*M;break;case"XZY":this._x=p*h*d-c*m*M,this._y=c*m*d-p*h*M,this._z=c*h*M+p*m*d,this._w=c*h*d+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cr.copy(this).projectOnVector(e),this.sub(Cr)}reflect(e){return this.sub(Cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new H,fa=new wi;class Ci{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ot):Ot.fromBufferAttribute(s,o),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fi.copy(i.boundingBox)),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Oi.subVectors(this.max,vi),kn.subVectors(e.a,vi),Wn.subVectors(e.b,vi),Xn.subVectors(e.c,vi),cn.subVectors(Wn,kn),un.subVectors(Xn,Wn),bn.subVectors(kn,Xn);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-bn.z,bn.y,cn.z,0,-cn.x,un.z,0,-un.x,bn.z,0,-bn.x,-cn.y,cn.x,0,-un.y,un.x,0,-bn.y,bn.x,0];return!Rr(t,kn,Wn,Xn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!Rr(t,kn,Wn,Xn,Oi))?!1:(Bi.crossVectors(cn,un),t=[Bi.x,Bi.y,Bi.z],Rr(t,kn,Wn,Xn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new H,new H,new H,new H,new H,new H,new H,new H],Ot=new H,Fi=new Ci,kn=new H,Wn=new H,Xn=new H,cn=new H,un=new H,bn=new H,vi=new H,Oi=new H,Bi=new H,wn=new H;function Rr(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wn.fromArray(n,s);const a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),h=i.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fc=new Ci,xi=new H,Lr=new H;class gs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Lr)),this.expandByPoint(xi.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new H,Pr=new H,zi=new H,hn=new H,Dr=new H,Gi=new H,Ur=new H;class pc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pr.copy(e).add(t).multiplyScalar(.5),zi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Pr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zi),a=hn.dot(this.direction),l=-hn.dot(zi),c=hn.lengthSq(),h=Math.abs(1-o*o);let d,p,m,M;if(h>0)if(d=o*l-a,p=o*a-l,M=s*h,d>=0)if(p>=-M)if(p<=M){const y=1/h;d*=y,p*=y,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-M?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=M?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pr).addScaledVector(zi,p),m}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const i=Qt.dot(this.direction),r=Qt.dot(Qt)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,i,r,s){Dr.subVectors(t,e),Gi.subVectors(i,e),Ur.crossVectors(Dr,Gi);let o=this.direction.dot(Ur),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const l=a*this.direction.dot(Gi.crossVectors(hn,Gi));if(l<0)return null;const c=a*this.direction.dot(Dr.cross(hn));if(c<0||l+c>o)return null;const h=-a*hn.dot(Ur);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,o,a,l,c,h,d,p,m,M,y,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,p,m,M,y,f)}set(e,t,i,r,s,o,a,l,c,h,d,p,m,M,y,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=M,u[11]=y,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*h,m=o*d,M=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+M*c,t[5]=p-y*c,t[9]=-a*l,t[2]=y-p*c,t[6]=M+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*d,M=c*h,y=c*d;t[0]=p+y*a,t[4]=M*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-M,t[6]=y+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*d,M=c*h,y=c*d;t[0]=p-y*a,t[4]=-o*d,t[8]=M+m*a,t[1]=m+M*a,t[5]=o*h,t[9]=y-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*d,M=a*h,y=a*d;t[0]=l*h,t[4]=M*c-m,t[8]=p*c+y,t[1]=l*d,t[5]=y*c+p,t[9]=m*c-M,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,M=a*l,y=a*c;t[0]=l*h,t[4]=y-p*d,t[8]=M*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+M,t[10]=p-y*d}else if(e.order==="XZY"){const p=o*l,m=o*c,M=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+y,t[5]=o*h,t[9]=m*d-M,t[2]=M*d-m,t[6]=a*h,t[10]=y*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mc,e,gc)}lookAt(e,t,i){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),dn.crossVectors(i,At),dn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),dn.crossVectors(i,At)),dn.normalize(),Hi.crossVectors(At,dn),r[0]=dn.x,r[4]=Hi.x,r[8]=At.x,r[1]=dn.y,r[5]=Hi.y,r[9]=At.y,r[2]=dn.z,r[6]=Hi.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],m=i[13],M=i[2],y=i[6],f=i[10],u=i[14],w=i[3],S=i[7],b=i[11],L=i[15],x=r[0],_=r[4],C=r[8],G=r[12],g=r[1],T=r[5],$=r[9],Z=r[13],R=r[2],U=r[6],V=r[10],B=r[14],q=r[3],Y=r[7],N=r[11],J=r[15];return s[0]=o*x+a*g+l*R+c*q,s[4]=o*_+a*T+l*U+c*Y,s[8]=o*C+a*$+l*V+c*N,s[12]=o*G+a*Z+l*B+c*J,s[1]=h*x+d*g+p*R+m*q,s[5]=h*_+d*T+p*U+m*Y,s[9]=h*C+d*$+p*V+m*N,s[13]=h*G+d*Z+p*B+m*J,s[2]=M*x+y*g+f*R+u*q,s[6]=M*_+y*T+f*U+u*Y,s[10]=M*C+y*$+f*V+u*N,s[14]=M*G+y*Z+f*B+u*J,s[3]=w*x+S*g+b*R+L*q,s[7]=w*_+S*T+b*U+L*Y,s[11]=w*C+S*$+b*V+L*N,s[15]=w*G+S*Z+b*B+L*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],m=e[14],M=e[3],y=e[7],f=e[11],u=e[15];return M*(+s*l*d-r*c*d-s*a*p+i*c*p+r*a*m-i*l*m)+y*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*h-s*l*h)+f*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-t*l*d+t*a*p+r*o*d-i*o*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],m=e[11],M=e[12],y=e[13],f=e[14],u=e[15],w=d*f*c-y*p*c+y*l*m-a*f*m-d*l*u+a*p*u,S=M*p*c-h*f*c-M*l*m+o*f*m+h*l*u-o*p*u,b=h*y*c-M*d*c+M*a*m-o*y*m-h*a*u+o*d*u,L=M*d*l-h*y*l-M*a*p+o*y*p+h*a*f-o*d*f,x=t*w+i*S+r*b+s*L;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=w*_,e[1]=(y*p*s-d*f*s-y*r*m+i*f*m+d*r*u-i*p*u)*_,e[2]=(a*f*s-y*l*s+y*r*c-i*f*c-a*r*u+i*l*u)*_,e[3]=(d*l*s-a*p*s-d*r*c+i*p*c+a*r*m-i*l*m)*_,e[4]=S*_,e[5]=(h*f*s-M*p*s+M*r*m-t*f*m-h*r*u+t*p*u)*_,e[6]=(M*l*s-o*f*s-M*r*c+t*f*c+o*r*u-t*l*u)*_,e[7]=(o*p*s-h*l*s+h*r*c-t*p*c-o*r*m+t*l*m)*_,e[8]=b*_,e[9]=(M*d*s-h*y*s-M*i*m+t*y*m+h*i*u-t*d*u)*_,e[10]=(o*y*s-M*a*s+M*i*c-t*y*c-o*i*u+t*a*u)*_,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*_,e[12]=L*_,e[13]=(h*y*r-M*d*r+M*i*p-t*y*p-h*i*f+t*d*f)*_,e[14]=(M*a*r-o*y*r-M*i*l+t*y*l+o*i*f-t*a*f)*_,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*p+t*a*p)*_,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,p=s*c,m=s*h,M=s*d,y=o*h,f=o*d,u=a*d,w=l*c,S=l*h,b=l*d,L=i.x,x=i.y,_=i.z;return r[0]=(1-(y+u))*L,r[1]=(m+b)*L,r[2]=(M-S)*L,r[3]=0,r[4]=(m-b)*x,r[5]=(1-(p+u))*x,r[6]=(f+w)*x,r[7]=0,r[8]=(M+S)*_,r[9]=(f-w)*_,r[10]=(1-(p+y))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),a=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/s,h=1/o,d=1/a;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=d,Bt.elements[9]*=d,Bt.elements[10]*=d,t.setFromRotationMatrix(Bt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=on){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,M;if(a===on)m=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===lr)m=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=on){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-s),p=(t+e)*c,m=(i+r)*h;let M,y;if(a===on)M=(o+s)*d,y=-2*d;else if(a===lr)M=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qn=new H,Bt=new rt,mc=new H(0,0,0),gc=new H(1,1,1),dn=new H,Hi=new H,At=new H,pa=new rt,ma=new wi;class jt{constructor(e=0,t=0,i=0,r=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ma.setFromEuler(this),this.setFromQuaternion(ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _c=0;const ga=new H,Yn=new wi,en=new rt,Vi=new H,Mi=new H,vc=new H,xc=new wi,_a=new H(1,0,0),va=new H(0,1,0),xa=new H(0,0,1),Mc={type:"added"},Sc={type:"removed"},Ir={type:"childadded",child:null},Nr={type:"childremoved",child:null};class gt extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new H,t=new jt,i=new wi,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vi.copy(e):Vi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Mi,Vi,this.up):en.lookAt(Vi,Mi,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(en),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new H(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new H,tn=new H,Fr=new H,nn=new H,$n=new H,Kn=new H,Ma=new H,Or=new H,Br=new H,zr=new H;class qt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zt.subVectors(e,t),r.cross(zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zt.subVectors(r,t),tn.subVectors(i,t),Fr.subVectors(e,t);const o=zt.dot(zt),a=zt.dot(tn),l=zt.dot(Fr),c=tn.dot(tn),h=tn.dot(Fr),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-a*h)*p,M=(o*h-a*l)*p;return s.set(1-m-M,M,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static isFrontFacing(e,t,i,r){return zt.subVectors(i,t),tn.subVectors(e,t),zt.cross(tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),zt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$n.subVectors(r,i),Kn.subVectors(s,i),Or.subVectors(e,i);const l=$n.dot(Or),c=Kn.dot(Or);if(l<=0&&c<=0)return t.copy(i);Br.subVectors(e,r);const h=$n.dot(Br),d=Kn.dot(Br);if(h>=0&&d<=h)return t.copy(r);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector($n,o);zr.subVectors(e,s);const m=$n.dot(zr),M=Kn.dot(zr);if(M>=0&&m<=M)return t.copy(s);const y=m*c-l*M;if(y<=0&&c>=0&&M<=0)return a=c/(c-M),t.copy(i).addScaledVector(Kn,a);const f=h*M-m*d;if(f<=0&&d-h>=0&&m-M>=0)return Ma.subVectors(s,r),a=(d-h)/(d-h+(m-M)),t.copy(r).addScaledVector(Ma,a);const u=1/(f+y+p);return o=y*u,a=p*u,t.copy(i).addScaledVector($n,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Gr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=sc(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gr(o,s,e+1/3),this.g=Gr(o,s,e),this.b=Gr(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=wo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ye.fromWorkingColorSpace(pt.copy(this),e),Math.round(yt(pt.r*255,0,255))*65536+Math.round(yt(pt.g*255,0,255))*256+Math.round(yt(pt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(pt.copy(this),t);const i=pt.r,r=pt.g,s=pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Wt){Ye.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,i=pt.g,r=pt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(ki);const i=Tr(fn.h,ki.h,t),r=Tr(fn.s,ki.s,t),s=Tr(fn.l,ki.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new qe;qe.NAMES=wo;let Ec=0;class Ri extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=si,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=es,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(i.blending=this.blending),this.side!==ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qr&&(i.blendSrc=this.blendSrc),this.blendDst!==es&&(i.blendDst=this.blendDst),this.blendEquation!==In&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _s extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new H,Wi=new Xe;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Co extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ro extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yc=0;const Dt=new rt,Hr=new gt,jn=new H,bt=new Ci,Si=new Ci,ct=new H;class yn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eo(e)?Ro:Co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(bt.min,Si.min),bt.expandByPoint(ct),ct.addVectors(bt.max,Si.max),bt.expandByPoint(ct)):(bt.expandByPoint(Si.min),bt.expandByPoint(Si.max))}bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ct.fromBufferAttribute(a,c),l&&(jn.fromBufferAttribute(e,c),ct.add(jn)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;const c=new H,h=new H,d=new H,p=new Xe,m=new Xe,M=new Xe,y=new H,f=new H;function u(C,G,g){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,G),d.fromBufferAttribute(i,g),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,G),M.fromBufferAttribute(s,g),h.sub(c),d.sub(c),m.sub(p),M.sub(p);const T=1/(m.x*M.y-M.x*m.y);isFinite(T)&&(y.copy(h).multiplyScalar(M.y).addScaledVector(d,-m.y).multiplyScalar(T),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-M.x).multiplyScalar(T),a[C].add(y),a[G].add(y),a[g].add(y),l[C].add(f),l[G].add(f),l[g].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,G=w.length;C<G;++C){const g=w[C],T=g.start,$=g.count;for(let Z=T,R=T+$;Z<R;Z+=3)u(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const S=new H,b=new H,L=new H,x=new H;function _(C){L.fromBufferAttribute(r,C),x.copy(L);const G=a[C];S.copy(G),S.sub(L.multiplyScalar(L.dot(G))).normalize(),b.crossVectors(x,G);const T=b.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,T)}for(let C=0,G=w.length;C<G;++C){const g=w[C],T=g.start,$=g.count;for(let Z=T,R=T+$;Z<R;Z+=3)_(e.getX(Z+0)),_(e.getX(Z+1)),_(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let p=0,m=e.count;p<m;p+=3){const M=e.getX(p+0),y=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,f),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h);let m=0,M=0;for(let y=0,f=l.length;y<f;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let u=0;u<h;u++)p[M++]=c[m++]}return new $t(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new rt,Cn=new pc,Xi=new gs,Ea=new H,Zn=new H,Jn=new H,Qn=new H,Vr=new H,qi=new H,Yi=new Xe,$i=new Xe,Ki=new Xe,ya=new H,Ta=new H,Aa=new H,ji=new H,Zi=new H;class Ft extends gt{constructor(e=new yn,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Vr.fromBufferAttribute(d,e),o?qi.addScaledVector(Vr,h):qi.addScaledVector(Vr.sub(t),h))}t.add(qi)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xi.copy(i.boundingSphere),Xi.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),!(Xi.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Xi,Ea)===null||Cn.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(Sa.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(Sa),!(i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,y=p.length;M<y;M++){const f=p[M],u=o[f.materialIndex],w=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=w,L=S;b<L;b+=3){const x=a.getX(b),_=a.getX(b+1),C=a.getX(b+2);r=Ji(this,u,e,i,c,h,d,x,_,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let f=M,u=y;f<u;f+=3){const w=a.getX(f),S=a.getX(f+1),b=a.getX(f+2);r=Ji(this,o,e,i,c,h,d,w,S,b),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,y=p.length;M<y;M++){const f=p[M],u=o[f.materialIndex],w=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=w,L=S;b<L;b+=3){const x=b,_=b+1,C=b+2;r=Ji(this,u,e,i,c,h,d,x,_,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=M,u=y;f<u;f+=3){const w=f,S=f+1,b=f+2;r=Ji(this,o,e,i,c,h,d,w,S,b),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Tc(n,e,t,i,r,s,o,a){let l;if(e.side===Mt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ln,a),l===null)return null;Zi.copy(a),Zi.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zi);return c<t.near||c>t.far?null:{distance:c,point:Zi.clone(),object:n}}function Ji(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Zn),n.getVertexPosition(l,Jn),n.getVertexPosition(c,Qn);const h=Tc(n,e,t,i,Zn,Jn,Qn,ji);if(h){r&&(Yi.fromBufferAttribute(r,a),$i.fromBufferAttribute(r,l),Ki.fromBufferAttribute(r,c),h.uv=qt.getInterpolation(ji,Zn,Jn,Qn,Yi,$i,Ki,new Xe)),s&&(Yi.fromBufferAttribute(s,a),$i.fromBufferAttribute(s,l),Ki.fromBufferAttribute(s,c),h.uv1=qt.getInterpolation(ji,Zn,Jn,Qn,Yi,$i,Ki,new Xe)),o&&(ya.fromBufferAttribute(o,a),Ta.fromBufferAttribute(o,l),Aa.fromBufferAttribute(o,c),h.normal=qt.getInterpolation(ji,Zn,Jn,Qn,ya,Ta,Aa,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};qt.getNormal(Zn,Jn,Qn,d.normal),h.face=d}return h}class Li extends yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let p=0,m=0;M("z","y","x",-1,-1,i,t,e,o,s,0),M("z","y","x",1,-1,i,t,-e,o,s,1),M("x","z","y",1,1,e,i,t,r,o,2),M("x","z","y",1,-1,e,i,-t,r,o,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function M(y,f,u,w,S,b,L,x,_,C,G){const g=b/_,T=L/C,$=b/2,Z=L/2,R=x/2,U=_+1,V=C+1;let B=0,q=0;const Y=new H;for(let N=0;N<V;N++){const J=N*T-Z;for(let ue=0;ue<U;ue++){const _e=ue*g-$;Y[y]=_e*w,Y[f]=J*S,Y[u]=R,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[f]=0,Y[u]=x>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ue/_),d.push(1-N/C),B+=1}}for(let N=0;N<C;N++)for(let J=0;J<_;J++){const ue=p+J+U*N,_e=p+J+U*(N+1),O=p+(J+1)+U*(N+1),j=p+(J+1)+U*N;l.push(ue,_e,j),l.push(_e,O,j),q+=6}a.addGroup(m,q,G),m+=q,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vt(n){const e={};for(let t=0;t<n.length;t++){const i=di(n[t]);for(const r in i)e[r]=i[r]}return e}function Ac(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lo(n){return n.getRenderTarget()===null?n.outputColorSpace:Ye.workingColorSpace}const bc={clone:di,merge:vt};var wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Ac(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Po extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new H,ba=new Xe,wa=new Xe;class Nt extends Po{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,ba,wa),t.subVectors(wa,ba)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Rc extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(ei,ti,e,t);r.layers=this.layers,this.add(r);const s=new Nt(ei,ti,e,t);s.layers=this.layers,this.add(s);const o=new Nt(ei,ti,e,t);o.layers=this.layers,this.add(o);const a=new Nt(ei,ti,e,t);a.layers=this.layers,this.add(a);const l=new Nt(ei,ti,e,t);l.layers=this.layers,this.add(l);const c=new Nt(ei,ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===on)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,p,m),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Do extends mt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lc extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Do(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mt,blending:_n});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Et),new Rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const kr=new H,Pc=new H,Dc=new Ge;class Dn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=kr.subVectors(i,t).cross(Pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dc.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new gs,Qi=new H;class vs{constructor(e=new Dn,t=new Dn,i=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=on){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],p=r[7],m=r[8],M=r[9],y=r[10],f=r[11],u=r[12],w=r[13],S=r[14],b=r[15];if(i[0].setComponents(l-s,p-c,f-m,b-u).normalize(),i[1].setComponents(l+s,p+c,f+m,b+u).normalize(),i[2].setComponents(l+o,p+h,f+M,b+w).normalize(),i[3].setComponents(l-o,p-h,f-M,b-w).normalize(),i[4].setComponents(l-a,p-d,f-y,b-S).normalize(),t===on)i[5].setComponents(l+a,p+d,f+y,b+S).normalize();else if(t===lr)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qi.x=r.normal.x>0?e.max.x:e.min.x,Qi.y=r.normal.y>0?e.max.y:e.min.y,Qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uo(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Uc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,p=c.usage,m=d.byteLength,M=n.createBuffer();n.bindBuffer(h,M),n.bufferData(h,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:M,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const p=h.array,m=h._updateRange,M=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&M.length===0&&n.bufferSubData(d,0,p),M.length!==0){for(let y=0,f=M.length;y<f;y++){const u=M[y];t?n.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class Pi extends yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,p=t/l,m=[],M=[],y=[],f=[];for(let u=0;u<h;u++){const w=u*p-o;for(let S=0;S<c;S++){const b=S*d-s;M.push(b,-w,0),y.push(0,0,1),f.push(S/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){const S=w+c*u,b=w+c*(u+1),L=w+1+c*(u+1),x=w+1+c*u;m.push(S,b,x),m.push(b,L,x)}this.setIndex(m),this.setAttribute("position",new Kt(M,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$c=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ah=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Th=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ah=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ch=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,td=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,id=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,od=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Ic,alphahash_pars_fragment:Nc,alphamap_fragment:Fc,alphamap_pars_fragment:Oc,alphatest_fragment:Bc,alphatest_pars_fragment:zc,aomap_fragment:Gc,aomap_pars_fragment:Hc,batching_pars_vertex:Vc,batching_vertex:kc,begin_vertex:Wc,beginnormal_vertex:Xc,bsdfs:qc,iridescence_fragment:Yc,bumpmap_pars_fragment:$c,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:jc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Jc,color_fragment:Qc,color_pars_fragment:eu,color_pars_vertex:tu,color_vertex:nu,common:iu,cube_uv_reflection_fragment:ru,defaultnormal_vertex:su,displacementmap_pars_vertex:au,displacementmap_vertex:ou,emissivemap_fragment:lu,emissivemap_pars_fragment:cu,colorspace_fragment:uu,colorspace_pars_fragment:hu,envmap_fragment:du,envmap_common_pars_fragment:fu,envmap_pars_fragment:pu,envmap_pars_vertex:mu,envmap_physical_pars_fragment:wu,envmap_vertex:gu,fog_vertex:_u,fog_pars_vertex:vu,fog_fragment:xu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_fragment:Eu,lightmap_pars_fragment:yu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:Au,lights_pars_begin:bu,lights_toon_fragment:Cu,lights_toon_pars_fragment:Ru,lights_phong_fragment:Lu,lights_phong_pars_fragment:Pu,lights_physical_fragment:Du,lights_physical_pars_fragment:Uu,lights_fragment_begin:Iu,lights_fragment_maps:Nu,lights_fragment_end:Fu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:Gu,map_fragment:Hu,map_pars_fragment:Vu,map_particle_fragment:ku,map_particle_pars_fragment:Wu,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:qu,morphinstance_vertex:Yu,morphcolor_vertex:$u,morphnormal_vertex:Ku,morphtarget_pars_vertex:ju,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:eh,normal_pars_vertex:th,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:rh,clearcoat_normal_fragment_maps:sh,clearcoat_pars_fragment:ah,iridescence_pars_fragment:oh,opaque_fragment:lh,packing:ch,premultiplied_alpha_fragment:uh,project_vertex:hh,dithering_fragment:dh,dithering_pars_fragment:fh,roughnessmap_fragment:ph,roughnessmap_pars_fragment:mh,shadowmap_pars_fragment:gh,shadowmap_pars_vertex:_h,shadowmap_vertex:vh,shadowmask_pars_fragment:xh,skinbase_vertex:Mh,skinning_pars_vertex:Sh,skinning_vertex:Eh,skinnormal_vertex:yh,specularmap_fragment:Th,specularmap_pars_fragment:Ah,tonemapping_fragment:bh,tonemapping_pars_fragment:wh,transmission_fragment:Ch,transmission_pars_fragment:Rh,uv_pars_fragment:Lh,uv_pars_vertex:Ph,uv_vertex:Dh,worldpos_vertex:Uh,background_vert:Ih,background_frag:Nh,backgroundCube_vert:Fh,backgroundCube_frag:Oh,cube_vert:Bh,cube_frag:zh,depth_vert:Gh,depth_frag:Hh,distanceRGBA_vert:Vh,distanceRGBA_frag:kh,equirect_vert:Wh,equirect_frag:Xh,linedashed_vert:qh,linedashed_frag:Yh,meshbasic_vert:$h,meshbasic_frag:Kh,meshlambert_vert:jh,meshlambert_frag:Zh,meshmatcap_vert:Jh,meshmatcap_frag:Qh,meshnormal_vert:ed,meshnormal_frag:td,meshphong_vert:nd,meshphong_frag:id,meshphysical_vert:rd,meshphysical_frag:sd,meshtoon_vert:ad,meshtoon_frag:od,points_vert:ld,points_frag:cd,shadow_vert:ud,shadow_frag:hd,sprite_vert:dd,sprite_frag:fd},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Xt={basic:{uniforms:vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:vt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:vt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:vt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:vt([ce.common,ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:vt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Xt.physical={uniforms:vt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const er={r:0,b:0,g:0},Ln=new jt,pd=new rt;function md(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,h,d=null,p=0,m=null;function M(f,u){let w=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?t:e).get(S)),S===null?y(a,l):S&&S.isColor&&(y(S,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ur)?(h===void 0&&(h=new Ft(new Li(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:di(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,x,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ln.copy(u.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pd.makeRotationFromEuler(Ln)),h.material.toneMapped=Ye.getTransfer(S.colorSpace)!==je,(d!==S||p!==S.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,p=S.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ft(new Pi(2,2),new Sn({name:"BackgroundMaterial",uniforms:di(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function y(f,u){f.getRGB(er,Lo(n)),i.buffers.color.setClear(er.r,er.g,er.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,y(a,l)},render:M}}function gd(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function d(R,U,V,B,q){let Y=!1;if(o){const N=y(B,V,U);c!==N&&(c=N,m(c.object)),Y=u(R,B,V,q),Y&&w(R,B,V,q)}else{const N=U.wireframe===!0;(c.geometry!==B.id||c.program!==V.id||c.wireframe!==N)&&(c.geometry=B.id,c.program=V.id,c.wireframe=N,Y=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,C(R,U,V,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function M(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function y(R,U,V){const B=V.wireframe===!0;let q=a[R.id];q===void 0&&(q={},a[R.id]=q);let Y=q[U.id];Y===void 0&&(Y={},q[U.id]=Y);let N=Y[B];return N===void 0&&(N=f(p()),Y[B]=N),N}function f(R){const U=[],V=[],B=[];for(let q=0;q<r;q++)U[q]=0,V[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:B,object:R,attributes:{},index:null}}function u(R,U,V,B){const q=c.attributes,Y=U.attributes;let N=0;const J=V.getAttributes();for(const ue in J)if(J[ue].location>=0){const O=q[ue];let j=Y[ue];if(j===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),O===void 0||O.attribute!==j||j&&O.data!==j.data)return!0;N++}return c.attributesNum!==N||c.index!==B}function w(R,U,V,B){const q={},Y=U.attributes;let N=0;const J=V.getAttributes();for(const ue in J)if(J[ue].location>=0){let O=Y[ue];O===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(O=R.instanceColor));const j={};j.attribute=O,O&&O.data&&(j.data=O.data),q[ue]=j,N++}c.attributes=q,c.attributesNum=N,c.index=B}function S(){const R=c.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function b(R){L(R,0)}function L(R,U){const V=c.newAttributes,B=c.enabledAttributes,q=c.attributeDivisors;V[R]=1,B[R]===0&&(n.enableVertexAttribArray(R),B[R]=1),q[R]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),q[R]=U)}function x(){const R=c.newAttributes,U=c.enabledAttributes;for(let V=0,B=U.length;V<B;V++)U[V]!==R[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function _(R,U,V,B,q,Y,N){N===!0?n.vertexAttribIPointer(R,U,V,q,Y):n.vertexAttribPointer(R,U,V,B,q,Y)}function C(R,U,V,B){if(i.isWebGL2===!1&&(R.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const q=B.attributes,Y=V.getAttributes(),N=U.defaultAttributeValues;for(const J in Y){const ue=Y[J];if(ue.location>=0){let _e=q[J];if(_e===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),_e!==void 0){const O=_e.normalized,j=_e.itemSize,ae=t.get(_e);if(ae===void 0)continue;const ne=ae.buffer,oe=ae.type,se=ae.bytesPerElement,be=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||_e.gpuType===fo);if(_e.isInterleavedBufferAttribute){const pe=_e.data,D=pe.stride,He=_e.offset;if(pe.isInstancedInterleavedBuffer){for(let he=0;he<ue.locationSize;he++)L(ue.location+he,pe.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<ue.locationSize;he++)b(ue.location+he);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let he=0;he<ue.locationSize;he++)_(ue.location+he,j/ue.locationSize,oe,O,D*se,(He+j/ue.locationSize*he)*se,be)}else{if(_e.isInstancedBufferAttribute){for(let pe=0;pe<ue.locationSize;pe++)L(ue.location+pe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<ue.locationSize;pe++)b(ue.location+pe);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let pe=0;pe<ue.locationSize;pe++)_(ue.location+pe,j/ue.locationSize,oe,O,j*se,j/ue.locationSize*pe*se,be)}}else if(N!==void 0){const O=N[J];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ue.location,O);break;case 3:n.vertexAttrib3fv(ue.location,O);break;case 4:n.vertexAttrib4fv(ue.location,O);break;default:n.vertexAttrib1fv(ue.location,O)}}}}x()}function G(){$();for(const R in a){const U=a[R];for(const V in U){const B=U[V];for(const q in B)M(B[q].object),delete B[q];delete U[V]}delete a[R]}}function g(R){if(a[R.id]===void 0)return;const U=a[R.id];for(const V in U){const B=U[V];for(const q in B)M(B[q].object),delete B[q];delete U[V]}delete a[R.id]}function T(R){for(const U in a){const V=a[U];if(V[R.id]===void 0)continue;const B=V[R.id];for(const q in B)M(B[q].object),delete B[q];delete V[R.id]}}function $(){Z(),h=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:Z,dispose:G,releaseStatesOfGeometry:g,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:b,disableUnusedAttributes:x}}function _d(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){n.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,p){if(p===0)return;let m,M;if(r)m=n,M="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[M](s,h,d,p),t.update(d,s,p)}function c(h,d,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<p;M++)this.render(h[M],d[M]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,p);let M=0;for(let y=0;y<p;y++)M+=d[y];t.update(M,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function vd(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,b=o||e.has("OES_texture_float"),L=S&&b,x=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:x}}function xd(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Dn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){const M=d.clippingPlanes,y=d.clipIntersection,f=d.clipShadows,u=n.get(d);if(!r||M===null||M.length===0||s&&!f)s?h(null):c();else{const w=s?0:i,S=w*4;let b=u.clippingState||null;l.value=b,b=h(M,p,S,m);for(let L=0;L!==S;++L)b[L]=t[L];u.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,m,M){const y=d!==null?d.length:0;let f=null;if(y!==0){if(f=l.value,M!==!0||f===null){const u=m+y*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<u)&&(f=new Float32Array(u));for(let S=0,b=m;S!==y;++S,b+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function Md(n){let e=new WeakMap;function t(o,a){return a===ts?o.mapping=ci:a===ns&&(o.mapping=ui),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ts||a===ns)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Io extends Po{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ii=4,Ca=[.125,.215,.35,.446,.526,.582],Nn=20,Wr=new Io,Ra=new qe;let Xr=null,qr=0,Yr=0;const Un=(1+Math.sqrt(5))/2,ni=1/Un,La=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Un,ni),new H(0,Un,-ni),new H(ni,0,Un),new H(-ni,0,Un),new H(Un,ni,0),new H(-Un,ni,0)];class Pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xr,qr,Yr),e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Ti,format:Vt,colorSpace:En,depthBuffer:!1},r=Da(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sd(s)),this._blurMaterial=Ed(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,i,r){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Ra),h.toneMapping=vn,h.autoClear=!1;const m=new _s({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),M=new Ft(new Li,m);let y=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,y=!0):(m.color.copy(Ra),y=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const S=this._cubeSize;tr(r,w*S,u>2?S:0,S,S),h.setRenderTarget(r),y&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ci||e.mapping===ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=La[(r-1)%La.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ft(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),y=s/M,f=isFinite(s)?1+Math.floor(h*y):Nn;f>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Nn}`);const u=[];let w=0;for(let _=0;_<Nn;++_){const C=_/y,G=Math.exp(-C*C/2);u.push(G),_===0?w+=G:_<f&&(w+=2*G)}for(let _=0;_<u.length;_++)u[_]=u[_]/w;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=M,p.mipInt.value=S-i;const b=this._sizeLods[r],L=3*b*(r>S-ii?r-S+ii:0),x=4*(this._cubeSize-b);tr(t,L,x,3*b,2*b),l.setRenderTarget(t),l.render(d,Wr)}}function Sd(n){const e=[],t=[],i=[];let r=n;const s=n-ii+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ii?l=Ca[o-n+ii-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,M=6,y=3,f=2,u=1,w=new Float32Array(y*M*m),S=new Float32Array(f*M*m),b=new Float32Array(u*M*m);for(let x=0;x<m;x++){const _=x%3*2/3-1,C=x>2?0:-1,G=[_,C,0,_+2/3,C,0,_+2/3,C+1,0,_,C,0,_+2/3,C+1,0,_,C+1,0];w.set(G,y*M*x),S.set(p,f*M*x);const g=[x,x,x,x,x,x];b.set(g,u*M*x)}const L=new yn;L.setAttribute("position",new $t(w,y)),L.setAttribute("uv",new $t(S,f)),L.setAttribute("faceIndex",new $t(b,u)),e.push(L),r>ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Da(n,e,t){const i=new Gn(n,e,t);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ed(n,e,t){const i=new Float32Array(Nn),r=new H(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ua(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ia(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yd(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ts||l===ns,h=l===ci||l===ui;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Pa(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Pa(n));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Td(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ad(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);for(const M in p.morphAttributes){const y=p.morphAttributes[M];for(let f=0,u=y.length;f<u;f++)e.remove(y[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const M in p)e.update(p[M],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const M in m){const y=m[M];for(let f=0,u=y.length;f<u;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,M=d.attributes.position;let y=0;if(m!==null){const w=m.array;y=m.version;for(let S=0,b=w.length;S<b;S+=3){const L=w[S+0],x=w[S+1],_=w[S+2];p.push(L,x,x,_,_,L)}}else if(M!==void 0){const w=M.array;y=M.version;for(let S=0,b=w.length/3-1;S<b;S+=3){const L=S+0,x=S+1,_=S+2;p.push(L,x,x,_,_,L)}}else return;const f=new(Eo(p)?Ro:Co)(p,1);f.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,f)}function h(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function bd(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,M){n.drawElements(s,M,a,m*l),t.update(M,s,1)}function d(m,M,y){if(y===0)return;let f,u;if(r)f=n,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,M,a,m*l,y),t.update(M,s,y)}function p(m,M,y){if(y===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<y;u++)this.render(m[u]/l,M[u]);else{f.multiDrawElementsWEBGL(s,M,0,a,m,0,y);let u=0;for(let w=0;w<y;w++)u+=M[w];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function wd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Cd(n,e){return n[0]-e[0]}function Rd(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ld(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const M=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=M!==void 0?M.length:0;let f=s.get(h);if(f===void 0||f.count!==y){let Z=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var m=Z;f!==void 0&&f.texture.dispose();const u=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let _=0;u===!0&&(_=1),w===!0&&(_=2),S===!0&&(_=3);let C=h.attributes.position.count*_,G=1;C>e.maxTextureSize&&(G=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const g=new Float32Array(C*G*4*y),T=new Ao(g,C,G,y);T.type=an,T.needsUpdate=!0;const $=_*4;for(let R=0;R<y;R++){const U=b[R],V=L[R],B=x[R],q=C*G*4*R;for(let Y=0;Y<U.count;Y++){const N=Y*$;u===!0&&(o.fromBufferAttribute(U,Y),g[q+N+0]=o.x,g[q+N+1]=o.y,g[q+N+2]=o.z,g[q+N+3]=0),w===!0&&(o.fromBufferAttribute(V,Y),g[q+N+4]=o.x,g[q+N+5]=o.y,g[q+N+6]=o.z,g[q+N+7]=0),S===!0&&(o.fromBufferAttribute(B,Y),g[q+N+8]=o.x,g[q+N+9]=o.y,g[q+N+10]=o.z,g[q+N+11]=B.itemSize===4?o.w:1)}}f={count:y,texture:T,size:new Xe(C,G)},s.set(h,f),h.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let u=0;for(let S=0;S<p.length;S++)u+=p[S];const w=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",p)}d.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const M=p===void 0?0:p.length;let y=i[h.id];if(y===void 0||y.length!==M){y=[];for(let b=0;b<M;b++)y[b]=[b,0];i[h.id]=y}for(let b=0;b<M;b++){const L=y[b];L[0]=b,L[1]=p[b]}y.sort(Rd);for(let b=0;b<8;b++)b<M&&y[b][1]?(a[b][0]=y[b][0],a[b][1]=y[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Cd);const f=h.morphAttributes.position,u=h.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const L=a[b],x=L[0],_=L[1];x!==Number.MAX_SAFE_INTEGER&&_?(f&&h.getAttribute("morphTarget"+b)!==f[x]&&h.setAttribute("morphTarget"+b,f[x]),u&&h.getAttribute("morphNormal"+b)!==u[x]&&h.setAttribute("morphNormal"+b,u[x]),r[b]=_,w+=_):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),u&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const S=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Pd(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class No extends mt{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zn&&(i=gn),i===void 0&&h===hi&&(i=Bn),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fo=new mt,Oo=new No(1,1);Oo.compareFunction=So;const Bo=new Ao,zo=new dc,Go=new Do,Na=[],Fa=[],Oa=new Float32Array(16),Ba=new Float32Array(9),za=new Float32Array(4);function pi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Na[r];if(s===void 0&&(s=new Float32Array(r),Na[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dr(n,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ud(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function Id(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function Nd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function Fd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;za.set(i),n.uniformMatrix2fv(this.addr,!1,za),ot(t,i)}}function Od(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Ba.set(i),n.uniformMatrix3fv(this.addr,!1,Ba),ot(t,i)}}function Bd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Oa.set(i),n.uniformMatrix4fv(this.addr,!1,Oa),ot(t,i)}}function zd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function Hd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function Vd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function kd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function Xd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function qd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function Yd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Oo:Fo;t.setTexture2D(e||s,r)}function $d(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zo,r)}function Kd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Go,r)}function jd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bo,r)}function Zd(n){switch(n){case 5126:return Dd;case 35664:return Ud;case 35665:return Id;case 35666:return Nd;case 35674:return Fd;case 35675:return Od;case 35676:return Bd;case 5124:case 35670:return zd;case 35667:case 35671:return Gd;case 35668:case 35672:return Hd;case 35669:case 35673:return Vd;case 5125:return kd;case 36294:return Wd;case 36295:return Xd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return jd}}function Jd(n,e){n.uniform1fv(this.addr,e)}function Qd(n,e){const t=pi(e,this.size,2);n.uniform2fv(this.addr,t)}function ef(n,e){const t=pi(e,this.size,3);n.uniform3fv(this.addr,t)}function tf(n,e){const t=pi(e,this.size,4);n.uniform4fv(this.addr,t)}function nf(n,e){const t=pi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rf(n,e){const t=pi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sf(n,e){const t=pi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function af(n,e){n.uniform1iv(this.addr,e)}function of(n,e){n.uniform2iv(this.addr,e)}function lf(n,e){n.uniform3iv(this.addr,e)}function cf(n,e){n.uniform4iv(this.addr,e)}function uf(n,e){n.uniform1uiv(this.addr,e)}function hf(n,e){n.uniform2uiv(this.addr,e)}function df(n,e){n.uniform3uiv(this.addr,e)}function ff(n,e){n.uniform4uiv(this.addr,e)}function pf(n,e,t){const i=this.cache,r=e.length,s=dr(t,r);at(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fo,s[o])}function mf(n,e,t){const i=this.cache,r=e.length,s=dr(t,r);at(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zo,s[o])}function gf(n,e,t){const i=this.cache,r=e.length,s=dr(t,r);at(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Go,s[o])}function _f(n,e,t){const i=this.cache,r=e.length,s=dr(t,r);at(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bo,s[o])}function vf(n){switch(n){case 5126:return Jd;case 35664:return Qd;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return rf;case 35676:return sf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return uf;case 36294:return hf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}class xf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zd(t.type)}}class Mf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vf(t.type)}}class Sf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function Ga(n,e){n.seq.push(e),n.map[e.id]=e}function Ef(n,e,t){const i=n.name,r=i.length;for($r.lastIndex=0;;){const s=$r.exec(i),o=$r.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ga(t,c===void 0?new xf(a,n,e):new Mf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Sf(a),Ga(t,d)),t=d}}}class nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ef(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ha(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yf=37297;let Tf=0;function Af(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function bf(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let i;switch(e===t?i="":e===or&&t===ar?i="LinearDisplayP3ToLinearSRGB":e===ar&&t===or&&(i="LinearSRGBToLinearDisplayP3"),n){case En:case hr:return[i,"LinearTransferOETF"];case Wt:case ms:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Va(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Af(n.getShaderSource(e),o)}else return r}function wf(n,e){const t=bf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cf(n,e){let t;switch(e){case Il:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case Ol:t="ACESFilmic";break;case zl:t="AgX";break;case Gl:t="Neutral";break;case Bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ri).join(`
`)}function Lf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ri).join(`
`)}function Pf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Df(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ri(n){return n!==""}function ka(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wa(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ls(n){return n.replace(Uf,Nf)}const If=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nf(n,e){let t=ze[e];if(t===void 0){const i=If.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ls(t)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(n){return n.replace(Ff,Of)}function Of(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qa(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function zf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ci:case ui:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Hf(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fs:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function Vf(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kf(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bf(t),c=zf(t),h=Gf(t),d=Hf(t),p=Vf(t),m=t.isWebGL2?"":Rf(t),M=Lf(t),y=Pf(s),f=r.createProgram();let u,w,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ri).join(`
`),u.length>0&&(u+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ri).join(`
`),w.length>0&&(w+=`
`)):(u=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ri).join(`
`),w=[m,qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?ze.tonemapping_pars_fragment:"",t.toneMapping!==vn?Cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,wf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ri).join(`
`)),o=ls(o),o=ka(o,t),o=Wa(o,t),a=ls(a),a=ka(a,t),a=Wa(a,t),o=Xa(o),a=Xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const b=S+u+o,L=S+w+a,x=Ha(r,r.VERTEX_SHADER,b),_=Ha(r,r.FRAGMENT_SHADER,L);r.attachShader(f,x),r.attachShader(f,_),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function C($){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(f).trim(),R=r.getShaderInfoLog(x).trim(),U=r.getShaderInfoLog(_).trim();let V=!0,B=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,x,_);else{const q=Va(r,x,"vertex"),Y=Va(r,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+Z+`
`+q+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(R===""||U==="")&&(B=!1);B&&($.diagnostics={runnable:V,programLog:Z,vertexShader:{log:R,prefix:u},fragmentShader:{log:U,prefix:w}})}r.deleteShader(x),r.deleteShader(_),G=new nr(r,f),g=Df(r,f)}let G;this.getUniforms=function(){return G===void 0&&C(this),G};let g;this.getAttributes=function(){return g===void 0&&C(this),g};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(f,yf)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=_,this}let Wf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qf(e),t.set(e,i)),i}}class qf{constructor(e){this.id=Wf++,this.code=e,this.usedTimes=0}}function Yf(n,e,t,i,r,s,o){const a=new bo,l=new Xf,c=new Set,h=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let M=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return c.add(g),g===0?"uv":`uv${g}`}function u(g,T,$,Z,R){const U=Z.fog,V=R.geometry,B=g.isMeshStandardMaterial?Z.environment:null,q=(g.isMeshStandardMaterial?t:e).get(g.envMap||B),Y=q&&q.mapping===ur?q.image.height:null,N=y[g.type];g.precision!==null&&(M=r.getMaxPrecision(g.precision),M!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",M,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=J!==void 0?J.length:0;let _e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let O,j,ae,ne;if(N){const $e=Xt[N];O=$e.vertexShader,j=$e.fragmentShader}else O=g.vertexShader,j=g.fragmentShader,l.update(g),ae=l.getVertexShaderID(g),ne=l.getFragmentShaderID(g);const oe=n.getRenderTarget(),se=R.isInstancedMesh===!0,be=R.isBatchedMesh===!0,pe=!!g.map,D=!!g.matcap,He=!!q,he=!!g.aoMap,Te=!!g.lightMap,ve=!!g.bumpMap,Le=!!g.normalMap,we=!!g.displacementMap,Ae=!!g.emissiveMap,Pe=!!g.metalnessMap,A=!!g.roughnessMap,v=g.anisotropy>0,F=g.clearcoat>0,K=g.iridescence>0,ee=g.sheen>0,Q=g.transmission>0,Ce=v&&!!g.anisotropyMap,Me=F&&!!g.clearcoatMap,ie=F&&!!g.clearcoatNormalMap,re=F&&!!g.clearcoatRoughnessMap,De=K&&!!g.iridescenceMap,te=K&&!!g.iridescenceThicknessMap,Qe=ee&&!!g.sheenColorMap,Ne=ee&&!!g.sheenRoughnessMap,ye=!!g.specularMap,xe=!!g.specularColorMap,Se=!!g.specularIntensityMap,We=Q&&!!g.transmissionMap,Fe=Q&&!!g.thicknessMap,Ze=!!g.gradientMap,P=!!g.alphaMap,de=g.alphaTest>0,k=!!g.alphaHash,le=!!g.extensions;let fe=vn;g.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(fe=n.toneMapping);const ke={isWebGL2:d,shaderID:N,shaderType:g.type,shaderName:g.name,vertexShader:O,fragmentShader:j,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:ne,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:M,batching:be,instancing:se,instancingColor:se&&R.instanceColor!==null,instancingMorph:se&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:En,alphaToCoverage:!!g.alphaToCoverage,map:pe,matcap:D,envMap:He,envMapMode:He&&q.mapping,envMapCubeUVHeight:Y,aoMap:he,lightMap:Te,bumpMap:ve,normalMap:Le,displacementMap:m&&we,emissiveMap:Ae,normalMapObjectSpace:Le&&g.normalMapType===Zl,normalMapTangentSpace:Le&&g.normalMapType===Mo,metalnessMap:Pe,roughnessMap:A,anisotropy:v,anisotropyMap:Ce,clearcoat:F,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:re,iridescence:K,iridescenceMap:De,iridescenceThicknessMap:te,sheen:ee,sheenColorMap:Qe,sheenRoughnessMap:Ne,specularMap:ye,specularColorMap:xe,specularIntensityMap:Se,transmission:Q,transmissionMap:We,thicknessMap:Fe,gradientMap:Ze,opaque:g.transparent===!1&&g.blending===si&&g.alphaToCoverage===!1,alphaMap:P,alphaTest:de,alphaHash:k,combine:g.combine,mapUv:pe&&f(g.map.channel),aoMapUv:he&&f(g.aoMap.channel),lightMapUv:Te&&f(g.lightMap.channel),bumpMapUv:ve&&f(g.bumpMap.channel),normalMapUv:Le&&f(g.normalMap.channel),displacementMapUv:we&&f(g.displacementMap.channel),emissiveMapUv:Ae&&f(g.emissiveMap.channel),metalnessMapUv:Pe&&f(g.metalnessMap.channel),roughnessMapUv:A&&f(g.roughnessMap.channel),anisotropyMapUv:Ce&&f(g.anisotropyMap.channel),clearcoatMapUv:Me&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:ie&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:te&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&f(g.sheenRoughnessMap.channel),specularMapUv:ye&&f(g.specularMap.channel),specularColorMapUv:xe&&f(g.specularColorMap.channel),specularIntensityMapUv:Se&&f(g.specularIntensityMap.channel),transmissionMapUv:We&&f(g.transmissionMap.channel),thicknessMapUv:Fe&&f(g.thicknessMap.channel),alphaMapUv:P&&f(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Le||v),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(pe||P),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:_e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:pe&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===sn,flipSided:g.side===Mt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:le&&g.extensions.derivatives===!0,extensionFragDepth:le&&g.extensions.fragDepth===!0,extensionDrawBuffers:le&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&g.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function w(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const $ in g.defines)T.push($),T.push(g.defines[$]);return g.isRawShaderMaterial===!1&&(S(T,g),b(T,g),T.push(n.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function S(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function b(g,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),g.push(a.mask)}function L(g){const T=y[g.type];let $;if(T){const Z=Xt[T];$=bc.clone(Z.uniforms)}else $=g.uniforms;return $}function x(g,T){let $;for(let Z=0,R=h.length;Z<R;Z++){const U=h[Z];if(U.cacheKey===T){$=U,++$.usedTimes;break}}return $===void 0&&($=new kf(n,T,g,s),h.push($)),$}function _(g){if(--g.usedTimes===0){const T=h.indexOf(g);h[T]=h[h.length-1],h.pop(),g.destroy()}}function C(g){l.remove(g)}function G(){l.dispose()}return{getParameters:u,getProgramCacheKey:w,getUniforms:L,acquireProgram:x,releaseProgram:_,releaseShaderCache:C,programs:h,dispose:G}}function $f(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ya(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $a(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,m,M,y,f){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:M,renderOrder:d.renderOrder,z:y,group:f},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=M,u.renderOrder=d.renderOrder,u.z=y,u.group=f),e++,u}function a(d,p,m,M,y,f){const u=o(d,p,m,M,y,f);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,p,m,M,y,f){const u=o(d,p,m,M,y,f);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Kf),i.length>1&&i.sort(p||Ya),r.length>1&&r.sort(p||Ya)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function jf(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $a,n.set(i,[o])):r>=s.length?(o=new $a,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new qe};break;case"SpotLight":t={position:new H,direction:new H,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Jf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Qf=0;function ep(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tp(n,e){const t=new Zf,i=Jf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new H);const s=new H,o=new rt,a=new rt;function l(h,d){let p=0,m=0,M=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,f=0,u=0,w=0,S=0,b=0,L=0,x=0,_=0,C=0,G=0;h.sort(ep);const g=d===!0?Math.PI:1;for(let $=0,Z=h.length;$<Z;$++){const R=h[$],U=R.color,V=R.intensity,B=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=U.r*V*g,m+=U.g*V*g,M+=U.b*V*g;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(R.sh.coefficients[Y],V);G++}else if(R.isDirectionalLight){const Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity*g),R.castShadow){const N=R.shadow,J=i.get(R);J.shadowBias=N.bias,J.shadowNormalBias=N.normalBias,J.shadowRadius=N.radius,J.shadowMapSize=N.mapSize,r.directionalShadow[y]=J,r.directionalShadowMap[y]=q,r.directionalShadowMatrix[y]=R.shadow.matrix,b++}r.directional[y]=Y,y++}else if(R.isSpotLight){const Y=t.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(U).multiplyScalar(V*g),Y.distance=B,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,r.spot[u]=Y;const N=R.shadow;if(R.map&&(r.spotLightMap[_]=R.map,_++,N.updateMatrices(R),R.castShadow&&C++),r.spotLightMatrix[u]=N.matrix,R.castShadow){const J=i.get(R);J.shadowBias=N.bias,J.shadowNormalBias=N.normalBias,J.shadowRadius=N.radius,J.shadowMapSize=N.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=q,x++}u++}else if(R.isRectAreaLight){const Y=t.get(R);Y.color.copy(U).multiplyScalar(V),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),r.rectArea[w]=Y,w++}else if(R.isPointLight){const Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity*g),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const N=R.shadow,J=i.get(R);J.shadowBias=N.bias,J.shadowNormalBias=N.normalBias,J.shadowRadius=N.radius,J.shadowMapSize=N.mapSize,J.shadowCameraNear=N.camera.near,J.shadowCameraFar=N.camera.far,r.pointShadow[f]=J,r.pointShadowMap[f]=q,r.pointShadowMatrix[f]=R.shadow.matrix,L++}r.point[f]=Y,f++}else if(R.isHemisphereLight){const Y=t.get(R);Y.skyColor.copy(R.color).multiplyScalar(V*g),Y.groundColor.copy(R.groundColor).multiplyScalar(V*g),r.hemi[S]=Y,S++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=M;const T=r.hash;(T.directionalLength!==y||T.pointLength!==f||T.spotLength!==u||T.rectAreaLength!==w||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==L||T.numSpotShadows!==x||T.numSpotMaps!==_||T.numLightProbes!==G)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=w,r.point.length=f,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=x+_-C,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=G,T.directionalLength=y,T.pointLength=f,T.spotLength=u,T.rectAreaLength=w,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=L,T.numSpotShadows=x,T.numSpotMaps=_,T.numLightProbes=G,r.version=Qf++)}function c(h,d){let p=0,m=0,M=0,y=0,f=0;const u=d.matrixWorldInverse;for(let w=0,S=h.length;w<S;w++){const b=h[w];if(b.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),p++}else if(b.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),M++}else if(b.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(u),m++}else if(b.isHemisphereLight){const L=r.hemi[f];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function Ka(n,e){const t=new tp(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function np(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ka(n,e),t.set(s,[l])):o>=a.length?(l=new Ka(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ip extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ap=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function op(n,e,t){let i=new vs;const r=new Xe,s=new Xe,o=new ut,a=new ip({depthPacking:jl}),l=new rp,c={},h=t.maxTextureSize,d={[ln]:Mt,[Mt]:ln,[sn]:sn},p=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:sp,fragmentShader:ap}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new yn;M.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ft(M,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let u=this.type;this.render=function(x,_,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const G=n.getRenderTarget(),g=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),$=n.state;$.setBlending(_n),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=u!==rn&&this.type===rn,R=u===rn&&this.type!==rn;for(let U=0,V=x.length;U<V;U++){const B=x[U],q=B.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Y=q.getFrameExtents();if(r.multiply(Y),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||Z===!0||R===!0){const J=this.type!==rn?{minFilter:xt,magFilter:xt}:{};q.map!==null&&q.map.dispose(),q.map=new Gn(r.x,r.y,J),q.map.texture.name=B.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const N=q.getViewportCount();for(let J=0;J<N;J++){const ue=q.getViewport(J);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),$.viewport(o),q.updateMatrices(B,J),i=q.getFrustum(),b(_,C,q.camera,B,this.type)}q.isPointLightShadow!==!0&&this.type===rn&&w(q,C),q.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(G,g,T)};function w(x,_){const C=e.update(y);p.defines.VSM_SAMPLES!==x.blurSamples&&(p.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Gn(r.x,r.y)),p.uniforms.shadow_pass.value=x.map.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(_,null,C,p,y,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(_,null,C,m,y,null)}function S(x,_,C,G){let g=null;const T=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(T!==void 0)g=T;else if(g=C.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const $=g.uuid,Z=_.uuid;let R=c[$];R===void 0&&(R={},c[$]=R);let U=R[Z];U===void 0&&(U=g.clone(),R[Z]=U,_.addEventListener("dispose",L)),g=U}if(g.visible=_.visible,g.wireframe=_.wireframe,G===rn?g.side=_.shadowSide!==null?_.shadowSide:_.side:g.side=_.shadowSide!==null?_.shadowSide:d[_.side],g.alphaMap=_.alphaMap,g.alphaTest=_.alphaTest,g.map=_.map,g.clipShadows=_.clipShadows,g.clippingPlanes=_.clippingPlanes,g.clipIntersection=_.clipIntersection,g.displacementMap=_.displacementMap,g.displacementScale=_.displacementScale,g.displacementBias=_.displacementBias,g.wireframeLinewidth=_.wireframeLinewidth,g.linewidth=_.linewidth,C.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const $=n.properties.get(g);$.light=C}return g}function b(x,_,C,G,g){if(x.visible===!1)return;if(x.layers.test(_.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&g===rn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const Z=e.update(x),R=x.material;if(Array.isArray(R)){const U=Z.groups;for(let V=0,B=U.length;V<B;V++){const q=U[V],Y=R[q.materialIndex];if(Y&&Y.visible){const N=S(x,Y,G,g);x.onBeforeShadow(n,x,_,C,Z,N,q),n.renderBufferDirect(C,null,Z,N,x,q),x.onAfterShadow(n,x,_,C,Z,N,q)}}}else if(R.visible){const U=S(x,R,G,g);x.onBeforeShadow(n,x,_,C,Z,U,null),n.renderBufferDirect(C,null,Z,U,x,null),x.onAfterShadow(n,x,_,C,Z,U,null)}}const $=x.children;for(let Z=0,R=$.length;Z<R;Z++)b($[Z],_,C,G,g)}function L(x){x.target.removeEventListener("dispose",L);for(const C in c){const G=c[C],g=x.target.uuid;g in G&&(G[g].dispose(),delete G[g])}}}function lp(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const de=new ut;let k=null;const le=new ut(0,0,0,0);return{setMask:function(fe){k!==fe&&!P&&(n.colorMask(fe,fe,fe,fe),k=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ke,$e,ht,Lt){Lt===!0&&(fe*=ht,ke*=ht,$e*=ht),de.set(fe,ke,$e,ht),le.equals(de)===!1&&(n.clearColor(fe,ke,$e,ht),le.copy(de))},reset:function(){P=!1,k=null,le.set(-1,0,0,0)}}}function s(){let P=!1,de=null,k=null,le=null;return{setTest:function(fe){fe?se(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(fe){de!==fe&&!P&&(n.depthMask(fe),de=fe)},setFunc:function(fe){if(k!==fe){switch(fe){case Al:n.depthFunc(n.NEVER);break;case bl:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=fe}},setLocked:function(fe){P=fe},setClear:function(fe){le!==fe&&(n.clearDepth(fe),le=fe)},reset:function(){P=!1,de=null,k=null,le=null}}}function o(){let P=!1,de=null,k=null,le=null,fe=null,ke=null,$e=null,ht=null,Lt=null;return{setTest:function(Ke){P||(Ke?se(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ke){de!==Ke&&!P&&(n.stencilMask(Ke),de=Ke)},setFunc:function(Ke,_t,kt){(k!==Ke||le!==_t||fe!==kt)&&(n.stencilFunc(Ke,_t,kt),k=Ke,le=_t,fe=kt)},setOp:function(Ke,_t,kt){(ke!==Ke||$e!==_t||ht!==kt)&&(n.stencilOp(Ke,_t,kt),ke=Ke,$e=_t,ht=kt)},setLocked:function(Ke){P=Ke},setClear:function(Ke){Lt!==Ke&&(n.clearStencil(Ke),Lt=Ke)},reset:function(){P=!1,de=null,k=null,le=null,fe=null,ke=null,$e=null,ht=null,Lt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let p={},m={},M=new WeakMap,y=[],f=null,u=!1,w=null,S=null,b=null,L=null,x=null,_=null,C=null,G=new qe(0,0,0),g=0,T=!1,$=null,Z=null,R=null,U=null,V=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=Y>=1):N.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=Y>=2);let J=null,ue={};const _e=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),j=new ut().fromArray(_e),ae=new ut().fromArray(O);function ne(P,de,k,le){const fe=new Uint8Array(4),ke=n.createTexture();n.bindTexture(P,ke),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<k;$e++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(de+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ke}const oe={};oe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(n.DEPTH_TEST),l.setFunc(rr),we(!1),Ae(Cs),se(n.CULL_FACE),ve(_n);function se(P){p[P]!==!0&&(n.enable(P),p[P]=!0)}function be(P){p[P]!==!1&&(n.disable(P),p[P]=!1)}function pe(P,de){return m[P]!==de?(n.bindFramebuffer(P,de),m[P]=de,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=de),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function D(P,de){let k=y,le=!1;if(P){k=M.get(de),k===void 0&&(k=[],M.set(de,k));const fe=P.textures;if(k.length!==fe.length||k[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,$e=fe.length;ke<$e;ke++)k[ke]=n.COLOR_ATTACHMENT0+ke;k.length=fe.length,le=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,le=!0);if(le)if(t.isWebGL2)n.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function He(P){return f!==P?(n.useProgram(P),f=P,!0):!1}const he={[In]:n.FUNC_ADD,[ul]:n.FUNC_SUBTRACT,[hl]:n.FUNC_REVERSE_SUBTRACT};if(i)he[Ds]=n.MIN,he[Us]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(he[Ds]=P.MIN_EXT,he[Us]=P.MAX_EXT)}const Te={[dl]:n.ZERO,[fl]:n.ONE,[pl]:n.SRC_COLOR,[Qr]:n.SRC_ALPHA,[Ml]:n.SRC_ALPHA_SATURATE,[vl]:n.DST_COLOR,[gl]:n.DST_ALPHA,[ml]:n.ONE_MINUS_SRC_COLOR,[es]:n.ONE_MINUS_SRC_ALPHA,[xl]:n.ONE_MINUS_DST_COLOR,[_l]:n.ONE_MINUS_DST_ALPHA,[Sl]:n.CONSTANT_COLOR,[El]:n.ONE_MINUS_CONSTANT_COLOR,[yl]:n.CONSTANT_ALPHA,[Tl]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(P,de,k,le,fe,ke,$e,ht,Lt,Ke){if(P===_n){u===!0&&(be(n.BLEND),u=!1);return}if(u===!1&&(se(n.BLEND),u=!0),P!==cl){if(P!==w||Ke!==T){if((S!==In||x!==In)&&(n.blendEquation(n.FUNC_ADD),S=In,x=In),Ke)switch(P){case si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rs:n.blendFunc(n.ONE,n.ONE);break;case Ls:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ps:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ls:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ps:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,L=null,_=null,C=null,G.set(0,0,0),g=0,w=P,T=Ke}return}fe=fe||de,ke=ke||k,$e=$e||le,(de!==S||fe!==x)&&(n.blendEquationSeparate(he[de],he[fe]),S=de,x=fe),(k!==b||le!==L||ke!==_||$e!==C)&&(n.blendFuncSeparate(Te[k],Te[le],Te[ke],Te[$e]),b=k,L=le,_=ke,C=$e),(ht.equals(G)===!1||Lt!==g)&&(n.blendColor(ht.r,ht.g,ht.b,Lt),G.copy(ht),g=Lt),w=P,T=!1}function Le(P,de){P.side===sn?be(n.CULL_FACE):se(n.CULL_FACE);let k=P.side===Mt;de&&(k=!k),we(k),P.blending===si&&P.transparent===!1?ve(_n):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const le=P.stencilWrite;c.setTest(le),le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),A(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(P){$!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),$=P)}function Ae(P){P!==al?(se(n.CULL_FACE),P!==Z&&(P===Cs?n.cullFace(n.BACK):P===ol?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),Z=P}function Pe(P){P!==R&&(q&&n.lineWidth(P),R=P)}function A(P,de,k){P?(se(n.POLYGON_OFFSET_FILL),(U!==de||V!==k)&&(n.polygonOffset(de,k),U=de,V=k)):be(n.POLYGON_OFFSET_FILL)}function v(P){P?se(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function F(P){P===void 0&&(P=n.TEXTURE0+B-1),J!==P&&(n.activeTexture(P),J=P)}function K(P,de,k){k===void 0&&(J===null?k=n.TEXTURE0+B-1:k=J);let le=ue[k];le===void 0&&(le={type:void 0,texture:void 0},ue[k]=le),(le.type!==P||le.texture!==de)&&(J!==k&&(n.activeTexture(k),J=k),n.bindTexture(P,de||oe[P]),le.type=P,le.texture=de)}function ee(){const P=ue[J];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){j.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function Se(P){ae.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function We(P,de){let k=d.get(de);k===void 0&&(k=new WeakMap,d.set(de,k));let le=k.get(P);le===void 0&&(le=n.getUniformBlockIndex(de,P.name),k.set(P,le))}function Fe(P,de){const le=d.get(de).get(P);h.get(de)!==le&&(n.uniformBlockBinding(de,le,P.__bindingPointIndex),h.set(de,le))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},J=null,ue={},m={},M=new WeakMap,y=[],f=null,u=!1,w=null,S=null,b=null,L=null,x=null,_=null,C=null,G=new qe(0,0,0),g=0,T=!1,$=null,Z=null,R=null,U=null,V=null,j.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:be,bindFramebuffer:pe,drawBuffers:D,useProgram:He,setBlending:ve,setMaterial:Le,setFlipSided:we,setCullFace:Ae,setLineWidth:Pe,setPolygonOffset:A,setScissorTest:v,activeTexture:F,bindTexture:K,unbindTexture:ee,compressedTexImage2D:Q,compressedTexImage3D:Ce,texImage2D:Ne,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:te,texStorage3D:Qe,texSubImage2D:Me,texSubImage3D:ie,compressedTexSubImage2D:re,compressedTexSubImage3D:De,scissor:xe,viewport:Se,reset:Ze}}function cp(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xe,d=new WeakMap;let p;const m=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,v){return M?new OffscreenCanvas(A,v):Ai("canvas")}function f(A,v,F,K){let ee=1;const Q=Pe(A);if((Q.width>K||Q.height>K)&&(ee=K/Math.max(Q.width,Q.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Ce=v?os:Math.floor,Me=Ce(ee*Q.width),ie=Ce(ee*Q.height);p===void 0&&(p=y(Me,ie));const re=F?y(Me,ie):p;return re.width=Me,re.height=ie,re.getContext("2d").drawImage(A,0,0,Me,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Me+"x"+ie+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function u(A){const v=Pe(A);return ca(v.width)&&ca(v.height)}function w(A){return a?!1:A.wrapS!==Ht||A.wrapT!==Ht||A.minFilter!==xt&&A.minFilter!==Et}function S(A,v){return A.generateMipmaps&&v&&A.minFilter!==xt&&A.minFilter!==Et}function b(A){n.generateMipmap(A)}function L(A,v,F,K,ee=!1){if(a===!1)return v;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=v;if(v===n.RED&&(F===n.FLOAT&&(Q=n.R32F),F===n.HALF_FLOAT&&(Q=n.R16F),F===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Q=n.R8UI),F===n.UNSIGNED_SHORT&&(Q=n.R16UI),F===n.UNSIGNED_INT&&(Q=n.R32UI),F===n.BYTE&&(Q=n.R8I),F===n.SHORT&&(Q=n.R16I),F===n.INT&&(Q=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Q=n.RG32F),F===n.HALF_FLOAT&&(Q=n.RG16F),F===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Q=n.RG8UI),F===n.UNSIGNED_SHORT&&(Q=n.RG16UI),F===n.UNSIGNED_INT&&(Q=n.RG32UI),F===n.BYTE&&(Q=n.RG8I),F===n.SHORT&&(Q=n.RG16I),F===n.INT&&(Q=n.RG32I)),v===n.RGBA){const Ce=ee?sr:Ye.getTransfer(K);F===n.FLOAT&&(Q=n.RGBA32F),F===n.HALF_FLOAT&&(Q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Q=Ce===je?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(A,v,F){return S(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==xt&&A.minFilter!==Et?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function _(A){return A===xt||A===Is||A===gi?n.NEAREST:n.LINEAR}function C(A){const v=A.target;v.removeEventListener("dispose",C),g(v),v.isVideoTexture&&d.delete(v)}function G(A){const v=A.target;v.removeEventListener("dispose",G),$(v)}function g(A){const v=i.get(A);if(v.__webglInit===void 0)return;const F=A.source,K=m.get(F);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(A),Object.keys(K).length===0&&m.delete(F)}i.remove(A)}function T(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const F=A.source,K=m.get(F);delete K[v.__cacheKey],o.memory.textures--}function $(A){const v=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let K=0,ee=F.length;K<ee;K++){const Q=i.get(F[K]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(F[K])}i.remove(A)}let Z=0;function R(){Z=0}function U(){const A=Z;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Z+=1,A}function V(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function B(A,v){const F=i.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(F,A,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function q(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ae(F,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Y(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ae(F,A,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function N(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ne(F,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const J={[is]:n.REPEAT,[Ht]:n.CLAMP_TO_EDGE,[rs]:n.MIRRORED_REPEAT},ue={[xt]:n.NEAREST,[Is]:n.NEAREST_MIPMAP_NEAREST,[gi]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[_r]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},_e={[Jl]:n.NEVER,[rc]:n.ALWAYS,[Ql]:n.LESS,[So]:n.LEQUAL,[ec]:n.EQUAL,[ic]:n.GEQUAL,[tc]:n.GREATER,[nc]:n.NOTEQUAL};function O(A,v,F){if(v.type===an&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Et||v.magFilter===_r||v.magFilter===gi||v.magFilter===Fn||v.minFilter===Et||v.minFilter===_r||v.minFilter===gi||v.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),F?(n.texParameteri(A,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,J[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ue[v.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Ht||v.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,_(v.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,_(v.minFilter)),v.minFilter!==xt&&v.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===xt||v.minFilter!==gi&&v.minFilter!==Fn||v.type===an&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function j(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const K=v.source;let ee=m.get(K);ee===void 0&&(ee={},m.set(K,ee));const Q=V(v);if(Q!==A.__cacheKey){ee[Q]===void 0&&(ee[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[Q].usedTimes++;const Ce=ee[A.__cacheKey];Ce!==void 0&&(ee[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(v)),A.__cacheKey=Q,A.__webglTexture=ee[Q].texture}return F}function ae(A,v,F){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const ee=j(A,v),Q=v.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+F);const Ce=i.get(Q);if(Q.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const Me=Ye.getPrimaries(Ye.workingColorSpace),ie=v.colorSpace===mn?null:Ye.getPrimaries(v.colorSpace),re=v.colorSpace===mn||Me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const De=w(v)&&u(v.image)===!1;let te=f(v.image,De,!1,r.maxTextureSize);te=Ae(v,te);const Qe=u(te)||a,Ne=s.convert(v.format,v.colorSpace);let ye=s.convert(v.type),xe=L(v.internalFormat,Ne,ye,v.colorSpace,v.isVideoTexture);O(K,v,Qe);let Se;const We=v.mipmaps,Fe=a&&v.isVideoTexture!==!0&&xe!==xo,Ze=Ce.__version===void 0||ee===!0,P=Q.dataReady,de=x(v,te,Qe);if(v.isDepthTexture)xe=n.DEPTH_COMPONENT,a?v.type===an?xe=n.DEPTH_COMPONENT32F:v.type===gn?xe=n.DEPTH_COMPONENT24:v.type===Bn?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:v.type===an&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zn&&xe===n.DEPTH_COMPONENT&&v.type!==ps&&v.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=gn,ye=s.convert(v.type)),v.format===hi&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,v.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Bn,ye=s.convert(v.type))),Ze&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,xe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,xe,te.width,te.height,0,Ne,ye,null));else if(v.isDataTexture)if(We.length>0&&Qe){Fe&&Ze&&t.texStorage2D(n.TEXTURE_2D,de,xe,We[0].width,We[0].height);for(let k=0,le=We.length;k<le;k++)Se=We[k],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Se.width,Se.height,Ne,ye,Se.data):t.texImage2D(n.TEXTURE_2D,k,xe,Se.width,Se.height,0,Ne,ye,Se.data);v.generateMipmaps=!1}else Fe?(Ze&&t.texStorage2D(n.TEXTURE_2D,de,xe,te.width,te.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Ne,ye,te.data)):t.texImage2D(n.TEXTURE_2D,0,xe,te.width,te.height,0,Ne,ye,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,xe,We[0].width,We[0].height,te.depth);for(let k=0,le=We.length;k<le;k++)Se=We[k],v.format!==Vt?Ne!==null?Fe?P&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,Se.width,Se.height,te.depth,Ne,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,xe,Se.width,Se.height,te.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,Se.width,Se.height,te.depth,Ne,ye,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,xe,Se.width,Se.height,te.depth,0,Ne,ye,Se.data)}else{Fe&&Ze&&t.texStorage2D(n.TEXTURE_2D,de,xe,We[0].width,We[0].height);for(let k=0,le=We.length;k<le;k++)Se=We[k],v.format!==Vt?Ne!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,k,xe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Se.width,Se.height,Ne,ye,Se.data):t.texImage2D(n.TEXTURE_2D,k,xe,Se.width,Se.height,0,Ne,ye,Se.data)}else if(v.isDataArrayTexture)Fe?(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,xe,te.width,te.height,te.depth),P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ne,ye,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,te.width,te.height,te.depth,0,Ne,ye,te.data);else if(v.isData3DTexture)Fe?(Ze&&t.texStorage3D(n.TEXTURE_3D,de,xe,te.width,te.height,te.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ne,ye,te.data)):t.texImage3D(n.TEXTURE_3D,0,xe,te.width,te.height,te.depth,0,Ne,ye,te.data);else if(v.isFramebufferTexture){if(Ze)if(Fe)t.texStorage2D(n.TEXTURE_2D,de,xe,te.width,te.height);else{let k=te.width,le=te.height;for(let fe=0;fe<de;fe++)t.texImage2D(n.TEXTURE_2D,fe,xe,k,le,0,Ne,ye,null),k>>=1,le>>=1}}else if(We.length>0&&Qe){if(Fe&&Ze){const k=Pe(We[0]);t.texStorage2D(n.TEXTURE_2D,de,xe,k.width,k.height)}for(let k=0,le=We.length;k<le;k++)Se=We[k],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Ne,ye,Se):t.texImage2D(n.TEXTURE_2D,k,xe,Ne,ye,Se);v.generateMipmaps=!1}else if(Fe){if(Ze){const k=Pe(te);t.texStorage2D(n.TEXTURE_2D,de,xe,k.width,k.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,ye,te)}else t.texImage2D(n.TEXTURE_2D,0,xe,Ne,ye,te);S(v,Qe)&&b(K),Ce.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ne(A,v,F){if(v.image.length!==6)return;const K=j(A,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const Q=i.get(ee);if(ee.version!==Q.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const Ce=Ye.getPrimaries(Ye.workingColorSpace),Me=v.colorSpace===mn?null:Ye.getPrimaries(v.colorSpace),ie=v.colorSpace===mn||Ce===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const re=v.isCompressedTexture||v.image[0].isCompressedTexture,De=v.image[0]&&v.image[0].isDataTexture,te=[];for(let k=0;k<6;k++)!re&&!De?te[k]=f(v.image[k],!1,!0,r.maxCubemapSize):te[k]=De?v.image[k].image:v.image[k],te[k]=Ae(v,te[k]);const Qe=te[0],Ne=u(Qe)||a,ye=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),Se=L(v.internalFormat,ye,xe,v.colorSpace),We=a&&v.isVideoTexture!==!0,Fe=Q.__version===void 0||K===!0,Ze=ee.dataReady;let P=x(v,Qe,Ne);O(n.TEXTURE_CUBE_MAP,v,Ne);let de;if(re){We&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,P,Se,Qe.width,Qe.height);for(let k=0;k<6;k++){de=te[k].mipmaps;for(let le=0;le<de.length;le++){const fe=de[le];v.format!==Vt?ye!==null?We?Ze&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le,0,0,fe.width,fe.height,ye,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le,Se,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le,0,0,fe.width,fe.height,ye,xe,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le,Se,fe.width,fe.height,0,ye,xe,fe.data)}}}else{if(de=v.mipmaps,We&&Fe){de.length>0&&P++;const k=Pe(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,P,Se,k.width,k.height)}for(let k=0;k<6;k++)if(De){We?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,te[k].width,te[k].height,ye,xe,te[k].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Se,te[k].width,te[k].height,0,ye,xe,te[k].data);for(let le=0;le<de.length;le++){const ke=de[le].image[k].image;We?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le+1,0,0,ke.width,ke.height,ye,xe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le+1,Se,ke.width,ke.height,0,ye,xe,ke.data)}}else{We?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ye,xe,te[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Se,ye,xe,te[k]);for(let le=0;le<de.length;le++){const fe=de[le];We?Ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le+1,0,0,ye,xe,fe.image[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,le+1,Se,ye,xe,fe.image[k])}}}S(v,Ne)&&b(n.TEXTURE_CUBE_MAP),Q.__version=ee.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function oe(A,v,F,K,ee,Q){const Ce=s.convert(F.format,F.colorSpace),Me=s.convert(F.type),ie=L(F.internalFormat,Ce,Me,F.colorSpace);if(!i.get(v).__hasExternalTextures){const De=Math.max(1,v.width>>Q),te=Math.max(1,v.height>>Q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Q,ie,De,te,v.depth,0,Ce,Me,null):t.texImage2D(ee,Q,ie,De,te,0,Ce,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Le(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,i.get(F).__webglTexture,0,ve(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,i.get(F).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(A,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||Le(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===an?K=n.DEPTH_COMPONENT32F:ee.type===gn&&(K=n.DEPTH_COMPONENT24));const Q=ve(v);Le(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,K,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,K,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(v.depthBuffer&&v.stencilBuffer){const K=ve(v);F&&Le(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):Le(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const Q=K[ee],Ce=s.convert(Q.format,Q.colorSpace),Me=s.convert(Q.type),ie=L(Q.internalFormat,Ce,Me,Q.colorSpace),re=ve(v);F&&Le(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ie,v.width,v.height):Le(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,ee=ve(v);if(v.depthTexture.format===zn)Le(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===hi)Le(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function pe(A){const v=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,A)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),se(v.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),se(v.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(A,v,F){const K=i.get(A);v!==void 0&&oe(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&pe(A)}function He(A){const v=A.texture,F=i.get(A),K=i.get(v);A.addEventListener("dispose",G);const ee=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Ce=ee.length>1,Me=u(A)||a;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++),Q){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let re=0;re<v.mipmaps.length;re++)F.__webglFramebuffer[ie][re]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ce)if(r.drawBuffers)for(let ie=0,re=ee.length;ie<re;ie++){const De=i.get(ee[ie]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Le(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<ee.length;ie++){const re=ee[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const De=s.convert(re.format,re.colorSpace),te=s.convert(re.type),Qe=L(re.internalFormat,De,te,re.colorSpace,A.isXRRenderTarget===!0),Ne=ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Qe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),se(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),O(n.TEXTURE_CUBE_MAP,v,Me);for(let ie=0;ie<6;ie++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)oe(F.__webglFramebuffer[ie][re],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else oe(F.__webglFramebuffer[ie],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);S(v,Me)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ie=0,re=ee.length;ie<re;ie++){const De=ee[ie],te=i.get(De);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),O(n.TEXTURE_2D,De,Me),oe(F.__webglFramebuffer,A,De,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),S(De,Me)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ie=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,K.__webglTexture),O(ie,v,Me),a&&v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)oe(F.__webglFramebuffer[re],A,v,n.COLOR_ATTACHMENT0,ie,re);else oe(F.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ie,0);S(v,Me)&&b(ie),t.unbindTexture()}A.depthBuffer&&pe(A)}function he(A){const v=u(A)||a,F=A.textures;for(let K=0,ee=F.length;K<ee;K++){const Q=F[K];if(S(Q,v)){const Ce=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(Q).__webglTexture;t.bindTexture(Ce,Me),b(Ce),t.unbindTexture()}}}function Te(A){if(a&&A.samples>0&&Le(A)===!1){const v=A.textures,F=A.width,K=A.height;let ee=n.COLOR_BUFFER_BIT;const Q=[],Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),ie=v.length>1;if(ie)for(let re=0;re<v.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let re=0;re<v.length;re++){Q.push(n.COLOR_ATTACHMENT0+re),A.depthBuffer&&Q.push(Ce);const De=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ie&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[re]),De===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),ie){const te=i.get(v[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,ee,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let re=0;re<v.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,Me.__webglColorRenderbuffer[re]);const De=i.get(v[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function ve(A){return Math.min(r.maxSamples,A.samples)}function Le(A){const v=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function we(A){const v=o.render.frame;d.get(A)!==v&&(d.set(A,v),A.update())}function Ae(A,v){const F=A.colorSpace,K=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ss||F!==En&&F!==mn&&(Ye.getTransfer(F)===je?a===!1?e.has("EXT_sRGB")===!0&&K===Vt?(A.format=ss,A.minFilter=Et,A.generateMipmaps=!1):v=yo.sRGBToLinear(v):(K!==Vt||ee!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=N,this.rebindTextures=D,this.setupRenderTarget=He,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function up(n,e,t){const i=t.isWebGL2;function r(s,o=mn){let a;const l=Ye.getTransfer(o);if(s===xn)return n.UNSIGNED_BYTE;if(s===po)return n.UNSIGNED_SHORT_4_4_4_4;if(s===mo)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Hl)return n.BYTE;if(s===Vl)return n.SHORT;if(s===ps)return n.UNSIGNED_SHORT;if(s===fo)return n.INT;if(s===gn)return n.UNSIGNED_INT;if(s===an)return n.FLOAT;if(s===Ti)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kl)return n.ALPHA;if(s===Vt)return n.RGBA;if(s===Wl)return n.LUMINANCE;if(s===Xl)return n.LUMINANCE_ALPHA;if(s===zn)return n.DEPTH_COMPONENT;if(s===hi)return n.DEPTH_STENCIL;if(s===ss)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ql)return n.RED;if(s===go)return n.RED_INTEGER;if(s===Yl)return n.RG;if(s===_o)return n.RG_INTEGER;if(s===vo)return n.RGBA_INTEGER;if(s===vr||s===xr||s===Mr||s===Sr)if(l===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ns||s===Fs||s===Os||s===Bs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ns)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Os)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zs||s===Gs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zs)return l===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hs||s===Vs||s===ks||s===Ws||s===Xs||s===qs||s===Ys||s===$s||s===Ks||s===js||s===Zs||s===Js||s===Qs||s===ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ks)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ws)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ys)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$s)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ks)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===js)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Js)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ea)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Er||s===ta||s===na)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Er)return l===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ta)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===na)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$l||s===ia||s===ra||s===sa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Er)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ia)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class hp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dp={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,i),u=this._getHandJoint(c,y);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,M=.005;c.inputState.pinching&&p>m+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new mt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Sn({extensions:{fragDepth:!0},vertexShader:fp,fragmentShader:pp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ft(new Pi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class gp extends fi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,M=null;const y=new mp,f=t.getContextAttributes();let u=null,w=null;const S=[],b=[],L=new Xe;let x=null;const _=new Nt;_.layers.enable(1),_.viewport=new ut;const C=new Nt;C.layers.enable(2),C.viewport=new ut;const G=[_,C],g=new hp;g.layers.enable(1),g.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=S[O];return j===void 0&&(j=new Kr,S[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=S[O];return j===void 0&&(j=new Kr,S[O]=j),j.getGripSpace()},this.getHand=function(O){let j=S[O];return j===void 0&&(j=new Kr,S[O]=j),j.getHandSpace()};function Z(O){const j=b.indexOf(O.inputSource);if(j===-1)return;const ae=S[j];ae!==void 0&&(ae.update(O.inputSource,O.frame,c||o),ae.dispatchEvent({type:O.type,data:O.inputSource}))}function R(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",U);for(let O=0;O<S.length;O++){const j=b[O];j!==null&&(b[O]=null,S[O].disconnect(j))}T=null,$=null,y.reset(),e.setRenderTarget(u),m=null,p=null,d=null,r=null,w=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",R),r.addEventListener("inputsourceschange",U),f.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,ae=null,ne=null;f.depth&&(ne=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=f.stencil?hi:zn,ae=f.stencil?Bn:gn);const oe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Gn(p.textureWidth,p.textureHeight,{format:Vt,type:xn,depthTexture:new No(p.textureWidth,p.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const se=e.properties.get(w);se.__ignoreDepthValues=p.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(O){for(let j=0;j<O.removed.length;j++){const ae=O.removed[j],ne=b.indexOf(ae);ne>=0&&(b[ne]=null,S[ne].disconnect(ae))}for(let j=0;j<O.added.length;j++){const ae=O.added[j];let ne=b.indexOf(ae);if(ne===-1){for(let se=0;se<S.length;se++)if(se>=b.length){b.push(ae),ne=se;break}else if(b[se]===null){b[se]=ae,ne=se;break}if(ne===-1)break}const oe=S[ne];oe&&oe.connect(ae)}}const V=new H,B=new H;function q(O,j,ae){V.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);const ne=V.distanceTo(B),oe=j.projectionMatrix.elements,se=ae.projectionMatrix.elements,be=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),D=(oe[9]+1)/oe[5],He=(oe[9]-1)/oe[5],he=(oe[8]-1)/oe[0],Te=(se[8]+1)/se[0],ve=be*he,Le=be*Te,we=ne/(-he+Te),Ae=we*-he;j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ae),O.translateZ(we),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Pe=be+we,A=pe+we,v=ve-Ae,F=Le+(ne-Ae),K=D*pe/A*Pe,ee=He*pe/A*Pe;O.projectionMatrix.makePerspective(v,F,K,ee,Pe,A),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Y(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;y.texture!==null&&(O.near=y.depthNear,O.far=y.depthFar),g.near=C.near=_.near=O.near,g.far=C.far=_.far=O.far,(T!==g.near||$!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),T=g.near,$=g.far,_.near=T,_.far=$,C.near=T,C.far=$,_.updateProjectionMatrix(),C.updateProjectionMatrix(),O.updateProjectionMatrix());const j=O.parent,ae=g.cameras;Y(g,j);for(let ne=0;ne<ae.length;ne++)Y(ae[ne],j);ae.length===2?q(g,_,C):g.projectionMatrix.copy(_.projectionMatrix),N(O,g,j)};function N(O,j,ae){ae===null?O.matrix.copy(j.matrixWorld):(O.matrix.copy(ae.matrixWorld),O.matrix.invert(),O.matrix.multiply(j.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=as*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(O){l=O,p!==null&&(p.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return y.texture!==null};let J=null;function ue(O,j){if(h=j.getViewerPose(c||o),M=j,h!==null){const ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ne=!1;ae.length!==g.cameras.length&&(g.cameras.length=0,ne=!0);for(let se=0;se<ae.length;se++){const be=ae[se];let pe=null;if(m!==null)pe=m.getViewport(be);else{const He=d.getViewSubImage(p,be);pe=He.viewport,se===0&&(e.setRenderTargetTextures(w,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(w))}let D=G[se];D===void 0&&(D=new Nt,D.layers.enable(se),D.viewport=new ut,G[se]=D),D.matrix.fromArray(be.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(be.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(pe.x,pe.y,pe.width,pe.height),se===0&&(g.matrix.copy(D.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ne===!0&&g.cameras.push(D)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const se=d.getDepthInformation(ae[0]);se&&se.isValid&&se.texture&&y.init(e,se,r.renderState)}}for(let ae=0;ae<S.length;ae++){const ne=b[ae],oe=S[ae];ne!==null&&oe!==void 0&&oe.update(ne,j,c||o)}y.render(e,g),J&&J(O,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),M=null}const _e=new Uo;_e.setAnimationLoop(ue),this.setAnimationLoop=function(O){J=O},this.dispose=function(){}}}const Pn=new jt,_p=new rt;function vp(n,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,Lo(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,w,S,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),d(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,b)):u.isMeshMatcapMaterial?(s(f,u),M(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),y(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,w,S):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Mt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Mt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const w=e.get(u),S=w.envMap,b=w.envMapRotation;if(S&&(f.envMap.value=S,Pn.copy(b),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),f.envMapRotation.value.setFromMatrix4(_p.makeRotationFromEuler(Pn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const L=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*L,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,w,S){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*w,f.scale.value=S*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,w){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function M(f,u){u.matcap&&(f.matcap.value=u.matcap)}function y(f,u){const w=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xp(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,S){const b=S.program;i.uniformBlockBinding(w,b)}function c(w,S){let b=r[w.id];b===void 0&&(M(w),b=h(w),r[w.id]=b,w.addEventListener("dispose",f));const L=S.program;i.updateUBOMapping(w,L);const x=e.render.frame;s[w.id]!==x&&(p(w),s[w.id]=x)}function h(w){const S=d();w.__bindingPointIndex=S;const b=n.createBuffer(),L=w.__size,x=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const S=r[w.id],b=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,_=b.length;x<_;x++){const C=Array.isArray(b[x])?b[x]:[b[x]];for(let G=0,g=C.length;G<g;G++){const T=C[G];if(m(T,x,G,L)===!0){const $=T.__offset,Z=Array.isArray(T.value)?T.value:[T.value];let R=0;for(let U=0;U<Z.length;U++){const V=Z[U],B=y(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,$+R,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,R),R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,S,b,L){const x=w.value,_=S+"_"+b;if(L[_]===void 0)return typeof x=="number"||typeof x=="boolean"?L[_]=x:L[_]=x.clone(),!0;{const C=L[_];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return L[_]=x,!0}else if(C.equals(x)===!1)return C.copy(x),!0}return!1}function M(w){const S=w.uniforms;let b=0;const L=16;for(let _=0,C=S.length;_<C;_++){const G=Array.isArray(S[_])?S[_]:[S[_]];for(let g=0,T=G.length;g<T;g++){const $=G[g],Z=Array.isArray($.value)?$.value:[$.value];for(let R=0,U=Z.length;R<U;R++){const V=Z[R],B=y(V),q=b%L;q!==0&&L-q<B.boundary&&(b+=L-q),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=B.storage}}}const x=b%L;return x>0&&(b+=L-x),w.__size=b,w.__cache={},this}function y(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function f(w){const S=w.target;S.removeEventListener("dispose",f);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ho{constructor(e={}){const{canvas:t=ac(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),M=new Int32Array(4);let y=null,f=null;const u=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const S=this;let b=!1,L=0,x=0,_=null,C=-1,G=null;const g=new ut,T=new ut;let $=null;const Z=new qe(0);let R=0,U=t.width,V=t.height,B=1,q=null,Y=null;const N=new ut(0,0,U,V),J=new ut(0,0,U,V);let ue=!1;const _e=new vs;let O=!1,j=!1,ae=null;const ne=new rt,oe=new Xe,se=new H,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return _===null?B:1}let D=i;function He(E,I){for(let W=0;W<E.length;W++){const X=E[W],z=t.getContext(X,I);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ds}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const I=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&I.shift(),D=He(I,E),D===null)throw He(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,Te,ve,Le,we,Ae,Pe,A,v,F,K,ee,Q,Ce,Me,ie,re,De,te,Qe,Ne,ye,xe,Se;function We(){he=new Td(D),Te=new vd(D,he,e),he.init(Te),ye=new up(D,he,Te),ve=new lp(D,he,Te),Le=new wd(D),we=new $f,Ae=new cp(D,he,ve,we,Te,ye,Le),Pe=new Md(S),A=new yd(S),v=new Uc(D,Te),xe=new gd(D,he,v,Te),F=new Ad(D,v,Le,xe),K=new Pd(D,F,v,Le),te=new Ld(D,Te,Ae),ie=new xd(we),ee=new Yf(S,Pe,A,he,Te,xe,ie),Q=new vp(S,we),Ce=new jf,Me=new np(he,Te),De=new md(S,Pe,A,ve,K,p,l),re=new op(S,K,Te),Se=new xp(D,Le,Te,ve),Qe=new _d(D,he,Le,Te),Ne=new bd(D,he,Le,Te),Le.programs=ee.programs,S.capabilities=Te,S.extensions=he,S.properties=we,S.renderLists=Ce,S.shadowMap=re,S.state=ve,S.info=Le}We();const Fe=new gp(S,D);this.xr=Fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(U,V,!1))},this.getSize=function(E){return E.set(U,V)},this.setSize=function(E,I,W=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,V=I,t.width=Math.floor(E*B),t.height=Math.floor(I*B),W===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(U*B,V*B).floor()},this.setDrawingBufferSize=function(E,I,W){U=E,V=I,B=W,t.width=Math.floor(E*W),t.height=Math.floor(I*W),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(g)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,I,W,X){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,I,W,X),ve.viewport(g.copy(N).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,I,W,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,I,W,X),ve.scissor(T.copy(J).multiplyScalar(B).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(E){ve.setScissorTest(ue=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,I=!0,W=!0){let X=0;if(E){let z=!1;if(_!==null){const ge=_.texture.format;z=ge===vo||ge===_o||ge===go}if(z){const ge=_.texture.type,Ee=ge===xn||ge===gn||ge===ps||ge===Bn||ge===po||ge===mo,Re=De.getClearColor(),Ue=De.getClearAlpha(),Ve=Re.r,Ie=Re.g,Oe=Re.b;Ee?(m[0]=Ve,m[1]=Ie,m[2]=Oe,m[3]=Ue,D.clearBufferuiv(D.COLOR,0,m)):(M[0]=Ve,M[1]=Ie,M[2]=Oe,M[3]=Ue,D.clearBufferiv(D.COLOR,0,M))}else X|=D.COLOR_BUFFER_BIT}I&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ce.dispose(),Me.dispose(),we.dispose(),Pe.dispose(),A.dispose(),K.dispose(),xe.dispose(),Se.dispose(),ee.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Lt),Fe.removeEventListener("sessionend",Ke),ae&&(ae.dispose(),ae=null),_t.stop()};function Ze(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Le.autoReset,I=re.enabled,W=re.autoUpdate,X=re.needsUpdate,z=re.type;We(),Le.autoReset=E,re.enabled=I,re.autoUpdate=W,re.needsUpdate=X,re.type=z}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function k(E){const I=E.target;I.removeEventListener("dispose",k),le(I)}function le(E){fe(E),we.remove(E)}function fe(E){const I=we.get(E).programs;I!==void 0&&(I.forEach(function(W){ee.releaseProgram(W)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,W,X,z,ge){I===null&&(I=be);const Ee=z.isMesh&&z.matrixWorld.determinant()<0,Re=jo(E,I,W,X,z);ve.setMaterial(X,Ee);let Ue=W.index,Ve=1;if(X.wireframe===!0){if(Ue=F.getWireframeAttribute(W),Ue===void 0)return;Ve=2}const Ie=W.drawRange,Oe=W.attributes.position;let nt=Ie.start*Ve,Tt=(Ie.start+Ie.count)*Ve;ge!==null&&(nt=Math.max(nt,ge.start*Ve),Tt=Math.min(Tt,(ge.start+ge.count)*Ve)),Ue!==null?(nt=Math.max(nt,0),Tt=Math.min(Tt,Ue.count)):Oe!=null&&(nt=Math.max(nt,0),Tt=Math.min(Tt,Oe.count));const lt=Tt-nt;if(lt<0||lt===1/0)return;xe.setup(z,X,Re,W,Ue);let Zt,et=Qe;if(Ue!==null&&(Zt=v.get(Ue),et=Ne,et.setIndex(Zt)),z.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*pe()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(z.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),ve.setLineWidth(Be*pe()),z.isLineSegments?et.setMode(D.LINES):z.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else z.isPoints?et.setMode(D.POINTS):z.isSprite&&et.setMode(D.TRIANGLES);if(z.isBatchedMesh)et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)et.renderInstances(nt,lt,z.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fr=Math.min(W.instanceCount,Be);et.renderInstances(nt,lt,fr)}else et.render(nt,lt)};function ke(E,I,W){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Mt,E.needsUpdate=!0,Ui(E,I,W),E.side=ln,E.needsUpdate=!0,Ui(E,I,W),E.side=sn):Ui(E,I,W)}this.compile=function(E,I,W=null){W===null&&(W=E),f=Me.get(W),f.init(),w.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(S._useLegacyLights);const X=new Set;return E.traverse(function(z){const ge=z.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Re=ge[Ee];ke(Re,W,z),X.add(Re)}else ke(ge,W,z),X.add(ge)}),w.pop(),f=null,X},this.compileAsync=function(E,I,W=null){const X=this.compile(E,I,W);return new Promise(z=>{function ge(){if(X.forEach(function(Ee){we.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){z(E);return}setTimeout(ge,10)}he.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let $e=null;function ht(E){$e&&$e(E)}function Lt(){_t.stop()}function Ke(){_t.start()}const _t=new Uo;_t.setAnimationLoop(ht),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){$e=E,Fe.setAnimationLoop(E),E===null?_t.stop():_t.start()},Fe.addEventListener("sessionstart",Lt),Fe.addEventListener("sessionend",Ke),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(I),I=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,I,_),f=Me.get(E,w.length),f.init(),w.push(f),ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),_e.setFromProjectionMatrix(ne),j=this.localClippingEnabled,O=ie.init(this.clippingPlanes,j),y=Ce.get(E,u.length),y.init(),u.push(y),kt(E,I,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(q,Y),this.info.render.frame++,O===!0&&ie.beginShadows();const W=f.state.shadowsArray;if(re.render(W,E,I),O===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1)&&De.render(y,E),f.setupLights(S._useLegacyLights),I.isArrayCamera){const X=I.cameras;for(let z=0,ge=X.length;z<ge;z++){const Ee=X[z];Es(y,E,Ee,Ee.viewport)}}else Es(y,E,I);_!==null&&(Ae.updateMultisampleRenderTarget(_),Ae.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(S,E,I),xe.resetDefaultState(),C=-1,G=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function kt(E,I,W,X){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){X&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const Ee=K.update(E),Re=E.material;Re.visible&&y.push(E,Ee,Re,W,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const Ee=K.update(E),Re=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),se.copy(Ee.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(ne)),Array.isArray(Re)){const Ue=Ee.groups;for(let Ve=0,Ie=Ue.length;Ve<Ie;Ve++){const Oe=Ue[Ve],nt=Re[Oe.materialIndex];nt&&nt.visible&&y.push(E,Ee,nt,W,se.z,Oe)}}else Re.visible&&y.push(E,Ee,Re,W,se.z,null)}}const ge=E.children;for(let Ee=0,Re=ge.length;Ee<Re;Ee++)kt(ge[Ee],I,W,X)}function Es(E,I,W,X){const z=E.opaque,ge=E.transmissive,Ee=E.transparent;f.setupLightsView(W),O===!0&&ie.setGlobalState(S.clippingPlanes,W),ge.length>0&&Ko(z,ge,I,W),X&&ve.viewport(g.copy(X)),z.length>0&&Di(z,I,W),ge.length>0&&Di(ge,I,W),Ee.length>0&&Di(Ee,I,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ko(E,I,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ge=Te.isWebGL2;ae===null&&(ae=new Gn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Ti:xn,minFilter:Fn,samples:ge?4:0})),S.getDrawingBufferSize(oe),ge?ae.setSize(oe.x,oe.y):ae.setSize(os(oe.x),os(oe.y));const Ee=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(Z),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const Re=S.toneMapping;S.toneMapping=vn,Di(E,W,X),Ae.updateMultisampleRenderTarget(ae),Ae.updateRenderTargetMipmap(ae);let Ue=!1;for(let Ve=0,Ie=I.length;Ve<Ie;Ve++){const Oe=I[Ve],nt=Oe.object,Tt=Oe.geometry,lt=Oe.material,Zt=Oe.group;if(lt.side===sn&&nt.layers.test(X.layers)){const et=lt.side;lt.side=Mt,lt.needsUpdate=!0,ys(nt,W,X,Tt,lt,Zt),lt.side=et,lt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ae.updateMultisampleRenderTarget(ae),Ae.updateRenderTargetMipmap(ae)),S.setRenderTarget(Ee),S.setClearColor(Z,R),S.toneMapping=Re}function Di(E,I,W){const X=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ge=E.length;z<ge;z++){const Ee=E[z],Re=Ee.object,Ue=Ee.geometry,Ve=X===null?Ee.material:X,Ie=Ee.group;Re.layers.test(W.layers)&&ys(Re,I,W,Ue,Ve,Ie)}}function ys(E,I,W,X,z,ge){E.onBeforeRender(S,I,W,X,z,ge),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,I,W,X,E,ge),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=Mt,z.needsUpdate=!0,S.renderBufferDirect(W,I,X,z,E,ge),z.side=ln,z.needsUpdate=!0,S.renderBufferDirect(W,I,X,z,E,ge),z.side=sn):S.renderBufferDirect(W,I,X,z,E,ge),E.onAfterRender(S,I,W,X,z,ge)}function Ui(E,I,W){I.isScene!==!0&&(I=be);const X=we.get(E),z=f.state.lights,ge=f.state.shadowsArray,Ee=z.state.version,Re=ee.getParameters(E,z.state,ge,I,W),Ue=ee.getProgramCacheKey(Re);let Ve=X.programs;X.environment=E.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(E.isMeshStandardMaterial?A:Pe).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",k),Ve=new Map,X.programs=Ve);let Ie=Ve.get(Ue);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===Ee)return As(E,Re),Ie}else Re.uniforms=ee.getUniforms(E),E.onBuild(W,Re,S),E.onBeforeCompile(Re,S),Ie=ee.acquireProgram(Re,Ue),Ve.set(Ue,Ie),X.uniforms=Re.uniforms;const Oe=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=ie.uniform),As(E,Re),X.needsLights=Jo(E),X.lightsStateVersion=Ee,X.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function Ts(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=nr.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function As(E,I){const W=we.get(E);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function jo(E,I,W,X,z){I.isScene!==!0&&(I=be),Ae.resetTextureUnits();const ge=I.fog,Ee=X.isMeshStandardMaterial?I.environment:null,Re=_===null?S.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:En,Ue=(X.isMeshStandardMaterial?A:Pe).get(X.envMap||Ee),Ve=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let lt=vn;X.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(lt=S.toneMapping);const Zt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=Zt!==void 0?Zt.length:0,Be=we.get(X),fr=f.state.lights;if(O===!0&&(j===!0||E!==G)){const Pt=E===G&&X.id===C;ie.setState(X,E,Pt)}let Je=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==fr.state.version||Be.outputColorSpace!==Re||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==Ue||X.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ie.numPlanes||Be.numIntersection!==ie.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==Ie||Be.morphTargets!==Oe||Be.morphNormals!==nt||Be.morphColors!==Tt||Be.toneMapping!==lt||Te.isWebGL2===!0&&Be.morphTargetsCount!==et)&&(Je=!0):(Je=!0,Be.__version=X.version);let Tn=Be.currentProgram;Je===!0&&(Tn=Ui(X,I,z));let bs=!1,mi=!1,pr=!1;const dt=Tn.getUniforms(),An=Be.uniforms;if(ve.useProgram(Tn.program)&&(bs=!0,mi=!0,pr=!0),X.id!==C&&(C=X.id,mi=!0),bs||G!==E){dt.setValue(D,"projectionMatrix",E.projectionMatrix),dt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Pt=dt.map.cameraPosition;Pt!==void 0&&Pt.setValue(D,se.setFromMatrixPosition(E.matrixWorld)),Te.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&dt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,mi=!0,pr=!0)}if(z.isSkinnedMesh){dt.setOptional(D,z,"bindMatrix"),dt.setOptional(D,z,"bindMatrixInverse");const Pt=z.skeleton;Pt&&(Te.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(D,"boneTexture",Pt.boneTexture,Ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(dt.setOptional(D,z,"batchingTexture"),dt.setValue(D,"batchingTexture",z._matricesTexture,Ae));const mr=W.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&Te.isWebGL2===!0)&&te.update(z,W,Tn),(mi||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,dt.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(An.envMap.value=Ue,An.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),mi&&(dt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&Zo(An,pr),ge&&X.fog===!0&&Q.refreshFogUniforms(An,ge),Q.refreshMaterialUniforms(An,X,B,V,ae),nr.upload(D,Ts(Be),An,Ae)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(nr.upload(D,Ts(Be),An,Ae),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&dt.setValue(D,"center",z.center),dt.setValue(D,"modelViewMatrix",z.modelViewMatrix),dt.setValue(D,"normalMatrix",z.normalMatrix),dt.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pt=X.uniformsGroups;for(let gr=0,Qo=Pt.length;gr<Qo;gr++)if(Te.isWebGL2){const ws=Pt[gr];Se.update(ws,Tn),Se.bind(ws,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function Zo(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Jo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,I,W){we.get(E.texture).__webglTexture=I,we.get(E.depthTexture).__webglTexture=W;const X=we.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const W=we.get(E);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,W=0){_=E,L=I,x=W;let X=!0,z=null,ge=!1,Ee=!1;if(E){const Ue=we.get(E);Ue.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):Ue.__webglFramebuffer===void 0?Ae.setupRenderTarget(E):Ue.__hasExternalTextures&&Ae.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const Ie=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?z=Ie[I][W]:z=Ie[I],ge=!0):Te.isWebGL2&&E.samples>0&&Ae.useMultisampledRTT(E)===!1?z=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[W]:z=Ie,g.copy(E.viewport),T.copy(E.scissor),$=E.scissorTest}else g.copy(N).multiplyScalar(B).floor(),T.copy(J).multiplyScalar(B).floor(),$=ue;if(ve.bindFramebuffer(D.FRAMEBUFFER,z)&&Te.drawBuffers&&X&&ve.drawBuffers(E,z),ve.viewport(g),ve.scissor(T),ve.setScissorTest($),ge){const Ue=we.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ue.__webglTexture,W)}else if(Ee){const Ue=we.get(E.texture),Ve=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.__webglTexture,W||0,Ve)}C=-1},this.readRenderTargetPixels=function(E,I,W,X,z,ge,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){ve.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Ue=E.texture,Ve=Ue.format,Ie=Ue.type;if(Ve!==Vt&&ye.convert(Ve)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===Ti&&(he.has("EXT_color_buffer_half_float")||Te.isWebGL2&&he.has("EXT_color_buffer_float"));if(Ie!==xn&&ye.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===an&&(Te.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-X&&W>=0&&W<=E.height-z&&D.readPixels(I,W,X,z,ye.convert(Ve),ye.convert(Ie),ge)}finally{const Ue=_!==null?we.get(_).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(E,I,W=0){const X=Math.pow(2,-W),z=Math.floor(I.image.width*X),ge=Math.floor(I.image.height*X);Ae.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,E.x,E.y,z,ge),ve.unbindTexture()},this.copyTextureToTexture=function(E,I,W,X=0){const z=I.image.width,ge=I.image.height,Ee=ye.convert(W.format),Re=ye.convert(W.type);Ae.setTexture2D(W,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,E.x,E.y,z,ge,Ee,Re,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,Ee,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,X,E.x,E.y,Ee,Re,I.image),X===0&&W.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,I,W,X,z=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=Math.round(E.max.x-E.min.x),Ee=Math.round(E.max.y-E.min.y),Re=E.max.z-E.min.z+1,Ue=ye.convert(X.format),Ve=ye.convert(X.type);let Ie;if(X.isData3DTexture)Ae.setTexture3D(X,0),Ie=D.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Ae.setTexture2DArray(X,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment);const Oe=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tt=D.getParameter(D.UNPACK_SKIP_PIXELS),lt=D.getParameter(D.UNPACK_SKIP_ROWS),Zt=D.getParameter(D.UNPACK_SKIP_IMAGES),et=W.isCompressedTexture?W.mipmaps[z]:W.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,E.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,E.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?D.texSubImage3D(Ie,z,I.x,I.y,I.z,ge,Ee,Re,Ue,Ve,et.data):X.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,z,I.x,I.y,I.z,ge,Ee,Re,Ue,et.data):D.texSubImage3D(Ie,z,I.x,I.y,I.z,ge,Ee,Re,Ue,Ve,et),D.pixelStorei(D.UNPACK_ROW_LENGTH,Oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt),z===0&&X.generateMipmaps&&D.generateMipmap(Ie),ve.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){L=0,x=0,_=null,ve.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ms?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===hr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Mp extends Ho{}Mp.prototype.isWebGL1Renderer=!0;class Sp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ja extends mt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends yn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new H,p=new H,m=[],M=[],y=[],f=[];for(let u=0;u<=i;u++){const w=[],S=u/i;let b=0;u===0&&o===0?b=.5/t:u===i&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const x=L/t;d.x=-e*Math.cos(r+x*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+x*s)*Math.sin(o+S*a),M.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),f.push(x+b,1-S),w.push(c++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<t;w++){const S=h[u][w+1],b=h[u][w],L=h[u+1][w],x=h[u+1][w+1];(u!==0||o>0)&&m.push(S,b,x),(u!==i-1||l<Math.PI)&&m.push(b,L,x)}this.setIndex(m),this.setAttribute("position",new Kt(M,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Za extends Ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ja={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ep{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){const m=c[d],M=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return M}return null}}}const yp=new Ep;class Ss{constructor(e){this.manager=e!==void 0?e:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";class Tp extends Ss{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ja.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ai("img");function l(){h(),Ja.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ap extends Ss{constructor(e){super(e)}load(e,t,i,r){const s=new mt,o=new Tp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Vo extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jr=new rt,Qa=new H,eo=new H;class bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qa),eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eo),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wp extends bp{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class to extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cp extends Vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ds);let Gt,oi,Ct;window.scene=null;let it,ir=[],Zr,me;function Rp(n,e){Zr=n,me=e,Gt=new Sp,window.scene=Gt,Gt.background=new qe(15791615),oi=new Nt(75,window.innerWidth/window.innerHeight,.1,1e3),oi.position.z=5,oi.position.y=4,Ct=new Ho({antialias:!0}),Ct.setSize(window.innerWidth,window.innerHeight),Zr.insertBefore(Ct.domElement,Zr.firstChild);const t=new Cp(16777215,.5);Gt.add(t);const i=new to(16777215,.8);i.position.set(1,1,1),Gt.add(i);const r=new to(16777215,.5);return r.position.set(-1,-1,-1),Gt.add(r),Lp(),ko(),Ct}function Lp(){window.addEventListener("resize",()=>{const n=window.innerWidth,e=window.innerHeight;Ct.setSize(n,e),oi.aspect=n/e,oi.updateProjectionMatrix()}),Ct.domElement.addEventListener("mousedown",Pp),Ct.domElement.addEventListener("mousemove",Dp),Ct.domElement.addEventListener("mouseup",cs),Ct.domElement.addEventListener("mouseleave",cs),Ct.domElement.addEventListener("touchstart",Up),Ct.domElement.addEventListener("touchmove",Ip),Ct.domElement.addEventListener("touchend",Np)}function Pp(n){it&&(me.isDragging=!0,me.lastMouseX=n.clientX,me.lastMouseY=n.clientY,me.lastDragTime=Date.now(),me.rotationVelocity=0)}function Dp(n){if(!me.isDragging||!it)return;const e=Date.now();me.dragInterval=e-me.lastDragTime;const t=n.clientX-me.lastMouseX,i=n.clientY-me.lastMouseY;if(it.rotation.y+=t*.01,me.dragInterval>0){const s=t*.01/(me.dragInterval/16.67);me.rotationVelocity=me.rotationVelocity*.7+s*.3}const r=i*.003;me.targetFoldAmount=Math.max(-me.maxFoldAmount,Math.min(me.maxFoldAmount,me.targetFoldAmount-r)),me.lastMouseX=n.clientX,me.lastMouseY=n.clientY,me.lastDragTime=e}function cs(){me.isDragging&&(me.isDragging=!1,me.targetFoldAmount=0)}function Up(n){it&&(me.isDragging=!0,me.touchStartX=n.touches[0].clientX,me.touchStartY=n.touches[0].clientY,me.lastMouseX=n.touches[0].clientX,me.lastMouseY=n.touches[0].clientY,me.lastDragTime=Date.now(),me.rotationVelocity=0)}function Ip(n){if(!me.isDragging||!it)return;n.preventDefault();const e=Date.now();me.dragInterval=e-me.lastDragTime;const t=n.touches[0].clientX-me.lastMouseX,i=n.touches[0].clientY-me.lastMouseY;if(it.rotation.y+=t*.01,me.dragInterval>0){const s=t*.01/(me.dragInterval/16.67);me.rotationVelocity=me.rotationVelocity*.7+s*.3}const r=i*.003;me.targetFoldAmount=Math.max(-me.maxFoldAmount,Math.min(me.maxFoldAmount,me.targetFoldAmount-r)),me.lastMouseX=n.touches[0].clientX,me.lastMouseY=n.touches[0].clientY,me.lastDragTime=e}function Np(){cs()}function ko(){requestAnimationFrame(ko),it&&(me.isDragging||Math.abs(me.rotationVelocity)>me.velocityThreshold&&(it.rotation.y+=me.rotationVelocity,me.rotationVelocity*=me.frictionFactor,Math.abs(me.rotationVelocity)<me.velocityThreshold&&(me.rotationVelocity=0)),zp()),Op(),Ct.render(Gt,oi)}function Fp(n){const e=new Ms(.05,8,8),t=new _s({color:16776960,transparent:!0,opacity:1}),i=new Ft(e,t);return i.position.copy(n),i.userData.velocity=new H((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),i.userData.opacity=1,i}function Op(){for(let n=ir.length-1;n>=0;n--){const e=ir[n];e.position.add(e.userData.velocity),e.userData.opacity-=.02,e.material.opacity=e.userData.opacity,e.userData.opacity<=0&&(Gt.remove(e),ir.splice(n,1))}}function Bp(n){return new Promise((e,t)=>{const i=document.createElement("canvas");i.width=512,i.height=712;const r=i.getContext("2d");r.fillStyle="white",r.fillRect(0,0,512,712);const s=new Ap,o=`/images/${n.imageFile}`;s.load(o,a=>{const c=i.width-80,h=i.height-40*2;r.drawImage(a.image,40,40,c,h),r.font="bold 60px Arial",r.fillStyle=n.color,r.textAlign="left",r.textBaseline="top",r.fillText(n.value,20,20),r.font="bold 60px Arial",r.fillText(Jr(n.suit),20,80),r.save(),r.translate(i.width,i.height),r.rotate(Math.PI),r.fillText(n.value,20,20),r.fillText(Jr(n.suit),20,80),r.restore();const m=new ja(i);m.flipY=!0,m.needsUpdate=!0,e(m)},void 0,a=>{console.error("載入圖片失敗:",a),console.error("嘗試載入的圖片路徑:",o),r.font="bold 80px Arial",r.fillStyle=n.color,r.textAlign="center",r.fillText(n.value,i.width/2,120),r.font="bold 200px Arial",r.fillText(Jr(n.suit),i.width/2,i.height/2),r.font="bold 40px Arial",r.fillText(n.person||"",i.width/2,i.height-120);const l=new ja(i);l.flipY=!0,l.needsUpdate=!0,e(l)})})}function Jr(n){switch(n){case"hearts":return"♥";case"diamonds":return"♦";case"spades":return"♠";case"clubs":return"♣";default:return""}}async function Wo(n){const e=new Pi(3,4,me.foldSegments,me.foldSegments),t=await Bp(n),i=new Za({color:16777215,map:t,side:ln,shininess:30}),r=new Za({color:170,side:Mt,shininess:30}),s=new Ft(e.clone(),i),o=new Ft(e.clone(),r),a=new yi;return a.add(s),a.add(o),a.position.set(0,-10,0),a.rotation.y=Math.PI,a.userData={cardData:n,frontGeometry:s.geometry,backGeometry:o.geometry},a}function Xo(n){it&&Gt.remove(it),Gt.add(n),it=n,it.position.set(0,-10,0),it.rotation.set(0,Math.PI,0);let e=0;const t=30;function i(){if(e>=t){me.isDrawing=!1,typeof me.onAnimationComplete=="function"&&me.onAnimationComplete();for(let a=0;a<20;a++){const l=Fp(new H(it.position.x+(Math.random()-.5)*2,it.position.y+(Math.random()-.5)*2,it.position.z+(Math.random()-.5)*2));Gt.add(l),ir.push(l)}return}e++;const r=e/t,s=1-Math.pow(1-r,3),o=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;it.position.y=-10+10*o+5,it.rotation.y=Math.PI-Math.PI*s,requestAnimationFrame(i)}i()}function zp(){if(!it)return;const n=it.userData.frontGeometry,e=it.userData.backGeometry,t=me.targetFoldAmount-me.foldAmount;Math.abs(t)>.001?me.foldAmount+=t*me.foldAnimationSpeed:me.foldAmount=me.targetFoldAmount;const i=me.foldAmount,r=n.attributes.position.array,s=e.attributes.position.array,o=me.foldSegments,a=4/o,l=3/o;for(let c=0;c<=o;c++)for(let h=0;h<=o;h++){const d=(c*(o+1)+h)*3,p=i*(c%2===0?1:-1),m=i*.5*(h%2===0?1:-1),M=Math.sin(p)*a*.5+Math.sin(m)*l*.3,y=(1-Math.cos(p))*a*.5,f=(1-Math.cos(m))*l*.3,u=r[d],w=r[d+1],S=u-Math.sign(u)*f,b=w-Math.sign(w)*y;r[d]=S,r[d+1]=b,r[d+2]=M,s[d]=S,s[d+1]=b,s[d+2]=M}n.attributes.position.needsUpdate=!0,e.attributes.position.needsUpdate=!0,n.computeVertexNormals(),e.computeVertexNormals()}function no(){return[...Mn]}let Mn=[];async function Gp(){try{const t=await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSniLwHat28siwAkCjIOdq9C5WzeG3C2WN7l5XkHNrHu0UezGTz3ZPvu9hNNPqmfefx8qUNHOFuU9uX/pub?output=csv")).text();return new Promise((i,r)=>{Papa.parse(t,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete:function(s){const o=s.data;Mn=[],o.forEach((a,l)=>{const c=a.name||a.花色數字,h=a.suit||a.花色,d=a.color||a.顏色,p=a.value||a.數字;if(c&&h&&d&&p){let m;h==="joker"?m=`joker-${d}.jpg`:m=`${h}-${p}.jpg`.toLowerCase();const M=function(){const u=a.startDate||a.開始日期;return!u||u==="#N/A"?null:u}(),y=function(){const u=a.endDate||a.截止日期;return!u||u==="#N/A"?null:u}(),f=function(){const u=a.recallWebsite||a.罷團官方網站;return!u||u==="#N/A"?null:u}();Mn.push({id:l+1,name:c,color:d,suit:h,value:p,person:a.person||a.人物,title:a.title||a.稱號,quote:a.quote||a.標語,imageFile:m,startDate:M,endDate:y,targetCount:function(){const u=a.targetCount||a.目標人數;if(!u||u==="#N/A")return null;try{return parseInt(u.toString().replace(/,/g,""))}catch{return null}}(),currentCount:function(){const u=a.currentCount||a.目前連署數;if(!u||u==="#N/A")return null;try{return parseInt(u.toString().replace(/,/g,""))}catch{return null}}(),recallWebsite:f,voteCount:a.voteCount||a.投票人數||"0"})}}),i(Mn)},error:function(s){console.error("解析 CSV 檔案失敗:",s),r(s)}})})}catch(n){throw console.error("讀取 CSV 檔案失敗:",n),n}}const Ut={cards:[],isDrawing:!1,currentCard:null,showCollection:!1,newCardsCount:0,uniqueCardTypes:new Set,isDragging:!1,lastMouseX:0,lastMouseY:0,touchStartX:0,touchStartY:0,foldAmount:0,targetFoldAmount:0,maxFoldAmount:Math.PI/3,foldSegments:10,foldAnimationSpeed:.15,rotationVelocity:0,frictionFactor:.97,velocityThreshold:.001,lastDragTime:0,dragInterval:0,onAnimationComplete:null};let cr,Ei,On,Yt;async function Hp(){await Gp(),Vp(),Ut.onAnimationComplete=()=>{Yt.disabled=!1,Yt.textContent="抽牌"},Rp(cr,Ut),tl(cr,Ut,Wo,Xo,Yt,On),co(),li()}function Vp(){cr=document.getElementById("root"),Ei=document.createElement("div"),Ei.className="ui-container",cr.appendChild(Ei),On=document.createElement("div"),On.className="current-card",On.style.display="none",Ei.appendChild(On);const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.width="100%",n.style.maxWidth="24rem",n.style.gap="1rem",n.style.marginBottom="2rem",Ei.appendChild(n),Yt=document.createElement("button"),Yt.className="draw-button",Yt.textContent="抽牌",Yt.addEventListener("click",qo),n.appendChild(Yt)}async function qo(){if(Ut.isDrawing)return;Ut.isDrawing=!0,Yt.disabled=!0,Yt.textContent="抽牌中...";const n=Mn.reduce((l,c)=>{var d;const h=parseInt(((d=c.voteCount)==null?void 0:d.toString().replace(/,/g,""))||"0");return l+h},0),e=Math.random()*n;let t=0;const r={...Mn.find(l=>{var h;const c=parseInt(((h=l.voteCount)==null?void 0:h.toString().replace(/,/g,""))||"0");return t+=c,e<=t})||Mn[0],id:Date.now()};Ut.cards.push(r),Ut.currentCard=r;const s=Ut.cards.filter(l=>l.name===r.name).length;r.count=s;const o=!Ut.uniqueCardTypes.has(r.name);Ut.uniqueCardTypes.add(r.name),o&&Ut.newCardsCount++,Yo(r),li(),sl(Ut);const a=await Wo(r);Xo(a)}function kp(n){if(!n)return null;let e=n;if(n.includes("/")){const o=n.split("/"),a=o[0],l=o[1].padStart(2,"0"),c=o[2].padStart(2,"0");e=`${a}-${l}-${c}`}const t=new Date(e),i=new Date;i.setHours(0,0,0,0),t.setHours(0,0,0,0);const r=t.getTime()-i.getTime();return Math.ceil(r/(1e3*3600*24))}function Wp(n,e){if(n===null||e===null||isNaN(n)||isNaN(e)||e<=0)return"";try{return"尚缺 "+(e-n)+" 份"}catch(t){return console.error("進度條生成錯誤:",t),""}}function Yo(n){var l;On.style.display="block";const e=Mn.reduce((c,h)=>{var p;const d=parseInt(((p=h.voteCount)==null?void 0:p.toString().replace(/,/g,""))||"0");return c+d},0),i=(parseInt(((l=n.voteCount)==null?void 0:l.toString().replace(/,/g,""))||"0")/e*100).toFixed(2),r=n.endDate?kp(n.endDate):null,s=n.recallWebsite&&r!==null&&r>0,o=n.targetCount&&n.currentCount?Math.min(100,Math.round(n.currentCount/n.targetCount*100)):null;Wp(n.currentCount,n.targetCount);let a=`
        <div style="position: relative;">
            <div class="probability-badge">${i}%</div>
            <p>抽到 <span class="${n.color==="red"?"red":"black"}">${n.person||n.name}</span></p>
            <p>目前持有：${n.count} 張</p>
        </div>
    `;if(s){if(a+="<p>目前罷免進行中</p>",a+=`<p>距離罷免收件截止日剩 <span class="red-large">${r}</span> 天</p>`,n.targetCount!==null&&n.currentCount!==null){const c=n.targetCount-n.currentCount;a+=`<p>目標進度：${o}% 尚欠${c}份</p>`}a+=`<p><a href="${n.recallWebsite}" target="_blank" class="recall-link">前往罷免資訊</a></p>`}On.innerHTML=a}window.drawCard=qo;document.addEventListener("DOMContentLoaded",Hp)});export default Xp();
