import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function whiteMonsterPetrification(scene, selected = false){
    const { monsters } = scene.gameState;
    const whiteMonster = monsters?.whiteMonster;
    
    if (!whiteMonster) return;
    
    if (selected) {
    
        setMonsterAnimation(scene, whiteMonster, 'whitemonster_melee2', 'petrification_attack1');
    
        whiteMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, function (){
       
        const petrification = scene.add.sprite(
          whiteMonster.x + 40,
          whiteMonster.y - 140,
          'petrification_attack'
        )
          .setDepth(2)
          .setScale(4)
          .setOrigin(0.5, 0.5);
    
            petrification.anims.play('petrification');
            const petrificationSound = scene.sound.add('petrificationSound', {volumne: 0.3})
            petrificationSound.play()
            
            scene.tweens.add({
                targets: petrification,
                x: whiteMonster.x + 300, 
                duration: 1500,           
                ease: 'Linear',
                onComplete: () => {
                    petrification.destroy(); 
                    whiteMonster.setTexture('whitemonster'); 
                }
            });
        });
    
       
        
      }
}