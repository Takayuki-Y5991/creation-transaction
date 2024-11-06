goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_12787 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._header[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null, value));
} else {
var m__5349__auto__ = (devtools.format._header["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null, value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_12787(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_12794 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._has_body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null, value));
} else {
var m__5349__auto__ = (devtools.format._has_body["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null, value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_12794(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_12795 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null, value));
} else {
var m__5349__auto__ = (devtools.format._body["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null, value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_12795(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12472 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12472["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12473 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12473["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12474 = temp__5802__auto____$2;
return (o12474["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12483 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12483["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12485 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12485["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12486 = temp__5802__auto____$2;
return (o12486["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12495 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12495["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12496 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12496["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12497 = temp__5802__auto____$2;
return (o12497["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12508 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12508["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12510 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12510["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12511 = temp__5802__auto____$2;
return (o12511["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12523 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12523["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12524 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12524["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12525 = temp__5802__auto____$2;
return (o12525["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12533 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12533["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12534 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12534["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12535 = temp__5802__auto____$2;
return (o12535["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12544 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12544["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12545 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12545["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12546 = temp__5802__auto____$2;
return (o12546["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12834 = arguments.length;
var i__5727__auto___12835 = (0);
while(true){
if((i__5727__auto___12835 < len__5726__auto___12834)){
args__5732__auto__.push((arguments[i__5727__auto___12835]));

var G__12837 = (i__5727__auto___12835 + (1));
i__5727__auto___12835 = G__12837;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq12568){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12568));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12840 = arguments.length;
var i__5727__auto___12842 = (0);
while(true){
if((i__5727__auto___12842 < len__5726__auto___12840)){
args__5732__auto__.push((arguments[i__5727__auto___12842]));

var G__12843 = (i__5727__auto___12842 + (1));
i__5727__auto___12842 = G__12843;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq12595){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12595));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12849 = arguments.length;
var i__5727__auto___12850 = (0);
while(true){
if((i__5727__auto___12850 < len__5726__auto___12849)){
args__5732__auto__.push((arguments[i__5727__auto___12850]));

var G__12851 = (i__5727__auto___12850 + (1));
i__5727__auto___12850 = G__12851;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq12618){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12618));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12853 = arguments.length;
var i__5727__auto___12854 = (0);
while(true){
if((i__5727__auto___12854 < len__5726__auto___12853)){
args__5732__auto__.push((arguments[i__5727__auto___12854]));

var G__12855 = (i__5727__auto___12854 + (1));
i__5727__auto___12854 = G__12855;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12633){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12633));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12857 = arguments.length;
var i__5727__auto___12858 = (0);
while(true){
if((i__5727__auto___12858 < len__5726__auto___12857)){
args__5732__auto__.push((arguments[i__5727__auto___12858]));

var G__12860 = (i__5727__auto___12858 + (1));
i__5727__auto___12858 = G__12860;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq12646){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12646));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12862 = arguments.length;
var i__5727__auto___12863 = (0);
while(true){
if((i__5727__auto___12863 < len__5726__auto___12862)){
args__5732__auto__.push((arguments[i__5727__auto___12863]));

var G__12864 = (i__5727__auto___12863 + (1));
i__5727__auto___12863 = G__12864;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq12656){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12656));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12866 = arguments.length;
var i__5727__auto___12867 = (0);
while(true){
if((i__5727__auto___12867 < len__5726__auto___12866)){
args__5732__auto__.push((arguments[i__5727__auto___12867]));

var G__12868 = (i__5727__auto___12867 + (1));
i__5727__auto___12867 = G__12868;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq12685){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12685));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12882 = arguments.length;
var i__5727__auto___12883 = (0);
while(true){
if((i__5727__auto___12883 < len__5726__auto___12882)){
args__5732__auto__.push((arguments[i__5727__auto___12883]));

var G__12884 = (i__5727__auto___12883 + (1));
i__5727__auto___12883 = G__12884;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12740){
var vec__12741 = p__12740;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__12704_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__12704_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq12708){
var G__12709 = cljs.core.first(seq12708);
var seq12708__$1 = cljs.core.next(seq12708);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12709,seq12708__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__12748 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__12749 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__12750 = (function (){var G__12752 = new cljs.core.Keyword(null,"li","li",723558921);
var G__12753 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__12754 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null, target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12752,G__12753,G__12754) : devtools.format.make_template_fn.call(null, G__12752,G__12753,G__12754));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12748,G__12749,G__12750) : devtools.format.make_template_fn.call(null, G__12748,G__12749,G__12750));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12892 = arguments.length;
var i__5727__auto___12893 = (0);
while(true){
if((i__5727__auto___12893 < len__5726__auto___12892)){
args__5732__auto__.push((arguments[i__5727__auto___12893]));

var G__12894 = (i__5727__auto___12893 + (1));
i__5727__auto___12893 = G__12894;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq12756){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12756));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12898 = arguments.length;
var i__5727__auto___12899 = (0);
while(true){
if((i__5727__auto___12899 < len__5726__auto___12898)){
args__5732__auto__.push((arguments[i__5727__auto___12899]));

var G__12900 = (i__5727__auto___12899 + (1));
i__5727__auto___12899 = G__12900;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12773){
var G__12774 = cljs.core.first(seq12773);
var seq12773__$1 = cljs.core.next(seq12773);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12774,seq12773__$1);
}));


//# sourceMappingURL=devtools.format.js.map
