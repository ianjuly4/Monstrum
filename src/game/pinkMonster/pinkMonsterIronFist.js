import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterIronFist(scene, selected = false){
    const {monsters} = scene.gameState
    const pinkMonster = monsters?.pinkMonster

    if(!pinkMonster) return;

    if (selected) {

        if (pinkMonster.scaleX > 3|| pinkMonster.scaleY > 3) {  
                pinkMonster.setScale(3);
                pinkMonster.setPosition(190, 515);
            }

        setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack2', 'meleAttack2');
    
        
    }
}