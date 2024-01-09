export default function updateUniqueItems(map) {
  const lst = map;

  if (lst instanceof Map) {
    for (const [key, value] of lst) {
      if (value === 1) {
        lst.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return lst;
}
