const testObject = {
  name: "Ivan",
  surname: "Ivanov",
  age: 18,
  city: "Moscow"
};

let meaningTrue = 0;

const propertyObject = function(string, object) {
  for (let key in object) {
    if (key === string) {
      meaningTrue++;
    }
  }
  if (meaningTrue > 0) console.log("true")
  else console.log("false")
}

propertyObject("name", testObject);