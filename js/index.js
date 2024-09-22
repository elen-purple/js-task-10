//* 1
const setClick = () => confirm("Натисність на кнопку");
const showMessage = (callback) => {
  let isClick = "";
  do {
    isClick = callback();
    if (isClick === false) {
      break;
    }
    console.log("Hello word");
  } while (true);
};
showMessage(setClick);
//* 2
const generateNumber = () => Math.random() * (100 - 1) + 1;
const checkNumbers = (callback) => {
  const userN = Number.parseInt(prompt("Enter your number"));
  const randomNumber = callback();
  let message = "You lose...";
  if (userN === randomNumber) {
    message = "You won!";
  }
  return message;
};
alert("checkNumbers(generateNumber)");
//* 3
const makesClick = () => confirm("Click on button");
const countClicks = (callback) => {
  let isClick = "";
  let clicks = 0;
  do {
    isClick = callback();
    if (isClick === false) {
      break;
    }
    clicks += 1;
  } while (true);
  return clicks;
};
alert(`You have clicked ${countClicks(makesClick)} times`);
//* 4
const applyCallbackToEachElement = (numbers, callback) => {
  const squareNumbers = [];
  for (const number of numbers) {
    squareNumbers.push(number * number);
  }
  return squareNumbers;
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = (number) => number * number;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);
//* 5
const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = (price / 100) * (100 - discount);
  callback(discountedPrice);
};
const showDiscountedPrice = (price) => {
  console.log(price);
};

calculateDiscountedPrice(1000, 10, showDiscountedPrice);
