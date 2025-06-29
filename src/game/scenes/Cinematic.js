import { Scene } from "phaser";
import { preload } from "../utilities/preload";

export class Cinematic extends Scene{
    constructor(){
        super('Cinematic')
    }
    init(data) {
    this.selectedCharacter = data.selectedCharacter || this.registry.get('selectedCharacter');
    }

    preload(){
        preload.call(this)
    }
    create(){
        
    }
}