goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22082 = (function (f,blockable,meta22083){
this.f = f;
this.blockable = blockable;
this.meta22083 = meta22083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22084,meta22083__$1){
var self__ = this;
var _22084__$1 = this;
return (new cljs.core.async.t_cljs$core$async22082(self__.f,self__.blockable,meta22083__$1));
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22084){
var self__ = this;
var _22084__$1 = this;
return self__.meta22083;
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22083","meta22083",310818120,null)], null);
}));

(cljs.core.async.t_cljs$core$async22082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22082");

(cljs.core.async.t_cljs$core$async22082.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22082.
 */
cljs.core.async.__GT_t_cljs$core$async22082 = (function cljs$core$async$__GT_t_cljs$core$async22082(f,blockable,meta22083){
return (new cljs.core.async.t_cljs$core$async22082(f,blockable,meta22083));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22076 = arguments.length;
switch (G__22076) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async22082(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22127 = arguments.length;
switch (G__22127) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22137 = arguments.length;
switch (G__22137) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22140 = arguments.length;
switch (G__22140) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25411 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25411) : fn1.call(null, val_25411));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25411) : fn1.call(null, val_25411));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22146 = arguments.length;
switch (G__22146) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___25413 = n;
var x_25414 = (0);
while(true){
if((x_25414 < n__5593__auto___25413)){
(a[x_25414] = x_25414);

var G__25415 = (x_25414 + (1));
x_25414 = G__25415;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22153 = (function (flag,meta22154){
this.flag = flag;
this.meta22154 = meta22154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22155,meta22154__$1){
var self__ = this;
var _22155__$1 = this;
return (new cljs.core.async.t_cljs$core$async22153(self__.flag,meta22154__$1));
}));

(cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22155){
var self__ = this;
var _22155__$1 = this;
return self__.meta22154;
}));

(cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22154","meta22154",1621967722,null)], null);
}));

(cljs.core.async.t_cljs$core$async22153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22153");

(cljs.core.async.t_cljs$core$async22153.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22153.
 */
cljs.core.async.__GT_t_cljs$core$async22153 = (function cljs$core$async$__GT_t_cljs$core$async22153(flag,meta22154){
return (new cljs.core.async.t_cljs$core$async22153(flag,meta22154));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async22153(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22166 = (function (flag,cb,meta22167){
this.flag = flag;
this.cb = cb;
this.meta22167 = meta22167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22168,meta22167__$1){
var self__ = this;
var _22168__$1 = this;
return (new cljs.core.async.t_cljs$core$async22166(self__.flag,self__.cb,meta22167__$1));
}));

(cljs.core.async.t_cljs$core$async22166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22168){
var self__ = this;
var _22168__$1 = this;
return self__.meta22167;
}));

(cljs.core.async.t_cljs$core$async22166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async22166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22167","meta22167",-930471001,null)], null);
}));

(cljs.core.async.t_cljs$core$async22166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22166");

(cljs.core.async.t_cljs$core$async22166.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22166.
 */
cljs.core.async.__GT_t_cljs$core$async22166 = (function cljs$core$async$__GT_t_cljs$core$async22166(flag,cb,meta22167){
return (new cljs.core.async.t_cljs$core$async22166(flag,cb,meta22167));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async22166(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22176_SHARP_){
var G__22186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22176_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22186) : fret.call(null, G__22186));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22177_SHARP_){
var G__22187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22177_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22187) : fret.call(null, G__22187));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25416 = (i + (1));
i = G__25416;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25417 = arguments.length;
var i__5727__auto___25418 = (0);
while(true){
if((i__5727__auto___25418 < len__5726__auto___25417)){
args__5732__auto__.push((arguments[i__5727__auto___25418]));

var G__25419 = (i__5727__auto___25418 + (1));
i__5727__auto___25418 = G__25419;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22196){
var map__22197 = p__22196;
var map__22197__$1 = cljs.core.__destructure_map(map__22197);
var opts = map__22197__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22192){
var G__22193 = cljs.core.first(seq22192);
var seq22192__$1 = cljs.core.next(seq22192);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22193,seq22192__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22205 = arguments.length;
switch (G__22205) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21957__auto___25421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_22325){
var state_val_22327 = (state_22325[(1)]);
if((state_val_22327 === (7))){
var inst_22307 = (state_22325[(2)]);
var state_22325__$1 = state_22325;
var statearr_22351_25423 = state_22325__$1;
(statearr_22351_25423[(2)] = inst_22307);

(statearr_22351_25423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (1))){
var state_22325__$1 = state_22325;
var statearr_22355_25424 = state_22325__$1;
(statearr_22355_25424[(2)] = null);

(statearr_22355_25424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (4))){
var inst_22241 = (state_22325[(7)]);
var inst_22241__$1 = (state_22325[(2)]);
var inst_22249 = (inst_22241__$1 == null);
var state_22325__$1 = (function (){var statearr_22365 = state_22325;
(statearr_22365[(7)] = inst_22241__$1);

return statearr_22365;
})();
if(cljs.core.truth_(inst_22249)){
var statearr_22367_25426 = state_22325__$1;
(statearr_22367_25426[(1)] = (5));

} else {
var statearr_22368_25427 = state_22325__$1;
(statearr_22368_25427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (13))){
var state_22325__$1 = state_22325;
var statearr_22373_25428 = state_22325__$1;
(statearr_22373_25428[(2)] = null);

(statearr_22373_25428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (6))){
var inst_22241 = (state_22325[(7)]);
var state_22325__$1 = state_22325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22325__$1,(11),to,inst_22241);
} else {
if((state_val_22327 === (3))){
var inst_22319 = (state_22325[(2)]);
var state_22325__$1 = state_22325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22325__$1,inst_22319);
} else {
if((state_val_22327 === (12))){
var state_22325__$1 = state_22325;
var statearr_22387_25429 = state_22325__$1;
(statearr_22387_25429[(2)] = null);

(statearr_22387_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (2))){
var state_22325__$1 = state_22325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22325__$1,(4),from);
} else {
if((state_val_22327 === (11))){
var inst_22285 = (state_22325[(2)]);
var state_22325__$1 = state_22325;
if(cljs.core.truth_(inst_22285)){
var statearr_22391_25431 = state_22325__$1;
(statearr_22391_25431[(1)] = (12));

} else {
var statearr_22396_25432 = state_22325__$1;
(statearr_22396_25432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (9))){
var state_22325__$1 = state_22325;
var statearr_22397_25434 = state_22325__$1;
(statearr_22397_25434[(2)] = null);

(statearr_22397_25434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (5))){
var state_22325__$1 = state_22325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22401_25435 = state_22325__$1;
(statearr_22401_25435[(1)] = (8));

} else {
var statearr_22403_25437 = state_22325__$1;
(statearr_22403_25437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (14))){
var inst_22305 = (state_22325[(2)]);
var state_22325__$1 = state_22325;
var statearr_22404_25440 = state_22325__$1;
(statearr_22404_25440[(2)] = inst_22305);

(statearr_22404_25440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (10))){
var inst_22278 = (state_22325[(2)]);
var state_22325__$1 = state_22325;
var statearr_22405_25441 = state_22325__$1;
(statearr_22405_25441[(2)] = inst_22278);

(statearr_22405_25441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (8))){
var inst_22264 = cljs.core.async.close_BANG_(to);
var state_22325__$1 = state_22325;
var statearr_22407_25442 = state_22325__$1;
(statearr_22407_25442[(2)] = inst_22264);

(statearr_22407_25442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_22412 = [null,null,null,null,null,null,null,null];
(statearr_22412[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_22412[(1)] = (1));

return statearr_22412;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_22325){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_22325);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e22413){var ex__21609__auto__ = e22413;
var statearr_22416_25445 = state_22325;
(statearr_22416_25445[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_22325[(4)]))){
var statearr_22417_25446 = state_22325;
(statearr_22417_25446[(1)] = cljs.core.first((state_22325[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25449 = state_22325;
state_22325 = G__25449;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_22325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_22325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_22421 = f__21958__auto__();
(statearr_22421[(6)] = c__21957__auto___25421);

return statearr_22421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__22428){
var vec__22429 = p__22428;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22429,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22429,(1),null);
var job = vec__22429;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21957__auto___25450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_22448){
var state_val_22449 = (state_22448[(1)]);
if((state_val_22449 === (1))){
var state_22448__$1 = state_22448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22448__$1,(2),res,v);
} else {
if((state_val_22449 === (2))){
var inst_22441 = (state_22448[(2)]);
var inst_22442 = cljs.core.async.close_BANG_(res);
var state_22448__$1 = (function (){var statearr_22474 = state_22448;
(statearr_22474[(7)] = inst_22441);

return statearr_22474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22448__$1,inst_22442);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0 = (function (){
var statearr_22475 = [null,null,null,null,null,null,null,null];
(statearr_22475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__);

(statearr_22475[(1)] = (1));

return statearr_22475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1 = (function (state_22448){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_22448);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e22483){var ex__21609__auto__ = e22483;
var statearr_22484_25454 = state_22448;
(statearr_22484_25454[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_22448[(4)]))){
var statearr_22485_25455 = state_22448;
(statearr_22485_25455[(1)] = cljs.core.first((state_22448[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25457 = state_22448;
state_22448 = G__25457;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = function(state_22448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1.call(this,state_22448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_22490 = f__21958__auto__();
(statearr_22490[(6)] = c__21957__auto___25450);

return statearr_22490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__22495){
var vec__22496 = p__22495;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22496,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22496,(1),null);
var job = vec__22496;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___25461 = n;
var __25462 = (0);
while(true){
if((__25462 < n__5593__auto___25461)){
var G__22499_25464 = type;
var G__22499_25465__$1 = (((G__22499_25464 instanceof cljs.core.Keyword))?G__22499_25464.fqn:null);
switch (G__22499_25465__$1) {
case "compute":
var c__21957__auto___25467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25462,c__21957__auto___25467,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async){
return (function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = ((function (__25462,c__21957__auto___25467,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async){
return (function (state_22515){
var state_val_22516 = (state_22515[(1)]);
if((state_val_22516 === (1))){
var state_22515__$1 = state_22515;
var statearr_22522_25472 = state_22515__$1;
(statearr_22522_25472[(2)] = null);

(statearr_22522_25472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22516 === (2))){
var state_22515__$1 = state_22515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22515__$1,(4),jobs);
} else {
if((state_val_22516 === (3))){
var inst_22513 = (state_22515[(2)]);
var state_22515__$1 = state_22515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22515__$1,inst_22513);
} else {
if((state_val_22516 === (4))){
var inst_22504 = (state_22515[(2)]);
var inst_22505 = process__$1(inst_22504);
var state_22515__$1 = state_22515;
if(cljs.core.truth_(inst_22505)){
var statearr_22526_25473 = state_22515__$1;
(statearr_22526_25473[(1)] = (5));

} else {
var statearr_22527_25474 = state_22515__$1;
(statearr_22527_25474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22516 === (5))){
var state_22515__$1 = state_22515;
var statearr_22530_25476 = state_22515__$1;
(statearr_22530_25476[(2)] = null);

(statearr_22530_25476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22516 === (6))){
var state_22515__$1 = state_22515;
var statearr_22532_25477 = state_22515__$1;
(statearr_22532_25477[(2)] = null);

(statearr_22532_25477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22516 === (7))){
var inst_22510 = (state_22515[(2)]);
var state_22515__$1 = state_22515;
var statearr_22533_25478 = state_22515__$1;
(statearr_22533_25478[(2)] = inst_22510);

(statearr_22533_25478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25462,c__21957__auto___25467,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async))
;
return ((function (__25462,switch__21605__auto__,c__21957__auto___25467,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0 = (function (){
var statearr_22535 = [null,null,null,null,null,null,null];
(statearr_22535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__);

(statearr_22535[(1)] = (1));

return statearr_22535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1 = (function (state_22515){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_22515);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e22539){var ex__21609__auto__ = e22539;
var statearr_22540_25482 = state_22515;
(statearr_22540_25482[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_22515[(4)]))){
var statearr_22542_25483 = state_22515;
(statearr_22542_25483[(1)] = cljs.core.first((state_22515[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25484 = state_22515;
state_22515 = G__25484;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = function(state_22515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1.call(this,state_22515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__;
})()
;})(__25462,switch__21605__auto__,c__21957__auto___25467,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async))
})();
var state__21959__auto__ = (function (){var statearr_22549 = f__21958__auto__();
(statearr_22549[(6)] = c__21957__auto___25467);

return statearr_22549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
});})(__25462,c__21957__auto___25467,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async))
);


break;
case "async":
var c__21957__auto___25485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25462,c__21957__auto___25485,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async){
return (function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = ((function (__25462,c__21957__auto___25485,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async){
return (function (state_22563){
var state_val_22564 = (state_22563[(1)]);
if((state_val_22564 === (1))){
var state_22563__$1 = state_22563;
var statearr_22570_25486 = state_22563__$1;
(statearr_22570_25486[(2)] = null);

(statearr_22570_25486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (2))){
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22563__$1,(4),jobs);
} else {
if((state_val_22564 === (3))){
var inst_22561 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22563__$1,inst_22561);
} else {
if((state_val_22564 === (4))){
var inst_22553 = (state_22563[(2)]);
var inst_22554 = async(inst_22553);
var state_22563__$1 = state_22563;
if(cljs.core.truth_(inst_22554)){
var statearr_22575_25488 = state_22563__$1;
(statearr_22575_25488[(1)] = (5));

} else {
var statearr_22576_25489 = state_22563__$1;
(statearr_22576_25489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (5))){
var state_22563__$1 = state_22563;
var statearr_22579_25490 = state_22563__$1;
(statearr_22579_25490[(2)] = null);

(statearr_22579_25490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (6))){
var state_22563__$1 = state_22563;
var statearr_22580_25491 = state_22563__$1;
(statearr_22580_25491[(2)] = null);

(statearr_22580_25491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (7))){
var inst_22559 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
var statearr_22583_25493 = state_22563__$1;
(statearr_22583_25493[(2)] = inst_22559);

(statearr_22583_25493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25462,c__21957__auto___25485,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async))
;
return ((function (__25462,switch__21605__auto__,c__21957__auto___25485,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0 = (function (){
var statearr_22584 = [null,null,null,null,null,null,null];
(statearr_22584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__);

(statearr_22584[(1)] = (1));

return statearr_22584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1 = (function (state_22563){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_22563);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e22585){var ex__21609__auto__ = e22585;
var statearr_22586_25495 = state_22563;
(statearr_22586_25495[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_22563[(4)]))){
var statearr_22589_25496 = state_22563;
(statearr_22589_25496[(1)] = cljs.core.first((state_22563[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25497 = state_22563;
state_22563 = G__25497;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = function(state_22563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1.call(this,state_22563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__;
})()
;})(__25462,switch__21605__auto__,c__21957__auto___25485,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async))
})();
var state__21959__auto__ = (function (){var statearr_22590 = f__21958__auto__();
(statearr_22590[(6)] = c__21957__auto___25485);

return statearr_22590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
});})(__25462,c__21957__auto___25485,G__22499_25464,G__22499_25465__$1,n__5593__auto___25461,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22499_25465__$1)].join('')));

}

var G__25498 = (__25462 + (1));
__25462 = G__25498;
continue;
} else {
}
break;
}

var c__21957__auto___25499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_22624){
var state_val_22625 = (state_22624[(1)]);
if((state_val_22625 === (7))){
var inst_22619 = (state_22624[(2)]);
var state_22624__$1 = state_22624;
var statearr_22628_25500 = state_22624__$1;
(statearr_22628_25500[(2)] = inst_22619);

(statearr_22628_25500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22625 === (1))){
var state_22624__$1 = state_22624;
var statearr_22629_25501 = state_22624__$1;
(statearr_22629_25501[(2)] = null);

(statearr_22629_25501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22625 === (4))){
var inst_22596 = (state_22624[(7)]);
var inst_22596__$1 = (state_22624[(2)]);
var inst_22597 = (inst_22596__$1 == null);
var state_22624__$1 = (function (){var statearr_22630 = state_22624;
(statearr_22630[(7)] = inst_22596__$1);

return statearr_22630;
})();
if(cljs.core.truth_(inst_22597)){
var statearr_22631_25518 = state_22624__$1;
(statearr_22631_25518[(1)] = (5));

} else {
var statearr_22632_25521 = state_22624__$1;
(statearr_22632_25521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22625 === (6))){
var inst_22601 = (state_22624[(8)]);
var inst_22596 = (state_22624[(7)]);
var inst_22601__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22611 = [inst_22596,inst_22601__$1];
var inst_22612 = (new cljs.core.PersistentVector(null,2,(5),inst_22602,inst_22611,null));
var state_22624__$1 = (function (){var statearr_22633 = state_22624;
(statearr_22633[(8)] = inst_22601__$1);

return statearr_22633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22624__$1,(8),jobs,inst_22612);
} else {
if((state_val_22625 === (3))){
var inst_22622 = (state_22624[(2)]);
var state_22624__$1 = state_22624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22624__$1,inst_22622);
} else {
if((state_val_22625 === (2))){
var state_22624__$1 = state_22624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22624__$1,(4),from);
} else {
if((state_val_22625 === (9))){
var inst_22616 = (state_22624[(2)]);
var state_22624__$1 = (function (){var statearr_22634 = state_22624;
(statearr_22634[(9)] = inst_22616);

return statearr_22634;
})();
var statearr_22635_25531 = state_22624__$1;
(statearr_22635_25531[(2)] = null);

(statearr_22635_25531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22625 === (5))){
var inst_22599 = cljs.core.async.close_BANG_(jobs);
var state_22624__$1 = state_22624;
var statearr_22639_25532 = state_22624__$1;
(statearr_22639_25532[(2)] = inst_22599);

(statearr_22639_25532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22625 === (8))){
var inst_22601 = (state_22624[(8)]);
var inst_22614 = (state_22624[(2)]);
var state_22624__$1 = (function (){var statearr_22640 = state_22624;
(statearr_22640[(10)] = inst_22614);

return statearr_22640;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22624__$1,(9),results,inst_22601);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0 = (function (){
var statearr_22641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__);

(statearr_22641[(1)] = (1));

return statearr_22641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1 = (function (state_22624){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_22624);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e22642){var ex__21609__auto__ = e22642;
var statearr_22643_25549 = state_22624;
(statearr_22643_25549[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_22624[(4)]))){
var statearr_22644_25556 = state_22624;
(statearr_22644_25556[(1)] = cljs.core.first((state_22624[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25558 = state_22624;
state_22624 = G__25558;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = function(state_22624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1.call(this,state_22624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_22645 = f__21958__auto__();
(statearr_22645[(6)] = c__21957__auto___25499);

return statearr_22645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


var c__21957__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_22706){
var state_val_22707 = (state_22706[(1)]);
if((state_val_22707 === (7))){
var inst_22702 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22708_25559 = state_22706__$1;
(statearr_22708_25559[(2)] = inst_22702);

(statearr_22708_25559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (20))){
var state_22706__$1 = state_22706;
var statearr_22709_25560 = state_22706__$1;
(statearr_22709_25560[(2)] = null);

(statearr_22709_25560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (1))){
var state_22706__$1 = state_22706;
var statearr_22710_25561 = state_22706__$1;
(statearr_22710_25561[(2)] = null);

(statearr_22710_25561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (4))){
var inst_22648 = (state_22706[(7)]);
var inst_22648__$1 = (state_22706[(2)]);
var inst_22649 = (inst_22648__$1 == null);
var state_22706__$1 = (function (){var statearr_22712 = state_22706;
(statearr_22712[(7)] = inst_22648__$1);

return statearr_22712;
})();
if(cljs.core.truth_(inst_22649)){
var statearr_22713_25564 = state_22706__$1;
(statearr_22713_25564[(1)] = (5));

} else {
var statearr_22714_25565 = state_22706__$1;
(statearr_22714_25565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (15))){
var inst_22684 = (state_22706[(8)]);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22706__$1,(18),to,inst_22684);
} else {
if((state_val_22707 === (21))){
var inst_22697 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22719_25566 = state_22706__$1;
(statearr_22719_25566[(2)] = inst_22697);

(statearr_22719_25566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (13))){
var inst_22699 = (state_22706[(2)]);
var state_22706__$1 = (function (){var statearr_22721 = state_22706;
(statearr_22721[(9)] = inst_22699);

return statearr_22721;
})();
var statearr_22728_25569 = state_22706__$1;
(statearr_22728_25569[(2)] = null);

(statearr_22728_25569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (6))){
var inst_22648 = (state_22706[(7)]);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22706__$1,(11),inst_22648);
} else {
if((state_val_22707 === (17))){
var inst_22692 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
if(cljs.core.truth_(inst_22692)){
var statearr_22729_25571 = state_22706__$1;
(statearr_22729_25571[(1)] = (19));

} else {
var statearr_22730_25572 = state_22706__$1;
(statearr_22730_25572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (3))){
var inst_22704 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22706__$1,inst_22704);
} else {
if((state_val_22707 === (12))){
var inst_22668 = (state_22706[(10)]);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22706__$1,(14),inst_22668);
} else {
if((state_val_22707 === (2))){
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22706__$1,(4),results);
} else {
if((state_val_22707 === (19))){
var state_22706__$1 = state_22706;
var statearr_22731_25575 = state_22706__$1;
(statearr_22731_25575[(2)] = null);

(statearr_22731_25575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (11))){
var inst_22668 = (state_22706[(2)]);
var state_22706__$1 = (function (){var statearr_22732 = state_22706;
(statearr_22732[(10)] = inst_22668);

return statearr_22732;
})();
var statearr_22733_25577 = state_22706__$1;
(statearr_22733_25577[(2)] = null);

(statearr_22733_25577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (9))){
var state_22706__$1 = state_22706;
var statearr_22738_25578 = state_22706__$1;
(statearr_22738_25578[(2)] = null);

(statearr_22738_25578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (5))){
var state_22706__$1 = state_22706;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22744_25580 = state_22706__$1;
(statearr_22744_25580[(1)] = (8));

} else {
var statearr_22746_25581 = state_22706__$1;
(statearr_22746_25581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (14))){
var inst_22686 = (state_22706[(11)]);
var inst_22684 = (state_22706[(8)]);
var inst_22684__$1 = (state_22706[(2)]);
var inst_22685 = (inst_22684__$1 == null);
var inst_22686__$1 = cljs.core.not(inst_22685);
var state_22706__$1 = (function (){var statearr_22754 = state_22706;
(statearr_22754[(11)] = inst_22686__$1);

(statearr_22754[(8)] = inst_22684__$1);

return statearr_22754;
})();
if(inst_22686__$1){
var statearr_22762_25586 = state_22706__$1;
(statearr_22762_25586[(1)] = (15));

} else {
var statearr_22763_25587 = state_22706__$1;
(statearr_22763_25587[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (16))){
var inst_22686 = (state_22706[(11)]);
var state_22706__$1 = state_22706;
var statearr_22764_25588 = state_22706__$1;
(statearr_22764_25588[(2)] = inst_22686);

(statearr_22764_25588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (10))){
var inst_22660 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22768_25589 = state_22706__$1;
(statearr_22768_25589[(2)] = inst_22660);

(statearr_22768_25589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (18))){
var inst_22689 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22771_25590 = state_22706__$1;
(statearr_22771_25590[(2)] = inst_22689);

(statearr_22771_25590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (8))){
var inst_22656 = cljs.core.async.close_BANG_(to);
var state_22706__$1 = state_22706;
var statearr_22774_25591 = state_22706__$1;
(statearr_22774_25591[(2)] = inst_22656);

(statearr_22774_25591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0 = (function (){
var statearr_22789 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__);

(statearr_22789[(1)] = (1));

return statearr_22789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1 = (function (state_22706){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_22706);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e22797){var ex__21609__auto__ = e22797;
var statearr_22798_25595 = state_22706;
(statearr_22798_25595[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_22706[(4)]))){
var statearr_22805_25597 = state_22706;
(statearr_22805_25597[(1)] = cljs.core.first((state_22706[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25599 = state_22706;
state_22706 = G__25599;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__ = function(state_22706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1.call(this,state_22706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21606__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_22810 = f__21958__auto__();
(statearr_22810[(6)] = c__21957__auto__);

return statearr_22810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));

return c__21957__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22840 = arguments.length;
switch (G__22840) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__22893 = arguments.length;
switch (G__22893) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__22951 = arguments.length;
switch (G__22951) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21957__auto___25610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_23019){
var state_val_23021 = (state_23019[(1)]);
if((state_val_23021 === (7))){
var inst_23014 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23023_25613 = state_23019__$1;
(statearr_23023_25613[(2)] = inst_23014);

(statearr_23023_25613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (1))){
var state_23019__$1 = state_23019;
var statearr_23024_25614 = state_23019__$1;
(statearr_23024_25614[(2)] = null);

(statearr_23024_25614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (4))){
var inst_22994 = (state_23019[(7)]);
var inst_22994__$1 = (state_23019[(2)]);
var inst_22995 = (inst_22994__$1 == null);
var state_23019__$1 = (function (){var statearr_23029 = state_23019;
(statearr_23029[(7)] = inst_22994__$1);

return statearr_23029;
})();
if(cljs.core.truth_(inst_22995)){
var statearr_23030_25615 = state_23019__$1;
(statearr_23030_25615[(1)] = (5));

} else {
var statearr_23031_25616 = state_23019__$1;
(statearr_23031_25616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (13))){
var state_23019__$1 = state_23019;
var statearr_23033_25617 = state_23019__$1;
(statearr_23033_25617[(2)] = null);

(statearr_23033_25617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (6))){
var inst_22994 = (state_23019[(7)]);
var inst_23000 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22994) : p.call(null, inst_22994));
var state_23019__$1 = state_23019;
if(cljs.core.truth_(inst_23000)){
var statearr_23043_25618 = state_23019__$1;
(statearr_23043_25618[(1)] = (9));

} else {
var statearr_23044_25619 = state_23019__$1;
(statearr_23044_25619[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (3))){
var inst_23016 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23019__$1,inst_23016);
} else {
if((state_val_23021 === (12))){
var state_23019__$1 = state_23019;
var statearr_23057_25620 = state_23019__$1;
(statearr_23057_25620[(2)] = null);

(statearr_23057_25620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (2))){
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23019__$1,(4),ch);
} else {
if((state_val_23021 === (11))){
var inst_22994 = (state_23019[(7)]);
var inst_23004 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23019__$1,(8),inst_23004,inst_22994);
} else {
if((state_val_23021 === (9))){
var state_23019__$1 = state_23019;
var statearr_23085_25621 = state_23019__$1;
(statearr_23085_25621[(2)] = tc);

(statearr_23085_25621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (5))){
var inst_22997 = cljs.core.async.close_BANG_(tc);
var inst_22998 = cljs.core.async.close_BANG_(fc);
var state_23019__$1 = (function (){var statearr_23090 = state_23019;
(statearr_23090[(8)] = inst_22997);

return statearr_23090;
})();
var statearr_23092_25623 = state_23019__$1;
(statearr_23092_25623[(2)] = inst_22998);

(statearr_23092_25623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (14))){
var inst_23012 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23097_25624 = state_23019__$1;
(statearr_23097_25624[(2)] = inst_23012);

(statearr_23097_25624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (10))){
var state_23019__$1 = state_23019;
var statearr_23103_25625 = state_23019__$1;
(statearr_23103_25625[(2)] = fc);

(statearr_23103_25625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (8))){
var inst_23006 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
if(cljs.core.truth_(inst_23006)){
var statearr_23104_25626 = state_23019__$1;
(statearr_23104_25626[(1)] = (12));

} else {
var statearr_23105_25627 = state_23019__$1;
(statearr_23105_25627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_23108 = [null,null,null,null,null,null,null,null,null];
(statearr_23108[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_23108[(1)] = (1));

return statearr_23108;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_23019){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_23019);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e23109){var ex__21609__auto__ = e23109;
var statearr_23110_25639 = state_23019;
(statearr_23110_25639[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_23019[(4)]))){
var statearr_23115_25640 = state_23019;
(statearr_23115_25640[(1)] = cljs.core.first((state_23019[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25641 = state_23019;
state_23019 = G__25641;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_23019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_23019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_23121 = f__21958__auto__();
(statearr_23121[(6)] = c__21957__auto___25610);

return statearr_23121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21957__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_23154){
var state_val_23155 = (state_23154[(1)]);
if((state_val_23155 === (7))){
var inst_23150 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23161_25643 = state_23154__$1;
(statearr_23161_25643[(2)] = inst_23150);

(statearr_23161_25643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (1))){
var inst_23131 = init;
var inst_23132 = inst_23131;
var state_23154__$1 = (function (){var statearr_23162 = state_23154;
(statearr_23162[(7)] = inst_23132);

return statearr_23162;
})();
var statearr_23167_25646 = state_23154__$1;
(statearr_23167_25646[(2)] = null);

(statearr_23167_25646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (4))){
var inst_23135 = (state_23154[(8)]);
var inst_23135__$1 = (state_23154[(2)]);
var inst_23136 = (inst_23135__$1 == null);
var state_23154__$1 = (function (){var statearr_23170 = state_23154;
(statearr_23170[(8)] = inst_23135__$1);

return statearr_23170;
})();
if(cljs.core.truth_(inst_23136)){
var statearr_23171_25650 = state_23154__$1;
(statearr_23171_25650[(1)] = (5));

} else {
var statearr_23172_25651 = state_23154__$1;
(statearr_23172_25651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (6))){
var inst_23140 = (state_23154[(9)]);
var inst_23135 = (state_23154[(8)]);
var inst_23132 = (state_23154[(7)]);
var inst_23140__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23132,inst_23135) : f.call(null, inst_23132,inst_23135));
var inst_23142 = cljs.core.reduced_QMARK_(inst_23140__$1);
var state_23154__$1 = (function (){var statearr_23176 = state_23154;
(statearr_23176[(9)] = inst_23140__$1);

return statearr_23176;
})();
if(inst_23142){
var statearr_23177_25657 = state_23154__$1;
(statearr_23177_25657[(1)] = (8));

} else {
var statearr_23178_25658 = state_23154__$1;
(statearr_23178_25658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (3))){
var inst_23152 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23154__$1,inst_23152);
} else {
if((state_val_23155 === (2))){
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23154__$1,(4),ch);
} else {
if((state_val_23155 === (9))){
var inst_23140 = (state_23154[(9)]);
var inst_23132 = inst_23140;
var state_23154__$1 = (function (){var statearr_23183 = state_23154;
(statearr_23183[(7)] = inst_23132);

return statearr_23183;
})();
var statearr_23184_25661 = state_23154__$1;
(statearr_23184_25661[(2)] = null);

(statearr_23184_25661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (5))){
var inst_23132 = (state_23154[(7)]);
var state_23154__$1 = state_23154;
var statearr_23185_25664 = state_23154__$1;
(statearr_23185_25664[(2)] = inst_23132);

(statearr_23185_25664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (10))){
var inst_23148 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23190_25666 = state_23154__$1;
(statearr_23190_25666[(2)] = inst_23148);

(statearr_23190_25666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (8))){
var inst_23140 = (state_23154[(9)]);
var inst_23144 = cljs.core.deref(inst_23140);
var state_23154__$1 = state_23154;
var statearr_23192_25668 = state_23154__$1;
(statearr_23192_25668[(2)] = inst_23144);

(statearr_23192_25668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21606__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21606__auto____0 = (function (){
var statearr_23195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23195[(0)] = cljs$core$async$reduce_$_state_machine__21606__auto__);

(statearr_23195[(1)] = (1));

return statearr_23195;
});
var cljs$core$async$reduce_$_state_machine__21606__auto____1 = (function (state_23154){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_23154);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e23197){var ex__21609__auto__ = e23197;
var statearr_23198_25669 = state_23154;
(statearr_23198_25669[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_23154[(4)]))){
var statearr_23199_25670 = state_23154;
(statearr_23199_25670[(1)] = cljs.core.first((state_23154[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25671 = state_23154;
state_23154 = G__25671;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21606__auto__ = function(state_23154){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21606__auto____1.call(this,state_23154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21606__auto____0;
cljs$core$async$reduce_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21606__auto____1;
return cljs$core$async$reduce_$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_23207 = f__21958__auto__();
(statearr_23207[(6)] = c__21957__auto__);

return statearr_23207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));

return c__21957__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__21957__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_23214){
var state_val_23215 = (state_23214[(1)]);
if((state_val_23215 === (1))){
var inst_23209 = cljs.core.async.reduce(f__$1,init,ch);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23214__$1,(2),inst_23209);
} else {
if((state_val_23215 === (2))){
var inst_23211 = (state_23214[(2)]);
var inst_23212 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_23211) : f__$1.call(null, inst_23211));
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23214__$1,inst_23212);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21606__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21606__auto____0 = (function (){
var statearr_23234 = [null,null,null,null,null,null,null];
(statearr_23234[(0)] = cljs$core$async$transduce_$_state_machine__21606__auto__);

(statearr_23234[(1)] = (1));

return statearr_23234;
});
var cljs$core$async$transduce_$_state_machine__21606__auto____1 = (function (state_23214){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_23214);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e23240){var ex__21609__auto__ = e23240;
var statearr_23241_25677 = state_23214;
(statearr_23241_25677[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_23214[(4)]))){
var statearr_23242_25678 = state_23214;
(statearr_23242_25678[(1)] = cljs.core.first((state_23214[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25679 = state_23214;
state_23214 = G__25679;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21606__auto__ = function(state_23214){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21606__auto____1.call(this,state_23214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21606__auto____0;
cljs$core$async$transduce_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21606__auto____1;
return cljs$core$async$transduce_$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_23244 = f__21958__auto__();
(statearr_23244[(6)] = c__21957__auto__);

return statearr_23244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));

return c__21957__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__23250 = arguments.length;
switch (G__23250) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21957__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_23363){
var state_val_23364 = (state_23363[(1)]);
if((state_val_23364 === (7))){
var inst_23345 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
var statearr_23365_25693 = state_23363__$1;
(statearr_23365_25693[(2)] = inst_23345);

(statearr_23365_25693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (1))){
var inst_23255 = cljs.core.seq(coll);
var inst_23256 = inst_23255;
var state_23363__$1 = (function (){var statearr_23366 = state_23363;
(statearr_23366[(7)] = inst_23256);

return statearr_23366;
})();
var statearr_23367_25697 = state_23363__$1;
(statearr_23367_25697[(2)] = null);

(statearr_23367_25697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (4))){
var inst_23256 = (state_23363[(7)]);
var inst_23343 = cljs.core.first(inst_23256);
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23363__$1,(7),ch,inst_23343);
} else {
if((state_val_23364 === (13))){
var inst_23357 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
var statearr_23368_25699 = state_23363__$1;
(statearr_23368_25699[(2)] = inst_23357);

(statearr_23368_25699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (6))){
var inst_23348 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
if(cljs.core.truth_(inst_23348)){
var statearr_23369_25701 = state_23363__$1;
(statearr_23369_25701[(1)] = (8));

} else {
var statearr_23370_25702 = state_23363__$1;
(statearr_23370_25702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (3))){
var inst_23361 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23363__$1,inst_23361);
} else {
if((state_val_23364 === (12))){
var state_23363__$1 = state_23363;
var statearr_23371_25703 = state_23363__$1;
(statearr_23371_25703[(2)] = null);

(statearr_23371_25703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (2))){
var inst_23256 = (state_23363[(7)]);
var state_23363__$1 = state_23363;
if(cljs.core.truth_(inst_23256)){
var statearr_23372_25704 = state_23363__$1;
(statearr_23372_25704[(1)] = (4));

} else {
var statearr_23373_25705 = state_23363__$1;
(statearr_23373_25705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (11))){
var inst_23354 = cljs.core.async.close_BANG_(ch);
var state_23363__$1 = state_23363;
var statearr_23374_25706 = state_23363__$1;
(statearr_23374_25706[(2)] = inst_23354);

(statearr_23374_25706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (9))){
var state_23363__$1 = state_23363;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23375_25707 = state_23363__$1;
(statearr_23375_25707[(1)] = (11));

} else {
var statearr_23376_25708 = state_23363__$1;
(statearr_23376_25708[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (5))){
var inst_23256 = (state_23363[(7)]);
var state_23363__$1 = state_23363;
var statearr_23377_25709 = state_23363__$1;
(statearr_23377_25709[(2)] = inst_23256);

(statearr_23377_25709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (10))){
var inst_23359 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
var statearr_23378_25710 = state_23363__$1;
(statearr_23378_25710[(2)] = inst_23359);

(statearr_23378_25710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (8))){
var inst_23256 = (state_23363[(7)]);
var inst_23350 = cljs.core.next(inst_23256);
var inst_23256__$1 = inst_23350;
var state_23363__$1 = (function (){var statearr_23379 = state_23363;
(statearr_23379[(7)] = inst_23256__$1);

return statearr_23379;
})();
var statearr_23380_25711 = state_23363__$1;
(statearr_23380_25711[(2)] = null);

(statearr_23380_25711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_23381 = [null,null,null,null,null,null,null,null];
(statearr_23381[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_23381[(1)] = (1));

return statearr_23381;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_23363){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_23363);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e23382){var ex__21609__auto__ = e23382;
var statearr_23383_25712 = state_23363;
(statearr_23383_25712[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_23363[(4)]))){
var statearr_23384_25716 = state_23363;
(statearr_23384_25716[(1)] = cljs.core.first((state_23363[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25717 = state_23363;
state_23363 = G__25717;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_23363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_23363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_23385 = f__21958__auto__();
(statearr_23385[(6)] = c__21957__auto__);

return statearr_23385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));

return c__21957__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23389 = arguments.length;
switch (G__23389) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25723 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25723(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25724 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25724(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25725 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25725(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25729 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25729(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23414 = (function (ch,cs,meta23415){
this.ch = ch;
this.cs = cs;
this.meta23415 = meta23415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23416,meta23415__$1){
var self__ = this;
var _23416__$1 = this;
return (new cljs.core.async.t_cljs$core$async23414(self__.ch,self__.cs,meta23415__$1));
}));

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23416){
var self__ = this;
var _23416__$1 = this;
return self__.meta23415;
}));

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23414.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23415","meta23415",326071745,null)], null);
}));

(cljs.core.async.t_cljs$core$async23414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23414");

(cljs.core.async.t_cljs$core$async23414.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23414.
 */
cljs.core.async.__GT_t_cljs$core$async23414 = (function cljs$core$async$__GT_t_cljs$core$async23414(ch,cs,meta23415){
return (new cljs.core.async.t_cljs$core$async23414(ch,cs,meta23415));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async23414(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21957__auto___25731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_23641){
var state_val_23645 = (state_23641[(1)]);
if((state_val_23645 === (7))){
var inst_23633 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23656_25733 = state_23641__$1;
(statearr_23656_25733[(2)] = inst_23633);

(statearr_23656_25733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (20))){
var inst_23493 = (state_23641[(7)]);
var inst_23505 = cljs.core.first(inst_23493);
var inst_23506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23505,(0),null);
var inst_23507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23505,(1),null);
var state_23641__$1 = (function (){var statearr_23661 = state_23641;
(statearr_23661[(8)] = inst_23506);

return statearr_23661;
})();
if(cljs.core.truth_(inst_23507)){
var statearr_23664_25737 = state_23641__$1;
(statearr_23664_25737[(1)] = (22));

} else {
var statearr_23665_25738 = state_23641__$1;
(statearr_23665_25738[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (27))){
var inst_23547 = (state_23641[(9)]);
var inst_23558 = (state_23641[(10)]);
var inst_23545 = (state_23641[(11)]);
var inst_23452 = (state_23641[(12)]);
var inst_23558__$1 = cljs.core._nth(inst_23545,inst_23547);
var inst_23559 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23558__$1,inst_23452,done);
var state_23641__$1 = (function (){var statearr_23674 = state_23641;
(statearr_23674[(10)] = inst_23558__$1);

return statearr_23674;
})();
if(cljs.core.truth_(inst_23559)){
var statearr_23677_25741 = state_23641__$1;
(statearr_23677_25741[(1)] = (30));

} else {
var statearr_23681_25742 = state_23641__$1;
(statearr_23681_25742[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (1))){
var state_23641__$1 = state_23641;
var statearr_23687_25743 = state_23641__$1;
(statearr_23687_25743[(2)] = null);

(statearr_23687_25743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (24))){
var inst_23493 = (state_23641[(7)]);
var inst_23517 = (state_23641[(2)]);
var inst_23518 = cljs.core.next(inst_23493);
var inst_23461 = inst_23518;
var inst_23462 = null;
var inst_23463 = (0);
var inst_23464 = (0);
var state_23641__$1 = (function (){var statearr_23690 = state_23641;
(statearr_23690[(13)] = inst_23462);

(statearr_23690[(14)] = inst_23461);

(statearr_23690[(15)] = inst_23464);

(statearr_23690[(16)] = inst_23463);

(statearr_23690[(17)] = inst_23517);

return statearr_23690;
})();
var statearr_23691_25744 = state_23641__$1;
(statearr_23691_25744[(2)] = null);

(statearr_23691_25744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (39))){
var state_23641__$1 = state_23641;
var statearr_23703_25745 = state_23641__$1;
(statearr_23703_25745[(2)] = null);

(statearr_23703_25745[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (4))){
var inst_23452 = (state_23641[(12)]);
var inst_23452__$1 = (state_23641[(2)]);
var inst_23453 = (inst_23452__$1 == null);
var state_23641__$1 = (function (){var statearr_23711 = state_23641;
(statearr_23711[(12)] = inst_23452__$1);

return statearr_23711;
})();
if(cljs.core.truth_(inst_23453)){
var statearr_23712_25749 = state_23641__$1;
(statearr_23712_25749[(1)] = (5));

} else {
var statearr_23713_25751 = state_23641__$1;
(statearr_23713_25751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (15))){
var inst_23462 = (state_23641[(13)]);
var inst_23461 = (state_23641[(14)]);
var inst_23464 = (state_23641[(15)]);
var inst_23463 = (state_23641[(16)]);
var inst_23489 = (state_23641[(2)]);
var inst_23490 = (inst_23464 + (1));
var tmp23696 = inst_23462;
var tmp23697 = inst_23461;
var tmp23698 = inst_23463;
var inst_23461__$1 = tmp23697;
var inst_23462__$1 = tmp23696;
var inst_23463__$1 = tmp23698;
var inst_23464__$1 = inst_23490;
var state_23641__$1 = (function (){var statearr_23728 = state_23641;
(statearr_23728[(18)] = inst_23489);

(statearr_23728[(13)] = inst_23462__$1);

(statearr_23728[(14)] = inst_23461__$1);

(statearr_23728[(15)] = inst_23464__$1);

(statearr_23728[(16)] = inst_23463__$1);

return statearr_23728;
})();
var statearr_23731_25752 = state_23641__$1;
(statearr_23731_25752[(2)] = null);

(statearr_23731_25752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (21))){
var inst_23521 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23740_25753 = state_23641__$1;
(statearr_23740_25753[(2)] = inst_23521);

(statearr_23740_25753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (31))){
var inst_23558 = (state_23641[(10)]);
var inst_23566 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_23558);
var state_23641__$1 = state_23641;
var statearr_23744_25754 = state_23641__$1;
(statearr_23744_25754[(2)] = inst_23566);

(statearr_23744_25754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (32))){
var inst_23547 = (state_23641[(9)]);
var inst_23544 = (state_23641[(19)]);
var inst_23545 = (state_23641[(11)]);
var inst_23546 = (state_23641[(20)]);
var inst_23568 = (state_23641[(2)]);
var inst_23569 = (inst_23547 + (1));
var tmp23733 = inst_23544;
var tmp23734 = inst_23545;
var tmp23735 = inst_23546;
var inst_23544__$1 = tmp23733;
var inst_23545__$1 = tmp23734;
var inst_23546__$1 = tmp23735;
var inst_23547__$1 = inst_23569;
var state_23641__$1 = (function (){var statearr_23748 = state_23641;
(statearr_23748[(21)] = inst_23568);

(statearr_23748[(9)] = inst_23547__$1);

(statearr_23748[(19)] = inst_23544__$1);

(statearr_23748[(11)] = inst_23545__$1);

(statearr_23748[(20)] = inst_23546__$1);

return statearr_23748;
})();
var statearr_23754_25757 = state_23641__$1;
(statearr_23754_25757[(2)] = null);

(statearr_23754_25757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (40))){
var inst_23589 = (state_23641[(22)]);
var inst_23593 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_23589);
var state_23641__$1 = state_23641;
var statearr_23761_25758 = state_23641__$1;
(statearr_23761_25758[(2)] = inst_23593);

(statearr_23761_25758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (33))){
var inst_23576 = (state_23641[(23)]);
var inst_23579 = cljs.core.chunked_seq_QMARK_(inst_23576);
var state_23641__$1 = state_23641;
if(inst_23579){
var statearr_23766_25759 = state_23641__$1;
(statearr_23766_25759[(1)] = (36));

} else {
var statearr_23767_25760 = state_23641__$1;
(statearr_23767_25760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (13))){
var inst_23481 = (state_23641[(24)]);
var inst_23486 = cljs.core.async.close_BANG_(inst_23481);
var state_23641__$1 = state_23641;
var statearr_23775_25761 = state_23641__$1;
(statearr_23775_25761[(2)] = inst_23486);

(statearr_23775_25761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (22))){
var inst_23506 = (state_23641[(8)]);
var inst_23510 = cljs.core.async.close_BANG_(inst_23506);
var state_23641__$1 = state_23641;
var statearr_23780_25762 = state_23641__$1;
(statearr_23780_25762[(2)] = inst_23510);

(statearr_23780_25762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (36))){
var inst_23576 = (state_23641[(23)]);
var inst_23583 = cljs.core.chunk_first(inst_23576);
var inst_23585 = cljs.core.chunk_rest(inst_23576);
var inst_23586 = cljs.core.count(inst_23583);
var inst_23544 = inst_23585;
var inst_23545 = inst_23583;
var inst_23546 = inst_23586;
var inst_23547 = (0);
var state_23641__$1 = (function (){var statearr_23784 = state_23641;
(statearr_23784[(9)] = inst_23547);

(statearr_23784[(19)] = inst_23544);

(statearr_23784[(11)] = inst_23545);

(statearr_23784[(20)] = inst_23546);

return statearr_23784;
})();
var statearr_23787_25763 = state_23641__$1;
(statearr_23787_25763[(2)] = null);

(statearr_23787_25763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (41))){
var inst_23576 = (state_23641[(23)]);
var inst_23596 = (state_23641[(2)]);
var inst_23598 = cljs.core.next(inst_23576);
var inst_23544 = inst_23598;
var inst_23545 = null;
var inst_23546 = (0);
var inst_23547 = (0);
var state_23641__$1 = (function (){var statearr_23792 = state_23641;
(statearr_23792[(9)] = inst_23547);

(statearr_23792[(19)] = inst_23544);

(statearr_23792[(11)] = inst_23545);

(statearr_23792[(25)] = inst_23596);

(statearr_23792[(20)] = inst_23546);

return statearr_23792;
})();
var statearr_23793_25764 = state_23641__$1;
(statearr_23793_25764[(2)] = null);

(statearr_23793_25764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (43))){
var state_23641__$1 = state_23641;
var statearr_23796_25765 = state_23641__$1;
(statearr_23796_25765[(2)] = null);

(statearr_23796_25765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (29))){
var inst_23610 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23797_25766 = state_23641__$1;
(statearr_23797_25766[(2)] = inst_23610);

(statearr_23797_25766[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (44))){
var inst_23630 = (state_23641[(2)]);
var state_23641__$1 = (function (){var statearr_23798 = state_23641;
(statearr_23798[(26)] = inst_23630);

return statearr_23798;
})();
var statearr_23799_25767 = state_23641__$1;
(statearr_23799_25767[(2)] = null);

(statearr_23799_25767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (6))){
var inst_23535 = (state_23641[(27)]);
var inst_23534 = cljs.core.deref(cs);
var inst_23535__$1 = cljs.core.keys(inst_23534);
var inst_23536 = cljs.core.count(inst_23535__$1);
var inst_23537 = cljs.core.reset_BANG_(dctr,inst_23536);
var inst_23542 = cljs.core.seq(inst_23535__$1);
var inst_23544 = inst_23542;
var inst_23545 = null;
var inst_23546 = (0);
var inst_23547 = (0);
var state_23641__$1 = (function (){var statearr_23802 = state_23641;
(statearr_23802[(28)] = inst_23537);

(statearr_23802[(9)] = inst_23547);

(statearr_23802[(19)] = inst_23544);

(statearr_23802[(11)] = inst_23545);

(statearr_23802[(27)] = inst_23535__$1);

(statearr_23802[(20)] = inst_23546);

return statearr_23802;
})();
var statearr_23805_25770 = state_23641__$1;
(statearr_23805_25770[(2)] = null);

(statearr_23805_25770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (28))){
var inst_23544 = (state_23641[(19)]);
var inst_23576 = (state_23641[(23)]);
var inst_23576__$1 = cljs.core.seq(inst_23544);
var state_23641__$1 = (function (){var statearr_23810 = state_23641;
(statearr_23810[(23)] = inst_23576__$1);

return statearr_23810;
})();
if(inst_23576__$1){
var statearr_23811_25772 = state_23641__$1;
(statearr_23811_25772[(1)] = (33));

} else {
var statearr_23812_25773 = state_23641__$1;
(statearr_23812_25773[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (25))){
var inst_23547 = (state_23641[(9)]);
var inst_23546 = (state_23641[(20)]);
var inst_23552 = (inst_23547 < inst_23546);
var inst_23553 = inst_23552;
var state_23641__$1 = state_23641;
if(cljs.core.truth_(inst_23553)){
var statearr_23818_25775 = state_23641__$1;
(statearr_23818_25775[(1)] = (27));

} else {
var statearr_23819_25776 = state_23641__$1;
(statearr_23819_25776[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (34))){
var state_23641__$1 = state_23641;
var statearr_23827_25777 = state_23641__$1;
(statearr_23827_25777[(2)] = null);

(statearr_23827_25777[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (17))){
var state_23641__$1 = state_23641;
var statearr_23828_25778 = state_23641__$1;
(statearr_23828_25778[(2)] = null);

(statearr_23828_25778[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (3))){
var inst_23635 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23641__$1,inst_23635);
} else {
if((state_val_23645 === (12))){
var inst_23527 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23830_25779 = state_23641__$1;
(statearr_23830_25779[(2)] = inst_23527);

(statearr_23830_25779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (2))){
var state_23641__$1 = state_23641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23641__$1,(4),ch);
} else {
if((state_val_23645 === (23))){
var state_23641__$1 = state_23641;
var statearr_23836_25780 = state_23641__$1;
(statearr_23836_25780[(2)] = null);

(statearr_23836_25780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (35))){
var inst_23605 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23837_25784 = state_23641__$1;
(statearr_23837_25784[(2)] = inst_23605);

(statearr_23837_25784[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (19))){
var inst_23493 = (state_23641[(7)]);
var inst_23497 = cljs.core.chunk_first(inst_23493);
var inst_23498 = cljs.core.chunk_rest(inst_23493);
var inst_23499 = cljs.core.count(inst_23497);
var inst_23461 = inst_23498;
var inst_23462 = inst_23497;
var inst_23463 = inst_23499;
var inst_23464 = (0);
var state_23641__$1 = (function (){var statearr_23838 = state_23641;
(statearr_23838[(13)] = inst_23462);

(statearr_23838[(14)] = inst_23461);

(statearr_23838[(15)] = inst_23464);

(statearr_23838[(16)] = inst_23463);

return statearr_23838;
})();
var statearr_23839_25785 = state_23641__$1;
(statearr_23839_25785[(2)] = null);

(statearr_23839_25785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (11))){
var inst_23493 = (state_23641[(7)]);
var inst_23461 = (state_23641[(14)]);
var inst_23493__$1 = cljs.core.seq(inst_23461);
var state_23641__$1 = (function (){var statearr_23840 = state_23641;
(statearr_23840[(7)] = inst_23493__$1);

return statearr_23840;
})();
if(inst_23493__$1){
var statearr_23841_25786 = state_23641__$1;
(statearr_23841_25786[(1)] = (16));

} else {
var statearr_23842_25787 = state_23641__$1;
(statearr_23842_25787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (9))){
var inst_23529 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23843_25792 = state_23641__$1;
(statearr_23843_25792[(2)] = inst_23529);

(statearr_23843_25792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (5))){
var inst_23459 = cljs.core.deref(cs);
var inst_23460 = cljs.core.seq(inst_23459);
var inst_23461 = inst_23460;
var inst_23462 = null;
var inst_23463 = (0);
var inst_23464 = (0);
var state_23641__$1 = (function (){var statearr_23845 = state_23641;
(statearr_23845[(13)] = inst_23462);

(statearr_23845[(14)] = inst_23461);

(statearr_23845[(15)] = inst_23464);

(statearr_23845[(16)] = inst_23463);

return statearr_23845;
})();
var statearr_23846_25797 = state_23641__$1;
(statearr_23846_25797[(2)] = null);

(statearr_23846_25797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (14))){
var state_23641__$1 = state_23641;
var statearr_23847_25801 = state_23641__$1;
(statearr_23847_25801[(2)] = null);

(statearr_23847_25801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (45))){
var inst_23627 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23848_25802 = state_23641__$1;
(statearr_23848_25802[(2)] = inst_23627);

(statearr_23848_25802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (26))){
var inst_23535 = (state_23641[(27)]);
var inst_23612 = (state_23641[(2)]);
var inst_23619 = cljs.core.seq(inst_23535);
var state_23641__$1 = (function (){var statearr_23849 = state_23641;
(statearr_23849[(29)] = inst_23612);

return statearr_23849;
})();
if(inst_23619){
var statearr_23850_25803 = state_23641__$1;
(statearr_23850_25803[(1)] = (42));

} else {
var statearr_23851_25804 = state_23641__$1;
(statearr_23851_25804[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (16))){
var inst_23493 = (state_23641[(7)]);
var inst_23495 = cljs.core.chunked_seq_QMARK_(inst_23493);
var state_23641__$1 = state_23641;
if(inst_23495){
var statearr_23854_25805 = state_23641__$1;
(statearr_23854_25805[(1)] = (19));

} else {
var statearr_23856_25806 = state_23641__$1;
(statearr_23856_25806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (38))){
var inst_23602 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23859_25807 = state_23641__$1;
(statearr_23859_25807[(2)] = inst_23602);

(statearr_23859_25807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (30))){
var state_23641__$1 = state_23641;
var statearr_23860_25808 = state_23641__$1;
(statearr_23860_25808[(2)] = null);

(statearr_23860_25808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (10))){
var inst_23462 = (state_23641[(13)]);
var inst_23464 = (state_23641[(15)]);
var inst_23479 = cljs.core._nth(inst_23462,inst_23464);
var inst_23481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23479,(0),null);
var inst_23482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23479,(1),null);
var state_23641__$1 = (function (){var statearr_23870 = state_23641;
(statearr_23870[(24)] = inst_23481);

return statearr_23870;
})();
if(cljs.core.truth_(inst_23482)){
var statearr_23874_25811 = state_23641__$1;
(statearr_23874_25811[(1)] = (13));

} else {
var statearr_23879_25812 = state_23641__$1;
(statearr_23879_25812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (18))){
var inst_23524 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23880_25813 = state_23641__$1;
(statearr_23880_25813[(2)] = inst_23524);

(statearr_23880_25813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (42))){
var state_23641__$1 = state_23641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23641__$1,(45),dchan);
} else {
if((state_val_23645 === (37))){
var inst_23589 = (state_23641[(22)]);
var inst_23576 = (state_23641[(23)]);
var inst_23452 = (state_23641[(12)]);
var inst_23589__$1 = cljs.core.first(inst_23576);
var inst_23590 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23589__$1,inst_23452,done);
var state_23641__$1 = (function (){var statearr_23881 = state_23641;
(statearr_23881[(22)] = inst_23589__$1);

return statearr_23881;
})();
if(cljs.core.truth_(inst_23590)){
var statearr_23882_25817 = state_23641__$1;
(statearr_23882_25817[(1)] = (39));

} else {
var statearr_23883_25818 = state_23641__$1;
(statearr_23883_25818[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (8))){
var inst_23464 = (state_23641[(15)]);
var inst_23463 = (state_23641[(16)]);
var inst_23466 = (inst_23464 < inst_23463);
var inst_23467 = inst_23466;
var state_23641__$1 = state_23641;
if(cljs.core.truth_(inst_23467)){
var statearr_23885_25819 = state_23641__$1;
(statearr_23885_25819[(1)] = (10));

} else {
var statearr_23887_25823 = state_23641__$1;
(statearr_23887_25823[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__21606__auto__ = null;
var cljs$core$async$mult_$_state_machine__21606__auto____0 = (function (){
var statearr_23888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23888[(0)] = cljs$core$async$mult_$_state_machine__21606__auto__);

(statearr_23888[(1)] = (1));

return statearr_23888;
});
var cljs$core$async$mult_$_state_machine__21606__auto____1 = (function (state_23641){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_23641);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e23889){var ex__21609__auto__ = e23889;
var statearr_23890_25831 = state_23641;
(statearr_23890_25831[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_23641[(4)]))){
var statearr_23894_25832 = state_23641;
(statearr_23894_25832[(1)] = cljs.core.first((state_23641[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25833 = state_23641;
state_23641 = G__25833;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21606__auto__ = function(state_23641){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21606__auto____1.call(this,state_23641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21606__auto____0;
cljs$core$async$mult_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21606__auto____1;
return cljs$core$async$mult_$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_23895 = f__21958__auto__();
(statearr_23895[(6)] = c__21957__auto___25731);

return statearr_23895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23898 = arguments.length;
switch (G__23898) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25841 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25841(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25849 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25849(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25853 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25853(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25857 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25857(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25865 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25865(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25872 = arguments.length;
var i__5727__auto___25873 = (0);
while(true){
if((i__5727__auto___25873 < len__5726__auto___25872)){
args__5732__auto__.push((arguments[i__5727__auto___25873]));

var G__25874 = (i__5727__auto___25873 + (1));
i__5727__auto___25873 = G__25874;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23926){
var map__23927 = p__23926;
var map__23927__$1 = cljs.core.__destructure_map(map__23927);
var opts = map__23927__$1;
var statearr_23928_25879 = state;
(statearr_23928_25879[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_23932_25880 = state;
(statearr_23932_25880[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_23935_25881 = state;
(statearr_23935_25881[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23918){
var G__23919 = cljs.core.first(seq23918);
var seq23918__$1 = cljs.core.next(seq23918);
var G__23920 = cljs.core.first(seq23918__$1);
var seq23918__$2 = cljs.core.next(seq23918__$1);
var G__23921 = cljs.core.first(seq23918__$2);
var seq23918__$3 = cljs.core.next(seq23918__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23919,G__23920,G__23921,seq23918__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23954 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23955){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23955 = meta23955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23956,meta23955__$1){
var self__ = this;
var _23956__$1 = this;
return (new cljs.core.async.t_cljs$core$async23954(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23955__$1));
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23956){
var self__ = this;
var _23956__$1 = this;
return self__.meta23955;
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23955","meta23955",-43819457,null)], null);
}));

(cljs.core.async.t_cljs$core$async23954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23954");

(cljs.core.async.t_cljs$core$async23954.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23954.
 */
cljs.core.async.__GT_t_cljs$core$async23954 = (function cljs$core$async$__GT_t_cljs$core$async23954(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23955){
return (new cljs.core.async.t_cljs$core$async23954(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23955));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async23954(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21957__auto___25889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_24048){
var state_val_24049 = (state_24048[(1)]);
if((state_val_24049 === (7))){
var inst_24004 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
if(cljs.core.truth_(inst_24004)){
var statearr_24053_25892 = state_24048__$1;
(statearr_24053_25892[(1)] = (8));

} else {
var statearr_24054_25894 = state_24048__$1;
(statearr_24054_25894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (20))){
var inst_23996 = (state_24048[(7)]);
var state_24048__$1 = state_24048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24048__$1,(23),out,inst_23996);
} else {
if((state_val_24049 === (1))){
var inst_23971 = calc_state();
var inst_23973 = cljs.core.__destructure_map(inst_23971);
var inst_23974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23973,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23973,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23973,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23978 = inst_23971;
var state_24048__$1 = (function (){var statearr_24058 = state_24048;
(statearr_24058[(8)] = inst_23974);

(statearr_24058[(9)] = inst_23977);

(statearr_24058[(10)] = inst_23976);

(statearr_24058[(11)] = inst_23978);

return statearr_24058;
})();
var statearr_24071_25895 = state_24048__$1;
(statearr_24071_25895[(2)] = null);

(statearr_24071_25895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (24))){
var inst_23985 = (state_24048[(12)]);
var inst_23978 = inst_23985;
var state_24048__$1 = (function (){var statearr_24074 = state_24048;
(statearr_24074[(11)] = inst_23978);

return statearr_24074;
})();
var statearr_24076_25896 = state_24048__$1;
(statearr_24076_25896[(2)] = null);

(statearr_24076_25896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (4))){
var inst_23998 = (state_24048[(13)]);
var inst_23996 = (state_24048[(7)]);
var inst_23994 = (state_24048[(2)]);
var inst_23996__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23994,(0),null);
var inst_23997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23994,(1),null);
var inst_23998__$1 = (inst_23996__$1 == null);
var state_24048__$1 = (function (){var statearr_24077 = state_24048;
(statearr_24077[(13)] = inst_23998__$1);

(statearr_24077[(14)] = inst_23997);

(statearr_24077[(7)] = inst_23996__$1);

return statearr_24077;
})();
if(cljs.core.truth_(inst_23998__$1)){
var statearr_24078_25899 = state_24048__$1;
(statearr_24078_25899[(1)] = (5));

} else {
var statearr_24080_25900 = state_24048__$1;
(statearr_24080_25900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (15))){
var inst_23986 = (state_24048[(15)]);
var inst_24021 = (state_24048[(16)]);
var inst_24021__$1 = cljs.core.empty_QMARK_(inst_23986);
var state_24048__$1 = (function (){var statearr_24084 = state_24048;
(statearr_24084[(16)] = inst_24021__$1);

return statearr_24084;
})();
if(inst_24021__$1){
var statearr_24085_25901 = state_24048__$1;
(statearr_24085_25901[(1)] = (17));

} else {
var statearr_24086_25902 = state_24048__$1;
(statearr_24086_25902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (21))){
var inst_23985 = (state_24048[(12)]);
var inst_23978 = inst_23985;
var state_24048__$1 = (function (){var statearr_24092 = state_24048;
(statearr_24092[(11)] = inst_23978);

return statearr_24092;
})();
var statearr_24093_25903 = state_24048__$1;
(statearr_24093_25903[(2)] = null);

(statearr_24093_25903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (13))){
var inst_24014 = (state_24048[(2)]);
var inst_24015 = calc_state();
var inst_23978 = inst_24015;
var state_24048__$1 = (function (){var statearr_24094 = state_24048;
(statearr_24094[(17)] = inst_24014);

(statearr_24094[(11)] = inst_23978);

return statearr_24094;
})();
var statearr_24095_25906 = state_24048__$1;
(statearr_24095_25906[(2)] = null);

(statearr_24095_25906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (22))){
var inst_24042 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24097_25907 = state_24048__$1;
(statearr_24097_25907[(2)] = inst_24042);

(statearr_24097_25907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (6))){
var inst_23997 = (state_24048[(14)]);
var inst_24002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23997,change);
var state_24048__$1 = state_24048;
var statearr_24099_25908 = state_24048__$1;
(statearr_24099_25908[(2)] = inst_24002);

(statearr_24099_25908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (25))){
var state_24048__$1 = state_24048;
var statearr_24100_25909 = state_24048__$1;
(statearr_24100_25909[(2)] = null);

(statearr_24100_25909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (17))){
var inst_23987 = (state_24048[(18)]);
var inst_23997 = (state_24048[(14)]);
var inst_24024 = (inst_23987.cljs$core$IFn$_invoke$arity$1 ? inst_23987.cljs$core$IFn$_invoke$arity$1(inst_23997) : inst_23987.call(null, inst_23997));
var inst_24025 = cljs.core.not(inst_24024);
var state_24048__$1 = state_24048;
var statearr_24105_25910 = state_24048__$1;
(statearr_24105_25910[(2)] = inst_24025);

(statearr_24105_25910[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (3))){
var inst_24046 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24048__$1,inst_24046);
} else {
if((state_val_24049 === (12))){
var state_24048__$1 = state_24048;
var statearr_24109_25911 = state_24048__$1;
(statearr_24109_25911[(2)] = null);

(statearr_24109_25911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (2))){
var inst_23985 = (state_24048[(12)]);
var inst_23978 = (state_24048[(11)]);
var inst_23985__$1 = cljs.core.__destructure_map(inst_23978);
var inst_23986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23985__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23985__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23985__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24048__$1 = (function (){var statearr_24110 = state_24048;
(statearr_24110[(15)] = inst_23986);

(statearr_24110[(18)] = inst_23987);

(statearr_24110[(12)] = inst_23985__$1);

return statearr_24110;
})();
return cljs.core.async.ioc_alts_BANG_(state_24048__$1,(4),inst_23989);
} else {
if((state_val_24049 === (23))){
var inst_24033 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
if(cljs.core.truth_(inst_24033)){
var statearr_24114_25913 = state_24048__$1;
(statearr_24114_25913[(1)] = (24));

} else {
var statearr_24116_25914 = state_24048__$1;
(statearr_24116_25914[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (19))){
var inst_24028 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24119_25915 = state_24048__$1;
(statearr_24119_25915[(2)] = inst_24028);

(statearr_24119_25915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (11))){
var inst_23997 = (state_24048[(14)]);
var inst_24008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23997);
var state_24048__$1 = state_24048;
var statearr_24122_25916 = state_24048__$1;
(statearr_24122_25916[(2)] = inst_24008);

(statearr_24122_25916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (9))){
var inst_23986 = (state_24048[(15)]);
var inst_24018 = (state_24048[(19)]);
var inst_23997 = (state_24048[(14)]);
var inst_24018__$1 = (inst_23986.cljs$core$IFn$_invoke$arity$1 ? inst_23986.cljs$core$IFn$_invoke$arity$1(inst_23997) : inst_23986.call(null, inst_23997));
var state_24048__$1 = (function (){var statearr_24123 = state_24048;
(statearr_24123[(19)] = inst_24018__$1);

return statearr_24123;
})();
if(cljs.core.truth_(inst_24018__$1)){
var statearr_24124_25917 = state_24048__$1;
(statearr_24124_25917[(1)] = (14));

} else {
var statearr_24125_25918 = state_24048__$1;
(statearr_24125_25918[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (5))){
var inst_23998 = (state_24048[(13)]);
var state_24048__$1 = state_24048;
var statearr_24129_25919 = state_24048__$1;
(statearr_24129_25919[(2)] = inst_23998);

(statearr_24129_25919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (14))){
var inst_24018 = (state_24048[(19)]);
var state_24048__$1 = state_24048;
var statearr_24131_25921 = state_24048__$1;
(statearr_24131_25921[(2)] = inst_24018);

(statearr_24131_25921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (26))){
var inst_24038 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24132_25926 = state_24048__$1;
(statearr_24132_25926[(2)] = inst_24038);

(statearr_24132_25926[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (16))){
var inst_24030 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
if(cljs.core.truth_(inst_24030)){
var statearr_24133_25927 = state_24048__$1;
(statearr_24133_25927[(1)] = (20));

} else {
var statearr_24134_25928 = state_24048__$1;
(statearr_24134_25928[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (10))){
var inst_24044 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24136_25929 = state_24048__$1;
(statearr_24136_25929[(2)] = inst_24044);

(statearr_24136_25929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (18))){
var inst_24021 = (state_24048[(16)]);
var state_24048__$1 = state_24048;
var statearr_24137_25930 = state_24048__$1;
(statearr_24137_25930[(2)] = inst_24021);

(statearr_24137_25930[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (8))){
var inst_23996 = (state_24048[(7)]);
var inst_24006 = (inst_23996 == null);
var state_24048__$1 = state_24048;
if(cljs.core.truth_(inst_24006)){
var statearr_24138_25931 = state_24048__$1;
(statearr_24138_25931[(1)] = (11));

} else {
var statearr_24141_25932 = state_24048__$1;
(statearr_24141_25932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__21606__auto__ = null;
var cljs$core$async$mix_$_state_machine__21606__auto____0 = (function (){
var statearr_24153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24153[(0)] = cljs$core$async$mix_$_state_machine__21606__auto__);

(statearr_24153[(1)] = (1));

return statearr_24153;
});
var cljs$core$async$mix_$_state_machine__21606__auto____1 = (function (state_24048){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_24048);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e24165){var ex__21609__auto__ = e24165;
var statearr_24166_25934 = state_24048;
(statearr_24166_25934[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_24048[(4)]))){
var statearr_24167_25935 = state_24048;
(statearr_24167_25935[(1)] = cljs.core.first((state_24048[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25937 = state_24048;
state_24048 = G__25937;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21606__auto__ = function(state_24048){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21606__auto____1.call(this,state_24048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21606__auto____0;
cljs$core$async$mix_$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21606__auto____1;
return cljs$core$async$mix_$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_24168 = f__21958__auto__();
(statearr_24168[(6)] = c__21957__auto___25889);

return statearr_24168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25949 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25949(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25951 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25951(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25954 = (function() {
var G__25955 = null;
var G__25955__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__25955__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__25955 = function(p,v){
switch(arguments.length){
case 1:
return G__25955__1.call(this,p);
case 2:
return G__25955__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25955.cljs$core$IFn$_invoke$arity$1 = G__25955__1;
G__25955.cljs$core$IFn$_invoke$arity$2 = G__25955__2;
return G__25955;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24196 = arguments.length;
switch (G__24196) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25954(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25954(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24202 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24203){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24203 = meta24203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24204,meta24203__$1){
var self__ = this;
var _24204__$1 = this;
return (new cljs.core.async.t_cljs$core$async24202(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24203__$1));
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24204){
var self__ = this;
var _24204__$1 = this;
return self__.meta24203;
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24203","meta24203",-908665758,null)], null);
}));

(cljs.core.async.t_cljs$core$async24202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24202");

(cljs.core.async.t_cljs$core$async24202.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24202.
 */
cljs.core.async.__GT_t_cljs$core$async24202 = (function cljs$core$async$__GT_t_cljs$core$async24202(ch,topic_fn,buf_fn,mults,ensure_mult,meta24203){
return (new cljs.core.async.t_cljs$core$async24202(ch,topic_fn,buf_fn,mults,ensure_mult,meta24203));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24200 = arguments.length;
switch (G__24200) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__24198_SHARP_){
if(cljs.core.truth_((p1__24198_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24198_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24198_SHARP_.call(null, topic)))){
return p1__24198_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24198_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async24202(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21957__auto___25967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_24289){
var state_val_24290 = (state_24289[(1)]);
if((state_val_24290 === (7))){
var inst_24285 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
var statearr_24291_25968 = state_24289__$1;
(statearr_24291_25968[(2)] = inst_24285);

(statearr_24291_25968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (20))){
var state_24289__$1 = state_24289;
var statearr_24292_25969 = state_24289__$1;
(statearr_24292_25969[(2)] = null);

(statearr_24292_25969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (1))){
var state_24289__$1 = state_24289;
var statearr_24293_25971 = state_24289__$1;
(statearr_24293_25971[(2)] = null);

(statearr_24293_25971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (24))){
var inst_24265 = (state_24289[(7)]);
var inst_24276 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24265);
var state_24289__$1 = state_24289;
var statearr_24296_25973 = state_24289__$1;
(statearr_24296_25973[(2)] = inst_24276);

(statearr_24296_25973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (4))){
var inst_24216 = (state_24289[(8)]);
var inst_24216__$1 = (state_24289[(2)]);
var inst_24217 = (inst_24216__$1 == null);
var state_24289__$1 = (function (){var statearr_24301 = state_24289;
(statearr_24301[(8)] = inst_24216__$1);

return statearr_24301;
})();
if(cljs.core.truth_(inst_24217)){
var statearr_24302_25978 = state_24289__$1;
(statearr_24302_25978[(1)] = (5));

} else {
var statearr_24303_25979 = state_24289__$1;
(statearr_24303_25979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (15))){
var inst_24259 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
var statearr_24308_25980 = state_24289__$1;
(statearr_24308_25980[(2)] = inst_24259);

(statearr_24308_25980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (21))){
var inst_24282 = (state_24289[(2)]);
var state_24289__$1 = (function (){var statearr_24316 = state_24289;
(statearr_24316[(9)] = inst_24282);

return statearr_24316;
})();
var statearr_24317_25981 = state_24289__$1;
(statearr_24317_25981[(2)] = null);

(statearr_24317_25981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (13))){
var inst_24241 = (state_24289[(10)]);
var inst_24243 = cljs.core.chunked_seq_QMARK_(inst_24241);
var state_24289__$1 = state_24289;
if(inst_24243){
var statearr_24318_25982 = state_24289__$1;
(statearr_24318_25982[(1)] = (16));

} else {
var statearr_24321_25983 = state_24289__$1;
(statearr_24321_25983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (22))){
var inst_24272 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
if(cljs.core.truth_(inst_24272)){
var statearr_24322_25984 = state_24289__$1;
(statearr_24322_25984[(1)] = (23));

} else {
var statearr_24324_25985 = state_24289__$1;
(statearr_24324_25985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (6))){
var inst_24216 = (state_24289[(8)]);
var inst_24268 = (state_24289[(11)]);
var inst_24265 = (state_24289[(7)]);
var inst_24265__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24216) : topic_fn.call(null, inst_24216));
var inst_24267 = cljs.core.deref(mults);
var inst_24268__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24267,inst_24265__$1);
var state_24289__$1 = (function (){var statearr_24330 = state_24289;
(statearr_24330[(11)] = inst_24268__$1);

(statearr_24330[(7)] = inst_24265__$1);

return statearr_24330;
})();
if(cljs.core.truth_(inst_24268__$1)){
var statearr_24331_25986 = state_24289__$1;
(statearr_24331_25986[(1)] = (19));

} else {
var statearr_24332_25987 = state_24289__$1;
(statearr_24332_25987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (25))){
var inst_24278 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
var statearr_24334_25988 = state_24289__$1;
(statearr_24334_25988[(2)] = inst_24278);

(statearr_24334_25988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (17))){
var inst_24241 = (state_24289[(10)]);
var inst_24250 = cljs.core.first(inst_24241);
var inst_24251 = cljs.core.async.muxch_STAR_(inst_24250);
var inst_24252 = cljs.core.async.close_BANG_(inst_24251);
var inst_24253 = cljs.core.next(inst_24241);
var inst_24227 = inst_24253;
var inst_24228 = null;
var inst_24229 = (0);
var inst_24230 = (0);
var state_24289__$1 = (function (){var statearr_24340 = state_24289;
(statearr_24340[(12)] = inst_24252);

(statearr_24340[(13)] = inst_24227);

(statearr_24340[(14)] = inst_24228);

(statearr_24340[(15)] = inst_24230);

(statearr_24340[(16)] = inst_24229);

return statearr_24340;
})();
var statearr_24343_25991 = state_24289__$1;
(statearr_24343_25991[(2)] = null);

(statearr_24343_25991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (3))){
var inst_24287 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24289__$1,inst_24287);
} else {
if((state_val_24290 === (12))){
var inst_24261 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
var statearr_24346_25994 = state_24289__$1;
(statearr_24346_25994[(2)] = inst_24261);

(statearr_24346_25994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (2))){
var state_24289__$1 = state_24289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24289__$1,(4),ch);
} else {
if((state_val_24290 === (23))){
var state_24289__$1 = state_24289;
var statearr_24352_25995 = state_24289__$1;
(statearr_24352_25995[(2)] = null);

(statearr_24352_25995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (19))){
var inst_24216 = (state_24289[(8)]);
var inst_24268 = (state_24289[(11)]);
var inst_24270 = cljs.core.async.muxch_STAR_(inst_24268);
var state_24289__$1 = state_24289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24289__$1,(22),inst_24270,inst_24216);
} else {
if((state_val_24290 === (11))){
var inst_24227 = (state_24289[(13)]);
var inst_24241 = (state_24289[(10)]);
var inst_24241__$1 = cljs.core.seq(inst_24227);
var state_24289__$1 = (function (){var statearr_24356 = state_24289;
(statearr_24356[(10)] = inst_24241__$1);

return statearr_24356;
})();
if(inst_24241__$1){
var statearr_24358_25997 = state_24289__$1;
(statearr_24358_25997[(1)] = (13));

} else {
var statearr_24359_25998 = state_24289__$1;
(statearr_24359_25998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (9))){
var inst_24263 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
var statearr_24360_25999 = state_24289__$1;
(statearr_24360_25999[(2)] = inst_24263);

(statearr_24360_25999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (5))){
var inst_24224 = cljs.core.deref(mults);
var inst_24225 = cljs.core.vals(inst_24224);
var inst_24226 = cljs.core.seq(inst_24225);
var inst_24227 = inst_24226;
var inst_24228 = null;
var inst_24229 = (0);
var inst_24230 = (0);
var state_24289__$1 = (function (){var statearr_24364 = state_24289;
(statearr_24364[(13)] = inst_24227);

(statearr_24364[(14)] = inst_24228);

(statearr_24364[(15)] = inst_24230);

(statearr_24364[(16)] = inst_24229);

return statearr_24364;
})();
var statearr_24367_26000 = state_24289__$1;
(statearr_24367_26000[(2)] = null);

(statearr_24367_26000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (14))){
var state_24289__$1 = state_24289;
var statearr_24372_26001 = state_24289__$1;
(statearr_24372_26001[(2)] = null);

(statearr_24372_26001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (16))){
var inst_24241 = (state_24289[(10)]);
var inst_24245 = cljs.core.chunk_first(inst_24241);
var inst_24246 = cljs.core.chunk_rest(inst_24241);
var inst_24247 = cljs.core.count(inst_24245);
var inst_24227 = inst_24246;
var inst_24228 = inst_24245;
var inst_24229 = inst_24247;
var inst_24230 = (0);
var state_24289__$1 = (function (){var statearr_24377 = state_24289;
(statearr_24377[(13)] = inst_24227);

(statearr_24377[(14)] = inst_24228);

(statearr_24377[(15)] = inst_24230);

(statearr_24377[(16)] = inst_24229);

return statearr_24377;
})();
var statearr_24378_26002 = state_24289__$1;
(statearr_24378_26002[(2)] = null);

(statearr_24378_26002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (10))){
var inst_24227 = (state_24289[(13)]);
var inst_24228 = (state_24289[(14)]);
var inst_24230 = (state_24289[(15)]);
var inst_24229 = (state_24289[(16)]);
var inst_24235 = cljs.core._nth(inst_24228,inst_24230);
var inst_24236 = cljs.core.async.muxch_STAR_(inst_24235);
var inst_24237 = cljs.core.async.close_BANG_(inst_24236);
var inst_24238 = (inst_24230 + (1));
var tmp24368 = inst_24227;
var tmp24369 = inst_24228;
var tmp24370 = inst_24229;
var inst_24227__$1 = tmp24368;
var inst_24228__$1 = tmp24369;
var inst_24229__$1 = tmp24370;
var inst_24230__$1 = inst_24238;
var state_24289__$1 = (function (){var statearr_24381 = state_24289;
(statearr_24381[(13)] = inst_24227__$1);

(statearr_24381[(14)] = inst_24228__$1);

(statearr_24381[(17)] = inst_24237);

(statearr_24381[(15)] = inst_24230__$1);

(statearr_24381[(16)] = inst_24229__$1);

return statearr_24381;
})();
var statearr_24384_26003 = state_24289__$1;
(statearr_24384_26003[(2)] = null);

(statearr_24384_26003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (18))){
var inst_24256 = (state_24289[(2)]);
var state_24289__$1 = state_24289;
var statearr_24385_26004 = state_24289__$1;
(statearr_24385_26004[(2)] = inst_24256);

(statearr_24385_26004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24290 === (8))){
var inst_24230 = (state_24289[(15)]);
var inst_24229 = (state_24289[(16)]);
var inst_24232 = (inst_24230 < inst_24229);
var inst_24233 = inst_24232;
var state_24289__$1 = state_24289;
if(cljs.core.truth_(inst_24233)){
var statearr_24387_26005 = state_24289__$1;
(statearr_24387_26005[(1)] = (10));

} else {
var statearr_24388_26006 = state_24289__$1;
(statearr_24388_26006[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_24392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24392[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_24392[(1)] = (1));

return statearr_24392;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_24289){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_24289);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e24393){var ex__21609__auto__ = e24393;
var statearr_24395_26016 = state_24289;
(statearr_24395_26016[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_24289[(4)]))){
var statearr_24396_26017 = state_24289;
(statearr_24396_26017[(1)] = cljs.core.first((state_24289[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26018 = state_24289;
state_24289 = G__26018;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_24289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_24289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_24400 = f__21958__auto__();
(statearr_24400[(6)] = c__21957__auto___25967);

return statearr_24400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24408 = arguments.length;
switch (G__24408) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24459 = arguments.length;
switch (G__24459) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24490 = arguments.length;
switch (G__24490) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21957__auto___26029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_24588){
var state_val_24589 = (state_24588[(1)]);
if((state_val_24589 === (7))){
var state_24588__$1 = state_24588;
var statearr_24590_26030 = state_24588__$1;
(statearr_24590_26030[(2)] = null);

(statearr_24590_26030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (1))){
var state_24588__$1 = state_24588;
var statearr_24591_26031 = state_24588__$1;
(statearr_24591_26031[(2)] = null);

(statearr_24591_26031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (4))){
var inst_24509 = (state_24588[(7)]);
var inst_24506 = (state_24588[(8)]);
var inst_24511 = (inst_24509 < inst_24506);
var state_24588__$1 = state_24588;
if(cljs.core.truth_(inst_24511)){
var statearr_24593_26032 = state_24588__$1;
(statearr_24593_26032[(1)] = (6));

} else {
var statearr_24595_26033 = state_24588__$1;
(statearr_24595_26033[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (15))){
var inst_24564 = (state_24588[(9)]);
var inst_24569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24564);
var state_24588__$1 = state_24588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24588__$1,(17),out,inst_24569);
} else {
if((state_val_24589 === (13))){
var inst_24564 = (state_24588[(9)]);
var inst_24564__$1 = (state_24588[(2)]);
var inst_24565 = cljs.core.some(cljs.core.nil_QMARK_,inst_24564__$1);
var state_24588__$1 = (function (){var statearr_24596 = state_24588;
(statearr_24596[(9)] = inst_24564__$1);

return statearr_24596;
})();
if(cljs.core.truth_(inst_24565)){
var statearr_24597_26034 = state_24588__$1;
(statearr_24597_26034[(1)] = (14));

} else {
var statearr_24598_26036 = state_24588__$1;
(statearr_24598_26036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (6))){
var state_24588__$1 = state_24588;
var statearr_24599_26037 = state_24588__$1;
(statearr_24599_26037[(2)] = null);

(statearr_24599_26037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (17))){
var inst_24571 = (state_24588[(2)]);
var state_24588__$1 = (function (){var statearr_24603 = state_24588;
(statearr_24603[(10)] = inst_24571);

return statearr_24603;
})();
var statearr_24604_26038 = state_24588__$1;
(statearr_24604_26038[(2)] = null);

(statearr_24604_26038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (3))){
var inst_24577 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24588__$1,inst_24577);
} else {
if((state_val_24589 === (12))){
var _ = (function (){var statearr_24607 = state_24588;
(statearr_24607[(4)] = cljs.core.rest((state_24588[(4)])));

return statearr_24607;
})();
var state_24588__$1 = state_24588;
var ex24602 = (state_24588__$1[(2)]);
var statearr_24608_26040 = state_24588__$1;
(statearr_24608_26040[(5)] = ex24602);


if((ex24602 instanceof Object)){
var statearr_24612_26041 = state_24588__$1;
(statearr_24612_26041[(1)] = (11));

(statearr_24612_26041[(5)] = null);

} else {
throw ex24602;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (2))){
var inst_24505 = cljs.core.reset_BANG_(dctr,cnt);
var inst_24506 = cnt;
var inst_24509 = (0);
var state_24588__$1 = (function (){var statearr_24616 = state_24588;
(statearr_24616[(7)] = inst_24509);

(statearr_24616[(8)] = inst_24506);

(statearr_24616[(11)] = inst_24505);

return statearr_24616;
})();
var statearr_24617_26042 = state_24588__$1;
(statearr_24617_26042[(2)] = null);

(statearr_24617_26042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (11))){
var inst_24540 = (state_24588[(2)]);
var inst_24541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24588__$1 = (function (){var statearr_24618 = state_24588;
(statearr_24618[(12)] = inst_24540);

return statearr_24618;
})();
var statearr_24620_26044 = state_24588__$1;
(statearr_24620_26044[(2)] = inst_24541);

(statearr_24620_26044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (9))){
var inst_24509 = (state_24588[(7)]);
var _ = (function (){var statearr_24622 = state_24588;
(statearr_24622[(4)] = cljs.core.cons((12),(state_24588[(4)])));

return statearr_24622;
})();
var inst_24550 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24509) : chs__$1.call(null, inst_24509));
var inst_24551 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24509) : done.call(null, inst_24509));
var inst_24552 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24550,inst_24551);
var ___$1 = (function (){var statearr_24623 = state_24588;
(statearr_24623[(4)] = cljs.core.rest((state_24588[(4)])));

return statearr_24623;
})();
var state_24588__$1 = state_24588;
var statearr_24624_26050 = state_24588__$1;
(statearr_24624_26050[(2)] = inst_24552);

(statearr_24624_26050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (5))){
var inst_24562 = (state_24588[(2)]);
var state_24588__$1 = (function (){var statearr_24625 = state_24588;
(statearr_24625[(13)] = inst_24562);

return statearr_24625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24588__$1,(13),dchan);
} else {
if((state_val_24589 === (14))){
var inst_24567 = cljs.core.async.close_BANG_(out);
var state_24588__$1 = state_24588;
var statearr_24627_26051 = state_24588__$1;
(statearr_24627_26051[(2)] = inst_24567);

(statearr_24627_26051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (16))){
var inst_24574 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
var statearr_24628_26055 = state_24588__$1;
(statearr_24628_26055[(2)] = inst_24574);

(statearr_24628_26055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (10))){
var inst_24509 = (state_24588[(7)]);
var inst_24555 = (state_24588[(2)]);
var inst_24556 = (inst_24509 + (1));
var inst_24509__$1 = inst_24556;
var state_24588__$1 = (function (){var statearr_24630 = state_24588;
(statearr_24630[(7)] = inst_24509__$1);

(statearr_24630[(14)] = inst_24555);

return statearr_24630;
})();
var statearr_24631_26057 = state_24588__$1;
(statearr_24631_26057[(2)] = null);

(statearr_24631_26057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (8))){
var inst_24560 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
var statearr_24633_26058 = state_24588__$1;
(statearr_24633_26058[(2)] = inst_24560);

(statearr_24633_26058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_24636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24636[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_24636[(1)] = (1));

return statearr_24636;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_24588){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_24588);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e24637){var ex__21609__auto__ = e24637;
var statearr_24638_26060 = state_24588;
(statearr_24638_26060[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_24588[(4)]))){
var statearr_24639_26061 = state_24588;
(statearr_24639_26061[(1)] = cljs.core.first((state_24588[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26062 = state_24588;
state_24588 = G__26062;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_24588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_24588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_24640 = f__21958__auto__();
(statearr_24640[(6)] = c__21957__auto___26029);

return statearr_24640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24644 = arguments.length;
switch (G__24644) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21957__auto___26064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_24683){
var state_val_24684 = (state_24683[(1)]);
if((state_val_24684 === (7))){
var inst_24656 = (state_24683[(7)]);
var inst_24655 = (state_24683[(8)]);
var inst_24655__$1 = (state_24683[(2)]);
var inst_24656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24655__$1,(0),null);
var inst_24657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24655__$1,(1),null);
var inst_24658 = (inst_24656__$1 == null);
var state_24683__$1 = (function (){var statearr_24698 = state_24683;
(statearr_24698[(7)] = inst_24656__$1);

(statearr_24698[(9)] = inst_24657);

(statearr_24698[(8)] = inst_24655__$1);

return statearr_24698;
})();
if(cljs.core.truth_(inst_24658)){
var statearr_24699_26066 = state_24683__$1;
(statearr_24699_26066[(1)] = (8));

} else {
var statearr_24700_26067 = state_24683__$1;
(statearr_24700_26067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (1))){
var inst_24645 = cljs.core.vec(chs);
var inst_24646 = inst_24645;
var state_24683__$1 = (function (){var statearr_24702 = state_24683;
(statearr_24702[(10)] = inst_24646);

return statearr_24702;
})();
var statearr_24703_26069 = state_24683__$1;
(statearr_24703_26069[(2)] = null);

(statearr_24703_26069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (4))){
var inst_24646 = (state_24683[(10)]);
var state_24683__$1 = state_24683;
return cljs.core.async.ioc_alts_BANG_(state_24683__$1,(7),inst_24646);
} else {
if((state_val_24684 === (6))){
var inst_24674 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
var statearr_24704_26076 = state_24683__$1;
(statearr_24704_26076[(2)] = inst_24674);

(statearr_24704_26076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (3))){
var inst_24676 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24683__$1,inst_24676);
} else {
if((state_val_24684 === (2))){
var inst_24646 = (state_24683[(10)]);
var inst_24648 = cljs.core.count(inst_24646);
var inst_24649 = (inst_24648 > (0));
var state_24683__$1 = state_24683;
if(cljs.core.truth_(inst_24649)){
var statearr_24708_26078 = state_24683__$1;
(statearr_24708_26078[(1)] = (4));

} else {
var statearr_24709_26079 = state_24683__$1;
(statearr_24709_26079[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (11))){
var inst_24646 = (state_24683[(10)]);
var inst_24667 = (state_24683[(2)]);
var tmp24705 = inst_24646;
var inst_24646__$1 = tmp24705;
var state_24683__$1 = (function (){var statearr_24714 = state_24683;
(statearr_24714[(11)] = inst_24667);

(statearr_24714[(10)] = inst_24646__$1);

return statearr_24714;
})();
var statearr_24717_26080 = state_24683__$1;
(statearr_24717_26080[(2)] = null);

(statearr_24717_26080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (9))){
var inst_24656 = (state_24683[(7)]);
var state_24683__$1 = state_24683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24683__$1,(11),out,inst_24656);
} else {
if((state_val_24684 === (5))){
var inst_24672 = cljs.core.async.close_BANG_(out);
var state_24683__$1 = state_24683;
var statearr_24723_26090 = state_24683__$1;
(statearr_24723_26090[(2)] = inst_24672);

(statearr_24723_26090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (10))){
var inst_24670 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
var statearr_24724_26091 = state_24683__$1;
(statearr_24724_26091[(2)] = inst_24670);

(statearr_24724_26091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (8))){
var inst_24656 = (state_24683[(7)]);
var inst_24657 = (state_24683[(9)]);
var inst_24655 = (state_24683[(8)]);
var inst_24646 = (state_24683[(10)]);
var inst_24661 = (function (){var cs = inst_24646;
var vec__24651 = inst_24655;
var v = inst_24656;
var c = inst_24657;
return (function (p1__24642_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24642_SHARP_);
});
})();
var inst_24662 = cljs.core.filterv(inst_24661,inst_24646);
var inst_24646__$1 = inst_24662;
var state_24683__$1 = (function (){var statearr_24725 = state_24683;
(statearr_24725[(10)] = inst_24646__$1);

return statearr_24725;
})();
var statearr_24726_26096 = state_24683__$1;
(statearr_24726_26096[(2)] = null);

(statearr_24726_26096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_24731 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24731[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_24731[(1)] = (1));

return statearr_24731;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_24683){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_24683);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e24733){var ex__21609__auto__ = e24733;
var statearr_24735_26099 = state_24683;
(statearr_24735_26099[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_24683[(4)]))){
var statearr_24736_26106 = state_24683;
(statearr_24736_26106[(1)] = cljs.core.first((state_24683[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26107 = state_24683;
state_24683 = G__26107;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_24683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_24683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_24739 = f__21958__auto__();
(statearr_24739[(6)] = c__21957__auto___26064);

return statearr_24739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24746 = arguments.length;
switch (G__24746) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21957__auto___26115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_24779){
var state_val_24780 = (state_24779[(1)]);
if((state_val_24780 === (7))){
var inst_24760 = (state_24779[(7)]);
var inst_24760__$1 = (state_24779[(2)]);
var inst_24761 = (inst_24760__$1 == null);
var inst_24762 = cljs.core.not(inst_24761);
var state_24779__$1 = (function (){var statearr_24781 = state_24779;
(statearr_24781[(7)] = inst_24760__$1);

return statearr_24781;
})();
if(inst_24762){
var statearr_24782_26117 = state_24779__$1;
(statearr_24782_26117[(1)] = (8));

} else {
var statearr_24783_26118 = state_24779__$1;
(statearr_24783_26118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (1))){
var inst_24755 = (0);
var state_24779__$1 = (function (){var statearr_24789 = state_24779;
(statearr_24789[(8)] = inst_24755);

return statearr_24789;
})();
var statearr_24790_26119 = state_24779__$1;
(statearr_24790_26119[(2)] = null);

(statearr_24790_26119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (4))){
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24779__$1,(7),ch);
} else {
if((state_val_24780 === (6))){
var inst_24774 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24795_26121 = state_24779__$1;
(statearr_24795_26121[(2)] = inst_24774);

(statearr_24795_26121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (3))){
var inst_24776 = (state_24779[(2)]);
var inst_24777 = cljs.core.async.close_BANG_(out);
var state_24779__$1 = (function (){var statearr_24797 = state_24779;
(statearr_24797[(9)] = inst_24776);

return statearr_24797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24779__$1,inst_24777);
} else {
if((state_val_24780 === (2))){
var inst_24755 = (state_24779[(8)]);
var inst_24757 = (inst_24755 < n);
var state_24779__$1 = state_24779;
if(cljs.core.truth_(inst_24757)){
var statearr_24798_26125 = state_24779__$1;
(statearr_24798_26125[(1)] = (4));

} else {
var statearr_24799_26126 = state_24779__$1;
(statearr_24799_26126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (11))){
var inst_24755 = (state_24779[(8)]);
var inst_24766 = (state_24779[(2)]);
var inst_24767 = (inst_24755 + (1));
var inst_24755__$1 = inst_24767;
var state_24779__$1 = (function (){var statearr_24804 = state_24779;
(statearr_24804[(8)] = inst_24755__$1);

(statearr_24804[(10)] = inst_24766);

return statearr_24804;
})();
var statearr_24811_26130 = state_24779__$1;
(statearr_24811_26130[(2)] = null);

(statearr_24811_26130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (9))){
var state_24779__$1 = state_24779;
var statearr_24814_26131 = state_24779__$1;
(statearr_24814_26131[(2)] = null);

(statearr_24814_26131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (5))){
var state_24779__$1 = state_24779;
var statearr_24818_26134 = state_24779__$1;
(statearr_24818_26134[(2)] = null);

(statearr_24818_26134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (10))){
var inst_24771 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24819_26139 = state_24779__$1;
(statearr_24819_26139[(2)] = inst_24771);

(statearr_24819_26139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (8))){
var inst_24760 = (state_24779[(7)]);
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24779__$1,(11),out,inst_24760);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_24821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24821[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_24821[(1)] = (1));

return statearr_24821;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_24779){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_24779);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e24822){var ex__21609__auto__ = e24822;
var statearr_24823_26140 = state_24779;
(statearr_24823_26140[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_24779[(4)]))){
var statearr_24824_26141 = state_24779;
(statearr_24824_26141[(1)] = cljs.core.first((state_24779[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26142 = state_24779;
state_24779 = G__26142;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_24779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_24779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_24826 = f__21958__auto__();
(statearr_24826[(6)] = c__21957__auto___26115);

return statearr_24826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24861 = (function (f,ch,meta24838,_,fn1,meta24862){
this.f = f;
this.ch = ch;
this.meta24838 = meta24838;
this._ = _;
this.fn1 = fn1;
this.meta24862 = meta24862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24863,meta24862__$1){
var self__ = this;
var _24863__$1 = this;
return (new cljs.core.async.t_cljs$core$async24861(self__.f,self__.ch,self__.meta24838,self__._,self__.fn1,meta24862__$1));
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24863){
var self__ = this;
var _24863__$1 = this;
return self__.meta24862;
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__24828_SHARP_){
var G__24867 = (((p1__24828_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24828_SHARP_) : self__.f.call(null, p1__24828_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24867) : f1.call(null, G__24867));
});
}));

(cljs.core.async.t_cljs$core$async24861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24838","meta24838",624036046,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24837","cljs.core.async/t_cljs$core$async24837",1313588644,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24862","meta24862",-1916451830,null)], null);
}));

(cljs.core.async.t_cljs$core$async24861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24861");

(cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24861.
 */
cljs.core.async.__GT_t_cljs$core$async24861 = (function cljs$core$async$__GT_t_cljs$core$async24861(f,ch,meta24838,_,fn1,meta24862){
return (new cljs.core.async.t_cljs$core$async24861(f,ch,meta24838,_,fn1,meta24862));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24837 = (function (f,ch,meta24838){
this.f = f;
this.ch = ch;
this.meta24838 = meta24838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24839,meta24838__$1){
var self__ = this;
var _24839__$1 = this;
return (new cljs.core.async.t_cljs$core$async24837(self__.f,self__.ch,meta24838__$1));
}));

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24839){
var self__ = this;
var _24839__$1 = this;
return self__.meta24838;
}));

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async24861(self__.f,self__.ch,self__.meta24838,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24881 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24881) : self__.f.call(null, G__24881));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24838","meta24838",624036046,null)], null);
}));

(cljs.core.async.t_cljs$core$async24837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24837");

(cljs.core.async.t_cljs$core$async24837.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24837.
 */
cljs.core.async.__GT_t_cljs$core$async24837 = (function cljs$core$async$__GT_t_cljs$core$async24837(f,ch,meta24838){
return (new cljs.core.async.t_cljs$core$async24837(f,ch,meta24838));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24837(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24896 = (function (f,ch,meta24897){
this.f = f;
this.ch = ch;
this.meta24897 = meta24897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24898,meta24897__$1){
var self__ = this;
var _24898__$1 = this;
return (new cljs.core.async.t_cljs$core$async24896(self__.f,self__.ch,meta24897__$1));
}));

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24898){
var self__ = this;
var _24898__$1 = this;
return self__.meta24897;
}));

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async24896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24897","meta24897",-471283325,null)], null);
}));

(cljs.core.async.t_cljs$core$async24896.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24896");

(cljs.core.async.t_cljs$core$async24896.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24896");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24896.
 */
cljs.core.async.__GT_t_cljs$core$async24896 = (function cljs$core$async$__GT_t_cljs$core$async24896(f,ch,meta24897){
return (new cljs.core.async.t_cljs$core$async24896(f,ch,meta24897));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24896(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24912 = (function (p,ch,meta24913){
this.p = p;
this.ch = ch;
this.meta24913 = meta24913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24914,meta24913__$1){
var self__ = this;
var _24914__$1 = this;
return (new cljs.core.async.t_cljs$core$async24912(self__.p,self__.ch,meta24913__$1));
}));

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24914){
var self__ = this;
var _24914__$1 = this;
return self__.meta24913;
}));

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24913","meta24913",-789685672,null)], null);
}));

(cljs.core.async.t_cljs$core$async24912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24912");

(cljs.core.async.t_cljs$core$async24912.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24912.
 */
cljs.core.async.__GT_t_cljs$core$async24912 = (function cljs$core$async$__GT_t_cljs$core$async24912(p,ch,meta24913){
return (new cljs.core.async.t_cljs$core$async24912(p,ch,meta24913));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async24912(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24928 = arguments.length;
switch (G__24928) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21957__auto___26165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_24949){
var state_val_24950 = (state_24949[(1)]);
if((state_val_24950 === (7))){
var inst_24945 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
var statearr_24951_26170 = state_24949__$1;
(statearr_24951_26170[(2)] = inst_24945);

(statearr_24951_26170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (1))){
var state_24949__$1 = state_24949;
var statearr_24952_26171 = state_24949__$1;
(statearr_24952_26171[(2)] = null);

(statearr_24952_26171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (4))){
var inst_24931 = (state_24949[(7)]);
var inst_24931__$1 = (state_24949[(2)]);
var inst_24932 = (inst_24931__$1 == null);
var state_24949__$1 = (function (){var statearr_24953 = state_24949;
(statearr_24953[(7)] = inst_24931__$1);

return statearr_24953;
})();
if(cljs.core.truth_(inst_24932)){
var statearr_24957_26172 = state_24949__$1;
(statearr_24957_26172[(1)] = (5));

} else {
var statearr_24958_26173 = state_24949__$1;
(statearr_24958_26173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (6))){
var inst_24931 = (state_24949[(7)]);
var inst_24936 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24931) : p.call(null, inst_24931));
var state_24949__$1 = state_24949;
if(cljs.core.truth_(inst_24936)){
var statearr_24959_26176 = state_24949__$1;
(statearr_24959_26176[(1)] = (8));

} else {
var statearr_24960_26177 = state_24949__$1;
(statearr_24960_26177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (3))){
var inst_24947 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24949__$1,inst_24947);
} else {
if((state_val_24950 === (2))){
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24949__$1,(4),ch);
} else {
if((state_val_24950 === (11))){
var inst_24939 = (state_24949[(2)]);
var state_24949__$1 = state_24949;
var statearr_24964_26181 = state_24949__$1;
(statearr_24964_26181[(2)] = inst_24939);

(statearr_24964_26181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (9))){
var state_24949__$1 = state_24949;
var statearr_24965_26182 = state_24949__$1;
(statearr_24965_26182[(2)] = null);

(statearr_24965_26182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (5))){
var inst_24934 = cljs.core.async.close_BANG_(out);
var state_24949__$1 = state_24949;
var statearr_24966_26185 = state_24949__$1;
(statearr_24966_26185[(2)] = inst_24934);

(statearr_24966_26185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (10))){
var inst_24942 = (state_24949[(2)]);
var state_24949__$1 = (function (){var statearr_24969 = state_24949;
(statearr_24969[(8)] = inst_24942);

return statearr_24969;
})();
var statearr_24970_26190 = state_24949__$1;
(statearr_24970_26190[(2)] = null);

(statearr_24970_26190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24950 === (8))){
var inst_24931 = (state_24949[(7)]);
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24949__$1,(11),out,inst_24931);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_24974 = [null,null,null,null,null,null,null,null,null];
(statearr_24974[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_24974[(1)] = (1));

return statearr_24974;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_24949){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_24949);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e24975){var ex__21609__auto__ = e24975;
var statearr_24976_26192 = state_24949;
(statearr_24976_26192[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_24949[(4)]))){
var statearr_24982_26193 = state_24949;
(statearr_24982_26193[(1)] = cljs.core.first((state_24949[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26194 = state_24949;
state_24949 = G__26194;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_24949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_24949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_24983 = f__21958__auto__();
(statearr_24983[(6)] = c__21957__auto___26165);

return statearr_24983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24986 = arguments.length;
switch (G__24986) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21957__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_25052){
var state_val_25053 = (state_25052[(1)]);
if((state_val_25053 === (7))){
var inst_25048 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25054_26206 = state_25052__$1;
(statearr_25054_26206[(2)] = inst_25048);

(statearr_25054_26206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (20))){
var inst_25018 = (state_25052[(7)]);
var inst_25029 = (state_25052[(2)]);
var inst_25030 = cljs.core.next(inst_25018);
var inst_25003 = inst_25030;
var inst_25004 = null;
var inst_25005 = (0);
var inst_25007 = (0);
var state_25052__$1 = (function (){var statearr_25055 = state_25052;
(statearr_25055[(8)] = inst_25004);

(statearr_25055[(9)] = inst_25029);

(statearr_25055[(10)] = inst_25003);

(statearr_25055[(11)] = inst_25005);

(statearr_25055[(12)] = inst_25007);

return statearr_25055;
})();
var statearr_25056_26210 = state_25052__$1;
(statearr_25056_26210[(2)] = null);

(statearr_25056_26210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (1))){
var state_25052__$1 = state_25052;
var statearr_25057_26211 = state_25052__$1;
(statearr_25057_26211[(2)] = null);

(statearr_25057_26211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (4))){
var inst_24991 = (state_25052[(13)]);
var inst_24991__$1 = (state_25052[(2)]);
var inst_24993 = (inst_24991__$1 == null);
var state_25052__$1 = (function (){var statearr_25058 = state_25052;
(statearr_25058[(13)] = inst_24991__$1);

return statearr_25058;
})();
if(cljs.core.truth_(inst_24993)){
var statearr_25059_26214 = state_25052__$1;
(statearr_25059_26214[(1)] = (5));

} else {
var statearr_25060_26215 = state_25052__$1;
(statearr_25060_26215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (15))){
var state_25052__$1 = state_25052;
var statearr_25064_26223 = state_25052__$1;
(statearr_25064_26223[(2)] = null);

(statearr_25064_26223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (21))){
var state_25052__$1 = state_25052;
var statearr_25065_26224 = state_25052__$1;
(statearr_25065_26224[(2)] = null);

(statearr_25065_26224[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (13))){
var inst_25004 = (state_25052[(8)]);
var inst_25003 = (state_25052[(10)]);
var inst_25005 = (state_25052[(11)]);
var inst_25007 = (state_25052[(12)]);
var inst_25014 = (state_25052[(2)]);
var inst_25015 = (inst_25007 + (1));
var tmp25061 = inst_25004;
var tmp25062 = inst_25003;
var tmp25063 = inst_25005;
var inst_25003__$1 = tmp25062;
var inst_25004__$1 = tmp25061;
var inst_25005__$1 = tmp25063;
var inst_25007__$1 = inst_25015;
var state_25052__$1 = (function (){var statearr_25066 = state_25052;
(statearr_25066[(8)] = inst_25004__$1);

(statearr_25066[(14)] = inst_25014);

(statearr_25066[(10)] = inst_25003__$1);

(statearr_25066[(11)] = inst_25005__$1);

(statearr_25066[(12)] = inst_25007__$1);

return statearr_25066;
})();
var statearr_25067_26229 = state_25052__$1;
(statearr_25067_26229[(2)] = null);

(statearr_25067_26229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (22))){
var state_25052__$1 = state_25052;
var statearr_25068_26230 = state_25052__$1;
(statearr_25068_26230[(2)] = null);

(statearr_25068_26230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (6))){
var inst_24991 = (state_25052[(13)]);
var inst_25001 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24991) : f.call(null, inst_24991));
var inst_25002 = cljs.core.seq(inst_25001);
var inst_25003 = inst_25002;
var inst_25004 = null;
var inst_25005 = (0);
var inst_25007 = (0);
var state_25052__$1 = (function (){var statearr_25069 = state_25052;
(statearr_25069[(8)] = inst_25004);

(statearr_25069[(10)] = inst_25003);

(statearr_25069[(11)] = inst_25005);

(statearr_25069[(12)] = inst_25007);

return statearr_25069;
})();
var statearr_25070_26231 = state_25052__$1;
(statearr_25070_26231[(2)] = null);

(statearr_25070_26231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (17))){
var inst_25018 = (state_25052[(7)]);
var inst_25022 = cljs.core.chunk_first(inst_25018);
var inst_25023 = cljs.core.chunk_rest(inst_25018);
var inst_25024 = cljs.core.count(inst_25022);
var inst_25003 = inst_25023;
var inst_25004 = inst_25022;
var inst_25005 = inst_25024;
var inst_25007 = (0);
var state_25052__$1 = (function (){var statearr_25071 = state_25052;
(statearr_25071[(8)] = inst_25004);

(statearr_25071[(10)] = inst_25003);

(statearr_25071[(11)] = inst_25005);

(statearr_25071[(12)] = inst_25007);

return statearr_25071;
})();
var statearr_25072_26247 = state_25052__$1;
(statearr_25072_26247[(2)] = null);

(statearr_25072_26247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (3))){
var inst_25050 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25052__$1,inst_25050);
} else {
if((state_val_25053 === (12))){
var inst_25038 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25073_26249 = state_25052__$1;
(statearr_25073_26249[(2)] = inst_25038);

(statearr_25073_26249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (2))){
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25052__$1,(4),in$);
} else {
if((state_val_25053 === (23))){
var inst_25046 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25074_26254 = state_25052__$1;
(statearr_25074_26254[(2)] = inst_25046);

(statearr_25074_26254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (19))){
var inst_25033 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25076_26255 = state_25052__$1;
(statearr_25076_26255[(2)] = inst_25033);

(statearr_25076_26255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (11))){
var inst_25018 = (state_25052[(7)]);
var inst_25003 = (state_25052[(10)]);
var inst_25018__$1 = cljs.core.seq(inst_25003);
var state_25052__$1 = (function (){var statearr_25078 = state_25052;
(statearr_25078[(7)] = inst_25018__$1);

return statearr_25078;
})();
if(inst_25018__$1){
var statearr_25079_26256 = state_25052__$1;
(statearr_25079_26256[(1)] = (14));

} else {
var statearr_25080_26258 = state_25052__$1;
(statearr_25080_26258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (9))){
var inst_25040 = (state_25052[(2)]);
var inst_25041 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25052__$1 = (function (){var statearr_25081 = state_25052;
(statearr_25081[(15)] = inst_25040);

return statearr_25081;
})();
if(cljs.core.truth_(inst_25041)){
var statearr_25082_26259 = state_25052__$1;
(statearr_25082_26259[(1)] = (21));

} else {
var statearr_25083_26260 = state_25052__$1;
(statearr_25083_26260[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (5))){
var inst_24995 = cljs.core.async.close_BANG_(out);
var state_25052__$1 = state_25052;
var statearr_25084_26268 = state_25052__$1;
(statearr_25084_26268[(2)] = inst_24995);

(statearr_25084_26268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (14))){
var inst_25018 = (state_25052[(7)]);
var inst_25020 = cljs.core.chunked_seq_QMARK_(inst_25018);
var state_25052__$1 = state_25052;
if(inst_25020){
var statearr_25086_26269 = state_25052__$1;
(statearr_25086_26269[(1)] = (17));

} else {
var statearr_25087_26270 = state_25052__$1;
(statearr_25087_26270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (16))){
var inst_25036 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25088_26271 = state_25052__$1;
(statearr_25088_26271[(2)] = inst_25036);

(statearr_25088_26271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (10))){
var inst_25004 = (state_25052[(8)]);
var inst_25007 = (state_25052[(12)]);
var inst_25012 = cljs.core._nth(inst_25004,inst_25007);
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25052__$1,(13),out,inst_25012);
} else {
if((state_val_25053 === (18))){
var inst_25018 = (state_25052[(7)]);
var inst_25027 = cljs.core.first(inst_25018);
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25052__$1,(20),out,inst_25027);
} else {
if((state_val_25053 === (8))){
var inst_25005 = (state_25052[(11)]);
var inst_25007 = (state_25052[(12)]);
var inst_25009 = (inst_25007 < inst_25005);
var inst_25010 = inst_25009;
var state_25052__$1 = state_25052;
if(cljs.core.truth_(inst_25010)){
var statearr_25092_26278 = state_25052__$1;
(statearr_25092_26278[(1)] = (10));

} else {
var statearr_25095_26279 = state_25052__$1;
(statearr_25095_26279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21606__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21606__auto____0 = (function (){
var statearr_25097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25097[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21606__auto__);

(statearr_25097[(1)] = (1));

return statearr_25097;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21606__auto____1 = (function (state_25052){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_25052);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e25098){var ex__21609__auto__ = e25098;
var statearr_25099_26282 = state_25052;
(statearr_25099_26282[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_25052[(4)]))){
var statearr_25101_26283 = state_25052;
(statearr_25101_26283[(1)] = cljs.core.first((state_25052[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26286 = state_25052;
state_25052 = G__26286;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21606__auto__ = function(state_25052){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21606__auto____1.call(this,state_25052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21606__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21606__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_25103 = f__21958__auto__();
(statearr_25103[(6)] = c__21957__auto__);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));

return c__21957__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25105 = arguments.length;
switch (G__25105) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25110 = arguments.length;
switch (G__25110) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25112 = arguments.length;
switch (G__25112) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21957__auto___26308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_25157){
var state_val_25158 = (state_25157[(1)]);
if((state_val_25158 === (7))){
var inst_25151 = (state_25157[(2)]);
var state_25157__$1 = state_25157;
var statearr_25170_26309 = state_25157__$1;
(statearr_25170_26309[(2)] = inst_25151);

(statearr_25170_26309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (1))){
var inst_25133 = null;
var state_25157__$1 = (function (){var statearr_25171 = state_25157;
(statearr_25171[(7)] = inst_25133);

return statearr_25171;
})();
var statearr_25173_26311 = state_25157__$1;
(statearr_25173_26311[(2)] = null);

(statearr_25173_26311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (4))){
var inst_25136 = (state_25157[(8)]);
var inst_25136__$1 = (state_25157[(2)]);
var inst_25137 = (inst_25136__$1 == null);
var inst_25138 = cljs.core.not(inst_25137);
var state_25157__$1 = (function (){var statearr_25174 = state_25157;
(statearr_25174[(8)] = inst_25136__$1);

return statearr_25174;
})();
if(inst_25138){
var statearr_25175_26312 = state_25157__$1;
(statearr_25175_26312[(1)] = (5));

} else {
var statearr_25176_26313 = state_25157__$1;
(statearr_25176_26313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (6))){
var state_25157__$1 = state_25157;
var statearr_25180_26315 = state_25157__$1;
(statearr_25180_26315[(2)] = null);

(statearr_25180_26315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (3))){
var inst_25153 = (state_25157[(2)]);
var inst_25154 = cljs.core.async.close_BANG_(out);
var state_25157__$1 = (function (){var statearr_25181 = state_25157;
(statearr_25181[(9)] = inst_25153);

return statearr_25181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25157__$1,inst_25154);
} else {
if((state_val_25158 === (2))){
var state_25157__$1 = state_25157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25157__$1,(4),ch);
} else {
if((state_val_25158 === (11))){
var inst_25136 = (state_25157[(8)]);
var inst_25145 = (state_25157[(2)]);
var inst_25133 = inst_25136;
var state_25157__$1 = (function (){var statearr_25182 = state_25157;
(statearr_25182[(7)] = inst_25133);

(statearr_25182[(10)] = inst_25145);

return statearr_25182;
})();
var statearr_25183_26319 = state_25157__$1;
(statearr_25183_26319[(2)] = null);

(statearr_25183_26319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (9))){
var inst_25136 = (state_25157[(8)]);
var state_25157__$1 = state_25157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25157__$1,(11),out,inst_25136);
} else {
if((state_val_25158 === (5))){
var inst_25133 = (state_25157[(7)]);
var inst_25136 = (state_25157[(8)]);
var inst_25140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25136,inst_25133);
var state_25157__$1 = state_25157;
if(inst_25140){
var statearr_25185_26320 = state_25157__$1;
(statearr_25185_26320[(1)] = (8));

} else {
var statearr_25186_26326 = state_25157__$1;
(statearr_25186_26326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (10))){
var inst_25148 = (state_25157[(2)]);
var state_25157__$1 = state_25157;
var statearr_25187_26327 = state_25157__$1;
(statearr_25187_26327[(2)] = inst_25148);

(statearr_25187_26327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25158 === (8))){
var inst_25133 = (state_25157[(7)]);
var tmp25184 = inst_25133;
var inst_25133__$1 = tmp25184;
var state_25157__$1 = (function (){var statearr_25188 = state_25157;
(statearr_25188[(7)] = inst_25133__$1);

return statearr_25188;
})();
var statearr_25189_26328 = state_25157__$1;
(statearr_25189_26328[(2)] = null);

(statearr_25189_26328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_25191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25191[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_25191[(1)] = (1));

return statearr_25191;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_25157){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_25157);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e25195){var ex__21609__auto__ = e25195;
var statearr_25196_26333 = state_25157;
(statearr_25196_26333[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_25157[(4)]))){
var statearr_25197_26334 = state_25157;
(statearr_25197_26334[(1)] = cljs.core.first((state_25157[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26335 = state_25157;
state_25157 = G__26335;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_25157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_25157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_25198 = f__21958__auto__();
(statearr_25198[(6)] = c__21957__auto___26308);

return statearr_25198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25200 = arguments.length;
switch (G__25200) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21957__auto___26348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_25246){
var state_val_25247 = (state_25246[(1)]);
if((state_val_25247 === (7))){
var inst_25238 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
var statearr_25252_26349 = state_25246__$1;
(statearr_25252_26349[(2)] = inst_25238);

(statearr_25252_26349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (1))){
var inst_25201 = (new Array(n));
var inst_25202 = inst_25201;
var inst_25203 = (0);
var state_25246__$1 = (function (){var statearr_25253 = state_25246;
(statearr_25253[(7)] = inst_25203);

(statearr_25253[(8)] = inst_25202);

return statearr_25253;
})();
var statearr_25254_26353 = state_25246__$1;
(statearr_25254_26353[(2)] = null);

(statearr_25254_26353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (4))){
var inst_25206 = (state_25246[(9)]);
var inst_25206__$1 = (state_25246[(2)]);
var inst_25207 = (inst_25206__$1 == null);
var inst_25208 = cljs.core.not(inst_25207);
var state_25246__$1 = (function (){var statearr_25256 = state_25246;
(statearr_25256[(9)] = inst_25206__$1);

return statearr_25256;
})();
if(inst_25208){
var statearr_25257_26354 = state_25246__$1;
(statearr_25257_26354[(1)] = (5));

} else {
var statearr_25258_26355 = state_25246__$1;
(statearr_25258_26355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (15))){
var inst_25229 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
var statearr_25259_26359 = state_25246__$1;
(statearr_25259_26359[(2)] = inst_25229);

(statearr_25259_26359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (13))){
var state_25246__$1 = state_25246;
var statearr_25260_26364 = state_25246__$1;
(statearr_25260_26364[(2)] = null);

(statearr_25260_26364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (6))){
var inst_25203 = (state_25246[(7)]);
var inst_25225 = (inst_25203 > (0));
var state_25246__$1 = state_25246;
if(cljs.core.truth_(inst_25225)){
var statearr_25261_26365 = state_25246__$1;
(statearr_25261_26365[(1)] = (12));

} else {
var statearr_25262_26368 = state_25246__$1;
(statearr_25262_26368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (3))){
var inst_25240 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25246__$1,inst_25240);
} else {
if((state_val_25247 === (12))){
var inst_25202 = (state_25246[(8)]);
var inst_25227 = cljs.core.vec(inst_25202);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25246__$1,(15),out,inst_25227);
} else {
if((state_val_25247 === (2))){
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25246__$1,(4),ch);
} else {
if((state_val_25247 === (11))){
var inst_25218 = (state_25246[(2)]);
var inst_25219 = (new Array(n));
var inst_25202 = inst_25219;
var inst_25203 = (0);
var state_25246__$1 = (function (){var statearr_25263 = state_25246;
(statearr_25263[(7)] = inst_25203);

(statearr_25263[(10)] = inst_25218);

(statearr_25263[(8)] = inst_25202);

return statearr_25263;
})();
var statearr_25264_26373 = state_25246__$1;
(statearr_25264_26373[(2)] = null);

(statearr_25264_26373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (9))){
var inst_25202 = (state_25246[(8)]);
var inst_25216 = cljs.core.vec(inst_25202);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25246__$1,(11),out,inst_25216);
} else {
if((state_val_25247 === (5))){
var inst_25203 = (state_25246[(7)]);
var inst_25211 = (state_25246[(11)]);
var inst_25202 = (state_25246[(8)]);
var inst_25206 = (state_25246[(9)]);
var inst_25210 = (inst_25202[inst_25203] = inst_25206);
var inst_25211__$1 = (inst_25203 + (1));
var inst_25212 = (inst_25211__$1 < n);
var state_25246__$1 = (function (){var statearr_25265 = state_25246;
(statearr_25265[(12)] = inst_25210);

(statearr_25265[(11)] = inst_25211__$1);

return statearr_25265;
})();
if(cljs.core.truth_(inst_25212)){
var statearr_25266_26380 = state_25246__$1;
(statearr_25266_26380[(1)] = (8));

} else {
var statearr_25267_26381 = state_25246__$1;
(statearr_25267_26381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (14))){
var inst_25233 = (state_25246[(2)]);
var inst_25236 = cljs.core.async.close_BANG_(out);
var state_25246__$1 = (function (){var statearr_25269 = state_25246;
(statearr_25269[(13)] = inst_25233);

return statearr_25269;
})();
var statearr_25270_26382 = state_25246__$1;
(statearr_25270_26382[(2)] = inst_25236);

(statearr_25270_26382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (10))){
var inst_25222 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
var statearr_25271_26383 = state_25246__$1;
(statearr_25271_26383[(2)] = inst_25222);

(statearr_25271_26383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (8))){
var inst_25211 = (state_25246[(11)]);
var inst_25202 = (state_25246[(8)]);
var tmp25268 = inst_25202;
var inst_25202__$1 = tmp25268;
var inst_25203 = inst_25211;
var state_25246__$1 = (function (){var statearr_25272 = state_25246;
(statearr_25272[(7)] = inst_25203);

(statearr_25272[(8)] = inst_25202__$1);

return statearr_25272;
})();
var statearr_25273_26387 = state_25246__$1;
(statearr_25273_26387[(2)] = null);

(statearr_25273_26387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_25280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25280[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_25280[(1)] = (1));

return statearr_25280;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_25246){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_25246);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e25282){var ex__21609__auto__ = e25282;
var statearr_25283_26388 = state_25246;
(statearr_25283_26388[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_25246[(4)]))){
var statearr_25284_26389 = state_25246;
(statearr_25284_26389[(1)] = cljs.core.first((state_25246[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26390 = state_25246;
state_25246 = G__26390;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_25246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_25246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_25285 = f__21958__auto__();
(statearr_25285[(6)] = c__21957__auto___26348);

return statearr_25285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25292 = arguments.length;
switch (G__25292) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21957__auto___26392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21958__auto__ = (function (){var switch__21605__auto__ = (function (state_25339){
var state_val_25340 = (state_25339[(1)]);
if((state_val_25340 === (7))){
var inst_25335 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25342_26393 = state_25339__$1;
(statearr_25342_26393[(2)] = inst_25335);

(statearr_25342_26393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (1))){
var inst_25293 = [];
var inst_25294 = inst_25293;
var inst_25295 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25339__$1 = (function (){var statearr_25347 = state_25339;
(statearr_25347[(7)] = inst_25294);

(statearr_25347[(8)] = inst_25295);

return statearr_25347;
})();
var statearr_25348_26394 = state_25339__$1;
(statearr_25348_26394[(2)] = null);

(statearr_25348_26394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (4))){
var inst_25298 = (state_25339[(9)]);
var inst_25298__$1 = (state_25339[(2)]);
var inst_25299 = (inst_25298__$1 == null);
var inst_25300 = cljs.core.not(inst_25299);
var state_25339__$1 = (function (){var statearr_25350 = state_25339;
(statearr_25350[(9)] = inst_25298__$1);

return statearr_25350;
})();
if(inst_25300){
var statearr_25351_26395 = state_25339__$1;
(statearr_25351_26395[(1)] = (5));

} else {
var statearr_25353_26396 = state_25339__$1;
(statearr_25353_26396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (15))){
var inst_25294 = (state_25339[(7)]);
var inst_25327 = cljs.core.vec(inst_25294);
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25339__$1,(18),out,inst_25327);
} else {
if((state_val_25340 === (13))){
var inst_25322 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25356_26401 = state_25339__$1;
(statearr_25356_26401[(2)] = inst_25322);

(statearr_25356_26401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (6))){
var inst_25294 = (state_25339[(7)]);
var inst_25324 = inst_25294.length;
var inst_25325 = (inst_25324 > (0));
var state_25339__$1 = state_25339;
if(cljs.core.truth_(inst_25325)){
var statearr_25358_26402 = state_25339__$1;
(statearr_25358_26402[(1)] = (15));

} else {
var statearr_25359_26403 = state_25339__$1;
(statearr_25359_26403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (17))){
var inst_25332 = (state_25339[(2)]);
var inst_25333 = cljs.core.async.close_BANG_(out);
var state_25339__$1 = (function (){var statearr_25360 = state_25339;
(statearr_25360[(10)] = inst_25332);

return statearr_25360;
})();
var statearr_25362_26404 = state_25339__$1;
(statearr_25362_26404[(2)] = inst_25333);

(statearr_25362_26404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (3))){
var inst_25337 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25339__$1,inst_25337);
} else {
if((state_val_25340 === (12))){
var inst_25294 = (state_25339[(7)]);
var inst_25315 = cljs.core.vec(inst_25294);
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25339__$1,(14),out,inst_25315);
} else {
if((state_val_25340 === (2))){
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25339__$1,(4),ch);
} else {
if((state_val_25340 === (11))){
var inst_25294 = (state_25339[(7)]);
var inst_25298 = (state_25339[(9)]);
var inst_25304 = (state_25339[(11)]);
var inst_25312 = inst_25294.push(inst_25298);
var tmp25363 = inst_25294;
var inst_25294__$1 = tmp25363;
var inst_25295 = inst_25304;
var state_25339__$1 = (function (){var statearr_25369 = state_25339;
(statearr_25369[(7)] = inst_25294__$1);

(statearr_25369[(8)] = inst_25295);

(statearr_25369[(12)] = inst_25312);

return statearr_25369;
})();
var statearr_25370_26416 = state_25339__$1;
(statearr_25370_26416[(2)] = null);

(statearr_25370_26416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (9))){
var inst_25295 = (state_25339[(8)]);
var inst_25308 = cljs.core.keyword_identical_QMARK_(inst_25295,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_25339__$1 = state_25339;
var statearr_25371_26417 = state_25339__$1;
(statearr_25371_26417[(2)] = inst_25308);

(statearr_25371_26417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (5))){
var inst_25298 = (state_25339[(9)]);
var inst_25305 = (state_25339[(13)]);
var inst_25304 = (state_25339[(11)]);
var inst_25295 = (state_25339[(8)]);
var inst_25304__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25298) : f.call(null, inst_25298));
var inst_25305__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25304__$1,inst_25295);
var state_25339__$1 = (function (){var statearr_25372 = state_25339;
(statearr_25372[(13)] = inst_25305__$1);

(statearr_25372[(11)] = inst_25304__$1);

return statearr_25372;
})();
if(inst_25305__$1){
var statearr_25374_26425 = state_25339__$1;
(statearr_25374_26425[(1)] = (8));

} else {
var statearr_25375_26426 = state_25339__$1;
(statearr_25375_26426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (14))){
var inst_25298 = (state_25339[(9)]);
var inst_25304 = (state_25339[(11)]);
var inst_25317 = (state_25339[(2)]);
var inst_25318 = [];
var inst_25319 = inst_25318.push(inst_25298);
var inst_25294 = inst_25318;
var inst_25295 = inst_25304;
var state_25339__$1 = (function (){var statearr_25376 = state_25339;
(statearr_25376[(7)] = inst_25294);

(statearr_25376[(14)] = inst_25319);

(statearr_25376[(15)] = inst_25317);

(statearr_25376[(8)] = inst_25295);

return statearr_25376;
})();
var statearr_25377_26434 = state_25339__$1;
(statearr_25377_26434[(2)] = null);

(statearr_25377_26434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (16))){
var state_25339__$1 = state_25339;
var statearr_25378_26435 = state_25339__$1;
(statearr_25378_26435[(2)] = null);

(statearr_25378_26435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (10))){
var inst_25310 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
if(cljs.core.truth_(inst_25310)){
var statearr_25380_26436 = state_25339__$1;
(statearr_25380_26436[(1)] = (11));

} else {
var statearr_25383_26437 = state_25339__$1;
(statearr_25383_26437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (18))){
var inst_25329 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25384_26441 = state_25339__$1;
(statearr_25384_26441[(2)] = inst_25329);

(statearr_25384_26441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (8))){
var inst_25305 = (state_25339[(13)]);
var state_25339__$1 = state_25339;
var statearr_25385_26446 = state_25339__$1;
(statearr_25385_26446[(2)] = inst_25305);

(statearr_25385_26446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21606__auto__ = null;
var cljs$core$async$state_machine__21606__auto____0 = (function (){
var statearr_25386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25386[(0)] = cljs$core$async$state_machine__21606__auto__);

(statearr_25386[(1)] = (1));

return statearr_25386;
});
var cljs$core$async$state_machine__21606__auto____1 = (function (state_25339){
while(true){
var ret_value__21607__auto__ = (function (){try{while(true){
var result__21608__auto__ = switch__21605__auto__(state_25339);
if(cljs.core.keyword_identical_QMARK_(result__21608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21608__auto__;
}
break;
}
}catch (e25387){var ex__21609__auto__ = e25387;
var statearr_25388_26447 = state_25339;
(statearr_25388_26447[(2)] = ex__21609__auto__);


if(cljs.core.seq((state_25339[(4)]))){
var statearr_25389_26448 = state_25339;
(statearr_25389_26448[(1)] = cljs.core.first((state_25339[(4)])));

} else {
throw ex__21609__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26449 = state_25339;
state_25339 = G__26449;
continue;
} else {
return ret_value__21607__auto__;
}
break;
}
});
cljs$core$async$state_machine__21606__auto__ = function(state_25339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21606__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21606__auto____1.call(this,state_25339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21606__auto____0;
cljs$core$async$state_machine__21606__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21606__auto____1;
return cljs$core$async$state_machine__21606__auto__;
})()
})();
var state__21959__auto__ = (function (){var statearr_25394 = f__21958__auto__();
(statearr_25394[(6)] = c__21957__auto___26392);

return statearr_25394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21959__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
