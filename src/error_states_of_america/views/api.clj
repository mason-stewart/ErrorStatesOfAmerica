(ns error-states-of-america.views.api
  (:require [error-states-of-america.views.common :as common]
            [noir.content.getting-started])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]])
  (:use somnium.congomongo))

  (defpage "/api-test" []
    (insert! :robots
             {:name "robby"})
    "Bam!")
