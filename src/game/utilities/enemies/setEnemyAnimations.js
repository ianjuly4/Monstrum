// utils/setMonsterAnimation.js
export function setEnemyAnimations(scene, monster, textureKey, animKey) {
  if (!scene || !scene.time || !monster) return;

  if (monster.texture.key !== textureKey) {
    monster.setTexture(textureKey);
  }

  if (!monster.anims.isPlaying || monster.anims.currentAnim?.key !== animKey) {
    monster.anims.play(animKey);
  }

  scene.time.delayedCall(10, () => {
    const frame = monster.anims.currentFrame?.frame;
    if (!frame || !monster.body) return;

    monster.body.setSize(frame.realWidth, frame.realHeight);
    monster.body.setOffset(
      (monster.width - frame.realWidth) / 2,
      monster.height - frame.realHeight
    );
  });
}
