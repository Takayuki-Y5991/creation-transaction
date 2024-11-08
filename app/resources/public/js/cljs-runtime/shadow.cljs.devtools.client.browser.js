goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29512 = arguments.length;
var i__5727__auto___29513 = (0);
while(true){
if((i__5727__auto___29513 < len__5726__auto___29512)){
args__5732__auto__.push((arguments[i__5727__auto___29513]));

var G__29514 = (i__5727__auto___29513 + (1));
i__5727__auto___29513 = G__29514;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq28563){
var G__28564 = cljs.core.first(seq28563);
var seq28563__$1 = cljs.core.next(seq28563);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28564,seq28563__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__28574 = cljs.core.seq(sources);
var chunk__28575 = null;
var count__28576 = (0);
var i__28577 = (0);
while(true){
if((i__28577 < count__28576)){
var map__28610 = chunk__28575.cljs$core$IIndexed$_nth$arity$2(null, i__28577);
var map__28610__$1 = cljs.core.__destructure_map(map__28610);
var src = map__28610__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e28613){var e_29517 = e28613;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_29517);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_29517.message)].join('')));
}

var G__29518 = seq__28574;
var G__29519 = chunk__28575;
var G__29520 = count__28576;
var G__29521 = (i__28577 + (1));
seq__28574 = G__29518;
chunk__28575 = G__29519;
count__28576 = G__29520;
i__28577 = G__29521;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28574);
if(temp__5804__auto__){
var seq__28574__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28574__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28574__$1);
var G__29522 = cljs.core.chunk_rest(seq__28574__$1);
var G__29523 = c__5525__auto__;
var G__29524 = cljs.core.count(c__5525__auto__);
var G__29525 = (0);
seq__28574 = G__29522;
chunk__28575 = G__29523;
count__28576 = G__29524;
i__28577 = G__29525;
continue;
} else {
var map__28614 = cljs.core.first(seq__28574__$1);
var map__28614__$1 = cljs.core.__destructure_map(map__28614);
var src = map__28614__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28614__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28614__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28614__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28614__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e28622){var e_29527 = e28622;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_29527);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_29527.message)].join('')));
}

var G__29529 = cljs.core.next(seq__28574__$1);
var G__29530 = null;
var G__29531 = (0);
var G__29532 = (0);
seq__28574 = G__29529;
chunk__28575 = G__29530;
count__28576 = G__29531;
i__28577 = G__29532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__28631 = cljs.core.seq(js_requires);
var chunk__28632 = null;
var count__28633 = (0);
var i__28634 = (0);
while(true){
if((i__28634 < count__28633)){
var js_ns = chunk__28632.cljs$core$IIndexed$_nth$arity$2(null, i__28634);
var require_str_29533 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29533);


var G__29534 = seq__28631;
var G__29535 = chunk__28632;
var G__29536 = count__28633;
var G__29537 = (i__28634 + (1));
seq__28631 = G__29534;
chunk__28632 = G__29535;
count__28633 = G__29536;
i__28634 = G__29537;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28631);
if(temp__5804__auto__){
var seq__28631__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28631__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28631__$1);
var G__29538 = cljs.core.chunk_rest(seq__28631__$1);
var G__29539 = c__5525__auto__;
var G__29540 = cljs.core.count(c__5525__auto__);
var G__29541 = (0);
seq__28631 = G__29538;
chunk__28632 = G__29539;
count__28633 = G__29540;
i__28634 = G__29541;
continue;
} else {
var js_ns = cljs.core.first(seq__28631__$1);
var require_str_29542 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29542);


var G__29543 = cljs.core.next(seq__28631__$1);
var G__29544 = null;
var G__29545 = (0);
var G__29546 = (0);
seq__28631 = G__29543;
chunk__28632 = G__29544;
count__28633 = G__29545;
i__28634 = G__29546;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__28640){
var map__28641 = p__28640;
var map__28641__$1 = cljs.core.__destructure_map(map__28641);
var msg = map__28641__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28645(s__28646){
return (new cljs.core.LazySeq(null,(function (){
var s__28646__$1 = s__28646;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28646__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__28651 = cljs.core.first(xs__6360__auto__);
var map__28651__$1 = cljs.core.__destructure_map(map__28651);
var src = map__28651__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28651__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28651__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__28646__$1,map__28651,map__28651__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28641,map__28641__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28645_$_iter__28647(s__28648){
return (new cljs.core.LazySeq(null,((function (s__28646__$1,map__28651,map__28651__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28641,map__28641__$1,msg,info,reload_info){
return (function (){
var s__28648__$1 = s__28648;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28648__$1);
if(temp__5804__auto____$1){
var s__28648__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28648__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28648__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28650 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28649 = (0);
while(true){
if((i__28649 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__28649);
cljs.core.chunk_append(b__28650,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29549 = (i__28649 + (1));
i__28649 = G__29549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28650),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28645_$_iter__28647(cljs.core.chunk_rest(s__28648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28650),null);
}
} else {
var warning = cljs.core.first(s__28648__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28645_$_iter__28647(cljs.core.rest(s__28648__$2)));
}
} else {
return null;
}
break;
}
});})(s__28646__$1,map__28651,map__28651__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28641,map__28641__$1,msg,info,reload_info))
,null,null));
});})(s__28646__$1,map__28651,map__28651__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28641,map__28641__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28645(cljs.core.rest(s__28646__$1)));
} else {
var G__29550 = cljs.core.rest(s__28646__$1);
s__28646__$1 = G__29550;
continue;
}
} else {
var G__29551 = cljs.core.rest(s__28646__$1);
s__28646__$1 = G__29551;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__28662_29552 = cljs.core.seq(warnings);
var chunk__28663_29553 = null;
var count__28664_29554 = (0);
var i__28665_29555 = (0);
while(true){
if((i__28665_29555 < count__28664_29554)){
var map__28680_29556 = chunk__28663_29553.cljs$core$IIndexed$_nth$arity$2(null, i__28665_29555);
var map__28680_29557__$1 = cljs.core.__destructure_map(map__28680_29556);
var w_29558 = map__28680_29557__$1;
var msg_29559__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28680_29557__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28680_29557__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28680_29557__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28680_29557__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29562)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29560),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29561),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29559__$1)].join(''));


var G__29564 = seq__28662_29552;
var G__29565 = chunk__28663_29553;
var G__29566 = count__28664_29554;
var G__29567 = (i__28665_29555 + (1));
seq__28662_29552 = G__29564;
chunk__28663_29553 = G__29565;
count__28664_29554 = G__29566;
i__28665_29555 = G__29567;
continue;
} else {
var temp__5804__auto___29568 = cljs.core.seq(seq__28662_29552);
if(temp__5804__auto___29568){
var seq__28662_29569__$1 = temp__5804__auto___29568;
if(cljs.core.chunked_seq_QMARK_(seq__28662_29569__$1)){
var c__5525__auto___29570 = cljs.core.chunk_first(seq__28662_29569__$1);
var G__29571 = cljs.core.chunk_rest(seq__28662_29569__$1);
var G__29572 = c__5525__auto___29570;
var G__29573 = cljs.core.count(c__5525__auto___29570);
var G__29574 = (0);
seq__28662_29552 = G__29571;
chunk__28663_29553 = G__29572;
count__28664_29554 = G__29573;
i__28665_29555 = G__29574;
continue;
} else {
var map__28681_29575 = cljs.core.first(seq__28662_29569__$1);
var map__28681_29576__$1 = cljs.core.__destructure_map(map__28681_29575);
var w_29577 = map__28681_29576__$1;
var msg_29578__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28681_29576__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28681_29576__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28681_29576__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28681_29576__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29581)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29579),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29580),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29578__$1)].join(''));


var G__29582 = cljs.core.next(seq__28662_29569__$1);
var G__29583 = null;
var G__29584 = (0);
var G__29585 = (0);
seq__28662_29552 = G__29582;
chunk__28663_29553 = G__29583;
count__28664_29554 = G__29584;
i__28665_29555 = G__29585;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__28638_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__28638_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__28693){
var map__28694 = p__28693;
var map__28694__$1 = cljs.core.__destructure_map(map__28694);
var msg = map__28694__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__28698 = cljs.core.seq(updates);
var chunk__28701 = null;
var count__28702 = (0);
var i__28703 = (0);
while(true){
if((i__28703 < count__28702)){
var path = chunk__28701.cljs$core$IIndexed$_nth$arity$2(null, i__28703);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29099_29587 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29103_29588 = null;
var count__29104_29589 = (0);
var i__29105_29590 = (0);
while(true){
if((i__29105_29590 < count__29104_29589)){
var node_29593 = chunk__29103_29588.cljs$core$IIndexed$_nth$arity$2(null, i__29105_29590);
if(cljs.core.not(node_29593.shadow$old)){
var path_match_29594 = shadow.cljs.devtools.client.browser.match_paths(node_29593.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29594)){
var new_link_29595 = (function (){var G__29212 = node_29593.cloneNode(true);
G__29212.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29594),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29212;
})();
(node_29593.shadow$old = true);

(new_link_29595.onload = ((function (seq__29099_29587,chunk__29103_29588,count__29104_29589,i__29105_29590,seq__28698,chunk__28701,count__28702,i__28703,new_link_29595,path_match_29594,node_29593,path,map__28694,map__28694__$1,msg,updates,reload_info){
return (function (e){
var seq__29213_29597 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29215_29598 = null;
var count__29216_29599 = (0);
var i__29217_29600 = (0);
while(true){
if((i__29217_29600 < count__29216_29599)){
var map__29232_29601 = chunk__29215_29598.cljs$core$IIndexed$_nth$arity$2(null, i__29217_29600);
var map__29232_29602__$1 = cljs.core.__destructure_map(map__29232_29601);
var task_29603 = map__29232_29602__$1;
var fn_str_29604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29232_29602__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29232_29602__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29606 = goog.getObjectByName(fn_str_29604,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29605)].join(''));

(fn_obj_29606.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29606.cljs$core$IFn$_invoke$arity$2(path,new_link_29595) : fn_obj_29606.call(null, path,new_link_29595));


var G__29607 = seq__29213_29597;
var G__29608 = chunk__29215_29598;
var G__29609 = count__29216_29599;
var G__29610 = (i__29217_29600 + (1));
seq__29213_29597 = G__29607;
chunk__29215_29598 = G__29608;
count__29216_29599 = G__29609;
i__29217_29600 = G__29610;
continue;
} else {
var temp__5804__auto___29611 = cljs.core.seq(seq__29213_29597);
if(temp__5804__auto___29611){
var seq__29213_29612__$1 = temp__5804__auto___29611;
if(cljs.core.chunked_seq_QMARK_(seq__29213_29612__$1)){
var c__5525__auto___29613 = cljs.core.chunk_first(seq__29213_29612__$1);
var G__29614 = cljs.core.chunk_rest(seq__29213_29612__$1);
var G__29615 = c__5525__auto___29613;
var G__29616 = cljs.core.count(c__5525__auto___29613);
var G__29617 = (0);
seq__29213_29597 = G__29614;
chunk__29215_29598 = G__29615;
count__29216_29599 = G__29616;
i__29217_29600 = G__29617;
continue;
} else {
var map__29233_29618 = cljs.core.first(seq__29213_29612__$1);
var map__29233_29619__$1 = cljs.core.__destructure_map(map__29233_29618);
var task_29620 = map__29233_29619__$1;
var fn_str_29621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29233_29619__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29233_29619__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29623 = goog.getObjectByName(fn_str_29621,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29622)].join(''));

(fn_obj_29623.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29623.cljs$core$IFn$_invoke$arity$2(path,new_link_29595) : fn_obj_29623.call(null, path,new_link_29595));


var G__29624 = cljs.core.next(seq__29213_29612__$1);
var G__29625 = null;
var G__29626 = (0);
var G__29627 = (0);
seq__29213_29597 = G__29624;
chunk__29215_29598 = G__29625;
count__29216_29599 = G__29626;
i__29217_29600 = G__29627;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29593);
});})(seq__29099_29587,chunk__29103_29588,count__29104_29589,i__29105_29590,seq__28698,chunk__28701,count__28702,i__28703,new_link_29595,path_match_29594,node_29593,path,map__28694,map__28694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29594], 0));

goog.dom.insertSiblingAfter(new_link_29595,node_29593);


var G__29628 = seq__29099_29587;
var G__29629 = chunk__29103_29588;
var G__29630 = count__29104_29589;
var G__29631 = (i__29105_29590 + (1));
seq__29099_29587 = G__29628;
chunk__29103_29588 = G__29629;
count__29104_29589 = G__29630;
i__29105_29590 = G__29631;
continue;
} else {
var G__29633 = seq__29099_29587;
var G__29634 = chunk__29103_29588;
var G__29635 = count__29104_29589;
var G__29636 = (i__29105_29590 + (1));
seq__29099_29587 = G__29633;
chunk__29103_29588 = G__29634;
count__29104_29589 = G__29635;
i__29105_29590 = G__29636;
continue;
}
} else {
var G__29637 = seq__29099_29587;
var G__29638 = chunk__29103_29588;
var G__29639 = count__29104_29589;
var G__29640 = (i__29105_29590 + (1));
seq__29099_29587 = G__29637;
chunk__29103_29588 = G__29638;
count__29104_29589 = G__29639;
i__29105_29590 = G__29640;
continue;
}
} else {
var temp__5804__auto___29641 = cljs.core.seq(seq__29099_29587);
if(temp__5804__auto___29641){
var seq__29099_29642__$1 = temp__5804__auto___29641;
if(cljs.core.chunked_seq_QMARK_(seq__29099_29642__$1)){
var c__5525__auto___29643 = cljs.core.chunk_first(seq__29099_29642__$1);
var G__29644 = cljs.core.chunk_rest(seq__29099_29642__$1);
var G__29645 = c__5525__auto___29643;
var G__29646 = cljs.core.count(c__5525__auto___29643);
var G__29647 = (0);
seq__29099_29587 = G__29644;
chunk__29103_29588 = G__29645;
count__29104_29589 = G__29646;
i__29105_29590 = G__29647;
continue;
} else {
var node_29648 = cljs.core.first(seq__29099_29642__$1);
if(cljs.core.not(node_29648.shadow$old)){
var path_match_29649 = shadow.cljs.devtools.client.browser.match_paths(node_29648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29649)){
var new_link_29650 = (function (){var G__29239 = node_29648.cloneNode(true);
G__29239.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29649),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29239;
})();
(node_29648.shadow$old = true);

(new_link_29650.onload = ((function (seq__29099_29587,chunk__29103_29588,count__29104_29589,i__29105_29590,seq__28698,chunk__28701,count__28702,i__28703,new_link_29650,path_match_29649,node_29648,seq__29099_29642__$1,temp__5804__auto___29641,path,map__28694,map__28694__$1,msg,updates,reload_info){
return (function (e){
var seq__29240_29653 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29242_29654 = null;
var count__29243_29655 = (0);
var i__29244_29656 = (0);
while(true){
if((i__29244_29656 < count__29243_29655)){
var map__29251_29661 = chunk__29242_29654.cljs$core$IIndexed$_nth$arity$2(null, i__29244_29656);
var map__29251_29662__$1 = cljs.core.__destructure_map(map__29251_29661);
var task_29663 = map__29251_29662__$1;
var fn_str_29664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29251_29662__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29251_29662__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29666 = goog.getObjectByName(fn_str_29664,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29665)].join(''));

(fn_obj_29666.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29666.cljs$core$IFn$_invoke$arity$2(path,new_link_29650) : fn_obj_29666.call(null, path,new_link_29650));


var G__29668 = seq__29240_29653;
var G__29669 = chunk__29242_29654;
var G__29670 = count__29243_29655;
var G__29671 = (i__29244_29656 + (1));
seq__29240_29653 = G__29668;
chunk__29242_29654 = G__29669;
count__29243_29655 = G__29670;
i__29244_29656 = G__29671;
continue;
} else {
var temp__5804__auto___29672__$1 = cljs.core.seq(seq__29240_29653);
if(temp__5804__auto___29672__$1){
var seq__29240_29673__$1 = temp__5804__auto___29672__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29240_29673__$1)){
var c__5525__auto___29675 = cljs.core.chunk_first(seq__29240_29673__$1);
var G__29676 = cljs.core.chunk_rest(seq__29240_29673__$1);
var G__29677 = c__5525__auto___29675;
var G__29678 = cljs.core.count(c__5525__auto___29675);
var G__29679 = (0);
seq__29240_29653 = G__29676;
chunk__29242_29654 = G__29677;
count__29243_29655 = G__29678;
i__29244_29656 = G__29679;
continue;
} else {
var map__29270_29681 = cljs.core.first(seq__29240_29673__$1);
var map__29270_29682__$1 = cljs.core.__destructure_map(map__29270_29681);
var task_29683 = map__29270_29682__$1;
var fn_str_29684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29270_29682__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29270_29682__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29686 = goog.getObjectByName(fn_str_29684,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29685)].join(''));

(fn_obj_29686.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29686.cljs$core$IFn$_invoke$arity$2(path,new_link_29650) : fn_obj_29686.call(null, path,new_link_29650));


var G__29687 = cljs.core.next(seq__29240_29673__$1);
var G__29688 = null;
var G__29689 = (0);
var G__29690 = (0);
seq__29240_29653 = G__29687;
chunk__29242_29654 = G__29688;
count__29243_29655 = G__29689;
i__29244_29656 = G__29690;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29648);
});})(seq__29099_29587,chunk__29103_29588,count__29104_29589,i__29105_29590,seq__28698,chunk__28701,count__28702,i__28703,new_link_29650,path_match_29649,node_29648,seq__29099_29642__$1,temp__5804__auto___29641,path,map__28694,map__28694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29649], 0));

goog.dom.insertSiblingAfter(new_link_29650,node_29648);


var G__29692 = cljs.core.next(seq__29099_29642__$1);
var G__29693 = null;
var G__29694 = (0);
var G__29695 = (0);
seq__29099_29587 = G__29692;
chunk__29103_29588 = G__29693;
count__29104_29589 = G__29694;
i__29105_29590 = G__29695;
continue;
} else {
var G__29697 = cljs.core.next(seq__29099_29642__$1);
var G__29698 = null;
var G__29699 = (0);
var G__29700 = (0);
seq__29099_29587 = G__29697;
chunk__29103_29588 = G__29698;
count__29104_29589 = G__29699;
i__29105_29590 = G__29700;
continue;
}
} else {
var G__29701 = cljs.core.next(seq__29099_29642__$1);
var G__29702 = null;
var G__29703 = (0);
var G__29704 = (0);
seq__29099_29587 = G__29701;
chunk__29103_29588 = G__29702;
count__29104_29589 = G__29703;
i__29105_29590 = G__29704;
continue;
}
}
} else {
}
}
break;
}


var G__29705 = seq__28698;
var G__29706 = chunk__28701;
var G__29707 = count__28702;
var G__29708 = (i__28703 + (1));
seq__28698 = G__29705;
chunk__28701 = G__29706;
count__28702 = G__29707;
i__28703 = G__29708;
continue;
} else {
var G__29709 = seq__28698;
var G__29710 = chunk__28701;
var G__29711 = count__28702;
var G__29712 = (i__28703 + (1));
seq__28698 = G__29709;
chunk__28701 = G__29710;
count__28702 = G__29711;
i__28703 = G__29712;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28698);
if(temp__5804__auto__){
var seq__28698__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28698__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28698__$1);
var G__29714 = cljs.core.chunk_rest(seq__28698__$1);
var G__29715 = c__5525__auto__;
var G__29716 = cljs.core.count(c__5525__auto__);
var G__29717 = (0);
seq__28698 = G__29714;
chunk__28701 = G__29715;
count__28702 = G__29716;
i__28703 = G__29717;
continue;
} else {
var path = cljs.core.first(seq__28698__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29293_29718 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29297_29719 = null;
var count__29298_29720 = (0);
var i__29299_29721 = (0);
while(true){
if((i__29299_29721 < count__29298_29720)){
var node_29724 = chunk__29297_29719.cljs$core$IIndexed$_nth$arity$2(null, i__29299_29721);
if(cljs.core.not(node_29724.shadow$old)){
var path_match_29725 = shadow.cljs.devtools.client.browser.match_paths(node_29724.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29725)){
var new_link_29726 = (function (){var G__29396 = node_29724.cloneNode(true);
G__29396.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29725),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29396;
})();
(node_29724.shadow$old = true);

(new_link_29726.onload = ((function (seq__29293_29718,chunk__29297_29719,count__29298_29720,i__29299_29721,seq__28698,chunk__28701,count__28702,i__28703,new_link_29726,path_match_29725,node_29724,path,seq__28698__$1,temp__5804__auto__,map__28694,map__28694__$1,msg,updates,reload_info){
return (function (e){
var seq__29397_29727 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29399_29728 = null;
var count__29400_29729 = (0);
var i__29401_29730 = (0);
while(true){
if((i__29401_29730 < count__29400_29729)){
var map__29410_29731 = chunk__29399_29728.cljs$core$IIndexed$_nth$arity$2(null, i__29401_29730);
var map__29410_29732__$1 = cljs.core.__destructure_map(map__29410_29731);
var task_29733 = map__29410_29732__$1;
var fn_str_29734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29410_29732__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29410_29732__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29736 = goog.getObjectByName(fn_str_29734,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29735)].join(''));

(fn_obj_29736.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29736.cljs$core$IFn$_invoke$arity$2(path,new_link_29726) : fn_obj_29736.call(null, path,new_link_29726));


var G__29737 = seq__29397_29727;
var G__29738 = chunk__29399_29728;
var G__29739 = count__29400_29729;
var G__29740 = (i__29401_29730 + (1));
seq__29397_29727 = G__29737;
chunk__29399_29728 = G__29738;
count__29400_29729 = G__29739;
i__29401_29730 = G__29740;
continue;
} else {
var temp__5804__auto___29741__$1 = cljs.core.seq(seq__29397_29727);
if(temp__5804__auto___29741__$1){
var seq__29397_29742__$1 = temp__5804__auto___29741__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29397_29742__$1)){
var c__5525__auto___29743 = cljs.core.chunk_first(seq__29397_29742__$1);
var G__29744 = cljs.core.chunk_rest(seq__29397_29742__$1);
var G__29745 = c__5525__auto___29743;
var G__29746 = cljs.core.count(c__5525__auto___29743);
var G__29747 = (0);
seq__29397_29727 = G__29744;
chunk__29399_29728 = G__29745;
count__29400_29729 = G__29746;
i__29401_29730 = G__29747;
continue;
} else {
var map__29413_29748 = cljs.core.first(seq__29397_29742__$1);
var map__29413_29749__$1 = cljs.core.__destructure_map(map__29413_29748);
var task_29750 = map__29413_29749__$1;
var fn_str_29751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29413_29749__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29413_29749__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29754 = goog.getObjectByName(fn_str_29751,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29752)].join(''));

(fn_obj_29754.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29754.cljs$core$IFn$_invoke$arity$2(path,new_link_29726) : fn_obj_29754.call(null, path,new_link_29726));


var G__29756 = cljs.core.next(seq__29397_29742__$1);
var G__29757 = null;
var G__29758 = (0);
var G__29759 = (0);
seq__29397_29727 = G__29756;
chunk__29399_29728 = G__29757;
count__29400_29729 = G__29758;
i__29401_29730 = G__29759;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29724);
});})(seq__29293_29718,chunk__29297_29719,count__29298_29720,i__29299_29721,seq__28698,chunk__28701,count__28702,i__28703,new_link_29726,path_match_29725,node_29724,path,seq__28698__$1,temp__5804__auto__,map__28694,map__28694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29725], 0));

goog.dom.insertSiblingAfter(new_link_29726,node_29724);


var G__29762 = seq__29293_29718;
var G__29763 = chunk__29297_29719;
var G__29764 = count__29298_29720;
var G__29765 = (i__29299_29721 + (1));
seq__29293_29718 = G__29762;
chunk__29297_29719 = G__29763;
count__29298_29720 = G__29764;
i__29299_29721 = G__29765;
continue;
} else {
var G__29767 = seq__29293_29718;
var G__29768 = chunk__29297_29719;
var G__29769 = count__29298_29720;
var G__29770 = (i__29299_29721 + (1));
seq__29293_29718 = G__29767;
chunk__29297_29719 = G__29768;
count__29298_29720 = G__29769;
i__29299_29721 = G__29770;
continue;
}
} else {
var G__29771 = seq__29293_29718;
var G__29772 = chunk__29297_29719;
var G__29773 = count__29298_29720;
var G__29774 = (i__29299_29721 + (1));
seq__29293_29718 = G__29771;
chunk__29297_29719 = G__29772;
count__29298_29720 = G__29773;
i__29299_29721 = G__29774;
continue;
}
} else {
var temp__5804__auto___29775__$1 = cljs.core.seq(seq__29293_29718);
if(temp__5804__auto___29775__$1){
var seq__29293_29776__$1 = temp__5804__auto___29775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29293_29776__$1)){
var c__5525__auto___29777 = cljs.core.chunk_first(seq__29293_29776__$1);
var G__29778 = cljs.core.chunk_rest(seq__29293_29776__$1);
var G__29779 = c__5525__auto___29777;
var G__29780 = cljs.core.count(c__5525__auto___29777);
var G__29781 = (0);
seq__29293_29718 = G__29778;
chunk__29297_29719 = G__29779;
count__29298_29720 = G__29780;
i__29299_29721 = G__29781;
continue;
} else {
var node_29782 = cljs.core.first(seq__29293_29776__$1);
if(cljs.core.not(node_29782.shadow$old)){
var path_match_29784 = shadow.cljs.devtools.client.browser.match_paths(node_29782.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29784)){
var new_link_29786 = (function (){var G__29416 = node_29782.cloneNode(true);
G__29416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29784),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29416;
})();
(node_29782.shadow$old = true);

(new_link_29786.onload = ((function (seq__29293_29718,chunk__29297_29719,count__29298_29720,i__29299_29721,seq__28698,chunk__28701,count__28702,i__28703,new_link_29786,path_match_29784,node_29782,seq__29293_29776__$1,temp__5804__auto___29775__$1,path,seq__28698__$1,temp__5804__auto__,map__28694,map__28694__$1,msg,updates,reload_info){
return (function (e){
var seq__29417_29788 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29419_29789 = null;
var count__29420_29790 = (0);
var i__29421_29791 = (0);
while(true){
if((i__29421_29791 < count__29420_29790)){
var map__29427_29793 = chunk__29419_29789.cljs$core$IIndexed$_nth$arity$2(null, i__29421_29791);
var map__29427_29794__$1 = cljs.core.__destructure_map(map__29427_29793);
var task_29795 = map__29427_29794__$1;
var fn_str_29796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427_29794__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29427_29794__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29798 = goog.getObjectByName(fn_str_29796,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29797)].join(''));

(fn_obj_29798.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29798.cljs$core$IFn$_invoke$arity$2(path,new_link_29786) : fn_obj_29798.call(null, path,new_link_29786));


var G__29799 = seq__29417_29788;
var G__29800 = chunk__29419_29789;
var G__29801 = count__29420_29790;
var G__29802 = (i__29421_29791 + (1));
seq__29417_29788 = G__29799;
chunk__29419_29789 = G__29800;
count__29420_29790 = G__29801;
i__29421_29791 = G__29802;
continue;
} else {
var temp__5804__auto___29803__$2 = cljs.core.seq(seq__29417_29788);
if(temp__5804__auto___29803__$2){
var seq__29417_29804__$1 = temp__5804__auto___29803__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29417_29804__$1)){
var c__5525__auto___29805 = cljs.core.chunk_first(seq__29417_29804__$1);
var G__29806 = cljs.core.chunk_rest(seq__29417_29804__$1);
var G__29807 = c__5525__auto___29805;
var G__29809 = cljs.core.count(c__5525__auto___29805);
var G__29810 = (0);
seq__29417_29788 = G__29806;
chunk__29419_29789 = G__29807;
count__29420_29790 = G__29809;
i__29421_29791 = G__29810;
continue;
} else {
var map__29429_29811 = cljs.core.first(seq__29417_29804__$1);
var map__29429_29812__$1 = cljs.core.__destructure_map(map__29429_29811);
var task_29813 = map__29429_29812__$1;
var fn_str_29814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29429_29812__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29429_29812__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29816 = goog.getObjectByName(fn_str_29814,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29815)].join(''));

(fn_obj_29816.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29816.cljs$core$IFn$_invoke$arity$2(path,new_link_29786) : fn_obj_29816.call(null, path,new_link_29786));


var G__29818 = cljs.core.next(seq__29417_29804__$1);
var G__29819 = null;
var G__29820 = (0);
var G__29821 = (0);
seq__29417_29788 = G__29818;
chunk__29419_29789 = G__29819;
count__29420_29790 = G__29820;
i__29421_29791 = G__29821;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29782);
});})(seq__29293_29718,chunk__29297_29719,count__29298_29720,i__29299_29721,seq__28698,chunk__28701,count__28702,i__28703,new_link_29786,path_match_29784,node_29782,seq__29293_29776__$1,temp__5804__auto___29775__$1,path,seq__28698__$1,temp__5804__auto__,map__28694,map__28694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29784], 0));

goog.dom.insertSiblingAfter(new_link_29786,node_29782);


var G__29825 = cljs.core.next(seq__29293_29776__$1);
var G__29826 = null;
var G__29827 = (0);
var G__29828 = (0);
seq__29293_29718 = G__29825;
chunk__29297_29719 = G__29826;
count__29298_29720 = G__29827;
i__29299_29721 = G__29828;
continue;
} else {
var G__29830 = cljs.core.next(seq__29293_29776__$1);
var G__29831 = null;
var G__29832 = (0);
var G__29833 = (0);
seq__29293_29718 = G__29830;
chunk__29297_29719 = G__29831;
count__29298_29720 = G__29832;
i__29299_29721 = G__29833;
continue;
}
} else {
var G__29834 = cljs.core.next(seq__29293_29776__$1);
var G__29835 = null;
var G__29836 = (0);
var G__29837 = (0);
seq__29293_29718 = G__29834;
chunk__29297_29719 = G__29835;
count__29298_29720 = G__29836;
i__29299_29721 = G__29837;
continue;
}
}
} else {
}
}
break;
}


var G__29838 = cljs.core.next(seq__28698__$1);
var G__29839 = null;
var G__29840 = (0);
var G__29841 = (0);
seq__28698 = G__29838;
chunk__28701 = G__29839;
count__28702 = G__29840;
i__28703 = G__29841;
continue;
} else {
var G__29842 = cljs.core.next(seq__28698__$1);
var G__29843 = null;
var G__29844 = (0);
var G__29845 = (0);
seq__28698 = G__29842;
chunk__28701 = G__29843;
count__28702 = G__29844;
i__28703 = G__29845;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__29444){
var map__29445 = p__29444;
var map__29445__$1 = cljs.core.__destructure_map(map__29445);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29445__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__29448,done,error){
var map__29449 = p__29448;
var map__29449__$1 = cljs.core.__destructure_map(map__29449);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__29452,done,error){
var map__29454 = p__29452;
var map__29454__$1 = cljs.core.__destructure_map(map__29454);
var msg = map__29454__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29454__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29454__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29454__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__29458){
var map__29459 = p__29458;
var map__29459__$1 = cljs.core.__destructure_map(map__29459);
var src = map__29459__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29459__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__29466 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__29466) : done.call(null, G__29466));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__29467){
var map__29468 = p__29467;
var map__29468__$1 = cljs.core.__destructure_map(map__29468);
var msg__$1 = map__29468__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29468__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e29469){var ex = e29469;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__29473){
var map__29474 = p__29473;
var map__29474__$1 = cljs.core.__destructure_map(map__29474);
var env = map__29474__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29474__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__29495){
var map__29496 = p__29495;
var map__29496__$1 = cljs.core.__destructure_map(map__29496);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__29503){
var map__29504 = p__29503;
var map__29504__$1 = cljs.core.__destructure_map(map__29504);
var svc = map__29504__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29504__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
