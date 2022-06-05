import Operator from "../Operator";

const Subtraction = function () {
    this.getSymbol = () => '-';
    this.operandValuesAreValid = (a, b) => a > b;
    this.calculate = (a, b) => a - b;
    this.getOrder = () => 4;
    this.isCommutative = () => false;
    this.isAssociative = () => false;
}

Subtraction.prototype = Object.create(Operator.prototype);

export default Subtraction;
