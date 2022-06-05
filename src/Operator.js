function Operator() {
    /**
     * @returns {string}
     */
    this.getSymbol = function () {
        throw new Error('getSymbol not implemented');
    }

    /**
     * @param {number} a
     * @param {number} b
     * @returns {boolean}
     */
    this.operandValuesAreValid = function (a, b) {
        throw new Error('operandValuesAreValid not implemented');
    }

    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    this.calculate = function (a, b) {
        throw new Error('calculate not implemented');
    }

    /**
     * @returns {(Operator.ORDER_B|Operator.ORDER_O|Operator.ORDER_DM|Operator.ORDER_AS)}
     */
    this.getOrder = function () {
        throw new Error('getOrder not implemented');
    }

    /**
     * @returns {boolean}
     */
    this.isCommutative = function () {
        throw new Error('isCommutative not implemented');
    }

    /**
     * @returns {boolean}
     */
    this.isAssociative = function () {
        throw new Error('isAssociative not implemented');
    }
}

Operator.ORDER_B = 1;
Operator.ORDER_O = 2;
Operator.ORDER_DM = 3;
Operator.ORDER_AS = 4;

export default Operator;
