export function magicAnimations(scene) {

    scene.anims.create({
        key: 'lazerbeam',
        frames: scene.anims.generateFrameNumbers('lazer_beam1', {
            start: 0, end: 7
        }),
        frameRate: 4,
        repeat: 0
    });

}
