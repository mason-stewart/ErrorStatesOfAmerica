goog.provide('error_states_of_america');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
error_states_of_america.$interface = jayq.core.$.call(null,"﷐'#interface");
jayq.core.inner.call(null,jayq.core.css.call(null,error_states_of_america.$interface,cljs.core.ObjMap.fromObject(["﷐'background"],{"﷐'background":"blue"})),"Loading!");
alert.call(null,"ok!");
