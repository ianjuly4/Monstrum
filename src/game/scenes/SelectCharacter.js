import { Scene } from "phaser";

export class SelectCharacter extends Scene{
    constructor ()
    {
        super('SelectCharacter');
    }
    preload(){
        //backgrounds
        this.load.image('sky', 'assets/backgrounds/nature_5/1.png')
        this.load.image('clouds', 'assets/backgrounds/nature_5/2.png')
        this.load.image('hills', 'assets/backgrounds/nature_5/3.png' )
        this.load.image('grass_foreground', 'assets/backgrounds/nature_5/4.png')

        //Pink_Monster
        this.load.image('pinkmonster', 'assets/heros/1 Pink_Monster/Pink_Monster.png')

        //White Monster
        this.load.image('whitemonster', 'assets/heros/2 Owlet_Monster/Owlet_Monster.png')

        //Blue Monster
        this.load.image('bluemonster', 'assets/heros/3 Dude_Monster/Dude_Monster.png')
    }

    gameState = {}

    create ()
    {
        
        const {width, height} = this.scale

        this.add.image(0,0,'sky')
            .setOrigin(0,0)
            .setDepth(-3)
            .setDisplaySize(width, height)

        this.bgClouds = this.add.tileSprite(0,0,width, height,'clouds')
            .setOrigin(0,0)
            .setDepth(-2)
            .setScale(2)

        this.add.image(0,0, 'hills')
            .setOrigin(0,0)
            .setDepth(-1)
            .setDisplaySize(width, height)

        const grass = this.add.image(0,0,'grass_foreground' )
            .setOrigin(0,0)
            .setDepth(0)
            .setDisplaySize(width, height)
        

        this.add.text(612, 80, 'Please Select A Character', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const mainMenu = this.add.text(60, 20, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive()

        mainMenu.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });

        const pinkMonster = this.physics.add.sprite(190, 470, 'pinkmonster')
            .setScale(3)
            .setInteractive()
        const whiteMonster = this.physics.add.sprite(590, 470, 'whitemonster')
            .setScale(3)
            .setInteractive()
        const blueMonster = this.physics.add.sprite(990, 470, 'bluemonster')
            .setScale(3)
            .setInteractive()
        pinkMonster.setCollideWorldBounds(true)
        whiteMonster.setCollideWorldBounds(true)

        const platforms = this.physics.add.staticGroup();
        platforms.create(600, 530, 'grass_foreground')
            .setDisplaySize(width, 30)
            .setVisible(false)
            .refreshBody()


       
        this.physics.add.collider(pinkMonster, platforms)
        this.physics.add.collider(whiteMonster, platforms)
        this.physics.add.collider(blueMonster, platforms)
    }

    update(){
        this.bgClouds.tilePositionX += 0.2
    }
}