import Operator from '../Operator';
import Multiplication from "./Multiplication";

test('multiplication is an operator', () => {
    const multiplication = new Multiplication();
    expect(multiplication instanceof Operator).toEqual(true);
});

test('multiplication symbol', () => {
    const multiplication = new Multiplication();
    expect(multiplication.getSymbol()).toEqual('x');
});

test('calculate multiplication', () => {
    const multiplication = new Multiplication();
    expect(multiplication.calculate(3, 4)).toEqual(12);
});

test('order of multiplication', () => {
    const multiplication = new Multiplication();
    expect(multiplication.getOrder()).toEqual(Operator.ORDER_DM);
});

test('is commutative', () => {
    const multiplication = new Multiplication();
    expect(multiplication.isCommutative()).toEqual(true);
});

test('is associative', () => {
    const multiplication = new Multiplication();
    expect(multiplication.isAssociative()).toEqual(true);
});
