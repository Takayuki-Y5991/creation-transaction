(ns creation-platform.routes
  (:require
   [re-frame.core :as rf]
   [reitit.frontend :as rtf]
   [reitit.frontend.easy :as rtfe]))

(def routes
  ["/"
   [""
    {:name :home
     :view :home}]
   ["projects"
    {:name :projects
     :view :projects}]
   ["create"
    {:name :create
     :view :create}]])

(defn on-navigate [match _]
  (when match
    (rf/dispatch [:set-active-panel (get-in match [:data :view])])))

(defn init-routes! []
  (rtfe/start!
   (rtf/router routes)
   {:on-navigate on-navigate}
   {:use-fragment false}))  ;; オプションマップとして渡す