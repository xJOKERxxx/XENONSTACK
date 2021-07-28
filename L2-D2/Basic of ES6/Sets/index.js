//Sets allow to create uniques list.

const exampleSet = new Set([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]); //here there is only two values 1 and 2 which are repeated.

exampleSet.add(5);
exampleSet.add(17);

//exampleSet.delete(5);//this will return boolean value.

//console.log(exampleSet.delete(5));


exampleSet.clear(); //delete all the elements in list.

console.log(exampleSet.size); //it will only show 2 because it doesnt count the repeated elements.