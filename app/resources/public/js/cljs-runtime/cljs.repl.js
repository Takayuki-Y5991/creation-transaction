goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26883){
var map__26884 = p__26883;
var map__26884__$1 = cljs.core.__destructure_map(map__26884);
var m = map__26884__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__26887_27155 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26888_27156 = null;
var count__26889_27157 = (0);
var i__26890_27158 = (0);
while(true){
if((i__26890_27158 < count__26889_27157)){
var f_27159 = chunk__26888_27156.cljs$core$IIndexed$_nth$arity$2(null, i__26890_27158);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27159], 0));


var G__27160 = seq__26887_27155;
var G__27161 = chunk__26888_27156;
var G__27162 = count__26889_27157;
var G__27163 = (i__26890_27158 + (1));
seq__26887_27155 = G__27160;
chunk__26888_27156 = G__27161;
count__26889_27157 = G__27162;
i__26890_27158 = G__27163;
continue;
} else {
var temp__5804__auto___27164 = cljs.core.seq(seq__26887_27155);
if(temp__5804__auto___27164){
var seq__26887_27165__$1 = temp__5804__auto___27164;
if(cljs.core.chunked_seq_QMARK_(seq__26887_27165__$1)){
var c__5525__auto___27166 = cljs.core.chunk_first(seq__26887_27165__$1);
var G__27167 = cljs.core.chunk_rest(seq__26887_27165__$1);
var G__27168 = c__5525__auto___27166;
var G__27169 = cljs.core.count(c__5525__auto___27166);
var G__27170 = (0);
seq__26887_27155 = G__27167;
chunk__26888_27156 = G__27168;
count__26889_27157 = G__27169;
i__26890_27158 = G__27170;
continue;
} else {
var f_27171 = cljs.core.first(seq__26887_27165__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27171], 0));


var G__27172 = cljs.core.next(seq__26887_27165__$1);
var G__27173 = null;
var G__27174 = (0);
var G__27175 = (0);
seq__26887_27155 = G__27172;
chunk__26888_27156 = G__27173;
count__26889_27157 = G__27174;
i__26890_27158 = G__27175;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27176 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27176], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27176)))?cljs.core.second(arglists_27176):arglists_27176)], 0));
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
var seq__26900_27181 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26901_27182 = null;
var count__26902_27183 = (0);
var i__26903_27184 = (0);
while(true){
if((i__26903_27184 < count__26902_27183)){
var vec__26917_27185 = chunk__26901_27182.cljs$core$IIndexed$_nth$arity$2(null, i__26903_27184);
var name_27186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917_27185,(0),null);
var map__26920_27187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917_27185,(1),null);
var map__26920_27188__$1 = cljs.core.__destructure_map(map__26920_27187);
var doc_27189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920_27188__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920_27188__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27186], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27190], 0));

if(cljs.core.truth_(doc_27189)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27189], 0));
} else {
}


var G__27191 = seq__26900_27181;
var G__27192 = chunk__26901_27182;
var G__27193 = count__26902_27183;
var G__27194 = (i__26903_27184 + (1));
seq__26900_27181 = G__27191;
chunk__26901_27182 = G__27192;
count__26902_27183 = G__27193;
i__26903_27184 = G__27194;
continue;
} else {
var temp__5804__auto___27197 = cljs.core.seq(seq__26900_27181);
if(temp__5804__auto___27197){
var seq__26900_27198__$1 = temp__5804__auto___27197;
if(cljs.core.chunked_seq_QMARK_(seq__26900_27198__$1)){
var c__5525__auto___27201 = cljs.core.chunk_first(seq__26900_27198__$1);
var G__27202 = cljs.core.chunk_rest(seq__26900_27198__$1);
var G__27203 = c__5525__auto___27201;
var G__27204 = cljs.core.count(c__5525__auto___27201);
var G__27205 = (0);
seq__26900_27181 = G__27202;
chunk__26901_27182 = G__27203;
count__26902_27183 = G__27204;
i__26903_27184 = G__27205;
continue;
} else {
var vec__26922_27206 = cljs.core.first(seq__26900_27198__$1);
var name_27207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922_27206,(0),null);
var map__26925_27208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922_27206,(1),null);
var map__26925_27209__$1 = cljs.core.__destructure_map(map__26925_27208);
var doc_27210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26925_27209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26925_27209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27207], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27211], 0));

if(cljs.core.truth_(doc_27210)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27210], 0));
} else {
}


var G__27213 = cljs.core.next(seq__26900_27198__$1);
var G__27214 = null;
var G__27215 = (0);
var G__27216 = (0);
seq__26900_27181 = G__27213;
chunk__26901_27182 = G__27214;
count__26902_27183 = G__27215;
i__26903_27184 = G__27216;
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

var seq__26928 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26929 = null;
var count__26930 = (0);
var i__26931 = (0);
while(true){
if((i__26931 < count__26930)){
var role = chunk__26929.cljs$core$IIndexed$_nth$arity$2(null, i__26931);
var temp__5804__auto___27219__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27219__$1)){
var spec_27221 = temp__5804__auto___27219__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27221)], 0));
} else {
}


var G__27224 = seq__26928;
var G__27225 = chunk__26929;
var G__27226 = count__26930;
var G__27227 = (i__26931 + (1));
seq__26928 = G__27224;
chunk__26929 = G__27225;
count__26930 = G__27226;
i__26931 = G__27227;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__26928);
if(temp__5804__auto____$1){
var seq__26928__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26928__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26928__$1);
var G__27228 = cljs.core.chunk_rest(seq__26928__$1);
var G__27229 = c__5525__auto__;
var G__27230 = cljs.core.count(c__5525__auto__);
var G__27231 = (0);
seq__26928 = G__27228;
chunk__26929 = G__27229;
count__26930 = G__27230;
i__26931 = G__27231;
continue;
} else {
var role = cljs.core.first(seq__26928__$1);
var temp__5804__auto___27232__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27232__$2)){
var spec_27233 = temp__5804__auto___27232__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27233)], 0));
} else {
}


var G__27234 = cljs.core.next(seq__26928__$1);
var G__27235 = null;
var G__27236 = (0);
var G__27237 = (0);
seq__26928 = G__27234;
chunk__26929 = G__27235;
count__26930 = G__27236;
i__26931 = G__27237;
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
var map__26949 = datafied_throwable;
var map__26949__$1 = cljs.core.__destructure_map(map__26949);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26949__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26950 = cljs.core.last(via);
var map__26950__$1 = cljs.core.__destructure_map(map__26950);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26951 = data;
var map__26951__$1 = cljs.core.__destructure_map(map__26951);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26951__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26951__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26951__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26952 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26952__$1 = cljs.core.__destructure_map(map__26952);
var top_data = map__26952__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26953 = phase;
var G__26953__$1 = (((G__26953 instanceof cljs.core.Keyword))?G__26953.fqn:null);
switch (G__26953__$1) {
case "read-source":
var map__26954 = data;
var map__26954__$1 = cljs.core.__destructure_map(map__26954);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26955 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26955__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26955,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26955);
var G__26955__$2 = (cljs.core.truth_((function (){var fexpr__26961 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26961.cljs$core$IFn$_invoke$arity$1 ? fexpr__26961.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26961.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26955__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26955__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26955__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26955__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26966 = top_data;
var G__26966__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26966,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26966);
var G__26966__$2 = (cljs.core.truth_((function (){var fexpr__26968 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26968.cljs$core$IFn$_invoke$arity$1 ? fexpr__26968.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26968.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26966__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26966__$1);
var G__26966__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26966__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26966__$2);
var G__26966__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26966__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26966__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26966__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26966__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26969 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(3),null);
var G__26973 = top_data;
var G__26973__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26973,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26973);
var G__26973__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26973__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26973__$1);
var G__26973__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26973__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26973__$2);
var G__26973__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26973__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26973__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26973__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26973__$4;
}

break;
case "execution":
var vec__26978 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26943_SHARP_){
var or__5002__auto__ = (p1__26943_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__26982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26982.cljs$core$IFn$_invoke$arity$1 ? fexpr__26982.cljs$core$IFn$_invoke$arity$1(p1__26943_SHARP_) : fexpr__26982.call(null, p1__26943_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__26983 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26983__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26983,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26983);
var G__26983__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26983__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26983__$1);
var G__26983__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26983__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26983__$2);
var G__26983__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26983__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26983__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26983__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26983__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26953__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27046){
var map__27053 = p__27046;
var map__27053__$1 = cljs.core.__destructure_map(map__27053);
var triage_data = map__27053__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__27087 = phase;
var G__27087__$1 = (((G__27087 instanceof cljs.core.Keyword))?G__27087.fqn:null);
switch (G__27087__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27096 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27097 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27098 = loc;
var G__27099 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27100_27249 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27101_27250 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27102_27251 = true;
var _STAR_print_fn_STAR__temp_val__27103_27252 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27102_27251);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27103_27252);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27014_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27014_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27101_27250);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27100_27249);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27096,G__27097,G__27098,G__27099) : format.call(null, G__27096,G__27097,G__27098,G__27099));

break;
case "macroexpansion":
var G__27111 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27112 = cause_type;
var G__27113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27114 = loc;
var G__27115 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27111,G__27112,G__27113,G__27114,G__27115) : format.call(null, G__27111,G__27112,G__27113,G__27114,G__27115));

break;
case "compile-syntax-check":
var G__27118 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27119 = cause_type;
var G__27120 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27121 = loc;
var G__27122 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27118,G__27119,G__27120,G__27121,G__27122) : format.call(null, G__27118,G__27119,G__27120,G__27121,G__27122));

break;
case "compilation":
var G__27124 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27125 = cause_type;
var G__27126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27127 = loc;
var G__27128 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27124,G__27125,G__27126,G__27127,G__27128) : format.call(null, G__27124,G__27125,G__27126,G__27127,G__27128));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27129 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27130 = symbol;
var G__27131 = loc;
var G__27132 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27134_27254 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27135_27255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27136_27256 = true;
var _STAR_print_fn_STAR__temp_val__27137_27257 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27136_27256);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27137_27257);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27031_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27031_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27135_27255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27134_27254);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27129,G__27130,G__27131,G__27132) : format.call(null, G__27129,G__27130,G__27131,G__27132));
} else {
var G__27140 = "Execution error%s at %s(%s).\n%s\n";
var G__27141 = cause_type;
var G__27142 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27143 = loc;
var G__27144 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27140,G__27141,G__27142,G__27143,G__27144) : format.call(null, G__27140,G__27141,G__27142,G__27143,G__27144));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27087__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
