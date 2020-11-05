class BackgroundScene extends Phaser.Scene {
    constructor(id, backgroundName, nextId) {
        super(ControllerScene.getSceneName(id));

        this.id = id;
        this.backgroundName = backgroundName;
        this.nextId = nextId;
    }

    // load data from previous scene and add more
    init(data) {
        this.data = data;
        this.data.backgroundName = this.backgroundName;
        this.data.backgroundPath = `assets/img/backgrounds/${this.backgroundName}.jpg`;
    }

    create() {
        ControllerScene.nextScene(this.nextId, this);
    }
}