export function createAttackHitbox(scene, config) {
  const {
    x, y,
    width, height,
    texture = null,
    velocityX = 0,
    velocityY = 0,
    targets,
    damage = 10,
    owner = null,
    duration = 300,
    onHit = null,
    onDestroy = null,
    debug = false,
  } = config;

  const hitbox = texture
    ? scene.physics.add.sprite(x, y, texture)
    : scene.physics.add.sprite(x, y, null).setVisible(false);

  hitbox.setOrigin(0.5, 0.5);
  hitbox.setSize(width, height);
  hitbox.body.allowGravity = false;
  hitbox.body.setVelocity(velocityX, velocityY);

  if (debug) {
    hitbox.setVisible(true);
    hitbox.setTint(0xff0000);
  }

  const hitTargets = new Set();

  scene.physics.add.overlap(hitbox, targets, (hitbox, target) => {
    if (target.getData('isAlive') && !hitTargets.has(target)) {
      hitTargets.add(target);
      if (onHit) {
        onHit(target, owner);
      } else {
        target.hp -= damage;
        if (target.hp <= 0) {
          target.setData('isAlive', false);
          target.destroy();
        }
      }
    }
  });

  scene.time.delayedCall(duration, () => {
    if (onDestroy) onDestroy();
    hitbox.destroy();
  });

  return hitbox;
}
