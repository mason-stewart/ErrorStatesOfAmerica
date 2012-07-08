(ns error-states-of-america.server
  (:require [noir.server :as server])
  (:use somnium.congomongo))

(server/load-views "src/error_states_of_america/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]

    (server/start port {:mode mode
                        :ns 'error-states-of-america})

    (defn split-mongo-url [url]
      "Parses mongodb url from heroku, eg. mongodb://user:pass@localhost:1234/db"
      (let [matcher (re-matcher #"^.*://(.*?):(.*?)@(.*?):(\d+)/(.*)$" url)] ;; Setup the regex.
        (when (.find matcher) ;; Check if it matches.
          (zipmap [:match :user :pass :host :port :db] (re-groups matcher))))) ;; Construct an options map.

    (if (dev-mode?)
      (def conn
        (make-connection "error_states"
                         :host "127.0.0.1"
                         :port 27017))
      (let [config (split-mongo-url (get (System/env) "MONGOHQ_URL"))]
        (def conn
          (make-connection "error_states"
                           :db (:db config)
                           :host (:host config)
                           :port (Integer. (:port config))))
        (authenticate conn (:user config) (:pass config))

    (set-connection! conn)))))