export default function getStudentIdsSum(getListStudents){
    const myArr = getListStudents.map((e) => {return e.id});
    return myArr.reduce((first, second) => {return first + second });
}