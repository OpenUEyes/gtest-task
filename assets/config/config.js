// const config = {
//     type: Phaser.AUTO,
//     mode: Phaser.Scale.FIT,
//     autoCenter: Phaser.Scale.CENTER_BOTH,
//     // width: 375,
//     // height: 667,
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };
const config = {
    type: Phaser.AUTO,
    width: 375,
    height: 667,
    // mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: [ControllerScene]
};
let game = new Phaser.Game(config);