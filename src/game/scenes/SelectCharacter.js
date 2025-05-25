import { Scene } from "phaser";

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
        this.load.spritesheet('pinkmonster_swordAttack', 'assets/swordAttacks/Attack2.png', {frameWidth:252/6, frameHeight:42})
    }

    gameState = {};
    selectedOptionIndex = 0;
    optionButtons = [];

    create() {
        const { width, height } = this.scale;

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
        const pinkMonster = this.physics.add.sprite(190, 470, 'pinkmonster').setScale(3).setInteractive();
        const whiteMonster = this.physics.add.sprite(590, 470, 'whitemonster').setScale(3).setInteractive();
        const blueMonster = this.physics.add.sprite(990, 470, 'bluemonster').setScale(3).setInteractive();

        //animations
        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('pinkmonster_swordAttack', {
                start: 0, end: 5}),
                framerate: 5,
                repeat: -1
        })
        // Platform for them
        const platforms = this.physics.add.staticGroup();
        platforms.create(600, 530, 'grass_foreground').setDisplaySize(width, 30).setVisible(false).refreshBody();

        [pinkMonster, whiteMonster, blueMonster].forEach(mon => {
            mon.setCollideWorldBounds(true);
            this.physics.add.collider(mon, platforms);
        });

        // Interactions
        pinkMonster.on('pointerdown', () => {
            this.createCharacterBox(400, 150, 360, 180, 'The Titan Knight:\nStrong and brave knight.\nClose-range melee attacks.', 'pinkmonster');
            this.anims.play('')
        });

        whiteMonster.on('pointerdown', () => {
            this.createCharacterBox(400, 250, 360, 180, 'White Monster:\nWise mage.\nRanged magical attacks.', 'whitemonster');
        });

        blueMonster.on('pointerdown', () => {
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

        // Box background
        this.textBox = this.add.graphics();
        this.textBox.fillStyle(0x000000, 0.7);
        this.textBox.fillRoundedRect(x, y, width, height, 10);
        this.textBox.lineStyle(2, 0xffffff);
        this.textBox.strokeRoundedRect(x, y, width, height, 10);

        // Text
        this.textText = this.add.text(x + 10, y + 10, text, {
            fontFamily: 'Arial',
            fontSize: '16px',
            color: '#ffffff',
            wordWrap: { width: width - 20 }
        });

        // Buttons
        const viewBtn = this.add.text(x + 10, y + 90, '▶ View Special', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setInteractive();

        const chooseBtn = this.add.text(x + 10, y + 130, '▶ Choose Character', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setInteractive();

        viewBtn.on('pointerdown', () => {
            alert(`${characterKey.toUpperCase()} special: Coming soon!`);
        });

        chooseBtn.on('pointerdown', () => {
            this.registry.set('selectedCharacter', characterKey);
            this.scene.start('Cinematic');
        });

        this.optionButtons = [viewBtn, chooseBtn];
        this.selectedOptionIndex = 0;
        this.updateButtonHighlight();
    }
}
