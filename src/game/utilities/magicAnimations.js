export function magicAnimations(scene) {
    const anims = scene.anims;

    if(anims.exists('lazerbeam')) return
    if(anims.exists('fireball')) return
    if(anims.exists('petrification')) return
    if(anims.exists('stars_falling')) return
     if(anims.exists('starsLanding')) return
    

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

    scene.anims.create({
        key: 'petrification',
        frames: scene.anims.generateFrameNumbers('petrification_attack',{
            start: 0, end: 7}),
            frameRate: 5,
            repeat: 0
    })

    scene.anims.create({
        key: 'stars_falling',
        frames: scene.anims.generateFrameNumbers('stars_attack',{
            start: 0, end: 3}),
            frameRate: 8,
            repeat: 0
    })
    scene.anims.create({
        key: 'starsLanding',
        frames: scene.anims.generateFrameNumbers('stars_landing',{
            start:0, end:3}),
            frameRate: 8,
            repeat:0
    })

}
