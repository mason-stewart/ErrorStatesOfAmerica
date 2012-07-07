(ns error-states-of-america.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "error-states-of-america"]
               (include-css "/css/reset.css")]
              [:body
               [:div#wrapper
                content]]))
