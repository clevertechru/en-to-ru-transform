'use strict';

// transform("йцукен") => qwerty
var transform =  function (str) {
  if (!str) {
    return '';
  }

  var map = {
    'q': 'й',
    'w': 'ц',
    'e': 'у',
    'r': 'к',
    't': 'е',
    'y': 'н',
    'u': 'г',
    'i': 'ш',
    'o': 'щ',
    'p': 'з',
    '[': 'х',
    ']': 'ъ',
    'a': 'ф',
    's': 'ы',
    'd': 'в',
    'f': 'а',
    'g': 'п',
    'h': 'р',
    'j': 'о',
    'k': 'л',
    'l': 'д',
    ';': 'ж',
    "'": 'э',
    'z': 'я',
    'x': 'ч',
    'c': 'с',
    'v': 'м',
    'b': 'и',
    'n': 'т',
    'm': 'ь',
    ',': 'б',
    '.': 'ю',
    '`': 'ё',
  }

  return _transform(map[str[0].toLowerCase()] ? map : invert(map), str)
}

var invert = function (obj) {
  var new_obj = {};

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
}

var _transform = function (firstLetterAssociations, input) {
  var _associations = Object.assign({}, firstLetterAssociations);

  var newStr = '';
  for (var i = 0; i < input.length; i++) {
    var isUpperCaseOrWhatever = input[i] === input[i].toUpperCase();
    var strLowerCase = input[i].toLowerCase();
    var newLetter = (i === 0 ? firstLetterAssociations : _associations)[strLowerCase];
    if ('undefined' === typeof newLetter) {
      newStr += isUpperCaseOrWhatever ? strLowerCase.toUpperCase() : strLowerCase;
    }
    else {
      newStr += isUpperCaseOrWhatever ? newLetter.toUpperCase() : newLetter;
    }
  }
  return newStr;
}

module.exports = transform

