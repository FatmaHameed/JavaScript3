// Exercise A

async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
getData('https://randomfox.ca/floof/');

// Exercise B

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
async function makeAllCaps(array) {
  try {
    const value = await new Promise((resolve, reject) => {
      const capsArray = array.map(word => {
        if (typeof word === 'string') {
          return word.toUpperCase();
        }
        reject('Error: Not all items in the array are strings!');
      });
      resolve(capsArray);
    });
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}
makeAllCaps(arrayOfWords);
