(ns error-states-of-america
  (:use [jayq.core :only [$ css inner add-class]])
  (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(js/alert "ok, clojurscript compiled!")

