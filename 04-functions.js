// Prefira definir as funcões na ordem de uso, se uma prcisar da outra
function opa() {
    // this........
    let i = 10
    console.log('Opa....', i)
    ola()
}
function ola() {
    console.log('Olá!')
}
opa()

//Pure function - Use sempre que possive


// Outra forma definir function => ou inves de usar function
const soma = (a, b) => a + b
const c = soma(10, 5)
console.log(c)