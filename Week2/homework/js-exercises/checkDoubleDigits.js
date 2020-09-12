function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('The number is bigger than 10');
    } else if (number < 10) {
      reject(new Error('Error! The number is smaller than 10'));
    } else {
      resolve('The number is equal to 10');
    }
  });
}

checkDoubleDigits(31).then(console.log);
checkDoubleDigits(10).then(console.log);
checkDoubleDigits(3).catch(console.log);
