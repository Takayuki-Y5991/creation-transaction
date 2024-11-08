(ns creation-platform.core
  (:require
   [reagent.dom.client :as rdom]  ;; .client を追加
   [re-frame.core :as rf]
   [creation-platform.events]
   [creation-platform.subs]
   [creation-platform.routes :as routes]
   [creation-platform.views :as views]))

;; ルートクライアントを保持する atom を作成
(defonce root (atom nil))

(defn ^:dev/after-load mount-root []
  (when (nil? @root)
    (reset! root (rdom/create-root (js/document.getElementById "app"))))
  (rdom/render @root [views/main-panel]))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (routes/init-routes!)
  (mount-root))