import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterIronFist(scene, selected = false, triggered = false){
    const {monsters} = scene.gameState
    const pinkMonster = monsters?.pinkMonster
    
    //console.log('Calling IronFist with triggered:', triggered, 'selected:', selected);


    if(!pinkMonster) return;

    if (selected) {

        if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                pinkMonster.setScale(3);
                pinkMonster.setPosition(190, 515);
            }

        setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack2', 'meleAttack2');
        const punch1 = scene.sound.add('punch1', { volume: 0.2 });
        const punch6 = scene.sound.add('punch6', { volume: 0.2 });

        
        punch1.once('complete', () => {
            punch6.play();
        });
        punch1.play();
        pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=>{
            pinkMonster.setTexture('pinkmonster')
        })

    }else if(triggered){
        //console.log('ironfist triggered')
            pinkMonster.state.isAttacking = true
            if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                    pinkMonster.setScale(2);
                    //pinkMonster.setPosition(190, 515);
                }

            //pinkMonster.anims.play('meleAttack2');
            setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack2', 'meleAttack2');
            const punch1 = scene.sound.add('punch1', { volume: 0.2 });
            const punch6 = scene.sound.add('punch6', { volume: 0.2 });

            
            punch1.once('complete', () => {
                punch6.play();
            });
            punch1.play();
            pinkMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation) => {
                if (animation.key === 'meleAttack2') {
                    pinkMonster.setTexture('pinkmonster');
                    pinkMonster.state.isAttacking = false;
                }
            });
       
    }
}