export function pinkMonsterSpecial(scene, triggered = false) {
    const { special, monsters, isUsingSpecial } = scene.gameState;
    const pinkMonster = monsters?.pinkMonster;
  
    if (!pinkMonster) return;
  
    const isOnGround = pinkMonster.body.blocked.down || pinkMonster.body.touching.down;
    const camera = scene.cameras.main;
  
    if (special >= 50 && triggered && !isUsingSpecial && isOnGround) {

        scene.gameState.isUsingSpecial = true;
        scene.gameState.special -= 50;
        pinkMonster.anims.stop();
        pinkMonster.setTexture('pinkmonster');
    
        const blackout = scene.add.rectangle(0, 0, camera.width * 2, camera.height * 2, 0x000000, 0.5)
            .setScrollFactor(0)
            .setDepth(99)
            .setOrigin(0);
    
        const flash = scene.add.rectangle(0, 0, camera.width * 2, camera.height * 2, 0xffffff, 1)
            .setScrollFactor(0)
            .setDepth(98)
            .setOrigin(0)
            .setAlpha(0);
    
        const lightningFrames = [
            'lightningArrow',
            'lightningArrow2',
            'lightningImpact',
            'lightningImpact2',
            'lightningImpact3'
        ];
    
        const lightning = scene.add.image(pinkMonster.x, 250, lightningFrames[0])
            .setScale(1)
            .setDepth(100);
    
        let currentFrame = 0;

      
        const playLightning = () => {
            if (currentFrame < lightningFrames.length) {
            lightning.setTexture(lightningFrames[currentFrame]);
          
            if (lightningFrames[currentFrame] === 'lightningImpact2') {
                flash.setAlpha(1);
                scene.tweens.add({
                targets: flash,
                alpha: 0,
                duration: 100
                });
            }
    
            currentFrame++;
            setTimeout(playLightning, 100);
            } else {
            lightning.destroy();
            pinkMonster.setScale(8);
            pinkMonster.body.setOffset(0, 0);
            pinkMonster.setPosition(pinkMonster.x, pinkMonster.y - 105);
    
            setTimeout(() => {
                blackout.destroy();
                flash.destroy();
                scene.gameState.isUsingSpecial = false;
            }, 500);
            }
        };
    
        playLightning();
    }
  }
  