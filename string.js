"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "cad", {
        get: function () {
            return this.cadena;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "esPalindromo", {
        get: function () {
            return this.isPalindrome(this.cadena);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "vocales", {
        get: function () {
            return this.countVocals(this.cadena);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "letras", {
        get: function () {
            return this.countLetters(this.cadena);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "palabras", {
        get: function () {
            return this.countWords(this.cadena);
        },
        enumerable: true,
        configurable: true
    });
    Cadena.prototype.esPalindromoCad = function (cad) {
        return this.isPalindrome(cad);
    };
    Cadena.prototype.vocalesCad = function (cad) {
        return this.countVocals(cad);
    };
    Cadena.prototype.letrasCad = function (cad) {
        return this.countLetters(cad);
    };
    Cadena.prototype.palabrasCad = function (cad) {
        return this.countWords(cad);
    };
    Cadena.prototype.isPalindrome = function (cad) {
        var mutedCad = cad.split(' ').join('').split('').reverse().join('');
        return this.cadena.split(' ').join('') == mutedCad;
    };
    Cadena.prototype.countVocals = function (cadena) {
        var counter = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        for (var _i = 0, cadena_1 = cadena; _i < cadena_1.length; _i++) {
            var cad = cadena_1[_i];
            if ('aeiou'.indexOf(cad) != -1)
                counter[cad] = ++counter[cad];
        }
        return counter;
    };
    Cadena.prototype.countLetters = function (cad) {
        return +cad.length;
    };
    Cadena.prototype.countWords = function (cad) {
        return cad.split(' ').length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
