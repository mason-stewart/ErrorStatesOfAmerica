(ns error-states-of-america
  (:use [jayq.core :only [$ css inner]]))

(def $interface ($ :#interface))

(-> $interface
  (css {:background "blue"})
  (inner "Loading!"))

(js/alert "hey!")