import { GAME_HEIGHT, GAME_WIDTH } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class GameOver extends GameObject {
    constructor(game: Game, imagePath: string){
        super(game, imagePath);
        this.position = {
            x: GAME_WIDTH/2 - this.image.width/2,
            y: GAME_HEIGHT/2 - this.image.height/2
        };
    }

    update(): void {
        if(this.game.isCollision){
            this.game.context.drawImage(this.image, this.position.x, this.position.y);
        }
    }

}