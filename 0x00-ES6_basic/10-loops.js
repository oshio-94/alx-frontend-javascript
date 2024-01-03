export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let idx of array) {
    const value = array[idx]
    arr.push(`${appendString}${idx}`);
  }
  return arr;
}
