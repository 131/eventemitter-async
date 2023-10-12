"use strict";


class EventEmitter {
  constructor() {
    this._callbacks = {};

    this.emit = this.emit.bind(this);
    this.on   = this.on.bind(this);
    this.once = this.once.bind(this);
    this.off  = this.off.bind(this);


    this.addEvent = this.addListener  = this.on;
    this.removeListener  = this.removeAllListeners = this.off;
    this.fireEvent  = this.emit;
  }


  emit(event) {
    if(!this._callbacks[event])
      return Promise.resolve();

    var chain = [];

    var args = Array.prototype.slice.call(arguments, 1);

    for(let callback of this._callbacks[event]) {
      var p = callback.callback.apply(callback.ctx, args);
      chain.push(p);
    }

    return Promise.all(chain);
  }



  on(event, callback, ctx = undefined)  {
    if(typeof callback != "function")
      return console.error("you try to register a non function in ", event);
    if(!this._callbacks[event])
      this._callbacks[event] = [];
    this._callbacks[event].push({callback, ctx});
  }

  once(event, callback, ctx = undefined) {
    var self = this;
    var once = function() {
      self.off(event, once);
      self.off(event, callback);
    };

    this.on(event, callback, ctx);
    this.on(event, once);
  }

  off(event = false, callback = false)  {
    if(!event)
      this._callbacks = {};
    else if(!callback)
      this._callbacks[event] = [];
    else
      this._callbacks[event] =  (this._callbacks[event] || []).filter(v => v.callback != callback);

  }
}



module.exports = EventEmitter;
