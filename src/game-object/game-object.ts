import { Game } from "../game/game";

export interface Position { // khi 1 object mà kh có method nào cả thì nên để là interface
    x: number;
    y: number;
}

// tạo ra 1 OBject Contructor ~ template
export abstract class GameObject {
    position!: Position;
    game: Game;
    image: HTMLImageElement; // 1 đối tượng image(1 class)
    audio: HTMLAudioElement;
    constructor(game: Game, imagePath: string) {
        this.game = game;
        this.image = new Image();
        this.image.src = imagePath;
        this.audio = new Audio();
    }

    abstract update(): void; 
}

