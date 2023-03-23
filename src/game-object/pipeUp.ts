import { GAME_WIDTH } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class PipeUp extends GameObject {
  constructor(game: Game, imagePath: string) {
    super(game, imagePath);
    this.position = {
      x: GAME_WIDTH,
      y: -150,
    };
  }
  
  static rdPosition: number = 0;
  update(): void {
    if(!this.game.isCollision && this.game.bird.isStart){
      this.position.x -= 4;
    }
    if(this.position.x === -52){
      this.position.x = GAME_WIDTH; 
      PipeUp.rdPosition = -(Math.floor(Math.random() * (this.image.height-10))+10);
      this.position.y = PipeUp.rdPosition;
    }
    this.game.context.drawImage(this.image, this.position.x, this.position.y);

  }
  
}
