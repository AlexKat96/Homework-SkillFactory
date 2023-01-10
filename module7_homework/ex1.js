const userObject = {
    name: "Ivan",
    surname: "Ivanov",
    age: 18,
    city: "Moscow"
  }
  
  const argObject = Object.create(userObject);
  argObject.ownCity = "Piter";
  argObject.ownPosition = "Developer";
  
  const ownProperty = function(argument) {
    for (let key in argument) {
      if (argument.hasOwnProperty(key)) {
        console.log(key);
      }
    }
  }
  
  ownProperty(argObject);