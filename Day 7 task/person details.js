class Person {
  constructor(firstName, lastName, age, gender, occupation, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
    this.email = email;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  getOccupation() {
    return this.occupation;
  }

  getEmail() {
    return this.email;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setAge(age) {
    this.age = age;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setOccupation(occupation) {
    this.occupation = occupation;
  }

  setEmail(email) {
    this.email = email;
  }
}
