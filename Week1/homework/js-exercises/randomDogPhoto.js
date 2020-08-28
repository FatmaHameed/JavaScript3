// // document.body.innerHTML = 'hi';
const button1 = document.getElementById('XML-requests');
const button2 = document.getElementById('axios-requests');

button1.addEventListener('click', loadTextByHttpRequest);
button2.addEventListener('click', loadTextByAxios);

// using XMLHttpRequest

function loadTextByHttpRequest() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - type, url/file, async

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  // console.log('READYSTATE: ', xhr.readyState);

  xhr.onload = function() {
    // console.log('READYSTATE: ', xhr.readyState);
    if (this.status == 200) {
      // create a readable data from the requested data
      const data = JSON.parse(this.responseText);
      // log the data to know what is it about exactly
      console.log(data);

      // created li and image elements and assign the image source attribute to the image source in the data

      const imagesList1 = document.createElement('li');
      imagesList1.style.listStyle = 'none';
      const image1 = document.createElement('img');

      image1.src = data.message;
      image1.style.width = '40vw';
      // append image to li
      imagesList1.appendChild(image1);
      // append li to ul DOM element
      document.getElementById('imageXML').appendChild(imagesList1);
    }
    // incorporate error if the status is incomplete
    else if (this.status == 404) {
      console.log('Not Found');
    }
  };
  // create on error function
  xhr.onerror = function() {
    console.log('Request Error...');
  };
  // Sends request
  xhr.send();
}

// using axios
function loadTextByAxios() {
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      // logging the response data to figure out what is it about exactly
      console.log(res);
      // assign the image url to a variable
      const imageSource = res.data.message;
      // console.log(imageSource);

      // create li and image elements and assign the source attribute of the image to the image url from the data
      const imagesList = document.createElement('li');
      imagesList.style.listStyle = 'none';
      const image2 = document.createElement('img');

      image2.src = imageSource;
      image2.style.width = '40vw';
      // append image to li
      imagesList.appendChild(image2);
      // append li to DOM element
      document.getElementById('imageAxios').appendChild(imagesList);
    })
    // incorporate error message
    .catch(error => {
      console.log(error);
    });
}
