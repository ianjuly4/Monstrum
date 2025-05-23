import { Scene } from "phaser";

export class Cinematic extends Scene{
    constructor(){
        super('Cinematic')
    }
    preload(){

    }
    create(){
        this.add.text(612, 80, 'Please Select A Character', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
    }
}