module.exports = {
  balance: 1000,
  depositMoney(amount) {
    this.balance += amount
  },
  withdrawMoney(amount) {
    if (amount > this.balance) {
      return 'Cannot overdraw account'
    }
    this.balance -= amount
  },
}
