(ns error-states-of-america.views.welcome
  (:require [error-states-of-america.views.common :as common]
            [noir.content.getting-started])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/welcome" []
         (common/layout
           [:p "Welcome to error-states-of-america"]))
