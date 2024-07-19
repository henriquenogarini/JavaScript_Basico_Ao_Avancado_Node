const notab = /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("Aqui tem a"))

const nottoaz = /[^a-z]/

console.log(nottoaz.test("123"))
console.log(nottoaz.test("123 as"))
console.log(nottoaz.test("Aqui tem a"))

const az = /[a-z]/

console.log(nottoaz.test("fvbujhkiasbuifa"))