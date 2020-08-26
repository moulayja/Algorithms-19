
/*
Kathleen owns a beautiful rug store.
She likes to group the rugs into 4 mutually exclusive categories.

imperfect
horizontally symmetric
vertically symmetric
perfect
An imperfect rug is one that is neither horizontally nor vertically symmetric.
Here is an example of an imperfect rug:

[
  ["a", "a", "a", "a"],
  ["a", "a", "a", "a"],
  ["a", "a", "b", "b"]
]
The following is an horizontally symmetric rug.
You could "fold" the rug across a hypothetical x-axis, and both sides would be identical.
A horizontally symmetric rug is not vertically symmetric (otherwise this rug would be classified as perfect ).

[
  ["c", "a", "a", "a"],
  ["b", "b", "b", "b"],
  ["c", "a", "a", "a"]
]
The following is a vertically symmetric rug.
You could "fold" the rug across a hypothetical y-axis, and both sides would be identical.
A vertically symmetric is not horizontally symmetric (otherwise this rug would be classified as perfect ).

[
  ["a", "b", "a"],
  ["b", "b", "b"],
  ["a", "b", "a"],
  ["a", "b", "a"]
]
Finally, a perfect rug is one that is both vertically and horizontally symmetric.
That is, folded either length-wise or width-wise will yield two identical pieces.

[
  ["a", "b", "b", "a"],
  ["b", "b", "b", "b"],
  ["a", "b", "b", "a"]
]
Given a rug of m x n dimension, determine whether it is imperfect, horizontally symmetric,
vertically symmetric or perfect.
Rugs are represented using a two-dimensional array.

Examples
classifyRug([
  ["a", "a"],
  ["a", "a"]
]) ➞ "perfect"

classifyRug([
  ["a", "a", "b"],
  ["a", "a", "a"],
  ["b", "a", "a"]
]) ➞ "imperfect"

classifyRug([
  ["b", "a"],
  ["b", "a"]
]) ➞ "horizontally symmetric"

classifyRug([
  ["a", "a"],
  ["b", "b"]
]) ➞ "vertically symmetric"

Notes
You can consider a 1 x n rug as being trivially horizontally symmetric,
an n x 1 rug as being trivially vertically symmetric, and a 1 x 1 rug as being trivially perfect.

*/

function classifyRug(pattern) {
	var verticalSym = true;
	var horizontalSym = true;
	var horizontalP1 = [];
	var horizontalP2 = [];
	
	for (var i = 0; i < pattern.length;i++){
		var line = pattern[i];
		var lineLength = line.length;
		var lineSlice1 = Math.floor(lineLength/2);
		var lineSlice2 = ((lineLength%2 != 0) ? lineSlice1+1 : lineSlice1);

		if (lineLength != 1 && line.slice(0,lineSlice1).toString() != line.slice(lineSlice2).reverse().toString()){
			verticalSym = false;
		}
		if (i <= pattern.length/2){
			horizontalP1.push(line);
		}
		if (i >= pattern.length/2-1){
			horizontalP2.push(line);
		}
	}
	if (horizontalP1.toString() != horizontalP2.reverse().toString()){
		horizontalSym = false;
	}
	return (!horizontalSym && !verticalSym) ? "imperfect" : (horizontalSym && !verticalSym) ? "horizontally symmetric" : (verticalSym && !horizontalSym) ? "vertically symmetric" : "perfect";
}

