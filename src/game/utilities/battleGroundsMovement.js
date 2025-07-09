import { setMonsterAnimation } from "./setMonsterAnimation";
export function battleGroundsMovement(scene, monster) {
    if (!monster) return;

    let velocityX = 0;
    let velocityY = 0;
    //console.log(monster.x, monster.y)
    if (scene.cursors.left.isDown) {
        velocityX = -160;
        monster.flipX = true;
    } else if (scene.cursors.right.isDown) {
        velocityX = 160;
        monster.flipX = false;
    }

    if (scene.cursors.up.isDown) {
        velocityY = -160;
    } else if (scene.cursors.down.isDown) {
        velocityY = 160;
    }

    monster.setVelocity(velocityX, velocityY);

    if (velocityX !== 0 || velocityY !== 0) {
        setMonsterAnimation(scene, monster, 'pinkMonsterRun', 'run');
    } else {
        monster.setTexture('pinkmonster');
    }
}
