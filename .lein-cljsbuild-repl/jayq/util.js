goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__3422 = cljs.core.js_obj.call(null);

var G__3423__3424 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__3423__3424))
{var G__3426__3428 = cljs.core.first.call(null,G__3423__3424);
var vec__3427__3429 = G__3426__3428;
var k__3430 = cljs.core.nth.call(null,vec__3427__3429,0,null);
var v__3431 = cljs.core.nth.call(null,vec__3427__3429,1,null);
var G__3423__3432 = G__3423__3424;

var G__3426__3433 = G__3426__3428;
var G__3423__3434 = G__3423__3432;

while(true){
var vec__3435__3436 = G__3426__3433;
var k__3437 = cljs.core.nth.call(null,vec__3435__3436,0,null);
var v__3438 = cljs.core.nth.call(null,vec__3435__3436,1,null);
var G__3423__3439 = G__3423__3434;

(out__3422[cljs.core.name.call(null,k__3437)] = v__3438);
var temp__3698__auto____3440 = cljs.core.next.call(null,G__3423__3439);

if(cljs.core.truth_(temp__3698__auto____3440))
{var G__3423__3441 = temp__3698__auto____3440;

{
var G__3442 = cljs.core.first.call(null,G__3423__3441);
var G__3443 = G__3423__3441;
G__3426__3433 = G__3442;
G__3423__3434 = G__3443;
continue;
}
} else
{}
break;
}
} else
{}
return out__3422;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__3444 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__3444);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__3445){
var v = cljs.core.first(arglist__3445);
var text = cljs.core.rest(arglist__3445);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__3446){
var vec__3447__3448 = p__3446;
var k__3449 = cljs.core.nth.call(null,vec__3447__3448,0,null);
var v__3450 = cljs.core.nth.call(null,vec__3447__3448,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__3449),clj__GT_js.call(null,v__3450));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
