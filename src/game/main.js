
import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { SelectCharacter } from './scenes/selectCharacter';
import { Cinematic } from './scenes/Cinematic';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: AUTO,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1204,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            enableBody: true,
            //debug: true
        }
    },
    scene: [
        //MainMenu,
        SelectCharacter,
        Cinematic,
        MainGame,
        GameOver,
       
    ]
};


const StartGame = (parent) => {

    return new Game({ ...config, parent });

}

export default StartGame;
