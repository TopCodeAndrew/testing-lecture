import bankAccount from '../bankAccount'

describe('Bank account methods and properties', () => {
  //Because we are in a describe block, we have access to:
  //beforeEach, before, afterEach, after

  beforeEach(() => {
    bankAccount.balance = 1000
  })

  //test 1
  test('depositMoney should correctly alter balance', () => {
    bankAccount.depositMoney(1000)
    expect(bankAccount.balance).toBe(2000)
  })

  //test2
  test('withdrawMoney should correctly alter balance', () => {
    bankAccount.withdrawMoney(700)
    expect(bankAccount.balance).toBe(300)
  })

  test('withdrawMoney does not allow for overdraft', () => {
    const result = bankAccount.withdrawMoney(2000)
    expect(result).toBe('Cannot overdraw account')
  })
})
