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
var _STAR_current_trace_STAR__orig_val__29037 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__29038 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__29038);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___29248 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___29248)){
var new_db_29249 = temp__5804__auto___29248;
var fexpr__29041_29250 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__29041_29250.cljs$core$IFn$_invoke$arity$1 ? fexpr__29041_29250.cljs$core$IFn$_invoke$arity$1(new_db_29249) : fexpr__29041_29250.call(null, new_db_29249));
} else {
}

var seq__29046 = cljs.core.seq(effects_without_db);
var chunk__29047 = null;
var count__29048 = (0);
var i__29049 = (0);
while(true){
if((i__29049 < count__29048)){
var vec__29068 = chunk__29047.cljs$core$IIndexed$_nth$arity$2(null, i__29049);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(1),null);
var temp__5802__auto___29252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29252)){
var effect_fn_29253 = temp__5802__auto___29252;
(effect_fn_29253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29253.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__29254 = seq__29046;
var G__29255 = chunk__29047;
var G__29256 = count__29048;
var G__29257 = (i__29049 + (1));
seq__29046 = G__29254;
chunk__29047 = G__29255;
count__29048 = G__29256;
i__29049 = G__29257;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29046);
if(temp__5804__auto__){
var seq__29046__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29046__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29046__$1);
var G__29258 = cljs.core.chunk_rest(seq__29046__$1);
var G__29259 = c__5525__auto__;
var G__29260 = cljs.core.count(c__5525__auto__);
var G__29261 = (0);
seq__29046 = G__29258;
chunk__29047 = G__29259;
count__29048 = G__29260;
i__29049 = G__29261;
continue;
} else {
var vec__29073 = cljs.core.first(seq__29046__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073,(1),null);
var temp__5802__auto___29262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29262)){
var effect_fn_29263 = temp__5802__auto___29262;
(effect_fn_29263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29263.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__29264 = cljs.core.next(seq__29046__$1);
var G__29265 = null;
var G__29266 = (0);
var G__29267 = (0);
seq__29046 = G__29264;
chunk__29047 = G__29265;
count__29048 = G__29266;
i__29049 = G__29267;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__28356__auto___29268 = re_frame.interop.now();
var duration__28357__auto___29269 = (end__28356__auto___29268 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28357__auto___29269,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__28356__auto___29268);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__29037);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___29271 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___29271)){
var new_db_29272 = temp__5804__auto___29271;
var fexpr__29079_29273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__29079_29273.cljs$core$IFn$_invoke$arity$1 ? fexpr__29079_29273.cljs$core$IFn$_invoke$arity$1(new_db_29272) : fexpr__29079_29273.call(null, new_db_29272));
} else {
}

var seq__29080 = cljs.core.seq(effects_without_db);
var chunk__29081 = null;
var count__29082 = (0);
var i__29083 = (0);
while(true){
if((i__29083 < count__29082)){
var vec__29111 = chunk__29081.cljs$core$IIndexed$_nth$arity$2(null, i__29083);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(1),null);
var temp__5802__auto___29277 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29277)){
var effect_fn_29278 = temp__5802__auto___29277;
(effect_fn_29278.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29278.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29278.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__29279 = seq__29080;
var G__29280 = chunk__29081;
var G__29281 = count__29082;
var G__29282 = (i__29083 + (1));
seq__29080 = G__29279;
chunk__29081 = G__29280;
count__29082 = G__29281;
i__29083 = G__29282;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29080);
if(temp__5804__auto__){
var seq__29080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29080__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29080__$1);
var G__29283 = cljs.core.chunk_rest(seq__29080__$1);
var G__29284 = c__5525__auto__;
var G__29285 = cljs.core.count(c__5525__auto__);
var G__29286 = (0);
seq__29080 = G__29283;
chunk__29081 = G__29284;
count__29082 = G__29285;
i__29083 = G__29286;
continue;
} else {
var vec__29121 = cljs.core.first(seq__29080__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(1),null);
var temp__5802__auto___29287 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29287)){
var effect_fn_29288 = temp__5802__auto___29287;
(effect_fn_29288.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29288.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29288.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__29289 = cljs.core.next(seq__29080__$1);
var G__29290 = null;
var G__29291 = (0);
var G__29292 = (0);
seq__29080 = G__29289;
chunk__29081 = G__29290;
count__29082 = G__29291;
i__29083 = G__29292;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__29129){
var map__29134 = p__29129;
var map__29134__$1 = cljs.core.__destructure_map(map__29134);
var effect = map__29134__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29134__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29134__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__29150 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__29151 = null;
var count__29152 = (0);
var i__29153 = (0);
while(true){
if((i__29153 < count__29152)){
var effect = chunk__29151.cljs$core$IIndexed$_nth$arity$2(null, i__29153);
re_frame.fx.dispatch_later(effect);


var G__29304 = seq__29150;
var G__29305 = chunk__29151;
var G__29306 = count__29152;
var G__29307 = (i__29153 + (1));
seq__29150 = G__29304;
chunk__29151 = G__29305;
count__29152 = G__29306;
i__29153 = G__29307;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29150);
if(temp__5804__auto__){
var seq__29150__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29150__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29150__$1);
var G__29314 = cljs.core.chunk_rest(seq__29150__$1);
var G__29315 = c__5525__auto__;
var G__29316 = cljs.core.count(c__5525__auto__);
var G__29317 = (0);
seq__29150 = G__29314;
chunk__29151 = G__29315;
count__29152 = G__29316;
i__29153 = G__29317;
continue;
} else {
var effect = cljs.core.first(seq__29150__$1);
re_frame.fx.dispatch_later(effect);


var G__29319 = cljs.core.next(seq__29150__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__29150 = G__29319;
chunk__29151 = G__29320;
count__29152 = G__29321;
i__29153 = G__29322;
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
var seq__29185 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__29186 = null;
var count__29187 = (0);
var i__29188 = (0);
while(true){
if((i__29188 < count__29187)){
var vec__29203 = chunk__29186.cljs$core$IIndexed$_nth$arity$2(null, i__29188);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29203,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29203,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___29326 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29326)){
var effect_fn_29327 = temp__5802__auto___29326;
(effect_fn_29327.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29327.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29327.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__29328 = seq__29185;
var G__29329 = chunk__29186;
var G__29330 = count__29187;
var G__29331 = (i__29188 + (1));
seq__29185 = G__29328;
chunk__29186 = G__29329;
count__29187 = G__29330;
i__29188 = G__29331;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29185);
if(temp__5804__auto__){
var seq__29185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29185__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29185__$1);
var G__29335 = cljs.core.chunk_rest(seq__29185__$1);
var G__29336 = c__5525__auto__;
var G__29337 = cljs.core.count(c__5525__auto__);
var G__29338 = (0);
seq__29185 = G__29335;
chunk__29186 = G__29336;
count__29187 = G__29337;
i__29188 = G__29338;
continue;
} else {
var vec__29206 = cljs.core.first(seq__29185__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29206,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29206,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___29339 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29339)){
var effect_fn_29340 = temp__5802__auto___29339;
(effect_fn_29340.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29340.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29340.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__29341 = cljs.core.next(seq__29185__$1);
var G__29342 = null;
var G__29343 = (0);
var G__29344 = (0);
seq__29185 = G__29341;
chunk__29186 = G__29342;
count__29187 = G__29343;
i__29188 = G__29344;
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
var seq__29220 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__29221 = null;
var count__29222 = (0);
var i__29223 = (0);
while(true){
if((i__29223 < count__29222)){
var event = chunk__29221.cljs$core$IIndexed$_nth$arity$2(null, i__29223);
re_frame.router.dispatch(event);


var G__29346 = seq__29220;
var G__29347 = chunk__29221;
var G__29348 = count__29222;
var G__29349 = (i__29223 + (1));
seq__29220 = G__29346;
chunk__29221 = G__29347;
count__29222 = G__29348;
i__29223 = G__29349;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29220);
if(temp__5804__auto__){
var seq__29220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29220__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29220__$1);
var G__29353 = cljs.core.chunk_rest(seq__29220__$1);
var G__29354 = c__5525__auto__;
var G__29355 = cljs.core.count(c__5525__auto__);
var G__29356 = (0);
seq__29220 = G__29353;
chunk__29221 = G__29354;
count__29222 = G__29355;
i__29223 = G__29356;
continue;
} else {
var event = cljs.core.first(seq__29220__$1);
re_frame.router.dispatch(event);


var G__29357 = cljs.core.next(seq__29220__$1);
var G__29358 = null;
var G__29359 = (0);
var G__29360 = (0);
seq__29220 = G__29357;
chunk__29221 = G__29358;
count__29222 = G__29359;
i__29223 = G__29360;
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
var seq__29228 = cljs.core.seq(value);
var chunk__29229 = null;
var count__29230 = (0);
var i__29231 = (0);
while(true){
if((i__29231 < count__29230)){
var event = chunk__29229.cljs$core$IIndexed$_nth$arity$2(null, i__29231);
clear_event(event);


var G__29363 = seq__29228;
var G__29364 = chunk__29229;
var G__29365 = count__29230;
var G__29366 = (i__29231 + (1));
seq__29228 = G__29363;
chunk__29229 = G__29364;
count__29230 = G__29365;
i__29231 = G__29366;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29228);
if(temp__5804__auto__){
var seq__29228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29228__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29228__$1);
var G__29368 = cljs.core.chunk_rest(seq__29228__$1);
var G__29369 = c__5525__auto__;
var G__29370 = cljs.core.count(c__5525__auto__);
var G__29371 = (0);
seq__29228 = G__29368;
chunk__29229 = G__29369;
count__29230 = G__29370;
i__29231 = G__29371;
continue;
} else {
var event = cljs.core.first(seq__29228__$1);
clear_event(event);


var G__29372 = cljs.core.next(seq__29228__$1);
var G__29373 = null;
var G__29374 = (0);
var G__29375 = (0);
seq__29228 = G__29372;
chunk__29229 = G__29373;
count__29230 = G__29374;
i__29231 = G__29375;
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
var _STAR_current_trace_STAR__orig_val__29237 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__29238 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__29238);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__28356__auto___29376 = re_frame.interop.now();
var duration__28357__auto___29377 = (end__28356__auto___29376 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28357__auto___29377,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__28356__auto___29376);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__29237);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
