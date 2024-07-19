const validarId = /\d+ID\b/

console.log(validarId.test("32132121312ID"))
console.log(validarId.test("32132121312"))
console.log(validarId.test("ID"))
console.log(validarId.test("54375453ID"))