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

  xhr.open('GET', 'https://www.randomuser.me/api', true);
  // console.log('READYSTATE: ', xhr.readyState);

  xhr.onload = function() {
    console.log('READYSTATE: ', xhr.readyState);
    if (this.status == 200) {
      let data = JSON.parse(this.responseText);
      console.log(data.results[0]);
      document.getElementById('dataByXML').innerText =
        data.results[0].name.first;
    } else if (this.status == 404) {
      console.log('Not Found');
      document.getElementById('dataByXML').innerText = 'Not Found';
    }
  };

  xhr.onerror = function() {
    console.log('Request Error...');
    document.getElementById('dataByXML').innerText = 'Request Error...';
  };
  // Sends request
  xhr.send();
}

// using axios
function loadTextByAxios() {
  axios
    .get('https://www.randomuser.me/api')
    .then(res => {
      console.log(res);
      let data = res.data.results[0].name.first;
      document.getElementById('dataByAxios').innerText = data;
    })

    .catch(error => {
      console.log(error);
    });
}
