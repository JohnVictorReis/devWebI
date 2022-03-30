import { calcDelta } from "./bhaskara"

//Teste de calculo delta
it('Descobrindo o delta com três valores (B* - 4xAxC)',() => {
    expect(calcDelta(2,8,-24)).toBe(256)
})