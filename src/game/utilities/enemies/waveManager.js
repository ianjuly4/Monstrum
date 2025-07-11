import { spawnEnemiesForWave } from "./spawnEnemiesForWave";
import { enemyConfig } from "./enemyConfig";

export const waveManager = {
  startWave(scene) {
    const wave = scene.gameState.wave;

    const enemyData = enemyConfig[wave.current - 1]; 
    if (!enemyData) {
      console.log("No more waves configured.");
      return;
    }

    wave.inProgress = true;

    const enemies = spawnEnemiesForWave(
      scene,
      enemyData.count,
      enemyData.enemyType,
      enemyData.stats
    );

    wave.activeEnemies = enemies;
  },

  checkCompletion(scene) {
    const wave = scene.gameState.wave;

    if (!wave.inProgress) return;

    const allDead = wave.activeEnemies.every(e => !e.getData('isAlive'));

    if (allDead) {
      wave.inProgress = false;
      wave.current++; 

      scene.time.delayedCall(2000, () => {
        this.startWave(scene);
      });
    }
  }
};
