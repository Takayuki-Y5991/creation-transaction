goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__24171 = libspec;
var seq__24172 = cljs.core.seq(vec__24171);
var first__24173 = cljs.core.first(seq__24172);
var seq__24172__$1 = cljs.core.next(seq__24172);
var lib = first__24173;
var spec = seq__24172__$1;
var libspec__$1 = vec__24171;
var vec__24174 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24174,(0),null);
var vec__24177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24174,(1),null);
var seq__24178 = cljs.core.seq(vec__24177);
var first__24179 = cljs.core.first(seq__24178);
var seq__24178__$1 = cljs.core.next(seq__24178);
var _ = first__24179;
var first__24179__$1 = cljs.core.first(seq__24178__$1);
var seq__24178__$2 = cljs.core.next(seq__24178__$1);
var alias = first__24179__$1;
var post_spec = seq__24178__$2;
var post = vec__24177;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__24180 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24180,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__24180;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__24184 = cljs.core.seq(new_as_aliases);
var chunk__24185 = null;
var count__24186 = (0);
var i__24187 = (0);
while(true){
if((i__24187 < count__24186)){
var vec__24200 = chunk__24185.cljs$core$IIndexed$_nth$arity$2(null, i__24187);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24200,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24200,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__24252 = seq__24184;
var G__24253 = chunk__24185;
var G__24254 = count__24186;
var G__24255 = (i__24187 + (1));
seq__24184 = G__24252;
chunk__24185 = G__24253;
count__24186 = G__24254;
i__24187 = G__24255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24184);
if(temp__5804__auto__){
var seq__24184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24184__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24184__$1);
var G__24256 = cljs.core.chunk_rest(seq__24184__$1);
var G__24257 = c__5525__auto__;
var G__24258 = cljs.core.count(c__5525__auto__);
var G__24259 = (0);
seq__24184 = G__24256;
chunk__24185 = G__24257;
count__24186 = G__24258;
i__24187 = G__24259;
continue;
} else {
var vec__24206 = cljs.core.first(seq__24184__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24206,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24206,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__24260 = cljs.core.next(seq__24184__$1);
var G__24261 = null;
var G__24262 = (0);
var G__24263 = (0);
seq__24184 = G__24260;
chunk__24185 = G__24261;
count__24186 = G__24262;
i__24187 = G__24263;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__24217 = arguments.length;
switch (G__24217) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__24218 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__24218__$1 = cljs.core.__destructure_map(map__24218);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24218__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24218__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__24219 = ret__$1;
var G__24219__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__24219,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__24219);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__24219__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__24219__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__24223,p__24224){
var map__24226 = p__24223;
var map__24226__$1 = cljs.core.__destructure_map(map__24226);
var ret__$1 = map__24226__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24226__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__24228 = p__24224;
var seq__24229 = cljs.core.seq(vec__24228);
var first__24230 = cljs.core.first(seq__24229);
var seq__24229__$1 = cljs.core.next(seq__24229);
var spec_key = first__24230;
var libspecs = seq__24229__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__24236 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__24236__$1 = cljs.core.__destructure_map(map__24236);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24236__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24236__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__24237 = ret__$1;
var G__24237__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__24237,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__24237);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__24237__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__24237__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
