export class HighScores {
  #scores;

  constructor(scores = []) {
    this.#scores = scores;
  }

  get scores() {
    return this.#scores;
  }

  get latest() {
    return this.scores.pop();
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return [...this.scores].sort((a, b) => a < b ? -1 : 1).reverse().slice(0,3);
  }
}
