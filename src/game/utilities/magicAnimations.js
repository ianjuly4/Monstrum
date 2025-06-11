export function magicAnimations(scene) {

    scene.anims.create({
        key: 'lazerbeam',
        frames: scene.anims.generateFrameNumbers('lazer_beam1', {
            start: 0, end: 7
        }),
        frameRate: 4,
        repeat: 0
    });

    scene.anims.create({
        key: 'fireball',
        frames: scene.anims.generateFrameNumbers('fire_ball', {
            start: 0, end: 3}),
            frameRate: 5,
            repeat: -1
    })

}
