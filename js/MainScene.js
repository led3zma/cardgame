
export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    preload(){
        this.load.image('card','assets/card.png');
    }
}
