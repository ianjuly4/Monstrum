// enemies/hellBoss.js
export function hellBoss(scene, x, y) {
  const sprite = scene.physics.add.sprite(x, y, 'hellBoss')
    .setScale(3)
    .setOrigin(0.5, 1)
    .setDepth(3);

  sprite.setData('type', 'boss');
  sprite.setData('isAlive', true);
  sprite.hp = 1000;
  sprite.damage = 30;

  scene.physics.add.collider(sprite, scene.platforms);
  sprite.setCollideWorldBounds(true);
  sprite.body.setAllowGravity(false);

  sprite.update = () => {
    if (!scene.player || !sprite.getData('isAlive')) return;

    const dx = scene.player.x - sprite.x;
    const dy = scene.player.y - sprite.y;

    sprite.setVelocityX(Phaser.Math.Clamp(dx, -1, 1) * 80);
    sprite.setVelocityY(Phaser.Math.Clamp(dy, -1, 1) * 60);
  };

  return sprite;
}
