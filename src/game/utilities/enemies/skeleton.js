import { updateMonsterBars } from "../updateMonsterBars";

export function skeleton(scene, x, y) {
  const skeleton = scene.physics.add.sprite(x, y, 'skeletonWalk')
    .setScale(2)
    .setOrigin(0.5, 1)
    .setDepth(2);

  skeleton.setData('type', 'skeleton');
  skeleton.setData('isAlive', true);
  skeleton.hp = 50;
  skeleton.damage = 5;

  scene.physics.add.collider(skeleton, scene.platforms);
  skeleton.setCollideWorldBounds(true);
  skeleton.body.setAllowGravity(false);
  skeleton.anims.play('skeleton_walk');

  function moveRandomly() {
    if (!skeleton.getData('isAlive')) return;
    const speed = 110;
    const velocityX = Phaser.Math.Between(-speed, speed);
    skeleton.body.setVelocityX(velocityX);
    skeleton.flipX = velocityX > 0;
    if (velocityX !== 0) {
      skeleton.anims.play('skeleton_walk', true);
    } else {
      skeleton.anims.stop();
      skeleton.setFrame(0);
    }
    scene.time.delayedCall(Phaser.Math.Between(1000, 2500), moveRandomly);
  }
  moveRandomly();

  const healthBar = scene.add.graphics().setDepth(5);
  const updateHealthBar = () => {
    healthBar.clear();
    const barW = 40, barH = 6, offsetY = 40;
    const pct = skeleton.hp / 50;
    healthBar.fillStyle(0x555555);
    healthBar.fillRect(skeleton.x - barW / 2, skeleton.y - skeleton.height - offsetY, barW, barH);
    healthBar.fillStyle(0x00ff00);
    healthBar.fillRect(skeleton.x - barW / 2, skeleton.y - skeleton.height - offsetY, barW * pct, barH);
  };
  scene.events.on('update', updateHealthBar);
  skeleton.on('destroy', () => {
    healthBar.destroy();
    scene.events.off('update', updateHealthBar);
  });

  // Set up collider with all active player monsters
  const { monsters } = scene.gameState;
  Object.values(monsters).forEach(player => {
    scene.physics.add.collider(
      skeleton,
      player,
      () => {
        // Only if player alive and not currently attacking
              if (player.state?.hp > 0 && !scene.gameState.isAttacking) {
        player.state.hp = Math.max(player.state.hp - skeleton.damage, 0);
        updateMonsterBars(scene, player);

        player.setTint(0xff0000);
        scene.time.delayedCall(100, () => player.clearTint());

        if (player.state.hp === 0) {
          player.setData('isAlive', false);
          player.destroy();
          console.log(`${player.texture.key} defeated`);
        }
      }

      },
      null,
      scene
    );
  });

  return skeleton;
}
