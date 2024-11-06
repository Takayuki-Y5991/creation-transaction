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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23403){
var map__23404 = p__23403;
var map__23404__$1 = cljs.core.__destructure_map(map__23404);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23404__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23404__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23404__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23404__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__23408_23448 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23409_23449 = null;
var count__23410_23450 = (0);
var i__23411_23451 = (0);
while(true){
if((i__23411_23451 < count__23410_23450)){
var vec__23427_23452 = chunk__23409_23449.cljs$core$IIndexed$_nth$arity$2(null, i__23411_23451);
var k_23453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23427_23452,(0),null);
var cb_23454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23427_23452,(1),null);
try{var G__23431_23457 = cljs.core.deref(re_frame.trace.traces);
(cb_23454.cljs$core$IFn$_invoke$arity$1 ? cb_23454.cljs$core$IFn$_invoke$arity$1(G__23431_23457) : cb_23454.call(null, G__23431_23457));
}catch (e23430){var e_23460 = e23430;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23453,"while storing",cljs.core.deref(re_frame.trace.traces),e_23460], 0));
}

var G__23461 = seq__23408_23448;
var G__23462 = chunk__23409_23449;
var G__23463 = count__23410_23450;
var G__23464 = (i__23411_23451 + (1));
seq__23408_23448 = G__23461;
chunk__23409_23449 = G__23462;
count__23410_23450 = G__23463;
i__23411_23451 = G__23464;
continue;
} else {
var temp__5804__auto___23465 = cljs.core.seq(seq__23408_23448);
if(temp__5804__auto___23465){
var seq__23408_23466__$1 = temp__5804__auto___23465;
if(cljs.core.chunked_seq_QMARK_(seq__23408_23466__$1)){
var c__5525__auto___23467 = cljs.core.chunk_first(seq__23408_23466__$1);
var G__23468 = cljs.core.chunk_rest(seq__23408_23466__$1);
var G__23469 = c__5525__auto___23467;
var G__23470 = cljs.core.count(c__5525__auto___23467);
var G__23471 = (0);
seq__23408_23448 = G__23468;
chunk__23409_23449 = G__23469;
count__23410_23450 = G__23470;
i__23411_23451 = G__23471;
continue;
} else {
var vec__23435_23472 = cljs.core.first(seq__23408_23466__$1);
var k_23473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23435_23472,(0),null);
var cb_23474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23435_23472,(1),null);
try{var G__23439_23475 = cljs.core.deref(re_frame.trace.traces);
(cb_23474.cljs$core$IFn$_invoke$arity$1 ? cb_23474.cljs$core$IFn$_invoke$arity$1(G__23439_23475) : cb_23474.call(null, G__23439_23475));
}catch (e23438){var e_23476 = e23438;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23473,"while storing",cljs.core.deref(re_frame.trace.traces),e_23476], 0));
}

var G__23477 = cljs.core.next(seq__23408_23466__$1);
var G__23478 = null;
var G__23479 = (0);
var G__23480 = (0);
seq__23408_23448 = G__23477;
chunk__23409_23449 = G__23478;
count__23410_23450 = G__23479;
i__23411_23451 = G__23480;
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
