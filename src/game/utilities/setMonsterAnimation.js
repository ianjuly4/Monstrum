export function setMonsterAnimation(scene, monster, textureKey, animKey) {
    if (!monster) return;

    // Get current bottom Y position (to keep feet fixed)
    const bottomY = monster.y + monster.displayHeight * (1 - monster.originY);

    // Change texture if different
    if (monster.texture.key !== textureKey) {
        monster.setTexture(textureKey);
    }

    // Play animation if not already playing it
    if (!monster.anims.isPlaying || monster.anims.currentAnim?.key !== animKey) {
        monster.anims.play(animKey);
    }

    // Wait a tick to ensure frame is available
    scene.time.delayedCall(10, () => {
        const frame = monster.anims.currentFrame?.frame;
        if (!frame || !monster.body) return;

        // Resize physics body to match frame
        monster.body.setSize(frame.realWidth, frame.realHeight);

        // Align body with bottom of sprite
        monster.body.setOffset(
            (monster.width - frame.realWidth) / 2,
            monster.height - frame.realHeight
        );

        // Adjust Y position to keep feet on ground
        const newDisplayHeight = frame.realHeight * monster.scaleY;
        monster.y = bottomY - newDisplayHeight * (1 - monster.originY);
    });
}
