const cep = /\d{5}-\d{3}/

console.log(cep.test("88117-500"))
console.log(cep.test("asd"))
console.log(cep.test("881-50"))
console.log(cep.test("999999-999"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test("(17)997122517"))