export function pinkMonsterAnimations(scene){
    const anims = scene.anims;

    if (!anims.exists('meleAttack2')) {
        anims.create({
            key: 'meleAttack2',
            frames: anims.generateFrameNumbers('pinkmonster_meleAttack2', {
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: 0
        });
    }

    if (!anims.exists('meleAttack1')) {
        anims.create({
            key: 'meleAttack1',
            frames: anims.generateFrameNumbers('pinkmonster_meleAttack1', {
                start: 0, end: 3
            }),
            frameRate: 8,
            repeat: 0
        });
    }

    if (!anims.exists('swordAttack1')) {
        anims.create({
            key: 'swordAttack1',
            frames: anims.generateFrameNumbers('pinkmonster_swordAttack1', {
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: 0
        });
    }

    if (!anims.exists('swordAttack2')) {
        anims.create({
            key: 'swordAttack2',
            frames: anims.generateFrameNumbers('pinkmonster_swordAttack2', {
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: 0
        });
    }

    if (!anims.exists('idle')) {
        anims.create({
            key: 'idle',
            frames: anims.generateFrameNumbers('pinkmonster_idle', {
                start: 0, end: 3
            }),
            frameRate: 5,
            repeat: -1
        });
    }

    if (!anims.exists('run')) {
        anims.create({
            key: 'run',
            frames: anims.generateFrameNumbers('pinkMonsterRun', {
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: -1
        });
    }

    if(!anims.exists('runningSwordAttack1')){
        anims.create({
            key: 'runningSwordAttack1',
            frames: anims.generateFrameNumbers('pinkmonster_runningSwordAttack1', {
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: 0
        })
    }
    if(!anims.exists('runningSwordAttack2')){
        anims.create({
            key: 'runningSwordAttack2',
            frames: anims.generateFrameNumbers('pinkmonster_runningSwordAttack2',{
                start: 0, end: 5
            }),
            frameRate: 8,
            repeat: 0
        })
    }
}
