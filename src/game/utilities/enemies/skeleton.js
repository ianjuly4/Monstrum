// enemies/skeleton.js
import { setEnemyAnimations } from "./setEnemyAnimations.js";

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

  // Play walk animation initially
  setEnemyAnimations(scene, skeleton, 'skeletonWalk', 'skeleton_walk');

  // Create a tween to move skeleton back and forth
  scene.tweens.add({
    targets: skeleton,
    loop: -1, // Infinite loop
    ease: 'Linear',
    tweens: [
      {
        x: x - 100, // Move left 100 pixels
        duration: 2000,
        onStart: () => {
          skeleton.flipX = true; // Face left
          setEnemyAnimations(scene, skeleton, 'skeletonWalk', 'skeleton_walk');
        }
      },
      {
        x: x + 100, // Move right 100 pixels
        duration: 2000,
        onStart: () => {
          skeleton.flipX = false; // Face right
          setEnemyAnimations(scene, skeleton, 'skeletonWalk', 'skeleton_walk');
        }
      }
    ]
  });

  return skeleton;
}
