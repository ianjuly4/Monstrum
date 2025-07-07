//Battlegrounds.js
import { Scene } from "phaser";
import { preload } from "../utilities/preload";

export class Battlegrounds extends Scene{
    constructor(){
        super('Battlegrounds')
    }
    init(data) {
    this.selectedCharacter = data.selectedCharacter || this.registry.get('selectedCharacter');
    }

    preload(){
        preload.call(this)
    }
    create(){
        const { width, height } = this.scale;

        //backgrounds
        this.add.image(0, 0, 'nature2_1').setOrigin(0).setDepth(-2).setDisplaySize(width, height);
        
        this.bgClouds = this.add.tileSprite(0,0,width, height,'nature2_2')
            .setOrigin(0,0)
            .setDepth(-1)
            .setScale(2)

        this.add.image(0, 0, 'nature2_3').setOrigin(0).setDepth(0).setDisplaySize(width, height);
        this.add.image(0, 0, 'nature2_4').setOrigin(0).setDepth(1).setDisplaySize(width, height);
        
       

        //MainMenu button
        const mainMenu = this.add.text(100, 20, ' Back To Main Menu', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8
        }).setOrigin(0.5).setInteractive();

        mainMenu.once('pointerdown', () => {this.scene.start('MainMenu')});

        this.add.text(552, 140, 'Monstrum: Battlegrounds', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Description Box
        const descBoxWidth = 500;
        const descBoxHeight = 150;
        const descX = 300;
        const descY = 180;

        const descBackground = this.add.graphics();
        descBackground.fillStyle(0x000000, 0.7);
        descBackground.fillRoundedRect(descX, descY, descBoxWidth, descBoxHeight, 10);
        descBackground.lineStyle(2, 0xffffff);
        descBackground.strokeRoundedRect(descX, descY, descBoxWidth, descBoxHeight, 10);

        const battlegroundsDescription = 
        "Step into a relentless arena where survival is the only victory. Face off against wave after wave of monstrous foes in a heart-pounding test of skill and endurance. Snatch powerful upgrades, restore your health in desperate moments, and unleash devastating abilities to turn the tide. Choose your champion, stand your ground, and fight for glory in the ultimate battleground. How long can you survive?";

        this.add.text(descX + 10, descY + 10, battlegroundsDescription, {
            fontFamily: 'Arial',
            fontSize: '16px',
            color: '#ffffff',
            wordWrap: { width: descBoxWidth - 20 },
            lineSpacing: 4
        });

        const newBattlegrounds = this.add.text(512, 380, 'New Round', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(1).setInteractive();

        const loadBattlegrounds = this.add.text(512, 440, "Load Round", {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(1).setInteractive()

        newBattlegrounds.on('pointerover', () => {
            newBattlegrounds.setStyle({ fill: 'brown' }); 
        });
        
        newBattlegrounds.on('pointerout', () => {
            newBattlegrounds.setStyle({ fill: '#ffffff' }); 
        });
        
        newBattlegrounds.on('pointerdown', () => {
            this.scene.start('SelectCharacter',{mode: 'battlegrounds'});
        });
         
    }
    update(){
        this.bgClouds.tilePositionX += 0.2
    }
}