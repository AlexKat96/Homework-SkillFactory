export function getPercents(percent, number) {
  if (typeof(percent) === "undefined" || typeof(percent) !== "number") {
    console.log("Введено некорректное значение процента или значение отсутствует");
  } else if (typeof(number) === "undefined" || typeof(number) !== "number") {
    console.log("Введено некорректное число или значение отсутствует");
  } else {
    return percent * 0.01 * number;
  }
};