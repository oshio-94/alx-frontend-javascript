export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const list = getListStudents.filter((e) => {
    if (e.location === city) {
      return e;
    }
  });
  for (const x of list) {
    x.grade = 'N/A';
  }
  const newlist = list.map(n);

  function n(lst) {
    for (const y of newGrades) {
      if (lst.id === y.studentId) {
        lst.grade = y.grade;
      }
    }
    return lst;
  }
  return newlist;
}
