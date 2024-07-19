const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2024]{4}/

console.log(validarDataNasc.test("05/02/2000"))
console.log(validarDataNasc.test("5/2/2000"))
console.log(validarDataNasc.test("05-02-2000"))
console.log(validarDataNasc.test("31/10/1999"))
console.log(validarDataNasc.test("02/04/1900"))