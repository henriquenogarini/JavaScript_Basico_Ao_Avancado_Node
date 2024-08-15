const validarEmail = /\w+@\w+\.\w+/

console.log(validarEmail.test("henrique@gmail.com"))
console.log(validarEmail.test("henrique@gmail.com.br"))
console.log(validarEmail.test("gmail.com"))