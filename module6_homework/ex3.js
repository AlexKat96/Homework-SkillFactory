function summ(num1) {
  return function numFunc(num2) {
    return num1 + num2;
   };
};

console.log(summ(7)(10));