goog.provide('creation_platform.core');
if((typeof creation_platform !== 'undefined') && (typeof creation_platform.core !== 'undefined') && (typeof creation_platform.core.root !== 'undefined')){
} else {
creation_platform.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
creation_platform.core.mount_root = (function creation_platform$core$mount_root(){
if((cljs.core.deref(creation_platform.core.root) == null)){
cljs.core.reset_BANG_(creation_platform.core.root,reagent.dom.client.create_root(document.getElementById("app")));
} else {
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(creation_platform.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creation_platform.views.main_panel], null));
});
creation_platform.core.init = (function creation_platform$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

creation_platform.routes.init_routes_BANG_();

return creation_platform.core.mount_root();
});

//# sourceMappingURL=creation_platform.core.js.map
