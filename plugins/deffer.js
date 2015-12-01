// file: plugins/deffer.js - created at 2015-11-23, 04:14
'use strict';
const slice = Array.prototype.slice;

function defferHandler(fn, argumentsCount) {
  return function () {
    const self = this;
    const args = slice.call(arguments,0, argumentsCount);
    return new Promise((resolve, reject) => {
      args.push((err, res) => {
        err ? reject(err) : resolve(res);
      });
      return fn.apply(self, args);
    });
  };
}

module.exports = exports = defferHandler;
