(function(a){a.vast={}})(jwplayer);(function(b){var g=b.vast,a=b.utils,d=b.events,e=window,c=true,f=false;g.adcontroller=function(m,aa,X){var F,l=this,S,q={},ab,s={},p="",V=f,Q=f,C=0,h,H,M,G=null,E=[],v=[],O=f,J=-1;a.extend(l,new d.eventdispatcher());m.onReady(function Z(){if(aa.debug){F=m.id}S=m.getRenderingMode()==="flash";H=new g.staticplayer(m,X);M=new g.companion(F);var ak=e.location.href;var ap=new a.key(b.key);var al=ap.edition();s.trackingbase=(ak.match(/^https/)?"https://s":"http://i")+".n.jwpltx.com/v1/adclient/ping.gif";s.account=ap.token();s.domain=T();s.edition=["pro","premium","ads","invalid","enterprise"].indexOf(al)+1;s.hosting=b.defaults&&b.defaults.ph?b.defaults.ph:0;var ah=new g.configparser();ah.parse(aa);ab=ah.getSchedule();if(ab.isVMAP()){var am=ab.getVMAP();if(am){var an;var aj=function aj(aq){clearTimeout(an);try{g.vmapparser(aq.responseXML,ab);W(ab)}catch(ar){D({message:"Error parsing VMAP",code:1002,vmap:am})}};var ao=function ao(aq){clearTimeout(an);a.log(aq);D({message:"Error Loading VMAP Schedule",code:(aq==="Timeout")?1007:1008,vmap:am})};var ai=a.ajax(am,aj,ao);if(ai){an=setTimeout(function(){ai.onload=null;ai.onreadystatechange=null;ai.onerror=null;if(ai.abort){ai.abort()}ao("Timeout")},5000)}}}q=ah.getOptParams();m.onBeforePlay(B);m.onCast(ag);m.onPlay(y);m.onTime(N);m.onBeforeComplete(k);m.onPlaylistItem(Y);m.onPlaylistComplete(Y);m.onComplete(U)});function ag(ah){O=!!ah.active}function y(ah){l.sendEvent(d.state.PLAYING,ah)}function B(ah){if(O){return}var ai=ab.getPreRoll();if(!V&&ai){h=u(ai);n(ai,ah)}}function N(ah){if(O){return}var ai=ab.getNextMidRoll(ah.position,ah.duration);if(ai){h=u(ai);R(ai,ah)}}function k(ah){if(O){return}var ai=ab.getPostRoll();if(!Q&&ai){h=u(ai);ae(ai,ah)}}function u(ah){if(ah._trackers){return new g.tracker(ah._trackers,F)}return null}function n(ai,ah){ai._position="pre";V=c;x(ai,ah)}function R(ai,ah){ai._position="mid";x(ai,ah)}function ae(ai,ah){ai._position="post";Q=c;m.detachMedia();x(ai,ah)}function x(ai,ah){p=ai._position;clearTimeout(J);J=-1;if(ai._type!=="nonlinear"){if(!G){var aj=a.isMobile()&&(p==="pre"||m.isBeforePlay()||m.getPosition()===0);if(aj){if(ah&&ah.type===d.JWPLAYER_MEDIA_BEFOREPLAY){l.addEventListener(d.state.PLAYING,af)}}else{af()}}}if(ai._adXML){ai._adTag=ai._adTag||"clientloadedtag_"+(C++);ad(ai)}else{if(ai._adTag){I(ai)}else{a.log("scheduled ad has no url or xml",ai);ac()}}}function af(){l.removeEventListener(d.state.PLAYING,af);G=m.createInstream().init()}function Y(){var ai;for(ai=E.length;ai--;){var ah=E[ai];E.length--;ah.destroy()}for(ai=v.length;ai--;){var aj=v[ai];v.length--;aj.destroy()}w();Q=f;V=f;W(ab);ab.reset()}function I(ai){var ah=z(ai._adTag);if(F){b._=b._||{};b._[F]=b._[F]||{};b._[F].actualTag=ah;b._[F].originalTag=ai._adTag}A(ai).load(ah)}function ad(ah){A(ah).parseXmlString(ah._adXML)}function A(ai){var ah=new g.vloader(ai,m);ah.addEventListener(d.COMPLETE,P);ah.addEventListener(d.ERROR,o);E.push(ah);return ah}function L(ai){for(var ah=E.length;ah--;){if(E[ah]===ai){E.splice(ah,1);ai.destroy()}}}function z(ai){if(!ai){return ai}var al=m.getPlaylistItem(),ah=e.location.href;ai=K(ai,"__random-number__",Math.random()*Math.pow(10,18));ai=K(ai,"__timestamp__",new Date().getTime());ai=K(ai,"__page-url__",encodeURIComponent(ah));ai=K(ai,"__referrer__",encodeURIComponent(document.referrer));ai=K(ai,"__player-height__",m.getHeight());ai=K(ai,"__player-width__",m.getWidth());ai=K(ai,"__domain__",encodeURIComponent(T()));if(q.companion){ai=K(ai,"__companion-div__",q.companion.id)}else{ai=K(ai,"__companion-div__","")}var an=ai.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g));for(var ak=0;an&&ak<an.length;ak++){var aj=an[ak];var ao=aj.substring(7,aj.length-2);if(al.hasOwnProperty(ao)&&al[ao]&&(typeof al[ao]=="string")){var am=al[ao];if(am.length>1000){am=am.substring(0,1000)}ai=K(ai,aj,encodeURIComponent(am))}else{ai=K(ai,aj,"")}}return ai}function K(ah,aj,ai){return ah.replace(aj,ai)}l.jwPauseAd=function(){if(v.length){var ai=v[v.length-1];var ah=ai.getState();if(ah==d.state.PLAYING||ah==d.state.BUFFERING){ai.pause()}else{if(ah==d.state.PAUSED){ai.play()}}}};function r(ai){var ah=(ai.getPosition()===0||ai.isBeforePlay());var aj=(ai.getState()===d.state.IDLE);if(ah||!aj){return true}return false}l.jwPlayAd=function(ai){var ah={_adTag:ai,_offset:0};ah._position="api";x(ah)};function P(ah){l.removeEventListener(d.state.PLAYING,af);clearTimeout(J);J=-1;w();L(ah);var ai=new g.adplayer(ah,m,H,M,s,q,F);ai.addEventListener(d.JWPLAYER_AD_ERROR,t);ai.addEventListener(d.JWPLAYER_AD_IMPRESSION,i);var aj=ai.init(G);if(!aj){ai.destroy();return}G=null;ai.addEventListener(d.JWPLAYER_AD_COMPLETE,j);v.push(ai)}function U(){w()}function t(ah){D(ah);J=setTimeout(function(){J=-1;if(E.length===0){if(p==="post"){m.attachMedia()}m.releaseState();ac()}},0)}function i(ah){if(h&&!h.started){h.breakStart()}m.dispatchEvent(d.JWPLAYER_AD_IMPRESSION,ah)}function j(){if(h){h.breakEnd()}if(E.length===0){if(p==="post"){m.attachMedia()}}}function w(){if(v.length){var ah=v[v.length-1];ah.clearNonlinear()}}function ac(){if(G){G.destroy();G=null}}function o(ah){l.removeEventListener(d.state.PLAYING,af);var aj=ah.vloader;var ai=aj.allAds();L(aj);if(ai&&ai.length){var ak=ai[0];if(ak){var an=ak.trackers;if(an&&an.error){var am=new g.tracker(an,F);am.error(ah.code)}}}var al={message:ah.message,code:ah.code,tag:ah.url};if(ah.wrappedUrl!==ah.url){al.wrappedTag=ah.wrappedUrl}D(al);if(J===-1){J=setTimeout(function(){J=-1;if(E.length===0){ac()}},0)}}function D(ah){if(h){h.error(ah.code)}m.dispatchEvent(d.JWPLAYER_AD_ERROR,ah)}function T(){var ah=e.location.href;ah=ah.match(new RegExp(/^https?:\/\/([^\/]*)/));if(ah.length>1){return ah[1]}return""}function W(aj){var ai=aj.getMidRolls(),ah=[];if(ai.length){a.foreach(ai,function(ak,al){if(al._type!=="nonlinear"){ah.push({begin:al._offSet,text:"Advertisement"})}});m.callInternal("jwSetCues",ah)}}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(l,m){for(var k=(m||0),h=this.length;k<h;k++){if(this[k]===l){return k}}return -1}}b().registerPlugin("vast","6.3",g.adcontroller,"vast.swf")})(window.jwplayer);(function(e){var b=e.jwplayer,g=b.vast,a=b.utils,c=b.events;b.vast.adplayer=function(M,p,P,V,w,v,N){var n=this,y=p.getRenderingMode(),aa=y==="flash",ae=M.scheduledAd(),L=M.adBuffet(),G=M.adPod(),X,m=L.length?L[0]:null,q,D,O,Z=0;a.extend(n,new c.eventdispatcher());n.init=function(am){n.init=function(){throw"vast.adplayer can only be initialized once"};if(m){J(m)}if(G){for(var aj=0;aj<G.length;aj++){J(G[aj])}}var ai=m||G[0];var ak=ai.media[0];X=(""+ak.adType).toLowerCase();if(aa&&X==="vpaid"){I(am)}else{if(X==="static"){ab();l(am)}else{var al=T(am);if(!al){return false}l(am)}}p.onResize(ag);p.onFullscreen(A);p.onVolume(h);p.onMute(Q);return true};function R(){if(q.blocking){l(q.blocking);q.blocking=null}}function l(ai){if(ai&&ai!==D){ai.destroy()}}n.getState=function(){if(D){return D.getState()}if(q){return q.getState()}return""};n.clearNonlinear=function(){P.stop();if(q){R();q.stop();q.destroy();q=null}};n.destroy=function(){n.resetEventListeners();k();if(n===null){return}if(D){D.destroy()}if(q){R();q.destroy()}n.clearNonlinear();n=M=p=q=D=w=ae=L=m=G=null};n.pause=function(){if(D){D.pause()}};n.play=function(){if(D){D.play()}};function k(){if(p){p.removeEventListener(c.JWPLAYER_RESIZE,ag);p.removeEventListener(c.JWPLAYER_FULLSCREEN,A);p.removeEventListener(c.JWPLAYER_MEDIA_VOLUME,h);p.removeEventListener(c.JWPLAYER_MEDIA_MUTE,Q)}if(D){D.removeEvents()}if(q){R();q.removeEvents()}P.stop();P.removeEvents()}function J(ai){ai.tracker=new g.tracker(ai.trackers,N)}function ah(){var ai={tag:ae._adTag};if(O&&O.length){ai.sequence=Z+1;ai.podcount=O.length}return ai}function ab(){m.tracker.linear="nonlinear";var ak=m.media[0];var aj=m.clickthrough||"";var ai=P;ai.removeEvents();ai.playAd(ak.file,aj,ak.minDuration,ae._adTag);ai.onPlay(S);ai.onComplete(u);ai.onClick(o);ai.onError(B)}function I(aj){var ai=m.media[0];q=new g.vpaidplayer(p,ai.file,ae._adTag,m.adParams);q.blocking=aj;q.onPlay(S);q.onPause(E);q.onTime(C);q.onComplete(u);q.onClick(U);q.onError(Y);q.onExpandedChange(K)}function T(ap){var aj=null,ak=[],an;if(m){aj=j(m)}if(G){for(an=0;an<G.length;an++){var ao=j(G[an]);var am=ak.length===an;if(ao&&am){ak.push(ao)}else{}}}if(!ak.length&&!aj){s("No Compatible Creatives",403);return false}var al,ai;if(ak.length){al=ak;ai=[];for(an=0;an<al.length;an++){ai.push(i(al[an].vastAd))}}else{al=aj;ai=i(m)}O=al;Z=0;if(ap){D=p.setInstream(ap)}else{D=p.setInstream(p.createInstream()).init()}D.onPlay(S);D.onPause(E);D.onTime(C);D.onPlaylistItem(H);D.onComplete(t);D.onPlaylistComplete(af);D.onMute(W);D.onClick(x);D.onAdSkipped(ad);D.onError(Y);D.onMediaError(Y);D.loadItem(al,ai);return true}function j(al){al.tracker.linear="linear";var ai={vastAd:al,sources:[]};var aj=al.media;for(var ak=0;ak<aj.length;ak++){var am=aj[ak];ai.sources.push({file:am.file,type:am.type})}var ao=new b.playlist.item(ai);var an=a.filterSources(ao.sources,aa);if(an.length===0){return null}return ai}function i(ai){var aj=v.skipoffset>=0?v.skipoffset:null;return{skipoffset:ai.skipoffset||aj,skipMessage:v.skipMessage,skipText:v.skipText}}function r(aj){if(O){var ai;if(O.length){ai=O[aj]}else{ai=O}if(ai.vastAd){return ai.vastAd}}else{if(!m&&G){return G[aj]}}return m}function s(am,al){a.log(am);al=al||900;var ai=r(Z);var ak=ai.tracker;ak.error(al);var aj=ah();aj.code=al;aj.message=am;n.sendEvent(c.JWPLAYER_AD_ERROR,aj);k()}function ag(){if(q){q.resize()}}function A(ai){var aj=r(Z);var ak=aj.tracker;if(ai.fullscreen&&ak.started){ak.fullscreen()}ag()}function h(ai){if(q){q.setVolume(ai.volume)}}function Q(ai){if(q){q.setVolume(ai.mute?0:p.getVolume())}}function H(ai){if(D){Z=ai.index;var aj=r(Z);var ak=aj.clickthrough||"";D.setClick(ak)}}function S(aj){var al=r(Z);var an=al.tracker;var am;if(!an.started){if(q){an.linear=aj.linear}var ak=a.extend({linear:an.linear},ah(),i(al));ak.message=v.dynamicMessage||"";ak.clickthrough=al.clickthrough;if(ak.sequence){ak.podMessage=v.podMessage||""}if(al.adTitle){ak.title=al.adTitle}if(al.companions){ak.companions=al.companions}p.dispatchEvent(c.JWPLAYER_AD_META,ak);if(al.companions){am=ah();am.companions=f(al.companions);p.dispatchEvent(c.JWPLAYER_AD_COMPANIONS,am)}var ao=V;var ap=aa?al.companions:d(al.companions);if(v.companion&&ap&&ap.length){an.hasComp=ao.addCompanion(v.companion,ap)}var ai=z(al);an.addUrl("impression",ai);if(N){b._[N].trackingURL=ai}an.impression();am=ah();am.adtitle=al.adTitle||"";n.sendEvent(c.JWPLAYER_AD_IMPRESSION,am);an.start();an.creativeView();ac(aj)}else{if(aj.oldstate==b.events.state.PAUSED){an.resume();ac(aj)}}}function ac(ai){if(X==="static"||(X==="vpaid"&&ai.linear!=="linear")){return}var aj=ah();aj.oldstate=ai.oldstate;aj.newstate=ai.newstate;p.dispatchEvent(c.JWPLAYER_AD_PLAY,aj)}function E(ai){var aj=r(Z);var al=aj.tracker;al.pause();var ak=ah();ak.oldstate=ai.oldstate;ak.newstate=ai.newstate;p.dispatchEvent(c.JWPLAYER_AD_PAUSE,ak)}function C(ap){var ar=r(Z);var an=ap.position,aj=ap.duration,aq=v.dynamicMessage||"",am=v.podMessage||"",al=aj-an,ao=ar.tracker;if(ao){ao.time(an,aj)}if(D&&aq&&al>0){aq=aq.replace(/xx/gi,""+Math.round(al));if(O&&O.length){var ak=Z+1;am=am.replace(/__AD_POD_CURRENT__/g,""+ak);am=am.replace(/__AD_POD_LENGTH__/g,""+O.length);aq=am+aq}D.setText(aq)}var ai=ah();ai.position=an;ai.duration=aj;p.dispatchEvent(c.JWPLAYER_AD_TIME,ai)}function u(){t();af()}function t(){var ai=r(Z);var aj=ai.tracker;if(!aj.firedError){aj.complete();aj.close();p.dispatchEvent(c.JWPLAYER_AD_COMPLETE,ah())}}function af(){k();n.sendEvent(c.JWPLAYER_AD_COMPLETE)}function W(ai){var aj=r(Z);var ak=aj.tracker;if(!ak){return}if(ai.mute){ak.mute();if(q){q.setVolume(0)}}else{ak.unmute();if(q){q.setVolume(p.getVolume()/100)}}}function o(){var ai=r(Z);p.pause(true);F(ai)}function U(){var ai=r(Z);F(ai,true)}function x(){var aj=r(Z);if(aa){F(aj)}else{var ai=D.getState()===c.state.PAUSED;if(!ai){F(aj)}}}function F(ai,ak){ai.tracker.click();p.dispatchEvent(c.JWPLAYER_AD_CLICK,ah());var aj=e.jwcast&&e.jwcast.player.id;if((ak||!aa)&&!aj){if(ai.clickthrough){e.open(ai.clickthrough)}}}function ad(){var ai=r(Z);ai.tracker.skip();p.dispatchEvent(c.JWPLAYER_AD_SKIPPED,ah())}function Y(ai){var ak="Error Playing ";var aj;if(ai.message&&ai.message.indexOf("File could not be played")!=-1){ak+="Creative";aj=405}else{ak+="Ad Tag";aj=400}s(ak,aj)}function B(){var aj="Unable to fetch NonLinear resource";var ai=502;s(aj,ai)}function K(ai){var aj=r(Z);var ak=aj.tracker;if(ai.expanded){ak.expand()}else{ak.collapse()}}function z(ak){var al={d:w.domain,c:"vast",m:y,a:w.account,co:ak.tracker.hasComp,p:ae._position,ad:ak.adsystem,type:ak.tracker.linear,ph:w.hosting,ed:w.edition,n:Math.random().toFixed(16).substr(2,16)},ai=w.trackingbase,am="?";for(var aj in al){ai+=am+aj+"="+encodeURIComponent(al[aj]);am="&"}return ai}};function f(l){var n=[];for(var m=0;m<l.length;m++){var j=l[m];var k=(j.type=="iframe"||j.type=="html")?j.type:"static";var h={width:j.width,height:j.height,type:k,resource:j.source,click:j.clickthrough};n.push(h)}return n}function d(h){var k=[];for(var j=0;h&&j<h.length;j++){if(h[j].type.indexOf("flash")<0){k.push(h[j])}}return k}})(window);(function(a){a.vast.companion=function(b){var e=this,i=a.utils,c,j;if(b){a._=a._||{};a._[b]=a._[b]||{};a._[b].companionvast={}}e.addCompanion=function(m,k){c=m;j=document.getElementById(c.id);if(!j){return false}for(var l=0;l<k.length;l++){if(d(k[l])){f(k[l]);return true}}return false};e.removeCompanion=function(){j.innerHTML=""};function g(m){m=m.creativeView;if(!m){return}if(b){a._[b].companionvast.creativeView=a._[b].companionvast.creativeView||[]}for(var k=0;k<m.length;k++){var l=new Image();l.src=m[k];if(b){a._[b].companionvast.creativeView.push(m[k])}}}function h(l,k,m){var n=document.createElement("param");n.setAttribute("name",k);n.setAttribute("value",m);l.appendChild(n)}function f(l){e.removeCompanion();if(l.type=="html"){j.innerHTML=l.source;g(l.trackers);return}if(l.type=="iframe"){var n=document.createElement("iframe");n.height=c.height;n.width=c.width;n.src=l.source;n.scrolling="no";n.style.border="none";n.marginWidth=0;n.marginHeight=0;g(l.trackers);j.innerHTML="";j.appendChild(n);return}if(l.type=="application/x-shockwave-flash"){if(i.isMSIE()){var m='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%"id="'+j.id+'" name="'+j.id+'" tabindex=0"">';m+='<param name="movie" value="'+l.source+'">';m+='<param name="allowfullscreen" value="true">';m+='<param name="allowscriptaccess" value="always">';m+='<param name="scale" value="exactfit">';m+='<param name="seamlesstabbing" value="true">';m+='<param name="wmode" value= "opaque">';m+="</object>";j.innerHTML=m}else{var o=document.createElement("object");o.setAttribute("type","application/x-shockwave-flash");o.setAttribute("data",l.source);o.setAttribute("width","100%");o.setAttribute("height","100%");o.setAttribute("tabindex",0);h(o,"allowfullscreen","true");h(o,"allowscriptaccess","always");h(o,"seamlesstabbing","true");h(o,"wmode","opaque");j.appendChild(o)}g(l.trackers);return}var k=new Image();k.src=l.source;if(i.exists(l.clickthrough)){k.onclick=function(){var p=window.open(l.clickthrough,"_blank");p.focus()}}j.innerHTML="";j.appendChild(k);g(l.trackers)}function d(k){return k.width==c.width&&k.height==c.height}}})(jwplayer);(function(b){var a=b.utils;b.vast.configparser=function(){var j,c,f,g="This ad will end in xx seconds.",i="Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",h=-1,d="Skip ad in xx",e="Skip";this.parse=function(k){j=new b.vast.schedule();c={};c.dynamicMessage=k.admessage||g;c.podMessage=k.podmessage||i;c.skipoffset=k.skipoffset||h;c.skipMessage=k.skipmessage||d;c.skipText=k.skiptext||e;var l=k.companiondiv;if(l){c.companion={id:l.id,height:l.height,width:l.width}}if(k.tag&&typeof k.tag=="string"){j.setPreRoll({_offSet:"pre",_adTag:k.tag})}else{if(k.vastxml&&typeof k.vastxml=="string"){j.setPreRoll({_offSet:"pre",_adXML:k.vastxml})}else{if(k.schedule&&typeof k.schedule=="string"){j.setVMAP(k.schedule);return}else{a.foreach(k.schedule,function(o,m){var n=m.ad||m,p=m.offset,q={_offSet:p};if(typeof n.tag=="string"){q._adTag=n.tag}else{if(typeof n.vastxml=="string"){q._adXML=n.vastxml}else{a.log("Error: no ad tag provided");return}}if(n.type){q._type=n.type}switch(p){case"start":n._offSet="pre";case"pre":j.setPreRoll(q);break;case"end":n._offSet="post";case"post":j.setPostRoll(q);break;default:if(/^\d+%?$/.test(""+p)){j.addMidRoll(q)}else{a.log("Error: ad offset format not supported",p)}}})}}}j.sort()};this.getSchedule=function(){return j};this.getOptParams=function(){return c};this.getVMAP=function(){return f}}})(jwplayer);(function(a){a.vast.schedule=function(){var f,e=[],c=0,d,g;this.setPreRoll=function(h){f=h};this.getPreRoll=function(){return f};this.getPostRoll=function(){return g};this.getNextMidRoll=function(k,j){this.sort(j);if(e.length>=c+1){var i=e[c],h=b(i._offSet,j);if(h<k){c++;return i}}};this.getMidRolls=function(){return e};this.reset=function(){c=0};this.addMidRoll=function(h){e.push(h)};this.setPostRoll=function(h){g=h};this.sort=function(h){if(!h||h<1){h=1}e.sort(function(j,i){return b(j._offSet,h)-b(i._offSet,h)})};this.setVMAP=function(h){d=h};this.isVMAP=function(){return d?true:false};this.getVMAP=function(){return d}};function b(d,c){if(d.toString().slice(-1)==="%"){return c*parseFloat(d.slice(0,-1))/100}return parseFloat(d)}})(jwplayer);(function(j){var r=j.utils,c=j.events,d=c.JWPLAYER_MEDIA_TIME,f=c.state.PLAYING,p={CLICK:"onClick",PLAY:"onPlay",PAUSE:"onPause",ERROR:"onError",COMPLETE:"onComplete"},m="_staticLoadSuccess",b="_staticLoadFail",e="_clickHandler",h=function(w,C,u){var y=-1,A=this,v=j._[w.id];r.extend(this,new c.eventdispatcher());v[m]=function z(){w.callInternal("jwAddClickHandler",x(e));A.sendEvent(p.PLAY)};v[b]=function B(){A.sendEvent(p.ERROR)};v[e]=function t(){A.sendEvent(p.CLICK)};y=setTimeout(function(){w.callInternal("jwLoadStatic",C,u,x(m),x(b))},0);A.removeListeners=function(){clearTimeout(y);A.resetEventListeners()};A.stop=function(){w.callInternal("jwStopStatic")};function x(D){return["jwplayer","_",w.id,D].join(".")}},i,s,o="data:image/png;base64,",a="iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAw0lEQVQ4y2NgwATcQJwGxGuB+BoQP4PSa6Hi3AwEQCAQX4BqxIUvQNVhBcUENKPjYmwueEYGDkYOg4tkGnIViPlAhiSiS+7du/eHs7PzG2QxFxeXNyBxLAaB9DOsQJcAaXj79u1fmEEwPojGYghIP8N5bE6Faayurv6Ix4BnUP0MD3H5GWTAfyAA0XjC5SFOl4C8guwS9DBCd8kKXAaghwkOg1ZSLXaokk5AIIhMQ0KonneQXURMLg4mVBzAypN1xJYnALKHAXPzEPJQAAAAAElFTkSuQmCC",g="iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAiklEQVQ4y2NgwATcQJwGxGuB+BoQP4PSa6Hi3AwEQCAQX4BqxIUvQNVhBcUENKPjYmwueEYGDkYOg4tkGnIViPlAhiTiU/gfCAgYBNLPsIJCQ0D6Gc5TaAhIP8NDbBpxASyGPKSaSygNk5VUix2qpBMQCCLTkBCq5x1kFxGTi4MJFQew8mQdseUJAImp82D/nQbxAAAAAElFTkSuQmCC",n={cursor:"pointer",position:"absolute",margin:"auto",left:0,right:0,bottom:0,display:"block"},q="opacity 0.2s",k={"-webkit-transition":q,transition:q},l=function(w,T,Q,L){var E=-1,x=-1,N=this,D;r.extend(this,new c.eventdispatcher());var y=L.parentNode;var B=r.bounds(y).bottom;var K=document.getElementById(w.id+"_controlbar");var U=K.style.display==="none";var H=0;if(U){H=K.style.opacity;K.style.opacity=0;K.style.display="inline-block"}var M=r.bounds(K).top||(B-40);if(U){K.style.opacity=H;K.style.displa="none"}var C=B-M;r.css.style(L,{bottom:C});D=document.createElement("img");D.id=w.id+"_vast_static";r.css.style(D,r.extend({"max-width":"100%",opacity:0},n,k));F([s,i]);V(i);L.appendChild(D);L.appendChild(s);E=setTimeout(O,5000);D.onerror=O;D.onload=function t(){clearTimeout(E);if(D.naturalWidth===0){return O()}A();r.css.style(D,{top:-D.height},true);r.css.style(s,{top:-D.height-8,bottom:D.height-8,left:D.width},true);r.css.style(i,{top:-16},true);S([L,D]);S(s,0.75);if(r.isMobile()){var W=new r.touch(D);W.addEventListener(r.touchEvents.TAP,z)}else{D.onclick=z;L.onmouseover=G;L.onmouseout=R}s.onclick=s.ontouchstart=v;i.onclick=i.ontouchstart=u;N.sendEvent(p.PLAY)};D.src=T;function O(){clearTimeout(E);N.sendEvent(p.ERROR);P()}function z(){N.sendEvent(p.CLICK)}function G(){S(s)}function R(){S(s,0.75)}function I(){S(i)}function J(){S(i,0.5)}function v(W){if(x===-1){W.preventDefault();L.onmouseover=L.onmouseout=null;F([D,s,i]);L.appendChild(i);x=setTimeout(function(){V(D);V(s);S(i,0.5);L.onmouseover=I;L.onmouseout=J;x=-1},250)}}function u(W){if(x===-1){W.preventDefault();L.onmouseover=L.onmouseout=null;L.appendChild(D);L.appendChild(s);x=setTimeout(function(){S([D,s]);L.onmouseover=G;L.onmouseout=R;x=-1},50);F(i)}}function S(X,W){r.css.style(X,{opacity:W||1})}function F(W){r.css.style(W,{opacity:0})}function V(W){if(L.contains(W)){L.removeChild(W)}}function A(){D.onload=D.onerror=null}function P(){A();V(D)}N.removeListeners=function(){clearTimeout(E);clearTimeout(x);L.onmouseover=L.onmouseout=s.onclick=i.onclick=null;N.resetEventListeners();A()};N.stop=function(){F([L,D,s,i]);setTimeout(P,400);V(s);V(i)}};j.vast.staticplayer=function(t,E){var G=this,w=t.getRenderingMode()!=="html5",z,K=0,J=0,D;r.extend(this,new c.eventdispatcher());G.type="static";if(w){j._=j._||{};j._[t.id]=j._[t.id]||{};E.style.visibility="hidden"}else{var H=r.isFF()?{}:k;E.style.opacity=0;r.css.style(E,r.extend({top:"",position:"absolute",width:"100%"},H));s=s||document.createElement("img");i=i||document.createElement("img");r.css.style([s,i],r.extend({opacity:0.75},n,H));s.src=o+a;i.src=o+g}t.onTime(C);G.playAd=function(O,N,M,L){J=x(M);D=L;if(z){z.removeListeners();z.stop()}if(w){z=new h(t,O,N)}else{z=new l(t,O,N,E)}z.addEventListener(p.PLAY,I);z.addEventListener(p.CLICK,B);z.addEventListener(p.ERROR,y)};function C(L){G.sendEvent(d,L)}function I(){K=t.getPosition();if(J>0){if(K===0){G.addEventListener(d,u)}else{G.addEventListener(d,v)}}F(p.PLAY)}function u(L){K=L.position;G.removeEventListener(d,u);G.addEventListener(d,v)}function v(L){var M=L.position-K;if(M>J){G.removeEventListener(d,v);G.stop()}}function B(){F(p.CLICK)}function y(){F(p.ERROR)}function F(L,M){M=M||{};M.tag=M.tag||D;G.sendEvent(L,M)}function x(M){if(!isNaN(M)){return M}var L=M.split(":");return Number(L[0]*3600+L[1]*60+L[2])}function A(L){return function(M){G.addEventListener(L,M)}}G.removeEvents=function(){G.resetEventListeners()};G.getState=function(){return f};G.stop=function(){if(K&&z){K=0;J=0;G.removeEventListener(d,u);G.removeEventListener(d,v);z.removeListeners();z.stop();F(p.COMPLETE)}};G.pause=function(){};G.onPlay=A(p.PLAY);G.onComplete=A(p.COMPLETE);G.onClick=A(p.CLICK);G.onError=A(p.ERROR)}})(window.jwplayer);(function(b){var a=b.utils,c="[ERRORCODE]";b.vast.tracker=function(h,e){var f=0,l=this,m,q=[];if(e){b._=b._||{};b._[e]=b._[e]||{};b._[e].trackedvast=b._[e].trackedvast||{};m=b._[e].trackedvast}function p(u){if(h.hasOwnProperty(u)){return h[u]}return[]}for(var o in h){if(h.hasOwnProperty(o)){if(o.indexOf("progress")===0){var i=""+o.split("_")[1];var k={key:o,offset:i,tracked:false,percentage:false};if(/^\d+%$/.test(i)){k.percentage=true;k.offset=parseFloat(i)}else{k.offset=a.seconds(i)}q.push(k)}}}l.started=false;l.firedError=false;l.hasComp=false;l.addUrl=function(v,u){if(h.hasOwnProperty(v)){h[v].push(u)}else{h[v]=[];h[v].push(u)}};function r(x,w){var B=p(x),v,u,A;if(m){m[x]=m[x]||[]}for(v=0;v<B.length;v++){u=B[v];if(u){if(w){for(var y in w){if(w.hasOwnProperty(y)){var z=w[y];u=u.replace(y,z)}}}A=new Image();A.src=u;if(m){m[x].push(u)}}}}function g(){l.started=true;r("start")}function d(){l.started=true;r("breakStart")}function t(x,w){var y=0.25*w,v=0.5*w,u=0.75*w;if(x>=y&&f<y){r("firstQuartile")}else{if(x>=v&&f<v){r("midpoint")}else{if(x>=u&&f<u){r("thirdQuartile")}}}n(x,w);f=x}function n(x,w){for(var v=q.length;v--;){var u=q[v];if(!u.tracked){var y=u.offset;if(u.percentage){y=w*y/100}if(x>=y){u.tracked=true;r(u.key)}}}}function s(v){l.firedError=true;v=v||900;var u={};u[c]=v;r("error",u)}function j(u){return function(){r(u)}}l.creativeView=j("creativeView");l.start=g;l.click=j("click");l.skip=j("skip");l.complete=j("complete");l.pause=j("pause");l.resume=j("resume");l.mute=j("mute");l.unmute=j("unmute");l.fullscreen=j("fullscreen");l.expand=j("expand");l.collapse=j("collapse");l.acceptInvitation=j("acceptInvitation");l.close=j("close");l.rewind=j("rewind");l.impression=j("impression");l.breakStart=d;l.breakEnd=j("breakEnd");l.time=t;l.error=s}})(window.jwplayer);(function(f){var d=f.jwplayer,e=d.events,a=d.utils,h=d.vast;h.vloader=function(z,j){var y=this,q,B=[],w=-1,o,p=[],v=false;a.extend(y,new e.eventdispatcher());y.load=function(D,F){B.push(D);v=false;var E=l(D);if(E){if(!F&&"withCredentials" in E){E.withCredentials=true}o=E;clearTimeout(w);w=setTimeout(function(){u(E);n("Timeout",D)},5000)}};function l(D){return a.ajax(D,function(E){clearTimeout(w);A(E,D)},function(H,J,G){if(G.withCredentials===true){var F=true;y.load(D,F);return}if(j.getRenderingMode()==="flash"&&H!=="Invalid XML"&&b(D)){d._=d._||{};d._[j.id]=d._[j.id]||{};d._[j.id]["_flashLoadSuccess"]=function E(K){clearTimeout(w);y.parseXmlString(K,D)};d._[j.id]["_flashLoadFail"]=function I(K){clearTimeout(w);a.log(K);n(K,D)};j.callInternal("jwLoadXML",D,'jwplayer._["'+j.id+'"]._flashLoadSuccess','jwplayer._["'+j.id+'"]._flashLoadFail');return}clearTimeout(w);n(H,D)})}y.destroy=function(){clearTimeout(w);u(o);j=null};y.scheduledAd=function(){return z};y.allAds=function(){return p};y.adPod=function(){var D=[];a.foreach(p,function(E,F){if(F.sequence){D.push(F)}});D.sort(function(F,E){return F.sequence-E.sequence});return D};y.adBuffet=function(){var D=[];a.foreach(p,function(E,F){if(!F.sequence){D.push(F)}});return D};y.history=function(){return B};y.parseXmlString=function(E,D){A({responseXML:c(E)},D)};function u(D){if(D){D.onload=null;D.onreadystatechange=null;D.onerror=null;if(D.abort){D.abort()}}}function A(E,D){q=q||new h.vparser();try{q.parse(E.responseXML)}catch(G){t(G.message,G.code||900,D);return}var F=q.parsedAds();if(F&&F.length){p=F;a.foreach(p,function(H,J){if(J.wrappedURI){var I=new h.vloader(z,j);I.addEventListener(e.COMPLETE,function(){C(J,I.allAds())});I.addEventListener(e.ERROR,function(K){t(K.message,K.code,K.url)});I.load(J.wrappedURI)}});i()}else{t("Ad Tag Empty",101,D)}}function C(E,D){var F=r(E,D);Array.prototype.splice.apply(p,[p.indexOf(E),1].concat(F));i()}function r(F,E){var D=[];a.foreach(E,function(G,H){if(F.companions){H.companions=(H.companions?H.companions:[]).concat(F.companions)}if(F.trackers){H.trackers=s(H.trackers,F.trackers)}D.push(H)});return D}function s(E,D){E=E||{};a.foreach(D,function(F,G){if(E[F]){E[F]=E[F].concat(G)}else{E[F]=G}});return E}function i(){var D=false;a.foreach(p,function(E,F){if(F.wrappedURI){D=true}});if(!D){m()}}function m(){var I=p.slice(0);var H=I.length;for(var E=I.length;E--;){var G=I[E];if(!G.media||!G.media.length){I.length--}}var F=H===0;var D=I.length!==H;if(F||D){t("Ad Tag Empty",101,B[B.length-1]);return}x(e.COMPLETE,y)}function n(E,D){if(E==="Invalid XML"){t(E,100,D)}else{t("VAST could not be loaded",301,D)}}function k(){if(B&&B.length){return B[0]}return""}function t(F,E,D){if(v){return}else{v=true}y.sendEvent(e.ERROR,{message:F,code:E,vloader:y,url:k()||D,wrappedUrl:D})}function x(D,E){return y.sendEvent(D,E)}};function c(i){if(g(i)){return i}return a.parseXML(i)}function g(i){return(typeof Node==="object"?i instanceof Node:i&&typeof i==="object"&&typeof i.nodeType==="number"&&typeof i.nodeName==="string")}function b(i){return(i&&i.indexOf("://")>=0)&&(i.split("/")[2]!=f.location.href.split("/")[2])}})(window);(function(a){a.vast.vpaidevents={AD_LOADED:"AdLoaded",AD_STARTED:"AdStarted",AD_STOPPED:"AdStopped",AD_LINEAR_CHANGE:"AdLinearChange",AD_EXPANDED_CHANGE:"AdExpandedChange",AD_REMAINING_TIME_CHANGE:"AdRemainingTimeChange",AD_VOLUME_CHANGE:"AdVolumeChange",AD_IMPRESSION:"AdImpression",AD_VIDEO_START:"AdVideoStart",AD_VIDEO_FIRST_QUARTILE:"AdVideoFirstQuartile",AD_VIDEO_MIDPOINT:"AdVideoMidpoint",AD_VIDEO_THIRD_QUARTILE:"AdVideoThirdQuartile",AD_VIDEO_COMPLETE:"AdVideoComplete",AD_CLICK_THRU:"AdClickThru",AD_USER_ACCEPT_INVITATION:"AdUserAcceptInvitation",AD_USER_MINIMIZE:"AdUserMinimize",AD_USER_CLOSE:"AdUserClose",AD_PAUSED:"AdPaused",AD_PLAYING:"AdPlaying",AD_LOG:"AdLog",AD_ERROR:"AdError"}})(jwplayer);(function(g){var d=g.jwplayer,a=d.vast,e="PLAYING",h="PAUSED",i="BUFFERING",b="IDLE",c=true,f=false;a.vpaidplayer=function(k,D,y,w){var E=this,q,j=f,n=-1,r=f,m=new d.events.eventdispatcher(),v=a.vpaidevents,J={TIME:"onTime",CLICK:"onClick",PLAY:"onPlay",PAUSE:"onPause",ERROR:"onError",COMPLETE:"onComplete",EXPANDED_CHANGE:"onExpandedChange"};E.type="vpaid";E.blocking=null;function s(){d._=d._||{};d._[k.id]=d._[k.id]||{};k.callInternal("jwLoadVPAID",D,K(O),K(M))}function O(){u(v.AD_LOADED,N);u(v.AD_STARTED,z);u(v.AD_LINEAR_CHANGE,B);u(v.AD_EXPANDED_CHANGE,I);u(v.AD_PAUSED,l);u(v.AD_PLAYING,o);u(v.AD_STOPPED,H);u(v.AD_REMAINING_TIME_CHANGE,G);u(v.AD_CLICK_THRU,p);u(v.AD_ERROR,M);A("initAd",k.getWidth(),k.getHeight(),k.getFullscreen()?"fullscreen":"normal",0,w)}function M(){C(J.ERROR)}function C(P,Q){Q=Q||{};if(!Q.tag){Q.tag=y}m.sendEvent(P,Q)}this.setVolume=function(P){F("adVolume",P)};function N(){B();F("adVolume",k.getMute()?0:k.getVolume()/100);A("startAd")}function z(){if(q&&E.blocking){E.blocking.hide()}C(J.PLAY,{oldstate:i,newstate:e,linear:q?"linear":"nonlinear"})}function p(){C(J.CLICK)}function B(){var R,P;q=x("adLinear");if(q){if(E.blocking){E.blocking.hide()}else{var Q=k.getState();if(Q==e||Q==i){j=c;k.pause();k.setControls(f)}}P=k.getHeight()}else{if(E.blocking){E.blocking.destroy();E.blocking=null}else{if(j){k.play(c);k.setControls(c)}}R=k.getSafeRegion();P=R.height+R.y}A("resizeAd",k.getSafeRegion().width,P,k.getFullscreen()?"fullscreen":"normal")}function I(){var P=x("adExpanded");C(J.EXPANDED_CHANGE,{expanded:P})}function H(){if(j){k.play(c);k.setControls(c)}C(J.COMPLETE)}function l(){if(!r){r=c;C(J.PAUSE,{newstate:h,oldstate:e})}}function o(){if(r){r=f;C(J.PLAY,{newstate:e,oldstate:h})}}function G(){var P=x("adRemainingTime");if(n<0){n=P}C(J.TIME,{position:n-P,duration:n})}function A(){var P=Array.prototype.slice.call(arguments);P.unshift("jwCallVPAID");setTimeout(function(){k.callInternal.apply(this,P)},0)}function x(P){return k.callInternal("jwGetVPAIDProperty",P)}function F(Q,P){k.callInternal("jwSetVPAIDProperty",Q,P)}function u(P,Q){k.callInternal("jwAddVPAIDListener",P,K(Q))}function K(Q){var P="_vpaidBridge"+Math.floor(Math.random()*10000);d._[k.id][P]=L(Q);return"jwplayer._['"+k.id+"']['"+P+"']"}function L(P){return function(){setTimeout(P,0)}}function t(P){return function(Q){m.addEventListener(P,Q)}}E.setVolume=function(P){F("adVolume",P/100)};E.onTime=t(J.TIME);E.onComplete=t(J.COMPLETE);E.onClick=t(J.CLICK);E.onPlay=t(J.PLAY);E.onPause=t(J.PAUSE);E.onError=t(J.ERROR);E.onExpandedChange=t(J.EXPANDED_CHANGE);E.play=function(){A("resumeAd")};E.pause=function(){A("pauseAd")};E.stop=function(){A("stopAd")};E.resize=function(P){if(!q){var Q=k.getSafeRegion();A("resizeAd",k.getWidth(),Q.height+Q.y,P?"fullscreen":"normal")}else{A("resizeAd",k.getWidth(),k.getHeight(),P?"fullscreen":"normal")}};E.removeEvents=function(){m.resetEventListeners()};E.destroy=function(){if(!E){return}E.removeEvents();E=null};E.getState=function(){if(!x("adLinear")){return b}else{return r?h:e}};s()}})(window);(function(d){var b=d.utils,c="vmap";d.vast.vmapparser=function(y,t){var p=h(y,"AdBreak",c);for(var o=0;o<p.length;o++){var x={},q={},n=p[o],m=e(n,"timeOffset"),v=e(n,"breakType"),k=h(n,"AdTagURI")[0],u=h(n,"VASTData")[0],s=e(k,"templateType"),z=a(k),w=h(n,"TrackingEvents",c)[0],r=h(w,"Tracking",c);x._type=v;if(u){x._adXML=h(u,"VAST")[0]}else{if(s=="vast1"||s=="vast2"||s=="vast3"){x._adTag=z}else{continue}}if(r){for(var l=0;l<r.length;l++){g(q,r[l])}}x._trackers=q;x._type=v;switch(m){case"start":x._offSet="pre";t.setPreRoll(x);break;case"100%":case"end":x._offSet="post";t.setPostRoll(x);break;default:if(/^#/.test(m)){break}else{if(/^\d\d?(?:\.\d+)?%$/.test(m)){x._offSet=m}else{x._offSet=b.seconds(m)}}t.addMidRoll(x)}}t.sort()};d.vast.vparser=function(o){var s=[],u=null;if(o){m(o)}this.parse=m;this.parsedAds=function(){return s};this.error=function(){return u};function m(w){var B,v,A,z=[];if(w.nodeName==="VAST"){B=w}else{B=h(w,"VAST")[0];if(!B){B=h(w,"VideoAdServingTemplate")[0]}}if(!B){q(101,"Invalid VAST response")}if(B.tagName==="VideoAdServingTemplate"){v=1}else{v=parseFloat(e(B,"version")||0)}A=h(B,"Ad");for(var x=0;x<A.length;x++){var y=p(v,A[x]);z.push(y)}s=z}function p(w,A,v){v=v||{};var B=h(A,"InLine")[0],C=h(A,"Wrapper")[0],x=B?B:C,z=x?a(h(x,"AdTitle")[0]):"",y;v.sequence=e(A,"sequence");v.adTitle=z;if(!w||w>3||w<1){q(102,"Vast version not supported")}if(x){if(w>=2){y=k(x);i(x,"Impression",y.trackers);i(x,"Error",y.trackers)}else{y=l(x)}if(C){y.wrappedURI=a(h(C,"VASTAdTagURI")[0])||a(h(C,"VASTAdTagURL")[0])}y=n(v,y)}else{q(101,"Invalid VAST response")}return y}function n(x,w){var v=b.extend({},x);b.foreach(w,function(y,z){if(b.exists(v[y])){if(b.typeOf(z)=="array"){v[y]=v[y].concat(z)}else{if(b.typeOf(z)=="object"){v[y]=b.extend(v[y],w[y])}else{v[y]=z}}}else{v[y]=z}});return v}function q(w,v){u={code:w,message:v,toString:function(){return this.code+" "+this.message}};throw u}function i(y,x,z){var v=h(y,x),w;for(w=0;w<v.length;w++){f(z,x.toLowerCase(),a(v[w]))}}function k(A){var K=h(h(A,"Creatives")[0],"Creative"),E,z,x,B={},J={trackers:B},C,I,D,y,F,H;J.adsystem=a(h(A,"AdSystem")[0]);for(z=0;z<K.length;z++){E=K[z];C=h(E,"Linear")[0];I=h(E,"NonLinear")[0];D=h(h(E,"TrackingEvents")[0],"Tracking");if(C||I){for(x=0;x<D.length;x++){g(B,D[x])}}y=a(h(E,"AdParameters")[0]);if(y){J.adParams=y}if(C){F=h(C,"VideoClicks")[0];H=a(h(F,"ClickThrough")[0]);var G=h(F,"ClickTracking");var v=e(C,"skipoffset");for(var w=0;w<G.length;w++){f(B,"click",a(G[w]))}if(H){J.clickthrough=H}if(v){J.skipoffset=v}j(C,J)}else{if(I){H=a(h(I,"NonLinearClickThrough")[0]);if(H){J.clickthrough=H}t(E,J)}else{r(E,J)}}}return J}function l(H){var B=h(H,"Video")[0]||H,y=h(H,"NonLinear")[0],z={},P={trackers:z},N,K,C,A,v,O,G,Q,w,x,D,E;if(B){N=h(h(H,"TrackingEvents")[0],"Tracking");for(K=0;K<N.length;K++){g(z,N[K])}A=h(h(H,"Impression")[0],"URL");for(K=0;K<A.length;K++){C=A[K];f(z,"impression",a(C))}v=h(h(H,"Error")[0],"URL");for(K=0;K<v.length;K++){C=v[K];f(z,"error",a(C))}Q=h(B,"VideoClicks")[0];w=a(h(Q,"ClickThrough")[0]);var M=h(h(Q,"ClickTracking")[0],"URL");for(var J=0;J<M.length;J++){f(z,"click",a(M[J]))}if(w){P.clickthrough=w}if(x){f(z,"click",x)}j(B,P);D=h(B,"AdParameters")[0];if(D){E=e(D,"apiFramework");if(E.toLowerCase()=="vpaid"){for(var L=0;L<P.media.length;L++){P.media[L].adType=E}P.adParams=a(D)}}}if(y){var I=P.media||[],F=h(y,"URL")[0];I.push({type:e(y,"creativeType"),file:a(F),adType:e(y,"apiFramework")});P.media=I}O=h(H,"CompanionAds")[0];O=h(O,"Companion");if(!P.companions){P.companions=[]}for(K=0;K<O.length;K++){G=O[K];P.companions.push({width:parseInt(e(G,"width"),10),height:parseInt(e(G,"height"),10),type:e(G,"resourceType"),resource:a(h(G,"URL")[0]),trackers:[],clickthrough:""})}return P}function j(w,x){var v=h(h(w,"MediaFiles")[0],"MediaFile"),A=x.media?x.media:[];for(var y=0;y<v.length;y++){var z={type:e(v[y],"type"),file:a(v[y]),adType:e(v[y],"apiFramework")||""};if(z.file){A.push(z)}}x.media=A}function t(y,v){var x=[],w=h(y,"StaticResource")[0];if(w){x.push({type:e(w,"creativeType"),file:a(w),adType:e(h(y,"NonLinear")[0],"apiFramework")||"static",minDuration:e(h(y,"NonLinear")[0],"minSuggestedDuration")||"00:00:00"});v.media=x}}function r(F,y){var K=h(h(F,"CompanionAds")[0],"Companion"),H,B,z,I,J,A,v,w,G,E,C=y.companions?y.companions:[];for(B=0;B<K.length;B++){H=K[B];I=h(H,"StaticResource")[0];J=h(H,"IFrameResource")[0];A=h(H,"HTMLResource")[0];var D={};if(I){v=e(I,"creativeType");w=a(I)}else{if(J){v="iframe";w=a(J)}else{if(A){v="html";w=a(A)}else{return}}}var x=h(h(H,"TrackingEvents")[0],"Tracking");for(z=0;z<x.length;z++){G=e(x[z],"event");f(D,G,a(x[z]))}E=a(h(H,"CompanionClickThrough")[0]);C.push({width:parseInt(e(H,"width"),10),height:parseInt(e(H,"height"),10),type:v,source:w,trackers:D,clickthrough:E})}y.companions=C}};function h(j,l,i){var k=[];if(j){k=j.getElementsByTagName(l);if(i&&k&&k.length===0){k=j.getElementsByTagName(i+":"+l)}}return k}function e(i,j){if(!i){return null}return i.getAttribute(j)}function a(j){if(j){var i=j.textContent||j.text;if(i){return b.trim(i)}}return""}function g(m,i){var k=e(i,"event");if(k==="progress"){var l=e(i,"offset");k=k+"_"+l}var j=a(i);f(m,k,j)}function f(k,j,i){if(!k[j]){k[j]=[]}if(i){k[j].push(i)}}})(window.jwplayer);