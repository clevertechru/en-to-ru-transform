'use script'

// cleanup()
var cleanup = function (str) {
  if (!str) {
    return '';
  }

  return str.replace(/\d+/g, '').replace(/\s\s+/g, ' ');
}

module.exports = cleanup