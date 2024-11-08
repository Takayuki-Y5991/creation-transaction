goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19418 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19418(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19423 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19423(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18140 = coll;
var G__18141 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18140,G__18141) : shadow.dom.lazy_native_coll_seq.call(null, G__18140,G__18141));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18181 = arguments.length;
switch (G__18181) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18197 = arguments.length;
switch (G__18197) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18207 = arguments.length;
switch (G__18207) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18221 = arguments.length;
switch (G__18221) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18243 = arguments.length;
switch (G__18243) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18286 = arguments.length;
switch (G__18286) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e18319){if((e18319 instanceof Object)){
var e = e18319;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18319;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18333 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18334 = null;
var count__18335 = (0);
var i__18336 = (0);
while(true){
if((i__18336 < count__18335)){
var el = chunk__18334.cljs$core$IIndexed$_nth$arity$2(null, i__18336);
var handler_19481__$1 = ((function (seq__18333,chunk__18334,count__18335,i__18336,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18333,chunk__18334,count__18335,i__18336,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19481__$1);


var G__19484 = seq__18333;
var G__19485 = chunk__18334;
var G__19486 = count__18335;
var G__19487 = (i__18336 + (1));
seq__18333 = G__19484;
chunk__18334 = G__19485;
count__18335 = G__19486;
i__18336 = G__19487;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18333);
if(temp__5804__auto__){
var seq__18333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18333__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18333__$1);
var G__19490 = cljs.core.chunk_rest(seq__18333__$1);
var G__19491 = c__5525__auto__;
var G__19492 = cljs.core.count(c__5525__auto__);
var G__19493 = (0);
seq__18333 = G__19490;
chunk__18334 = G__19491;
count__18335 = G__19492;
i__18336 = G__19493;
continue;
} else {
var el = cljs.core.first(seq__18333__$1);
var handler_19495__$1 = ((function (seq__18333,chunk__18334,count__18335,i__18336,el,seq__18333__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18333,chunk__18334,count__18335,i__18336,el,seq__18333__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19495__$1);


var G__19497 = cljs.core.next(seq__18333__$1);
var G__19498 = null;
var G__19499 = (0);
var G__19500 = (0);
seq__18333 = G__19497;
chunk__18334 = G__19498;
count__18335 = G__19499;
i__18336 = G__19500;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18355 = arguments.length;
switch (G__18355) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18363 = cljs.core.seq(events);
var chunk__18364 = null;
var count__18365 = (0);
var i__18366 = (0);
while(true){
if((i__18366 < count__18365)){
var vec__18378 = chunk__18364.cljs$core$IIndexed$_nth$arity$2(null, i__18366);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18378,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19520 = seq__18363;
var G__19521 = chunk__18364;
var G__19522 = count__18365;
var G__19523 = (i__18366 + (1));
seq__18363 = G__19520;
chunk__18364 = G__19521;
count__18365 = G__19522;
i__18366 = G__19523;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18363);
if(temp__5804__auto__){
var seq__18363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18363__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18363__$1);
var G__19524 = cljs.core.chunk_rest(seq__18363__$1);
var G__19525 = c__5525__auto__;
var G__19526 = cljs.core.count(c__5525__auto__);
var G__19527 = (0);
seq__18363 = G__19524;
chunk__18364 = G__19525;
count__18365 = G__19526;
i__18366 = G__19527;
continue;
} else {
var vec__18385 = cljs.core.first(seq__18363__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18385,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19528 = cljs.core.next(seq__18363__$1);
var G__19529 = null;
var G__19530 = (0);
var G__19531 = (0);
seq__18363 = G__19528;
chunk__18364 = G__19529;
count__18365 = G__19530;
i__18366 = G__19531;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18400 = cljs.core.seq(styles);
var chunk__18401 = null;
var count__18402 = (0);
var i__18403 = (0);
while(true){
if((i__18403 < count__18402)){
var vec__18419 = chunk__18401.cljs$core$IIndexed$_nth$arity$2(null, i__18403);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19538 = seq__18400;
var G__19539 = chunk__18401;
var G__19540 = count__18402;
var G__19541 = (i__18403 + (1));
seq__18400 = G__19538;
chunk__18401 = G__19539;
count__18402 = G__19540;
i__18403 = G__19541;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18400);
if(temp__5804__auto__){
var seq__18400__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18400__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18400__$1);
var G__19543 = cljs.core.chunk_rest(seq__18400__$1);
var G__19544 = c__5525__auto__;
var G__19545 = cljs.core.count(c__5525__auto__);
var G__19546 = (0);
seq__18400 = G__19543;
chunk__18401 = G__19544;
count__18402 = G__19545;
i__18403 = G__19546;
continue;
} else {
var vec__18422 = cljs.core.first(seq__18400__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18422,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18422,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19550 = cljs.core.next(seq__18400__$1);
var G__19551 = null;
var G__19552 = (0);
var G__19553 = (0);
seq__18400 = G__19550;
chunk__18401 = G__19551;
count__18402 = G__19552;
i__18403 = G__19553;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18436_19555 = key;
var G__18436_19556__$1 = (((G__18436_19555 instanceof cljs.core.Keyword))?G__18436_19555.fqn:null);
switch (G__18436_19556__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19564 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_19564,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_19564,"aria-");
}
})())){
el.setAttribute(ks_19564,value);
} else {
(el[ks_19564] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18467){
var map__18480 = p__18467;
var map__18480__$1 = cljs.core.__destructure_map(map__18480);
var props = map__18480__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18480__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18488 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18499 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18499,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18499;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18504 = arguments.length;
switch (G__18504) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18515){
var vec__18517 = p__18515;
var seq__18518 = cljs.core.seq(vec__18517);
var first__18519 = cljs.core.first(seq__18518);
var seq__18518__$1 = cljs.core.next(seq__18518);
var nn = first__18519;
var first__18519__$1 = cljs.core.first(seq__18518__$1);
var seq__18518__$2 = cljs.core.next(seq__18518__$1);
var np = first__18519__$1;
var nc = seq__18518__$2;
var node = vec__18517;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18522 = nn;
var G__18523 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18522,G__18523) : create_fn.call(null, G__18522,G__18523));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18524 = nn;
var G__18525 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18524,G__18525) : create_fn.call(null, G__18524,G__18525));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18526 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18526,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18526,(1),null);
var seq__18529_19594 = cljs.core.seq(node_children);
var chunk__18530_19595 = null;
var count__18531_19596 = (0);
var i__18532_19597 = (0);
while(true){
if((i__18532_19597 < count__18531_19596)){
var child_struct_19600 = chunk__18530_19595.cljs$core$IIndexed$_nth$arity$2(null, i__18532_19597);
var children_19601 = shadow.dom.dom_node(child_struct_19600);
if(cljs.core.seq_QMARK_(children_19601)){
var seq__18557_19603 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19601));
var chunk__18559_19604 = null;
var count__18560_19605 = (0);
var i__18561_19606 = (0);
while(true){
if((i__18561_19606 < count__18560_19605)){
var child_19609 = chunk__18559_19604.cljs$core$IIndexed$_nth$arity$2(null, i__18561_19606);
if(cljs.core.truth_(child_19609)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19609);


var G__19612 = seq__18557_19603;
var G__19613 = chunk__18559_19604;
var G__19614 = count__18560_19605;
var G__19615 = (i__18561_19606 + (1));
seq__18557_19603 = G__19612;
chunk__18559_19604 = G__19613;
count__18560_19605 = G__19614;
i__18561_19606 = G__19615;
continue;
} else {
var G__19620 = seq__18557_19603;
var G__19621 = chunk__18559_19604;
var G__19622 = count__18560_19605;
var G__19623 = (i__18561_19606 + (1));
seq__18557_19603 = G__19620;
chunk__18559_19604 = G__19621;
count__18560_19605 = G__19622;
i__18561_19606 = G__19623;
continue;
}
} else {
var temp__5804__auto___19624 = cljs.core.seq(seq__18557_19603);
if(temp__5804__auto___19624){
var seq__18557_19628__$1 = temp__5804__auto___19624;
if(cljs.core.chunked_seq_QMARK_(seq__18557_19628__$1)){
var c__5525__auto___19631 = cljs.core.chunk_first(seq__18557_19628__$1);
var G__19635 = cljs.core.chunk_rest(seq__18557_19628__$1);
var G__19636 = c__5525__auto___19631;
var G__19637 = cljs.core.count(c__5525__auto___19631);
var G__19638 = (0);
seq__18557_19603 = G__19635;
chunk__18559_19604 = G__19636;
count__18560_19605 = G__19637;
i__18561_19606 = G__19638;
continue;
} else {
var child_19639 = cljs.core.first(seq__18557_19628__$1);
if(cljs.core.truth_(child_19639)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19639);


var G__19640 = cljs.core.next(seq__18557_19628__$1);
var G__19641 = null;
var G__19642 = (0);
var G__19643 = (0);
seq__18557_19603 = G__19640;
chunk__18559_19604 = G__19641;
count__18560_19605 = G__19642;
i__18561_19606 = G__19643;
continue;
} else {
var G__19644 = cljs.core.next(seq__18557_19628__$1);
var G__19645 = null;
var G__19646 = (0);
var G__19647 = (0);
seq__18557_19603 = G__19644;
chunk__18559_19604 = G__19645;
count__18560_19605 = G__19646;
i__18561_19606 = G__19647;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19601);
}


var G__19648 = seq__18529_19594;
var G__19649 = chunk__18530_19595;
var G__19650 = count__18531_19596;
var G__19651 = (i__18532_19597 + (1));
seq__18529_19594 = G__19648;
chunk__18530_19595 = G__19649;
count__18531_19596 = G__19650;
i__18532_19597 = G__19651;
continue;
} else {
var temp__5804__auto___19652 = cljs.core.seq(seq__18529_19594);
if(temp__5804__auto___19652){
var seq__18529_19653__$1 = temp__5804__auto___19652;
if(cljs.core.chunked_seq_QMARK_(seq__18529_19653__$1)){
var c__5525__auto___19656 = cljs.core.chunk_first(seq__18529_19653__$1);
var G__19657 = cljs.core.chunk_rest(seq__18529_19653__$1);
var G__19658 = c__5525__auto___19656;
var G__19659 = cljs.core.count(c__5525__auto___19656);
var G__19660 = (0);
seq__18529_19594 = G__19657;
chunk__18530_19595 = G__19658;
count__18531_19596 = G__19659;
i__18532_19597 = G__19660;
continue;
} else {
var child_struct_19661 = cljs.core.first(seq__18529_19653__$1);
var children_19662 = shadow.dom.dom_node(child_struct_19661);
if(cljs.core.seq_QMARK_(children_19662)){
var seq__18564_19663 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19662));
var chunk__18566_19664 = null;
var count__18567_19665 = (0);
var i__18568_19666 = (0);
while(true){
if((i__18568_19666 < count__18567_19665)){
var child_19667 = chunk__18566_19664.cljs$core$IIndexed$_nth$arity$2(null, i__18568_19666);
if(cljs.core.truth_(child_19667)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19667);


var G__19669 = seq__18564_19663;
var G__19670 = chunk__18566_19664;
var G__19671 = count__18567_19665;
var G__19672 = (i__18568_19666 + (1));
seq__18564_19663 = G__19669;
chunk__18566_19664 = G__19670;
count__18567_19665 = G__19671;
i__18568_19666 = G__19672;
continue;
} else {
var G__19673 = seq__18564_19663;
var G__19674 = chunk__18566_19664;
var G__19675 = count__18567_19665;
var G__19676 = (i__18568_19666 + (1));
seq__18564_19663 = G__19673;
chunk__18566_19664 = G__19674;
count__18567_19665 = G__19675;
i__18568_19666 = G__19676;
continue;
}
} else {
var temp__5804__auto___19677__$1 = cljs.core.seq(seq__18564_19663);
if(temp__5804__auto___19677__$1){
var seq__18564_19678__$1 = temp__5804__auto___19677__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18564_19678__$1)){
var c__5525__auto___19680 = cljs.core.chunk_first(seq__18564_19678__$1);
var G__19681 = cljs.core.chunk_rest(seq__18564_19678__$1);
var G__19682 = c__5525__auto___19680;
var G__19683 = cljs.core.count(c__5525__auto___19680);
var G__19684 = (0);
seq__18564_19663 = G__19681;
chunk__18566_19664 = G__19682;
count__18567_19665 = G__19683;
i__18568_19666 = G__19684;
continue;
} else {
var child_19685 = cljs.core.first(seq__18564_19678__$1);
if(cljs.core.truth_(child_19685)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19685);


var G__19686 = cljs.core.next(seq__18564_19678__$1);
var G__19687 = null;
var G__19688 = (0);
var G__19689 = (0);
seq__18564_19663 = G__19686;
chunk__18566_19664 = G__19687;
count__18567_19665 = G__19688;
i__18568_19666 = G__19689;
continue;
} else {
var G__19690 = cljs.core.next(seq__18564_19678__$1);
var G__19691 = null;
var G__19692 = (0);
var G__19693 = (0);
seq__18564_19663 = G__19690;
chunk__18566_19664 = G__19691;
count__18567_19665 = G__19692;
i__18568_19666 = G__19693;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19662);
}


var G__19695 = cljs.core.next(seq__18529_19653__$1);
var G__19696 = null;
var G__19697 = (0);
var G__19698 = (0);
seq__18529_19594 = G__19695;
chunk__18530_19595 = G__19696;
count__18531_19596 = G__19697;
i__18532_19597 = G__19698;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18581 = cljs.core.seq(node);
var chunk__18582 = null;
var count__18583 = (0);
var i__18584 = (0);
while(true){
if((i__18584 < count__18583)){
var n = chunk__18582.cljs$core$IIndexed$_nth$arity$2(null, i__18584);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19705 = seq__18581;
var G__19706 = chunk__18582;
var G__19707 = count__18583;
var G__19708 = (i__18584 + (1));
seq__18581 = G__19705;
chunk__18582 = G__19706;
count__18583 = G__19707;
i__18584 = G__19708;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18581);
if(temp__5804__auto__){
var seq__18581__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18581__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18581__$1);
var G__19709 = cljs.core.chunk_rest(seq__18581__$1);
var G__19710 = c__5525__auto__;
var G__19711 = cljs.core.count(c__5525__auto__);
var G__19712 = (0);
seq__18581 = G__19709;
chunk__18582 = G__19710;
count__18583 = G__19711;
i__18584 = G__19712;
continue;
} else {
var n = cljs.core.first(seq__18581__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19713 = cljs.core.next(seq__18581__$1);
var G__19714 = null;
var G__19715 = (0);
var G__19716 = (0);
seq__18581 = G__19713;
chunk__18582 = G__19714;
count__18583 = G__19715;
i__18584 = G__19716;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18589 = arguments.length;
switch (G__18589) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18591 = arguments.length;
switch (G__18591) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18608 = arguments.length;
switch (G__18608) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19746 = arguments.length;
var i__5727__auto___19747 = (0);
while(true){
if((i__5727__auto___19747 < len__5726__auto___19746)){
args__5732__auto__.push((arguments[i__5727__auto___19747]));

var G__19753 = (i__5727__auto___19747 + (1));
i__5727__auto___19747 = G__19753;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18667_19756 = cljs.core.seq(nodes);
var chunk__18668_19757 = null;
var count__18669_19758 = (0);
var i__18670_19759 = (0);
while(true){
if((i__18670_19759 < count__18669_19758)){
var node_19761 = chunk__18668_19757.cljs$core$IIndexed$_nth$arity$2(null, i__18670_19759);
fragment.appendChild(shadow.dom._to_dom(node_19761));


var G__19762 = seq__18667_19756;
var G__19763 = chunk__18668_19757;
var G__19764 = count__18669_19758;
var G__19765 = (i__18670_19759 + (1));
seq__18667_19756 = G__19762;
chunk__18668_19757 = G__19763;
count__18669_19758 = G__19764;
i__18670_19759 = G__19765;
continue;
} else {
var temp__5804__auto___19766 = cljs.core.seq(seq__18667_19756);
if(temp__5804__auto___19766){
var seq__18667_19767__$1 = temp__5804__auto___19766;
if(cljs.core.chunked_seq_QMARK_(seq__18667_19767__$1)){
var c__5525__auto___19768 = cljs.core.chunk_first(seq__18667_19767__$1);
var G__19769 = cljs.core.chunk_rest(seq__18667_19767__$1);
var G__19770 = c__5525__auto___19768;
var G__19771 = cljs.core.count(c__5525__auto___19768);
var G__19772 = (0);
seq__18667_19756 = G__19769;
chunk__18668_19757 = G__19770;
count__18669_19758 = G__19771;
i__18670_19759 = G__19772;
continue;
} else {
var node_19773 = cljs.core.first(seq__18667_19767__$1);
fragment.appendChild(shadow.dom._to_dom(node_19773));


var G__19774 = cljs.core.next(seq__18667_19767__$1);
var G__19775 = null;
var G__19776 = (0);
var G__19777 = (0);
seq__18667_19756 = G__19774;
chunk__18668_19757 = G__19775;
count__18669_19758 = G__19776;
i__18670_19759 = G__19777;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18635){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18635));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18684_19778 = cljs.core.seq(scripts);
var chunk__18685_19779 = null;
var count__18686_19780 = (0);
var i__18687_19781 = (0);
while(true){
if((i__18687_19781 < count__18686_19780)){
var vec__18711_19783 = chunk__18685_19779.cljs$core$IIndexed$_nth$arity$2(null, i__18687_19781);
var script_tag_19784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711_19783,(0),null);
var script_body_19785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711_19783,(1),null);
eval(script_body_19785);


var G__19787 = seq__18684_19778;
var G__19788 = chunk__18685_19779;
var G__19789 = count__18686_19780;
var G__19790 = (i__18687_19781 + (1));
seq__18684_19778 = G__19787;
chunk__18685_19779 = G__19788;
count__18686_19780 = G__19789;
i__18687_19781 = G__19790;
continue;
} else {
var temp__5804__auto___19791 = cljs.core.seq(seq__18684_19778);
if(temp__5804__auto___19791){
var seq__18684_19793__$1 = temp__5804__auto___19791;
if(cljs.core.chunked_seq_QMARK_(seq__18684_19793__$1)){
var c__5525__auto___19795 = cljs.core.chunk_first(seq__18684_19793__$1);
var G__19796 = cljs.core.chunk_rest(seq__18684_19793__$1);
var G__19797 = c__5525__auto___19795;
var G__19798 = cljs.core.count(c__5525__auto___19795);
var G__19799 = (0);
seq__18684_19778 = G__19796;
chunk__18685_19779 = G__19797;
count__18686_19780 = G__19798;
i__18687_19781 = G__19799;
continue;
} else {
var vec__18725_19800 = cljs.core.first(seq__18684_19793__$1);
var script_tag_19801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18725_19800,(0),null);
var script_body_19802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18725_19800,(1),null);
eval(script_body_19802);


var G__19804 = cljs.core.next(seq__18684_19793__$1);
var G__19805 = null;
var G__19806 = (0);
var G__19807 = (0);
seq__18684_19778 = G__19804;
chunk__18685_19779 = G__19805;
count__18686_19780 = G__19806;
i__18687_19781 = G__19807;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18732){
var vec__18733 = p__18732;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18733,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18733,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18740 = arguments.length;
switch (G__18740) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18749 = cljs.core.seq(style_keys);
var chunk__18750 = null;
var count__18751 = (0);
var i__18752 = (0);
while(true){
if((i__18752 < count__18751)){
var it = chunk__18750.cljs$core$IIndexed$_nth$arity$2(null, i__18752);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19818 = seq__18749;
var G__19819 = chunk__18750;
var G__19820 = count__18751;
var G__19821 = (i__18752 + (1));
seq__18749 = G__19818;
chunk__18750 = G__19819;
count__18751 = G__19820;
i__18752 = G__19821;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18749);
if(temp__5804__auto__){
var seq__18749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18749__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18749__$1);
var G__19826 = cljs.core.chunk_rest(seq__18749__$1);
var G__19827 = c__5525__auto__;
var G__19828 = cljs.core.count(c__5525__auto__);
var G__19829 = (0);
seq__18749 = G__19826;
chunk__18750 = G__19827;
count__18751 = G__19828;
i__18752 = G__19829;
continue;
} else {
var it = cljs.core.first(seq__18749__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19830 = cljs.core.next(seq__18749__$1);
var G__19831 = null;
var G__19832 = (0);
var G__19833 = (0);
seq__18749 = G__19830;
chunk__18750 = G__19831;
count__18751 = G__19832;
i__18752 = G__19833;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18759,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18768 = k18759;
var G__18768__$1 = (((G__18768 instanceof cljs.core.Keyword))?G__18768.fqn:null);
switch (G__18768__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18759,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18777){
var vec__18779 = p__18777;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18779,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18779,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18758){
var self__ = this;
var G__18758__$1 = this;
return (new cljs.core.RecordIter((0),G__18758__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18760,other18761){
var self__ = this;
var this18760__$1 = this;
return (((!((other18761 == null)))) && ((((this18760__$1.constructor === other18761.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18760__$1.x,other18761.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18760__$1.y,other18761.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18760__$1.__extmap,other18761.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18759){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18794 = k18759;
var G__18794__$1 = (((G__18794 instanceof cljs.core.Keyword))?G__18794.fqn:null);
switch (G__18794__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18759);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18758){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18801 = cljs.core.keyword_identical_QMARK_;
var expr__18802 = k__5309__auto__;
if(cljs.core.truth_((pred__18801.cljs$core$IFn$_invoke$arity$2 ? pred__18801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18802) : pred__18801.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18802)))){
return (new shadow.dom.Coordinate(G__18758,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18801.cljs$core$IFn$_invoke$arity$2 ? pred__18801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18802) : pred__18801.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18802)))){
return (new shadow.dom.Coordinate(self__.x,G__18758,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18758),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18758){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18758,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18762){
var extmap__5342__auto__ = (function (){var G__18809 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18762,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18762)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18809);
} else {
return G__18809;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18762),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18762),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18823,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18839 = k18823;
var G__18839__$1 = (((G__18839 instanceof cljs.core.Keyword))?G__18839.fqn:null);
switch (G__18839__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18823,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18849){
var vec__18850 = p__18849;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18822){
var self__ = this;
var G__18822__$1 = this;
return (new cljs.core.RecordIter((0),G__18822__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18824,other18825){
var self__ = this;
var this18824__$1 = this;
return (((!((other18825 == null)))) && ((((this18824__$1.constructor === other18825.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18824__$1.w,other18825.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18824__$1.h,other18825.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18824__$1.__extmap,other18825.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18823){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18902 = k18823;
var G__18902__$1 = (((G__18902 instanceof cljs.core.Keyword))?G__18902.fqn:null);
switch (G__18902__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18823);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18822){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18912 = cljs.core.keyword_identical_QMARK_;
var expr__18913 = k__5309__auto__;
if(cljs.core.truth_((pred__18912.cljs$core$IFn$_invoke$arity$2 ? pred__18912.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18913) : pred__18912.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18913)))){
return (new shadow.dom.Size(G__18822,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18912.cljs$core$IFn$_invoke$arity$2 ? pred__18912.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18913) : pred__18912.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18913)))){
return (new shadow.dom.Size(self__.w,G__18822,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18822),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18822){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18822,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18826){
var extmap__5342__auto__ = (function (){var G__18964 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18826,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18964);
} else {
return G__18964;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18826),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18826),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19929 = (i + (1));
var G__19930 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19929;
ret = G__19930;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19065){
var vec__19066 = p__19065;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19066,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19079 = arguments.length;
switch (G__19079) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19949 = ps;
var G__19950 = (i + (1));
el__$1 = G__19949;
i = G__19950;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19168 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19174_19956 = cljs.core.seq(props);
var chunk__19175_19957 = null;
var count__19176_19958 = (0);
var i__19177_19959 = (0);
while(true){
if((i__19177_19959 < count__19176_19958)){
var vec__19200_19963 = chunk__19175_19957.cljs$core$IIndexed$_nth$arity$2(null, i__19177_19959);
var k_19964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19200_19963,(0),null);
var v_19965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19200_19963,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19964);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19964),v_19965);


var G__19970 = seq__19174_19956;
var G__19971 = chunk__19175_19957;
var G__19972 = count__19176_19958;
var G__19973 = (i__19177_19959 + (1));
seq__19174_19956 = G__19970;
chunk__19175_19957 = G__19971;
count__19176_19958 = G__19972;
i__19177_19959 = G__19973;
continue;
} else {
var temp__5804__auto___19974 = cljs.core.seq(seq__19174_19956);
if(temp__5804__auto___19974){
var seq__19174_19976__$1 = temp__5804__auto___19974;
if(cljs.core.chunked_seq_QMARK_(seq__19174_19976__$1)){
var c__5525__auto___19977 = cljs.core.chunk_first(seq__19174_19976__$1);
var G__19978 = cljs.core.chunk_rest(seq__19174_19976__$1);
var G__19979 = c__5525__auto___19977;
var G__19980 = cljs.core.count(c__5525__auto___19977);
var G__19981 = (0);
seq__19174_19956 = G__19978;
chunk__19175_19957 = G__19979;
count__19176_19958 = G__19980;
i__19177_19959 = G__19981;
continue;
} else {
var vec__19209_19982 = cljs.core.first(seq__19174_19976__$1);
var k_19983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209_19982,(0),null);
var v_19984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209_19982,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19983);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19983),v_19984);


var G__19985 = cljs.core.next(seq__19174_19976__$1);
var G__19986 = null;
var G__19987 = (0);
var G__19988 = (0);
seq__19174_19956 = G__19985;
chunk__19175_19957 = G__19986;
count__19176_19958 = G__19987;
i__19177_19959 = G__19988;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19217 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(1),null);
var seq__19220_19994 = cljs.core.seq(node_children);
var chunk__19222_19995 = null;
var count__19223_19996 = (0);
var i__19224_19997 = (0);
while(true){
if((i__19224_19997 < count__19223_19996)){
var child_struct_19999 = chunk__19222_19995.cljs$core$IIndexed$_nth$arity$2(null, i__19224_19997);
if((!((child_struct_19999 == null)))){
if(typeof child_struct_19999 === 'string'){
var text_20000 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20000),child_struct_19999].join(''));
} else {
var children_20001 = shadow.dom.svg_node(child_struct_19999);
if(cljs.core.seq_QMARK_(children_20001)){
var seq__19287_20002 = cljs.core.seq(children_20001);
var chunk__19289_20003 = null;
var count__19290_20004 = (0);
var i__19291_20005 = (0);
while(true){
if((i__19291_20005 < count__19290_20004)){
var child_20012 = chunk__19289_20003.cljs$core$IIndexed$_nth$arity$2(null, i__19291_20005);
if(cljs.core.truth_(child_20012)){
node.appendChild(child_20012);


var G__20013 = seq__19287_20002;
var G__20014 = chunk__19289_20003;
var G__20015 = count__19290_20004;
var G__20016 = (i__19291_20005 + (1));
seq__19287_20002 = G__20013;
chunk__19289_20003 = G__20014;
count__19290_20004 = G__20015;
i__19291_20005 = G__20016;
continue;
} else {
var G__20017 = seq__19287_20002;
var G__20018 = chunk__19289_20003;
var G__20019 = count__19290_20004;
var G__20020 = (i__19291_20005 + (1));
seq__19287_20002 = G__20017;
chunk__19289_20003 = G__20018;
count__19290_20004 = G__20019;
i__19291_20005 = G__20020;
continue;
}
} else {
var temp__5804__auto___20021 = cljs.core.seq(seq__19287_20002);
if(temp__5804__auto___20021){
var seq__19287_20022__$1 = temp__5804__auto___20021;
if(cljs.core.chunked_seq_QMARK_(seq__19287_20022__$1)){
var c__5525__auto___20023 = cljs.core.chunk_first(seq__19287_20022__$1);
var G__20024 = cljs.core.chunk_rest(seq__19287_20022__$1);
var G__20025 = c__5525__auto___20023;
var G__20026 = cljs.core.count(c__5525__auto___20023);
var G__20027 = (0);
seq__19287_20002 = G__20024;
chunk__19289_20003 = G__20025;
count__19290_20004 = G__20026;
i__19291_20005 = G__20027;
continue;
} else {
var child_20028 = cljs.core.first(seq__19287_20022__$1);
if(cljs.core.truth_(child_20028)){
node.appendChild(child_20028);


var G__20029 = cljs.core.next(seq__19287_20022__$1);
var G__20030 = null;
var G__20031 = (0);
var G__20032 = (0);
seq__19287_20002 = G__20029;
chunk__19289_20003 = G__20030;
count__19290_20004 = G__20031;
i__19291_20005 = G__20032;
continue;
} else {
var G__20033 = cljs.core.next(seq__19287_20022__$1);
var G__20034 = null;
var G__20035 = (0);
var G__20036 = (0);
seq__19287_20002 = G__20033;
chunk__19289_20003 = G__20034;
count__19290_20004 = G__20035;
i__19291_20005 = G__20036;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20001);
}
}


var G__20039 = seq__19220_19994;
var G__20040 = chunk__19222_19995;
var G__20041 = count__19223_19996;
var G__20042 = (i__19224_19997 + (1));
seq__19220_19994 = G__20039;
chunk__19222_19995 = G__20040;
count__19223_19996 = G__20041;
i__19224_19997 = G__20042;
continue;
} else {
var G__20043 = seq__19220_19994;
var G__20044 = chunk__19222_19995;
var G__20045 = count__19223_19996;
var G__20046 = (i__19224_19997 + (1));
seq__19220_19994 = G__20043;
chunk__19222_19995 = G__20044;
count__19223_19996 = G__20045;
i__19224_19997 = G__20046;
continue;
}
} else {
var temp__5804__auto___20047 = cljs.core.seq(seq__19220_19994);
if(temp__5804__auto___20047){
var seq__19220_20048__$1 = temp__5804__auto___20047;
if(cljs.core.chunked_seq_QMARK_(seq__19220_20048__$1)){
var c__5525__auto___20049 = cljs.core.chunk_first(seq__19220_20048__$1);
var G__20050 = cljs.core.chunk_rest(seq__19220_20048__$1);
var G__20051 = c__5525__auto___20049;
var G__20052 = cljs.core.count(c__5525__auto___20049);
var G__20053 = (0);
seq__19220_19994 = G__20050;
chunk__19222_19995 = G__20051;
count__19223_19996 = G__20052;
i__19224_19997 = G__20053;
continue;
} else {
var child_struct_20054 = cljs.core.first(seq__19220_20048__$1);
if((!((child_struct_20054 == null)))){
if(typeof child_struct_20054 === 'string'){
var text_20055 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20055),child_struct_20054].join(''));
} else {
var children_20056 = shadow.dom.svg_node(child_struct_20054);
if(cljs.core.seq_QMARK_(children_20056)){
var seq__19319_20057 = cljs.core.seq(children_20056);
var chunk__19321_20058 = null;
var count__19322_20059 = (0);
var i__19323_20060 = (0);
while(true){
if((i__19323_20060 < count__19322_20059)){
var child_20061 = chunk__19321_20058.cljs$core$IIndexed$_nth$arity$2(null, i__19323_20060);
if(cljs.core.truth_(child_20061)){
node.appendChild(child_20061);


var G__20063 = seq__19319_20057;
var G__20064 = chunk__19321_20058;
var G__20065 = count__19322_20059;
var G__20066 = (i__19323_20060 + (1));
seq__19319_20057 = G__20063;
chunk__19321_20058 = G__20064;
count__19322_20059 = G__20065;
i__19323_20060 = G__20066;
continue;
} else {
var G__20067 = seq__19319_20057;
var G__20068 = chunk__19321_20058;
var G__20069 = count__19322_20059;
var G__20070 = (i__19323_20060 + (1));
seq__19319_20057 = G__20067;
chunk__19321_20058 = G__20068;
count__19322_20059 = G__20069;
i__19323_20060 = G__20070;
continue;
}
} else {
var temp__5804__auto___20071__$1 = cljs.core.seq(seq__19319_20057);
if(temp__5804__auto___20071__$1){
var seq__19319_20072__$1 = temp__5804__auto___20071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19319_20072__$1)){
var c__5525__auto___20074 = cljs.core.chunk_first(seq__19319_20072__$1);
var G__20075 = cljs.core.chunk_rest(seq__19319_20072__$1);
var G__20076 = c__5525__auto___20074;
var G__20077 = cljs.core.count(c__5525__auto___20074);
var G__20078 = (0);
seq__19319_20057 = G__20075;
chunk__19321_20058 = G__20076;
count__19322_20059 = G__20077;
i__19323_20060 = G__20078;
continue;
} else {
var child_20079 = cljs.core.first(seq__19319_20072__$1);
if(cljs.core.truth_(child_20079)){
node.appendChild(child_20079);


var G__20080 = cljs.core.next(seq__19319_20072__$1);
var G__20081 = null;
var G__20082 = (0);
var G__20083 = (0);
seq__19319_20057 = G__20080;
chunk__19321_20058 = G__20081;
count__19322_20059 = G__20082;
i__19323_20060 = G__20083;
continue;
} else {
var G__20084 = cljs.core.next(seq__19319_20072__$1);
var G__20085 = null;
var G__20086 = (0);
var G__20087 = (0);
seq__19319_20057 = G__20084;
chunk__19321_20058 = G__20085;
count__19322_20059 = G__20086;
i__19323_20060 = G__20087;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20056);
}
}


var G__20088 = cljs.core.next(seq__19220_20048__$1);
var G__20089 = null;
var G__20090 = (0);
var G__20091 = (0);
seq__19220_19994 = G__20088;
chunk__19222_19995 = G__20089;
count__19223_19996 = G__20090;
i__19224_19997 = G__20091;
continue;
} else {
var G__20092 = cljs.core.next(seq__19220_20048__$1);
var G__20093 = null;
var G__20094 = (0);
var G__20095 = (0);
seq__19220_19994 = G__20092;
chunk__19222_19995 = G__20093;
count__19223_19996 = G__20094;
i__19224_19997 = G__20095;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20102 = arguments.length;
var i__5727__auto___20104 = (0);
while(true){
if((i__5727__auto___20104 < len__5726__auto___20102)){
args__5732__auto__.push((arguments[i__5727__auto___20104]));

var G__20105 = (i__5727__auto___20104 + (1));
i__5727__auto___20104 = G__20105;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19392){
var G__19393 = cljs.core.first(seq19392);
var seq19392__$1 = cljs.core.next(seq19392);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19393,seq19392__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
