//magicAnimations
export function magicAnimations(scene){

    scene.create.anims({
        key: 'lazerbeam',
        frames: scene.anims.generateFrameNumbers('lazer_beam1',{
            start: 0, end: 7}),
            frameRate: 8,
            repeat: -1
    })

}