const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test("Marca: Nike"))
console.log(validaMarca.test("Marca: sasa"))
console.log(validaMarca.test("Marca: "))
console.log(validaMarca.test("Nike"))
console.log(validaMarca.test("3123213"))
console.log(validaMarca.test("Marca: Puma"))