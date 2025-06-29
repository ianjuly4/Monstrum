import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function whiteMonsterLazerBeam(scene, selected = false) {
  const { monsters} = scene.gameState;
  const whiteMonster = monsters?.whiteMonster;

  if (!whiteMonster) return;

  if (selected ) {

    const chargeBallEffect = scene.add.image(
      whiteMonster.x + 30,
      whiteMonster.y - 30,
      'lazer_ball1',
      0,
      1
    )
      .setDepth(1)
      .setAlpha(0.9)
      .setScale(3);

    setMonsterAnimation(scene, whiteMonster, 'whitemonster_melee2', 'melee2');

    let currentFrame = 0;

    const frameLoop = scene.time.addEvent({
      delay: 100,
      loop: true,
      callback: () => {
        chargeBallEffect.setPosition(whiteMonster.x + 30, whiteMonster.y - 30);
        currentFrame = currentFrame === 0 ? 1 : 0;
        chargeBallEffect.setFrame(currentFrame);
      }
    });

    scene.time.delayedCall(1000, () => {
      frameLoop.remove();
      chargeBallEffect.destroy();

      const beam = scene.add.sprite(
        whiteMonster.x + 40,
        whiteMonster.y - 30,
        'lazer_beam1'
      ).setDepth(2).setAlpha(1)
      
      beam.setOrigin(0, 0.5);
      beam.setDisplaySize(1000, 200);


      beam.anims.play('lazerbeam');
      const lazerBeamSound = scene.sound.add('lazerBeam', {volume: 0.3})
      lazerBeamSound.play()

      beam.on('animationcomplete', () => {
        beam.destroy();
        scene.gameState.isUsingSpecial = false;
        whiteMonster.setTexture('whitemonster')
      });
    });
  }
}
