import getListStudents from './0-get_list_students';

export default function getListStudentIds(getListStudents) {
  const arr = getListStudents;
  if (Array.isArray(arr)) {
    const myArr = getListStudents.map((e) => {return e.id});
    return myArr;
  } 
  return [];
}
