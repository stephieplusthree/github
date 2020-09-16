//The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

//Manhattan Distance

//Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

//Write a function manhattanDistance that accepts two points, pointA and pointB, and returns the Manhattan Distance between the two points.

//pointA and pointB are arrays containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

//Examples:

//manhattanDistance( [1, 1], [1, 1] ) // => returns 0

//manhattanDistance( [5, 4], [3, 2] ) // => returns 4

//manhattanDistance( [1, 1], [0, 3] ) // => returns 3

/////////////////////////////ANSWER

//   Input: two arrays with x/y coordinates.
//   Output: number

//   Algorithm:
//   - [X] Find the differences between the x-values.
//   - [X] Find the differences between the y-values.
//   - [X] Get the absolute value of the differences.
//   - [X] Add the absolute values.

const xDiff = Math.abs(pointA[0] - pointB[0]);
const yDiff = Math.abs(pointA[1] - pointB[1]);

return xDiff + yDiff;

}