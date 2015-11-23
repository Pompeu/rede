// file: plugins/deffer.js - created at 2015-11-23, 04:14
'use strict';
const slice = Array.prototype.slice;

function defferHandler(fn, argumentsCount) {
  argumentsCount = argumentsCount || Infinity;
  return function () {
    let self = this;
    let args = slice.call(arguments,0, argumentsCount > 0 ? argumentsCount : 0);
    return new Promise((resolve, reject) => {
      args.push((err, res) => {
        err ? reject(err) : resolve(res);
      })
      let res = fn.apply(self, args);
      if(res &&
        (typeof res === 'object' || typeof res === 'function') && 
        (typeof res.then === 'function' )){
        resolve(res);
      }
    });
  }
}

module.exports = exports = defferHandler;
