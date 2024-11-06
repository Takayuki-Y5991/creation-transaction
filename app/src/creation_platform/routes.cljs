(ns creation-platform.routes
  (:require
   [re-frame.core :as rf]
   [reitit.frontend :as rtf]
   [reitit.frontend.easy :as rtfe]
   [reitit.coercion.spec :as rcs]))

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

(defn init-routes! []
  (rtfe/start!
   (rtf/router routes {:data {:coercion rcs/coercion}})
   {:on-navigate (fn [m]
                   (rf/dispatch [:set-active-panel (get-in m [:data :view])]))}))