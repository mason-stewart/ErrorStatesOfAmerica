(defproject error-states-of-america "0.1.0-SNAPSHOT"
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [congomongo "0.1.9"]
                           [noir "1.2.1"]
                           [jayq "0.1.0-alpha2"]]
            :dev-dependencies [[lein-cljsbuild "0.1.8"]]
                        :cljsbuild
                        {
                         :source-path "src-cljs"
                         :repl-listen-port 9000
                         :compiler
                         {
                          :output-to "resources/public/js/cljs.js"
                          :optimizations :simple
                          :pretty-print true
                          }
                         }
            :main error-states-of-america.server)

