goog.provide('creation_platform.routes');
creation_platform.routes.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"projects","projects",-364845983)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["create",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
creation_platform.routes.on_navigate = (function creation_platform$routes$on_navigate(match,_){
if(cljs.core.truth_(match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814)], null))], null));
} else {
return null;
}
});
creation_platform.routes.init_routes_BANG_ = (function creation_platform$routes$init_routes_BANG_(){
return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(creation_platform.routes.routes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),creation_platform.routes.on_navigate], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});

//# sourceMappingURL=creation_platform.routes.js.map
