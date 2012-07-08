goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{var temp__3695__auto____3319 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____3319))
{var cm__3320 = temp__3695__auto____3319;

return cljs.core.str.call(null,"[crateGroup=",cm__3320,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__3321){
var vec__3322__3323 = p__3321;
var context__3324 = cljs.core.nth.call(null,vec__3322__3323,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__3324)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__3324);
}
};
var $ = function (sel,var_args){
var p__3321 = null;
if (goog.isDef(var_args)) {
  p__3321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__3321);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__3325){
var sel = cljs.core.first(arglist__3325);
var p__3321 = cljs.core.rest(arglist__3325);
return $__delegate.call(this, sel, p__3321);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3327 = null;
var G__3327__3328 = (function (this$,k){
var or__3548__auto____3326 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____3326))
{return or__3548__auto____3326;
} else
{return null;
}
});
var G__3327__3329 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__3327 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__3327__3328.call(this,this$,k);
case  3 :
return G__3327__3329.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3327;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__3331 = null;
var G__3331__3332 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3331__3333 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3331 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3331__3332.call(this,_,k);
case  3 :
return G__3331__3333.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3331;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__3335){
var vec__3336__3337 = p__3335;
var v__3338 = cljs.core.nth.call(null,vec__3336__3337,0,null);

var a__3339 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__3338)))
{return $elem.attr(a__3339);
} else
{return $elem.attr(a__3339,v__3338);
}
};
var attr = function ($elem,a,var_args){
var p__3335 = null;
if (goog.isDef(var_args)) {
  p__3335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__3335);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__3340){
var $elem = cljs.core.first(arglist__3340);
var a = cljs.core.first(cljs.core.next(arglist__3340));
var p__3335 = cljs.core.rest(cljs.core.next(arglist__3340));
return attr__delegate.call(this, $elem, a, p__3335);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__3341){
var vec__3342__3343 = p__3341;
var v__3344 = cljs.core.nth.call(null,vec__3342__3343,0,null);

var k__3345 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__3344)))
{return $elem.data(k__3345);
} else
{return $elem.data(k__3345,v__3344);
}
};
var data = function ($elem,k,var_args){
var p__3341 = null;
if (goog.isDef(var_args)) {
  p__3341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__3341);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__3346){
var $elem = cljs.core.first(arglist__3346);
var k = cljs.core.first(cljs.core.next(arglist__3346));
var p__3341 = cljs.core.rest(cljs.core.next(arglist__3346));
return data__delegate.call(this, $elem, k, p__3341);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__3347 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__3347);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__3348 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__3348);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__3349){
var vec__3350__3351 = p__3349;
var speed__3352 = cljs.core.nth.call(null,vec__3350__3351,0,null);
var on_finish__3353 = cljs.core.nth.call(null,vec__3350__3351,1,null);

return $elem.hide(speed__3352,on_finish__3353);
};
var hide = function ($elem,var_args){
var p__3349 = null;
if (goog.isDef(var_args)) {
  p__3349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__3349);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__3354){
var $elem = cljs.core.first(arglist__3354);
var p__3349 = cljs.core.rest(arglist__3354);
return hide__delegate.call(this, $elem, p__3349);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__3355){
var vec__3356__3357 = p__3355;
var speed__3358 = cljs.core.nth.call(null,vec__3356__3357,0,null);
var on_finish__3359 = cljs.core.nth.call(null,vec__3356__3357,1,null);

return $elem.show(speed__3358,on_finish__3359);
};
var show = function ($elem,var_args){
var p__3355 = null;
if (goog.isDef(var_args)) {
  p__3355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__3355);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__3360){
var $elem = cljs.core.first(arglist__3360);
var p__3355 = cljs.core.rest(arglist__3360);
return show__delegate.call(this, $elem, p__3355);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__3361){
var vec__3362__3363 = p__3361;
var speed__3364 = cljs.core.nth.call(null,vec__3362__3363,0,null);
var on_finish__3365 = cljs.core.nth.call(null,vec__3362__3363,1,null);

return $elem.toggle(speed__3364,on_finish__3365);
};
var toggle = function ($elem,var_args){
var p__3361 = null;
if (goog.isDef(var_args)) {
  p__3361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__3361);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__3366){
var $elem = cljs.core.first(arglist__3366);
var p__3361 = cljs.core.rest(arglist__3366);
return toggle__delegate.call(this, $elem, p__3361);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__3367){
var vec__3368__3369 = p__3367;
var speed__3370 = cljs.core.nth.call(null,vec__3368__3369,0,null);
var on_finish__3371 = cljs.core.nth.call(null,vec__3368__3369,1,null);

return $elem.fadeOut(speed__3370,on_finish__3371);
};
var fade_out = function ($elem,var_args){
var p__3367 = null;
if (goog.isDef(var_args)) {
  p__3367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__3367);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__3372){
var $elem = cljs.core.first(arglist__3372);
var p__3367 = cljs.core.rest(arglist__3372);
return fade_out__delegate.call(this, $elem, p__3367);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__3373){
var vec__3374__3375 = p__3373;
var speed__3376 = cljs.core.nth.call(null,vec__3374__3375,0,null);
var on_finish__3377 = cljs.core.nth.call(null,vec__3374__3375,1,null);

return $elem.fadeIn(speed__3376,on_finish__3377);
};
var fade_in = function ($elem,var_args){
var p__3373 = null;
if (goog.isDef(var_args)) {
  p__3373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__3373);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__3378){
var $elem = cljs.core.first(arglist__3378);
var p__3373 = cljs.core.rest(arglist__3378);
return fade_in__delegate.call(this, $elem, p__3373);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__3379){
var vec__3380__3381 = p__3379;
var speed__3382 = cljs.core.nth.call(null,vec__3380__3381,0,null);
var on_finish__3383 = cljs.core.nth.call(null,vec__3380__3381,1,null);

return $elem.slideUp(speed__3382,on_finish__3383);
};
var slide_up = function ($elem,var_args){
var p__3379 = null;
if (goog.isDef(var_args)) {
  p__3379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__3379);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__3384){
var $elem = cljs.core.first(arglist__3384);
var p__3379 = cljs.core.rest(arglist__3384);
return slide_up__delegate.call(this, $elem, p__3379);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__3385){
var vec__3386__3387 = p__3385;
var speed__3388 = cljs.core.nth.call(null,vec__3386__3387,0,null);
var on_finish__3389 = cljs.core.nth.call(null,vec__3386__3387,1,null);

return $elem.slideDown(speed__3388,on_finish__3389);
};
var slide_down = function ($elem,var_args){
var p__3385 = null;
if (goog.isDef(var_args)) {
  p__3385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__3385);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__3390){
var $elem = cljs.core.first(arglist__3390);
var p__3385 = cljs.core.rest(arglist__3390);
return slide_down__delegate.call(this, $elem, p__3385);
});
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__3391){
var vec__3392__3393 = p__3391;
var v__3394 = cljs.core.nth.call(null,vec__3392__3393,0,null);

if(cljs.core.truth_(v__3394))
{return $elem.val(v__3394);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__3391 = null;
if (goog.isDef(var_args)) {
  p__3391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__3391);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3395){
var $elem = cljs.core.first(arglist__3395);
var p__3391 = cljs.core.rest(arglist__3395);
return val__delegate.call(this, $elem, p__3391);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__3396,content,callback){
var vec__3397__3398 = p__3396;
var method__3399 = cljs.core.nth.call(null,vec__3397__3398,0,null);
var uri__3400 = cljs.core.nth.call(null,vec__3397__3398,1,null);

var params__3401 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__3399)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__3400,params__3401);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e)))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,e)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Unknown event type: ",e)));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__3402){
var vec__3403__3404 = p__3402;
var sel__3405 = cljs.core.nth.call(null,vec__3403__3404,0,null);
var data__3406 = cljs.core.nth.call(null,vec__3403__3404,1,null);
var handler__3407 = cljs.core.nth.call(null,vec__3403__3404,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__3405),data__3406,handler__3407);
};
var on = function ($elem,events,var_args){
var p__3402 = null;
if (goog.isDef(var_args)) {
  p__3402 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__3402);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__3408){
var $elem = cljs.core.first(arglist__3408);
var events = cljs.core.first(cljs.core.next(arglist__3408));
var p__3402 = cljs.core.rest(cljs.core.next(arglist__3408));
return on__delegate.call(this, $elem, events, p__3402);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__3409){
var vec__3410__3411 = p__3409;
var sel__3412 = cljs.core.nth.call(null,vec__3410__3411,0,null);
var data__3413 = cljs.core.nth.call(null,vec__3410__3411,1,null);
var handler__3414 = cljs.core.nth.call(null,vec__3410__3411,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__3412),data__3413,handler__3414);
};
var one = function ($elem,events,var_args){
var p__3409 = null;
if (goog.isDef(var_args)) {
  p__3409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__3409);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__3415){
var $elem = cljs.core.first(arglist__3415);
var events = cljs.core.first(cljs.core.next(arglist__3415));
var p__3409 = cljs.core.rest(cljs.core.next(arglist__3415));
return one__delegate.call(this, $elem, events, p__3409);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__3416){
var vec__3417__3418 = p__3416;
var sel__3419 = cljs.core.nth.call(null,vec__3417__3418,0,null);
var handler__3420 = cljs.core.nth.call(null,vec__3417__3418,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__3419),handler__3420);
};
var off = function ($elem,events,var_args){
var p__3416 = null;
if (goog.isDef(var_args)) {
  p__3416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__3416);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__3421){
var $elem = cljs.core.first(arglist__3421);
var events = cljs.core.first(cljs.core.next(arglist__3421));
var p__3416 = cljs.core.rest(cljs.core.next(arglist__3421));
return off__delegate.call(this, $elem, events, p__3416);
});
return off;
})()
;
