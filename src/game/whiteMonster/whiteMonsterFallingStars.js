import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function whiteMonsterFallingStars(scene, triggered = false) {
  const { monsters } = scene.gameState;
  const whiteMonster = monsters?.whiteMonster;
  if (!whiteMonster) return;

  const camera = scene.cameras.main;

  if (triggered) {
    setMonsterAnimation(scene, whiteMonster, 'fallingstars_attack', 'fallingstars');

    // Darker blackout overlay
    const blackout = scene.add.rectangle(0, 0, camera.width * 2, camera.height * 2, 0x000000, 0.65)
      .setScrollFactor(0)
      .setDepth(99)
      .setOrigin(0);

    whiteMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
      // Spawn stars
      scene.time.addEvent({
        delay: 200,
        repeat: 15,
        callback: () => {
          const xCoord = Math.random() * scene.scale.width;
          const star = scene.add.sprite(xCoord, 0, 'stars_attack').setScale(2);

          scene.tweens.add({
            targets: star,
            y: 500,
            duration: 500,
            onComplete: () => {
              scene.cameras.main.shake(150, 0.01);
              star.play('starsLanding');
              star.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                star.destroy();
                whiteMonster.setTexture('whitemonster');
              });
            }
          });
        }
      });

      // Fade out blackout after last star lands
      scene.time.delayedCall(3700, () => {
        scene.tweens.add({
          targets: blackout,
          alpha: 0,
          duration: 300,
          onComplete: () => blackout.destroy()
        });
      });
    });
  }
}
