let arrMap = new Map();

arrMap.set("string", 254);
arrMap.set(1, true);
arrMap.set(false, "booleanLength");
arrMap.set("250164", 12);

for (let [resultKeys, resultValues] of arrMap) {
   console.log(`Ключ - ${resultKeys}, значение - ${resultValues}`);
}