goog.provide('creation_platform.views');
creation_platform.views.home_panel = (function creation_platform$views$home_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4.py-8","div.container.mx-auto.px-4.py-8",857195440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-4xl.font-bold.mb-4","h1.text-4xl.font-bold.mb-4",-1439675291),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"greeting","greeting",462222107)], null)))], null)], null);
});
creation_platform.views.projects_panel = (function creation_platform$views$projects_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4.py-8","div.container.mx-auto.px-4.py-8",857195440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-4xl.font-bold.mb-4","h1.text-4xl.font-bold.mb-4",-1439675291),"Projects"], null)], null);
});
creation_platform.views.create_panel = (function creation_platform$views$create_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4.py-8","div.container.mx-auto.px-4.py-8",857195440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-4xl.font-bold.mb-4","h1.text-4xl.font-bold.mb-4",-1439675291),"Create New Project"], null)], null);
});
creation_platform.views.main_panel = (function creation_platform$views$main_panel(){
var active_panel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.bg-white.shadow.mb-8","nav.bg-white.shadow.mb-8",-466404161),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4","div.container.mx-auto.px-4",903284582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.h-16","div.flex.justify-between.h-16",1122838278),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-8","div.flex.space-x-8",-677542910),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline-flex.items-center.px-1.pt-1.text-gray-900.text-sm.font-medium","a.inline-flex.items-center.px-1.pt-1.text-gray-900.text-sm.font-medium",-1631982169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline-flex.items-center.px-1.pt-1.text-gray-500.hover:text-gray-900.text-sm.font-medium","a.inline-flex.items-center.px-1.pt-1.text-gray-500.hover:text-gray-900.text-sm.font-medium",800662193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/projects"], null),"Projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline-flex.items-center.px-1.pt-1.text-gray-500.hover:text-gray-900.text-sm.font-medium","a.inline-flex.items-center.px-1.pt-1.text-gray-500.hover:text-gray-900.text-sm.font-medium",800662193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/create"], null),"Create"], null)], null)], null)], null)], null),(function (){var G__27059 = active_panel;
var G__27059__$1 = (((G__27059 instanceof cljs.core.Keyword))?G__27059.fqn:null);
switch (G__27059__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creation_platform.views.home_panel], null);

break;
case "projects":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creation_platform.views.projects_panel], null);

break;
case "create":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creation_platform.views.create_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creation_platform.views.home_panel], null);

}
})()], null);
});

//# sourceMappingURL=creation_platform.views.js.map
