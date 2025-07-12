import { setMonsterAnimation } from "./setMonsterAnimation";

export function battleGroundsMovement(scene) {
    const { monsters } = scene.gameState;
    const pinkMonster = monsters?.pinkMonster;

    const cursors = scene.cursors;
    const speed = 200;

    if (!pinkMonster || !pinkMonster.body) return;


    let velocityX = 0;
    let velocityY = 0;

    if (cursors.left.isDown) {
        velocityX = -speed;
        pinkMonster.setFlipX(true);
    } else if (cursors.right.isDown) {
        velocityX = speed;
        pinkMonster.setFlipX(false);
    }

    if (cursors.up.isDown) {
        velocityY = -speed;
    } else if (cursors.down.isDown) {
        velocityY = speed;
    }

    // Normalize diagonal movement
    if (velocityX !== 0 && velocityY !== 0) {
        velocityX *= Math.SQRT1_2;
        velocityY *= Math.SQRT1_2;
    }

    pinkMonster.setVelocity(velocityX, velocityY);

    const isMoving = velocityX !== 0 || velocityY !== 0;

    // ONLY handle animation if NOT attacking
    if (!pinkMonster.state.isAttacking) {
        if (isMoving) {
            if (!pinkMonster.state.isMoving) {
                setMonsterAnimation(scene, pinkMonster, 'pinkMonsterRun', 'run');
                pinkMonster.state.isMoving = true;
            }
        } else {
            if (pinkMonster.state.isMoving) {
                pinkMonster.anims.stop();
                pinkMonster.setTexture('pinkmonster');
                pinkMonster.state.isMoving = false;
            }
        }
    }
}
