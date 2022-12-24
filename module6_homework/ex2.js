function getNum(num) {
  if (!Number.isInteger(num) || num < 2 || num > 1000) {
    return console.log("Введенные данные не верны");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return console.log("Введеное число является сложным");
      }; 
    };
    return console.log("Введеное число является простым");
  };
};

getNum(55);