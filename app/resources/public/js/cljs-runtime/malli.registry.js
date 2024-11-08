goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_13899 = (function (this$,type){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schema[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5351__auto__.call(null, this$,type));
} else {
var m__5349__auto__ = (malli.registry._schema["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5349__auto__.call(null, this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_13899(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_13902 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schemas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (malli.registry._schemas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_13902(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13725 = (function (m,fm,meta13726){
this.m = m;
this.fm = fm;
this.meta13726 = meta13726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13727,meta13726__$1){
var self__ = this;
var _13727__$1 = this;
return (new malli.registry.t_malli$registry13725(self__.m,self__.fm,meta13726__$1));
}));

(malli.registry.t_malli$registry13725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13727){
var self__ = this;
var _13727__$1 = this;
return self__.meta13726;
}));

(malli.registry.t_malli$registry13725.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13725.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry13725.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry13725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta13726","meta13726",113622400,null)], null);
}));

(malli.registry.t_malli$registry13725.cljs$lang$type = true);

(malli.registry.t_malli$registry13725.cljs$lang$ctorStr = "malli.registry/t_malli$registry13725");

(malli.registry.t_malli$registry13725.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13725");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13725.
 */
malli.registry.__GT_t_malli$registry13725 = (function malli$registry$__GT_t_malli$registry13725(m,fm,meta13726){
return (new malli.registry.t_malli$registry13725(m,fm,meta13726));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry13725(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13732 = (function (m,meta13733){
this.m = m;
this.meta13733 = meta13733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13734,meta13733__$1){
var self__ = this;
var _13734__$1 = this;
return (new malli.registry.t_malli$registry13732(self__.m,meta13733__$1));
}));

(malli.registry.t_malli$registry13732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13734){
var self__ = this;
var _13734__$1 = this;
return self__.meta13733;
}));

(malli.registry.t_malli$registry13732.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13732.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null, type));
}));

(malli.registry.t_malli$registry13732.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry13732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta13733","meta13733",-168578537,null)], null);
}));

(malli.registry.t_malli$registry13732.cljs$lang$type = true);

(malli.registry.t_malli$registry13732.cljs$lang$ctorStr = "malli.registry/t_malli$registry13732");

(malli.registry.t_malli$registry13732.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13732");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13732.
 */
malli.registry.__GT_t_malli$registry13732 = (function malli$registry$__GT_t_malli$registry13732(m,meta13733){
return (new malli.registry.t_malli$registry13732(m,meta13733));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry13732(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13766 = (function (meta13767){
this.meta13767 = meta13767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13768,meta13767__$1){
var self__ = this;
var _13768__$1 = this;
return (new malli.registry.t_malli$registry13766(meta13767__$1));
}));

(malli.registry.t_malli$registry13766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13768){
var self__ = this;
var _13768__$1 = this;
return self__.meta13767;
}));

(malli.registry.t_malli$registry13766.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13766.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry13766.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry13766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13767","meta13767",-1679713825,null)], null);
}));

(malli.registry.t_malli$registry13766.cljs$lang$type = true);

(malli.registry.t_malli$registry13766.cljs$lang$ctorStr = "malli.registry/t_malli$registry13766");

(malli.registry.t_malli$registry13766.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13766");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13766.
 */
malli.registry.__GT_t_malli$registry13766 = (function malli$registry$__GT_t_malli$registry13766(meta13767){
return (new malli.registry.t_malli$registry13766(meta13767));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry13766(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13800 = (function (_QMARK_registries,registries,meta13801){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta13801 = meta13801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13802,meta13801__$1){
var self__ = this;
var _13802__$1 = this;
return (new malli.registry.t_malli$registry13800(self__._QMARK_registries,self__.registries,meta13801__$1));
}));

(malli.registry.t_malli$registry13800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13802){
var self__ = this;
var _13802__$1 = this;
return self__.meta13801;
}));

(malli.registry.t_malli$registry13800.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13800.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__13784_SHARP_){
return malli.registry._schema(p1__13784_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry13800.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry13800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta13801","meta13801",-1495804644,null)], null);
}));

(malli.registry.t_malli$registry13800.cljs$lang$type = true);

(malli.registry.t_malli$registry13800.cljs$lang$ctorStr = "malli.registry/t_malli$registry13800");

(malli.registry.t_malli$registry13800.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13800");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13800.
 */
malli.registry.__GT_t_malli$registry13800 = (function malli$registry$__GT_t_malli$registry13800(_QMARK_registries,registries,meta13801){
return (new malli.registry.t_malli$registry13800(_QMARK_registries,registries,meta13801));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13928 = arguments.length;
var i__5727__auto___13929 = (0);
while(true){
if((i__5727__auto___13929 < len__5726__auto___13928)){
args__5732__auto__.push((arguments[i__5727__auto___13929]));

var G__13930 = (i__5727__auto___13929 + (1));
i__5727__auto___13929 = G__13930;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry13800(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq13786){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13786));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13814 = (function (db,meta13815){
this.db = db;
this.meta13815 = meta13815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13816,meta13815__$1){
var self__ = this;
var _13816__$1 = this;
return (new malli.registry.t_malli$registry13814(self__.db,meta13815__$1));
}));

(malli.registry.t_malli$registry13814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13816){
var self__ = this;
var _13816__$1 = this;
return self__.meta13815;
}));

(malli.registry.t_malli$registry13814.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13814.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry13814.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry13814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta13815","meta13815",-772246105,null)], null);
}));

(malli.registry.t_malli$registry13814.cljs$lang$type = true);

(malli.registry.t_malli$registry13814.cljs$lang$ctorStr = "malli.registry/t_malli$registry13814");

(malli.registry.t_malli$registry13814.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13814");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13814.
 */
malli.registry.__GT_t_malli$registry13814 = (function malli$registry$__GT_t_malli$registry13814(db,meta13815){
return (new malli.registry.t_malli$registry13814(db,meta13815));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry13814(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13827 = (function (meta13828){
this.meta13828 = meta13828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13829,meta13828__$1){
var self__ = this;
var _13829__$1 = this;
return (new malli.registry.t_malli$registry13827(meta13828__$1));
}));

(malli.registry.t_malli$registry13827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13829){
var self__ = this;
var _13829__$1 = this;
return self__.meta13828;
}));

(malli.registry.t_malli$registry13827.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13827.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry13827.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry13827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13828","meta13828",-2109320044,null)], null);
}));

(malli.registry.t_malli$registry13827.cljs$lang$type = true);

(malli.registry.t_malli$registry13827.cljs$lang$ctorStr = "malli.registry/t_malli$registry13827");

(malli.registry.t_malli$registry13827.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13827");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13827.
 */
malli.registry.__GT_t_malli$registry13827 = (function malli$registry$__GT_t_malli$registry13827(meta13828){
return (new malli.registry.t_malli$registry13827(meta13828));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry13827(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13853 = (function (meta13854){
this.meta13854 = meta13854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13855,meta13854__$1){
var self__ = this;
var _13855__$1 = this;
return (new malli.registry.t_malli$registry13853(meta13854__$1));
}));

(malli.registry.t_malli$registry13853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13855){
var self__ = this;
var _13855__$1 = this;
return self__.meta13854;
}));

(malli.registry.t_malli$registry13853.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13853.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry13853.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry13853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13854","meta13854",-1976456723,null)], null);
}));

(malli.registry.t_malli$registry13853.cljs$lang$type = true);

(malli.registry.t_malli$registry13853.cljs$lang$ctorStr = "malli.registry/t_malli$registry13853");

(malli.registry.t_malli$registry13853.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13853");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13853.
 */
malli.registry.__GT_t_malli$registry13853 = (function malli$registry$__GT_t_malli$registry13853(meta13854){
return (new malli.registry.t_malli$registry13853(meta13854));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry13853(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13880 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta13881){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta13881 = meta13881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13882,meta13881__$1){
var self__ = this;
var _13882__$1 = this;
return (new malli.registry.t_malli$registry13880(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta13881__$1));
}));

(malli.registry.t_malli$registry13880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13882){
var self__ = this;
var _13882__$1 = this;
return self__.meta13881;
}));

(malli.registry.t_malli$registry13880.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13880.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5002__auto__ = (function (){var fexpr__13886 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__13886.cljs$core$IFn$_invoke$arity$1 ? fexpr__13886.cljs$core$IFn$_invoke$arity$1(name) : fexpr__13886.call(null, name));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = (function (){var G__13887 = name;
var G__13888 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__13887,G__13888) : self__.provider.call(null, G__13887,G__13888));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry13880.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry13880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta13881","meta13881",134569445,null)], null);
}));

(malli.registry.t_malli$registry13880.cljs$lang$type = true);

(malli.registry.t_malli$registry13880.cljs$lang$ctorStr = "malli.registry/t_malli$registry13880");

(malli.registry.t_malli$registry13880.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13880");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13880.
 */
malli.registry.__GT_t_malli$registry13880 = (function malli$registry$__GT_t_malli$registry13880(default_registry,provider,cache_STAR_,registry_STAR_,meta13881){
return (new malli.registry.t_malli$registry13880(default_registry,provider,cache_STAR_,registry_STAR_,meta13881));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry13880(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
