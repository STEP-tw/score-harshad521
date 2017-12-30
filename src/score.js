const Score = function (incrementScoreBy){
  this.incrementScoreBy = incrementScoreBy;
  this.score = 0
}

Score.prototype.updateScore = function(snakeLength){
  this.score = this.incrementScoreBy * snakeLength;
};

Score.prototype.getScore = function () {
  return this.score;
};
