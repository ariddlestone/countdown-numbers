import NumberBucket from "./NumberBucket";

test('empty bucket is empty', () => {
    const numberBucket = new NumberBucket();
    expect(numberBucket.toArray()).toEqual([]);
});

test('adding a single number when creating a bucket', () => {
    const numberBucket = new NumberBucket(5);
    expect(numberBucket.toArray()).toEqual([5]);
});

test('adding multiple numbers when creating a bucket', () => {
    const numberBucket = new NumberBucket([5, 7]);
    expect(numberBucket.toArray()).toEqual([5, 7]);
});

test('adding a single number to an empty bucket', () => {
    const numberBucket = new NumberBucket();
    numberBucket.add(5);
    expect(numberBucket.toArray()).toEqual([5]);
});

test('adding multiple numbers to an empty bucket', () => {
    const numberBucket = new NumberBucket();
    numberBucket.add([5,7]);
    expect(numberBucket.toArray()).toEqual([5, 7]);
});

test('adding duplicate numbers to a bucket', () => {
    const numberBucket = new NumberBucket([5,5]);
    expect(numberBucket.toArray()).toEqual([5, 5]);
});

test('adding more numbers to a bucket', () => {
    const numberBucket = new NumberBucket([5, 7]);
    numberBucket.add([9, 5]);
    expect(numberBucket.toArray()).toEqual([5, 5, 7, 9]);
});

test('removing a single number from a bucket', () => {
    const numberBucket = new NumberBucket([5,5,7,9]);
    expect(numberBucket.toArray()).toEqual([5, 5, 7, 9]);
    numberBucket.remove([5]);
    expect(numberBucket.toArray()).toEqual([5, 7, 9]);
});

test('removing multiple numbers from a bucket', () => {
    const numberBucket = new NumberBucket([5,5,7,9]);
    expect(numberBucket.toArray()).toEqual([5, 5, 7, 9]);
    numberBucket.remove([5, 9]);
    expect(numberBucket.toArray()).toEqual([5, 7]);
});

test('getting unique numbers from a bucket', () => {
    const numberBucket = new NumberBucket([5,5,7,9]);
    expect(numberBucket.uniqueNumbers()).toEqual([5, 7, 9]);
});
