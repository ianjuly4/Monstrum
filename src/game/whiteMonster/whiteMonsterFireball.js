import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function whiteMonsterFireball(scene, selected = false) {
  const { monsters  } = scene.gameState;
  const whiteMonster = monsters?.whiteMonster;

  if (!whiteMonster) return;

  if (selected) {

    setMonsterAnimation(scene, whiteMonster, 'fireball_attack1', 'fireball_attack');

    whiteMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=>{
   
    const fireBall = scene.add.sprite(
      whiteMonster.x + 40,
      whiteMonster.y - 30,
      'fire_ball'
    )
      .setDepth(2)
      .setScale(6)
      .setOrigin(0.5, 0.5);

    const fireBallSound = scene.sound.add('fireBall', {volume: 0.3})
    fireBallSound.play()

        fireBall.anims.play('fireball');
        scene.tweens.add({
            targets: fireBall,
            x: whiteMonster.x + 600, 
            duration: 1500,           
            ease: 'Linear',
            onComplete: () => {
                fireBall.destroy(); 
                whiteMonster.setTexture('whitemonster'); 
            }
        });
    });

   
    
  }
}
