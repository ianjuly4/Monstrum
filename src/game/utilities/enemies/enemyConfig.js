// enemyConfig.js
export const enemyConfig = [
  // Wave 1
  {
    count: 1,
    enemyType: 'enemySprite',
    stats: { hp: 50, damage: 5 }
  },
  // Wave 2
  {
    count: 2,
    enemyType: 'enemySprite',
    stats: { hp: 75, damage: 8 }
  },
  // Wave 3
  {
    count: 3,
    enemyType: 'enemySprite',
    stats: { hp: 100, damage: 12 }
  },
  // Add as many waves as you want...
  // You can switch enemy type at higher waves
  {
    count: 2,
    enemyType: 'eliteEnemySprite',
    stats: { hp: 200, damage: 20 }
  }
];
