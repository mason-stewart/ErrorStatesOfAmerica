goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.repl_print = (function repl_print(data){
var temp__3695__auto____3129 = cljs.core.deref.call(null,clojure.browser.repl.xpc_connection);

if(cljs.core.truth_(temp__3695__auto____3129))
{var conn__3130 = temp__3695__auto____3129;

return clojure.browser.net.transmit.call(null,conn__3130,"﷐'print",cljs.core.pr_str.call(null,data));
} else
{return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){
var result__3133 = (function (){try{return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value"],{"﷐'status":"﷐'success","﷐'value":cljs.core.str.call(null,eval(block))});
}catch (e3131){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e3131)))
{var e__3132 = e3131;

return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value","﷐'stacktrace"],{"﷐'status":"﷐'exception","﷐'value":cljs.core.pr_str.call(null,e__3132),"﷐'stacktrace":(cljs.core.truth_(e__3132.hasOwnProperty("stack"))?e__3132.stack:"No stacktrace available.")});
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3131;
} else
{return null;
}
}
}})();

return cljs.core.pr_str.call(null,result__3133);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__3135 = (function (url,data){
return send_print.call(null,url,data,0);
});
var send_print__3136 = (function (url,data,n){
var conn__3134 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,conn__3134,"﷐'error",(function (_){
if(cljs.core.truth_((n < 10)))
{return send_print.call(null,url,data,(n + 1));
} else
{return console.log(cljs.core.str.call(null,"Could not send ",data," after ",n," attempts."));
}
}));
return clojure.browser.net.transmit.call(null,conn__3134,url,"POST",data,null,0);
});
send_print = function(url,data,n){
switch(arguments.length){
case  2 :
return send_print__3135.call(this,url,data);
case  3 :
return send_print__3136.call(this,url,data,n);
}
throw('Invalid arity: ' + arguments.length);
};
return send_print;
})()
;
clojure.browser.repl.order = cljs.core.atom.call(null,0);
clojure.browser.repl.wrap_message = (function wrap_message(t,data){
return cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'content","﷐'order"],{"﷐'type":t,"﷐'content":data,"﷐'order":cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)}));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__3695__auto____3138 = clojure.browser.net.xpc_connection.call(null);

if(cljs.core.truth_(temp__3695__auto____3138))
{var repl_connection__3139 = temp__3695__auto____3138;

var connection__3140 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,connection__3140,"﷐'success",(function (e){
return clojure.browser.net.transmit.call(null,repl_connection__3139,"﷐'evaluate-javascript",e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection__3139,"﷐'send-result",(function (data){
return clojure.browser.repl.send_result.call(null,connection__3140,url,clojure.browser.repl.wrap_message.call(null,"﷐'result",data));
}));
clojure.browser.net.register_service.call(null,repl_connection__3139,"﷐'print",(function (data){
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,"﷐'print",data));
}));
clojure.browser.net.connect.call(null,repl_connection__3139,cljs.core.constantly.call(null,null));
return setTimeout.call(null,(function (){
return clojure.browser.repl.send_result.call(null,connection__3140,url,clojure.browser.repl.wrap_message.call(null,"﷐'ready","ready"));
}),50);
} else
{return alert.call(null,"No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){
var repl_connection__3141 = clojure.browser.net.xpc_connection.call(null,cljs.core.ObjMap.fromObject(["﷐'peer_uri"],{"﷐'peer_uri":repl_server_url}));

cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection__3141));
clojure.browser.net.register_service.call(null,repl_connection__3141,"﷐'evaluate-javascript",(function (js){
return clojure.browser.net.transmit.call(null,repl_connection__3141,"﷐'send-result",clojure.browser.repl.evaluate_javascript.call(null,repl_connection__3141,js));
}));
return clojure.browser.net.connect.call(null,repl_connection__3141,cljs.core.constantly.call(null,null),(function (iframe){
return iframe.style.display = "none";
}));
});
