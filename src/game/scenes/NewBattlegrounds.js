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
import { pinkMonsterIronFist } from "../pinkMonster/pinkMonsterIronFist";
import { pinkMonsterPiercingStab } from "../pinkMonster/pinkMonsterPiercingStab";
import { setMonsterAnimation } from "../utilities/setMonsterAnimation";
import { pinkMonsterCrescentSlash } from "../pinkMonster/pinkMonsterCrescentSlash";
import { waveManager } from "../utilities/enemies/waveManager";
import { spawnEnemiesForWave } from "../utilities/enemies/spawnEnemiesForWave";
import {updateMonsterBars} from "../utilities/updateMonsterBars"


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
    gameState = {}

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

        this.add.image(0, -150, 'nature2_3').setOrigin(0).setDepth(0).setDisplaySize(width, height)
        this.add.image(0, -550, 'nature2_4')
        .setOrigin(0, 0)
        .setDepth(1)
        .setDisplaySize(width, 1150)

        // Platform 
        const platforms = this.physics.add.staticGroup()
        const platform = platforms.create(600, 620, 'grass_foreground')
            .setDisplaySize(width, 30)
            .setVisible(false)

        const topPlatform = platforms.create(600, 230, 'grass_foreground')
            .setDisplaySize(width, 30)
            .setVisible(false)

        topPlatform.refreshBody()
        platform.refreshBody()

        this.gameState.isAttacking = false;

        this.gameState.monsters = {}
        


        if(this.selectedCharacter === 'pinkMonster'){
            const pinkMonster = this.physics.add.sprite(32, 600, 'pinkmonster')
                .setScale(2)
                .setOrigin(0.5, 1)
                .setDepth(2)
                .setInteractive();

            pinkMonster.setCollideWorldBounds(true);
            pinkMonster.body.setAllowGravity(false);
            this.physics.add.collider(pinkMonster, platforms);
            this.gameState.monsters.pinkMonster = pinkMonster;
            pinkMonster.state = {
                isAttacking: false,
                isMoving: false,
                hp: 100,
                maxHp: 100,
                special: 100,
                maxSpecial: 100
            };
            const healthBar = this.add.graphics().setDepth(3);
            pinkMonster.state.healthBar = healthBar;

            // Special meter
            const specialBar = this.add.graphics().setDepth(3);
            pinkMonster.state.specialBar = specialBar;

            // Initial draw
            updateMonsterBars(this, pinkMonster);

        }

        this.cursors = this.input.keyboard.createCursorKeys()
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

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

        this.gameState.wave = {
        current: 1,
        activeEnemies: [],
        inProgress: false,
        };
        waveManager.startWave(this)
        
    }
    update() {
    this.bgClouds.tilePositionX += 0.2;

    battleGroundsMovement(this);

    if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
        if (this.gameState.monsters.pinkMonster) {
        pinkMonsterIronFist(this, false, true);
        }
    }

    if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
        if (this.gameState.monsters.pinkMonster) {
        pinkMonsterPiercingStab(this, false, true);
        }
    }

    if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
        if (this.gameState.monsters.pinkMonster) {
        pinkMonsterCrescentSlash(this, false, true);
        }
    }

    // ✅ Let waveManager handle when to start new waves
    waveManager.checkCompletion(this);
    }

}