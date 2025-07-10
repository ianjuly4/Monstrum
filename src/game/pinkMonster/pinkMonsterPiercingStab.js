import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterPiercingStab(scene, selected = false, triggered = false){
    const {monsters} = scene.gameState
    const pinkMonster = monsters?.pinkMonster

    if(!pinkMonster) return;

    if (selected) {

        if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                pinkMonster.setScale(3);
                pinkMonster.setPosition(190, 515);
            }

        setMonsterAnimation(scene, pinkMonster, 'pinkmonster_swordAttack1', 'swordAttack1');
        const sword10 = scene.sound.add('sword10', {volume: 0.2})
        sword10.play()
        //const greenDart = scene.add.sprite(
          //  pinkMonster.x + 20,
            //pinkMonster.y - 40,
            //'greenDart1'
        //).setScale(0.5).setAlpha(0.75).setDepth(-1)

        //greenDart.anims.play('greenDart')
        //greenDart.once(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=>{
          //  greenDart.destroy()
        //})
        
    }else if (triggered) {
        if(pinkMonster.state.isMoving === false){
          pinkMonster.state.isAttacking = true;
          if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                pinkMonster.setScale(3);
                  
              }

          setMonsterAnimation(scene, pinkMonster, 'pinkmonster_swordAttack1', 'swordAttack1');
          const sword10 = scene.sound.add('sword10', {volume: 0.2})
          sword10.play()
          pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation) => {
              if (animation.key === 'swordAttack1') {
                  pinkMonster.setTexture('pinkmonster');
                  pinkMonster.state.isAttacking = false;
              }
          });
          //const greenDart = scene.add.sprite(
            //  pinkMonster.x + 20,
              //pinkMonster.y - 40,
              //'greenDart1'
          //).setScale(0.5).setAlpha(0.75).setDepth(-1)

          //greenDart.anims.play('greenDart')
          //greenDart.once(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=>{
            //  greenDart.destroy()
          //})
        }else if(pinkMonster.state.isMoving === true){
            pinkMonster.state.isAttacking = true;
            if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                  pinkMonster.setScale(3);
                    
                }
            setMonsterAnimation(scene, pinkMonster, 'pinkmonster_runningSwordAttack1', 'runningSwordAttack1');
            const sword10 = scene.sound.add('sword10', {volume: 0.2})
            sword10.play()
            pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation) => {
              if (animation.key === 'runningSwordAttack1') {
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