
export function preload() {
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
    
    //idles
    this.load.spritesheet('pinkmonster_idle', 'assets/heros/1 Pink_Monster/Pink_Monster_Idle_4.png',{frameWidth:128/4, frameHeight:32})
    this.load.spritesheet('whitemonster_idle', 'assets/heros/2 Owlet_Monster/Idle2.png', {frameWidth: 128/4, frameHeight: 32} )
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

    //white monster attacks 
    this.load.spritesheet('whitemonster_melee2', 'assets/heros/2 Owlet_Monster/Owlet_Monster_Attack2_6.png', {frameWidth: 192/6, frameHeight: 32})
    this.load.spritesheet('fireball_attack1', 'assets/heros/2 Owlet_Monster/Owlet_Monster_Attack1_4.png', {frameWidth: 128/4, frameHeight: 32})
    this.load.spritesheet('fallingstars_attack', 'assets/heros/2 Owlet_Monster/Owlet_Monster_Throw_4.png', {frameWidth: 128/4, frameHeight: 32})
}
