// // document.body.innerHTML = 'hi';
let button1 = document.getElementById('XML-requests');
let button2 = document.getElementById('axios-requests');

button1.addEventListener('click', loadTextByHttpRequest);
button2.addEventListener('click', loadTextByAxios);

// using XMLHttpRequest

function loadTextByHttpRequest() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - type, url/file, async

  xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);
  // console.log('READYSTATE: ', xhr.readyState);

  xhr.onload = function() {
    // console.log('READYSTATE: ', xhr.readyState);
    if (this.status == 200) {
      // create a readable data from the requested data
      let data = JSON.parse(this.responseText);
      // log the data to know what is it about exactly
      console.log(data);
      // created image element and assign its source attribute to the image source in the data
      let image = document.createElement('img');
      image.src = data.img;
      image.style.width = '40vw';
      document.getElementById('imageXML').appendChild(image);
      // console.log(data.img);
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
    .get('https://xkcd.now.sh/?comic=latest')
    .then(res => {
      // logging the response data to figure out what is it about exactly
      console.log(res);
      // assign the image url to a variable
      let imageSource = res.data.img;
      // console.log(imageSource);
      //create image element and assign the source attribute to the image url from the data
      let image2 = document.createElement('img');
      image2.src = imageSource;
      image2.style.width = '40vw';
      // append image to DOM element
      document.getElementById('imageAxios').appendChild(image2);
    })
    // incorporate error message
    .catch(error => {
      console.log(error);
    });
}
