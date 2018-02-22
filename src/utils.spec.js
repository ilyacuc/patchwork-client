import { rotateClockwise, rotateCounterClockwise } from './utils';

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 'a', 'b', 'c']
];
const newMatrix = [
    [9, 5, 1],
    ['a', 6, 2],
    ['b', 7, 3],
    ['c', 8, 4]
];

it('rotate 90 clockwise', () => {
    expect(rotateClockwise(matrix)).toEqual(newMatrix);
});

it('rotate counterclockwise clockwise', () => {
    expect(rotateCounterClockwise(rotateClockwise(matrix))).toEqual(matrix);
});

it('rotate 270 counterclockwise', () => {
    expect(rotateCounterClockwise(rotateCounterClockwise(rotateCounterClockwise(matrix)))).toEqual(newMatrix);
});