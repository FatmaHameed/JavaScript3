function main() {
  // Create DOM elements
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const infoParagraph = document.createElement('p');
  const ulElement = document.createElement('ul');
  header.textContent = "Let's play some Trivia!";
  infoParagraph.textContent =
    'Try your best to figure out the answer. If you relly have no clue, click on the question to reveal the answer...';
  document.body.appendChild(container);
  container.appendChild(header);
  container.appendChild(infoParagraph);
  container.appendChild(ulElement);

  // Create a function to get and manipulate the data

  async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=5');
    const data = await response.json();
    let questionsLiEl;
    data.results.forEach(result => {
      const { question } = result;
      const correctAnswer = result.correct_answer;
      function parseText(text) {
        const parsedText = $('<textarea />') // link that this code was taken from: https://stackoverflow.com/questions/5796718/html-entity-decode
          .html(text)
          .text();
        return parsedText;
      }
      // Decode special characters appeared in the data that fetched(using jquery)
      const parsedQuestion = parseText(question);
      const parsedCorrectAnswer = parseText(correctAnswer);

      // create li elements and assign their text content to the parsed questions, then append them to ul element
      questionsLiEl = document.createElement('li');
      questionsLiEl.textContent = parsedQuestion;
      ulElement.appendChild(questionsLiEl);

      // create div elements and assign their text content to the parsed answers, then append them to ul element
      const answer = document.createElement('div');
      ulElement.appendChild(answer);

      // Create event listener for getting answers of the questions when they are clicked
      questionsLiEl.addEventListener('click', event => {
        if (event.target.textContent === parsedQuestion) {
          answer.textContent = parsedCorrectAnswer;
          answer.style.display = 'block';
        }
      });
    });
  }
  getQuestions();
}

window.addEventListener('load', main);
