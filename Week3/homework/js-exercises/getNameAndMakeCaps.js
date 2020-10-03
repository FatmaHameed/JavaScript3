// Exercise A

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData('https://randomfox.ca/floof/');

// Exercise B

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(array) {
  const capsArray = await array.map(word => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    }
    throw new Error('Not all items in the array are string!');
  });
  return capsArray;
}

async function promiseCaps() {
  try {
    const result = await makeAllCaps(arrayOfWords);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
promiseCaps(arrayOfWords);
