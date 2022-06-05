import Operator from "../Operator";

const Multiplication = function () {
    this.getSymbol = () => 'x';
    this.operandValuesAreValid = (a, b) => a !== 1 && b !== 1;
    this.calculate = (a, b) => a * b;
    this.getOrder = () => 3;
    this.isCommutative = () => true;
    this.isAssociative = () => true;
}

Multiplication.prototype = Object.create(Operator.prototype);

export default Multiplication;
