export default function createEmployeesObject(departmentName, employees) {
  const arr = [departmentName, employees];
  const dict = arr.map(name => { 
    return {departmentName : employees};
  })
  //const dict = {departmentName: employees};
  //return dict;
}
