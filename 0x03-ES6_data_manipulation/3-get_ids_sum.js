export default function getStudentIdsSum(getListStudents) {
  const myArr = getListStudents.map((e) => e.id);
  return myArr.reduce((first, second) => first + second);
}
