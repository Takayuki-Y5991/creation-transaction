goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__27566,p__27567){
var map__27568 = p__27566;
var map__27568__$1 = cljs.core.__destructure_map(map__27568);
var svc = map__27568__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27568__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27568__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27568__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27569 = p__27567;
var map__27569__$1 = cljs.core.__destructure_map(map__27569);
var msg = map__27569__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27569__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27569__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27569__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27569__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__27577,p__27578){
var map__27579 = p__27577;
var map__27579__$1 = cljs.core.__destructure_map(map__27579);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27579__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__27580 = p__27578;
var map__27580__$1 = cljs.core.__destructure_map(map__27580);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27580__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__27581,p__27582){
var map__27583 = p__27581;
var map__27583__$1 = cljs.core.__destructure_map(map__27583);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27583__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27583__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27584 = p__27582;
var map__27584__$1 = cljs.core.__destructure_map(map__27584);
var msg = map__27584__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27584__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__27585,tid){
var map__27586 = p__27585;
var map__27586__$1 = cljs.core.__destructure_map(map__27586);
var svc = map__27586__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27586__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__27599 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__27600 = null;
var count__27601 = (0);
var i__27602 = (0);
while(true){
if((i__27602 < count__27601)){
var vec__27614 = chunk__27600.cljs$core$IIndexed$_nth$arity$2(null, i__27602);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27635 = seq__27599;
var G__27636 = chunk__27600;
var G__27637 = count__27601;
var G__27638 = (i__27602 + (1));
seq__27599 = G__27635;
chunk__27600 = G__27636;
count__27601 = G__27637;
i__27602 = G__27638;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27599);
if(temp__5804__auto__){
var seq__27599__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27599__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27599__$1);
var G__27639 = cljs.core.chunk_rest(seq__27599__$1);
var G__27640 = c__5525__auto__;
var G__27641 = cljs.core.count(c__5525__auto__);
var G__27642 = (0);
seq__27599 = G__27639;
chunk__27600 = G__27640;
count__27601 = G__27641;
i__27602 = G__27642;
continue;
} else {
var vec__27619 = cljs.core.first(seq__27599__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27619,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27619,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27643 = cljs.core.next(seq__27599__$1);
var G__27644 = null;
var G__27645 = (0);
var G__27646 = (0);
seq__27599 = G__27643;
chunk__27600 = G__27644;
count__27601 = G__27645;
i__27602 = G__27646;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__27587_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__27587_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__27588_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__27588_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__27589_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__27589_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__27590_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__27590_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__27628){
var map__27630 = p__27628;
var map__27630__$1 = cljs.core.__destructure_map(map__27630);
var svc = map__27630__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27630__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27630__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
