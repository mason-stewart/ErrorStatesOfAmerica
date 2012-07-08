(ns error-states-of-america
  (:use [jayq.core :only [$ css inner]])
  (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(def $interface ($ :#interface))

(-> $interface
  (css {:background "blue"})
  (inner "Loading!"))

(js/alert "ok!")