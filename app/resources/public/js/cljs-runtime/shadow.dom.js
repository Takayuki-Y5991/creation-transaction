goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_14443 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_14443(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_14452 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_14452(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13258 = coll;
var G__13259 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13258,G__13259) : shadow.dom.lazy_native_coll_seq.call(null, G__13258,G__13259));
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
var G__13291 = arguments.length;
switch (G__13291) {
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
var G__13305 = arguments.length;
switch (G__13305) {
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
var G__13330 = arguments.length;
switch (G__13330) {
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
var G__13337 = arguments.length;
switch (G__13337) {
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
var G__13346 = arguments.length;
switch (G__13346) {
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
var G__13365 = arguments.length;
switch (G__13365) {
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
}catch (e13373){if((e13373 instanceof Object)){
var e = e13373;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13373;

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
var seq__13378 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13379 = null;
var count__13380 = (0);
var i__13381 = (0);
while(true){
if((i__13381 < count__13380)){
var el = chunk__13379.cljs$core$IIndexed$_nth$arity$2(null, i__13381);
var handler_14547__$1 = ((function (seq__13378,chunk__13379,count__13380,i__13381,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13378,chunk__13379,count__13380,i__13381,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14547__$1);


var G__14551 = seq__13378;
var G__14552 = chunk__13379;
var G__14553 = count__13380;
var G__14554 = (i__13381 + (1));
seq__13378 = G__14551;
chunk__13379 = G__14552;
count__13380 = G__14553;
i__13381 = G__14554;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13378);
if(temp__5804__auto__){
var seq__13378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13378__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13378__$1);
var G__14559 = cljs.core.chunk_rest(seq__13378__$1);
var G__14560 = c__5525__auto__;
var G__14561 = cljs.core.count(c__5525__auto__);
var G__14562 = (0);
seq__13378 = G__14559;
chunk__13379 = G__14560;
count__13380 = G__14561;
i__13381 = G__14562;
continue;
} else {
var el = cljs.core.first(seq__13378__$1);
var handler_14564__$1 = ((function (seq__13378,chunk__13379,count__13380,i__13381,el,seq__13378__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13378,chunk__13379,count__13380,i__13381,el,seq__13378__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14564__$1);


var G__14567 = cljs.core.next(seq__13378__$1);
var G__14568 = null;
var G__14569 = (0);
var G__14570 = (0);
seq__13378 = G__14567;
chunk__13379 = G__14568;
count__13380 = G__14569;
i__13381 = G__14570;
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
var G__13386 = arguments.length;
switch (G__13386) {
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
var seq__13395 = cljs.core.seq(events);
var chunk__13396 = null;
var count__13397 = (0);
var i__13398 = (0);
while(true){
if((i__13398 < count__13397)){
var vec__13411 = chunk__13396.cljs$core$IIndexed$_nth$arity$2(null, i__13398);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13411,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14603 = seq__13395;
var G__14604 = chunk__13396;
var G__14605 = count__13397;
var G__14606 = (i__13398 + (1));
seq__13395 = G__14603;
chunk__13396 = G__14604;
count__13397 = G__14605;
i__13398 = G__14606;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13395);
if(temp__5804__auto__){
var seq__13395__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13395__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13395__$1);
var G__14609 = cljs.core.chunk_rest(seq__13395__$1);
var G__14610 = c__5525__auto__;
var G__14611 = cljs.core.count(c__5525__auto__);
var G__14612 = (0);
seq__13395 = G__14609;
chunk__13396 = G__14610;
count__13397 = G__14611;
i__13398 = G__14612;
continue;
} else {
var vec__13414 = cljs.core.first(seq__13395__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13414,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14614 = cljs.core.next(seq__13395__$1);
var G__14615 = null;
var G__14616 = (0);
var G__14617 = (0);
seq__13395 = G__14614;
chunk__13396 = G__14615;
count__13397 = G__14616;
i__13398 = G__14617;
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
var seq__13418 = cljs.core.seq(styles);
var chunk__13419 = null;
var count__13420 = (0);
var i__13421 = (0);
while(true){
if((i__13421 < count__13420)){
var vec__13430 = chunk__13419.cljs$core$IIndexed$_nth$arity$2(null, i__13421);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__14621 = seq__13418;
var G__14622 = chunk__13419;
var G__14623 = count__13420;
var G__14624 = (i__13421 + (1));
seq__13418 = G__14621;
chunk__13419 = G__14622;
count__13420 = G__14623;
i__13421 = G__14624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13418);
if(temp__5804__auto__){
var seq__13418__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13418__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13418__$1);
var G__14630 = cljs.core.chunk_rest(seq__13418__$1);
var G__14631 = c__5525__auto__;
var G__14632 = cljs.core.count(c__5525__auto__);
var G__14633 = (0);
seq__13418 = G__14630;
chunk__13419 = G__14631;
count__13420 = G__14632;
i__13421 = G__14633;
continue;
} else {
var vec__13437 = cljs.core.first(seq__13418__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13437,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__14637 = cljs.core.next(seq__13418__$1);
var G__14638 = null;
var G__14639 = (0);
var G__14640 = (0);
seq__13418 = G__14637;
chunk__13419 = G__14638;
count__13420 = G__14639;
i__13421 = G__14640;
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
var G__13445_14641 = key;
var G__13445_14642__$1 = (((G__13445_14641 instanceof cljs.core.Keyword))?G__13445_14641.fqn:null);
switch (G__13445_14642__$1) {
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
var ks_14659 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_14659,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_14659,"aria-");
}
})())){
el.setAttribute(ks_14659,value);
} else {
(el[ks_14659] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13476){
var map__13479 = p__13476;
var map__13479__$1 = cljs.core.__destructure_map(map__13479);
var props = map__13479__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13479__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13481 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13485 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13485,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13485;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13490 = arguments.length;
switch (G__13490) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13501){
var vec__13502 = p__13501;
var seq__13503 = cljs.core.seq(vec__13502);
var first__13504 = cljs.core.first(seq__13503);
var seq__13503__$1 = cljs.core.next(seq__13503);
var nn = first__13504;
var first__13504__$1 = cljs.core.first(seq__13503__$1);
var seq__13503__$2 = cljs.core.next(seq__13503__$1);
var np = first__13504__$1;
var nc = seq__13503__$2;
var node = vec__13502;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13508 = nn;
var G__13509 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13508,G__13509) : create_fn.call(null, G__13508,G__13509));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13510 = nn;
var G__13511 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13510,G__13511) : create_fn.call(null, G__13510,G__13511));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13514 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13514,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13514,(1),null);
var seq__13517_14700 = cljs.core.seq(node_children);
var chunk__13518_14701 = null;
var count__13519_14702 = (0);
var i__13520_14703 = (0);
while(true){
if((i__13520_14703 < count__13519_14702)){
var child_struct_14708 = chunk__13518_14701.cljs$core$IIndexed$_nth$arity$2(null, i__13520_14703);
var children_14709 = shadow.dom.dom_node(child_struct_14708);
if(cljs.core.seq_QMARK_(children_14709)){
var seq__13557_14710 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_14709));
var chunk__13559_14711 = null;
var count__13560_14712 = (0);
var i__13561_14713 = (0);
while(true){
if((i__13561_14713 < count__13560_14712)){
var child_14719 = chunk__13559_14711.cljs$core$IIndexed$_nth$arity$2(null, i__13561_14713);
if(cljs.core.truth_(child_14719)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14719);


var G__14724 = seq__13557_14710;
var G__14725 = chunk__13559_14711;
var G__14726 = count__13560_14712;
var G__14727 = (i__13561_14713 + (1));
seq__13557_14710 = G__14724;
chunk__13559_14711 = G__14725;
count__13560_14712 = G__14726;
i__13561_14713 = G__14727;
continue;
} else {
var G__14729 = seq__13557_14710;
var G__14730 = chunk__13559_14711;
var G__14731 = count__13560_14712;
var G__14732 = (i__13561_14713 + (1));
seq__13557_14710 = G__14729;
chunk__13559_14711 = G__14730;
count__13560_14712 = G__14731;
i__13561_14713 = G__14732;
continue;
}
} else {
var temp__5804__auto___14733 = cljs.core.seq(seq__13557_14710);
if(temp__5804__auto___14733){
var seq__13557_14735__$1 = temp__5804__auto___14733;
if(cljs.core.chunked_seq_QMARK_(seq__13557_14735__$1)){
var c__5525__auto___14736 = cljs.core.chunk_first(seq__13557_14735__$1);
var G__14737 = cljs.core.chunk_rest(seq__13557_14735__$1);
var G__14738 = c__5525__auto___14736;
var G__14739 = cljs.core.count(c__5525__auto___14736);
var G__14740 = (0);
seq__13557_14710 = G__14737;
chunk__13559_14711 = G__14738;
count__13560_14712 = G__14739;
i__13561_14713 = G__14740;
continue;
} else {
var child_14741 = cljs.core.first(seq__13557_14735__$1);
if(cljs.core.truth_(child_14741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14741);


var G__14743 = cljs.core.next(seq__13557_14735__$1);
var G__14744 = null;
var G__14745 = (0);
var G__14746 = (0);
seq__13557_14710 = G__14743;
chunk__13559_14711 = G__14744;
count__13560_14712 = G__14745;
i__13561_14713 = G__14746;
continue;
} else {
var G__14748 = cljs.core.next(seq__13557_14735__$1);
var G__14749 = null;
var G__14750 = (0);
var G__14751 = (0);
seq__13557_14710 = G__14748;
chunk__13559_14711 = G__14749;
count__13560_14712 = G__14750;
i__13561_14713 = G__14751;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_14709);
}


var G__14753 = seq__13517_14700;
var G__14754 = chunk__13518_14701;
var G__14755 = count__13519_14702;
var G__14756 = (i__13520_14703 + (1));
seq__13517_14700 = G__14753;
chunk__13518_14701 = G__14754;
count__13519_14702 = G__14755;
i__13520_14703 = G__14756;
continue;
} else {
var temp__5804__auto___14760 = cljs.core.seq(seq__13517_14700);
if(temp__5804__auto___14760){
var seq__13517_14761__$1 = temp__5804__auto___14760;
if(cljs.core.chunked_seq_QMARK_(seq__13517_14761__$1)){
var c__5525__auto___14764 = cljs.core.chunk_first(seq__13517_14761__$1);
var G__14765 = cljs.core.chunk_rest(seq__13517_14761__$1);
var G__14766 = c__5525__auto___14764;
var G__14767 = cljs.core.count(c__5525__auto___14764);
var G__14768 = (0);
seq__13517_14700 = G__14765;
chunk__13518_14701 = G__14766;
count__13519_14702 = G__14767;
i__13520_14703 = G__14768;
continue;
} else {
var child_struct_14769 = cljs.core.first(seq__13517_14761__$1);
var children_14773 = shadow.dom.dom_node(child_struct_14769);
if(cljs.core.seq_QMARK_(children_14773)){
var seq__13579_14775 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_14773));
var chunk__13581_14776 = null;
var count__13582_14777 = (0);
var i__13583_14778 = (0);
while(true){
if((i__13583_14778 < count__13582_14777)){
var child_14780 = chunk__13581_14776.cljs$core$IIndexed$_nth$arity$2(null, i__13583_14778);
if(cljs.core.truth_(child_14780)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14780);


var G__14782 = seq__13579_14775;
var G__14783 = chunk__13581_14776;
var G__14784 = count__13582_14777;
var G__14785 = (i__13583_14778 + (1));
seq__13579_14775 = G__14782;
chunk__13581_14776 = G__14783;
count__13582_14777 = G__14784;
i__13583_14778 = G__14785;
continue;
} else {
var G__14786 = seq__13579_14775;
var G__14787 = chunk__13581_14776;
var G__14788 = count__13582_14777;
var G__14789 = (i__13583_14778 + (1));
seq__13579_14775 = G__14786;
chunk__13581_14776 = G__14787;
count__13582_14777 = G__14788;
i__13583_14778 = G__14789;
continue;
}
} else {
var temp__5804__auto___14790__$1 = cljs.core.seq(seq__13579_14775);
if(temp__5804__auto___14790__$1){
var seq__13579_14791__$1 = temp__5804__auto___14790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13579_14791__$1)){
var c__5525__auto___14792 = cljs.core.chunk_first(seq__13579_14791__$1);
var G__14793 = cljs.core.chunk_rest(seq__13579_14791__$1);
var G__14794 = c__5525__auto___14792;
var G__14795 = cljs.core.count(c__5525__auto___14792);
var G__14796 = (0);
seq__13579_14775 = G__14793;
chunk__13581_14776 = G__14794;
count__13582_14777 = G__14795;
i__13583_14778 = G__14796;
continue;
} else {
var child_14797 = cljs.core.first(seq__13579_14791__$1);
if(cljs.core.truth_(child_14797)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14797);


var G__14798 = cljs.core.next(seq__13579_14791__$1);
var G__14799 = null;
var G__14800 = (0);
var G__14801 = (0);
seq__13579_14775 = G__14798;
chunk__13581_14776 = G__14799;
count__13582_14777 = G__14800;
i__13583_14778 = G__14801;
continue;
} else {
var G__14802 = cljs.core.next(seq__13579_14791__$1);
var G__14803 = null;
var G__14804 = (0);
var G__14805 = (0);
seq__13579_14775 = G__14802;
chunk__13581_14776 = G__14803;
count__13582_14777 = G__14804;
i__13583_14778 = G__14805;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_14773);
}


var G__14809 = cljs.core.next(seq__13517_14761__$1);
var G__14810 = null;
var G__14811 = (0);
var G__14812 = (0);
seq__13517_14700 = G__14809;
chunk__13518_14701 = G__14810;
count__13519_14702 = G__14811;
i__13520_14703 = G__14812;
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
var seq__13637 = cljs.core.seq(node);
var chunk__13638 = null;
var count__13639 = (0);
var i__13640 = (0);
while(true){
if((i__13640 < count__13639)){
var n = chunk__13638.cljs$core$IIndexed$_nth$arity$2(null, i__13640);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__14833 = seq__13637;
var G__14834 = chunk__13638;
var G__14835 = count__13639;
var G__14836 = (i__13640 + (1));
seq__13637 = G__14833;
chunk__13638 = G__14834;
count__13639 = G__14835;
i__13640 = G__14836;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13637);
if(temp__5804__auto__){
var seq__13637__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13637__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13637__$1);
var G__14843 = cljs.core.chunk_rest(seq__13637__$1);
var G__14844 = c__5525__auto__;
var G__14845 = cljs.core.count(c__5525__auto__);
var G__14846 = (0);
seq__13637 = G__14843;
chunk__13638 = G__14844;
count__13639 = G__14845;
i__13640 = G__14846;
continue;
} else {
var n = cljs.core.first(seq__13637__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__14848 = cljs.core.next(seq__13637__$1);
var G__14849 = null;
var G__14850 = (0);
var G__14851 = (0);
seq__13637 = G__14848;
chunk__13638 = G__14849;
count__13639 = G__14850;
i__13640 = G__14851;
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
var G__13659 = arguments.length;
switch (G__13659) {
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
var G__13665 = arguments.length;
switch (G__13665) {
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
var G__13678 = arguments.length;
switch (G__13678) {
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
var len__5726__auto___14864 = arguments.length;
var i__5727__auto___14865 = (0);
while(true){
if((i__5727__auto___14865 < len__5726__auto___14864)){
args__5732__auto__.push((arguments[i__5727__auto___14865]));

var G__14872 = (i__5727__auto___14865 + (1));
i__5727__auto___14865 = G__14872;
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
var seq__13711_14875 = cljs.core.seq(nodes);
var chunk__13712_14876 = null;
var count__13713_14877 = (0);
var i__13714_14878 = (0);
while(true){
if((i__13714_14878 < count__13713_14877)){
var node_14880 = chunk__13712_14876.cljs$core$IIndexed$_nth$arity$2(null, i__13714_14878);
fragment.appendChild(shadow.dom._to_dom(node_14880));


var G__14881 = seq__13711_14875;
var G__14882 = chunk__13712_14876;
var G__14883 = count__13713_14877;
var G__14884 = (i__13714_14878 + (1));
seq__13711_14875 = G__14881;
chunk__13712_14876 = G__14882;
count__13713_14877 = G__14883;
i__13714_14878 = G__14884;
continue;
} else {
var temp__5804__auto___14885 = cljs.core.seq(seq__13711_14875);
if(temp__5804__auto___14885){
var seq__13711_14886__$1 = temp__5804__auto___14885;
if(cljs.core.chunked_seq_QMARK_(seq__13711_14886__$1)){
var c__5525__auto___14887 = cljs.core.chunk_first(seq__13711_14886__$1);
var G__14890 = cljs.core.chunk_rest(seq__13711_14886__$1);
var G__14891 = c__5525__auto___14887;
var G__14892 = cljs.core.count(c__5525__auto___14887);
var G__14893 = (0);
seq__13711_14875 = G__14890;
chunk__13712_14876 = G__14891;
count__13713_14877 = G__14892;
i__13714_14878 = G__14893;
continue;
} else {
var node_14895 = cljs.core.first(seq__13711_14886__$1);
fragment.appendChild(shadow.dom._to_dom(node_14895));


var G__14896 = cljs.core.next(seq__13711_14886__$1);
var G__14897 = null;
var G__14898 = (0);
var G__14899 = (0);
seq__13711_14875 = G__14896;
chunk__13712_14876 = G__14897;
count__13713_14877 = G__14898;
i__13714_14878 = G__14899;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq13697){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13697));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__13730_14901 = cljs.core.seq(scripts);
var chunk__13731_14902 = null;
var count__13732_14903 = (0);
var i__13733_14904 = (0);
while(true){
if((i__13733_14904 < count__13732_14903)){
var vec__13746_14908 = chunk__13731_14902.cljs$core$IIndexed$_nth$arity$2(null, i__13733_14904);
var script_tag_14909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13746_14908,(0),null);
var script_body_14910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13746_14908,(1),null);
eval(script_body_14910);


var G__14914 = seq__13730_14901;
var G__14915 = chunk__13731_14902;
var G__14916 = count__13732_14903;
var G__14917 = (i__13733_14904 + (1));
seq__13730_14901 = G__14914;
chunk__13731_14902 = G__14915;
count__13732_14903 = G__14916;
i__13733_14904 = G__14917;
continue;
} else {
var temp__5804__auto___14918 = cljs.core.seq(seq__13730_14901);
if(temp__5804__auto___14918){
var seq__13730_14919__$1 = temp__5804__auto___14918;
if(cljs.core.chunked_seq_QMARK_(seq__13730_14919__$1)){
var c__5525__auto___14920 = cljs.core.chunk_first(seq__13730_14919__$1);
var G__14921 = cljs.core.chunk_rest(seq__13730_14919__$1);
var G__14922 = c__5525__auto___14920;
var G__14923 = cljs.core.count(c__5525__auto___14920);
var G__14924 = (0);
seq__13730_14901 = G__14921;
chunk__13731_14902 = G__14922;
count__13732_14903 = G__14923;
i__13733_14904 = G__14924;
continue;
} else {
var vec__13775_14925 = cljs.core.first(seq__13730_14919__$1);
var script_tag_14926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775_14925,(0),null);
var script_body_14927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775_14925,(1),null);
eval(script_body_14927);


var G__14929 = cljs.core.next(seq__13730_14919__$1);
var G__14930 = null;
var G__14931 = (0);
var G__14932 = (0);
seq__13730_14901 = G__14929;
chunk__13731_14902 = G__14930;
count__13732_14903 = G__14931;
i__13733_14904 = G__14932;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__13790){
var vec__13791 = p__13790;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(1),null);
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
var G__13798 = arguments.length;
switch (G__13798) {
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
var seq__13805 = cljs.core.seq(style_keys);
var chunk__13806 = null;
var count__13807 = (0);
var i__13808 = (0);
while(true){
if((i__13808 < count__13807)){
var it = chunk__13806.cljs$core$IIndexed$_nth$arity$2(null, i__13808);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__14957 = seq__13805;
var G__14958 = chunk__13806;
var G__14959 = count__13807;
var G__14960 = (i__13808 + (1));
seq__13805 = G__14957;
chunk__13806 = G__14958;
count__13807 = G__14959;
i__13808 = G__14960;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13805);
if(temp__5804__auto__){
var seq__13805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13805__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13805__$1);
var G__14967 = cljs.core.chunk_rest(seq__13805__$1);
var G__14968 = c__5525__auto__;
var G__14969 = cljs.core.count(c__5525__auto__);
var G__14970 = (0);
seq__13805 = G__14967;
chunk__13806 = G__14968;
count__13807 = G__14969;
i__13808 = G__14970;
continue;
} else {
var it = cljs.core.first(seq__13805__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__14972 = cljs.core.next(seq__13805__$1);
var G__14973 = null;
var G__14974 = (0);
var G__14975 = (0);
seq__13805 = G__14972;
chunk__13806 = G__14973;
count__13807 = G__14974;
i__13808 = G__14975;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k13824,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__13833 = k13824;
var G__13833__$1 = (((G__13833 instanceof cljs.core.Keyword))?G__13833.fqn:null);
switch (G__13833__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13824,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__13838){
var vec__13839 = p__13838;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13823){
var self__ = this;
var G__13823__$1 = this;
return (new cljs.core.RecordIter((0),G__13823__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13825,other13826){
var self__ = this;
var this13825__$1 = this;
return (((!((other13826 == null)))) && ((((this13825__$1.constructor === other13826.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13825__$1.x,other13826.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13825__$1.y,other13826.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13825__$1.__extmap,other13826.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k13824){
var self__ = this;
var this__5307__auto____$1 = this;
var G__13882 = k13824;
var G__13882__$1 = (((G__13882 instanceof cljs.core.Keyword))?G__13882.fqn:null);
switch (G__13882__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k13824);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__13823){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__13886 = cljs.core.keyword_identical_QMARK_;
var expr__13887 = k__5309__auto__;
if(cljs.core.truth_((pred__13886.cljs$core$IFn$_invoke$arity$2 ? pred__13886.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__13887) : pred__13886.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__13887)))){
return (new shadow.dom.Coordinate(G__13823,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13886.cljs$core$IFn$_invoke$arity$2 ? pred__13886.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__13887) : pred__13886.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__13887)))){
return (new shadow.dom.Coordinate(self__.x,G__13823,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__13823),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__13823){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__13823,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__13830){
var extmap__5342__auto__ = (function (){var G__13905 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13830,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__13830)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13905);
} else {
return G__13905;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__13830),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__13830),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k13920,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__13959 = k13920;
var G__13959__$1 = (((G__13959 instanceof cljs.core.Keyword))?G__13959.fqn:null);
switch (G__13959__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13920,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__13968){
var vec__13969 = p__13968;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13918){
var self__ = this;
var G__13918__$1 = this;
return (new cljs.core.RecordIter((0),G__13918__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13921,other13922){
var self__ = this;
var this13921__$1 = this;
return (((!((other13922 == null)))) && ((((this13921__$1.constructor === other13922.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13921__$1.w,other13922.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13921__$1.h,other13922.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13921__$1.__extmap,other13922.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k13920){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14017 = k13920;
var G__14017__$1 = (((G__14017 instanceof cljs.core.Keyword))?G__14017.fqn:null);
switch (G__14017__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k13920);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__13918){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14025 = cljs.core.keyword_identical_QMARK_;
var expr__14026 = k__5309__auto__;
if(cljs.core.truth_((pred__14025.cljs$core$IFn$_invoke$arity$2 ? pred__14025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14026) : pred__14025.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__14026)))){
return (new shadow.dom.Size(G__13918,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14025.cljs$core$IFn$_invoke$arity$2 ? pred__14025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14026) : pred__14025.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__14026)))){
return (new shadow.dom.Size(self__.w,G__13918,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__13918),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__13918){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__13918,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__13925){
var extmap__5342__auto__ = (function (){var G__14083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13925,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__13925)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14083);
} else {
return G__14083;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__13925),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__13925),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__15101 = (i + (1));
var G__15102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15101;
ret = G__15102;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14181){
var vec__14184 = p__14181;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14184,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14204 = arguments.length;
switch (G__14204) {
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
var G__15123 = ps;
var G__15124 = (i + (1));
el__$1 = G__15123;
i = G__15124;
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
var vec__14249 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14260_15138 = cljs.core.seq(props);
var chunk__14261_15139 = null;
var count__14262_15140 = (0);
var i__14263_15141 = (0);
while(true){
if((i__14263_15141 < count__14262_15140)){
var vec__14286_15142 = chunk__14261_15139.cljs$core$IIndexed$_nth$arity$2(null, i__14263_15141);
var k_15143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14286_15142,(0),null);
var v_15144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14286_15142,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15143);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15143),v_15144);


var G__15150 = seq__14260_15138;
var G__15151 = chunk__14261_15139;
var G__15152 = count__14262_15140;
var G__15153 = (i__14263_15141 + (1));
seq__14260_15138 = G__15150;
chunk__14261_15139 = G__15151;
count__14262_15140 = G__15152;
i__14263_15141 = G__15153;
continue;
} else {
var temp__5804__auto___15154 = cljs.core.seq(seq__14260_15138);
if(temp__5804__auto___15154){
var seq__14260_15156__$1 = temp__5804__auto___15154;
if(cljs.core.chunked_seq_QMARK_(seq__14260_15156__$1)){
var c__5525__auto___15157 = cljs.core.chunk_first(seq__14260_15156__$1);
var G__15158 = cljs.core.chunk_rest(seq__14260_15156__$1);
var G__15159 = c__5525__auto___15157;
var G__15160 = cljs.core.count(c__5525__auto___15157);
var G__15161 = (0);
seq__14260_15138 = G__15158;
chunk__14261_15139 = G__15159;
count__14262_15140 = G__15160;
i__14263_15141 = G__15161;
continue;
} else {
var vec__14305_15162 = cljs.core.first(seq__14260_15156__$1);
var k_15163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14305_15162,(0),null);
var v_15164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14305_15162,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15163);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15163),v_15164);


var G__15167 = cljs.core.next(seq__14260_15156__$1);
var G__15168 = null;
var G__15169 = (0);
var G__15170 = (0);
seq__14260_15138 = G__15167;
chunk__14261_15139 = G__15168;
count__14262_15140 = G__15169;
i__14263_15141 = G__15170;
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
var vec__14317 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14317,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14317,(1),null);
var seq__14321_15175 = cljs.core.seq(node_children);
var chunk__14323_15176 = null;
var count__14324_15177 = (0);
var i__14325_15179 = (0);
while(true){
if((i__14325_15179 < count__14324_15177)){
var child_struct_15180 = chunk__14323_15176.cljs$core$IIndexed$_nth$arity$2(null, i__14325_15179);
if((!((child_struct_15180 == null)))){
if(typeof child_struct_15180 === 'string'){
var text_15182 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15182),child_struct_15180].join(''));
} else {
var children_15184 = shadow.dom.svg_node(child_struct_15180);
if(cljs.core.seq_QMARK_(children_15184)){
var seq__14355_15185 = cljs.core.seq(children_15184);
var chunk__14357_15186 = null;
var count__14358_15187 = (0);
var i__14359_15188 = (0);
while(true){
if((i__14359_15188 < count__14358_15187)){
var child_15190 = chunk__14357_15186.cljs$core$IIndexed$_nth$arity$2(null, i__14359_15188);
if(cljs.core.truth_(child_15190)){
node.appendChild(child_15190);


var G__15193 = seq__14355_15185;
var G__15194 = chunk__14357_15186;
var G__15195 = count__14358_15187;
var G__15196 = (i__14359_15188 + (1));
seq__14355_15185 = G__15193;
chunk__14357_15186 = G__15194;
count__14358_15187 = G__15195;
i__14359_15188 = G__15196;
continue;
} else {
var G__15197 = seq__14355_15185;
var G__15198 = chunk__14357_15186;
var G__15199 = count__14358_15187;
var G__15200 = (i__14359_15188 + (1));
seq__14355_15185 = G__15197;
chunk__14357_15186 = G__15198;
count__14358_15187 = G__15199;
i__14359_15188 = G__15200;
continue;
}
} else {
var temp__5804__auto___15204 = cljs.core.seq(seq__14355_15185);
if(temp__5804__auto___15204){
var seq__14355_15205__$1 = temp__5804__auto___15204;
if(cljs.core.chunked_seq_QMARK_(seq__14355_15205__$1)){
var c__5525__auto___15208 = cljs.core.chunk_first(seq__14355_15205__$1);
var G__15209 = cljs.core.chunk_rest(seq__14355_15205__$1);
var G__15210 = c__5525__auto___15208;
var G__15211 = cljs.core.count(c__5525__auto___15208);
var G__15212 = (0);
seq__14355_15185 = G__15209;
chunk__14357_15186 = G__15210;
count__14358_15187 = G__15211;
i__14359_15188 = G__15212;
continue;
} else {
var child_15214 = cljs.core.first(seq__14355_15205__$1);
if(cljs.core.truth_(child_15214)){
node.appendChild(child_15214);


var G__15215 = cljs.core.next(seq__14355_15205__$1);
var G__15216 = null;
var G__15217 = (0);
var G__15218 = (0);
seq__14355_15185 = G__15215;
chunk__14357_15186 = G__15216;
count__14358_15187 = G__15217;
i__14359_15188 = G__15218;
continue;
} else {
var G__15220 = cljs.core.next(seq__14355_15205__$1);
var G__15221 = null;
var G__15222 = (0);
var G__15223 = (0);
seq__14355_15185 = G__15220;
chunk__14357_15186 = G__15221;
count__14358_15187 = G__15222;
i__14359_15188 = G__15223;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15184);
}
}


var G__15228 = seq__14321_15175;
var G__15229 = chunk__14323_15176;
var G__15230 = count__14324_15177;
var G__15231 = (i__14325_15179 + (1));
seq__14321_15175 = G__15228;
chunk__14323_15176 = G__15229;
count__14324_15177 = G__15230;
i__14325_15179 = G__15231;
continue;
} else {
var G__15232 = seq__14321_15175;
var G__15233 = chunk__14323_15176;
var G__15234 = count__14324_15177;
var G__15235 = (i__14325_15179 + (1));
seq__14321_15175 = G__15232;
chunk__14323_15176 = G__15233;
count__14324_15177 = G__15234;
i__14325_15179 = G__15235;
continue;
}
} else {
var temp__5804__auto___15238 = cljs.core.seq(seq__14321_15175);
if(temp__5804__auto___15238){
var seq__14321_15240__$1 = temp__5804__auto___15238;
if(cljs.core.chunked_seq_QMARK_(seq__14321_15240__$1)){
var c__5525__auto___15244 = cljs.core.chunk_first(seq__14321_15240__$1);
var G__15245 = cljs.core.chunk_rest(seq__14321_15240__$1);
var G__15246 = c__5525__auto___15244;
var G__15247 = cljs.core.count(c__5525__auto___15244);
var G__15248 = (0);
seq__14321_15175 = G__15245;
chunk__14323_15176 = G__15246;
count__14324_15177 = G__15247;
i__14325_15179 = G__15248;
continue;
} else {
var child_struct_15249 = cljs.core.first(seq__14321_15240__$1);
if((!((child_struct_15249 == null)))){
if(typeof child_struct_15249 === 'string'){
var text_15250 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15250),child_struct_15249].join(''));
} else {
var children_15251 = shadow.dom.svg_node(child_struct_15249);
if(cljs.core.seq_QMARK_(children_15251)){
var seq__14380_15252 = cljs.core.seq(children_15251);
var chunk__14382_15253 = null;
var count__14383_15254 = (0);
var i__14384_15255 = (0);
while(true){
if((i__14384_15255 < count__14383_15254)){
var child_15256 = chunk__14382_15253.cljs$core$IIndexed$_nth$arity$2(null, i__14384_15255);
if(cljs.core.truth_(child_15256)){
node.appendChild(child_15256);


var G__15257 = seq__14380_15252;
var G__15258 = chunk__14382_15253;
var G__15259 = count__14383_15254;
var G__15260 = (i__14384_15255 + (1));
seq__14380_15252 = G__15257;
chunk__14382_15253 = G__15258;
count__14383_15254 = G__15259;
i__14384_15255 = G__15260;
continue;
} else {
var G__15262 = seq__14380_15252;
var G__15263 = chunk__14382_15253;
var G__15264 = count__14383_15254;
var G__15265 = (i__14384_15255 + (1));
seq__14380_15252 = G__15262;
chunk__14382_15253 = G__15263;
count__14383_15254 = G__15264;
i__14384_15255 = G__15265;
continue;
}
} else {
var temp__5804__auto___15267__$1 = cljs.core.seq(seq__14380_15252);
if(temp__5804__auto___15267__$1){
var seq__14380_15268__$1 = temp__5804__auto___15267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14380_15268__$1)){
var c__5525__auto___15269 = cljs.core.chunk_first(seq__14380_15268__$1);
var G__15271 = cljs.core.chunk_rest(seq__14380_15268__$1);
var G__15272 = c__5525__auto___15269;
var G__15273 = cljs.core.count(c__5525__auto___15269);
var G__15274 = (0);
seq__14380_15252 = G__15271;
chunk__14382_15253 = G__15272;
count__14383_15254 = G__15273;
i__14384_15255 = G__15274;
continue;
} else {
var child_15276 = cljs.core.first(seq__14380_15268__$1);
if(cljs.core.truth_(child_15276)){
node.appendChild(child_15276);


var G__15277 = cljs.core.next(seq__14380_15268__$1);
var G__15278 = null;
var G__15279 = (0);
var G__15280 = (0);
seq__14380_15252 = G__15277;
chunk__14382_15253 = G__15278;
count__14383_15254 = G__15279;
i__14384_15255 = G__15280;
continue;
} else {
var G__15282 = cljs.core.next(seq__14380_15268__$1);
var G__15283 = null;
var G__15284 = (0);
var G__15285 = (0);
seq__14380_15252 = G__15282;
chunk__14382_15253 = G__15283;
count__14383_15254 = G__15284;
i__14384_15255 = G__15285;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15251);
}
}


var G__15286 = cljs.core.next(seq__14321_15240__$1);
var G__15287 = null;
var G__15288 = (0);
var G__15289 = (0);
seq__14321_15175 = G__15286;
chunk__14323_15176 = G__15287;
count__14324_15177 = G__15288;
i__14325_15179 = G__15289;
continue;
} else {
var G__15291 = cljs.core.next(seq__14321_15240__$1);
var G__15292 = null;
var G__15293 = (0);
var G__15294 = (0);
seq__14321_15175 = G__15291;
chunk__14323_15176 = G__15292;
count__14324_15177 = G__15293;
i__14325_15179 = G__15294;
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
var len__5726__auto___15303 = arguments.length;
var i__5727__auto___15304 = (0);
while(true){
if((i__5727__auto___15304 < len__5726__auto___15303)){
args__5732__auto__.push((arguments[i__5727__auto___15304]));

var G__15307 = (i__5727__auto___15304 + (1));
i__5727__auto___15304 = G__15307;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq14413){
var G__14414 = cljs.core.first(seq14413);
var seq14413__$1 = cljs.core.next(seq14413);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14414,seq14413__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
