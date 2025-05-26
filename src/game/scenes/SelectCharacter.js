import { Scene } from "phaser";
import { setMonsterAnimation } from "../utilities/setMonsterAnimation";
import { pinkMonsterAnimations } from "../utilities/pinkMonsterAnimations";
import { startIdleTimer } from "../utilities/startIdleTimer";
import {pinkMonsterSpecial} from "../utilities/pinkMonsterSpecial"

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

        //monster attacks
        this.load.spritesheet('pinkmonster_swordAttack2', 'assets/swordAttacks/Attack2.png', {frameWidth:42, frameHeight:42})
        this.load.spritesheet('pinkmonster_swordAttack1', 'assets/swordAttacks/Attack1.png', {frameWidth:42, frameHeight: 42})
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
            pinkMonster: this.physics.add.sprite(190, 470, 'pinkmonster').setScale(3).setInteractive(),
            whiteMonster: this.physics.add.sprite(590, 470, 'whitemonster').setScale(3).setInteractive(),
            blueMonster: this.physics.add.sprite(990, 470, 'bluemonster').setScale(3).setInteractive()
        };
        pinkMonsterSpecial(this)
        this.gameState.special = 100
        this.gameState.isUsingSpecial = false

        // Platform 
        const platforms = this.physics.add.staticGroup()
        const platform = platforms.create(600, 530, 'grass_foreground')
            .setDisplaySize(width, 30)
            .setVisible(false)

        platform.refreshBody()
        //collider
        Object.values(this.gameState.monsters).forEach(mon => {
            mon.setCollideWorldBounds(true);
            this.physics.add.collider(mon, platforms);
        });
        
        // Interactions
        this.gameState.monsters.pinkMonster.on('pointerdown', () => {
            this.createCharacterBox(400, 150, 400, 250, 'The Titan Knight:\nStrong and brave knight.\nClose-range melee attacks.', 'pinkmonster');
           
        });

        this.gameState.monsters.whiteMonster.on('pointerdown', () => {
            this.createCharacterBox(400, 250, 360, 180, 'White Monster:\nWise mage.\nRanged magical attacks.', 'whitemonster');
        });

        this.gameState.monsters.blueMonster.on('pointerdown', () => {
            this.createCharacterBox(400, 250, 360, 180, 'Blue Monster:\nAgile and fast fighter.\nHigh-speed combos.', 'bluemonster');
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

    createCharacterBox(x, y, width, height, text, characterKey) {
        // Remove old UI
        if (this.textBox) this.textBox.destroy();
        if (this.textText) this.textText.destroy();
        this.optionButtons.forEach(btn => btn.destroy());
        this.optionButtons = [];
        this.selectedMonster = this.gameState.monsters[characterKey];


        // Box background
        this.textBox = this.add.graphics();
        this.textBox.fillStyle(0x000000, 0.7);
        this.textBox.fillRoundedRect(x, y, width, height, 10);
        this.textBox.lineStyle(2, 0xffffff);
        this.textBox.strokeRoundedRect(x, y, width, height, 10);

        // Text
        this.textText = this.add.text(x + 10, y + 5, text, {
            fontFamily: 'Arial',
            fontSize: '16px',
            color: '#ffffff',
            wordWrap: { width: width - 20 }
        });

        // Buttons
        const attack1Btn = this.add.text(x + 10, y + 70, 'Sword Attack 1', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setInteractive();

        const attack2Btn = this.add.text(x + 10, y + 100, 'Sword Attack 2', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setInteractive();

        const specialBtn = this.add.text(x + 10, y + 130, 'Special', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setInteractive();

        const chooseBtn = this.add.text(x + 10, y + 160, ' Select This Monster?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setInteractive();

        attack1Btn.on('pointerdown', () => {
            const monster = this.gameState.monsters.pinkMonster;
        
            if (monster.scale > 3) {  // properly checking scale
                monster.setScale(3);
                monster.setPosition(190, 470);
            }
        
            setMonsterAnimation(this, monster, 'pinkmonster_swordAttack1', 'swordAttack1');
        });
        
        attack2Btn.on('pointerdown', ()=>{
            setMonsterAnimation(this, this.gameState.monsters.pinkMonster, 'pinkmonster_swordAttack2', 'swordAttack2')
        })

        specialBtn.on('pointerdown', () => {
            pinkMonsterSpecial(this, true)
        });


        chooseBtn.on('pointerdown', () => {
            this.registry.set('selectedCharacter', characterKey);
            this.scene.start('Cinematic');
        });

        this.optionButtons = [attack1Btn,attack2Btn, specialBtn, chooseBtn];
        this.selectedOptionIndex = 0;
        this.updateButtonHighlight();
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
                this.selectedMonster.setScale(3);
                this.selectedMonster.setTexture('pinkmonster_idle', 0);
                this.selectedMonster.setPosition(190, 470);
                this.selectedMonster.anims.play('pinkmonster_idle', true);
            } else {
                // Fallback for other monsters
                this.selectedMonster.setTexture(key.toLowerCase());
            }
    
            this.selectedMonster = null;
        }
    }
    
    
    
}
