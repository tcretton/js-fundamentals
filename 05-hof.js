/* 
* High Order Functions
! Alert
*/

const soma = (a, b) => a + b
const mult = (a, b) => a * b

const calc = (op, a, b) => op(a,b)
const selectOp = op => {
  if (op === '+'{
    return soma
  })
}

const c = calc(soma, 10, 5)

console.log(c)



