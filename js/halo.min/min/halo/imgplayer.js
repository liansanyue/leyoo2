halo.use(function(a){var b=a.webkit,c=a.addClass,d=a.removeClass;a.get_transfrom_value,a.stylesheet(".PAGE_DRAG_KEEP{"+b+"transition:"+b+"transform .2s linear;}"),a.stylesheet(".PAGE_DRAG_H_KEEP{"+b+"transition:"+b+"transform .2s linear;}"),a.stylesheet(".PAGE_DRAG_RESTORE{"+b+"transition:"+b+"transform .1s linear;}"),halo.add("imgplayer",function(e,f,g){if(!e)throw"parameter is not a DOM object!";"boolean"==typeof motio&&(g=f,f="X"),"undefined"==typeof g&&(g=!0),f=f||"X",f=f.toUpperCase();var h=a.css(e,"positon");"static"!=h&&h||(e.style.position="relative");var i=document.createElement("div");i.style.cssText="position:absolute; width:100%; height:100%; left:0; top:0;";for(var j=e.childNodes,k=0,l=[];j.length;)1==j[0].nodeType&&(j[0].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:0; top:0; "+(0==k?"display:block;":" display:none;"),++k,l.push(j[0])),i.appendChild(j[0]);if(e.appendChild(i),!(1>=k)){var m={move:function(){}};if(g){var n=document.createElement("div"),o="border:1px solid rgba(0,0,0,.3); background-color:rgba(255,255,255,.3);",q="position:relative; display:inline-block; width:8px; height:8px; overflow:hidden; border-radius:5px;",r="border:1px solid rgba(0,0,0,0); background-color:#e62548;";n.style.cssText="position:absolute; width:auto; height:10px; text-align:center; left:0; bottom:10px; left:50%; "+b+"transform:translate(-50%,0);",icons=[];for(var t=0;k>t;++t){var u=document.createElement("i");u.style.cssText=q+(0==t?r:o+" margin-left:8px;"),n.appendChild(u),icons.push(u)}e.appendChild(n),m.move=function(a,b){icons[a].style.cssText+=o,icons[b].style.cssText+=r}}var I,R,v="X"==f?"PAGE_DRAG_H_KEEP":"PAGE_DRAG_KEEP",w="PAGE_DRAG_RESTORE",x=function(a){return a>=0?a%k:k+a%k},y=!1,z=0,A=0,B=0,C=x(-1),D=x(1),E=0,F="none",G="none",H="none",J=!1,K=function(a){if(a.stopPropagation(),a.preventDefault(),J=!0,R&&clearTimeout(R),!y){var b=a.changedTouches||a.targetTouches;z=b[0].pageX,A=b[0].pageY}},L=function(c){if(J=!0,c.stopPropagation(),c.preventDefault(),!y){var d=c.changedTouches||c.targetTouches,e=d[0].pageX,g=d[0].pageY;if("none"==F){var h=e-z,j=g-A;if(Math.abs(h)==Math.abs(j))return c.preventDefault(),c.stopPropagation(),void 0;if(F=Math.abs(h)>Math.abs(j)?"X":"Y",f!=F)return a.off(i,"touchmove",L,!1),a.off(i,"release",M,!1),a.on(i,"release",P,!1),void 0}"X"==f?(E=e-z,l[B].style[b+"transform"]="translate3d("+E+"px,0,0)"):(E=g-A,l[B].style[b+"transform"]="translate3d(0,"+E+"px,0)"),G=E>0?"X"==F?"right":"up":0>E?"X"==F?"left":"down":"none",G!=H&&(E>0?("X"==F?l[C].style.left="-100%":l[C].style.top="-100%",l[C].style.display="block",l[D].style.display="none",I=C):0>E&&("X"==F?l[D].style.left="100%":l[D].style.top="100%",l[D].style.display="block",l[C].style.display="none",I=D),H=G),l[I].style[b+"transform"]="X"==f?"translate3d("+E+"px,0,0)":"translate3d(0,"+E+"px,0)",S.ondrag&&S.ondrag(E,B,I)}},M=function(){if(S.auto&&Q(),!y){y=!0;var e=Math.abs(E),f=30>e;S.release&&S.release(f,B,I),f&&0!=e?(c(l[B],w),c(l[I],w),l[I].style[b+"transform"]=l[B].style[b+"transform"]="translate3d(0,0,0)",setTimeout(function(){d(l[B],w),d(l[I],w),l[I].style.display="none",E=0,F="none",G="none",H="none",y=!1,J=!1},200)):0!=e?N():(y=!1,J=!1)}},N=function(){c(l[B],v),c(l[I],v),p=E>0?"":"-",l[I].style[b+"transform"]=l[B].style[b+"transform"]="X"==f?"translate3d("+p+l[B].offsetWidth+"px,0,0)":"translate3d(0,"+p+l[B].offsetHeight+"px,0)",setTimeout(function(){d(l[B],v),d(l[I],v),E=0,F="none",G="none",H="none",y=!1,J=!1,l[B].style.display="none","function"==typeof S.onchange&&S.onchange(B,I),m.move(B,I),B=I,C=x(B-1),D=x(B+1),l[B].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:0; top:0;"},300)},O=function(a){y||J||(y=!0,I=a,N())},P=function(){E=0,F="none",G="none",H="none",y=!1,J=!1,a.off(this,"release",P,!1),a.on(this,"touchmove",L,!1),a.on(this,"release",M,!1)},Q=function(){R=setTimeout(function(){var a=x(B+1);l[a].style.cssText="position:absolute; width:100%; height:100%; overflow:hidden; left:100%; top:0;",setTimeout(function(){S.auto&&O(a)},60),Q()},S.duration)};a.on(i,"touchstart",K,!1),a.on(i,"touchmove",L,!1),a.on(i,"release",M,!1),a.on(i,"forcerelease",M,!1);var S={move:O,auto:!0,duration:4e3};return Q(),S}})});