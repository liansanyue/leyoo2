(function(b){var a={};var e=function(g){this._source=[];this.fails=[];this._index=0;this.failed=0;this.loaded=0;this.percent="0%";this._init(g);this.total=this._source.length;var f=this;setTimeout(function(){f._load()},25)};e.prototype={_rsuffix:/\.(js|css|mp3)$/,_init:function(f){if(typeof f==="string"){this._source.push(f)}else{if(Array.isArray(f)){this._source=f}else{throw"Loader Error: arguments must be String|Array."}}},_get_load_method:function(g){var f=(f=g.match(this._rsuffix))?f[1]:"img";return"_"+f},_js:function(h,i){var g=this;var f=document.createElement("script");f.onload=function(){i&&i.call(g,true,h)};f.onerror=function(){i&&i.call(g,false,h)};f.type="text/javascript";f.src=h;document.head.appendChild(f)},_css:function(g,h){var f=this;var i=document.createElement("link");i.type="text/css";i.rel="stylesheet";i.href=g;document.head.appendChild(i);h&&h.call(f,true,g)},_img:function(h,i){var g=this;var f=new Image();f.onload=function(){a[h]=f;i&&i.call(g,true,h)};f.onerror=function(){i&&i.call(g,false,h)};f.src=h},_mp3:function(f,g){},_load:function(){if(this._index==this._source.length){return this._onend()}var f=this._source[this._index];if(!f){return}var g=this._get_load_method(f);this[g](f,this._loadend);this._onloadstart(f)},_loadend:function(f,g){if(f){++this.loaded}else{++this.failed;this.fails.push(g)}++this._index;this.percent=Math.ceil(this._index/this.total*100)+"%";this._onloadend(f,g);this._load()},_onloadstart:function(){},_onloadend:function(){},_onend:function(){},loadstart:function(f){if(typeof f==="function"){this._onloadstart=f}return this},loadend:function(f){if(typeof f==="function"){this._onloadend=f}return this},complete:function(f){if(typeof f==="function"){this._onend=f}return this},image:function(g,h){if(arguments.length==1){if(undefined==g){return a}var f=a[g];if(f){return f}f=new Image();f.src=g;return f}if(arguments.length==2){a[g]=h}}};var d=function(f,i,h){var g=document.createElement("style");g.innerHTML="@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-moz-keyframes loading{0%{-moz-transform:rotate(0deg);}100%{-moz-transform:rotate(360deg);}}@-o-keyframes loading{0%{-o-transform:rotate(0deg);}100%{-o-transform:rotate(360deg);}}@-ms-keyframes loading{0%{-ms-transform:rotate(0deg);}100%{-ms-transform:rotate(360deg);}}@keyframes loading{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"+".mp_loading{position:absolute; width:100%; height:100%; overflow:hidden; background-color:#E44B46; left:0; top:0; -webkit-transform-style:preserve-3d; z-index:1;}"+".mp_loading_clip{position:absolute; left:50%; top:50%; width:60px; height:60px; margin:-30px 0 0 -30px; overflow:hidden;  -webkit-animation:loading 1.2s linear infinite; -moz-animation:loading 1.2s linear infinite; -o-animation:loading 1.2s linear infinite; -ms-animation:loading 1.2s linear infinite; animation:loading 1.2s linear infinite;}"+".mp_loading_bar{position:absolute; left:0; top:0; width: 54px;height: 54px; border-radius:50px; overflow:hidden; clip: rect(0px,36px,70px,0); background:transparent; border:3px solid #fff; -webkit-mask:-webkit-gradient(linear,0 0,0 100%,from(rgba(255,255,255,1)),to(rgba(255,255,255,0)));}"+".mp_loading_txt{width: 100px;height: 30px;line-height: 30px;position: absolute;left: 50%;top: 50%;margin-left: -50px;margin-top: -15px;text-align: center;color: #fff;}";document.getElementsByTagName("head")[0].appendChild(g);var o=document,k=arguments,i=typeof i=="string"?i:"#E44B46";var j=o.getElementById("MP_loading"),n=o.getElementById("MP_precent");if(!j){j=o.createElement("div");j.className="mp_loading";j.innerHTML='<div class="mp_loading_clip"><div class="mp_loading_bar" style="border-color:"'+i+"></div></div>";n=o.createElement("txt");n.className="mp_loading_txt";j.calssName="mp_loading";j.style.backgroundColor=i;j.appendChild(n);document.body.appendChild(j)}this._loadDom=j;this._txtDom=n;var l=this;var m=k[k.length-1];m=typeof m=="function"?m:function(){};new e(f).loadend(function(p){l._txtDom.innerHTML=this.percent}).complete(function(){l._loadDom.style.display="none";m.apply(l)})};if(typeof(halo)=="undefined"){throw ("缺少依赖库 halo.js");b.loader=e;b.loadermsk=d}var c=function(f){return new e(f)};halo.add("loader",c);halo.add("loadermsk",d)})(window);