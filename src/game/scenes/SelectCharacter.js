//SelectCharacter.js
import { Scene } from "phaser";
import { setMonsterAnimation } from "../utilities/setMonsterAnimation";
import { pinkMonsterAnimations } from "../utilities/pinkMonsterAnimations";
import { startIdleTimer } from "../utilities/startIdleTimer";
import {pinkMonsterSpecial} from "../utilities/pinkMonsterSpecial"
import { createCharacterBox } from "../utilities/createCharacterBox";


export class SelectCharacter extends Scene {
    constructor() {
        super('SelectCharacter');
    }

    preload() {
        // Backgrounds
        this.load.image('sky', 'assets/backgrounds/nature_5/1.png');
        this.load.image('clouds', 'assets/backgrounds/nature_5/2.png');
        this.load.image('hills', 'assets/backgrounds/nature_5/3.png');
        this.load.image('grass_foreground', 'assets/backgrounds/nature_5/4.png');

        // Monsters
        this.load.image('pinkmonster', 'assets/heros/1 Pink_Monster/Pink_Monster.png');
        this.load.image('whitemonster', 'assets/heros/2 Owlet_Monster/Owlet_Monster.png');
        this.load.image('bluemonster', 'assets/heros/3 Dude_Monster/Dude_Monster.png');

        //pink monster attacks
        this.load.spritesheet('pinkmonster_swordAttack2', 'assets/swordAttacks/Attack2.png', {frameWidth:42, frameHeight:42})
        this.load.spritesheet('pinkmonster_swordAttack1', 'assets/swordAttacks/Attack1.png', {frameWidth:42, frameHeight: 42})
        this.load.spritesheet('pinkmonster_meleAttack2', 'assets/heros/1 Pink_Monster/Pink_Monster_Attack2_6.png', {frameWidth: 32, frameHeight: 32})
        this.load.spritesheet('pinkmonster_meleAttack1', 'assets/heros/1 Pink_Monster/Pink_Monster_Attack1_4.png',{frameWidth: 32, frameHeight: 32})
        //spritesheets
        this.load.spritesheet('pinkmonster_idle', 'assets/heros/1 Pink_Monster/Pink_Monster_Idle_4.png',{frameWidth:128/4, frameHeight:32})
        //other Effects
        this.load.image('lightningArrow', 'assets/effects/Explosion_7/1/Explosion_1.png')
        this.load.image('lightningArrow2', 'assets/effects/Explosion_7/1/Explosion_2.png')
        this.load.image('lightningImpact', 'assets/effects/Explosion_7/1/Explosion_3.png')
        this.load.image('lightningImpact2', 'assets/effects/Explosion_7/1/Explosion_4.png')
        this.load.image('lightningImpact3', 'assets/effects/Explosion_7/1/Explosion_5.png')

    
    }

    gameState = {};
    selectedOptionIndex = 0;
    optionButtons = [];
    selectedMonster = null

    create() {
        const { width, height } = this.scale;
        pinkMonsterAnimations(this)
        startIdleTimer(this)
       

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
            createCharacterBox(this, 400, 100, 400, 250, 'White Monster:\nWise mage.\nRanged magical attacks.', 'whitemonster');
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
                this.clearCharacterBox();
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

    
        

    clearCharacterBox() {
    
        if (this.textBox) this.textBox.destroy();
        if (this.textText) this.textText.destroy();
        this.optionButtons.forEach(btn => btn.destroy());
        this.optionButtons = [];
        if (this.selectedMonster) {
            const key = Object.keys(this.gameState.monsters).find(k => this.gameState.monsters[k] === this.selectedMonster);
            
            // Reset pink monster only if selected
            if (key === 'pinkMonster') {
                if (this.selectedMonster.scaleX > 3 || this.selectedMonster.scaleY > 3) {
                    console.log(this.selectedMonster.x, this.selectedMonster.y)
                    this.selectedMonster.setPosition(190,515);
                    this.selectedMonster.setScale(3) 
                    }else{
                    this.selectedMonster.anims.stop();
                    this.selectedMonster.setTexture('pinkmonster');
                    this.selectedMonster.setPosition(190,515); 
                    }
               
            } else {
                this.selectedMonster.setTexture(key.toLowerCase());
            }
    
            this.selectedMonster = null;
        }
    }
    
    
    
}
