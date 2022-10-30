class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  handleSucess() {
    console.log(`acertou`)
    this.pairsGuessed++;
    return true
  }

  handleFail() {
    // console.log(`errou`)
    return false;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      return this.handleSucess()
    } else {
      return this.handleFail()
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed < 8) {
      return false;
    }
    alert(`YOU WON!!!`)
    return true
  }
}
