export function blueMonsterAnimations(scene) {

    scene.anims.create({
        key: 'bluemonster_idle',
        frames: scene.anims.generateFrameNumbers('bluemonster_idle', {
            start: 0, end: 5
        }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key:'shadowBolt',
        frames: scene.anims.generateFrameNumbers('shadowBolt_attack',{
            start: 0, end: 5
        }),
        frameRate: 6,
        repeat: 0
    })

    scene.anims.create({
        key:'phantomVolley',
        frames: scene.anims.generateFrameNumbers('phantomVolley_attack',{
            start: 0, end: 5
        }),
        frameRate: 8,
        repeat: 0
    })

    scene.anims.create({
        key:'blueMonsterAttack',
        frames: scene.anims.generateFrameNumbers('bluemonster_attack',{
            start: 0, end: 5
        }),
        frameRate: 8,
        repeat: 0
    })
}