"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero(numero) {
        this.numero = numero;
    }
    Object.defineProperty(Numero.prototype, "num", {
        get: function () {
            return this.numero;
        },
        enumerable: true,
        configurable: true
    });
    Numero.prototype.sumar = function (items) {
        return this.numero + items;
    };
    Numero.prototype.sumarArray = function (items) {
        return this.numero + items.reduce(function (total, num) {
            return total + num;
        });
    };
    Numero.prototype.restar = function (items) {
        return this.numero - items;
    };
    Numero.prototype.restarArray = function (items) {
        return this.numero - items.reduce(function (total, num) {
            return total + num;
        });
    };
    Numero.prototype.factorialNum = function (num) {
        return this.calcFactorial(num);
    };
    Object.defineProperty(Numero.prototype, "factorial", {
        get: function () {
            return this.calcFactorial(this.numero);
        },
        enumerable: true,
        configurable: true
    });
    Numero.prototype.calcFactorial = function (num) {
        return num == 1 ? num : num * this.calcFactorial(num - 1);
    };
    Object.defineProperty(Numero.prototype, "primo", {
        get: function () {
            var n = this.numero;
            var i = 2;
            for (; n % i != 0 && i < n; i++)
                ;
            return n == i;
        },
        enumerable: true,
        configurable: true
    });
    Numero.prototype.primoNum = function (num) {
        var n = num;
        var i = 2;
        for (; n % i != 0 && i < n; i++)
            ;
        return n == i;
    };
    return Numero;
}());
exports.Numero = Numero;
