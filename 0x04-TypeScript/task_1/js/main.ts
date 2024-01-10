interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [keyname: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacherFunction (firstName, lastName){
  return `${firstName[0]}. ${lastName}`;
};

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements classInterface {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string){
      this.firstName = firstName;
      this.lastName = lastName;
      
  }
  workOnHomework() {
      return 'Currently working';
  }
  displayName() {
      return `${this.firstName}`
  }
}