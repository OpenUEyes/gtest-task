class ControllerScene extends Phaser.Scene {
    constructor() {
        super('ControllerScene');
    }

    init() {
        // initialize data (from json)
        this.data = {};
        this.startSceneName = 'CustomisationControllerScene';
    }

    create() {
        this.game.scene.add(this.startSceneName, new CustomisationControllerScene());

        ControllerScene.nextSceneByName(this.startSceneName, this)
    }

    // go to default scene if it's the last scene or continue to next scene
    static nextSceneById(nextId, currentScene) {
        if (nextId === -1) {
            document.location.reload();
        } else {
            currentScene.scene.start(ControllerScene.getSceneName(nextId), currentScene.data);
        }
    }

    static nextSceneByName(name, currentScene) {
        currentScene.scene.start(name, currentScene.data);
    }

    static getSceneName(id) {
        return `scene${id}`;
    }
}