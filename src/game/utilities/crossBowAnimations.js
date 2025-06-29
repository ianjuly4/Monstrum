export function crossBowAnimations(scene){
    const anims = scene.anims;

    if(anims.exists('greenDart')) return
  

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