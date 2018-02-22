export function rotateCounterClockwise(matrix) {
    const width = matrix[0].length;
    const height = matrix.length;
    const newMatrix = Array(width).fill(0).map(() => Array(height).fill(0));
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            newMatrix[i][height - j - 1] = matrix[i][j]
        }
    }

    return newMatrix;
}

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