export function rotateMatrix(matrix, angle) {
    const rotate = angle % 360 / 90;
    switch (rotate) {
        case 1:
            return rotateClockwise(matrix);
        case 2:
            return rotateClockwise(rotateClockwise(matrix));
        case 3:
            return rotateCounterClockwise(matrix);
        default:
            return matrix;
    }
}

/**
 *
 * @param {array[][]} matrix
 * @returns {array[][]}
 */
export function rotateCounterClockwise(matrix) {
    const width = matrix[0].length;
    const height = matrix.length;
    const newMatrix = Array(width).fill(0).map(() => Array(height).fill(0));
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            newMatrix[width - j - 1][i] = matrix[i][j]
        }
    }

    return newMatrix;
}

/**
 *
 * @param {array[][]} matrix
 * @returns {array[][]}
 */
export function rotateClockwise(matrix) {
    const width = matrix[0].length;
    const height = matrix.length;
    const newMatrix = Array(width).fill(0).map(() => Array(height).fill(0));
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            newMatrix[j][height - i - 1] = matrix[i][j]
        }
    }

    return newMatrix;
}