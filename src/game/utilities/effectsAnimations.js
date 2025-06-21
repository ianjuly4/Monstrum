export function effectsAnimations(scene){
    scene.anims.create({
        key: 'blueSlash',
        frames: [
                {key:'blueSlash1'},
                {key:'blueSlash2'},
                {key:'blueSlash3'},
                {key:'blueSlash4'},
                {key:'blueSlash5'},
                {key:'blueSlash6'},
                {key:'blueSlash7'},
                {key:'blueSlash8'}
            ],
        frameRate: 8,
        repeat: 0
    });
    scene.anims.create({
        key: 'redSlash',
        frames: [
                {key:'redSlash1'},
                {key:'redSlash2'},
                {key:'redSlash3'},
                {key:'redSlash4'},
                {key:'redSlash5'},
                {key:'redSlash6'},
                //{key:'redSlash7'},
                //{key:'redSlash8'}
            ],
        frameRate: 7,
        repeat: 0
    });

    scene.anims.create({
        key: 'redSlashProjectile',
        frames: [
                {key:'redSlash1'},
                {key:'redSlash2'},
                {key:'redSlash3'},
                {key:'redSlash4'},
                {key:'redSlash5'},
                {key:'redSlash6'},
                //{key:'redSlash7'},
                //{key:'redSlash8'}
            ],
        frameRate: 7,
        repeat: -1
    });

    scene.anims.create({
        key: 'greenDart',
        frames: [
            //{key: 'greenDart1'},
            //{key: 'greenDart2'},
            {key: 'greenDart3'},
            {key: 'greenDart4'}
        ],
        frameRate: 6,
        repeat: 0
    })
}