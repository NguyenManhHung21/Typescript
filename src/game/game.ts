// canvas sau khi ép kiểu HTMLCanvasElement thì
// có 1 method là getContext để trả về cho 1 đối tượng context để vẽ
//CanvasRenderingContext2D có rất nhiều method(prototype). Nhưng trong bài này ta sẽ dùng drawImage() và clearRect()

import { GAME_WIDTH, GAME_HEIGHT, GAME_FPS, PIPE_GAP } from "../config/config";
import { BackGround } from "../game-object/background";
import { Base } from "../game-object/base";
import { Bird } from "../game-object/bird";
import { GameOver } from "../game-object/gameover";
import { PipeDown } from "../game-object/pipeDown";
import { PipeUp } from "../game-object/pipeUp";
import { Scores } from "../game-object/Scores";
import { StartGame } from "../game-object/startGame";

export class Game {
  context!: CanvasRenderingContext2D; // tạo ra context để vẽ ( CanvasRenderingContext2D ~ là 1 đối tượng chuyên để vẽ)
  startGame!: StartGame;
  bird!: Bird;
  background!: BackGround;
  base!: Base;
  pipeUp!: PipeUp;
  pipeDown!: PipeDown;
  gameOver!: GameOver;
  scores!: Scores;
  isCollision!: boolean;
  countFrame: number = 0;
  isPass!: boolean;
  scoreCount: number = 0;
  firstIndex!: number;
  secondIndex!: number;

  constructor(id: string) {
    const canvas = document.getElementById(id) as HTMLCanvasElement; //ép kiểu về dạng thẻ standard Canvas element
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D; // .getContect('2d') ~ vẽ theo kiểu 2d. vào ép kiểu để gán cho context
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    canvas.addEventListener("click", () => {
      this.bird.isStart = true;
      if (!this.isCollision) {
        this.bird.flap();
      }
    });
  }

  #checkPassPipe(): void {
    if(this.pipeUp.position.x + this.pipeUp.image.width < this.bird.position.x){
        if(!this.isPass){
          this.isPass = true;
          this.scoreCount += 1;
          this.scores.audio.play();
          console.log(this.scoreCount);
        }
    }else {
      this.isPass = false;
    }
  }
  // this.bird.position.y > this.pipeUp.position.y + this.pipeUp.image.height && 
  //     this.bird.position.y + this.bird.image.height < this.pipeUp.position.y + this.pipeUp.image.height + PIPE_GAP &&
  //     this.bird.position.x > this.pipeUp.position.x + this.pipeUp.image.width 
  
  #checkCollision(): void {
    if(this.bird.position.x + this.bird.image.width >= this.pipeUp.position.x &&
      this.bird.position.y <= this.pipeUp.position.y + this.pipeUp.image.height &&
      this.bird.position.x <= this.pipeUp.position.x + this.pipeUp.image.width ||
      this.bird.position.y + this.bird.image.height >= this.pipeUp.position.y + this.pipeUp.image.height + PIPE_GAP &&
      this.bird.position.x + this.bird.image.width >= this.pipeUp.position.x &&
      this.bird.position.x <= this.pipeUp.position.x + this.pipeUp.image.width ||
      this.bird.position.y + this.bird.image.height >= this.base.position.y
      ){
      this.isCollision = true;
      // this.pipeDown.audio.play();
      // this.isCollision = false;
      // console.log("Collision detected");
    }
  }

  #updateFrame(): void {
    this.#checkCollision();
    this.countFrame++;
    this.#checkPassPipe();
    // mỗi 1s sẽ vẽ đi vẽ lại 40 lần (40 lần vẽ/1s)
    //trc khi 1 lần mới thì cần phải clear hết tất cả những cái cũ của lần trc đó đi
    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); // Bắt đầu clear từ toạ độ 0, 0 đến kịch GAME-WIDTH, GAME-HEIGHT
    this.background.update();
    this.pipeUp.update();
    this.pipeDown.update();
    this.base.update();
    this.startGame.update();
    this.bird.update();
    this.scores.update();
    this.gameOver.update();

    setTimeout(() => this.#updateFrame(), 1000 / GAME_FPS); // this. ~ Game. (this là class Game)
  }

  setStartGame(startGame: StartGame): void {
    this.startGame = startGame;
  }
  setBird(bird: Bird): void {
    this.bird = bird;
  }

  setBackGround(background: BackGround): void {
    this.background = background;
  }
  setBase(base: Base): void {
    this.base = base;
  }
  setPipeUp(pipeUp: PipeUp): void {
    this.pipeUp = pipeUp;
  }
  setPipeDown(pipeDown: PipeDown): void {
    this.pipeDown = pipeDown;
  }
  setGameOver(gameOver: GameOver): void {
    this.gameOver = gameOver;
  }
  setScores(scores: Scores): void {
    this.scores = scores;
  }
  start(): void {
    this.#updateFrame();
  }
}
