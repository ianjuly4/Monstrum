import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterCrescentSlash(scene, selected = false, triggered = false) {
  const { monsters } = scene.gameState;
  const pinkMonster = monsters?.pinkMonster;

  if (!pinkMonster) return;

  if (selected) {
    if (pinkMonster.scaleX > 3 || pinkMonster.scaleY > 3) {
      pinkMonster.setScale(3);
      pinkMonster.setPosition(190, 515);
    }

    setMonsterAnimation(scene, pinkMonster, 'pinkmonster_swordAttack2', 'swordAttack2');

    // Slash effect animation
    //const redSlash = scene.add.sprite(
      //pinkMonster.x + 50,
      //pinkMonster.y - 65,
      //'redSlash1'
    //).setScale(0.5).setOrigin(0.5).setAlpha(0.70).setDepth(1);
    

    //redSlash.anims.play('redSlash');
    const sword9 = scene.sound.add('sword9', { volume: 0.2 });
    sword9.play()
    //redSlash.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
    
      //redSlash.destroy()
    //});
   
  }
  if (triggered) {
    if(pinkMonster.state.isMoving === false){
      scene.gameState.isAttacking = true;
      if (pinkMonster.scaleX > 3 || pinkMonster.scaleY > 3) {
        pinkMonster.setScale(2);
        
      }
      setMonsterAnimation(scene, pinkMonster, 'pinkmonster_swordAttack2', 'swordAttack2');

      // Slash effect animation
      //const redSlash = scene.add.sprite(
        //pinkMonster.x + 50,
        //pinkMonster.y - 65,
        //'redSlash1'
      //).setScale(0.5).setOrigin(0.5).setAlpha(0.70).setDepth(1);
      

      //redSlash.anims.play('redSlash');
      const sword9 = scene.sound.add('sword9', { volume: 0.2 });
      sword9.play()
      //redSlash.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
      
        //redSlash.destroy()
      //});
      pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation) => {
              if (animation.key === 'swordAttack2') {
                  pinkMonster.setTexture('pinkmonster');
                  pinkMonster.state.isAttacking = false;
              }
        });
      }else if(pinkMonster.state.isMoving === true){
        scene.gameState.isAttacking = true;
        if (pinkMonster.scaleX > 3 || pinkMonster.scaleY > 3) {
          pinkMonster.setScale(2);
          
        }
        setMonsterAnimation(scene, pinkMonster, 'pinkmonster_runningSwordAttack2', 'runningSwordAttack2');

        // Slash effect animation
        //const redSlash = scene.add.sprite(
          //pinkMonster.x + 50,
          //pinkMonster.y - 65,
          //'redSlash1'
        //).setScale(0.5).setOrigin(0.5).setAlpha(0.70).setDepth(1);
        

        //redSlash.anims.play('redSlash');
        const sword9 = scene.sound.add('sword9', { volume: 0.2 });
        sword9.play()
        //redSlash.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
        
          //redSlash.destroy()
        //});
        pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation) => {
              if (animation.key === 'runningSwordAttack2') {
                console.log('sword animation is complete')
                pinkMonster.state.isAttacking = false;
               
                if (pinkMonster.body.velocity.x !== 0 || pinkMonster.body.velocity.y !== 0) {
                  setMonsterAnimation(scene, pinkMonster, 'pinkMonsterRun', 'run');
                  pinkMonster.state.isMoving = true;
                } else {
                  pinkMonster.anims.stop();
                  pinkMonster.setTexture('pinkmonster'); 
                  pinkMonster.state.isMoving = false;
                }
              }
            });
      }
  }
}
