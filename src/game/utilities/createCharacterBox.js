//createCharacterBox
import { setMonsterAnimation } from "./setMonsterAnimation";
import { pinkMonsterSpecial } from "../pinkMonster/pinkMonsterSpecial";
import {whiteMonsterFallingStars} from "../whiteMonster/whiteMonsterFallingStars";
import { clearCharacterBox } from "./clearCharacterBox";
import { whiteMonsterFireball } from "../whiteMonster/whiteMonsterFireball";
import { whiteMonsterPetrification } from "../whiteMonster/whiteMonsterPetrification";
import { whiteMonsterLazerBeam } from "../whiteMonster/whiteMonsterLazerBeam";
import { pinkMonsterIronFist } from "../pinkMonster/pinkMonsterIronFist";
import { pinkMonsterCrescentSlash } from "../pinkMonster/pinkMonsterCrescentSlash";
import { pinkMonsterPiercingStab } from "../pinkMonster/pinkMonsterPiercingStab";
import { blueMonsterShadowBolt } from "../blueMonster/blueMonsterShadowBolt";

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
        scene.originalCharacterDescription = text
        scene.textText.setText(text);

        // Pinkmonster Characterbox
        if(characterKey == 'pinkMonster'){
        // Buttons
        const ironFistBtn = scene.add.text(x + width / 2, y + 130, 'Iron Fist',{
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 },
        }).setOrigin(0.5).setInteractive();
    
        const piercingStabBtn = scene.add.text(x + width / 2, y + 160, 'Piercing Stab ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const crescentSlashBtn = scene.add.text(x + width / 2, y + 190, 'Crescent Slash ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const titanRampageBtn = scene.add.text(x + width / 2, y + 220, 'Titan Rampage', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const chooseBtn = scene.add.text(x + width / 2, y + 250, ' Select This Monster?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const exitBtn = scene.add.text(x + width / 2, y + 280, ' Exit?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        ironFistBtn.on('pointerdown', () => {
            pinkMonsterIronFist(scene, true)
            scene.textText.setText('A brutal close-range punch that sends shockwaves through armor. \n• Damage: 25 | Special Cost: 0\n• Type: Melee \n• Effects: Replenishes Special ');
        });
        ironFistBtn.description = 'A brutal close-range punch that sends shockwaves through armor. \n• Damage: 25 | Special Cost: 0\n• Type: Melee \n• Effects: Replenishes Special ';

        ironFistBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(ironFistBtn);
            scene.updateButtonHighlight();
        });

        ironFistBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        });

        piercingStabBtn.on('pointerdown', () => {
           
        
            pinkMonsterPiercingStab(scene, true);
            scene.textText.setText('A lightning-fast thrust aimed at weak points.\n• Damage: 35 | Special Cost: 15 \n• Type: Weapon Attack \n• Effects: Shield breaker')
        });

        piercingStabBtn.description = 'A lightning-fast thrust aimed at weak points.\n• Damage: 35 | Special Cost: 15 \n• Type: Weapon Attack \n• Effects: Shield breaker';


        piercingStabBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(piercingStabBtn);
            scene.updateButtonHighlight();
        });

        piercingStabBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        })

        crescentSlashBtn.on('pointerdown', ()=>{
            const monster = scene.gameState.monsters.pinkMonster;
            
            pinkMonsterCrescentSlash(scene, true)
            scene.textText.setText('A sweeping arc of steel cuts through all in its path. Hits multiple enemies.\n• Damage: 35 | Special Cost: 25 \n• Type: Weapon Attack \n• Effects: Ignites Enemies On Impact Causing Residual Burn Damage. ')
        })
        crescentSlashBtn.description = 'A sweeping arc of steel cuts through all in its path. Hits multiple enemies.\n• Damage: 35 | Special Cost: 25 \n• Type: Weapon Attack \n• Effects: Ignites Enemies On Impact Causing Residual Burn Damage.';

        crescentSlashBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(crescentSlashBtn);
            scene.updateButtonHighlight();
        });

        crescentSlashBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        });

        titanRampageBtn.on('pointerdown', () => {
            const monster = scene.gameState.monsters.pinkMonster;
            
            pinkMonsterSpecial(scene, true)
            scene.textText.setText('Unleash your Titan form in a seismic smash, shattering the battlefield. \n• Damage: 80 | Special Cost: 50\n• Type: Special\n• Effects: Deals area damage when transforming, immune to most attacks for 5 seconds.')
            
        });
        titanRampageBtn.description = 'Unleash your Titan form in a seismic smash, shattering the battlefield. \n• Damage: 80 | Special Cost: 50\n• Type: Special\n• Effects: Deals area damage when transforming, immune to most attacks for 5 seconds.';

        titanRampageBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(titanRampageBtn);
            scene.updateButtonHighlight();
        });

        titanRampageBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        });

        chooseBtn.on('pointerdown', () => {
            scene.wind1.stop()
            scene.birdchirping.stop()
            clearCharacterBox(scene)
            const nextScene = scene.selectedMode === 'battlegrounds' ? 'NewBattlegrounds' : 'Cinematic';
            scene.registry.set('NewBattlegrounds', characterKey);
            scene.scene.start(nextScene, { selectedCharacter: characterKey });

        });
        chooseBtn.description = text;

        chooseBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(chooseBtn);
            scene.updateButtonHighlight();
        });

        exitBtn.on('pointerdown', ()=>{
           clearCharacterBox(scene)
        });
        exitBtn.description = text;

        exitBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(exitBtn);
            scene.updateButtonHighlight();
        });

        scene.optionButtons = [ironFistBtn,piercingStabBtn,crescentSlashBtn, titanRampageBtn, chooseBtn, exitBtn];
        scene.selectedOptionIndex = 4;
        scene.updateButtonHighlight();
        }
 

    //White Monster Character Box
    if(characterKey == 'whiteMonster'){

        // Buttons
        const fireBallBtn = scene.add.text(x + width / 2, y + 130, 'Fireball',{
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 },
        }).setOrigin(0.5).setInteractive();
       
    
        const petrificationBtn = scene.add.text(x + width / 2, y + 160, 'Petrification ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();
       

        const lazerBeamBtn = scene.add.text(x + width / 2, y + 190, 'Lazerbeam ', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();
       

        const fallingStarsBtn = scene.add.text(x + width / 2, y + 220, 'Falling Stars', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();
       

        const chooseBtn = scene.add.text(x + width / 2, y + 250, ' Select This Monster?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();
        
        const exitBtn = scene.add.text(x + width / 2, y + 280, ' Exit?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();
       
        fireBallBtn.on('pointerdown', () => {
            whiteMonsterFireball(scene, true);
            scene.textText.setText("Unleash a blazing orb of flame that scorches a single enemy.\n• Damage: 30 Special Cost: 0\n• Type: Projectile\n• Effects: Slowly Replenishes Special")
        });
        fireBallBtn.description = 'Unleash a blazing orb of flame that scorches a single enemy.\n• Damage: 30 Special Cost: 0\n• Type: Projectile\n• Effects: Slowly Replenishes Special';


        fireBallBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(fireBallBtn);
            scene.updateButtonHighlight();
        });

        fireBallBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        });

        petrificationBtn.on('pointerdown', ()=>{
            whiteMonsterPetrification(scene, true)
            scene.textText.setText("A cursed gaze that hardens foes into stone, rendering them immobile.\n• Damage: 15 | Special Cost: 30\n• Type: Stun attack\n• Effects: Stuns Enemies For 10 Seconds")
        });
        petrificationBtn.description = "A cursed gaze that hardens foes into stone, rendering them immobile.\n• Damage: 15 | Special Cost: 30\n• Type: Stun attack\n• Effects: Stuns Enemies For 10 Seconds "

        petrificationBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(petrificationBtn);
            scene.updateButtonHighlight();
        });

        petrificationBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        });

        lazerBeamBtn.on('pointerdown', ()=>{
            whiteMonsterLazerBeam(scene, true)
            scene.textText.setText("A concentrated beam of pure energy sears through anything in its path.\n• Damage: 40 | Special Cost: 20\n• Type: Energy Blast\n• Effects: Pierces All Enemies In A Straight Line, Ignoring Shields ")
        });
        lazerBeamBtn.description = "A concentrated beam of pure energy sears through anything in its path.\n• Damage: 40 | Special Cost: 20\n• Type: Energy Blast\n• Effects: Pierces All Enemies In A Straight Line, Ignoring Shields "
        
        lazerBeamBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(lazerBeamBtn);
            scene.updateButtonHighlight();
        });

        lazerBeamBtn.on('pointerout', ()=>{
            scene.textText.setText(scene.originalCharacterDescription);
        });

        fallingStarsBtn.on('pointerdown', () => {  
            whiteMonsterFallingStars(scene, true)
            scene.textText.setText("Summon a cosmic barrage that rains destruction from the heavens.\n• Damage: 80 | Special Cost: 50\n• Type: Special\n• Effects: Blankets The Ground With Explosive Star Impacts")    
        });
        fallingStarsBtn.description = "Summon a cosmic barrage that rains destruction from the heavens.\n• Damage: 80 | Special Cost: 50\n• Type: Special\n• Effects: Blankets The Ground With Explosive Star Impacts"

        fallingStarsBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(fallingStarsBtn);
            scene.updateButtonHighlight();
        });

        chooseBtn.on('pointerdown', () => {
            clearCharacterBox(scene)
            const nextScene = scene.selectedMode === 'battlegrounds' ? 'Battlegrounds' : 'Cinematic';
            scene.registry.set('selectedCharacter', characterKey); 
            scene.scene.start(nextScene, { selectedCharacter: characterKey });

        });
        exitBtn.on('pointerdown', ()=>{
            clearCharacterBox(scene)
        })

        scene.optionButtons = [fireBallBtn,petrificationBtn,lazerBeamBtn,fallingStarsBtn, chooseBtn, exitBtn];
        scene.selectedOptionIndex = 4;
        scene.updateButtonHighlight();
        }

    if(characterKey == 'bluemonster'){
         const shadowBoltBtn = scene.add.text(x + width / 2, y + 130, 'Shadowbolt',{
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 },
        }).setOrigin(0.5).setInteractive();
    
        const arcBoltBtn = scene.add.text(x + width / 2, y + 160, 'Arcbolt', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const phantomVolleyBtn = scene.add.text(x + width / 2, y + 190, 'Phantom Volley', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const shadowShiftBtn = scene.add.text(x + width / 2, y + 220, 'Shadow Shift', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const chooseBtn = scene.add.text(x + width / 2, y + 250, ' Select This Monster?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        const exitBtn = scene.add.text(x + width / 2, y + 280, ' Exit?', {
            fontSize: '18px',
            backgroundColor: '#222222',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setInteractive();

        shadowBoltBtn.on('pointerdown', () => {  
            blueMonsterShadowBolt(scene, true)
            scene.textText.setText("A standard crossbow bolt fired with lethal precision.\n• Damage: 20 | Special Cost: 0\n• Type: Weapon Attack\n• Effects: Slowly Replenishes Special With Each Hit")    
        });
        shadowBoltBtn.description = "A standard crossbow bolt fired with lethal precision.\n• Damage: 20 | Special Cost: 0\n• Type: Weapon Attack\n• Effects: Slowly Replenishes Special With Each Hit"

        shadowBoltBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(shadowBoltBtn);
            scene.updateButtonHighlight();
        });

        arcBoltBtn.on('pointerdown', () => {  
            //whiteMonsterFallingStars(scene, true)
            scene.textText.setText("An electrified bolt that crackles with energy, shocking enemies on impact.\n• Damage: 35 | Special Cost: 15\n• Type: Weapon Attack\n• Effects: Breaks Enemies Shields")    
        });
        arcBoltBtn.description = "An electrified bolt that crackles with energy, shocking enemies on impact.\n• Damage: 35 | Special Cost: 15\n• Type: Weapon Attack\n• Effects: Breaks Enemies Shields"

        arcBoltBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(arcBoltBtn);
            scene.updateButtonHighlight();
        });

        phantomVolleyBtn.on('pointerdown', () => {  
            //whiteMonsterFallingStars(scene, true)
            scene.textText.setText("A single bolt that splits mid-air into multiple electrified arrows, striking several targets at once.\n• Damage: 75 | Special Cost: 35\n• Type: Weapon Attack\n• Effects: Barrages The Battlefield With Electrified Arrows")    
        });
        phantomVolleyBtn.description = "A single bolt that splits mid-air into multiple electrified arrows, striking several targets at once.\n• Damage: 75 | Special Cost: 35\n• Type: Weapon Attack\n• Effects: Barrages The Battlefield With Electrified Arrows"

        phantomVolleyBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(phantomVolleyBtn);
            scene.updateButtonHighlight();
        });

        shadowShiftBtn.on('pointerdown', () => {  
            //whiteMonsterFallingStars(scene, true)
            scene.textText.setText("Instantly vanish into the shadows and reappear at a nearby location.\n• Damage: 60 | Special Cost: 50\n• Type: Special\n• Effects: Instantly vanish into the shadows and reappear at a nearby location")    
        });
        shadowShiftBtn.description = "Instantly vanish into the shadows and reappear at a nearby location.\n• Damage: 60 | Special Cost: 50\n• Type: Special\n• Effects: Instantly vanish into the shadows and reappear at a nearby location"

        shadowShiftBtn.on('pointerover', () => {
            scene.selectedOptionIndex = scene.optionButtons.indexOf(shadowShiftBtn);
            scene.updateButtonHighlight();
        });

        chooseBtn.on('pointerdown', () => {
            clearCharacterBox(scene)
            const nextScene = scene.selectedMode === 'battlegrounds' ? 'Battlegrounds' : 'Cinematic';
            scene.registry.set('selectedCharacter', characterKey); 
            scene.scene.start(nextScene, { selectedCharacter: characterKey });

        });
        exitBtn.on('pointerdown', ()=>{
            clearCharacterBox(scene)
        })

        scene.optionButtons = [shadowBoltBtn,arcBoltBtn,phantomVolleyBtn,shadowShiftBtn, chooseBtn, exitBtn];
        scene.selectedOptionIndex = 4;
        scene.updateButtonHighlight();
    }
      
}