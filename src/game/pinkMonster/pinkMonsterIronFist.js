import { setMonsterAnimation } from "../utilities/setMonsterAnimation";
import { createAttackHitbox } from "../utilities/createAttackHitbox"; 
export function pinkMonsterIronFist(scene, selected = false, triggered = false) {
  const { monsters, wave } = scene.gameState;
  const pinkMonster = monsters?.pinkMonster;

  if (!pinkMonster) return;

  if (selected) {
    if (pinkMonster.scaleX > 3 || pinkMonster.scaleY > 3) {
      pinkMonster.setScale(3);
      pinkMonster.setPosition(190, 515);
    }

    setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack2', 'meleAttack2');
    const punch1 = scene.sound.add('punch1', { volume: 0.2 });
    const punch6 = scene.sound.add('punch6', { volume: 0.2 });

    punch1.once('complete', () => punch6.play());
    punch1.play();

    pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
      pinkMonster.setTexture('pinkmonster');
    });

  } else if (triggered) {
    pinkMonster.state.isAttacking = true;
    pinkMonster.state.attackDamage = 25;

    if (pinkMonster.scaleX > 3 || pinkMonster.scaleY > 3) {
      pinkMonster.setScale(2);
    }

    setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack2', 'meleAttack2');
    const punch1 = scene.sound.add('punch1', { volume: 0.2 });
    const punch6 = scene.sound.add('punch6', { volume: 0.2 });

    punch1.once('complete', () => punch6.play());
    punch1.play();

    // Spawn hitbox at specific animation frame (e.g., frame 5)
    const onAnimationUpdate = (animation, frame) => {
      if (animation.key === 'meleAttack2' && frame.index === 5) {
        // Calculate hitbox position relative to pinkMonster
        const hitboxX = pinkMonster.flipX
          ? pinkMonster.x - 40
          : pinkMonster.x + 40;
        const hitboxY = pinkMonster.y - 20;

        createAttackHitbox(scene, {
          x: hitboxX,
          y: hitboxY,
          width: 50,
          height: 30,
          velocityX: 0,
          velocityY: 0,
          targets: wave.activeEnemies,
          damage: pinkMonster.state.attackDamage,
          owner: pinkMonster,
          duration: 150,
          debug: false,
          onHit: (target) => {
            target.hp -= pinkMonster.state.attackDamage;
            if (target.hp <= 0) {
              target.setData('isAlive', false);
              target.destroy();
            }
          }
        });

        // Remove this listener once hitbox is spawned
        pinkMonster.off(Phaser.Animations.Events.ANIMATION_UPDATE, onAnimationUpdate);
      }
    };

    pinkMonster.on(Phaser.Animations.Events.ANIMATION_UPDATE, onAnimationUpdate);

    pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation) => {
      if (animation.key === 'meleAttack2') {
        pinkMonster.setTexture('pinkmonster');
        pinkMonster.state.isAttacking = false;
      }
    });
  }
}
