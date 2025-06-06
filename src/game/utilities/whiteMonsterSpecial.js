import { setMonsterAnimation } from "./setMonsterAnimation";

export function whiteMonsterSpecial(scene, triggered = false, ) {
    const { special, monsters, isUsingSpecial, debugMode } = scene.gameState;
    const whiteMonster = monsters?.whiteMonster;
  
    if (!whiteMonster) return;
  
    const hasPhysics = !!whiteMonster.body;
    const isOnGround = hasPhysics
      ? (whiteMonster.body.blocked.down || whiteMonster.body.touching.down)
      : true;
  
    const canUseSpecial = debugMode || (special >= 50 && !isUsingSpecial && isOnGround);
  
    if (triggered && canUseSpecial) {
        scene.gameState.isUsingSpecial = true;
      if (!debugMode) {
        scene.gameState.special -= 50;
      }
  
      ///const kamehaFrames = ['kameha1', 'kameha2', 'kameha3', 'kameha4', 'kameha5'];
      
      
      
      //const chargeEffect = scene.add.image(
        //whiteMonster.x,
        //whiteMonster.y - 140,
        //kamehaFrames[0]
      //).setDepth().setAlpha(0.3)
        

      const chargeBallEffect = scene.add.image(
        whiteMonster.x + 30,
        whiteMonster.y - 30,
        'lazer_ball1',
        0,
        1,
      ).setDepth(1).setAlpha(0.9).setScale(3)
    
      //whiteMonster.setTexture('whitemonster_special')
      setMonsterAnimation(scene, whiteMonster, 'whitemonster_melee2', 'melee2')
      let currentFrame = 0;
  
      // Loop explosion frames continuously
      const frameLoop = scene.time.addEvent({
        delay: 100,
        loop: true,
        callback: () => {
            
            //chargeEffect.setTexture(kamehaFrames[currentFrame]);
            //chargeEffect.setPosition(whiteMonster.x, whiteMonster.y - 140);
      
        //Just keep this static unless you want to animate it
          chargeBallEffect.setPosition(whiteMonster.x + 30, whiteMonster.y - 30);
          currentFrame = currentFrame === 0 ? 1: 0;
          chargeBallEffect.setFrame(currentFrame)
        }
      });

      scene.time.delayedCall(1000, () => {
        frameLoop.remove();
        chargeBallEffect.destroy();

        // Create and play animated beam
        const beam = scene.add.sprite(
            whiteMonster.x + 30,
            whiteMonster.y - 30,
            'lazer_beam1'
        ).setScale(2.5).setDepth(2).setAlpha(1);

        beam.play('lazerbeam');

        // Move beam to the right like a projectile
        scene.tweens.add({
          targets: beam,
          x: beam.x + 400, // Adjust this distance
          duration: 700,
          ease: 'Linear',
          onComplete: () => {
              beam.destroy();
              scene.gameState.isUsingSpecial = false;
          }
      });
  });
}
}

    