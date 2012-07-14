(ns error-states-of-america.views.app
  (:require [error-states-of-america.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
        (common/layout
          [:div.logo]
          [:div.container  
            [:div.row
              [:div.span3.controls
                [:div.controls-header
                  [:span ".error"]
                  [:i.icon-chevron-down.icon-white]]
                [:div.controls-body
                  [:h3 "Position"]
                  [:div.btn-group.position-buttons {:data-toggle "buttons-radio"}
                    [:button.btn.active "Top"]
                    [:button.btn "Right"]
                    [:button.btn "Bottom"]
                    [:button.btn "Left"]]
                  [:h3 "Radius"
                    [:span.radius-value "50px"]]
                  [:div.radius-slider.sliderbar]
                  [:h3 "Padding"
                    [:span.padding-value "20px"]]
                  [:div.padding-slider.sliderbar]
                  [:h3 "Margin"
                    [:span.margin-value "10px"]]
                  [:div.margin-slider.sliderbar]]]
              [:div.sandbox.span5.offset2
                [:form
                  [:input.span5 {:type "text" :placeholder "hey whoa hold on"}]
                  [:input.span5 {:type "text" :placeholder "hey whoa hold on"}]
                  [:input.span5 {:type "text" :placeholder "hey whoa hold on"}]
                  [:input.span5 {:type "text" :placeholder "hey whoa hold on"}]]]
            ]]
        ))
