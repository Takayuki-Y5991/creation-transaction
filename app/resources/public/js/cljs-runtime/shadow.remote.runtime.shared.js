goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17754){
var map__17757 = p__17754;
var map__17757__$1 = cljs.core.__destructure_map(map__17757);
var runtime = map__17757__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18405 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18405)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17797 = runtime;
var G__17798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18405);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17797,G__17798) : shadow.remote.runtime.shared.process.call(null, G__17797,G__17798));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17808,res){
var map__17811 = p__17808;
var map__17811__$1 = cljs.core.__destructure_map(map__17811);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17811__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17811__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17814 = res;
var G__17814__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17814,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17814);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17814__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17814__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17839 = arguments.length;
switch (G__17839) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17897,msg,handlers,timeout_after_ms){
var map__17906 = p__17897;
var map__17906__$1 = cljs.core.__destructure_map(map__17906);
var runtime = map__17906__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___18413 = arguments.length;
var i__5727__auto___18414 = (0);
while(true){
if((i__5727__auto___18414 < len__5726__auto___18413)){
args__5732__auto__.push((arguments[i__5727__auto___18414]));

var G__18415 = (i__5727__auto___18414 + (1));
i__5727__auto___18414 = G__18415;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17987,ev,args){
var map__17988 = p__17987;
var map__17988__$1 = cljs.core.__destructure_map(map__17988);
var runtime = map__17988__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17988__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17993 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17996 = null;
var count__17997 = (0);
var i__17998 = (0);
while(true){
if((i__17998 < count__17997)){
var ext = chunk__17996.cljs$core$IIndexed$_nth$arity$2(null, i__17998);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18417 = seq__17993;
var G__18418 = chunk__17996;
var G__18419 = count__17997;
var G__18420 = (i__17998 + (1));
seq__17993 = G__18417;
chunk__17996 = G__18418;
count__17997 = G__18419;
i__17998 = G__18420;
continue;
} else {
var G__18421 = seq__17993;
var G__18422 = chunk__17996;
var G__18423 = count__17997;
var G__18424 = (i__17998 + (1));
seq__17993 = G__18421;
chunk__17996 = G__18422;
count__17997 = G__18423;
i__17998 = G__18424;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17993);
if(temp__5804__auto__){
var seq__17993__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17993__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17993__$1);
var G__18425 = cljs.core.chunk_rest(seq__17993__$1);
var G__18426 = c__5525__auto__;
var G__18427 = cljs.core.count(c__5525__auto__);
var G__18428 = (0);
seq__17993 = G__18425;
chunk__17996 = G__18426;
count__17997 = G__18427;
i__17998 = G__18428;
continue;
} else {
var ext = cljs.core.first(seq__17993__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18429 = cljs.core.next(seq__17993__$1);
var G__18430 = null;
var G__18431 = (0);
var G__18432 = (0);
seq__17993 = G__18429;
chunk__17996 = G__18430;
count__17997 = G__18431;
i__17998 = G__18432;
continue;
} else {
var G__18433 = cljs.core.next(seq__17993__$1);
var G__18434 = null;
var G__18435 = (0);
var G__18436 = (0);
seq__17993 = G__18433;
chunk__17996 = G__18434;
count__17997 = G__18435;
i__17998 = G__18436;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17938){
var G__17942 = cljs.core.first(seq17938);
var seq17938__$1 = cljs.core.next(seq17938);
var G__17943 = cljs.core.first(seq17938__$1);
var seq17938__$2 = cljs.core.next(seq17938__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17942,G__17943,seq17938__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18136,p__18137){
var map__18138 = p__18136;
var map__18138__$1 = cljs.core.__destructure_map(map__18138);
var runtime = map__18138__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18141 = p__18137;
var map__18141__$1 = cljs.core.__destructure_map(map__18141);
var msg = map__18141__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18162 = cljs.core.deref(state_ref);
var map__18162__$1 = cljs.core.__destructure_map(map__18162);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18198,msg){
var map__18201 = p__18198;
var map__18201__$1 = cljs.core.__destructure_map(map__18201);
var runtime = map__18201__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18224,key,p__18225){
var map__18228 = p__18224;
var map__18228__$1 = cljs.core.__destructure_map(map__18228);
var state = map__18228__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18229 = p__18225;
var map__18229__$1 = cljs.core.__destructure_map(map__18229);
var spec = map__18229__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18229__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18229__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18268,key,spec){
var map__18269 = p__18268;
var map__18269__$1 = cljs.core.__destructure_map(map__18269);
var runtime = map__18269__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18269__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18563 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18563 == null)){
} else {
var on_welcome_18564 = temp__5808__auto___18563;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18564.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18564.cljs$core$IFn$_invoke$arity$0() : on_welcome_18564.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18273_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18273_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18274_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18274_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18275_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18275_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18276_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18276_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18277_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18277_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18335,key){
var map__18336 = p__18335;
var map__18336__$1 = cljs.core.__destructure_map(map__18336);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18347,msg){
var map__18349 = p__18347;
var map__18349__$1 = cljs.core.__destructure_map(map__18349);
var runtime = map__18349__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18349__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18354,p__18355){
var map__18356 = p__18354;
var map__18356__$1 = cljs.core.__destructure_map(map__18356);
var runtime = map__18356__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18356__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18357 = p__18355;
var map__18357__$1 = cljs.core.__destructure_map(map__18357);
var msg = map__18357__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__18365 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18367 = null;
var count__18368 = (0);
var i__18369 = (0);
while(true){
if((i__18369 < count__18368)){
var map__18379 = chunk__18367.cljs$core$IIndexed$_nth$arity$2(null, i__18369);
var map__18379__$1 = cljs.core.__destructure_map(map__18379);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18379__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18617 = seq__18365;
var G__18618 = chunk__18367;
var G__18619 = count__18368;
var G__18620 = (i__18369 + (1));
seq__18365 = G__18617;
chunk__18367 = G__18618;
count__18368 = G__18619;
i__18369 = G__18620;
continue;
} else {
var G__18622 = seq__18365;
var G__18623 = chunk__18367;
var G__18624 = count__18368;
var G__18625 = (i__18369 + (1));
seq__18365 = G__18622;
chunk__18367 = G__18623;
count__18368 = G__18624;
i__18369 = G__18625;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18365);
if(temp__5804__auto__){
var seq__18365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18365__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18365__$1);
var G__18627 = cljs.core.chunk_rest(seq__18365__$1);
var G__18628 = c__5525__auto__;
var G__18629 = cljs.core.count(c__5525__auto__);
var G__18630 = (0);
seq__18365 = G__18627;
chunk__18367 = G__18628;
count__18368 = G__18629;
i__18369 = G__18630;
continue;
} else {
var map__18389 = cljs.core.first(seq__18365__$1);
var map__18389__$1 = cljs.core.__destructure_map(map__18389);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18389__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18632 = cljs.core.next(seq__18365__$1);
var G__18633 = null;
var G__18634 = (0);
var G__18635 = (0);
seq__18365 = G__18632;
chunk__18367 = G__18633;
count__18368 = G__18634;
i__18369 = G__18635;
continue;
} else {
var G__18636 = cljs.core.next(seq__18365__$1);
var G__18637 = null;
var G__18638 = (0);
var G__18639 = (0);
seq__18365 = G__18636;
chunk__18367 = G__18637;
count__18368 = G__18638;
i__18369 = G__18639;
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
