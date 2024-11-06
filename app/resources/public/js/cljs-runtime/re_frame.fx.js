goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24043 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24044 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24044);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24272 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24272)){
var new_db_24273 = temp__5804__auto___24272;
var fexpr__24049_24274 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24049_24274.cljs$core$IFn$_invoke$arity$1 ? fexpr__24049_24274.cljs$core$IFn$_invoke$arity$1(new_db_24273) : fexpr__24049_24274.call(null, new_db_24273));
} else {
}

var seq__24050 = cljs.core.seq(effects_without_db);
var chunk__24051 = null;
var count__24052 = (0);
var i__24053 = (0);
while(true){
if((i__24053 < count__24052)){
var vec__24070 = chunk__24051.cljs$core$IIndexed$_nth$arity$2(null, i__24053);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(1),null);
var temp__5802__auto___24275 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24275)){
var effect_fn_24276 = temp__5802__auto___24275;
(effect_fn_24276.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24276.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24276.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24277 = seq__24050;
var G__24278 = chunk__24051;
var G__24279 = count__24052;
var G__24280 = (i__24053 + (1));
seq__24050 = G__24277;
chunk__24051 = G__24278;
count__24052 = G__24279;
i__24053 = G__24280;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24050);
if(temp__5804__auto__){
var seq__24050__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24050__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24050__$1);
var G__24281 = cljs.core.chunk_rest(seq__24050__$1);
var G__24282 = c__5525__auto__;
var G__24283 = cljs.core.count(c__5525__auto__);
var G__24284 = (0);
seq__24050 = G__24281;
chunk__24051 = G__24282;
count__24052 = G__24283;
i__24053 = G__24284;
continue;
} else {
var vec__24080 = cljs.core.first(seq__24050__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24080,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24080,(1),null);
var temp__5802__auto___24285 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24285)){
var effect_fn_24286 = temp__5802__auto___24285;
(effect_fn_24286.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24286.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24286.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24287 = cljs.core.next(seq__24050__$1);
var G__24288 = null;
var G__24289 = (0);
var G__24290 = (0);
seq__24050 = G__24287;
chunk__24051 = G__24288;
count__24052 = G__24289;
i__24053 = G__24290;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23375__auto___24292 = re_frame.interop.now();
var duration__23376__auto___24293 = (end__23375__auto___24292 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23376__auto___24293,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23375__auto___24292);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24043);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24294 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24294)){
var new_db_24296 = temp__5804__auto___24294;
var fexpr__24091_24298 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24091_24298.cljs$core$IFn$_invoke$arity$1 ? fexpr__24091_24298.cljs$core$IFn$_invoke$arity$1(new_db_24296) : fexpr__24091_24298.call(null, new_db_24296));
} else {
}

var seq__24092 = cljs.core.seq(effects_without_db);
var chunk__24093 = null;
var count__24094 = (0);
var i__24095 = (0);
while(true){
if((i__24095 < count__24094)){
var vec__24108 = chunk__24093.cljs$core$IIndexed$_nth$arity$2(null, i__24095);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24108,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24108,(1),null);
var temp__5802__auto___24299 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24299)){
var effect_fn_24301 = temp__5802__auto___24299;
(effect_fn_24301.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24301.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24301.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24304 = seq__24092;
var G__24305 = chunk__24093;
var G__24306 = count__24094;
var G__24307 = (i__24095 + (1));
seq__24092 = G__24304;
chunk__24093 = G__24305;
count__24094 = G__24306;
i__24095 = G__24307;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24092);
if(temp__5804__auto__){
var seq__24092__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24092__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24092__$1);
var G__24308 = cljs.core.chunk_rest(seq__24092__$1);
var G__24309 = c__5525__auto__;
var G__24310 = cljs.core.count(c__5525__auto__);
var G__24311 = (0);
seq__24092 = G__24308;
chunk__24093 = G__24309;
count__24094 = G__24310;
i__24095 = G__24311;
continue;
} else {
var vec__24125 = cljs.core.first(seq__24092__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24125,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24125,(1),null);
var temp__5802__auto___24312 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24312)){
var effect_fn_24313 = temp__5802__auto___24312;
(effect_fn_24313.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24313.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24313.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24314 = cljs.core.next(seq__24092__$1);
var G__24315 = null;
var G__24316 = (0);
var G__24317 = (0);
seq__24092 = G__24314;
chunk__24093 = G__24315;
count__24094 = G__24316;
i__24095 = G__24317;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24143){
var map__24144 = p__24143;
var map__24144__$1 = cljs.core.__destructure_map(map__24144);
var effect = map__24144__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24144__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24144__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24145 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24146 = null;
var count__24147 = (0);
var i__24148 = (0);
while(true){
if((i__24148 < count__24147)){
var effect = chunk__24146.cljs$core$IIndexed$_nth$arity$2(null, i__24148);
re_frame.fx.dispatch_later(effect);


var G__24321 = seq__24145;
var G__24322 = chunk__24146;
var G__24323 = count__24147;
var G__24324 = (i__24148 + (1));
seq__24145 = G__24321;
chunk__24146 = G__24322;
count__24147 = G__24323;
i__24148 = G__24324;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24145);
if(temp__5804__auto__){
var seq__24145__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24145__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24145__$1);
var G__24325 = cljs.core.chunk_rest(seq__24145__$1);
var G__24326 = c__5525__auto__;
var G__24327 = cljs.core.count(c__5525__auto__);
var G__24328 = (0);
seq__24145 = G__24325;
chunk__24146 = G__24326;
count__24147 = G__24327;
i__24148 = G__24328;
continue;
} else {
var effect = cljs.core.first(seq__24145__$1);
re_frame.fx.dispatch_later(effect);


var G__24329 = cljs.core.next(seq__24145__$1);
var G__24330 = null;
var G__24331 = (0);
var G__24332 = (0);
seq__24145 = G__24329;
chunk__24146 = G__24330;
count__24147 = G__24331;
i__24148 = G__24332;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24155 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24156 = null;
var count__24157 = (0);
var i__24158 = (0);
while(true){
if((i__24158 < count__24157)){
var vec__24168 = chunk__24156.cljs$core$IIndexed$_nth$arity$2(null, i__24158);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24168,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24333 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24333)){
var effect_fn_24335 = temp__5802__auto___24333;
(effect_fn_24335.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24335.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24335.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24337 = seq__24155;
var G__24338 = chunk__24156;
var G__24339 = count__24157;
var G__24340 = (i__24158 + (1));
seq__24155 = G__24337;
chunk__24156 = G__24338;
count__24157 = G__24339;
i__24158 = G__24340;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24155);
if(temp__5804__auto__){
var seq__24155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24155__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24155__$1);
var G__24341 = cljs.core.chunk_rest(seq__24155__$1);
var G__24342 = c__5525__auto__;
var G__24343 = cljs.core.count(c__5525__auto__);
var G__24344 = (0);
seq__24155 = G__24341;
chunk__24156 = G__24342;
count__24157 = G__24343;
i__24158 = G__24344;
continue;
} else {
var vec__24181 = cljs.core.first(seq__24155__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24181,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24181,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24345 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24345)){
var effect_fn_24346 = temp__5802__auto___24345;
(effect_fn_24346.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24346.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24346.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24347 = cljs.core.next(seq__24155__$1);
var G__24348 = null;
var G__24349 = (0);
var G__24350 = (0);
seq__24155 = G__24347;
chunk__24156 = G__24348;
count__24157 = G__24349;
i__24158 = G__24350;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24191 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24192 = null;
var count__24193 = (0);
var i__24194 = (0);
while(true){
if((i__24194 < count__24193)){
var event = chunk__24192.cljs$core$IIndexed$_nth$arity$2(null, i__24194);
re_frame.router.dispatch(event);


var G__24353 = seq__24191;
var G__24354 = chunk__24192;
var G__24355 = count__24193;
var G__24356 = (i__24194 + (1));
seq__24191 = G__24353;
chunk__24192 = G__24354;
count__24193 = G__24355;
i__24194 = G__24356;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24191);
if(temp__5804__auto__){
var seq__24191__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24191__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24191__$1);
var G__24359 = cljs.core.chunk_rest(seq__24191__$1);
var G__24360 = c__5525__auto__;
var G__24361 = cljs.core.count(c__5525__auto__);
var G__24362 = (0);
seq__24191 = G__24359;
chunk__24192 = G__24360;
count__24193 = G__24361;
i__24194 = G__24362;
continue;
} else {
var event = cljs.core.first(seq__24191__$1);
re_frame.router.dispatch(event);


var G__24363 = cljs.core.next(seq__24191__$1);
var G__24364 = null;
var G__24365 = (0);
var G__24366 = (0);
seq__24191 = G__24363;
chunk__24192 = G__24364;
count__24193 = G__24365;
i__24194 = G__24366;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24212 = cljs.core.seq(value);
var chunk__24213 = null;
var count__24214 = (0);
var i__24215 = (0);
while(true){
if((i__24215 < count__24214)){
var event = chunk__24213.cljs$core$IIndexed$_nth$arity$2(null, i__24215);
clear_event(event);


var G__24372 = seq__24212;
var G__24373 = chunk__24213;
var G__24374 = count__24214;
var G__24375 = (i__24215 + (1));
seq__24212 = G__24372;
chunk__24213 = G__24373;
count__24214 = G__24374;
i__24215 = G__24375;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24212);
if(temp__5804__auto__){
var seq__24212__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24212__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24212__$1);
var G__24378 = cljs.core.chunk_rest(seq__24212__$1);
var G__24379 = c__5525__auto__;
var G__24380 = cljs.core.count(c__5525__auto__);
var G__24381 = (0);
seq__24212 = G__24378;
chunk__24213 = G__24379;
count__24214 = G__24380;
i__24215 = G__24381;
continue;
} else {
var event = cljs.core.first(seq__24212__$1);
clear_event(event);


var G__24383 = cljs.core.next(seq__24212__$1);
var G__24384 = null;
var G__24385 = (0);
var G__24386 = (0);
seq__24212 = G__24383;
chunk__24213 = G__24384;
count__24214 = G__24385;
i__24215 = G__24386;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24249 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24250 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24250);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23375__auto___24393 = re_frame.interop.now();
var duration__23376__auto___24394 = (end__23375__auto___24393 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23376__auto___24394,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23375__auto___24393);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24249);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
