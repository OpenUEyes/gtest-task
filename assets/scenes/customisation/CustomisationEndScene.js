class CustomisationEndScene extends Phaser.Scene {

    constructor(nextSceneName) {
        super('CustomisationEndScene');

        this.nextSceneName = nextSceneName;
    }

    init(data){
        this.data = data;
    }

    preload() {
        this.load.image(this.data.backgroundName, this.data.backgroundPath);

        this.load.image(this.data.mainhero.bodyName, this.data.mainhero.bodyPath);
        this.load.image(this.data.mainhero.hairFrontName, this.data.mainhero.hairFrontPath);
        this.load.image(this.data.mainhero.hairBackName, this.data.mainhero.hairBackPath);
        this.load.image(this.data.mainhero.clothesName, this.data.mainhero.clothesPath);

        this.load.image('chosen', 'assets/img/elements/chosen.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextSceneByName(this.nextSceneName, this);
        });

        let chosen = this.add.image(game.config.width / 2, 20, 'chosen');
        chosen.setScale(.9);
        this.add.text(game.config.width / 2 - 50, 10, 'ITEM CHOSEN');

        let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.hairBackName);
        hairBack.setScale(.4);
        let body = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.bodyName);
        body.setScale(.4);
        let clothes = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.clothesName);
        clothes.setScale(.4);
        let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.hairFrontName);
        hairFront.setScale(.4);

    }
}