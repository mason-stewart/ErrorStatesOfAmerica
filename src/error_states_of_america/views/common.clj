(ns error-states-of-america.views.common
  (:use [noir.core :only [defpartial]]
        (jayq.core)
        [hiccup.page-helpers :only [include-js include-css html5]]))

(defpartial layout [& content]
            (html5
              [:head
                [:title "error-states-of-america"]
                (include-css "/css/bootstrap.min.css")
                (include-css "/css/main.css")]
              [:body
                [:div.background]
                content
                (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js")
                (include-js "/js/underscore-min.js")
                (include-js "/js/backbone-min.js")
                (include-js "/js/bootstrap.min.js")
                (include-js "/js/jquery.nouislider.min.js")
                (include-js "/js/main.js")
                ]))
