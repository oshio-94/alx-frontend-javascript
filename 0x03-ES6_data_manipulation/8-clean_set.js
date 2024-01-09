export default function cleanSet(set, startString) {
  const list = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const x of set) {
    if (x && x.startsWith(startString)) {
      list.push(x.slice(startString.length));
    }
  }

  return list.join('-');
}
