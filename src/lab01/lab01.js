console.log("Lab01")

const fullName = "DaxjfOl";
const birthYear = 2001;
const isStudent = true;

const today = new Date;
const currentYear = today.getFullYear();
const calculatedAge = currentYear - birthYear;

const person = `Tên ${fullName}
Tuổi ${calculatedAge}
Sinh Viên ${isStudent}`


console.log(person)