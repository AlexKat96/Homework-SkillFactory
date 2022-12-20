let arr = [1, 2, 5, 10];
let boolResult = true;


for (let i = 1; i < arr.length; i++) {

  if (arr[0] != arr[i]) {
    boolResult = false;
    break;
  } 
}

console.log(boolResult);