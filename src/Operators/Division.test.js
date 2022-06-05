import Operator from '../Operator';
import Division from "./Division";

test('division is an operator', () => {
    const division = new Division();
    expect(division instanceof Operator).toEqual(true);
});

test('division symbol', () => {
    const division = new Division();
    expect(division.getSymbol()).toEqual('/');
});

test('only allows integer results', () => {
    const division = new Division();
    expect(division.operandValuesAreValid(12, 4)).toEqual(true);
    expect(division.operandValuesAreValid(12, 5)).toEqual(false);
});

test('calculate division', () => {
    const division = new Division();
    expect(division.calculate(12, 4)).toEqual(3);
});

test('order of division', () => {
    const division = new Division();
    expect(division.getOrder()).toEqual(Operator.ORDER_DM);
});

test('not commutative', () => {
    const division = new Division();
    expect(division.isCommutative()).toEqual(false);
});

test('not associative', () => {
    const division = new Division();
    expect(division.isAssociative()).toEqual(false);
});
