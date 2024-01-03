export default function createReportObject(employeesList) {
  return { allEmployees: {employeesList} , getNumberofDepartments() {
    let keys = Object.keys(employeesList);
    let count = keys.length;
    return count;
  } }
};
