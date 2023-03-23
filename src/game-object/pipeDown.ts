import { GAME_WIDTH, PIPE_GAP } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";
import { PipeUp } from "./pipeUp";


export class PipeDown extends GameObject {
    pipeDowns: HTMLImageElement[] = [];
    // static imagePipeDown = new Image();
  constructor(game: Game, imagePath: string, audioPath: string) {
    super(game, imagePath);
    this.position = {
      x: GAME_WIDTH,
      y: -150,
    };
    this.pipeDowns = [this.image];
    this.audio.src = audioPath;
  }
  update(): void {
    if(!this.game.isCollision && this.game.bird.isStart){
        this.position.x -= 4;
    }
    
    if(this.position.x === -52){ 
        this.position.x = GAME_WIDTH; 
        this.position.y =  PipeUp.rdPosition;
    }
    
    this.game.context.drawImage(this.image, this.position.x, this.position.y + PIPE_GAP + this.image.height);

    // for(let i=0; i< this.pipeDowns.length; i++){
    //     this.game.context.drawImage(this.image, this.positon.x, this.positon.y + PIPE_GAP + this.image.height);
    //     if(!this.game.isCollision){
    //         this.positon.x -= 4;
    //     }
    //     console.log(i)
    //     if(this.positon.x === 125){
    //         this.pipeDowns.push(this.image); 
    //         this.positon.x = GAME_WIDTH; 
    //         this.positon.y =  PipeUp.rdPosition;
    //     }
    // }
  }
}
