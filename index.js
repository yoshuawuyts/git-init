const exec = require('child_process').exec

module.exports = init

// initialize a git repo
// (str, fn) -> null
function init (path, cb) {
  if (typeof path === 'function') {
    cb = path
    path = ''
  }
  path = path || ''
  exec('git init -q ' + path, cb)
}

