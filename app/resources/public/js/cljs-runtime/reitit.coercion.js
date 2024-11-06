goog.provide('reitit.coercion');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

var reitit$coercion$Coercion$_get_name$dyn_26616 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._get_name[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
});
/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_name$dyn_26616(this$);
}
});

var reitit$coercion$Coercion$_get_options$dyn_26617 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._get_options[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
});
/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_options$dyn_26617(this$);
}
});

var reitit$coercion$Coercion$_get_apidocs$dyn_26623 = (function (this$,specification,data){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5351__auto__.call(null, this$,specification,data));
} else {
var m__5349__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5349__auto__.call(null, this$,specification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
});
/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
return reitit$coercion$Coercion$_get_apidocs$dyn_26623(this$,specification,data);
}
});

var reitit$coercion$Coercion$_get_model_apidocs$dyn_26624 = (function (this$,specification,model,options){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._get_model_apidocs[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5351__auto__.call(null, this$,specification,model,options));
} else {
var m__5349__auto__ = (reitit.coercion._get_model_apidocs["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5349__auto__.call(null, this$,specification,model,options));
} else {
throw cljs.core.missing_protocol("Coercion.-get-model-apidocs",this$);
}
}
});
/**
 * Convert model into a format that can be used in api docs
 */
reitit.coercion._get_model_apidocs = (function reitit$coercion$_get_model_apidocs(this$,specification,model,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4 == null)))))){
return this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4(this$,specification,model,options);
} else {
return reitit$coercion$Coercion$_get_model_apidocs$dyn_26624(this$,specification,model,options);
}
});

var reitit$coercion$Coercion$_compile_model$dyn_26625 = (function (this$,model,name){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5351__auto__.call(null, this$,model,name));
} else {
var m__5349__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5349__auto__.call(null, this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
});
/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
return reitit$coercion$Coercion$_compile_model$dyn_26625(this$,model,name);
}
});

var reitit$coercion$Coercion$_open_model$dyn_26626 = (function (this$,model){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._open_model[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5351__auto__.call(null, this$,model));
} else {
var m__5349__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5349__auto__.call(null, this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
});
/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_open_model$dyn_26626(this$,model);
}
});

var reitit$coercion$Coercion$_encode_error$dyn_26630 = (function (this$,error){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5351__auto__.call(null, this$,error));
} else {
var m__5349__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5349__auto__.call(null, this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
});
/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
return reitit$coercion$Coercion$_encode_error$dyn_26630(this$,error);
}
});

var reitit$coercion$Coercion$_request_coercer$dyn_26631 = (function (this$,type,model){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5351__auto__.call(null, this$,type,model));
} else {
var m__5349__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5349__auto__.call(null, this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
return reitit$coercion$Coercion$_request_coercer$dyn_26631(this$,type,model);
}
});

var reitit$coercion$Coercion$_response_coercer$dyn_26637 = (function (this$,model){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5351__auto__.call(null, this$,model));
} else {
var m__5349__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5349__auto__.call(null, this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_response_coercer$dyn_26637(this$,model);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k26404,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__26416 = k26404;
switch (G__26416) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26404,else__5303__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__26417){
var vec__26418 = p__26417;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26418,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26418,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26403){
var self__ = this;
var G__26403__$1 = this;
return (new cljs.core.RecordIter((0),G__26403__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26405,other26406){
var self__ = this;
var this26405__$1 = this;
return (((!((other26406 == null)))) && ((((this26405__$1.constructor === other26406.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26405__$1.__extmap,other26406.__extmap)))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k26404){
var self__ = this;
var this__5307__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k26404);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__26403){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__26426 = cljs.core.keyword_identical_QMARK_;
var expr__26427 = k__5309__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__26403),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__26403){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__26403,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__26407){
var extmap__5342__auto__ = (function (){var G__26434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__26407);
if(cljs.core.record_QMARK_(G__26407)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26434);
} else {
return G__26434;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__5342__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k26436,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__26445 = k26436;
var G__26445__$1 = (((G__26445 instanceof cljs.core.Keyword))?G__26445.fqn:null);
switch (G__26445__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26436,else__5303__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__26447){
var vec__26448 = p__26447;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26448,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26448,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26435){
var self__ = this;
var G__26435__$1 = this;
return (new cljs.core.RecordIter((0),G__26435__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26437,other26438){
var self__ = this;
var this26437__$1 = this;
return (((!((other26438 == null)))) && ((((this26437__$1.constructor === other26438.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26437__$1.in,other26438.in)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26437__$1.style,other26438.style)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26437__$1.keywordize_QMARK_,other26438.keywordize_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26437__$1.open_QMARK_,other26438.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26437__$1.__extmap,other26438.__extmap)))))))))))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k26436){
var self__ = this;
var this__5307__auto____$1 = this;
var G__26452 = k26436;
var G__26452__$1 = (((G__26452 instanceof cljs.core.Keyword))?G__26452.fqn:null);
switch (G__26452__$1) {
case "in":
case "style":
case "keywordize?":
case "open?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k26436);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__26435){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__26454 = cljs.core.keyword_identical_QMARK_;
var expr__26455 = k__5309__auto__;
if(cljs.core.truth_((pred__26454.cljs$core$IFn$_invoke$arity$2 ? pred__26454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__26455) : pred__26454.call(null, new cljs.core.Keyword(null,"in","in",-1531184865),expr__26455)))){
return (new reitit.coercion.ParameterCoercion(G__26435,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26454.cljs$core$IFn$_invoke$arity$2 ? pred__26454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__26455) : pred__26454.call(null, new cljs.core.Keyword(null,"style","style",-496642736),expr__26455)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__26435,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26454.cljs$core$IFn$_invoke$arity$2 ? pred__26454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__26455) : pred__26454.call(null, new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__26455)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__26435,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26454.cljs$core$IFn$_invoke$arity$2 ? pred__26454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),expr__26455) : pred__26454.call(null, new cljs.core.Keyword(null,"open?","open?",1238443125),expr__26455)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__26435,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__26435),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__26435){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__26435,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__26440){
var extmap__5342__auto__ = (function (){var G__26463 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26440,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], 0));
if(cljs.core.record_QMARK_(G__26440)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26463);
} else {
return G__26463;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__26440),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__26440),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__26440),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__26440),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"fragment","fragment",826775688),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?["Request coercion failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))].join(''):"Request coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null)),new cljs.core.Keyword(null,"request","request",1772954723),request)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?["Response coercion failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))].join(''):"Response coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.Keyword(null,"request","request",1772954723),request),new cljs.core.Keyword(null,"response","response",-1068424192),response)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion._identity_coercer = (function reitit$coercion$_identity_coercer(value,_format){
return value;
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__26475){
var map__26476 = p__26475;
var map__26476__$1 = cljs.core.__destructure_map(map__26476);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26476__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26476__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26476__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
var skip = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26476__$1,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(coercion)){
var temp__5804__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null, type));
if(cljs.core.truth_(temp__5804__auto__)){
var map__26482 = temp__5804__auto__;
var map__26482__$1 = cljs.core.__destructure_map(map__26482);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_((skip.cljs$core$IFn$_invoke$arity$1 ? skip.cljs$core$IFn$_invoke$arity$1(style) : skip.call(null, style)))){
return null;
} else {
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var __GT_open = (cljs.core.truth_(open_QMARK_)?(function (p1__26473_SHARP_){
return reitit.coercion._open_model(coercion,p1__26473_SHARP_);
}):cljs.core.identity);
var coercer = reitit.coercion._request_coercer(coercion,style,(__GT_open.cljs$core$IFn$_invoke$arity$1 ? __GT_open.cljs$core$IFn$_invoke$arity$1(model) : __GT_open.call(null, model)));
if(cljs.core.truth_(coercer)){
return (function (request){
var value = transform(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null, request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null, value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.get_default = (function reitit$coercion$get_default(request_or_response){
var or__5002__auto__ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(request_or_response));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__26487 = request_or_response;
var G__26487__$1 = (((G__26487 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__26487));
if((G__26487__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),G__26487__$1);
}
}
});
reitit.coercion.content_request_coercer = (function reitit$coercion$content_request_coercer(coercion,p__26489,p__26490){
var map__26491 = p__26489;
var map__26491__$1 = cljs.core.__destructure_map(map__26491);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26491__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26491__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__26492 = p__26490;
var map__26492__$1 = cljs.core.__destructure_map(map__26492);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26492__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26492__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
if(cljs.core.truth_(coercion)){
var in$ = new cljs.core.Keyword(null,"body-params","body-params",-369749490);
var format__GT_coercer = (function (){var G__26493 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),body)], null)], null):null),(function (){var iter__5480__auto__ = (function reitit$coercion$content_request_coercer_$_iter__26494(s__26495){
return (new cljs.core.LazySeq(null,(function (){
var s__26495__$1 = s__26495;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26495__$1);
if(temp__5804__auto__){
var s__26495__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26495__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26495__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26497 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26496 = (0);
while(true){
if((i__26496 < size__5479__auto__)){
var vec__26502 = cljs.core._nth(c__5478__auto__,i__26496);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26502,(0),null);
var map__26505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26502,(1),null);
var map__26505__$1 = cljs.core.__destructure_map(map__26505);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26505__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__26497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null));

var G__26684 = (i__26496 + (1));
i__26496 = G__26684;
continue;
} else {
var G__26685 = (i__26496 + (1));
i__26496 = G__26685;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26497),reitit$coercion$content_request_coercer_$_iter__26494(cljs.core.chunk_rest(s__26495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26497),null);
}
} else {
var vec__26506 = cljs.core.first(s__26495__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26506,(0),null);
var map__26509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26506,(1),null);
var map__26509__$1 = cljs.core.__destructure_map(map__26509);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26509__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null),reitit$coercion$content_request_coercer_$_iter__26494(cljs.core.rest(s__26495__$2)));
} else {
var G__26687 = cljs.core.rest(s__26495__$2);
s__26495__$1 = G__26687;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(content);
})());
var G__26493__$1 = (((G__26493 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__26493));
var G__26493__$2 = (((G__26493__$1 == null))?null:cljs.core.seq(G__26493__$1));
if((G__26493__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26493__$2);
}
})();
if(cljs.core.truth_(format__GT_coercer)){
return (function (request){
var value = in$.cljs$core$IFn$_invoke$arity$1(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null, request));
var coercer = (function (){var or__5002__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null, format));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null, new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return reitit.coercion._identity_coercer;
}
}
})();
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null, value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,p__26512,p__26513){
var map__26515 = p__26512;
var map__26515__$1 = cljs.core.__destructure_map(map__26515);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26515__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26515__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__26516 = p__26513;
var map__26516__$1 = cljs.core.__destructure_map(map__26516);
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26516__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26516__$1,new cljs.core.Keyword(null,"serialize-failed-result","serialize-failed-result",391398953));
if(cljs.core.truth_(coercion)){
var format__GT_coercer = (function (){var G__26517 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._response_coercer(coercion,body)], null)], null):null),(function (){var iter__5480__auto__ = (function reitit$coercion$response_coercer_$_iter__26518(s__26519){
return (new cljs.core.LazySeq(null,(function (){
var s__26519__$1 = s__26519;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26519__$1);
if(temp__5804__auto__){
var s__26519__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26519__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26519__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26521 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26520 = (0);
while(true){
if((i__26520 < size__5479__auto__)){
var vec__26522 = cljs.core._nth(c__5478__auto__,i__26520);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26522,(0),null);
var map__26525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26522,(1),null);
var map__26525__$1 = cljs.core.__destructure_map(map__26525);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26525__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__26521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null));

var G__26693 = (i__26520 + (1));
i__26520 = G__26693;
continue;
} else {
var G__26694 = (i__26520 + (1));
i__26520 = G__26694;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26521),reitit$coercion$response_coercer_$_iter__26518(cljs.core.chunk_rest(s__26519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26521),null);
}
} else {
var vec__26528 = cljs.core.first(s__26519__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26528,(0),null);
var map__26531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26528,(1),null);
var map__26531__$1 = cljs.core.__destructure_map(map__26531);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26531__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null),reitit$coercion$response_coercer_$_iter__26518(cljs.core.rest(s__26519__$2)));
} else {
var G__26695 = cljs.core.rest(s__26519__$2);
s__26519__$1 = G__26695;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(content);
})());
var G__26517__$1 = (((G__26517 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__26517));
var G__26517__$2 = (((G__26517__$1 == null))?null:cljs.core.seq(G__26517__$1));
if((G__26517__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26517__$2);
}
})();
if(cljs.core.truth_(format__GT_coercer)){
return (function (request,response){
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null, request,response));
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var coercer = (function (){var or__5002__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null, format));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null, new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return reitit.coercion._identity_coercer;
}
}
})();
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null, value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.response_coercion_failed_BANG_(result,coercion,value,request,response,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response","response",-1068424192)], 0)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null, request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5802__auto__ = (function (){var or__5002__auto__ = (function (){var G__26540 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__26540) : coercers.call(null, G__26540));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : coercers.call(null, new cljs.core.Keyword(null,"default","default",-1987822328)));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var coercer = temp__5802__auto__;
return reitit.impl.fast_assoc(response,new cljs.core.Keyword(null,"body","body",-2049205669),(coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(request,response) : coercer.call(null, request,response)));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(var_args){
var G__26543 = arguments.length;
switch (G__26543) {
case 3:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3 = (function (coercion,parameters,opts){
var G__26545 = (function (){var iter__5480__auto__ = (function reitit$coercion$iter__26546(s__26547){
return (new cljs.core.LazySeq(null,(function (){
var s__26547__$1 = s__26547;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26547__$1);
if(temp__5804__auto__){
var s__26547__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26547__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26547__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26549 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26548 = (0);
while(true){
if((i__26548 < size__5479__auto__)){
var vec__26550 = cljs.core._nth(c__5478__auto__,i__26548);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__26549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__26699 = (i__26548 + (1));
i__26548 = G__26699;
continue;
} else {
var G__26700 = (i__26548 + (1));
i__26548 = G__26700;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26549),reitit$coercion$iter__26546(cljs.core.chunk_rest(s__26547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26549),null);
}
} else {
var vec__26554 = cljs.core.first(s__26547__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$iter__26546(cljs.core.rest(s__26547__$2)));
} else {
var G__26702 = cljs.core.rest(s__26547__$2);
s__26547__$1 = G__26702;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(parameters);
})();
var G__26545__$1 = (((G__26545 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__26545));
var G__26545__$2 = (((G__26545__$1 == null))?null:cljs.core.seq(G__26545__$1));
if((G__26545__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26545__$2);
}
}));

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4 = (function (coercion,parameters,route_request,opts){
var crc = (cljs.core.truth_(route_request)?(function (){var G__26557 = reitit.coercion.content_request_coercer(coercion,route_request,opts);
if((G__26557 == null)){
return null;
} else {
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"request","request",1772954723),G__26557],null));
}
})():null);
var rcs = reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters,(function (){var G__26558 = opts;
if(cljs.core.truth_(route_request)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26558,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null));
} else {
return G__26558;
}
})());
if(cljs.core.truth_((function (){var and__5000__auto__ = crc;
if(cljs.core.truth_(and__5000__auto__)){
return rcs;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(crc,cljs.core.vec(rcs));
} else {
var or__5002__auto__ = crc;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return rcs;
}
}
}));

(reitit.coercion.request_coercers.cljs$lang$maxFixedArity = 4);

reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
var G__26561 = (function (){var iter__5480__auto__ = (function reitit$coercion$response_coercers_$_iter__26562(s__26563){
return (new cljs.core.LazySeq(null,(function (){
var s__26563__$1 = s__26563;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26563__$1);
if(temp__5804__auto__){
var s__26563__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26563__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26563__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26565 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26564 = (0);
while(true){
if((i__26564 < size__5479__auto__)){
var vec__26566 = cljs.core._nth(c__5478__auto__,i__26564);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26566,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26566,(1),null);
cljs.core.chunk_append(b__26565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,model,opts)], null));

var G__26709 = (i__26564 + (1));
i__26564 = G__26709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26565),reitit$coercion$response_coercers_$_iter__26562(cljs.core.chunk_rest(s__26563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26565),null);
}
} else {
var vec__26569 = cljs.core.first(s__26563__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,model,opts)], null),reitit$coercion$response_coercers_$_iter__26562(cljs.core.rest(s__26563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(responses);
})();
var G__26561__$1 = (((G__26561 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__26561));
var G__26561__$2 = (((G__26561__$1 == null))?null:cljs.core.seq(G__26561__$1));
if((G__26561__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26561__$2);
}
});
reitit.coercion._compile_parameters = (function reitit$coercion$_compile_parameters(data,coercion){
return reitit.impl.path_update(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.any_QMARK_], null),(function (p1__26576_SHARP_){
return reitit.coercion._compile_model(coercion,p1__26576_SHARP_,null);
})], null)], null));
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to both compile the schemas and create compiled coercers
 *   into Match under `:result with the following keys:
 * 
 * | key       | description
 * | ----------|-------------
 * | `:data`   | data with compiled schemas
 * | `:coerce` | function of `Match -> coerced parameters` to coerce parameters
 * 
 *   A pre-requisite to use [[coerce!]].
 * 
 *   NOTE: this is not needed with ring/http, where the coercion compilation is
 *   managed in the request coercion middleware/interceptors.
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__26585,opts){
var vec__26586 = p__26585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(0),null);
var map__26589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(1),null);
var map__26589__$1 = cljs.core.__destructure_map(map__26589);
var data = map__26589__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26589__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26589__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__5000__auto__ = parameters;
if(cljs.core.truth_(and__5000__auto__)){
return coercion;
} else {
return and__5000__auto__;
}
})())){
var map__26595 = reitit.coercion._compile_parameters(data,coercion);
var map__26595__$1 = cljs.core.__destructure_map(map__26595);
var data__$1 = map__26595__$1;
var parameters__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26595__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504),reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters__$1,opts)], null);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled coercers in `Match`
 *   under path `[:result :coerce]` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced. If coercion or parameters
 *   are not defined, returns `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5802__auto__ = new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match));
if(cljs.core.truth_(temp__5802__auto__)){
var coercers = temp__5802__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});

//# sourceMappingURL=reitit.coercion.js.map
