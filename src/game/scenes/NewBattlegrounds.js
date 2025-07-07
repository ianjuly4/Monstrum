//NewBattlegrounds.js
import { Scene } from "phaser";
import { preload } from "../utilities/preload";
import { pinkMonsterAnimations } from "../pinkMonster/pinkMonsterAnimations";
import { whiteMonsterAnimations } from "../whiteMonster/whiteMonsterAnimations";
import { blueMonsterAnimations } from "../blueMonster/blueMonsterAnimations";
import { startIdleTimer } from "../utilities/startIdleTimer";
import { magicAnimations } from "../utilities/magicAnimations";
import { effectsAnimations } from "../utilities/effectsAnimations";
import { crossBowAnimations } from "../utilities/crossBowAnimations";
import { battleGroundsMovement } from "../utilities/battleGroundsMovement";

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
        pinkMonsterAnimations(this)
        whiteMonsterAnimations(this)
        blueMonsterAnimations(this)
        
        
        
        
        //backgrounds
        this.add.image(0, 0, 'nature2_1').setOrigin(0).setDepth(-2).setDisplaySize(width, height);
        
        this.bgClouds = this.add.tileSprite(0,0,width, height,'nature2_2')
            .setOrigin(0,0)
            .setDepth(-1)
            .setScale(2)

        this.add.image(0, -100, 'nature2_3').setOrigin(0).setDepth(0).setDisplaySize(width, height)
        this.add.image(0, -300, 'nature2_4')
        .setOrigin(0, 0)
        .setDepth(1)
        .setDisplaySize(width, 900)

        // Platform 
        const platforms = this.physics.add.staticGroup()
        const platform = platforms.create(600, 600, 'grass_foreground')
            .setDisplaySize(width, 30)
            .setVisible(false)

        platform.refreshBody()

        this.cursors = this.input.keyboard.createCursorKeys()

        if(this.selectedCharacter == 'pinkMonster'){
            this.pinkMonster = this.physics.add.sprite(140, 500, 'pinkmonster')
                .setScale(1)
                .setOrigin(0.5, 1)
                .setDepth(2)
                .setInteractive();

            this.pinkMonster.setCollideWorldBounds(true);
            this.physics.add.collider(this.pinkMonster, platforms);

        }
       

        
         //MainMenu button
        const mainMenu = this.add.text(100, 20, ' Back To Main Menu', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8
        }).setOrigin(0.5).setInteractive();

        mainMenu.once('pointerdown', () => {this.scene.start('MainMenu')});

        //MainMenu button
        const selectedCharacter = this.add.text(130, 60, ' Back To Select Character', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8
        }).setOrigin(0.5).setInteractive();

        selectedCharacter.once('pointerdown', () => {this.scene.start('SelectCharacter')});
       
        
    }
    update(){
        this.bgClouds.tilePositionX += 0.2

        if(this.pinkMonster){
            battleGroundsMovement(this, this.pinkMonster)
        }
    }
}