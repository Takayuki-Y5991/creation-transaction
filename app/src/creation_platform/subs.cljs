(ns creation-platform.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 :active-panel
 (fn [db _]
   (:active-panel db)))

(rf/reg-sub
 :greeting
 (fn [db _]
   (:greeting db)))