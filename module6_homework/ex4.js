function getNums (start, end) {
    let nums = start;
  
    let intervalId = setInterval(function() {
      console.log(nums);
      if (nums == end) {
        clearInterval(intervalId);
      } else {
        nums++;
      };
    }, 1000);
  }
  
  getNums(5, 15);