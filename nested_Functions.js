function outerFunction() {  // Outer function scope
  const outerVariable = 'I am from outerFunction';
  function innerFunction() {
    // Inner function scope
    const innerVariable = 'I am from innerFunction';

    console.log(outerVariable); // Access outer variable
    console.log(innerVariable); // Access inner variable
  }

  return innerFunction; // Return the inner function
}

const myInnerFunction = outerFunction(); // Call outer function and get the inner function

myInnerFunction(); // Call the inner function


