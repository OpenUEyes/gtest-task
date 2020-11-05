class CustomisationControllerScene extends Phaser.Scene {
    constructor() {
        super('CustomisationControllerScene');
    }

    init(data) {
        this.data = data;
        this.data.mainhero = {};
    }

    create() {
        const customisationBackgroundScene = 'CustomisationBackgroundScene';
        const customisationElementsScene = 'CustomisationElementsScene';
        const customisationBodyScene = 'CustomisationBodyScene';
        const customisationHairScene = 'CustomisationHairScene';
        const customisationClothesScene = 'CustomisationClothesScene';
        const customisationEndScene = 'CustomisationEndScene';

        this.game.scene.add(customisationBackgroundScene, new CustomisationBackgroundScene(customisationElementsScene));
        this.game.scene.add(customisationElementsScene, new CustomisationElementsScene(customisationBodyScene));
        this.game.scene.add(customisationBodyScene, new CustomisationBodyScene(customisationHairScene));
        this.game.scene.add(customisationHairScene, new CustomisationHairScene(customisationClothesScene));
        this.game.scene.add(customisationClothesScene, new CustomisationClothesScene(customisationEndScene));
        this.game.scene.add(customisationEndScene, new CustomisationEndScene('DialogueControllerScene'));
        this.game.scene.add('DialogueControllerScene', new DialogueControllerScene());

        ControllerScene.nextSceneByName(customisationBackgroundScene, this)
    }
}