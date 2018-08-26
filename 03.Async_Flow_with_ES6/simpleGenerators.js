function* fruitGenerator() {
  yield "Banana";
  yield "Pawpaw";
  yield "Groundnut";

  return "All fruits done";
}

let makeFruit = fruitGenerator();

console.log(makeFruit.next());
console.log(makeFruit.next());
console.log(makeFruit.next());
console.log(makeFruit.next());

console.log("-----------------------------");

//As an iterator

function* iteratorGenerator(fruitsArray) {
  for (let index = 0; index < fruitsArray.length; index++) {
    yield fruitsArray[index];
  }
} //iterator

let iterator = iteratorGenerator(["apples", "oranges", "berries"]);

let currentItem = iterator.next();

while (!currentItem.done) {
  console.log(currentItem.value);
  currentItem = iterator.next();
}

console.log("-----------------------------");

//Passing values back to a generator
function* twoWayGenerator() {
  let what = yield null;
  console.log("Hello " + what);
} //twoWayGenerator

let twoWay = twoWayGenerator();

twoWay.next();
twoWay.next("Fikky");
