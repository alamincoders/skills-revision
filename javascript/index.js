console.log("hello world");

const add = async (num1, num2) => {
  try {
    const result = num1 + num2;
    return result;
  } catch (err) {
    console.log(err);
  }
};

add(5, 6); 
