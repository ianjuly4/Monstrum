export function crossBowAnimations(scene){
    scene.anims.create({
        key: 'greenDart',
        frames: [
            {key: 'greenDart1'},
            {key: 'greenDart2'},
            {key: 'greenDart3'},
            {key: 'greenDart4'}
        ],
        frameRate: 6,
        repeat: 0
    })
}