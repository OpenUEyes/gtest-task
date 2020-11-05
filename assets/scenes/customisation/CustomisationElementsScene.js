class CustomisationElementsScene extends Phaser.Scene {
    constructor(nextSceneName) {
        super('CustomisationElementsScene');

        this.buttonName = 'button';
        this.nextSceneName = nextSceneName;
        this.vectorRightName = 'vector-right';
        this.vectorLeftName = 'vector-left';
    }

    init(data) {
        this.data = data;
        this.data.buttonName = this.buttonName;
        this.data.buttonPath = `assets/img/elements/${this.buttonName}.png`;
        this.data.vectorRightName = this.vectorRightName;
        this.data.vectorRightPath = `assets/img/elements/${this.vectorRightName}.png`;
        this.data.vectorLeftName = this.vectorLeftName;
        this.data.vectorLeftPath = `assets/img/elements/${this.vectorLeftName}.png`;
    }
    preload() {
        this.load.image(this.data.buttonName, this.data.buttonPath);
        this.load.image(this.data.vectorRightName, this.data.vectorRightPath);
        this.load.image(this.data.vectorLeftName, this.data.vectorLeftPath);
    }

    create() {
        ControllerScene.nextSceneByName(this.nextSceneName, this);
    }
}