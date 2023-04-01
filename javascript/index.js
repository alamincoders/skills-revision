console.log("hello world");

const add = (num1, num2) => {
  try {
    const result = num1 + num2;
    return result;
  } catch (err) {
    console.log(err);
  }
};

console.log(add(5, 9));
