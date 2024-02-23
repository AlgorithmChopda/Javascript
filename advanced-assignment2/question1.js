/*
    Create a validation class similar to ‘yup’ and add validations for required, min and max for strings. Expose an isValid method that returns true or false based on the argument passed
*/

class Validation {
  constructor(str, min, max, isEmail, isPassword) {
    this.str = str;
    this.min = min;
    this.max = max;
    this.isEmail = isEmail;
    this.isPassword = isPassword;
  }

  isEmailValid(email) {
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  isPasswordValid = (password) => {
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  isValid() {
    if (
      typeof this.str !== "string" ||
      this.str.length < this.min ||
      this.str.length > this.max
    )
      return false;

    if (this.isEmail) return this.isEmailValid(this.str);
    if (this.isPassword) return this.isPasswordValid(this.str);

    return true;
  }
}

str = "abc";
let isValid = new Validation(str, 3, 10, false, false).isValid();
console.log(str, ":", isValid);
