(ns error-states-of-america.server
  (:require [noir.server :as server]))

(server/load-views "src/error_states_of_america/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'error-states-of-america})))

