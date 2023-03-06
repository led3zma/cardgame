import CardGrid from "../js/CardGrid.js";
import cardtypes from "./cardtypes.js";

export default class Grid {
    constructor(data){
        let {scene,columns,rows} = data;
        this.xOffset = 120;
        this.yOffset = 280;
        this.yStart = scene.game.config.height / 2;
        this.columns = columns;
        this.rows = rows;
        this.scene = scene;
        this.cards = [];
        this.addCards(0);
    }

    addCards(startIndex){
        for (let i = startIndex; i < this.columns * this.rows; i++){
            const cardtype = cardtypes[Math.floor(Math.random() * cardtypes.length)];
            let card = new CardGrid ({
                scene: this.scene,
                x: this.xOffset + (this.scene.game.config.width / 2 - this.xOffset) * (i % this.columns),
                y: this.yStart - this.yOffset * Math.floor(i / this.columns),
                card: 'card',
                image: cardtype.image,
                value: cardtype.value,
                name: cardtype.name,
                type: cardtype.type,
            });
            card.depth = 0;
            this.cards.push(card);
        }
    }
}
