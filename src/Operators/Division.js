import Operator from "../Operator";

const Division = function () {
    this.getSymbol = () => '/';
    this.operandValuesAreValid = (a, b) => a % b === 0;
    this.calculate = (a, b) => a / b;
    this.getOrder = () => 3;
    this.isCommutative = () => false;
    this.isAssociative = () => false;
}

Division.prototype = Object.create(Operator.prototype);

export default Division;
