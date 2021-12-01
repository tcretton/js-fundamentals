const num = 10.10
const str = `Meu numero é: ${num + 1}` // Definir String "" ou '' ou ``(neste ultimo caso pode incluir variavel)
console.log(str)

const obj = {
    name: 'Tercio Cretton',
    city: {
        name: 'Cruzeiro',
        uf: 'SP'
    }
}
const key = 'city'
console.log(obj[key]) // Tbm é posivel navegar no objeto dinamicamente, usando [nome_variavel]

const arr = [1,2,3]
console.log(arr[0]) // no array o indice é numero inteiro começando com 0

// functions: first-class citizens
const toint = parseInt // devini a função como uma const !
console.log(toint('10') + 1)