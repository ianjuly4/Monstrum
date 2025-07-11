export function spawnEnemiesForWave(
  scene,
  count,
  enemyType = 'enemySprite',
  stats = { hp: 100, damage: 10 }
) {
  const enemies = [];

  const screenWidth = scene.scale.width;

  const minX = screenWidth - 300; 
  const maxX = screenWidth - 50;
  const minY = 600
  const maxY = 300
 

  for (let i = 0; i < count; i++) {
    const randomX = Phaser.Math.Between(minX, maxX);
    const randomY = Phaser.Math.Between(minY, maxY)

    const enemy = scene.physics.add.sprite(randomX, randomY, enemyType)
      .setScale(2)
      .setOrigin(0.5, 1)
      .setDepth(2);

    enemy.setData('isAlive', true);
    enemy.hp = stats.hp;
    enemy.damage = stats.damage;

    scene.physics.add.collider(enemy, scene.platforms);
    enemy.setCollideWorldBounds(true);
    enemy.body.setAllowGravity(false);
    enemies.push(enemy);
  }

  return enemies;
}
