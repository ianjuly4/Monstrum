import { Scene } from "phaser";
import { preload } from "../utilities/preload";

export class NewBattlegrounds extends Scene{
    constructor(){
        super('NewBattlegrounds')
    }
    init(data) {
    this.selectedCharacter = data.selectedCharacter || this.registry.get('selectedCharacter');
    }

    preload(){
        preload.call(this)
    }
    create(){
        const { width, height } = this.scale;
        console.log(this.selectedCharacter)
        //backgrounds
        this.add.image(0, 0, 'nature2_1').setOrigin(0).setDepth(-2).setDisplaySize(width, height);
        
        this.bgClouds = this.add.tileSprite(0,0,width, height,'nature2_2')
            .setOrigin(0,0)
            .setDepth(-1)
            .setScale(2)

        this.add.image(0, 0, 'nature2_3').setOrigin(0).setDepth(0).setDisplaySize(width, height);
        this.add.image(0, 0, 'nature2_4').setOrigin(0).setDepth(1).setDisplaySize(width, height);
        
       

       

        
    }
    update(){
        this.bgClouds.tilePositionX += 0.2
    }
}