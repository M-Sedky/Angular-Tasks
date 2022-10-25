var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//First Task
var Vehicle = /** @class */ (function () {
    function Vehicle(color, type) {
        (this.color = color), (this.type = type);
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, type, price) {
        var _this = _super.call(this, color, type) || this;
        _this.price = price;
        return _this;
    }
    return Car;
}(Vehicle));
var Car1 = new Car("black", "PMW", 1000000);
alert("First Car Data:\n     The Color is: ".concat(Car1.color, ",\n     The Type is: ").concat(Car1.type, ",\n     The Price is: ").concat(Car1.price));
var Car2 = new Car("red", "KIA", 300000);
alert("Second Car Data:\n     The Color is: ".concat(Car2.color, ",\n     The Type is: ").concat(Car2.type, ",\n     The Price is: ").concat(Car2.price));
