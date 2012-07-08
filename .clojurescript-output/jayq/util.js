goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__3071 = cljs.core.js_obj.call(null);

var G__3072__3073 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__3072__3073))
{var G__3075__3077 = cljs.core.first.call(null,G__3072__3073);
var vec__3076__3078 = G__3075__3077;
var k__3079 = cljs.core.nth.call(null,vec__3076__3078,0,null);
var v__3080 = cljs.core.nth.call(null,vec__3076__3078,1,null);
var G__3072__3081 = G__3072__3073;

var G__3075__3082 = G__3075__3077;
var G__3072__3083 = G__3072__3081;

while(true){
var vec__3084__3085 = G__3075__3082;
var k__3086 = cljs.core.nth.call(null,vec__3084__3085,0,null);
var v__3087 = cljs.core.nth.call(null,vec__3084__3085,1,null);
var G__3072__3088 = G__3072__3083;

(out__3071[cljs.core.name.call(null,k__3086)] = v__3087);
var temp__3698__auto____3089 = cljs.core.next.call(null,G__3072__3088);

if(cljs.core.truth_(temp__3698__auto____3089))
{var G__3072__3090 = temp__3698__auto____3089;

{
var G__3091 = cljs.core.first.call(null,G__3072__3090);
var G__3092 = G__3072__3090;
G__3075__3082 = G__3091;
G__3072__3083 = G__3092;
continue;
}
} else
{}
break;
}
} else
{}
return out__3071;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__3093 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__3093);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__3094){
var v = cljs.core.first(arglist__3094);
var text = cljs.core.rest(arglist__3094);
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
{return cljs.core.reduce.call(null,(function (m,p__3095){
var vec__3096__3097 = p__3095;
var k__3098 = cljs.core.nth.call(null,vec__3096__3097,0,null);
var v__3099 = cljs.core.nth.call(null,vec__3096__3097,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__3098),clj__GT_js.call(null,v__3099));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
