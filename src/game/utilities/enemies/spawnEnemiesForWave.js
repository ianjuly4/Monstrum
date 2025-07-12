import { skeleton } from "./skeleton";
//import { hellBoss } from './enemies/hellBoss.js';

const enemyTypes = {
  skeleton,
  //hellBoss,
  // add more as needed
};

export function spawnEnemiesForWave(scene, waveConfig) {
  const enemies = [];

  waveConfig.enemies.forEach(group => {
    const { count, type } = group;

    for (let i = 0; i < count; i++) {
      const x = Phaser.Math.Between(700, 1000);
      const y = Phaser.Math.Between(300, 600);
      const enemy = enemyTypes[type](scene, x, y);
      enemies.push(enemy);
    }
  });

  return enemies;
}
