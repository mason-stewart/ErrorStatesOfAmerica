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
{var temp__3695__auto____2968 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____2968))
{var cm__2969 = temp__3695__auto____2968;

return cljs.core.str.call(null,"[crateGroup=",cm__2969,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("﷐'else"))
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
var $__delegate = function (sel,p__2970){
var vec__2971__2972 = p__2970;
var context__2973 = cljs.core.nth.call(null,vec__2971__2972,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__2973)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__2973);
}
};
var $ = function (sel,var_args){
var p__2970 = null;
if (goog.isDef(var_args)) {
  p__2970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__2970);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__2974){
var sel = cljs.core.first(arglist__2974);
var p__2970 = cljs.core.rest(arglist__2974);
return $__delegate.call(this, sel, p__2970);
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
var G__2976 = null;
var G__2976__2977 = (function (this$,k){
var or__3548__auto____2975 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____2975))
{return or__3548__auto____2975;
} else
{return null;
}
});
var G__2976__2978 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__2976 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__2976__2977.call(this,this$,k);
case  3 :
return G__2976__2978.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2976;
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
var G__2980 = null;
var G__2980__2981 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2980__2982 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2980 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2980__2981.call(this,_,k);
case  3 :
return G__2980__2982.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2980;
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
var attr__delegate = function ($elem,a,p__2984){
var vec__2985__2986 = p__2984;
var v__2987 = cljs.core.nth.call(null,vec__2985__2986,0,null);

var a__2988 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__2987)))
{return $elem.attr(a__2988);
} else
{return $elem.attr(a__2988,v__2987);
}
};
var attr = function ($elem,a,var_args){
var p__2984 = null;
if (goog.isDef(var_args)) {
  p__2984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__2984);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__2989){
var $elem = cljs.core.first(arglist__2989);
var a = cljs.core.first(cljs.core.next(arglist__2989));
var p__2984 = cljs.core.rest(cljs.core.next(arglist__2989));
return attr__delegate.call(this, $elem, a, p__2984);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__2990){
var vec__2991__2992 = p__2990;
var v__2993 = cljs.core.nth.call(null,vec__2991__2992,0,null);

var k__2994 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__2993)))
{return $elem.data(k__2994);
} else
{return $elem.data(k__2994,v__2993);
}
};
var data = function ($elem,k,var_args){
var p__2990 = null;
if (goog.isDef(var_args)) {
  p__2990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__2990);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__2995){
var $elem = cljs.core.first(arglist__2995);
var k = cljs.core.first(cljs.core.next(arglist__2995));
var p__2990 = cljs.core.rest(cljs.core.next(arglist__2995));
return data__delegate.call(this, $elem, k, p__2990);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__2996 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__2996);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__2997 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__2997);
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
var hide__delegate = function ($elem,p__2998){
var vec__2999__3000 = p__2998;
var speed__3001 = cljs.core.nth.call(null,vec__2999__3000,0,null);
var on_finish__3002 = cljs.core.nth.call(null,vec__2999__3000,1,null);

return $elem.hide(speed__3001,on_finish__3002);
};
var hide = function ($elem,var_args){
var p__2998 = null;
if (goog.isDef(var_args)) {
  p__2998 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__2998);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__3003){
var $elem = cljs.core.first(arglist__3003);
var p__2998 = cljs.core.rest(arglist__3003);
return hide__delegate.call(this, $elem, p__2998);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__3004){
var vec__3005__3006 = p__3004;
var speed__3007 = cljs.core.nth.call(null,vec__3005__3006,0,null);
var on_finish__3008 = cljs.core.nth.call(null,vec__3005__3006,1,null);

return $elem.show(speed__3007,on_finish__3008);
};
var show = function ($elem,var_args){
var p__3004 = null;
if (goog.isDef(var_args)) {
  p__3004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__3004);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__3009){
var $elem = cljs.core.first(arglist__3009);
var p__3004 = cljs.core.rest(arglist__3009);
return show__delegate.call(this, $elem, p__3004);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__3010){
var vec__3011__3012 = p__3010;
var speed__3013 = cljs.core.nth.call(null,vec__3011__3012,0,null);
var on_finish__3014 = cljs.core.nth.call(null,vec__3011__3012,1,null);

return $elem.toggle(speed__3013,on_finish__3014);
};
var toggle = function ($elem,var_args){
var p__3010 = null;
if (goog.isDef(var_args)) {
  p__3010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__3010);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__3015){
var $elem = cljs.core.first(arglist__3015);
var p__3010 = cljs.core.rest(arglist__3015);
return toggle__delegate.call(this, $elem, p__3010);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__3016){
var vec__3017__3018 = p__3016;
var speed__3019 = cljs.core.nth.call(null,vec__3017__3018,0,null);
var on_finish__3020 = cljs.core.nth.call(null,vec__3017__3018,1,null);

return $elem.fadeOut(speed__3019,on_finish__3020);
};
var fade_out = function ($elem,var_args){
var p__3016 = null;
if (goog.isDef(var_args)) {
  p__3016 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__3016);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__3021){
var $elem = cljs.core.first(arglist__3021);
var p__3016 = cljs.core.rest(arglist__3021);
return fade_out__delegate.call(this, $elem, p__3016);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__3022){
var vec__3023__3024 = p__3022;
var speed__3025 = cljs.core.nth.call(null,vec__3023__3024,0,null);
var on_finish__3026 = cljs.core.nth.call(null,vec__3023__3024,1,null);

return $elem.fadeIn(speed__3025,on_finish__3026);
};
var fade_in = function ($elem,var_args){
var p__3022 = null;
if (goog.isDef(var_args)) {
  p__3022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__3022);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__3027){
var $elem = cljs.core.first(arglist__3027);
var p__3022 = cljs.core.rest(arglist__3027);
return fade_in__delegate.call(this, $elem, p__3022);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__3028){
var vec__3029__3030 = p__3028;
var speed__3031 = cljs.core.nth.call(null,vec__3029__3030,0,null);
var on_finish__3032 = cljs.core.nth.call(null,vec__3029__3030,1,null);

return $elem.slideUp(speed__3031,on_finish__3032);
};
var slide_up = function ($elem,var_args){
var p__3028 = null;
if (goog.isDef(var_args)) {
  p__3028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__3028);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__3033){
var $elem = cljs.core.first(arglist__3033);
var p__3028 = cljs.core.rest(arglist__3033);
return slide_up__delegate.call(this, $elem, p__3028);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__3034){
var vec__3035__3036 = p__3034;
var speed__3037 = cljs.core.nth.call(null,vec__3035__3036,0,null);
var on_finish__3038 = cljs.core.nth.call(null,vec__3035__3036,1,null);

return $elem.slideDown(speed__3037,on_finish__3038);
};
var slide_down = function ($elem,var_args){
var p__3034 = null;
if (goog.isDef(var_args)) {
  p__3034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__3034);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__3039){
var $elem = cljs.core.first(arglist__3039);
var p__3034 = cljs.core.rest(arglist__3039);
return slide_down__delegate.call(this, $elem, p__3034);
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
var val__delegate = function ($elem,p__3040){
var vec__3041__3042 = p__3040;
var v__3043 = cljs.core.nth.call(null,vec__3041__3042,0,null);

if(cljs.core.truth_(v__3043))
{return $elem.val(v__3043);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__3040 = null;
if (goog.isDef(var_args)) {
  p__3040 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__3040);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3044){
var $elem = cljs.core.first(arglist__3044);
var p__3040 = cljs.core.rest(arglist__3044);
return val__delegate.call(this, $elem, p__3040);
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
jayq.core.xhr = (function xhr(p__3045,content,callback){
var vec__3046__3047 = p__3045;
var method__3048 = cljs.core.nth.call(null,vec__3046__3047,0,null);
var uri__3049 = cljs.core.nth.call(null,vec__3046__3047,1,null);

var params__3050 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'data","﷐'success"],{"﷐'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__3048)),"﷐'data":jayq.util.clj__GT_js.call(null,content),"﷐'success":callback}));

return jQuery.ajax(uri__3049,params__3050);
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
{if(cljs.core.truth_("﷐'else"))
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
var on__delegate = function ($elem,events,p__3051){
var vec__3052__3053 = p__3051;
var sel__3054 = cljs.core.nth.call(null,vec__3052__3053,0,null);
var data__3055 = cljs.core.nth.call(null,vec__3052__3053,1,null);
var handler__3056 = cljs.core.nth.call(null,vec__3052__3053,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__3054),data__3055,handler__3056);
};
var on = function ($elem,events,var_args){
var p__3051 = null;
if (goog.isDef(var_args)) {
  p__3051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__3051);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__3057){
var $elem = cljs.core.first(arglist__3057);
var events = cljs.core.first(cljs.core.next(arglist__3057));
var p__3051 = cljs.core.rest(cljs.core.next(arglist__3057));
return on__delegate.call(this, $elem, events, p__3051);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__3058){
var vec__3059__3060 = p__3058;
var sel__3061 = cljs.core.nth.call(null,vec__3059__3060,0,null);
var data__3062 = cljs.core.nth.call(null,vec__3059__3060,1,null);
var handler__3063 = cljs.core.nth.call(null,vec__3059__3060,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__3061),data__3062,handler__3063);
};
var one = function ($elem,events,var_args){
var p__3058 = null;
if (goog.isDef(var_args)) {
  p__3058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__3058);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__3064){
var $elem = cljs.core.first(arglist__3064);
var events = cljs.core.first(cljs.core.next(arglist__3064));
var p__3058 = cljs.core.rest(cljs.core.next(arglist__3064));
return one__delegate.call(this, $elem, events, p__3058);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__3065){
var vec__3066__3067 = p__3065;
var sel__3068 = cljs.core.nth.call(null,vec__3066__3067,0,null);
var handler__3069 = cljs.core.nth.call(null,vec__3066__3067,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__3068),handler__3069);
};
var off = function ($elem,events,var_args){
var p__3065 = null;
if (goog.isDef(var_args)) {
  p__3065 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__3065);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__3070){
var $elem = cljs.core.first(arglist__3070);
var events = cljs.core.first(cljs.core.next(arglist__3070));
var p__3065 = cljs.core.rest(cljs.core.next(arglist__3070));
return off__delegate.call(this, $elem, events, p__3065);
});
return off;
})()
;
