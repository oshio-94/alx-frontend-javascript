import Classroom from "./0-classroom";

export default function initiaizeRooms() {
    const first = new Classroom(19);
    const second = new Classroom(20);
    const third = new Classroom(34);
    return [first, second, third];
}