var meaning = prompt('Введите значение');

meaning = meaning.replaceAll(' ', '');
meaning = meaning.replaceAll(',', '.');

var meaningNumber = +meaning;

if (meaning !== "" && typeof meaning !== "object" && typeof meaningNumber == "number" && !Number.isNaN(meaningNumber)) {

    if (Number.isInteger(meaningNumber)) {
     
        if (meaningNumber % 2 === 0) {
            console.log ("Число четное");
        } else {
            console.log ("Число не четное");
        }
    } else {
        console.log ("Вы ввели нецелое число")
    }
} else {
    console.log ("Упс, кажется вы ошиблись");
} 