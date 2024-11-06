goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22071){
var map__22072 = p__22071;
var map__22072__$1 = cljs.core.__destructure_map(map__22072);
var m = map__22072__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22072__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22077_22406 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22078_22407 = null;
var count__22079_22408 = (0);
var i__22080_22409 = (0);
while(true){
if((i__22080_22409 < count__22079_22408)){
var f_22410 = chunk__22078_22407.cljs$core$IIndexed$_nth$arity$2(null, i__22080_22409);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22410], 0));


var G__22411 = seq__22077_22406;
var G__22412 = chunk__22078_22407;
var G__22413 = count__22079_22408;
var G__22414 = (i__22080_22409 + (1));
seq__22077_22406 = G__22411;
chunk__22078_22407 = G__22412;
count__22079_22408 = G__22413;
i__22080_22409 = G__22414;
continue;
} else {
var temp__5804__auto___22415 = cljs.core.seq(seq__22077_22406);
if(temp__5804__auto___22415){
var seq__22077_22416__$1 = temp__5804__auto___22415;
if(cljs.core.chunked_seq_QMARK_(seq__22077_22416__$1)){
var c__5525__auto___22417 = cljs.core.chunk_first(seq__22077_22416__$1);
var G__22418 = cljs.core.chunk_rest(seq__22077_22416__$1);
var G__22419 = c__5525__auto___22417;
var G__22420 = cljs.core.count(c__5525__auto___22417);
var G__22421 = (0);
seq__22077_22406 = G__22418;
chunk__22078_22407 = G__22419;
count__22079_22408 = G__22420;
i__22080_22409 = G__22421;
continue;
} else {
var f_22422 = cljs.core.first(seq__22077_22416__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22422], 0));


var G__22423 = cljs.core.next(seq__22077_22416__$1);
var G__22424 = null;
var G__22425 = (0);
var G__22426 = (0);
seq__22077_22406 = G__22423;
chunk__22078_22407 = G__22424;
count__22079_22408 = G__22425;
i__22080_22409 = G__22426;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22430 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22430], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22430)))?cljs.core.second(arglists_22430):arglists_22430)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22089_22438 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22090_22439 = null;
var count__22091_22440 = (0);
var i__22092_22441 = (0);
while(true){
if((i__22092_22441 < count__22091_22440)){
var vec__22105_22442 = chunk__22090_22439.cljs$core$IIndexed$_nth$arity$2(null, i__22092_22441);
var name_22443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105_22442,(0),null);
var map__22108_22444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105_22442,(1),null);
var map__22108_22445__$1 = cljs.core.__destructure_map(map__22108_22444);
var doc_22446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108_22445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108_22445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22443], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22447], 0));

if(cljs.core.truth_(doc_22446)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22446], 0));
} else {
}


var G__22449 = seq__22089_22438;
var G__22450 = chunk__22090_22439;
var G__22451 = count__22091_22440;
var G__22452 = (i__22092_22441 + (1));
seq__22089_22438 = G__22449;
chunk__22090_22439 = G__22450;
count__22091_22440 = G__22451;
i__22092_22441 = G__22452;
continue;
} else {
var temp__5804__auto___22453 = cljs.core.seq(seq__22089_22438);
if(temp__5804__auto___22453){
var seq__22089_22454__$1 = temp__5804__auto___22453;
if(cljs.core.chunked_seq_QMARK_(seq__22089_22454__$1)){
var c__5525__auto___22455 = cljs.core.chunk_first(seq__22089_22454__$1);
var G__22456 = cljs.core.chunk_rest(seq__22089_22454__$1);
var G__22457 = c__5525__auto___22455;
var G__22458 = cljs.core.count(c__5525__auto___22455);
var G__22459 = (0);
seq__22089_22438 = G__22456;
chunk__22090_22439 = G__22457;
count__22091_22440 = G__22458;
i__22092_22441 = G__22459;
continue;
} else {
var vec__22113_22460 = cljs.core.first(seq__22089_22454__$1);
var name_22461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22113_22460,(0),null);
var map__22116_22462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22113_22460,(1),null);
var map__22116_22463__$1 = cljs.core.__destructure_map(map__22116_22462);
var doc_22464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22116_22463__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22116_22463__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22461], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22465], 0));

if(cljs.core.truth_(doc_22464)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22464], 0));
} else {
}


var G__22467 = cljs.core.next(seq__22089_22454__$1);
var G__22468 = null;
var G__22469 = (0);
var G__22470 = (0);
seq__22089_22438 = G__22467;
chunk__22090_22439 = G__22468;
count__22091_22440 = G__22469;
i__22092_22441 = G__22470;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22119 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22120 = null;
var count__22121 = (0);
var i__22122 = (0);
while(true){
if((i__22122 < count__22121)){
var role = chunk__22120.cljs$core$IIndexed$_nth$arity$2(null, i__22122);
var temp__5804__auto___22471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22471__$1)){
var spec_22472 = temp__5804__auto___22471__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22472)], 0));
} else {
}


var G__22474 = seq__22119;
var G__22475 = chunk__22120;
var G__22476 = count__22121;
var G__22477 = (i__22122 + (1));
seq__22119 = G__22474;
chunk__22120 = G__22475;
count__22121 = G__22476;
i__22122 = G__22477;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22119);
if(temp__5804__auto____$1){
var seq__22119__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22119__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22119__$1);
var G__22478 = cljs.core.chunk_rest(seq__22119__$1);
var G__22479 = c__5525__auto__;
var G__22480 = cljs.core.count(c__5525__auto__);
var G__22481 = (0);
seq__22119 = G__22478;
chunk__22120 = G__22479;
count__22121 = G__22480;
i__22122 = G__22481;
continue;
} else {
var role = cljs.core.first(seq__22119__$1);
var temp__5804__auto___22482__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22482__$2)){
var spec_22483 = temp__5804__auto___22482__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22483)], 0));
} else {
}


var G__22484 = cljs.core.next(seq__22119__$1);
var G__22485 = null;
var G__22486 = (0);
var G__22487 = (0);
seq__22119 = G__22484;
chunk__22120 = G__22485;
count__22121 = G__22486;
i__22122 = G__22487;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22311 = datafied_throwable;
var map__22311__$1 = cljs.core.__destructure_map(map__22311);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22311__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22311__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22311__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22314 = cljs.core.last(via);
var map__22314__$1 = cljs.core.__destructure_map(map__22314);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22315 = data;
var map__22315__$1 = cljs.core.__destructure_map(map__22315);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22315__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22315__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22315__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22316 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22316__$1 = cljs.core.__destructure_map(map__22316);
var top_data = map__22316__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22317 = phase;
var G__22317__$1 = (((G__22317 instanceof cljs.core.Keyword))?G__22317.fqn:null);
switch (G__22317__$1) {
case "read-source":
var map__22318 = data;
var map__22318__$1 = cljs.core.__destructure_map(map__22318);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22332 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22332__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22332,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22332);
var G__22332__$2 = (cljs.core.truth_((function (){var fexpr__22335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22335.cljs$core$IFn$_invoke$arity$1 ? fexpr__22335.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22335.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22332__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22332__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22332__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22332__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22336 = top_data;
var G__22336__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22336);
var G__22336__$2 = (cljs.core.truth_((function (){var fexpr__22337 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22337.cljs$core$IFn$_invoke$arity$1 ? fexpr__22337.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22337.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22336__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22336__$1);
var G__22336__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22336__$2);
var G__22336__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22336__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22336__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22341 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(3),null);
var G__22344 = top_data;
var G__22344__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22344);
var G__22344__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22344__$1);
var G__22344__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22344__$2);
var G__22344__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22344__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22344__$4;
}

break;
case "execution":
var vec__22346 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22307_SHARP_){
var or__5002__auto__ = (p1__22307_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__22349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22349.cljs$core$IFn$_invoke$arity$1 ? fexpr__22349.cljs$core$IFn$_invoke$arity$1(p1__22307_SHARP_) : fexpr__22349.call(null, p1__22307_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__22350 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22350__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22350,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22350);
var G__22350__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22350__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22350__$1);
var G__22350__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22350__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22350__$2);
var G__22350__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22350__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22350__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22350__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22350__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22317__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22362){
var map__22363 = p__22362;
var map__22363__$1 = cljs.core.__destructure_map(map__22363);
var triage_data = map__22363__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22363__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22367 = phase;
var G__22367__$1 = (((G__22367 instanceof cljs.core.Keyword))?G__22367.fqn:null);
switch (G__22367__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22368 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22369 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22370 = loc;
var G__22371 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22372_22506 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22373_22507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22374_22508 = true;
var _STAR_print_fn_STAR__temp_val__22375_22509 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22374_22508);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22375_22509);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22354_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22373_22507);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22372_22506);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22368,G__22369,G__22370,G__22371) : format.call(null, G__22368,G__22369,G__22370,G__22371));

break;
case "macroexpansion":
var G__22376 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22377 = cause_type;
var G__22378 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22379 = loc;
var G__22380 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22376,G__22377,G__22378,G__22379,G__22380) : format.call(null, G__22376,G__22377,G__22378,G__22379,G__22380));

break;
case "compile-syntax-check":
var G__22381 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22382 = cause_type;
var G__22383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22384 = loc;
var G__22385 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22381,G__22382,G__22383,G__22384,G__22385) : format.call(null, G__22381,G__22382,G__22383,G__22384,G__22385));

break;
case "compilation":
var G__22386 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22387 = cause_type;
var G__22388 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22389 = loc;
var G__22390 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22386,G__22387,G__22388,G__22389,G__22390) : format.call(null, G__22386,G__22387,G__22388,G__22389,G__22390));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22391 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22392 = symbol;
var G__22393 = loc;
var G__22394 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22395_22510 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22396_22511 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22397_22512 = true;
var _STAR_print_fn_STAR__temp_val__22398_22513 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22397_22512);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22398_22513);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22359_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22359_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22396_22511);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22395_22510);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22391,G__22392,G__22393,G__22394) : format.call(null, G__22391,G__22392,G__22393,G__22394));
} else {
var G__22400 = "Execution error%s at %s(%s).\n%s\n";
var G__22401 = cause_type;
var G__22402 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22403 = loc;
var G__22404 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22400,G__22401,G__22402,G__22403,G__22404) : format.call(null, G__22400,G__22401,G__22402,G__22403,G__22404));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22367__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
