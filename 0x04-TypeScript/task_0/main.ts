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
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
studentsList.forEach((studentlisted){
    // creates a table row
    const row = document.createElement("tr");
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    const cellText1 = document.createTextNode(`${studentlisted.firstName}`);
    const cellText2 = document.createTextNode(`${studentlisted.location}`);

    cell1.appendChild(cellText1);
    cell2.appendChild(cellText2);

    row.appendChild(cell1);
    row.appendChild(cell2);
    tblBody.appendChild(row);
      // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
})