interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}
const studentOne : Student = {
    firstName: "mike",
    lastName: "lock",
    age: 21,
    location: "jersey"
}
const studentTwo : Student = {
    firstName: "liz",
    lastName: "kook",
    age: 23,
    location: "boston"
}
const studentsList = [studentOne, studentTwo];