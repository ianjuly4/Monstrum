
export function preload() {
    // Backgrounds
    this.load.image('sky', 'assets/backgrounds/nature_5/1.png');
    this.load.image('clouds', 'assets/backgrounds/nature_5/2.png');
    this.load.image('hills', 'assets/backgrounds/nature_5/3.png');
    this.load.image('grass_foreground', 'assets/backgrounds/nature_5/4.png');
    this.load.image('clouds', 'assets/backgrounds/nature_3/1.png');
    this.load.image('mountain', 'assets/backgrounds/nature_3/2.png');
    this.load.image('checkered', 'assets/backgrounds/nature_3/3.png');
    this.load.image('trees_and_grass_foreground', 'assets/backgrounds/nature_3/4.png')
    this.load.image('nature2_1', 'assets/backgrounds/nature_2/1.png')
    this.load.image('nature2_2', 'assets/backgrounds/nature_2/2.png')
    this.load.image('nature2_3', 'assets/backgrounds/nature_2/3.png')
    this.load.image('nature2_4', 'assets/backgrounds/nature_2/4.png')
    
    //battlegrounds backgrounds
    this.load.image('summer1', 'assets/backgrounds/battlegrounds/summer/1.png')
    this.load.image('summer2', 'assets/backgrounds/battlegrounds/summer/2.png')
    this.load.image('summer3', 'assets/backgrounds/battlegrounds/summer/3.png')
    this.load.image('summer4', 'assets/backgrounds/battlegrounds/summer/4.png')
    this.load.image('summer5', 'assets/backgrounds/battlegrounds/summer/5.png')

    // Monsters
    this.load.image('pinkmonster', 'assets/heros/1 Pink_Monster/Pink_Monster.png');
    this.load.image('whitemonster', 'assets/heros/2 Owlet_Monster/Owlet_Monster.png');
    this.load.image('bluemonster', 'assets/heros/3 Dude_Monster/Dude_Monster.png');


    //idles
    this.load.spritesheet('pinkmonster_idle', 'assets/heros/1 Pink_Monster/Pink_Monster_Idle_4.png',{frameWidth:128/4, frameHeight:32})
    this.load.spritesheet('whitemonster_idle', 'assets/heros/2 Owlet_Monster/Idle2.png', {frameWidth: 128/4, frameHeight: 32})
    this.load.spritesheet('bluemonster_idle', 'assets/heros/3 Dude_Monster/Happy.png', {frameWidth: 192/6, frameHeight: 32})
    //magic attacks
    this.load.spritesheet('lazer_beam1', 'assets/magicAttacks/1 Magic/3.png',{frameWidth: 576/8, frameHeight: 72})
    this.load.spritesheet('lazer_ball1', 'assets/magicAttacks/1 Magic/4_2.png', {frameWidth: 288/4, frameHeight: 72 })
    this.load.spritesheet('fire_ball', 'assets/magicAttacks/1 Magic/4.png', {frameWidth: 288/4, frameHeight: 72})
    this.load.spritesheet('petrification_attack', 'assets/magicAttacks/1 Magic/7.png', {frameWidth: 576/8, frameHeight: 72})
    this.load.spritesheet('stars_attack', 'assets/magicAttacks/1 Magic/6.png', {frameWidth: 288/4, frameHeight: 72})
    this.load.spritesheet('stars_landing', 'assets/magicAttacks/1 Magic/6_2.png', {frameWidth: 288/4, frameHeight: 72})
    
    //lightning Effects
    this.load.image('lightningArrow', 'assets/effects/Explosion_7/1/Explosion_1.png')
    this.load.image('lightningArrow2', 'assets/effects/Explosion_7/1/Explosion_2.png')
    this.load.image('lightningImpact', 'assets/effects/Explosion_7/1/Explosion_3.png')
    this.load.image('lightningImpact2', 'assets/effects/Explosion_7/1/Explosion_4.png')
    this.load.image('lightningImpact3', 'assets/effects/Explosion_7/1/Explosion_5.png')

    //slash effects
    this.load.image('blueSlash1', 'assets/effects/Slash 10/1.png')
    this.load.image('blueSlash2', 'assets/effects/Slash 10/2.png')
    this.load.image('blueSlash3', 'assets/effects/Slash 10/3.png')
    this.load.image('blueSlash4', 'assets/effects/Slash 10/4.png')
    this.load.image('blueSlash5', 'assets/effects/Slash 10/5.png')
    this.load.image('blueSlash6', 'assets/effects/Slash 10/6.png')
    this.load.image('blueSlash7', 'assets/effects/Slash 10/7.png')
    this.load.image('blueSlash8', 'assets/effects/Slash 10/8.png')
    this.load.image('redSlash1', 'assets/effects/Slash 5/1.png')
    this.load.image('redSlash2', 'assets/effects/Slash 5/2.png')
    this.load.image('redSlash3', 'assets/effects/Slash 5/3.png')
    this.load.image('redSlash4', 'assets/effects/Slash 5/4.png')
    this.load.image('redSlash5', 'assets/effects/Slash 5/5.png')
    this.load.image('redSlash6', 'assets/effects/Slash 5/6.png')
    this.load.image('redSlash7', 'assets/effects/Slash 5/7.png')
    this.load.image('redSlash8', 'assets/effects/Slash 5/8.png')
    this.load.image('greenDart1', 'assets/effects/Slash 2/1.png')
    this.load.image('greenDart2', 'assets/effects/Slash 2/2.png')
    this.load.image('greenDart3', 'assets/effects/Slash 2/3.png')
    this.load.image('greenDart4', 'assets/effects/Slash 2/4.png')

    //pink monster attacks
    this.load.spritesheet('pinkmonster_swordAttack2', 'assets/swordAttacks/Attack2.png', {frameWidth:42, frameHeight:42})
    this.load.spritesheet('pinkmonster_swordAttack1', 'assets/swordAttacks/Attack1.png', {frameWidth:42, frameHeight: 42})
    this.load.spritesheet('pinkmonster_meleAttack2', 'assets/heros/1 Pink_Monster/Pink_Monster_Attack2_6.png', {frameWidth: 32, frameHeight: 32})
    this.load.spritesheet('pinkmonster_meleAttack1', 'assets/heros/1 Pink_Monster/Pink_Monster_Attack1_4.png',{frameWidth: 32, frameHeight: 32})
    

    //white monster attacks 
    this.load.spritesheet('whitemonster_melee2', 'assets/heros/2 Owlet_Monster/Owlet_Monster_Attack2_6.png', {frameWidth: 192/6, frameHeight: 32})
    this.load.spritesheet('fireball_attack1', 'assets/heros/2 Owlet_Monster/Owlet_Monster_Attack1_4.png', {frameWidth: 128/4, frameHeight: 32})
    this.load.spritesheet('fallingstars_attack', 'assets/heros/2 Owlet_Monster/Owlet_Monster_Throw_4.png', {frameWidth: 128/4, frameHeight: 32})

    //blue monster attacks
    this.load.spritesheet('shadowBolt_attack', 'assets/archerAttacks/3/3.png', {frameWidth: 252/6, frameHeight: 42})
    this.load.spritesheet('phantomVolley_attack', 'assets/archerAttacks/3/1.png', {frameWidth: 252/6, frameHeight: 42})
    this.load.spritesheet('bluemonster_attack', 'assets/archerAttacks/3/Attack.png', {frameWidth: 252/6, frameHeight: 42})

    //sound effects
    this.load.audio('shadowBolt_sound', 'assets/soundEffects/launches/slimeball.wav')
    this.load.audio('punch1', 'assets/soundEffects/melee/1.ogg')
    this.load.audio('punch6', 'assets/soundEffects/melee/6.ogg')
    this.load.audio('mainMenu', 'assets/soundEffects/backgroundMusic/Gray Trip.ogg')
    this.load.audio('wind1', 'assets/soundEffects/backgroundMusic/wind1.wav')
    this.load.audio('birdchirping', 'assets/soundEffects/backgroundMusic/birdchirping071414.mp3')
    this.load.audio('sword9', 'assets/soundEffects/swordEffects/swish-9.wav')
    this.load.audio('sword10', 'assets/soundEffects/swordEffects/swish-10.wav')
    this.load.audio('fireBall', 'assets/soundEffects/launches/flaunch.wav')
    this.load.audio('lazerBeam', 'assets/soundEffects/launches/rlaunch.wav')
    this.load.audio('petrificationSound','assets/soundEffects/soundEffects/EM_EARTH_LAUNCH_01.wav')
    this.load.audio('lightningSound', 'assets/soundEffects/soundEffects/Lightning Spell Impacts/Lightning Spell Impact 1.wav')
}

