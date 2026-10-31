(()=>{function yr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bo={duration:.5,overwrite:!1,delay:0},wd,yn,Bt,Ci=1e8,At=1/Ci,pd=Math.PI*2,gv=pd/4,_v=0,Gm=Math.sqrt,xv=Math.cos,vv=Math.sin,cn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},bc=function(e){return typeof e=="undefined"},nr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Td=function(){return typeof window!="undefined"},dc=function(e){return Xt(e)||cn(e)},Hm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,yv=/random\([^)]+\)/g,bv=/,\s*/g,Dm=/(?:-?\.?\d|\.)+/gi,Ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,od=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ad=/[+-]=-?[.\d]+/,Sv=/[^,'"\[\]\s]+/gi,Mv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,er,md,Cd,di={},gc={},Wm,Xm=function(e){return(gc=ma(e,di))&&Rn},Sc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ko=function(e,t){return!t&&console.warn(e)},qm=function(e,t){return e&&(di[e]=t)&&gc&&(gc[e]=t)||di},zo=function(){return 0},wv={suppressEvents:!0,isStart:!0,kill:!1},fc={suppressEvents:!0,kill:!1},Tv={suppressEvents:!0},Rd={},Zr=[],gd={},Ym,ni={},ld={},Nm=30,pc=[],Pd="",Id=function(e){var t=e[0],n,i;if(nr(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=pc.length;i--&&!pc[i].targetTest(t););n=pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ud(e[i],n)))||e.splice(i,1);return e},Kr=function(e){return e._gsap||Id(Ri(e))[0]._gsap},Ld=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():bc(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ev=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_c=function(){var e=Zr.length,t=Zr.slice(0),n,i;for(gd={},Zr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dd=function(e){return!!(e._initted||e._startAt||e.add)},$m=function(e,t,n,i){Zr.length&&!yn&&_c(),e.render(t,n,i||!!(yn&&t<0&&Dd(e))),Zr.length&&!yn&&_c()},Zm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Sv).length<2?t:cn(e)?e.trim():e},Km=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Av=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ma=function(e,t){for(var n in t)e[n]=t[n];return e},Um=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},xc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Uo=function(e){var t=e.parent||Vt,n=e.keyframes?Av(Cn(e.keyframes)):fi;if(ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Cv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Mc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Rv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_d=function(e,t,n,i){return e._startAt&&(yn?e._startAt.revert(fc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Pv=function r(e){return!e||e._ts&&r(e.parent)},Om=function(e){return e._repeat?ga(e._tTime,e=e.duration()+e._rDelay)*e:0},ga=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},vc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Tc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wc(e),n._dirty||ws(n,e)),e},jm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vc(e.rawTime(),t),(!t._dur||Ho(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},tr=function(e,t,n,i){return t.parent&&Jr(t),t._start=zt((Sr(n)?n:n||e!==Vt?Ai(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jm(e,t,"_first","_last",e._sort?"_start":0),xd(t)||(e._recent=t),i||jm(e,t),e._ts<0&&Tc(e,e._tTime),e},Qm=function(e,t){return(di.ScrollTrigger||Sc("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},eg=function(e,t,n,i,s){if(Bd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ym!==ii.frame)return Zr.push(e),e._lazy=[s,i],1},Iv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Lv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Iv(e)&&!(!e._initted&&xd(e))||(e._ts<0||e._dp._ts<0)&&!xd(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Ho(0,e._tDur,t),u=ga(l,o),e._yoyo&&u&1&&(a=1-a),u!==ga(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||yn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&eg(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&_d(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Jr(e,1),!n&&!yn&&(hi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_a=function(e,t,n,i){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Tc(e,e._tTime=e._tDur*o),e.parent&&wc(e),n||ws(e.parent,e),e},Fm=function(e){return e instanceof An?ws(e):_a(e,e._dur)},Nv={_start:0,endTime:zo,totalDuration:zo},Ai=function r(e,t,n){var i=e.labels,s=e._recent||Nv,a=e.duration()>=Ci?s.endTime(!1):e._dur,o,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Oo=function(e,t,n){var i=Sr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;a.immediateRender=ri(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},jr=function(e,t){return e||e===0?t(e):t},Ho=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!cn(e)||!(t=Mv.exec(e))?"":t[1]},Uv=function(e,t,n){return jr(n,function(i){return Ho(e,t,i)})},vd=[].slice,tg=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==er},Ov=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return cn(i)&&!t||tg(i,1)?(s=n).push.apply(s,Ri(i)):n.push(i)})||n},Ri=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):cn(e)&&!n&&(md||!xa())?vd.call((t||Cd).querySelectorAll(e),0):Cn(e)?Ov(e,n):tg(e)?vd.call(e,0):e?[e]:[]},yd=function(e){return e=Ri(e)[0]||ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ri(t,n.querySelectorAll?n:n===e?ko("Invalid scope")||Cd.createElement("div"):e)}},ng=function(e){return e.sort(function(){return .5-Math.random()})},ig=function(e){if(Xt(e))return e;var t=nr(e)?e:{each:e},n=Ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return cn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,p=a[_],m,S,A,y,b,w,E,x,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Ci])[1],!M){for(E=-Ci;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=a[_]=[],m=l?Math.min(M,_)*u-.5:i%M,S=M===Ci?0:l?_*d/M-.5:i/M|0,E=0,x=Ci,w=0;w<_;w++)A=w%M-m,y=S-(w/M|0),p[w]=b=c?Math.abs(c==="y"?y:A):Gm(A*A+y*y),b>E&&(E=b),b<x&&(x=b);i==="random"&&ng(p),p.max=E-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=bn(t.amount||t.each)||0,n=n&&_<0?Zv(n):n}return _=(p[h]-p.min)/p.max||0,zt(p.b+(n?n(_):_)*p.v)+p.u}},bd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:bn(n))}},rg=function(e,t){var n=Cn(e),i,s;return!n&&nr(e)&&(i=n=e.radius||Ci,e.values?(e=Ri(e.values),(s=!Sr(e[0]))&&(i*=i)):e=bd(e.increment)),jr(t,n?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ci,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Sr(a)?u:u+bn(a)}:bd(e))},sg=function(e,t,n,i){return jr(Cn(e)?!t:n===!0?!!(n=0):!i,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Fv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Bv=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},kv=function(e,t,n){return og(e,t,0,1,n)},ag=function(e,t,n){return jr(n,function(i){return e[~~t(i)]})},zv=function r(e,t,n){var i=t-e;return Cn(e)?ag(e,r(0,e.length),t):jr(n,function(s){return(i+(s-e)%i)%i+e})},Vv=function r(e,t,n){var i=t-e,s=i*2;return Cn(e)?ag(e,r(0,e.length-1),t):jr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},va=function(e){return e.replace(yv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(bv);return sg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},og=function(e,t,n,i,s){var a=t-e,o=i-n;return jr(s,function(l){return n+((l-e)/a*o||0)})},Gv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=cn(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=ma(Cn(e)?[]:{},e));if(!u){for(l in t)Od.call(o,e,l,"get",t[l]);s=function(g){return Vd(g,o)||(a?e.p:e)}}}return jr(n,s)},Bm=function(e,t,n){var i=e.labels,s=Ci,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},hi=function(e,t,n){var i=e.vars,s=i[t],a=Bt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zr.length&&_c(),o&&(Bt=o),u=l?s.apply(c,l):s.call(c),Bt=a,u},Do=function(e){return Jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&hi(e,"onInterrupt"),e},pa,lg=[],cg=function(e){if(e)if(e=!e.name&&e.default||e,Td()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:zo,render:Vd,add:Od,kill:sy,modifier:ry,rawVars:0},a={targetTest:0,get:0,getSetter:Ec,aliases:{},register:0};if(xa(),e!==i){if(ni[t])return;fi(i,fi(xc(e,s),a)),ma(i.prototype,ma(s,xc(e,a))),ni[i.prop=t]=i,e.targetTest&&(pc.push(i),Rd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qm(t,i),e.register&&e.register(Rn,i,Wn)}else lg.push(e)},Et=255,No={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},cd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},ug=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&Et,e&Et]:0:No.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),No[e])i=No[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Dm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=cd(l+1/3,s,a),i[1]=cd(l,s,a),i[2]=cd(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(Dm)||No.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Et,a=i[1]/Et,o=i[2]/Et,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},hg=function(e){var t=[],n=[],i=-1;return e.split(br).forEach(function(s){var a=s.match(As)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},km=function(e,t,n){var i="",s=(e+i).match(br),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=ug(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=hg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(br,"1").split(As),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(br),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},br=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in No)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Hv=/hsl[a]?\(/,Nd=function(e){var t=e.join(" "),n;if(br.lastIndex=0,br.test(t))return n=Hv.test(t),e[1]=km(e[1],n),e[0]=km(e[0],n,hg(e[1])),!0},Vo,ii=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(p){var m=r()-i,S=p===!0,A,y,b,w;if((m>e||m<0)&&(n+=m-t),i+=m,b=i-n,A=b-a,(A>0||S)&&(w=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=A+(A>=s?4:s-A),y=1),S||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](b,h,w,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Wm&&(!md&&Td()&&(er=md=window,Cd=er.document||{},di.gsap=Rn,(er.gsapVersions||(er.gsapVersions=[])).push(Rn.version),Xm(gc||er.GreenSockGlobals||!er.gsap&&er||{}),lg.forEach(cg)),u=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Vo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Vo=0,c=zo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,S){var A=m?function(y,b,w,E){p(y,b,w,E),d.remove(A)}:p;return d.remove(p),o[S?"unshift":"push"](A),xa(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d}(),xa=function(){return!Vo&&ii.wake()},ft={},Wv=/^[\d.\-M][\d.\-,\s]/,Xv=/["']/g,qv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Xv,"").trim():+c,i=l.substr(o+1).trim();return t},Yv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$v=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qv(t[1])]:Yv(e).split(",").map(Zm)):ft._CE&&Wv.test(e)?ft._CE("",e):n},Zv=function(e){return function(t){return 1-e(1-t)}},Ts=function(e,t){return e&&(Xt(e)?e:ft[e]||$v(e))||t},Rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Hn(e,function(o){ft[o]=di[o]=s,ft[a=o.toLowerCase()]=n;for(var l in s)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=s[l]}),s},dg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ud=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/pd*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*vv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:dg(o);return s=pd/s,l.config=function(c,u){return r(e,c,u)},l},hd=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dg(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Rs("Elastic",ud("in"),ud("out"),ud());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Rs("Circ",function(r){return-(Gm(1-r*r)-1)});Rs("Sine",function(r){return r===1?1:-xv(r*gv)+1});Rs("Back",hd("in"),hd("out"),hd());ft.SteppedEase=ft.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-At;return function(o){return((i*Ho(0,a,o)|0)+s)*n}}};Bo.ease=ft["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pd+=r+","+r+"Params,"});var Ud=function(e,t){this.id=_v++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ld,this.set=t?t.getSetter:Ec},Go=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_a(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Vo||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(xa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tc(this,n),!s._dp||s.parent||jm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$m(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Om(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Om(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ga(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Ho(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),wc(this),Rv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Tv);var i=yn;return yn=n,Dd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ai(this,n),ri(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Xt(n)?n:Km,l=function(){var u=i.then;i.then=null,s&&s(),Xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Do(this)},r}();fi(Go.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var An=function(r){Vm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),Vt&&tr(n.parent||Vt,yr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qm(yr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Oo(0,arguments,this),this},t.from=function(i,s,a){return Oo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Oo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Uo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,Ai(this,a),1),this},t.call=function(i,s,a){return tr(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,Ai(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Uo(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Uo(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,S,A,y,b,w,E;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,A=this._ts,m=!A,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=zt(u%p),u===l?(_=this._repeat,h=c):(b=zt(u/p),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=ga(this._tTime,p),!o&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(h=c-h,E=1),_!==b&&!this._lock){var x=w&&b&1,M=x===(w&&_&1);if(_<b&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(E?0:zt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Dv(this,zt(o),zt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(hi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-At);break}}f=g}else{f=this._last;for(var R=i<0?i:h;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||yn&&Dd(f)),h!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=R?-At:At);break}}f=g}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-At)._zTime=h>=o?1:-1,this._ts))return this._start=y,wc(this),this.render(i,s,a);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Jr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(hi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Sr(s)||(s=Ai(this,s,i)),!(i instanceof Go)){if(Cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(cn(i))return this.addLabel(i,s);if(Xt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return cn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&Mc(this,i),i===this._recent&&(this._recent=this._last),ws(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ai(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||zo,a);return o.data="isPause",this._hasPause=1,tr(this,o,Ai(this,i))},t.removePause=function(i){var s=this._first;for(i=Ai(this,i);s;)s._start===i&&s.data==="isPause"&&Jr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)$r!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ri(i),l=this._first,c=Sr(s),u;l;)l instanceof Kt?Ev(l._targets,o)&&(c?(!$r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Ai(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Kt.to(a,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||At,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&_a(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,fi({startAt:{time:Ai(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bm(this,Ai(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bm(this,Ai(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=zt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ws(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ci,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=zt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;_a(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Vt._ts&&($m(Vt,vc(i,Vt)),Ym=ii.frame),ii.frame>=Nm){Nm+=si.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&si.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e}(Go);fi(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var Kv=function(e,t,n,i,s,a,o){var l=new Wn(this._pt,e,t,0,1,zd,null,s),c=0,u=0,d,h,f,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=va(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),h=n.match(od)||[];d=od.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Cs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=od.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ad.test(i)||m)&&(l.e=0),this._pt=l,l},Od=function(e,t,n,i,s,a,o,l,c,u){Xt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Xt(d)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Xt(d)?c?ty:mg:kd,g;if(cn(i)&&(~i.indexOf("random(")&&(i=va(i)),i.charAt(1)==="="&&(g=Cs(h,i)+(bn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Sd)return!isNaN(h*i)&&i!==""?(g=new Wn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?iy:gg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Sc(t,i),Kv.call(this,e,t,h,i,f,l||si.stringFilter,c))},Jv=function(e,t,n,i,s){if(Xt(e)&&(e=Fo(e,s,t,n,i)),!nr(e)||e.style&&e.nodeType||Cn(e)||Hm(e))return cn(e)?Fo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Fo(e[o],s,t,n,i);return a},Fd=function(e,t,n,i,s,a){var o,l,c,u;if(ni[e]&&(o=new ni[e]).init(s,o.rawVars?t[e]:Jv(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Wn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==pa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},$r,Sd,Bd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,A=e._overwrite==="auto"&&!wd,y=e.timeline,b=i.easeReverse||d,w,E,x,M,R,D,L,V,I,B,Y,z,J;if(y&&(!h||!s)&&(s="none"),e._ease=Ts(s,Bo.ease),e._rEase=b&&(Ts(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(V=p[0]?Kr(p[0]).harness:0,z=V&&i[V.prop],w=xc(i,Rd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?fc:wv),_._lazy=0),a){if(Jr(e._startAt=Kt.set(p,fi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!o&&!f)&&e._startAt.revert(fc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),x=fi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ri(l),immediateRender:o,stagger:0,parent:m},w),z&&(x[V.prop]=z),Jr(e._startAt=Kt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(fc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ri(l)||l&&!g,E=0;E<p.length;E++){if(R=p[E],L=R._gsap||Id(p)[E]._gsap,e._ptLookup[E]=B={},gd[L.id]&&Zr.length&&_c(),Y=S===p?E:S.indexOf(R),V&&(I=new V).init(R,z||w,e,Y,S)!==!1&&(e._pt=M=new Wn(e._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(O){B[O]=M}),I.priority&&(D=1)),!V||z)for(x in w)ni[x]&&(I=Fd(x,w,e,Y,R,S))?I.priority&&(D=1):B[x]=M=Od.call(e,R,x,"get",w[x],Y,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(R,e._op[E]),A&&e._pt&&($r=e,Vt.killTweensOf(R,B,e.globalTime(t)),J=!e.parent,$r=0),e._pt&&l&&(gd[L.id]=1)}D&&Gd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&y.render(Ci,!0,!0)},jv=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sd=1,e.vars[t]="+=0",Bd(e,o),Sd=0,l?ko(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=qt(n)+bn(d.e)),d.b&&(d.b=u.s+bn(d.b))},Qv=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ma({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ey=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Fo=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):cn(e)&&~e.indexOf("random(")?va(e):e},fg=Pd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};Hn(fg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pg[r]=1});var Kt=function(r){Vm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Uo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Vt,S=(Cn(n)||Hm(n)?Sr(n[0]):"length"in i)?[n]:Ri(n),A,y,b,w,E,x,M,R;if(o._targets=S.length?Id(S):ko("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||dc(c)||dc(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(A=o.timeline=new An({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),A.kill(),A.parent=A._dp=yr(o),A._start=0,h||dc(c)||dc(u)){if(w=S.length,M=h&&ig(h),nr(h))for(E in h)~fg.indexOf(E)&&(R||(R={}),R[E]=h[E]);for(y=0;y<w;y++)b=xc(i,pg),b.stagger=0,D&&(b.easeReverse=D),R&&ma(b,R),x=S[y],b.duration=+Fo(c,yr(o),y,x,S),b.delay=(+Fo(u,yr(o),y,x,S)||0)-o._delay,!h&&w===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),A.to(x,b,M?M(y,x,S):0),A._ease=ft.none;A.duration()?c=u=0:o.timeline=0}else if(g){Uo(fi(A.vars.defaults,{ease:"none"})),A._ease=Ts(g.ease||i.ease||"none");var L=0,V,I,B;if(Cn(g))g.forEach(function(Y){return A.to(S,Y,">")}),A.duration();else{b={};for(E in g)E==="ease"||E==="easeEach"||ey(E,g[E],b,g.easeEach);for(E in b)for(V=b[E].sort(function(Y,z){return Y.t-z.t}),L=0,y=0;y<V.length;y++)I=V[y],B={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},B[E]=I.v,A.to(S,B,L),L+=B.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return f===!0&&!wd&&($r=yr(o),Vt.killTweensOf(S),$r=0),tr(m,yr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===zt(m._time)&&ri(d)&&Pv(yr(o))&&m.data!=="nested")&&(o._tTime=-At,o.render(Math.max(0,-u)||0)),p&&Qm(yr(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-At&&!u?l:i<At?0:i,h,f,g,_,p,m,S,A;if(!c)Lv(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=zt(d%_),d===l?(g=this._repeat,h=c):(p=zt(d/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=ga(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(zt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(eg(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(hi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_d(this,i,s,a),hi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&_d(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Jr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Vo||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bd(this,c),u=this._ease(c/this._dur),jv(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Tc(this,0),this.parent||Jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Do(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,$r&&$r.vars.overwrite!==!0)._first||Do(this),this.parent&&a!==this.timeline.totalDuration()&&_a(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ri(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&Cv(o,l))return s==="all"&&(this._pt=0),Do(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(_={},Hn(s,function(S){return _[S]=1}),s=_),s=Qv(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Mc(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Do(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Oo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Oo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Vt.killTweensOf(i,s,a)},e}(Go);fi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new An,t=vd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kd=function(e,t,n){return e[t]=n},mg=function(e,t,n){return e[t](n)},ty=function(e,t,n,i){return e[t](i.fp,n)},ny=function(e,t,n){return e.setAttribute(t,n)},Ec=function(e,t){return Xt(e[t])?mg:bc(e[t])&&e.setAttribute?ny:kd},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},iy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Vd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ry=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},sy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Mc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ay=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Gd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Wn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||gg,this.d=l||this,this.set=c||kd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ay,this.m=n,this.mt=s,this.tween=i},r}();Hn(Pd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Rd[r]=1});di.TweenMax=di.TweenLite=Kt;di.TimelineLite=di.TimelineMax=An;Vt=new An({sortChildren:!1,defaults:Bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Nd;var Es=[],mc={},oy=[],zm=0,ly=0,dd=function(e){return(mc[e]||oy).map(function(t){return t()})},Md=function(){var e=Date.now(),t=[];e-zm>2&&(dd("matchMediaInit"),Es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=er.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),dd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=e,dd("matchMedia"))},_g=function(){function r(t,n){this.selector=n&&yd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ly++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var a=this,o=function(){var c=Bt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=yd(s)),Bt=a,d=i.apply(a,arguments),Xt(d)&&a._r.push(d),Bt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Es.length;a--;)Es[a].id===this.id&&Es.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),cy=function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){nr(n)||(n={matches:n});var a=new _g(0,s||this.scope),o=a.conditions={},l,c,u;Bt&&!a.selector&&(a.selector=Bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=er.matchMedia(n[c]),l&&(Es.indexOf(a)<0&&Es.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Md):l.addEventListener("change",Md)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return cg(i)})},timeline:function(e){return new An(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=Ri(e)[0]);var s=Kr(e||{}).get,a=n?Km:Zm;return n==="native"&&(n=""),e&&(t?a((ni[t]&&ni[t].get||s)(e,t,n,i)):function(o,l,c){return a((ni[o]&&ni[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ri(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=ni[t],o=Kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;pa._pt=0,d.init(e,n?u+n:u,pa,0,[e]),d.render(1,d),pa._pt&&Vd(1,pa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Rn.to(e,fi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ts(e.ease,Bo.ease)),Um(Bo,e||{})},config:function(e){return Um(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ni[o]&&!di[o]&&ko(t+" effect requires "+o+" plugin.")}),ld[t]=function(o,l,c){return n(Ri(o),fi(l||{},s),c)},a&&(An.prototype[t]=function(o,l,c){return this.add(ld[t](o,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Ts(t)},parseEase:function(e,t){return arguments.length?Ts(e,t):ft},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new An(e),i,s;for(n.smoothChildTiming=ri(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Vt,n,0),n},context:function(e,t){return e?new _g(e,t):Bt},matchMedia:function(e){return new cy(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Md()},addEventListener:function(e,t){var n=mc[e]||(mc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:zv,wrapYoyo:Vv,distribute:ig,random:sg,snap:rg,normalize:kv,getUnit:bn,clamp:Uv,splitColor:ug,toArray:Ri,selector:yd,mapRange:og,pipe:Fv,unitize:Bv,interpolate:Gv,shuffle:ng},install:Xm,effects:ld,ticker:ii,updateRoot:An.updateRoot,plugins:ni,globalTimeline:Vt,core:{PropTween:Wn,globals:qm,Tween:Kt,Timeline:An,Animation:Go,getCache:Kr,_removeLinkedListItem:Mc,reverting:function(){return yn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return wd=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yc[r]=Kt[r]});ii.add(An.updateRoot);pa=yc.to({},{duration:0});var uy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hy=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=uy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},fd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(cn(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}hy(o,s)}}}},Rn=yc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},fd("roundProps",bd),fd("modifiers"),fd("snap",rg))||yc;Kt.version=An.version=Rn.version="3.15.0";Wm=1;Td()&&xa();var dy=ft.Power0,fy=ft.Power1,py=ft.Power2,my=ft.Power3,gy=ft.Power4,_y=ft.Linear,xy=ft.Quad,vy=ft.Cubic,yy=ft.Quart,by=ft.Quint,Sy=ft.Strong,My=ft.Elastic,wy=ft.Back,Ty=ft.SteppedEase,Ey=ft.Bounce,Ay=ft.Sine,Cy=ft.Expo,Ry=ft.Circ;var xg,Qr,ba,$d,Ds,Py,vg,Zd,Iy=function(){return typeof window!="undefined"},wr={},Ls=180/Math.PI,Sa=Math.PI/180,ya=Math.atan2,yg=1e8,Kd=/([A-Z])/g,Ly=/(left|right|width|margin|padding|x)/i,Dy=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ny=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Oy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},By=function(e,t,n){return e.style[t]=n},ky=function(e,t,n){return e.style.setProperty(t,n)},zy=function(e,t,n){return e._gsap[t]=n},Vy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gy=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Hy=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Gt="transform",ai=Gt+"Origin",Wy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Mr(i,o)}):this.tfm[e]=a.x?a[e]:Mr(i,e),e===ai&&(this.tfm.zOrigin=a.zOrigin);else return ir.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Gt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},Pg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zd(),(!s||!s.isStart)&&!n[Gt]&&(Pg(n),i.zOrigin&&n[ai]&&(n[ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ig=function(e,t){var n={target:e,props:[],revert:Xy,save:Wy};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Lg,Xd=function(e,t){var n=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return n&&n.style?n:Qr.createElement(e)},pi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Kd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ma(t)||t,1)||""},bg="O,Moz,ms,Ms,Webkit".split(","),Ma=function(e,t,n){var i=t||Ds,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(bg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?bg[a]:"")+e},qd=function(){Iy()&&window.document&&(xg=window,Qr=xg.document,ba=Qr.documentElement,Ds=Xd("div")||{style:{}},Py=Xd("div"),Gt=Ma(Gt),ai=Gt+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lg=!!Ma("perspective"),Zd=Rn.core.reverting,$d=1)},Sg=function(e){var t=e.ownerSVGElement,n=Xd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ba.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ba.removeChild(n),s},Mg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dg=function(e){var t,n;try{t=e.getBBox()}catch{t=Sg(e),n=1}return t&&(t.width||t.height)||n||(t=Sg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mg(e,["x","cx","x1"])||0,y:+Mg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ng=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dg(e))},ts=function(e,t){if(t){var n=e.style,i;t in wr&&t!==ai&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Kd,"-$1").toLowerCase())):n.removeAttribute(t)}},es=function(e,t,n,i,s,a){var o=new Wn(e._pt,t,n,0,1,a?Rg:Cg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},wg={deg:1,rad:1,turn:1},qy={grid:1,flex:1},ns=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ds.style,l=Ly.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||wg[i]||wg[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&Ng(e),(f||a==="%")&&(wr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],qt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qr||!_.appendChild)&&(_=Qr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===ii.time&&!p.uncache)return qt(s/p.width*d);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,g=e[u],S?e.style[t]=S:ts(e,t)}else(f||a==="%")&&!qy[pi(_,"display")]&&(o.position=pi(e,"position")),_===e&&(o.position="static"),_.appendChild(Ds),g=Ds[u],_.removeChild(Ds),o.position="absolute";return l&&f&&(p=Kr(_),p.time=ii.time,p.width=_[u]),qt(h?g*s/d:g&&s?d/g*s:0)},Mr=function(e,t,n,i){var s;return $d||qd(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),wr[t]&&t!=="transform"?(s=qo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Cc(pi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ac[t]&&Ac[t](e,t,n)||pi(e,t)||Ld(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ns(e,t,s,n)+n:s},Yy=function(e,t,n,i){if(!n||n==="none"){var s=Ma(t,e,1),a=s&&pi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=pi(e,"borderTopColor"))}var o=new Wn(this._pt,e.style,t,0,1,zd),l=0,c=0,u,d,h,f,g,_,p,m,S,A,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=pi(e,t)||i,_?e.style[t]=_:ts(e,t)),u=[n,i],Nd(u),n=u[0],i=u[1],h=n.match(As)||[],b=i.match(As)||[],b.length){for(;d=As.exec(i);)p=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=Cs(f,p)+y),m=parseFloat(p),A=p.substr((m+"").length),l=As.lastIndex-A.length,A||(A=A||si.units[t]||y,l===i.length&&(i+=A,o.e+=A)),y!==A&&(f=ns(e,t,_,A)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Rg:Cg;return Ad.test(i)&&(o.e=0),this._pt=o,o},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$y=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tg[n]||n,t[1]=Tg[i]||i,t.join(" ")},Zy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wr[o]&&(l=1,o=o==="transformOrigin"?ai:Gt),ts(n,o);l&&(ts(n,Gt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qo(n,1),a.uncache=1,Pg(i)))}},Ac={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Wn(e._pt,t,n,0,0,Zy);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Xo=[1,0,0,1,0,0],Ug={},Og=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eg=function(e){var t=pi(e,Gt);return Og(t)?Xo:t.substr(7).match(Ed).map(qt)},Jd=function(e,t){var n=e._gsap||Kr(e),i=e.style,s=Eg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!e.offsetParent&&e!==ba&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ba.appendChild(e)),s=Eg(e),l?i.display=l:ts(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ba.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yd=function(e,t,n,i,s,a){var o=e._gsap,l=s||Jd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],A=t.split(" "),y=parseFloat(A[0])||0,b=parseFloat(A[1])||0,w,E,x,M;n?l!==Xo&&(E=f*p-g*_)&&(x=y*(p/E)+b*(-_/E)+(_*S-p*m)/E,M=y*(-g/E)+b*(f/E)-(f*S-g*m)/E,y=x,b=M):(w=Dg(e),y=w.x+(~A[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(A[1]||A[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(m=y-c,S=b-u,o.xOffset=d+(m*f+S*_)-m,o.yOffset=h+(m*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ai]="0px 0px",a&&(es(a,o,"xOrigin",c,y),es(a,o,"yOrigin",u,b),es(a,o,"xOffset",d,o.xOffset),es(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},qo=function(e,t){var n=e._gsap||new Ud(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=pi(e,ai)||"0",u,d,h,f,g,_,p,m,S,A,y,b,w,E,x,M,R,D,L,V,I,B,Y,z,J,O,C,j,be,Se,He,Ie;return u=d=h=_=p=m=S=A=y=0,f=g=1,n.svg=!!(e.getCTM&&Ng(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),E=Jd(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Yd(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,w=n.yOrigin||0,E!==Xo&&(D=E[0],L=E[1],V=E[2],I=E[3],u=B=E[4],d=Y=E[5],E.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(I*I+V*V),_=D||L?ya(L,D)*Ls:0,S=V||I?ya(V,I)*Ls+_:0,S&&(g*=Math.abs(Math.cos(S*Sa))),n.svg&&(u-=b-(b*D+w*V),d-=w-(b*L+w*I))):(Ie=E[6],Se=E[7],C=E[8],j=E[9],be=E[10],He=E[11],u=E[12],d=E[13],h=E[14],x=ya(Ie,be),p=x*Ls,x&&(M=Math.cos(-x),R=Math.sin(-x),z=B*M+C*R,J=Y*M+j*R,O=Ie*M+be*R,C=B*-R+C*M,j=Y*-R+j*M,be=Ie*-R+be*M,He=Se*-R+He*M,B=z,Y=J,Ie=O),x=ya(-V,be),m=x*Ls,x&&(M=Math.cos(-x),R=Math.sin(-x),z=D*M-C*R,J=L*M-j*R,O=V*M-be*R,He=I*R+He*M,D=z,L=J,V=O),x=ya(L,D),_=x*Ls,x&&(M=Math.cos(x),R=Math.sin(x),z=D*M+L*R,J=B*M+Y*R,L=L*M-D*R,Y=Y*M-B*R,D=z,B=J),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=qt(Math.sqrt(D*D+L*L+V*V)),g=qt(Math.sqrt(Y*Y+Ie*Ie)),x=ya(B,Y),S=Math.abs(x)>2e-4?x*Ls:0,y=He?1/(He<0?-He:He):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Og(pi(e,Gt)),z&&e.setAttribute("transform",z))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=qt(f),n.scaleY=qt(g),n.rotation=qt(_)+o,n.rotationX=qt(p)+o,n.rotationY=qt(m)+o,n.skewX=S+o,n.skewY=A+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ai]=Cc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?Jy:Lg?Fg:Ky,n.uncache=0,n},Cc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hd=function(e,t,n){var i=bn(t);return qt(parseFloat(t)+parseFloat(ns(e,"x",n+"px",i)))+i},Ky=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fg(e,t)},Ps="0deg",Wo="0px",Is=") ",Fg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,A=n.zOrigin,y="",b=m==="auto"&&e&&e!==1||m===!0;if(A&&(d!==Ps||u!==Ps)){var w=parseFloat(u)*Sa,E=Math.sin(w),x=Math.cos(w),M;w=parseFloat(d)*Sa,M=Math.cos(w),a=Hd(S,a,E*M*-A),o=Hd(S,o,-Math.sin(w)*-A),l=Hd(S,l,x*M*-A+A)}p!==Wo&&(y+="perspective("+p+Is),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==Wo||o!==Wo||l!==Wo)&&(y+=l!==Wo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Is),c!==Ps&&(y+="rotate("+c+Is),u!==Ps&&(y+="rotateY("+u+Is),d!==Ps&&(y+="rotateX("+d+Is),(h!==Ps||f!==Ps)&&(y+="skew("+h+", "+f+Is),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Is),S.style[Gt]=y||"translate(0, 0)"},Jy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,A=parseFloat(a),y=parseFloat(o),b,w,E,x,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Sa,c*=Sa,b=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Sa,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,x*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=qt(b),w=qt(w),E=qt(E),x=qt(x)):(b=d,x=h,w=E=0),(A&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(A=ns(f,"x",a,"px"),y=ns(f,"y",o,"px")),(g||_||p||m)&&(A=qt(A+g-(g*b+_*E)+p),y=qt(y+_-(g*w+_*x)+m)),(i||s)&&(M=f.getBBox(),A=qt(A+i/100*M.width),y=qt(y+s/100*M.height)),M="matrix("+b+","+w+","+E+","+x+","+A+","+y+")",f.setAttribute("transform",M),S&&(f.style[Gt]=M)},jy=function(e,t,n,i,s){var a=360,o=cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ls:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*yg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*yg)%a-~~(c/a)*a)),e._pt=h=new Wn(e._pt,t,n,i,c,Ny),h.e=u,h.u="deg",e._props.push(n),h},Ag=function(e,t){for(var n in t)e[n]=t[n];return e},Qy=function(e,t,n){var i=Ag({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Gt]=t,o=qo(n,1),ts(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],a[Gt]=t,o=qo(n,1),a[Gt]=c);for(l in wr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=bn(c),g=bn(u),d=f!==g?ns(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Wn(e._pt,o,l,d,h-d,Wd),e._pt.u=g||0,e._props.push(l));Ag(o,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ac[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Mr(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var jd={name:"css",register:qd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,S,A,y,b,w,E,x,M;$d||qd(),this.styles=this.styles||Ig(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ni[_]&&Fd(_,t,n,i,e,s)))){if(f=typeof u,g=Ac[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=va(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",br.lastIndex=0,br.test(c)||(p=bn(c),m=bn(u),m?p!==m&&(c=ns(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],cn(c)&&~c.indexOf("random(")&&(c=va(c)),bn(c+"")||c==="auto"||(c+=si.units[_]||bn(Mr(e,_))||""),(c+"").charAt(1)==="="&&(c=Mr(e,_))):c=Mr(e,_),h=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),_ in ir&&(_==="autoAlpha"&&(h===1&&Mr(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),es(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ir[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in wr,A){if(this.styles.save(_),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=pi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=pi(e,"perspective"),R?e.style.perspective=R:ts(e,"perspective")}d=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||qo(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Wn(this._pt,o,Gt,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new Wn(this._pt,b,"scaleY",b.scaleY,(S?Cs(b.scaleY,S+d):d)-b.scaleY||0,Wd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(ai,0,o[ai]),u=$y(u),b.svg?Yd(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&es(this,b,"zOrigin",b.zOrigin,m),es(this,o,_,Cc(c),Cc(u)));continue}else if(_==="svgOrigin"){Yd(e,u,1,w,0,this);continue}else if(_ in Ug){jy(this,b,_,h,S?Cs(h,S+u):u);continue}else if(_==="smoothOrigin"){es(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){Qy(this,u,e);continue}}else _ in o||(_=Ma(_)||_);if(A||(d||d===0)&&(h||h===0)&&!Dy.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),m=bn(u)||(_ in si.units?si.units[_]:p),p!==m&&(h=ns(e,_,c,m)),this._pt=new Wn(this._pt,A?b:o,_,h,(S?Cs(h,S+d):d)-h,!A&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Fy:Wd),this._pt.u=m||0,A&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=Oy):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Uy);else if(_ in o)Yy.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Sc(_,u);continue}A||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}E&&Gd(this)},render:function(e,t){if(t.tween._time||!Zd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mr,aliases:ir,getSetter:function(e,t,n){var i=ir[t];return i&&i.indexOf(",")<0&&(t=i),t in wr&&t!==ai&&(e._gsap.x||Mr(e,"x"))?n&&vg===n?t==="scale"?Vy:zy:(vg=n||{})&&(t==="scale"?Gy:Hy):e.style&&!bc(e.style[t])?By:~t.indexOf("-")?ky:Ec(e,t)},core:{_removeProperty:ts,_getMatrix:Jd}};Rn.utils.checkPrefix=Ma;Rn.core.getStyleSaver=Ig;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){wr[s]=1});Hn(e,function(s){si.units[s]="deg",Ug[s]=1}),ir[i[13]]=r+","+e,Hn(n,function(s){var a=s.split(":");ir[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Rn.registerPlugin(jd);var Lt=Rn.registerPlugin(jd)||Rn,WE=Lt.core.Tween;function Bg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function eb(r,e,t){return e&&Bg(r.prototype,e),t&&Bg(r,t),r}var Sn,Ic,tb,mi,is,rs,Ta,zg,Ns,Ea,Vg,Tr,Fi,Gg,Hg=function(){return Sn||typeof window!="undefined"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},Wg=1,wa=[],it=[],Bi=[],$o=Date.now,Qd=function(e,t){return t},nb=function(){var e=Ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Bi),it=n,Bi=i,Qd=function(a,o){return t[a](o)}},Ar=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},Zo=function(e){return!!~Vg.indexOf(e)},qn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rc="scrollLeft",Pc="scrollTop",ef=function(){return Tr&&Tr.isPressed||it.cache++},Lc=function(e,t){var n=function i(s){if(s||s===0){Wg&&(mi.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;s=i.v=Math.round(s)||(Tr&&Tr.iOS?1:0),e(s),i.cacheID=it.cache,a&&Qd("ss",s)}else(t||it.cache!==i.cacheID||Qd("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Pn={s:Rc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lc(function(r){return arguments.length?mi.scrollTo(r,rn.sc()):mi.pageXOffset||is[Rc]||rs[Rc]||Ta[Rc]||0})},rn={s:Pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:Lc(function(r){return arguments.length?mi.scrollTo(Pn.sc(),r):mi.pageYOffset||is[Pc]||rs[Pc]||Ta[Pc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ib=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Er=function(e,t){var n=t.s,i=t.sc;Zo(e)&&(e=is.scrollingElement||rs);var s=it.indexOf(e),a=i===rn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+a]||qn(e,"scroll",ef);var o=it[s+a],l=o||(it[s+a]=Lc(Ar(e,n),!0)||(Zo(e)?i:Lc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},Dc=function(e,t,n){var i=e,s=e,a=$o(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=$o();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=$o();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Yo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Xg=function(){Ea=Sn.core.globals().ScrollTrigger,Ea&&Ea.core&&nb()},qg=function(e){return Sn=e||Hg(),!Ic&&Sn&&typeof document!="undefined"&&document.body&&(mi=window,is=document,rs=is.documentElement,Ta=is.body,Vg=[mi,is,rs,Ta],tb=Sn.utils.clamp,Gg=Sn.core.context||function(){},Ns="onpointerenter"in Ta?"pointer":"mouse",zg=Yt.isTouch=mi.matchMedia&&mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Yt.eventTypes=("ontouchstart"in rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wg=0},500),Ic=1),Ea||Xg(),Ic};Pn.op=rn;it.cache=0;var Yt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ic||qg(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ea||Xg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,A=n.onPress,y=n.onRelease,b=n.onRight,w=n.onLeft,E=n.onUp,x=n.onDown,M=n.onChangeX,R=n.onChangeY,D=n.onChange,L=n.onToggleX,V=n.onToggleY,I=n.onHover,B=n.onHoverEnd,Y=n.onMove,z=n.ignoreCheck,J=n.isNormalizer,O=n.onGestureStart,C=n.onGestureEnd,j=n.onWheel,be=n.onEnable,Se=n.onDisable,He=n.onClick,Ie=n.scrollSpeed,We=n.capture,Z=n.allowClicks,ee=n.lockAxis,he=n.onLockAxis;this.target=o=Yn(o)||rs,this.vars=n,f&&(f=Sn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Ie=Ie||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mi.getComputedStyle(Ta).lineHeight)||22);var ke,de,Ue,Ce,Le,$e,et,H=this,at=0,St=0,kt=n.passive||!u&&n.passive!==!1,Ze=Er(o,Pn),mt=Er(o,rn),F=Ze(),Ft=mt(),Ye=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Fi[0]==="pointerdown",P=Zo(o),v=o.ownerDocument||is,k=[0,0,0],X=[0,0,0],K=0,ce=function(){return K=$o()},ae=function(re,Oe){return(H.event=re)&&f&&ib(re.target,f)||Oe&&Ye&&re.pointerType!=="touch"||z&&z(re,Oe)},Q=function(){H._vx.reset(),H._vy.reset(),de.pause(),d&&d(H)},ne=function(){var re=H.deltaX=kg(k),Oe=H.deltaY=kg(X),se=Math.abs(re)>=i,Ve=Math.abs(Oe)>=i;D&&(se||Ve)&&D(H,re,Oe,k,X),se&&(b&&H.deltaX>0&&b(H),w&&H.deltaX<0&&w(H),M&&M(H),L&&H.deltaX<0!=at<0&&L(H),at=H.deltaX,k[0]=k[1]=k[2]=0),Ve&&(x&&H.deltaY>0&&x(H),E&&H.deltaY<0&&E(H),R&&R(H),V&&H.deltaY<0!=St<0&&V(H),St=H.deltaY,X[0]=X[1]=X[2]=0),(Ce||Ue)&&(Y&&Y(H),Ue&&(p&&Ue===1&&p(H),S&&S(H),Ue=0),Ce=!1),$e&&!($e=!1)&&he&&he(H),Le&&(j(H),Le=!1),ke=0},pe=function(re,Oe,se){k[se]+=re,X[se]+=Oe,H._vx.update(re),H._vy.update(Oe),c?ke||(ke=requestAnimationFrame(ne)):ne()},Ee=function(re,Oe){ee&&!et&&(H.axis=et=Math.abs(re)>Math.abs(Oe)?"x":"y",$e=!0),et!=="y"&&(k[2]+=re,H._vx.update(re,!0)),et!=="x"&&(X[2]+=Oe,H._vy.update(Oe,!0)),c?ke||(ke=requestAnimationFrame(ne)):ne()},me=function(re){if(!ae(re,1)){re=Yo(re,u);var Oe=re.clientX,se=re.clientY,Ve=Oe-H.x,Ae=se-H.y,Ke=H.isDragging;H.x=Oe,H.y=se,(Ke||(Ve||Ae)&&(Math.abs(H.startX-Oe)>=s||Math.abs(H.startY-se)>=s))&&(Ue||(Ue=Ke?2:1),Ke||(H.isDragging=!0),Ee(Ve,Ae))}},fe=H.onPress=function(oe){ae(oe,1)||oe&&oe.button||(H.axis=et=null,de.pause(),H.isPressed=!0,oe=Yo(oe),at=St=0,H.startX=H.x=oe.clientX,H.startY=H.y=oe.clientY,H._vx.reset(),H._vy.reset(),qn(J?o:v,Fi[1],me,kt,!0),H.deltaX=H.deltaY=0,A&&A(H))},le=H.onRelease=function(oe){if(!ae(oe,1)){Xn(J?o:v,Fi[1],me,!0);var re=!isNaN(H.y-H.startY),Oe=H.isDragging,se=Oe&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ve=Yo(oe);!se&&re&&(H._vx.reset(),H._vy.reset(),u&&Z&&Sn.delayedCall(.08,function(){if($o()-K>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(v.createEvent){var Ae=v.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,mi,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ae)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&Oe&&!J&&de.restart(!0),Ue&&ne(),m&&Oe&&m(H),y&&y(H,se)}},De=function(re){return re.touches&&re.touches.length>1&&(H.isGesturing=!0)&&O(re,H.isDragging)},Ge=function(){return(H.isGesturing=!1)||C(H)},N=function(re){if(!ae(re)){var Oe=Ze(),se=mt();pe((Oe-F)*Ie,(se-Ft)*Ie,1),F=Oe,Ft=se,d&&de.restart(!0)}},ue=function(re){if(!ae(re)){re=Yo(re,u),j&&(Le=!0);var Oe=(re.deltaMode===1?l:re.deltaMode===2?mi.innerHeight:1)*g;pe(re.deltaX*Oe,re.deltaY*Oe,0),d&&!J&&de.restart(!0)}},te=function(re){if(!ae(re)){var Oe=re.clientX,se=re.clientY,Ve=Oe-H.x,Ae=se-H.y;H.x=Oe,H.y=se,Ce=!0,d&&de.restart(!0),(Ve||Ae)&&Ee(Ve,Ae)}},ge=function(re){H.event=re,I(H)},xe=function(re){H.event=re,B(H)},ie=function(re){return ae(re)||Yo(re,u)&&He(H)};de=H._dc=Sn.delayedCall(h||.25,Q).pause(),H.deltaX=H.deltaY=0,H._vx=Dc(0,50,!0),H._vy=Dc(0,50,!0),H.scrollX=Ze,H.scrollY=mt,H.isDragging=H.isGesturing=H.isPressed=!1,Gg(this),H.enable=function(oe){return H.isEnabled||(qn(P?v:o,"scroll",ef),a.indexOf("scroll")>=0&&qn(P?v:o,"scroll",N,kt,We),a.indexOf("wheel")>=0&&qn(o,"wheel",ue,kt,We),(a.indexOf("touch")>=0&&zg||a.indexOf("pointer")>=0)&&(qn(o,Fi[0],fe,kt,We),qn(v,Fi[2],le),qn(v,Fi[3],le),Z&&qn(o,"click",ce,!0,!0),He&&qn(o,"click",ie),O&&qn(v,"gesturestart",De),C&&qn(v,"gestureend",Ge),I&&qn(o,Ns+"enter",ge),B&&qn(o,Ns+"leave",xe),Y&&qn(o,Ns+"move",te)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Ce=Ue=!1,H._vx.reset(),H._vy.reset(),F=Ze(),Ft=mt(),oe&&oe.type&&fe(oe),be&&be(H)),H},H.disable=function(){H.isEnabled&&(wa.filter(function(oe){return oe!==H&&Zo(oe.target)}).length||Xn(P?v:o,"scroll",ef),H.isPressed&&(H._vx.reset(),H._vy.reset(),Xn(J?o:v,Fi[1],me,!0)),Xn(P?v:o,"scroll",N,We),Xn(o,"wheel",ue,We),Xn(o,Fi[0],fe,We),Xn(v,Fi[2],le),Xn(v,Fi[3],le),Xn(o,"click",ce,!0),Xn(o,"click",ie),Xn(v,"gesturestart",De),Xn(v,"gestureend",Ge),Xn(o,Ns+"enter",ge),Xn(o,Ns+"leave",xe),Xn(o,Ns+"move",te),H.isEnabled=H.isPressed=H.isDragging=!1,Se&&Se(H))},H.kill=H.revert=function(){H.disable();var oe=wa.indexOf(H);oe>=0&&wa.splice(oe,1),Tr===H&&(Tr=0)},wa.push(H),J&&Zo(o)&&(Tr=H),H.enable(_)},eb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Yt.version="3.15.0";Yt.create=function(r){return new Yt(r)};Yt.register=qg;Yt.getAll=function(){return wa.slice()};Yt.getById=function(r){return wa.filter(function(e){return e.vars.id===r})[0]};Hg()&&Sn.registerPlugin(Yt);var Te,Pa,lt,vt,xi,_t,mf,Zc,cl,nl,Jo,Nc,In,jc,lf,Zn,Yg,$g,Ia,u0,tf,h0,$n,cf,d0,f0,ss,uf,gf,La,_f,il,hf,nf,Uc=1,Ln=Date.now,rf=Ln(),Li=0,jo=0,Zg=function(e,t,n){var i=_i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Kg=function(e,t){return t&&(!_i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},rb=function r(){return jo&&requestAnimationFrame(r)},Jg=function(){return jc=1},jg=function(){return jc=0},rr=function(e){return e},Qo=function(e){return Math.round(e*1e5)/1e5||0},p0=function(){return typeof window!="undefined"},m0=function(){return Te||p0()&&(Te=window.gsap)&&Te.registerPlugin&&Te},zs=function(e){return!!~mf.indexOf(e)},g0=function(e){return(e==="Height"?_f:lt["inner"+e])||xi["client"+e]||_t["client"+e]},_0=function(e){return Ar(e,"getBoundingClientRect")||(zs(e)?function(){return $c.width=lt.innerWidth,$c.height=_f,$c}:function(){return Cr(e)})},sb=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Ar(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?g0(s):e["client"+s])||0}},ab=function(e,t){return!t||~Bi.indexOf(e)?_0(e):function(){return $c}},sr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ar(e,n))?a()-_0(e)()[s]:zs(e)?(xi[n]||_t[n])-g0(i):e[n]-e["offset"+i])},Oc=function(e,t){for(var n=0;n<Ia.length;n+=3)(!t||~t.indexOf(Ia[n+1]))&&e(Ia[n],Ia[n+1],Ia[n+2])},_i=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},el=function(e){return typeof e=="number"},Us=function(e){return typeof e=="object"},Ko=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Aa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ca=Math.abs,x0="left",v0="top",xf="right",vf="bottom",Fs="width",Bs="height",rl="Right",sl="Left",al="Top",ol="Bottom",sn="padding",Pi="margin",Na="Width",yf="Height",un="px",Ii=function(e){return lt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ob=function(e){var t=Ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Qg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cr=function(e,t){var n=t&&Ii(e)[lf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Kc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},y0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},lb=function(e){return function(t){return Te.utils.snap(y0(e),t)}},bf=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},cb=function(e){return function(t,n){return bf(y0(e))(t,n.direction)}},Fc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},e0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kc={toggleActions:"play",anticipatePin:0},Jc={top:0,left:0,center:.5,bottom:1,right:1},Wc=function(e,t){if(_i(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jc?Jc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},zc=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=vt.createElement("div"),_=zs(n)||Ar(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,A=S?c:u,y="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===rn?xf:vf)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Xc(g,0,i,S),g},Xc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Na]=1,s["border"+o+Na]=0,s[n.p]=t+"px",Te.set(e,s)},rt=[],df={},ul,t0=function(){return Ln()-Li>34&&(ul||(ul=requestAnimationFrame(Rr)))},Ra=function(){(!$n||!$n.isPressed||$n.startX>_t.clientWidth)&&(it.cache++,$n?ul||(ul=requestAnimationFrame(Rr)):Rr(),Li||Gs("scrollStart"),Li=Ln())},sf=function(){f0=lt.innerWidth,d0=lt.innerHeight},tl=function(e){it.cache++,(e===!0||!In&&!h0&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!cf||f0!==lt.innerWidth||Math.abs(lt.innerHeight-d0)>lt.innerHeight*.25))&&Zc.restart(!0)},Vs={},ub=[],b0=function r(){return _n(Qe,"scrollEnd",r)||Os(!0)},Gs=function(e){return Vs[e]&&Vs[e].map(function(t){return t()})||ub},gi=[],S0=function(e){for(var t=0;t<gi.length;t+=5)(!e||gi[t+4]&&gi[t+4].query===e)&&(gi[t].style.cssText=gi[t+1],gi[t].getBBox&&gi[t].setAttribute("transform",gi[t+2]||""),gi[t+3].uncache=1)},M0=function(){return it.forEach(function(e){return Dn(e)&&++e.cacheID&&(e.rec=e())})},Sf=function(e,t){var n;for(Zn=0;Zn<rt.length;Zn++)n=rt[Zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));il=!0,t&&S0(t),t||Gs("revert")},w0=function(e,t){it.cache++,(t||!Kn)&&it.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),_i(e)&&(lt.history.scrollRestoration=gf=e)},Kn,ks=0,n0,hb=function(){if(n0!==ks){var e=n0=ks;requestAnimationFrame(function(){return e===ks&&Os(!0)})}},T0=function(){_t.appendChild(La),_f=!$n&&La.offsetHeight||lt.innerHeight,_t.removeChild(La)},i0=function(e){return cl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Os=function(e,t){if(xi=vt.documentElement,_t=vt.body,mf=[lt,vt,xi,_t],Li&&!e&&!il){xn(Qe,"scrollEnd",b0);return}T0(),Kn=Qe.isRefreshing=!0,il||M0();var n=Gs("refreshInit");u0&&Qe.sort(),t||Sf(),it.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),il=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),hf=1,i0(!0),rt.forEach(function(i){var s=sr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),i0(!1),hf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),w0(gf,1),Zc.pause(),ks++,Kn=2,Rr(2),rt.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=Qe.isRefreshing=!1,Gs("refresh")},ff=0,qc=1,ll,Rr=function(e){if(e===2||!Kn&&!il){Qe.isUpdating=!0,ll&&ll.update(0);var t=rt.length,n=Ln(),i=n-rf>=50,s=t&&rt[0].scroll();if(qc=ff>s?-1:1,Kn||(ff=s),i&&(Li&&!jc&&n-Li>200&&(Li=0,Gs("scrollEnd")),Jo=rf,rf=n),qc<0){for(Zn=t;Zn-- >0;)rt[Zn]&&rt[Zn].update(0,i);qc=1}else for(Zn=0;Zn<t;Zn++)rt[Zn]&&rt[Zn].update(0,i);Qe.isUpdating=!1}ul=0},pf=[x0,v0,vf,xf,Pi+ol,Pi+rl,Pi+al,Pi+sl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yc=pf.concat([Fs,Bs,"boxSizing","max"+Na,"max"+yf,"position",Pi,sn,sn+al,sn+rl,sn+ol,sn+sl]),db=function(e,t,n){Da(n);var i=e._gsap;if(i.spacerIsNative)Da(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},af=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=pf.length,a=t.style,o=e.style,l;s--;)l=pf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[vf]=o[xf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Fs]=Kc(e,Pn)+un,a[Bs]=Kc(e,rn)+un,a[sn]=o[Pi]=o[v0]=o[x0]="0",Da(i),o[Fs]=o["max"+Na]=n[Fs],o[Bs]=o["max"+yf]=n[Bs],o[sn]=n[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fb=/([A-Z])/g,Da=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(fb,"-$1").toLowerCase())}},Vc=function(e){for(var t=Yc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Yc[s],n[Yc[s]]);return i.t=e,i},pb=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},$c={left:0,top:0},r0=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){Dn(e)&&(e=e(l)),_i(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Wc("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,S;if(f&&f.seek(0),isNaN(e)||(e=+e),el(e))f&&(e=Te.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Xc(o,n,i,!0);else{Dn(t)&&(t=t(l));var A=(e||"0").split(" "),y,b,w,E;S=Yn(t,l)||_t,y=Cr(S)||{},(!y||!y.left&&!y.top)&&Ii(S).display==="none"&&(E=S.style.display,S.style.display="block",y=Cr(S),E?S.style.display=E:S.style.removeProperty("display")),b=Wc(A[0],y[i.d]),w=Wc(A[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-w,o&&Xc(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,M=a._isStart;p="scroll"+i.d2,Xc(a,x,i,M&&x>20||!M&&(d?Math.max(_t[p],xi[p]):a.parentNode[p])<=x+1),d&&(c=Cr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+un))}return f&&S&&(p=Cr(S),f.seek(h),m=Cr(S),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},mb=/(webkit|moz|length|cssText|inset)/i,s0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=Ii(e);for(a in o)!+a&&!mb.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},E0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Gc=function(e,t,n){var i={};i[t.p]="+="+n,Te.set(e,i)},a0=function(e,t){var n=Er(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=E0(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){it.cache++,a.tween&&Rr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Te.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},xn(e,"wheel",n.wheelHandler),Qe.isTouch&&xn(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){Pa||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jo){this.update=this.refresh=this.kill=rr;return}n=Qg(_i(n)||el(n)||n.nodeType?{trigger:n}:n,kc);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,A=s.once,y=s.snap,b=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,M=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:rn,D=!d&&d!==0,L=Yn(n.scroller||lt),V=Te.core.getCache(L),I=zs(L),B=("pinType"in n?n.pinType:Ar(L,"pinType")||I&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=D&&n.toggleActions.split(" "),J="markers"in n?n.markers:kc.markers,O=I?0:parseFloat(Ii(L)["border"+R.p2+Na])||0,C=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(C)},be=sb(L,I,R),Se=ab(L,I),He=0,Ie=0,We=0,Z=Er(L,R),ee,he,ke,de,Ue,Ce,Le,$e,et,H,at,St,kt,Ze,mt,F,Ft,Ye,P,v,k,X,K,ce,ae,Q,ne,pe,Ee,me,fe,le,De,Ge,N,ue,te,ge,xe;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=L,C.scroll=E?E.time.bind(E):Z,de=Z(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(u0=1,n.refreshPriority===-9999&&(ll=C)),V.tweenScroll=V.tweenScroll||{top:a0(L,rn),left:a0(L,Pn)},C.tweenTo=ee=V.tweenScroll[R.p],C.scrubDuration=function(se){De=el(se)&&se,De?le?le.duration(se):le=Te.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:De,paused:!0,onComplete:function(){return m&&m(C)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),me=0,l||(l=i.vars.id)),y&&((!Us(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&Te.set(I?[_t,xi]:L,{scrollBehavior:"auto"}),it.forEach(function(se){return Dn(se)&&se.target===(I?vt.scrollingElement||xi:L)&&(se.smooth=!1)}),ke=Dn(y.snapTo)?y.snapTo:y.snapTo==="labels"?lb(i):y.snapTo==="labelsDirectional"?cb(i):y.directional!==!1?function(se,Ve){return bf(y.snapTo)(se,Ln()-Ie<500?0:Ve.direction)}:Te.utils.snap(y.snapTo),Ge=y.duration||{min:.1,max:2},Ge=Us(Ge)?nl(Ge.min,Ge.max):nl(Ge,Ge),N=Te.delayedCall(y.delay||De/2||.1,function(){var se=Z(),Ve=Ln()-Ie<500,Ae=ee.tween;if((Ve||Math.abs(C.getVelocity())<10)&&!Ae&&!jc&&He!==se){var Ke=(se-Ce)/Ze,en=i&&!D?i.totalProgress():Ke,ot=Ve?0:(en-fe)/(Ln()-Jo)*1e3||0,Dt=Te.utils.clamp(-Ke,1-Ke,Ca(ot/2)*ot/.185),mn=Ke+(y.inertia===!1?0:Dt),Nt,wt,dt=y,zn=dt.onStart,Pt=dt.onInterrupt,Tn=dt.onComplete;if(Nt=ke(mn,C),el(Nt)||(Nt=mn),wt=Math.max(0,Math.round(Ce+Nt*Ze)),se<=Le&&se>=Ce&&wt!==se){if(Ae&&!Ae._initted&&Ae.data<=Ca(wt-se))return;y.inertia===!1&&(Dt=Nt-Ke),ee(wt,{duration:Ge(Ca(Math.max(Ca(mn-en),Ca(Nt-en))*.185/ot/.05||0)),ease:y.ease||"power3",data:Ca(wt-se),onInterrupt:function(){return N.restart(!0)&&Pt&&Aa(C,Pt)},onComplete:function(){C.update(),He=Z(),i&&!D&&(le?le.resetTo("totalProgress",Nt,i._tTime/i._tDur):i.progress(Nt)),me=fe=i&&!D?i.totalProgress():C.progress,S&&S(C),Tn&&Aa(C,Tn)}},se,Dt*Ze,wt-se-Dt*Ze),zn&&Aa(C,zn,ee.tween)}}else C.isActive&&He!==se&&N.restart(!0)}).pause()),l&&(df[l]=C),h=C.trigger=Yn(h||f!==!0&&f),xe=h&&h._gsap&&h._gsap.stRevert,xe&&(xe=xe(C)),f=f===!0?h:Yn(f),_i(o)&&(o={targets:h,className:o}),f&&(g===!1||g===Pi||(g=!g&&f.parentNode&&f.parentNode.style&&Ii(f.parentNode).display==="flex"?!1:sn),C.pin=f,he=Te.core.getCache(f),he.spacer?mt=he.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),he.spacerIsNative=!!w,w&&(he.spacerState=Vc(w))),he.spacer=Ye=w||vt.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),he.pinState=mt=Vc(f)),n.force3D!==!1&&Te.set(f,{force3D:!0}),C.spacer=Ye=he.spacer,Ee=Ii(f),ce=Ee[g+R.os2],v=Te.getProperty(f),k=Te.quickSetter(f,R.a,un),af(f,Ye,Ee),Ft=Vc(f)),J){St=Us(J)?Qg(J,e0):e0,H=zc("scroller-start",l,L,R,St,0),at=zc("scroller-end",l,L,R,St,0,H),P=H["offset"+R.op.d2];var ie=Yn(Ar(L,"content")||L);$e=this.markerStart=zc("start",l,ie,R,St,P,0,E),et=this.markerEnd=zc("end",l,ie,R,St,P,0,E),E&&(ge=Te.quickSetter([$e,et],R.a,un)),!B&&!(Bi.length&&Ar(L,"fixedMarkers")===!0)&&(ob(I?_t:L),Te.set([H,at],{force3D:!0}),Q=Te.quickSetter(H,R.a,un),pe=Te.quickSetter(at,R.a,un))}if(E){var oe=E.vars.onUpdate,re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),oe&&oe.apply(E,re||[])})}if(C.previous=function(){return rt[rt.indexOf(C)-1]},C.next=function(){return rt[rt.indexOf(C)+1]},C.revert=function(se,Ve){if(!Ve)return C.kill(!0);var Ae=se!==!1||!C.enabled,Ke=In;Ae!==C.isReverted&&(Ae&&(ue=Math.max(Z(),C.scroll.rec||0),We=C.progress,te=i&&i.progress()),$e&&[$e,et,H,at].forEach(function(en){return en.style.display=Ae?"none":"block"}),Ae&&(In=C,C.update(Ae)),f&&(!b||!C.isActive)&&(Ae?db(f,Ye,mt):af(f,Ye,Ii(f),ae)),Ae||C.update(Ae),In=Ke,C.isReverted=Ae)},C.refresh=function(se,Ve,Ae,Ke){if(!((In||!C.enabled)&&!Ve)){if(f&&se&&Li){xn(r,"scrollEnd",b0);return}!Kn&&j&&j(C),In=C,ee.tween&&!Ae&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(_e){return _e.vars.immediateRender&&_e.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var en=be(),ot=Se(),Dt=E?E.duration():sr(L,R),mn=Ze<=.01||!Ze,Nt=0,wt=Ke||0,dt=Us(Ae)?Ae.end:n.end,zn=n.endTrigger||h,Pt=Us(Ae)?Ae.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Tn=C.pinnedContainer=n.pinnedContainer&&Yn(n.pinnedContainer,C),Vn=h&&Math.max(0,rt.indexOf(C))||0,tn=Vn,Wt,ln,ji,ua,gn,$t,Ti,ha,T,U,$,W,q;for(J&&Us(Ae)&&(W=Te.getProperty(H,R.p),q=Te.getProperty(at,R.p));tn-- >0;)$t=rt[tn],$t.end||$t.refresh(0,1)||(In=C),Ti=$t.pin,Ti&&(Ti===h||Ti===f||Ti===Tn)&&!$t.isReverted&&(U||(U=[]),U.unshift($t),$t.revert(!0,!0)),$t!==rt[tn]&&(Vn--,tn--);for(Dn(Pt)&&(Pt=Pt(C)),Pt=Zg(Pt,"start",C),Ce=r0(Pt,h,en,R,Z(),$e,H,C,ot,O,B,Dt,E,C._startClamp&&"_startClamp")||(f?-.001:0),Dn(dt)&&(dt=dt(C)),_i(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(_i(Pt)?Pt.split(" ")[0]:"")+dt:(Nt=Wc(dt.substr(2),en),dt=_i(Pt)?Pt:(E?Te.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ce):Ce)+Nt,zn=h)),dt=Zg(dt,"end",C),Le=Math.max(Ce,r0(dt||(zn?"100% 0":Dt),zn,en,R,Z()+Nt,et,at,C,ot,O,B,Dt,E,C._endClamp&&"_endClamp"))||-.001,Nt=0,tn=Vn;tn--;)$t=rt[tn]||{},Ti=$t.pin,Ti&&$t.start-$t._pinPush<=Ce&&!E&&$t.end>0&&(Wt=$t.end-(C._startClamp?Math.max(0,$t.start):$t.start),(Ti===h&&$t.start-$t._pinPush<Ce||Ti===Tn)&&isNaN(Pt)&&(Nt+=Wt*(1-$t.progress)),Ti===f&&(wt+=Wt));if(Ce+=Nt,Le+=Nt,C._startClamp&&(C._startClamp+=Nt),C._endClamp&&!Kn&&(C._endClamp=Le||-.001,Le=Math.min(Le,sr(L,R))),Ze=Le-Ce||(Ce-=.01)&&.001,mn&&(We=Te.utils.clamp(0,1,Te.utils.normalize(Ce,Le,ue))),C._pinPush=wt,$e&&Nt&&(Wt={},Wt[R.a]="+="+Nt,Tn&&(Wt[R.p]="-="+Z()),Te.set([$e,et],Wt)),f&&!(hf&&C.end>=sr(L,R)))Wt=Ii(f),ua=R===rn,ji=Z(),X=parseFloat(v(R.a))+wt,!Dt&&Le>1&&($=(I?vt.scrollingElement||xi:L).style,$={style:$,value:$["overflow"+R.a.toUpperCase()]},I&&Ii(_t)["overflow"+R.a.toUpperCase()]!=="scroll"&&($.style["overflow"+R.a.toUpperCase()]="scroll")),af(f,Ye,Wt),Ft=Vc(f),ln=Cr(f,!0),ha=B&&Er(L,ua?Pn:rn)(),g?(ae=[g+R.os2,Ze+wt+un],ae.t=Ye,tn=g===sn?Kc(f,R)+Ze+wt:0,tn&&(ae.push(R.d,tn+un),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=tn+un)),Da(ae),Tn&&rt.forEach(function(_e){_e.pin===Tn&&_e.vars.pinSpacing!==!1&&(_e._subPinOffset=!0)}),B&&Z(ue)):(tn=Kc(f,R),tn&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=tn+un)),B&&(gn={top:ln.top+(ua?ji-Ce:ha)+un,left:ln.left+(ua?ha:ji-Ce)+un,boxSizing:"border-box",position:"fixed"},gn[Fs]=gn["max"+Na]=Math.ceil(ln.width)+un,gn[Bs]=gn["max"+yf]=Math.ceil(ln.height)+un,gn[Pi]=gn[Pi+al]=gn[Pi+rl]=gn[Pi+ol]=gn[Pi+sl]="0",gn[sn]=Wt[sn],gn[sn+al]=Wt[sn+al],gn[sn+rl]=Wt[sn+rl],gn[sn+ol]=Wt[sn+ol],gn[sn+sl]=Wt[sn+sl],F=pb(mt,gn,b),Kn&&Z(0)),i?(T=i._initted,tf(1),i.render(i.duration(),!0,!0),K=v(R.a)-X+Ze+wt,ne=Math.abs(Ze-K)>1,B&&ne&&F.splice(F.length-2,2),i.render(0,!0,!0),T||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),tf(0)):K=Ze,$&&($.value?$.style["overflow"+R.a.toUpperCase()]=$.value:$.style.removeProperty("overflow-"+R.a));else if(h&&Z()&&!E)for(ln=h.parentNode;ln&&ln!==_t;)ln._pinOffset&&(Ce-=ln._pinOffset,Le-=ln._pinOffset),ln=ln.parentNode;U&&U.forEach(function(_e){return _e.revert(!1,!0)}),C.start=Ce,C.end=Le,de=Ue=Kn?ue:Z(),!E&&!Kn&&(de<ue&&Z(ue),C.scroll.rec=0),C.revert(!1,!0),Ie=Ln(),N&&(He=-1,N.restart(!0)),In=0,i&&D&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(mn||We!==C.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||We||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ce<-.001&&!We?Te.utils.normalize(Ce,Le,0):We,!0),C.progress=mn||(de-Ce)/Ze===We?0:We),f&&g&&(Ye._pinOffset=Math.round(C.progress*K)),le&&le.invalidate(),isNaN(W)||(W-=Te.getProperty(H,R.p),q-=Te.getProperty(at,R.p),Gc(H,R,W),Gc($e,R,W-(Ke||0)),Gc(at,R,q),Gc(et,R,q-(Ke||0))),mn&&!Kn&&C.update(),u&&!Kn&&!kt&&(kt=!0,u(C),kt=!1)}},C.getVelocity=function(){return(Z()-Ue)/(Ln()-Jo)*1e3||0},C.endAnimation=function(){Ko(C.callbackAnimation),i&&(le?le.progress(1):i.paused()?D||Ko(i,C.direction<0,1):Ko(i,i.reversed()))},C.labelToScroll=function(se){return i&&i.labels&&(Ce||C.refresh()||Ce)+i.labels[se]/i.duration()*Ze||0},C.getTrailing=function(se){var Ve=rt.indexOf(C),Ae=C.direction>0?rt.slice(0,Ve).reverse():rt.slice(Ve+1);return(_i(se)?Ae.filter(function(Ke){return Ke.vars.preventOverlaps===se}):Ae).filter(function(Ke){return C.direction>0?Ke.end<=Ce:Ke.start>=Le})},C.update=function(se,Ve,Ae){if(!(E&&!Ae&&!se)){var Ke=Kn===!0?ue:C.scroll(),en=se?0:(Ke-Ce)/Ze,ot=en<0?0:en>1?1:en||0,Dt=C.progress,mn,Nt,wt,dt,zn,Pt,Tn,Vn;if(Ve&&(Ue=de,de=E?Z():Ke,y&&(fe=me,me=i&&!D?i.totalProgress():ot)),p&&f&&!In&&!Uc&&Li&&(!ot&&Ce<Ke+(Ke-Ue)/(Ln()-Jo)*p?ot=1e-4:ot===1&&Le>Ke+(Ke-Ue)/(Ln()-Jo)*p&&(ot=.9999)),ot!==Dt&&C.enabled){if(mn=C.isActive=!!ot&&ot<1,Nt=!!Dt&&Dt<1,Pt=mn!==Nt,zn=Pt||!!ot!=!!Dt,C.direction=ot>Dt?1:-1,C.progress=ot,zn&&!In&&(wt=ot&&!Dt?0:ot===1?1:Dt===1?2:3,D&&(dt=!Pt&&z[wt+1]!=="none"&&z[wt+1]||z[wt],Vn=i&&(dt==="complete"||dt==="reset"||dt in i))),M&&(Pt||Vn)&&(Vn||d||!i)&&(Dn(M)?M(C):C.getTrailing(M).forEach(function(ji){return ji.endAnimation()})),D||(le&&!In&&!Uc?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",ot,i._tTime/i._tDur):(le.vars.totalProgress=ot,le.invalidate().restart())):i&&i.totalProgress(ot,!!(In&&(Ie||se)))),f){if(se&&g&&(Ye.style[g+R.os2]=ce),!B)k(Qo(X+K*ot));else if(zn){if(Tn=!se&&ot>Dt&&Le+1>Ke&&Ke+1>=sr(L,R),b)if(!se&&(mn||Tn)){var tn=Cr(f,!0),Wt=Ke-Ce;s0(f,_t,tn.top+(R===rn?Wt:0)+un,tn.left+(R===rn?0:Wt)+un)}else s0(f,Ye);Da(mn||Tn?F:Ft),ne&&ot<1&&mn||k(X+(ot===1&&!Tn?K:0))}}y&&!ee.tween&&!In&&!Uc&&N.restart(!0),o&&(Pt||A&&ot&&(ot<1||!nf))&&cl(o.targets).forEach(function(ji){return ji.classList[mn||A?"add":"remove"](o.className)}),a&&!D&&!se&&a(C),zn&&!In?(D&&(Vn&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),a&&a(C)),(Pt||!nf)&&(c&&Pt&&Aa(C,c),Y[wt]&&Aa(C,Y[wt]),A&&(ot===1?C.kill(!1,1):Y[wt]=0),Pt||(wt=ot===1?1:3,Y[wt]&&Aa(C,Y[wt]))),x&&!mn&&Math.abs(C.getVelocity())>(el(x)?x:2500)&&(Ko(C.callbackAnimation),le?le.progress(1):Ko(i,dt==="reverse"?1:!ot,1))):D&&a&&!In&&a(C)}if(pe){var ln=E?Ke/E.duration()*(E._caScrollDist||0):Ke;Q(ln+(H._isFlipped?1:0)),pe(ln)}ge&&ge(-Ke/E.duration()*(E._caScrollDist||0))}},C.enable=function(se,Ve){C.enabled||(C.enabled=!0,xn(L,"resize",tl),I||xn(L,"scroll",Ra),j&&xn(r,"refreshInit",j),se!==!1&&(C.progress=We=0,de=Ue=He=Z()),Ve!==!1&&C.refresh())},C.getTween=function(se){return se&&ee?ee.tween:le},C.setPositions=function(se,Ve,Ae,Ke){if(E){var en=E.scrollTrigger,ot=E.duration(),Dt=en.end-en.start;se=en.start+Dt*se/ot,Ve=en.start+Dt*Ve/ot}C.refresh(!1,!1,{start:Kg(se,Ae&&!!C._startClamp),end:Kg(Ve,Ae&&!!C._endClamp)},Ke),C.update()},C.adjustPinSpacing=function(se){if(ae&&se){var Ve=ae.indexOf(R.d)+1;ae[Ve]=parseFloat(ae[Ve])+se+un,ae[1]=parseFloat(ae[1])+se+un,Da(ae)}},C.disable=function(se,Ve){if(se!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ve||le&&le.pause(),ue=0,he&&(he.uncache=1),j&&_n(r,"refreshInit",j),N&&(N.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!I)){for(var Ae=rt.length;Ae--;)if(rt[Ae].scroller===L&&rt[Ae]!==C)return;_n(L,"resize",tl),I||_n(L,"scroll",Ra)}},C.kill=function(se,Ve){C.disable(se,Ve),le&&!Ve&&le.kill(),l&&delete df[l];var Ae=rt.indexOf(C);Ae>=0&&rt.splice(Ae,1),Ae===Zn&&qc>0&&Zn--,Ae=0,rt.forEach(function(Ke){return Ke.scroller===C.scroller&&(Ae=1)}),Ae||Kn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ve||i.kill()),$e&&[$e,et,H,at].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),ll===C&&(ll=0),f&&(he&&(he.uncache=1),Ae=0,rt.forEach(function(Ke){return Ke.pin===f&&Ae++}),Ae||(he.spacer=0)),n.onKill&&n.onKill(C)},rt.push(C),C.enable(!1,!1),xe&&xe(C),i&&i.add&&!Ze){var Oe=C.update;C.update=function(){C.update=Oe,it.cache++,Ce||Le||C.refresh()},Te.delayedCall(.01,C.update),Ze=.01,Ce=Le=0}else C.refresh();f&&hb()},r.register=function(n){return Pa||(Te=n||m0(),p0()&&window.document&&r.enable(),Pa=jo),Pa},r.defaults=function(n){if(n)for(var i in n)kc[i]=n[i];return kc},r.disable=function(n,i){jo=0,rt.forEach(function(a){return a[i?"kill":"disable"](n)}),_n(lt,"wheel",Ra),_n(vt,"scroll",Ra),clearInterval(Nc),_n(vt,"touchcancel",rr),_n(_t,"touchstart",rr),Fc(_n,vt,"pointerdown,touchstart,mousedown",Jg),Fc(_n,vt,"pointerup,touchend,mouseup",jg),Zc.kill(),Oc(_n);for(var s=0;s<it.length;s+=3)Bc(_n,it[s],it[s+1]),Bc(_n,it[s],it[s+2])},r.enable=function(){if(lt=window,vt=document,xi=vt.documentElement,_t=vt.body,Te){if(cl=Te.utils.toArray,nl=Te.utils.clamp,uf=Te.core.context||rr,tf=Te.core.suppressOverwrites||rr,gf=lt.history.scrollRestoration||"auto",ff=lt.pageYOffset||0,Te.core.globals("ScrollTrigger",r),_t){jo=1,La=document.createElement("div"),La.style.height="100vh",La.style.position="absolute",T0(),rb(),Yt.register(Te),r.isTouch=Yt.isTouch,ss=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cf=Yt.isTouch===1,xn(lt,"wheel",Ra),mf=[lt,vt,xi,_t],Te.matchMedia?(r.matchMedia=function(u){var d=Te.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Te.addEventListener("matchMediaInit",function(){M0(),Sf()}),Te.addEventListener("matchMediaRevert",function(){return S0()}),Te.addEventListener("matchMedia",function(){Os(0,1),Gs("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return sf(),sf})):console.warn("Requires GSAP 3.11.0 or later"),sf(),xn(vt,"scroll",Ra);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=Te.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Cr(_t),rn.m=Math.round(o.top+rn.sc())||0,Pn.m=Math.round(o.left+Pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),Nc=setInterval(t0,250),Te.delayedCall(.5,function(){return Uc=0}),xn(vt,"touchcancel",rr),xn(_t,"touchstart",rr),Fc(xn,vt,"pointerdown,touchstart,mousedown",Jg),Fc(xn,vt,"pointerup,touchend,mouseup",jg),lf=Te.utils.checkPrefix("transform"),Yc.push(lf),Pa=Ln(),Zc=Te.delayedCall(.2,Os).pause(),Ia=[vt,"visibilitychange",function(){var u=lt.innerWidth,d=lt.innerHeight;vt.hidden?(Yg=u,$g=d):(Yg!==u||$g!==d)&&tl()},vt,"DOMContentLoaded",Os,lt,"load",Os,lt,"resize",tl],Oc(xn),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)Bc(_n,it[l],it[l+1]),Bc(_n,it[l],it[l+2])}else if(vt){var c=function u(){r.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(nf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nc)||(Nc=i)&&setInterval(t0,i),"ignoreMobileResize"in n&&(cf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Oc(_n)||Oc(xn,n.autoRefreshEvents||"none"),h0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Yn(n),a=it.indexOf(s),o=zs(s);~a&&it.splice(a,o?6:2),i&&(o?Bi.unshift(lt,i,_t,i,xi,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(_i(n)?Yn(n):n).getBoundingClientRect(),o=a[s?Fs:Bs]*i||0;return s?a.right-o>0&&a.left+o<lt.innerWidth:a.bottom-o>0&&a.top+o<lt.innerHeight},r.positionInViewport=function(n,i,s){_i(n)&&(n=Yn(n));var a=n.getBoundingClientRect(),o=a[s?Fs:Bs],l=i==null?o/2:i in Jc?Jc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/lt.innerWidth:(a.top+l)/lt.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vs.killAll||[];Vs={},i.forEach(function(s){return s()})}},r}();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?cl(r).forEach(function(e){if(e&&e.style){var t=gi.indexOf(e);t>=0&&gi.splice(t,5),gi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),uf())}}):gi};Qe.revert=function(r,e){return Sf(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?tl(!0):(Pa||Qe.register())&&Os(!0)};Qe.update=function(r){return++it.cache&&Rr(r===!0?2:0)};Qe.clearScrollMemory=w0;Qe.maxScroll=function(r,e){return sr(r,e?Pn:rn)};Qe.getScrollFunc=function(r,e){return Er(Yn(r),e?Pn:rn)};Qe.getById=function(r){return df[r]};Qe.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Li};Qe.snapDirectional=bf;Qe.addEventListener=function(r,e){var t=Vs[r]||(Vs[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Vs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Te.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Dn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Dn(s)&&(s=s(),xn(Qe,"refresh",function(){return s=e.batchMax()})),cl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var o0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},of=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===xi&&r(_t,t)},Hc={auto:1,scroll:1},gb=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Te.core.getCache(s),o=Ln(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hc[(l=Ii(s)).overflowY]||Hc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!zs(s)&&(Hc[(l=Ii(s)).overflowY]||Hc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},A0=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&gb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&xn(vt,Yt.eventTypes[0],c0,!1,!0)},onDisable:function(){return _n(vt,Yt.eventTypes[0],c0,!0)}})},_b=/(input|label|select|textarea)/i,l0,c0=function(e){var t=_b.test(e.target.tagName);(t||l0)&&(e._gsapAllow=!0,l0=t)},xb=function(e){Us(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Yn(e.target)||xi,u=Te.core.globals().ScrollSmoother,d=u&&u.get(),h=ss&&(e.content&&Yn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Er(c,rn),g=Er(c,Pn),_=1,p=(Yt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,S=Dn(i)?function(){return i(o)}:function(){return i||2.8},A,y,b=A0(c,e.type,!0,s),w=function(){return y=!1},E=rr,x=rr,M=function(){l=sr(c,rn),x=nl(ss?1:0,l),n&&(E=nl(0,sr(c,Pn))),A=ks},R=function(){h._gsap.y=Qo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var J=Qo(o.deltaY/2),O=x(f.v-J);if(h&&O!==f.v+f.offset){f.offset=O-f.v;var C=Qo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",f.cacheID=it.cache,Rr()}return!0}f.offset&&R(),y=!0},L,V,I,B,Y=function(){M(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&Te.set(h,{y:"+=0"}),e.ignoreCheck=function(z){return ss&&z.type==="touchmove"&&D(z)||_>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=_;_=Qo((lt.visualViewport&&lt.visualViewport.scale||1)/p),L.pause(),z!==_&&of(c,_>1.01?!0:n?!1:"x"),V=g(),I=f(),M(),A=ks},e.onRelease=e.onGestureStart=function(z,J){if(f.offset&&R(),!J)B.restart(!0);else{it.cache++;var O=S(),C,j;n&&(C=g(),j=C+O*.05*-z.velocityX/.227,O*=o0(g,C,j,sr(c,Pn)),L.vars.scrollX=E(j)),C=f(),j=C+O*.05*-z.velocityY/.227,O*=o0(f,C,j,sr(c,rn)),L.vars.scrollY=x(j),L.invalidate().duration(O).play(.01),(ss&&L.vars.scrollY>=l||C>=l-1)&&Te.to({},{onUpdate:Y,duration:O})}a&&a(z)},e.onWheel=function(){L._ts&&L.pause(),Ln()-m>1e3&&(A=0,m=Ln())},e.onChange=function(z,J,O,C,j){if(ks!==A&&M(),J&&n&&g(E(C[2]===J?V+(z.startX-z.x):g()+J-C[1])),O){f.offset&&R();var be=j[2]===O,Se=be?I+z.startY-z.y:f()+O-j[1],He=x(Se);be&&Se!==He&&(I+=He-Se),f(He)}(O||J)&&Rr()},e.onEnable=function(){of(c,n?!1:"x"),Qe.addEventListener("refresh",Y),xn(lt,"resize",Y),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){of(c,!0),_n(lt,"resize",Y),Qe.removeEventListener("refresh",Y),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=ss,ss&&!f()&&f(1),ss&&Te.ticker.add(rr),B=o._dc,L=Te.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:E0(f,f(),function(){return L.pause()})},onUpdate:Rr,onComplete:B.vars.onComplete}),o};Qe.sort=function(r){if(Dn(r))return rt.sort(r);var e=lt.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Yt(r)};Qe.normalizeScroll=function(r){if(typeof r=="undefined")return $n;if(r===!0&&$n)return $n.enable();if(r===!1){$n&&$n.kill(),$n=r;return}var e=r instanceof Yt?r:xb(r);return $n&&$n.target===e.target&&$n.kill(),zs(e.target)&&($n=e),e};Qe.core={_getVelocityProp:Dc,_inputObserver:A0,_scrollers:it,_proxies:Bi,bridge:{ss:function(){Li||Gs("scrollStart"),Li=Ln()},ref:function(){return In}}};m0()&&Te.registerPlugin(Qe);Lt.registerPlugin(Qe);var C0=/[A-Za-zÀ-ÿ]/;function vb(r){return`<span class="w"><span class="wi bl"><span class="c">${r}</span><span class="b" aria-hidden="true">${r}</span></span></span>`}function Qc(r,{blurLast:e=!1}={}){let t=r.split(/(<[^>]+>)/).map(s=>s==="<blur>"||s==="</blur>"?{marker:s==="<blur>"}:!s||s.startsWith("<")?{raw:s}:{tokens:s.split(/(\s+)/)}),n=null;t.forEach((s,a)=>{var o;(o=s.tokens)==null||o.forEach((l,c)=>{l.trim()&&C0.test(l)&&(n=`${a}:${c}`)})});let i=!1;return t.map((s,a)=>s.marker!==void 0?(i=s.marker,""):s.raw!==void 0?s.raw:s.tokens.map((o,l)=>o.trim()?C0.test(o)&&(i||e&&`${a}:${l}`===n)?vb(o):`<span class="w"><span class="wi">${o}</span></span>`:o).join("")).join("")}function R0(r){let e=r.querySelectorAll("[data-split] .wi");e.length&&Lt.fromTo(e,{yPercent:110,rotate:4,opacity:0},{yPercent:0,rotate:0,opacity:1,duration:.72,ease:"back.out(1.6)",stagger:.035,delay:.05})}function P0(r){r.querySelectorAll("[data-reveal]").forEach(e=>{let t=parseFloat(e.dataset.delay||0);Lt.fromTo(e,{y:40,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.9,delay:t,ease:"back.out(1.6)",scrollTrigger:{trigger:e,start:"top 92%",once:!0}})})}function I0(r){matchMedia("(prefers-reduced-motion: reduce)").matches||(r.querySelectorAll("[data-speed]").forEach(e=>{let t=parseFloat(e.dataset.speed||.1);Lt.fromTo(e,{y:-90*t},{y:90*t,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:.6}})}),r.querySelectorAll("img[data-zoom]").forEach(e=>{Lt.fromTo(e,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})}),r.querySelectorAll("[data-3d]").forEach(e=>{Lt.fromTo(e,{rotationX:7,rotationY:-6,transformPerspective:1200},{rotationX:-2,rotationY:3,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:.8}})}))}var hl=matchMedia("(pointer: fine)").matches,dl=matchMedia("(prefers-reduced-motion: reduce)").matches;function L0(r){!hl||dl||r.querySelectorAll("[data-tilt]").forEach(e=>{let t=parseFloat(e.dataset.tilt||8);e.addEventListener("pointermove",n=>{let i=e.getBoundingClientRect(),s=(n.clientX-i.left)/i.width,a=(n.clientY-i.top)/i.height;e.style.setProperty("--mx",`${s*100}%`),e.style.setProperty("--my",`${a*100}%`),e.style.setProperty("--hover",1),Lt.to(e,{rotationX:(.5-a)*t,rotationY:(s-.5)*t,transformPerspective:1100,scale:1.015,z:14,duration:.6,ease:"power2.out",overwrite:"auto"})}),e.addEventListener("pointerleave",()=>{e.style.setProperty("--hover",0),Lt.to(e,{rotationX:0,rotationY:0,scale:1,z:0,duration:.9,ease:"back.out(1.1)",overwrite:"auto"})})})}function D0(r){!hl||dl||r.querySelectorAll("[data-magnetic]").forEach(e=>{e.addEventListener("pointermove",t=>{let n=e.getBoundingClientRect(),i=(t.clientX-(n.left+n.width/2))*.28,s=(t.clientY-(n.top+n.height/2))*.38;Lt.to(e,{x:i,y:s,duration:.6,ease:"power2.out"})}),e.addEventListener("pointerleave",()=>{Lt.to(e,{x:0,y:0,duration:.8,ease:"back.out(1.1)"})})})}function N0(r){r.querySelectorAll(".btn, .glass-btn").forEach(e=>{e.addEventListener("pointerdown",t=>{let n=e.getBoundingClientRect(),i=document.createElement("span");i.className="ripple",i.style.left=`${t.clientX-n.left}px`,i.style.top=`${t.clientY-n.top}px`,e.appendChild(i),i.addEventListener("animationend",()=>i.remove())})})}function yb(r,e=!1){let t=document.querySelector(".nav-pill");!t||!r||Lt.to(t,{x:r.offsetLeft,width:r.offsetWidth,duration:e?0:.7,ease:"back.out(1.1)",overwrite:"auto"})}function U0(r){var i;let e=[...document.querySelectorAll(".nav-links a")];e.forEach(s=>s.classList.toggle("active",s.dataset.route===r));let t=e.find(s=>s.dataset.route===r)||e[0];yb(t,!((i=document.querySelector(".nav-pill"))!=null&&i.dataset.ready));let n=document.querySelector(".nav-pill");n&&(n.dataset.ready="1")}function O0(r){!hl||dl||r.querySelectorAll("[data-hover-zoom]").forEach(e=>{let t=e.querySelector("img");if(!t)return;let n=document.querySelector(".cursor");e.addEventListener("pointerenter",()=>n==null?void 0:n.classList.add("as-name")),e.addEventListener("pointerleave",()=>n==null?void 0:n.classList.remove("as-name")),e.addEventListener("pointermove",i=>{let s=e.getBoundingClientRect(),a=(i.clientX-s.left)/s.width-.5,o=(i.clientY-s.top)/s.height-.5;Lt.to(t,{scale:1.12,xPercent:-a*6,yPercent:-o*6,duration:.9,ease:"power3.out",overwrite:"auto"})}),e.addEventListener("pointerleave",()=>{Lt.to(t,{scale:1,xPercent:0,yPercent:0,duration:1.1,ease:"power3.out",overwrite:"auto"})})})}function F0(){let r=document.querySelector(".cursor");if(r&&hl&&!dl){document.documentElement.classList.add("has-cursor");let n=r.querySelector(".cursor-dot"),i=window.innerWidth/2,s=window.innerHeight/2,a=i,o=s,l=i,c=s;window.addEventListener("pointermove",d=>{i=d.clientX,s=d.clientY,r.classList.add("on")},{passive:!0}),document.addEventListener("pointerleave",()=>r.classList.remove("on")),window.addEventListener("pointerover",d=>{var h,f;r.classList.toggle("hover",!!((f=(h=d.target).closest)!=null&&f.call(h,"a, button, input, select, textarea, [data-tilt], [data-magnetic]")))});let u=()=>{a+=(i-a)*.22,o+=(s-o)*.22,l+=(i-l)*.7,c+=(s-c)*.7,r.style.transform=`translate3d(${a}px, ${o}px, 0)`,n.style.transform=`translate3d(${i-a}px, ${s-o}px, 0)`,requestAnimationFrame(u)};u()}let e=document.getElementById("nav"),t=()=>{e==null||e.classList.toggle("is-scrolled",window.scrollY>40);let n=window.scrollY;document.querySelectorAll(".bg-blobs span").forEach((i,s)=>{i.style.transform=`translate3d(0, ${-n*(.08+s*.04)}px, 0)`})};window.addEventListener("scroll",t,{passive:!0}),t(),hl&&!dl&&window.addEventListener("pointermove",n=>{let i=n.clientX/window.innerWidth-.5,s=n.clientY/window.innerHeight-.5;document.querySelectorAll("[data-depth]").forEach(a=>{let o=parseFloat(a.dataset.depth||0);Lt.to(a,{x:i*o*40,y:s*o*30,duration:1.1,ease:"power2.out",overwrite:"auto"})})},{passive:!0})}var B0="eddino-lang",bb=window.EDDINO_CONTENT,Ua="en";function k0(){return"en"}var z0=()=>Ua;function Fe(r){let e=n=>r.split(".").reduce((i,s)=>i==null?void 0:i[s],bb[n]),t=e(Ua);return t!==void 0?t:e("en")}function Sb(){document.querySelectorAll("[data-i18n]").forEach(r=>{r.textContent=Fe(r.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria]").forEach(r=>r.setAttribute("aria-label",Fe(r.dataset.i18nAria))),document.querySelectorAll(".lang-switch button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.lang===Ua)))}function Mf(r){Ua=r==="fr"?"fr":"en",document.documentElement.lang=Ua;try{localStorage.setItem(B0,Ua)}catch{}Sb()}var Nn={design:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="15" height="14" rx="3"/><path d="M17 10l5-3v10l-5-3z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',arrow:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5.5 5.5 0 0 1 6 5.5"/></svg>',flex:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h11l-3-3M20 17H9l3 3"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'},Mb=[{key:"video",tone:"gold"},{key:"design",tone:"purple"},{key:"globe",tone:"teal"},{key:"code",tone:"purple"}],eu=()=>Fe("services.list").map((r,e)=>({...r,...Mb[e]})),V0=(r,e=0)=>`
  <article class="card glass service-card tone-${r.tone}" data-tilt="6" data-reveal data-delay="${e}">
    <div class="icon-bubble">${Nn[r.key]}</div>
    <h3>${r.title}</h3>
    <p>${r.blurb}</p>
    <a class="link-arrow" href="#/services">${Fe("ui.explore")} ${Nn.arrow}</a>
  </article>`,as=(r,e,t="")=>`
  <header class="page-head">
    <span class="tape" data-reveal>${r}</span>
    <h1 class="display" data-split>${Qc(e,{blurLast:!0})}</h1>
    ${t?`<p class="lead" data-reveal data-delay="0.1">${t}</p>`:""}
  </header>`;var G0={render:()=>`
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow glass" data-reveal><i class="dot"></i> ${Fe("home.eyebrow")}</span>
        <h1 class="display hero-title" data-split>${Qc(Fe("home.title"))}</h1>
        <p class="lead" data-reveal data-delay="0.2">${Fe("home.lead")}</p>
        <div class="cta-row" data-reveal data-delay="0.3">
          <a class="btn" href="#/contact" data-magnetic>${Fe("home.cta1")} ${Nn.arrow}</a>
          <a class="btn btn--ghost" href="#/presentation" data-magnetic>${Fe("home.cta2")}</a>
        </div>
      </div>
      <span class="orb orb-a" data-depth="1.6" aria-hidden="true"></span>
      <span class="orb orb-b" data-depth="-1" aria-hidden="true"></span>
    </section>

    <section class="section">
      <div class="section-head" data-reveal><span class="tape">${Fe("home.whatTape")}</span>
        <h2 class="display">${Fe("home.whatTitle")}</h2>
      </div>
      <div class="grid-4">
        ${eu().map((r,e)=>`<div class="px" data-speed="${[.05,.12,.07,.15][e]}">${V0(r,e*.08)}</div>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="split glass" data-tilt="2" data-reveal>
        <div class="px" data-speed="0.05"><div data-3d><div class="zoom-frame" data-hover-zoom><img class="portrait" src="brand/founder-sketch.jpg" alt="${Fe("ui.portraitAlt")}" loading="lazy" /></div></div></div>
        <div>
          <span class="tape small">${Fe("home.approachTape")}</span>
          <h2 class="display">${Fe("home.approachTitle")}</h2>
          <p>${Fe("home.approachText")}</p>
          <a class="btn btn--ghost" href="#/about" data-magnetic>${Fe("home.approachCta")} ${Nn.arrow}</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="cta cta--split glass" data-tilt="3" data-reveal>
        <div class="cta-copy">
        <h2 class="display">${Fe("home.ctaTitle")}</h2>
        <a class="btn" href="#/contact" data-magnetic>${Fe("home.ctaButton")} ${Nn.arrow}</a>
        </div>
        <div class="cta-pencil" data-pencil aria-hidden="true"></div>
      </div>
    </section>
  `,mount(r){window.EDDINO_PAGES&&window.EDDINO_PAGES.mountHome(r)}};var H0={render:()=>{let r=[Nn.users,Nn.flex,Nn.eye],e=["teal","gold","purple"];return`
    ${as(Fe("about.tape"),Fe("about.title"),"")}
    <section class="section">
      <div class="about-intro">
        <div class="glass prose" data-reveal>
          <span class="tape small">${Fe("about.tape1")}</span>
          <p class="lead">${Fe("about.lead")}</p>
          <p>${Fe("about.body")}</p>
        </div>
        <figure class="glass portrait-frame" data-tilt="2" data-reveal data-delay="0.15">
          <div data-3d><img data-zoom src="brand/founder-sketch.jpg" alt="${Fe("ui.portraitAlt")}" loading="lazy" /></div>
          <figcaption>${Fe("about.caption")}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section">
      <span class="tape small" data-reveal>${Fe("about.tape2")}</span>
      <div class="grid-3 pillars">
        ${Fe("about.pillars").map((t,n)=>`
        <article class="card glass tone-${e[n]}" data-tilt="5" data-reveal data-delay="${n*.1}">
          <div class="icon-bubble">${r[n]}</div>
          <h3>${t.title}</h3>
          <p>${t.text}</p>
        </article>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="glass quote" data-reveal>
        <p class="display">${Fe("about.quote")}</p>
      </div>
    </section>
  `}};var W0={render:()=>`
    ${as(Fe("services.tape"),Fe("services.title"),Fe("services.lead"))}
    <section class="section accordion">
      ${eu().map((r,e)=>`
        <article class="svc glass tone-${r.tone}" data-tilt="1.5" data-reveal data-delay="${e*.1}" ${e===0?"data-open":""}>
          <button class="svc-head" aria-expanded="${e===0}">
            <span class="svc-icon icon-bubble">${Nn[r.key]}</span>
            <span class="svc-title"><span class="svc-num">0${e+1}</span><span class="display">${r.title}</span></span>
            <span class="svc-plus" aria-hidden="true"></span>
          </button>
          <div class="svc-body"><div>
            <p>${r.blurb}</p>
            <ul>${r.items.map(t=>`<li>${t}</li>`).join("")}</ul>
          </div></div>
        </article>`).join("")}
    </section>
  `,mount(r){r.querySelectorAll(".svc").forEach(e=>{let t=e.querySelector(".svc-head"),n=i=>{e.classList.toggle("open",i),t.setAttribute("aria-expanded",String(i))};n(e.hasAttribute("data-open")),t.addEventListener("click",()=>{let i=!e.classList.contains("open");r.querySelectorAll(".svc").forEach(s=>s!==e&&s.classList.remove("open")),n(i)})})}};var wb=[{image:null,tone:"black",speed:.05},{image:null,tone:"gold",speed:.14},{image:null,tone:"teal",speed:.09},{image:null,tone:"purple",speed:.18}],Tb=()=>Fe("work.projects").map((r,e)=>({...r,...wb[e]})),X0_legacy={render:()=>`
    ${as(Fe("work.tape"),Fe("work.title"),Fe("work.lead"))}
    <section class="section work-grid">
      ${Tb().map(r=>`
        <div class="px" data-speed="${r.speed}">
          <article class="work-card glass" data-tilt="4">
            <div class="work-media ${r.image?"":`placeholder tone-${r.tone}`}">
              ${r.image?`<img src="${r.image}" alt="${r.title}" loading="lazy" />`:`<span>${Nn.eye}</span>`}
            </div>
            <div class="work-info glass-inner">
              <span class="work-tag">${r.tag}</span>
              <h3 class="display">${r.title}</h3>
            </div>
          </article>
        </div>`).join("")}
    </section>
  `,mount(r){r.querySelectorAll(".work-card").forEach((e,t)=>{Lt.fromTo(e,{clipPath:"inset(16% 10% 16% 10% round 32px)",opacity:.2},{clipPath:"inset(0% 0% 0% 0% round 32px)",opacity:1,duration:1.1,delay:t*.05,ease:"back.out(1.2)",clearProps:"clipPath",scrollTrigger:{trigger:e,start:"top 90%",once:!0}});let n=e.querySelector("img");n&&Lt.fromTo(n,{scale:1.28,yPercent:-6},{scale:1.08,yPercent:6,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})})}};var EDDINO_CFG_=window.EDDINO_CONFIG||{},EDDINO_WA_=EDDINO_CFG_.whatsapp||{};var wf={name:"Eddino Creative Lab",founder:"Eddino Martino",email:EDDINO_CFG_.email||"contact@eddinocreativelab.com",whatsappNumber:EDDINO_WA_.number||"",whatsappDisplay:EDDINO_WA_.display||"",whatsappUrl:"https://wa.me/"+(EDDINO_WA_.number||"")};var X0={render:()=>window.EDDINO_PAGES.presentation.render(),mount(r){window.EDDINO_PAGES.presentation.mount(r)}};var BLOG_={render:()=>window.EDDINO_PAGES.blog.render(),mount(r){window.EDDINO_PAGES.blog.mount(r)}};var q0={render:()=>`
    ${as(Fe("contact.tape"),Fe("contact.title"),Fe("contact.lead"))}
    <section class="section contact-grid">
      <aside class="glass contact-info" data-reveal>
        <h3 class="display">${Fe("contact.hello")}</h3>
        <a class="mail" href="mailto:${wf.email}">${wf.email}</a>
        <a class="btn btn--wa" href="${wf.whatsappUrl}" target="_blank" rel="noopener" data-magnetic><svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg><span>${Fe("contact.whatsapp")}</span></a>
        <p>${Fe("contact.line")}</p>
        <div class="chips">${Fe("contact.chips").map(r=>`<span>${r}</span>`).join("")}</div>
      </aside>

      <form class="glass form" data-reveal data-delay="0.1" novalidate>
        <div class="field-row">
          <label><span>${Fe("contact.name")}</span><input name="name" autocomplete="name" required /></label>
          <label><span>${Fe("contact.email")}</span><input name="email" type="email" autocomplete="email" required /></label>
        </div>
        <label><span>${Fe("contact.need")}</span>
          <select name="service">${Fe("contact.options").map(r=>`<option>${r}</option>`).join("")}</select>
        </label>
        <label><span>${Fe("contact.project")}</span><textarea name="message" rows="5" required></textarea></label>
        <button class="btn" type="submit" data-magnetic><span class="btn-label">${Fe("contact.send")}</span> ${Nn.arrow}</button>
        <p class="form-note" role="status" aria-live="polite"></p>
      </form>
    </section>
  `,mount(r){let e=r.querySelector("form"),t=r.querySelector(".form-note"),n=r.querySelector(".btn-label");e.addEventListener("submit",i=>{i.preventDefault();let a=[...e.querySelectorAll("[required]")].find(o=>!o.value.trim()||o.type==="email"&&!o.checkValidity());if(a){Lt.fromTo(a,{x:-10},{x:0,duration:.8,ease:"elastic.out(1.2, 0.3)"}),a.focus(),t.textContent=Fe("contact.invalid");return}n.textContent=Fe("contact.sent"),Lt.fromTo(e,{scale:.96},{scale:1,duration:1.1,ease:"back.out(2.2)"}),t.textContent=Fe("contact.reply").replace("{email}",e.email.value),e.reset()})}};var Z0={home:G0,about:H0,services:W0,presentation:X0,blog:BLOG_,contact:q0},Y0=matchMedia("(prefers-reduced-motion: reduce)").matches,ki=document.getElementById("view"),Oa=null,Tf=!1,fl=null,tu=null;function $0(){let r=(location.hash||"#/").replace(/^#\/?/,"").split("?")[0];if(r==="work")r="presentation";return Z0[r]?r:"home"}function K0(r){tu=r.hero,window.addEventListener("hashchange",()=>nu($0())),nu($0(),{first:!0})}function J0(){if(!Oa)return;let r=Oa;Oa=null,nu(r)}var Eb=()=>new Promise(r=>Lt.to(ki,{opacity:0,y:-30,scale:.98,filter:"blur(6px)",duration:.4,ease:"power2.inOut",onComplete:r}));async function nu(r,{first:e=!1}={}){var n;if(r===Oa)return;if(Tf){fl=r;return}Tf=!0,Oa=r,U0(r),tu==null||tu.setPreset(r),document.title=Fe(`titles.${r}`),!e&&!Y0&&await Eb(),Qe.getAll().forEach(i=>i.kill()),window.scrollTo({top:0,behavior:"instant"});let t=Z0[r];if(ki.innerHTML=t.render(),(n=t.mount)==null||n.call(t,ki),L0(ki),O0(ki),D0(ki),N0(ki),!e&&!Y0&&Lt.fromTo(ki,{opacity:0,y:40,scale:.97,filter:"blur(8px)"},{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:.95,ease:"back.out(1.6)",clearProps:"filter,transform"}),R0(ki),P0(ki),I0(ki),Qe.refresh(),Tf=!1,fl&&fl!==Oa){let i=fl;fl=null,nu(i)}}function j0(){if(matchMedia("(prefers-reduced-motion: reduce)").matches||matchMedia("(max-width: 860px), (pointer: coarse)").matches)return;let r=document.getElementById("water");if(!r)return;let e=r.getContext("2d"),t=6,n=.96,i=0,s=0,a,o,l,c;function u(){i=Math.ceil(window.innerWidth/t),s=Math.ceil(window.innerHeight/t),r.width=i,r.height=s,a=new Float32Array(i*s),o=new Float32Array(i*s),l=e.createImageData(i,s),c=l.data}u(),window.addEventListener("resize",u);function d(_,p,m,S){let A=Math.max(1,Math.floor(_-m)),y=Math.min(i-2,Math.ceil(_+m)),b=Math.max(1,Math.floor(p-m)),w=Math.min(s-2,Math.ceil(p+m));for(let E=b;E<=w;E++)for(let x=A;x<=y;x++){let M=Math.hypot(x-_,E-p);M>m||(a[E*i+x]+=S*.5*(1+Math.cos(Math.PI*M/m)))}}window.addEventListener("pointerdown",_=>{d(_.clientX/t,_.clientY/t,3,-.25)});function h(){for(let p=1;p<s-1;p++){let m=p*i;for(let S=1;S<i-1;S++){let A=m+S;o[A]=((a[A-1]+a[A+1]+a[A-i]+a[A+i])*.5-o[A])*n}}let _=a;a=o,o=_}function f(){for(let _=1;_<s-1;_++){let p=_*i;for(let m=1;m<i-1;m++){let S=p+m,A=a[S+1]-a[S-1],y=a[S+i]-a[S-i],b=(A*.7+y)*1e3,w=S*4;if(b>0)c[w]=255,c[w+1]=255,c[w+2]=255,c[w+3]=b>255?255:b*.35;else{c[w]=30,c[w+1]=0,c[w+2]=50;let E=-b*.25;c[w+3]=E>255?255:E}}}e.putImageData(l,0,0)}let wat_n=0;window.addEventListener("pointerdown",()=>{wat_n=300},{passive:!0});function g(){if(wat_n>0){wat_n--;h(),h(),f(),wat_n===0&&e.clearRect(0,0,r.width,r.height)}requestAnimationFrame(g)}g()}var Q0="eddino-theme-v2";function e_(){try{let r=localStorage.getItem(Q0);if(r==="light"||r==="dark")return r}catch{}return "light"}function Ab(r,e){var t;document.documentElement.dataset.theme=r,e==null||e.setTheme(r);try{localStorage.setItem(Q0,r)}catch{}(t=document.querySelector(".theme-toggle"))==null||t.setAttribute("aria-pressed",String(r==="dark"))}function t_(r){let e=document.querySelector(".theme-toggle");e&&(e.setAttribute("aria-pressed",String(document.documentElement.dataset.theme==="dark")),e.addEventListener("click",()=>{let t=document.documentElement.dataset.theme==="dark"?"light":"dark";Ab(t,r)}))}var ah="186";var H_=0,up=1,W_=2;var Kl=1,X_=2,yo=3,mr=0,wn=1,Ui=2,gr=0,bo=1,Jl=2,hp=3,dp=4,q_=5;var ra=100,Y_=101,$_=102,Z_=103,K_=104,J_=200,j_=201,Q_=202,ex=203,fp=204,pp=205,tx=206,nx=207,ix=208,rx=209,sx=210,ax=211,ox=212,lx=213,cx=214,Nu=0,Uu=1,Ou=2,no=3,Fu=4,Bu=5,ku=6,zu=7,oh=0,ux=1,hx=2,$i=0,mp=1,gp=2,_p=3,jl=4,xp=5,vp=6,yp=7,Jf="attached",dx="detached",bp=300,ys=301,sa=302,lh=303,ch=304,Ql=306,fs=1e3,Ni=1001,io=1002,Jt=1003,uh=1004;var aa=1005;var jt=1006,So=1007;var Zi=1008;var ui=1009,Sp=1010,Mp=1011,Mo=1012,hh=1013,Ki=1014,Mi=1015,Ji=1016,dh=1017,fh=1018,wo=1020,wp=35902,Tp=35899,Ep=1021,Ap=1022,wi=1023,lr=1026,bs=1027,ph=1028,mh=1029,Ss=1030,gh=1031;var _h=1033,ec=33776,tc=33777,nc=33778,ic=33779,xh=35840,vh=35841,yh=35842,bh=35843,Sh=36196,Mh=37492,wh=37496,Th=37488,Eh=37489,rc=37490,Ah=37491,Ch=37808,Rh=37809,Ph=37810,Ih=37811,Lh=37812,Dh=37813,Nh=37814,Uh=37815,Oh=37816,Fh=37817,Bh=37818,kh=37819,zh=37820,Vh=37821,Gh=36492,Hh=36494,Wh=36495,Xh=36283,qh=36284,sc=36285,Yh=36286;var $s=2300,Zs=2301,Iu=2302,jf=2303,Qf=2400,ep=2401,tp=2402,fx=2500;var Cp=0,ac=1,To=2,px=3200;var oc=0,mx=1,Wr="",Ht="srgb",ei="srgb-linear",Al="linear",xt="srgb";var Lu=7680;var gx=519,_x=512,xx=513,vx=514,$h=515,yx=516,bx=517,Zh=518,Sx=519,Rp=35044;var Pp="300 es",Xi=2e3,ro=2001;function Cb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Rb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function so(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mx(){let r=so("canvas");return r.style.display="block",r}var n_={},ao=null;function Cl(...r){let e="THREE."+r.shift();ao?ao("log",e,...r):console.log(e,...r)}function wx(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Be(...r){r=wx(r);let e="THREE."+r.shift();if(ao)ao("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=wx(r);let e="THREE."+r.shift();if(ao)ao("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ys(...r){let e=r.join(" ");e in n_||(n_[e]=!0,Be(...r))}function Tx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Ex={[Nu]:Uu,[Ou]:ku,[Fu]:zu,[no]:Bu,[Uu]:Nu,[ku]:Ou,[zu]:Fu,[Bu]:no},cr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],i_=1234567,Tl=Math.PI/180,Ks=180/Math.PI;function qi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function Ip(r,e){return(r%e+e)%e}function Pb(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ib(r,e,t){return r!==e?(t-r)/(e-r):0}function El(r,e,t){return(1-t)*r+t*e}function Lb(r,e,t,n){return El(r,e,1-Math.exp(-t*n))}function Db(r,e=1){return e-Math.abs(Ip(r,e*2)-e)}function Nb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ub(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ob(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Fb(r,e){return r+Math.random()*(e-r)}function Bb(r){return r*(.5-Math.random())}function kb(r){r!==void 0&&(i_=r);let e=i_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zb(r){return r*Tl}function Vb(r){return r*Ks}function Gb(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Hb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xb(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lp={DEG2RAD:Tl,RAD2DEG:Ks,generateUUID:qi,clamp:ht,euclideanModulo:Ip,mapLinear:Pb,inverseLerp:Ib,lerp:El,damp:Lb,pingpong:Db,smoothstep:Nb,smootherstep:Ub,randInt:Ob,randFloat:Fb,randFloatSpread:Bb,seededRandom:kb,degToRad:zb,radToDeg:Vb,isPowerOfTwo:Gb,ceilPowerOfTwo:Hb,floorPowerOfTwo:Wb,setQuaternionFromProperEuler:Xb,normalize:yt,denormalize:Wi},Fp=class Fp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fp.prototype.isVector2=!0;var qe=Fp,bi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bp=class Bp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(r_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(r_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bp.prototype.isVector3=!0;var G=Bp,Ef=new G,r_=new bi,kp=class kp{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],A=i[4],y=i[7],b=i[2],w=i[5],E=i[8];return s[0]=a*_+o*S+l*b,s[3]=a*p+o*A+l*w,s[6]=a*m+o*y+l*E,s[1]=c*_+u*S+d*b,s[4]=c*p+u*A+d*w,s[7]=c*m+u*y+d*E,s[2]=h*_+f*S+g*b,s[5]=h*p+f*A+g*w,s[8]=h*m+f*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Af.makeScale(e,t)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Af.makeRotation(-e)),this}translate(e,t){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kp.prototype.isMatrix3=!0;var Je=kp,Af=new Je,s_=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qb(){let r={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=Fr(i.r),i.g=Fr(i.g),i.b=Fr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=to(i.r),i.g=to(i.g),i.b=to(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wr?Al:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ei]:{primaries:e,whitePoint:n,transfer:Al,toXYZ:s_,fromXYZ:a_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:s_,fromXYZ:a_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}var st=qb();function Fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Fa,Vu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fa===void 0&&(Fa=so("canvas")),Fa.width=e.width,Fa.height=e.height;let i=Fa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Fr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fr(t[n]/255)*255):t[n]=Fr(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yb=0,oo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Cf(i[a].image)):s.push(Cf(i[a]))}else s=Cf(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Cf(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Vu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var $b=0,Rf=new G,dn=class r extends cr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Ni,i=Ni,s=jt,a=Zi,o=wi,l=ui,c=r.DEFAULT_ANISOTROPY,u=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=qi(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=bp;dn.DEFAULT_ANISOTROPY=1;var zp=class zp{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(f+1)/2,b=(m+1)/2,w=(u+h)/4,E=(d+_)/4,x=(g+p)/4;return A>y&&A>b?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=w/n,s=E/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=x/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=x/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;var bt=zp,Gu=class extends cr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new dn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new oo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rl=class extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hu=class extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var sh=class sh{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ba.setFromMatrixColumn(e,0).length(),s=1/Ba.setFromMatrixColumn(e,1).length(),a=1/Ba.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zb,e,Kb)}lookAt(e,t,n){let i=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),os.crossVectors(n,vi),os.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),os.crossVectors(n,vi)),os.normalize(),iu.crossVectors(vi,os),i[0]=os.x,i[4]=iu.x,i[8]=vi.x,i[1]=os.y,i[5]=iu.y,i[9]=vi.y,i[2]=os.z,i[6]=iu.z,i[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],A=n[7],y=n[11],b=n[15],w=i[0],E=i[4],x=i[8],M=i[12],R=i[1],D=i[5],L=i[9],V=i[13],I=i[2],B=i[6],Y=i[10],z=i[14],J=i[3],O=i[7],C=i[11],j=i[15];return s[0]=a*w+o*R+l*I+c*J,s[4]=a*E+o*D+l*B+c*O,s[8]=a*x+o*L+l*Y+c*C,s[12]=a*M+o*V+l*z+c*j,s[1]=u*w+d*R+h*I+f*J,s[5]=u*E+d*D+h*B+f*O,s[9]=u*x+d*L+h*Y+f*C,s[13]=u*M+d*V+h*z+f*j,s[2]=g*w+_*R+p*I+m*J,s[6]=g*E+_*D+p*B+m*O,s[10]=g*x+_*L+p*Y+m*C,s[14]=g*M+_*V+p*z+m*j,s[3]=S*w+A*R+y*I+b*J,s[7]=S*E+A*D+y*B+b*O,s[11]=S*x+A*L+y*Y+b*C,s[15]=S*M+A*V+y*z+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],S=l*f-c*h,A=o*f-c*d,y=o*h-l*d,b=a*f-c*u,w=a*h-l*u,E=a*d-o*u;return t*(_*S-p*A+m*y)-n*(g*S-p*b+m*w)+i*(g*A-_*b+m*E)-s*(g*y-_*w+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=t*o-n*a,A=t*l-i*a,y=t*c-s*a,b=n*l-i*o,w=n*c-s*o,E=i*c-s*l,x=u*_-d*g,M=u*p-h*g,R=u*m-f*g,D=d*p-h*_,L=d*m-f*_,V=h*m-f*p,I=S*V-A*L+y*D+b*R-w*M+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*V-l*L+c*D)*B,e[1]=(i*L-n*V-s*D)*B,e[2]=(_*E-p*w+m*b)*B,e[3]=(h*w-d*E-f*b)*B,e[4]=(l*R-a*V-c*M)*B,e[5]=(t*V-i*R+s*M)*B,e[6]=(p*y-g*E-m*A)*B,e[7]=(u*E-h*y+f*A)*B,e[8]=(a*L-o*R+c*x)*B,e[9]=(n*R-t*L-s*x)*B,e[10]=(g*w-_*y+m*S)*B,e[11]=(d*y-u*w-f*S)*B,e[12]=(o*M-a*D-l*x)*B,e[13]=(t*D-n*M+i*x)*B,e[14]=(_*A-g*b-p*S)*B,e[15]=(u*b-d*A+h*S)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,p=a*d,m=o*d,S=l*c,A=l*u,y=l*d,b=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*b,i[1]=(f+y)*b,i[2]=(g-A)*b,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(h+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(g+A)*E,i[9]=(p-S)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ba.set(i[0],i[1],i[2]).length(),o=Ba.set(i[4],i[5],i[6]).length(),l=Ba.set(i[8],i[9],i[10]).length();s<0&&(a=-a),zi.copy(this);let c=1/a,u=1/o,d=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=d,zi.elements[9]*=d,zi.elements[10]*=d,t.setFromRotationMatrix(zi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Xi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Xi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ro)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Xi,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Xi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ro)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};sh.prototype.isMatrix4=!0;var je=sh,Ba=new G,zi=new je,Zb=new G(0,0,0),Kb=new G(1,1,1),os=new G,iu=new G,vi=new G,o_=new je,l_=new bi,ur=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ur.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jb=0,c_=new G,ka=new bi,Pr=new je,ru=new G,pl=new G,jb=new G,Qb=new bi,u_=new G(1,0,0),h_=new G(0,1,0),d_=new G(0,0,1),f_={type:"added"},eS={type:"removed"},za={type:"childadded",child:null},Pf={type:"childremoved",child:null},Rt=class r extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new G,t=new ur,n=new bi,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Je}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.multiply(ka),this}rotateOnWorldAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.premultiply(ka),this}rotateX(e){return this.rotateOnAxis(u_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(u_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ru.copy(e):ru.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(pl,ru,this.up):Pr.lookAt(ru,pl,this.up),this.quaternion.setFromRotationMatrix(Pr),i&&(Pr.extractRotation(i.matrixWorld),ka.setFromRotationMatrix(Pr),this.quaternion.premultiply(ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),za.child=e,this.dispatchEvent(za),za.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eS),Pf.child=e,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,e,jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,Qb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tS={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},su={h:0,s:0,l:0};function If(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Ip(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=If(a,s,e+1/3),this.g=If(a,s,e),this.b=If(a,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Ax[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return st.workingToColorSpace(On.copy(this),e),Math.round(ht(On.r*255,0,255))*65536+Math.round(ht(On.g*255,0,255))*256+Math.round(ht(On.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(On.copy(this),t);let n=On.r,i=On.g,s=On.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Ht){st.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,i=On.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(su);let n=El(ls.h,su.h,t),i=El(ls.s,su.s,t),s=El(ls.l,su.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new ze;ze.NAMES=Ax;var Js=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vi=new G,Ir=new G,Lf=new G,Lr=new G,Va=new G,Ga=new G,p_=new G,Df=new G,Nf=new G,Uf=new G,Of=new bt,Ff=new bt,Bf=new bt,Or=class r{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vi.subVectors(e,t),i.cross(Vi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vi.subVectors(i,t),Ir.subVectors(n,t),Lf.subVectors(e,t);let a=Vi.dot(Vi),o=Vi.dot(Ir),l=Vi.dot(Lf),c=Ir.dot(Ir),u=Ir.dot(Lf),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Lr.x),l.addScaledVector(a,Lr.y),l.addScaledVector(o,Lr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Of.setScalar(0),Ff.setScalar(0),Bf.setScalar(0),Of.fromBufferAttribute(e,t),Ff.fromBufferAttribute(e,n),Bf.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Of,s.x),a.addScaledVector(Ff,s.y),a.addScaledVector(Bf,s.z),a}static isFrontFacing(e,t,n,i){return Vi.subVectors(n,t),Ir.subVectors(e,t),Vi.cross(Ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ir.subVectors(this.a,this.b),Vi.cross(Ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Va.subVectors(i,n),Ga.subVectors(s,n),Df.subVectors(e,n);let l=Va.dot(Df),c=Ga.dot(Df);if(l<=0&&c<=0)return t.copy(n);Nf.subVectors(e,i);let u=Va.dot(Nf),d=Ga.dot(Nf);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Va,a);Uf.subVectors(e,s);let f=Va.dot(Uf),g=Ga.dot(Uf);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ga,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return p_.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(p_,o);let m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Va,a).addScaledVector(Ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gi):Gi.fromBufferAttribute(s,a),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),au.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),au.copy(n.boundingBox)),au.applyMatrix4(e.matrixWorld),this.union(au)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),ou.subVectors(this.max,ml),Ha.subVectors(e.a,ml),Wa.subVectors(e.b,ml),Xa.subVectors(e.c,ml),cs.subVectors(Wa,Ha),us.subVectors(Xa,Wa),Hs.subVectors(Ha,Xa);let t=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Hs.z,Hs.y,cs.z,0,-cs.x,us.z,0,-us.x,Hs.z,0,-Hs.x,-cs.y,cs.x,0,-us.y,us.x,0,-Hs.y,Hs.x,0];return!kf(t,Ha,Wa,Xa,ou)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,Ha,Wa,Xa,ou))?!1:(lu.crossVectors(cs,us),t=[lu.x,lu.y,lu.z],kf(t,Ha,Wa,Xa,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dr=[new G,new G,new G,new G,new G,new G,new G,new G],Gi=new G,au=new ti,Ha=new G,Wa=new G,Xa=new G,cs=new G,us=new G,Hs=new G,ml=new G,ou=new G,lu=new G,Ws=new G;function kf(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ws.fromArray(r,s);let o=i.x*Math.abs(Ws.x)+i.y*Math.abs(Ws.y)+i.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),u=n.dot(Ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var an=new G,cu=new qe,nS=0,hn=class extends cr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rp,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cu.fromBufferAttribute(this,t),cu.applyMatrix3(e),this.setXY(t,cu.x,cu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Pl=class extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Il=class extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qn=class extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},iS=new ti,gl=new G,zf=new G,li=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):iS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);let t=gl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(zf)),this.expandByPoint(gl.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rS=0,Di=new je,Vf=new Rt,qa=new G,yi=new ti,_l=new ti,vn=new G,Mn=class r extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cb(e)?Il:Pl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return Vf.lookAt(e),Vf.updateMatrix(),this.applyMatrix4(Vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qa).negate(),this.translate(qa.x,qa.y,qa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];_l.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(yi.min,_l.min),yi.expandByPoint(vn),vn.addVectors(yi.max,_l.max),yi.expandByPoint(vn)):(yi.expandByPoint(_l.min),yi.expandByPoint(_l.max))}yi.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)vn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vn.fromBufferAttribute(o,c),l&&(qa.fromBufferAttribute(e,c),vn.add(qa)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new G,l[x]=new G;let c=new G,u=new G,d=new G,h=new qe,f=new qe,g=new qe,_=new G,p=new G;function m(x,M,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(_),o[M].add(_),o[R].add(_),l[x].add(p),l[M].add(p),l[R].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,M=S.length;x<M;++x){let R=S[x],D=R.start,L=R.count;for(let V=D,I=D+L;V<I;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new G,y=new G,b=new G,w=new G;function E(x){b.fromBufferAttribute(i,x),w.copy(b);let M=o[x];A.copy(M),A.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(w,M);let D=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,M=S.length;x<M;++x){let R=S[x],D=R.start,L=R.count;for(let V=D,I=D+L;V<I;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new hn(h,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rp,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Jn=new G,ps=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Cl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gf=new G,sS=new G,aS=new Je,Hi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Gf.subVectors(n,t).cross(sS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Gf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||aS.getNormalMatrix(e),i=this.coplanarPoint(Gf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},oS=0,Fn=class extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=bo,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fp,this.blendDst=pp,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lu,this.stencilZFail=Lu,this.stencilZPass=Lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},uo=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ya,xl=new G,$a=new G,Za=new G,Ka=new qe,vl=new qe,Cx=new je,uu=new G,yl=new G,hu=new G,m_=new qe,Hf=new qe,g_=new qe,Qs=class extends Rt{constructor(e=new uo){if(super(),this.isSprite=!0,this.type="Sprite",Ya===void 0){Ya=new Mn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new js(t,5);Ya.setIndex([0,1,2,0,2,3]),Ya.setAttribute("position",new ps(n,3,0,!1)),Ya.setAttribute("uv",new ps(n,2,3,!1))}this.geometry=Ya,this.material=e,this.center=new qe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$a.setFromMatrixScale(this.matrixWorld),Cx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Za.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$a.multiplyScalar(-Za.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;du(uu.set(-.5,-.5,0),Za,a,$a,i,s),du(yl.set(.5,-.5,0),Za,a,$a,i,s),du(hu.set(.5,.5,0),Za,a,$a,i,s),m_.set(0,0),Hf.set(1,0),g_.set(1,1);let o=e.ray.intersectTriangle(uu,yl,hu,!1,xl);if(o===null&&(du(yl.set(-.5,.5,0),Za,a,$a,i,s),Hf.set(0,1),o=e.ray.intersectTriangle(uu,hu,yl,!1,xl),o===null))return;let l=e.ray.origin.distanceTo(xl);l<e.near||l>e.far||t.push({distance:l,point:xl.clone(),uv:Or.getInterpolation(xl,uu,yl,hu,m_,Hf,g_,new qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function du(r,e,t,n,i,s){Ka.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(vl.x=s*Ka.x-i*Ka.y,vl.y=i*Ka.x+s*Ka.y):vl.copy(Ka),r.copy(e),r.x+=vl.x,r.y+=vl.y,r.applyMatrix4(Cx)}var Nr=new G,Wf=new G,fu=new G,pu=new G,ms=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wf.copy(e).add(t).multiplyScalar(.5),fu.copy(t).sub(e).normalize(),pu.copy(this.origin).sub(Wf);let s=e.distanceTo(t)*.5,a=-this.direction.dot(fu),o=pu.dot(this.direction),l=-pu.dot(fu),c=pu.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wf).addScaledVector(fu,h),f}intersectSphere(e,t){if(e.radius<0)return null;Nr.subVectors(e.center,this.origin);let n=Nr.dot(this.direction),i=Nr.dot(Nr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,A=n.z-a.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(u),E,x,M,R,D,L,V,I,B,Y,z,J;if(y>=b&&y>=w?(M=l,L=d,B=g,J=m,l>=0?(E=c,x=u,R=h,D=f,V=_,I=p,Y=S,z=A):(E=u,x=c,R=f,D=h,V=p,I=_,Y=A,z=S)):b>=w?(M=c,L=h,B=_,J=S,c>=0?(E=u,x=l,R=f,D=d,V=p,I=g,Y=A,z=m):(E=l,x=u,R=d,D=f,V=g,I=p,Y=m,z=A)):(M=u,L=f,B=p,J=A,u>=0?(E=l,x=c,R=d,D=h,V=g,I=_,Y=m,z=S):(E=c,x=l,R=h,D=d,V=_,I=g,Y=S,z=m)),M===0)return null;let O=E/M,C=x/M,j=1/M,be=R-O*L,Se=D-C*L,He=V-O*B,Ie=I-C*B,We=Y-O*J,Z=z-C*J,ee=We*Ie-Z*He,he=be*Z-Se*We,ke=He*Se-Ie*be;if(i){if(ee<0||he<0||ke<0)return null}else if((ee<0||he<0||ke<0)&&(ee>0||he>0||ke>0))return null;let de=ee+he+ke;if(de===0)return null;let Ue=j*(ee*L+he*B+ke*J);return(de>0?Ue<0:Ue>0)?null:this.at(Ue/de,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yi=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},__=new je,Xs=new ms,mu=new li,x_=new G,gu=new G,_u=new G,xu=new G,Xf=new G,vu=new G,v_=new G,yu=new G,Ot=class extends Rt{constructor(e=new Mn,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){vu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(Xf.fromBufferAttribute(d,e),a?vu.addScaledVector(Xf,u):vu.addScaledVector(Xf.sub(t),u))}t.add(vu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mu.copy(n.boundingSphere),mu.applyMatrix4(s),Xs.copy(e.ray).recast(e.near),!(mu.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(mu,x_)===null||Xs.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(__.copy(s).invert(),Xs.copy(e.ray).applyMatrix4(__),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,b=A;y<b;y+=3){let w=o.getX(y),E=o.getX(y+1),x=o.getX(y+2);i=bu(this,m,e,n,c,u,d,w,E,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let S=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);i=bu(this,a,e,n,c,u,d,S,A,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,b=A;y<b;y+=3){let w=y,E=y+1,x=y+2;i=bu(this,m,e,n,c,u,d,w,E,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let S=p,A=p+1,y=p+2;i=bu(this,a,e,n,c,u,d,S,A,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function lS(r,e,t,n,i,s,a,o){let l;if(e.side===wn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===mr,o),l===null)return null;yu.copy(o),yu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(yu);return c<t.near||c>t.far?null:{distance:c,point:yu.clone(),object:r}}function bu(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,gu),r.getVertexPosition(l,_u),r.getVertexPosition(c,xu);let u=lS(r,e,t,n,gu,_u,xu,v_);if(u){let d=new G;Or.getBarycoord(v_,gu,_u,xu,d),i&&(u.uv=Or.getInterpolatedAttribute(i,o,l,c,d,new qe)),s&&(u.uv1=Or.getInterpolatedAttribute(s,o,l,c,d,new qe)),a&&(u.normal=Or.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new G,materialIndex:0};Or.getNormal(gu,_u,xu,h.normal),u.face=h,u.barycoord=d}return u}var bl=new bt,y_=new bt,b_=new bt,cS=new bt,S_=new je,Su=new G,qf=new li,M_=new je,Yf=new ms,Ll=class extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jf,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Su),this.boundingBox.expandByPoint(Su)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Su),this.boundingSphere.expandByPoint(Su)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qf.copy(this.boundingSphere),qf.applyMatrix4(i),e.ray.intersectsSphere(qf)!==!1&&(M_.copy(i).invert(),Yf.copy(e.ray).applyMatrix4(M_),!(this.boundingBox!==null&&Yf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;y_.fromBufferAttribute(i.attributes.skinIndex,e),b_.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(bl.copy(t),t.set(0,0,0,0)):(bl.set(...t,1),t.set(0,0,0)),bl.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=b_.getComponent(s);if(a!==0){let o=y_.getComponent(s);S_.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cS.copy(bl).applyMatrix4(S_),a)}}return t.isVector4&&(t.w=bl.w),t.applyMatrix4(this.bindMatrixInverse)}},ho=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fo=class extends dn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Jt,u=Jt,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},w_=new je,uS=new je,Dl=class r{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:uS;w_.multiplyMatrices(o,t[s]),w_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fo(t,e,e,wi,Mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(Be("Skeleton: No bone found with UUID:",s),a=new ho),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Br=class extends hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ja=new je,T_=new je,Mu=[],E_=new ti,hS=new je,Sl=new Ot,Ml=new li,ea=class extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ja),E_.copy(e.boundingBox).applyMatrix4(Ja),this.boundingBox.union(E_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ja),Ml.copy(e.boundingSphere).applyMatrix4(Ja),this.boundingSphere.union(Ml)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sl.geometry=this.geometry,Sl.material=this.material,Sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ml.copy(this.boundingSphere),Ml.applyMatrix4(n),e.ray.intersectsSphere(Ml)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ja),T_.multiplyMatrices(n,Ja),Sl.matrixWorld=T_,Sl.raycast(e,Mu);for(let a=0,o=Mu.length;a<o;a++){let l=Mu[a];l.instanceId=s,l.object=this,t.push(l)}Mu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fo(new Float32Array(i*this.count),i,this.count,ph,Mi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new li,dS=new qe(.5,.5),wu=new G,po=class{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],S=s[12],A=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,f-u,m-g,b-S).normalize(),i[1].setComponents(c+a,f+u,m+g,b+S).normalize(),i[2].setComponents(c+o,f+d,m+_,b+A).normalize(),i[3].setComponents(c-o,f-d,m-_,b-A).normalize(),n)i[4].setComponents(l,h,p,y).normalize(),i[5].setComponents(c-l,f-h,m-p,b-y).normalize();else if(i[4].setComponents(c-l,f-h,m-p,b-y).normalize(),t===Xi)i[5].setComponents(c+l,f+h,m+p,b+y).normalize();else if(t===ro)i[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=dS.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(wu.x=i.normal.x>0?e.max.x:e.min.x,wu.y=i.normal.y>0?e.max.y:e.min.y,wu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mo=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wu=new G,Xu=new G,A_=new je,wl=new ms,Tu=new li,$f=new G,C_=new G,ta=class extends Rt{constructor(e=new Mn,t=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wu.fromBufferAttribute(t,i-1),Xu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wu.distanceTo(Xu);e.setAttribute("lineDistance",new Qn(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tu.copy(n.boundingSphere),Tu.applyMatrix4(i),Tu.radius+=s,e.ray.intersectsSphere(Tu)===!1)return;A_.copy(i).invert(),wl.copy(e.ray).applyMatrix4(A_);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=u.getX(_),S=u.getX(_+1),A=Eu(this,e,wl,l,m,S,_);A&&t.push(A)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(f),m=Eu(this,e,wl,l,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=Eu(this,e,wl,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Eu(this,e,wl,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Eu(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(Wu.fromBufferAttribute(o,i),Xu.fromBufferAttribute(o,s),t.distanceSqToSegment(Wu,Xu,$f,C_)>n)return;$f.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo($f);if(!(c<e.near||c>e.far))return{distance:c,point:C_.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var R_=new G,P_=new G,Nl=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)R_.fromBufferAttribute(t,i),P_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+R_.distanceTo(P_);e.setAttribute("lineDistance",new Qn(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ul=class extends ta{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},go=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},I_=new je,np=new ms,Au=new li,Cu=new G,Ol=class extends Rt{constructor(e=new Mn,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Au.copy(n.boundingSphere),Au.applyMatrix4(i),Au.radius+=s,e.ray.intersectsSphere(Au)===!1)return;I_.copy(i).invert(),np.copy(e.ray).applyMatrix4(I_);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){let p=c.getX(g);Cu.fromBufferAttribute(d,p),L_(Cu,p,l,i,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Cu.fromBufferAttribute(d,g),L_(Cu,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function L_(r,e,t,n,i,s,a){let o=np.distanceSqToPoint(r);if(o<t){let l=new G;np.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fl=class extends dn{constructor(e=[],t=ys,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_o=class extends dn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends dn{constructor(e,t,n=Ki,i,s,a,o=Jt,l=Jt,c,u=lr,d=1){if(u!==lr&&u!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qu=class extends gs{constructor(e,t=Ki,n=ys,i,s,a=Jt,o=Jt,l,c=lr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bl=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_s=class r extends Mn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(d,2));function g(_,p,m,S,A,y,b,w,E,x,M){let R=y/E,D=b/x,L=y/2,V=b/2,I=w/2,B=E+1,Y=x+1,z=0,J=0,O=new G;for(let C=0;C<Y;C++){let j=C*D-V;for(let be=0;be<B;be++){let Se=be*R-L;O[_]=Se*S,O[p]=j*A,O[m]=I,c.push(O.x,O.y,O.z),O[_]=0,O[p]=0,O[m]=w>0?1:-1,u.push(O.x,O.y,O.z),d.push(be/E),d.push(1-C/x),z+=1}}for(let C=0;C<x;C++)for(let j=0;j<E;j++){let be=h+j+B*C,Se=h+j+B*(C+1),He=h+(j+1)+B*(C+1),Ie=h+(j+1)+B*C;l.push(be,Se,Ie),l.push(Se,He,Ie),J+=6}o.addGroup(f,J,M),f+=J,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kl=class r extends Mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let S=m*h-a;for(let A=0;A<c;A++){let y=A*d-s;g.push(y,-S,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let A=S+c*m,y=S+c*(m+1),b=S+1+c*(m+1),w=S+1+c*m;f.push(A,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(_,3)),this.setAttribute("uv",new Qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function oa(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(D_(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(D_(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kn(r){let e={};for(let t=0;t<r.length;t++){let n=oa(r[t]);for(let i in n)e[i]=n[i]}return e}function D_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function fS(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Rx={clone:oa,merge:kn},pS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pS,this.fragmentShader=mS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(i.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yu=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hr=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends hr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var zl=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=oh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$u=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zu=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ds(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Du(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function gS(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function N_(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function _S(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var dr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ku=class extends dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qf,endingEnd:Qf}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ep:s=e,o=2*t-n;break;case tp:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ep:a=e,l=2*n-t;break;case tp:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,S=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let b=0;b!==o;++b)s[b]=m*a[u+b]+S*a[c+b]+A*a[l+b]+y*a[d+b];return s}},Ju=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},ju=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qu=class extends dr{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(i-t),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*h+g*2,S=d[m],A=d[m+1],y=e*h+g*2,b=u[y],w=u[y+1],E=vS(n,t,S,b,i);s[g]=Px(E,_,A,w,p)}return s}};function Px(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function xS(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function vS(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Px(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=xS(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ci=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Du(e.settings)&&(n.settings={inTangents:ds(e.settings.inTangents,Array),outTangents:ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case Iu:t=this.InterpolantFactoryMethodSmooth;break;case jf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return Iu;case this.InterpolantFactoryMethodBezier:return jf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Du(this.settings)&&(U_(this.settings.inTangents,e),U_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Rb(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Iu,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Du(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function U_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Zs;var kr=class extends ci{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=$s;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}};Vl.prototype.ValueTypeName="color";var zr=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}};zr.prototype.ValueTypeName="number";var eh=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)bi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Vr=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends ci{constructor(e,t,n){super(e,t,n)}};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=$s;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}};xs.prototype.ValueTypeName="vector";var Gl=class{constructor(e="",t=-1,n=[],i=fx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bS(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(ci.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=gS(l);l=N_(l,1,u),c=N_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new zr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let d=u[1],h=i[d];h||(i[d]=h=[]),h.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function yS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zr;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return Vl;case"quaternion":return Vr;case"bool":case"boolean":return kr;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function bS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yS(r.type);if(r.times===void 0){let n=[],i=[];_S(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Du(r.settings)&&(t.settings={inTangents:ds(r.settings.inTangents,Float32Array),outTangents:ds(r.settings.outTangents,Float32Array)}),t}var or={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(O_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!O_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function O_(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var th=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ix=new th,fr=class{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur={},ip=class extends Error{constructor(e,t){super(e),this.response=t}},xo=class extends fr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=or.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ur[e]!==void 0){Ur[e].push({onLoad:t,onProgress:n,onError:i});return}Ur[e]=[],Ur[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ur[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,_=0,p=new ReadableStream({start(m){S();function S(){d.read().then(({done:A,value:y})=>{if(A)m.close();else{_+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,E=u.length;w<E;w++){let x=u[w];x.onProgress&&x.onProgress(b)}m.enqueue(y),S()}},A=>{m.error(A)})}}});return new Response(p)}else throw new ip(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{or.add(`file:${e}`,c);let u=Ur[e];delete Ur[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ur[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ur[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ja=new WeakMap,nh=class extends fr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=or.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ja.get(a);d===void 0&&(d=[],ja.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=so("img");function l(){u(),t&&t(this);let d=ja.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}ja.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),or.remove(`image:${e}`);let h=ja.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}ja.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),or.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Hl=class extends fr{constructor(e){super(e)}load(e,t,n,i){let s=new dn,a=new nh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},na=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wl=class extends na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zf=new je,F_=new G,B_=new G,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;F_.setFromMatrixPosition(e.matrixWorld),t.position.copy(F_),B_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(B_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Zf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ro||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ru=new G,Pu=new bi,ar=new G,Xl=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ru,Pu,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Pu,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ru,Pu,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Pu,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new G,k_=new qe,z_=new qe,on=class extends Xl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,k_,z_),t.subVectors(z_,k_)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rp=class extends vo{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ql=class extends na{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new rp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},sp=class extends vo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},pr=class extends na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends Xl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ap=class extends vo{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new ap}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Kf=new WeakMap,Yl=class extends fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=or.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Kf.has(a)===!0?(i&&i(Kf.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return or.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Kf.set(l,c),or.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});or.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qa=-90,eo=1,ih=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new on(Qa,eo,e,t);i.layers=this.layers,this.add(i);let s=new on(Qa,eo,e,t);s.layers=this.layers,this.add(s);let a=new on(Qa,eo,e,t);a.layers=this.layers,this.add(a);let o=new on(Qa,eo,e,t);o.layers=this.layers,this.add(o);let l=new on(Qa,eo,e,t);l.layers=this.layers,this.add(l);let c=new on(Qa,eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},rh=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$l=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=SS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function SS(){this._document.hidden===!1&&this.reset()}var Np="\\[\\]\\.:\\/",MS=new RegExp("["+Np+"]","g"),Up="[^"+Np+"]",wS="[^"+Np.replace("\\.","")+"]",TS=/((?:WC+[\/:])*)/.source.replace("WC",Up),ES=/(WCOD+)?/.source.replace("WCOD",wS),AS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Up),CS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Up),RS=new RegExp("^"+TS+ES+AS+CS+"$"),PS=["material","materials","bones","map"],op=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(MS,"")}static parseTrackName(e){let t=RS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);PS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=op;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UA=new Float32Array(1);var V_=new je,Zl=class{constructor(e,t,n=0,i=1/0){this.ray=new ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return V_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(V_),this}intersectObject(e,t=!0,n=[]){return lp(e,this,n,t),n.sort(G_),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)lp(e[i],this,n,t);return n.sort(G_),n}};function G_(r,e){return r.distance-e.distance}function lp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)lp(s[a],e,t,!0)}}var Vp=class Vp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Vp.prototype.isMatrix2=!0;var cp=Vp;function Op(r,e,t,n){let i=IS(n);switch(t){case Ep:return r*e;case ph:return r*e/i.components*i.byteLength;case mh:return r*e/i.components*i.byteLength;case Ss:return r*e*2/i.components*i.byteLength;case gh:return r*e*2/i.components*i.byteLength;case Ap:return r*e*3/i.components*i.byteLength;case wi:return r*e*4/i.components*i.byteLength;case _h:return r*e*4/i.components*i.byteLength;case ec:case tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:case bh:return Math.max(r,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(r,8)*Math.max(e,8)/2;case Sh:case Mh:case Th:case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wh:case rc:case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Hh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xh:case qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sc:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IS(r){switch(r){case ui:case Sp:return{byteLength:1,components:1};case Mo:case Mp:case Ji:return{byteLength:2,components:1};case dh:case fh:return{byteLength:2,components:4};case Ki:case hh:case Mi:return{byteLength:4,components:1};case wp:case Tp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window!="undefined"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);function Qx(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function LS(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var DS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NS=`#ifdef USE_ALPHAHASH
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
#endif`,US=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
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
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qS=`#ifdef USE_IRIDESCENCE
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
#endif`,YS=`#ifdef USE_BUMPMAP
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
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rM=`vec3 transformedNormal = objectNormal;
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
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
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
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,IM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,OM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HM=`#if defined( USE_POINTS_UV )
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
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
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
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,x1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
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
}`,z1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`uniform float scale;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,$1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,J1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,Q1=`#define NORMAL
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
}`,ew=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tw=`#define PHONG
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
}`,nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,iw=`#define STANDARD
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
}`,rw=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,sw=`#define TOON
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
}`,aw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ow=`uniform float size;
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
}`,lw=`uniform vec3 diffuse;
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
}`,cw=`#include <common>
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
}`,uw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,hw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,dw=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:DS,alphahash_pars_fragment:NS,alphamap_fragment:US,alphamap_pars_fragment:OS,alphatest_fragment:FS,alphatest_pars_fragment:BS,aomap_fragment:kS,aomap_pars_fragment:zS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:HS,beginnormal_vertex:WS,bsdfs:XS,iridescence_fragment:qS,bumpmap_pars_fragment:YS,clipping_planes_fragment:$S,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:JS,color_fragment:jS,color_pars_fragment:QS,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:aM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:hM,envmap_common_pars_fragment:dM,envmap_pars_fragment:fM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:TM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:_M,fog_fragment:xM,fog_pars_fragment:vM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:bM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:MM,lights_pars_begin:wM,lights_toon_fragment:EM,lights_toon_pars_fragment:AM,lights_phong_fragment:CM,lights_phong_pars_fragment:RM,lights_physical_fragment:PM,lights_physical_pars_fragment:IM,lights_fragment_begin:LM,lights_fragment_maps:DM,lights_fragment_end:NM,lightprobes_pars_fragment:UM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:kM,map_fragment:zM,map_pars_fragment:VM,map_particle_fragment:GM,map_particle_pars_fragment:HM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphinstance_vertex:qM,morphcolor_vertex:YM,morphnormal_vertex:$M,morphtarget_pars_vertex:ZM,morphtarget_vertex:KM,normal_fragment_begin:JM,normal_fragment_maps:jM,normal_pars_fragment:QM,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:a1,opaque_fragment:o1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:h1,dithering_pars_fragment:d1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:_1,shadowmask_pars_fragment:x1,skinbase_vertex:v1,skinning_pars_vertex:y1,skinning_vertex:b1,skinnormal_vertex:S1,specularmap_fragment:M1,specularmap_pars_fragment:w1,tonemapping_fragment:T1,tonemapping_pars_fragment:E1,transmission_fragment:A1,transmission_pars_fragment:C1,uv_pars_fragment:R1,uv_pars_vertex:P1,uv_vertex:I1,worldpos_vertex:L1,background_vert:D1,background_frag:N1,backgroundCube_vert:U1,backgroundCube_frag:O1,cube_vert:F1,cube_frag:B1,depth_vert:k1,depth_frag:z1,distance_vert:V1,distance_frag:G1,equirect_vert:H1,equirect_frag:W1,linedashed_vert:X1,linedashed_frag:q1,meshbasic_vert:Y1,meshbasic_frag:$1,meshlambert_vert:Z1,meshlambert_frag:K1,meshmatcap_vert:J1,meshmatcap_frag:j1,meshnormal_vert:Q1,meshnormal_frag:ew,meshphong_vert:tw,meshphong_frag:nw,meshphysical_vert:iw,meshphysical_frag:rw,meshtoon_vert:sw,meshtoon_frag:aw,points_vert:ow,points_frag:lw,shadow_vert:cw,shadow_frag:uw,sprite_vert:hw,sprite_frag:dw},ve={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},xr={basic:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:kn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:kn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:kn([ve.points,ve.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:kn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:kn([ve.common,ve.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:kn([ve.sprite,ve.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:kn([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:kn([ve.lights,ve.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xr.physical={uniforms:kn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Kh={r:0,b:0,g:0},fw=new je,ev=new Je;ev.set(-1,0,0,0,1,0,0,0,1);function pw(r,e,t,n,i,s){let a=new ze(0),o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let y=S.backgroundBlurriness>0;A=e.get(A,y)}return A}function g(S){let A=!1,y=f(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(S,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===Ql)?(c===void 0&&(c=new Ot(new _s(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:oa(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fw.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ev),c.material.toneMapped=st.getTransfer(y.colorSpace)!==xt,(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ot(new kl(2,2),new Si({name:"BackgroundMaterial",uniforms:oa(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(Kh,Dp(r)),t.buffers.color.setClear(Kh.r,Kh.g,Kh.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:_,dispose:m}}function mw(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(D,L,V,I,B){let Y=!1,z=d(D,I,V,L);s!==z&&(s=z,c(s.object)),Y=f(D,I,V,B),Y&&g(D,I,V,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(D,L,V,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,L,V,I){let B=I.wireframe===!0,Y=n[L.id];Y===void 0&&(Y={},n[L.id]=Y);let z=D.isInstancedMesh===!0?D.id:0,J=Y[z];J===void 0&&(J={},Y[z]=J);let O=J[V.id];O===void 0&&(O={},J[V.id]=O);let C=O[B];return C===void 0&&(C=h(l()),O[B]=C),C}function h(D){let L=[],V=[],I=[];for(let B=0;B<t;B++)L[B]=0,V[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,L,V,I){let B=s.attributes,Y=L.attributes,z=0,J=V.getAttributes();for(let O in J)if(J[O].location>=0){let j=B[O],be=Y[O];if(be===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),j===void 0||j.attribute!==be||be&&j.data!==be.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function g(D,L,V,I){let B={},Y=L.attributes,z=0,J=V.getAttributes();for(let O in J)if(J[O].location>=0){let j=Y[O];j===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let be={};be.attribute=j,j&&j.data&&(be.data=j.data),B[O]=be,z++}s.attributes=B,s.attributesNum=z,s.index=I}function _(){let D=s.newAttributes;for(let L=0,V=D.length;L<V;L++)D[L]=0}function p(D){m(D,0)}function m(D,L){let V=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;V[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),B[D]!==L&&(r.vertexAttribDivisor(D,L),B[D]=L)}function S(){let D=s.newAttributes,L=s.enabledAttributes;for(let V=0,I=L.length;V<I;V++)L[V]!==D[V]&&(r.disableVertexAttribArray(V),L[V]=0)}function A(D,L,V,I,B,Y,z){z===!0?r.vertexAttribIPointer(D,L,V,B,Y):r.vertexAttribPointer(D,L,V,I,B,Y)}function y(D,L,V,I){_();let B=I.attributes,Y=V.getAttributes(),z=L.defaultAttributeValues;for(let J in Y){let O=Y[J];if(O.location>=0){let C=B[J];if(C===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){let j=C.normalized,be=C.itemSize,Se=e.get(C);if(Se===void 0)continue;let He=Se.buffer,Ie=Se.type,We=Se.bytesPerElement,Z=Ie===r.INT||Ie===r.UNSIGNED_INT||C.gpuType===hh;if(C.isInterleavedBufferAttribute){let ee=C.data,he=ee.stride,ke=C.offset;if(ee.isInstancedInterleavedBuffer){for(let de=0;de<O.locationSize;de++)m(O.location+de,ee.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let de=0;de<O.locationSize;de++)p(O.location+de);r.bindBuffer(r.ARRAY_BUFFER,He);for(let de=0;de<O.locationSize;de++)A(O.location+de,be/O.locationSize,Ie,j,he*We,(ke+be/O.locationSize*de)*We,Z)}else{if(C.isInstancedBufferAttribute){for(let ee=0;ee<O.locationSize;ee++)m(O.location+ee,C.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ee=0;ee<O.locationSize;ee++)p(O.location+ee);r.bindBuffer(r.ARRAY_BUFFER,He);for(let ee=0;ee<O.locationSize;ee++)A(O.location+ee,be/O.locationSize,Ie,j,be*We,be/O.locationSize*ee*We,Z)}}else if(z!==void 0){let j=z[J];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(O.location,j);break;case 3:r.vertexAttrib3fv(O.location,j);break;case 4:r.vertexAttrib4fv(O.location,j);break;default:r.vertexAttrib1fv(O.location,j)}}}}S()}function b(){M();for(let D in n){let L=n[D];for(let V in L){let I=L[V];for(let B in I){let Y=I[B];for(let z in Y)u(Y[z].object),delete Y[z];delete I[B]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let V in L){let I=L[V];for(let B in I){let Y=I[B];for(let z in Y)u(Y[z].object),delete Y[z];delete I[B]}}delete n[D.id]}function E(D){for(let L in n){let V=n[L];for(let I in V){let B=V[I];if(B[D.id]===void 0)continue;let Y=B[D.id];for(let z in Y)u(Y[z].object),delete Y[z];delete B[D.id]}}}function x(D){for(let L in n){let V=n[L],I=D.isInstancedMesh===!0?D.id:0,B=V[I];if(B!==void 0){for(let Y in B){let z=B[Y];for(let J in z)u(z[J].object),delete z[J];delete B[Y]}delete V[I],Object.keys(V).length===0&&delete n[L]}}}function M(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function gw(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _w(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==wi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ui&&E!==Mi&&!x&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:b,samples:w}}function xw(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Hi,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let S=s?0:n,A=S*4,y=m.clippingState||null;l.value=y,y=u(g,h,A,f);for(let b=0;b!==A;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,y=f;A!==_;++A,y+=4)a.copy(d[A]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Ao=4,vw=6,yw=20,bw=256,lc=new vs,Lx=new ze,Gp=null,Hp=0,Wp=0,Xp=!1,Sw=new G,la=new G,Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Sw}=s;Gp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Wp=this._renderer.getActiveMipmapLevel(),Xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ux(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gp,Hp,Wp),this._renderer.xr.enabled=Xp,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Wp=this._renderer.getActiveMipmapLevel(),Xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ji,format:wi,colorSpace:ei,depthBuffer:!1},i=Dx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dx(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mw(s)),this._blurMaterial=Tw(s,e,t),this._ggxMaterial=ww(s,e,t)}return i}_compileMaterial(e){let t=new Ot(new Mn,e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,i,s){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Lx),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new _s,new Yi({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Lx),m=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));let b=this._cubeSize;Eo(i,y*b,A>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ys||e.mapping===sa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ux()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ao?n-g+Ao:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Eo(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,lc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Eo(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,lc)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],d=3*u*(i>this._lodMax-Ao?i-this._lodMax+Ao:0),h=4*(this._cubeSize-u);Eo(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,lc)}};function Mw(r){let e=[],t=[],n=r,i=r-Ao+1+vw;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,A=m>2?0:-1,y=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(y,f*h*m);for(let b=0;b<h;b++){let w=u[b*2]*2-1,E=u[b*2+1]*2-1;m===0?la.set(1,E,w):m===1?la.set(-w,1,-E):m===2?la.set(-w,E,1):m===3?la.set(-1,E,-w):m===4?la.set(-w,-1,E):la.set(w,E,-1),la.toArray(_,(m*h+b)*f)}}let p=new Mn;p.setAttribute("position",new hn(g,f)),p.setAttribute("outputDirection",new hn(_,f)),t.push(new Ot(p,null)),n>Ao&&n--}return{lodMeshes:t,sizeLods:e}}function Dx(r,e,t){let n=new oi(r,e,t);return n.texture.mapping=Ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ww(r,e,t){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Tw(r,e,t){return new Si({name:"SphericalGaussianBlur",defines:{SAMPLES:yw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Nx(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Ux(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function ed(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jh=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _s(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:gr});s.uniforms.tEquirect.value=t;let a=new Ot(i,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=jt),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function Ew(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===lh||f===ch)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new jh(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===lh||f===ch,_=f===ys||f===sa;if(g||_){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Ro(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let S=h.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Ro(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===lh?h.mapping=ys:f===ch&&(h.mapping=sa),h}function l(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Aw(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ys("WebGLRenderer: "+n+" extension not supported."),i}}}function Cw(r,e,t,n){let i={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let A=0,y=S.length;A<y;A+=3){let b=S[A+0],w=S[A+1],E=S[A+2];h.push(b,w,w,E,E,b)}}else{let S=g.array;_=g.version;for(let A=0,y=S.length/3-1;A<y;A+=3){let b=A+0,w=A+1,E=A+2;h.push(b,w,w,E,E,b)}}let p=new(g.count>=65535?Il:Pl)(h,1);p.version=_;let m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Rw(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Pw(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Iw(r,e,t){let n=new WeakMap,i=new bt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let y=o.attributes.position.count*A,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*d),E=new Rl(w,y,b,d);E.type=Mi,E.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let D=p[R],L=m[R],V=S[R],I=y*b*4*R;for(let B=0;B<D.count;B++){let Y=B*x;f===!0&&(i.fromBufferAttribute(D,B),w[I+Y+0]=i.x,w[I+Y+1]=i.y,w[I+Y+2]=i.z,w[I+Y+3]=0),g===!0&&(i.fromBufferAttribute(L,B),w[I+Y+4]=i.x,w[I+Y+5]=i.y,w[I+Y+6]=i.z,w[I+Y+7]=0),_===!0&&(i.fromBufferAttribute(V,B),w[I+Y+8]=i.x,w[I+Y+9]=i.y,w[I+Y+10]=i.z,w[I+Y+11]=V.itemSize===4?i.w:1)}}h={count:d,texture:E,size:new qe(y,b)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Lw(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Dw={[mp]:"LINEAR_TONE_MAPPING",[gp]:"REINHARD_TONE_MAPPING",[_p]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[vp]:"AGX_TONE_MAPPING",[yp]:"NEUTRAL_TONE_MAPPING",[xp]:"CUSTOM_TONE_MAPPING"};function Nw(r,e,t,n,i,s){let a=new oi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Mn;c.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qn([0,2,0,0,2,0],2));let u=new Yu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(c,u),h=new vs(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,S=[],A=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let w=0;w<S.length;w++){let E=S[w];E.setSize&&E.setSize(y,b)}},this.setEffects=function(y){S=y,A=S.length>0&&S[0].isRenderPass===!0;let b=a.width,w=a.height;S.length>0&&o===null&&(o=new oi(b,w,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),l=new oi(b,w,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){let x=S[E];x.setSize&&x.setSize(b,w)}},this.begin=function(y,b){if(_||y.toneMapping===$i&&S.length===0)return!1;if(m=b,b!==null){let w=b.width,E=b.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return A===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=$i,!0},this.hasRenderPass=function(){return A},this.end=function(y,b){y.toneMapping=p,_=!0;let w=a,E=o;for(let x=0;x<S.length;x++){let M=S[x];M.enabled!==!1&&(M.render(y,E,w,b),M.needsSwap!==!1&&(w=E,E=E===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},st.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let x=Dw[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(d,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var tv=new dn,$p=new gs(1,1),nv=new Rl,iv=new Hu,rv=new Fl,Ox=[],Fx=[],Bx=new Float32Array(16),kx=new Float32Array(9),zx=new Float32Array(4);function Po(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Ox[i];if(s===void 0&&(s=new Float32Array(i),Ox[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function td(r,e){let t=Fx[e];t===void 0&&(t=new Int32Array(e),Fx[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Uw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ow(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function Fw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function Bw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function kw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;zx.set(n),r.uniformMatrix2fv(this.addr,!1,zx),pn(t,n)}}function zw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;kx.set(n),r.uniformMatrix3fv(this.addr,!1,kx),pn(t,n)}}function Vw(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Bx.set(n),r.uniformMatrix4fv(this.addr,!1,Bx),pn(t,n)}}function Gw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function Ww(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function Xw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function qw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Yw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function $w(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function Zw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function Kw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($p.compareFunction=t.isReversedDepthBuffer()?Zh:$h,s=$p):s=tv,t.setTexture2D(e||s,i)}function Jw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||iv,i)}function jw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rv,i)}function Qw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nv,i)}function eT(r){switch(r){case 5126:return Uw;case 35664:return Ow;case 35665:return Fw;case 35666:return Bw;case 35674:return kw;case 35675:return zw;case 35676:return Vw;case 5124:case 35670:return Gw;case 35667:case 35671:return Hw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return qw;case 36294:return Yw;case 36295:return $w;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Qw}}function tT(r,e){r.uniform1fv(this.addr,e)}function nT(r,e){let t=Po(e,this.size,2);r.uniform2fv(this.addr,t)}function iT(r,e){let t=Po(e,this.size,3);r.uniform3fv(this.addr,t)}function rT(r,e){let t=Po(e,this.size,4);r.uniform4fv(this.addr,t)}function sT(r,e){let t=Po(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function aT(r,e){let t=Po(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oT(r,e){let t=Po(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lT(r,e){r.uniform1iv(this.addr,e)}function cT(r,e){r.uniform2iv(this.addr,e)}function uT(r,e){r.uniform3iv(this.addr,e)}function hT(r,e){r.uniform4iv(this.addr,e)}function dT(r,e){r.uniform1uiv(this.addr,e)}function fT(r,e){r.uniform2uiv(this.addr,e)}function pT(r,e){r.uniform3uiv(this.addr,e)}function mT(r,e){r.uniform4uiv(this.addr,e)}function gT(r,e,t){let n=this.cache,i=e.length,s=td(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=$p:a=tv;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function _T(r,e,t){let n=this.cache,i=e.length,s=td(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||iv,s[a])}function xT(r,e,t){let n=this.cache,i=e.length,s=td(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||rv,s[a])}function vT(r,e,t){let n=this.cache,i=e.length,s=td(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||nv,s[a])}function yT(r){switch(r){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return aT;case 35676:return oT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return fT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return vT}}var Zp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eT(t.type)}},Kp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yT(t.type)}},Jp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},qp=/(\w+)(\])?(\[|\.)?/g;function Vx(r,e){r.seq.push(e),r.map[e.id]=e}function bT(r,e,t){let n=r.name,i=n.length;for(qp.lastIndex=0;;){let s=qp.exec(n),a=qp.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vx(t,c===void 0?new Zp(o,r,e):new Kp(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Jp(o),Vx(t,d)),t=d}}}var Co=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bT(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Gx(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var ST=37297,MT=0;function wT(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Hx=new Je;function TT(r){st._getMatrix(Hx,st.workingColorSpace,r);let e=`mat3( ${Hx.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Al:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wx(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wT(r.getShaderSource(e),o)}else return s}function ET(r,e){let t=TT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var AT={[mp]:"Linear",[gp]:"Reinhard",[_p]:"Cineon",[jl]:"ACESFilmic",[vp]:"AgX",[yp]:"Neutral",[xp]:"Custom"};function CT(r,e){let t=AT[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jh=new G;function RT(){st.getLuminanceCoefficients(Jh);let r=Jh.x.toFixed(4),e=Jh.y.toFixed(4),t=Jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uc).join(`
`)}function IT(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LT(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function uc(r){return r!==""}function Xx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(r){return r.replace(DT,UT)}var NT=new Map;function UT(r,e){let t=nt[e];if(t===void 0){let n=NT.get(e);if(n!==void 0)t=nt[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jp(t)}var OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(r){return r.replace(OT,FT)}function FT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $x(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var BT={[Kl]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function kT(r){return BT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zT={[ys]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function VT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var GT={[sa]:"ENVMAP_MODE_REFRACTION"};function HT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WT={[oh]:"ENVMAP_BLENDING_MULTIPLY",[ux]:"ENVMAP_BLENDING_MIX",[hx]:"ENVMAP_BLENDING_ADD"};function XT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":WT[r.combine]||"ENVMAP_BLENDING_NONE"}function qT(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function YT(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=kT(t),c=VT(t),u=HT(t),d=XT(t),h=qT(t),f=PT(t),g=IT(s),_=i.createProgram(),p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uc).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uc).join(`
`),m.length>0&&(m+=`
`)):(p=[$x(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uc).join(`
`),m=[$x(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?nt.tonemapping_pars_fragment:"",t.toneMapping!==$i?CT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ET("linearToOutputTexel",t.outputColorSpace),RT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uc).join(`
`)),a=jp(a),a=Xx(a,t),a=qx(a,t),o=jp(o),o=Xx(o,t),o=qx(o,t),a=Yx(a),o=Yx(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=S+p+a,y=S+m+o,b=Gx(i,i.VERTEX_SHADER,A),w=Gx(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(b)||"",I=i.getShaderInfoLog(w)||"",B=L.trim(),Y=V.trim(),z=I.trim(),J=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{let C=Wx(i,b,"vertex"),j=Wx(i,w,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+C+`
`+j)}else B!==""?Be("WebGLProgram: Program Info Log:",B):(Y===""||z==="")&&(O=!1);O&&(D.diagnostics={runnable:J,programLog:B,vertexShader:{log:Y,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(b),i.deleteShader(w),x=new Co(i,_),M=LT(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,ST)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var $T=0,Qp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}},em=class{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}};function ZT(r){return r===Ss||r===rc||r===sc}function KT(r,e,t,n,i,s){let a=new lo,o=new Qp,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,R,D,L,V){let I=D.fog,B=L.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||Y,z),O=J&&J.mapping===Ql?J.image.height:null,C=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,be=j!==void 0?j.length:0,Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let He,Ie,We,Z;if(C){let Oe=xr[C];He=Oe.vertexShader,Ie=Oe.fragmentShader}else{He=x.vertexShader,Ie=x.fragmentShader;let Oe=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,Oe,se),We=Oe.id,Z=se.id}let ee=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,de=L.isBatchedMesh===!0,Ue=!!x.map,Ce=!!x.matcap,Le=!!J,$e=!!x.aoMap,et=!!x.lightMap,H=!!x.bumpMap&&x.wireframe===!1,at=!!x.normalMap,St=!!x.displacementMap,kt=!!x.emissiveMap,Ze=!!x.metalnessMap,mt=!!x.roughnessMap,F=x.anisotropy>0,Ft=x.clearcoat>0,Ye=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,K=F&&!!x.anisotropyMap,ce=Ft&&!!x.clearcoatMap,ae=Ft&&!!x.clearcoatNormalMap,Q=Ft&&!!x.clearcoatRoughnessMap,ne=v&&!!x.iridescenceMap,pe=v&&!!x.iridescenceThicknessMap,Ee=k&&!!x.sheenColorMap,me=k&&!!x.sheenRoughnessMap,fe=!!x.specularMap,le=!!x.specularColorMap,De=!!x.specularIntensityMap,Ge=X&&!!x.transmissionMap,N=X&&!!x.thicknessMap,ue=!!x.gradientMap,te=!!x.alphaMap,ge=x.alphaTest>0,xe=!!x.alphaHash,ie=!!x.extensions,oe=$i;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=r.toneMapping);let re={shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Ie,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:de,batchingColor:de&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:Ce,envMap:Le,envMapMode:Le&&J.mapping,envMapCubeUVHeight:O,aoMap:$e,lightMap:et,bumpMap:H,normalMap:at,displacementMap:St,emissiveMap:kt,normalMapObjectSpace:at&&x.normalMapType===mx,normalMapTangentSpace:at&&x.normalMapType===oc,packedNormalMap:at&&x.normalMapType===oc&&ZT(x.normalMap.format),metalnessMap:Ze,roughnessMap:mt,anisotropy:F,anisotropyMap:K,clearcoat:Ft,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Q,dispersion:Ye,retroreflection:P,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:me,specularMap:fe,specularColorMap:le,specularIntensityMap:De,transmission:X,transmissionMap:Ge,thicknessMap:N,gradientMap:ue,opaque:x.transparent===!1&&x.blending===bo&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:xe,combine:x.combine,mapUv:Ue&&g(x.map.channel),aoMapUv:$e&&g(x.aoMap.channel),lightMapUv:et&&g(x.lightMap.channel),bumpMapUv:H&&g(x.bumpMap.channel),normalMapUv:at&&g(x.normalMap.channel),displacementMapUv:St&&g(x.displacementMap.channel),emissiveMapUv:kt&&g(x.emissiveMap.channel),metalnessMapUv:Ze&&g(x.metalnessMap.channel),roughnessMapUv:mt&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:Ge&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(at||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ue||te),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&at===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function p(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(M,x),S(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let M=f[x.type],R;if(M){let D=xr[M];R=Rx.clone(D.uniforms)}else R=x.uniforms;return R}function y(x,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new YT(r,M,x,i),c.push(R),u.set(M,R)),R}function b(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:E}}function JT(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function jT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Zx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kx(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,p,m){let S=r[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=p,S.group=m),e++,S}function l(h,f,g,_,p,m,S){S.reversedDepth===!0&&(p=-p);let A=o(h,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):t.push(A)}function c(h,f,g,_,p,m){let S=o(h,f,g,_,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||jT),n.length>1&&n.sort(f||Zx),i.length>1&&i.sort(f||Zx)}function d(){for(let h=e,f=r.length;h<f;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function QT(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Kx,r.set(n,[a])):i>=s.length?(a=new Kx,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function eE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ze};break;case"SpotLight":t={position:new G,direction:new G,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function tE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var nE=0;function iE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rE(r){let e=new eE,t=tE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,s=new je,a=new je;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,S=0,A=0,y=0,b=0,w=0,E=0,x=0,M=0,R=0;c.sort(iE);for(let L=0,V=c.length;L<V;L++){let I=c[L],B=I.color,Y=I.intensity,z=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ss?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*Y,d+=B.g*Y,h+=B.b*Y;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],Y);R++}else if(I.isSunLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=J;let be=C.getViewportCount();for(let Se=0;Se<be;Se++)n.sunShadowMatrix[_+Se]=C.getMatrix(Se),n.sunShadowCascade[_+Se]=C._cascadeData[Se];_+=be,g++}n.sun[f]=O,f++}else if(I.isDirectionalLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=O,p++}else if(I.isSpotLight){let O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(B).multiplyScalar(Y),O.distance=z,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[S]=O;let C=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,C.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[S]=C.matrix,I.castShadow){let j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=J,E++}S++}else if(I.isRectAreaLight){let O=e.get(I);O.color.copy(B).multiplyScalar(Y),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=O,A++}else if(I.isPointLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=O,m++}else if(I.isHemisphereLight){let O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(Y),O.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[y]=O,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==E||D.numSpotMaps!==x||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=A,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=E,D.numSpotMaps=x,D.numLightProbes=R,n.version=nE++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,p=0,m=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let y=c[S];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(y.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Jx(r){let e=new rE(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function sE(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Jx(r),e.set(i,[o])):s>=a.length?(o=new Jx(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lE=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],cE=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],jx=new je,cc=new G,Yp=new G;function uE(r,e,t){let n=new po,i=new qe,s=new qe,a=new bt,o=new $u,l=new Zu,c={},u=t.maxTextureSize,d={[mr]:wn,[wn]:mr,[Ui]:Ui},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:aE,fragmentShader:oE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let m=this.type;this.render=function(w,E,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===X_&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kl);let M=r.getRenderTarget(),R=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(gr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=m!==this.type;V&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let Y=w[I],z=Y.shadow;if(z===void 0){Be("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let J=z.getFrameExtents();i.multiply(J),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,z.mapSize.y=s.y));let O=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===yo){if(Y.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new oi(i.x,i.y,{format:Ss,type:Ji,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new gs(i.x,i.y,Mi),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=lr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt}else Y.isPointLight?(z.map=new jh(i.x),z.map.depthTexture=new qu(i.x,Ki)):(z.map=new oi(i.x,i.y),z.map.depthTexture=new gs(i.x,i.y,Ki)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=lr,this.type===Kl?(z.map.depthTexture.compareFunction=O?Zh:$h,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let C=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Y.isPointLight!==!0&&z.updateMatrices(Y,x);for(let j=0;j<C;j++){let be=z.getCamera(j);if(Y.isPointLight){let Se=z.camera,He=z.matrix,Ie=Y.distance||Se.far;Ie!==Se.far&&(Se.far=Ie,Se.updateProjectionMatrix()),cc.setFromMatrixPosition(Y.matrixWorld),Se.position.copy(cc),Yp.copy(Se.position),Yp.add(lE[j]),Se.up.copy(cE[j]),Se.lookAt(Yp),Se.updateMatrixWorld(),He.makeTranslation(-cc.x,-cc.y,-cc.z),jx.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),z._frustum.setFromProjectionMatrix(jx,Se.coordinateSystem,Se.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,j),r.clear();else{j===0&&(r.setRenderTarget(z.map),r.clear());let Se=z.getViewport(j);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),L.viewport(a)}n=z.getFrustum(j),y(E,x,be,Y,this.type)}z.isPointLightShadow!==!0&&this.type===yo&&S(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,R,D)};function S(w,E){let x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new oi(i.x,i.y,{format:Ss,type:Ji}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function A(w,E,x,M){let R=null,D=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=R.uuid,V=E.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let B=I[V];B===void 0&&(B=R.clone(),I[V]=B,E.addEventListener("dispose",b)),R=B}if(R.visible=E.visible,R.wireframe=E.wireframe,M===yo?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=r.properties.get(R);L.light=x}return R}function y(w,E,x,M,R){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===yo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let V=e.update(w),I=w.material;if(Array.isArray(I)){let B=V.groups;for(let Y=0,z=B.length;Y<z;Y++){let J=B[Y],O=I[J.materialIndex];if(O&&O.visible){let C=A(w,O,M,R);w.onBeforeShadow(r,w,E,x,V,C,J),r.renderBufferDirect(x,null,V,C,w,J),w.onAfterShadow(r,w,E,x,V,C,J)}}}else if(I.visible){let B=A(w,I,M,R);w.onBeforeShadow(r,w,E,x,V,B,null),r.renderBufferDirect(x,null,V,B,w,null),w.onAfterShadow(r,w,E,x,V,B,null)}}let L=w.children;for(let V=0,I=L.length;V<I;V++)y(L[V],E,x,M,R)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let M=c[x],R=w.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function hE(r,e){function t(){let N=!1,ue=new bt,te=null,ge=new bt(0,0,0,0);return{setMask:function(xe){te!==xe&&!N&&(r.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ie,oe,re,Oe){Oe===!0&&(xe*=re,ie*=re,oe*=re),ue.set(xe,ie,oe,re),ge.equals(ue)===!1&&(r.clearColor(xe,ie,oe,re),ge.copy(ue))},reset:function(){N=!1,te=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,ue=!1,te=null,ge=null,xe=null;return{setReversed:function(ie){if(ue!==ie){let oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;let re=xe;xe=null,this.setClear(re)}},getReversed:function(){return ue},setTest:function(ie){ie?ee(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ie){te!==ie&&!N&&(r.depthMask(ie),te=ie)},setFunc:function(ie){if(ue&&(ie=Ex[ie]),ge!==ie){switch(ie){case Nu:r.depthFunc(r.NEVER);break;case Uu:r.depthFunc(r.ALWAYS);break;case Ou:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case Fu:r.depthFunc(r.EQUAL);break;case Bu:r.depthFunc(r.GEQUAL);break;case ku:r.depthFunc(r.GREATER);break;case zu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=ie}},setLocked:function(ie){N=ie},setClear:function(ie){xe!==ie&&(xe=ie,ue&&(ie=1-ie),r.clearDepth(ie))},reset:function(){N=!1,te=null,ge=null,xe=null,ue=!1}}}function i(){let N=!1,ue=null,te=null,ge=null,xe=null,ie=null,oe=null,re=null,Oe=null;return{setTest:function(se){N||(se?ee(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(se){ue!==se&&!N&&(r.stencilMask(se),ue=se)},setFunc:function(se,Ve,Ae){(te!==se||ge!==Ve||xe!==Ae)&&(r.stencilFunc(se,Ve,Ae),te=se,ge=Ve,xe=Ae)},setOp:function(se,Ve,Ae){(ie!==se||oe!==Ve||re!==Ae)&&(r.stencilOp(se,Ve,Ae),ie=se,oe=Ve,re=Ae)},setLocked:function(se){N=se},setClear:function(se){Oe!==se&&(r.clearStencil(se),Oe=se)},reset:function(){N=!1,ue=null,te=null,ge=null,xe=null,ie=null,oe=null,re=null,Oe=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,S=null,A=null,y=null,b=null,w=null,E=null,x=new ze(0,0,0),M=0,R=!1,D=null,L=null,V=null,I=null,B=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=J>=2);let C=null,j={},be=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),He=new bt().fromArray(be),Ie=new bt().fromArray(Se);function We(N,ue,te,ge){let xe=new Uint8Array(4),ie=r.createTexture();r.bindTexture(N,ie),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<te;oe++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(ue+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ie}let Z={};Z[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(no),H(!1),at(up),ee(r.CULL_FACE),$e(gr);function ee(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function he(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function ke(N,ue){return h[N]!==ue?(r.bindFramebuffer(N,ue),h[N]=ue,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function de(N,ue){let te=g,ge=!1;if(N){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));let xe=N.textures;if(te.length!==xe.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,oe=xe.length;ie<oe;ie++)te[ie]=r.COLOR_ATTACHMENT0+ie;te.length=xe.length,ge=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,ge=!0);ge&&r.drawBuffers(te)}function Ue(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Ce={[ra]:r.FUNC_ADD,[Y_]:r.FUNC_SUBTRACT,[$_]:r.FUNC_REVERSE_SUBTRACT};Ce[Z_]=r.MIN,Ce[K_]=r.MAX;let Le={[J_]:r.ZERO,[j_]:r.ONE,[Q_]:r.SRC_COLOR,[fp]:r.SRC_ALPHA,[sx]:r.SRC_ALPHA_SATURATE,[ix]:r.DST_COLOR,[tx]:r.DST_ALPHA,[ex]:r.ONE_MINUS_SRC_COLOR,[pp]:r.ONE_MINUS_SRC_ALPHA,[rx]:r.ONE_MINUS_DST_COLOR,[nx]:r.ONE_MINUS_DST_ALPHA,[ax]:r.CONSTANT_COLOR,[ox]:r.ONE_MINUS_CONSTANT_COLOR,[lx]:r.CONSTANT_ALPHA,[cx]:r.ONE_MINUS_CONSTANT_ALPHA};function $e(N,ue,te,ge,xe,ie,oe,re,Oe,se){if(N===gr){p===!0&&(he(r.BLEND),p=!1);return}if(p===!1&&(ee(r.BLEND),p=!0),N!==q_){if(N!==m||se!==R){if((S!==ra||b!==ra)&&(r.blendEquation(r.FUNC_ADD),S=ra,b=ra),se)switch(N){case bo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jl:r.blendFunc(r.ONE,r.ONE);break;case hp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case bo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hp:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}A=null,y=null,w=null,E=null,x.set(0,0,0),M=0,m=N,R=se}return}xe=xe||ue,ie=ie||te,oe=oe||ge,(ue!==S||xe!==b)&&(r.blendEquationSeparate(Ce[ue],Ce[xe]),S=ue,b=xe),(te!==A||ge!==y||ie!==w||oe!==E)&&(r.blendFuncSeparate(Le[te],Le[ge],Le[ie],Le[oe]),A=te,y=ge,w=ie,E=oe),(re.equals(x)===!1||Oe!==M)&&(r.blendColor(re.r,re.g,re.b,Oe),x.copy(re),M=Oe),m=N,R=!1}function et(N,ue){N.side===Ui?he(r.CULL_FACE):ee(r.CULL_FACE);let te=N.side===wn;ue&&(te=!te),H(te),N.blending===bo&&N.transparent===!1?$e(gr):$e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function H(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function at(N){N!==H_?(ee(r.CULL_FACE),N!==L&&(N===up?r.cullFace(r.BACK):N===W_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),L=N}function St(N){N!==V&&(z&&r.lineWidth(N),V=N)}function kt(N,ue,te){N?(ee(r.POLYGON_OFFSET_FILL),(I!==ue||B!==te)&&(I=ue,B=te,a.getReversed()&&(ue=-ue),r.polygonOffset(ue,te))):he(r.POLYGON_OFFSET_FILL)}function Ze(N){N?ee(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function mt(N){N===void 0&&(N=r.TEXTURE0+Y-1),C!==N&&(r.activeTexture(N),C=N)}function F(N,ue,te){te===void 0&&(C===null?te=r.TEXTURE0+Y-1:te=C);let ge=j[te];ge===void 0&&(ge={type:void 0,texture:void 0},j[te]=ge),(ge.type!==N||ge.texture!==ue)&&(C!==te&&(r.activeTexture(te),C=te),r.bindTexture(N,ue||Z[N]),ge.type=N,ge.texture=ue)}function Ft(){let N=j[C];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ye(){try{r.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function v(){try{r.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function k(){try{r.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ce(){try{r.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ae(){try{r.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Q(){try{r.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ne(){try{r.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function pe(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Ee(N,ue){d[N]!==ue&&(r.pixelStorei(N,ue),d[N]=ue)}function me(N){He.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),He.copy(N))}function fe(N){Ie.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Ie.copy(N))}function le(N,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let ge=te.get(N);ge===void 0&&(ge=r.getUniformBlockIndex(ue,N.name),te.set(N,ge))}function De(N,ue){let ge=c.get(ue).get(N);l.get(ue)!==ge&&(r.uniformBlockBinding(ue,ge,N.__bindingPointIndex),l.set(ue,ge))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},C=null,j={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,S=null,A=null,y=null,b=null,w=null,E=null,x=new ze(0,0,0),M=0,R=!1,D=null,L=null,V=null,I=null,B=null,He.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:he,bindFramebuffer:ke,drawBuffers:de,useProgram:Ue,setBlending:$e,setMaterial:et,setFlipSided:H,setCullFace:at,setLineWidth:St,setPolygonOffset:kt,setScissorTest:Ze,activeTexture:mt,bindTexture:F,unbindTexture:Ft,compressedTexImage2D:Ye,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:Ee,getParameter:pe,updateUBOMapping:le,uniformBlockBinding:De,texStorage2D:ce,texStorage3D:ae,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:me,viewport:fe,reset:Ge}}function dE(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return g?new OffscreenCanvas(P,v):so("canvas")}function p(P,v,k){let X=1,K=Ye(P);if((K.width>k||K.height>k)&&(X=k/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let ce=Math.floor(X*K.width),ae=Math.floor(X*K.height);h===void 0&&(h=_(ce,ae));let Q=v?_(ce,ae):h;return Q.width=ce,Q.height=ae,Q.getContext("2d").drawImage(P,0,0,ce,ae),Be("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+ae+")."),Q}else return"data"in P&&Be("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,v,k,X,K,ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;X&&(ae=e.get("EXT_texture_norm16"),ae||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===r.RED&&(k===r.FLOAT&&(Q=r.R32F),k===r.HALF_FLOAT&&(Q=r.R16F),k===r.UNSIGNED_BYTE&&(Q=r.R8),k===r.UNSIGNED_SHORT&&ae&&(Q=ae.R16_EXT),k===r.SHORT&&ae&&(Q=ae.R16_SNORM_EXT)),v===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.R8UI),k===r.UNSIGNED_SHORT&&(Q=r.R16UI),k===r.UNSIGNED_INT&&(Q=r.R32UI),k===r.BYTE&&(Q=r.R8I),k===r.SHORT&&(Q=r.R16I),k===r.INT&&(Q=r.R32I)),v===r.RG&&(k===r.FLOAT&&(Q=r.RG32F),k===r.HALF_FLOAT&&(Q=r.RG16F),k===r.UNSIGNED_BYTE&&(Q=r.RG8),k===r.UNSIGNED_SHORT&&ae&&(Q=ae.RG16_EXT),k===r.SHORT&&ae&&(Q=ae.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RG8UI),k===r.UNSIGNED_SHORT&&(Q=r.RG16UI),k===r.UNSIGNED_INT&&(Q=r.RG32UI),k===r.BYTE&&(Q=r.RG8I),k===r.SHORT&&(Q=r.RG16I),k===r.INT&&(Q=r.RG32I)),v===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),k===r.UNSIGNED_INT&&(Q=r.RGB32UI),k===r.BYTE&&(Q=r.RGB8I),k===r.SHORT&&(Q=r.RGB16I),k===r.INT&&(Q=r.RGB32I)),v===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),k===r.UNSIGNED_INT&&(Q=r.RGBA32UI),k===r.BYTE&&(Q=r.RGBA8I),k===r.SHORT&&(Q=r.RGBA16I),k===r.INT&&(Q=r.RGBA32I)),v===r.RGB&&(k===r.UNSIGNED_SHORT&&ae&&(Q=ae.RGB16_EXT),k===r.SHORT&&ae&&(Q=ae.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),v===r.RGBA){let ne=ce?Al:st.getTransfer(K);k===r.FLOAT&&(Q=r.RGBA32F),k===r.HALF_FLOAT&&(Q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Q=ne===xt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ae&&(Q=ae.RGBA16_EXT),k===r.SHORT&&ae&&(Q=ae.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(P,v){let k;return P?v===null||v===Ki||v===wo?k=r.DEPTH24_STENCIL8:v===Mi?k=r.DEPTH32F_STENCIL8:v===Mo&&(k=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ki||v===wo?k=r.DEPTH_COMPONENT24:v===Mi?k=r.DEPTH_COMPONENT32F:v===Mo&&(k=r.DEPTH_COMPONENT16),k}function w(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function E(P){let v=P.target;v.removeEventListener("dispose",E),M(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),D(v)}function M(P){let v=n.get(P);if(v.__webglInit===void 0)return;let k=P.source,X=f.get(k);if(X){let K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(P),Object.keys(X).length===0&&f.delete(k)}n.remove(P)}function R(P){let v=n.get(P);r.deleteTexture(v.__webglTexture);let k=P.source,X=f.get(k);delete X[v.__cacheKey],a.memory.textures--}function D(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)r.deleteFramebuffer(v.__webglFramebuffer[X][K]);else r.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)r.deleteFramebuffer(v.__webglFramebuffer[X]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=P.textures;for(let X=0,K=k.length;X<K;X++){let ce=n.get(k[X]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(P)}let L=0;function V(){L=0}function I(){return L}function B(P){L=P}function Y(){let P=L;return P>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function z(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function J(P,v){let k=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let X=P.image;if(X===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,P,v);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+v)}function O(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){he(k,P,v);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+v)}function C(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){he(k,P,v);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+v)}function j(P,v){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){ke(k,P,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+v)}let be={[fs]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[io]:r.MIRRORED_REPEAT},Se={[Jt]:r.NEAREST,[uh]:r.NEAREST_MIPMAP_NEAREST,[aa]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[So]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},He={[_x]:r.NEVER,[Sx]:r.ALWAYS,[xx]:r.LESS,[$h]:r.LEQUAL,[vx]:r.EQUAL,[Zh]:r.GEQUAL,[yx]:r.GREATER,[bx]:r.NOTEQUAL};function Ie(P,v){if(v.type===Mi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===So||v.magFilter===aa||v.magFilter===Zi||v.minFilter===jt||v.minFilter===So||v.minFilter===aa||v.minFilter===Zi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,be[v.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,be[v.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,be[v.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Se[v.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,He[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==aa&&v.minFilter!==Zi||v.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function We(P,v){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",E));let X=v.source,K=f.get(X);K===void 0&&(K={},f.set(X,K));let ce=z(v);if(ce!==P.__cacheKey){K[ce]===void 0&&(K[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[ce].usedTimes++;let ae=K[P.__cacheKey];ae!==void 0&&(K[P.__cacheKey].usedTimes--,ae.usedTimes===0&&R(v)),P.__cacheKey=ce,P.__webglTexture=K[ce].texture}return k}function Z(P,v,k){return Math.floor(Math.floor(P/k)/v)}function ee(P,v,k,X){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,k,X,v.data);else{ce.sort((Ee,me)=>Ee.start-me.start);let ae=0;for(let Ee=1;Ee<ce.length;Ee++){let me=ce[ae],fe=ce[Ee],le=me.start+me.count,De=Z(fe.start,v.width,4),Ge=Z(me.start,v.width,4);fe.start<=le+1&&De===Ge&&Z(fe.start+fe.count-1,v.width,4)===De?me.count=Math.max(me.count,fe.start+fe.count-me.start):(++ae,ce[ae]=fe)}ce.length=ae+1;let Q=t.getParameter(r.UNPACK_ROW_LENGTH),ne=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,me=ce.length;Ee<me;Ee++){let fe=ce[Ee],le=Math.floor(fe.start/4),De=Math.ceil(fe.count/4),Ge=le%v.width,N=Math.floor(le/v.width),ue=De,te=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,Ge,N,ue,te,k,X,v.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function he(P,v,k){let X=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=r.TEXTURE_3D);let K=We(P,v),ce=v.source;t.bindTexture(X,P.__webglTexture,r.TEXTURE0+k);let ae=n.get(ce);if(ce.version!==ae.__version||K===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let te=st.getPrimaries(st.workingColorSpace),ge=v.colorSpace===Wr?null:st.getPrimaries(v.colorSpace),xe=v.colorSpace===Wr||te===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=p(v.image,!1,i.maxTextureSize);ne=Ft(v,ne);let pe=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),me=y(v.internalFormat,pe,Ee,v.normalized,v.colorSpace,v.isVideoTexture);Ie(X,v);let fe,le=v.mipmaps,De=v.isVideoTexture!==!0,Ge=ae.__version===void 0||K===!0,N=ce.dataReady,ue=w(v,ne);if(v.isDepthTexture)me=b(v.format===bs,v.type),Ge&&(De?t.texStorage2D(r.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,me,ne.width,ne.height,0,pe,Ee,null));else if(v.isDataTexture)if(le.length>0){De&&Ge&&t.texStorage2D(r.TEXTURE_2D,ue,me,le[0].width,le[0].height);for(let te=0,ge=le.length;te<ge;te++)fe=le[te],De?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,pe,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,te,me,fe.width,fe.height,0,pe,Ee,fe.data);v.generateMipmaps=!1}else De?(Ge&&t.texStorage2D(r.TEXTURE_2D,ue,me,ne.width,ne.height),N&&ee(v,ne,pe,Ee)):t.texImage2D(r.TEXTURE_2D,0,me,ne.width,ne.height,0,pe,Ee,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,me,le[0].width,le[0].height,ne.depth);for(let te=0,ge=le.length;te<ge;te++)if(fe=le[te],v.format!==wi)if(pe!==null)if(De){if(N)if(v.layerUpdates.size>0){let xe=Op(fe.width,fe.height,v.format,v.type);for(let ie of v.layerUpdates){let oe=fe.data.subarray(ie*xe/fe.data.BYTES_PER_ELEMENT,(ie+1)*xe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,ie,fe.width,fe.height,1,pe,oe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,pe,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,me,fe.width,fe.height,ne.depth,0,fe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,pe,Ee,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,me,fe.width,fe.height,ne.depth,0,pe,Ee,fe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{De&&Ge&&t.texStorage2D(r.TEXTURE_2D,ue,me,le[0].width,le[0].height);for(let te=0,ge=le.length;te<ge;te++)fe=le[te],v.format!==wi?pe!==null?De?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,pe,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,me,fe.width,fe.height,0,fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,pe,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,te,me,fe.width,fe.height,0,pe,Ee,fe.data)}else if(v.isDataArrayTexture)if(De){if(Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,me,ne.width,ne.height,ne.depth),N)if(v.layerUpdates.size>0){let te=Op(ne.width,ne.height,v.format,v.type);for(let ge of v.layerUpdates){let xe=ne.data.subarray(ge*te/ne.data.BYTES_PER_ELEMENT,(ge+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,ne.width,ne.height,1,pe,Ee,xe)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ee,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,pe,Ee,ne.data);else if(v.isData3DTexture)De?(Ge&&t.texStorage3D(r.TEXTURE_3D,ue,me,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ee,ne.data)):t.texImage3D(r.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,pe,Ee,ne.data);else if(v.isFramebufferTexture){if(Ge)if(De)t.texStorage2D(r.TEXTURE_2D,ue,me,ne.width,ne.height);else{let te=ne.width,ge=ne.height;for(let xe=0;xe<ue;xe++)t.texImage2D(r.TEXTURE_2D,xe,me,te,ge,0,pe,Ee,null),te>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let te=r.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(v),te.onpaint=ge=>{let xe=ge.changedElements;for(let ie of d)xe.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ne);else{let xe=r.RGBA,ie=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ie,oe,ne)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(le.length>0){if(De&&Ge){let te=Ye(le[0]);t.texStorage2D(r.TEXTURE_2D,ue,me,te.width,te.height)}for(let te=0,ge=le.length;te<ge;te++)fe=le[te],De?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,pe,Ee,fe):t.texImage2D(r.TEXTURE_2D,te,me,pe,Ee,fe);v.generateMipmaps=!1}else if(De){if(Ge){let te=Ye(ne);t.texStorage2D(r.TEXTURE_2D,ue,me,te.width,te.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Ee,ne)}else t.texImage2D(r.TEXTURE_2D,0,me,pe,Ee,ne);m(v)&&S(X),ae.__version=ce.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ke(P,v,k){if(v.image.length!==6)return;let X=We(P,v),K=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);let ce=n.get(K);if(K.version!==ce.__version||X===!0){t.activeTexture(r.TEXTURE0+k);let ae=st.getPrimaries(st.workingColorSpace),Q=v.colorSpace===Wr?null:st.getPrimaries(v.colorSpace),ne=v.colorSpace===Wr||ae===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!pe&&!Ee?me[ie]=p(v.image[ie],!0,i.maxCubemapSize):me[ie]=Ee?v.image[ie].image:v.image[ie],me[ie]=Ft(v,me[ie]);let fe=me[0],le=s.convert(v.format,v.colorSpace),De=s.convert(v.type),Ge=y(v.internalFormat,le,De,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,ue=ce.__version===void 0||X===!0,te=K.dataReady,ge=w(v,fe);Ie(r.TEXTURE_CUBE_MAP,v);let xe;if(pe){N&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ge,fe.width,fe.height);for(let ie=0;ie<6;ie++){xe=me[ie].mipmaps;for(let oe=0;oe<xe.length;oe++){let re=xe[oe];v.format!==wi?le!==null?N?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Ge,re.width,re.height,0,re.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,De,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Ge,re.width,re.height,0,le,De,re.data)}}}else{if(xe=v.mipmaps,N&&ue){xe.length>0&&ge++;let ie=Ye(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,le,De,me[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,me[ie].width,me[ie].height,0,le,De,me[ie].data);for(let oe=0;oe<xe.length;oe++){let Oe=xe[oe].image[ie].image;N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,Oe.width,Oe.height,le,De,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Ge,Oe.width,Oe.height,0,le,De,Oe.data)}}else{N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le,De,me[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,le,De,me[ie]);for(let oe=0;oe<xe.length;oe++){let re=xe[oe];N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,le,De,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Ge,le,De,re.image[ie])}}}m(v)&&S(r.TEXTURE_CUBE_MAP),ce.__version=K.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function de(P,v,k,X,K,ce){let ae=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),ne=y(k.internalFormat,ae,Q,k.normalized,k.colorSpace),pe=n.get(v),Ee=n.get(k);if(Ee.__renderTarget=v,!pe.__hasExternalTextures){let me=Math.max(1,v.width>>ce),fe=Math.max(1,v.height>>ce);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,ce,ne,me,fe,v.depth,0,ae,Q,null):t.texImage2D(K,ce,ne,me,fe,0,ae,Q,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,K,Ee.__webglTexture,0,Ze(v)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,K,Ee.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,v,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),v.depthBuffer){let X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,ce=b(v.stencilBuffer,K),ae=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze(v),ce,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze(v),ce,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ce,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,P)}else{let X=v.textures;for(let K=0;K<X.length;K++){let ce=X[K],ae=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),ne=y(ce.internalFormat,ae,Q,ce.normalized,ce.colorSpace);mt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze(v),ne,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze(v),ne,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ne,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(P,v,k){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,v.depthTexture);let pe=s.convert(v.depthTexture.format),Ee=s.convert(v.depthTexture.type),me;v.depthTexture.format===lr?me=r.DEPTH_COMPONENT24:v.depthTexture.format===bs&&(me=r.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,v.width,v.height,0,pe,Ee,null)}}else J(v.depthTexture,0);let ce=K.__webglTexture,ae=Ze(v),Q=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ne=v.depthTexture.format===bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===lr)mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,ce,0);else if(v.depthTexture.format===bs)mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(P){let v=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Ce(v.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?Ce(v.__webglFramebuffer[0],P,0):Ce(v.__webglFramebuffer,P,0)}else if(k){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=r.createRenderbuffer(),Ue(v.__webglDepthbuffer[X],P,!1);else{let K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ce)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ue(v.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,v,k){let X=n.get(P);v!==void 0&&de(X.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Le(P)}function et(P){let v=P.texture,k=n.get(P),X=n.get(v);P.addEventListener("dispose",x);let K=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=v.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let ne=0;ne<v.mipmaps.length;ne++)k.__webglFramebuffer[Q][ne]=r.createFramebuffer()}else k.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[Q]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ae)for(let Q=0,ne=K.length;Q<ne;Q++){let pe=n.get(K[Q]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&mt(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let ne=K[Q];k.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let pe=s.convert(ne.format,ne.colorSpace),Ee=s.convert(ne.type),me=y(ne.internalFormat,pe,Ee,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),fe=Ze(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,me,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)de(k.__webglFramebuffer[Q][ne],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else de(k.__webglFramebuffer[Q],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(v)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,ne=K.length;Q<ne;Q++){let pe=K[Q],Ee=n.get(pe),me=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,Ee.__webglTexture),Ie(me,pe),de(k.__webglFramebuffer,P,pe,r.COLOR_ATTACHMENT0+Q,me,0),m(pe)&&S(me)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,X.__webglTexture),Ie(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)de(k.__webglFramebuffer[ne],P,v,r.COLOR_ATTACHMENT0,Q,ne);else de(k.__webglFramebuffer,P,v,r.COLOR_ATTACHMENT0,Q,0);m(v)&&S(Q),t.unbindTexture()}P.depthBuffer&&Le(P)}function H(P){let v=P.textures;for(let k=0,X=v.length;k<X;k++){let K=v[k];if(m(K)){let ce=A(P),ae=n.get(K).__webglTexture;t.bindTexture(ce,ae),S(ce),t.unbindTexture()}}}let at=[],St=[];function kt(P){if(P.samples>0){if(mt(P)===!1){let v=P.textures,k=P.width,X=P.height,K=r.COLOR_BUFFER_BIT,ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(P),Q=v.length>1;if(Q)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);let Ee=n.get(v[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,k,X,0,0,k,X,K,r.NEAREST),l===!0&&(at.length=0,St.length=0,at.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(at.push(ce),St.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,St)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[pe]);let Ee=n.get(v[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Ze(P){return Math.min(i.maxSamples,P.samples)}function mt(P){let v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(P){let v=a.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function Ft(P,v){let k=P.colorSpace,X=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==ei&&k!==Wr&&(st.getTransfer(k)===xt?(X!==wi||K!==ui)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),v}function Ye(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=O,this.setTexture3D=C,this.setTextureCube=j,this.rebindTextures=$e,this.setupRenderTarget=et,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=de,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fE(r,e){function t(n,i=Wr){let s,a=st.getTransfer(i);if(n===ui)return r.UNSIGNED_BYTE;if(n===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Tp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sp)return r.BYTE;if(n===Mp)return r.SHORT;if(n===Mo)return r.UNSIGNED_SHORT;if(n===hh)return r.INT;if(n===Ki)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Ji)return r.HALF_FLOAT;if(n===Ep)return r.ALPHA;if(n===Ap)return r.RGB;if(n===wi)return r.RGBA;if(n===lr)return r.DEPTH_COMPONENT;if(n===bs)return r.DEPTH_STENCIL;if(n===ph)return r.RED;if(n===mh)return r.RED_INTEGER;if(n===Ss)return r.RG;if(n===gh)return r.RG_INTEGER;if(n===_h)return r.RGBA_INTEGER;if(n===ec||n===tc||n===nc||n===ic)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===vh||n===yh||n===bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===Mh||n===wh||n===Th||n===Eh||n===rc||n===Ah)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sh||n===Mh)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Th)return s.COMPRESSED_R11_EAC;if(n===Eh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===rc)return s.COMPRESSED_RG11_EAC;if(n===Ah)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===zh||n===Vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ch)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ph)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gh||n===Hh||n===Wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Gh)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===qh||n===sc||n===Yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var pE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Si({vertexShader:pE,fragmentShader:mE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new kl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nm=class extends cr{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding!="undefined",p=new tm,m={},S=t.getContextAttributes(),A=null,y=null,b=[],w=[],E=new qe,x=null,M=null,R=new on;R.viewport=new bt;let D=new on;D.viewport=new bt;let L=[R,D],V=new rh,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=b[Z];return ee===void 0&&(ee=new co,b[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=b[Z];return ee===void 0&&(ee=new co,b[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=b[Z];return ee===void 0&&(ee=new co,b[Z]=ee),ee.getHandSpace()};function Y(Z){let ee=w.indexOf(Z.inputSource);if(ee===-1)return;let he=b[ee];he!==void 0&&(he.update(Z.inputSource,Z.frame,c||a),he.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",J);for(let Z=0;Z<b.length;Z++){let ee=w[Z];ee!==null&&(w[Z]=null,b[Z].disconnect(ee))}I=null,B=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(A),f=null,h=null,d=null,i=null,y=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),M!==null){let Z=M.camera;Z.fov=M.fov,Z.zoom=M.zoom,Z.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",z),i.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ke=null,de=null;S.depth&&(de=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?bs:lr,ke=S.stencil?wo:Ki);let Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ue),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new oi(h.textureWidth,h.textureHeight,{format:wi,type:ui,depthTexture:new gs(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new oi(f.framebufferWidth,f.framebufferHeight,{format:wi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(Z){for(let ee=0;ee<Z.removed.length;ee++){let he=Z.removed[ee],ke=w.indexOf(he);ke>=0&&(w[ke]=null,b[ke].disconnect(he))}for(let ee=0;ee<Z.added.length;ee++){let he=Z.added[ee],ke=w.indexOf(he);if(ke===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=w.length){w.push(he),ke=Ue;break}else if(w[Ue]===null){w[Ue]=he,ke=Ue;break}if(ke===-1)break}let de=b[ke];de&&de.connect(he)}}let O=new G,C=new G;function j(Z,ee,he){O.setFromMatrixPosition(ee.matrixWorld),C.setFromMatrixPosition(he.matrixWorld);let ke=O.distanceTo(C),de=ee.projectionMatrix.elements,Ue=he.projectionMatrix.elements,Ce=de[14]/(de[10]-1),Le=de[14]/(de[10]+1),$e=(de[9]+1)/de[5],et=(de[9]-1)/de[5],H=(de[8]-1)/de[0],at=(Ue[8]+1)/Ue[0],St=Ce*H,kt=Ce*at,Ze=ke/(-H+at),mt=Ze*-H;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(Ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),de[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=Ce+Ze,Ft=Le+Ze,Ye=St-mt,P=kt+(ke-mt),v=$e*Le/Ft*F,k=et*Le/Ft*F;Z.projectionMatrix.makePerspective(Ye,P,v,k,F,Ft),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function be(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,he=Z.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(he=p.depthFar)),V.near=D.near=R.near=ee,V.far=D.far=R.far=he,(I!==V.near||B!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,B=V.far),V.layers.mask=Z.layers.mask|6,R.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let ke=Z.parent,de=V.cameras;be(V,ke);for(let Ue=0;Ue<de.length;Ue++)be(de[Ue],ke);de.length===2?j(V,R,D):V.projectionMatrix.copy(R.projectionMatrix),M===null&&Z.isPerspectiveCamera&&(M={camera:Z,fov:Z.fov,zoom:Z.zoom}),Se(Z,V,ke)};function Se(Z,ee,he){he===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(he.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ks*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(Z){return m[Z]};let He=null;function Ie(Z,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){let he=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;he.length!==V.cameras.length&&(V.cameras.length=0,ke=!0);for(let Le=0;Le<he.length;Le++){let $e=he[Le],et=null;if(f!==null)et=f.getViewport($e);else{let at=d.getViewSubImage(h,$e);et=at.viewport,Le===0&&(e.setRenderTargetTextures(y,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(y))}let H=L[Le];H===void 0&&(H=new on,H.layers.enable(Le),H.viewport=new bt,L[Le]=H),H.matrix.fromArray($e.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray($e.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(et.x,et.y,et.width,et.height),Le===0&&(V.matrix.copy(H.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ke===!0&&V.cameras.push(H)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Le=d.getDepthInformation(he[0]);Le&&Le.isValid&&Le.texture&&p.init(Le,i.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Le=0;Le<he.length;Le++){let $e=he[Le].camera;if($e){let et=m[$e];et||(et=new Bl,m[$e]=et);let H=d.getCameraImage($e);et.sourceTexture=H}}}}for(let he=0;he<b.length;he++){let ke=w[he],de=b[he];ke!==null&&de!==void 0&&de.update(ke,ee,c||a)}He&&He(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let We=new Qx;We.setAnimationLoop(Ie),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}},gE=new je,sv=new Je;sv.set(-1,0,0,0,1,0,0,0,1);function _E(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Dp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),A=S.envMap,y=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(gE.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sv),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xE(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=i[y.id];w===void 0&&(p(y),w=u(y),i[y.id]=w,y.addEventListener("dispose",S));let E=b.program;n.updateUBOMapping(y,E);let x=e.render.frame;s[y.id]!==x&&(h(y),s[y.id]=x)}function u(y){let b=d();y.__bindingPointIndex=b;let w=r.createBuffer(),E=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=i[y.id],w=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let x=0,M=w.length;x<M;x++){let R=w[x];if(Array.isArray(R))for(let D=0,L=R.length;D<L;D++)f(R[D],x,D,E);else f(R,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,b,w,E){if(_(y,b,w,E)===!0){let x=y.__offset,M=y.value;if(Array.isArray(M)){let R=0;for(let D=0;D<M.length;D++){let L=M[D],V=m(L);g(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function _(y,b,w,E){let x=y.value,M=b+"_"+w;if(E[M]===void 0)return typeof x=="number"||typeof x=="boolean"?E[M]=x:ArrayBuffer.isView(x)?E[M]=x.slice():E[M]=x.clone(),!0;{let R=E[M];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(y){let b=y.uniforms,w=0,E=16;for(let M=0,R=b.length;M<R;M++){let D=Array.isArray(b[M])?b[M]:[b[M]];for(let L=0,V=D.length;L<V;L++){let I=D[L],B=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,z=B.length;Y<z;Y++){let J=B[Y],O=m(J),C=w%E,j=C%O.boundary,be=C+j;w+=j,be!==0&&E-be<O.storage&&(w+=E-be),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=O.storage}}}let x=w%E;return x>0&&(w+=E-x),y.__size=w,y.__cache={},this}function m(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function A(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:A}}var vE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_r=null;function yE(){return _r===null&&(_r=new fo(vE,16,16,Ss,Ji),_r.name="DFG_LUT",_r.minFilter=jt,_r.magFilter=jt,_r.wrapS=Ni,_r.wrapT=Ni,_r.generateMipmaps=!1,_r.needsUpdate=!0),_r}var Qh=class{constructor(e={}){let{canvas:t=Mx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ui}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([_h,gh,mh]),m=new Set([ui,Ki,Mo,wo,dh,fh]),S=new Uint32Array(4),A=new Int32Array(4),y=new G,b=null,w=null,E=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,L=null,V=null,I=null,B=null;this._outputColorSpace=Ht;let Y=0,z=0,J=null,O=-1,C=null,j=new bt,be=new bt,Se=null,He=new ze(0),Ie=0,We=t.width,Z=t.height,ee=1,he=null,ke=null,de=new bt(0,0,We,Z),Ue=new bt(0,0,We,Z),Ce=!1,Le=new po,$e=!1,et=!1,H=new je,at=new G,St=new bt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function mt(){return J===null?ee:1}let F=n;function Ft(T,U){return t.getContext(T,U)}let Ye,P,v,k,X,K,ce,ae,Q,ne,pe,Ee,me,fe,le,De,Ge,N,ue,te,ge,xe,ie;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ah}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),F===null){let U="webgl2";if(F=Ft(U,T),F===null)throw Ft(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(T){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Xe("WebGLRenderer: "+T.message),T}function oe(){Ye=new Aw(F),Ye.init(),ge=new fE(F,Ye),P=new _w(F,Ye,e,ge),v=new hE(F,Ye),P.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),V=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),k=new Pw(F),X=new JT,K=new dE(F,Ye,v,X,P,ge,k),ce=new Ew(R),ae=new LS(F),xe=new mw(F,ae),Q=new Cw(F,ae,k,xe),ne=new Lw(F,Q,ae,xe,k),N=new Iw(F,P,K),le=new xw(X),pe=new KT(R,ce,Ye,P,xe,le),Ee=new _E(R,X),me=new QT,fe=new sE(Ye),Ge=new pw(R,ce,v,ne,g,l),De=new uE(R,ne,P),ie=new xE(F,k,P,v),ue=new gw(F,Ye,k),te=new Rw(F,Ye,k),k.programs=pe.programs,R.capabilities=P,R.extensions=Ye,R.properties=X,R.renderLists=me,R.shadowMap=De,R.state=v,R.info=k}_!==ui&&(M=new Nw(_,t.width,t.height,o,i,s));let re=new nm(R,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(We,Z,!1))},this.getSize=function(T){return T.set(We,Z)},this.setSize=function(T,U,$=!0){if(re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}We=T,Z=U,t.width=Math.floor(T*ee),t.height=Math.floor(U*ee),$===!0&&(t.style.width=T+"px",t.style.height=U+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(We*ee,Z*ee).floor()},this.setDrawingBufferSize=function(T,U,$){We=T,Z=U,ee=$,t.width=Math.floor(T*$),t.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===ui){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,U,$,W){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,U,$,W),v.viewport(j.copy(de).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,U,$,W){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,U,$,W),v.scissor(be.copy(Ue).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){v.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){ke=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let W=0;if(T){let q=!1;if(J!==null){let _e=J.texture.format;q=p.has(_e)}if(q){let _e=J.texture.type,we=m.has(_e),ye=Ge.getClearColor(),Re=Ge.getClearAlpha(),Ne=ye.r,tt=ye.g,ut=ye.b;we?(S[0]=Ne,S[1]=tt,S[2]=ut,S[3]=Re,F.clearBufferuiv(F.COLOR,0,S)):(A[0]=Ne,A[1]=tt,A[2]=ut,A[3]=Re,F.clearBufferiv(F.COLOR,0,A))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Ge.dispose(),me.dispose(),fe.dispose(),X.dispose(),ce.dispose(),ne.dispose(),xe.dispose(),ie.dispose(),pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Nt),re.removeEventListener("sessionend",wt),dt.stop()};function Oe(T){T.preventDefault(),Cl("WebGLRenderer: Context Lost."),D=!0}function se(){Cl("WebGLRenderer: Context Restored."),D=!1;let T=k.autoReset,U=De.enabled,$=De.autoUpdate,W=De.needsUpdate,q=De.type;oe(),k.autoReset=T,De.enabled=U,De.autoUpdate=$,De.needsUpdate=W,De.type=q}function Ve(T){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){let U=T.target;U.removeEventListener("dispose",Ae),Ke(U)}function Ke(T){en(T),X.remove(T)}function en(T){let U=X.get(T).programs;U!==void 0&&(U.forEach(function($){pe.releaseProgram($)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,W,q,_e){U===null&&(U=kt);let we=q.isMesh&&q.matrixWorld.determinantAffine()<0,ye=gn(T,U,$,W,q);v.setMaterial(W,we);let Re=$.index,Ne=1;if(W.wireframe===!0){if(Re=Q.getWireframeAttribute($),Re===void 0)return;Ne=2}let tt=$.drawRange,ut=$.attributes.position,Pe=tt.start*Ne,gt=(tt.start+tt.count)*Ne;_e!==null&&(Pe=Math.max(Pe,_e.start*Ne),gt=Math.min(gt,(_e.start+_e.count)*Ne)),Re!==null?(Pe=Math.max(Pe,0),gt=Math.min(gt,Re.count)):ut!=null&&(Pe=Math.max(Pe,0),gt=Math.min(gt,ut.count));let nn=gt-Pe;if(nn<0||nn===1/0)return;xe.setup(q,W,ye,$,Re);let Ut,Tt=ue;if(Re!==null&&(Ut=ae.get(Re),Tt=te,Tt.setIndex(Ut)),q.isMesh)W.wireframe===!0?(v.setLineWidth(W.wireframeLinewidth*mt()),Tt.setMode(F.LINES)):Tt.setMode(F.TRIANGLES);else if(q.isLine){let En=W.linewidth;En===void 0&&(En=1),v.setLineWidth(En*mt()),q.isLineSegments?Tt.setMode(F.LINES):q.isLineLoop?Tt.setMode(F.LINE_LOOP):Tt.setMode(F.LINE_STRIP)}else q.isPoints?Tt.setMode(F.POINTS):q.isSprite&&Tt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let En=q._multiDrawStarts,Me=q._multiDrawCounts,Gn=q._multiDrawCount,pt=Re?ae.get(Re).bytesPerElement:1,Ei=X.get(W).currentProgram.getUniforms();for(let Qi=0;Qi<Gn;Qi++)Ei.setValue(F,"_gl_DrawID",Qi),Tt.render(En[Qi]/pt,Me[Qi])}else if(q.isInstancedMesh)Tt.renderInstances(Pe,nn,q.count);else if($.isInstancedBufferGeometry){let En=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Me=Math.min($.instanceCount,En);Tt.renderInstances(Pe,nn,Me)}else Tt.render(Pe,nn)};function ot(T,U,$,W){L!==null&&T.isNodeMaterial&&L.setObject(W,T),$e===!0&&le.setState(T,$,!1),T.transparent===!0&&T.side===Ui&&T.forceSinglePass===!1?(T.side=wn,T.needsUpdate=!0,Wt(T,U,W),T.side=mr,T.needsUpdate=!0,Wt(T,U,W),T.side=Ui):Wt(T,U,W)}this.compile=function(T,U,$=null){$===null&&($=T),L!==null&&L.renderStart(T,U,$),w=fe.get($),w.init(U),x.push(w),$.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),T!==$&&T.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),et=this.localClippingEnabled,$e=le.init(this.clippingPlanes,et),$e===!0&&le.setGlobalState(this.clippingPlanes,U),L!==null&&De.render(w.state.shadowsArray,$,U);let W=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let _e=q.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){let ye=_e[we];ot(ye,$,U,q),W.add(ye)}else ot(_e,$,U,q),W.add(_e)}),w=x.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(T,U,$=null){let W=this.compile(T,U,$);return new Promise(q=>{function _e(){if(W.forEach(function(we){let Re=X.get(we).currentProgram;(Re===void 0||Re.isReady())&&W.delete(we)}),W.size===0){q(T);return}setTimeout(_e,10)}Ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Dt=null;function mn(T){Dt&&Dt(T)}function Nt(){dt.stop()}function wt(){dt.start()}let dt=new Qx;dt.setAnimationLoop(mn),typeof self!="undefined"&&dt.setContext(self),this.setAnimationLoop=function(T){Dt=T,re.setAnimationLoop(T),T===null?dt.stop():dt.start()},re.addEventListener("sessionstart",Nt),re.addEventListener("sessionend",wt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,U);let $=re.enabled===!0&&re.isPresenting===!0,W=M!==null&&(J===null||$)&&M.begin(R,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,J),w=fe.get(T,x.length),w.init(U),w.state.textureUnits=K.getTextureUnits(),x.push(w),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(H,Xi,U.reversedDepth),et=this.localClippingEnabled,$e=le.init(this.clippingPlanes,et),b=me.get(T,E.length),b.init(),E.push(b),re.enabled===!0&&re.isPresenting===!0){let we=R.xr.getDepthSensingMesh();we!==null&&zn(we,U,-1/0,R.sortObjects)}zn(T,U,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(w.state.lightsArray),R.sortObjects===!0&&b.sort(he,ke),Ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ze&&Ge.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&le.beginShadows();let q=w.state.shadowsArray;if(De.render(q,T,U),$e===!0&&le.endShadows(),(W&&M.hasRenderPass())===!1){let we=b.opaque,ye=b.transmissive;if(w.setupLights(),U.isArrayCamera){let Re=U.cameras;if(ye.length>0)for(let Ne=0,tt=Re.length;Ne<tt;Ne++){let ut=Re[Ne];Tn(we,ye,T,ut)}Ze&&Ge.render(T);for(let Ne=0,tt=Re.length;Ne<tt;Ne++){let ut=Re[Ne];Pt(b,T,ut,ut.viewport)}}else ye.length>0&&Tn(we,ye,T,U),Ze&&Ge.render(T),Pt(b,T,U)}J!==null&&z===0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J)),W&&M.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),xe.resetDefaultState(),O=-1,C=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),$e===!0&&le.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,L!==null&&L.renderEnd()};function zn(T,U,$,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Le)){W&&St.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);let we=ne.update(T),ye=T.material;ye.visible&&b.push(T,we,ye,$,St.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Le))){let we=ne.update(T),ye=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),St.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),St.copy(we.boundingSphere.center)),St.applyMatrix4(T.matrixWorld).applyMatrix4(H)),Array.isArray(ye)){let Re=we.groups;for(let Ne=0,tt=Re.length;Ne<tt;Ne++){let ut=Re[Ne],Pe=ye[ut.materialIndex];Pe&&Pe.visible&&b.push(T,we,Pe,$,St.z,ut,U)}}else ye.visible&&b.push(T,we,ye,$,St.z,null,U)}}let _e=T.children;for(let we=0,ye=_e.length;we<ye;we++)zn(_e[we],U,$,W)}function Pt(T,U,$,W){let{opaque:q,transmissive:_e,transparent:we}=T;w.setupLightsView($),$e===!0&&le.setGlobalState(R.clippingPlanes,$),W&&v.viewport(j.copy(W)),q.length>0&&Vn(q,U,$),_e.length>0&&Vn(_e,U,$),we.length>0&&Vn(we,U,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Tn(T,U,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let Pe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new oi(1,1,{generateMipmaps:!0,type:Pe?Ji:ui,minFilter:Zi,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let _e=w.state.transmissionRenderTarget[W.id],we=W.viewport||j;_e.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);let ye=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(He),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),Ze&&Ge.render($);let tt=R.toneMapping;R.toneMapping=$i;let ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),$e===!0&&le.setGlobalState(R.clippingPlanes,W),Vn(T,$,W),K.updateMultisampleRenderTarget(_e),K.updateRenderTargetMipmap(_e),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let gt=0,nn=U.length;gt<nn;gt++){let Ut=U[gt],{object:Tt,geometry:En,material:Me,group:Gn}=Ut;if(Me.side===Ui&&Tt.layers.test(W.layers)){let pt=Me.side;Me.side=wn,Me.needsUpdate=!0,tn(Tt,$,W,En,Me,Gn),Me.side=pt,Me.needsUpdate=!0,Pe=!0}}Pe===!0&&(K.updateMultisampleRenderTarget(_e),K.updateRenderTargetMipmap(_e))}R.setRenderTarget(ye,Re,Ne),R.setClearColor(He,Ie),ut!==void 0&&(W.viewport=ut),R.toneMapping=tt}function Vn(T,U,$){let W=U.isScene===!0?U.overrideMaterial:null;for(let q=0,_e=T.length;q<_e;q++){let we=T[q],{object:ye,geometry:Re,group:Ne}=we,tt=we.material;tt.allowOverride===!0&&W!==null&&(tt=W),ye.layers.test($.layers)&&tn(ye,U,$,Re,tt,Ne)}}function tn(T,U,$,W,q,_e){L!==null&&q.isNodeMaterial&&L.setObject(T,q),T.onBeforeRender(R,U,$,W,q,_e),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,U,$,W,T,_e),q.transparent===!0&&q.side===Ui&&q.forceSinglePass===!1?(q.side=wn,q.needsUpdate=!0,R.renderBufferDirect($,U,W,q,T,_e),q.side=mr,q.needsUpdate=!0,R.renderBufferDirect($,U,W,q,T,_e),q.side=Ui):R.renderBufferDirect($,U,W,q,T,_e),T.onAfterRender(R,U,$,W,q,_e)}function Wt(T,U,$){U.isScene!==!0&&(U=kt);let W=X.get(T),q=w.state.lights,_e=w.state.shadowsArray,we=q.state.version,ye=pe.getParameters(T,q.state,_e,U,$,w.state.lightProbeGridArray),Re=pe.getProgramCacheKey(ye),Ne=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=ce.get(T.envMap||W.environment,tt),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Ae),Ne=new Map,W.programs=Ne);let ut=Ne.get(Re);if(ut!==void 0){if(W.currentProgram===ut&&W.lightsStateVersion===we)return ji(T,ye),ut}else ye.uniforms=pe.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,$,ye),T.onBeforeCompile(ye,R),ut=pe.acquireProgram(ye,Re),Ne.set(Re,ut),W.uniforms=ye.uniforms;let Pe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=le.uniform),ji(T,ye),W.needsLights=Ti(T),W.lightsStateVersion=we,W.needsLights&&(Pe.ambientLightColor.value=q.state.ambient,Pe.lightProbe.value=q.state.probe,Pe.sunLights.value=q.state.sun,Pe.sunLightShadows.value=q.state.sunShadow,Pe.directionalLights.value=q.state.directional,Pe.directionalLightShadows.value=q.state.directionalShadow,Pe.spotLights.value=q.state.spot,Pe.spotLightShadows.value=q.state.spotShadow,Pe.rectAreaLights.value=q.state.rectArea,Pe.ltc_1.value=q.state.rectAreaLTC1,Pe.ltc_2.value=q.state.rectAreaLTC2,Pe.pointLights.value=q.state.point,Pe.pointLightShadows.value=q.state.pointShadow,Pe.hemisphereLights.value=q.state.hemi,Pe.sunShadowMatrix.value=q.state.sunShadowMatrix,Pe.sunShadowCascade.value=q.state.sunShadowCascade,Pe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pe.spotLightMatrix.value=q.state.spotLightMatrix,Pe.spotLightMap.value=q.state.spotLightMap,Pe.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=ut,W.uniformsList=null,ut}function ln(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Co.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function ji(T,U){let $=X.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function ua(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let $=0,W=T.length;$<W;$++){let q=T[$];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function gn(T,U,$,W,q){U.isScene!==!0&&(U=kt),K.resetTextureUnits();let _e=U.fog,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,ye=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:st.workingColorSpace,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=ce.get(W.envMap||we,Re),tt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ut=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!$.morphAttributes.position,gt=!!$.morphAttributes.normal,nn=!!$.morphAttributes.color,Ut=$i;W.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=R.toneMapping);let Tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,En=Tt!==void 0?Tt.length:0,Me=X.get(W),Gn=w.state.lights;if($e===!0&&(et===!0||T!==C)){let It=T===C&&W.id===O;le.setState(W,T,It)}let pt=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Gn.state.version||Me.outputColorSpace!==ye||q.isBatchedMesh&&Me.batching===!1||!q.isBatchedMesh&&Me.batching===!0||q.isBatchedMesh&&Me.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Me.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Me.instancing===!1||!q.isInstancedMesh&&Me.instancing===!0||q.isSkinnedMesh&&Me.skinning===!1||!q.isSkinnedMesh&&Me.skinning===!0||q.isInstancedMesh&&Me.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Me.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Me.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Me.instancingMorph===!1&&q.morphTexture!==null||Me.envMap!==Ne||W.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==le.numPlanes||Me.numIntersection!==le.numIntersection)||Me.vertexAlphas!==tt||Me.vertexTangents!==ut||Me.morphTargets!==Pe||Me.morphNormals!==gt||Me.morphColors!==nn||Me.toneMapping!==Ut||Me.morphTargetsCount!==En||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Me.__version=W.version);let Ei=Me.currentProgram;pt===!0&&(Ei=Wt(W,U,q),L&&W.isNodeMaterial&&L.onUpdateProgram(W,Ei,Me));let Qi=!1,Xr=!1,da=!1,Mt=Ei.getUniforms(),Zt=Me.uniforms;if(v.useProgram(Ei.program)&&(Qi=!0,Xr=!0,da=!0),W.id!==O&&(O=W.id,Xr=!0),Me.needsLights){let It=ua(w.state.lightProbeGridArray,q);Me.lightProbeGrid!==It&&(Me.lightProbeGrid=It,Xr=!0)}if(Qi||C!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(F,"projectionMatrix",T.projectionMatrix),Mt.setValue(F,"viewMatrix",T.matrixWorldInverse);let Yr=Mt.map.cameraPosition;Yr!==void 0&&Yr.setValue(F,at.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,Xr=!0,da=!0)}if(Me.needsLights&&(Gn.state.sunShadowMap.length>0&&Mt.setValue(F,"sunShadowMap",Gn.state.sunShadowMap,K),Gn.state.directionalShadowMap.length>0&&Mt.setValue(F,"directionalShadowMap",Gn.state.directionalShadowMap,K),Gn.state.spotShadowMap.length>0&&Mt.setValue(F,"spotShadowMap",Gn.state.spotShadowMap,K),Gn.state.pointShadowMap.length>0&&Mt.setValue(F,"pointShadowMap",Gn.state.pointShadowMap,K)),q.isSkinnedMesh){Mt.setOptional(F,q,"bindMatrix"),Mt.setOptional(F,q,"bindMatrixInverse");let It=q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Mt.setValue(F,"boneTexture",It.boneTexture,K))}q.isBatchedMesh&&(Mt.setOptional(F,q,"batchingTexture"),Mt.setValue(F,"batchingTexture",q._matricesTexture,K),Mt.setOptional(F,q,"batchingIdTexture"),Mt.setValue(F,"batchingIdTexture",q._indirectTexture,K),Mt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Mt.setValue(F,"batchingColorTexture",q._colorsTexture,K));let qr=$.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&N.update(q,$,Ei),(Xr||Me.receiveShadow!==q.receiveShadow)&&(Me.receiveShadow=q.receiveShadow,Mt.setValue(F,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Zt.envMapIntensity.value=U.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=yE()),Xr){if(Mt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&$t(Zt,da),_e&&W.fog===!0&&Ee.refreshFogUniforms(Zt,_e),Ee.refreshMaterialUniforms(Zt,W,ee,Z,w.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){let It=Me.lightProbeGrid;Zt.probesSH.value=It.texture,Zt.probesMin.value.copy(It.boundingBox.min),Zt.probesMax.value.copy(It.boundingBox.max),Zt.probesResolution.value.copy(It.resolution)}Co.upload(F,ln(Me),Zt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Co.upload(F,ln(Me),Zt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Mt.setValue(F,"center",q.center),Mt.setValue(F,"modelViewMatrix",q.modelViewMatrix),Mt.setValue(F,"normalMatrix",q.normalMatrix),Mt.setValue(F,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let It=W.uniformsGroups;for(let Yr=0,fa=It.length;Yr<fa;Yr++){let Lm=It[Yr];ie.update(Lm,Ei),ie.bind(Lm,Ei)}}return Ei}function $t(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ti(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,U,$){let W=X.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=U,X.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let $=X.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){J=T,Y=U,z=$;let W=null,q=!1,_e=!1;if(T){let ye=X.get(T);if(ye.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),j.copy(T.viewport),be.copy(T.scissor),Se=T.scissorTest,v.viewport(j),v.scissor(be),v.setScissorTest(Se),O=-1;return}else if(ye.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(ye.__hasExternalTextures)K.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let tt=T.depthTexture;if(ye.__boundDepthTexture!==tt){if(tt!==null&&X.has(tt)&&(T.width!==tt.image.width||T.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);let Ne=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?W=Ne[U][$]:W=Ne[U],q=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?W=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[$]:W=Ne,j.copy(T.viewport),be.copy(T.scissor),Se=T.scissorTest}else j.copy(de).multiplyScalar(ee).floor(),be.copy(Ue).multiplyScalar(ee).floor(),Se=Ce;if($!==0&&(W=V),v.bindFramebuffer(F.FRAMEBUFFER,W)&&v.drawBuffers(T,W),v.viewport(j),v.scissor(be),v.setScissorTest(Se),q){let ye=X.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,$)}else if(_e){let ye=U;for(let Re=0;Re<T.textures.length;Re++){let Ne=X.get(T.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,$,ye)}}else if(T!==null&&$!==0){let ye=X.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,$)}O=-1};function ha(T){let U=X.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=P.textureFormatReadable(T.format),U.__typeReadable=P.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,W,q,_e,we,ye=0){if(!(T&&T.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){v.bindFramebuffer(F.FRAMEBUFFER,Re);try{let Ne=T.textures[ye],tt=Ne.format,ut=Ne.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Pe=ha(Ne);if(Pe.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&$>=0&&$<=T.height-q&&F.readPixels(U,$,W,q,ge.convert(tt),ge.convert(ut),_e)}finally{let Ne=J!==null?X.get(J).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,W,q,_e,we,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(U>=0&&U<=T.width-W&&$>=0&&$<=T.height-q){v.bindFramebuffer(F.FRAMEBUFFER,Re);let Ne=T.textures[ye],tt=Ne.format,ut=Ne.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Pe=ha(Ne);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(U,$,W,q,ge.convert(tt),ge.convert(ut),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let nn=J!==null?X.get(J).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,nn);let Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Tx(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(gt),F.deleteSync(Ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){let W=Math.pow(2,-$),q=Math.floor(T.image.width*W),_e=Math.floor(T.image.height*W),we=U!==null?U.x:0,ye=U!==null?U.y:0;K.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,we,ye,q,_e),v.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,W=null,q=0,_e=0){let we,ye,Re,Ne,tt,ut,Pe,gt,nn,Ut=T.isCompressedTexture?T.mipmaps[_e]:T.image;if($!==null)we=$.max.x-$.min.x,ye=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,tt=$.min.y,ut=$.isBox3?$.min.z:0;else{let Zt=Math.pow(2,-q);we=Math.floor(Ut.width*Zt),ye=Math.floor(Ut.height*Zt),T.isDataArrayTexture?Re=Ut.depth:T.isData3DTexture?Re=Math.floor(Ut.depth*Zt):Re=1,Ne=0,tt=0,ut=0}W!==null?(Pe=W.x,gt=W.y,nn=W.z):(Pe=0,gt=0,nn=0);let Tt=ge.convert(U.format),En=ge.convert(U.type),Me;U.isData3DTexture?(K.setTexture3D(U,0),Me=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),Me=F.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),Me=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Gn=v.getParameter(F.UNPACK_ROW_LENGTH),pt=v.getParameter(F.UNPACK_IMAGE_HEIGHT),Ei=v.getParameter(F.UNPACK_SKIP_PIXELS),Qi=v.getParameter(F.UNPACK_SKIP_ROWS),Xr=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(F.UNPACK_SKIP_ROWS,tt),v.pixelStorei(F.UNPACK_SKIP_IMAGES,ut);let da=T.isDataArrayTexture||T.isData3DTexture,Mt=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Zt=X.get(T),qr=X.get(U),It=X.get(Zt.__renderTarget),Yr=X.get(qr.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,It.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let fa=0;fa<Re;fa++)da&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(T).__webglTexture,q,ut+fa),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(U).__webglTexture,_e,nn+fa)),F.blitFramebuffer(Ne,tt,we,ye,Pe,gt,we,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||X.has(T)){let Zt=X.get(T),qr=X.get(U);v.bindFramebuffer(F.READ_FRAMEBUFFER,I),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let It=0;It<Re;It++)da?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,q,ut+It):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,q),Mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qr.__webglTexture,_e,nn+It):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qr.__webglTexture,_e),q!==0?F.blitFramebuffer(Ne,tt,we,ye,Pe,gt,we,ye,F.COLOR_BUFFER_BIT,F.NEAREST):Mt?F.copyTexSubImage3D(Me,_e,Pe,gt,nn+It,Ne,tt,we,ye):F.copyTexSubImage2D(Me,_e,Pe,gt,Ne,tt,we,ye);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Me,_e,Pe,gt,nn,we,ye,Re,Tt,En,Ut.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,_e,Pe,gt,nn,we,ye,Re,Tt,Ut.data):F.texSubImage3D(Me,_e,Pe,gt,nn,we,ye,Re,Tt,En,Ut):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_e,Pe,gt,we,ye,Tt,En,Ut.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_e,Pe,gt,Ut.width,Ut.height,Tt,Ut.data):F.texSubImage2D(F.TEXTURE_2D,_e,Pe,gt,we,ye,Tt,En,Ut);v.pixelStorei(F.UNPACK_ROW_LENGTH,Gn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Ei),v.pixelStorei(F.UNPACK_SKIP_ROWS,Qi),v.pixelStorei(F.UNPACK_SKIP_IMAGES,Xr),_e===0&&U.generateMipmaps&&F.generateMipmap(Me),v.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){Y=0,z=0,J=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function im(r,e){if(e===Cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===To||e===ac){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===To)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function av(r){let e=new Map,t=new Map,n=r.clone();return ov(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function ov(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)ov(r.children[n],e.children[n],t)}var nd=class extends fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new um(t)}),this.register(function(t){return new hm(t)}),this.register(function(t){return new ym(t)}),this.register(function(t){return new bm(t)}),this.register(function(t){return new Sm(t)}),this.register(function(t){return new fm(t)}),this.register(function(t){return new pm(t)}),this.register(function(t){return new mm(t)}),this.register(function(t){return new gm(t)}),this.register(function(t){return new cm(t)}),this.register(function(t){return new _m(t)}),this.register(function(t){return new dm(t)}),this.register(function(t){return new vm(t)}),this.register(function(t){return new xm(t)}),this.register(function(t){return new om(t)}),this.register(function(t){return new id(t,ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new id(t,ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mm(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Hr.extractUrlBase(e);a=Hr.resolveURL(c,this.path)}else a=Hr.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new xo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dv){try{a[ct.KHR_BINARY_GLTF]=new wm(e)}catch(d){i&&i(d);return}s=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Im(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ct.KHR_MATERIALS_UNLIT:a[d]=new lm;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[d]=new Tm(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[d]=new Em;break;case ct.KHR_MESH_QUANTIZATION:a[d]=new Am;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function SE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Qt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},om=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ei);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ia(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pr(u),c.distance=d;break;case"spot":c=new ql(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},lm=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Yi}extendParams(e,t,n){let i=[];e.color=new ze(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ei),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(i)}},cm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},um=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(s,s)}return Promise.all(i)}},hm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},dm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},fm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ei)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},pm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},mm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(s[0],s[1],s[2],ei),Promise.all(i)}},gm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},_m=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(s[0],s[1],s[2],ei),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(i)}},xm=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},vm=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},ym=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},bm=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Sm=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},id=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}},Mm=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Oi.TRIANGLES&&c.mode!==Oi.TRIANGLE_STRIP&&c.mode!==Oi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(let g of d){let _=new je,p=new G,m=new bi,S=new G(1,1,1),A=new ea(g.geometry,g.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),A.setMatrixAt(b,_.compose(p,m,S));let y=null;for(let b in l)if(b==="_COLOR_0"){let w=l[b];A.instanceColor=new Br(w.array,w.itemSize,w.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(y===null){let E=A.geometry;y=new Mn,y.name=E.name;for(let x in E.attributes)y.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)y.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&y.setIndex(E.index),y.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)y.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(y.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(y.boundingSphere=E.boundingSphere.clone()),y.drawRange.start=E.drawRange.start,y.drawRange.count=E.drawRange.count,y.userData=Object.assign({},E.userData),A.geometry=y}let w=l[b];y.setAttribute(b,new Br(w.array,w.itemSize,w.normalized))}Rt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},dv="glTF",hc=12,lv={JSON:1313821514,BIN:5130562},wm=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,hc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-hc,s=new DataView(e,hc),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===lv.JSON){let c=new Uint8Array(e,hc+a,o);this.content=n.decode(c)}else if(l===lv.BIN){let c=hc+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Tm=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=Rm[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Rm[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],f=Io[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(f)},o,c,ei,h)})})}},Em=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Am=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},rd=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,p=-2*f+3*h,m=f-h,S=1-p,A=m-h+d;for(let y=0;y!==o;y++){let b=a[_+y+o],w=a[_+y+l]*u,E=a[g+y+o],x=a[g+y]*u;s[y]=S*b+A*w+p*E+m*x}return s}},ME=new bi,Cm=class extends rd{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return ME.fromArray(s).normalize().toArray(s),s}},Oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cv={9728:Jt,9729:jt,9984:uh,9985:So,9986:aa,9987:Zi},uv={33071:Ni,33648:io,10497:fs},rm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wE={CUBICSPLINE:void 0,LINEAR:Zs,STEP:$s},sm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new hr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mr})),r.DefaultMaterial}function ca(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function EE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(h)}if(i){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(h)}if(s){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function AE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CE(r){let e,t=r.extensions&&r.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+am(t.attributes):e=r.indices+":"+am(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+am(r.targets[n]);return e}function am(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pm(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var PE=new je,Im=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||s&&a<98?this.textureLoader=new Hl(this.options.manager):this.textureLoader=new Yl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ca(s,o,i),vr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Hr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=rm[i.type],o=Io[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new hn(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=rm[i.type],c=Io[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,p;if(f&&f!==d){let m=Math.floor(h/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,A=t.cache.get(S);A||(_=new c(o,m*f,i.count*f/u),A=new js(_,f/u),t.cache.add(S,A)),p=new ps(A,l,h%f/u,g)}else o===null?_=new c(i.count*l):_=new c(o,h,i.count*l),p=new hn(_,l,g);if(i.sparse!==void 0){let m=rm.SCALAR,S=Io[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new S(a[1],A,i.sparse.count*m),w=new c(a[2],y,i.sparse.count*l);o!==null&&(p=new hn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,x=b.length;E<x;E++){let M=b[E];if(p.setX(M,w[E*l]),l>=2&&p.setY(M,w[E*l+1]),l>=3&&p.setZ(M,w[E*l+2]),l>=4&&p.setW(M,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(s.samplers||{})[a.sampler]||{};return u.magFilter=cv[h.magFilter]||jt,u.minFilter=cv[h.minFilter]||Zi,u.wrapS=uv[h.wrapS]||fs,u.wrapT=uv[h.wrapT]||fs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){let p=new dn(_);p.needsUpdate=!0,h(p)}),t.load(Hr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),vr(d,a),d.userData.mimeType=a.mimeType||RE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new go,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new mo,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){let d=i[ct.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],ei),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Ht)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ui);let u=s.alphaMode||sm.OPAQUE;if(u===sm.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===sm.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Yi&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new qe(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Yi&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Yi){let d=s.emissiveFactor;o.emissive=new ze().setRGB(d[0],d[1],d[2],ei)}return s.emissiveTexture!==void 0&&a!==Yi&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(c).then(function(){let d=new a(o);return s.name&&(d.name=s.name),vr(d,s),t.associations.set(d,{materials:e}),s.extensions&&ca(i,d,s),d})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hv(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=CE(c),d=i[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=hv(new Mn,c,t),c.mode===Oi.TRIANGLE_STRIP?h=h.then(f=>im(f,ac)):c.mode===Oi.TRIANGLE_FAN&&(h=h.then(f=>im(f,To))),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?TE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],p=a[f],m,S=c[f];if(p.mode===Oi.TRIANGLES||p.mode===Oi.TRIANGLE_STRIP||p.mode===Oi.TRIANGLE_FAN||p.mode===void 0){let A=s.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&y?new Ll(_,S):new Ot(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Oi.LINES)m=new Nl(_,S);else if(p.mode===Oi.LINE_STRIP)m=new ta(_,S);else if(p.mode===Oi.LINE_LOOP)m=new Ul(_,S);else if(p.mode===Oi.POINTS)m=new Ol(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&AE(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),vr(m,s),p.extensions&&ca(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&ca(i,d[0],s),d[0];let h=new jn;s.extensions&&ca(i,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Lp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let h=new je;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dl(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){let f=i.channels[d],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let A=0,y=h.length;A<y;A++){let b=h[A],w=f[A],E=g[A],x=_[A],M=p[A];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,w,E,x,M);if(R)for(let D=0;D<R.length;D++)m.push(R[D])}let S=new Gl(s,void 0,m);return vr(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,PE)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){let f=u.userData.pivot,g=d[0];u.pivot=new G().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new ho:c.length>1?u=new jn:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=a),vr(u,s),s.extensions&&ca(n,u,s),s.matrix!==void 0){let d=new je;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new jn;n.name&&(s.name=i.createUniqueName(n.name)),vr(s,n),n.extensions&&ca(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++){let h=l[u];h.parent!==null?s.add(av(h)):s.add(h)}let c=u=>{let d=new Map;for(let[h,f]of i.associations)(h instanceof Fn||h instanceof dn)&&d.set(h,f);return u.traverse(h=>{let f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ms[s.path]===Ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Ms[s.path]){case Ms.weights:u=zr;break;case Ms.rotation:u=Vr;break;case Ms.translation:case Ms.scale:u=xs;break;default:switch(n.itemSize){case 1:u=zr;break;case 2:case 3:default:u=xs;break}break}let d=i.interpolation!==void 0?wE[i.interpolation]:Zs,h=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let _=new u(l[f]+"."+Ms[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Pm(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Vr?Cm:rd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function IE(r,e,t){let n=e.attributes,i=new ti;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){let u=Pm(Io[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new G,l=new G;for(let c=0,u=s.length;c<u;c++){let d=s[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){let _=Pm(Io[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new li;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function hv(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=Rm[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return st.workingColorSpace!==ei&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),vr(r,e),IE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?EE(r,e.targets,t):r})}var sd=class extends Js{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new _s;e.deleteAttribute("uv");let t=new hr({side:wn}),n=new hr,i=new pr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ot(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new ea(e,n,6),o=new Rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ot(e,Lo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ot(e,Lo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ot(e,Lo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Ot(e,Lo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Ot(e,Lo(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ot(e,Lo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Lo(r){return new zl({color:0,emissive:16777215,emissiveIntensity:r})}var ad={home:{x:2.05,y:.1,z:0,s:1.05,rotY:0},about:{x:2.9,y:.9,z:-.5,s:.5,rotY:0},services:{x:3.1,y:1.25,z:-.6,s:.48,rotY:0},work:{x:3.45,y:.95,z:-.8,s:.42,rotY:0},contact:{x:3.25,y:.75,z:-.6,s:.46,rotY:0},presentation:{x:3.45,y:.95,z:-.8,s:.42,rotY:0},blog:{x:3.2,y:.9,z:-.7,s:.44,rotY:0}},LE=(r,e,t)=>r+(e-r)*t;function DE(){let r=document.createElement("canvas");r.width=512,r.height=64;let e=r.getContext("2d");e.translate(256,32),e.scale(1,.12);let t=e.createRadialGradient(0,0,0,0,0,256);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(-256,-256,512,512);let n=new _o(r);return n.colorSpace=Ht,n}function NE(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,0.6)"),t.addColorStop(.55,"rgba(255,255,255,0.14)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);let n=new _o(r);return n.colorSpace=Ht,n}function fv(r,e="light"){let t;try{t=new Qh({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(O){return console.warn("WebGL unavailable, 3D scene disabled.",O),r.style.display="none",null}t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setClearColor(0,0),t.outputColorSpace=Ht,t.toneMapping=jl;let n=new Js,i=new Ro(t);n.environment=i.fromScene(new sd,.04).texture;let s=new on(32,1,.1,100);s.position.set(0,0,9.2);let a=new Wl(16777215,2755379,.6),o=new ia(16777215,1.3);o.position.set(3,5,6);let l=new pr(11619280,40,25,1.6);l.position.set(-4,2.5,4);let c=new pr(16757760,30,25,1.6);c.position.set(4,-2.5,3),n.add(a,o,l,c);let u=new ze(.075,.006,.11),d=new ze(.11,.014,.17),h=new Bn({color:u,roughness:.14,transmission:.12,thickness:.8,ior:1.45,clearcoat:.7,clearcoatRoughness:.06,envMapIntensity:.75,attenuationColor:new ze(.55,.1,.65),attenuationDistance:.9}),f=new jn,g=new jn,_=new jn;_.rotation.x=Math.PI/2,f.add(g),g.add(_);let FW_=new jn;FW_.add(f);n.add(FW_);window.EDDINO_LOGO_WRAP=FW_;let p=NE(),m=(O,C)=>new uo({map:O,color:C,blending:Jl,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}),S=new Qs(m(p,16777215));S.scale.setScalar(.9);let A=new Qs(m(DE(),14861567));A.scale.set(4.2,.4,1);let y=[{k:.45,size:.34,color:11619280},{k:.8,size:.52,color:8378111},{k:1.15,size:.22,color:16757760}].map(O=>({...O,sprite:new Qs(m(p,O.color))}));y.forEach(O=>O.sprite.scale.setScalar(O.size)),f.add(S,A,...y.map(O=>O.sprite));let b=S.material,w=A.material,E=new G,x=new G,M={name:"home",goal:{...ad.home},cur:{...ad.home},pointer:{x:0,y:0},lastMove:-10,tiltAmt:0,rot:{x:0,y:0},bounce:0,bounceV:0,theme:e};function R(O){M.theme=O;let C=O==="dark";h.color.copy(C?d:u),h.envMapIntensity=C?1.1:.75,a.intensity=C?.9:.6,l.intensity=C?70:40,c.intensity=C?40:30}function D(O){let C={...ad[O]};return s.aspect<.9&&(C.x=0,C.y=1.2,C.s=O==="home"?.6:.4),C}let L=Uint8Array.from(atob(window.EDDINO_LOGO_GLB),O=>O.charCodeAt(0)).buffer;new Promise((O,C)=>new nd().parse(L,"",O,C)).then(O=>{O.scene.traverse(j=>{j.isMesh&&(j.material=h)}),_.add(O.scene),n.updateMatrixWorld(!0);let C=new ti().setFromObject(O.scene);C.applyMatrix4(g.matrixWorld.clone().invert()),g.position.copy(C.getCenter(new G)).negate()}).catch(O=>console.error("Could not load the 3D logo",O)),window.addEventListener("pointermove",O=>{M.pointer.x=O.clientX/window.innerWidth*2-1,M.pointer.y=-(O.clientY/window.innerHeight)*2+1,M.lastMove=performance.now()/1e3});let V=new Zl,I=new qe;window.addEventListener("pointerdown",O=>{I.set(O.clientX/window.innerWidth*2-1,-(O.clientY/window.innerHeight)*2+1),V.setFromCamera(I,s),V.intersectObject(f,!0).length&&(M.bounceV+=6)});function B(){let O=window.innerWidth,C=window.innerHeight;t.setSize(O,C,!1),s.aspect=O/C,s.updateProjectionMatrix(),M.goal=D(M.name)}window.addEventListener("resize",B),B(),R(e);let Y=new $l,z=matchMedia("(prefers-reduced-motion: reduce)").matches;function J(){Y.update();let O=Math.min(Y.getDelta(),.05),C=performance.now()/1e3,j=1-Math.exp(-O*5),be=C-M.lastMove<1.4&&!z?1:0;M.tiltAmt+=(be-M.tiltAmt)*(1-Math.exp(-O*(be?6:2.5)));let Se=-M.pointer.y*.14*M.tiltAmt,He=M.pointer.x*.22*M.tiltAmt;M.rot.x+=(Se-M.rot.x)*(1-Math.exp(-O*7)),M.rot.y+=(He-M.rot.y)*(1-Math.exp(-O*7));let Ie=M.cur,We=M.goal;for(let Ce of["x","y","z","s","rotY"])Ie[Ce]=LE(Ie[Ce],We[Ce],j);M.bounceV+=(-M.bounce*120-M.bounceV*14)*O,M.bounce+=M.bounceV*O,E.set(0,0,1).applyQuaternion(f.quaternion),x.copy(s.position).sub(f.position).normalize();let Z=Math.pow(Math.abs(E.dot(x)),3),ee=.5+.5*Math.sin(C*.9),he=-.55,ke=.5,de=.6,Ue=Z*(.3+.7*ee*ee);S.position.set(he,ke,de),A.position.set(he,ke,de),b.opacity=Ue*(z?.3:.9),w.opacity=Ue*.55,y.forEach(Ce=>{Ce.sprite.position.set(-he*Ce.k,-ke*Ce.k,.2),Ce.sprite.material.opacity=Ue*.22}),f.position.set(Ie.x,Ie.y,Ie.z),f.scale.setScalar(Ie.s*(1+M.bounce*.12)),f.rotation.set(M.rot.x,Ie.rotY+M.rot.y,0),t.render(n,s),requestAnimationFrame(J)}return J(),{setPreset(O){M.name=ad[O]?O:"home",M.goal=D(M.name)},setTheme:R}}Mf(k0());var pv=e_();document.documentElement.dataset.theme=pv;var mv=fv(document.getElementById("scene"),pv);t_(mv);document.querySelectorAll(".lang-switch button").forEach(r=>{r.addEventListener("click",()=>{let e=r.dataset.lang;e!==z0()&&(Mf(e),J0())})});window.EDDINO_THREE={Scene:Js,WebGLRenderer:Qh,PerspectiveCamera:on,HemisphereLight:Wl,DirectionalLight:ia,Group:jn,Box3:ti,Vector3:G,GLTFLoader:nd,PMREMGenerator:Ro,RoomEnvironment:sd,SRGBColorSpace:Ht,ACESFilmicToneMapping:jl};window.EDDINO_SPLIT=Qc;F0();j0();K0({hero:mv});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
