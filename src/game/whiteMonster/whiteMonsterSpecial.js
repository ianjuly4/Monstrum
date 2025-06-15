import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function whiteMonsterSpecial(scene, triggered = false) {
  const { special, monsters, isUsingSpecial, debugMode } = scene.gameState;
  const whiteMonster = monsters?.whiteMonster;

  if (!whiteMonster) return;

  const hasPhysics = !!whiteMonster.body;
  const isOnGround = hasPhysics
    ? whiteMonster.body.blocked.down || whiteMonster.body.touching.down
    : true;

  const canUseSpecial = debugMode || (special >= 50 && !isUsingSpecial && isOnGround);

  if (triggered && canUseSpecial) {
    scene.gameState.isUsingSpecial = true;
    if (!debugMode) {
      scene.gameState.special -= 50;
    }

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

      beam.on('animationcomplete', () => {
        beam.destroy();
        scene.gameState.isUsingSpecial = false;
        whiteMonster.setTexture('whitemonster')
      });
    });
  }
}
