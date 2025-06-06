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
  
      const kamehaFrames = ['kameha1', 'kameha2', 'kameha3', 'kameha4', 'kameha5'];
      
      
      // Add charge effect image on top
      const chargeEffect = scene.add.image(
        whiteMonster.x,
        whiteMonster.y - 140,
        kamehaFrames[0]
      ).setDepth().setAlpha(0.3)
        

      const chargeBallEffect = scene.add.image(
        whiteMonster.x + 30,
        whiteMonster.y - 20,
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
            
            chargeEffect.setTexture(kamehaFrames[currentFrame]);
            chargeEffect.setPosition(whiteMonster.x, whiteMonster.y - 140);
      
        //Just keep this static unless you want to animate it
          chargeBallEffect.setPosition(whiteMonster.x + 30, whiteMonster.y - 20);
          currentFrame = currentFrame === 0 ? 1: 0;
          chargeBallEffect.setFrame(currentFrame)
        }
      });
      
  
   
  }
}