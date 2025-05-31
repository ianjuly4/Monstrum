//pinkMonsterAnimations
export function pinkMonsterAnimations(scene){

    scene.anims.create({
        key: 'meleAttack2',
        frames: scene.anims.generateFrameNumbers('pinkmonster_meleAttack2',{
            start: 0, end: 5}),
            frameRate: 8,
            repeat: 0
    })
    scene.anims.create({
        key: 'meleAttack1',
        frames: scene.anims.generateFrameNumbers('pinkmonster_meleAttack1',{
            start: 0, end: 3}),
            frameRate: 8,
            repeat: 0
    })



    scene.anims.create({
        key: 'swordAttack1',
        frames: scene.anims.generateFrameNumbers('pinkmonster_swordAttack1', {
            start: 0, end: 5}),
            frameRate: 8,
            repeat: 0
    })

    scene.anims.create({
        key: 'swordAttack2',
        frames: scene.anims.generateFrameNumbers('pinkmonster_swordAttack2', {
            start: 0, end: 5}),
            frameRate: 8,
            repeat: 0
    })

    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('pinkmonster_idle', {
        start: 0, end: 3}),
        frameRate: 5,
        repeat: -1}
    )
}