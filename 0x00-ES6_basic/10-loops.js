export default function appendToEachArrayValue(array, appendString) {
  for (idx in array) {
    let value = array[idx];
    array[idx] = appendString + value;
  }
  return array;
}
