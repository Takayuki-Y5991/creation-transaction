goog.provide('reitit.coercion.malli');

/**
 * @interface
 */
reitit.coercion.malli.Coercer = function(){};

var reitit$coercion$malli$Coercer$_decode$dyn_20694 = (function (this$,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion.malli._decode[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5351__auto__.call(null, this$,value));
} else {
var m__5349__auto__ = (reitit.coercion.malli._decode["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5349__auto__.call(null, this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-decode",this$);
}
}
});
reitit.coercion.malli._decode = (function reitit$coercion$malli$_decode(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_decode$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_decode$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_decode$dyn_20694(this$,value);
}
});

var reitit$coercion$malli$Coercer$_encode$dyn_20695 = (function (this$,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion.malli._encode[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5351__auto__.call(null, this$,value));
} else {
var m__5349__auto__ = (reitit.coercion.malli._encode["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5349__auto__.call(null, this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-encode",this$);
}
}
});
reitit.coercion.malli._encode = (function reitit$coercion$malli$_encode(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_encode$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_encode$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_encode$dyn_20695(this$,value);
}
});

var reitit$coercion$malli$Coercer$_validate$dyn_20696 = (function (this$,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion.malli._validate[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5351__auto__.call(null, this$,value));
} else {
var m__5349__auto__ = (reitit.coercion.malli._validate["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5349__auto__.call(null, this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-validate",this$);
}
}
});
reitit.coercion.malli._validate = (function reitit$coercion$malli$_validate(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_validate$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_validate$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_validate$dyn_20696(this$,value);
}
});

var reitit$coercion$malli$Coercer$_explain$dyn_20697 = (function (this$,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion.malli._explain[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5351__auto__.call(null, this$,value));
} else {
var m__5349__auto__ = (reitit.coercion.malli._explain["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5349__auto__.call(null, this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-explain",this$);
}
}
});
reitit.coercion.malli._explain = (function reitit$coercion$malli$_explain(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_explain$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_explain$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_explain$dyn_20697(this$,value);
}
});


/**
 * @interface
 */
reitit.coercion.malli.TransformationProvider = function(){};

var reitit$coercion$malli$TransformationProvider$_transformer$dyn_20698 = (function (this$,options){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion.malli._transformer[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5351__auto__.call(null, this$,options));
} else {
var m__5349__auto__ = (reitit.coercion.malli._transformer["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5349__auto__.call(null, this$,options));
} else {
throw cljs.core.missing_protocol("TransformationProvider.-transformer",this$);
}
}
});
reitit.coercion.malli._transformer = (function reitit$coercion$malli$_transformer(this$,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$TransformationProvider$_transformer$arity$2 == null)))))){
return this$.reitit$coercion$malli$TransformationProvider$_transformer$arity$2(this$,options);
} else {
return reitit$coercion$malli$TransformationProvider$_transformer$dyn_20698(this$,options);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.malli.TransformationProvider}
*/
reitit.coercion.malli.t_reitit$coercion$malli20602 = (function (transformer,meta20603){
this.transformer = transformer;
this.meta20603 = meta20603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli20602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20604,meta20603__$1){
var self__ = this;
var _20604__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli20602(self__.transformer,meta20603__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20604){
var self__ = this;
var _20604__$1 = this;
return self__.meta20603;
}));

(reitit.coercion.malli.t_reitit$coercion$malli20602.prototype.reitit$coercion$malli$TransformationProvider$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli20602.prototype.reitit$coercion$malli$TransformationProvider$_transformer$arity$2 = (function (_,p__20612){
var self__ = this;
var map__20613 = p__20612;
var map__20613__$1 = cljs.core.__destructure_map(map__20613);
var strip_extra_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613__$1,new cljs.core.Keyword(null,"strip-extra-keys","strip-extra-keys",844924777));
var default_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613__$1,new cljs.core.Keyword(null,"default-values","default-values",1480201073));
var ___$1 = this;
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(strip_extra_keys)?malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0():null),self__.transformer,(cljs.core.truth_(default_values)?malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0():null)], 0));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transformer","transformer",147060907,null),new cljs.core.Symbol(null,"meta20603","meta20603",-678114289,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli20602.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli20602.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli20602");

(reitit.coercion.malli.t_reitit$coercion$malli20602.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.coercion.malli/t_reitit$coercion$malli20602");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli20602.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli20602 = (function reitit$coercion$malli$__GT_t_reitit$coercion$malli20602(transformer,meta20603){
return (new reitit.coercion.malli.t_reitit$coercion$malli20602(transformer,meta20603));
});


reitit.coercion.malli._provider = (function reitit$coercion$malli$_provider(transformer){
return (new reitit.coercion.malli.t_reitit$coercion$malli20602(transformer,cljs.core.PersistentArrayMap.EMPTY));
});
reitit.coercion.malli.string_transformer_provider = reitit.coercion.malli._provider(malli.transform.string_transformer());
reitit.coercion.malli.json_transformer_provider = reitit.coercion.malli._provider(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0());
reitit.coercion.malli.default_transformer_provider = reitit.coercion.malli._provider(null);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {reitit.coercion.malli.Coercer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.malli.t_reitit$coercion$malli20630 = (function (t,options,decoder,enabled,explainer,schema,transformers,validate,encoder,map__20626,validator,type,p__20625,f,meta20631){
this.t = t;
this.options = options;
this.decoder = decoder;
this.enabled = enabled;
this.explainer = explainer;
this.schema = schema;
this.transformers = transformers;
this.validate = validate;
this.encoder = encoder;
this.map__20626 = map__20626;
this.validator = validator;
this.type = type;
this.p__20625 = p__20625;
this.f = f;
this.meta20631 = meta20631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20632,meta20631__$1){
var self__ = this;
var _20632__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli20630(self__.t,self__.options,self__.decoder,self__.enabled,self__.explainer,self__.schema,self__.transformers,self__.validate,self__.encoder,self__.map__20626,self__.validator,self__.type,self__.p__20625,self__.f,meta20631__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20632){
var self__ = this;
var _20632__$1 = this;
return self__.meta20631;
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.reitit$coercion$malli$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.reitit$coercion$malli$Coercer$_decode$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.decoder.cljs$core$IFn$_invoke$arity$1 ? self__.decoder.cljs$core$IFn$_invoke$arity$1(value) : self__.decoder.call(null, value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.reitit$coercion$malli$Coercer$_encode$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.encoder.cljs$core$IFn$_invoke$arity$1 ? self__.encoder.cljs$core$IFn$_invoke$arity$1(value) : self__.encoder.call(null, value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.reitit$coercion$malli$Coercer$_validate$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(value) : self__.validator.call(null, value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.prototype.reitit$coercion$malli$Coercer$_explain$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.explainer.cljs$core$IFn$_invoke$arity$1 ? self__.explainer.cljs$core$IFn$_invoke$arity$1(value) : self__.explainer.call(null, value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"decoder","decoder",-1484876926,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null),new cljs.core.Symbol(null,"explainer","explainer",-361690397,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"encoder","encoder",527403693,null),new cljs.core.Symbol(null,"map__20626","map__20626",1589414701,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p__20625","p__20625",-613371851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta20631","meta20631",991870426,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli20630.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli20630.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli20630");

(reitit.coercion.malli.t_reitit$coercion$malli20630.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.coercion.malli/t_reitit$coercion$malli20630");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli20630.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli20630 = (function reitit$coercion$malli$__GT_t_reitit$coercion$malli20630(t,options,decoder,enabled,explainer,schema,transformers,validate,encoder,map__20626,validator,type,p__20625,f,meta20631){
return (new reitit.coercion.malli.t_reitit$coercion$malli20630(t,options,decoder,enabled,explainer,schema,transformers,validate,encoder,map__20626,validator,type,p__20625,f,meta20631));
});


reitit.coercion.malli._coercer = (function reitit$coercion$malli$_coercer(schema,type,transformers,f,p__20625){
var map__20626 = p__20625;
var map__20626__$1 = cljs.core.__destructure_map(map__20626);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(schema)){
var __GT_coercer = (function (t){
var decoder = (cljs.core.truth_(t)?malli.core.decoder.cljs$core$IFn$_invoke$arity$3(schema,options,t):cljs.core.identity);
var encoder = (cljs.core.truth_(t)?malli.core.encoder.cljs$core$IFn$_invoke$arity$3(schema,options,t):cljs.core.identity);
var validator = (cljs.core.truth_(validate)?malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options):cljs.core.constantly(true));
var explainer = malli.core.explainer.cljs$core$IFn$_invoke$arity$2(schema,options);
return (new reitit.coercion.malli.t_reitit$coercion$malli20630(t,options,decoder,enabled,explainer,schema,transformers,validate,encoder,map__20626__$1,validator,type,p__20625,f,cljs.core.PersistentArrayMap.EMPTY));
});
var map__20627 = (transformers.cljs$core$IFn$_invoke$arity$1 ? transformers.cljs$core$IFn$_invoke$arity$1(type) : transformers.call(null, type));
var map__20627__$1 = cljs.core.__destructure_map(map__20627);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var default_coercer = __GT_coercer(default$);
var format_coercers = (function (){var G__20638 = (function (){var iter__5480__auto__ = (function reitit$coercion$malli$_coercer_$_iter__20639(s__20640){
return (new cljs.core.LazySeq(null,(function (){
var s__20640__$1 = s__20640;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20640__$1);
if(temp__5804__auto__){
var s__20640__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20640__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20640__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20642 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20641 = (0);
while(true){
if((i__20641 < size__5479__auto__)){
var vec__20643 = cljs.core._nth(c__5478__auto__,i__20641);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20643,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20643,(1),null);
cljs.core.chunk_append(b__20642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1,__GT_coercer(t)], null));

var G__20699 = (i__20641 + (1));
i__20641 = G__20699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20642),reitit$coercion$malli$_coercer_$_iter__20639(cljs.core.chunk_rest(s__20640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20642),null);
}
} else {
var vec__20646 = cljs.core.first(s__20640__$2);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20646,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20646,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1,__GT_coercer(t)], null),reitit$coercion$malli$_coercer_$_iter__20639(cljs.core.rest(s__20640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(formats);
})();
var G__20638__$1 = (((G__20638 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__20638));
var G__20638__$2 = (((G__20638__$1 == null))?null:cljs.core.seq(G__20638__$1));
if((G__20638__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20638__$2);
}
})();
var get_coercer = (cljs.core.truth_(format_coercers)?(function (format){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(format_coercers,format);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default_coercer;
}
}):(cljs.core.truth_(default_coercer)?cljs.core.constantly(default_coercer):null));
if(cljs.core.truth_((function (){var and__5000__auto__ = enabled;
if(cljs.core.truth_(and__5000__auto__)){
return get_coercer;
} else {
return and__5000__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"decode","decode",-1306165281))){
return (function (value,format){
var temp__5802__auto__ = (get_coercer.cljs$core$IFn$_invoke$arity$1 ? get_coercer.cljs$core$IFn$_invoke$arity$1(format) : get_coercer.call(null, format));
if(cljs.core.truth_(temp__5802__auto__)){
var coercer = temp__5802__auto__;
var transformed = reitit.coercion.malli._decode(coercer,value);
if(cljs.core.truth_(reitit.coercion.malli._validate(coercer,transformed))){
return transformed;
} else {
var error = reitit.coercion.malli._explain(coercer,transformed);
return reitit.coercion.map__GT_CoercionError(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed));
}
} else {
return value;
}
});
} else {
return (function (value,format){
var transformed = default_coercer.reitit$coercion$malli$Coercer$_decode$arity$2(null, value);
var temp__5802__auto__ = (get_coercer.cljs$core$IFn$_invoke$arity$1 ? get_coercer.cljs$core$IFn$_invoke$arity$1(format) : get_coercer.call(null, format));
if(cljs.core.truth_(temp__5802__auto__)){
var coercer = temp__5802__auto__;
if(cljs.core.truth_(reitit.coercion.malli._validate(coercer,transformed))){
return reitit.coercion.malli._encode(coercer,transformed);
} else {
var error = reitit.coercion.malli._explain(coercer,transformed);
return reitit.coercion.map__GT_CoercionError(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed));
}
} else {
return value;
}
});
}
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.malli.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.Keyword(null,"error-keys","error-keys",633236228),new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.Keyword(null,"lite","lite",341720712),new cljs.core.Keyword(null,"strip-extra-keys","strip-extra-keys",844924777),new cljs.core.Keyword(null,"encode-error","encode-error",887349998),new cljs.core.Keyword(null,"default-values","default-values",1480201073),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"compile","compile",608186429)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.default_transformer_provider,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.malli.json_transformer_provider], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.string_transformer_provider], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.default_transformer_provider,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.malli.json_transformer_provider], null)], null)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"coercion","coercion",904067157),null,new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"humanized","humanized",-287672961),null], null), null),true,true,true,null,true,null,true,malli.util.closed_schema]);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.malli.t_reitit$coercion$malli20660 = (function (options,compile,transformers,error_keys,lite,encode_error,show_QMARK_,opts,map__20654,meta20661){
this.options = options;
this.compile = compile;
this.transformers = transformers;
this.error_keys = error_keys;
this.lite = lite;
this.encode_error = encode_error;
this.show_QMARK_ = show_QMARK_;
this.opts = opts;
this.map__20654 = map__20654;
this.meta20661 = meta20661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20662,meta20661__$1){
var self__ = this;
var _20662__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli20660(self__.options,self__.compile,self__.transformers,self__.error_keys,self__.lite,self__.encode_error,self__.show_QMARK_,self__.opts,self__.map__20654,meta20661__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20662){
var self__ = this;
var _20662__$1 = this;
return self__.meta20661;
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"malli","malli",814072082);
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (_,type,schema){
var self__ = this;
var ___$1 = this;
return reitit.coercion.malli._coercer(schema,type,self__.transformers,new cljs.core.Keyword(null,"decode","decode",-1306165281),self__.opts);
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (_,schema){
var self__ = this;
var ___$1 = this;
return reitit.coercion.malli._coercer(schema,new cljs.core.Keyword(null,"response","response",-1068424192),self__.transformers,new cljs.core.Keyword(null,"encode","encode",-1753429702),self__.opts);
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(model))){
var G__20663 = cljs.core.first(model);
var G__20664 = self__.options;
return (self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(G__20663,G__20664) : self__.compile.call(null, G__20663,G__20664));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (x,y){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(x,y,self__.options);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20650_SHARP_){
return (self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(p1__20650_SHARP_,self__.options) : self__.compile.call(null, p1__20650_SHARP_,self__.options));
}),model));
}
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_get_model_apidocs$arity$4 = (function (this$,specification,model,options__$1){
var self__ = this;
var this$__$1 = this;
var G__20665 = specification;
var G__20665__$1 = (((G__20665 instanceof cljs.core.Keyword))?G__20665.fqn:null);
switch (G__20665__$1) {
case "openapi":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(options__$1))){
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2(malli.core.deref.cljs$core$IFn$_invoke$arity$1(model),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts,options__$1], 0)));
} else {
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2(model,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts,options__$1], 0)));
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Malli apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"malli","malli",814072082)], null));

}
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var G__20666 = error;
var G__20666__$1 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"humanized","humanized",-287672961)) : self__.show_QMARK_.call(null, new cljs.core.Keyword(null,"humanized","humanized",-287672961))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20666,new cljs.core.Keyword(null,"humanized","humanized",-287672961),malli.error.humanize.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"message","message",-406056002)], null))):G__20666);
var G__20666__$2 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791)) : self__.show_QMARK_.call(null, new cljs.core.Keyword(null,"schema","schema",-1582001791))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__20666__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.edn.write_string,self__.opts):G__20666__$1);
var G__20666__$3 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"errors","errors",-908790718)) : self__.show_QMARK_.call(null, new cljs.core.Keyword(null,"errors","errors",-908790718))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2(G__20666__$2,self__.opts),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__20651_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__20651_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.edn.write_string,self__.opts);
}))):G__20666__$2);
var G__20666__$4 = ((cljs.core.seq(self__.error_keys))?cljs.core.select_keys(G__20666__$3,self__.error_keys):G__20666__$3);
if(cljs.core.truth_(self__.encode_error)){
return (self__.encode_error.cljs$core$IFn$_invoke$arity$1 ? self__.encode_error.cljs$core$IFn$_invoke$arity$1(G__20666__$4) : self__.encode_error.call(null, G__20666__$4));
} else {
return G__20666__$4;
}
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,schema){
var self__ = this;
var ___$1 = this;
return schema;
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__20668){
var self__ = this;
var map__20669 = p__20668;
var map__20669__$1 = cljs.core.__destructure_map(map__20669);
var data = map__20669__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20669__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20669__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__20670 = specification;
var G__20670__$1 = (((G__20670 instanceof cljs.core.Keyword))?G__20670.fqn:null);
switch (G__20670__$1) {
case "swagger":
return malli.swagger.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.swagger","parameters","malli.swagger/parameters",475343595),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__5480__auto__ = (function reitit$coercion$malli$iter__20672(s__20673){
return (new cljs.core.LazySeq(null,(function (){
var s__20673__$1 = s__20673;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20673__$1);
if(temp__5804__auto__){
var s__20673__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20673__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20673__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20675 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20674 = (0);
while(true){
if((i__20674 < size__5479__auto__)){
var vec__20677 = cljs.core._nth(c__5478__auto__,i__20674);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20677,(1),null);
cljs.core.chunk_append(b__20675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(v,self__.options) : self__.compile.call(null, v,self__.options))], null));

var G__20702 = (i__20674 + (1));
i__20674 = G__20702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20675),reitit$coercion$malli$iter__20672(cljs.core.chunk_rest(s__20673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20675),null);
}
} else {
var vec__20681 = cljs.core.first(s__20673__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20681,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(v,self__.options) : self__.compile.call(null, v,self__.options))], null),reitit$coercion$malli$iter__20672(cljs.core.rest(s__20673__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.swagger","responses","malli.swagger/responses",-1329076900),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__5480__auto__ = (function reitit$coercion$malli$iter__20684(s__20685){
return (new cljs.core.LazySeq(null,(function (){
var s__20685__$1 = s__20685;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20685__$1);
if(temp__5804__auto__){
var s__20685__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20685__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20685__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20687 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20686 = (0);
while(true){
if((i__20686 < size__5479__auto__)){
var vec__20688 = cljs.core._nth(c__5478__auto__,i__20686);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688,(1),null);
cljs.core.chunk_append(b__20687,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.compile,self__.options);
} else {
return $__$1;
}
})()], null));

var G__20703 = (i__20686 + (1));
i__20686 = G__20703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20687),reitit$coercion$malli$iter__20684(cljs.core.chunk_rest(s__20685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20687),null);
}
} else {
var vec__20691 = cljs.core.first(s__20685__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.compile,self__.options);
} else {
return $__$1;
}
})()], null),reitit$coercion$malli$iter__20684(cljs.core.rest(s__20685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Malli apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"malli","malli",814072082)], null));

}
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"compile","compile",-2046249340,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"error-keys","error-keys",-2021199541,null),new cljs.core.Symbol(null,"lite","lite",1982252239,null),new cljs.core.Symbol(null,"encode-error","encode-error",-1767085771,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__20654","map__20654",1643629021,null),new cljs.core.Symbol(null,"meta20661","meta20661",-216609031,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli20660.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli20660.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli20660");

(reitit.coercion.malli.t_reitit$coercion$malli20660.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.coercion.malli/t_reitit$coercion$malli20660");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli20660.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli20660 = (function reitit$coercion$malli$__GT_t_reitit$coercion$malli20660(options,compile,transformers,error_keys,lite,encode_error,show_QMARK_,opts,map__20654,meta20661){
return (new reitit.coercion.malli.t_reitit$coercion$malli20660(options,compile,transformers,error_keys,lite,encode_error,show_QMARK_,opts,map__20654,meta20661));
});


reitit.coercion.malli.create = (function reitit$coercion$malli$create(var_args){
var G__20653 = arguments.length;
switch (G__20653) {
case 0:
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1(null);
}));

(reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__20654 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.coercion.malli.default_options,opts], 0));
var map__20654__$1 = cljs.core.__destructure_map(map__20654);
var opts__$1 = map__20654__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var lite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword(null,"lite","lite",341720712));
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword(null,"options","options",99638489));
var error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword(null,"error-keys","error-keys",633236228));
var encode_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword(null,"encode-error","encode-error",887349998));
var show_QMARK_ = (function (key){
return cljs.core.contains_QMARK_(error_keys,key);
});
var transformers__$1 = clojure.walk.prewalk((function (p1__20649_SHARP_){
if((((!((p1__20649_SHARP_ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__20649_SHARP_.reitit$coercion$malli$TransformationProvider$))))?true:(((!p1__20649_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reitit.coercion.malli.TransformationProvider,p1__20649_SHARP_):false)):cljs.core.native_satisfies_QMARK_(reitit.coercion.malli.TransformationProvider,p1__20649_SHARP_))){
return reitit.coercion.malli._transformer(p1__20649_SHARP_,opts__$1);
} else {
return p1__20649_SHARP_;
}
}),transformers);
var compile__$1 = (cljs.core.truth_(lite)?(function (schema,options__$1){
var G__20656 = (function (){var _STAR_options_STAR__orig_val__20658 = malli.experimental.lite._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__20659 = options__$1;
(malli.experimental.lite._STAR_options_STAR_ = _STAR_options_STAR__temp_val__20659);

try{return malli.experimental.lite.schema(schema);
}finally {(malli.experimental.lite._STAR_options_STAR_ = _STAR_options_STAR__orig_val__20658);
}})();
var G__20657 = options__$1;
return (compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(G__20656,G__20657) : compile.call(null, G__20656,G__20657));
}):compile);
return (new reitit.coercion.malli.t_reitit$coercion$malli20660(options,compile__$1,transformers__$1,error_keys,lite,encode_error,show_QMARK_,opts__$1,map__20654__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
}));

(reitit.coercion.malli.create.cljs$lang$maxFixedArity = 1);

reitit.coercion.malli.coercion = reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1(reitit.coercion.malli.default_options);

//# sourceMappingURL=reitit.coercion.malli.js.map
