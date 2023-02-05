import {getPercents} from "../ex2.js";

describe("tests getPercents function", () => {
    it("corner case for getPercents function: percent - 0, number - 0", () => {
        expect(getPercents(0, 10)).toBe(0);
        expect(getPercents(10, 0)).toBe(0);
        expect(getPercents(0, 0)).toBe(0);
    }), 
    it("unit tests for getPercents function: correct value and invalid value", () => {
        expect(getPercents(50, 10)).toBe(5);
        expect(getPercents(100, -10)).toBe(-10);
        expect(getPercents(-150, 10)).toBe(-15);
        expect(getPercents(-200, -10)).toBe(20);
        expect(getPercents("percent", -10)).toBe(console.log("Введено некорректное значение процента или значение отсутствует"));
        expect(getPercents(10, )).toBe(console.log("Введено некорректное число или значение отсутствует"));
        expect(getPercents(10, "number")).toBe(console.log("Введено некорректное число или значение отсутствует"));
    })
})