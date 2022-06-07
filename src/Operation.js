export default function Operation(operator, operand1, operand2) {
    this.operator = operator;
    this.operand1 = operand1;
    this.operand2 = operand2;

    const getOperandValue = function (operand) {
        return operand instanceof Operation
            ? operand.getValue()
            : operand;
    }

    this.getValue = function () {
        return this.operator.calculate(
            getOperandValue(this.operand1),
            getOperandValue(this.operand2)
        );
    }

    this.getInputsUsed = function () {
        const inputs = [];
        if (this.operand1 instanceof Operation) {
            inputs.push.apply(inputs, this.operand1.getInputsUsed());
        } else {
            inputs.push(this.operand1);
        }
        if (this.operand2 instanceof Operation) {
            inputs.push.apply(inputs, this.operand2.getInputsUsed());
        } else {
            inputs.push(this.operand2);
        }
        return inputs;
    }

    this.toString = function () {
        let op1 = this.operand1 instanceof Operation
            ? this.operand1.toString()
            : this.operand1;
        if (
            this.operand1 instanceof Operation
            && this.operand1.operator.getOrder() > this.operator.getOrder()
        ) {
            op1 = `(${op1})`;
        }
        let op2 = this.operand2 instanceof Operation
            ? this.operand2.toString()
            : this.operand2;
        if (
            this.operand2 instanceof Operation
            && (
                this.operand2.operator.getOrder() > this.operator.getOrder()
                || (
                    this.operand2.operator.getOrder() === this.operator.getOrder()
                    && !this.operator.isAssociative()
                )
            )
        ) {
            op2 = `(${op2})`;
        }
        return `${op1}${this.operator.getSymbol()}${op2}`;
    }

    this.toRPN = function () {
        return [
            this.operand1 instanceof Operation
                ? this.operand1.toRPN()
                : this.operand1,
            this.operand2 instanceof Operation
                ? this.operand2.toRPN()
                : this.operand2,
            this.operator.getSymbol()
        ].join(',');
    }
};
