export function updateMonsterBars(scene, monster) {
  const { hp, maxHp, special, maxSpecial, healthBar, specialBar } = monster.state;

  const width = 200;
  const height = 12;

  // Position in the top-left near the main menu (adjust as needed)
  const barX = 20;
  const barY = 80;
  const spacing = 18;

  const hpPercent = Phaser.Math.Clamp(hp / maxHp, 0, 1);
  const spPercent = Phaser.Math.Clamp(special / maxSpecial, 0, 1);

  // HP bar
  healthBar.clear();
  healthBar.fillStyle(0x000000);
  healthBar.fillRect(barX - 2, barY - 2, width + 4, height + 4);
  healthBar.fillStyle(0x00ff00);
  healthBar.fillRect(barX, barY, width * hpPercent, height);

  // Special bar just below HP
  const spY = barY + spacing;
  specialBar.clear();
  specialBar.fillStyle(0x000000);
  specialBar.fillRect(barX - 2, spY - 2, width + 4, height + 4);
  specialBar.fillStyle(0x00aaff);
  specialBar.fillRect(barX, spY, width * spPercent, height);
}
