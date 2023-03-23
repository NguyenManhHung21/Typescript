import { GAME_WIDTH } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

export class Scores extends GameObject {
    scores: HTMLImageElement[] = [];
    constructor(game: Game, imagePath: string, audioPath: string, img1: string, img2: string, img3: string,
        img4: string, img5: string, img6: string, img7: string, img8: string,
        img9: string,){
    super(game, imagePath);
    const img1Element = new Image();
    img1Element.src = img1;
    const img2Element = new Image();
    img2Element.src = img2;
    const img3Element = new Image();
    img3Element.src = img3;
    const img4Element = new Image();
    img4Element.src = img4;
    const img5Element = new Image();
    img5Element.src = img5;
    const img6Element = new Image();
    img6Element.src = img6;
    const img7Element = new Image();
    img7Element.src = img7;
    const img8Element = new Image();
    img8Element.src = img8;
    const img9Element = new Image();
    img9Element.src = img9;

    this.scores = [this.image, img1Element, 
        img2Element, img3Element, img4Element, 
        img5Element, img6Element, img7Element, 
        img8Element, img9Element];
    this.position = {
        x: GAME_WIDTH/2 - this.image.width/2,
        y: 100
    }
    this.audio.src = audioPath;
    }
    
    update(): void {
        if(this.game.scoreCount > 9){  

        }else {
            this.game.context.drawImage(this.scores[this.game.scoreCount], this.position.x, this.position.y);
            
            // console.log("diem = " + this.game.scoreCount);
            // this.audio.play();
        }         
    }
}