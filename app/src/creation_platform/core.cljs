(ns creation-platform.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [creation-platform.events]
   [creation-platform.subs]
   [creation-platform.routes :as routes]
   [creation-platform.views :as views]))

(defn ^:dev/after-load mount-root []
  (let [root-el (.getElementById js/document "app")]
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (routes/init-routes!)
  (mount-root))