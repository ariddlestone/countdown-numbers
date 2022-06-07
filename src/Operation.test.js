import Operation from "./Operation";
import Addition from "./Operators/Addition";
import Multiplication from "./Operators/Multiplication";
import Subtraction from "./Operators/Subtraction";

test('operator and operands available', () => {
    const operator = new Addition();
    const operation = new Operation(operator, 4, 2);
    expect(operation.operator).toBe(operator);
    expect(operation.operand1).toEqual(4);
    expect(operation.operand2).toEqual(2);
});

test('simple value calculation', () => {
    const operation = new Operation(new Addition(), 4, 2);
    expect(operation.getValue()).toEqual(6);
});

test('nested value calculation', () => {
    const operation = new Operation(
        new Addition(),
        new Operation(new Addition(), 2, 4),
        new Operation(new Addition(), 6, 8)
    );
    expect(operation.getValue()).toEqual(20);
});

test('nested inputs used', () => {
    const operation = new Operation(
        new Addition(),
        new Operation(new Addition(), 2, 4),
        new Operation(new Addition(), 6, 8)
    );
    expect(operation.getInputsUsed()).toEqual([2, 4, 6, 8]);
});

test('simple toString', () => {
    const operation = new Operation(new Addition(), 4, 2);
    expect(operation.toString()).toEqual('4+2');
});

test('complex toString without brackets', () => {
    const operation = new Operation(
        new Addition(),
        new Operation(new Addition(), 2, 4),
        new Operation(new Subtraction(), 6, 8)
    );
    expect(operation.toString()).toEqual('2+4+6-8');
});

test('complex toString with brackets', () => {
    const operation = new Operation(
        new Multiplication(),
        new Operation(new Addition(), 2, 4),
        new Operation(new Subtraction(), 6, 8)
    );
    expect(operation.toString()).toEqual('(2+4)x(6-8)');
});

test('ariddlestone/countdown-numbers#10', () => {
    const operation = new Operation(
        new Subtraction(),
        new Operation(new Subtraction(), 8, 4),
        new Operation(new Subtraction(), 4, 2)
    );
    expect(operation.toString()).toEqual('8-4-(4-2)');
});
