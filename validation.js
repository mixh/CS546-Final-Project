const exportedMethods = {
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

        const passwordRegex = /^(?=,*[a-z])(?=,*[A-Z])(?=,*\d)(?=,*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!password.match(passwordRegex)){
            throw `The ${varName} must contain at least 8 characters, including atleast one uppercase letter, one lowercase letter, one digit and one special character`;
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
    },

    checkAge(age, varName){
       if(typeof age != 'number' || isNaN(age)){
          throw `${varName} must be a valid number`;
       }
       if(!Number.isInteger(age) || age < 0){
          throw `${varName} must be  a positive integer`;
       }
       return age;
    }
  };
  
  export default exportedMethods;