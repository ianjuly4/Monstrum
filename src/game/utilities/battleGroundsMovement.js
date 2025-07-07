import { setMonsterAnimation } from "./setMonsterAnimation"

export function battleGroundsMovement(scene, monster){

    if(!monster) return

    if(scene.cursors.left.isDown){
        monster.setVelocityX(-160)
        monster.flipX = true
        setMonsterAnimation(scene, monster, 'pinkmonster_swordAttack1', 'swordAttack1');
    }else if(scene.cursors.right.isDown){
        monster.setVelocityX(160)
        monster.flipX = false
        setMonsterAnimation(scene, monster, 'pinkmonster_swordAttack1', 'swordAttack1');
    } else {
        monster.setVelocityX(0)
    }
    
}