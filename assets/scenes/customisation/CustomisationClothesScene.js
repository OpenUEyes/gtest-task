class CustomisationClothesScene extends Phaser.Scene {

    constructor(nextSceneName) {
        super('CustomisationClothesScene');

        this.clothesName = 'clothes1';
        this.clothesPath = 'assets/img/customisation/clothes/cloths_f_regular_8.png';
        this.nextSceneName = nextSceneName;

    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image(this.data.backgroundName, this.data.backgroundPath);
        this.load.image(this.data.buttonName, this.data.buttonPath);
        this.load.image(this.data.vectorRightName, this.data.vectorRightPath);
        this.load.image(this.data.vectorLeftName, this.data.vectorLeftPath);

        this.load.image(this.data.mainhero.bodyName, this.data.mainhero.bodyPath);
        this.load.image(this.data.mainhero.hairFrontName, this.data.mainhero.hairFrontPath);
        this.load.image(this.data.mainhero.hairBackName, this.data.mainhero.hairBackPath);


        this.load.image(this.clothesName, this.clothesPath);
        this.load.image('clothes2', 'assets/start/clothes/cloths_f_regular_9.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);

        let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.hairBackName);
        hairBack.setScale(.4);

        let body = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.bodyName);
        body.setScale(.4);

        let clothes = this.add.image(game.config.width / 2, game.config.height / 2, this.clothesName);
        clothes.setScale(.4);

        let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.hairFrontName);
        hairFront.setScale(.4);

        let form = this.add.text(80, game.config.height - 150, 'Select your clothes');
        form.setScale(1.5);

        let button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    this.data.mainhero.clothesName = this.clothesName;
                    this.data.mainhero.clothesPath = this.clothesPath;
                    ControllerScene.nextSceneByName(this.nextSceneName, this);
                }
            );
        button.setScale(.8);
        let text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');

        function executeButton(scene, clothesName, clothesPath) {
            hairBack.destroy();
            hairFront = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.hairFrontName);
            hairFront.setScale(.4);

            body.destroy();
            body = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.bodyName);
            body.setScale(.4);

            clothes.destroy();
            clothes = scene.add.image(game.config.width / 2, game.config.height / 2, clothesName);
            clothes.setScale(.4);

            hairFront.destroy();
            hairFront = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.hairFrontName);
            hairFront.setScale(.4);

            form.destroy();
            form = scene.add.text(80, game.config.height - 150, 'Select your clothes');
            form.setScale(1.5);

            button.destroy();
            button = scene.add.image(game.config.width / 2, game.config.height - 50, 'button')
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    scene.data.mainhero.clothesName = clothesName;
                    scene.data.mainhero.clothesPath = clothesPath;
                        ControllerScene.nextSceneByName(scene.nextSceneName, scene);
                    }
                );
            button.setScale(.8);

            text.destroy();
            text = scene.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');
        }

        this.add.image(40, game.config.height / 2, this.data.vectorLeftName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    // default
                    executeButton(this,
                        this.clothesName, this.clothesPath);
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, this.data.vectorRightName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    executeButton(this,
                        'clothes2', 'assets/start/clothes/cloths_f_regular_9.png');
                }
            );
    }
}