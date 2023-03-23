import { GAME_HEIGHT, GAME_WIDTH } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class StartGame extends GameObject {
    constructor(game: Game, imagePath: string){
        super(game, imagePath);
        this.position = {
            x: GAME_WIDTH/2 - this.image.width/2,
            y: 50
        }
    }
    update(): void {
        if(this.game.bird.isStart){
            this.position.x -=4;
        }
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }

}