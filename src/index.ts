import { BackGround } from "./game-object/background";
import { Base } from "./game-object/base";
import { Bird } from "./game-object/bird";
import { GameOver } from "./game-object/gameover";
import { PipeDown } from "./game-object/pipeDown";
import { PipeUp } from "./game-object/pipeUp";
import { Scores } from "./game-object/Scores";
import { StartGame } from "./game-object/startGame";
import { Game } from "./game/game";

function main(): void {
  const game = new Game("game");
  const bird = new Bird(
    game,
    "./assets/img/redbird-upflap.png",
    "./assets/sound/wing.wav",
    "./assets/img/redbird-midflap.png",
    "./assets/img/redbird-downflap.png"
  );
  const scores = new Scores(
    game,
    "./assets/img/0.png",
    "./assets/sound/point.wav",
    "./assets/img/1.png",
    "./assets/img/2.png",
    "./assets/img/3.png",
    "./assets/img/4.png",
    "./assets/img/5.png",
    "./assets/img/6.png",
    "./assets/img/7.png",
    "./assets/img/8.png",
    "./assets/img/9.png"
  );
  const bg = new BackGround(game, "./assets/img/background-day.png");
  const base = new Base(game, "./assets/img/base.png");
  const pipeUp = new PipeUp(game, "./assets/img/pipe-green-up.png");
  const pipeDown = new PipeDown(game, "./assets/img/pipe-green-down.png", "./assets/sound/hit.wav");
  const gameOver = new GameOver(game, "./assets/img/gameover.png");
  const startGame = new StartGame(game, "./assets/img/message.png");

  game.setBird(bird);
  game.setBackGround(bg);
  game.setBase(base);
  game.setPipeUp(pipeUp);
  game.setPipeDown(pipeDown);
  game.setGameOver(gameOver);
  game.setStartGame(startGame);
  game.setScores(scores);
  game.start();
}

main();
