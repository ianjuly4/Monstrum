
export function clearCharacterBox(scene) {

        if (scene.textBox) scene.textBox.destroy();
        if (scene.textText) scene.textText.destroy();
        scene.optionButtons.forEach(btn => btn.destroy());
        scene.optionButtons = [];
        if (scene.selectedMonster) {
            const key = Object.keys(scene.gameState.monsters).find(k => scene.gameState.monsters[k] === scene.selectedMonster);
           
            // Reset pink monster only if selected
            if (key === 'pinkMonster') {
                if (scene.selectedMonster.scaleX > 3 || scene.selectedMonster.scaleY > 3) {
                    console.log(scene.selectedMonster.x, scene.selectedMonster.y)
                    scene.selectedMonster.setPosition(190,515);
                    scene.selectedMonster.setScale(3) 
                    }else{
                    scene.selectedMonster.anims.stop();
                    scene.selectedMonster.setTexture('pinkmonster');
                    scene.selectedMonster.setPosition(190,515); 
                    }

            } else {
                scene.selectedMonster.setTexture(key.toLowerCase());
            }

            scene.selectedMonster = null;
        }
    }
