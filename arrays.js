var chocolateBars = [
  'snikcers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function descructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
