//whiteMonsterAnimations
export function whiteMonsterAnimations(scene){

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
    
}