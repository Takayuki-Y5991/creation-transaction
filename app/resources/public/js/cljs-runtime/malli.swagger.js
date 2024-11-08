goog.provide('malli.swagger');

/**
 * @interface
 */
malli.swagger.SwaggerSchema = function(){};

var malli$swagger$SwaggerSchema$_accept$dyn_20336 = (function (this$,children,options){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.swagger._accept[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,children,options) : m__5351__auto__.call(null, this$,children,options));
} else {
var m__5349__auto__ = (malli.swagger._accept["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,children,options) : m__5349__auto__.call(null, this$,children,options));
} else {
throw cljs.core.missing_protocol("SwaggerSchema.-accept",this$);
}
}
});
/**
 * transforms schema to Swagger Schema
 */
malli.swagger._accept = (function malli$swagger$_accept(this$,children,options){
if((((!((this$ == null)))) && ((!((this$.malli$swagger$SwaggerSchema$_accept$arity$3 == null)))))){
return this$.malli$swagger$SwaggerSchema$_accept$arity$3(this$,children,options);
} else {
return malli$swagger$SwaggerSchema$_accept$dyn_20336(this$,children,options);
}
});

if((typeof malli !== 'undefined') && (typeof malli.swagger !== 'undefined') && (typeof malli.swagger.accept !== 'undefined')){
} else {
malli.swagger.accept = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20219 = cljs.core.get_global_hierarchy;
return (fexpr__20219.cljs$core$IFn$_invoke$arity$0 ? fexpr__20219.cljs$core$IFn$_invoke$arity$0() : fexpr__20219.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.swagger","accept"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521),(function (name,schema,children,options){
return malli.json_schema.accept.cljs$core$IFn$_invoke$arity$4(name,schema,children,options);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"not","not",-595976884),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x-not","x-not",2050242842),cljs.core.first(children)], null);
}));
malli.swagger._base = (function malli$swagger$_base(s,children){
var or__5002__auto__ = cljs.core.some((function (p1__20225_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("null",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__20225_SHARP_))){
return p1__20225_SHARP_;
} else {
return null;
}
}),children);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.swagger","non-null-base-needed","malli.swagger/non-null-base-needed",-207673098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));
}
});
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"and","and",-971899817),(function (_,s,children,___$1){
var base = malli.swagger._base(s,children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"or","or",235744169),(function (_,s,children,___$1){
var base = malli.swagger._base(s,children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,s,children,___$1){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children);
var base = malli.swagger._base(s,cs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),cs);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,s,children,p__20236){
var map__20237 = p__20236;
var map__20237__$1 = cljs.core.__destructure_map(map__20237);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20237__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20237__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var k = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"parameter","parameter",1978789597))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"body","body",-2049205669)))))?new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890):new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247));
var base = malli.swagger._base(s,children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,k,true);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x-items","x-items",-710213657),children], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"number?","number?",-1747282210,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int32"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"int?","int?",1799729645,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(1)], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"maximum","maximum",573880714),(-1)], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0)], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"float?","float?",673884616,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"double?","double?",-2146564276,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"int","int",-1741416922),(function (_,schema,___$1,___$2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64"], null),clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"maximum","maximum",573880714)], null))], 0));
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"double","double",884886883),(function (_,schema,___$1,___$2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null),clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"maximum","maximum",573880714)], null))], 0));
}));
malli.swagger._swagger_walker = (function malli$swagger$_swagger_walker(schema,_,children,options){
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)], 0));
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"swagger","swagger",-79684232));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"json-schema","json-schema",389191695));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.json_schema.select(p),(((((!((schema == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema.malli$swagger$SwaggerSchema$))))?true:(((!schema.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.swagger.SwaggerSchema,schema):false)):cljs.core.native_satisfies_QMARK_(malli.swagger.SwaggerSchema,schema)))?malli.swagger._accept(schema,children,options):malli.swagger.accept.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options)),malli.core._unlift_keys(p,new cljs.core.Keyword(null,"json-schema","json-schema",389191695)),malli.core._unlift_keys(p,new cljs.core.Keyword(null,"swagger","swagger",-79684232))], 0));
}
}
});
malli.swagger._transform = (function malli$swagger$_transform(_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.swagger._swagger_walker,options);
});
malli.swagger._remove_empty_keys = (function malli$swagger$_remove_empty_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.nil_QMARK_,cljs.core.val),m));
});
malli.swagger.transform = (function malli$swagger$transform(var_args){
var G__20266 = arguments.length;
switch (G__20266) {
case 1:
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.swagger.transform.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.swagger.transform.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var definitions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("malli.core","walk-entry-vals","malli.core/walk-entry-vals",-64238340),true,new cljs.core.Keyword("malli.json-schema","definitions","malli.json-schema/definitions",1666750607),definitions,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521),malli.swagger._transform], null)], 0));
var t = malli.swagger._transform(_QMARK_schema,options__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("null",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t))){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.swagger","non-null-base-needed","malli.swagger/non-null-base-needed",-207673098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options__$1)], null));
} else {
}

var G__20268 = t;
if(cljs.core.seq(cljs.core.deref(definitions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20268,new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.deref(definitions));
} else {
return G__20268;
}
}));

(malli.swagger.transform.cljs$lang$maxFixedArity = 2);

if((typeof malli !== 'undefined') && (typeof malli.swagger !== 'undefined') && (typeof malli.swagger.extract_parameter !== 'undefined')){
} else {
malli.swagger.extract_parameter = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20273 = cljs.core.get_global_hierarchy;
return (fexpr__20273.cljs$core$IFn$_invoke$arity$0 ? fexpr__20273.cljs$core$IFn$_invoke$arity$0() : fexpr__20273.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.swagger","extract-parameter"),(function (in$,_){
return in$;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
malli.swagger.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,schema){
var swagger_schema = malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(swagger_schema,"body"),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(swagger_schema,""),new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"maybe","maybe",-314397560),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema)),new cljs.core.Keyword(null,"schema","schema",-1582001791),swagger_schema], null)], null);
}));
malli.swagger.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,schema){
var map__20277 = malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(malli.core.deref_recursive.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
var map__20277__$1 = cljs.core.__destructure_map(map__20277);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20278){
var vec__20282 = p__20278;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282,(0),null);
var map__20285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282,(1),null);
var map__20285__$1 = cljs.core.__destructure_map(map__20285);
var schema__$1 = map__20285__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20285__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(schema__$1,""),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),schema__$1], 0));
}),properties);
}));
if((typeof malli !== 'undefined') && (typeof malli.swagger !== 'undefined') && (typeof malli.swagger.expand !== 'undefined')){
} else {
malli.swagger.expand = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20289 = cljs.core.get_global_hierarchy;
return (fexpr__20289.cljs$core$IFn$_invoke$arity$0 ? fexpr__20289.cljs$core$IFn$_invoke$arity$0() : fexpr__20289.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.swagger","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
malli.swagger.expand.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("malli.swagger","responses","malli.swagger/responses",-1329076900),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5480__auto__ = (function malli$swagger$iter__20290(s__20291){
return (new cljs.core.LazySeq(null,(function (){
var s__20291__$1 = s__20291;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20291__$1);
if(temp__5804__auto__){
var s__20291__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20291__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20291__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20293 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20292 = (0);
while(true){
if((i__20292 < size__5479__auto__)){
var vec__20295 = cljs.core._nth(c__5478__auto__,i__20292);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20295,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20295,(1),null);
cljs.core.chunk_append(b__20293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var G__20299 = response;
var G__20299__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(response))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__20299,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.swagger.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)):G__20299);
var G__20299__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20299__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""))
;
return malli.swagger._remove_empty_keys(G__20299__$2);

})()], null));

var G__20357 = (i__20292 + (1));
i__20292 = G__20357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20293),malli$swagger$iter__20290(cljs.core.chunk_rest(s__20291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20293),null);
}
} else {
var vec__20300 = cljs.core.first(s__20291__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20300,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20300,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var G__20303 = response;
var G__20303__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(response))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__20303,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.swagger.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)):G__20303);
var G__20303__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20303__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""))
;
return malli.swagger._remove_empty_keys(G__20303__$2);

})()], null),malli$swagger$iter__20290(cljs.core.rest(s__20291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})())], null);
}));
malli.swagger.expand.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("malli.swagger","parameters","malli.swagger/parameters",475343595),(function (_,v,acc,___$1){
var old = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20308){
var vec__20309 = p__20308;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20309,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20309,(1),null);
return malli.swagger.extract_parameter.cljs$core$IFn$_invoke$arity$2(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20312,p){
var vec__20313 = p__20312;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313,(1),null);
var acc__$1 = vec__20313;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null, c)))){
return acc__$1;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
malli.swagger.dissoc_non_root_definitions = (function malli$swagger$dissoc_non_root_definitions(p__20320){
var map__20321 = p__20320;
var map__20321__$1 = cljs.core.__destructure_map(map__20321);
var x = map__20321__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var G__20322 = x;
var G__20322__$1 = (cljs.core.truth_(parameters)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20322,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),(function (p1__20318_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
if(cljs.core.contains_QMARK_(p,new cljs.core.Keyword(null,"schema","schema",-1582001791))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.dissoc,new cljs.core.Keyword(null,"definitions","definitions",167529986));
} else {
return p;
}
}),p1__20318_SHARP_);
})):G__20322);
if(cljs.core.truth_(responses)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20322__$1,new cljs.core.Keyword(null,"responses","responses",1257546453),(function (p1__20319_SHARP_){
return cljs.core.reduce_kv((function (rs,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rs,k,((cljs.core.contains_QMARK_(v,new cljs.core.Keyword(null,"schema","schema",-1582001791)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(v,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.dissoc,new cljs.core.Keyword(null,"definitions","definitions",167529986)):v));
}),cljs.core.PersistentArrayMap.EMPTY,p1__20319_SHARP_);
}));
} else {
return G__20322__$1;
}
});
malli.swagger.expand_qualified_keywords = (function malli$swagger$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(malli.swagger.expand)));
return clojure.walk.postwalk((function (x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null, k)))){
var expanded = malli.swagger.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options);
var parameters = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(expanded);
var responses = new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(expanded);
var definitions = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definitions","definitions",167529986),new cljs.core.Keyword(null,"schema","schema",-1582001791)),cljs.core.vals(responses)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definitions","definitions",167529986),new cljs.core.Keyword(null,"schema","schema",-1582001791)),parameters)));
return malli.swagger.dissoc_non_root_definitions(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),expanded], 0)),new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.merge,definitions));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
malli.swagger.swagger_spec = (function malli$swagger$swagger_spec(var_args){
var G__20331 = arguments.length;
switch (G__20331) {
case 1:
return malli.swagger.swagger_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.swagger.swagger_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.swagger.swagger_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return malli.swagger.swagger_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(malli.swagger.swagger_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return malli.swagger.expand_qualified_keywords(x,options);
}));

(malli.swagger.swagger_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.swagger.js.map
