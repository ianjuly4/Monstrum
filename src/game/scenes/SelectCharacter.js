//SelectCharacter.js
import { Scene } from "phaser";
import { setMonsterAnimation } from "../utilities/setMonsterAnimation";
import { pinkMonsterAnimations } from "../utilities/pinkMonsterAnimations";
import { startIdleTimer } from "../utilities/startIdleTimer";
import {pinkMonsterSpecial} from "../utilities/pinkMonsterSpecial"
import { createCharacterBox } from "../utilities/createCharacterBox";
import { preload } from "../utilities/preload";
import { whiteMonsterAnimations } from "../utilities/whiteMonsterAnimations";
import { magicAnimations } from "../utilities/magicAnimations";
import { clearCharacterBox } from "../utilities/clearCharacterBox";


export class SelectCharacter extends Scene {
    constructor() {
        super('SelectCharacter');
    }

    preload(){
        preload.call(this)
    }

    gameState = {};
    selectedOptionIndex = 0;
    optionButtons = [];
    selectedMonster = null

    create() {
        const { width, height } = this.scale;
        pinkMonsterAnimations(this)
        whiteMonsterAnimations(this)
        startIdleTimer(this)
        magicAnimations(this)
        clearCharacterBox(this)
       

        // Background layers
        this.add.image(0, 0, 'sky').setOrigin(0).setDepth(-3).setDisplaySize(width, height);
        this.bgClouds = this.add.tileSprite(0, 0, width, height, 'clouds').setOrigin(0).setDepth(-2).setScale(2);
        this.add.image(0, 0, 'hills').setOrigin(0).setDepth(-1).setDisplaySize(width, height);
        this.add.image(0, 0, 'grass_foreground').setOrigin(0).setDepth(0).setDisplaySize(width, height);

        // Title
        this.add.text(612, 80, 'Please Select A Character', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8, align: 'center'
        }).setOrigin(0.5);

        // Main menu button
        const mainMenu = this.add.text(60, 20, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8
        }).setOrigin(0.5).setInteractive();

        mainMenu.once('pointerdown', () => this.scene.start('MainMenu'));

        // Monsters
        this.gameState.monsters = {
            pinkMonster: this.add.sprite(190, 515, 'pinkmonster').setScale(3).setOrigin(0.5, 1).setInteractive(),
            whiteMonster: this.add.sprite(590, 515, 'whitemonster').setScale(3).setOrigin(0.5, 1).setInteractive(),
            blueMonster: this.add.sprite(990, 515, 'bluemonster').setScale(3).setOrigin(0.5, 1).setInteractive()
        };
        pinkMonsterSpecial(this)
        this.gameState.special = 100
        this.gameState.debugMode = true

        // Platform 
        const platforms = this.physics.add.staticGroup()
        const platform = platforms.create(600, 530, 'grass_foreground')
            .setDisplaySize(width, 30)
            .setVisible(false)

        platform.refreshBody()
        //collider
        Object.values(this.gameState.monsters).forEach(mon => {
            //mon.setCollideWorldBounds(true);
            //this.physics.add.collider(mon, platforms);
        });
        
        // Interactions
        this.gameState.monsters.pinkMonster.on('pointerdown', () => {
            createCharacterBox(this, 400, 100, 400, 300, 'The Titan Knight: A strong, brave, and chivalrous warrior who has mastered the way of the sword. Specializes in powerful close-range sword and melee attacks. Cursed with the ability to transform into a Titan.', 'pinkMonster');
            console.log('Height:', this.selectedMonster.height); 

        });

        this.gameState.monsters.whiteMonster.on('pointerdown', () => {
            createCharacterBox(this, 400, 100, 400, 300, 'The Arcane Mage: A mysterious and ancient spellcaster who commands elemental forces with ease. Specializes in medium-range magical attacks. His curse allows him to create a massive energy blast.', 'whiteMonster');
        });

        this.gameState.monsters.blueMonster.on('pointerdown', () => {
            createCharacterBox(this, 400, 100, 400, 250, 'Blue Monster:\nAgile and fast fighter.\nHigh-speed combos.', 'bluemonster');
        });

        // Keyboard input
        this.input.keyboard.on('keydown-DOWN', () => {
            if (this.optionButtons.length === 0) return;
            this.selectedOptionIndex = (this.selectedOptionIndex + 1) % this.optionButtons.length;
            this.updateButtonHighlight();
        });

        this.input.keyboard.on('keydown-UP', () => {
            if (this.optionButtons.length === 0) return;
            this.selectedOptionIndex = (this.selectedOptionIndex - 1 + this.optionButtons.length) % this.optionButtons.length;
            this.updateButtonHighlight();
        });

        this.input.keyboard.on('keydown-ENTER', () => {
            if (this.optionButtons.length === 0) return;
            this.optionButtons[this.selectedOptionIndex].emit('pointerdown');
        });
        this.input.on('pointerdown', (pointer, currentlyOver) => {
            const clickedOnUI = currentlyOver.some(gameObject => this.optionButtons.includes(gameObject));
            const clickedOnMonster = Object.values(this.gameState.monsters).includes(currentlyOver[0]);
        
            if (!clickedOnUI && !clickedOnMonster) {
                clearCharacterBox(this)
            }
        });
        
    
    }

    update() {
        this.bgClouds.tilePositionX += 0.2;
       
    }

    updateButtonHighlight() {
        this.optionButtons.forEach((btn, i) => {
            btn.setBackgroundColor(i === this.selectedOptionIndex ? '#4444ff' : '#222222');
        });
    }

    
        

   
    
    
}
