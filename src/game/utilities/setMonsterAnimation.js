export function setMonsterAnimation(scene, monster, textureKey, animKey) {
    if (!scene || !scene.time || !monster) return;

    // Only change texture if needed
    if (monster.texture.key !== textureKey) {
        monster.setTexture(textureKey);
        //console.log(textureKey)
    }

    // Only play animation if it's not already playing
    if (!monster.anims.isPlaying || monster.anims.currentAnim?.key !== animKey) {
        monster.anims.play(animKey);
    }
     // Schedule frame-based body update after animation changes
    scene.time.delayedCall(10, () => {
            const frame = monster.anims.currentFrame?.frame;
            if (!frame || !monster.body) return;

            // Resize body to match frame
            monster.body.setSize(frame.realWidth, frame.realHeight);

            // Offset body to align with sprite center
            monster.body.setOffset(
                (monster.width - frame.realWidth) / 2,
                monster.height - frame.realHeight
            );

        });
}
