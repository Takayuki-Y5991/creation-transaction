goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__28383){
var map__28384 = p__28383;
var map__28384__$1 = cljs.core.__destructure_map(map__28384);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__28388_28440 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__28389_28441 = null;
var count__28390_28442 = (0);
var i__28391_28443 = (0);
while(true){
if((i__28391_28443 < count__28390_28442)){
var vec__28404_28444 = chunk__28389_28441.cljs$core$IIndexed$_nth$arity$2(null, i__28391_28443);
var k_28445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28404_28444,(0),null);
var cb_28446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28404_28444,(1),null);
try{var G__28409_28447 = cljs.core.deref(re_frame.trace.traces);
(cb_28446.cljs$core$IFn$_invoke$arity$1 ? cb_28446.cljs$core$IFn$_invoke$arity$1(G__28409_28447) : cb_28446.call(null, G__28409_28447));
}catch (e28407){var e_28448 = e28407;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_28445,"while storing",cljs.core.deref(re_frame.trace.traces),e_28448], 0));
}

var G__28453 = seq__28388_28440;
var G__28454 = chunk__28389_28441;
var G__28455 = count__28390_28442;
var G__28456 = (i__28391_28443 + (1));
seq__28388_28440 = G__28453;
chunk__28389_28441 = G__28454;
count__28390_28442 = G__28455;
i__28391_28443 = G__28456;
continue;
} else {
var temp__5804__auto___28457 = cljs.core.seq(seq__28388_28440);
if(temp__5804__auto___28457){
var seq__28388_28458__$1 = temp__5804__auto___28457;
if(cljs.core.chunked_seq_QMARK_(seq__28388_28458__$1)){
var c__5525__auto___28459 = cljs.core.chunk_first(seq__28388_28458__$1);
var G__28460 = cljs.core.chunk_rest(seq__28388_28458__$1);
var G__28461 = c__5525__auto___28459;
var G__28462 = cljs.core.count(c__5525__auto___28459);
var G__28463 = (0);
seq__28388_28440 = G__28460;
chunk__28389_28441 = G__28461;
count__28390_28442 = G__28462;
i__28391_28443 = G__28463;
continue;
} else {
var vec__28423_28464 = cljs.core.first(seq__28388_28458__$1);
var k_28465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423_28464,(0),null);
var cb_28466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423_28464,(1),null);
try{var G__28427_28467 = cljs.core.deref(re_frame.trace.traces);
(cb_28466.cljs$core$IFn$_invoke$arity$1 ? cb_28466.cljs$core$IFn$_invoke$arity$1(G__28427_28467) : cb_28466.call(null, G__28427_28467));
}catch (e28426){var e_28468 = e28426;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_28465,"while storing",cljs.core.deref(re_frame.trace.traces),e_28468], 0));
}

var G__28469 = cljs.core.next(seq__28388_28458__$1);
var G__28470 = null;
var G__28471 = (0);
var G__28472 = (0);
seq__28388_28440 = G__28469;
chunk__28389_28441 = G__28470;
count__28390_28442 = G__28471;
i__28391_28443 = G__28472;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
