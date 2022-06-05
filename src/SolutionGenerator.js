import Addition from "./Operators/Addition";
import Division from "./Operators/Division";
import Multiplication from "./Operators/Multiplication";
import Operation from "./Operation";
import Subtraction from "./Operators/Subtraction";
import NumberBucket from "./NumberBucket";

const operators = [
    new Addition(),
    new Division(),
    new Multiplication(),
    new Subtraction(),
];

/**
 * @param {(Operation|number)[]} currentStack
 * @param {number[]} inputs
 * @return {(Operation|number)[][]}
 */
function expandSolution(currentStack, inputs) {
    const newSolutions = [];
    if (currentStack.length >= 2) {
        for (const operator of operators) {
            const newStack = [...currentStack];
            const operands = [newStack.pop(), newStack.pop()];
            if (operator.operandValuesAreValid(...operands)) {
                newStack.push(new Operation(operator, ...operands));
                newSolutions.push(newStack);
            }
        }
    }

    // work out which numbers we've already used
    const availableNumbers = new NumberBucket(inputs);
    for (const stackItem of currentStack) {
        if (stackItem instanceof Operation) {
            availableNumbers.remove(stackItem.getInputsUsed());
        } else {
            availableNumbers.remove(stackItem);
        }
    }

    for (const number of availableNumbers.uniqueNumbers()) {
        newSolutions.push([...currentStack, number]);
    }

    return newSolutions;
}

function SolutionGenerator() {
    this.expandSolution = expandSolution;

    this.generate = function (inputs, target) {
        const solutionBases = [[]];
        while (solutionBases.length > 0) {
            const newSolutionBases = this.expandSolution(solutionBases.pop(), inputs);
            solutionBases.unshift(...newSolutionBases);

            const solutions = newSolutionBases
                .filter(solution => solution.length === 1)
                .map(solution => solution[0])
                .filter(solution => Math.abs((solution instanceof Operation ? solution.getValue() : solution) - target) === 0);
            if (solutions.length) {
                return solutions[0];
            }
        }
    }
}

export default SolutionGenerator;
