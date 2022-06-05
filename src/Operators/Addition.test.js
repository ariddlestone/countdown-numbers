import Operator from '../Operator';
import Addition from "./Addition";

test('addition is an operator', () => {
    const addition = new Addition();
    expect(addition instanceof Operator).toEqual(true);
});

test('addition symbol', () => {
    const addition = new Addition();
    expect(addition.getSymbol()).toEqual('+');
});

test('calculate addition', () => {
    const addition = new Addition();
    expect(addition.calculate(3, 4)).toEqual(7);
});

test('order of addition', () => {
    const addition = new Addition();
    expect(addition.getOrder()).toEqual(Operator.ORDER_AS);
});

test('is commutative', () => {
    const addition = new Addition();
    expect(addition.isCommutative()).toEqual(true);
});

test('is associative', () => {
    const addition = new Addition();
    expect(addition.isAssociative()).toEqual(true);
});
