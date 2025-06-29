//whiteMonsterAnimations
export function whiteMonsterAnimations(scene){
    const anims = scene.anims;

    if(anims.exists('melee2')) return
    if(anims.exists('whitemonster_idle')) return
    if(anims.exists('fireball_attack')) return
    if(anims.exists('petrification_attack1')) return
    if(anims.exists('fallingstars')) return

    scene.anims.create({
        key: 'melee2',
        frames: [ 
            {key: 'whitemonster_melee2', frame: 2},
            {key: 'whitemonster_melee2', frame: 4}
        ],
            frameRate: 4,
            repeat: 0 
    })

    scene.anims.create({
        key: 'whitemonster_idle',
        frames: scene.anims.generateFrameNumbers('whitemonster_idle', {
            start: 0, end: 3}),
            frameRate: 5,
            repeat: -1
        
    })
    scene.anims.create({
        key: 'fireball_attack',
        frames: scene.anims.generateFrameNumbers('fireball_attack1',{
            start: 0, end: 2}),
            frameRate: 5,
            repeat: 0
    })

    scene.anims.create({
        key: 'petrification_attack1',
        frames: scene.anims.generateFrameNumbers('whitemonster_melee2',{
            start: 0, end: 2}),
            frameRate: 8,
            repeat: 0
    })

    scene.anims.create({
        key: 'fallingstars',
        frames: scene.anims.generateFrameNumbers('fallingstars_attack',{
            start: 0, end: 2}),
            frameRate: 6,
            repeat: 0
    })
    
}