goog.provide('creation_platform.core');
creation_platform.core.mount_root = (function creation_platform$core$mount_root(){
var root_el = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creation_platform.views.main_panel], null),root_el);
});
creation_platform.core.init = (function creation_platform$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

creation_platform.routes.init_routes_BANG_();

return creation_platform.core.mount_root();
});

//# sourceMappingURL=creation_platform.core.js.map
