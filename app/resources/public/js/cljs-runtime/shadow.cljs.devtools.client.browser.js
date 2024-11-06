goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25114 = arguments.length;
var i__5727__auto___25115 = (0);
while(true){
if((i__5727__auto___25115 < len__5726__auto___25114)){
args__5732__auto__.push((arguments[i__5727__auto___25115]));

var G__25116 = (i__5727__auto___25115 + (1));
i__5727__auto___25115 = G__25116;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23994){
var G__23995 = cljs.core.first(seq23994);
var seq23994__$1 = cljs.core.next(seq23994);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23995,seq23994__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24009 = cljs.core.seq(sources);
var chunk__24010 = null;
var count__24011 = (0);
var i__24012 = (0);
while(true){
if((i__24012 < count__24011)){
var map__24040 = chunk__24010.cljs$core$IIndexed$_nth$arity$2(null, i__24012);
var map__24040__$1 = cljs.core.__destructure_map(map__24040);
var src = map__24040__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24040__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24040__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24040__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24040__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24042){var e_25121 = e24042;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_25121);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25121.message)].join('')));
}

var G__25122 = seq__24009;
var G__25123 = chunk__24010;
var G__25124 = count__24011;
var G__25125 = (i__24012 + (1));
seq__24009 = G__25122;
chunk__24010 = G__25123;
count__24011 = G__25124;
i__24012 = G__25125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24009);
if(temp__5804__auto__){
var seq__24009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24009__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24009__$1);
var G__25126 = cljs.core.chunk_rest(seq__24009__$1);
var G__25127 = c__5525__auto__;
var G__25128 = cljs.core.count(c__5525__auto__);
var G__25129 = (0);
seq__24009 = G__25126;
chunk__24010 = G__25127;
count__24011 = G__25128;
i__24012 = G__25129;
continue;
} else {
var map__24054 = cljs.core.first(seq__24009__$1);
var map__24054__$1 = cljs.core.__destructure_map(map__24054);
var src = map__24054__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24054__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24054__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24054__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24054__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24059){var e_25135 = e24059;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_25135);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25135.message)].join('')));
}

var G__25139 = cljs.core.next(seq__24009__$1);
var G__25140 = null;
var G__25141 = (0);
var G__25142 = (0);
seq__24009 = G__25139;
chunk__24010 = G__25140;
count__24011 = G__25141;
i__24012 = G__25142;
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
var seq__24083 = cljs.core.seq(js_requires);
var chunk__24084 = null;
var count__24085 = (0);
var i__24086 = (0);
while(true){
if((i__24086 < count__24085)){
var js_ns = chunk__24084.cljs$core$IIndexed$_nth$arity$2(null, i__24086);
var require_str_25143 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_25143);


var G__25144 = seq__24083;
var G__25145 = chunk__24084;
var G__25146 = count__24085;
var G__25147 = (i__24086 + (1));
seq__24083 = G__25144;
chunk__24084 = G__25145;
count__24085 = G__25146;
i__24086 = G__25147;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24083);
if(temp__5804__auto__){
var seq__24083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24083__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24083__$1);
var G__25148 = cljs.core.chunk_rest(seq__24083__$1);
var G__25149 = c__5525__auto__;
var G__25150 = cljs.core.count(c__5525__auto__);
var G__25151 = (0);
seq__24083 = G__25148;
chunk__24084 = G__25149;
count__24085 = G__25150;
i__24086 = G__25151;
continue;
} else {
var js_ns = cljs.core.first(seq__24083__$1);
var require_str_25152 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_25152);


var G__25154 = cljs.core.next(seq__24083__$1);
var G__25155 = null;
var G__25156 = (0);
var G__25157 = (0);
seq__24083 = G__25154;
chunk__24084 = G__25155;
count__24085 = G__25156;
i__24086 = G__25157;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24123){
var map__24124 = p__24123;
var map__24124__$1 = cljs.core.__destructure_map(map__24124);
var msg = map__24124__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24124__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24124__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24128(s__24129){
return (new cljs.core.LazySeq(null,(function (){
var s__24129__$1 = s__24129;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24129__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24139 = cljs.core.first(xs__6360__auto__);
var map__24139__$1 = cljs.core.__destructure_map(map__24139);
var src = map__24139__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24139__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24139__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__24129__$1,map__24139,map__24139__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24124,map__24124__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24128_$_iter__24130(s__24131){
return (new cljs.core.LazySeq(null,((function (s__24129__$1,map__24139,map__24139__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24124,map__24124__$1,msg,info,reload_info){
return (function (){
var s__24131__$1 = s__24131;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24131__$1);
if(temp__5804__auto____$1){
var s__24131__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24131__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24131__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24133 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24132 = (0);
while(true){
if((i__24132 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__24132);
cljs.core.chunk_append(b__24133,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__25162 = (i__24132 + (1));
i__24132 = G__25162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24133),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24128_$_iter__24130(cljs.core.chunk_rest(s__24131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24133),null);
}
} else {
var warning = cljs.core.first(s__24131__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24128_$_iter__24130(cljs.core.rest(s__24131__$2)));
}
} else {
return null;
}
break;
}
});})(s__24129__$1,map__24139,map__24139__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24124,map__24124__$1,msg,info,reload_info))
,null,null));
});})(s__24129__$1,map__24139,map__24139__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24124,map__24124__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24128(cljs.core.rest(s__24129__$1)));
} else {
var G__25163 = cljs.core.rest(s__24129__$1);
s__24129__$1 = G__25163;
continue;
}
} else {
var G__25164 = cljs.core.rest(s__24129__$1);
s__24129__$1 = G__25164;
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
var seq__24150_25166 = cljs.core.seq(warnings);
var chunk__24151_25167 = null;
var count__24152_25168 = (0);
var i__24153_25169 = (0);
while(true){
if((i__24153_25169 < count__24152_25168)){
var map__24163_25170 = chunk__24151_25167.cljs$core$IIndexed$_nth$arity$2(null, i__24153_25169);
var map__24163_25171__$1 = cljs.core.__destructure_map(map__24163_25170);
var w_25172 = map__24163_25171__$1;
var msg_25173__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163_25171__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163_25171__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163_25171__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163_25171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25176)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25174),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25175),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25173__$1)].join(''));


var G__25178 = seq__24150_25166;
var G__25179 = chunk__24151_25167;
var G__25180 = count__24152_25168;
var G__25181 = (i__24153_25169 + (1));
seq__24150_25166 = G__25178;
chunk__24151_25167 = G__25179;
count__24152_25168 = G__25180;
i__24153_25169 = G__25181;
continue;
} else {
var temp__5804__auto___25182 = cljs.core.seq(seq__24150_25166);
if(temp__5804__auto___25182){
var seq__24150_25183__$1 = temp__5804__auto___25182;
if(cljs.core.chunked_seq_QMARK_(seq__24150_25183__$1)){
var c__5525__auto___25184 = cljs.core.chunk_first(seq__24150_25183__$1);
var G__25185 = cljs.core.chunk_rest(seq__24150_25183__$1);
var G__25186 = c__5525__auto___25184;
var G__25187 = cljs.core.count(c__5525__auto___25184);
var G__25188 = (0);
seq__24150_25166 = G__25185;
chunk__24151_25167 = G__25186;
count__24152_25168 = G__25187;
i__24153_25169 = G__25188;
continue;
} else {
var map__24167_25189 = cljs.core.first(seq__24150_25183__$1);
var map__24167_25190__$1 = cljs.core.__destructure_map(map__24167_25189);
var w_25191 = map__24167_25190__$1;
var msg_25192__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24167_25190__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24167_25190__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24167_25190__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24167_25190__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25195)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25193),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25194),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25192__$1)].join(''));


var G__25196 = cljs.core.next(seq__24150_25183__$1);
var G__25197 = null;
var G__25198 = (0);
var G__25199 = (0);
seq__24150_25166 = G__25196;
chunk__24151_25167 = G__25197;
count__24152_25168 = G__25198;
i__24153_25169 = G__25199;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24107_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24107_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24221){
var map__24222 = p__24221;
var map__24222__$1 = cljs.core.__destructure_map(map__24222);
var msg = map__24222__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24222__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24222__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24225 = cljs.core.seq(updates);
var chunk__24231 = null;
var count__24232 = (0);
var i__24233 = (0);
while(true){
if((i__24233 < count__24232)){
var path = chunk__24231.cljs$core$IIndexed$_nth$arity$2(null, i__24233);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24657_25202 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24661_25203 = null;
var count__24662_25204 = (0);
var i__24663_25205 = (0);
while(true){
if((i__24663_25205 < count__24662_25204)){
var node_25206 = chunk__24661_25203.cljs$core$IIndexed$_nth$arity$2(null, i__24663_25205);
if(cljs.core.not(node_25206.shadow$old)){
var path_match_25207 = shadow.cljs.devtools.client.browser.match_paths(node_25206.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25207)){
var new_link_25209 = (function (){var G__24797 = node_25206.cloneNode(true);
G__24797.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25207),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24797;
})();
(node_25206.shadow$old = true);

(new_link_25209.onload = ((function (seq__24657_25202,chunk__24661_25203,count__24662_25204,i__24663_25205,seq__24225,chunk__24231,count__24232,i__24233,new_link_25209,path_match_25207,node_25206,path,map__24222,map__24222__$1,msg,updates,reload_info){
return (function (e){
var seq__24798_25212 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24800_25213 = null;
var count__24801_25214 = (0);
var i__24802_25215 = (0);
while(true){
if((i__24802_25215 < count__24801_25214)){
var map__24812_25216 = chunk__24800_25213.cljs$core$IIndexed$_nth$arity$2(null, i__24802_25215);
var map__24812_25217__$1 = cljs.core.__destructure_map(map__24812_25216);
var task_25218 = map__24812_25217__$1;
var fn_str_25219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24812_25217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24812_25217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25222 = goog.getObjectByName(fn_str_25219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25220)].join(''));

(fn_obj_25222.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25222.cljs$core$IFn$_invoke$arity$2(path,new_link_25209) : fn_obj_25222.call(null, path,new_link_25209));


var G__25223 = seq__24798_25212;
var G__25224 = chunk__24800_25213;
var G__25225 = count__24801_25214;
var G__25226 = (i__24802_25215 + (1));
seq__24798_25212 = G__25223;
chunk__24800_25213 = G__25224;
count__24801_25214 = G__25225;
i__24802_25215 = G__25226;
continue;
} else {
var temp__5804__auto___25227 = cljs.core.seq(seq__24798_25212);
if(temp__5804__auto___25227){
var seq__24798_25228__$1 = temp__5804__auto___25227;
if(cljs.core.chunked_seq_QMARK_(seq__24798_25228__$1)){
var c__5525__auto___25229 = cljs.core.chunk_first(seq__24798_25228__$1);
var G__25230 = cljs.core.chunk_rest(seq__24798_25228__$1);
var G__25231 = c__5525__auto___25229;
var G__25232 = cljs.core.count(c__5525__auto___25229);
var G__25233 = (0);
seq__24798_25212 = G__25230;
chunk__24800_25213 = G__25231;
count__24801_25214 = G__25232;
i__24802_25215 = G__25233;
continue;
} else {
var map__24817_25234 = cljs.core.first(seq__24798_25228__$1);
var map__24817_25235__$1 = cljs.core.__destructure_map(map__24817_25234);
var task_25236 = map__24817_25235__$1;
var fn_str_25237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817_25235__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817_25235__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25244 = goog.getObjectByName(fn_str_25237,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25238)].join(''));

(fn_obj_25244.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25244.cljs$core$IFn$_invoke$arity$2(path,new_link_25209) : fn_obj_25244.call(null, path,new_link_25209));


var G__25245 = cljs.core.next(seq__24798_25228__$1);
var G__25246 = null;
var G__25247 = (0);
var G__25248 = (0);
seq__24798_25212 = G__25245;
chunk__24800_25213 = G__25246;
count__24801_25214 = G__25247;
i__24802_25215 = G__25248;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25206);
});})(seq__24657_25202,chunk__24661_25203,count__24662_25204,i__24663_25205,seq__24225,chunk__24231,count__24232,i__24233,new_link_25209,path_match_25207,node_25206,path,map__24222,map__24222__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25207], 0));

goog.dom.insertSiblingAfter(new_link_25209,node_25206);


var G__25251 = seq__24657_25202;
var G__25252 = chunk__24661_25203;
var G__25253 = count__24662_25204;
var G__25254 = (i__24663_25205 + (1));
seq__24657_25202 = G__25251;
chunk__24661_25203 = G__25252;
count__24662_25204 = G__25253;
i__24663_25205 = G__25254;
continue;
} else {
var G__25256 = seq__24657_25202;
var G__25257 = chunk__24661_25203;
var G__25258 = count__24662_25204;
var G__25259 = (i__24663_25205 + (1));
seq__24657_25202 = G__25256;
chunk__24661_25203 = G__25257;
count__24662_25204 = G__25258;
i__24663_25205 = G__25259;
continue;
}
} else {
var G__25260 = seq__24657_25202;
var G__25261 = chunk__24661_25203;
var G__25262 = count__24662_25204;
var G__25263 = (i__24663_25205 + (1));
seq__24657_25202 = G__25260;
chunk__24661_25203 = G__25261;
count__24662_25204 = G__25262;
i__24663_25205 = G__25263;
continue;
}
} else {
var temp__5804__auto___25264 = cljs.core.seq(seq__24657_25202);
if(temp__5804__auto___25264){
var seq__24657_25265__$1 = temp__5804__auto___25264;
if(cljs.core.chunked_seq_QMARK_(seq__24657_25265__$1)){
var c__5525__auto___25266 = cljs.core.chunk_first(seq__24657_25265__$1);
var G__25267 = cljs.core.chunk_rest(seq__24657_25265__$1);
var G__25268 = c__5525__auto___25266;
var G__25269 = cljs.core.count(c__5525__auto___25266);
var G__25270 = (0);
seq__24657_25202 = G__25267;
chunk__24661_25203 = G__25268;
count__24662_25204 = G__25269;
i__24663_25205 = G__25270;
continue;
} else {
var node_25271 = cljs.core.first(seq__24657_25265__$1);
if(cljs.core.not(node_25271.shadow$old)){
var path_match_25272 = shadow.cljs.devtools.client.browser.match_paths(node_25271.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25272)){
var new_link_25273 = (function (){var G__24827 = node_25271.cloneNode(true);
G__24827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25272),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24827;
})();
(node_25271.shadow$old = true);

(new_link_25273.onload = ((function (seq__24657_25202,chunk__24661_25203,count__24662_25204,i__24663_25205,seq__24225,chunk__24231,count__24232,i__24233,new_link_25273,path_match_25272,node_25271,seq__24657_25265__$1,temp__5804__auto___25264,path,map__24222,map__24222__$1,msg,updates,reload_info){
return (function (e){
var seq__24832_25274 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24834_25275 = null;
var count__24835_25276 = (0);
var i__24836_25277 = (0);
while(true){
if((i__24836_25277 < count__24835_25276)){
var map__24850_25278 = chunk__24834_25275.cljs$core$IIndexed$_nth$arity$2(null, i__24836_25277);
var map__24850_25279__$1 = cljs.core.__destructure_map(map__24850_25278);
var task_25280 = map__24850_25279__$1;
var fn_str_25281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850_25279__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850_25279__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25283 = goog.getObjectByName(fn_str_25281,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25282)].join(''));

(fn_obj_25283.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25283.cljs$core$IFn$_invoke$arity$2(path,new_link_25273) : fn_obj_25283.call(null, path,new_link_25273));


var G__25284 = seq__24832_25274;
var G__25285 = chunk__24834_25275;
var G__25286 = count__24835_25276;
var G__25287 = (i__24836_25277 + (1));
seq__24832_25274 = G__25284;
chunk__24834_25275 = G__25285;
count__24835_25276 = G__25286;
i__24836_25277 = G__25287;
continue;
} else {
var temp__5804__auto___25289__$1 = cljs.core.seq(seq__24832_25274);
if(temp__5804__auto___25289__$1){
var seq__24832_25290__$1 = temp__5804__auto___25289__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24832_25290__$1)){
var c__5525__auto___25291 = cljs.core.chunk_first(seq__24832_25290__$1);
var G__25292 = cljs.core.chunk_rest(seq__24832_25290__$1);
var G__25293 = c__5525__auto___25291;
var G__25294 = cljs.core.count(c__5525__auto___25291);
var G__25295 = (0);
seq__24832_25274 = G__25292;
chunk__24834_25275 = G__25293;
count__24835_25276 = G__25294;
i__24836_25277 = G__25295;
continue;
} else {
var map__24855_25296 = cljs.core.first(seq__24832_25290__$1);
var map__24855_25297__$1 = cljs.core.__destructure_map(map__24855_25296);
var task_25298 = map__24855_25297__$1;
var fn_str_25299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24855_25297__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24855_25297__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25302 = goog.getObjectByName(fn_str_25299,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25300)].join(''));

(fn_obj_25302.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25302.cljs$core$IFn$_invoke$arity$2(path,new_link_25273) : fn_obj_25302.call(null, path,new_link_25273));


var G__25303 = cljs.core.next(seq__24832_25290__$1);
var G__25304 = null;
var G__25305 = (0);
var G__25306 = (0);
seq__24832_25274 = G__25303;
chunk__24834_25275 = G__25304;
count__24835_25276 = G__25305;
i__24836_25277 = G__25306;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25271);
});})(seq__24657_25202,chunk__24661_25203,count__24662_25204,i__24663_25205,seq__24225,chunk__24231,count__24232,i__24233,new_link_25273,path_match_25272,node_25271,seq__24657_25265__$1,temp__5804__auto___25264,path,map__24222,map__24222__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25272], 0));

goog.dom.insertSiblingAfter(new_link_25273,node_25271);


var G__25307 = cljs.core.next(seq__24657_25265__$1);
var G__25308 = null;
var G__25309 = (0);
var G__25310 = (0);
seq__24657_25202 = G__25307;
chunk__24661_25203 = G__25308;
count__24662_25204 = G__25309;
i__24663_25205 = G__25310;
continue;
} else {
var G__25311 = cljs.core.next(seq__24657_25265__$1);
var G__25312 = null;
var G__25313 = (0);
var G__25314 = (0);
seq__24657_25202 = G__25311;
chunk__24661_25203 = G__25312;
count__24662_25204 = G__25313;
i__24663_25205 = G__25314;
continue;
}
} else {
var G__25316 = cljs.core.next(seq__24657_25265__$1);
var G__25317 = null;
var G__25318 = (0);
var G__25319 = (0);
seq__24657_25202 = G__25316;
chunk__24661_25203 = G__25317;
count__24662_25204 = G__25318;
i__24663_25205 = G__25319;
continue;
}
}
} else {
}
}
break;
}


var G__25320 = seq__24225;
var G__25321 = chunk__24231;
var G__25322 = count__24232;
var G__25323 = (i__24233 + (1));
seq__24225 = G__25320;
chunk__24231 = G__25321;
count__24232 = G__25322;
i__24233 = G__25323;
continue;
} else {
var G__25324 = seq__24225;
var G__25325 = chunk__24231;
var G__25326 = count__24232;
var G__25327 = (i__24233 + (1));
seq__24225 = G__25324;
chunk__24231 = G__25325;
count__24232 = G__25326;
i__24233 = G__25327;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24225);
if(temp__5804__auto__){
var seq__24225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24225__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24225__$1);
var G__25329 = cljs.core.chunk_rest(seq__24225__$1);
var G__25330 = c__5525__auto__;
var G__25331 = cljs.core.count(c__5525__auto__);
var G__25332 = (0);
seq__24225 = G__25329;
chunk__24231 = G__25330;
count__24232 = G__25331;
i__24233 = G__25332;
continue;
} else {
var path = cljs.core.first(seq__24225__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24859_25333 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24863_25334 = null;
var count__24864_25335 = (0);
var i__24865_25336 = (0);
while(true){
if((i__24865_25336 < count__24864_25335)){
var node_25337 = chunk__24863_25334.cljs$core$IIndexed$_nth$arity$2(null, i__24865_25336);
if(cljs.core.not(node_25337.shadow$old)){
var path_match_25339 = shadow.cljs.devtools.client.browser.match_paths(node_25337.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25339)){
var new_link_25340 = (function (){var G__24934 = node_25337.cloneNode(true);
G__24934.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25339),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24934;
})();
(node_25337.shadow$old = true);

(new_link_25340.onload = ((function (seq__24859_25333,chunk__24863_25334,count__24864_25335,i__24865_25336,seq__24225,chunk__24231,count__24232,i__24233,new_link_25340,path_match_25339,node_25337,path,seq__24225__$1,temp__5804__auto__,map__24222,map__24222__$1,msg,updates,reload_info){
return (function (e){
var seq__24935_25341 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24937_25342 = null;
var count__24938_25343 = (0);
var i__24939_25344 = (0);
while(true){
if((i__24939_25344 < count__24938_25343)){
var map__24962_25345 = chunk__24937_25342.cljs$core$IIndexed$_nth$arity$2(null, i__24939_25344);
var map__24962_25346__$1 = cljs.core.__destructure_map(map__24962_25345);
var task_25347 = map__24962_25346__$1;
var fn_str_25348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24962_25346__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24962_25346__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25350 = goog.getObjectByName(fn_str_25348,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25349)].join(''));

(fn_obj_25350.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25350.cljs$core$IFn$_invoke$arity$2(path,new_link_25340) : fn_obj_25350.call(null, path,new_link_25340));


var G__25351 = seq__24935_25341;
var G__25352 = chunk__24937_25342;
var G__25353 = count__24938_25343;
var G__25354 = (i__24939_25344 + (1));
seq__24935_25341 = G__25351;
chunk__24937_25342 = G__25352;
count__24938_25343 = G__25353;
i__24939_25344 = G__25354;
continue;
} else {
var temp__5804__auto___25355__$1 = cljs.core.seq(seq__24935_25341);
if(temp__5804__auto___25355__$1){
var seq__24935_25356__$1 = temp__5804__auto___25355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24935_25356__$1)){
var c__5525__auto___25358 = cljs.core.chunk_first(seq__24935_25356__$1);
var G__25359 = cljs.core.chunk_rest(seq__24935_25356__$1);
var G__25360 = c__5525__auto___25358;
var G__25361 = cljs.core.count(c__5525__auto___25358);
var G__25362 = (0);
seq__24935_25341 = G__25359;
chunk__24937_25342 = G__25360;
count__24938_25343 = G__25361;
i__24939_25344 = G__25362;
continue;
} else {
var map__24967_25363 = cljs.core.first(seq__24935_25356__$1);
var map__24967_25364__$1 = cljs.core.__destructure_map(map__24967_25363);
var task_25365 = map__24967_25364__$1;
var fn_str_25366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24967_25364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24967_25364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25368 = goog.getObjectByName(fn_str_25366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25367)].join(''));

(fn_obj_25368.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25368.cljs$core$IFn$_invoke$arity$2(path,new_link_25340) : fn_obj_25368.call(null, path,new_link_25340));


var G__25370 = cljs.core.next(seq__24935_25356__$1);
var G__25371 = null;
var G__25372 = (0);
var G__25373 = (0);
seq__24935_25341 = G__25370;
chunk__24937_25342 = G__25371;
count__24938_25343 = G__25372;
i__24939_25344 = G__25373;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25337);
});})(seq__24859_25333,chunk__24863_25334,count__24864_25335,i__24865_25336,seq__24225,chunk__24231,count__24232,i__24233,new_link_25340,path_match_25339,node_25337,path,seq__24225__$1,temp__5804__auto__,map__24222,map__24222__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25339], 0));

goog.dom.insertSiblingAfter(new_link_25340,node_25337);


var G__25374 = seq__24859_25333;
var G__25375 = chunk__24863_25334;
var G__25376 = count__24864_25335;
var G__25377 = (i__24865_25336 + (1));
seq__24859_25333 = G__25374;
chunk__24863_25334 = G__25375;
count__24864_25335 = G__25376;
i__24865_25336 = G__25377;
continue;
} else {
var G__25378 = seq__24859_25333;
var G__25379 = chunk__24863_25334;
var G__25380 = count__24864_25335;
var G__25381 = (i__24865_25336 + (1));
seq__24859_25333 = G__25378;
chunk__24863_25334 = G__25379;
count__24864_25335 = G__25380;
i__24865_25336 = G__25381;
continue;
}
} else {
var G__25382 = seq__24859_25333;
var G__25383 = chunk__24863_25334;
var G__25384 = count__24864_25335;
var G__25385 = (i__24865_25336 + (1));
seq__24859_25333 = G__25382;
chunk__24863_25334 = G__25383;
count__24864_25335 = G__25384;
i__24865_25336 = G__25385;
continue;
}
} else {
var temp__5804__auto___25386__$1 = cljs.core.seq(seq__24859_25333);
if(temp__5804__auto___25386__$1){
var seq__24859_25387__$1 = temp__5804__auto___25386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24859_25387__$1)){
var c__5525__auto___25388 = cljs.core.chunk_first(seq__24859_25387__$1);
var G__25389 = cljs.core.chunk_rest(seq__24859_25387__$1);
var G__25390 = c__5525__auto___25388;
var G__25391 = cljs.core.count(c__5525__auto___25388);
var G__25392 = (0);
seq__24859_25333 = G__25389;
chunk__24863_25334 = G__25390;
count__24864_25335 = G__25391;
i__24865_25336 = G__25392;
continue;
} else {
var node_25393 = cljs.core.first(seq__24859_25387__$1);
if(cljs.core.not(node_25393.shadow$old)){
var path_match_25394 = shadow.cljs.devtools.client.browser.match_paths(node_25393.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25394)){
var new_link_25395 = (function (){var G__24989 = node_25393.cloneNode(true);
G__24989.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25394),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24989;
})();
(node_25393.shadow$old = true);

(new_link_25395.onload = ((function (seq__24859_25333,chunk__24863_25334,count__24864_25335,i__24865_25336,seq__24225,chunk__24231,count__24232,i__24233,new_link_25395,path_match_25394,node_25393,seq__24859_25387__$1,temp__5804__auto___25386__$1,path,seq__24225__$1,temp__5804__auto__,map__24222,map__24222__$1,msg,updates,reload_info){
return (function (e){
var seq__24993_25398 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24995_25399 = null;
var count__24996_25400 = (0);
var i__24997_25401 = (0);
while(true){
if((i__24997_25401 < count__24996_25400)){
var map__25006_25402 = chunk__24995_25399.cljs$core$IIndexed$_nth$arity$2(null, i__24997_25401);
var map__25006_25403__$1 = cljs.core.__destructure_map(map__25006_25402);
var task_25404 = map__25006_25403__$1;
var fn_str_25405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25006_25403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25006_25403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25407 = goog.getObjectByName(fn_str_25405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25406)].join(''));

(fn_obj_25407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25407.cljs$core$IFn$_invoke$arity$2(path,new_link_25395) : fn_obj_25407.call(null, path,new_link_25395));


var G__25408 = seq__24993_25398;
var G__25409 = chunk__24995_25399;
var G__25410 = count__24996_25400;
var G__25411 = (i__24997_25401 + (1));
seq__24993_25398 = G__25408;
chunk__24995_25399 = G__25409;
count__24996_25400 = G__25410;
i__24997_25401 = G__25411;
continue;
} else {
var temp__5804__auto___25412__$2 = cljs.core.seq(seq__24993_25398);
if(temp__5804__auto___25412__$2){
var seq__24993_25413__$1 = temp__5804__auto___25412__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24993_25413__$1)){
var c__5525__auto___25414 = cljs.core.chunk_first(seq__24993_25413__$1);
var G__25415 = cljs.core.chunk_rest(seq__24993_25413__$1);
var G__25416 = c__5525__auto___25414;
var G__25417 = cljs.core.count(c__5525__auto___25414);
var G__25418 = (0);
seq__24993_25398 = G__25415;
chunk__24995_25399 = G__25416;
count__24996_25400 = G__25417;
i__24997_25401 = G__25418;
continue;
} else {
var map__25012_25419 = cljs.core.first(seq__24993_25413__$1);
var map__25012_25420__$1 = cljs.core.__destructure_map(map__25012_25419);
var task_25421 = map__25012_25420__$1;
var fn_str_25422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25012_25420__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25012_25420__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25424 = goog.getObjectByName(fn_str_25422,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25423)].join(''));

(fn_obj_25424.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25424.cljs$core$IFn$_invoke$arity$2(path,new_link_25395) : fn_obj_25424.call(null, path,new_link_25395));


var G__25425 = cljs.core.next(seq__24993_25413__$1);
var G__25426 = null;
var G__25427 = (0);
var G__25428 = (0);
seq__24993_25398 = G__25425;
chunk__24995_25399 = G__25426;
count__24996_25400 = G__25427;
i__24997_25401 = G__25428;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25393);
});})(seq__24859_25333,chunk__24863_25334,count__24864_25335,i__24865_25336,seq__24225,chunk__24231,count__24232,i__24233,new_link_25395,path_match_25394,node_25393,seq__24859_25387__$1,temp__5804__auto___25386__$1,path,seq__24225__$1,temp__5804__auto__,map__24222,map__24222__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25394], 0));

goog.dom.insertSiblingAfter(new_link_25395,node_25393);


var G__25430 = cljs.core.next(seq__24859_25387__$1);
var G__25431 = null;
var G__25432 = (0);
var G__25433 = (0);
seq__24859_25333 = G__25430;
chunk__24863_25334 = G__25431;
count__24864_25335 = G__25432;
i__24865_25336 = G__25433;
continue;
} else {
var G__25434 = cljs.core.next(seq__24859_25387__$1);
var G__25435 = null;
var G__25436 = (0);
var G__25437 = (0);
seq__24859_25333 = G__25434;
chunk__24863_25334 = G__25435;
count__24864_25335 = G__25436;
i__24865_25336 = G__25437;
continue;
}
} else {
var G__25438 = cljs.core.next(seq__24859_25387__$1);
var G__25439 = null;
var G__25440 = (0);
var G__25441 = (0);
seq__24859_25333 = G__25438;
chunk__24863_25334 = G__25439;
count__24864_25335 = G__25440;
i__24865_25336 = G__25441;
continue;
}
}
} else {
}
}
break;
}


var G__25442 = cljs.core.next(seq__24225__$1);
var G__25443 = null;
var G__25444 = (0);
var G__25445 = (0);
seq__24225 = G__25442;
chunk__24231 = G__25443;
count__24232 = G__25444;
i__24233 = G__25445;
continue;
} else {
var G__25447 = cljs.core.next(seq__24225__$1);
var G__25448 = null;
var G__25449 = (0);
var G__25450 = (0);
seq__24225 = G__25447;
chunk__24231 = G__25448;
count__24232 = G__25449;
i__24233 = G__25450;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__25067){
var map__25070 = p__25067;
var map__25070__$1 = cljs.core.__destructure_map(map__25070);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25070__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__25075,done,error){
var map__25077 = p__25075;
var map__25077__$1 = cljs.core.__destructure_map(map__25077);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25077__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__25079,done,error){
var map__25080 = p__25079;
var map__25080__$1 = cljs.core.__destructure_map(map__25080);
var msg = map__25080__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25080__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25080__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25084){
var map__25085 = p__25084;
var map__25085__$1 = cljs.core.__destructure_map(map__25085);
var src = map__25085__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25085__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__25088 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25088) : done.call(null, G__25088));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__25090){
var map__25092 = p__25090;
var map__25092__$1 = cljs.core.__destructure_map(map__25092);
var msg__$1 = map__25092__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25092__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e25094){var ex = e25094;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__25095){
var map__25096 = p__25095;
var map__25096__$1 = cljs.core.__destructure_map(map__25096);
var env = map__25096__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25096__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__25104){
var map__25105 = p__25104;
var map__25105__$1 = cljs.core.__destructure_map(map__25105);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25105__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25105__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__25108){
var map__25110 = p__25108;
var map__25110__$1 = cljs.core.__destructure_map(map__25110);
var svc = map__25110__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25110__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
