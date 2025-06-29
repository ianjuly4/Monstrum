import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function pinkMonsterSpecial(scene, selected = false) {
    const {  monsters} = scene.gameState;
    const pinkMonster = monsters?.pinkMonster;

    if (!pinkMonster) return;

    const camera = scene.cameras.main;

    if (selected) {
     
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
                        duration: 100,
                        onComplete: () => {
                            scene.cameras.main.shake(150, 0.01)}
                    });
                }

                currentFrame++;
                setTimeout(playLightning, 100);
            } else {
                lightning.destroy();

                pinkMonster.setScale(8);
                pinkMonster.setOrigin(0.5, 1);

                
                    pinkMonster.setPosition(190, 515);
                    setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack1', 'meleAttack1');
                    setMonsterAnimation(scene, pinkMonster, 'pinkmonster_meleAttack2', 'meleAttack2')
                    const punch1 = scene.sound.add('punch1', { volume: 0.2 });
                    const punch6 = scene.sound.add('punch6', { volume: 0.2 });

                    
                    punch1.once('complete', () => {
                        punch6.play();
                    });
                    punch1.play();
             
                
                setTimeout(() => {
                    blackout.destroy();
                    flash.destroy();
                    
                    
                }, 500);
            }
        };
        const lightningSound = scene.sound.add('lightningSound',{volumne: 0.2})
        lightningSound.play()
        playLightning();
    }

}