"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "esPalindromo", {
        get: function () {
            return this.isPalindrome();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "vocales", {
        get: function () {
            return this.countVocals();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "letras", {
        get: function () {
            return this.countLetters();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "palabras", {
        get: function () {
            return this.countWords();
        },
        enumerable: true,
        configurable: true
    });
    Cadena.prototype.isPalindrome = function () {
        var mutedCad = this.cadena.split(' ').join('').split('').reverse().join('');
        return this.cadena.split(' ').join('') == mutedCad;
    };
    Cadena.prototype.countVocals = function () {
        var counter = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        for (var _i = 0, _a = this.cadena; _i < _a.length; _i++) {
            var cad = _a[_i];
            if ('aeiou'.indexOf(cad) != -1)
                counter[cad] = ++counter[cad];
        }
        return counter;
    };
    Cadena.prototype.countLetters = function () {
        return +this.cadena.length;
    };
    Cadena.prototype.countWords = function () {
        return this.cadena.split(' ').length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
