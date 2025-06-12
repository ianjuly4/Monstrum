//createCharacterBox
import { setMonsterAnimation } from "./setMonsterAnimation";
import { pinkMonsterSpecial } from "./pinkMonsterSpecial";
import {whiteMonsterSpecial} from "./whiteMonsterSpecial";
import { clearCharacterBox } from "./clearCharacterBox";
import { whiteMonsterFireball } from "./whiteMonsterFireball";
import { whiteMonsterPetrification } from "./whiteMonsterPetrification";

export function createCharacterBox(scene, x, y, width, height, text, characterKey) {
        // Remove old UI
        if (scene.textBox) scene.textBox.destroy();
        if (scene.textText) scene.textText.destroy();
        scene.optionButtons.forEach(btn => btn.destroy());
        scene.optionButtons = [];
        scene.selectedMonster = scene.gameState.monsters[characterKey];
        //console.log(this.selectedMonster.texture.key)

        // Box background
        scene.textBox = scene.add.graphics();
        scene.textBox.fillStyle(0x000000, 0.7);
        scene.textBox.fillRoundedRect(x, y, width, height, 10);
        scene.textBox.lineStyle(2, 0xffffff);
        scene.textBox.strokeRoundedRect(x, y, width, height, 10);

        // Text
        scene.textText = scene.add.text(x + 10, y + 5, text, {
            fontFamily: 'Arial',
            fontSize: '16px',
            color: '#ffffff',
            wordWrap: { width: width - 20 }
        });
        // Pinkmonster Characterbox
        if(characterKey == 'pinkMonster'){
        // Buttons
        const meleAttackBtn = scene.add.text(x + width / 2, y + 100, 'Melee',{
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 },
        }).setOrigin(0.5).setInteractive();
    
        const attack1Btn = scene.add.text(x + width / 2, y + 130, 'Stab ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const attack2Btn = scene.add.text(x + width / 2, y + 160, 'Slash ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const specialBtn = scene.add.text(x + width / 2, y + 190, 'Titan', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const chooseBtn = scene.add.text(x + width / 2, y + 220, ' Select This Monster?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const exitBtn = scene.add.text(x + width / 2, y + 250, ' Exit?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        meleAttackBtn.on('pointerdown', () => {
            const monster = scene.gameState.monsters.pinkMonster;
        
            if (monster.scaleX > 3|| monster.scaleY > 3) {  
                monster.setScale(3);
                monster.setPosition(190, 515);
            }
        
            setMonsterAnimation(scene, monster, 'pinkmonster_meleAttack2', 'meleAttack2');
        });

        attack1Btn.on('pointerdown', () => {
            const monster = scene.gameState.monsters.pinkMonster;
        
            if (monster.scaleX > 3|| monster.scaleY > 3) {  
                monster.setScale(3);
                monster.setPosition(190, 515);
            }
        
            setMonsterAnimation(scene, monster, 'pinkmonster_swordAttack1', 'swordAttack1');
        });
        
        attack2Btn.on('pointerdown', ()=>{
            const monster = scene.gameState.monsters.pinkMonster;
            if(monster.scaleX > 3 || monster.scaleY > 3){
                //monster.setOrigin(0.5, 1)
                //monster.setOffset(0, 0);
                monster.setScale(3);
                monster.setPosition(190, 515)
            }
            setMonsterAnimation(scene, monster, 'pinkmonster_swordAttack2', 'swordAttack2')
        })

        specialBtn.on('pointerdown', () => {
            const monster = scene.gameState.monsters.pinkMonster;
            //console.log(scene.gameState.monsters.pinkMonster.x, scene.gameState.monsters.pinkMonster.y)
            //monster.setOrigin(0.5, 1)
            //monster.setOffset(0, 0);
            pinkMonsterSpecial(scene, true)
          
            //console.log(this.gameState.monsters.pinkMonster.frameHeight, this.gameState.monsters.pinkMonster.frameWidth)
        });


        chooseBtn.on('pointerdown', () => {
            scene.registry.set('selectedCharacter', characterKey);
            scene.scene.start('Cinematic');
        });
        exitBtn.on('pointerdown', ()=>{
           clearCharacterBox(scene)
        })

        scene.optionButtons = [meleAttackBtn,attack1Btn,attack2Btn, specialBtn, chooseBtn, exitBtn];
        scene.selectedOptionIndex = 0;
        scene.updateButtonHighlight();
        }
       
    //White Monster Character Box
    if(characterKey == 'whiteMonster'){

        // Buttons
        const attack1Btn = scene.add.text(x + width / 2, y + 100, 'Fireball',{
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 },
        }).setOrigin(0.5).setInteractive();
    
        const attack2Btn = scene.add.text(x + width / 2, y + 130, 'Petrification ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const attack3Btn = scene.add.text(x + width / 2, y + 160, 'Falling Stars ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const specialBtn = scene.add.text(x + width / 2, y + 190, 'Kameha', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const chooseBtn = scene.add.text(x + width / 2, y + 220, ' Select This Monster?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const exitBtn = scene.add.text(x + width / 2, y + 250, ' Exit?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        attack1Btn.on('pointerdown', ()=>{
          
            whiteMonsterFireball(scene, true)

        })
        attack2Btn.on('pointerdown', ()=>{
            whiteMonsterPetrification(scene, true)
        })

        specialBtn.on('pointerdown', () => {
           
          
            whiteMonsterSpecial(scene, true)
          
            
        });


        chooseBtn.on('pointerdown', () => {
            scene.registry.set('selectedCharacter', characterKey);
            scene.scene.start('Cinematic');
        });
        exitBtn.on('pointerdown', ()=>{
            clearCharacterBox(scene)
        })

        scene.optionButtons = [attack1Btn,attack2Btn,attack3Btn, specialBtn, chooseBtn, exitBtn];
        scene.selectedOptionIndex = 0;
        scene.updateButtonHighlight();
        }
      
}