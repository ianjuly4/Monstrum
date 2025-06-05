//whiteMonsterSpecial
import { setMonsterAnimation } from "./setMonsterAnimation";

export function whiteMonsterSpecial(scene, triggered = false) {
    const { special, monsters, isUsingSpecial, debugMode } = scene.gameState;
    const whiteMonster = monsters?.whiteMonster;

    if (!whiteMonster) return;

    const hasPhysics = !!whiteMonster.body;
    const isOnGround = hasPhysics ? (whiteMonster.body.blocked.down || whiteMonster.body.touching.down) : true;
    const camera = scene.cameras.main;

    const canUseSpecial = debugMode || (special >= 50 && !isUsingSpecial && isOnGround);

    if (triggered && canUseSpecial) {
        scene.gameState.isUsingSpecial = true;
        if (!debugMode) {
            scene.gameState.special -= 50;
        }

        setMonsterAnimation(scene, whiteMonster, 'whitemonster_special', 'kameha')
        const beam = scene.add.sprite(whiteMonster.x + 80, whiteMonster.y - 40, 'lazer_beam1')
            .setScale(2)
            .setDepth(whiteMonster.depth + 1)
            .play('lazerbeam');

    }
}