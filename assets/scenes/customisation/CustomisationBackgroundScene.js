class CustomisationBackgroundScene extends Phaser.Scene {
    constructor(nextSceneName) {
        super('CustomisationBackgroundScene');

        this.backgroundName = 'customisation';
        this.nextSceneName = nextSceneName;
    }

    // load data from previous scene and add more
    init(data) {
        this.data = data;
        this.data.backgroundName = this.backgroundName;
        this.data.backgroundPath = `assets/img/backgrounds/background_${this.backgroundName}.png`;
    }

    create() {
        ControllerScene.nextSceneByName(this.nextSceneName, this);
    }
}