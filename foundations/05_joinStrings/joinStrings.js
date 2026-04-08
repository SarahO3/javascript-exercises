const firstName = 'Carlos';
const lastName = 'Stevenson';
const thisYear = 1965;
const birthYear = 1947;

const fullName = firstName + ' ' + lastName;
const age = thisYear - birthYear;

const greeting = 'Hello! My name is ' + fullName + ' and I am ' + age + ' years old.';

// Do not change this
module.exports = {
  firstName,
  lastName,
  thisYear,
  birthYear,
  greeting,
  fullName,
  age
};