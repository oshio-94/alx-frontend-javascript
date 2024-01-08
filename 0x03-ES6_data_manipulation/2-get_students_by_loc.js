export default function getStudentsByLocation(getListStudents, city) {
  const list = getListStudents.filter((e) => {if (e.location == city){
    return e;
  }});
  return list;
}
