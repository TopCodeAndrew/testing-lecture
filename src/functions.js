module.exports = {
  sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return 'Data is invalid'
    }

    return +a + +b
  },
  sayHello() {
    return 'hello'
  },
}
