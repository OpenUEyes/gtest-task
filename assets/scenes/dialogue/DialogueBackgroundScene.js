class DialogueBackgroundScene extends Phaser.Scene {
    constructor(id, backgroundName, nextId) {
        super(ControllerScene.getSceneName(id));

        this.id = id;
        this.backgroundName = backgroundName;
        this.nextId = nextId;
    }

    init(data) {
        this.data = data;
        this.data.backgroundName = this.backgroundName;
        this.data.backgroundPath = `assets/img/backgrounds/${this.backgroundName}.jpg`;
    }

    create() {
        ControllerScene.nextSceneById(this.nextId, this);
    }
}