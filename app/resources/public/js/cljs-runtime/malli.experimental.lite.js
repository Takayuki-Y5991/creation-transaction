goog.provide('malli.experimental.lite');
malli.experimental.lite._STAR_options_STAR_ = null;

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
malli.experimental.lite._Optional = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.experimental.lite._Optional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(malli.experimental.lite._Optional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k19876,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__19889 = k19876;
var G__19889__$1 = (((G__19889 instanceof cljs.core.Keyword))?G__19889.fqn:null);
switch (G__19889__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19876,else__5303__auto__);

}
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__19893){
var vec__19894 = p__19893;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19894,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19894,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#malli.experimental.lite.-Optional{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19875){
var self__ = this;
var G__19875__$1 = this;
return (new cljs.core.RecordIter((0),G__19875__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(malli.experimental.lite._Optional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new malli.experimental.lite._Optional(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1944658284 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19878,other19879){
var self__ = this;
var this19878__$1 = this;
return (((!((other19879 == null)))) && ((((this19878__$1.constructor === other19879.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19878__$1.value,other19879.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19878__$1.__extmap,other19879.__extmap)))))));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new malli.experimental.lite._Optional(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k19876){
var self__ = this;
var this__5307__auto____$1 = this;
var G__19927 = k19876;
var G__19927__$1 = (((G__19927 instanceof cljs.core.Keyword))?G__19927.fqn:null);
switch (G__19927__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19876);

}
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__19875){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__19936 = cljs.core.keyword_identical_QMARK_;
var expr__19937 = k__5309__auto__;
if(cljs.core.truth_((pred__19936.cljs$core$IFn$_invoke$arity$2 ? pred__19936.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__19937) : pred__19936.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__19937)))){
return (new malli.experimental.lite._Optional(G__19875,self__.__meta,self__.__extmap,null));
} else {
return (new malli.experimental.lite._Optional(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__19875),null));
}
}));

(malli.experimental.lite._Optional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__19875){
var self__ = this;
var this__5299__auto____$1 = this;
return (new malli.experimental.lite._Optional(self__.value,G__19875,self__.__extmap,self__.__hash));
}));

(malli.experimental.lite._Optional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(malli.experimental.lite._Optional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(malli.experimental.lite._Optional.cljs$lang$type = true);

(malli.experimental.lite._Optional.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"malli.experimental.lite/-Optional",null,(1),null));
}));

(malli.experimental.lite._Optional.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"malli.experimental.lite/-Optional");
}));

/**
 * Positional factory function for malli.experimental.lite/-Optional.
 */
malli.experimental.lite.__GT__Optional = (function malli$experimental$lite$__GT__Optional(value){
return (new malli.experimental.lite._Optional(value,null,null,null));
});

/**
 * Factory function for malli.experimental.lite/-Optional, taking a map of keywords to field values.
 */
malli.experimental.lite.map__GT__Optional = (function malli$experimental$lite$map__GT__Optional(G__19882){
var extmap__5342__auto__ = (function (){var G__19945 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19882,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__19882)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19945);
} else {
return G__19945;
}
})();
return (new malli.experimental.lite._Optional(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__19882),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

malli.experimental.lite._schema = (function malli$experimental$lite$_schema(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20060 = arguments.length;
var i__5727__auto___20061 = (0);
while(true){
if((i__5727__auto___20061 < len__5726__auto___20060)){
args__5732__auto__.push((arguments[i__5727__auto___20061]));

var G__20062 = (i__5727__auto___20061 + (1));
i__5727__auto___20061 = G__20062;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return malli.experimental.lite._schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(malli.experimental.lite._schema.cljs$core$IFn$_invoke$arity$variadic = (function (t,xs){
var G__19954 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.experimental.lite.schema,xs));
return (malli.experimental.lite.schema.cljs$core$IFn$_invoke$arity$1 ? malli.experimental.lite.schema.cljs$core$IFn$_invoke$arity$1(G__19954) : malli.experimental.lite.schema.call(null, G__19954));
}));

(malli.experimental.lite._schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(malli.experimental.lite._schema.cljs$lang$applyTo = (function (seq19947){
var G__19948 = cljs.core.first(seq19947);
var seq19947__$1 = cljs.core.next(seq19947);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19948,seq19947__$1);
}));

malli.experimental.lite._entry = (function malli$experimental$lite$_entry(p__19957){
var vec__19958 = p__19957;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(1),null);
var vec__19962 = (((v instanceof malli.experimental.lite._Optional))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.value,true], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,(0),null);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,(1),null);
var G__19966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
var G__19966__$1 = (cljs.core.truth_(optional)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19966,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null)):G__19966);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19966__$1,(malli.experimental.lite.schema.cljs$core$IFn$_invoke$arity$1 ? malli.experimental.lite.schema.cljs$core$IFn$_invoke$arity$1(v__$1) : malli.experimental.lite.schema.call(null, v__$1)));

});
malli.experimental.lite.schema = (function malli$experimental$lite$schema(x){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.experimental.lite._entry,x)):x),malli.experimental.lite._STAR_options_STAR_);
});
malli.experimental.lite.optional = (function malli$experimental$lite$optional(x){
return malli.experimental.lite.__GT__Optional(x);
});
malli.experimental.lite.maybe = (function malli$experimental$lite$maybe(x){
return malli.experimental.lite._schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
malli.experimental.lite.set = (function malli$experimental$lite$set(x){
return malli.experimental.lite._schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"set","set",304602554),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
malli.experimental.lite.vector = (function malli$experimental$lite$vector(x){
return malli.experimental.lite._schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
malli.experimental.lite.map_of = (function malli$experimental$lite$map_of(k,v){
return malli.experimental.lite._schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,v], 0));
});
malli.experimental.lite.tuple = (function malli$experimental$lite$tuple(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20075 = arguments.length;
var i__5727__auto___20076 = (0);
while(true){
if((i__5727__auto___20076 < len__5726__auto___20075)){
args__5732__auto__.push((arguments[i__5727__auto___20076]));

var G__20078 = (i__5727__auto___20076 + (1));
i__5727__auto___20076 = G__20078;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.experimental.lite.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.experimental.lite.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(malli.experimental.lite._schema,new cljs.core.Keyword(null,"tuple","tuple",-472667284),xs);
}));

(malli.experimental.lite.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.experimental.lite.tuple.cljs$lang$applyTo = (function (seq19983){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19983));
}));

malli.experimental.lite.and = (function malli$experimental$lite$and(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20080 = arguments.length;
var i__5727__auto___20081 = (0);
while(true){
if((i__5727__auto___20081 < len__5726__auto___20080)){
args__5732__auto__.push((arguments[i__5727__auto___20081]));

var G__20082 = (i__5727__auto___20081 + (1));
i__5727__auto___20081 = G__20082;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.experimental.lite.and.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.experimental.lite.and.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(malli.experimental.lite._schema,new cljs.core.Keyword(null,"and","and",-971899817),xs);
}));

(malli.experimental.lite.and.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.experimental.lite.and.cljs$lang$applyTo = (function (seq19988){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19988));
}));

malli.experimental.lite.or = (function malli$experimental$lite$or(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20084 = arguments.length;
var i__5727__auto___20085 = (0);
while(true){
if((i__5727__auto___20085 < len__5726__auto___20084)){
args__5732__auto__.push((arguments[i__5727__auto___20085]));

var G__20087 = (i__5727__auto___20085 + (1));
i__5727__auto___20085 = G__20087;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.experimental.lite.or.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.experimental.lite.or.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(malli.experimental.lite._schema,new cljs.core.Keyword(null,"or","or",235744169),xs);
}));

(malli.experimental.lite.or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.experimental.lite.or.cljs$lang$applyTo = (function (seq19995){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19995));
}));


//# sourceMappingURL=malli.experimental.lite.js.map
