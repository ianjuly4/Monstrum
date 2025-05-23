import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    preload(){
        //backgrounds
        this.load.image('clouds', 'assets/backgrounds/nature_3/1.png');
        this.load.image('mountain', 'assets/backgrounds/nature_3/2.png');
        this.load.image('checkered', 'assets/backgrounds/nature_3/3.png');
        this.load.image('trees_and_grass_foreground', 'assets/backgrounds/nature_3/4.png')
    }

    create ()
    {
       const {width, height} = this.scale

        this.bgClouds = this.add.tileSprite(0,0,width, height,'clouds')
            .setOrigin(0,0)
            .setDepth(-2)
           

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

        newGameText.on('pointerdown', ()=>{
            this.scene.start('SelectCharacter')
        })

        this.add.text(512, 340, "Load Game", {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(512, 420, 'Battlegrounds', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
    update(){
        this.bgClouds.tilePositionX += 0.2
    }
    
   
}
