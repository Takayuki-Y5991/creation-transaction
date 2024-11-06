(ns creation-platform.views
  (:require
   [re-frame.core :as rf]))

(defn home-panel []
  [:div.container.mx-auto.px-4.py-8
   [:h1.text-4xl.font-bold.mb-4 @(rf/subscribe [:greeting])]])

(defn projects-panel []
  [:div.container.mx-auto.px-4.py-8
   [:h1.text-4xl.font-bold.mb-4 "Projects"]])

(defn create-panel []
  [:div.container.mx-auto.px-4.py-8
   [:h1.text-4xl.font-bold.mb-4 "Create New Project"]])

(defn main-panel []
  (let [active-panel @(rf/subscribe [:active-panel])]
    [:div
     [:nav.bg-white.shadow.mb-8
      [:div.container.mx-auto.px-4
       [:div.flex.justify-between.h-16
        [:div.flex.space-x-8
         [:a.inline-flex.items-center.px-1.pt-1.text-gray-900.text-sm.font-medium
          {:href "/"} "Home"]
         [:a.inline-flex.items-center.px-1.pt-1.text-gray-500.hover:text-gray-900.text-sm.font-medium
          {:href "/projects"} "Projects"]
         [:a.inline-flex.items-center.px-1.pt-1.text-gray-500.hover:text-gray-900.text-sm.font-medium
          {:href "/create"} "Create"]]]]]
     (case active-panel
       :home [home-panel]
       :projects [projects-panel]
       :create [create-panel]
       [home-panel])]))