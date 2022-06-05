import SolutionGenerator from "./SolutionGenerator";

test('expand empty solution returns numbers', () => {
    const generator = new SolutionGenerator();
    expect(generator.expandSolution([], [1, 2, 3])).toEqual([[1], [2], [3]]);
})

test('expand single number solution with no inputs returns empty array', () => {
    const generator = new SolutionGenerator();
    expect(generator.expandSolution([5], [])).toEqual([]);
})

test('expand single number solution with same input returns empty array', () => {
    const generator = new SolutionGenerator();
    expect(generator.expandSolution([5], [5])).toEqual([]);
})

test('expand single number solution returns number pairs', () => {
    const generator = new SolutionGenerator();
    expect(generator.expandSolution([1], [2, 3, 4])).toEqual([[1, 2], [1, 3], [1, 4]]);
})

test('expand numbers pair solution returns four operations', () => {
    const generator = new SolutionGenerator();
    expect(
        generator.expandSolution([2, 4], [])
            .map(solution => solution.join(','))
            .sort()
    ).toEqual([
        '4+2',
        '4/2',
        '4x2',
        '4-2',
    ].sort());
})

test('empty inputs results in no solution', () => {
    const generator = new SolutionGenerator();
    expect(generator.generate([], 100)).toBeUndefined();
})

test('numeric inputs results in similar numbers', () => {
    const generator = new SolutionGenerator();
    expect(generator.generate([5], 5).toString()).toEqual('5');
});

test('real-world question #1', () => {
    const generator = new SolutionGenerator();
    expect(generator.generate([4, 10, 2, 6, 7, 2], 662).toString()).toEqual('2+6x(4+7)x10');
})

test('real-world question #2', () => {
    const generator = new SolutionGenerator();
    expect(generator.generate([100, 75, 1, 9, 3, 4], 345).toString()).toEqual('(1+4)x9+3x100');
})

test('real-world question #3', () => {
    const generator = new SolutionGenerator();
    expect(generator.generate([2, 5, 4, 7, 3, 6], 576).toString()).toEqual('2x4x6x(5+7)');
})
