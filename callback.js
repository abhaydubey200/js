
function add(a, b, callback) {
    console.log("Adding", a, "and", b);
    const sum = a + b;
    console.log("Sum calculated:", sum);
   
    callback(sum);
  }
  function displayResult(result) {
    console.log("Received result:", result);
    console.log("The result is:", result);
  }
  
  console.log("Calling add function...");
  
  add(5, 3, displayResult);
  