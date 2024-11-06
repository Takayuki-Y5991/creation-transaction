goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20458__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20460__i = 0, G__20460__a = new Array(arguments.length -  0);
while (G__20460__i < G__20460__a.length) {G__20460__a[G__20460__i] = arguments[G__20460__i + 0]; ++G__20460__i;}
  args = new cljs.core.IndexedSeq(G__20460__a,0,null);
} 
return G__20458__delegate.call(this,args);};
G__20458.cljs$lang$maxFixedArity = 0;
G__20458.cljs$lang$applyTo = (function (arglist__20461){
var args = cljs.core.seq(arglist__20461);
return G__20458__delegate(args);
});
G__20458.cljs$core$IFn$_invoke$arity$variadic = G__20458__delegate;
return G__20458;
})()
);

(o.error = (function() { 
var G__20462__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20464__i = 0, G__20464__a = new Array(arguments.length -  0);
while (G__20464__i < G__20464__a.length) {G__20464__a[G__20464__i] = arguments[G__20464__i + 0]; ++G__20464__i;}
  args = new cljs.core.IndexedSeq(G__20464__a,0,null);
} 
return G__20462__delegate.call(this,args);};
G__20462.cljs$lang$maxFixedArity = 0;
G__20462.cljs$lang$applyTo = (function (arglist__20465){
var args = cljs.core.seq(arglist__20465);
return G__20462__delegate(args);
});
G__20462.cljs$core$IFn$_invoke$arity$variadic = G__20462__delegate;
return G__20462;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
