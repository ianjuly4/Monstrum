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
        const mainMenu = this.add.text(60, 20, ' Back To Main Menu', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8
        }).setOrigin(0.5).setInteractive();

        mainMenu.once('pointerdown', () => {this.scene.start('MainMenu')});

        //SelectCharacter Button
        const selectCharacter = this.add.text(220, 20, ' Back To Select Character Screen', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8
        }).setOrigin(0.5).setInteractive();

        selectCharacter.once('pointerdown', () => {this.scene.start('SelectCharacter')});

        this.add.text(552, 140, 'Monstrum: Battlegrounds', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const newBattlegrounds = this.add.text(512, 260, 'New Round', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        const loadBattlegrounds = this.add.text(512, 340, "Load Round", {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive()

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