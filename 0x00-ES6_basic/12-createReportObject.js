export default function createReportObject(employeesList) {
  return {
    allEmployees: { employeesList },
    getNumberofDepartments(employeesList) {
      const keys = Object.keys(employeesList);
      const count = keys.length;
      console.log(count);
    },
  };
}
