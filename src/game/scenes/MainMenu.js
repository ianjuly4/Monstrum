import { Scene } from 'phaser';
import { preload } from '../utilities/preload';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    preload(){
        preload.call(this)
    }

    create ()
    {
       const {width, height} = this.scale

        this.bgClouds = this.add.tileSprite(0,0,width, height,'clouds')
            .setOrigin(0,0)
            .setDepth(-2)
            
        this.add.image(0,0, 'sky')
            .setOrigin(0,0)
            .setDepth(-3)
            .setDisplaySize(width, height)   

        this.add.image(0,0, 'mountain')
            .setOrigin(0,0)
            .setDepth(-1)
            .setDisplaySize(width, height)

        this.add.image(0,0,'trees_and_grass_foreground' )
            .setOrigin(0,0)
            .setDepth(0)
            .setDisplaySize(width, height)
        

        this.add.text(512, 160, 'Monstrum: The Cursed Hero', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        
        const newGameText = this.add.text(512, 260, 'New Game', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

  
        newGameText.on('pointerover', () => {
            newGameText.setStyle({ fill: 'brown' }); 
        });
        
        newGameText.on('pointerout', () => {
            newGameText.setStyle({ fill: '#ffffff' }); 
        });
        
        newGameText.on('pointerdown', () => {
            this.scene.start('SelectCharacter',{mode: 'story'});
        });

        const loadGame = this.add.text(512, 340, "Load Game", {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive()

        const battlegrounds = this.add.text(512, 420, 'Battlegrounds', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        battlegrounds.on('pointerover', () => {
            battlegrounds.setStyle({ fill: 'brown' }); 
        });
        
        battlegrounds.on('pointerout', () => {
            battlegrounds.setStyle({ fill: '#ffffff' }); 
        });
        
        battlegrounds.on('pointerdown', () => {
            this.scene.start('SelectCharacter',{mode: 'battlegrounds'});
        });
        
        
    }
    update(){
        this.bgClouds.tilePositionX += 0.2
    }
    
   
}
