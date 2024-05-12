const character = "#";
const count = 8;
const rows = [];

// Function that set on how to display the pattern
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

// Since rows.length will start with value 0. Then the condition will be less than (not less than and equal)
while (rows.length < count) {
  // Push content in "padRow" function into the "rows" array
  rows.push(padRow(rows.length + 1, count));
}

// Iterate through each of the element in "rows" array and display each of it
for ( const row of rows) {
  console.log(row);
}

