import getListStudents from './0-get_list_students';

export default function getListStudentIds(getListStudents) {
  const myArr = getListStudents.map((e) => {return e.id});
}