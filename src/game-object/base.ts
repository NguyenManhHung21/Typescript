import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class Base extends GameObject {
    constructor(game: Game, imagePath: string){
        super(game, imagePath);
        this.position = {
            x: 0,
            y: 400
        }
    }
    update(): void {
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }

}