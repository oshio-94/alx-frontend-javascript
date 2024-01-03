export default function guardrail(mathFunction) {
  const arr = [];
  try {
    arr.push(mathFunction());
  } catch (e) {
    arr.push(e.toString());
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
