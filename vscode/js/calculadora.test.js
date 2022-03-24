
const soma = require('./soma')

const sub = require('./sub')

const multi = require('./multi')

const divi = require('./divi')

//Teste de Soma
it('Soma de dois número positivos deiferentes(2 + 4 = 6)',() => {
    expect(soma(2,4)).toBe(6)
})

//Teste de Soma
it('soma de um número positivo e um negativo (-2 + 4 = 2)',() => {
    expect(soma(-2,4)).toBe(2)
})

//Teste de Subtração
it('Subtração  de dois número positivos deiferentes(8 - 6 = 2)',() => {
    expect(sub(8,6)).toBe(2)
})

//Teste de Divisão
it('Divisão de dois número maiores que 10 (30 / 15 = 2)',() => {
    expect(divi(30,15)).toBe(2)
})

//Teste de Multiplicação
it('Multiplicação de dois números negativos (-1 * -2 = 2)',() => {
    expect(multi(-1,-2)).toBe(2)
})
