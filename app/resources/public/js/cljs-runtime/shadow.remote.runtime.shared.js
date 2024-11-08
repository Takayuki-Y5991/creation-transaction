goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__22856){
var map__22857 = p__22856;
var map__22857__$1 = cljs.core.__destructure_map(map__22857);
var runtime = map__22857__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_23260 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_23260)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__22860 = runtime;
var G__22861 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_23260);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__22860,G__22861) : shadow.remote.runtime.shared.process.call(null, G__22860,G__22861));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__22876,res){
var map__22877 = p__22876;
var map__22877__$1 = cljs.core.__destructure_map(map__22877);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__22878 = res;
var G__22878__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22878,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__22878);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22878__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__22878__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__22881 = arguments.length;
switch (G__22881) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__22886,msg,handlers,timeout_after_ms){
var map__22887 = p__22886;
var map__22887__$1 = cljs.core.__destructure_map(map__22887);
var runtime = map__22887__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23263 = arguments.length;
var i__5727__auto___23264 = (0);
while(true){
if((i__5727__auto___23264 < len__5726__auto___23263)){
args__5732__auto__.push((arguments[i__5727__auto___23264]));

var G__23265 = (i__5727__auto___23264 + (1));
i__5727__auto___23264 = G__23265;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22956,ev,args){
var map__22961 = p__22956;
var map__22961__$1 = cljs.core.__destructure_map(map__22961);
var runtime = map__22961__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__22968 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22971 = null;
var count__22972 = (0);
var i__22973 = (0);
while(true){
if((i__22973 < count__22972)){
var ext = chunk__22971.cljs$core$IIndexed$_nth$arity$2(null, i__22973);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__23275 = seq__22968;
var G__23276 = chunk__22971;
var G__23277 = count__22972;
var G__23278 = (i__22973 + (1));
seq__22968 = G__23275;
chunk__22971 = G__23276;
count__22972 = G__23277;
i__22973 = G__23278;
continue;
} else {
var G__23279 = seq__22968;
var G__23280 = chunk__22971;
var G__23281 = count__22972;
var G__23282 = (i__22973 + (1));
seq__22968 = G__23279;
chunk__22971 = G__23280;
count__22972 = G__23281;
i__22973 = G__23282;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22968);
if(temp__5804__auto__){
var seq__22968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22968__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22968__$1);
var G__23284 = cljs.core.chunk_rest(seq__22968__$1);
var G__23285 = c__5525__auto__;
var G__23286 = cljs.core.count(c__5525__auto__);
var G__23287 = (0);
seq__22968 = G__23284;
chunk__22971 = G__23285;
count__22972 = G__23286;
i__22973 = G__23287;
continue;
} else {
var ext = cljs.core.first(seq__22968__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__23288 = cljs.core.next(seq__22968__$1);
var G__23289 = null;
var G__23290 = (0);
var G__23291 = (0);
seq__22968 = G__23288;
chunk__22971 = G__23289;
count__22972 = G__23290;
i__22973 = G__23291;
continue;
} else {
var G__23292 = cljs.core.next(seq__22968__$1);
var G__23293 = null;
var G__23294 = (0);
var G__23295 = (0);
seq__22968 = G__23292;
chunk__22971 = G__23293;
count__22972 = G__23294;
i__22973 = G__23295;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq22926){
var G__22927 = cljs.core.first(seq22926);
var seq22926__$1 = cljs.core.next(seq22926);
var G__22928 = cljs.core.first(seq22926__$1);
var seq22926__$2 = cljs.core.next(seq22926__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22927,G__22928,seq22926__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__23034,p__23035){
var map__23041 = p__23034;
var map__23041__$1 = cljs.core.__destructure_map(map__23041);
var runtime = map__23041__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23041__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__23042 = p__23035;
var map__23042__$1 = cljs.core.__destructure_map(map__23042);
var msg = map__23042__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__23048 = cljs.core.deref(state_ref);
var map__23048__$1 = cljs.core.__destructure_map(map__23048);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__23094,msg){
var map__23096 = p__23094;
var map__23096__$1 = cljs.core.__destructure_map(map__23096);
var runtime = map__23096__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__23117,key,p__23118){
var map__23119 = p__23117;
var map__23119__$1 = cljs.core.__destructure_map(map__23119);
var state = map__23119__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23119__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__23120 = p__23118;
var map__23120__$1 = cljs.core.__destructure_map(map__23120);
var spec = map__23120__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23120__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23120__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__23139,key,spec){
var map__23141 = p__23139;
var map__23141__$1 = cljs.core.__destructure_map(map__23141);
var runtime = map__23141__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___23305 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___23305 == null)){
} else {
var on_welcome_23306 = temp__5808__auto___23305;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_23306.cljs$core$IFn$_invoke$arity$0 ? on_welcome_23306.cljs$core$IFn$_invoke$arity$0() : on_welcome_23306.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__23156_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__23156_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__23157_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__23157_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__23158_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__23158_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__23159_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__23159_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__23160_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__23160_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__23179,key){
var map__23180 = p__23179;
var map__23180__$1 = cljs.core.__destructure_map(map__23180);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__23189,msg){
var map__23191 = p__23189;
var map__23191__$1 = cljs.core.__destructure_map(map__23191);
var runtime = map__23191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__23200,p__23201){
var map__23205 = p__23200;
var map__23205__$1 = cljs.core.__destructure_map(map__23205);
var runtime = map__23205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__23206 = p__23201;
var map__23206__$1 = cljs.core.__destructure_map(map__23206);
var msg = map__23206__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23206__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23206__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__23216 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__23218 = null;
var count__23219 = (0);
var i__23220 = (0);
while(true){
if((i__23220 < count__23219)){
var map__23243 = chunk__23218.cljs$core$IIndexed$_nth$arity$2(null, i__23220);
var map__23243__$1 = cljs.core.__destructure_map(map__23243);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23243__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__23318 = seq__23216;
var G__23319 = chunk__23218;
var G__23320 = count__23219;
var G__23321 = (i__23220 + (1));
seq__23216 = G__23318;
chunk__23218 = G__23319;
count__23219 = G__23320;
i__23220 = G__23321;
continue;
} else {
var G__23322 = seq__23216;
var G__23323 = chunk__23218;
var G__23324 = count__23219;
var G__23325 = (i__23220 + (1));
seq__23216 = G__23322;
chunk__23218 = G__23323;
count__23219 = G__23324;
i__23220 = G__23325;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23216);
if(temp__5804__auto__){
var seq__23216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23216__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23216__$1);
var G__23326 = cljs.core.chunk_rest(seq__23216__$1);
var G__23327 = c__5525__auto__;
var G__23328 = cljs.core.count(c__5525__auto__);
var G__23329 = (0);
seq__23216 = G__23326;
chunk__23218 = G__23327;
count__23219 = G__23328;
i__23220 = G__23329;
continue;
} else {
var map__23248 = cljs.core.first(seq__23216__$1);
var map__23248__$1 = cljs.core.__destructure_map(map__23248);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__23331 = cljs.core.next(seq__23216__$1);
var G__23332 = null;
var G__23333 = (0);
var G__23334 = (0);
seq__23216 = G__23331;
chunk__23218 = G__23332;
count__23219 = G__23333;
i__23220 = G__23334;
continue;
} else {
var G__23336 = cljs.core.next(seq__23216__$1);
var G__23337 = null;
var G__23338 = (0);
var G__23339 = (0);
seq__23216 = G__23336;
chunk__23218 = G__23337;
count__23219 = G__23338;
i__23220 = G__23339;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
