import Operator from '../Operator';
import Subtraction from "./Subtraction";

test('subtraction is an operator', () => {
    const subtraction = new Subtraction();
    expect(subtraction instanceof Operator).toEqual(true);
});

test('subtraction symbol', () => {
    const subtraction = new Subtraction();
    expect(subtraction.getSymbol()).toEqual('-');
});

test('only allows positive results', () => {
    const subtraction = new Subtraction();
    expect(subtraction.operandValuesAreValid(12, 4)).toEqual(true);
    expect(subtraction.operandValuesAreValid(4, 4)).toEqual(false);
    expect(subtraction.operandValuesAreValid(4, 12)).toEqual(false);
});

test('calculate subtraction', () => {
    const subtraction = new Subtraction();
    expect(subtraction.calculate(12, 4)).toEqual(8);
});

test('order of subtraction', () => {
    const subtraction = new Subtraction();
    expect(subtraction.getOrder()).toEqual(Operator.ORDER_AS);
});

test('not commutative', () => {
    const subtraction = new Subtraction();
    expect(subtraction.isCommutative()).toEqual(false);
});

test('not associative', () => {
    const subtraction = new Subtraction();
    expect(subtraction.isAssociative()).toEqual(false);
});
