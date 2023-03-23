import { GAME_GRAVITY, FLAP_VELOCITY } from "../config/config";
import { Game } from "../game/game";
import { GameObject } from "./game-object";

// TẠO THỰC THỂ
export class Bird extends GameObject{
    velocity: number = 1; // khởi tạo(declare) vận tốc ban đầu = 1 cho con chim
    images: HTMLImageElement[] = []; // tạo ra 1 mảng để chưa 3 ảnh vỗ cánh
    flapIndexImage: number = 0; // vị trí ảnh chim trong mảng images
    isStart: boolean = false;
    constructor(game: Game, imageUp: string, audioPath: string,imageMid: string, imageDown: string) {
        super(game, imageUp);
        const imageMidElement = new Image();
        imageMidElement.src = imageMid;
        const imageDownElement = new Image();
        imageDownElement.src = imageDown;
        this.audio.src = audioPath;
        this.images = [this.image, imageMidElement, imageDownElement];
        this.position = {
            x: 50,
            y: 219
        }
    }
    // tạo ra hàm để update từng đối tượng (chim, ống cống, cây, cảnh,...)
    update(): void { 
        if(this.isStart){
            this.velocity += GAME_GRAVITY;
            this.position.y += this.velocity;
        }
        
        if(this.position.y >= this.game.base.position.y - this.game.bird.image.height) {
            this.position.y = this.game.base.position.y - this.game.bird.image.height;
        } 
        if(this.game.countFrame % 13 ===0){ // trong 3s mới + flapIndexImage lên 1 đơn vị ( vì FPS = 40. mà 40/ 13 = 3.)
            this.flapIndexImage++;
            if(this.flapIndexImage === 3){
                this.flapIndexImage = 0;
            }
        }
        let flyingBird = this.images[this.flapIndexImage];
        if(this.game.isCollision || !this.isStart){
            flyingBird = this.images[2];
        }
        this.game.context.drawImage(flyingBird, this.position.x, this.position.y); //.drawImage() ~ vẽ ra đối tượng .image tại vị trí .x, .y
    }
    flap(): void {
        this.velocity -= FLAP_VELOCITY;
        this.audio.play();
    }
    
}