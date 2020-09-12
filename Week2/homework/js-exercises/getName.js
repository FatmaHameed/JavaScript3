// const getAnonName = (firstName, callback) => {
//   setTimeout(() => {
//     if (!firstName)
//       return callback(new Error("You didn't pass in a first name!"));

//     const fullName = `${firstName} Doe`;

//     return callback(fullName);
//   }, 2000);
// };

// getAnonName('', console.log);

const getAnonName = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        const reason = new Error("You didn't pass in a first name!");
        reject(reason);
      } else {
        const fullName = `${firstName} Doe`;
        resolve(fullName);
      }
    }, 2000);
  });
};

getAnonName('John').then(console.log);
getAnonName('').catch(console.log);
