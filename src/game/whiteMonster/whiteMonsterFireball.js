import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function whiteMonsterFireball(scene, selected = false, triggered = false) {
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
    }) 
  }else if(triggered){
    setMonsterAnimation(scene, whiteMonster, 'fireball_attack1', 'fireball_attack');

    whiteMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
      // Create the fireball sprite + hitbox
      const startX = whiteMonster.x + 40;
      const startY = whiteMonster.y - 30;
      const velocityX = 400; // speed of projectile

      // Visual projectile
      const fireBallSprite = scene.add.sprite(startX, startY, 'fire_ball')
        .setDepth(2)
        .setScale(6)
        .setOrigin(0.5, 0.5);
      fireBallSprite.anims.play('fireball');

      // Create hitbox with same position & velocity (no separate sprite)
      const hitbox = createAttackHitbox(scene, {
        x: startX,
        y: startY,
        width: 60,
        height: 40,
        texture: null,  // invisible hitbox, sprite already handled visually
        velocityX: velocityX,
        velocityY: 0,
        targets: wave.activeEnemies,
        damage: 15,
        owner: whiteMonster,
        duration: 1500,
        onHit: (enemy, attacker) => {
          enemy.hp -= 15;
          if (enemy.hp <= 0) {
            enemy.setData('isAlive', false);
            enemy.destroy();
          }
          // Optionally destroy projectile on first hit
          hitbox.destroy();
          fireBallSprite.destroy();
        },
        onDestroy: () => {
          fireBallSprite.destroy();
          whiteMonster.setTexture('whitemonster');
        }
      });
    });
  }
}

