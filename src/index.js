const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  const cardsTurnedList = () => Array.from(document.querySelectorAll('.card')).filter(item => item.classList.contains(`turned`))

  const handleOnClick = (card) => {
    if (cardsTurnedList().length < 2) {
      card.classList.add('turned')
    }
    const [el1, el2] = cardsTurnedList()
    if (el1 && el2) {
      const card1 = el1.getAttribute('data-card-name')
      const card2 = el2.getAttribute('data-card-name')
      setTimeout(() => {
        const result = memoryGame.checkIfPair(card1, card2)
        el1.classList.remove('turned')
        el2.classList.remove('turned')
        if (result) {
          el1.classList.add('blocked')
          el2.classList.add('blocked')
        }
        memoryGame.checkIfFinished()
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
        document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
      }, 2000)
    }

    
  }

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => handleOnClick(card));
  });


});
