(ns error-states-of-america.views.app
  (:require [error-states-of-america.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
           [:p "hye... to error-states-of-america"]
           [:div#interface "what"]))
