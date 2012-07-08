goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3142){
var vec__3143__3144 = p__3142;
var k__3145 = cljs.core.nth.call(null,vec__3143__3144,0,null);
var v__3146 = cljs.core.nth.call(null,vec__3143__3144,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3145.toLowerCase()),v__3146]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__3177 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3147 = this$;

if(cljs.core.truth_(and__3546__auto____3147))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3147;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____3148 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{var or__3548__auto____3149 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__3178 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____3150 = this$;

if(cljs.core.truth_(and__3546__auto____3150))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3150;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____3151 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{var or__3548__auto____3152 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3152))
{return or__3548__auto____3152;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3179 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3153 = this$;

if(cljs.core.truth_(and__3546__auto____3153))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3153;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____3154 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{var or__3548__auto____3155 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3155))
{return or__3548__auto____3155;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__3180 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3156 = this$;

if(cljs.core.truth_(and__3546__auto____3156))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3156;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____3157 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{var or__3548__auto____3158 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__3177.call(this,this$);
case  2 :
return connect__3178.call(this,this$,opt1);
case  3 :
return connect__3179.call(this,this$,opt1,opt2);
case  4 :
return connect__3180.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__3182 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____3159 = this$;

if(cljs.core.truth_(and__3546__auto____3159))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3159;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____3160 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{var or__3548__auto____3161 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3161))
{return or__3548__auto____3161;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3183 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3162 = this$;

if(cljs.core.truth_(and__3546__auto____3162))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3162;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____3163 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{var or__3548__auto____3164 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3164))
{return or__3548__auto____3164;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__3184 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3165 = this$;

if(cljs.core.truth_(and__3546__auto____3165))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3165;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____3166 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{var or__3548__auto____3167 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__3185 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____3168 = this$;

if(cljs.core.truth_(and__3546__auto____3168))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3168;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____3169 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{var or__3548__auto____3170 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__3186 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____3171 = this$;

if(cljs.core.truth_(and__3546__auto____3171))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3171;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____3172 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{var or__3548__auto____3173 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__3182.call(this,this$,opt);
case  3 :
return transmit__3183.call(this,this$,opt,opt2);
case  4 :
return transmit__3184.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__3185.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__3186.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____3174 = this$;

if(cljs.core.truth_(and__3546__auto____3174))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____3174;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____3175 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{var or__3548__auto____3176 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3188){
var vec__3189__3190 = p__3188;
var k__3191 = cljs.core.nth.call(null,vec__3189__3190,0,null);
var v__3192 = cljs.core.nth.call(null,vec__3189__3190,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3191.toLowerCase()),v__3192]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__3193 = null;
var G__3193__3194 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3193__3195 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3193__3196 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3193__3197 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3193__3198 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__3193 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__3193__3194.call(this,this$,uri);
case  3 :
return G__3193__3195.call(this,this$,uri,method);
case  4 :
return G__3193__3196.call(this,this$,uri,method,content);
case  5 :
return G__3193__3197.call(this,this$,uri,method,content,headers);
case  6 :
return G__3193__3198.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3193;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3200){
var vec__3201__3202 = p__3200;
var k__3203 = cljs.core.nth.call(null,vec__3201__3202,0,null);
var v__3204 = cljs.core.nth.call(null,vec__3201__3202,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3203.toLowerCase()),v__3204]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3211 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____3205 = this$;

if(cljs.core.truth_(and__3546__auto____3205))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3205;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____3206 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{var or__3548__auto____3207 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__3212 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____3208 = this$;

if(cljs.core.truth_(and__3546__auto____3208))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3208;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____3209 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__3211.call(this,this$,service_name,fn);
case  4 :
return register_service__3212.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__3214 = null;
var G__3214__3215 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__3214__3216 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__3214__3217 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__3214__3218 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__3214 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__3214__3215.call(this,this$);
case  2 :
return G__3214__3216.call(this,this$,on_connect_fn);
case  3 :
return G__3214__3217.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__3214__3218.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3214;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__3220 = null;
var G__3220__3221 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__3220__3222 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__3220 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__3220__3221.call(this,this$,service_name,fn);
case  4 :
return G__3220__3222.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3220;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__3233 = (function (){
var temp__3698__auto____3224 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____3224))
{var config__3225 = temp__3698__auto____3224;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__3225)));
} else
{return null;
}
});
var xpc_connection__3234 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__3226){
var vec__3227__3228 = p__3226;
var k__3229 = cljs.core.nth.call(null,vec__3227__3228,0,null);
var v__3230 = cljs.core.nth.call(null,vec__3227__3228,1,null);

var temp__3695__auto____3231 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__3229);

if(cljs.core.truth_(temp__3695__auto____3231))
{var field__3232 = temp__3695__auto____3231;

return cljs.core.assoc.call(null,sum,field__3232,v__3230);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__3233.call(this);
case  1 :
return xpc_connection__3234.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
