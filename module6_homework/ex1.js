let s = Symbol("s");
let arr = [1, 2, 3, 'string', 0, 5, 10, 0, null, s, 0, '&', false];

let evenNum = 0;
let oddNum = 0;
let zeroNum = 0;

for (let i = 0; i < arr.length; i++) {
  
  if(!Number.isInteger(arr[i]))
    continue;
  
  if(arr[i] == 0) {
    zeroNum++;
  } else if (arr[i] % 2 == 0) {
      evenNum++;
    } else {
      oddNum++; 
    }
} 

function getNums() {
  console.log(`Количество четных чисел: ${evenNum}`);
  console.log(`Количество четных чисел: ${oddNum}`);
  console.log(`Количество четных чисел: ${zeroNum}`);
}

getNums();
