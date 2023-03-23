import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class BackGround extends GameObject {
    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x: 0, 
            y: 0
        }
    }
    update(): void {
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }

}