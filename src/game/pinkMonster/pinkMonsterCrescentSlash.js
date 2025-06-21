import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterCrescentSlash(scene, selected = false) {
  const { monsters } = scene.gameState;
  const pinkMonster = monsters?.pinkMonster;

  if (!pinkMonster) return;

  if (selected) {
    if (pinkMonster.scaleX > 3 || pinkMonster.scaleY > 3) {
      pinkMonster.setScale(3);
      pinkMonster.setPosition(190, 515);
    }

    setMonsterAnimation(scene, pinkMonster, 'pinkmonster_swordAttack2', 'swordAttack2');

    // Slash effect animation
    const redSlash = scene.add.sprite(
      pinkMonster.x + 50,
      pinkMonster.y - 65,
      'redSlash1'
    ).setScale(0.5).setOrigin(0.5).setAlpha(0.70).setDepth(1);
    

    redSlash.anims.play('redSlash');
    
    redSlash.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
    
      redSlash.destroy()
    });

   
   
  }
}
