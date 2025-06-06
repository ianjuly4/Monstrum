export function magicAnimations(scene) {

    scene.anims.create({
        key: 'lazerbeam',
        frames: scene.anims.generateFrameNumbers('lazer_beam1', {
            start: 0, end: 7
        }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'lazerBeamCharge',
        frames: scene.anims.generateFrameNumbers('lazer_beam1', {
            start: 0, end: 2
        }),
        frameRate: 8,
        repeat: -1
    });

}
