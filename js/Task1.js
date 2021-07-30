function MoneyBox() {
    let coin = 0;
    this.addCoin = function() {
        coin++;
    }
    this.getAmount = function() {
        return coin;
    }
}

let moneybox = new MoneyBox();
console.log(moneybox.getAmount());
moneybox.addCoin();
console.log(moneybox.getAmount());
moneybox.addCoin();
moneybox.addCoin();
moneybox.addCoin();
moneybox.addCoin();
console.log(moneybox.getAmount());
moneybox.addCoin();
moneybox.addCoin();
moneybox.addCoin();
moneybox.addCoin();
console.log(moneybox.getAmount());

let moneybox2 = new MoneyBox();
console.log(moneybox2.getAmount());
moneybox2.addCoin();
moneybox2.addCoin();
console.log(moneybox2.getAmount());