import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterPiercingStab(scene, selected = false){
    const {monsters} = scene.gameState
    const pinkMonster = monsters?.pinkMonster

    if(!pinkMonster) return;

    if (selected) {

        if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                pinkMonster.setScale(3);
                pinkMonster.setPosition(190, 515);
            }

        setMonsterAnimation(scene, pinkMonster, 'pinkmonster_swordAttack1', 'swordAttack1');
        
        //const greenDart = scene.add.sprite(
          //  pinkMonster.x + 20,
            //pinkMonster.y - 40,
            //'greenDart1'
        //).setScale(0.5).setAlpha(0.75).setDepth(-1)

        //greenDart.anims.play('greenDart')
        //greenDart.once(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=>{
          //  greenDart.destroy()
        //})
        
    }
}