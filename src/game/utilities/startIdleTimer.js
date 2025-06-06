// startIdleTimer.js
import { setMonsterAnimation } from "./setMonsterAnimation.js";


export function startIdleTimer(scene) {
  if (scene.gameState.idleTimer) {
    scene.gameState.idleTimer.remove(); 
  }

  scene.gameState.idleTimer = scene.time.delayedCall(30000, () => {
    scene.gameState.isIdle = true;
    setMonsterAnimation(scene, scene.gameState.monsters.pinkMonster, 'pinkmonster_idle', 'idle');
    //console.log('Idle started');
  });
}
