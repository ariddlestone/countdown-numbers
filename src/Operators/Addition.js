import Operator from "../Operator";

const Addition = function () {
    this.getSymbol = () => '+';
    this.operandValuesAreValid = () => true;
    this.calculate = (a, b) => a + b;
    this.getOrder = () => 4;
    this.isCommutative = () => true;
    this.isAssociative = () => true;
}

Addition.prototype = Object.create(Operator.prototype);

export default Addition;
