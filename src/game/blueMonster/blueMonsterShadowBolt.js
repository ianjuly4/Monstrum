import { setMonsterAnimation } from "../utilities/setMonsterAnimation";

export function blueMonsterShadowBolt(scene, selected = false){
    const { monsters  } = scene.gameState;
    const blueMonster = monsters?.blueMonster;

    if (!blueMonster) return;

    if (selected) {

        setMonsterAnimation(scene, blueMonster, 'bluemonster_attack', 'blueMonsterAttack' )
        const shadowBolt = scene.add.sprite(
            blueMonster.x + 5,
            blueMonster.y - 55,
            "shadowBolt_attack"
        ).setScale(3).setFlipX(true)

        shadowBolt.anims.play('shadowBolt')
        console.log(shadowBolt.x, shadowBolt.y)
        blueMonster.once(Phaser.Animations.Events.ANIMATION_COMPLETE, ()=>{

            const bolt = scene.add.sprite(
            blueMonster.x - 110,
            blueMonster.y - 45,
            'greenDart1'
            )
            .setDepth(2)
            .setScale(0.5)
            .setFlipX(true)
            .setOrigin(0.5, 0.5);

            bolt.anims.play('greenDart');
            scene.tweens.add({
                targets: bolt,
                x: blueMonster.x - 1000, 
                duration: 1500,           
                ease: 'Linear',
                onComplete: () => {
                    bolt.destroy();
                    shadowBolt.destroy(); 
                    blueMonster.setTexture('bluemonster'); 
                }
                });
        });
    }

}
