(ns creation-platform.events
  (:require
   [re-frame.core :as rf]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {:active-panel :home
    :greeting "Hello, Creation Platform"}))

(rf/reg-event-db
 :set-active-panel
 (fn [db [_ panel]]
   (assoc db :active-panel panel)))