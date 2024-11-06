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
cljs.core.async.t_cljs$core$async17035 = (function (f,blockable,meta17036){
this.f = f;
this.blockable = blockable;
this.meta17036 = meta17036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17037,meta17036__$1){
var self__ = this;
var _17037__$1 = this;
return (new cljs.core.async.t_cljs$core$async17035(self__.f,self__.blockable,meta17036__$1));
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17037){
var self__ = this;
var _17037__$1 = this;
return self__.meta17036;
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17036","meta17036",-1193831569,null)], null);
}));

(cljs.core.async.t_cljs$core$async17035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17035");

(cljs.core.async.t_cljs$core$async17035.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17035.
 */
cljs.core.async.__GT_t_cljs$core$async17035 = (function cljs$core$async$__GT_t_cljs$core$async17035(f,blockable,meta17036){
return (new cljs.core.async.t_cljs$core$async17035(f,blockable,meta17036));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17031 = arguments.length;
switch (G__17031) {
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
return (new cljs.core.async.t_cljs$core$async17035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17069 = arguments.length;
switch (G__17069) {
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
var G__17087 = arguments.length;
switch (G__17087) {
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
var G__17114 = arguments.length;
switch (G__17114) {
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
var val_20514 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20514) : fn1.call(null, val_20514));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20514) : fn1.call(null, val_20514));
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
var G__17134 = arguments.length;
switch (G__17134) {
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
var n__5593__auto___20518 = n;
var x_20519 = (0);
while(true){
if((x_20519 < n__5593__auto___20518)){
(a[x_20519] = x_20519);

var G__20520 = (x_20519 + (1));
x_20519 = G__20520;
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
cljs.core.async.t_cljs$core$async17148 = (function (flag,meta17149){
this.flag = flag;
this.meta17149 = meta17149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17150,meta17149__$1){
var self__ = this;
var _17150__$1 = this;
return (new cljs.core.async.t_cljs$core$async17148(self__.flag,meta17149__$1));
}));

(cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17150){
var self__ = this;
var _17150__$1 = this;
return self__.meta17149;
}));

(cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17149","meta17149",1805495063,null)], null);
}));

(cljs.core.async.t_cljs$core$async17148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17148");

(cljs.core.async.t_cljs$core$async17148.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17148.
 */
cljs.core.async.__GT_t_cljs$core$async17148 = (function cljs$core$async$__GT_t_cljs$core$async17148(flag,meta17149){
return (new cljs.core.async.t_cljs$core$async17148(flag,meta17149));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17148(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17167 = (function (flag,cb,meta17168){
this.flag = flag;
this.cb = cb;
this.meta17168 = meta17168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17169,meta17168__$1){
var self__ = this;
var _17169__$1 = this;
return (new cljs.core.async.t_cljs$core$async17167(self__.flag,self__.cb,meta17168__$1));
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17169){
var self__ = this;
var _17169__$1 = this;
return self__.meta17168;
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17168","meta17168",-1382711938,null)], null);
}));

(cljs.core.async.t_cljs$core$async17167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17167");

(cljs.core.async.t_cljs$core$async17167.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17167.
 */
cljs.core.async.__GT_t_cljs$core$async17167 = (function cljs$core$async$__GT_t_cljs$core$async17167(flag,cb,meta17168){
return (new cljs.core.async.t_cljs$core$async17167(flag,cb,meta17168));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17167(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17177_SHARP_){
var G__17183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17177_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17183) : fret.call(null, G__17183));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17178_SHARP_){
var G__17185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17178_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17185) : fret.call(null, G__17185));
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
var G__20525 = (i + (1));
i = G__20525;
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
var len__5726__auto___20526 = arguments.length;
var i__5727__auto___20527 = (0);
while(true){
if((i__5727__auto___20527 < len__5726__auto___20526)){
args__5732__auto__.push((arguments[i__5727__auto___20527]));

var G__20528 = (i__5727__auto___20527 + (1));
i__5727__auto___20527 = G__20528;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17192){
var map__17193 = p__17192;
var map__17193__$1 = cljs.core.__destructure_map(map__17193);
var opts = map__17193__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17189){
var G__17190 = cljs.core.first(seq17189);
var seq17189__$1 = cljs.core.next(seq17189);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17190,seq17189__$1);
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
var G__17206 = arguments.length;
switch (G__17206) {
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
var c__16903__auto___20537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_17300){
var state_val_17301 = (state_17300[(1)]);
if((state_val_17301 === (7))){
var inst_17295 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17304_20538 = state_17300__$1;
(statearr_17304_20538[(2)] = inst_17295);

(statearr_17304_20538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (1))){
var state_17300__$1 = state_17300;
var statearr_17305_20539 = state_17300__$1;
(statearr_17305_20539[(2)] = null);

(statearr_17305_20539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (4))){
var inst_17253 = (state_17300[(7)]);
var inst_17253__$1 = (state_17300[(2)]);
var inst_17260 = (inst_17253__$1 == null);
var state_17300__$1 = (function (){var statearr_17308 = state_17300;
(statearr_17308[(7)] = inst_17253__$1);

return statearr_17308;
})();
if(cljs.core.truth_(inst_17260)){
var statearr_17309_20541 = state_17300__$1;
(statearr_17309_20541[(1)] = (5));

} else {
var statearr_17310_20542 = state_17300__$1;
(statearr_17310_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (13))){
var state_17300__$1 = state_17300;
var statearr_17311_20543 = state_17300__$1;
(statearr_17311_20543[(2)] = null);

(statearr_17311_20543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (6))){
var inst_17253 = (state_17300[(7)]);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17300__$1,(11),to,inst_17253);
} else {
if((state_val_17301 === (3))){
var inst_17297 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17300__$1,inst_17297);
} else {
if((state_val_17301 === (12))){
var state_17300__$1 = state_17300;
var statearr_17317_20544 = state_17300__$1;
(statearr_17317_20544[(2)] = null);

(statearr_17317_20544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (2))){
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17300__$1,(4),from);
} else {
if((state_val_17301 === (11))){
var inst_17279 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
if(cljs.core.truth_(inst_17279)){
var statearr_17318_20545 = state_17300__$1;
(statearr_17318_20545[(1)] = (12));

} else {
var statearr_17319_20546 = state_17300__$1;
(statearr_17319_20546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (9))){
var state_17300__$1 = state_17300;
var statearr_17320_20547 = state_17300__$1;
(statearr_17320_20547[(2)] = null);

(statearr_17320_20547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (5))){
var state_17300__$1 = state_17300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17321_20548 = state_17300__$1;
(statearr_17321_20548[(1)] = (8));

} else {
var statearr_17322_20549 = state_17300__$1;
(statearr_17322_20549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (14))){
var inst_17293 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17323_20550 = state_17300__$1;
(statearr_17323_20550[(2)] = inst_17293);

(statearr_17323_20550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (10))){
var inst_17275 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17324_20553 = state_17300__$1;
(statearr_17324_20553[(2)] = inst_17275);

(statearr_17324_20553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (8))){
var inst_17271 = cljs.core.async.close_BANG_(to);
var state_17300__$1 = state_17300;
var statearr_17325_20554 = state_17300__$1;
(statearr_17325_20554[(2)] = inst_17271);

(statearr_17325_20554[(1)] = (10));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_17329 = [null,null,null,null,null,null,null,null];
(statearr_17329[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_17329[(1)] = (1));

return statearr_17329;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_17300){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17300);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17330){var ex__16573__auto__ = e17330;
var statearr_17331_20556 = state_17300;
(statearr_17331_20556[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17300[(4)]))){
var statearr_17332_20557 = state_17300;
(statearr_17332_20557[(1)] = cljs.core.first((state_17300[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20558 = state_17300;
state_17300 = G__20558;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_17300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_17300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_17333 = f__16904__auto__();
(statearr_17333[(6)] = c__16903__auto___20537);

return statearr_17333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
var process__$1 = (function (p__17342){
var vec__17343 = p__17342;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343,(1),null);
var job = vec__17343;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16903__auto___20561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_17365){
var state_val_17366 = (state_17365[(1)]);
if((state_val_17366 === (1))){
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(2),res,v);
} else {
if((state_val_17366 === (2))){
var inst_17362 = (state_17365[(2)]);
var inst_17363 = cljs.core.async.close_BANG_(res);
var state_17365__$1 = (function (){var statearr_17371 = state_17365;
(statearr_17371[(7)] = inst_17362);

return statearr_17371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17365__$1,inst_17363);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0 = (function (){
var statearr_17380 = [null,null,null,null,null,null,null,null];
(statearr_17380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__);

(statearr_17380[(1)] = (1));

return statearr_17380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1 = (function (state_17365){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17365);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17389){var ex__16573__auto__ = e17389;
var statearr_17390_20567 = state_17365;
(statearr_17390_20567[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17365[(4)]))){
var statearr_17394_20568 = state_17365;
(statearr_17394_20568[(1)] = cljs.core.first((state_17365[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20569 = state_17365;
state_17365 = G__20569;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = function(state_17365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1.call(this,state_17365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_17395 = f__16904__auto__();
(statearr_17395[(6)] = c__16903__auto___20561);

return statearr_17395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17399){
var vec__17400 = p__17399;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(1),null);
var job = vec__17400;
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
var n__5593__auto___20570 = n;
var __20571 = (0);
while(true){
if((__20571 < n__5593__auto___20570)){
var G__17408_20572 = type;
var G__17408_20573__$1 = (((G__17408_20572 instanceof cljs.core.Keyword))?G__17408_20572.fqn:null);
switch (G__17408_20573__$1) {
case "compute":
var c__16903__auto___20575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20571,c__16903__auto___20575,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async){
return (function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = ((function (__20571,c__16903__auto___20575,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async){
return (function (state_17422){
var state_val_17423 = (state_17422[(1)]);
if((state_val_17423 === (1))){
var state_17422__$1 = state_17422;
var statearr_17424_20576 = state_17422__$1;
(statearr_17424_20576[(2)] = null);

(statearr_17424_20576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (2))){
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17422__$1,(4),jobs);
} else {
if((state_val_17423 === (3))){
var inst_17420 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17422__$1,inst_17420);
} else {
if((state_val_17423 === (4))){
var inst_17411 = (state_17422[(2)]);
var inst_17412 = process__$1(inst_17411);
var state_17422__$1 = state_17422;
if(cljs.core.truth_(inst_17412)){
var statearr_17426_20577 = state_17422__$1;
(statearr_17426_20577[(1)] = (5));

} else {
var statearr_17427_20578 = state_17422__$1;
(statearr_17427_20578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (5))){
var state_17422__$1 = state_17422;
var statearr_17436_20579 = state_17422__$1;
(statearr_17436_20579[(2)] = null);

(statearr_17436_20579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (6))){
var state_17422__$1 = state_17422;
var statearr_17441_20580 = state_17422__$1;
(statearr_17441_20580[(2)] = null);

(statearr_17441_20580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (7))){
var inst_17418 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17442_20584 = state_17422__$1;
(statearr_17442_20584[(2)] = inst_17418);

(statearr_17442_20584[(1)] = (3));


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
});})(__20571,c__16903__auto___20575,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async))
;
return ((function (__20571,switch__16569__auto__,c__16903__auto___20575,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0 = (function (){
var statearr_17444 = [null,null,null,null,null,null,null];
(statearr_17444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__);

(statearr_17444[(1)] = (1));

return statearr_17444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1 = (function (state_17422){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17422);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17448){var ex__16573__auto__ = e17448;
var statearr_17449_20585 = state_17422;
(statearr_17449_20585[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17422[(4)]))){
var statearr_17453_20588 = state_17422;
(statearr_17453_20588[(1)] = cljs.core.first((state_17422[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20589 = state_17422;
state_17422 = G__20589;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = function(state_17422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1.call(this,state_17422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__;
})()
;})(__20571,switch__16569__auto__,c__16903__auto___20575,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async))
})();
var state__16905__auto__ = (function (){var statearr_17460 = f__16904__auto__();
(statearr_17460[(6)] = c__16903__auto___20575);

return statearr_17460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
});})(__20571,c__16903__auto___20575,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async))
);


break;
case "async":
var c__16903__auto___20591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20571,c__16903__auto___20591,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async){
return (function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = ((function (__20571,c__16903__auto___20591,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async){
return (function (state_17478){
var state_val_17479 = (state_17478[(1)]);
if((state_val_17479 === (1))){
var state_17478__$1 = state_17478;
var statearr_17485_20592 = state_17478__$1;
(statearr_17485_20592[(2)] = null);

(statearr_17485_20592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (2))){
var state_17478__$1 = state_17478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17478__$1,(4),jobs);
} else {
if((state_val_17479 === (3))){
var inst_17476 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17478__$1,inst_17476);
} else {
if((state_val_17479 === (4))){
var inst_17468 = (state_17478[(2)]);
var inst_17469 = async(inst_17468);
var state_17478__$1 = state_17478;
if(cljs.core.truth_(inst_17469)){
var statearr_17495_20598 = state_17478__$1;
(statearr_17495_20598[(1)] = (5));

} else {
var statearr_17496_20599 = state_17478__$1;
(statearr_17496_20599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (5))){
var state_17478__$1 = state_17478;
var statearr_17497_20600 = state_17478__$1;
(statearr_17497_20600[(2)] = null);

(statearr_17497_20600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (6))){
var state_17478__$1 = state_17478;
var statearr_17498_20602 = state_17478__$1;
(statearr_17498_20602[(2)] = null);

(statearr_17498_20602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (7))){
var inst_17474 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
var statearr_17499_20604 = state_17478__$1;
(statearr_17499_20604[(2)] = inst_17474);

(statearr_17499_20604[(1)] = (3));


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
});})(__20571,c__16903__auto___20591,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async))
;
return ((function (__20571,switch__16569__auto__,c__16903__auto___20591,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0 = (function (){
var statearr_17500 = [null,null,null,null,null,null,null];
(statearr_17500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__);

(statearr_17500[(1)] = (1));

return statearr_17500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1 = (function (state_17478){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17478);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17501){var ex__16573__auto__ = e17501;
var statearr_17502_20606 = state_17478;
(statearr_17502_20606[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17478[(4)]))){
var statearr_17503_20608 = state_17478;
(statearr_17503_20608[(1)] = cljs.core.first((state_17478[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20609 = state_17478;
state_17478 = G__20609;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = function(state_17478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1.call(this,state_17478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__;
})()
;})(__20571,switch__16569__auto__,c__16903__auto___20591,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async))
})();
var state__16905__auto__ = (function (){var statearr_17511 = f__16904__auto__();
(statearr_17511[(6)] = c__16903__auto___20591);

return statearr_17511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
});})(__20571,c__16903__auto___20591,G__17408_20572,G__17408_20573__$1,n__5593__auto___20570,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17408_20573__$1)].join('')));

}

var G__20610 = (__20571 + (1));
__20571 = G__20610;
continue;
} else {
}
break;
}

var c__16903__auto___20611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_17545){
var state_val_17546 = (state_17545[(1)]);
if((state_val_17546 === (7))){
var inst_17541 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
var statearr_17555_20613 = state_17545__$1;
(statearr_17555_20613[(2)] = inst_17541);

(statearr_17555_20613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (1))){
var state_17545__$1 = state_17545;
var statearr_17556_20614 = state_17545__$1;
(statearr_17556_20614[(2)] = null);

(statearr_17556_20614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (4))){
var inst_17526 = (state_17545[(7)]);
var inst_17526__$1 = (state_17545[(2)]);
var inst_17527 = (inst_17526__$1 == null);
var state_17545__$1 = (function (){var statearr_17560 = state_17545;
(statearr_17560[(7)] = inst_17526__$1);

return statearr_17560;
})();
if(cljs.core.truth_(inst_17527)){
var statearr_17563_20616 = state_17545__$1;
(statearr_17563_20616[(1)] = (5));

} else {
var statearr_17566_20617 = state_17545__$1;
(statearr_17566_20617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (6))){
var inst_17531 = (state_17545[(8)]);
var inst_17526 = (state_17545[(7)]);
var inst_17531__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17533 = [inst_17526,inst_17531__$1];
var inst_17534 = (new cljs.core.PersistentVector(null,2,(5),inst_17532,inst_17533,null));
var state_17545__$1 = (function (){var statearr_17571 = state_17545;
(statearr_17571[(8)] = inst_17531__$1);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17545__$1,(8),jobs,inst_17534);
} else {
if((state_val_17546 === (3))){
var inst_17543 = (state_17545[(2)]);
var state_17545__$1 = state_17545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17545__$1,inst_17543);
} else {
if((state_val_17546 === (2))){
var state_17545__$1 = state_17545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17545__$1,(4),from);
} else {
if((state_val_17546 === (9))){
var inst_17538 = (state_17545[(2)]);
var state_17545__$1 = (function (){var statearr_17572 = state_17545;
(statearr_17572[(9)] = inst_17538);

return statearr_17572;
})();
var statearr_17573_20622 = state_17545__$1;
(statearr_17573_20622[(2)] = null);

(statearr_17573_20622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (5))){
var inst_17529 = cljs.core.async.close_BANG_(jobs);
var state_17545__$1 = state_17545;
var statearr_17575_20627 = state_17545__$1;
(statearr_17575_20627[(2)] = inst_17529);

(statearr_17575_20627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17546 === (8))){
var inst_17531 = (state_17545[(8)]);
var inst_17536 = (state_17545[(2)]);
var state_17545__$1 = (function (){var statearr_17577 = state_17545;
(statearr_17577[(10)] = inst_17536);

return statearr_17577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17545__$1,(9),results,inst_17531);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0 = (function (){
var statearr_17581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__);

(statearr_17581[(1)] = (1));

return statearr_17581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1 = (function (state_17545){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17545);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17586){var ex__16573__auto__ = e17586;
var statearr_17587_20628 = state_17545;
(statearr_17587_20628[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17545[(4)]))){
var statearr_17593_20629 = state_17545;
(statearr_17593_20629[(1)] = cljs.core.first((state_17545[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20631 = state_17545;
state_17545 = G__20631;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = function(state_17545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1.call(this,state_17545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_17600 = f__16904__auto__();
(statearr_17600[(6)] = c__16903__auto___20611);

return statearr_17600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));


var c__16903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_17640){
var state_val_17641 = (state_17640[(1)]);
if((state_val_17641 === (7))){
var inst_17636 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17643_20632 = state_17640__$1;
(statearr_17643_20632[(2)] = inst_17636);

(statearr_17643_20632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (20))){
var state_17640__$1 = state_17640;
var statearr_17647_20635 = state_17640__$1;
(statearr_17647_20635[(2)] = null);

(statearr_17647_20635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (1))){
var state_17640__$1 = state_17640;
var statearr_17651_20637 = state_17640__$1;
(statearr_17651_20637[(2)] = null);

(statearr_17651_20637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (4))){
var inst_17603 = (state_17640[(7)]);
var inst_17603__$1 = (state_17640[(2)]);
var inst_17604 = (inst_17603__$1 == null);
var state_17640__$1 = (function (){var statearr_17652 = state_17640;
(statearr_17652[(7)] = inst_17603__$1);

return statearr_17652;
})();
if(cljs.core.truth_(inst_17604)){
var statearr_17653_20638 = state_17640__$1;
(statearr_17653_20638[(1)] = (5));

} else {
var statearr_17654_20639 = state_17640__$1;
(statearr_17654_20639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (15))){
var inst_17618 = (state_17640[(8)]);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17640__$1,(18),to,inst_17618);
} else {
if((state_val_17641 === (21))){
var inst_17631 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17655_20640 = state_17640__$1;
(statearr_17655_20640[(2)] = inst_17631);

(statearr_17655_20640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (13))){
var inst_17633 = (state_17640[(2)]);
var state_17640__$1 = (function (){var statearr_17656 = state_17640;
(statearr_17656[(9)] = inst_17633);

return statearr_17656;
})();
var statearr_17662_20642 = state_17640__$1;
(statearr_17662_20642[(2)] = null);

(statearr_17662_20642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (6))){
var inst_17603 = (state_17640[(7)]);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17640__$1,(11),inst_17603);
} else {
if((state_val_17641 === (17))){
var inst_17626 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
if(cljs.core.truth_(inst_17626)){
var statearr_17663_20649 = state_17640__$1;
(statearr_17663_20649[(1)] = (19));

} else {
var statearr_17664_20650 = state_17640__$1;
(statearr_17664_20650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (3))){
var inst_17638 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17640__$1,inst_17638);
} else {
if((state_val_17641 === (12))){
var inst_17614 = (state_17640[(10)]);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17640__$1,(14),inst_17614);
} else {
if((state_val_17641 === (2))){
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17640__$1,(4),results);
} else {
if((state_val_17641 === (19))){
var state_17640__$1 = state_17640;
var statearr_17668_20651 = state_17640__$1;
(statearr_17668_20651[(2)] = null);

(statearr_17668_20651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (11))){
var inst_17614 = (state_17640[(2)]);
var state_17640__$1 = (function (){var statearr_17674 = state_17640;
(statearr_17674[(10)] = inst_17614);

return statearr_17674;
})();
var statearr_17675_20652 = state_17640__$1;
(statearr_17675_20652[(2)] = null);

(statearr_17675_20652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (9))){
var state_17640__$1 = state_17640;
var statearr_17687_20653 = state_17640__$1;
(statearr_17687_20653[(2)] = null);

(statearr_17687_20653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (5))){
var state_17640__$1 = state_17640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17689_20654 = state_17640__$1;
(statearr_17689_20654[(1)] = (8));

} else {
var statearr_17694_20655 = state_17640__$1;
(statearr_17694_20655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (14))){
var inst_17618 = (state_17640[(8)]);
var inst_17620 = (state_17640[(11)]);
var inst_17618__$1 = (state_17640[(2)]);
var inst_17619 = (inst_17618__$1 == null);
var inst_17620__$1 = cljs.core.not(inst_17619);
var state_17640__$1 = (function (){var statearr_17695 = state_17640;
(statearr_17695[(8)] = inst_17618__$1);

(statearr_17695[(11)] = inst_17620__$1);

return statearr_17695;
})();
if(inst_17620__$1){
var statearr_17696_20656 = state_17640__$1;
(statearr_17696_20656[(1)] = (15));

} else {
var statearr_17697_20657 = state_17640__$1;
(statearr_17697_20657[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (16))){
var inst_17620 = (state_17640[(11)]);
var state_17640__$1 = state_17640;
var statearr_17700_20658 = state_17640__$1;
(statearr_17700_20658[(2)] = inst_17620);

(statearr_17700_20658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (10))){
var inst_17611 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17701_20659 = state_17640__$1;
(statearr_17701_20659[(2)] = inst_17611);

(statearr_17701_20659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (18))){
var inst_17623 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17702_20660 = state_17640__$1;
(statearr_17702_20660[(2)] = inst_17623);

(statearr_17702_20660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17641 === (8))){
var inst_17608 = cljs.core.async.close_BANG_(to);
var state_17640__$1 = state_17640;
var statearr_17703_20661 = state_17640__$1;
(statearr_17703_20661[(2)] = inst_17608);

(statearr_17703_20661[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0 = (function (){
var statearr_17704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__);

(statearr_17704[(1)] = (1));

return statearr_17704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1 = (function (state_17640){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17640);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17708){var ex__16573__auto__ = e17708;
var statearr_17709_20665 = state_17640;
(statearr_17709_20665[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17640[(4)]))){
var statearr_17714_20666 = state_17640;
(statearr_17714_20666[(1)] = cljs.core.first((state_17640[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20667 = state_17640;
state_17640 = G__20667;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__ = function(state_17640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1.call(this,state_17640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_17719 = f__16904__auto__();
(statearr_17719[(6)] = c__16903__auto__);

return statearr_17719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));

return c__16903__auto__;
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
var G__17722 = arguments.length;
switch (G__17722) {
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
var G__17730 = arguments.length;
switch (G__17730) {
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
var G__17740 = arguments.length;
switch (G__17740) {
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
var c__16903__auto___20672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_17782){
var state_val_17783 = (state_17782[(1)]);
if((state_val_17783 === (7))){
var inst_17778 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17793_20681 = state_17782__$1;
(statearr_17793_20681[(2)] = inst_17778);

(statearr_17793_20681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (1))){
var state_17782__$1 = state_17782;
var statearr_17794_20682 = state_17782__$1;
(statearr_17794_20682[(2)] = null);

(statearr_17794_20682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (4))){
var inst_17759 = (state_17782[(7)]);
var inst_17759__$1 = (state_17782[(2)]);
var inst_17760 = (inst_17759__$1 == null);
var state_17782__$1 = (function (){var statearr_17800 = state_17782;
(statearr_17800[(7)] = inst_17759__$1);

return statearr_17800;
})();
if(cljs.core.truth_(inst_17760)){
var statearr_17801_20683 = state_17782__$1;
(statearr_17801_20683[(1)] = (5));

} else {
var statearr_17802_20684 = state_17782__$1;
(statearr_17802_20684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (13))){
var state_17782__$1 = state_17782;
var statearr_17805_20685 = state_17782__$1;
(statearr_17805_20685[(2)] = null);

(statearr_17805_20685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (6))){
var inst_17759 = (state_17782[(7)]);
var inst_17765 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17759) : p.call(null, inst_17759));
var state_17782__$1 = state_17782;
if(cljs.core.truth_(inst_17765)){
var statearr_17806_20689 = state_17782__$1;
(statearr_17806_20689[(1)] = (9));

} else {
var statearr_17807_20696 = state_17782__$1;
(statearr_17807_20696[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (3))){
var inst_17780 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17782__$1,inst_17780);
} else {
if((state_val_17783 === (12))){
var state_17782__$1 = state_17782;
var statearr_17813_20697 = state_17782__$1;
(statearr_17813_20697[(2)] = null);

(statearr_17813_20697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (2))){
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17782__$1,(4),ch);
} else {
if((state_val_17783 === (11))){
var inst_17759 = (state_17782[(7)]);
var inst_17769 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17782__$1,(8),inst_17769,inst_17759);
} else {
if((state_val_17783 === (9))){
var state_17782__$1 = state_17782;
var statearr_17820_20704 = state_17782__$1;
(statearr_17820_20704[(2)] = tc);

(statearr_17820_20704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (5))){
var inst_17762 = cljs.core.async.close_BANG_(tc);
var inst_17763 = cljs.core.async.close_BANG_(fc);
var state_17782__$1 = (function (){var statearr_17823 = state_17782;
(statearr_17823[(8)] = inst_17762);

return statearr_17823;
})();
var statearr_17828_20705 = state_17782__$1;
(statearr_17828_20705[(2)] = inst_17763);

(statearr_17828_20705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (14))){
var inst_17776 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17836_20706 = state_17782__$1;
(statearr_17836_20706[(2)] = inst_17776);

(statearr_17836_20706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (10))){
var state_17782__$1 = state_17782;
var statearr_17846_20707 = state_17782__$1;
(statearr_17846_20707[(2)] = fc);

(statearr_17846_20707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (8))){
var inst_17771 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
if(cljs.core.truth_(inst_17771)){
var statearr_17853_20708 = state_17782__$1;
(statearr_17853_20708[(1)] = (12));

} else {
var statearr_17854_20709 = state_17782__$1;
(statearr_17854_20709[(1)] = (13));

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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_17858 = [null,null,null,null,null,null,null,null,null];
(statearr_17858[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_17858[(1)] = (1));

return statearr_17858;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_17782){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17782);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e17859){var ex__16573__auto__ = e17859;
var statearr_17860_20710 = state_17782;
(statearr_17860_20710[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17782[(4)]))){
var statearr_17861_20711 = state_17782;
(statearr_17861_20711[(1)] = cljs.core.first((state_17782[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20720 = state_17782;
state_17782 = G__20720;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_17782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_17782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_17900 = f__16904__auto__();
(statearr_17900[(6)] = c__16903__auto___20672);

return statearr_17900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
var c__16903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_17948){
var state_val_17950 = (state_17948[(1)]);
if((state_val_17950 === (7))){
var inst_17937 = (state_17948[(2)]);
var state_17948__$1 = state_17948;
var statearr_17978_20727 = state_17948__$1;
(statearr_17978_20727[(2)] = inst_17937);

(statearr_17978_20727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (1))){
var inst_17920 = init;
var inst_17921 = inst_17920;
var state_17948__$1 = (function (){var statearr_17980 = state_17948;
(statearr_17980[(7)] = inst_17921);

return statearr_17980;
})();
var statearr_17982_20728 = state_17948__$1;
(statearr_17982_20728[(2)] = null);

(statearr_17982_20728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (4))){
var inst_17924 = (state_17948[(8)]);
var inst_17924__$1 = (state_17948[(2)]);
var inst_17925 = (inst_17924__$1 == null);
var state_17948__$1 = (function (){var statearr_17989 = state_17948;
(statearr_17989[(8)] = inst_17924__$1);

return statearr_17989;
})();
if(cljs.core.truth_(inst_17925)){
var statearr_17990_20735 = state_17948__$1;
(statearr_17990_20735[(1)] = (5));

} else {
var statearr_18001_20736 = state_17948__$1;
(statearr_18001_20736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (6))){
var inst_17921 = (state_17948[(7)]);
var inst_17924 = (state_17948[(8)]);
var inst_17928 = (state_17948[(9)]);
var inst_17928__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17921,inst_17924) : f.call(null, inst_17921,inst_17924));
var inst_17929 = cljs.core.reduced_QMARK_(inst_17928__$1);
var state_17948__$1 = (function (){var statearr_18020 = state_17948;
(statearr_18020[(9)] = inst_17928__$1);

return statearr_18020;
})();
if(inst_17929){
var statearr_18025_20738 = state_17948__$1;
(statearr_18025_20738[(1)] = (8));

} else {
var statearr_18049_20739 = state_17948__$1;
(statearr_18049_20739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (3))){
var inst_17940 = (state_17948[(2)]);
var state_17948__$1 = state_17948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17948__$1,inst_17940);
} else {
if((state_val_17950 === (2))){
var state_17948__$1 = state_17948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17948__$1,(4),ch);
} else {
if((state_val_17950 === (9))){
var inst_17928 = (state_17948[(9)]);
var inst_17921 = inst_17928;
var state_17948__$1 = (function (){var statearr_18073 = state_17948;
(statearr_18073[(7)] = inst_17921);

return statearr_18073;
})();
var statearr_18074_20740 = state_17948__$1;
(statearr_18074_20740[(2)] = null);

(statearr_18074_20740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (5))){
var inst_17921 = (state_17948[(7)]);
var state_17948__$1 = state_17948;
var statearr_18076_20741 = state_17948__$1;
(statearr_18076_20741[(2)] = inst_17921);

(statearr_18076_20741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (10))){
var inst_17935 = (state_17948[(2)]);
var state_17948__$1 = state_17948;
var statearr_18079_20744 = state_17948__$1;
(statearr_18079_20744[(2)] = inst_17935);

(statearr_18079_20744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (8))){
var inst_17928 = (state_17948[(9)]);
var inst_17931 = cljs.core.deref(inst_17928);
var state_17948__$1 = state_17948;
var statearr_18086_20745 = state_17948__$1;
(statearr_18086_20745[(2)] = inst_17931);

(statearr_18086_20745[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16570__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16570__auto____0 = (function (){
var statearr_18109 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18109[(0)] = cljs$core$async$reduce_$_state_machine__16570__auto__);

(statearr_18109[(1)] = (1));

return statearr_18109;
});
var cljs$core$async$reduce_$_state_machine__16570__auto____1 = (function (state_17948){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_17948);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e18116){var ex__16573__auto__ = e18116;
var statearr_18118_20746 = state_17948;
(statearr_18118_20746[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_17948[(4)]))){
var statearr_18123_20748 = state_17948;
(statearr_18123_20748[(1)] = cljs.core.first((state_17948[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20749 = state_17948;
state_17948 = G__20749;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16570__auto__ = function(state_17948){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16570__auto____1.call(this,state_17948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16570__auto____0;
cljs$core$async$reduce_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16570__auto____1;
return cljs$core$async$reduce_$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_18128 = f__16904__auto__();
(statearr_18128[(6)] = c__16903__auto__);

return statearr_18128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));

return c__16903__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__16903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_18155){
var state_val_18156 = (state_18155[(1)]);
if((state_val_18156 === (1))){
var inst_18145 = cljs.core.async.reduce(f__$1,init,ch);
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18155__$1,(2),inst_18145);
} else {
if((state_val_18156 === (2))){
var inst_18147 = (state_18155[(2)]);
var inst_18148 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18147) : f__$1.call(null, inst_18147));
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18155__$1,inst_18148);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16570__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16570__auto____0 = (function (){
var statearr_18173 = [null,null,null,null,null,null,null];
(statearr_18173[(0)] = cljs$core$async$transduce_$_state_machine__16570__auto__);

(statearr_18173[(1)] = (1));

return statearr_18173;
});
var cljs$core$async$transduce_$_state_machine__16570__auto____1 = (function (state_18155){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_18155);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e18178){var ex__16573__auto__ = e18178;
var statearr_18179_20750 = state_18155;
(statearr_18179_20750[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_18155[(4)]))){
var statearr_18182_20751 = state_18155;
(statearr_18182_20751[(1)] = cljs.core.first((state_18155[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20753 = state_18155;
state_18155 = G__20753;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16570__auto__ = function(state_18155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16570__auto____1.call(this,state_18155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16570__auto____0;
cljs$core$async$transduce_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16570__auto____1;
return cljs$core$async$transduce_$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_18188 = f__16904__auto__();
(statearr_18188[(6)] = c__16903__auto__);

return statearr_18188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));

return c__16903__auto__;
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
var G__18202 = arguments.length;
switch (G__18202) {
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
var c__16903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_18252){
var state_val_18253 = (state_18252[(1)]);
if((state_val_18253 === (7))){
var inst_18234 = (state_18252[(2)]);
var state_18252__$1 = state_18252;
var statearr_18256_20761 = state_18252__$1;
(statearr_18256_20761[(2)] = inst_18234);

(statearr_18256_20761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (1))){
var inst_18208 = cljs.core.seq(coll);
var inst_18209 = inst_18208;
var state_18252__$1 = (function (){var statearr_18262 = state_18252;
(statearr_18262[(7)] = inst_18209);

return statearr_18262;
})();
var statearr_18265_20763 = state_18252__$1;
(statearr_18265_20763[(2)] = null);

(statearr_18265_20763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (4))){
var inst_18209 = (state_18252[(7)]);
var inst_18231 = cljs.core.first(inst_18209);
var state_18252__$1 = state_18252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18252__$1,(7),ch,inst_18231);
} else {
if((state_val_18253 === (13))){
var inst_18246 = (state_18252[(2)]);
var state_18252__$1 = state_18252;
var statearr_18270_20764 = state_18252__$1;
(statearr_18270_20764[(2)] = inst_18246);

(statearr_18270_20764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (6))){
var inst_18237 = (state_18252[(2)]);
var state_18252__$1 = state_18252;
if(cljs.core.truth_(inst_18237)){
var statearr_18271_20765 = state_18252__$1;
(statearr_18271_20765[(1)] = (8));

} else {
var statearr_18272_20766 = state_18252__$1;
(statearr_18272_20766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (3))){
var inst_18250 = (state_18252[(2)]);
var state_18252__$1 = state_18252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18252__$1,inst_18250);
} else {
if((state_val_18253 === (12))){
var state_18252__$1 = state_18252;
var statearr_18283_20767 = state_18252__$1;
(statearr_18283_20767[(2)] = null);

(statearr_18283_20767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (2))){
var inst_18209 = (state_18252[(7)]);
var state_18252__$1 = state_18252;
if(cljs.core.truth_(inst_18209)){
var statearr_18284_20768 = state_18252__$1;
(statearr_18284_20768[(1)] = (4));

} else {
var statearr_18285_20769 = state_18252__$1;
(statearr_18285_20769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (11))){
var inst_18243 = cljs.core.async.close_BANG_(ch);
var state_18252__$1 = state_18252;
var statearr_18290_20770 = state_18252__$1;
(statearr_18290_20770[(2)] = inst_18243);

(statearr_18290_20770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (9))){
var state_18252__$1 = state_18252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18295_20771 = state_18252__$1;
(statearr_18295_20771[(1)] = (11));

} else {
var statearr_18296_20772 = state_18252__$1;
(statearr_18296_20772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (5))){
var inst_18209 = (state_18252[(7)]);
var state_18252__$1 = state_18252;
var statearr_18297_20774 = state_18252__$1;
(statearr_18297_20774[(2)] = inst_18209);

(statearr_18297_20774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (10))){
var inst_18248 = (state_18252[(2)]);
var state_18252__$1 = state_18252;
var statearr_18318_20777 = state_18252__$1;
(statearr_18318_20777[(2)] = inst_18248);

(statearr_18318_20777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18253 === (8))){
var inst_18209 = (state_18252[(7)]);
var inst_18239 = cljs.core.next(inst_18209);
var inst_18209__$1 = inst_18239;
var state_18252__$1 = (function (){var statearr_18323 = state_18252;
(statearr_18323[(7)] = inst_18209__$1);

return statearr_18323;
})();
var statearr_18324_20779 = state_18252__$1;
(statearr_18324_20779[(2)] = null);

(statearr_18324_20779[(1)] = (2));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_18330 = [null,null,null,null,null,null,null,null];
(statearr_18330[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_18330[(1)] = (1));

return statearr_18330;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_18252){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_18252);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e18331){var ex__16573__auto__ = e18331;
var statearr_18332_20784 = state_18252;
(statearr_18332_20784[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_18252[(4)]))){
var statearr_18333_20785 = state_18252;
(statearr_18333_20785[(1)] = cljs.core.first((state_18252[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20786 = state_18252;
state_18252 = G__20786;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_18252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_18252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_18337 = f__16904__auto__();
(statearr_18337[(6)] = c__16903__auto__);

return statearr_18337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));

return c__16903__auto__;
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
var G__18350 = arguments.length;
switch (G__18350) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_20791 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_20791(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20796 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_20796(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20797 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_20797(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20798 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_20798(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18406 = (function (ch,cs,meta18407){
this.ch = ch;
this.cs = cs;
this.meta18407 = meta18407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18408,meta18407__$1){
var self__ = this;
var _18408__$1 = this;
return (new cljs.core.async.t_cljs$core$async18406(self__.ch,self__.cs,meta18407__$1));
}));

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18408){
var self__ = this;
var _18408__$1 = this;
return self__.meta18407;
}));

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18406.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18407","meta18407",2133006193,null)], null);
}));

(cljs.core.async.t_cljs$core$async18406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18406");

(cljs.core.async.t_cljs$core$async18406.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18406.
 */
cljs.core.async.__GT_t_cljs$core$async18406 = (function cljs$core$async$__GT_t_cljs$core$async18406(ch,cs,meta18407){
return (new cljs.core.async.t_cljs$core$async18406(ch,cs,meta18407));
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
var m = (new cljs.core.async.t_cljs$core$async18406(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16903__auto___20809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_18621){
var state_val_18626 = (state_18621[(1)]);
if((state_val_18626 === (7))){
var inst_18611 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18642_20810 = state_18621__$1;
(statearr_18642_20810[(2)] = inst_18611);

(statearr_18642_20810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (20))){
var inst_18488 = (state_18621[(7)]);
var inst_18504 = cljs.core.first(inst_18488);
var inst_18505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18504,(0),null);
var inst_18506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18504,(1),null);
var state_18621__$1 = (function (){var statearr_18643 = state_18621;
(statearr_18643[(8)] = inst_18505);

return statearr_18643;
})();
if(cljs.core.truth_(inst_18506)){
var statearr_18644_20811 = state_18621__$1;
(statearr_18644_20811[(1)] = (22));

} else {
var statearr_18645_20812 = state_18621__$1;
(statearr_18645_20812[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (27))){
var inst_18549 = (state_18621[(9)]);
var inst_18551 = (state_18621[(10)]);
var inst_18444 = (state_18621[(11)]);
var inst_18556 = (state_18621[(12)]);
var inst_18556__$1 = cljs.core._nth(inst_18549,inst_18551);
var inst_18557 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18556__$1,inst_18444,done);
var state_18621__$1 = (function (){var statearr_18649 = state_18621;
(statearr_18649[(12)] = inst_18556__$1);

return statearr_18649;
})();
if(cljs.core.truth_(inst_18557)){
var statearr_18651_20816 = state_18621__$1;
(statearr_18651_20816[(1)] = (30));

} else {
var statearr_18653_20820 = state_18621__$1;
(statearr_18653_20820[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (1))){
var state_18621__$1 = state_18621;
var statearr_18656_20821 = state_18621__$1;
(statearr_18656_20821[(2)] = null);

(statearr_18656_20821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (24))){
var inst_18488 = (state_18621[(7)]);
var inst_18521 = (state_18621[(2)]);
var inst_18526 = cljs.core.next(inst_18488);
var inst_18461 = inst_18526;
var inst_18462 = null;
var inst_18463 = (0);
var inst_18464 = (0);
var state_18621__$1 = (function (){var statearr_18660 = state_18621;
(statearr_18660[(13)] = inst_18462);

(statearr_18660[(14)] = inst_18521);

(statearr_18660[(15)] = inst_18461);

(statearr_18660[(16)] = inst_18464);

(statearr_18660[(17)] = inst_18463);

return statearr_18660;
})();
var statearr_18661_20822 = state_18621__$1;
(statearr_18661_20822[(2)] = null);

(statearr_18661_20822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (39))){
var state_18621__$1 = state_18621;
var statearr_18665_20823 = state_18621__$1;
(statearr_18665_20823[(2)] = null);

(statearr_18665_20823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (4))){
var inst_18444 = (state_18621[(11)]);
var inst_18444__$1 = (state_18621[(2)]);
var inst_18445 = (inst_18444__$1 == null);
var state_18621__$1 = (function (){var statearr_18667 = state_18621;
(statearr_18667[(11)] = inst_18444__$1);

return statearr_18667;
})();
if(cljs.core.truth_(inst_18445)){
var statearr_18668_20824 = state_18621__$1;
(statearr_18668_20824[(1)] = (5));

} else {
var statearr_18669_20825 = state_18621__$1;
(statearr_18669_20825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (15))){
var inst_18462 = (state_18621[(13)]);
var inst_18461 = (state_18621[(15)]);
var inst_18464 = (state_18621[(16)]);
var inst_18463 = (state_18621[(17)]);
var inst_18484 = (state_18621[(2)]);
var inst_18485 = (inst_18464 + (1));
var tmp18662 = inst_18462;
var tmp18663 = inst_18461;
var tmp18664 = inst_18463;
var inst_18461__$1 = tmp18663;
var inst_18462__$1 = tmp18662;
var inst_18463__$1 = tmp18664;
var inst_18464__$1 = inst_18485;
var state_18621__$1 = (function (){var statearr_18670 = state_18621;
(statearr_18670[(13)] = inst_18462__$1);

(statearr_18670[(18)] = inst_18484);

(statearr_18670[(15)] = inst_18461__$1);

(statearr_18670[(16)] = inst_18464__$1);

(statearr_18670[(17)] = inst_18463__$1);

return statearr_18670;
})();
var statearr_18671_20826 = state_18621__$1;
(statearr_18671_20826[(2)] = null);

(statearr_18671_20826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (21))){
var inst_18529 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18675_20827 = state_18621__$1;
(statearr_18675_20827[(2)] = inst_18529);

(statearr_18675_20827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (31))){
var inst_18556 = (state_18621[(12)]);
var inst_18565 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_18556);
var state_18621__$1 = state_18621;
var statearr_18676_20828 = state_18621__$1;
(statearr_18676_20828[(2)] = inst_18565);

(statearr_18676_20828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (32))){
var inst_18549 = (state_18621[(9)]);
var inst_18551 = (state_18621[(10)]);
var inst_18550 = (state_18621[(19)]);
var inst_18548 = (state_18621[(20)]);
var inst_18567 = (state_18621[(2)]);
var inst_18568 = (inst_18551 + (1));
var tmp18672 = inst_18549;
var tmp18673 = inst_18550;
var tmp18674 = inst_18548;
var inst_18548__$1 = tmp18674;
var inst_18549__$1 = tmp18672;
var inst_18550__$1 = tmp18673;
var inst_18551__$1 = inst_18568;
var state_18621__$1 = (function (){var statearr_18677 = state_18621;
(statearr_18677[(21)] = inst_18567);

(statearr_18677[(9)] = inst_18549__$1);

(statearr_18677[(10)] = inst_18551__$1);

(statearr_18677[(19)] = inst_18550__$1);

(statearr_18677[(20)] = inst_18548__$1);

return statearr_18677;
})();
var statearr_18679_20829 = state_18621__$1;
(statearr_18679_20829[(2)] = null);

(statearr_18679_20829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (40))){
var inst_18580 = (state_18621[(22)]);
var inst_18584 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_18580);
var state_18621__$1 = state_18621;
var statearr_18680_20830 = state_18621__$1;
(statearr_18680_20830[(2)] = inst_18584);

(statearr_18680_20830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (33))){
var inst_18571 = (state_18621[(23)]);
var inst_18573 = cljs.core.chunked_seq_QMARK_(inst_18571);
var state_18621__$1 = state_18621;
if(inst_18573){
var statearr_18681_20831 = state_18621__$1;
(statearr_18681_20831[(1)] = (36));

} else {
var statearr_18682_20832 = state_18621__$1;
(statearr_18682_20832[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (13))){
var inst_18478 = (state_18621[(24)]);
var inst_18481 = cljs.core.async.close_BANG_(inst_18478);
var state_18621__$1 = state_18621;
var statearr_18684_20833 = state_18621__$1;
(statearr_18684_20833[(2)] = inst_18481);

(statearr_18684_20833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (22))){
var inst_18505 = (state_18621[(8)]);
var inst_18517 = cljs.core.async.close_BANG_(inst_18505);
var state_18621__$1 = state_18621;
var statearr_18685_20837 = state_18621__$1;
(statearr_18685_20837[(2)] = inst_18517);

(statearr_18685_20837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (36))){
var inst_18571 = (state_18621[(23)]);
var inst_18575 = cljs.core.chunk_first(inst_18571);
var inst_18576 = cljs.core.chunk_rest(inst_18571);
var inst_18577 = cljs.core.count(inst_18575);
var inst_18548 = inst_18576;
var inst_18549 = inst_18575;
var inst_18550 = inst_18577;
var inst_18551 = (0);
var state_18621__$1 = (function (){var statearr_18686 = state_18621;
(statearr_18686[(9)] = inst_18549);

(statearr_18686[(10)] = inst_18551);

(statearr_18686[(19)] = inst_18550);

(statearr_18686[(20)] = inst_18548);

return statearr_18686;
})();
var statearr_18687_20846 = state_18621__$1;
(statearr_18687_20846[(2)] = null);

(statearr_18687_20846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (41))){
var inst_18571 = (state_18621[(23)]);
var inst_18586 = (state_18621[(2)]);
var inst_18587 = cljs.core.next(inst_18571);
var inst_18548 = inst_18587;
var inst_18549 = null;
var inst_18550 = (0);
var inst_18551 = (0);
var state_18621__$1 = (function (){var statearr_18688 = state_18621;
(statearr_18688[(25)] = inst_18586);

(statearr_18688[(9)] = inst_18549);

(statearr_18688[(10)] = inst_18551);

(statearr_18688[(19)] = inst_18550);

(statearr_18688[(20)] = inst_18548);

return statearr_18688;
})();
var statearr_18689_20847 = state_18621__$1;
(statearr_18689_20847[(2)] = null);

(statearr_18689_20847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (43))){
var state_18621__$1 = state_18621;
var statearr_18691_20853 = state_18621__$1;
(statearr_18691_20853[(2)] = null);

(statearr_18691_20853[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (29))){
var inst_18599 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18692_20854 = state_18621__$1;
(statearr_18692_20854[(2)] = inst_18599);

(statearr_18692_20854[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (44))){
var inst_18608 = (state_18621[(2)]);
var state_18621__$1 = (function (){var statearr_18693 = state_18621;
(statearr_18693[(26)] = inst_18608);

return statearr_18693;
})();
var statearr_18694_20855 = state_18621__$1;
(statearr_18694_20855[(2)] = null);

(statearr_18694_20855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (6))){
var inst_18540 = (state_18621[(27)]);
var inst_18539 = cljs.core.deref(cs);
var inst_18540__$1 = cljs.core.keys(inst_18539);
var inst_18541 = cljs.core.count(inst_18540__$1);
var inst_18542 = cljs.core.reset_BANG_(dctr,inst_18541);
var inst_18547 = cljs.core.seq(inst_18540__$1);
var inst_18548 = inst_18547;
var inst_18549 = null;
var inst_18550 = (0);
var inst_18551 = (0);
var state_18621__$1 = (function (){var statearr_18695 = state_18621;
(statearr_18695[(9)] = inst_18549);

(statearr_18695[(10)] = inst_18551);

(statearr_18695[(19)] = inst_18550);

(statearr_18695[(27)] = inst_18540__$1);

(statearr_18695[(20)] = inst_18548);

(statearr_18695[(28)] = inst_18542);

return statearr_18695;
})();
var statearr_18696_20858 = state_18621__$1;
(statearr_18696_20858[(2)] = null);

(statearr_18696_20858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (28))){
var inst_18571 = (state_18621[(23)]);
var inst_18548 = (state_18621[(20)]);
var inst_18571__$1 = cljs.core.seq(inst_18548);
var state_18621__$1 = (function (){var statearr_18697 = state_18621;
(statearr_18697[(23)] = inst_18571__$1);

return statearr_18697;
})();
if(inst_18571__$1){
var statearr_18698_20860 = state_18621__$1;
(statearr_18698_20860[(1)] = (33));

} else {
var statearr_18700_20861 = state_18621__$1;
(statearr_18700_20861[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (25))){
var inst_18551 = (state_18621[(10)]);
var inst_18550 = (state_18621[(19)]);
var inst_18553 = (inst_18551 < inst_18550);
var inst_18554 = inst_18553;
var state_18621__$1 = state_18621;
if(cljs.core.truth_(inst_18554)){
var statearr_18701_20863 = state_18621__$1;
(statearr_18701_20863[(1)] = (27));

} else {
var statearr_18702_20864 = state_18621__$1;
(statearr_18702_20864[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (34))){
var state_18621__$1 = state_18621;
var statearr_18704_20866 = state_18621__$1;
(statearr_18704_20866[(2)] = null);

(statearr_18704_20866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (17))){
var state_18621__$1 = state_18621;
var statearr_18705_20870 = state_18621__$1;
(statearr_18705_20870[(2)] = null);

(statearr_18705_20870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (3))){
var inst_18613 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18621__$1,inst_18613);
} else {
if((state_val_18626 === (12))){
var inst_18534 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18706_20871 = state_18621__$1;
(statearr_18706_20871[(2)] = inst_18534);

(statearr_18706_20871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (2))){
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18621__$1,(4),ch);
} else {
if((state_val_18626 === (23))){
var state_18621__$1 = state_18621;
var statearr_18707_20872 = state_18621__$1;
(statearr_18707_20872[(2)] = null);

(statearr_18707_20872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (35))){
var inst_18593 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18708_20873 = state_18621__$1;
(statearr_18708_20873[(2)] = inst_18593);

(statearr_18708_20873[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (19))){
var inst_18488 = (state_18621[(7)]);
var inst_18496 = cljs.core.chunk_first(inst_18488);
var inst_18497 = cljs.core.chunk_rest(inst_18488);
var inst_18498 = cljs.core.count(inst_18496);
var inst_18461 = inst_18497;
var inst_18462 = inst_18496;
var inst_18463 = inst_18498;
var inst_18464 = (0);
var state_18621__$1 = (function (){var statearr_18709 = state_18621;
(statearr_18709[(13)] = inst_18462);

(statearr_18709[(15)] = inst_18461);

(statearr_18709[(16)] = inst_18464);

(statearr_18709[(17)] = inst_18463);

return statearr_18709;
})();
var statearr_18710_20874 = state_18621__$1;
(statearr_18710_20874[(2)] = null);

(statearr_18710_20874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (11))){
var inst_18461 = (state_18621[(15)]);
var inst_18488 = (state_18621[(7)]);
var inst_18488__$1 = cljs.core.seq(inst_18461);
var state_18621__$1 = (function (){var statearr_18712 = state_18621;
(statearr_18712[(7)] = inst_18488__$1);

return statearr_18712;
})();
if(inst_18488__$1){
var statearr_18713_20875 = state_18621__$1;
(statearr_18713_20875[(1)] = (16));

} else {
var statearr_18714_20876 = state_18621__$1;
(statearr_18714_20876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (9))){
var inst_18536 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18716_20877 = state_18621__$1;
(statearr_18716_20877[(2)] = inst_18536);

(statearr_18716_20877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (5))){
var inst_18456 = cljs.core.deref(cs);
var inst_18457 = cljs.core.seq(inst_18456);
var inst_18461 = inst_18457;
var inst_18462 = null;
var inst_18463 = (0);
var inst_18464 = (0);
var state_18621__$1 = (function (){var statearr_18717 = state_18621;
(statearr_18717[(13)] = inst_18462);

(statearr_18717[(15)] = inst_18461);

(statearr_18717[(16)] = inst_18464);

(statearr_18717[(17)] = inst_18463);

return statearr_18717;
})();
var statearr_18719_20878 = state_18621__$1;
(statearr_18719_20878[(2)] = null);

(statearr_18719_20878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (14))){
var state_18621__$1 = state_18621;
var statearr_18720_20879 = state_18621__$1;
(statearr_18720_20879[(2)] = null);

(statearr_18720_20879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (45))){
var inst_18605 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18721_20880 = state_18621__$1;
(statearr_18721_20880[(2)] = inst_18605);

(statearr_18721_20880[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (26))){
var inst_18540 = (state_18621[(27)]);
var inst_18601 = (state_18621[(2)]);
var inst_18602 = cljs.core.seq(inst_18540);
var state_18621__$1 = (function (){var statearr_18722 = state_18621;
(statearr_18722[(29)] = inst_18601);

return statearr_18722;
})();
if(inst_18602){
var statearr_18723_20882 = state_18621__$1;
(statearr_18723_20882[(1)] = (42));

} else {
var statearr_18724_20884 = state_18621__$1;
(statearr_18724_20884[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (16))){
var inst_18488 = (state_18621[(7)]);
var inst_18494 = cljs.core.chunked_seq_QMARK_(inst_18488);
var state_18621__$1 = state_18621;
if(inst_18494){
var statearr_18726_20885 = state_18621__$1;
(statearr_18726_20885[(1)] = (19));

} else {
var statearr_18727_20886 = state_18621__$1;
(statearr_18727_20886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (38))){
var inst_18590 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18728_20887 = state_18621__$1;
(statearr_18728_20887[(2)] = inst_18590);

(statearr_18728_20887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (30))){
var state_18621__$1 = state_18621;
var statearr_18729_20888 = state_18621__$1;
(statearr_18729_20888[(2)] = null);

(statearr_18729_20888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (10))){
var inst_18462 = (state_18621[(13)]);
var inst_18464 = (state_18621[(16)]);
var inst_18475 = cljs.core._nth(inst_18462,inst_18464);
var inst_18478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18475,(0),null);
var inst_18479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18475,(1),null);
var state_18621__$1 = (function (){var statearr_18732 = state_18621;
(statearr_18732[(24)] = inst_18478);

return statearr_18732;
})();
if(cljs.core.truth_(inst_18479)){
var statearr_18734_20891 = state_18621__$1;
(statearr_18734_20891[(1)] = (13));

} else {
var statearr_18736_20892 = state_18621__$1;
(statearr_18736_20892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (18))){
var inst_18532 = (state_18621[(2)]);
var state_18621__$1 = state_18621;
var statearr_18738_20894 = state_18621__$1;
(statearr_18738_20894[(2)] = inst_18532);

(statearr_18738_20894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (42))){
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18621__$1,(45),dchan);
} else {
if((state_val_18626 === (37))){
var inst_18580 = (state_18621[(22)]);
var inst_18571 = (state_18621[(23)]);
var inst_18444 = (state_18621[(11)]);
var inst_18580__$1 = cljs.core.first(inst_18571);
var inst_18581 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18580__$1,inst_18444,done);
var state_18621__$1 = (function (){var statearr_18743 = state_18621;
(statearr_18743[(22)] = inst_18580__$1);

return statearr_18743;
})();
if(cljs.core.truth_(inst_18581)){
var statearr_18744_20896 = state_18621__$1;
(statearr_18744_20896[(1)] = (39));

} else {
var statearr_18745_20897 = state_18621__$1;
(statearr_18745_20897[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18626 === (8))){
var inst_18464 = (state_18621[(16)]);
var inst_18463 = (state_18621[(17)]);
var inst_18469 = (inst_18464 < inst_18463);
var inst_18470 = inst_18469;
var state_18621__$1 = state_18621;
if(cljs.core.truth_(inst_18470)){
var statearr_18746_20898 = state_18621__$1;
(statearr_18746_20898[(1)] = (10));

} else {
var statearr_18747_20899 = state_18621__$1;
(statearr_18747_20899[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16570__auto__ = null;
var cljs$core$async$mult_$_state_machine__16570__auto____0 = (function (){
var statearr_18750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18750[(0)] = cljs$core$async$mult_$_state_machine__16570__auto__);

(statearr_18750[(1)] = (1));

return statearr_18750;
});
var cljs$core$async$mult_$_state_machine__16570__auto____1 = (function (state_18621){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_18621);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e18755){var ex__16573__auto__ = e18755;
var statearr_18756_20900 = state_18621;
(statearr_18756_20900[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_18621[(4)]))){
var statearr_18759_20901 = state_18621;
(statearr_18759_20901[(1)] = cljs.core.first((state_18621[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20904 = state_18621;
state_18621 = G__20904;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16570__auto__ = function(state_18621){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16570__auto____1.call(this,state_18621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16570__auto____0;
cljs$core$async$mult_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16570__auto____1;
return cljs$core$async$mult_$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_18762 = f__16904__auto__();
(statearr_18762[(6)] = c__16903__auto___20809);

return statearr_18762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
var G__18773 = arguments.length;
switch (G__18773) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_20914 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_20914(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20916 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_20916(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20918 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20918(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20920 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_20920(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20923 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20923(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20924 = arguments.length;
var i__5727__auto___20925 = (0);
while(true){
if((i__5727__auto___20925 < len__5726__auto___20924)){
args__5732__auto__.push((arguments[i__5727__auto___20925]));

var G__20926 = (i__5727__auto___20925 + (1));
i__5727__auto___20925 = G__20926;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18852){
var map__18853 = p__18852;
var map__18853__$1 = cljs.core.__destructure_map(map__18853);
var opts = map__18853__$1;
var statearr_18855_20927 = state;
(statearr_18855_20927[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18859_20928 = state;
(statearr_18859_20928[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18860_20929 = state;
(statearr_18860_20929[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18841){
var G__18842 = cljs.core.first(seq18841);
var seq18841__$1 = cljs.core.next(seq18841);
var G__18843 = cljs.core.first(seq18841__$1);
var seq18841__$2 = cljs.core.next(seq18841__$1);
var G__18844 = cljs.core.first(seq18841__$2);
var seq18841__$3 = cljs.core.next(seq18841__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18842,G__18843,G__18844,seq18841__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18897 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18898){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18898 = meta18898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18899,meta18898__$1){
var self__ = this;
var _18899__$1 = this;
return (new cljs.core.async.t_cljs$core$async18897(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18898__$1));
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18899){
var self__ = this;
var _18899__$1 = this;
return self__.meta18898;
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18897.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async18897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18898","meta18898",-237793982,null)], null);
}));

(cljs.core.async.t_cljs$core$async18897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18897");

(cljs.core.async.t_cljs$core$async18897.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18897.
 */
cljs.core.async.__GT_t_cljs$core$async18897 = (function cljs$core$async$__GT_t_cljs$core$async18897(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18898){
return (new cljs.core.async.t_cljs$core$async18897(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18898));
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
var m = (new cljs.core.async.t_cljs$core$async18897(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16903__auto___20954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_19049){
var state_val_19053 = (state_19049[(1)]);
if((state_val_19053 === (7))){
var inst_19000 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
if(cljs.core.truth_(inst_19000)){
var statearr_19060_20959 = state_19049__$1;
(statearr_19060_20959[(1)] = (8));

} else {
var statearr_19061_20961 = state_19049__$1;
(statearr_19061_20961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (20))){
var inst_18989 = (state_19049[(7)]);
var state_19049__$1 = state_19049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19049__$1,(23),out,inst_18989);
} else {
if((state_val_19053 === (1))){
var inst_18958 = calc_state();
var inst_18959 = cljs.core.__destructure_map(inst_18958);
var inst_18960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18959,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18959,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18959,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18965 = inst_18958;
var state_19049__$1 = (function (){var statearr_19066 = state_19049;
(statearr_19066[(8)] = inst_18960);

(statearr_19066[(9)] = inst_18963);

(statearr_19066[(10)] = inst_18962);

(statearr_19066[(11)] = inst_18965);

return statearr_19066;
})();
var statearr_19068_20973 = state_19049__$1;
(statearr_19068_20973[(2)] = null);

(statearr_19068_20973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (24))){
var inst_18973 = (state_19049[(12)]);
var inst_18965 = inst_18973;
var state_19049__$1 = (function (){var statearr_19075 = state_19049;
(statearr_19075[(11)] = inst_18965);

return statearr_19075;
})();
var statearr_19080_20977 = state_19049__$1;
(statearr_19080_20977[(2)] = null);

(statearr_19080_20977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (4))){
var inst_18989 = (state_19049[(7)]);
var inst_18991 = (state_19049[(13)]);
var inst_18986 = (state_19049[(2)]);
var inst_18989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18986,(0),null);
var inst_18990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18986,(1),null);
var inst_18991__$1 = (inst_18989__$1 == null);
var state_19049__$1 = (function (){var statearr_19085 = state_19049;
(statearr_19085[(7)] = inst_18989__$1);

(statearr_19085[(14)] = inst_18990);

(statearr_19085[(13)] = inst_18991__$1);

return statearr_19085;
})();
if(cljs.core.truth_(inst_18991__$1)){
var statearr_19086_20979 = state_19049__$1;
(statearr_19086_20979[(1)] = (5));

} else {
var statearr_19087_20980 = state_19049__$1;
(statearr_19087_20980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (15))){
var inst_19016 = (state_19049[(15)]);
var inst_18974 = (state_19049[(16)]);
var inst_19016__$1 = cljs.core.empty_QMARK_(inst_18974);
var state_19049__$1 = (function (){var statearr_19093 = state_19049;
(statearr_19093[(15)] = inst_19016__$1);

return statearr_19093;
})();
if(inst_19016__$1){
var statearr_19094_20981 = state_19049__$1;
(statearr_19094_20981[(1)] = (17));

} else {
var statearr_19096_20982 = state_19049__$1;
(statearr_19096_20982[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (21))){
var inst_18973 = (state_19049[(12)]);
var inst_18965 = inst_18973;
var state_19049__$1 = (function (){var statearr_19097 = state_19049;
(statearr_19097[(11)] = inst_18965);

return statearr_19097;
})();
var statearr_19098_20983 = state_19049__$1;
(statearr_19098_20983[(2)] = null);

(statearr_19098_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (13))){
var inst_19007 = (state_19049[(2)]);
var inst_19008 = calc_state();
var inst_18965 = inst_19008;
var state_19049__$1 = (function (){var statearr_19100 = state_19049;
(statearr_19100[(17)] = inst_19007);

(statearr_19100[(11)] = inst_18965);

return statearr_19100;
})();
var statearr_19101_20984 = state_19049__$1;
(statearr_19101_20984[(2)] = null);

(statearr_19101_20984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (22))){
var inst_19040 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
var statearr_19102_20989 = state_19049__$1;
(statearr_19102_20989[(2)] = inst_19040);

(statearr_19102_20989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (6))){
var inst_18990 = (state_19049[(14)]);
var inst_18998 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18990,change);
var state_19049__$1 = state_19049;
var statearr_19103_20994 = state_19049__$1;
(statearr_19103_20994[(2)] = inst_18998);

(statearr_19103_20994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (25))){
var state_19049__$1 = state_19049;
var statearr_19104_20996 = state_19049__$1;
(statearr_19104_20996[(2)] = null);

(statearr_19104_20996[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (17))){
var inst_18990 = (state_19049[(14)]);
var inst_18975 = (state_19049[(18)]);
var inst_19018 = (inst_18975.cljs$core$IFn$_invoke$arity$1 ? inst_18975.cljs$core$IFn$_invoke$arity$1(inst_18990) : inst_18975.call(null, inst_18990));
var inst_19019 = cljs.core.not(inst_19018);
var state_19049__$1 = state_19049;
var statearr_19108_21002 = state_19049__$1;
(statearr_19108_21002[(2)] = inst_19019);

(statearr_19108_21002[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (3))){
var inst_19044 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19049__$1,inst_19044);
} else {
if((state_val_19053 === (12))){
var state_19049__$1 = state_19049;
var statearr_19109_21004 = state_19049__$1;
(statearr_19109_21004[(2)] = null);

(statearr_19109_21004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (2))){
var inst_18965 = (state_19049[(11)]);
var inst_18973 = (state_19049[(12)]);
var inst_18973__$1 = cljs.core.__destructure_map(inst_18965);
var inst_18974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18973__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18973__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18973__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19049__$1 = (function (){var statearr_19112 = state_19049;
(statearr_19112[(16)] = inst_18974);

(statearr_19112[(18)] = inst_18975);

(statearr_19112[(12)] = inst_18973__$1);

return statearr_19112;
})();
return cljs.core.async.ioc_alts_BANG_(state_19049__$1,(4),inst_18977);
} else {
if((state_val_19053 === (23))){
var inst_19027 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
if(cljs.core.truth_(inst_19027)){
var statearr_19114_21005 = state_19049__$1;
(statearr_19114_21005[(1)] = (24));

} else {
var statearr_19118_21007 = state_19049__$1;
(statearr_19118_21007[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (19))){
var inst_19022 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
var statearr_19119_21011 = state_19049__$1;
(statearr_19119_21011[(2)] = inst_19022);

(statearr_19119_21011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (11))){
var inst_18990 = (state_19049[(14)]);
var inst_19004 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18990);
var state_19049__$1 = state_19049;
var statearr_19121_21012 = state_19049__$1;
(statearr_19121_21012[(2)] = inst_19004);

(statearr_19121_21012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (9))){
var inst_18974 = (state_19049[(16)]);
var inst_18990 = (state_19049[(14)]);
var inst_19011 = (state_19049[(19)]);
var inst_19011__$1 = (inst_18974.cljs$core$IFn$_invoke$arity$1 ? inst_18974.cljs$core$IFn$_invoke$arity$1(inst_18990) : inst_18974.call(null, inst_18990));
var state_19049__$1 = (function (){var statearr_19123 = state_19049;
(statearr_19123[(19)] = inst_19011__$1);

return statearr_19123;
})();
if(cljs.core.truth_(inst_19011__$1)){
var statearr_19125_21020 = state_19049__$1;
(statearr_19125_21020[(1)] = (14));

} else {
var statearr_19126_21023 = state_19049__$1;
(statearr_19126_21023[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (5))){
var inst_18991 = (state_19049[(13)]);
var state_19049__$1 = state_19049;
var statearr_19127_21024 = state_19049__$1;
(statearr_19127_21024[(2)] = inst_18991);

(statearr_19127_21024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (14))){
var inst_19011 = (state_19049[(19)]);
var state_19049__$1 = state_19049;
var statearr_19132_21030 = state_19049__$1;
(statearr_19132_21030[(2)] = inst_19011);

(statearr_19132_21030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (26))){
var inst_19036 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
var statearr_19141_21031 = state_19049__$1;
(statearr_19141_21031[(2)] = inst_19036);

(statearr_19141_21031[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (16))){
var inst_19024 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
if(cljs.core.truth_(inst_19024)){
var statearr_19145_21036 = state_19049__$1;
(statearr_19145_21036[(1)] = (20));

} else {
var statearr_19146_21037 = state_19049__$1;
(statearr_19146_21037[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (10))){
var inst_19042 = (state_19049[(2)]);
var state_19049__$1 = state_19049;
var statearr_19147_21039 = state_19049__$1;
(statearr_19147_21039[(2)] = inst_19042);

(statearr_19147_21039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (18))){
var inst_19016 = (state_19049[(15)]);
var state_19049__$1 = state_19049;
var statearr_19151_21041 = state_19049__$1;
(statearr_19151_21041[(2)] = inst_19016);

(statearr_19151_21041[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19053 === (8))){
var inst_18989 = (state_19049[(7)]);
var inst_19002 = (inst_18989 == null);
var state_19049__$1 = state_19049;
if(cljs.core.truth_(inst_19002)){
var statearr_19152_21042 = state_19049__$1;
(statearr_19152_21042[(1)] = (11));

} else {
var statearr_19153_21043 = state_19049__$1;
(statearr_19153_21043[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__16570__auto__ = null;
var cljs$core$async$mix_$_state_machine__16570__auto____0 = (function (){
var statearr_19158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19158[(0)] = cljs$core$async$mix_$_state_machine__16570__auto__);

(statearr_19158[(1)] = (1));

return statearr_19158;
});
var cljs$core$async$mix_$_state_machine__16570__auto____1 = (function (state_19049){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_19049);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e19159){var ex__16573__auto__ = e19159;
var statearr_19160_21046 = state_19049;
(statearr_19160_21046[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_19049[(4)]))){
var statearr_19162_21051 = state_19049;
(statearr_19162_21051[(1)] = cljs.core.first((state_19049[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21052 = state_19049;
state_19049 = G__21052;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16570__auto__ = function(state_19049){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16570__auto____1.call(this,state_19049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16570__auto____0;
cljs$core$async$mix_$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16570__auto____1;
return cljs$core$async$mix_$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_19167 = f__16904__auto__();
(statearr_19167[(6)] = c__16903__auto___20954);

return statearr_19167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_21058 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_21058(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21059 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_21059(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21062 = (function() {
var G__21063 = null;
var G__21063__1 = (function (p){
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
var G__21063__2 = (function (p,v){
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
G__21063 = function(p,v){
switch(arguments.length){
case 1:
return G__21063__1.call(this,p);
case 2:
return G__21063__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21063.cljs$core$IFn$_invoke$arity$1 = G__21063__1;
G__21063.cljs$core$IFn$_invoke$arity$2 = G__21063__2;
return G__21063;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19176 = arguments.length;
switch (G__19176) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21062(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21062(p,v);
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
cljs.core.async.t_cljs$core$async19183 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19184){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19184 = meta19184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19185,meta19184__$1){
var self__ = this;
var _19185__$1 = this;
return (new cljs.core.async.t_cljs$core$async19183(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19184__$1));
}));

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19185){
var self__ = this;
var _19185__$1 = this;
return self__.meta19184;
}));

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19183.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19184","meta19184",2121947372,null)], null);
}));

(cljs.core.async.t_cljs$core$async19183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19183");

(cljs.core.async.t_cljs$core$async19183.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19183.
 */
cljs.core.async.__GT_t_cljs$core$async19183 = (function cljs$core$async$__GT_t_cljs$core$async19183(ch,topic_fn,buf_fn,mults,ensure_mult,meta19184){
return (new cljs.core.async.t_cljs$core$async19183(ch,topic_fn,buf_fn,mults,ensure_mult,meta19184));
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
var G__19180 = arguments.length;
switch (G__19180) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19178_SHARP_){
if(cljs.core.truth_((p1__19178_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19178_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19178_SHARP_.call(null, topic)))){
return p1__19178_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19178_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19183(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16903__auto___21071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_19303){
var state_val_19304 = (state_19303[(1)]);
if((state_val_19304 === (7))){
var inst_19299 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
var statearr_19306_21072 = state_19303__$1;
(statearr_19306_21072[(2)] = inst_19299);

(statearr_19306_21072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (20))){
var state_19303__$1 = state_19303;
var statearr_19307_21074 = state_19303__$1;
(statearr_19307_21074[(2)] = null);

(statearr_19307_21074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (1))){
var state_19303__$1 = state_19303;
var statearr_19311_21075 = state_19303__$1;
(statearr_19311_21075[(2)] = null);

(statearr_19311_21075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (24))){
var inst_19281 = (state_19303[(7)]);
var inst_19291 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19281);
var state_19303__$1 = state_19303;
var statearr_19312_21076 = state_19303__$1;
(statearr_19312_21076[(2)] = inst_19291);

(statearr_19312_21076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (4))){
var inst_19204 = (state_19303[(8)]);
var inst_19204__$1 = (state_19303[(2)]);
var inst_19205 = (inst_19204__$1 == null);
var state_19303__$1 = (function (){var statearr_19314 = state_19303;
(statearr_19314[(8)] = inst_19204__$1);

return statearr_19314;
})();
if(cljs.core.truth_(inst_19205)){
var statearr_19315_21077 = state_19303__$1;
(statearr_19315_21077[(1)] = (5));

} else {
var statearr_19316_21078 = state_19303__$1;
(statearr_19316_21078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (15))){
var inst_19263 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
var statearr_19321_21079 = state_19303__$1;
(statearr_19321_21079[(2)] = inst_19263);

(statearr_19321_21079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (21))){
var inst_19296 = (state_19303[(2)]);
var state_19303__$1 = (function (){var statearr_19324 = state_19303;
(statearr_19324[(9)] = inst_19296);

return statearr_19324;
})();
var statearr_19325_21080 = state_19303__$1;
(statearr_19325_21080[(2)] = null);

(statearr_19325_21080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (13))){
var inst_19242 = (state_19303[(10)]);
var inst_19244 = cljs.core.chunked_seq_QMARK_(inst_19242);
var state_19303__$1 = state_19303;
if(inst_19244){
var statearr_19327_21081 = state_19303__$1;
(statearr_19327_21081[(1)] = (16));

} else {
var statearr_19328_21082 = state_19303__$1;
(statearr_19328_21082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (22))){
var inst_19288 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
if(cljs.core.truth_(inst_19288)){
var statearr_19329_21084 = state_19303__$1;
(statearr_19329_21084[(1)] = (23));

} else {
var statearr_19330_21085 = state_19303__$1;
(statearr_19330_21085[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (6))){
var inst_19204 = (state_19303[(8)]);
var inst_19284 = (state_19303[(11)]);
var inst_19281 = (state_19303[(7)]);
var inst_19281__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19204) : topic_fn.call(null, inst_19204));
var inst_19283 = cljs.core.deref(mults);
var inst_19284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19283,inst_19281__$1);
var state_19303__$1 = (function (){var statearr_19335 = state_19303;
(statearr_19335[(11)] = inst_19284__$1);

(statearr_19335[(7)] = inst_19281__$1);

return statearr_19335;
})();
if(cljs.core.truth_(inst_19284__$1)){
var statearr_19337_21087 = state_19303__$1;
(statearr_19337_21087[(1)] = (19));

} else {
var statearr_19338_21088 = state_19303__$1;
(statearr_19338_21088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (25))){
var inst_19293 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
var statearr_19341_21089 = state_19303__$1;
(statearr_19341_21089[(2)] = inst_19293);

(statearr_19341_21089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (17))){
var inst_19242 = (state_19303[(10)]);
var inst_19254 = cljs.core.first(inst_19242);
var inst_19255 = cljs.core.async.muxch_STAR_(inst_19254);
var inst_19256 = cljs.core.async.close_BANG_(inst_19255);
var inst_19257 = cljs.core.next(inst_19242);
var inst_19222 = inst_19257;
var inst_19223 = null;
var inst_19224 = (0);
var inst_19225 = (0);
var state_19303__$1 = (function (){var statearr_19343 = state_19303;
(statearr_19343[(12)] = inst_19256);

(statearr_19343[(13)] = inst_19223);

(statearr_19343[(14)] = inst_19224);

(statearr_19343[(15)] = inst_19222);

(statearr_19343[(16)] = inst_19225);

return statearr_19343;
})();
var statearr_19344_21090 = state_19303__$1;
(statearr_19344_21090[(2)] = null);

(statearr_19344_21090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (3))){
var inst_19301 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19303__$1,inst_19301);
} else {
if((state_val_19304 === (12))){
var inst_19265 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
var statearr_19351_21091 = state_19303__$1;
(statearr_19351_21091[(2)] = inst_19265);

(statearr_19351_21091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (2))){
var state_19303__$1 = state_19303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19303__$1,(4),ch);
} else {
if((state_val_19304 === (23))){
var state_19303__$1 = state_19303;
var statearr_19356_21093 = state_19303__$1;
(statearr_19356_21093[(2)] = null);

(statearr_19356_21093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (19))){
var inst_19204 = (state_19303[(8)]);
var inst_19284 = (state_19303[(11)]);
var inst_19286 = cljs.core.async.muxch_STAR_(inst_19284);
var state_19303__$1 = state_19303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19303__$1,(22),inst_19286,inst_19204);
} else {
if((state_val_19304 === (11))){
var inst_19242 = (state_19303[(10)]);
var inst_19222 = (state_19303[(15)]);
var inst_19242__$1 = cljs.core.seq(inst_19222);
var state_19303__$1 = (function (){var statearr_19358 = state_19303;
(statearr_19358[(10)] = inst_19242__$1);

return statearr_19358;
})();
if(inst_19242__$1){
var statearr_19359_21104 = state_19303__$1;
(statearr_19359_21104[(1)] = (13));

} else {
var statearr_19362_21105 = state_19303__$1;
(statearr_19362_21105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (9))){
var inst_19268 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
var statearr_19365_21106 = state_19303__$1;
(statearr_19365_21106[(2)] = inst_19268);

(statearr_19365_21106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (5))){
var inst_19218 = cljs.core.deref(mults);
var inst_19219 = cljs.core.vals(inst_19218);
var inst_19220 = cljs.core.seq(inst_19219);
var inst_19222 = inst_19220;
var inst_19223 = null;
var inst_19224 = (0);
var inst_19225 = (0);
var state_19303__$1 = (function (){var statearr_19367 = state_19303;
(statearr_19367[(13)] = inst_19223);

(statearr_19367[(14)] = inst_19224);

(statearr_19367[(15)] = inst_19222);

(statearr_19367[(16)] = inst_19225);

return statearr_19367;
})();
var statearr_19368_21107 = state_19303__$1;
(statearr_19368_21107[(2)] = null);

(statearr_19368_21107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (14))){
var state_19303__$1 = state_19303;
var statearr_19375_21110 = state_19303__$1;
(statearr_19375_21110[(2)] = null);

(statearr_19375_21110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (16))){
var inst_19242 = (state_19303[(10)]);
var inst_19246 = cljs.core.chunk_first(inst_19242);
var inst_19247 = cljs.core.chunk_rest(inst_19242);
var inst_19249 = cljs.core.count(inst_19246);
var inst_19222 = inst_19247;
var inst_19223 = inst_19246;
var inst_19224 = inst_19249;
var inst_19225 = (0);
var state_19303__$1 = (function (){var statearr_19382 = state_19303;
(statearr_19382[(13)] = inst_19223);

(statearr_19382[(14)] = inst_19224);

(statearr_19382[(15)] = inst_19222);

(statearr_19382[(16)] = inst_19225);

return statearr_19382;
})();
var statearr_19383_21112 = state_19303__$1;
(statearr_19383_21112[(2)] = null);

(statearr_19383_21112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (10))){
var inst_19223 = (state_19303[(13)]);
var inst_19224 = (state_19303[(14)]);
var inst_19222 = (state_19303[(15)]);
var inst_19225 = (state_19303[(16)]);
var inst_19230 = cljs.core._nth(inst_19223,inst_19225);
var inst_19233 = cljs.core.async.muxch_STAR_(inst_19230);
var inst_19234 = cljs.core.async.close_BANG_(inst_19233);
var inst_19235 = (inst_19225 + (1));
var tmp19371 = inst_19223;
var tmp19372 = inst_19224;
var tmp19373 = inst_19222;
var inst_19222__$1 = tmp19373;
var inst_19223__$1 = tmp19371;
var inst_19224__$1 = tmp19372;
var inst_19225__$1 = inst_19235;
var state_19303__$1 = (function (){var statearr_19387 = state_19303;
(statearr_19387[(13)] = inst_19223__$1);

(statearr_19387[(17)] = inst_19234);

(statearr_19387[(14)] = inst_19224__$1);

(statearr_19387[(15)] = inst_19222__$1);

(statearr_19387[(16)] = inst_19225__$1);

return statearr_19387;
})();
var statearr_19388_21113 = state_19303__$1;
(statearr_19388_21113[(2)] = null);

(statearr_19388_21113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (18))){
var inst_19260 = (state_19303[(2)]);
var state_19303__$1 = state_19303;
var statearr_19392_21118 = state_19303__$1;
(statearr_19392_21118[(2)] = inst_19260);

(statearr_19392_21118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19304 === (8))){
var inst_19224 = (state_19303[(14)]);
var inst_19225 = (state_19303[(16)]);
var inst_19227 = (inst_19225 < inst_19224);
var inst_19228 = inst_19227;
var state_19303__$1 = state_19303;
if(cljs.core.truth_(inst_19228)){
var statearr_19394_21120 = state_19303__$1;
(statearr_19394_21120[(1)] = (10));

} else {
var statearr_19395_21121 = state_19303__$1;
(statearr_19395_21121[(1)] = (11));

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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_19398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19398[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_19398[(1)] = (1));

return statearr_19398;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_19303){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_19303);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e19400){var ex__16573__auto__ = e19400;
var statearr_19401_21123 = state_19303;
(statearr_19401_21123[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_19303[(4)]))){
var statearr_19402_21125 = state_19303;
(statearr_19402_21125[(1)] = cljs.core.first((state_19303[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21126 = state_19303;
state_19303 = G__21126;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_19303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_19303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_19404 = f__16904__auto__();
(statearr_19404[(6)] = c__16903__auto___21071);

return statearr_19404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
var G__19409 = arguments.length;
switch (G__19409) {
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
var G__19437 = arguments.length;
switch (G__19437) {
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
var G__19443 = arguments.length;
switch (G__19443) {
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
var c__16903__auto___21146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_19502){
var state_val_19503 = (state_19502[(1)]);
if((state_val_19503 === (7))){
var state_19502__$1 = state_19502;
var statearr_19506_21147 = state_19502__$1;
(statearr_19506_21147[(2)] = null);

(statearr_19506_21147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (1))){
var state_19502__$1 = state_19502;
var statearr_19507_21148 = state_19502__$1;
(statearr_19507_21148[(2)] = null);

(statearr_19507_21148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (4))){
var inst_19452 = (state_19502[(7)]);
var inst_19450 = (state_19502[(8)]);
var inst_19454 = (inst_19452 < inst_19450);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19454)){
var statearr_19508_21150 = state_19502__$1;
(statearr_19508_21150[(1)] = (6));

} else {
var statearr_19509_21151 = state_19502__$1;
(statearr_19509_21151[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (15))){
var inst_19480 = (state_19502[(9)]);
var inst_19485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19480);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19502__$1,(17),out,inst_19485);
} else {
if((state_val_19503 === (13))){
var inst_19480 = (state_19502[(9)]);
var inst_19480__$1 = (state_19502[(2)]);
var inst_19481 = cljs.core.some(cljs.core.nil_QMARK_,inst_19480__$1);
var state_19502__$1 = (function (){var statearr_19510 = state_19502;
(statearr_19510[(9)] = inst_19480__$1);

return statearr_19510;
})();
if(cljs.core.truth_(inst_19481)){
var statearr_19511_21152 = state_19502__$1;
(statearr_19511_21152[(1)] = (14));

} else {
var statearr_19512_21154 = state_19502__$1;
(statearr_19512_21154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (6))){
var state_19502__$1 = state_19502;
var statearr_19513_21155 = state_19502__$1;
(statearr_19513_21155[(2)] = null);

(statearr_19513_21155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (17))){
var inst_19487 = (state_19502[(2)]);
var state_19502__$1 = (function (){var statearr_19516 = state_19502;
(statearr_19516[(10)] = inst_19487);

return statearr_19516;
})();
var statearr_19517_21157 = state_19502__$1;
(statearr_19517_21157[(2)] = null);

(statearr_19517_21157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (3))){
var inst_19492 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19502__$1,inst_19492);
} else {
if((state_val_19503 === (12))){
var _ = (function (){var statearr_19519 = state_19502;
(statearr_19519[(4)] = cljs.core.rest((state_19502[(4)])));

return statearr_19519;
})();
var state_19502__$1 = state_19502;
var ex19514 = (state_19502__$1[(2)]);
var statearr_19520_21158 = state_19502__$1;
(statearr_19520_21158[(5)] = ex19514);


if((ex19514 instanceof Object)){
var statearr_19522_21159 = state_19502__$1;
(statearr_19522_21159[(1)] = (11));

(statearr_19522_21159[(5)] = null);

} else {
throw ex19514;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (2))){
var inst_19448 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19450 = cnt;
var inst_19452 = (0);
var state_19502__$1 = (function (){var statearr_19523 = state_19502;
(statearr_19523[(7)] = inst_19452);

(statearr_19523[(8)] = inst_19450);

(statearr_19523[(11)] = inst_19448);

return statearr_19523;
})();
var statearr_19524_21161 = state_19502__$1;
(statearr_19524_21161[(2)] = null);

(statearr_19524_21161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (11))){
var inst_19459 = (state_19502[(2)]);
var inst_19460 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19502__$1 = (function (){var statearr_19525 = state_19502;
(statearr_19525[(12)] = inst_19459);

return statearr_19525;
})();
var statearr_19526_21171 = state_19502__$1;
(statearr_19526_21171[(2)] = inst_19460);

(statearr_19526_21171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (9))){
var inst_19452 = (state_19502[(7)]);
var _ = (function (){var statearr_19527 = state_19502;
(statearr_19527[(4)] = cljs.core.cons((12),(state_19502[(4)])));

return statearr_19527;
})();
var inst_19466 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19452) : chs__$1.call(null, inst_19452));
var inst_19467 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19452) : done.call(null, inst_19452));
var inst_19468 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19466,inst_19467);
var ___$1 = (function (){var statearr_19528 = state_19502;
(statearr_19528[(4)] = cljs.core.rest((state_19502[(4)])));

return statearr_19528;
})();
var state_19502__$1 = state_19502;
var statearr_19529_21172 = state_19502__$1;
(statearr_19529_21172[(2)] = inst_19468);

(statearr_19529_21172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (5))){
var inst_19478 = (state_19502[(2)]);
var state_19502__$1 = (function (){var statearr_19530 = state_19502;
(statearr_19530[(13)] = inst_19478);

return statearr_19530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19502__$1,(13),dchan);
} else {
if((state_val_19503 === (14))){
var inst_19483 = cljs.core.async.close_BANG_(out);
var state_19502__$1 = state_19502;
var statearr_19534_21173 = state_19502__$1;
(statearr_19534_21173[(2)] = inst_19483);

(statearr_19534_21173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (16))){
var inst_19490 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19535_21175 = state_19502__$1;
(statearr_19535_21175[(2)] = inst_19490);

(statearr_19535_21175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (10))){
var inst_19452 = (state_19502[(7)]);
var inst_19471 = (state_19502[(2)]);
var inst_19472 = (inst_19452 + (1));
var inst_19452__$1 = inst_19472;
var state_19502__$1 = (function (){var statearr_19539 = state_19502;
(statearr_19539[(7)] = inst_19452__$1);

(statearr_19539[(14)] = inst_19471);

return statearr_19539;
})();
var statearr_19540_21176 = state_19502__$1;
(statearr_19540_21176[(2)] = null);

(statearr_19540_21176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (8))){
var inst_19476 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19541_21177 = state_19502__$1;
(statearr_19541_21177[(2)] = inst_19476);

(statearr_19541_21177[(1)] = (5));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_19548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19548[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_19548[(1)] = (1));

return statearr_19548;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_19502){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_19502);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e19549){var ex__16573__auto__ = e19549;
var statearr_19550_21178 = state_19502;
(statearr_19550_21178[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_19502[(4)]))){
var statearr_19551_21180 = state_19502;
(statearr_19551_21180[(1)] = cljs.core.first((state_19502[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21183 = state_19502;
state_19502 = G__21183;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_19502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_19502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_19552 = f__16904__auto__();
(statearr_19552[(6)] = c__16903__auto___21146);

return statearr_19552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
var G__19564 = arguments.length;
switch (G__19564) {
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
var c__16903__auto___21185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_19638){
var state_val_19639 = (state_19638[(1)]);
if((state_val_19639 === (7))){
var inst_19585 = (state_19638[(7)]);
var inst_19588 = (state_19638[(8)]);
var inst_19585__$1 = (state_19638[(2)]);
var inst_19588__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19585__$1,(0),null);
var inst_19590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19585__$1,(1),null);
var inst_19591 = (inst_19588__$1 == null);
var state_19638__$1 = (function (){var statearr_19652 = state_19638;
(statearr_19652[(9)] = inst_19590);

(statearr_19652[(7)] = inst_19585__$1);

(statearr_19652[(8)] = inst_19588__$1);

return statearr_19652;
})();
if(cljs.core.truth_(inst_19591)){
var statearr_19653_21186 = state_19638__$1;
(statearr_19653_21186[(1)] = (8));

} else {
var statearr_19655_21187 = state_19638__$1;
(statearr_19655_21187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (1))){
var inst_19573 = cljs.core.vec(chs);
var inst_19575 = inst_19573;
var state_19638__$1 = (function (){var statearr_19656 = state_19638;
(statearr_19656[(10)] = inst_19575);

return statearr_19656;
})();
var statearr_19657_21188 = state_19638__$1;
(statearr_19657_21188[(2)] = null);

(statearr_19657_21188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (4))){
var inst_19575 = (state_19638[(10)]);
var state_19638__$1 = state_19638;
return cljs.core.async.ioc_alts_BANG_(state_19638__$1,(7),inst_19575);
} else {
if((state_val_19639 === (6))){
var inst_19631 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
var statearr_19662_21189 = state_19638__$1;
(statearr_19662_21189[(2)] = inst_19631);

(statearr_19662_21189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (3))){
var inst_19633 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19638__$1,inst_19633);
} else {
if((state_val_19639 === (2))){
var inst_19575 = (state_19638[(10)]);
var inst_19577 = cljs.core.count(inst_19575);
var inst_19578 = (inst_19577 > (0));
var state_19638__$1 = state_19638;
if(cljs.core.truth_(inst_19578)){
var statearr_19667_21190 = state_19638__$1;
(statearr_19667_21190[(1)] = (4));

} else {
var statearr_19668_21191 = state_19638__$1;
(statearr_19668_21191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (11))){
var inst_19575 = (state_19638[(10)]);
var inst_19623 = (state_19638[(2)]);
var tmp19663 = inst_19575;
var inst_19575__$1 = tmp19663;
var state_19638__$1 = (function (){var statearr_19670 = state_19638;
(statearr_19670[(11)] = inst_19623);

(statearr_19670[(10)] = inst_19575__$1);

return statearr_19670;
})();
var statearr_19674_21192 = state_19638__$1;
(statearr_19674_21192[(2)] = null);

(statearr_19674_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (9))){
var inst_19588 = (state_19638[(8)]);
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19638__$1,(11),out,inst_19588);
} else {
if((state_val_19639 === (5))){
var inst_19629 = cljs.core.async.close_BANG_(out);
var state_19638__$1 = state_19638;
var statearr_19680_21194 = state_19638__$1;
(statearr_19680_21194[(2)] = inst_19629);

(statearr_19680_21194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (10))){
var inst_19626 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
var statearr_19684_21197 = state_19638__$1;
(statearr_19684_21197[(2)] = inst_19626);

(statearr_19684_21197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19639 === (8))){
var inst_19590 = (state_19638[(9)]);
var inst_19585 = (state_19638[(7)]);
var inst_19575 = (state_19638[(10)]);
var inst_19588 = (state_19638[(8)]);
var inst_19618 = (function (){var cs = inst_19575;
var vec__19581 = inst_19585;
var v = inst_19588;
var c = inst_19590;
return (function (p1__19558_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19558_SHARP_);
});
})();
var inst_19619 = cljs.core.filterv(inst_19618,inst_19575);
var inst_19575__$1 = inst_19619;
var state_19638__$1 = (function (){var statearr_19686 = state_19638;
(statearr_19686[(10)] = inst_19575__$1);

return statearr_19686;
})();
var statearr_19688_21205 = state_19638__$1;
(statearr_19688_21205[(2)] = null);

(statearr_19688_21205[(1)] = (2));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_19689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19689[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_19689[(1)] = (1));

return statearr_19689;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_19638){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_19638);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e19690){var ex__16573__auto__ = e19690;
var statearr_19693_21206 = state_19638;
(statearr_19693_21206[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_19638[(4)]))){
var statearr_19695_21207 = state_19638;
(statearr_19695_21207[(1)] = cljs.core.first((state_19638[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21209 = state_19638;
state_19638 = G__21209;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_19638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_19638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_19697 = f__16904__auto__();
(statearr_19697[(6)] = c__16903__auto___21185);

return statearr_19697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
var G__19707 = arguments.length;
switch (G__19707) {
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
var c__16903__auto___21222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_19740){
var state_val_19742 = (state_19740[(1)]);
if((state_val_19742 === (7))){
var inst_19721 = (state_19740[(7)]);
var inst_19721__$1 = (state_19740[(2)]);
var inst_19722 = (inst_19721__$1 == null);
var inst_19724 = cljs.core.not(inst_19722);
var state_19740__$1 = (function (){var statearr_19746 = state_19740;
(statearr_19746[(7)] = inst_19721__$1);

return statearr_19746;
})();
if(inst_19724){
var statearr_19748_21223 = state_19740__$1;
(statearr_19748_21223[(1)] = (8));

} else {
var statearr_19749_21224 = state_19740__$1;
(statearr_19749_21224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (1))){
var inst_19714 = (0);
var state_19740__$1 = (function (){var statearr_19750 = state_19740;
(statearr_19750[(8)] = inst_19714);

return statearr_19750;
})();
var statearr_19751_21228 = state_19740__$1;
(statearr_19751_21228[(2)] = null);

(statearr_19751_21228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (4))){
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19740__$1,(7),ch);
} else {
if((state_val_19742 === (6))){
var inst_19735 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19755_21229 = state_19740__$1;
(statearr_19755_21229[(2)] = inst_19735);

(statearr_19755_21229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (3))){
var inst_19737 = (state_19740[(2)]);
var inst_19738 = cljs.core.async.close_BANG_(out);
var state_19740__$1 = (function (){var statearr_19758 = state_19740;
(statearr_19758[(9)] = inst_19737);

return statearr_19758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19740__$1,inst_19738);
} else {
if((state_val_19742 === (2))){
var inst_19714 = (state_19740[(8)]);
var inst_19716 = (inst_19714 < n);
var state_19740__$1 = state_19740;
if(cljs.core.truth_(inst_19716)){
var statearr_19762_21231 = state_19740__$1;
(statearr_19762_21231[(1)] = (4));

} else {
var statearr_19763_21232 = state_19740__$1;
(statearr_19763_21232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (11))){
var inst_19714 = (state_19740[(8)]);
var inst_19727 = (state_19740[(2)]);
var inst_19728 = (inst_19714 + (1));
var inst_19714__$1 = inst_19728;
var state_19740__$1 = (function (){var statearr_19765 = state_19740;
(statearr_19765[(10)] = inst_19727);

(statearr_19765[(8)] = inst_19714__$1);

return statearr_19765;
})();
var statearr_19766_21234 = state_19740__$1;
(statearr_19766_21234[(2)] = null);

(statearr_19766_21234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (9))){
var state_19740__$1 = state_19740;
var statearr_19767_21235 = state_19740__$1;
(statearr_19767_21235[(2)] = null);

(statearr_19767_21235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (5))){
var state_19740__$1 = state_19740;
var statearr_19771_21237 = state_19740__$1;
(statearr_19771_21237[(2)] = null);

(statearr_19771_21237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (10))){
var inst_19732 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19775_21238 = state_19740__$1;
(statearr_19775_21238[(2)] = inst_19732);

(statearr_19775_21238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (8))){
var inst_19721 = (state_19740[(7)]);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19740__$1,(11),out,inst_19721);
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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_19780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19780[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_19780[(1)] = (1));

return statearr_19780;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_19740){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_19740);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e19782){var ex__16573__auto__ = e19782;
var statearr_19783_21241 = state_19740;
(statearr_19783_21241[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_19740[(4)]))){
var statearr_19784_21243 = state_19740;
(statearr_19784_21243[(1)] = cljs.core.first((state_19740[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21250 = state_19740;
state_19740 = G__21250;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_19740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_19740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_19788 = f__16904__auto__();
(statearr_19788[(6)] = c__16903__auto___21222);

return statearr_19788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
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
cljs.core.async.t_cljs$core$async19820 = (function (f,ch,meta19798,_,fn1,meta19821){
this.f = f;
this.ch = ch;
this.meta19798 = meta19798;
this._ = _;
this.fn1 = fn1;
this.meta19821 = meta19821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19822,meta19821__$1){
var self__ = this;
var _19822__$1 = this;
return (new cljs.core.async.t_cljs$core$async19820(self__.f,self__.ch,self__.meta19798,self__._,self__.fn1,meta19821__$1));
}));

(cljs.core.async.t_cljs$core$async19820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19822){
var self__ = this;
var _19822__$1 = this;
return self__.meta19821;
}));

(cljs.core.async.t_cljs$core$async19820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19793_SHARP_){
var G__19834 = (((p1__19793_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19793_SHARP_) : self__.f.call(null, p1__19793_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19834) : f1.call(null, G__19834));
});
}));

(cljs.core.async.t_cljs$core$async19820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19798","meta19798",1817886469,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19797","cljs.core.async/t_cljs$core$async19797",475504173,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19821","meta19821",-1932793108,null)], null);
}));

(cljs.core.async.t_cljs$core$async19820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19820");

(cljs.core.async.t_cljs$core$async19820.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19820.
 */
cljs.core.async.__GT_t_cljs$core$async19820 = (function cljs$core$async$__GT_t_cljs$core$async19820(f,ch,meta19798,_,fn1,meta19821){
return (new cljs.core.async.t_cljs$core$async19820(f,ch,meta19798,_,fn1,meta19821));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19797 = (function (f,ch,meta19798){
this.f = f;
this.ch = ch;
this.meta19798 = meta19798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19799,meta19798__$1){
var self__ = this;
var _19799__$1 = this;
return (new cljs.core.async.t_cljs$core$async19797(self__.f,self__.ch,meta19798__$1));
}));

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19799){
var self__ = this;
var _19799__$1 = this;
return self__.meta19798;
}));

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19820(self__.f,self__.ch,self__.meta19798,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19847 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19847) : self__.f.call(null, G__19847));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19798","meta19798",1817886469,null)], null);
}));

(cljs.core.async.t_cljs$core$async19797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19797");

(cljs.core.async.t_cljs$core$async19797.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19797.
 */
cljs.core.async.__GT_t_cljs$core$async19797 = (function cljs$core$async$__GT_t_cljs$core$async19797(f,ch,meta19798){
return (new cljs.core.async.t_cljs$core$async19797(f,ch,meta19798));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19797(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19857 = (function (f,ch,meta19858){
this.f = f;
this.ch = ch;
this.meta19858 = meta19858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19859,meta19858__$1){
var self__ = this;
var _19859__$1 = this;
return (new cljs.core.async.t_cljs$core$async19857(self__.f,self__.ch,meta19858__$1));
}));

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19859){
var self__ = this;
var _19859__$1 = this;
return self__.meta19858;
}));

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19858","meta19858",874484429,null)], null);
}));

(cljs.core.async.t_cljs$core$async19857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19857");

(cljs.core.async.t_cljs$core$async19857.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19857.
 */
cljs.core.async.__GT_t_cljs$core$async19857 = (function cljs$core$async$__GT_t_cljs$core$async19857(f,ch,meta19858){
return (new cljs.core.async.t_cljs$core$async19857(f,ch,meta19858));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19857(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19863 = (function (p,ch,meta19864){
this.p = p;
this.ch = ch;
this.meta19864 = meta19864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19865,meta19864__$1){
var self__ = this;
var _19865__$1 = this;
return (new cljs.core.async.t_cljs$core$async19863(self__.p,self__.ch,meta19864__$1));
}));

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19865){
var self__ = this;
var _19865__$1 = this;
return self__.meta19864;
}));

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19864","meta19864",-477601727,null)], null);
}));

(cljs.core.async.t_cljs$core$async19863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19863");

(cljs.core.async.t_cljs$core$async19863.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19863.
 */
cljs.core.async.__GT_t_cljs$core$async19863 = (function cljs$core$async$__GT_t_cljs$core$async19863(p,ch,meta19864){
return (new cljs.core.async.t_cljs$core$async19863(p,ch,meta19864));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19863(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19867 = arguments.length;
switch (G__19867) {
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
var c__16903__auto___21282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_19890){
var state_val_19891 = (state_19890[(1)]);
if((state_val_19891 === (7))){
var inst_19886 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
var statearr_19896_21283 = state_19890__$1;
(statearr_19896_21283[(2)] = inst_19886);

(statearr_19896_21283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (1))){
var state_19890__$1 = state_19890;
var statearr_19897_21286 = state_19890__$1;
(statearr_19897_21286[(2)] = null);

(statearr_19897_21286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (4))){
var inst_19871 = (state_19890[(7)]);
var inst_19871__$1 = (state_19890[(2)]);
var inst_19873 = (inst_19871__$1 == null);
var state_19890__$1 = (function (){var statearr_19902 = state_19890;
(statearr_19902[(7)] = inst_19871__$1);

return statearr_19902;
})();
if(cljs.core.truth_(inst_19873)){
var statearr_19903_21287 = state_19890__$1;
(statearr_19903_21287[(1)] = (5));

} else {
var statearr_19904_21288 = state_19890__$1;
(statearr_19904_21288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (6))){
var inst_19871 = (state_19890[(7)]);
var inst_19877 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19871) : p.call(null, inst_19871));
var state_19890__$1 = state_19890;
if(cljs.core.truth_(inst_19877)){
var statearr_19906_21292 = state_19890__$1;
(statearr_19906_21292[(1)] = (8));

} else {
var statearr_19907_21295 = state_19890__$1;
(statearr_19907_21295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (3))){
var inst_19888 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19890__$1,inst_19888);
} else {
if((state_val_19891 === (2))){
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19890__$1,(4),ch);
} else {
if((state_val_19891 === (11))){
var inst_19880 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
var statearr_19910_21297 = state_19890__$1;
(statearr_19910_21297[(2)] = inst_19880);

(statearr_19910_21297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (9))){
var state_19890__$1 = state_19890;
var statearr_19911_21298 = state_19890__$1;
(statearr_19911_21298[(2)] = null);

(statearr_19911_21298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (5))){
var inst_19875 = cljs.core.async.close_BANG_(out);
var state_19890__$1 = state_19890;
var statearr_19912_21299 = state_19890__$1;
(statearr_19912_21299[(2)] = inst_19875);

(statearr_19912_21299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (10))){
var inst_19883 = (state_19890[(2)]);
var state_19890__$1 = (function (){var statearr_19913 = state_19890;
(statearr_19913[(8)] = inst_19883);

return statearr_19913;
})();
var statearr_19914_21300 = state_19890__$1;
(statearr_19914_21300[(2)] = null);

(statearr_19914_21300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (8))){
var inst_19871 = (state_19890[(7)]);
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19890__$1,(11),out,inst_19871);
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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_19919 = [null,null,null,null,null,null,null,null,null];
(statearr_19919[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_19919[(1)] = (1));

return statearr_19919;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_19890){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_19890);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e19923){var ex__16573__auto__ = e19923;
var statearr_19924_21303 = state_19890;
(statearr_19924_21303[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_19890[(4)]))){
var statearr_19925_21308 = state_19890;
(statearr_19925_21308[(1)] = cljs.core.first((state_19890[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21309 = state_19890;
state_19890 = G__21309;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_19890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_19890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_19927 = f__16904__auto__();
(statearr_19927[(6)] = c__16903__auto___21282);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19935 = arguments.length;
switch (G__19935) {
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
var c__16903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_20025){
var state_val_20026 = (state_20025[(1)]);
if((state_val_20026 === (7))){
var inst_20021 = (state_20025[(2)]);
var state_20025__$1 = state_20025;
var statearr_20031_21321 = state_20025__$1;
(statearr_20031_21321[(2)] = inst_20021);

(statearr_20031_21321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (20))){
var inst_19987 = (state_20025[(7)]);
var inst_20002 = (state_20025[(2)]);
var inst_20003 = cljs.core.next(inst_19987);
var inst_19960 = inst_20003;
var inst_19961 = null;
var inst_19962 = (0);
var inst_19963 = (0);
var state_20025__$1 = (function (){var statearr_20033 = state_20025;
(statearr_20033[(8)] = inst_19962);

(statearr_20033[(9)] = inst_20002);

(statearr_20033[(10)] = inst_19961);

(statearr_20033[(11)] = inst_19963);

(statearr_20033[(12)] = inst_19960);

return statearr_20033;
})();
var statearr_20034_21322 = state_20025__$1;
(statearr_20034_21322[(2)] = null);

(statearr_20034_21322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (1))){
var state_20025__$1 = state_20025;
var statearr_20035_21323 = state_20025__$1;
(statearr_20035_21323[(2)] = null);

(statearr_20035_21323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (4))){
var inst_19949 = (state_20025[(13)]);
var inst_19949__$1 = (state_20025[(2)]);
var inst_19950 = (inst_19949__$1 == null);
var state_20025__$1 = (function (){var statearr_20036 = state_20025;
(statearr_20036[(13)] = inst_19949__$1);

return statearr_20036;
})();
if(cljs.core.truth_(inst_19950)){
var statearr_20037_21329 = state_20025__$1;
(statearr_20037_21329[(1)] = (5));

} else {
var statearr_20038_21330 = state_20025__$1;
(statearr_20038_21330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (15))){
var state_20025__$1 = state_20025;
var statearr_20042_21331 = state_20025__$1;
(statearr_20042_21331[(2)] = null);

(statearr_20042_21331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (21))){
var state_20025__$1 = state_20025;
var statearr_20043_21332 = state_20025__$1;
(statearr_20043_21332[(2)] = null);

(statearr_20043_21332[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (13))){
var inst_19962 = (state_20025[(8)]);
var inst_19961 = (state_20025[(10)]);
var inst_19963 = (state_20025[(11)]);
var inst_19960 = (state_20025[(12)]);
var inst_19983 = (state_20025[(2)]);
var inst_19984 = (inst_19963 + (1));
var tmp20039 = inst_19962;
var tmp20040 = inst_19961;
var tmp20041 = inst_19960;
var inst_19960__$1 = tmp20041;
var inst_19961__$1 = tmp20040;
var inst_19962__$1 = tmp20039;
var inst_19963__$1 = inst_19984;
var state_20025__$1 = (function (){var statearr_20048 = state_20025;
(statearr_20048[(8)] = inst_19962__$1);

(statearr_20048[(10)] = inst_19961__$1);

(statearr_20048[(14)] = inst_19983);

(statearr_20048[(11)] = inst_19963__$1);

(statearr_20048[(12)] = inst_19960__$1);

return statearr_20048;
})();
var statearr_20049_21334 = state_20025__$1;
(statearr_20049_21334[(2)] = null);

(statearr_20049_21334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (22))){
var state_20025__$1 = state_20025;
var statearr_20050_21336 = state_20025__$1;
(statearr_20050_21336[(2)] = null);

(statearr_20050_21336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (6))){
var inst_19949 = (state_20025[(13)]);
var inst_19958 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19949) : f.call(null, inst_19949));
var inst_19959 = cljs.core.seq(inst_19958);
var inst_19960 = inst_19959;
var inst_19961 = null;
var inst_19962 = (0);
var inst_19963 = (0);
var state_20025__$1 = (function (){var statearr_20051 = state_20025;
(statearr_20051[(8)] = inst_19962);

(statearr_20051[(10)] = inst_19961);

(statearr_20051[(11)] = inst_19963);

(statearr_20051[(12)] = inst_19960);

return statearr_20051;
})();
var statearr_20052_21346 = state_20025__$1;
(statearr_20052_21346[(2)] = null);

(statearr_20052_21346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (17))){
var inst_19987 = (state_20025[(7)]);
var inst_19991 = cljs.core.chunk_first(inst_19987);
var inst_19995 = cljs.core.chunk_rest(inst_19987);
var inst_19996 = cljs.core.count(inst_19991);
var inst_19960 = inst_19995;
var inst_19961 = inst_19991;
var inst_19962 = inst_19996;
var inst_19963 = (0);
var state_20025__$1 = (function (){var statearr_20056 = state_20025;
(statearr_20056[(8)] = inst_19962);

(statearr_20056[(10)] = inst_19961);

(statearr_20056[(11)] = inst_19963);

(statearr_20056[(12)] = inst_19960);

return statearr_20056;
})();
var statearr_20066_21347 = state_20025__$1;
(statearr_20066_21347[(2)] = null);

(statearr_20066_21347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (3))){
var inst_20023 = (state_20025[(2)]);
var state_20025__$1 = state_20025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20025__$1,inst_20023);
} else {
if((state_val_20026 === (12))){
var inst_20011 = (state_20025[(2)]);
var state_20025__$1 = state_20025;
var statearr_20071_21348 = state_20025__$1;
(statearr_20071_21348[(2)] = inst_20011);

(statearr_20071_21348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (2))){
var state_20025__$1 = state_20025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20025__$1,(4),in$);
} else {
if((state_val_20026 === (23))){
var inst_20019 = (state_20025[(2)]);
var state_20025__$1 = state_20025;
var statearr_20072_21350 = state_20025__$1;
(statearr_20072_21350[(2)] = inst_20019);

(statearr_20072_21350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (19))){
var inst_20006 = (state_20025[(2)]);
var state_20025__$1 = state_20025;
var statearr_20073_21351 = state_20025__$1;
(statearr_20073_21351[(2)] = inst_20006);

(statearr_20073_21351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (11))){
var inst_19987 = (state_20025[(7)]);
var inst_19960 = (state_20025[(12)]);
var inst_19987__$1 = cljs.core.seq(inst_19960);
var state_20025__$1 = (function (){var statearr_20075 = state_20025;
(statearr_20075[(7)] = inst_19987__$1);

return statearr_20075;
})();
if(inst_19987__$1){
var statearr_20076_21352 = state_20025__$1;
(statearr_20076_21352[(1)] = (14));

} else {
var statearr_20077_21353 = state_20025__$1;
(statearr_20077_21353[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (9))){
var inst_20013 = (state_20025[(2)]);
var inst_20014 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20025__$1 = (function (){var statearr_20078 = state_20025;
(statearr_20078[(15)] = inst_20013);

return statearr_20078;
})();
if(cljs.core.truth_(inst_20014)){
var statearr_20079_21357 = state_20025__$1;
(statearr_20079_21357[(1)] = (21));

} else {
var statearr_20080_21358 = state_20025__$1;
(statearr_20080_21358[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (5))){
var inst_19952 = cljs.core.async.close_BANG_(out);
var state_20025__$1 = state_20025;
var statearr_20081_21359 = state_20025__$1;
(statearr_20081_21359[(2)] = inst_19952);

(statearr_20081_21359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (14))){
var inst_19987 = (state_20025[(7)]);
var inst_19989 = cljs.core.chunked_seq_QMARK_(inst_19987);
var state_20025__$1 = state_20025;
if(inst_19989){
var statearr_20083_21360 = state_20025__$1;
(statearr_20083_21360[(1)] = (17));

} else {
var statearr_20087_21361 = state_20025__$1;
(statearr_20087_21361[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (16))){
var inst_20009 = (state_20025[(2)]);
var state_20025__$1 = state_20025;
var statearr_20091_21364 = state_20025__$1;
(statearr_20091_21364[(2)] = inst_20009);

(statearr_20091_21364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20026 === (10))){
var inst_19961 = (state_20025[(10)]);
var inst_19963 = (state_20025[(11)]);
var inst_19981 = cljs.core._nth(inst_19961,inst_19963);
var state_20025__$1 = state_20025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20025__$1,(13),out,inst_19981);
} else {
if((state_val_20026 === (18))){
var inst_19987 = (state_20025[(7)]);
var inst_19999 = cljs.core.first(inst_19987);
var state_20025__$1 = state_20025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20025__$1,(20),out,inst_19999);
} else {
if((state_val_20026 === (8))){
var inst_19962 = (state_20025[(8)]);
var inst_19963 = (state_20025[(11)]);
var inst_19965 = (inst_19963 < inst_19962);
var inst_19966 = inst_19965;
var state_20025__$1 = state_20025;
if(cljs.core.truth_(inst_19966)){
var statearr_20093_21369 = state_20025__$1;
(statearr_20093_21369[(1)] = (10));

} else {
var statearr_20094_21370 = state_20025__$1;
(statearr_20094_21370[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16570__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16570__auto____0 = (function (){
var statearr_20099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20099[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16570__auto__);

(statearr_20099[(1)] = (1));

return statearr_20099;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16570__auto____1 = (function (state_20025){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_20025);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e20103){var ex__16573__auto__ = e20103;
var statearr_20105_21373 = state_20025;
(statearr_20105_21373[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_20025[(4)]))){
var statearr_20106_21374 = state_20025;
(statearr_20106_21374[(1)] = cljs.core.first((state_20025[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21375 = state_20025;
state_20025 = G__21375;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16570__auto__ = function(state_20025){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16570__auto____1.call(this,state_20025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16570__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16570__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_20110 = f__16904__auto__();
(statearr_20110[(6)] = c__16903__auto__);

return statearr_20110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));

return c__16903__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20113 = arguments.length;
switch (G__20113) {
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
var G__20120 = arguments.length;
switch (G__20120) {
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
var G__20127 = arguments.length;
switch (G__20127) {
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
var c__16903__auto___21383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_20154){
var state_val_20155 = (state_20154[(1)]);
if((state_val_20155 === (7))){
var inst_20148 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20156_21384 = state_20154__$1;
(statearr_20156_21384[(2)] = inst_20148);

(statearr_20156_21384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (1))){
var inst_20130 = null;
var state_20154__$1 = (function (){var statearr_20157 = state_20154;
(statearr_20157[(7)] = inst_20130);

return statearr_20157;
})();
var statearr_20158_21389 = state_20154__$1;
(statearr_20158_21389[(2)] = null);

(statearr_20158_21389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (4))){
var inst_20133 = (state_20154[(8)]);
var inst_20133__$1 = (state_20154[(2)]);
var inst_20134 = (inst_20133__$1 == null);
var inst_20135 = cljs.core.not(inst_20134);
var state_20154__$1 = (function (){var statearr_20162 = state_20154;
(statearr_20162[(8)] = inst_20133__$1);

return statearr_20162;
})();
if(inst_20135){
var statearr_20163_21390 = state_20154__$1;
(statearr_20163_21390[(1)] = (5));

} else {
var statearr_20164_21391 = state_20154__$1;
(statearr_20164_21391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (6))){
var state_20154__$1 = state_20154;
var statearr_20166_21392 = state_20154__$1;
(statearr_20166_21392[(2)] = null);

(statearr_20166_21392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (3))){
var inst_20150 = (state_20154[(2)]);
var inst_20151 = cljs.core.async.close_BANG_(out);
var state_20154__$1 = (function (){var statearr_20167 = state_20154;
(statearr_20167[(9)] = inst_20150);

return statearr_20167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20154__$1,inst_20151);
} else {
if((state_val_20155 === (2))){
var state_20154__$1 = state_20154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20154__$1,(4),ch);
} else {
if((state_val_20155 === (11))){
var inst_20133 = (state_20154[(8)]);
var inst_20142 = (state_20154[(2)]);
var inst_20130 = inst_20133;
var state_20154__$1 = (function (){var statearr_20168 = state_20154;
(statearr_20168[(7)] = inst_20130);

(statearr_20168[(10)] = inst_20142);

return statearr_20168;
})();
var statearr_20169_21400 = state_20154__$1;
(statearr_20169_21400[(2)] = null);

(statearr_20169_21400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (9))){
var inst_20133 = (state_20154[(8)]);
var state_20154__$1 = state_20154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20154__$1,(11),out,inst_20133);
} else {
if((state_val_20155 === (5))){
var inst_20133 = (state_20154[(8)]);
var inst_20130 = (state_20154[(7)]);
var inst_20137 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20133,inst_20130);
var state_20154__$1 = state_20154;
if(inst_20137){
var statearr_20173_21406 = state_20154__$1;
(statearr_20173_21406[(1)] = (8));

} else {
var statearr_20175_21407 = state_20154__$1;
(statearr_20175_21407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (10))){
var inst_20145 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20178_21408 = state_20154__$1;
(statearr_20178_21408[(2)] = inst_20145);

(statearr_20178_21408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (8))){
var inst_20130 = (state_20154[(7)]);
var tmp20171 = inst_20130;
var inst_20130__$1 = tmp20171;
var state_20154__$1 = (function (){var statearr_20179 = state_20154;
(statearr_20179[(7)] = inst_20130__$1);

return statearr_20179;
})();
var statearr_20180_21409 = state_20154__$1;
(statearr_20180_21409[(2)] = null);

(statearr_20180_21409[(1)] = (2));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_20181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20181[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_20181[(1)] = (1));

return statearr_20181;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_20154){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_20154);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e20183){var ex__16573__auto__ = e20183;
var statearr_20184_21417 = state_20154;
(statearr_20184_21417[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_20154[(4)]))){
var statearr_20186_21418 = state_20154;
(statearr_20186_21418[(1)] = cljs.core.first((state_20154[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21423 = state_20154;
state_20154 = G__21423;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_20154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_20154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_20192 = f__16904__auto__();
(statearr_20192[(6)] = c__16903__auto___21383);

return statearr_20192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20197 = arguments.length;
switch (G__20197) {
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
var c__16903__auto___21438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_20246){
var state_val_20247 = (state_20246[(1)]);
if((state_val_20247 === (7))){
var inst_20242 = (state_20246[(2)]);
var state_20246__$1 = state_20246;
var statearr_20249_21446 = state_20246__$1;
(statearr_20249_21446[(2)] = inst_20242);

(statearr_20249_21446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (1))){
var inst_20203 = (new Array(n));
var inst_20204 = inst_20203;
var inst_20205 = (0);
var state_20246__$1 = (function (){var statearr_20252 = state_20246;
(statearr_20252[(7)] = inst_20204);

(statearr_20252[(8)] = inst_20205);

return statearr_20252;
})();
var statearr_20255_21447 = state_20246__$1;
(statearr_20255_21447[(2)] = null);

(statearr_20255_21447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (4))){
var inst_20208 = (state_20246[(9)]);
var inst_20208__$1 = (state_20246[(2)]);
var inst_20209 = (inst_20208__$1 == null);
var inst_20210 = cljs.core.not(inst_20209);
var state_20246__$1 = (function (){var statearr_20256 = state_20246;
(statearr_20256[(9)] = inst_20208__$1);

return statearr_20256;
})();
if(inst_20210){
var statearr_20257_21449 = state_20246__$1;
(statearr_20257_21449[(1)] = (5));

} else {
var statearr_20259_21450 = state_20246__$1;
(statearr_20259_21450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (15))){
var inst_20236 = (state_20246[(2)]);
var state_20246__$1 = state_20246;
var statearr_20260_21451 = state_20246__$1;
(statearr_20260_21451[(2)] = inst_20236);

(statearr_20260_21451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (13))){
var state_20246__$1 = state_20246;
var statearr_20263_21452 = state_20246__$1;
(statearr_20263_21452[(2)] = null);

(statearr_20263_21452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (6))){
var inst_20205 = (state_20246[(8)]);
var inst_20230 = (inst_20205 > (0));
var state_20246__$1 = state_20246;
if(cljs.core.truth_(inst_20230)){
var statearr_20266_21453 = state_20246__$1;
(statearr_20266_21453[(1)] = (12));

} else {
var statearr_20268_21454 = state_20246__$1;
(statearr_20268_21454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (3))){
var inst_20244 = (state_20246[(2)]);
var state_20246__$1 = state_20246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20246__$1,inst_20244);
} else {
if((state_val_20247 === (12))){
var inst_20204 = (state_20246[(7)]);
var inst_20233 = cljs.core.vec(inst_20204);
var state_20246__$1 = state_20246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20246__$1,(15),out,inst_20233);
} else {
if((state_val_20247 === (2))){
var state_20246__$1 = state_20246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20246__$1,(4),ch);
} else {
if((state_val_20247 === (11))){
var inst_20223 = (state_20246[(2)]);
var inst_20224 = (new Array(n));
var inst_20204 = inst_20224;
var inst_20205 = (0);
var state_20246__$1 = (function (){var statearr_20272 = state_20246;
(statearr_20272[(7)] = inst_20204);

(statearr_20272[(8)] = inst_20205);

(statearr_20272[(10)] = inst_20223);

return statearr_20272;
})();
var statearr_20279_21461 = state_20246__$1;
(statearr_20279_21461[(2)] = null);

(statearr_20279_21461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (9))){
var inst_20204 = (state_20246[(7)]);
var inst_20221 = cljs.core.vec(inst_20204);
var state_20246__$1 = state_20246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20246__$1,(11),out,inst_20221);
} else {
if((state_val_20247 === (5))){
var inst_20208 = (state_20246[(9)]);
var inst_20204 = (state_20246[(7)]);
var inst_20205 = (state_20246[(8)]);
var inst_20214 = (state_20246[(11)]);
var inst_20213 = (inst_20204[inst_20205] = inst_20208);
var inst_20214__$1 = (inst_20205 + (1));
var inst_20215 = (inst_20214__$1 < n);
var state_20246__$1 = (function (){var statearr_20284 = state_20246;
(statearr_20284[(12)] = inst_20213);

(statearr_20284[(11)] = inst_20214__$1);

return statearr_20284;
})();
if(cljs.core.truth_(inst_20215)){
var statearr_20285_21463 = state_20246__$1;
(statearr_20285_21463[(1)] = (8));

} else {
var statearr_20289_21467 = state_20246__$1;
(statearr_20289_21467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (14))){
var inst_20239 = (state_20246[(2)]);
var inst_20240 = cljs.core.async.close_BANG_(out);
var state_20246__$1 = (function (){var statearr_20297 = state_20246;
(statearr_20297[(13)] = inst_20239);

return statearr_20297;
})();
var statearr_20299_21468 = state_20246__$1;
(statearr_20299_21468[(2)] = inst_20240);

(statearr_20299_21468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (10))){
var inst_20228 = (state_20246[(2)]);
var state_20246__$1 = state_20246;
var statearr_20300_21469 = state_20246__$1;
(statearr_20300_21469[(2)] = inst_20228);

(statearr_20300_21469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20247 === (8))){
var inst_20204 = (state_20246[(7)]);
var inst_20214 = (state_20246[(11)]);
var tmp20293 = inst_20204;
var inst_20204__$1 = tmp20293;
var inst_20205 = inst_20214;
var state_20246__$1 = (function (){var statearr_20302 = state_20246;
(statearr_20302[(7)] = inst_20204__$1);

(statearr_20302[(8)] = inst_20205);

return statearr_20302;
})();
var statearr_20303_21470 = state_20246__$1;
(statearr_20303_21470[(2)] = null);

(statearr_20303_21470[(1)] = (2));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_20307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20307[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_20307[(1)] = (1));

return statearr_20307;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_20246){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_20246);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e20310){var ex__16573__auto__ = e20310;
var statearr_20311_21475 = state_20246;
(statearr_20311_21475[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_20246[(4)]))){
var statearr_20314_21476 = state_20246;
(statearr_20314_21476[(1)] = cljs.core.first((state_20246[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21477 = state_20246;
state_20246 = G__21477;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_20246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_20246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_20315 = f__16904__auto__();
(statearr_20315[(6)] = c__16903__auto___21438);

return statearr_20315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20341 = arguments.length;
switch (G__20341) {
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
var c__16903__auto___21480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16904__auto__ = (function (){var switch__16569__auto__ = (function (state_20409){
var state_val_20410 = (state_20409[(1)]);
if((state_val_20410 === (7))){
var inst_20405 = (state_20409[(2)]);
var state_20409__$1 = state_20409;
var statearr_20418_21482 = state_20409__$1;
(statearr_20418_21482[(2)] = inst_20405);

(statearr_20418_21482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (1))){
var inst_20360 = [];
var inst_20361 = inst_20360;
var inst_20363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20409__$1 = (function (){var statearr_20421 = state_20409;
(statearr_20421[(7)] = inst_20363);

(statearr_20421[(8)] = inst_20361);

return statearr_20421;
})();
var statearr_20422_21483 = state_20409__$1;
(statearr_20422_21483[(2)] = null);

(statearr_20422_21483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (4))){
var inst_20366 = (state_20409[(9)]);
var inst_20366__$1 = (state_20409[(2)]);
var inst_20367 = (inst_20366__$1 == null);
var inst_20368 = cljs.core.not(inst_20367);
var state_20409__$1 = (function (){var statearr_20424 = state_20409;
(statearr_20424[(9)] = inst_20366__$1);

return statearr_20424;
})();
if(inst_20368){
var statearr_20425_21491 = state_20409__$1;
(statearr_20425_21491[(1)] = (5));

} else {
var statearr_20426_21492 = state_20409__$1;
(statearr_20426_21492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (15))){
var inst_20361 = (state_20409[(8)]);
var inst_20397 = cljs.core.vec(inst_20361);
var state_20409__$1 = state_20409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20409__$1,(18),out,inst_20397);
} else {
if((state_val_20410 === (13))){
var inst_20392 = (state_20409[(2)]);
var state_20409__$1 = state_20409;
var statearr_20432_21493 = state_20409__$1;
(statearr_20432_21493[(2)] = inst_20392);

(statearr_20432_21493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (6))){
var inst_20361 = (state_20409[(8)]);
var inst_20394 = inst_20361.length;
var inst_20395 = (inst_20394 > (0));
var state_20409__$1 = state_20409;
if(cljs.core.truth_(inst_20395)){
var statearr_20436_21495 = state_20409__$1;
(statearr_20436_21495[(1)] = (15));

} else {
var statearr_20437_21497 = state_20409__$1;
(statearr_20437_21497[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (17))){
var inst_20402 = (state_20409[(2)]);
var inst_20403 = cljs.core.async.close_BANG_(out);
var state_20409__$1 = (function (){var statearr_20438 = state_20409;
(statearr_20438[(10)] = inst_20402);

return statearr_20438;
})();
var statearr_20441_21498 = state_20409__$1;
(statearr_20441_21498[(2)] = inst_20403);

(statearr_20441_21498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (3))){
var inst_20407 = (state_20409[(2)]);
var state_20409__$1 = state_20409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20409__$1,inst_20407);
} else {
if((state_val_20410 === (12))){
var inst_20361 = (state_20409[(8)]);
var inst_20383 = cljs.core.vec(inst_20361);
var state_20409__$1 = state_20409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20409__$1,(14),out,inst_20383);
} else {
if((state_val_20410 === (2))){
var state_20409__$1 = state_20409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20409__$1,(4),ch);
} else {
if((state_val_20410 === (11))){
var inst_20370 = (state_20409[(11)]);
var inst_20366 = (state_20409[(9)]);
var inst_20361 = (state_20409[(8)]);
var inst_20380 = inst_20361.push(inst_20366);
var tmp20442 = inst_20361;
var inst_20361__$1 = tmp20442;
var inst_20363 = inst_20370;
var state_20409__$1 = (function (){var statearr_20444 = state_20409;
(statearr_20444[(7)] = inst_20363);

(statearr_20444[(12)] = inst_20380);

(statearr_20444[(8)] = inst_20361__$1);

return statearr_20444;
})();
var statearr_20445_21506 = state_20409__$1;
(statearr_20445_21506[(2)] = null);

(statearr_20445_21506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (9))){
var inst_20363 = (state_20409[(7)]);
var inst_20376 = cljs.core.keyword_identical_QMARK_(inst_20363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20409__$1 = state_20409;
var statearr_20447_21508 = state_20409__$1;
(statearr_20447_21508[(2)] = inst_20376);

(statearr_20447_21508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (5))){
var inst_20363 = (state_20409[(7)]);
var inst_20370 = (state_20409[(11)]);
var inst_20366 = (state_20409[(9)]);
var inst_20371 = (state_20409[(13)]);
var inst_20370__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20366) : f.call(null, inst_20366));
var inst_20371__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20370__$1,inst_20363);
var state_20409__$1 = (function (){var statearr_20448 = state_20409;
(statearr_20448[(11)] = inst_20370__$1);

(statearr_20448[(13)] = inst_20371__$1);

return statearr_20448;
})();
if(inst_20371__$1){
var statearr_20449_21509 = state_20409__$1;
(statearr_20449_21509[(1)] = (8));

} else {
var statearr_20450_21510 = state_20409__$1;
(statearr_20450_21510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (14))){
var inst_20370 = (state_20409[(11)]);
var inst_20366 = (state_20409[(9)]);
var inst_20385 = (state_20409[(2)]);
var inst_20388 = [];
var inst_20389 = inst_20388.push(inst_20366);
var inst_20361 = inst_20388;
var inst_20363 = inst_20370;
var state_20409__$1 = (function (){var statearr_20451 = state_20409;
(statearr_20451[(14)] = inst_20385);

(statearr_20451[(15)] = inst_20389);

(statearr_20451[(7)] = inst_20363);

(statearr_20451[(8)] = inst_20361);

return statearr_20451;
})();
var statearr_20452_21512 = state_20409__$1;
(statearr_20452_21512[(2)] = null);

(statearr_20452_21512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (16))){
var state_20409__$1 = state_20409;
var statearr_20453_21513 = state_20409__$1;
(statearr_20453_21513[(2)] = null);

(statearr_20453_21513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (10))){
var inst_20378 = (state_20409[(2)]);
var state_20409__$1 = state_20409;
if(cljs.core.truth_(inst_20378)){
var statearr_20455_21514 = state_20409__$1;
(statearr_20455_21514[(1)] = (11));

} else {
var statearr_20457_21515 = state_20409__$1;
(statearr_20457_21515[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (18))){
var inst_20399 = (state_20409[(2)]);
var state_20409__$1 = state_20409;
var statearr_20459_21516 = state_20409__$1;
(statearr_20459_21516[(2)] = inst_20399);

(statearr_20459_21516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20410 === (8))){
var inst_20371 = (state_20409[(13)]);
var state_20409__$1 = state_20409;
var statearr_20463_21517 = state_20409__$1;
(statearr_20463_21517[(2)] = inst_20371);

(statearr_20463_21517[(1)] = (10));


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
var cljs$core$async$state_machine__16570__auto__ = null;
var cljs$core$async$state_machine__16570__auto____0 = (function (){
var statearr_20468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20468[(0)] = cljs$core$async$state_machine__16570__auto__);

(statearr_20468[(1)] = (1));

return statearr_20468;
});
var cljs$core$async$state_machine__16570__auto____1 = (function (state_20409){
while(true){
var ret_value__16571__auto__ = (function (){try{while(true){
var result__16572__auto__ = switch__16569__auto__(state_20409);
if(cljs.core.keyword_identical_QMARK_(result__16572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16572__auto__;
}
break;
}
}catch (e20472){var ex__16573__auto__ = e20472;
var statearr_20473_21521 = state_20409;
(statearr_20473_21521[(2)] = ex__16573__auto__);


if(cljs.core.seq((state_20409[(4)]))){
var statearr_20474_21522 = state_20409;
(statearr_20474_21522[(1)] = cljs.core.first((state_20409[(4)])));

} else {
throw ex__16573__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21523 = state_20409;
state_20409 = G__21523;
continue;
} else {
return ret_value__16571__auto__;
}
break;
}
});
cljs$core$async$state_machine__16570__auto__ = function(state_20409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16570__auto____1.call(this,state_20409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16570__auto____0;
cljs$core$async$state_machine__16570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16570__auto____1;
return cljs$core$async$state_machine__16570__auto__;
})()
})();
var state__16905__auto__ = (function (){var statearr_20475 = f__16904__auto__();
(statearr_20475[(6)] = c__16903__auto___21480);

return statearr_20475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16905__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
