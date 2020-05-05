!function(){function t(){function t(){var t=P[G]("button");return t.className="bp-x",t[R]="&#215;",t}M=[];var o=P[G]("STYLE");o[R]="#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,.bp-x,#bp_loader{position:absolute;right:0}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;pointer-events:none;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:-webkit-flex;display:flex;margin:0;cursor:wait;z-index:9}#bp_loader svg{width:40%;max-height:40%;margin:auto;"+d("animation:","ldr .7s infinite linear;")+"}"+s("keyframes ldr{to{"+d("transform:","rotate(1turn);")+"}}")+"#bp_container img,#bp_sv,#bp_vid{max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{width:171vh}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}.bp-x{font-family:Arial;top:0;cursor:pointer;opacity:.8;font-size:3em;padding:0 .3em;color:#fff;background:transparent;border:0;text-shadow:0 0 2px #000}#bp_caption .bp-x{left:2%;top:auto;right:auto;bottom:100%;padding:0 .6em;background:#d74040;border-radius:2px 2px 0 0;font-size:2.3em;text-shadow:none}.bp-x:hover,.bp-x:focus{opacity:1}.bp-x:active{outline:0}@media (max-aspect-ratio:9/5){#bp_sv{height:53vw}}",P.head[F](o),b=P[G]("DIV"),b.id="bp_container",b.onclick=a,y=t(),b[F](y),m=P[G]("IMG"),g=P[G]("VIDEO"),g.id="bp_vid",g.autoplay=!0,g.controls=!0,g.loop=!0,z=P[G]("DIV"),z.id="bp_caption",T=t(),T.onclick=function(){p(z,"opacity:0"),J(function(){E=!1,b[H](z)},300)},z[F](T),I=P[G]("SPAN"),z[F](I),S=P[G]("DIV"),S.id="bp_loader",S[R]='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 399"><path d="M341 58.5C303 20.8 253 0 199.6 0 146.4 0 96.2 20.8 58.5 58.5 20.8 96.2 0 146.5 0 199.7 0 253 20.8 303.2 58.5 341c37.7 37.6 88 58.4 141.2 58.4 53.3 0 103.5-20.8 141.2-58.5 37.6-37.8 58.4-88 58.4-141.3 0-53.3-20.8-103.5-58.5-141.2zm-13 12.8c34.3 34.3 53.2 80 53.2 128.4h-41c0-77.4-63-140.4-140.5-140.4-4.6 0-9 .2-13.6.7V18.7c4.6-.4 9-.5 13.7-.5 48.5 0 94 18.8 128.4 53zM199.8 322c-67.4 0-122.2-55-122.2-122.3S132.3 77.5 199.7 77.5 322 132.3 322 199.7 267 322 199.6 322z"/></svg>',h=P[G]("DIV"),h.id="bp_sv",x=P[G]("IFRAME"),x.allowFullscreen=!0,x.onload=r,p(x,"border:0px;height:100%;width:100%"),h[F](x),m.onload=r,m.onerror=r.bind(null,"image"),O[Y]("resize",function(){_&&i(!0)}),P[Y]("keyup",function(t){27===t.keyCode&&D&&a(b)}),P[Y]("focus",function(t){D&&!b.contains(t.target)&&(t.stopPropagation(),y.focus())},!0),u=!0}function o(){var t=l.getBoundingClientRect();return d("transform:","translate3D("+(t.left-(b[W]-t.width)/2)+"px, "+(t.top-(b[q]-t.height)/2)+"px, 0) scale3D("+l[W]/f[W]+", "+l[q]/f[q]+", 0);")}function e(t){x.src="https://"+(t?"www.youtube.com/embed/"+w+"?enablejsapi=1&html5=1&rel=0&showinfo=0&":"player.vimeo.com/video/"+w+"?")+"autoplay=1"}function n(){4===f.readyState?r():g.error?r("video"):k=J(n,35)}function i(t){N||(t&&p(S,"top:"+l.offsetTop+"px;left:"+l.offsetLeft+"px;height:"+l[q]+"px;width:"+l[W]+"px"),l.parentElement[t?F:H](S),_=t)}function r(t){return _&&i(),L&&L(),"string"==typeof t?(c(),alert("Error: The requested "+t+" could not be displayed.")):(A&&!V&&M.push(v),p(f,o()),p(b,"opacity:1;"+j),B=J(B,410),D=!0,void J(function(){p(f,d("transition:","transform .35s;")+d("transform:","none;")),E&&J(p.bind(null,z,"opacity:1"),250)},60))}function a(t){var e=t.target,n=[z,T,g,I];e&&e.blur(),C||~n.indexOf(e)||(f.style.cssText+=o(),p(b,j),J(c,350),K(B),D=!1,C=!0)}function c(){P.body[H](b),b[H](f),p(b,""),(f===h?x:f).removeAttribute("src"),E&&(p(z,""),b[H](z)),C=!1}function p(t,o){t.style.cssText=o}function d(t,o){var e="-webkit-",n=t+o;return e+n+t+e+o+n}function s(t){return"@-webkit-"+t+"@"+t}var l,u,b,f,m,g,h,x,v,y,w,_,k,S,z,I,E,T,D,C,M,V,A,L,B,N,O=window,P=document,F="appendChild",G="createElement",H="removeChild",R="innerHTML",j="pointer-events:auto",q="clientHeight",W="clientWidth",Y="addEventListener",J=O.setTimeout,K=O.clearTimeout;O.BigPicture=function(o){u||t(),_&&(K(k),c()),w=o.ytSrc||o.vimeoSrc,L=o.animationStart,B=o.animationEnd,N=o.noLoader,l=o.el,A=!1,E=l.getAttribute("caption"),E&&(I[R]=E,b[F](z)),w?(i(!0),f=h,e(!!o.ytSrc)):o.imgSrc?(A=!0,v=o.imgSrc,V=~M.indexOf(v),!V&&i(!0),f=m,f.src=v):o.vidSrc?(i(!0),f=g,f.src=o.vidSrc,n()):(f=m,f.src="IMG"===l.tagName?l.src:O.getComputedStyle(l).backgroundImage.replace(/^url|[\(|\)|'|"]/g,"")),b[F](f),P.body[F](b)}}();
/*!
 * CartMan v0.2.14
 * Vladimir Ivanin
 * 2018
 */

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    var getDataAttrName=require("./help").getDataAttrName,system=require("../variables").system;function deleteItems(e,t){var s=getDataAttrName(system.selectors.item_delete),r=getDataAttrName(system.selectors.item);if(!$(s).length)return!1;var a=[];$.each(Cart.order.order_lines,function(e,t){a.push(getDataAttrName(system.selectors.item,t.id))});var m=$(r).not(a.join(","));m.addClass(system.classes.removed),e.hideCartItems&&m.slideUp(300,function(){$(this).remove()})}module.exports=deleteItems;
    },{"../variables":9,"./help":3}],2:[function(require,module,exports){
    var getDataAttrName=require("./help").getDataAttrName,system=require("../variables").system;function updateDiscounts(t){var e=getDataAttrName(system.selectors.discounts);if(!($(e).length&&t))return!1;$.ajax({url:"/cart_items",dataType:"html"}).done(function(t){var a=$(t).find(e).html();$(e).html(a)})}module.exports=updateDiscounts;
    },{"../variables":9,"./help":3}],3:[function(require,module,exports){
    function getDataAttrName(e,t){return"[data-"+(t?e+'="'+t+'"':e)+"]"}var declinationText=function(e,t){var a=["товар","товара","товаров"];t&&(a=t);return a[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]};function patchNumber(e){var t,a="string"==typeof e;if(!("number"==typeof e)&&!a)return 0;return a&&(e=(e=(e=e.replace(/\s/g,"")).replace(/,/g,".")).replace(/px/g,""),e=isNaN(+e)?1:+e),Number((t=e,Number(t)===t&&t%1!=0?e.toFixed(2):e))}function getTemplate(e,t){return e&&"string"==typeof e||(e=""),$.each(t,function(t,a){e=e.replace(a.reg,a.data)}),e}module.exports={getDataAttrName:getDataAttrName,getTemplate:getTemplate,declinationText:declinationText,patchNumber:patchNumber};
    },{}],4:[function(require,module,exports){
    var defaults=require("../variables").defaults,init=require("./init"),CartMan=function(n){this.state={cart_is_init:!1},this.options=$.extend(!0,{},defaults,n),this.init=init,EventBus?this.init():console.warn("Не подключен common.js")};CartMan.getInstance=function(n){return null==this.instance?this.instance=new CartMan(n):console.warn('CartMan уже объявлен, оставьте один "new CartMan"'),this.instance},module.exports=function(n){return CartMan.getInstance(n)};
    },{"../variables":9,"./init":5}],5:[function(require,module,exports){
    var updateClasses=require("./updateClasses"),updateDiscounts=require("./discounts"),deleteItems=require("./deleteItems"),updateData=require("./updateData");function init(){var e=this,t=e.options;EventBus.subscribe("delete_items:insales:cart",function(e){deleteItems(t,e),t.deleteItems(e)}),EventBus.subscribe("update_items:insales:cart",function(s){updateData(t,s),updateDiscounts(e.state.cart_is_init),updateClasses(s),t.updateItems(s),e.state.cart_is_init=!0})}module.exports=init;
    },{"./deleteItems":1,"./discounts":2,"./updateClasses":6,"./updateData":7}],6:[function(require,module,exports){
    var getDataAttrName=require("./help").getDataAttrName,system=require("../variables").system;function updateClasses(e){$.each(system.selectors,function(s,t){var a=$(getDataAttrName(t));0==e.order_lines.length?a.addClass(system.classes.empty):a.removeClass(system.classes.empty)})}module.exports=updateClasses;
    },{"../variables":9,"./help":3}],7:[function(require,module,exports){
    var getDataAttrName=require("./help").getDataAttrName,declinationText=require("./help").declinationText,patchNumber=require("./help").patchNumber,getTemplate=require("./help").getTemplate,system=require("../variables").system;function updateData(t,e){updateCounts(t,e),updateItemTotal(e.order_lines),updateTotalPrice(e.total_price,e.items_price)}function updateCounts(t,e){var a=$(getDataAttrName(system.selectors.items_count)),o=$(getDataAttrName(system.selectors.positions_count)),s=$(getDataAttrName(system.selectors.items_count_words)),r=$(getDataAttrName(system.selectors.positions_count_words)),m=0==e.order_lines.length?t.counterItemsTextEmpty:t.counterItemsText,n=0==e.order_lines.length?t.counterTemplateEmpty:t.counterTemplate,i=getTemplate(m,[{reg:/%c%/g,data:e.items_count},{reg:/%w%/g,data:declinationText(e.items_count,t.declination)}]),l=getTemplate(n,[{reg:/%c%/g,data:e.items_count}]);a.html(l),s.html(i);var c=0==e.order_lines.length?t.counterPositionTextEmpty:t.counterPositionText,p=0==e.order_lines.length?t.positionsTemplateEmpty:t.positionsTemplate,u=getTemplate(c,[{reg:/%c%/g,data:e.positions_count},{reg:/%w%/g,data:declinationText(e.positions_count,t.declination)}]),d=getTemplate(p,[{reg:/%c%/g,data:e.positions_count}]);o.html(d),r.html(u)}function updateTotalPrice(t,e){var a=$(getDataAttrName(system.selectors.total_price)),o=$(getDataAttrName(system.selectors.items_price));a.html(Shop.money.format(patchNumber(t))),o.html(Shop.money.format(patchNumber(e)))}function updateItemTotal(t){var e=system.item_class;_.forEach(t,function(t){$('[data-item-id="'+t.variant_id+'"]').each(function(a,o){$(o).find(getDataAttrName(system.selectors.item_total_price)).html(Shop.money.format(patchNumber(t.total_price))),$(o).find(getDataAttrName(system.selectors.item_count)).html(t.quantity),1==t.quantity?($(o).addClass(e.one),$(o).removeClass(e.moreOne).removeClass(e.moreNine)):t.quantity>1&&t.quantity<10?($(o).addClass(e.moreOne),$(o).removeClass(e.one).removeClass(e.moreNine)):($(o).addClass(e.moreNine),$(o).removeClass(e.one).removeClass(e.moreOne))})})}module.exports=updateData;
    },{"../variables":9,"./help":3}],8:[function(require,module,exports){
    window.CartMan=require("CartMan");
    },{"CartMan":4}],9:[function(require,module,exports){
    var defaults={declination:["товар","товара","товаров"],hideCartItems:!0,counterTemplate:"(%c%)",counterTemplateEmpty:null,positionsTemplate:"(%c%)",positionsTemplateEmpty:null,counterItemsText:"В вашей корзине %c%&nbsp;%w%",counterItemsTextEmpty:"В вашей корзине %c%&nbsp;%w%",counterPositionText:"В вашей корзине %c%&nbsp;%w%",counterPositionTextEmpty:"В вашей корзине %c%&nbsp;%w%",updateItems:function(){},deleteItems:function(){}},system={selectors:{quantity:"cartman-quantity",item:"item-id",item_delete:"item-delete",item_total_price:"cartman-item-total-price",item_count:"cartman-item-count",items_price:"cartman-items-price",total_price:"cartman-total-price",items_count:"cartman-items-count",positions_count:"cartman-positions-count",items_count_words:"cartman-items-text",positions_count_words:"cartman-positions-text",discounts:"cartman-discounts"},classes:{init:"is-cart-init",removed:"is-removed",empty:"is-cart-empty"},item_class:{one:"is-one",moreOne:"more-than-one",moreNine:"more-than-nine"}};module.exports={defaults:defaults,system:system};
    },{}]},{},[8]);
// Ion.RangeSlider, 2.3.0, © Denis Ineshin, 2010 - 2018, IonDen.com, Build date: 2018-12-11 23:11:14
!function(i){!jQuery&&"function"==typeof define&&define.amd?define(["jquery"],function(t){return i(t,document,window,navigator)}):jQuery||"object"!=typeof exports?i(jQuery,document,window,navigator):i(require("jquery"),document,window,navigator)}(function(a,c,l,t,_){"use strict";var i,s,o=0,e=(i=t.userAgent,s=/msie\s\d+/i,0<i.search(s)&&s.exec(i).toString().split(" ")[1]<9&&(a("html").addClass("lt-ie9"),!0));Function.prototype.bind||(Function.prototype.bind=function(o){var e=this,h=[].slice;if("function"!=typeof e)throw new TypeError;var r=h.call(arguments,1),n=function(){if(this instanceof n){var t=function(){};t.prototype=e.prototype;var i=new t,s=e.apply(i,r.concat(h.call(arguments)));return Object(s)===s?s:i}return e.apply(o,r.concat(h.call(arguments)))};return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,i){var s;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),e=o.length>>>0;if(0===e)return-1;var h=+i||0;if(Math.abs(h)===1/0&&(h=0),e<=h)return-1;for(s=Math.max(0<=h?h:e-Math.abs(h),0);s<e;){if(s in o&&o[s]===t)return s;s++}return-1});var h=function(t,i,s){this.VERSION="2.3.0",this.input=t,this.plugin_count=s,this.current_plugin=0,this.calc_count=0,this.update_tm=0,this.old_from=0,this.old_to=0,this.old_min_interval=null,this.raf_id=null,this.dragging=!1,this.force_redraw=!1,this.no_diapason=!1,this.has_tab_index=!0,this.is_key=!1,this.is_update=!1,this.is_start=!0,this.is_finish=!1,this.is_active=!1,this.is_resize=!1,this.is_click=!1,i=i||{},this.$cache={win:a(l),body:a(c.body),input:a(t),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]},this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]},this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var o,e,h,r=this.$cache.input,n=r.prop("value");for(h in o={skin:"flat",type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!0,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" — ",input_values_separator:";",disable:!1,block:!1,extra_classes:"",scope:null,onStart:null,onChange:null,onFinish:null,onUpdate:null},"INPUT"!==r[0].nodeName&&console&&console.warn&&console.warn("Base element should be <input>!",r[0]),(e={skin:r.data("skin"),type:r.data("type"),min:r.data("min"),max:r.data("max"),from:r.data("from"),to:r.data("to"),step:r.data("step"),min_interval:r.data("minInterval"),max_interval:r.data("maxInterval"),drag_interval:r.data("dragInterval"),values:r.data("values"),from_fixed:r.data("fromFixed"),from_min:r.data("fromMin"),from_max:r.data("fromMax"),from_shadow:r.data("fromShadow"),to_fixed:r.data("toFixed"),to_min:r.data("toMin"),to_max:r.data("toMax"),to_shadow:r.data("toShadow"),prettify_enabled:r.data("prettifyEnabled"),prettify_separator:r.data("prettifySeparator"),force_edges:r.data("forceEdges"),keyboard:r.data("keyboard"),grid:r.data("grid"),grid_margin:r.data("gridMargin"),grid_num:r.data("gridNum"),grid_snap:r.data("gridSnap"),hide_min_max:r.data("hideMinMax"),hide_from_to:r.data("hideFromTo"),prefix:r.data("prefix"),postfix:r.data("postfix"),max_postfix:r.data("maxPostfix"),decorate_both:r.data("decorateBoth"),values_separator:r.data("valuesSeparator"),input_values_separator:r.data("inputValuesSeparator"),disable:r.data("disable"),block:r.data("block"),extra_classes:r.data("extraClasses")}).values=e.values&&e.values.split(","),e)e.hasOwnProperty(h)&&(e[h]!==_&&""!==e[h]||delete e[h]);n!==_&&""!==n&&((n=n.split(e.input_values_separator||i.input_values_separator||";"))[0]&&n[0]==+n[0]&&(n[0]=+n[0]),n[1]&&n[1]==+n[1]&&(n[1]=+n[1]),i&&i.values&&i.values.length?(o.from=n[0]&&i.values.indexOf(n[0]),o.to=n[1]&&i.values.indexOf(n[1])):(o.from=n[0]&&+n[0],o.to=n[1]&&+n[1])),a.extend(o,i),a.extend(o,e),this.options=o,this.update_check={},this.validate(),this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null},this.init()};h.prototype={init:function(t){this.no_diapason=!1,this.coords.p_step=this.convertToPercent(this.options.step,!0),this.target="base",this.toggleInput(),this.append(),this.setMinMax(),t?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart()),this.updateScene()},append:function(){var t='<span class="irs irs--'+this.options.skin+" js-irs-"+this.plugin_count+" "+this.options.extra_classes+'"></span>';this.$cache.input.before(t),this.$cache.input.prop("readonly",!0),this.$cache.cont=this.$cache.input.prev(),this.result.slider=this.$cache.cont,this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'),this.$cache.rs=this.$cache.cont.find(".irs"),this.$cache.min=this.$cache.cont.find(".irs-min"),this.$cache.max=this.$cache.cont.find(".irs-max"),this.$cache.from=this.$cache.cont.find(".irs-from"),this.$cache.to=this.$cache.cont.find(".irs-to"),this.$cache.single=this.$cache.cont.find(".irs-single"),this.$cache.line=this.$cache.cont.find(".irs-line"),this.$cache.grid=this.$cache.cont.find(".irs-grid"),"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler()),this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none"),this.appendGrid(),this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.input[0].disabled=!1,this.removeDisableMask(),this.bindEvents()),this.options.disable||(this.options.block?this.appendDisableMask():this.removeDisableMask()),this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var t=this.options.min,i=this.options.max,s=this.options.from,o=this.options.to;t<s&&o===i?this.$cache.s_from.addClass("type_last"):o<i&&this.$cache.s_to.addClass("type_last")},changeLevel:function(t){switch(t){case"single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake),this.$cache.s_single.addClass("state_hover");break;case"from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.$cache.s_from.addClass("state_hover"),this.$cache.s_from.addClass("type_last"),this.$cache.s_to.removeClass("type_last");break;case"to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake),this.$cache.s_to.addClass("state_hover"),this.$cache.s_to.addClass("type_last"),this.$cache.s_from.removeClass("type_last");break;case"both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>'),this.$cache.cont.addClass("irs-disabled")},removeDisableMask:function(){this.$cache.cont.remove(".irs-disable-mask"),this.$cache.cont.removeClass("irs-disabled")},remove:function(){this.$cache.cont.remove(),this.$cache.cont=null,this.$cache.line.off("keydown.irs_"+this.plugin_count),this.$cache.body.off("touchmove.irs_"+this.plugin_count),this.$cache.body.off("mousemove.irs_"+this.plugin_count),this.$cache.win.off("touchend.irs_"+this.plugin_count),this.$cache.win.off("mouseup.irs_"+this.plugin_count),e&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count)),this.$cache.grid_labels=[],this.coords.big=[],this.coords.big_w=[],this.coords.big_p=[],this.coords.big_x=[],cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.no_diapason||(this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("focus.irs_"+this.plugin_count,this.pointerFocus.bind(this)),this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),this.options.keyboard&&this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard")),e&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this))))},pointerFocus:function(t){var i,s;this.target||(i=(s="single"===this.options.type?this.$cache.single:this.$cache.from).offset().left,i+=s.width()/2-1,this.pointerClick("single",{preventDefault:function(){},pageX:i}))},pointerMove:function(t){if(this.dragging){var i=t.pageX||t.originalEvent.touches&&t.originalEvent.touches[0].pageX;this.coords.x_pointer=i-this.coords.x_gap,this.calc()}},pointerUp:function(t){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,e&&a("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),(a.contains(this.$cache.cont[0],t.target)||this.dragging)&&this.callOnFinish(),this.dragging=!1)},pointerDown:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&("both"===t&&this.setTempMinInterval(),t||(t=this.target||"from"),this.current_plugin=this.plugin_count,this.target=t,this.is_active=!0,this.dragging=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=s-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(t),e&&a("*").prop("unselectable",!0),this.$cache.line.trigger("focus"),this.updateScene())},pointerClick:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&(this.current_plugin=this.plugin_count,this.target=t,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(s-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(t,i){if(!(this.current_plugin!==this.plugin_count||i.altKey||i.ctrlKey||i.shiftKey||i.metaKey)){switch(i.which){case 83:case 65:case 40:case 37:i.preventDefault(),this.moveByKey(!1);break;case 87:case 68:case 38:case 39:i.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(t){var i=this.coords.p_pointer,s=(this.options.max-this.options.min)/100;s=this.options.step/s,t?i+=s:i-=s,this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*i),this.is_key=!0,this.calc()},setMinMax:function(){if(this.options){if(this.options.hide_min_max)return this.$cache.min[0].style.display="none",void(this.$cache.max[0].style.display="none");if(this.options.values.length)this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else{var t=this._prettify(this.options.min),i=this._prettify(this.options.max);this.result.min_pretty=t,this.result.max_pretty=i,this.$cache.min.html(this.decorate(t,this.options.min)),this.$cache.max.html(this.decorate(i,this.options.max))}this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)}},setTempMinInterval:function(){var t=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval),this.options.min_interval=t},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(t){if(this.options&&(this.calc_count++,(10===this.calc_count||t)&&(this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.calcHandlePercent()),this.coords.w_rs)){this.calcPointerPercent();var i=this.getHandleX();switch("both"===this.target&&(this.coords.p_gap=0,i=this.getHandleX()),"click"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,i=this.getHandleX(),this.options.drag_interval?this.target="both_one":this.target=this.chooseHandle(i)),this.target){case"base":var s=(this.options.max-this.options.min)/100,o=(this.result.from-this.options.min)/s,e=(this.result.to-this.options.min)/s;this.coords.p_single_real=this.toFixed(o),this.coords.p_from_real=this.toFixed(o),this.coords.p_to_real=this.toFixed(e),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real),this.target=null;break;case"single":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(i),this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);break;case"from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(i),this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case"to":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(i),this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both":if(this.options.from_fixed||this.options.to_fixed)break;i=this.toFixed(i+.001*this.coords.p_handle),this.coords.p_from_real=this.convertToRealPercent(i)-this.coords.p_gap_left,this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.convertToRealPercent(i)+this.coords.p_gap_right,this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both_one":if(this.options.from_fixed||this.options.to_fixed)break;var h=this.convertToRealPercent(i),r=this.result.from_percent,n=this.result.to_percent-r,a=n/2,c=h-a,l=h+a;c<0&&(l=(c=0)+n),100<l&&(c=(l=100)-n),this.coords.p_from_real=this.calcWithStep(c),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.calcWithStep(l),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,this.result.from=this.convertToValue(this.coords.p_single_real),this.result.from_pretty=this._prettify(this.result.from),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.from_pretty=this._prettify(this.result.from),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.result.to_pretty=this._prettify(this.result.to),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to])),this.calcMinMax(),this.calcLabels()}},calcPointerPercent:function(){this.coords.w_rs?(this.coords.x_pointer<0||isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(t){return t/(100-this.coords.p_handle)*100},convertToFakePercent:function(t){return t/100*(100-this.coords.p_handle)},getHandleX:function(){var t=100-this.coords.p_handle,i=this.toFixed(this.coords.p_pointer-this.coords.p_gap);return i<0?i=0:t<i&&(i=t),i},calcHandlePercent:function(){"single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(t){return"single"===this.options.type?"single":this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2<=t?this.options.to_fixed?"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&(cancelAnimationFrame(this.raf_id),this.raf_id=null),clearTimeout(this.update_tm),this.update_tm=null,this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0),(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)&&(this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow()),this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)&&((this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key)&&(this.drawLabels(),this.$cache.bar[0].style.left=this.coords.p_bar_x+"%",this.$cache.bar[0].style.width=this.coords.p_bar_w+"%","single"===this.options.type?(this.$cache.bar[0].style.left=0,this.$cache.bar[0].style.width=this.coords.p_bar_w+this.coords.p_bar_x+"%",this.$cache.s_single[0].style.left=this.coords.p_single_fake+"%"):(this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%",this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%",(this.old_from!==this.result.from||this.force_redraw)&&(this.$cache.from[0].style.left=this.labels.p_from_left+"%"),(this.old_to!==this.result.to||this.force_redraw)&&(this.$cache.to[0].style.left=this.labels.p_to_left+"%")),this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.writeToInput(),this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||(this.$cache.input.trigger("change"),this.$cache.input.trigger("input")),this.old_from=this.result.from,this.old_to=this.result.to,this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange(),(this.is_key||this.is_click)&&(this.is_key=!1,this.is_click=!1,this.callOnFinish()),this.is_update=!1,this.is_resize=!1,this.is_finish=!1),this.is_start=!1,this.is_key=!1,this.is_click=!1,this.force_redraw=!1))},drawLabels:function(){if(this.options){var t,i,s,o,e,h=this.options.values.length,r=this.options.p_values;if(!this.options.hide_from_to)if("single"===this.options.type)t=h?this.decorate(r[this.result.from]):(o=this._prettify(this.result.from),this.decorate(o,this.result.from)),this.$cache.single.html(t),this.calcLabels(),this.labels.p_single_left<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible";else{s=h?(this.options.decorate_both?(t=this.decorate(r[this.result.from]),t+=this.options.values_separator,t+=this.decorate(r[this.result.to])):t=this.decorate(r[this.result.from]+this.options.values_separator+r[this.result.to]),i=this.decorate(r[this.result.from]),this.decorate(r[this.result.to])):(o=this._prettify(this.result.from),e=this._prettify(this.result.to),this.options.decorate_both?(t=this.decorate(o,this.result.from),t+=this.options.values_separator,t+=this.decorate(e,this.result.to)):t=this.decorate(o+this.options.values_separator+e,this.result.to),i=this.decorate(o,this.result.from),this.decorate(e,this.result.to)),this.$cache.single.html(t),this.$cache.from.html(i),this.$cache.to.html(s),this.calcLabels();var n=Math.min(this.labels.p_single_left,this.labels.p_from_left),a=this.labels.p_single_left+this.labels.p_single_fake,c=this.labels.p_to_left+this.labels.p_to_fake,l=Math.max(a,c);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",l=this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===this.target?this.$cache.to[0].style.visibility="visible":this.target||(this.$cache.from[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",c):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",Math.max(a,c))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden"),n<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",l>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible"}}},drawShadow:function(){var t,i,s,o,e=this.options,h=this.$cache,r="number"==typeof e.from_min&&!isNaN(e.from_min),n="number"==typeof e.from_max&&!isNaN(e.from_max),a="number"==typeof e.to_min&&!isNaN(e.to_min),c="number"==typeof e.to_max&&!isNaN(e.to_max);"single"===e.type?e.from_shadow&&(r||n)?(t=this.convertToPercent(r?e.from_min:e.min),i=this.convertToPercent(n?e.from_max:e.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,h.shad_single[0].style.display="block",h.shad_single[0].style.left=t+"%",h.shad_single[0].style.width=i+"%"):h.shad_single[0].style.display="none":(e.from_shadow&&(r||n)?(t=this.convertToPercent(r?e.from_min:e.min),i=this.convertToPercent(n?e.from_max:e.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,h.shad_from[0].style.display="block",h.shad_from[0].style.left=t+"%",h.shad_from[0].style.width=i+"%"):h.shad_from[0].style.display="none",e.to_shadow&&(a||c)?(s=this.convertToPercent(a?e.to_min:e.min),o=this.convertToPercent(c?e.to_max:e.max)-s,s=this.toFixed(s-this.coords.p_handle/100*s),o=this.toFixed(o-this.coords.p_handle/100*o),s+=this.coords.p_handle/2,h.shad_to[0].style.display="block",h.shad_to[0].style.left=s+"%",h.shad_to[0].style.width=o+"%"):h.shad_to[0].style.display="none")},writeToInput:function(){"single"===this.options.type?(this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to))},callOnStart:function(){this.writeToInput(),this.options.onStart&&"function"==typeof this.options.onStart&&(this.options.scope?this.options.onStart.call(this.options.scope,this.result):this.options.onStart(this.result))},callOnChange:function(){this.writeToInput(),this.options.onChange&&"function"==typeof this.options.onChange&&(this.options.scope?this.options.onChange.call(this.options.scope,this.result):this.options.onChange(this.result))},callOnFinish:function(){this.writeToInput(),this.options.onFinish&&"function"==typeof this.options.onFinish&&(this.options.scope?this.options.onFinish.call(this.options.scope,this.result):this.options.onFinish(this.result))},callOnUpdate:function(){this.writeToInput(),this.options.onUpdate&&"function"==typeof this.options.onUpdate&&(this.options.scope?this.options.onUpdate.call(this.options.scope,this.result):this.options.onUpdate(this.result))},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input"),this.has_tab_index?this.$cache.input.prop("tabindex",-1):this.$cache.input.removeProp("tabindex"),this.has_tab_index=!this.has_tab_index},convertToPercent:function(t,i){var s,o=this.options.max-this.options.min,e=o/100;return o?(s=(i?t:t-this.options.min)/e,this.toFixed(s)):(this.no_diapason=!0,0)},convertToValue:function(t){var i,s,o=this.options.min,e=this.options.max,h=o.toString().split(".")[1],r=e.toString().split(".")[1],n=0,a=0;if(0===t)return this.options.min;if(100===t)return this.options.max;h&&(n=i=h.length),r&&(n=s=r.length),i&&s&&(n=s<=i?i:s),o<0&&(o=+(o+(a=Math.abs(o))).toFixed(n),e=+(e+a).toFixed(n));var c,l=(e-o)/100*t+o,_=this.options.step.toString().split(".")[1];return l=_?+l.toFixed(_.length):(l/=this.options.step,+(l*=this.options.step).toFixed(0)),a&&(l-=a),(c=_?+l.toFixed(_.length):this.toFixed(l))<this.options.min?c=this.options.min:c>this.options.max&&(c=this.options.max),c},calcWithStep:function(t){var i=Math.round(t/this.coords.p_step)*this.coords.p_step;return 100<i&&(i=100),100===t&&(i=100),this.toFixed(i)},checkMinInterval:function(t,i,s){var o,e,h=this.options;return h.min_interval?(o=this.convertToValue(t),e=this.convertToValue(i),"from"===s?e-o<h.min_interval&&(o=e-h.min_interval):o-e<h.min_interval&&(o=e+h.min_interval),this.convertToPercent(o)):t},checkMaxInterval:function(t,i,s){var o,e,h=this.options;return h.max_interval?(o=this.convertToValue(t),e=this.convertToValue(i),"from"===s?e-o>h.max_interval&&(o=e-h.max_interval):o-e>h.max_interval&&(o=e+h.max_interval),this.convertToPercent(o)):t},checkDiapason:function(t,i,s){var o=this.convertToValue(t),e=this.options;return"number"!=typeof i&&(i=e.min),"number"!=typeof s&&(s=e.max),o<i&&(o=i),s<o&&(o=s),this.convertToPercent(o)},toFixed:function(t){return+(t=t.toFixed(20))},_prettify:function(t){return this.options.prettify_enabled?this.options.prettify&&"function"==typeof this.options.prettify?this.options.prettify(t):this.prettify(t):t},prettify:function(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(t,i){return this.options.force_edges&&(t<0?t=0:100-i<t&&(t=100-i)),this.toFixed(t)},validate:function(){var t,i,s=this.options,o=this.result,e=s.values,h=e.length;if("string"==typeof s.min&&(s.min=+s.min),"string"==typeof s.max&&(s.max=+s.max),"string"==typeof s.from&&(s.from=+s.from),"string"==typeof s.to&&(s.to=+s.to),"string"==typeof s.step&&(s.step=+s.step),"string"==typeof s.from_min&&(s.from_min=+s.from_min),"string"==typeof s.from_max&&(s.from_max=+s.from_max),"string"==typeof s.to_min&&(s.to_min=+s.to_min),"string"==typeof s.to_max&&(s.to_max=+s.to_max),"string"==typeof s.grid_num&&(s.grid_num=+s.grid_num),s.max<s.min&&(s.max=s.min),h)for(s.p_values=[],s.min=0,s.max=h-1,s.step=1,s.grid_num=s.max,s.grid_snap=!0,i=0;i<h;i++)t=+e[i],t=isNaN(t)?e[i]:(e[i]=t,this._prettify(t)),s.p_values.push(t);("number"!=typeof s.from||isNaN(s.from))&&(s.from=s.min),("number"!=typeof s.to||isNaN(s.to))&&(s.to=s.max),"single"===s.type?(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max)):(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max),s.to<s.min&&(s.to=s.min),s.to>s.max&&(s.to=s.max),this.update_check.from&&(this.update_check.from!==s.from&&s.from>s.to&&(s.from=s.to),this.update_check.to!==s.to&&s.to<s.from&&(s.to=s.from)),s.from>s.to&&(s.from=s.to),s.to<s.from&&(s.to=s.from)),("number"!=typeof s.step||isNaN(s.step)||!s.step||s.step<0)&&(s.step=1),"number"==typeof s.from_min&&s.from<s.from_min&&(s.from=s.from_min),"number"==typeof s.from_max&&s.from>s.from_max&&(s.from=s.from_max),"number"==typeof s.to_min&&s.to<s.to_min&&(s.to=s.to_min),"number"==typeof s.to_max&&s.from>s.to_max&&(s.to=s.to_max),o&&(o.min!==s.min&&(o.min=s.min),o.max!==s.max&&(o.max=s.max),(o.from<o.min||o.from>o.max)&&(o.from=s.from),(o.to<o.min||o.to>o.max)&&(o.to=s.to)),("number"!=typeof s.min_interval||isNaN(s.min_interval)||!s.min_interval||s.min_interval<0)&&(s.min_interval=0),("number"!=typeof s.max_interval||isNaN(s.max_interval)||!s.max_interval||s.max_interval<0)&&(s.max_interval=0),s.min_interval&&s.min_interval>s.max-s.min&&(s.min_interval=s.max-s.min),s.max_interval&&s.max_interval>s.max-s.min&&(s.max_interval=s.max-s.min)},decorate:function(t,i){var s="",o=this.options;return o.prefix&&(s+=o.prefix),s+=t,o.max_postfix&&(o.values.length&&t===o.p_values[o.max]?(s+=o.max_postfix,o.postfix&&(s+=" ")):i===o.max&&(s+=o.max_postfix,o.postfix&&(s+=" "))),o.postfix&&(s+=o.postfix),s},updateFrom:function(){this.result.from=this.options.from,this.result.from_percent=this.convertToPercent(this.result.from),this.result.from_pretty=this._prettify(this.result.from),this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to,this.result.to_percent=this.convertToPercent(this.result.to),this.result.to_pretty=this._prettify(this.result.to),this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min,this.result.max=this.options.max,this.updateFrom(),this.updateTo()},appendGrid:function(){if(this.options.grid){var t,i,s,o,e,h,r=this.options,n=r.max-r.min,a=r.grid_num,c=0,l=4,_="";for(this.calcGridMargin(),r.grid_snap&&(a=n/r.step),50<a&&(a=50),s=this.toFixed(100/a),4<a&&(l=3),7<a&&(l=2),14<a&&(l=1),28<a&&(l=0),t=0;t<a+1;t++){for(o=l,100<(c=this.toFixed(s*t))&&(c=100),e=((this.coords.big[t]=c)-s*(t-1))/(o+1),i=1;i<=o&&0!==c;i++)_+='<span class="irs-grid-pol small" style="left: '+this.toFixed(c-e*i)+'%"></span>';_+='<span class="irs-grid-pol" style="left: '+c+'%"></span>',h=this.convertToValue(c),_+='<span class="irs-grid-text js-grid-text-'+t+'" style="left: '+c+'%">'+(h=r.values.length?r.p_values[h]:this._prettify(h))+"</span>"}this.coords.big_num=Math.ceil(a+1),this.$cache.cont.addClass("irs-with-grid"),this.$cache.grid.html(_),this.cacheGridLabels()}},cacheGridLabels:function(){var t,i,s=this.coords.big_num;for(i=0;i<s;i++)t=this.$cache.grid.find(".js-grid-text-"+i),this.$cache.grid_labels.push(t);this.calcGridLabels()},calcGridLabels:function(){var t,i,s=[],o=[],e=this.coords.big_num;for(t=0;t<e;t++)this.coords.big_w[t]=this.$cache.grid_labels[t].outerWidth(!1),this.coords.big_p[t]=this.toFixed(this.coords.big_w[t]/this.coords.w_rs*100),this.coords.big_x[t]=this.toFixed(this.coords.big_p[t]/2),s[t]=this.toFixed(this.coords.big[t]-this.coords.big_x[t]),o[t]=this.toFixed(s[t]+this.coords.big_p[t]);for(this.options.force_edges&&(s[0]<-this.coords.grid_gap&&(s[0]=-this.coords.grid_gap,o[0]=this.toFixed(s[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),o[e-1]>100+this.coords.grid_gap&&(o[e-1]=100+this.coords.grid_gap,s[e-1]=this.toFixed(o[e-1]-this.coords.big_p[e-1]),this.coords.big_x[e-1]=this.toFixed(this.coords.big_p[e-1]-this.coords.grid_gap))),this.calcGridCollision(2,s,o),this.calcGridCollision(4,s,o),t=0;t<e;t++)i=this.$cache.grid_labels[t][0],this.coords.big_x[t]!==Number.POSITIVE_INFINITY&&(i.style.marginLeft=-this.coords.big_x[t]+"%")},calcGridCollision:function(t,i,s){var o,e,h,r=this.coords.big_num;for(o=0;o<r&&!(r<=(e=o+t/2));o+=t)h=this.$cache.grid_labels[e][0],s[o]<=i[e]?h.style.visibility="visible":h.style.visibility="hidden"},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&("single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(t){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.update_check.from=this.result.from,this.update_check.to=this.result.to,this.options=a.extend(this.options,t),this.validate(),this.updateResult(t),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),a.data(this.input,"ionRangeSlider",null),this.remove(),this.input=null,this.options=null)}},a.fn.ionRangeSlider=function(t){return this.each(function(){a.data(this,"ionRangeSlider")||a.data(this,"ionRangeSlider",new h(this,t,o++))})},function(){for(var h=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!l.requestAnimationFrame;++i)l.requestAnimationFrame=l[t[i]+"RequestAnimationFrame"],l.cancelAnimationFrame=l[t[i]+"CancelAnimationFrame"]||l[t[i]+"CancelRequestAnimationFrame"];l.requestAnimationFrame||(l.requestAnimationFrame=function(t,i){var s=(new Date).getTime(),o=Math.max(0,16-(s-h)),e=l.setTimeout(function(){t(s+o)},o);return h=s+o,e}),l.cancelAnimationFrame||(l.cancelAnimationFrame=function(t){clearTimeout(t)})}()});
(function ($, _, window, document) {

  var RangeSlider = function (elem, options) {
    var self = this;

    self.slider = null;
    self.$elem = $(elem);
    self.$placeholder = self.$elem.find('[data-range-placeholder]');
    self.$from = self.$elem.find('[data-range-from]');
    self.$to = self.$elem.find('[data-range-to]');
    self.$form = self.$elem.parents('form:first');

    self.options = _.merge({
      type: 'double',
      onFinish: function (data) {
        setTimeout(function () {
          self.send(data);
        }, 0)
      },
      onChange: function (data) {
        self.changeInput(data);
      },
    }, self.$placeholder.data(), options);

    self.init();

    return self;
  };

  RangeSlider.prototype.init = function () {
    var self = this;

    self.$elem.find('.irs').remove();

    self.$placeholder.ionRangeSlider(self.options);
    self.slider = self.$placeholder.data('ionRangeSlider');
  };

  RangeSlider.prototype.send = function (data) {
    var self = this;

    self.$from.prop('disabled', (data.min == data.from));
    self.$to.prop('disabled', (data.max == data.to));
    self.$form.trigger('check');
  };

  RangeSlider.prototype.changeInput = function (data) {
    var self = this;

    self.$from.val(data.from);
    self.$to.val(data.to);
  };

  $.fn.rangeSlider = function (options) {
    return this.each (function () {
      if (!this._RangeSlider) {
        this._RangeSlider = new RangeSlider(this, options);
      };
    });
  }
})(jQuery, _, window, document);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'
/*eslint-env browser */

module.exports = {
  /**
   * Create a <style>...</style> tag and add it to the document head
   * @param {string} cssText
   * @param {object?} options
   * @return {Element}
   */
  createStyle: function (cssText, options) {
    var container = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    options = options || {}
    style.type = 'text/css'
    if (options.href) {
      style.setAttribute('data-href', options.href)
    }
    if (style.sheet) { // for jsdom and IE9+
      style.innerHTML = cssText
      style.sheet.cssText = cssText
    }
    else if (style.styleSheet) { // for IE8 and below
      style.styleSheet.cssText = cssText
    }
    else { // for Chrome, Firefox, and Safari
      style.appendChild(document.createTextNode(cssText))
    }
    if (options.prepend) {
      container.insertBefore(style, container.childNodes[0]);
    } else {
      container.appendChild(style);
    }
    return style
  }
}

},{}],2:[function(require,module,exports){
var Filter = require('filter');
var selectors = require('selectors');

var Factory = function (filterConfig) {
  var self = this;

  self.config = filterConfig;

  self.initFilters();

  return self;
};

Factory.prototype.create = function ($node) {
  var self = this;
  var _node = self.getNode($node);
  var _name = _node.data('filter');
  var _config = self.config[_name];
  var _form = null;

  _form = new Filter({
    $node: _node,
    config: _config
  });

  return _form;
};

Factory.prototype.get = function ($node) {
  var self = this;
  var _node = self.getNode($node);
  var _form = null;

  _form = _.get(_node, 'Filter', self.initFilter(_node));

  return _form;
};

Factory.prototype.getNode = function ($node) {
  var _node = $node;

  if (!_node.is(selectors.filter)) {
    _node = _node.find(selectors.filter);
  }

  return _node;
};

Factory.prototype.initFilters = function () {
  var self = this;

  $(selectors.filter).each(function () {
    self.create($(this));
  });

  return;
};

module.exports = Factory;
},{"filter":3,"selectors":8}],3:[function(require,module,exports){
var selectors = require('selectors');
var button = require('helpers/button');
var Section = require('./section');

var Filter = function (options) {
  var self = this;
  $('.filter-sec').show();

  self.node = _.head(options.$node);
  self.$node = options.$node;

  self.options = options.config;

  self.$submit = self.$node.find(selectors.submit);
  self.$clear = self.$node.find(selectors.clear);
  self.$sections = self.$node.find(selectors.section);

  self.sections = self.initSections();

  self.state = {};
  self.checkState();
  self.bindEvents();

  return self;
};

Filter.prototype.send = function () {
  var self = this;

  self.node.submit();

  return;
};

Filter.prototype.clear = function () {
  var self = this;

  _.chain(self.sections)
    .forEach(function (section) {
      section.clear();
    })
    .value();

  self.node.submit();

  return;
};

Filter.prototype.bindEvents = function () {
  var self = this;

  self.$submit.on('click', function (event) {
    event.preventDefault();

    self.send();
  });
  self.$clear.on('click', function () {
    self.clear();
  });
  self.$node.on('change', function () {
    self.checkState();

    if (self.options.submitOnChange) {
      setTimeout(function() { self.send(); }, 0)
    }
  });

  return;
};

Filter.prototype.initSections = function () {
  var self = this;
  var _sections = [];

  self.$sections.each(function () {
    _sections.push(new Section({
      $node: $(this),
      options: self.options
    }));
  });

  return _sections;
};

Filter.prototype.setClasses = function () {
  var self = this;

  if (self.state.active) {
    button.enable(self.$clear);
  }
  else {
    button.disable(self.$clear);
  }

  if (self.state.hide) {
    self.$node.addClass('is-hidden');
    $('.filter-panel-open-sidebar').addClass('hidden');

  }

  return;
};

Filter.prototype.checkState = function () {
  var self = this;
  var _sectionsActive = false;
  var _sectionsHide = false;

  _sectionsActive = _.chain(self.sections)
    .reduce(function (isActive, section) {
      var _state = section.getState();

      return isActive || _state.active;
    }, false)
    .value();
  _sectionsHide = _.chain(self.sections)
    .reduce(function (isHide, section) {
      var _state = section.getState();

      return (isHide && _state.hide);
    }, true)
    .value();

  self.setState('active', _sectionsActive);
  self.setState('hide', _sectionsHide);

  return;
};

Filter.prototype.setState = function (stateName, stateValue) {
  var self = this;

  self.state[stateName] = stateValue;

  self.setClasses();

  return;
};

module.exports = Filter;
},{"./section":5,"helpers/button":6,"selectors":8}],4:[function(require,module,exports){
var selectors = require('selectors');

var Item = function (node) {
  var self = this;

  self.node = _.head(node);
  self.$node = node;

  self.$input = null;
  self.rangeSlider = null;
  self.bindEvents();
  self.type = self.getType();

  self.getElements();
  self.state = {};
  if (self.type == 'checkbox') {
    self.setState('active', self.$input.prop('checked'));
  }
  else {
    self.setState('active', false);
  }

  return self;
};

Item.prototype.getElements = function () {
  var self = this;

  self.$marker = self.$node.find(selectors.items.marker);

  return;
};

Item.prototype.setState = function (stateName, stateValue) {
  var self = this;

  self.state[stateName] = stateValue;
  self.setClasses(stateName, stateValue);

  return;
};



Item.prototype.getState = function () {
  var self = this;

  return self.state;
};

Item.prototype.clear = function () {
  var self = this;

  if (self.type == 'checkbox') {
    self.$input.prop('checked', false);
  }
  else {
    self.$input.clear();
  }
  self.setState('active', false);

  return;
};

Item.prototype.change = function (eventData) {
  var self = this;

  if (self.type == 'checkbox') {
    self.setState('active', self.$input.prop('checked'));
  }
  else if (eventData) {
    self.setState('active', !eventData.disabled);
  }

  return;
};

Item.prototype.bindEvents = function () {
  var self = this;

  self.$node
    .on('change', function (event, eventData) {
      self.change(eventData);
    })
    .on('inited:slider', function (event) {
      self.$input = _.get(event, 'target.rangeSlider', {});
    });

  return;
};

Item.prototype.getType = function () {
  var self = this;
  var _type = 'checkbox';
  var _slider = self.$node.find(selectors.slider);

  if (_slider.length) {
    _type = 'slider';
    self.$node.trigger('init:range:filter');
  }
  else {
    self.$input = self.$node.find(selectors.checkbox);
  }

  return _type;
};

Item.prototype.getSlider = function () {
  var self = this;
  var _slider = self.$node.find(selectors.slider);

  self.$input = _.get(_slider, '[0].rangeSlider');

  return;
};

Item.prototype.setClasses = function (stateName, stateValue) {
  var self = this;
  var _className = 'is-' + stateName;

  if (stateValue) {
    self.$node.addClass(_className);
    self.$marker.addClass(_className);
  }
  else {
    self.$node.removeClass(_className);
    self.$marker.removeClass(_className);
  }

  return;
};

module.exports = Item;
},{"selectors":8}],5:[function(require,module,exports){
var selectors = require('selectors');
var button = require('helpers/button');
var Item = require('./item');

var Section = function (options) {
  var self = this;
  var _initState = {};

  self.node = _.head(options.$node);
  self.$node = options.$node;

  _initState = self.$node.data();
  self.options = options.options;
  self.state = { hide: false };

  self.getElements();

  self.bindEvents();
  self.items = self.initItems();

  self.state.active = _initState.filterSection;
  self.state.onInit = _initState.filterSection;
  self.state.collapse = self.options.collapse;
  self.state.open = (_initState.filterSection && self.options.openActive);

  self.initClasses();

  return self;
};

Section.prototype.getElements = function () {
  var self = this;

  self.$submit = self.$node.find(selectors.submit);
  self.$clear = self.$node.find(selectors.sections.clear);
  self.$toggle = self.$node.find(selectors.sections.toggle);
  self.$items = self.$node.find(selectors.items.item);
  self.$container = self.$node.find(selectors.items.wrapper);
  self.$controls = self.$node.find(selectors.sections.controls);

  return;
};

Section.prototype.bindEvents = function () {
  var self = this;

  self.$submit.on('click', function () {
    self.submit();
  });
  self.$clear.on('click', function () {
    self.clear();
  });
  self.$node.on('change', function () {
    self.checkState();
  })
  .on('hide:section:filter', function () {
    self.setState('hide', true);
  });
  self.$toggle.on('click', function () {



    $(document).click( function(event){
      if( $(event.target).closest(".filter-section").length )
        return;
        $('.filter-section-toggle.is-active').toggleClass('is-active');
        $('.filter-items-wrapper.is-opened').toggleClass('is-opened is-closed');
        $('.filter-section-control.is-collapse-opened').toggleClass('is-collapse-opened');
      event.stopPropagation();
    });

    $(document).keydown(function(e) {
        if( e.keyCode === 27 ) {
            $('.filter-section-toggle.is-active').toggleClass('is-active');
            $('.filter-items-wrapper.is-opened').toggleClass('is-opened is-closed');
            $('.filter-section-control.is-collapse-opened').toggleClass('is-collapse-opened');
            return false;
        }
    });



    $('.filter-section-toggle.is-active').not(self.$toggle).toggleClass('is-active');
    $('.filter-items-wrapper.is-opened').not(self.$container).toggleClass('is-opened is-closed');
    $('.filter-section-control.is-collapse-opened').not(self.$controls).toggleClass('is-collapse-opened');

    self.toggleCollapse();
  });

  return;
};

Section.prototype.clear = function () {
  var self = this;

  _.chain(self.items)
    .forEach(function (item) {
      item.clear();
    })
    .value();
  self.state.active = false;
  self.setClasses();

  if (self.state.onInit) {
    self.$submit.trigger('click');
  }

  return;
};

Section.prototype.submit = function () {
  return;
};

Section.prototype.initItems = function () {
  var self = this;
  var _items = [];

  self.$items.each(function () {
    _items.push(new Item($(this)));
  });

  return _items;
};

Section.prototype.initClasses = function () {
  var self = this;

  if (self.options.collapse) {
    self.$node.addClass('is-collapse');
    self.$toggle.addClass('button is-active-toggle');
    self.$container.addClass('is-collapsable');

    if (self.options.openActive && self.state.active) {
      self.$container.addClass('is-opened');
      self.$controls.addClass('is-collapse-opened');
      self.$toggle.addClass('is-active');
    }
    else {
      self.$container.addClass('is-closed');
    }
  }

  self.setClasses();

  return;
};

Section.prototype.setClasses = function () {
  var self = this;

  if (self.state.active) {
    self.$node
      .addClass('has-active-items');
    button.enable(self.$clear);
    button.enable(self.$submit);
  }
  else {
    self.$node
      .removeClass('has-active-items');
    button.disable(self.$clear);
    button.disable(self.$submit);
  }

  if (self.state.hide) {
    self.$node.addClass('is-hidden');
  }

  return;
};

Section.prototype.toggleCollapse = function () {
  var self = this;

  if (!self.state.collapse) {
    return;
  }

  self.$toggle.toggleClass('is-active');
  self.$container.toggleClass('is-opened is-closed');
  self.$controls.toggleClass('is-collapse-opened');

  return;
};

Section.prototype.checkState = function () {
  var self = this;
  var _itemsState = false;

  _itemsState = _.chain(self.items)
    .reduce(function (active, item) {
      var _state = item.getState();

      return active || _state.active;
    }, false)
    .value();

  self.setState('active', _itemsState);

  return;
};

Section.prototype.setState = function (stateName, stateValue) {
  var self = this;

  self.state[stateName] = stateValue;
  self.setClasses();

  return;
};

Section.prototype.getState = function () {
  var self = this;

  return self.state;
};

module.exports = Section;
},{"./item":4,"helpers/button":6,"selectors":8}],6:[function(require,module,exports){
module.exports = {
  enable: function ($button) {
    $button
      .removeClass('is-disabled')
      .addClass('is-enable')
      .prop('disabled', false);
  },
  disable: function ($button) {
    $button
      .removeClass('is-enable')
      .addClass('is-disabled');
  }
};
},{}],7:[function(require,module,exports){
(function (jquery, window) {
  var InSalesUI = _.get(window, 'InSalesUI', {});
  var _configs = _.get(window, 'Site.filterConfig', {});

  require('styles/style.scss');

  InSalesUI.Filter = new (require('factory'))(_configs);

  jquery(document)
    .on('change', '[name="order"]', function () {
      jquery(this).closest('form')
        .submit();
    })
    .on('change', '[name="page_size"]', function () {
      jquery(this).closest('form')
        .submit();
    });

  window.InSalesUI = InSalesUI;
})(jQuery, window);
},{"factory":2,"styles/style.scss":9}],8:[function(require,module,exports){
module.exports={
  "filter": "[data-filter]",
  "clear": "[data-filter-clear]",
  "submit": "[data-filter-submit]",
  "section": "[data-filter-section]",
  "sections": {
    "clear": "[data-filter-section-clear]",
    "toggle": "[data-filter-section-toggle]",
    "controls": ".filter-section-control"
  },
  "items": {
    "wrapper": "[data-filter-section-items]",
    "item": "[data-filter-section-item]",
    "marker": ".filter-field-marker"
  },
  "slider": "[data-range-slider]",
  "checkbox": "[type='checkbox']"
}

},{}],9:[function(require,module,exports){
module.exports.tag = require('scssify').createStyle(".filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .filter.is-hidden {\n    display: none !important; }\n\n.filter-clear:not(.is-enable) {\n  display: none; }\n\n.filter-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n  .filter-section.is-hidden {\n    display: none; }\n\n.filter-section-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.filter-section-toggle {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 0;\n  margin: 0;\n  border: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  text-align: left;\n  vertical-align: middle; }\n  .filter-section-toggle:active, .filter-section-toggle:focus, .filter-section-toggle:hover {\n    outline: none; }\n\n.filter-section-clear {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n  .filter-section-clear:not(.is-enable) {\n    display: none; }\n\n.filter-section-submit {\n  width: 100%; }\n\n.filter-section-toolbar {\n  padding-top: 0.5rem; }\n\n.filter-items-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%; }\n  .filter-items-wrapper.is-closed {\n    display: none; }\n\n.filter-items-list {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, var(--filter-background-color)), to(var(--filter-background-color-transparent))), -webkit-gradient(linear, left top, left bottom, from(var(--filter-background-color-transparent)), color-stop(70%, var(--filter-background-color))) 0 100%, -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.05)), to(transparent)), -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.05))) 0 100%;\n  background: linear-gradient(var(--filter-background-color) 30%, var(--filter-background-color-transparent)), linear-gradient(var(--filter-background-color-transparent), var(--filter-background-color) 70%) 0 100%, linear-gradient(rgba(0, 0, 0, 0.05), transparent), linear-gradient(transparent, rgba(0, 0, 0, 0.05)) 0 100%;\n  background-size: 100% 4rem, 100% 4rem, 100% 1rem, 100% 1rem;\n  background-repeat: no-repeat;\n  /* Opera doesn't support this in the shorthand */\n  background-attachment: local, local, scroll, scroll;\n  list-style: none;\n  margin: 0;\n  padding: 0.5rem 0;\n  max-height: 18rem;\n  overflow-y: auto; }\n\n.filter-item {\n  padding: 0.25rem 0; }\n  .filter-item.is-range-slider {\n    padding-top: 2rem; }\n\n.filter-field {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.filter-field-input {\n  position: absolute;\n  z-index: -1; }\n\n.filter-field-marker {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 1rem;\n          flex: 0 0 1rem; }\n\n.filter-field-caption {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%; }\n\n/*# sourceMappingURL=to.css.map */", {"href":false,"prepend":true});
},{"scssify":1}]},{},[7]);


$('.filter-section-toggle.is-active').toggleClass('is-active');
$('.filter-items-wrapper.is-opened').toggleClass('is-opened is-closed');
$('.filter-section-control.is-collapse-opened').toggleClass('is-collapse-opened');
/*!
 * CompareProducts v0.6.0
 * Vladimir Ivanin
 * 2018
 */

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(e,o){var t={item:e};o&&(t.button=o),Compare.add(t)}function remove(e,o){var t={item:e};o&&(t.button=o),Compare.remove(t)}function update(){Compare.update()}function getCompare(){return Compare.getCompare()}function getCompareIds(){for(var e=[],o=Compare.getCompare(),t=0;t<o.products.length;t++)e.push(o.products[t].id);return e}module.exports={add:add,remove:remove,update:update,getCompareIds:getCompareIds,getCompare:getCompare};
},{}],2:[function(require,module,exports){
var render=require("./render");function binding(){bindAdd(this),bindRemove(this),bindTrigger(this)}function bindRemove(t){var e=getDataAttrName(t.options.selectors.remove);$(document).on("click",e,function(e){e.preventDefault(),t.productIds=t.api.getCompareIds();var d=$(this).data(t.options.selectors.remove),s=getStatusProduct($(this),t.productIds,d,t.options.classes.added,t.options.classes.notAdded);if(s.isActive||!s.notAdded){var o=render.getAllSelectors(t.options,[d]);t.api.remove(d,o.added)}})}function bindAdd(t){var e=getDataAttrName(t.options.selectors.add);$(document).on("click",e,function(e){e.preventDefault(),t.productIds=t.api.getCompareIds();var d=t.api.getCompare(),s=$(this).data(t.options.selectors.add),o=getStatusProduct($(this),t.productIds,s,t.options.classes.added,t.options.classes.notAdded);if(!(o.isActive&&o.isAdded||t.productIds.length>d.maxItems)){var r=render.getAllSelectors(t.options,[s]);t.api.add(s,r.added)}})}function bindTrigger(t){var e=getDataAttrName(t.options.selectors.trigger);$(document).on("click",e,function(e){e.preventDefault();var d=t.api.getCompare();t.productIds=t.api.getCompareIds();var s=$(this).data(t.options.selectors.trigger);if(getStatusProduct($(this),t.productIds,s,t.options.classes.added,t.options.classes.notAdded).isActive){var o=render.getAllSelectors(t.options,[s]);t.api.remove(s,o.added)}else{if(t.productIds.length>d.maxItems)return;o=render.getAllSelectors(t.options,[s]);t.api.add(s,o.added)}})}function getStatusProduct(t,e,d,s,o){return{isActive:e.indexOf(d)>-1,isAdded:t.hasClass(s),notAdded:t.hasClass(o)}}function getDataAttrName(t,e){return"[data-"+(e?t+'="'+e+'"':t)+"]"}module.exports=binding;
},{"./render":6}],3:[function(require,module,exports){
var defaults=require("../variables").defaults,system=require("../variables").system,init=require("./init"),api=require("./api"),binding=require("./binding"),methods=require("./methods"),CompareProducts=function(i){return this.state={productIds:[],data:{}},this.options=$.extend(!0,{},defaults,i),this.api=api,this.init=init,this.binding=binding,this.update=methods.update,EventBus?(this.init(),this.binding()):console.warn("Не подключен common.js"),this};module.exports=CompareProducts;
},{"../variables":8,"./api":1,"./binding":2,"./init":4,"./methods":5}],4:[function(require,module,exports){
var render=require("./render");function init(){var e=this,t=e.options;EventBus.subscribe("update_items:insales:compares",function(t){e.state.data=t,e.update()}),EventBus.subscribe("init:insales:compares",function(n){e.state.data=n,render.update(n,t,e.api.getCompareIds()),t.onInit(n)}),EventBus.subscribe("overload:insales:compares",function(n){e.state.data=n,render.overload(n,t),t.onOverload(n)}),EventBus.subscribe("add_item:insales:compares",function(n){e.state.data=n;var a=n.action?n.action.button:null;a&&render.add(a,t),t.onAdd(n)}),EventBus.subscribe("remove_item:insales:compares",function(n){e.state.data=n;var a=n.action?n.action.button:null;a&&render.remove(a,t),t.onRemove(n)})}module.exports=init;
},{"./render":6}],5:[function(require,module,exports){
var render=require("./render");function update(){var e=this.state.data||{action:{method:"init"}},t=this.options,a=this.api.getCompareIds();render.update(e,t,a),t.onUpdate(e)}module.exports={update:update};
},{"./render":6}],6:[function(require,module,exports){
function add(e,t){e.addClass(t.classes.added).removeClass(t.classes.notAdded).removeClass(t.classes.disabled).removeAttr("disabled"),e.attr("title",t.titles.added),t.buttonAddedText&&e.text(t.buttonAddedText)}function remove(e,t){var a=$(getDataAttrName(t.selectors.add));e.addClass(t.classes.notAdded).removeClass(t.classes.added).removeClass(t.classes.disabled).removeAttr("disabled"),a.removeClass(t.classes.disabled).removeAttr("disabled"),e.attr("title",t.titles.notAdded),t.buttonNotAddedText&&e.text(t.buttonNotAddedText)}function update(e,t,a){var s=$(getDataAttrName(t.selectors.counter)),d=e.products.length,r=e.action&&void 0!==e.action.method?e.action.method:"init";if(d&&d>0?s.html(t.counterTemplate.replace("%c%",d)).removeClass(t.classes.empty):t.counterTemplateEmpty?s.html(t.counterTemplateEmpty.replace("%c%",d)).addClass(t.classes.empty):s.html(t.counterTemplate.replace("%c%",d)).addClass(t.classes.empty),"init"==r){var l=getAllSelectors(t,a),o=l.removed,c=l.added;d&&d>0&&add(c,t),remove(o,t)}}function getAllSelectors(e,t){var a=[],s=[];s.push(getDataAttrName(e.selectors.add)),s.push(getDataAttrName(e.selectors.remove)),s.push(getDataAttrName(e.selectors.trigger));for(var d=0;d<t.length;d++)a.push(getDataAttrName(e.selectors.add,t[d])),a.push(getDataAttrName(e.selectors.remove,t[d])),a.push(getDataAttrName(e.selectors.trigger,t[d]));var r=a.join(",");return{added:$(r),removed:$(s.join(",")).not(r)}}function overload(e,t){$(getDataAttrName(t.selectors.add)).addClass(t.classes.disabled).removeAttr("disabled")}function getDataAttrName(e,t){return"[data-"+(t?e+'="'+t+'"':e)+"]"}module.exports={add:add,remove:remove,update:update,getAllSelectors:getAllSelectors,overload:overload};
},{}],7:[function(require,module,exports){
window.CompareProducts=require("CompareProducts");
},{"CompareProducts":3}],8:[function(require,module,exports){
var defaults={selectors:{add:"compares-add",remove:"compares-remove",trigger:"compares-trigger",counter:"compares-counter"},counterTemplate:"(%c%)",counterTemplateEmpty:null,buttonNotAddedText:null,buttonAddedText:null,titles:{added:"Добавлен в сравнение",notAdded:"Добавить в сравнение"},classes:{added:"is-added",notAdded:"not-added",empty:"is-empty",disabled:"is-disabled"},onAdd:function(){},onRemove:function(){},onUpdate:function(){},onInit:function(){},onOverload:function(){}},system={};module.exports={defaults:defaults,system:system};
},{}]},{},[7]);
/*!
 * favorites v0.5.6
 * https://github.com/VladimirIvanin/favorites/
 */

var Favorites=function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+_+".hot-update.js",t.appendChild(n)}function r(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=p.p+""+_+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(e){return void t(e)}e(o)}}})}function o(e){var t=k[e];if(!t)return p;var n=function(n){return t.hot.active?(k[n]?k[n].parents.indexOf(e)<0&&k[n].parents.push(e):(j=[e],h=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),j=[]),p(n)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r));return n.e=function(e){function t(){M--,"prepare"===O&&($[e]||u(e),0===M&&0===w&&l())}return"ready"===O&&i("prepare"),M++,p.e(e).then(t,function(e){throw t(),e})},n}function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:h!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:f,status:function(e){if(!e)return O;I.push(e)},addStatusHandler:function(e){I.push(e)},removeStatusHandler:function(e){var t=I.indexOf(e);t>=0&&I.splice(t,1)},data:E[e]};return h=void 0,t}function i(e){O=e;for(var t=0;t<I.length;t++)I[t].call(null,e)}function a(e){return+e+""===e?+e:e}function c(e){if("idle"!==O)throw new Error("check() is only allowed in idle status");return b=e,i("check"),r().then(function(e){if(!e)return i("idle"),null;A={},$={},T=e.c,g=e.h,i("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});y={};return u(0),"prepare"===O&&0===M&&0===w&&l(),t})}function d(e,t){if(T[e]&&A[e]){A[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--w&&0===M&&l()}}function u(e){T[e]?(A[e]=!0,w++,n(e)):$[e]=!0}function l(){i("ready");var e=m;if(m=null,e)if(b)f(b).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(a(n));e.resolve(t)}}function f(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==O)throw new Error("apply() is only allowed in ready status");n=n||{};var o,s,c,d,u,l={},f=[],v={},h=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var m in y)if(Object.prototype.hasOwnProperty.call(y,m)){u=a(m);var b;b=y[m]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var s=o.pop(),i=s.id,a=s.chain;if((d=k[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<d.parents.length;c++){var u=d.parents[c],l=k[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};t.indexOf(u)>=0||(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),r(n[u],[i])):(delete n[u],t.push(u),o.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(u):{type:"disposed",moduleId:m};var P=!1,I=!1,w=!1,M="";switch(b.chain&&(M="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+b.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(P=new Error("Aborted because "+u+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(b),I=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),w=!0;break;default:throw new Error("Unexception type "+b.type)}if(P)return i("abort"),Promise.reject(P);if(I){v[u]=y[u],r(f,b.outdatedModules);for(u in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,u)&&(l[u]||(l[u]=[]),r(l[u],b.outdatedDependencies[u]))}w&&(r(f,[b.moduleId]),v[u]=h)}var $=[];for(s=0;s<f.length;s++)u=f[s],k[u]&&k[u].hot._selfAccepted&&$.push({module:u,errorHandler:k[u].hot._selfAccepted});i("dispose"),Object.keys(T).forEach(function(e){!1===T[e]&&t(e)});for(var A,F=f.slice();F.length>0;)if(u=F.pop(),d=k[u]){var x={},D=d.hot._disposeHandlers;for(c=0;c<D.length;c++)(o=D[c])(x);for(E[u]=x,d.hot.active=!1,delete k[u],c=0;c<d.children.length;c++){var S=k[d.children[c]];S&&((A=S.parents.indexOf(u))>=0&&S.parents.splice(A,1))}}var H,N;for(u in l)if(Object.prototype.hasOwnProperty.call(l,u)&&(d=k[u]))for(N=l[u],c=0;c<N.length;c++)H=N[c],(A=d.children.indexOf(H))>=0&&d.children.splice(A,1);i("apply"),_=g;for(u in v)Object.prototype.hasOwnProperty.call(v,u)&&(e[u]=v[u]);var L=null;for(u in l)if(Object.prototype.hasOwnProperty.call(l,u)){d=k[u],N=l[u];var C=[];for(s=0;s<N.length;s++)H=N[s],o=d.hot._acceptedDependencies[H],C.indexOf(o)>=0||C.push(o);for(s=0;s<C.length;s++){o=C[s];try{o(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[s],error:e}),n.ignoreErrored||L||(L=e)}}}for(s=0;s<$.length;s++){var U=$[s];u=U.module,j=[u];try{p(u)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,orginalError:e}),n.ignoreErrored||L||(L=t),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||L||(L=e)}}return L?(i("fail"),Promise.reject(L)):(i("idle"),new Promise(function(e){e(f)}))}function p(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:s(t),parents:(P=j,j=[],P),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var v=this.webpackHotUpdateFavorites;this.webpackHotUpdateFavorites=function(e,t){d(e,t),v&&v(e,t)};var h,m,y,g,b=!0,_="2c899eba83aa7bf95dde",E={},j=[],P=[],I=[],O="idle",w=0,M=0,$={},A={},T={},k={};return p.m=e,p.c=k,p.i=function(e){return e},p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="",p.h=function(){return _},o(10)(p.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaults={counterTemplate:"(%c%)",counterTemplateEmpty:null,buttonNotAddedText:null,buttonAddedText:null,productsListTemplate:function(){},variantsListTemplate:function(){},debug:!1,onFull:function(){},onEmpty:function(){},onAdd:function(){},onRemove:function(){},onInit:function(){},onBefore:function(){},onUpdate:function(){},replaceTitle:!0,titles:{added:"Добавлен в избранное",notAdded:"Добавить в избранное"},classes:{added:"is-added",notAdded:"not-added",empty:"is-empty",full:"is-full"}},t.system={keyProducts:"favorites_products",keyFavorites:"favorites_data"},t.systemEvents={full:"full:insales:favorites",empty:"empty:insales:favorites",add:"add:insales:favorites",remove:"remove:insales:favorites",init:"init:insales:favorites",before:"before:insales:favorites",update:"update:insales:favorites"},t.systemSelectors={add:"data-favorites-add",addParam:"favorites-add",addVariant:"data-favorites-variant-add",addVariantParam:"favorites-variant-add",addVariantProduct:"data-favorites-variant-product",addVariantProductParam:"favorites-variant-product",remove:"data-favorites-remove",removeParam:"favorites-remove",counter:"data-favorites-counter",counterParam:"favorites-counter",trigger:"data-favorites-trigger",triggerParam:"favorites-trigger",clearFavorites:"data-clear-favorites"}},function(e,t,n){"use strict";function r(e){var t="string"==typeof e;return"number"==typeof e||t?(t&&(e=e.replace(/,/g,"."),e=isNaN(+e)?1:+e),Number(function(e){return Number(e)===e&&e%1!=0}(e)?e.toFixed(2):e)):0}Object.defineProperty(t,"__esModule",{value:!0}),t.patchNumber=r},function(e,t,n){"use strict";function r(e){var t=this;return $.when(function(){var n=jQuery.Deferred(),r="[object Array]"==Object.prototype.toString.call(e),o={};return r||(t.logger("Список id, не является массивом",e),n.reject(o)),r&&0==e.length&&(t.logger("Список id пуст",e),n.reject(o)),r&&e.length>0&&("object"==("undefined"==typeof Products?"undefined":i(Products))&&Products.getList?Products.getList(e).done(function(){Products.getList(e).done(function(e){var r=s(e);Object.keys(r).length>0?(t.logger("Товары из апи common js: ",r),$.each(r,function(e,t){(0,c.default)(t)}),n.resolve(r)):n.reject({})}).fail(function(e){n.reject({})})}).fail(function(e){n.reject({})}):d(t,e).done(function(e){t.logger("Товары из стандартного апи: ",e),$.each(e,function(e,t){(0,c.default)(t)}),n.resolve(e)}).fail(function(e){n.reject({})})),n.promise()}())}function o(e,t){var n={};return $.each(t,function(t,r){$.each(e,function(e,t){$.each(t.variants,function(e,o){r==o.id&&(n[r]=o,n[r].product=t)})})}),n}function s(e){var t={};return $.each(e,function(e,n){n&&n.id&&(t[n.id]=n)}),t}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getProductList=r,t.getVariants=o,t.convertProductList=s;var a=(n(0),n(9)),c=function(e){return e&&e.__esModule?e:{default:e}}(a),d=function(e,t){return $.when(function(t){var n=jQuery.Deferred(),r=t.join(",");return t.length>0&&""!=r?$.post("/products_by_id/"+t.join(",")+".json").done(function(t){"ok"==t.status?(e.logger("Товары из апи: ",t.products),n.resolve(s(t.products))):n.resolve({})}).fail(function(e){n.resolve({})}):n.resolve({}),n.promise()}(t))}},function(e,t,n){"use strict";function r(){var e=this;$(document).on("click",o(i.systemSelectors.trigger),function(t){t.preventDefault(),e.eventMachine(i.systemEvents.before,$(this));var n=$(this).data(i.systemSelectors.triggerParam);if(!s(n))return void console.warn("Не валидный id",n);e.productIds.indexOf(n)>-1?(e.logger("removeToFavorites"),e.removeToFavorites($(this),n)):(e.logger("addToFavorites"),e.addToFavorites($(this),n))}),$(document).on("click",o(i.systemSelectors.add),function(t){t.preventDefault(),e.eventMachine(i.systemEvents.before,$(this));var n=$(this).data(i.systemSelectors.addParam);if(!s(n))return void console.warn("Не валидный id",n);e.addToFavorites($(this),n)}),$(document).on("click",o(i.systemSelectors.remove),function(t){t.preventDefault(),e.eventMachine(i.systemEvents.before,$(this));var n=$(this).data(i.systemSelectors.removeParam);if(!s(n))return void console.warn("Не валидный id",n);e.removeToFavorites($(this),n)}),$(document).on(i.systemEvents.update,function(t){e.options.productsListTemplate(t.insalesFavorites.products),e.options.variantsListTemplate(t.insalesFavorites.variants)}),$(document).on(i.systemEvents.update,function(t){var n=e.options.counterTemplate,r=e.productIds.length;0==r&&(n=e.options.counterTemplateEmpty||e.options.counterTemplate);var s=n.replace("%c%",r),a=$(o(i.systemSelectors.counter));a.html(s).data(i.systemSelectors.counterParam,r).attr(i.systemSelectors.counter,r),0==r?a.addClass(e.options.classes.empty).removeClass(e.options.classes.full):a.removeClass(e.options.classes.empty).addClass(e.options.classes.full),e.checkFavoritesProducts()})}function o(e,t){return"["+(t?e+'="'+t+'"':e)+"]"}function s(e){return(0,a.patchNumber)(e)>1}Object.defineProperty(t,"__esModule",{value:!0}),t.bindTrigger=r;var i=n(0),a=n(1)},function(e,t,n){"use strict";"use strict;";function r(e,t){var n=this,r=d(e,n.productIds,t,n.options.classes.added,n.options.classes.notAdded);if(r.isActive||!r.notAdded){n.productIds=u(n.productIds,t),n.productIds=v(n.productIds);var o=s(e);o&&(n.variantIds=u(n.variantIds,o),n.variantIds=v(n.variantIds)),n.setFavorites({products:n.productIds,variants:n.variantIds}),a(e,n,t),n.getProductList(n.productIds).done(function(t){n.products=t||{},n.variants=(0,f.getVariants)(t,n.variantIds)||{},n.eventMachine(l.systemEvents.remove,e),0==Object.keys(n.products).length&&n.eventMachine(l.systemEvents.empty,null),n.eventMachine(l.systemEvents.update,e)}).fail(function(){n.products={},n.variants={},n.eventMachine(l.systemEvents.remove,e),0==Object.keys(n.products).length&&n.eventMachine(l.systemEvents.empty,null),n.eventMachine(l.systemEvents.update,e)})}}function o(e,t){var n=this,r=d(e,n.productIds,t,n.options.classes.added,n.options.classes.notAdded);if(!(""===t||r.isActive&&r.isAdded)){n.productIds.push(t),n.productIds=v(n.productIds);var o=s(e);o&&(n.variantIds.push(o),n.variantIds=v(n.variantIds)),n.setFavorites({products:n.productIds,variants:n.variantIds}),a(e,n,t),n.getProductList(n.productIds).done(function(t){n.products=t||{},n.variants=(0,f.getVariants)(t,n.variantIds)||{},n.eventMachine(l.systemEvents.add,e),0==Object.keys(n.products).length&&n.eventMachine(l.systemEvents.empty,null),n.eventMachine(l.systemEvents.update,e)})}}function s(e){var t=!1,n=e.parents("form:first"),r=e.parents("[data-product-id]:first"),o=r.find('[name="variant_id"]');return o.length>0?t=(0,p.patchNumber)(o.val()):(o=n.find('[name="variant_id"]'),o.length>0&&(t=(0,p.patchNumber)(o.val()))),t}function i(){var e=this;$("["+l.systemSelectors.trigger+"]").each(function(t,n){a($(this),e,$(this).data(l.systemSelectors.triggerParam))}),$("["+l.systemSelectors.add+"]").each(function(t,n){a($(this),e,$(this).data(l.systemSelectors.addParam))}),$("["+l.systemSelectors.remove+"]").each(function(t,n){a($(this),e,$(this).data(l.systemSelectors.removeParam))})}function a(e,t,n){var r=d(e,t.productIds,n,t.options.classes.added,t.options.classes.notAdded);r.isActive&&(e.removeClass(t.options.classes.notAdded),t.options.replaceTitle&&e.attr("title",t.options.titles.added),r.isAdded||e.addClass(t.options.classes.added),t.options.buttonNotAddedText&&c(t,e,r.isActive)),r.isActive||(e.removeClass(t.options.classes.added),t.options.replaceTitle&&e.attr("title",t.options.titles.notAdded),r.notAdded||e.addClass(t.options.classes.notAdded),t.options.buttonNotAddedText&&c(t,e,r.isActive))}function c(e,t,n){var r=e.options.buttonNotAddedText||"";n?(r=e.options.buttonAddedText||e.options.buttonNotAddedText,t.html(r)):t.html(r)}function d(e,t,n,r,o){return{isActive:t.indexOf(n)>-1,isAdded:e.hasClass(r),notAdded:e.hasClass(o)}}function u(e,t){return e.filter(function(e){return e!=t})}Object.defineProperty(t,"__esModule",{value:!0}),t.removeToFavorites=r,t.addToFavorites=o,t.checkFavoritesProducts=i,t.getStatusProduct=d;var l=n(0),f=n(2),p=n(1),v=function(e){for(var t=[],n=0;n<e.length;n++)-1==t.indexOf(e[n])&&t.push(e[n]);return t}},function(e,t,n){"use strict";function r(e,t){var n=this,r=n.products||{},c=n.variants||{};$.each(r,function(e,t){-1==n.productIds.indexOf(t.id)&&delete r[e]}),$.each(c,function(e,t){-1==n.productIds.indexOf(t.product_id)&&delete c[e]});var d={};d.products=i(r),d.productsWithKeys=r,d.variants=n.variants||{},d.$target=t||null,d.favorites={size:Object.keys(d.products).length,totalPrice:s(d.products)},"object"==("undefined"==typeof EventBus?"undefined":a(EventBus))&&EventBus.publish&&EventBus.publish(e,d);var u=jQuery.Event(e);u.insalesFavorites=d,$(document).trigger(u);var l=o(n,e);n.options[l]&&"function"==typeof n.options[l]&&n.options[l](d)}function o(e,t){var n="";return $.each(c.systemEvents,function(e,r){r===t&&(n="on"+u(e))}),n}function s(e){var t=0;return $.each(e,function(e,n){t+=(0,d.patchNumber)(n.price)}),t}function i(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];t[n]=r}),t}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var c=n(0),d=n(1),u=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},function(e,t,n){"use strict";"use strict;";function r(){var e=this;return $.when(function(){var t=jQuery.Deferred();return localforage.getItem(s.system.keyFavorites,function(n,r){r?(e.logger("Данные получены из хранилища",r),t.resolve(r)):(e.logger("Хранилище пусто"),t.reject({}))}),t.promise()}())}function o(e){var t=this;localforage.setItem(s.system.keyFavorites,e,function(e){e?t.logger("Не удалось сохранить избранное в localforage"):t.logger("Данные сохранены в localforage")})}Object.defineProperty(t,"__esModule",{value:!0}),t.getFavorites=r,t.setFavorites=o;var s=n(0)},function(e,t,n){"use strict";function r(e){void 0===window.localforage?(console.warn("Не подключен плагин localforage!"),o("https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.0/localforage.min.js",function(){e()})):e()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=function(e){function t(e){throw new URIError("The script "+e.target.src+" is not accessible.")}return function(n,r){var o=document.createElement("script");o.type="text/javascript",o.onerror=t,r&&(o.onload=r),e.appendChild(o),o.src=n}}(document.head||document.getElementsByTagName("head")[0])},function(e,t,n){"use strict";function r(e,t){this.options.debug&&(console.info("==favorites=="),console.log(e),t&&console.log(t),console.log("///////////////////"),console.log("///favorites//////"),console.log("/////////////////"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e.parameters={},e.sale=null,$.each(e.properties,function(t,n){$.each(e.characteristics,function(t,r){if(n.id===r.property_id){var o=r;o.property_name=n.title,o.property={backoffice:n.backoffice,id:n.id,is_hidden:n.is_hidden,is_navigational:n.is_navigational,permalink:n.permalink,position:n.position,title:n.title},(e.parameters[n.permalink]||(e.parameters[n.permalink]=[])).push(o)}})}),e.variants&&$.each(e.variants,function(t,n){if(n.old_price){var r=(parseInt(n.old_price)-parseInt(n.price))/parseInt(n.old_price)*100,o=Math.round(r);o<100&&(e.sale=o)}}),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=n(0),i=n(2),a=n(4),c=n(3),d=n(6),u=n(7),l=r(u),f=n(8),p=r(f),v=n(5),h=r(v),m=function e(t){o(this,e);var n=this;this.options=$.extend(!0,{},s.defaults,t),this.system=s.system,this.productIds=[],this.variantIds=[],this.products={},this.variants={},this.logger=p.default,this.getProductList=i.getProductList,this.getFavorites=d.getFavorites,this.setFavorites=d.setFavorites,this.bindTrigger=c.bindTrigger,this.eventMachine=h.default,this.checkFavoritesProducts=a.checkFavoritesProducts,this.addToFavorites=a.addToFavorites,this.removeToFavorites=a.removeToFavorites,(0,l.default)(function(){n.getFavorites().done(function(e){n.productIds=e.products||[],n.variantIds=e.variants||[],n.bindTrigger(),n.checkFavoritesProducts(),n.getProductList(e.products).done(function(t){n.products=t||{},n.variants=(0,i.getVariants)(t,e.variants)||{},0==Object.keys(n.products).length?(n.eventMachine(s.systemEvents.empty,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null)):(n.eventMachine(s.systemEvents.full,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null))}).fail(function(){n.eventMachine(s.systemEvents.empty,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null)})}).fail(function(){n.bindTrigger(),n.checkFavoritesProducts(),n.eventMachine(s.systemEvents.empty,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null)})})};e.exports=m}]);
/**
 * Определение geo позиции
 *
 *
 * Зависимости:
 * jQuery
 * localforage (//cdnjs.cloudflare.com/ajax/libs/localforage/1.4.3/localforage.min.js)
 *
 * Параметры:
 * succes - колбек на получение данных
 * debug - выводит уведомления о процессах
 * use_forage - юзать localforage
 * clear_forage - очистить localforage при запуске
 * keyParameters - ключ в котором хранятся данные localforage
 *
  Пример вызова:
  var myGeo = new GeoManager({
   succes: function (geoData) {
     console.log(geoData);
   },
   debug: true
 })
 *
 */

 var GeoManager = function (options) {
   var self = this;

   var DEFAULT_OPTIONS = {
     debug: false,
     clear_forage: false,
     use_forage: true,
     keyParameters: 'user_geo',
     succes: function () {}
   }

  self.option = $.extend(DEFAULT_OPTIONS, options);

  self.setLog('Настройки плагина', self.option);

  self.init();
}

/**
 * Инициализация
 */
GeoManager.prototype.init = function () {
  var self = this;

  // Если в настройка очистить сторадж при запуске
  if (self.option.clear_forage && localforage) {
    localforage.removeItem(self.option.keyParameters, function () {
      self.setLog('Локальное хранилище очищено', 'Ключ: ' + self.option.keyParameters);
    })
  }

  if (typeof window.localforage == "undefined") {
    console.warn('Не подключен плагин localforage!');
  }

  // получить гео данные
  self.getGeoData().done(function (geoData) {
    self.setLog('Вызов колбека succes');
    self.option.succes(geoData);

  }).fail(function (err) {
    self.setLog('Не удалось получить данные', err);
  });
};

/**
 * Получаем гео данные
 */
GeoManager.prototype.getGeoData = function () {
  var self = this;
  return $.when(_getGeoData())

  function _getGeoData() {
    var dfd = jQuery.Deferred();

    if (window.localforage && self.option.use_forage) {
      // пробуем забрать данные из хранилища
      self.getLocalData().done(function (geoData) {
        dfd.resolve( geoData );
      }).fail(function () {
        // если хранилище пусто, забираем из kladr.insales.ru
        self.getKladrData().done(function (geoData) {
          dfd.resolve( geoData );
        }).fail(function (err) {
          dfd.reject( err );
        });
      });
    }else{
      self.getKladrData().done(function (geoData) {
        dfd.resolve( geoData );
      }).fail(function (err) {
        dfd.reject( err );
      });
    }

    return dfd.promise();
  }
};

// Получить данные из хранилища
GeoManager.prototype.getLocalData = function () {
  var self = this;
  return $.when(_getLocalData())

  function _getLocalData() {
    var dfd = jQuery.Deferred();

    localforage.getItem(self.option.keyParameters, function(err, localData) {
      if (localData) {
        self.setLog('Данные получены из хранилища', localData);

        dfd.resolve( localData );
      }else{
        self.setLog('Хранилище пусто, данные будут запрошены в kladr.insales.ru');

        dfd.reject('Хранилище пусто');
      }
    });

    return dfd.promise();
  }
};

// Получить данные из kladr.insales.ru
GeoManager.prototype.getKladrData = function () {
  var self = this;
  return $.when(_getKladrData())

  function _getKladrData() {
    var dfd = jQuery.Deferred();

    $.ajax({
      url: 'https://kladr.insales.ru/current_location.json',
      type: 'get',
      dataType: 'jsonp',
    })
    .done(function(kladrData) {
      self.setLog('Данные получены из kladr.insales.ru', kladrData);
      if (window.localforage && self.option.use_forage) {
        localforage.setItem(self.option.keyParameters, kladrData);
      }

      dfd.resolve( kladrData );
    })
    .fail(function(err) {
      self.setLog('Произошла ошибка при получении данных из kladr.insales.ru', err);
      dfd.reject( err );
    })

    return dfd.promise();
  }
};

// Установить свои данные
GeoManager.prototype.setLocalData = function (newLocals, _setCallback) {
  var self = this;
  var setCallback = _setCallback || function () {};
  if (window.localforage && self.option.use_forage) {
    localforage.setItem(self.option.keyParameters, newLocals, function(err, newlocalData) {
      if (newlocalData) {
        self.setLog('В хранилище обновлены данные через метод setLocalData', newlocalData);
        setCallback(newlocalData);
        self.option.succes(newlocalData);
      }else{
        self.setLog('Не удалось обновить данные');
      }
    });
  }
};

// Инициализировать страны
GeoManager.prototype.initCountry = function () {
  var self = this;

  _.forEach(self.option.cityList, function (_city) {

    if (!self.option.countries[_city.country_name]) {
      self.option.countries[_city.country_name] = {
        cities: [],
        title: _city.country_name
      }
    }

    self.option.countries[_city.country_name].cities.push(_city)
    self.option.countries[_city.country_name].title = _city.country_name
  });
}

// Инициализировать поля магазинов
GeoManager.prototype.initShops = function () {
  var self = this;

  _.forEach(self.option.cityList, function (_city) {
    _city.shops = _.orderBy(_city.shops, ['isOfical'], ['desc']);

    _.forEach(_city.shops, function (_shop) {
      var _templateBaloon = $('[data-template-id="baloon-content"]').html();
      var compiledTemplateBaloon = _.template(_templateBaloon);
      var _contBal = '';
      var _shopContent = compiledTemplateBaloon({shop_content: _shop});
      var _balContent = _shop.baloon;
      if (_shopContent) {
        _contBal = _shopContent;
      }
      if (_balContent) {
        _contBal += '<br>' + _balContent;
      }

      _shop.balloonContent = _contBal;
    });
  });
}


// Фильтровать города без магазинов
GeoManager.prototype.filterCities = function () {
  var self = this;

  self.option.cityList = _.reduce(self.option.cityList, function(result, value, key) {
    if (self.option.cityList[value.keyTitle] && self.option.cityList[value.keyTitle].shops.length > 0 || (self.option.majorCities[value.keyTitle] && self.option.majorCities[value.keyTitle].subCities)) {
      result[value.keyTitle] = value;
    }else{
      self.setLog('В городе отсутствуют магазины', value)
    }

    return result;
  }, {});
}

// по алфавиту
GeoManager.prototype.initAlphabet = function () {
  var self = this;
  var _orderCity = _.orderBy(self.option.cityList, ['title'], ['asc']);

  $.each(_orderCity, function(index, el) {
    var _alfa = _.toLower(el.title.charAt(0));
    if (!self.option.alphabetList[_alfa]) {
      self.option.alphabetList[_alfa] = {
        title: _.toUpper(_alfa),
        list: []
      }
    }

    self.option.alphabetList[_alfa].list.push(el)
  });

  self.setLog('Сортировка по алфавиту', self.option.alphabetList)
}

// по основным городам
GeoManager.prototype.initParents = function () {
  var self = this;
  self.option.majorCities = {};

  $.each(self.option.cityList, function(index, el) {
    if (el.isParent) {
      if (self.option.majorCities[ el.keyTitle ]) {
        self.option.majorCities[ el.keyTitle ].city = el
      }else{
        self.option.majorCities[ el.keyTitle ] = {
          subCities: [],
          city: el
        }
      }
    }else{
      if (el.parentCity && el.parentCity != '') {
        if (self.option.majorCities[ _.toLower(el.parentCity) ]) {
          self.option.majorCities[ _.toLower(el.parentCity) ].subCities.push(el)
        }else{
          self.option.majorCities[ _.toLower(el.parentCity) ] = {
            subCities: []
          }
          self.option.majorCities[ _.toLower(el.parentCity) ].subCities.push(el)
        }
      }
    }
  });
}


// Дебагер
GeoManager.prototype.setLog = function (_name, _variable) {
  var self = this;
  if (self.option.debug) {
    console.info('==GeoManager==');
    console.log(_name);
    if (_variable) {
      console.log(_variable);
    }
    console.log('/////////////////');
    console.log('///GeoManager///');
    console.log('///////////////');
  }
};
/**
 * InstagramPhotos
 * Получаем массив фотографий из инстаграмма
 *
 * var myInstagram = new InstagramPhotos({
   user_id: 1111111,
   access_token: '111111.1677ed0.9844c23093e34ff290cd09d941e22535',
   countPhoto: 20,
   done: function (photos) {
     // тут рисуем вывод фотографий
   },
   fail: function (error) {
     if (error.meta) {
       console.warn(error.meta.error_message);
     }
   }
 });
 */


function InstagramPhotos(options) {
  var self = this;

  var DEFAULT_OPTIONS = {
    user_id: null,
    access_token: null,
    countPhoto: 20,
    filterImages: null, // function (image){ return image.tags.indexOf('beauty') > -1 }
    done: function () {},
    fail: function () {}
  }

  self.options = $.extend(true, DEFAULT_OPTIONS, options);

  self.init();
}

InstagramPhotos.prototype.init = function () {
  var self = this;

  var isValid = self.validOption(self.options);

  if (!isValid) {
    console.log('Не заполнен user_id или access_token');
    return;
  }

  self.getPhoto();
};

InstagramPhotos.prototype._filter = function (images) {
  var self = this;
  var result = [];


    $.each(images, function(index, el) {
       if (self.options.filterImages && self.options.filterImages(el)) {
         result.unshift(el)
       }
    });


  return result;
}

InstagramPhotos.prototype.validOption = function (options) {
  return options.user_id && options.access_token;
}

InstagramPhotos.prototype.getPhoto = function () {
  var self = this;
  var options = self.options;
  var url = 'https://api.instagram.com/v1/users/' + options.user_id + '/media/recent';
  var access_token = options.access_token;
  var countPhoto = options.countPhoto;
  var done = options.done;
  var fail = options.fail;

  $.ajax({
    url: url,
    dataType: 'jsonp',
    type: 'GET',
    data: {
      access_token: access_token,
      count: countPhoto
    }
  })
  .done(function(result) {
    if (result.meta && result.meta.code == 200) {
      if (self.options.filterImages) {
        done(self._filter(result.data));
      }else{
        done(result.data);
      }
    }else{
      fail(result);
    }
  })
  .fail(function(error) {
    fail(error);
  })
};
/*! alertifyjs - v1.11.2 - Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) */

!function(a){"use strict";function b(a,b){a.className+=" "+b}function c(a,b){for(var c=a.className.split(" "),d=b.split(" "),e=0;e<d.length;e+=1){var f=c.indexOf(d[e]);f>-1&&c.splice(f,1)}a.className=c.join(" ")}function d(){return"rtl"===a.getComputedStyle(document.body).direction}function e(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function g(a){for(;a.lastChild;)a.removeChild(a.lastChild)}function h(a){if(null===a)return a;var b;if(Array.isArray(a)){b=[];for(var c=0;c<a.length;c+=1)b.push(h(a[c]));return b}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return b=new RegExp(a.source),b.global=a.global,b.ignoreCase=a.ignoreCase,b.multiline=a.multiline,b.lastIndex=a.lastIndex,b;if("object"==typeof a){b={};for(var d in a)a.hasOwnProperty(d)&&(b[d]=h(a[d]));return b}return a}function i(a,b){if(a.elements){var c=a.elements.root;c.parentNode.removeChild(c),delete a.elements,a.settings=h(a.__settings),a.__init=b,delete a.__internal}}function j(a,b){return function(){if(arguments.length>0){for(var c=[],d=0;d<arguments.length;d+=1)c.push(arguments[d]);return c.push(a),b.apply(a,c)}return b.apply(a,[null,a])}}function k(a,b){return{index:a,button:b,cancel:!1}}function l(a,b){if("function"==typeof b.get(a))return b.get(a).call(b)}function m(){function a(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function b(a){var b=d[a].dialog;return b&&"function"==typeof b.__init&&b.__init(b),b}function c(b,c,e,f){var g={dialog:null,factory:c};return void 0!==f&&(g.factory=function(){return a(new d[f].factory,new c)}),e||(g.dialog=a(new g.factory,t)),d[b]=g}var d={};return{defaults:o,dialog:function(d,e,f,g){if("function"!=typeof e)return b(d);if(this.hasOwnProperty(d))throw new Error("alertify.dialog: name already exists");var h=c(d,e,f,g);this[d]=f?function(){if(0===arguments.length)return h.dialog;var b=a(new h.factory,t);return b&&"function"==typeof b.__init&&b.__init(b),b.main.apply(b,arguments),b.show.apply(b)}:function(){if(h.dialog&&"function"==typeof h.dialog.__init&&h.dialog.__init(h.dialog),0===arguments.length)return h.dialog;var a=h.dialog;return a.main.apply(h.dialog,arguments),a.show.apply(h.dialog)}},closeAll:function(a){for(var b=p.slice(0),c=0;c<b.length;c+=1){var d=b[c];void 0!==a&&a===d||d.close()}},setting:function(a,c,d){if("notifier"===a)return u.setting(c,d);var e=b(a);return e?e.setting(c,d):void 0},set:function(a,b,c){return this.setting(a,b,c)},get:function(a,b){return this.setting(a,b)},notify:function(a,b,c,d){return u.create(b,d).push(a,c)},message:function(a,b,c){return u.create(null,c).push(a,b)},success:function(a,b,c){return u.create("success",c).push(a,b)},error:function(a,b,c){return u.create("error",c).push(a,b)},warning:function(a,b,c){return u.create("warning",c).push(a,b)},dismissAll:function(){u.dismissAll()}}}var n={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},o={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",notifier:{delay:5,position:"bottom-right",closeButton:!1},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},p=[],q=function(){return document.addEventListener?function(a,b,c,d){a.addEventListener(b,c,!0===d)}:document.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:void 0}(),r=function(){return document.removeEventListener?function(a,b,c,d){a.removeEventListener(b,c,!0===d)}:document.detachEvent?function(a,b,c){a.detachEvent("on"+b,c)}:void 0}(),s=function(){var a,b,c=!1,d={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(a in d)if(void 0!==document.documentElement.style[a]){b=d[a],c=!0;break}return{type:b,supported:c}}(),t=function(){function m(a){if(!a.__internal){delete a.__init,a.__settings||(a.__settings=h(a.settings));var c;"function"==typeof a.setup?(c=a.setup(),c.options=c.options||{},c.focus=c.focus||{}):c={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof a.hooks&&(a.hooks={});var d=[];if(Array.isArray(c.buttons))for(var e=0;e<c.buttons.length;e+=1){var f=c.buttons[e],g={};for(var i in f)f.hasOwnProperty(i)&&(g[i]=f[i]);d.push(g)}var k=a.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:d,focus:c.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},l={};l.root=document.createElement("div"),l.root.className=Da.base+" "+Da.hidden+" ",l.root.innerHTML=Ca.dimmer+Ca.modal,l.dimmer=l.root.firstChild,l.modal=l.root.lastChild,l.modal.innerHTML=Ca.dialog,l.dialog=l.modal.firstChild,l.dialog.innerHTML=Ca.reset+Ca.commands+Ca.header+Ca.body+Ca.footer+Ca.resizeHandle+Ca.reset,l.reset=[],l.reset.push(l.dialog.firstChild),l.reset.push(l.dialog.lastChild),l.commands={},l.commands.container=l.reset[0].nextSibling,l.commands.pin=l.commands.container.firstChild,l.commands.maximize=l.commands.pin.nextSibling,l.commands.close=l.commands.maximize.nextSibling,l.header=l.commands.container.nextSibling,l.body=l.header.nextSibling,l.body.innerHTML=Ca.content,l.content=l.body.firstChild,l.footer=l.body.nextSibling,l.footer.innerHTML=Ca.buttons.auxiliary+Ca.buttons.primary,l.resizeHandle=l.footer.nextSibling,l.buttons={},l.buttons.auxiliary=l.footer.firstChild,l.buttons.primary=l.buttons.auxiliary.nextSibling,l.buttons.primary.innerHTML=Ca.button,l.buttonTemplate=l.buttons.primary.firstChild,l.buttons.primary.removeChild(l.buttonTemplate);for(var m=0;m<a.__internal.buttons.length;m+=1){var n=a.__internal.buttons[m];ya.indexOf(n.key)<0&&ya.push(n.key),n.element=l.buttonTemplate.cloneNode(),n.element.innerHTML=n.text,"string"==typeof n.className&&""!==n.className&&b(n.element,n.className);for(var o in n.attrs)"className"!==o&&n.attrs.hasOwnProperty(o)&&n.element.setAttribute(o,n.attrs[o]);"auxiliary"===n.scope?l.buttons.auxiliary.appendChild(n.element):l.buttons.primary.appendChild(n.element)}a.elements=l,k.resetHandler=j(a,X),k.beginMoveHandler=j(a,aa),k.beginResizeHandler=j(a,ga),k.bringToFrontHandler=j(a,B),k.modalClickHandler=j(a,R),k.buttonsClickHandler=j(a,T),k.commandsClickHandler=j(a,F),k.transitionInHandler=j(a,Y),k.transitionOutHandler=j(a,Z);for(var p in k.options)void 0!==c.options[p]?a.set(p,c.options[p]):v.defaults.hasOwnProperty(p)?a.set(p,v.defaults[p]):"title"===p&&a.set(p,v.defaults.glossary[p]);"function"==typeof a.build&&a.build()}document.body.appendChild(a.elements.root)}function o(){wa=f(),xa=e()}function t(){a.scrollTo(wa,xa)}function u(){for(var a=0,d=0;d<p.length;d+=1){var e=p[d];(e.isModal()||e.isMaximized())&&(a+=1)}0===a&&document.body.className.indexOf(Da.noOverflow)>=0?(c(document.body,Da.noOverflow),w(!1)):a>0&&document.body.className.indexOf(Da.noOverflow)<0&&(w(!0),b(document.body,Da.noOverflow))}function w(d){v.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight&&(d?(Fa=xa,Ea=a.getComputedStyle(document.body).top,b(document.body,Da.fixed),document.body.style.top=-xa+"px"):(xa=Fa,document.body.style.top=Ea,c(document.body,Da.fixed),t()))}function x(a,d,e){"string"==typeof e&&c(a.elements.root,Da.prefix+e),b(a.elements.root,Da.prefix+d),za=a.elements.root.offsetWidth}function y(a){a.get("modal")?(c(a.elements.root,Da.modeless),a.isOpen()&&(pa(a),N(a),u())):(b(a.elements.root,Da.modeless),a.isOpen()&&(oa(a),N(a),u()))}function z(a){a.get("basic")?b(a.elements.root,Da.basic):c(a.elements.root,Da.basic)}function A(a){a.get("frameless")?b(a.elements.root,Da.frameless):c(a.elements.root,Da.frameless)}function B(a,b){for(var c=p.indexOf(b),d=c+1;d<p.length;d+=1)if(p[d].isModal())return;return document.body.lastChild!==b.elements.root&&(document.body.appendChild(b.elements.root),p.splice(p.indexOf(b),1),p.push(b),W(b)),!1}function C(a,d,e,f){switch(d){case"title":a.setHeader(f);break;case"modal":y(a);break;case"basic":z(a);break;case"frameless":A(a);break;case"pinned":O(a);break;case"closable":Q(a);break;case"maximizable":P(a);break;case"pinnable":K(a);break;case"movable":ea(a);break;case"resizable":ka(a);break;case"padding":f?c(a.elements.root,Da.noPadding):a.elements.root.className.indexOf(Da.noPadding)<0&&b(a.elements.root,Da.noPadding);break;case"overflow":f?c(a.elements.root,Da.noOverflow):a.elements.root.className.indexOf(Da.noOverflow)<0&&b(a.elements.root,Da.noOverflow);break;case"transition":x(a,f,e)}"function"==typeof a.hooks.onupdate&&a.hooks.onupdate.call(a,d,e,f)}function D(a,b,c,d,e){var f={op:void 0,items:[]};if(void 0===e&&"string"==typeof d)f.op="get",b.hasOwnProperty(d)?(f.found=!0,f.value=b[d]):(f.found=!1,f.value=void 0);else{var g;if(f.op="set","object"==typeof d){var h=d;for(var i in h)b.hasOwnProperty(i)?(b[i]!==h[i]&&(g=b[i],b[i]=h[i],c.call(a,i,g,h[i])),f.items.push({key:i,value:h[i],found:!0})):f.items.push({key:i,value:h[i],found:!1})}else{if("string"!=typeof d)throw new Error("args must be a string or object");b.hasOwnProperty(d)?(b[d]!==e&&(g=b[d],b[d]=e,c.call(a,d,g,e)),f.items.push({key:d,value:e,found:!0})):f.items.push({key:d,value:e,found:!1})}}return f}function E(a){var b;S(a,function(a){return b=!0===a.invokeOnClose}),!b&&a.isOpen()&&a.close()}function F(a,b){switch(a.srcElement||a.target){case b.elements.commands.pin:b.isPinned()?H(b):G(b);break;case b.elements.commands.maximize:b.isMaximized()?J(b):I(b);break;case b.elements.commands.close:E(b)}return!1}function G(a){a.set("pinned",!0)}function H(a){a.set("pinned",!1)}function I(a){l("onmaximize",a),b(a.elements.root,Da.maximized),a.isOpen()&&u(),l("onmaximized",a)}function J(a){l("onrestore",a),c(a.elements.root,Da.maximized),a.isOpen()&&u(),l("onrestored",a)}function K(a){a.get("pinnable")?b(a.elements.root,Da.pinnable):c(a.elements.root,Da.pinnable)}function L(a){var b=f();a.elements.modal.style.marginTop=e()+"px",a.elements.modal.style.marginLeft=b+"px",a.elements.modal.style.marginRight=-b+"px"}function M(a){var b=parseInt(a.elements.modal.style.marginTop,10),c=parseInt(a.elements.modal.style.marginLeft,10);if(a.elements.modal.style.marginTop="",a.elements.modal.style.marginLeft="",a.elements.modal.style.marginRight="",a.isOpen()){var d=0,g=0;""!==a.elements.dialog.style.top&&(d=parseInt(a.elements.dialog.style.top,10)),a.elements.dialog.style.top=d+(b-e())+"px",""!==a.elements.dialog.style.left&&(g=parseInt(a.elements.dialog.style.left,10)),a.elements.dialog.style.left=g+(c-f())+"px"}}function N(a){a.get("modal")||a.get("pinned")?M(a):L(a)}function O(a){a.get("pinned")?(c(a.elements.root,Da.unpinned),a.isOpen()&&M(a)):(b(a.elements.root,Da.unpinned),a.isOpen()&&!a.isModal()&&L(a))}function P(a){a.get("maximizable")?b(a.elements.root,Da.maximizable):c(a.elements.root,Da.maximizable)}function Q(a){a.get("closable")?(b(a.elements.root,Da.closable),ua(a)):(c(a.elements.root,Da.closable),va(a))}function R(a,b){if(a.timeStamp-Ha>200&&(Ha=a.timeStamp)&&!Ga){var c=a.srcElement||a.target;return!0===b.get("closableByDimmer")&&c===b.elements.modal&&E(b),Ga=!1,!1}}function S(a,b){if(Date.now()-Ia>200&&(Ia=Date.now()))for(var c=0;c<a.__internal.buttons.length;c+=1){var d=a.__internal.buttons[c];if(!d.element.disabled&&b(d)){var e=k(c,d);"function"==typeof a.callback&&a.callback.apply(a,[e]),!1===e.cancel&&a.close();break}}}function T(a,b){var c=a.srcElement||a.target;S(b,function(a){return a.element===c&&(Ja=!0)})}function U(a){if(Ja)return void(Ja=!1);var b=p[p.length-1],c=a.keyCode;return 0===b.__internal.buttons.length&&c===n.ESC&&!0===b.get("closable")?(E(b),!1):ya.indexOf(c)>-1?(S(b,function(a){return a.key===c}),!1):void 0}function V(a){var b=p[p.length-1],c=a.keyCode;if(c===n.LEFT||c===n.RIGHT){for(var d=b.__internal.buttons,e=0;e<d.length;e+=1)if(document.activeElement===d[e].element)switch(c){case n.LEFT:return void d[(e||d.length)-1].element.focus();case n.RIGHT:return void d[(e+1)%d.length].element.focus()}}else if(c<n.F12+1&&c>n.F1-1&&ya.indexOf(c)>-1)return a.preventDefault(),a.stopPropagation(),S(b,function(a){return a.key===c}),!1}function W(a,b){if(b)b.focus();else{var c=a.__internal.focus,d=c.element;switch(typeof c.element){case"number":a.__internal.buttons.length>c.element&&(d=!0===a.get("basic")?a.elements.reset[0]:a.__internal.buttons[c.element].element);break;case"string":d=a.elements.body.querySelector(c.element);break;case"function":d=c.element.call(a)}void 0!==d&&null!==d||0!==a.__internal.buttons.length||(d=a.elements.reset[0]),d&&d.focus&&(d.focus(),c.select&&d.select&&d.select())}}function X(a,b){if(!b)for(var c=p.length-1;c>-1;c-=1)if(p[c].isModal()){b=p[c];break}if(b&&b.isModal()){var d,e=a.srcElement||a.target,f=e===b.elements.reset[1]||0===b.__internal.buttons.length&&e===document.body;f&&(b.get("maximizable")?d=b.elements.commands.maximize:b.get("closable")&&(d=b.elements.commands.close)),void 0===d&&("number"==typeof b.__internal.focus.element?e===b.elements.reset[0]?d=b.elements.buttons.auxiliary.firstChild||b.elements.buttons.primary.firstChild:f&&(d=b.elements.reset[0]):e===b.elements.reset[0]&&(d=b.elements.buttons.primary.lastChild||b.elements.buttons.auxiliary.lastChild)),W(b,d)}}function Y(a,b){clearTimeout(b.__internal.timerIn),W(b),t(),Ja=!1,l("onfocus",b),r(b.elements.dialog,s.type,b.__internal.transitionInHandler),c(b.elements.root,Da.animationIn)}function Z(a,b){clearTimeout(b.__internal.timerOut),r(b.elements.dialog,s.type,b.__internal.transitionOutHandler),da(b),ja(b),b.isMaximized()&&!b.get("startMaximized")&&J(b),v.defaults.maintainFocus&&b.__internal.activeElement&&(b.__internal.activeElement.focus(),b.__internal.activeElement=null),"function"==typeof b.__internal.destroy&&b.__internal.destroy.apply(b)}function $(a,b){var c=a[Na]-La,d=a[Oa]-Ma;Qa&&(d-=document.body.scrollTop),b.style.left=c+"px",b.style.top=d+"px"}function _(a,b){var c=a[Na]-La,d=a[Oa]-Ma;Qa&&(d-=document.body.scrollTop),b.style.left=Math.min(Pa.maxLeft,Math.max(Pa.minLeft,c))+"px",b.style.top=Qa?Math.min(Pa.maxTop,Math.max(Pa.minTop,d))+"px":Math.max(Pa.minTop,d)+"px"}function aa(a,c){if(null===Sa&&!c.isMaximized()&&c.get("movable")){var d,e=0,f=0;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0],Na="clientX",Oa="clientY"):0===a.button&&(d=a),d){var g=c.elements.dialog;if(b(g,Da.capture),g.style.left&&(e=parseInt(g.style.left,10)),g.style.top&&(f=parseInt(g.style.top,10)),La=d[Na]-e,Ma=d[Oa]-f,c.isModal()?Ma+=c.elements.modal.scrollTop:c.isPinned()&&(Ma-=document.body.scrollTop),c.get("moveBounded")){var h=g,i=-e,j=-f;do{i+=h.offsetLeft,j+=h.offsetTop}while(h=h.offsetParent);Pa={maxLeft:i,minLeft:-i,maxTop:document.documentElement.clientHeight-g.clientHeight-j,minTop:-j},Ra=_}else Pa=null,Ra=$;return l("onmove",c),Qa=!c.isModal()&&c.isPinned(),Ka=c,Ra(d,g),b(document.body,Da.noSelection),!1}}}function ba(a){if(Ka){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&Ra(b,Ka.elements.dialog)}}function ca(){if(Ka){var a=Ka;Ka=Pa=null,c(document.body,Da.noSelection),c(a.elements.dialog,Da.capture),l("onmoved",a)}}function da(a){Ka=null;var b=a.elements.dialog;b.style.left=b.style.top=""}function ea(a){a.get("movable")?(b(a.elements.root,Da.movable),a.isOpen()&&qa(a)):(da(a),c(a.elements.root,Da.movable),a.isOpen()&&ra(a))}function fa(a,b,c){var e=b,f=0,g=0;do{f+=e.offsetLeft,g+=e.offsetTop}while(e=e.offsetParent);var h,i;!0===c?(h=a.pageX,i=a.pageY):(h=a.clientX,i=a.clientY);var j=d();if(j&&(h=document.body.offsetWidth-h,isNaN(Ta)||(f=document.body.offsetWidth-f-b.offsetWidth)),b.style.height=i-g+Wa+"px",b.style.width=h-f+Wa+"px",!isNaN(Ta)){var k=.5*Math.abs(b.offsetWidth-Ua);j&&(k*=-1),b.offsetWidth>Ua?b.style.left=Ta+k+"px":b.offsetWidth>=Va&&(b.style.left=Ta-k+"px")}}function ga(a,c){if(!c.isMaximized()){var d;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0]):0===a.button&&(d=a),d){l("onresize",c),Sa=c,Wa=c.elements.resizeHandle.offsetHeight/2;var e=c.elements.dialog;return b(e,Da.capture),Ta=parseInt(e.style.left,10),e.style.height=e.offsetHeight+"px",e.style.minHeight=c.elements.header.offsetHeight+c.elements.footer.offsetHeight+"px",e.style.width=(Ua=e.offsetWidth)+"px","none"!==e.style.maxWidth&&(e.style.minWidth=(Va=e.offsetWidth)+"px"),e.style.maxWidth="none",b(document.body,Da.noSelection),!1}}}function ha(a){if(Sa){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&fa(b,Sa.elements.dialog,!Sa.get("modal")&&!Sa.get("pinned"))}}function ia(){if(Sa){var a=Sa;Sa=null,c(document.body,Da.noSelection),c(a.elements.dialog,Da.capture),Ga=!0,l("onresized",a)}}function ja(a){Sa=null;var b=a.elements.dialog;"none"===b.style.maxWidth&&(b.style.maxWidth=b.style.minWidth=b.style.width=b.style.height=b.style.minHeight=b.style.left="",Ta=Number.Nan,Ua=Va=Wa=0)}function ka(a){a.get("resizable")?(b(a.elements.root,Da.resizable),a.isOpen()&&sa(a)):(ja(a),c(a.elements.root,Da.resizable),a.isOpen()&&ta(a))}function la(){for(var a=0;a<p.length;a+=1){var b=p[a];b.get("autoReset")&&(da(b),ja(b))}}function ma(b){1===p.length&&(q(a,"resize",la),q(document.body,"keyup",U),q(document.body,"keydown",V),q(document.body,"focus",X),q(document.documentElement,"mousemove",ba),q(document.documentElement,"touchmove",ba),q(document.documentElement,"mouseup",ca),q(document.documentElement,"touchend",ca),q(document.documentElement,"mousemove",ha),q(document.documentElement,"touchmove",ha),q(document.documentElement,"mouseup",ia),q(document.documentElement,"touchend",ia)),q(b.elements.commands.container,"click",b.__internal.commandsClickHandler),q(b.elements.footer,"click",b.__internal.buttonsClickHandler),q(b.elements.reset[0],"focus",b.__internal.resetHandler),q(b.elements.reset[1],"focus",b.__internal.resetHandler),Ja=!0,q(b.elements.dialog,s.type,b.__internal.transitionInHandler),b.get("modal")||oa(b),b.get("resizable")&&sa(b),b.get("movable")&&qa(b)}function na(b){1===p.length&&(r(a,"resize",la),r(document.body,"keyup",U),r(document.body,"keydown",V),r(document.body,"focus",X),r(document.documentElement,"mousemove",ba),r(document.documentElement,"mouseup",ca),r(document.documentElement,"mousemove",ha),r(document.documentElement,"mouseup",ia)),r(b.elements.commands.container,"click",b.__internal.commandsClickHandler),r(b.elements.footer,"click",b.__internal.buttonsClickHandler),r(b.elements.reset[0],"focus",b.__internal.resetHandler),r(b.elements.reset[1],"focus",b.__internal.resetHandler),q(b.elements.dialog,s.type,b.__internal.transitionOutHandler),b.get("modal")||pa(b),b.get("movable")&&ra(b),b.get("resizable")&&ta(b)}function oa(a){q(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function pa(a){r(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function qa(a){q(a.elements.header,"mousedown",a.__internal.beginMoveHandler),q(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function ra(a){r(a.elements.header,"mousedown",a.__internal.beginMoveHandler),r(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function sa(a){q(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),q(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ta(a){r(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),r(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ua(a){q(a.elements.modal,"click",a.__internal.modalClickHandler)}function va(a){r(a.elements.modal,"click",a.__internal.modalClickHandler)}var wa,xa,ya=[],za=null,Aa=!1,Ba=a.navigator.userAgent.indexOf("Safari")>-1&&a.navigator.userAgent.indexOf("Chrome")<0,Ca={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},Da={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned"},Ea="",Fa=0,Ga=!1,Ha=0,Ia=0,Ja=!1,Ka=null,La=0,Ma=0,Na="pageX",Oa="pageY",Pa=null,Qa=!1,Ra=null,Sa=null,Ta=Number.Nan,Ua=0,Va=0,Wa=0;return{__init:m,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(Da.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(Da.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(Da.unpinned)<0},maximize:function(){return this.isMaximized()||I(this),this},restore:function(){return this.isMaximized()&&J(this),this},pin:function(){return this.isPinned()||G(this),this},unpin:function(){return this.isPinned()&&H(this),this},bringToFront:function(){return B(null,this),this},moveTo:function(a,b){if(!isNaN(a)&&!isNaN(b)){l("onmove",this);var c=this.elements.dialog,e=c,f=0,g=0;c.style.left&&(f-=parseInt(c.style.left,10)),c.style.top&&(g-=parseInt(c.style.top,10));do{f+=e.offsetLeft,g+=e.offsetTop}while(e=e.offsetParent);var h=a-f,i=b-g;d()&&(h*=-1),c.style.left=h+"px",c.style.top=i+"px",l("onmoved",this)}return this},resizeTo:function(a,b){var c=parseFloat(a),d=parseFloat(b),e=/(\d*\.\d+|\d+)%/;if(!isNaN(c)&&!isNaN(d)&&!0===this.get("resizable")){l("onresize",this),(""+a).match(e)&&(c=c/100*document.documentElement.clientWidth),(""+b).match(e)&&(d=d/100*document.documentElement.clientHeight);var f=this.elements.dialog;"none"!==f.style.maxWidth&&(f.style.minWidth=(Va=f.offsetWidth)+"px"),f.style.maxWidth="none",f.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",f.style.width=c+"px",f.style.height=d+"px",l("onresized",this)}return this},setting:function(a,b){var c=this,d=D(this,this.__internal.options,function(a,b,d){C(c,a,b,d)},a,b);if("get"===d.op)return d.found?d.value:void 0!==this.settings?D(this,this.settings,this.settingUpdated||function(){},a,b).value:void 0;if("set"===d.op){if(d.items.length>0)for(var e=this.settingUpdated||function(){},f=0;f<d.items.length;f+=1){var g=d.items[f];g.found||void 0===this.settings||D(this,this.settings,e,g.key,g.value)}return this}},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},setHeader:function(b){return"string"==typeof b?(g(this.elements.header),this.elements.header.innerHTML=b):b instanceof a.HTMLElement&&this.elements.header.firstChild!==b&&(g(this.elements.header),this.elements.header.appendChild(b)),this},setContent:function(b){return"string"==typeof b?(g(this.elements.content),this.elements.content.innerHTML=b):b instanceof a.HTMLElement&&this.elements.content.firstChild!==b&&(g(this.elements.content),this.elements.content.appendChild(b)),this},showModal:function(a){return this.show(!0,a)},show:function(a,d){if(m(this),this.__internal.isOpen){da(this),ja(this),b(this.elements.dialog,Da.shake);var e=this;setTimeout(function(){c(e.elements.dialog,Da.shake)},200)}else{if(this.__internal.isOpen=!0,p.push(this),v.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",Aa="0"),"function"==typeof this.prepare&&this.prepare(),ma(this),void 0!==a&&this.set("modal",a),o(),u(),"string"==typeof d&&""!==d&&(this.__internal.className=d,b(this.elements.root,d)),this.get("startMaximized")?this.maximize():this.isMaximized()&&J(this),N(this),c(this.elements.root,Da.animationOut),b(this.elements.root,Da.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,s.supported?1e3:100),Ba){var f=this.elements.root;f.style.display="none",setTimeout(function(){f.style.display="block"},0)}za=this.elements.root.offsetWidth,c(this.elements.root,Da.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),l("onshow",this)}return this},close:function(){return this.__internal.isOpen&&!1!==l("onclosing",this)&&(na(this),c(this.elements.root,Da.animationIn),b(this.elements.root,Da.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,s.supported?1e3:100),b(this.elements.root,Da.hidden),za=this.elements.modal.offsetWidth,void 0!==this.__internal.className&&""!==this.__internal.className&&c(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),l("onclose",this),p.splice(p.indexOf(this),1),this.__internal.isOpen=!1,u()),p.length||"0"!==Aa||document.body.removeAttribute("tabindex"),this},closeOthers:function(){return v.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){i(this,m)},this.close()):this.__internal.destroy||i(this,m)),this}}}(),u=function(){function d(a){a.__internal||(a.__internal={position:v.defaults.notifier.position,delay:v.defaults.notifier.delay},l=document.createElement("DIV"),h(a)),l.parentNode!==document.body&&document.body.appendChild(l)}function e(a){a.__internal.pushed=!0,m.push(a)}function f(a){m.splice(m.indexOf(a),1),a.__internal.pushed=!1}function h(a){switch(l.className=n.base,a.__internal.position){case"top-right":b(l,n.top+" "+n.right);break;case"top-left":b(l,n.top+" "+n.left);break;case"top-center":b(l,n.top+" "+n.center);break;case"bottom-left":b(l,n.bottom+" "+n.left);break;case"bottom-center":b(l,n.bottom+" "+n.center);break;default:case"bottom-right":b(l,n.bottom+" "+n.right)}}function i(d,h){function i(a,b){b.__internal.closeButton&&"true"!==a.target.getAttribute("data-close")||b.dismiss(!0)}function m(a,b){r(b.element,s.type,m),l.removeChild(b.element)}function o(a){return a.__internal||(a.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},a.__internal.clickHandler=j(a,i),a.__internal.transitionEndHandler=j(a,m)),a}function p(a){clearTimeout(a.__internal.timer),clearTimeout(a.__internal.transitionTimeout)}return o({element:d,push:function(a,c){if(!this.__internal.pushed){e(this),p(this);var d,f;switch(arguments.length){case 0:f=this.__internal.delay;break;case 1:"number"==typeof a?f=a:(d=a,f=this.__internal.delay);break;case 2:d=a,f=c}return this.__internal.closeButton=v.defaults.notifier.closeButton,void 0!==d&&this.setContent(d),u.__internal.position.indexOf("top")<0?l.appendChild(this.element):l.insertBefore(this.element,l.firstChild),k=this.element.offsetWidth,b(this.element,n.visible),q(this.element,"click",this.__internal.clickHandler),this.delay(f)}return this},ondismiss:function(){},callback:h,dismiss:function(a){return this.__internal.pushed&&(p(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(r(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===l&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,s.supported?1e3:100),c(this.element,n.visible),"function"==typeof this.callback&&this.callback.call(this,a)),f(this))),this},delay:function(a){if(p(this),this.__internal.delay=void 0===a||isNaN(+a)?u.__internal.delay:+a,this.__internal.delay>0){var b=this;this.__internal.timer=setTimeout(function(){b.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(c){if("string"==typeof c?(g(this.element),this.element.innerHTML=c):c instanceof a.HTMLElement&&this.element.firstChild!==c&&(g(this.element),this.element.appendChild(c)),this.__internal.closeButton){var d=document.createElement("span");b(d,n.close),d.setAttribute("data-close",!0),this.element.appendChild(d)}return this},dismissOthers:function(){return u.dismissAll(this),this}})}var k,l,m=[],n={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"};return{setting:function(a,b){if(d(this),void 0===b)return this.__internal[a];switch(a){case"position":this.__internal.position=b,h(this);break;case"delay":this.__internal.delay=b}return this},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},create:function(a,b){d(this);var c=document.createElement("div");return c.className=n.message+("string"==typeof a&&""!==a?" ajs-"+a:""),i(c,b)},dismissAll:function(a){for(var b=m.slice(0),c=0;c<b.length;c+=1){var d=b[c];void 0!==a&&a===d||d.dismiss()}}}}(),v=new m;v.dialog("alert",function(){return{main:function(a,b,c){var d,e,f;switch(arguments.length){case 1:e=a;break;case 2:"function"==typeof b?(e=a,f=b):(d=a,e=b);break;case 3:d=a,e=b,f=c}return this.set("title",d),this.set("message",e),this.set("onok",f),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=c)}},callback:function(a){if("function"==typeof this.get("onok")){var b=this.get("onok").call(this,a);void 0!==b&&(a.cancel=!b)}}}}),v.dialog("confirm",function(){function a(a){null!==c.timer&&(clearInterval(c.timer),c.timer=null,a.__internal.buttons[c.index].element.innerHTML=c.text)}function b(b,d,e){a(b),c.duration=e,c.index=d,c.text=b.__internal.buttons[d].element.innerHTML,c.timer=setInterval(j(b,c.task),1e3),c.task(null,b)}var c={timer:null,index:null,text:null,duration:null,task:function(b,d){if(d.isOpen()){if(d.__internal.buttons[c.index].element.innerHTML=c.text+" (&#8207;"+c.duration+"&#8207;) ",c.duration-=1,-1===c.duration){a(d);var e=d.__internal.buttons[c.index],f=k(c.index,e);"function"==typeof d.callback&&d.callback.apply(d,[f]),!1!==f.close&&d.close()}}else a(d)}};return{main:function(a,b,c,d){var e,f,g,h;switch(arguments.length){case 1:f=a;break;case 2:f=a,g=b;break;case 3:f=a,g=b,h=c;break;case 4:e=a,f=b,g=c,h=d}return this.set("title",e),this.set("message",f),
this.set("onok",g),this.set("oncancel",h),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"labels":"ok"in c&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=c.ok,this.__internal.buttons[0].element.innerHTML=c.ok),"cancel"in c&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=c.cancel,this.__internal.buttons[1].element.innerHTML=c.cancel);break;case"reverseButtons":!0===c?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===c?0:1}},callback:function(b){a(this);var c;switch(b.index){case 0:"function"==typeof this.get("onok")&&void 0!==(c=this.get("onok").call(this,b))&&(b.cancel=!c);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(c=this.get("oncancel").call(this,b))&&(b.cancel=!c)}},autoOk:function(a){return b(this,0,a),this},autoCancel:function(a){return b(this,1,a),this}}}),v.dialog("prompt",function(){var b=document.createElement("INPUT"),c=document.createElement("P");return{main:function(a,b,c,d,e){var f,g,h,i,j;switch(arguments.length){case 1:g=a;break;case 2:g=a,h=b;break;case 3:g=a,h=b,i=c;break;case 4:g=a,h=b,i=c,j=d;break;case 5:f=a,g=b,h=c,i=d,j=e}return this.set("title",f),this.set("message",g),this.set("value",h),this.set("onok",i),this.set("oncancel",j),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:b,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){b.className=v.defaults.theme.input,b.setAttribute("type","text"),b.value=this.get("value"),this.elements.content.appendChild(c),this.elements.content.appendChild(b)},prepare:function(){},setMessage:function(b){"string"==typeof b?(g(c),c.innerHTML=b):b instanceof a.HTMLElement&&c.firstChild!==b&&(g(c),c.appendChild(b))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(a,c,d){switch(a){case"message":this.setMessage(d);break;case"value":b.value=d;break;case"type":switch(d){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":b.type=d;break;default:b.type="text"}break;case"labels":d.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=d.ok),d.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=d.cancel);break;case"reverseButtons":!0===d?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(a){var c;switch(a.index){case 0:this.settings.value=b.value,"function"==typeof this.get("onok")&&void 0!==(c=this.get("onok").call(this,a,this.settings.value))&&(a.cancel=!c);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(c=this.get("oncancel").call(this,a))&&(a.cancel=!c),a.cancel||(b.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=v:"function"==typeof define&&define.amd?define([],function(){return v}):a.alertify||(a.alertify=v)}("undefined"!=typeof window?window:this);





(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'
/*eslint-env browser */

module.exports = {
  /**
   * Create a <style>...</style> tag and add it to the document head
   * @param {string} cssText
   * @param {object?} options
   * @return {Element}
   */
  createStyle: function (cssText, options) {
    var container = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    options = options || {}
    style.type = 'text/css'
    if (options.href) {
      style.setAttribute('data-href', options.href)
    }
    if (style.sheet) { // for jsdom and IE9+
      style.innerHTML = cssText
      style.sheet.cssText = cssText
    }
    else if (style.styleSheet) { // for IE8 and below
      style.styleSheet.cssText = cssText
    }
    else { // for Chrome, Firefox, and Safari
      style.appendChild(document.createTextNode(cssText))
    }
    if (options.prepend) {
      container.insertBefore(style, container.childNodes[0]);
    } else {
      container.appendChild(style);
    }
    return style
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "pinnable": false,
  "maximizable": false,
  "resizable": false,
  "movable": false,

  "notifier": {
    "delay": 3
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "ok": "ajs-ok button is-main-action",
  "cancel": "ajs-cancel button is-default"
}

},{}],4:[function(require,module,exports){
module.exports = function (instance, callbackName) {
  var _callback = instance.get(callbackName);
  var _body = instance.elements.content;

  setTimeout(function () {
    if (_.isFunction(_callback)) {
      _callback(_body, instance);
    }
    else if (_.isFunction(window[_callback])) {
      window[_callback](_body, instance);
    }
  }, 0);

  return;
};
},{}],5:[function(require,module,exports){
module.exports = function (instance) {
  instance.settings = _.clone(instance.__settings);
  instance.setContent('');

  return;
};
},{}],6:[function(require,module,exports){
var closePanel = function (event) {
  var instance = event.data;

  if ($(document).width() >= instance.get('hideAfter')) {
    instance.close();
  }
};

var onCheckResize = function (instance) {
  var _hideAfter = instance.get('hideAfter');

  if (_hideAfter) {
    $(window).on('resize', instance, closePanel);
  }
};

var offCheckResize = function (instance) {
  var _hideAfter = instance.get('hideAfter');

  if (_hideAfter) {
    $(window).off('resize', closePanel);
  }
};

module.exports = {
  closePanel: closePanel,
  onCheckResize: onCheckResize,
  offCheckResize: offCheckResize
};
},{}],7:[function(require,module,exports){
(function (window) {
  var _theme = require('defaults/theme');
  var _defaults = _.get(window, 'Site.alertifyConfig', {});
  var _initDefaults = require('defaults/defaults');

  _.merge(alertify.defaults.theme, _theme);
  _.merge(alertify.defaults, _initDefaults, _defaults);

  window.alertify = alertify;

  require('styles/main.scss');

  require('types/panel')(alertify);
})(window);
},{"defaults/defaults":2,"defaults/theme":3,"styles/main.scss":8,"types/panel":9}],8:[function(require,module,exports){
module.exports.tag = require('scssify').createStyle(".ajs-no-overflow {\n  overflow: hidden !important;\n  outline: none; }\n  .ajs-no-overflow.ajs-fixed {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-y: scroll !important; }\n\n.ajs-no-selection,\n.ajs-no-selection * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.alertify {\n  /*\n  &.ajs-maximized {\n    .ajs-dialog {\n      width: 100% !important;\n      height: 100% !important;\n      max-width: none !important;\n      max-height: 100% !important;\n      margin: 0 auto !important;\n      top: 0 !important;\n      left: 0 !important;\n    }\n  }\n  */\n  /*\n  &.ajs-movable {\n    .ajs-header {\n      cursor: move;\n    }\n  }\n  */\n  /*\n  &.ajs-no-padding {\n    .ajs-body {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n  */\n  /*\n  &.ajs-no-overflow {\n    .ajs-body {\n      overflow: hidden !important;\n    }\n  }\n  */ }\n\n.ajs-dimmer {\n  position: fixed;\n  z-index: 1981;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  background-color: #252525;\n  opacity: 0.5; }\n  .ajs-hidden .ajs-dimmer {\n    visibility: hidden;\n    opacity: 0; }\n  .ajs-modeless .ajs-dimmer {\n    display: none; }\n\n.ajs-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n  overflow-y: auto;\n  z-index: 1981;\n  min-width: 320px; }\n  .ajs-maximized .ajs-modal {\n    margin: 0 !important;\n    position: fixed !important; }\n  .ajs-hidden .ajs-modal {\n    visibility: hidden;\n    opacity: 0; }\n  .ajs-modeless .ajs-modal {\n    position: fixed;\n    min-height: 100%;\n    max-height: none;\n    margin: 0; }\n  .ajs-modeless.ajs-unpinned .ajs-modal {\n    position: absolute; }\n\n.ajs-dialog {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 2rem auto;\n  max-width: 500px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  outline: 0;\n  background-color: #fff; }\n  @media (max-width: 640px) {\n    .ajs-dialog {\n      width: 100% !important;\n      max-width: none !important;\n      min-height: 100% !important;\n      margin: 0 auto !important;\n      top: 0 !important;\n      left: 0 !important; } }\n  .ajs-dialog.ajs-capture:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    z-index: 1; }\n  .ajs-maximized .ajs-dialog {\n    width: 100% !important;\n    height: 100% !important;\n    max-width: none !important;\n    max-height: 100% !important;\n    margin: 0 auto !important;\n    top: 0 !important;\n    left: 0 !important; }\n\n.ajs-panel {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  outline: 0;\n  background-color: #fff; }\n  .ajs-panel.at-left-position {\n    width: 270px;\n    top: 0;\n    left: 0;\n    bottom: 0; }\n  .ajs-panel.at-right-position {\n    width: 270px;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n  .ajs-panel.at-top-position {\n    top: 0;\n    left: 0;\n    right: 0; }\n  .ajs-panel.at-bottom-position {\n    right: 0;\n    left: 0;\n    bottom: 0; }\n  .ajs-panel .ajs-body {\n    min-height: 0;\n    margin: 0;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    overflow-y: auto !important; }\n  .ajs-panel .ajs-close {\n    display: none !important; }\n\n.ajs-reset {\n  position: absolute !important;\n  display: inline !important;\n  width: 0 !important;\n  height: 0 !important;\n  opacity: 0 !important; }\n  .ajs-modeless .ajs-reset {\n    display: none; }\n\n.ajs-commands {\n  position: absolute;\n  right: 0;\n  z-index: 2; }\n  .ajs-commands button {\n    display: none;\n    border: none;\n    width: 2rem;\n    height: 2rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer; }\n\n.ajs-close {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAh0lEQVQYlY2QsQ0EIQwEB9cBAR1CJUaI/gigDnwR6NBL/7/xWLNrZ2b8EwGotVpr7eOitWa1VjugiNB7R1UPrKrWe0dEAHBbXUqxMQbeewDmnHjvyTm7C3zDwAUd9c63YQdUVdu6EAJzzquz7HXvTiklt+H9DQFYaxFjvDqllFyMkbXWvfpXHjJrWFgdBq/hAAAAAElFTkSuQmCC\"); }\n  .ajs-closable .ajs-close {\n    display: inline-block; }\n\n.ajs-maximize {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAOUlEQVQYlWP8//8/AzGAhYGBgaG4uBiv6t7eXkYmooxjYGAgWiELsvHYFMCcRX2rSXcjoSBiJDbAAeD+EGu+8BZcAAAAAElFTkSuQmCC\"); }\n  .ajs-maximizable .ajs-maximize {\n    display: inline-block; }\n  .ajs-maximized .ajs-maximize {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAASklEQVQYlZWQ0QkAMQhDtXRincOZX78KVtrDCwgqJNEoIB3MPLj7lRUROlpyVXGzby6zWuY+kz6tj5sBMTMAyVV3/595RbOh3cAXsww1raeiOcoAAAAASUVORK5CYII=\"); }\n\n.ajs-pin {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQklEQVQYlcWPMQ4AIAwCqU9u38GbcbHRWN1MvKQDhQFMEpKImGJA0gCgnYw0V0rwxseg5erT4oSkQVI5d9f+e9+xA0NbLpWfitPXAAAAAElFTkSuQmCC\"); }\n  .ajs-pinnable .ajs-pin {\n    display: inline-block; }\n  .ajs-unpinned .ajs-pin {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAO0lEQVQYlWP8//8/AzGAiShV6AqLi4txGs+CLoBLMYbC3t5eRmyaWfBZhwwYkX2NTxPRvibKjRhW4wMAhxkYGbLu3pEAAAAASUVORK5CYII=\"); }\n\n.ajs-button {\n  padding: 0.4rem;\n  border: none;\n  margin: 0.4rem;\n  background-color: transparent;\n  cursor: pointer; }\n\n.ajs-primary {\n  margin: -0.4rem;\n  text-align: right; }\n\n.ajs-auxiliary {\n  margin: -0.4rem;\n  float: left;\n  text-align: left; }\n\n.ajs-handle {\n  position: absolute;\n  display: none;\n  width: 10px;\n  height: 10px;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMS8xNEDQYmMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQ0lEQVQYlaXNMQoAIAxD0dT7H657l0KX3iJuUlBUNOsPPCGJm7VDp6ryeMxMuDsAQH7owW3pyn3RS26iKxERMLN3ugOaAkaL3sWVigAAAABJRU5ErkJggg==\");\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  cursor: se-resize; }\n  .ajs-resizable .ajs-handle {\n    display: block; }\n\n.ajs-header {\n  padding: 1rem;\n  margin-bottom: 1rem;\n  margin-right: 6rem;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  line-height: 2rem;\n  font-size: 1.6rem; }\n  .ajs-movable .ajs-header {\n    cursor: move; }\n  .ajs-frameless .ajs-header {\n    display: none; }\n\n.ajs-body {\n  min-height: 10rem;\n  padding: 0 1rem;\n  margin: 1rem 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  overflow-y: auto;\n  overflow-x: hidden; }\n  .ajs-no-padding .ajs-body {\n    padding-left: 0;\n    padding-right: 0; }\n  .ajs-no-overflow .ajs-body {\n    overflow: hidden; }\n  .ajs-frameless .ajs-body {\n    margin-top: 2rem; }\n\n.ajs-footer {\n  padding: 1rem;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n  .ajs-frameless .ajs-footer {\n    display: none; }\n\n.ajs-message {\n  position: relative;\n  width: 260px;\n  max-height: 0;\n  padding: 0;\n  opacity: 0;\n  margin: 0; }\n  .ajs-message.ajs-visible {\n    opacity: 1;\n    max-height: 100%;\n    padding: 15px;\n    margin-top: 10px; }\n  .ajs-message.ajs-success {\n    background: rgba(91, 189, 114, 0.95); }\n  .ajs-message.ajs-error {\n    background: rgba(217, 92, 92, 0.95); }\n  .ajs-message.ajs-warning {\n    background: rgba(252, 248, 215, 0.95); }\n  .ajs-message.ajs-info {\n    background: rgba(91, 189, 114, 0.95); }\n\n/*# sourceMappingURL=to.css.map */", {"href":false,"prepend":true});
},{"scssify":1}],9:[function(require,module,exports){
var winControl = require('helpers/window-control');

var callCalback = require('helpers/callbacks');
var destroy = require('helpers/destroy');

var _defaultSettings = _.clone(require('./settings'));

var Panel = {
  main: function (params) {
    var _params = _.merge({},
      _defaultSettings,
      params
    );

    this.setting(_params);
  },

  setup: function () {
    return require('./setup')();
  },

  settings: require('./settings'),

  prepare: function () {
    callCalback(this, 'onOpen');
  },

  build: function () {
    $(this.elements.root).addClass('ajs-panel-placeholder');
    $(this.elements.dialog)
      .removeClass('ajs-dialog')
      .addClass('ajs-panel');
    $(this.elements.header).hide();
    $(this.elements.footer).hide();
    $(this.elements.commands).hide();
  },

  settingUpdated: function (key, oldValue, newValue) {
    switch (key) {
      case 'position':
      case 'classes':
        $(this.elements.dialog)
          .removeClass('at-' + oldValue + '-position')
          .addClass('at-' + newValue + '-position');
        break;
      case 'target':
        this.setContent($(newValue).clone()[0]);
        break;
    }
  },

  hooks: {
    onshow: function () {
      winControl.onCheckResize(this);
    },
    onclose: function () {
      destroy(this);
      winControl.offCheckResize(this);
    }
  }
};

module.exports = function (alertify) {
  alertify.dialog('panel', function factory () {
    return Panel;
  });
};
},{"./settings":10,"./setup":11,"helpers/callbacks":4,"helpers/destroy":5,"helpers/window-control":6}],10:[function(require,module,exports){
module.exports={
  "target": null,
  "panel": null,
  "position": null,
  "hideAfter": 764,
  "onOpen": null
}

},{}],11:[function(require,module,exports){
module.exports = function () {
  return {
    options: {
      title: null,
      modal: true,
      movable: false,
      resizable: false,
      maximizable: false,
      pinnable: false,
      closable: true
    }
  };
};
},{}]},{},[7]);
// ==================================================
// fancyBox v3.5.6
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),
n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.6",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/*!
 * InSalesFeedback v0.15.9
 * https://github.com/VladimirIvanin/InSalesFeedback
 * Vladimir Ivanin
 * 2019
 */

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var parseSerialize=require("./helpers").parseSerialize,getFailerrors=require("./helpers").getFailerrors,getDataAttrName=require("./helpers").getDataAttrName,checkAgree=require("./validate").checkAgree,system=require("../variables").system;function binding(){var e=this,s=e.options,n=e.$element,a=n.find(getDataAttrName(s.selectors.submit)),t=n.find(getDataAttrName(s.selectors.agree));function r(e){0==a.length&&(console.warn("Отсутствует кнопка отправления формы."),a=n.find('[type="submit"]')),e?(a.removeClass(s.classes.disabledButton).prop("disabled",!1).removeAttr("disabled","disabled"),t.removeClass(s.classes.errorAgree)):(a.addClass(s.classes.disabledButton).prop("disabled",!0).attr("disabled","disabled"),t.addClass(s.classes.errorAgree))}n.on("submit",function(s){e.eventMachine("before",n,{}),s.preventDefault();var a=e.options.selectors.agree,t=checkAgree(n,a,e.options.useAgree,e.options.errorMessages),r=parseSerialize(serialize(n.get(0))),o=e.options.customValidate;if(!t)return e.eventMachine("notagree",n,r),void e.eventMachine("after",n,r);o&&"function"==typeof o?o(n,r,e)?e.validateFormData(r).done(function(s){e.sendMessage(s).done(function(s){s.formData=r,e.eventMachine("success",n,s),e.eventMachine("after",n,r)}).fail(function(s){var a=getFailerrors(s);e.errorRender(a),e.eventMachine("fail",n,s),e.eventMachine("after",n,r)})}).fail(function(s){e.errorRender(s),e.eventMachine("error",n,s),e.eventMachine("after",n,r)}):(e.eventMachine("error",n,r),e.eventMachine("after",n,r)):e.validateFormData(r).done(function(s){e.sendMessage(s).done(function(s){s.formData=r,e.eventMachine("success",n,s),e.eventMachine("after",n,r)}).fail(function(s){var a=getFailerrors(s);e.errorRender(a),e.eventMachine("fail",n,s),e.eventMachine("after",n,r)})}).fail(function(s){e.errorRender(s),e.eventMachine("error",n,s),e.eventMachine("after",n,r)})}),t.click(function(a){var t=$(this).prop("checked");if(e.eventMachine("before",n,{}),t){var o=parseSerialize(n.serialize());e.eventMachine("agree",n,o),e.eventMachine("after",n,o),e.successRender(!0),r(!0)}else s.showMessageAgree&&e.errorRender([{name:"agree",errorMessage:e.options.errorMessages.agree}]),r(!1)}),$(document).on(system.events.success,function(s){e.UUID==s.InSalesFeedback.$target[0].InSalesFeedbackUUID&&(e.options.resetFormOnSubmit&&n.trigger("reset"),e.successRender())}),$(document).on(system.events.notagree,function(n){e.UUID==n.InSalesFeedback.$target[0].InSalesFeedbackUUID&&(s.showMessageAgree&&e.errorRender([{name:"agree",errorMessage:e.options.errorMessages.agree}]),r(!1))})}function serialize(e){if(e&&"FORM"===e.nodeName){var s,n,a=[];for(s=e.elements.length-1;s>=0;s-=1)if(""!==e.elements[s].name)switch(e.elements[s].nodeName){case"INPUT":switch(e.elements[s].type){case"text":case"tel":case"email":case"hidden":case"password":case"button":case"reset":case"submit":a.push(e.elements[s].name+"="+encodeURIComponent(e.elements[s].value));break;case"checkbox":case"radio":e.elements[s].checked&&a.push(e.elements[s].name+"="+encodeURIComponent(e.elements[s].value))}break;case"file":break;case"TEXTAREA":a.push(e.elements[s].name+"="+encodeURIComponent(e.elements[s].value));break;case"SELECT":switch(e.elements[s].type){case"select-one":a.push(e.elements[s].name+"="+encodeURIComponent(e.elements[s].value));break;case"select-multiple":for(n=e.elements[s].options.length-1;n>=0;n-=1)e.elements[s].options[n].selected&&a.push(e.elements[s].name+"="+encodeURIComponent(e.elements[s].options[n].value))}break;case"BUTTON":switch(e.elements[s].type){case"reset":case"submit":case"button":a.push(e.elements[s].name+"="+encodeURIComponent(e.elements[s].value))}}return a.join("&")}}module.exports=binding;
},{"../variables":10,"./helpers":3,"./validate":8}],2:[function(require,module,exports){
var system=require("../variables").system;function eventMachine(e,t,n){var i=getMethodName(e),s=getEventName(e),a={};a.$target=t,a[e]=n||{},"object"==typeof EventBus&&EventBus.publish&&EventBus.publish(s,a);var o=jQuery.Event(s);o.InSalesFeedback=a,$(document).trigger(o),this.options[i]&&"function"==typeof this.options[i]&&this.options[i](a)}function getEventName(e){return system.events[e]}function getMethodName(e){return"on"+capitalize(e)}var capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};module.exports=eventMachine;
},{"../variables":10}],3:[function(require,module,exports){
function parseSerialize(e){if(""==e)return{};var t={},r=decodeURI(e).replace("?","").split("&"),n=new RegExp(/(([A-Za-z0-9])+)+/g);return $.each(r,function(e,r){if(""!==(r=(r=r.replace(/^feedback\[/g,"")).replace("]=","="))){(r=r.split("="))[1]=r[1].replace(/%(?!\d+)/g,"%25");var a,i=r[0].match(n),x=i[0];if(r[0].indexOf("[]")>-1)t[x]||(t[x]=[]),t[x].push(r[1]);else if(r[0].indexOf("[")>-1)x=r[0],t[i[0]]||(t[i[0]]=[]),t[i[0]][i[1]]||(t[i[0]][i[1]]=[]),"undefined"===(a=decodeURIComponent(r[1]))&&(a=""),t[i[0]][i[1]].push(a);else"undefined"===(a=decodeURIComponent(r[1]))&&(a=""),t[r[0]]=a}}),t}function getPageLink(){return'<a href="'+window.location.href+'">'+$("title").text()+"</a>"}function testRequire(e,t){return t.indexOf(e)>-1}function getPhoneNumberLength(e){e=e?decodeURIComponent(e.replace(/%(?!\d+)/g,"%25")):"";var t=new RegExp(/[\d]/g),r=e.match(t);return r||(r=[]),r.length}function emailTest(e){var t=e||"";return new RegExp(/.+@.+\..+/g).test(t)}function generateUUID(){var e=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)})}function getFailerrors(e){var t=[];return e.errors&&$.each(e.errors,function(e,r){t.push({name:e,errorMessage:r[0]||""})}),t}function getDataAttrName(e,t){return"["+(t?e+'="'+t+'"':e)+"]"}module.exports={parseSerialize:parseSerialize,testRequire:testRequire,generateUUID:generateUUID,emailTest:emailTest,getFailerrors:getFailerrors,getPhoneNumberLength:getPhoneNumberLength,getDataAttrName:getDataAttrName,getPageLink:getPageLink};
},{}],4:[function(require,module,exports){
var defaults=require("../variables").defaults,binding=require("./binding"),eventMachine=require("./eventMachine"),sendMessage=require("./sendMessage"),errorRender=require("./render").errorRender,successRender=require("./render").successRender,checkProduct=require("./validate").checkProduct,checkNameContent=require("./validate").checkNameContent,validateFormData=require("./validate").validateFormData,generateUUID=require("./helpers").generateUUID,Feedback=function(e,t){this.$element=$(e);var r=generateUUID();return this.UUID=r,this.$element[0].InSalesFeedbackUUID=r,this.options=$.extend(!0,{},defaults,t),this.initBinding=binding,this.sendMessage=sendMessage,this.eventMachine=eventMachine,this.validateFormData=validateFormData,this.errorRender=errorRender,this.successRender=successRender,this.initFeedback(),this};Feedback.prototype.initFeedback=function(e,t){this.isPageProduct=checkProduct(),this.initBinding(),this.options.useDefaultContent||checkNameContent(this.$element)},module.exports=Feedback;
},{"../variables":10,"./binding":1,"./eventMachine":2,"./helpers":3,"./render":5,"./sendMessage":6,"./validate":8}],5:[function(require,module,exports){
var getDataAttrName=require("./helpers").getDataAttrName,system=require("../variables").system;function errorRender(e){var s=this,t=s.options.useJqueryToggle,r=getDataAttrName(s.options.selectors.field)+":first",n=getDataAttrName(s.options.selectors.inputError),o=getDataAttrName(s.options.selectors.error),i=getDataAttrName(s.options.selectors.errors),a=s.options.classes.errorInput,l=s.options.classes.errorField;function d(e,r,n){e.removeClass(a),r.removeClass(l),renderWithOptions(n,"","",!1,t),renderWithOptions(s.$element.find(o),"","",!1,t),renderWithOptions(s.$element.find(i),"","",!1,t)}$.each(e,function(e,o){var i=s.$element.find('[name="'+o.name+'"]'),m=i.parents(r),c=m.find(n);i.addClass(a),m.addClass(l),renderWithOptions(c,o.errorMessage,"",!0,t),s.options.hideErrorOnFocus&&i.on("click",function(e){d(i,m,c)})});var m=[];if($.each(e,function(e,s){m.push(s.name)}),$.each(system.names,function(e,t){if(-1==m.indexOf(t)){var o=s.$element.find('[name="'+t+'"]'),i=o.parents(r);d(o,i,i.find(n))}}),e&&e.length){s.$element.addClass(s.options.classes.errorForm),renderWithOptions(s.$element.find(o),s.options.messages.error,"",!0,t);var c="";_.forEach(e,function(e){c+=e.errorMessage+"<br />"}),renderWithOptions(s.$element.find(i),c,"",!0,t)}}function successRender(e){var s=this.$element,t=this.options.useJqueryToggle,r=this.options.hideSuccessMessageTimer,n=this.options.classes.errorInput,o=this.options.classes.errorField,i=getDataAttrName(this.options.selectors.field),a=getDataAttrName(this.options.selectors.inputError),l=getDataAttrName(this.options.selectors.error),d=getDataAttrName(this.options.selectors.errors),m=getDataAttrName(this.options.selectors.success);(this.$element.find("[name]").removeClass(n),this.$element.find(i).removeClass(o),this.$element.removeClass(this.options.classes.errorForm),renderWithOptions(s.find(l),"","",!1,t),renderWithOptions(s.find(d),"","",!1,t),renderWithOptions(s.find(a),"","",!1,t),e)||renderWithOptions(s.find(m),this.options.messages.success,"",!0,t,r)}function renderWithOptions(e,s,t,r,n,o){s&&e.html(s),r?e.addClass(t):e.removeClass(t),n&&(r?e.show():e.hide()),o&&setTimeout(function(){e.removeClass(t),e.html(""),n&&e.hide()},o)}module.exports={errorRender:errorRender,successRender:successRender};
},{"../variables":10,"./helpers":3}],6:[function(require,module,exports){
var parseSerialize=require("./helpers").parseSerialize;function sendMessage(e){var a=$.Deferred(),r={lang:parseSerialize(window.location.search).lang||"",feedback:e};return $.post("/client_account/feedback.json",$.param(r)).done(function(e){r&&"ok"==e.status?a.resolve(e):(e.message=r,a.reject(e))}),a.promise()}module.exports=sendMessage;
},{"./helpers":3}],7:[function(require,module,exports){
var getPageLink=require("./helpers").getPageLink,defaults=require("../variables").defaults;function updateContentData(t,e,n){var o=$.Deferred(),a=e||"";return a=getCustomContent(t,a),a=getContentHtml(t,a),t.isPageProduct&&t.options.includeProductInfo&&!n?$.ajax({url:window.location.pathname+".json",type:"GET",dataType:"json"}).done(function(e){e&&e.product?(t.options.messageContent&&(a=updateContentTop(a,t.options.messageContent)),a=getProductInfo(e.product,a),t.options.urlPageOnContent&&(a=updateContentFooter(a)),o.resolve(a)):(t.options.urlPageOnContent&&(a=updateContentFooter(a)),o.resolve(a))}).fail(function(){t.options.urlPageOnContent&&(a=updateContentFooter(a)),o.resolve(a)}):t.options.urlPageOnContent&&(a=updateContentFooter(a)),t.isPageProduct&&t.options.includeProductInfo&&!n||o.resolve(a),o.promise()}function getProductInfo(t,e){var n='<div><a href="'+t.url+'">';return t.first_image&&(n+='<img src="'+t.first_image.medium_url+'" />'),n+="</a></div>",n+=getRow(defaults.messages.product,t.title),t.sku&&(n+=getRow(defaults.messages.sku,t.sku)),e+n}function getRow(t,e){return $("<div>").append($("<div>").append($("<strong>",{text:e?t+": ":t})).append($("<span>",{text:e||""}))).html()}function getContentHtml(t,e){var n=e;return t.$element.find("["+t.options.selectors.html+"]").each(function(t,e){n+=$(e).html()}),n}function getCustomContent(t,e){var n=e;return t.$element.find("["+t.options.selectors.customContent+"]").each(function(e,o){var a=$(o).data(t.options.selectors.customContent.replace("data-","")),r=$(o).val();r||(r=$(o).html()),""===r&&(r=defaults.messages.default_value),$(o).is('[type="radio"]')||$(o).is('[type="checkbox"]')?$(o).is(":checked")&&($(o).is("[value]")||(r="✓"),$(o).is("[data-hide-checkbox-value]")?n+=getRow(a,!1):n+=getRow(a,r)):n+=getRow(a,r)}),n}function updateContentTop(t,e){return t+("<br />"+e+"<br />")}function updateContentFooter(t){return t+("<br /> "+defaults.messages.send_from+": "+getPageLink())}module.exports=updateContentData;
},{"../variables":10,"./helpers":3}],8:[function(require,module,exports){
var system=require("../variables").system,updateContentData=require("./updateContentData"),testRequire=require("./helpers").testRequire,emailTest=require("./helpers").emailTest,getPhoneNumberLength=require("./helpers").getPhoneNumberLength;function checkDuplicateId(e){var r=!1,t=e.get(0);t.id&&($('[id="'+t.id+'"]').length>1&&(r=!0,console.warn("Внимание! Задвоенный идентификатор - #"+t.id+". Форма может некорректно отправляться.")));return r}function checkProduct(){return window.location.pathname.indexOf("/product/")>-1}function validateFormData(e){var r=this,t=$.Deferred(),a=[],n=r.options.require,o=e,s=testRequire("from",n),u=validateFrom(o.from,s,r.options.errorMessages.from);o.from=u.value,u.isError&&a.push({name:"from",errorMessage:u.errorMessage});var i=testRequire("phone",n),c=validatePhone(o.phone,i,r.options.phoneNumberLength,r.options.errorMessages.phone);o.phone=c.value,i||""!==c.value||delete o.phone,c.isError&&a.push({name:"phone",errorMessage:c.errorMessage});var l=testRequire("name",n),v=validateName(o.name,l,r.options.errorMessages.name);o.name=v.value,l||""!==v.value||delete o.name,v.isError&&a.push({name:"name",errorMessage:v.errorMessage});var d=testRequire("subject",n),h=validateSubject(o.subject,d,r.options.errorMessages.subject);if(o.subject=h.value,h.isError&&a.push({name:"subject",errorMessage:h.errorMessage}),r.options.useDefaultContent||o.content)updateContentData(r,o.content,a.length>0).done(function(e){o.content=e;var n=validateContent(o.content,!r.options.useDefaultContent);o.content=n.value,n.isError&&a.push({name:"content",errorMessage:n.errorMessage}),a.length>0?t.reject(a):t.resolve(o)});else{var m=validateContent(o.content,!r.options.useDefaultContent,r.options.errorMessages.content);o.content=m.value,m.isError&&a.push({name:"content",errorMessage:m.errorMessage}),a.length>0?t.reject(a):t.resolve(o)}return t.promise()}function validatePhone(e,r,t,a){e||(e="");var n={isError:!1,errorMessage:a,value:decodeURIComponent(e.replace(/%(?!\d+)/g,"%25"))};(e=decodeURIComponent(e.replace(/%(?!\d+)/g,"%25")),!r&&e&&""==e||!r&&!e)?n.value=system.dataDefault.phone:r&&(e&&""!=e?t>getPhoneNumberLength(e)&&(n.isError=!0):n.isError=!0);return n}function validateFrom(e,r,t){e||(e="");var a={isError:!1,errorMessage:t,value:e};if(!r&&e&&""==e||!r&&!e){var n=window.location.host;-1==n.indexOf(".")&&(n="myinsales.ru"),a.value="shop@"+n}else e&&""!=e&&emailTest(e)||(a.isError=!0);return a}function validateName(e,r,t){e||(e="");var a={isError:!1,errorMessage:t,value:e};return!r&&e&&""==e||!r&&!e?a.value=system.dataDefault.name:e&&""!=e||(a.isError=!0),a}function validateSubject(e,r,t){e||(e="");var a={isError:!1,errorMessage:t,value:e};return!r&&e&&""==e||!r&&!e?a.value=system.dataDefault.subject:e&&""!=e||(a.isError=!0),a}function validateContent(e,r,t){var a={isError:!1,errorMessage:t,value:e},n=e.trim();return e&&""!=n?(!r&&e&&""==n||!r&&!e)&&(a.value=system.dataDefault.content):(a.isError=!0,a.value=""),a}function checkNameContent(e){0==e.find('[name="content"]').length&&console.warn("В форме отсутствует поле content",e)}function checkAgree(e,r,t,a){var n=!0;if(t){var o=e.find("["+r+"]");0!=o.length&&o.prop("checked")||(n=!1),0==o.length&&console.warn("Отсутствует чекбокс согласия на обработку персональных данных")}return n}module.exports={checkDuplicateId:checkDuplicateId,checkProduct:checkProduct,checkAgree:checkAgree,checkNameContent:checkNameContent,validateFormData:validateFormData};
},{"../variables":10,"./helpers":3,"./updateContentData":7}],9:[function(require,module,exports){
var Feedback=require("feedback"),system=require("variables").system,checkDuplicateId=require("./feedback/validate").checkDuplicateId;!function(e,a,t){var n=e.fn.InSalesFeedback;e.fn.InSalesFeedback=function(a){return this.each(function(t){var n=e(this),c="object"==typeof a&&a,s=n.data(system.NAME);(s||"destroy"!==a)&&(s||n.data(system.NAME,s=new Feedback(n,c)),"string"==typeof a&&s[a]())})},e.fn.InSalesFeedback.defaults=require("variables").defaults,e.fn.InSalesFeedback.noConflict=function(){return e.fn.InSalesFeedback=n,this}}(jQuery,window);
},{"./feedback/validate":8,"feedback":4,"variables":10}],10:[function(require,module,exports){
var defaults={useAgree:!1,showMessageAgree:!1,includeProductInfo:!0,messageContent:null,urlPageOnContent:!0,useJqueryToggle:!0,hideSuccessMessageTimer:5e3,hideErrorOnFocus:!0,resetFormOnSubmit:!0,useDefaultContent:!0,phoneNumberLength:11,require:[],onSuccess:function(){},onFail:function(){},onError:function(){},onBefore:function(){},onAfter:function(){},onAgree:function(){},onNotagree:function(){},customValidate:null,classes:{errorInput:"is-error-feedback-input",errorField:"is-error-feedback-field",errorForm:"is-error-feedback",errorAgree:"is-error-agree-feedback",disabledButton:"is-disabled-feedback",failForm:"is-fail-feedback"},errorMessages:{from:"Поле e-mail имеет неверное значение",phone:"Укажите номер в международном формате",name:"Не заполнено поле имя",subject:"Не заполнено поле тема сообщения",agree:"Необходимо принять условия передачи информации",content:"Не заполнено поле текст сообщения"},messages:{send_from:"Отправлено со страницы",product:"Продукт",sku:"Артикул",default_value:"Не заполнено",success:"Сообщение успешно отправлено!",fail:"Сообщение не отправлено, попробуйте ещё раз!",error:"Неверно заполнены поля!"},selectors:{html:"data-feedback-html",customContent:"data-feedback-custom-content",submit:"data-feedback-submit",agree:"data-feedback-agree",field:"data-feedback-field",input:"data-feedback-input",inputError:"data-feedback-input-error",success:"data-feedback-success",error:"data-feedback-error",errors:"data-feedback-errors"}},system={NAME:"InSalesFeedback",VERSION:"0.14.2",NAMESPACE:".InSalesFeedback",names:{from:"from",name:"name",phone:"phone",subject:"subject",content:"content"},dataDefault:{from:"shop@myinsales.ru",name:"",phone:"",subject:"Заказ обратного звонка.",content:"Заказ обратного звонка."},events:{before:"before::feedback",after:"after::feedback",success:"success::feedback",fail:"fail::feedback",agree:"agree::feedback",notagree:"notagree::feedback",error:"error::feedback"}};module.exports={defaults:defaults,system:system};
},{}]},{},[9]);
/*!
 * VariantsModifier v0.5.8
 * https://github.com/VladimirIvanin/VariantsModifier
 * Vladimir Ivanin
 * 2018
 */

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var initElements=require("./initElements"),renderPrice=require("./render").renderPrice,renderOldPrice=require("./render").renderOldPrice,renderAvailable=require("./render").renderAvailable,renderSku=require("./render").renderSku,renderQuantity=require("./render").renderQuantity,renderImage=require("./render").renderImage,getDataParam=require("./getDataParam"),updateProductGallery=require("./productGallery").updateProductGallery;function Modifier(e,r,t){this.options=$.extend(!0,{},{},r),this.$form=e,this.productInstance=t.productInstance,this.productJSON=t.productJSON,this.initElements=initElements,this.renderPrice=renderPrice,this.renderOldPrice=renderOldPrice,this.renderAvailable=renderAvailable,this.renderSku=renderSku,this.renderQuantity=renderQuantity,this.renderImage=renderImage,this.getDataParam=getDataParam,this.updateProductGallery=updateProductGallery,this.isInitImage=!1,r.initVariantImage&&(this.isInitImage=!0),this.getDataParam(),this.initElements()}Modifier.prototype.updateVariant=function(e,r){var t=e.action.product?e.action.product[0]:null;this.updateOption(e),this.activeImage=e.first_image.filename,this.renderPrice(e),this.renderOldPrice(e),this.renderAvailable(e),this.renderSku(e),this.renderQuantity(e),r||(this.renderImage(e),this.updateProductGallery(this.$productGallery,e)),this.options.updateVariant(e,t)},Modifier.prototype.updateOption=function(e){$.each(e.option_values,function(r,t){e.action&&e.action.productJSON&&e.action.productJSON.option_names&&$.each(e.action.productJSON.option_names,function(e,r){t.option_name_id==r.id&&(t.option_name=r)})})},module.exports=Modifier;
},{"./getDataParam":2,"./initElements":6,"./productGallery":7,"./render":8}],2:[function(require,module,exports){
function getDataParam(){var a=this.options,t=this.$form,o=a.dataParam;$.each(o,function(o,r){var e=t.data(r);e&&(a[o]=e)})}module.exports=getDataParam;
},{}],3:[function(require,module,exports){
function getQuantityMessage(t,a,n){var e=n||this.options,s=e.templates,i=e.classes,u=s.quantityAlot,l=i.quantityAlot,o=[];return $.each(i,function(t,a){t.indexOf("quantity")>-1&&o.push(a)}),t<=e.quantityEnds&&(u=s.quantityEnds,l=i.quantityEnds),a?null===t&&"object"==typeof t&&(u=s[e.quantityNull],l=i[e.quantityNull]):(u=s.quantityNotAvailable,l=i.quantityNotAvailable),{activeClass:l,message:u,classes:o.join(" ")}}module.exports=getQuantityMessage;
},{}],4:[function(require,module,exports){
var defaults=require("../variables").defaults,init=require("./init"),setVariantByImage=require("./setVariantByImage"),getQuantityMessage=require("./getQuantityMessage"),VariantsModifier=function(t){return this.options=$.extend(!0,{},defaults,t),this.init=init,this.setVariantByImage=setVariantByImage,this.getQuantityMessage=getQuantityMessage,EventBus?this.init():console.warn("Не подключен common.js"),this};module.exports=VariantsModifier;
},{"../variables":11,"./getQuantityMessage":3,"./init":5,"./setVariantByImage":9}],5:[function(require,module,exports){
var Modifier=require("./Modifier");function init(){var i=this;EventBus.subscribe("update_variant:insales:product",function(t){var a=t.action.product?t.action.product[0]:null;if(a&&!a.instanceVariantsModifier&&(a.instanceVariantsModifier=new Modifier($(a),i.options,t.action)),a&&a.instanceVariantsModifier){var n=t.action.quantityState.change||t.action.quantityState.less;a.instanceVariantsModifier.updateVariant(t,n)}})}module.exports=init;
},{"./Modifier":1}],6:[function(require,module,exports){
function initElements(){var i=this.$form,t=this.options.selectors;this.$price=i.find(t.price),this.$oldPrice=i.find(t.oldPrice),this.$sku=i.find(t.sku),this.$quantity=i.find(t.quantity),this.$available=i.find(t.available),this.options.productGallery&&(this.$productGallery=$(this.options.productGallery))}module.exports=initElements;
},{}],7:[function(require,module,exports){
var setVariantByImage=require("./setVariantByImage"),updateProductGallery=function(a,e){var i=this;if(a){var s=[{name:"swiper",method:"slideTo",onUpdate:"onTransitionEnd",onUpdateCallback:function(a){i._gallery&&setVariantByImage({$form:i.$form,src:$(a.slides[a.activeIndex]).find("img").attr("src")})},slideClass:".swiper-slide",activeClass:"swiper-slide-active"},{name:"slick",method:"slickGoTo",onUpdate:"afterChange",onUpdateCallback:function(a,e,s){setVariantByImage({$form:i.$form,src:$(e.$slides[s]).find("img").attr("src")})},slideClass:".slick-slide",activeClass:"slick-current"}];if(!i._updateGallery)for(var l=0;l<s.length;l++){var t=(d=s[l]).name;if((n=!(!a[0]||void 0===a[0][t]||!a[0][t])&&a[0][t])&&n[d.method]){var r=a.find(d.slideClass+' [src*="'+i.activeImage+'"]').parents(d.slideClass+":first").index();i._slider=d,i._gallery=n,i._updateGallery=n[d.method],l=s.length}}if(i._updateGallery){var d=i._slider,n=i._gallery,o=a.find(d.slideClass+' [src*="'+i.activeImage+'"]').parents(d.slideClass+":first");(r=o.index())>-1&&i.isInitImage&&!o.is(d.activeClass)&&e.image_id&&i._updateGallery&&i._gallery[i._slider.method](r),i.isInitImage=!0,!i._isInitCallback&&i.options.updateVariantFromSlider&&(n.on(d.onUpdate,d.onUpdateCallback),i._isInitCallback=!0)}}};module.exports={updateProductGallery:updateProductGallery};
},{"./setVariantByImage":9}],8:[function(require,module,exports){
var setVariantByImage=require("./setVariantByImage"),getQuantityMessage=require("./getQuantityMessage");function renderQuantity(e){var t=e.quantity,a=this.options,i=getQuantityMessage(t,e.available,a),s=i.message,r=i.activeClass,l=i.classes,o=this.$quantity;if(!a.checkQuantityVariant){var n=a.templates,u=a.classes,d=0;$.each(this.productJSON.variants,function(e,t){t.quantity&&(d+=t.quantity)}),(t=d)<=a.quantityEnds&&(s=n.quantityEnds,r=u.quantityEnds),this.productJSON.available?0===t&&(s=n[a.quantityNull],r=u[a.quantityNull]):(s=n.quantityNotAvailable,r=u.quantityNotAvailable)}var m=getTemplate(s,"");o.removeClass(l),o.html(m).addClass(r)}function renderPrice(e){var t=this.$price,a=this.options.templates,i=e.action&&e.action.price?e.action.price:e.price,s=Shop.money.format(i),r=getTemplate(a.price,s);t.html(r),this.options.updatePrice(e,this.$form)}function renderOldPrice(e){var t=this.$form,a=this.$oldPrice,i=(Shop.money.format(e.old_price||e.price),this.options),s=i.classes,r=i.templates,l=Shop.money.format(e.old_price),o=getTemplate(r.oldPrice,l),n=getTemplate(r.emptyOldPrice,l);e.old_price?(a.html(o),t.addClass(s.withOldPrice),t.removeClass(s.withoutOldPrice),i.useToggleOldPrice&&a.show()):(a.html(n),t.addClass(s.withoutOldPrice),t.removeClass(s.withOldPrice),i.useToggleOldPrice&&a.hide()),this.options.updateOldPrice(e,t)}function renderAvailable(e){var t=this.$form,a=this.$available,i=this.options,s=i.classes,r=i.templates,l=getTemplate(r.available,""),o=getTemplate(r.notAvailable,"");e.available?(a.html(l),t.addClass(s.isAvailable).removeClass(s.notAvailable)):(a.html(o),t.addClass(s.notAvailable).removeClass(s.isAvailable)),this.options.updateAvailable(e,t)}function renderSku(e){var t=this.$form,a=this.$sku,i=this.options,s=i.classes,r=i.templates,l=getTemplate(r.sku,e.sku),o=getTemplate(r.emptySku,e.sku);e.sku?(a.html(l),t.addClass(s.withSku).removeClass(s.withoutSku),i.useToggleSku&&a.show()):(a.html(o),t.addClass(s.withoutSku).removeClass(s.withSku),i.useToggleSku&&a.hide()),this.options.updateSku(e,t)}function renderImage(e){this.options;var t=e.first_image,a=e.first_image.filename,i=$('[href*="'+a+'"]'),s={$all:$('[src*="'+a+'"]'),$compacts:$('[src*="compact_'+a+'"]'),$larges:$('[src*="large_'+a+'"]'),$mediums:$('[src*="medium_'+a+'"]'),$micros:$('[src*="micro_'+a+'"]'),$thumb:$('[src*="thumb_'+a+'"]'),$originals:$('[src$="'+a+'"]')};this.options.updateImage(e,this.$form,s,t,i)}function getTemplate(e,t){return e&&"string"==typeof e||(e=""),t&&"string"==typeof t||(t=""),e.replace(/%s%/g,t)}module.exports={renderQuantity:renderQuantity,renderPrice:renderPrice,renderOldPrice:renderOldPrice,renderAvailable:renderAvailable,renderSku:renderSku,renderImage:renderImage};
},{"./getQuantityMessage":3,"./setVariantByImage":9}],9:[function(require,module,exports){
function setVariantByImage(e,a){var i=a||function(){},n=e.$form,t=getFileName(e.src,e.size),r=n.get(0);if(r){var c=r.instanceVariantsModifier;if(c){var o=c.productJSON,s=!1;$.each(o.variants,function(e,a){var i=a.first_image.filename;t!==i||s||(s=a.id)}),c.inProcess?i():s&&t!==c.activeImage?(c.inProcess=!0,Products.getInstance(c.productInstance).done(function(e){c.inProcess=!1,c.activeImage=t,e.variants.setVariant(s),i()})):i()}}}function getFileName(e,a){"string"!=typeof e&&(e="",console.warn("Передан пустой url для изображения"));var i=e.split("/"),n=i[i.length-1];return!a||a&&""==a?$.each(["compact_","large_","medium_","micro_","thumb_"],function(e,a){0!==n.indexOf(a)||(n=n.replace(a,""))}):"original"!=a&&(n=n.replace(a+"_","")),n}module.exports=setVariantByImage;
},{}],10:[function(require,module,exports){
window.VariantsModifier=require("VariantsModifier");
},{"VariantsModifier":4}],11:[function(require,module,exports){
var defaults={selectors:{oldPrice:"[data-product-old-price]",price:"[data-product-price]",sku:"[data-product-sku]",quantity:"[data-quantity-message]",available:"[data-product-available]"},templates:{price:"%s%",oldPrice:"%s%",emptyOldPrice:"",sku:"арт. %s%",emptySku:"",available:"Есть в наличии",notAvailable:"Нет в наличии",quantityEnds:"Заканчивается",quantityAlot:"Много",quantityNotAvailable:"Нет в наличии"},classes:{withOldPrice:"with-old-price",withoutOldPrice:"without-old-price",withSku:"with-sku",withoutSku:"without-sku",isAvailable:"is-available",notAvailable:"not-available",quantityEnds:"is-quantity-ends",quantityAlot:"is-quantity-alot",quantityNotAvailable:"is-quantity-not-available"},productGallery:null,quantityEnds:10,thumbSize:"compact",thumbWrap:".js-image-variant",initVariantImage:!1,updateVariantFromSlider:!1,useToggleOldPrice:!0,useToggleSku:!0,checkQuantityVariant:!0,quantityNull:"quantityAlot",dataParam:{quantityNull:"quantity-null",quantityEnds:"quantity-ends",productGallery:"product-gallery",checkQuantytiVariant:"check-quantity-variant"},updatePrice:function(){},updateOldPrice:function(){},updateAvailable:function(){},updateSku:function(){},updateImage:function(){},updateVariant:function(){}},system={};module.exports={defaults:defaults,system:system};
},{}]},{},[10]);
/*!
 * dataTabs v0.11.7
 * https://github.com/VladimirIvanin/dataTabs/
 */

!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+$+".hot-update.js",t.appendChild(n)}function o(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,o=f.p+""+$+".hot-update.json";n.open("GET",o,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+o+" failed."));else{try{var a=JSON.parse(n.responseText)}catch(e){return void t(e)}e(a)}}})}function a(e){var t=D[e];if(!t)return f;var n=function(n){return t.hot.active?(D[n]?D[n].parents.indexOf(e)<0&&D[n].parents.push(e):(x=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),x=[]),f(n)};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&"e"!==o&&Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(o));return n.e=function(e){function t(){M--,"prepare"===C&&(j[e]||l(e),0===M&&0===_&&u())}return"ready"===C&&i("prepare"),M++,f.e(e).then(t,function(e){throw t(),e})},n}function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:p,status:function(e){if(!e)return C;O.push(e)},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var t=O.indexOf(e);t>=0&&O.splice(t,1)},data:T[e]};return v=void 0,t}function i(e){C=e;for(var t=0;t<O.length;t++)O[t].call(null,e)}function r(e){return+e+""===e?+e:e}function c(e){if("idle"!==C)throw new Error("check() is only allowed in idle status");return y=e,i("check"),o().then(function(e){if(!e)return i("idle"),null;S={},j={},I=e.c,m=e.h,i("prepare");var t=new Promise(function(e,t){b={resolve:e,reject:t}});g={};return l(0),"prepare"===C&&0===M&&0===_&&u(),t})}function d(e,t){if(I[e]&&S[e]){S[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--_&&0===M&&u()}}function l(e){I[e]?(S[e]=!0,_++,n(e)):j[e]=!0}function u(){i("ready");var e=b;if(b=null,e)if(y)p(y).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(r(n));e.resolve(t)}}function p(n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==C)throw new Error("apply() is only allowed in ready status");n=n||{};var a,s,c,d,l,u={},p=[],h={},v=function(){console.warn("[HMR] unexpected require("+y.moduleId+") to disposed module")};for(var b in g)if(Object.prototype.hasOwnProperty.call(g,b)){l=r(b);var y;y=g[b]?function(e){for(var t=[e],n={},a=t.slice().map(function(e){return{chain:[e],id:e}});a.length>0;){var s=a.pop(),i=s.id,r=s.chain;if((d=D[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:r,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:r,moduleId:i};for(var c=0;c<d.parents.length;c++){var l=d.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:r.concat([l]),moduleId:i,parentId:l};t.indexOf(l)>=0||(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),o(n[l],[i])):(delete n[l],t.push(l),a.push({chain:r.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:b};var w=!1,O=!1,_=!1,M="";switch(y.chain&&(M="\nUpdate propagation: "+y.chain.join(" -> ")),y.type){case"self-declined":n.onDeclined&&n.onDeclined(y),n.ignoreDeclined||(w=new Error("Aborted because of self decline: "+y.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(y),n.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+y.moduleId+" in "+y.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(y),n.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(y),O=!0;break;case"disposed":n.onDisposed&&n.onDisposed(y),_=!0;break;default:throw new Error("Unexception type "+y.type)}if(w)return i("abort"),Promise.reject(w);if(O){h[l]=g[l],o(p,y.outdatedModules);for(l in y.outdatedDependencies)Object.prototype.hasOwnProperty.call(y.outdatedDependencies,l)&&(u[l]||(u[l]=[]),o(u[l],y.outdatedDependencies[l]))}_&&(o(p,[y.moduleId]),h[l]=v)}var j=[];for(s=0;s<p.length;s++)l=p[s],D[l]&&D[l].hot._selfAccepted&&j.push({module:l,errorHandler:D[l].hot._selfAccepted});i("dispose"),Object.keys(I).forEach(function(e){!1===I[e]&&t(e)});for(var S,E=p.slice();E.length>0;)if(l=E.pop(),d=D[l]){var H={},q=d.hot._disposeHandlers;for(c=0;c<q.length;c++)(a=q[c])(H);for(T[l]=H,d.hot.active=!1,delete D[l],c=0;c<d.children.length;c++){var P=D[d.children[c]];P&&((S=P.parents.indexOf(l))>=0&&P.parents.splice(S,1))}}var A,k;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(d=D[l]))for(k=u[l],c=0;c<k.length;c++)A=k[c],(S=d.children.indexOf(A))>=0&&d.children.splice(S,1);i("apply"),$=m;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var B=null;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)){d=D[l],k=u[l];var N=[];for(s=0;s<k.length;s++)A=k[s],a=d.hot._acceptedDependencies[A],N.indexOf(a)>=0||N.push(a);for(s=0;s<N.length;s++){a=N[s];try{a(k)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:k[s],error:e}),n.ignoreErrored||B||(B=e)}}}for(s=0;s<j.length;s++){var U=j[s];l=U.module,x=[l];try{f(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e}),n.ignoreErrored||B||(B=t),B||(B=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||B||(B=e)}}return B?(i("fail"),Promise.reject(B)):(i("idle"),new Promise(function(e){e(p)}))}function f(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:s(t),parents:(w=x,x=[],w),children:[]};return e[t].call(n.exports,n,n.exports,a(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){d(e,t),h&&h(e,t)};var v,b,g,m,y=!0,$="d95589bc372b640e871a",T={},x=[],w=[],O=[],C="idle",_=0,M=0,j={},S={},I={},D={};f.m=e,f.c=D,f.i=function(e){return e},f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return $},a(8)(f.s=8)}([function(e,t,n){"use strict";function o(e,t,n){var o=e.options,i=o.classes,c=e.$element.get(0).dataTabs.uuid,d=e.$element,l=null,u=e.$targets,p=e.$anchors,f=e.counterElements-1;if(t>f&&(t=f),$.isNumeric(t)){var h=p.eq(t),v=h.data(o.controls.anchor),b="[data-"+o.controls.container+"]";if(d=e.$element.find("[data-"+o.controls.anchor+'="'+v+'"]').filter(function(e,t){var n=!1,o=$(t).parents(b).get(0);return o&&o.dataTabs&&o.dataTabs.uuid&&(n=o.dataTabs.uuid==c),n}),!(d.get(0)&&d.get(0).dataTabs&&d.get(0).dataTabs.$target))return void console.warn("Для кнопки не назначен контент!",d);l=d.get(0).dataTabs.$target}(0,r.default)(e.options,"triggerTab:index",t),(0,r.default)(e.options,"triggerTab:$anchor",d);var g=d.hasClass(i.activeButton)&&l.is(":visible")&&l.hasClass(i.activeTab);o.initOpenTab||(g=l.is(":visible")),(0,r.default)(e.options,"triggerTab:isActive",g);var m=l.find(".swiper-container");g?o.useToggle&&(p.removeClass(i.activeButton).addClass(i.closeButton),u.removeClass(i.activeTab).addClass(i.closeTab),o.useJqMethods&&o.jqMethodClose&&$.each(u,function(e,t){$(t).is(":visible")&&$(t)[o.jqMethodClose](o.jqMethodCloseSpeed)}),a(m),o.pauseVideoAudio&&s(u.not("."+i.activeTab))):(p.removeClass(i.activeButton).addClass(i.closeButton),d.removeClass(i.closeButton).addClass(i.activeButton),u.removeClass(i.activeTab).addClass(i.closeTab),l.removeClass(i.closeTab).addClass(i.activeTab),o.useJqMethods&&o.jqMethodClose&&$.each(u,function(e,t){($(t).is(":visible")||$(t).hasClass(i.closeTab))&&$(t)[o.jqMethodClose](o.jqMethodCloseSpeed)}),o.useJqMethods&&o.jqMethodOpen&&l.is(":hidden")&&l[o.jqMethodOpen](o.jqMethodOpenSpeed),a(m),o.pauseVideoAudio&&s(u.not("."+i.activeTab))),e.states.activeIndex=t,e.options.onTab(e,d,l),$(document).trigger("datatabs:update",[c]),o.useToggle&&g?e.$element.addClass(i.closeContainer).removeClass(i.activeContainer):e.$element.addClass(i.activeContainer).removeClass(i.closeContainer)}function a(e){e&&e[0]&&e[0].swiper&&$.each(e,function(e,t){t.swiper.update&&t.swiper.update(),t.swiper.pagination&&t.swiper.pagination.render&&(t.swiper.pagination.render(),t.swiper.pagination.update())})}function s(e){e.each(function(e,t){$(t).find("video").each(function(){this.pause()}),$(t).find("audio").each(function(){this.pause()})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,n){"use strict";function o(e,t,n){e.debug&&(console.info("==DataTabs=="),console.log(t),n&&console.log(n),console.log("///////////////////"),console.log("///DataTabs///////"),console.log("/////////////////"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(){var e=this,t=e.options,n=e.$element,o=null;n.on("touchstart",function(e){clearInterval(o)}),n.hover(function(){clearInterval(o)},function(){o=setInterval(a,t.speedSwitching)}),setTimeout(function(){o=setInterval(a,t.speedSwitching)},0);var a=function(){var o=n.find("[data-"+t.controls.anchor+"]"),a=o.length,i=e.states.activeIndex||0,r=0;"number"==typeof i&&(r=++i),r>=a&&(r=0),n.hasClass(t.classes.hover)&&t.pauseOnHover||(0,s.default)(e,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,n){"use strict";function o(){var e=this,t=e.options,n=e.counterElements-1;e.$next&&($(document).on("datatabs:update",function(o,s){s==e.$element.get(0).dataTabs.uuid&&(a(e,n).isNext?e.$next.removeClass(t.classes.disabledSwitcher):e.$next.addClass(t.classes.disabledSwitcher))}),e.$next.on(t.switchersEvent,function(t){t.preventDefault();var o=a(e,n);o.isNext&&(0,u.default)(e,o.next)})),e.$prev&&($(document).on("datatabs:update",function(o,a){a==e.$element.get(0).dataTabs.uuid&&(s(e,n).isPrev?e.$prev.removeClass(t.classes.disabledSwitcher):e.$prev.addClass(t.classes.disabledSwitcher))}),e.$prev.on(t.switchersEvent,function(t){t.preventDefault();var o=s(e,n);o.isPrev&&(0,u.default)(e,o.prev)}))}function a(e,t){var n=e.states.activeIndex+1,o=!0;return n>t&&(e.options.loop?n=0:o=!1),{next:n,isNext:o}}function s(e,t){var n=e.states.activeIndex-1,o=!0;return n<0&&(e.options.loop?n=t:o=!1),{prev:n,isPrev:o}}function i(){var e=this,t=e.options;e.$anchors.on(t.event,function(n){t.prevent&&n.preventDefault();var o=$(this).get(0);(0,u.default)(e,o.dataTabs.myIndex)})}function r(){var e=this;e.options.hideOnClosest&&$(document).on("click",function(t){0==$(t.target).closest(e.$element).length&&e.closeAllTabs()})}function c(){var e=this,t=(e.$element,e.options.useJqMethods&&e.options.jqMethodClose),n=e.options.useToggle,o=e.options.classes.activeTab,a=e.options.classes.closeTab,s=e.options.classes.activeButton,i=e.options.classes.closeButton,r=n?e.$targets:e.$targets.not("."+o),c=n?e.$anchors:e.$anchors.not("."+s);t&&r[e.options.jqMethodClose](),c.removeClass(s).addClass(i),r.removeClass(o).addClass(a)}function d(){var e=this,t=e.options,n=e.$element;n.hover(function(o){n.addClass(t.classes.hover),t.onMouseover(o,e)},function(o){n.removeClass(t.classes.hover),t.onMouseout(o,e),e.options.hideOnMouseout&&(e.options.mouseoutTimeOut?setTimeout(function(){e.$element.hasClass(t.classes.hover)||e.closeAllTabs()},e.options.mouseoutTimeOut):e.closeAllTabs())})}Object.defineProperty(t,"__esModule",{value:!0}),t.bindSwitchers=o,t.bindTriggers=i,t.hideOnClosest=r,t.closeAllTabs=c,t.bindHover=d;var l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={event:"click",switchersEvent:"click",controls:{container:"tabs-container",control:"tab-control",anchor:"tab-anchor",box:"tab-box",target:"tab-target",next:"tab-next",prev:"tab-prev"},pauseOnHover:!0,activeIndex:1,speedSwitching:5e3,useToggle:!1,autoSwitching:!1,hideOnClosest:!1,hideOnMouseout:!1,prevent:!0,debug:!1,useHash:!0,useJqMethods:!0,loop:!1,initOpenTab:!0,pauseVideoAudio:!0,state:"tab",mouseoutTimeOut:!1,jqMethodOpenSpeed:300,jqMethodOpen:"fadeIn",jqMethodCloseSpeed:0,jqMethodClose:"hide",onInit:function(){},onTab:function(){},onMouseover:function(){},onMouseout:function(){},classes:{hover:"is-data-tabs-hover",disabledSwitcher:"is-switcher-disabled",disabledButton:"is-button-disabled",activeButton:"is-button-active",closeButton:"is-button-close",activeTab:"is-tab-active",closeTab:"is-tab-close",activeContainer:"is-active-container",closeContainer:"is-close-container"}};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(){var e=this,t=e.options,n=i(t.controls.anchor),o=i(t.controls.target),a=i(t.controls.container),s=null;e.activeHash&&"string"==typeof e.activeHash&&(s=e.$element.find(i(t.controls.anchor,e.activeHash.replace("#","")))),e.$element.is(a)||(console.warn("Не указан контейнер для блока табов: "+a),e.$element.attr("data-"+t.controls.container,"")),e.$element.get(0).dataTabs||(e.$element.get(0).dataTabs={},e.$element.get(0).dataTabs.list=[]),e.$element.get(0).dataTabs.instance=e,e.$element.get(0).dataTabs.uuid=(0,c.default)(),(0,l.default)(e.options,"self.$element.get(0).dataTabs",e.$element.get(0).dataTabs);var r=e.$element.get(0).dataTabs.uuid;e.$anchors=e.$element.find(n).filter(function(e,t){var n=!1,o=$(t).parents(a+":first").get(0);return o&&o.dataTabs&&o.dataTabs.uuid&&(n=o.dataTabs.uuid==r),n}),(0,l.default)(e.options,"self.$anchors",e.$anchors),e.$targets=e.$element.find(o).filter(function(e,t){var n=!1,o=$(t).parents(a).get(0);return o&&o.dataTabs&&o.dataTabs.uuid&&(n=o.dataTabs.uuid==r),n}),(0,l.default)(e.options,"self.$targets",e.$targets),!0===e.$anchors.is("[data-tab-active]")&&(e.options.activeIndex=[]),e.$anchors.each(function(n,o){var a=$(o).data(t.controls.anchor),s=i(t.controls.target,a),r=$(o).get(0);r.dataTabs||(r.dataTabs={}),r.dataTabs.myIndex=n,r.dataTabs.$target=null,$(o).is("[data-tab-active]")&&e.options.activeIndex.push(n),e.$targets.each(function(e,t){$(t).is(s)&&($(o).get(0).dataTabs.$target=$(t))}),(0,l.default)(e.options,"anchor.dataTabs",r.dataTabs),$(o).get(0).dataTabs.$target||console.warn("Для кнопки не назначен контент!",$(o))}),s&&s.length&&(e.options.activeIndex=s.index()+1),e.counterElements=e.$anchors.length}function s(){var e=this;e.$next=e.$element.find(i(e.options.controls.next)),e.$prev=e.$element.find(i(e.options.controls.prev))}function i(e,t){return"[data-"+(t?e+'="'+t+'"':e)+"]"}Object.defineProperty(t,"__esModule",{value:!0}),t.initElements=a,t.initSwitchers=s;var r=n(7),c=o(r),d=n(1),l=o(d)},function(e,t,n){"use strict";function o(e,t){var n=$.isNumeric(t),o=Array.isArray(t);if(n){var a=--t;a<0&&(a=0),(0,s.default)(e,a,"initTabs")}else o&&$.each(t,function(t,n){(0,s.default)(e,n,"initTabs")})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,n){"use strict";function o(){var e=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(2),i=o(s),r=n(6),c=o(r),d=n(5),l=n(3),u=n(4),p=o(u);!function(e,t,n){function o(t,n){this.element=t,this.$element=e(t),this.states={},this.activeHash=null;var o=this.getDataParam();this.options=e.extend(!0,{},p.default,n),this.options=e.extend(!0,{},this.options,o),this.init(n)}o.prototype.init=function(e){var n=this;"accordion"==n.options.state&&(n.options.activeIndex=e.activeIndex||null,n.options.useToggle=!0,0==n.options.jqMethodCloseSpeed&&(n.options.jqMethodCloseSpeed=n.options.jqMethodOpenSpeed)),n.options.useHash&&(n.activeHash=t.location.hash),n.initElements(),n.initSwitchers(),n.bindSwitchers(),n.bindTriggers(),n.bindHover(),n.hideOnClosest(),n.options.initOpenTab&&n.options.activeIndex&&n.initTabs(n,n.options.activeIndex),n.options.autoSwitching&&n.initAutoSwitching(),n.options.onInit(n)},o.prototype.initElements=d.initElements,o.prototype.initTabs=c.default,o.prototype.initAutoSwitching=i.default,o.prototype.initBinds=l.binding,o.prototype.initSwitchers=d.initSwitchers,o.prototype.bindSwitchers=l.bindSwitchers,o.prototype.bindTriggers=l.bindTriggers,o.prototype.bindHover=l.bindHover,o.prototype.closeAllTabs=l.closeAllTabs,o.prototype.hideOnClosest=l.hideOnClosest,o.prototype.getDataParam=function(){return this.$element.data()},e.fn.dataTabs=function(t){var n,s=arguments,i=t||{};return void 0===i||"object"===(void 0===i?"undefined":a(i))?this.each(function(t,n){e.data(this,"datatabs")||e.data(this,"datatabs",new o(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?(n=e.data(this,"datatabs"),n instanceof datatabs&&"function"==typeof n[i]?n[i].apply(n,Array.prototype.slice.call(s,1)):this):void 0}}(jQuery,window)}]);
/*


 Magic Zoom Plus v5.2.2 for MagicToolbox.com
 Copyright 2017 Magic Toolbox
 Buy a license: https://www.magictoolbox.com/magiczoomplus/
 License agreement: https://www.magictoolbox.com/license/


 */

window.MagicZoom = (function() {
    var z, A;
    z = A = (function() {
        var V = {
            version: "v3.3-b5",
            UUID: 0,
            storage: {},
            $uuid: function(Z) {
                return (Z.$J_UUID || (Z.$J_UUID = ++P.UUID))
            },
            getStorage: function(Z) {
                return (P.storage[Z] || (P.storage[Z] = {}))
            },
            $F: function() {},
            $false: function() {
                return false
            },
            $true: function() {
                return true
            },
            stylesId: "mjs-" + Math.floor(Math.random() * new Date().getTime()),
            defined: function(Z) {
                return (undefined != Z)
            },
            ifndef: function(aa, Z) {
                return (undefined != aa) ? aa : Z
            },
            exists: function(Z) {
                return !!(Z)
            },
            jTypeOf: function(Z) {
                if (!P.defined(Z)) {
                    return false
                }
                if (Z.$J_TYPE) {
                    return Z.$J_TYPE
                }
                if (!!Z.nodeType) {
                    if (1 == Z.nodeType) {
                        return "element"
                    }
                    if (3 == Z.nodeType) {
                        return "textnode"
                    }
                }
                if (Z.length && Z.item) {
                    return "collection"
                }
                if (Z.length && Z.callee) {
                    return "arguments"
                }
                if ((Z instanceof window.Object || Z instanceof window.Function) && Z.constructor === P.Class) {
                    return "class"
                }
                if (Z instanceof window.Array) {
                    return "array"
                }
                if (Z instanceof window.Function) {
                    return "function"
                }
                if (Z instanceof window.String) {
                    return "string"
                }
                if (P.browser.trident) {
                    if (P.defined(Z.cancelBubble)) {
                        return "event"
                    }
                } else {
                    if (Z === window.event || Z.constructor == window.Event || Z.constructor == window.MouseEvent || Z.constructor == window.UIEvent || Z.constructor == window.KeyboardEvent || Z.constructor == window.KeyEvent) {
                        return "event"
                    }
                }
                if (Z instanceof window.Date) {
                    return "date"
                }
                if (Z instanceof window.RegExp) {
                    return "regexp"
                }
                if (Z === window) {
                    return "window"
                }
                if (Z === document) {
                    return "document"
                }
                return typeof(Z)
            },
            extend: function(ae, ad) {
                if (!(ae instanceof window.Array)) {
                    ae = [ae]
                }
                if (!ad) {
                    return ae[0]
                }
                for (var ac = 0, aa = ae.length; ac < aa; ac++) {
                    if (!P.defined(ae)) {
                        continue
                    }
                    for (var ab in ad) {
                        if (!Object.prototype.hasOwnProperty.call(ad, ab)) {
                            continue
                        }
                        try {
                            ae[ac][ab] = ad[ab]
                        } catch (Z) {}
                    }
                }
                return ae[0]
            },
            implement: function(ad, ac) {
                if (!(ad instanceof window.Array)) {
                    ad = [ad]
                }
                for (var ab = 0, Z = ad.length; ab < Z; ab++) {
                    if (!P.defined(ad[ab])) {
                        continue
                    }
                    if (!ad[ab].prototype) {
                        continue
                    }
                    for (var aa in (ac || {})) {
                        if (!ad[ab].prototype[aa]) {
                            ad[ab].prototype[aa] = ac[aa]
                        }
                    }
                }
                return ad[0]
            },
            nativize: function(ab, aa) {
                if (!P.defined(ab)) {
                    return ab
                }
                for (var Z in (aa || {})) {
                    if (!ab[Z]) {
                        ab[Z] = aa[Z]
                    }
                }
                return ab
            },
            $try: function() {
                for (var aa = 0, Z = arguments.length; aa < Z; aa++) {
                    try {
                        return arguments[aa]()
                    } catch (ab) {}
                }
                return null
            },
            $A: function(ab) {
                if (!P.defined(ab)) {
                    return P.$([])
                }
                if (ab.toArray) {
                    return P.$(ab.toArray())
                }
                if (ab.item) {
                    var aa = ab.length || 0,
                        Z = new Array(aa);
                    while (aa--) {
                        Z[aa] = ab[aa]
                    }
                    return P.$(Z)
                }
                return P.$(Array.prototype.slice.call(ab))
            },
            now: function() {
                return new Date().getTime()
            },
            detach: function(ad) {
                var ab;
                switch (P.jTypeOf(ad)) {
                    case "object":
                        ab = {};
                        for (var ac in ad) {
                            ab[ac] = P.detach(ad[ac])
                        }
                        break;
                    case "array":
                        ab = [];
                        for (var aa = 0, Z = ad.length; aa < Z; aa++) {
                            ab[aa] = P.detach(ad[aa])
                        }
                        break;
                    default:
                        return ad
                }
                return P.$(ab)
            },
            $: function(ab) {
                var Z = true;
                if (!P.defined(ab)) {
                    return null
                }
                if (ab.$J_EXT) {
                    return ab
                }
                switch (P.jTypeOf(ab)) {
                    case "array":
                        ab = P.nativize(ab, P.extend(P.Array, {
                            $J_EXT: P.$F
                        }));
                        ab.jEach = ab.forEach;
                        return ab;
                        break;
                    case "string":
                        var aa = document.getElementById(ab);
                        if (P.defined(aa)) {
                            return P.$(aa)
                        }
                        return null;
                        break;
                    case "window":
                    case "document":
                        P.$uuid(ab);
                        ab = P.extend(ab, P.Doc);
                        break;
                    case "element":
                        P.$uuid(ab);
                        ab = P.extend(ab, P.Element);
                        break;
                    case "event":
                        ab = P.extend(ab, P.Event);
                        break;
                    case "textnode":
                    case "function":
                    case "array":
                    case "date":
                    default:
                        Z = false;
                        break
                }
                if (Z) {
                    return P.extend(ab, {
                        $J_EXT: P.$F
                    })
                } else {
                    return ab
                }
            },
            $new: function(Z, ab, aa) {
                return P.$(P.doc.createElement(Z)).setProps(ab || {}).jSetCss(aa || {})
            },
            addCSS: function(aa, ac, ag) {
                var ad, ab, ae, af = [],
                    Z = -1;
                ag || (ag = P.stylesId);
                ad = P.$(ag) || P.$new("style", {
                        id: ag,
                        type: "text/css"
                    }).jAppendTo((document.head || document.body), "top");
                ab = ad.sheet || ad.styleSheet;
                if ("string" != P.jTypeOf(ac)) {
                    for (var ae in ac) {
                        af.push(ae + ":" + ac[ae])
                    }
                    ac = af.join(";")
                }
                if (ab.insertRule) {
                    Z = ab.insertRule(aa + " {" + ac + "}", ab.cssRules.length)
                } else {
                    Z = ab.addRule(aa, ac)
                }
                return Z
            },
            removeCSS: function(ac, Z) {
                var ab, aa;
                ab = P.$(ac);
                if ("element" !== P.jTypeOf(ab)) {
                    return
                }
                aa = ab.sheet || ab.styleSheet;
                if (aa.deleteRule) {
                    aa.deleteRule(Z)
                } else {
                    if (aa.removeRule) {
                        aa.removeRule(Z)
                    }
                }
            },
            generateUUID: function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(ab) {
                    var aa = Math.random() * 16 | 0,
                        Z = ab == "x" ? aa : (aa & 3 | 8);
                    return Z.toString(16)
                }).toUpperCase()
            },
            getAbsoluteURL: (function() {
                var Z;
                return function(aa) {
                    if (!Z) {
                        Z = document.createElement("a")
                    }
                    Z.setAttribute("href", aa);
                    return ("!!" + Z.href).replace("!!", "")
                }
            })(),
            getHashCode: function(ab) {
                var ac = 0,
                    Z = ab.length;
                for (var aa = 0; aa < Z; ++aa) {
                    ac = 31 * ac + ab.charCodeAt(aa);
                    ac %= 4294967296
                }
                return ac
            }
        };
        var P = V;
        var Q = V.$;
        if (!window.magicJS) {
            window.magicJS = V;
            window.$mjs = V.$
        }
        P.Array = {
            $J_TYPE: "array",
            indexOf: function(ac, ad) {
                var Z = this.length;
                for (var aa = this.length, ab = (ad < 0) ? Math.max(0, aa + ad) : ad || 0; ab < aa; ab++) {
                    if (this[ab] === ac) {
                        return ab
                    }
                }
                return -1
            },
            contains: function(Z, aa) {
                return this.indexOf(Z, aa) != -1
            },
            forEach: function(Z, ac) {
                for (var ab = 0, aa = this.length; ab < aa; ab++) {
                    if (ab in this) {
                        Z.call(ac, this[ab], ab, this)
                    }
                }
            },
            filter: function(Z, ae) {
                var ad = [];
                for (var ac = 0, aa = this.length; ac < aa; ac++) {
                    if (ac in this) {
                        var ab = this[ac];
                        if (Z.call(ae, this[ac], ac, this)) {
                            ad.push(ab)
                        }
                    }
                }
                return ad
            },
            map: function(Z, ad) {
                var ac = [];
                for (var ab = 0, aa = this.length; ab < aa; ab++) {
                    if (ab in this) {
                        ac[ab] = Z.call(ad, this[ab], ab, this)
                    }
                }
                return ac
            }
        };
        P.implement(String, {
            $J_TYPE: "string",
            jTrim: function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            eq: function(Z, aa) {
                return (aa || false) ? (this.toString() === Z.toString()) : (this.toLowerCase().toString() === Z.toLowerCase().toString())
            },
            jCamelize: function() {
                return this.replace(/-\D/g, function(Z) {
                    return Z.charAt(1).toUpperCase()
                })
            },
            dashize: function() {
                return this.replace(/[A-Z]/g, function(Z) {
                    return ("-" + Z.charAt(0).toLowerCase())
                })
            },
            jToInt: function(Z) {
                return parseInt(this, Z || 10)
            },
            toFloat: function() {
                return parseFloat(this)
            },
            jToBool: function() {
                return !this.replace(/true/i, "").jTrim()
            },
            has: function(aa, Z) {
                Z = Z || "";
                return (Z + this + Z).indexOf(Z + aa + Z) > -1
            }
        });
        V.implement(Function, {
            $J_TYPE: "function",
            jBind: function() {
                var aa = P.$A(arguments),
                    Z = this,
                    ab = aa.shift();
                return function() {
                    return Z.apply(ab || null, aa.concat(P.$A(arguments)))
                }
            },
            jBindAsEvent: function() {
                var aa = P.$A(arguments),
                    Z = this,
                    ab = aa.shift();
                return function(ac) {
                    return Z.apply(ab || null, P.$([ac || (P.browser.ieMode ? window.event : null)]).concat(aa))
                }
            },
            jDelay: function() {
                var aa = P.$A(arguments),
                    Z = this,
                    ab = aa.shift();
                return window.setTimeout(function() {
                    return Z.apply(Z, aa)
                }, ab || 0)
            },
            jDefer: function() {
                var aa = P.$A(arguments),
                    Z = this;
                return function() {
                    return Z.jDelay.apply(Z, aa)
                }
            },
            interval: function() {
                var aa = P.$A(arguments),
                    Z = this,
                    ab = aa.shift();
                return window.setInterval(function() {
                    return Z.apply(Z, aa)
                }, ab || 0)
            }
        });
        var W = {},
            O = navigator.userAgent.toLowerCase(),
            N = O.match(/(webkit|gecko|trident|presto)\/(\d+\.?\d*)/i),
            S = O.match(/(edge|opr)\/(\d+\.?\d*)/i) || O.match(/(crios|chrome|safari|firefox|opera|opr)\/(\d+\.?\d*)/i),
            U = O.match(/version\/(\d+\.?\d*)/i),
            J = document.documentElement.style;

        function K(aa) {
            var Z = aa.charAt(0).toUpperCase() + aa.slice(1);
            return aa in J || ("Webkit" + Z) in J || ("Moz" + Z) in J || ("ms" + Z) in J || ("O" + Z) in J
        }
        P.browser = {
            features: {
                xpath: !!(document.evaluate),
                air: !!(window.runtime),
                query: !!(document.querySelector),
                fullScreen: !!(document.fullscreenEnabled || document.msFullscreenEnabled || document.exitFullscreen || document.cancelFullScreen || document.webkitexitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.oCancelFullScreen || document.msCancelFullScreen),
                xhr2: !!(window.ProgressEvent) && !!(window.FormData) && (window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                transition: K("transition"),
                transform: K("transform"),
                perspective: K("perspective"),
                animation: K("animation"),
                requestAnimationFrame: false,
                multibackground: false,
                cssFilters: false,
                canvas: false,
                svg: (function() {
                    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
                })()
            },
            touchScreen: function() {
                return "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
            }(),
            mobile: O.match(/(android|bb\d+|meego).+|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/) ? true : false,
            engine: (N && N[1]) ? N[1].toLowerCase() : (window.opera) ? "presto" : !!(window.ActiveXObject) ? "trident" : (undefined !== document.getBoxObjectFor || null != window.mozInnerScreenY) ? "gecko" : (null !== window.WebKitPoint || !navigator.taintEnabled) ? "webkit" : "unknown",
            version: (N && N[2]) ? parseFloat(N[2]) : 0,
            uaName: (S && S[1]) ? S[1].toLowerCase() : "",
            uaVersion: (S && S[2]) ? parseFloat(S[2]) : 0,
            cssPrefix: "",
            cssDomPrefix: "",
            domPrefix: "",
            ieMode: 0,
            platform: O.match(/ip(?:ad|od|hone)/) ? "ios" : (O.match(/(?:webos|android)/) || navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
            backCompat: document.compatMode && "backcompat" == document.compatMode.toLowerCase(),
            scrollbarsWidth: 0,
            getDoc: function() {
                return (document.compatMode && "backcompat" == document.compatMode.toLowerCase()) ? document.body : document.documentElement
            },
            requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || undefined,
            cancelAnimationFrame: window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || undefined,
            ready: false,
            onready: function() {
                if (P.browser.ready) {
                    return
                }
                var ac, ab;
                P.browser.ready = true;
                P.body = P.$(document.body);
                P.win = P.$(window);
                try {
                    var aa = P.$new("div").jSetCss({
                        width: 100,
                        height: 100,
                        overflow: "scroll",
                        position: "absolute",
                        top: -9999
                    }).jAppendTo(document.body);
                    P.browser.scrollbarsWidth = aa.offsetWidth - aa.clientWidth;
                    aa.jRemove()
                } catch (Z) {}
                try {
                    ac = P.$new("div");
                    ab = ac.style;
                    ab.cssText = "background:url(https://),url(https://),red url(https://)";
                    P.browser.features.multibackground = (/(url\s*\(.*?){3}/).test(ab.background);
                    ab = null;
                    ac = null
                } catch (Z) {}
                if (!P.browser.cssTransformProp) {
                    P.browser.cssTransformProp = P.normalizeCSS("transform").dashize()
                }
                try {
                    ac = P.$new("div");
                    ac.style.cssText = P.normalizeCSS("filter").dashize() + ":blur(2px);";
                    P.browser.features.cssFilters = !!ac.style.length && (!P.browser.ieMode || P.browser.ieMode > 9);
                    ac = null
                } catch (Z) {}
                if (!P.browser.features.cssFilters) {
                    P.$(document.documentElement).jAddClass("no-cssfilters-magic")
                }
                try {
                    P.browser.features.canvas = (function() {
                        var ad = P.$new("canvas");
                        return !!(ad.getContext && ad.getContext("2d"))
                    })()
                } catch (Z) {}
                if (undefined === window.TransitionEvent && undefined !== window.WebKitTransitionEvent) {
                    W.transitionend = "webkitTransitionEnd"
                }
                P.Doc.jCallEvent.call(P.$(document), "domready")
            }
        };
        (function() {
            var ae = [],
                ad, ac, aa;

            function Z() {
                return !!(arguments.callee.caller)
            }
            switch (P.browser.engine) {
                case "trident":
                    if (!P.browser.version) {
                        P.browser.version = !!(window.XMLHttpRequest) ? 3 : 2
                    }
                    break;
                case "gecko":
                    P.browser.version = (S && S[2]) ? parseFloat(S[2]) : 0;
                    break
            }
            P.browser[P.browser.engine] = true;
            if (S && "crios" === S[1]) {
                P.browser.uaName = "chrome"
            }
            if (!!window.chrome) {
                P.browser.chrome = true
            }
            if (S && "opr" === S[1]) {
                P.browser.uaName = "opera";
                P.browser.opera = true
            }
            if ("safari" === P.browser.uaName && (U && U[1])) {
                P.browser.uaVersion = parseFloat(U[1])
            }
            if ("android" == P.browser.platform && P.browser.webkit && (U && U[1])) {
                P.browser.androidBrowser = true
            }
            ad = ({
                    gecko: ["-moz-", "Moz", "moz"],
                    webkit: ["-webkit-", "Webkit", "webkit"],
                    trident: ["-ms-", "ms", "ms"],
                    presto: ["-o-", "O", "o"]
                })[P.browser.engine] || ["", "", ""];
            P.browser.cssPrefix = ad[0];
            P.browser.cssDomPrefix = ad[1];
            P.browser.domPrefix = ad[2];
            P.browser.ieMode = (!P.browser.trident) ? undefined : (document.documentMode) ? document.documentMode : function() {
                var af = 0;
                if (P.browser.backCompat) {
                    return 5
                }
                switch (P.browser.version) {
                    case 2:
                        af = 6;
                        break;
                    case 3:
                        af = 7;
                        break
                }
                return af
            }();
            ae.push(P.browser.platform + "-magic");
            if (P.browser.mobile) {
                ae.push("mobile-magic")
            }
            if (P.browser.androidBrowser) {
                ae.push("android-browser-magic")
            }
            if (P.browser.ieMode) {
                P.browser.uaName = "ie";
                P.browser.uaVersion = P.browser.ieMode;
                ae.push("ie" + P.browser.ieMode + "-magic");
                for (ac = 11; ac > P.browser.ieMode; ac--) {
                    ae.push("lt-ie" + ac + "-magic")
                }
            }
            if (P.browser.webkit && P.browser.version < 536) {
                P.browser.features.fullScreen = false
            }
            if (P.browser.requestAnimationFrame) {
                P.browser.requestAnimationFrame.call(window, function() {
                    P.browser.features.requestAnimationFrame = true
                })
            }
            if (P.browser.features.svg) {
                ae.push("svg-magic")
            } else {
                ae.push("no-svg-magic")
            }
            aa = (document.documentElement.className || "").match(/\S+/g) || [];
            document.documentElement.className = P.$(aa).concat(ae).join(" ");
            try {
                document.documentElement.setAttribute("data-magic-ua", P.browser.uaName);
                document.documentElement.setAttribute("data-magic-ua-ver", P.browser.uaVersion)
            } catch (ab) {}
            if (P.browser.ieMode && P.browser.ieMode < 9) {
                document.createElement("figure");
                document.createElement("figcaption")
            }
        })();
        (function() {
            P.browser.fullScreen = {
                capable: P.browser.features.fullScreen,
                enabled: function() {
                    return !!(document.fullscreenElement || document[P.browser.domPrefix + "FullscreenElement"] || document.fullScreen || document.webkitIsFullScreen || document[P.browser.domPrefix + "FullScreen"])
                },
                request: function(Z, aa) {
                    aa || (aa = {});
                    if (this.capable) {
                        P.$(document).jAddEvent(this.changeEventName, this.onchange = function(ab) {
                            if (this.enabled()) {
                                aa.onEnter && aa.onEnter()
                            } else {
                                P.$(document).jRemoveEvent(this.changeEventName, this.onchange);
                                aa.onExit && aa.onExit()
                            }
                        }.jBindAsEvent(this));
                        P.$(document).jAddEvent(this.errorEventName, this.onerror = function(ab) {
                            aa.fallback && aa.fallback();
                            P.$(document).jRemoveEvent(this.errorEventName, this.onerror)
                        }.jBindAsEvent(this));
                        (Z[P.browser.domPrefix + "RequestFullscreen"] || Z[P.browser.domPrefix + "RequestFullScreen"] || Z.requestFullscreen || function() {}).call(Z)
                    } else {
                        if (aa.fallback) {
                            aa.fallback()
                        }
                    }
                },
                cancel: (document.exitFullscreen || document.cancelFullScreen || document[P.browser.domPrefix + "ExitFullscreen"] || document[P.browser.domPrefix + "CancelFullScreen"] || function() {}).jBind(document),
                changeEventName: document.msExitFullscreen ? "MSFullscreenChange" : (document.exitFullscreen ? "" : P.browser.domPrefix) + "fullscreenchange",
                errorEventName: document.msExitFullscreen ? "MSFullscreenError" : (document.exitFullscreen ? "" : P.browser.domPrefix) + "fullscreenerror",
                prefix: P.browser.domPrefix,
                activeElement: null
            }
        })();
        var Y = /\S+/g,
            M = /^(border(Top|Bottom|Left|Right)Width)|((padding|margin)(Top|Bottom|Left|Right))$/,
            R = {
                "float": ("undefined" === typeof(J.styleFloat)) ? "cssFloat" : "styleFloat"
            },
            T = {
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                zIndex: true,
                zoom: true
            },
            L = (window.getComputedStyle) ? function(ab, Z) {
                var aa = window.getComputedStyle(ab, null);
                return aa ? aa.getPropertyValue(Z) || aa[Z] : null
            } : function(ac, aa) {
                var ab = ac.currentStyle,
                    Z = null;
                Z = ab ? ab[aa] : null;
                if (null == Z && ac.style && ac.style[aa]) {
                    Z = ac.style[aa]
                }
                return Z
            };

        function X(ab) {
            var Z, aa;
            aa = (P.browser.webkit && "filter" == ab) ? false : (ab in J);
            if (!aa) {
                Z = P.browser.cssDomPrefix + ab.charAt(0).toUpperCase() + ab.slice(1);
                if (Z in J) {
                    return Z
                }
            }
            return ab
        }
        P.normalizeCSS = X;
        P.Element = {
            jHasClass: function(Z) {
                return !(Z || "").has(" ") && (this.className || "").has(Z, " ")
            },
            jAddClass: function(ad) {
                var aa = (this.className || "").match(Y) || [],
                    ac = (ad || "").match(Y) || [],
                    Z = ac.length,
                    ab = 0;
                for (; ab < Z; ab++) {
                    if (!P.$(aa).contains(ac[ab])) {
                        aa.push(ac[ab])
                    }
                }
                this.className = aa.join(" ");
                return this
            },
            jRemoveClass: function(ae) {
                var aa = (this.className || "").match(Y) || [],
                    ad = (ae || "").match(Y) || [],
                    Z = ad.length,
                    ac = 0,
                    ab;
                for (; ac < Z; ac++) {
                    if ((ab = P.$(aa).indexOf(ad[ac])) > -1) {
                        aa.splice(ab, 1)
                    }
                }
                this.className = ae ? aa.join(" ") : "";
                return this
            },
            jToggleClass: function(Z) {
                return this.jHasClass(Z) ? this.jRemoveClass(Z) : this.jAddClass(Z)
            },
            jGetCss: function(aa) {
                var ab = aa.jCamelize(),
                    Z = null;
                aa = R[ab] || (R[ab] = X(ab));
                Z = L(this, aa);
                if ("auto" === Z) {
                    Z = null
                }
                if (null !== Z) {
                    if ("opacity" == aa) {
                        return P.defined(Z) ? parseFloat(Z) : 1
                    }
                    if (M.test(aa)) {
                        Z = parseInt(Z, 10) ? Z : "0px"
                    }
                }
                return Z
            },
            jSetCssProp: function(aa, Z) {
                var ac = aa.jCamelize();
                try {
                    if ("opacity" == aa) {
                        this.jSetOpacity(Z);
                        return this
                    }
                    aa = R[ac] || (R[ac] = X(ac));
                    this.style[aa] = Z + (("number" == P.jTypeOf(Z) && !T[ac]) ? "px" : "")
                } catch (ab) {}
                return this
            },
            jSetCss: function(aa) {
                for (var Z in aa) {
                    this.jSetCssProp(Z, aa[Z])
                }
                return this
            },
            jGetStyles: function() {
                var Z = {};
                P.$A(arguments).jEach(function(aa) {
                    Z[aa] = this.jGetCss(aa)
                }, this);
                return Z
            },
            jSetOpacity: function(ab, Z) {
                var aa;
                Z = Z || false;
                this.style.opacity = ab;
                ab = parseInt(parseFloat(ab) * 100);
                if (Z) {
                    if (0 === ab) {
                        if ("hidden" != this.style.visibility) {
                            this.style.visibility = "hidden"
                        }
                    } else {
                        if ("visible" != this.style.visibility) {
                            this.style.visibility = "visible"
                        }
                    }
                }
                if (P.browser.ieMode && P.browser.ieMode < 9) {
                    if (!isNaN(ab)) {
                        if (!~this.style.filter.indexOf("Alpha")) {
                            this.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity=" + ab + ")"
                        } else {
                            this.style.filter = this.style.filter.replace(/Opacity=\d*/i, "Opacity=" + ab)
                        }
                    } else {
                        this.style.filter = this.style.filter.replace(/progid:DXImageTransform.Microsoft.Alpha\(Opacity=\d*\)/i, "").jTrim();
                        if ("" === this.style.filter) {
                            this.style.removeAttribute("filter")
                        }
                    }
                }
                return this
            },
            setProps: function(Z) {
                for (var aa in Z) {
                    if ("class" === aa) {
                        this.jAddClass("" + Z[aa])
                    } else {
                        this.setAttribute(aa, "" + Z[aa])
                    }
                }
                return this
            },
            jGetTransitionDuration: function() {
                var aa = 0,
                    Z = 0;
                aa = this.jGetCss("transition-duration");
                Z = this.jGetCss("transition-delay");
                aa = aa.indexOf("ms") > -1 ? parseFloat(aa) : aa.indexOf("s") > -1 ? parseFloat(aa) * 1000 : 0;
                Z = Z.indexOf("ms") > -1 ? parseFloat(Z) : Z.indexOf("s") > -1 ? parseFloat(Z) * 1000 : 0;
                return aa + Z
            },
            hide: function() {
                return this.jSetCss({
                    display: "none",
                    visibility: "hidden"
                })
            },
            show: function() {
                return this.jSetCss({
                    display: "",
                    visibility: "visible"
                })
            },
            jGetSize: function() {
                return {
                    width: this.offsetWidth,
                    height: this.offsetHeight
                }
            },
            getInnerSize: function(aa) {
                var Z = this.jGetSize();
                Z.width -= (parseFloat(this.jGetCss("border-left-width") || 0) + parseFloat(this.jGetCss("border-right-width") || 0));
                Z.height -= (parseFloat(this.jGetCss("border-top-width") || 0) + parseFloat(this.jGetCss("border-bottom-width") || 0));
                if (!aa) {
                    Z.width -= (parseFloat(this.jGetCss("padding-left") || 0) + parseFloat(this.jGetCss("padding-right") || 0));
                    Z.height -= (parseFloat(this.jGetCss("padding-top") || 0) + parseFloat(this.jGetCss("padding-bottom") || 0))
                }
                return Z
            },
            jGetScroll: function() {
                return {
                    top: this.scrollTop,
                    left: this.scrollLeft
                }
            },
            jGetFullScroll: function() {
                var Z = this,
                    aa = {
                        top: 0,
                        left: 0
                    };
                do {
                    aa.left += Z.scrollLeft || 0;
                    aa.top += Z.scrollTop || 0;
                    Z = Z.parentNode
                } while (Z);
                return aa
            },
            jGetPosition: function() {
                var ad = this,
                    aa = 0,
                    ac = 0;
                if (P.defined(document.documentElement.getBoundingClientRect)) {
                    var Z = this.getBoundingClientRect(),
                        ab = P.$(document).jGetScroll(),
                        ae = P.browser.getDoc();
                    return {
                        top: Z.top + ab.y - ae.clientTop,
                        left: Z.left + ab.x - ae.clientLeft
                    }
                }
                do {
                    aa += ad.offsetLeft || 0;
                    ac += ad.offsetTop || 0;
                    ad = ad.offsetParent
                } while (ad && !(/^(?:body|html)$/i).test(ad.tagName));
                return {
                    top: ac,
                    left: aa
                }
            },
            jGetRect: function() {
                var aa = this.jGetPosition();
                var Z = this.jGetSize();
                return {
                    top: aa.top,
                    bottom: aa.top + Z.height,
                    left: aa.left,
                    right: aa.left + Z.width
                }
            },
            changeContent: function(aa) {
                try {
                    this.innerHTML = aa
                } catch (Z) {
                    this.innerText = aa
                }
                return this
            },
            jRemove: function() {
                return (this.parentNode) ? this.parentNode.removeChild(this) : this
            },
            kill: function() {
                P.$A(this.childNodes).jEach(function(Z) {
                    if (3 == Z.nodeType || 8 == Z.nodeType) {
                        return
                    }
                    P.$(Z).kill()
                });
                this.jRemove();
                this.jClearEvents();
                if (this.$J_UUID) {
                    P.storage[this.$J_UUID] = null;
                    delete P.storage[this.$J_UUID]
                }
                return null
            },
            append: function(ab, aa) {
                aa = aa || "bottom";
                var Z = this.firstChild;
                ("top" == aa && Z) ? this.insertBefore(ab, Z): this.appendChild(ab);
                return this
            },
            jAppendTo: function(ab, aa) {
                var Z = P.$(ab).append(this, aa);
                return this
            },
            enclose: function(Z) {
                this.append(Z.parentNode.replaceChild(this, Z));
                return this
            },
            hasChild: function(Z) {
                if ("element" !== P.jTypeOf("string" == P.jTypeOf(Z) ? Z = document.getElementById(Z) : Z)) {
                    return false
                }
                return (this == Z) ? false : (this.contains && !(P.browser.webkit419)) ? (this.contains(Z)) : (this.compareDocumentPosition) ? !!(this.compareDocumentPosition(Z) & 16) : P.$A(this.byTag(Z.tagName)).contains(Z)
            }
        };
        P.Element.jGetStyle = P.Element.jGetCss;
        P.Element.jSetStyle = P.Element.jSetCss;
        if (!window.Element) {
            window.Element = P.$F;
            if (P.browser.engine.webkit) {
                window.document.createElement("iframe")
            }
            window.Element.prototype = (P.browser.engine.webkit) ? window["[[DOMElement.prototype]]"] : {}
        }
        P.implement(window.Element, {
            $J_TYPE: "element"
        });
        P.Doc = {
            jGetSize: function() {
                if (P.browser.touchScreen || P.browser.presto925 || P.browser.webkit419) {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                return {
                    width: P.browser.getDoc().clientWidth,
                    height: P.browser.getDoc().clientHeight
                }
            },
            jGetScroll: function() {
                return {
                    x: window.pageXOffset || P.browser.getDoc().scrollLeft,
                    y: window.pageYOffset || P.browser.getDoc().scrollTop
                }
            },
            jGetFullSize: function() {
                var Z = this.jGetSize();
                return {
                    width: Math.max(P.browser.getDoc().scrollWidth, Z.width),
                    height: Math.max(P.browser.getDoc().scrollHeight, Z.height)
                }
            }
        };
        P.extend(document, {
            $J_TYPE: "document"
        });
        P.extend(window, {
            $J_TYPE: "window"
        });
        P.extend([P.Element, P.Doc], {
            jFetch: function(ac, aa) {
                var Z = P.getStorage(this.$J_UUID),
                    ab = Z[ac];
                if (undefined !== aa && undefined === ab) {
                    ab = Z[ac] = aa
                }
                return (P.defined(ab) ? ab : null)
            },
            jStore: function(ab, aa) {
                var Z = P.getStorage(this.$J_UUID);
                Z[ab] = aa;
                return this
            },
            jDel: function(aa) {
                var Z = P.getStorage(this.$J_UUID);
                delete Z[aa];
                return this
            }
        });
        if (!(window.HTMLElement && window.HTMLElement.prototype && window.HTMLElement.prototype.getElementsByClassName)) {
            P.extend([P.Element, P.Doc], {
                getElementsByClassName: function(Z) {
                    return P.$A(this.getElementsByTagName("*")).filter(function(ab) {
                        try {
                            return (1 == ab.nodeType && ab.className.has(Z, " "))
                        } catch (aa) {}
                    })
                }
            })
        }
        P.extend([P.Element, P.Doc], {
            byClass: function() {
                return this.getElementsByClassName(arguments[0])
            },
            byTag: function() {
                return this.getElementsByTagName(arguments[0])
            }
        });
        if (P.browser.fullScreen.capable && !document.requestFullScreen) {
            P.Element.requestFullScreen = function() {
                P.browser.fullScreen.request(this)
            }
        }
        P.Event = {
            $J_TYPE: "event",
            isQueueStopped: P.$false,
            stop: function() {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function() {
                if (this.stopPropagation) {
                    this.stopPropagation()
                } else {
                    this.cancelBubble = true
                }
                return this
            },
            stopDefaults: function() {
                if (this.preventDefault) {
                    this.preventDefault()
                } else {
                    this.returnValue = false
                }
                return this
            },
            stopQueue: function() {
                this.isQueueStopped = P.$true;
                return this
            },
            getClientXY: function() {
                var aa, Z;
                aa = ((/touch/i).test(this.type)) ? this.changedTouches[0] : this;
                return (!P.defined(aa)) ? {
                    x: 0,
                    y: 0
                } : {
                    x: aa.clientX,
                    y: aa.clientY
                }
            },
            jGetPageXY: function() {
                var aa, Z;
                aa = ((/touch/i).test(this.type)) ? this.changedTouches[0] : this;
                return (!P.defined(aa)) ? {
                    x: 0,
                    y: 0
                } : {
                    x: aa.pageX || aa.clientX + P.browser.getDoc().scrollLeft,
                    y: aa.pageY || aa.clientY + P.browser.getDoc().scrollTop
                }
            },
            getTarget: function() {
                var Z = this.target || this.srcElement;
                while (Z && 3 == Z.nodeType) {
                    Z = Z.parentNode
                }
                return Z
            },
            getRelated: function() {
                var aa = null;
                switch (this.type) {
                    case "mouseover":
                    case "pointerover":
                    case "MSPointerOver":
                        aa = this.relatedTarget || this.fromElement;
                        break;
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        aa = this.relatedTarget || this.toElement;
                        break;
                    default:
                        return aa
                }
                try {
                    while (aa && 3 == aa.nodeType) {
                        aa = aa.parentNode
                    }
                } catch (Z) {
                    aa = null
                }
                return aa
            },
            getButton: function() {
                if (!this.which && this.button !== undefined) {
                    return (this.button & 1 ? 1 : (this.button & 2 ? 3 : (this.button & 4 ? 2 : 0)))
                }
                return this.which
            },
            isTouchEvent: function() {
                return (this.pointerType && ("touch" === this.pointerType || this.pointerType === this.MSPOINTER_TYPE_TOUCH)) || (/touch/i).test(this.type)
            },
            isPrimaryTouch: function() {
                return this.pointerType ? (("touch" === this.pointerType || this.MSPOINTER_TYPE_TOUCH === this.pointerType) && this.isPrimary) : 1 === this.changedTouches.length && (this.targetTouches.length ? this.targetTouches[0].identifier == this.changedTouches[0].identifier : true)
            }
        };
        P._event_add_ = "addEventListener";
        P._event_del_ = "removeEventListener";
        P._event_prefix_ = "";
        if (!document.addEventListener) {
            P._event_add_ = "attachEvent";
            P._event_del_ = "detachEvent";
            P._event_prefix_ = "on"
        }
        P.Event.Custom = {
            type: "",
            x: null,
            y: null,
            timeStamp: null,
            button: null,
            target: null,
            relatedTarget: null,
            $J_TYPE: "event.custom",
            isQueueStopped: P.$false,
            events: P.$([]),
            pushToEvents: function(Z) {
                var aa = Z;
                this.events.push(aa)
            },
            stop: function() {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function() {
                this.events.jEach(function(aa) {
                    try {
                        aa.stopDistribution()
                    } catch (Z) {}
                });
                return this
            },
            stopDefaults: function() {
                this.events.jEach(function(aa) {
                    try {
                        aa.stopDefaults()
                    } catch (Z) {}
                });
                return this
            },
            stopQueue: function() {
                this.isQueueStopped = P.$true;
                return this
            },
            getClientXY: function() {
                return {
                    x: this.clientX,
                    y: this.clientY
                }
            },
            jGetPageXY: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            getTarget: function() {
                return this.target
            },
            getRelated: function() {
                return this.relatedTarget
            },
            getButton: function() {
                return this.button
            },
            getOriginalTarget: function() {
                return this.events.length > 0 ? this.events[0].getTarget() : undefined
            }
        };
        P.extend([P.Element, P.Doc], {
            jAddEvent: function(ab, ad, ae, ah) {
                var ag, Z, ac, af, aa;
                if ("string" == P.jTypeOf(ab)) {
                    aa = ab.split(" ");
                    if (aa.length > 1) {
                        ab = aa
                    }
                }
                if (P.jTypeOf(ab) == "array") {
                    P.$(ab).jEach(this.jAddEvent.jBindAsEvent(this, ad, ae, ah));
                    return this
                }
                if (!ab || !ad || P.jTypeOf(ab) != "string" || P.jTypeOf(ad) != "function") {
                    return this
                }
                if (ab == "domready" && P.browser.ready) {
                    ad.call(this);
                    return this
                }
                ab = W[ab] || ab;
                ae = parseInt(ae || 50);
                if (!ad.$J_EUID) {
                    ad.$J_EUID = Math.floor(Math.random() * P.now())
                }
                ag = P.Doc.jFetch.call(this, "_EVENTS_", {});
                Z = ag[ab];
                if (!Z) {
                    ag[ab] = Z = P.$([]);
                    ac = this;
                    if (P.Event.Custom[ab]) {
                        P.Event.Custom[ab].handler.add.call(this, ah)
                    } else {
                        Z.handle = function(ai) {
                            ai = P.extend(ai || window.e, {
                                $J_TYPE: "event"
                            });
                            P.Doc.jCallEvent.call(ac, ab, P.$(ai))
                        };
                        this[P._event_add_](P._event_prefix_ + ab, Z.handle, false)
                    }
                }
                af = {
                    type: ab,
                    fn: ad,
                    priority: ae,
                    euid: ad.$J_EUID
                };
                Z.push(af);
                Z.sort(function(aj, ai) {
                    return aj.priority - ai.priority
                });
                return this
            },
            jRemoveEvent: function(af) {
                var ad = P.Doc.jFetch.call(this, "_EVENTS_", {}),
                    ab, Z, aa, ag, ae, ac;
                ae = arguments.length > 1 ? arguments[1] : -100;
                if ("string" == P.jTypeOf(af)) {
                    ac = af.split(" ");
                    if (ac.length > 1) {
                        af = ac
                    }
                }
                if (P.jTypeOf(af) == "array") {
                    P.$(af).jEach(this.jRemoveEvent.jBindAsEvent(this, ae));
                    return this
                }
                af = W[af] || af;
                if (!af || P.jTypeOf(af) != "string" || !ad || !ad[af]) {
                    return this
                }
                ab = ad[af] || [];
                for (aa = 0; aa < ab.length; aa++) {
                    Z = ab[aa];
                    if (-100 == ae || !!ae && ae.$J_EUID === Z.euid) {
                        ag = ab.splice(aa--, 1)
                    }
                }
                if (0 === ab.length) {
                    if (P.Event.Custom[af]) {
                        P.Event.Custom[af].handler.jRemove.call(this)
                    } else {
                        this[P._event_del_](P._event_prefix_ + af, ab.handle, false)
                    }
                    delete ad[af]
                }
                return this
            },
            jCallEvent: function(ad, af) {
                var ac = P.Doc.jFetch.call(this, "_EVENTS_", {}),
                    ab, Z, aa;
                ad = W[ad] || ad;
                if (!ad || P.jTypeOf(ad) != "string" || !ac || !ac[ad]) {
                    return this
                }
                try {
                    af = P.extend(af || {}, {
                        type: ad
                    })
                } catch (ae) {}
                if (undefined === af.timeStamp) {
                    af.timeStamp = P.now()
                }
                ab = ac[ad] || [];
                for (aa = 0; aa < ab.length && !(af.isQueueStopped && af.isQueueStopped()); aa++) {
                    ab[aa].fn.call(this, af)
                }
            },
            jRaiseEvent: function(aa, Z) {
                var ad = ("domready" == aa) ? false : true,
                    ac = this,
                    ab;
                aa = W[aa] || aa;
                if (!ad) {
                    P.Doc.jCallEvent.call(this, aa);
                    return this
                }
                if (ac === document && document.createEvent && !ac.dispatchEvent) {
                    ac = document.documentElement
                }
                if (document.createEvent) {
                    ab = document.createEvent(aa);
                    ab.initEvent(Z, true, true)
                } else {
                    ab = document.createEventObject();
                    ab.eventType = aa
                }
                if (document.createEvent) {
                    ac.dispatchEvent(ab)
                } else {
                    ac.fireEvent("on" + Z, ab)
                }
                return ab
            },
            jClearEvents: function() {
                var aa = P.Doc.jFetch.call(this, "_EVENTS_");
                if (!aa) {
                    return this
                }
                for (var Z in aa) {
                    P.Doc.jRemoveEvent.call(this, Z)
                }
                P.Doc.jDel.call(this, "_EVENTS_");
                return this
            }
        });
        (function(Z) {
            if ("complete" === document.readyState) {
                return Z.browser.onready.jDelay(1)
            }
            if (Z.browser.webkit && Z.browser.version < 420) {
                (function() {
                    (Z.$(["loaded", "complete"]).contains(document.readyState)) ? Z.browser.onready(): arguments.callee.jDelay(50)
                })()
            } else {
                if (Z.browser.trident && Z.browser.ieMode < 9 && window == top) {
                    (function() {
                        (Z.$try(function() {
                            Z.browser.getDoc().doScroll("left");
                            return true
                        })) ? Z.browser.onready(): arguments.callee.jDelay(50)
                    })()
                } else {
                    Z.Doc.jAddEvent.call(Z.$(document), "DOMContentLoaded", Z.browser.onready);
                    Z.Doc.jAddEvent.call(Z.$(window), "load", Z.browser.onready)
                }
            }
        })(V);
        P.Class = function() {
            var ad = null,
                aa = P.$A(arguments);
            if ("class" == P.jTypeOf(aa[0])) {
                ad = aa.shift()
            }
            var Z = function() {
                for (var ag in this) {
                    this[ag] = P.detach(this[ag])
                }
                if (this.constructor.$parent) {
                    this.$parent = {};
                    var ai = this.constructor.$parent;
                    for (var ah in ai) {
                        var af = ai[ah];
                        switch (P.jTypeOf(af)) {
                            case "function":
                                this.$parent[ah] = P.Class.wrap(this, af);
                                break;
                            case "object":
                                this.$parent[ah] = P.detach(af);
                                break;
                            case "array":
                                this.$parent[ah] = P.detach(af);
                                break
                        }
                    }
                }
                var ae = (this.init) ? this.init.apply(this, arguments) : this;
                delete this.caller;
                return ae
            };
            if (!Z.prototype.init) {
                Z.prototype.init = P.$F
            }
            if (ad) {
                var ac = function() {};
                ac.prototype = ad.prototype;
                Z.prototype = new ac;
                Z.$parent = {};
                for (var ab in ad.prototype) {
                    Z.$parent[ab] = ad.prototype[ab]
                }
            } else {
                Z.$parent = null
            }
            Z.constructor = P.Class;
            Z.prototype.constructor = Z;
            P.extend(Z.prototype, aa[0]);
            P.extend(Z, {
                $J_TYPE: "class"
            });
            return Z
        };
        V.Class.wrap = function(Z, aa) {
            return function() {
                var ac = this.caller;
                var ab = aa.apply(Z, arguments);
                return ab
            }
        };
        (function(ac) {
            var ab = ac.$;
            var Z = 5,
                aa = 300;
            ac.Event.Custom.btnclick = new ac.Class(ac.extend(ac.Event.Custom, {
                type: "btnclick",
                init: function(af, ae) {
                    var ad = ae.jGetPageXY();
                    this.x = ad.x;
                    this.y = ad.y;
                    this.clientX = ae.clientX;
                    this.clientY = ae.clientY;
                    this.timeStamp = ae.timeStamp;
                    this.button = ae.getButton();
                    this.target = af;
                    this.pushToEvents(ae)
                }
            }));
            ac.Event.Custom.btnclick.handler = {
                options: {
                    threshold: aa,
                    button: 1
                },
                add: function(ad) {
                    this.jStore("event:btnclick:options", ac.extend(ac.detach(ac.Event.Custom.btnclick.handler.options), ad || {}));
                    this.jAddEvent("mousedown", ac.Event.Custom.btnclick.handler.handle, 1);
                    this.jAddEvent("mouseup", ac.Event.Custom.btnclick.handler.handle, 1);
                    this.jAddEvent("click", ac.Event.Custom.btnclick.handler.onclick, 1);
                    if (ac.browser.trident && ac.browser.ieMode < 9) {
                        this.jAddEvent("dblclick", ac.Event.Custom.btnclick.handler.handle, 1)
                    }
                },
                jRemove: function() {
                    this.jRemoveEvent("mousedown", ac.Event.Custom.btnclick.handler.handle);
                    this.jRemoveEvent("mouseup", ac.Event.Custom.btnclick.handler.handle);
                    this.jRemoveEvent("click", ac.Event.Custom.btnclick.handler.onclick);
                    if (ac.browser.trident && ac.browser.ieMode < 9) {
                        this.jRemoveEvent("dblclick", ac.Event.Custom.btnclick.handler.handle)
                    }
                },
                onclick: function(ad) {
                    ad.stopDefaults()
                },
                handle: function(ag) {
                    var af, ad, ae;
                    ad = this.jFetch("event:btnclick:options");
                    if (ag.type != "dblclick" && ag.getButton() != ad.button) {
                        return
                    }
                    if (this.jFetch("event:btnclick:ignore")) {
                        this.jDel("event:btnclick:ignore");
                        return
                    }
                    if ("mousedown" == ag.type) {
                        af = new ac.Event.Custom.btnclick(this, ag);
                        this.jStore("event:btnclick:btnclickEvent", af)
                    } else {
                        if ("mouseup" == ag.type) {
                            af = this.jFetch("event:btnclick:btnclickEvent");
                            if (!af) {
                                return
                            }
                            ae = ag.jGetPageXY();
                            this.jDel("event:btnclick:btnclickEvent");
                            af.pushToEvents(ag);
                            if (ag.timeStamp - af.timeStamp <= ad.threshold && Math.sqrt(Math.pow(ae.x - af.x, 2) + Math.pow(ae.y - af.y, 2)) <= Z) {
                                this.jCallEvent("btnclick", af)
                            }
                            document.jCallEvent("mouseup", ag)
                        } else {
                            if (ag.type == "dblclick") {
                                af = new ac.Event.Custom.btnclick(this, ag);
                                this.jCallEvent("btnclick", af)
                            }
                        }
                    }
                }
            }
        })(V);
        (function(aa) {
            var Z = aa.$;
            aa.Event.Custom.mousedrag = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "mousedrag",
                state: "dragstart",
                dragged: false,
                init: function(ae, ad, ac) {
                    var ab = ad.jGetPageXY();
                    this.x = ab.x;
                    this.y = ab.y;
                    this.clientX = ad.clientX;
                    this.clientY = ad.clientY;
                    this.timeStamp = ad.timeStamp;
                    this.button = ad.getButton();
                    this.target = ae;
                    this.pushToEvents(ad);
                    this.state = ac
                }
            }));
            aa.Event.Custom.mousedrag.handler = {
                add: function() {
                    var ac = aa.Event.Custom.mousedrag.handler.handleMouseMove.jBindAsEvent(this),
                        ab = aa.Event.Custom.mousedrag.handler.handleMouseUp.jBindAsEvent(this);
                    this.jAddEvent("mousedown", aa.Event.Custom.mousedrag.handler.handleMouseDown, 1);
                    this.jAddEvent("mouseup", aa.Event.Custom.mousedrag.handler.handleMouseUp, 1);
                    document.jAddEvent("mousemove", ac, 1);
                    document.jAddEvent("mouseup", ab, 1);
                    this.jStore("event:mousedrag:listeners:document:move", ac);
                    this.jStore("event:mousedrag:listeners:document:end", ab)
                },
                jRemove: function() {
                    this.jRemoveEvent("mousedown", aa.Event.Custom.mousedrag.handler.handleMouseDown);
                    this.jRemoveEvent("mouseup", aa.Event.Custom.mousedrag.handler.handleMouseUp);
                    Z(document).jRemoveEvent("mousemove", this.jFetch("event:mousedrag:listeners:document:move") || aa.$F);
                    Z(document).jRemoveEvent("mouseup", this.jFetch("event:mousedrag:listeners:document:end") || aa.$F);
                    this.jDel("event:mousedrag:listeners:document:move");
                    this.jDel("event:mousedrag:listeners:document:end")
                },
                handleMouseDown: function(ac) {
                    var ab;
                    if (1 != ac.getButton()) {
                        return
                    }
                    ab = new aa.Event.Custom.mousedrag(this, ac, "dragstart");
                    this.jStore("event:mousedrag:dragstart", ab)
                },
                handleMouseUp: function(ac) {
                    var ab;
                    ab = this.jFetch("event:mousedrag:dragstart");
                    if (!ab) {
                        return
                    }
                    ac.stopDefaults();
                    ab = new aa.Event.Custom.mousedrag(this, ac, "dragend");
                    this.jDel("event:mousedrag:dragstart");
                    this.jCallEvent("mousedrag", ab)
                },
                handleMouseMove: function(ac) {
                    var ab;
                    ab = this.jFetch("event:mousedrag:dragstart");
                    if (!ab) {
                        return
                    }
                    ac.stopDefaults();
                    if (!ab.dragged) {
                        ab.dragged = true;
                        this.jCallEvent("mousedrag", ab)
                    }
                    ab = new aa.Event.Custom.mousedrag(this, ac, "dragmove");
                    this.jCallEvent("mousedrag", ab)
                }
            }
        })(V);
        (function(aa) {
            var Z = aa.$;
            aa.Event.Custom.dblbtnclick = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "dblbtnclick",
                timedout: false,
                tm: null,
                init: function(ad, ac) {
                    var ab = ac.jGetPageXY();
                    this.x = ab.x;
                    this.y = ab.y;
                    this.clientX = ac.clientX;
                    this.clientY = ac.clientY;
                    this.timeStamp = ac.timeStamp;
                    this.button = ac.getButton();
                    this.target = ad;
                    this.pushToEvents(ac)
                }
            }));
            aa.Event.Custom.dblbtnclick.handler = {
                options: {
                    threshold: 200
                },
                add: function(ab) {
                    this.jStore("event:dblbtnclick:options", aa.extend(aa.detach(aa.Event.Custom.dblbtnclick.handler.options), ab || {}));
                    this.jAddEvent("btnclick", aa.Event.Custom.dblbtnclick.handler.handle, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent("btnclick", aa.Event.Custom.dblbtnclick.handler.handle)
                },
                handle: function(ad) {
                    var ac, ab;
                    ac = this.jFetch("event:dblbtnclick:event");
                    ab = this.jFetch("event:dblbtnclick:options");
                    if (!ac) {
                        ac = new aa.Event.Custom.dblbtnclick(this, ad);
                        ac.tm = setTimeout(function() {
                            ac.timedout = true;
                            ad.isQueueStopped = aa.$false;
                            this.jCallEvent("btnclick", ad);
                            this.jDel("event:dblbtnclick:event")
                        }.jBind(this), ab.threshold + 10);
                        this.jStore("event:dblbtnclick:event", ac);
                        ad.stopQueue()
                    } else {
                        clearTimeout(ac.tm);
                        this.jDel("event:dblbtnclick:event");
                        if (!ac.timedout) {
                            ac.pushToEvents(ad);
                            ad.stopQueue().stop();
                            this.jCallEvent("dblbtnclick", ac)
                        } else {}
                    }
                }
            }
        })(V);
        (function(af) {
            var ae = af.$;

            function Z(ag) {
                return ag.pointerType ? (("touch" === ag.pointerType || ag.MSPOINTER_TYPE_TOUCH === ag.pointerType) && ag.isPrimary) : 1 === ag.changedTouches.length && (ag.targetTouches.length ? ag.targetTouches[0].identifier == ag.changedTouches[0].identifier : true)
            }

            function ab(ag) {
                if (ag.pointerType) {
                    return ("touch" === ag.pointerType || ag.MSPOINTER_TYPE_TOUCH === ag.pointerType) ? ag.pointerId : null
                } else {
                    return ag.changedTouches[0].identifier
                }
            }

            function ac(ag) {
                if (ag.pointerType) {
                    return ("touch" === ag.pointerType || ag.MSPOINTER_TYPE_TOUCH === ag.pointerType) ? ag : null
                } else {
                    return ag.changedTouches[0]
                }
            }
            af.Event.Custom.tap = new af.Class(af.extend(af.Event.Custom, {
                type: "tap",
                id: null,
                init: function(ah, ag) {
                    var ai = ac(ag);
                    this.id = ai.pointerId || ai.identifier;
                    this.x = ai.pageX;
                    this.y = ai.pageY;
                    this.pageX = ai.pageX;
                    this.pageY = ai.pageY;
                    this.clientX = ai.clientX;
                    this.clientY = ai.clientY;
                    this.timeStamp = ag.timeStamp;
                    this.button = 0;
                    this.target = ah;
                    this.pushToEvents(ag)
                }
            }));
            var aa = 10,
                ad = 200;
            af.Event.Custom.tap.handler = {
                add: function(ag) {
                    this.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], af.Event.Custom.tap.handler.onTouchStart, 1);
                    this.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], af.Event.Custom.tap.handler.onTouchEnd, 1);
                    this.jAddEvent("click", af.Event.Custom.tap.handler.onClick, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], af.Event.Custom.tap.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], af.Event.Custom.tap.handler.onTouchEnd);
                    this.jRemoveEvent("click", af.Event.Custom.tap.handler.onClick)
                },
                onClick: function(ag) {
                    ag.stopDefaults()
                },
                onTouchStart: function(ag) {
                    if (!Z(ag)) {
                        this.jDel("event:tap:event");
                        return
                    }
                    this.jStore("event:tap:event", new af.Event.Custom.tap(this, ag));
                    this.jStore("event:btnclick:ignore", true)
                },
                onTouchEnd: function(aj) {
                    var ah = af.now(),
                        ai = this.jFetch("event:tap:event"),
                        ag = this.jFetch("event:tap:options");
                    if (!ai || !Z(aj)) {
                        return
                    }
                    this.jDel("event:tap:event");
                    if (ai.id == ab(aj) && aj.timeStamp - ai.timeStamp <= ad && Math.sqrt(Math.pow(ac(aj).pageX - ai.x, 2) + Math.pow(ac(aj).pageY - ai.y, 2)) <= aa) {
                        this.jDel("event:btnclick:btnclickEvent");
                        aj.stop();
                        ai.pushToEvents(aj);
                        this.jCallEvent("tap", ai)
                    }
                }
            }
        })(V);
        P.Event.Custom.dbltap = new P.Class(P.extend(P.Event.Custom, {
            type: "dbltap",
            timedout: false,
            tm: null,
            init: function(aa, Z) {
                this.x = Z.x;
                this.y = Z.y;
                this.clientX = Z.clientX;
                this.clientY = Z.clientY;
                this.timeStamp = Z.timeStamp;
                this.button = 0;
                this.target = aa;
                this.pushToEvents(Z)
            }
        }));
        P.Event.Custom.dbltap.handler = {
            options: {
                threshold: 300
            },
            add: function(Z) {
                this.jStore("event:dbltap:options", P.extend(P.detach(P.Event.Custom.dbltap.handler.options), Z || {}));
                this.jAddEvent("tap", P.Event.Custom.dbltap.handler.handle, 1)
            },
            jRemove: function() {
                this.jRemoveEvent("tap", P.Event.Custom.dbltap.handler.handle)
            },
            handle: function(ab) {
                var aa, Z;
                aa = this.jFetch("event:dbltap:event");
                Z = this.jFetch("event:dbltap:options");
                if (!aa) {
                    aa = new P.Event.Custom.dbltap(this, ab);
                    aa.tm = setTimeout(function() {
                        aa.timedout = true;
                        ab.isQueueStopped = P.$false;
                        this.jCallEvent("tap", ab)
                    }.jBind(this), Z.threshold + 10);
                    this.jStore("event:dbltap:event", aa);
                    ab.stopQueue()
                } else {
                    clearTimeout(aa.tm);
                    this.jDel("event:dbltap:event");
                    if (!aa.timedout) {
                        aa.pushToEvents(ab);
                        ab.stopQueue().stop();
                        this.jCallEvent("dbltap", aa)
                    } else {}
                }
            }
        };
        (function(ae) {
            var ad = ae.$;

            function Z(af) {
                return af.pointerType ? (("touch" === af.pointerType || af.MSPOINTER_TYPE_TOUCH === af.pointerType) && af.isPrimary) : 1 === af.changedTouches.length && (af.targetTouches.length ? af.targetTouches[0].identifier == af.changedTouches[0].identifier : true)
            }

            function ab(af) {
                if (af.pointerType) {
                    return ("touch" === af.pointerType || af.MSPOINTER_TYPE_TOUCH === af.pointerType) ? af.pointerId : null
                } else {
                    return af.changedTouches[0].identifier
                }
            }

            function ac(af) {
                if (af.pointerType) {
                    return ("touch" === af.pointerType || af.MSPOINTER_TYPE_TOUCH === af.pointerType) ? af : null
                } else {
                    return af.changedTouches[0]
                }
            }
            var aa = 10;
            ae.Event.Custom.touchdrag = new ae.Class(ae.extend(ae.Event.Custom, {
                type: "touchdrag",
                state: "dragstart",
                id: null,
                dragged: false,
                init: function(ah, ag, af) {
                    var ai = ac(ag);
                    this.id = ai.pointerId || ai.identifier;
                    this.clientX = ai.clientX;
                    this.clientY = ai.clientY;
                    this.pageX = ai.pageX;
                    this.pageY = ai.pageY;
                    this.x = ai.pageX;
                    this.y = ai.pageY;
                    this.timeStamp = ag.timeStamp;
                    this.button = 0;
                    this.target = ah;
                    this.pushToEvents(ag);
                    this.state = af
                }
            }));
            ae.Event.Custom.touchdrag.handler = {
                add: function() {
                    var ag = ae.Event.Custom.touchdrag.handler.onTouchMove.jBind(this),
                        af = ae.Event.Custom.touchdrag.handler.onTouchEnd.jBind(this);
                    this.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], ae.Event.Custom.touchdrag.handler.onTouchStart, 1);
                    this.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], ae.Event.Custom.touchdrag.handler.onTouchEnd, 1);
                    this.jAddEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"], ae.Event.Custom.touchdrag.handler.onTouchMove, 1);
                    this.jStore("event:touchdrag:listeners:document:move", ag);
                    this.jStore("event:touchdrag:listeners:document:end", af);
                    ad(document).jAddEvent(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove", ag, 1);
                    ad(document).jAddEvent(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp", af, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], ae.Event.Custom.touchdrag.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], ae.Event.Custom.touchdrag.handler.onTouchEnd);
                    this.jRemoveEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"], ae.Event.Custom.touchdrag.handler.onTouchMove);
                    ad(document).jRemoveEvent(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove", this.jFetch("event:touchdrag:listeners:document:move") || ae.$F, 1);
                    ad(document).jRemoveEvent(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp", this.jFetch("event:touchdrag:listeners:document:end") || ae.$F, 1);
                    this.jDel("event:touchdrag:listeners:document:move");
                    this.jDel("event:touchdrag:listeners:document:end")
                },
                onTouchStart: function(ag) {
                    var af;
                    if (!Z(ag)) {
                        return
                    }
                    af = new ae.Event.Custom.touchdrag(this, ag, "dragstart");
                    this.jStore("event:touchdrag:dragstart", af)
                },
                onTouchEnd: function(ag) {
                    var af;
                    af = this.jFetch("event:touchdrag:dragstart");
                    if (!af || !af.dragged || af.id != ab(ag)) {
                        return
                    }
                    af = new ae.Event.Custom.touchdrag(this, ag, "dragend");
                    this.jDel("event:touchdrag:dragstart");
                    this.jCallEvent("touchdrag", af)
                },
                onTouchMove: function(ag) {
                    var af;
                    af = this.jFetch("event:touchdrag:dragstart");
                    if (!af || !Z(ag)) {
                        return
                    }
                    if (af.id != ab(ag)) {
                        this.jDel("event:touchdrag:dragstart");
                        return
                    }
                    if (!af.dragged && Math.sqrt(Math.pow(ac(ag).pageX - af.x, 2) + Math.pow(ac(ag).pageY - af.y, 2)) > aa) {
                        af.dragged = true;
                        this.jCallEvent("touchdrag", af)
                    }
                    if (!af.dragged) {
                        return
                    }
                    af = new ae.Event.Custom.touchdrag(this, ag, "dragmove");
                    this.jCallEvent("touchdrag", af)
                }
            }
        })(V);
        P.Event.Custom.touchpinch = new P.Class(P.extend(P.Event.Custom, {
            type: "touchpinch",
            scale: 1,
            previousScale: 1,
            curScale: 1,
            state: "pinchstart",
            init: function(aa, Z) {
                this.timeStamp = Z.timeStamp;
                this.button = 0;
                this.target = aa;
                this.x = Z.touches[0].clientX + (Z.touches[1].clientX - Z.touches[0].clientX) / 2;
                this.y = Z.touches[0].clientY + (Z.touches[1].clientY - Z.touches[0].clientY) / 2;
                this._initialDistance = Math.sqrt(Math.pow(Z.touches[0].clientX - Z.touches[1].clientX, 2) + Math.pow(Z.touches[0].clientY - Z.touches[1].clientY, 2));
                this.pushToEvents(Z)
            },
            update: function(Z) {
                var aa;
                this.state = "pinchupdate";
                if (Z.changedTouches[0].identifier != this.events[0].touches[0].identifier || Z.changedTouches[1].identifier != this.events[0].touches[1].identifier) {
                    return
                }
                aa = Math.sqrt(Math.pow(Z.changedTouches[0].clientX - Z.changedTouches[1].clientX, 2) + Math.pow(Z.changedTouches[0].clientY - Z.changedTouches[1].clientY, 2));
                this.previousScale = this.scale;
                this.scale = aa / this._initialDistance;
                this.curScale = this.scale / this.previousScale;
                this.x = Z.changedTouches[0].clientX + (Z.changedTouches[1].clientX - Z.changedTouches[0].clientX) / 2;
                this.y = Z.changedTouches[0].clientY + (Z.changedTouches[1].clientY - Z.changedTouches[0].clientY) / 2;
                this.pushToEvents(Z)
            }
        }));
        P.Event.Custom.touchpinch.handler = {
            add: function() {
                this.jAddEvent("touchstart", P.Event.Custom.touchpinch.handler.handleTouchStart, 1);
                this.jAddEvent("touchend", P.Event.Custom.touchpinch.handler.handleTouchEnd, 1);
                this.jAddEvent("touchmove", P.Event.Custom.touchpinch.handler.handleTouchMove, 1)
            },
            jRemove: function() {
                this.jRemoveEvent("touchstart", P.Event.Custom.touchpinch.handler.handleTouchStart);
                this.jRemoveEvent("touchend", P.Event.Custom.touchpinch.handler.handleTouchEnd);
                this.jRemoveEvent("touchmove", P.Event.Custom.touchpinch.handler.handleTouchMove)
            },
            handleTouchStart: function(aa) {
                var Z;
                if (aa.touches.length != 2) {
                    return
                }
                aa.stopDefaults();
                Z = new P.Event.Custom.touchpinch(this, aa);
                this.jStore("event:touchpinch:event", Z)
            },
            handleTouchEnd: function(aa) {
                var Z;
                Z = this.jFetch("event:touchpinch:event");
                if (!Z) {
                    return
                }
                aa.stopDefaults();
                this.jDel("event:touchpinch:event")
            },
            handleTouchMove: function(aa) {
                var Z;
                Z = this.jFetch("event:touchpinch:event");
                if (!Z) {
                    return
                }
                aa.stopDefaults();
                Z.update(aa);
                this.jCallEvent("touchpinch", Z)
            }
        };
        (function(ae) {
            var ac = ae.$;
            ae.Event.Custom.mousescroll = new ae.Class(ae.extend(ae.Event.Custom, {
                type: "mousescroll",
                init: function(ak, aj, am, ag, af, al, ah) {
                    var ai = aj.jGetPageXY();
                    this.x = ai.x;
                    this.y = ai.y;
                    this.timeStamp = aj.timeStamp;
                    this.target = ak;
                    this.delta = am || 0;
                    this.deltaX = ag || 0;
                    this.deltaY = af || 0;
                    this.deltaZ = al || 0;
                    this.deltaFactor = ah || 0;
                    this.deltaMode = aj.deltaMode || 0;
                    this.isMouse = false;
                    this.pushToEvents(aj)
                }
            }));
            var ad, aa;

            function Z() {
                ad = null
            }

            function ab(af, ag) {
                return (af > 50) || (1 === ag && !("win" == ae.browser.platform && af < 1)) || (0 === af % 12) || (0 == af % 4.000244140625)
            }
            ae.Event.Custom.mousescroll.handler = {
                eventType: "onwheel" in document || ae.browser.ieMode > 8 ? "wheel" : "mousewheel",
                add: function() {
                    this.jAddEvent(ae.Event.Custom.mousescroll.handler.eventType, ae.Event.Custom.mousescroll.handler.handle, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(ae.Event.Custom.mousescroll.handler.eventType, ae.Event.Custom.mousescroll.handler.handle, 1)
                },
                handle: function(ak) {
                    var al = 0,
                        ai = 0,
                        ag = 0,
                        af = 0,
                        aj, ah;
                    if (ak.detail) {
                        ag = ak.detail * -1
                    }
                    if (ak.wheelDelta !== undefined) {
                        ag = ak.wheelDelta
                    }
                    if (ak.wheelDeltaY !== undefined) {
                        ag = ak.wheelDeltaY
                    }
                    if (ak.wheelDeltaX !== undefined) {
                        ai = ak.wheelDeltaX * -1
                    }
                    if (ak.deltaY) {
                        ag = -1 * ak.deltaY
                    }
                    if (ak.deltaX) {
                        ai = ak.deltaX
                    }
                    if (0 === ag && 0 === ai) {
                        return
                    }
                    al = 0 === ag ? ai : ag;
                    af = Math.max(Math.abs(ag), Math.abs(ai));
                    if (!ad || af < ad) {
                        ad = af
                    }
                    aj = al > 0 ? "floor" : "ceil";
                    al = Math[aj](al / ad);
                    ai = Math[aj](ai / ad);
                    ag = Math[aj](ag / ad);
                    if (aa) {
                        clearTimeout(aa)
                    }
                    aa = setTimeout(Z, 200);
                    ah = new ae.Event.Custom.mousescroll(this, ak, al, ai, ag, 0, ad);
                    ah.isMouse = ab(ad, ak.deltaMode || 0);
                    this.jCallEvent("mousescroll", ah)
                }
            }
        })(V);
        P.win = P.$(window);
        P.doc = P.$(document);
        return V
    })();
    (function(L) {
        if (!L) {
            throw "MagicJS not found"
        }
        var K = L.$;
        var J = window.URL || window.webkitURL || null;
        z.ImageLoader = new L.Class({
            img: null,
            ready: false,
            options: {
                onprogress: L.$F,
                onload: L.$F,
                onabort: L.$F,
                onerror: L.$F,
                oncomplete: L.$F,
                onxhrerror: L.$F,
                xhr: false,
                progressiveLoad: true
            },
            size: null,
            _timer: null,
            loadedBytes: 0,
            _handlers: {
                onprogress: function(M) {
                    if (M.target && (200 === M.target.status || 304 === M.target.status) && M.lengthComputable) {
                        this.options.onprogress.jBind(null, (M.loaded - (this.options.progressiveLoad ? this.loadedBytes : 0)) / M.total).jDelay(1);
                        this.loadedBytes = M.loaded
                    }
                },
                onload: function(M) {
                    if (M) {
                        K(M).stop()
                    }
                    this._unbind();
                    if (this.ready) {
                        return
                    }
                    this.ready = true;
                    this._cleanup();
                    !this.options.xhr && this.options.onprogress.jBind(null, 1).jDelay(1);
                    this.options.onload.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                },
                onabort: function(M) {
                    if (M) {
                        K(M).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onabort.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                },
                onerror: function(M) {
                    if (M) {
                        K(M).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onerror.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                }
            },
            _bind: function() {
                K(["load", "abort", "error"]).jEach(function(M) {
                    this.img.jAddEvent(M, this._handlers["on" + M].jBindAsEvent(this).jDefer(1))
                }, this)
            },
            _unbind: function() {
                if (this._timer) {
                    try {
                        clearTimeout(this._timer)
                    } catch (M) {}
                    this._timer = null
                }
                K(["load", "abort", "error"]).jEach(function(N) {
                    this.img.jRemoveEvent(N)
                }, this)
            },
            _cleanup: function() {
                this.jGetSize();
                if (this.img.jFetch("new")) {
                    var M = this.img.parentNode;
                    this.img.jRemove().jDel("new").jSetCss({
                        position: "static",
                        top: "auto"
                    });
                    M.kill()
                }
            },
            loadBlob: function(N) {
                var O = new XMLHttpRequest(),
                    M;
                K(["abort", "progress"]).jEach(function(P) {
                    O["on" + P] = K(function(Q) {
                        this._handlers["on" + P].call(this, Q)
                    }).jBind(this)
                }, this);
                O.onerror = K(function() {
                    this.options.onxhrerror.jBind(null, this).jDelay(1);
                    this.options.xhr = false;
                    this._bind();
                    this.img.src = N
                }).jBind(this);
                O.onload = K(function() {
                    if (200 !== O.status && 304 !== O.status) {
                        this._handlers.onerror.call(this);
                        return
                    }
                    M = O.response;
                    this._bind();
                    if (J && !L.browser.trident && !("ios" === L.browser.platform && L.browser.version < 537)) {
                        this.img.setAttribute("src", J.createObjectURL(M))
                    } else {
                        this.img.src = N
                    }
                }).jBind(this);
                O.open("GET", N);
                O.responseType = "blob";
                O.send()
            },
            init: function(N, M) {
                this.options = L.extend(this.options, M);
                this.img = K(N) || L.$new("img", {}, {
                        "max-width": "none",
                        "max-height": "none"
                    }).jAppendTo(L.$new("div").jAddClass("magic-temporary-img").jSetCss({
                        position: "absolute",
                        top: -10000,
                        width: 10,
                        height: 10,
                        overflow: "hidden"
                    }).jAppendTo(document.body)).jStore("new", true);
                if (L.browser.features.xhr2 && this.options.xhr && "string" == L.jTypeOf(N)) {
                    this.loadBlob(N);
                    return
                }
                var O = function() {
                    if (this.isReady()) {
                        this._handlers.onload.call(this)
                    } else {
                        this._handlers.onerror.call(this)
                    }
                    O = null
                }.jBind(this);
                this._bind();
                if ("string" == L.jTypeOf(N)) {
                    this.img.src = N
                } else {
                    if (L.browser.trident && 5 == L.browser.version && L.browser.ieMode < 9) {
                        this.img.onreadystatechange = function() {
                            if (/loaded|complete/.test(this.img.readyState)) {
                                this.img.onreadystatechange = null;
                                O && O()
                            }
                        }.jBind(this)
                    }
                    this.img.src = N.getAttribute("src")
                }
                this.img && this.img.complete && O && (this._timer = O.jDelay(100))
            },
            destroy: function() {
                this._unbind();
                this._cleanup();
                this.ready = false;
                return this
            },
            isReady: function() {
                var M = this.img;
                return (M.naturalWidth) ? (M.naturalWidth > 0) : (M.readyState) ? ("complete" == M.readyState) : M.width > 0
            },
            jGetSize: function() {
                return this.size || (this.size = {
                        width: this.img.naturalWidth || this.img.width,
                        height: this.img.naturalHeight || this.img.height
                    })
            }
        })
    })(z);
    (function(K) {
        if (!K) {
            throw "MagicJS not found"
        }
        if (K.FX) {
            return
        }
        var J = K.$;
        K.FX = new K.Class({
            init: function(M, L) {
                var N;
                this.el = K.$(M);
                this.options = K.extend(this.options, L);
                this.timer = false;
                this.easeFn = this.cubicBezierAtTime;
                N = K.FX.Transition[this.options.transition] || this.options.transition;
                if ("function" === K.jTypeOf(N)) {
                    this.easeFn = N
                } else {
                    this.cubicBezier = this.parseCubicBezier(N) || this.parseCubicBezier("ease")
                }
                if ("string" == K.jTypeOf(this.options.cycles)) {
                    this.options.cycles = "infinite" === this.options.cycles ? Infinity : parseInt(this.options.cycles) || 1
                }
            },
            options: {
                fps: 60,
                duration: 600,
                transition: "ease",
                cycles: 1,
                direction: "normal",
                onStart: K.$F,
                onComplete: K.$F,
                onBeforeRender: K.$F,
                onAfterRender: K.$F,
                forceAnimation: false,
                roundCss: false
            },
            styles: null,
            cubicBezier: null,
            easeFn: null,
            setTransition: function(L) {
                this.options.transition = L;
                L = K.FX.Transition[this.options.transition] || this.options.transition;
                if ("function" === K.jTypeOf(L)) {
                    this.easeFn = L
                } else {
                    this.easeFn = this.cubicBezierAtTime;
                    this.cubicBezier = this.parseCubicBezier(L) || this.parseCubicBezier("ease")
                }
            },
            start: function(N) {
                var L = /\%$/,
                    M;
                this.styles = N || {};
                this.cycle = 0;
                this.state = 0;
                this.curFrame = 0;
                this.pStyles = {};
                this.alternate = "alternate" === this.options.direction || "alternate-reverse" === this.options.direction;
                this.continuous = "continuous" === this.options.direction || "continuous-reverse" === this.options.direction;
                for (M in this.styles) {
                    L.test(this.styles[M][0]) && (this.pStyles[M] = true);
                    if ("reverse" === this.options.direction || "alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction) {
                        this.styles[M].reverse()
                    }
                }
                this.startTime = K.now();
                this.finishTime = this.startTime + this.options.duration;
                this.options.onStart.call();
                if (0 === this.options.duration) {
                    this.render(1);
                    this.options.onComplete.call()
                } else {
                    this.loopBind = this.loop.jBind(this);
                    if (!this.options.forceAnimation && K.browser.features.requestAnimationFrame) {
                        this.timer = K.browser.requestAnimationFrame.call(window, this.loopBind)
                    } else {
                        this.timer = this.loopBind.interval(Math.round(1000 / this.options.fps))
                    }
                }
                return this
            },
            stopAnimation: function() {
                if (this.timer) {
                    if (!this.options.forceAnimation && K.browser.features.requestAnimationFrame && K.browser.cancelAnimationFrame) {
                        K.browser.cancelAnimationFrame.call(window, this.timer)
                    } else {
                        clearInterval(this.timer)
                    }
                    this.timer = false
                }
            },
            stop: function(L) {
                L = K.defined(L) ? L : false;
                this.stopAnimation();
                if (L) {
                    this.render(1);
                    this.options.onComplete.jDelay(10)
                }
                return this
            },
            calc: function(N, M, L) {
                N = parseFloat(N);
                M = parseFloat(M);
                return (M - N) * L + N
            },
            loop: function() {
                var M = K.now(),
                    L = (M - this.startTime) / this.options.duration,
                    N = Math.floor(L);
                if (M >= this.finishTime && N >= this.options.cycles) {
                    this.stopAnimation();
                    this.render(1);
                    this.options.onComplete.jDelay(10);
                    return this
                }
                if (this.alternate && this.cycle < N) {
                    for (var O in this.styles) {
                        this.styles[O].reverse()
                    }
                }
                this.cycle = N;
                if (!this.options.forceAnimation && K.browser.features.requestAnimationFrame) {
                    this.timer = K.browser.requestAnimationFrame.call(window, this.loopBind)
                }
                this.render((this.continuous ? N : 0) + this.easeFn(L % 1))
            },
            render: function(L) {
                var M = {},
                    O = L;
                for (var N in this.styles) {
                    if ("opacity" === N) {
                        M[N] = Math.round(this.calc(this.styles[N][0], this.styles[N][1], L) * 100) / 100
                    } else {
                        M[N] = this.calc(this.styles[N][0], this.styles[N][1], L);
                        this.pStyles[N] && (M[N] += "%")
                    }
                }
                this.options.onBeforeRender(M, this.el);
                this.set(M);
                this.options.onAfterRender(M, this.el)
            },
            set: function(L) {
                return this.el.jSetCss(L)
            },
            parseCubicBezier: function(L) {
                var M, N = null;
                if ("string" !== K.jTypeOf(L)) {
                    return null
                }
                switch (L) {
                    case "linear":
                        N = J([0, 0, 1, 1]);
                        break;
                    case "ease":
                        N = J([0.25, 0.1, 0.25, 1]);
                        break;
                    case "ease-in":
                        N = J([0.42, 0, 1, 1]);
                        break;
                    case "ease-out":
                        N = J([0, 0, 0.58, 1]);
                        break;
                    case "ease-in-out":
                        N = J([0.42, 0, 0.58, 1]);
                        break;
                    case "easeInSine":
                        N = J([0.47, 0, 0.745, 0.715]);
                        break;
                    case "easeOutSine":
                        N = J([0.39, 0.575, 0.565, 1]);
                        break;
                    case "easeInOutSine":
                        N = J([0.445, 0.05, 0.55, 0.95]);
                        break;
                    case "easeInQuad":
                        N = J([0.55, 0.085, 0.68, 0.53]);
                        break;
                    case "easeOutQuad":
                        N = J([0.25, 0.46, 0.45, 0.94]);
                        break;
                    case "easeInOutQuad":
                        N = J([0.455, 0.03, 0.515, 0.955]);
                        break;
                    case "easeInCubic":
                        N = J([0.55, 0.055, 0.675, 0.19]);
                        break;
                    case "easeOutCubic":
                        N = J([0.215, 0.61, 0.355, 1]);
                        break;
                    case "easeInOutCubic":
                        N = J([0.645, 0.045, 0.355, 1]);
                        break;
                    case "easeInQuart":
                        N = J([0.895, 0.03, 0.685, 0.22]);
                        break;
                    case "easeOutQuart":
                        N = J([0.165, 0.84, 0.44, 1]);
                        break;
                    case "easeInOutQuart":
                        N = J([0.77, 0, 0.175, 1]);
                        break;
                    case "easeInQuint":
                        N = J([0.755, 0.05, 0.855, 0.06]);
                        break;
                    case "easeOutQuint":
                        N = J([0.23, 1, 0.32, 1]);
                        break;
                    case "easeInOutQuint":
                        N = J([0.86, 0, 0.07, 1]);
                        break;
                    case "easeInExpo":
                        N = J([0.95, 0.05, 0.795, 0.035]);
                        break;
                    case "easeOutExpo":
                        N = J([0.19, 1, 0.22, 1]);
                        break;
                    case "easeInOutExpo":
                        N = J([1, 0, 0, 1]);
                        break;
                    case "easeInCirc":
                        N = J([0.6, 0.04, 0.98, 0.335]);
                        break;
                    case "easeOutCirc":
                        N = J([0.075, 0.82, 0.165, 1]);
                        break;
                    case "easeInOutCirc":
                        N = J([0.785, 0.135, 0.15, 0.86]);
                        break;
                    case "easeInBack":
                        N = J([0.6, -0.28, 0.735, 0.045]);
                        break;
                    case "easeOutBack":
                        N = J([0.175, 0.885, 0.32, 1.275]);
                        break;
                    case "easeInOutBack":
                        N = J([0.68, -0.55, 0.265, 1.55]);
                        break;
                    default:
                        L = L.replace(/\s/g, "");
                        if (L.match(/^cubic-bezier\((?:-?[0-9\.]{0,}[0-9]{1,},){3}(?:-?[0-9\.]{0,}[0-9]{1,})\)$/)) {
                            N = L.replace(/^cubic-bezier\s*\(|\)$/g, "").split(",");
                            for (M = N.length - 1; M >= 0; M--) {
                                N[M] = parseFloat(N[M])
                            }
                        }
                }
                return J(N)
            },
            cubicBezierAtTime: function(X) {
                var L = 0,
                    W = 0,
                    T = 0,
                    Y = 0,
                    V = 0,
                    R = 0,
                    S = this.options.duration;

                function Q(Z) {
                    return ((L * Z + W) * Z + T) * Z
                }

                function P(Z) {
                    return ((Y * Z + V) * Z + R) * Z
                }

                function N(Z) {
                    return (3 * L * Z + 2 * W) * Z + T
                }

                function U(Z) {
                    return 1 / (200 * Z)
                }

                function M(Z, aa) {
                    return P(O(Z, aa))
                }

                function O(ag, ah) {
                    var af, ae, ad, aa, Z, ac;

                    function ab(ai) {
                        if (ai >= 0) {
                            return ai
                        } else {
                            return 0 - ai
                        }
                    }
                    for (ad = ag, ac = 0; ac < 8; ac++) {
                        aa = Q(ad) - ag;
                        if (ab(aa) < ah) {
                            return ad
                        }
                        Z = N(ad);
                        if (ab(Z) < 0.000001) {
                            break
                        }
                        ad = ad - aa / Z
                    }
                    af = 0;
                    ae = 1;
                    ad = ag;
                    if (ad < af) {
                        return af
                    }
                    if (ad > ae) {
                        return ae
                    }
                    while (af < ae) {
                        aa = Q(ad);
                        if (ab(aa - ag) < ah) {
                            return ad
                        }
                        if (ag > aa) {
                            af = ad
                        } else {
                            ae = ad
                        }
                        ad = (ae - af) * 0.5 + af
                    }
                    return ad
                }
                T = 3 * this.cubicBezier[0];
                W = 3 * (this.cubicBezier[2] - this.cubicBezier[0]) - T;
                L = 1 - T - W;
                R = 3 * this.cubicBezier[1];
                V = 3 * (this.cubicBezier[3] - this.cubicBezier[1]) - R;
                Y = 1 - R - V;
                return M(X, U(S))
            }
        });
        K.FX.Transition = {
            linear: "linear",
            sineIn: "easeInSine",
            sineOut: "easeOutSine",
            expoIn: "easeInExpo",
            expoOut: "easeOutExpo",
            quadIn: "easeInQuad",
            quadOut: "easeOutQuad",
            cubicIn: "easeInCubic",
            cubicOut: "easeOutCubic",
            backIn: "easeInBack",
            backOut: "easeOutBack",
            elasticIn: function(M, L) {
                L = L || [];
                return Math.pow(2, 10 * --M) * Math.cos(20 * M * Math.PI * (L[0] || 1) / 3)
            },
            elasticOut: function(M, L) {
                return 1 - K.FX.Transition.elasticIn(1 - M, L)
            },
            bounceIn: function(N) {
                for (var M = 0, L = 1; 1; M += L, L /= 2) {
                    if (N >= (7 - 4 * M) / 11) {
                        return L * L - Math.pow((11 - 6 * M - 11 * N) / 4, 2)
                    }
                }
            },
            bounceOut: function(L) {
                return 1 - K.FX.Transition.bounceIn(1 - L)
            },
            none: function(L) {
                return 0
            }
        }
    })(z);
    (function(K) {
        if (!K) {
            throw "MagicJS not found"
        }
        if (K.PFX) {
            return
        }
        var J = K.$;
        K.PFX = new K.Class(K.FX, {
            init: function(L, M) {
                this.el_arr = L;
                this.options = K.extend(this.options, M);
                this.timer = false;
                this.$parent.init()
            },
            start: function(P) {
                var L = /\%$/,
                    O, N, M = P.length;
                this.styles_arr = P;
                this.pStyles_arr = new Array(M);
                for (N = 0; N < M; N++) {
                    this.pStyles_arr[N] = {};
                    for (O in P[N]) {
                        L.test(P[N][O][0]) && (this.pStyles_arr[N][O] = true);
                        if ("reverse" === this.options.direction || "alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction) {
                            this.styles_arr[N][O].reverse()
                        }
                    }
                }
                this.$parent.start({});
                return this
            },
            render: function(L) {
                for (var M = 0; M < this.el_arr.length; M++) {
                    this.el = K.$(this.el_arr[M]);
                    this.styles = this.styles_arr[M];
                    this.pStyles = this.pStyles_arr[M];
                    this.$parent.render(L)
                }
            }
        })
    })(z);
    (function(K) {
        if (!K) {
            throw "MagicJS not found";
            return
        }
        if (K.Tooltip) {
            return
        }
        var J = K.$;
        K.Tooltip = function(M, N) {
            var L = this.tooltip = K.$new("div", null, {
                position: "absolute",
                "z-index": 999
            }).jAddClass("MagicToolboxTooltip");
            K.$(M).jAddEvent("mouseover", function() {
                L.jAppendTo(document.body)
            });
            K.$(M).jAddEvent("mouseout", function() {
                L.jRemove()
            });
            K.$(M).jAddEvent("mousemove", function(S) {
                var U = 20,
                    R = K.$(S).jGetPageXY(),
                    Q = L.jGetSize(),
                    P = K.$(window).jGetSize(),
                    T = K.$(window).jGetScroll();

                function O(X, V, W) {
                    return (W < (X - V) / 2) ? W : ((W > (X + V) / 2) ? (W - V) : (X - V) / 2)
                }
                L.jSetCss({
                    left: T.x + O(P.width, Q.width + 2 * U, R.x - T.x) + U,
                    top: T.y + O(P.height, Q.height + 2 * U, R.y - T.y) + U
                })
            });
            this.text(N)
        };
        K.Tooltip.prototype.text = function(L) {
            this.tooltip.firstChild && this.tooltip.removeChild(this.tooltip.firstChild);
            this.tooltip.append(document.createTextNode(L))
        }
    })(z);
    (function(K) {
        if (!K) {
            throw "MagicJS not found";
            return
        }
        if (K.MessageBox) {
            return
        }
        var J = K.$;
        K.Message = function(O, N, M, L) {
            this.hideTimer = null;
            this.messageBox = K.$new("span", null, {
                position: "absolute",
                "z-index": 999,
                visibility: "hidden",
                opacity: 0.8
            }).jAddClass(L || "").jAppendTo(M || document.body);
            this.setMessage(O);
            this.show(N)
        };
        K.Message.prototype.show = function(L) {
            this.messageBox.show();
            this.hideTimer = this.hide.jBind(this).jDelay(K.ifndef(L, 5000))
        };
        K.Message.prototype.hide = function(L) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
            if (this.messageBox && !this.hideFX) {
                this.hideFX = new z.FX(this.messageBox, {
                    duration: K.ifndef(L, 500),
                    onComplete: function() {
                        this.messageBox.kill();
                        delete this.messageBox;
                        this.hideFX = null
                    }.jBind(this)
                }).start({
                    opacity: [this.messageBox.jGetCss("opacity"), 0]
                })
            }
        };
        K.Message.prototype.setMessage = function(L) {
            this.messageBox.firstChild && this.tooltip.removeChild(this.messageBox.firstChild);
            this.messageBox.append(document.createTextNode(L))
        }
    })(z);
    (function(K) {
        if (!K) {
            throw "MagicJS not found"
        }
        if (K.Options) {
            return
        }
        var N = K.$,
            J = null,
            R = {
                "boolean": 1,
                array: 2,
                number: 3,
                "function": 4,
                string: 100
            },
            L = {
                "boolean": function(U, T, S) {
                    if ("boolean" != K.jTypeOf(T)) {
                        if (S || "string" != K.jTypeOf(T)) {
                            return false
                        } else {
                            if (!/^(true|false)$/.test(T)) {
                                return false
                            } else {
                                T = T.jToBool()
                            }
                        }
                    }
                    if (U.hasOwnProperty("enum") && !N(U["enum"]).contains(T)) {
                        return false
                    }
                    J = T;
                    return true
                },
                string: function(U, T, S) {
                    if ("string" !== K.jTypeOf(T)) {
                        return false
                    } else {
                        if (U.hasOwnProperty("enum") && !N(U["enum"]).contains(T)) {
                            return false
                        } else {
                            J = "" + T;
                            return true
                        }
                    }
                },
                number: function(V, U, T) {
                    var S = false,
                        X = /%$/,
                        W = (K.jTypeOf(U) == "string" && X.test(U));
                    if (T && !"number" == typeof U) {
                        return false
                    }
                    U = parseFloat(U);
                    if (isNaN(U)) {
                        return false
                    }
                    if (isNaN(V.minimum)) {
                        V.minimum = Number.NEGATIVE_INFINITY
                    }
                    if (isNaN(V.maximum)) {
                        V.maximum = Number.POSITIVE_INFINITY
                    }
                    if (V.hasOwnProperty("enum") && !N(V["enum"]).contains(U)) {
                        return false
                    }
                    if (V.minimum > U || U > V.maximum) {
                        return false
                    }
                    J = W ? (U + "%") : U;
                    return true
                },
                array: function(V, T, S) {
                    if ("string" === K.jTypeOf(T)) {
                        try {
                            T = window.JSON.parse(T)
                        } catch (U) {
                            return false
                        }
                    }
                    if (K.jTypeOf(T) === "array") {
                        J = T;
                        return true
                    } else {
                        return false
                    }
                },
                "function": function(U, T, S) {
                    if (K.jTypeOf(T) === "function") {
                        J = T;
                        return true
                    } else {
                        return false
                    }
                }
            },
            M = function(X, W, T) {
                var V;
                V = X.hasOwnProperty("oneOf") ? X.oneOf : [X];
                if ("array" != K.jTypeOf(V)) {
                    return false
                }
                for (var U = 0, S = V.length - 1; U <= S; U++) {
                    if (L[V[U].type](V[U], W, T)) {
                        return true
                    }
                }
                return false
            },
            P = function(X) {
                var V, U, W, S, T;
                if (X.hasOwnProperty("oneOf")) {
                    S = X.oneOf.length;
                    for (V = 0; V < S; V++) {
                        for (U = V + 1; U < S; U++) {
                            if (R[X.oneOf[V]["type"]] > R[X.oneOf[U].type]) {
                                T = X.oneOf[V];
                                X.oneOf[V] = X.oneOf[U];
                                X.oneOf[U] = T
                            }
                        }
                    }
                }
                return X
            },
            Q = function(V) {
                var U;
                U = V.hasOwnProperty("oneOf") ? V.oneOf : [V];
                if ("array" != K.jTypeOf(U)) {
                    return false
                }
                for (var T = U.length - 1; T >= 0; T--) {
                    if (!U[T].type || !R.hasOwnProperty(U[T].type)) {
                        return false
                    }
                    if (K.defined(U[T]["enum"])) {
                        if ("array" !== K.jTypeOf(U[T]["enum"])) {
                            return false
                        }
                        for (var S = U[T]["enum"].length - 1; S >= 0; S--) {
                            if (!L[U[T].type]({
                                    type: U[T].type
                                }, U[T]["enum"][S], true)) {
                                return false
                            }
                        }
                    }
                }
                if (V.hasOwnProperty("default") && !M(V, V["default"], true)) {
                    return false
                }
                return true
            },
            O = function(S) {
                this.schema = {};
                this.options = {};
                this.parseSchema(S)
            };
        K.extend(O.prototype, {
            parseSchema: function(U) {
                var T, S, V;
                for (T in U) {
                    if (!U.hasOwnProperty(T)) {
                        continue
                    }
                    S = (T + "").jTrim().jCamelize();
                    if (!this.schema.hasOwnProperty(S)) {
                        this.schema[S] = P(U[T]);
                        if (!Q(this.schema[S])) {
                            throw "Incorrect definition of the '" + T + "' parameter in " + U
                        }
                        this.options[S] = undefined
                    }
                }
            },
            set: function(T, S) {
                T = (T + "").jTrim().jCamelize();
                if (K.jTypeOf(S) == "string") {
                    S = S.jTrim()
                }
                if (this.schema.hasOwnProperty(T)) {
                    J = S;
                    if (M(this.schema[T], S)) {
                        this.options[T] = J
                    }
                    J = null
                }
            },
            get: function(S) {
                S = (S + "").jTrim().jCamelize();
                if (this.schema.hasOwnProperty(S)) {
                    return K.defined(this.options[S]) ? this.options[S] : this.schema[S]["default"]
                }
            },
            fromJSON: function(T) {
                for (var S in T) {
                    this.set(S, T[S])
                }
            },
            getJSON: function() {
                var T = K.extend({}, this.options);
                for (var S in T) {
                    if (undefined === T[S] && undefined !== this.schema[S]["default"]) {
                        T[S] = this.schema[S]["default"]
                    }
                }
                return T
            },
            fromString: function(S) {
                N(S.split(";")).jEach(N(function(T) {
                    T = T.split(":");
                    this.set(T.shift().jTrim(), T.join(":"))
                }).jBind(this))
            },
            exists: function(S) {
                S = (S + "").jTrim().jCamelize();
                return this.schema.hasOwnProperty(S)
            },
            isset: function(S) {
                S = (S + "").jTrim().jCamelize();
                return this.exists(S) && K.defined(this.options[S])
            },
            jRemove: function(S) {
                S = (S + "").jTrim().jCamelize();
                if (this.exists(S)) {
                    delete this.options[S];
                    delete this.schema[S]
                }
            }
        });
        K.Options = O
    }(z));
    (function(N) {
        if (!N) {
            throw "MagicJS not found";
            return
        }
        var M = N.$;
        if (N.SVGImage) {
            return
        }
        var L = "http://www.w3.org/2000/svg",
            K = "http://www.w3.org/1999/xlink";
        var J = function(O) {
            this.filters = {};
            this.originalImage = M(O);
            this.canvas = M(document.createElementNS(L, "svg"));
            this.canvas.setAttribute("width", this.originalImage.naturalWidth || this.originalImage.width);
            this.canvas.setAttribute("height", this.originalImage.naturalHeight || this.originalImage.height);
            this.image = M(document.createElementNS(L, "image"));
            this.image.setAttributeNS(K, "href", this.originalImage.getAttribute("src"));
            this.image.setAttribute("width", "100%");
            this.image.setAttribute("height", "100%");
            this.image.jAppendTo(this.canvas)
        };
        J.prototype.getNode = function() {
            return this.canvas
        };
        J.prototype.blur = function(O) {
            if (Math.round(O) < 1) {
                return
            }
            if (!this.filters.blur) {
                this.filters.blur = M(document.createElementNS(L, "filter"));
                this.filters.blur.setAttribute("id", "filterBlur");
                this.filters.blur.appendChild(M(document.createElementNS(L, "feGaussianBlur")).setProps({
                    "in": "SourceGraphic",
                    stdDeviation: O
                }));
                this.filters.blur.jAppendTo(this.canvas);
                this.image.setAttribute("filter", "url(#filterBlur)")
            } else {
                this.filters.blur.firstChild.setAttribute("stdDeviation", O)
            }
            return this
        };
        N.SVGImage = J
    }(z));
    var s = (function(L) {
        var K = L.$;
        var J = function(N, M) {
            this.settings = {
                cssPrefix: "magic",
                orientation: "horizontal",
                position: "bottom",
                size: {
                    units: "px",
                    width: "auto",
                    height: "auto"
                },
                sides: ["height", "width"]
            };
            this.parent = N;
            this.root = null;
            this.wrapper = null;
            this.context = null;
            this.buttons = {};
            this.items = [];
            this.selectedItem = null;
            this.scrollFX = null;
            this.resizeCallback = null;
            this.settings = L.extend(this.settings, M);
            this.rootCSS = this.settings.cssPrefix + "-thumbs";
            this.itemCSS = this.settings.cssPrefix + "-thumb";
            this.setupContent()
        };
        J.prototype = {
            setupContent: function() {
                this.root = L.$new("div").jAddClass(this.rootCSS).jAddClass(this.rootCSS + "-" + this.settings.orientation).jSetCss({
                    visibility: "hidden"
                });
                this.wrapper = L.$new("div").jAddClass(this.rootCSS + "-wrapper").jAppendTo(this.root);
                this.root.jAppendTo(this.parent);
                K(["prev", "next"]).jEach(function(M) {
                    this.buttons[M] = L.$new("button").jAddClass(this.rootCSS + "-button").jAddClass(this.rootCSS + "-button-" + M).jAppendTo(this.root).jAddEvent("btnclick tap", (function(O, N) {
                        K(O).events[0].stop().stopQueue();
                        K(O).stopDistribution();
                        this.scroll(N)
                    }).jBindAsEvent(this, M))
                }.jBind(this));
                this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                this.context = L.$new("ul").jAddEvent("btnclick tap", function(M) {
                    M.stop()
                })
            },
            addItem: function(N) {
                var M = L.$new("li").jAddClass(this.itemCSS).append(N).jAppendTo(this.context);
                new L.ImageLoader(N, {
                    oncomplete: this.reflow.jBind(this)
                });
                this.items.push(M);
                return M
            },
            selectItem: function(N) {
                var M = this.selectedItem || this.context.byClass(this.itemCSS + "-selected")[0];
                if (M) {
                    K(M).jRemoveClass(this.itemCSS + "-selected")
                }
                this.selectedItem = K(N);
                if (!this.selectedItem) {
                    return
                }
                this.selectedItem.jAddClass(this.itemCSS + "-selected");
                this.scroll(this.selectedItem)
            },
            run: function() {
                if (this.wrapper !== this.context.parentNode) {
                    K(this.context).jAppendTo(this.wrapper);
                    this.initDrag();
                    K(window).jAddEvent("resize", this.resizeCallback = this.reflow.jBind(this));
                    this.run.jBind(this).jDelay(1);
                    return
                }
                var M = this.parent.jGetSize();
                if (M.height > 0 && M.height > M.width) {
                    this.setOrientation("vertical")
                } else {
                    this.setOrientation("horizontal")
                }
                this.reflow();
                this.root.jSetCss({
                    visibility: ""
                })
            },
            stop: function() {
                if (this.resizeCallback) {
                    K(window).jRemoveEvent("resize", this.resizeCallback)
                }
                this.root.kill()
            },
            scroll: function(Z, P) {
                var R = {
                        x: 0,
                        y: 0
                    },
                    ac = "vertical" == this.settings.orientation ? "top" : "left",
                    U = "vertical" == this.settings.orientation ? "height" : "width",
                    Q = "vertical" == this.settings.orientation ? "y" : "x",
                    Y = this.context.parentNode.jGetSize()[U],
                    V = this.context.parentNode.jGetPosition(),
                    O = this.context.jGetSize()[U],
                    X, M, ab, S, N, W, T, aa = [];
                if (this.scrollFX) {
                    this.scrollFX.stop()
                } else {
                    this.context.jSetCss("transition", L.browser.cssTransformProp + String.fromCharCode(32) + "0s")
                }
                if (undefined === P) {
                    P = 600
                }
                X = this.context.jGetPosition();
                if ("string" == L.jTypeOf(Z)) {
                    R[Q] = ("next" == Z) ? Math.max(X[ac] - V[ac] - Y, Y - O) : Math.min(X[ac] - V[ac] + Y, 0)
                } else {
                    if ("element" == L.jTypeOf(Z)) {
                        M = Z.jGetSize();
                        ab = Z.jGetPosition();
                        R[Q] = Math.min(0, Math.max(Y - O, X[ac] + Y / 2 - ab[ac] - M[U] / 2))
                    } else {
                        return
                    }
                }
                if (L.browser.gecko && "android" == L.browser.platform || L.browser.ieMode && L.browser.ieMode < 10) {
                    if ("string" == L.jTypeOf(Z) && R[Q] == X[ac] - V[ac]) {
                        X[ac] += 0 === X[ac] - V[ac] ? 30 : -30
                    }
                    R["margin-" + ac] = [((O <= Y) ? 0 : (X[ac] - V[ac])), R[Q]];
                    delete R.x;
                    delete R.y;
                    if (!this.selectorsMoveFX) {
                        this.selectorsMoveFX = new L.PFX([this.context], {
                            duration: 500
                        })
                    }
                    aa.push(R);
                    this.selectorsMoveFX.start(aa);
                    T = R["margin-" + ac][1]
                } else {
                    this.context.jSetCss({
                        transition: L.browser.cssTransformProp + String.fromCharCode(32) + P + "ms ease",
                        transform: "translate3d(" + R.x + "px, " + R.y + "px, 0)"
                    });
                    T = R[Q]
                }
                if (T >= 0) {
                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled")
                } else {
                    this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled")
                }
                if (T <= Y - O) {
                    this.buttons.next.jAddClass(this.rootCSS + "-button-disabled")
                } else {
                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                }
                T = null
            },
            initDrag: function() {
                var O, N, P, W, V, Y, Q, U, T, X, ad, aa, ab, Z = {
                        x: 0,
                        y: 0
                    },
                    M, S, R = 300,
                    ac = function(ag) {
                        var af, ae = 0;
                        for (af = 1.5; af <= 90; af += 1.5) {
                            ae += (ag * Math.cos(af / Math.PI / 2))
                        }(W < 0) && (ae *= (-1));
                        return ae
                    };
                V = K(function(ae) {
                    Z = {
                        x: 0,
                        y: 0
                    };
                    M = "vertical" == this.settings.orientation ? "top" : "left";
                    S = "vertical" == this.settings.orientation ? "height" : "width";
                    O = "vertical" == this.settings.orientation ? "y" : "x";
                    aa = this.context.parentNode.jGetSize()[S];
                    ad = this.context.jGetSize()[S];
                    P = aa - ad;
                    if (P >= 0) {
                        return
                    }
                    if (ae.state == "dragstart") {
                        if (undefined === ab) {
                            ab = 0
                        }
                        this.context.jSetCssProp("transition", L.browser.cssTransformProp + String.fromCharCode(32) + "0ms");
                        Y = ae[O];
                        T = ae.y;
                        U = ae.x;
                        X = false
                    } else {
                        if ("dragend" == ae.state) {
                            if (X) {
                                return
                            }
                            Q = ac(Math.abs(W));
                            ab += Q;
                            (ab <= P) && (ab = P);
                            (ab >= 0) && (ab = 0);
                            Z[O] = ab;
                            this.context.jSetCssProp("transition", L.browser.cssTransformProp + String.fromCharCode(32) + R + "ms  cubic-bezier(.0, .0, .0, 1)");
                            this.context.jSetCssProp("transform", "translate3d(" + Z.x + "px, " + Z.y + "px, 0px)");
                            W = 0
                        } else {
                            if (X) {
                                return
                            }
                            if ("horizontal" == this.settings.orientation && Math.abs(ae.x - U) > Math.abs(ae.y - T) || "vertical" == this.settings.orientation && Math.abs(ae.x - U) < Math.abs(ae.y - T)) {
                                ae.stop();
                                W = ae[O] - Y;
                                ab += W;
                                Z[O] = ab;
                                this.context.jSetCssProp("transform", "translate3d(" + Z.x + "px, " + Z.y + "px, 0px)");
                                if (ab >= 0) {
                                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled")
                                } else {
                                    this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled")
                                }
                                if (ab <= P) {
                                    this.buttons.next.jAddClass(this.rootCSS + "-button-disabled")
                                } else {
                                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                                }
                            } else {
                                X = true
                            }
                        }
                        Y = ae[O]
                    }
                }).jBind(this);
                this.context.jAddEvent("touchdrag", V)
            },
            reflow: function() {
                var P, O, M, N = this.parent.jGetSize();
                if (N.height > 0 && N.height > N.width) {
                    this.setOrientation("vertical")
                } else {
                    this.setOrientation("horizontal")
                }
                P = "vertical" == this.settings.orientation ? "height" : "width";
                O = this.context.jGetSize()[P];
                M = this.root.jGetSize()[P];
                if (O <= M) {
                    this.root.jAddClass("no-buttons");
                    this.context.jSetCssProp("transition", "").jGetSize();
                    this.context.jSetCssProp("transform", "translate3d(0,0,0)");
                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                } else {
                    this.root.jRemoveClass("no-buttons")
                }
                if (this.selectedItem) {
                    this.scroll(this.selectedItem, 0)
                }
            },
            setOrientation: function(M) {
                if ("vertical" !== M && "horizontal" !== M || M == this.settings.orientation) {
                    return
                }
                this.root.jRemoveClass(this.rootCSS + "-" + this.settings.orientation);
                this.settings.orientation = M;
                this.root.jAddClass(this.rootCSS + "-" + this.settings.orientation);
                this.context.jSetCssProp("transition", "none").jGetSize();
                this.context.jSetCssProp("transform", "").jSetCssProp("margin", "")
            }
        };
        return J
    })(z);
    var i = A.$;
    if (typeof Object.assign !== "function") {
        Object.assign = function(M) {
            if (M == null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            M = Object(M);
            for (var J = 1; J < arguments.length; J++) {
                var L = arguments[J];
                if (L != null) {
                    for (var K in L) {
                        if (Object.prototype.hasOwnProperty.call(L, K)) {
                            M[K] = L[K]
                        }
                    }
                }
            }
            return M
        }
    }
    if (!A.browser.cssTransform) {
        A.browser.cssTransform = A.normalizeCSS("transform").dashize()
    }
    var p = {
        zoomOn: {
            type: "string",
            "enum": ["click", "hover"],
            "default": "hover"
        },
        zoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "preview", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        zoomWidth: {
            oneOf: [{
                type: "string",
                "enum": ["auto"]
            }, {
                type: "number",
                minimum: 1
            }],
            "default": "auto"
        },
        zoomHeight: {
            oneOf: [{
                type: "string",
                "enum": ["auto"]
            }, {
                type: "number",
                minimum: 1
            }],
            "default": "auto"
        },
        zoomPosition: {
            type: "string",
            "default": "right"
        },
        zoomDistance: {
            type: "number",
            minimum: 0,
            "default": 15
        },
        zoomCaption: {
            oneOf: [{
                type: "string",
                "enum": ["bottom", "top", "off"],
                "default": "off"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "off"
        },
        expand: {
            oneOf: [{
                type: "string",
                "enum": ["window", "fullscreen", "off"]
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "window"
        },
        expandZoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        expandZoomOn: {
            type: "string",
            "enum": ["click", "always"],
            "default": "click"
        },
        expandCaption: {
            type: "boolean",
            "default": true
        },
        closeOnClickOutside: {
            type: "boolean",
            "default": true
        },
        hint: {
            oneOf: [{
                type: "string",
                "enum": ["once", "always", "off"]
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "once"
        },
        smoothing: {
            type: "boolean",
            "default": true
        },
        upscale: {
            type: "boolean",
            "default": true
        },
        variableZoom: {
            type: "boolean",
            "default": false
        },
        lazyZoom: {
            type: "boolean",
            "default": false
        },
        autostart: {
            type: "boolean",
            "default": true
        },
        rightClick: {
            type: "boolean",
            "default": false
        },
        transitionEffect: {
            type: "boolean",
            "default": true
        },
        selectorTrigger: {
            type: "string",
            "enum": ["click", "hover"],
            "default": "click"
        },
        cssClass: {
            type: "string"
        },
        forceTouch: {
            type: "boolean",
            "default": false
        },
        textHoverZoomHint: {
            type: "string",
            "default": "Hover to zoom"
        },
        textClickZoomHint: {
            type: "string",
            "default": "Click to zoom"
        },
        textExpandHint: {
            type: "string",
            "default": "Click to expand"
        },
        textBtnClose: {
            type: "string",
            "default": "Close"
        },
        textBtnNext: {
            type: "string",
            "default": "Next"
        },
        textBtnPrev: {
            type: "string",
            "default": "Previous"
        }
    };
    var m = {
        zoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        expandZoomOn: {
            type: "string",
            "enum": ["click", "always"],
            "default": "click"
        },
        textExpandHint: {
            type: "string",
            "default": "Tap to expand"
        },
        textHoverZoomHint: {
            type: "string",
            "default": "Touch to zoom"
        },
        textClickZoomHint: {
            type: "string",
            "default": "Double tap to zoom"
        }
    };
    var o = "MagicZoom";
    var E = "mz";
    var b = 20;
    var B = ["onZoomReady", "onUpdate", "onZoomIn", "onZoomOut", "onExpandOpen", "onExpandClose"];
    var D = 600;
    var v;
    var q = {};
    var G = i([]);
    var I;
    var f = window.devicePixelRatio || 1;
    var H;
    var y = true;
    var g = A.browser.features.perspective ? "translate3d(" : "translate(";
    var C = A.browser.features.perspective ? ",0)" : ")";
    var n = null;
    var r = (function() {
        var K, N, M, L, J;
        N = document;
        N = N.location;
        N = N.host;
        if (N.indexOf(x("coigmzaablav mac")) == -1 && N.indexOf(x("coigmzk}zg`i mac")) == -1) {
            //comment = remove licend check
            //J = ["2o.f|kh3,fzz~4!!yyy coigmzaablav mac!coigmtaac~b{}!,.a`mbgme3,zfg} lb{|&'5,.zo|ikz3,Qlbo`e,.}zwbk3,maba|4.g`fk|gz5.zkvz#jkma|ozga`4.`a`k5,0Coigm.Taac.^b{}(z|ojk5.z|gob.xk|}ga`2!o0", "#ff0000", 11, "normal", "", "center", "100%"]
        }
        return J
    })();
    var t = function() {
        return "mgctlbxN$MZ" + "p".toUpperCase() + " mgctlbxV$" + "v5.2.2".replace("v", "") + " mgctlbxL$" + "m".toUpperCase() + ((window.mgctlbx$Pltm && A.jTypeOf(window.mgctlbx$Pltm) === "string") ? " mgctlbxP$" + window.mgctlbx$Pltm.toLowerCase() : "")
    };

    function x(L) {
        var K, J;
        K = "";
        for (J = 0; J < L.length; J++) {
            K += String.fromCharCode(14 ^ L.charCodeAt(J))
        }
        return K
    }

    function j(L) {
        var K = [],
            J = null;
        (L && (J = i(L))) && (K = G.filter(function(M) {
            return M.placeholder === J
        }));
        return K.length ? K[0] : null
    }

    function a(L) {
        var K = i(window).jGetSize();
        var J = i(window).jGetScroll();
        L = L || 0;
        return {
            left: L,
            right: K.width - L,
            top: L,
            bottom: K.height - L,
            x: J.x,
            y: J.y
        }
    }

    function c(J) {
        return (J.pointerType && (J.pointerType === "touch" || J.pointerType === J.MSPOINTER_TYPE_TOUCH)) || (/touch/i).test(J.type)
    }

    function h(J) {
        return J.pointerType ? ((J.pointerType === "touch" || J.MSPOINTER_TYPE_TOUCH === J.pointerType) && J.isPrimary) : J.changedTouches.length === 1 && (J.targetTouches.length ? J.targetTouches[0].identifier === J.changedTouches[0].identifier : true)
    }

    function e(J) {
        return Object.assign({}, J, {
            type: J.type,
            pageX: J.pageX,
            pageY: J.pageY,
            screenX: J.screenX,
            screenY: J.screenY,
            clientX: J.clientX,
            clientY: J.clientY
        })
    }

    function u() {
        var L = A.$A(arguments);
        var K = L.shift();
        var J = q[K];
        if (J) {
            for (var M = 0; M < J.length; M++) {
                J[M].apply(null, L)
            }
        }
    }

    function F() {
        var N = arguments[0],
            J, M, K = [];
        try {
            do {
                M = N.tagName;
                if (/^[A-Za-z]*$/.test(M)) {
                    if (J = N.getAttribute("id")) {
                        if (/^[A-Za-z][-A-Za-z0-9_]*/.test(J)) {
                            M += "#" + J
                        }
                    }
                    K.push(M)
                }
                N = N.parentNode
            } while (N && N !== document.documentElement);
            K = K.reverse();
            A.addCSS(K.join(" ") + "> .mz-figure > img", {
                //width: "100% !important;",
                transition: "none",
                transform: "none"
            }, "mz-runtime-css", true)
        } catch (L) {}
    }

    function w() {
        var K = null,
            L = null,
            J = function() {
                window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                window.dispatchEvent(new Event("resize"))
            };
        L = setInterval(function() {
            var O = window.orientation === 90 || window.orientation === -90;
            var N = window.innerHeight;
            var M = (O ? screen.availWidth : screen.availHeight) * 0.85;
            if ((K === null || K === false) && ((O && N < M) || (!O && N < M))) {
                K = true;
                J()
            } else {
                if ((K === null || K === true) && ((O && N > M) || (!O && N > M))) {
                    K = false;
                    J()
                }
            }
        }, 250);
        return L
    }

    function d() {
        A.addCSS(".magic-hidden-wrapper, .magic-temporary-img", {
            display: "block !important",
            "min-height": "0 !important",
            "min-width": "0 !important",
            "max-height": "none !important",
            "max-width": "none !important",
            width: "10px !important",
            height: "10px !important",
            position: "absolute !important",
            top: "-10000px !important",
            left: "0 !important",
            overflow: "hidden !important",
            "-webkit-transform": "none !important",
            transform: "none !important",
            "-webkit-transition": "none !important",
            transition: "none !important"
        }, "magiczoom-reset-css");
        A.addCSS(".magic-temporary-img img", {
            display: "inline-block !important",
            border: "0 !important",
            padding: "0 !important",
            "min-height": "0 !important",
            "min-width": "0 !important",
            "max-height": "none !important",
            "max-width": "none !important",
            "-webkit-transform": "none !important",
            transform: "none !important",
            "-webkit-transition": "none !important",
            transition: "none !important"
        }, "magiczoom-reset-css");
        if (A.browser.androidBrowser) {
            A.addCSS(".mobile-magic .mz-expand .mz-expand-bg", {
                display: "none !important"
            }, "magiczoom-reset-css")
        }
        if (A.browser.androidBrowser && (A.browser.uaName !== "chrome" || A.browser.uaVersion === 44)) {
            A.addCSS(".mobile-magic .mz-zoom-window.mz-magnifier, .mobile-magic .mz-zoom-window.mz-magnifier:before", {
                "border-radius": "0 !important"
            }, "magiczoom-reset-css")
        }
    }
    var l = function(M, N, K, L, J) {
        this.small = {
            src: null,
            url: null,
            dppx: 1,
            node: null,
            state: 0,
            size: {
                width: 0,
                height: 0
            },
            loaded: false
        };
        this.zoom = {
            src: null,
            url: null,
            dppx: 1,
            node: null,
            state: 0,
            size: {
                width: 0,
                height: 0
            },
            loaded: false
        };
        if (A.jTypeOf(M) === "object") {
            this.small = M
        } else {
            if (A.jTypeOf(M) === "string") {
                this.small.url = A.getAbsoluteURL(M)
            }
        }
        if (A.jTypeOf(N) === "object") {
            this.zoom = N
        } else {
            if (A.jTypeOf(N) === "string") {
                this.zoom.url = A.getAbsoluteURL(N)
            }
        }
        this.caption = K;
        this.options = L;
        this.origin = J;
        this.callback = null;
        this.link = null;
        this.node = null
    };
    l.prototype = {
        parseNode: function(L, K, J) {
            var M = L.byTag("img")[0];
            if (J) {
                this.small.node = M || A.$new("img").jAppendTo(L)
            }
            if (f > 1) {
                this.small.url = L.getAttribute("data-image-2x");
                if (this.small.url) {
                    this.small.dppx = 2
                }
                this.zoom.url = L.getAttribute("data-zoom-image-2x");
                if (this.zoom.url) {
                    this.zoom.dppx = 2
                }
            }
            this.small.src = L.getAttribute("data-image") || L.getAttribute("rev") || (M ? M.currentSrc || M.getAttribute("src") : null);
            if (this.small.src) {
                this.small.src = A.getAbsoluteURL(this.small.src)
            }
            this.small.url = this.small.url || this.small.src;
            if (this.small.url) {
                this.small.url = A.getAbsoluteURL(this.small.url)
            }
            this.zoom.src = L.getAttribute("data-zoom-image") || L.getAttribute("href");
            if (this.zoom.src) {
                this.zoom.src = A.getAbsoluteURL(this.zoom.src)
            }
            this.zoom.url = this.zoom.url || this.zoom.src;
            if (this.zoom.url) {
                this.zoom.url = A.getAbsoluteURL(this.zoom.url)
            }
            this.caption = L.getAttribute("data-caption") || L.getAttribute("title") || K;
            this.link = L.getAttribute("data-link");
            this.origin = L;
            return this
        },
        loadImg: function(J) {
            var K = null;
            if (arguments.length > 1 && A.jTypeOf(arguments[1]) === "function") {
                K = arguments[1]
            }
            if (this[J].state !== 0) {
                if (this[J].loaded) {
                    this.onload(K)
                }
                return
            }
            if (this[J].url && this[J].node && !this[J].node.getAttribute("src") && !this[J].node.getAttribute("srcset")) {
                this[J].node.setAttribute("src", this[J].url)
            }
            this[J].state = 1;
            new A.ImageLoader(this[J].node || this[J].url, {
                oncomplete: i(function(L) {
                    this[J].loaded = true;
                    this[J].state = L.ready ? 2 : -1;
                    if (L.ready) {
                        this[J].size = L.jGetSize();
                        if (!this[J].node) {
                            this[J].node = i(L.img);
                            this[J].node.getAttribute("style");
                            this[J].node.removeAttribute("style");
                            this[J].size.width /= this[J].dppx;
                            this[J].size.height /= this[J].dppx
                        } else {
                            // this[J].node.jSetCss({
                            //     "max-width": this[J].size.width,
                            //     "max-height": this[J].size.height
                            // });
                            if (this[J].node.currentSrc && this[J].node.currentSrc !== this[J].node.src) {
                                this[J].url = this[J].node.currentSrc
                            } else {
                                if (A.getAbsoluteURL(this[J].node.getAttribute("src") || "") !== this[J].url) {
                                    this[J].node.setAttribute("src", this[J].url)
                                }
                            }
                        }
                    }
                    this.onload(K)
                }).jBind(this)
            })
        },
        loadSmall: function() {
            this.loadImg("small", arguments[0])
        },
        loadZoom: function() {
            this.loadImg("zoom", arguments[0])
        },
        load: function() {
            this.callback = null;
            if (arguments.length > 0 && A.jTypeOf(arguments[0]) === "function") {
                this.callback = arguments[0]
            }
            this.loadSmall();
            this.loadZoom()
        },
        onload: function(J) {
            if (J) {
                J.call(null, this)
            }
            if (this.callback && this.small.loaded && this.zoom.loaded) {
                this.callback.call(null, this);
                this.callback = null;
                return
            }
        },
        loaded: function() {
            return (this.small.loaded && this.zoom.loaded)
        },
        ready: function() {
            return (this.small.state === 2 && this.zoom.state === 2)
        },
        getURL: function(K) {
            var J = K === "small" ? "zoom" : "small";
            if (!this[K].loaded || (this[K].loaded && this[K].state === 2)) {
                return this[K].url
            } else {
                if (!this[J].loaded || (this[J].loaded && this[J].state === 2)) {
                    return this[J].url
                } else {
                    return null
                }
            }
        },
        getNode: function(K) {
            var J = K === "small" ? "zoom" : "small";
            if (!this[K].loaded || (this[K].loaded && this[K].state === 2)) {
                return this[K].node
            } else {
                if (!this[J].loaded || (this[J].loaded && this[J].state === 2)) {
                    return this[J].node
                } else {
                    return null
                }
            }
        },
        jGetSize: function(K) {
            var J = K === "small" ? "zoom" : "small";
            if (!this[K].loaded || (this[K].loaded && this[K].state === 2)) {
                return this[K].size
            } else {
                if (!this[J].loaded || (this[J].loaded && this[J].state === 2)) {
                    return this[J].size
                } else {
                    return {
                        width: 0,
                        height: 0
                    }
                }
            }
        },
        getRatio: function(K) {
            var J = K === "small" ? "zoom" : "small";
            if (!this[K].loaded || (this[K].loaded && this[K].state === 2)) {
                return this[K].dppx
            } else {
                if (!this[J].loaded || (this[J].loaded && this[J].state === 2)) {
                    return this[J].dppx
                } else {
                    return 1
                }
            }
        },
        setCurNode: function(J) {
            this.node = this.getNode(J)
        }
    };
    var k = function(K, J) {
        this.options = new A.Options(p);
        this.option = i(function() {
            if (arguments.length > 1) {
                return this.set(arguments[0], arguments[1])
            } else {
                return this.get(arguments[0])
            }
        }).jBind(this.options);
        this.touchOptions = new A.Options(m);
        this.additionalImages = [];
        this.image = null;
        this.primaryImage = null;
        this.placeholder = i(K).jAddEvent("dragstart selectstart click", function(L) {
            L.stop()
        });
        this.id = null;
        this.node = null;
        this.stubNode = null;
        this.originalImg = null;
        this.originalImgSrc = null;
        this.originalTitle = null;
        this.normalSize = {
            width: 0,
            height: 0
        };
        this.size = {
            width: 0,
            height: 0
        };
        this.zoomSize = {
            width: 0,
            height: 0
        };
        this.zoomSizeOrigin = {
            width: 0,
            height: 0
        };
        this.boundaries = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        this.ready = false;
        this.expanded = false;
        this.activateTimer = null;
        this.resizeTimer = null;
        this.resizeCallback = i(function() {
            if (this.expanded) {
                this.image.node.jSetCss({
                    "max-height": Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
                });
                this.image.node.jSetCss({
                    "max-width": Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
                })
            }
            this.reflowZoom(arguments[0])
        }).jBind(this);
        this.onResize = i(function(L) {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = i(this.resizeCallback).jDelay(10, L.type === "scroll")
        }).jBindAsEvent(this);
        if (t) {
            I.append(A.$new("div", {}, {
                display: "none",
                visibility: "hidden"
            }).append(document.createTextNode(t)));
            t = undefined
        }
        this.lens = null;
        this.zoomBox = null;
        this.hint = null;
        this.hintMessage = null;
        this.hintRuns = 0;
        this.mobileZoomHint = true;
        this.loadingBox = null;
        this.loadTimer = null;
        this.thumb = null;
        this.expandBox = null;
        this.expandBg = null;
        this.expandCaption = null;
        this.expandStage = null;
        this.expandImageStage = null;
        this.expandFigure = null;
        this.expandControls = null;
        this.expandNav = null;
        this.expandThumbs = null;
        this.expandGallery = [];
        this.buttons = {};
        this.startAttempts = 0;
        this.startTimer = null;
        this.start(J)
    };
    k.prototype = {
        loadOptions: function(J) {
            this.options.fromJSON(window[E + "Options"] || {});
            this.options.fromString(this.placeholder.getAttribute("data-options") || "");
            if (!A.browser.touchScreen) {
                this.option("forceTouch", false)
            }
            if (A.browser.mobile || this.option("forceTouch")) {
                this.options.fromJSON(this.touchOptions.getJSON());
                this.options.fromJSON(window[E + "MobileOptions"] || {});
                this.options.fromString(this.placeholder.getAttribute("data-mobile-options") || "")
            }
            if (A.jTypeOf(J) === "string") {
                this.options.fromString(J || "")
            } else {
                this.options.fromJSON(J || {})
            }
            if (this.option("cssClass")) {
                this.option("cssClass", this.option("cssClass").replace(",", " "))
            }
            if (this.option("zoomCaption") === false) {
                this.option("zoomCaption", "off")
            }
            if (this.option("hint") === false) {
                this.option("hint", "off")
            }
            switch (this.option("hint")) {
                case "off":
                    this.hintRuns = 0;
                    break;
                case "always":
                    this.hintRuns = Infinity;
                    break;
                case "once":
                default:
                    this.hintRuns = 2;
                    break
            }
            if (this.option("zoomMode") === "off") {
                this.option("zoomMode", false)
            }
            if (this.option("expand") === "off") {
                this.option("expand", false)
            }
            if (this.option("expandZoomMode") === "off") {
                this.option("expandZoomMode", false)
            }
            if (A.browser.mobile && this.option("zoomMode") === "zoom" && this.option("zoomPosition") === "inner") {
                if (this.option("expand")) {
                    this.option("zoomMode", false)
                } else {
                    this.option("zoomOn", "click")
                }
            }
        },
        start: function(M) {
            var K;
            var J = this;
            var L;
            if (this.startAttempts < 1) {
                this.loadOptions(M);
                if (y && !this.option("autostart")) {
                    return
                }
                this.originalImg = this.placeholder.querySelector("img");
                this.originalImgSrc = this.originalImg ? this.originalImg.getAttribute("src") : null;
                this.originalTitle = i(this.placeholder).getAttribute("title");
                i(this.placeholder).removeAttribute("title")
            }
            L = new l().parseNode(this.placeholder, this.originalTitle, true);
            if (!L.small.url) {
                if (++this.startAttempts <= D) {
                    this.startTimer = setTimeout(function() {
                        J.start()
                    }, 100)
                }
                return
            }
            this.primaryImage = L;
            this.image = this.primaryImage;
            F(this.placeholder);
            this.id = this.placeholder.getAttribute("id") || "mz-" + Math.floor(Math.random() * A.now());
            this.placeholder.setAttribute("id", this.id);
            this.node = A.$new("figure").jAddClass("mz-figure");
            this.node.enclose(this.image.small.node).jAddClass(this.option("cssClass"));
            if (this.option("rightClick") !== true) {
                this.node.jAddEvent("contextmenu", function(O) {
                    O.stop();
                    return false
                })
            }
            this.node.jAddClass("mz-" + this.option("zoomOn") + "-zoom");
            if (!this.option("expand")) {
                this.node.jAddClass("mz-no-expand")
            }
            this.lens = {
                node: A.$new("div", {
                    "class": "mz-lens"
                }, {
                    top: 0
                }).jAppendTo(this.node),
                image: A.$new("img", {
                    src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                }, {
                    position: "absolute",
                    top: 0,
                    left: 0
                }),
                width: 0,
                height: 0,
                pos: {
                    x: 0,
                    y: 0
                },
                spos: {
                    x: 0,
                    y: 0
                },
                size: {
                    width: 0,
                    height: 0
                },
                border: {
                    x: 0,
                    y: 0
                },
                dx: 0,
                dy: 0,
                innertouch: false,
                hide: function() {
                    if (A.browser.features.transform) {
                        this.node.jSetCss({
                            transform: "translate(-10000px, -10000px)"
                        })
                    } else {
                        this.node.jSetCss({
                            top: -10000
                        })
                    }
                }
            };
            this.lens.hide();
            this.lens.node.append(this.lens.image);
            this.zoomBox = {
                node: A.$new("div", {
                    "class": "mz-zoom-window"
                }, {
                    top: -100000
                }).jAddClass(this.option("cssClass")).jAppendTo(I),
                image: A.$new("img", {
                    src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                }, {
                    position: "absolute"
                }),
                aspectRatio: 0,
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                size: {
                    width: "auto",
                    wunits: "px",
                    height: "auto",
                    hunits: "px"
                },
                mode: this.option("zoomMode"),
                position: this.option("zoomPosition"),
                trigger: this.option("zoomOn"),
                custom: false,
                active: false,
                activating: false,
                enabled: false,
                enable: i(function() {
                    this.zoomBox.enabled = arguments[0] !== false;
                    this.node[this.zoomBox.enabled ? "jRemoveClass" : "jAddClass"]("mz-no-zoom")
                }).jBind(this),
                hide: i(function() {
                    var O = i(this.node).jFetch("cr");
                    this.zoomBox.node.jRemoveEvent("transitionend");
                    this.zoomBox.node.jSetCss({
                        top: -100000
                    }).jAppendTo(I);
                    this.zoomBox.node.jRemoveClass("mz-deactivating mz-p-" + (this.zoomBox.mode === "zoom" ? this.zoomBox.position : this.zoomBox.mode));
                    if (!this.expanded && O) {
                        O.jRemove()
                    }
                    this.zoomBox.image.getAttribute("style");
                    this.zoomBox.image.removeAttribute("style")
                }).jBind(this),
                setMode: i(function(O) {
                    this.node[O === false ? "jAddClass" : "jRemoveClass"]("mz-no-zoom");
                    this.node[O === "magnifier" ? "jAddClass" : "jRemoveClass"]("mz-magnifier-zoom");
                    this.zoomBox.node[O === "magnifier" ? "jAddClass" : "jRemoveClass"]("mz-magnifier");
                    this.zoomBox.node[O === "preview" ? "jAddClass" : "jRemoveClass"]("mz-preview");
                    if (O !== "zoom") {
                        this.node.jRemoveClass("mz-inner-zoom");
                        this.zoomBox.node.jRemoveClass("mz-inner")
                    }
                    this.zoomBox.mode = O;
                    if (O === false) {
                        this.zoomBox.enable(false)
                    }
                }).jBind(this)
            };
            this.zoomBox.node.append(this.zoomBox.image);
            this.zoomBox.setMode(this.option("zoomMode"));
            this.zoomBox.image.removeAttribute("width");
            this.zoomBox.image.removeAttribute("height");
            if (typeof(r) !== "undefined") {
                var N = Math.floor(Math.random() * A.now());
                i(this.node).jStore("cr", A.$new(((Math.floor(Math.random() * 101) + 1) % 2) ? "span" : "div").setProps({
                    id: "crMz" + N
                }).jSetCss({
                    display: "inline",
                    overflow: "hidden",
                    visibility: "visible",
                    color: r[1],
                    fontSize: r[2],
                    fontWeight: r[3],
                    fontFamily: "sans-serif",
                    position: "absolute",
                    top: 8,
                    left: 8,
                    margin: "auto",
                    width: "auto",
                    textAlign: "right",
                    lineHeight: "2em",
                    zIndex: 2147483647
                }).changeContent(x(r[0])));
                if (i(i(this.node).jFetch("cr")).byTag("a")[0]) {
                    i(i(i(this.node).jFetch("cr")).byTag("a")[0]).jAddEvent("tap btnclick", function(O) {
                        O.stopDistribution();
                        window.open(this.href)
                    }).setProps({
                        id: "mzCrA" + N
                    })
                }
                A.addCSS("#" + this.id + " > figure.mz-figure > #" + ("crMz" + N) + ",#" + this.id + " > figure.mz-figure > #" + ("crMz" + N) + " > #" + ("mzCrA" + N) + ",html body .mz-expand > #" + ("crMz" + N) + ",html body .mz-expand > #" + ("crMz" + N) + " > #" + ("mzCrA" + N), {
                    display: "inline !important;",
                    visibility: "visible !important;",
                    color: r[1] + " !important;",
                    "font-size": r[2] + "px !important;",
                    "z-index": "2147483647 !important;"
                }, "mz-runtime-css", true)
            }
            if ((K = ("" + this.option("zoomWidth")).match(/^([0-9]+)?(px|%)?$/))) {
                this.zoomBox.size.wunits = K[2] || "px";
                this.zoomBox.size.width = (parseFloat(K[1]) || "auto")
            }
            if ((K = ("" + this.option("zoomHeight")).match(/^([0-9]+)?(px|%)?$/))) {
                this.zoomBox.size.hunits = K[2] || "px";
                this.zoomBox.size.height = (parseFloat(K[1]) || "auto")
            }
            if (this.zoomBox.mode === "magnifier") {
                this.node.jAddClass("mz-magnifier-zoom");
                this.zoomBox.node.jAddClass("mz-magnifier");
                if (this.zoomBox.size.width === "auto") {
                    this.zoomBox.size.wunits = "%";
                    this.zoomBox.size.width = 70
                }
                if (this.zoomBox.size.height === "auto") {
                    this.zoomBox.size.hunits = "%"
                }
            } else {
                if (this.option("zoom-position").match(/^#/)) {
                    if (this.zoomBox.custom = i(this.option("zoom-position").replace(/^#/, ""))) {
                        if (i(this.zoomBox.custom).jGetSize().height > 50) {
                            if (this.zoomBox.size.width === "auto") {
                                this.zoomBox.size.wunits = "%";
                                this.zoomBox.size.width = 100
                            }
                            if (this.zoomBox.size.height === "auto") {
                                this.zoomBox.size.hunits = "%";
                                this.zoomBox.size.height = 100
                            }
                        }
                    } else {
                        this.option("zoom-position", "right")
                    }
                }
                if (this.zoomBox.mode === "preview") {
                    if (this.zoomBox.size.width === "auto") {
                        this.zoomBox.size.wunits = "px"
                    }
                    if (this.zoomBox.size.height === "auto") {
                        this.zoomBox.size.hunits = "px"
                    }
                }
                if (this.zoomBox.mode === "zoom") {
                    if (this.zoomBox.size.width === "auto" || this.option("zoom-position") === "inner") {
                        this.zoomBox.size.wunits = "%";
                        this.zoomBox.size.width = 100
                    }
                    if (this.zoomBox.size.height === "auto" || this.option("zoom-position") === "inner") {
                        this.zoomBox.size.hunits = "%";
                        this.zoomBox.size.height = 100
                    }
                }
                if (this.option("zoom-position") === "inner") {
                    this.node.jAddClass("mz-inner-zoom")
                }
            }
            this.zoomBox.position = this.zoomBox.custom ? "custom" : this.option("zoom-position");
            this.lens.border.x = parseFloat(this.lens.node.jGetCss("border-left-width") || "0");
            this.lens.border.y = parseFloat(this.lens.node.jGetCss("border-top-width") || "0");
            this.image.loadSmall(function() {
                if (this.image.small.state !== 2) {
                    return
                }
                this.image.setCurNode("small");
                this.size = this.image.node.jGetSize();
                this.registerEvents();
                this.ready = true;
                if (this.option("lazyZoom") === true) {
                    u("onZoomReady", this.id);
                    if (A.browser.mobile) {
                        this.reflowZoom()
                    } else {
                        this.showHint()
                    }
                }
            }.jBind(this));
            if (this.option("lazyZoom") !== true || this.option("zoomOn") === "always") {
                this.image.load(i(function(O) {
                    this.setupZoom(O, true)
                }).jBind(this));
                this.loadTimer = i(this.showLoading).jBind(this).jDelay(400)
            }
            this.setupSelectors()
        },
        stop: function() {
            clearTimeout(this.startTimer);
            this.unregisterEvents();
            if (this.zoomBox) {
                this.zoomBox.node.kill()
            }
            if (this.expandThumbs) {
                this.expandThumbs.stop();
                this.expandThumbs = null
            }
            if (this.expandBox) {
                this.expandBox.kill()
            }
            if (this.expanded) {
                i(A.browser.getDoc()).jSetCss({
                    overflow: ""
                })
            }
            i(this.additionalImages).jEach(function(J) {
                i(J.origin).jRemoveClass("mz-thumb-selected").jRemoveClass(this.option("cssClass") || "mz-$dummy-css-class-to-jRemove$")
            }, this);
            if (this.originalImg) {
                this.placeholder.append(this.originalImg);
                if (this.originalImgSrc) {
                    this.originalImg.setAttribute("src", this.originalImgSrc)
                }
            }
            if (this.originalTitle) {
                this.placeholder.setAttribute("title", this.originalTitle)
            }
            if (this.node) {
                this.node.kill()
            }
        },
        setupZoom: function(K, L) {
            var J = this.image;
            if (K.zoom.state !== 2) {
                this.image = K;
                this.ready = true;
                this.zoomBox.enable(false);
                return
            }
            this.image = K;
            this.image.setCurNode(this.expanded ? "zoom" : "small");
            this.zoomBox.image.src = this.image.getURL("zoom");
            this.zoomBox.node.jRemoveClass("mz-preview");
            this.zoomBox.image.getAttribute("style");
            this.zoomBox.image.removeAttribute("style");
            this.zoomBox.node.jGetSize();
            setTimeout(i(function() {
                var N = this.zoomBox.image.jGetSize(),
                    M;
                this.zoomSizeOrigin = this.image.jGetSize("zoom");
                if (N.width * N.height > 1 && N.width * N.height < this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) {
                    this.zoomSizeOrigin = N
                }
                this.zoomSize = A.detach(this.zoomSizeOrigin);
                if (this.zoomBox.mode === "preview") {
                    this.zoomBox.node.jAddClass("mz-preview")
                }
                this.setCaption();
                this.lens.image.src = this.image.node.currentSrc || this.image.node.src;
                this.zoomBox.enable(this.zoomBox.mode && !(this.expanded && this.zoomBox.mode === "preview"));
                this.ready = true;
                this.activateTimer = null;
                this.resizeCallback();
                this.node.jAddClass("mz-ready");
                this.hideLoading();
                if (J !== this.image) {
                    u("onUpdate", this.id, J.origin, this.image.origin);
                    if (this.nextImage) {
                        M = this.nextImage;
                        this.nextImage = null;
                        this.update(M.image, M.onswipe)
                    }
                } else {
                    if (!!L) {
                        u("onZoomReady", this.id)
                    }
                }
                if (this.initEvent) {
                    this.node.jCallEvent(this.initEvent.type, this.initEvent)
                } else {
                    if (this.expanded && this.option("expandZoomOn") === "always") {
                        this.activate()
                    } else {
                        if (!!L) {
                            this.showHint()
                        }
                    }
                }
            }).jBind(this), 256)
        },
        setupSelectors: function() {
            var K = this.id;
            var J;
            var L;
            L = new RegExp("zoom\\-id(\\s+)?:(\\s+)?" + K + "($|;)");
            if (A.browser.features.query) {
                J = A.$A(document.querySelectorAll('[data-zoom-id="' + this.id + '"]'));
                J = i(J).concat(A.$A(document.querySelectorAll('[rel*="zoom-id"]')).filter(function(M) {
                    return L.test(M.getAttribute("rel") || "")
                }))
            } else {
                J = A.$A(document.getElementsByTagName("A")).filter(function(M) {
                    return K === M.getAttribute("data-zoom-id") || L.test(M.getAttribute("rel") || "")
                })
            }
            i(J).jEach(function(N) {
                var M, O;
                i(N).jAddEvent("click", function(P) {
                    P.stopDefaults()
                });
                M = new l().parseNode(N, this.originalTitle);
                if (this.image.zoom.src.has(M.zoom.src) && this.image.small.src.has(M.small.src)) {
                    i(M.origin).jAddClass("mz-thumb-selected");
                    M = this.image;
                    M.origin = N
                }
                if (!M.link && this.image.link) {
                    M.link = this.image.link
                }
                O = i(function() {
                    this.update(M)
                }).jBind(this);
                i(N).jAddEvent("mousedown", function(P) {
                    if ("stopImmediatePropagation" in P) {
                        P.stopImmediatePropagation()
                    }
                }, 5);
                i(N).jAddEvent("tap " + (this.option("selectorTrigger") === "hover" ? "mouseover mouseout" : "btnclick"), i(function(Q, P) {
                    if (this.updateTimer) {
                        clearTimeout(this.updateTimer)
                    }
                    this.updateTimer = false;
                    if (Q.type === "mouseover") {
                        this.updateTimer = i(O).jDelay(P)
                    } else {
                        if (Q.type === "tap" || Q.type === "btnclick") {
                            O()
                        }
                    }
                }).jBindAsEvent(this, 60)).jAddClass(this.option("cssClass")).jAddClass("mz-thumb");
                M.loadSmall();
                if (this.option("lazyZoom") !== true) {
                    M.loadZoom()
                }
                this.additionalImages.push(M)
            }, this)
        },
        update: function(J, K) {
            if (!this.ready) {
                this.nextImage = {
                    image: J,
                    onswipe: K
                };
                return
            }
            if (!J || J === this.image) {
                return false
            }
            this.deactivate(null, true);
            this.ready = false;
            this.node.jRemoveClass("mz-ready");
            this.loadTimer = i(this.showLoading).jBind(this).jDelay(400);
            J.load(i(function(R) {
                var L, S, Q, N, M, P, O = (A.browser.ieMode < 10) ? "jGetSize" : "getBoundingClientRect";
                this.hideLoading();
                R.setCurNode("small");
                if (!R.node) {
                    this.ready = true;
                    this.node.jAddClass("mz-ready");
                    return
                }
                this.setActiveThumb(R);
                L = this.image.node[O]();
                if (this.expanded) {
                    R.setCurNode("zoom");
                    Q = A.$new("div").jAddClass("mz-expand-bg");
                    if (A.browser.features.cssFilters || A.browser.ieMode < 10) {
                        Q.append(A.$new("img", {
                            src: R.getURL("zoom")
                        }).jSetCss({
                            opacity: 0
                        }))
                    } else {
                        Q.append(new A.SVGImage(R.node).blur(b).getNode().jSetCss({
                            opacity: 0
                        }))
                    }
                    i(Q).jSetCss({
                        "z-index": -99
                    }).jAppendTo(this.expandBox)
                }
                if (this.expanded && this.zoomBox.mode === "zoom" && this.option("expandZoomOn") === "always") {
                    i(R.node).jSetCss({
                        opacity: 0
                    }).jAppendTo(this.node);
                    S = L;
                    M = [R.node, this.image.node];
                    P = [{
                        opacity: [0, 1]
                    }, {
                        opacity: [1, 0]
                    }];
                    i(R.node).jSetCss({
                        "max-width": Math.min(R.jGetSize("zoom").width, this.expandMaxWidth()),
                        "max-height": Math.min(R.jGetSize("zoom").height, this.expandMaxHeight())
                    })
                } else {
                    this.node.jSetCss({
                        height: this.node[O]().height
                    });
                    this.image.node.jSetCss({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        "max-width": "",
                        "max-height": ""
                    });
                    i(R.node).jSetCss({
                        "max-width": Math.min(R.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
                        "max-height": Math.min(R.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity),
                        position: "relative",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        transform: ""
                    }).jAppendTo(this.node);
                    S = i(R.node)[O]();
                    if (!K) {
                        i(R.node).jSetCss({
                            "min-width": L.width,
                            height: L.height,
                            "max-width": L.width,
                            "max-height": ""
                        })
                    }
                    this.node.jSetCss({
                        height: "",
                        overflow: ""
                    }).jGetSize();
                    i(R.node).jGetSize();
                    M = [R.node, this.image.node];
                    P = [A.extend({
                        opacity: [0, 1]
                    }, K ? {
                        scale: [0.6, 1]
                    } : {
                        "min-width": [L.width, S.width],
                        "max-width": [L.width, S.width],
                        height: [L.height, S.height]
                    }), {
                        opacity: [1, 0]
                    }]
                }
                if (this.expanded) {
                    if (this.expandBg.firstChild && Q.firstChild) {
                        N = i(this.expandBg.firstChild).jGetCss("opacity");
                        if (A.browser.gecko) {
                            M = M.concat([Q.firstChild]);
                            P = P.concat([{
                                opacity: [0.0001, N]
                            }])
                        } else {
                            M = M.concat([Q.firstChild, this.expandBg.firstChild]);
                            P = P.concat([{
                                opacity: [0.0001, N]
                            }, {
                                opacity: [N, 0.0001]
                            }])
                        }
                    }
                }
                new A.PFX(M, {
                    duration: (K || this.option("transitionEffect")) ? K ? 400 : 350 : 0,
                    transition: K ? "cubic-bezier(0.175, 0.885, 0.320, 1)" : (L.width === S.width) ? "linear" : "cubic-bezier(0.25, .1, .1, 1)",
                    onComplete: i(function() {
                        this.image.node.jRemove().getAttribute("style");
                        this.image.node.removeAttribute("style");
                        i(R.node).jSetCss(this.expanded ? {
                            width: "auto",
                            height: "auto"
                        } : {
                            width: "",
                            height: ""
                        }).jSetCss({
                            "min-width": "",
                            "min-height": "",
                            opacity: "",
                            "max-width": Math.min(R.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
                            "max-height": Math.min(R.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity)
                        });
                        if (this.expanded) {
                            this.expandBg.jRemove();
                            this.expandBg = undefined;
                            this.expandBg = Q.jSetCssProp("z-index", -100);
                            i(this.expandBg.firstChild).jSetCss({
                                opacity: ""
                            });
                            if (this.expandCaption) {
                                if (R.caption) {
                                    if (R.link) {
                                        this.expandCaption.changeContent("").append(A.$new("a", {
                                            href: R.link
                                        }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(R.caption))
                                    } else {
                                        this.expandCaption.changeContent(R.caption).jAddClass("mz-show")
                                    }
                                } else {
                                    this.expandCaption.jRemoveClass("mz-show")
                                }
                            }
                        }
                        this.setupZoom(R)
                    }).jBind(this),
                    onBeforeRender: i(function(T, U) {
                        if (undefined !== T.scale) {
                            U.jSetCssProp("transform", "scale(" + T.scale + ")")
                        }
                    })
                }).start(P)
            }).jBind(this))
        },
        setActiveThumb: function(K) {
            var J = false;
            i(this.additionalImages).jEach(function(L) {
                i(L.origin).jRemoveClass("mz-thumb-selected");
                if (L === K) {
                    J = true
                }
            });
            if (J && K.origin) {
                i(K.origin).jAddClass("mz-thumb-selected")
            }
            if (this.expandThumbs) {
                this.expandThumbs.selectItem(K.selector)
            }
        },
        setCaption: function(J) {
            if (this.image.caption && this.option("zoomCaption") !== "off" && this.zoomBox.mode !== "magnifier") {
                if (!this.zoomBox.caption) {
                    this.zoomBox.caption = A.$new("div", {
                        "class": "mz-caption"
                    }).jAppendTo(this.zoomBox.node.jAddClass("caption-" + this.option("zoomCaption")))
                }
                this.zoomBox.caption.changeContent(this.image.caption)
            }
        },
        showHint: function(J, M, K) {
            var L;
            if (!this.expanded) {
                if (this.hintRuns <= 0) {
                    return
                }
                if (K !== true) {
                    this.hintRuns--
                }
            }
            if (M === undefined || M === null) {
                if (!this.zoomBox.active && !this.zoomBox.activating) {
                    if (this.option("zoomMode") && (this.zoomBox.enabled || !this.image.loaded()) && !(A.browser.mobile && this.option("expand") && this.zoomBox.mode === "zoom" && this.zoomBox.position === "inner")) {
                        if (this.zoomBox.trigger === "hover") {
                            M = this.option("textHoverZoomHint")
                        } else {
                            if (this.zoomBox.trigger === "click") {
                                M = this.option("textClickZoomHint")
                            }
                        }
                    } else {
                        M = this.option("expand") ? this.option("textExpandHint") : ""
                    }
                } else {
                    M = this.option("expand") ? this.option("textExpandHint") : ""
                }
            }
            if (!M) {
                this.hideHint();
                return
            }
            L = this.node;
            if (!this.hint) {
                this.hint = A.$new("div", {
                    "class": "mz-hint"
                });
                this.hintMessage = A.$new("span", {
                    "class": "mz-hint-message"
                }).append(document.createTextNode(M)).jAppendTo(this.hint);
                i(this.hint).jAppendTo(this.node)
            } else {
                i(this.hintMessage).changeContent(M)
            }
            this.hint.jSetCss({
                "transition-delay": ""
            }).jRemoveClass("mz-hint-hidden");
            if (this.expanded) {
                L = this.expandFigure
            } else {
                if ((this.zoomBox.active || this.zoomBox.activating) && this.zoomBox.mode !== "magnifier" && this.zoomBox.position === "inner") {
                    L = this.zoomBox.node
                }
            }
            if (J === true) {
                setTimeout(i(function() {
                    this.hint.jAddClass("mz-hint-hidden")
                }).jBind(this), 16)
            }
            this.hint.jAppendTo(L)
        },
        hideHint: function() {
            if (this.hint) {
                this.hint.jSetCss({
                    "transition-delay": "0ms"
                }).jAddClass("mz-hint-hidden")
            }
        },
        showLoading: function() {
            if (!this.loadingBox) {
                this.loadingBox = A.$new("div", {
                    "class": "mz-loading"
                });
                this.node.append(this.loadingBox);
                this.loadingBox.jGetSize()
            }
            this.loadingBox.jAddClass("shown")
        },
        hideLoading: function() {
            clearTimeout(this.loadTimer);
            this.loadTimer = null;
            if (this.loadingBox) {
                i(this.loadingBox).jRemoveClass("shown")
            }
        },
        setSize: function(L, P) {
            var O = A.detach(this.zoomBox.size),
                N = (!this.expanded && this.zoomBox.custom) ? i(this.zoomBox.custom).jGetSize() : {
                    width: 0,
                    height: 0
                },
                K, J, M = this.size,
                Q = {
                    x: 0,
                    y: 0
                };
            P = P || this.zoomBox.position;
            this.normalSize = this.image.node.jGetSize();
            this.size = this.image.node.jGetSize();
            this.boundaries = this.image.node.getBoundingClientRect();
            if (!N.height) {
                N = this.size
            }
            if (this.option("upscale") === false || this.zoomBox.mode === false || this.zoomBox.mode === "preview") {
                L = false
            }
            if (this.zoomBox.mode === "preview") {
                if (O.width === "auto") {
                    O.width = this.zoomSizeOrigin.width
                }
                if (O.height === "auto") {
                    O.height = this.zoomSizeOrigin.height
                }
            }
            if (this.expanded && this.zoomBox.mode === "magnifier") {
                O.width = 70;
                O.height = "auto"
            }
            if (this.zoomBox.mode === "magnifier" && O.height === "auto") {
                this.zoomBox.width = parseFloat(O.width / 100) * Math.min(N.width, N.height);
                this.zoomBox.height = this.zoomBox.width
            } else {
                if (this.zoomBox.mode === "zoom" && P === "inner") {
                    this.size = this.node.jGetSize();
                    N = this.size;
                    this.boundaries = this.node.getBoundingClientRect();
                    this.zoomBox.width = N.width;
                    this.zoomBox.height = N.height
                } else {
                    this.zoomBox.width = (O.wunits === "%") ? parseFloat(O.width / 100) * N.width : parseInt(O.width);
                    this.zoomBox.height = (O.hunits === "%") ? parseFloat(O.height / 100) * N.height : parseInt(O.height)
                }
            }
            if (this.zoomBox.mode === "preview") {
                J = Math.min(Math.min(this.zoomBox.width / this.zoomSizeOrigin.width, this.zoomBox.height / this.zoomSizeOrigin.height), 1);
                this.zoomBox.width = this.zoomSizeOrigin.width * J;
                this.zoomBox.height = this.zoomSizeOrigin.height * J
            }
            this.zoomBox.width = Math.ceil(this.zoomBox.width);
            this.zoomBox.height = Math.ceil(this.zoomBox.height);
            this.zoomBox.aspectRatio = this.zoomBox.width / this.zoomBox.height;
            this.zoomBox.node.jSetCss({
                width: this.zoomBox.width,
                height: this.zoomBox.height
            });
            if (L) {
                N = this.expanded ? this.expandBox.jGetSize() : this.zoomBox.node.jGetSize();
                if (!this.expanded && (this.normalSize.width * this.normalSize.height) / (this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) > 0.8) {
                    this.zoomSize.width = 1.5 * this.zoomSizeOrigin.width;
                    this.zoomSize.height = 1.5 * this.zoomSizeOrigin.height
                } else {
                    this.zoomSize = A.detach(this.zoomSizeOrigin)
                }
            }
            if (this.zoomBox.mode !== false && !this.zoomBox.active && !(this.expanded && this.option("expandZoomOn") === "always")) {
                if ((this.normalSize.width * this.normalSize.height) / (this.zoomSize.width * this.zoomSize.height) > 0.8) {
                    this.zoomSize = A.detach(this.zoomSizeOrigin);
                    this.zoomBox.enable(false)
                } else {
                    this.zoomBox.enable(true)
                }
            }
            this.zoomBox.image.jSetCss({
                width: this.zoomSize.width,
                height: this.zoomSize.height
            });
            K = this.zoomBox.node.getInnerSize();
            this.zoomBox.innerWidth = Math.ceil(K.width);
            this.zoomBox.innerHeight = Math.ceil(K.height);
            this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
            this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
            this.lens.node.jSetCss({
                width: this.lens.width,
                height: this.lens.height
            });
            this.lens.image.jSetCss(this.size);
            A.extend(this.lens, this.lens.node.jGetSize());
            if (this.zoomBox.active) {
                clearTimeout(this.moveTimer);
                this.moveTimer = null;
                if (this.lens.innertouch) {
                    this.lens.pos.x *= (this.size.width / M.width);
                    this.lens.pos.y *= (this.size.height / M.height);
                    Q.x = this.lens.spos.x;
                    Q.y = this.lens.spos.y
                } else {
                    Q.x = this.boundaries.left + this.lens.width / 2 + (this.lens.pos.x * (this.size.width / M.width));
                    Q.y = this.boundaries.top + this.lens.height / 2 + (this.lens.pos.y * (this.size.height / M.height))
                }
                this.animate(null, Q)
            }
        },
        reflowZoom: function(N) {
            var Q;
            var P;
            var J;
            var O;
            var M;
            var L;
            var K = i(this.node).jFetch("cr");
            J = a(5);
            M = this.zoomBox.position;
            O = this.expanded ? "inner" : this.zoomBox.custom ? "custom" : this.option("zoom-position");
            L = this.expanded && this.zoomBox.mode === "zoom" ? this.expandBox : document.body;
            if (this.expanded) {
                J.y = 0;
                J.x = 0
            }
            if (!N) {
                this.setSize(true, O)
            }
            Q = this.boundaries.top;
            if (this.zoomBox.mode !== "magnifier") {
                if (N) {
                    this.setSize(false);
                    return
                }
                switch (O) {
                    case "inner":
                    case "custom":
                        Q = 0;
                        P = 0;
                        break;
                    case "top":
                        Q = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
                        if (J.top > Q) {
                            Q = this.boundaries.bottom + this.option("zoom-distance");
                            O = "bottom"
                        }
                        P = this.boundaries.left;
                        break;
                    case "bottom":
                        Q = this.boundaries.bottom + this.option("zoom-distance");
                        if (J.bottom < Q + this.zoomBox.height) {
                            Q = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
                            O = "top"
                        }
                        P = this.boundaries.left;
                        break;
                    case "left":
                        P = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
                        if (J.left > P && J.right >= this.boundaries.right + this.option("zoom-distance") + this.zoomBox.width) {
                            P = this.boundaries.right + this.option("zoom-distance");
                            O = "right"
                        }
                        break;
                    case "right":
                    default:
                        P = this.boundaries.right + this.option("zoom-distance");
                        if (J.right < P + this.zoomBox.width && J.left <= this.boundaries.left - this.zoomBox.width - this.option("zoom-distance")) {
                            P = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
                            O = "left"
                        }
                        break
                }
                switch (this.option("zoom-position")) {
                    case "top":
                    case "bottom":
                        if (J.top > Q || J.bottom < Q + this.zoomBox.height) {
                            O = "inner"
                        }
                        break;
                    case "left":
                    case "right":
                        if (J.left > P || J.right < P + this.zoomBox.width) {
                            O = "inner"
                        }
                        break;
                    default:
                }
                this.zoomBox.position = O;
                if (!this.zoomBox.activating && !this.zoomBox.active) {
                    if (A.browser.mobile && !this.expanded && this.zoomBox.mode === "zoom") {
                        if (this.option("expand")) {
                            this.zoomBox.enable(O !== "inner")
                        } else {
                            if (this.option("zoomOn") !== "click") {
                                this.zoomBox.trigger = O === "inner" ? "click" : this.option("zoomOn");
                                this.unregisterActivateEvent();
                                this.unregisterDeactivateEvent();
                                this.registerActivateEvent(this.zoomBox.trigger === "click");
                                this.registerDeactivateEvent(this.zoomBox.trigger === "click" && !this.option("expand"))
                            }
                        }
                        this.showHint(false, null, true)
                    }
                    return
                }
                this.setSize(false);
                if (N) {
                    return
                }
                if (O === "custom") {
                    L = this.zoomBox.custom;
                    J.y = 0;
                    J.x = 0
                }
                if (O === "inner") {
                    if (this.zoomBox.mode !== "preview") {
                        this.zoomBox.node.jAddClass("mz-inner");
                        this.node.jAddClass("mz-inner-zoom")
                    }
                    this.lens.hide();
                    Q = this.boundaries.top + J.y;
                    P = this.boundaries.left + J.x;
                    if (!this.expanded && A.browser.ieMode && A.browser.ieMode < 11) {
                        Q = 0;
                        P = 0;
                        L = this.node
                    }
                } else {
                    Q += J.y;
                    P += J.x;
                    this.node.jRemoveClass("mz-inner-zoom");
                    this.zoomBox.node.jRemoveClass("mz-inner")
                }
                this.zoomBox.node.jSetCss({
                    top: Q,
                    left: P
                })
            } else {
                this.setSize(false);
                L = this.node
            }
            this.zoomBox.node[this.expanded ? "jAddClass" : "jRemoveClass"]("mz-expanded");
            if (!this.expanded && K) {
                K.jAppendTo(this.zoomBox.mode === "zoom" && O === "inner" ? this.zoomBox.node : this.node, ((Math.floor(Math.random() * 101) + 1) % 2) ? "top" : "bottom")
            }
            this.zoomBox.node.jAppendTo(L)
        },
        changeZoomLevel: function(P) {
            var L;
            var J;
            var N;
            var M;
            var O = false;
            var K = P.isMouse ? 5 : 3 / 54;
            i(P).stop();
            K = (100 + K * Math.abs(P.deltaY)) / 100;
            if (P.deltaY < 0) {
                K = 1 / K
            }
            if (this.zoomBox.mode === "magnifier") {
                J = Math.max(100, Math.round(this.zoomBox.width * K));
                J = Math.min(J, this.size.width * 0.9);
                N = J / this.zoomBox.aspectRatio;
                this.zoomBox.width = Math.ceil(J);
                this.zoomBox.height = Math.ceil(N);
                this.zoomBox.node.jSetCss({
                    width: this.zoomBox.width,
                    height: this.zoomBox.height
                });
                L = this.zoomBox.node.getInnerSize();
                this.zoomBox.innerWidth = Math.ceil(L.width);
                this.zoomBox.innerHeight = Math.ceil(L.height);
                O = true
            } else {
                if (!this.expanded && this.zoomBox.mode === "zoom") {
                    J = Math.max(50, Math.round(this.lens.width * K));
                    J = Math.min(J, this.size.width * 0.9);
                    N = J / this.zoomBox.aspectRatio;
                    this.zoomSize.width = Math.ceil((this.zoomBox.innerWidth / J) * this.size.width);
                    this.zoomSize.height = Math.ceil((this.zoomBox.innerHeight / N) * this.size.height);
                    this.zoomBox.image.jSetCss({
                        width: this.zoomSize.width,
                        height: this.zoomSize.height
                    })
                } else {
                    return
                }
            }
            M = i(window).jGetScroll();
            this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
            this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
            this.lens.node.jSetCss({
                width: this.lens.width,
                height: this.lens.height
            });
            A.extend(this.lens, this.lens.node.jGetSize());
            if (this.zoomBox.active) {
                clearTimeout(this.moveTimer);
                this.moveTimer = null;
                if (O) {
                    this.moveTimer = true
                }
                this.animate(null, {
                    x: P.x - M.x,
                    y: P.y - M.y
                });
                if (O) {
                    this.moveTimer = null
                }
            }
        },
        registerActivateEvent: function(L) {
            var K;
            var J = L ? "dbltap btnclick" : "touchstart" + (window.navigator.pointerEnabled ? " pointerdown" : window.navigator.msPointerEnabled ? " MSPointerDown" : "") + (window.navigator.pointerEnabled ? " pointermove" : window.navigator.msPointerEnabled ? " MSPointerMove" : " mousemove");
            var M = this.node.jFetch("mz:handlers:activate:fn", (!L) ? i(function(N) {
                if (c(N) && !h(N)) {
                    return
                }
                if (N && N.pointerType === "touch" && N.type !== "pointerdown") {
                    return
                }
                K = (A.browser.ieMode < 9) ? A.extend({}, N) : N;
                if (!this.activateTimer) {
                    clearTimeout(this.activateTimer);
                    this.activateTimer = setTimeout(i(function() {
                        this.activate(K)
                    }).jBind(this), 120)
                }
            }).jBindAsEvent(this) : i(this.activate).jBindAsEvent(this));
            this.node.jStore("mz:handlers:activate:event", J).jAddEvent(J, M, 10)
        },
        unregisterActivateEvent: function() {
            var J = this.node.jFetch("mz:handlers:activate:event");
            var K = this.node.jFetch("mz:handlers:activate:fn");
            this.node.jRemoveEvent(J, K);
            this.node.jDel("mz:handlers:activate:fn")
        },
        registerDeactivateEvent: function(K) {
            var J = K ? "dbltap btnclick" : "touchend" + (window.navigator.pointerEnabled ? " pointerup pointerout pointermove" : window.navigator.msPointerEnabled ? " MSPointerUp MSPointerOut MSPointerMove" : " mouseout mousemove");
            var L = this.node.jFetch("mz:handlers:deactivate:fn", i(function(N) {
                if (c(N) && !h(N)) {
                    return
                }
                if (N && N.type === "pointerup" && N.pointerType !== "touch") {
                    return
                }
                if (N && (N.type === "pointermove" || N.type === "MSPointerMove" || N.type === "mousemove")) {
                    if (!this.ready || !this.zoomBox.enabled || !this.zoomBox.active) {
                        return
                    }
                    var M = N.getClientXY();
                    if (M.x < this.boundaries.left || M.x > this.boundaries.right || M.y < this.boundaries.top || M.y > this.boundaries.bottom) {
                        this.deactivate(N);
                        return
                    }
                } else {
                    if (this.zoomBox.node !== N.getRelated() && !((this.zoomBox.position === "inner" || this.zoomBox.mode === "magnifier") && this.zoomBox.node.hasChild(N.getRelated())) && !this.node.hasChild(N.getRelated())) {
                        this.deactivate(N);
                        return
                    }
                }
            }).jBindAsEvent(this));
            this.node.jStore("mz:handlers:deactivate:event", J).jAddEvent(J, L, 20)
        },
        unregisterDeactivateEvent: function() {
            var J = this.node.jFetch("mz:handlers:deactivate:event");
            var K = this.node.jFetch("mz:handlers:deactivate:fn");
            this.node.jRemoveEvent(J, K);
            this.node.jDel("mz:handlers:deactivate:fn")
        },
        registerEvents: function() {
            this.moveBind = this.move.jBind(this);
            this.node.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], i(function(J) {
                if ((A.browser.androidBrowser || A.browser.platform === "android" && A.browser.gecko) && this.option("zoomMode") && this.option("zoomOn") !== "click" && J.type === "touchstart") {
                    J.stopDefaults();
                    if (A.browser.gecko) {
                        J.stopDistribution()
                    }
                }
                if (!this.zoomBox.active) {
                    return
                }
                if (this.zoomBox.position === "inner") {
                    this.lens.spos = J.getClientXY()
                }
            }).jBindAsEvent(this), 10);
            this.node.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], i(function(J) {
                if (c(J) && h(J)) {
                    this.lens.touchmovement = false
                }
            }).jBindAsEvent(this), 10);
            this.node.jAddEvent("touchmove " + (A.browser.platform === "android" ? "" : window.navigator.pointerEnabled ? "pointermove" : window.navigator.msPointerEnabled ? "MSPointerMove" : "mousemove"), i(this.animate).jBindAsEvent(this));
            if (this.option("zoomMode")) {
                this.registerActivateEvent(this.option("zoomOn") === "click");
                this.registerDeactivateEvent(this.option("zoomOn") === "click" && !this.option("expand"))
            }
            this.node.jAddEvent("mousedown", function(J) {
                J.stopDistribution()
            }, 10).jAddEvent("btnclick", i(function(J) {
                this.node.jRaiseEvent("MouseEvent", "click");
                if (this.expanded) {
                    this.expandBox.jCallEvent("btnclick", J)
                }
            }).jBind(this), 15);
            if (this.option("expand")) {
                this.node.jAddEvent("tap btnclick", i(this.expand).jBindAsEvent(this), 15)
            } else {
                this.node.jAddEvent("tap btnclick", i(this.openLink).jBindAsEvent(this), 15)
            }
            if (this.additionalImages.length > 1) {
                this.swipe()
            }
            if (!A.browser.mobile && this.option("variableZoom")) {
                this.node.jAddEvent("mousescroll", this.changeZoomLevel.jBindAsEvent(this))
            }
            i(window).jAddEvent(A.browser.mobile ? "resize" : "resize scroll", this.onResize)
        },
        unregisterEvents: function() {
            if (this.node) {
                this.node.jRemoveEvent("mousescroll")
            }
            i(window).jRemoveEvent("resize scroll", this.onResize);
            i(this.additionalImages).jEach(function(J) {
                i(J.origin).jClearEvents()
            })
        },
        activate: function(P) {
            var Q;
            var O;
            var M;
            var N;
            var J;
            var K = 0;
            var L = 0;
            if (!this.image.loaded() || !this.ready || !this.zoomBox.enabled || this.zoomBox.active || this.zoomBox.activating) {
                if (!this.image.loaded() && !this.initEvent) {
                    if (P) {
                        this.initEvent = e(P);
                        P.stopQueue()
                    }
                    this.image.load(this.setupZoom.jBind(this));
                    if (!this.loadTimer) {
                        this.loadTimer = i(this.showLoading).jBind(this).jDelay(400)
                    }
                }
                return
            }
            if (P && P.type === "pointermove" && P.pointerType === "touch") {
                return
            }
            if (!this.option("zoomMode") && this.option("expand") && !this.expanded) {
                this.zoomBox.active = true;
                return
            }
            this.zoomBox.activating = true;
            if (this.expanded && this.zoomBox.mode === "zoom") {
                N = this.image.node.jGetRect();
                this.expandStage.jAddClass("mz-zoom-in");
                J = this.expandFigure.jGetRect();
                L = ((N.left + N.right) / 2 - (J.left + J.right) / 2);
                K = ((N.top + N.bottom) / 2 - (J.top + J.bottom) / 2)
            }
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-deactivating").jRemoveEvent("transitionend");
            this.zoomBox.node.jAddClass("mz-activating");
            this.node.jAddClass("mz-activating");
            this.reflowZoom();
            O = (this.zoomBox.mode === "zoom") ? this.zoomBox.position : this.zoomBox.mode;
            if (A.browser.features.transition && !(this.expanded && this.option("expandZoomOn") === "always")) {
                if (O === "inner") {
                    M = this.image.node.jGetSize();
                    this.zoomBox.image.jSetCss({
                        transform: "translate3d(0," + K + "px, 0) scale(" + M.width / this.zoomSize.width + ", " + M.height / this.zoomSize.height + ")"
                    }).jGetSize();
                    this.zoomBox.image.jAddEvent("transitionend", i(function() {
                        this.zoomBox.image.jRemoveEvent("transitionend");
                        this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + O);
                        this.zoomBox.activating = false;
                        this.zoomBox.active = true
                    }).jBind(this));
                    this.zoomBox.node.jAddClass("mz-p-" + O).jGetSize();
                    if (!A.browser.mobile && A.browser.chrome && (A.browser.uaName === "chrome" || A.browser.uaName === "opera")) {
                        this.zoomBox.activating = false;
                        this.zoomBox.active = true
                    }
                } else {
                    this.zoomBox.node.jAddEvent("transitionend", i(function() {
                        this.zoomBox.node.jRemoveEvent("transitionend");
                        this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + O)
                    }).jBind(this));
                    this.zoomBox.node.jSetCss({
                        transition: "none"
                    });
                    this.zoomBox.node.jAddClass("mz-p-" + O).jGetSize();
                    this.zoomBox.node.jSetCss({
                        transition: ""
                    }).jGetSize();
                    this.zoomBox.node.jRemoveClass("mz-p-" + O);
                    this.zoomBox.activating = false;
                    this.zoomBox.active = true
                }
            } else {
                this.zoomBox.node.jRemoveClass("mz-activating");
                this.zoomBox.activating = false;
                this.zoomBox.active = true
            }
            if (!this.expanded) {
                this.showHint(true)
            }
            if (P) {
                P.stop().stopQueue();
                Q = P.getClientXY();
                if (this.zoomBox.mode === "magnifier" && (/tap/i).test(P.type)) {
                    Q.y -= this.zoomBox.height / 2 + 10
                }
                if (O === "inner" && ((/tap/i).test(P.type) || c(P))) {
                    this.lens.pos = {
                        x: 0,
                        y: 0
                    };
                    Q.x = -(Q.x - this.boundaries.left - this.size.width / 2) * (this.zoomSize.width / this.size.width);
                    Q.y = -(Q.y - this.boundaries.top - this.size.height / 2) * (this.zoomSize.height / this.size.height)
                }
            } else {
                Q = {
                    x: this.boundaries.left + (this.boundaries.right - this.boundaries.left) / 2,
                    y: this.boundaries.top + (this.boundaries.bottom - this.boundaries.top) / 2
                };
                if (A.browser.mobile && this.expanded && this.option("expandZoomOn") === "always") {
                    this.lens.innertouch = true;
                    this.lens.pos = {
                        x: 0,
                        y: 0
                    };
                    Q.x = -(Q.x - this.boundaries.left - this.size.width / 2) * (this.zoomSize.width / this.size.width);
                    Q.y = -(Q.y - this.boundaries.top - this.size.height / 2) * (this.zoomSize.height / this.size.height)
                }
            }
            this.node.jRemoveClass("mz-activating").jAddClass("mz-active");
            Q.x += -L;
            Q.y += -K;
            this.lens.spos = {
                x: 0,
                y: 0
            };
            this.lens.dx = 0;
            this.lens.dy = 0;
            this.animate(P, Q, true);
            u("onZoomIn", this.id)
        },
        deactivate: function(L, Q) {
            var O;
            var M;
            var J;
            var K;
            var N = 0;
            var P = 0;
            var R = this.zoomBox.active;
            this.initEvent = null;
            if (!this.ready) {
                return
            }
            if (L && L.type === "pointerout" && L.pointerType === "touch") {
                return
            }
            clearTimeout(this.moveTimer);
            this.moveTimer = null;
            clearTimeout(this.activateTimer);
            this.activateTimer = null;
            this.zoomBox.activating = false;
            this.zoomBox.active = false;
            if (Q !== true && !this.expanded) {
                if (R) {
                    if (A.browser.mobile && !this.expanded && this.zoomBox.mode === "zoom") {
                        this.reflowZoom()
                    } else {
                        this.showHint()
                    }
                }
            }
            if (!this.zoomBox.enabled) {
                return
            }
            if (L) {
                L.stop()
            }
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-activating").jRemoveEvent("transitionend");
            if (this.expanded) {
                K = this.expandFigure.jGetRect();
                if (this.option("expandZoomOn") !== "always") {
                    this.expandStage.jRemoveClass("mz-zoom-in")
                }
                this.image.node.jSetCss({
                    "max-height": this.expandMaxHeight()
                });
                J = this.image.node.jGetRect();
                P = ((J.left + J.right) / 2 - (K.left + K.right) / 2);
                N = ((J.top + J.bottom) / 2 - (K.top + K.bottom) / 2)
            }
            O = (this.zoomBox.mode === "zoom") ? this.zoomBox.position : this.zoomBox.mode;
            if (A.browser.features.transition && L && !(this.expanded && this.option("expandZoomOn") === "always")) {
                if (O === "inner") {
                    this.zoomBox.image.jAddEvent("transitionend", i(function() {
                        this.zoomBox.image.jRemoveEvent("transitionend");
                        this.node.jRemoveClass("mz-active");
                        setTimeout(i(function() {
                            this.zoomBox.hide()
                        }).jBind(this), 32)
                    }).jBind(this));
                    M = this.image.node.jGetSize();
                    this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + O).jGetSize();
                    this.zoomBox.image.jSetCss({
                        transform: "translate3d(0," + N + "px,0) scale(" + M.width / this.zoomSize.width + ", " + M.height / this.zoomSize.height + ")"
                    })
                } else {
                    this.zoomBox.node.jAddEvent("transitionend", i(function() {
                        this.zoomBox.hide();
                        this.node.jRemoveClass("mz-active")
                    }).jBind(this));
                    this.zoomBox.node.jGetCss("opacity");
                    this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + O);
                    this.node.jRemoveClass("mz-active")
                }
            } else {
                this.zoomBox.hide();
                this.node.jRemoveClass("mz-active")
            }
            this.lens.dx = 0;
            this.lens.dy = 0;
            this.lens.spos = {
                x: 0,
                y: 0
            };
            this.lens.hide();
            if (R) {
                u("onZoomOut", this.id)
            }
        },
        animate: function(T, S, R) {
            var L = S;
            var N;
            var M;
            var P = 0;
            var K;
            var O = 0;
            var J;
            var U;
            var Q = false;
            if (!this.zoomBox.active && !R) {
                return
            }
            if (T) {
                i(T).stopDefaults().stopDistribution();
                if (c(T) && !h(T)) {
                    return
                }
                Q = (/tap/i).test(T.type) || c(T);
                if (Q && !this.lens.touchmovement) {
                    this.lens.touchmovement = Q
                }
                if (!L) {
                    L = T.getClientXY()
                }
            }
            if (this.zoomBox.mode === "preview") {
                return
            }
            if (this.zoomBox.mode === "zoom" && this.zoomBox.position === "inner" && (T && Q || !T && this.lens.innertouch)) {
                this.lens.innertouch = true;
                N = this.lens.pos.x + (L.x - this.lens.spos.x);
                M = this.lens.pos.y + (L.y - this.lens.spos.y);
                this.lens.spos = L;
                P = Math.min(0, this.zoomBox.innerWidth - this.zoomSize.width) / 2;
                K = -P;
                O = Math.min(0, this.zoomBox.innerHeight - this.zoomSize.height) / 2;
                J = -O
            } else {
                this.lens.innertouch = false;
                if (this.zoomBox.mode === "magnifier") {
                    L.y = Math.max(this.boundaries.top, Math.min(L.y, this.boundaries.bottom));
                    L.x = Math.max(this.boundaries.left, Math.min(L.x, this.boundaries.right))
                }
                N = L.x - this.boundaries.left;
                M = L.y - this.boundaries.top;
                K = this.size.width - this.lens.width;
                J = this.size.height - this.lens.height;
                N -= this.lens.width / 2;
                M -= this.lens.height / 2
            }
            if (this.zoomBox.mode !== "magnifier") {
                N = Math.max(P, Math.min(N, K));
                M = Math.max(O, Math.min(M, J))
            }
            this.lens.pos.x = N = Math.round(N);
            this.lens.pos.y = M = Math.round(M);
            if (this.zoomBox.mode === "zoom" && this.zoomBox.position !== "inner") {
                if (A.browser.features.transform) {
                    this.lens.node.jSetCss({
                        transform: "translate(" + this.lens.pos.x + "px," + this.lens.pos.y + "px)"
                    });
                    this.lens.image.jSetCss({
                        transform: "translate(" + -(this.lens.pos.x + this.lens.border.x) + "px, " + -(this.lens.pos.y + this.lens.border.y) + "px)"
                    })
                } else {
                    this.lens.node.jSetCss({
                        top: this.lens.pos.y,
                        left: this.lens.pos.x
                    });
                    this.lens.image.jSetCss({
                        top: -(this.lens.pos.y + this.lens.border.y),
                        left: -(this.lens.pos.x + this.lens.border.x)
                    })
                }
            }
            if (this.zoomBox.mode === "magnifier") {
                if (this.lens.touchmovement && !(T && T.type === "dbltap")) {
                    L.y -= this.zoomBox.height / 2 + 10
                }
                this.zoomBox.node.jSetCss({
                    top: L.y - this.boundaries.top - this.zoomBox.height / 2,
                    left: L.x - this.boundaries.left - this.zoomBox.width / 2
                })
            }
            if (!this.moveTimer) {
                this.lens.dx = 0;
                this.lens.dy = 0;
                this.move(1)
            }
        },
        move: function(M) {
            var L;
            var K;
            var J;
            var N;
            if (!isFinite(M)) {
                if (this.lens.innertouch) {
                    M = this.lens.touchmovement ? 0.4 : 0.16
                } else {
                    M = this.option("smoothing") ? 0.2 : this.lens.touchmovement ? 0.4 : 0.8
                }
            }
            L = ((this.lens.pos.x - this.lens.dx) * M);
            K = ((this.lens.pos.y - this.lens.dy) * M);
            this.lens.dx += L;
            this.lens.dy += K;
            if (!this.moveTimer || Math.abs(L) > 0.000001 || Math.abs(K) > 0.000001) {
                if (this.lens.innertouch) {
                    J = this.lens.dx;
                    N = this.lens.dy
                } else {
                    J = (this.lens.dx * (this.zoomSize.width / this.size.width) - Math.max(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2);
                    N = (this.lens.dy * (this.zoomSize.height / this.size.height) - Math.max(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2);
                    if (this.zoomBox.mode === "magnifier") {
                        J = Math.round(J);
                        N = Math.round(N)
                    }
                    J = -J;
                    N = -N
                }
                this.zoomBox.image.jSetCss(A.browser.features.transform ? {
                    transform: g + J + "px," + N + "px" + C + " scale(1)"
                } : {
                    left: -(this.lens.dx * (this.zoomSize.width / this.size.width) + Math.min(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2),
                    top: -(this.lens.dy * (this.zoomSize.height / this.size.height) + Math.min(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2)
                })
            }
            if (this.zoomBox.mode === "magnifier") {
                return
            }
            this.moveTimer = setTimeout(this.moveBind, 16)
        },
        swipe: function() {
            var V;
            var L;
            var Q = 30;
            var N = 201;
            var S;
            var T = "";
            var K = {};
            var J;
            var P;
            var U = 0;
            var W = {
                transition: A.browser.cssTransform + String.fromCharCode(32) + "300ms cubic-bezier(.18,.35,.58,1)"
            };
            var M;
            var R;
            var O = i(function(X) {
                if (!this.ready || this.zoomBox.active) {
                    return
                }
                if (X.state === "dragstart") {
                    clearTimeout(this.activateTimer);
                    this.activateTimer = null;
                    U = 0;
                    K = {
                        x: X.x,
                        y: X.y,
                        ts: X.timeStamp
                    };
                    V = this.size.width;
                    L = V / 2;
                    this.image.node.jRemoveEvent("transitionend");
                    this.image.node.jSetCssProp("transition", "");
                    this.image.node.jSetCssProp("transform", "translate3d(0, 0, 0)");
                    R = null
                } else {
                    J = (X.x - K.x);
                    P = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    if (R === null) {
                        R = (Math.abs(X.x - K.x) < Math.abs(X.y - K.y))
                    }
                    if (R) {
                        return
                    }
                    X.stop();
                    if (X.state === "dragend") {
                        U = 0;
                        M = null;
                        S = X.timeStamp - K.ts;
                        if (Math.abs(J) > L || (S < N && Math.abs(J) > Q)) {
                            if ((T = (J > 0) ? "backward" : (J <= 0) ? "forward" : "")) {
                                if (T === "backward") {
                                    M = this.getPrev();
                                    U += V * 10
                                } else {
                                    M = this.getNext();
                                    U -= V * 10
                                }
                            }
                        }
                        P.x = U;
                        P.deg = -90 * (P.x / V);
                        this.image.node.jAddEvent("transitionend", i(function(Y) {
                            this.image.node.jRemoveEvent("transitionend");
                            this.image.node.jSetCssProp("transition", "");
                            if (M) {
                                this.image.node.jSetCss({
                                    transform: "translate3d(" + P.x + "px, 0px, 0px)"
                                });
                                this.update(M, true)
                            }
                        }).jBind(this));
                        this.image.node.jSetCss(W);
                        this.image.node.jSetCss({
                            "transition-duration": P.x ? "100ms" : "300ms",
                            opacity: 1 - 0.7 * Math.abs(P.x / V),
                            transform: "translate3d(" + P.x + "px, 0px, 0px)"
                        });
                        J = 0;
                        return
                    }
                    P.x = J;
                    P.z = -50 * Math.abs(P.x / L);
                    P.deg = -60 * (P.x / L);
                    this.image.node.jSetCss({
                        opacity: 1 - 0.7 * Math.abs(P.x / L),
                        transform: "translate3d(" + P.x + "px, 0px, " + P.z + "px)"
                    })
                }
            }).jBind(this);
            this.node.jAddEvent("touchdrag", O)
        },
        setupExpandGallery: function() {
            var K, J;
            if (this.additionalImages.length) {
                this.expandGallery = this.additionalImages
            } else {
                K = this.placeholder.getAttribute("data-gallery");
                if (K) {
                    if (A.browser.features.query) {
                        J = A.$A(document.querySelectorAll('.MagicZoom[data-gallery="' + K + '"], .MagicZoomPlus[data-gallery="' + K + '"]'))
                    } else {
                        J = A.$A(document.getElementsByTagName("A")).filter(function(L) {
                            return K === L.getAttribute("data-gallery")
                        })
                    }
                    i(J).jEach(function(M) {
                        var L, N;
                        L = j(M);
                        if (L && L.additionalImages.length > 0) {
                            return
                        }
                        if (L) {
                            N = new l(L.image.small.url, L.image.zoom.url, L.image.caption, null, L.image.origin);
                            N.link = L.image.link
                        } else {
                            N = new l().parseNode(M, L ? L.originalTitle : null)
                        }
                        if (this.image.zoom.src.has(N.zoom.url) && this.image.small.src.has(N.small.url)) {
                            N = this.image
                        }
                        this.expandGallery.push(N)
                    }, this);
                    this.primaryImage = this.image
                }
            }
            if (this.expandGallery.length > 1) {
                this.expandStage.jAddClass("with-thumbs");
                this.expandNav = A.$new("div", {
                    "class": "mz-expand-thumbnails"
                }).jAppendTo(this.expandStage);
                this.expandThumbs = new s(this.expandNav);
                i(this.expandGallery).jEach(function(L) {
                    var M = i(function(N) {
                        this.setActiveThumb(L);
                        this.update(L)
                    }).jBind(this);
                    L.selector = this.expandThumbs.addItem(A.$new("img", {
                        src: L.getURL("small")
                    }).jAddEvent("tap btnclick", function(N) {
                        N.stop()
                    }).jAddEvent("tap " + (this.option("selectorTrigger") === "hover" ? "mouseover mouseout" : "btnclick"), i(function(O, N) {
                        if (this.updateTimer) {
                            clearTimeout(this.updateTimer)
                        }
                        this.updateTimer = false;
                        if (O.type === "mouseover") {
                            this.updateTimer = i(M).jDelay(N)
                        } else {
                            if (O.type === "tap" || O.type === "btnclick") {
                                M()
                            }
                        }
                    }).jBindAsEvent(this, 60)))
                }, this);
                this.buttons.next.show();
                this.buttons.prev.show()
            } else {
                this.expandStage.jRemoveClass("with-thumbs");
                this.buttons.next.hide();
                this.buttons.prev.hide()
            }
        },
        destroyExpandGallery: function() {
            var J;
            if (this.expandThumbs) {
                this.expandThumbs.stop();
                this.expandThumbs = null
            }
            if (this.expandNav) {
                this.expandNav.jRemove();
                this.expandNav = null
            }
            if (this.expandGallery.length > 1 && !this.additionalImages.length) {
                this.node.jRemoveEvent("touchdrag");
                this.image.node.jRemove().getAttribute("style");
                this.image.node.removeAttribute("style");
                this.primaryImage.node.jAppendTo(this.node);
                this.setupZoom(this.primaryImage);
                while (J = this.expandGallery.pop()) {
                    if (J !== this.primaryImage) {
                        if (J.small.node) {
                            J.small.node.kill();
                            J.small.node = null
                        }
                        if (J.zoom.node) {
                            J.zoom.node.kill();
                            J.zoom.node = null
                        }
                        J = null
                    }
                }
            }
            this.expandGallery = []
        },
        close: function() {
            if (!this.ready || !this.expanded) {
                return
            }
            if (A.browser.platform === "ios" && A.browser.uaName === "safari" && parseInt(A.browser.uaVersion) === 7) {
                clearInterval(n);
                n = null
            }
            i(document).jRemoveEvent("keydown", this.keyboardCallback);
            this.deactivate(null, true);
            this.ready = false;
            if (A.browser.fullScreen.capable && A.browser.fullScreen.enabled()) {
                A.browser.fullScreen.cancel()
            } else {
                if (A.browser.features.transition) {
                    this.node.jRemoveEvent("transitionend").jSetCss({
                        transition: ""
                    });
                    this.node.jAddEvent("transitionend", this.onClose);
                    if (A.browser.webkit) {
                        setTimeout(i(function() {
                            this.onClose()
                        }).jBind(this), 260)
                    }
                    this.expandBg.jRemoveEvent("transitionend").jSetCss({
                        transition: ""
                    });
                    this.expandBg.jSetCss({
                        transition: "all 0.6s cubic-bezier(0.895, 0.030, 0.685, 0.220) 0.0s"
                    }).jGetSize();
                    this.node.jSetCss({
                        transition: "all .3s cubic-bezier(0.600, 0, 0.735, 0.045) 0s"
                    }).jGetSize();
                    if (this.zoomBox.mode !== false && this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== "magnifier") {
                        this.image.node.jSetCss({
                            "max-height": this.image.jGetSize("zoom").height
                        });
                        this.image.node.jSetCss({
                            "max-width": this.image.jGetSize("zoom").width
                        })
                    }
                    this.expandBg.jSetCss({
                        opacity: 0.4
                    });
                    this.node.jSetCss({
                        opacity: 0.01,
                        transform: "scale(0.4)"
                    })
                } else {
                    this.onClose()
                }
            }
        },
        expand: function(L) {
            if (!this.image.loaded() || !this.ready || this.expanded) {
                if (!this.image.loaded()) {
                    if (L) {
                        this.initEvent = e(L);
                        L.stopQueue();
                        if (L.type === "tap") {
                            L.events[1].stopQueue()
                        }
                    }
                    this.image.load(this.setupZoom.jBind(this));
                    if (!this.loadTimer) {
                        this.loadTimer = i(this.showLoading).jBind(this).jDelay(400)
                    }
                }
                return
            }
            if (L) {
                L.stopQueue()
            }
            var J = i(this.node).jFetch("cr");
            var K = document.createDocumentFragment();
            this.hideHint();
            this.hintRuns--;
            this.deactivate(null, true);
            this.unregisterActivateEvent();
            this.unregisterDeactivateEvent();
            this.ready = false;
            if (!this.expandBox) {
                this.expandBox = A.$new("div").jAddClass("mz-expand").jAddClass(this.option("cssClass")).jSetCss({
                    opacity: 0
                });
                this.expandStage = A.$new("div").jAddClass("mz-expand-stage").jAppendTo(this.expandBox);
                this.expandControls = A.$new("div").jAddClass("mz-expand-controls").jAppendTo(this.expandStage);
                i(["prev", "next", "close"]).jEach(function(N) {
                    var M = "mz-button";
                    this.buttons[N] = A.$new("button", {
                        title: this.option("text-btn-" + N)
                    }).jAddClass(M).jAddClass(M + "-" + N);
                    K.appendChild(this.buttons[N]);
                    switch (N) {
                        case "prev":
                            this.buttons[N].jAddEvent("tap btnclick", function(O) {
                                O.stop();
                                this.update(this.getPrev())
                            }.jBindAsEvent(this));
                            break;
                        case "next":
                            this.buttons[N].jAddEvent("tap btnclick", function(O) {
                                O.stop();
                                this.update(this.getNext())
                            }.jBindAsEvent(this));
                            break;
                        case "close":
                            this.buttons[N].jAddEvent("tap btnclick", function(O) {
                                O.stop();
                                this.close()
                            }.jBindAsEvent(this));
                            break;
                        default:
                    }
                }, this);
                this.expandControls.append(K);
                this.expandBox.jAddEvent("mousescroll touchstart dbltap", i(function(M) {
                    i(M).stop()
                }));
                if (this.option("closeOnClickOutside")) {
                    this.expandBox.jAddEvent("tap btnclick", function(O) {
                        var N = O.jGetPageXY();
                        var M = i(this.option("expandZoomMode") === "magnifier" ? this.zoomBox.node : this.zoomBox.image).jGetRect();
                        if (this.option("expandZoomOn") !== "always" && M.top <= N.y && N.y <= M.bottom && M.left <= N.x && N.x <= M.right) {
                            O.stopQueue();
                            this.deactivate(O);
                            return
                        }
                        if (this.option("expandZoomOn") !== "always" && this.node.hasChild(O.getOriginalTarget())) {
                            return
                        }
                        O.stop();
                        this.close()
                    }.jBindAsEvent(this))
                }
                this.keyboardCallback = i(function(N) {
                    var M = null;
                    if (N.keyCode !== 27 && N.keyCode !== 37 && N.keyCode !== 39) {
                        return
                    }
                    i(N).stop();
                    if (N.keyCode === 27) {
                        this.close()
                    } else {
                        M = (N.keyCode === 37) ? this.getPrev() : this.getNext();
                        if (M) {
                            this.update(M)
                        }
                    }
                }).jBindAsEvent(this);
                this.onExpand = i(function() {
                    var M;
                    this.node.jRemoveEvent("transitionend").jSetCss({
                        transition: "",
                        transform: "translate3d(0, 0, 0)"
                    });
                    if (this.expanded) {
                        return
                    }
                    this.expanded = true;
                    this.expandBox.jRemoveClass("mz-expand-opening").jSetCss({
                        opacity: 1
                    });
                    this.zoomBox.setMode(this.option("expandZoomMode"));
                    this.zoomSize = A.detach(this.zoomSizeOrigin);
                    this.resizeCallback();
                    if (this.expandCaption && this.image.caption) {
                        if (this.image.link) {
                            this.expandCaption.append(A.$new("a", {
                                href: this.image.link
                            }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(this.image.caption))
                        } else {
                            this.expandCaption.changeContent(this.image.caption)
                        }
                        this.expandCaption.jAddClass("mz-show")
                    }
                    if (this.option("expandZoomOn") !== "always") {
                        this.registerActivateEvent(true);
                        this.registerDeactivateEvent(true)
                    }
                    this.ready = true;
                    if (this.option("expandZoomOn") === "always") {
                        if (this.zoomBox.mode !== false) {
                            this.zoomBox.enable(true)
                        }
                        if (A.browser.mobile && this.mobileZoomHint) {
                            this.mobileZoomHint = false
                        }
                        this.activate()
                    }
                    if ((A.browser.mobile || this.option("forceTouch")) && this.zoomBox.enabled) {
                        if (this.mobileZoomHint || this.hintRuns > 0) {
                            this.showHint(true, this.option("textClickZoomHint"))
                        }
                        this.mobileZoomHint = false
                    }
                    this.expandControls.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible");
                    if (this.expandNav) {
                        this.expandNav.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible")
                    }
                    if (this.expandThumbs) {
                        this.expandThumbs.run();
                        this.setActiveThumb(this.image)
                    }
                    if (J) {
                        J.jAppendTo(this.expandBox, ((Math.floor(Math.random() * 101) + 1) % 2) ? "top" : "bottom")
                    }
                    if (this.expandGallery.length && !this.additionalImages.length) {
                        this.swipe()
                    }
                    i(document).jAddEvent("keydown", this.keyboardCallback);
                    if (A.browser.platform === "ios" && A.browser.uaName === "safari" && parseInt(A.browser.uaVersion) === 7) {
                        n = w()
                    }
                    u("onExpandOpen", this.id)
                }).jBind(this);
                this.onClose = i(function() {
                    this.node.jRemoveEvent("transitionend");
                    if (!this.expanded) {
                        return
                    }
                    if (this.expanded) {
                        i(document).jRemoveEvent("keydown", this.keyboardCallback);
                        this.deactivate(null, true)
                    }
                    this.destroyExpandGallery();
                    this.expanded = false;
                    this.zoomBox.setMode(this.option("zoomMode"));
                    this.node.replaceChild(this.image.getNode("small"), this.image.node);
                    this.image.setCurNode("small");
                    i(this.image.node).jSetCss({
                        width: "",
                        height: "",
                        "max-width": Math.min(this.image.jGetSize("small").width),
                        "max-height": Math.min(this.image.jGetSize("small").height)
                    });
                    this.lens.image.src = this.image.getURL("small");
                    this.node.jSetCss({
                        opacity: "",
                        transition: ""
                    });
                    this.node.jSetCss({
                        transform: "translate3d(0, 0, 0)"
                    });
                    i(this.placeholder).replaceChild(this.node, this.stubNode);
                    this.setSize(true);
                    if (this.expandCaption) {
                        this.expandCaption.jRemove();
                        this.expandCaption = null
                    }
                    this.unregisterActivateEvent();
                    this.unregisterDeactivateEvent();
                    if (this.option("zoomOn") === "always") {
                        this.activate()
                    } else {
                        if (this.option("zoomMode") !== false) {
                            this.registerActivateEvent(this.option("zoomOn") === "click");
                            this.registerDeactivateEvent(this.option("zoomOn") === "click" && !this.option("expand"))
                        }
                    }
                    this.showHint();
                    this.expandBg.jRemoveEvent("transitionend");
                    this.expandBox.jRemove();
                    this.expandBg.jRemove();
                    this.expandBg = null;
                    i(A.browser.getDoc()).jRemoveClass("mz-expanded-view-open");
                    this.ready = true;
                    if (A.browser.ieMode < 10) {
                        this.resizeCallback()
                    } else {
                        i(window).jRaiseEvent("UIEvent", "resize")
                    }
                    u("onExpandClose", this.id)
                }).jBind(this);
                this.expandImageStage = A.$new("div", {
                    "class": "mz-image-stage"
                }).jAppendTo(this.expandStage);
                this.expandFigure = A.$new("figure").jAppendTo(this.expandImageStage);
                this.stubNode = this.node.cloneNode(false)
            }
            this.setupExpandGallery();
            i(A.browser.getDoc()).jAddClass("mz-expanded-view-open");
            i(document.body).jGetSize();
            if (this.option("expand") === "fullscreen") {
                this.prepareExpandedView();
                A.browser.fullScreen.request(this.expandBox, {
                    onEnter: i(function() {
                        this.onExpand()
                    }).jBind(this),
                    onExit: this.onClose,
                    fallback: i(function() {
                        this.expandToWindow()
                    }).jBind(this)
                })
            } else {
                setTimeout(i(function() {
                    this.prepareExpandedView();
                    this.expandToWindow()
                }).jBind(this), 96)
            }
        },
        prepareExpandedView: function() {
            var K;
            var J;
            K = A.$new("img", {
                src: this.image.getURL("zoom")
            });
            this.expandBg = A.$new("div").jAddClass("mz-expand-bg").append((A.browser.features.cssFilters || A.browser.ieMode < 10) ? K : new A.SVGImage(K).blur(b).getNode()).jAppendTo(this.expandBox);
            if (this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== false) {
                this.expandStage.jAddClass("mz-always-zoom" + (this.option("expandZoomMode") === "zoom" ? " mz-zoom-in" : "")).jGetSize()
            }
            J = i(this.node)[(A.browser.ieMode < 10) ? "jGetSize" : "getBoundingClientRect"]();
            i(this.stubNode).jSetCss({
                width: J.width,
                height: J.height
            });
            this.node.replaceChild(this.image.getNode("zoom"), this.image.node);
            this.image.setCurNode("zoom");
            this.expandBox.jAppendTo(document.body);
            this.expandMaxWidth = function() {
                var L = this.expandImageStage;
                if (i(this.expandFigure).jGetSize().width > 50) {
                    L = this.expandFigure
                }
                return function() {
                    return this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== false && this.option("expandZoomMode") !== "magnifier" ? Infinity : Math.round(i(L).getInnerSize().width)
                }
            }.call(this);
            this.expandMaxHeight = function() {
                var L = this.expandImageStage;
                if (i(this.expandFigure).jGetSize().height > 50) {
                    L = this.expandFigure
                }
                return function() {
                    return this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== false && this.option("expandZoomMode") !== "magnifier" ? Infinity : Math.round(i(L).getInnerSize().height)
                }
            }.call(this);
            this.expandControls.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden");
            if (this.expandNav) {
                this.expandNav.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden")
            }
            this.image.node.jSetCss({
                "max-height": Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
            });
            this.image.node.jSetCss({
                "max-width": Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
            });
            this.expandFigure.append(i(this.placeholder).replaceChild(this.stubNode, this.node));
            if (this.option("expandCaption")) {
                this.expandCaption = A.$new("figcaption", {
                    "class": "mz-caption"
                }).jAppendTo(this.expandFigure)
            }
        },
        expandToWindow: function() {
            this.node.jSetCss({
                transition: ""
            });
            this.node.jSetCss({
                transform: "scale(0.6)"
            }).jGetSize();
            this.node.jSetCss({
                transition: A.browser.cssTransform + " 0.4s cubic-bezier(0.175, 0.885, 0.320, 1) 0s"
            });
            if (A.browser.features.transition) {
                this.node.jAddEvent("transitionend", this.onExpand);
                if (A.browser.chrome && (A.browser.uaName === "chrome" || A.browser.uaName === "opera")) {
                    setTimeout(i(function() {
                        this.onExpand()
                    }).jBind(this), 500)
                }
            } else {
                this.onExpand.jDelay(16, this)
            }
            this.expandBox.jSetCss({
                opacity: 1
            });
            this.node.jSetCss({
                transform: "scale(1)"
            })
        },
        openLink: function() {
            if (this.image.link) {
                window.open(this.image.link, "_self")
            }
        },
        getNext: function() {
            var J = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(M) {
                return (M.small.state !== -1 || M.zoom.state !== -1)
            });
            var K = J.length;
            var L = i(J).indexOf(this.image) + 1;
            return (K <= 1) ? null : J[(L >= K) ? 0 : L]
        },
        getPrev: function() {
            var J = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(M) {
                return (M.small.state !== -1 || M.zoom.state !== -1)
            });
            var K = J.length;
            var L = i(J).indexOf(this.image) - 1;
            return (K <= 1) ? null : J[(L < 0) ? K - 1 : L]
        },
        imageByURL: function(K, L) {
            var J = this.additionalImages.filter(function(M) {
                    return ((M.zoom.src.has(K) || M.zoom.url.has(K)) && (M.small.src.has(L) || M.small.url.has(L)))
                }) || [];
            return J[0] || ((L && K && A.jTypeOf(L) === "string" && A.jTypeOf(K) === "string") ? new l(L, K) : null)
        },
        imageByOrigin: function(K) {
            var J = this.additionalImages.filter(function(L) {
                    return (L.origin === K)
                }) || [];
            return J[0]
        },
        imageByIndex: function(J) {
            return this.additionalImages[J]
        }
    };
    v = {
        version: "v5.2.2 (Plus) for MagicToolbox.com",
        start: function(M, K) {
            var L = null;
            var J = [];
            A.$A((M ? [i(M)] : A.$A(document.byClass("MagicZoom")).concat(A.$A(document.byClass("MagicZoomPlus"))))).jEach(i(function(N) {
                if (i(N)) {
                    if (!j(N)) {
                        L = new k(N, K);
                        if (y && !L.option("autostart")) {
                            L.stop();
                            L = null
                        } else {
                            G.push(L);
                            J.push(L)
                        }
                    }
                }
            }).jBind(this));
            return M ? J[0] : J
        },
        stop: function(M) {
            var K, L, J;
            if (M) {
                (L = j(M)) && (L = G.splice(G.indexOf(L), 1)) && L[0].stop() && (delete L[0]);
                return
            }
            while (K = G.length) {
                L = G.splice(K - 1, 1);
                L[0].stop();
                delete L[0]
            }
        },
        refresh: function(J) {
            this.stop(J);
            return this.start(J)
        },
        update: function(O, N, M, K) {
            var L = j(O);
            var J;
            if (L) {
                J = A.jTypeOf(N) === "element" ? L.imageByOrigin(N) : L.imageByURL(N, M);
                if (J) {
                    L.update(J)
                }
            }
        },
        switchTo: function(M, L) {
            var K = j(M);
            var J;
            if (K) {
                switch (A.jTypeOf(L)) {
                    case "element":
                        J = K.imageByOrigin(L);
                        break;
                    case "number":
                        J = K.imageByIndex(L);
                        break;
                    default:
                }
                if (J) {
                    K.update(J)
                }
            }
        },
        prev: function(K) {
            var J;
            (J = j(K)) && J.update(J.getPrev())
        },
        next: function(K) {
            var J;
            (J = j(K)) && J.update(J.getNext())
        },
        zoomIn: function(K) {
            var J;
            (J = j(K)) && J.activate()
        },
        zoomOut: function(K) {
            var J;
            (J = j(K)) && J.deactivate()
        },
        expand: function(K) {
            var J;
            (J = j(K)) && J.expand()
        },
        close: function(K) {
            var J;
            (J = j(K)) && J.close()
        },
        registerCallback: function(J, K) {
            if (!q[J]) {
                q[J] = []
            }
            if (A.jTypeOf(K) === "function") {
                q[J].push(K)
            }
        },
        running: function(J) {
            return !!j(J)
        }
    };
    i(document).jAddEvent("domready", function() {
        var K = window[E + "Options"] || {};
        t = t();
        d();
        I = A.$new("div", {
            "class": "magic-hidden-wrapper"
        }).jAppendTo(document.body);
        H = (A.browser.mobile && window.matchMedia && window.matchMedia("(max-device-width: 767px), (max-device-height: 767px)").matches);
        if (A.browser.mobile) {
            A.extend(p, m)
        }
        for (var J = 0; J < B.length; J++) {
            if (K[B[J]] && A.$F !== K[B[J]]) {
                v.registerCallback(B[J], K[B[J]])
            }
        }
        v.start();
        y = false
    });
    window.MagicZoomPlus = window.MagicZoomPlus || {};
    return v
})();
/**
 *
 * Зависимости:
 * jQuery
 * localforage (//cdnjs.cloudflare.com/ajax/libs/localforage/1.4.3/localforage.min.js)
 * v0.2.0
 * Параметры:
 * success - колбек на получение данных
 * debug - выводит уведомления о процессах
 * use_forage - юзать localforage
 * clear_forage - очистить localforage при запуске
 * del_current_id - удалять из списка текущий товар?
 * reverse - развернуть массив товаров по добавлению в обратную сторону?
 * keyParameters - ключ в котором хранятся данные localforage
 *
 * HTML/liquid
 * <div data-recently-view="{{ product.id }}"></div>
 *
  Пример вызова:
  var myRecentlyView = new RecentlyView({
   success: function (_products) {
     console.log(_products);
   },
   debug: true
  })
 *
*/

var RecentlyView = function (options) {
  var self = this;

  var DEFAULT_OPTIONS = {
    debug: false,
    data_selector: '[data-recently-view]',
    clear_forage: false,
    use_forage: true,
    del_current_id: true,
    reverse: false,
    productIds: [],
    keyParameters: 'recently_view',
    success: function () {}
  }

  self.option = $.extend(DEFAULT_OPTIONS, options);

  self.setLog('Настройки плагина', self.option);

  self.init();
}
/**
 * Инициализация
 */
RecentlyView.prototype.init = function () {
  var self = this;

  // Если в настройка очистить сторадж при запуске
  if (self.option.clear_forage && localforage) {
    localforage.removeItem(self.option.keyParameters, function () {
      self.setLog('Локальное хранилище очищено', 'Ключ: ' + self.option.keyParameters);
    })
  }

  if (typeof window.localforage == "undefined") {
    console.warn('Не подключен плагин localforage!');
  }

  // получить товары
  self.getProducts().done(function (_products) {
    if (!self.option.del_current_id) {
      self.setLog('Вызов колбека success');
      self.option.success(_products);
      self.getIds();

    }else{
      self.getIds(function (_id) {
        if (_id && _products[_id]) {
          delete _products[_id];
          self.setLog('Из списка удален товар с id: ' + _id);
        }

        var sortProducts = [];

        for (var i = 0; i < self.option.productIds.length; i++) {
          var _idProduct = self.option.productIds[i];
          if (_products[_idProduct]) {
            sortProducts.push( _products[_idProduct] );
          }
        }

        self.setLog('Вызов колбека success');
        self.option.success(sortProducts);
      });
    }

  }).fail(function (err) {
    self.setLog('Не удалось получить данные', err);
    self.getIds();
  });

};

// Собрать ids
RecentlyView.prototype.getIds = function (_callback) {
  var self = this;

  var data_params = self.option.data_selector.replace(/(?:\[data-*)*\]*/g, '')

  $(self.option.data_selector).each(function(index, el) {
    self.option.productIds.unshift( ( $(el).data(data_params) ).toString() );
  });

  self.setLocalData( self.unique(self.option.productIds) )
  var resultIds = self.option.productIds;

  if (self.option.reverse) {
    resultIds = resultIds.reverse();
  }

  self.option.productIds = self.unique( resultIds );



  if (_callback) {
    var _id = $(''+self.option.data_selector+':first').data(data_params);
    _callback(_id)
  }
}

// Оставить уникальные
RecentlyView.prototype.unique = function (_array) {
  var unique = [];
  for (var i = 0; i < _array.length; i++) {
    if (unique.indexOf(_array[i]) == -1) {
      unique.push(_array[i]);
    }
  }
  return unique;
}


/**
 * Получаем товары
 */
RecentlyView.prototype.getProducts = function () {
  var self = this;
  return $.when(_getProducts())

  function _getProducts() {
    var dfd = jQuery.Deferred();

    if (window.localforage && self.option.use_forage) {
      // пробуем забрать данные из хранилища
      self.getLocalData().done(function (_products) {
        self.option.productIds = _products;
        $.each(_products, function(index, el) {
          if (el == 0) {
            _products.splice(index, 1);
          }
		});
		if(_products.length) {
        $.post('/products_by_id/'+ _products.join(',') +'.json')
          .done(function (data) {
            var _productsArray = data.products;
            var _productsObject = {};
            $.each(_productsArray, function(index, _product) {
              _productsObject[_product.id] = self.convertProperties(_product);
            });
            self.setLog('Товары из апи: ', _productsObject);
            dfd.resolve( _productsObject );
          })
          .fail(function (onFail) {
            dfd.resolve( {} );
          });
		}else{
          dfd.resolve( {} );
        }
      }).fail(function () {
        // если хранилище пусто
        dfd.resolve( {} );
      });
    }else{
      dfd.resolve( {} );
    }

    return dfd.promise();
  }
};

// Получить данные из хранилища
RecentlyView.prototype.getLocalData = function () {
  var self = this;
  return $.when(_getLocalData())

  function _getLocalData() {
    var dfd = jQuery.Deferred();

    localforage.getItem(self.option.keyParameters, function(err, localData) {
      if (localData) {
        self.setLog('Данные получены из хранилища', localData);

        dfd.resolve( localData );
      }else{
        self.setLog('Хранилище пусто, данные будут запрошены в kladr.insales.ru');

        dfd.reject('Хранилище пусто');
      }
    });

    return dfd.promise();
  }
};

// Установить свои данные
RecentlyView.prototype.setLocalData = function (newLocals, _setCallback) {
  var self = this;
  var setCallback = _setCallback || function () {};
  if (window.localforage && self.option.use_forage) {
    localforage.setItem(self.option.keyParameters, newLocals, function(err, newlocalData) {
      if (newlocalData) {
        self.setLog('В хранилище обновлены данные через метод setLocalData', newlocalData);
        setCallback(newlocalData);
      }else{
        self.setLog('Не удалось обновить данные');
      }
    });
  }
};

// развертка параметров для товара
RecentlyView.prototype.convertProperties = function (_product) {
  _product.parameters = {};
  _product.sale = null;

  // Пермалинк параметра: массив характеристик
  $.each( _product.properties, function( index, property ){

    $.each( _product.characteristics, function( index, characteristic ){
      if (property.id === characteristic.property_id) {
        _product.property = property;
        setParam(_product.parameters, property.permalink, property)
        setParam(_product.parameters[ property.permalink ], 'characteristics', [])

        var uniq = true;
        $.each(_product.parameters[ property.permalink ].characteristics, function (index, cha) {
          if (cha.id == characteristic.id) {
            uniq = false;
          }
        });
        if (uniq) {
          _product.parameters[ property.permalink ].characteristics.push(characteristic)
        }
      }
    });

  });

  // Скидка в процентах
  if (_product.variants) {
    $.each( _product.variants, function( index, variant ){
      if (variant.old_price) {
        var _merge = Math.round( ((parseInt(variant.old_price) - parseInt(variant.price)) / parseInt(variant.old_price) * 100), 0 )
        if (_merge < 100) {
          _product.sale = _merge;
        }
      }
    });
  }

  function setParam(obj, name, value) {
    (obj[ name ] || (obj[ name ] = value))
  }

  return _product;
}

// Дебагер
RecentlyView.prototype.setLog = function (_name, _variable) {
  var self = this;
  if (self.option.debug) {
    console.info('==RecentlyView==');
    console.log(_name);
    if (_variable) {
      console.log(_variable);
    }
    console.log('///////////////////');
    console.log('///RecentlyView///');
    console.log('/////////////////');
  }
};
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.7
*/



!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=10)}([function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(2)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a){return a})},function(a,b,c){"use strict";var d,e,f,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(g){e=[c(0),c(12),c(11)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b,c,d){function e(b,c,g){if(!(this instanceof e))return new e(b,c,g);this.el=d,this.events={},this.maskset=d,this.refreshValue=!1,!0!==g&&(a.isPlainObject(b)?c=b:(c=c||{},c.alias=b),this.opts=a.extend(!0,{},this.defaults,c),this.noMasksCache=c&&c.definitions!==d,this.userOptions=c||{},this.isRTL=this.opts.numericInput,f(this.opts.alias,c,this.opts))}function f(b,c,g){var h=e.prototype.aliases[b];return h?(h.alias&&f(h.alias,d,g),a.extend(!0,g,h),a.extend(!0,g,c),!0):(null===g.mask&&(g.mask=b),!1)}function h(b,c){function f(b,f,g){var h=!1;if(null!==b&&""!==b||(h=null!==g.regex,h?(b=g.regex,b=b.replace(/^(\^)(.*)(\$)$/,"$2")):(h=!0,b=".*")),1===b.length&&!1===g.greedy&&0!==g.repeat&&(g.placeholder=""),g.repeat>0||"*"===g.repeat||"+"===g.repeat){var i="*"===g.repeat?0:"+"===g.repeat?1:g.repeat;b=g.groupmarker.start+b+g.groupmarker.end+g.quantifiermarker.start+i+","+g.repeat+g.quantifiermarker.end}var j,k=h?"regex_"+g.regex:g.numericInput?b.split("").reverse().join(""):b;return e.prototype.masksCache[k]===d||!0===c?(j={mask:b,maskToken:e.prototype.analyseMask(b,h,g),validPositions:{},_buffer:d,buffer:d,tests:{},metadata:f,maskLength:d},!0!==c&&(e.prototype.masksCache[k]=j,j=a.extend(!0,{},e.prototype.masksCache[k]))):j=a.extend(!0,{},e.prototype.masksCache[k]),j}if(a.isFunction(b.mask)&&(b.mask=b.mask(b)),a.isArray(b.mask)){if(b.mask.length>1){b.keepStatic=null===b.keepStatic||b.keepStatic;var g=b.groupmarker.start;return a.each(b.numericInput?b.mask.reverse():b.mask,function(c,e){g.length>1&&(g+=b.groupmarker.end+b.alternatormarker+b.groupmarker.start),e.mask===d||a.isFunction(e.mask)?g+=e:g+=e.mask}),g+=b.groupmarker.end,f(g,b.mask,b)}b.mask=b.mask.pop()}return b.mask&&b.mask.mask!==d&&!a.isFunction(b.mask.mask)?f(b.mask.mask,b.mask,b):f(b.mask,b.mask,b)}function i(f,h,j){function o(a,b,c){b=b||0;var e,f,g,h=[],i=0,k=r();-1===(V=Y!==d?Y.maxLength:d)&&(V=d);do{!0===a&&p().validPositions[i]?(g=p().validPositions[i],f=g.match,e=g.locator.slice(),h.push(!0===c?g.input:!1===c?f.nativeDef:J(i,f))):(g=u(i,e,i-1),f=g.match,e=g.locator.slice(),(!1===j.jitMasking||i<k||"number"==typeof j.jitMasking&&isFinite(j.jitMasking)&&j.jitMasking>i)&&h.push(!1===c?f.nativeDef:J(i,f))),i++}while((V===d||i<V)&&(null!==f.fn||""!==f.def)||b>i);return""===h[h.length-1]&&h.pop(),p().maskLength=i+1,h}function p(){return h}function q(a){var b=p();b.buffer=d,!0!==a&&(b.validPositions={},b.p=0)}function r(a,b,c){var e=-1,f=-1,g=c||p().validPositions;a===d&&(a=-1);for(var h in g){var i=parseInt(h);g[i]&&(b||!0!==g[i].generatedInput)&&(i<=a&&(e=i),i>=a&&(f=i))}return-1!==e&&a-e>1||f<a?e:f}function s(b,c,e,f){var g,h=b,i=a.extend(!0,{},p().validPositions),k=!1;for(p().p=b,g=c-1;g>=h;g--)p().validPositions[g]!==d&&(!0!==e&&(!p().validPositions[g].match.optionality&&function(a){var b=p().validPositions[a];if(b!==d&&null===b.match.fn){var c=p().validPositions[a-1],e=p().validPositions[a+1];return c!==d&&e!==d}return!1}(g)||!1===j.canClearPosition(p(),g,r(),f,j))||delete p().validPositions[g]);for(q(!0),g=h+1;g<=r();){for(;p().validPositions[h]!==d;)h++;if(g<h&&(g=h+1),p().validPositions[g]===d&&E(g))g++;else{var l=u(g);!1===k&&i[h]&&i[h].match.def===l.match.def?(p().validPositions[h]=a.extend(!0,{},i[h]),p().validPositions[h].input=l.input,delete p().validPositions[g],g++):w(h,l.match.def)?!1!==D(h,l.input||J(g),!0)&&(delete p().validPositions[g],g++,k=!0):E(g)||(g++,h--),h++}}q(!0)}function t(a,b){for(var c,e=a,f=r(),g=p().validPositions[f]||x(0)[0],h=g.alternation!==d?g.locator[g.alternation].toString().split(","):[],i=0;i<e.length&&(c=e[i],!(c.match&&(j.greedy&&!0!==c.match.optionalQuantifier||(!1===c.match.optionality||!1===c.match.newBlockMarker)&&!0!==c.match.optionalQuantifier)&&(g.alternation===d||g.alternation!==c.alternation||c.locator[g.alternation]!==d&&C(c.locator[g.alternation].toString().split(","),h)))||!0===b&&(null!==c.match.fn||/[0-9a-bA-Z]/.test(c.match.def)));i++);return c}function u(a,b,c){return p().validPositions[a]||t(x(a,b?b.slice():b,c))}function v(a){return p().validPositions[a]?p().validPositions[a]:x(a)[0]}function w(a,b){for(var c=!1,d=x(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function x(b,c,e){function f(c,e,g,i){function l(g,i,q){function r(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){if(!0===e.isQuantifier&&(d=r(b,c.matches[a-1])))return!1}),d}function s(b,c,e){var f,g;if(p().validPositions[b-1]&&e&&p().tests[b])for(var h=p().validPositions[b-1].locator,i=p().tests[b][0].locator,j=0;j<e;j++)if(h[j]!==i[j])return h.slice(e+1);return(p().tests[b]||p().validPositions[b])&&a.each(p().tests[b]||[p().validPositions[b]],function(a,b){var h=e!==d?e:b.alternation,i=b.locator[h]!==d?b.locator[h].toString().indexOf(c):-1;(g===d||i<g)&&-1!==i&&(f=b,g=i)}),f?f.locator.slice((e!==d?e:f.alternation)+1):e!==d?s(b,c):d}if(k>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+p().mask;if(k===b&&g.matches===d)return m.push({match:g,locator:i.reverse(),cd:o}),!0;if(g.matches!==d){if(g.isGroup&&q!==g){if(g=l(c.matches[a.inArray(g,c.matches)+1],i))return!0}else if(g.isOptional){var t=g;if(g=f(g,e,i,q)){if(h=m[m.length-1].match,!r(h,t))return!0;n=!0,k=b}}else if(g.isAlternator){var u,v=g,w=[],x=m.slice(),y=i.length,z=e.length>0?e.shift():-1;if(-1===z||"string"==typeof z){var A,B=k,C=e.slice(),D=[];if("string"==typeof z)D=z.split(",");else for(A=0;A<v.matches.length;A++)D.push(A);for(var E=0;E<D.length;E++){if(A=parseInt(D[E]),m=[],e=s(k,A,y)||C.slice(),!0!==(g=l(v.matches[A]||c.matches[A],[A].concat(i),q)||g)&&g!==d&&D[D.length-1]<v.matches.length){var F=a.inArray(g,c.matches)+1;c.matches.length>F&&(g=l(c.matches[F],[F].concat(i.slice(1,i.length)),q))&&(D.push(F.toString()),a.each(m,function(a,b){b.alternation=i.length-1}))}u=m.slice(),k=B,m=[];for(var G=0;G<u.length;G++){var H=u[G],I=!1;H.alternation=H.alternation||y;for(var J=0;J<w.length;J++){var K=w[J];if("string"!=typeof z||-1!==a.inArray(H.locator[H.alternation].toString(),D)){if(function(a,b){return a.match.nativeDef===b.match.nativeDef||a.match.def===b.match.nativeDef||a.match.nativeDef===b.match.def}(H,K)){I=!0,H.alternation===K.alternation&&-1===K.locator[K.alternation].toString().indexOf(H.locator[H.alternation])&&(K.locator[K.alternation]=K.locator[K.alternation]+","+H.locator[H.alternation],K.alternation=H.alternation),H.match.nativeDef===K.match.def&&(H.locator[H.alternation]=K.locator[K.alternation],w.splice(w.indexOf(K),1,H));break}if(H.match.def===K.match.def){I=!1;break}if(function(a,c){return null===a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def,p(),b,!1,j,!1)}(H,K)||function(a,c){return null!==a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def.replace(/[\[\]]/g,""),p(),b,!1,j,!1)}(H,K)){H.alternation==K.alternation&&-1===H.locator[H.alternation].toString().indexOf(K.locator[K.alternation].toString().split("")[0])&&(H.na=H.na||H.locator[H.alternation].toString(),-1===H.na.indexOf(H.locator[H.alternation].toString().split("")[0])&&(H.na=H.na+","+H.locator[K.alternation].toString().split("")[0]),I=!0,H.locator[H.alternation]=K.locator[K.alternation].toString().split("")[0]+","+H.locator[H.alternation],w.splice(w.indexOf(K),0,H));break}}}I||w.push(H)}}"string"==typeof z&&(w=a.map(w,function(b,c){if(isFinite(c)){var e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=d,b.alternation=d;for(var g=0;g<f.length;g++)-1!==a.inArray(f[g],D)&&(b.locator[e]!==d?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(b.locator[e]!==d)return b}})),m=x.concat(w),k=b,n=m.length>0,g=w.length>0,e=C.slice()}else g=l(v.matches[z]||c.matches[z],[z].concat(i),q);if(g)return!0}else if(g.isQuantifier&&q!==c.matches[a.inArray(g,c.matches)-1])for(var L=g,M=e.length>0?e.shift():0;M<(isNaN(L.quantifier.max)?M+1:L.quantifier.max)&&k<=b;M++){var N=c.matches[a.inArray(L,c.matches)-1];if(g=l(N,[M].concat(i),N)){if(h=m[m.length-1].match,h.optionalQuantifier=M>L.quantifier.min-1,r(h,N)){if(M>L.quantifier.min-1){n=!0,k=b;break}return!0}return!0}}else if(g=f(g,e,i,q))return!0}else k++}for(var q=e.length>0?e.shift():0;q<c.matches.length;q++)if(!0!==c.matches[q].isQuantifier){var r=l(c.matches[q],[q].concat(g),i);if(r&&k===b)return r;if(k>b)break}}function g(a){if(j.keepStatic&&b>0&&a.length>1+(""===a[a.length-1].match.def?1:0)&&!0!==a[0].match.optionality&&!0!==a[0].match.optionalQuantifier&&null===a[0].match.fn&&!/[0-9a-bA-Z]/.test(a[0].match.def)){if(p().validPositions[b-1]===d)return[t(a)];if(p().validPositions[b-1].alternation===a[0].alternation)return[t(a)];if(p().validPositions[b-1])return[t(a)]}return a}var h,i=p().maskToken,k=c?e:0,l=c?c.slice():[0],m=[],n=!1,o=c?c.join(""):"";if(b>-1){if(c===d){for(var q,r=b-1;(q=p().validPositions[r]||p().tests[r])===d&&r>-1;)r--;q!==d&&r>-1&&(l=function(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(b[0].alternation===d?(c=t(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&-1===c[d].toString().indexOf(b.locator[d])&&(c[d]+=","+b.locator[d])})),c}(q),o=l.join(""),k=r)}if(p().tests[b]&&p().tests[b][0].cd===o)return g(p().tests[b]);for(var s=l.shift();s<i.length;s++){if(f(i[s],l,[s])&&k===b||k>b)break}}return(0===m.length||n)&&m.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:o}),c!==d&&p().tests[b]?g(a.extend(!0,[],m)):(p().tests[b]=a.extend(!0,[],m),g(p().tests[b]))}function y(){return p()._buffer===d&&(p()._buffer=o(!1,1),p().buffer===d&&(p().buffer=p()._buffer.slice())),p()._buffer}function z(a){return p().buffer!==d&&!0!==a||(p().buffer=o(!0,r(),!0)),p().buffer}function A(a,b,c){var e,f;if(!0===a)q(),a=0,b=c.length;else for(e=a;e<b;e++)delete p().validPositions[e];for(f=a,e=a;e<b;e++)if(q(!0),c[e]!==j.skipOptionalPartCharacter){var g=D(f,c[e],!0,!0);!1!==g&&(q(!0),f=g.caret!==d?g.caret:g.pos+1)}}function B(b,c,d){switch(j.casing||c.casing){case"upper":b=b.toUpperCase();break;case"lower":b=b.toLowerCase();break;case"title":var f=p().validPositions[d-1];b=0===d||f&&f.input===String.fromCharCode(e.keyCode.SPACE)?b.toUpperCase():b.toLowerCase();break;default:if(a.isFunction(j.casing)){var g=Array.prototype.slice.call(arguments);g.push(p().validPositions),b=j.casing.apply(this,g)}}return b}function C(b,c,e){for(var f,g=j.greedy?c:c.slice(0,1),h=!1,i=e!==d?e.split(","):[],k=0;k<i.length;k++)-1!==(f=b.indexOf(i[k]))&&b.splice(f,1);for(var l=0;l<b.length;l++)if(-1!==a.inArray(b[l],g)){h=!0;break}return h}function D(b,c,f,g,h){function i(a){var b=Z?a.begin-a.end>1||a.begin-a.end==1:a.end-a.begin>1||a.end-a.begin==1;return b&&0===a.begin&&a.end===p().maskLength?"full":b}function k(c,e,f){var h=!1;return a.each(x(c),function(k,m){for(var n=m.match,o=e?1:0,t="",u=n.cardinality;u>o;u--)t+=H(c-(u-1));if(e&&(t+=e),z(!0),!1!==(h=null!=n.fn?n.fn.test(t,p(),c,f,j,i(b)):(e===n.def||e===j.skipOptionalPartCharacter)&&""!==n.def&&{c:J(c,n,!0)||n.def,pos:c})){var v=h.c!==d?h.c:e;v=v===j.skipOptionalPartCharacter&&null===n.fn?J(c,n,!0)||n.def:v;var w=c,x=z();if(h.remove!==d&&(a.isArray(h.remove)||(h.remove=[h.remove]),a.each(h.remove.sort(function(a,b){return b-a}),function(a,b){s(b,b+1,!0)})),h.insert!==d&&(a.isArray(h.insert)||(h.insert=[h.insert]),a.each(h.insert.sort(function(a,b){return a-b}),function(a,b){D(b.pos,b.c,!0,g)})),h.refreshFromBuffer){var y=h.refreshFromBuffer;if(A(!0===y?y:y.start,y.end,x),h.pos===d&&h.c===d)return h.pos=r(),!1;if((w=h.pos!==d?h.pos:c)!==c)return h=a.extend(h,D(w,v,!0,g)),!1}else if(!0!==h&&h.pos!==d&&h.pos!==c&&(w=h.pos,A(c,w,z().slice()),w!==c))return h=a.extend(h,D(w,v,!0)),!1;return(!0===h||h.pos!==d||h.c!==d)&&(k>0&&q(!0),l(w,a.extend({},m,{input:B(v,n,w)}),g,i(b))||(h=!1),!1)}}),h}function l(b,c,e,f){if(f||j.insertMode&&p().validPositions[b]!==d&&e===d){var g,h=a.extend(!0,{},p().validPositions),i=r(d,!0);for(g=b;g<=i;g++)delete p().validPositions[g];p().validPositions[b]=a.extend(!0,{},c);var k,l=!0,n=p().validPositions,o=!1,s=p().maskLength;for(g=k=b;g<=i;g++){var t=h[g];if(t!==d)for(var u=k;u<p().maskLength&&(null===t.match.fn&&n[g]&&(!0===n[g].match.optionalQuantifier||!0===n[g].match.optionality)||null!=t.match.fn);){if(u++,!1===o&&h[u]&&h[u].match.def===t.match.def)p().validPositions[u]=a.extend(!0,{},h[u]),p().validPositions[u].input=t.input,m(u),k=u,l=!0;else if(w(u,t.match.def)){var v=D(u,t.input,!0,!0);l=!1!==v,k=v.caret||v.insert?r():u,o=!0}else if(!(l=!0===t.generatedInput)&&u>=p().maskLength-1)break;if(p().maskLength<s&&(p().maskLength=s),l)break}if(!l)break}if(!l)return p().validPositions=a.extend(!0,{},h),q(!0),!1}else p().validPositions[b]=a.extend(!0,{},c);return q(!0),!0}function m(b){for(var c=b-1;c>-1&&!p().validPositions[c];c--);var e,f;for(c++;c<b;c++)p().validPositions[c]===d&&(!1===j.jitMasking||j.jitMasking>c)&&(f=x(c,u(c-1).locator,c-1).slice(),""===f[f.length-1].match.def&&f.pop(),(e=t(f))&&(e.match.def===j.radixPointDefinitionSymbol||!E(c,!0)||a.inArray(j.radixPoint,z())<c&&e.match.fn&&e.match.fn.test(J(c),p(),c,!1,j))&&!1!==(o=k(c,J(c,e.match,!0)||(null==e.match.fn?e.match.def:""!==J(c)?J(c):z()[c]),!0))&&(p().validPositions[o.pos||c].generatedInput=!0))}f=!0===f;var n=b;b.begin!==d&&(n=Z&&!i(b)?b.end:b.begin);var o=!0,v=a.extend(!0,{},p().validPositions);if(a.isFunction(j.preValidation)&&!f&&!0!==g&&(o=j.preValidation(z(),n,c,i(b),j)),!0===o){if(m(n),i(b)&&(Q(d,e.keyCode.DELETE,b,!0),n=p().p),n<p().maskLength&&(V===d||n<V)&&(o=k(n,c,f),(!f||!0===g)&&!1===o)){var y=p().validPositions[n];if(!y||null!==y.match.fn||y.match.def!==c&&c!==j.skipOptionalPartCharacter){if((j.insertMode||p().validPositions[F(n)]===d)&&!E(n,!0))for(var G=n+1,I=F(n);G<=I;G++)if(!1!==(o=k(G,c,f))){!function(b,c){var e=p().validPositions[c];if(e)for(var f=e.locator,g=f.length,h=b;h<c;h++)if(p().validPositions[h]===d&&!E(h,!0)){var i=x(h).slice(),j=t(i,!0),m=-1;""===i[i.length-1].match.def&&i.pop(),a.each(i,function(a,b){for(var c=0;c<g;c++){if(b.locator[c]===d||!C(b.locator[c].toString().split(","),f[c].toString().split(","),b.na)){var e=f[c],h=j.locator[c],i=b.locator[c];e-h>Math.abs(e-i)&&(j=b);break}m<c&&(m=c,j=b)}}),j=a.extend({},j,{input:J(h,j.match,!0)||j.match.def}),j.generatedInput=!0,l(h,j,!0),p().validPositions[c]=d,k(c,e.input,!0)}}(n,o.pos!==d?o.pos:G),n=G;break}}else o={caret:F(n)}}!1===o&&j.keepStatic&&!f&&!0!==h&&(o=function(b,c,e){var f,h,i,k,l,m,n,o,s=a.extend(!0,{},p().validPositions),t=!1,u=r();for(k=p().validPositions[u];u>=0;u--)if((i=p().validPositions[u])&&i.alternation!==d){if(f=u,h=p().validPositions[f].alternation,k.locator[i.alternation]!==i.locator[i.alternation])break;k=i}if(h!==d){o=parseInt(f);var v=k.locator[k.alternation||h]!==d?k.locator[k.alternation||h]:n[0];v.length>0&&(v=v.split(",")[0]);var w=p().validPositions[o],y=p().validPositions[o-1];a.each(x(o,y?y.locator:d,o-1),function(f,i){n=i.locator[h]?i.locator[h].toString().split(","):[];for(var k=0;k<n.length;k++){var u=[],x=0,y=0,z=!1;if(v<n[k]&&(i.na===d||-1===a.inArray(n[k],i.na.split(","))||-1===a.inArray(v.toString(),n))){p().validPositions[o]=a.extend(!0,{},i);var A=p().validPositions[o].locator;for(p().validPositions[o].locator[h]=parseInt(n[k]),null==i.match.fn?(w.input!==i.match.def&&(z=!0,!0!==w.generatedInput&&u.push(w.input)),y++,p().validPositions[o].generatedInput=!/[0-9a-bA-Z]/.test(i.match.def),p().validPositions[o].input=i.match.def):p().validPositions[o].input=w.input,l=o+1;l<r(d,!0)+1;l++)m=p().validPositions[l],m&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?u.push(m.input):l<b&&x++,delete p().validPositions[l];for(z&&u[0]===i.match.def&&u.shift(),q(!0),t=!0;u.length>0;){var B=u.shift();if(B!==j.skipOptionalPartCharacter&&!(t=D(r(d,!0)+1,B,!1,g,!0)))break}if(t){p().validPositions[o].locator=A;var C=r(b)+1;for(l=o+1;l<r()+1;l++)((m=p().validPositions[l])===d||null==m.match.fn)&&l<b+(y-x)&&y++;b+=y-x,t=D(b>C?C:b,c,e,g,!0)}if(t)return!1;q(),p().validPositions=a.extend(!0,{},s)}}})}return t}(n,c,f)),!0===o&&(o={pos:n})}if(a.isFunction(j.postValidation)&&!1!==o&&!f&&!0!==g){var K=j.postValidation(z(!0),o,j);if(K.refreshFromBuffer&&K.buffer){var L=K.refreshFromBuffer;A(!0===L?L:L.start,L.end,K.buffer)}o=!0===K?o:K}return o&&o.pos===d&&(o.pos=n),!1===o&&(q(!0),p().validPositions=a.extend(!0,{},v)),o}function E(a,b){var c=u(a).match;if(""===c.def&&(c=v(a).match),null!=c.fn)return c.fn;if(!0!==b&&a>-1){var d=x(a);return d.length>1+(""===d[d.length-1].match.def?1:0)}return!1}function F(a,b){var c=p().maskLength;if(a>=c)return c;var d=a;for(x(c+1).length>1&&(o(!0,c+1,!0),c=p().maskLength);++d<c&&(!0===b&&(!0!==v(d).match.newBlockMarker||!E(d))||!0!==b&&!E(d)););return d}function G(a,b){var c,d=a;if(d<=0)return 0;for(;--d>0&&(!0===b&&!0!==v(d).match.newBlockMarker||!0!==b&&!E(d)&&(c=x(d),c.length<2||2===c.length&&""===c[1].match.def)););return d}function H(a){return p().validPositions[a]===d?J(a):p().validPositions[a].input}function I(b,c,e,f,g){if(f&&a.isFunction(j.onBeforeWrite)){var h=j.onBeforeWrite(f,c,e,j);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;A(!0===i?i:i.start,i.end,h.buffer||c),c=z(!0)}e!==d&&(e=h.caret!==d?h.caret:e)}}b!==d&&(b.inputmask._valueSet(c.join("")),e===d||f!==d&&"blur"===f.type?S(b,c,e):n&&"input"===f.type?setTimeout(function(){M(b,e)},0):M(b,e),!0===g&&(_=!0,a(b).trigger("input")))}function J(b,c,e){if(c=c||v(b).match,c.placeholder!==d||!0===e)return a.isFunction(c.placeholder)?c.placeholder(j):c.placeholder;if(null===c.fn){if(b>-1&&p().validPositions[b]===d){var f,g=x(b),h=[];if(g.length>1+(""===g[g.length-1].match.def?1:0))for(var i=0;i<g.length;i++)if(!0!==g[i].match.optionality&&!0!==g[i].match.optionalQuantifier&&(null===g[i].match.fn||f===d||!1!==g[i].match.fn.test(f.match.def,p(),b,!0,j))&&(h.push(g[i]),null===g[i].match.fn&&(f=g[i]),h.length>1&&/[0-9a-bA-Z]/.test(h[0].match.def)))return j.placeholder.charAt(b%j.placeholder.length)}return c.def}return j.placeholder.charAt(b%j.placeholder.length)}function K(b,f,g,h,i){function k(a,b){return-1!==y().slice(a,F(a)).join("").indexOf(b)&&!E(a)&&v(a).match.nativeDef===b.charAt(b.length-1)}var l=h.slice(),m="",n=0,o=d;if(q(),p().p=F(-1),!g)if(!0!==j.autoUnmask){var s=y().slice(0,F(-1)).join(""),t=l.join("").match(new RegExp("^"+e.escapeRegex(s),"g"));t&&t.length>0&&(l.splice(0,t.length*s.length),n=F(n))}else n=F(n);if(a.each(l,function(c,e){if(e!==d){var f=new a.Event("_checkval");f.which=e.charCodeAt(0),m+=e;var h=r(d,!0),i=p().validPositions[h],l=u(h+1,i?i.locator.slice():d,h);if(!k(n,m)||g||j.autoUnmask){var s=g?c:null==l.match.fn&&l.match.optionality&&h+1<p().p?h+1:p().p;o=da.keypressEvent.call(b,f,!0,!1,g,s),n=s+1,m=""}else o=da.keypressEvent.call(b,f,!0,!1,!0,h+1);if(!1!==o&&!g&&a.isFunction(j.onBeforeWrite)){var t=o.forwardPosition;if(o=j.onBeforeWrite(f,z(),o.forwardPosition,j),o.forwardPosition=t,o&&o.refreshFromBuffer){var v=o.refreshFromBuffer;A(!0===v?v:v.start,v.end,o.buffer),q(!0),o.caret&&(p().p=o.caret,o.forwardPosition=o.caret)}}}}),f){var w=d;c.activeElement===b&&o&&(w=j.numericInput?G(o.forwardPosition):o.forwardPosition),I(b,z(),w,i||new a.Event("checkval"),i&&"input"===i.type)}}function L(b){if(b){if(b.inputmask===d)return b.value;b.inputmask&&b.inputmask.refreshValue&&da.setValueEvent.call(b)}var c=[],e=p().validPositions;for(var f in e)e[f].match&&null!=e[f].match.fn&&c.push(e[f].input);var g=0===c.length?"":(Z?c.reverse():c).join("");if(a.isFunction(j.onUnMask)){var h=(Z?z().slice().reverse():z()).join("");g=j.onUnMask(h,g,j)}return g}function M(a,e,f,g){function h(a){if(!0!==g&&Z&&"number"==typeof a&&(!j.greedy||""!==j.placeholder)){a=z().join("").length-a}return a}var i;if(e===d)return a.setSelectionRange?(e=a.selectionStart,f=a.selectionEnd):b.getSelection?(i=b.getSelection().getRangeAt(0),i.commonAncestorContainer.parentNode!==a&&i.commonAncestorContainer!==a||(e=i.startOffset,f=i.endOffset)):c.selection&&c.selection.createRange&&(i=c.selection.createRange(),e=0-i.duplicate().moveStart("character",-a.inputmask._valueGet().length),f=e+i.text.length),{begin:h(e),end:h(f)};if(e.begin!==d&&(f=e.end,e=e.begin),"number"==typeof e){e=h(e),f=h(f),f="number"==typeof f?f:e;var l=parseInt(((a.ownerDocument.defaultView||b).getComputedStyle?(a.ownerDocument.defaultView||b).getComputedStyle(a,null):a.currentStyle).fontSize)*f;if(a.scrollLeft=l>a.scrollWidth?l:0,k||!1!==j.insertMode||e!==f||f++,a.setSelectionRange)a.selectionStart=e,a.selectionEnd=f;else if(b.getSelection){if(i=c.createRange(),a.firstChild===d||null===a.firstChild){var m=c.createTextNode("");a.appendChild(m)}i.setStart(a.firstChild,e<a.inputmask._valueGet().length?e:a.inputmask._valueGet().length),i.setEnd(a.firstChild,f<a.inputmask._valueGet().length?f:a.inputmask._valueGet().length),i.collapse(!0);var n=b.getSelection();n.removeAllRanges(),n.addRange(i)}else a.createTextRange&&(i=a.createTextRange(),i.collapse(!0),i.moveEnd("character",f),i.moveStart("character",e),i.select());S(a,d,{begin:e,end:f})}}function N(b){var c,e,f=z(),g=f.length,h=r(),i={},j=p().validPositions[h],k=j!==d?j.locator.slice():d;for(c=h+1;c<f.length;c++)e=u(c,k,c-1),k=e.locator.slice(),i[c]=a.extend(!0,{},e);var l=j&&j.alternation!==d?j.locator[j.alternation]:d;for(c=g-1;c>h&&(e=i[c],(e.match.optionality||e.match.optionalQuantifier&&e.match.newBlockMarker||l&&(l!==i[c].locator[j.alternation]&&null!=e.match.fn||null===e.match.fn&&e.locator[j.alternation]&&C(e.locator[j.alternation].toString().split(","),l.toString().split(","))&&""!==x(c)[0].def))&&f[c]===J(c,e.match));c--)g--;return b?{l:g,def:i[g]?i[g].match:d}:g}function O(a){for(var b,c=N(),e=a.length,f=p().validPositions[r()];c<e&&!E(c,!0)&&(b=f!==d?u(c,f.locator.slice(""),f):v(c))&&!0!==b.match.optionality&&(!0!==b.match.optionalQuantifier&&!0!==b.match.newBlockMarker||c+1===e&&""===(f!==d?u(c+1,f.locator.slice(""),f):v(c+1)).match.def);)c++;for(;(b=p().validPositions[c-1])&&b&&b.match.optionality&&b.input===j.skipOptionalPartCharacter;)c--;return a.splice(c),a}function P(b){if(a.isFunction(j.isComplete))return j.isComplete(b,j);if("*"===j.repeat)return d;var c=!1,e=N(!0),f=G(e.l);if(e.def===d||e.def.newBlockMarker||e.def.optionality||e.def.optionalQuantifier){c=!0;for(var g=0;g<=f;g++){var h=u(g).match;if(null!==h.fn&&p().validPositions[g]===d&&!0!==h.optionality&&!0!==h.optionalQuantifier||null===h.fn&&b[g]!==J(g,h)){c=!1;break}}}return c}function Q(b,c,f,g,h){if((j.numericInput||Z)&&(c===e.keyCode.BACKSPACE?c=e.keyCode.DELETE:c===e.keyCode.DELETE&&(c=e.keyCode.BACKSPACE),Z)){var i=f.end;f.end=f.begin,f.begin=i}c===e.keyCode.BACKSPACE&&(f.end-f.begin<1||!1===j.insertMode)?(f.begin=G(f.begin),p().validPositions[f.begin]!==d&&p().validPositions[f.begin].input===j.groupSeparator&&f.begin--):c===e.keyCode.DELETE&&f.begin===f.end&&(f.end=E(f.end,!0)&&p().validPositions[f.end]&&p().validPositions[f.end].input!==j.radixPoint?f.end+1:F(f.end)+1,p().validPositions[f.begin]!==d&&p().validPositions[f.begin].input===j.groupSeparator&&f.end++),s(f.begin,f.end,!1,g),!0!==g&&function(){if(j.keepStatic){for(var c=[],e=r(-1,!0),f=a.extend(!0,{},p().validPositions),g=p().validPositions[e];e>=0;e--){var h=p().validPositions[e];if(h){if(!0!==h.generatedInput&&/[0-9a-bA-Z]/.test(h.input)&&c.push(h.input),delete p().validPositions[e],h.alternation!==d&&h.locator[h.alternation]!==g.locator[h.alternation])break;g=h}}if(e>-1)for(p().p=F(r(-1,!0));c.length>0;){var i=new a.Event("keypress");i.which=c.pop().charCodeAt(0),da.keypressEvent.call(b,i,!0,!1,!1,p().p)}else p().validPositions=a.extend(!0,{},f)}}();var k=r(f.begin,!0);if(k<f.begin)p().p=F(k);else if(!0!==g&&(p().p=f.begin,!0!==h))for(;p().p<k&&p().validPositions[p().p]===d;)p().p++}function R(d){function e(a){var b,e=c.createElement("span");for(var f in h)isNaN(f)&&-1!==f.indexOf("font")&&(e.style[f]=h[f]);e.style.textTransform=h.textTransform,e.style.letterSpacing=h.letterSpacing,e.style.position="absolute",e.style.height="auto",e.style.width="auto",e.style.visibility="hidden",e.style.whiteSpace="nowrap",c.body.appendChild(e);var g,i=d.inputmask._valueGet(),j=0;for(b=0,g=i.length;b<=g;b++){if(e.innerHTML+=i.charAt(b)||"_",e.offsetWidth>=a){var k=a-j,l=e.offsetWidth-a;e.innerHTML=i.charAt(b),k-=e.offsetWidth/3,b=k<l?b-1:b;break}j=e.offsetWidth}return c.body.removeChild(e),b}function f(){W.style.position="absolute",W.style.top=g.top+"px",W.style.left=g.left+"px",W.style.width=parseInt(d.offsetWidth)-parseInt(h.paddingLeft)-parseInt(h.paddingRight)-parseInt(h.borderLeftWidth)-parseInt(h.borderRightWidth)+"px",W.style.height=parseInt(d.offsetHeight)-parseInt(h.paddingTop)-parseInt(h.paddingBottom)-parseInt(h.borderTopWidth)-parseInt(h.borderBottomWidth)+"px",W.style.lineHeight=W.style.height,W.style.zIndex=isNaN(h.zIndex)?-1:h.zIndex-1,W.style.webkitAppearance="textfield",W.style.mozAppearance="textfield",W.style.Appearance="textfield"}var g=a(d).position(),h=(d.ownerDocument.defaultView||b).getComputedStyle(d,null);W=c.createElement("div"),c.body.appendChild(W);for(var i in h)h.hasOwnProperty(i)&&isNaN(i)&&"cssText"!==i&&-1==i.indexOf("webkit")&&(W.style[i]=h[i]);d.style.backgroundColor="transparent",d.style.color="transparent",d.style.webkitAppearance="caret",d.style.mozAppearance="caret",d.style.Appearance="caret",f(),a(b).on("resize",function(c){g=a(d).position(),h=(d.ownerDocument.defaultView||b).getComputedStyle(d,null),f()}),a(d).on("click",function(a){return M(d,e(a.clientX)),da.clickEvent.call(this,[a])}),a(d).on("keydown",function(a){a.shiftKey||!1===j.insertMode||setTimeout(function(){S(d)},0)})}function S(a,b,e){function f(){h||null!==k.fn&&l.input!==d?h&&null!==k.fn&&l.input!==d&&(h=!1,g+="</span>"):(h=!0,g+="<span class='im-static''>")}if(W!==d){b=b||z(),e===d?e=M(a):e.begin===d&&(e={begin:e,end:e});var g="",h=!1;if(""!=b){var i,k,l,m=0,n=r();do{m===e.begin&&c.activeElement===a&&(g+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),p().validPositions[m]?(l=p().validPositions[m],k=l.match,i=l.locator.slice(),f(),g+=l.input):(l=u(m,i,m-1),k=l.match,i=l.locator.slice(),(!1===j.jitMasking||m<n||"number"==typeof j.jitMasking&&isFinite(j.jitMasking)&&j.jitMasking>m)&&(f(),g+=J(m,k))),m++}while((V===d||m<V)&&(null!==k.fn||""!==k.def)||n>m)}W.innerHTML=g}}h=h||this.maskset,j=j||this.opts;var T,U,V,W,X,Y=this.el,Z=this.isRTL,$=!1,_=!1,aa=!1,ba=!1,ca={on:function(b,c,f){var g=function(b){if(this.inputmask===d&&"FORM"!==this.nodeName){var c=a.data(this,"_inputmask_opts");c?new e(c).mask(this):ca.off(this)}else{if("setvalue"===b.type||"FORM"===this.nodeName||!(this.disabled||this.readOnly&&!("keydown"===b.type&&b.ctrlKey&&67===b.keyCode||!1===j.tabThrough&&b.keyCode===e.keyCode.TAB))){switch(b.type){case"input":if(!0===_)return _=!1,b.preventDefault();break;case"keydown":$=!1,_=!1;break;case"keypress":if(!0===$)return b.preventDefault();$=!0;break;case"click":if(l||m){var g=this,h=arguments;return setTimeout(function(){f.apply(g,h)},0),!1}}var i=f.apply(this,arguments);return!1===i&&(b.preventDefault(),b.stopPropagation()),i}b.preventDefault()}};b.inputmask.events[c]=b.inputmask.events[c]||[],b.inputmask.events[c].push(g),-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).on(c,g):a(b).on(c,g)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}},da={keydownEvent:function(b){var d=this,f=a(d),g=b.keyCode,h=M(d);if(g===e.keyCode.BACKSPACE||g===e.keyCode.DELETE||m&&g===e.keyCode.BACKSPACE_SAFARI||b.ctrlKey&&g===e.keyCode.X&&!function(a){var b=c.createElement("input"),d="on"+a,e=d in b;return e||(b.setAttribute(d,"return;"),e="function"==typeof b[d]),b=null,e}("cut"))b.preventDefault(),Q(d,g,h),I(d,z(!0),p().p,b,d.inputmask._valueGet()!==z().join("")),d.inputmask._valueGet()===y().join("")?f.trigger("cleared"):!0===P(z())&&f.trigger("complete");else if(g===e.keyCode.END||g===e.keyCode.PAGE_DOWN){b.preventDefault();var i=F(r());j.insertMode||i!==p().maskLength||b.shiftKey||i--,M(d,b.shiftKey?h.begin:i,i,!0)}else g===e.keyCode.HOME&&!b.shiftKey||g===e.keyCode.PAGE_UP?(b.preventDefault(),M(d,0,b.shiftKey?h.begin:0,!0)):(j.undoOnEscape&&g===e.keyCode.ESCAPE||90===g&&b.ctrlKey)&&!0!==b.altKey?(K(d,!0,!1,T.split("")),f.trigger("click")):g!==e.keyCode.INSERT||b.shiftKey||b.ctrlKey?!0===j.tabThrough&&g===e.keyCode.TAB?(!0===b.shiftKey?(null===v(h.begin).match.fn&&(h.begin=F(h.begin)),h.end=G(h.begin,!0),h.begin=G(h.end,!0)):(h.begin=F(h.begin,!0),h.end=F(h.begin,!0),h.end<p().maskLength&&h.end--),h.begin<p().maskLength&&(b.preventDefault(),M(d,h.begin,h.end))):b.shiftKey||!1===j.insertMode&&(g===e.keyCode.RIGHT?setTimeout(function(){var a=M(d);M(d,a.begin)},0):g===e.keyCode.LEFT&&setTimeout(function(){var a=M(d);M(d,Z?a.begin+1:a.begin-1)},0)):(j.insertMode=!j.insertMode,M(d,j.insertMode||h.begin!==p().maskLength?h.begin:h.begin-1));j.onKeyDown.call(this,b,z(),M(d).begin,j),aa=-1!==a.inArray(g,j.ignorables)},keypressEvent:function(b,c,f,g,h){var i=this,k=a(i),l=b.which||b.charCode||b.keyCode;if(!(!0===c||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||aa))return l===e.keyCode.ENTER&&T!==z().join("")&&(T=z().join(""),setTimeout(function(){k.trigger("change")},0)),!0;if(l){46===l&&!1===b.shiftKey&&""!==j.radixPoint&&(l=j.radixPoint.charCodeAt(0));var m,n=c?{begin:h,end:h}:M(i),o=String.fromCharCode(l);p().writeOutBuffer=!0;var r=D(n,o,g);if(!1!==r&&(q(!0),m=r.caret!==d?r.caret:c?r.pos+1:F(r.pos),p().p=m),!1!==f&&(setTimeout(function(){j.onKeyValidation.call(i,l,r,j)},0),p().writeOutBuffer&&!1!==r)){var s=z();I(i,s,j.numericInput&&r.caret===d?G(m):m,b,!0!==c),!0!==c&&setTimeout(function(){!0===P(s)&&k.trigger("complete")},0)}if(b.preventDefault(),c)return!1!==r&&(r.forwardPosition=m),r}},pasteEvent:function(c){var d,e=this,f=c.originalEvent||c,g=a(e),h=e.inputmask._valueGet(!0),i=M(e);Z&&(d=i.end,i.end=i.begin,i.begin=d);var k=h.substr(0,i.begin),l=h.substr(i.end,h.length);if(k===(Z?y().reverse():y()).slice(0,i.begin).join("")&&(k=""),l===(Z?y().reverse():y()).slice(i.end).join("")&&(l=""),Z&&(d=k,k=l,l=d),b.clipboardData&&b.clipboardData.getData)h=k+b.clipboardData.getData("Text")+l;else{if(!f.clipboardData||!f.clipboardData.getData)return!0;h=k+f.clipboardData.getData("text/plain")+l}var m=h;if(a.isFunction(j.onBeforePaste)){if(!1===(m=j.onBeforePaste(h,j)))return c.preventDefault();m||(m=h)}return K(e,!1,!1,Z?m.split("").reverse():m.toString().split("")),I(e,z(),F(r()),c,T!==z().join("")),!0===P(z())&&g.trigger("complete"),c.preventDefault()},inputFallBackEvent:function(b){var c=this,d=c.inputmask._valueGet();if(z().join("")!==d){var f=M(c);if("."===d.charAt(f.begin-1)&&""!==j.radixPoint&&(d=d.split(""),d[f.begin-1]=j.radixPoint.charAt(0),d=d.join("")),
d.charAt(f.begin-1)===j.radixPoint&&d.length>z().length){var g=new a.Event("keypress");return g.which=j.radixPoint.charCodeAt(0),da.keypressEvent.call(c,g,!0,!0,!1,f.begin),!1}if(d=d.replace(new RegExp("("+e.escapeRegex(y().join(""))+")*"),""),l){var h=d.replace(z().join(""),"");if(1===h.length){var g=new a.Event("keypress");return g.which=h.charCodeAt(0),da.keypressEvent.call(c,g,!0,!0,!1,p().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>d.length&&(M(c,d.length),f=M(c)),z().length-d.length!=1||d.charAt(f.begin)===z()[f.begin]||d.charAt(f.begin+1)===z()[f.begin]||E(f.begin)){var i=[],k=y().join("");for(i.push(d.substr(0,f.begin)),i.push(d.substr(f.begin));null===d.match(e.escapeRegex(k)+"$");)k=k.slice(1);d=d.replace(k,""),a.isFunction(j.onBeforeMask)&&(d=j.onBeforeMask(d,j)||d),K(c,!0,!1,d.split(""),b),function(a,b,c){var d=M(a).begin,f=a.inputmask._valueGet(),g=f.indexOf(b),h=d;if(0===g&&d!==b.length)d=b.length;else{for(;null===f.match(e.escapeRegex(c)+"$");)c=c.substr(1);var i=f.indexOf(c);-1!==i&&""!==c&&d>i&&i>g&&(d=i)}E(d)||(d=F(d)),h!==d&&(M(a,d),n&&setTimeout(function(){M(a,d)},0))}(c,i[0],i[1]),!0===P(z())&&a(c).trigger("complete")}else b.keyCode=e.keyCode.BACKSPACE,da.keydownEvent.call(c,b);b.preventDefault()}},setValueEvent:function(b){this.inputmask.refreshValue=!1;var c=this,d=c.inputmask._valueGet(!0);a.isFunction(j.onBeforeMask)&&(d=j.onBeforeMask(d,j)||d),d=d.split(""),K(c,!0,!1,Z?d.reverse():d),T=z().join(""),(j.clearMaskOnLostFocus||j.clearIncomplete)&&c.inputmask._valueGet()===y().join("")&&c.inputmask._valueSet("")},focusEvent:function(a){var b=this,c=b.inputmask._valueGet();j.showMaskOnFocus&&(!j.showMaskOnHover||j.showMaskOnHover&&""===c)&&(b.inputmask._valueGet()!==z().join("")?I(b,z(),F(r())):!1===ba&&M(b,F(r()))),!0===j.positionCaretOnTab&&!1===ba&&(I(b,z(),M(b)),da.clickEvent.apply(b,[a,!0])),T=z().join("")},mouseleaveEvent:function(a){var b=this;if(ba=!1,j.clearMaskOnLostFocus&&c.activeElement!==b){var d=z().slice(),e=b.inputmask._valueGet();e!==b.getAttribute("placeholder")&&""!==e&&(-1===r()&&e===y().join("")?d=[]:O(d),I(b,d))}},clickEvent:function(b,e){function f(b){if(""!==j.radixPoint){var c=p().validPositions;if(c[b]===d||c[b].input===J(b)){if(b<F(-1))return!0;var e=a.inArray(j.radixPoint,z());if(-1!==e){for(var f in c)if(e<f&&c[f].input!==J(f))return!1;return!0}}}return!1}var g=this;setTimeout(function(){if(c.activeElement===g){var a=M(g);if(e&&(Z?a.end=a.begin:a.begin=a.end),a.begin===a.end)switch(j.positionCaretOnClick){case"none":break;case"radixFocus":if(f(a.begin)){var b=z().join("").indexOf(j.radixPoint);M(g,j.numericInput?F(b):b);break}default:var h=a.begin,i=r(h,!0),k=F(i);if(h<k)M(g,E(h)||E(h-1)?h:F(h));else{var l=J(k),m=p().validPositions[i],n=u(k,m?m.match.locator:d,m);if(""!==l&&z()[k]!==l&&!0!==n.match.optionalQuantifier||!E(k)&&n.match.def===l){var o=F(k);h>=o&&(k=o)}M(g,k)}}}},0)},dblclickEvent:function(a){var b=this;setTimeout(function(){M(b,0,F(r()))},0)},cutEvent:function(d){var f=this,g=a(f),h=M(f),i=d.originalEvent||d,j=b.clipboardData||i.clipboardData,k=Z?z().slice(h.end,h.begin):z().slice(h.begin,h.end);j.setData("text",Z?k.reverse().join(""):k.join("")),c.execCommand&&c.execCommand("copy"),Q(f,e.keyCode.DELETE,h),I(f,z(),p().p,d,T!==z().join("")),f.inputmask._valueGet()===y().join("")&&g.trigger("cleared")},blurEvent:function(b){var c=a(this),e=this;if(e.inputmask){var f=e.inputmask._valueGet(),g=z().slice();""!==f&&(j.clearMaskOnLostFocus&&(-1===r()&&f===y().join("")?g=[]:O(g)),!1===P(g)&&(setTimeout(function(){c.trigger("incomplete")},0),j.clearIncomplete&&(q(),g=j.clearMaskOnLostFocus?[]:y().slice())),I(e,g,d,b)),T!==z().join("")&&(T=g.join(""),c.trigger("change"))}},mouseenterEvent:function(a){var b=this;ba=!0,c.activeElement!==b&&j.showMaskOnHover&&b.inputmask._valueGet()!==z().join("")&&I(b,z())},submitEvent:function(a){T!==z().join("")&&U.trigger("change"),j.clearMaskOnLostFocus&&-1===r()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===y().join("")&&Y.inputmask._valueSet(""),j.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){I(Y,z())},0))},resetEvent:function(a){Y.inputmask.refreshValue=!0,setTimeout(function(){U.trigger("setvalue")},0)}};if(f!==d)switch(f.action){case"isComplete":return Y=f.el,P(z());case"unmaskedvalue":return Y!==d&&f.value===d||(X=f.value,X=(a.isFunction(j.onBeforeMask)?j.onBeforeMask(X,j)||X:X).split(""),K(d,!1,!1,Z?X.reverse():X),a.isFunction(j.onBeforeWrite)&&j.onBeforeWrite(d,z(),0,j)),L(Y);case"mask":!function(b){ca.off(b);var e=function(b,e){var f=b.getAttribute("type"),h="INPUT"===b.tagName&&-1!==a.inArray(f,e.supportsInputType)||b.isContentEditable||"TEXTAREA"===b.tagName;if(!h)if("INPUT"===b.tagName){var i=c.createElement("input");i.setAttribute("type",f),h="text"===i.type,i=null}else h="partial";return!1!==h&&function(b){function f(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==r()||!0!==e.nullable?c.activeElement===this&&e.clearMaskOnLostFocus?(Z?O(z().slice()).reverse():O(z().slice())).join(""):i.call(this):"":i.call(this)}function h(b){j.call(this,b),this.inputmask&&a(this).trigger("setvalue")}var i,j;if(!b.inputmask.__valueGet){if(!0!==e.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===g("test".__proto__)?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var k=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):d;k&&k.get&&k.set?(i=k.get,j=k.set,Object.defineProperty(b,"value",{get:f,set:h,configurable:!0})):"INPUT"!==b.tagName&&(i=function(){return this.textContent},j=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:f,set:h,configurable:!0}))}else c.__lookupGetter__&&b.__lookupGetter__("value")&&(i=b.__lookupGetter__("value"),j=b.__lookupSetter__("value"),b.__defineGetter__("value",f),b.__defineSetter__("value",h));b.inputmask.__valueGet=i,b.inputmask.__valueSet=j}b.inputmask._valueGet=function(a){return Z&&!0!==a?i.call(this.el).split("").reverse().join(""):i.call(this.el)},b.inputmask._valueSet=function(a,b){j.call(this.el,null===a||a===d?"":!0!==b&&Z?a.split("").reverse().join(""):a)},i===d&&(i=function(){return this.value},j=function(a){this.value=a},function(b){if(a.valHooks&&(a.valHooks[b]===d||!0!==a.valHooks[b].inputmaskpatch)){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},f=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=c(a);return-1!==r(d,d,a.inputmask.maskset.validPositions)||!0!==e.nullable?b:""}return c(a)},set:function(b,c){var d,e=a(b);return d=f(b,c),b.inputmask&&e.trigger("setvalue"),d},inputmaskpatch:!0}}}(b.type),function(b){ca.on(b,"mouseenter",function(b){var c=a(this);this.inputmask._valueGet()!==z().join("")&&c.trigger("setvalue")})}(b))}}(b),h}(b,j);if(!1!==e&&(Y=b,U=a(Y),!0===j.colorMask&&R(Y),n&&(Y.hasOwnProperty("inputmode")&&(Y.inputmode=j.inputmode,Y.setAttribute("inputmode",j.inputmode)),"rtfm"===j.androidHack&&(!0!==j.colorMask&&R(Y),Y.type="password")),!0===e&&(ca.on(Y,"submit",da.submitEvent),ca.on(Y,"reset",da.resetEvent),ca.on(Y,"mouseenter",da.mouseenterEvent),ca.on(Y,"blur",da.blurEvent),ca.on(Y,"focus",da.focusEvent),ca.on(Y,"mouseleave",da.mouseleaveEvent),!0!==j.colorMask&&ca.on(Y,"click",da.clickEvent),ca.on(Y,"dblclick",da.dblclickEvent),ca.on(Y,"paste",da.pasteEvent),ca.on(Y,"dragdrop",da.pasteEvent),ca.on(Y,"drop",da.pasteEvent),ca.on(Y,"cut",da.cutEvent),ca.on(Y,"complete",j.oncomplete),ca.on(Y,"incomplete",j.onincomplete),ca.on(Y,"cleared",j.oncleared),n||!0===j.inputEventOnly||(ca.on(Y,"keydown",da.keydownEvent),ca.on(Y,"keypress",da.keypressEvent)),ca.on(Y,"compositionstart",a.noop),ca.on(Y,"compositionupdate",a.noop),ca.on(Y,"compositionend",a.noop),ca.on(Y,"keyup",a.noop),ca.on(Y,"input",da.inputFallBackEvent),ca.on(Y,"beforeinput",a.noop)),ca.on(Y,"setvalue",da.setValueEvent),T=y().join(""),""!==Y.inputmask._valueGet(!0)||!1===j.clearMaskOnLostFocus||c.activeElement===Y)){var f=a.isFunction(j.onBeforeMask)?j.onBeforeMask(Y.inputmask._valueGet(!0),j)||Y.inputmask._valueGet(!0):Y.inputmask._valueGet(!0);""!==f&&K(Y,!0,!1,Z?f.split("").reverse():f.split(""));var h=z().slice();T=h.join(""),!1===P(h)&&j.clearIncomplete&&q(),j.clearMaskOnLostFocus&&c.activeElement!==Y&&(-1===r()?h=[]:O(h)),I(Y,h),c.activeElement===Y&&M(Y,F(r()))}}(Y);break;case"format":return X=(a.isFunction(j.onBeforeMask)?j.onBeforeMask(f.value,j)||f.value:f.value).split(""),K(d,!0,!1,Z?X.reverse():X),f.metadata?{value:Z?z().slice().reverse().join(""):z().join(""),metadata:i.call(this,{action:"getmetadata"},h,j)}:Z?z().slice().reverse().join(""):z().join("");case"isValid":f.value?(X=f.value.split(""),K(d,!0,!0,Z?X.reverse():X)):f.value=z().join("");for(var ea=z(),fa=N(),ga=ea.length-1;ga>fa&&!E(ga);ga--);return ea.splice(fa,ga+1-fa),P(ea)&&f.value===z().join("");case"getemptymask":return y().join("");case"remove":if(Y&&Y.inputmask){U=a(Y),Y.inputmask._valueSet(j.autoUnmask?L(Y):Y.inputmask._valueGet(!0)),ca.off(Y);Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):c.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=d}return Y;case"getmetadata":if(a.isArray(h.metadata)){var ha=o(!0,0,!1).join("");return a.each(h.metadata,function(a,b){if(b.mask===ha)return ha=b,!1}),ha}return h.metadata}}var j=navigator.userAgent,k=/mobile/i.test(j),l=/iemobile/i.test(j),m=/iphone/i.test(j)&&!l,n=/android/i.test(j)&&!l;return e.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:d,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:a.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:d,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},aliases:{},masksCache:{},mask:function(g){function j(c,e,g,h){function i(a,e){null!==(e=e!==d?e:c.getAttribute(h+"-"+a))&&("string"==typeof e&&(0===a.indexOf("on")?e=b[e]:"false"===e?e=!1:"true"===e&&(e=!0)),g[a]=e)}("rtl"===c.dir||e.rightAlign)&&(c.style.textAlign="right"),("rtl"===c.dir||e.numericInput)&&(c.dir="ltr",c.removeAttribute("dir"),e.isRTL=!0);var j,k,l,m,n=c.getAttribute(h);if(n&&""!==n&&(n=n.replace(new RegExp("'","g"),'"'),k=JSON.parse("{"+n+"}")),k){l=d;for(m in k)if("alias"===m.toLowerCase()){l=k[m];break}}i("alias",l),g.alias&&f(g.alias,g,e);for(j in e){if(k){l=d;for(m in k)if(m.toLowerCase()===j.toLowerCase()){l=k[m];break}}i(j,l)}return a.extend(!0,e,g),e}var k=this;return"string"==typeof g&&(g=c.getElementById(g)||c.querySelectorAll(g)),g=g.nodeName?[g]:g,a.each(g,function(b,c){var f=a.extend(!0,{},k.opts);j(c,f,a.extend(!0,{},k.userOptions),k.dataAttribute);var g=h(f,k.noMasksCache);g!==d&&(c.inputmask!==d&&c.inputmask.remove(),c.inputmask=new e(d,d,!0),c.inputmask.opts=f,c.inputmask.noMasksCache=k.noMasksCache,c.inputmask.userOptions=a.extend(!0,{},k.userOptions),c.inputmask.isRTL=f.isRTL,c.inputmask.el=c,c.inputmask.maskset=g,a.data(c,"_inputmask_opts",f),i.call(c.inputmask,{action:"mask"}))}),g&&g[0]?g[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"===(void 0===b?"undefined":g(b))?(a.extend(this.userOptions,b),this.el&&!0!==c&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"unmaskedvalue",value:a})},remove:function(){return i.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"getmetadata"})},isValid:function(a){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"isValid",value:a})},format:function(a,b){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"format",value:a,metadata:b})},analyseMask:function(b,c,f){function g(a,b,c,d){this.matches=[],this.openGroup=a||!1,this.alternatorGroup=!1,this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function h(b,g,h){h=h!==d?h:b.matches.length;var i=b.matches[h-1];if(c)0===g.indexOf("[")||u?b.matches.splice(h++,0,{fn:new RegExp(g,f.casing?"i":""),cardinality:1,optionality:b.isOptional,newBlockMarker:i===d||i.def!==g,casing:null,def:g,placeholder:d,nativeDef:g}):a.each(g.split(""),function(a,c){i=b.matches[h-1],b.matches.splice(h++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:i===d||i.def!==c&&null!==i.fn,casing:null,def:f.staticDefinitionSymbol||c,placeholder:f.staticDefinitionSymbol!==d?c:d,nativeDef:c})}),u=!1;else{var j=(f.definitions?f.definitions[g]:d)||e.prototype.definitions[g];if(j&&!u){for(var k=j.prevalidator,l=k?k.length:0,m=1;m<j.cardinality;m++){var n=l>=m?k[m-1]:[],o=n.validator,p=n.cardinality;b.matches.splice(h++,0,{fn:o?"string"==typeof o?new RegExp(o,f.casing?"i":""):new function(){this.test=o}:new RegExp("."),cardinality:p||1,optionality:b.isOptional,newBlockMarker:i===d||i.def!==(j.definitionSymbol||g),casing:j.casing,def:j.definitionSymbol||g,placeholder:j.placeholder,nativeDef:g}),i=b.matches[h-1]}b.matches.splice(h++,0,{fn:j.validator?"string"==typeof j.validator?new RegExp(j.validator,f.casing?"i":""):new function(){this.test=j.validator}:new RegExp("."),cardinality:j.cardinality,optionality:b.isOptional,newBlockMarker:i===d||i.def!==(j.definitionSymbol||g),casing:j.casing,def:j.definitionSymbol||g,placeholder:j.placeholder,nativeDef:g})}else b.matches.splice(h++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:i===d||i.def!==g&&null!==i.fn,casing:null,def:f.staticDefinitionSymbol||g,placeholder:f.staticDefinitionSymbol!==d?g:d,nativeDef:g}),u=!1}}function i(b){b&&b.matches&&a.each(b.matches,function(a,e){var g=b.matches[a+1];(g===d||g.matches===d||!1===g.isQuantifier)&&e&&e.isGroup&&(e.isGroup=!1,c||(h(e,f.groupmarker.start,0),!0!==e.openGroup&&h(e,f.groupmarker.end))),i(e)})}function j(){if(w.length>0){if(o=w[w.length-1],h(o,m),o.isAlternator){p=w.pop();for(var a=0;a<p.matches.length;a++)p.matches[a].isGroup=!1;w.length>0?(o=w[w.length-1],o.matches.push(p)):v.matches.push(p)}}else h(v,m)}function k(a){a.matches=a.matches.reverse();for(var b in a.matches)if(a.matches.hasOwnProperty(b)){var c=parseInt(b);if(a.matches[b].isQuantifier&&a.matches[c+1]&&a.matches[c+1].isGroup){var e=a.matches[b];a.matches.splice(b,1),a.matches.splice(c+1,0,e)}a.matches[b].matches!==d?a.matches[b]=k(a.matches[b]):a.matches[b]=function(a){return a===f.optionalmarker.start?a=f.optionalmarker.end:a===f.optionalmarker.end?a=f.optionalmarker.start:a===f.groupmarker.start?a=f.groupmarker.end:a===f.groupmarker.end&&(a=f.groupmarker.start),a}(a.matches[b])}return a}var l,m,n,o,p,q,r,s=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,t=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,u=!1,v=new g,w=[],x=[];for(c&&(f.optionalmarker.start=d,f.optionalmarker.end=d);l=c?t.exec(b):s.exec(b);){if(m=l[0],c&&!0!==u)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}"}if(u)j();else switch(m.charAt(0)){case f.escapeChar:u=!0,c&&j();break;case f.optionalmarker.end:case f.groupmarker.end:if(n=w.pop(),n.openGroup=!1,n!==d)if(w.length>0){if(o=w[w.length-1],o.matches.push(n),o.isAlternator){p=w.pop();for(var y=0;y<p.matches.length;y++)p.matches[y].isGroup=!1,p.matches[y].alternatorGroup=!1;w.length>0?(o=w[w.length-1],o.matches.push(p)):v.matches.push(p)}}else v.matches.push(n);else j();break;case f.optionalmarker.start:w.push(new g(!1,!0));break;case f.groupmarker.start:w.push(new g(!0));break;case f.quantifiermarker.start:var z=new g(!1,!1,!0);m=m.replace(/[{}]/g,"");var A=m.split(","),B=isNaN(A[0])?A[0]:parseInt(A[0]),C=1===A.length?B:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==C&&"+"!==C||(B="*"===C?0:1),z.quantifier={min:B,max:C},w.length>0){var D=w[w.length-1].matches;l=D.pop(),l.isGroup||(r=new g(!0),r.matches.push(l),l=r),D.push(l),D.push(z)}else l=v.matches.pop(),l.isGroup||(c&&null===l.fn&&"."===l.def&&(l.fn=new RegExp(l.def,f.casing?"i":"")),r=new g(!0),r.matches.push(l),l=r),v.matches.push(l),v.matches.push(z);break;case f.alternatormarker:if(w.length>0){o=w[w.length-1];var E=o.matches[o.matches.length-1];q=o.openGroup&&(E.matches===d||!1===E.isGroup&&!1===E.isAlternator)?w.pop():o.matches.pop()}else q=v.matches.pop();if(q.isAlternator)w.push(q);else if(q.alternatorGroup?(p=w.pop(),q.alternatorGroup=!1):p=new g(!1,!1,!1,!0),p.matches.push(q),w.push(p),q.openGroup){q.openGroup=!1;var F=new g(!0);F.alternatorGroup=!0,w.push(F)}break;default:j()}}for(;w.length>0;)n=w.pop(),v.matches.push(n);return v.matches.length>0&&(i(v),x.push(v)),(f.numericInput||f.isRTL)&&k(x[0]),x}},e.extendDefaults=function(b){a.extend(!0,e.prototype.defaults,b)},e.extendDefinitions=function(b){a.extend(!0,e.prototype.definitions,b)},e.extendAliases=function(b){a.extend(!0,e.prototype.aliases,b)},e.format=function(a,b,c){return e(b).format(a,c)},e.unmask=function(a,b){return e(b).unmaskedvalue(a)},e.isValid=function(a,b){return e(b).isValid(a)},e.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},e.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},e.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},e})},function(a,b){a.exports=jQuery},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){function c(a){return isNaN(a)||29===new Date(a,2,0).getDate()}return b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return!isNaN(d)&&(b<=d&&d<=c)||!isNaN(e)&&(b<=e&&e<=c)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(b<d){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);b<e+c;)e--;var g=e+f;return a>g?a:g}if(a<=d&&d<=b){for(var h=d.toString().slice(0,2);b<h+c;)h--;var i=h+c;return i<a?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},postValidation:function(a,b,d){var e,f,g=a.join("");return 0===d.mask.indexOf("y")?(f=g.substr(0,4),e=g.substring(4,10)):(f=g.substring(6,10),e=g.substr(0,6)),b&&(e!==d.leapday||c(f))},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);return d||g||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0)))?g:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||-1!=="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,g<10?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0},"yyyy-mm-dd hh:mm:ss":{mask:"y-1-2 h:s:s",placeholder:"yyyy-mm-dd hh:mm:ss",alias:"datetime",separator:"-",leapday:"-02-29",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},onKeyDown:function(a,b,c,d){}}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b,c){function d(a,c){
for(var d="",e=0;e<a.length;e++)b.prototype.definitions[a.charAt(e)]||c.definitions[a.charAt(e)]||c.optionalmarker.start===a.charAt(e)||c.optionalmarker.end===a.charAt(e)||c.quantifiermarker.start===a.charAt(e)||c.quantifiermarker.end===a.charAt(e)||c.groupmarker.start===a.charAt(e)||c.groupmarker.end===a.charAt(e)||c.alternatormarker===a.charAt(e)?d+="\\"+a.charAt(e):d+=a.charAt(e);return d}return b.extendAliases({numeric:{mask:function(a){if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=c),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var b=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?b-1:b),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),"radixFocus"===a.positionCaretOnClick&&""===a.placeholder&&!1===a.integerOptional&&(a.positionCaretOnClick="lvp"),a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",!0===a.numericInput&&(a.positionCaretOnClick="radixFocus"===a.positionCaretOnClick?"lvp":a.positionCaretOnClick,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f="[+]";if(f+=d(a.prefix,a),!0===a.integerOptional?f+="~{1,"+a.integerDigits+"}":f+="~{"+a.integerDigits+"}",a.digits!==c){a.radixPointDefinitionSymbol=a.decimalProtect?":":a.radixPoint;var g=a.digits.toString().split(",");isFinite(g[0]&&g[1]&&isFinite(g[1]))?f+=a.radixPointDefinitionSymbol+";{"+a.digits+"}":(isNaN(a.digits)||parseInt(a.digits)>0)&&(a.digitsOptional?f+="["+a.radixPointDefinitionSymbol+";{1,"+a.digits+"}]":f+=a.radixPointDefinitionSymbol+";{"+a.digits+"}")}return f+=d(a.suffix,a),f+="[-]",a.greedy=!1,f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(b,d,e,f,g){if("-"===e||e==g.negationSymbol.front)return!0===g.allowMinus&&(g.isNegative=g.isNegative===c||!g.isNegative,""===b.join("")||{caret:d,dopost:!0});if(!1===f&&e===g.radixPoint&&g.digits!==c&&(isNaN(g.digits)||parseInt(g.digits)>0)){var h=a.inArray(g.radixPoint,b);if(-1!==h)return!0===g.numericInput?d===h:{caret:h+1}}return!0},postValidation:function(d,e,f){var g=f.suffix.split(""),h=f.prefix.split("");if(e.pos==c&&e.caret!==c&&!0!==e.dopost)return e;var i=e.caret!=c?e.caret:e.pos,j=d.slice();f.numericInput&&(i=j.length-i-1,j=j.reverse());var k=j[i];if(k===f.groupSeparator&&(i+=1,k=j[i]),i==j.length-f.suffix.length-1&&k===f.radixPoint)return e;k!==c&&k!==f.radixPoint&&k!==f.negationSymbol.front&&k!==f.negationSymbol.back&&(j[i]="?",f.prefix.length>0&&i>=(!1===f.isNegative?1:0)&&i<f.prefix.length-1+(!1===f.isNegative?1:0)?h[i-(!1===f.isNegative?1:0)]="?":f.suffix.length>0&&i>=j.length-f.suffix.length-(!1===f.isNegative?1:0)&&(g[i-(j.length-f.suffix.length-(!1===f.isNegative?1:0))]="?")),h=h.join(""),g=g.join("");var l=j.join("").replace(h,"");if(l=l.replace(g,""),l=l.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),l=l.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),l=l.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(l=l.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),l.length>1&&1!==l.indexOf(f.radixPoint)&&("0"==k&&(l=l.replace(/^\?/g,"")),l=l.replace(/^0/g,"")),l.charAt(0)===f.radixPoint&&""!==f.radixPoint&&!0!==f.numericInput&&(l="0"+l),""!==l){if(l=l.split(""),(!f.digitsOptional||f.enforceDigitsOnBlur&&"blur"===e.event)&&isFinite(f.digits)){var m=a.inArray(f.radixPoint,l),n=a.inArray(f.radixPoint,j);-1===m&&(l.push(f.radixPoint),m=l.length-1);for(var o=1;o<=f.digits;o++)f.digitsOptional&&(!f.enforceDigitsOnBlur||"blur"!==e.event)||l[m+o]!==c&&l[m+o]!==f.placeholder.charAt(0)?-1!==n&&j[n+o]!==c&&(l[m+o]=l[m+o]||j[n+o]):l[m+o]=e.placeholder||f.placeholder.charAt(0)}!0!==f.autoGroup||""===f.groupSeparator||k===f.radixPoint&&e.pos===c&&!e.dopost?l=l.join(""):(l=b(function(a,b){var c="";if(c+="("+b.groupSeparator+"*{"+b.groupSize+"}){*}",""!==b.radixPoint){var d=a.join("").split(b.radixPoint);d[1]&&(c+=b.radixPoint+"*{"+d[1].match(/^\d*\??\d*/)[0].length+"}")}return c}(l,f),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(l.join("")),l.charAt(0)===f.groupSeparator&&l.substr(1))}if(f.isNegative&&"blur"===e.event&&(f.isNegative="0"!==l),l=h+l,l+=g,f.isNegative&&(l=f.negationSymbol.front+l,l+=f.negationSymbol.back),l=l.split(""),k!==c)if(k!==f.radixPoint&&k!==f.negationSymbol.front&&k!==f.negationSymbol.back)i=a.inArray("?",l),i>-1?l[i]=k:i=e.caret||0;else if(k===f.radixPoint||k===f.negationSymbol.front||k===f.negationSymbol.back){var p=a.inArray(k,l);-1!==p&&(i=p)}f.numericInput&&(i=l.length-i-1,l=l.reverse());var q={caret:k===c||e.pos!==c?i+(f.numericInput?-1:1):i,buffer:l,refreshFromBuffer:e.dopost||d.join("")!==l.join("")};return q.refreshFromBuffer?q:e},onBeforeWrite:function(d,e,f,g){if(d)switch(d.type){case"keydown":return g.postValidation(e,{caret:f,dopost:!0},g);case"blur":case"checkval":var h;if(function(a){a.parseMinMaxOptions===c&&(null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,".")),a.min=isFinite(a.min)?parseFloat(a.min):NaN,isNaN(a.min)&&(a.min=Number.MIN_VALUE)),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,".")),a.max=isFinite(a.max)?parseFloat(a.max):NaN,isNaN(a.max)&&(a.max=Number.MAX_VALUE)),a.parseMinMaxOptions="done")}(g),null!==g.min||null!==g.max){if(h=g.onUnMask(e.join(""),c,a.extend({},g,{unmaskAsNumber:!0})),null!==g.min&&h<g.min)return g.isNegative=g.min<0,g.postValidation(g.min.toString().replace(".",g.radixPoint).split(""),{caret:f,dopost:!0,placeholder:"0"},g);if(null!==g.max&&h>g.max)return g.isNegative=g.max<0,g.postValidation(g.max.toString().replace(".",g.radixPoint).split(""),{caret:f,dopost:!0,placeholder:"0"},g)}return g.postValidation(e,{caret:f,dopost:!0,placeholder:"0",event:"blur"},g);case"_checkval":return{caret:f}}},regex:{integerPart:function(a,c){return c?new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?"):new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(a,d,e,f,g,h){var i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(a):new RegExp("[0-9]").test(a);if(!0===i){if(!0!==g.numericInput&&d.validPositions[e]!==c&&"~"===d.validPositions[e].match.def&&!h){var j=d.buffer.join("");j=j.replace(new RegExp("[-"+b.escapeRegex(g.negationSymbol.front)+"]","g"),""),j=j.replace(new RegExp(b.escapeRegex(g.negationSymbol.back)+"$"),"");var k=j.split(g.radixPoint);k.length>1&&(k[1]=k[1].replace(/0/g,g.placeholder.charAt(0))),"0"===k[0]&&(k[0]=k[0].replace(/0/g,g.placeholder.charAt(0))),j=k[0]+g.radixPoint+k[1]||"";var l=d._buffer.join("");for(j===g.radixPoint&&(j=l);null===j.match(b.escapeRegex(l)+"$");)l=l.slice(1);j=j.replace(l,""),j=j.split(""),i=j[e]===c?{pos:e,remove:e}:{pos:e}}}else f||a!==g.radixPoint||d.validPositions[e-1]!==c||(d.buffer[e]="0",i={pos:e+1});return i},cardinality:1},"+":{validator:function(a,b,c,d,e){return e.allowMinus&&("-"===a||a===e.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){return e.allowMinus&&a===e.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g="["+b.escapeRegex(f.radixPoint)+"]",h=new RegExp(g).test(a);return h&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(h={caret:d+1}),h},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){if(""===c&&!0===d.nullable)return c;var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),""!==d.placeholder.charAt(0)&&(e=e.replace(new RegExp(d.placeholder.charAt(0),"g"),"0")),d.unmaskAsNumber?(""!==d.radixPoint&&-1!==e.indexOf(d.radixPoint)&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),e=e.replace(new RegExp("^"+b.escapeRegex(d.negationSymbol.front)),"-"),e=e.replace(new RegExp(b.escapeRegex(d.negationSymbol.back)+"$"),""),Number(e)):e},isComplete:function(a,c){var d=a.join("");if(a.slice().join("")!==d)return!1;var e=d.replace(c.prefix,"");return e=e.replace(c.suffix,""),e=e.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(e=e.replace(b.escapeRegex(c.radixPoint),".")),isFinite(e)},onBeforeMask:function(a,d){if(d.isNegative=c,a=a.toString().charAt(a.length-1)===d.radixPoint?a.toString().substr(0,a.length-1):a.toString(),""!==d.radixPoint&&isFinite(a)){var e=a.split("."),f=""!==d.groupSeparator?parseInt(d.groupSize):0;2===e.length&&(e[0].length>f||e[1].length>f||e[0].length<=f&&e[1].length<f)&&(a=a.replace(".",d.radixPoint))}var g=a.match(/,/g),h=a.match(/\./g);if(h&&g?h.length>g.length?(a=a.replace(/\./g,""),a=a.replace(",",d.radixPoint)):g.length>h.length?(a=a.replace(/,/g,""),a=a.replace(".",d.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),0===d.digits&&(-1!==a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!==a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!==d.radixPoint&&isFinite(d.digits)&&-1!==a.indexOf(d.radixPoint)){var i=a.split(d.radixPoint),j=i[1].match(new RegExp("\\d*"))[0];if(parseInt(d.digits)<j.toString().length){var k=Math.pow(10,parseInt(d.digits));a=a.replace(b.escapeRegex(d.radixPoint),"."),a=Math.round(parseFloat(a)*k)/k,a=a.toString().replace(".",d.radixPoint)}}return a},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b],g=f.input!==e.radixPoint||null!==a.validPositions[b].match.fn&&!1===e.decimalProtect||f.input===e.radixPoint&&a.validPositions[b+1]&&null===a.validPositions[b+1].match.fn||isFinite(f.input)||b===c||f.input===e.groupSeparator||f.input===e.negationSymbol.front||f.input===e.negationSymbol.back;return!g||"+"!=f.match.nativeDef&&"-"!=f.match.nativeDef||(e.isNegative=!1),g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){function c(a,b){var c=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),d=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),e=(a.mask||a).split("#")[0],f=(b.mask||b).split("#")[0];return 0===f.indexOf(e)?-1:0===e.indexOf(f)?1:c.localeCompare(d)}var d=b.prototype.analyseMask;return b.prototype.analyseMask=function(b,c,e){function f(a,c,d){c=c||"",d=d||h,""!==c&&(d[c]={});for(var e="",g=d[c]||d,i=a.length-1;i>=0;i--)b=a[i].mask||a[i],e=b.substr(0,1),g[e]=g[e]||[],g[e].unshift(b.substr(1)),a.splice(i,1);for(var j in g)g[j].length>500&&f(g[j].slice(),j,g)}function g(b){var c="",d=[];for(var f in b)a.isArray(b[f])?1===b[f].length?d.push(f+b[f]):d.push(f+e.groupmarker.start+b[f].join(e.groupmarker.end+e.alternatormarker+e.groupmarker.start)+e.groupmarker.end):d.push(f+g(b[f]));return 1===d.length?c+=d[0]:c+=e.groupmarker.start+d.join(e.groupmarker.end+e.alternatormarker+e.groupmarker.start)+e.groupmarker.end,c}var h={};return e.phoneCodes&&(e.phoneCodes&&e.phoneCodes.length>1e3&&(b=b.substr(1,b.length-2),f(b.split(e.groupmarker.end+e.alternatormarker+e.groupmarker.start)),b=g(h)),b=b.replace(/9/g,"\\9")),d.call(this,b,c,e)},b.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":b.prototype.definitions[9]},a.phoneCodes.sort(c)},keepStatic:!0,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||-1===c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c},onUnMask:function(a,b,c){return a.replace(/[()#-]/g,"")},inputmode:"tel"}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex,b.casing?"i":"").test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(b,c){var d=!1;c&&(l+="(",n++);for(var e=0;e<b.matches.length;e++){var g=b.matches[e];if(!0===g.isGroup)d=h(g,!0);else if(!0===g.isQuantifier){var j=a.inArray(g,b.matches),k=b.matches[j-1],m=l;if(isNaN(g.quantifier.max)){for(;g.repeaterPart&&g.repeaterPart!==l&&g.repeaterPart.length>l.length&&!(d=h(k,!0)););d=d||h(k,!0),d&&(g.repeaterPart=l),l=m+g.quantifier.max}else{for(var o=0,p=g.quantifier.max-1;o<p&&!(d=h(k,!0));o++);l=m+"{"+g.quantifier.min+","+g.quantifier.max+"}"}}else if(void 0!==g.matches)for(var q=0;q<g.length&&!(d=h(g[q],c));q++);else{var r;if("["==g.charAt(0)){r=l,r+=g;for(var s=0;s<n;s++)r+=")";var t=new RegExp("^("+r+")$",f.casing?"i":"");d=t.test(i)}else for(var u=0,v=g.length;u<v;u++)if("\\"!==g.charAt(u)){r=l,r+=g.substr(0,u+1),r=r.replace(/\|$/,"");for(var s=0;s<n;s++)r+=")";var t=new RegExp("^("+r+")$",f.casing?"i":"");if(d=t.test(i))break}l+=g}if(d)break}return c&&(l+=")",n--),d}var i,j,k=c.buffer.slice(),l="",m=!1,n=0;null===f.regexTokens&&function(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":j=d.pop(),d.length>0?d[d.length-1].matches.push(j):c.matches.push(j);break;case"{":case"+":case"*":var e=new g(!1,!0);b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),k=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:k},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(j=new g(!0),j.matches.push(a),a=j),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(j=new g(!0),j.matches.push(a),a=j),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}(),k.splice(d,0,b),i=k.join("");for(var o=0;o<f.regexTokens.length;o++){var p=f.regexTokens[o];if(m=h(p,p.isGroup))break}return m},cardinality:1}}}}),b})},function(a,b,c){"use strict";var d,e,f,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(g){e=[c(2),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return!(!f||!f.inputmask)&&f.inputmask.hasMaskedValue();case"isComplete":return!f||!f.inputmask||f.inputmask.isComplete();case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(d)});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==(void 0===c?"undefined":g(c)))return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(c);e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask})},function(a,b,c){var d=c(13);"string"==typeof d&&(d=[[a.i,d,""]]);c(15)(d,{});d.locals&&(a.exports=d.locals)},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}c(9),c(3),c(4),c(5),c(6),c(7);var e=c(1),f=d(e),g=c(0),h=d(g),i=c(2),j=d(i);h.default===j.default&&c(8),window.Inputmask=f.default},function(a,b,c){"use strict";var d;"function"==typeof Symbol&&Symbol.iterator;void 0!==(d=function(){return document}.call(b,c,b,a))&&(a.exports=d)},function(a,b,c){"use strict";var d;"function"==typeof Symbol&&Symbol.iterator;void 0!==(d=function(){return window}.call(b,c,b,a))&&(a.exports=d)},function(a,b,c){b=a.exports=c(14)(void 0),b.push([a.i,".im-caret {\r\n\t-webkit-animation: 1s blink step-end infinite;\r\n\tanimation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n\tfrom, to {\r\n\t\tborder-right-color: black;\r\n\t}\r\n\t50% {\r\n\t\tborder-right-color: transparent;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n\tfrom, to {\r\n\t\tborder-right-color: black;\r\n\t}\r\n\t50% {\r\n\t\tborder-right-color: transparent;\r\n\t}\r\n}\r\n\r\n.im-static {\r\n\tcolor: grey;\r\n}\r\n",""])},function(a,b){function c(a,b){var c=a[1]||"",e=a[3];if(!e)return c;if(b&&"function"==typeof btoa){var f=d(e),g=e.sources.map(function(a){return"/*# sourceURL="+e.sourceRoot+a+" */"});return[c].concat(g).concat([f]).join("\n")}return[c].join("\n")}function d(a){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"}a.exports=function(a){var b=[];return b.toString=function(){return this.map(function(b){var d=c(b,a);return b[2]?"@media "+b[2]+"{"+d+"}":d}).join("")},b.i=function(a,c){"string"==typeof a&&(a=[[null,a,""]]);for(var d={},e=0;e<this.length;e++){var f=this[e][0];"number"==typeof f&&(d[f]=!0)}for(e=0;e<a.length;e++){var g=a[e];"number"==typeof g[0]&&d[g[0]]||(c&&!g[2]?g[2]=c:c&&(g[2]="("+g[2]+") and ("+c+")"),b.push(g))}},b}},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=o[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(k(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(k(d.parts[f],b));o[d.id]={id:d.id,refs:1,parts:g}}}}function e(a){for(var b=[],c={},d=0;d<a.length;d++){var e=a[d],f=e[0],g=e[1],h=e[2],i=e[3],j={css:g,media:h,sourceMap:i};c[f]?c[f].parts.push(j):b.push(c[f]={id:f,parts:[j]})}return b}function f(a,b){var c=q(a.insertInto);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var d=t[t.length-1];if("top"===a.insertAt)d?d.nextSibling?c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),t.push(b);else{if("bottom"!==a.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");c.appendChild(b)}}function g(a){a.parentNode.removeChild(a);var b=t.indexOf(a);b>=0&&t.splice(b,1)}function h(a){var b=document.createElement("style");return a.attrs.type="text/css",j(b,a.attrs),f(a,b),b}function i(a){var b=document.createElement("link");return a.attrs.type="text/css",a.attrs.rel="stylesheet",j(b,a.attrs),f(a,b),b}function j(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function k(a,b){var c,d,e;if(b.singleton){var f=s++;c=r||(r=h(b)),d=l.bind(null,c,f,!1),e=l.bind(null,c,f,!0)}else a.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(c=i(b),d=n.bind(null,c,b),e=function(){g(c),c.href&&URL.revokeObjectURL(c.href)}):(c=h(b),d=m.bind(null,c),e=function(){g(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function l(a,b,c,d){var e=c?"":d.css;if(a.styleSheet)a.styleSheet.cssText=v(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function m(a,b){var c=b.css,d=b.media;if(d&&a.setAttribute("media",d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function n(a,b,c){var d=c.css,e=c.sourceMap,f=void 0===b.convertToAbsoluteUrls&&e;(b.convertToAbsoluteUrls||f)&&(d=u(d)),e&&(d+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */");var g=new Blob([d],{type:"text/css"}),h=a.href;a.href=URL.createObjectURL(g),h&&URL.revokeObjectURL(h)}var o={},p=function(a){var b;return function(){return void 0===b&&(b=a.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),q=function(a){var b={};return function(c){return void 0===b[c]&&(b[c]=a.call(this,c)),b[c]}}(function(a){return document.querySelector(a)}),r=null,s=0,t=[],u=c(16);a.exports=function(a,b){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");b=b||{},b.attrs="object"==typeof b.attrs?b.attrs:{},void 0===b.singleton&&(b.singleton=p()),void 0===b.insertInto&&(b.insertInto="head"),void 0===b.insertAt&&(b.insertAt="bottom");var c=e(a);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=o[h.id];i.refs--,f.push(i)}if(a){d(e(a),b)}for(var g=0;g<f.length;g++){var i=f[g];if(0===i.refs){for(var j=0;j<i.parts.length;j++)i.parts[j]();delete o[i.id]}}}};var v=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join("\n")}}()},function(a,b){a.exports=function(a){var b="undefined"!=typeof window&&window.location;if(!b)throw new Error("fixUrls requires window.location");if(!a||"string"!=typeof a)return a;var c=b.protocol+"//"+b.host,d=c+b.pathname.replace(/\/[^\/]*$/,"/");return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){var e=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(e))return a;var f;return f=0===e.indexOf("//")?e:0===e.indexOf("/")?c+e:d+e.replace(/^\.\//,""),"url("+JSON.stringify(f)+")"})}}]);

Inputmask.extendAliases({
  "ru-phone": {
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    onKeyDown: function(event, buffer, caretPos, opts) {
      if (event.keyCode == 8)
      return true

      var $input = $(this)
      if (event.key.match(/^[0-9\-\=\+]$/) && event.key != '+' && event.key != '8' && caretPos == 0)
      $input.val('+7')
    },
    onBeforeMask: function (value, opts) {
      var processedValue = value.replace(/[^0-9\+\-\(\)]/g, "");

      if (processedValue.length > 0 && !processedValue.match(/^[+7|+8|8]/)) {
        processedValue = '+7' + processedValue
      }

      return processedValue;
    },
    mask: ["(+7|+8|8)(999)999-99-99"]
  }
});

Inputmask.extendAliases({
  "phone": {
    countrycode: "",
    showMaskOnHover: false,
    showMaskOnFocus: false,
    alias: "abstractphone",
    jitMasking: true,
    phoneCodes: [
      { "mask": "8(###)###-##-##", "cc": "RU", "cd": "Russia", "desc_en": "mobile", "name_ru": "Россия", "desc_ru": "мобильные" },
      { "mask": "+247-####", "cc": "AC", "cd": "Ascension", "desc_en": "", "name_ru": "Остров Вознесения", "desc_ru": "" },
      { "mask": "+376-###-###", "cc": "AD", "cd": "Andorra", "desc_en": "", "name_ru": "Андорра", "desc_ru": "" },
      { "mask": "+971-5#-###-####", "cc": "AE", "cd": "United Arab Emirates", "desc_en": "mobile", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "мобильные" },
      { "mask": "+971-#-###-####", "cc": "AE", "cd": "United Arab Emirates", "desc_en": "", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "" },
      { "mask": "+93-##-###-####", "cc": "AF", "cd": "Afghanistan", "desc_en": "", "name_ru": "Афганистан", "desc_ru": "" },
      { "mask": "+1(268)###-####", "cc": "AG", "cd": "Antigua & Barbuda", "desc_en": "", "name_ru": "Антигуа и Барбуда", "desc_ru": "" },
      { "mask": "+1(264)###-####", "cc": "AI", "cd": "Anguilla", "desc_en": "", "name_ru": "Ангилья", "desc_ru": "" },
      { "mask": "+355(###)###-###", "cc": "AL", "cd": "Albania", "desc_en": "", "name_ru": "Албания", "desc_ru": "" },
      { "mask": "+374-##-###-###", "cc": "AM", "cd": "Armenia", "desc_en": "", "name_ru": "Армения", "desc_ru": "" },
      { "mask": "+599-###-####", "cc": "AN", "cd": "Caribbean Netherlands", "desc_en": "", "name_ru": "Карибские Нидерланды", "desc_ru": "" },
      { "mask": "+599-###-####", "cc": "AN", "cd": "Netherlands Antilles", "desc_en": "", "name_ru": "Нидерландские Антильские острова", "desc_ru": "" },
      { "mask": "+599-9###-####", "cc": "AN", "cd": "Netherlands Antilles", "desc_en": "Curacao", "name_ru": "Нидерландские Антильские острова", "desc_ru": "Кюрасао" },
      { "mask": "+244(###)###-###", "cc": "AO", "cd": "Angola", "desc_en": "", "name_ru": "Ангола", "desc_ru": "" },
      { "mask": "+672-1##-###", "cc": "AQ", "cd": "Australian bases in Antarctica", "desc_en": "", "name_ru": "Австралийская антарктическая база", "desc_ru": "" },
      { "mask": "+54(###)###-####", "cc": "AR", "cd": "Argentina", "desc_en": "", "name_ru": "Аргентина", "desc_ru": "" },
      { "mask": "+1(684)###-####", "cc": "AS", "cd": "American Samoa", "desc_en": "", "name_ru": "Американское Самоа", "desc_ru": "" },
      { "mask": "+43(###)###-####", "cc": "AT", "cd": "Austria", "desc_en": "", "name_ru": "Австрия", "desc_ru": "" },
      { "mask": "+61-#-####-####", "cc": "AU", "cd": "Australia", "desc_en": "", "name_ru": "Австралия", "desc_ru": "" },
      { "mask": "+297-###-####", "cc": "AW", "cd": "Aruba", "desc_en": "", "name_ru": "Аруба", "desc_ru": "" },
      { "mask": "+994-##-###-##-##", "cc": "AZ", "cd": "Azerbaijan", "desc_en": "", "name_ru": "Азербайджан", "desc_ru": "" },
      { "mask": "+387-##-#####", "cc": "BA", "cd": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
      { "mask": "+387-##-####", "cc": "BA", "cd": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
      { "mask": "+1(246)###-####", "cc": "BB", "cd": "Barbados", "desc_en": "", "name_ru": "Барбадос", "desc_ru": "" },
      { "mask": "+880-##-###-###", "cc": "BD", "cd": "Bangladesh", "desc_en": "", "name_ru": "Бангладеш", "desc_ru": "" },
      { "mask": "+32(###)###-###", "cc": "BE", "cd": "Belgium", "desc_en": "", "name_ru": "Бельгия", "desc_ru": "" },
      { "mask": "+226-##-##-####", "cc": "BF", "cd": "Burkina Faso", "desc_en": "", "name_ru": "Буркина Фасо", "desc_ru": "" },
      { "mask": "+359(###)###-###", "cc": "BG", "cd": "Bulgaria", "desc_en": "", "name_ru": "Болгария", "desc_ru": "" },
      { "mask": "+973-####-####", "cc": "BH", "cd": "Bahrain", "desc_en": "", "name_ru": "Бахрейн", "desc_ru": "" },
      { "mask": "+257-##-##-####", "cc": "BI", "cd": "Burundi", "desc_en": "", "name_ru": "Бурунди", "desc_ru": "" },
      { "mask": "+229-##-##-####", "cc": "BJ", "cd": "Benin", "desc_en": "", "name_ru": "Бенин", "desc_ru": "" },
      { "mask": "+1(441)###-####", "cc": "BM", "cd": "Bermuda", "desc_en": "", "name_ru": "Бермудские острова", "desc_ru": "" },
      { "mask": "+673-###-####", "cc": "BN", "cd": "Brunei Darussalam", "desc_en": "", "name_ru": "Бруней-Даруссалам", "desc_ru": "" },
      { "mask": "+591-#-###-####", "cc": "BO", "cd": "Bolivia", "desc_en": "", "name_ru": "Боливия", "desc_ru": "" },
      { "mask": "+55-##-####[#]-####", "cc": "BR", "cd": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "" },
      { "mask": "+1(242)###-####", "cc": "BS", "cd": "Bahamas", "desc_en": "", "name_ru": "Багамские Острова", "desc_ru": "" },
      { "mask": "+975-17-###-###", "cc": "BT", "cd": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
      { "mask": "+975-#-###-###", "cc": "BT", "cd": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
      { "mask": "+267-##-###-###", "cc": "BW", "cd": "Botswana", "desc_en": "", "name_ru": "Ботсвана", "desc_ru": "" },
      { "mask": "+375(##)###-##-##", "cc": "BY", "cd": "Belarus", "desc_en": "", "name_ru": "Беларусь (Белоруссия)", "desc_ru": "" },
      { "mask": "+501-###-####", "cc": "BZ", "cd": "Belize", "desc_en": "", "name_ru": "Белиз", "desc_ru": "" },
      { "mask": "+243(###)###-###", "cc": "CD", "cd": "Dem. Rep. Congo", "desc_en": "", "name_ru": "Дем. Респ. Конго (Киншаса)", "desc_ru": "" },
      { "mask": "+236-##-##-####", "cc": "CF", "cd": "Central African Republic", "desc_en": "", "name_ru": "Центральноафриканская Республика", "desc_ru": "" },
      { "mask": "+242-##-###-####", "cc": "CG", "cd": "Congo (Brazzaville)", "desc_en": "", "name_ru": "Конго (Браззавиль)", "desc_ru": "" },
      { "mask": "+41-##-###-####", "cc": "CH", "cd": "Switzerland", "desc_en": "", "name_ru": "Швейцария", "desc_ru": "" },
      { "mask": "+225-##-###-###", "cc": "CI", "cd": "Cote d’Ivoire (Ivory Coast)", "desc_en": "", "name_ru": "Кот-д’Ивуар", "desc_ru": "" },
      { "mask": "+682-##-###", "cc": "CK", "cd": "Cook Islands", "desc_en": "", "name_ru": "Острова Кука", "desc_ru": "" },
      { "mask": "+56-#-####-####", "cc": "CL", "cd": "Chile", "desc_en": "", "name_ru": "Чили", "desc_ru": "" },
      { "mask": "+237-####-####", "cc": "CM", "cd": "Cameroon", "desc_en": "", "name_ru": "Камерун", "desc_ru": "" },
      { "mask": "+86(###)####-####", "cc": "CN", "cd": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
      { "mask": "+86(###)####-###", "cc": "CN", "cd": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
      { "mask": "+86-##-#####-#####", "cc": "CN", "cd": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
      { "mask": "+57(###)###-####", "cc": "CO", "cd": "Colombia", "desc_en": "", "name_ru": "Колумбия", "desc_ru": "" },
      { "mask": "+506-####-####", "cc": "CR", "cd": "Costa Rica", "desc_en": "", "name_ru": "Коста-Рика", "desc_ru": "" },
      { "mask": "+53-#-###-####", "cc": "CU", "cd": "Cuba", "desc_en": "", "name_ru": "Куба", "desc_ru": "" },
      { "mask": "+238(###)##-##", "cc": "CV", "cd": "Cape Verde", "desc_en": "", "name_ru": "Кабо-Верде", "desc_ru": "" },
      { "mask": "+599-###-####", "cc": "CW", "cd": "Curacao", "desc_en": "", "name_ru": "Кюрасао", "desc_ru": "" },
      { "mask": "+357-##-###-###", "cc": "CY", "cd": "Cyprus", "desc_en": "", "name_ru": "Кипр", "desc_ru": "" },
      { "mask": "+420(###)###-###", "cc": "CZ", "cd": "Czech Republic", "desc_en": "", "name_ru": "Чехия", "desc_ru": "" },
      { "mask": "+49(####)###-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
      { "mask": "+49(###)###-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
      { "mask": "+49(###)##-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
      { "mask": "+49(###)##-###", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
      { "mask": "+49(###)##-##", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
      { "mask": "+49-###-###", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
      { "mask": "+253-##-##-##-##", "cc": "DJ", "cd": "Djibouti", "desc_en": "", "name_ru": "Джибути", "desc_ru": "" },
      { "mask": "+45-##-##-##-##", "cc": "DK", "cd": "Denmark", "desc_en": "", "name_ru": "Дания", "desc_ru": "" },
      { "mask": "+1(767)###-####", "cc": "DM", "cd": "Dominica", "desc_en": "", "name_ru": "Доминика", "desc_ru": "" },
      { "mask": "+1(809)###-####", "cc": "DO", "cd": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
      { "mask": "+1(829)###-####", "cc": "DO", "cd": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
      { "mask": "+1(849)###-####", "cc": "DO", "cd": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
      { "mask": "+213-##-###-####", "cc": "DZ", "cd": "Algeria", "desc_en": "", "name_ru": "Алжир", "desc_ru": "" },
      { "mask": "+593-##-###-####", "cc": "EC", "cd": "Ecuador ", "desc_en": "mobile", "name_ru": "Эквадор ", "desc_ru": "мобильные" },
      { "mask": "+593-#-###-####", "cc": "EC", "cd": "Ecuador", "desc_en": "", "name_ru": "Эквадор", "desc_ru": "" },
      { "mask": "+372-####-####", "cc": "EE", "cd": "Estonia ", "desc_en": "mobile", "name_ru": "Эстония ", "desc_ru": "мобильные" },
      { "mask": "+372-###-####", "cc": "EE", "cd": "Estonia", "desc_en": "", "name_ru": "Эстония", "desc_ru": "" },
      { "mask": "+20(###)###-####", "cc": "EG", "cd": "Egypt", "desc_en": "", "name_ru": "Египет", "desc_ru": "" },
      { "mask": "+291-#-###-###", "cc": "ER", "cd": "Eritrea", "desc_en": "", "name_ru": "Эритрея", "desc_ru": "" },
      { "mask": "+34(###)###-###", "cc": "ES", "cd": "Spain", "desc_en": "", "name_ru": "Испания", "desc_ru": "" },
      { "mask": "+251-##-###-####", "cc": "ET", "cd": "Ethiopia", "desc_en": "", "name_ru": "Эфиопия", "desc_ru": "" },
      { "mask": "+358(###)###-##-##", "cc": "FI", "cd": "Finland", "desc_en": "", "name_ru": "Финляндия", "desc_ru": "" },
      { "mask": "+679-##-#####", "cc": "FJ", "cd": "Fiji", "desc_en": "", "name_ru": "Фиджи", "desc_ru": "" },
      { "mask": "+500-#####", "cc": "FK", "cd": "Falkland Islands", "desc_en": "", "name_ru": "Фолклендские острова", "desc_ru": "" },
      { "mask": "+691-###-####", "cc": "FM", "cd": "F.S. Micronesia", "desc_en": "", "name_ru": "Ф.Ш. Микронезии", "desc_ru": "" },
      { "mask": "+298-###-###", "cc": "FO", "cd": "Faroe Islands", "desc_en": "", "name_ru": "Фарерские острова", "desc_ru": "" },
      { "mask": "+262-#####-####", "cc": "FR", "cd": "Mayotte", "desc_en": "", "name_ru": "Майотта", "desc_ru": "" },
      { "mask": "+33(###)###-###", "cc": "FR", "cd": "France", "desc_en": "", "name_ru": "Франция", "desc_ru": "" },
      { "mask": "+508-##-####", "cc": "FR", "cd": "St Pierre & Miquelon", "desc_en": "", "name_ru": "Сен-Пьер и Микелон", "desc_ru": "" },
      { "mask": "+590(###)###-###", "cc": "FR", "cd": "Guadeloupe", "desc_en": "", "name_ru": "Гваделупа", "desc_ru": "" },
      { "mask": "+241-#-##-##-##", "cc": "GA", "cd": "Gabon", "desc_en": "", "name_ru": "Габон", "desc_ru": "" },
      { "mask": "+1(473)###-####", "cc": "GD", "cd": "Grenada", "desc_en": "", "name_ru": "Гренада", "desc_ru": "" },
      { "mask": "+995(###)###-###", "cc": "GE", "cd": "Rep. of Georgia", "desc_en": "", "name_ru": "Грузия", "desc_ru": "" },
      { "mask": "+594-#####-####", "cc": "GF", "cd": "Guiana (French)", "desc_en": "", "name_ru": "Фр. Гвиана", "desc_ru": "" },
      { "mask": "+233(###)###-###", "cc": "GH", "cd": "Ghana", "desc_en": "", "name_ru": "Гана", "desc_ru": "" },
      { "mask": "+350-###-#####", "cc": "GI", "cd": "Gibraltar", "desc_en": "", "name_ru": "Гибралтар", "desc_ru": "" },
      { "mask": "+299-##-##-##", "cc": "GL", "cd": "Greenland", "desc_en": "", "name_ru": "Гренландия", "desc_ru": "" },
      { "mask": "+220(###)##-##", "cc": "GM", "cd": "Gambia", "desc_en": "", "name_ru": "Гамбия", "desc_ru": "" },
      { "mask": "+224-##-###-###", "cc": "GN", "cd": "Guinea", "desc_en": "", "name_ru": "Гвинея", "desc_ru": "" },
      { "mask": "+240-##-###-####", "cc": "GQ", "cd": "Equatorial Guinea", "desc_en": "", "name_ru": "Экваториальная Гвинея", "desc_ru": "" },
      { "mask": "+30(###)###-####", "cc": "GR", "cd": "Greece", "desc_en": "", "name_ru": "Греция", "desc_ru": "" },
      { "mask": "+502-#-###-####", "cc": "GT", "cd": "Guatemala", "desc_en": "", "name_ru": "Гватемала", "desc_ru": "" },
      { "mask": "+1(671)###-####", "cc": "GU", "cd": "Guam", "desc_en": "", "name_ru": "Гуам", "desc_ru": "" },
      { "mask": "+245-#-######", "cc": "GW", "cd": "Guinea-Bissau", "desc_en": "", "name_ru": "Гвинея-Бисау", "desc_ru": "" },
      { "mask": "+592-###-####", "cc": "GY", "cd": "Guyana", "desc_en": "", "name_ru": "Гайана", "desc_ru": "" },
      { "mask": "+852-####-####", "cc": "HK", "cd": "Hong Kong", "desc_en": "", "name_ru": "Гонконг", "desc_ru": "" },
      { "mask": "+504-####-####", "cc": "HN", "cd": "Honduras", "desc_en": "", "name_ru": "Гондурас", "desc_ru": "" },
      { "mask": "+385-##-###-###", "cc": "HR", "cd": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "" },
      { "mask": "+509-##-##-####", "cc": "HT", "cd": "Haiti", "desc_en": "", "name_ru": "Гаити", "desc_ru": "" },
      { "mask": "+36(###)###-###", "cc": "HU", "cd": "Hungary", "desc_en": "", "name_ru": "Венгрия", "desc_ru": "" },
      { "mask": "+62(8##)###-####", "cc": "ID", "cd": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
      { "mask": "+62-##-###-##", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
      { "mask": "+62-##-###-###", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
      { "mask": "+62-##-###-####", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
      { "mask": "+62(8##)###-###", "cc": "ID", "cd": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
      { "mask": "+62(8##)###-##-###", "cc": "ID", "cd": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
      { "mask": "+353(###)###-###", "cc": "IE", "cd": "Ireland", "desc_en": "", "name_ru": "Ирландия", "desc_ru": "" },
      { "mask": "+972-5#-###-####", "cc": "IL", "cd": "Israel ", "desc_en": "mobile", "name_ru": "Израиль ", "desc_ru": "мобильные" },
      { "mask": "+972-#-###-####", "cc": "IL", "cd": "Israel", "desc_en": "", "name_ru": "Израиль", "desc_ru": "" },
      { "mask": "+91(####)###-###", "cc": "IN", "cd": "India", "desc_en": "", "name_ru": "Индия", "desc_ru": "" },
      { "mask": "+246-###-####", "cc": "IO", "cd": "Diego Garcia", "desc_en": "", "name_ru": "Диего-Гарсия", "desc_ru": "" },
      { "mask": "+964(###)###-####", "cc": "IQ", "cd": "Iraq", "desc_en": "", "name_ru": "Ирак", "desc_ru": "" },
      { "mask": "+98(###)###-####", "cc": "IR", "cd": "Iran", "desc_en": "", "name_ru": "Иран", "desc_ru": "" },
      { "mask": "+354-###-####", "cc": "IS", "cd": "Iceland", "desc_en": "", "name_ru": "Исландия", "desc_ru": "" },
      { "mask": "+39(###)####-###", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "" },
      { "mask": "+1(876)###-####", "cc": "JM", "cd": "Jamaica", "desc_en": "", "name_ru": "Ямайка", "desc_ru": "" },
      { "mask": "+962-#-####-####", "cc": "JO", "cd": "Jordan", "desc_en": "", "name_ru": "Иордания", "desc_ru": "" },
      { "mask": "+81-##-####-####", "cc": "JP", "cd": "Japan ", "desc_en": "mobile", "name_ru": "Япония ", "desc_ru": "мобильные" },
      { "mask": "+81(###)###-###", "cc": "JP", "cd": "Japan", "desc_en": "", "name_ru": "Япония", "desc_ru": "" },
      { "mask": "+254-###-######", "cc": "KE", "cd": "Kenya", "desc_en": "", "name_ru": "Кения", "desc_ru": "" },
      { "mask": "+996(###)###-###", "cc": "KG", "cd": "Kyrgyzstan", "desc_en": "", "name_ru": "Киргизия", "desc_ru": "" },
      { "mask": "+855-##-###-###", "cc": "KH", "cd": "Cambodia", "desc_en": "", "name_ru": "Камбоджа", "desc_ru": "" },
      { "mask": "+686-##-###", "cc": "KI", "cd": "Kiribati", "desc_en": "", "name_ru": "Кирибати", "desc_ru": "" },
      { "mask": "+269-##-#####", "cc": "KM", "cd": "Comoros", "desc_en": "", "name_ru": "Коморы", "desc_ru": "" },
      { "mask": "+1(869)###-####", "cc": "KN", "cd": "Saint Kitts & Nevis", "desc_en": "", "name_ru": "Сент-Китс и Невис", "desc_ru": "" },
      { "mask": "+850-191-###-####", "cc": "KP", "cd": "DPR Korea (North) ", "desc_en": "mobile", "name_ru": "Корейская НДР ", "desc_ru": "мобильные" },
      { "mask": "+850-##-###-###", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
      { "mask": "+850-###-####-###", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
      { "mask": "+850-###-###", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
      { "mask": "+850-####-####", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
      { "mask": "+850-####-#############", "cc": "KP", "cd": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
      { "mask": "+82-##-###-####", "cc": "KR", "cd": "Korea (South)", "desc_en": "", "name_ru": "Респ. Корея", "desc_ru": "" },
      { "mask": "+965-####-####", "cc": "KW", "cd": "Kuwait", "desc_en": "", "name_ru": "Кувейт", "desc_ru": "" },
      { "mask": "+1(345)###-####", "cc": "KY", "cd": "Cayman Islands", "desc_en": "", "name_ru": "Каймановы острова", "desc_ru": "" },
      { "mask": "+7(6##)###-##-##", "cc": "KZ", "cd": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
      { "mask": "+7(7##)###-##-##", "cc": "KZ", "cd": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
      { "mask": "+856(20##)###-###", "cc": "LA", "cd": "Laos ", "desc_en": "mobile", "name_ru": "Лаос ", "desc_ru": "мобильные" },
      { "mask": "+856-##-###-###", "cc": "LA", "cd": "Laos", "desc_en": "", "name_ru": "Лаос", "desc_ru": "" },
      { "mask": "+961-##-###-###", "cc": "LB", "cd": "Lebanon ", "desc_en": "mobile", "name_ru": "Ливан ", "desc_ru": "мобильные" },
      { "mask": "+961-#-###-###", "cc": "LB", "cd": "Lebanon", "desc_en": "", "name_ru": "Ливан", "desc_ru": "" },
      { "mask": "+1(758)###-####", "cc": "LC", "cd": "Saint Lucia", "desc_en": "", "name_ru": "Сент-Люсия", "desc_ru": "" },
      { "mask": "+423(###)###-####", "cc": "LI", "cd": "Liechtenstein", "desc_en": "", "name_ru": "Лихтенштейн", "desc_ru": "" },
      { "mask": "+94-##-###-####", "cc": "LK", "cd": "Sri Lanka", "desc_en": "", "name_ru": "Шри-Ланка", "desc_ru": "" },
      { "mask": "+231-##-###-###", "cc": "LR", "cd": "Liberia", "desc_en": "", "name_ru": "Либерия", "desc_ru": "" },
      { "mask": "+266-#-###-####", "cc": "LS", "cd": "Lesotho", "desc_en": "", "name_ru": "Лесото", "desc_ru": "" },
      { "mask": "+370(###)##-###", "cc": "LT", "cd": "Lithuania", "desc_en": "", "name_ru": "Литва", "desc_ru": "" },
      { "mask": "+352(###)###-###", "cc": "LU", "cd": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
      { "mask": "+371-##-###-###", "cc": "LV", "cd": "Latvia", "desc_en": "", "name_ru": "Латвия", "desc_ru": "" },
      { "mask": "+218-##-###-###", "cc": "LY", "cd": "Libya", "desc_en": "", "name_ru": "Ливия", "desc_ru": "" },
      { "mask": "+218-21-###-####", "cc": "LY", "cd": "Libya", "desc_en": "Tripoli", "name_ru": "Ливия", "desc_ru": "Триполи" },
      { "mask": "+212-##-####-###", "cc": "MA", "cd": "Morocco", "desc_en": "", "name_ru": "Марокко", "desc_ru": "" },
      { "mask": "+377(###)###-###", "cc": "MC", "cd": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
      { "mask": "+377-##-###-###", "cc": "MC", "cd": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
      { "mask": "+373-####-####", "cc": "MD", "cd": "Moldova", "desc_en": "", "name_ru": "Молдова", "desc_ru": "" },
      { "mask": "+382-##-###-###", "cc": "ME", "cd": "Montenegro", "desc_en": "", "name_ru": "Черногория", "desc_ru": "" },
      { "mask": "+261-##-##-#####", "cc": "MG", "cd": "Madagascar", "desc_en": "", "name_ru": "Мадагаскар", "desc_ru": "" },
      { "mask": "+692-###-####", "cc": "MH", "cd": "Marshall Islands", "desc_en": "", "name_ru": "Маршалловы Острова", "desc_ru": "" },
      { "mask": "+389-##-###-###", "cc": "MK", "cd": "Republic of Macedonia", "desc_en": "", "name_ru": "Респ. Македония", "desc_ru": "" },
      { "mask": "+223-##-##-####", "cc": "ML", "cd": "Mali", "desc_en": "", "name_ru": "Мали", "desc_ru": "" },
      { "mask": "+95-##-###-###", "cc": "MM", "cd": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
      { "mask": "+95-#-###-###", "cc": "MM", "cd": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
      { "mask": "+95-###-###", "cc": "MM", "cd": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
      { "mask": "+976-##-##-####", "cc": "MN", "cd": "Mongolia", "desc_en": "", "name_ru": "Монголия", "desc_ru": "" },
      { "mask": "+853-####-####", "cc": "MO", "cd": "Macau", "desc_en": "", "name_ru": "Макао", "desc_ru": "" },
      { "mask": "+1(670)###-####", "cc": "MP", "cd": "Northern Mariana Islands", "desc_en": "", "name_ru": "Северные Марианские острова Сайпан", "desc_ru": "" },
      { "mask": "+596(###)##-##-##", "cc": "MQ", "cd": "Martinique", "desc_en": "", "name_ru": "Мартиника", "desc_ru": "" },
      { "mask": "+222-##-##-####", "cc": "MR", "cd": "Mauritania", "desc_en": "", "name_ru": "Мавритания", "desc_ru": "" },
      { "mask": "+1(664)###-####", "cc": "MS", "cd": "Montserrat", "desc_en": "", "name_ru": "Монтсеррат", "desc_ru": "" },
      { "mask": "+356-####-####", "cc": "MT", "cd": "Malta", "desc_en": "", "name_ru": "Мальта", "desc_ru": "" },
      { "mask": "+230-###-####", "cc": "MU", "cd": "Mauritius", "desc_en": "", "name_ru": "Маврикий", "desc_ru": "" },
      { "mask": "+960-###-####", "cc": "MV", "cd": "Maldives", "desc_en": "", "name_ru": "Мальдивские острова", "desc_ru": "" },
      { "mask": "+265-1-###-###", "cc": "MW", "cd": "Malawi", "desc_en": "Telecom Ltd", "name_ru": "Малави", "desc_ru": "Telecom Ltd" },
      { "mask": "+265-#-####-####", "cc": "MW", "cd": "Malawi", "desc_en": "", "name_ru": "Малави", "desc_ru": "" },
      { "mask": "+52(###)###-####", "cc": "MX", "cd": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
      { "mask": "+52-##-##-####", "cc": "MX", "cd": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
      { "mask": "+60-##-###-####", "cc": "MY", "cd": "Malaysia ", "desc_en": "mobile", "name_ru": "Малайзия ", "desc_ru": "мобильные" },
      { "mask": "+60(###)###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
      { "mask": "+60-##-###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
      { "mask": "+60-#-###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
      { "mask": "+258-##-###-###", "cc": "MZ", "cd": "Mozambique", "desc_en": "", "name_ru": "Мозамбик", "desc_ru": "" },
      { "mask": "+264-##-###-####", "cc": "NA", "cd": "Namibia", "desc_en": "", "name_ru": "Намибия", "desc_ru": "" },
      { "mask": "+687-##-####", "cc": "NC", "cd": "New Caledonia", "desc_en": "", "name_ru": "Новая Каледония", "desc_ru": "" },
      { "mask": "+227-##-##-####", "cc": "NE", "cd": "Niger", "desc_en": "", "name_ru": "Нигер", "desc_ru": "" },
      { "mask": "+672-3##-###", "cc": "NF", "cd": "Norfolk Island", "desc_en": "", "name_ru": "Норфолк (остров)", "desc_ru": "" },
      { "mask": "+234(###)###-####", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
      { "mask": "+234-##-###-###", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
      { "mask": "+234-##-###-##", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
      { "mask": "+234(###)###-####", "cc": "NG", "cd": "Nigeria ", "desc_en": "mobile", "name_ru": "Нигерия ", "desc_ru": "мобильные" },
      { "mask": "+505-####-####", "cc": "NI", "cd": "Nicaragua", "desc_en": "", "name_ru": "Никарагуа", "desc_ru": "" },
      { "mask": "+31-##-###-####", "cc": "NL", "cd": "Netherlands", "desc_en": "", "name_ru": "Нидерланды", "desc_ru": "" },
      { "mask": "+47(###)##-###", "cc": "NO", "cd": "Norway", "desc_en": "", "name_ru": "Норвегия", "desc_ru": "" },
      { "mask": "+977-##-###-###", "cc": "NP", "cd": "Nepal", "desc_en": "", "name_ru": "Непал", "desc_ru": "" },
      { "mask": "+674-###-####", "cc": "NR", "cd": "Nauru", "desc_en": "", "name_ru": "Науру", "desc_ru": "" },
      { "mask": "+683-####", "cc": "NU", "cd": "Niue", "desc_en": "", "name_ru": "Ниуэ", "desc_ru": "" },
      { "mask": "+64(###)###-###", "cc": "NZ", "cd": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
      { "mask": "+64-##-###-###", "cc": "NZ", "cd": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
      { "mask": "+64(###)###-####", "cc": "NZ", "cd": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
      { "mask": "+968-##-###-###", "cc": "OM", "cd": "Oman", "desc_en": "", "name_ru": "Оман", "desc_ru": "" },
      { "mask": "+507-###-####", "cc": "PA", "cd": "Panama", "desc_en": "", "name_ru": "Панама", "desc_ru": "" },
      { "mask": "+51(###)###-###", "cc": "PE", "cd": "Peru", "desc_en": "", "name_ru": "Перу", "desc_ru": "" },
      { "mask": "+689-##-##-##", "cc": "PF", "cd": "French Polynesia", "desc_en": "", "name_ru": "Французская Полинезия (Таити)", "desc_ru": "" },
      { "mask": "+675(###)##-###", "cc": "PG", "cd": "Papua New Guinea", "desc_en": "", "name_ru": "Папуа-Новая Гвинея", "desc_ru": "" },
      { "mask": "+63(###)###-####", "cc": "PH", "cd": "Philippines", "desc_en": "", "name_ru": "Филиппины", "desc_ru": "" },
      { "mask": "+92(###)###-####", "cc": "PK", "cd": "Pakistan", "desc_en": "", "name_ru": "Пакистан", "desc_ru": "" },
      { "mask": "+48(###)###-###", "cc": "PL", "cd": "Poland", "desc_en": "", "name_ru": "Польша", "desc_ru": "" },
      { "mask": "+970-##-###-####", "cc": "PS", "cd": "Palestine", "desc_en": "", "name_ru": "Палестина", "desc_ru": "" },
      { "mask": "+351-##-###-####", "cc": "PT", "cd": "Portugal", "desc_en": "", "name_ru": "Португалия", "desc_ru": "" },
      { "mask": "+680-###-####", "cc": "PW", "cd": "Palau", "desc_en": "", "name_ru": "Палау", "desc_ru": "" },
      { "mask": "+595(###)###-###", "cc": "PY", "cd": "Paraguay", "desc_en": "", "name_ru": "Парагвай", "desc_ru": "" },
      { "mask": "+974-####-####", "cc": "QA", "cd": "Qatar", "desc_en": "", "name_ru": "Катар", "desc_ru": "" },
      { "mask": "+262-#####-####", "cc": "RE", "cd": "Reunion", "desc_en": "", "name_ru": "Реюньон", "desc_ru": "" },
      { "mask": "+40-##-###-####", "cc": "RO", "cd": "Romania", "desc_en": "", "name_ru": "Румыния", "desc_ru": "" },
      { "mask": "+381-##-###-####", "cc": "RS", "cd": "Serbia", "desc_en": "", "name_ru": "Сербия", "desc_ru": "" },
      { "mask": "+7(###)###-##-##", "cc": "RU", "cd": "Russia", "desc_en": "", "name_ru": "Россия", "desc_ru": "" },
      { "mask": "+250(###)###-###", "cc": "RW", "cd": "Rwanda", "desc_en": "", "name_ru": "Руанда", "desc_ru": "" },
      { "mask": "+966-5-####-####", "cc": "SA", "cd": "Saudi Arabia ", "desc_en": "mobile", "name_ru": "Саудовская Аравия ", "desc_ru": "мобильные" },
      { "mask": "+966-#-###-####", "cc": "SA", "cd": "Saudi Arabia", "desc_en": "", "name_ru": "Саудовская Аравия", "desc_ru": "" },
      { "mask": "+677-###-####", "cc": "SB", "cd": "Solomon Islands ", "desc_en": "mobile", "name_ru": "Соломоновы Острова ", "desc_ru": "мобильные" },
      { "mask": "+677-#####", "cc": "SB", "cd": "Solomon Islands", "desc_en": "", "name_ru": "Соломоновы Острова", "desc_ru": "" },
      { "mask": "+248-#-###-###", "cc": "SC", "cd": "Seychelles", "desc_en": "", "name_ru": "Сейшелы", "desc_ru": "" },
      { "mask": "+249-##-###-####", "cc": "SD", "cd": "Sudan", "desc_en": "", "name_ru": "Судан", "desc_ru": "" },
      { "mask": "+46-##-###-####", "cc": "SE", "cd": "Sweden", "desc_en": "", "name_ru": "Швеция", "desc_ru": "" },
      { "mask": "+65-####-####", "cc": "SG", "cd": "Singapore", "desc_en": "", "name_ru": "Сингапур", "desc_ru": "" },
      { "mask": "+290-####", "cc": "SH", "cd": "Saint Helena", "desc_en": "", "name_ru": "Остров Святой Елены", "desc_ru": "" },
      { "mask": "+290-####", "cc": "SH", "cd": "Tristan da Cunha", "desc_en": "", "name_ru": "Тристан-да-Кунья", "desc_ru": "" },
      { "mask": "+386-##-###-###", "cc": "SI", "cd": "Slovenia", "desc_en": "", "name_ru": "Словения", "desc_ru": "" },
      { "mask": "+421(###)###-###", "cc": "SK", "cd": "Slovakia", "desc_en": "", "name_ru": "Словакия", "desc_ru": "" },
      { "mask": "+232-##-######", "cc": "SL", "cd": "Sierra Leone", "desc_en": "", "name_ru": "Сьерра-Леоне", "desc_ru": "" },
      { "mask": "+378-####-######", "cc": "SM", "cd": "San Marino", "desc_en": "", "name_ru": "Сан-Марино", "desc_ru": "" },
      { "mask": "+221-##-###-####", "cc": "SN", "cd": "Senegal", "desc_en": "", "name_ru": "Сенегал", "desc_ru": "" },
      { "mask": "+252-##-###-###", "cc": "SO", "cd": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
      { "mask": "+252-#-###-###", "cc": "SO", "cd": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
      { "mask": "+252-#-###-###", "cc": "SO", "cd": "Somalia ", "desc_en": "mobile", "name_ru": "Сомали ", "desc_ru": "мобильные" },
      { "mask": "+597-###-####", "cc": "SR", "cd": "Suriname ", "desc_en": "mobile", "name_ru": "Суринам ", "desc_ru": "мобильные" },
      { "mask": "+597-###-###", "cc": "SR", "cd": "Suriname", "desc_en": "", "name_ru": "Суринам", "desc_ru": "" },
      { "mask": "+211-##-###-####", "cc": "SS", "cd": "South Sudan", "desc_en": "", "name_ru": "Южный Судан", "desc_ru": "" },
      { "mask": "+239-##-#####", "cc": "ST", "cd": "Sao Tome and Principe", "desc_en": "", "name_ru": "Сан-Томе и Принсипи", "desc_ru": "" },
      { "mask": "+503-##-##-####", "cc": "SV", "cd": "El Salvador", "desc_en": "", "name_ru": "Сальвадор", "desc_ru": "" },
      { "mask": "+1(721)###-####", "cc": "SX", "cd": "Sint Maarten", "desc_en": "", "name_ru": "Синт-Маартен", "desc_ru": "" },
      { "mask": "+963-##-####-###", "cc": "SY", "cd": "Syrian Arab Republic", "desc_en": "", "name_ru": "Сирийская арабская республика", "desc_ru": "" },
      { "mask": "+268-##-##-####", "cc": "SZ", "cd": "Swaziland", "desc_en": "", "name_ru": "Свазиленд", "desc_ru": "" },
      { "mask": "+1(649)###-####", "cc": "TC", "cd": "Turks & Caicos", "desc_en": "", "name_ru": "Тёркс и Кайкос", "desc_ru": "" },
      { "mask": "+235-##-##-##-##", "cc": "TD", "cd": "Chad", "desc_en": "", "name_ru": "Чад", "desc_ru": "" },
      { "mask": "+228-##-###-###", "cc": "TG", "cd": "Togo", "desc_en": "", "name_ru": "Того", "desc_ru": "" },
      { "mask": "+66-##-###-####", "cc": "TH", "cd": "Thailand ", "desc_en": "mobile", "name_ru": "Таиланд ", "desc_ru": "мобильные" },
      { "mask": "+66-##-###-###", "cc": "TH", "cd": "Thailand", "desc_en": "", "name_ru": "Таиланд", "desc_ru": "" },
      { "mask": "+992-##-###-####", "cc": "TJ", "cd": "Tajikistan", "desc_en": "", "name_ru": "Таджикистан", "desc_ru": "" },
      { "mask": "+690-####", "cc": "TK", "cd": "Tokelau", "desc_en": "", "name_ru": "Токелау", "desc_ru": "" },
      { "mask": "+670-###-####", "cc": "TL", "cd": "East Timor", "desc_en": "", "name_ru": "Восточный Тимор", "desc_ru": "" },
      { "mask": "+670-77#-#####", "cc": "TL", "cd": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
      { "mask": "+670-78#-#####", "cc": "TL", "cd": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
      { "mask": "+993-#-###-####", "cc": "TM", "cd": "Turkmenistan", "desc_en": "", "name_ru": "Туркменистан", "desc_ru": "" },
      { "mask": "+216-##-###-###", "cc": "TN", "cd": "Tunisia", "desc_en": "", "name_ru": "Тунис", "desc_ru": "" },
      { "mask": "+676-#####", "cc": "TO", "cd": "Tonga", "desc_en": "", "name_ru": "Тонга", "desc_ru": "" },
      { "mask": "+90(###)###-####", "cc": "TR", "cd": "Turkey", "desc_en": "", "name_ru": "Турция", "desc_ru": "" },
      { "mask": "+1(868)###-####", "cc": "TT", "cd": "Trinidad & Tobago", "desc_en": "", "name_ru": "Тринидад и Тобаго", "desc_ru": "" },
      { "mask": "+688-90####", "cc": "TV", "cd": "Tuvalu ", "desc_en": "mobile", "name_ru": "Тувалу ", "desc_ru": "мобильные" },
      { "mask": "+688-2####", "cc": "TV", "cd": "Tuvalu", "desc_en": "", "name_ru": "Тувалу", "desc_ru": "" },
      { "mask": "+886-#-####-####", "cc": "TW", "cd": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
      { "mask": "+886-####-####", "cc": "TW", "cd": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
      { "mask": "+255-##-###-####", "cc": "TZ", "cd": "Tanzania", "desc_en": "", "name_ru": "Танзания", "desc_ru": "" },
      { "mask": "+380(##)###-##-##", "cc": "UA", "cd": "Ukraine", "desc_en": "", "name_ru": "Украина", "desc_ru": "" },
      { "mask": "+256(###)###-###", "cc": "UG", "cd": "Uganda", "desc_en": "", "name_ru": "Уганда", "desc_ru": "" },
      { "mask": "+44-##-####-####", "cc": "UK", "cd": "United Kingdom", "desc_en": "", "name_ru": "Великобритания", "desc_ru": "" },
      { "mask": "+598-#-###-##-##", "cc": "UY", "cd": "Uruguay", "desc_en": "", "name_ru": "Уругвай", "desc_ru": "" },
      { "mask": "+998-##-###-####", "cc": "UZ", "cd": "Uzbekistan", "desc_en": "", "name_ru": "Узбекистан", "desc_ru": "" },
      { "mask": "+39-6-698-#####", "cc": "VA", "cd": "Vatican City", "desc_en": "", "name_ru": "Ватикан", "desc_ru": "" },
      { "mask": "+1(784)###-####", "cc": "VC", "cd": "Saint Vincent & the Grenadines", "desc_en": "", "name_ru": "Сент-Винсент и Гренадины", "desc_ru": "" },
      { "mask": "+58(###)###-####", "cc": "VE", "cd": "Venezuela", "desc_en": "", "name_ru": "Венесуэла", "desc_ru": "" },
      { "mask": "+1(284)###-####", "cc": "VG", "cd": "British Virgin Islands", "desc_en": "", "name_ru": "Британские Виргинские острова", "desc_ru": "" },
      { "mask": "+1(340)###-####", "cc": "VI", "cd": "US Virgin Islands", "desc_en": "", "name_ru": "Американские Виргинские острова", "desc_ru": "" },
      { "mask": "+84-##-####-###", "cc": "VN", "cd": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
      { "mask": "+84(###)####-###", "cc": "VN", "cd": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
      { "mask": "+678-##-#####", "cc": "VU", "cd": "Vanuatu ", "desc_en": "mobile", "name_ru": "Вануату ", "desc_ru": "мобильные" },
      { "mask": "+678-#####", "cc": "VU", "cd": "Vanuatu", "desc_en": "", "name_ru": "Вануату", "desc_ru": "" },
      { "mask": "+681-##-####", "cc": "WF", "cd": "Wallis and Futuna", "desc_en": "", "name_ru": "Уоллис и Футуна", "desc_ru": "" },
      { "mask": "+685-##-####", "cc": "WS", "cd": "Samoa", "desc_en": "", "name_ru": "Самоа", "desc_ru": "" },
      { "mask": "+967-###-###-###", "cc": "YE", "cd": "Yemen ", "desc_en": "mobile", "name_ru": "Йемен ", "desc_ru": "мобильные" },
      { "mask": "+967-#-###-###", "cc": "YE", "cd": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
      { "mask": "+967-##-###-###", "cc": "YE", "cd": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
      { "mask": "+27-##-###-####", "cc": "ZA", "cd": "South Africa", "desc_en": "", "name_ru": "Южно-Африканская Респ.", "desc_ru": "" },
      { "mask": "+260-##-###-####", "cc": "ZM", "cd": "Zambia", "desc_en": "", "name_ru": "Замбия", "desc_ru": "" },
      { "mask": "+263-#-######", "cc": "ZW", "cd": "Zimbabwe", "desc_en": "", "name_ru": "Зимбабве", "desc_ru": "" },
      { "mask": "+1(###)###-####", "cc": ["US", "CA"], "cd": "USA and Canada", "desc_en": "", "name_ru": "США и Канада", "desc_ru": "" }
    ]
  }
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
/**
* Object-fit hack
*/

(function () {
  var isSupports = ('object-fit' in document.body.style);

  if (isSupports) {
    return;
  }

  $('.image-container.is-cover').each(function () {
    var $container = $(this),
    imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container.css('backgroundImage', 'url(' + imgUrl + ')').addClass('with-trick');
    }
  });
})();
/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.0.2 | https://github.com/wilddeer/stickyfill
  * MIT License
  */

!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=k.left?(k.top=a.pageYOffset,k.left=a.pageXOffset,n.refreshAll()):a.pageYOffset!=k.top&&(k.top=a.pageYOffset,k.left=a.pageXOffset,l.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){l.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}c(),a.addEventListener("scroll",c),a.addEventListener("resize",n.refreshAll),a.addEventListener("orientationchange",n.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1;a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var j="undefined"!=typeof ShadowRoot,k={top:null,left:null},l=[],m=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(l.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,l.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c);if(!isNaN(parseFloat(g.top))&&"table-cell"!=g.display&&"none"!=g.display){this._active=!0;var h=c.parentNode,k=j&&h instanceof ShadowRoot?h.host:h,l=c.getBoundingClientRect(),m=k.getBoundingClientRect(),n=getComputedStyle(k);this._parent={node:k,styles:{position:k.style.position},offsetHeight:k.offsetHeight},this._offsetToWindow={left:l.left,right:b.documentElement.clientWidth-l.right},this._offsetToParent={top:l.top-m.top-e(n.borderTopWidth),left:l.left-m.left-e(n.borderLeftWidth),right:-l.right+m.right-e(n.borderRightWidth)},this._styles={position:c.style.position,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var o=e(g.top);this._limits={start:l.top+a.pageYOffset-o,end:m.top+a.pageYOffset+k.offsetHeight-e(n.borderBottomWidth)-c.offsetHeight-o-e(g.marginBottom)};var p=n.position;"absolute"!=p&&"relative"!=p&&(k.style.position="relative");var q=this._clone={};q.node=b.createElement("div"),d(q.node.style,{width:l.right-l.left+"px",height:l.bottom-l.top+"px",marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),h.insertBefore(q.node,c),q.docOffsetTop=f(q.node),this._recalcPosition()}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=k.top<=this._limits.start?"start":k.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,l.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),l.some(function(b,c){if(b._node===a._node)return l.splice(c,1),!0}),this._removed=!0}}]),g}(),n={stickies:l,Sticky:m,addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<l.length;b++)if(l[b]._node===a)return l[b];return new m(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?l.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new m(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){l.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}l.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];l.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;l.length;)l[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=n:a.Stickyfill=n}(window,document);
/**
 * DetectiveScroll
 * Плагин остлеживает скролл и может переключать классы в зависимости от высоты скролла
 *
 * new DetectiveScroll({
     trigger: {
       el: $('.js-scroll_top'),
       scroll: $(window).height() / 3
     }
   })

   // если нужна задержка или вызов своих коллбеков
   new DetectiveScroll({
     wait: 300,
     onUpdate: function(scrollTop){
       console.log(scrollTop);
     },
     trigger: {
       el: $('.js-scroll_top'),
       scroll: $(window).height() / 3
     }
   })
*/


function DetectiveScroll(options) {
  var MiniEventBus = function () {
    var $bus = $({});
    this.subscribe = function (eventHandler_name, eventHandler_handler) {
      $bus.bind(eventHandler_name, eventHandler_handler);
    };

    this.unsubscribe = function (eventHandler) {
      $bus.unbind(eventHandler.name);
    };

    this.throwEvent = function (event_name, event_args) {
      setTimeout(function () {
        $bus.trigger(event_name, [event_args]);
      }, 0);
    };
  };

  var self = this;
  var html = document.documentElement;
  var body = document.body;
  self.eventBus = new MiniEventBus;

  /**
   * trigger
   * {
   *  el: $('.my-element'),
   *  enabled: 'is-enabled',
   *  disabled: 'is-disabled',
   *  scroll: 300
   * }
   *
   * scroll - после какой высоты скролла добавить enabled
   */

  var DEFAULT_OPTIONS = {
    wait: null,
    onUpdate: function(){},
    trigger: {}
  }

  var defaultTrigger = {
    enabled: 'is-enabled',
    disabled: 'is-disabled',
    scroll: 300
  }

  self.options = extendObject(DEFAULT_OPTIONS, options);

  self.init = function () {
    var wait = self.options.wait;

    if (wait) {
      window.addEventListener('scroll', throttle(_handler, wait));
      window.addEventListener('resize', throttle(_handler, wait));
    }else{
      window.addEventListener('scroll', _handler);
      window.addEventListener('resize', _handler);
    }

    _handler()
  }

  self.initTrigger = function () {
    var $trigger = self.options.trigger.el;
    var triggerOptions = extendObject(defaultTrigger, self.options.trigger);

    if ($trigger) {
      self.eventBus.subscribe('onUpdateSystem', function (event, scroll) {
        if (triggerOptions.scroll >= scroll) {
          $trigger.addClass(triggerOptions.disabled).removeClass(triggerOptions.enabled);
        }else{
          $trigger.addClass(triggerOptions.enabled).removeClass(triggerOptions.disabled);
        }
      })
    }
  }

  function _handler() {
    _requestAnimationFrame(function () {
      var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
      scrollTop -= document.documentElement.clientTop;
      self.options.onUpdate(scrollTop);
      self.eventBus.throwEvent('onUpdateSystem', scrollTop);
    })
  }

  // UTIL
  function extendObject (defaults, options) {
    var extended = {};
    var prop;
    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop] || defaults[prop];
      }
    }
    return extended;
  };

  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  _requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  self.init();
  self.initTrigger();
}
;
/* smoothscroll v0.4.2 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */

!function(){"use strict";function o(){var n=window,f=document;if(!("scrollBehavior"in f.documentElement.style&&!0!==n.__forceSmoothScrollPolyfill__)){var o,t=n.HTMLElement||n.Element,s=468,p={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:t.prototype.scroll||d,scrollIntoView:t.prototype.scrollIntoView},a=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now,l=(o=n.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);n.scroll=n.scrollTo=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?c.call(n,f.body,void 0!==arguments[0].left?~~arguments[0].left:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:n.scrollY||n.pageYOffset):p.scroll.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:n.scrollY||n.pageYOffset))},n.scrollBy=function(){void 0!==arguments[0]&&(e(arguments[0])?p.scrollBy.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):c.call(n,f.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==e(arguments[0])){var o=arguments[0].left,t=arguments[0].top;c.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==e(arguments[0])){var o=function(o){for(var t,l,e;!1==((o=o.parentNode)===f.body)&&!1===(l=r(t=o,"Y")&&i(t,"Y"),e=r(t,"X")&&i(t,"X"),l||e););return o}(this),t=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==f.body?(c.call(this,o,o.scrollLeft+l.left-t.left,o.scrollTop+l.top-t.top),"fixed"!==n.getComputedStyle(o).position&&n.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):n.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else p.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function d(o,t){this.scrollLeft=o,this.scrollTop=t}function e(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function r(o,t){return"Y"===t?o.clientHeight+l<o.scrollHeight:"X"===t?o.clientWidth+l<o.scrollWidth:void 0}function i(o,t){var l=n.getComputedStyle(o,null)["overflow"+t];return"auto"===l||"scroll"===l}function v(o){var t,l,e,r,i=(a()-o.startTime)/s;r=i=1<i?1:i,t=.5*(1-Math.cos(Math.PI*r)),l=o.startX+(o.x-o.startX)*t,e=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,l,e),l===o.x&&e===o.y||n.requestAnimationFrame(v.bind(n,o))}function c(o,t,l){var e,r,i,s,c=a();s=o===f.body?(r=(e=n).scrollX||n.pageXOffset,i=n.scrollY||n.pageYOffset,p.scroll):(r=(e=o).scrollLeft,i=o.scrollTop,d),v({scrollable:e,method:s,startTime:c,startX:r,startY:i,x:t,y:l})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();
/*!
 * InitSwiper v0.2.9
 * Vladimir Ivanin
 * 2018
 */

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function generateUUID(){var e=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}function patchNumber(e){var t,n="string"==typeof e;if(!("number"==typeof e)&&!n)return 0;return n&&(e=(e=(e=e.replace(/,/g,".")).replace(/px/g,"")).replace(/\%/g,""),e=isNaN(+e)?1:+e),Number((t=e,Number(t)===t&&t%1!=0?e.toFixed(2):e))}function debounce(e,t,n){var r;return function(){var x=this,a=arguments,i=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(x,a)},t),i&&e.apply(x,a)}}function slideLength(e,t){var n=Math.floor(e/t);return(!n||n<1)&&(n=1),n}function getContainerWidth(e){var t=e.parents(":visible").width(),n=e.width();return 0==n&&(n=t>0?t:e.parent().parent().width()),n}module.exports={slideLength:slideLength,debounce:debounce,generateUUID:generateUUID,getContainerWidth:getContainerWidth,patchNumber:patchNumber};
},{}],2:[function(require,module,exports){
var defaults=require("../variables").defaults,init=require("./init"),InitSwiper=function(i,e){var t=this,n=[];return t.options=$.extend(!0,{},defaults,e),t.init=init,"undefined"==typeof Swiper&&console.warn("Отсутствует плагин Swiper"),("string"==typeof i?$(i):i).each(function(i,e){var r=t.init($(e));_.isArray(r)?n=n.concat(r):n.push(r)}),n};module.exports=InitSwiper;
},{"../variables":5,"./init":3}],3:[function(require,module,exports){
var debounce=require("./help").debounce,slideLength=require("./help").slideLength,generateUUID=require("./help").generateUUID,getContainerWidth=require("./help").getContainerWidth;function init(e){var i=e.hasClass("swiper-container")?e.parent():e,n=generateUUID(),r=this.options,t=i[0]&&i[0].swiper?i[0].swiper:null,a=".slider-"+n,s=".container-"+n,p=a+" .swiper-container"+s,d=a+" .swiper-button-next",o=a+" .swiper-button-prev",l=i.find(".swiper-slide").length,w=r._parents,u=null;w&&(u=i.parents(w+":first")),i.addClass(a.replace(".","")),i.find(".swiper-container").eq(0).addClass(s.replace(".",""));var g=1,h=$(p).eq(0),f=getContainerWidth(h);r.$swiperContainer=h,r.autoLength&&(g=slideLength(f,r.minCartWidth));var v={slidesPerView:g,loop:g<l,loopAdditionalSlides:l,navigation:{nextEl:d,prevEl:o},pagination:{el:a+" .swiper-pagination",type:"bullets",clickable:!0}};Swiper.options||(v.nextButton=d,v.prevButton=o,v.pagination=a+" .swiper-pagination");var c="undefined"!=typeof Site&&void 0!==Site.menuConfig&&void 0!==Site.alertifyConfig;void 0!==Swiper.name&&"Factory"==Swiper.name&&c&&(i.find(".swiper-slide").attr("data-slider-slide",""),i.find(".swiper-slide").parent(".swiper-wrapper").length&&i.find(".swiper-slide").unwrap(".swiper-wrapper"));var C=$.extend(!0,v,r),m=l>0;if(l<C.slidesPerView&&i.addClass("arrow-hide"),m){if(t)return t.params=C,t.update(!0),t;var S=new Swiper(p,C);return u&&u.on("mouseenter",function(e){S.update(!0)}),r.autoResponsive&&$(window).on("resize",debounce(function(e){void 0!==S.params&&(f=getContainerWidth(h),S.params.slidesPerView=slideLength(f,r.minCartWidth),S.update(!0))},150)),S}i.addClass("is-empty")}module.exports=init;
},{"./help":1}],4:[function(require,module,exports){
window.InitSwiper=require("InitSwiper");
},{"InitSwiper":2}],5:[function(require,module,exports){
var defaults={setWrapperSize:!0,controlBy:"container",spaceBetween:20,autoLength:!1,autoResponsive:!1,maxBreakpoint:4200,minBreakpoint:300,minCartWidth:300,gutterCart:10,pagination:{type:"bullets",clickable:!0}};module.exports={defaults:defaults};
},{}]},{},[4]);
/**
 * Swiper 4.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 14, 2018
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,Y="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===Y||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new Y.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===Y?Y.scrollY:e.scrollTop,n=e===Y?Y.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return Y.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===Y)return i===Y;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?Y.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,V={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=Y.getComputedStyle(e,null);return Y.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new Y.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=Y.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=Y.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||Y.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(V.isObject(a[l])&&V.isObject(s[l])?V.extend(a[l],s[l]):!V.isObject(a[l])&&V.isObject(s[l])?(a[l]={},V.extend(a[l],s[l])):a[l]=s[l])}}return a}},F=(i=f.createElement("div"),{touch:Y.Modernizr&&!0===Y.Modernizr.touch||!!(0<Y.navigator.maxTouchPoints||"ontouchstart"in Y||Y.DocumentTouch&&f instanceof Y.DocumentTouch),pointerEvents:!!(Y.navigator.pointerEnabled||Y.PointerEvent||"maxTouchPoints"in Y.navigator),prefixedPointerEvents:!!Y.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:Y.Modernizr&&!0===Y.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in Y||"WebkitMutationObserver"in Y,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});Y.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in Y}),s=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},n={components:{configurable:!0}};s.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},s.prototype.once=function(i,s,e){var r=this;if("function"!=typeof s)return r;return r.on(i,function e(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];s.apply(r,t),r.off(i,e)},e)},s.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){e===i&&s.eventsListeners[a].splice(t,1)})}),s},s.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},s.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&V.extend(a,t.params)})},s.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},n.components.set=function(e){this.use&&this.use(e)},s.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+V.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},s.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(s,n);var o={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),V.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),k=0;k<d;k+=1){T=0;var P=l.eq(k);if(1<t.slidesPerColumn){var z=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=k-($=Math.floor(k/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),z=$+L*x/S,P.css({"-webkit-box-ordinal-group":z,"-moz-box-ordinal-group":z,"-ms-flex-order":z,"-webkit-order":z,order:z})):$=k-(L=Math.floor(k/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==P.css("display")){if("auto"===t.slidesPerView){var I=Y.getComputedStyle(P[0],null),D=P[0].style.transform,O=P[0].style.webkitTransform;D&&(P[0].style.transform="none"),O&&(P[0].style.webkitTransform="none"),T=t.roundLengths?e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0):e.isHorizontal()?parseFloat(I.getPropertyValue("width"))+parseFloat(I.getPropertyValue("padding-left"))+parseFloat(I.getPropertyValue("padding-right"))+parseFloat(I.getPropertyValue("margin-left"))+parseFloat(I.getPropertyValue("margin-right")):parseFloat(I.getPropertyValue("height"))+parseFloat(I.getPropertyValue("padding-top"))+parseFloat(I.getPropertyValue("padding-bottom"))+parseFloat(I.getPropertyValue("margin-top"))+parseFloat(I.getPropertyValue("margin-bottom")),D&&(P[0].style.transform=D),O&&(P[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[k]&&(e.isHorizontal()?l[k].style.width=T+"px":l[k].style.height=T+"px");l[k]&&(l[k].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==k&&(b=b-i/2-g),0===k&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),F.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var A=0;A<p.length;A+=1){var N=p[A];t.roundLengths&&(N=Math.floor(N)),p[A]<e.virtualSize+p[0]&&E.push(N)}p=E}if(!t.centeredSlides){E=[];for(var H=0;H<p.length;H+=1){var G=p[H];t.roundLengths&&(G=Math.floor(G)),p[H]<=e.virtualSize-i&&E.push(G)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var B=0;if(u.forEach(function(e){B+=e+(t.spaceBetween?t.spaceBetween:0)}),(B-=t.spaceBetween)<i){var X=(i-B)/2;p.forEach(function(e,t){p[t]=e-X}),c.forEach(function(e,t){c[t]=e+X})}}V.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),V.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);V.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var d={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=V.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(F.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var p={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var c={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&F.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),V.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),V.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var u={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var h={setGrabCursor:function(e){if(!(F.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){F.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var v={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&F.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&F.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&F.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&F.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},m=function(){var e=Y.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:Y.cordova||Y.phonegap,phonegap:Y.cordova||Y.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=Y.devicePixelRatio||1,t}();function g(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var b={attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=Y.screen.width-d)){if(V.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=V.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(V.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=V.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:V.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=V.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=V.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=V.now(),V.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<V.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,k=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?p>=o[P]&&p<o[P+i.slidesPerGroup]&&(k=o[(M=P)+i.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,k=o[o.length-1]-o[o.length-2]);var z=(p-o[M])/k;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(z>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(z>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(F.touch||!F.pointerEvents&&!F.prefixedPointerEvents){if(F.touch){var o=!("touchstart"!==a.start||!F.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,F.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!F.touch&&m.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(F.touch||!F.pointerEvents&&!F.prefixedPointerEvents){if(F.touch){var o=!("onTouchStart"!==a.start||!F.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!F.touch&&m.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g)}};var w,y={setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=s.loop&&l.slidesPerView!==s.slidesPerView;V.extend(e.params,l),V.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,d&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=Y.innerWidth&&(t=s):s>=Y.innerWidth&&!t&&(t=s)}return t||"max"}}},I={isIE:!!Y.navigator.userAgent.match(/Trident/g)||!!Y.navigator.userAgent.match(/MSIE/g),isEdge:!!Y.navigator.userAgent.match(/Edge/g),isSafari:(w=Y.navigator.userAgent.toLowerCase(),0<=w.indexOf("safari")&&w.indexOf("chrome")<0&&w.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)};var x={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},T={update:o,translate:d,transition:p,slide:c,loop:u,grabCursor:h,manipulation:v,events:b,breakpoints:y,checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push(a.direction),a.freeMode&&s.push("free-mode"),F.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),m.android&&s.push("android"),m.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(F.pointerEvents||F.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new Y.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},E={},S=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=V.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(T).forEach(function(t){Object.keys(T[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=T[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=V.extend({},x);r.useModulesParams(n),r.params=V.extend({},n,E,s),r.originalParams=V.extend({},r.params),r.passedParams=V.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=V.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return V.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],F.pointerEvents?p=["pointerdown","pointermove","pointerup"]:F.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},F.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:V.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),V.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){V.extend(E,e)},e.extendedDefaults.get=function(){return E},e.defaults.get=function(){return x},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(s),C={name:"device",proto:{device:m},static:{device:m}},M={name:"support",proto:{support:F},static:{support:F}},k={name:"browser",proto:{browser:I},static:{browser:I}},P={name:"resize",create:function(){var e=this;V.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){Y.addEventListener("resize",this.resize.resizeHandler),Y.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){Y.removeEventListener("resize",this.resize.resizeHandler),Y.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:Y.MutationObserver||Y.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};Y.requestAnimationFrame?Y.requestAnimationFrame(t):Y.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(F.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},$={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){V.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},D={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(V.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var k=0;k<u.length;k+=1)y<=k&&k<=x&&(void 0===c||e?C.push(k):(c<k&&C.push(k),k<p&&S.push(k)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},O={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;V.extend(e,{virtual:{update:D.update.bind(e),appendSlide:D.appendSlide.bind(e),prependSlide:D.prependSlide.bind(e),renderSlide:D.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};V.extend(e.params,t),V.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},A={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=Y.innerWidth,o=Y.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},N={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){V.extend(this,{keyboard:{enabled:!1,enable:A.enable.bind(this),disable:A.disable.bind(this),handle:A.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var H={lastScrollTime:V.now(),event:-1<Y.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=H.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=V.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<V.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new Y.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!H.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(H.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!H.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(H.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},G={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),V.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},B={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),V.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},X={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(F.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(F.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),V.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=V.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!F.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!F.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};F.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!F.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!F.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};F.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),V.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},R={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},q={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!F.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=q.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!F.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=q.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=F.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!F.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!m.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(m.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=V.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=V.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!F.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};F.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!F.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};F.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},W={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},j={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new j.LinearSpline(t.slidesGrid,e.slidesGrid):new j.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof S&&n(r[o]);else r instanceof S&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&V.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof S&&r(s[a]);else s instanceof S&&e!==s&&r(s)}},U={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},K={init:function(){var e=this;if(e.params.history){if(!Y.history||!Y.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=K.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||Y.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||Y.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=K.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=Y.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=K.slugify(a.attr("data-history"));Y.location.pathname.includes(e)||(i=e+"/"+i);var s=Y.history.state;s&&s.value===i||(this.params.history.replaceState?Y.history.replaceState({value:i},null,i):Y.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(K.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},_={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&Y.history&&Y.history.replaceState)Y.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(Y).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(Y).off("hashchange",this.hashNavigation.onHashCange)}},Z={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=V.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},Q={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},J={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),k=d.shadowScale,P=d.shadowScale/M,z=d.shadowOffset;e.transform("scale3d("+k+", 1, "+P+") translate3d(0px, "+(n/2+z)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},ee={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},te={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(F.pointerEvents||F.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ae={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,V.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),V.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):V.isObject(t.swiper)&&(e.thumbs.swiper=new a(V.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&L(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},ie=[C,M,k,P,$,O,N,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;V.extend(e,{mousewheel:{enabled:!1,enable:H.enable.bind(e),disable:H.disable.bind(e),handle:H.handle.bind(e),handleMouseEnter:H.handleMouseEnter.bind(e),handleMouseLeave:H.handleMouseLeave.bind(e),lastScrollTime:V.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;V.extend(e,{navigation:{init:G.init.bind(e),update:G.update.bind(e),destroy:G.destroy.bind(e),onNextClick:G.onNextClick.bind(e),onPrevClick:G.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,a=t.$nextEl,i=t.$prevEl;!this.params.navigation.hideOnClick||L(e.target).is(i)||L(e.target).is(a)||(a&&a.toggleClass(this.params.navigation.hiddenClass),i&&i.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;V.extend(e,{pagination:{init:B.init.bind(e),render:B.render.bind(e),update:B.update.bind(e),destroy:B.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;V.extend(e,{scrollbar:{init:X.init.bind(e),destroy:X.destroy.bind(e),updateSize:X.updateSize.bind(e),setTranslate:X.setTranslate.bind(e),setTransition:X.setTransition.bind(e),enableDraggable:X.enableDraggable.bind(e),disableDraggable:X.disableDraggable.bind(e),setDragPosition:X.setDragPosition.bind(e),onDragStart:X.onDragStart.bind(e),onDragMove:X.onDragMove.bind(e),onDragEnd:X.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){V.extend(this,{parallax:{setTransform:R.setTransform.bind(this),setTranslate:R.setTranslate.bind(this),setTransition:R.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=q[e].bind(i)}),V.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){V.extend(this,{lazy:{initialImageLoaded:!1,load:W.load.bind(this),loadInSlide:W.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;V.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:j.getInterpolateFunction.bind(e),setTranslate:j.setTranslate.bind(e),setTransition:j.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;V.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(U).forEach(function(e){t.a11y[e]=U[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;V.extend(e,{history:{init:K.init.bind(e),setHistory:K.setHistory.bind(e),setHistoryPopState:K.setHistoryPopState.bind(e),scrollToSlide:K.scrollToSlide.bind(e),destroy:K.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;V.extend(e,{hashNavigation:{initialized:!1,init:_.init.bind(e),destroy:_.destroy.bind(e),setHash:_.setHash.bind(e),onHashCange:_.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;V.extend(t,{autoplay:{running:!1,paused:!1,run:Z.run.bind(t),start:Z.start.bind(t),stop:Z.stop.bind(t),pause:Z.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){V.extend(this,{fadeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){V.extend(this,{cubeEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){V.extend(this,{flipEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){V.extend(this,{coverflowEffect:{setTranslate:te.setTranslate.bind(this),setTransition:te.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){V.extend(this,{thumbs:{swiper:null,init:ae.init.bind(this),update:ae.update.bind(this),onThumbClick:ae.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===S.use&&(S.use=S.Class.use,S.installModule=S.Class.installModule),S.use(ie),S});
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";n(1);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,o=function(e){var t=n(e);return Math.min(Math.max(t,0),r)};return function(e){var n=this,r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,i=arguments.length>1?arguments[1]:void 0;if(void 0!==i){if(!t(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var c,u=o(r.length),l=t(n)?Object(new n(u)):new Array(u),d=0;d<u;)c=r[d],l[d]=i?void 0===a?i(c,d):i.call(a,c,d):c,d+=1;return l.length=u,l}}())}()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('link[rel="apple-touch-icon"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.image=r?encodeURIComponent(r.href):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="vkontakte"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.image?encodeURIComponent(t.dataset.image):e.image,a="https://vk.com/share.php?url="+n+"&title="+r+"&image="+o;t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=document.querySelectorAll('[data-counter="vkontakte"]'),n="https://vk.com/share.php?act=count&index=1&url="+this.url;window.VK=Object.assign({},{Share:{}},window.VK),t.length>0&&(window.VK.Share.count=function(n){[].concat(r(t)).forEach(function(e){e.innerHTML=n}),e.parentNode.removeChild(e)},e.src=n,document.body.appendChild(e))}}]),e}();t.vkontakte_share=(new i).shareWindow(),t.vkontakte_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="facebook"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://facebook.com/sharer/sharer.php?u="+n+"&t="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="facebook"]'),o="https://graph.facebook.com/?id="+this.url+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.share?t.share.share_count:0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.facebook_share=(new i).shareWindow(),t.facebook_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="odnoklassniki"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl="+n+"&st.comments="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=document.querySelectorAll('[data-counter="odnoklassniki"]'),n="https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref="+this.url;window.ODKL={},t.length>0&&(window.ODKL.updateCount=function(n){[].concat(r(t)).forEach(function(e){e.innerHTML=n}),e.parentNode.removeChild(e)},e.src=n,document.body.appendChild(e))}}]),e}();t.odnoklassniki_share=(new i).shareWindow(),t.odnoklassniki_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]'),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document.querySelector('link[rel="apple-touch-icon"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):"",this.image=a?encodeURIComponent(a.href):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="moimir"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a=t.dataset.image?encodeURIComponent(t.dataset.image):e.image,i="https://connect.mail.ru/share?url="+n+"&title="+r+"&description="+o+"&imageurl="+a;t.addEventListener("click",function(e){return e.preventDefault(),window.open(i,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=encodeURIComponent(this.url.replace(/^.*?:\/\//,"")),n=("goodshare_"+Math.random()).replace(".",""),o=document.querySelectorAll('[data-counter="moimir"]'),a="https://appsmail.ru/share/count/"+t+"?callback="+n;o.length>0&&(window[n]=function(t){[].concat(r(o)).forEach(function(e){e.innerHTML=t.share_mm}),e.parentNode.removeChild(e)},e.src=a,document.body.appendChild(e))}}]),e}();t.moimir_share=(new i).shareWindow(),t.moimir_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="linkedin"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a="https://www.linkedin.com/shareArticle?url="+n+"&text="+r+"&summary="+o+"&mini=true";t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="linkedin"]'),o="https://www.linkedin.com/countserv/count/share?url="+this.url+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.count}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.linkedin_share=(new i).shareWindow(),t.linkedin_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="tumblr"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a="https://www.tumblr.com/widgets/share/tool?canonicalUrl="+n+"&title="+r+"&caption="+o+"&posttype=link";t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="tumblr"]'),o="https://api.tumblr.com/v2/share/stats?url="+this.url+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.response.note_count}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.tumblr_share=(new i).shareWindow(),t.tumblr_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.querySelector('meta[name="description"]'),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('link[rel="apple-touch-icon"]');o(this,e),this.url=encodeURIComponent(t),this.description=n?encodeURIComponent(n.content):"",this.image=r?encodeURIComponent(r.href):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="pinterest"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,o=t.dataset.image?encodeURIComponent(t.dataset.image):e.image,a="https://www.pinterest.com/pin/create/button/?url="+n+"&description="+r+"&media="+o;t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="pinterest"]'),o="https://api.pinterest.com/v1/urls/count.json?url="+this.url+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.length>0?t.count:0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.pinterest_share=(new i).shareWindow(),t.pinterest_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="surfingbird"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a="https://surfingbird.ru/share?url="+n+"&title="+r+"&description="+o;t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="surfingbird"]'),o="https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="https://surfingbird.ru/button?url='+this.url+'" and xpath="*"')+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.results.length>0?t.results[0].match(/span class="stats-num">(\d+)</)[1]/1:0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.surfingbird_share=(new i).shareWindow(),t.surfingbird_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="reddit"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://reddit.com/submit?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="reddit"]'),o="https://www.reddit.com/api/info.json?url="+this.url+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){if(t.data.children.length>0){for(var n=0,r=0;r<t.data.children.length;r++)n+=t.data.children[r].data.score;e.innerHTML=n}else e.innerHTML=0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.reddit_share=(new i).shareWindow(),t.reddit_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="buffer"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://buffer.com/add?url="+n+"&text="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="buffer"]'),o="https://api.bufferapp.com/1/links/shares.json?url="+this.url+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t?t.shares:0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.buffer_share=(new i).shareWindow(),t.buffer_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="stumbleupon"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://stumbleupon.com/submit?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="stumbleupon"]'),o="https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="http://www.stumbleupon.com/services/1.01/badge.getinfo?url='+this.url+'" and xpath="*"')+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){t.results[0]?e.innerHTML=null!==t.results[0].match(/"views":(\d+),/)?t.results[0].match(/"views":(\d+),/)[1]/1:0:e.innerHTML=0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.stumbleupon_share=(new i).shareWindow(),t.stumbleupon_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="pocket"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://getpocket.com/save?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="pocket"]'),o="https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="https://widgets.getpocket.com/v1/button?label=pocket&count=vertical&v=1&url='+this.url+"&src="+this.url+'" and xpath="*"')+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.results.length>0?t.results[0].match(/em id="cnt">(\d+)</)[1]/1:0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.pocket_share=(new i).shareWindow(),t.pocket_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="xing"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="https://www.xing.com/spi/shares/new?url="+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}},{key:"getCounter",value:function(){var e=document.createElement("script"),t=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="xing"]'),o="https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="https://www.xing-share.com/app/share?op=get_share_button;counter=top;url='+this.url+'" and xpath="*"')+"&callback="+t;n.length>0&&(window[t]=function(t){[].concat(r(n)).forEach(function(e){e.innerHTML=t.results.length>0?t.results[0].match(/span class="xing-count top">(\d+)</)[1]/1:0}),e.parentNode.removeChild(e)},e.src=o,document.body.appendChild(e))}}]),e}();t.xing_share=(new i).shareWindow(),t.xing_counter=(new i).getCounter()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="googleplus"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="https://plus.google.com/share?url="+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.googleplus_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="twitter"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://twitter.com/share?url="+n+"&text="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.twitter_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="livejournal"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://livejournal.com/update.bml?event="+n+"&subject="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.livejournal_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="evernote"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a="https://www.evernote.com/clip.action?url="+n+"&title="+r+"&body="+o;t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.evernote_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="delicious"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://del.icio.us/save?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.delicious_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="blogger"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://www.blogger.com/blog-this.g?u="+n+"&n="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.blogger_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="instapaper"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://www.instapaper.com/edit?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.instapaper_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="digg"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://digg.com/submit?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.digg_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="liveinternet"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl="+n+"&cntitle="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.liveinternet_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]'),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document.querySelector('link[rel="apple-touch-icon"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):"",this.image=a?encodeURIComponent(a.href):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="wordpress"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a=t.dataset.image?encodeURIComponent(t.dataset.image):e.image,i="https://wordpress.com/wp-admin/press-this.php?u="+n+"&t="+r+"&s="+o+"&i="+a+"&v=2";t.addEventListener("click",function(e){return e.preventDefault(),window.open(i,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.wordpress_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n),this.description=r?encodeURIComponent(r.content):""}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="baidu"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o=t.dataset.description?encodeURIComponent(t.dataset.description):e.description,a="https://cang.baidu.com/do/add?iu="+n+"&it="+r+"&dc="+o+"&fr=ien";t.addEventListener("click",function(e){return e.preventDefault(),window.open(a,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.baidu_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="renren"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="http://share.renren.com/share/buttonshare.do?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.renren_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.title;o(this,e),this.url=encodeURIComponent(t),this.title=encodeURIComponent(n)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="weibo"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r=t.dataset.title?encodeURIComponent(t.dataset.title):e.title,o="https://service.weibo.com/share/share.php?url="+n+"&title="+r;t.addEventListener("click",function(e){return e.preventDefault(),window.open(o,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.weibo_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="skype"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="https://web.skype.com/share?"+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.skype_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="telegram"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="https://telegram.me/share/url?url="+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.telegram_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="viber"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="viber://forward?text="+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.viber_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="whatsapp"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="whatsapp://send?text="+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.whatsapp_share=(new i).shareWindow()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.location.href;o(this,e),this.url=encodeURIComponent(t)}return a(e,[{key:"shareWindow",value:function(){var e=this;[].concat(r(document.querySelectorAll('[data-social="line"]'))).forEach(function(t){var n=t.dataset.url?encodeURIComponent(t.dataset.url):e.url,r="line://msg/text/"+n;t.addEventListener("click",function(e){return e.preventDefault(),window.open(r,"Share this","width=640,height=480,location=no,toolbar=no,menubar=no")})})}}]),e}();t.line_share=(new i).shareWindow()}]);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),r=(n(a),o(5)),c=n(r),u=o(6),s=n(u),d=o(7),f=n(d),l=o(8),m=n(l),p=o(9),b=n(p),v=o(10),g=n(v),y=o(13),w=n(y),h=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return e&&(k=!0),k?(h=(0,g["default"])(h,j),(0,b["default"])(h,j.once),h):void 0},_=function(){h=(0,w["default"])(),O()},z=function(){h.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},A=function(e){return e===!0||"mobile"===e&&m["default"].mobile()||"phone"===e&&m["default"].phone()||"tablet"===e&&m["default"].tablet()||"function"==typeof e&&e()===!0},E=function(e){return j=i(j,e),h=(0,w["default"])(),A(j.disable)||x?z():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,s["default"])(O,50,!0)),window.addEventListener("orientationchange",(0,s["default"])(O,50,!0)),window.addEventListener("scroll",(0,c["default"])(function(){(0,b["default"])(h,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,s["default"])(_,50,!0)}),(0,f["default"])("[data-aos]",_),h)};e.exports={init:E,refresh:O,refreshHard:_}},function(e,t){},,,,function(e,t,o){"use strict";function n(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:n,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=o(6),c="Expected a function";e.exports=n},function(e,t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,O=t,y=e.apply(n,o)}function a(e){return O=e,w=setTimeout(d,t),_?n(e):y}function r(e){var o=e-h,n=e-O,i=t-o;return z?x(i,g-n):i}function u(e){var o=e-h,n=e-O;return!h||o>=t||0>o||z&&n>=g}function d(){var e=j();return u(e)?f(e):void(w=setTimeout(d,r(e)))}function f(e){return clearTimeout(w),w=void 0,A&&b?n(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),h=O=0,b=v=w=void 0}function m(){return void 0===w?y:f(j())}function p(){var e=j(),o=u(e);if(b=arguments,v=this,h=e,o){if(void 0===w)return a(h);if(z)return clearTimeout(w),w=setTimeout(d,t),n(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h=0,O=0,_=!1,z=!1,A=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,i(o)&&(_=!!o.leading,z="maxWait"in o,g=z?k(c(o.maxWait)||0,t):g,A="trailing"in o?!!o.trailing:A),p.cancel=l,p.flush=m,p}function n(e){var t=i(e)?h.call(e):"";return t==f||t==l}function i(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||a(e)&&h.call(e)==m}function c(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t=n(e.valueOf)?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var o=v.test(e);return o||g.test(e)?y(e.slice(2),o?2:8):b.test(e)?d:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s="Expected a function",d=NaN,f="[object Function]",l="[object GeneratorFunction]",m="[object Symbol]",p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,w=Object.prototype,h=w.toString,k=Math.max,x=Math.min,j=Date.now;e.exports=o},function(e,t){"use strict";function o(e,t){r.push({selector:e,fn:t}),!c&&a&&(c=new a(n),c.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=r.length;n>o;o++){e=r[o],t=i.querySelectorAll(e.selector);for(var a,c=0,u=t.length;u>c;c++)a=t[c],a.ready||(a.ready=!0,e.fn.call(a,a))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,a=window.MutationObserver||window.WebKitMutationObserver,r=[],c=void 0;t["default"]=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(){o(this,e)}return n(e,[{key:"phone",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"mobile",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t["default"]=new i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){o(e,i+n,t)})};t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(11),a=n(i),r=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,a["default"])(e.node,t.offset)}),e};t["default"]=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i),r=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a["default"])(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t["default"]=o}])});
//# sourceMappingURL=aos.js.map
;
! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function(t, e, n) {
    "use strict";
    n.r(e);
    var i = function() {
            function t(t) {
                var e = this;
                this.listener = function(t) {
                    (t.matches ? e.matchFns : e.unmatchFns).forEach((function(t) {
                        t()
                    }))
                }, this.toggler = window.matchMedia(t), this.toggler.addListener(this.listener), this.matchFns = [], this.unmatchFns = []
            }
            return t.prototype.add = function(t, e) {
                this.matchFns.push(t), this.unmatchFns.push(e), (this.toggler.matches ? t : e)()
            }, t
        }(),
        o = function(t) {
            return Array.prototype.slice.call(t)
        },
        r = function(t, e) {
            return o((e || document).querySelectorAll(t))
        },
        s = ("ontouchstart" in window || navigator.msMaxTouchPoints, navigator.userAgent.indexOf("MSIE") > -1 || navigator.appVersion.indexOf("Trident/") > -1),
        a = "mm-spn",
        c = function() {
            function t(t, e, n, i, o) {
                this.node = t, this.title = e, this.slidingSubmenus = i, this.selectedClass = n, this.node.classList.add(a), s && (this.slidingSubmenus = !1), this.node.classList.add(a + "--" + o), this.node.classList.add(a + "--" + (this.slidingSubmenus ? "navbar" : "vertical")), this._setSelectedl(), this._initAnchors()
            }
            return Object.defineProperty(t.prototype, "prefix", {
                get: function() {
                    return a
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.openPanel = function(t) {
                var e = t.parentElement;
                if (this.slidingSubmenus) {
                    var n = t.dataset.mmSpnTitle;
                    e === this.node ? this.node.classList.add(a + "--main") : (this.node.classList.remove(a + "--main"), n || o(e.children).forEach((function(t) {
                        t.matches("a, span") && (n = t.textContent)
                    }))), n || (n = this.title), this.node.dataset.mmSpnTitle = n, r("." + a + "--open", this.node).forEach((function(t) {
                        t.classList.remove(a + "--open"), t.classList.remove(a + "--parent")
                    })), t.classList.add(a + "--open"), t.classList.remove(a + "--parent");
                    for (var i = t.parentElement.closest("ul"); i;) i.classList.add(a + "--open"), i.classList.add(a + "--parent"), i = i.parentElement.closest("ul")
                } else {
                    var s = t.matches("." + a + "--open");
                    r("." + a + "--open", this.node).forEach((function(t) {
                        t.classList.remove(a + "--open")
                    })), t.classList[s ? "remove" : "add"](a + "--open");
                    for (var c = t.parentElement.closest("ul"); c;) c.classList.add(a + "--open"), c = c.parentElement.closest("ul")
                }
            }, t.prototype._setSelectedl = function() {
                var t = r("." + this.selectedClass, this.node),
                    e = t[t.length - 1],
                    n = null;
                e && (n = e.closest("ul")), n || (n = this.node.querySelector("ul")), this.openPanel(n)
            }, t.prototype._initAnchors = function() {
                var t = this;
                this.node.addEventListener("click", (function(e) {
                    var n = e.target,
                        i = !1;
                    (i = (i = (i = i || function(t) {
                        return !!t.matches("a")
                    }(n)) || function(e) {
                        var n;
                        return !!(n = e.closest("span") ? e.parentElement : !!e.closest("li") && e) && (o(n.children).forEach((function(e) {
                            e.matches("ul") && t.openPanel(e)
                        })), !0)
                    }(n)) || function(e) {
                        var n = r("." + a + "--open", e),
                            i = n[n.length - 1];
                        if (i) {
                            var o = i.parentElement.closest("ul");
                            if (o) return t.openPanel(o), !0
                        }
                        return !1
                    }(n)) && e.stopImmediatePropagation()
                }))
            }, t
        }(),
        u = "mm-ocd",
        d = function() {
            function t(t, e) {
                var n = this;
                void 0 === t && (t = null), this.wrapper = document.createElement("div"), this.wrapper.classList.add("" + u), this.wrapper.classList.add(u + "--" + e), this.content = document.createElement("div"), this.content.classList.add(u + "__content"), this.wrapper.append(this.content), this.backdrop = document.createElement("div"), this.backdrop.classList.add(u + "__backdrop"), this.wrapper.append(this.backdrop), document.body.append(this.wrapper), t && this.content.append(t);
                var i = function(t) {
                    n.close(), t.preventDefault(), t.stopImmediatePropagation()
                };
                this.backdrop.addEventListener("touchstart", i), this.backdrop.addEventListener("mousedown", i)
            }
            return Object.defineProperty(t.prototype, "prefix", {
                get: function() {
                    return u
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.open = function() {
                this.wrapper.classList.add(u + "--open"), document.body.classList.add(u + "-opened")
            }, t.prototype.close = function() {
                this.wrapper.classList.remove(u + "--open"), document.body.classList.remove(u + "-opened")
            }, t
        }(),
        l = function() {
            function t(t, e) {
                void 0 === e && (e = "all"), this.menu = t, this.toggler = new i(e)
            }
            return t.prototype.navigation = function(t) {
                var e = this;
                if (!this.navigator) {
                    var n = (t = t || {}).title,
                        i = void 0 === n ? "Menu" : n,
                        o = t.selectedClass,
                        r = void 0 === o ? "Selected" : o,
                        s = t.slidingSubmenus,
                        a = void 0 === s || s,
                        u = t.theme,
                        d = void 0 === u ? "light" : u;
                    this.navigator = new c(this.menu, i, r, a, d), this.toggler.add((function() {
                        return e.menu.classList.add(e.navigator.prefix)
                    }), (function() {
                        return e.menu.classList.remove(e.navigator.prefix)
                    }))
                }
                return this.navigator
            }, t.prototype.offcanvas = function(t) {
                var e = this;
                if (!this.drawer) {
                    var n = (t = t || {}).position,
                        i = void 0 === n ? "left" : n;
                    this.drawer = new d(null, i);
                    var o = document.createComment("original menu location");
                    this.menu.after(o), this.toggler.add((function() {
                        e.drawer.content.append(e.menu)
                    }), (function() {
                        e.drawer.close(), o.after(e.menu)
                    }))
                }
                return this.drawer
            }, t
        }();
    e.default = l;
    window.MmenuLight = l
}]);
 
/**
 * CART
 */

$(document).ready(function() {
  var mainCart = new CartMan({
    declination: ["товар", "товара", "товаров"],
    hideCartItems: true, // Скрывать поля корзины при удалении? [data-item-id]
    counterTemplate: "%c%", // regexp %c% (%c% - counter)
    counterTemplateEmpty: null, // regexp %c% (Шаблон для пустой корзины)
    positionsTemplate: "%c%", // regexp %c% (%c% - counter)
    positionsTemplateEmpty: null, // regexp %c% (Шаблон для пустой корзины)
    counterItemsText: "В вашей корзине %c%&nbsp;%w%", // regexp %c%,%w% (%c% - counter, %w% - word)
    counterItemsTextEmpty: "В вашей корзине %c%&nbsp;%w%", // regexp %c%,%w% (%c% - counter, %w% - word)
    counterPositionText: "В вашей корзине %c%&nbsp;%w%", // regexp %c%,%w% (%c% - counter, %w% - word)
    counterPositionTextEmpty: "В вашей корзине %c%&nbsp;%w%", // regexp %c%,%w% (%c% - counter, %w% - word)
    updateItems: function(cart) {
      if (cart.order_lines.length == 0) {
        $("[data-cart-quick]").hide();
        $(".cart_sidebar").hide();
        $(".cart-item").hide();
        $(".cart-empty").removeClass("hide");
      }
    }
  });
});

/**
 * CATEGORY
 */
$(document).ready(function() {
  $(".category_menu-item[data-tabs-container]").dataTabs({
    state: "accordion",
    useJqMethods: false
  });
});

/**
 * COLLECTION_FILTERS
 */
$(document).ready(function() {
  initCollectionFilter();

  $(document).on("click", "[data-open-filter]", function(event) {
    event.preventDefault();
    alertify.panel({
      target: ".collection-filter",
      position: "left",
      onOpen: function() {
        initCollectionFilter();
        $("body").addClass("open-collection-filter");
      },
      onclose: function() {
        $("body").removeClass("open-collection-filter");
      }
    });
  });
});
 
function initCollectionFilter() {
  $(".js-filter-section").dataTabs({
    state: "accordion",
    useJqMethods: false, 
  });
  $(".js-filter-range-slider").rangeSlider({
    force_edges: true,
    hide_min_max: true,
    hide_from_to: true,
  });
  $(".js-filter-range-slider-price").rangeSlider({
    force_edges: true, 
    hide_min_max: true,
    hide_from_to: true,
  });
}

$(function() {
  $(".js-filter-trigger").on("change", function(event) {
    $(this)
      .parents("form:first")
      .submit();
  });
  $(document)
    .on("click", "label", function(event) {
      var $form = $(this).parents("form:first");
      var $filterItem = $(this).parents(".filter-item");
      var $checkbox = $filterItem.find(":checkbox"); 

      if ($form.hasClass("collection-filter")) {
        event.preventDefault();
        $checkbox.prop("checked", !$checkbox.prop("checked")).trigger("change");
      }
    })
    .on("change", "input:not(.js-filter-range-placeholder), select", function(event) {
      var $form = $(this).parents("form:first"); 

      sendFilter($form, $(this));
    })
    .on("click", '[type="submit"]', function(event) {
      var $form = $(this).parents("form:first"); 

      if ($form.hasClass("collection-filter")) {
        event.preventDefault();
        sendFilter($form, $(event.target));
      }
    })
    .on("check", ".collection-filter", function(event) {
      sendFilter($(this), $(this)); 
    });

  function sendFilter($form, $source) {
    if (!$form.hasClass("collection-filter")) {
      return false;
    }

    var isSubmitOnChange = $form.data("submit-onchange");
    var isButton = $source.is("button");

    if (isSubmitOnChange || isButton) {
      $form.submit();
    }
  }
});

/**
 * COLLECTIONINFINITY
 */
$(document).ready(function() {
  /**
   * data-collection-infinity="{{ paginate.next.url }}"
   * атрибут стоит на родителе карточек коллекции
   */

  if ($("[data-collection-infinity]").length) {
    var html = document.documentElement;
    $(window).on("scroll", function(event) {
      var scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      scrollTop -= document.documentElement.clientTop;
      var part = 1.7; // на это число разделиться высота контейнера с товарами

      var collscroll =
        $("[data-collection-infinity]").get(0).offsetTop +
        $("[data-collection-infinity]").outerHeight() / part;

      if (scrollTop > collscroll) {
        collectionInfinity();
      }
    });
  }

  // массив tempPage хранит метки страниц которые уже загрузили
  var tempPage = [];
  function collectionInfinity() {
    var _nextPage = $("[data-collection-infinity]").data("collection-infinity");
    if (_nextPage && _nextPage != "") {
      if (tempPage.indexOf(_nextPage) > -1) {
        return;
      }
      tempPage.push(_nextPage);
      $("body").addClass("body--loading");

      // грузим контент
      $.ajax({
        url: _nextPage,
        dataType: "html"
      })
        .done(function(_dom) {
          var $dom = $(_dom);
          var $next = $dom.find("[data-collection-infinity]");
          var _next = $next.data("collection-infinity");
          $("[data-collection-infinity]").append($next.html());
          $("[data-collection-infinity]")
            .data("collection-infinity", _next)
            .attr("data-collection-infinity", _next);

          $("[data-product-id]").each(function(index, el) {
            Products.initInstance($(el));
          });
        })
        .always(function() {
          $("body").removeClass("body--loading");
        });
    }
  }
});

/**
 * COMPARE_PRODUCT
 */
$(document).ready(function() {
  var _CompareProducts = new CompareProducts({
    counterTemplate: "(%c%)", // regexp %c%
    counterTemplateEmpty: null, // regexp %c%
    buttonNotAddedText: null, // текст не активной кнопки
    buttonAddedText: null, // текст активной кнопки
    titles: {
      added: "Добавлен в сравнение",
      notAdded: "В сравнение"
    },
    onAdd: function(data) {
      alertify.success("Товар добавлен в сравнение");
    },
    onRemove: function(data) {
      alertify.message("Товар удален из сравнения");
    },
    onUpdate: function(data) {
      // обновление
    },
    onInit: function(data) {
      // инициализация
    },
    onOverload: function(data) {
      alertify.warning(
        "Достигнуто максимальное количество сравниваемых товаров - " +
          data.maxItems
      );
    }
  });
});

/**
 * COMPARES_BODY
 */
$(function() {
  var $compareCount = $(".js-compare-amount");
  var $compareTable = $(".js-compare-table");

  var compareWrapper = "#js-compare-wrapper";
  var compareInner = "#js-compare-inner";
  var compareUrl = document.location.href;

  EventBus.subscribe("before:insales:compares", function() {
    if (Site.template == "compare") {
      $('<div class="preloader is-white is-32"></div>')
        .prependTo($(compareWrapper))
        .fadeIn("fast");
    }
  });

  EventBus.subscribe("init:insales:compares", function(data) {
    for (i = 0; i < data.products.length; i++) {
      $('[data-compare="' + data.products[i].id + '"] .compare-add').addClass(
        "active"
      );
      $('[data-comp-id="' + data.products[i].id + '"]').removeClass("hide");
    }
    $compareCount.html(data.products.length);
  });

  EventBus.subscribe("remove_item:insales:compares", function(data) {
    if (Site.template == "compare") {
      $("[data-compared-id=" + data.action.item + "]").fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  EventBus.subscribe("update_items:insales:compares", function(data) {
    for (i = 0; i < data.products.length; i++) {
      $('[data-comp-id="' + data.products[i].id + '"]').removeClass("hide");
    }

    if (data.products.length == 0) {
      $(".compare-toolbar").fadeOut("slow");
      $(".table-compare")
        .fadeOut("slow")
        .html(
          '<div class="notice notice-info text-center">Список сравнения пуст</div>'
        )
        .fadeIn("slow");
    } else {
      $(compareWrapper).load(compareWrapper + " " + compareInner, function() {
        if (!$.cookie("compare-view") && $(".product-title").length > 1) {
          $(sameRows).hide();
          $(compareViewToggler).addClass("active");
        }
      });
    }

    $(".preloader").fadeOut("fast", function() {
      $(this).remove();
    });
  });

  /**
   * COMPARE VIEW
   * Настройка переключалки видимости блоков
   * @type {string}
   */
  var compareViewToggler = ".js-same-toggle";
  var sameRows = ".same-row";

  if (!$.cookie("compare-view") && $(".product-title").length > 1) {
    $(sameRows).hide();
    $(compareViewToggler).addClass("active");
  }

  $(document).on("click", compareViewToggler, function(e) {
    e.preventDefault();

    $(compareViewToggler).toggleClass("active");
    $(sameRows).toggle();

    if (!$(this).hasClass("active")) {
      $.cookie("compare-view", "true");
    } else {
      $.removeCookie("compare-view");
    }
  });
});

/**
 * DECLINATION
 */
/**
 * Склонение слов
 * @param  {number} _day  число
 * @param  {array} titles массив слов
 * @return {string}       склонение
 *
 * declinationText(2, ['человек', 'человека', 'человек'])
 * => 'человека'
 */
var declinationText = function(_day, titles) {
  var day = Math.round(_day);
  var _titles = ["товар", "товара", "товаров"];
  if (titles) {
    _titles = titles;
  }
  var cases = [2, 0, 1, 1, 1, 2];
  return _titles[
    day % 100 > 4 && day % 100 < 20 ? 2 : cases[day % 10 < 5 ? day % 10 : 5]
  ];
};

/**
 * DYNAMIC_BASKET
 */
$(document).ready(function() {
  EventBus.subscribe("update_items:insales:cart", function(cart) {
    $(".js-dynamic_basket").html(templateLodashRender(cart, "dynamic_basket"));
    // инициализация items
    InSalesUI.initAjaxInstance($(".js-dynamic_basket"));
  });
});

/**
 * FAVORITE
 */
var Favorite = {};
$(document).ready(function() {
  window.Favorite = new Favorites({
    counterTemplate: "%c%",
    //buttonNotAddedText: 'Добавить в избранное',
    //buttonAddedText: 'Удалить из избранного',
    onAdd: function() {
      alertify.success("Товар добавлен в избранное");
    },
    onRemove: function() {
      alertify.error("Товар удален из избранного");
    },
    onUpdate: function(data) {
      var isFavoritePage = $(".js-favorite").length > 0;
      if (isFavoritePage) {
        // Рендер списка
        $(".js-favorite").html(Template.render(data, "favorite"));

        // инициализация инстансов нужна после динамического добавления товаров
        Products.getList(_.map(data.products, "id"));
        Favorite.checkFavoritesProducts();
      }
    }
  });
});

/**
 * FIXED_HEADER
 */
$(document).ready(function() {
  var fixed_header = new DetectiveScroll({
    trigger: {
      el: $(".fixed_header"),
      scroll: $(".main-header").outerHeight()
    }
  });
});

/**
 * GEO_MANAGER
 */
$(document).ready(function() {
  var myGeo = new GeoManager({
    succes: function(geoData) {
      console.log(geoData);
      $(".js-city-name").html(geoData.city);
    }
  });

  $(document).on("submit", ".js-city-form", function(event) {
    event.preventDefault();
    var newCity = $(this)
      .find('[name="city"]')
      .val();
    if (newCity && newCity != "") {
      myGeo.setLocalData({ city: newCity }, function() {
        console.log("Данные обновлены");
      });
    }
  });
});

/**
 * HITS
 */
$(document).ready(function() {
  var hitsSlider = InitSwiper($(".js-hits .js-products-slider"), {
    autoLength: true,
    loop: false,
    minCartWidth: 270,
    spaceBetween: 30,
    autoResponsive: false
  });

  $(".js-hits").dataTabs({
    onInit: function() {
      setTimeout(function() {
        $.each(hitsSlider, function(index, el) {
          el.update();
        });
      }, 100);
    },
    onTab: function() {
      $.each(hitsSlider, function(index, el) {
        el.update();
      });
    }
  });
});

/**
 * INSTAGRAM
 */
$(document).ready(function() {
  if ($(".js-instagram").length) {
    // Получаем фотографии из API
    var myInstagram = new InstagramPhotos({
      user_id: 5720831737,
      access_token: "5720831737.1677ed0.75c5924295bb49eaa35c62372aabfd64",
      countPhoto: 20,
      // filterImages: function (image){
      //   return image.likes.count > 0
      // },
      done: function(photos) {
        console.log(photos);
        $(".js-instagram .swiper-container").html(
          templateLodashRender({ photos: photos }, "insta-footer")
        );

        setTimeout(function() {
          instaSlider();
        }, 100);
      },
      fail: function(error) {
        if (error.meta) {
          console.warn(error.meta.error_message);
        }
      }
    });
  }

  function instaSlider() {
    var instagramSlider = InitSwiper(".js-instagram", {
      autoLength: true,
      minCartWidth: 300,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 600,
      setWrapperSize: true,
      paginationClickable: true,
      loop: true,
      preventClicks: true,
      controlBy: "container",
      spaceBetween: 0
    });
  }
});

/**
 * MOBILE_MENU
 */
$(document).ready(function() {
  $(document).on("click", "[data-open-mobile]", function(event) {
    event.preventDefault();
    var target =
      '[data-target-mobile-menu="' + $(this).data("open-mobile") + '"]';
    alertify.panel({
      target: target,
      position: "left",
      onOpen: function() {
        $("body").addClass("open-collection-filter");
        $("body").addClass("open-mobile-menu");
        $(".mobile_menu-item[data-tabs-container]").dataTabs({
          state: "accordion",
          initOpenTab: false,
          onInit: function(ins) {
            ins.closeAllTabs();
          }
        });
      },
      onclose: function() {
        $("body").removeClass("open-collection-filter");
        $("body").removeClass("open-mobile-menu");
      }
    });
  });
});

/**
 * MODALS
 */
$(document).ready(function() {
  $.fancybox.defaults.animationEffect = "zoom-in-out";

  $(document).on("afterShow.fb", function(e, instance, slide) {
    if (MagicZoom) {
      $(".mz-zoom-window").remove();
      MagicZoom.refresh();
    }
  });

  EventBus.subscribe("add_items:insales:cart", function(cart) {
    $.fancybox.open({
      src: "#cart-add", // Source of the content
      type: "inline"
    });
  });

  $(document).on("click", ".added-close", function(event) {
    event.preventDefault();
    $.fancybox.close();
  });

  $(document).on("click", ".js-modal", function(event) {
    event.preventDefault();

    $.fancybox.open({
      src: $(this).attr("href"), // Source of the content
      type: "inline"
    });
  });

  $(document).on("click", "[data-open-mobile-menu]", function(event) {
    event.preventDefault();
    alertify.panel({
      target: ".mobile_menu",
      position: "left"
    });
  });

  $('[name="phone"]').inputmask("+7(999) 999 9999");

  $(".js-feedback").InSalesFeedback({
    require: ["phone"],
    useAgree: true,
    showMessageAgree: true,
    onError: function(data) {
      // Ошибка валидации
      console.log(data);
    },
    onSuccess: function(data) {
      // сообщение успешно отправлено
      setTimeout(function() {
        $.fancybox.close();
      }, 5000);
    },
    onFail: function(data) {
      // Ошибка при отправке сообщения
      console.log(data);
    }
  });

  // Фикс для заказа в один клик
  $(document).on("click", "[data-quick-checkout]", function(event) {
    $.fancybox.close();
  });

  $(document).on("click", "[data-cart-quick]", function(event) {
    event.preventDefault();
    Cart.quickCheckout.openModal($("#insales-quick-checkout-dialog"));
  });

  $(document).on(
    "click",
    ".template-cart button.m-modal-button.m-modal-button--checkout.button--checkout",
    function(event) {
      event.preventDefault();
      event.stopPropagation();

      Cart.quickCheckout._send();
    }
  );
});

/**
 * PRODUCT_INFO
 */
$(document).ready(function() {
  Products.setConfig({
    initOption: true,
    filtered: false,
    showVariants: true,
    useMax: false,
    decimal: {
      kgm: 1,
      dmt: 1
    },
    fileUrl: typeof fileUrl == "undefined" ? {} : fileUrl,
    options: {
      Цвет: "option-radio",
      default: "option-radio" 
    }
  });  

  var myVariants = new VariantsModifier ({
  templates: {
    price: '%s%', // %s% - 100 руб
    oldPrice: '%s%', // %s% - 100 руб
    emptyOldPrice: '',
    sku: 'арт. %s%', // %s% - 12345
    emptySku: '',
    available: 'Есть в наличии',
    notAvailable: 'Нет в наличии',
    quantityEnds: 'Заканчивается',
    quantityAlot: 'Много',
    quantityNotAvailable: 'Нет в наличии'
  },
  classes: {
    withOldPrice: 'with-old-price',
    withoutOldPrice: 'without-old-price',
    withSku: 'with-sku',
    withoutSku: 'without-sku',
    isAvailable: 'is-available',
    notAvailable: 'not-available',
    quantityEnds: 'is-quantity-ends',
    quantityAlot: 'is-quantity-alot',
    quantityNotAvailable: 'is-quantity-not-available'
  },
  quantityEnds: 10,  
  initVariantImage: false,  
  updateVariantFromSlider: false,  
  useToggleOldPrice: false,  
  useToggleSku: false,  
  checkQuantityVariant: true, 
  quantityNull: 'quantityAlot',  
  dataParam: {  
    quantityNull: 'quantity-null',
    quantityEnds: 'quantity-ends',
    checkQuantytiVariant: 'check-quantity-variant'
  }, 
});

// есть метод для установки варианта по картинке
// $form - селектор формы товара
// src - ссылка на картинку варианта
// size - не обязательное поле, но чтобы не было конфликтов
// когда в названии файла присутствуют
// спец префиксы размеров - `original/compact/large/medium/micro/thumb`
myVariants.setVariantByImage({
  $form: $('#product-form'),
  src: 'https://static-eu.insales.ru/images/products/1/2587/85207579/variant_image.jpg',
  size: 'original'
});
});

/**
 * PRODUCT_TABS
 */
$(document).ready(function() {
  $(".js-tabs").dataTabs({
    state: "tab", // роль плагина tab/accordion
    event: "click",
    activeIndex: 1, // активный элемент
    speedSwitching: 5000, // скорость авто переключения
    useToggle: false, // Скрытие активных вкладок
    autoSwitching: false, // авто переключение
    hideOnClosest: false, // hide on closest
    hideOnMouseout: false, // hide on Mouseout
    prevent: true, // preventDefault
    debug: false, // дебагер
    useHash: true, // использовать window.location.hash
    useJqMethods: true, // использовать jq методы анимаций?
    loop: false, // замкнуть цикл при переключении?
    initOpenTab: true, // инициализировать активный таб?
    pauseVideoAudio: true, // ставить на паузу аудио и видео при переключении табов?
    mouseoutTimeOut: false, // таймаут после снятия курсора
    jqMethodOpenSpeed: 300, // скорость открытия табы
    jqMethodOpen: "fadeIn", // jq метод открытия табы
    jqMethodCloseSpeed: 0, // скорость закрытия табы
    jqMethodClose: "hide", // jq метод закрытия табы
    onInit: function() {}, // плагин инициализировался (onInit)
    onTab: function() {}, // переключили таб (self)
    onMouseover: function() {}, // навели на блок табов (event, self)
    onMouseout: function() {} // убрали курсор с блока табов (event, self)
  });
});

/**
 * PRODUCT-GALLERY
 */
var mzOptions = {
  zoomDistance: 0,
  expand: "window",
  rightClick: "true",
  hint: "off"
};
$(document).ready(function() {
  var $galleryThumbs = ".gallery-wrapper .js-gallery-thumbs";
  var $galleryMain = ".gallery-wrapper .js-product-gallery-main";
  galleryInit($galleryThumbs, $galleryMain);
});

function galleryInit(galleryThumbs, galleryMain) {
  var $galleryThumbs = $(galleryThumbs);
  var $galleryMain = $(galleryMain);

  var galleryThumbsSlider = new Swiper(galleryThumbs, {
    loopedSlides: $(galleryThumbs + " .swiper-wrapper .swiper-slide").length,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next.is-thumb",
      prevEl: ".swiper-button-prev.is-thumb"
    },
    speed: 200,
    loop: false,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true
  });

  var galleryTop = new Swiper(galleryMain, {
    loopedSlides: $(galleryMain + " .swiper-wrapper .swiper-slide").length,
    navigation: {
      nextEl: ".swiper-button-next.is-gallery",
      prevEl: ".swiper-button-prev.is-gallery"
    },
    speed: 200,
    loop: false,
    spaceBetween: 0
  });

  galleryTop.on("transitionEnd", function(e) {
    $(".js-gallery-trigger").removeClass("is-active");
    $(".js-gallery-trigger")
      .eq(galleryTop.activeIndex)
      .addClass("is-active");
    if ($galleryThumbs[0] && $galleryThumbs[0].swiper)
      $galleryThumbs[0].swiper.slideTo(galleryTop.activeIndex);
  });

  galleryTop.params.control = galleryThumbsSlider;
  galleryThumbsSlider.params.control = galleryTop;

  $galleryThumbs.find(".js-gallery-trigger:first").addClass("is-active");
  $(document).on("click", galleryThumbs + " .js-gallery-trigger", function(
    event
  ) {
    event.preventDefault();
    var index = $(this).index();
    if ($galleryMain[0] && $galleryMain[0].swiper) {
      $galleryMain[0].swiper.slideTo(index);
    }
  });
}

/**
 * PRODUCTS_SLIDER
 */
$(document).ready(function() {
  InitSwiper($(".js-products-slider").not(".products-is-hits"), {
    roundLengths: true,
    autoLength: true, // автоматически выставить кол-во слайдов исходя из минимальной ширины карточки
    minCartWidth: 280, // Минимальная ширина карточки
    autoResponsive: false // Автоматически расчитать респонсив для слайдера
  });
});

function generateUUID() {
  var d = new Date().getTime();
  var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
 

/**
 * QUICK_VIEW
 */
$(document).ready(function() {
  $(document).on("click", "[data-quick-view]", function(event) {
    event.preventDefault();
    var _id = $(this).data("quick-view");
    Products.get(_id).done(function(product) {
      $(".js-quick_view").html(
        templateLodashRender(convertProperties(product), "quick_view")
      );

      Products.initInstance($(".js-quick_view [data-product-id]"));
      Favorite.checkFavoritesProducts();
      var $galleryThumbs = ".quick_view .js-gallery-thumbs";
      var $galleryMain = ".quick_view .js-product-gallery-main";

      MagicZoom.refresh();

      $.fancybox.open({
        src: "#quick-view", // Source of the content
        type: "inline"
      });

      galleryInit($galleryThumbs, $galleryMain);
    });
  });
});

var convertProperties = function(_product) {
  _product.parameters = {};
  _product.sale = null;

  // Пермалинк параметра: массив характеристик
  $.each(_product.properties, function(index, property) {
    $.each(_product.characteristics, function(index, characteristic) {
      if (property.id === characteristic.property_id) {
        setParam(_product.parameters, property.permalink, property);
        setParam(
          _product.parameters[property.permalink],
          "characteristics",
          []
        );

        var uniq = true;
        $.each(
          _product.parameters[property.permalink].characteristics,
          function(index, cha) {
            if (cha.id == characteristic.id) {
              uniq = false;
            }
          }
        );
        if (uniq) {
          _product.parameters[property.permalink].characteristics.push(
            characteristic
          );
        }
      }
    });
  });

  // Скидка в процентах
  if (_product.variants) {
    $.each(_product.variants, function(index, variant) {
      if (variant.old_price) {
        var _merge = Math.round(
          ((parseInt(variant.old_price) - parseInt(variant.price)) /
            parseInt(variant.old_price)) *
            100,
          0
        );
        if (_merge < 100) {
          _product.sale = _merge;
        }
      }
    });
  }

  function setParam(obj, name, value) {
    obj[name] || (obj[name] = value);
  }

  return _product;
};

/**
 * RECENTLYVIEW
 */
$(document).ready(function() {
  var $recently_view = $(".js-recently_view");
  if ($recently_view.length > 0) {
    var myRecentlyView = new RecentlyView({
      success: function(_products) {
        if (_.size(_products) > 0) {
          var _templateRecentlyView = _.template(
            $('[data-template-id="recently_view"]').html()
          );
          $recently_view.html(_templateRecentlyView({ products: _products }));

          InitSwiper(".js-recently-slider", {
            autoLength: true,
            minCartWidth: 300,
            //maxBreakpoint: 1920,
            autoResponsive: false
          });

          // Инициализация data-product-id
          Products.getList(_.map(_products, "id"));
        }
      }
    });
  }
});

/**
 * SCRIPTS
 */
$(document).ready(function() {
  $("body").addClass("dom-ready");

  $(window).on("load", function(event) {
    $("body").addClass("window-load");
  });

  var elements = $(".sticky");
  Stickyfill.add(elements);
});

/**
 * SCROLL_TOP
 */
$(document).ready(function() {
  var scroll_top = new DetectiveScroll({
    trigger: {
      el: $(".js-scroll_top"),
      scroll: $(window).height() / 3
    }
  }); 
  $(document).on("click", ".js-scroll_top", function(event) {
    event.preventDefault();
    console.log($(".content").scrollTop());
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
});


/**
 * HELP
 */
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var spcook = cookies[i].split("=");
    deleteCookie(spcook[0]);
  }
  function deleteCookie(cookiename) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires=" + d;
    var name = cookiename;
    //alert(name);
    var value = "";
    document.cookie = name + "=" + value + expires + "; path=/acc/html";
  }
  window.location = ""; // TO REFRESH THE PAGE
}

$(document).ready(function() {
  $(document).on("click", "[data-clear-cookies]", function(event) {
    event.preventDefault();
    deleteAllCookies();

    alertify.success("Куки очищены", 4);
  });
  $(document).on("click", "[data-clear-localforage]", function(event) {
    event.preventDefault();
    localforage.clear();

    alertify.success("localforage очищен", 4);
    window.location = ""; // TO REFRESH THE PAGE
  });
  $(document).on("click", "[data-clear-cart]", function(event) {
    event.preventDefault();
    Cart.clear();

    setTimeout(function() {
      alertify.success("Корзина очищена", 4);
      window.location = ""; // TO REFRESH THE PAGE
    }, 3000);
  });
});

/**
 * STYLE_GUIDE
 */
$(document).ready(function() {
  $(".js-style_tabs").dataTabs({
    state: "accordion"
  });
  $("[data-alert-success]").click(function(event) {
    alertify.success("Товар добавлен в корзину", 10);
  });
  $("[data-alert-error]").click(function(event) {
    alertify.error("Ошибка при отправке формы", 10);
  });
  $("[data-alert-warning]").click(function(event) {
    alertify.warning("Товар удален", 10);
  });
  $("[data-alert-message]").click(function(event) {
    alertify.message("Все поля обязательны для заполнения", 10);
  });

  $(".js-fav-style").click(function(event) {
    event.preventDefault();

    $(this).toggleClass("not-added is-added");
  });
});

/**
 * TEMPLATE
 */
/**
 * Получение шаблона Lodash на основе данных
 * @param  {all} content       Данные для шаблона
 * @param  {string} templateId id из аттрибута data-template-id
 * @return {html}
 */
function templateLodashRender(content, templateId) {
  var templateContent = $('[data-template-id="' + templateId + '"]').html();
  var renderContent = _.template(templateContent);

  return renderContent(content);
}

function getDiscount(price, old_price) {
  var sale = "";
  var _merge = Math.round(
    ((parseInt(old_price) - parseInt(price)) / parseInt(old_price)) * 100,
    0
  );
  if (_merge < 100) {
    sale =
      '<div class="stiker stiker-sale">' +
      "<span>" +
      "скидка " +
      _merge +
      "%" +
      "</span>" +
      "</div>";
  }

  return sale;
}

function getStiker(name, characteristics) {
  var labels_list = "";
  _.forEach(characteristics, function(characteristic) {
    if (
      characteristic.permalink == name ||
      (characteristic.property
        ? characteristic.property.permalink == name
        : false)
    ) {
      labels_list += '<div class="stiker stiker-';
      labels_list += characteristic.permalink;
      labels_list += '"><span>';
      labels_list += characteristic.title;
      labels_list += "</span></div>";
    }
  });

  return labels_list;
} 
;





























