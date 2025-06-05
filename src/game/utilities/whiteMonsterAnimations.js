//whiteMonsterAnimations
export function whiteMonsterAnimations(scene){

    scene.anims.create({
        key: 'kameha',
        frames: scene.anims.generateFrameNumbers('whitemonster_special',{
            start: 0, end: 5}),
            frameRate: 8,
            repeat: -1
    })
}