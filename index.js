/// <reference path="index.d.ts" />
const execFile = require('child_process').execFile;


// initialize a git repo
// (str, fn) -> null

function init(path, cb) {
  if (typeof path === 'function') {
    cb = path;
    path = '';
  }
  path = path || '';

  execFile('git', ['init', '-q', path], cb);
}

module.exports = init;