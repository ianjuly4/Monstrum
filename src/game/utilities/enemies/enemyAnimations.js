
export function enemyAnimations(scene){
    const anims = scene.anims;

    if (!anims.exists('skeleton_walk')) {
        anims.create({
            key: 'skeleton_walk',
            frames: anims.generateFrameNumbers('skeletonWalk', {
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: -1
        });
    }

    if (!anims.exists('skeleton_hurt')) {
        anims.create({
            key: 'skeleton_hurt',
            frames: anims.generateFrameNumbers('skeletonHurt', {
                start: 0, end: 3
            }),
            frameRate: 8,
            repeat: 0
        });
    }

    if (!anims.exists('skeleton_death')) {
        anims.create({
            key: 'skeleton_death',
            frames: anims.generateFrameNumbers('skeletonDeath', {
                start: 0, end: 3
            }),
            frameRate: 8,
            repeat: 0
        });
    }

    if (!anims.exists('skeleton_attack')) {
        anims.create({
            key: 'skeleton_attack',
            frames: anims.generateFrameNumbers('skeletonAttack', {
                start: 0, end: 3
            }),
            frameRate: 8,
            repeat: -1
        });
    }

    if (!anims.exists('skeleton_idle')) {
        anims.create({
            key: 'skeleton_idle',
            frames: anims.generateFrameNumbers('skeletonIdle', {
                start: 0, end: 3
            }),
            frameRate: 5,
            repeat: -1
        });
    }

    
}
