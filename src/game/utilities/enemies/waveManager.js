import { spawnEnemiesForWave } from "./spawnEnemiesForWave";
import { waveConfig } from "./waveConfig";

export const waveManager = {
  startWave(scene) {
    const wave = scene.gameState.wave;

    const waveData = waveConfig[wave.current - 1];
    if (!waveData) {
      console.log("No more waves configured.");
      return;
    }

    wave.inProgress = true;

    const enemies = spawnEnemiesForWave(scene, waveData);
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
