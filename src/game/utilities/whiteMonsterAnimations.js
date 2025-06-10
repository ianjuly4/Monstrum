//whiteMonsterAnimations
export function whiteMonsterAnimations(scene){

    scene.anims.create({
        key: 'kameha',
        frames: scene.anims.generateFrameNumbers('whitemonster_special',{
            start: 0, end: 5}),
            frameRate: 4,
            repeat: -1
    })
    scene.anims.create({
        key: 'melee2',
        frames: [ 
            {key: 'whitemonster_melee2', frame: 2},
            {key: 'whitemonster_melee2', frame: 4}
        ],
            frameRate: 2,
            repeat: 0 
    })
}