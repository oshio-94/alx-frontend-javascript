export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx in array) {
    const value = idx;
    arr[idx] = `${appendString}${value}`;
  }
  return arr;
}
