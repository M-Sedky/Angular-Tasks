const countVal = document.getElementById("countVal");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
let starter, final, resetVAl;

class Counter {
  countValue: number;
  constructor(countValue: number) {
    resetVAl = countValue;
    starter = countValue;
    this.countValue = countValue;
    countVal?.innerHTML = this.countValue;
  }
  increaseMethod() {
    starter++;
    countVal?.innerHTML = starter;
    final = starter;
  }
  decreaseMethod() {
    final--;
    countVal?.innerHTML = final;
    starter = final;
  }
  resetMethod() {
    countVal?.innerHTML = resetVAl;
    final = resetVAl;
    starter = resetVAl;
  }
}

const counter1 = new Counter(0);
incBtn?.onclick = counter1.increaseMethod;
decBtn?.onclick = counter1.decreaseMethod;
resetBtn.onclick = counter1.resetMethod;
