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
        this.load.image(this.data.mainhero.hairFrontName, this.data.mainhero.hairFrontPath);
        this.load.image(this.data.mainhero.hairBackName, this.data.mainhero.hairBackPath);


        this.load.image(this.clothesName, this.clothesPath);
        this.load.image('clothes2', 'assets/img/customisation/clothes/cloths_f_regular_9.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);

        let hairBack, body, clothes, hairFront, form, button, text;

        addImages(this, this.clothesName, this.clothesPath, false);

        function addImages(scene, clothesName, clothesPath, rebuild) {
            if (rebuild) {
                hairBack.destroy();
                body.destroy();
                clothes.destroy();
                hairFront.destroy();
                form.destroy();
                button.destroy();
                text.destroy();
            }

            hairBack = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.hairBackName);
            hairBack.setScale(.4);

            body = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.bodyName);
            body.setScale(.4);

            clothes = scene.add.image(game.config.width / 2, game.config.height / 2, clothesName);
            clothes.setScale(.4);

            hairFront = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.hairFrontName);
            hairFront.setScale(.4);

            form = scene.add.text(80, game.config.height - 150, 'Select your clothes');
            form.setScale(1.5);

            button = scene.add.image(game.config.width / 2, game.config.height - 50, 'button')
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                        scene.data.mainhero.clothesName = clothesName;
                        scene.data.mainhero.clothesPath = clothesPath;
                        ControllerScene.nextSceneByName(scene.nextSceneName, scene);
                    }
                );
            button.setScale(.8);

            text = scene.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');
        }

        this.add.image(40, game.config.height / 2, this.data.vectorLeftName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    // default
                    addImages(this, this.clothesName, this.clothesPath, true);
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, this.data.vectorRightName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    addImages(this,
                        'clothes2', 'assets/img/customisation/clothes/cloths_f_regular_9.png', true);
                }
            );
    }
}