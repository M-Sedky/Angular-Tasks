var countVal = document.getElementById("countVal");
var incBtn = document.getElementById("incBtn");
var decBtn = document.getElementById("decBtn");
var starter, final, resetVAl;
var Counter = /** @class */ (function () {
    function Counter(countValue) {
        resetVAl = countValue;
        starter = countValue;
        this.countValue = countValue;
        countVal === null || countVal === void 0 ? void 0 : countVal.innerHTML = this.countValue;
    }
    Counter.prototype.increaseMethod = function () {
        starter++;
        countVal === null || countVal === void 0 ? void 0 : countVal.innerHTML = starter;
        final = starter;
    };
    Counter.prototype.decreaseMethod = function () {
        final--;
        countVal === null || countVal === void 0 ? void 0 : countVal.innerHTML = final;
        starter = final;
    };
    Counter.prototype.resetMethod = function () {
        countVal === null || countVal === void 0 ? void 0 : countVal.innerHTML = resetVAl;
        final = resetVAl;
        starter = resetVAl;
    };
    return Counter;
}());
var counter1 = new Counter(0);
incBtn === null || incBtn === void 0 ? void 0 : incBtn.onclick = counter1.increaseMethod;
decBtn === null || decBtn === void 0 ? void 0 : decBtn.onclick = counter1.decreaseMethod;
resetBtn.onclick = counter1.resetMethod;
