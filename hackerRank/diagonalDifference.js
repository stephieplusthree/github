'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {

    // Input: Array of Numbers.
    // Output: Number.

    // Algorithm:
    // - [X] Add the left-to-right diagonal of the matrix.
    // - [X] Add the right-to-left diagonal of the matrix.
    // - [X] Get the absolute difference of the sums.

    const length = arr.length;
    let leftToRight = 0;
    let rightToLeft = 0;

    for(let i = 0, j = length - 1; i < length; i++, j--) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][j];
    }

    const absDiff = Math.abs(leftToRight - rightToLeft);

    return absDiff;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
