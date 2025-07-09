export function setMonsterAnimation(scene, monster, textureKey, animKey) {
    if (!scene || !scene.time || !monster) return;

    // Only play if it's a different animation
    const changingAnim = !monster.anims.isPlaying || monster.anims.currentAnim?.key !== animKey;
    const bottomY = monster.y + monster.displayHeight * (1 - monster.originY);

    if (monster.texture.key !== textureKey) {
        monster.setTexture(textureKey);
    }

    if (changingAnim) {
        monster.anims.play(animKey);

        scene.time.delayedCall(10, () => {
            const frame = monster.anims.currentFrame?.frame;
            if (!frame || !monster.body) return;

            monster.body.setSize(frame.realWidth, frame.realHeight);
            monster.body.setOffset(
                (monster.width - frame.realWidth) / 2,
                monster.height - frame.realHeight
            );
            
            const newDisplayHeight = frame.realHeight * monster.scaleY;
            monster.y = bottomY - newDisplayHeight * (1 - monster.originY);
        });
    }
}
