import {ObjectId} from 'mongodb';

const exportedMethods = {
  checkId(id, varName) {
    if (!id) throw `Error: You must provide a ${varName}`;
    if (typeof id !== 'string') throw `Error:${varName} must be a string`;
    id = id.trim();
    if (id.length === 0)
      throw `Error: ${varName} cannot be an empty string or just spaces`;
    if (!ObjectId.isValid(id)) throw `Error: ${varName} invalid object ID`;
    return id;
  },
    
  checkString(strVal, varName) {
      if (!strVal) throw `Error: You must supply a ${varName}!`;
      if (typeof strVal !== 'string') throw `Error: ${varName} must be a string!`;
      strVal = strVal.trim();
      if (strVal.length === 0)
        throw `Error: ${varName} cannot be an empty string or string with just spaces`;
      if (!isNaN(strVal))
        throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
      return strVal;
    },
  
    checkStringArray(arr, varName) {
      if (!arr || !Array.isArray(arr))
        throw `You must provide an array of ${varName}`;
      for (let i in arr) {
        if (typeof arr[i] !== 'string' || arr[i].trim().length === 0) {
          throw `One or more elements in ${varName} array is not a string or is an empty string`;
        }
        arr[i] = arr[i].trim();
      }
  
      return arr;
    },

    checkPassword(password, varName){
        if(typeof password !== 'string'){
             throw `${varName} must be of string type`;
        }

        if (!password) {
          throw 'Password is required';
        }
        if (password.length < 8) {
          throw 'Password must be at least 8 characters long';
        }
        if (!/[a-z]/.test(password)) {
          throw 'Password must contain at least one lowercase letter';
        }
        if (!/[A-Z]/.test(password)) {
          throw 'Password must contain at least one uppercase letter';
        }
        if (!/\d/.test(password)) {
          throw 'Password must contain at least one number';
        }
        return password;
    },

    checkEmail(email, varName){
       if(typeof email !== 'string'){
           throw `${varName} must be a string`;
       }
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!email.match(emailRegex)){
          throw `The ${varName} must be a valid email address`;
       }
       return email;
    },

    checkAge(age, varName){
      if (isNaN(age)) {
        throw `${varName} must be a number`;
      }
      if (age < 18) {
        throw "You must be at least 18 years old to use this dating website";
      }
      if (age > 120) {
        throw "Invalid age";
      }
      return age;
    }
  
  };
  
  export default exportedMethods;