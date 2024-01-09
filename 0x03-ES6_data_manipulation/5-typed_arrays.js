export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const view = new DataView(buff);

  try {
    view.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return view;
}
